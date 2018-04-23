/**
 * Created by Administrator on 2018/1/12.
 */
const express=require("express");
const expressStatic=require("express-static");
const cookieParser=require("cookie-parser");
const cookieSession=require("cookie-session");
const bodyParser=require("body-parser");
const jade=require("jade");
const ejs=require("ejs");

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
//用户请求
server.use("/",function (req,res,next){
    //get数据
    console.log(req.query);
    //post数据
    console.log(req.body)
    //cookie
    console.log(req.cookies);
    //session
    console.log(req.session)
})
//4.static数据
server.use(expressStatic("./www"))