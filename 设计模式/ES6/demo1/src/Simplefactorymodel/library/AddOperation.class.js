import operationClass from './Operation.class'
export default class operationAddClass extends operationClass {
    constructor() {
        super();
    }
    number(param){
        return Number(param);
    }
    getResult() {
        return this.number(this.inputOne) + this.number(this.inputTwo);
    }
}
