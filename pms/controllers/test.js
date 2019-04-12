//const Mock = require('mockjs');
const test = {};
let testController = {};
// const Test = require('../data/test');
// let _Test = Test;

testController.T = (req, res) => {

  // console.log('---Test---');
  // console.log(_Test);

  let mysql = require('mysql');

  let connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'password',
    database: 'jxweb'
  });

  connection.connect(function (err) {
    if (err) {
      return console.error('error:' + err.message);
    }
    console.log('Connected to mysql server');
  });

  /*
    作为数据库使用的模板，这里之间的部分用来进行数据库操作
  */

  var sql='select * from T_user;'

  connection.query(sql,function(err,result){
    if(err){
      console.log('[SELECT ERROR] -',err.message);
      return;
    }
    //console.log(result);

    connection.end(function (err) {
      if (err) {
        return console.log('error:' + err.message);
      }
      console.log('Close the databse connection.');
    });


    res.send(result);
  });
};


module.exports = testController;


