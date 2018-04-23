/**
 * Created by Administrator on 2018/1/15.
 */
const express=require("express");
const expressStatic=require("express-static");
const cookieParser=require("cookie-parser");
const cookieSession=require("cookie-session");
const bodyParser=require("body-parser");
const jade=require("jade");
const ejs=require("ejs");
const consolidate=require("consolidate");

var server=express()

server.listen(8081)


//1.解析cookie
server.use(cookieParser("dsadewweq213"))

//2.解析session
var arr=[];
for(var i=0;i<100000;i++){
    arr.push("keys_"+Math.random());
}
server.use(cookieSession({name:"session_id",keys:arr,maxAge:20*3600*1000}))
//3.使用post
server.use(bodyParser.urlencoded({extended:false}))


//配置模板引擎
//(1)使用哪种模板引擎
server.set('view engine','html')
//(2)模板引擎放在哪里了
server.set('views','./views')
//(3)输出什么东西
server.engine('html',consolidate.ejs)

//处理请求
server.get("/index",function (req,res){
    //if(req.session.session_id){//用户登录过
        res.render("1.ejs",{name:"chenhe"})//读取文件发送到前台

        //res.send()直接发送东西到浏览器
    //}else{
    //    res.render("login.ejs",{name:chenhe})
    //}

})


//4.static数据
server.use(expressStatic("./www"))