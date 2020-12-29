<template>
  <div>
    <!-- <p>被点击日期: {{name}}</p> -->
    <ve-pie 
    :data="chartData" 
    :settings="chartSettings" 
    :events='chartEvents'
    height="350px"
    ></ve-pie>
  </div>
</template>

<script>
export default {
  data () {
    this.chartSettings ={
      dimension: '日期',
      metrics: '访问用户',
      // 设置玫瑰图
      roseType: 'radius',
      // 限制显示条数
      // limitShowNum: 5,
      // 多元饼图
      level: [
        ['1/1', '1/2', '1/3'],
        ['1/4', '1/5']
      ],
      // 设置数据类型
      dataType: 'percent',
      // 设置数据类型为percent时保留的位数
      digit: 2,
      // 饼图半径
      // radius: 10,
      // 纵向偏移量
      // offsetY: 300
      
    }
      let self = this
      this.chartEvents = {
      click(e) {
        self.name = e.name
      }
    }
    
    return {
      chartData: {
        columns: ['日期', '访问用户'],
        rows: [
          { '日期': '1/1', '访问用户': 1393 },
          { '日期': '1/2', '访问用户': 3530 },
          { '日期': '1/3', '访问用户': 2923 },
          { '日期': '1/4', '访问用户': 1723 },
          { '日期': '1/5', '访问用户': 3792 },
          { '日期': '1/6', '访问用户': 4593 }
        ]
      },
      name: ''
    }
  }
}
</script>

<style lang="scss" scoped>

</style>