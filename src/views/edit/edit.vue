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
          <span @click="dialogVisible = true">修改个人信息</span>
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
      <!-- 添加教育经历 -->
        <el-dialog
        title="添加教育经历"
        :visible.sync="dialogVisibleEdu"
        width="30%"
        :modal="false"
        :before-close="handleCloseEdu">
          <el-form ref="eduForm" :model="eduForm" label-width="80px" :rules="eduFormRules" >
            <el-form-item label="学校" prop="school">
              <el-input v-model="eduForm.school"></el-input>
            </el-form-item>
            <el-form-item label="学历" prop="degree">
              <el-input v-model="eduForm.degree"></el-input>
            </el-form-item>
            <el-form-item label="专业" prop="fieldofstudy">
              <el-input v-model="eduForm.fieldofstudy"></el-input>
            </el-form-item>
            <el-form-item label="开始时间" prop="from">
              <el-input v-model="eduForm.from"></el-input>
            </el-form-item>
            <el-form-item label="截止时间" prop="to">
              <el-input v-model="eduForm.to"></el-input>
            </el-form-item>
            <el-form-item label="详细描述" prop="description">
              <el-input v-model="eduForm.description"></el-input>
            </el-form-item>
          </el-form>
          <span slot="footer" class="dialog-footer">
            <el-button @click="dialogCancelEdu('eduForm')">取 消</el-button>
            <el-button type="primary" @click="dialogTrueEdu('eduForm')">确 定</el-button>
          </span>
        </el-dialog>

        <!-- 添加个人经历 -->
        <el-dialog
        title="添加工作经历"
        :visible.sync="dialogVisibleExp"
        width="30%"
        :modal="false"
        :before-close="handleCloseExp">
          <el-form ref="expForm" :model="expForm" label-width="80px" :rules="expFormRules" >
            <el-form-item label="工作名称" prop="title">
              <el-input v-model="expForm.title"></el-input>
            </el-form-item>
            <el-form-item label="工作公司" prop="company">
              <el-input v-model="expForm.company"></el-input>
            </el-form-item>
            <el-form-item label="工作地点" prop="location">
              <el-input v-model="expForm.location"></el-input>
            </el-form-item>
            <el-form-item label="开始时间" prop="from">
              <el-input v-model="expForm.from"></el-input>
            </el-form-item>
            <el-form-item label="截止时间" prop="to">
              <el-input v-model="expForm.to"></el-input>
            </el-form-item>
            <el-form-item label="工作描述" prop="description">
              <el-input v-model="expForm.description"></el-input>
            </el-form-item>
          </el-form>
          <span slot="footer" class="dialog-footer">
            <el-button @click="dialogCancelExp('expForm')">取 消</el-button>
            <el-button type="primary" @click="dialogTrueExp('expForm')">确 定</el-button>
          </span>
        </el-dialog>


      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="基本信息" name="first">
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
        </el-tab-pane>
        <el-tab-pane label="联系方式" name="second">
          <span>联系方式:</span>
          <el-divider></el-divider>
          <div>
            <div>QQ: {{social.qq}}</div>
            <div>微信: {{social.wechat}}</div>
            <div>邮箱: {{pEmail}}</div>
            <div>个人网站: {{pAllMsg.website}}</div>
            <div>github: {{pAllMsg.githubusername}}</div>
            <div>腾讯课堂: {{social.tengxunkt}}</div>
            <div>网易课堂: {{social.wangyikt}}</div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="教育经历" name="third">
          <div class="edu">
            <span>教育经历:</span>
            <el-button type="primary" icon="el-icon-edit" circle @click="editEdu"></el-button>
          </div>
          <el-divider></el-divider>
          <div>
            <div v-for="(item, index) in education" :key="item._id">
              <div class="edu_btn">
                <span>教育经历{{index+1}}:</span>
                <el-button type="danger" icon="el-icon-delete" circle @click="delEdu(item)"></el-button>
              </div>
              <el-divider></el-divider>
              <div>学校： {{item.school}}</div>
              <div>学位 {{item.degree}}</div>
              <div>专业 {{item.fieldofstudy}}</div>
              <div>开始日期： {{item.from}}</div>
              <div>截止日期： {{item.to}}</div>
              <div>介绍： {{item.description}}</div>
              <el-divider></el-divider>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="工作经历" name="fourth">
          <div>
            <div class="edu">
              <span>工作经历:</span>
                <el-button type="primary" icon="el-icon-edit" circle @click="editExp"></el-button>
            </div>
            <el-divider></el-divider>
            <div>
              <div v-for="(item, index) in experience" :key="item._id">
                <div class="edu_btn">
                  <span>工作经历{{index+1}}:</span>
                  <el-button type="danger" icon="el-icon-delete" circle @click="delEep(item)"></el-button>
                </div>
                <el-divider></el-divider>
                <div>工作名称：{{item.title}}</div>
                <div>工作公司：{{item.company}}</div>
                <div>工作地点：{{item.location}}</div>
                <div>开始日期：{{item.from}}</div>
                <div>截止日期：{{item.to}}</div>
                <div>工作介绍：{{item.description}}</div>
                <el-divider></el-divider>
              </div>
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script src="./edit.js">
</script>

<style lang="scss" scoped src="./edit.scss">

</style>