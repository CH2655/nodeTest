/**
 * Created by Administrator on 2018/1/12.
 */
const fs=require("fs");
 fs.rename("a.txt","newa.txt",function (err){
     console.log(err)
 })