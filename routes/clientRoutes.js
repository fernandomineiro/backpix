const express = require('express');
const router = express.Router();
const clientController = require('../controllers/clientController');
const authenticateToken = require('../middleware/authMiddleware');

router.post('/create', clientController.createClient);
router.get('/:id/pix', authenticateToken, clientController.getClientPix);

module.exports = router;