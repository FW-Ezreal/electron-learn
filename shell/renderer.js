const { shell } = require('electron').remote;


const btn = document.getElementById('btn');
const btn2 = document.getElementById('btn2');

btn.addEventListener('click', function(){
  // openExternal
  // shell.openExternal('https://www.baidu.com');

  // moveItemToTrash(fullPath)
  // shell.moveItemToTrash(`file://${__dirname}/1.txt`)

  // beep()
  // shell.beep();

  // shell
  shell.writeShortcutLink(`http://F:\qqMusic\QQMusic.exe`, 'create', {target: 'ttest'})

  console.log("TCL: shell.writeShortcutLink(`file://F:\qqMusic/QQMusic.exe`, 'create', {target: 'ttest'})", shell.writeShortcutLink(`file://F:\qqMusic\QQMusic.exe`, 'create', {target: 'ttest'}))
}, false)

btn2.addEventListener('click', function() {
  // showItemInFolder
  shell.showItemInFolder(`file://${__dirname}/index.html`);

  console.log("TCL: `file://${__dirname}/index.html`", `file://${__dirname}/index.html`)
  // openItem
  // console.log(shell.openItem(`file://${__dirname}/index.html`))

  console.log("TCL: `file://${__dirname}/index.html`", `file://${__dirname}/index.html`)
})
const path = require('path');

let options = {
  title: 'electron 通知API',
  body: 'hello poetries',
  icon: path.join('../1.png') // 通知图标
}

document.getElementById('btn3').onclick = function () {
  let myNotification  = new window.Notification(options.title, options)
  console.log('myNotification', myNotification)
  // 消息可点击
  myNotification.onclick = function () {
      console.log('click notification')
  }
}