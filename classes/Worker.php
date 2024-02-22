<?php


class Worker
{
    private $name;
    private $prix= 200;
    private $coutEntretien = 75;
    private string $image;
    private $id_zoo;
    public function __construct($name, $image, $id)
    {
        $this->name = $name;
        $this->image = $image;
        $this->id_zoo = $id;
    }
 

    public function getName(){
        return $this->name;
    }
    public function getImg(){
        return $this->image;
    }
    public function getId(){
        return $this->id_zoo;
    }

}