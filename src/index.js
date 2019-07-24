import _ from 'lodash';
import './style.css';
import printMe from './print.js';

function component() {
  let element = document.createElement('div');
  // Lodash，现在由此脚本导入
  element.innerHTML = _.join(['hello', 'webpack'], ' ');
  element.classList.add('hello');
  // 将图像添加到我们现有的 div
  // let myImg = new Image();
  // myImg.src = img;
  // element.appendChild(myImg);

  let btn = document.createElement('button');
  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;
  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());