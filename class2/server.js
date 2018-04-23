//引入模块
const http=require("http");
//创建服务
var server=http.createServer(function (req,res){
	//req  接受的参数
	//res  返回的信息
	// console.log("来人了");
	res.write("welcome ,girl");
	res.end();
})
//监听端口
server.listen(8081);