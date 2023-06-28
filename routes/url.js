const express= require("express");
const { handleGenerateShortURl} = require("../controllers/url.js");
const router = express.Router();

router.post("/", handleGenerateShortURl);
router.get("/analytics/:shortId")
router.delete('/:shortId', async (req, res) => {
    const idtodel = req.params;
    try {
      
      const deletedURL = await URL.findOneAndRemove({shortId : idtodel});
      if (!deletedURL) {
        return res.status(404).json({ message: 'URL not found' });
      }
      return res.status(200).json({ message: 'URL deleted successfully' });
    } catch (error) {
      return res.status(500).json({ message: 'Failed to delete URL' });
    }
  });

module.exports = router;
