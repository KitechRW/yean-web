(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9597],{86635:function(e,r,t){"use strict";t.d(r,{Nv:function(){return d},TB:function(){return u}});var n=t(50029),a=t(87794),s=t.n(a),l=t(11179),i=(t(9669),t(8100)),o=function(){var e=(0,n.Z)(s().mark((function e(r){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",l.Z.OpenRoute.getRoute(r));case 1:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),c=function(){var e=(0,n.Z)(s().mark((function e(r){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",l.Z.GetRoute.getRoute(r));case 1:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),u=function(e){var r=(0,i.ZP)(e,o),t=r.data,n=r.error;return{data:(null===t||void 0===t?void 0:t.data)||{},isLoading:!n&&!t,isError:n}},d=function(e){var r=(0,i.ZP)(e,c),t=r.data,n=r.error;return{data:(null===t||void 0===t?void 0:t.data)||{},isLoading:!n&&!t,isError:n}}},19663:function(e,r,t){"use strict";var n=t(59499),a=t(16835),s=t(25675),l=t.n(s),i=t(67294),o=t(85893);function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function u(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}r.Z=function(e){var r=e.alt,t="/assets/images/placeholder.png",n=i.useState(e.src),s=(0,a.Z)(n,2),c=s[0],d=s[1];if(i.useEffect((function(){d(e.src)}),[e.src]),!c)return null;var m=c||"",f=m=m.startsWith("/uploads")?m:"/uploads/".concat(m);return"/"!==f.slice(0,1)&&"http"!==f.slice(0,3)&&(f="/".concat(c)),(0,o.jsx)(l(),u(u({},e),{},{alt:r,src:f,onError:function(){d(t)},onLoadingComplete:function(e){0===e.naturalWidth&&d(t)}}))}},73903:function(e,r,t){"use strict";var n=t(77533),a=t(50594),s=(t(67294),t(85893));r.Z=function(e){var r=e.children,t=e.toggle,l=void 0!==t&&t,i=e.setToggle,o=e.title,c=void 0===o?"New item":o,u=function(e){return function(r){("keydown"!==r.type||"Tab"!==r.key&&"Shift"!==r.key)&&i(e)}};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{role:"button",onClick:function(){return i(!l)},tabIndex:0,children:r[0]}),(0,s.jsx)(n.ZP,{anchor:"top",open:l,onClose:u(!1),sx:{"& .MuiPaper-elevation":{maxWidth:"100%",minHeight:"100vh",marginX:"auto",padding:"8px",backgroundColor:"transparent",boxShadow:"none",overflowY:"auto",display:"flex",flexDirection:"column",alignItems:"center",height:"fit-content"}},children:(0,s.jsxs)("div",{className:"max-w-4xl pointer-events-auto bg-white flex py-3 px-4 md:p-8 flex-col items-center w-full",children:[(0,s.jsxs)("div",{className:"flex gap-x-2 justify-between w-full",children:[(0,s.jsx)("h1",{className:"font-black text-xl tracking-wide text-brand-green",children:c}),(0,s.jsxs)("button",{type:"button",onKeyDown:function(e){"Escape"===e.key&&i(!1)},onClick:u(!1),className:"text-brand-green flex flex-col items-center ml-auto",children:[(0,s.jsx)(a.Z,{fontSize:"large"}),(0,s.jsx)("span",{className:"text-sm text-brand-green",children:"ESC"})]})]}),(0,s.jsx)("div",{className:"flex flex-col w-full",children:r[1]})]})})]})}},77616:function(e,r,t){"use strict";t.r(r),t.d(r,{__N_SSP:function(){return R},default:function(){return S}});var n=t(67294),a=t(9008),s=t.n(a),l=t(66133),i=t(27812),o=t(19663),c=t(50029),u=t(16835),d=t(87794),m=t.n(d),f=t(85893),g=function(e){e.imageUrl;var r=e.isOneImage,t=e.validFiles,a=e.setValidFiles,s=e.fileInputRef,l=e.modalImageRef,o=e.modalRef,c=e.progressRef,u=e.uploadRef,d=e.uploadModalRef,m=e.selectedFiles,g=e.setSelectedFiles,p=e.unsupportedFiles,x=e.setUnsupportedFiles,h=e.errorMessage,b=e.setErrorMessage;(0,n.useEffect)((function(){var e=m.reduce((function(e,r){return e.find((function(e){return e.name===r.name}))?e:e.concat([r])}),[]);a((0,i.Z)(e))}),[m]);var v=function(e){e.preventDefault()},y=function(e){for(var t=function(t){j(e[t])?g(r?[e[t]]:function(r){return[].concat((0,i.Z)(r),[e[t]])}):(e[t].invalid=!0,r?(g([e[t]]),b("File type not permitted"),x([e[t]])):(g((function(r){return[].concat((0,i.Z)(r),[e[t]])})),b("File type not permitted"),x((function(r){return[].concat((0,i.Z)(r),[e[t]])}))))},n=0;n<e.length;n++)t(n)},j=function(e){return-1!==["image/jpeg","image/jpg","image/png","image/gif","image/x-icon"].indexOf(e.type)},N=function(e){if(0===e)return"0 Bytes";var r=Math.floor(Math.log(e)/Math.log(1024));return parseFloat((e/Math.pow(1024,r)).toFixed(2))+" "+["Bytes","KB","MB","GB","TB"][r]},k=function(e){var r=t.findIndex((function(r){return r.name===e})),n=m.findIndex((function(r){return r.name===e})),s=p.findIndex((function(r){return r.name===e}));t.splice(r,1),m.splice(n,1),a((0,i.Z)(t)),g((0,i.Z)(m)),-1!==s&&(p.splice(s,1),x((0,i.Z)(p)))};return(0,f.jsxs)("div",{className:"content",children:[(0,f.jsxs)("div",{className:"containers",children:[p.length?(0,f.jsxs)("p",{children:["Please remove all unsupported files.",(0,f.jsx)("br",{})," ",(0,f.jsx)("br",{})," "]}):"",(0,f.jsxs)("div",{className:"drop-container",onDragOver:function(e){v(e)},onDragEnter:function(e){v(e)},onDragLeave:function(e){v(e)},onDrop:function(e){v(e);var r=e.dataTransfer.files;r.length&&y(r)},onClick:function(){s.current.click()},children:[(0,f.jsxs)("div",{className:"drop-message",children:[(0,f.jsx)("div",{className:"upload-icon"}),"Drag & Drop files here or click to select file(s)"]}),(0,f.jsx)("input",{ref:s,className:"file-input",type:"file",onChange:function(){s.current.files.length&&y(s.current.files)},accept:"image/*"})]}),(0,f.jsx)("div",{className:"file-display-container",children:t.map((function(e,r){return(0,f.jsxs)("div",{className:"file-status-bar",children:[(0,f.jsxs)("div",{onClick:e.invalid?function(){return k(e.name)}:function(){return function(e){var r=new FileReader;o.current.style.display="block",r.readAsDataURL(e),r.onload=function(e){l.current.style.backgroundImage="url(".concat(e.target.result,")")}}(e)},children:[(0,f.jsx)("div",{className:"file-type-logo"}),(0,f.jsx)("div",{className:"file-type",children:(t=e.name,t.substring(t.lastIndexOf(".")+1,t.length)||t)}),(0,f.jsx)("span",{className:"file-name ".concat(e.invalid?"file-error":""),children:e.name}),(0,f.jsxs)("span",{className:"file-size",children:["(",N(e.size),")"]})," ",e.invalid&&(0,f.jsxs)("span",{className:"file-error-message",children:["(",h,")"]})]}),(0,f.jsx)("div",{className:"file-remove",onClick:function(){return k(e.name)},children:"X"})]},r);var t}))})]}),(0,f.jsxs)("div",{className:"modal",ref:o,children:[(0,f.jsx)("div",{className:"overlay"}),(0,f.jsx)("span",{className:"close",onClick:function(){return o.current.style.display="none",void(l.current.style.backgroundImage="none")},children:"X"}),(0,f.jsx)("div",{className:"modal-image",ref:l})]}),(0,f.jsxs)("div",{className:"upload-modal",ref:d,children:[(0,f.jsx)("div",{className:"overlay"}),(0,f.jsx)("div",{className:"close",onClick:function(){d.current.style.display="none"},children:"X"}),(0,f.jsxs)("div",{className:"progress-container",children:[(0,f.jsx)("span",{ref:u}),(0,f.jsx)("div",{className:"progress",children:(0,f.jsx)("div",{className:"progress-bar",ref:c})})]})]})]})},p=t(11179),x=t(46737),h=t.n(x),b=t(73903),v=function(e){var r=e.email,t=e.phone,a=e.companyName,s=e.isEdit,l=void 0!==s&&s,i=e.id,o=e.imageUrl,d=e.handlePartner,x=e.children,v=n.useState(!1),y=(0,u.Z)(v,2),j=y[0],N=y[1],k=(0,n.useState)([]),w=k[0],Z=k[1],R=(0,n.useRef)(),S=(0,n.useRef)(),E=(0,n.useRef)(),F=(0,n.useRef)(),P=(0,n.useRef)(),C=(0,n.useRef)(),O=(0,n.useState)([]),M=O[0],D=O[1],I=(0,n.useState)([]),_=I[0],T=I[1],B=(0,n.useState)(""),A=B[0],L=B[1],U=(0,n.useState)(""),z=U[0],X=U[1],V=(0,n.useState)(""),H=V[0],G=V[1],W=(0,n.useState)(""),K=W[0],Y=W[1];(0,n.useEffect)((function(){void 0!==t&&null!==t&&Y(t)}),[t]),(0,n.useEffect)((function(){void 0!==a&&null!==a&&G(a)}),[a]),(0,n.useEffect)((function(){void 0!==r&&null!==r&&X(r)}),[r]);var q=function(){var e=(0,c.Z)(m().mark((function e(){var r,t,n,a,s,o,c,u,f;return m().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(r=new FormData).append("media",M[0]),e.next=4,p.Z.PostRoute.postRoute("/api/uploads",r);case 4:if(t=e.sent,n=t.data,!(a=t.error)){e.next=10;break}return h()("Ooops!",a.message||"Something went wrong"),e.abrupt("return");case 10:return s=l?"/api/partners?id=".concat(i):"/api/partners",o={email:z,phone:K,companyName:H,image:n.url},e.next=14,l?p.Z.PatchRoute.patchRoute(s,o):p.Z.PostRoute.postRoute(s,o);case 14:c=e.sent,u=c.data,f=c.error,u&&h()(l?"Edited":"Added!",u.message||"Action is successfully","success").then((function(){D([]),X(""),G(""),Y(""),d(u.partner,l),N(!1)})),f&&h()("Ooops!",f.message||"Something went wrong");case 19:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,f.jsxs)(b.Z,{title:"".concat(l?"Edit":"New"," Partner"),toggle:j,setToggle:N,children:[x,(0,f.jsx)("div",{className:"flex flex-col",children:(0,f.jsxs)("form",{onSubmit:function(e){e.preventDefault(),q()},className:"pt-4",children:[(0,f.jsxs)("div",{className:"mb-6",children:[(0,f.jsx)("label",{htmlFor:"email",className:"block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300",children:"Email"}),(0,f.jsx)("input",{type:"email",id:"email",value:z,onChange:function(e){return X(e.target.value)},className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"name@yarn.com"})]}),(0,f.jsxs)("div",{className:"mb-6",children:[(0,f.jsx)("label",{htmlFor:"companyName",className:"block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300",children:"Company name"}),(0,f.jsx)("input",{type:"text",id:"companyName",placeholder:"Company name",value:H,onChange:function(e){return G(e.target.value)},className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"})]}),(0,f.jsxs)("div",{className:"mb-6",children:[(0,f.jsx)("label",{htmlFor:"telPhoneNumber",className:"block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300",children:"Phone number"}),(0,f.jsx)("input",{type:"tel",id:"telPhoneNumber",placeholder:"Phone",value:K,onChange:function(e){return Y(e.target.value)},className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"})]}),(0,f.jsx)("div",{className:"",children:(0,f.jsx)(g,{errorMessage:A,setErrorMessage:L,unsupportedFiles:_,setUnsupportedFiles:T,selectedFiles:M,setSelectedFiles:D,uploadModalRef:C,uploadRef:P,progressRef:F,modalRef:E,modalImageRef:S,fileInputRef:R,validFiles:w,setValidFiles:Z,isOneImage:!0,imageUrl:o})}),(0,f.jsx)("button",{type:"submit",className:"text-white mt-12 bg-brand-green/80 hover:bg-brand-green focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",children:"Submit"})]})})]})},y=function(e){var r=e.handleAddPartner,t=e.data;return(0,f.jsx)(f.Fragment,{children:(0,f.jsxs)("div",{className:"max-w-xs bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700",children:[(0,f.jsx)(o.Z,{src:null===t||void 0===t?void 0:t.image,width:"320px ",height:"200px",objectFit:"cover",loading:"lazy"}),(0,f.jsxs)("div",{className:"p-5",children:[(0,f.jsx)("div",{children:(0,f.jsx)("h6",{className:"mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white",children:null===t||void 0===t?void 0:t.companyName})}),(0,f.jsx)(v,{isEdit:!0,id:null===t||void 0===t?void 0:t.id,imageUrl:null===t||void 0===t?void 0:t.image,email:null===t||void 0===t?void 0:t.email,phone:null===t||void 0===t?void 0:t.phone,handlePartner:function(e,t){return r(e,t)},children:(0,f.jsxs)("button",{className:"inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-brand-green/70 rounded-lg hover:bg-brand-green focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",children:["Edit",(0,f.jsx)("svg",{"aria-hidden":"true",className:"ml-2 -mr-1 w-4 h-4",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:(0,f.jsx)("path",{fillRule:"evenodd",d:"M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z",clipRule:"evenodd"})})]})})]})]})})},j=t(86635),N=t(17737),k=[{name:"Amatungo",sub:[{name:"Cows"},{name:"Goats"},{name:"Pigs"}]},{name:"Ibihingwa",sub:[{name:"Ibijumba"},{name:"Umuceri"},{name:"Imyumbati"}]}],w=function(e){var r=e.children,t=n.useState(!1),a=(0,u.Z)(t,2),s=a[0],l=a[1],o=(0,n.useState)([]),d=o[0],g=o[1],p=(0,n.useState)([]),x=p[0],h=p[1],v=(0,n.useState)(""),y=v[0],j=v[1],w=(0,n.useState)([]),Z=w[0],R=w[1],S=(0,n.useState)([]),E=S[0];S[1];(0,n.useEffect)((function(){if(void 0!==k&&null!==k){var e=k.map((function(e){return e.name}));g((0,i.Z)(e))}}),[]),(0,n.useEffect)((function(){0!=(null===d||void 0===d?void 0:d.length)&&j(d[0])}),[d]),(0,n.useEffect)((function(){void 0!==y&&null!==y&&k.forEach((function(e){if(e.name===y){var r=e.sub.map((function(e){return e.name}));h((0,i.Z)(r))}}))}),[y]);var F=function(){var e=(0,c.Z)(m().mark((function e(){return m().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:new FormData;case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,f.jsxs)(b.Z,{title:"New Material",toggle:s,setToggle:l,children:[r,(0,f.jsx)("div",{className:"flex flex-col",children:(0,f.jsxs)("form",{onSubmit:function(e){e.preventDefault(),F()},className:"pt-4",children:[(0,f.jsxs)("div",{className:"mb-6",children:[(0,f.jsx)("label",{htmlFor:"materialName",className:"block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300",children:"Name"}),(0,f.jsx)("input",{type:"text",id:"materialName",placeholder:"Name",className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"})]}),(0,f.jsxs)("div",{className:"mb-6",children:[(0,f.jsx)("label",{htmlFor:"main-category",className:"block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300",children:"Main category"}),(0,f.jsx)("select",{value:y,onChange:function(e){j(e.target.value)},id:"main-category",className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",children:d.map((function(e,r){return(0,f.jsx)("option",{value:e,children:e},e+r)}))})]}),(0,f.jsxs)("div",{className:"mb-6",children:[(0,f.jsx)("label",{htmlFor:"sub-category",className:"block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300",children:"sub category"}),(0,f.jsx)("select",{id:"sub-category",className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",children:x.map((function(e,r){return(0,f.jsx)("option",{value:e,children:e},e+r+"sub")}))})]}),(0,f.jsxs)("div",{className:"mb-6",children:[(0,f.jsx)("label",{htmlFor:"main-content",className:"block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400",children:"Articles "}),(0,f.jsx)(N.ZP,{isMulti:!0,defaultValue:Z,onChange:function(e){R((0,i.Z)(e))},options:E,isSearchable:!0,className:"mt-2"})]}),(0,f.jsx)("button",{type:"submit",className:"text-white mt-12 bg-brand-green/80 hover:bg-brand-green focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",children:"Submit"})]})})]})},Z=function(){var e,r,t=(0,n.useState)(""),a=t[0],s=t[1],l=(0,n.useState)([]),o=l[0],c=l[1],u=(0,j.TB)("/api/partners").data;(0,n.useEffect)((function(){var e,r;if(null!==(e=u.partners)&&void 0!==e&&null!==(r=e.rows)&&void 0!==r&&r.length){var t,n,s=null===(t=u.partners)||void 0===t||null===(n=t.rows)||void 0===n?void 0:n.filter((function(e){return e.companyName.toLowerCase().includes(a.toLowerCase())}));c(s)}}),[null===(e=u.partners)||void 0===e?void 0:e.rows,a]);var d=function(e,r){if(r){if(r){var t=o.map((function(r){return r.id===e.id?e:r}));c(t)}}else c((function(r){return[].concat((0,i.Z)(r),[e])}))};return(0,n.useEffect)((function(){var e,r;null!==(e=u.partners)&&void 0!==e&&null!==(r=e.rows)&&void 0!==r&&r.length&&c(u.partners.rows)}),[null===(r=u.partners)||void 0===r?void 0:r.rows]),(0,f.jsx)(f.Fragment,{children:(0,f.jsx)("div",{children:(0,f.jsxs)("section",{children:[(0,f.jsxs)("header",{className:"bg-white space-y-4 p-4 sm:px-8 sm:py-6 lg:p-4 xl:px-8 xl:py-6",children:[(0,f.jsxs)("div",{className:"flex items-center justify-between",children:[(0,f.jsx)("h2",{className:"font-semibold text-slate-900",children:"Extension Materials"}),(0,f.jsx)(w,{handlePartner:function(e,r){d(e,r)},children:(0,f.jsxs)("button",{className:"hover:bg-brand-green group flex items-center rounded-md bg-brand-green/80 text-white text-sm font-medium pl-2 pr-3 py-2 shadow-sm",children:[(0,f.jsx)("svg",{width:"20",height:"20",fill:"currentColor",className:"mr-2","aria-hidden":"true",children:(0,f.jsx)("path",{d:"M10 5a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-3H6a1 1 0 1 1 0-2h3V6a1 1 0 0 1 1-1Z"})}),"New"]})})]}),(0,f.jsxs)("form",{className:"group relative",children:[(0,f.jsx)("svg",{width:"20",height:"20",fill:"currentColor",className:"absolute left-3 top-1/2 -mt-2.5 text-slate-400 pointer-events-none group-focus-within:text-blue-500","aria-hidden":"true",children:(0,f.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"})}),(0,f.jsx)("input",{value:a,onChange:function(e){return s(e.target.value)},className:"focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-10 ring-1 ring-slate-200 shadow-sm",type:"text","aria-label":"Filter projects",placeholder:"Filter Materials..."})]})]}),(0,f.jsxs)("ul",{className:"bg-slate-50 p-4 sm:px-8 sm:pt-6 sm:pb-8 lg:p-4 xl:px-8 xl:pt-6 xl:pb-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 text-sm leading-6",children:[o.map((function(e,r){return(0,f.jsx)(y,{data:e,handleAddPartner:d},e.id)})),(0,f.jsx)(w,{handlePartner:function(e,r){d(e,r)},children:(0,f.jsx)("li",{className:"flex",children:(0,f.jsxs)("button",{className:"hover:border-blue-500 hover:border-solid hover:bg-white hover:text-blue-500 group w-full flex flex-col items-center justify-center rounded-md border-2 border-dashed border-slate-300 text-sm leading-6 text-slate-900 font-medium py-3",children:[(0,f.jsx)("svg",{className:"group-hover:text-blue-500 mb-1 text-slate-400",width:"20",height:"20",fill:"currentColor","aria-hidden":"true",children:(0,f.jsx)("path",{d:"M10 5a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-3H6a1 1 0 1 1 0-2h3V6a1 1 0 0 1 1-1Z"})}),"New Materials"]})})})]})]})})})},R=!0,S=function(){return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(s(),{children:(0,f.jsx)("title",{children:"Yean"})}),(0,f.jsx)(l.Z,{children:(0,f.jsx)(Z,{})})]})}},18052:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/extension-materials",function(){return t(77616)}])}},function(e){e.O(0,[8247,8046,8100,9601,6737,7737,6133,9774,2888,179],(function(){return r=18052,e(e.s=r);var r}));var r=e.O();_N_E=r}]);