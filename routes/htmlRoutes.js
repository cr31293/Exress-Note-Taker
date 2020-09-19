// * The following HTML routes should be created:

//   * GET `/notes` - Should return the `notes.html` file.

//   * GET `*` - Should return the `index.html` file

var path = require("path");

module.exports = function(app) {

app.get("/index", function(res,req) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

app.get("/notes", function(res,req) {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
});



// default to index if no matching route found
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"))
});

};

