const http=require("http");
const urlLib=require("url");
const querystring=require("querystring");
const fs=require("fs");

http.createServer(function (req,res){
    //get«Î«Û
    var url=req.url;
    var path=urlLib.parse(url,true).pathname;
    var data=urlLib.parse(url,true).query;

    //post«Î«Û
    var str="";
    req.on("data",function (data){
        str+=data;
    })
    req.on("end",function (){
        var dataPost=querystring.parse(str);

        console.log(path,data,dataPost);
        var filePath="./www"+path;
        fs.readFile(filePath,function(err,data){
            if(err){
                res.write("404");
            }else{
                res.write(data);
            }
            res.end();
        })
    })
}).listen(8081);


