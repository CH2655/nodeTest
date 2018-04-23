const http=require("http");
const urlLib=require("url");

var server=http.createServer(function (req,res){
    var url=req.url;
    var data=urlLib.parse(url,true);
    console.log(data);
    console.log(data.query);
    console.log(data.pathname);

    res.write("aaaaa");
    res.end();
})

server.listen(8081);

