const jwt = require('jsonwebtoken');

module.exports = {
	generateToken: user => {
		//1. Dont use password and another sensitive fields
		//2. Use fields taht are useful in other parts of the app/collections/models
		const u = {
			_id: user._id,
			name: user.name,
			username: user.username,
			email: user.email
		};
		return (token = jwt.sign(u, 'calvin', {
			expiresIn: 60 * 60 * 24 // expires in 24 hours
		}));
	},
	verifyToken: token => {
		return new Promise((resolve, reject) => {
			jwt.verify(token, 'calvin', (err, user) => {
				if (err) {
					reject(err);
				}
				//return user using the id from w/in JWTTOKEN
				resolve(user);
			});
		});
	},
	getCleanUser: user => {
		const { password, age, createAt, updateAt, _v, ...exposedData } = user;
		return exposedData;
	}
};
