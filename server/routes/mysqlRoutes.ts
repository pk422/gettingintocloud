'use strict';
let PostModel = require("../models/Post");
let CommentsModel = require("../models/Comment");
let UsersModel = require("../models/User");

const mysql = require('mysql');
const connectionString = process.env.SQL_CONNECTION | "";
const express = require('express');
const sqlrouter = express.Router();

var mysqlconnection = require('../models/mysqldb.js');

var mysqldb = mysql.createConnection({
    host: mysqlconnection.mysqlConnectionParams.server,
    user: mysqlconnection.mysqlConnectionParams.user,
    password: mysqlconnection.mysqlConnectionParams.password,
    database: mysqlconnection.mysqlConnectionParams.database
});

// Get the list of posts for a given user
sqlrouter.get('/posts', (req, res) => {
    let postsArray = new Array();
    mysqldb.query('SELECT * FROM cms.post where cms.post.user_id=5', function(err, rows, fields) {
        if (!err) {
            //console.log('The solution is: ', rows);
            for (let p of rows) {
                let post = new PostModel(p.id, p.title, p.content, p.category, p.created_at, p.status);
                postsArray.push(post);
               //console.log('postsArray:' + p.id, p.title, p.content, p.category, p.created_at, p.status);
            }
            res.status(200).json(postsArray);
        } else {
            console.log('Error while performing Query.');
            res.status(404).json('error occurred');
        }
    });
    //mysqldb.end();

});

// Get the list of posts for a given category
sqlrouter.get('/posts/:category', (req, res) => {
    let postsArray = new Array();
    mysqldb.query('SELECT * FROM cms.post where cms.post.user_id=5', function(err, rows, fields) {
        if (!err) {
            //console.log('The solution is: ', rows);
            for (let p of rows) {
                let post = new PostModel(p.id, p.title, p.content, p.category, p.created_at, p.status);
                postsArray.push(post);
               //console.log('postsArray:' + p.id, p.title, p.content, p.category, p.created_at, p.status);
            }
            res.status(200).json(postsArray);
        } else {
            console.log('Error while performing Query.');
            res.status(404).json('error occurred');
        }
    });
    //mysqldb.end();

});

// Get comments for a specific post
sqlrouter.get('/comments/:postId', (req, res) => {
    const commentsArray = new Array();
    console.log('post id =' + req.params.postId);
    mysqldb.query('SELECT * FROM cms.comments where cms.comments.post_id=' + "'" + req.params.postId + "'" , function(err, rows, fields) {
        if (!err) {
            // console.log('The solution is: ', rows);
            for (const p of rows) {
                const comment = new CommentsModel(p.id, p.user_id, p.post_id, p.author_email, p.author,
                 p.content, p.created_at, p.approved);
                commentsArray.push(comment);
               // console.log('postsArray:' + p.id, p.title, p.content, p.category, p.created_at, p.status);
            }
            res.status(200).json(commentsArray);
        } else {
            console.log('Error while performing Query.');
            res.status(404).json('error occurred');
        }
    });
    //mysqldb.end();

});

/* GET api listing. */
sqlrouter.get('/', (req, res) => {
   res.send('Something went wrong.Give us a moment to figure it out.');
});

module.exports = sqlrouter;
