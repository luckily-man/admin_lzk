export default {
  data() {
    // 折线图设置
    this.chartSettings = {
      axisSite: { right: ['下单率'] },
      yAxisType: ['KMB', 'percent'],
      // yAxisName: ['数值', '比率']
      stack: {'用户': ['访问用户', '下单用户']},
      area: true,
      // scale: [true,true]
    }
    return {
      // 进度条结束标签
      status: null,
      // 折线图数据
      chartData: {
        columns: ['日期', '访问用户', '下单用户', '下单率'],
        rows: [
          { '日期': '1/1', '访问用户': 1393, '下单用户': 1093, '下单率': 0.32 },
          { '日期': '1/2', '访问用户': 3530, '下单用户': 3230, '下单率': 0.26 },
          { '日期': '1/3', '访问用户': 2923, '下单用户': 2623, '下单率': 0.76 },
          { '日期': '1/4', '访问用户': 1723, '下单用户': 1423, '下单率': 0.49 },
          { '日期': '1/5', '访问用户': 3792, '下单用户': 3492, '下单率': 0.323 },
          { '日期': '1/6', '访问用户': 4593, '下单用户': 4293, '下单率': 0.78 }
        ]
      },
      chartExtend: {
        legend: {
          bottom: '5%',
        }
      },
    }
  },
  methods: {
    format(percentage) {
      return percentage === 100 ? this.status = 'success' : `${percentage}%`
    }
  }
}