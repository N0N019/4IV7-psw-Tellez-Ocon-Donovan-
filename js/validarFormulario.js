function validar(formulario){
    //obtener valores del formulario
    if(formulario.nombre.value.length < 5){
        alert("Escribe mas de 5 caracteres en el campo nombre");
        formulario.nombre.focus();
        return false;
    }

    //solo se puedan ingresar letras dentro de nombre
    var checkOK = "QWERTYUIOPÑLKJHGFDSAZXCVBNM"
    + "qwertyuiopñlkjhgfdsazxcvbnm";
    
    var checkStr = formulario.nombre.value;

    var allvalid = true;

    for(var i = 0; i < checkStr.length; i++){
        var ch = checkStr.charAt(i);
        for(var j = 0; j <= checkOK.length; j++){
            if (ch == checkOK.charAt(j)) {
                break;
            }
            if (j == checkOK.length) {
                allvalid = false;
                break;
            }
        }
    }

    if (allvalid == false) {
        alert("Escribe solo letras en el campo nombre");
        formulario.nombre.focus();
        return false;
    }

    //Validar la entrada de edad

    var checkOK = "1234567890";
    
    var checkStr = formulario.edad.value;

    var allvalid = true;

    for(var i = 0; i < checkStr.length; i++){
        var ch = checkStr.charAt(i);
        for(var j = 0; j <= checkOK.length; j++){
            if (ch == checkOK.charAt(j)) {
                break;
            }
            if (j == checkOK.length) {
                allvalid = false;
                break;
            }
        }
    }

    if (allvalid == false) {
        alert("Escribe solo numeros en el campo edad");
        formulario.edad.focus();
        return false;
    }

    //Validar la entrada de email
    //Usar una expresion regular

    var txt = formulario.email.value;

    //patron
    var b = /^[^@\s]+@[^@\.\s]+(\.[^@\.\s]+)+$/;

    alert("Email " + (b.test(txt)?"":" no ") + "valido");

    return b.test(txt);
}