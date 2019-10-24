class order {
    constructor() {}
    init(order) {
        this.order = order
    }
    swap(i, j) {
        var tmp = this.order[i]
        this.order[i] = this.order[j]
        this.order[j] = tmp

    }
    orderAsc1() { //交换排序      
        for (var i = 0; i < this.order.length - 1; i++) {
            for (var j = i + 1; j < this.order.length; j++) {               
                if (this.order[i] > this.order[j]) {
                    this.swap(i, j)
                }
            }
        }      
    }
    // var arr=[20,31,40,100,24,11,9]
    orderAsc2() { //冒泡排序
        var flag = true
        for (var i = 0; i < this.order.length - 1 && flag; i++) {
            flag = false
            for (var j = this.order.length - 2; j >= i; j--) {
                if (this.order[j] > this.order[j + 1]) {
                    this.swap(j, j + 1)
                    flag = true
                }
            }
        }
    }
    orderAsc3() { //简单选择排序
        for (var i = 0; i < this.order.length - 1; i++) {
            var index = i
            for (var j = i + 1; j < this.order.length; j++) {
                if (this.order[index] > this.order[j]) {
                    index = j
                }
            }
            if (index != i) {
                this.swap(index, i)
            }
        }
    }
    orderAsc4() { //直接插入排序
        for (var i = 0; i < this.order.length - 1; i++) { //相邻俩数比较次数
            if (this.order[i] > this.order[i + 1]) { //相邻俩数比较大小
                var tmp = this.order[i + 1],
                    j //较小的数给tmp
                for (j = i; this.order[j] > tmp; j--) { //较小的数和之前排好序的数从后向前比较
                    this.order[j + 1] = this.order[j] //比tmp大的元素向后挪一位
                }
                this.order[j + 1] = tmp //将tmp给j位置
            }
        }
    }
    orderAsc5() { //希尔排序
    }
    orderAsc6() { //堆排序
    }
    orderAsc7() { //归并排序
    }
    orderAsc8() { //快速排序
        this.sort(this.order, 0, this.order.length - 1)
    }
    sort(list, low, high) {
        var length = 7
        if (high - low > length) {
            while (low < high) {
                var m = this.part(list, low, high)
                this.sort(list, low, m - 1)
                low = m + 1
            }
        } else {
            // this.orderAsc3()
            this.orderAsc4()
        }
    }
    part(list, low, high) { 
        var m = low + (high - low) / 2
        if (list[low] > list[high]) {
            this.swap2(list, low, high)
        }
        if (list[m] > list[high]) {
            this.swap2(list, high, m)
        }
        if (list[m] > list[low]) {
            this.swap2(list, m, low)
        }
        var tmp = list[low]
        while (low < high) { 
            while (low < high && list[high] >= tmp) {
                high--
            }
            this.order[low] = this.order[high]
            while (low < high && list[low] <= tmp) {
                low++
            }
            this.order[high] = this.order[low]
        }
        this.order[low] = tmp
        return low 
    }
    swap2(list, low, high) {
        var tmp = list[low]
        list[low] = list[high]
        list[high] = tmp
    }
}