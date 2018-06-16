let config = {
  lineDistance: 100,
  num: 300,
  speed: 2
}

class BTC {
  /**
   * arg x 设置随机的 x 坐标
   * arg y 设置随机的 y 坐标
   * */
  constructor (x, y) {
    this.x = x
    this.y = y
    this.r = Math.random() * 8 // 随机半径
    this._mx = Math.random()
    this._my = Math.random()
    this.c_color = '#fff'
    this.randomX = Math.round(Math.random())
    this.randomY = Math.round(Math.random())
    this.imgObj = new Image()
    this.imgObj.src = '/static/BTC.png'
    this.randomBlur = Math.floor(Math.random() * 7)
  }
  /**
   * 绘制粒子(圆)
   * */
  drawCircle (ctx) {
    ctx.beginPath()
    ctx.shadowColor = 'rgba(255, 255, 255, 1)'
    ctx.shadowOffsetX = 0
    ctx.shadowOffsetY = 0
    ctx.shadowBlur = this.randomBlur
    ctx.font = '15px Arial'
    this.randomX > 0 ? ctx.fillText('1', this.x, this.y) : ctx.fillText('0', this.x, this.y)
    this.randomY > 0 ? ctx.font = '15px Arial' : ctx.font = '10px Arial'
    ctx.fillStyle = this.c_color
    ctx.closePath()
  }
  /**
   * 绘制粒子之间的连接线(圆)
   * art _circle 要连接的粒子实例
   * */
  drawLine (ctx, _circle) {
    let dx = this.x - _circle.x
    let dy = this.y - _circle.y
    let d = Math.sqrt(dx * dx + dy * dy)
    if (d < config.lineDistance) {
      ctx.beginPath()
      // 开始一条路径，移动到位置 this.x,this.y。创建到达位置 _circle.x,_circle.y 的一条线：
      ctx.moveTo(this.x, this.y) // 起始点
      ctx.lineTo(_circle.x, _circle.y) // 终点
      ctx.closePath()
      ctx.strokeStyle = `rgba(255, 255, 255, ${1 - d / config.lineDistance})`
      ctx.stroke()
    }
  }
  /**
   * 粒子的移动
   * 1. 必须在屏幕范围内
   * */
  move (w, h) {
    // this._mx = (this.x < w && this.x > 0) ? this._mx : (-this._mx)
    // this._my = (this.y < h && this.y > 0) ? this._my : (-this._my)
    // this.randomX === 1 ? this.x += this._mx / config.speed : this.x -= this._mx / config.speed
    this.y += this._my / config.speed
    if (this.y > h + 10) {
      this.y = 0
    }
  }
}

export default BTC
