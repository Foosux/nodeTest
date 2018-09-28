# keyWords

console 模块提供了一个简单的调试控制台，类似于 Web 浏览器提供的 JavaScript 控制台。

该模块导出两个特定组件
* Console类
* 全局的 console 实例

## Console 类

### new Console(stdout[, stderr][, ignoreErrors])
### new Console(options)
### console.assert(value[, ...message])
### console.clear()
### console.count([label])
### console.countReset([label])
### console.debug(data[, ...args])
### console.dir(obj[, options])
### console.dirxml(...data)
### console.error([data][, ...args])
### console.group([...label])
### console.groupCollapsed()
### console.groupEnd()
### console.info([data][, ...args])
### console.log([data][, ...args])
### console.table(tabularData[, properties])
### console.time([label])
### console.timeEnd([label])
### console.timeLog([label][, ...data])
### console.trace([message][, ...args])
### console.warn([data][, ...args])

## inspector only methods

### console.markTimeline([label])
### console.profile([label])
### console.profileEnd([label])
### console.timeStamp([label])
### console.timeline([label])
### console.timelineEnd([label])
