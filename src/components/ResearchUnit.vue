<template>
<el-form ref="Unitform" :model="Unitform[0]" name="researchUnitForm" method="post" action="/business/unit/researchUnit.do" enctype="multipart/form-data">
<div class="mainbg">
<el-card class="box-card">
	<div slot="header" class="clearfix">
    <span >研究机构新增</span>
		<el-button size="small"  style="float:right;" @click="getexcel">导出</el-button>
    <el-button size="small"  style="float:right;" @click="getUnitinfo">获取</el-button>
	  <router-link to="/Notice"><el-button size="small"  style="float:right;">返回</el-button></router-link>
    <el-button size="small"  style="float:right;" @click="reload" >重置</el-button>
    <el-button size="small"  style="float:right;" @click="saveUnitinfo">保存</el-button>
</div>
<table id="table" cellspacing="0" cellpadding="0" align="center">
				
	<tr>
		<td class='tdrowhead' colspan=1 rowspan=1 width='15%'>机构名称：</td>
		<td class='list' colspan=3 rowspan=1><div id='researchUnit.name'> 
		<el-input v-model="Unitform[0].R_name" type='text' name='bean.name'  id='name' size='50' maxLength = '100' ></el-input><font color=red> *</font></div></td>
	</tr>
	<tr>
		<td class='tdrowhead' colspan=1 rowspan=1 width='15%'>机构编号：</td>
		<td class='list' colspan=1 rowspan=1 width='35%'><div id='researchUnit.code'> 
		<el-input v-model="Unitform[0].R_code" type='text' name='bean.code'  id='code' size='0' maxLength = '64' ></el-input><font color=red> *</font></div></td>
		<td class='tdrowhead' colspan=1 rowspan=1 width='15%'>负责人：</td>
		<td class='list' colspan=1 rowspan=1 width='35%'><div id='researchUnit.charger'> 
		<el-input v-model="Unitform[0].R_charger" type='text' name='bean.charger'  id='charger' size='0' maxLength = '40' ></el-input></div></td>
	</tr>
	<tr>
		<td class='tdrowhead' colspan=1 rowspan=1 width='15%'>挂靠单位：</td>
		<td class='list' colspan=1 rowspan=1 width='35%'><div id='researchUnit.upUnitId'>
			<el-select v-model="Unitform[0].R_upUnitId"  name='bean.upUnitId' placeholder="请选择">
				<el-option
				v-for="item in R_upUnitIds"
				:key="item.value"
				:label="item.label"
				:value="item.value">
				</el-option>
			</el-select>
			</div></td>
		<td class='tdrowhead' colspan=1 rowspan=1 width='15%'>学科门类：</td>
		<td class='list' colspan=1 rowspan=1 width='35%'><div id='researchUnit.subjectClassId'>	
		<el-radio v-model="Unitform[0].R_subjectClassId" name='bean.subjectClassId' label="1" value='1' >科技类</el-radio>
		<el-radio v-model="Unitform[0].R_subjectClassId"  name='bean.subjectClassId' label="2" value='2' >社科类</el-radio>

	<font color=red> *</font></div></td>
	</tr>
	<tr>
		<td class='tdrowhead' colspan=1 rowspan=1 width='15%'>是否统计：</td>
		<td class='list' colspan=1 rowspan=1 width='35%'><div id='researchUnit.staTypeId'>	
		<el-radio v-model="Unitform[0].R_staTypeId" name='bean.staTypeId' label="1" value='0' >否</el-radio>
		<el-radio v-model="Unitform[0].R_staTypeId"  name='bean.staTypeId' label="2" value='1' >是</el-radio>
	<font color=red> *</font></div></td>
		<td class='tdrowhead' colspan=1 rowspan=1 width='15%'>一级学科：</td>
		<td class='list' colspan=1 rowspan=1 width='35%'><div id='researchUnit.subjectId'>
			<el-select v-model="Unitform[0].R_subjectId"  name='bean.subjectId' placeholder="请选择">
				<el-option
				v-for="item in R_subjectIds"
				:key="item.value"
				:label="item.label"
				:value="item.value">
				</el-option>
			</el-select>
			<font color=red> *</font></div></td>
	</tr>
	<tr>
		<td class='tdrowhead' colspan=1 rowspan=1 width='15%'>机构级别：</td>
		<td class='list' colspan=1 rowspan=1 width='35%'><div id='researchUnit.levelId'>	
		<el-radio v-model="Unitform[0].R_levelId" name='bean.levelId' label="国家级" value='国家级' >国家级</el-radio>
		<el-radio v-model="Unitform[0].R_levelId" name='bean.levelId' label="省部级" value='省部级' >省部级</el-radio><br>
		<el-radio v-model="Unitform[0].R_levelId" name='bean.levelId' label="地厅级" value='地厅级' >地厅级</el-radio>
		<el-radio v-model="Unitform[0].R_levelId" name='bean.levelId' label="学校级" value='学校级' >学校级</el-radio>

	</div></td>
		<td class='tdrowhead' colspan=1 rowspan=1 width='15%'>电话：</td>
		<td class='list' colspan=1 rowspan=1 width='35%'><div id='researchUnit.tel'> 
		<el-input v-model="Unitform[0].R_telOffice" type='text' name='bean.tel'  id='tel' size='0'    maxLength = '128'></el-input></div></td>
	</tr>
	<tr>
		<td class='tdrowhead' colspan=1 rowspan=1 width='15%'>传真：</td>
		<td class='list' colspan=1 rowspan=1 width='35%'><div id='researchUnit.fax'> 
		<el-input v-model="Unitform[0].R_fax" type='text' name='bean.fax'  id='fax' size='0'    maxLength = '128'></el-input></div></td>
		<td class='tdrowhead' colspan=1 rowspan=1 width='15%'>地址：</td>
		<td class='list' colspan=1 rowspan=1 width='35%'><div id='researchUnit.address'> 
		<el-input v-model="Unitform[0].R_address" type='text' name='bean.address'  id='address' size='0'    maxLength = '255' ></el-input></div></td>
	</tr>
	<tr>
		<td class='tdrowhead' colspan=1 rowspan=1 width='15%'>邮编：</td>
		<td class='list' colspan=1 rowspan=1 width='35%'><div id='researchUnit.postalCode'> 
		<el-input v-model="Unitform[0].R_postalCode" type='text' name='bean.postalCode'  id='postalCode' size='0'   maxlength="6" ></el-input></div></td>
		<td class='tdrowhead' colspan=1 rowspan=1 width='15%'>Email：</td>
		<td class='list' colspan=1 rowspan=1 width='35%'><div id='researchUnit.email'> 
		<el-input v-model="Unitform[0].R_email" type='email' name='bean.email'  id='email' size='0'    maxLength = '128' ></el-input></div></td>
	</tr>
	<tr>
		<td class='tdrowhead' colspan=1 rowspan=1 width='15%'>网址：</td>
		<td class='list' colspan=1 rowspan=1 width='35%'><div id='researchUnit.website'> 
		<el-input v-model="Unitform[0].R_website" type='text' name='bean.website'  id='website' size='0'    maxLength = '128' ></el-input></div></td>
		<td class='tdrowhead' colspan=1 rowspan=1 width='15%'>成立日期：</td>
		<td class='list' colspan=1 rowspan=1 width='35%'><div id='researchUnit.createDate'> 
		<el-date-picker type='date' @change="getTime" value-format="yyyy-MM-dd" name='bean.createDate'  id='createDate' size=12 v-model="Unitform[0].R_createDate" suffix-icon="el-icon-date"  class="Wdate" ></el-date-picker>
		<font color=red> *</font></div></td>
	</tr>
	<tr>
		<td class='tdrowhead' colspan=1 rowspan=1 width='15%'>是否实体机构：</td>
		<td class='list' colspan=1 rowspan=1 width='35%'><div id='researchUnit.entityFlag'>	
		<el-radio v-model="Unitform[0].R_entityFlag" name='bean.entityFlag' label="1" value='0' >否</el-radio>
		<el-radio v-model="Unitform[0].R_entityFlag"  name='bean.entityFlag' label="2" value='1' >是</el-radio>

	<font color=red> *</font></div></td>
		<td class='tdrowhead' colspan=1 rowspan=1 width='15%'>组成类型：</td>
		<td class='list' colspan=1 rowspan=1 width='35%'><div id='researchUnit.zclx'>
			<el-select v-model="Unitform[0].R_zclx"  name='bean.zclx' placeholder="请选择">
				<el-option
				v-for="item in R_zclxs"
				:key="item.value"
				:label="item.label"
				:value="item.value">
				</el-option>
			</el-select>
				<font color=red> *</font></div></td>
	</tr>
	<tr>
		<td class='tdrowhead' colspan=1 rowspan=1 width='15%'>电子文档：</td>
		<td class='list' colspan=3 rowspan=1><div id='researchUnit.fileId'>
			<br><br>
		<el-upload
		class="upload-demo"
		action="https://jsonplaceholder.typicode.com/posts/"
		:on-preview="handlePreview"
		:on-remove="handleRemove"
		:before-remove="beforeRemove"
		multiple
		:limit="3"
		:on-exceed="handleExceed"
		:file-list="fileList">
		<el-button size="mini" type="primary">点击上传</el-button>
	</el-upload>
	</div></td>
	</tr>

