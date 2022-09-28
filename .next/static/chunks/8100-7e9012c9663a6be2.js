"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8100],{8100:function(e,n,r){r.d(n,{ZP:function(){return Y}});var t=r(67294);/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ function i(e,n,r,t){return new(r||(r=Promise))(function(i,u){function a(e){try{c(t.next(e))}catch(n){u(n)}}function o(e){try{c(t.throw(e))}catch(n){u(n)}}function c(e){var n;e.done?i(e.value):((n=e.value)instanceof r?n:new r(function(e){e(n)})).then(a,o)}c((t=t.apply(e,n||[])).next())})}function u(e,n){var r,t,i,u,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return u={next:o(0),throw:o(1),return:o(2)},"function"==typeof Symbol&&(u[Symbol.iterator]=function(){return this}),u;function o(u){return function(o){return function(u){if(r)throw TypeError("Generator is already executing.");for(;a;)try{if(r=1,t&&(i=2&u[0]?t.return:u[0]?t.throw||((i=t.return)&&i.call(t),0):t.next)&&!(i=i.call(t,u[1])).done)return i;switch(t=0,i&&(u=[2&u[0],i.value]),u[0]){case 0:case 1:i=u;break;case 4:return a.label++,{value:u[1],done:!1};case 5:a.label++,t=u[1],u=[0];continue;case 7:u=a.ops.pop(),a.trys.pop();continue;default:if(!(i=(i=a.trys).length>0&&i[i.length-1])&&(6===u[0]||2===u[0])){a=0;continue}if(3===u[0]&&(!i||u[1]>i[0]&&u[1]<i[3])){a.label=u[1];break}if(6===u[0]&&a.label<i[1]){a.label=i[1],i=u;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(u);break}i[2]&&a.ops.pop(),a.trys.pop();continue}u=n.call(e,a)}catch(o){u=[6,o],t=0}finally{r=i=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,o])}}}var a,o,c,f=function(){},s=f(),l=Object,$=function(e){return e===s},d=function(e){return"function"==typeof e},v=function(e,n){return l.assign({},e,n)},_="undefined",h=function(){return typeof window!=_},g=new WeakMap,p=0,b=function(e){var n,r,t=typeof e,i=e&&e.constructor,u=i==Date;if(l(e)!==e||u||i==RegExp)n=u?e.toJSON():"symbol"==t?e.toString():"string"==t?JSON.stringify(e):""+e;else{if(n=g.get(e))return n;if(n=++p+"~",g.set(e,n),i==Array){for(r=0,n="@";r<e.length;r++)n+=b(e[r])+",";g.set(e,n)}if(i==l){n="#";for(var a=l.keys(e).sort();!$(r=a.pop());)$(e[r])||(n+=r+":"+b(e[r])+",");g.set(e,n)}}return n},y=!0,w=function(){return y},E=h(),R=typeof document!=_,k=E&&window.addEventListener?window.addEventListener.bind(window):f,m=R?document.addEventListener.bind(document):f,O=E&&window.removeEventListener?window.removeEventListener.bind(window):f,V=R?document.removeEventListener.bind(document):f,C=function(){var e=R&&document.visibilityState;return $(e)||"hidden"!==e},S={initFocus:function(e){return m("visibilitychange",e),k("focus",e),function(){V("visibilitychange",e),O("focus",e)}},initReconnect:function(e){var n=function(){y=!0,e()},r=function(){y=!1};return k("online",n),k("offline",r),function(){O("online",n),O("offline",r)}}},I=!h()||"Deno"in window,x=I?t.useEffect:t.useLayoutEffect,L="undefined"!=typeof navigator&&navigator.connection,D=!I&&L&&(["slow-2g","2g"].includes(L.effectiveType)||L.saveData),P=function(e){if(d(e))try{e=e()}catch(n){e=""}var r=[].concat(e),t=(e="string"==typeof e?e:(Array.isArray(e)?e.length:e)?b(e):"")?"$swr$"+e:"";return[e,r,t]},F=new WeakMap,T=function(e,n,r,t,i,u,a){void 0===a&&(a=!0);var o=F.get(e),c=o[0],f=o[1],s=o[3],l=c[n],$=f[n];if(a&&$)for(var d=0;d<$.length;++d)$[d](r,t,i);return u&&(delete s[n],l&&l[0])?l[0](2).then(function(){return e.get(n)}):e.get(n)},A=0,N=function(){return++A},q=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return i(void 0,void 0,void 0,function(){var n,r,t,i,a,o,c,f,l,_,h,g,p,b,y,w,E,R,k,m,O;return u(this,function(u){switch(u.label){case 0:if(n=e[0],r=e[1],t=e[2],o=!!$((a="boolean"==typeof(i=e[3])?{revalidate:i}:i||{}).populateCache)||a.populateCache,c=!1!==a.revalidate,f=!1!==a.rollbackOnError,l=a.optimisticData,h=(_=P(r))[0],g=_[2],!h)return[2];if(b=(p=F.get(n))[2],e.length<3)return[2,T(n,h,n.get(h),s,s,c,!0)];if(y=t,E=N(),b[h]=[E,0],R=!$(l),k=n.get(h),R&&(m=d(l)?l(k):l,n.set(h,m),T(n,h,m)),d(y))try{y=y(n.get(h))}catch(V){w=V}if(!(y&&d(y.then)))return[3,2];return[4,y.catch(function(e){w=e})];case 1:if(y=u.sent(),E!==b[h][0]){if(w)throw w;return[2,y]}w&&R&&f&&(o=!0,y=k,n.set(h,k)),u.label=2;case 2:return o&&(w||(d(o)&&(y=o(y,k)),n.set(h,y)),n.set(g,v(n.get(g),{error:w}))),b[h][1]=N(),[4,T(n,h,y,w,s,c,!!o)];case 3:if(O=u.sent(),w)throw w;return[2,o?O:y]}})})},W=function(e,n){for(var r in e)e[r][0]&&e[r][0](n)},G=function(e,n){if(!F.has(e)){var r=v(S,n),t={},i=q.bind(s,e),u=f;if(F.set(e,[t,{},{},{},i]),!I){var a=r.initFocus(setTimeout.bind(s,W.bind(s,t,0))),o=r.initReconnect(setTimeout.bind(s,W.bind(s,t,1)));u=function(){a&&a(),o&&o(),F.delete(e)}}return[e,i,u]}return[e,F.get(e)[4]]},H=function(e,n,r,t,i){var u=r.errorRetryCount,a=i.retryCount,o=~~((Math.random()+.5)*(1<<(a<8?a:8)))*r.errorRetryInterval;($(u)||!(a>u))&&setTimeout(t,o,i)},J=G(new Map),M=J[0],Z=v({onLoadingSlow:f,onSuccess:f,onError:f,onErrorRetry:H,onDiscarded:f,revalidateOnFocus:!0,revalidateOnReconnect:!0,revalidateIfStale:!0,shouldRetryOnError:!0,errorRetryInterval:D?1e4:5e3,focusThrottleInterval:5e3,dedupingInterval:2e3,loadingTimeout:D?5e3:3e3,compare:function(e,n){return b(e)==b(n)},isPaused:function(){return!1},cache:M,mutate:J[1],fallback:{}},{isOnline:w,isVisible:C}),j=function(e,n){var r=v(e,n);if(n){var t=e.use,i=e.fallback,u=n.use,a=n.fallback;t&&u&&(r.use=t.concat(u)),i&&a&&(r.fallback=v(i,a))}return r},z=(0,t.createContext)({}),B=function(e){var n=e.value,r=j((0,t.useContext)(z),n),i=n&&n.provider,u=(0,t.useState)(function(){return i?G(i(r.cache||M),n):s})[0];return u&&(r.cache=u[0],r.mutate=u[1]),x(function(){return u?u[2]:s},[]),(0,t.createElement)(z.Provider,v(e,{value:r}))},K=function(e,n){var r=(0,t.useState)({})[1],i=(0,t.useRef)(e),u=(0,t.useRef)({data:!1,error:!1,isValidating:!1}),a=(0,t.useCallback)(function(e){var t=!1,a=i.current;for(var o in e){var c=o;a[c]!==e[c]&&(a[c]=e[c],u.current[c]&&(t=!0))}t&&!n.current&&r({})},[]);return x(function(){i.current=e}),[i,u.current,a]},Q=function(e,n,r){var t=n[e]||(n[e]=[]);return t.push(r),function(){var e=t.indexOf(r);e>=0&&(t[e]=t[t.length-1],t.pop())}},U={dedupe:!0},X=function(e,n,r){var a=r.cache,o=r.compare,c=r.fallbackData,f=r.suspense,l=r.revalidateOnMount,g=r.refreshInterval,p=r.refreshWhenHidden,b=r.refreshWhenOffline,y=F.get(a),w=y[0],E=y[1],R=y[2],k=y[3],m=P(e),O=m[0],V=m[1],C=m[2],S=(0,t.useRef)(!1),L=(0,t.useRef)(!1),D=(0,t.useRef)(O),A=(0,t.useRef)(n),W=(0,t.useRef)(r),G=function(){return W.current},H=function(){return G().isVisible()&&G().isOnline()},J=function(e){return a.set(C,v(a.get(C),e))},M=a.get(O),Z=$(c)?r.fallback[O]:c,j=$(M)?Z:M,z=a.get(C)||{},B=z.error,X=!S.current,Y=function(){return X&&!$(l)?l:!G().isPaused()&&(f?!$(j)&&r.revalidateIfStale:$(j)||r.revalidateIfStale)},ee=!!O&&!!n&&(!!z.isValidating||X&&Y()),en=K({data:j,error:B,isValidating:ee},L),er=en[0],et=en[1],ei=en[2],eu=(0,t.useCallback)(function(e){return i(void 0,void 0,void 0,function(){var n,t,i,c,f,l,v,_,h,g,p,b,y;return u(this,function(u){switch(u.label){case 0:if(n=A.current,!O||!n||L.current||G().isPaused())return[2,!1];c=!0,f=e||{},l=!k[O]||!f.dedupe,v=function(){return!L.current&&O===D.current&&S.current},_=function(){var e=k[O];e&&e[1]===i&&delete k[O]},h={isValidating:!1},g=function(){J({isValidating:!1}),v()&&ei(h)},J({isValidating:!0}),ei({isValidating:!0}),u.label=1;case 1:return u.trys.push([1,3,,4]),l&&(T(a,O,er.current.data,er.current.error,!0),r.loadingTimeout&&!a.get(O)&&setTimeout(function(){c&&v()&&G().onLoadingSlow(O,r)},r.loadingTimeout),k[O]=[n.apply(void 0,V),N()]),t=(y=k[O])[0],i=y[1],[4,t];case 2:if(t=u.sent(),l&&setTimeout(_,r.dedupingInterval),!k[O]||k[O][1]!==i)return l&&v()&&G().onDiscarded(O),[2,!1];if(J({error:s}),h.error=s,!$(p=R[O])&&(i<=p[0]||i<=p[1]||0===p[1]))return g(),l&&v()&&G().onDiscarded(O),[2,!1];return o(er.current.data,t)?h.data=er.current.data:h.data=t,o(a.get(O),t)||a.set(O,t),l&&v()&&G().onSuccess(t,O,r),[3,4];case 3:return b=u.sent(),_(),!G().isPaused()&&(J({error:b}),h.error=b,l&&v()&&(G().onError(b,O,r),("boolean"==typeof r.shouldRetryOnError&&r.shouldRetryOnError||d(r.shouldRetryOnError)&&r.shouldRetryOnError(b))&&H()&&G().onErrorRetry(b,O,r,eu,{retryCount:(f.retryCount||0)+1,dedupe:!0}))),[3,4];case 4:return c=!1,g(),v()&&l&&T(a,O,h.data,h.error,!1),[2,!0]}})})},[O]),ea=(0,t.useCallback)(q.bind(s,a,function(){return D.current}),[]);if(x(function(){A.current=n,W.current=r}),x(function(){if(O){var e,n=O!==D.current,r=eu.bind(s,U),t=0,i=function(e){if(0==e){var n=Date.now();G().revalidateOnFocus&&n>t&&H()&&(t=n+G().focusThrottleInterval,r())}else if(1==e)G().revalidateOnReconnect&&H()&&r();else if(2==e)return eu()},u=Q(O,E,function(e,n,r){ei(v({error:n,isValidating:r},o(er.current.data,e)?s:{data:e}))}),a=Q(O,w,i);return L.current=!1,D.current=O,S.current=!0,n&&ei({data:j,error:B,isValidating:ee}),Y()&&($(j)||I?r():(e=r,h()&&typeof window.requestAnimationFrame!=_?window.requestAnimationFrame(e):setTimeout(e,1))),function(){L.current=!0,u(),a()}}},[O,eu]),x(function(){var e;function n(){var n=d(g)?g(j):g;n&&-1!==e&&(e=setTimeout(r,n))}function r(){!er.current.error&&(p||G().isVisible())&&(b||G().isOnline())?eu(U).then(n):n()}return n(),function(){e&&(clearTimeout(e),e=-1)}},[g,p,b,eu]),(0,t.useDebugValue)(j),f&&$(j)&&O)throw A.current=n,W.current=r,L.current=!1,$(B)?eu(U):B;return{mutate:ea,get data(){return et.data=!0,j},get error(){return et.error=!0,B},get isValidating(){return et.isValidating=!0,ee}}};l.defineProperty(B,"default",{value:Z});var Y=(a=X,function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];var r,i=v(Z,(0,t.useContext)(z)),u=(r=e,d(r[1])?[r[0],r[1],r[2]||{}]:[r[0],null,(null===r[1]?r[2]:r[1])||{}]),o=u[0],c=u[1],f=j(i,u[2]),s=a,l=f.use;if(l)for(var $=l.length;$-- >0;)s=l[$](s);return s(o,c||f.fetcher,f)})}}]);