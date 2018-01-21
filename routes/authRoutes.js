const express = require('express');
const passport = require('passport');

module.exports = app => {
	//google authentication routes
	app.get(
		'/auth/google',
		passport.authenticate('google', {
			scope: ['profile', 'email']
		})
	);

	app.get('/auth/google/callback', passport.authenticate('google'));

	//facebook authentication routes
	app.get('/auth/facebook', passport.authenticate('facebook', null));

	app.get('/auth/facebook/callback', passport.authenticate('facebook'));

	//local authentication routes
	app.get('/auth/facebook', passport.authenticate('local', null));

	// logout
	app.get('/api/logout', (req, res) => {
		req.logout();
		res.send(req.user);
	});
	//loged in test
	app.get('/api/current_user', (req, res) => {
		res.send(req.user);
	});
};
