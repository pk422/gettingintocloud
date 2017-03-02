'use strict';
let UsersModel = require("../models/User");
const mysql = require('mysql');
const connectionString = process.env.SQL_CONNECTION | "";
const express = require('express');
const loginrouter = express.Router();
var mysqlconnection = require('../models/mysqldb.js');

var mysqldb = mysql.createConnection({
    host: mysqlconnection.mysqlConnectionParams.server,
    user: mysqlconnection.mysqlConnectionParams.user,
    password: mysqlconnection.mysqlConnectionParams.password,
    database: mysqlconnection.mysqlConnectionParams.database
});

loginrouter.post('/login', (req, res) => {
    let user = { body: {
                                id: 1,
                                username: 'pradeepk',
                                firstName: 'Pradeep',
                                lastName: 'Kumar',
                                token: 'fake-jwt-token'
                            }}
     res.status(200).json(user);
    // mysqldb.query('SELECT * FROM cms.users where cms.users.username=' + "'" + req.body.username + "'", function(err, rows, fields) {
    //     if (!err) {
    //         // console.log('The solution is: ', rows);
    //         for (let p of rows) {
    //             let post = new PostModel(p.id, p.title, p.content, p.category, p.created_at, p.status);
    //             postsArray.push(post);
    //            // console.log('postsArray:' + p.id, p.title, p.content, p.category, p.created_at, p.status);
    //         }
    //         res.status(200).json(postsArray);
    //     } else {
    //         console.log('Error while performing Query.');
    //         res.status(404).json('error occurred');
    //     }
    // });
}) ;
module.exports = loginrouter;