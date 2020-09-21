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

    app.delete("/api/notes/:id", function(req, res) {
        notes2 = [];
        for (var i = 0; i < notes.length; i++) {
            if (notes[i].id != req.params.id) {
                notes2.push(notes[i]);
            }
        }
        notes = notes2;
        fs.writeFileSync("./db/db.json", JSON.stringify(notes), function(err, res) {
            if (err) {
                throw err;
            }
        });
        res.json(notes);
        
    })
};

