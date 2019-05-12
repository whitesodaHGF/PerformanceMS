//导入所需模块  
let mysql=require("mysql");    
//导入配置文件   
let pool = mysql.createPool({    
  host: '127.0.0.1',
  user: 'root',
  password: 'password',
  database: 'jxweb'
});    
//导出查询相关  
var query=function(sql,para,callback){    
    pool.getConnection(function(err,conn){    
        if(err){    
            callback(err,null,null);    
        }else{    
            conn.query(sql,para,function(qerr,vals,fields){    
                //释放连接    
                conn.release();    
                //事件驱动回调    
                callback(qerr,vals,fields);    
            });    
        }    
    });    
};    

module.exports=query;