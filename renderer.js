// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

const { BrowserWindow, dialog, globalShortcut } = require('electron').remote;
const { ipcRenderer } = require('electron');
console.log('000')
const btn = document.getElementById('btn');
ipcRenderer.on('main-to-son', (event, data) => {
  console.log('event', event);
  console.log('data', data);
})

const ret = globalShortcut.register('CommandOrControl+X', () => {
  console.log('CommandOrControl+X  is register');
})

console.log(globalShortcut.isRegistered('CommandOrControl+X'));


btn.addEventListener('click', function() {


  dialog.showErrorBox('eeerror','this si a error tips'
  )

  // dialog.showOpenDialog({
  //   // defaultPath: 'file://C:/MentorGraphics',
  //   filters: [
  //     {name: 'png', extensions: ['png']}
  //   ],
  //   title: 'chose png',
  //   properties: ['openFile']
  // }, (ele) => {
  // console.log("TCL: ele", ele)
  // })


//   dialog.showMessageBox({type: 'question', title: '咋回事', message: '这么写对么',
//   detail: '额外信息',
//   buttons: ['确定', 'false', 'Close', 'Reload', 'Ok']
// }, (index) => {
//   console.log('arr', index)
// });

  // console.log('ok')
  // let win = new BrowserWindow({
  //   width: 800,
  //   height: 600,
  //   // frame: false,
  //   // transparent: true
  // })
  
  // ipcRenderer.send('haha', {name: 'liu', age: 23})


  // win.loadURL(`file://${__dirname}/test.html`)
  
  // win.on('resize', updateReply);
  // win.on('move', updateReply);

  // function updateReply() {
  //   const showText = document.getElementById('show-text');
  //   const msg = `Size: ${win.getSize()} -- Position: ${win.getPosition()}`;
  //   showText.innerHTML = msg;
  // }
  // win.webContents.on('crashed', () => {

  // })






}, false)

// const showTray = document.getElementById('trayBtn');
// let flag = false;
// showTray.addEventListener('click', function() {
//   if (flag) {
//     flag = false;
//     ipcRenderer.send('tray-hidden');
//     document.getElementsByTagName('span')[0].innerHTML = "HIDDEN";
//   } else {
//     flag = true;
//     ipcRenderer.send('tray-show');
//     document.getElementsByTagName('span')[0].innerHTML = "SHOW";

//   }
// }, false)


