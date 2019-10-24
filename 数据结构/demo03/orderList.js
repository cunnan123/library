// 线性表的顺序存储
class orderList {
    constructor() {
        this.init()
    }
    dataType(node) {
        return node
    }
    init() {
        // 初始化操作，建立一个空的线性表
        this.list = []
        this.listLength = 10;
        this.nodeLength = this.list.length
    }
    reset() {
        //将线性表清空
        this.list = []
        this.listLength = 10;
        this.nodeLength = this.list.length
    }
    getLength() {
        //返回线性表的元素个数
        return this.nodeLength
    }
    isEmpty() {
        // 若线性表为空，返回true，否则返回false
        if (this.nodeLength == 0) {
            return true
        } else {
            return false
        }
    }
    insert(i, value) {
        //在线性表的第i个位置插入新元素
        //i值在正常范围内
        if (i < 1 || i > this.nodeLength + 1 || i > this.listLength) {
            return 'error'
        }
        if (this.nodeLength == this.listLength) {
            return 'error'
        }
        //[1,2,3,4,5]
        if (i != this.nodeLength + 1) {
            //不是在最后面
            for (var j = this.nodeLength; j >= i; j--) {
                this.list[j] = this.list[j - 1]
            }
        }
        this.list[i - 1] = this.dataType(value)
        this.nodeLength = this.list.length
        return 'success'
    }
    delete(i) {
        //删除线性表中第i个位置的元素并返回元素值
        //线性表长度不为0，i值在正常范围内
        if (this.nodeLength == 0 || i < 1 || i > this.nodeLength) {
            return 'error'
        }
        //[1,2,3,4,5]
        var tmp = this.list[i - 1]
        if (i != this.nodeLength) {
            //i不是最后一个
            for (var j = i; j < this.nodeLength; j++) {
                this.list[j - 1] = this.list[j]
            }
        } 
        this.nodeLength = --this.list.length;
        return tmp
    }
    update(i, value) {
        //修改线性表中第i个位置的元素并返回原元素值
        //线性表长度不为0，i值在正常范围内
        if (this.nodeLength == 0 || i < 1 || i > this.nodeLength) {
            return 'error'
        }
        var tmp = this.list[i - 1]
        this.list[i - 1] = this.dataType(value)
        return tmp
    }
    selectByKey(i) {
        //将线性表中第i个位置的元素值返回
        //线性表长度不为0，i值在正常范围内
        if (this.nodeLength == 0 || i < 1 || i > this.nodeLength) {
            return 'error'
        }
        return this.list[i - 1]
    }
    selectByValue() {
        //在线性表中查找与给定值e相等的元素
        //查找成功，返回该元素在表中的位置
        //查找失败，返回0
    }
}