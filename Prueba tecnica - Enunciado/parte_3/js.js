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

    // Variable para rastrear el nombre del curso actual
    let cursoActual = null;

    // Crea las filas y celdas de la tabla
    data.forEach(curso => {
        // Verifica si el nombre del curso ha cambiado (funcion para no repetir los cursos)
        if (curso['Nombre del curso'] !== cursoActual) {
            const nuevaFila = tabla.insertRow();

            // Celda para el nombre del curso
            const nombreCurso = nuevaFila.insertCell();
            nombreCurso.innerHTML = `<strong> ${"Curso : " + curso['Nombre del curso']}</strong>`;

            // Celda para la abreviacion del curso
            const cursoAbreviado = nuevaFila.insertCell();
            cursoAbreviado.innerHTML = curso['Abreviatura curso'];

            // Actualiza la variable cursoActual
            cursoActual = curso['Nombre del curso'];
        }
    });
}