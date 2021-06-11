import { checkEmail } from '../../utils/myUtils'
export default {
  data() {
    let validateEmail = (rule, value, callback) => {
      if(value === '') {
        callback(new Error('请输入邮箱'))
      } else if (checkEmail(value) !== 1){
        callback(new Error('邮箱不符合要求'))
      } else {
        callback()
      }
    }
    return {
      tableData: [],
      dialogVisible: false,
      
      editform: {},
      form: {
        name: '',
        email: ''
      },
      formRules: {
        name: [
          {required: true, message: '名字不能为空', trigger: 'blur'},
          {min: 1, max: 30, message: '用户名长度在3~30个字符之间', trigger: 'blur'}
        ],
        email: [
          {required: true, validator: validateEmail, trigger: 'blur'}
        ]
      },
      options: [{
        value: 'admin',
        label: 'admin'
      }, {
        value: 'user',
        label: 'user'
      }],
      value: '',
      uuid: ''
    }
  },
  mounted() {
    this.getUsers()
  },
  methods: {
    // 获取所有用户数据
    async getUsers() {
      const {data: res} = await this.$http.get('users/all')
      this.tableData = res.data
      // console.log(res);
      this.value = res.permission
    },
    // 编辑按钮
    editUser(val) {
      this.dialogVisible = true
      console.log(val);
      this.editform = val
      this.form.name = this.editform.name
      this.form.email = this.editform.email
      this.value = val.permission
      this.uuid = val._id
    },
    // 对话框确定按钮
    editUserOk(formName) {
      this.$refs[formName].validate(async(valid) => {
        if(!valid) return
        const form = {
          name: this.form.name,
          email: this.form.email,
          permission: this.value
        }
        // console.log(form);
        const {data: res} = await this.$http.post(`users/person?uuid=${this.uuid}`, form)
        // console.log(res);
        if(res.status !== 200) {
          this.$message.error('修改失败')
        } else {
          this.$message.success('修改成功')
          this.dialogVisible = false
          this.getUsers()
        }
      })
      
    },
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done();
        })
        .catch(_ => {});
    }
  }
}