import productListModel from './productListModel';
export default class hotProductListModel extends productListModel {
  constructor() {
    super();
    this.init()
  }
  init() {
    this.list = []
  }
  insert(item) {
    this.list.push(item)
  }
  delete(item) {
    this.list.forEach(function (e, i, arr) {
      if (e == item) {
        arr.splice(i, 1)
      }
    })
  }
  update() {
    this.list.forEach(function (e) {
      e()
    })
  }
  select() {}
  show() {
    return this.list;
  }
}

// 测试