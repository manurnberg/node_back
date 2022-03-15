const express = require('express');
const router = express.Router();
const path = 'user';
const userController = require('../controllers/userController');


router.get(`/${path}`,
    userController.getAllUsers);
      

module.exports = router;
