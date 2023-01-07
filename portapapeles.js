export function copiarAlPortapapeles() {
    let portapapeles = document.createElement("input");
    portapapeles.setAttribute("value", document.querySelector('#secreto').innerHTML);
    document.body.appendChild(portapapeles);
    portapapeles.select();
    document.execCommand("copy");
    document.body.removeChild(portapapeles);
}