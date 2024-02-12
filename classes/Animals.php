<?php

class Animals
{
    private $name;
    private $poids;
    private $taille;
    private bool $faim;
    private bool $malade;

    public function __construct($name, $faim=false,$malade=false)
    {
        $this->name = $name;
    }

    public function getName(){
        return $this->name;
    }
    public function getFaim(){
        return $this->faim;
    }
    public function getMalade(){
        return $this->malade;
    }
    public function soigner(){

    }
    public function manger(){

    }
    public function dormir(){
        
    }
}