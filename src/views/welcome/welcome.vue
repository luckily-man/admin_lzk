<template>
  <div>
    <!-- 欢迎界面 -->
    <div class="welcome-header">
      <!-- 卡片组 -->
      <el-row :gutter="10" class="m-b-20">
        <!-- 卡片一 -->
        <el-col :span="6">
          <el-card shadow="always">
            <!-- 卡片一标题 -->
            <div class="card-header m-b-10">
              <span>卡片一</span>
            </div>
            <!-- 卡片一第二部分 -->
            <div class="f-s-25">
              <span>this is container</span>
              <span class="el-icon-coin"></span>
            </div>
            <!-- 进度条 -->
            <el-progress :percentage="60" :status="status" :format="format"></el-progress>
            <!-- 文字链接 -->
            <el-link :underline="false" href="https://www.baidu.com">go to baidu</el-link>
          </el-card>
        </el-col>
        <!-- 卡片二 -->
        <el-col :span="6">
          <el-card shadow="always">
            <!-- 卡片二标题 -->
            <div class="card-header m-b-10">
              <span>卡片二</span>
            </div>
            <!-- 卡片二第二部分 -->
            <div class="f-s-25">
              <span>this is container</span>
              <span class="el-icon-cpu"></span>
            </div>
            <!-- 进度条 -->
            <el-progress :percentage="50" :status="status" :format="format"></el-progress>
            <!-- 文字链接 -->
            <el-link :underline="false" href="http://localhost:8080/#/Table">go to Table</el-link>
          </el-card>
        </el-col>
        <!-- 卡片三 -->
        <el-col :span="6">
          <el-card shadow="always">
            <!-- 卡片三标题 -->
            <div class="card-header m-b-10">
              <span>卡片三</span>
            </div>
            <!-- 卡片三第二部分 -->
            <div class="f-s-25">
              <span>this is container</span>
              <span class="el-icon-set-up"></span>
            </div>
            <!-- 进度条 -->
            <el-progress :percentage="70" :status="status" :format="format"></el-progress>
            <!-- 文字链接 -->
            <el-link :underline="false" href="http://localhost:8080/#/Charts">go to Charts</el-link>
          </el-card>
        </el-col>
        <!-- 卡片四 -->
        <el-col :span="6">
          <el-card shadow="always">
            <!-- 卡片三标题 -->
            <div class="card-header m-b-10">
              <span>卡片四</span>
            </div>
            <!-- 卡片四第二部分 -->
            <div class="f-s-25">
              <span>this is container</span>
              <span class="el-icon-wind-power"></span>
            </div>
            <!-- 进度条 -->
            <el-progress :percentage="70" :status="status" :format="format"></el-progress>
            <!-- 文字链接 -->
            <el-link :underline="false" href="http://localhost:8080/#/three">go to three</el-link>
          </el-card>
        </el-col>
      </el-row>
      <!-- 图表组 -->
      <el-row :gutter="20">
        <!-- 左侧盒子 -->
        <el-col :span="16">
          <el-card shadow="always">
            <!-- 图表 -->
            <div class="charts-main">
              <!-- 左侧图表 -->
              <div class="charts-aside">
                <!-- 图表文字 -->
              <div class="f-s-25">
                <span>Visitors Analytics</span>
              </div>
              <div class="m-b-10">
                <span>where are we from</span>
              </div>
                <ve-line :data="chartData" :settings="chartSettings" :extend="chartExtend" width="100%"></ve-line>
              </div>
              <!-- 右侧图表 -->
              <div class="charts-right">
                <div class="m-all-10">
                  <span class="">this is number</span>
                </div>
                <div class="m-b-10 m-l-10">
                  <span>this is text</span>
                </div>
                <ve-radar :data="chartData" :extend="chartExtend" width="100%"></ve-radar>
              </div>
            </div>
          </el-card>
        </el-col>
        
          <!-- 右侧盒子 -->
        <el-col :span="8">
          <el-card shadow="always">
            <!-- 地图上方文字 -->
            <div class="f-s-25">
              <span>this is map title</span>
            </div>
            <div  class="m-b-10 m-t-5">
              <span>this is map title</span>
            </div>
            <!-- 地图 -->
            <map-China></map-China>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script src="./welcome.js">
import myPanel from '../../components/my-panel/my-panel.vue';
</script>

<style lang="scss" scoped src="./welcome.scss">

</style>