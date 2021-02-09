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
    // --------------------------------------- REQUEST MOREINFORMATIONS KALA PAGE ---------------------------
app.get('/EXE7_WEBSITE/public/Js/moreinfo.js', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/Js/moreinfo.js'));
})
app.get('/EXE7_WEBSITE/public/Css/moreinfo.css', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/Css/moreinfo.css'));
})










app.use('/kala', kala)


app.listen(3000, () => {
    console.log("server port !!")
})