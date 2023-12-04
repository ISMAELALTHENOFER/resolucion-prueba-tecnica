<?php
# Conexión a la base de datos
$conexion = new mysqli('localhost', 'root', 'Cuenta.1234', 'prueba_tecnica');
if ($conexion->connect_error) {
    die("Error de conexión: " . $conexion->connect_error);
}

# Consulta a la base de datos
$consulta = $conexion->query("SELECT a.dni, a.apellido, a.nombres, c.cod_curso, c.abreviatura, c.desccripcion FROM inscripciones i
INNER JOIN cursos c ON i.cod_curso = c.cod_curso
INNER JOIN alumnos a ON i.dni_Alu = a.dni
ORDER BY a.apellido;");

# Lectura y armado de datos
$arrayCurso = array();

while ($row = $consulta->fetch_assoc()) {
    $curso = array(
        'Id curso' => $row['cod_curso'],
        'Abreviatura' => $row['abreviatura'],
        'Nombre del curso' => $row['desccripcion'],
        'Alumno' => array(
            'DNI del alumno' => $row['dni'],
            'Nombre del alumno' => $row['nombres'],
            'Apellido del alumno' => $row['apellido'],
        ),
    );

    $arrayCurso[] = $curso;
}

# Imprime el resultado como JSON
echo json_encode(array(
    "mensaje" => array("Datos obtenidos con éxito"),
    "data" => $arrayCurso
));

# Cierra la conexión a la base de datos
$conexion->close();
