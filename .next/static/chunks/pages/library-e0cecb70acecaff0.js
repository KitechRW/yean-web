(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5175],{50594:function(e,t,n){"use strict";var r=n(95318);t.Z=void 0;var a=r(n(64938)),s=n(85893),i=(0,a.default)((0,s.jsx)("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close");t.Z=i},61659:function(e,t,n){"use strict";var r=n(95318);t.Z=void 0;var a=r(n(64938)),s=n(85893),i=(0,a.default)((0,s.jsx)("path",{d:"M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z"}),"NavigateBefore");t.Z=i},37958:function(e,t,n){"use strict";var r=n(95318);t.Z=void 0;var a=r(n(64938)),s=n(85893),i=(0,a.default)((0,s.jsx)("path",{d:"M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),"NavigateNext");t.Z=i},83113:function(e,t,n){"use strict";n(67294);var r=n(85893),a=function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("meta",{charSet:"UTF-8"}),(0,r.jsx)("meta",{name:"description",content:"ubuhinzi mu rwanda"}),(0,r.jsx)("meta",{name:"keywords",content:"youth, agribusiness, ubuhinzi, urubyiruko, amakuru, isoko, ihuriro, farmers, platform, Rwanda, farming"}),(0,r.jsx)("meta",{name:"author",content:"Fridolin niyonsaba"}),(0,r.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),(0,r.jsx)("meta",{property:"fb:app_id",content:"2004258806506916"}),(0,r.jsx)("meta",{property:"og:url",content:"https://yeanrwanda.org/"}),(0,r.jsx)("meta",{property:"og:type",content:""}),(0,r.jsx)("meta",{property:"og:description",content:""}),(0,r.jsx)("meta",{property:"og:title",content:"YEAN - My farming story"}),(0,r.jsx)("meta",{property:"og:image",content:"",itemProp:"image"}),(0,r.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,r.jsx)("meta",{name:"twitter:site",content:"@YEAN_Rwanda"}),(0,r.jsx)("meta",{name:"twitter:creator",content:"@fridolin_r"}),(0,r.jsx)("meta",{property:"twitter:title",content:"YEAN - My farming story"}),(0,r.jsx)("meta",{name:"twitter:description",content:""}),(0,r.jsx)("meta",{name:"twitter:image",content:""})]})};t.Z=a},99843:function(e,t,n){"use strict";var r=n(16835),a=n(66673),s=n(67294),i=n(91070),o=n(85893);i.v0.GlobalWorkerOptions.workerSrc="//cdnjs.cloudflare.com/ajax/libs/pdf.js/".concat(i.v0.version,"/pdf.worker.js");var l={cMapUrl:"cmaps/",cMapPacked:!0,standardFontDataUrl:"standard_fonts/"},c=function(e){var t=e.children,n=e.src,c=e.title,d=s.useState(!1),$=(0,r.Z)(d,2),x=$[0],u=$[1],h=s.useState(n),m=(0,r.Z)(h,2),f=m[0],p=m[1],g=s.useState(0),b=(0,r.Z)(g,2),_=b[0],j=b[1];return(s.useEffect(function(){!n||n.startsWith("/uploads/")||n.startsWith("http")||p("/uploads/".concat(n))},[n]),f)?(0,o.jsxs)(a.Z,{toggle:x,setToggle:u,title:c,children:[t,(0,o.jsx)("div",{className:"flex flex-col",children:(0,o.jsx)("div",{className:"PDF__container__document",children:(0,o.jsx)(i.BB,{file:f,onLoadSuccess:function(e){j(e.numPages)},options:l,children:Array.from(Array(_),function(e,t){return(0,o.jsx)(i.T3,{pageNumber:t+1},"page_".concat(t+1))})})})})]}):null};t.Z=c},22862:function(e,t,n){"use strict";var r=n(61659),a=n(37958),s=n(85893),i=function(e){var t=e.currentPage,n=void 0===t?1:t,i=e.pageCount,o=void 0===i?1:i,l=e.setPageNumber,c=e.showNumbers,d=function(){l(n+1)},$=function(e){l(e)},x=function(){l(n-1)};return o<=1?null:(0,s.jsxs)("div",{className:"cursor-pointer flex",children:[(0,s.jsxs)("button",{disabled:n<=1,onClick:x,className:"disabled:cursor-not-allowed disabled:opacity-50 flex items-center space-x-1 py-2 px-3 text-gray-500 bg-white rounded-l border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white",children:[(0,s.jsx)(r.Z,{}),(0,s.jsx)("span",{children:"Previous"})]}),(void 0===c||c)&&Array(o||1).fill(0).map(function(e,t){return(0,s.jsx)("button",{onClick:function(){$(t+1)},className:"flex flex-col justify-center items-center ".concat(t+1===n?"py-2 px-3 text-blue-600 bg-blue-50 border border-gray-300 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white":"py-2 px-3 text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"),children:(0,s.jsx)("span",{children:t+1})},t+"paginationKey")}),(0,s.jsxs)("button",{disabled:n>=o,onClick:d,className:"disabled:cursor-not-allowed disabled:opacity-50 flex items-center py-2 px-3 text-gray-500 bg-white rounded-r border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white",children:[(0,s.jsx)("span",{children:"Next"})," ",(0,s.jsx)(a.Z,{})]})]})};t.Z=i},22881:function(e,t,n){"use strict";n.d(t,{W:function(){return d}});var r=n(62665),a=n(25675),s=n.n(a);n(67294);var i=n(46737),o=n.n(i),l=n(99843),c=n(85893),d=function(e){var t=e.link;!t||t.startsWith("/uploads/")||t.startsWith("http")||(t="/uploads/".concat(t)),fetch(t).then(function(e){return e.blob()}).then(function(t){var n=window.URL.createObjectURL(t),r=document.createElement("a");r.href=n,r.setAttribute("download",(null==e?void 0:e.name)+".pdf"),document.body.appendChild(r),r.click()}).catch(function(e){o()("sorry","fail to download","error").then(function(e){return console.log("he")})})},$=function(e){var t=e.books;return(0,c.jsx)(c.Fragment,{children:t.map(function(e){return(0,c.jsxs)("div",{className:"flex flex-shrink-0 space-x-2 max-w-[360px]",children:[(0,c.jsx)("div",{className:"flex flex-col",children:(0,c.jsx)(s(),{src:e.cover||"/assets/images/book-cover.png",alt:"",width:"150px",height:"150px",layout:"fixed",loading:"lazy"})}),(0,c.jsxs)("div",{className:"flex flex-col",children:[(0,c.jsx)("h1",{className:"first-letter:uppercase font-semibold text-base line-clamp-6",children:null==e?void 0:e.name}),(0,c.jsx)("p",{className:"text-gray-600 mt-2",children:e.desc}),(0,c.jsxs)("div",{className:"flex items-center space-x-3 mt-3",children:[(0,c.jsx)(l.Z,{title:null==e?void 0:e.name,src:e.link,children:(0,c.jsx)("span",{className:"bg-dark-green text-white p-2 text-xs",children:"Read"})}),(0,c.jsx)("button",{onClick:function(){d(e)},className:"text-red-500 p-2",children:(0,c.jsx)(r.Z,{})})]})]})]},e.id+"book_id_unic@22")})})};t.Z=$},66673:function(e,t,n){"use strict";var r=n(77533),a=n(50594);n(67294);var s=n(85893),i=function(e){var t=e.children,n=e.toggle,i=void 0!==n&&n,o=e.setToggle,l=e.title,c=function(e){return function(t){("keydown"!==t.type||"Tab"!==t.key&&"Shift"!==t.key)&&o(e)}},d=function(e){"Escape"===e.key&&o(!1)};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{role:"button",onClick:function(){return o(!i)},tabIndex:0,children:t[0]}),(0,s.jsx)(r.ZP,{anchor:"top",open:i,onClose:c(!1),sx:{"& .MuiPaper-elevation":{maxWidth:"100%",minHeight:"100vh",marginX:"auto",padding:"8px",backgroundColor:"transparent",boxShadow:"none",overflowY:"auto",display:"flex",flexDirection:"column",alignItems:"center",height:"fit-content"}},children:(0,s.jsxs)("div",{className:"max-w-4xl pointer-events-auto bg-white flex py-3 px-4 md:p-8 flex-col items-center w-full",children:[(0,s.jsxs)("div",{className:"flex gap-x-2 justify-between w-full",children:[(0,s.jsx)("h1",{className:"font-black text-xl tracking-wide text-brand-green",children:void 0===l?"New item":l}),(0,s.jsxs)("button",{type:"button",onKeyDown:d,onClick:c(!1),className:"text-brand-green flex flex-col items-center ml-auto",children:[(0,s.jsx)(a.Z,{fontSize:"large"}),(0,s.jsx)("span",{className:"text-sm text-brand-green",children:"ESC"})]})]}),(0,s.jsx)("div",{className:"flex flex-col w-full",children:t[1]})]})})]})};t.Z=i},52369:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSP:function(){return g},default:function(){return b}});var r=n(9008),a=n.n(r),s=n(67294),i=n(27812),o=n(16835),l=n(60253),c=n(25675),d=n.n(c),$=n(11163),x=n(22881),u=[{title:"Reports",count:5,desc:"Published"},{title:"Articles",count:5,desc:"Published"},{title:"Books",count:5,desc:"Published"},{title:"Others",count:5,desc:"Published"}],h=n(22862),m=n(85893),f=function(e){var t,n,r,a=e.data,c=(0,$.useRouter)(),f=s.useState([]),p=(0,o.Z)(f,2),g=p[0],b=p[1],_=s.useState([]),j=(0,o.Z)(_,2),v=j[0],y=j[1];return s.useEffect(function(){var e,t,n;null!=a&&null!==(e=a.data)&&void 0!==e&&e.rows&&(b([]),y([]),null==a||null===(t=a.data)||void 0===t||null===(n=t.rows)||void 0===n||n.forEach(function(e,t){t<6?b(function(t){return[].concat((0,i.Z)(t),[e])}):y(function(t){return[].concat((0,i.Z)(t),[e])})}))},[a]),(0,m.jsxs)(l.Z,{children:[(0,m.jsxs)("div",{className:"flex flex-col w-full relative bg-brand-green min-h-[312px]",children:[(0,m.jsx)(d(),{src:"/assets/images/library.png",alt:"",layout:"fill",objectFit:"cover",priority:!0}),(0,m.jsxs)("div",{className:"flex flex-col h-full w-full items-center justify-center p-4 md:p-8 top-0 absolute z-10",children:[(0,m.jsx)("h1",{className:"text-3xl md:text-6xl font-black tracking-wide text-white",children:"Library"}),(0,m.jsxs)("div",{className:"flex space-x-8 mt-3",children:[(0,m.jsx)("div",{className:"w-24 h-0.5 bg-white"}),(0,m.jsx)("div",{className:"w-24 h-0.5 bg-white"})]}),(0,m.jsx)("p",{className:"flex items-center space-x-2 mt-4 text-sm text-white max-w-3xl text-center",children:"Welcome to YEAN E-Libray, We made it easier, You can find here documents, reports, articles, books and other AGRICULTURE related files"})]})]}),(0,m.jsxs)("div",{className:"p-4 md:p-8 justify-center flex gap-3 md:gap-x-10 flex-wrap flex-shrink-0 whitespace-nowrap",children:[u.map(function(e,t){return(0,m.jsxs)("div",{className:"hidden flex-col p-3 px-8 justify-center min-w-[255px] min-h-[145px] drop-shadow rounded-lg ".concat(0===t?"bg-[#216B07]/60":"bg-white"),children:[(0,m.jsx)("h2",{className:"text-base font-semibold ".concat(0===t?"text-white":""),children:"Reports"}),(0,m.jsxs)("div",{className:"flex items-center space-x-2 mt-3",children:[(0,m.jsx)("p",{className:"bg-[#E6F3FF] p-2 px-3 rounded text-dark-green font-bold",children:e.count}),(0,m.jsx)("p",{className:"".concat(0===t?"text-white":"text-[#AAB1B7]"),children:e.desc})]})]},e.title)}),(0,m.jsxs)("div",{className:"flex flex-col p-3 px-8 justify-center min-w-[255px] min-h-[145px] drop-shadow rounded-lg bg-white\n            }",children:[(0,m.jsx)("h2",{className:"text-base font-semibold ",children:"Books"}),(0,m.jsxs)("div",{className:"flex items-center space-x-2 mt-3",children:[(0,m.jsx)("p",{className:"bg-[#E6F3FF] p-2 px-3 rounded text-dark-green font-bold",children:null==a?void 0:null===(t=a.pagination)||void 0===t?void 0:t.count}),(0,m.jsx)("p",{className:"text-[#AAB1B7]",children:"PUblished"})]})]})]}),(0,m.jsxs)("div",{className:"p-4 md:p-8 justify-center gap-6 flex md:gap-x-10 flex-wrap w-full",children:[(0,m.jsx)(x.Z,{books:g}),(0,m.jsxs)("div",{className:"w-full justify-center flex p-4 md:p-8 gap-3 items-center",children:[(0,m.jsx)(d(),{src:"/assets/images/green-book.png",alt:"",width:"190",height:"322"}),(0,m.jsx)("h1",{className:"text-3xl font-black text-dark-green tracking-wide",children:"FEATURED Things To Know About Green Flat Design"})]}),(0,m.jsx)(x.Z,{books:v})]}),(0,m.jsx)("div",{className:"justify-center flex mt-10",children:(0,m.jsx)(h.Z,{pageCount:null==a?void 0:null===(n=a.pagination)||void 0===n?void 0:n.pageCount,currentPage:null==a?void 0:null===(r=a.pagination)||void 0===r?void 0:r.currentPage,setPageNumber:function(e){c.push("/library?pageNumber="+e)}})})]})},p=n(83113),g=!0,b=function(e){var t=e.data;return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)(a(),{children:[(0,m.jsx)("title",{children:"Library - Yean"}),(0,m.jsx)(p.Z,{})]}),(0,m.jsx)(f,{data:t})]})}},71185:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/library",function(){return n(52369)}])},11333:function(){},52262:function(){},4727:function(){},75028:function(){},57840:function(){}},function(e){e.O(0,[4895,8247,8795,3946,3756,6737,7262,253,9774,2888,179],function(){return e(e.s=71185)}),_N_E=e.O()}]);