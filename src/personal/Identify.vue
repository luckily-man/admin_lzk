<template>
  <div class="s-canvas">
    <canvas id="s-canvas" :width="contentWidth" :height="contentHeight"></canvas>
  </div>
</template>
<script>
  export default {
    name: 'SIdentify',
    props: {
      identifyCode: {
        type: String,
        default: '1234'
      },
      // 最小字体
      fontSizeMin: {
        type: Number,
        default: 18
      },
      // 最大字体
      fontSizeMax: {
        type: Number,
        default: 30
      },
      // 背景颜色
      backgroundColorMin: {
        type: Number,
        default: 180
      },
      // 背景颜色
      backgroundColorMax: {
        type: Number,
        default: 240
      },
      colorMin: {
        type: Number,
        default: 50
      },
      colorMax: {
        type: Number,
        default: 160
      },
      // 干扰线属性
      lineColorMin: {
        type: Number,
        default: 40
      },
      lineColorMax: {
        type: Number,
        default: 180
      },
      dotColorMin: {
        type: Number,
        default: 0
      },
      dotColorMax: {
        type: Number,
        default: 255
      },
      // 画布宽度
      contentWidth: {
        type: Number,
        default: 120
      },
      // 画布高度
      contentHeight: {
        type: Number,
        default: 40
      }
    },
    methods: {
      // 生成一个随机数
      randomNum (min, max) {
        return Math.floor(Math.random() * (max - min) + min)
      },
      // 生成一个随机的颜色
      randomColor (min, max) {
        var r = this.randomNum(min, max)
        var g = this.randomNum(min, max)
        var b = this.randomNum(min, max)
        return 'rgb(' + r + ',' + g + ',' + b + ')'
      },
      // 绘制图片
      drawPic () {
        var canvas = document.getElementById('s-canvas')
        // 在画布上绘图的方法和属性
        var ctx = canvas.getContext('2d')
        // 绘制文本时使用的文本基线
        ctx.textBaseline = 'bottom'
        // 填充绘画的颜色、渐变或模式
        ctx.fillStyle = this.randomColor(this.backgroundColorMin, this.backgroundColorMax)
        // 绘制被填充的矩形
        ctx.fillRect(0, 0, this.contentWidth, this.contentHeight)
        // 绘制文字
        for (let i = 0; i < this.identifyCode.length; i++) {
          this.drawText(ctx, this.identifyCode[i], i)
        }
         // 干扰线
        // this.drawLine(ctx)
        // 干扰点
        this.drawDot(ctx)
      },
      drawText (ctx, txt, i) {
        ctx.fillStyle = this.randomColor(this.colorMin, this.colorMax)
        // 文本内容当前字体属性
        ctx.font = this.randomNum(this.fontSizeMin, this.fontSizeMax) + 'px SimHei'
        var x = (i + 1) * (this.contentWidth / (this.identifyCode.length + 1))
        var y = this.randomNum(this.fontSizeMax, this.contentHeight - 5)
        var deg = this.randomNum(-45, 45)
        // 修改坐标原点和旋转角度
        // 重映画布上的(0,0)位置
        ctx.translate(x, y)
        // 旋转当前绘图
        ctx.rotate(deg * Math.PI / 180)
        // 在画布上绘制被填充的文本
        ctx.fillText(txt, 0, 0)
        // 恢复坐标原点和旋转角度
        ctx.rotate(-deg * Math.PI / 180)
        ctx.translate(-x, -y)
      },
      drawLine (ctx) {
        // 绘制干扰线
        for (let i = 0; i < 8; i++) {
           // 设置用于笔触的颜色、渐变或模式
          ctx.strokeStyle = this.randomColor(
            this.lineColorMin,
            this.lineColorMax
          )
          // 起始一条路径，或重置当前路径
          ctx.beginPath()
          // 把路径移动到画布中的指定点，不创建线条
          ctx.moveTo(
            this.randomNum(0, this.contentWidth),
            this.randomNum(0, this.contentHeight)
          )
          // 添加一个新点，然后在画布中创建从该点到最后指定点的线条
          ctx.lineTo(
            this.randomNum(0, this.contentWidth),
            this.randomNum(0, this.contentHeight)
          )
          // 绘制已定义的路径
          ctx.stroke()
        }
      },
      drawDot (ctx) {
        // 绘制干扰点
        for (let i = 0; i < 100; i++) {
          ctx.fillStyle = this.randomColor(0, 255)
          ctx.beginPath()
          // 创建弧/曲线
          ctx.arc(
            this.randomNum(0, this.contentWidth),
            this.randomNum(0, this.contentHeight),
            1,
            0,
            2 * Math.PI
          )
          // 填充当前绘图
          ctx.fill()
        }
      }
    },
    watch: {
      identifyCode () {
        this.drawPic()
      }
    },
    mounted () {
      this.drawPic()
    }
  }
</script>
 
<style scoped>
 
</style>