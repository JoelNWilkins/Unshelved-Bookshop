const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { saveData, getData, updateData, deleteData, getDataInSubcollection, getDataBatch } = require('./firebase.js');

const app = express();
const PORT = process.env.PORT || 5000;
const SECRET_KEY = 'your_secret_key';

// Allow cross-origin requests
app.use(cors());

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Parse JSON requests
app.use(bodyParser.json());

app.get('/api/books', async (req, res) => {
    console.log(`GET ${req.url}`);
    const books = await getDataBatch('books');
    res.json(books);
});

app.get('/api/data/:col/:document', async (req, res) => {
    console.log(`GET ${req.url}`);
    const { col, document } = req.params;
    if (['authors', 'genres'].includes(col)) {
        if (document === 'all') {
            data = await getDataBatch(col);
            res.json(data);
        } else {
            data = await getData(col, document);
            if (data?.shelves) {
                let shelfData = {};
                for (let shelf of data?.shelves) {
                    if (shelf.includes('/')) {
                        const parts = shelf.split('/');
                        shelfData[shelf] = await getData(parts[0], parts[1]);
                    } else {
                        shelfData[`${col}/${document}/${shelf}`] = await getData(col, document, 'shelves', shelf);
                    }
                }
                data.shelves = shelfData;
            }
            res.json(data);
        }
    } else {
        res.status(401).json({ error: 'Unauthorized' });
    }
});

app.get('/api/data/:col/:document/:subdocument', async (req, res) => {
    console.log(`GET ${req.url}`);
    const { col, document, subdocument } = req.params;
    if (['authors', 'genres'].includes(col)) {
        data = await getData(col, document, 'shelves', subdocument);
        res.json(data);
    } else {
        res.status(401).json({ error: 'Unauthorized' });
    }
});

// API endpoints for user CRUD operations
app.post('/api/register', async (req, res) => {
    console.log(`POST ${req.url}`);
    try {
        const { username, password } = req.body;
        
        // Hash the password before storing it
        const hashedPassword = await bcrypt.hash(password, 10);

        const id = saveData('users', username, {'username': username, 'password': hashedPassword});
        if (id) {
            // Create a JWT token for authentication
            const token = jwt.sign({ userId: id }, SECRET_KEY, { expiresIn: '1h' });
            res.json({ token });
            //res.json({ message: 'User registered successfully' });
        } else {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    } catch(err) {
        console.log(err);
        res.status(500).json({ error: 'Internal Server Error'})
    }
});

app.post('/api/login', async (req, res) => {
    console.log(`POST ${req.url}`);
    try {
        const { username, password } = req.body;
        const details = await getData('users', username);

        if (details?.password !== undefined) {
            const match = await bcrypt.compare(password, details?.password);
            if (match) {
                // Create a JWT token for authentication
                const token = jwt.sign({ 'username': username }, SECRET_KEY, { expiresIn: '1h' });
                
                // Store the session in the database
                saveData('sessions', null, { 'user_id': username, 'token': token })
                
                return res.json({ token });
            }
        }
        res.status(401).json({ error: 'Invalid username or password' });
    } catch(err) {
        console.log(err);
        res.status(500).json({ error: 'Internal Server Error'})
    }
});

// Middleware to verify JWT token
const verifyToken = (req, res, next) => {
    const token = req.header('Authorization');

    if (!token) {
        return res.status(401).json({ error: 'Unauthorized' });
    }

    jwt.verify(token, SECRET_KEY, (err, decoded) => {
        if (err) {
            return res.status(401).json({ error: 'Unauthorized' });
        }

        req.userId = decoded.userId;
        next();
    });
};

// Protected route example
app.get('/api/protected', verifyToken, (req, res) => {
    res.json({ message: 'This is a protected route' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
