import {encriptarTexto} from './encriptar.js';
import {desencriptarTexto} from './desencriptar.js';
import {copiarAlPortapapeles, pegarPortapapeles} from './portapapeles.js';
import {validarTextarea} from './validar.js';

let pegar = document.querySelector("#pegar");
let textarea = document.querySelector("#textarea");
let encriptar = document.querySelector("#encriptar");
let desencriptar = document.querySelector("#desencriptar");
let copiar = document.querySelector("#copiar");
let borrar = document.querySelector("#borrar");
let secreto = document.querySelector("#secreto");
let imagen = document.querySelector("#imagen-munieco");
let lateral = document.querySelector("#lateral");
let informacion = document.querySelector("#informacion");

textarea.focus();

function encriptarFrase() {
    copiar.style.display = "block";
    imagen.style.display = "none";
    lateral.style.justifyContent = "space-between";
    secreto.style.textAlign = "left";
}

function mostrarTextoDesencriptado() {
    if (textarea.value != "") {
        if (!validarTextarea(textarea.value)){
            ingresarCaracteresNoValidos();    
        } else  {
            secreto.innerHTML = desencriptarTexto(textarea.value);
            encriptarFrase();
        }
    } 
}

function mostrarTextoEncriptado() { 
    if (textarea.value != "") {
        if (!validarTextarea(textarea.value)){
            ingresarCaracteresNoValidos();
        } else  {
            secreto.innerHTML = encriptarTexto(textarea.value);
            encriptarFrase();
        } 
        
    }
}

function borrarTextarea() {
    textarea.value = "";
    textarea.focus();
}

function ingresarCaracteresNoValidos() {
    informacion.classList.add('informacion');
    setTimeout(ingresarCaracteresValidos, 3000);
}

function ingresarCaracteresValidos() {
    informacion.classList.remove('informacion');
}

copiar.onclick = copiarAlPortapapeles;
encriptar.onclick = mostrarTextoEncriptado;
desencriptar.onclick = mostrarTextoDesencriptado;
pegar.onclick = pegarPortapapeles;
borrar.onclick = borrarTextarea;



