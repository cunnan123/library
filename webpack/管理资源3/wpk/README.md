加载 CSS
npm install--save - dev style - loader css - loader
加载图片
npm install--save - dev file - loader
加载字体
npm install--save - dev file - loader
加载数据
import Data from './data.json'
默认将正常运行。
import 这四种类型的数据(JSON, CSV, TSV, XML) 中的任何一种， 所导入的 Data 变量将包含可直接使用的已解析 JSON：
npm install--save - dev csv - loader xml - loader
全局资源
    |–/components 
    || –/my-component 
    || | –index.jsx 
    || | –index.css 
    || | –icon.svg 
    || | –img.png