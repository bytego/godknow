import BTC from '../libs/BTC.js'

const canvas = document.createElement('canvas')
const WIDTH = canvas.width = document.documentElement.clientWidth
const HEIGHT = canvas.height = document.documentElement.clientHeight * 0.7

// document.getElementsByTagName('body')[0].appendChild(canvas)

let ctx = canvas.getContext('2d')
let BtcList = []

for (let i = 0; i < 100; i++) {
  BtcList.push(new BTC(Math.random() * WIDTH, Math.random() * HEIGHT))
}

animate()

function animate () {
  ctx.clearRect(0, 0, WIDTH, HEIGHT)
  for (let i = 0; i < BtcList.length; i++) {
    BtcList[i].move(WIDTH, HEIGHT)
    BtcList[i].drawCircle(ctx)
    // for (let j = i + 1; j < BtcList.length; j++) {
    //   BtcList[i].drawLine(ctx, BtcList[j])
    // }
  }
  requestAnimationFrame(animate)
}

export default canvas
