

export function postData(data) {

    let url = "SOME URL"

    const header = {
        "Access-Control-Allow-Origin": '*',
        'Access-Control-Allow-Credentials': true,
        'Access-Control-Allow-Methods': 'POST, GET',
        'Content-Type': 'application/json'
    }

    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify({
            "data": data,
        })
    }

    fetch(irl, requestOptions)
        .then(response => response.json())
        .then(data => {
            console.log(data)
        })
}