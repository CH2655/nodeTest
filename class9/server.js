/**
 * Created by Administrator on 2018/1/3.
 */
var express=require("express");

var server=express();

//server.use("/a.html", function (req,res) {
//    res.send({a:"1111",b:"bbbb"});
//    //ԭ����write����ֻ�ܴ��ַ�������ԭʼ�Ķ�������
//    //res.write({a:"1111",b:"bbbb"})//�������ᱨ��
//    res.end();
//})
//server.use("/b.html", function (req,res) {
//    res.send('456');
//    res.end();
//})
server.get("/",function (){
    console.log("get����")
})
server.post("/",function (){
    console.log("post����")
})
server.use("/",function (){
    console.log("use��");
})

server.listen(8081)