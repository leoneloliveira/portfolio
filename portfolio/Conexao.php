<?php 

class Conexao{
    public $pdo;
    public $host = 'localhost';
    public $bd = 'portfolio';
    public $root = 'root';
    public $pass = '';

    function conectar(){
        try{
        $this->pdo = new PDO('mysql:host='.$this->host.';dbname='.$this->bd,$this->root,$this->pass);
        }catch(PDOException $error){
            echo 'Erro ao conectar no banco de dados'.$error->getMessage();
        }
        return $this->pdo;
    }
}
?>