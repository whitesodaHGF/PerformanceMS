
 <template>
  <el-card class="box-cards">
       <div slot="header" class="clearfix">
       <span >课程详情</span>
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
    <el-button size="small" @click="addRow(infiledList)">新增</el-button>
    <el-button size="small" @click="deleteRow()">删除</el-button>
    <el-button size="small" @click="getData">查看</el-button>
    <el-button size="small" >导出</el-button>
  </el-col>
</el-row>

 <el-table border 
    :data="infiledList" 
    style="width: 100%"
    ref="table"
    tooltip-effect="dark"
    @selection-change="handleSelectionChange" > 
 <el-table-column type="selection" width="50px" align="center"></el-table-column>
 <el-table-column label="序号"  type="index" width="60" align="center"></el-table-column>
     <el-table-column prop="course_name" label="课程名称" style="width:6px;" > 
       <template slot-scope="scope"> 
           <template v-if="scope.row.editing">
                <el-input size="mini" v-model="scope.row.course_name" > </el-input> 
               </template>
               	<span v-else >{{scope.row.course_name}}  </span>
          </template>
    </el-table-column> 

     <el-table-column prop="course_num" label="课程编号" style="width:6px;" > 
       <template slot-scope="scope"> 
           <template v-if="scope.row.editing">
                <el-input size="mini" v-model="scope.row.course_num" > </el-input> 
           </template>
               	<span v-else >{{scope.row.course_num}}  </span>
         
      </template>
    </el-table-column> 

         <el-table-column prop="course_teacher_name" label="任课老师"> 
       <template slot-scope="scope"> 
          <template v-if="scope.row.editing">
               <el-input size="mini" v-model="scope.row.course_teacher_name" ></el-input> 
           </template>
               	<span v-else >{{scope.row.course_teacher_name}}  </span>
       
      </template>
        </el-table-column> 

      <el-table-column prop="course_teacher_unit" label="教师单位"> 
       <template slot-scope="scope"> 
         <template v-if="scope.row.editing">
             <el-input size="mini" v-model="scope.row.course_teacher_unit" ></el-input> 
           </template>
              <span v-else >{{scope.row.course_teacher_unit}}  </span>
      </template>
      </el-table-column> 

     <el-table-column prop="course_teacher_id" label="职工编号"> 
         <template slot-scope="scope"> 
           <template v-if="scope.row.editing">
             <el-input size="mini" v-model="scope.row.course_teacher_id" ></el-input> 
           </template>
              <span v-else >{{scope.row.course_teacher_id}}  </span>
      </template>
      </el-table-column> 


       <el-table-column prop="course_class" label="授课班级"> 
       <template slot-scope="scope"> 
          <template v-if="scope.row.editing">
           <el-input size="mini" v-model="scope.row.course_class" ></el-input> 
           </template>
              <span v-else >{{scope.row.course_class}}  </span>
      </template>
        </el-table-column> 
  
         <el-table-column prop="course_time" label="上课时间"> 
       <template slot-scope="scope"> 
          <template v-if="scope.row.editing">
          <el-input size="mini" v-model="scope.row.course_time" > </el-input> 
           </template>
              <span v-else >{{scope.row.course_time}}  </span>
        </template>
        </el-table-column> 

         <el-table-column prop="course_position" label="上课地点"> 
       <template slot-scope="scope"> 
           <template v-if="scope.row.editing">
           <el-input size="mini" v-model="scope.row.course_position" > </el-input> 
           </template>
              <span v-else >{{scope.row.course_position}}  </span>
        </template>
        </el-table-column> 

         <el-table-column prop="course_counttime" label="课程学时"> 
       <template slot-scope="scope"> 
           <template v-if="scope.row.editing">
             <el-input size="mini" v-model="scope.row.course_counttime" ></el-input> 
           </template>
              <span v-else >{{scope.row.course_counttime}}  </span>
      </template>
        </el-table-column> 

        <el-table-column prop="course_remark" label="备注"> 
        <template slot-scope="scope"> 
            <template v-if="scope.row.editing">
             <el-input size="mini" v-model="scope.row.course_remark" ></el-input> 
           </template>
              <span v-else >{{scope.row.course_remark}}  </span>
          </template>
            </el-table-column>

              <el-table-column prop="editing" label="操作">
             <template slot-scope="scope">
               <el-button
                 type="text" 
                 icon="el-icon-edit"
                
                  v-if="!scope.row.editing"
                  v-model="scope.$index"
                  @click="handleEdit(scope.$index, scope.row)">编辑
               </el-button>
               <el-button
                  v-else
                  type="text"
                 icon="el-icon-check" 
                  v-model="scope.$index"
                  @click="handleSave(scope.$index, scope.row)">完成
               </el-button>
             </template>
          </el-table-column>

         </el-table> 
 
  </el-card>
 </template>

