const formatEndpoint = (endpoint) => {
    const end = (endpoint[0] === "/") ? endpoint.stringify(1) : endpoint;
    if (window.location.hostname === "localhost") {
        return "http://127.0.0.1:5000/"+end;
        //return "http://127.0.0.1:5000/project-7097cem/us-central1/"+end;
    } else {
        return "https://us-central1-project-7097cem.cloudfunctions.net/"+end;
    }
};

async function getPublic(endpoint) {
    const response = await fetch(formatEndpoint(endpoint), {
        method: "GET",
        headers: new Headers({
            crossorigin: true,
            "Content-Type": "application/json; charset=UTF-8"
        }),
    })
    .catch(error => console.log(error));

    const result = await response.json();
    console.log(result);
    return result;
}

async function postData(endpoint, data, token=null) {
    const response = await fetch(formatEndpoint(endpoint), {
        method: "POST",
        headers: new Headers({
            crossorigin: true,
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json; charset=UTF-8"
        }),
        body: JSON.stringify(data)
    })
    .catch(error => console.log(error));

    const result = await response.json();
    console.log(result);
    return result;
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