(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8551],{19572:function(e,t,r){"use strict";var n=r(95318);t.Z=void 0;var i=n(r(64938)),a=r(85893),o=(0,i.default)((0,a.jsx)("path",{d:"M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z"}),"ChevronLeft");t.Z=o},26215:function(e,t,r){"use strict";var n=r(95318);t.Z=void 0;var i=n(r(64938)),a=r(85893),o=(0,i.default)((0,a.jsx)("path",{d:"M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),"ChevronRight");t.Z=o},86635:function(e,t,r){"use strict";r.d(t,{Nv:function(){return d},TB:function(){return l}});var n=r(50029),i=r(87794),a=r.n(i),o=r(11179),s=(r(9669),r(8100)),c=function(){var e=(0,n.Z)(a().mark((function e(t){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",o.Z.OpenRoute.getRoute(t));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),u=function(){var e=(0,n.Z)(a().mark((function e(t){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",o.Z.GetRoute.getRoute(t));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(e){var t=(0,s.ZP)(e,c),r=t.data,n=t.error;return{data:(null===r||void 0===r?void 0:r.data)||{},isLoading:!n&&!r,isError:n}},d=function(e){var t=(0,s.ZP)(e,u),r=t.data,n=t.error;return{data:(null===r||void 0===r?void 0:r.data)||{},isLoading:!n&&!r,isError:n}}},30847:function(e,t,r){"use strict";var n=r(19572),i=r(26215),a=r(67294),o=r(19663),s=r(85893);t.Z=function(e){var t=e.data,r=(0,a.useRef)(0),c=(0,a.useState)(0),u=c[0],l=c[1],d=(0,a.useRef)(null),f=function(e){return"prev"===e?u<=0:"next"===e&&null!==d.current&&d.current.offsetWidth*u>r.current};return(0,a.useEffect)((function(){null!==d&&null!==d.current&&(d.current.scrollLeft=d.current.offsetWidth*u)}),[u]),(0,a.useEffect)((function(){r.current=d.current?d.current.scrollWidth-d.current.offsetWidth:0}),[t]),(0,s.jsxs)("div",{className:"relative overflow-hidden w-full py-2",children:[(0,s.jsxs)("div",{className:"flex items-center justify-between absolute top-0 left-0 w-full h-full",children:[(0,s.jsx)("button",{disabled:f("prev"),onClick:function(){u>0&&l((function(e){return e-1}))},type:"button",className:"z-10 right-0 absolute bg-brand-violet disabled:bg-brand-violet/25 px-2 py-1 text-white",children:(0,s.jsx)(i.Z,{})}),(0,s.jsx)("button",{disabled:f("next"),onClick:function(){null!==d.current&&d.current.offsetWidth*u<=r.current&&l((function(e){return e+1}))},type:"button",className:"z-10 left-0 absolute bg-brand-violet disabled:bg-brand-violet/25 px-2 py-1 text-white",children:(0,s.jsx)(n.Z,{})})]}),(0,s.jsx)("div",{ref:d,className:"relative flex gap-3 overflow-x-auto md:overflow-hidden scroll-smooth snap-x snap-mandatory touch-pan-x z-0",children:null===t||void 0===t?void 0:t.map((function(e,t){return(0,s.jsx)("div",{className:"flex shrink-0 flex-col group relative snap-start",children:(0,s.jsxs)("a",{href:e.portfolio,target:"_blank",rel:"noopener noreferrer",className:"flex flex-col items-center shrink-0",children:[(0,s.jsx)(o.Z,{src:e.image,alt:"",layout:"fixed",width:"150px",height:"92px"}),(0,s.jsx)("p",{className:"sr-only",children:e.companyName})]},e.id)},e.id)}))})]})}},19663:function(e,t,r){"use strict";var n=r(59499),i=r(16835),a=r(25675),o=r.n(a),s=r(67294),c=r(85893);function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.Z=function(e){var t=e.alt,r="/assets/images/placeholder.png",n=s.useState(e.src),a=(0,i.Z)(n,2),u=a[0],d=a[1];if(s.useEffect((function(){d(e.src)}),[e.src]),!u)return null;var f=u||"",p=f=f.startsWith("/uploads")?f:"/uploads/".concat(f);return"/"!==p.slice(0,1)&&"http"!==p.slice(0,3)&&(p="/".concat(u)),(0,c.jsx)(o(),l(l({},e),{},{alt:t,src:p,onError:function(){d(r)},onLoadingComplete:function(e){0===e.naturalWidth&&d(r)}}))}},33405:function(e,t,r){"use strict";r(67294);var n=r(85893);t.Z=function(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("meta",{charSet:"UTF-8"}),(0,n.jsx)("meta",{name:"description",content:"ubuhinzi mu rwanda"}),(0,n.jsx)("meta",{name:"keywords",content:"youth, agribusiness, ubuhinzi, urubyiruko, amakuru, isoko, ihuriro, farmers, platform, Rwanda, farming"}),(0,n.jsx)("meta",{name:"author",content:"Fridolin niyonsaba"}),(0,n.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),(0,n.jsx)("meta",{property:"fb:app_id",content:"2004258806506916"}),(0,n.jsx)("meta",{property:"og:url",content:"https://yeanrwanda.org/"}),(0,n.jsx)("meta",{property:"og:type",content:""}),(0,n.jsx)("meta",{property:"og:description",content:""}),(0,n.jsx)("meta",{property:"og:title",content:"YEAN - My farming story"}),(0,n.jsx)("meta",{property:"og:image",content:"",itemProp:"image"}),(0,n.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,n.jsx)("meta",{name:"twitter:site",content:"@YEAN_Rwanda"}),(0,n.jsx)("meta",{name:"twitter:creator",content:"@fridolin_r"}),(0,n.jsx)("meta",{property:"twitter:title",content:"YEAN - My farming story"}),(0,n.jsx)("meta",{name:"twitter:description",content:""}),(0,n.jsx)("meta",{name:"twitter:image",content:""})]})}},52181:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return b}});var n=r(9008),i=r.n(n),a=r(67294),o=r(16835),s=r(2655),c=r(25675),u=r.n(c),l=r(74231),d=r(2638),f=r(87536),p=(r(9669),r(30847)),m=r(86635),x=r(11163),h=r(85893),v=l.Ry({companyName:l.Z_().required("Company Name is required"),phone:l.Z_().required("Phone Number is required"),address:l.Z_().required("Address is required"),message:l.Z_().required("Message is required"),email:l.Z_().required("Email is required").email("Email is invalid")}).required(),g=function(){var e=a.useState(null),t=(0,o.Z)(e,2),r=(t[0],t[1],a.useState(null)),n=(0,o.Z)(r,2),i=(n[0],n[1],(0,x.useRouter)().push),c=(0,m.TB)("/api/partners"),l=c.data.data,g=(c.isLoading,null===l||void 0===l?void 0:l.rows),j=(0,f.cI)({resolver:(0,d.X)(v)});j.register,j.handleSubmit,j.reset,j.formState.errors;return(0,h.jsxs)(s.Z,{children:[(0,h.jsxs)("div",{className:"flex flex-col w-full relative bg-brand-green min-h-[312px]",children:[(0,h.jsx)(u(),{src:"/assets/images/partner.png",alt:"",layout:"fill",objectFit:"cover",priority:!0}),(0,h.jsx)("div",{className:"flex flex-col h-full w-full items-center justify-center p-4 md:p-8 top-0 absolute z-10",children:(0,h.jsx)("h1",{className:"text-3xl md:text-6xl font-black tracking-wide text-white",children:"Partner with us"})})]}),(0,h.jsx)("div",{className:"p-4 flex flex-col items-center py-12 text-justify bg-gradient-to-r from-cyan-01 to-[#016648]",children:(0,h.jsx)("p",{className:"max-w-4xl",children:"We cannot just do it alone. We collaborate with governments, companies, nonprofits and other organizations to find solutions and contribute to agriculture advancement. We appreciate our partner\u2019s contribution that help mainly in strengthening our capacity to build stronger and resilient communities. Join us, contribute to agriculture development, and create jobs and wealth for youth and the community."})}),(0,h.jsxs)("div",{className:"bg-gradient-to-r from-cyan-01 to-white p-4 md:p-8 justify-center gap-6 flex md:gap-x-10 flex-wrap w-full",children:[(0,h.jsx)("h1",{className:"text-3xl font-black text-dark-green tracking-wide w-full text-center",children:"Our Partnets"}),(0,h.jsx)(p.Z,{data:g}),(0,h.jsx)("div",{className:"flex flex-col items-center mt-3",children:(0,h.jsxs)("p",{className:"",children:["We would love to partner with you if you find our work interesting. Kindly"," ",(0,h.jsx)("button",{type:"button",onClick:function(){i("/contact")},className:"border-dark-green px-2 py-1 border-2 rounded-full",children:"Contact us"})]})})]})]})},j=r(33405),b=function(){return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)(i(),{children:[(0,h.jsx)("title",{children:"Partner with us - Yean"}),(0,h.jsx)(j.Z,{})]}),(0,h.jsx)(g,{})]})}},56531:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/partner",function(){return r(52181)}])}},function(e){e.O(0,[8247,8795,3946,3756,8100,2482,7487,1969,2655,9774,2888,179],(function(){return t=56531,e(e.s=t);var t}));var t=e.O();_N_E=t}]);