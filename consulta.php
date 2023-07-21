<?php
    $servername = 'localhost';
    $username = 'root';
    $password = '';
    $bdname ='Killercoronavirus';

    $conn = new mysqli($servername, $username, $password, $bdname);

    //comprobacion de conexion
    if($conn->connect_error){
        die('Error de conexion: ' . $conn->connect_error);
    }

    $Iduser = $_POST['id'];

    function perfil($conn, $Iduser){
        $sql = "SELECT * FROM usuario WHERE ID =  $Iduser";
        $result = $conn->query($sql);
        $row= $result->fetch_assoc();
        echo json_encode($row);
    }
    //extraxion de examenes
    //function examen($conn, $Iduser){
    //    $examenes= array();
    //    $sql = "SELECT * FROM Examen where idusurio = '$Iduser'";
    //    $result = $conn->query($sql);
    //    while($row = $result->fetch_assoc()){
    //        $examenes[] = $row;
    //    }
    //    echo json_encode($examenes);
    //}
    $action = $_POST['accion'];
    if ($action == 'perfil'){
        perfil($conn, $Iduser);
    }
    //redirecion a funcion de examenes
    //if ($action == 'examen'){
    //    examen($conn, $Iduser);
    //}
?>