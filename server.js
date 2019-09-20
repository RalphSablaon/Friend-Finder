// Deoendencies
var express = require ('express');
var path = require ('path');

// Set port for the app
var PORT = process.env.PORT || 8080
var app = express();

// Set up Express app to parse 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Allow server to listen to client requests
app.listen(PORT, function() {
	console.log("Server is listening on PORT: " + PORT);
});
