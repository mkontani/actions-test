const mysql = require('mysql2');

// create the pool to database
const pool = mysql.createPool({
  host: process.env.MYSQL_HOST,
  port: process.env.MYSQL_PORT,
  user: 'root'
});

// create database
pool.query(
  'CREATE DATABASE `testdb`',
  function(err, results) {
    console.log(err, results); 
  }
);

// create table
pool.query(
  'CREATE TABLE `testdb`.`user` (`id` int primary key auto_increment, `name` varchar(10), `age` int)',
  function(err, results) {
    console.log(err, results); // results contains rows returned by server
  }
);

// insert data
pool.query(
  'INSERT INTO `testdb`.`user` (`name`, `age`) VALUES ("hoge", 20), ("huga", 22), ("piyo", 24)',
  function(err, results) {
    console.log(err, results);
  }
);

// simple query
pool.query(
  'SELECT * FROM `testdb`.`user` WHERE `name` = "huga"',
  function(err, results, fields) {
    console.log(err, results, fields); // results contains rows returned by server
    process.exit(0);
  }
);
