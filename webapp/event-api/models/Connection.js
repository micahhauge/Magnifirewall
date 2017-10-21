var mongoose = require('mongoose');

var ConnectionSchema = new mongoose.Schema({
    ipAddress: String,
    macAddress: String,
    ConnectionTime: Number,
});

module.exports = mongoose.model('Connection', ConnectionSchema);