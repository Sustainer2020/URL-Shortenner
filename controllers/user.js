const {v4 : uuidv4}=require("uuid")
const User=require("../models/user")
const {setUser , getUser}=require("../service/auth")
const bcrypt=require("bcrypt")

async function handleUserSignUp(req,res){
     const {name,password,email}=req.body;
     const hash=await bcrypt.hash(password,10);
    //  if(User.find({email:req.body.email})) return res.render("<h1>Already Registered</h1>")
     await User.create({
        name,
        email,
        password:hash,
     });
     return res.redirect("/login");
}

async function handleUserLogin(req,res){
    let {email,password}=req.body;

    const user=await User.findOne({
       email,
    });
    if(!user){
        return res.render("/login");
    }

    const isValid=await bcrypt.compare(password,user.password)
    if(!isValid) return res.send("Wrong Password")

    
    // const sessionId=uuidv4(); 
    // res.cookie("uid",sessionId)

    const token=setUser(user);
    res.cookie("token",token);
    
    return res.redirect("/");
}

module.exports= {
    handleUserSignUp,
    handleUserLogin
}