// Import the functions you need from the SDKs you need
let { initializeApp } = require("firebase/app");
let { getFirestore, collection, doc, addDoc, setDoc, getDoc, deleteDoc, updateDoc, query, where, getDocs } = require('firebase/firestore');

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZBVCt1qKZnZV4P2f6_E0lkogL2Fphric",
  authDomain: "project-7097cem.firebaseapp.com",
  projectId: "project-7097cem",
  storageBucket: "project-7097cem.appspot.com",
  messagingSenderId: "396007541262",
  appId: "1:396007541262:web:d120667ad3bf53ed3a0a5f"
};

// Initialize Firebase
initializeApp(firebaseConfig);

saveData = async (col, document, data) => {
  try {
    const db = getFirestore();
    if (document) {
      const docRef = doc(db, col, document);
      await setDoc(docRef, data);
      return data?.username;
    } else {
      const colRef = collection(db, col);
      docRef = await addDoc(colRef, data);
      return docRef.id;
    }
  } catch(err) {
    console.log(err);
  }
}

getData = async (col, document) => {
  try {
    const db = getFirestore();
    const docRef = doc(db, col, document);
    const docSnap = await getDoc(docRef);
    return docSnap.data();
  } catch(err) {
    console.log(err);
  }
}

deleteData = async (col, document) => {
  try {
    const db = getFirestore();
    const docRef = doc(db, col, document);
    await deleteDoc(docRef);
  } catch(err) {
    console.log(err);
  }
}

updateData = async (col, document, data) => {
  try {
    const db = getFirestore();
    await updateDoc(doc(db, col, document), data);
  } catch(err) {
    console.log(err);
  }
}

module.exports = {
  'saveData': saveData,
  'getData': getData,
  'deleteData': deleteData,
  'updateData': updateData
}