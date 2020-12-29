<template>
  <div class="my-panel-tpl">
    <div class="mainer" v-if="!remove" v-bind:class="[{'btn-expand': expand}]">
      <div class="mainer-header">
        <div class="btn-title">lzk</div>
        <div class="btn-row">
          <el-button type="primary" circle size="mini" icon="el-icon-zoom-in" @click="btnExpand"></el-button>
          <el-button type="primary" circle size="mini" icon="el-icon-refresh-right" @click="btnReload"></el-button>
          <el-button type="primary" circle size="mini" icon="el-icon-remove" @click="btnCollapse"></el-button>
          <el-button type="primary" circle size="mini" icon="el-icon-delete-solid" @click="btnRemove"></el-button>
        </div>
      </div>
      <div class="mainer-body" v-show="collapse" 
      v-loading="loading"
      element-loading-text="拼命加载中"
      element-loading-spinner="el-icon-loading"
      element-loading-background="rgba(0, 0, 0, 0.1)"
      >
        <slot name="panel-container"></slot>
        <slot name="panel-footer"></slot>
      </div>
    </div>
  </div>
</template>

<script src="./my-panel.js">

</script>

<style lang="scss" scoped src="./my-panel.scss">

</style>
