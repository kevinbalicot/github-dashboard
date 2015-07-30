'use strict';

var express = require('express');
var app = express();
var router = express.Router();

router.use(express.static(__dirname + '/public'));

router.get('/', function(req, res) {

    res.sendFile(__dirname + '/public/index.html');
});

app.use('/', router);

app.listen(8081);