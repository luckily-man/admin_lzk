<template>
  <ve-bmap
  :settings="chartSettings"
  :series="chartSeries"
  :tooltip="chartTooltip"
  height="330px"
  ></ve-bmap>
</template>

<script>
export default {
  data () {
      this.chartSettings = {
        key: 'oBvDtR6nzWtVchkY4cLHtnah1VVZQKRK',
        bmap: {
          center: [120, 30],
          zoom: 14,
          roam: true,
          mapStyle: {}
        }
      }
      this.chartTooltip = { show: true }
      return {
        chartSeries: [
          {
            type: 'scatter',
            coordinateSystem: 'bmap',
            data: [
              [120, 30, 1] // 经度，维度，value，...
            ]
          }
        ]
      }
    }
}
</script>

<style lang="scss" scoped>

</style>