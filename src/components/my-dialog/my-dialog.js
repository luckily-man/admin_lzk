export default {
  props: {
    flag: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      cover: false
    }
  },
  mounted() {
  },
  methods: {
    cancel() {
      this.cover = false
      this.$emit('cancel')
    },
    makesure() {
      this.cover = false
      this.$emit('makesure')
    },
    close() {
      this.cover = false
      this.cancel()
    }
  }
}