var express = require("express");
var path = require("path");
var fs = require("fs");

// set up express app
var app = express();
var PORT = process.env.PORT || 3000;


// set up express app to handle parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);




app.listen(PORT, function(){
    console.log("App listening on PORT: " + PORT);
});

app.use(express.static("public"));