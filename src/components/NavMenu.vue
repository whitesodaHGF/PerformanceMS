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
            <el-menu-item index="1-1">通知公告</el-menu-item>
            <el-menu-item index="1-2">文件下载</el-menu-item>
          </el-menu-item-group>
        </el-submenu>

        <el-submenu index="2">
          <template slot="title">
            <i class=" el-icon-location"></i>
            <span>我的资料</span>
          </template>
          <el-menu-item-group>
            <router-link to="PInfo"><el-menu-item index="2-1">个人资料</el-menu-item></router-link>
            <el-menu-item index="2-2">科研详情</el-menu-item>
            <el-menu-item index="2-3">登陆日志</el-menu-item>
          </el-menu-item-group>
        </el-submenu>

        <el-submenu index="3">
          <template slot="title">
            <i class=" el-icon-location"></i>
            <span>科研平台</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="3-1">机构列表</el-menu-item>
            <el-menu-item index="3-2">机构新增</el-menu-item>
            <el-menu-item index="3-3">机构查询</el-menu-item>
            <el-menu-item index="3-4">机构类别</el-menu-item>
            <el-menu-item index="3-5">团队列表</el-menu-item>
            <el-menu-item index="3-6">团队新增</el-menu-item>
            <el-menu-item index="3-6">团队查询</el-menu-item>
          </el-menu-item-group>
        </el-submenu>

        <el-submenu index="4">
          <template slot="title">
            <i class=" el-icon-location"></i>
            <span>纵向项目</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="4-1">项目一览</el-menu-item>
            <el-menu-item index="4-2">项目申报</el-menu-item>
            <el-menu-item index="4-3">项目变更</el-menu-item>
            <el-menu-item index="4-4">项目中检</el-menu-item>
            <el-menu-item index="4-4">项目结项</el-menu-item>
          </el-menu-item-group>
        </el-submenu>

        <el-submenu index="5">
          <template slot="title">
            <i class=" el-icon-location"></i>
            <span>横向项目</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="5-1">审批列表</el-menu-item>
            <el-menu-item index="5-2">合同一览</el-menu-item>
            <el-menu-item index="5-3">合同变更</el-menu-item>
            <el-menu-item index="5-4">合同结项</el-menu-item>
          </el-menu-item-group>
        </el-submenu>

        <el-submenu index="6">
          <template slot="title">
            <i class=" el-icon-location"></i>
            <span>导航六</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="6-1">选项1</el-menu-item>
            <el-menu-item index="6-2">选项2</el-menu-item>
            <el-menu-item index="6-3">选项3</el-menu-item>
            <el-menu-item index="6-4">选项4</el-menu-item>
          </el-menu-item-group>
        </el-submenu>

        <el-submenu index="7">
          <template slot="title">
            <i class=" el-icon-location"></i>
            <span>导航七</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="7-1">选项1</el-menu-item>
            <el-menu-item index="7-2">选项2</el-menu-item>
            <el-menu-item index="7-3">选项3</el-menu-item>
            <el-menu-item index="7-4">选项4</el-menu-item>
          </el-menu-item-group>
        </el-submenu>

        <el-submenu index="8">
          <template slot="title">
            <i class=" el-icon-location"></i>
            <span>导航八</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="8-1">选项1</el-menu-item>
            <el-menu-item index="8-2">选项2</el-menu-item>
            <el-menu-item index="8-3">选项3</el-menu-item>
            <el-menu-item index="8-4">选项4</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script>
  export default {
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
