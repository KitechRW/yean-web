(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8732],{54970:function(e,t,n){"use strict";var r=n(95318);t.Z=void 0;var a=r(n(64938)),l=n(85893),s=(0,a.default)((0,l.jsx)("path",{d:"M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"}),"CloudUpload");t.Z=s},41733:function(e,t,n){"use strict";var r=n(95318);t.Z=void 0;var a=r(n(64938)),l=n(85893),s=(0,a.default)((0,l.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete");t.Z=s},19663:function(e,t,n){"use strict";var r=n(59499),a=n(16835),l=n(25675),s=n.n(l),i=n(67294),o=n(85893);function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.Z=function(e){var t=e.alt,n="/assets/images/placeholder.png",r=i.useState(e.src),l=(0,a.Z)(r,2),c=l[0],d=l[1];if(i.useEffect((function(){d(e.src)}),[e.src]),!c)return null;var f=c||"",x=f=f.startsWith("/uploads")?f:"/uploads/".concat(f);return"/"!==x.slice(0,1)&&"http"!==x.slice(0,3)&&(x="/".concat(c)),(0,o.jsx)(s(),u(u({},e),{},{alt:t,src:x,onError:function(){d(n)},onLoadingComplete:function(e){0===e.naturalWidth&&d(n)}}))}},34427:function(e,t,n){"use strict";n.d(t,{Z:function(){return h}});var r=n(41733),a=n(54970),l=n(59499),s=n(16835),i=n(67294),o=n(73903),c=n(19663),u=n(85893),d=function(e){var t=e.children,n=e.src,r=e.title,a=i.useState(!1),l=(0,s.Z)(a,2),d=l[0],f=l[1];return n?(0,u.jsxs)(o.Z,{toggle:d,setToggle:f,title:r,children:[t,(0,u.jsx)("div",{className:"flex flex-col w-full",children:(0,u.jsx)(c.Z,{src:n,width:"600",height:"500",objectFit:"contain"})})]}):null};function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function x(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){(0,l.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t){var n="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"===typeof e)return p(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return p(e,t)}(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var r=0,a=function(){};return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l,s=!0,i=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return s=e.done,e},e:function(e){i=!0,l=e},f:function(){try{s||null==n.return||n.return()}finally{if(i)throw l}}}}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var h=function(e){var t=e.updateFilesCb,n=e.maxFileSizeInBytes,l=void 0===n?1e6:n,o=e.multiple,c=void 0!==o&&o,f=i.useState(!1),p=(0,s.Z)(f,2),h=p[0],b=p[1],g=i.useState({}),j=(0,s.Z)(g,2),v=j[0],y=j[1],w=i.useRef(null),N=function(e){e.length;var t,n=m(e);try{for(n.s();!(t=n.n()).done;){var r=t.value;r.size<l&&(v[r.name]=r)}}catch(a){n.e(a)}finally{n.f()}return x({},v)},O=function(e){var n,r=(n=e,Object.keys(n).map((function(e){return n[e]})));t(r)},k=function(e){e.preventDefault(),e.stopPropagation(),"dragenter"===e.type||"dragover"===e.type?b(!0):"dragleave"===e.type&&b(!1)};return(0,u.jsxs)("div",{onDragOver:k,onDrop:function(e){e.preventDefault(),e.stopPropagation();var t=e.dataTransfer.files;if(console.log(e),t&&t.length){var n=N(t);y(n),O(n)}},onDragEnter:k,onDragLeave:k,className:"flex flex-col w-full",children:[(0,u.jsxs)("label",{className:"cursor-pointer flex items-center space-x-3 w-full border-2 border-dashed border-gray-600 rounded-lg px-4 py-6 md:py-10 ".concat(h?"border-brand-green":"peer-active:border-brand-green"),children:[(0,u.jsx)(a.Z,{className:"text-brand-green",fontSize:"large"}),(0,u.jsx)("p",{className:"flex flex-col",children:"Drag & Drop images here or click to select file(s)"}),(0,u.jsx)("input",{ref:w,type:"file",multiple:c,accept:".jpg,.png,.jpeg",onChange:function(e){var t=e.target.files;if(t.length){var n=N(t);y(n),O(n)}},className:"hidden"})]}),(0,u.jsx)("div",{className:"mt-1 inline-grid md:grid-cols-2 gap-3 w-full",children:Object.keys(v).map((function(e,t){var n,a=v[e],l="image"===a.type.split("/")[0];return(0,u.jsx)("div",{className:"flex flex-col",children:l&&(0,u.jsx)(d,{src:URL.createObjectURL(a),title:e,children:(0,u.jsxs)("div",{className:"py-1 bg-cyan-200/50 px-3 rounded-lg flex items-center w-full space-x-2 justify-between",children:[(0,u.jsxs)("p",{className:"text-xs text-cyan-500",children:[e," ",(0,u.jsxs)("span",{className:"text-red-500 pl-3",children:[(n=a.size,Math.round(n/1e3))," kb"]})]}),(0,u.jsx)(r.Z,{className:"text-brand-red cursor-pointer text-red-500",onClick:function(){return function(e){delete v[e],y(x({},v)),O(x({},v))}(e)}})]})})},e)}))})]})}},73903:function(e,t,n){"use strict";var r=n(77533),a=n(50594),l=(n(67294),n(85893));t.Z=function(e){var t=e.children,n=e.toggle,s=void 0!==n&&n,i=e.setToggle,o=e.title,c=void 0===o?"New item":o,u=function(e){return function(t){("keydown"!==t.type||"Tab"!==t.key&&"Shift"!==t.key)&&i(e)}};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("div",{role:"button",onClick:function(){return i(!s)},tabIndex:0,children:t[0]}),(0,l.jsx)(r.ZP,{anchor:"top",open:s,onClose:u(!1),sx:{"& .MuiPaper-elevation":{maxWidth:"100%",minHeight:"100vh",marginX:"auto",padding:"8px",backgroundColor:"transparent",boxShadow:"none",overflowY:"auto",display:"flex",flexDirection:"column",alignItems:"center",height:"fit-content"}},children:(0,l.jsxs)("div",{className:"max-w-4xl pointer-events-auto bg-white flex py-3 px-4 md:p-8 flex-col items-center w-full",children:[(0,l.jsxs)("div",{className:"flex gap-x-2 justify-between w-full",children:[(0,l.jsx)("h1",{className:"font-black text-xl tracking-wide text-brand-green",children:c}),(0,l.jsxs)("button",{type:"button",onKeyDown:function(e){"Escape"===e.key&&i(!1)},onClick:u(!1),className:"text-brand-green flex flex-col items-center ml-auto",children:[(0,l.jsx)(a.Z,{fontSize:"large"}),(0,l.jsx)("span",{className:"text-sm text-brand-green",children:"ESC"})]})]}),(0,l.jsx)("div",{className:"flex flex-col w-full",children:t[1]})]})})]})}},72173:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSP:function(){return m},default:function(){return p}});var r=n(9008),a=n.n(r),l=n(66133),s=(n(67294),n(50029)),i=n(87794),o=n.n(i),c=n(34427),u=n(85893),d=function(e){var t=e.withSaveBtn,n=void 0!==t&&t;return(0,u.jsx)("div",{children:(0,u.jsxs)("div",{className:"flex flex-col",children:[n?(0,u.jsx)("div",{className:"mt-2 mx-10 mb-10 ",children:(0,u.jsx)("h2",{className:"text-brand-green text-xl font-bold",children:"Create banner"})}):null,(0,u.jsx)("div",{children:(0,u.jsxs)("div",{className:"flex justify-center ",children:[(0,u.jsx)("div",{className:"mx-5 flex-1 flex-wrap",children:(0,u.jsxs)("div",{className:"flex flex-col",children:[(0,u.jsxs)("div",{className:"mb-4",children:[(0,u.jsx)("label",{className:"block text-gray-700 text-sm font-bold mb-2",htmlFor:"title_input",children:"Title"}),(0,u.jsx)("input",{className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",id:"title_input",type:"text",placeholder:"title..."})]}),(0,u.jsxs)("div",{className:"mb-4",children:[(0,u.jsx)("label",{className:"block text-gray-700 text-sm font-bold mb-2",htmlFor:"description_input",children:"Description"}),(0,u.jsx)("textarea",{id:"description_area",rows:5,className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",placeholder:"Write a description...",required:!0})]})]})}),(0,u.jsx)("div",{className:"mx-5 flex-1 self-center",children:(0,u.jsx)(c.Z,{updateFilesCb:function(){},multiple:!1})})]})}),n?(0,u.jsx)("div",{className:"mt-2 mx-10",children:(0,u.jsx)("button",{type:"button",className:"bg-brand-green px-3 text-white rounded py-2",children:"Save"})}):null]})})},f=function(){var e=function(){var e=(0,s.Z)(o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:new FormData;case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,u.jsx)("div",{children:(0,u.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e()},className:"pt-4",children:[(0,u.jsxs)("div",{className:"flex flex-col",children:[(0,u.jsxs)("div",{className:"mt-4",children:[(0,u.jsx)("label",{className:"block text-gray-700 text-sm font-bold mb-2",children:"Top Image"}),(0,u.jsx)("div",{className:"mx-5",children:(0,u.jsx)(c.Z,{updateFilesCb:function(){},multiple:!1})})]}),(0,u.jsxs)("div",{className:"mt-4",children:[(0,u.jsx)("label",{className:"block text-gray-700 text-sm font-bold mb-2",htmlFor:"about_us_area",children:"About us"}),(0,u.jsx)("textarea",{id:"about_us_area",rows:5,className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",placeholder:"Write a about us...",required:!0})]}),(0,u.jsx)("div",{className:"mt-4",children:(0,u.jsx)("h2",{children:"Our Mission"})}),(0,u.jsxs)("div",{className:"mt-4",children:[(0,u.jsx)("label",{className:"block text-gray-700 text-sm font-bold mb-2",htmlFor:"first_banner_area",children:"First banner"}),(0,u.jsx)(d,{})]}),(0,u.jsxs)("div",{className:"mt-4",children:[(0,u.jsx)("label",{className:"block text-gray-700 text-sm font-bold mb-2",htmlFor:"second_banner_area",children:"Second banner"}),(0,u.jsx)(d,{})]}),(0,u.jsxs)("div",{className:"mt-4",children:[(0,u.jsx)("label",{className:"block text-gray-700 text-sm font-bold mb-2",htmlFor:"second_banner_area",children:"Third banner"}),(0,u.jsx)(d,{})]}),(0,u.jsxs)("div",{className:"mt-4",children:[(0,u.jsx)("label",{className:"block text-gray-700 text-sm font-bold mb-2",htmlFor:"our_History_area",children:"Our History"}),(0,u.jsx)("textarea",{id:"about_us_area",rows:5,className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",placeholder:"Write our history...",required:!0})]})]}),(0,u.jsx)("div",{className:""}),(0,u.jsx)("button",{type:"submit",className:"text-white mt-12 bg-brand-green/80 hover:bg-brand-green focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",children:"Save"})]})})},x=function(){return(0,u.jsxs)("div",{className:"flex flex-col",children:[(0,u.jsx)("h2",{className:"mx-10 mt-10 text-xl md:text-2xl font-black text-dark-green tracking-wide",children:"Manage About us pane"}),(0,u.jsx)("div",{className:"my-12 mx-5",children:(0,u.jsx)(f,{})})]})},m=!0,p=function(){return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(a(),{children:(0,u.jsx)("title",{children:"Yean"})}),(0,u.jsx)(l.Z,{children:(0,u.jsx)(x,{})})]})}},53817:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/about-us",function(){return n(72173)}])}},function(e){e.O(0,[8247,8795,9601,6133,9774,2888,179],(function(){return t=53817,e(e.s=t);var t}));var t=e.O();_N_E=t}]);