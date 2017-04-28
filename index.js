var express = require('express');
var app = express();

// 测试页面
// app.use(express.static(__dirname + '/public'));

// app.listen(8080);

// 生成动态网页
app.get('/',function (req,res) {
	res.send('Hello world!');
});
app.get('/customer',function(req,res){
	res.send('Hello customer!');
})
app.listen(3000);