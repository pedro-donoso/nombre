    const validarFormato = (valor) => {
        let patron = new RegExp('^[z-zA-Z ]+$', 'i');

        if (patron.test(valor)) {
            return true;
        } else {
            return false;
        }
    };

    const limpiarFormulario = (valor) => {

        document.querySelector(".errorNombre").innerHTML = "";
        document.querySelector(".errorAsunto").innerHTML = "";
        document.querySelector(".errorMensaje").innerHTML = "";
        document.querySelector(".resultado").innerHTML = "";
    };


    let botton = document.getElementById("botton");

    botton.addEventListener("click", function(e) {
        e.preventDefault();

        limpiarFormulario();

        let nombre = document.getElementById("nombre").value;
        let asunto = document.getElementById("asunto").value;
        let mensaje = document.getElementById("mensaje").value;
        let resultado = true;

        if (nombre.length == 0) {
            document.querySelector(".errorNombre").innerHTML = "Debes ingresar un nombre";
            resultado = false;
        } else {
            if (!validarFormato(nombre)) {
                document.querySelector(".errorNombre").innerHTML = "El formato de ingreso es [az-A-Z].";
                resultado = false;
            }
        }

        if (asunto.length == 0) {
            document.querySelector(".errorAsunto").innerHTML = "Debes ingresar un asunto";
            resultado = false;
        } else {
            if (!validarFormato(asunto)) {
                document.querySelector(".errorAsunto").innerHTML = "El formato de ingreso es [az-A-Z].";
                resultado = false;
            }
        }

        if (mensaje.length == 0) {
            resultado = false;
            document.querySelector(".errorMensaje").innerHTML = "Debes ingresar un mensaje";
        } else {
            if (!validarFormato(mensaje)) {
                document.querySelector(".errorMensaje").innerHTML = "El formato de ingreso es [az-A-Z].";
                resultado = false;
            }
        }

        if (resultado)
            document.querySelector(".resultado").innerHTML = "El mensaje ya fué enviado";
    });