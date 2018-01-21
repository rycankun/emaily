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

passport.deserializeUser((id, done) => {
	User.findById(id)
		.then(user => {
			done(null, user);
		})
		.catch(e => {
			throw new Error(e);
		});
});

passport.use(
	new GoogleStrategy(
		{
			clientID: keys.googleClientID,
			clientSecret: keys.googleClientSecret,
			callbackURL: '/auth/google/callback',
			proxy: true
		},
		(accessToken, refreshToken, profile, done) => {
			User.findOne({ googleID: profile.id })
				.then(existingUser => {
					existingUser
						? done(null, existingUser)
						: new User({ googleID: profile.id })
								.save()
								.then(user => {
									done(null, user);
								})
								.catch(e => {
									throw new Error(e);
								});
				})
				.catch(e => {
					throw new Error(e);
				});
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
		(accessToken, refreshToken, profile, done) => {
			User.findOne({ facebookID: profile.id })
				.then(existingUser => {
					existingUser
						? done(null, existingUser)
						: new User({ facebookID: profile.id })
								.save()
								.then(user => {
									done(null, user);
								})
								.catch(e => {
									throw new Error(e);
								});
				})
				.catch(e => {
					throw new Error(e);
				});
		}
	)
);

passport.use(
	new LocalStrategy((username, password, done) => {
		User.findOne({ username })
			.then(existingUser => {
				existingUser
					? done(null, existingUser)
					: new User({ username, password })
							.save()
							.then(user => {
								done(null, user);
							})
							.catch(e => {
								throw new Error(e);
							});
			})
			.catch(e => {
				throw new Error(e);
			});
	})
);
