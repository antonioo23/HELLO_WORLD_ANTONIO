let nomeUsario = "";
let elemento = document.querySelector("#nome-usuario");

while(nomeUsario =="") {
    nomeUsario = prompt("Qual é o seu nome?");
}

if (nomeUsario == null) {
    elemento.textContent = "Seja bem vindo.";
} else {
    elemento.textContent = nomeUsario;
}