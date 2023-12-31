const router = require('express').Router();
const User = require('../models/User');
const CryptoJS = require('crypto-js');
const jwt = require('jsonwebtoken')

//Register


router.post('/register', async (req, res) => {
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: CryptoJS.AES.encrypt(
            req.body.password,
            process.env.PASS_SECRET
        ).toString(),     //for encrypted password
    });

    try {
        const savedUser = await newUser.save();
        res.status(201).json(savedUser)      //201 means created  server fullfill the client req    

    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
});


//login

router.post('/login', async (req, res) => {
    try{
        const user = await User.findOne(
            {
                username: req.body.user_name
            }
        );

        !user && res.status(401).json("Wrong User Name");

        const hashedPassword = CryptoJS.AES.decrypt(
            user.password,
            process.env.PASS_SECRET
        );


        const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);

        const inputPassword = req.body.password;
        
        originalPassword != inputPassword && 
            res.status(401).json("Wrong Password");
            const accessToken = jwt.sign(
                {
                    id: user._id,
                    isAdmin: user.isAdmin,
                },
                process.env.JWT_SEC,
                    {expiresIn:"3d"}
                );
          
            const { password, ...others } = user._doc;  
            res.status(200).json({...others ,accessToken});
    
        }catch(err){
            res.status(500).json(err);
        }
})
module.exports = router