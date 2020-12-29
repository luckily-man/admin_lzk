<template>
  <div id="app">
    <router-view v-if="activeRoute"></router-view>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'app',
  data(){
    return{
      activeRoute:true
    }
  },
  computed:mapState({
     collapse:state=> state.change.isCollapse
  }),
  watch:{
     collapse:function(newV,oldV){
       if(newV!==oldV){
          this.reload()
       }
     }
  },
  methods:{
    reload(){
      this.activeRoute=false;
      this.$nextTick(()=>{
         this.activeRoute=true;
      })
    }
  },
  
}
</script>

<style lang="scss">
.icon {
   width: 1em; height: 1em;
   vertical-align: -0.15em;
   fill: currentColor;
   overflow: hidden;
}
</style>