
import { mapActions, mapState } from 'vuex'
export default {
  // name: 'Form',
  data() {
    
    return {
      collapse: '',
      flag: false,
      theme: [
        { id: 1, title: "主题一"},
        { id: 2, title: "主题二"},
        { id: 3, title: "主题三"}
      ],
      // 导航栏
      asideMenu: [
        { path: '/v1',
          icon: 'el-icon-message',
          title: '导航一',
          children: [
            { path: '/tab', icon: 'el-icon-tickets', title: '表格模拟后台'},
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
            { path: '/error', icon: 'el-icon-magic-stick', title: '404',}
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
    this.tag = JSON.parse(sessionStorage.getItem('tag')) ? JSON.parse(sessionStorage.getItem('tag')) : this.tag
    this.scrollHanle()
    console.log(this.$router.path);
  },
  computed:mapState ({
    isCollapse: state=> state.change.isCollapse,
    current: state => state.homeTag.currentMenu,
    // tag: state => state.homeTag.localMeun

  }),
  methods: {
    ...mapActions(['changeCollapse', 'selectMenu', 'addTag']),
    // 退出登录
    backLogin() {
      this.$router.push({ path: './'})
      sessionStorage.removeItem('tag')
    },
    // 主体切换
    changeStyleOne(item) {
      console.log(item.id);
      console.log(item.title);
      if(item.id == 1) {
        this.style.background = "rgb(233,238,243)"
        console.log(this.style.background);
      }else if (item.id == 2) {
        this.style.background = "URL(" + "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1607083673526&di=7a4b805a903c2ebefc880330f6bc1f1d&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201803%2F13%2F20180313200341_cxept.jpg" + ")"
      } else {
        this.style.background = 'rgb(232,235,239)'
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
