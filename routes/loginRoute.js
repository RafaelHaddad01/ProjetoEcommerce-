const express = require('express');
const loginController = require('../controllers/loginController');

const router = express.Router();

let ctrl = new loginController();
router.get('/', ctrl.loginView);

module.exports = router;
