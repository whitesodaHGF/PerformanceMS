<template>
 <el-form ref="HPROJECT"  model="Hproject"  label-width="170px" >
<el-card class="box-card">
      <div slot="header" class="clearfix">
        <span >基本信息</span>
     <el-button style="float: right; padding: 3px 0" type="text" @click="hprojectsave">保存</el-button>
     <el-button style="float: right; padding: 3px 0" type="text">清空</el-button>
       </div>
  <el-row>
  <el-col :span=12>
    <el-form-item label="学科门类" prop="H_contractsubjectClassId">
    <el-radio-group v-model="Hproject.H_contractsubjectClassId">
      <el-radio label="科技类"></el-radio>
      <el-radio label="社科类"></el-radio>
    </el-radio-group>
  </el-form-item> 
  </el-col>
  <el-col :span=12>
     <el-form-item label="学科分类" style="width:600px " prop="H_contractsubjectId">
    <el-select v-model="Hproject.H_contractsubjectId" placeholder="--请选择--">
      <el-option value='' >--请选择--</el-option>
      <el-option value='管理学' >管理学</el-option>
      <el-option value='马克思主义' >马克思主义</el-option>
      <el-option value='哲学' >哲学</el-option>
      <el-option value='宗教学' >宗教学</el-option>
      <el-option value='语言学' >语言学</el-option>
      <el-option value='文学' >文学</el-option>
      <el-option value='艺术学' >艺术学</el-option>
      <el-option value='历史学' >历史学</el-option>
      <el-option value='考古学' >考古学</el-option>
      <el-option value='经济学' >经济学</el-option>
      <el-option value='政治学' >政治学</el-option>
      <el-option value='法学' >法学</el-option>
      <el-option value='军事学' >军事学</el-option>
      <el-option value='社会学' >社会学</el-option>
      <el-option value='民族学与文化学' >民族学与文化学</el-option>
      <el-option value='新闻学与传播学' >新闻学与传播学</el-option>
      <el-option value='图书馆、情报与文献学' >图书馆、情报与文献学</el-option>
      <el-option value='教育学' >教育学</el-option>
      <el-option value='体育科学' >体育科学</el-option>
      <el-option value='统计学' >统计学</el-option>

    </el-select>
 </el-form-item>
  </el-col>
</el-row>
<el-row>
<el-col :span=12>
<el-form-item label="合同编号" style="width:600px " prop="H_contractcode">
    <el-input v-model="Hproject.H_contractcode"></el-input>
</el-form-item> 
</el-col>
<el-col :span=12>
 <el-form-item label="负责人类型" style="width:600px " prop="H_contractchargerType">
    <el-select v-model="Hproject.H_contractchargerType" placeholder="--请选择--">
        <el-option label='本校老师' value="本校老师"></el-option>
	    	<el-option label='本校学生' value="本校学生"></el-option>
		    <el-option label='外校人员' value="外校人员"></el-option>
    </el-select>
 </el-form-item>
  </el-col>
</el-row>

  <el-row>
  <el-col :span=12>
<el-form-item label="负责人" style="width:600px " prop="H_contractchargerName">
    <el-input v-model="Hproject.H_contractchargerName"></el-input>
</el-form-item> 
  </el-col>
  <el-col :span=12>
 <el-form-item label="负责人电话" style="width:600px " prop="H_contractchargerNametel">
    <el-input v-model="Hproject.H_contractchargerNametel"></el-input>
 </el-form-item>
  </el-col>
</el-row>

<el-row>
<el-col :span=12>
<el-form-item label="合同类别" style="width:600px " prop="H_contractType">
      <el-select v-model="Hproject.H_contractType" placeholder="--请选择--">
          <el-option label='开发' value="开发"></el-option>
          <el-option label='转让' value="转让"></el-option>
          <el-option label='咨询' value="咨询"></el-option>
          <el-option label='服务' value="服务"></el-option>
          <el-option label='培训类' value="培训类"></el-option>
          <el-option label='非我校实际实施类' value="非我校实际实施类"></el-option>
    </el-select>
</el-form-item>
</el-col>

