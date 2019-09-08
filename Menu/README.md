Menu
===
### 菜单 创建原生应用菜单和上下文菜单。


> 修改设置程序菜单(导航条)的 menu     
> m = Menu.buildFromTemplate(option)  --> 返回Menu
> Menu.setApplicationMenu(m)       
> m是一个options类型的数组, 用于构建一个 MenuItem。使用情况可以在上文提及。
- [ ] 导航条 普通

```
    menu = [{
        name: A,
        child: [
            {name: A1},
            {name: A2}
        ]
    }, {
        name: B
    }]
```
- [ ] 增加点击事件，快捷键  
- [ ] 修改type 的值normal  radio...

**最好给任何一个菜单指定 role去匹配一个标准角色, 而不是尝试在 click 函数中手动实现该行为**

- [ ] 获取程序菜单 getApplicationMenu

> 实例方法  menu.popup closePopup
- [ ] 右键创建菜单，复制剪切等 title  


> 追加菜单

- [ ] 创建一个 MenuItem 实例 参数传 option
- [ ] 添加到 menu   menu.append(....item)
- [ ] 右键弹窗
