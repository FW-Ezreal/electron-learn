const { app, BrowserWindow, Menu } = require('electron');
const path = require('path');
let win = null;
function createBrowser() {
  win = new BrowserWindow({
    width: 750,
    height: 400,
    webPreferences: {
      // preload: path.join(__dirname, 'renderer.js')
      nodeIntegration: true
    }
  });

  win.webContents.openDevTools();
  win.loadURL(path.join('file://', __dirname, 'index.html'))
}

app.on('ready', createBrowser);

app.on('activate', () => {
  if (!win) {
    createBrowser()
  }
})