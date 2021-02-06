// -------------require----------------------------------
// -----------------------------------------------------
const express = require('express');
const router = express.Router();
// ------------------------------------------------------
// ------------- routers ---------------------------------
// -------------------------------------------------------
router.get('/', (req, res) => {
    res.send("Hello router User !!")
})
router.get('/admin', (req, res) => {
    res.send("welcome to  Admin !!")
})
router.get('/user', (req, res) => {
    res.send("welcome to  User !!")
})
router.get('/singout', (req, res) => {
    res.send("welcome to  Sing Out !!")
})
router.get('/singin', (req, res) => {
        res.send("welcome to  Sing In !!")
    })
    // --------------------------------------------------------
    //---------------------- export add to  server ------------
module.exports = router;