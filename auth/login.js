module.exports = function(passport) {
    var LocalStrategy = require('passport-local').Strategy;

    passport.use(new LocalStrategy(
        function (username, password, done) {
            console.log('username: ' + username + ', password: ' + password);
            return done(null, {username: username, id: 1});
        }
    ));

    passport.serializeUser(function (user, done) {
        done(null, user.id);
    });

    passport.deserializeUser(function (id, done) {
        done(null, {id: id});
    });
};
