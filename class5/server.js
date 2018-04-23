/**
 * Created by Administrator on 2017/12/28.
 */
const http=require("http");
const querystring=require("querystring");

var server=http.createServer(function (req, res) {
        var str="";
        var i=0;
        req.on("data",function (data){
            i++
            console.log(i);
            str+=data;
        })
        req.on("end",function (){
            var data=querystring.parse(str);
            console.log(data);
        })
}).listen(8081);