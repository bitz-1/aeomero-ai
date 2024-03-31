const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy
const GOOGLE_CLIENT_ID = "82680872965-2paqmn33rvi7g94la5btibu471ga3k63.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";

passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "http://www.example.com/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    // User.findOrCreate({ googleId: profile.id }, function (err, user) {
    //   return cb(err, user);
    // });
    done(null,profile)
  }
));

passport.serializeUser((user,done)=>{
    done(null,user)
})

passport.deserializeUser((user,done)=>{
    done(null,user)
})