<template>
 <el-form ref="form" :model="form" label-width="170px" >
<el-card class="box-card">
      <div slot="header" class="clearfix">
       <span >基本信息</span>
     <el-button style="float: right; padding: 3px 0" type="text">查询</el-button>
     <el-button style="float: right; padding: 3px 0" type="text">清空</el-button>
       </div>
    <el-form-item label="学科门类：">
    <el-radio-group v-model="form.resource">
      <el-radio label="科技类"></el-radio>
      <el-radio label="社科类"></el-radio>
    </el-radio-group>
  </el-form-item>

  <el-form-item label="项目名称" style="width:700px ">
    <el-input v-model="form.projectName"></el-input>
  </el-form-item>

<el-form-item label="项目编号" style="width:700px ">
    <el-input v-model="form.projectCode"></el-input>
  </el-form-item>

 <el-form-item label="负责人类型" style="width:700px ">
    <el-select v-model="form.chargerType" placeholder="--请选择--">
        <el-option label='本校老师' value=""></el-option>
		<el-option label='本校学生' value=""></el-option>
		<el-option label='外校人员' value=""></el-option>
    </el-select>
 </el-form-item>

<el-form-item label="负责人" style="width:700px ">
    <el-input v-model="form.chargerName"></el-input>
</el-form-item>
  
<el-form-item label="所属单位">
    <el-select v-model="form.projectunitId" placeholder="--请选择--">
                    <el-option value='' >--请选择--</el-option>
					<el-option value=''  label='教育学院(师范学院)'></el-option>
					<el-option value=''  label='经济与管理学院'></el-option>
					<el-option value=''  label='生态环境与建筑工程学院'></el-option>
					<el-option value=''  label='文学与传媒学院'></el-option>
					<el-option value=''  label='城市学院'></el-option>
					<el-option value=''  label='电子工程与智能化学院'></el-option>
					<el-option value=''  label='法律与社会工作学院（知识产权学院'></el-option>
					<el-option value=''  label='工程技术研究院'></el-option>
					<el-option value=''  label='化学工程与能源技术学院'></el-option>
					<el-option value=''  label='机械工程学院'></el-option>
					<el-option value=''  label='计算机与网络安全学院'></el-option>
					<el-option value=''  label='继续教育学院'></el-option>
					<el-option value=''  label='科技产业公司'></el-option>
					<el-option value=''  label='科技创新研究院'></el-option>
					<el-option value=''  label='离职人员'></el-option>
					<el-option value=''  label='马克思主义学院'></el-option>
					<el-option value=''  label='清洁生产科技中心'></el-option>
					<el-option value=''  label='社会发展研究院'></el-option>
					<el-option value=''  label='体育中心（挂靠体育系）'></el-option>
					<el-option value=''  label='图书馆'></el-option>
					<el-option value=''  label='退休部门'></el-option>
					<el-option value=''  label='莞城校区管委会'></el-option>
					<el-option value=''  label='网络空间安全学院'></el-option>
					<el-option value=''  label='网络与教育技术中心'></el-option>
					<el-option value=''  label='学报'></el-option>
					<el-option value=''  label='学术交流中心'></el-option>
					<el-option value=''  label='粤台产业科技学院'></el-option>
					<el-option value=''  label='知识产权中心（挂靠政法学院）'></el-option>
					<el-option value=''  label='中法联合学院'></el-option>
					<el-option value=''  label='组织部'></el-option>
					<el-option value=''  label='保卫处'></el-option>
					<el-option value=''  label='财务处'></el-option>
					<el-option value=''  label='发展规划处'></el-option>
					<el-option value=''  label='高教研究与评估中心'></el-option>
					<el-option value=''  label='工会'></el-option>
					<el-option value=''  label='国际交流处'></el-option>
					<el-option value=''  label='后勤集团'></el-option>
					<el-option value=''  label='教师发展中心'></el-option>
					<el-option value=''  label='教务处'></el-option>
					<el-option value=''  label='科研处'></el-option>
					<el-option value=''  label='人事处'></el-option>
					<el-option value=''  label='人事代理服务处'></el-option>
					<el-option value=''  label='审计监察处'></el-option>
					<el-option value=''  label='团委'></el-option>
					<el-option value=''  label='校领导'></el-option>
					<el-option value=''  label='协同发展创新办公室'></el-option>
					<el-option value=''  label='宣传部'></el-option>
					<el-option value=''  label='学科建设办'></el-option>
					<el-option value=''  label='学生处'></el-option>
					<el-option value=''  label='学校办公室'></el-option>
					<el-option value=''  label='资产后勤管理处'></el-option>
					<el-option value=''  label='广东高校网络与信息安全工程技术开发中心'></el-option>
					<el-option value=''  label='广东高校网络与信息安全工程开发中心'></el-option>
					<el-option value=''  label='广东省科协海智计划东莞理工学院'></el-option>
					<el-option value=''  label='广东省社会科学研究基地--东莞理工学院质量与品牌发展研究中心'></el-option>
					<el-option value=''  label='广东省无线传感器网络系统及应用工程技术研究中心'></el-option>
					<el-option value=''  label='新时代价值与文化研究中心'></el-option>
					<el-option value=''  label='广东高校网络与信息安全工程技术开发中心'></el-option>
					<el-option value=''  label='生态环境工程技术研发中心'></el-option>
    </el-select>
  </el-form-item>
