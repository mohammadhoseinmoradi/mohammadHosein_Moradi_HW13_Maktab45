// -------------------------------------------------------------------
// --------------------- requires ------------------------------------
// ---------------------------------------------------------------------
const express = require('express');
const app = express();
const pages = require('./routes/pages')
const path = require('path');
const bodyParser = require('body-parser');
// ----------------------------------------------------------------------
app.use(express.static(path.join(__dirname, "Public")))
app.use(bodyParser.urlencoded({ extended: false }))
    // -----------------------------------------------------------------------
    // -------------------- request urls -------------------------------------
    // ------------------------------------------------------------------------
app.get('/', (req, res) => {
    res.send(" Welcome to root page")
})
app.get('/EXE5_5HTMLPAGES/public/Css/style1.css', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/Css/style1.css'));
})
app.get('/EXE5_5HTMLPAGES/public/Css/style2.css', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/Css/style2.css'));
})
app.get('/EXE5_5HTMLPAGES/public/Css/style3.css', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/Css/style3.css'));
})
app.get('/EXE5_5HTMLPAGES/public/Css/style4.css', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/Css/style4.css'));
})
app.get('/EXE5_5HTMLPAGES/public/Css/style5.css', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/Css/style5.css'));
})

// ------------------------------------------------------------------------
app.use('/pages', pages)
app.listen(5005, () => {
    console.log("The Server Hss Been Run In Port 50005");
})