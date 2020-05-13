var contador = 0;
class Usuario {
    constructor(n1, n2) {
        this.val_email = n1;
        this.val_contraseña = n2;
    }
    validar() {
        var x;
        if (this.val_email == "mijail" && this.val_contraseña == "1234") {
            x = 1;
        } else {
            x = 0
        }
        return x;
    }
};
function login() {
    var u = new Usuario(
        document.getElementById("email").value,
        document.getElementById("contraseña").value);
    if (u.validar() == 1) {
        limpiar();
        contador = 0;
        alert("Bienvenido: " + u.email + ".  Te estabamos esperando");
    } else {
        contador++;
        alert("Correo y/o contraseña incorrectos. Tienes " + (3 - contador) + " intento/s");
       
        limpiar();
        if (contador == 3) {
            desabilitar();
        }
    }
}
function limpiar() {
    document.getElementById("email").value = "";
    document.getElementById("contraseña").value = "";
    document.getElementById("email").focus();
}
function desabilitar() {
    document.getElementById("email").disabled = true;
    document.getElementById("contraseña").disabled = true;
    document.getElementById("botoncito").disabled=true;
}