const express = require('express')
const router = express.Router()
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
require('dotenv').config()

const User = require('../Models/User')
const authMiddleware = require('../Middlewares/authMiddleware')
const Token = require('../Config/Token')

// LOAD User
router.get('/', authMiddleware, (req, res) => {
    User.findById(req.userId).select('-password')
        .then(user => res.json(user))
        .catch(err => {
            console.log(err)
            res.send('Server Error')
        })
})


// LOGIN User
router.post('/', [
    body('email', 'Please write a valid email!').isEmail(),
    body('password', 'Please write your password!').notEmpty()
],(req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ msg: errors.array() });
    }

    User.findOne({email: req.body.email})
        .then(user => {
            if(!user){
                return res.status(401).json({ msg: [{msg: 'Please register before!'}] })
            } else {
                bcrypt.compare(req.body.password, user.password, (err, match) => {
                    if (err) {
                        throw err
                    } else if(!match){
                        return res.status(401).json({ msg: [{msg: 'Wrong Password!'}]})
                    } else {
                        Token(user, res)
                    }
                })
            }
        })
        .catch(err => {
            console.log(err)
            res.send('Server Error')
        })
})



module.exports = router;
