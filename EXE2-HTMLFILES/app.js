// ------------- requires ----------------------
// ---------------------------------------------
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
// ---------------------------------------------
// ----------- url request ---------------------
// ---------------------------------------------
app.use(express.static(path.join(__dirname, "Public")))
app.use(bodyParser.urlencoded({ extended: false }))

// -----------------------------------------------------------------------Html File ----------
app.get('/', (req, res, ) => {
        res.sendFile(path.join(__dirname, "/Public/Html/index.html"))


    })
    // ------------------------------------------------------------------------Css file ----------
app.get('/EXE2-HTMLFILES/Public/Css/style.css', (req, res) => {
        res.sendFile(path.join(__dirname, "/Public/Css/style.css"))

    })
    // ------------------------------------------------------------------------Js File ------------
app.get('/EXE2-HTMLFILES/Public/Js/main.js', (req, res) => {
        res.sendFile(path.join(__dirname, "/Public/Js/main.js"))

    })
    // ------------------------------------------------------------------------Img File -----------
app.get('/EXE2-HTMLFILES/Public/Img/QIFTOLLY.png', (req, res) => {
    res.sendFile(path.join(__dirname, "/Public/Img/QIFTOLLY.png"))

})

// ----------------------------------------------------------------
// ---------------- listen Server Port ----------------------------
// ----------------------------------------------------------------
app.listen(5005, () => {
    console.log("The Server is starting 5005 !!")
})