

export default {
  // name: "my-panel",
  
  data() {
    return {
      remove: false,
     
      collapse: true,
      
      loading: false,
    
      expand: false
    };
  },
  mounted() {
    
  },
  destoryed() {
    
  },
  methods: {
    btnExpand() {
      this.expand = !this.expand
      this.$emit('btnExpand')
    },
    btnReload() {
      this.loading = true
      setTimeout(() => {
        this.loading = false
      }, 1000);
      this.$emit('btnReload')
    },
    
   
    btnCollapse() {
      this.collapse = !this.collapse
      // console.log(111);
      this.$emit('btnCollapse')
    },
    btnRemove() {
      this.remove = !this.remove
      this.$emit('btnRemove')
    }
  }
}