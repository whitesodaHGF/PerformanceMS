<template>
<el-card class="box-card">
  	<div slot="header" class="clearfix">
  <span style="margin-bottom: 10px">项目变更申请</span>
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
  <el-col :span=12  :push=10 >
    <el-button size="small">查讯</el-button>
    
  </el-col>
</el-row>
  
   <el-table
          :data="zprojectchange"
          style="width: 100%">
             <el-table-column type="selection" width="45" align="center"></el-table-column>
        <el-table-column label="序号"  type="index" width="60" align="center"></el-table-column>

         <el-table-column prop="Z_projectCode"  label="项目编号">
            <template slot-scope="scope">
  	          	<template v-if="scope.row.editing">
  	            	<el-input class="edit-input" v-model="scope.row.Z_projectCode"  placeholder="项目编号"></el-input>
  	          	</template>
  	           <span v-else> {{ scope.row.Z_projectCode }}</span>
  	        </template>
          </el-table-column>

        <el-table-column prop="Z_projectName"  label="项目名称">
             <template slot-scope="scope">
               <template v-if="scope.row.editing">
              <el-input class="edit-input" v-model="scope.row.Z_projectName" placeholder="项目名称"  @click="check(scope.row.Z_projectName)"></el-input>
               </template>
               	<span v-else >  <el-button type = 'text' href="http://localhost:8080/#/Projectadd" @click='handclik(scope.row.Z_projectName)' > {{scope.row.Z_projectName}} </el-button>  </span>
             </template>
          </el-table-column>

            <el-table-column prop="Z_projectUnitId"  label="所属单位">
             <template slot-scope="scope">
               <template v-if="scope.row.editing">
                 <el-input class="edit-input" v-model="scope.row.Z_projectUnitId" placeholder="所属单位"></el-input>
               </template>
               	<span v-else>{{ scope.row.Z_projectUnitId}}</span>
             </template>
          </el-table-column>


          <el-table-column     prop="Z_chargerName"    label="负责人">
             <template slot-scope="scope">
               <template v-if="scope.row.editing">
                 <el-input class="edit-input" v-model="scope.row.Z_chargerName" placeholder="负责人"></el-input>
               </template>
               	<span v-else>{{ scope.row.Z_chargerName}}</span>
             </template>
          </el-table-column>
     
           <el-table-column prop="Z_startDate"   label="立项日期">
             <template slot-scope="scope">
               <template v-if="scope.row.editing">
                      <el-date-picker
                  v-model="scope.row.Z_startDate" 
                   type="date"
                   value-format="yyyy-MM-dd"
                   placeholder="立项日期">
                 </el-date-picker>
               </template>
               <span v-else>{{scope.row.Z_startDate}}</span>
             </template>
          </el-table-column>

          <el-table-column     prop="Z_projectfeeAuthorize"   label="合同经费">
             <template slot-scope="scope">
               <template v-if="scope.row.editing">
                 <el-input class="edit-input" v-model="scope.row.Z_projectfeeAuthorize" placeholder="合同经费"></el-input>
               </template>
               	<span v-else>{{ scope.row.Z_projectfeeAuthorize}}</span>
             </template>
          </el-table-column>

        <el-table-column prop="editing" label="操作">
             <template slot-scope="scope">
               <el-button
                  type="danger"
                  v-if="!scope.row.editing"
                  icon="el-icon-edit"
                  v-model="scope.$index"
                  @click="handleEdit(scope.$index, scope.row)">编辑
               </el-button>
               <el-button
                  v-else
                  type="danger"
                  icon="el-icon-delete"
                  v-model="scope.$index"
                  @click="handleCancle(scope.$index, scope.row)">取消
               </el-button>
             </template>
          </el-table-column>
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
    width: 1450px;
  }
</style>
<script>
import API from '../api/zproject'
import {mapActions, mapGetters, mapMutations}from 'vuex'   //...mapactions 和 ...mapgetters都是vuex提供的语法糖，在底层已经封装好了
  export default {
    data() {
      return {
      zprojectchange:[],
      currentPage3:10,
      }
    },
    mounted(){
        this.getData()
    },
    ...mapActions([
    //该 increment 来自 store.js 中导出的 actions 和 mutations 中的 increment 
    'zprojectname',
    'H_contractname'
    ]),
      methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },
       handclik(H_contractname){
        console.log(H_contractname);
        this.$store.dispatch('H_contractname',H_contractname);
        console.log(this.$store.state.H_contractname);
        this.$router.push({ path:'/Hprojectshow'}); 
      },
      getData(){
          let that = this;
          console.log("开始运行1")
           let Params ="DD"
           API.change(Params).then(function (result){
            if(result){
              let i;		
             for(i=0;i<result.length;i++){
              // let result[i] = result[i];
              console.log(result[i]);
              that.$set(result[i], 'editing', false)
            //  console.log(result[i].Z_projectCode);
             }
               that. zprojectchange =result;
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
    
    }
  }
</script>