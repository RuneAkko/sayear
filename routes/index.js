var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = mongoose.model('User');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/postone',function (req,res) {
  res.render('postone',{title:'Express'})
});

router.get('/confirm',function (req,res) {
    res.render('confirm',{title:'Express'})
})

router.get('/posttwo',function (req,res) {

    res.render('posttwo',{title:'Express'})
});

router.get('/test',function (req,res) {

    res.render('test',{title:'Express'})
});

router.post('/upload', function (req,res) {


    console.log(req.body);

    // var json = JSON.parse(req.body);
    // var datas = req.body;
    // var posts = new User({
    //     time:Date.now(),
    //     P1:req.body.P1,
    //     P2:req.body.P2,
    //     P3:req.body.P3,
    //     P4:req.body.P4,
    //     P5:req.body.P5,
    //     P6:req.body.P6,
    //     P7:req.body.P7,
    //     P8:req.body.P8,
    //     P9:req.body.P9,
    //     P10:req.body.P10,
    //     P11:req.body.P11,
    //     P12:req.body.P12,
    //     P13:req.body.P13,
    //     P14:req.body.P14,
    //     P15:req.body.P15,
    //     P16:req.body.P16,
    //     P17:req.body.P17,
    //     P18:req.body.P18,
    //     P19:req.body.P19,
    //     P20:req.body.P20,
    //     P21:req.body.P21,
    //     P22:req.body.P22,
    //     P23:req.body.P23,
    //     P24:req.body.P24,
    //     P25:req.body.P25,
    //     P26:req.body.P26,
    //     P27:req.body.P27,
    //     P28:req.body.P28,
    //     P29:req.body.P29,
    //     P30:req.body.P30
// });

    posts.save(function (err) {
        if(err){
            res.end('Error');
            return next();
        }
        console.log("保存成功："+datas);
        res.redirect('/');
    })
});


//==========================================
// router.get('/login',function (req,res,next) {
//   res.render('login',{title:'用户登陆'});
// });
//
// router.post('/login',function (req,res,next) {
//   var user = {
//     username:'admin',
//       password:'admin'
//   };
//   if(req.body.username===user.username&& req.body.password===user.password){
//     res.redirect('/service');
//   }
//   res.redirect('/login');
// });

module.exports = router;
