import operationClass from './Operation.class'
export default class operationMulClass extends operationClass {
    constructor() {
        super();
    }
    getResult() {
        return  this.inputOne * this.inputTwo;
    }
}
