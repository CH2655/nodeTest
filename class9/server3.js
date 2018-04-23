/**
 * Created by Administrator on 2018/1/3.
 */
var express=require("express");
var expressStatic=require("express-static");

var server=express();
var json={
    chenhe:"12345",
    blue:"54321",
    pang:"789"
}
server.get("/login",function (req,res){
    var user=req.query["user"];
    var pass=req.query["pass"];

    //判断用户是否存在
    if(json[user]==null){
        res.send({ok:false,msg:"您的用户不存在"});
    }else if(json[user]!=pass){
        res.send({ok:false,msg:"您的密码错误"});;
    }else{
        res.send({ok:true,msg:"登陆成功"});
    }
    res.end();
})
server.listen(8081);
server.use(expressStatic("./www"));