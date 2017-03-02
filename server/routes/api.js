const express = require('express');
const fs = require('fs');
const router = express.Router();

const mysql = require('mysql');
const axios = require('axios');
const API = 'https://jsonplaceholder.typicode.com';
const connectionString = process.env.SQL_CONNECTION | "";

var mysqlRouter = require('./mysqlRoutes.ts');
var loginRouter = require('./login.ts');

router.use('/posts',mysqlRouter);
router.use('/comments',mysqlRouter);
router.use('/authenticate',loginRouter);

module.exports = router;
