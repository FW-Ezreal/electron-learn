globalShortcut
===
### 系统快捷键 主进程--

在应用程序没有键盘焦点时，监听键盘事件

> globalShortCut 模块可以在操作系统中注册/注销全局快捷键, 以便可以为操作定制各种快捷键。在应用程序模块发出 ready 事件之前, 不应使用此模块

>* globalShortCut.register(按键组合, 回调)

- [ ]  注册一个 'CommandOrControl+X' 的全局快捷键, 回调输出 ... is pressed , !返回值 == true 注册失败 

>* globalShortCut.isRegistered(组合按键) 是否成功注册

- [ ] 判断  'CommandOrControl+X' 是否成功注册

>* globalShortCut.unregister(按键组合) unregisterAll()注销所有快捷键

- [ ] 取消 'CommandOrControl+X'


eg： 初始化 > 注册 > 成功||失败 > 判断是否失败 > 注销 