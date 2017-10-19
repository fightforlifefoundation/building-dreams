
var express = require('express');
var app = express();
var pg = require('pg');
var students = require(__dirname + '/views/pages/students.js');
var passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;
var bodyParser = require('body-parser');
	
passport.use(new LocalStrategy(
  function(username, password, done) {
    console.log('username: ' + username + ', password: ' + password);

    return done(null, { username: username });

    console.log('outside findOne');
  }
));

app.use(passport.initialize());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.post('/login', passport.authenticate('local', { successRedirect: '/success', failureRedirect: '/failure' }), function(req, res) {
  res.json({ success: true });
});

app.post('/auth', function(req, res){
  console.log("body parsing", req.body);
  //should be something like: {username: YOURUSERNAME, password: YOURPASSWORD}
  res.json({ done: true });
});

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');
});

app.get('/student', function(request, response) {
  response.render('pages/student-info', {studentsinfo: students});
});


app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

console.log ('process.env.DATABASE_URL');

app.get('/db', function (request, response) {
  pg.defaults.ssl = true;
  pg.connect(process.env.DATABASE_URL, function(err, client, done) {
	  console.log (process.env.DATABASE_URL);
    client.query('SELECT * FROM test_table', function(err, result) {
      done();
      if (err)
       { console.error(err); response.send("Error " + err); }
      else
       { response.render('pages/db', {results: result.rows} ); }
    });
  });
});

