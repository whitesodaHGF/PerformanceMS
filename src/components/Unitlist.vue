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
      :current-page.sync="tableData3.currentPage3"
      :page-size="100"
      layout="prev, pager, next, jumper"
      :total="1000">
    </el-pagination>
    </el-col>
  <el-col :span="12" push=7 >
    <router-link to="/ResearchUnit" ><el-button size="small">新增</el-button></router-link>
    <router-link to="/UnitSearch" ><el-button size="small">查询</el-button></router-link>
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
    <el-table-column  prop="Unitcode" label="机构编号" width=50 ></el-table-column>
    <el-table-column  prop="UnitcodeName" label="机构名称" width=400></el-table-column>
    <el-table-column  prop="chargerName" label="负责人" ></el-table-column>
    <el-table-column  prop="UnitLevel" label="机构级别" ></el-table-column>
    <el-table-column  prop="Unitstaff" label="机构人员" ></el-table-column>
    <el-table-column  prop="Project" label="科研项目" ></el-table-column>
    <el-table-column  prop="Researchresult" label="科研成果"></el-table-column>
    <el-table-column  prop="Researchaward" label="科研获奖"></el-table-column>
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
            All:'', Unitcode:'1', UnitcodeName:'广东省制造过程智能控制与优化工程技术研究中心', chargerName:'XXX', UnitLevel:'省部级', 
            Unitstaff:'0', Project:'0', Researchresult:'0', Researchaward:'0', operte:'信息'
          },
          { 
            All:'', Unitcode:'2', UnitcodeName:'智能无线通信重点实验室', chargerName:'XXX', UnitLevel:'	地厅级', 
            Unitstaff:'0', Project:'0', Researchresult:'0', Researchaward:'0', operte:'删除'
          },
          { 
            All:'', Unitcode:'3', UnitcodeName:'校企共建新能源及智能配电网实验室', chargerName:'XXX', UnitLevel:'学校级', 
            Unitstaff:'0', Project:'0', Researchresult:'0', Researchaward:'0', operte:'删除'
          },
          { 
            All:'', Unitcode:'4', UnitcodeName:'广东省太赫兹检测与通信工程技术研究中心', chargerName:'XXX', UnitLevel:'省部级', 
            Unitstaff:'0', Project:'0', Researchresult:'0', Researchaward:'0', operte:'删除'
          },
          { 
            All:'', Unitcode:'5', UnitcodeName:'新能源与智能配用电实验室', chargerName:'XXX', UnitLevel:'地厅级', 
            Unitstaff:'0', Project:'0', Researchresult:'0', Researchaward:'0', operte:'删除'
          },
          { 
            All:'', Unitcode:'6', UnitcodeName:'广东省嵌入式智能工业检测工程技术研究中心', chargerName:'XXX', UnitLevel:'地厅级', 
            Unitstaff:'0', Project:'0', Researchresult:'0', Researchaward:'0', operte:'删除'
          },
          { 
            All:'', Unitcode:'7', UnitcodeName:'广东省智能制造系统健康监测维护工程技术研究中心', chargerName:'XXX', UnitLevel:'省部级', 
            Unitstaff:'0', Project:'0', Researchresult:'0', Researchaward:'0', operte:'删除'
          },
          { 
            All:'', Unitcode:'8', UnitcodeName:'广东省高性能轻合金及其成型工程技术研究中心', chargerName:'XXX', UnitLevel:'省部级', 
            Unitstaff:'0', Project:'0', Researchresult:'0', Researchaward:'0', operte:'删除'
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