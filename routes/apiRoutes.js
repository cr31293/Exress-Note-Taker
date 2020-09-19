// * The following API routes should be created:

//   * GET `/api/notes` - Should read the `db.json` file and return all 
//     saved notes as JSON.

//   * POST `/api/notes` - Should receive a new note to save on the request 
//   body, add it to the `db.json` file, and then return the new note to the 
//   client.
var express = require("express");
var notes = require("../Develop/db/db.json");

module.exports = function(app) {

app.get("/api/notes", function(req, res) {
   res.json(notes);
});

app.post("/api/notes", function(req, res) {
    console.log(req.body);
    const note = req.body;

    notes.push(note);
    res.json(note);
});

// if we want to clear out the db
app.post("/api/clear", function(req, res) {
    // empty out array
    notes.length = 0;

    res.json({ ok: true });
})

};



