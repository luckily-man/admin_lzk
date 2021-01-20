export default {
  data() {
    return {
      background: '',
      pName: '',
      pEmail: '',
      pAllMsg: [],
      flag: true,
      social: [],
      dialogVisible: false,
      form: {
        handle: '',
        location: '',
        status: '',
        bio: '',
        company: '',
        skills: '',
        qq: '',
        wechat: '',
        website: '',
        tengxunkt: '',
        githubusername: '',
        wangyikt: ''
      },
      formRules:{
        handle: [
          {required: true, message: '请输入名称', trigger: 'blur'},
          {min: 2, max: 40, message: '长度在2~40个字符之间', trigger: 'blur'}
        ],
        status: [
          {required: true, message: '工作名称', trigger: 'blur'}
        ],
        skills: [
          {required: true, message: '请输入技能', trigger: 'blur'}
        ],
        website: [
          {required: true, message: '请输入内容哦', trigger: 'blur'}
        ],
        tengxunkt: [
          {required: true, message: '请输入内容哦', trigger: 'blur'}
        ],
        wangyikt: [
          {required: true, message: '请输入内容哦', trigger: 'blur'}
        ]
      }
    }
  },
  mounted() {
    this.getMsg()
    this.getAllMsg()
  },
  methods: {
    // 获取个人信息
    async getMsg() {
      const {data: res} = await this.$http.get('users/current')
      // console.log(res);
      this.background = res.avatar
      this.pName = res.name
      this.pEmail = res.email
    },
    // 获取具体信息
    async getAllMsg() {
      const {data: res} = await this.$http.get('profile')
      // console.log(res);
      if(res.status === 404) {
        this.$message.error('该用户尚未填写个人信息')
        this.flag = false
      } else {
        this.flag = true
        this.pAllMsg = res[0]
        this.social = res[0].social
        // console.log(this.pAllMsg);
      }
    },
    // 对话框取消事件
    dialogCancel(formName) {
      this.dialogVisible = false
      this.$refs[formName].resetFields()
    },
    // 对话框确定事件
    dialogTrue(formName) {
      this.$refs[formName].validate(async(valid) => {
        if(!valid) return
        const {data: res} = await this.$http.post('profile', this.form)
        console.log(res);
        this.pAllMsg = res
        this.social = res.social
        this.dialogVisible = false
      })
    },
    // 对话框关闭事件
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done()
          // console.log(111);
          // this.dialogCancel()
          // this.dialogVisible = false
        })
        .catch(_ => {
          console.log(222);
        });
    }
  }
}