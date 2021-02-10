// ------------------------------------------------------------------------------------
// ---------------------------- REQUIERS ----------------------------------------------
// ------------------------------------------------------------------------------------
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const fs = require('fs')
const kala = require('./routes/kala')
    // -------------------------------------------------------------------------------------
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
// -------------------------- READ FILE JSON information's ------------------------------
let dataKala = JSON.parse(fs.readFileSync('./public/Js/file.txt', 'utf8'));
// --------------------------------------------------------------------------------------
// ------------------------------ REQUEST HOME PAGE URL ---------------------------------
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/Html/index.html'));
})
app.get('/EXE7_WEBSITE/public/Js/main.js', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/Js/main.js'));
})
app.get('/EXE7_WEBSITE/public/Css/index.css', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/Css/index.css'));
})

// --------------------------------------------------------------------------------------
// ------------------------------ REQUEST MENO OF HOME  PAGE ----------------------------
app.get('/EXE7_WEBSITE/public/Html/Meno.html', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/Html/Meno.html'));
})
app.get('/EXE7_WEBSITE/public/Css/meno.css', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/Css/meno.css'));
})
app.get('/EXE7_WEBSITE/public/Js/meno.js', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/Js/meno.js'));
})

// ---------------------------------------------------------------------------------------
// ------------------------------- REQUEST BODY OF HOME PAGE -----------------------------
app.get('/EXE7_WEBSITE/public/Html/body.html', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/Html/body.html'));
})
app.get('/EXE7_WEBSITE/public/Js/body.js', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/Js/body.js'));
})
app.get('/EXE7_WEBSITE/public/Css/body.css', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/Css/body.css'));
})

// --------------------------------------------------------------------------------------------
// ---------------------------------- REQUEST DATA FILE OF information's ----------------------
app.get('/getdata', (req, res) => {
        res.status(200).json(dataKala);
    })
    // ---------------------------------------------------------------------------------------------
    // ----------------------------------- REQUEST ABOUT US PAGE URL ----------------------------------
app.get('/EXE7_WEBSITE/public/Html/About.html', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/Html/About.html'));
})
app.get('/EXE7_WEBSITE/public/Js/About.js', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/Js/About.js'));
})

app.get('/EXE7_WEBSITE/public/Css/About.css', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/Css/About.css'));
})

// ------------------------------------------------------------------------------------------------
// ----------------------------------- REQUEST CONTACT US PAGE URL --------------------------------
app.get('/EXE7_WEBSITE/public/Html/Contact.html', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/Html/Contact.html'));
})
app.get('/EXE7_WEBSITE/public/Js/Contact.js', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/Js/Contact.js'));
})
app.get('/EXE7_WEBSITE/public/Css/Contact.css', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/Css/Contact.css'));
})

// -----------------------------------------------------------------------------------------------------
// --------------------------------------- REQUEST KALAs PAGE  js and css--------------------------------
//  --------------------------------------------------------------------------------------------------
// --------------------------------------------- kala 1 -------------------------------------------------
app.get('/EXE7_WEBSITE/public/Js/kala1.js', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/Js/kala1.js'));
})
app.get('/EXE7_WEBSITE/public/Css/kala1.css', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/Css/kala1.css'));
})

// ---------------------------------------------kala 2 ---------------------------------------------------
app.get('/EXE7_WEBSITE/public/Js/kala2.js', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/Js/kala2.js'));
})
app.get('/EXE7_WEBSITE/public/Css/kala2.css', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/Css/kala2.css'));
})

// -------------------------------------------- kala 3 ------------------------------------------------------
app.get('/EXE7_WEBSITE/public/Js/kala3.js', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/Js/kala3.js'));
})
app.get('/EXE7_WEBSITE/public/Css/kala3.css', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/Css/kala3.css'));
})

// -------------------------------------------- kala 4 -----------------------------------------------------
app.get('/EXE7_WEBSITE/public/Js/kala4.js', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/Js/kala4.js'));
})
app.get('/EXE7_WEBSITE/public/Css/kala4.css', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/Css/kala4.css'));
})

// ------------------------------------------- kala 5 -----------------------------------------------------------
app.get('/EXE7_WEBSITE/public/Js/kala5.js', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/Js/kala5.js'));
})
app.get('/EXE7_WEBSITE/public/Css/kala5.css', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/Css/kala5.css'));
})

// ------------------------------------------ kala 6 ----------------------------------------------------------
app.get('/EXE7_WEBSITE/public/Js/kala6.js', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/Js/kala6.js'));
})
app.get('/EXE7_WEBSITE/public/Css/kala6.css', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/Css/kala6.css'));
})











app.use('/kala', kala)


app.listen(3000, () => {
    console.log("server port !!")
})