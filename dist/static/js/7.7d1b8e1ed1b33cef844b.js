webpackJsonp([7,13],{35:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{list:new Array(20)}},methods:{goHome:function(){this.$router.push({path:"/"})},pullToRefresh:function(t){var e=this;setTimeout(function(){e.list=new Array(20),t()},2e3)},infiniteToRefresh:function(t){var e=this;setTimeout(function(){e.list=e.list.concat(new Array(20)),t()},2e3)}}}},93:function(t,e,n){var r,i;r=n(35);var o=n(106);i=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(i=r=r.default),"function"==typeof i&&(i=i.options),i.render=o.render,i.staticRenderFns=o.staticRenderFns,t.exports=r},106:function(t,e){t.exports={render:function(){var t=this,e=(t.$createElement,t._c);return e("ms-page",[e("ms-bar-nav",{attrs:{title:t.$route.meta.title}}),t._v(" "),e("ms-content",[e("ms-iscroll",{attrs:{"fade-scrollbars":!1,"pull-to-refresh":t.pullToRefresh,"infinite-to-refresh":t.infiniteToRefresh}},[e("ms-list-block",t._l(t.list,function(n){return e("ms-list-block-item",{attrs:{title:"sheme",after:"此处是文本内容...",icon:"home"},nativeOn:{click:function(e){t.goHome(e)}}})}))])])])},staticRenderFns:[]}}});
//# sourceMappingURL=7.7d1b8e1ed1b33cef844b.js.map