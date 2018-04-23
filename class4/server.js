const http=require("http");

var server=http.createServer(function (req,res){
    //console.log(req.url);//     /2.html?a=1&b=2
    var url=req.url
    if(url.indexOf("?")!=-1){
        var str=url.split("?")[1];

        var arr=str.split("&");
        var GET={};
        for(var i=0;i<arr.length;i++){
            var arr1=arr[i].split("=");
            GET[arr1[0]]=arr1[1]
        }
        console.log(GET);
    }else{
        url=req.url;
    }
})

server.listen(8081);