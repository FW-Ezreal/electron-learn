const { Menu, MenuItem } = require('electron').remote;
const btn = document.getElementById('btn');

console.log('MenuItem', new MenuItem ({label: '新建窗口', role: 'cut'}));

// 文档 https://electronjs.org/docs/api/menu-item
// 菜单项目
let menu = [
    {
        label: '文件',
        submenu: [
            {
                label: '新建文件',
                accelerator: 'ctrl+n',
                click: () => {
                    console.log('新建文件');
                }
            },
            {
                label: '新建窗口',
                click: () => {
                    console.log('新建窗口');
                }
            }
        ]
    },
    {
        label: '编辑',
        submenu: [
            {
                label: '复制',
                role: 'copy' // 
            },
            {
                label: '粘贴'
            }
        ]
    }
]
let template = Menu.buildFromTemplate(menu);

Menu.setApplicationMenu(template);

let menu2 = [
    {
        label: 'A',
        submenu: [
            {label: 'A1', accelerator: 'ctrl+a', click: ()=> {console.log('ctrl+a')}},
            {label: 'A3', accelerator: 'ctrl+a', click: ()=> {console.log('ctrl+b')}},
        ]
    },
    {
        label: 'B',
        submenu: [
            {label: '复制', role: 'copy'},
            {label: '剪切', role: 'cut'}
        ]
    }
]
let template2 = Menu.buildFromTemplate(menu2)

window.addEventListener('contextmenu', function(e) {
    // console.log('ajaj')
    e.preventDefault();
    template2.popup()
}, false);

btn.addEventListener('click', function() {
  const menu = new Menu();
  console.log('menu', menu)
}, false);