var express = require("express");
var app = express();
var bodyParser = require("body-parser");

var PORT = 3000;

// aquí voy a copiar todo lo de body parser

// create application/json parser
var jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

// POST /login gets urlencoded bodies
app.post('/login', urlencodedParser, function (req, res) {
    if (!req.body) return res.sendStatus(400)
    res.send('welcome, ' + req.body.username)
})

// POST /api/users gets JSON bodies
app.post('/api/users', jsonParser, function (req, res) {
    if (!req.body) return res.sendStatus(400)
    // create user in req.body
})

// parse various different custom JSON types as JSON
app.use(bodyParser.json({ type: 'application/*+json' }))

// parse some custom thing into a Buffer
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }))

// parse an HTML body into a string
app.use(bodyParser.text({ type: 'text/html' }))

app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT)

});
