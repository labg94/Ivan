function validarCampo(elementId ) {
    let campo = document.getElementById(elementId);
    let campoValor = campo.value;
    let errorSpan = document.getElementById("error-"+elementId);


    if (!campoValor || !campoValor.trim()) {
        errorSpan.innerHTML = "Campo invalido"
        errorSpan.style.color = "#ff0000"
    } else if (elementId === "rut") {

        const regex = /([0-9]){7,8}-([0-9kK])/
        if (!regex.test(campoValor)) {
            errorSpan.innerHTML = "Rut invalido"
            errorSpan.style.color = "#ff0000"
        }
    }
}

function validFields() {
    validarCampo("nombre");
    validarCampo("rut");
    console.log("All validations done")
}
