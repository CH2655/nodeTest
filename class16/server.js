/**
 * Created by Administrator on 2018/1/15.
 */
const express=require("express");
const expressStatic=require("express-static");
const cookieParser=require("cookie-parser");
const cookieSession=require("cookie-session");
const bodyParser=require("body-parser");
const jade=require("jade");
const ejs=require("ejs");
const consolidate=require("consolidate");

var server=express()

server.listen(8081)


//1.����cookie
server.use(cookieParser("dsadewweq213"))

//2.����session
var arr=[];
for(var i=0;i<100000;i++){
    arr.push("keys_"+Math.random());
}
server.use(cookieSession({name:"session_id",keys:arr,maxAge:20*3600*1000}))
//3.ʹ��post
server.use(bodyParser.urlencoded({extended:false}))


//����ģ������
//(1)ʹ������ģ������
server.set('view engine','html')
//(2)ģ���������������
server.set('views','./views')
//(3)���ʲô����
server.engine('html',consolidate.ejs)

//��������
server.get("/index",function (req,res){
    //if(req.session.session_id){//�û���¼��
        res.render("1.ejs",{name:"chenhe"})//��ȡ�ļ����͵�ǰ̨

        //res.send()ֱ�ӷ��Ͷ����������
    //}else{
    //    res.render("login.ejs",{name:chenhe})
    //}

})


//4.static����
server.use(expressStatic("./www"))