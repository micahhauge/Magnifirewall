var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var Event = require('../models/Event.js');

/* GET event listing.
 * test with:
 * curl http://localhost:8080/events
 * curl https://magnifirewall-micahhauge.c9users.io/events
 */
router.get('/', function(req, res, next) {
    Event.find(function (err, events) {
        if (err) return next(err);
        res.json(events);
    });
});


/* POST create event.  
 * test with: 
 * curl -XPOST https://magnifirewall-micahhauge.c9users.io/events -d 'type=BAD&severity=100&description=NEW'
*/
router.post('/', function(req, res, next) {
    Event.create(req.body, function (err, post) {
        if (err) return next(err);  
        res.json(post);
    });
});

module.exports = router;
