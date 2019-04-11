DROP TABLE IF EXISTS `B_Bean`;
CREATE TABLE `B_Bean` (
  `B_name`                        varchar(64) NOT NULL,			  #团队名称
  `B_charger`                     varchar(20) NOT NULL,		    #带头人
  `B_unitId`                      varchar(20) NOT NULL,       #所属单位
  `B_chargerGender`               varchar(20)         ,       #带头人性别
  `B_chargerBrithday`             varchar(20)         ,       #出生日期
  `B_chargerTitleId`              varchar(20)         ,       #职称
  `B_telOffice`                   varchar(20)         ,		    #办公电话
  `B_officeAddress`               varchar(64)         ,		    #办公地点
  `B_researchField`               varchar(64)         ,		    #研究方向
  `B_constructionPlan`            varchar(64)         ,		    #建设规划
  PRIMARY KEY (`B_name`),
  UNIQUE KEY `B_name` (`B_name`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
