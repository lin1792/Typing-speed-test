function myAlert(args) {
  var PopUp = document.createElement('div')
  PopUp.className = "PopUp";
  PopUp.innerHTML = `
  <div class="alert" >
      <div class="header"><span class="title">${args.title}</span><span class="close">${args.close}</span></div>
      <div class="main">
      ${args.main}
      </div>
      <div class="btnList">
           <div class="btn comfirm">${args.comfirm}</div>
           <div class="btn concel">${args.concel}</div> 
      </div>
  </div>
  `;

  var body = document.querySelector('body');
  body.appendChild(PopUp)
 
  var close = document.querySelector(".PopUp .close")
  close.onclick = function () {
    body.removeChild(PopUp)
  }

  // 确认按键
  var comfirm = document.querySelector(".PopUp .comfirm")
  comfirm.onclick = function () {
    if (typeof args.comfirmFn == 'function') {
      args.comfirmFn()
    } else {
      console.error('传入的参数没有设置确认函数');
    }
    body.removeChild(PopUp)
  }

  // 取消按键
  var concel = document.querySelector(".PopUp .concel")
  concel.onclick = function () {
    // body.removeChild(PopUp)
    if (typeof args.concelFn == 'function') {
      args.concelFn()
    } else {
      console.error('传入的参数没有设置取消函数！！！');
     
    }
    body.removeChild(PopUp)

  }
}



