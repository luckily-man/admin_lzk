<template>
  <div class="mainer">

    <div class="modal" @click="close" v-show="cover"></div>

    <div class="dialog" v-show="flag">
      <p class="title"><span>提示：</span><i @click="cancel">×</i></p>
      <p class="body"><span>确定已经完成了吗？</span></p>
      <div class="btn">
        <input type="button" class="calcel" value="取消" @click="cancel">
        <input type="button" class="makesure" value="确定" @click="makesure">
      </div>
    </div>

  </div>
</template>

<script src="./my-dialog.js">
</script>

<style lang="scss" scoped src="./my-dialog.scss">

</style>