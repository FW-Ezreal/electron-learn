const { Menu, MenuItem, Tray, dialog, BrowserWindow } = require('electron').remote;
const btn = document.getElementById('btn');


  // new Tray()
  let tray = null;
  tray = new Tray('favicon.png')
  // 添加hover 文本
  tray.setToolTip('this is a favcion.png')

    // 事件
    tray.on('click', () => {
      console.log('click')
    })
  let timer = null, flag = true
  timer = setInterval(() => {
    console.log("TCL: timer -> `${flag ? 1 : favicon}.png`", `${flag ? 1 : 'favicon'}.png`)
    tray.setImage(`${flag ? 1 : 'favicon'}.png`);
    flag = !flag;
  }, 500);


  // 判断 托盘是否 销毁
  btn.addEventListener('click', function() {
    const x = document.getElementById('inp').value;
    if (!x&&x!=0) {
      dialog.showMessageBox({
        type: 'error',
        message: '[0,9]',
        title: '数字',
        buttons: ['Ok']
      })
    }
    clearInterval(timer);


    if (x == 0) {
      // 销毁图标
      console.log(tray.isDestroyed());
      tray.destroy();
      console.log(tray.isDestroyed());
    } else if (x == 1) {
      // 替换图标
      tray.setImage('1.png');
    } else if (x == 2) {
      // 设置图标 的内容菜单
      const option = [
     
        {label: 'item3', type: 'checkbox'},
        {label: 'item4', type: 'checkbox'},
      ];
      const m = Menu.buildFromTemplate(option);
      tray.setContextMenu(m);
    } else if (x == 3) {
      const option = [
        {label: 'item1', type: 'radio'},
        {label: 'item2', type: 'radio', checked: true},
      ];
      const m = Menu.buildFromTemplate(option);
      tray.popUpContextMenu()
    } else {
      cle
      // createBrowerWinodw()
    }


  }, false);


