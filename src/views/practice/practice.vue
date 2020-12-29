<template>
  <div class="mainer">
    <!-- 富文本编辑器 -->
    <quill-editor 
      class="quill_mainer"
      ref="myTextEditor" 
      v-model="content" 
      :options="editorOption" 
      
      @blur="onEditorBlur($event)"
      @focus="onEditorFocus($event)"
      @change="onEditorChange($event)"
      >
    </quill-editor>

    <div class="text_mainer" v-html="msg">
      
    </div>

  </div>
</template>

<script src="./practice.js">
</script>

<style lang="scss" scoped src="./practice.scss">

</style>