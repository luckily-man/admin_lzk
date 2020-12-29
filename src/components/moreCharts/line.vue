<template>
  <div>
    <ve-line 
    :data="chartData" 
    :settings="chartSettings"
    :extend="extend"
    height="350px"
    >
    </ve-line>
  </div>
</template>

<script>
export default {
    data() {
    this.chartSettings = {
      // metrics 用于指定指标
      metrics: ['访问用户', '下单用户', '下单率'],
      // dimension 用于指定维度
      dimension: ['日期'],
      // 设置双y轴 axisSite 指标所在的轴
      axisSite: {
        right: ['下单率']
      },
      // yAxisType 左右坐标轴数据类型
      yAxisType: ['KMB', 'percent'],
      // yAxisName 左右坐标轴标题
      yAxisName: ['数值', '比率'],
      // 堆叠图面积 stack：堆叠选项  area： 是否展示为面积图
      // stack: {
      //   '用户': ['访问用户', '下单用户']
      // },
      // area: true,
      // 设置横轴为练血数值轴
      // xAxisType: 'value'
      // 设置横轴为连续的时间轴
      // xAxisType: 'time'
    },
    this.extend = {
      // 设置横坐标倾斜
      'xAxis.0.axisLabel.rotate': 45,
      // 显示指标数值
      // series: {
      //   label: {
      //     normal: {
      //       show: true
      //     }
      //   }
      // }
    }
    // this.toolbox = {
    //   feature: {
    //     magicType: {
    //       type: ['line', 'bar']
    //     },
    //     saveAsImage: {}
    //   }
    // }
    return {
      chartData: {
      columns: ['日期', '访问用户', '下单用户' ,'下单率'],
      rows: [
        { '日期': '1/1', '访问用户': 1393, '下单用户': 1093, '下单率': 0.32 },
        { '日期': '1/2', '访问用户': 3530, '下单用户': 3230, '下单率': 0.26 },
        { '日期': '1/3', '访问用户': 2923, '下单用户': 2623, '下单率': 0.76 },
        { '日期': '1/4', '访问用户': 1723, '下单用户': 1423, '下单率': 0.49 },
        { '日期': '1/5', '访问用户': 3792, '下单用户': 3492, '下单率': 0.323 },
        { '日期': '1/6', '访问用户': 4593, '下单用户': 4293, '下单率': 0.78 }
      ]
      },
      // loading: true
    }
  },
}
</script>

<style lang="scss" scoped>

</style>