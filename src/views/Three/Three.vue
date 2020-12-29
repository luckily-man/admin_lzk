<template>
  <div>
    
    <el-row :gutter="10">
      <el-col :span="6">
        <my-panel>
          <div slot="panel-container">
            <el-table :data="tableData" style="width: 100%">
              <el-table-column prop="date" label="日期"></el-table-column>
              <el-table-column prop="name" label="姓名"></el-table-column>
              <el-table-column prop="address" label="地址"></el-table-column>
            </el-table>
          </div>
        </my-panel>
      </el-col>
      <el-col :span="6">
        <my-panel>
          <div slot="panel-container">
            <el-table :data="tableData" style="width: 100%">
              <el-table-column prop="date" label="日期"></el-table-column>
              <el-table-column prop="name" label="姓名"></el-table-column>
              <el-table-column prop="address" label="地址"></el-table-column>
            </el-table>
          </div>
        </my-panel>
      </el-col>
      <el-col :span="6">
        <my-panel>
          <div slot="panel-container">
            <el-table :data="tableData" style="width: 100%">
              <el-table-column prop="date" label="日期"></el-table-column>
              <el-table-column prop="name" label="姓名"></el-table-column>
              <el-table-column prop="address" label="地址"></el-table-column>
            </el-table>
          </div>
        </my-panel>
      </el-col>

      <el-col :span="6">
       <my-panel>
          <div slot="panel-container">
            <el-table :data="tableData" style="width: 100%">
              <el-table-column prop="date" label="日期"></el-table-column>
              <el-table-column prop="name" label="姓名"></el-table-column>
              <el-table-column prop="address" label="地址"></el-table-column>
            </el-table>
          </div>
        </my-panel>
      </el-col>
    </el-row>
   
   <el-row :gutter="20">
    <el-col :span="6">
      <my-panel>
        <div slot="panel-container">
          <ve-line :data="chartData" :settings="chartSettings" :ref="createChart"></ve-line>
        </div>
      </my-panel>
     
    </el-col>
    <el-col :span="6">
      <my-carousel></my-carousel>
      
      </el-col>
    <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
    <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
  </el-row>
  </div>
</template>

<script src="./Three.js">
import myPanel from '../../components/btn-panel/my-panel.vue';


</script>

<style scoped lang="scss" src="./Three.scss">

</style>