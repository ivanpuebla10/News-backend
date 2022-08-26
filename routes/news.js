const express = require('express');
const router = express.Router()
const NewController = require('../controllers/NewController');

router.post('/',NewController.publish)

module.exports = router;