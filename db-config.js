"use strict";

const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'test',
    port: 8889
});
connection.connect(function(err) {
    if (err) throw err;
});

module.exports = connection;