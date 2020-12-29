export default {
  data() {
    return {
      base: [
        {id: 1, title: '二进制'},
        {id: 2, title: '八进制'},
        {id: 3, title: '十进制'},
        {id: 4, title: '十六进制'}
      ],
      input: '',
      select: '',
      output: '',
      selectTwo: '',
    }
  },
  mounted() {},
  beforeDestory() {},
  destoryed() {},
  methods: {
    elePut() {
      console.log(this.input);
    },
    seleIput() {
      console.log(this.select);
    },
    seleOutPut() {
      if (this.select === 1 ) {
        if (this.selectTwo === 2) {
          this.output = parseInt(this.input, 2).toString(8)
        }else if (this.selectTwo === 3) {
          this.output = parseInt(this.input, 2)
        }else if(this.selectTwo === 4) {
          this.output = parseInt(this.input, 2).toString(16)
        } else {
          this.output = this.input
        }
      } else if (this.select === 2){
        if(this.selectTwo === 1){
          this.output = parseInt(this.input, 8).toString(2)
        } else if (this.selectTwo === 3){
          this.output = parseInt(this.input, 8)
        }else if (this.selectTwo === 4) {
          this.output = parseInt(this.input, 8).toString(16)
        }else {
          this.output = this.input
        }
      } else if (this.select === 3){
        if(this.selectTwo === 1){
          this.output = parseInt(this.input).toString(2)
        } else if (this.selectTwo === 2){
          this.output = parseInt(this.input).toString(8)
        }else if (this.selectTwo === 4) {
          this.output = parseInt(this.input).toString(16)
        } else {
          this.output = this.input
        }
      }else if (this.select === 4){
        if(this.selectTwo === 1){
          this.output = parseInt(this.input, 16).toString(2)
        } else if (this.selectTwo === 2){
          this.output = parseInt(this.input, 16).toString(8)
        }else if (this.selectTwo === 3) {
          this.output = parseInt(this.input, 16)
        } else {
          this.output = this.input
        }
      } 
    },
  }
}