const {onRequest} = require("firebase-functions/v2/https");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const {saveData, getData, getDataBatch} = require("./firebase-copy.js");

const SECRET_KEY = "your_secret_key";

const cors = (res) => {
  res.set("Access-Control-Allow-Origin", "https://project-7097cem.web.app");
  res.set("Access-Control-Allow-Methods", "GET, POST");
  res.set("Access-Control-Allow-Headers", "*");
};

exports.books = onRequest(async (req, res) => {
  console.log(`${req.method} /books`);
  cors(res);

  const books = await getDataBatch("books");
  res.status(200).send({data: books});
});

exports.data = onRequest(async (req, res) => {
  console.log(`${req.method} /data${req.url}`);
  cors(res);

  const [col, document, subdocument] = req.url.substring(1).split("/");

  let text = "Col: "+col+", Document: "+document;
  if (subdocument != null) {
    text += ", Subdocument: "+subdocument;
  }
  console.log(text);

  if (["authors", "genres"].includes(col)) {
    let data = {};
    if (document === "all") {
      data = await getDataBatch(col);
    } else {
      if (subdocument != null) {
        data = await getData(col, document, "shelves", subdocument);
      } else {
        data = await getData(col, document);
        if (data?.shelves) {
          const shelfData = {};
          for (const shelf of data.shelves) {
            if (shelf.includes("/")) {
              const parts = shelf.split("/");
              shelfData[shelf] = await getData(parts[0], parts[1]);
            } else {
              const d = await getData(col, document, "shelves", shelf);
              shelfData[`${col}/${document}/${shelf}`] = d;
            }
          }
          data.shelves = shelfData;
        }
      }
    }
    return res.send({"data": data});
  } else {
    return res.status(401).send({error: "Unauthorized", data: null});
  }
});

// API endpoints for user CRUD operations
exports.register = onRequest(async (req, res) => {
  console.log(`${req.method} /register${req.url}`);
  cors(res);

  try {
    const {username, password} = req.body;

    // Hash the password before storing it
    const hashedPassword = await bcrypt.hash(password, 10);
    const credentials = {"username": username, "password": hashedPassword};
    const id = saveData("users", username, credentials);
    if (id) {
      // Create a JWT token for authentication
      const token = jwt.sign({userId: id}, SECRET_KEY, {expiresIn: "1h"});
      return res.send({data: token});
    } else {
      return res.status(500).send({
        error: "Internal Server Error",
        data: null,
      });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).send({
      error: "Internal Server Error",
      data: null,
    });
  }
});

exports.login = onRequest(async (req, res) => {
  console.log(`${req.method} /login${req.url}`);
  cors(res);

  try {
    const {username, password} = req.body;
    const details = await getData("users", username);

    if (details?.password !== undefined) {
      const match = await bcrypt.compare(password, details?.password);
      if (match) {
        // Create a JWT token for authentication, {expiresIn: "1h"}
        const token = jwt.sign({"username": username}, SECRET_KEY);

        // Store the session in the database
        saveData("sessions", null, {"user_id": username, "token": token});
        return res.send({data: token});
      }
    }
    return res.status(401).send({
      error: "Invalid username or password",
      data: null,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).send({
      error: "Internal Server Error",
      data: null,
    });
  }
});

/*
// Middleware to verify JWT token
const verifyToken = (req, res, next) => {
  const token = req.header("Authorization");

  if (!token) {
    return res.status(401).json({error: "Unauthorized"});
  }

  jwt.verify(token, SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(401).json({error: "Unauthorized"});
    }

    req.userId = decoded.userId;
    next();
  });
};

// Protected route example
app.get("/api/protected", verifyToken, (req, res) => {
  res.json({message: "This is a protected route"});
});
*/
