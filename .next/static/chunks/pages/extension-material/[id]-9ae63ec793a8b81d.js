(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8774],{61659:function(e,t,r){"use strict";var n=r(95318);t.Z=void 0;var a=n(r(64938)),i=r(85893),o=(0,a.default)((0,i.jsx)("path",{d:"M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z"}),"NavigateBefore");t.Z=o},37958:function(e,t,r){"use strict";var n=r(95318);t.Z=void 0;var a=n(r(64938)),i=r(85893),o=(0,a.default)((0,i.jsx)("path",{d:"M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),"NavigateNext");t.Z=o},86635:function(e,t,r){"use strict";r.d(t,{Nv:function(){return d},TB:function(){return u}});var n=r(50029),a=r(87794),i=r.n(a),o=r(11179),s=(r(9669),r(8100)),c=function(){var e=(0,n.Z)(i().mark((function e(t){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",o.Z.OpenRoute.getRoute(t));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(i().mark((function e(t){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",o.Z.GetRoute.getRoute(t));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),u=function(e){var t=(0,s.ZP)(e,c),r=t.data,n=t.error;return{data:(null===r||void 0===r?void 0:r.data)||{},isLoading:!n&&!r,isError:n}},d=function(e){var t=(0,s.ZP)(e,l),r=t.data,n=t.error;return{data:(null===r||void 0===r?void 0:r.data)||{},isLoading:!n&&!r,isError:n}}},19663:function(e,t,r){"use strict";var n=r(59499),a=r(16835),i=r(25675),o=r.n(i),s=r(67294),c=r(85893);function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.Z=function(e){var t=e.alt,r="/assets/images/placeholder.png",n=s.useState(e.src),i=(0,a.Z)(n,2),l=i[0],d=i[1];if(s.useEffect((function(){d(e.src)}),[e.src]),!l)return null;var x=l||"",p=x=x.startsWith("/uploads")?x:"/uploads/".concat(x);return"/"!==p.slice(0,1)&&"http"!==p.slice(0,3)&&(p="/".concat(l)),(0,c.jsx)(o(),u(u({},e),{},{alt:t,src:p,onError:function(){d(r)},onLoadingComplete:function(e){0===e.naturalWidth&&d(r)}}))}},33405:function(e,t,r){"use strict";r(67294);var n=r(85893);t.Z=function(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("meta",{charSet:"UTF-8"}),(0,n.jsx)("meta",{name:"description",content:"ubuhinzi mu rwanda"}),(0,n.jsx)("meta",{name:"keywords",content:"youth, agribusiness, ubuhinzi, urubyiruko, amakuru, isoko, ihuriro, farmers, platform, Rwanda, farming"}),(0,n.jsx)("meta",{name:"author",content:"Fridolin niyonsaba"}),(0,n.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),(0,n.jsx)("meta",{property:"fb:app_id",content:"2004258806506916"}),(0,n.jsx)("meta",{property:"og:url",content:"https://yeanrwanda.org/"}),(0,n.jsx)("meta",{property:"og:type",content:""}),(0,n.jsx)("meta",{property:"og:description",content:""}),(0,n.jsx)("meta",{property:"og:title",content:"YEAN - My farming story"}),(0,n.jsx)("meta",{property:"og:image",content:"",itemProp:"image"}),(0,n.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,n.jsx)("meta",{name:"twitter:site",content:"@YEAN_Rwanda"}),(0,n.jsx)("meta",{name:"twitter:creator",content:"@fridolin_r"}),(0,n.jsx)("meta",{property:"twitter:title",content:"YEAN - My farming story"}),(0,n.jsx)("meta",{name:"twitter:description",content:""}),(0,n.jsx)("meta",{name:"twitter:image",content:""})]})}},24108:function(e,t,r){"use strict";var n=r(61659),a=r(37958),i=r(85893);t.Z=function(e){var t=e.currentPage,r=void 0===t?1:t,o=e.pageCount,s=void 0===o?1:o,c=e.setPageNumber,l=e.showNumbers,u=void 0===l||l;return s<=1?null:(0,i.jsxs)("div",{className:"cursor-pointer flex",children:[(0,i.jsxs)("button",{disabled:r<=1,onClick:function(){c(r-1)},className:"disabled:cursor-not-allowed disabled:opacity-50 flex items-center space-x-1 py-2 px-3 text-gray-500 bg-white rounded-l border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white",children:[(0,i.jsx)(n.Z,{}),(0,i.jsx)("span",{children:"Previous"})]}),u&&new Array(s||1).fill(0).map((function(e,t){return(0,i.jsx)("button",{onClick:function(){c(t+1)},className:"flex flex-col justify-center items-center ".concat(t+1===r?"py-2 px-3 text-blue-600 bg-blue-50 border border-gray-300 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white":"py-2 px-3 text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"),children:(0,i.jsx)("span",{children:t+1})},t+"paginationKey")})),(0,i.jsxs)("button",{disabled:r>=s,onClick:function(){c(r+1)},className:"disabled:cursor-not-allowed disabled:opacity-50 flex items-center py-2 px-3 text-gray-500 bg-white rounded-r border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white",children:[(0,i.jsx)("span",{children:"Next"})," ",(0,i.jsx)(a.Z,{})]})]})}},75834:function(e,t,r){"use strict";var n=r(2655),a=r(41664),i=r.n(a),o=r(11163),s=(r(67294),r(50277)),c=r(85893);t.Z=function(e){var t=e.data,r=e.extension,a=(0,o.useRouter)().push;return(0,c.jsxs)(n.Z,{children:[(0,c.jsx)("div",{className:"w-full px-4 bg-white md:px-8 pt-12 border-b border-[#E6E6E6]",children:(0,c.jsxs)("div",{className:"px-4 md:px-8 w-full max-w-6xl mx-auto flex items-center space-x-4",children:[(0,c.jsx)(i(),{href:r?"/extension-material":"/blog",children:(0,c.jsx)("span",{className:"cursor-pointer text-sm font-medium pb-3 border-b-2 border-b-[#FCB316]",children:(null===r||void 0===r?void 0:r.category_name)||"All"})}),(0,c.jsx)("span",{className:"cursor-pointer text-sm font-medium pb-3",children:(null===r||void 0===r?void 0:r.sub)||"Blogs"})]})}),(0,c.jsx)("div",{className:"w-full px-4 bg-white md:px-8 py-6",children:(0,c.jsx)(s.Z,{data:t,extension:r,onClick:function(e){a("/blog/"+e)}})})]})}},50277:function(e,t,r){"use strict";var n=r(69661),a=r(19663),i=(r(67294),r(11163)),o=r(24108),s=r(85893);t.Z=function(e){var t,r,c,l=e.onClick,u=void 0===l?function(e){}:l,d=e.data,x=void 0===d?{}:d,p=e.extension,m=void 0===p?{}:p,f=(0,i.useRouter)();return(0,s.jsxs)("div",{className:"flex flex-col items-center space-y-6",children:[(0,s.jsx)("div",{className:"w-full justify-center max-w-6xl mx-auto flex flex-wrap gap-4",children:null===x||void 0===x||null===(t=x.data)||void 0===t?void 0:t.map((function(e,t){var r,i,o;return(0,s.jsxs)("div",{role:"button",tabIndex:t,onClick:function(){u(null===e||void 0===e?void 0:e.id)},className:"flex flex-col w-full max-w-[298px] border border-[#E6E6E6] rounded-sm",children:[(0,s.jsxs)("div",{className:"group-hover:opacity-80 flex flex-col relative min-w-[298px] min-h-[153px]",children:[(0,s.jsx)(a.Z,{src:e.image,alt:"",layout:"fill",loading:"lazy"}),(0,s.jsxs)("div",{className:"bottom-0 left-0 right-0 absolute flex flex-col items-start w-ful",children:[(0,s.jsx)("p",{className:"text-dark-green bg-[#FCB316] px-4 py-3",children:(null===m||void 0===m?void 0:m.sub)||"Blog"}),(0,s.jsx)("p",{className:"w-full bg-[#FCB316] h-1"})]})]}),(0,s.jsx)("p",{className:"px-3 py-4 text-[#6F7D1D] w-full line-clamp-1",children:null===e||void 0===e?void 0:e.title}),(0,s.jsxs)("div",{className:"px-3 pb-3 space-x-2 flex items-center mt-auto pt-3",children:[(0,s.jsx)(n.Z,{src:"/assets/images/avatar.png",sx:{width:"24px",height:"24px"},alt:null===e||void 0===e||null===(r=e.author)||void 0===r?void 0:r.firstname}),(0,s.jsx)("div",{className:"flex flex-col text-[#767676]",children:(0,s.jsxs)("h1",{className:"text-xs",children:[null===e||void 0===e||null===(i=e.author)||void 0===i?void 0:i.firstname," ",null===e||void 0===e||null===(o=e.author)||void 0===o?void 0:o.lastname]})})]})]},JSON.stringify(e))}))}),(0,s.jsx)(o.Z,{pageCount:null===x||void 0===x||null===(r=x.pagination)||void 0===r?void 0:r.pageCount,currentPage:null===x||void 0===x||null===(c=x.pagination)||void 0===c?void 0:c.currentPage,setPageNumber:function(e){f.query.pageNumber=String(e),f.push(f)}})]})}},65908:function(e,t,r){"use strict";r.r(t);r(67294);var n=r(9008),a=r.n(n),i=r(75834),o=r(11163),s=r(86635),c=r(33405),l=r(85893);t.default=function(){var e=(0,o.useRouter)().query,t=e.pageNumber,r=e.cat,n=e.id,u=e.category_name,d=e.sub,x=(0,s.TB)("/api/articles?page=".concat(t||1,"&limit=20&cat=").concat(r)).data;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(a(),{children:[(0,l.jsx)("title",{children:"Yean"}),(0,l.jsx)(c.Z,{})]}),(0,l.jsx)(i.Z,{data:x,extension:{id:n,cat:r,category_name:u,sub:d}})]})}},86360:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/extension-material/[id]",function(){return r(65908)}])}},function(e){e.O(0,[8247,8795,3946,3756,8100,2655,9774,2888,179],(function(){return t=86360,e(e.s=t);var t}));var t=e.O();_N_E=t}]);