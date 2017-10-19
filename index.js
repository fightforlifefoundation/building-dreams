
var express = require('express');
var session = require('express-session');
var app = express();
var pg = require('pg');
var students = require(__dirname + '/views/pages/students.js');
var passport = require('passport');
var bodyParser = require('body-parser');
var login = require('./auth/login');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.use(session({
  secret: 'black',
  saveUninitialized: false,
  resave: false,
  cookie: { maxAge: 600000 }
}));
app.use(passport.initialize());
app.use(passport.session());
login.initialize(passport);

app.post('/login', passport.authenticate('local', { successRedirect: '/success', failureRedirect: '/failure' }));;

app.post('/test-auth', login.ensureAuthenticated, function(req, res){
  console.log('Is request authenticated? ' + req.isAuthenticated());
  console.log('req.user: ' + JSON.stringify(req.user));

  res.json({ done: true, userId: req.user.id, username: req.user.username, role: req.user.role});
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

