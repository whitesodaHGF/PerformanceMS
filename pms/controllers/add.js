//const Mock = require('mockjs');
const test = {};
let AddController = {};
// const Test = require('../data/test');
// let _Test = Test;

let _query=require('../data/mysqlpool');

AddController.ADD = (req,res)=>{
  
  let addsql='insert into T_user values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)';
  let addsqlparams=[req.body.T_name,req.body.T_account,req.body.T_birthday,req.body.T_sexId,req.body.T_unitId,req.body.T_divisionId,req.body.T_eduDegreeId,req.body.T_eduLevelId,req.body.T_titleId,req.body.T_positionType,req.body.T_dutyDate,req.body.T_honorTitleId,req.body.T_subjectClassId,req.body.T_isStat,req.body.T_subjectId,req.body.T_subject2Id,req.body.T_subject3Id,req.body.T_hrUnitId,req.body.T_mobile,req.body.T_telOffice,req.body.T_email,req.body.T_qq,req.body.T_researchField,req.body.T_standby10,req.body.T_nameEn,req.body.T_polityId,req.body.T_subjectCorrelationId,req.body.T_idCard,req.body.T_teacherType,req.body.T_tutorTypeId,req.body.T_employDate,req.body.T_duty,req.body.T_nationalityId,req.body.T_nationId,req.body.T_address,req.body.T_postalCode,req.body.T_telHome,req.body.T_faxOffice,req.body.T_personalWebSite,req.body.T_personState,req.body.T_language1Id,req.body.T_language2Id,req.body.T_languageLevel1Id,req.body.T_languageLevel2Id,req.body.T_graduateSchool,req.body.T_learning,req.body.T_experienceAbroad,req.body.T_parttime,req.body.T_learnSpecialty];
  _query(addsql,addsqlparams,(err,result)=>{
    if(err){
      console.log(err);
    }
    console.log(result);
    res.send(result);
  });

  
  // let mysql = require('mysql');

  // let connection = mysql.createConnection({
  //   host: '127.0.0.1',
  //   user: 'root',
  //   password: 'password',
  //   database: 'jxweb'
  // });

  // connection.connect(function (err) {
  //   if (err) {
  //     return console.error('error:' + err.message);
  //   }
  //   console.log('Connected to mysql server');
  // });

  // let addsql='insert into T_user values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)';
  // // let str=req.body;
  // // console.log(str);
  // // res.send(str);
  // let addsqlparams=['张三','201741400114','1999-08-05','男','教育学院（师范学 院）','无','博士','博士研究生','教授','学科建设骨干教师','2019','其他','社科类','是','马克 思主义','马克思主义研究','无','教育学院（师范学院）','15014116164','00000000','15014116164','15014116164','无','无','Alan','中共党员','马克思主义','44522xxxxxxxxxxxx','教学','博导','2007','无','中国','汉族','无','523000','00000000','00000000','无','在职','英语','无','良好','无','无','无','无','无','无'];


  // connection.query(addsql,addsqlparams,function(err,result){
  //   if(err){
  //     console.log('[SELECT ERROR] -',err.message);
  //     return;
  //   }
  //   //console.log(result);

  //   connection.end(function (err) {
  //     if (err) {
  //       return console.log('error:' + err.message);
  //     }
  //     console.log('Close the databse connection.');
  //   });

  //   res.send('OK');
  // });
}

AddController.saveUnitform=(req,res)=>{
  let addsql='insert into R_researchUnit values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)';
  let addsqlparams=[req.body.R_name,req.body.R_code,req.body.R_charger,req.body.R_upUnitId,req.body.R_subjectClassId,req.body.R_staTypeId,req.body.R_subjectId,req.body.R_levelId,req.body.R_telOffice,req.body.R_fax,req.body.R_address,req.body.R_postalCode,req.body.R_email,req.body.R_website,req.body.R_createDate,req.body.R_entityFlag,req.body.R_zclx,req.body.R_fileId];
  _query(addsql,addsqlparams,(err,result)=>{
    if(err){
      console.log(err);
    }
    console.log(result);
    res.send(result);
  });
}

AddController.saveBeanform=(req,res)=>{
  let addsql='insert into B_Bean values(?,?,?,?,?,?,?,?,?,?)';
  let addsqlparams=[req.body.B_name,req.body.B_charger,req.body.B_unitId,req.body.B_chargerGender,req.body.B_chargerBrithday,req.body.B_chargerTitleId,req.body.B_telOffice,req.body.B_officeAddress,req.body.B_researchField,req.body.B_constructionPlan];
  _query(addsql,addsqlparams,(err,result)=>{
    if(err){
      console.log(err);
    }
    console.log(result);
    res.send(result);
  });
}

AddController.savePaperform=(req,res)=>{
  let addsql='insert into P_paper values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)';
  let addsqlparams=[req.body.P_paperModeId,req.body.P_name,req.body.P_subjectClassId,req.body.P_publishDate,req.body.P_publishUnit,req.body.P_paperTypes,req.body.P_employType,req.body.P_unitId,req.body.P_subjectId,req.body.P_projectSourceId,req.body.P_researchClassId,req.body.P_publishRangeId,req.body.P_juanNumber,req.body.P_qiNumber,req.body.P_pageScope,req.body.P_wordNumber,req.body.P_schoolSign,req.body.P_unitOrderId,req.body.P_pageSpace,req.body.P_isTranslated,req.body.P_issn,req.body.P_referenceNumber,req.body.P_cn,req.body.P_isOfficialPublish];
  _query(addsql,addsqlparams,(err,result)=>{
    if(err){
      console.log(err);
    }
    console.log(result);
    res.send(result);
  });
}


module.exports = AddController;
