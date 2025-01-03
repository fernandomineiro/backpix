const express = require('express');
const pixController = require('../controllers/pixController');
const authenticateToken = require('../middleware/authMiddleware');
const router = express.Router();
 
router.post('/transfer', authenticateToken, pixController.createPix);

router.get('/pix', authenticateToken, pixController.getClientPix);

router.put('/pix/:pixId/pay', authenticateToken, pixController.payPix);

module.exports = router;