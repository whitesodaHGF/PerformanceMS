<template>
<el-card class="box-card">
  <div slot="header" class="clearfix">
    <span>团队列表</span>
  </div>
  <el-row>
  <el-col :span="12" >
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="tableData3.currentPage3"
      :page-size="100"
      layout="prev, pager, next, jumper"
      :total="1000">
    </el-pagination>
    </el-col>
  <el-col :span="12" push=7 >
    <router-link to="/Bean" ><el-button size="small">新增</el-button></router-link>
    <router-link to="/BeanSearch" ><el-button size="small">查询</el-button></router-link>
    <el-button size="small">导出</el-button>
  </el-col>
</el-row>
  
    <el-table
    ref="multipleTable"
    :data="tableData3"
    tooltip-effect="dark"
    height="700"
    border
    style="width: 100%"
    @selection-change="handleSelectionChange">

    <el-table-column type="selection" prop="All" label="全选" ></el-table-column>
    <el-table-column  prop="BeanName" label="团队名称" width=400></el-table-column>
    <el-table-column  prop="Unitname" label="所属单位" ></el-table-column>
    <el-table-column  prop="ChargeName" label="带头人" ></el-table-column>
    <el-table-column  prop="Address" label="办公地点" ></el-table-column>
    <el-table-column  prop="Phone" label="办公电话" ></el-table-column>
    <el-table-column  prop="operte" label="操作" > <template slot-scope="scope"><el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button></template></el-table-column>
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
        tableData3: [
          { 
             BeanName:'传统功夫传承智能化',Unitname:'计算机与网络安全学院',ChargeName:'XXX',Address:'',Phone:'***********',
          },
        ]
      }
    },
      methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },
      toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      }
    }
  }
</script>

