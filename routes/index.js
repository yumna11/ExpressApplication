var express = require('express');
var router = express.Router();
var videoData = require('../videodata.json');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {projectName:'Video Champ',
                        vd:videoData});
});

module.exports = router;
