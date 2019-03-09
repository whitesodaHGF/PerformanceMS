<template>
<form name="teamForm" method="post" action="/business/team/team.do" enctype="multipart/form-data"  size="mini">
	<input type="hidden" name="actionType" value="add">
	<input type="hidden" name="pageType" value="add">
	<input type="hidden" name="bean.id" value="">
	<input type="hidden" name="bean.chargerCode" value="">
	
	<div class="mainbg">
	<el-card class="box-card">
		<div slot="header" class="clearfix">
			<span >科研团队新增</span>
				<el-button size="small" style="float:right;">保存</el-button>
				<el-button size="small" style="float:right;">重置</el-button>
				<el-button size="small" style="float:right;">返回</el-button>
		</div>
	<table id="table" cellspacing="0" cellpadding="0" align="center">
	<tr>
		<td class='tdrowhead' colspan=1 rowspan=1 width='15%'>团队名称：</td>
		<td class='list' colspan=3 rowspan=1><div id='team.name'> 
        <el-input type='text' v-model="B_name" name='bean.name'  id='name' size=40  maxLength = '100' ></el-input><font color=red> *</font></div></td>
	</tr>
	<tr>
		<td class='tdrowhead' colspan=1 rowspan=1 width='15%' title='“带头人”提供拼音首字母检索功能。例如：输入拼音“zs”即可显示姓名“张三”'>带头人：</td>
		<td class='list' colspan=3 rowspan=1 title='“带头人”提供拼音首字母检索功能。例如：输入拼音“zs”即可显示姓名“张三”'><div id='team.chargerName'> 
        <el-input type='text' v-model="B_chargerName" name='bean.chargerName'  id='chargerName' size=40  maxLength = '40' ></el-input><font color=red> *</font></div></td>
	</tr>
	<tr>
		<td class='tdrowhead' colspan=1 rowspan=1 width='15%'>所属单位：</td>
		<td class='list' colspan=1 rowspan=1 width='35%'><div id='team.unitId'>
			<el-select v-model="B_unitId"  name='bean.unitId' placeholder="请选择">
                <el-option
                v-for="item in B_unitIds"
                :key="item.value"
                :label="item.label"
                :value="item.value">
                </el-option>
		    </el-select>
               <font color=red> *</font></div></td>
		<td class='tdrowhead' colspan=1 rowspan=1 width='15%'>带头人性别：</td>
		<td class='list' colspan=1 rowspan=1 width='35%'><div id='team.chargerGender'>	
        <el-radio v-model="B_chargerGender" name='bean.chargerGender' label="1" value='1'  >男</el-radio>
		<el-radio v-model="B_chargerGender" name='bean.chargerGender' label="0" value='0'  >女</el-radio>
	
	</div></td>
	</tr>
	<tr>
		<td class='tdrowhead' colspan=1 rowspan=1 width='15%'>出生日期：</td>
		<td class='list' colspan=1 rowspan=1 width='35%'><div id='team.chargerBrithday'> 
        <el-date-picker v-model="B_chargerBrithday" name='bean.chargerBrithday'  id='chargerBrithday' size=12 maxLength = '10'  class="Wdate" ></el-date-picker></div></td>
		<td class='tdrowhead' colspan=1 rowspan=1 width='15%'>职称：</td>
		<td class='list' colspan=1 rowspan=1 width='35%'><div id='team.chargerTitleId'>
			<el-select v-model="B_chargerTitleId"  name='bean.chargerTitleId' placeholder="请选择">
                <el-option
                v-for="item in B_chargerTitleIds"
                :key="item.value"
                :label="item.label"
                :value="item.value">
                </el-option>
		    </el-select></div></td>
	</tr>
	<tr>
		<td class='tdrowhead' colspan=1 rowspan=1 width='15%'>办公电话：</td>
		<td class='list' colspan=3 rowspan=1><div id='team.officeTel'> 
        <el-input v-model="B_officeTel" type='text' name='bean.officeTel'  id='officeTel' size=0 maxLength = '20' ></el-input></div></td>
	</tr>
	<tr>
		<td class='tdrowhead' colspan=1 rowspan=1 width='15%'>办公地点：</td>
		<td class='list' colspan=3 rowspan=1><div id='team.officeAddress'> 
        <el-input v-model="B_officeAddress" type='text' name='bean.officeAddress'  id='officeAddress' size=30 maxLength = '100' ></el-input></div></td>
	</tr>
	<tr>
		<td class='tdrowhead' colspan=1 rowspan=1 width='15%'>研究方向：</td>
		<td class='list' colspan=3 rowspan=1><div id='team.researchField'>
        <el-input type="textarea" v-model="B_researchField" name='bean.researchField' cols=100  rows=2 ></el-input></div></td>
	</tr>	
	<tr>
		<td class='tdrowhead' colspan=1 rowspan=1 width='15%'>建设规划：</td>
		<td class='list' colspan=3 rowspan=1><div id='team.constructionPlan'>
        <el-input type="textarea" v-model="B_constructionPlan" name='bean.constructionPlan' cols=100   rows=2 ></el-input></div></td>
	</tr>
	</table>
	</el-card>	
	<!-- mainbg end -->
    </div> 
	</form>
</template>

<script>
  export default {
    data() {  
      return {
		activeIndex:'1',
		activeIndex2:'1',
		B_unitId:'',
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
		B_chargerTitleId:'',
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
        B_name:'',
        B_charger:'',
        B_chargerName:'',
        B_chargerBrithday:'',
        B_chargerGender:'',
        B_officeTel:'',
        B_officeAddress:'',
        B_researchField:'',
        B_constructionPlan:''
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
