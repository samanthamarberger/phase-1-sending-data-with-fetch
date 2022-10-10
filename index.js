const { config } = require("chai");

// Add your code here
// let configurationObject = {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json",
//         "Accept": "application/json",
//     },
// };

function submitData (userName, userEmail) {

    const configurationObject = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify({
            name: userName,
            email: userEmail,
        }),
    };
    console.log(configurationObject);
    return fetch("http://localhost:3000/users", configurationObject)
    .then(function(resp){
        return resp.json();
    })
    .then(function(object) {
        let card = document.createElement('div');
        card.append(object.id);
    })
}