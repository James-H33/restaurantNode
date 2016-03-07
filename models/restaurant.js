var mongoose = require('mongoose');

var restaurantSchema = new mongoose.Schema(
  {
    name: String,
    type: String,
    image: String,
    description: String,
    location: String,
    rating: String
  });

// var Restaurant = mongoose.model('Restaurant', restaurantSchema);

module.exports = mongoose.model('Restaurant', restaurantSchema);
