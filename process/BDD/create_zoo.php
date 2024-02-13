<?php

if(!empty($_POST["zoo"]) && !empty($_POST["id"])){

    require_once '../../config/connexion.php';

    $preparedRequest = $connexion->prepare('INSERT INTO zoo (name, id_users) VALUES (?,?)');
    $preparedRequest->execute([
        $_POST["zoo"],
        $_POST["id"]
    ]);
    header('Location: http://tp_zoo.dvl.to/creation-zoo.php?id=' . $_POST["id"]);
}

?>