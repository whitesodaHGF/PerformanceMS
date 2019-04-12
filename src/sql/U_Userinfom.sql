DROP TABLE IF EXISTS `U_Userinfom`;
CREATE TABLE `U_Userinfom`(
    `U_Puserid`                    bigint      NOT NULL,     #职工员账号
    `U_Ppasswd`                    varchar(30) NOT NULL,     #普通用户密码
    `U_Pmainbox`                   varchar(30) NOT NULL,     #职工员邮箱
    `U_Ptelphoto`                  varchar(30) NOT NULL,     #职工员电话号码
    `U_Ppeoid`                     varchar(30) NOT NULL,     #职工员身份证
    `U_Suserid`                    bigint      NOT NULL,     #管理账号
    `U_Spasswd`                    varchar(20) NOT NULL,     #管理员用户密码
    `U_Smainbox`                   varchar(30) NOT NULL,     #管理员邮箱
    `U_Stelphoto`                  varchar(30) NOT NULL,     #管理员电话号码
    `U_Speoid`                     varchar(30) NOT NULL,     #管理员职工员身份证
    PRIMARY KEY (`U_Puserid`),
    UNIQUE KEY `U_Puserid` (`U_Puserid`)
)   ENGINE=MyISAM DEFAULT CHARSET=utf8;
