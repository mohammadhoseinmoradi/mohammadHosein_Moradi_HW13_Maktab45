const express = require('express');
const routePage = express.Router();
const path = require('path');
const bodyParser = require('body-parser');


routePage.get("/0", (req, res) => {
    res.sendFile(path.join(__dirname, '/../public/Html/kala1.html'));
})
routePage.get("/1", (req, res) => {
    res.sendFile(path.join(__dirname, '/../public/Html/kala2.html'));
})
routePage.get("/2", (req, res) => {
    res.sendFile(path.join(__dirname, '/../public/Html/kala3.html'));
})
routePage.get("/3", (req, res) => {
    res.sendFile(path.join(__dirname, '/../public/Html/kala4.html'));
})
routePage.get("/4", (req, res) => {
    res.sendFile(path.join(__dirname, '/../public/Html/kala5.html'));
})
routePage.get("/5", (req, res) => {
    res.sendFile(path.join(__dirname, '/../public/Html/kala6.html'));
})
routePage.get('/Meno.html', (req, res) => {
    res.sendFile(path.join(__dirname, '/../public/Html/Meno.html'));
})

module.exports = routePage;