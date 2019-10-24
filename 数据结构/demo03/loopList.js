// 线性表的抽象数据类型
class loopList {
    constructor() {
        this.init()
    }
    dataType(value, next) {
        return Object.create(null, {
            value: {
                value: value,
                writable: true,
                configurable: true,
                enumerable: true
            },
            next: {
                value: next,
                writable: true,
                configurable: true,
                enumerable: true
            }
        })
    }
    init() {
        // 初始化操作，建立一个空的线性表
        this.list = this.dataType(null, null)
        this.list.next = this.list
        this.nodeLength = 0
    }
    reset() {
        //将线性表清空
    }
    getLength() {
        //返回线性表的元素个数
    }
    isEmpty() {
        // 若线性表为空，返回true，否则返回false
    }

    insert(i, value) {
        //在线性表的第i个位置插入新元素
        if (i < 1 || i > this.nodeLength + 1) {
            return 'error'
        }
        var node = this.list
        for (var j = 1; j < i; j++) {
            node = node.next
        }
        node.next = this.dataType(value, node.next)
        this.nodeLength++
    }
    delete(i) {
        //删除线性表中第i个位置的元素并返回元素值
        if (i < 1 || i > this.nodeLength) {
            return 'error'
        }
        var node = this.list
        for (var j = 1; j < i; j++) {
            node = node.next
        }
        node.next = node.next.next
        this.nodeLength--
    }
    update(i, value) {
        //修改线性表中第i个位置的元素并返回原元素值
        if (i < 1 || i > this.nodeLength) {
            return 'error'
        }
        var node = this.list
        for (var j = 1; j < i; j++) {
            node = node.next
        }
        node.next.value=value
    }
    selectByKey(i) {
        //将线性表中第i个位置的元素值返回
        if (i < 1 || i > this.nodeLength) {
            return 'error'
        }
        var node = this.list
        for (var j = 1; j < i; j++) {
            node = node.next
        }
        return node.next.value
    }
    selectByValue() {
        //在线性表中查找与给定值e相等的元素
        //查找成功，返回该元素在表中的位置
    }
}