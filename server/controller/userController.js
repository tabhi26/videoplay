const bcrypt = require('bcrypt');
const User = require('../model/userModel');
const jwt = require('jsonwebtoken');
const { jwtKey } = require('../config/config');

const signUp = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const hasedPass = await bcrypt.hash(password, 12);
        const user = new User({
            name,
            email,
            password: hasedPass,
        })
        console.log("signup",user);
        await user.save();
        res.status(201).json({ success: true, message: "User signup successfully"});
    } catch (err) {
        console.log(err);
        res.status(500).json({ success: false, message: err.message });
    }
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email: email });
        const isMatch = await bcrypt.compare(password, user.password);
        if (isMatch) {
            const token = jwt.sign({ email, password }, jwtKey);
            res.status(200).json({success: true, message: "User login successfully", token});
        } else {
            res.status(401).json({success: false, message: "Invalid login credentials"});
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({ success: false, message: err.message });
    }
}

module.exports = { signUp, login };