<el-form-item label="学科分类">
    <el-select v-model="form.projectsubjectId" placeholder="--请选择--">
        <el-option value='' >--请选择--</el-option>
					<el-option value='' label=' 管理学'></el-option>
					<el-option value='' label='马克思主义'></el-option>
					<el-option value='' label='哲学'></el-option>
					<el-option value='' label='宗教学'></el-option>
					<el-option value='' label='语言学'></el-option>
					<el-option value='' label='文学'></el-option>
					<el-option value='' label='艺术学'></el-option>
					<el-option value='' label='历史学'></el-option>
					<el-option value='' label='考古学'></el-option>
					<el-option value='' label='经济学'></el-option>
					<el-option value='' label='政治学'></el-option>
					<el-option value='' label='法学'></el-option>
					<el-option value='' label='军事学'></el-option>
					<el-option value='' label='社会学'></el-option>
					<el-option value='' label='民族学与文化学'></el-option>
					<el-option value='' label='新闻学与传播学'></el-option>
					<el-option value='' label='图书馆、情报与文献学'></el-option>
					<el-option value='' label='教育学'></el-option>
					<el-option value='' label='体育科学'></el-option>
					<el-option value='' label='统计学'></el-option>
    </el-select>
  </el-form-item>
  

<el-form-item label="项目成员职工号" style="width:700px ">
    <el-input v-model="form.projectmembersauthorCode"></el-input>
</el-form-item>


<el-form-item label="项目级别以及分类" style="width:700px ">
      <el-cascader
    expand-trigger="hover"
    :options="options"
    v-model="selectedOptions2"
    @change="handleChange">
  </el-cascader>
</el-form-item>
 
 <el-form-item label="批准号" style="width:700px ">
    <el-input v-model="form.projectauthorizeSn"></el-input>
</el-form-item>
 <el-form-item label="项目来源单位" style="width:700px ">
    <el-input v-model="form.projectSourceUnit"></el-input>
</el-form-item>

 <el-form-item label="是否学科建设平台建设：">
    <el-radio-group v-model="form.isSubjectBuilding">
      <el-radio label="是"></el-radio>
      <el-radio label="否"></el-radio>
    </el-radio-group>
  </el-form-item>
<el-form-item label="是否学科共建设项目：">
    <el-radio-group v-model="form.isSubjectBuildingProject">
      <el-radio label="是"></el-radio>
      <el-radio label="否"></el-radio>
    </el-radio-group>
  </el-form-item>

<el-form-item label="是否含有专项经费：">
    <el-radio-group v-model="form.isSpecialFee">
      <el-radio label="是"></el-radio>
      <el-radio label="否"></el-radio>
    </el-radio-group>
  </el-form-item>

<el-form-item label="承担单位排名：">
    <el-radio-group v-model="form.continueUnitOrder">
      <el-radio label="第一单位"></el-radio>
      <el-radio label="非第一单位"></el-radio>
    </el-radio-group>
  </el-form-item>
<el-form-item label="是否为子课题：">
    <el-radio-group v-model="form.isSubProject">
      <el-radio label="是"></el-radio>
      <el-radio label="否"></el-radio>
    </el-radio-group>
  </el-form-item>
<el-form-item label="子课题数:">
     <el-input-number v-model="num8" controls-position="right" @change="handleChange" :min="1" :max="10"></el-input-number>
