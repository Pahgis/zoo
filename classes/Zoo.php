<?php

class Zoo 
{
    private $numberEnclos=[];
    private $name;

    public function __construct($name)
    {
        $this->name = $name;
    }

    public function getName(){
        return $this->name;
    }
    public function getNumberEnclos(){
        return $this->numberEnclos;
    }
    public function addEnclos(Enclos $enclos){
        array_push($this->numberEnclos, $enclos);
    }
}