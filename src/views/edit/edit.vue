<template>
  <div class="mainer">
    <!-- 左侧 -->
    <div class="left">
      <div class="left_div">
        <!-- 头像 -->
        <div class="avatar">
          <img :src="background" alt="">
        </div>
        <div class="p_name">
          {{pName}}
        </div>
        <div class="p_email">
          {{pEmail}}
        </div>
        <div class="unpdata_p">
          <span @click="dialogVisible = true">添加个人信息</span>
        </div>
      </div>
    </div>
    <el-dialog
      title="编辑个人信息"
      :visible.sync="dialogVisible"
      width="30%"
      :modal="false"
      :before-close="handleClose">
      <el-form ref="form" :model="form" label-width="80px" :rules="formRules" >
        <el-form-item label="姓名" prop="handle">
          <el-input v-model="form.handle"></el-input>
        </el-form-item>
        <el-form-item label="居住地" prop="location">
          <el-input v-model="form.location"></el-input>
        </el-form-item>
        <el-form-item label="从事工作" prop="status">
          <el-input v-model="form.status"></el-input>
        </el-form-item>
        <el-form-item label="所在公司" prop="company">
          <el-input v-model="form.company"></el-input>
        </el-form-item>
        <el-form-item label="个人技能" prop="skills">
          <el-input v-model="form.skills"></el-input>
        </el-form-item>
        <el-form-item label="个人介绍" prop="bio">
          <el-input v-model="form.bio"></el-input>
        </el-form-item>
        <el-form-item label="QQ" prop="qq">
          <el-input v-model="form.qq"></el-input>
        </el-form-item>
        <el-form-item label="微信" prop="wechat">
          <el-input v-model="form.wechat"></el-input>
        </el-form-item>
        <el-form-item label="个人网站" prop="website">
          <el-input v-model="form.website"></el-input>
        </el-form-item>
        <el-form-item label="github" prop="githubusername">
          <el-input v-model="form.githubusername"></el-input>
        </el-form-item>
        <el-form-item label="腾讯课堂" prop="tengxunkt">
          <el-input v-model="form.tengxunkt"></el-input>
        </el-form-item>
        <el-form-item label="网易课堂" prop="wangyikt">
          <el-input v-model="form.wangyikt"></el-input>
        </el-form-item>
        
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogCancel('form')">取 消</el-button>
        <el-button type="primary" @click="dialogTrue('form')">确 定</el-button>
      </span>
    </el-dialog>
    <!-- 右侧 -->
    <div class="right" v-show="flag">
      <span>个人信息:</span>
      <el-divider></el-divider>
      <div>
        <div>姓名: {{pAllMsg.handle}}</div>
        <div>居住地: {{pAllMsg.location}}</div>
        <div>从事工作: {{pAllMsg.status}}</div>
        <div>所在公司： {{pAllMsg.company}}</div>
        <div>技能介绍: <el-tag v-for="(item, index) in pAllMsg.skills">{{item}}</el-tag></div>
        <div>个人介绍： {{pAllMsg.bio}}</div>
        
      </div>
      <el-divider></el-divider>
      <span>联系方式:</span>
      <el-divider></el-divider>
      <div>
        <div>QQ: {{social.qq}}</div>
        <div>微信: {{social.wechat}}</div>
        <div>邮箱: {{pEmail}}</div>
        <div>个人网站: {{pAllMsg.website}}</div>
      </div>
      <el-divider></el-divider>
      <span>个人作品:</span>
      <el-divider></el-divider>
      <div>
        <div>github: {{pAllMsg.githubusername}}</div>
        <div>腾讯课堂: {{social.tengxunkt}}</div>
        <div>网易课堂: {{social.wangyikt}}</div>
      </div>
      <el-divider></el-divider>
      <span>教育经历:</span>
      <el-divider></el-divider>
      <div>
      </div>
      <el-divider></el-divider>
      <span>工作经历:</span>
      <el-divider></el-divider>
      <div>
      </div>
    </div>
  </div>
</template>

<script src="./edit.js">
</script>

<style lang="scss" scoped src="./edit.scss">

</style>