/**
 * Created by Administrator on 2017/12/29.
 */
const http=require("http");
const fs=require("fs");
const urlLib=require("url");
const querystring=require("querystring");

var user={};//存储注册的用户数据
var server=http.createServer(function (req,res){
    //解析数据
    var str="";

    req.on("data",function (data){
        str+=data;
    })
    req.on("end",function (){
        var dataPost=querystring.parse(str);
        var dataJson=urlLib.parse(req.url,true);
        var path=dataJson.pathname;
        var dateGet=dataJson.query;

        if(path=="/user"){
            console.log(dateGet);
            switch (dateGet.act){
                //注册
                case "reg":
                    //判断用户存不存在
                    if(user[dateGet.user]){
                        res.write('{"ok":false,"msg":"您的用户已经存在"}');
                    }else{
                        user[dateGet.user]=dateGet.pass;
                        res.write('{"ok":true,"msg":"注册成功"}');
                    };
                    break;
                case "login":
                    if(user[dateGet.user]==null){//判断用户存不存在
                        res.write('{"ok":false,"msg":"您的用户不存在"}');
                    }else if(user[dateGet.user]!=dateGet.pass){//判断密码正不正确
                        res.write('{"ok":false,"msg":"用户名或者密码错误"}');
                    }else{
                        res.write('{"ok":true,"msg":"登录成功"}');
                    };
                    break;
                default :
                    res.write('{"ok":true,"msg":"未知的act"}');
            }
            res.end();

        }else{
            var filePath="./www"+path
            fs.readFile(filePath, function (err,data) {
                if(err){
                    res.write("读取失败111");
                }else{
                    res.write(data);
                }
                res.end();
            })
        }
    })
})

server.listen(8081);