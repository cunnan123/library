import _ from 'lodash';
import 'lvbo/style.css';
import Icon from 'lvbo/icon.jpg';
import Data1 from 'lvbo/data.xml';
import Data2 from 'lvbo/data.json'
import printMe from './print.js';
import printMe2 from './print2.js';
import {
    cube
} from './math.js';
if (process.env.NODE_ENV === 'production') {
    console.log('Looks like we are in development mode!');
}

function component() {
    var element = document.createElement('div');

    element.innerHTML = [
        'Hello webpack!',
        '5 cubed is equal to ' + cube(5)
    ].join('\n\n');
    element.classList.add('hello');
    var myIcon = new Image();
    myIcon.src = Icon;
    element.appendChild(myIcon);
    console.log(Data1);
    console.log(Data2);
    var btn = document.createElement('button');
    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;
    element.appendChild(btn);
    var btn2 = document.createElement('button');
    btn2.innerHTML = 'Click me and check the console!2222';
    btn2.onclick = printMe2;
    element.appendChild(btn2);
    var btn3 = document.createElement('button');
    btn3.innerHTML = '3333333333333333';
    btn3.onclick = function () {
        return import( /* webpackChunkName: "print33" */ './print3').then(function (module) {
            var print = module.default;
            print();
        });
    }
    element.appendChild(btn3);
    return element;
}
document.body.appendChild(component());