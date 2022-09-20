"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[253],{89391:function(e,r,t){var n=t(326),s=t(42761),a=t(16835),l=t(67294),i=t(87357),o=t(77533),$=t(11163),c=t(56945),_=t(59455),d=t(70192),u=t(21270),h=t(14653),x=t(85893),p=function(e){var r=e.items,t=void 0===r?d.M1:r,p=e.onSearch,f=(0,h.RD)().profile;(0,$.useRouter)().pathname;var m=l.useState(!1),v=(0,a.Z)(m,2),g=v[0],j=v[1],b=function(e){return function(r){("keydown"!==r.type||"Tab"!==r.key&&"Shift"!==r.key)&&j(e)}};return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)("div",{className:"flex items-center space-x-3",children:[p&&(0,x.jsxs)("label",{htmlFor:"search",className:"flex text-white items-center relative md:hidden",children:[(0,x.jsx)(s.Z,{className:"left-3 absolute"}),(0,x.jsx)("input",{type:"search",name:"",id:"search",onClick:p,readOnly:!0,placeholder:"Search",className:"w-full placeholder:text-center rounded-full px-12 placeholder:font-bold placeholder:text-white outline-none bg-brand-green/70 bg-opacity-20 py-2"})]}),(null==f?void 0:f.user)&&(0,x.jsx)("div",{className:"md:hidden relative flex flex-col",children:(0,x.jsx)(u.Z,{})}),(0,x.jsx)("button",{type:"button",onClick:function(){return j(!g)},className:"md:hidden",children:(0,x.jsx)(n.Z,{fontSize:"large"})})]}),(0,x.jsx)(o.ZP,{anchor:"left",open:g,onClose:b(!1),children:(0,x.jsx)(i.Z,{sx:{width:250,backgroundColor:"#F7FAFF"},role:"presentation",onClick:b(!1),onKeyDown:b(!1),children:(0,x.jsxs)("div",{className:"flex py-3 px-4 flex-col flex-grow min-h-screen overflow-y-auto w-full",children:[(0,x.jsx)(c.Z,{}),(0,x.jsx)("div",{className:"flex w-full mt-6"}),(0,x.jsx)(_.Z,{items:t,className:"flex flex-col"}),(0,x.jsx)("div",{className:"flex flex-col mt-auto",children:(0,x.jsxs)("p",{className:"mt-12 text-xs py-2 px-4",children:["\xa9 ",new Date().getFullYear()," yean"]})})]})})})]})};r.Z=p},56945:function(e,r,t){t(67294);var n=t(25675),s=t.n(n),a=t(41664),l=t.n(a),i=t(85893),o=function(e){var r=e.logo;return(0,i.jsx)(l(),{href:"/",children:(0,i.jsx)(s(),{src:void 0===r?"/assets/images/Yean_Logo.png":r,alt:"",width:"105.93px",height:"69px",layout:"fixed",className:"cursor-pointer"})})};r.Z=o},59455:function(e,r,t){var n=t(15398),s=t(14653),a=t(58844),l=t(41664),i=t.n(l),o=t(11163);t(67294);var $=t(70192),c=t(21270),_=t(85893),d=function(e){var r=e.items,t=void 0===r?$.M1:r,l=e.className,d=(0,a.zY)().isSmallDevice,u=(0,o.useRouter)().pathname,h=(0,s.RD)().profile;return(0,_.jsx)("div",{className:void 0===l?"hidden md:flex items-center space-x-8":l,children:t.map(function(e,r){var t="/login"===e.path;return null!=h&&h.user&&t&&!d?(0,_.jsx)(c.Z,{}):(0,_.jsx)(i(),{href:null!=h&&h.user&&t?"/logout":e.path,children:(0,_.jsxs)("h2",{className:"hover:opacity-75 cursor-pointer ".concat(u===e.path?"border-b-4 border-brand-yellow":"border-none"," ").concat(t?"bg-brand-yellow rounded-full drop-shadow px-12 py-3 font-semibold text-white flex items-center space-x-2":"text-dark-green font-medium py-4"),children:[t?(0,_.jsx)(n.Z,{}):null,(0,_.jsx)("span",{children:null!=h&&h.user&&t?"Logout":e.label})]})},e.label)})})};r.Z=d},21270:function(e,r,t){var n=t(15573),s=t(69661),a=t(16835),l=t(67294),i=t(13540),o=t(11163),$=t(51327),c=t(14653),_=t(85893),d=function(){var e=(0,c.RD)().profile,r=(0,o.useRouter)().push,t=l.useState(!1),d=(0,a.Z)(t,2),u=d[0],h=d[1],x=l.useRef(null),p=l.useRef(null);l.useEffect(function(){var e=function(e){var r=e.target;!u||p.current.contains(r)||x.current.contains(r)||h(!1)};return document.addEventListener("click",e),function(){return document.removeEventListener("click",e)}}),l.useEffect(function(){var e=function(e){var r=e.keyCode;u&&27===r&&h(!1)};return document.addEventListener("keydown",e),function(){return document.removeEventListener("keydown",e)}});var f=function(){r("/logout")};return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)("button",{ref:x,"aria-haspopup":"true",onClick:function(){return h(!u)},"aria-expanded":u,children:(0,_.jsx)(s.Z,{src:"/assets/images/user.png",alt:""})}),(0,_.jsx)($.Z,{className:"origin-top-right z-10 absolute top-full right-0 sm:mr-0 min-w-80 bg-white border border-slate-200 py-1.5 rounded shadow-lg overflow-hidden mt-1",show:u,enter:"transition ease-out duration-200 transform",enterStart:"opacity-0 -translate-y-2",enterEnd:"opacity-100 translate-y-0",leave:"transition ease-out duration-200",leaveStart:"opacity-100",leaveEnd:"opacity-0",children:(0,_.jsxs)("div",{ref:p,onFocus:function(){return h(!0)},onBlur:function(){return h(!1)},className:"px-4 py-2 space-y-1.5 flex flex-col",children:[(0,_.jsx)("p",{children:null==e?void 0:e.user.email}),(0,_.jsxs)("button",{type:"button",onClick:function(){r("/profile")},className:"flex text-sm items-center space-x-3 rounded-lg py-2 px-12 bg-green-400 text-white",children:[(0,_.jsx)(n.Z,{fontSize:"small"}),(0,_.jsx)("span",{children:"Profile"})]}),(0,_.jsxs)("button",{type:"button",onClick:f,className:"flex text-sm items-center space-x-3 rounded-lg py-2 px-12 bg-red-400 text-white",children:[(0,_.jsx)(i.Z,{fontSize:"small"}),(0,_.jsx)("span",{children:"Logout"})]})]})})]})};r.Z=d},51327:function(e,r,t){var n=t(59499),s=t(27812),a=t(4730),l=t(67294),i=t(36398),o=t(85893),$=["show","enter","enterStart","enterEnd","leave","leaveStart","leaveEnd","appear","unmountOnExit","tag","children"],c=["show","appear"];function _(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,n)}return t}function d(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?_(Object(t),!0).forEach(function(r){(0,n.Z)(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):_(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var u=l.createContext({parent:{}});function h(e){var r=e.show,t=e.enter,n=e.enterStart,c=e.enterEnd,_=e.leave,u=e.leaveStart,h=e.leaveEnd,x=e.appear,p=e.unmountOnExit,f=e.tag,m=e.children,v=(0,a.Z)(e,$),g=(void 0===t?"":t).split(" ").filter(function(e){return e.length}),j=(void 0===n?"":n).split(" ").filter(function(e){return e.length}),b=(void 0===c?"":c).split(" ").filter(function(e){return e.length}),w=(void 0===_?"":_).split(" ").filter(function(e){return e.length}),y=(void 0===u?"":u).split(" ").filter(function(e){return e.length}),N=(void 0===h?"":h).split(" ").filter(function(e){return e.length}),Z=p;function C(e,r){var t;r.length&&(t=e.classList).add.apply(t,(0,s.Z)(r))}function S(e,r){var t;r.length&&(t=e.classList).remove.apply(t,(0,s.Z)(r))}var k=l.useRef(null);return(0,o.jsx)(i.Z,{appear:x,nodeRef:k,unmountOnExit:Z,in:r,addEndListener:function(e){k.current.addEventListener("transitionend",e,!1)},onEnter:function(){Z||(k.current.style.display=null),C(k.current,[].concat((0,s.Z)(g),(0,s.Z)(j)))},onEntering:function(){S(k.current,j),C(k.current,b)},onEntered:function(){S(k.current,[].concat((0,s.Z)(b),(0,s.Z)(g)))},onExit:function(){C(k.current,[].concat((0,s.Z)(w),(0,s.Z)(y)))},onExiting:function(){S(k.current,y),C(k.current,N)},onExited:function(){S(k.current,[].concat((0,s.Z)(N),(0,s.Z)(w))),Z||(k.current.style.display="none")},children:(0,o.jsx)(void 0===f?"div":f,d(d({ref:k},v),{},{style:{display:Z?null:"none"},children:m}))})}r.Z=function(e){var r,t=e.show,n=e.appear,s=(0,a.Z)(e,c),i=(0,l.useContext)(u).parent,$=(r=(0,l.useRef)(!0),(0,l.useEffect)(function(){r.current=!1},[]),r.current);return void 0===t?(0,o.jsx)(h,d({appear:i.appear||!i.isInitialRender,show:i.show},s)):(0,o.jsx)(u.Provider,{value:{parent:{show:t,isInitialRender:$,appear:n}},children:(0,o.jsx)(h,d({appear:n,show:t},s))})}},60253:function(e,r,t){t.d(r,{Z:function(){return B}});var n=t(67294),s=t(42761),a=t(16835),l=t(85893),i=function(e){var r=e.className,t=e.children,n=void 0===t?(0,l.jsx)("div",{}):t;return(0,l.jsx)("div",{className:"flex flex-col items-center w-full ".concat(void 0===r?"":r),children:(0,l.jsx)("div",{className:"w-full xl:max-w-screen-2xl flex flex-grow flex-col h-full relative",children:n})})},o=t(56945),$=t(59455),c=t(89391),_=t(45111),d=t(41664),u=t.n(d),h=t(11163),x=t(70192),p=t(14564),f=function(e){var r=e.icon,t=void 0===r?(0,l.jsx)(n.Fragment,{}):r,s=e.active,i=e.label;(0,h.useRouter)().push;var o=n.useState(null),$=(0,a.Z)(o,2),c=$[0],d=$[1],x=function(e){d(e.currentTarget)},f=function(){d(null)},m=Boolean(c);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("button",{"aria-describedby":m?"simple-popover":void 0,type:"button",onClick:x,onMouseEnter:x,className:"whitespace-nowrap border-r border-opacity-06 px-2 md:px-4 flex items-center font-medium space-x-2 py-4 hover:opacity-75 bg-brand-green text-white cursor-pointer ".concat(void 0!==s&&s?"bg-opacity-30":""),children:[t,(0,l.jsx)("span",{children:void 0===i?"What we do?":i}),(0,l.jsx)(_.Z,{})]}),(0,l.jsx)(p.ZP,{anchorOrigin:{vertical:"bottom",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},onClose:f,open:m,anchorEl:c,children:(0,l.jsxs)("div",{onMouseLeave:f,className:"flex flex-col py-4 px-3 text-brand-green bg-green-200 min-w-[150px]",children:[(0,l.jsx)(u(),{href:"/services",children:(0,l.jsx)("p",{className:"cursor-pointer hover:opacity-80 border-b pb-3 border-brand-green",children:"Services"})}),(0,l.jsx)(u(),{href:"/projects",children:(0,l.jsx)("p",{className:"cursor-pointer hover:opacity-80 border-b py-3 border-brand-green",children:"Projects"})}),(0,l.jsx)(u(),{href:"/models",children:(0,l.jsx)("p",{className:"cursor-pointer hover:opacity-80 border-b py-3 border-brand-green",children:"Models"})}),(0,l.jsx)(u(),{href:"/models?q=impact",children:(0,l.jsx)("p",{className:"cursor-pointer hover:opacity-80 border-b pt-3",children:"Impacts"})})]})})]})},m=function(e){var r=e.className,t=(0,h.useRouter)().pathname;return(0,l.jsx)("div",{className:void 0===r?"flex items-center":r,children:x.QC.map(function(e,r){return 1===r?(0,l.jsx)(f,{icon:(0,l.jsx)(e.icon,{}),active:t===e.path,label:e.label},e.label):(0,l.jsx)(u(),{href:e.path,className:"group",children:(0,l.jsxs)("h2",{className:"whitespace-nowrap border-r border-opacity-06 px-2 md:px-4 flex items-center font-medium space-x-2 py-4 hover:opacity-75 bg-brand-green text-white cursor-pointer ".concat(t===e.path?"bg-opacity-30":""),children:[(0,l.jsx)(e.icon,{}),(0,l.jsx)("span",{children:e.label}),e.hasSub?(0,l.jsx)(_.Z,{}):null]})},e.label)})})},v=t(14653);function g(e){var r=e.onClickPage,t=(0,h.useRouter)().push,n=(0,v.RD)().recentPages;return n.length<=1?null:(0,l.jsxs)("div",{className:"mb-3 last:mb-0",children:[(0,l.jsx)("div",{className:"text-xs font-semibold text-slate-400 uppercase px-2 mb-2",children:"Recent pages"}),(0,l.jsx)("ul",{className:"text-sm",children:n.map(function(e){var n=e.split("/"),s=n.length-1;return e.startsWith("/searches")?null:(0,l.jsx)("li",{children:(0,l.jsxs)("button",{className:"flex items-center p-2 text-slate-800 hover:text-white hover:bg-brand-green rounded group",onClick:function(){t(e),r()},children:[(0,l.jsx)("svg",{className:"w-4 h-4 fill-current text-slate-400 group-hover:text-white group-hover:text-opacity-50 shrink-0 mr-3",viewBox:"0 0 16 16",children:(0,l.jsx)("path",{d:"M14 0H2c-.6 0-1 .4-1 1v14c0 .6.4 1 1 1h8l5-5V1c0-.6-.4-1-1-1zM3 2h10v8H9v4H3V2z"})}),(0,l.jsxs)("span",{children:[(0,l.jsx)("span",{className:"font-medium text-slate-800 group-hover:text-white capitalize",children:n[1]||"Home"})," ","- Page"," ",s>2?"/ … / ".concat(n[s].replace(/-/g," ")):n[s].replace(/-/g," ")]})]})},e)})})]})}var j=t(8805);function b(e){var r=e.onClickSearch,t=(0,j.K1)().recentSearches,n=(0,h.useRouter)().push;return t.length?(0,l.jsxs)("div",{className:"mb-3 last:mb-0",children:[(0,l.jsx)("div",{className:"text-xs font-semibold text-slate-400 uppercase px-2 mb-2",children:"Recent searches"}),(0,l.jsx)("ul",{className:"text-sm",children:t.map(function(e){return(0,l.jsx)("li",{children:(0,l.jsxs)("button",{className:"flex items-center p-2 text-slate-800 hover:text-white hover:bg-brand-green rounded group",onClick:function(){n("/searches?q=".concat(e)),r()},children:[(0,l.jsx)("svg",{className:"w-4 h-4 fill-current text-slate-400 group-hover:text-white group-hover:text-opacity-50 shrink-0 mr-3",viewBox:"0 0 16 16",children:(0,l.jsx)("path",{d:"M15.707 14.293v.001a1 1 0 01-1.414 1.414L11.185 12.6A6.935 6.935 0 017 14a7.016 7.016 0 01-5.173-2.308l-1.537 1.3L0 8l4.873 1.12-1.521 1.285a4.971 4.971 0 008.59-2.835l1.979.454a6.971 6.971 0 01-1.321 3.157l3.107 3.112zM14 6L9.127 4.88l1.521-1.28a4.971 4.971 0 00-8.59 2.83L.084 5.976a6.977 6.977 0 0112.089-3.668l1.537-1.3L14 6z"})}),(0,l.jsx)("span",{children:e})]})},e)})})]}):null}var w=t(51327),y=function(e){var r=e.id,t=e.searchId,s=e.modalOpen,a=e.setModalOpen,i=(0,h.useRouter)().push,o=(0,n.useRef)(null),$=(0,n.useRef)(null),c=function(e){e.preventDefault();var r=$.current.value;r.trim()&&(i("/searches?q=".concat(r.trim())),a(!s))};return(0,n.useEffect)(function(){var e=function(e){var r=e.target;!s||o.current.contains(r)||a(!1)};return document.addEventListener("click",e),function(){return document.removeEventListener("click",e)}}),(0,n.useEffect)(function(){var e=function(e){var r=e.keyCode;s&&27===r&&a(!1)};return document.addEventListener("keydown",e),function(){return document.removeEventListener("keydown",e)}}),(0,n.useEffect)(function(){s&&$.current.focus()},[s]),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(w.Z,{className:"fixed inset-0 bg-slate-900 bg-opacity-30 z-50 transition-opacity",show:s,enter:"transition ease-out duration-200",enterStart:"opacity-0",enterEnd:"opacity-100",leave:"transition ease-out duration-100",leaveStart:"opacity-100",leaveEnd:"opacity-0","aria-hidden":"true"}),(0,l.jsx)(w.Z,{id:r,className:"fixed inset-0 z-50 overflow-hidden flex items-start top-4 mb-4 justify-center transform px-4 sm:px-6",role:"dialog","aria-modal":"true",show:s,enter:"transition ease-in-out duration-200",enterStart:"opacity-0 translate-y-4",enterEnd:"opacity-100 translate-y-0",leave:"transition ease-in-out duration-200",leaveStart:"opacity-100 translate-y-0",leaveEnd:"opacity-0 translate-y-4",children:(0,l.jsxs)("div",{ref:o,className:"bg-white overflow-auto max-w-2xl w-full max-h-full rounded shadow-lg",children:[(0,l.jsx)("form",{onSubmit:c,className:"border-b border-slate-200",children:(0,l.jsxs)("div",{className:"relative",children:[(0,l.jsx)("label",{htmlFor:t,className:"sr-only",children:"Search"}),(0,l.jsx)("input",{id:t,className:"w-full border-0 focus:ring-transparent placeholder-slate-400 appearance-none py-3 pl-10 pr-4",type:"search",placeholder:"Search Anything…",ref:$}),(0,l.jsx)("button",{className:"absolute inset-0 right-auto group",type:"submit","aria-label":"Search",children:(0,l.jsxs)("svg",{className:"w-4 h-4 shrink-0 fill-current text-slate-400 group-hover:text-slate-500 ml-4 mr-2",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg",children:[(0,l.jsx)("path",{d:"M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zM7 2C4.243 2 2 4.243 2 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z"}),(0,l.jsx)("path",{d:"M15.707 14.293L13.314 11.9a8.019 8.019 0 01-1.414 1.414l2.393 2.393a.997.997 0 001.414 0 .999.999 0 000-1.414z"})]})})]})}),(0,l.jsxs)("div",{className:"py-4 px-2",children:[(0,l.jsx)(b,{onClickSearch:function(){return a(!s)}}),(0,l.jsx)(g,{onClickPage:function(){return a(!s)}})]})]})})]})},N=function(){var e=n.useState(!1),r=(0,a.Z)(e,2),t=r[0],_=r[1],d=function(e){e.stopPropagation(),_(!0)};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i,{className:"bg-white px-4 md:px-8",children:(0,l.jsxs)("nav",{className:"w-full flex items-center justify-between space-x-12",children:[(0,l.jsx)(o.Z,{}),(0,l.jsx)(c.Z,{onSearch:d}),(0,l.jsx)($.Z,{})]})}),(0,l.jsxs)(i,{className:"overflow-x-auto bg-brand-green px-4 md:px-8 border-b border-opacity-06",children:[(0,l.jsxs)("div",{className:"flex items-center md:space-x-6 justify-between",children:[(0,l.jsx)(m,{}),(0,l.jsxs)("label",{htmlFor:"search",className:"hidden z-20 md:flex text-white items-center relative",children:[(0,l.jsx)(s.Z,{className:"left-3 absolute"}),(0,l.jsx)("input",{type:"search",name:"",id:"search",onClick:d,readOnly:!0,placeholder:"Search",className:"placeholder:text-center rounded-full px-12 placeholder:font-bold placeholder:text-white outline-none bg-white bg-opacity-20 py-2"})]})]}),(0,l.jsx)(y,{id:"search-modal",searchId:"search",modalOpen:t,setModalOpen:_})]})]})},Z=t(76798),C=t(21737),S=t(59499),k=t(50029),E=t(87794),P=t.n(E),L=t(9669),O=t.n(L),F=function(){return(0,l.jsxs)("svg",{width:"35",height:"31",viewBox:"0 0 35 31",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,l.jsx)("g",{filter:"url(#filter0_d_3_410)",children:(0,l.jsx)("ellipse",{cx:"17.9213",cy:"14.0282",rx:"15.9603",ry:"14.0282",fill:"#1B7BFD"})}),(0,l.jsx)("g",{clipPath:"url(#clip0_3_410)",children:(0,l.jsx)("path",{d:"M19.5178 15.0804H21.5128L22.3108 12.2747H19.5178V10.8719C19.5178 10.1495 19.5178 9.46909 21.1138 9.46909H22.3108V7.11236C22.0507 7.0822 21.0683 7.01416 20.0309 7.01416C17.8643 7.01416 16.3257 8.1764 16.3257 10.3108V12.2747H13.9316V15.0804H16.3257V21.0424H19.5178V15.0804Z",fill:"white"})}),(0,l.jsxs)("defs",{children:[(0,l.jsxs)("filter",{id:"filter0_d_3_410",x:"0.960938",y:"0",width:"33.9199",height:"30.0564",filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB",children:[(0,l.jsx)("feFlood",{floodOpacity:"0",result:"BackgroundImageFix"}),(0,l.jsx)("feColorMatrix",{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}),(0,l.jsx)("feOffset",{dy:"1"}),(0,l.jsx)("feGaussianBlur",{stdDeviation:"0.5"}),(0,l.jsx)("feColorMatrix",{type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"}),(0,l.jsx)("feBlend",{mode:"normal",in2:"BackgroundImageFix",result:"effect1_dropShadow_3_410"}),(0,l.jsx)("feBlend",{mode:"normal",in:"SourceGraphic",in2:"effect1_dropShadow_3_410",result:"shape"})]}),(0,l.jsx)("clipPath",{id:"clip0_3_410",children:(0,l.jsx)("rect",{width:"19.1524",height:"16.8338",fill:"white",transform:"translate(8.3457 5.61133)"})})]})]})},R=function(){return(0,l.jsxs)("svg",{width:"34",height:"32",viewBox:"0 0 34 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,l.jsx)("g",{filter:"url(#filter0_d_3_415)",children:(0,l.jsx)("ellipse",{cx:"17.4675",cy:"15.4718",rx:"15.532",ry:"14.5282",fill:"#42C0F5"})}),(0,l.jsx)("path",{d:"M26.1361 11.4082C25.5432 11.6535 24.9144 11.8146 24.2707 11.8862C24.9492 11.5066 25.4571 10.9091 25.6996 10.2052C25.0628 10.5597 24.3646 10.8082 23.637 10.9426C23.1482 10.4534 22.5003 10.1289 21.7941 10.0197C21.0878 9.91047 20.3628 10.0225 19.7317 10.3385C19.1005 10.6545 18.5987 11.1566 18.3041 11.7669C18.0096 12.3771 17.9389 13.0613 18.1029 13.7131C16.8115 13.6525 15.5482 13.3386 14.3949 12.7917C13.2416 12.2449 12.2242 11.4772 11.4086 10.5387C11.12 11.0024 10.9683 11.5297 10.9691 12.0663C10.9691 13.1196 11.5422 14.0501 12.4136 14.5949C11.8979 14.5798 11.3936 14.4495 10.9427 14.215V14.2528C10.9428 14.9543 11.2023 15.6342 11.6772 16.1771C12.1521 16.7201 12.8131 17.0927 13.5482 17.2318C13.0695 17.3531 12.5676 17.371 12.0804 17.2841C12.2876 17.8879 12.6916 18.416 13.2357 18.7944C13.7797 19.1728 14.4367 19.3826 15.1146 19.3943C14.4409 19.8893 13.6695 20.2551 12.8445 20.471C12.0195 20.6869 11.1571 20.7485 10.3066 20.6525C11.7913 21.5455 13.5195 22.0197 15.2846 22.0181C21.259 22.0181 24.5262 17.3887 24.5262 13.3738C24.5262 13.2431 24.5223 13.1109 24.5161 12.9816C25.152 12.5517 25.7009 12.0191 26.1368 11.4089L26.1361 11.4082Z",fill:"white"}),(0,l.jsx)("defs",{children:(0,l.jsxs)("filter",{id:"filter0_d_3_415",x:"0.935547",y:"0.943604",width:"33.0645",height:"31.0564",filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB",children:[(0,l.jsx)("feFlood",{floodOpacity:"0",result:"BackgroundImageFix"}),(0,l.jsx)("feColorMatrix",{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}),(0,l.jsx)("feOffset",{dy:"1"}),(0,l.jsx)("feGaussianBlur",{stdDeviation:"0.5"}),(0,l.jsx)("feColorMatrix",{type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"}),(0,l.jsx)("feBlend",{mode:"normal",in2:"BackgroundImageFix",result:"effect1_dropShadow_3_415"}),(0,l.jsx)("feBlend",{mode:"normal",in:"SourceGraphic",in2:"effect1_dropShadow_3_415",result:"shape"})]})})]})};function M(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,n)}return t}function D(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?M(Object(t),!0).forEach(function(r){(0,S.Z)(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):M(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var z=function(){var e,r=n.useState({open:!1,type:"error",message:""}),t=(0,a.Z)(r,2),s=t[0],$=t[1],c=n.useState({email:""}),_=(0,a.Z)(c,2),d=_[0],h=_[1],x=n.useState(""),p=(0,a.Z)(x,2),f=p[0],m=p[1],v=(e=(0,k.Z)(P().mark(function e(r){return P().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(r.preventDefault(),f.trim()){e.next=6;break}return h(function(e){return D(D({},e),{},{email:"Email is required"})}),e.abrupt("return");case 6:return e.next=8,O().post("/api/subscribers",{email:f}).then(function(e){e.data&&(m(""),$({open:!0,type:"success",message:"You are subscribed now."}))}).catch(function(e){$({open:!0,type:"error",message:"Something went wrong, try again"})});case 8:case"end":return e.stop()}},e)})),function(r){return e.apply(this,arguments)});return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(Z.Z,{open:s.open,anchorOrigin:{vertical:"bottom",horizontal:"right"},autoHideDuration:5e3,onClose:function(){return $(function(e){return D(D({},e),{},{open:!1})})},children:(0,l.jsx)(C.Z,{variant:"filled",severity:s.type,children:s.message})}),(0,l.jsx)("div",{className:"w-full bg-center bg-cover bg-no-repeat min-h-[34px] bg-[url(/assets/images/bottom-pattern.png)]"}),(0,l.jsxs)(i,{className:"bg-dark-green px-4 md:px-8 text-white py-3 bg-no-repeat bg-center bg-cover bg-[url(/assets/images/bg-footer.svg)]",children:[(0,l.jsxs)("div",{className:"flex flex-wrap md:flex-nowrap gap-x-10 gap-y-3",children:[(0,l.jsxs)("div",{className:"flex flex-col space-y-3",children:[(0,l.jsx)(o.Z,{logo:"/assets/images/white_logo.png"}),(0,l.jsx)("p",{className:"text-xs",children:"Youth Engagement in Agriculture Network (YEAN ) is a Youth Led Private Agriculture Extension Social enterprise created in 2014. We serve farmers, farmers organizations and Development Organizations for better livelihoods, job and wealth creation."})]}),(0,l.jsxs)("div",{className:"flex flex-col",children:[(0,l.jsxs)("div",{className:"flex space-y-2 flex-col",children:[(0,l.jsx)("h3",{className:"text-xl font-bold",children:"What we Do"}),(0,l.jsxs)("div",{className:"flex items-center",children:[(0,l.jsx)("div",{className:"w-12 h-[1px] bg-brand-violet"}),(0,l.jsx)("div",{className:"w-32 h-[1px] bg-white"})]})]}),(0,l.jsxs)("div",{className:"mt-3 flex flex-col space-y-2",children:[(0,l.jsx)(u(),{href:"/services",children:"Services"}),(0,l.jsx)(u(),{href:"/models",children:"Models"}),(0,l.jsx)(u(),{href:"/projects",children:"Projects"}),(0,l.jsx)(u(),{href:"/models?q=impact",children:"Impacts"})]})]}),(0,l.jsxs)("div",{className:"flex flex-col",children:[(0,l.jsxs)("div",{className:"flex space-y-2 flex-col",children:[(0,l.jsx)("h3",{className:"text-xl font-bold",children:"Careers"}),(0,l.jsxs)("div",{className:"flex items-center",children:[(0,l.jsx)("div",{className:"w-12 h-[1px] bg-brand-violet"}),(0,l.jsx)("div",{className:"w-32 h-[1px] bg-white"})]})]}),(0,l.jsxs)("div",{className:"mt-3 flex flex-col space-y-2",children:[(0,l.jsx)(u(),{href:"/farmer-platform",children:"Farmer Platform"}),(0,l.jsx)(u(),{href:"/carrers",children:"Job Openings"})]})]}),(0,l.jsxs)("div",{className:"flex flex-col",children:[(0,l.jsxs)("div",{className:"flex space-y-2 flex-col",children:[(0,l.jsx)("h3",{className:"text-xl font-bold",children:"Stay In"}),(0,l.jsxs)("div",{className:"flex items-center",children:[(0,l.jsx)("div",{className:"w-12 h-[1px] bg-brand-violet"}),(0,l.jsx)("div",{className:"w-32 h-[1px] bg-white"})]})]}),(0,l.jsxs)("div",{className:"mt-3 flex flex-col space-y-2",children:[(0,l.jsx)("p",{className:"text-xs",children:"To be updated with all the latest news, offers and special annoucements."}),(0,l.jsxs)("form",{onSubmit:v,className:"flex flex-col space-y-3",children:[(0,l.jsx)("input",{type:"email",value:f,onChange:function(e){m(e.target.value),h(function(e){return D(D({},e),{},{email:""})})},placeholder:"Your email address",className:"px-4 py-3 text-center text-gray-800 outline-none rounded-full bg-white placeholder:text-center placeholder:text-gray-400"}),d.email&&(0,l.jsx)("p",{className:"text-xs text-red-500 mt-0.5",children:d.email}),(0,l.jsx)("button",{type:"submit",onClick:v,className:"bg-brand-violet text-white font-semibold rounded-full py-3 px-4",children:"Subscribe"})]})]})]})]}),(0,l.jsxs)("div",{className:"flex items-center space-x-3 mt-6",children:[(0,l.jsx)("a",{href:"https://web.facebook.com/YEANAGRO",target:"_blank",rel:"noopener noreferrer",children:(0,l.jsx)(F,{})}),(0,l.jsx)("a",{href:"https://twitter.com/YEAN_Agro",target:"_blank",rel:"noopener noreferrer",children:(0,l.jsx)(R,{})}),(0,l.jsx)("a",{href:"https://www.instagram.com/yean_agro/",target:"_blank",rel:"noopener noreferrer",children:(0,l.jsx)("img",{src:"/assets/icons/ig.png",className:"w-8 h-8 rounded-full",alt:""})}),(0,l.jsx)("a",{href:"https://www.flickr.com/photos/142605897@N06/",target:"_blank",rel:"noopener noreferrer",children:(0,l.jsx)("img",{src:"/assets/icons/flickr.png",className:"w-8 h-8 rounded-full",alt:""})})]})]}),(0,l.jsx)(i,{className:"bg-brand-violet px-4 md:px-8 py-3",children:(0,l.jsxs)("p",{className:"text-center font-black text-white text-base",children:["YEAN \xa9 ",new Date().getFullYear()," - All rights Reserved"]})}),(0,l.jsx)("a",{href:"javascript:void(0)",className:"hidden items-center p-3 bg-gray-200/70 rounded-full flex-col justify-center bg-primary text-white w-10 h-10 fixed bottom-8 right-8 left-auto z-[999] hover:bg-dark back-to-top shadow-md transition duration-300 ease-in-out",children:(0,l.jsx)("svg",{width:"23",height:"23",viewBox:"0 0 23 23",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,l.jsx)("path",{d:"M12.838 0.439341C12.2522 -0.146446 11.3025 -0.146446 10.7167 0.439341L1.17074 9.98528C0.584955 10.5711 0.584955 11.5208 1.17074 12.1066C1.75653 12.6924 2.70628 12.6924 3.29206 12.1066L11.7773 3.62132L20.2626 12.1066C20.8484 12.6924 21.7982 12.6924 22.3839 12.1066C22.9697 11.5208 22.9697 10.5711 22.3839 9.98528L12.838 0.439341ZM13.2773 23L13.2773 1.5H10.2773L10.2773 23H13.2773Z",fill:"#7C063F"})})})]})},B=function(e){var r=e.className,t=e.children,n=void 0===t?(0,l.jsx)("div",{}):t;return(0,l.jsxs)("div",{className:"relative min-h-screen flex flex-col w-full overflow-y-auto overflow-x-hidden ".concat(void 0===r?"":r),children:[(0,l.jsx)(N,{}),(0,l.jsx)(i,{className:"flex-grow",children:n}),(0,l.jsx)(z,{})]})}},70192:function(e,r,t){t.d(r,{EW:function(){return f},M1:function(){return x},QC:function(){return p}});var n=t(2684),s=t(28333),a=t(72781),l=t(58508),i=t(74913),o=t(30603),$=t(25709),c=t(63024),_=t(33468),d=t(14510),u=t(76750),h=t(76638),x=[{path:"/about",label:"About us"},{path:"/blog",label:"Blog"},{path:"/contact",label:"Contact us"},{path:"/login",label:"Login"}],p=[{icon:h.Z,path:"/",label:"Home",hasSub:!1},{icon:u.Z,path:"/doings",label:"What we do?",hasSub:!0},{icon:d.Z,path:"/farmer-platform",label:"Farmer Platform",hasSub:!1},{icon:_.Z,path:"/library",label:"Library",hasSub:!1},{icon:c.Z,path:"/partner",label:"Partner with Us",hasSub:!1}],f=[{icon:$.Z,label:"Dashboard",path:"/admin"},{icon:o.Z,label:"Categories",path:"/admin/categories"},{icon:i.Z,label:"Articles",path:"/admin/articles"},{icon:_.Z,label:"Library",path:"/admin/libraries"},{icon:l.Z,label:"Services",path:"/admin/services"},{icon:c.Z,label:"Partners",path:"/admin/partners"},{icon:a.Z,label:"Home Page",path:"/admin/home"},{icon:s.Z,label:"Jobs",path:"/admin/job"},{icon:s.Z,label:"Projects",path:"/admin/projects"},{icon:n.Z,label:"Users",path:"/admin/users",onlyAdmin:!0}]}}]);