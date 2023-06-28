const express = require("express");
const router = express.Router();
const URL = require("../models/url");
const { restrictTo } = require("../middlewares/auth");
const qrCode=require('qrcode')

router.get("/", async (req, res) => { 
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
    return res.redirect("/");
});

router.get("/history", restrictTo(["Normal", "Admin"]), async (req, res) => {
    const searchQuery = req.query.search;
    const page = parseInt(req.query.page) || 1; 
    const limit = 6; 

    let query = {};
    if (searchQuery) {
        query = {
            $or: [
                { shortId: { $regex: ".*" + searchQuery + ".*" } },
                { redirectURL: { $regex: ".*" + searchQuery + ".*" } },
                { alias: { $regex: ".*" + searchQuery + ".*" } },
            ],
        };
    }

    const totalURLs = await URL.countDocuments(query); 

    // Calculate the total number of pages
    const totalPages = Math.ceil(totalURLs / limit);

    // Ensure the current page is within valid range
    if (page < 1 || page > totalPages) {
        return res.redirect("/history?page=1");
    }

    const skip = (page - 1) * limit; // Calculate the number of URLs to skip

    let allURLs;
    if (req.user.role === "Admin") {
        allURLs = await URL.find(query)
            .sort({ createdAt: -1 }) // Sort in descending order by createdAt
            .skip(skip)
            .limit(limit)
            .exec();
    } else {
        allURLs = await URL.find({ createdBy: req.user._id, ...query })
            .sort({ createdAt: -1 }) // Sort in descending order by createdAt
            .skip(skip)
            .limit(limit)
            .exec();
    }

    if (totalURLs < (totalPages - 2) * limit) {
        totalPages = Math.ceil(totalURLs / limit);
    }

    return res.render("history", {
        urls: allURLs,
        user: req.user,
        totalPages: totalPages,
        currentPage: page,
    });
});



module.exports = router;
