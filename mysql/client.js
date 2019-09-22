const mysql = require('mysql2');

// create the connection to database
const connection = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  port: process.env.MYSQL_PORT,
  user: 'root',
  password: 'rootpass'
});

// create database
connection.query(
  'CREATE DATABASE `testdb`',
  function(err, results) {
    console.log(err, results); 
  }
);

// create table
connection.query(
  'CREATE TABLE `testdb`.`user` (`id` int primary key auto_increment, `name` varchar(10), `age` int)',
  function(err, results) {
    console.log(err, results); // results contains rows returned by server
  }
);

// insert data
connection.query(
  'INSERT INTO `testdb`.`user` (`name`, `age`) VALUES ("hoge", 20), ("huga", 22), ("piyo", 24)',
  function(err, results) {
    console.log(err, results); // results contains rows returned by server
  }
);

// simple query
connection.query(
  'SELECT * FROM `testdb`.`user` WHERE `name` = "huga"',
  function(err, results, fields) {
    console.log(results); // results contains rows returned by server
    process.exit(0);
  }
);
