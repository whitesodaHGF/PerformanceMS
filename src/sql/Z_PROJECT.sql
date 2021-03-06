DROP TABLE IF EXISTS `Z_PROJECT`;
CREATE TABLE `Z_PROJECT`(    #横向
  `Z_resource`                         varchar(50) NOT NULL,      #学科门类
  `Z_projectName`                      varchar(50) NOT NULL,      #项目名称
  `Z_projectCode`                      varchar(50) NOT NULL,      #项目编号
  `Z_chargerType`                      varchar(50) NOT NULL,      #负责人类型
  `Z_chargerName`                      varchar(50) NOT NULL,      #负责人名称
  `Z_projectUnitId`                    varchar(50) NOT NULL,      #所属单位
  `Z_projectsubjectId`                 varchar(50) NOT NULL,      #学科分类
  `Z_projectauthorizeSn`               varchar(50),                #批准号
  `Z_projectSourceUnit`                varchar(50),                #项目来源单位
  `Z_isSubjectBuilding`                varchar(50) NOT NULL,      #是否学科建设与平台建设
  `Z_isSubjectBuildingProject`         varchar(50) NOT NULL,      #是否学科共建设项目
  `Z_isSpecialFee`                     varchar(50) NOT NULL,      #是否含有专项经费
  `Z_continueUnitOrder`                varchar(50) NOT NULL,      #承担单位排名
  `Z_isSubProject`                     varchar(50) NOT NULL,      #是否为子课题
  `Z_project_subProjectNum`            NUMERIC     NOT NULL,      #子课题数
  `Z_projectStatusId`                  varchar(50) NOT NULL,      #项目状态
  `Z_startDate`                        varchar(50),               #开始时间   
  `Z_actualEndDate`                    varchar(50),               #结项日期
  `Z_projectfeeAuthorize`              varchar(50),               #合同经费
  `Z_projectSourceId`                  varchar(50) NOT NULL,      #项目来源
  `Z_researchClassId`                  varchar(50) NOT NULL,      #研究类别
  `Z_cooperateId`                      varchar(50) NOT NULL,      #合作形式
  `Z_textarea`                         varchar(50)         ,      #备注

  `Z_projectLevelId`                   varchar(50) ,      #项目级别
  `Z_project_projectTypeId`            varchar(50) ,      #项目分类
  `Z_project_projectSubTypeId`         varchar(50) ,             #项目子类

  `Z_checkstatus`                       varchar(50) ,             #审核状态
    PRIMARY KEY (`Z_projectCode`),
  UNIQUE KEY `Z_projectCode` (`Z_projectCode`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
