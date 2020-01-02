import _ from 'lodash';
import './style.css';
import Icon from './icon.jpg';
import Data1 from './data.xml';
import Data2 from './data.json'
function component() {
    var element = document.createElement('div');

    // Lodash，现在由此脚本导入
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    // 将图像添加到我们现有的 div。
    var myIcon = new Image();
    myIcon.src = Icon;

    element.appendChild(myIcon);
    console.log(Data1);
    console.log(Data2);
    return element;
}

document.body.appendChild(component());