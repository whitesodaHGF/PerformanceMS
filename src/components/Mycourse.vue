<template>
<el-form :inline="true" :model="formInline" class="demo-form-inline">
 <el-row>
  <el-col :span="6" push="18" >
     <router-link tag='a' :to="'../Projectadd.vue'" >
    <el-button size="small">新增</el-button>
    </router-link>
    <el-button size="small">删除</el-button>
    <el-button size="small">查看</el-button>
    <el-button size="small">导出</el-button>
  </el-col>
</el-row>
  <el-table
    :data="courseinform"
    style="width: 100%"
    max-height="250">
    <el-table-column
      fixed
      prop="course_name"
      label="课程名称"
      width="150">
    </el-table-column>
     <el-table-column
      prop="course_num"
      label="课程编号"
      width="120">
    </el-table-column>
    <el-table-column
      prop="course_teacher_unit"
      label="教师单位"
      width="120">
    </el-table-column>
     <el-table-column
      prop="course_teacher_name"
      label="任课老师"
      width="120">
    </el-table-column>
      <el-table-column
      prop="course_teacher_id"
      label="职工编号"
      width="120">
    </el-table-column>
   
    <el-table-column
      prop="course_type"
      label="课程属性"
      width="120">
    </el-table-column>
    <el-table-column
      prop="course_class"
      label="授课班级"
      width="120">
    </el-table-column>
    <el-table-column
      prop="course_counttime"
      label="课程学时"
      width="120">
    </el-table-column>
      <el-table-column
      prop="course_time"
      label="上课时间"
      width="120">
    </el-table-column>
      <el-table-column
      prop="course_position"
      label="上课地点"
      width="120">
    </el-table-column>
    
    <el-table-column
      fixed="right"
      label="操作"
      width="120">
      <template slot-scope="scope">
        <el-button
          @click.native.prevent="deleteRow(scope.$index,courseinform)"
          type="text"
          size="small">
          移除
        </el-button>
      </template>
    </el-table-column>
  </el-table>
</el-form>
</template>

<script>
  export default {
    methods: {
      deleteRow(index, rows) {
        rows.splice(index, 1);
      }
    },
    data() {
      return {
        courseinform: [{
        course_name:'1eee',//         varchar(50) NOT NULL,#课程名字
        course_teacher_unit:'1eee',//    varchar(50) NOT NULL,#教师单位
        course_num:'1eee',//              varchar(50)  NOT NULL,#课程编号
        course_type:'1eee',//            varchar(50) NOT NULL,#课程属性
        course_class:'1eee',//          varchar(50) NOT NULL,#授课班级
        course_counttime:'1eee',//        varchar(50) NOT NULL,#课程学时
        course_teacher_name:'1eee',//    varchar(50) NOT NULL,#任课老师
        course_time:'1eee',//            varchar(50) NOT NULL,#上课时间
        course_position:'1eee',//       varchar(50) NOT NULL,#上课地点
        course_teacher_id:'1eee'//      varchar(50)  NOT NULL,#职工编号
        },{
        course_name:'',//         varchar(50) NOT NULL,#课程名字
        course_teacher_unit:'',//    varchar(50) NOT NULL,#教师单位
        course_num:'',//              varchar(50)  NOT NULL,#课程编号
        course_type:'',//            varchar(50) NOT NULL,#课程属性
        course_class:'',//          varchar(50) NOT NULL,#授课班级
        course_counttime:'',//        varchar(50) NOT NULL,#课程学时
        course_teacher_name:'',//    varchar(50) NOT NULL,#任课老师
        course_time:'',//            varchar(50) NOT NULL,#上课时间
        course_position:'',//       varchar(50) NOT NULL,#上课地点
        course_teacher_id:''//      varchar(50)  NOT NULL,#职工编号
        },{
        course_name:'',//         varchar(50) NOT NULL,#课程名字
        course_teacher_unit:'',//    varchar(50) NOT NULL,#教师单位
        course_num:'',//              varchar(50)  NOT NULL,#课程编号
        course_type:'',//            varchar(50) NOT NULL,#课程属性
        course_class:'',//          varchar(50) NOT NULL,#授课班级
        course_counttime:'',//        varchar(50) NOT NULL,#课程学时
        course_teacher_name:'',//    varchar(50) NOT NULL,#任课老师
        course_time:'',//            varchar(50) NOT NULL,#上课时间
        course_position:'',//       varchar(50) NOT NULL,#上课地点
        course_teacher_id:''//      varchar(50)  NOT NULL,#职工编号
        }]
      }
    }
  }
</script>