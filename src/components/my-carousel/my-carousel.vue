<template>
  <div>
    <div class="block carousel">
    <el-carousel trigger="click" height="180px">
      <el-carousel-item v-for="(item, id) in image" :key="id">
        <img :src="item.src" alt="">
      </el-carousel-item>
    </el-carousel>
  </div>
  </div>
</template>

<script src="./my-carousel.js">
</script>

<style lang="scss" scoped src="./my-carousel.scss">

</style>
