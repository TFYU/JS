let db = require('../databases/mongodb');
let mysql = require('../databases/mysql');
let optfile = require('../service/service');
function getRecall(response) {
    response.writeHead(200,{'content-type':'text/html; charset = utf-8'});
    function recall(data) {
        response.write(data);
        response.end();
    }
    return recall;//将函数返回出来
}
module.exports = {
    login:function(request,response) {
        recall = getRecall(response);
        optfile.readfile('./views/1.html',recall);//接收函数
    },
    jquery:function(request,response) {
        recall = getRecall(response);
        optfile.readfile('./public/jquery.js',recall);
    },
    vue:function(request,response) {
        recall = getRecall(response);
        optfile.readfile('./public/vue.js',recall);
    },
    //db增
    DbAdd:function(request,response) {
        db.add(request,response);
    },
    //db查
    DbFind:function(request,response) {
        db.find(request,response);
    },
    //db删
    DbDelete:function(request,response) {
        db.delete(request,response);
    },
    //db改
    DbUpdate:function(request,response) {
        db.update(request,response);
    },
    //Mysql增
    MysqlAdd:function(request,response) {
        mysql.add(request,response);
    },
    //Mysql查
    MysqlFind:function(request,response) {
        mysql.find(request,response);
    },
    //Mysql删
    MysqlDelete:function(request,response) {
        mysql.delete(request,response);
    },
    //Mysql改
    MysqlUpdate:function(request,response) {
        mysql.update(request,response);
    }
}