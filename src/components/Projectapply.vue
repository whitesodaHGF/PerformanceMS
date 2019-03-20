<template>
<el-form ref="form" :model="form" label-width="80px">
<el-form-item >
<el-row>
  <el-col :span="20">  
    <el-radio-group v-model="selectstatus">
    <el-radio :label="3">所有</el-radio>
    <el-radio :label="6">未启动</el-radio>
    <el-radio :label="9">申报中</el-radio>
    <el-radio :label="12">已停止</el-radio>
  </el-radio-group>
  </el-col>
  <el-col :span="4">
    <el-button size="medium">查看所有项目</el-button>
    <el-button size="medium">查询</el-button>
    </el-col>
</el-row>
</el-form-item>
<el-form-item>
     <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      prop="date"
      label="申报计划名称"
      width="270">
    </el-table-column>
    <el-table-column
      prop="name"
      label="申报开始日期"
      width="270">
    </el-table-column>
    <el-table-column
      prop="address"
      label="申报结束日期"
       width="270">
    </el-table-column>
    <el-table-column
      prop="address"
      label="申报状态"
       width="270">
    </el-table-column>
        <el-table-column
      prop="address"
      label="操作"
       width="255">
    </el-table-column>
  </el-table>
</el-form-item>
</el-form>
</template>

<script>
  export default {
    data () {
      return {
       selectstatus: 9
      };
    }
  }
</script>