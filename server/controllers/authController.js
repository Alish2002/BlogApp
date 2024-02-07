const User= require("../models/User");
const bycrypt=require('bcryptjs');
const jwt =require("jsonwebtoken");
const config=require("../config");

const register=(req, res)=>{
    const{userName, email, password}= req.body;
    const newUser= new User({userName, email, password});
   
    bycrypt.genSalt(10, (err, salt)=>{
        bycrypt.hash(newUser.password, salt, (err, hashed)=>{
        newUser.password=hashed;
        console.log("saving to DB");
        newUser
            .save()
            .then()
            .catch(err=>console.log(err));
        })
    })
    return res.json(newUser);
}
const login=(req, res)=>{
    const {userName, email, password}= req.body;
    // chaining means output is used as a input for other
    User.findOne({userName}).then(user=>{
        bycrypt.compare(password, user.password, (err, isMatch)=>{
            if(isMatch){
                const payload={id:user.id, userName: user.userName};
                const token=jwt.sign(payload, config.secret,{'expiresIn':'1h'})
                res.status(200).json({'token': 'Bearer'+token});
            }
            else{
                res.status(400).json({message: 'password incorrect'});
            }
        })
    })
}
module.exports={register, login};