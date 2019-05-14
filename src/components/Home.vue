<template>
    <el-container>
      <el-header>
      <el-menu
  class="el-menu-demo"
  mode="horizontal"

  background-color="#545c64"
  text-color="#fff"
  active-text-color="#ffd04b">

  <el-menu-item index="1">绩效管理系统</el-menu-item>
  <el-submenu index="2">
    <template slot="title">用户信息</template>
    <el-menu-item index="2-1">选项1</el-menu-item>
    <el-menu-item index="2-2">选项2</el-menu-item>
    <el-menu-item index="2-3">选项3</el-menu-item>
    <el-submenu index="2-4">
      <template slot="title">选项4</template>
      <el-menu-item index="2-4-1">选项1</el-menu-item>
      <el-menu-item index="2-4-2">选项2</el-menu-item>
      <el-menu-item index="2-4-3">选项3</el-menu-item>
    </el-submenu>
  </el-submenu>
  <el-menu-item index="3"  icon="el-icon-s-comment">消息中心</el-menu-item>
  <el-menu-item index="4" >  <router-link to="/">退出系统</router-link></el-menu-item>
</el-menu>
      </el-header>
      <el-container>
        <el-aside width="250px">
          <!-- <navmenu></navmenu> -->
          <template>
  <el-row class="tac">
    <el-col :span="24">
      <el-menu  class="el-menu-vertical-demo"
      unique-opened
      router
      background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
        <el-submenu index="1">
          <template slot="title">
            <i class=" el-icon-date"></i>
            <span>我的办公</span>
          </template>
          <el-menu-item-group>
            <router-link to="/Notice"><el-menu-item index="1-1">通知公告</el-menu-item></router-link>
            <router-link to="/Download"><el-menu-item index="1-2">文件下载</el-menu-item></router-link>
          </el-menu-item-group>
        </el-submenu>

        <el-submenu index="2">
          <template slot="title">
            <span>我的资料</span>
          </template>
          <el-menu-item-group>
            <router-link to="/PInfo"><el-menu-item index="2-1">个人资料</el-menu-item></router-link>
            <router-link to="/HelloWorld"><el-menu-item index="2-2">科研详情</el-menu-item></router-link>
          </el-menu-item-group>
        </el-submenu>

        <el-submenu index="3">
          <template slot="title">
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
        </el-submenu>

        <el-submenu index="4">
          <template slot="title">
            <i class=" el-icon-location"></i>
            <span>纵向项目</span>
          </template>
          <el-menu-item-group>
            <router-link to="/ProjectMain"><el-menu-item index="4-1">项目一览</el-menu-item></router-link>
            <router-link to="/Projectapply"><el-menu-item index="4-2">项目申报</el-menu-item></router-link>
            <router-link to="/Projectchange"><el-menu-item index="4-3">项目变更</el-menu-item></router-link>
          </el-menu-item-group>
        </el-submenu>

        <el-submenu index="5">
          <template slot="title">
            <i class=" el-icon-location"></i>
            <span>横向项目</span>
          </template>
          <el-menu-item-group>
            <router-link to="/Hprojectmain"><el-menu-item index="5-1">审批列表</el-menu-item></router-link>
            <router-link to="/Hprojectsearch"><el-menu-item index="5-2">合同一览</el-menu-item></router-link>
            <router-link to="/Hprojectadd"><el-menu-item index="5-3">合同变更</el-menu-item></router-link>
          </el-menu-item-group>
        </el-submenu>

        <el-submenu index="6">
          <template slot="title">
            <i class=" el-icon-location"></i>
            <span>我的成果</span>
          </template>
          <el-menu-item-group>
            <router-link to="/Paperlistw"><el-menu-item index="6-1">论文成果</el-menu-item></router-link>
            <router-link to="/HelloWorld"><el-menu-item index="6-7">著作成果</el-menu-item></router-link>
          </el-menu-item-group>
        </el-submenu>

        <el-submenu index="7">
          <template slot="title">
            <i class=" el-icon-location"></i>
            <span>我的课程</span>
          </template>
          <el-menu-item-group>
            <router-link to="/mycourse"><el-menu-item index="7-1">课程详情</el-menu-item></router-link>
           <router-link to="/mycourseadd"><el-menu-item index="7-2">课程新增</el-menu-item></router-link>
          
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
</template>



<style>
body{
  margin:0 0 0 0;
}
.el-header{
  padding: 0px 0px;
}
</style>

<script>

import FileSaver from "file-saver";
import XLSX from "xlsx"

export default {
  name: 'App',
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