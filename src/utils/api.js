import { initializeApp } from "firebase/app";
import { getFunctions, httpsCallable } from "firebase/functions";

const firebaseConfig = {
    apiKey: "AIzaSyDZBVCt1qKZnZV4P2f6_E0lkogL2Fphric",
    authDomain: "project-7097cem.firebaseapp.com",
    projectId: "project-7097cem",
    storageBucket: "project-7097cem.appspot.com",
    messagingSenderId: "396007541262",
    appId: "1:396007541262:web:d120667ad3bf53ed3a0a5f",
};
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const functions = getFunctions(app);

async function getPublic(endpoint) {
    const callableResponse = httpsCallable(functions, endpoint);
    return callableResponse({})
    .then(response => {console.log(response.data); return response.data})
    .catch(error => console.log(error));
}

async function postData(endpoint, data) {
    const callableResponse = httpsCallable(functions, endpoint);
    return callableResponse(data)
    .then(response => {console.log(response.data); return response.data})
    .catch(error => console.log(error));
}

async function updateData(endpoint, token, data) {
    return fetch(endpoint, {
        method: "POST",
        headers: new Headers({
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json; charset=UTF-8"
        }),
        body: JSON.stringify(data)
    })
    .then(response => {console.log(response); return response.json()})
    .catch(error => console.log(error));
}

async function deleteData(endpoint, token) {
    return fetch(endpoint, {
        method: "DELETE",
        headers: new Headers({Authorization: `Bearer ${token}`})
    })
    .then(response => {console.log(response); return response.json()})
    .catch(error => console.log(error));
}

export { getPublic, postData, updateData, deleteData };