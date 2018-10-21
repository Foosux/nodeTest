# 文件系统

fs 模块提供了一些 API，用于以一种类似标准 POSIX 函数的方式与文件系统进行交互。

* 所有的文件系统操作都有异步和同步两种形式
* 异步形式的最后一个参数都是完成时回调函数

## 错误处理

## 文件路径

大部分 fs 操作接受字符串、Buffer、或使用 file: 协议的 URL 对象作为文件路径

* 相对路径
* 绝对路径

## 支持URL对象

## 文件描述符

* fs.open()

## fs.FSWatcher 类

成功调用 fs.watch() 方法会返回一个新的 fs.FSWatcher 对象。

### fs.watch()

```js
fs.watch('./fs/keywords.md', (eventType, filename) => {
  if (filename) {
    console.log(eventType, filename);
  }
})
```

### 相关事件

* change: 每当监视的文件被修改时会触发 'change' 事件。
* error
* close

### watcher.close()

fs.FSWatcher 停止监视文件的变化。 一旦停止，fs.FSWatcher 对象将不再可用。

## fs.ReadStream 类

成功调用 fs.createReadStream() 会返回一个新的 fs.ReadStream 对象。

fs.ReadStream 对象都是可读流。

### 相关事件

* open
* close
* ready

### readStream.bytesRead

### readStream.path

## fs.Stats 类

fs.Stats 对象提供了一个文件的信息。

### stats.isBlockDevice()
### stats.isCharacterDevice()
### stats.isDirectory()
### stats.isFIFO()
### stats.isFile()
### stats.isSocket()
### stats.isSymbolicLink()
该方法只在使用 fs.lstat() 时有效

### stats.dev
### stats.ino
### stats.mode
### stats.nlink
### stats.uid
### stats.gid
### stats.rdev
### stats.size
### stats.blksize
### stats.blocks
### stats.atimeMs
### stats.mtimeMs
### stats.ctimeMs
### stats.birthtimeMs
### stats.atime
### stats.mtime
### stats.birthtime

## fs.WriteStream 类

WriteStream 是一个可写流。

### 相关事件

* open
* close
* ready

### fs.access(path[, mode], callback) & fs.accessSync(path[, mode])
### fs.appendFile(path, data[, options], callback)

异步地追加数据到一个文件，如果文件不存在则创建文件。 data 可以是一个字符串或 Buffer。

### fs.open(path, flags[, mode], callback)

### fs.readFile(path[, options], callback)

### fs.rename(oldPath, newPath, callback)
重命名

### fs.rmdir(path, callback)
### fs.stat(path[, options], callback)
### fs.watch(filename[, options][, listener])
### fs.watchFile(filename[, options], listener)
### fs.unwatchFile(filename[, listener])
### fs.write(fd, buffer[, offset[, length[, position]]], callback)
### fs.writeFile(file, data[, options], callback)

## fs Promises API

新增于v10.0.0

## fs 常量

## 文件系统 flag
