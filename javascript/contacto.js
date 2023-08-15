let namex = document.getElementById("nombre");
let email = document.getElementById("email");
let asunto = document.getElementById("asunto");
let mensaje = document.getElementById("mensaje");
let form = document.getElementById("warnings");
let botonEnviar = document.getElementById("boton-enviar")


botonEnviar.addEventListener("click", e => {
    e.preventDefault();
    let warnings = "";
    let entrar = false;
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/;
    if (namex.value.length < 6) {
        warnings += `El nombre es muy corto <br>`;
        entrar = true;
    }
    if (!regexEmail.test(email.value)) {
        warnings += `El email no es valido <br>`;
        entrar = true;
    }
    if (asunto.value.length < 30) {
        warnings += `Supera el número maximo de caracteres <br>`;
        entrar = true;
    }
    if (mensaje.value.length < 300) {
        warnings += `Supera el número maximo de caracteres <br>`;
        entrar = true;
    }
    if (entrar) {
        parrafo.innerHTML = warnings
    } else {
        parrafo.innerHTML = "Enviado"
    }

    let usuario = [namex.value, email.value];
    localStorage.setItem("usuario", usuario);

})