</table>

</el-card>
</div>
		<el-table class="table" :data="Unitform" border style="width: 100%" hidden>
			<el-table-column prop="R_name" label="机构名称"></el-table-column>
			<el-table-column prop="R_code" label="机构编号"></el-table-column>
			<el-table-column prop="R_charger" label="负责人"></el-table-column>
			<el-table-column prop="R_upUnitId" label="挂靠单位"></el-table-column>
			<el-table-column prop="R_subjectClassId" label="学科门类"></el-table-column>
			<el-table-column prop="R_staTypeId" label="是否统计"></el-table-column>
			<el-table-column prop="R_subjectId" label="一级学科"></el-table-column>
			<el-table-column prop="R_levelId" label="机构级别"></el-table-column>
			<el-table-column prop="R_telOffice" label="电话"></el-table-column>
			<el-table-column prop="R_fax" label="传真"></el-table-column>		
			<el-table-column prop="R_address" label="地址"></el-table-column>
			<el-table-column prop="R_postalCode" label="邮编"></el-table-column>
			<el-table-column prop="R_email" label="Email"></el-table-column>
			<el-table-column prop="R_website" label="网址"></el-table-column>
			<el-table-column prop="R_createDate" label="成立日期"></el-table-column>
			<el-table-column prop="R_entityFlag" label="是否实体机构"></el-table-column>
			<el-table-column prop="R_zclx" label="组成类型"></el-table-column>
		</el-table>
	
