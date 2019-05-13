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
      :current-page.sync="Beanlist.currentPage3"
      :page-size="100"
      layout="prev, pager, next, jumper"
      :total="1000">
    </el-pagination>
    </el-col>
  <el-col :span="12" >
    <el-button size="small" @click="getexcel" style="float:right;">导出</el-button>
    <router-link to="/BeanSearch" ><el-button size="small" style="float:right;">查询</el-button></router-link>
    <router-link to="/Bean" ><el-button size="small" style="float:right;">新增</el-button></router-link>
    
  </el-col>
</el-row>
  
    <el-table
    ref="multipleTable"
    :data="Beanlist"
    tooltip-effect="dark"
    height="700"
    border
    style="width: 100%"
    class="table"
    @selection-change="handleSelectionChange">

    <el-table-column type="selection" prop="All" label="全选" ></el-table-column>
    <el-table-column  prop="B_name" label="团队名称" width=400></el-table-column>
    <el-table-column  prop="B_unitId" label="所属单位" ></el-table-column>
    <el-table-column  prop="B_charger" label="带头人" ></el-table-column>
    <el-table-column  prop="B_officeAddress" label="办公地点" ></el-table-column>
    <el-table-column  prop="B_telOffice" label="办公电话" ></el-table-column>
    <el-table-column  prop="operte" label="操作" > <template slot-scope="scope">
      <el-button
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
</style>
<script>
import API from '../api/api_test';
import FileSaver from "file-saver";
import XLSX from "xlsx";
  export default {
    data() {
      return {
        Beanlist: [],
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
      },
      getexcel(){
          // 设置当前日期
        let time = new Date();
        let year = time.getFullYear();
        let month = time.getMonth() + 1;
        let day = time.getDate();
        let name = year + "" + month + "" + day;
        // console.log(name)
        /* generate workbook object from table */
        //  .table要导出的是哪一个表格
        var wb = XLSX.utils.table_to_book(document.querySelector(".table"));
        /* get binary string as output */
        var wbout = XLSX.write(wb, {
          bookType: "xlsx",
          bookSST: true,
          type: "array"
        });
        try {
          //  name+'.xlsx'表示导出的excel表格名字
          FileSaver.saveAs(
            new Blob([wbout], { type: "application/octet-stream" }),
            name + ".xlsx"
          );
        } catch (e) {
          if (typeof console !== "undefined") console.log(e, wbout);
        }
        return wbout;
      },
    },
    created:function() {
        API.getBeaninfo().then((result)=>{
            console.log(result);
            this.Beanlist=result;
          })
      },
  }
</script>

