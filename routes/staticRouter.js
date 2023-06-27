const express = require("express");
const router = express.Router();
const URL = require("../models/url");
const { restrictTo } = require("../middlewares/auth");
const clipboard=require('clipboard')
const qrCode=require('qrcode')

router.get("/ok", async (req, res) => { 
    if(req.user){
        res.render("home",{
            user:req.user
        })
    }
    else res.render("home")
    
})

router.get("/signup", (req, res) => {
    return res.render("signup");
});

router.get("/login", (req, res) => {
    return res.render("login");
});

router.get("/logout", (req, res) => {
    res.clearCookie("token");
    return res.redirect("/");
});

router.get("/", async (req, res) => {
    let allURLs;
    const searchQuery = req.query.search;
    // fetching based on session ID for non-logged in user
    if(!req.user){
        const createdby = req.cookies?.uid;
        allURLs = await URL.find({ createdBy: createdby }).exec();
    }
    // fetching for Logged in user based on _id
    else{
        if (req.user.role == "Admin") {
            if (searchQuery) {
                 allURLs = await URL.find({
                    $or: [
                        { shortId: { $regex: ".*" + searchQuery + ".*" } },
                        { redirectURL: { $regex: ".*" + searchQuery + ".*" } },
                        { alias: { $regex: ".*" + searchQuery + ".*" } },
                    ],
                });
            } else {
                 allURLs = await URL.find({});
            }
        } else {
            if(searchQuery){
                allURLs = await URL.find({
                    createdBy: req.user._id,
                    $or: [
                        { shortId: { $regex: ".*" + searchQuery + ".*" } },
                        { redirectURL: { $regex: ".*" + searchQuery + ".*" } },
                        { alias: { $regex: ".*" + searchQuery + ".*" } },
                    ],
                }).exec();
            }
            else{
                allURLs = await URL.find({createdBy: req.user._id})
            }
        }
    }
    return res.render("home", {
        urls: allURLs,
        user: req.user,
    });
});

router.get('/qrcode', async (req, res) => {
    const { url } = req.query;
    const qrCodeData = await qrCode.toDataURL(url);
    res.send(qrCodeData);
});


module.exports = router;
