var express = require("express");
var router = express.Router();
var connection = require("../config/db.js");
//user = require("../models/user.js");


router.get("/", function(req, res) {
    var sql = 'SELECT * from employee';
    connection.query(sql, function(err, rows, fields) {
        if (!err){
            res.send(rows);
        }
        else{
            console.log('Error while performing Query.');
        }
    });
});
router.get("/:id", function(req, res) {
    var id = req.params.id;
    var sql = 'SELECT * from employee where eid = ' + id;
    connection.query(sql, function(err, rows, fields) {
        if (!err){
            res.send(rows);
        }
        else{
            console.log('Error while performing Query.');
            connection.end();
        }
    });
});
router.post("/", function(req, res) {
    var data = req.body;

    //var sql = "insert into employee(name, username, password, email, phone, department) values('" + name + "', '" + username + "', '" + password + "', '" + email + "'," + phone + ", '" + department + "');"
    var sql = 'insert into employee set ?';
    connection.query(sql, data, function(err, rows, fields) {
        if (!err){
            res.send(rows);
        }
        else{
            console.log('Error while performing Query.');
            connection.end();
        }
    });
});
router.put("/:id", function(req, res) {
    debugger;
    var id = req.params.id;
    var data = req.body;
    var sql = 'update employee set ? where eid = ?';
    connection.query(sql, [data, id], function(err, rows, fields) {
       if (!err){
           res.send(rows);
       }
       else{
           console.log('Error while performing Query.');
           connection.end();
       }
   });
});
router.delete("/:id", function(req, res) {
    var id = req.params.id;
    var statusCode = 0;
    var sql = 'update employee set status = ? where eid = ?';
    connection.query(sql, [statusCode, id], function(err, rows, fields) {
       if (!err){
           res.send(rows);
       }
       else{
           console.log('Error while performing Query.');
           connection.end();
       }
   });
});

module.exports = router;
