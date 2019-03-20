<template>
    <div>
        
<form name="personForm" method="post" action="/business/person/person.do" enctype="multipart/form-data">
<input type="hidden" id='isClose' value='true'>
<input type="hidden" name="actionType" value="edit">
<input type="hidden" name="pageType" value="edit">
<input type="hidden" name="bean.id" value="5b5e3f773b17f461013b1be976520c21">
<input type="hidden" name="existSameRecord" value="false">
<el-card class="border-card">
	<div slot="header" class="clearfix">
    <span>个人资料</span> 
	  <el-button size="small"  style="float:right;">返回</el-button>
    <el-button size="small"  style="float:right;">重置</el-button>
    <el-button size="small"  style="float:right;">保存</el-button>
	</div>
<div class="mainbg">

	<el-tabs type="border-card">
   <el-tab-pane label="基本信息" >
  <table id="table" cellspacing="0" cellpadding="0" align="center">
	<tr>
		<td class='tdrowhead' colspan=1 rowspan=1 width='15%'>人员名称：</td>
		<td class='list' colspan=1 rowspan=1 width='35%'><div id='person.name'> 
		<el-input name='bean.name'  id='name' size=20 v-model="T_name"   maxLength = '40' ></el-input>	<font color=red> *</font></div></td>
		<td class='tdrowhead' colspan=1 rowspan=1 width='15%'>职工号：</td>
		<td class='list' colspan=1 rowspan=1 width='35%'><div id='person.account'> 
		<el-input type='text' name='bean.account'  id='account' size='0' v-model="T_account"  maxLength = '32' ></el-input>
		<font color=red> *</font></div></td>
	</tr>
	<tr>
		<td class='tdrowhead' colspan=1 rowspan=1 width='15%'>出生日期：</td>
		<td class='list' colspan=1 rowspan=1 width='35%'><div id='person.birthday'>
		<el-date-picker type='date' name='bean.birthday'  id='birthday' size=12 v-model="T_birthday"  placeholder="选择日期" suffix-icon="el-icon-date"  class="Wdate" ></el-date-picker><font color=red> *</font></div></td>
		<td class='tdrowhead' colspan=1 rowspan=1 width='15%'>性别：</td>
		<td class='list' colspan=1 rowspan=1 width='35%'><div id='person.sexId'>	
		<el-radio v-model="T_sexId" label="1" value="1" >男</el-radio>
		<el-radio v-model="T_sexId" label="2" value="1">女</el-radio>
	<font color=red> *</font></div></td>
	</tr>
	<tr>
		<td class='tdrowhead' colspan=1 rowspan=1 width='15%'>科研单位：</td>
		<td class='list' colspan=1 rowspan=1 width='35%'><div id='person.unitId'>
			<el-select v-model="T_unitId"  name='bean.unitId' placeholder="请选择">
				<el-option
				v-for="item in T_unitIds"
				:key="item.value"
				:label="item.label"
				:value="item.value">
				</el-option>
			</el-select>
			<font color=red> *</font></div>
		</td>
		<td class='tdrowhead' colspan=1 rowspan=1 width='15%'>科研教研室：</td>
		<td class='list' colspan=1 rowspan=1 width='35%'><div id='person.divisionId'>
				<el-select v-model="T_divisionId" name='bean.divisionId'  >
					<el-option value='' >--请选择--</el-option>
				</el-select></div></td>
	</tr>
	<tr>
		<td class='tdrowhead' colspan=1 rowspan=1 width='15%'>最后学位：</td>
		<td class='list' colspan=1 rowspan=1 width='35%'><div id='person.eduDegreeId'>
		<el-radio v-model="T_eduDegreeId" label="1" value="10000" >名誉博士</el-radio>
		<el-radio v-model="T_eduDegreeId" label="2" value="1" >博士</el-radio>
		<el-radio v-model="T_eduDegreeId" label="3" value="2">硕士</el-radio><br>
		<el-radio v-model="T_eduDegreeId" label="4" value="3" >学士</el-radio>
		<el-radio v-model="T_eduDegreeId" label="5" value="999">其他</el-radio>
		<font color=red> *</font></div>
		</td>
		<td class='tdrowhead' colspan=1 rowspan=1 width='15%'>最后学历：</td>
		<td class='list' colspan=1 rowspan=1 width='35%'><div id='person.eduLevelId'>	
		<el-radio v-model="T_eduLevelId" label="1" value="10000" >博士研究生</el-radio>
		<el-radio v-model="T_eduLevelId" label="2" value="1" >硕士研究生</el-radio>
		<el-radio v-model="T_eduLevelId" label="3" value="2">本科生</el-radio><br>
		<el-radio v-model="T_eduLevelId" label="4" value="3" >大专生</el-radio>
		<el-radio v-model="T_eduLevelId" label="5" value="4" >中专生</el-radio>
		<el-radio v-model="T_eduLevelId" label="6" value="999">其他</el-radio>
		<font color=red> *</font></div></td>
	</tr>
	<tr>
		<td class='tdrowhead' colspan=1 rowspan=1 width='15%'>职称：</td>
		<td class='list' colspan=1 rowspan=1 width='35%'><div id='person.titleId'>
			<el-cascader
				:options="T_titleIdss"
				v-model="T_titleId"
				>
			</el-cascader>
			<font color=red> *</font></div>
	</td>
		<td class='tdrowhead' colspan=1 rowspan=1 width='15%'>岗位类型：</td>
		<td class='list' colspan=1 rowspan=1 width='35%'><div id='person.positionType'>
			<el-select v-model="T_positionType"  name='bean.positionType' placeholder="请选择">
				<el-option
				v-for="item in T_positionTypes"
				:key="item.value"
				:label="item.label"
				:value="item.value">
				</el-option>
			</el-select></div></td>
	</tr>
	<tr>
		<td class='tdrowhead' colspan=1 rowspan=1 width='15%'>定职日期：</td>
		<td class='list' colspan=1 rowspan=1 width='35%'><div id='person.dutyDate'> 
		<el-date-picker type='date' name='bean.dutyDate'  id='dutyDate' size=12 v-model="T_dutyDate"  placeholder="选择日期" suffix-icon="el-icon-date"  class="Wdate" ></el-date-picker></div></td>
	</tr>
	<tr>
		<td class='tdrowhead' colspan=1 rowspan=1 width='15%'>学术荣誉称号：</td>
		<td class='list' colspan=1 rowspan=1 width='35%'><div id='person.honorTitleId'>	
		<el-radio v-model="T_honorTitleId" label="1"  value='1'  >院士</el-radio>
		<el-radio v-model="T_honorTitleId" label="2"  value='2'  >突出青年</el-radio><br>
		<el-radio v-model="T_honorTitleId" label="3"  value='3'  >长江学者</el-radio>
		<el-radio v-model="T_honorTitleId" label="4"  value='4'  >其他</el-radio>

	</div></td>
		<td class='tdrowhead' colspan=1 rowspan=1 width='15%'>学科门类：</td>
		<td class='list' colspan=1 rowspan=1 width='35%'><div id='person.subjectClassId'>	
		<el-radio v-model="T_subjectClassId" label="1"  value='1'  >科技类</el-radio>
		<el-radio v-model="T_subjectClassId" label="2"  value='2'  >社科类</el-radio>
	<font color=red> *</font></div></td>
	</tr>
	<tr>
		<td class='tdrowhead' colspan=1 rowspan=1 width='15%'>是否统计：</td>
		<td class='list' colspan=1 rowspan=1 width='35%'><div id='person.isStat'>	
		<el-radio v-model="T_isStat" label="1"  value='0'  >否</el-radio>
		<el-radio v-model="T_isStat" label="2"  value='1'  >是</el-radio>
	<font color=red> *</font></div></td>
		<td class='tdrowhead' colspan=1 rowspan=1 width='15%'>一级学科：</td>
		<td class='list' colspan=1 rowspan=1 width='35%'><div id='person.subjectId'>
			<el-select v-model="T_subjectId"  name='bean.subjectId' placeholder="请选择">
				<el-option
				v-for="item in T_subjectIds"
				:key="item.value"
				:label="item.label"
				:value="item.value">
				</el-option>
			</el-select>
		<font color=red> *</font></div></td>
	</tr>
	<tr>
		<td class='tdrowhead' colspan=1 rowspan=1 width='15%'>二级学科：</td>
		<td class='list' colspan=1 rowspan=1 width='35%'><div id='person.subject2Id'>
			<el-select v-model="T_subject2Id"  name='bean.subject2Id' placeholder="请选择">
				<el-option
				v-for="item in T_subject2Ids"
				:key="item.value"
				:label="item.label"
				:value="item.value">
				</el-option>
			</el-select>
			<font color=red> *</font></div></td>
		<td class='tdrowhead' colspan=1 rowspan=1 width='15%'>三级学科：</td>
		<td class='list' colspan=1 rowspan=1 width='35%'><div id='person.subject3Id'>
				<el-select v-model="T_subject3Id"  name='bean.subject3Id'  >
					<el-option value='' >--请选择--</el-option>
				</el-select></div></td>
	</tr>
	<tr>
		<td class='tdrowhead' colspan=1 rowspan=1 width='15%'>人事单位：</td>
		<td class='list' colspan=1 rowspan=1 width='35%'><div id='person.hrUnitId'>
			<el-select v-model="T_hrUnitId"  name='bean.hrUnitId' placeholder="请选择">
				<el-option
				v-for="item in T_unitIds"
				:key="item.value"
				:label="item.label"
				:value="item.value">
				</el-option>
			</el-select>
		</div></td>
		<td class='tdrowhead' colspan=1 rowspan=1 width='15%'>手机：</td>
		<td class='list' colspan=1 rowspan=1 width='35%'><div id='person.mobile'>
		<el-input v-model="T_mobile" type='text' name='bean.mobile'  id='mobile' size='0' maxLength = '128'></el-input></div></td>
	</tr>
	<tr>
		<td class='tdrowhead' colspan=1 rowspan=1 width='15%'>办公电话：</td>
		<td class='list' colspan=1 rowspan=1 width='35%'><div id='person.telOffice'> 
		<el-input v-model="T_telOffice"  type='text' name='bean.telOffice'  id='telOffice' size='0' maxLength = '32'></el-input></div></td>
		<td class='tdrowhead' colspan=1 rowspan=1 width='15%'>EMAIL：</td>
		<td class='list' colspan=1 rowspan=1 width='35%'><div id='person.email'> 
		<el-input v-model="T_email" type='text' name='bean.email'  id='email' size='0' maxLength = '128' ></el-input></div></td>
	</tr>
	<tr>
		<td class='tdrowhead' colspan=1 rowspan=1 width='15%'>QQ：</td>
		<td  class='list' colspan=3 rowspan=1><div id='person.qq'> 
		<el-input v-model="T_email" type='text' name='bean.qq'  id='qq' size='0' ></el-input></div></td>
	</tr>
	<tr>
		<td class='tdrowhead' colspan=1 rowspan=1 width='15%'>研究方向：</td>
		<td class='list' colspan=3 rowspan=1><div id='person.researchField'>
		<el-input v-model="T_researchField" type='textarea' name='bean.researchField'  id='researchField' size='0' cols=80 rows=2 ></el-input>
		<font color=red> *</font></div></td>
	</tr>
	<tr>
		<td class='tdrowhead' colspan=1 rowspan=1 width='15%'>学科方向：</td>
		<td class='list' colspan=3 rowspan=1><div id='person.standby10'>
		<el-input v-model="T_standby10" type='textarea'  name='bean.standby10'   id='researchField' size='0' cols=80 rows=2 maxLength = '1000'></el-input>
		<font color=red> *</font></div></td>
	</tr>
