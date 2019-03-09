<template>
 <el-form ref="form" :model="form" label-width="170px" >
<el-card class="box-card">
   <div slot="header" class="clearfix">
  <el-button style="float: right; padding: 3px 0" type="text">查找</el-button>
   </div>
    <el-form-item label="学科门类：">
    <el-radio-group v-model="form.resource">
      <el-radio label="科技类"></el-radio>
      <el-radio label="社科类"></el-radio>
    </el-radio-group>
  </el-form-item>

  <el-form-item label="项目名称" style="width:700px ">
    <el-input v-model="form.projectName"></el-input>
  </el-form-item>

<el-form-item label="项目编号" style="width:700px ">
    <el-input v-model="form.projectCode"></el-input>
  </el-form-item>

<el-form-item label="负责人" style="width:700px ">
    <el-input v-model="form.chargerName"></el-input>
  </el-form-item>

<el-form-item label="项目成员职工号" >
    <el-input v-model="form.projectmembersauthorCode"></el-input>
  </el-form-item>

  <el-form-item label="项目级别">
    <el-select v-model="form.projectLevelId" placeholder="--请选择--">
        <el-option label='国家级' value=""></el-option>
		<el-option label='省部级' value=""></el-option>
		<el-option label='市厅级' value=""></el-option>
		<el-option label='校级'></el-option>
    </el-select>
  </el-form-item>


   <el-form-item label="项目状态：">
    <el-radio-group v-model="form.projectStatusId">
      <el-radio label="进行"></el-radio>
      <el-radio label="完成"></el-radio>
      <el-radio label="延期"></el-radio>
      <el-radio label="撤销"></el-radio>
    </el-radio-group>
  </el-form-item>

  <el-form-item label="立项日期">
    <el-date-picker
      v-model="value7"
      type="daterange"
      align="right"
      unlink-panels
      range-separator="至"
      start-placeholder="开始日期"
      end-placeholder="结束日期"
      :picker-options="pickerOptions2">
    </el-date-picker>
  </el-form-item>
  </el-card>
 </el-form>
</template>

<style>
 .text {
    font-size: 22px;
    color: #000;
  }
  .item {
    margin-bottom: 100px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  } 
  .box-card {
    width: 1200px;
  }

</style>
<script>
  export default {
    data() {
      return {
        form: {
          resource:'',
          projectName:'',
          projectCode:'',
          chargerName:'',
          projectmembersauthorCode:'',
          projectLevelId:'',
          projectStatusId:'', 
          value7:''
        },
        pickerOptions2: {
          shortcuts: [{
            text: '最近一周',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近一个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近三个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit('pick', [start, end]);
            }
          }]
        },
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
  }

</script>

