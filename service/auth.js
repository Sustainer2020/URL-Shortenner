//This map not require as we will be using JSON Web Token to Make a StateLess server or backend
//const sessionIdToUserMap=new Map();
//Kyunki every time server restart hota hai to Ye map create hota hai so saare user auto logoout ho jate hai 
//Statefull mein server restart pe logout ho jate hai and statefull server intensive bhi hai. Hence, use stateless server
//For stateless server we will need json web token



const jwt =require("jsonwebtoken")
const secret='gundaboisrajiv2024'

function setUser(user){
    
    return jwt.sign({
           name:user.name,
          _id: user._id,
          email: user.email,
          role: user.role,
    },secret);
}

function getUser(token){
    if(!token)  return null;
    try {
        return jwt.verify(token,secret)
    } catch (error) {
        return null;
    }
  
}

module.exports={
    setUser,
    getUser
}