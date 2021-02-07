const express = require('express');
const routeAdmin = express.Router();
const bodyParser = require('body-parser');
const fs = require('fs');
const routeUser = require('./User');
routeUser.use(bodyParser.urlencoded({ extended: true }));
let dataUsers = JSON.parse(fs.readFileSync('./routes/user.txt', 'utf8'));
routeAdmin.get('/getAllUsers', (req, res) => {
    res.send(dataUsers)
})


module.exports = routeAdmin;