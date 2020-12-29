<template>
  <div>
    <ve-liquidfill :data="chartData" :settings="chartSettings"
    height="370px"
    ></ve-liquidfill>
  </div>
</template>

<script>
export default {
  data() {
    this.chartSettings = {
      wave: [0.5, 0.3, 0.1],
      seriesMap: [
        {
          // 颜色
            // color: ['red', 'green', 'yellow'],
            // 水球图半径
            label: {
              formatter (options) {
                const {
                  seriesName,
                  data: {
                    value
                  }
                } = options
                return `${seriesName}\n${value * 100 + '%'}`
              },
              fontSize: 30
            },
            // 水球图位置
            center: ['24%', '20%'],
            // 水球图半径
            radius: '40%',
            waveAnimation: true,
            // 水波起伏程度
            amplitude: '10%'
          },
          {
            label: {
              // 自定义文本标签内容
              formatter (options) {
                return `${options.seriesName}\n${options.data.value * 100 + '%'}`
              },
              // 字号
              fontSize: 30
            },
            center: ['25%', '70%'],
            radius: '40%'
          },
          {
            label: {
              formatter (options) {
                return `${options.seriesName}\n${options.data.value * 100 + '%'}`
              },
              // 文本颜色
              color: 'red',
              insideColor: 'red',
              fontSize: 30
            },
            center: ['70%', '50%'],
            radius: '40%',
            waveAnimation: true
          }
      ]
    }
    return {
      chartData: {
          columns: ['city', 'percent'],
          rows: [
            {
              city: '上海',
              percent: 0.6
            },
            {
              city: '广州',
              percent: 0.5
            },
            {
              city: '北京',
              percent: 0.9
            }
          ]
        }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>