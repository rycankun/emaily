const googleClientID = process.env.GOOGLE_CLIENT_ID;
const googleClientSecret = process.env.GOOGLE_CLIENT_SECRET;

const facebookClientID = process.env.FACEBOOK_CLIENT_ID;
const facebookClientSecret = process.env.FACEBOOK_CLIENT_SECRET;

const cookieKey = process.env.COOKIE_KEY;

const mongoURI = process.env.MONGO_URI;

module.exports = {
	googleClientID,
	googleClientSecret,
	mongoURI,
	cookieKey,
	facebookClientID,
	facebookClientSecret
};
