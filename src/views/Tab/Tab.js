import axios from 'axios'
import moment from 'moment';
import {dateFormat} from '../../utils/filters.js'
export default {
  name: 'Tab',
  data(){
  return{
    value3: '',
    input3: '',
    newArray: [],
    lang: 'zh-CN',
    changeLang: '切换English',
    formData: {
      name: '',
      status: '',
      usage: '',
      size: '',
      createTime: '',
      jurisdiction: ''
    },
    dialog_visible:false,
    dialog_width: '30%',
    dialog_title: '',
    size:'mini',//表格尺寸默认medium
    loading:true,//表格loading
    border:false,//表格边框显示默认true显示边框
    stripe:true,//表格斑马线默认false不显示
    total:0,//表格分页总数据
    pageOptions:{//表格分页显示配置
      currentPage:1,//当前第一页
      pageSize:5,//每页显示条目数
    },
    //表格全选功能启用默认不启用启用此功能需配@selectAllData回调
    select_all:true,
    //表格单选功能默认不启用启用此功能需配合@selectSinger回调
    select_single:false,
    //表格数据tableDataArray类型
    tableData:[
    ],
    columnData:[
      {
        label:"名称",//表头名称
        prop:"name",//prop需要与返回字段对应上
        //3种类型uuid表示鼠标划过名字会有id提示框to-page类型表示点击名称可跳转
        // 到某一页,此类型需配合@toPage回调函数使用,html普通的类型名称只展示无功能
        type:'uuid',
        //排序标识符表格某一项排序需加此功能需配@sortChange回调使用
        sort:true
      },
      {
        label:"状态",
        prop:"status",
        type:"status",//状态的标识字段默认数据返回state与status都可

      },
      {
        label:"创建时间",
        prop:"create_time",
        type:"time",//后台返回时间类型字段可处理2020-11-2018:03:00或时间戳类型
      },
      {
        label:"使用率",
        prop:"usage",
        type:"progress",//进度条表示字段
      },
      {
        label:"大小",
        prop:"size",
        type:"size",//普通单位转换后台返回以B计量的数据前端自己转换成对应的单位
      },
      {
        label:"剩余空间",
        prop:"free_size",
        type:"size-format",//后台固定返回数据大小例如10GB等
      },
      {
        label:"使用空间",
        prop:"size_utils",
        unit:'KB',//啥也不传默认GB
        type:"size-unit",//后台返回10需前端手动加上GB处理结果10GB
      },
      {
        label:"选择权限",
        prop:"users",
        type:"select",//表格里有下拉框表示字段选择后的数据是prop字段拼接_list例如users选择后的结果在users_list字段里
      },
      {
        label:"操作",
        prop:"operate",
        type:"dragdown",//下拉菜单按钮需配置drag_list数组
        drag_list:[
          {
            label:"delete",//按钮名称
            isDisabled:()=>false,//可用状态
            handle:(row)=>{//点击回调
              console.log(row.name);
            },
          },
          {
            label:"edit",
            isDisabled:()=>true,//禁用状态
            handle:(row)=>{
              console.log(row);
              this.getFormData(row)
              this.openDialog()
            },
          },
        ],
      },
      {
        label:"操作2",
        prop:"operate1",
        type:"button",//按钮类型需配置btn_list
        btn_list:[
          {
            type:'danger',//按钮修改类型默认是primary类型
            label:"delete",
            isDisabled:()=>true,
            handle:(row)=>{
              console.log(row);
              this.deleteTableData(row)
              this.open2()
            },
          },
        ],
      },
    ],
    };
  },
  computed:{
      dateFormat() {
        return (val)=>{
           return dateFormat(val)
          // return moment(val).format('YYYY-MM-DD HH:mm:ss')
        }
      },
      humanLimitSize() {
        return (bytes, si = false) =>{
          let thresh = si ? 1000 : 1024;
          if (Math.abs(bytes) < thresh) {
              return bytes + 'B'
          }
          let units = si ? ['KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB'] : ['KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
          let u = -1
          do {
              bytes /= thresh
              ++u
              //  Math.ceil() 向上取整，小数部分直接舍去
          } while (Math.abs(bytes) >= thresh && u < units.length - 1)
          // 取两位小数
          return (Math.ceil(bytes*100)/100)+units[u]
        } 
      },
      // getCurrentPage() {
      //   if(this.pageOptions.currentPage == 1) {
      //     return this.tableData = this.newArray.slice(0, this.pageOptions.pageSize)
      //   }else if (this.pageOptions.currentPage == 2){
      //     return this.tableData = this.newArray.slice(this.pageOptions.pageSize, this.newArray.length - this.pageOptions.pageSize)
      //   }
      //   return this.tableData = this.newArray.slice(this.newArray.length - this.pageOptions.pageSize * 2, this.newArray.length) 
      // }
  },
  methods:{
    async getData() {
      const {data: ret} = await this.$http.get('formData')
      // console.log('hello');
      // console.log(ret);
      if(this.tableData.length == 0) {
        this.tableData = ret
      }
      this.newArray = ret

    },
    // 通知
    open2() {
      this.$notify({
        title: '提示',
        message: '已删除数据',
        type: 'success',
        position: 'top-left',
        showClose: false,
        duration: 2000
      })
    },
    // 获取数据
    getFormData(res) {
      // console.log(res);
      this.formData.name = res.name
      this.formData.status = res.status
      this.formData.usage = res.usage + '%'
      this.formData.size = this.humanLimitSize(res.size)
      this.dialog_title = res.uuid
      // const pattent = 'YYYY-MM-DD HH:mm:ss'
      this.formData.createTime=this.dateFormat(res.create_time)
      // this.formData.createTime = moment(res.create_time).format(pattent)
      this.formData.jurisdiction = res.users_list
    },
    // 删除数据
    deleteTableData(index) {
      this.tableData.splice(index, 1)
    },
    // 开启模态框
    openDialog() {
      this.dialog_visible = true
    },
    //表格当前页回调
    handleCurrentChange(page){
    console.log(page);
    this.pageOptions.currentPage = page
    // this.getCurrentPage()
    this.getData()
    },
    //每页显示条数回调
    handleSizeChange(size){
    console.log(size);
    this.pageOptions.pageSize = size
    this.tableData = this.newArray.slice(0, this.pageOptions.pageSize)
    this.getData()
    },
    //点击名称跳转回调
    toPage(row){
    console.log('点击',row)
    },
    //排序回调
    sortChange(sort){
    console.log(sort)
    },
    //全选回调
    selectAllData(data){
    console.log(data)
    },
    //单选回调
    selectSinger(data){
    console.log(data)
    },
    //置空选项
    clearSelection(){
      //把选中数据置空
    // this.$refs['common-table'].clearSelection();
    },
    // 关闭模态框
    handleClose(bool) {
      this.dialog_visible = bool
      setTimeout(() => {
        // this.$refs['demo-form'].resetFields()
      }, 100);
    },
    // 模态框确定
    submit(bool) {
      this.$refs['demo-form'].validate((valid) => {
        if (valid) {
          this.dialog_visible = bool
          // 重置表单数据
          // this.$refs['demo-form'].resetFields()
        } else {
          console.log('error submit');
          return false
        }
      })
    },
    changeLangEvent() {
      this.changeLang == '切换English' ? this.changeLang = '切换中文' : this.changeLang = '切换English'
      this.lang === 'zh-CN' ? this.lang = 'en-US' : this.lang = 'zh-CN'
      this.$i18n.locale = this.lang
            // if (this.changeLang == '切换English') {
            //     this.changeLang = '切换中文';
            // } else {
            //     this.changeLang = '切换English';
            // }
            // if (this.lang === 'zh-CN') {
            //     this.lang = 'en-US';
            //     this.$i18n.locale = this.lang;
            // } else {
            //     this.lang = 'zh-CN';
            //     this.$i18n.locale = this.lang;
            // }
        },
  },
   mounted(){
     setTimeout(() => {
       this.loading=false
       this.total=this.tableData.length
     }, 1000);
     this.getData()
    //  this.handleSizeChange()
   }
}