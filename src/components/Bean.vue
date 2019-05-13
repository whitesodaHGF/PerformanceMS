<template>
	<el-card class="box-card">
		<!-- header -->
		<div slot="header" class="clearfix">
			<span >科研团队新增</span>
			<el-button size="large"  style="float:right;" @click="getexcel">导出</el-button>
			<el-button size="large"  style="float:right;" @click="getBeaninfo">获取</el-button>
			<router-link to="/Notice"><el-button size="large"  style="float:right;">返回</el-button></router-link>
			<el-button size="large"  style="float:right;" @click="reload" >重置</el-button>
			<el-button size="large"  style="float:right;" @click="saveBeaninfo">保存</el-button>
		</div>
		<!-- mainbg -->
		<div class="mainbg">
			<el-form ref="Beanform" :model="Beanform[0]" name="Beanform" method="post" action="/business/team/team.do" enctype="multipart/form-data"  size="mini">
				<el-row>
					<el-col :span=12 :push=4 >
						<el-form-item label="团队名称：">
							<el-input type='text' v-model="Beanform[0].B_name" name='bean.name' id='name' size='50' maxLength = '100' ></el-input>
							<font color=red> *</font>
						</el-form-item>
					</el-col>
				</el-row>
				<el-row>
					<el-col :span=12 :push=4 >
						<el-form-item label="带头人：">
							<el-input type='text' v-model="Beanform[0].B_charger" name='bean.chargerName'  id='chargerName' size='50'  maxLength = '40' ></el-input>
							<font color=red> *</font>
						</el-form-item>
					</el-col>
				</el-row>
				<el-row>
					<el-col :span=12 :push=4 >
						<el-form-item label="所属单位：">
							<el-select v-model="Beanform[0].B_unitId"  name='bean.unitId' size='50' placeholder="请选择">
                <el-option
                v-for="item in B_unitIds"
                :key="item.value"
                :label="item.label"
                :value="item.value">
                </el-option>
		   				</el-select>
              <font color=red> *</font>
						</el-form-item>
					</el-col>
					<el-col :span=12>
						<el-form-item label="带头人性别：">
							<el-radio v-model="Beanform[0].B_chargerGender" name='bean.chargerGender' size='50' label="男" value='男'  >男</el-radio>
							<el-radio v-model="Beanform[0].B_chargerGender" name='bean.chargerGender' size='50' label="女" value='女'  >女</el-radio>
						</el-form-item>
					</el-col>
				</el-row>
				<el-row>
					<el-col :span=12 :push=4 >
						<el-form-item label="出生日期：">
							<el-date-picker 
								value-format="yyyy-MM-dd"
								@change="getTime" 
								v-model="Beanform[0].B_chargerBrithday" 
								name='bean.chargerBrithday' size='50' 
								id='chargerBrithday'
								maxLength = '10'  
								class="Wdate" >
							</el-date-picker>
						</el-form-item>
					</el-col>
					<el-col :span=12>
						<el-form-item label="职称：">
							<el-select v-model="Beanform[0].B_chargerTitleId"  name='bean.chargerTitleId' size='50' placeholder="请选择">
								<el-option
								v-for="item in B_chargerTitleIds"
								:key="item.value"	
								:label="item.label"
								:value="item.value">
								</el-option>
							</el-select>
						</el-form-item>
					</el-col>
				</el-row>
				<el-row>
					<el-col :span=12 :push=4 >
						<el-form-item label="办公电话：">
							<el-input v-model="Beanform[0].B_telOffice" type='text' name='bean.officeTel' size='50' id='officeTel'  maxLength = '20' ></el-input>
						</el-form-item>
					</el-col>
				</el-row>
				<el-row>
					<el-col :span=12 :push=4 >
						<el-form-item label="办公地点：">
							<el-input v-model="Beanform[0].B_officeAddress" type='text' name='bean.officeAddress' size='50' id='officeAddress' maxLength = '100' ></el-input>
						</el-form-item>
					</el-col>
				</el-row>
				<el-row>
					<el-col :span=12 :push=4 >
						<el-form-item label="研究方向：">
							<el-input type="textarea" v-model="Beanform[0].B_researchField" name='bean.researchField' size='50' cols=100  rows=2 ></el-input>
						</el-form-item>
					</el-col>
				</el-row>
				<el-row>
					<el-col :span=12 :push=4 >
						<el-form-item label="建设规划：">
							<el-input type="textarea" v-model="Beanform[0].B_constructionPlan" name='bean.constructionPlan' size='50' cols=100   rows=2 ></el-input>
						</el-form-item>
					</el-col>
				</el-row>
			</el-form>
		</div>
		<!-- table -->
		<el-table class="table" :data="Beanform" border style="width: 100%" hidden>
			<el-table-column prop="B_name" label="团队名称"></el-table-column>
			<el-table-column prop="B_charger" label="带头人"></el-table-column>
			<el-table-column prop="B_unitId" label="所属单位"></el-table-column>
			<el-table-column prop="B_chargerGender" label="带头人性别"></el-table-column>
			<el-table-column prop="B_chargerBrithday" label="出生日期"></el-table-column>
			<el-table-column prop="B_chargerTitleId" label="职称"></el-table-column>
			<el-table-column prop="B_telOffice" label="办公电话"></el-table-column>
			<el-table-column prop="B_officeAddress" label="办公地点"></el-table-column>
			<el-table-column prop="B_researchField" label="研究方向"></el-table-column>
			<el-table-column prop="B_constructionPlan" label="建设规划"></el-table-column>		
		</el-table>
	</el-card>
