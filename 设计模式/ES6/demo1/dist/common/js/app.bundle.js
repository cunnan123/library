!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="./",n(n.s=8)}([function(t,e){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},function(t,e){function n(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}t.exports=function(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),t}},function(t,e,n){var r=n(5),o=n(6);t.exports=function(t,e){return!e||"object"!==r(e)&&"function"!=typeof e?o(t):e}},function(t,e){function n(e){return t.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},n(e)}t.exports=n},function(t,e,n){var r=n(7);t.exports=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e)}},function(t,e){function n(e){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?t.exports=n=function(t){return typeof t}:t.exports=n=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(e)}t.exports=n},function(t,e){t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}},function(t,e){function n(e,r){return t.exports=n=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},n(e,r)}t.exports=n},function(t,e,n){"use strict";n.r(e);var r=n(0),o=n.n(r),u=n(1),i=n.n(u),c=n(2),f=n.n(c),s=n(3),l=n.n(s),a=n(4),p=n.n(a),y=function(){function t(e,n){o()(this,t),this.inputOne=e,this.inputTwo=n,this.resultDefault=0}return i()(t,[{key:"getResult",value:function(){return this.resultDefault}}]),t}(),h=function(t){function e(){return o()(this,e),f()(this,l()(e).call(this))}return p()(e,t),i()(e,[{key:"number",value:function(t){return Number(t)}},{key:"getResult",value:function(){return this.number(this.inputOne)+this.number(this.inputTwo)}}]),e}(y),b=function(t){function e(){return o()(this,e),f()(this,l()(e).call(this))}return p()(e,t),i()(e,[{key:"getResult",value:function(){return this.inputOne-this.inputTwo}}]),e}(y),O=function(t){function e(){return o()(this,e),f()(this,l()(e).call(this))}return p()(e,t),i()(e,[{key:"getResult",value:function(){return this.inputOne*this.inputTwo}}]),e}(y),v=function(t){function e(){return o()(this,e),f()(this,l()(e).call(this))}return p()(e,t),i()(e,[{key:"getResult",value:function(){return this.inputOne/this.inputTwo}}]),e}(y),w=(new(function(){function t(){o()(this,t),this.operate=null}return i()(t,[{key:"inOperation",value:function(t){switch(t){case"+":this.operate=new h;break;case"-":this.operate=new b;break;case"*":this.operate=new O;break;case"/":this.operate=new v}return this.operate}}]),t}())).inOperation("+");w.inputOne=1,w.inputTwo=2;var d=w.getResult();console.log(d)}]);
//# sourceMappingURL=app.bundle.js.map