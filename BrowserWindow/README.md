BrowserWindow -> 创建 和 控制 浏览器窗口
----
>* 主进程

- [ ] 创建普通窗口
- [ ] 创建无框窗口 | 透明背景
- [ ] 设置背景色
- [ ] 创建父子窗口 -> 子窗口总在上面 -> 子窗口模态
- [ ] 创建窗口不立即显示，在第一次渲染完， 显示出来 `ready-to-show` 
- [ ] 创建窗口正常显示 在加载网页前背景是 灰色的
- [ ] 在渲染进程创建窗口
- [ ] 尝试下 [`BrowserWinsow`](https://electronjs.org/docs/api/browser-window#class-browserwindow) 这个类的 option,

  目前用到的 `width` `height` `x` `y` `show` `resizable` `parent` `modal`
  
**webPreference** 超级重要 

**窗口**拥有的 WebContents 对象. 所有与**网页**相关的事件和操作都将通过它完成.

- [ ] 开启debug
- [ ] 子进程require(electron) 并使用 ？
- [ ] 预先加载脚本

>* 事件  超级多！(尝试了几个)   都是窗口有关事件
>* `win = new BrowserWinodw`

- [ ] 在渲染进程中创建窗口 *缩放* | *移动* 将他们的坐标值和大小值  在页面中 实时显示 显示 
- [ ] 在渲染进程中长点窗口  聚焦|失焦 在 主页面显示