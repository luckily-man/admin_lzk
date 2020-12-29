<template>
  <div class="word-charts">
    <ve-wordcloud :data="chartData" :settings="chartSettings"
    height="350px"></ve-wordcloud>
  </div>
</template>

<script>
  import veWordcloud from 'v-charts/lib/wordcloud'
  export default {
    // name: 'echarts-word',
    components: { veWordcloud },
    data () {
      return {
        chartData: {
          columns: ['word', 'count'],
          rows: [{
            'word': 'visualMap',
            'count': 2199
          }, {
            'word': 'continuous',
            'count': 1288
          }, {
            'word': 'contoller',
            'count': 620
          }, {
            'word': 'series',
            'count': 4470
          }, {
            'word': 'gauge',
            'count': 2311
          }, {
            'word': 'detail',
            'count': 1206
          }, {
            'word': 'piecewise',
            'count': 4885
          }, {
            'word': 'textStyle',
            'count': 2294
          }, {
            'word': 'markPoint',
            'count': 8574
          }, {
            'word': 'pie',
            'count': 8929
          }, {
            'word': 'roseType',
            'count': 969
          }, {
            'word': 'label',
            'count': 37517
          }, {
            'word': 'emphasis',
            'count': 2053
          }, {
            'word': 'yAxis',
            'count': 7299
          }, {
            'word': 'name',
            'count': 5418
          }, {
            'word': 'type',
            'count': 2905
          }, {
            'word': 'gridIndex',
            'count': 5146
          }, {
            'word': 'normal',
            'count': 49487
          }, {
            'word': 'itemStyle',
            'count': 33837
          }, {
            'word': 'min',
            'count': 4500
          }, {
            'word': 'silent',
            'count': 5744
          }, {
            'word': 'animation',
            'count': 4840
          }, {
            'word': 'offsetCenter',
            'count': 232
          }, {
            'word': 'inverse',
            'count': 3706
          }, {
            'word': 'borderColor',
            'count': 4812
          }, {
            'word': 'markLine',
            'count': 16578
          }, {
            'word': 'line',
            'count': 76970
          }, {
            'word': 'radiusAxis',
            'count': 6704
          }, {
            'word': 'radar',
            'count': 15964
          }, {
            'word': 'data',
            'count': 60679
          }, {
            'word': 'dataZoom',
            'count': 24347
          }, {
            'word': 'tooltip',
            'count': 43420
          }, {
            'word': 'toolbox',
            'count': 5222
          }, {
            'word': 'geo',
            'count': 6904
          }, {
            'word': 'parallelAxis',
            'count': 4029
          }]
        },
        chartSettings: {
          color: ['#ff0', '#00f', '#f00', '#0ff'],
          sizeMin: 20,
          sizeMax: 40,
          shape: 'diamond'
        },
      }
    },
    methods: {}
  }
</script>