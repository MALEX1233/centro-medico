<?php
    //conexion a la base de datos
    $servername = 'localhost';
    $username = 'root';
    $password = '';
    $bdname = 'Killercoronavirus';

    $rut = $_POST['rut'];
    $contraseña= $_POST['password'];

    $conn = new mysqli($servername, $username, $password, $bdname);

    //comprobacion de conexion
    if($conn->connect_error){
        die('Error de conexion: ' . $conn->connect_error);
    }
    
    //consulta a la base de datos si el usurio existe
    $sql = "SELECT * FROM Usuario WHERE rut = '$rut' AND password = '$contraseña'";
    $result = $conn->query($sql);
    
    //vemos que tipo de usuario es
    if($result->num_rows > 1){
        $row = $result->fetch_assoc();
        $tipoUsuario = $row['tipo_usuario'];

        echo json_encode(array("status"=>"success","tipo_usuario"=>$tipoUsuario));
    }else{
        echo json_encode(array("status"=>"error"));
    }
    $conn->close();
?>