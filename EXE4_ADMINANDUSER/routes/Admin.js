const express = require('express');
const routeAdmin = express.Router();
const path = require('path');
const bodyParser = require('body-parser');
const fs = require('fs');
const routeUser = require('./User');
routeUser.use(bodyParser.urlencoded({ extended: true }));
let dataUsers = fs.readFileSync('./routes/user.txt', 'utf8');
routeAdmin.get('/', (req, res) => {
    console.log
    res.sendFile(path.join(__dirname, '../public/Html/admin.html'));
})
routeAdmin.get('/getAllUser', (req, res) => {
    console.log("222222222222222222222222222222222222222222222")
    res.status(200).send(dataUsers)
})


module.exports = routeAdmin;