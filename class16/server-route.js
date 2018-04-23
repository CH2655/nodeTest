/**
 * Created by Administrator on 2018/1/15.
 */
const express=require("express");


var server=express();

//Ŀ¼1  /user
var routeUser=express.Router();
routeUser.get("/1.html",function (req,res){
    res.send("user111");
})
routeUser.get("/2.html",function (req,res){
    res.send("user222");
})
//Ŀ¼2  /artical
var routerArtical=express.Router();
routerArtical.get("/3.html",function (req,res){
    res.send("artical111");
})
routerArtical.get("/4.html",function (req,res){
    res.send("artica2222");
})

server.use("/user",routeUser);
server.use("/artical",routerArtical);

server.listen(8081)