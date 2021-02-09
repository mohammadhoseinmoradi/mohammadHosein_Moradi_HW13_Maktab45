const express = require('express');
const routePage = express.Router();
const path = require('path');
const bodyParser = require('body-parser');

let page = ["/1", "/2", "/3", "/4", "/5", "/6"]
routePage.get(page, (req, res) => {
    res.sendFile(path.join(__dirname, '/../public/Html/moreinfo.html'));
})
routePage.get('/Meno.html', (req, res) => {
    res.sendFile(path.join(__dirname, '/../public/Html/Meno.html'));
})

module.exports = routePage;