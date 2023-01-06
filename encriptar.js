const vocales = ["a", "e", "i", "o", "u"];
const llaves = ["ai", "enter", "imes", "ober", "ufat"];

export function encriptarTexto(texto) {
    texto = texto.toLowerCase();
    let textoEncriptado = "";
    let bandera = false;
    for (let letra in texto) {
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