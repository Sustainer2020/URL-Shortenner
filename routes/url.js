const express= require("express");
const { handleGenerateShortURl } = require("../controllers/url.js");
const router = express.Router();

router.post("/", handleGenerateShortURl);
router.get("/analytics/:shortId")

router.post('/generateQRCode', async (req, res) => {
    const { shortURL } = req.body;
  
    try {
      // Generate the QR code as a data URL
      const qrCodeDataURL = await QRCode.toDataURL(shortURL);
  
      res.send({ qrCodeURL: qrCodeDataURL });
    } catch (error) {
      console.error('Error generating QR code:', error);
      res.status(500).json({ error: 'Failed to generate QR code' });
    }
  });

module.exports = router;
