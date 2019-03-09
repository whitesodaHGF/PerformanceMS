<template>
<el-card class="box-card">
  <el-row>
  <el-col :span="12" >
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage3"
      :page-size="100"  
      layout="prev, pager, next, jumper"
      :total="1000">
    </el-pagination>
    </el-col>
  <el-col :span="12" push="7" >
     <router-link tag='a' :to="'../Projectadd.vue'" >
    <el-button size="small">新增</el-button>
    </router-link>
    <el-button size="small">删除</el-button>
    <el-button size="small">查看</el-button>
    <el-button size="small">导出</el-button>
  </el-col>
</el-row>
  
    <el-table
    :data="tableData3"
    height="700"
    border
    style="width: 100%">

    <el-table-column
      prop="projectCode"
      label="项目编号"
     >
    </el-table-column>
    <el-table-column
      prop="projectName"
      label="项目名称"
     >
    </el-table-column>
    <el-table-column
      prop="chargerName"
      label="负责人">
    </el-table-column>
      <el-table-column
      prop="starttime"
      label="立项日期"
     >
    </el-table-column>
    <el-table-column
      prop="projectSourceId"
      label="项目来源"
     >
    </el-table-column>
      <el-table-column
      prop="projectType"
      label="项目分类"
      >
    </el-table-column>
     <el-table-column
      prop="projectfeeAuthorize"
      label="合同经费">
    </el-table-column>

    <el-table-column
      prop="projectStatusId"
      label="项目状态">
    </el-table-column>
    <el-table-column
      prop="projectTypeChild"
      label="项目子类">
    </el-table-column>
      <el-table-column
      prop="endtime"
      label="计划完成日期"
      >
    </el-table-column>
    <el-table-column
      prop="advice"
      label="审核意见"
     >
    </el-table-column>
    <el-table-column
      prop="checkStatus"
      label="审核状态">
    </el-table-column>
     <el-table-column
      prop="operte"
      label="操作 ">
    </el-table-column>
  </el-table>
  <el-pagination
  background
  layout="prev, pager, next"
  :total="100">
</el-pagination>
</el-card>

</template>
<style>
  .text {
    font-size: 30px;
  }

  .item {
    padding: 18px 0;
  }

  .box-card {
    width: 1400px;
  }
</style>
<script>
  export default {
    data() {
      return {
        tableData3: [{
          projectCode:'',
        projectName:'',
        chargerName:'',
        starttime:'',
        projectSourceId:'',
        projectfeeAuthorize:'',
        projectStatusId:'',
        projectTypeChild:'',
        endtime:'',
        advice:'',
        checkStatus:'',
           currentPage3: 10,  //总页数
        }]
      }
    },
      methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
    }
  }
</script>