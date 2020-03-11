$(document).ready(function() {
    
    $(".formulario-contacto").bind("submit", function(){

       $.ajax({

           type: $(this).attr("method"),
           url: $(this).attr("action"),
           data: $(this).serialize(),

           success: function(respuesta) {
               if(respuesta=="ok"){
                   $("#alerta").removeClass("d-none").removeClass("alert-danger").removeClass("alert-success").addClass("alert-success");
                   $(".respuesta").html("Enviado");
                   $(".mensaje-alerta").html("El mensaje se ha enviado correctamente");
               }else{
                   $("#alerta").removeClass("d-none").removeClass("alert-danger").removeClass("alert-success").addClass("alert-danger");
                   $(".respuesta").html("Error");
                   $(".mensaje-alerta").html("Tu mensaje no se pudo enviar, intentalo de nuevo.");
         

               }
              },
           error: function() {
               $("#alerta").removeClass("d-none").removeClass("alert-danger").removeClass("alert-success").addClass("alert-danger");
               $(".respuesta").html("Error");
               $(".mensaje-alerta").html("Tu mensaje no se pudo enviar, intentalo de nuevo.");
           }    
       });

       return false;

    });
});

