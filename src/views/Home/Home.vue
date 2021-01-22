<template>
  <div  class="form_container" :style="style">
    <el-container class="container_el">
      <!-- 头部区域 -->
        <el-header style="text-align: right; font-size: 12px;">
          <!-- 右侧设置按钮 -->
            <div class="edit_btn">
               <span>设置</span>
              <el-dropdown style="cursor:pointer">
              <i class="el-icon-setting" style="margin-left: 15px"></i>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item v-for="(item, id) in theme">
                  <div class="" @click="changeStyleOne(item)">{{item.title}}</div>
                </el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
            </div>
            <!-- 头像框 -->
            <div class="avatar">
              <img :src="background" alt="">
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
