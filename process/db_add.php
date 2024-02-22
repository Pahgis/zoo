<?php 
require_once '../config/connexion.php';
require '../config/autoloader.php';



if(!empty($_POST["name"]) && !empty($_POST["img"]) && !empty($_POST["idzoo"])){


$json = file_get_contents('php://input');
$db = new ZooManager($connexion);
//$db->test($json);
$worker = new Worker($_POST["name"],$_POST["img"],$_POST["idzoo"]);
$db->addWorker($worker);
}



if(empty($_POST)){
    $preparedRequrst = $connexion->prepare("SELECT * FROM zoo 
     JOIN employe ON zoo.id = employe.id_zoo "); 
$preparedRequrst->execute();
$data = $preparedRequrst->fetchAll(PDO::FETCH_ASSOC);
echo json_encode($data);
}


?>