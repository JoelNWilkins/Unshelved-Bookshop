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

const formatEndpoint = (endpoint) => {
    const end = (endpoint[0] === "/") ? endpoint.stringify(1) : endpoint;
    if (window.Location.hostname === "localhost") {
        return "http://127.0.0.1:5000/project-7097cem/us-central1/"+end;
    } else {
        return "https://us-central1-project-7097cem.cloudfunctions.net/"+end;
    }
};

async function getPublic(endpoint) {
    const response = await fetch(formatEndpoint(endpoint), {
        method: "GET",
        headers: {crossorigin: true, "Content-Type": "application/json; charset=UTF-8"},
    });
    const data = await response.json();
    console.log(data);
    return data;
}

async function postData(endpoint, data) {
    const callableResponse = httpsCallable(functions, endpoint);
    return callableResponse(data)
    .then(response => {console.log(response.data); data = response.data;})
    .catch(error => {console.log(error); return null;});
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