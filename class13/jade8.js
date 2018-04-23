/**
 * Created by Administrator on 2018/1/9.
 */
const jade=require("jade");

var str=jade.renderFile("./views/14.jade",{pretty:true,content:"<h2>你好啊</h2><p>对方水电费色弱威尔士地方</p>"});
console.log(str);
