var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');



var app = express();
var PORT = process.env.PORT || 3000; 

//aquí pego todo lo de body parser con unos cambios que me dijo que hiciera el digital ta
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));



require('./app/routes/api-routes.js')(app); 
require('./app/routes/html-routes.js')(app);



app.listen(PORT, function() {
	console.log("App listening on PORT: " + PORT);
});