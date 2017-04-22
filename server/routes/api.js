var express = require('express');
var router = express.Router();

//routes for user api
router.use("/api/user", require("../controllers/userController"));

//add here other api routes
module.exports = router;
