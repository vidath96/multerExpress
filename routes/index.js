var express = require('express');
var router = express.Router();
const multer = require('multer')
const upload = multer({dest:"public/images"})
const fs = require('fs')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/fileformsub',upload.single('file'),(req, res, next) => {
  let oldPath = req.file.path
  let newPath = `public/images/uploads/${req.file.originalname}${Date.now()}`
  fs.rename(oldPath,newPath,()=>{
    res.json({
      // field: req.body,
      // image: req.file
      msg: 'File Uploaded..!'
    })
  })
})

router.post('/mulfileformsub',upload.array('mulfile'),(req, res, next) => {
  
  let oldPath = req.files.path
  let newPath = `public/images/uploads/${req.files[0].originalname}${Date.now()}`
  let mulnewPath = `public/images/uploads/${req.files[1].originalname}${Date.now()}`
  fs.rename(oldPath,newPath,(err)=>{
    if(err) throw err
    res.json({
      // field: req.body,
      // image: req.file
      msg: 'File Uploaded..!'
    })
  })
})

// router.post('/mulfileformsub',upload.fields([
//   { name: 'avatar', maxCount: 1 },
//   { name: 'gallery', maxCount: 8 }
// ]),(req, res, next) => {
  
//   let oldPath = req.files.path
//   let newPath = `public/images/uploads/${req.files[0].originalname}${Date.now()}`
//   let mulnewPath = `public/images/uploads/${req.files[1].originalname}${Date.now()}`
//   fs.rename(oldPath,newPath,(err)=>{
//     if(err) throw err
//     res.json({
//       // field: req.body,
//       // image: req.file
//       msg: 'File Uploaded..!'
//     })
//   })
// })

module.exports = router;
