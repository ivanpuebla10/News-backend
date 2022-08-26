const express = require('express');
const router = express.Router()
const NewController = require('../controllers/NewController');

router.post('/',NewController.publish)
router.get('/',NewController.getAllNews)
router.put('/archive/:_id',NewController.archiveNews)

module.exports = router;