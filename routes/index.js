var express = require('express');
var router = express.Router();
const multer = require('multer')
const upload = multer({dest:"public/images"})

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/fileformsub',upload.single('avatar'),(req, res, next) => {

  res.json(req.body)
})

module.exports = router;
