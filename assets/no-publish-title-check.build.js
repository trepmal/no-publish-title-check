!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e){function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function i(t,e){return(i=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function u(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=s(t);if(e){var o=s(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return c(this,n)}}function c(t,e){return!e||"object"!==n(e)&&"function"!=typeof e?l(t):e}function l(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function s(t){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var f=wp.element.Component,p=wp.plugins.registerPlugin,b=wp.editPost.PluginPrePublishPanel,y=wp.data,d=y.select,h=y.dispatch,m=y.subscribe;p("no-publish",{render:function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&i(t,e)}(f,t);var e,n,c,s=u(f);function f(){var t;r(this,f);for(var e=arguments.length,n=new Array(e),o=0;o<e;o++)n[o]=arguments[o];return a(l(t=s.call.apply(s,[this].concat(n))),"state",{postTitle:d("core/editor").getEditedPostAttribute("title"),icon:"thumbs-up",message:"Title checks out!"}),t}return e=f,(n=[{key:"componentDidMount",value:function(){var t=this,e=!1;this.unsubscribe=m((function(){postTitle=d("core/editor").getEditedPostAttribute("title"),t.setState({postTitle:postTitle}),postTitle.toLowerCase().includes("do not publish")?(t.setState({icon:"thumbs-down",message:"Title must be corrected"}),e||(e=!0,h("core/editor").lockPostSaving("do-not-publish"))):(t.setState({icon:"thumbs-up",message:"Title checks out!"}),e&&(e=!1,h("core/editor").unlockPostSaving("do-not-publish")))}))}},{key:"componentDidUnmount",value:function(){this.unsubscribe()}},{key:"render",value:function(){return React.createElement(b,{title:"Title Check",icon:this.state.icon},React.createElement("p",null,this.state.message),React.createElement("strong",null,this.state.postTitle))}}])&&o(e.prototype,n),c&&o(e,c),f}(f)})}]);