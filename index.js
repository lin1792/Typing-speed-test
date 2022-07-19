// 起始页面提示
(function detail() {
  myAlert({
    title:'温馨提示',
    close:'X',
    main:'点击开始按钮即可开始测试',
    comfirm:'确定',
    concel:'取消',
    comfirmFn:function(){},
    concelFn:function(){}
  })
})();

var number = document.querySelector('.write')
var start = document.querySelector('#start')
var random
var allTime
var timer

// 开始函数
start.onclick = function () {
  // 字母随机生成函数
  function starting() {
    // 生成并保存随机字母
    function rdnumber() {
      random = String.fromCharCode(Math.random() * 26 + 97).toUpperCase()
    number.innerHTML = random
    }
    // 先调用随机字母函数，按对字母后再次调用
    rdnumber()
    // 按键操作
    var i = 0
    var outcome=0
    window.onkeydown = function (e) {
      if (number.innerHTML == e.key.toUpperCase()) {
        outcome++
        rdnumber()
      }
    }

    allTime = setInterval(function () {
      i++
      // 计时10秒
      if (i >= 60) {
        number.innerHTML = 'A'
        clearInterval(allTime)
        myAlert({
          title:'测试结果',
          close:'X',
          main: `您的每分钟打字速度测试结果为:每分钟<span style="color:red;font-size:30px">${outcome}</span>个字
          <h5>（存储功能暂未开放，敬请期待！）</h5>
          `,
          comfirm:'保存',
          concel:'关闭',
          comfirmFn:function(){},
          concelFn:function(){}
        })
      }
    },1000)
    
  }

  // 定义倒计时初始数字4
  var num = 4
  
  // 定义启动函数
  var start = function () {
    num--
    if (num > 0) {
      number.innerHTML = num
    } else {
      // 开始测试
        starting() 
      // 结束倒计时
      clearInterval(timer)

    }
  }

    // 定义启动倒计时
    // 先调用一次开始函数，清除启动倒计时的延迟执行
  start()
  timer = setInterval(start, 1000)

  
}

var recording = document.querySelector('#recording')

recording.onclick=function () {
  // console.log(123);
  alert('存储功能暂未开放，敬请期待！')
}
