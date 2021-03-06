
import { mapActions, mapState } from 'vuex'
export default {
  // name: 'Form',
  data() {
    
    return {
      background:'',
      collapse: '',
      flag: false,
      // 设置
      theme: [
        { id: 1, title: "设置", path: '/edit'},
        { id: 2, title: "登出", path: './'}
      ],
      // 导航栏
      asideMenu: [
        { path: '/v1',
          icon: 'el-icon-message',
          title: '学生管理',
          children: [
            { path: '/tab', icon: 'el-icon-tickets', title: '学生管理'},
            { path: '/table', icon: 'el-icon-tickets', title: '本地表格'},
            { path: '/Charts', icon: 'el-icon-s-data', title: '图表练习'},
            { path: '/changeCharts', icon: 'el-icon-data-line', title: '图表切换'}
          ]
        },
        { path: '/v2',
          icon: 'el-icon-menu',
          title: '导航二',
          children: [
            { path: '/video', icon: 'el-icon-document-copy', title: '表格穿梭框'},
            { path: '/tree', icon: 'el-icon-guide', title: '步骤条'},
            { path: '/three', icon: 'el-icon-collection', title: '组件练习'},
            { path: '/register', icon: 'el-icon-magic-stick', title: 'css小样式',}
          ]
        },
        { path: '/v3',
          icon: 'el-icon-setting',
          title: '导航三',
          children: [
            { path: '/practice', icon: 'el-icon-finished', title: '富文本编辑器'},
            { path: '/notebook', icon: 'el-icon-notebook-1', title: '记事本'},
            { path: '/enjoy', icon: 'el-icon-more', title: '小练习'},
            { path: '/error', icon: 'el-icon-magic-stick', title: '404'},
            { path: '/userlist', icon: 'el-icon-document', title: '用户管理'}
          ]
        }
      ],
      style:{
        background: '#eee'
      },
      tag: [{path: '/welcome', title: '首页', type:''}]
    }
  }, 
  mounted() {
    this.getMsg()
    this.tag = JSON.parse(sessionStorage.getItem('tag')) ? JSON.parse(sessionStorage.getItem('tag')) : this.tag
    this.scrollHanle()
  },
  computed:mapState ({
    isCollapse: state=> state.change.isCollapse,
    current: state => state.homeTag.currentMenu,
  }),
  methods: {
    ...mapActions(['changeCollapse', 'selectMenu', 'addTag']),
    // 获取头像
    async getMsg() {
      const {data: res} = await this.$http.get('users/current')
      this.background = res.avatar
    },
    // 退出登录
    backLogin() {
      this.$router.push({ path: './'})
      sessionStorage.removeItem('tag')
      window.sessionStorage.clear()
      this.$router.push('/login')
    },
    // 设置按钮点击事件
    changeStyleOne(item) {
      if(item.id === 1) {
        this.$router.push(item.path)
      }else {
        this.backLogin()
      }
      
    },
    // 展开事件
    derail() {
      let isCol = this.isCollapse
      this.changeCollapse(!isCol)
    },
    // 点击标签
    getOneTitle(item) {
      let items = {path: item.path, title: item.title, type: ''}
      this.selectMenu(items)
      if(this.tag.some(item => items.title === item.title)) {
        this.tag.map(item => {
          items.title === item.title ? item.type = '' : item.type = 'info'
        })
      } else {
        this.tag.map(item => item.type = 'info')
        items.type = ''
        this.tag.push(items)
        this.saveTagData()
      }
    },
    // 关闭标签事件
    closeTag(index) {
      if(this.tag[index].type === '') {
        this.tag.splice(index,1)
        let length = this.tag.length - 1
        this.$router.push({path: this.tag[length].path})
        this.tag[length].type = ''
        this.saveTagData()
      } else {
        this.tag.splice(index,1)
        this.saveTagData()
      }
    },
    // 点击标签事件
    changeMenu(item) {
      this.tag.map(item => item.type = 'info')
      item.type = ''
      this.$router.push({path: item.path})
      this.selectMenu(item)
      this.saveTagData()
    },
    // 存储tag数据
    saveTagData() {
      sessionStorage.setItem('tag', JSON.stringify(this.tag))
    },
    // 监听滚动轴滚动事件
    scrollHanle() {
      let scrollBar = this.$refs.scroll_bar.wrap
      scrollBar.onscroll = () => {
        scrollBar.scrollTop > 300 ? this.flag = true : this.flag = false
      }
    },
    // 点击回到顶部
    goBackTop() {
      let timer = setInterval(() => {
        this.$refs.scroll_bar.wrap.scrollTop -= 30
        if (this.$refs.scroll_bar.wrap.scrollTop <= 0) {
          clearInterval(timer)
        }
        console.log(this.$refs.scroll_bar.wrap.scrollTop);
      }, 10);   
    }
  },
}
