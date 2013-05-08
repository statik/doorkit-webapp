var express = require("express");
var app = express();
app.use(express.logger());
app.set('view engine', 'html')
app.engine('html', require('hogan-express'))

app.get('/', function(request, response) {
  response.render('app', {
    DOORKIT_URL: process.env.DOORKIT_URL,
  });
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
