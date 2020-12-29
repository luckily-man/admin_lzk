
export default {
  data() {
    return {
      content: '',
      editorOption: {
         placeholder: '编辑文章内容'
      },
      msg: ''
    }
  },
  methods: {
    // 内容改变事件
    onEditorChange({ editor, html, text }) {
      this.content = html;
    },
    onEditorReady(editor) { // 准备编辑器
 
    },
    // 获得焦点事件
    onEditorFocus(){
    },
    // 失去焦点事件
    onEditorBlur(){
      this.msg = this.content
    }, 
 

  }
}