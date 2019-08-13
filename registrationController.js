const express = require('express');
var router = express.Router();

//Page Navigation -- Routing
router.get('/',(req,res) => {
    res.json('Sample Page');
});

module.exports = router;
