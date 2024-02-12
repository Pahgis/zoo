<?php


class Enclos
{
    private $numberAnimals = [];
    private $name;
    private $sexe;
    private $age;

    public function __construct($name,$age,$sexe)
    {
        $this->name = $name;
        $this->sexe = $sexe;
        $this->age = $age;
    }

    public function addAnimals($animals){
        if(sizeof($this->numberAnimals) <6){
            array_push($this->numberAnimals, $animals);
        } 
    }
    public function getAnimals(){
        return $this->numberAnimals;
    }
    public function getName(){
        return $this->name;
    }
    public function getSexe(){
        return $this->sexe;
    }
    public function getAge(){
        return $this->age;
    }
}