</table>
  </el-tab-pane>


  <el-tab-pane label="详细信息">
		<table id="table" cellspacing="0" cellpadding="0" align="center">
 		<tr>
		<td class='tdrowhead' colspan=1 rowspan=1 width='15%'>英文名：</td>
		<td class='list' colspan=1 rowspan=1 width='35%'><div id='person.nameEn'> 
		<el-input type='text' name='bean.nameEn'  id='nameEn' size='0'   maxLength = '40' ></el-input></div></td>
		<td class='tdrowhead' colspan=1 rowspan=1 width='15%'>政治面貌：</td>
		<td class='list' colspan=1 rowspan=1 width='35%'><div id='person.polityId'>
			<el-select v-model="T_polityId"  name='bean.polityId' placeholder="请选择">
				<el-option
				v-for="item in T_polityIds"
				:key="item.value"
				:label="item.label"
				:value="item.value">
				</el-option>
			</el-select><font color=red> *</font></div></td>
	</tr>
	<tr>
		<td class='tdrowhead' colspan=1 rowspan=1 width='15%'>相关学科：</td>
		<td class='list' colspan=1 rowspan=1 width='35%'><div id='person.subjectCorrelationId'>
			<el-select v-model="T_subjectCorrelationId"  name='bean.subjectCorrelationId' placeholder="请选择">
				<el-option
				v-for="item in T_subjectIds"
				:key="item.value"
				:label="item.label"
				:value="item.value">
				</el-option>
			</el-select></div></td>
		<td class='tdrowhead' colspan=1 rowspan=1 width='15%'>身份证号码：</td>
		<td class='list' colspan=1 rowspan=1 width='35%'><div id='person.idCard'>
		 <el-input v-model="T_idCard" type='text' name='bean.idCard'  id='idCard' size='0'    maxLength = '32' ></el-input></div></td>
	</tr>
	<tr>
		<td class='tdrowhead' colspan=1 rowspan=1 width='15%'>教师类别：</td>
		<td class='list' colspan=1 rowspan=1 width='35%'><div id='person.teacherType'>
		<el-radio v-model="T_teacherType" label="1" value='0'  >教学</el-radio>
		<el-radio v-model="T_teacherType" label="2" value='1'  >管理</el-radio>

	</div></td>
		<td class='tdrowhead' colspan=1 rowspan=1 width='15%'>导师类型：</td>
		<td class='list' colspan=1 rowspan=1 width='35%'><div id='person.tutorTypeId'>	
		<el-radio v-model="T_tutorTypeId" label="1" value='1'  >博导</el-radio>
		<el-radio v-model="T_tutorTypeId" label="2" value='2'  >硕导</el-radio>
		<el-radio v-model="T_tutorTypeId" label="3" value='3'  >非导师</el-radio>
	</div></td>
	</tr>
	<tr>
		<td class='tdrowhead' colspan=1 rowspan=1 width='15%'>聘任日期：</td>
		<td class='list' colspan=1 rowspan=1 width='35%'><div id='person.employDate'> 
		<el-date-picker type='date' name='bean.employDate'  id='employDate' size=12 v-model="T_employDate"  placeholder="选择日期" suffix-icon="el-icon-date"  class="Wdate" ></el-date-picker></div></td>
		<td class='tdrowhead' colspan=1 rowspan=1 width='15%'>行政职务：</td>
		<td class='list' colspan=1 rowspan=1 width='35%'><div id='person.duty'> 
		<el-input type='text' name='bean.duty'  id='duty' size='0' maxLength = '128' ></el-input><font color=red> *</font></div></td>
	</tr>
	<tr>
		<td class='tdrowhead' colspan=1 rowspan=1 width='15%'>国籍：</td>
		<td class='list' colspan=1 rowspan=1 width='35%'><div id='person.nationalityId'>
				<el-select v-model="T_nationalityId" name='bean.nationalityId'  >
					<el-option value='' >--请选择--</el-option>
					<el-option value='中国'>中国</el-option>
					<el-option value='其他' >其他</el-option>
				</el-select></div></td>
		<td class='tdrowhead' colspan=1 rowspan=1 width='15%'>民族：</td>
		<td class='list' colspan=1 rowspan=1 width='35%'><div id='person.nationId'>
			<el-select v-model="T_nationId"  name='bean.T_nationId' placeholder="请选择">
				<el-option
				v-for="item in T_nationIds"
				:key="item.value"
				:label="item.label"
				:value="item.value">
				</el-option>
			</el-select></div></td>
	</tr>
	<tr>
		<td class='tdrowhead' colspan=1 rowspan=1 width='15%'>家庭住址：</td>
		<td class='list' colspan=1 rowspan=1 width='35%'><div id='person.address'> <el-input type='text' name='bean.address'  id='address' size='0'    maxLength = '256' ></el-input></div></td>
		<td class='tdrowhead' colspan=1 rowspan=1 width='15%'>邮政编码：</td>
		<td class='list' colspan=1 rowspan=1 width='35%'><div id='person.postalCode'> <el-input type='text' name='bean.postalCode'  id='postalCode' size=6    maxLength = '32'></el-input></div></td>
	</tr>
	<tr>
		<td class='tdrowhead' colspan=1 rowspan=1 width='15%'>住宅电话：</td>
		<td class='list' colspan=1 rowspan=1 width='35%'><div id='person.telHome'> <el-input type='text' name='bean.telHome'  id='telHome' size='0'    maxLength = '128'></el-input></div></td>
		<td class='tdrowhead' colspan=1 rowspan=1 width='15%'>办公传真：</td>
		<td class='list' colspan=1 rowspan=1 width='35%'><div id='person.faxOffice'> <el-input type='text' name='bean.faxOffice'  id='faxOffice' size='0'    maxLength = '32'></el-input></div></td>
	</tr>
	<tr>
		<td class='tdrowhead' colspan=1 rowspan=1 width='15%'>个人网址：</td>
		<td class='list' colspan=1 rowspan=1 width='35%'><div id='person.personalWebSite'> <el-input type='text' name='bean.personalWebSite'  id='personalWebSite' size='0'    maxLength = '128' ></el-input></div></td>
		<td class='tdrowhead' colspan=1 rowspan=1 width='15%'>在职情况：</td>
		<td class='list' colspan=1 rowspan=1 width='35%'><div id='person.personState'>	
		<el-radio v-model="T_personState" name='bean.personState' label="1" value='1' >在职</el-radio>
		<el-radio v-model="T_personState" name='bean.personState' label="2" value='2'  >退休</el-radio>

	</div></td>
	</tr>
	<tr>
		<td class='tdrowhead' colspan=1 rowspan=1 width='15%'>第一外语：</td>
		<td class='list' colspan=1 rowspan=1 width='35%'><div id='person.language1Id'>
				<el-select v-model="T_language1Id"  name='bean.T_language1Id' placeholder="请选择">
				<el-option
				v-for="item in T_language1Ids"
				:key="item.value"
				:label="item.label"
				:value="item.value">
				</el-option>
			</el-select></div></td>
		<td class='tdrowhead' colspan=1 rowspan=1 width='15%'>第二外语：</td>
		<td class='list' colspan=1 rowspan=1 width='35%'><div id='person.language2Id'>
				<el-select v-model="T_language2Id"  name='bean.T_language2Id' placeholder="请选择">
				<el-option
				v-for="item in T_language1Ids"
				:key="item.value"
				:label="item.label"
				:value="item.value">
				</el-option>
			</el-select></div></td>
	</tr>
	<tr>
		<td class='tdrowhead' colspan=1 rowspan=1 width='15%'>第一外语程度：</td>
		<td class='list' colspan=1 rowspan=1 width='35%'><div id='person.languageLevel1Id'>	
		<el-radio v-model="T_languageLevel1Id" name='bean.languageLevel1Id' label="1" value='1'  >精通</el-radio>
		<el-radio v-model="T_languageLevel1Id" name='bean.languageLevel1Id' label="2" value='2'  >熟练</el-radio><br>
		<el-radio v-model="T_languageLevel1Id" name='bean.languageLevel1Id' label="3" value='3'  >良好</el-radio>
		<el-radio v-model="T_languageLevel1Id" name='bean.languageLevel1Id' label="4" value='4'  >一般</el-radio>

	</div></td>
		<td class='tdrowhead' colspan=1 rowspan=1 width='15%'>第二外语程度：</td>
		<td class='list' colspan=1 rowspan=1 width='35%'><div id='person.languageLevel2Id'>	
		<el-radio v-model="T_languageLevel2Id" name='bean.languageLevel2Id' label="1" value='1'  >精通</el-radio>
		<el-radio v-model="T_languageLevel2Id" name='bean.languageLevel2Id' label="2" value='2'  >熟练</el-radio><br>
		<el-radio v-model="T_languageLevel2Id" name='bean.languageLevel2Id' label="3" value='3'  >良好</el-radio>
		<el-radio v-model="T_languageLevel2Id" name='bean.languageLevel2Id' label="4" value='4'  >一般</el-radio>
	</div></td>
	</tr>
	<tr>
		<td class='tdrowhead' colspan=1 rowspan=1 width='15%'>毕业院校信息：</td>
		<td class='list' colspan=3 rowspan=1><div id='person.graduateSchool'><el-input type="textarea" v-model="T_graduateSchool" name='bean.graduateSchool' cols=70 rows=5  ></el-input></div></td>
	</tr>
	<tr>
		<td class='tdrowhead' colspan=1 rowspan=1 width='15%'>进修情况：</td>
		<td class='list' colspan=3 rowspan=1><div id='person.learning'><el-input type="textarea" v-model="T_learning" name='bean.learning' cols=70 rows=5  ></el-input></div></td>
	</tr>
	<tr>
		<td class='tdrowhead' colspan=1 rowspan=1 width='15%'>出国经历：</td>
		<td class='list' colspan=3 rowspan=1><div id='person.experienceAbroad'><el-input type="textarea" v-model="T_experienceAbroad" name='bean.experienceAbroad' cols=70 rows=5  ></el-input></div></td>
	</tr>
	<tr>
		<td class='tdrowhead' colspan=1 rowspan=1 width='15%'>学术兼职：</td>
		<td class='list' colspan=3 rowspan=1><div id='person.parttime'><el-input type="textarea" v-model="T_parttime" name='bean.parttime' cols=70 rows=5  ></el-input></div></td>
	</tr>
	<tr>
		<td class='tdrowhead' colspan=1 rowspan=1 width='15%'>学术特长：</td>
		<td class='list' colspan=3 rowspan=1><div id='person.learnSpecialty'><el-input type="textarea" v-model="T_learnSpecialty" name='bean.learnSpecialty' cols=70 rows=5  ></el-input></div></td>
	</tr>

		</table>
  </el-tab-pane>