</el-form>
</template>


<style>
body{
  margin:0 0 0 0;
  font-size: 15px;
}
.el-input{
	width:200px;
}
tr{
	left:100px;
	height:70px;
}
</style>

<script>
import API from '../api/api_test';
import FileSaver from "file-saver";
import XLSX from "xlsx"
  export default {
    data() {  
      return {
		activeIndex:'1',
		activeIndex2:'1',
		Unitform:[{
			R_name:'',
			R_code:'',
			R_charger:'',
			R_upUnitId:'',
			R_subjectClassId:'',
			R_staTypeId:'',
			R_subjectId:'',
			R_levelId:'',
			R_telOffice:'',
			R_fax:'',
			R_address:'',
			R_postalCode:'',
			R_email:'',
			R_website:'',
			R_createDate:'',
			R_entityFlag:'',
			R_zclx:'',
		}],
		R_upUnitIds:[
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
		R_subjectIds:[
			{ value:'',label:'--请选择--'
			},{ value:'管理学',label:'管理学'
			},{ value:'马克思主义',label:'马克思主义'
			},{ value:'哲学',label:'哲学'
			},{ value:'宗教学',label:'宗教学'
			},{ value:'语言学',label:'语言学'
			},{ value:'文学',label:'文学'
			},{ value:'艺术学',label:'艺术学'
			},{ value:'历史学',label:'历史学'
			},{ value:'考古学',label:'考古学'
			},{ value:'经济学',label:'经济学'
			},{ value:'政治学',label:'政治学'
			},{ value:'法学',label:'法学'
			},{ value:'军事学',label:'军事学'
			},{ value:'社会学',label:'社会学'
			},{ value:'民族学与文化学',label:'民族学与文化学'
			},{ value:'新闻学与传播学',label:'新闻学与传播学'
			},{ value:'图书馆、情报与文献学',label:'图书馆、情报与文献学'
			},{ value:'教育学',label:'教育学'
			},{ value:'体育科学',label:'文学'
			},{ value:'统计学',label:'统计学'
			}],
		R_zclxs:[
				{ value:'',label:'--请选择--'
				},{ value:'10',label:'政府部门办'
				},{ value:'20',label:'与国内高校合办'
				},{ value:'30',label:'与国内独立研究机构合办'
				},{ value:'40',label:'与境外机构合办'
				},{ value:'51',label:'与境内注册外商独资企业合办'
				},{ value:'52',label:'与境内注册其他企业合办'
				},{ value:'60',label:'单位自办'
				},{ value:'70',label:'其他'
				}],
		fileList: [{name: 'file.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'file2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}],
			}
	},
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
	  	handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
      handleExceed(files, fileList) {
        this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
      },
      beforeRemove(file, fileList) {
        return this.$confirm(`确定移除 ${ file.name }？`);
			},
			getTime(val) {
        this.Unitform[0].R_createDate=val;
      },
			//获取默认信息
			getUnitinfo(){
				API.getUnitinfo().then((result)=>{
					console.log(result);
					let json=result[0];
					//this.Unitform[0]=JSON.parse(JSON.stringify(json));
					this.Unitform[0].R_name=json.R_name;
					this.Unitform[0].R_code=json.R_code;
					this.Unitform[0].R_charger=json.R_charger;
					this.Unitform[0].R_upUnitId=json.R_upUnitId;
					this.Unitform[0].R_subjectClassId=json.R_subjectClassId;
					this.Unitform[0].R_staTypeId=json.R_staTypeId;
					this.Unitform[0].R_subjectId=json.R_subjectId;
					this.Unitform[0].R_levelId=json.R_levelId;
					this.Unitform[0].R_telOffice=json.R_telOffice;
					this.Unitform[0].R_fax=json.R_fax;
					this.Unitform[0].R_address=json.R_address;
					this.Unitform[0].R_postalCode=json.R_postalCode;
					this.Unitform[0].R_email=json.R_email;
					this.Unitform[0].R_website=json.R_website;
					this.Unitform[0].R_createDate=json.R_createDate;
					this.Unitform[0].R_entityFlag=json.R_entityFlag;
					this.Unitform[0].R_zclx=json.R_zclx;
				})
			},
			saveUnitinfo(){
				let that =this;
				this.$refs.Unitform.validate((valid)=>{
					if(valid){
						let para=Object.assign({},this.Unitform[0]);
						 API.saveUnitinfo(para).then(function(result){
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
    }
  }
</script>
