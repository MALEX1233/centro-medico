$(document).ready(function(){
    $('#login').submit(function(event){
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

                if(response.status == 'success'){
                    let tipoUsuario = response.tipo_usuario;
                    if(tipoUsuario == 'doctor'){
                        window.location.href = 'doctor.html';
                    }else if(tipoUsuario == 'paciente'){
                        window.location.href = 'paciente.html';
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