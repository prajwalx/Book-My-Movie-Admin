var mongoose = require('mongoose');
var userSchema = mongoose.Schema({
  Poster: String,
  Title: String,
  Actors: String,
  Duration: String,
  Genre: String,
  Directors: String,
  Id:String
});

module.exports = mongoose.model('Movies',userSchema);
