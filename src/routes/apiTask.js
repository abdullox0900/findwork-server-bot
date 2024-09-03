const express = require('express');
const TaskRouter = express.Router();
const { processApiData } = require('../controllers/taskController');

TaskRouter.post('/sendTask', async (req, res) => {
    try {

      const data = await processApiData(JSON.parse(req.body.data));
      
      console.log(data);
      

      res.status(200).json({ success: true, message: 'Ma\'lumot muvaffaqiyatli yuborildi' });
    } catch (error) {
      console.error('Xato yuz berdi:', error);
      res.status(500).json({ success: false, error: error.message });
    }
  });
  
  module.exports = TaskRouter;