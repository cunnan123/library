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

    return element;
}

document.body.appendChild(component());
