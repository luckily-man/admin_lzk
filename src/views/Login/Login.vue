<!--
 * @Author: liuzhongkun
 * @Date: 2020-12-03 09:39:15
 * @LastEditors: liuzhongkun
 * @LastEditTime: 2020-12-03 09:39:15
-->
<template>
  <div class="login_container" :style="style">
    <!-- 色彩选择框 -->
    <el-color-picker v-model="color" show-alpha @change="changeColor" v-show="flag"></el-color-picker>
    <!-- 登录表单 -->
    <el-form v-show="flag" ref="LoginForm" :model="LoginForm" label-position="left" class="login_form" :rules="loginRules">
      <!-- username -->
      <el-form-item label="username" prop="username">
        <el-input
        ref="username"
        v-model="LoginForm.username"
        placeholder="username"
        name="username"
        type="text"
        autocomplete="on"
        tableindex="1"
        >
        </el-input>
      </el-form-item>
      <!-- email -->
      <el-form-item label="email" prop="email">
        <el-input
        ref="email"
        v-model="LoginForm.email"
        placeholder="email"
        name="email"
        type="text"
        autocomplete="on"
        tableindex="1"
        >
        </el-input>
      </el-form-item>
      <!-- password -->
      <el-form-item label="password" prop="password">
        <el-input
        ref="password"
        v-model="LoginForm.password"
        placeholder="password"
        name="password"
        type="password"
        autocomplete="on"
        tableindex="2"
        show-password
        :key="passwordType"
        :type="passwordType"
        >
        </el-input>
      </el-form-item>
      
      <el-form-item prop="yzm" class="yzm_put">
        <el-input 
        v-model="LoginForm.yzm" 
        placeholder="请输入验证码"
        @change="getInput"
        class="yzm_edit m-t-20 m-b-20">
        </el-input>
        <div @click="refreshCode" class="yzm_canvas m-t-20 m-b-20">
          <Identify :identifyCode="identifyCode"></Identify>
        </div>
      </el-form-item>       
      <!-- 登录按钮 -->
      <el-button type="primary" :loading="loading" class="btn_login" @click.native.prevent="handleLogin('LoginForm')">登录</el-button>
      <!-- 注册页面 -->
      <el-button type="primary" class="btn_register" @click.native.prevent="handleRegisterIn">注册</el-button>
    </el-form>
    <!-- 注册表单 -->
    <el-form v-show="!flag" ref="RegisterForm" :model="RegisterForm" label-position="left" class="register_form" :rules="RegisterRules">
      <!-- username -->
      <el-form-item label="用户名" prop="editUsername"  class="register_username w-400">
        <el-input
        ref="editUsername"
        v-model="RegisterForm.editUsername"
        placeholder="username"
        name="username"
        type="text"
        autocomplete="on"
        tableindex="1"
        prefix-icon="el-icon-user-solid"
        >
        </el-input>
      </el-form-item>
      <!-- email -->
      <el-form-item label="邮箱" prop="editEmail"  class="register_username w-400">
        <el-input
        ref="editEmail"
        v-model="RegisterForm.editEmail"
        placeholder="email"
        name="editEmail"
        type="text"
        autocomplete="on"
        tableindex="1"
        prefix-icon="el-icon-message"
        >
        </el-input>
      </el-form-item>
      <!-- password -->
      <el-form-item label="密码" prop="editPassword" class="w-400">
        <el-popover placement="right" width="330" trigger="focus">
          <div>
            <span v-show="passwordLength===null">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-error1"></use>
              </svg>
            </span>
            <span v-show="!passwordLength&&passwordLength!==null">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-shield-01"></use>
              </svg>
            </span>
            <span v-show="passwordLength">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-huabanfuben"></use>
              </svg>
            </span>
            密码长度在6~15位
          </div>
          <div>
           <span v-show="passwordLevel == 0">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-error1"></use>
              </svg>
            </span>
            <span v-show="passwordLevel == 1">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-shield-01"></use>
              </svg>
            </span>
            <span v-show="passwordLevel == 2 || passwordLevel == 3 || passwordLevel == 4">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-huabanfuben"></use>
              </svg>
            </span>
            至少包含数字/大写字母/小写字母/特殊字符2种组合
          </div>
            <div class="m-t-10">
              密码强度:
              <span
                class="pwd-tip-style"
                :style="{ backgroundColor: lowBgColor }"
              ></span>
              <span class="pwd-tip-style" :style="{ backgroundColor: midBgColor }"></span>
              <span class="pwd-tip-style" :style="{ backgroundColor: highBgColor }"></span>
              {{ safeMsg }}
            </div>
          <el-input
          ref="editPassword"
          v-model="RegisterForm.editPassword"
          placeholder="password"
          name="editPassword"
          type="password"
          autocomplete="on"
          tableindex="2"
          show-password
          :key="passwordType"
          :type="passwordType"
          slot="reference"
          prefix-icon="el-icon-lock"
          >
          </el-input>
        </el-popover>
      </el-form-item>
      <!-- 确认密码 -->
      <el-form-item label="确认密码" prop="confirmPassword" class="w-400">
        <el-input
        ref="confirmPassword"
        v-model="RegisterForm.confirmPassword"
        placeholder="password"
        name="confirmPassword"
        type="password"
        autocomplete="on"
        tableindex="3"
        show-password
        :key="passwordType"
        :type="passwordType"
        prefix-icon="el-icon-lock"
        @keyup.enter.native="confirmpassword"
        >
        </el-input>
      </el-form-item>
      <!-- 注册页面 -->
      <div class="register_btn">
        <el-button type="primary" class="m-t-10 m-l-20"  @click.native.prevent="handleRegisterCancel('RegisterForm')">取消</el-button>
        <el-button type="primary" class="m-t-10 m-r-20" @click.native.prevent="handleRegisterOut('RegisterForm')">提交</el-button>
      </div>
    </el-form>
    <!-- 主题选择 -->
    <div v-for="(item, id) in  backgroundImages" :key="id" v-show="flag">
      <img :src="item.src" alt="" class="bg_img m-t-10" @click="changeImage(item)">
    </div>
  </div>
</template>

<script src="./Login.js"></script>

<style lang="scss" scoped src="./Login.scss">

</style>
