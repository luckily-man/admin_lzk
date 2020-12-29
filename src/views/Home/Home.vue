<template>
  <div  class="form_container" :style="style">
    <el-container class="container_el">
      <!-- 头部区域 -->
        <el-header style="text-align: right; font-size: 12px;">
          <!-- 左侧设置按钮 -->
          <div class="header-edit">
            <el-dropdown style="cursor:pointer">
            <i class="el-icon-setting" style="margin-right: 15px"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item v-for="(item, id) in theme">
                <div class="" @click="changeStyleOne(item)">{{item.title}}</div>
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <span>设置</span>
          </div>
          <!-- 右侧退出登录按钮 -->
          <div class="header_right">
            <!-- 头像框 -->
            <div class="avatar"></div>
            <div @click="backLogin" class="cp">退出登录</div>
          </div>
        </el-header>
      <el-container>
        <!-- 左侧导航滚动条 -->
      <el-scrollbar class="aside_scroll">
        <!-- 左侧导航栏 -->
      <el-aside width="auto">
        <!-- 导航栏内容 -->
          <el-menu class="el-menu-vertical-demo" :default-active="$route.path" :collapse="isCollapse" unique-opened router>
            <el-submenu :index="item.path" v-for="(item, index) in asideMenu" :key="index" >
              <template slot="title"><i :class="item.icon"></i><span slot="title" class="bc">{{item.title}}</span></template>
              <el-menu-item-group>
                <el-menu-item :index="row.path"  v-for="(row, index) in item.children" :key="row.path" @click="getOneTitle(row)">
                  <i :class="row.icon"></i>{{row.title}}
                </el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
           <!-- 左侧折叠按钮 -->
        <div class="btn_group cp" v-model="isCollapse">
          <span  class="menu_btn" @click="derail"><i class="el-icon-s-operation" ></i></span>
        </div>
      </el-aside>
      </el-scrollbar>
        <!-- 主体区域滚动条 -->
         <el-scrollbar  class="main_scroll" ref="scroll_bar">
           <!-- 主体区域 -->
          <el-main>
            <div class="tag">
              <el-tag
                class="cp"
                v-for="(item, index) in tag"
                size="medium"
                :key="item.title"
                effect="plain"
                :type="item.type"
                closable
                :closable="item.path !== '/welcome'"
                @close="closeTag(index)"
                @click="changeMenu(item)">
                {{ item.title }}
              </el-tag>
            </div>
            <div class="breadCrumb">
              <!-- 面包屑导航 -->
              <el-breadcrumb separator=":" style="margin-bottom: 10px; margin-left: 3px">
                <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item :to="current.path" v-if="current">{{current.title}}</el-breadcrumb-item>
              </el-breadcrumb>
            </div>
            <router-view></router-view>
          </el-main>
        </el-scrollbar>
      </el-container>
      <!-- 回到顶部按钮 -->
      <div class="goback" v-show="flag" @click="goBackTop">
        <span class="el-icon-top back-icon"></span>
      </div>
    </el-container>
  </div>
</template>

<script src="./Home.js" ></script>

<style lang="scss" scoped src="./Home.scss">

</style>
