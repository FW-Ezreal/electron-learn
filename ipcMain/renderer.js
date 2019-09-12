const { ipcRenderer } = require('electron');


const btn = document.getElementById('btn');
const btn2 = document.getElementById('btn2');

btn.addEventListener('click', function(){

  ipcRenderer.send('sendMsg', {name: 'liu', age: '18'})


}, false)

btn2.addEventListener('click', function() {
  const msg = ipcRenderer.sendSync('sendsync', 'this si sync msg');
  console.log('msgs', msg);
})

ipcRenderer.on('mainFeedBack', function(...arg) {
  console.log('arg', arg)
  // console.log('')
}, false);