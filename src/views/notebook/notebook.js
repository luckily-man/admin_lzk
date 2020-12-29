
export default {
  data() {
    return {
      store: '',
      data:[],
      oldData: [],
      total1: '0',
      total2: '0'
    }
  },
  mounted(){
    this.getData()
    
  },
  methods: {
    // 按下回车键，把数据存储到本地
    saveStore() {
      if (this.store === '') {
        alert('请输入要进行的操作')
      } else {
        this.data.push(this.store)
        this.saveData()
        this.store = ''
        this.total1++
      }
    },
    // 正在进行转换为已完成
    changeOld(index) {
      console.log(this.data[index]);
      this.oldData.push(this.data[index])
      this.deleteData(index)
      this.saveDataRea()
      this.total2++
    },
    // 删除正在进行数据
    deleteData(index) {
      this.data.splice(index,1)
      this.saveData()
      this.total1--
    },
    // 删除已完成数据
    deleOld(index) {
      this.oldData.splice(index, 1)
      this.saveDataRea()
      this.total2--
      
    },
    // 存储正在进行数据
    saveData() {
      localStorage.setItem('todolist', JSON.stringify(this.data))
      
    },
    // 存储已完成数据
    saveDataRea() {
      localStorage.setItem('todoalready', JSON.stringify(this.oldData))
    },
    // 获取数据
    getData() {
      this.data = JSON.parse(localStorage.getItem('todolist'))
      this.oldData = JSON.parse(localStorage.getItem('todoalready'))
      this.total1 = this.data.length
      this.total2 = this.oldData.length
    },
  }
}