const router = require('express').Router();
const loginForm = require('../controllers/basic/loginForm');
const registerForm = require('../controllers/basic/registerForm');
const login = require('../controllers/basic/login');
const register = require('../middlewares/reqister');
const logout = require('../controllers/basic/logout');

router.get("/", loginForm);
router.get('/users/login', loginForm);
router.get('/logout', logout);
router.get('/logout/:id', logout);
router.post('/users/login', login);
router.get('/addUser', registerForm)
router.post('/addUser', register, login);

module.exports = router