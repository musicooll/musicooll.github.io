(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-35393fa8"],{"129f":function(s,t){s.exports=Object.is||function(s,t){return s===t?0!==s||1/s===1/t:s!=s&&t!=t}},"1a63":function(s,t,e){"use strict";e("257c")},"257c":function(s,t,e){},"841c":function(s,t,e){"use strict";var n=e("d784"),a=e("825a"),o=e("1d80"),i=e("129f"),c=e("14c3");n("search",1,(function(s,t,e){return[function(t){var e=o(this),n=void 0==t?void 0:t[s];return void 0!==n?n.call(t,e):new RegExp(t)[s](String(e))},function(s){var n=e(t,s,this);if(n.done)return n.value;var o=a(s),r=String(this),l=o.lastIndex;i(l,0)||(o.lastIndex=0);var d=c(o,r);return i(o.lastIndex,l)||(o.lastIndex=l),null===d?-1:d.index}]}))},ca58:function(s,t,e){"use strict";e.r(t);var n=function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"lastfm-callback"},[e("div",{staticClass:"section-1"},[e("img",{attrs:{src:"/img/logos/yesplaymusic.png"}}),e("svg-icon",{attrs:{"icon-class":"x"}}),e("img",{attrs:{src:"/img/logos/lastfm.png"}})],1),e("div",{staticClass:"message"},[s._v(s._s(s.message))]),e("button",{directives:[{name:"show",rawName:"v-show",value:s.done,expression:"done"}],on:{click:s.close}},[s._v(" 完成 ")])])},a=[],o=(e("d3b7"),e("3ca3"),e("ddb0"),e("2b3d"),e("ac1f"),e("841c"),e("7b78")),i={name:"lastfmCallback",data:function(){return{message:"请稍等...",done:!1}},created:function(){var s=this,t=new URLSearchParams(window.location.search).get("token");if(!t)return this.message="连接失败，请重试或联系开发者（无Token）",void(this.done=!0);console.log(t),Object(o["b"])(t).then((function(t){if(console.log(t),!t.data.session)return s.message="连接失败，请重试或联系开发者（无Session）",void(s.done=!0);localStorage.setItem("lastfm",JSON.stringify(t.data.session)),s.$store.commit("updateLastfm",t.data.session),s.message="已成功连接到 Last.fm",s.done=!0}))},methods:{close:function(){window.close()}}},c=i,r=(e("1a63"),e("2877")),l=Object(r["a"])(c,n,a,!1,null,"59915b38",null);t["default"]=l.exports}}]);
//# sourceMappingURL=chunk-35393fa8.6b2508f6.js.map