<!--
 * @Author: liuzhongkun
 * @Date: 2020-12-03 14:17:03
 * @LastEditors: liuzhongkun
 * @LastEditTime: 2020-12-04 09:41:52
-->
<template>
  <div>
    
    <button @click="changeType">切换图表类型</button>
    <ve-chart :data="chartData" :settings="chartSettings"></ve-chart>
  </div>
</template>

<script>
export default {
  data() {
    // 'scatter' 没办法切换散点图？
    this.typeArr = ['line', 'histogram', 'radar', 'bar', 'scatter']
    this.index = 0
    return {
      chartData: {
          columns: ['日期', '访问用户', '下单用户', '下单率'],
          rows:  [
            { '日期': '1/1', '访问用户': 1393, '下单用户': 1093, '下单率': 0.32 },
            { '日期': '1/2', '访问用户': 3530, '下单用户': 3230, '下单率': 0.26 },
            { '日期': '1/3', '访问用户': 2923, '下单用户': 2623, '下单率': 0.76 },
            { '日期': '1/4', '访问用户': 1723, '下单用户': 1423, '下单率': 0.49 },
            { '日期': '1/5', '访问用户': 3792, '下单用户': 3492, '下单率': 0.323 },
            { '日期': '1/6', '访问用户': 4593, '下单用户': 4293, '下单率': 0.78 }
          ]
      },
      chartSettings: {
        metrics: ['访问用户', '下单用户', '下单率'],
        dimension: ['日期'],
        type: this.typeArr[this.index]
      },
    }
  },
  methods: {
    changeType() {
      this.index++
      if (this.index >= this.typeArr.length) {
        this.index = 0
      }
      // console.log(this.typeArr[this.index]);
      this.chartSettings = {
        // 结构赋值
        ...this.chartSettings,
        type: this.typeArr[this.index]
      }
      // console.log(this.typeArr[this.index]);
    },
  }
}
</script>

<style lang="scss" scoped>

</style>