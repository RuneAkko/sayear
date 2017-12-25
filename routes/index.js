var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User1 = mongoose.model('User1');
var User3 = mongoose.model('User3');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/postone',function (req,res) {
  res.render('postone',{title:'Express'})
});

router.get('/confirm_postone',function (req,res) {
    res.render('confirm_postone',{title:'Express'})
})

router.get('/confirm_post3',function (req,res) {
    res.render('confirm_post3',{title:'Express'})
})

router.get('/consents_postone',function (req,res) {
    res.render('consents_postone',{title:'Express'})
})

router.get('/consents_post3',function (req,res) {
    res.render('consents_post3',{title:'Express'})
})

router.get('/posttwo',function (req,res) {

    res.render('posttwo',{title:'Express'})
});

router.get('/test',function (req,res) {

    res.render('test',{title:'Express'})
});

router.get('/post3',function (req,res) {
    res.render('post3',{title:'Express'})
})

router.post('/upload_post3', function (req,res) {
    console.log(req.body);
    // var json = JSON.parse(req.body);
    var datas = req.body;
    var posts = new User3({
        time:Date.now(),
        state:0,
        P1:req.body.q1,
        P2:req.body.q2,
        P3:req.body.q3,
        P4:req.body.q4,
        P5:req.body.q5,
        P6:req.body.q6,
        P7:req.body.q7,
        P8:req.body.q8,
        P9:req.body.q9,
        P10:req.body.q10,
        P11:req.body.q11,
        P12:req.body.q12,
        P13:req.body.q13,
        P14:req.body.q14,
        P15:req.body.q15,
        P16:req.body.q16,
        P17:req.body.q17,
        P18:req.body.q18,
        P19:req.body.q19,
        P20:req.body.q20,
        P21:req.body.q21,
        P22:req.body.q22,
        P23:req.body.q23,
        P24:req.body.q24,
        P25:req.body.q25,
        P26:req.body.q26,
        P27:req.body.q27
});

    posts.save(function (err) {
        if(err){
            res.end('Error');
            return next();
        }
        console.log("保存成功："+datas);
        res.redirect('/');
    })
})

router.post('/upload_post1',function (res,req) {

    console.log(res.body);
    // var json = JSON.parse(req.body);
    var datas = res.body;
    var posts = new User1({
        q1:res.body.q1,
        q2:res.body.q2,
        q3:res.body.q3,
        q4:res.body.q4,
        q5:res.body.q5,
        q6:res.body.q6,
        q7:res.body.q7,
        q8:res.body.q8,
        q9:res.body.q9,
        q10:res.body.q10,
        q11:res.body.q11,
        time:Date.now(),
        state:0
    });
        posts.save(function (err) {
        if(err){
            req.end('Error');
            return next();
        }
        console.log("保存成功："+datas);
        req.redirect('/');
    })

})
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
