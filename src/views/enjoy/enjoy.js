export default {
  data() {
    return {
      flag: true
    }
  },
  methods: {
    cancel() {
      this.flag = false
      console.log('111');
    },
    makesure() {
      this.flag = false
      console.log('222');
    }
  }
}