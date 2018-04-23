/**
 * Created by Administrator on 2018/1/11.
 */
const ejs=require("ejs");

var str=ejs.renderFile("./views/3.ejs",{json:{
        arr:[{user:"chenhe",pass:"12345"},{user:"chenhe1",pass:"12345"},{user:"chenhe2",pass:"12345"}]
    }},function (err,data){
    console.log(data);
})
