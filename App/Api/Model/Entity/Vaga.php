<?php
namespace Api\Model\Entity;

class Vaga extends \GORM\Model{
    public $id;
    public $fkVeiculo;
    public $fkUniversidade;
    public $fkAssociado;
}