<template>
  <div class="lang table_container">
    
    <el-input placeholder="请输入内容" v-model="input3" class="input-with-select" style="margin: 10px 200px 10px 0; width: 50%">
      <el-button slot="append" icon="el-icon-search"></el-button>
    </el-input>

    <el-table :data="tableData" style="width: 100%" stripe>
      <el-table-column prop="name" label="姓名"></el-table-column>
      <el-table-column prop="stuId" label="学号"></el-table-column>
      <el-table-column prop="phone" label="手机号"></el-table-column>
      <el-table-column prop="email" label="邮箱"></el-table-column>
      <el-table-column prop="edit" label="操作">
        <template slot-scope="scope">
          <el-button type="primary" plain size="small">查看</el-button>
          <!-- <el-button type="danger" plain size="small">删除</el-button> -->
        </template>
      </el-table-column>
    </el-table>
    
      
  
  </div>
</template>

<script src="./Tab.js">

</script>

<style lang="scss" scoped src="./Tab.scss">

</style>
