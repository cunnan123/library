import operationFactory from './Simplefactorymodel';
var factory = new operationFactory();
var sub = factory.inOperation("+");
sub.inputOne = 1;
sub.inputTwo = 2;
var res=sub.getResult();
console.log(res);