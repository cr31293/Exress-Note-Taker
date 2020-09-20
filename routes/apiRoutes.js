const { json } = require("body-parser");
const { RSA_NO_PADDING } = require("constants");
// * The following API routes should be created:

//   * GET `/api/notes` - Should read the `db.json` file and return all 
//     saved notes as JSON.

//   * POST `/api/notes` - Should receive a new note to save on the request 
//   body, add it to the `db.json` file, and then return the new note to the 
//   client.
var express = require("express");
var router = express.Router();
var fs = require("fs");
var notes = require("../db/db.json");
var path = require("path");



module.exports = function(app) {

    app.get("/api/notes", function(req, res) {
        res.json(notes);
    });

    app.post("/api/notes", function(req, res) {
        var note = {
            id: notes.length,
            title: req.body.title,
            text: req.body.text
        };
        notes.push(note);

        fs.writeFileSync("./db/db.json", JSON.stringify(notes), function(err, res) {
            if (err) {
                throw err;
            }
        })
        res.json(note);
    });

    // app.delete("/api/notes/:id", function(req, res) {
    //     if (notes.id = req.params.id) {
    //         notes.splice(notes.id,0,);
    //     }
    // })



// app.get("/api/notes", function(req, res) {
//     notes = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
//     res.json(notes);
// });

// app.post("/api/notes", function(req, res) {
//     var note = {
//         id: Math.floor(Math.random()),
//         text: req.body.title,
//     };
//     notes.push(note);

//     fs.writeFileSync("./db/db.json", JSON.stringify(notes, function(err, res) {
//         if (err) {
//             throw err;
//         }
//     }))
//     res.json(note);
// });



// // if we want to clear out the db
// app.post("/api/clear", function(req, res) {
//     // empty out array
//     notes.length = 0;

//     res.json({ ok: true });
// })

};



