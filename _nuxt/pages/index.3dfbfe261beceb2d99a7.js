webpackJsonp([0],{"+ptz":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticStyle:{padding:"8px"}},t._l(t.tweets,function(e,i){return a("div",{key:i,staticStyle:{"padding-bottom":"10px"}},[a("nuxt-link",{attrs:{to:{path:"/users/"+i,query:{tweet:e}}}},[a("div",{staticStyle:{display:"flex","flex-direction":"row"}},[a("div",{staticStyle:{display:"flex","flex-direction":"row","justify-content":"center","align-items":"center"}},[a("div",{staticStyle:{flex:"2","background-color":"tomato","border-radius":"50%",width:"70px",height:"70px"}},[a("img",{staticStyle:{"border-radius":"50%",width:"70px",height:"70px"},attrs:{src:e.avatar_url}})])]),a("div",{staticStyle:{flex:"8","padding-left":"20px"}},[a("div",[t._v(t._s(e.name))]),a("div",{staticStyle:{"font-size":"0.8em"}},[t._v("2-7 13:50:22 ")])])])]),a("nuxt-link",{attrs:{to:{path:"/posts/"+i,query:{tweet:e}}}},[a("div",{staticStyle:{padding:"10px"}},[a("p",{staticStyle:{padding:"10px","line-height":"1.5em"}},[t._v(t._s(e.tweet))])])]),t._m(0,!0)],1)})),a("infinite-loading",{on:{infinite:t.infiniteHandler}})],1)};i._withStripped=!0;var r={render:i,staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticStyle:{display:"flex","flex-direction":"row","justify-content":"space-around","align-items":"center",padding:"20px","border-top":"0.5px solid lightgrey","border-bottom":"15px solid lightgrey"}},[e("i",{staticClass:"fa fa-external-link",staticStyle:{color:"grey"}}),e("i",{staticClass:"fa fa-folder",staticStyle:{color:"grey"}}),e("i",{staticClass:"fa fa-thumbs-up",staticStyle:{color:"grey"}})])}]};e.a=r},"/TYz":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("QPeZ"),r=a("+ptz"),s=!1;var n=function(t){s||a("lIc/")},o=a("VU/8")(i.a,r.a,!1,n,null,null);o.options.__file="pages/index.vue",e.default=o.exports},"0MJc":function(t,e,a){"use strict";var i=a("M/we"),r=!1;var s=function(t){r||a("F46w")},n=a("VU/8")(null,i.a,!1,s,null,null);n.options.__file="components/AppLogo.vue",e.a=n.exports},F46w:function(t,e,a){var i=a("H7l1");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a("rjj0")("09f1299c",i,!1,{sourceMap:!1})},H7l1:function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,".VueToNuxtLogo{display:inline-block;-webkit-animation:turn 2s linear forwards 1s;animation:turn 2s linear forwards 1s;-webkit-transform:rotateX(180deg);transform:rotateX(180deg);position:relative;overflow:hidden;height:180px;width:245px}.Triangle{position:absolute;top:0;left:0;width:0;height:0}.Triangle--one{border-left:105px solid transparent;border-right:105px solid transparent;border-bottom:180px solid #41b883}.Triangle--two{top:30px;border-left:87.5px solid transparent;border-right:87.5px solid transparent;border-bottom:150px solid #3b8070}.Triangle--three,.Triangle--two{left:35px;-webkit-animation:goright .5s linear forwards 3.5s;animation:goright .5s linear forwards 3.5s}.Triangle--three{top:60px;border-left:70px solid transparent;border-right:70px solid transparent;border-bottom:120px solid #35495e}.Triangle--four{top:120px;left:70px;-webkit-animation:godown .5s linear forwards 3s;animation:godown .5s linear forwards 3s;border-left:35px solid transparent;border-right:35px solid transparent;border-bottom:60px solid #fff}@-webkit-keyframes turn{to{-webkit-transform:rotateX(0deg);transform:rotateX(0deg)}}@keyframes turn{to{-webkit-transform:rotateX(0deg);transform:rotateX(0deg)}}@-webkit-keyframes godown{to{top:180px}}@keyframes godown{to{top:180px}}@-webkit-keyframes goright{to{left:70px}}@keyframes goright{to{left:70px}}",""])},"M/we":function(t,e,a){"use strict";var i=function(){var t=this.$createElement;this._self._c;return this._m(0)};i._withStripped=!0;var r={render:i,staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"VueToNuxtLogo"},[e("div",{staticClass:"Triangle Triangle--two"}),e("div",{staticClass:"Triangle Triangle--one"}),e("div",{staticClass:"Triangle Triangle--three"}),e("div",{staticClass:"Triangle Triangle--four"})])}]};e.a=r},QPeZ:function(t,e,a){"use strict";var i=a("0MJc"),r=a("qK+J"),s=a.n(r);e.a={components:{AppLogo:i.a,InfiniteLoading:s.a},data:function(){return{tweets:[],list:[{name:"聪聪",avatar_url:"https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",images:"https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",tweet:"评论里留下你的〖生日和所在地〗。看到有缘的就找ta聊聊呗！遇到同一天生日的，互粉一个，以后过生日就不孤单啦！"},{name:"慕小白",avatar_url:"https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",images:"https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",tweet:"说一件你经历的，最幸运爆棚的事！！！让我们沾沾喜气！出生前追上卵子那次不算 ​​​ ​​​​"},{name:"龙仔",avatar_url:"https://s3.amazonaws.com/uifaces/faces/twitter/kfriedson/128.jpg",images:"https://s3.amazonaws.com/uifaces/faces/twitter/kfriedson/128.jpg",tweet:"低潮时没有，但生死悠关时有一句话很给力，13年出车祸的那天，我被120送到医院，快失去意识的时候，我感觉我的眼睛像虚焦的镜头一样，什么都是模糊的，能看的稍微清楚点的以及现在唯一能记在脑海里的就是医生和护士的白大褂。然后模糊的听见一句话，不知道是谁说的“赶紧的吧！你妈买彩票中奖了！” "},{name:"妻弄",avatar_url:"https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg",images:"https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg",tweet:"以前我很怕得罪人，不敢迟到，不敢要求，不敢说错话，怕冷场，怕对方不高兴，诚惶诚恐的面对所有人。遗憾的是，我并没有得到相应的尊重。后来，我开始宠爱和迁就自己，你迟到我先走，不想做绝不勉强，冷场就玩手机，多顾个人感受，其他人关我屁事。然后发现，我不但被重视，而且更开心了。——易术 "},{name:"妻弄",avatar_url:"https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg",images:"https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg",tweet:"以前我很怕得罪人，不敢迟到，不敢要求，不敢说错话，怕冷场，怕对方不高兴，诚惶诚恐的面对所有人。遗憾的是，我并没有得到相应的尊重。后来，我开始宠爱和迁就自己，你迟到我先走，不想做绝不勉强，冷场就玩手机，多顾个人感受，其他人关我屁事。然后发现，我不但被重视，而且更开心了。——易术 "}]}},asyncData:function(t){return{name:"index"}},methods:{infiniteHandler:function(t){this.tweets=this.tweets.concat(this.list),t.loaded()}}}},U2BA:function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,".container{min-height:100vh;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;text-align:center}.title{font-family:Quicksand,Source Sans Pro,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;display:block;font-weight:300;font-size:100px;color:#35495e;letter-spacing:1px}.subtitle{font-weight:300;font-size:42px;color:#526488;word-spacing:5px;padding-bottom:15px}.links{padding-top:15px}",""])},"lIc/":function(t,e,a){var i=a("U2BA");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a("rjj0")("228d11b0",i,!1,{sourceMap:!1})}});