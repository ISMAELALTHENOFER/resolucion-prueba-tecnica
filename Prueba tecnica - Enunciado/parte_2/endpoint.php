<?php

# Ejemplo de Conexion
$conexion = new mysqli('host', 'user', 'password', 'database', 'puerto');

# Ejemplo de Consulta
$consulta = $conexion->query("<consulta>");

###### Lectura y armado de Datos #######



$arrayEjemplo = array();



# Ejemplo de mostrado de datos en formato Json para el endpoint

echo json_encode(array(
    "codigo" => 0,
    "mensajes" => array("Datos obtenidos con éxito"),
    "data" => $arrayEjemplo
));