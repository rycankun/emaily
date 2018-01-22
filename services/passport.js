const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');

const keys = require('../config/keys');

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
	done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
	const user = User.findById(id);
	await done(null, user);
});

passport.use(
	new GoogleStrategy(
		{
			clientID: keys.googleClientID,
			clientSecret: keys.googleClientSecret,
			callbackURL: '/auth/google/callback',
			proxy: true
		},
		async (accessToken, refreshToken, profile, done) => {
			const existingUser = await User.findOne({ googleID: profile.id });
			if (existingUser) {
				return done(null, existingUser);
			}
			const user = await new User({ googleID: profile.id }).save();
			done(null, user);
		}
	)
);

passport.use(
	new FacebookStrategy(
		{
			clientID: keys.facebookClientID,
			clientSecret: keys.facebookClientSecret,
			callbackURL: '/auth/facebook/callback',
			proxy: true
		},
		async (accessToken, refreshToken, profile, done) => {
			const existingUser = await User.findOne({ facebookID: profile.id });
			if (existingUser) {
				return done(null, existingUser);
			}
			const user = await new User({ facebookID: profile.id }).save();
			done(null, user);
		}
	)
);

passport.use(
	new LocalStrategy(async (username, password, done) => {
		console.log(req);
		const existingUser = await User.findOne({ username, password });
		if (existingUser) {
			return done(null, existingUser);
		}
		const user = await new User({ username, password }).save();
		done(null, user);
	})
);
