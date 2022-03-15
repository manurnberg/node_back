const express = require('express');
const router = express.Router();
const path = 'items';
const itemsController = require('../controllers/itemsController');


router.get(`/${path}`,
    itemsController.getAllItems);
      

module.exports = router;