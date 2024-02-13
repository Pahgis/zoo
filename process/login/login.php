<?php

if(!empty($_POST["name"])){
    require_once '../../config/connexion.php';


$preparedRequestVerify = $connexion->prepare('SELECT * FROM users WHERE pseudo = ? LIMIT 1');
$preparedRequestVerify->execute([
    $_POST["name"]
]);
$data = $preparedRequestVerify->fetch(PDO::FETCH_ASSOC);
if($preparedRequestVerify->rowCount()===0){
    $preparedRequest = $connexion->prepare("INSERT INTO users (pseudo) VALUES (?)");
    $preparedRequest->execute([
        $_POST["name"]
    ]);
    $data = $connexion->lastInsertId();
    header('Location: http://tp_zoo.dvl.to/creation-zoo.php?id=' . $data);
}else{
    header('Location: http://tp_zoo.dvl.to/creation-zoo.php?id=' . $data["id"] );
}



   
}
