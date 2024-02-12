<?php

if(!empty($_POST["name"])){
    require_once '../../config/connexion.php';

    $preparedRequest = $connexion->prepare("INSERT INTO users (pseudo) VALUES (?)");
    $preparedRequest->execute([
        $_POST["name"]
    ]);

    header('Location: http://tp_zoo.dvl.to/zoo.php');
}
