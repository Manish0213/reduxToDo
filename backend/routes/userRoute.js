const express = require('express');
const router = express.Router();
const User = require('../models/userSchema');
var jwt = require('jsonwebtoken');
const SECRET_KEY = "GOOD_BYE";

router.post('/login', async (req, res) => {
    const {email,password} = req.body;
    const existingUser = await User.findOne({email:email});
    if(existingUser){
        if(password === existingUser.password){
            const payload = {
                user: {
                    id: existingUser._id
                }
            }
            const authToken = jwt.sign(payload,SECRET_KEY);
            res.send({success: true, authToken});
        }
    }
})

router.post('/signup', async (req, res) => {
    const {name,email,password,cPassword} = req.body;
    console.log(req.body);
    const isEmailExist = await User.findOne({email});
    if(isEmailExist) {
        return res.status(400).json({error: "Email already exits"});
    }
    if(password !== cPassword) {
        return res.status(400).json({error: "Above password is not matched"});
    }
    const newUser = new User({name,email,password});
    const addedUser = await newUser.save();
    const payload = {
        user: {
            id: addedUser._id
        }
    }
    const authToken = jwt.sign(payload,SECRET_KEY);
    res.send({success: true, authToken});
})

module.exports = router