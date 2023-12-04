#Escribir la consulta que permita obtener la lista de alumnos y sus cursos.

#conectar a la base de datos prueba_tecnica
USE prueba_tecnica;

#consulta realizada
SELECT a.dni, a.apellido, a.nombres, c.cod_curso, c.abreviatura, c.desccripcion
FROM inscripciones i
INNER JOIN cursos c ON i.cod_curso = c.cod_curso
INNER JOIN alumnos a ON i.dni_Alu = a.dni
ORDER BY a.apellido;

/*Escribir la consulta que permita obtener la lista de alumnos que no han pagado la cuota del mes 6 
 del año 2023 del curso Desarrollo Back End.*/
SELECT a.dni, a.apellido, a.nombres
FROM alumnos a
JOIN inscripciones i ON a.dni = i.dni_Alu
JOIN cursos c ON i.cod_curso = c.cod_curso
LEFT JOIN pagos p ON a.dni = p.dni_alu AND c.cod_curso = p.cod_curso AND p.mes = 6 AND p.anio = 2023
WHERE c.desccripcion = 'Desarrollo Back End' AND p.dni_alu IS NULL;
