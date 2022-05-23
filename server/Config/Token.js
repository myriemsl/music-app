const jwt = require('jsonwebtoken')
require('dotenv').config({path:'./Config/.env'})

const Token = (user, res) => {
    let payload = {
        userId: user.id
      }
      jwt.sign(payload, process.env.SECRETKEY, (err, token) => {
        if (err) {
          throw err
        }

        res.json({ token })
      })
}

module.exports = Token