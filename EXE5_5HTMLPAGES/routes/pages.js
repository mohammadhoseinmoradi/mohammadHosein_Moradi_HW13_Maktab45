const express = require('express');
const routePage = express.Router();
const path = require('path');
const bodyParser = require('body-parser');
routePage.use(express.static(path.join(__dirname, "Public")))
routePage.use(bodyParser.urlencoded({ extended: false }))

routePage.get('/page1', (req, res) => {
    res.sendFile(path.join(__dirname, '/../public/Html/index1.html'));
})

routePage.get('/page2', (req, res) => {
    res.sendFile(path.join(__dirname, '/../public/Html/index2.html'));
})

routePage.get('/page3', (req, res) => {
    res.sendFile(path.join(__dirname, '/../public/Html/index3.html'));
})

routePage.get('/page4', (req, res) => {
    res.sendFile(path.join(__dirname, '/../public/Html/index4.html'));
})

routePage.get('/page5', (req, res) => {
    res.sendFile(path.join(__dirname, '/../public/Html/index5.html'));
})

module.exports = routePage;