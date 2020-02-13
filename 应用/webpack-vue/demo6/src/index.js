import html from './file.html';

function component() {
    var element = document.createElement('div');

    element.innerHTML=html
    return element;
}

document.body.appendChild(component());