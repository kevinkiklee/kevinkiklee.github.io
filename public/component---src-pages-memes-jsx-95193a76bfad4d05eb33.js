webpackJsonp([0xd82431fb488d],{304:function(e,t){},207:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.pageQuery=void 0;var s=n(3),i=r(s),l=n(20),c=r(l),f=n(26),p=r(f),d=n(42),m=r(d),y=n(17),g=r(y);n(304);var h=function(e){function t(){return o(this,t),a(this,e.apply(this,arguments))}return u(t,e),t.prototype.render=function(){var e=function(e){return e.reduce(function(e,t){return t.node.frontmatter.sticky?e.sticky.push(t):e.regular.push(t),e},{sticky:[],regular:[]})},t=e(this.props.data.memes.edges);return i.default.createElement("div",{className:"memes-page-container page-container"},i.default.createElement(c.default,{title:g.default.siteTitle}),i.default.createElement(m.default,{postEdges:this.props.data.memes.edges}),i.default.createElement("h1",null,"Coding Memes"),t.sticky&&i.default.createElement(p.default,{postEdges:t.sticky,isTwoColumns:!0}),t.regular&&i.default.createElement(p.default,{postEdges:t.regular,isTwoColumns:!0}))},t}(i.default.Component);t.default=h;t.pageQuery="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-pages-memes-jsx-95193a76bfad4d05eb33.js.map