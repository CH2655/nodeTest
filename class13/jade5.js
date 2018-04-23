/**
 * Created by Administrator on 2018/1/9.
 */
const jade=require("jade");

var str=jade.renderFile("./views/11.jade",{pretty:true,arr:['aaa', 'sfasdf', '3423', 'asdfasdf']});
console.log(str);
