(function(t){function s(s){for(var a,o,c=s[0],l=s[1],r=s[2],m=0,v=[];m<c.length;m++)o=c[m],Object.prototype.hasOwnProperty.call(e,o)&&e[o]&&v.push(e[o][0]),e[o]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);p&&p(s);while(v.length)v.shift()();return n.push.apply(n,r||[]),i()}function i(){for(var t,s=0;s<n.length;s++){for(var i=n[s],a=!0,c=1;c<i.length;c++){var l=i[c];0!==e[l]&&(a=!1)}a&&(n.splice(s--,1),t=o(o.s=i[0]))}return t}var a={},e={app:0},n=[];function o(s){if(a[s])return a[s].exports;var i=a[s]={i:s,l:!1,exports:{}};return t[s].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=t,o.c=a,o.d=function(t,s,i){o.o(t,s)||Object.defineProperty(t,s,{enumerable:!0,get:i})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,s){if(1&s&&(t=o(t)),8&s)return t;if(4&s&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&s&&"string"!=typeof t)for(var a in t)o.d(i,a,function(s){return t[s]}.bind(null,a));return i},o.n=function(t){var s=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(s,"a",s),s},o.o=function(t,s){return Object.prototype.hasOwnProperty.call(t,s)},o.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=s,c=c.slice();for(var r=0;r<c.length;r++)s(c[r]);var p=l;n.push([0,"chunk-vendors"]),i()})({0:function(t,s,i){t.exports=i("56d7")},"0973":function(t,s,i){},"16b8":function(t,s,i){"use strict";i("6f2e")},"1f00":function(t,s,i){"use strict";i("0973")},"1f7d":function(t,s,i){"use strict";i("7c31")},"22af":function(t,s,i){"use strict";i("340d")},"2bb7":function(t,s,i){"use strict";i("37da")},3099:function(t,s,i){"use strict";i("9503")},"340d":function(t,s,i){},"37da":function(t,s,i){},"56d7":function(t,s,i){"use strict";i.r(s);i("e260"),i("e6cf"),i("cca6"),i("a79d"),i("5fd0");var a=i("2b0e"),e=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{attrs:{id:"app"}},[i("router-view")],1)},n=[],o=i("2877"),c={},l=Object(o["a"])(c,e,n,!1,null,null,null),r=l.exports,p=i("8c4f"),m=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"home"},[a("div",{class:["home-banner",t.isScrollY&&"shelter"]},[a("full-screen-banner"),a("img",{directives:[{name:"show",rawName:"v-show",value:!t.isScrollY,expression:"!isScrollY"}],staticClass:"arrow-down-btn",attrs:{src:i("896a")}})],1),a("div",{staticClass:"home-content"},[a("banner-and-infos"),a("previous-review"),a("team"),a("company"),a("footer-and-infos")],1)])},v=[],d=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"full-screen-banner-layout"},[a("div",{staticClass:"swiper-container full-screen-swiper"},[a("div",{staticClass:"swiper-wrapper"},t._l(t.slides,(function(s){return a("div",{key:s.src,staticClass:"swiper-slide",attrs:{"data-href":s.href}},[a("div",{staticClass:"box",style:{background:"url("+s.src+")",backgroundSize:"cover",backgroundPosition:t.getPosition()}},[a("div",{staticClass:"content font"},[t._v(t._s(s.content))])])])})),0),t.slides.length>1?a("div",{staticClass:"swiper-button-prev"},[a("img",{attrs:{src:i("c5d4")}})]):t._e(),t.slides.length>1?a("div",{staticClass:"swiper-button-next"},[a("img",{attrs:{src:i("c5d4")}})]):t._e()])])},g=[],u="https://competition.aiops-challenge.com/home/competition",f="https://competition.aiops-challenge.com/home/competition/1496398526429724760",C={data:function(){return{slides:[{src:"https://alg-mvp.oss-cn-beijing.aliyuncs.com/aiops-ow/forum/forum-5.jpg",content:void 0,href:f}]}},methods:{getPosition:function(){var t=window.screen.width/window.screen.height;return t===16/9?"center":void 0}},mounted:function(){this.swiper=new window.Swiper(".swiper-container.full-screen-swiper",{loop:!0,effect:"fade",autoplay:!0,speed:1e3,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},on:{click:function(t){var s=t.clickedSlide&&t.clickedSlide.attributes["data-href"].nodeValue;s&&window.open(s)}}})}},w=C,h=(i("7d62"),Object(o["a"])(w,d,g,!1,null,"1a87a41c",null)),b=h.exports,_=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"bai"},[i("banner"),i("infos")],1)},A=[],y=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"banner"},[i("div",{staticClass:"banner--box"},[i("div",{staticClass:"banner--box__top"},[t._m(0),t._m(1),i("div",{staticClass:"right"},[i("banner-nav")],1)]),t._m(2)])])},j=[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"left"},[i("div",{staticClass:"main-name font"},[t._v(" AIOps Challenge"),i("br"),t._v(" 国际智能运维挑战赛 ")])])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"center"},[i("div",{staticClass:"log"},[i("img",{attrs:{src:"https://alg-mvp.oss-cn-beijing.aliyuncs.com/aiops-ow/Logo.svg"}})])])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"linear-gradient-box"},[i("div",{staticClass:"linear-gradient-item"}),i("div",{staticClass:"linear-gradient-item"})])}],E=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"nav font"},[i("div",{staticClass:"button disabled",attrs:{title:"敬请期待"}},[t._v("论坛")]),i("div",{staticClass:"button",attrs:{title:"竞赛"},on:{click:t.go2competition}},[t._v("竞赛")]),i("div",{staticClass:"button disabled",attrs:{title:"敬请期待"}},[t._v("运维场景")]),i("div",{staticClass:"button disabled",attrs:{title:"敬请期待"}},[t._v("数据集")])])},x=[],O={methods:{go2competition:function(){window.open(u)}}},I=O,S=(i("2bb7"),Object(o["a"])(I,E,x,!1,null,"17708e74",null)),k=S.exports,B={name:"banner",components:{BannerNav:k}},T=B,F=(i("16b8"),Object(o["a"])(T,y,j,!1,null,"16a91a92",null)),$=F.exports,q=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"infos"},[t._m(0),t._m(1),i("div",{staticClass:"button-box"},[i("div",{staticClass:"button button__large",attrs:{title:"立即报名参赛"},on:{click:t.go2competition}},[t._v(" 立即报名参赛 ")])]),i("div",{staticClass:"clear"})])},P=[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"infos--box infos--box__left font"},[i("div",{staticClass:"top button"},[t._v("2022")]),i("div",{staticClass:"articles"},[i("div",{staticClass:"title"},[t._v("CCF国际AIOps挑战赛")]),i("p",[t._v("以“微服务架构电商系统下故障识别和分类”为赛题，由中国计算机学会（CCF）、清华大学、中国建设银行股份有限公司主办，中国计算机学会互联网专委会、清华大学计算机系、中国建设银行股份有限公司运营数据中心、北京必示科技有限公司承办。")]),i("p",[t._v("2022CCF国际AIOps挑战赛自3月10日开始报名，时间截止至2022年4月12日，欢迎学界以及产业界所有关注AIOps的从业者报名参加！")])]),i("div",{staticClass:"qrcode"},[i("div",{staticClass:"left b r"},[i("img",{attrs:{src:"https://alg-mvp.oss-cn-beijing.aliyuncs.com/aiops-ow/qrcode1.jpg",alt:""}})]),i("div",{staticClass:"right"},[i("span"),i("div",{staticClass:"title"},[t._v("AIOps挑战赛 官方微信")]),i("span")])])])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"infos--box infos--box__right"},[i("div",{staticClass:"articles"},[i("div",{staticClass:"title font"},[i("div",{staticClass:"en"},[t._v("AIOps(Artificial Intelligence for IT Operations)")]),i("div",{staticClass:"ch"},[t._v("智能运维")])]),i("p",[t._v("是将人工智能的能力与运维相结合，基于已有的运维数据（日志、监控信息、应用信息等）并通过机器学习的方式来进一步解决自动化运维没办法解决的问题。即以大数据平台和机器学习（算法平台）为核心从各个监控系统中抽取数据、面向用户提供服务，以此来提升运维效率。")]),i("p",[t._v("随着数字化程度越来越高，分布式系统、上云等新技术、新组件的不断引入，运维在银行、证券、保险、电信、能源、工业制造、政府部门、互联网等行业的重要性越来越高，用户和企业从质量、效率、性能、安全、成本等多维度出发关注运维。且随着企业IT系统的规模扩大、复杂度不断提高、监控数据日益增长，各类故障层出不穷，保证系统高效可靠运转的难度激增，运维行业亟需新技术带来能效的变革。")])]),i("div",{staticClass:"qrcode"},[i("div",{staticClass:"left t l"},[i("img",{attrs:{src:"https://alg-mvp.oss-cn-beijing.aliyuncs.com/aiops-ow/qrcode3.png",alt:""}})]),i("div",{staticClass:"right"},[i("div",{staticClass:"top"},[i("div",{staticClass:"title font"},[t._v("智能运维前沿公众号")]),i("span",[t._v("介绍世界范围内智能运维的前沿进展 推动智能运维算法在实践中的落地和普世化")])]),i("div",{staticClass:"title font"},[t._v(" ——由清华大学NetMan实验室运营维护 ")])])])])}],Q={name:"infos",methods:{go2competition:function(){window.open(f)}}},U=Q,V=(i("1f00"),Object(o["a"])(U,q,P,!1,null,"d25e7bde",null)),N=V.exports,Y={name:"BannerAndInfos",components:{Banner:$,Infos:N}},L=Y,W=Object(o["a"])(L,_,A,!1,null,null,null),D=W.exports,R=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"previous-review pre"},[i("div",{staticClass:"pre__background"}),t._m(0),i("div",{staticClass:"pre__block-bottom font"},[i("div",{staticClass:"content"},[t._m(1),i("div",{staticClass:"button button__large",attrs:{title:"立即报名参赛"},on:{click:t.go2competition}},[t._v("立即报名参赛")])])]),t._m(2)])},z=[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"pre__block-top font"},[i("div",{staticClass:"title-content"},[i("div",{staticClass:"common-title"},[t._v("往届回顾")])]),i("div",{staticClass:"content"},[i("div",{staticClass:"photos-box"},[i("div",{staticClass:"en-photo"},[i("img",{attrs:{src:"https://alg-mvp.oss-cn-beijing.aliyuncs.com/aiops-ow/AIOpsChallenge.png"}})]),i("div",{staticClass:"photos__item"},[i("div",{staticClass:"mask"}),i("img",{attrs:{src:"https://alg-mvp.oss-cn-beijing.aliyuncs.com/aiops-ow/previous/previous-2021.jpg",alt:""}}),i("a",{attrs:{href:"https://mp.weixin.qq.com/s/gM2DeHTWkHhAAO1XjALFrA"}},[i("div",{staticClass:"articles"},[i("div",{staticClass:"title"},[t._v("2021年第四届")]),i("p",[t._v("云环境下商业银行应用系统的故障实时检测与根因定位")])])])]),i("div",{staticClass:"photos__item"},[i("div",{staticClass:"mask"}),i("img",{attrs:{src:"https://alg-mvp.oss-cn-beijing.aliyuncs.com/aiops-ow/previous/previous-2020.jpg",alt:""}}),i("a",{attrs:{href:"https://mp.weixin.qq.com/s/M0PzOsS12-oq1WhOKhBDjA"}},[i("div",{staticClass:"articles"},[i("div",{staticClass:"title"},[t._v("2020年第三届")]),i("p",[t._v("微服务应用系统故障发现和根因定位")])])])]),i("div",{staticClass:"photos__item"},[i("div",{staticClass:"mask"}),i("img",{attrs:{src:"https://alg-mvp.oss-cn-beijing.aliyuncs.com/aiops-ow/previous/previous-2019.jpg",alt:""}}),i("a",{attrs:{href:"https://mp.weixin.qq.com/s/J-TTSgZzz2Le-0OEVnNldA"}},[i("div",{staticClass:"articles"},[i("div",{staticClass:"title"},[t._v("2019年第二届")]),i("p",[t._v("多维监测指标的异常定位")])])])]),i("div",{staticClass:"photos__item"},[i("div",{staticClass:"mask"}),i("img",{attrs:{src:"https://alg-mvp.oss-cn-beijing.aliyuncs.com/aiops-ow/previous/previous-2018.jpg",alt:""}}),i("a",{attrs:{href:"https://mp.weixin.qq.com/s/8wt9b_VuFECY9sOph1MzcQ"}},[i("div",{staticClass:"articles"},[i("div",{staticClass:"title"},[t._v("2018年第一届")]),i("p",[t._v("KPI异常检测")])])])])])])])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"articles"},[i("div",{staticClass:"title"},[t._v("智能运维挑战赛汇集来自全球各地4000多名选手 及600多个国际顶尖团队参与")]),i("p",[t._v("遴选来自全球极具创新的著名实验室和公司团队精英，呈现世界领先智能运维和算法的非凡水准")])])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"pre__block-terms"},[i("div",{staticClass:"row"},[i("div",{staticClass:"item"},[i("img",{attrs:{src:"https://alg-mvp.oss-cn-beijing.aliyuncs.com/aiops-ow/previous/logo/previous-log-1.png",alt:""}})]),i("div",{staticClass:"item"},[i("img",{attrs:{src:"https://alg-mvp.oss-cn-beijing.aliyuncs.com/aiops-ow/previous/logo/previous-log-2.png",alt:""}})]),i("div",{staticClass:"item"},[i("img",{attrs:{src:"https://alg-mvp.oss-cn-beijing.aliyuncs.com/aiops-ow/previous/logo/previous-log-3.png",alt:""}})]),i("div",{staticClass:"item"},[i("img",{attrs:{src:"https://alg-mvp.oss-cn-beijing.aliyuncs.com/aiops-ow/previous/logo/previous-log-4.png",alt:""}})]),i("div",{staticClass:"item"},[i("img",{attrs:{src:"https://alg-mvp.oss-cn-beijing.aliyuncs.com/aiops-ow/previous/logo/previous-log-5.png",alt:""}})]),i("div",{staticClass:"item"},[i("img",{attrs:{src:"https://alg-mvp.oss-cn-beijing.aliyuncs.com/aiops-ow/previous/logo/previous-log-6.png",alt:""}})]),i("div",{staticClass:"item"},[i("img",{attrs:{src:"https://alg-mvp.oss-cn-beijing.aliyuncs.com/aiops-ow/previous/logo/previous-log-7.png",alt:""}})]),i("div",{staticClass:"item"},[i("img",{attrs:{src:"https://alg-mvp.oss-cn-beijing.aliyuncs.com/aiops-ow/previous/logo/previous-log-8.png",alt:""}})])]),i("div",{staticClass:"row"},[i("div",{staticClass:"item"},[i("img",{attrs:{src:"https://alg-mvp.oss-cn-beijing.aliyuncs.com/aiops-ow/previous/logo/previous-log-9.png",alt:""}})]),i("div",{staticClass:"item"},[i("img",{attrs:{src:"https://alg-mvp.oss-cn-beijing.aliyuncs.com/aiops-ow/previous/logo/previous-log-10.png",alt:""}})]),i("div",{staticClass:"item"},[i("img",{attrs:{src:"https://alg-mvp.oss-cn-beijing.aliyuncs.com/aiops-ow/previous/logo/previous-log-11.png",alt:""}})]),i("div",{staticClass:"item"},[i("img",{attrs:{src:"https://alg-mvp.oss-cn-beijing.aliyuncs.com/aiops-ow/previous/logo/previous-log-12.png",alt:""}})]),i("div",{staticClass:"item"},[i("img",{attrs:{src:"https://alg-mvp.oss-cn-beijing.aliyuncs.com/aiops-ow/previous/logo/previous-log-13.png",alt:""}})]),i("div",{staticClass:"item"},[i("img",{attrs:{src:"https://alg-mvp.oss-cn-beijing.aliyuncs.com/aiops-ow/previous/logo/previous-log-14.png",alt:""}})]),i("div",{staticClass:"item"},[i("img",{attrs:{src:"https://alg-mvp.oss-cn-beijing.aliyuncs.com/aiops-ow/previous/logo/previous-log-15.png",alt:""}})]),i("div",{staticClass:"item"},[i("img",{attrs:{src:"https://alg-mvp.oss-cn-beijing.aliyuncs.com/aiops-ow/previous/logo/previous-log-16.png",alt:""}})])])])}],M={methods:{go2competition:function(){window.open(f)}}},J=M,Z=(i("8ec9"),Object(o["a"])(J,R,z,!1,null,"4f09dfa8",null)),K=Z.exports,X=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"company"},[t._m(0),t._m(1),t._e()])},H=[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"container"},[i("div",{staticClass:"title font"},[t._v("主办单位:")]),i("div",{staticClass:"list top"},[i("div",{staticClass:"item"},[i("img",{attrs:{src:"https://alg-mvp.oss-cn-beijing.aliyuncs.com/aiops-ow/company/CCF.png",alt:""}})]),i("div",{staticClass:"item"},[i("img",{attrs:{src:"https://alg-mvp.oss-cn-beijing.aliyuncs.com/aiops-ow/company/company-2.png",alt:""}})]),i("div",{staticClass:"item"},[i("img",{attrs:{src:"https://alg-mvp.oss-cn-beijing.aliyuncs.com/aiops-ow/company/company-4.png",alt:""}})])])])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"container"},[i("div",{staticClass:"title font"},[t._v("承办单位:")]),i("div",{staticClass:"list middle"},[i("div",{staticClass:"item"},[i("img",{attrs:{src:"https://alg-mvp.oss-cn-beijing.aliyuncs.com/aiops-ow/company/CCF互联网专委会.png",alt:""}})]),i("div",{staticClass:"item"},[i("img",{attrs:{src:"https://alg-mvp.oss-cn-beijing.aliyuncs.com/aiops-ow/company/company-6.png",alt:""}})]),i("div",{staticClass:"item"},[i("img",{attrs:{src:"https://alg-mvp.oss-cn-beijing.aliyuncs.com/aiops-ow/company/company-7.png",alt:""}})]),i("div",{staticClass:"item"},[i("img",{attrs:{src:"https://alg-mvp.oss-cn-beijing.aliyuncs.com/aiops-ow/company/company-5.png",alt:""}})])])])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"list bottom"},[i("div",{staticClass:"item"},[i("img",{attrs:{src:"https://alg-mvp.oss-cn-beijing.aliyuncs.com/aiops-ow/company/alicloud.png",alt:""}})]),i("div",{staticClass:"item"},[i("img",{attrs:{src:"https://alg-mvp.oss-cn-beijing.aliyuncs.com/aiops-ow/company/huaweicloud.svg",alt:""}})])])}],G={},tt=G,st=(i("e80e"),Object(o["a"])(tt,X,H,!1,null,"bd770288",null)),it=st.exports,at=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"team"},[t._m(0),t._m(1),i("news")],1)},et=[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"title"},[i("div",{staticClass:"common-title common-title--small common-title--reverse"},[t._v(" 往届获奖团队 ")])])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"swiper-container team-swiper"},[i("div",{staticClass:"swiper-wrapper"},[i("div",{staticClass:"swiper-slide"},[i("img",{attrs:{src:"https://alg-mvp.oss-cn-beijing.aliyuncs.com/aiops-ow/team/a-01.jpg",width:"100%",alt:""}})]),i("div",{staticClass:"swiper-slide"},[i("img",{attrs:{src:"https://alg-mvp.oss-cn-beijing.aliyuncs.com/aiops-ow/team/a-02.jpg",width:"100%",alt:""}})]),i("div",{staticClass:"swiper-slide"},[i("img",{attrs:{src:"https://alg-mvp.oss-cn-beijing.aliyuncs.com/aiops-ow/team/a-03.jpg",width:"100%",alt:""}})]),i("div",{staticClass:"swiper-slide"},[i("img",{attrs:{src:"https://alg-mvp.oss-cn-beijing.aliyuncs.com/aiops-ow/team/a-04.jpg",width:"100%",alt:""}})]),i("div",{staticClass:"swiper-slide"},[i("img",{attrs:{src:"https://alg-mvp.oss-cn-beijing.aliyuncs.com/aiops-ow/team/a-05.jpg",width:"100%",alt:""}})]),i("div",{staticClass:"swiper-slide"},[i("img",{attrs:{src:"https://alg-mvp.oss-cn-beijing.aliyuncs.com/aiops-ow/team/a-06.jpg",width:"100%",alt:""}})]),i("div",{staticClass:"swiper-slide"},[i("img",{attrs:{src:"https://alg-mvp.oss-cn-beijing.aliyuncs.com/aiops-ow/team/a-07.jpg",width:"100%",alt:""}})]),i("div",{staticClass:"swiper-slide"},[i("img",{attrs:{src:"https://alg-mvp.oss-cn-beijing.aliyuncs.com/aiops-ow/team/08.png",width:"100%",alt:""}})]),i("div",{staticClass:"swiper-slide"},[i("img",{attrs:{src:"https://alg-mvp.oss-cn-beijing.aliyuncs.com/aiops-ow/team/09.png",width:"100%",alt:""}})]),i("div",{staticClass:"swiper-slide"},[i("img",{attrs:{src:"https://alg-mvp.oss-cn-beijing.aliyuncs.com/aiops-ow/team/10.png",width:"100%",alt:""}})]),i("div",{staticClass:"swiper-slide"},[i("img",{attrs:{src:"https://alg-mvp.oss-cn-beijing.aliyuncs.com/aiops-ow/team/11.png",width:"100%",alt:""}})]),i("div",{staticClass:"swiper-slide"},[i("img",{attrs:{src:"https://alg-mvp.oss-cn-beijing.aliyuncs.com/aiops-ow/team/12.png",width:"100%",alt:""}})]),i("div",{staticClass:"swiper-slide"},[i("img",{attrs:{src:"https://alg-mvp.oss-cn-beijing.aliyuncs.com/aiops-ow/team/13.png",width:"100%",alt:""}})]),i("div",{staticClass:"swiper-slide"},[i("img",{attrs:{src:"https://alg-mvp.oss-cn-beijing.aliyuncs.com/aiops-ow/team/14.png",width:"100%",alt:""}})]),i("div",{staticClass:"swiper-slide"},[i("img",{attrs:{src:"https://alg-mvp.oss-cn-beijing.aliyuncs.com/aiops-ow/team/15.png",width:"100%",alt:""}})]),i("div",{staticClass:"swiper-slide"},[i("img",{attrs:{src:"https://alg-mvp.oss-cn-beijing.aliyuncs.com/aiops-ow/team/16.png",width:"100%",alt:""}})]),i("div",{staticClass:"swiper-slide"},[i("img",{attrs:{src:"https://alg-mvp.oss-cn-beijing.aliyuncs.com/aiops-ow/team/17.png",width:"100%",alt:""}})]),i("div",{staticClass:"swiper-slide"},[i("img",{attrs:{src:"https://alg-mvp.oss-cn-beijing.aliyuncs.com/aiops-ow/team/18.png",width:"100%",alt:""}})]),i("div",{staticClass:"swiper-slide"},[i("img",{attrs:{src:"https://alg-mvp.oss-cn-beijing.aliyuncs.com/aiops-ow/team/19.png",width:"100%",alt:""}})]),i("div",{staticClass:"swiper-slide"},[i("img",{attrs:{src:"https://alg-mvp.oss-cn-beijing.aliyuncs.com/aiops-ow/team/20.png",width:"100%",alt:""}})]),i("div",{staticClass:"swiper-slide"},[i("img",{attrs:{src:"https://alg-mvp.oss-cn-beijing.aliyuncs.com/aiops-ow/team/21.png",width:"100%",alt:""}})]),i("div",{staticClass:"swiper-slide"},[i("img",{attrs:{src:"https://alg-mvp.oss-cn-beijing.aliyuncs.com/aiops-ow/team/22.png",width:"100%",alt:""}})])])])}],nt=function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},ot=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"news"},[a("div",{staticClass:"list"},[a("div",{staticClass:"item"},[a("div",{staticClass:"top"},[a("a",{attrs:{href:"https://mp.weixin.qq.com/s/V6WwUI4Ek5_axmSfXxto7Q"}},[a("div",{staticClass:"title font"},[t._v(" 2021国际AIOps挑战赛冠军联想研究院ECR Lab 团队方案 | 有监督及无监督相结合的异常检测及根因分析 ")])]),a("p",[t._v(" 联想研究院-企业服务云计算研究室-智能运维团队成立于2017年，致力于数据中心IT运维的自动化和智能化，打造了领先的智能运维(AIOps)引擎... ")])]),a("div",{staticClass:"bottom font"},[a("span",{staticClass:"date"},[t._v("2021/08/30")]),a("img",{staticClass:"arrow",attrs:{src:i("e4d2"),alt:""}})])]),a("div",{staticClass:"item"},[a("div",{staticClass:"top"},[a("a",{attrs:{href:"https://mp.weixin.qq.com/s/masBuKcZ4qlJ5yp4SygPog"}},[a("div",{staticClass:"title font"},[t._v(" 2021国际AIOps挑战赛季军平安科技团队方案介绍 ")])]),a("p",[t._v(" 参赛团队pa_tech由平安科技运营工具平台团队、混合增强算法团队构成，负责平安集团的AIOps建设，以全链路监控和业务数据为基础... ")])]),a("div",{staticClass:"bottom font"},[a("span",{staticClass:"date"},[t._v("2021/08/11")]),a("img",{staticClass:"arrow",attrs:{src:i("e4d2"),alt:""}})])]),a("div",{staticClass:"item item--simple"},[a("div",{staticClass:"top"},[a("img",{attrs:{src:"https://alg-mvp.oss-cn-beijing.aliyuncs.com/aiops-ow/qrcode3.png",alt:""}})]),a("div",{staticClass:"bottom font"},[a("a",{staticClass:"more",attrs:{title:"查看更多"}},[t._v('查看更多文章, 请关注"智能运维前沿"公众号')])])])])])}],ct={},lt=ct,rt=(i("fdea"),Object(o["a"])(lt,nt,ot,!1,null,"50b4f389",null)),pt=rt.exports,mt={components:{News:pt},mounted:function(){var t=this;setTimeout((function(){t.swiper=new window.Swiper(".swiper-container.team-swiper",{slidesPerView:"auto",spaceBetween:4,freeMode:!0,freeModeSticky:!0})}),200)}},vt=mt,dt=(i("22af"),Object(o["a"])(vt,at,et,!1,null,"7f96d56a",null)),gt=dt.exports,ut=function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},ft=[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"fai"},[i("div",{staticClass:"infos"},[i("div",{staticClass:"left"},[i("div",{staticClass:"title font"},[t._v(" 国际智能运维挑战赛"),i("br"),t._v(" AIOps Challenge ")]),i("p",[t._v("作为智能运维领域最具影响力的专业赛事，国际AIOps挑战赛由清华大学联合中国计算机学会（CCF）发起，旨在在借助社区的力量，运用人工智能技术解决各类运维难题；提供在线算法竞赛平台，帮助参赛者探索、调优智能运维算法，同时聚集高校、科研单位以及工业界知名专家学者分享最前沿的学术成果和实践经验。")])]),i("div",{staticClass:"right"},[i("img",{attrs:{src:"https://alg-mvp.oss-cn-beijing.aliyuncs.com/aiops-ow/Logo.svg",alt:""}})])]),i("div",{staticClass:"footer"},[i("span",[t._v("© 2021 AIOps Challenge")]),i("a",{staticClass:"link",attrs:{href:"https://beian.miit.gov.cn/#/Integrated/index"}},[t._v("粤ICP备17157325号-4")]),i("span",[t._v("All Rights Reserved. NetMan版权所有")]),i("a",{staticClass:"link",attrs:{href:"https://competition.aiops-challenge.com/agreements"}},[t._v("法律声明")])]),i("div",{staticClass:"linear-gradient-box"},[i("div",{staticClass:"linear-gradient-item"}),i("div",{staticClass:"linear-gradient-item"})])])}],Ct={},wt=Ct,ht=(i("1f7d"),Object(o["a"])(wt,ut,ft,!1,null,"ed2437ea",null)),bt=ht.exports,_t={name:"Home",components:{FullScreenBanner:b,BannerAndInfos:D,PreviousReview:K,Company:it,Team:gt,FooterAndInfos:bt},data:function(){return{isScrollY:!1}},mounted:function(){var t=this;window.addEventListener("scroll",(function(){t.isScrollY=window.scrollY>0}))}},At=_t,yt=(i("3099"),Object(o["a"])(At,m,v,!1,null,"69f34fdc",null)),jt=yt.exports;a["a"].use(p["a"]);var Et=[{path:"/",name:"Home",component:jt}],xt=new p["a"]({mode:"history",base:"/",routes:Et}),Ot=xt,It=i("2f62");a["a"].use(It["a"]);var St=new It["a"].Store({state:{},mutations:{},actions:{},modules:{}});i("b20f");a["a"].config.productionTip=!1,new a["a"]({router:Ot,store:St,render:function(t){return t(r)}}).$mount("#app")},"5fd0":function(t,s){function i(t,s){var i=document.getElementsByTagName("html")[0],a=document.body.clientWidth||document.documentElement.clientWidth;i.style.fontSize=a/t*s+"px"}window.onload=function(){i(1440,100)},window.onresize=function(){i(1440,100)}},"6f2e":function(t,s,i){},"7b38":function(t,s,i){},"7c31":function(t,s,i){},"7d62":function(t,s,i){"use strict";i("7b38")},"896a":function(t,s,i){t.exports=i.p+"static/img/arrow-down.01c5c3be.svg"},"8ec9":function(t,s,i){"use strict";i("c4e5")},9503:function(t,s,i){},ab07:function(t,s,i){},b20f:function(t,s,i){},bc78:function(t,s,i){},c4e5:function(t,s,i){},c5d4:function(t,s){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAA4CAYAAAAW0GNDAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAF+SURBVHgB1ZiBTcMwEEV/OkFHCJuYDboBjFA26AbAApBJyAhsQDoBsMFxFxkhQtv7vsQSeZIVVbL//Z5yZ8fADESk03GDpVHRJD8M9htLkQWn9DpazEEFbuUyzxakQQBzrY/WmXaFgLDnenSOCGdyPaVFKdVcm5tS1xteHlYsrTOna5rmiAquBwnmuvOzIQeUkl17DDVdlzcv1jUirNZ1T4iHXKeargdCPKEU4ZpTjwiyupa6TtcS2AgYvjeL9W0E5nxHuD4Wu87Otzo+xKf4kLNRR5/6fCTmPiGKOnsj3CdE0IU7QjzWU3KAngiQEEFq9vEc4IUIcEAE4fZOe3W3ntafs2IulgdnnQnvEXTPFJbr/uQplywsE77HDPfv4pMQQRfuCfFZhVW1LTCFVb0txO4ASPeDEIV1LsD/agv0p2JuC0xhVW8LLSJYXsVnPJkVX4nknNqG4b0Z1yWf5yO5qd050zodR0TRf/B6Ih29LHHXJb8LaxnRSYBOLpT9F3tCufbvhyGYAAAAAElFTkSuQmCC"},e4d2:function(t,s){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAKCAYAAADCb8xtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACrSURBVHgB1ZO7DcJAEETfGceIEq4VSkAiB9MAdICpgA44iAgAUQJ0gKgAN4KXPaSTzC8guvNLZrWaYLQfQ2SOTmwNpwz6g8JUv3wZkbnDUsCq3g5O5s5J75svelANeW3UZRcu+5WM3n2GBNjq+nNdv4axjfa6A4twDkkEDeyczFSmIbBqJUI5nJhNUkE9z+nWjF+aGWfjv470+Bhg7r+NFpATB+FP9BwoaAEPGvEvuYaj8ZQAAAAASUVORK5CYII="},e80e:function(t,s,i){"use strict";i("bc78")},fdea:function(t,s,i){"use strict";i("ab07")}});