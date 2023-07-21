// Función para abrir el menú desplegable al pasar el mouse
function openDropdown(element) {
    // Agregar la clase "show" al elemento li para mostrarlo
    element.classList.add("show");
    // Agregar la clase "show" al elemento ul con la clase "dropdown-menu" para mostrar el menú desplegable
    element.querySelector(".dropdown-menu").classList.add("show");
}
  // Función para cerrar el menú desplegable al quitar el mouse
function closeDropdown(element) {
    // Remover la clase "show" del elemento li para ocultarlo
    element.classList.remove("show");
    // Remover la clase "show" del elemento ul con la clase "dropdown-menu" para ocultar el menú desplegable
    element.querySelector(".dropdown-menu").classList.remove("show");
}
$(document).ready(function(){
  let id = sessionStorage.getItem('id');
  console.log(id);
  if (id != null) {
    $.ajax({
      url:'consulta.php',
      type:'POST',
      data: {id: id , accion: 'perfil'},
      success: function(response){
        console.log(response);
        response = JSON.parse(response);
        let nombre = response.nombre;
        $('#clasnon').hide();
        let html = '<a class="nav-link active space-right3" aria-current="page">';
        html+='<img src="Icono/person-circle.svg" alt="50" width="40" style="margin-right:10px " >'+nombre+'</a>'; 
        $('#clasnon').html(html).show();
      },
    });
  }
});