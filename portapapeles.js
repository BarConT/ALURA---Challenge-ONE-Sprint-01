let pegar = document.querySelector("#pegar");
let textarea = document.querySelector("textarea");
let portaPapel;

export function copiarAlPortapapeles() {

    let portapapeles = document.createElement("input");
    portapapeles.setAttribute("value", document.querySelector('#secreto').innerHTML);
    document.body.appendChild(portapapeles);
    portapapeles.select();
    document.execCommand("copy");
    portaPapel = document.body.removeChild(portapapeles);
    textarea.value = "";
    textarea.focus();
    pegar.style.display = "block";
}

export function pegarPortapapeles() {
    textarea.value = portaPapel.value;
}