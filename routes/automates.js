let express = require('express');
let router = express.Router();

let automateController = require('../controllers/automates');
let automates = new automateController;

router.get('/', automates.listAutomate);

router.get('/createAutomates', automates.createAutomate);

router.get('/createMarques', automates.createMarque);

router.get('/createTypes', automates.createType);

router.get('/selectType', automates.selectType);

router.get('/selectMarque', automates.selectMarque);

router.post('/saveAutomates', automates.saveAutomate);

router.post('/saveMarques', automates.saveMarque);

router.post('/saveTypes', automates.saveType);

router.post('/editAutomate', automates.editAutomates);

module.exports = router;