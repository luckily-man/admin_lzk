<template>
  <div>
    <!-- 表格 -->
    <el-table :data="tableData" style="width: 100%" >
      <el-table-column prop="date" label="日期" ></el-table-column>
      <el-table-column prop="name" label="姓名" ></el-table-column>
      <el-table-column prop="email" label="邮箱" ></el-table-column>
      <el-table-column prop="permission" label="权限" ></el-table-column>
      <el-table-column label="操作" >
            <template slot-scope="scope">
              <el-row>
                <el-button type="primary" icon="el-icon-edit" circle @click="editUser(scope.row)"></el-button>
                <!-- <el-button type="danger" icon="el-icon-delete" circle ></el-button> -->
              </el-row>
            </template>
          </el-table-column>
    </el-table>
    <!-- 编辑个人信息对话框 -->
    <el-dialog title="提示" :visible.sync="dialogVisible" width="30%" :before-close="handleClose" :modal="false">
      <el-form ref="form" :model="form" label-width="80px" :rules="formRules">
        <el-form-item label="姓名" prop="name">
          <el-input v-model="form.name" ref="name"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="form.email" ref="email"></el-input>
        </el-form-item>
        <el-form-item label="权限">
           <el-select v-model="value" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="editUserOk('form')">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script src="./userlist.js">
</script>

<style lang="scss" scoped src="./userlist.scss">

</style>