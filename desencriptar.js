const vocales = ["a", "e", "i", "o", "u"];
const llaves = ["ai", "enter", "imes", "ober", "ufat"];

export function desencriptarTexto(textoEncriptado) {
    textoEncriptado = textoEncriptado.toLowerCase();
    let texto = "";
    for (let l=0; l<llaves.length; l++) {
        texto = textoEncriptado.replaceAll(llaves[l], vocales[l]);
        textoEncriptado = texto;
    }
    return texto;
}
    