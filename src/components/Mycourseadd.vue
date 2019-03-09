<template>
<el-form ref="form" :model="form" label-width="80px">    
<el-row>
  <el-col :span="8"> 
      <el-form-item label="课程名称" >
    <el-input v-model="form.name" size="6" ></el-input>
  </el-form-item>
  </el-col>
  <el-col :span="8" push="4"> 
<el-form-item label="课程编号">
     <el-input v-model="form.name" size="6" ></el-input>
</el-form-item>
  </el-col>
</el-row>

<el-row>
  <el-col :span="8"> 
      <el-form-item label="教师单位" >
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
					<el-option value=''  label='科技创新研究院'></el-option>
					<el-option value=''  label='离职人员'></el-option>
					<el-option value=''  label='马克思主义学院'></el-option>
					<el-option value=''  label='清洁生产科技中心'></el-option>
					<el-option value=''  label='社会发展研究院'></el-option>
					<el-option value=''  label='粤台产业科技学院'></el-option>
					<el-option value=''  label='中法联合学院'></el-option>
			
    </el-select>
  </el-form-item>
  </el-col>
  <el-col :span="8" push="4"> 
<el-form-item label="课程属性">
     <el-input v-model="form.name" size="6" ></el-input>
</el-form-item>
  </el-col>
</el-row>

<el-row>
  <el-col :span="8"> 
      <el-form-item label="任课老师" >
    <el-input v-model="form.name" size="6" ></el-input>
  </el-form-item>
  </el-col>
  <el-col :span="8" push="4"> 
<el-form-item label="职工编号">
     <el-input v-model="form.name" size="6" ></el-input>
</el-form-item>
  </el-col>
</el-row>

<el-row>
  <el-col :span="8"> 
      <el-form-item label="课程属性" >
    <el-input v-model="form.name" size="6" ></el-input>
  </el-form-item>
  </el-col>
  <el-col :span="8" push="4"> 
<el-form-item label="授课班级">
     <el-input v-model="form.name" size="6" ></el-input>
</el-form-item>
  </el-col>
</el-row>

<el-row>
  <el-col :span="8"> 
      <el-form-item label="课程学时" >
    <el-input v-model="form.name" size="6" ></el-input>
  </el-form-item>
  </el-col>
  <el-col :span="8" push="4"> 
<el-form-item label="上课时间">
     <el-input v-model="form.name" size="6" ></el-input>
</el-form-item>
  </el-col>
</el-row>


<el-row>
  <el-col :span="8"> 
      <el-form-item label="上课地点" >
    <el-input v-model="form.name" size="6" ></el-input>
  </el-form-item>
  </el-col>
</el-row>

      <el-button size="small">保存</el-button>
</el-form>
</template>
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