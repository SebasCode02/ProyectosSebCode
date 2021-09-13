function limpiarErrores(){
    var clear = document.getElementsByClassName("error");
    for(var i = 0; i < clear.length; i++){
        clear[i].innerHTML = "";
    }
}


function validar(formulario){
    limpiarErrores();

    if(formulario.nombre.value.trim().length == 0){
        document.getElementById("errorNombre").innerHTML = 'Nombre Obligatorio';
        formulario.nombre.focus();
        return false

    }if(formulario.nombre.value.trim().length < 4){
        swal({
            title : 'Minimo 4 caracteres',
            icon : 'error',
            button : 'Ok',
        });

        return false
    }

    var emai = /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/;

    if(formulario.email.value.length == 0){
        document.getElementById("errorEmail").innerHTML = 'Email Obligatorio';
        formulario.email.focus();
        return false
    }if(!emai.test(formulario.email.value)){
        swal({
            title : 'Email invalido',
            icon : 'error',
            button : 'Ok',
        });
        return false
    }

    
    if(formulario.contraseña.value.length == 0){
        document.getElementById("errorContraseña").innerHTML = 'Contraseña Obligatoria';
        return false
    }if(formulario.contraseña.value.trim().length < 5){
        swal({
            title : 'Debe tener minimo 5 caracteres',
            icon : 'warning',
            button : 'Ok',
        });
        return false
    }

    if(formulario.confirmacion.value.length == 0){
        document.getElementById("errorConfirmacion").innerHTML = 'Confirmación Obligatoria';
        return false
    }if(formulario.contraseña.value != formulario.confirmacion.value){
        swal({
            title : 'Confirmacion no coincide',
            icon : 'error',
            button : 'Ok',
        });
        return false
    }   
    
    if(formulario.genero.value == ""){
        swal({
            title : 'Genero obligatorio',
            icon : 'warning',
            button : 'Ok',
        });
        return false
    }

    
    if(formulario.pais.value.length == 0){
        document.getElementById("errorPais").innerHTML = 'País Obligatorio';
        return false
    }if(formulario.pais.value == ""){
        swal({
            title : 'Selecciona el país',
            icon : 'warning',
            button : 'Ok',
        });
        return false
    }
    
    if(!formulario.terminos.checked){
        swal({
            title : 'Terminos obligatorio',
            icon : 'warning',
        });
        return false
    }
    swal({
        title : 'Fue enviado exitosamente',
        icon : 'success',
    });
    return true
}