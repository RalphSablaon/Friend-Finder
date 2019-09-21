// Deoendencies
var express = require ('express');
var path = require ('path');
var bodyParser = require ('body-parser');

// Set port for the app
var PORT = process.env.PORT || 8080
var app = express();

// Set up Express app to parse 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// Route
require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);

// Allow server to listen to client requests
app.listen(PORT, function() {
	console.log("Server is listening on PORT: " + PORT);
});
