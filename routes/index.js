var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});



router.get( "/main",function(req,res){
	
	res.render("main",{lll:""})
	
});



router.get("/login",function(req,res){
	
	res.render("login",{ttt:""})
	
});

router.get('/regist', function(req, res, next) {
  res.render('regist', { title: '注册页面' });
});



router.get('/dashboard', function(req, res, next) {
	//判断用户是否登录，如果没登录跳转到login页面。
	console.log(req.session);
	if(req.session == null || req.session.username == null) {
		// res.render('login', { title: '登录页面' });
		res.redirect("/login"); // 重定向
		return;
	}
	res.render('dashboard', {});
});

router.post('/api/login4ajax', function(req, res, next) {
	var username = req.body.username;
	var psw = req.body.psw;
	var result = {
		code: 1,
		message: "登录成功"
	};
	UserModel.find({username: username, psw: md5(psw)}, (err, docs)=>{
		if(docs.length == 0) {
			result.code = -101;
			result.message = "您的账号或密码错误。请重新登录。"
		} else {
			// 登录成功的时候，生成session
			req.session.username = username;
			console.log(req.session);
		}
		res.json(result);
	})
})

router.post('/api/regist4ajax', function(req, res, next) {
	var username = req.body.username;
	var psw = req.body.psw;
	var age = req.body.age;
	var result = {
		code: 1,
		message: "注册成功"
	};
	// 检查用户名是否被使用

});






module.exports = router;
