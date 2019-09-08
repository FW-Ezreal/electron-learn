console.log(123)
const { app, BrowserWindow } = require('electron');

// 创建一个普通的窗口
let win = null
function createBrowser() {

  // let top = new BrowserWindow()
  // let child = new BrowserWindow({ show: false, parent: top, modal: true, width: 300, height: 200 })
  // // child.show()
  // child.once('ready-to-show', () => {
  //   child.show();
  // })
  // top.show()
  win = new BrowserWindow({
    width: 750,
    height: 500,
    webPreferences:{
      nodeIntegration: true
    }
  })
  win.loadFile('index.html');
  win.webContents.openDevTools();
}
app.on('ready', createBrowser);


