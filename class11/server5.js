/**
 * Created by Administrator on 2018/1/5.
 */
var express=require("express");
var cookieParser=require("cookie-parser");
var cookieSession=require("cookie-session");

//cookie
var server=express();

var arr=[]
for(var i=0;i<10000;i++){
    arr.push("sign_"+Math.random());
}
//cookie-parser��һ���м����
server.use(cookieParser());
server.use(cookieSession({
    name:"sess",//sessionid������
    keys:arr,
    maxAge:"����"//session����Ч��
}))
server.use("/", function (req,res) {
    if(req.session['count']==null){
        req.session['count']=1;
    }else{
        req.session['count']++;
    }
    console.log(req.session["count"]);
    res.send("ok");//�����У�����һ�η��ʽ���
})


server.listen(8081);

