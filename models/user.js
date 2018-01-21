const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
	username: String,
	password: String,
	googleID: String,
	facebookID: String
});

mongoose.model('users', userSchema);
