const { sign } = require('jsonwebtoken');

const signToken = (email) => new Promise((resolve, reject) => {
    sign(email,"privateKey",(error,token) => {
        if(error) reject(error)
        resolve(token)
    }) 
})

module.exports = { signToken }