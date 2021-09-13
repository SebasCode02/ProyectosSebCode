function validar(formulario){

   // REQUISITOS EMAIL

   let email = /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/;

   if(formulario.email.value.length == 0){
      swal({
         title : 'Email Obligatorio',
         icon : 'warning',
         button : 'Ok',
      })
      return false
   }if(!email.test(formulario.email.value)){
      swal({
         title : 'Email Invalido',
         icon : 'error',
         button : 'Ok',
      });
      return false
   }

   // REQUISITOS CONTRASEÑA


   if(formulario.contraseña.value.length == 0){
      swal({
         title : 'Contraseña Obligatoria',
         icon : 'warning',
         button : 'Ok',
      })
      return false
   }if(formulario.contraseña.value.trim().length < 5){
      swal({
         title : 'Debe tener minimo 5 caracteres',
         icon : 'error',
         button : 'Ok'
      });
      return false
   }
   return true
}