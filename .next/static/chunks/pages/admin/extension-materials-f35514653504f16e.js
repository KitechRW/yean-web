(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9597],{85377:function(e,r,t){"use strict";t.d(r,{Nv:function(){return m},TB:function(){return d}});var n=t(50029),a=t(87794),s=t.n(a),l=t(10637);t(9669);var i,o,$=t(8100),c=(i=(0,n.Z)(s().mark(function e(r){return s().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",l.Z.OpenRoute.getRoute(r));case 1:case"end":return e.stop()}},e)})),function(e){return i.apply(this,arguments)}),u=(o=(0,n.Z)(s().mark(function e(r){return s().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",l.Z.GetRoute.getRoute(r));case 1:case"end":return e.stop()}},e)})),function(e){return o.apply(this,arguments)}),d=function(e){var r=(0,$.ZP)(e,c),t=r.data,n=r.error;return{data:(null==t?void 0:t.data)||{},isLoading:!n&&!t,isError:n}},m=function(e){var r=(0,$.ZP)(e,u),t=r.data,n=r.error;return{data:(null==t?void 0:t.data)||{},isLoading:!n&&!t,isError:n}}},51663:function(e,r,t){"use strict";var n=t(59499),a=t(16835),s=t(25675),l=t.n(s),i=t(67294),o=t(85893);function $(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?$(Object(t),!0).forEach(function(r){(0,n.Z)(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):$(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var u=function(e){var r=e.alt,t="/assets/images/placeholder.png",n=i.useState(e.src),s=(0,a.Z)(n,2),$=s[0],u=s[1];if(i.useEffect(function(){u(e.src)},[e.src]),!$)return null;var d=$||"",m=d=d.startsWith("/uploads")?d:"/uploads/".concat(d);return"/"!==m.slice(0,1)&&"http"!==m.slice(0,3)&&(m="/".concat($)),(0,o.jsx)(l(),c(c({},e),{},{objectFit:e.objectFit||"cover",alt:r,src:m,onError:function(){u(t)},onLoadingComplete:function(e){0===e.naturalWidth&&u(t)}}))};r.Z=u},66673:function(e,r,t){"use strict";var n=t(77533),a=t(50594);t(67294);var s=t(85893),l=function(e){var r=e.children,t=e.toggle,l=void 0!==t&&t,i=e.setToggle,o=e.title,$=function(e){return function(r){("keydown"!==r.type||"Tab"!==r.key&&"Shift"!==r.key)&&i(e)}},c=function(e){"Escape"===e.key&&i(!1)};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{role:"button",onClick:function(){return i(!l)},tabIndex:0,children:r[0]}),(0,s.jsx)(n.ZP,{anchor:"top",open:l,onClose:$(!1),sx:{"& .MuiPaper-elevation":{maxWidth:"100%",minHeight:"100vh",marginX:"auto",padding:"8px",backgroundColor:"transparent",boxShadow:"none",overflowY:"auto",display:"flex",flexDirection:"column",alignItems:"center",height:"fit-content"}},children:(0,s.jsxs)("div",{className:"max-w-4xl pointer-events-auto bg-white flex py-3 px-4 md:p-8 flex-col items-center w-full",children:[(0,s.jsxs)("div",{className:"flex gap-x-2 justify-between w-full",children:[(0,s.jsx)("h1",{className:"font-black text-xl tracking-wide text-brand-green",children:void 0===o?"New item":o}),(0,s.jsxs)("button",{type:"button",onKeyDown:c,onClick:$(!1),className:"text-brand-green flex flex-col items-center ml-auto",children:[(0,s.jsx)(a.Z,{fontSize:"large"}),(0,s.jsx)("span",{className:"text-sm text-brand-green",children:"ESC"})]})]}),(0,s.jsx)("div",{className:"flex flex-col w-full",children:r[1]})]})})]})};r.Z=l},63004:function(e,r,t){"use strict";t.r(r),t.d(r,{__N_SSP:function(){return w},default:function(){return Z}});var n=t(67294),a=t(9008),s=t.n(a),l=t(43389),i=t(27812),o=t(51663),$=t(50029),c=t(16835),u=t(87794),d=t.n(u),m=t(85893),f=function(e){e.imageUrl;var r=e.isOneImage,t=e.validFiles,a=e.setValidFiles,s=e.fileInputRef,l=e.modalImageRef,o=e.modalRef,$=e.progressRef,c=e.uploadRef,u=e.uploadModalRef,d=e.selectedFiles,f=e.setSelectedFiles,g=e.unsupportedFiles,p=e.setUnsupportedFiles,x=e.errorMessage,h=e.setErrorMessage;(0,n.useEffect)(function(){var e=d.reduce(function(e,r){return e.find(function(e){return e.name===r.name})?e:e.concat([r])},[]);a((0,i.Z)(e))},[d]);var b=function(e){e.preventDefault()},v=function(e){b(e)},_=function(e){b(e)},y=function(e){b(e)},j=function(e){b(e);var r=e.dataTransfer.files;r.length&&w(r)},k=function(){s.current.files.length&&w(s.current.files)},N=function(){s.current.click()},w=function(e){for(var t=function(t){Z(e[t])?r?f([e[t]]):f(function(r){return[].concat((0,i.Z)(r),[e[t]])}):(e[t].invalid=!0,r?(f([e[t]]),h("File type not permitted"),p([e[t]])):(f(function(r){return[].concat((0,i.Z)(r),[e[t]])}),h("File type not permitted"),p(function(r){return[].concat((0,i.Z)(r),[e[t]])})))},n=0;n<e.length;n++)t(n)},Z=function(e){return -1!==["image/jpeg","image/jpg","image/png","image/gif","image/x-icon"].indexOf(e.type)},S=function(e){if(0===e)return"0 Bytes";var r=Math.floor(Math.log(e)/Math.log(1024));return parseFloat((e/Math.pow(1024,r)).toFixed(2))+" "+["Bytes","KB","MB","GB","TB"][r]},R=function(e){var r=t.findIndex(function(r){return r.name===e}),n=d.findIndex(function(r){return r.name===e}),s=g.findIndex(function(r){return r.name===e});t.splice(r,1),d.splice(n,1),a((0,i.Z)(t)),f((0,i.Z)(d)),-1!==s&&(g.splice(s,1),p((0,i.Z)(g)))},E=function(e){var r=new FileReader;o.current.style.display="block",r.readAsDataURL(e),r.onload=function(e){l.current.style.backgroundImage="url(".concat(e.target.result,")")}},P=function(){o.current.style.display="none",l.current.style.backgroundImage="none"},F=function(){u.current.style.display="none"};return(0,m.jsxs)("div",{className:"content",children:[(0,m.jsxs)("div",{className:"containers",children:[g.length?(0,m.jsxs)("p",{children:["Please remove all unsupported files.",(0,m.jsx)("br",{})," ",(0,m.jsx)("br",{})," "]}):"",(0,m.jsxs)("div",{className:"drop-container",onDragOver:v,onDragEnter:_,onDragLeave:y,onDrop:j,onClick:N,children:[(0,m.jsxs)("div",{className:"drop-message",children:[(0,m.jsx)("div",{className:"upload-icon"}),"Drag & Drop files here or click to select file(s)"]}),(0,m.jsx)("input",{ref:s,className:"file-input",type:"file",onChange:k,accept:"image/*"})]}),(0,m.jsx)("div",{className:"file-display-container",children:t.map(function(e,r){var t;return(0,m.jsxs)("div",{className:"file-status-bar",children:[(0,m.jsxs)("div",{onClick:e.invalid?function(){return R(e.name)}:function(){return E(e)},children:[(0,m.jsx)("div",{className:"file-type-logo"}),(0,m.jsx)("div",{className:"file-type",children:(t=e.name).substring(t.lastIndexOf(".")+1,t.length)||t}),(0,m.jsx)("span",{className:"file-name ".concat(e.invalid?"file-error":""),children:e.name}),(0,m.jsxs)("span",{className:"file-size",children:["(",S(e.size),")"]})," ",e.invalid&&(0,m.jsxs)("span",{className:"file-error-message",children:["(",x,")"]})]}),(0,m.jsx)("div",{className:"file-remove",onClick:function(){return R(e.name)},children:"X"})]},r)})})]}),(0,m.jsxs)("div",{className:"modal",ref:o,children:[(0,m.jsx)("div",{className:"overlay"}),(0,m.jsx)("span",{className:"close",onClick:function(){return P()},children:"X"}),(0,m.jsx)("div",{className:"modal-image",ref:l})]}),(0,m.jsxs)("div",{className:"upload-modal",ref:u,children:[(0,m.jsx)("div",{className:"overlay"}),(0,m.jsx)("div",{className:"close",onClick:function(){return F()},children:"X"}),(0,m.jsxs)("div",{className:"progress-container",children:[(0,m.jsx)("span",{ref:c}),(0,m.jsx)("div",{className:"progress",children:(0,m.jsx)("div",{className:"progress-bar",ref:$})})]})]})]})},g=t(10637),p=t(46737),x=t.n(p),h=t(66673),b=function(e){var r,t=e.email,a=e.phone,s=e.companyName,l=e.isEdit,i=void 0!==l&&l,o=e.id,u=e.imageUrl,p=e.handlePartner,b=e.children,v=n.useState(!1),_=(0,c.Z)(v,2),y=_[0],j=_[1],k=(0,n.useState)([]),N=k[0],w=k[1],Z=(0,n.useRef)(),S=(0,n.useRef)(),R=(0,n.useRef)(),E=(0,n.useRef)(),P=(0,n.useRef)(),F=(0,n.useRef)(),C=(0,n.useState)([]),M=C[0],I=C[1],D=(0,n.useState)([]),O=D[0],T=D[1],B=(0,n.useState)(""),A=B[0],L=B[1],U=(0,n.useState)(""),z=U[0],X=U[1],V=(0,n.useState)(""),H=V[0],G=V[1],W=(0,n.useState)(""),K=W[0],Y=W[1];(0,n.useEffect)(function(){null!=a&&Y(a)},[a]),(0,n.useEffect)(function(){null!=s&&G(s)},[s]),(0,n.useEffect)(function(){null!=t&&X(t)},[t]);var q=(r=(0,$.Z)(d().mark(function e(){var r,t,n,a,s,l,$,c,u;return d().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return(r=new FormData).append("media",M[0]),e.next=4,g.Z.PostRoute.postRoute("/api/uploads",r);case 4:if(n=(t=e.sent).data,!(a=t.error)){e.next=10;break}return x()("Ooops!",a.message||"Something went wrong"),e.abrupt("return");case 10:return s=i?"/api/partners?id=".concat(o):"/api/partners",l={email:z,phone:K,companyName:H,image:n.url},e.next=14,i?g.Z.PatchRoute.patchRoute(s,l):g.Z.PostRoute.postRoute(s,l);case 14:c=($=e.sent).data,u=$.error,c&&x()(i?"Edited":"Added!",c.message||"Action is successfully","success").then(function(){I([]),X(""),G(""),Y(""),p(c.partner,i),j(!1)}),u&&x()("Ooops!",u.message||"Something went wrong");case 19:case"end":return e.stop()}},e)})),function(){return r.apply(this,arguments)});return(0,m.jsxs)(h.Z,{title:"".concat(i?"Edit":"New"," Partner"),toggle:y,setToggle:j,children:[b,(0,m.jsx)("div",{className:"flex flex-col",children:(0,m.jsxs)("form",{onSubmit:function(e){e.preventDefault(),q()},className:"pt-4",children:[(0,m.jsxs)("div",{className:"mb-6",children:[(0,m.jsx)("label",{htmlFor:"email",className:"block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300",children:"Email"}),(0,m.jsx)("input",{type:"email",id:"email",value:z,onChange:function(e){return X(e.target.value)},className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"name@yarn.com"})]}),(0,m.jsxs)("div",{className:"mb-6",children:[(0,m.jsx)("label",{htmlFor:"companyName",className:"block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300",children:"Company name"}),(0,m.jsx)("input",{type:"text",id:"companyName",placeholder:"Company name",value:H,onChange:function(e){return G(e.target.value)},className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"})]}),(0,m.jsxs)("div",{className:"mb-6",children:[(0,m.jsx)("label",{htmlFor:"telPhoneNumber",className:"block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300",children:"Phone number"}),(0,m.jsx)("input",{type:"tel",id:"telPhoneNumber",placeholder:"Phone",value:K,onChange:function(e){return Y(e.target.value)},className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"})]}),(0,m.jsx)("div",{className:"",children:(0,m.jsx)(f,{errorMessage:A,setErrorMessage:L,unsupportedFiles:O,setUnsupportedFiles:T,selectedFiles:M,setSelectedFiles:I,uploadModalRef:F,uploadRef:P,progressRef:E,modalRef:R,modalImageRef:S,fileInputRef:Z,validFiles:N,setValidFiles:w,isOneImage:!0,imageUrl:u})}),(0,m.jsx)("button",{type:"submit",className:"text-white mt-12 bg-brand-green/80 hover:bg-brand-green focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",children:"Submit"})]})})]})},v=function(e){var r=e.handleAddPartner,t=e.data;return(0,m.jsx)(m.Fragment,{children:(0,m.jsxs)("div",{className:"max-w-xs bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700",children:[(0,m.jsx)(o.Z,{src:null==t?void 0:t.image,width:"320px ",height:"200px",objectFit:"cover",loading:"lazy"}),(0,m.jsxs)("div",{className:"p-5",children:[(0,m.jsx)("div",{children:(0,m.jsx)("h6",{className:"mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white",children:null==t?void 0:t.companyName})}),(0,m.jsx)(b,{isEdit:!0,id:null==t?void 0:t.id,imageUrl:null==t?void 0:t.image,email:null==t?void 0:t.email,phone:null==t?void 0:t.phone,handlePartner:function(e,t){return r(e,t)},children:(0,m.jsxs)("button",{className:"inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-brand-green/70 rounded-lg hover:bg-brand-green focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",children:["Edit",(0,m.jsx)("svg",{"aria-hidden":"true",className:"ml-2 -mr-1 w-4 h-4",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:(0,m.jsx)("path",{fillRule:"evenodd",d:"M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z",clipRule:"evenodd"})})]})})]})]})})},_=t(85377),y=t(17737),j=[{name:"Amatungo",sub:[{name:"Cows"},{name:"Goats"},{name:"Pigs"}]},{name:"Ibihingwa",sub:[{name:"Ibijumba"},{name:"Umuceri"},{name:"Imyumbati"}]}],k=function(e){var r,t=e.children,a=n.useState(!1),s=(0,c.Z)(a,2),l=s[0],o=s[1],u=(0,n.useState)([]),f=u[0],g=u[1],p=(0,n.useState)([]),x=p[0],b=p[1],v=(0,n.useState)(""),_=v[0],k=v[1],N=(0,n.useState)([]),w=N[0],Z=N[1],S=(0,n.useState)([]),R=S[0];S[1],(0,n.useEffect)(function(){if(null!=j){var e=j.map(function(e){return e.name});g((0,i.Z)(e))}},[]),(0,n.useEffect)(function(){(null==f?void 0:f.length)!=0&&k(f[0])},[f]),(0,n.useEffect)(function(){null!=_&&j.forEach(function(e){if(e.name===_){var r=e.sub.map(function(e){return e.name});b((0,i.Z)(r))}})},[_]);var E=(r=(0,$.Z)(d().mark(function e(){var r;return d().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:r=new FormData;case 1:case"end":return e.stop()}},e)})),function(){return r.apply(this,arguments)});return(0,m.jsxs)(h.Z,{title:"New Material",toggle:l,setToggle:o,children:[t,(0,m.jsx)("div",{className:"flex flex-col",children:(0,m.jsxs)("form",{onSubmit:function(e){e.preventDefault(),E()},className:"pt-4",children:[(0,m.jsxs)("div",{className:"mb-6",children:[(0,m.jsx)("label",{htmlFor:"materialName",className:"block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300",children:"Name"}),(0,m.jsx)("input",{type:"text",id:"materialName",placeholder:"Name",className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"})]}),(0,m.jsxs)("div",{className:"mb-6",children:[(0,m.jsx)("label",{htmlFor:"main-category",className:"block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300",children:"Main category"}),(0,m.jsx)("select",{value:_,onChange:function(e){k(e.target.value)},id:"main-category",className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",children:f.map(function(e,r){return(0,m.jsx)("option",{value:e,children:e},e+r)})})]}),(0,m.jsxs)("div",{className:"mb-6",children:[(0,m.jsx)("label",{htmlFor:"sub-category",className:"block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300",children:"sub category"}),(0,m.jsx)("select",{id:"sub-category",className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",children:x.map(function(e,r){return(0,m.jsx)("option",{value:e,children:e},e+r+"sub")})})]}),(0,m.jsxs)("div",{className:"mb-6",children:[(0,m.jsx)("label",{htmlFor:"main-content",className:"block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400",children:"Articles "}),(0,m.jsx)(y.ZP,{isMulti:!0,defaultValue:w,onChange:function(e){Z((0,i.Z)(e))},options:R,isSearchable:!0,className:"mt-2"})]}),(0,m.jsx)("button",{type:"submit",className:"text-white mt-12 bg-brand-green/80 hover:bg-brand-green focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",children:"Submit"})]})})]})},N=function(){var e,r,t=(0,n.useState)(""),a=t[0],s=t[1],l=(0,n.useState)([]),o=l[0],$=l[1],c=(0,_.TB)("/api/partners").data;(0,n.useEffect)(function(){var e,r,t,n;null!==(e=c.partners)&&void 0!==e&&null!==(r=e.rows)&&void 0!==r&&r.length&&$(null===(t=c.partners)||void 0===t?void 0:null===(n=t.rows)||void 0===n?void 0:n.filter(function(e){return e.companyName.toLowerCase().includes(a.toLowerCase())}))},[null===(e=c.partners)||void 0===e?void 0:e.rows,a]);var u=function(e,r){r?r&&$(o.map(function(r){return r.id===e.id?e:r})):$(function(r){return[].concat((0,i.Z)(r),[e])})};return(0,n.useEffect)(function(){var e,r;null!==(e=c.partners)&&void 0!==e&&null!==(r=e.rows)&&void 0!==r&&r.length&&$(c.partners.rows)},[null===(r=c.partners)||void 0===r?void 0:r.rows]),(0,m.jsx)(m.Fragment,{children:(0,m.jsx)("div",{children:(0,m.jsxs)("section",{children:[(0,m.jsxs)("header",{className:"bg-white space-y-4 p-4 sm:px-8 sm:py-6 lg:p-4 xl:px-8 xl:py-6",children:[(0,m.jsxs)("div",{className:"flex items-center justify-between",children:[(0,m.jsx)("h2",{className:"font-semibold text-slate-900",children:"Extension Materials"}),(0,m.jsx)(k,{handlePartner:function(e,r){u(e,r)},children:(0,m.jsxs)("button",{className:"hover:bg-brand-green group flex items-center rounded-md bg-brand-green/80 text-white text-sm font-medium pl-2 pr-3 py-2 shadow-sm",children:[(0,m.jsx)("svg",{width:"20",height:"20",fill:"currentColor",className:"mr-2","aria-hidden":"true",children:(0,m.jsx)("path",{d:"M10 5a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-3H6a1 1 0 1 1 0-2h3V6a1 1 0 0 1 1-1Z"})}),"New"]})})]}),(0,m.jsxs)("form",{className:"group relative",children:[(0,m.jsx)("svg",{width:"20",height:"20",fill:"currentColor",className:"absolute left-3 top-1/2 -mt-2.5 text-slate-400 pointer-events-none group-focus-within:text-blue-500","aria-hidden":"true",children:(0,m.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"})}),(0,m.jsx)("input",{value:a,onChange:function(e){return s(e.target.value)},className:"focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-10 ring-1 ring-slate-200 shadow-sm",type:"text","aria-label":"Filter projects",placeholder:"Filter Materials..."})]})]}),(0,m.jsxs)("ul",{className:"bg-slate-50 p-4 sm:px-8 sm:pt-6 sm:pb-8 lg:p-4 xl:px-8 xl:pt-6 xl:pb-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 text-sm leading-6",children:[o.map(function(e,r){return(0,m.jsx)(v,{data:e,handleAddPartner:u},e.id)}),(0,m.jsx)(k,{handlePartner:function(e,r){u(e,r)},children:(0,m.jsx)("li",{className:"flex",children:(0,m.jsxs)("button",{className:"hover:border-blue-500 hover:border-solid hover:bg-white hover:text-blue-500 group w-full flex flex-col items-center justify-center rounded-md border-2 border-dashed border-slate-300 text-sm leading-6 text-slate-900 font-medium py-3",children:[(0,m.jsx)("svg",{className:"group-hover:text-blue-500 mb-1 text-slate-400",width:"20",height:"20",fill:"currentColor","aria-hidden":"true",children:(0,m.jsx)("path",{d:"M10 5a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-3H6a1 1 0 1 1 0-2h3V6a1 1 0 0 1 1-1Z"})}),"New Materials"]})})})]})]})})})},w=!0,Z=function(){return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(s(),{children:(0,m.jsx)("title",{children:"Yean"})}),(0,m.jsx)(l.Z,{children:(0,m.jsx)(N,{})})]})}},18052:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/extension-materials",function(){return t(63004)}])}},function(e){e.O(0,[8247,8795,8100,9601,6737,7737,3389,9774,2888,179],function(){return e(e.s=18052)}),_N_E=e.O()}]);