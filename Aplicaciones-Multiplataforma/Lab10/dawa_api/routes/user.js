const express = require('express');
const router = express.Router();

const userConrtoller = require('../controllers/user');

router.post('/signup', userConrtoller.signup);
router.post('/signin', userConrtoller.signin);
router.post('/refresh', userConrtoller.refreshToken);

router.use(userConrtoller.verifyToken);

router.get('/', userConrtoller.find);
router.get('/:id', userConrtoller.findOne);
router.post('/', userConrtoller.create);
router.put('/:id', userConrtoller.update);
router.delete('/:id', userConrtoller.delete);

module.exports = router;
