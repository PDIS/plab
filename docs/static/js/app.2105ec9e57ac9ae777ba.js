webpackJsonp([1],{"M+MS":function(t,s){},NHnr:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=e("7+uW"),a={render:function(){this.$createElement;this._self._c;return this._m(0,!1,!1)},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"ui fixed inverted menu"},[s("div",{staticClass:"ui container"},[s("a",{staticClass:"header item",attrs:{href:""}},[s("img",{staticClass:"logo",attrs:{src:"",alt:""}}),this._v("plab\n    ")]),this._v(" "),s("a",{staticClass:"item",attrs:{href:""}},[this._v("Home")])])])}]},n={render:function(){this.$createElement;this._self._c;return this._m(0,!1,!1)},staticRenderFns:[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"ui inverted vertical footer segment"},[e("div",{staticClass:"ui center aligned container"},[e("div",{staticClass:"ui stackable inverted divided grid"},[e("div",{staticClass:"three wide column"},[e("h4",{staticClass:"ui inverted header"},[t._v("Group 1")]),t._v(" "),e("div",{staticClass:"ui inverted link list"},[e("a",{staticClass:"item",attrs:{href:"#"}},[t._v("Link One")]),t._v(" "),e("a",{staticClass:"item",attrs:{href:"#"}},[t._v("Link Two")]),t._v(" "),e("a",{staticClass:"item",attrs:{href:"#"}},[t._v("Link Three")]),t._v(" "),e("a",{staticClass:"item",attrs:{href:"#"}},[t._v("Link Four")])])]),t._v(" "),e("div",{staticClass:"three wide column"},[e("h4",{staticClass:"ui inverted header"},[t._v("Group 2")]),t._v(" "),e("div",{staticClass:"ui inverted link list"},[e("a",{staticClass:"item",attrs:{href:"#"}},[t._v("Link One")]),t._v(" "),e("a",{staticClass:"item",attrs:{href:"#"}},[t._v("Link Two")]),t._v(" "),e("a",{staticClass:"item",attrs:{href:"#"}},[t._v("Link Three")]),t._v(" "),e("a",{staticClass:"item",attrs:{href:"#"}},[t._v("Link Four")])])]),t._v(" "),e("div",{staticClass:"three wide column"},[e("h4",{staticClass:"ui inverted header"},[t._v("Group 3")]),t._v(" "),e("div",{staticClass:"ui inverted link list"},[e("a",{staticClass:"item",attrs:{href:"#"}},[t._v("Link One")]),t._v(" "),e("a",{staticClass:"item",attrs:{href:"#"}},[t._v("Link Two")]),t._v(" "),e("a",{staticClass:"item",attrs:{href:"#"}},[t._v("Link Three")]),t._v(" "),e("a",{staticClass:"item",attrs:{href:"#"}},[t._v("Link Four")])])]),t._v(" "),e("div",{staticClass:"seven wide column"},[e("h4",{staticClass:"ui inverted header"},[t._v("Footer Header")]),t._v(" "),e("p",[t._v("Extra space for a call to action inside the footer that could help re-engage users.")])])]),t._v(" "),e("div",{staticClass:"ui inverted section divider"}),t._v(" "),e("img",{staticClass:"ui centered mini image",attrs:{src:"assets/images/logo.png"}}),t._v(" "),e("div",{staticClass:"ui horizontal inverted small divided link list"},[e("a",{staticClass:"item",attrs:{href:"#"}},[t._v("Site Map")]),t._v(" "),e("a",{staticClass:"item",attrs:{href:"#"}},[t._v("Contact Us")]),t._v(" "),e("a",{staticClass:"item",attrs:{href:"#"}},[t._v("Terms and Conditions")]),t._v(" "),e("a",{staticClass:"item",attrs:{href:"#"}},[t._v("Privacy Policy")])])])])}]},r={name:"app",components:{"v-header":e("VU/8")({name:"header"},a,!1,function(t){e("M+MS")},null,null).exports,"v-footer":e("VU/8")({name:"footer"},n,!1,function(t){e("OhiJ")},null,null).exports}},l={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{attrs:{id:"app"}},[s("v-header"),this._v(" "),s("router-view"),this._v(" "),s("v-footer")],1)},staticRenderFns:[]},o=e("VU/8")(r,l,!1,function(t){e("q/4A"),e("f9vV")},null,null).exports,c=e("/ocq"),v=e("mtWM"),d=e.n(v),u={name:"description",data:function(){return{post:{content:""}}},created:function(){var t=this;d.a.get("https://talk.pdis.nat.gov.tw/t/web/601.json").then(function(s){t.post.content=s.data.post_stream.posts[0].cooked})}},_={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",[s("p",{domProps:{innerHTML:this._s(this.post.content)}})])},staticRenderFns:[]},h={name:"post",data:function(){return{posts:[]}},created:function(){var t=this;d.a.get("https://talk.pdis.nat.gov.tw/c/plab/post.json").then(function(s){var e=s.data.topic_list.topics.map(function(t){return t.id});(e=e.slice(1)).map(function(s){d.a.get("https://talk.pdis.nat.gov.tw/t/"+s+".json").then(function(s){var e={},i=[];if(e.id=s.data.id,e.title=s.data.title,e.content=s.data.post_stream.posts[0].cooked.split("<hr>")[0],null===s.data.post_stream.posts[0].link_counts||"undefined"===s.data.post_stream.posts[0].link_counts)e.links="";else for(var a in s.data.post_stream.posts[0].link_counts)i[a]=s.data.post_stream.posts[0].link_counts[a].url;e.links=i,console.log(e.links[0]),t.posts.push(e)})})}).then()}},p={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"ui three column doubling grid"},t._l(t.posts,function(s){return e("div",{key:s.id,staticClass:"column"},[e("div",{staticClass:"ui fluid card"},[e("a",{staticClass:"image",attrs:{href:"#"}},[e("img",{attrs:{src:s.links[0]}})]),t._v(" "),e("div",{staticClass:"content"},[e("a",{staticClass:"header",attrs:{href:"#"}},[t._v(t._s(s.title))]),t._v(" "),e("div",{staticClass:"meta"},[e("p",{domProps:{innerHTML:t._s(s.content)}})])])])])}))},staticRenderFns:[]},m={name:"Wall",components:{description:e("VU/8")(u,_,!1,null,null,null).exports,post:e("VU/8")(h,p,!1,null,null,null).exports},data:function(){return{msg:"Welcome to Your Vue.js App"}}},f={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",[s("div",{staticClass:"ui container"},[s("h1",{staticClass:"ui center aligned header"},[this._v("plab")]),this._v(" "),s("description"),this._v(" "),s("div",{staticClass:"ui divider"}),this._v(" "),s("post")],1)])},staticRenderFns:[]},C=e("VU/8")(m,f,!1,null,null,null).exports;i.a.use(c.a);var k=new c.a({routes:[{path:"/",name:"wall",component:C},{path:"/wall",name:"Wall",component:C}]});i.a.config.productionTip=!1,new i.a({el:"#app",router:k,template:"<App/>",components:{App:o}})},OhiJ:function(t,s){},f9vV:function(t,s){},"q/4A":function(t,s){}},["NHnr"]);
//# sourceMappingURL=app.2105ec9e57ac9ae777ba.js.map