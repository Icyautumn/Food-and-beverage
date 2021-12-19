var mysql = require('mysql');
var connection = mysql.createConnection({
    host:'localhost',
    port: '3306',
    user: 'root',
    password: '',
    database: 'food_n_beverage'
});

connection.connect(err => {
    if (err) throw err;
    console.log('Connected To DB');
});

module.exports = connection;