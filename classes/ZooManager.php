<?php 


$data = $_POST;

class ZooManager
{
    private $db;

    public function __construct($db)
    {

        $this->db = $db;
    }

    public function test($data){
        $preparedrequest = $this->db->prepare('INSERT INTO employe (name) VALUES (?) ');
        $preparedrequest->execute([
            $data
        ]);
    }

    public function addZoo($id, $name){
        $preparedrequest = $this->db->prepare("SELECT * FROM zoo WHERE id_users= ? AND name = ?");
        $preparedrequest->execute([
            $id,
            $name
        ]);
        $data = $preparedrequest->fetch(PDO::FETCH_ASSOC);
        return $data;
    }
}
