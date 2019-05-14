<template>
 <el-card class="box-card">
    <div slot="header" class="clearfix">
    <span>合同查询</span>
    <el-button style="float: right; padding: 3px 0" type="text">查询</el-button>
    <el-button style="float: right; padding: 3px 0" type="text">清空</el-button>
  </div>
<el-form ref="form" :model="form" label-width="140px">
      <el-form-item label="学科门类：">
    <el-radio-group v-model="form.contractsubjectClassId">
      <el-radio label="所有"></el-radio>
      <el-radio label="科技类"></el-radio>
      <el-radio label="社科类"></el-radio>
    </el-radio-group>
  </el-form-item>
  <el-form-item label="合同名称" style="width:600px ">
    <el-input v-model="form.contractname"></el-input>
  </el-form-item>
 
 <el-form-item label="合同类别" style="width:600px ">
      <el-select v-model="form.contractType" placeholder="--请选择--">
        <el-option label='开发' value="开发"></el-option>
		<el-option label='转让' value="转让"></el-option>
		<el-option label='咨询' value="咨询"></el-option>
        <el-option label='服务' value="服务"></el-option>
		<el-option label='培训类' value="培训类"></el-option>
		<el-option label='非我校实际实施类' value="非我校实际实施类"></el-option>
    </el-select>
</el-form-item>

<el-form-item label="合同编号" style="width:600px ">
    <el-input v-model="form.contractcode"></el-input>
  </el-form-item>

  <el-form-item label="负责人" style="width:600px ">
    <el-input v-model="form.contractchargerName"></el-input>
</el-form-item>
<el-form-item label="承接单位">
    <el-select v-model="form.contractunitId" placeholder="--请选择--">
                    <el-option value='' >--请选择--</el-option>
					<el-option value='教育学院(师范学院)'  label='教育学院(师范学院)'></el-option>
					<el-option value='经济与管理学院'  label='经济与管理学院'></el-option>
					<el-option value='生态环境与建筑工程学院'  label='生态环境与建筑工程学院'></el-option>
					<el-option value='文学与传媒学院'  label='文学与传媒学院'></el-option>
					<el-option value='城市学院'  label='城市学院'></el-option>
					<el-option value='电子工程与智能化学院'  label='电子工程与智能化学院'></el-option>
					<el-option value='法律与社会工作学院（知识产权学院）'  label='法律与社会工作学院（知识产权学院）'></el-option>
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
					<el-option value='社会发展研究院'  label='社会发展研究院'></el-option>
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
      <el-form-item label="甲方名称" style="width:600px ">
    <el-input v-model="form.contractbuyerName"></el-input>
  </el-form-item> 
  
    <el-form-item label="甲方类别" style="width:600px ">
       <el-select v-model="form.contractbuyerType" placeholder="--请选择--">
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

  <el-form-item>
			<el-button type="primary" @click="onSubmit">立即查询</el-button>
    <el-button>取消</el-button>
  </el-form-item>
</el-form>
</el-card>
</template>
<style>
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
  }   
</style>
<script>
  export default {
    data() {
      return {
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
  }
</script>