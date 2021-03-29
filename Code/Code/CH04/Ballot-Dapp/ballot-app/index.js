var express = require('express');
var app = express();
app.use(express.static('src'));
app.use(express.static('../ballot-contract/build/contracts'));
app.get('/', function (req, res) {
  res.render('index.html');
});
app.listen(3001, function () {
  console.log('Example app listening on port 3001!');
});
