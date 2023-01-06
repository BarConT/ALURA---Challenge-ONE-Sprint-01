let vocales = ["a", "e", "i", "o", "u"];
let llaves = ["ai", "enter", "imes", "ober", "ufat"];

let texto = "Hola Felipe este es un mensaje secreto";

function encriptarTexto(texto) {
    texto = texto.toLowerCase();
    let textoEncriptado = "";
    let bandera = false;
    for (letra in texto) {
        for (let l=0; l<vocales.length; l++) {
            if (texto[letra]==vocales[l]){
                textoEncriptado += llaves[l];
                bandera = true;
            }
        }
        if (!bandera) {
            textoEncriptado += texto[letra];
        }
        bandera = false;     
    }
    return textoEncriptado;
}
console.log(encriptarTexto(texto));

let textoEncriptado = "hoberlai fenterlimEspenter enterstenter enters ufatn menternsaijenter sentercrentertober";

function desencriptarTexto(textoEncriptado) {
    textoEncriptado = textoEncriptado.toLowerCase();
    let texto = "";
    for (let l=0; l<llaves.length; l++) {
        texto = textoEncriptado.replaceAll(llaves[l], vocales[l]);
        textoEncriptado = texto;
    }
    return texto;
}
console.log(desencriptarTexto(textoEncriptado));

