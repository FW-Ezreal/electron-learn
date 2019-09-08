const { BrowserWindow } = require('electron').remote;
const path = require('path');
const btnArr = document.getElementsByClassName('btn');
let win;
btnArr[0].addEventListener('click', function () {
  win = new BrowserWindow({
    width: 750,
    height: 500,
  });
  win.loadURL(path.join('file://', __dirname, '/child.html'));
})
