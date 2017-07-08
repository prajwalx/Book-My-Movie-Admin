var mongoose = require('mongoose');
var userSchema = mongoose.Schema({
  TheatreName: String,
  State: String,
  City: String,
  Seats: String
});

module.exports = mongoose.model('Theatres',userSchema);