<el-col :span=12>
<el-form-item label="承接单位" prop="H_contractunitId" >
    <el-select v-model="Hproject.H_contractunitId" placeholder="--请选择--">
          <el-option value='' >--请选择--</el-option>
					<el-option value='教育学院(师范学院)'  label='教育学院(师范学院)'></el-option>
					<el-option value='经济与管理学院'  label='经济与管理学院'></el-option>
					<el-option value='生态环境与建筑工程学院'  label='生态环境与建筑工程学院'></el-option>
					<el-option value='文学与传媒学院'  label='文学与传媒学院'></el-option>
					<el-option value='城市学院'  label='城市学院'></el-option>
					<el-option value='电子工程与智能化学院'  label='电子工程与智能化学院'></el-option>
					<el-option value='法律与社会工作学院（知识产权学院'  label='法律与社会工作学院（知识产权学院'></el-option>
					<el-option value='工程技术研究院'  label='工程技术研究院'></el-option>
					<el-option value='化学工程与能源技术学院'  label='化学工程与能源技术学院'></el-option>
					<el-option value='机械工程学院'  label='机械工程学院'></el-option>
					<el-option value='计算机与网络安全学院'  label='计算机与网络安全学院'></el-option>
					<el-option value='继续教育学院'  label='继续教育学院'></el-option>
					<el-option value='科技产业公司'  label='科技产业公司'></el-option>
					<el-option value='科技创新研究院'  label='科技创新研究院'></el-option>
					<el-option value='离职人员'  label='离职人员'></el-option>
					<el-option value='马克思主义学院'  label='马克思主义学院'></el-option>
					<el-option value='清洁生产科技中心'  label='清洁生产科技中心'></el-option>
					<el-option value='清洁生产科技中心'  label='社会发展研究院'></el-option>
					<el-option value='体育中心（挂靠体育系）'  label='体育中心（挂靠体育系）'></el-option>
					<el-option value='图书馆'  label='图书馆'></el-option>
					<el-option value='退休部门'  label='退休部门'></el-option>
					<el-option value='莞城校区管委会'  label='莞城校区管委会'></el-option>
					<el-option value='网络空间安全学院'  label='网络空间安全学院'></el-option>
					<el-option value='网络与教育技术中心'  label='网络与教育技术中心'></el-option>
					<el-option value='学报'  label='学报'></el-option>
					<el-option value='学术交流中心'  label='学术交流中心'></el-option>
					<el-option value='粤台产业科技学院'  label='粤台产业科技学院'></el-option>
					<el-option value='知识产权中心（挂靠政法学院）'  label='知识产权中心（挂靠政法学院）'></el-option>
					<el-option value='中法联合学院'  label='中法联合学院'></el-option>
					<el-option value='组织部'  label='组织部'></el-option>
					<el-option value='保卫处'  label='保卫处'></el-option>
					<el-option value='财务处'  label='财务处'></el-option>
					<el-option value='发展规划处'  label='发展规划处'></el-option>
					<el-option value='高教研究与评估中心'  label='高教研究与评估中心'></el-option>
					<el-option value='工会'  label='工会'></el-option>
					<el-option value='国际交流处'  label='国际交流处'></el-option>
					<el-option value='后勤集团'  label='后勤集团'></el-option>
					<el-option value='教师发展中心'  label='教师发展中心'></el-option>
					<el-option value='教务处'  label='教务处'></el-option>
					<el-option value='科研处'  label='科研处'></el-option>
					<el-option value='人事处'  label='人事处'></el-option>
					<el-option value='人事代理服务处'  label='人事代理服务处'></el-option>
					<el-option value='审计监察处'  label='审计监察处'></el-option>
					<el-option value='团委'  label='团委'></el-option>
					<el-option value='校领导'  label='校领导'></el-option>
					<el-option value='协同发展创新办公室'  label='协同发展创新办公室'></el-option>
					<el-option value='宣传部'  label='宣传部'></el-option>
					<el-option value='学科建设办'  label='学科建设办'></el-option>
					<el-option value='学生处'  label='学生处'></el-option>
					<el-option value='学校办公室'  label='学校办公室'></el-option>
					<el-option value='资产后勤管理处'  label='资产后勤管理处'></el-option>
					<el-option value='广东高校网络与信息安全工程技术开发中心'  label='广东高校网络与信息安全工程技术开发中心'></el-option>
					<el-option value='广东高校网络与信息安全工程开发中心'  label='广东高校网络与信息安全工程开发中心'></el-option>
					<el-option value='广东省科协海智计划东莞理工学院'  label='广东省科协海智计划东莞理工学院'></el-option>
					<el-option value='广东省社会科学研究基地--东莞理工学院质量与品牌发展研究中心'  label='广东省社会科学研究基地--东莞理工学院质量与品牌发展研究中心'></el-option>
					<el-option value='广东省无线传感器网络系统及应用工程技术研究中心'  label='广东省无线传感器网络系统及应用工程技术研究中心'></el-option>
					<el-option value='新时代价值与文化研究中心'  label='新时代价值与文化研究中心'></el-option>
					<el-option value='广东高校网络与信息安全工程技术开发中心'  label='广东高校网络与信息安全工程技术开发中心'></el-option>
					<el-option value='生态环境工程技术研发中心'  label='生态环境工程技术研发中心'></el-option>
    </el-select>
  </el-form-item>
  </el-col>
