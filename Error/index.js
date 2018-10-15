const EventEmitter = require('events');
const ee = new EventEmitter();

setImmediate(() => {
  // 这会使进程崩溃，因为还为添加 'error' 事件句柄。
  ee.emit('error', new Error('这会崩溃'));
});
