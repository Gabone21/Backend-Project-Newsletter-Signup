const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");


const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/signup.html");
});


app.post("/", function (req, res) {

    var nume = req.body.nNume;
    var prenume = req.body.pName;
    var email = req.body.email;

    console.log(nume, prenume, email);
})

// 37bfb36c684831a1452da5870647a49c - us21


app.listen(3000, function () {
    console.log("Server is running on port 3000");
});