</template>

<style>
body{
  margin:0 0 0 0;
  font-size: 15px;
}
.el-input{
	width:200px;
}
</style>

<script>
import API from '../api/api_test';
import FileSaver from "file-saver";
import XLSX from "xlsx";
  export default {
    data() {  
      return {
		activeIndex:'1',
		activeIndex2:'1',
		Beanform:[{
			B_name:'',
			B_charger:'',
			B_unitId:'',
			B_chargerGender:'',
			B_chargerBrithday:'',
			B_chargerTitleId:'',
			B_telOffice:'',
			B_officeAddress:'',
			B_researchField:'',
			B_constructionPlan:'',
					}],
		B_unitIds:[
			{ value:'',label:'--请选择--'
			},{ value:'教育学院(师范学院)',label:'教育学院(师范学院)'
			},{ value:'经济与管理学院',label:'经济与管理学院'
			},{ value:'生态环境与建筑工程学院',label:'生态环境与建筑工程学院'
			},{ value:'文学与传媒学院',label:'文学与传媒学院'
			},{ value:'城市学院',label:'城市学院'
			},{ value:'电子工程与智能化学院',label:'电子工程与智能化学院'
			},{ value:'法律与社会工作学院（知识产权学院）',label:'法律与社会工作学院（知识产权学院）'
			},{ value:'工程技术研究院',label:'工程技术研究院'
			},{ value:'化学工程与能源技术学院',label:'化学工程与能源技术学院'
			},{ value:'机械工程学院',label:'机械工程学院'
			},{ value:'计算机与网络安全学院',label:'计算机与网络安全学院'
			},{ value:'继续教育学院',label:'继续教育学院'
			},{ value:'科技产业公司',label:'科技产业公司'
			},{ value:'科技创新研究院',label:'科技创新研究院'
			},{ value:'离职人员',label:'离职人员'
			},{ value:'马克思主义学院',label:'马克思主义学院'
			},{ value:'清洁生产科技中心',label:'清洁生产科技中心'
			},{ value:'社会发展研究院',label:'社会发展研究院'
			},{ value:'体育中心（挂靠体育系）',label:'体育中心（挂靠体育系）'
			},{ value:'图书馆',label:'图书馆'
			},{ value:'退休部门',label:'退休部门'
			},{ value:'莞城校区管委会',label:'莞城校区管委会'
			},{ value:'网络空间安全学院',label:'网络空间安全学院'
			},{ value:'网络与教育技术中心',label:'网络与教育技术中心'
			},{ value:'学报',label:'学报'
			},{ value:'学术交流中心',label:'学术交流中心'
			},{ value:'粤台产业科技学院',label:'粤台产业科技学院'
			},{ value:'知识产权中心（挂靠政法学院）',label:'知识产权中心（挂靠政法学院）'
			},{ value:'中法联合学院',label:'中法联合学院'
			},{ value:'组织部',label:'组织部'
			},{ value:'保卫处',label:'保卫处'
			},{ value:'财务处',label:'财务处'
			},{ value:'发展规划处',label:'发展规划处'
			},{ value:'高教研究与评估中心',label:'高教研究与评估中心'
			},{ value:'工会',label:'工会'
			},{ value:'国际交流处',label:'国际交流处'
			},{ value:'后勤集团',label:'后勤集团'
			},{ value:'教师发展中心',label:'教师发展中心'
			},{ value:'教务处',label:'教务处'
			},{ value:'科研处',label:'科研处'
			},{ value:'人事处',label:'人事处'
			},{ value:'人事代理服务处',label:'人事代理服务处'
			},{ value:'审计监察处',label:'审计监察处'
			},{ value:'团委',label:'团委'
			},{ value:'校领导',label:'校领导'
			},{ value:'协同发展创新办公室',label:'协同发展创新办公室'
			},{ value:'宣传部',label:'宣传部'
			},{ value:'学科建设办',label:'学科建设办'
			},{ value:'学生处',label:'学生处'
			},{ value:'学校办公室',label:'学校办公室'
			},{ value:'资产后勤管理处',label:'资产后勤管理处'
			},{ value:'广东高校网络与信息安全工程技术开发中心',label:'广东高校网络与信息安全工程技术开发中心'
			},{ value:'广东高校网络与信息安全工程开发中心',label:'广东高校网络与信息安全工程开发中心'
			},{ value:'广东省科协海智计划东莞理工学院',label:'广东省科协海智计划东莞理工学院'
			},{ value:'广东省社会科学研究基地--东莞理工学院质量与品牌发展研究中心',label:'广东省社会科学研究基地--东莞理工学院质量与品牌发展研究中心'
			},{ value:'广东省无线传感器网络系统及应用工程技术研究中心',label:'广东省无线传感器网络系统及应用工程技术研究中心'
			},{ value:'新时代价值与文化研究中心',label:'新时代价值与文化研究中心'
			},{ value:'生态环境工程技术研发中心',label:'生态环境工程技术研发中心'
			}],
	
		B_chargerTitleIds:[
			{ value:'',label:'--请选择--'
			},{ value:'教授',label:'教授'
			},{ value:'团委',label:'团委'
			},{ value:'副教授',label:'副教授'
			},{ value:'助教',label:'助教'
			},{ value:'初级',label:'初级'
			},{ value:'其他人员',label:'其他人员'
			},{ value:'高级讲师',label:'高级讲师'
			},{ value:'讲师',label:'讲师'
			},{ value:'助理讲师',label:'助理讲师'
			},{ value:'教员',label:'教员'
			},{ value:'高级实习指导教师',label:'高级实习指导教师'
			},{ value:'一级实习指导教师',label:'一级实习指导教师'
			},{ value:'二级实习指导教师',label:'二级实习指导教师'
			},{ value:'三级实习指导教师',label:'三级实习指导教师'
			},{ value:'中学高级教师',label:'中学高级教师'
			},{ value:'中学一级教师',label:'中学一级教师'
			},{ value:'中学二级教师',label:'中学二级教师'
			},{ value:'中学三级教师',label:'中学三级教师'
			},{ value:'研究员',label:'研究员'
			},{ value:'副研究员',label:'副研究员'
			},{ value:'助理研究员',label:'助理研究员'
			},{ value:'研究实习员',label:'研究实习员'
			},{ value:'高级实验师',label:'高级实验师'
			},{ value:'实验员',label:'实验员'
			},{ value:'高级工程师',label:'高级工程师'
			},{ value:'工程师',label:'工程师'
			},{ value:'助理工程师',label:'助理工程师'
			},{ value:'技术员',label:'技术员'
			},{ value:'高级经济师',label:'高级经济师'
			},{ value:'经济师',label:'经济师'
			},{ value:'助理经济师',label:'助理经济师'
			},{ value:'经济员',label:'经济员'
			},{ value:'高级会计师',label:'高级会计师'
			},{ value:'会计师',label:'会计师'
			},{ value:'助理会计师',label:'助理会计师'
			},{ value:'会计员',label:'会计员'
			},{ value:'高级统计师',label:'高级统计师'
			},{ value:'统计师',label:'统计师'
			},{ value:'助理统计师',label:'助理统计师'
			},{ value:'统计员',label:'统计员'
			},{ value:'编审',label:'编审'
			},{ value:'副编审',label:'副编审'
			},{ value:'编辑',label:'编辑'
			},{ value:'助理编辑',label:'助理编辑'
			},{ value:'研究馆员',label:'研究馆员'
			},{ value:'副研究馆员',label:'副研究馆员'
			},{ value:'馆员',label:'馆员'
			},{ value:'助理馆员',label:'助理馆员'
			},{ value:'管理员',label:'管理员'
			},{ value:'高级政工师',label:'高级政工师'
			},{ value:'政工师',label:'政工师'
			},{ value:'助理政工师',label:'助理政工师'
			},{ value:'政工员',label:'政工员'
			}],
          }
    },
    methods: {
			getTime(val){
				this.Beanform[0].B_chargerBrithday=val;
			},
			getBeaninfo(){
				API.getBeaninfo().then((result)=>{
					console.log(result);
					let json=result[0];
					 //this.Beanform[0]=JSON.parse(JSON.stringify(json));
					this.Beanform[0].B_name=json.B_name;
					this.Beanform[0].B_charger=json.B_charger;
					this.Beanform[0].B_unitId=json.B_unitId;
					this.Beanform[0].B_chargerGender=json.B_chargerGender;
					this.Beanform[0].B_chargerBrithday=json.B_chargerBrithday;
					this.Beanform[0].B_chargerTitleId=json.B_chargerTitleId;
					this.Beanform[0].B_telOffice=json.B_telOffice;
					this.Beanform[0].B_officeAddress=json.B_officeAddress;
					this.Beanform[0].B_researchField=json.B_researchField;
					this.Beanform[0].B_constructionPlan=json.B_constructionPlan;
				})
			},
			saveBeaninfo(){
				let that =this;
				this.$refs.Beanform.validate((valid)=>{
					if(valid){
						let para=Object.assign({},this.Beanform[0]);
						 API.saveBeaninfo(para).then(function(result){
							 console.log(result);
						 })
					}
				}
			)},
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
			reload(){
				window.history.go(0);
			},
		},
		created:function(){
			API.getBeaninfo().then((result)=>{
					console.log(result);
					let json=result[0];
					 //this.Beanform[0]=JSON.parse(JSON.stringify(json));
					this.Beanform[0].B_name=json.B_name;
					this.Beanform[0].B_charger=json.B_charger;
					this.Beanform[0].B_unitId=json.B_unitId;
					this.Beanform[0].B_chargerGender=json.B_chargerGender;
					this.Beanform[0].B_chargerBrithday=json.B_chargerBrithday;
					this.Beanform[0].B_chargerTitleId=json.B_chargerTitleId;
					this.Beanform[0].B_telOffice=json.B_telOffice;
					this.Beanform[0].B_officeAddress=json.B_officeAddress;
					this.Beanform[0].B_researchField=json.B_researchField;
					this.Beanform[0].B_constructionPlan=json.B_constructionPlan;
				})
		}
  }
</script>

