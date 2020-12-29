// import moment from 'moment'
import { dateFormat} from './../../utils/filters.js'
export default {
  // name: 'Table',
  data() {
    const item = {
      uuid:"1122111",
      id:"1",
      name:"zdb",
      status:"active",
      create_time:1605756297384,
      usage:70,
      size:100000,
      free_size:"100KB",
      size_utils:"100",
      users:["admin","user"],//表格select选项数据
      users_list:"admin",//默认选中值
    };
    return {
      // 存放表格数据的数组
      newTableData: [],
      // 模态框数据
      formData: {
        name: '',
        status: '',
        usage: '',
        size: '',
        createTime: '',
        jurisdiction: ''
      },
      // 模态框标题
      dialog_title: '',
      // 模态框开关
      dialog_visible:false,
      // 模态框宽度
      dialog_width: '30%',
      // 表格数据
      tableData: Array(20).fill(item),
      // 表格尺寸
      size: "mini",
      // 表格loading
      loading: true,
      border: true,
      stripe: true,
      total: 0,
      pageOptions: {
        currentPage: 1,
        pageSize: 5,
      },
      select_all: true,
      select_single: true, //单选
      columnData: [
        {
          label: "名称",
          prop: "name",
          type: "uuid",
          sort: true
        },
        {
          label:"状态",
          prop:"status",
          type:"status",//状态的标识字段默认数据返回state与status都可标识
        },
        {
          label:"创建时间",
          prop:"create_time",
          type:"time",
        },
        {
          label:"使用率",
          prop:"usage",
          type:"progress",
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
              console.log(row);
              },
            },
            {
              label:"edit",
              isDisabled:()=>true,//禁用状态
                handle:(row)=>{
                console.log(row);
                this.openDialog()
                this.getFormData(row)
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
              },
            },
          ],
        },
      ]
    }
  },
  mounted() {
    setTimeout(() => {
      this.loading=false
      this.total=this.tableData.length
    }, 1000);
    this.getData()
  },
  computed: {
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
  },
  methods: {
    // 获取表格数据放入newTableData
    getData() {
      this.newTableData = this.tableData
      // console.log( this.newTableData);
    },
    // 获取数据放入模态框
    getFormData(res) {
      // console.log(res);
      this.formData.name = res.name
      this.formData.status = res.status
      this.formData.usage = res.usage + '%'
      this.formData.size = this.humanLimitSize(res.size)
      this.dialog_title = res.uuid
      this.formData.createTime=this.dateFormat(res.create_time)
      this.formData.jurisdiction = res.users_list
    },
    // 删除数据
    deleteTableData(index) {
      this.tableData.splice(index,1)
    },
    // 开启模态框
    openDialog() {
      this.dialog_visible = true
    },
    //表格当前页回调
    handleCurrentChange(page){
      console.log(page);
      this.pageOptions.currentPage = page
      this.getData()
      },
    //每页显示条数回调
    handleSizeChange(size){
      console.log(size);
      this.pageOptions.pageSize = size
      this.tableData = this.newTableData.slice(0, this.pageOptions.pageSize)
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
      this.$refs['common-table'].clearSelection();//把选中数据置空
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
    
  }
}