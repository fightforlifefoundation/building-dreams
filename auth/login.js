module.exports = {
    initialize: function (passport) {
        var LocalStrategy = require('passport-local').Strategy;
        var auth = require('./authentication');

        passport.use(
            new LocalStrategy(function (username, password, done) {
                    var user = auth.validateUsernamePassword(username, password);
                    if (user.exists) {
                        return done(null, user);
                    } else {
                        return done(null, false, {message: 'incorrect username or password'});
                    }
                }
            ));

        passport.serializeUser(function (user, done) {
            done(null, user.id);
        });

        passport.deserializeUser(function (id, done) {
            // done(null, { id: id, username: "test-user" });
            var user = auth.getUserInfo(id);
            done(null, user);
        });
    },
    ensureAuthenticated: function (req, res, next) {
        if (!req.isAuthenticated()) {
            res.status(401).json({error: "not unauthenticated"});
        } else {
            next();
        }
    }
};
