import operationClass from './Operation.class'
export default class operationSubClass extends operationClass {
    constructor() {
        super();
    }
    getResult() {
        return  this.inputOne - this.inputTwo;
    }
}