!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function i(e,t){return(i=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function u(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=a(e);if(t){var r=a(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return l(this,n)}}function l(e,t){return!t||"object"!==o(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function a(e){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}n.r(t);var f=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&i(e,t)}(a,e);var t,n,o,l=u(a);function a(){return r(this,a),l.apply(this,arguments)}return t=a,(n=[{key:"render",value:function(){var e=this,t=this.props.showCheckbox?"":"hidden";return React.createElement("p",{className:t},React.createElement("label",null,React.createElement("input",{onChange:function(){return e.props.changeCallback()},type:"checkbox"}),"Override"))}}])&&c(t.prototype,n),o&&c(t,o),a}(wp.element.Component);function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function b(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function h(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=v(e);if(t){var r=v(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return d(this,n)}}function d(e,t){return!t||"object"!==s(t)&&"function"!=typeof t?m(e):t}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var k=wp.element.Component,w=wp.plugins.registerPlugin,O=wp.editPost.PluginPrePublishPanel,P=wp.data,S=P.select,j=P.dispatch,_=P.subscribe;w("no-publish",{render:function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(c,e);var t,n,o,r=h(c);function c(){var e;p(this,c);for(var t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];return g(m(e=r.call.apply(r,[this].concat(n))),"state",{postTitle:S("core/editor").getEditedPostAttribute("title"),icon:"thumbs-up",message:"Title checks out!"}),g(m(e),"locked",!1),g(m(e),"override",!1),g(m(e),"showCheckbox",!1),g(m(e),"onCheckboxChange",(function(t){e.override=!e.override,e.locked?(e.locked=!1,j("core/editor").unlockPostSaving("do-not-publish")):(e.locked=!0,j("core/editor").lockPostSaving("do-not-publish"))})),e}return t=c,(n=[{key:"componentDidMount",value:function(){var e=this;this.unsubscribe=_((function(){var t=S("core/editor").getEditedPostAttribute("title");e.setState({postTitle:t}),e.override?(e.showCheckbox=!0,e.setState({icon:"thumbs-up",message:"Override!"})):t.toLowerCase().includes("do not publish")?(e.showCheckbox=!0,e.setState({icon:"thumbs-down",message:"Title must be corrected"}),e.locked||(e.locked=!0,j("core/editor").lockPostSaving("do-not-publish"))):(e.showCheckbox=!1,e.setState({icon:"thumbs-up",message:"Title checks out!"}),e.locked&&(e.locked=!1,j("core/editor").unlockPostSaving("do-not-publish")))}))}},{key:"componentDidUnmount",value:function(){this.unsubscribe()}},{key:"render",value:function(){return React.createElement(O,{title:"Title Check",icon:this.state.icon},React.createElement("p",null,this.state.message),React.createElement(f,{changeCallback:this.onCheckboxChange,locked:this.locked,showCheckbox:this.showCheckbox}))}}])&&b(t.prototype,n),o&&b(t,o),c}(k)})}]);