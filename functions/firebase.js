const {
  getFirestore,
} = require("firebase-admin/firestore");

const admin = require("firebase-admin");
const serviceAccount = require("./adminsdk.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const saveData = async (col, document, data) => {
  try {
    const db = getFirestore();
    const colRef = db.collection(col);
    if (document) {
      const docRef = colRef.doc(document);
      await docRef.set(data);
      return data?.username;
    } else {
      const docRef = await colRef.add(data);
      return docRef.id;
    }
  } catch (err) {
    console.log(err);
  }
};

const saveDataBatch = async (col, data) => {
  try {
    const db = getFirestore();
    const docRef = db.collection(col).doc(document);
    Object.keys(data).forEach(async (document) => {
      await docRef.set(data[document]);
    });
  } catch (err) {
    console.log(err);
  }
};

const saveDataInSubcol = async (col, document, subcol, details, data) => {
  try {
    const db = getFirestore();
    const colRef = db.collection(col);
    let docRef;
    if (document) {
      docRef = colRef.doc(document);
      await docRef.set(details);
    } else {
      docRef = await colRef.add(details);
    }
    const subColRef = docRef.collection(subcol);
    for (const book of data) {
      const subDocRef = subColRef.doc(book.isbn);
      await subDocRef.set(book);
    }
    return docRef.id;
  } catch (err) {
    console.log(err);
  }
};

const getData = async (col, document, subcol, subdocument) => {
  try {
    const db = getFirestore();
    const docRef = db.collection(col).doc(document);
    if (subcol) {
      const subColRef = docRef.collection(subcol);
      if (subdocument) {
        const subDocRef = subColRef.doc(subdocument);
        const subDocSnap = await subDocRef.get();
        return subDocSnap.data();
      } else {
        const subColSnap = await subColRef.get();
        const data = {};
        for (const subDoc of subColSnap.docs) {
          data[`${col}/${document}/${subDoc.id}`] = subDoc.data();
        }
        return data;
      }
    } else {
      const docSnap = await docRef.get();
      return docSnap.data();
    }
  } catch (err) {
    console.log(err);
  }
};

const getDataBatch = async (col) => {
  try {
    const db = getFirestore();
    console.log(db.databaseId);
    const colRef = db.collection(col);
    const querySnap = await colRef.get();
    const data = {};
    querySnap.forEach((docSnap) => {
      data[docSnap.id] = docSnap.data();
    });
    return data;
  } catch (err) {
    console.log(err);
  }
};

const getDataInSubcol = async (col, document, subcol) => {
  try {
    const db = getFirestore();
    const docRef = db.collection(col).doc(document);
    const docSnap = await docRef.get();
    const data = docSnap.data();
    const subColRef = docRef.collection(subcol);
    const subColSnap = await subColRef.get();
    data.books = [];
    for (const subDoc of subColSnap.docs) {
      data.books.push(subDoc.data());
    }
    return data;
  } catch (err) {
    console.log(err);
  }
};

const deleteData = async (col, document) => {
  try {
    const db = getFirestore();
    const docRef = db.collection(col).doc(document);
    await docRef.delete();
  } catch (err) {
    console.log(err);
  }
};

const updateData = async (col, document, data) => {
  try {
    const db = getFirestore();
    const docRef = db.collection(col).doc(document);
    await docRef.update(data);
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  "saveData": saveData,
  "getData": getData,
  "deleteData": deleteData,
  "updateData": updateData,
  "saveDataInSubcollection": saveDataInSubcol,
  "getDataInSubcollection": getDataInSubcol,
  "saveDataBatch": saveDataBatch,
  "getDataBatch": getDataBatch,
};
