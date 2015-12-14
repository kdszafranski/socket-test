/**
 * Created by cedrix on 12/13/15.
 */
var express = require("express");
var router = express.Router();
var path = require('path');


// Catch all, static files
router.get("/*", function(req, res) {
    var file = "../public/assets/views/index.html";
    res.sendFile(path.join(__dirname, "../public/", file));
});

module.exports = router;