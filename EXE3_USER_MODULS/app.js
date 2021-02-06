// -------------- requires --------------------------------
const express = require("express")
const app = express();
const User = require('./routes/User')
    // -------------------------------------------------------
    // ------------------- request url -----------------------
app.get('/', (req, res) => {
        res.send("Welcome to router !!!!!")
    })
    // ------------------------------------------------------------
    // ------------------------- routers --------------------------
app.use('/User', User)
    // ------------------------------------------------------------
    // -------------------- listen port server --------------------
app.listen(5005, () => {
    console.log("the server is started 5005 !!");
})