// 线性表的抽象数据类型
class chainList {
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
        this.nodeLength = 0
    }
    reset() {
        //将线性表清空
        this.list = this.dataType(null, null)
        this.nodeLength = 0
    }
    getLength() {
        //返回线性表的元素个数
        return this.nodeLength
    }
    isEmpty() {
        // 若线性表为空，返回true，否则返回false
        if (this.nodeLength == 0) {
            return true
        } else {
            return false
        }
    }
    //0   1   2   3   4   
    //00->00->00->00->00->00
    insert(i, value) {
        //在线性表的第i个位置插入新元素
        if (i < 1 || i > this.nodeLength + 1) {
            return 'error'
        }
        var node = this.list;
        for (var j = 1; j < i; j++) {
            node = node.next
        }
        if (node.next == null) {
            node.next = this.dataType(value, null)
        } else {
            var tmp = node.next
            node.next = this.dataType(value, tmp)
        }
        this.nodeLength++
    }
    delete(i) {
        //删除线性表中第i个位置的元素并返回元素值
        if (i < 1 || i > this.nodeLength || this.nodeLength < 1) {
            return 'error'
        }
        var node = this.list;
        for (var j = 1; j < i; j++) {
            node = node.next
        }

        var value = node.next.value
        node.next = node.next.next
        this.nodeLength--
        return value
    }
    update(i, value) {
        //修改线性表中第i个位置的元素并返回原元素值
        if (i < 1 || i > this.nodeLength || this.nodeLength < 1) {
            return 'error'
        }
        var node = this.list;
        for (var j = 1; j < i; j++) {
            node = node.next
        }

        var tmp = node.next.value
        node.next.value = value
        return tmp
    }
    selectByKey(i) {
        //将线性表中第i个位置的元素值返回
        var node = this.list.next
        var j = 1
        while (node != null && j < i) {
            node = node.next
            j++
        }
        if (node == null || j > i) {
            return 'error'
        }
        return node.value
    }
    selectByValue() {
        //在线性表中查找与给定值e相等的元素
        //查找成功，返回该元素在表中的位置
        //查找失败，返回0
    }
}