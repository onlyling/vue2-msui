webpackJsonp([0,13],{34:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{panelOpen:!1,menu:[{text:"关于我们",link:{name:"about"}}],nav:[{text:"首页",icon:"home",url:"home",badge:0},{text:"分类",icon:"star",url:"list",badge:0},{text:"购物车",icon:"cart",url:"cart",badge:1},{text:"我的",icon:"me",url:"user",badge:0}],demoList:[{title:"按钮",progress:"70%",link:"button"},{title:"标签页",progress:"70%",link:"tabs"},{title:"列表",progress:"70%",link:"list"},{title:"表单",progress:"50%",link:"form"},{title:"卡片",progress:"70%",link:"card"},{title:"图标",progress:"100%",link:"icon"},{title:"轮播",progress:"50%",link:"swiper"},{title:"iscroll",progress:"50%",link:"iscroll"},{title:"对话框",progress:"20%",link:"modal"},{title:"iscroll2",progress:"X",link:"iscroll2"},{title:"preloader",progress:"20%",link:"preloader"}]}},methods:{toGo:function(t){this.$router.push(t)},togglePanel:function(){this.panelOpen=!this.panelOpen}},mounted:function(){}}},49:function(t,e,n){e=t.exports=n(3)(),e.push([t.id,".avatar{width:6rem;height:6rem;border-radius:3rem}.home-panel-links{list-style:none;padding:0}","",{version:3,sources:["/./src/views/home.vue"],names:[],mappings:"AACA,QAAQ,WAAW,YAAY,kBAAkB,CAChD,AACD,kBAAkB,gBAAgB,SAAS,CAC1C",file:"home.vue",sourcesContent:["\n.avatar{width:6rem;height:6rem;border-radius:3rem\n}\n.home-panel-links{list-style:none;padding:0\n}"],sourceRoot:"webpack://"}])},55:function(t,e,n){var i=n(49);"string"==typeof i&&(i=[[t.id,i,""]]);n(4)(i,{});i.locals&&(t.exports=i.locals)},91:function(t,e,n){var i,s;n(55),i=n(34);var o=n(120);s=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(s=i=i.default),"function"==typeof s&&(s=s.options),s.render=o.render,s.staticRenderFns=o.staticRenderFns,t.exports=i},120:function(t,e){t.exports={render:function(){var t=this,e=(t.$createElement,t._c);return e("ms-pages",{attrs:{panelopen:t.panelOpen,paneldir:"left"}},[e("ms-page",[e("ms-bar-nav",{attrs:{title:t.$route.meta.title,back:!1}},[e("a",{staticClass:"icon icon-me pull-left",on:{click:t.togglePanel},slot:"left"})]),t._v(" "),e("ms-bar-tab",{attrs:{nav:t.nav}}),t._v(" "),e("ms-content",[e("ms-content-block-title",[t._v("慢慢来吧，骚年。样式易复制，交互难复现。")]),t._v(" "),e("ms-content-block-title",[t._v("DEMO")]),t._v(" "),e("ms-list-block",t._l(t.demoList,function(n){return e("ms-list-block-item",{attrs:{title:n.title,after:n.progress,isLink:!0},on:{click:function(e){t.toGo(n.link)}}})}))])]),t._v(" "),e("ms-panel",[e("a",{staticClass:"icon icon-left pull-right",staticStyle:{"margin-top":"1rem","margin-right":"1rem"},on:{click:t.togglePanel}}),t._v(" "),e("div",{staticClass:"content-block"},[e("div",{staticClass:"content-padded text-center"},[e("img",{staticClass:"avatar",attrs:{src:"//gqianniu.alicdn.com/bao/uploaded/i4//tfscom/i3/TB10LfcHFXXXXXKXpXXXXXXXXXX_!!0-item_pic.jpg_250x250q60.jpg"}}),t._v(" "),e("p",[t._v("你的名字。")])]),t._v(" "),e("ul",{staticClass:"home-panel-links"},t._l(t.menu,function(n){return e("router-link",{staticClass:"item-content",attrs:{to:n.link,tag:"li"},domProps:{textContent:t._s(n.text)}})}))])])])},staticRenderFns:[]}}});
//# sourceMappingURL=0.bc3a2cb31bcb0d6f5862.js.map