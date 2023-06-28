const express= require("express");
const { handleGenerateShortURl} = require("../controllers/url.js");
const router = express.Router();

router.post("/", handleGenerateShortURl);
router.get("/analytics/:shortId")

module.exports = router;
