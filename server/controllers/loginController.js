var express = require("express");
var router = express.Router();
var connection = require("../config/db.js");

var session;

router.post("/", function(req, res) {
    session = req.session;
    var username = req.body.username;
    var password = req.body.password;
    var sql = 'SELECT * from employee where username = ? and password = ? and status = 1';
    connection.query(sql, [username, password], function(err, rows, fields) {
        if (!err){
            session.username = username;
            session.name = rows[0].name;
            res.send(rows);
        }
        else{
            console.log('Error while performing Query.');
            connection.end();
        }
    });
});

router.get("/logout", function(req, res, next){
    req.session.destroy(function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log(req.session);
            res.send(req.session);
        }
    });
})
module.exports = router;