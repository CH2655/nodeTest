/**
 * Created by Administrator on 2018/1/3.
 */
var express=require("express");

var server=express();

//server.use("/a.html", function (req,res) {
//    res.send({a:"1111",b:"bbbb"});
//    //原生的write方法只能传字符串或者原始的二进制流
//    //res.write({a:"1111",b:"bbbb"})//这样传会报错
//    res.end();
//})
//server.use("/b.html", function (req,res) {
//    res.send('456');
//    res.end();
//})
server.get("/",function (){
    console.log("get来了")
})
server.post("/",function (){
    console.log("post来了")
})
server.use("/",function (){
    console.log("use了");
})

server.listen(8081)