</el-tabs>
</div>
</el-card>
</form></div>

</template>

<script>
  export default {
    data() {  
      return {
		  activeIndex:'1',
          activeIndex2:'1',
		  T_name:'王贺',
		  T_account:'2008024	',
		  T_birthday:'1978-09-12',
		  T_sexId:'1',
		  T_unitId:'',
		  T_unitIds:[
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
		  T_eduDegreeId:'1',
		  T_eduLevelId:'1',
		  T_titleId:'',
		  T_titleIds:[
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
		 T_titleIdss:[
			{ value: '高等学校教师',label: '高等学校教师',
			  children: [{  value: '教授',label: '教授'
			  			},{  value: '副教授',label: '副教授'
						},{  value: '讲师',label: '讲师'
						},{  value: '助教',label: '助教'
			  			},{  value: '初级',label: '初级'
			  			},{  value: '其他人员',label: '其他人员'
			  			},]
			},{ value: '中等专业学校教师',label: '中等专业学校教师',
			  	children: [{  value: '高级讲师',label: '高级讲师'
			  			},{  value: '讲师',label: '讲师'
						},{  value: '助理讲师',label: '助理讲师'
						},{  value: '教员',label: '教员'
			  			},]
			},{ value: '技工学校教师（讲师）',label: '技工学校教师（讲师）',
			  	children: [{  value: '高级讲师',label: '高级讲师'
			  			},{  value: '讲师',label: '讲师'
						},{  value: '助理讲师',label: '助理讲师'
						},{  value: '教员',label: '教员'
			  			},]
			},{ value: '技工学校教师(实习指导)	',label: '技工学校教师(实习指导)	',
			  	children: [{  value: '高级实习指导教师',label: '高级实习指导教师'
			  			},{  value: '一级实习指导教师',label: '一级实习指导教师'
						},{  value: '二级实习指导教师',label: '二级实习指导教师'
						},{  value: '三级实习指导教师',label: '三级实习指导教师'
			  			},]
			},{ value: '中学教师',label: '中学教师',
			  	children: [{  value: '中学高级教师',label: '中学高级教师'
			  			},{  value: '中学一级教师',label: '中学一级教师'
						},{  value: '中学二级教师',label: '中学二级教师'
						},{  value: '中学三级教师',label: '中学三级教师'
			  			},]
			},{ value: '科学研究人员',label: '科学研究人员',
			  	children: [{  value: '研究员',label: '研究员'
			  			},{  value: '副研究员',label: '副研究员'
						},{  value: '助理研究员',label: '助理研究员'
						},{  value: '研究实习员',label: '研究实习员'
			  			},]
			},{ value: '实验人员',label: '实验人员',
			  	children: [{  value: '高级实验师',label: '高级实验师'
						},{  value: '实验师',label: '实验师'
						},{  value: '助理实验师',label: '助理实验师'
			  			},{  value: '实验员',label: '实验员'
			  			},]
			},{ value: '工程技术人员',label: '工程技术人员',
			  	children: [{  value: '高级工程师',label: '高级工程师'
						},{  value: '工程师',label: '工程师'
						},{  value: '助理工程师',label: '助理工程师'
			  			},{  value: '技术员',label: '技术员'
			  			},]
			},{ value: '经济专业人员',label: '经济专业人员',
			  	children: [{  value: '高级经济师',label: '高级经济师'
						},{  value: '经济师',label: '经济师'
						},{  value: '助理经济师',label: '助理经济师'
			  			},{  value: '经济员',label: '经济员'
			  			},]
			},{ value: '会计人员',label: '会计人员',
			  	children:[{  value: '高级会计师',label: '高级会计师'
						},{  value: '会计师',label: '会计师'
						},{  value: '助理会计师',label: '助理会计师'
			  			},{  value: '会计员',label: '会计员'
			  			},]
			},{ value: '统计人员',label: '统计人员',
			  	children: [{  value: '高级统计师',label: '高级统计师'
						},{  value: '统计师',label: '统计师'
						},{  value: '助理统计师',label: '助理统计师'
			  			},{  value: '统计员',label: '统计员'
			  			},]
			},{ value: '出版专业人员（编审）',label: '出版专业人员（编审）',
			  	children: [{  value: '编审',label: '编审'
						},{  value: '副编审',label: '副编审'
						},{  value: '编辑',label: '编辑'
			  			},{  value: '助理编辑',label: '助理编辑'
			  			},{  value: '其他人员',label: '其他人员'
			  			},]
			},{ value: '图书、文博、档案、资料人员',label: '图书、文博、档案、资料人员',
			  	children: [{  value: '研究馆员',label: '研究馆员'
						},{  value: '副研究馆员',label: '副研究馆员'
						},{  value: '馆员',label: '馆员'
			  			},{  value: '助理馆员',label: '助理馆员'
			  			},{  value: '管理员',label: '管理员'
			  			},]
			},{ value:'政工',label: '政工',
			  	children: [{  value: '高级政工师',label: '高级政工师'
						},{  value: '政工师',label: '政工师'
						},{  value: '助理政工师',label: '助理政工师'
			  			},{  value: '政工员',label: '政工员'
			  			},]
			}],
		 T_positionType:'',
		 T_positionTypes:[
			{ value:'',label:'--请选择--'
			},{ value:'专职科研人员',label:'专职科研人员'
			},{ value:'学科建设骨干教师',label:'学科建设骨干教师'
			},{ value:'教学科研型教师',label:'教学科研型教师'
			},{ value:'教学型教师',label:'教学型教师'
			},{ value:'其他专业技术人员',label:'其他专业技术人员'
			}],
		 T_dutyDate:'',
		 T_honorTitleId:'',
		 T_subjectClassId:'',
		 T_isStat:'',
		 T_subjectId:'',
		 T_subjectIds:[
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
		 T_subject2Id:'',
		 T_subject2Ids:[
			{ value:'',label:'--请选择--'
			},{ value:'马、恩、列、斯思想研究',label:'马、恩、列、斯思想研究'
			},{ value:'毛泽东思想研究',label:'毛泽东思想研究'
			},{ value:'马克思主义思想史',label:'马克思主义思想史'
			},{ value:'科学社会主义',label:'科学社会主义'
			},{ value:'社会主义运动史',label:'社会主义运动史'
			},{ value:'国外马克思主义研究',label:'国外马克思主义研究'
			},{ value:'马克思主义其他学科',label:'马克思主义其他学科'
			}],
		 T_subject3Id:'',
		 T_hrUnitId:'',
		 T_mobile:'',
		 T_researchField:'',
		 T_standby10:'',
		 T_telOffice:'',
		 T_email:'',
		 T_nameEn:'',
		 T_polityId:'',
		 T_polityIds:[
			{ value:'',label:'--请选择--'
			},{ value:'中共党员',label:'中共党员'
			},{ value:'中共预备党员',label:'中共预备党员'
			},{ value:'共青团员',label:'共青团员'
			},{ value:'民革党员',label:'民革党员'
			},{ value:'民盟盟员',label:'民盟盟员'
			},{ value:'民建会员',label:'民建会员'
			},{ value:'民进会员',label:'民进会员'
			},{ value:'农工党员',label:'农工党员'
			},{ value:'致公党员',label:'致公党员'
			},{ value:'九三社员',label:'九三社员'
			},{ value:'台盟盟员',label:'台盟盟员'
			},{ value:'无党派民主人士',label:'无党派民主人士'
			},{ value:'群众',label:'群众'
			},{ value:'其他',label:'其他'
			}],
		 T_subjectCorrelationId:'',
		 T_idCard:'',
		 T_teacherType:'',
		 T_tutorTypeId:'',
		 T_employDate:'',
		 T_duty:'',
		 T_nationalityId:'',
		 T_nationId:'',
		 T_nationIds:[
			{ value:'',label:'--请选择--'
			},{ value:'01',label:'汉族'
			},{ value:'02',label:'蒙古族'
			},{ value:'03',label:'回族'
			},{ value:'04',label:'藏族'
			},{ value:'05',label:'维吾尔族'
			},{ value:'06',label:'苗族'
			},{ value:'07',label:'彝族'
			},{ value:'08',label:'壮族'
			},{ value:'09',label:'布依族'
			},{ value:'10',label:'朝鲜族'
			},{ value:'11',label:'满族'
			},{ value:'12',label:'侗族'
			},{ value:'13',label:'瑶族'
			},{ value:'14',label:'白族'
			},{ value:'15',label:'土家族'
			},{ value:'16',label:'哈尼族'
			},{ value:'17',label:'哈萨克族'
			},{ value:'18',label:'傣族'
			},{ value:'19',label:'黎族'
			},{ value:'20',label:'傈僳族'
			},{ value:'21',label:'佤族'
			},{ value:'22',label:'畲族'
			},{ value:'23',label:'高山族'
			},{ value:'24',label:'拉祜族'
			},{ value:'25',label:'水族'
			},{ value:'26',label:'东乡族'
			},{ value:'27',label:'纳西族'
			},{ value:'28',label:'景颇族'
			},{ value:'29',label:'柯尔克孜族'
			},{ value:'30',label:'土族'
			},{ value:'31',label:'达斡尔族'
			},{ value:'32',label:'仫佬族'
			},{ value:'33',label:'羌族'
			},{ value:'34',label:'布朗族'
			},{ value:'35',label:'撒拉族'
			},{ value:'36',label:'毛难族'
			},{ value:'37',label:'仡佬族'
			},{ value:'38',label:'锡伯族'
			},{ value:'39',label:'阿昌族'
			},{ value:'40',label:'普米族'
			},{ value:'41',label:'塔吉克族'
			},{ value:'42',label:'怒族'
			},{ value:'43',label:'乌孜别克族'
			},{ value:'44',label:'俄罗斯族'
			},{ value:'45',label:'鄂温克族'
			},{ value:'46',label:'德昂族'
			},{ value:'47',label:'保安族'
			},{ value:'48',label:'裕固族'
			},{ value:'49',label:'京族'
			},{ value:'50',label:'塔塔尔族'
			},{ value:'51',label:'独龙族'
			},{ value:'52',label:'鄂伦春族'
			},{ value:'53',label:'赫哲族'
			},{ value:'54',label:'门巴族'
			},{ value:'55',label:'珞巴族'
			},{ value:'56',label:'基诺族'
			},{ value:'99',label:'其他'
			}],
		 T_address:'',
		 T_postalCode:'',
		 T_telHome:'',
		 T_faxOffice:'',
		 T_personalWebSite:'',
		 T_personState:'',
		 T_language1Id:'',
		 T_language2Id:'',
		 T_language1Ids:[
			{ value:'',label:'--请选择--'
			},{ value:'ru',label:'俄语'
			},{ value:'pt',label:'葡萄牙语'
			},{ value:'pl',label:'波兰语'
			},{ value:'la',label:'拉丁语'
			},{ value:'ko',label:'朝鲜语'
			},{ value:'ja',label:'日语'
			},{ value:'iw',label:'希伯莱语'
			},{ value:'it',label:'意大利语'
			},{ value:'hu',label:'匈牙利语'
			},{ value:'fr',label:'法语'
			},{ value:'es',label:'西班牙语'
			},{ value:'en',label:'英语'
			},{ value:'de',label:'德语'
			},{ value:'ar',label:'阿拉伯语'
			},{ value:'99',label:'其他'
			}],
		 T_language2Id:'',
		 T_languageLevel1Id:'',
		 T_languageLevel2Id:'',
		 T_graduateSchool:'',
		 T_learning:'',
		 T_experienceAbroad:'',
		 T_parttime:'',
		 T_learnSpecialty:'',
		 T_divisionId:'',
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>


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


	
	
	
	
				