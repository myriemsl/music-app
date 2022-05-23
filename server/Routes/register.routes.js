const express = require('express')
const router = express.Router()
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
require('dotenv').config()

const User = require('../Models/User')
const Token = require('../Config/Token')


// Register Route
router.post('/', [
    body('email', 'email is required ').isEmail(),
    body('password', "write your password, minimum 6 characters!").isLength({min: 6}),
  ],(req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.json({errors: errors.array()})
    }

    let newUser = new User({
      ...req.body
    })


    bcrypt.genSalt(10, function(err, salt) {
      if(err) throw err
      bcrypt.hash(newUser.password, salt, (err, hashedPassword) => {
          if(err) throw err
          newUser.password = hashedPassword
          newUser.save()
          Token(newUser, res)
        });
    });

})


module.exports = router;