'use strict';

global.__base = __dirname + "/src";
global.__root = __dirname;

//require external modules
const bodyParser = require('body-parser');
const multer  = require('multer');
const config = require('config');

//Declare express and configurate
const express = require('express');
const app = express();

//Configure Directory path
app.use(bodyParser.urlencoded({extended : false}));
app.use(express.static(__root + '/public'));
app.set('view engine','ejs');
app.set('views', __root + '/views');

console.log('bad');