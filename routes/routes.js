const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const userController = require('../controllers/userController');
const imagesController = require('../controllers/imagesController');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/', (req, res) => {
  res.send('¡API funcionando!');
});

router.post('/login', authController.login);

router.get('/users', authMiddleware, userController.getAllUsers);

router.get('/images/cintillo', imagesController.Cintillo);

router.get('/images/polsociales', imagesController.polsociales);

module.exports = router;
