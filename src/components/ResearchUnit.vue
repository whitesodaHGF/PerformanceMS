<template>
<form name="researchUnitForm" method="post" action="/business/unit/researchUnit.do" enctype="multipart/form-data">

<div class="mainbg">

<el-card class="box-card">
	<div slot="header" class="clearfix">
    <span >研究机构新增</span>
    <el-button size="small" style="float:right;">返回</el-button>
    <el-button size="small" style="float:right;">重置</el-button>
    <el-button size="small" style="float:right;" >保存</el-button>
</div>
<table id="table" cellspacing="0" cellpadding="0" align="center">
				
	<tr>
		<td class='tdrowhead' colspan=1 rowspan=1 width='15%'>机构名称：</td>
		<td class='list' colspan=3 rowspan=1><div id='researchUnit.name'> 
		<el-input v-model="R_name" type='text' name='bean.name'  id='name' size='50' maxLength = '100' ></el-input><font color=red> *</font></div></td>
	</tr>
	<tr>
		<td class='tdrowhead' colspan=1 rowspan=1 width='15%'>机构编号：</td>
		<td class='list' colspan=1 rowspan=1 width='35%'><div id='researchUnit.code'> 
		<el-input v-model="R_code" type='text' name='bean.code'  id='code' size='0' maxLength = '64' ></el-input><font color=red> *</font></div></td>
		<td class='tdrowhead' colspan=1 rowspan=1 width='15%'>负责人：</td>
		<td class='list' colspan=1 rowspan=1 width='35%'><div id='researchUnit.charger'> 
		<el-input v-model="R_charger" type='text' name='bean.charger'  id='charger' size='0' maxLength = '40' ></el-input></div></td>
	</tr>
	<tr>
		<td class='tdrowhead' colspan=1 rowspan=1 width='15%'>挂靠单位：</td>
		<td class='list' colspan=1 rowspan=1 width='35%'><div id='researchUnit.upUnitId'>
			<el-select v-model="R_upUnitId"  name='bean.upUnitId' placeholder="请选择">
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
		<el-radio v-model="R_subjectClassId" name='bean.subjectClassId' label="1" value='1' >科技类</el-radio>
		<el-radio v-model="R_subjectClassId"  name='bean.subjectClassId' label="2" value='2' >社科类</el-radio>

	<font color=red> *</font></div></td>
	</tr>
	<tr>
		<td class='tdrowhead' colspan=1 rowspan=1 width='15%'>是否统计：</td>
		<td class='list' colspan=1 rowspan=1 width='35%'><div id='researchUnit.staTypeId'>	
		<el-radio v-model="R_staTypeId" name='bean.staTypeId' label="1" value='0' >否</el-radio>
		<el-radio v-model="R_staTypeId"  name='bean.staTypeId' label="2" value='1' >是</el-radio>
	<font color=red> *</font></div></td>
		<td class='tdrowhead' colspan=1 rowspan=1 width='15%'>一级学科：</td>
		<td class='list' colspan=1 rowspan=1 width='35%'><div id='researchUnit.subjectId'>
			<el-select v-model="R_subjectId"  name='bean.subjectId' placeholder="请选择">
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
		<el-radio v-model="R_levelId" name='bean.levelId' label="1" value='1' >国家级</el-radio>
		<el-radio v-model="R_levelId"  name='bean.levelId' label="2" value='2' >省部级</el-radio><br>
		<el-radio v-model="R_levelId" name='bean.levelId' label="3" value='3' >地厅级</el-radio>
		<el-radio v-model="R_levelId"  name='bean.levelId' label="4" value='4' >学校级</el-radio>

	</div></td>
		<td class='tdrowhead' colspan=1 rowspan=1 width='15%'>电话：</td>
		<td class='list' colspan=1 rowspan=1 width='35%'><div id='researchUnit.tel'> 
		<el-input v-model="R_telOffice" type='text' name='bean.tel'  id='tel' size='0'    maxLength = '128'></el-input></div></td>
	</tr>
	<tr>
		<td class='tdrowhead' colspan=1 rowspan=1 width='15%'>传真：</td>
		<td class='list' colspan=1 rowspan=1 width='35%'><div id='researchUnit.fax'> 
		<el-input v-model="R_fax" type='text' name='bean.fax'  id='fax' size='0'    maxLength = '128'></el-input></div></td>
		<td class='tdrowhead' colspan=1 rowspan=1 width='15%'>地址：</td>
		<td class='list' colspan=1 rowspan=1 width='35%'><div id='researchUnit.address'> 
		<el-input v-model="R_address" type='text' name='bean.address'  id='address' size='0'    maxLength = '255' ></el-input></div></td>
	</tr>
	<tr>
		<td class='tdrowhead' colspan=1 rowspan=1 width='15%'>邮编：</td>
		<td class='list' colspan=1 rowspan=1 width='35%'><div id='researchUnit.postalCode'> 
		<el-input v-model="R_postalCode" type='text' name='bean.postalCode'  id='postalCode' size='0'   maxlength="6" ></el-input></div></td>
		<td class='tdrowhead' colspan=1 rowspan=1 width='15%'>Email：</td>
		<td class='list' colspan=1 rowspan=1 width='35%'><div id='researchUnit.email'> 
		<el-input v-model="R_email" type='email' name='bean.email'  id='email' size='0'    maxLength = '128' ></el-input></div></td>
	</tr>
	<tr>
		<td class='tdrowhead' colspan=1 rowspan=1 width='15%'>网址：</td>
		<td class='list' colspan=1 rowspan=1 width='35%'><div id='researchUnit.website'> 
		<el-input v-model="R_website" type='text' name='bean.website'  id='website' size='0'    maxLength = '128' ></el-input></div></td>
		<td class='tdrowhead' colspan=1 rowspan=1 width='15%'>成立日期：</td>
		<td class='list' colspan=1 rowspan=1 width='35%'><div id='researchUnit.createDate'> 
		<el-date-picker type='date' name='bean.createDate'  id='createDate' size=12 v-model="R_createDate"  placeholder="选择日期" suffix-icon="el-icon-date"  class="Wdate" ></el-date-picker>
		<font color=red> *</font></div></td>
	</tr>
	<tr>
		<td class='tdrowhead' colspan=1 rowspan=1 width='15%'>是否实体机构：</td>
		<td class='list' colspan=1 rowspan=1 width='35%'><div id='researchUnit.entityFlag'>	
		<el-radio v-model="R_entityFlag" name='bean.entityFlag' label="1" value='0' >否</el-radio>
		<el-radio v-model="R_entityFlag"  name='bean.entityFlag' label="2" value='1' >是</el-radio>

	<font color=red> *</font></div></td>
		<td class='tdrowhead' colspan=1 rowspan=1 width='15%'>组成类型：</td>
		<td class='list' colspan=1 rowspan=1 width='35%'><div id='researchUnit.zclx'>
			<el-select v-model="R_zclx"  name='bean.zclx' placeholder="请选择">
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
</form>
</template>


<script>
  export default {
    data() {  
      return {
		activeIndex:'1',
		activeIndex2:'1',
		R_upUnitId:'',
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
		R_subjectId:'',
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
		R_zclx:'',
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
		R_fileId:'',
		R_fileurl:'',
		fileList: [{name: 'file.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'file2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}],
		R_name:'',
		R_code:'',
		R_charger:'',
		R_subjectClassId:'',
		R_staTypeId:'',
		R_levelId:'',
		R_telOffice:'',
		R_entityFlag:'',
		R_fax:'',
		R_address:'',
		R_postalCode:'',
		R_email:'',
		R_website:'',
		R_createDate:'',
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
      }
    }
  }
</script>
