<template>
<el-card class="box-card">
	<div slot="header" class="clearfix">
  <span style="margin-bottom: 10px">项目列表</span>
    </div>
  <el-row>
  <el-col :span=12 >
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage3"
      :page-size="100"  
      layout="prev, pager, next, jumper"
      :total="1000">
    </el-pagination>
    </el-col>
  <el-col :span=12  :push=7 >
     <router-link tag='a' :to="'../Hprojectadd'" >
    <el-button size="small">新增</el-button>
    </router-link>
    <el-button size="small">删除</el-button>
    <el-button size="small" @click="getData">查看</el-button>
    <el-button size="small" >导出</el-button>
  </el-col>
</el-row>


    <div class="TestWorld">
        <el-table
          :data="modifyData2"
          style="width: 100%">
             <el-table-column type="selection" width="50px" align="center"></el-table-column>
        <el-table-column label="序号"  type="index" width="60" align="center"></el-table-column>

          <el-table-column prop="H_contractname"  label="合同名称">
            <template slot-scope="scope">
  	          	<template v-if="scope.row.editing">
  	            	<el-input class="edit-input" v-model="scope.row.H_contractname"  placeholder="合同名称"></el-input>
  	          	</template>
  	         	<span v-else> <el-button type = 'text' href="http://localhost:8080/#/Projectadd" @click='handclik(scope.row.H_contractname)' > {{scope.row.H_contractname}} </el-button></span>
  	        </template>
          </el-table-column>


          <el-table-column prop="H_contractchargerName"  label="负责人">
             <template slot-scope="scope">
               <template v-if="scope.row.editing">
                 <el-input class="edit-input" v-model="scope.row.H_contractchargerName" placeholder="负责人"></el-input>
               </template>
               	<span v-else >{{scope.row.H_contractchargerName}}  </span>
             </template>
          </el-table-column>
        

          <el-table-column prop="H_contractauthorizeDate"   label="签订日期">
             <template slot-scope="scope">
               <template v-if="scope.row.editing">
                      <el-date-picker
                  v-model="scope.row.H_contractauthorizeDate" 
                   type="date"
                   value-format="yyyy-MM-dd"
                   placeholder="签订日期">
                 </el-date-picker>
               </template>
               <span v-else>{{scope.row.H_contractauthorizeDate}}</span>
             </template>
          </el-table-column>
 
      <el-table-column prop="H_contractfeeAuthorize"  label="合同金额">
             <template slot-scope="scope">
               <template v-if="scope.row.editing">
                 <el-input class="edit-input" v-model="scope.row.H_contractfeeAuthorize" placeholder="合同金额"></el-input>
               </template>
               	<span v-else >{{scope.row.H_contractfeeAuthorize}}  </span>
             </template>
          </el-table-column>
        
              <el-table-column prop="H_contractunitId"  label="承接单位">
             <template slot-scope="scope">
               <template v-if="scope.row.editing">
                 <el-input class="edit-input" v-model="scope.row.H_contractunitId" placeholder="承接单位"></el-input>
               </template>
               	<span v-else >{{scope.row.H_contractunitId}}  </span>
             </template>
          </el-table-column>
        
            <el-table-column     prop="H_idea"   label="审核意见">
             <template slot-scope="scope">
               <template v-if="scope.row.editing">
                 <el-input class="edit-input" v-model="scope.row.H_idea" placeholder="审核意见"></el-input>
               </template>
               	<span v-else>{{ scope.row.H_idea}}</span>
             </template>
          </el-table-column>
          

          
            <el-table-column   prop="H_checkstatus"   label="审核状态">
             <template slot-scope="scope">
               <template v-if="scope.row.editing">
                 <el-input class="edit-input" v-model="scope.row.H_checkstatus" placeholder="审核状态"></el-input>
               </template>
               	<span v-else>{{ scope.row.H_checkstatus}}</span>
             </template>
          </el-table-column>


               
          <el-table-column prop="editing" label="操作">
             <template slot-scope="scope">
               <el-button
                 type="primary" 
                 icon="el-icon-edit"
                
                  v-if="!scope.row.editing"
                  v-model="scope.$index"
                  @click="handleEdit(scope.$index, scope.row)">编辑
               </el-button>
               <el-button
                  v-else
                  type="primary"
                 icon="el-icon-check" 
                  v-model="scope.$index"
                  @click="handleCancle(scope.$index, scope.row)">取消
               </el-button>
             </template>
          </el-table-column>
        </el-table>
    </div>
      <el-pagination
  background
  layout="prev, pager, next"
  :total="100">
</el-pagination>
</el-card>
</template>
<script>
import API from '../api/hproject'
import {mapActions, mapGetters, mapMutations}from 'vuex'   //...mapactions 和 ...mapgetters都是vuex提供的语法糖，在底层已经封装好了
export default {
    data() {
        return {
             modifyData2:[],
             prevValue:{},
             All:'',
             currentPage3: 10,  //总页数
        }
    },
...mapActions([
//该 increment 来自 store.js 中导出的 actions 和 mutations 中的 increment 
'zprojectname',
'H_contractname'
]),
    mounted(){
        this.getData()
        
    },
    methods:{
      handclik(H_contractname){
        console.log(H_contractname);
        this.$store.dispatch('H_contractname',H_contractname);
        console.log(this.$store.state.H_contractname);
        this.$router.push({ path:'/Hprojectshow'  }); 
      },
        getData(){
          let that = this;
          console.log("开始运行1")
        
           let Params ="DD"
           API.find(Params).then(function (result){
            if(result){
              let i;		
             for(i=0;i<result.length;i++){
              // let result[i] = result[i];
              console.log(result[i]);
              that.$set(result[i], 'editing', false)
            //  console.log(result[i].Z_projectCode);
             }
               that.modifyData2 =result;
            }else {
                that.$message.error({showClose: true, message: result.errmsg || '项目添加失败', duration: 2000});
              }
            }, function (err) {
              that.$message.error({showClose: true, message: err.toString(), duration: 2000});
            }).catch(function (error) {
              console.log(error);
              that.$message.error({showClose: true, message: '请求出现异常', duration: 2000});
            });
        },
         
        handleEdit(index,row){
          row.editing = true;
          console.log(index)
        //  this.prevValue = JSON.parse(JSON.stringify(row));
        },
        handleCancle(index,row){
          row.editing = false;
        //  let prevContent = this.prevValue.bookname;
         // this.$set(row,"bookname",prevContent);
        },
    
         handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },
    }
 
}  
</script>

 <style>
  .text {
    font-size: 30px;
  }

  .item {
    padding: 18px 0;
  }

  .box-card {
    width: 1600px;
  }
  
</style>