</el-form-item>

   <el-form-item label="项目状态：">
    <el-radio-group v-model="form.projectStatusId">
      <el-radio label="进行"></el-radio>
      <el-radio label="完成"></el-radio>
      <el-radio label="延期"></el-radio>
      <el-radio label="撤销"></el-radio>
    </el-radio-group>
  </el-form-item>

  <el-form-item label="立项日期">
    <el-date-picker
      v-model="starttime"
      type="daterange"
      align="right"
      unlink-panels
      range-separator="至"
      start-placeholder="开始日期"
      end-placeholder="结束日期"
      :picker-options="pickerOptions2">
    </el-date-picker>
  </el-form-item>

  <el-form-item label="计划完成日期">
    <el-date-picker
      v-model="endtime"
      type="daterange"
      align="right"
      unlink-panels
      range-separator="至"
      start-placeholder="开始日期"
      end-placeholder="结束日期"
      :picker-options="pickerOptions2">
    </el-date-picker>
  </el-form-item>
 <el-form-item label="合同经费" style="width:700px ">
    <el-input v-model="form.projectfeeAuthorize"></el-input>
</el-form-item>
<!--参与人员-->
<el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      fixed
      prop="title_orderId"
      label="署名顺序"
      width="120">
    </el-table-column>
    <el-table-column
      prop="title_authorType"
      label="人员来源"
      width="120">
    </el-table-column>
    <el-table-column
      prop="title_personName"
      label="成员姓名"
      width="120">
    </el-table-column>
    <el-table-column
      prop="title_sexId"
      label="成员性别"
      width="120">
    </el-table-column>
    <el-table-column
      prop="title_authorCode"
      label="成员职工号"
      width="120">
    </el-table-column>
    <el-table-column
      prop="title_subjectId"
      label="学科方向"
      width="120">
    </el-table-column>
     <el-table-column
      prop="title_titleId"
      label="职称"
      width="120">
    </el-table-column>
     <el-table-column
      prop="title_eduLevelId"
      label="学历"
      width="120">
    </el-table-column>
     <el-table-column
      prop="title_workUnitName"
      label="工作单位"
      width="120">
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="100">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
      </template>
    </el-table-column>
  </el-table>

 <el-form-item label="项目来源">
    <el-select v-model="form.projectSourceId" placeholder="--请选择--">
			<el-option value='' >--请选择--</el-option>
					<el-option value='03' label='国家社科基金单列学科项目'></el-option>
					<el-option value='04' label='国家社科基金项目'></el-option>
					<el-option value='05' label='教育部人文社科研究项目'></el-option>
					<el-option value='051' label='全国教育科学规划（教育部）项目'></el-option>
					<el-option value='06' label='国家自然科学基金项目'></el-option>
					<el-option value='07' label='中央其他部门社科专门项目'></el-option>
					<el-option value='08' label='高校古籍整理研究项目'></el-option>
					<el-option value='09' label='省、市、自治区社科基金项目'></el-option>
					<el-option value='10' label='省教育厅社科项目'></el-option>
					<el-option value='11' label='地、市、厅、局等政府部门项目'></el-option>
					<el-option value='12' label='国际合作研究项目'></el-option>
					<el-option value='13' label='与港、澳、台合作研究项目'></el-option>
					<el-option value='14' label='企事业单位委托项目'></el-option>
					<el-option value='15' label='外资项目'></el-option>
					<el-option value='16' label='学校社科项目'></el-option>
					<el-option value='99' label='其他研究项目'></el-option>
					<el-option value='999' label='无依托项目研究成果'></el-option>
    </el-select>
 </el-form-item>

 <el-form-item label="研究类别">
    <el-select v-model="form.researchClassId" placeholder="--请选择--">
			<el-option value='' >--请选择--</el-option>
			<el-option value='A' label='基础研究'></el-option>
			<el-option value='B' label='实验与发展'></el-option>
			<el-option value='C' label='应用研究'></el-option>
    </el-select>
 </el-form-item>
 <el-form-item label="合作形式">
    <el-select v-model="form.cooperateId" placeholder="--请选择--">
				<el-option value='' >--请选择--</el-option>
					<el-option value='1' label='与境外机构合作'></el-option>
					<el-option value='2' label='与国内高校合作'></el-option>
					<el-option value='3' label='与国内独立研究机构合作'></el-option>
					<el-option value='4' label='与境内注册外商独资企业合作'></el-option>
					<el-option value='5' label='与境内注册其他企业合作'></el-option>
					<el-option value='6' label='独立完成'></el-option>
					<el-option value='7' label='其他'></el-option>
    </el-select>
 </el-form-item>
 <el-form-item  label="备注" style="width:700px " >
    <el-input
  type="textarea"
  :rows="5"
  placeholder="请输入内容"
  v-model="textarea" >
