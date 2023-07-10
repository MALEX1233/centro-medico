// Obtener una lista de todos los elementos con la clase "dropdown-hover"
var dropdownTriggerList = [].slice.call(document.querySelectorAll('.dropdown-hover'));

// Iterar sobre la lista de elementos y crear un objeto Dropdown de Bootstrap para cada uno
dropdownTriggerList.map(function (dropdownTrigger) {
  return new bootstrap.Dropdown(dropdownTrigger, {
    hover: true
  });
});

// Escuchar el evento "input" del elemento con el id "search-input"
document.getElementById("search-input").addEventListener("input", function() {
    // Obtener el valor del input y convertirlo a minúsculas
    var input = this.value.toLowerCase();
    // Obtener todas las filas de la tabla de exámenes en el tbody
    var rows = document.getElementById("exam-table").getElementsByTagName("tbody")[0].getElementsByTagName("tr");

    // Iterar sobre las filas y comprobar si alguna columna contiene el valor del input
    for (var i = 0; i < rows.length; i++) {
        var exam = rows[i].getElementsByTagName("td")[0].textContent.toLowerCase();
        var date = rows[i].getElementsByTagName("td")[1].textContent.toLowerCase();
        var status = rows[i].getElementsByTagName("td")[2].textContent.toLowerCase();

        // Si alguna columna contiene el valor del input, mostrar la fila; de lo contrario, ocultarla
        if (exam.includes(input) || date.includes(input) || status.includes(input)) {
            rows[i].style.display = "";
        } else {
            rows[i].style.display = "none";
        }
    }
});


