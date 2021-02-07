const express = require('express');
const routeUser = express.Router();
const bodyParser = require('body-parser');
const fs = require('fs');
routeUser.use(bodyParser.urlencoded({ extended: true }));
let dataUsers = JSON.parse(fs.readFileSync('./routes/user.txt', 'utf8'));

routeUser.post('/getUser', (req, res) => {
    console.log("dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd")

    console.log(dataUsers)
    data = req.body
        // console.log(data, 'Got body:', req.body.Username);
    console.log(req.body.Username);
    console.log(req.body.Password)
    for (let i = 0; i < dataUsers.length; i++) {
        if (dataUsers[i].userName === req.body.Username && dataUsers[i].password === req.body.Password) {
            console.log(1111111111111111111111111111)

            res.status(200).send("found")
        } else {
            console.log(22222222222222222222222222222);

            res.status(400).send("notfound")
        }
    }

})





module.exports = routeUser;