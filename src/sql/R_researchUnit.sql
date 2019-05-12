DROP TABLE IF EXISTS `R_researchUnit`;
CREATE TABLE `R_researchUnit` (
  `R_name`                        varchar(64) NOT NULL,			  #机构名称
  `R_code`                        varchar(64) NOT NULL,		    #机构编号
  `R_charger`                     varchar(20)         ,		    #负责人
  `R_upUnitId`                    varchar(64)         ,	  	  #挂靠单位
  `R_subjectClassId`              varchar(20) NOT NULL,	  	  #学科门类
  `R_staTypeId`                   varchar(20) NOT NULL,       #是否统计
  `R_subjectId`                   varchar(64) NOT NULL,		    #一级学科
  `R_levelId`                     varchar(10)         ,			  #机构级别
  `R_telOffice`                   varchar(20)         ,		    #办公电话
  `R_fax`                         varchar(20)         ,		    #传真
  `R_address`                     varchar(64)         ,		    #地址 
  `R_postalCode`                  varchar(64)         ,		    #邮政编码
  `R_email`                       varchar(64)         ,		    #电子邮箱
  `R_website`                     varchar(64)         ,		    #网址
  `R_createDate`                  datetime    NOT NULL, 		  #成立日期
  `R_entityFlag`                  varchar(64) NOT NULL,		    #是否实体机构
  `R_zclx`                        varchar(64) NOT NULL,		    #组成类型
  `R_fileId`                      varchar(64)         ,		    #电子文档
  PRIMARY KEY (`R_code`),
  UNIQUE KEY `R_code` (`R_code`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
