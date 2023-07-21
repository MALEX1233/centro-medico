$(document).ready(function(){
    $('#loginform').submit(function(event){
        event.preventDefault();
        
        let rut = $('#rut').val();
        let password = $('#password').val();

        let datos ={
            rut: rut,
            password: password
        };
        $.ajax({
            url:'conexion.php',
            type:'POST',
            data: datos,
            //respuesta del servidor
            success: function(response){
                console.log(response);
                response = JSON.parse(response);
                if(response.status == 'success'){
                    let tipoUsuario = response.tipo_usuario;
                    let id = response.id;
                    sessionStorage.setItem('id', id);
                    if(tipoUsuario == 'doctor'){
                        window.location.href ='#';
                    }else if(tipoUsuario == 'paciente'){
                        window.location.href = 'index.html';
                    }
                }else{
                    alert("credenciales incorrectas");
                }
            },
            error: function(xhr, status, error){
                console.log("error"+status+"-"+error);
            }
        }); 
    });
    
});
function registro(){
    console.log("click");
    html='<div>';
    html+='<h1>Registro Paciente</h1>';
    html+='<from>';
    html+='<label for="rut">Rut</label>';
    html+='<input type="text" id="rut" name="rut" placeholder="Ingrese su rut">';
    html+='<br>'
    html+='<label for="nombre">Nombre: </label>';
    html+='<input type="text" id="nombre" name="nombre" placeholder="Ingrese su nombre">';
    html+='<br>'
    html+='<label for="email">Email</label>';
    html+='<input type="email" id="email" name="email" placeholder="Ingrese su email">';
    html+='<br>'
    html+='<label for="password">Contraseña: </label>';
    html+='<input type="password" id="password" name="password" placeholder="Contraseña">';
    html+='<br>'
    html+='<label for="password2">Repetir contraseña: </label>';
    html+='<input type="password" id="password2" name="password2" placeholder="Repetir contraseña">';
    html+='<br>'
    html+='<button onclick="registrar()">Registrar</button>';
    html+='</from>';
    html+='</div>';
    $('#login').html(html);
    let volver ='<a href="login.html">Volver</a>';
    $('#volver').html(volver);
}
function registrar(){
    let rut = $('#rut').val();
    let nombre = $('#nombre').val();
    let email = $('#email').val();
    let password = $('#password').val();
    let password2 = $('#password2').val();
    let tipo_usuario = "paciente";
    if(password != password2){
        alert("Las contraseñas no coinciden");
        return;
    } else if(rut == "" || nombre == "" || email == "" || password == ""){
        alert("Debe completar todos los campos");
        return;
    } else if(password == password2){
        let datos = {
            rut: rut,
            nombre: nombre,
            email: email,
            password: password,
            tipo: tipo_usuario
        };
        $.ajax({
            url:'insert.php',
            type:'POST',
            data: datos,
            success: function(response){
                response = JSON.parse(response);
                if(response.status == 'success'){
                    alert("Se ha registrado correctamente");
                    window.location.href = 'index.html';
                }else{
                    alert("Ha habido un error al registrar");
                }
            }
        });
    }
}