var mongoose;

mongoose = require('mongoose');

mongoose.connect('mongodb://nfcgamedb:nfc123456@ds035674.mongolab.com:35674/nfcgame');

module.exports = mongoose;
