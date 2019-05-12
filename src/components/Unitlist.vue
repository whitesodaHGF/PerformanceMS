<template>
<el-card class="box-card">
  <div slot="header" class="clearfix">
    <span>机构列表</span>
  </div>
  <el-row>
  <el-col :span="12" >
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="Unitlist.currentPage3"
      :page-size="100"
      layout="prev, pager, next, jumper"
      :total="1000">
    </el-pagination>
    </el-col>
  <el-col :span="12">
    <el-button size="small" @click="getexcel" style="float:right;">导出</el-button>
    <router-link to="/UnitSearch" ><el-button size="small" style="float:right;">查询</el-button></router-link>
    <router-link to="/ResearchUnit" ><el-button size="small" style="float:right;" >新增</el-button></router-link>
  </el-col>
</el-row>
  
    <el-table
    class="table"
    ref="multipleTable"
    :data="Unitlist"
    tooltip-effect="dark"
    height="700"
    border
    style="width: 100%"
    @selection-change="handleSelectionChange">

    <el-table-column type="selection" prop="All" label="全选" ></el-table-column>
    <el-table-column  prop="R_code" label="机构编号" width=50 ></el-table-column>
    <el-table-column  prop="R_name" label="机构名称" width=400></el-table-column>
    <el-table-column  prop="R_charger" label="负责人" ></el-table-column>
    <el-table-column  prop="R_levelId" label="机构级别" ></el-table-column>
    <el-table-column  prop="R_Unitstaff" label="机构人员" ></el-table-column>
    <el-table-column  prop="R_Project" label="科研项目" ></el-table-column>
    <el-table-column  prop="R_Researchresult" label="科研成果"></el-table-column>
    <el-table-column  prop="R_Researchaward" label="科研获奖"></el-table-column>
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
import API from '../api/api_test';
import FileSaver from "file-saver";
import XLSX from "xlsx";
  export default {
    data() {
      return {
        Unitlist:[],
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
      API.getUnitinfo().then((result)=>{
          console.log(result);
          this.Unitlist=result;
				})
    },
  }
</script>