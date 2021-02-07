// ------------- requires -------------------------------------------
const express = require('express')
const app = express();
const path = require('path')
const User = require('./routes/User')
const Admin = require('./routes/Admin')
    // ------------------------------------------------------------------
    // -------------- request urls --------------------------------------
    // ------------------------------------------------------------------
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/Html/index.html'));
})
app.get('/EXE4_ADMINANDUSER/public/js/main.js', (req, res) => {
    console.log(11111)
    res.sendFile(path.join(__dirname, 'public/js/main.js'))

})
app.get('/EXE4_ADMINANDUSER/public/Css/style.css', (req, res) => {
    console.log(22222)
    res.sendFile(path.join(__dirname, 'public/Css/style.css'));
})

// ---------------------------------------------------------------------
// --------------------- routes ----------------------------------------
// ---------------------------------------------------------------------
app.use('/User', User)
app.use('/Admin', Admin)
    // ---------------------------------------------------------------------
    // ------------------ listen port server -------------------------------
    // ---------------------------------------------------------------------
app.listen(5005, () => {
    console.log("the server is started 5005 !!");
})