const express = require('express');
const router = express.Router();
const { processApiData } = require('../controllers/taskController');

router.post('/sendTask', async (req, res) => {
    try {

      const data = await processApiData(req.body);
  
      console.log(data);

      res.status(200).json({ success: true, message: 'Ma\'lumot muvaffaqiyatli yuborildi' });
    } catch (error) {
      console.error('Xato yuz berdi:', error);
      res.status(500).json({ success: false, error: error.message });
    }
  });
  
  module.exports = router;