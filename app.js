var express = require('express');
var app     = express();

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
  res.render('landing');
});

app.get('/home', function(req, res) {
  res.render('landing');
});

app.get('/restaurants', function(req, res) {
  res.render('restaurants/restaurants');
});

app.listen(27017, function() {
  console.log("Server has started...");
});
