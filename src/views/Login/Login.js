import { pwdLength, checkStrong } from '../../utils/myUtils.js'
import Identify from '../../personal/Identify'
export default {
  components: { Identify },
  data() {
    let validateYZM = (rule, value, callback) => {
      if(value == ''){
        callback(new Error('请输入验证码'))
      } else if (value !== this.identifyCode) {
        callback(new Error('验证码错误'))
      } else {
        callback()
      }
    }
    let validatePassword = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('密码不能为空'))
      } else if (checkStrong(value) == 1) {
        callback(new Error('密码不符合要求'))
      }else {
        if (this.RegisterForm.confirmPassword !== '') {
          this.$refs.RegisterForm.validateField('confirmPassword')
        }
        callback()
      }
    }
    let validateConfirmPassword = (rule, value, callback) => {
      if (value == '') {
          callback(new Error('请输入密码'));
      } else if (value !== this.RegisterForm.editPassword) {
          callback(new Error('两次密码输入不一致'));
      }else if (checkStrong(value) == 1) {
        callback(new Error('密码不符合要求')) 
      }else {
          callback();
      }
  }
    return {
      style: {
        background: "URL('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1607083673526&di=7a4b805a903c2ebefc880330f6bc1f1d&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201803%2F13%2F20180313200341_cxept.jpg')",
      },
      color: 'rgba(19, 206, 102, 0.8)',
      identifyCodes: '1234567890',
      identifyCode: '',
      // 登录表单
      LoginForm: {
        username: 'admin',
        password: '123456.',
        yzm: ''
        
      },
      // 注册表单
      RegisterForm: {
        editUsername: '',
        editPassword: '',
        confirmPassword: ''
      },
      passwordType: 'password',
      // 登录loading
      loading: false,
      // 登录表单校验规则
      loginRules: {
        username: [
          {required: true, message: '请输入用户名', trigger: 'blur'},
          {min: 3, max: 10, message: '用户名长度在3~10个字符之间', trigger: 'blur'}
        ],
        password: [
          {required: true, message: '请输入密码', trigger: 'blur'},
          {min: 6, max: 15, message: '用户密码在6~15个字符之间', trigger: 'blur'}
        ],
        yzm: [
          {required: true, validator: validateYZM, trigger: 'blur'}
        ]
      },
      // 注册表单校验规则
      RegisterRules: {
        editUsername: [
          {required: true, message: '请输入用户名', trigger: 'blur'},
          {min: 3, max: 10, message: '用户名长度在3~10个字符之间', trigger: 'blur'}
        ],
        editPassword: [
          {required: true, validator: validatePassword, trigger: 'blur'}
        ],
        confirmPassword: [
          { required: true, validator: validateConfirmPassword, trigger: 'blur'}
        ]
      },
      backgroundImages: [
        {id: 1, src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1607083673526&di=7a4b805a903c2ebefc880330f6bc1f1d&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201803%2F13%2F20180313200341_cxept.jpg'},
        {id: 2, src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1607083148351&di=edb0ef50d70fb6402f87f2a22e0ebc1d&imgtype=0&src=http%3A%2F%2Fattach.bbs.miui.com%2Fforum%2F201311%2F01%2F215828tpmddz2d2bfcz5pk.jpg'},
        {id: 3, src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1607086548327&di=fd136531af856bdde29cef5dbf2e3527&imgtype=0&src=http%3A%2F%2Fgss0.baidu.com%2F-fo3dSag_xI4khGko9WTAnF6hhy%2Fzhidao%2Fpic%2Fitem%2F95eef01f3a292df56eda9005bc315c6034a87380.jpg'},
        {id: 4, src: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3338231848,1089252417&fm=26&gp=0.jpg'},
        {id: 5, src: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3237597423,2821786676&fm=26&gp=0.jpg'}
      ],
      flag: true,
      passwordLength: null,
      passwordLevel: 0,
      safeMsg: '',
      lowBgColor: '#dcdcdc',
      midBgColor: '#dcdcdc',
      highBgColor: '#dcdcdc',
      adminall: []
    }
  },
  watch: {
    "RegisterForm.editPassword"(newVal, oldV) {
        this.passwordLength = pwdLength(newVal);
        this.passwordLevel = checkStrong(newVal);
        if (this.passwordLevel == 2) {
          this.safeMsg = '弱';
          this.lowBgColor = '#ff460f';
          this.midBgColor = '#dcdcdc';
          this.highBgColor = '#dcdcdc';
      } else if (this.passwordLevel == 3) {
          this.safeMsg = '中';
          this.lowBgColor = '#ff6a00';
          this.midBgColor = '#ff6a00';
          this.highBgColor = '#dcdcdc';
      } else if (this.passwordLevel == 4) {
          this.safeMsg = '强';
          this.lowBgColor = '#0a9e00';
          this.midBgColor = '#0a9e00';
          this.highBgColor = '#0a9e00'
      }else {
          this.lowBgColor = '#dcdcdc';
          this.midBgColor = '#dcdcdc';
          this.highBgColor = '#dcdcdc';
      }
      
    }
  },
  mounted() {
    // if (this.loginForm.username === '') {
    //     this.$refs.username.focus()
    // } else if (this.loginForm.password === '') {
    //     this.$refs.password.focus()
    // }

    this.identifyCode = ''
    this.makeCode(this.identifyCodes, 4)
    
  },
  methods: {
    // 登录事件
    handleLogin() {
      // 判断输入账号密码与本地存储是否一致
      this.adminall = JSON.parse(localStorage.getItem('admin')) 
      let val = this.adminall.find(item => item.a === this.LoginForm.username && item.b === this.LoginForm.password)
      if(val) {
        this.$message({
          message: '登陆成功',
          type: 'success'
        })
        this.$router.push({path: './home'})
      }else {
        this.$message({
          message: '登陆失败!',
          type: 'error'
        })
      }
      // this.$router.push({path: './home'})
    },
    // 注册事件
    handleRegisterIn() {
      this.flag = !this.flag
      this.style.background = "URL('" + require('../../assets/media/timg.jpg') + "')"
    },
    // 注册取消事件
    handleRegisterCancel(formName) {
      this.flag = true
      this.$refs[formName].resetFields()
      this.style.background = "URL('" + "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1607083673526&di=7a4b805a903c2ebefc880330f6bc1f1d&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201803%2F13%2F20180313200341_cxept.jpg" + "')"
    },
    confirmpassword() {
      // console.log('回车事件');
      this.handleRegisterOut('RegisterForm')
    },
    // 注册提交事件
    handleRegisterOut(formName) {
      this.$refs[formName].validate((valid) => {
        if(valid) {
          let localeData = JSON.parse(localStorage.getItem('admin'))||[]
          let val = localeData.find(item => item.a === this.RegisterForm.editUsername && item.b === this.RegisterForm.editPassword) || null
          if(val) {
            this.$message({
              message: '该用户已存在！',
              type: 'error'
            })
          }else {
            this.saveLocalstorage()
            this.$message({
              message: '注册成功！',
              type: 'success'
            })
            this.handleRegisterCancel(formName)
          }
        } else {
          this.$message({
            message: '请输入正确的信息',
            type: 'error'
          })
          return false
        }
      })
    },
    // 将注册用户信息存在本地
    saveLocalstorage() {
      let obj = {a: this.RegisterForm.editUsername, b: this.RegisterForm.editPassword}
      this.adminall.push(obj)
      localStorage.setItem("admin", JSON.stringify(this.adminall))
    },
    // 改变背景颜色
    changeColor(res) {
      this.style.background = res
    },
    // 改变背景图片
    changeImage(item) {
      console.log(this.backgroundImages[item.id - 1].src);
      this.style.background = "URL('" + item.src + "')"
    },
     // 生成随机数
     randomNum (min, max) {
      return Math.floor(Math.random() * (max - min) + min)
    },
    // 切换验证码
    refreshCode () {
      this.identifyCode = ''
      this.makeCode(this.identifyCodes, 4)
    },
    // 生成四位随机验证码
    makeCode (o, l) {
      for (let i = 0; i < l; i++) {
        this.identifyCode += this.identifyCodes[
          this.randomNum(0, this.identifyCodes.length)
        ]
      }
      console.log(this.identifyCode)
    },
    // 监听输入框改变事件
    getInput() {
      console.log(this.LoginForm.yzm);
    }
    
  },
  
}