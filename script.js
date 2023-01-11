import {encriptarTexto} from './encriptar.js';
import {desencriptarTexto} from './desencriptar.js';
import {copiarAlPortapapeles, pegarPortapapeles} from './portapapeles.js';

let pegar = document.querySelector("#pegar");
let textarea = document.querySelector("#textarea");
let encriptar = document.querySelector("#encriptar");
let desencriptar = document.querySelector("#desencriptar");
let copiar = document.querySelector("#copiar");
let secreto = document.querySelector("#secreto");
let imagen = document.querySelector("#imagen-munieco");
let aside = document.querySelector("#aside");

function encriptarFrase() {
    copiar.style.display = "block";
    imagen.style.display = "none";
    aside.style.justifyContent = "space-between";
}

function mostrarTextoDesencriptado() {
    if (textarea.value != "") {
        secreto.innerHTML = desencriptarTexto(textarea.value);
        encriptarFrase();
    }  
}

function mostrarTextoEncriptado() {
    if (textarea.value != "") {
        secreto.innerHTML = encriptarTexto(textarea.value);
        encriptarFrase();
    }   
}

copiar.onclick = copiarAlPortapapeles;
encriptar.onclick = mostrarTextoEncriptado;
desencriptar.onclick = mostrarTextoDesencriptado;
pegar.onclick = pegarPortapapeles;


