export default {
  data() {
    return {
      background: '',
      pName: '',
      pEmail: '',
      pAllMsg: [],
      flag: true,
      social: [],
      education: [],
      experience: [],
      dialogVisible: false,
      dialogVisibleEdu: false,
      dialogVisibleExp: false,
      activeName: 'first',
      tabPosition: 'left',
      expTitle: '',
      eduTitle: '',
      expFlag: true,
      eduFlag: true,
      exp_id: '',
      edu_id: '',
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
      eduForm: {
        school: '',
        degree: '',
        fieldofstudy: '',
        from: '',
        to: '',
        description: ''
      },
      expForm: {
        title: '',
        company: '',
        location: '',
        from: '',
        to: '',
        description: ''
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
      },
      eduFormRules: {
        school: [
          {required: true, message: '请输入内容哦', trigger: 'blur'}
        ],
        degree: [
          {required: true, message: '请输入内容哦', trigger: 'blur'}
        ],
        from: [
          {required: true, message: '请输入内容哦', trigger: 'blur'}
        ]
      },
      expFormRules: {
        title: [
          {required: true, message: '请输入内容哦', trigger: 'blur'}
        ],
        company: [
          {required: true, message: '请输入内容哦', trigger: 'blur'}
        ],
        from: [
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
      this.background = res.avatar
      this.pName = res.name
      this.pEmail = res.email
      sessionStorage.setItem('avatar', res.avatar)
    },
    // 获取具体信息
    async getAllMsg() {
      const {data: res} = await this.$http.get('profile')
      if(res.status === 404) {
        this.$message.error('该用户尚未填写个人信息')
        this.flag = false
      } else {
        this.flag = true
        this.pAllMsg = res[0]
        this.social = res[0].social
        this.education = res[0].education
        this.experience = res[0].experience
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
        // console.log(res);
        this.pAllMsg = res
        this.social = res.social
        this.dialogVisible = false
        this.$refs[formName].resetFields()
        this.$message.success('添加成功')
      })
    },
    // 对话框关闭事件
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done()
          this.$refs.form.resetFields()
        })
        .catch(_ => {
        });
    },
    // 编辑教育经历按钮
    editEdu(val) {
      if(val === 1) {
        this.eduTitle = '添加教育经历'
        this.eduFlag = true
      } else {
        this.eduTitle = '编辑教育经历'
        console.log(val);
        this.eduFlag = false
        this.edu_id = val._id
      }
      this.dialogVisibleEdu = true
    },
    // 添加教育经历模态框取消事件
    dialogCancelEdu(formName) {
      this.dialogVisibleEdu = false
      this.$refs[formName].resetFields()
    },
    // 添加教育经历模态框确定事件
    dialogTrueEdu(formName) {
      this.$refs[formName].validate(async(valid) => {
        if(!valid) return
        if(this.eduFlag === true) {
          const {data: res} = await this.$http.post('profile/education', this.eduForm)
          this.education = res[0].education
          this.dialogVisibleEdu = false
          this.$refs[formName].resetFields()
          this.$message.success('添加成功')
        } else {
          const {data: res} = await this.$http.put(`profile/eduOne?edu_id=${this.edu_id}`, this.eduForm)
          this.education = res.education
          this.$message.success('修改成功')
          this.dialogVisibleEdu = false
          this.$refs[formName].resetFields()
        }
      })
    },
    
    // 添加教育经历模态框关闭事件
    handleCloseEdu(done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done()
          this.$refs.eduForm.resetFields()
        })
        .catch(_ => {
        });
    },
    // 添加工作经验按钮事件
    editExp(index) {
      if(index === 1) {
        this.expTitle = '添加工作经历'
        this.expFlag = true
      } else {
        this.expTitle = '编辑工作经历'
        this.expFlag = false
        // console.log(index);
        this.exp_id = index._id
      }
      this.dialogVisibleExp = true
    },
    // 添加工作经历模态框取消事件
    dialogCancelExp(formName) {
      this.dialogVisibleExp = false
      this.$refs[formName].resetFields()
    },
    // 工作经历模态框确定事件
    dialogTrueExp(formName) {
      this.$refs[formName].validate(async(valid) => {
        if(!valid) return
        if(this.expFlag === true) {
          const {data: res} = await this.$http.post('profile/experience', this.expForm)
          this.experience = res[0].experience
          this.dialogVisibleExp = false
          this.$refs[formName].resetFields()
          this.$message.success('添加成功')
        } else {
          const {data: res} = await this.$http.put(`profile/expOne?exp_id=${this.exp_id}`, this.expForm)
          this.experience = res.experience
          this.$message.success('修改成功')
          this.dialogVisibleExp = false
          this.$refs[formName].resetFields()
        }
        
      })
    },
    // 工作经历模态框关闭事件
    handleCloseExp(done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done()
          this.$refs.expForm.resetFields()
        })
        .catch(_ => {
        });
    },
    handleClick(tab, event) {
    },
    // 删除教育经历按钮事件
    async delEdu(val) {
      const {data: res} = await this.$http.delete(`profile/education?edu_id=${val._id}`)
      this.education = res.education
      this.$message.success('删除成功')
    },
    // 删除工作经历
    async delEep(val) {
      const {data: res} = await this.$http.delete(`profile/experience?exp_id=${val._id}`)
      this.experience = res.experience
      this.$message.success('删除成功')
    }
  }
}