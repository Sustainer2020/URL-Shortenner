const shortid = require("shortid");
const URL = require("../models/url.js");
const router = require("../routes/url.js");


//This funciton return the ShortID
async function handleGenerateShortURl(req, res) {
    const body = req.body;
    if (!body.url) return res.status(400).json({ error: "Url is required !!" });
    const shortID = shortid.generate(7);
    //session-based storage for URLs when a user is not logged in:
   let createdby=req.user ? req.user._id : req.cookies?.uid;

    await URL.create({
        shortId: shortID,
        redirectURL: body.url,
        visitHistory: [],
       // createdBy:req.user._id, 
       createdBy:createdby,
        alias: body.alias,
    });
    
    return res.render('home',{
        id:shortID,
        redirectURL:body.url,
        alias:body.alias,
    })
   
}

async function handleGetAnalytics(req,res){
    const shortId=req.params.shortId;
    const result=await URL.findOne({shortId});
    return res.json({
        totalClicks: result.visitHistory.length,
        analytics: result.visitHistory,
    })
}





//Base62 used for generating ShortID
// const base62Charset =
//     "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
// function shorturl() {
//     const decimalValue = parseInt(uniqueID, 16);
//     let shortcode = "";
//     let quotient = decimalValue;
//     while (quotient > 0) {
//         const remainder = quotient % 62;
//         shortcode = base62Charset[remainder] + shortcode;
//         quotient = Math.floor(quotient / 62);
//     }

//     return shortcode;
// }

module.exports= {
    handleGenerateShortURl,handleGetAnalytics,
};
