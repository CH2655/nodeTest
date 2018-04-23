/**
 * Created by Administrator on 2018/1/9.
 */
const jade=require("jade");

var str=jade.renderFile("./views/8.jade",{pretty:true,name:"blue",json:{width:"100px",height:"100px"},arr:["active","btn"]});
console.log(str);