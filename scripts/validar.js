export function validarTextarea(texto) {
    const regex = "^[ a-z]+$";
    if (texto.match(regex)!=null) {
        return true;
    } else {
        return false;
    }
}