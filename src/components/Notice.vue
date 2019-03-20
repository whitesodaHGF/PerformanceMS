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
    <el-button @click="getinfo">默认按钮</el-button>
    </el-card>
  </el-card>
</template>
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
<script> 
//import util from '../../common/util';
import API from '../api/api_test';
  export default {
    data() {  
      return {	
      HorizontalSubjects:'',
      VerticalSubjects:'',
      }
    },
    methods: {
      getinfo() {
        // this.axios.post("http://api.komavideo.com/news/list").then(function(result){
        //   console.log(result);
        // })
        API.test(1).then(function(result){
          console.log(result);
        })
      },
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


