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
    const end = (endpoint[0] === "/") ? endpoint.substring(1) : endpoint;
    const callableResponse = httpsCallable(functions, end);
    return callableResponse()
    .then(result => {return result.data})
    .catch(error => console.log(error));
}

async function getData(endpoint, token) {
    return fetch((endpoint[0] === "/") ? endpoint.substring(1) : endpoint, {
        method: "GET",
        headers: new Headers({Authorization: `Bearer ${token}`})
    })
    .then(response => {return response.json()})
    .catch(error => console.log(error));
}

async function postData(endpoint, data) {
    /* return fetch((endpoint[0] === "/") ? endpoint : "/"+endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json; charset=UTF-8" },
        body: JSON.stringify(data)
    }) */
    const end = (endpoint[0] === "/") ? endpoint.substring(1) : endpoint;
    const callableResponse = httpsCallable(functions, end);
    return callableResponse(data)
    .then(response => {return response.json()})
    .catch(error => console.log(error));
}

async function updateData(endpoint, token, data) {
    return fetch((endpoint[0] === "/") ? endpoint.substring(1) : endpoint, {
        method: "POST",
        headers: new Headers({
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json; charset=UTF-8"
        }),
        body: JSON.stringify(data)
    })
    .then(response => {return response.json()})
    .catch(error => console.log(error));
}

async function deleteData(endpoint, token) {
    return fetch((endpoint[0] === "/") ? endpoint.substring(1) : endpoint, {
        method: "DELETE",
        headers: new Headers({Authorization: `Bearer ${token}`})
    })
    .then(response => {return response.json()})
    .catch(error => console.log(error));
}

export { getPublic, getData, postData, updateData, deleteData };