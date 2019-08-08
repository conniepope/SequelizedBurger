// Require models
var db = require("../models");

// var express = require("express");
// var router = express.Router();

// Routes
module.exports = function(app) {

        // select all
    app.get("/", function(req, res) {
        db.burgers.findAll({}).then(function(dbBurger) {
            // var list = (var i = 0; i < burgers.length; i++)
            console.log(dbBurger)
            res.render("index", {burgers: dbBurger}) 
        });
    });
        // insert a new burger
    app.post("/api/burgers", function(req, res) {
        console.log("res: " + res)
        db.burgers.create({
            burger_name: req.body.burger,
            devoured: false
        }).then(function(result){
            res.json({id: result.insertId});
            console.log("Post result " + result)
        });
    });
        // update burger by making devoured = true
    app.put("/api/burgers", function(req, res) {
        console.log("is this working?")
        db.burgers.update({
            devoured: true
        }, {
            where: {
                id: req.body.id
            }
        }).then(function(dbburgers){
            res.json(dbburgers);
        });
    });
};

