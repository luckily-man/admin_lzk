<template>
  <div class="all_mainer">

    <!-- 步骤条 -->
    <el-steps :active="active" finish-status="success">
      <el-step v-for="(item, index) in step" :key="index" :title="item.title" :description="item.description" :icon="item.icon"></el-step>
    </el-steps>
    <el-button style="margin-top: 12px;" @click="next">下一步</el-button>
    <!-- 主体区域 -->
    <div class="div_mainer">
      <!-- 注册表单 -->
      <el-form v-show="flag" :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="用户名" prop="username">
        <el-input type="text" v-model="ruleForm.username" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pass">
        <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="checkPass">
        <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="年龄" prop="age">
        <el-input v-model.number="ruleForm.age"></el-input>
      </el-form-item>
      <el-form-item>
        <!-- 注册按钮 -->
        <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
    <!-- 验证码 -->
    <Vcode :show="isShow" @success="success" @close="close" />
    <!-- 上传框 -->
    <el-upload
      v-show="showUpload"
      class="upload-demo"
      drag
      action="https://jsonplaceholder.typicode.com/posts/"
      multiple>
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
      <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
    </el-upload>
    <!-- 展示表单 -->
    <el-table :data="infodata" v-show="showTable" border style="width:40%">
      <el-table-column prop="userName" label="用户名" width="180"></el-table-column>
      <el-table-column prop="password" label="密码" width="180"></el-table-column>
      <el-table-column prop="age" label="年龄"></el-table-column>
    </el-table>
    </div>



  </div>
</template>

<script src="./Tree.js">

</script>

<style lang="scss" scoped src="./Tree.scss">

</style>
