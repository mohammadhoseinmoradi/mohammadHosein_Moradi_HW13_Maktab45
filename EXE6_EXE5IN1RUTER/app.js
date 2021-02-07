const express = require('express');
const app = express();
const path = require('path')
const bodyParser = require('body-parser')
const pages = require('./routes/pages')

app.get('/', (req, res) => {
    res.send(" Welcome To root !!")
})
app.get('/EXE_5HTMLPAGES/public/Css/style1.css', (req, res) => {
    console.log(222222222)
    res.sendFile(path.join(__dirname, '/public/Css/style1.css'));
})
app.get('/EXE5_5HTMLPAGES/public/Css/style2.css', (req, res) => {
    console.log(222222222)
    res.sendFile(path.join(__dirname, '/public/Css/style2.css'));
})

app.get('/EXE5_5HTMLPAGES/public/Css/style3.css', (req, res) => {
    console.log(222222222)
    res.sendFile(path.join(__dirname, '/public/Css/style3.css'));
})

app.get('/EXE5_5HTMLPAGES/public/Css/style4.css', (req, res) => {
    console.log(222222222)
    res.sendFile(path.join(__dirname, '/public/Css/style4.css'));
})

app.get('/EXE5_5HTMLPAGES/public/Css/style5.css', (req, res) => {
    console.log(222222222)
    res.sendFile(path.join(__dirname, '/public/Css/style5.css'));
})





app.use('/pages', pages)

app.listen(5005, () => {
    console.log("Staring Server in port 5005 !!!")
})