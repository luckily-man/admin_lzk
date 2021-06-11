<template>
  <div class="table_container">
    
    
    <!-- <vue-custom-scrollbar class="heightFull"> -->
      <ux-table 
          :tableData="tableData" 
          ref="common-table"
          :size="size"
          :border="border"
          :stripe="stripe"
          :total="total"
          :loading="loading"
          :columnData="columnData"
          :pageOptions="pageOptions"
          :select_all="select_all"
          :select_single="select_single"
          @handleCurrentChange="handleCurrentChange"
          @handleSizeChange="handleSizeChange"
          @toPage="toPage"
          @sortChange="sortChange"
          @selectAllData="selectAllData"
          @selectSinger="selectSinger">
      </ux-table>
      <!--<div>这是一条弹出框</div>-->
    <ux-dialog
      :dialog_title="dialog_title"
      :dialog_visible="dialog_visible"
      :dialog_width="dialog_width"
      @handleClose="handleClose"
      @submit="submit"
      >
      

      <!-- //可以插入文本//插入表单示例 -->
      <el-form ref="demo-form" :model="formData" label-width="80px">
        <el-form-item :label="$t('msg.name')" prop="name">
          <el-input v-model="formData.name"></el-input>
        </el-form-item>
        <el-form-item :label="$t('msg.status')" prop="status">
          <el-input v-model="formData.status" readonly></el-input>
        </el-form-item>
        <el-form-item :label="$t('msg.createTime')" prop="createTime">
          <el-input v-model="formData.createTime" readonly></el-input>
        </el-form-item>
        <el-form-item :label="$t('msg.usage')" prop="usage">
          <el-input v-model="formData.usage"></el-input>
        </el-form-item>
        <el-form-item :label="$t('msg.size')" prop="size">
          <el-input v-model="formData.size"></el-input>
        </el-form-item>
        <el-form-item :label="$t('msg.jurisdiction')" prop="jurisdiction">
          <el-input v-model="formData.jurisdiction"></el-input>
        </el-form-item>
      </el-form>
    </ux-dialog>
    <!-- </vue-custom-scrollbar> -->
    
  </div>
</template>

<script src="./Table.js">
<style lang="scss" scoped src="./Table.scss"></style>