const router = require('express').Router();
const getUser = require('../controllers/user/getUserController');
const verifyToken = require('../middlewares/varifyToken');
const getAllUsers = require('../controllers/admin/getAllUsersController')
const editUser = require('../controllers/user/editUserController');
const deleteUser = require('../controllers/user/deleteUserController')

router.get('/users/:id', verifyToken, getUser); //+
router.get('/users', verifyToken, getAllUsers); //+
router.patch('/users/:id', verifyToken, editUser); //+ 
router.delete('/users/:id', verifyToken, deleteUser) //+

module.exports = router