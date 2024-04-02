async function getData(endpoint, token) {
    return fetch((endpoint[0] === "/") ? endpoint : "/"+endpoint, {
        method: "GET",
        headers: new Headers({Authorization: `Bearer ${token}`})
    })
    .then(response => {return response.json()})
    .catch(error => console.log(error));
}

async function postData(endpoint, data) {
    return fetch((endpoint[0] === "/") ? endpoint : "/"+endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json; charset=UTF-8" },
        body: JSON.stringify(data)
    })
    .then(response => {return response.json()})
    .catch(error => console.log(error));
}

async function updateData(endpoint, token, data) {
    return fetch((endpoint[0] === "/") ? endpoint : "/"+endpoint, {
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
    return fetch((endpoint[0] === "/") ? url+endpoint : url+"/"+endpoint, {
        method: "DELETE",
        headers: new Headers({Authorization: `Bearer ${token}`})
    })
    .then(response => {return response.json()})
    .catch(error => console.log(error));
}

export { getData, postData, updateData, deleteData };