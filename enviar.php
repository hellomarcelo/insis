<?php

function validar_campo($campo) {
    $campo = trim($campo);
    $campo = stripcslashes($campo);
    $campo = htmlspecialchars($campo);

    return $campo;

}

header('Content-type: application/json');


if (isset($_POST["nombre"]) && !empty($_POST["nombre"]) &&
   isset($_POST["correo"]) && !empty($_POST["correo"]) &&
   isset($_POST["mensaje"]) && !empty($_POST["mensaje"])) {


   $destinoMail = "avillegas@itero.cl";
   $nombre = validar_campo($_POST["nombre"]);
   $correo = validar_campo($_POST["correo"]);
   $mensaje = validar_campo($_POST["mensaje"]);

 
   $contenido = "Nombre: $nombre" . "\n Correo: $correo" . "\n Mensaje: $mensaje";

   mail($destinoMail, "Mensaje Web INSIS de: " . $nombre, $contenido);






   return print (json_encode('ok'));

}

return print (json_encode('NOT ok'));


 ?>