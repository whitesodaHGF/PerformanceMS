<template>
<el-card class="box-card">
  <div slot="header" class="clearfix">
    <span>论文一览</span>
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
    <router-link to="/paper"><el-button size="small">新增</el-button></router-link>
    <router-link to="/PaperSearch"><el-button size="small">查看</el-button></router-link>
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
    <el-table-column  prop="UnitName" label="所属单位" width=120 ></el-table-column>
    <el-table-column  prop="PaperName" label="论文题目" width=400></el-table-column>
    <el-table-column  prop="Firstauthor" label="第一作者" ></el-table-column>
    <el-table-column  prop="PublishUnit" label="发表刊物" ></el-table-column>
    <el-table-column  prop="PaperTypes" label="刊物类型" ></el-table-column>
    <el-table-column  prop="PublishDate" label="发表/出版时间" ></el-table-column>
    <el-table-column  prop="SubjectTypes" label="学科门类"></el-table-column>
    <el-table-column  prop="Authors" label="所有作者"></el-table-column>
    <el-table-column  prop="PaperModeTypes" label="论文类型"></el-table-column>
    <el-table-column  prop="Firstauthorcode" label="第一作者职工号"></el-table-column>
    <el-table-column  prop="SchoolSign" label="学校署名"></el-table-column>
    <el-table-column  prop="Auditopinion" label="审核意见"></el-table-column>
    <el-table-column  prop="Auditstatus" label="审核状态"></el-table-column>
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
             UnitName:'马克思主义学院',PaperName:'当代青年社会主义核心价值观认同之测度与评价',Firstauthor:'XXX',PublishUnit:'高教发展与评估',PaperTypes:'C类重要期刊,核心期刊,CSSCI扩展版',PublishDate:'2018-05-10',SubjectTypes:'社科类',
             Authors:'XXX',PaperModeTypes:'期刊论文',Firstauthorcode:'*******',SchoolSign:'第一单位',Auditopinion:'',Auditstatus:'待审核',
          },
          { 
             UnitName:'马克思主义学院',PaperName:'学生网络交往“圈层化”的困境及对策',Firstauthor:'XXX',PublishUnit:'江苏高教',PaperTypes:'B类重要期刊,核心期刊,CSSCI来源刊',PublishDate:'2017-03-01',SubjectTypes:'社科类',
             Authors:'XXX',PaperModeTypes:'期刊论文',Firstauthorcode:'*******',SchoolSign:'第一单位',Auditopinion:'',Auditstatus:'待审核',
          },
          { 
             UnitName:'马克思主义学院',PaperName:'马克思尊严观的逻辑进路',Firstauthor:'XXX',PublishUnit:'求索',PaperTypes:'B类重要期刊,核心期刊,CSSCI来源刊',PublishDate:'2017-02-28',SubjectTypes:'社科类',
             Authors:'XXX',PaperModeTypes:'期刊论文',Firstauthorcode:'*******',SchoolSign:'第一单位',Auditopinion:'',Auditstatus:'待审核',
          },
          { 
             UnitName:'学校办公室',PaperName:'论高校微信公众平台的思想政治教育功能',Firstauthor:'XXX',PublishUnit:'思想理论教育导刊',PaperTypes:'B类重要期刊,核心期刊,CSSCI来源刊',PublishDate:'2016-11-01',SubjectTypes:'社科类',
             Authors:'XXX',PaperModeTypes:'期刊论文',Firstauthorcode:'*******',SchoolSign:'第一单位',Auditopinion:'',Auditstatus:'待审核',
          },
          { 
             UnitName:'学校办公室',PaperName:'大学生社会主义核心价值观的认同与评价',Firstauthor:'XXX',PublishUnit:'高教发展与评估',PaperTypes:'C类重要期刊,核心期刊,CSSCI扩展版',PublishDate:'2016-09-25',SubjectTypes:'社科类',
             Authors:'XXX',PaperModeTypes:'期刊论文',Firstauthorcode:'*******',SchoolSign:'第一单位',Auditopinion:'',Auditstatus:'待审核',
          },
          { 
             UnitName:'学校办公室',PaperName:'我国发达地区对大学生就业吸引力的测度及其启示——基于珠三角和长三角25个城市数据的比较',Firstauthor:'XXX',PublishUnit:'江西社会科学',PaperTypes:'B类重要期刊,核心期刊,CSSCI来源刊',PublishDate:'2016-09-15',SubjectTypes:'社科类',
             Authors:'XXX',PaperModeTypes:'期刊论文',Firstauthorcode:'*******',SchoolSign:'第一单位',Auditopinion:'',Auditstatus:'待审核',
          },
          { 
             UnitName:'学校办公室',PaperName:'中国梦的话语建构',Firstauthor:'XXX',PublishUnit:'求索',PaperTypes:'B类重要期刊,核心期刊,CSSCI来源刊',PublishDate:'2016-02-28',SubjectTypes:'社科类',
             Authors:'XXX',PaperModeTypes:'期刊论文',Firstauthorcode:'*******',SchoolSign:'第一单位',Auditopinion:'',Auditstatus:'待审核',
          },
          { 
             UnitName:'学校办公室',PaperName:'珠三角大学生就业满意度实证分析——基于2009—2013年东莞理工学院毕业生就业数据的研究',Firstauthor:'XXX',PublishUnit:'安阳师范学院学报',PaperTypes:'一般期刊',PublishDate:'2016-02-15',SubjectTypes:'社科类',
             Authors:'XXX',PaperModeTypes:'期刊论文',Firstauthorcode:'*******',SchoolSign:'第一单位',Auditopinion:'',Auditstatus:'待审核',
          },
          { 
             UnitName:'学校办公室',PaperName:'珠三角区域大学生就业吸引力的实证',Firstauthor:'XXX',PublishUnit:'中国高教研究',PaperTypes:'B类重要期刊,核心期刊,CSSCI来源刊',PublishDate:'2015-12-18',SubjectTypes:'社科类',
             Authors:'XXX',PaperModeTypes:'期刊论文',Firstauthorcode:'*******',SchoolSign:'第一单位',Auditopinion:'',Auditstatus:'待审核',
          },
          { 
             UnitName:'学校办公室',PaperName:'儒学道德文化与培育社会主义核心价值观',Firstauthor:'XXX',PublishUnit:'长春理工大学学报',PaperTypes:'一般期刊',PublishDate:'2015-08-12',SubjectTypes:'社科类',
             Authors:'XXX',PaperModeTypes:'期刊论文',Firstauthorcode:'*******',SchoolSign:'第一单位',Auditopinion:'',Auditstatus:'待审核',
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