<script>
import API from '../api/mycourse'
export default {
    data () {
    return {
    infiledList:[],
    savastatus:[],
    editstatus:[],
    All:'', 
    currentPage3: 10,  //总页数
}
},
    mounted(){
        this.getData()
    },
    methods:{
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
               that.infiledList =result;
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
          deleteRow() {
              let that =this;
           for (let i = 0; i < that.savastatus.length; i++) {
          let val = that.savastatus
          // 获取选中行的索引的方法
          // 遍历表格中tableData数据和选中的val数据，比较它们的rowNum,相等则输出选中行的索引
          // rowNum的作用主要是为了让每一行有一个唯一的数据，方便比较，可以根据个人的开发需求从后台传入特定的数据
          val.forEach((val, index) => {
            that.infiledList.forEach((v, i) => {
              if (val.rowNum === v.rowNum) {
                // i 为选中的索引
             let Params ={"course_name":val.course_name};
            API.delete(Params).then(function (result){
             if(result){
               console.log(result);
            }else {
                that.$message.error({showClose: true, message: result.errmsg || '项目添加失败', duration: 2000});
              }
            }, function (err) {
              that.$message.error({showClose: true, message: err.toString(), duration: 2000});
            }).catch(function (error) {
              console.log(error);
              that.$message.error({showClose: true, message: '请求出现异常', duration: 2000});
            });
             that.infiledList.splice(i, 1)
                
              }
            })
          })
        }
        // 删除完数据之后清除勾选框
        this.$refs.table.clearSelection()
        
        },
          addRow(tableData,event){ 
            tableData.push({ 
            course_teacher_unit:'',
            course_name:'',//         varchar(50) NOT NULL,#课程名字
            course_class:'',//          varchar(50) NOT NULL,#授课班级
            course_counttime:'',//        varchar(50) NOT NULL,#课程学时
            course_teacher_name:'',//    varchar(50) NOT NULL,#任课老师
           
            course_num:'',
            course_time:'',//            varchar(50) NOT NULL,#上课时间
            course_position:'',//       varchar(50) NOT NULL,#上课地点
            course_teacher_id:'',//      varchar(50)  NOT NULL,#职工编号
            course_remark:''     //备注
            }) 
            },

            handleEdit(index,row){
              row.editing = true;
             
            this.editstatus = index;
             console.log(this.editstatus);
            let now= JSON.parse(JSON.stringify(row));
            console.log(now);
            },
          handleSave(index,row){
            row.editing = false;
            let that = this;
            console.log(row);
          if(this.editstatus!=row){
             let Params1= {"course_num":row.course_num};
             API.delete(Params1).then(function (result){
             if(result){
               console.log(result);
            }else {
                that.$message.error({showClose: true, message: result.errmsg || '项目删除失败', duration: 2000});
              }
            }, function (err) {
              that.$message.error({showClose: true, message: err.toString(), duration: 2000});
            }).catch(function (error) {
              console.log(error);
              that.$message.error({showClose: true, message: '请求出现异常', duration: 2000});
            });

            let Params= JSON.parse(JSON.stringify(row));
             API.add(Params).then(function (result){
             if(result){
               console.log(result);
            }else {
                that.$message.error({showClose: true, message: result.errmsg || '项目添加失败', duration: 2000});
              }
            }, function (err) {
              that.$message.error({showClose: true, message: err.toString(), duration: 2000});
            }).catch(function (error) {
              console.log(error);
              that.$message.error({showClose: true, message: '请求出现异常', duration: 2000});
            });
              this.editstatus={};
            }
            },
        
            handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
          },
          handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
          },
                handleSelectionChange(val) {
                  this.savastatus = val;
                  console.log(this.savastatus);
          }
        }
}
</script>
<style>
.box-cards{
  width: 145  0px;
}
</style>
