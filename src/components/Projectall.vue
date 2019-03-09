<template>
<el-form ref="form" :model="form" label-width="80px">
    <el-table
    :data="tableData3"
    height="700"
    border
    style="width: 100%">
    <el-table-column
      prop="projectName"
      label="项目名称"
     >
    </el-table-column>
     <el-table-column
      prop="projectunitId"
      label="所属单位">
    </el-table-column>
    <el-table-column
      prop="chargerName"
      label="申请人">
    </el-table-column>
      <el-table-column
      prop="starttime"
      label="申请时间"
     >
    </el-table-column>
     <el-table-column
      prop="projectfeeAuthorize"
      label="申请经费（万元）">
    </el-table-column>

    <el-table-column
      prop="projectStatusId"
      label="项目状态">
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
</el-form>

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
        projectName:'',
        chargerName:'',
        starttime:'',
        projectfeeAuthorize:'',
        projectStatusId:'',
        checkStatus:'',
        }]
      }
    }
  }
</script>
