function addError(errorSpan, mensaje = "Campo invalido") {
    errorSpan.innerHTML = mensaje
    errorSpan.style.color = "#ff0000"
}

function validarCampo(elementId ) {
    let campo = document.getElementById(elementId);
    let campoValor = campo.value;
    let errorSpan = document.getElementById("error-"+elementId);


    if (!campoValor || !campoValor.trim()) {
        addError(errorSpan);
    } else if (elementId === "rut") {

        const regex = /([0-9]){7,8}-([0-9kK])/
        if (!regex.test(campoValor)) {
            addError(errorSpan, "Este Rut invalido");
        }
    }
}

function validFields() {
    validarCampo("nombre");
    validarCampo("rut");
    console.log("Todas las validaciones se hicieron")
}
