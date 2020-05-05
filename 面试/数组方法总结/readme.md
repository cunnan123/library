for循环,forEach, for...of 
    for循环和forEach相类似
    for...of
            允许你遍历 Strings（字符串）, Arrays（数组）, Sets（集合）, Maps（映射）等可迭代的数据结构等
迭代方法
    every()  对数组中每一项进行给定函数，如果每一项都返回true，则返回true
    some()   对数组中每一项进行给定函数，如果任意一项都返回true，则返回true
    filter() 对数组中每一项进行给定函数,返回该函数会返回true的项组成的数组
    map()    对数组中每一项进行给定函数,返回每次函数调用的结果组成的数组
    forEach() 对数组中每一项进行给定函数,没有返回值，和for循环类似

归并方法
    reduce() reduce从左到右，迭代数组所有项，然后构建一个最终返回的值
    reduceRight() reduceRight从右到左。 迭代数组所有项，然后构建一个最终返回的值
检测数组
    ES3的方法：instanceof
    ES5的方法：Array.isArray
转换方法
    toLocaleString() toString() valueOf()
     join() 将数组转换为字符串，且用分隔符分割
栈方法
    栈方法是指Last-In-First-Out后进先出
        push() 从数组末尾添加
        pop()  从数组末尾移除
队列方法
    队列方法是First-In-First-Out先进先出
        shift()    从数组前端移除
        unshift()  从数组前端添加
重排序方法      
    reverse()  反转数组
    sort()     排序 默认字典排序
操作方法
    concat() 用于复制或者从尾部添加–>创建新数组
    slice() 用于复制或截取数组–>创建新数组
    splice() 用于删除、插入、替换
    Array.from()  用于将类数组对象和可遍历对象转化为数组
    Array.of() 将一组数转换为数组
    fill() 使用固定值填充数组
    entries() 遍历数组，返回可遍历对象 返回键值对
    keys() 遍历数组，返回可遍历对象  返回键名
    values() 遍历数组，返回可遍历对象  返回键
位置方法
    indexOf() 从头找指定项的位置
    lastIndexOf() 从后往前查位置
    find() 返回通过测试的数组的第一个元素的值,原数组不变
    findIndex() 返回第一个符合条件成员的位置，弥补了ES5的indexOf不能发现NaN的不足
    includes() 查找数组是否包含某个元素,返回布尔 array.includes(searchElement,fromIndex=0) 弥补了ES5的indexOf不能发现NaN的不足
    