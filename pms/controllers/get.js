//const Mock = require('mockjs');
const test = {};
let testController = {};

let _query=require('../data/mysqlpool');

testController.T = (req, res) => {
  let sql='select * from T_user;'
  let params={};
  _query(sql,params,(err,result)=>{
    if(err){
      console.log(err);
    }
    res.send(result);
  });
};

testController.getUnitinfo = (req, res) => {
  let sql='select * from R_researchUnit;'
  let params={};
  _query(sql,params,(err,result)=>{
    if(err){
      console.log(err);
    }
    res.send(result);
  });
};

testController.getBeaninfo = (req, res) => {
  let sql='select * from B_Bean;'
  let params={};
  _query(sql,params,(err,result)=>{
    if(err){
      console.log(err);
    }
    res.send(result);
  });
};

testController.getPaperinfo = (req, res) => {
  let sql='select * from P_paper;'
  let params={};
  _query(sql,params,(err,result)=>{
    if(err){
      console.log(err);
    }
    res.send(result);
  });
};

module.exports = testController;


