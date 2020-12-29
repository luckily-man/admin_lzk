import Vcode from 'vue-puzzle-vcode'
import { mapState,mapActions } from 'vuex'
export default {
  components: {
    Vcode
  },
  data() {
    // 年龄校验
    var checkAge = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('年龄不能为空'));
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error('请输入数字值'));
        } else {
          if (value < 18) {
            callback(new Error('必须年满18岁'));
          } else {
            callback();
          }
        }
      }, 1000);
    };
    // 密码校验
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass');
        }
        callback();
      }
    };
    // 确认密码校验
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    };
    return {
      active: 0,
      // 注册表单开关
      flag: true,
      // 验证码开关
      isShow: false,
      // 上传框开关
      showUpload: false,
      // 展示表单开关
      showTable: false,
      // 步骤条配置
      step: [
        { title: '第1步', description:'', icon: '' },
        { title: '第2步', description:'', icon: '' },
        { title: '第3步', description:'', icon: '' },
        // { title: '第4步', description:'', icon: '' }
      ],
      // 注册表单
      ruleForm: {
        username: '',
        pass: '',
        checkPass: '',
        age: ''
      },
      // 接收表单
      infoForm: {
        userName: '',
        password: '',
        age: ''
      },
      // 注册表单校验
      rules: {
        username: [
          {required: true, message: '请输入用户名', trigger: 'blur'},
          {min: 3, max: 10, message: '用户名长度在3~10个字符之间', trigger: 'blur'}
        ],
        pass: [
          { required: true, validator: validatePass, trigger: 'blur' }
        ],
        checkPass: [
          { required: true, validator: validatePass2, trigger: 'blur' }
        ],
        age: [
          { required: true, validator: checkAge, trigger: 'blur' }
        ]
      }
    }
  },
  watch: {},
  mounted() {},
  beforeDestory() {},
  destoryed() {},
  computed:mapState({
    // state.username.adminData
    infodata: state => state.username.adminData 
  }),
  methods: {
    ...mapActions({adduser:'adduserAction'}),
    // 步骤条下一步按钮事件
    next() {
      this.showUpload = false
      this.showTable = true
      if (this.active++ > this.step.length - 1){
        this.active = 0;
        this.flag = true
        this.showTable = false
        this.resetForm('ruleForm')
      }
    },
    // 提交事件
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // alert('提交成功!');
          // 
          this.isShow = true
        } else {
          alert('提交失败！！')
          return false;
        }
      });
    },
    // 重置事件
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    // 用户通过了验证
    success() {
      this.isShow = false; // 通过验证后，需要手动隐藏模态框
      this.infoForm.userName = this.ruleForm.username
      this.infoForm.password = this.ruleForm.pass
      this.infoForm.age = this.ruleForm.age
      this.adduser(this.infoForm)
      this.flag = !this.flag
      this.showUpload = true
      this.active++
      
    },
    // 用户点击遮罩层，应该关闭模态框
    close() {
      this.isShow = false;
    },
  }
}