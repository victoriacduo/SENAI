const username = document.querySelector("#nome");

var userinfo = JSON.parse(localStorage.getItem("info"));

username.innerHTML = userinfo.username;


function salgados(){

    fetch("http://10.87.207.2:3000/salgados")
    .then((res) => {return res.json()})
    .then((data) => {
        data.forEach(salgado => {
            let novaInfo = document.querySelector(".corpo").cloneNode(true);
            novaInfo.classList.remove("model");

            novaInfo.querySelector("#fotoSalgado").src ="../assets/" + salgado.foto;
            novaInfo.querySelector("#nomeSalgado").innerHTML = salgado.nome;
            novaInfo.querySelector("#descricao").innerHTML = salgado.descricao;
            novaInfo.querySelector("#idSalgado").innerHTML = salgado.id;
            novaInfo.querySelector("#remover").addEventListener("click", () => { remover(salgado.id); })

            document.querySelector(".sla").appendChild(novaInfo);
        })
    })
}

function remover(id) {
    fetch("http://10.87.207.2:3000/salgados/" + id, {
        "method":"DELETE"
    })
    .then(resp => resp.json())
    .then(resp => console.log(resp))
    .catch(err => console.error(err));
}