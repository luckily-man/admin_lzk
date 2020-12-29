export default class SocketService {
  static instance = null
  static get Instance () {
    if (!this.instance) {
      this.instance = new SocketService()
    }
    return this.instance
  }

  ws = null

  // 存储回调函数
  callBackMapping = {}

  // 标识连接是否成功
  connected = false
  // 记录重试次数
  sendRetryCount = 0
  // 重新连尝试的次数
  connectRetryCount = 0
  // 定义连接服务器方法
  connect () {
    // 连接服务器
    if (!window.WebSocket) {
      console.log('您的服务器不支持websocket')
    }
    this.ws = new WebSocket('ws://localhost:9998')

    // 链接成功的事件
    this.ws.onopen = () => {
      console.log('连接服务端成功')
      this.connected = true
      this.connectRetryCount = 0
    }
    // 连接服务端失败的事件
    this.ws.onclose = () => {
      console.log('连接服务端失败')
      this.connected = false
      this.connectRetryCount++
      setTimeout(() => {
        this.connect()
      }, this.connectRetryCount * 500)
    }
    // 得到服务端发送过来的数据事件
    this.ws.onmessage = msg => {
      console.log('从服务端获取到了数据')
      // console.log(msg.data)
      const recvData = JSON.parse(msg.data)
      const socketType = recvData.socketType
      // 判断回调函数是否存存在
      if (this.callBackMapping[socketType]) {
        const action = recvData.action
        if (action === 'getData') {
          const realData = JSON.parse(recvData.data)
          this.callBackMapping[socketType].call(this, realData)
        } else if (action === 'fullScreen') {
          this.callBackMapping[socketType].call(this, recvData)
        } else if (action === 'themeChange') {
          this.callBackMapping[socketType].call(this, recvData)
        }
      }
    }
  }
  // 回调函数的注册

  registCallBack (socketType, callBack) {
    this.callBackMapping[socketType] = callBack
  }
  // 取消某一个回调函数

  unRegisterCallBack (socketType) {
    this.callBackMapping[socketType] = null
  }

  send (data) {
    // 判断此时此刻有没有连接成功
    if (this.connected) {
      this.sendRetryCount = 0
      this.ws.send(JSON.stringify(data))
    } else {
      this.sendRetryCount++
      setTimeout(() => {
        this.send(data)
      }, this.sendRetryCount * 500)
    }
  }
}
