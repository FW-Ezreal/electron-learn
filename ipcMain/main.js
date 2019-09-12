const { BrowserWindow, app, ipcMain } = require('electron');

let win = null;
function createBrowser() {

  win = new BrowserWindow({
    width: 750,
    height: 500,
    webPreferences: {
      nodeIntegration: true
    },
  })

  win.webContents.openDevTools();
  win.loadURL(`file://${__dirname}/index.html`)

  ipcMain.on('sendMsg', (...args) => {
    console.log('args', args)
    // console.log('event', event);
    // console.log('data', data);
    // event.sender.send('mainFeedBack', 'from main feedback');
  });
  ipcMain.on('sendsync', (event, data) => {
    // console.log('sync args', args)
    event.returnValue ='渲染进程和主进程同步通信 接收同步广播，来自主进程的反馈.';
  })
}

app.on('ready', createBrowser)
