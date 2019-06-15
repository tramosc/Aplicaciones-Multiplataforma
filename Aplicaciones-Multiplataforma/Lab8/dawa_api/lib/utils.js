const jwt = require('jsonwebtoken');

module.exports = {
    generateToken: user => {

        const u = {
            _id: user._id,
            name: user.name,
            username: user.username,
            email: user.email
        };
        return token = jwt.sign(u, 'creando userss', {
            expiresIn: 60 * 60 * 24
        });
    },
    verifyToken: token => {
        return new Promise((resolve, reject) => {
            jwt.verify(token, 'creando userss', (err,user) => {
                if(err){
                    reject(err);
                }
                resolve(user);
            });
            });         
    },
    getCleanUser: user => {
        const { password, age, createAt, updateAt, __v, ...exposedData } = user;
        return exposedData;
    }
};

