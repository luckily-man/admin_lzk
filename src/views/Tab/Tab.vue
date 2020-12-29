<template>
  <div class="lang table_container">
    <div class="block">
      <el-date-picker
        v-model="value3"
        type="datetime"
        placeholder="选择日期时间"
        default-time="12:00:00">
      </el-date-picker>
    </div>
    <el-input placeholder="请输入内容" v-model="input3" class="input-with-select" style="margin: 10px 200px 10px 0; width: 50%">
      <el-button slot="append" icon="el-icon-search"></el-button>
    </el-input>
    <button class="btnChange" @click="changeLangEvent()">{{changeLang}}</button>
    <ux-table
      ref="common-table"
      :size="size"
      :border="border"
      :stripe="stripe"
      :total="total"
      :tableData="tableData"
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
      @selectSinger="selectSinger"
      >
    </ux-table>
    <ux-dialog
      :dialog_title="dialog_title"
      :dialog_visible="dialog_visible"
      :dialog_width="dialog_width"
      @handleClose="handleClose"
      @submit="submit"
      >
      <!--<div>这是一条弹出框</div>-->

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
  
  </div>
</template>

<script src="./Tab.js">

</script>

<style lang="scss" scoped src="./Tab.scss">

</style>
