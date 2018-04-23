const fs=require("fs");
 fs.readFile("bbb.txt",function (err,data){
 	if(err){
 		console.log("读取失败");
 	}else{
 		console.log(data.toString());
 	}	
 })