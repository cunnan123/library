import operationAddClass from './AddOperation.class'
import operationSubClass from './SubOperation.class'
import operationMulClass from './MulOperation.class'
import operationDivClass from './DivOperation.class'
export default class operationFactory {
    constructor() {
        this.operate = null;
    }
    inOperation(operation) {
        switch (operation) {
            case "+": {
                this.operate = new operationAddClass();
                break;
            };
            case "-": {
                this.operate = new operationSubClass();
                break;
            };
            case "*": {
                this.operate = new operationMulClass();
                break;
            };
            case "/": {
                this.operate = new operationDivClass();
                break;
            };
        }
        return this.operate;
    }
}
