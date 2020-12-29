
export default {
  data() {
    return {
      tableData: [{
        id: 1,
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        id: 2,
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        id: 3,
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        id: 4,
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        id: 5,
        date: '2016-05-08',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        id: 6,
        date: '2016-05-06',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        id: 7,
        date: '2016-05-07',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }],
      newData: [],
      multipleSelection: []
    };
  },
  methods: {
    toggleSelection() {
      console.log(this.multipleSelection);
      // this.newData = this.multipleSelection
      // this.newData.push(this.multipleSelection[i])
      for(let i = 0; i<this.multipleSelection.length; i++) {
        this.newData.push(this.multipleSelection[i])
      }
    },
    calcelSelection() {
      this.$refs.multipleTable.clearSelection();
    },
    handleSelectionChange(val) {

      // console.log(val);
      
      // console.log(this.multipleSelection);
      this.multipleSelection = val;
      
      // console.log(this.multipleSelection);
    }
  
  }
}

