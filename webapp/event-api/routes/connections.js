var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var Connection = require('../models/Connection.js');

/* GET connection listing.
 * test with:
 * curl http://localhost:8080/connections
 */
router.get('/', function(req, res, next) {
    Connection.find(function (err, connections) {
        if (err) return next(err);
        res.json(connections);
    });
});


/* POST create Connection.  
 * test with: 
 * curl -XPOST http://localhost:8080/Connections -d 'type=SCARY&severity=100&description=OHNO'
*/
router.post('/', function(req, res, next) {
    Connection.create(req.body, function (err, post) {
        if (err) return next(err);  
        res.json(post);
    });
});

module.exports = router;