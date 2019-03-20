<template>

  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>文件下载</span> 
    </div>

    
  </el-card>
</template>

<script>
  export default {
    data() {  
      return {	
      HorizontalSubjects:'',
      VerticalSubjects:'',
      currentPage3:1,

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


<style>
body{
  margin:0 0 0 0;
  font-size: 15px;
}
tr{
	height:70px;
}
.el-input{
	width:250px;
}
</style>