</el-row>

  <el-row>
  <el-col :span=12>
      <el-form-item label="合同名称" style="width:600px " prop="H_contractname">
       <el-input v-model="Hproject.H_contractname"></el-input>
      </el-form-item>
  </el-col>

  <el-col :span=12>
<el-form-item label="合同状态" style="width:600px " prop="H_contractprojectStatusId">
      <el-radio-group v-model="Hproject.H_contractprojectStatusId">
      <el-radio label="进行"></el-radio>
      <el-radio label="完成"></el-radio>
      <el-radio label="延期"></el-radio>
      <el-radio label="撤销"></el-radio>
    </el-radio-group>
</el-form-item>
  </el-col>
</el-row>

 
  <el-row>
  <el-col :span=12>
    <el-form-item label="签订日期" prop="H_contractauthorizeDate">
    <el-date-picker
      v-model="Hproject.H_contractauthorizeDate"
      type="date"
      placeholder=" ">
    </el-date-picker>
  </el-form-item> 
  </el-col>
  <el-col :span=12>
  <el-form-item label="登记时间" style="width:600px " prop="H_contractentryTime">
       <el-date-picker
      v-model="Hproject.H_contractentryTime"
      type="date"
      placeholder=" ">
    </el-date-picker>
  </el-form-item>
  </el-col>
</el-row>

  <el-row>
  <el-col :span=12>
    <el-form-item label="开始时间" prop="H_contractstartDate">
    <el-date-picker
      v-model="Hproject.H_contractstartDate"
      type="date"
      placeholder=" ">
    </el-date-picker>
  </el-form-item> 
  </el-col>
  <el-col :span=12>
  <el-form-item label="终止日期" style="width:600px " prop="H_contractactualEndDate">
       <el-date-picker
      v-model="Hproject.H_contractactualEndDate"
      type="date"
      placeholder=" ">
    </el-date-picker>
  </el-form-item>
  </el-col>
</el-row>

  <el-row>
  <el-col :span=12>
    <el-form-item label="财务账号" prop="H_contractfeeCode"  >
    <el-input  v-model="Hproject.H_contractfeeCode"  style="width:600px "></el-input>
  </el-form-item> 
  </el-col>
  <el-col :span=12>
     <el-form-item label="合同金额" prop="H_contractfeeAuthorize">
    <el-input  v-model="Hproject.H_contractfeeAuthorize" style="width:600px "></el-input>
  </el-form-item> 
  </el-col>
</el-row>
<!--附件信息-->
   <el-form-item label="附件信息">
<el-upload
  class="upload-demo"
  ref="upload"
  action="https://jsonplaceholder.typicode.com/posts/"
  :on-preview="handlePreview"
  :on-remove="handleRemove"
  :file-list="fileList"
  :auto-upload="false">
  <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
  <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
  <div slot="tip" class="el-upload__tip">上传文件不超过500kb</div>
</el-upload>
   </el-form-item>
<!--甲方信息-->
<hr>
 <el-row>
  <el-col :span=12>
    <el-form-item label="甲方名称" prop="H_contractbuyerName">
    <el-input v-model="Hproject.H_contractbuyerName"></el-input>
  </el-form-item> 
  </el-col>
  <el-col :span=12>
  <el-form-item label="甲方类别" style="width:600px ">
       <el-select v-model="Hproject.H_contractbuyerType" placeholder="--请选择--">
        <el-option value='' >--请选择--</el-option>
				<el-option value='国有企业' >国有企业</el-option>
				<el-option value='技术贸易机构' >技术贸易机构</el-option>
				<el-option value='个体经营' >个体经营</el-option>
				<el-option value='其他' >其他</el-option>
				<el-option value='集体企业' >集体企业</el-option>
				<el-option value='私营企业' >私营企业</el-option>
				<el-option value='有限责任公司' >有限责任公司</el-option>
				<el-option value='股份有限公司' >股份有限公司</el-option>
				<el-option value='港澳台商投资企业' >港澳台商投资企业</el-option>
				<el-option value='外商投资企业' >外商投资企业</el-option>
				<el-option value='科研机构' >科研机构</el-option>
				<el-option value='各级管理部门' >各级管理部门</el-option>
       </el-select>
  </el-form-item>
  </el-col>
