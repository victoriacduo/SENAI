const username = document.querySelector("#usuario");
const senha = document.querySelector("#senha");

function login(){
    let info = {
        "username": username.value,
        "password": senha.value
    }

    fetch("http://10.87.207.2:3000/login", {
        "method":"POST",
        "headers": {
            "Content-Type":"application/json"
        },
        "body": JSON.stringify(info)
    })
    .then(res => {return res.json()})
    .then(data => {
        if(data.erro === undefined) {
            localStorage.setItem("info", JSON.stringify({"username":data.username}));

            window.location.href = "../telaSalgados/index.html";
        }
    });
}