<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>机构查询</span> 
      <el-button size="small" style="float:right;">返回</el-button>
      <el-button size="small" style="float:right;">清空</el-button>
      <el-button size="small" style="float:right;">查询</el-button>
    </div>
    
    <form name="researchUnitForm" method="post" action="/business/unit/researchUnit.do">
      <input type="hidden" name="actionType" value="initSearch">
      <input type="hidden" name="pageType" value="search">
      <!-- 检查年度查询时是否正确标识 -->
      <input type="hidden" name="dateFlag" value="false"/>
      <div class="mainbg">
            <table id="table" cellspacing="0" cellpadding="0" align="center">
              <tr>
                <td class='tdrowhead' colspan=1 rowspan=1 width='15%'>机构名称：</td>
                <td class='list' colspan=3 rowspan=1><div id='researchUnit.name'> 
                  <el-input type='text' v-model="R_name" name='@name&like'  id='@name&like' size=50  maxLength = '100' ></el-input></div></td>
              </tr>
              <tr>
                <td class='tdrowhead' colspan=1 rowspan=1 width='15%'>机构编号：</td>
                <td class='list' colspan=1 rowspan=1 width='35%'><div id='researchUnit.code'> 
                  <el-input type='text' v-model="R_code" name='@code'  id='@code' size=0  maxLength = '64' > </el-input></div></td>
                <td class='tdrowhead' colspan=1 rowspan=1 width='15%'>负责人：</td>
                <td class='list' colspan=1 rowspan=1 width='35%'><div id='researchUnit.charger'> 
                  <el-input type='text' v-model="R_charger" name='@charger&like'  id='@charger&like' size=0  maxLength = '40' > </el-input></div></td>
              </tr>
              <tr>
                <td class='tdrowhead' colspan=1 rowspan=1 width='15%'>挂靠单位：</td>
                <td class='list' colspan=1 rowspan=1 width='35%'><div id='researchUnit.upUnitId'></div></td>
                <td class='tdrowhead' colspan=1 rowspan=1 width='15%'>学科门类：</td>
                <td class='list' colspan=1 rowspan=1 width='35%'><div id='researchUnit.subjectClassId'>	
                <el-radio v-model="R_subjectClassId" label="所有" value="所有" ></el-radio><br>
                <el-radio v-model="R_subjectClassId" label="科技类" value="科技类" ></el-radio>
                <el-radio v-model="R_subjectClassId" label="社科类" value="社科类" ></el-radio>

              </div></td>
              </tr>
              <tr>
                <td class='tdrowhead' colspan=1 rowspan=1 width='15%'>是否统计：</td>
                <td class='list' colspan=1 rowspan=1 width='35%'><div id='researchUnit.staTypeId'>	
                <el-radio v-model="R_staTypeId" label="否" value="否"  ></el-radio>
                <el-radio v-model="R_staTypeId" label="是" value="是"  ></el-radio>

              </div></td>
              </tr>
              <tr>
                <td class='tdrowhead' colspan=1 rowspan=1 width='15%'>机构级别：</td>
                <td class='list' colspan=1 rowspan=1 width='35%'><div id='researchUnit.levelId'>	
                <el-radio v-model="R_levelId" label="国家级" value="国家级"  ></el-radio>
                <el-radio v-model="R_levelId" label="省部级" value="省部级"  ></el-radio><br>
                <el-radio v-model="R_levelId" label="地厅级" value="地厅级"  ></el-radio>
                <el-radio v-model="R_levelId" label="学校级" value="学校级"  ></el-radio>

              </div></td>
                <td class='tdrowhead' colspan=1 rowspan=1 width='15%'>电话：</td>
                <td class='list' colspan=1 rowspan=1 width='35%'><div id='researchUnit.tel'> 
                  <el-input type='text' v-model='R_telOffice'  id='@tel' size=0  maxLength = '128'></el-input></div></td>
              </tr>
              <tr>
                <td class='tdrowhead' colspan=1 rowspan=1 width='15%'>传真：</td>
                <td class='list' colspan=1 rowspan=1 width='35%'><div id='researchUnit.fax'> 
                  <el-input type='text' v-model='R_fax'  id='@fax' size=0  maxLength = '128'></el-input></div></td>
                <td class='tdrowhead' colspan=1 rowspan=1 width='15%'>地址：</td>
                <td class='list' colspan=1 rowspan=1 width='35%'><div id='researchUnit.address'> 
                  <el-input type='text' v-model='R_address'  id='@address' size=0  maxLength = '255' ></el-input></div></td>
              </tr>
              <tr>
                <td class='tdrowhead' colspan=1 rowspan=1 width='15%'>邮编：</td>
                <td class='list' colspan=1 rowspan=1 width='35%'><div id='researchUnit.postalCode'> 
                  <el-input type='text' v-model='R_postalCode'  id='@postalCode' size=0 maxlength="6"></el-input></div></td>
                <td class='tdrowhead' colspan=1 rowspan=1 width='15%'>Email：</td>
                <td class='list' colspan=1 rowspan=1 width='35%'><div id='researchUnit.email'> 
                  <el-input type='text' v-model='R_email'  id='@email' size=0  maxLength = '128' ></el-input></div></td>
              </tr>
              <tr>
                <td class='tdrowhead' colspan=1 rowspan=1 width='15%'>网址：</td>
                <td class='list' colspan=3 rowspan=1><div id='researchUnit.website'> 
                  <el-input type='text' v-model='R_website'  id='@website' size=0  maxLength = '128' ></el-input></div></td>
              </tr>
              <tr>
                <td class='tdrowhead' colspan=1 rowspan=1 width='15%'>成立日期：</td>
                <td class='list' colspan=3 rowspan=1><div id='researchUnit.createDate'>
                  	<el-date-picker type='date' name='bean.createDate'  id='createDate' size=12 v-model="R_createDate"  placeholder="选择日期" suffix-icon="el-icon-date"  class="Wdate" ></el-date-picker>
                  </div></td>
              </tr>
              <tr>
                <td class='tdrowhead' colspan=1 rowspan=1 width='15%'>是否实体机构：</td>
                <td class='list' colspan=3 rowspan=1><div id='researchUnit.entityFlag'>	
                <el-radio v-model="R_entityFlag" label="否" value="否" ></el-radio>
                <el-radio v-model="R_entityFlag" label="是" value="是" ></el-radio>

              </div></td>
              </tr>
        <input type='hidden' name='@l03' >
        <input type='hidden' name='@kindId' >
        <input type='hidden' name='@unitForm' >
        <input type='hidden' name='@l17' >
        <input type='hidden' name='@unitTypeId' >
        <input type='hidden' name='@typeId' >
        <input type='hidden' name='@l01' >
        </table>


        <el-card class="box-card" >
            <div slot="header" class="clearfix" >
              <span>排序条件</span> 
              </div>
              <table id="table" cellspacing="0" cellpadding="0" align="center">
                <tr>
                  <td height="23" class="list" width="15%">
                    <el-select v-model="R_orderType"  name='bean.orderType' placeholder="请选择">
                      <el-option
                      v-for="item in R_orderTypes"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                      </el-option>
                    </el-select>
                  </td>
                  <td height="23" class="list" width="85%" colspan="3">
                    <el-radio v-model="R_isdownsort" label="降序" value="降序"></el-radio>
                    <el-radio v-model="R_isdownsort" label="升序" value="升序"></el-radio>
                  </td>
                </tr>
              </table>
        </el-card>
      </div>
  </form>


  </el-card>
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
            R_isdownsort:'',
            R_orderType:'',
            R_orderTypes:[
              { value:'',label:'--请选择--'
              },{ value:'机构名称',label:'机构名称'
              },{ value:'机构编号',label:'机构编号'
              },{ value:'负责人',label:'负责人'
              },{ value:'挂靠单位',label:'挂靠单位'
              },{ value:'学科门类',label:'学科门类'
              },{ value:'是否统计',label:'是否统计'
              },{ value:'一级学科',label:'一级学科'
              },{ value:'机构级别',label:'机构级别'
              },{ value:'机构类别',label:'机构类别'
              },{ value:'机构性质',label:'机构性质'
              },{ value:'机构类型',label:'机构类型'
              },{ value:'服务的国民经济行业',label:'服务的国民经济行业'
              },{ value:'批准部门',label:'批准部门'
              },{ value:'组成形式',label:'组成形式'
              },{ value:'电话',label:'电话'
              },{ value:'传真',label:'传真'
              },{ value:'地址',label:'地址'
              },{ value:'邮编',label:'邮编'
              },{ value:'Email',label:'Email'
              },{ value:'网址',label:'网址'
              },{ value:'成立日期',label:'成立日期'
              },{ value:'是否实体机构',label:'是否实体机构'
              },{ value:'组成类型',label:'组成类型'
              }],
      }
    },
    methods: {
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


                      机构名称
                      机构编号
                      负责人
                      挂靠单位
                      学科门类
                      是否统计
                      一级学科
                      机构级别
                      机构类别
                      机构性质
                      机构类型
                      服务的国民经济行业
                      批准部门
                      组成形式
                      电话
                      传真
                      地址
                      邮编
                      Email
                      网址
                      成立日期
                      是否实体机构
                      组成类型      