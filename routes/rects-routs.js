// Requires
const express = require('express');
const router = express.Router();
const rectsController = require('../controller/rects-controller');

// Get Request Route
router.get('/', rectsController.rect_get);

// Post Request Route
router.post('/', rectsController.rect_post);

// Get Request Route For Creating Rectangles
router.get('/create-rect', rectsController.create_rect);

// Exporting Routes
module.exports = router