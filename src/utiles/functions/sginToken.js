const { sign } = require('jsonwebtoken');

const signToken = (email,id,name) => new Promise((resolve, reject) => {
    sign({ email,id,name }, "privateKey", (error, token) => {
        if (error) reject(error)
        resolve(token)
    })
})

module.exports = { signToken }