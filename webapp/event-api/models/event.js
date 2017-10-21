var mongoose = require('mongoose');

var EventSchema = new mongoose.Schema({
    type: String,
    severity: Number,
    description: String, 
});

module.exports = mongoose.model('Event', EventSchema);