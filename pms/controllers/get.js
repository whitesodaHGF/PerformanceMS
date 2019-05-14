//const Mock = require('mockjs');
const test = {};
let GetController = {};

let _query = require('../data/db');

/**
 * 获取用户信息
 * @param req
 * @param res
 */

GetController.T = (req, res) => {
  let sql = 'select * from T_user;'
  let params = {};
  _query(sql, params, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
  });
};

GetController.getUnitinfo = (req, res) => {
  let sql = 'select * from R_researchUnit;'
  let params = {};
  _query(sql, params, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
  });
};

GetController.getBeaninfo = (req, res) => {
  let sql = 'select * from B_Bean;'
  let params = {};
  _query(sql, params, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
  });
};

GetController.getPaperinfo = (req, res) => {
  let sql = 'select * from P_paper;'
  let params = {};
  _query(sql, params, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
  });
};

module.exports = GetController;
