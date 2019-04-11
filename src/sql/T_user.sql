DROP TABLE IF EXISTS `T_user`;
CREATE TABLE `T_user` (
  `T_name`                        varchar(20) NOT NULL,			    #人员名称
  `T_account`                     bigint      NOT NULL,				  #职工号
  `T_gentime`                     datetime    NOT NULL,	  	    #创建时间
  `T_logintime`                   datetime    NOT NULL,	  	    #上次登录时间
  `T_count`                       bigint      NOT NULL,         #登录次数
  `T_birthday`                    varchar(20) NOT NULL,	  	    #出生日期
  `T_sexId`                       varchar(10) NOT NULL,			    #性别
  `T_unitId`                      varchar(64) NOT NULL, 			  #科研单位
  `T_divisionId`                  varchar(64)         ,		      #科研教研室
  `T_eduDegreeId`                 varchar(64) NOT NULL,		      #最后学位
  `T_eduLevelId`                  varchar(64) NOT NULL,		      #最后学历
  `T_titleId`                     varchar(64) NOT NULL,			    #职称
  `T_positionType`                varchar(64)         ,		      #岗位类型
  `T_positionLevel`               varchar(64)         ,		      #岗位级别
  `T_dutyDate`                    varchar(64)         ,		      #定职日期
  `T_honorTitleId`                varchar(64)         ,		      #学术荣誉称号
  `T_subjectClassId`              varchar(64) NOT NULL,		      #学科门类
  `T_isStat`                      varchar(64) NOT NULL,		      #是否统计
  `T_subjectId`                   varchar(64) NOT NULL,		      #一级学科
  `T_subject2Id`                  varchar(64) NOT NULL,		      #二级学科
  `T_subject3Id`                  varchar(64)         ,		      #三级学科
  `T_hrUnitId`                    varchar(64)         ,		      #人事单位
  `T_mobile`                      varchar(20)         ,		      #手机
  `T_telOffice`                   varchar(20)         ,		      #办公电话
  `T_email`                       varchar(64)         ,		      #电子邮箱
  `T_qq`                          varchar(20)         ,		      #QQ
  `T_researchField`               varchar(64) NOT NULL,		      #研究方向
  `T_standby10`                   varchar(64) NOT NULL,		      #学科方向
  `T_nameEn`                      varchar(64)         ,		      #英文名
  `T_polityId`                    varchar(64)         ,		      #政治面貌
  `T_subjectCorrelationId`        varchar(64)         ,		      #相关学科
  `T_idCard`                      varchar(64)         ,		      #身份证号码
  `T_teacherType`                 varchar(64)         ,		      #教师类别
  `T_tutorTypeId`                 varchar(64)         ,		      #导师类型
  `T_employDate`                  varchar(64)         ,		      #聘任日期
  `T_duty`                        varchar(64)         ,		      #行政职务
  `T_nationalityId`               varchar(64)         ,		      #国籍
  `T_nationId`                    varchar(64)         ,		      #民族
  `T_address`                     varchar(64)         ,		      #家庭住址 
  `T_postalCode`                  varchar(64)         ,		      #邮政编码
  `T_telHome`                     varchar(64)         ,		      #住宅电话  
  `T_faxOffice`                   varchar(64)         ,		      #办公传真
  `T_personalWebSite`             varchar(64)         ,		      #个人网址  
  `T_personState`                 varchar(64)         ,		      #在职情况
  `T_language1Id`                 varchar(64)         ,		      #第一外语  
  `T_language2Id`                 varchar(64)         ,		      #第二外语
  `T_languageLevel1Id`            varchar(64)         ,		      #第一外语程度 
  `T_languageLevel2Id`            varchar(64)         ,		      #第二外语程度
  `T_graduateSchool`              varchar(64)         ,		      #毕业院校信息  
  `T_learning`                    varchar(64)         ,		      #进修情况
  `T_experienceAbroad`            varchar(64)         ,		      #出国经历  
  `T_parttime`                    varchar(64)         ,		      #学术兼职
  `T_learnSpecialty`              varchar(64)         ,		      #学术特长  
  PRIMARY KEY (`T_account`),
  UNIQUE KEY `T_account` (`T_account`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;


