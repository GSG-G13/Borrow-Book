const { verify } = require('jsonwebtoken');
require('dotenv').config()

const checkAuth = (cookie, callback) => {
    if (!cookie)
        callback(true);
    else {
        verify(cookie, process.env.SECRET_KEY, (err, data) => {
            if (err)
                callback(err);
            else callback(null, data);
        });
    }
};

module.exports = checkAuth;