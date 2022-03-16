const express = require('express');
const router = express.Router();
const path = 'user';
const userController = require('../controllers/userController');


router.get(`/${path}`,
    userController.getAllUsers);

router.post(`/${path}`,
    userController.addUser);

      

module.exports = router;
