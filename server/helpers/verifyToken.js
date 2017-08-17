const jwt = require('jsonwebtoken')
require('dotenv').config();

var userInfo = function (token, callback) {
	if(token) {
		jwt.verify(token, process.env.SECRET_JWT, (err, decoded) => {
			if(decoded) {
				callback(decoded)
			} else {
				return 'No any user info'
			}
		})
	} else {
		return 'Provided no token'
	}
}

module.exports = {
	userInfo
}