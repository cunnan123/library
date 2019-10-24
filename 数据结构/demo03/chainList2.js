// 线性表的抽象数据类型
class chainList2 {
    constructor() {
        this.init()
    }
    dataType(prev,value, next) {
        return Object.create(null, {
            prev: {
                value: prev,
                writable: true,
                configurable: true,
                enumerable: true
            },
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
        this.list=this.dataType(null,null,null)
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
        var node=this.list
        if(i<Math.ceil(this.nodeLength/2)){//前半部分
            console.log(1)
            for(var j=1;j<i;j++){
                node=node.next
            }
            var before=node
            var after=node.next
            if(before==this.list){
                var n=this.dataType(null,value,after)
            }else{
                var n=this.dataType(before,value,after)
            }
            before.next=n
            if(after==null){
                this.list.prev=n
            }else{
                after.prev=n
            }
        }else{//后半部分
            console.log(2)
            for(var j=this.nodeLength;j>=i;j--){
                node=node.prev
            }
            var after=node
            var before=node.prev
            if(after==this.list){
                var n=this.dataType(before,value,null)
            }else{
                var n=this.dataType(before,value,after)
            }
            if(before==null){
                this.list.next=n
            }else{
                before.next=n
            }
            after.prev=n
        }
        this.nodeLength++
    }
    delete(i) {
        //删除线性表中第i个位置的元素并返回元素值
        if (i < 1 || i > this.nodeLength) {
            return 'error'
        }
        var node=this.list
        if(i<Math.ceil(this.nodeLength/2)){//前半部分
            console.log("删11")
            for(var j=1;j<i;j++){
                node=node.next
            }
            var before=node
            var after=node.next.next
            before.next=after
            if(after!=null){
                if(before==this.list){
                    after.prev=null
                }else{
                    after.prev=before
                }
            }
        }else{//后半部分
            console.log("删22")
            for(var j=this.nodeLength;j>i;j--){
                node=node.prev
            }
            var before=node.prev.prev
            var after=node
            if(before!=null){
                if(after==this.list){
                    before.next=null
                }else{
                    before.next=after
                }
            }
            after.prev=before
        }
        this.nodeLength--
    }
    update(i, value) {
        //修改线性表中第i个位置的元素并返回原元素值
        if (i < 1 || i > this.nodeLength) {
            return 'error'
        }
        var node=this.list
        if(i<Math.ceil(this.nodeLength/2)){//前半部分
            console.log("改111")
            for(var j=1;j<i;j++){
                node=node.next
            }
            node=node.next
        }else{//后半部分
            console.log("改222")
            for(var j=this.nodeLength;j>i;j--){
                node=node.prev
            }
            node=node.prev
        }
        var tmp=node.value
        node.value=value
        return tmp
    }
    selectByKey(i) {
        //将线性表中第i个位置的元素值返回
        if (i < 1 || i > this.nodeLength) {
            return 'error'
        }
        var node=this.list
        if(i<Math.ceil(this.nodeLength/2)){//前半部分
            console.log("查11")
            for(var j=1;j<i;j++){
                node=node.next
            }
            node=node.next
        }else{//后半部分
            console.log("查22")
            for(var j=this.nodeLength;j>i;j--){
                node=node.prev
            }
            node=node.prev
        }
        return node.value
    }
    selectByValue() {
        //在线性表中查找与给定值e相等的元素
        //查找成功，返回该元素在表中的位置
    }
}