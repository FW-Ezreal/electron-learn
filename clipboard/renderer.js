const { clipboard } = require('electron').remote;


const btn = document.getElementById('btn');
const btn2 = document.getElementById('btn2');

btn.addEventListener('click', function(){



}, false)

btn2.addEventListener('click', function() {
  

})

document.getElementById('msg').ondblclick = function (event) {

  clipboard.writeText =  event.target.innerText;
  console.log('mmsg', event.target.innerText);
}

document.getElementById('plat').onclick = function() {

  document.getElementById('text').value = clipboard.readText();

}