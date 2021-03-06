var express    = require('express');
var app        = express();
var mongoose   = require('mongoose');
var bodyParser = require('body-parser');
var Restaurant = require('./models/restaurant');
var seedDB     = require('./seed');
seedDB();

// mongoose.connect('mongodb://localhost/restaurant_node');
mongoose.connect('mongodb://restbud:String33@ds023438.mlab.com:23438/restaurant_node');
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

// Restaurant.create(
//   {
//     name: "Burger Din",
//     type: "Southern Style",
//     image: "http://static1.squarespace.com/static/51d32c54e4b001d5c1392e82/t/5243112fe4b07ea3b5394a73/1380127025989/Zombie+Burger+%2B+Drink+Lab+-+interior.jpg",
//     description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//     location: "Arista, Texas",
//     rating: "4.5 stars"
//   }, function(err, restaurants) {
//       if(err) {
//         console.log(err);
//       } else {
//         console.log(restaurants);
//       }
// });


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

app.get('/restaurants/new', function(req, res) {
  res.render('restaurants/new');
});

app.post('/restaurants', function(req, res) {
  // req.params acquires the posting information and passed through the Restaurant.create function
  var name = req.body.name;
  var type = req.body.type;
  var image = req.body.image;
  var desc = req.body.description;
  var location = req.body.location;
  var rating = req.body.rating;

  var newRest = ({
    name: name,
    type: type,
    image: image,
    description: desc,
    location: location,
    rating: rating

  });

  Restaurant.create(newRest, function(err, restCreated){
    if(err) {
      console.log(err);
    } else {
      res.redirect('/restaurants');
    }
  });
});

app.get('/restaurants/:id', function(req, res) {
  Restaurant.findById(req.params.id, function(err, restId) {
    if(err) {
      console.log(err);
    } else {
      res.render('restaurants/show', {restaurant: restId});
    }
  });
});

app.listen(process.env.PORT, process.env.IP, function() {
  console.log("Server has started...");
});
