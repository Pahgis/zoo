<?php 
require_once '../config/connexion.php';
require_once '../classes/ZooManager.php';
$json = file_get_contents('php://input');
$db = new ZooManager($connexion);
$db->test($json)

?>