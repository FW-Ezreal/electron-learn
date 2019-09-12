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
}

app.on('ready', createBrowser)
