const express = require('express');
const app = express();
const pages = require('./routes/pages')
const path = require('path');
const bodyParser = require('body-parser');
app.use(express.static(path.join(__dirname, "Public")))
app.use(bodyParser.urlencoded({ extended: false }))
app.get('/', (req, res) => {
    res.send(" Welcome to root page")
})
app.use('/pages', pages)
app.listen(5005, () => {
    console.log("The Server Hss Been Run In Port 50005");
})