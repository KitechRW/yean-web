(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5175],{61659:function(e,t,r){"use strict";var a=r(95318);t.Z=void 0;var n=a(r(64938)),s=r(85893),i=(0,n.default)((0,s.jsx)("path",{d:"M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z"}),"NavigateBefore");t.Z=i},37958:function(e,t,r){"use strict";var a=r(95318);t.Z=void 0;var n=a(r(64938)),s=r(85893),i=(0,n.default)((0,s.jsx)("path",{d:"M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),"NavigateNext");t.Z=i},62665:function(e,t,r){"use strict";var a=r(95318);t.Z=void 0;var n=a(r(64938)),s=r(85893),i=(0,n.default)((0,s.jsx)("path",{d:"M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8.5 7.5c0 .83-.67 1.5-1.5 1.5H9v2H7.5V7H10c.83 0 1.5.67 1.5 1.5v1zm5 2c0 .83-.67 1.5-1.5 1.5h-2.5V7H15c.83 0 1.5.67 1.5 1.5v3zm4-3H19v1h1.5V11H19v2h-1.5V7h3v1.5zM9 9.5h1v-1H9v1zM4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm10 5.5h1v-3h-1v3z"}),"PictureAsPdf");t.Z=i},83113:function(e,t,r){"use strict";r(67294);var a=r(85893),n=function(){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("meta",{charSet:"UTF-8"}),(0,a.jsx)("meta",{name:"description",content:"ubuhinzi mu rwanda"}),(0,a.jsx)("meta",{name:"keywords",content:"youth, agribusiness, ubuhinzi, urubyiruko, amakuru, isoko, ihuriro, farmers, platform, Rwanda, farming"}),(0,a.jsx)("meta",{name:"author",content:"Fridolin niyonsaba"}),(0,a.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),(0,a.jsx)("meta",{property:"fb:app_id",content:"2004258806506916"}),(0,a.jsx)("meta",{property:"og:url",content:"https://yeanrwanda.org/"}),(0,a.jsx)("meta",{property:"og:type",content:""}),(0,a.jsx)("meta",{property:"og:description",content:""}),(0,a.jsx)("meta",{property:"og:title",content:"YEAN - My farming story"}),(0,a.jsx)("meta",{property:"og:image",content:"",itemProp:"image"}),(0,a.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,a.jsx)("meta",{name:"twitter:site",content:"@YEAN_Rwanda"}),(0,a.jsx)("meta",{name:"twitter:creator",content:"@fridolin_r"}),(0,a.jsx)("meta",{property:"twitter:title",content:"YEAN - My farming story"}),(0,a.jsx)("meta",{name:"twitter:description",content:""}),(0,a.jsx)("meta",{name:"twitter:image",content:""})]})};t.Z=n},22862:function(e,t,r){"use strict";var a=r(61659),n=r(37958),s=r(85893),i=function(e){var t=e.currentPage,r=void 0===t?1:t,i=e.pageCount,o=void 0===i?1:i,c=e.setPageNumber,l=e.showNumbers,d=function(){c(r+1)},$=function(e){c(e)},x=function(){c(r-1)};return o<=1?null:(0,s.jsxs)("div",{className:"cursor-pointer flex",children:[(0,s.jsxs)("button",{disabled:r<=1,onClick:x,className:"disabled:cursor-not-allowed disabled:opacity-50 flex items-center space-x-1 py-2 px-3 text-gray-500 bg-white rounded-l border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white",children:[(0,s.jsx)(a.Z,{}),(0,s.jsx)("span",{children:"Previous"})]}),(void 0===l||l)&&Array(o||1).fill(0).map(function(e,t){return(0,s.jsx)("button",{onClick:function(){$(t+1)},className:"flex flex-col justify-center items-center ".concat(t+1===r?"py-2 px-3 text-blue-600 bg-blue-50 border border-gray-300 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white":"py-2 px-3 text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"),children:(0,s.jsx)("span",{children:t+1})},t+"paginationKey")}),(0,s.jsxs)("button",{disabled:r>=o,onClick:d,className:"disabled:cursor-not-allowed disabled:opacity-50 flex items-center py-2 px-3 text-gray-500 bg-white rounded-r border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white",children:[(0,s.jsx)("span",{children:"Next"})," ",(0,s.jsx)(n.Z,{})]})]})};t.Z=i},22881:function(e,t,r){"use strict";r.d(t,{W:function(){return d}});var a=r(62665),n=r(25675),s=r.n(n);r(67294);var i=r(46737),o=r.n(i),c=r(11163),l=r(85893),d=function(e){var t=e.link;!t||t.startsWith("/uploads/")||t.startsWith("http")||(t="/uploads/".concat(t)),fetch(t).then(function(e){return e.blob()}).then(function(t){var r=window.URL.createObjectURL(t),a=document.createElement("a");a.href=r,a.setAttribute("download",(null==e?void 0:e.name)+".pdf"),document.body.appendChild(a),a.click()}).catch(function(e){o()("sorry","fail to download","error").then(function(e){return console.log("he")})})},$=function(e){var t=e.books;return(0,c.useRouter)(),(0,l.jsx)(l.Fragment,{children:t.map(function(e){return(0,l.jsxs)("div",{className:"flex flex-shrink-0 space-x-2 max-w-[360px]",children:[(0,l.jsx)("div",{className:"flex flex-col",children:(0,l.jsx)(s(),{src:e.cover||"/assets/images/book-cover.png",alt:"",width:"150px",height:"150px",layout:"fixed",loading:"lazy"})}),(0,l.jsxs)("div",{className:"flex flex-col",children:[(0,l.jsx)("h1",{className:"first-letter:uppercase font-semibold text-base line-clamp-6",children:null==e?void 0:e.name}),(0,l.jsx)("p",{className:"text-gray-600 mt-2",children:e.desc}),(0,l.jsxs)("div",{className:"flex items-center space-x-3 mt-3",children:[(0,l.jsx)("a",{className:"bg-dark-green text-white p-2 text-xs",target:"_blank",rel:"noopener noreferrer",href:!e.link||e.link.startsWith("/uploads/")||e.link.startsWith("http")?e.link:"/uploads/".concat(e.link),children:"Read"}),(0,l.jsx)("button",{onClick:function(){d(e)},className:"text-red-500 p-2",children:(0,l.jsx)(a.Z,{})})]})]})]},e.id+"book_id_unic@22")})})};t.Z=$},52369:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSP:function(){return g},default:function(){return f}});var a=r(9008),n=r.n(a),s=r(67294),i=r(27812),o=r(16835),c=r(60253),l=r(25675),d=r.n(l),$=r(11163),x=r(22881),u=[{title:"Reports",count:5,desc:"Published"},{title:"Articles",count:5,desc:"Published"},{title:"Books",count:5,desc:"Published"},{title:"Others",count:5,desc:"Published"}],h=r(22862),m=r(85893),p=function(e){var t,r,a,n=e.data,l=(0,$.useRouter)(),p=s.useState([]),_=(0,o.Z)(p,2),g=_[0],f=_[1],b=s.useState([]),v=(0,o.Z)(b,2),j=(v[0],v[1]);return s.useEffect(function(){var e,t,r;null!=n&&null!==(e=n.data)&&void 0!==e&&e.rows&&(f([]),j([]),null==n||null===(t=n.data)||void 0===t||null===(r=t.rows)||void 0===r||r.forEach(function(e,t){f(function(t){return[].concat((0,i.Z)(t),[e])})}))},[n]),(0,m.jsxs)(c.Z,{children:[(0,m.jsxs)("div",{className:"flex flex-col w-full relative bg-brand-green min-h-[312px]",children:[(0,m.jsx)(d(),{src:"/assets/images/library.png",alt:"",layout:"fill",objectFit:"cover",priority:!0}),(0,m.jsxs)("div",{className:"flex flex-col h-full w-full items-center justify-center p-4 md:p-8 top-0 absolute z-10",children:[(0,m.jsx)("h1",{className:"text-3xl md:text-6xl font-black tracking-wide text-white",children:"Library"}),(0,m.jsxs)("div",{className:"flex space-x-8 mt-3",children:[(0,m.jsx)("div",{className:"w-24 h-0.5 bg-white"}),(0,m.jsx)("div",{className:"w-24 h-0.5 bg-white"})]}),(0,m.jsx)("p",{className:"flex items-center space-x-2 mt-4 text-sm text-white max-w-3xl text-center",children:"Welcome to YEAN E-Libray, We made it easier, You can find here documents, reports, articles, books and other AGRICULTURE related files"})]})]}),(0,m.jsxs)("div",{className:"p-4 md:p-8 justify-center flex gap-3 md:gap-x-10 flex-wrap flex-shrink-0 whitespace-nowrap",children:[u.map(function(e,t){return(0,m.jsxs)("div",{className:"hidden flex-col p-3 px-8 justify-center min-w-[255px] min-h-[145px] drop-shadow rounded-lg ".concat(0===t?"bg-[#216B07]/60":"bg-white"),children:[(0,m.jsx)("h2",{className:"text-base font-semibold ".concat(0===t?"text-white":""),children:"Reports"}),(0,m.jsxs)("div",{className:"flex items-center space-x-2 mt-3",children:[(0,m.jsx)("p",{className:"bg-[#E6F3FF] p-2 px-3 rounded text-dark-green font-bold",children:e.count}),(0,m.jsx)("p",{className:"".concat(0===t?"text-white":"text-[#AAB1B7]"),children:e.desc})]})]},e.title)}),(0,m.jsxs)("div",{className:"flex flex-col p-3 px-8 justify-center min-w-[255px] min-h-[145px] drop-shadow rounded-lg bg-white\n            }",children:[(0,m.jsx)("h2",{className:"text-base font-semibold ",children:"Books"}),(0,m.jsxs)("div",{className:"flex items-center space-x-2 mt-3",children:[(0,m.jsx)("p",{className:"bg-[#E6F3FF] p-2 px-3 rounded text-dark-green font-bold",children:null==n?void 0:null===(t=n.pagination)||void 0===t?void 0:t.count}),(0,m.jsx)("p",{className:"text-[#AAB1B7]",children:"PUblished"})]})]})]}),(0,m.jsxs)("div",{className:"p-4 md:p-8 justify-center gap-6 flex md:gap-x-10 flex-wrap w-full",children:[(0,m.jsx)(x.Z,{books:g}),(0,m.jsxs)("div",{className:"hidden w-full justify-center p-4 md:p-8 gap-3 items-center",children:[(0,m.jsx)(d(),{src:"/assets/images/green-book.png",alt:"",width:"190",height:"322"}),(0,m.jsx)("h1",{className:"text-3xl font-black text-dark-green tracking-wide",children:"FEATURED Things To Know About Green Flat Design"})]})]}),(0,m.jsx)("div",{className:"justify-center flex mt-10",children:(0,m.jsx)(h.Z,{pageCount:null==n?void 0:null===(r=n.pagination)||void 0===r?void 0:r.pageCount,currentPage:null==n?void 0:null===(a=n.pagination)||void 0===a?void 0:a.currentPage,setPageNumber:function(e){l.push("/library?pageNumber="+e)}})})]})},_=r(83113),g=!0,f=function(e){var t=e.data;return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)(n(),{children:[(0,m.jsx)("title",{children:"Library - Yean"}),(0,m.jsx)(_.Z,{})]}),(0,m.jsx)(p,{data:t})]})}},71185:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/library",function(){return r(52369)}])}},function(e){e.O(0,[8247,8795,3946,3756,6737,253,9774,2888,179],function(){return e(e.s=71185)}),_N_E=e.O()}]);