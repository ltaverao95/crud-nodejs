const express = require('express');
const router = express.Router();

const customerImagesController = require('../controllers/customerImagesController');

router.get('/', customerImagesController.list);
router.post('/', customerImagesController.getByName);

module.exports = router;