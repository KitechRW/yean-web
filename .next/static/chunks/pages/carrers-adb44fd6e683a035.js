(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8930],{97530:function(e,t,r){"use strict";r.d(t,{L:function(){return i}});var n=r(87536),a=r(2482),i=function(e,t,r){return void 0===t&&(t={abortEarly:!1}),void 0===r&&(r={}),function(i,s,o){try{var l=function(){var e,t;return u.error?{values:{},errors:(0,a.D)((e=u.error,t=!o.shouldUseNativeValidation&&"all"===o.criteriaMode,e.details.length?e.details.reduce(function(e,r){var a=r.path.join(".");if(e[a]||(e[a]={message:r.message,type:r.type}),t){var i=e[a].types,s=i&&i[r.type];e[a]=(0,n.KN)(a,t,e,r.type,s?[].concat(s,r.message):r.message)}return e},{}):{}),o)}:(o.shouldUseNativeValidation&&(0,a.M)({},o),{errors:{},values:u.value})},c=Object.assign({},t,{context:s}),u={},d=function(){if("sync"===r.mode)u=e.validate(i,c);else{var t=function(e,t){try{var r=e()}catch(n){return t(n)}return r&&r.then?r.then(void 0,t):r}(function(){return Promise.resolve(e.validateAsync(i,c)).then(function(e){u.value=e})},function(e){u.error=e});if(t&&t.then)return t.then(function(){})}}();return Promise.resolve(d&&d.then?d.then(l):l())}catch($){return Promise.reject($)}}}},83113:function(e,t,r){"use strict";r(67294);var n=r(85893),a=function(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("meta",{charSet:"UTF-8"}),(0,n.jsx)("meta",{name:"description",content:"ubuhinzi mu rwanda"}),(0,n.jsx)("meta",{name:"keywords",content:"youth, agribusiness, ubuhinzi, urubyiruko, amakuru, isoko, ihuriro, farmers, platform, Rwanda, farming"}),(0,n.jsx)("meta",{name:"author",content:"Fridolin niyonsaba"}),(0,n.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),(0,n.jsx)("meta",{property:"fb:app_id",content:"2004258806506916"}),(0,n.jsx)("meta",{property:"og:url",content:"https://yeanrwanda.org/"}),(0,n.jsx)("meta",{property:"og:type",content:""}),(0,n.jsx)("meta",{property:"og:description",content:""}),(0,n.jsx)("meta",{property:"og:title",content:"YEAN - My farming story"}),(0,n.jsx)("meta",{property:"og:image",content:"",itemProp:"image"}),(0,n.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,n.jsx)("meta",{name:"twitter:site",content:"@YEAN_Rwanda"}),(0,n.jsx)("meta",{name:"twitter:creator",content:"@fridolin_r"}),(0,n.jsx)("meta",{property:"twitter:title",content:"YEAN - My farming story"}),(0,n.jsx)("meta",{name:"twitter:description",content:""}),(0,n.jsx)("meta",{name:"twitter:image",content:""})]})};t.Z=a},29387:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return k},default:function(){return S}});var n=r(9008),a=r.n(n),i=r(67294),s=r(59499),o=r(50029),l=r(87794),c=r.n(l),u=r(60253),d=r(25675),$=r.n(d),m=r(41664),x=r.n(m),f=r(17737),p=r(42705),h=r.n(p),g=r(87536),y=r(97530),v=r(85893);function w(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function j(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?w(Object(r),!0).forEach(function(t){(0,s.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):w(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var b=h().object({keyword:h().string(),category:h().string(),location:h().string()}),N=function(e){var t,r=e.data,n=(0,i.useState)([]),a=n[0],s=n[1],l=(0,i.useState)([]),d=l[0],m=l[1],p=(0,i.useState)([]),h=p[0],w=p[1],N=(0,i.useState)(null),_=N[0],k=N[1],S=(0,i.useState)(null),P=S[0],E=S[1],F=(0,i.useState)(null),O=F[0],Z=F[1],D=(0,i.useState)([]),M=D[0],A=D[1],C=(0,g.cI)({resolver:(0,y.L)(b)}),J=C.register,V=C.handleSubmit,Y=C.setValue;C.getValues,C.reset,C.formState.errors,(0,i.useEffect)(function(){r.rows&&A(r.rows.filter(function(e){var t=!0;return _&&e.category!==_&&(t=!1),O&&e.location!==O&&(t=!1),P&&e.keyword!==P&&(t=!1),t}))},[_,r.rows,P,O]),(0,i.useEffect)(function(){if(r){var e,t,n,a=null==r?void 0:null===(e=r.keywords)||void 0===e?void 0:e.map(function(e){return{label:e,value:e}}),i=null==r?void 0:null===(t=r.locations)||void 0===t?void 0:t.map(function(e){return{label:e,value:e}}),o=null==r?void 0:null===(n=r.categories)||void 0===n?void 0:n.map(function(e){return{label:e,value:e}});m(a),w(i),s(o)}},[r]);var L=(t=(0,o.Z)(c().mark(function e(t){return c().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:k(t.category),Z(t.location),E(t.keyword);case 3:case"end":return e.stop()}},e)})),function(e){return t.apply(this,arguments)});return(0,v.jsxs)(u.Z,{children:[(0,v.jsxs)("div",{className:"flex-wrap bg-white justify-center items-center w-full p-4 md:p-8 flex gap-4",children:[(0,v.jsxs)("div",{className:"hidden flex-col",children:[(0,v.jsx)("h1",{className:"text-2xl md:text-4xl text-dark-green tracking-wide font-black",children:"Find your Dream Job"}),(0,v.jsx)("p",{className:"mt-2 text-[#767676] max-w-sm",children:"We provide online instant cash loans with quick approval that suit your term length"})]}),(0,v.jsx)($(),{src:"/assets/images/carrer.png",width:"397",height:"242",alt:""}),(0,v.jsxs)("form",{onSubmit:function(e){V(L)(e)},className:"mt-6 w-full justify-center flex items-center gap-6 flex-wrap",children:[(0,v.jsx)(f.ZP,j(j({placeholder:"Keyword",isMulti:!1},J("keyword")),{},{options:d,onChange:function(e){Y("keyword",e.value)}})),(0,v.jsx)(f.ZP,j(j({placeholder:"Location",isMulti:!1},J("location")),{},{options:h,onChange:function(e){Y("location",e.value)}})),(0,v.jsx)(f.ZP,j(j({placeholder:"Category",isMulti:!1},J("category")),{},{options:a,onChange:function(e){Y("category",e.value)}})),(0,v.jsx)("button",{type:"submit",className:"text-white rounded-lg py-3 px-12 border border-dark-green bg-dark-green",children:"Find Job"})]})]}),(0,v.jsxs)("div",{className:"p-4 md:p-8 items-center flex flex-col bg-[#F5F7FA]",children:[(0,v.jsx)("h1",{className:"text-xl md:text-2xl max-w-6xl font-black tracking-wide w-full",children:"Our Job Departments"}),(0,v.jsx)("div",{className:"flex gap-3 flex-wrap justify-between max-w-6xl w-full",children:(0,v.jsx)("h1",{className:"text-xl md:text-2xl font-black tracking-wide",children:"Available Jobs"})}),M.map(function(e,t){return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)("div",{className:"flex items-start gap-3 mt-4 py-4 px-2 flex-wrap justify-between max-w-6xl w-full hover:bg-white",children:[(0,v.jsxs)("div",{className:"flex flex-col gap-3",children:[(0,v.jsxs)("div",{className:"flex items-center gap-3",children:[(0,v.jsx)("h1",{className:"text-lg md:text-xl font-light",children:e.title}),(0,v.jsx)("button",{className:"rounded-full bg-dark-green text-white px-3 ml-24 py-2",children:e.category})]}),(0,v.jsxs)("div",{className:"flex items-center ml-3 gap-3 gap-x-12",children:[(0,v.jsx)("p",{className:"text-dark-green",children:e.keyword}),(0,v.jsx)("p",{className:"text-gray-400",children:e.location})]})]}),(0,v.jsx)(x(),{href:"/carrers/"+e.id,children:(0,v.jsx)("p",{className:"cursor-pointer rounded-lg bg-dark-green text-white px-8 py-3",children:"View more"})})]},e.id),t<M.length-1&&(0,v.jsx)("div",{className:"bg-white w-full h-0.5"})]})})]})]})},_=r(83113),k=!0,S=function(e){return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)(a(),{children:[(0,v.jsx)("title",{children:"Jobs - Yean"}),(0,v.jsx)(_.Z,{})]}),(0,v.jsx)(N,{data:e.data})]})}},27760:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/carrers",function(){return r(29387)}])}},function(e){e.O(0,[8247,8795,3946,3756,2482,2705,7737,253,9774,2888,179],function(){return e(e.s=27760)}),_N_E=e.O()}]);