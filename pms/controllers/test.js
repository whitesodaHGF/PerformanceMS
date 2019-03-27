//const Mock = require('mockjs');
const test = {};
let testController = {};
const Test = require('../data/test');
let _Test = Test;

testController.T = (req, res) => {

  console.log('---Test---');
  console.log(_Test);

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

  connection.end(function (err) {
    if (err) {
      return console.log('error:' + err.message);
    }
    console.log('Close the databse connection.');
  });

  return res.json({
    id:'11111',
    name:'hgf'
  });
};

module.exports = testController;