</el-input>
 </el-form-item>
  </el-card>
 </el-form>

</template>

<style>
  .box-card {
    width: 480px;
  }
  .text {
    font-size: 22px;
    color: #000;
  }
  .item {
    margin-bottom: 100px;
  }
  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  } 
  .box-card {
    width: 1200px;
  }
</style>
<script>
  export default {
    data() {
      return {
        form: {
          resource:'',
          projectName:'',
          projectCode:'',
          chargerName:'',
          projectmembersauthorCode:'',
          projectLevelId:'',
          projectStatusId:'', 
         starttime:'',
         num8: 1,
         endtime:'',
         chargerType:'',
         projectunitId:'',
         projectsubjectId:'',
projectmembersauthorCode:'',
projectauthorizeSn:'',
projectSourceUnit:'',
isSubjectBuilding:'',
isSubjectBuildingProject:'',
isSpecialFee:'',
continueUnitOrder:'',
isSubProject:'',
projectStatusId:'',
projectfeeAuthorize:'',
projectSourceId:'',
researchClassId:'',
cooperateId:'',
textarea:''
        },
        pickerOptions2: {
          shortcuts: [{
            text: '最近一周',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近一个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近三个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit('pick', [start, end]);
            }
          }]
        },
         options: [{
          value: 'AAAA',
          label: '国家级',
          children: [{
            value: '1',
            label: '国家级重大项目',
          },
            {
            value: '2',
            label: '国家级重点实验室',
            },
            {
              value: '3',
              label: '国家重点实验室培育基础'
            },
             {
              value: '4',
              label: '中央财政支持地方高校发展专项资金项目'
            },
             {
              value: '5',
              label: '国家火炬计划项目'
            },
             {
              value: '6',
              label: '863计划项目'
            },
             {
              value: '7',
              label: '973项目'
            },
             {
              value: '8',
              label: '全国教育科学研究项目'
            },
             {
              value: '9',
              label: '欧盟项目'
            },
             {
              value: '10',
              label: '体育总局社会科学研究项目'
            },
             {
              value: '11',
              label: '国家级一般项目'
            },
             {
              value: '12',
              label: '国家级重点项目'
            },
             {
              value: '13',
              label: '国家科技重大专项项目'
            },
             {
              value: '14',
              label: '国家重点研发计划'
            },
             {
              value: '15',
              label: '国家自然科技基金重点项目'
            },
             {
              value: '16',
              label: '国家自然科技基金面上项目'
            },
             {
              value: '17',
              label: '国家自然科技基金青年基金项目'
            },
             {
              value: '18',
              label: '国家科学技术学术著作出版基金资助项目'
            },
             {
              value: '19',
              label: '国家科学技术学术著作出版基金资助项目'
            },
             {
              value: '20',
              label: '国家科学技术学术著作出版基金资助项目'
            },
             {
              value: '21',
              label: '国家社会科学基金重大项目'
            },
             {
              value: '22',
              label: '国家社会科学基金重点项目'
            },
             {
              value: '23',
              label: '国家哲学社会科学成果文库项目'
            },
             {
              value: '24',
              label: '国家优秀青年科学基金项目'
            },
             {
              value: '25',
              label: '国家自然科学基金重点项目'
            },
            ]},
         {
          value: 'AAA',
          label: '省级',
          children: [{
            value: '1',
            label: '省部级项目',
          },
            {
            value: '2',
            label: '省级重点学科',
            },
            {
              value: '3',
              label: '国务院部委重点实验室'
            },
             {
              value: '4',
              label: '省级重点学科'
            },
             {
              value: '5',
              label: '国务院部委级重点实验室'
            },
             {
              value: '6',
              label: '省级重点实验室'
            },
             {
              value: '7',
              label: '教育部人文社会科学重点研究基地'
            },
             {
              value: '8',
              label: '省级人文社会科学重点研究基地'
            },
             {
              value: '9',
              label: '省高校人文社会科学重点研究基地'
            },
             {
              value: '10',
              label: '教育部人文社科项目'
            },
             {
              value: '11',
              label: '广东省哲学社会科学规划项目'
            },
             {
              value: '12',
              label: '教育部留学归国人员项目'
            },
             {
              value: '13',
              label: '广东省教育科学规划项目'
            },
             {
              value: '14',
              label: '粤港合作项目'
            },
             {
              value: '15',
              label: '全国艺术科学规划文化部课题'
            },
             {
              value: '16',
              label: '国家自然科技基金面上项目'
            },
             {
              value: '17',
              label: '国务院侨务办公室项目'
            },
             {
              value: '18',
              label: '省自然科学基金项目'
            },
             {
              value: '19',
              label: '中国科学院高能所研究项目'
            },
             {
              value: '20',
              label: '省部产学研项目'
            },
             {
              value: '21',
              label: '中国科学院高能研究所项目'
            },
             {
              value: '22',
              label: '省部产学研项目'
            },
             {
              value: '23',
              label: '省信息产业发展专项'
            },
             {
              value: '24',
              label: '广东省高科技发展专项资金项目'
            },
             {
              value: '25',
              label: '广东重大科技专项资金项目'
            },
               {
              value: '26',
              label: '广东省科技计划项目'
            },
             {
              value: '27',
              label: '高等教育创新强校工程专项'
            },
             {
              value: '28',
              label: '民政部项目'
            },
               {
              value: '29',
              label: '国家语委科研规划项目'
            },
             {
              value: '30',
              label: '广东省工程技术研究中心'
            },
             {
              value: '31',
              label: '广东省软科学项目'
            },
               {
              value: '32',
              label: '中国工程院咨询研究项目'
            },
             {
              value: '33',
              label: '中科院战略性先导科技专项项目'
            },
             {
              value: '34',
              label: '教育部创新团队项目'
            },
                {
              value: '35',
              label: '教育部中国高校十大科技进展项目'
            },
               {
              value: '36',
              label: '广东省自然科学基金研究团队项目'
            },
             {
              value: '37',
              label: '教育部科学技术研究项目'
            },
             {
              value: '38',
              label: '广东省自然科学基金重点项目'
            },
             {
              value: '39',
              label: '教育部哲学社会科学重大课题项目'
            }
            ]},
            {
          value: 'AA',
          label: '市级',
          children: [{
            value: '1',
            label: '市厅级项目',
          },
            {
            value: '2',
            label: '市级公共科技创新平台',
            },
            {
              value: '3',
              label: '市级重点实验室'
            },
             {
              value: '4',
              label: '市级人文社会科学重点研究基地'
            },
             {
              value: '5',
              label: '广东省高校优秀青年创新人才培养计划项目'
            },
             {
              value: '6',
              label: '教育厅人文科技一般项目'
            },
             {
              value: '7',
              label: '教育部科技创新项目'
            },
             {
              value: '8',
              label: '中国高等教育学会项目'
            },
             {
              value: '9',
              label: '教育厅自然科学研究项目'
            },
             {
              value: '10',
              label: '高校教育科学研究项目'
            },
             {
              value: '11',
              label: '市社会科技发展项目'
            },
             {
              value: '12',
              label: '东莞市社科联项目'
            },
             {
              value: '13',
              label: '东莞市社科发展项目'
            },
             {
              value: '14',
              label: '东莞市各部门委托项目'
            },
             {
              value: '15',
              label: '广东省教育厅思想政治教育课题'
            },
             {
              value: '16',
              label: '广东省交通厅项目'
            },
             {
              value: '17',
              label: '广东省知识产权局项目'
            },
             {
              value: '18',
              label: '广东省会计学会项目'
            },
             {
              value: '19',
              label: '东莞市产学研合作项目'
            },
             {
              value: '20',
              label: '东莞软科学项目'
            },
             {
              value: '21',
              label: '东莞市科普项目'
            }
            ]},
          {
          value: 'A',
          label: '小级',
          children: [{
            value: '1',
            label: '校级项目',
          },
            {
            value: '2',
            label: '广东省优秀青年教育培养计划',
            }
         ]}
         ],

         tableData: [{
        title_orderId:'',
        title_authorType:'',
title_personName:'',
title_sexId:'',
title_authorCode:'',
title_subjectId:'',
title_titleId:'',
title_eduLevelId:'',
title_workUnitName:'',
        }]
         }
  },
   methods: {
      onSubmit() {
        console.log('submit!');
      },
        handleChange(value) {
        console.log(value);
      }
    }
  }
</script>


