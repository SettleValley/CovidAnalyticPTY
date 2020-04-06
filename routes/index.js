var express = require('express');
var router = express.Router();
var getData = require('../untils/covidAPI')

/* GET home page. */

router.route('/')
  .get( async (req,res, next)=>{
    const data = await getData();
    console.log(data);
    res.render('index', { title: 'Express', data: data});
  })
  .post((req, res, next)=>{

  })


module.exports = router;
