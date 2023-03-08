<?php

require_once('Conexao.php');
require_once('Contato.php');

$json = file_get_contents('php://input');
$reqbody = json_decode($json);

$nome = $reqbody->nome;
$email = $reqbody->email;
$whats = $reqbody->whatsapp;
$assunto = $reqbody->assunto;
$resumo = $reqbody->resumo;

$conexao = new Conexao();
$bd = $conexao->conectar();
$contato = new Contato($bd);
$retorno = $contato->cadastrarContato();

echo json_encode($retorno);

?>