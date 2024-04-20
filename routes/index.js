var express = require('express');
var router = express.Router();

const geoapifyController = require('../controllers/geoapifyController');

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get('/getCountriesStatesCities', geoapifyController.getAllData);
router.post('/getDistance', geoapifyController.getCalculatedDistance);

module.exports = router;
