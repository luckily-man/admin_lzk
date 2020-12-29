<template>
  <div>
    <div class="put_main">
      <div style="width:350px">
        <el-input v-model="input" placeholder="请输入内容" @change="elePut"></el-input>
      </div>
      <div>
        <el-select v-model="select" slot="prepend" placeholder="请选择" @change="seleIput">
          <el-option v-for="(item,id) in base" :label="item.title" :value="item.id"></el-option>
        </el-select>
      </div>
    </div>
    
    <div class="put_main2">
      <div style="width:350px">
        <el-input v-model="output" placeholder="请输入内容"></el-input>
      </div>
      <div>
        <el-select v-model="selectTwo" slot="prepend" placeholder="请选择" @change="seleOutPut">
          <el-option v-for="(item,id) in base" :label="item.title" :value="item.id"></el-option>
        </el-select>
      </div>
    </div>
  </div>
</template>

<script src="./binary.js">
</script>

<style lang="scss" scoped src="./binary.scss">
</style>