</el-row>

 <el-row>
  <el-col :span=12>
    <el-form-item label="甲方地址" prop="H_contractbuyerAddress">
    <el-input v-model="Hproject.H_contractbuyerAddress"></el-input>
  </el-form-item> 
  </el-col>
  <el-col :span=12>
  <el-form-item label="甲方地区" style="width:600px " prop="H_contractbuyerArea">
       <el-select v-model="Hproject.H_contractbuyerArea" placeholder="--请选择--">
				<el-option value='' >--请选择--</el-option>
        <el-option  value='北京市' >北京市</el-option>
        <el-option value='天津市' >天津市</el-option>
        <el-option value='河北省' >河北省</el-option>
        <el-option value='山西省' >山西省</el-option>
        <el-option value='内蒙古自治区' >内蒙古自治区</el-option>
        <el-option value='辽宁省' >辽宁省</el-option>
        <el-option value='吉林省' >吉林省</el-option>
        <el-option value='黑龙江省' >黑龙江省</el-option>
        <el-option value='上海市' >上海市</el-option>
        <el-option value='江苏省' >江苏省</el-option>
        <el-option value='浙江省' >浙江省</el-option>
        <el-option value='安徽省' >安徽省</el-option>
        <el-option value='福建省' >福建省</el-option>
        <el-option value='江西省' >江西省</el-option>
        <el-option value='山东省' >山东省</el-option>
        <el-option value='河南省' >河南省</el-option>
        <el-option value='湖北省' >湖北省</el-option>
        <el-option value='湖南省' >湖南省</el-option>
        <el-option value='广东省' >广东省</el-option>
        <el-option value='广西壮族自治区' >广西壮族自治区</el-option>
        <el-option value='海南省' >海南省</el-option>
        <el-option value='重庆市'>重庆市</el-option>
        <el-option value='四川省' >四川省</el-option>
        <el-option value='贵州省' >贵州省</el-option>
        <el-option value='云南省' >云南省</el-option>
        <el-option value='西藏自治区' >西藏自治区</el-option>
        <el-option value='陕西省' >陕西省</el-option>
        <el-option value='甘肃省' >甘肃省</el-option>
        <el-option value='青海省' >青海省</el-option>
        <el-option value='宁夏回族自治区' >宁夏回族自治区</el-option>
        <el-option value='新疆维吾尔自治区' >新疆维吾尔自治区</el-option>
        <el-option value='台湾省' >台湾省</el-option>
        <el-option value='香港特别行政区' >香港特别行政区</el-option>
 </el-select>
  </el-form-item>
  </el-col>
</el-row>
 
  <el-row>
  <el-col :span=12>
    <el-form-item label="甲方邮编" prop="H_contractbuyerZipCode">
    <el-input v-model="Hproject.H_contractbuyerZipCode"></el-input>
  </el-form-item> 
  </el-col>
  <el-col :span=12>
  <el-form-item label="甲方电话" style="width:600px " prop="H_contractbuyerTel">
       <el-input v-model="Hproject.H_contractbuyerTel"></el-input>
  </el-form-item>
  </el-col>
</el-row>
   <el-row>
  <el-col :span=12>
    <el-form-item label="甲方代表人" prop="H_contractbuyerRepresentative">
    <el-input v-model="Hproject.H_contractbuyerRepresentative"></el-input>
  </el-form-item> 
  </el-col>
  <el-col :span=12>

  </el-col>
</el-row>

