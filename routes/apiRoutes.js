// * The following API routes should be created:

//   * GET `/api/notes` - Should read the `db.json` file and return all 
//     saved notes as JSON.

//   * POST `/api/notes` - Should receive a new note to save on the request 
//   body, add it to the `db.json` file, and then return the new note to the 
//   client.

var db = require("../db/db");

module.exports = function(app) {

app.get("/api/notes", function(req,res) {
   res.json(db);
});

app.post("/api/notes", function(req, res) {
    const note = req.body;
    db.push(note);
    res.json(note);
    console.log(req.body);
});

// if we want to clear out the db
app.post("/api/clear", function(req,res) {
    // empty out array
    db.length = 0;

    res.json({ ok: true });
})

};

