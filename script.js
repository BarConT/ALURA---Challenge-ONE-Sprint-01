import {encriptarTexto} from './encriptar.js';
import {desencriptarTexto} from './desencriptar.js';
import {copiarAlPortapapeles} from './portapapeles.js';

let textarea = document.querySelector("#textarea");
let encriptar = document.querySelector("#encriptar");
let desencriptar = document.querySelector("#desencriptar");
let copiar = document.querySelector("#copiar");
let secreto = document.querySelector("#secreto");

function mostrarTextoDesencriptado() {
    secreto.innerHTML = desencriptarTexto(textarea.value);
    copiar.style.display = "block";
}

function mostrarTextoEncriptado() {
    secreto.innerHTML = encriptarTexto(textarea.value);
    copiar.style.display = "block";
}

copiar.onclick = copiarAlPortapapeles;
encriptar.onclick = mostrarTextoEncriptado;
desencriptar.onclick = mostrarTextoDesencriptado;

