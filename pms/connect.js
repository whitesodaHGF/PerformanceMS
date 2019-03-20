let mysql=require('mysql');

let connection=mysql.createConnection({
    host:'127.0.0.1',
    user:'root',
    password:'password',
    database:'jxweb'
});

connection.connect(function(err){
    if(err){
        return console.error('error:'+err.message);
        
    }
    console.log('Connected to mysql server');
});

connection.end(function(err){
    if(err){
        return console.log('error:'+err.message);
    }
    console.log('Close the databse connection.');
});
