webpackJsonp([1],Array(43).concat([function(e,t,a){"use strict";var n=a(2),s=a(181),i=a(162),r=a.n(i);n.default.use(s.a),t.a=new s.a({routes:[{path:"/",name:"Hello",component:r.a}]})},function(e,t,a){"use strict";var n=a(2),s=a(9),i=a(89);n.default.use(s.a);var r={response:"",methods:{login:{name:"",description:"",params:{}},allKey:[""]},contentType:"json",requestBody:0,requestWay:"POST"},l=new s.a.Store({state:r,getters:i,mutations:{newResponse:function(e,t){e.response=t},getallMethods:function(e,t){e.methods=t},newRequestBody:function(e,t){e.requestBody=t},setContentType:function(e,t){e.contentType=t},setRequestWay:function(e,t){e.requestWay=t},setallKey:function(e,t){e.methods.allKey=t}}});t.a=l},,function(e,t){},,function(e,t,a){a(153);var n=a(4)(a(91),a(179),null,null);e.exports=n.exports},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(2),s=a(48),i=a.n(s),r=a(43),l=a(45),o=a.n(l),u=a(46),c=(a.n(u),a(42)),d=a.n(c),p=a(47),v=a.n(p),h=a(9),f=a(44);n.default.use(h.a),n.default.use(o.a);var m=d.a.create({baseURL:"http://localhost:5000",timeout:5e3});n.default.use(v.a,m),n.default.config.productionTip=!1,new n.default({el:"#app",router:r.a,store:f.a,template:"<App/>",components:{App:i.a}})},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),a.d(t,"getrequestway",function(){return n});var n=function(e){return e.requestWay}},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(150);t.default={mixins:[n.a],name:"ElOption",componentName:"ElOption",props:{value:{required:!0},label:[String,Number],created:Boolean,disabled:{type:Boolean,default:!1}},data:function(){return{index:-1,groupDisabled:!1,visible:!0,hitState:!1}},computed:{currentLabel:function(){return this.label||("string"==typeof this.value||"number"==typeof this.value?this.value:"")},currentValue:function(){return this.value||this.label||""},parent:function(){for(var e=this.$parent;!e.isSelect;)e=e.$parent;return e},itemSelected:function(){return this.parent.multiple?this.parent.value.indexOf(this.value)>-1:this.value===this.parent.value},limitReached:function(){return!!this.parent.multiple&&(!this.itemSelected&&this.parent.value.length>=this.parent.multipleLimit&&this.parent.multipleLimit>0)}},watch:{currentLabel:function(){this.created||this.parent.remote||this.dispatch("ElSelect","setSelected")},value:function(){this.created||this.parent.remote||this.dispatch("ElSelect","setSelected")}},methods:{handleGroupDisabled:function(e){this.groupDisabled=e},hoverItem:function(){this.disabled||this.groupDisabled||(this.parent.hoverIndex=this.parent.options.indexOf(this))},selectOptionClick:function(){!0!==this.disabled&&!0!==this.groupDisabled&&this.dispatch("ElSelect","handleOptionClick",this)},queryChange:function(e){var t=String(e).replace(/(\^|\(|\)|\[|\]|\$|\*|\+|\.|\?|\\|\{|\}|\|)/g,"\\$1");this.visible=new RegExp(t,"i").test(this.currentLabel)||this.created,this.visible||this.parent.filteredOptionsCount--},resetIndex:function(){var e=this;this.$nextTick(function(){e.index=e.parent.options.indexOf(e)})}},created:function(){this.parent.options.push(this),this.parent.cachedOptions.push(this),this.parent.optionsCount++,this.parent.filteredOptionsCount++,this.index=this.parent.options.indexOf(this),this.$on("queryChange",this.queryChange),this.$on("handleGroupDisabled",this.handleGroupDisabled),this.$on("resetIndex",this.resetIndex)},beforeDestroy:function(){this.dispatch("ElSelect","onOptionDestroy",this)}}},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(165),s=a.n(n),i=a(168),r=a.n(i),l=a(167),o=a.n(l);t.default={data:function(){return{title:"API-Test"}},components:{headerA:s.a,tabPage:r.a,responArea:o.a}}},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{options:[{value:"1",label:"No Auth"},{value:"2",label:"Basic Auth"},{value:"3",label:"Digest Auth"},{value:"4",label:"OAuth 1.0"},{value:"5",label:"OAuth 2.0"},{value:"6",label:"Hawk Authentication"},{value:"7",label:"AWS Signature"}],value:"1"}}}},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{radio:2}},methods:{setArea:function(e){1===e?this.$store.commit("setContentType","text"):2===e?this.$store.commit("setContentType","json"):3===e?(this.$store.commit("setContentType","form url-encode"),this.$store.commit("newRequestBody",1)):4===e?(this.$store.commit("setContentType","multipart"),this.$store.commit("newRequestBody",1)):this.$store.commit("setContentType","file")}}}},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{formServer:{header:[""]}}},methods:{onAddHeader:function(e){"addheader"===e&&this.formServer.header.push({key:null,value:null})},onRemoveHeader:function(e,t){"delheader"===e&&this.formServer.header.splice(t,1)}}}},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"hello",data:function(){return{msg:"Welcome to Your Vue.js App"}}}},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(104),s=a.n(n),i=a(102),r=a.n(i),l=a(9);t.default={data:function(){var e=this,t=[{select:"str",key:"method",value:e.message.name}],a=e.message.params;for(var n in a){var s={key:"",select:""};s.key=n,s.select=a[n],t.push(s)}return{allApi:{},methodParams:t,options:[{value:"str",label:"str"},{value:"int",label:"int"},{value:"float",label:"float"},{value:"dict",label:"dict"},{value:"list",label:"list"}],value:"int"}},props:["message"],watch:{},methods:{onAddHeader:function(e){"addHeader"===e&&this.methodParams.push({key:null,value:null,select:"str"})},onRemoveHeader:function(e,t){"delHeader"===e&&this.methodParams.splice(t,1)},sendRequest:function(){var e=this,t=this,a=t.message.name;console.log(r()(t.methodParams));var n=r()(t.methodParams),s=t.getrequestway;console.log("send"),this.$store.commit("newResponse",""),"POST"===s?t.axios.post(a,n).then(function(t){e.$store.commit("newResponse",t.data)}):"GET"===s&&t.axios.get("/login").then(function(t){e.$store.commit("newResponse",t.data)})}},computed:s()({methods:function(){return this.$store.state.methods}},a.i(l.b)(["getrequestway"]))}},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(163),s=a.n(n);t.default={data:function(){return{allApi:{}}},components:{apiPage:s.a},computed:{methods:function(){var e=this.$store.state.methods;return delete e.allKey,e},allKey:function(){return this.$store.state.methods.allKey}}}},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(158),s=a.n(n);t.default={components:{ElOption:s.a},data:function(){return{inputUrl:"",select:"POST"}},methods:{sendMessage:function(){var e=this,t=this,a=t.select;console.log("submit"),this.$store.commit("newResponse",""),"POST"===a?t.axios.post(t.inputUrl).then(function(t){e.$store.commit("newResponse",t.data)}):"GET"===a?t.axios.get(t.inputUrl).then(function(t){e.$store.commit("newResponse",t.data)}):"PUT"===a?t.axios.put(t.inputUrl).then(function(t){e.$store.commit("newResponse",t.data)}):"DELETE"===a&&t.axios.delete(t.inputUrl).then(function(t){e.$store.commit("newResponse",t.data)})},changeWay:function(e){"GET"===e?this.$store.commit("setRequestWay","GET"):"POST"===e?this.$store.commit("setRequestWay","POST"):"PUT"===e?this.$store.commit("setRequestWay","PUT"):"DELETE"===e&&this.$store.commit("setRequestWay","DELETE")}}}},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{textarea1:""}}}},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{}},computed:{response:function(){return this.$store.state.response}}}},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(155),s=a.n(n),i=a(159),r=a.n(i),l=a(161),o=a.n(l),u=a(160),c=a.n(u),d=a(166),p=a.n(d),v=a(164),h=a.n(v);t.default={data:function(){return{activeName:"third"}},components:{authPage:r.a,headerPage:o.a,bodyPage:c.a,resquestArea:p.a,getApi:h.a},methods:{handleClick:function(e,t){console.log(e,t)},getAllApi:function(){var e=this,t=this;console.log("get all api"),this.$store.commit("getallMethods",{login:{name:"",description:"",params:{}},allKey:[""]}),t.axios.post("/get_all_api",s.a.stringify({name:"yuyuan",password:"yuyuan"})).then(function(t){e.$store.commit("getallMethods",t.data)})}}}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t){},function(e,t){},function(e,t){},,,,,function(e,t,a){var n=a(4)(a(90),a(171),null,null);e.exports=n.exports},function(e,t,a){var n=a(4)(a(92),a(170),null,null);e.exports=n.exports},function(e,t,a){var n=a(4)(a(93),a(172),null,null);e.exports=n.exports},function(e,t,a){var n=a(4)(a(94),a(173),null,null);e.exports=n.exports},function(e,t,a){a(152);var n=a(4)(a(95),a(177),"data-v-4756c840",null);e.exports=n.exports},function(e,t,a){var n=a(4)(a(96),a(174),null,null);e.exports=n.exports},function(e,t,a){var n=a(4)(a(97),a(175),null,null);e.exports=n.exports},function(e,t,a){a(151);var n=a(4)(a(98),a(169),null,null);e.exports=n.exports},function(e,t,a){var n=a(4)(a(99),a(180),null,null);e.exports=n.exports},function(e,t,a){var n=a(4)(a(100),a(178),null,null);e.exports=n.exports},function(e,t,a){var n=a(4)(a(101),a(176),null,null);e.exports=n.exports},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticStyle:{"margin-top":"15px"}},[a("span",[a("el-input",{attrs:{placeholder:"API-url",size:"small"},model:{value:e.inputUrl,callback:function(t){e.inputUrl=t},expression:"inputUrl"}},[a("el-select",{attrs:{placeholder:"请求方法"},on:{change:e.changeWay},slot:"prepend",model:{value:e.select,callback:function(t){e.select=t},expression:"select"}},[a("el-option",{attrs:{label:"GET",value:"GET"}}),e._v(" "),a("el-option",{attrs:{label:"POST",value:"POST"}}),e._v(" "),a("el-option",{attrs:{label:"PUT",value:"PUT"}}),e._v(" "),a("el-option",{attrs:{label:"DELETE",value:"DELETE"}}),e._v(" "),a("el-option",{attrs:{label:"PATCH",value:"PATCH"}}),e._v(" "),a("el-option",{attrs:{label:"HEAD",value:"HEAD"}}),e._v(" "),a("el-option",{attrs:{label:"OPTIONS",value:"OPTIONS"}})],1),e._v(" "),a("el-button",{staticStyle:{"background-color":"#1D8CE0",color:"whitesmoke","font-weight":"bold"},attrs:{type:"success"},on:{click:e.sendMessage},slot:"append"},[e._v("发送")])],1)],1)])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}},e._l(e.options,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}))},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("li",{directives:[{name:"show",rawName:"v-show",value:e.visible,expression:"visible"}],staticClass:"el-select-dropdown__item",class:{selected:e.itemSelected,"is-disabled":e.disabled||e.groupDisabled||e.limitReached,hover:e.parent.hoverIndex===e.index},on:{mouseenter:e.hoverItem,click:function(t){t.stopPropagation(),e.selectOptionClick(t)}}},[e._t("default",[a("span",[e._v(e._s(e.currentLabel))])])],2)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticStyle:{margin:"5px 5px"}},[a("el-radio-group",{on:{change:e.setArea},model:{value:e.radio,callback:function(t){e.radio=t},expression:"radio"}},[a("el-radio",{attrs:{label:1}},[e._v("Text")]),e._v(" "),a("el-radio",{attrs:{label:2}},[e._v("Json")]),e._v(" "),a("el-radio",{attrs:{label:3}},[e._v("Form Url-encoded")]),e._v(" "),a("el-radio",{attrs:{label:4}},[e._v("Multipart")]),e._v(" "),a("el-radio",{attrs:{label:5}},[e._v("File")])],1)],1)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-col",[a("el-form",{attrs:{model:e.formServer}},[a("el-form-item",{attrs:{label:"Add params:"}},[a("div",[a("i",{staticClass:"el-icon-plus",staticStyle:{cursor:"pointer"},on:{click:function(t){e.onAddHeader("addheader")}}}),e._v(" "),a("br")]),e._v(" "),e._l(e.formServer.header,function(t,n){return a("div",{key:n,staticStyle:{"margin-bottom":"10px"}},[a("el-input",{staticStyle:{width:"200px","margin-right":"20px"},attrs:{placeholder:"key"},model:{value:t.key,callback:function(e){t.key="string"==typeof e?e.trim():e},expression:"item.key"}}),e._v(" "),a("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"value"},model:{value:t.value,callback:function(e){t.value="string"==typeof e?e.trim():e},expression:"item.value"}}),e._v(" "),a("i",{staticClass:"el-icon-delete",on:{click:function(t){e.onRemoveHeader("delheader",n)}}})],1)})],2)],1)],1)],1)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-col",[a("el-form",{attrs:{model:e.allApi}},[[a("i",{staticStyle:{"font-weight":"600",color:"#20a0ff"}},[e._v(e._s(e.message.params))]),e._v(" "),a("el-form-item",{attrs:{label:"Add params:"}},[a("div",[a("i",{staticClass:"el-icon-plus",staticStyle:{cursor:"pointer"},on:{click:function(t){e.onAddHeader("addHeader")}}}),e._v(" "),a("el-button",{staticStyle:{"margin-left":"40%"},attrs:{type:"success",size:"small"},on:{click:e.sendRequest}},[e._v("Send")]),e._v(" "),a("br")],1),e._v(" "),e._l(e.methodParams,function(t,n){return a("div",{key:n,staticStyle:{"margin-bottom":"10px"}},[a("el-select",{attrs:{placeholder:"type"},model:{value:t.select,callback:function(e){t.select=e},expression:"item.select"}},e._l(e.options,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),e._v(" "),a("el-input",{staticStyle:{width:"200px","margin-right":"10px"},attrs:{placeholder:"key"},model:{value:t.key,callback:function(e){t.key="string"==typeof e?e.trim():e},expression:"item.key"}}),e._v(" "),a("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"value"},model:{value:t.value,callback:function(e){t.value="string"==typeof e?e.trim():e},expression:"item.value"}}),e._v(" "),a("i",{staticClass:"el-icon-delete",on:{click:function(t){e.onRemoveHeader("delHeader",n)}}})],1)})],2)]],2)],1)],1)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-collapse",{attrs:{accordion:""}},e._l(e.methods,function(t){return a("el-collapse-item",{key:t.name},[a("template",{slot:"title"},[a("el-tag",{attrs:{type:"danger"}},[e._v(e._s(t.name))]),e._v(" "),a("i",{staticStyle:{color:"#1d90e6"}},[e._v(e._s(t.description))])],1),e._v(" "),a("api-page",{attrs:{message:t}})],2)}))},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-tabs",{attrs:{type:"card"},on:{"tab-click":e.handleClick},model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[a("el-tab-pane",{attrs:{label:"Authorization",name:"first"}},[a("div",[a("span",[a("span",{staticStyle:{margin:"50px"}},[e._v("Type")]),e._v(" "),a("auth-page",{staticStyle:{width:"40%"}})],1)])]),e._v(" "),a("el-tab-pane",{attrs:{label:"Headers",name:"second"}},[a("header-page")],1),e._v(" "),a("el-tab-pane",{attrs:{label:"Body",name:"third"}},[a("div",{staticStyle:{height:"100%"}},[a("div",{staticStyle:{margin:"5px"}},[a("body-page")],1),e._v(" "),a("div",{staticStyle:{width:"100%",height:"100%"}},[a("resquest-area")],1)])]),e._v(" "),a("el-tab-pane",{attrs:{label:"Get API",name:"fouth"}},[a("el-button",{staticStyle:{margin:"5px"},attrs:{type:"info",size:"small"},on:{click:e.getAllApi}},[e._v("get all api")]),e._v(" "),a("get-api")],1)],1)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"hello"},[a("h1",[e._v(e._s(e.msg))]),e._v(" "),a("h2",[e._v("Essential Links")]),e._v(" "),e._m(0),e._v(" "),a("h2",[e._v("Ecosystem")]),e._v(" "),e._m(1)])},staticRenderFns:[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",[a("li",[a("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[e._v("Core Docs")])]),e._v(" "),a("li",[a("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank"}},[e._v("Forum")])]),e._v(" "),a("li",[a("a",{attrs:{href:"https://gitter.im/vuejs/vue",target:"_blank"}},[e._v("Gitter Chat")])]),e._v(" "),a("li",[a("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank"}},[e._v("Twitter")])]),e._v(" "),a("br"),e._v(" "),a("li",[a("a",{attrs:{href:"http://vuejs-templates.github.io/webpack/",target:"_blank"}},[e._v("Docs for This Template")])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",[a("li",[a("a",{attrs:{href:"http://router.vuejs.org/",target:"_blank"}},[e._v("vue-router")])]),e._v(" "),a("li",[a("a",{attrs:{href:"http://vuex.vuejs.org/",target:"_blank"}},[e._v("vuex")])]),e._v(" "),a("li",[a("a",{attrs:{href:"http://vue-loader.vuejs.org/",target:"_blank"}},[e._v("vue-loader")])]),e._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank"}},[e._v("awesome-vue")])])])}]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-input",{staticStyle:{width:"100%",height:"100%"},attrs:{type:"textarea",autosize:{minRows:29,maxRows:100},placeholder:""},model:{value:e.response,callback:function(t){e.response=t},expression:"response"}})],1)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("div",{staticStyle:{width:"50%",float:"left"}},[a("h2",{staticClass:"tittle",domProps:{textContent:e._s(e.title)}}),e._v(" "),a("header-a"),e._v(" "),a("br"),e._v(" "),a("tab-page")],1),e._v(" "),a("div",{staticStyle:{float:"left",margin:"5% 5% 0% 5%",width:"40%",height:"100%"}},[a("i",{staticStyle:{"font-size":"large"}},[e._v("Response")]),e._v(" "),a("respon-area")],1)])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-input",{staticStyle:{width:"100%",height:"80%"},attrs:{type:"textarea",autosize:{minRows:25,maxRows:100},placeholder:"Request body"},model:{value:e.textarea1,callback:function(t){e.textarea1=t},expression:"textarea1"}})],1)},staticRenderFns:[]}}]),[88]);
//# sourceMappingURL=app.3daa32db4c65956acce4.js.map