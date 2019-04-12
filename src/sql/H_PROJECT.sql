DROP TABLE IF EXISTS `H_PROJECT`;
CREATE TABLE H_PROJECT(
  `H_contractsubjectClassId`             varchar(50) NOT NULL,      #学科门类
  `H_contractname`                       varchar(50) NOT NULL,      #合同名称
  `H_contractType`                       varchar(50) NOT NULL,      #合同类别
  `H_contractcode`                       varchar(50) NOT NULL,      #合同编号
  `H_contractchargerType`                varchar(50) NOT NULL,      #负责人类型
  `H_contractchargerName`                varchar(50) NOT NULL,      #负责人
  `H_contractchargerNametel`             varchar(50) NOT NULL,      #负责人电话
  `H_contractunitId`                     varchar(50) NOT NULL,      #承接单位
  `H_contractsubjectId`                  varchar(50) NOT NULL,      #学科分类
  `H_contractprojectStatusId`            varchar(50) NOT NULL,      #合同状态
  `H_contractfeeAuthorize`               varchar(50) NOT NULL,      #合同金额
  `H_contractpayType`                    varchar(50) NOT NULL,      #支付方式
  `H_contractauthorizeDate`              varchar(50) NOT NULL,      #签订日期  
  `H_contractentryTime`                  varchar(50) NOT NULL,      #登记时间
  `H_contractstartDate`                  varchar(50) NOT NULL,      #开始日期
  `H_contractactualEndDate`              varchar(50) NOT NULL,      #终止日期
  `H_contractfeeCode`                    varchar(50) NOT NULL,      #财务账号
  `H_contractbuyerName`                  varchar(50) NOT NULL,      #甲方名称
  `H_contractbuyerType`                  varchar(50) NOT NULL,      #甲方类别
  `H_contractbuyerAddress`               varchar(50) NOT NULL,      #甲方地址
  `H_contractbuyerArea`                  varchar(50) NOT NULL,      #甲方地区
  `H_contractbuyerZipCode`               varchar(50) NOT NULL,      #甲方邮编
  `H_contractbuyerTel`                   varchar(50) NOT NULL,      #甲方电话
  `H_contractbuyerRepresentative`        varchar(50) NOT NULL,      #甲方代表人
  `H_contractprojectSourceId`            varchar(50) NOT NULL,      #项目来源
  `H_contractresearchClassId`            varchar(50) NOT NULL,      #研究类别
  `H_contractcooperateId`                varchar(50) NOT NULL,      #合作形式
  `H_contractgmjjhy`                     varchar(50) NOT NULL,      #国民经济行业(中类)
  `H_contractintro`                      varchar(50) NOT NULL,      #备注
  PRIMARY KEY (`H_contractcode`),
  UNIQUE KEY `H_contractcode` (`H_contractcode`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