<!--参与人员-->
<el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      fixed
      prop="title_orderId"
      label="署名顺序"
      width="140">
    </el-table-column>
    <el-table-column
      prop="title_authorType"
      label="人员来源"
      width="140">
    </el-table-column>
    <el-table-column
      prop="title_personName"
      label="成员姓名"
      width="140">
    </el-table-column>
    <el-table-column
      prop="title_sexId"
      label="成员性别"
      width="140">
    </el-table-column>
    <el-table-column
      prop="title_authorCode"
      label="成员职工号"
      width="140">
    </el-table-column>
    <el-table-column
      prop="title_subjectId"
      label="学科方向"
      width="140">
    </el-table-column>
     <el-table-column
      prop="title_titleId"
      label="职称"
      width="140">
    </el-table-column>
     <el-table-column
      prop="title_eduLevelId"
      label="学历"
      width="140">
    </el-table-column>
     <el-table-column
      prop="title_workUnitName"
      label="工作单位"
      width="140">
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

  <el-row>
  <el-col :span=12>
 <el-form-item label="合作形式" prop="H_contractcooperateId">
    <el-select v-model="Hproject.H_contractcooperateId" placeholder="--请选择--">
				<el-option value='' >--请选择--</el-option>
					<el-option value='与境外机构合作' label='与境外机构合作'></el-option>
					<el-option value='与国内高校合作' label='与国内高校合作'></el-option>
					<el-option value='与国内独立研究机构合作' label='与国内独立研究机构合作'></el-option>
					<el-option value='与境内注册外商独资企业合作' label='与境内注册外商独资企业合作'></el-option>
					<el-option value='与境内注册其他企业合作' label='与境内注册其他企业合作'></el-option>
					<el-option value='独立完成' label='独立完成'></el-option>
					<el-option value='其他' label='其他'></el-option>
    </el-select>
 </el-form-item>
  </el-col>
  <el-col :span=12>
 <el-form-item label="研究类别" prop="H_contractresearchClassId">
    <el-select v-model="Hproject.H_contractresearchClassId" placeholder="--请选择--">
			<el-option value='' >--请选择--</el-option>
			<el-option value='基础研究' label='基础研究'></el-option>
			<el-option value='实验与发展' label='实验与发展'></el-option>
			<el-option value='应用研究' label='应用研究'></el-option>
    </el-select>
 </el-form-item>
  </el-col>
</el-row>
 <el-form-item label="项目来源" prop="H_contractprojectSourceId">
    <el-select v-model="Hproject.H_contractprojectSourceId" placeholder="--请选择--">
			<el-option value='' >--请选择--</el-option>
					<el-option value='国家社科基金单列学科项目' label='国家社科基金单列学科项目'></el-option>
					<el-option value='国家社科基金项目' label='国家社科基金项目'></el-option>
					<el-option value='教育部人文社科研究项目' label='教育部人文社科研究项目'></el-option>
					<el-option value='全国教育科学规划（教育部）项目' label='全国教育科学规划（教育部）项目'></el-option>
					<el-option value='国家自然科学基金项目' label='国家自然科学基金项目'></el-option>
					<el-option value='中央其他部门社科专门项目' label='中央其他部门社科专门项目'></el-option>
					<el-option value='高校古籍整理研究项目' label='高校古籍整理研究项目'></el-option>
					<el-option value='省、市、自治区社科基金项目' label='省、市、自治区社科基金项目'></el-option>
					<el-option value='省教育厅社科项目' label='省教育厅社科项目'></el-option>
					<el-option value='地、市、厅、局等政府部门项目' label='地、市、厅、局等政府部门项目'></el-option>
					<el-option value='国际合作研究项目' label='国际合作研究项目'></el-option>
					<el-option value='与港、澳、台合作研究项目' label='与港、澳、台合作研究项目'></el-option>
					<el-option value='企事业单位委托项目' label='企事业单位委托项目'></el-option>
					<el-option value='外资项目' label='外资项目'></el-option>
					<el-option value='学校社科项目' label='学校社科项目'></el-option>
					<el-option value='其他研究项目' label='其他研究项目'></el-option>
					<el-option value='无依托项目研究成果' label='无依托项目研究成果'></el-option>
    </el-select>
 </el-form-item>
<!--统计信息-->


 <el-form-item  label="备注" style="width:600px "  prop="H_contractintro">
    <el-input
  type="textarea"
  :rows="5"
  placeholder="请输入内容"
  v-model="Hproject.H_contractintro" >
</el-input>
 </el-form-item>
  </el-card>
 </el-form>

</template>

<style>
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
    width: 1400px;
  height: 1400px;
  }

</style>
<script>
 import API from '../api/hproject'
  export default {
    data() {
      return {
        Hproject: {

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
        }],
           fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}]
         }
  },
   methods: {
    hprojectsave()
    {
      let that = this;
      console.log("ddd");
      this.$refs.HPROJECT.validate((valid) => {
         if (valid) {
           let parmas = Object.assign({},this.Hproject);  //将对象直接转json
           
          API.add(parmas).then(function (result) {     
                      if (result ) {
                        console.log(result)
                      } else {
                        that.$message.error({showClose: true, message: result.errmsg || '登录失败', duration: 2000});
                      }
                    }, function (err) {
                      that.loading2 = false;
                      that.$message.error({showClose: true, message: err.toString(), duration: 2000});
                    }).catch(function (error) {
                      that.loading2 = false;
                      console.log(error);
                      that.$message.error({showClose: true, message: '请求出现异常', duration: 2000});
                    });
         }
      })
    },
    handleChange(value) {
        console.log(value);
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


