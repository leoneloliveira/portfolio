CREATE DATABASE IF NOT EXISTS portfolio;
USE portfolio;

CREATE TABLE IF NOT EXISTS contato (
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  nome TEXT,
  email TEXT unique,
  whatsapp TEXT unique,
  assunto TEXT,
  resumo TEXT
);