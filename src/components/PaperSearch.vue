<template>

  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>机构查询</span> 
      <el-button size="small" style="float:right;">返回</el-button>
      <el-button size="small" style="float:right;">清空</el-button>
      <el-button size="small" style="float:right;">查询</el-button>
    </div>

<form name="paperForm" method="post" action="/business/paper/paper.do">
<input type="hidden" name="actionType" value="popSearch">
<input type="hidden" name="queryBean.searchMode" value="s">
<input type="hidden" name="currentPageNo" value="1">
<input type="hidden" name="queryBean.defaultSearchFlag" value="1">
<div class="mainbg">
<el-tabs type="border-card">
    <el-tab-pane label="简单查询">
        <table id="table" cellspacing="0" cellpadding="0" align="center">
   		<tr>
        <td class='tdrowhead' colspan=1 rowspan=1 width='15%'>论文类型：</td>
        <td class='list' colspan=3 rowspan=1><div id='paper.paperModeId'>
        <el-radio v-model="P_paperModeId"  label="所有" value="所有" ></el-radio>
        <el-radio v-model="P_paperModeId"  label="期刊论文" value='期刊论文' ></el-radio>
        <el-radio v-model="P_paperModeId"  label="论文集" value='论文集' ></el-radio>
        <el-radio v-model="P_paperModeId"  label="文章" value='文章' ></el-radio>

        </div></td>
        </tr>
        <tr>
            <td class='tdrowhead' colspan=1 rowspan=1 width='15%'>论文题目：</td>
            <td class='list' colspan=3 rowspan=1><div id='paper.name'> 
                <el-input type='text' v-model="P_name" name='@name&like'  id='@name&like' size=70 maxLength = '512'></el-input></div></td>
        </tr>
        <tr>
            <td class='tdrowhead' colspan=1 rowspan=1 width='15%'>学科门类：</td>
            <td class='list' colspan=3 rowspan=1><div id='paper.subjectClassId'>
            <el-radio v-model="P_subjectClassId" label="所有" value='所有' ></el-radio>
            <el-radio v-model="P_subjectClassId" label="科技类" value='科技类' ></el-radio>
            <el-radio v-model="P_subjectClassId" label="社科类" value='社科类' ></el-radio>

        <font style='color:red'>请老师按照该项成果的实际所属学科进行选择</font></div></td>
        </tr>
        <tr>
            <td class='tdrowhead' colspan=1 rowspan=1 width='15%'>第一作者：</td>
            <td class='list' colspan=3 rowspan=1><div id='paper.firstAuthorName'> 
                <el-input v-model="P_firstAuthorName" type='text' name='@firstAuthorName&like'  id='@firstAuthorName&like' size=40    maxLength = '32' ></el-input></div></td>
        </tr>
        <tr>
            <td class='tdrowhead' colspan=1 rowspan=1 width='15%'>通讯作者：</td>
            <td class='list' colspan=3 rowspan=1><div id='paper.txzzName'> 
                <el-input v-model="P_txzzName" type='text' name='@txzzName'  id='@txzzName' size=40    maxLength = '32' ></el-input></div></td>
        </tr>
        <tr>
            <td class='tdrowhead' colspan=1 rowspan=1 width='15%'>所属单位：</td>
            <td class='list' colspan=1 rowspan=1 width='35%'><div id='paper.unitId'>
                <el-input v-model="P_unitId"  type='text' name='@unitId' ></el-input></div></td>
            <td class='tdrowhead' colspan=1 rowspan=1 width='15%'>参与作者：</td>
            <td class='list' colspan=1 rowspan=1 width='35%'><div id='paper.authors.authorName'> 
                <el-input v-model="P_authors" type='text' name='@authors.authorName'  id='@authors.authorName' size=0   ></el-input></div></td>
        </tr>
        <tr>
            <td class='tdrowhead' colspan=1 rowspan=1 width='15%'>第一作者职工号：</td>
            <td class='list' colspan=1 rowspan=1 width='35%'><div id='paper.firstAuthorCode'> 
                <el-input v-model="P_firstAuthorCode" type='text' name='@firstAuthorCode'  id='@firstAuthorCode' size=0   ></el-input></div></td>
            <td class='tdrowhead' colspan=1 rowspan=1 width='15%'>参与作者职工号：</td>
            <td class='list' colspan=1 rowspan=1 width='35%'><div id='paper.authors.authorCode'> 
                <el-input v-model="P_authors" type='text' name='@authors.authorCode'  id='@authors.authorCode' size=0   ></el-input></div></td>
        </tr>
        <tr>
            <td class='tdrowhead' colspan=1 rowspan=1 width='15%'>发表/出版时间：</td>
            <td class='list' colspan=3 rowspan=1><div id='paper.publishDate'>
                <el-date-picker type='date' name='bean.P_publishDate'  id='createDate' size=12 v-model="P_createDate"  placeholder="选择日期" suffix-icon="el-icon-date"  class="Wdate" ></el-date-picker>
                </div></td>
        </tr>
        <tr>
            <td class='tdrowhead' colspan=1 rowspan=1 width='15%' title='“刊物级别”提供文字检索功能。例如：输入拼音“管理评论”即可显示期刊“管理评论”'>发表刊物/论文集：</td>
            <td class='list' colspan=1 rowspan=1 width='35%' title='“刊物级别”提供文字检索功能。例如：输入拼音“管理评论”即可显示期刊“管理评论”'><div id='paper.publishUnit'> 
                <el-input v-model="P_publishUnit" type='text' name='@publishUnit&like'  id='@publishUnit&like' size=30    maxLength = '128' ></el-input></div></td>
            <td class='tdrowhead' colspan=1 rowspan=1 width='15%'>刊物类型：</td>
            <td class='list' colspan=1 rowspan=1 width='35%'><div id='paper.publicationLevels.paperTypeId'>
              <el-select v-model="P_Field"  name='bean.orderField' placeholder="请选择">
                <el-option
                v-for="item in P_Fields"
                :key="item.value"
                :label="item.label"
                :value="item.value">
                </el-option>
              </el-select>
                    </div></td>
        </tr>
        <tr>
            <td class='tdrowhead' colspan=1 rowspan=1 width='15%'>一级学科：</td>
            <td class='list' colspan=1 rowspan=1 width='35%'><div id='paper.subjectId'>
                <el-select v-model="P_subjectType"  name='bean.subjectType' placeholder="请选择">
                    <el-option
                    v-for="item in P_subjectTypes"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select><font style='color:red'> 请老师按照该项成果的实际所属学科进行选择</font></div></td>
            <td class='tdrowhead' colspan=1 rowspan=1 width='15%'>项目来源：</td>
            <td class='list' colspan=1 rowspan=1 width='35%'><div id='paper.projectSourceId'>
              <el-select v-model="P_projectSourceType"  name='bean.projectSourceType' placeholder="请选择">
                <el-option
                v-for="item in P_projectSourceTypes"
                :key="item.value"
                :label="item.label"
                :value="item.value">
                </el-option>
            </el-select></div></td>
        </tr>
        <tr>
            <td class='tdrowhead' colspan=1 rowspan=1 width='15%'>发表范围：</td>
            <td class='list' colspan=1 rowspan=1 width='35%'><div id='paper.publishRangeId'>
                <el-select v-model="P_publishRangeId"  name='bean.publishRangeId' placeholder="请选择">
                    <el-option
                    v-for="item in P_publishRangeIds"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
              </div></td>
            <td class='tdrowhead' colspan=1 rowspan=1 width='15%'>审核状态：</td>
            <td class='list' colspan=1 rowspan=1 width='35%'><div id='paper.checkStatusId'>
                <el-select v-model="P_checkStatusId"  name='bean.checkStatusId' placeholder="请选择">
                    <el-option
                    v-for="item in P_checkStatusIds"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
                </div></td>
            </tr>
            <tr>
                <td class='tdrowhead' colspan=1 rowspan=1 width='15%'>版面：</td>
                <td class='list' colspan=1 rowspan=1 width='35%'><div id='paper.pageSpace'>
                  <el-radio v-model="P_pageSpace" label="所有" value='所有'  ></el-radio>
                  <el-radio v-model="P_pageSpace" label="正常版面" value='正常版面'  ></el-radio>
                  <el-radio v-model="P_pageSpace" label="增刊" value='增刊'  ></el-radio><br>
                  <el-radio v-model="P_pageSpace" label="年刊" value='年刊'  ></el-radio>
                  <el-radio v-model="P_pageSpace" label="专刊" value='专刊'  ></el-radio>
                  </div></td>
            <td class='tdrowhead' colspan=1 rowspan=1 width='15%'>是否为译文：</td>
            <td class='list' colspan=1 rowspan=1 width='35%'><div id='paper.isTranslated'>
                <el-radio v-model="P_isTranslated" label="否"  value='否'  ></el-radio>
                <el-radio v-model="P_isTranslated" label="是"  value='是'  ></el-radio>
            </div></td>
        </tr>
        <tr>
            <td class='tdrowhead' colspan=1 rowspan=1 width='15%'>录入人：</td>
            <td class='list' colspan=3 rowspan=1><div id='paper.creatorName'> 
              <el-input type='text' v-model="P_creatorName" name='@creatorName&like'  id='@creatorName&like' size=0    maxLength = '40' ></el-input></div></td>
        </tr>
        <tr>
            <td class='tdrowhead' colspan=1 rowspan=1 width='15%'>录入时间：</td>
            <td class='list' colspan=3 rowspan=1><div id='paper.createTime'>
              <el-date-picker
                v-model="P_createTime"
                type="daterange"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                format="yyyy 年 MM 月 dd 日 "
                value-format="yyyy-MM-dd">
              </el-date-picker>
              </div></td>
        </tr>
	   		<tr>
                <td class='tdrowhead' colspan=1 rowspan=1 width='15%'>审核意见：</td>
                <td class='list' colspan=3 rowspan=1><div id='paper.checkInf'> 
                    <el-input type='text' v-model="P_checkInf" name='@checkInf'  id='@checkInf' size=0   ></el-input></div></td>
            </tr>
            <tr>
                <td class='tdrowhead' colspan=1 rowspan=1 width='15%'>数据来源：</td>
                <td class='list' colspan=3 rowspan=1><div id='paper.paperSource'>
                  <el-select v-model="P_paperSource" name='bean.paperSource' placeholder="请选择">
                    <el-option 
                      v-for="item in P_paperSources"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value" >
                    </el-option>
                  </el-select>
                 </div></td>
            </tr>
            <tr>
                <td class='tdrowhead' colspan=1 rowspan=1 width='15%'>第一作者类型：</td>
                <td class='list' colspan=3 rowspan=1><div id='paper.firstAuthorType'>
                    <el-radio v-model="P_firstAuthorType" name='@firstAuthorType' label="本校老师" value='本校老师' ></el-radio>
                    <el-radio v-model="P_firstAuthorType" name='@firstAuthorType' label="本校学生" value='本校学生' ></el-radio>
                    <el-radio v-model="P_firstAuthorType" name='@firstAuthorType' label="外校人员" value='外校人员' ></el-radio>

            </div></td>
            </tr>
            <tr>
                <td class='tdrowhead' colspan=1 rowspan=1 width='15%'>研究类别：</td>
                <td class='list' colspan=1 rowspan=1 width='35%'><div id='paper.researchClassId'>
                      <el-select v-model="P_researchClassId" name="paper.researchClassId" placeholder="请选择">
                        <el-option 
                        v-for="item in P_researchClassIds"
                        :key="item.value"
                        :label="item .label"
                        :value="item.value">
                        </el-option>
                      </el-select></div></td>
                <td class='tdrowhead' colspan=1 rowspan=1 width='15%'>学校署名：</td>
                <td class='list' colspan=1 rowspan=1 width='35%'><div id='paper.schoolSign'>
                    <el-radio v-model="P_schoolSign" name='@schoolSign' label="所有" value='所有'  ></el-radio>
                    <el-radio v-model="P_schoolSign" name='@schoolSign' label="第一单位" value='第一单位'  ></el-radio>
                    <el-radio v-model="P_schoolSign" name='@schoolSign' label="非第一单位" value='非第一单位'  ></el-radio>

            </div></td>
            </tr>
            <tr>
                <td class='tdrowhead' colspan=1 rowspan=1 width='15%'>关键字：</td>
                <td class='list' colspan=3 rowspan=1><div id='paper.keywords'> 
                    <el-input type='text' v-model="P_keywords" name='@keywords&like'  id='@keywords&like' size=70    maxLength = '500' ></el-input></div></td>
            </tr>
            <tr>
                <td class='tdrowhead' colspan=1 rowspan=1 width='15%'>论文摘要：</td>
                <td class='list' colspan=3 rowspan=1><div id='paper.productAbstract'> 
                    <el-input type='text' v-model="P_productAbstract" name='@productAbstract&like'  id='@productAbstract&like' size=70   ></el-input></div></td>
            </tr>
            <tr>
                <td class='tdrowhead' colspan=1 rowspan=1 width='15%'>备注：</td>
                <td class='list' colspan=3 rowspan=1><div id='paper.intro'> 
                    <el-input type='text' v-model="P_intro" name='@intro&like'  id='@intro&like' size=70   ></el-input></div></td>
            </tr>
            <tr>
                <td class='tdrowhead' colspan=1 rowspan=1 width='15%'>索引号：</td>
                <td class='list' colspan=1 rowspan=1 width='35%'><div id='paper.referenceNumber'> 
                  <el-input type='text' v-model="P_referenceNumber" name='@referenceNumber'  id='@referenceNumber' size=0   ></el-input></div></td>
                <td class='tdrowhead' colspan=1 rowspan=1 width='15%'>是否正式出版：</td>
                <td class='list' colspan=1 rowspan=1 width='35%'><div id='paper.isOfficialPublish'>
                  <el-radio v-model="P_isOfficialPublish" name='@isOfficialPublish' label="否"  value='否'  ></el-radio>
                  <el-radio v-model="P_isOfficialPublish" name='@isOfficialPublish' label="是"  value='是'  ></el-radio> 
            </div></td>
            </tr>
            <input type='hidden' name='@cn' >
                
        </table>
    </el-tab-pane>
