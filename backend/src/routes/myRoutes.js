const {Router} = require('express');
// local modules
const myController = require('../controllers/myController');

const router = Router();

//request 
router.get('/api',myController.method1);
router.post('/api',myController.method2);

module.exports = router;