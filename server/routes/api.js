var express = require('express');
var router = express.Router();

//routes for user api
router.use("/api/user", require("../controllers/userController"));
router.use("/api/login", require("../controllers/loginController"));

//add here other api routes
module.exports = router;