</el-tabs>
<br>
<el-card class="box-card">
     <div slot="header" class="clearfix">
      <span>排序条件</span> 
      </div>
     <table id="table" cellspacing="0" cellpadding="0" align="center">
		<tr>
   		<td height="23" class="list" width="15%">
			<el-select v-model="P_orderField"  name='bean.orderField' placeholder="请选择">
                <el-option
                v-for="item in P_orderFields"
                :key="item.value"
                :label="item.label"
                :value="item.value">
                </el-option>
            </el-select>	</td>
		<td height="23" class="list" width="85%" colspan="3">
        <el-radio v-model="P_isdownsort" label="降序" value="降序"></el-radio>
        <el-radio v-model="P_isdownsort" label="升序" value="升序"></el-radio>
		</td></tr>
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
        P_name:'',
        P_paperModeId:'',
        P_subjectClassId:'',
        P_publishDate:'',
        P_publishUnit:'',
        P_paperTypes:[],
        P_employType:[],
        P_unitId:'',
        P_unitIds:[
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
        P_subjectId:'',
        P_subjectIds:[
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
        P_projectSourceId:'',
        P_projectSourceIds:[
          { value:'',label:'--请选择--'
          },{ value:'03',label:'国家社科基金单列学科项目'
          },{ value:'04',label:'国家社科基金项目'
          },{ value:'05',label:'教育部人文社科研究项目'
          },{ value:'051',label:'全国教育科学规划（教育部）项目'
          },{ value:'06',label:'国家自然科学基金项目'
          },{ value:'07',label:'中央其他部门社科专门项目'
          },{ value:'08',label:'高校古籍整理研究项目'
          },{ value:'09',label:'省、市、自治区社科基金项目'
          },{ value:'10',label:'省教育厅社科项目'
          },{ value:'11',label:'地、市、厅、局等政府部门项目'
          },{ value:'12',label:'国际合作研究项目'
          },{ value:'13',label:'与港、澳、台合作研究项目'
          },{ value:'14',label:'企事业单位委托项目'
          },{ value:'15',label:'外资项目'
          },{ value:'16',label:'学校社科项目'
          },{ value:'99',label:'其他研究项目'
          },{ value:'999',label:'无依托项目研究成果'
          }],
        P_researchClassId:'',
        P_researchClassIds:[
            { value:'',label:'--请选择--'
            },{ value:'基础研究',label:'基础研究'
            },{ value:'应用研究',label:'应用研究'
            },{ value:'实验发展',label:'实验发展'
            },{ value:'研究与发展成果应用',label:'研究与发展成果应用'
            },{ value:'其他科技服务',label:'其他科技服务'
            }],
        P_publishRangeId:'',
        P_publishRangeIds:[
          { value:'',label:'--请选择--'
          },{ value:'国外学术期刊',label:'国外学术期刊'
          },{ value:'国内外公开发行',label:'国内外公开发行'
          },{ value:'国内公开发行',label:'国内公开发行'
          },{ value:'港澳台刊物',label:'港澳台刊物'
          }],
        P_juanNumber:'',
        P_qiNumber:'',
        P_pageScope:'',
        P_wordNumber:'',
        P_schoolSign:'',
        P_unitOrderId:'',
        P_pageSpace:'',
        P_referenceNumber:'',
        P_cn:'',
        P_isOfficialPublish:'',
        P_orderId:'',
        P_authorType:'',
        P_authorTypes:[
          { value:'',label:'--请选择--'
          },{ value:'1',label:'本校老师'
          },{ value:'2',label:'本校学生'
          },{ value:'3',label:'外校人员'
          }],
        P_authorName:'',
        P_sexId:'',
        P_sexIds:[
          { value:'',label:'--请选择--'
              },{ value:'1',label:'男'
              },{ value:'2',label:'女'
          }],
        P_authorCode:'',
        P_subject:'',
        P_titleId:'',
        P_titleIds:[
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
        P_eduLevelId:'',
        P_eduLevelIds:[
          { value:'',label:'--请选择--'
          },{ value:'0',label:'博士研究生'
          },{ value:'1',label:'硕士研究生'
          },{ value:'2',label:'本科生'
          },{ value:'3',label:'大专生'
          },{ value:'4',label:'中专生'
          },{ value:'5',label:'其他'
          }],
        P_isTxzz:'',
        P_isTxzz:[
          { value:'',label:'--请选择--'
          },{ value:'0',label:'否'
          },{ value:'1',label:'是'
          }],
        P_authorUnit:'',
        P_workRatio:'',
        P_keywords:'',
        P_productAbstract:'',
        P_intro:'',
        P_isdownsort:'',
        P_orderField:'',
        P_orderFields:[
            { value:'',label:'--请选择--'
            },{ value:'审核意见',label:'审核意见'
            },{ value:'第一作者职工号',label:'第一作者职工号'
            },{ value:'数据来源',label:'数据来源'
            },{ value:'论文类型',label:'论文类型'
            },{ value:'论文题目',label:'论文题目'
            },{ value:'学科门类',label:'学科门类'
            },{ value:'第一作者类型',label:'第一作者类型'
            },{ value:'第一作者',label:'第一作者'
            },{ value:'通讯作者',label:'通讯作者'
            },{ value:'所属单位',label:'所属单位'
            },{ value:'第一作者职工号',label:'第一作者职工号'
            },{ value:'发表',label:'发表'
            },{ value:'发表刊物',label:'发表刊物'
            },{ value:'一级学科',label:'一级学科'
            },{ value:'项目来源',label:'项目来源'
            },{ value:'发表范围',label:'发表范围'
            },{ value:'卷号',label:'卷号'
            },{ value:'字数',label:'字数'
            },{ value:'单位排名',label:'单位排名'
            },{ value:'关键字',label:'关键字'
            },{ value:'审核状态',label:'审核状态'
            },{ value:'版面',label:'版面'
            },{ value:'是否为译文',label:'是否为译文'
            },{ value:'录入人',label:'录入人'
            },{ value:'录入时间',label:'录入时间'
            },{ value:'ISSN号',label:'ISSN号'
            },{ value:'索引号',label:'索引号'
            },{ value:'CN号',label:'CN号'
            },{ value:'是否正式出版',label:'是否正式出版'
            }],
        P_Field:'',    
        P_Fields:[
            { value:'',label:'--请选择--'
            },{ value:'一般期刊',label:'一般期刊'
            },{ value:'重要报刊理论版',label:'重要报刊理论版'
            },{ value:'T类一级期刊',label:'T类一级期刊'
            },{ value:'T类二级期刊',label:'T类二级期刊'
            },{ value:'A类重要期刊',label:'A类重要期刊'
            },{ value:'B类重要期刊',label:'B类重要期刊'
            },{ value:'C类重要期刊',label:'C类重要期刊'
            },{ value:'D类重要期刊',label:'D类重要期刊'
            },{ value:'东莞理工学院学报',label:'东莞理工学院学报'
            },{ value:'《人民日报》理论版',label:'《人民日报》理论版'
            },{ value:'《光明日报》理论版',label:'《光明日报》理论版'
            },{ value:'《经济日报》理论版',label:'《经济日报》理论版'
            },{ value:'《中国教育报》理论版',label:'《中国教育报》理论版'
            },{ value:'T类三级期刊',label:'T类三级期刊'
            },{ value:'核心期刊',label:'核心期刊'
            },{ value:'CSSCI',label:'CSSCI'
            },{ value:'人大复印转载',label:'人大复印转载'
            },{ value:'CSSCI扩展版',label:'CSSCI扩展版'
            },{ value:'CSSCI来源刊',label:'CSSCI来源刊'
            },{ value:'CSSCI收录集刊',label:'CSSCI收录集刊'
            },{ value:'SCI',label:'SCI'
            },{ value:'EI',label:'EI'
            },{ value:'ISTP',label:'ISTP'
            },{ value:'报刊文章',label:'报刊文章'
            }],
        P_subjectType:'',
        P_subjectTypes:[
            { value:'',label:'--请选择--'
            },{ value:'轻工技术与工程',label:'一般期刊'
            },{ value:'数学',label:'重要报刊理论版'
            },{ value:'信息科学与系统科学',label:'T类一级期刊'
            },{ value:'力学',label:'T类二级期刊'
            },{ value:'物理学',label:'A类重要期刊'
            },{ value:'化学',label:'B类重要期刊'
            },{ value:'天文学',label:'C类重要期刊'
            },{ value:'地球科学',label:'D类重要期刊'
            },{ value:'生物学',label:'东莞理工学院学报'
            },{ value:'心理学',label:'《人民日报》理论版'
            },{ value:'农学',label:'《光明日报》理论版'
            },{ value:'林学',label:'《经济日报》理论版'
            },{ value:'畜牧、兽医科学',label:'《中国教育报》理论版'
            },{ value:'水产学',label:'T类三级期刊'
            },{ value:'基础医学',label:'核心期刊'
            },{ value:'临床医学',label:'CSSCI'
            },{ value:'预防医学与公共卫生学',label:'人大复印转载'
            },{ value:'军事医学与特种医学',label:'CSSCI扩展版'
            },{ value:'药学',label:'CSSCI来源刊'
            },{ value:'中医学与中药学',label:'CSSCI收录集刊'
            },{ value:'工程与技术科学基础学科',label:'SCI'
            },{ value:'信息与系统科学相关工程与技术',label:'EI'
            },{ value:'自然科学相关工程与技术',label:'ISTP'
            },{ value:'测绘科学技术',label:'报刊文章'
            },{ value:'材料科学',label:'一般期刊'
			      },{ value:'矿山工程技术',label:'重要报刊理论版'
            },{ value:'冶金工程技术',label:'T类一级期刊'
            },{ value:'机械工程',label:'T类二级期刊'
            },{ value:'动力与电气工程',label:'A类重要期刊'
            },{ value:'能源科学技术',label:'B类重要期刊'
            },{ value:'核科学技术',label:'C类重要期刊'
            },{ value:'电子与通信技术',label:'D类重要期刊'
            },{ value:'计算机科学技术',label:'东莞理工学院学报'
            },{ value:'化学工程',label:'《人民日报》理论版'
            },{ value:'产品应用相关工程与技术',label:'《光明日报》理论版'
            },{ value:'纺织科学技术',label:'《经济日报》理论版'
            },{ value:'食品科学技术',label:'《中国教育报》理论版'
            },{ value:'土木建筑工程',label:'T类三级期刊'
            },{ value:'水利工程',label:'核心期刊'
            },{ value:'交通运输工程',label:'CSSCI'
            },{ value:'航空、航天科学技术',label:'人大复印转载'
            },{ value:'环境科学技术及资源科学技术',label:'CSSCI扩展版'
            },{ value:'安全科学技术',label:'CSSCI来源刊'
            }],
        P_projectSourceType:'',
        P_projectSourceTypes:[
            { value:'',label:'--请选择--'
            },{ value:'“９７３”计划',label:'“９７３”计划'
            },{ value:'国家科技攻关计划',label:'国家科技攻关计划'
            },{ value:'“８６３”计划',label:'“８６３”计划'
            },{ value:'国家自然科学基金项目',label:'国家自然科学基金项目'
            },{ value:'主管部门科技项目',label:'主管部门科技项目'
            },{ value:'国家科技部',label:'国家科技部'
            },{ value:'国家发改委',label:'国家发改委'
            },{ value:'国务院其他部门',label:'国务院其他部门'
            },{ value:'省、市、自治区科技项目',label:'省、市、自治区科技项目'
            },{ value:'企事业单位委托科技项目',label:'企事业单位委托科技项目'
            },{ value:'国际合作项目',label:'国际合作项目'
            },{ value:'自选课题',label:'自选课题'
            },{ value:'其他课题',label:'其他课题'
            },{ value:'科技部重大专项',label:'科技部重大专项'
            },{ value:'其他',label:'其他'
            }],
        P_checkStatusId:'',
        P_checkStatusIds:[
            { value:'',label:'--请选择--'
            },{ value:'未审核',label:'未审核'
            },{ value:'已修改',label:'已修改'
            },{ value:'机构通过',label:'机构通过'
            },{ value:'机构不通过',label:'机构不通过'
            },{ value:'学校通过',label:'学校通过'
            },{ value:'学校不通过',label:'学校不通过'
            },{ value:'待完善',label:'待完善'
            },{ value:'学院通过',label:'学院通过'
            },{ value:'学院不通过',label:'学院不通过'
            },{ value:'科研科通过',label:'科研科通过'
            },{ value:'科研科不通过',label:'科研科不通过'
            },{ value:'科研处通过',label:'科研处通过'
            },{ value:'科研处不通过',label:'科研处不通过'
            },{ value:'分管校领导审核通过',label:'分管校领导审核通过'
            },{ value:'分管校领导审核不通过',label:'分管校领导审核不通过'
            }],
        P_isTranslated:'',
        P_creatorName:'',
        P_createTime:'',
        P_paperSource:'',
        P_paperSources:[
            { value:'',label:'--请选择--'
            },{ value:'录入',label:'录入'
            },{ value:' 知网',label:' 知网'
            },{ value:' 万方',label:' 万方'
            },{ value:' SCI',label:' SCI'
            },{ value:' EI',label:' EI'
            },{ value:' CPCI-S',label:' CPCI-S'
            },{ value:' SSCI',label:' SSCI'
            },{ value:'学院通过',label:'学院通过'
            },{ value:'学院不通过',label:'学院不通过'
            },{ value:'科研科通过',label:'科研科通过'
            },{ value:'科研科不通过',label:'科研科不通过'
            },{ value:'科研处通过',label:'科研处通过'
            },{ value:'科研处不通过',label:'科研处不通过'
            },{ value:'分管校领导审核通过',label:'分管校领导审核通过'
            },{ value:'分管校领导审核不通过',label:'分管校领导审核不通过'
            }],
        P_firstAuthorType:'',
        P_checkInf:'',
        P_createDate:'',
        P_authors:'',
        P_txzzName:'',
        P_firstAuthorCode:'',
        P_firstAuthorName:'',
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

           
        
      
      
      
				     
               
               
               