webpackJsonp([0x93f5c17dac93],{305:function(e,t){},208:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.pageQuery=void 0;var l=r(3),s=n(l),c=r(20),i=n(c),f=r(26),p=n(f),d=r(42),y=n(d),g=r(17),h=n(g);r(305);var m=function(e){function t(){return a(this,t),o(this,e.apply(this,arguments))}return u(t,e),t.prototype.render=function(){var e=function(e){return e.reduce(function(e,t){return t.node.frontmatter.sticky?e.sticky.push(t):e.regular.push(t),e},{sticky:[],regular:[]})},t=e(this.props.data.rambles.edges);return s.default.createElement("div",{className:"rambles-page-container page-container"},s.default.createElement(i.default,{title:h.default.siteTitle}),s.default.createElement(y.default,{postEdges:this.props.data.rambles.edges}),s.default.createElement("h1",null,"Coding Ramblings"),t.sticky&&s.default.createElement(p.default,{postEdges:t.sticky}),t.regular&&s.default.createElement(p.default,{postEdges:t.regular}))},t}(s.default.Component);t.default=m;t.pageQuery="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-pages-rambles-jsx-18a0f606b65ce2e402f7.js.map