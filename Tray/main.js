const {app, BrowserWindow, Tray, Menu} = require('electron');


let win = null;
function createBrowerWinodw() {
  win = new BrowserWindow({
    width:750,
    height: 400,
    webPreferences: {
      nodeIntegration: true
    }
  });
  win.webContents.openDevTools();
  win.loadFile('index.html')

  // 关闭隐藏 
  // const tray = new Tray('1.png');
  // win.on('close', function(e) {
  //   e.preventDefault();
  //   win.hide();
  // })
  // tray.on('double-click', () => {
  //   win.show()
  // })

}

app.on('ready', createBrowerWinodw)

