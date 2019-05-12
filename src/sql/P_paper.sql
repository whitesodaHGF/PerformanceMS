DROP TABLE IF EXISTS `P_paper`;
CREATE TABLE `P_paper` (
    `P_paperModeId`                 varchar(20) NOT NULL,		      #论文类型
    `P_name`                        varchar(64) NOT NULL,			  #论文题目
    `P_subjectClassId`              varchar(20) NOT NULL,		      #学科门类
    `P_publishDate`                 datetime    NOT NULL,	  	      #发表/出版时间
    `P_publishUnit`                 varchar(20) NOT NULL,	  	      #发表刊物/论文集
    `P_paperTypes`                  varchar(20) NOT NULL,	  	      #刊物类型
    `P_employType`                  varchar(20)         ,             #收录类别
    `P_unitId`                      varchar(64) NOT NULL,		      #所属单位
    `P_subjectId`                   varchar(10) NOT NULL,			  #一级学科
    `P_projectSourceId`             varchar(20) NOT NULL,		      #项目来源
    `P_researchClassId`             varchar(20) NOT NULL,		      #研究类别
    `P_publishRangeId`              varchar(64) NOT NULL,		      #发表范围
    `P_juanNumber`                  varchar(64)         ,		      #卷号
    `P_qiNumber`                    varchar(64)         ,		      #期号
    `P_pageScope`                   varchar(64)         ,		      #页码范围
    `P_wordNumber`                  varchar(20)         , 		      #字数
    `P_schoolSign`                  varchar(64)         ,		      #学校署名
    `P_unitOrderId`                 varchar(64) NOT NULL,		      #单位排名
    `P_pageSpace`                   varchar(64)         ,		      #版面
    `P_isTranslated`                varchar(64)         ,		      #是否为译文
    `P_issn`                        varchar(64)         ,		      #ISSN号
    `P_referenceNumber`             varchar(64)         ,		      #索引号
    `P_cn`                          varchar(64)         ,		      #CN号
    `P_isOfficialPublish`           varchar(64) NOT NULL,		      #是否正式出版
    PRIMARY KEY (`P_name`),
    UNIQUE KEY `P_name` (`P_name`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

    -- `P_orderId`                     varchar(50)         ,             #署名顺序
    -- `P_authorType`                  varchar(50)         ,             #作者类型
    -- `P_authorName`                  varchar(50)         ,             #成员姓名
    -- `P_sexId`                       varchar(50)         ,             #成员性别
    -- `P_authorCode`                  varchar(50)         ,             #作者职工号
    -- `P_subject`                     varchar(50)         ,             #学科方向
    -- `P_titleId`                     varchar(50)         ,             #职称
    -- `P_eduLevelId`                  varchar(50)         ,             #学历
    -- `P_isTxzz`                      varchar(50)         ,             #是否通讯作者
    -- `P_authorUnit`                  varchar(50)         ,             #工作单位
    -- `P_workRatio`                   varchar(50)         ,             #贡献率
    -- `P_keywords`                    varchar(50)         ,             #关键字
    -- `P_productAbstract`             varchar(50)         ,             #论文摘要
    -- `P_intro`                       varchar(50)         ,             #备注
    

