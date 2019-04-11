DROP TABLE IF EXISTS `Z_SUBPROJECT`;
CREATE TABLE `Z_SUBPROJECT`(
  `Z_title_orderId`                       varchar(50)        ,      #署名顺序
  `Z_title_authorType`                    varchar(50)        ,      #人员来源
  `Z_title_personName`                    varchar(50)        ,      #成员姓名
  `Z_title_sexId`                         varchar(50)        ,      #成员性别
  `Z_title_authorCode`                    varchar(50)        ,      #成员职工号
  `Z_title_subjectId`                     varchar(50)        ,      #学科方向
  `Z_title_titleId`                       varchar(50)        ,      #职称
  `Z_title_eduLevelId`                    varchar(50)        ,      #学历
  `Z_title_workUnitName`                  varchar(50)        ,      #工作单位
  PRIMARY KEY (`Z_title_orderId`),
  UNIQUE KEY `Z_title_orderId` (`Z_title_orderId`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
