var db; // 全局的indexedDB数据库实例。
var indexedDB = window.indexedDB || window.webkitIndexedDB || window.mozIndexedDB || window.msIndexedDB;
if (!indexedDB) {
    console.log('你的浏览器不支持IndexedDB');
}
var IDBOpenDBRequest = indexedDB.open('demoDB', 1);
IDBOpenDBRequest.onsuccess = function (e) {
    db = e.target.result;
    console.log('数据库打开了')
};
IDBOpenDBRequest.onerror = function (e) {};

// 第一次打开成功后或者版本有变化自动执行以下事件：一般用于初始化数据库。
IDBOpenDBRequest.onupgradeneeded = function (e) {
    db = e.target.result;
    if (!db.objectStoreNames.contains('testTable')) {
        var objectStore = db.createObjectStore('testTable', {
            keyPath: 'id',
            autoIncrement: true
        });
        //指定可以被索引的字段，unique字段是否唯一。类型： IDBIndex
        objectStore.createIndex('name', 'name', {
            unique: true
        });
        objectStore.createIndex('phone', 'phone', {
            unique: false
        });
    }
    console.log('数据库版本更改为： ' + 1);
};

var Insert = function () {
    //增
    var transaction = db.transaction("testTable", 'readwrite');
    var store = transaction.objectStore("testTable");
    var addPersonRequest = store.add({
        name: '老马'+Math.random(),
        phone: '189111833',
        address: 'aicoder.com'
    });
    addPersonRequest.onsuccess = function (e) {};
    addPersonRequest.onerror = function (e) {};
}
var Delete = function () {
    //删
    var transaction = db.transaction("testTable", 'readwrite');
    var store = transaction.objectStore("testTable");
    store.delete(6).onsuccess = function (e) {};
}
var Update = function () {
    //改
    var transaction = db.transaction("testTable", 'readwrite');
    var store = transaction.objectStore("testTable");
    var person = {
        id: 6,
        name: 'lama',
        phone: '515154084',
        address: 'aicoder.com'
    };
    var updatePersonRequest = store.get(6);
    updatePersonRequest.onsuccess = function (e) {
        store.put(person);
    };
    updatePersonRequest.onerror = function (e) {};
}
var Select = function () {
    //查
    var transaction = db.transaction("testTable", 'readwrite');
    var store = transaction.objectStore("testTable");
    store.get(6).onsuccess = function (e) {
        console.log(e.target.result)
    };
}

var bianli = function () {
    //遍历
    var trans = db.transaction("testTable", 'readwrite');
    var store = trans.objectStore("testTable");
    var cursorRequest = store.openCursor();
    cursorRequest.onsuccess = function (e) {
        var cursor = e.target.result;
        if (cursor) {
           console.log(cursor.value)
            cursor.continue(); // 游标继续往下 搜索，重复触发 onsuccess方法，如果到最后返回null
        }
    };
}