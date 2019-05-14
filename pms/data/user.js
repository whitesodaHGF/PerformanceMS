/**
 * Created by jerry on 2017/11/13.
 * 初始化用户(user)模拟数据
 *
 * Created by jerry on 2017/11/13.
 */
//用于初始化data信息的、也是后来需要连接数据进行数据传输的部分
const Users = [];  //数组！
Users.push({
  username: 'admin', //用户名
  password: '123456', //密码

});

Users.push({
  username: 'staff',
  password: '123123',
});

module.exports = Users; //用户自定义的模块名
//const Mock = require('mockjs');
