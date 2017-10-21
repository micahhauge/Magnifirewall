var mongoose = require('mongoose');

var EventSchema = new mongoose.Schema({
    type: String,
    severity: Number,
    ip: String,
    description: String, 
});

module.exports = mongoose.model('Event', EventSchema);