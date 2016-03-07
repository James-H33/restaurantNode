var express    = require('express');
var app        = express();
var mongoose   = require('mongoose');
var bodyParser = require('body-parser');

mongoose.connect('mongodb://localhost/restaurant_node');
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

var restaurantSchema = new mongoose.Schema(
  {
    name: String,
    type: String,
    description: String,
    location: String,
    rating: String
  });

var Restaurant = mongoose.model('Restaurant', restaurantSchema);

Restaurant.create(
  {
    name: "Zeala",
    type: "East Indian",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    location: "Barnet Park, NY",
    rating: "5 stars"
  }, function(err, restaurants) {
      if(err) {
        console.log(err);
      } else {
        console.log(restaurants);
      }
});


app.get('/', function(req, res) {
  res.render('landing');
});

app.get('/home', function(req, res) {
  res.render('landing');
});

app.get('/restaurants', function(req, res) {
  Restaurant.find({}, function(err, allRest) {
    if(err) {
      console.log(err);
    } else {
      res.render('restaurants/restaurants', {restaurant: allRest});
    }
  });
});

app.listen(27017, function() {
  console.log("Server has started...");
});
