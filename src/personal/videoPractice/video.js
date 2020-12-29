
export default {
  data() {
    return {
      // 播放器准备好之后，是否自动播放
      autoplay: false,
      // 是否静音
      muted: true,
      // 播放前显示的视频画面
      poster: require('../../assets/media/pig.jpg'),
      // 设置或返回音频/视频是否应在结束时重新播放
      loop: true,
      controls: true,
      percentage: 0,
      status: null,
      colors: [
        {color: '#f56c6c', percentage: 20},
        {color: '#e6a23c', percentage: 40},
        {color: '#5cb87a', percentage: 60},
        {color: '#1989fa', percentage: 80},
        {color: '#6f7ad3', percentage: 100}
      ],
      strokeWidth: 5,
      width: 50,
      key: 0

    }
  },
  methods: {
    ready() {
      let timer = setInterval(() => {         
        this.percentage += 1
        if(this.percentage >= 100) {
          clearInterval(timer)
          // this.status = 'success'
          this.percentage = 0
          this.key = 1
          let timer2 = setTimeout(() => {
            this.key = 0
            this.ready()
            
          }, 100);
        }
      }, 50);
    }
  },
  computed: {
  },
  mounted() {
    this.ready()
  },
  brforeDestroyed() {
    this.ready()
  }
}