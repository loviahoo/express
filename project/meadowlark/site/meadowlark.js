//项目入口文件
//在文件的顶部要指明引入什么（不是必须，是一种规范）
var express = require('express');
var app = express();
var fortune = require('./lib/fortune.js');
//加前缀./告诉node，它不应该在node_modules目录中查找这个模块，如果我们忽略了这个模块，就会导致失败

app.use(express.static(__dirname+'/public'));

//设置handlebars视图引擎
var handlebars = require('express3-handlebars')
              .create({defaultLayout:'main'});
app.engine('handlebars',handlebars.engine);
app.set('view engine','handlebars');


app.set('port',process.env.PORT||3000);


// 添加两个新路由
app.get('/',function(req,res){
  //返回状态码200，不用显示指定
  // res.type('text/plain');
  // res.send('meadowkark Travel');
  // 不在指定内容类型和状态码：视图引擎默认会返回text/html的内容类型和200的状态码
  res.render('home');
})
app.get('/about',function(req,res){
  // res.type('text/plain');
  // res.send('About Meadowlark Travel');
  // var randomFortune = fortune.getFortune();
  res.send(fortune.getFortune());
  res.render('about',{fortune: fortune.getFortune()});
})

//定制404页面，app.use是Express添加中间件的一种方法
//在express中，路由和中间件的添加顺序至关重要，如果我们吧404处理器放在所有路由上面，那首页和关于页面就不能用了，访问这些URL得到的都是404.
app.use(function(req,res){
  res.type('text/plain');
  res.status(404);
  res.send('404-Not Fund');
})

//定制500页面
app.use(function(err,req,res,next){
  console.err(err.stack);
  res.type('text/plain');
  res.status(500);
  res.send('500-Server Error');
})

app.listen(app.get('port'),function(){
  console.log('Express started on http://localhost:'+app.get('port')+';press Ctrl-c to terminate.');
});
