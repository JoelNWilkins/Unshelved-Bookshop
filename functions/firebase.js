// Import the functions you need from the SDKs you need
const {initializeApp} = require("firebase-admin/app");
const {getFirestore} = require("firebase-admin/firestore");
const {
  collection, doc, // query, where,
  addDoc, setDoc, deleteDoc, updateDoc,
  getDoc, // getDocFromCache, getDocFromServer,
  getDocs, // getDocsFromCache, getDocsFromServer,
  // initializeFirestore, CACHE_SIZE_UNLIMITED,
  // persistentLocalCache, persistentMultipleTabManager
} = require("firebase/firestore");

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app"s Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZBVCt1qKZnZV4P2f6_E0lkogL2Fphric",
  authDomain: "project-7097cem.firebaseapp.com",
  projectId: "project-7097cem",
  storageBucket: "project-7097cem.appspot.com",
  messagingSenderId: "396007541262",
  appId: "1:396007541262:web:d120667ad3bf53ed3a0a5f",
};

// Initialize Firebase
initializeApp(firebaseConfig);

// Use multi-tab IndexedDb persistence.
// initializeFirestore(app, {
//   localCache: persistentLocalCache(/*settings*/{
//     tabManager: persistentMultipleTabManager(),
//     cacheSizeBytes: CACHE_SIZE_UNLIMITED
//   }),
// });

/*
getDoc = async (docRef) => {
  try {
    return getDocFromCache(docRef);
  } catch (err) {
    return getDocFromServer(docRef);
  }
}

getDocs = async (q) => {
  try {
    return getDocsFromCache(q);
  } catch (err) {
    return getDocsFromServer(q);
  }
}
*/

const saveData = async (col, document, data) => {
  try {
    const db = getFirestore();
    if (document) {
      const docRef = doc(db, col, document);
      await setDoc(docRef, data);
      return data?.username;
    } else {
      const colRef = collection(db, col);
      const docRef = await addDoc(colRef, data);
      return docRef.id;
    }
  } catch (err) {
    console.log(err);
  }
};

const saveDataBatch = async (col, data) => {
  try {
    const db = getFirestore();
    Object.keys(data).forEach(async (document) => {
      const docRef = doc(db, col, document);
      await setDoc(docRef, data[document]);
    });
  } catch (err) {
    console.log(err);
  }
};

const saveDataInSubcol = async (col, document, subcol, details, data) => {
  try {
    const db = getFirestore();
    let docRef = doc(db, col, document);
    if (document) {
      await setDoc(docRef, details);
    } else {
      const colRef = collection(db, col);
      docRef = await addDoc(colRef, details);
    }
    const subColRef = collection(docRef, subcol);
    for (const book of data) {
      const subDocRef = doc(subColRef, book.isbn);
      await setDoc(subDocRef, book);
    }
    return docRef.id;
  } catch (err) {
    console.log(err);
  }
};

const getData = async (col, document, subcol, subdocument) => {
  try {
    const db = getFirestore();
    const docRef = doc(db, col, document);
    if (subcol) {
      const subColRef = collection(docRef, subcol);
      if (subdocument) {
        const subDocRef = doc(subColRef, subdocument);
        const subDocSnap = await getDoc(subDocRef);
        return subDocSnap.data();
      } else {
        const subColSnap = await getDocs(subColRef);
        const data = {};
        for (const subDoc of subColSnap.docs) {
          data[`${col}/${document}/${subDoc.id}`] = subDoc.data();
        }
        return data;
      }
    } else {
      const docSnap = await getDoc(docRef);
      return docSnap.data();
    }
  } catch (err) {
    console.log(err);
  }
};

const getDataBatch = async (col) => {
  try {
    const db = getFirestore();
    const colRef = collection(db, col);
    const querySnap = await getDocs(colRef);
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
    const docRef = doc(db, col, document);
    const docSnap = await getDoc(docRef);
    const data = docSnap.data();
    const subColRef = collection(docRef, subcol);
    const subColSnap = await getDocs(subColRef);
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
    const docRef = doc(db, col, document);
    await deleteDoc(docRef);
  } catch (err) {
    console.log(err);
  }
};

const updateData = async (col, document, data) => {
  try {
    const db = getFirestore();
    await updateDoc(doc(db, col, document), data);
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
