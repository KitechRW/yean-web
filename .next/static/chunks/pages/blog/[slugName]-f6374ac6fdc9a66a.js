(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2673],{19663:function(e,t,r){"use strict";var a=r(59499),n=r(16835),l=r(25675),i=r.n(l),o=r(67294),s=r(85893);function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){(0,a.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.Z=function(e){var t=e.alt,r="/assets/images/placeholder.png",a=o.useState(e.src),l=(0,n.Z)(a,2),c=l[0],u=l[1];if(o.useEffect((function(){u(e.src)}),[e.src]),!c)return null;var x=c||"",m=x=x.startsWith("/uploads")?x:"/uploads/".concat(x);return"/"!==m.slice(0,1)&&"http"!==m.slice(0,3)&&(m="/".concat(c)),(0,s.jsx)(i(),d(d({},e),{},{alt:t,src:m,onError:function(){u(r)},onLoadingComplete:function(e){0===e.naturalWidth&&u(r)}}))}},33405:function(e,t,r){"use strict";r(67294);var a=r(85893);t.Z=function(){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("meta",{charSet:"UTF-8"}),(0,a.jsx)("meta",{name:"description",content:"ubuhinzi mu rwanda"}),(0,a.jsx)("meta",{name:"keywords",content:"youth, agribusiness, ubuhinzi, urubyiruko, amakuru, isoko, ihuriro, farmers, platform, Rwanda, farming"}),(0,a.jsx)("meta",{name:"author",content:"Fridolin niyonsaba"}),(0,a.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),(0,a.jsx)("meta",{property:"fb:app_id",content:"2004258806506916"}),(0,a.jsx)("meta",{property:"og:url",content:"https://yeanrwanda.org/"}),(0,a.jsx)("meta",{property:"og:type",content:""}),(0,a.jsx)("meta",{property:"og:description",content:""}),(0,a.jsx)("meta",{property:"og:title",content:"YEAN - My farming story"}),(0,a.jsx)("meta",{property:"og:image",content:"",itemProp:"image"}),(0,a.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,a.jsx)("meta",{name:"twitter:site",content:"@YEAN_Rwanda"}),(0,a.jsx)("meta",{name:"twitter:creator",content:"@fridolin_r"}),(0,a.jsx)("meta",{property:"twitter:title",content:"YEAN - My farming story"}),(0,a.jsx)("meta",{name:"twitter:description",content:""}),(0,a.jsx)("meta",{name:"twitter:image",content:""})]})}},24108:function(e,t,r){"use strict";var a=r(61659),n=r(37958),l=r(85893);t.Z=function(e){var t=e.currentPage,r=void 0===t?1:t,i=e.pageCount,o=void 0===i?1:i,s=e.setPageNumber,c=e.showNumbers,d=void 0===c||c;return o<=1?null:(0,l.jsxs)("div",{className:"cursor-pointer flex",children:[(0,l.jsxs)("button",{disabled:r<=1,onClick:function(){s(r-1)},className:"disabled:cursor-not-allowed disabled:opacity-50 flex items-center space-x-1 py-2 px-3 text-gray-500 bg-white rounded-l border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white",children:[(0,l.jsx)(a.Z,{}),(0,l.jsx)("span",{children:"Previous"})]}),d&&new Array(o||1).fill(0).map((function(e,t){return(0,l.jsx)("button",{onClick:function(){s(t+1)},className:"flex flex-col justify-center items-center ".concat(t+1===r?"py-2 px-3 text-blue-600 bg-blue-50 border border-gray-300 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white":"py-2 px-3 text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"),children:(0,l.jsx)("span",{children:t+1})},t+"paginationKey")})),(0,l.jsxs)("button",{disabled:r>=o,onClick:function(){s(r+1)},className:"disabled:cursor-not-allowed disabled:opacity-50 flex items-center py-2 px-3 text-gray-500 bg-white rounded-r border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white",children:[(0,l.jsx)("span",{children:"Next"})," ",(0,l.jsx)(n.Z,{})]})]})}},50277:function(e,t,r){"use strict";var a=r(69661),n=r(19663),l=(r(67294),r(11163)),i=r(24108),o=r(85893);t.Z=function(e){var t,r,s,c=e.onClick,d=void 0===c?function(e){}:c,u=e.data,x=void 0===u?{}:u,m=e.extension,p=void 0===m?{}:m,f=(0,l.useRouter)();return(0,o.jsxs)("div",{className:"flex flex-col items-center space-y-6",children:[(0,o.jsx)("div",{className:"w-full justify-center max-w-6xl mx-auto flex flex-wrap gap-4",children:null===x||void 0===x||null===(t=x.data)||void 0===t?void 0:t.map((function(e,t){var r,l,i;return(0,o.jsxs)("div",{role:"button",tabIndex:t,onClick:function(){d(null===e||void 0===e?void 0:e.id)},className:"flex flex-col w-full max-w-[298px] border border-[#E6E6E6] rounded-sm",children:[(0,o.jsxs)("div",{className:"group-hover:opacity-80 flex flex-col relative min-w-[298px] min-h-[153px]",children:[(0,o.jsx)(n.Z,{src:e.image,alt:"",layout:"fill",loading:"lazy"}),(0,o.jsxs)("div",{className:"bottom-0 left-0 right-0 absolute flex flex-col items-start w-ful",children:[(0,o.jsx)("p",{className:"text-dark-green bg-[#FCB316] px-4 py-3",children:(null===p||void 0===p?void 0:p.sub)||"Blog"}),(0,o.jsx)("p",{className:"w-full bg-[#FCB316] h-1"})]})]}),(0,o.jsx)("p",{className:"px-3 py-4 text-[#6F7D1D] w-full line-clamp-1",children:null===e||void 0===e?void 0:e.title}),(0,o.jsxs)("div",{className:"px-3 pb-3 space-x-2 flex items-center mt-auto pt-3",children:[(0,o.jsx)(a.Z,{src:"/assets/images/avatar.png",sx:{width:"24px",height:"24px"},alt:null===e||void 0===e||null===(r=e.author)||void 0===r?void 0:r.firstname}),(0,o.jsx)("div",{className:"flex flex-col text-[#767676]",children:(0,o.jsxs)("h1",{className:"text-xs",children:[null===e||void 0===e||null===(l=e.author)||void 0===l?void 0:l.firstname," ",null===e||void 0===e||null===(i=e.author)||void 0===i?void 0:i.lastname]})})]})]},JSON.stringify(e))}))}),(0,o.jsx)(i.Z,{pageCount:null===x||void 0===x||null===(r=x.pagination)||void 0===r?void 0:r.pageCount,currentPage:null===x||void 0===x||null===(s=x.pagination)||void 0===s?void 0:s.currentPage,setPageNumber:function(e){f.query.pageNumber=String(e),f.push(f)}})]})}},99599:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSP:function(){return v},default:function(){return h}});var a=r(67294),n=r(9008),l=r.n(n),i=r(69661),o=r(72167),s=r(43781),c=r(19663),d=r(41664),u=r.n(d),x=r(11163),m=r(50277),p=r(85893),f=function(e){var t,r,n,l,d,f,g,v,h=e.data,b=a.useRef(null),y=(0,x.useRouter)().push;return a.useEffect((function(){var e;null!==h&&void 0!==h&&null!==(e=h.article)&&void 0!==e&&e.text&&b.current&&(b.current.innerHTML=h.article.text)}),[h]),(0,p.jsxs)(s.Z,{children:[(0,p.jsx)("div",{className:"w-full px-4 bg-white md:px-8 pt-12 border-b border-[#E6E6E6]",children:(0,p.jsxs)("div",{className:"px-4 md:px-8 w-full max-w-6xl mx-auto flex items-center space-x-4",children:[(0,p.jsx)(u(),{href:"/blog",children:(0,p.jsx)("span",{className:"cursor-pointer text-sm font-medium pb-3",children:"All"})}),(0,p.jsx)("span",{className:"cursor-pointer text-sm font-medium pb-3 border-b-2 border-b-[#FCB316]",children:"Blogs"})]})}),(0,p.jsxs)("div",{className:"w-full px-4 bg-white md:px-8 py-6 max-w-6xl mx-auto flex flex-col",children:[(0,p.jsxs)("div",{className:"group-hover:opacity-80 flex flex-col relative w-full max-w-[912px] min-h-[490px]",children:[(0,p.jsx)(c.Z,{src:null===h||void 0===h||null===(t=h.article)||void 0===t?void 0:t.image,alt:"",layout:"fill",loading:"lazy"}),(0,p.jsxs)("div",{className:"bottom-0 left-0 right-0 absolute flex flex-col items-start w-ful",children:[(0,p.jsx)("p",{className:"text-dark-green bg-[#FCB316] px-4 py-3",children:"Blog"}),(0,p.jsx)("p",{className:"w-full bg-[#FCB316] h-1"})]})]}),(0,p.jsxs)("div",{className:"px-3 py-3 space-x-3 flex items-center",children:[(0,p.jsx)(i.Z,{src:"/assets/images/avatar.png",alt:(null===h||void 0===h||null===(r=h.article)||void 0===r||null===(n=r.author)||void 0===n?void 0:n.firstname)||""}),(0,p.jsxs)("div",{className:"flex flex-col text-[#767676]",children:[(0,p.jsxs)("h1",{className:"text-sm font-bold",children:[null===h||void 0===h||null===(l=h.author)||void 0===l?void 0:l.firstname," ",null===h||void 0===h||null===(d=h.author)||void 0===d?void 0:d.lastname]}),(null===h||void 0===h||null===(f=h.article)||void 0===f?void 0:f.createdAt)&&(0,p.jsx)("p",{className:"text-xs",children:(0,o.Z)(new Date(null===h||void 0===h||null===(g=h.article)||void 0===g?void 0:g.createdAt),"dd MMMM yyyy")})]})]}),(0,p.jsx)("h1",{className:"mt-6 text-[#6F7D1D] text-lg md:text-xl font-semibold",children:null===h||void 0===h||null===(v=h.article)||void 0===v?void 0:v.title}),(0,p.jsx)("div",{ref:b,className:"mt-4 text-justify leading-relaxed flex flex-col space-y-3 hideContentNotInTagUL"}),(0,p.jsx)("h1",{className:"mt-12 mb-6 text-xl md:text-2xl text-dark-green font-bold bg-brand-green/10 p-2 text-center",children:"View Related Blogs"}),(0,p.jsx)(m.Z,{size:3,onClick:function(){y("/blog/cow-farmers")}})]})]})},g=r(33405),v=!0,h=function(e){var t=e.data;return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)(l(),{children:[(0,p.jsx)("title",{children:"Yean"}),(0,p.jsx)(g.Z,{})]}),(0,p.jsx)(f,{data:t})]})}},50838:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/[slugName]",function(){return r(99599)}])}},function(e){e.O(0,[8247,2530,3946,7237,5739,3781,9774,2888,179],(function(){return t=50838,e(e.s=t);var t}));var t=e.O();_N_E=t}]);