const formatEndpoint = (base, endpoint) => {
    const end = (endpoint[0] === "/") ? endpoint.stringify(1) : endpoint;
    if (window.location.hostname === "localhost") {
        // return "http://127.0.0.1:5000/"+end;
        console.log("http://127.0.0.1:5000/project-7097cem/us-central1/"+base+"/"+end);
        return "http://127.0.0.1:5000/project-7097cem/us-central1/"+base+"/"+end;
    } else {
        return `https://${base}--r5h2aumagq-uc.a.run.app/${end}`;
        //return "https://us-central1-project-7097cem.cloudfunctions.net/"+end;
    }
};

async function getPublic(base, endpoint) {
    const response = await fetch(formatEndpoint(base, endpoint), {
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

async function postData(base, endpoint, data, token=null) {
    const response = await fetch(formatEndpoint(base, endpoint), {
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

async function updateData(base, endpoint, token, data) {
    return fetch(base, endpoint, {
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

async function deleteData(base, endpoint, token) {
    return fetch(base, endpoint, {
        method: "DELETE",
        headers: new Headers({Authorization: `Bearer ${token}`})
    })
    .then(response => {console.log(response); return response.json()})
    .catch(error => console.log(error));
}

export { getPublic, postData, updateData, deleteData };