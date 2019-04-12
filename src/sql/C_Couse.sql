DROP TABLE IF EXISTS `C_COURSE_INFORM`;
CREATE TABLE `C_COURSE_INFORM`(
    `C_course_name`           varchar(50) NOT NULL,       #课程名字
    `C_course_teacher_unit`   varchar(50) NOT NULL,       #教师单位
    `C_course_num`            varchar(50) NOT NULL,       #课程编号
    `C_course_type`           varchar(50) NOT NULL,       #课程属性
    `C_course_class`          varchar(50) NOT NULL,       #授课班级
    `C_course_counttime`      varchar(50) NOT NULL,       #课程学时
    `C_course_teacher_name`   varchar(50) NOT NULL,       #任课老师
    `C_course_time`           varchar(50) NOT NULL,       #上课时间
    `C_course_position`       varchar(50) NOT NULL,       #上课地点
    `C_course_teacher_id`     varchar(50) NOT NULL,       #职工编号
    PRIMARY KEY (`C_course_name`),
    UNIQUE KEY `C_course_name` (`C_course_name`)
)   ENGINE=MyISAM DEFAULT CHARSET=utf8;

