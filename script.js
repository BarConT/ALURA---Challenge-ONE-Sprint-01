import {encriptarTexto} from './encriptar.js';
import {desencriptarTexto} from './desencriptar.js';
import {vocales} from "./codigos.js"
console.log(vocales)

let input = document.querySelector("input")

let encriptar = document.querySelector("#encriptar");
let desencriptar = document.querySelector("#desencriptar");

let secreto = document.querySelector("#secreto");

function mostrarTextoDesencriptado() {
    secreto.innerHTML = desencriptarTexto(input.value);
}

function mostrarTextoEncriptado() {
    secreto.innerHTML = encriptarTexto(input.value);
}

encriptar.onclick = mostrarTextoEncriptado;
desencriptar.onclick = mostrarTextoDesencriptado;

