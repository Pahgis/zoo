<?php

require '../config/connexion.php';
require '../config/autoloader.php';



if(!empty($_POST["idSupp"])){
    $preparedRequest = $connexion->prepare('DELETE FROM employe WHERE id=? ');
    $preparedRequest->execute([
        $_POST["idSupp"]
    ]);
}



?>