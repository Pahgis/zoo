<?php


class Worker
{
    private $name;
    private $prix= 200;
    private $coutEntretien = 75;

    public function __construct($name)
    {
        $this->name = $name;
    }

    public function getName(){
        return $this->name;
    }
}