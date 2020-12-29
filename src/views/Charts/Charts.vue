<!--
 * @Author: liuzhongkun
 * @Date: 2020-12-02 10:08:27
 * @LastEditors: liuzhongkun
 * @LastEditTime: 2020-12-02 13:42:42
-->
<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="6"><div class="grid-content bg-purple">
        <Bar></Bar>
        </div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple">
        <Histogram></Histogram>
        </div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple">
        <Map></Map>
        </div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple">
        <Pie></Pie>
        </div></el-col>
      
    </el-row>
    <el-row :gutter="20">
      <el-col :span="6"><div class="grid-content bg-purple">
        <Lines></Lines>
        </div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple">
        <BaiduMap></BaiduMap>
        </div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple">
        <Wordcloud></Wordcloud>
        </div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple">
        <Liqquidfill></Liqquidfill>
        </div></el-col>
    </el-row>
  </div>
</template>

<script src="./Charts.js">

</script>

<style lang="scss" scoped src="./Charts.scss">

</style>
