import operationClass from './Operation.class'
export default class operationDivClass extends operationClass {
    constructor() {
        super();
    }
    getResult() {
        return  this.inputOne / this.inputTwo;
    }
}