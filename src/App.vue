/* eslint-disable */
<template>
  <div id="app">
    <el-container>
      <el-header>
        <vheader></vheader>   
      </el-header>
      <el-container>
        <el-aside width="250px">
          <!-- <navmenu></navmenu> -->
          <template>
  <el-row class="tac">
    <el-col :span="24">
      <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
      unique-opened
      router
      background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
        <el-submenu index="1">
          <template slot="title">
            <i class=" el-icon-location"></i>
            <span>我的办公</span>
          </template>
          <el-menu-item-group>
            <router-link to="/Notice"><el-menu-item index="1-1">通知公告</el-menu-item></router-link>
            <router-link to="/Download"><el-menu-item index="1-2">文件下载</el-menu-item></router-link>
          </el-menu-item-group>
        </el-submenu>

        <el-submenu index="2">
          <template slot="title">
            <i class=" el-icon-location"></i>
            <span>我的资料</span>
          </template>
          <el-menu-item-group>
            <router-link to="/PInfo"><el-menu-item index="2-1">个人资料</el-menu-item></router-link>
            <router-link to="/HelloWorld"><el-menu-item index="2-2">科研详情</el-menu-item></router-link>
          </el-menu-item-group>
        </el-submenu>

        <el-submenu index="3">
          <template slot="title">
            <i class=" el-icon-location"></i>
            <span>科研平台</span>
          </template>
          <el-menu-item-group>
            <router-link to="/Unitlist"><el-menu-item index="3-1">机构列表</el-menu-item></router-link>
            <router-link to="/ResearchUnit"><el-menu-item index="3-2">机构新增</el-menu-item></router-link>
            <router-link to="/UnitSearch"><el-menu-item index="3-3">机构查询</el-menu-item></router-link>
            <router-link to="/Beanlist"><el-menu-item index="3-5">团队列表</el-menu-item></router-link>
            <router-link to="/Bean"><el-menu-item index="3-6">团队新增</el-menu-item></router-link>
            <router-link to="/BeanSearch"><el-menu-item index="3-7">团队查询</el-menu-item></router-link>
          </el-menu-item-group>
        </el-submenu>

        <el-submenu index="4">
          <template slot="title">
            <i class=" el-icon-location"></i>
            <span>纵向项目</span>
          </template>
          <el-menu-item-group>
            <router-link to="/ProjectMain"><el-menu-item index="4-1">项目一览</el-menu-item></router-link>
            <router-link to="/Projectadd"><el-menu-item index="4-2">项目申报</el-menu-item></router-link>
            <router-link to="/HelloWorld"><el-menu-item index="4-3">项目变更</el-menu-item></router-link>
            <router-link to="/HelloWorld"><el-menu-item index="4-4">项目中检</el-menu-item></router-link>
            <router-link to="/HelloWorld"><el-menu-item index="4-4">项目结项</el-menu-item></router-link>
          </el-menu-item-group>
        </el-submenu>

        <el-submenu index="5">
          <template slot="title">
            <i class=" el-icon-location"></i>
            <span>横向项目</span>
          </template>
          <el-menu-item-group>
            <router-link to="/HelloWorld"><el-menu-item index="5-1">审批列表</el-menu-item></router-link>
            <router-link to="/ProjectMain"><el-menu-item index="5-2">合同一览</el-menu-item></router-link>
            <router-link to="/HelloWorld"><el-menu-item index="5-3">合同变更</el-menu-item></router-link>
            <router-link to="/HelloWorld"><el-menu-item index="5-4">合同结项</el-menu-item></router-link>
          </el-menu-item-group>
        </el-submenu>

        <el-submenu index="6">
          <template slot="title">
            <i class=" el-icon-location"></i>
            <span>我的成果</span>
          </template>
          <el-menu-item-group>
            <router-link to="/Paperlist"><el-menu-item index="6-1">论文成果</el-menu-item></router-link>
            <router-link to="/HelloWorld"><el-menu-item index="6-2">论文认领</el-menu-item></router-link>
            <router-link to="/HelloWorld"><el-menu-item index="6-3">论文检索</el-menu-item></router-link>
            <router-link to="/HelloWorld"><el-menu-item index="6-4">著作成果</el-menu-item></router-link>
            <router-link to="/HelloWorld"><el-menu-item index="6-5">研究报告</el-menu-item></router-link>
            <router-link to="/HelloWorld"><el-menu-item index="6-6">鉴定申请</el-menu-item></router-link>
            <router-link to="/HelloWorld"><el-menu-item index="6-7">鉴定成果</el-menu-item></router-link>
          </el-menu-item-group>
        </el-submenu>

        <el-submenu index="7">
          <template slot="title">
            <i class=" el-icon-location"></i>
            <span>我的课程</span>
          </template>
          <el-menu-item-group>
            <router-link to="/Mycourse"><el-menu-item index="7-1">课程详情</el-menu-item></router-link>
            <router-link to="/Mycourseadd"><el-menu-item index="7-2">课程新增</el-menu-item></router-link>
            <router-link to="/HelloWorld"><el-menu-item index="7-3">选项3</el-menu-item></router-link>
            <router-link to="/HelloWorld"><el-menu-item index="7-4">选项4</el-menu-item></router-link>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-col>
  </el-row>
</template>
        </el-aside>
        <el-main style="padding:0px;margin-left:-1px;">
          <!-- <bean></bean> -->
          <div>
              <!-- <router-link to="/Bean">Go to bean</router-link>
              <router-link to="/Paper">Go to paper</router-link> -->
              <router-view></router-view>
          </div>
          
          </el-main>
      </el-container>
    </el-container>

  </div>
</template>

<script>
import NavMenu from './components/NavMenu.vue'
import Header from './components/Header.vue'
import FileSaver from "file-saver";
import XLSX from "xlsx"

export default {
  name: 'App',
  components:{
    'navmenu':NavMenu,
    'vheader':Header,
  },
  methods: {
      handleOpen(key, keyPath) {
        //console.log(key, keyPath)
      },
      handleClose(key, keyPath) {
        //console.log(key, keyPath)
      }
    }
}
</script>

<style>
body{
  margin:0 0 0 0;
}
.el-header{
  padding: 0px 0px;
}
</style>
   