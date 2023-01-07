import {encriptarTexto} from './encriptar.js';
import {desencriptarTexto} from './desencriptar.js';
import {copiarAlPortapapeles} from './portapapeles.js';

let input = document.querySelector("input")

let encriptar = document.querySelector("#encriptar");
let desencriptar = document.querySelector("#desencriptar");
let copiar = document.querySelector("#copiar");

let secreto = document.querySelector("#secreto");

function mostrarTextoDesencriptado() {
    secreto.innerHTML = desencriptarTexto(input.value);
}

function mostrarTextoEncriptado() {
    secreto.innerHTML = encriptarTexto(input.value);
}

copiar.onclick = copiarAlPortapapeles;
encriptar.onclick = mostrarTextoEncriptado;
desencriptar.onclick = mostrarTextoDesencriptado;

