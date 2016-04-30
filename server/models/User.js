var mongoose = require('mongoose')
	encrypt = require('../utils/encryption');

var userSchema = mongoose.Schema({
		firstName: {type:String, required:'{PATH} is required!'},
		lastName: {type:String, required:'{PATH} is required!'},
		username: {
			type:String,
			required: '{PATH} is required!',
			unique: true
		},
		email:{type:String},
		salt: {type:String, required:'{PATH} is required!'},
		hashed_pwd: {type:String, required:'{PATH} is required!'},
		roles:[String]
	});

	userSchema.methods = {
		authenticate: function(passwordToMatch) {
			return encrypt.hashPwd(this.salt, passwordToMatch) === this.hashed_pwd;
		}
	}

	var User = mongoose.model('User',userSchema);

function createDefaultUsers() {
	User.find({}).exec(function(err,collection) {
		if(collection.length === 0) {
			var salt, hash;
			salt = encrypt.createSalt();
			hash = encrypt.hashPwd(salt, 'juanRod');
			User.create({firstName: "Juan", lastName: "Rodriguez", username: "juanRod",email:"juanRod@email.com",salt: salt, hashed_pwd:hash,roles:['admin']});
			
			salt = encrypt.createSalt();
			hash = encrypt.hashPwd(salt, 'bMajor');
			User.create({firstName: "Brandon", lastName: "Major", username: "bMajor",email:"bMajor@email.com",salt: salt, hashed_pwd:hash,roles:[]});
			
			salt = encrypt.createSalt();
			hash = encrypt.hashPwd(salt, 'mRiley');
			User.create({firstName: "Marisa", lastName: "Riley", username: "mRiley",email:"mRiley@email.com",salt: salt, hashed_pwd:hash});
		}
	})
}

exports.createDefaultUsers = createDefaultUsers;
