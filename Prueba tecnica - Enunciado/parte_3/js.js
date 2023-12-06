const apiUrl = 'http://localhost/prueba/endpointResuelto2.php';//llama al endpoint con fetch

document.addEventListener('DOMContentLoaded', () => {
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            createTable(data.data, 'zonaTabla');
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
});

function createTable(data, tablaId) {
    const tabla = document.getElementById(tablaId);
    const cursos = {};

    // Agrupa los alumnos por curso
    data.forEach(curso => {
        const nombreCurso = curso['Nombre del curso'];
        if (!cursos[nombreCurso]) {
            cursos[nombreCurso] = {
                alumnos: []
            };
        }
        cursos[nombreCurso].alumnos.push({
            dni: curso['Alumnos']['DNI del alumno'],
            apellido: curso['Alumnos']['Apellido del alumno'],
            nombre: curso['Alumnos']['Nombre del alumno']
        });
    });

    // Crea las filas y celdas de la tabla
    for (const nombreCurso in cursos) {
        const curso = cursos[nombreCurso];

        // Crea una fila para el curso
        const nuevaFilaCurso = tabla.insertRow();

        // Celda para el nombre del curso
        const nombreCursoCelda = nuevaFilaCurso.insertCell();
        nombreCursoCelda.innerHTML = `<strong> Curso: ${nombreCurso}</strong>`;

        // Crea una fila para los alumnos
        const nuevaFilaAlumnos = tabla.insertRow();
        const celdaAlumnos = nuevaFilaAlumnos.insertCell();

        // Crear una lista para los alumnos
        const ul = document.createElement('ul');
        //crea la cabecera de la lista 
        const cabeceraLi = document.createElement('li');
        cabeceraLi.innerHTML = ' <strong> DNI </strong> | <strong> Apellido </strong> | <strong> Nombre </strong>';
        ul.appendChild(cabeceraLi);

        curso.alumnos.forEach(alumno => {
            const li = document.createElement('li');
            li.textContent = `${alumno.dni} ${alumno.apellido} ${alumno.nombre} `;
            ul.appendChild(li);
        });
        celdaAlumnos.appendChild(ul);
    }
}
