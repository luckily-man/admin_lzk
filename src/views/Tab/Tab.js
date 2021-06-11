
import {dateFormat} from '../../utils/filters.js'
export default {

  data(){
    return{
      input3: '',
      newArray: [],
      tableData: [],
    };
  },
  computed:{},
  methods:{
    async getData() {
      const {data:res} = await this.$http.get('userapp/all')
        for (const key in res.data) {
          this.newArray.push(res.data[key])
        }
        this.tableData = this.newArray
    },
  },
  mounted(){
    this.getData()
    
  }
}