<template>

  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>通知公告</span> 
    </div>

  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>我的事务</span>  
	  </div>
    <span>	纵向项目 1 项待修改 </span>  <br><br>
    <span>	纵向项目 4 项即将到期，请按时结题</span>  <br><br>
  </el-card>
  <br>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>我的科研</span>  
	  </div>
    <span>纵向项目 10 项</span><br><br>
    <span>可申报项目信息 1 项</span><br><br>
    <span>待结项项目 4 项</span><br><br>
    </el-card>
  </el-card>
</template>

<script>
  export default {
    data() {  
      return {	
      HorizontalSubjects:'',
      VerticalSubjects:'',
      }
    },
    methods: {
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


