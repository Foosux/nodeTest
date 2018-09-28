# keyWords

child_process 模块提供了衍生子进程的功能，它与 popen(3) 类似，但不完全相同。 这个功能主要由 child_process.spawn() 函数提供：

```js
const { spawn } = require('child_process')

```

## 创建异步进程

### child_process.exec(command[, options][, callback])

### child_process.execFile(file[, args][, options][, callback])

### child_process.fork(modulePath[, args][, options])

### child_process.spawn(command[, args][, options])

## 创建同步进程

### child_process.execFileSync(file[, args][, options])

### child_process.execSync(command[, options])

### child_process.spawnSync(command[, args][, options])

## childProcess类

### 事件

#### close 事件

#### disconnect 事件

#### error 事件

#### exit 事件

#### message 事件

### 实例方法

#### subprocess.channel
#### subprocess.connected
#### subprocess.disconnect()
#### subprocess.kill([signal])
#### subprocess.killed
#### subprocess.pid
#### subprocess.send(message[, sendHandle[, options]][, callback])
#### subprocess.stderr
#### subprocess.stdin
#### subprocess.stdio
#### subprocess.stdout

### 注意事项
