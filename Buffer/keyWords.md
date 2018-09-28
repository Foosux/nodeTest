# keyWords

* Buffer 类是一个全局变量类型，用来直接处理二进制数据的, 它能够使用多种方式构建。
* 在 ECMAScript 2015 引入 TypedArray 之前，JavaScript 语言没有读取或操作二进制数据流的机制。 Buffer 类被引入作为 Node.js API 的一部分，使其可以在 TCP 流或文件系统操作等场景中处理二进制数据流。
* TypedArray 现已被添加进 ES6 中，Buffer 类以一种更优化、更适合 Node.js 用例的方式实现了 Uint8Array API。
* Buffer 类的实例类似于整数数组，但 Buffer 的大小是固定的、且在 V8 堆外分配物理内存。 Buffer 的大小在被创建时确定，且无法调整。

## 类方法
### Buffer.from()

* Buffer.from(array) 返回一个新建的包含所提供的字节数组的副本的 Buffer。
* Buffer.from(arrayBuffer[, byteOffset [, length]]) 返回一个新建的与给定的 ArrayBuffer 共享同一内存的 Buffer。
* Buffer.from(buffer) 返回一个新建的包含所提供的 Buffer 的内容的副本的 Buffer。
* Buffer.from(string[, encoding]) 返回一个新建的包含所提供的字符串的副本的 Buffer。

### Buffer.alloc(size[, fill[, encoding]])

返回一个指定大小的被填满的 Buffer 实例。 这个方法会明显地比Buffer.allocUnsafe(size) 慢，但可确保新创建的 Buffer 实例绝不会包含旧的和潜在的敏感数据。

* size: 新建的 Buffer 期望的长度。 0 <= size < buffer.constants.MAX_LENGTH
* fill: 用来预填充新建的 Buffer 的值
* encoding: 果 fill 是字符串，则该值是它的字符编码。 默认: 'utf8'

### Buffer.allocUnsafe(size)

uffer.allocUnsafe(size) 与 Buffer.allocUnsafeSlow(size) 返回一个新建的指定 size 的 Buffer，但它的内容必须被初始化，可以使用 buf.fill(0) 或完全写满。

如果 size 小于或等于 Buffer.poolSize 的一半，则 Buffer.allocUnsafe() 返回的 Buffer 实例可能会被分配进一个共享的内部内存池。

### Buffer.allocUnsafeSlow(size)

以这种方式创建的 Buffer 实例的底层内存是未初始化的。 新创建的 Buffer 的内容是未知的，且可能包含敏感数据。 可以使用 buf.fill(0) 初始化 Buffer 实例为0。

### Buffer.byteLength(string[, encoding])

### Buffer.compare(buf1, buf2)

比较 buf1 和 buf2 ，通常用于 Buffer 实例数组的排序。

### Buffer.concat(list[, totalLength])

回一个合并了 list 中所有 Buffer 实例的新建的 Buffer 。

### Buffer.isBuffer(obj)

如果 obj 是一个 Buffer 则返回 true ，否则返回 false

### Buffer.isEncoding(encoding)

如果 encoding 是一个支持的字符编码则返回 true，否则返回 false 。

### Buffer.poolSize

这是用于决定预分配的、内部 Buffer 实例池的大小的字节数。 这个值可以修改。默认：8192

## 实例方法

### buf[index]

可用于获取或设置 buf 中指定 index 位置的八位字节

### buf.buffer

buffer 属性指向创建该 Buffer 的底层的 ArrayBuffer 对象。

### buf.byteOffset

### buf.compare()

### buf.copy(target[, targetStart[, sourceStart[, sourceEnd]]])

### buf.entries()

从 buf 的内容中，创建并返回一个 [index, byte] 形式的迭代器。

### buf.equals(otherBuffer)

如果 buf 与 otherBuffer 具有完全相同的字节，则返回 true，否则返回 false。

### buf.fill(value[, offset[, end]][, encoding])

### buf.includes(value[, byteOffset][, encoding])

### buf.indexOf(value[, byteOffset][, encoding])

### buf.lastIndexOf(value[, byteOffset][, encoding])

### buf.keys()

### buf.values()

### buf.length

### buf.swap64()

### buf.toJSON()

### buf.slice([start[, end]])
