<?php

class Contato{
    private $pdo;
    private $nome;
    private $email;
    private $whatsapp;
    private $assunto;
    private $resumo;

    function __construct($bd)
    {
        $this->pdo = $bd;
    }

    function getNome(){
        return $this->nome;
    }
    function getEmail(){
        return $this->email;
    }
    function getWhat(){
        return $this->whatsapp;
    }
    function getAssunto(){
        return $this->assunto;
    }
    function getResumo(){
        return $this->resumo;
    }

    function setNome($nome){
        $this->nome = $nome;
    }
    function setEmail($email){
        $this->email = $email;
    }
    function setWhatsapp($whatsapp){
        $this->whatsapp = $whatsapp;
    }
    function setAssunto($assunto){
        $this->assunto = $assunto;
    }
    function setResumo($resumo){
        $this->resumo = $resumo;
    }

    function cadastrarContato(){
        $retorno = ['status' => 0, 'dados' => null];
        try{
        $insert = $this->pdo->prepare('insert into contatos(nome_completo, email, whatsapp, assunto, resumo) values (:nome, :email, :whats, :assunto. :resumo');
        $insert->bindValue(':nome', $this->nome);
        $insert->bindValue(':email', $this->email);
        $insert->bindValue(':whatsapp', $this->whatsapp);
        $insert->bindValue(':assunto', $this->assunto);
        $insert->bindValue(':resumo', $this->resumo);
        $insert->execute();
        $retorno['status'] = 1;
        }catch(PDOException $error){
            echo 'Não foi possivel cadastra contato'.$error->getMessage();
        }
        return $retorno;
    }
}

?>