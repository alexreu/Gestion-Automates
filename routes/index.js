let express = require('express');
let router = express.Router();

let indexController = require('../controllers/index');
let index = new indexController;

router.get('/', index.indexView);

module.exports = router;
