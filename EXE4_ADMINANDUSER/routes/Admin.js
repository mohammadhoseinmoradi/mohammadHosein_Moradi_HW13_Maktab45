// --------------------------------------------------------------
// --------------- requires--------------------------------------
// -------------------------------------------------------------
const express = require('express');
const routeAdmin = express.Router();
const path = require('path');
const bodyParser = require('body-parser');
const fs = require('fs');
const routeUser = require('./User');
// ----------------------------------------------------------------
routeUser.use(bodyParser.urlencoded({ extended: true }));
// -----------------------------------------------------------------
// ------------------ read as a file -------------------------------
// ------------------------------------------------------------------
let dataUsers = fs.readFileSync('./routes/user.txt', 'utf8');
routeAdmin.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/Html/admin.html'));
})

// ------------------------------------------------------------------
// ----------------- request url ------------------------------------
// -------------------------------------------------------------------
routeAdmin.get('/getAllUser', (req, res) => {

    res.status(200).send(dataUsers)
})


module.exports = routeAdmin;