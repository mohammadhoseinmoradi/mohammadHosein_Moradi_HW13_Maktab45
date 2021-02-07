const express = require('express');
const routePage = express.Router();
const path = require('path');
const bodyParser = require('body-parser');

routePage.use(express.static(path.join(__dirname, "Public")))
routePage.use(bodyParser.urlencoded({ extended: true }))

let routs = ["/page1", "/page2", "/page3", "/page4", "/page5", "/EXE6_EXE5IN1RUTER/public/Css/style1.css", "/EXE6_EXE5IN1RUTER/public/Css/style2.css", "/EXE6_EXE5IN1RUTER/public/Css/style3.css", "/EXE6_EXE5IN1RUTER/public/Css/style4.css", "/EXE6_EXE5IN1RUTER/public/Css/style5.css"]
routePage.get(routs, (req, res) => {
    let page = req.originalUrl.split('/');
    console.log(page);
    if (page[2] === "page1") {
        res.sendFile(path.join(__dirname, '/../public/Html/index1.html'));
    } else if (page[2] === "page2") {
        res.sendFile(path.join(__dirname, '/../public/Html/index2.html'));
    } else if (page[2] === "page3") {
        res.sendFile(path.join(__dirname, '/../public/Html/index3.html'));
    } else if (page[2] === "page4") {
        res.sendFile(path.join(__dirname, '/../public/Html/index4.html'));
    } else if (page[2] === "page5") {
        res.sendFile(path.join(__dirname, '/../public/Html/index5.html'));
    } else if (page[5] === "style1.css") {
        res.sendFile(path.join(__dirname, '/../public/Css/style1.css'));
    } else if (page[5] === "style2.css") {
        res.sendFile(path.join(__dirname, '/../public/Css/style2.css'));
    } else if (page[5] === "style3.css") {
        res.sendFile(path.join(__dirname, '/../public/Css/style3.css'));
    } else if (page[5] === "style4.css") {
        res.sendFile(path.join(__dirname, '/../public/Css/style4.css'));
    } else if (page[5] === 'style5.css') {
        res.sendFile(path.join(__dirname, '/../public/Css/style5.css'));
    } else {
        res.send(" not found this pages");
    }

})

module.exports = routePage;