<template>
  <div id="app" ref="app">
    <div class="rule-btn" @click.stop="onClickShowRule">
      活动<br/>规则
    </div>'
    <div class="rule-view" :class="{'is-show': ruleVisible}">
      <ul>
        <li class="list" v-for="(rule, index) in ruleList" :key="'rule_' + index">
          {{`${index + 1}、 ${rule}`}}
        </li>
      </ul>
    </div>
    <div class="footer">
      <div class="footer-main">
        <ul>
          <li>00</li>
          <li>00</li>
        </ul>
        <button>立即参加</button>
      </div>
    </div>
  </div>
</template>

<script>
import canvas from './js/btc.js'
export default {
  name: 'App',
  data () {
    return {
      ruleVisible: false,
      ruleList: [
        '抽奖码为00~49之间',
        '抽奖码为00~49之间',
        '抽奖码为00~49之间',
        '抽奖码为00~49之间',
        '抽奖码为00~49之间',
        '抽奖码为00~49之间',
        '抽奖码为00~49之间',
        '抽奖码为00~49之间',
        '抽奖码为00~49之间',
        '抽奖码为00~49之间',
        '抽奖码为00~49之间',
        '抽奖码为00~49之间',
        '抽奖码为00~49之间',
        '抽奖码为00~49之间',
        '抽奖码为00~49之间',
        '抽奖码为00~49之间',
        '抽奖码为00~49之间',
        '抽奖码为00~49之间',
        '抽奖码为00~49之间',
        '抽奖码为00~49之间',
        '同一身份证中户每日仅限参加一次活动,当日充值一次,获取一次奖金的机会'
      ]
    }
  },
  mounted () {
    this.$refs.app.appendChild(canvas)
  },
  methods: {
    onClickShowRule () {
      this.ruleVisible = true
      window.document.addEventListener('click', this.handleEvent)
    },
    handleEvent (e) {
      let self = this
      if (e.target.className.indexOf('list') === -1) {
        self.ruleVisible = false
      } else {
        window.document.removeEventListener('click', self.handleEvent)
      }
    }
  }
}
</script>

<style lang="scss">
html, body, #app{
  width: 100%;
  height: 100%;
  /*background: radial-gradient(#06142e, #06142e);*/
  background: url("./assets/timg111.jpg") no-repeat center center;
  background-size: 100% 100%;
}
.rule-btn{
  width: 40px;
  padding: 30px 0;
  border: 1px #fff solid;
  color: #fff;
  text-align: center;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  font-size: 14px;
  position: absolute;
  right: 20px;
  top: -1px;
  z-index: 999;
  background: rgba(255,255,255,.3);
}
.rule-view{
  width: 90%;
  position: absolute;
  left: 50%;
  top: -100%;
  transform: translateX(-50%);
  transition: all .5s;
  z-index: 999;
  &.is-show{
    top: 17%;
  }
  &::before{
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,.9);
    display: block;
    filter: blur(20px);
  }
  ul{
    list-style: none;
    margin: 0;
    padding: 20px;
    border: 1px #fff solid;
    border-radius: 4px;
    color: #fff;
    font-size: 12px;
    position: relative;
    z-index: 999;
    height: 310px;
    overflow: auto;
    li{
      padding-bottom: 5px;
      &:last-child{
        padding-bottom: 0;
      }
    }
  }
}
.footer{
  padding: 20px;
  height: 30%;
  box-sizing: border-box;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  .footer-main{
    border: 1px #fff solid;
    box-shadow: 0 0 8px rgba(255,255,255,1);
    border-radius: 4px;
    height: 100%;
    background: rgba(255,255,255,.3);
    text-align: center;
    ul{
      margin: 0;
      padding: 30px 0;
      text-align: center;
      li{
        display: inline-block;
        background: #05071b;
        color: #fff;
        font-size: 14px;
        border-radius: 4px;
        padding: 10px 25px;
      }
    }
    button{
      outline: none;
      border: 1px #fff solid;
      display: inline-block;
      padding: 10px 30px;
      border-radius: 4px;
      color: #fff;
      background: rgba(255,255,255,.3);
      box-shadow: 0 0 0px rgba(255,255,255,1);
      animation: mymove 1s ease infinite alternate;
    }
  }
}
@keyframes mymove {
  to{
    box-shadow: 0 0 10px rgba(255,255,255,1);
  }
}
canvas{
  position: absolute;
  left: 0;
  top: 0;
}
</style>
