# shell

> 使用默认应用程序管理文件和 url。`shell`模块提供了集成其他桌面客户端的关联功能

## 方法

- [ ] 在文件管理器 显示 指定文件  `shell.showItemInFolder(fullPath)`
- [ ] 以桌面的默认方式打开给定的文件 `shell.openItem(fullPath)` eg: open html 用的chrome, 返回Boolean 是否成功打开        
- [ ] 打开外部链接 `shell.openExternal(url, oOption)`
- [ ] 将指定文件移到垃圾箱，返回Boolean，`shell.moveItemToTrash(fullPath)`
- [ ] 发出哔哔声音 `shell.beep()`
- [ ] 创建快捷方式（没成功）