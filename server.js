'use strict';
const express = require ('express');
const mongoose = require ('mongoose');
const bodyParser = require ('body-parser');
const Task = require ('./api/models/todoListModel');

const app = express();
const port = process.env.PORT || 3000;

// mongoose instance connection url connect
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Tododb');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const routes = require('./api/routes/todoListRoutes'); //importing route
routes(app); //register the route

app.listen(port);

console.log('todo list RESTful API server started on:' + port);
