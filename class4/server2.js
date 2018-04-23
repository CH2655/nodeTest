const http=require("http");
const querystring=require("querystring");

var server=http.createServer(function (req,res){
    //console.log(req.url);//     /2.html?a=1&b=2
    var url=req.url
    if(url.indexOf("?")!=-1){
        var str=url.split("?")[1];

       var data=querystring.parse(str);
        console.log(data);
    }else{
        url=req.url;
    }
})

server.listen(8081);