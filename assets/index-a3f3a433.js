(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();const zy="modulepreload",Gy=function(t,e){return new URL(t,e).href},Ap={},Cp=function(e,n,i){if(!n||n.length===0)return e();const r=document.getElementsByTagName("link");return Promise.all(n.map(o=>{if(o=Gy(o,i),o in Ap)return;Ap[o]=!0;const s=o.endsWith(".css"),a=s?'[rel="stylesheet"]':"";if(!!i)for(let c=r.length-1;c>=0;c--){const d=r[c];if(d.href===o&&(!s||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${a}`))return;const u=document.createElement("link");if(u.rel=s?"stylesheet":zy,s||(u.as="script",u.crossOrigin=""),u.href=o,document.head.appendChild(u),s)return new Promise((c,d)=>{u.addEventListener("load",c),u.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>e()).catch(o=>{const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=o,window.dispatchEvent(s),!s.defaultPrevented)throw o})},Vy=(t,e)=>{const n=t[e];return n?typeof n=="function"?n():Promise.resolve(n):new Promise((i,r)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(r.bind(null,new Error("Unknown variable dynamic import: "+e)))})};function Wy(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var B0={exports:{}},Nu={},H0={exports:{}},$e={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ma=Symbol.for("react.element"),Xy=Symbol.for("react.portal"),$y=Symbol.for("react.fragment"),jy=Symbol.for("react.strict_mode"),qy=Symbol.for("react.profiler"),Yy=Symbol.for("react.provider"),Zy=Symbol.for("react.context"),Ky=Symbol.for("react.forward_ref"),Qy=Symbol.for("react.suspense"),Jy=Symbol.for("react.memo"),ex=Symbol.for("react.lazy"),Rp=Symbol.iterator;function tx(t){return t===null||typeof t!="object"?null:(t=Rp&&t[Rp]||t["@@iterator"],typeof t=="function"?t:null)}var z0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},G0=Object.assign,V0={};function vs(t,e,n){this.props=t,this.context=e,this.refs=V0,this.updater=n||z0}vs.prototype.isReactComponent={};vs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};vs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function W0(){}W0.prototype=vs.prototype;function ih(t,e,n){this.props=t,this.context=e,this.refs=V0,this.updater=n||z0}var rh=ih.prototype=new W0;rh.constructor=ih;G0(rh,vs.prototype);rh.isPureReactComponent=!0;var bp=Array.isArray,X0=Object.prototype.hasOwnProperty,oh={current:null},$0={key:!0,ref:!0,__self:!0,__source:!0};function j0(t,e,n){var i,r={},o=null,s=null;if(e!=null)for(i in e.ref!==void 0&&(s=e.ref),e.key!==void 0&&(o=""+e.key),e)X0.call(e,i)&&!$0.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Ma,type:t,key:o,ref:s,props:r,_owner:oh.current}}function nx(t,e){return{$$typeof:Ma,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function sh(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ma}function ix(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Pp=/\/+/g;function Ec(t,e){return typeof t=="object"&&t!==null&&t.key!=null?ix(""+t.key):e.toString(36)}function Ll(t,e,n,i,r){var o=typeof t;(o==="undefined"||o==="boolean")&&(t=null);var s=!1;if(t===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(t.$$typeof){case Ma:case Xy:s=!0}}if(s)return s=t,r=r(s),t=i===""?"."+Ec(s,0):i,bp(r)?(n="",t!=null&&(n=t.replace(Pp,"$&/")+"/"),Ll(r,e,n,"",function(u){return u})):r!=null&&(sh(r)&&(r=nx(r,n+(!r.key||s&&s.key===r.key?"":(""+r.key).replace(Pp,"$&/")+"/")+t)),e.push(r)),1;if(s=0,i=i===""?".":i+":",bp(t))for(var a=0;a<t.length;a++){o=t[a];var l=i+Ec(o,a);s+=Ll(o,e,n,l,r)}else if(l=tx(t),typeof l=="function")for(t=l.call(t),a=0;!(o=t.next()).done;)o=o.value,l=i+Ec(o,a++),s+=Ll(o,e,n,l,r);else if(o==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return s}function Fa(t,e,n){if(t==null)return t;var i=[],r=0;return Ll(t,i,"","",function(o){return e.call(n,o,r++)}),i}function rx(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var fn={current:null},Nl={transition:null},ox={ReactCurrentDispatcher:fn,ReactCurrentBatchConfig:Nl,ReactCurrentOwner:oh};$e.Children={map:Fa,forEach:function(t,e,n){Fa(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Fa(t,function(){e++}),e},toArray:function(t){return Fa(t,function(e){return e})||[]},only:function(t){if(!sh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};$e.Component=vs;$e.Fragment=$y;$e.Profiler=qy;$e.PureComponent=ih;$e.StrictMode=jy;$e.Suspense=Qy;$e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ox;$e.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=G0({},t.props),r=t.key,o=t.ref,s=t._owner;if(e!=null){if(e.ref!==void 0&&(o=e.ref,s=oh.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)X0.call(e,l)&&!$0.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:Ma,type:t.type,key:r,ref:o,props:i,_owner:s}};$e.createContext=function(t){return t={$$typeof:Zy,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Yy,_context:t},t.Consumer=t};$e.createElement=j0;$e.createFactory=function(t){var e=j0.bind(null,t);return e.type=t,e};$e.createRef=function(){return{current:null}};$e.forwardRef=function(t){return{$$typeof:Ky,render:t}};$e.isValidElement=sh;$e.lazy=function(t){return{$$typeof:ex,_payload:{_status:-1,_result:t},_init:rx}};$e.memo=function(t,e){return{$$typeof:Jy,type:t,compare:e===void 0?null:e}};$e.startTransition=function(t){var e=Nl.transition;Nl.transition={};try{t()}finally{Nl.transition=e}};$e.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};$e.useCallback=function(t,e){return fn.current.useCallback(t,e)};$e.useContext=function(t){return fn.current.useContext(t)};$e.useDebugValue=function(){};$e.useDeferredValue=function(t){return fn.current.useDeferredValue(t)};$e.useEffect=function(t,e){return fn.current.useEffect(t,e)};$e.useId=function(){return fn.current.useId()};$e.useImperativeHandle=function(t,e,n){return fn.current.useImperativeHandle(t,e,n)};$e.useInsertionEffect=function(t,e){return fn.current.useInsertionEffect(t,e)};$e.useLayoutEffect=function(t,e){return fn.current.useLayoutEffect(t,e)};$e.useMemo=function(t,e){return fn.current.useMemo(t,e)};$e.useReducer=function(t,e,n){return fn.current.useReducer(t,e,n)};$e.useRef=function(t){return fn.current.useRef(t)};$e.useState=function(t){return fn.current.useState(t)};$e.useSyncExternalStore=function(t,e,n){return fn.current.useSyncExternalStore(t,e,n)};$e.useTransition=function(){return fn.current.useTransition()};$e.version="18.2.0";H0.exports=$e;var Ye=H0.exports;const yr=Wy(Ye);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sx=Ye,ax=Symbol.for("react.element"),lx=Symbol.for("react.fragment"),ux=Object.prototype.hasOwnProperty,cx=sx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,fx={key:!0,ref:!0,__self:!0,__source:!0};function q0(t,e,n){var i,r={},o=null,s=null;n!==void 0&&(o=""+n),e.key!==void 0&&(o=""+e.key),e.ref!==void 0&&(s=e.ref);for(i in e)ux.call(e,i)&&!fx.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:ax,type:t,key:o,ref:s,props:r,_owner:cx.current}}Nu.Fragment=lx;Nu.jsx=q0;Nu.jsxs=q0;B0.exports=Nu;var Ie=B0.exports;var Df={},Y0={exports:{}},Pn={},Z0={exports:{}},K0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(N,I){var G=N.length;N.push(I);e:for(;0<G;){var j=G-1>>>1,Z=N[j];if(0<r(Z,I))N[j]=I,N[G]=Z,G=j;else break e}}function n(N){return N.length===0?null:N[0]}function i(N){if(N.length===0)return null;var I=N[0],G=N.pop();if(G!==I){N[0]=G;e:for(var j=0,Z=N.length,W=Z>>>1;j<W;){var q=2*(j+1)-1,se=N[q],ce=q+1,he=N[ce];if(0>r(se,G))ce<Z&&0>r(he,se)?(N[j]=he,N[ce]=G,j=ce):(N[j]=se,N[q]=G,j=q);else if(ce<Z&&0>r(he,G))N[j]=he,N[ce]=G,j=ce;else break e}}return I}function r(N,I){var G=N.sortIndex-I.sortIndex;return G!==0?G:N.id-I.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;t.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();t.unstable_now=function(){return s.now()-a}}var l=[],u=[],c=1,d=null,f=3,p=!1,_=!1,y=!1,g=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(N){for(var I=n(u);I!==null;){if(I.callback===null)i(u);else if(I.startTime<=N)i(u),I.sortIndex=I.expirationTime,e(l,I);else break;I=n(u)}}function x(N){if(y=!1,m(N),!_)if(n(l)!==null)_=!0,X(R);else{var I=n(u);I!==null&&Y(x,I.startTime-N)}}function R(N,I){_=!1,y&&(y=!1,h(L),L=-1),p=!0;var G=f;try{for(m(I),d=n(l);d!==null&&(!(d.expirationTime>I)||N&&!F());){var j=d.callback;if(typeof j=="function"){d.callback=null,f=d.priorityLevel;var Z=j(d.expirationTime<=I);I=t.unstable_now(),typeof Z=="function"?d.callback=Z:d===n(l)&&i(l),m(I)}else i(l);d=n(l)}if(d!==null)var W=!0;else{var q=n(u);q!==null&&Y(x,q.startTime-I),W=!1}return W}finally{d=null,f=G,p=!1}}var T=!1,M=null,L=-1,E=5,A=-1;function F(){return!(t.unstable_now()-A<E)}function $(){if(M!==null){var N=t.unstable_now();A=N;var I=!0;try{I=M(!0,N)}finally{I?te():(T=!1,M=null)}}else T=!1}var te;if(typeof v=="function")te=function(){v($)};else if(typeof MessageChannel<"u"){var P=new MessageChannel,O=P.port2;P.port1.onmessage=$,te=function(){O.postMessage(null)}}else te=function(){g($,0)};function X(N){M=N,T||(T=!0,te())}function Y(N,I){L=g(function(){N(t.unstable_now())},I)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(N){N.callback=null},t.unstable_continueExecution=function(){_||p||(_=!0,X(R))},t.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<N?Math.floor(1e3/N):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(N){switch(f){case 1:case 2:case 3:var I=3;break;default:I=f}var G=f;f=I;try{return N()}finally{f=G}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(N,I){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var G=f;f=N;try{return I()}finally{f=G}},t.unstable_scheduleCallback=function(N,I,G){var j=t.unstable_now();switch(typeof G=="object"&&G!==null?(G=G.delay,G=typeof G=="number"&&0<G?j+G:j):G=j,N){case 1:var Z=-1;break;case 2:Z=250;break;case 5:Z=1073741823;break;case 4:Z=1e4;break;default:Z=5e3}return Z=G+Z,N={id:c++,callback:I,priorityLevel:N,startTime:G,expirationTime:Z,sortIndex:-1},G>j?(N.sortIndex=G,e(u,N),n(l)===null&&N===n(u)&&(y?(h(L),L=-1):y=!0,Y(x,G-j))):(N.sortIndex=Z,e(l,N),_||p||(_=!0,X(R))),N},t.unstable_shouldYield=F,t.unstable_wrapCallback=function(N){var I=f;return function(){var G=f;f=I;try{return N.apply(this,arguments)}finally{f=G}}}})(K0);Z0.exports=K0;var dx=Z0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Q0=Ye,bn=dx;function ee(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var J0=new Set,ta={};function ao(t,e){es(t,e),es(t+"Capture",e)}function es(t,e){for(ta[t]=e,t=0;t<e.length;t++)J0.add(e[t])}var ki=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Uf=Object.prototype.hasOwnProperty,hx=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Lp={},Np={};function px(t){return Uf.call(Np,t)?!0:Uf.call(Lp,t)?!1:hx.test(t)?Np[t]=!0:(Lp[t]=!0,!1)}function mx(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function gx(t,e,n,i){if(e===null||typeof e>"u"||mx(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function dn(t,e,n,i,r,o,s){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=o,this.removeEmptyString=s}var Wt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Wt[t]=new dn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Wt[e]=new dn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Wt[t]=new dn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Wt[t]=new dn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Wt[t]=new dn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Wt[t]=new dn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Wt[t]=new dn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Wt[t]=new dn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Wt[t]=new dn(t,5,!1,t.toLowerCase(),null,!1,!1)});var ah=/[\-:]([a-z])/g;function lh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(ah,lh);Wt[e]=new dn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(ah,lh);Wt[e]=new dn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(ah,lh);Wt[e]=new dn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Wt[t]=new dn(t,1,!1,t.toLowerCase(),null,!1,!1)});Wt.xlinkHref=new dn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Wt[t]=new dn(t,1,!1,t.toLowerCase(),null,!0,!0)});function uh(t,e,n,i){var r=Wt.hasOwnProperty(e)?Wt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(gx(e,n,r,i)&&(n=null),i||r===null?px(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Vi=Q0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Oa=Symbol.for("react.element"),Po=Symbol.for("react.portal"),Lo=Symbol.for("react.fragment"),ch=Symbol.for("react.strict_mode"),Ff=Symbol.for("react.profiler"),ev=Symbol.for("react.provider"),tv=Symbol.for("react.context"),fh=Symbol.for("react.forward_ref"),Of=Symbol.for("react.suspense"),kf=Symbol.for("react.suspense_list"),dh=Symbol.for("react.memo"),Ji=Symbol.for("react.lazy"),nv=Symbol.for("react.offscreen"),Ip=Symbol.iterator;function ws(t){return t===null||typeof t!="object"?null:(t=Ip&&t[Ip]||t["@@iterator"],typeof t=="function"?t:null)}var yt=Object.assign,Mc;function Os(t){if(Mc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Mc=e&&e[1]||""}return`
`+Mc+t}var Tc=!1;function wc(t,e){if(!t||Tc)return"";Tc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){i=u}t.call(e.prototype)}else{try{throw Error()}catch(u){i=u}t()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),o=i.stack.split(`
`),s=r.length-1,a=o.length-1;1<=s&&0<=a&&r[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(r[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||r[s]!==o[a]){var l=`
`+r[s].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=s&&0<=a);break}}}finally{Tc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Os(t):""}function vx(t){switch(t.tag){case 5:return Os(t.type);case 16:return Os("Lazy");case 13:return Os("Suspense");case 19:return Os("SuspenseList");case 0:case 2:case 15:return t=wc(t.type,!1),t;case 11:return t=wc(t.type.render,!1),t;case 1:return t=wc(t.type,!0),t;default:return""}}function Bf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Lo:return"Fragment";case Po:return"Portal";case Ff:return"Profiler";case ch:return"StrictMode";case Of:return"Suspense";case kf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case tv:return(t.displayName||"Context")+".Consumer";case ev:return(t._context.displayName||"Context")+".Provider";case fh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case dh:return e=t.displayName||null,e!==null?e:Bf(t.type)||"Memo";case Ji:e=t._payload,t=t._init;try{return Bf(t(e))}catch{}}return null}function _x(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Bf(e);case 8:return e===ch?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function xr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function iv(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function yx(t){var e=iv(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,o=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(s){i=""+s,o.call(this,s)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(s){i=""+s},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ka(t){t._valueTracker||(t._valueTracker=yx(t))}function rv(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=iv(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Kl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Hf(t,e){var n=e.checked;return yt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Dp(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=xr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function ov(t,e){e=e.checked,e!=null&&uh(t,"checked",e,!1)}function zf(t,e){ov(t,e);var n=xr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Gf(t,e.type,n):e.hasOwnProperty("defaultValue")&&Gf(t,e.type,xr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Up(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Gf(t,e,n){(e!=="number"||Kl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ks=Array.isArray;function $o(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+xr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Vf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ee(91));return yt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Fp(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ee(92));if(ks(n)){if(1<n.length)throw Error(ee(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:xr(n)}}function sv(t,e){var n=xr(e.value),i=xr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Op(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function av(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Wf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?av(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ba,lv=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ba=Ba||document.createElement("div"),Ba.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ba.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function na(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Gs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},xx=["Webkit","ms","Moz","O"];Object.keys(Gs).forEach(function(t){xx.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Gs[e]=Gs[t]})});function uv(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Gs.hasOwnProperty(t)&&Gs[t]?(""+e).trim():e+"px"}function cv(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=uv(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var Sx=yt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Xf(t,e){if(e){if(Sx[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ee(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ee(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ee(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ee(62))}}function $f(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var jf=null;function hh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var qf=null,jo=null,qo=null;function kp(t){if(t=Aa(t)){if(typeof qf!="function")throw Error(ee(280));var e=t.stateNode;e&&(e=Ou(e),qf(t.stateNode,t.type,e))}}function fv(t){jo?qo?qo.push(t):qo=[t]:jo=t}function dv(){if(jo){var t=jo,e=qo;if(qo=jo=null,kp(t),e)for(t=0;t<e.length;t++)kp(e[t])}}function hv(t,e){return t(e)}function pv(){}var Ac=!1;function mv(t,e,n){if(Ac)return t(e,n);Ac=!0;try{return hv(t,e,n)}finally{Ac=!1,(jo!==null||qo!==null)&&(pv(),dv())}}function ia(t,e){var n=t.stateNode;if(n===null)return null;var i=Ou(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ee(231,e,typeof n));return n}var Yf=!1;if(ki)try{var As={};Object.defineProperty(As,"passive",{get:function(){Yf=!0}}),window.addEventListener("test",As,As),window.removeEventListener("test",As,As)}catch{Yf=!1}function Ex(t,e,n,i,r,o,s,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var Vs=!1,Ql=null,Jl=!1,Zf=null,Mx={onError:function(t){Vs=!0,Ql=t}};function Tx(t,e,n,i,r,o,s,a,l){Vs=!1,Ql=null,Ex.apply(Mx,arguments)}function wx(t,e,n,i,r,o,s,a,l){if(Tx.apply(this,arguments),Vs){if(Vs){var u=Ql;Vs=!1,Ql=null}else throw Error(ee(198));Jl||(Jl=!0,Zf=u)}}function lo(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function gv(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Bp(t){if(lo(t)!==t)throw Error(ee(188))}function Ax(t){var e=t.alternate;if(!e){if(e=lo(t),e===null)throw Error(ee(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var o=r.alternate;if(o===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===o.child){for(o=r.child;o;){if(o===n)return Bp(r),t;if(o===i)return Bp(r),e;o=o.sibling}throw Error(ee(188))}if(n.return!==i.return)n=r,i=o;else{for(var s=!1,a=r.child;a;){if(a===n){s=!0,n=r,i=o;break}if(a===i){s=!0,i=r,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,i=r;break}if(a===i){s=!0,i=o,n=r;break}a=a.sibling}if(!s)throw Error(ee(189))}}if(n.alternate!==i)throw Error(ee(190))}if(n.tag!==3)throw Error(ee(188));return n.stateNode.current===n?t:e}function vv(t){return t=Ax(t),t!==null?_v(t):null}function _v(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=_v(t);if(e!==null)return e;t=t.sibling}return null}var yv=bn.unstable_scheduleCallback,Hp=bn.unstable_cancelCallback,Cx=bn.unstable_shouldYield,Rx=bn.unstable_requestPaint,Tt=bn.unstable_now,bx=bn.unstable_getCurrentPriorityLevel,ph=bn.unstable_ImmediatePriority,xv=bn.unstable_UserBlockingPriority,eu=bn.unstable_NormalPriority,Px=bn.unstable_LowPriority,Sv=bn.unstable_IdlePriority,Iu=null,yi=null;function Lx(t){if(yi&&typeof yi.onCommitFiberRoot=="function")try{yi.onCommitFiberRoot(Iu,t,void 0,(t.current.flags&128)===128)}catch{}}var ri=Math.clz32?Math.clz32:Dx,Nx=Math.log,Ix=Math.LN2;function Dx(t){return t>>>=0,t===0?32:31-(Nx(t)/Ix|0)|0}var Ha=64,za=4194304;function Bs(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function tu(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,o=t.pingedLanes,s=n&268435455;if(s!==0){var a=s&~r;a!==0?i=Bs(a):(o&=s,o!==0&&(i=Bs(o)))}else s=n&~r,s!==0?i=Bs(s):o!==0&&(i=Bs(o));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,o=e&-e,r>=o||r===16&&(o&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-ri(e),r=1<<n,i|=t[n],e&=~r;return i}function Ux(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Fx(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,o=t.pendingLanes;0<o;){var s=31-ri(o),a=1<<s,l=r[s];l===-1?(!(a&n)||a&i)&&(r[s]=Ux(a,e)):l<=e&&(t.expiredLanes|=a),o&=~a}}function Kf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Ev(){var t=Ha;return Ha<<=1,!(Ha&4194240)&&(Ha=64),t}function Cc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ta(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-ri(e),t[e]=n}function Ox(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-ri(n),o=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~o}}function mh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-ri(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var et=0;function Mv(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Tv,gh,wv,Av,Cv,Qf=!1,Ga=[],lr=null,ur=null,cr=null,ra=new Map,oa=new Map,nr=[],kx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function zp(t,e){switch(t){case"focusin":case"focusout":lr=null;break;case"dragenter":case"dragleave":ur=null;break;case"mouseover":case"mouseout":cr=null;break;case"pointerover":case"pointerout":ra.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":oa.delete(e.pointerId)}}function Cs(t,e,n,i,r,o){return t===null||t.nativeEvent!==o?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:o,targetContainers:[r]},e!==null&&(e=Aa(e),e!==null&&gh(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function Bx(t,e,n,i,r){switch(e){case"focusin":return lr=Cs(lr,t,e,n,i,r),!0;case"dragenter":return ur=Cs(ur,t,e,n,i,r),!0;case"mouseover":return cr=Cs(cr,t,e,n,i,r),!0;case"pointerover":var o=r.pointerId;return ra.set(o,Cs(ra.get(o)||null,t,e,n,i,r)),!0;case"gotpointercapture":return o=r.pointerId,oa.set(o,Cs(oa.get(o)||null,t,e,n,i,r)),!0}return!1}function Rv(t){var e=Hr(t.target);if(e!==null){var n=lo(e);if(n!==null){if(e=n.tag,e===13){if(e=gv(n),e!==null){t.blockedOn=e,Cv(t.priority,function(){wv(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Il(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Jf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);jf=i,n.target.dispatchEvent(i),jf=null}else return e=Aa(n),e!==null&&gh(e),t.blockedOn=n,!1;e.shift()}return!0}function Gp(t,e,n){Il(t)&&n.delete(e)}function Hx(){Qf=!1,lr!==null&&Il(lr)&&(lr=null),ur!==null&&Il(ur)&&(ur=null),cr!==null&&Il(cr)&&(cr=null),ra.forEach(Gp),oa.forEach(Gp)}function Rs(t,e){t.blockedOn===e&&(t.blockedOn=null,Qf||(Qf=!0,bn.unstable_scheduleCallback(bn.unstable_NormalPriority,Hx)))}function sa(t){function e(r){return Rs(r,t)}if(0<Ga.length){Rs(Ga[0],t);for(var n=1;n<Ga.length;n++){var i=Ga[n];i.blockedOn===t&&(i.blockedOn=null)}}for(lr!==null&&Rs(lr,t),ur!==null&&Rs(ur,t),cr!==null&&Rs(cr,t),ra.forEach(e),oa.forEach(e),n=0;n<nr.length;n++)i=nr[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<nr.length&&(n=nr[0],n.blockedOn===null);)Rv(n),n.blockedOn===null&&nr.shift()}var Yo=Vi.ReactCurrentBatchConfig,nu=!0;function zx(t,e,n,i){var r=et,o=Yo.transition;Yo.transition=null;try{et=1,vh(t,e,n,i)}finally{et=r,Yo.transition=o}}function Gx(t,e,n,i){var r=et,o=Yo.transition;Yo.transition=null;try{et=4,vh(t,e,n,i)}finally{et=r,Yo.transition=o}}function vh(t,e,n,i){if(nu){var r=Jf(t,e,n,i);if(r===null)Oc(t,e,i,iu,n),zp(t,i);else if(Bx(r,t,e,n,i))i.stopPropagation();else if(zp(t,i),e&4&&-1<kx.indexOf(t)){for(;r!==null;){var o=Aa(r);if(o!==null&&Tv(o),o=Jf(t,e,n,i),o===null&&Oc(t,e,i,iu,n),o===r)break;r=o}r!==null&&i.stopPropagation()}else Oc(t,e,i,null,n)}}var iu=null;function Jf(t,e,n,i){if(iu=null,t=hh(i),t=Hr(t),t!==null)if(e=lo(t),e===null)t=null;else if(n=e.tag,n===13){if(t=gv(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return iu=t,null}function bv(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(bx()){case ph:return 1;case xv:return 4;case eu:case Px:return 16;case Sv:return 536870912;default:return 16}default:return 16}}var rr=null,_h=null,Dl=null;function Pv(){if(Dl)return Dl;var t,e=_h,n=e.length,i,r="value"in rr?rr.value:rr.textContent,o=r.length;for(t=0;t<n&&e[t]===r[t];t++);var s=n-t;for(i=1;i<=s&&e[n-i]===r[o-i];i++);return Dl=r.slice(t,1<i?1-i:void 0)}function Ul(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Va(){return!0}function Vp(){return!1}function Ln(t){function e(n,i,r,o,s){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Va:Vp,this.isPropagationStopped=Vp,this}return yt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Va)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Va)},persist:function(){},isPersistent:Va}),e}var _s={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},yh=Ln(_s),wa=yt({},_s,{view:0,detail:0}),Vx=Ln(wa),Rc,bc,bs,Du=yt({},wa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:xh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==bs&&(bs&&t.type==="mousemove"?(Rc=t.screenX-bs.screenX,bc=t.screenY-bs.screenY):bc=Rc=0,bs=t),Rc)},movementY:function(t){return"movementY"in t?t.movementY:bc}}),Wp=Ln(Du),Wx=yt({},Du,{dataTransfer:0}),Xx=Ln(Wx),$x=yt({},wa,{relatedTarget:0}),Pc=Ln($x),jx=yt({},_s,{animationName:0,elapsedTime:0,pseudoElement:0}),qx=Ln(jx),Yx=yt({},_s,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Zx=Ln(Yx),Kx=yt({},_s,{data:0}),Xp=Ln(Kx),Qx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Jx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},eS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function tS(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=eS[t])?!!e[t]:!1}function xh(){return tS}var nS=yt({},wa,{key:function(t){if(t.key){var e=Qx[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ul(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Jx[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:xh,charCode:function(t){return t.type==="keypress"?Ul(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ul(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),iS=Ln(nS),rS=yt({},Du,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),$p=Ln(rS),oS=yt({},wa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:xh}),sS=Ln(oS),aS=yt({},_s,{propertyName:0,elapsedTime:0,pseudoElement:0}),lS=Ln(aS),uS=yt({},Du,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),cS=Ln(uS),fS=[9,13,27,32],Sh=ki&&"CompositionEvent"in window,Ws=null;ki&&"documentMode"in document&&(Ws=document.documentMode);var dS=ki&&"TextEvent"in window&&!Ws,Lv=ki&&(!Sh||Ws&&8<Ws&&11>=Ws),jp=String.fromCharCode(32),qp=!1;function Nv(t,e){switch(t){case"keyup":return fS.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Iv(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var No=!1;function hS(t,e){switch(t){case"compositionend":return Iv(e);case"keypress":return e.which!==32?null:(qp=!0,jp);case"textInput":return t=e.data,t===jp&&qp?null:t;default:return null}}function pS(t,e){if(No)return t==="compositionend"||!Sh&&Nv(t,e)?(t=Pv(),Dl=_h=rr=null,No=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Lv&&e.locale!=="ko"?null:e.data;default:return null}}var mS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Yp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!mS[t.type]:e==="textarea"}function Dv(t,e,n,i){fv(i),e=ru(e,"onChange"),0<e.length&&(n=new yh("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Xs=null,aa=null;function gS(t){Xv(t,0)}function Uu(t){var e=Uo(t);if(rv(e))return t}function vS(t,e){if(t==="change")return e}var Uv=!1;if(ki){var Lc;if(ki){var Nc="oninput"in document;if(!Nc){var Zp=document.createElement("div");Zp.setAttribute("oninput","return;"),Nc=typeof Zp.oninput=="function"}Lc=Nc}else Lc=!1;Uv=Lc&&(!document.documentMode||9<document.documentMode)}function Kp(){Xs&&(Xs.detachEvent("onpropertychange",Fv),aa=Xs=null)}function Fv(t){if(t.propertyName==="value"&&Uu(aa)){var e=[];Dv(e,aa,t,hh(t)),mv(gS,e)}}function _S(t,e,n){t==="focusin"?(Kp(),Xs=e,aa=n,Xs.attachEvent("onpropertychange",Fv)):t==="focusout"&&Kp()}function yS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Uu(aa)}function xS(t,e){if(t==="click")return Uu(e)}function SS(t,e){if(t==="input"||t==="change")return Uu(e)}function ES(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var li=typeof Object.is=="function"?Object.is:ES;function la(t,e){if(li(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Uf.call(e,r)||!li(t[r],e[r]))return!1}return!0}function Qp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Jp(t,e){var n=Qp(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Qp(n)}}function Ov(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Ov(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function kv(){for(var t=window,e=Kl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Kl(t.document)}return e}function Eh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function MS(t){var e=kv(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Ov(n.ownerDocument.documentElement,n)){if(i!==null&&Eh(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,o=Math.min(i.start,r);i=i.end===void 0?o:Math.min(i.end,r),!t.extend&&o>i&&(r=i,i=o,o=r),r=Jp(n,o);var s=Jp(n,i);r&&s&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==s.node||t.focusOffset!==s.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),o>i?(t.addRange(e),t.extend(s.node,s.offset)):(e.setEnd(s.node,s.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var TS=ki&&"documentMode"in document&&11>=document.documentMode,Io=null,ed=null,$s=null,td=!1;function em(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;td||Io==null||Io!==Kl(i)||(i=Io,"selectionStart"in i&&Eh(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),$s&&la($s,i)||($s=i,i=ru(ed,"onSelect"),0<i.length&&(e=new yh("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Io)))}function Wa(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Do={animationend:Wa("Animation","AnimationEnd"),animationiteration:Wa("Animation","AnimationIteration"),animationstart:Wa("Animation","AnimationStart"),transitionend:Wa("Transition","TransitionEnd")},Ic={},Bv={};ki&&(Bv=document.createElement("div").style,"AnimationEvent"in window||(delete Do.animationend.animation,delete Do.animationiteration.animation,delete Do.animationstart.animation),"TransitionEvent"in window||delete Do.transitionend.transition);function Fu(t){if(Ic[t])return Ic[t];if(!Do[t])return t;var e=Do[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Bv)return Ic[t]=e[n];return t}var Hv=Fu("animationend"),zv=Fu("animationiteration"),Gv=Fu("animationstart"),Vv=Fu("transitionend"),Wv=new Map,tm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Mr(t,e){Wv.set(t,e),ao(e,[t])}for(var Dc=0;Dc<tm.length;Dc++){var Uc=tm[Dc],wS=Uc.toLowerCase(),AS=Uc[0].toUpperCase()+Uc.slice(1);Mr(wS,"on"+AS)}Mr(Hv,"onAnimationEnd");Mr(zv,"onAnimationIteration");Mr(Gv,"onAnimationStart");Mr("dblclick","onDoubleClick");Mr("focusin","onFocus");Mr("focusout","onBlur");Mr(Vv,"onTransitionEnd");es("onMouseEnter",["mouseout","mouseover"]);es("onMouseLeave",["mouseout","mouseover"]);es("onPointerEnter",["pointerout","pointerover"]);es("onPointerLeave",["pointerout","pointerover"]);ao("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ao("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ao("onBeforeInput",["compositionend","keypress","textInput","paste"]);ao("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ao("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ao("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Hs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),CS=new Set("cancel close invalid load scroll toggle".split(" ").concat(Hs));function nm(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,wx(i,e,void 0,t),t.currentTarget=null}function Xv(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var o=void 0;if(e)for(var s=i.length-1;0<=s;s--){var a=i[s],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==o&&r.isPropagationStopped())break e;nm(r,a,u),o=l}else for(s=0;s<i.length;s++){if(a=i[s],l=a.instance,u=a.currentTarget,a=a.listener,l!==o&&r.isPropagationStopped())break e;nm(r,a,u),o=l}}}if(Jl)throw t=Zf,Jl=!1,Zf=null,t}function ut(t,e){var n=e[sd];n===void 0&&(n=e[sd]=new Set);var i=t+"__bubble";n.has(i)||($v(e,t,2,!1),n.add(i))}function Fc(t,e,n){var i=0;e&&(i|=4),$v(n,t,i,e)}var Xa="_reactListening"+Math.random().toString(36).slice(2);function ua(t){if(!t[Xa]){t[Xa]=!0,J0.forEach(function(n){n!=="selectionchange"&&(CS.has(n)||Fc(n,!1,t),Fc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Xa]||(e[Xa]=!0,Fc("selectionchange",!1,e))}}function $v(t,e,n,i){switch(bv(e)){case 1:var r=zx;break;case 4:r=Gx;break;default:r=vh}n=r.bind(null,e,n,t),r=void 0,!Yf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Oc(t,e,n,i,r){var o=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var s=i.tag;if(s===3||s===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(s===4)for(s=i.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;s=s.return}for(;a!==null;){if(s=Hr(a),s===null)return;if(l=s.tag,l===5||l===6){i=o=s;continue e}a=a.parentNode}}i=i.return}mv(function(){var u=o,c=hh(n),d=[];e:{var f=Wv.get(t);if(f!==void 0){var p=yh,_=t;switch(t){case"keypress":if(Ul(n)===0)break e;case"keydown":case"keyup":p=iS;break;case"focusin":_="focus",p=Pc;break;case"focusout":_="blur",p=Pc;break;case"beforeblur":case"afterblur":p=Pc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Wp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=Xx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=sS;break;case Hv:case zv:case Gv:p=qx;break;case Vv:p=lS;break;case"scroll":p=Vx;break;case"wheel":p=cS;break;case"copy":case"cut":case"paste":p=Zx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=$p}var y=(e&4)!==0,g=!y&&t==="scroll",h=y?f!==null?f+"Capture":null:f;y=[];for(var v=u,m;v!==null;){m=v;var x=m.stateNode;if(m.tag===5&&x!==null&&(m=x,h!==null&&(x=ia(v,h),x!=null&&y.push(ca(v,x,m)))),g)break;v=v.return}0<y.length&&(f=new p(f,_,null,n,c),d.push({event:f,listeners:y}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",f&&n!==jf&&(_=n.relatedTarget||n.fromElement)&&(Hr(_)||_[Bi]))break e;if((p||f)&&(f=c.window===c?c:(f=c.ownerDocument)?f.defaultView||f.parentWindow:window,p?(_=n.relatedTarget||n.toElement,p=u,_=_?Hr(_):null,_!==null&&(g=lo(_),_!==g||_.tag!==5&&_.tag!==6)&&(_=null)):(p=null,_=u),p!==_)){if(y=Wp,x="onMouseLeave",h="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(y=$p,x="onPointerLeave",h="onPointerEnter",v="pointer"),g=p==null?f:Uo(p),m=_==null?f:Uo(_),f=new y(x,v+"leave",p,n,c),f.target=g,f.relatedTarget=m,x=null,Hr(c)===u&&(y=new y(h,v+"enter",_,n,c),y.target=m,y.relatedTarget=g,x=y),g=x,p&&_)t:{for(y=p,h=_,v=0,m=y;m;m=co(m))v++;for(m=0,x=h;x;x=co(x))m++;for(;0<v-m;)y=co(y),v--;for(;0<m-v;)h=co(h),m--;for(;v--;){if(y===h||h!==null&&y===h.alternate)break t;y=co(y),h=co(h)}y=null}else y=null;p!==null&&im(d,f,p,y,!1),_!==null&&g!==null&&im(d,g,_,y,!0)}}e:{if(f=u?Uo(u):window,p=f.nodeName&&f.nodeName.toLowerCase(),p==="select"||p==="input"&&f.type==="file")var R=vS;else if(Yp(f))if(Uv)R=SS;else{R=yS;var T=_S}else(p=f.nodeName)&&p.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(R=xS);if(R&&(R=R(t,u))){Dv(d,R,n,c);break e}T&&T(t,f,u),t==="focusout"&&(T=f._wrapperState)&&T.controlled&&f.type==="number"&&Gf(f,"number",f.value)}switch(T=u?Uo(u):window,t){case"focusin":(Yp(T)||T.contentEditable==="true")&&(Io=T,ed=u,$s=null);break;case"focusout":$s=ed=Io=null;break;case"mousedown":td=!0;break;case"contextmenu":case"mouseup":case"dragend":td=!1,em(d,n,c);break;case"selectionchange":if(TS)break;case"keydown":case"keyup":em(d,n,c)}var M;if(Sh)e:{switch(t){case"compositionstart":var L="onCompositionStart";break e;case"compositionend":L="onCompositionEnd";break e;case"compositionupdate":L="onCompositionUpdate";break e}L=void 0}else No?Nv(t,n)&&(L="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(L="onCompositionStart");L&&(Lv&&n.locale!=="ko"&&(No||L!=="onCompositionStart"?L==="onCompositionEnd"&&No&&(M=Pv()):(rr=c,_h="value"in rr?rr.value:rr.textContent,No=!0)),T=ru(u,L),0<T.length&&(L=new Xp(L,t,null,n,c),d.push({event:L,listeners:T}),M?L.data=M:(M=Iv(n),M!==null&&(L.data=M)))),(M=dS?hS(t,n):pS(t,n))&&(u=ru(u,"onBeforeInput"),0<u.length&&(c=new Xp("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=M))}Xv(d,e)})}function ca(t,e,n){return{instance:t,listener:e,currentTarget:n}}function ru(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,o=r.stateNode;r.tag===5&&o!==null&&(r=o,o=ia(t,n),o!=null&&i.unshift(ca(t,o,r)),o=ia(t,e),o!=null&&i.push(ca(t,o,r))),t=t.return}return i}function co(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function im(t,e,n,i,r){for(var o=e._reactName,s=[];n!==null&&n!==i;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=ia(n,o),l!=null&&s.unshift(ca(n,l,a))):r||(l=ia(n,o),l!=null&&s.push(ca(n,l,a)))),n=n.return}s.length!==0&&t.push({event:e,listeners:s})}var RS=/\r\n?/g,bS=/\u0000|\uFFFD/g;function rm(t){return(typeof t=="string"?t:""+t).replace(RS,`
`).replace(bS,"")}function $a(t,e,n){if(e=rm(e),rm(t)!==e&&n)throw Error(ee(425))}function ou(){}var nd=null,id=null;function rd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var od=typeof setTimeout=="function"?setTimeout:void 0,PS=typeof clearTimeout=="function"?clearTimeout:void 0,om=typeof Promise=="function"?Promise:void 0,LS=typeof queueMicrotask=="function"?queueMicrotask:typeof om<"u"?function(t){return om.resolve(null).then(t).catch(NS)}:od;function NS(t){setTimeout(function(){throw t})}function kc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),sa(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);sa(e)}function fr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function sm(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ys=Math.random().toString(36).slice(2),_i="__reactFiber$"+ys,fa="__reactProps$"+ys,Bi="__reactContainer$"+ys,sd="__reactEvents$"+ys,IS="__reactListeners$"+ys,DS="__reactHandles$"+ys;function Hr(t){var e=t[_i];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Bi]||n[_i]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=sm(t);t!==null;){if(n=t[_i])return n;t=sm(t)}return e}t=n,n=t.parentNode}return null}function Aa(t){return t=t[_i]||t[Bi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Uo(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ee(33))}function Ou(t){return t[fa]||null}var ad=[],Fo=-1;function Tr(t){return{current:t}}function ht(t){0>Fo||(t.current=ad[Fo],ad[Fo]=null,Fo--)}function lt(t,e){Fo++,ad[Fo]=t.current,t.current=e}var Sr={},Qt=Tr(Sr),mn=Tr(!1),Kr=Sr;function ts(t,e){var n=t.type.contextTypes;if(!n)return Sr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},o;for(o in n)r[o]=e[o];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function gn(t){return t=t.childContextTypes,t!=null}function su(){ht(mn),ht(Qt)}function am(t,e,n){if(Qt.current!==Sr)throw Error(ee(168));lt(Qt,e),lt(mn,n)}function jv(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ee(108,_x(t)||"Unknown",r));return yt({},n,i)}function au(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Sr,Kr=Qt.current,lt(Qt,t),lt(mn,mn.current),!0}function lm(t,e,n){var i=t.stateNode;if(!i)throw Error(ee(169));n?(t=jv(t,e,Kr),i.__reactInternalMemoizedMergedChildContext=t,ht(mn),ht(Qt),lt(Qt,t)):ht(mn),lt(mn,n)}var Ni=null,ku=!1,Bc=!1;function qv(t){Ni===null?Ni=[t]:Ni.push(t)}function US(t){ku=!0,qv(t)}function wr(){if(!Bc&&Ni!==null){Bc=!0;var t=0,e=et;try{var n=Ni;for(et=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Ni=null,ku=!1}catch(r){throw Ni!==null&&(Ni=Ni.slice(t+1)),yv(ph,wr),r}finally{et=e,Bc=!1}}return null}var Oo=[],ko=0,lu=null,uu=0,Un=[],Fn=0,Qr=null,Di=1,Ui="";function Dr(t,e){Oo[ko++]=uu,Oo[ko++]=lu,lu=t,uu=e}function Yv(t,e,n){Un[Fn++]=Di,Un[Fn++]=Ui,Un[Fn++]=Qr,Qr=t;var i=Di;t=Ui;var r=32-ri(i)-1;i&=~(1<<r),n+=1;var o=32-ri(e)+r;if(30<o){var s=r-r%5;o=(i&(1<<s)-1).toString(32),i>>=s,r-=s,Di=1<<32-ri(e)+r|n<<r|i,Ui=o+t}else Di=1<<o|n<<r|i,Ui=t}function Mh(t){t.return!==null&&(Dr(t,1),Yv(t,1,0))}function Th(t){for(;t===lu;)lu=Oo[--ko],Oo[ko]=null,uu=Oo[--ko],Oo[ko]=null;for(;t===Qr;)Qr=Un[--Fn],Un[Fn]=null,Ui=Un[--Fn],Un[Fn]=null,Di=Un[--Fn],Un[Fn]=null}var An=null,Tn=null,pt=!1,Jn=null;function Zv(t,e){var n=Hn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function um(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,An=t,Tn=fr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,An=t,Tn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Qr!==null?{id:Di,overflow:Ui}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Hn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,An=t,Tn=null,!0):!1;default:return!1}}function ld(t){return(t.mode&1)!==0&&(t.flags&128)===0}function ud(t){if(pt){var e=Tn;if(e){var n=e;if(!um(t,e)){if(ld(t))throw Error(ee(418));e=fr(n.nextSibling);var i=An;e&&um(t,e)?Zv(i,n):(t.flags=t.flags&-4097|2,pt=!1,An=t)}}else{if(ld(t))throw Error(ee(418));t.flags=t.flags&-4097|2,pt=!1,An=t}}}function cm(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;An=t}function ja(t){if(t!==An)return!1;if(!pt)return cm(t),pt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!rd(t.type,t.memoizedProps)),e&&(e=Tn)){if(ld(t))throw Kv(),Error(ee(418));for(;e;)Zv(t,e),e=fr(e.nextSibling)}if(cm(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ee(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Tn=fr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Tn=null}}else Tn=An?fr(t.stateNode.nextSibling):null;return!0}function Kv(){for(var t=Tn;t;)t=fr(t.nextSibling)}function ns(){Tn=An=null,pt=!1}function wh(t){Jn===null?Jn=[t]:Jn.push(t)}var FS=Vi.ReactCurrentBatchConfig;function Kn(t,e){if(t&&t.defaultProps){e=yt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var cu=Tr(null),fu=null,Bo=null,Ah=null;function Ch(){Ah=Bo=fu=null}function Rh(t){var e=cu.current;ht(cu),t._currentValue=e}function cd(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Zo(t,e){fu=t,Ah=Bo=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(pn=!0),t.firstContext=null)}function Gn(t){var e=t._currentValue;if(Ah!==t)if(t={context:t,memoizedValue:e,next:null},Bo===null){if(fu===null)throw Error(ee(308));Bo=t,fu.dependencies={lanes:0,firstContext:t}}else Bo=Bo.next=t;return e}var zr=null;function bh(t){zr===null?zr=[t]:zr.push(t)}function Qv(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,bh(e)):(n.next=r.next,r.next=n),e.interleaved=n,Hi(t,i)}function Hi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var er=!1;function Ph(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Jv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Oi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function dr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Ze&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Hi(t,n)}return r=i.interleaved,r===null?(e.next=e,bh(i)):(e.next=r.next,r.next=e),i.interleaved=e,Hi(t,n)}function Fl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,mh(t,n)}}function fm(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?r=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?r=o=e:o=o.next=e}else r=o=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:o,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function du(t,e,n,i){var r=t.updateQueue;er=!1;var o=r.firstBaseUpdate,s=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,s===null?o=u:s.next=u,s=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==s&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(o!==null){var d=r.baseState;s=0,c=u=l=null,a=o;do{var f=a.lane,p=a.eventTime;if((i&f)===f){c!==null&&(c=c.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var _=t,y=a;switch(f=e,p=n,y.tag){case 1:if(_=y.payload,typeof _=="function"){d=_.call(p,d,f);break e}d=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=y.payload,f=typeof _=="function"?_.call(p,d,f):_,f==null)break e;d=yt({},d,f);break e;case 2:er=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=r.effects,f===null?r.effects=[a]:f.push(a))}else p={eventTime:p,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=p,l=d):c=c.next=p,s|=f;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;f=a,a=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(1);if(c===null&&(l=d),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=c,e=r.shared.interleaved,e!==null){r=e;do s|=r.lane,r=r.next;while(r!==e)}else o===null&&(r.shared.lanes=0);eo|=s,t.lanes=s,t.memoizedState=d}}function dm(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ee(191,r));r.call(i)}}}var e_=new Q0.Component().refs;function fd(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:yt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Bu={isMounted:function(t){return(t=t._reactInternals)?lo(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=cn(),r=pr(t),o=Oi(i,r);o.payload=e,n!=null&&(o.callback=n),e=dr(t,o,r),e!==null&&(oi(e,t,r,i),Fl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=cn(),r=pr(t),o=Oi(i,r);o.tag=1,o.payload=e,n!=null&&(o.callback=n),e=dr(t,o,r),e!==null&&(oi(e,t,r,i),Fl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=cn(),i=pr(t),r=Oi(n,i);r.tag=2,e!=null&&(r.callback=e),e=dr(t,r,i),e!==null&&(oi(e,t,i,n),Fl(e,t,i))}};function hm(t,e,n,i,r,o,s){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,o,s):e.prototype&&e.prototype.isPureReactComponent?!la(n,i)||!la(r,o):!0}function t_(t,e,n){var i=!1,r=Sr,o=e.contextType;return typeof o=="object"&&o!==null?o=Gn(o):(r=gn(e)?Kr:Qt.current,i=e.contextTypes,o=(i=i!=null)?ts(t,r):Sr),e=new e(n,o),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Bu,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=o),e}function pm(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Bu.enqueueReplaceState(e,e.state,null)}function dd(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs=e_,Ph(t);var o=e.contextType;typeof o=="object"&&o!==null?r.context=Gn(o):(o=gn(e)?Kr:Qt.current,r.context=ts(t,o)),r.state=t.memoizedState,o=e.getDerivedStateFromProps,typeof o=="function"&&(fd(t,e,o,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Bu.enqueueReplaceState(r,r.state,null),du(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Ps(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ee(309));var i=n.stateNode}if(!i)throw Error(ee(147,t));var r=i,o=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===o?e.ref:(e=function(s){var a=r.refs;a===e_&&(a=r.refs={}),s===null?delete a[o]:a[o]=s},e._stringRef=o,e)}if(typeof t!="string")throw Error(ee(284));if(!n._owner)throw Error(ee(290,t))}return t}function qa(t,e){throw t=Object.prototype.toString.call(e),Error(ee(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function mm(t){var e=t._init;return e(t._payload)}function n_(t){function e(h,v){if(t){var m=h.deletions;m===null?(h.deletions=[v],h.flags|=16):m.push(v)}}function n(h,v){if(!t)return null;for(;v!==null;)e(h,v),v=v.sibling;return null}function i(h,v){for(h=new Map;v!==null;)v.key!==null?h.set(v.key,v):h.set(v.index,v),v=v.sibling;return h}function r(h,v){return h=mr(h,v),h.index=0,h.sibling=null,h}function o(h,v,m){return h.index=m,t?(m=h.alternate,m!==null?(m=m.index,m<v?(h.flags|=2,v):m):(h.flags|=2,v)):(h.flags|=1048576,v)}function s(h){return t&&h.alternate===null&&(h.flags|=2),h}function a(h,v,m,x){return v===null||v.tag!==6?(v=$c(m,h.mode,x),v.return=h,v):(v=r(v,m),v.return=h,v)}function l(h,v,m,x){var R=m.type;return R===Lo?c(h,v,m.props.children,x,m.key):v!==null&&(v.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===Ji&&mm(R)===v.type)?(x=r(v,m.props),x.ref=Ps(h,v,m),x.return=h,x):(x=Gl(m.type,m.key,m.props,null,h.mode,x),x.ref=Ps(h,v,m),x.return=h,x)}function u(h,v,m,x){return v===null||v.tag!==4||v.stateNode.containerInfo!==m.containerInfo||v.stateNode.implementation!==m.implementation?(v=jc(m,h.mode,x),v.return=h,v):(v=r(v,m.children||[]),v.return=h,v)}function c(h,v,m,x,R){return v===null||v.tag!==7?(v=Xr(m,h.mode,x,R),v.return=h,v):(v=r(v,m),v.return=h,v)}function d(h,v,m){if(typeof v=="string"&&v!==""||typeof v=="number")return v=$c(""+v,h.mode,m),v.return=h,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Oa:return m=Gl(v.type,v.key,v.props,null,h.mode,m),m.ref=Ps(h,null,v),m.return=h,m;case Po:return v=jc(v,h.mode,m),v.return=h,v;case Ji:var x=v._init;return d(h,x(v._payload),m)}if(ks(v)||ws(v))return v=Xr(v,h.mode,m,null),v.return=h,v;qa(h,v)}return null}function f(h,v,m,x){var R=v!==null?v.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return R!==null?null:a(h,v,""+m,x);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Oa:return m.key===R?l(h,v,m,x):null;case Po:return m.key===R?u(h,v,m,x):null;case Ji:return R=m._init,f(h,v,R(m._payload),x)}if(ks(m)||ws(m))return R!==null?null:c(h,v,m,x,null);qa(h,m)}return null}function p(h,v,m,x,R){if(typeof x=="string"&&x!==""||typeof x=="number")return h=h.get(m)||null,a(v,h,""+x,R);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Oa:return h=h.get(x.key===null?m:x.key)||null,l(v,h,x,R);case Po:return h=h.get(x.key===null?m:x.key)||null,u(v,h,x,R);case Ji:var T=x._init;return p(h,v,m,T(x._payload),R)}if(ks(x)||ws(x))return h=h.get(m)||null,c(v,h,x,R,null);qa(v,x)}return null}function _(h,v,m,x){for(var R=null,T=null,M=v,L=v=0,E=null;M!==null&&L<m.length;L++){M.index>L?(E=M,M=null):E=M.sibling;var A=f(h,M,m[L],x);if(A===null){M===null&&(M=E);break}t&&M&&A.alternate===null&&e(h,M),v=o(A,v,L),T===null?R=A:T.sibling=A,T=A,M=E}if(L===m.length)return n(h,M),pt&&Dr(h,L),R;if(M===null){for(;L<m.length;L++)M=d(h,m[L],x),M!==null&&(v=o(M,v,L),T===null?R=M:T.sibling=M,T=M);return pt&&Dr(h,L),R}for(M=i(h,M);L<m.length;L++)E=p(M,h,L,m[L],x),E!==null&&(t&&E.alternate!==null&&M.delete(E.key===null?L:E.key),v=o(E,v,L),T===null?R=E:T.sibling=E,T=E);return t&&M.forEach(function(F){return e(h,F)}),pt&&Dr(h,L),R}function y(h,v,m,x){var R=ws(m);if(typeof R!="function")throw Error(ee(150));if(m=R.call(m),m==null)throw Error(ee(151));for(var T=R=null,M=v,L=v=0,E=null,A=m.next();M!==null&&!A.done;L++,A=m.next()){M.index>L?(E=M,M=null):E=M.sibling;var F=f(h,M,A.value,x);if(F===null){M===null&&(M=E);break}t&&M&&F.alternate===null&&e(h,M),v=o(F,v,L),T===null?R=F:T.sibling=F,T=F,M=E}if(A.done)return n(h,M),pt&&Dr(h,L),R;if(M===null){for(;!A.done;L++,A=m.next())A=d(h,A.value,x),A!==null&&(v=o(A,v,L),T===null?R=A:T.sibling=A,T=A);return pt&&Dr(h,L),R}for(M=i(h,M);!A.done;L++,A=m.next())A=p(M,h,L,A.value,x),A!==null&&(t&&A.alternate!==null&&M.delete(A.key===null?L:A.key),v=o(A,v,L),T===null?R=A:T.sibling=A,T=A);return t&&M.forEach(function($){return e(h,$)}),pt&&Dr(h,L),R}function g(h,v,m,x){if(typeof m=="object"&&m!==null&&m.type===Lo&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case Oa:e:{for(var R=m.key,T=v;T!==null;){if(T.key===R){if(R=m.type,R===Lo){if(T.tag===7){n(h,T.sibling),v=r(T,m.props.children),v.return=h,h=v;break e}}else if(T.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===Ji&&mm(R)===T.type){n(h,T.sibling),v=r(T,m.props),v.ref=Ps(h,T,m),v.return=h,h=v;break e}n(h,T);break}else e(h,T);T=T.sibling}m.type===Lo?(v=Xr(m.props.children,h.mode,x,m.key),v.return=h,h=v):(x=Gl(m.type,m.key,m.props,null,h.mode,x),x.ref=Ps(h,v,m),x.return=h,h=x)}return s(h);case Po:e:{for(T=m.key;v!==null;){if(v.key===T)if(v.tag===4&&v.stateNode.containerInfo===m.containerInfo&&v.stateNode.implementation===m.implementation){n(h,v.sibling),v=r(v,m.children||[]),v.return=h,h=v;break e}else{n(h,v);break}else e(h,v);v=v.sibling}v=jc(m,h.mode,x),v.return=h,h=v}return s(h);case Ji:return T=m._init,g(h,v,T(m._payload),x)}if(ks(m))return _(h,v,m,x);if(ws(m))return y(h,v,m,x);qa(h,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,v!==null&&v.tag===6?(n(h,v.sibling),v=r(v,m),v.return=h,h=v):(n(h,v),v=$c(m,h.mode,x),v.return=h,h=v),s(h)):n(h,v)}return g}var is=n_(!0),i_=n_(!1),Ca={},xi=Tr(Ca),da=Tr(Ca),ha=Tr(Ca);function Gr(t){if(t===Ca)throw Error(ee(174));return t}function Lh(t,e){switch(lt(ha,e),lt(da,t),lt(xi,Ca),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Wf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Wf(e,t)}ht(xi),lt(xi,e)}function rs(){ht(xi),ht(da),ht(ha)}function r_(t){Gr(ha.current);var e=Gr(xi.current),n=Wf(e,t.type);e!==n&&(lt(da,t),lt(xi,n))}function Nh(t){da.current===t&&(ht(xi),ht(da))}var vt=Tr(0);function hu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Hc=[];function Ih(){for(var t=0;t<Hc.length;t++)Hc[t]._workInProgressVersionPrimary=null;Hc.length=0}var Ol=Vi.ReactCurrentDispatcher,zc=Vi.ReactCurrentBatchConfig,Jr=0,_t=null,Rt=null,Ut=null,pu=!1,js=!1,pa=0,OS=0;function $t(){throw Error(ee(321))}function Dh(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!li(t[n],e[n]))return!1;return!0}function Uh(t,e,n,i,r,o){if(Jr=o,_t=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ol.current=t===null||t.memoizedState===null?zS:GS,t=n(i,r),js){o=0;do{if(js=!1,pa=0,25<=o)throw Error(ee(301));o+=1,Ut=Rt=null,e.updateQueue=null,Ol.current=VS,t=n(i,r)}while(js)}if(Ol.current=mu,e=Rt!==null&&Rt.next!==null,Jr=0,Ut=Rt=_t=null,pu=!1,e)throw Error(ee(300));return t}function Fh(){var t=pa!==0;return pa=0,t}function fi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ut===null?_t.memoizedState=Ut=t:Ut=Ut.next=t,Ut}function Vn(){if(Rt===null){var t=_t.alternate;t=t!==null?t.memoizedState:null}else t=Rt.next;var e=Ut===null?_t.memoizedState:Ut.next;if(e!==null)Ut=e,Rt=t;else{if(t===null)throw Error(ee(310));Rt=t,t={memoizedState:Rt.memoizedState,baseState:Rt.baseState,baseQueue:Rt.baseQueue,queue:Rt.queue,next:null},Ut===null?_t.memoizedState=Ut=t:Ut=Ut.next=t}return Ut}function ma(t,e){return typeof e=="function"?e(t):e}function Gc(t){var e=Vn(),n=e.queue;if(n===null)throw Error(ee(311));n.lastRenderedReducer=t;var i=Rt,r=i.baseQueue,o=n.pending;if(o!==null){if(r!==null){var s=r.next;r.next=o.next,o.next=s}i.baseQueue=r=o,n.pending=null}if(r!==null){o=r.next,i=i.baseState;var a=s=null,l=null,u=o;do{var c=u.lane;if((Jr&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:t(i,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,s=i):l=l.next=d,_t.lanes|=c,eo|=c}u=u.next}while(u!==null&&u!==o);l===null?s=i:l.next=a,li(i,e.memoizedState)||(pn=!0),e.memoizedState=i,e.baseState=s,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do o=r.lane,_t.lanes|=o,eo|=o,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Vc(t){var e=Vn(),n=e.queue;if(n===null)throw Error(ee(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,o=e.memoizedState;if(r!==null){n.pending=null;var s=r=r.next;do o=t(o,s.action),s=s.next;while(s!==r);li(o,e.memoizedState)||(pn=!0),e.memoizedState=o,e.baseQueue===null&&(e.baseState=o),n.lastRenderedState=o}return[o,i]}function o_(){}function s_(t,e){var n=_t,i=Vn(),r=e(),o=!li(i.memoizedState,r);if(o&&(i.memoizedState=r,pn=!0),i=i.queue,Oh(u_.bind(null,n,i,t),[t]),i.getSnapshot!==e||o||Ut!==null&&Ut.memoizedState.tag&1){if(n.flags|=2048,ga(9,l_.bind(null,n,i,r,e),void 0,null),Ot===null)throw Error(ee(349));Jr&30||a_(n,e,r)}return r}function a_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=_t.updateQueue,e===null?(e={lastEffect:null,stores:null},_t.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function l_(t,e,n,i){e.value=n,e.getSnapshot=i,c_(e)&&f_(t)}function u_(t,e,n){return n(function(){c_(e)&&f_(t)})}function c_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!li(t,n)}catch{return!0}}function f_(t){var e=Hi(t,1);e!==null&&oi(e,t,1,-1)}function gm(t){var e=fi();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ma,lastRenderedState:t},e.queue=t,t=t.dispatch=HS.bind(null,_t,t),[e.memoizedState,t]}function ga(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=_t.updateQueue,e===null?(e={lastEffect:null,stores:null},_t.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function d_(){return Vn().memoizedState}function kl(t,e,n,i){var r=fi();_t.flags|=t,r.memoizedState=ga(1|e,n,void 0,i===void 0?null:i)}function Hu(t,e,n,i){var r=Vn();i=i===void 0?null:i;var o=void 0;if(Rt!==null){var s=Rt.memoizedState;if(o=s.destroy,i!==null&&Dh(i,s.deps)){r.memoizedState=ga(e,n,o,i);return}}_t.flags|=t,r.memoizedState=ga(1|e,n,o,i)}function vm(t,e){return kl(8390656,8,t,e)}function Oh(t,e){return Hu(2048,8,t,e)}function h_(t,e){return Hu(4,2,t,e)}function p_(t,e){return Hu(4,4,t,e)}function m_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function g_(t,e,n){return n=n!=null?n.concat([t]):null,Hu(4,4,m_.bind(null,e,t),n)}function kh(){}function v_(t,e){var n=Vn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Dh(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function __(t,e){var n=Vn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Dh(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function y_(t,e,n){return Jr&21?(li(n,e)||(n=Ev(),_t.lanes|=n,eo|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,pn=!0),t.memoizedState=n)}function kS(t,e){var n=et;et=n!==0&&4>n?n:4,t(!0);var i=zc.transition;zc.transition={};try{t(!1),e()}finally{et=n,zc.transition=i}}function x_(){return Vn().memoizedState}function BS(t,e,n){var i=pr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},S_(t))E_(e,n);else if(n=Qv(t,e,n,i),n!==null){var r=cn();oi(n,t,i,r),M_(n,e,i)}}function HS(t,e,n){var i=pr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(S_(t))E_(e,r);else{var o=t.alternate;if(t.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var s=e.lastRenderedState,a=o(s,n);if(r.hasEagerState=!0,r.eagerState=a,li(a,s)){var l=e.interleaved;l===null?(r.next=r,bh(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=Qv(t,e,r,i),n!==null&&(r=cn(),oi(n,t,i,r),M_(n,e,i))}}function S_(t){var e=t.alternate;return t===_t||e!==null&&e===_t}function E_(t,e){js=pu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function M_(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,mh(t,n)}}var mu={readContext:Gn,useCallback:$t,useContext:$t,useEffect:$t,useImperativeHandle:$t,useInsertionEffect:$t,useLayoutEffect:$t,useMemo:$t,useReducer:$t,useRef:$t,useState:$t,useDebugValue:$t,useDeferredValue:$t,useTransition:$t,useMutableSource:$t,useSyncExternalStore:$t,useId:$t,unstable_isNewReconciler:!1},zS={readContext:Gn,useCallback:function(t,e){return fi().memoizedState=[t,e===void 0?null:e],t},useContext:Gn,useEffect:vm,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,kl(4194308,4,m_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return kl(4194308,4,t,e)},useInsertionEffect:function(t,e){return kl(4,2,t,e)},useMemo:function(t,e){var n=fi();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=fi();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=BS.bind(null,_t,t),[i.memoizedState,t]},useRef:function(t){var e=fi();return t={current:t},e.memoizedState=t},useState:gm,useDebugValue:kh,useDeferredValue:function(t){return fi().memoizedState=t},useTransition:function(){var t=gm(!1),e=t[0];return t=kS.bind(null,t[1]),fi().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=_t,r=fi();if(pt){if(n===void 0)throw Error(ee(407));n=n()}else{if(n=e(),Ot===null)throw Error(ee(349));Jr&30||a_(i,e,n)}r.memoizedState=n;var o={value:n,getSnapshot:e};return r.queue=o,vm(u_.bind(null,i,o,t),[t]),i.flags|=2048,ga(9,l_.bind(null,i,o,n,e),void 0,null),n},useId:function(){var t=fi(),e=Ot.identifierPrefix;if(pt){var n=Ui,i=Di;n=(i&~(1<<32-ri(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=pa++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=OS++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},GS={readContext:Gn,useCallback:v_,useContext:Gn,useEffect:Oh,useImperativeHandle:g_,useInsertionEffect:h_,useLayoutEffect:p_,useMemo:__,useReducer:Gc,useRef:d_,useState:function(){return Gc(ma)},useDebugValue:kh,useDeferredValue:function(t){var e=Vn();return y_(e,Rt.memoizedState,t)},useTransition:function(){var t=Gc(ma)[0],e=Vn().memoizedState;return[t,e]},useMutableSource:o_,useSyncExternalStore:s_,useId:x_,unstable_isNewReconciler:!1},VS={readContext:Gn,useCallback:v_,useContext:Gn,useEffect:Oh,useImperativeHandle:g_,useInsertionEffect:h_,useLayoutEffect:p_,useMemo:__,useReducer:Vc,useRef:d_,useState:function(){return Vc(ma)},useDebugValue:kh,useDeferredValue:function(t){var e=Vn();return Rt===null?e.memoizedState=t:y_(e,Rt.memoizedState,t)},useTransition:function(){var t=Vc(ma)[0],e=Vn().memoizedState;return[t,e]},useMutableSource:o_,useSyncExternalStore:s_,useId:x_,unstable_isNewReconciler:!1};function os(t,e){try{var n="",i=e;do n+=vx(i),i=i.return;while(i);var r=n}catch(o){r=`
Error generating stack: `+o.message+`
`+o.stack}return{value:t,source:e,stack:r,digest:null}}function Wc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function hd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var WS=typeof WeakMap=="function"?WeakMap:Map;function T_(t,e,n){n=Oi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){vu||(vu=!0,Md=i),hd(t,e)},n}function w_(t,e,n){n=Oi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){hd(t,e)}}var o=t.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){hd(t,e),typeof i!="function"&&(hr===null?hr=new Set([this]):hr.add(this));var s=e.stack;this.componentDidCatch(e.value,{componentStack:s!==null?s:""})}),n}function _m(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new WS;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=rE.bind(null,t,e,n),e.then(t,t))}function ym(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function xm(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Oi(-1,1),e.tag=2,dr(n,e,1))),n.lanes|=1),t)}var XS=Vi.ReactCurrentOwner,pn=!1;function an(t,e,n,i){e.child=t===null?i_(e,null,n,i):is(e,t.child,n,i)}function Sm(t,e,n,i,r){n=n.render;var o=e.ref;return Zo(e,r),i=Uh(t,e,n,i,o,r),n=Fh(),t!==null&&!pn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,zi(t,e,r)):(pt&&n&&Mh(e),e.flags|=1,an(t,e,i,r),e.child)}function Em(t,e,n,i,r){if(t===null){var o=n.type;return typeof o=="function"&&!$h(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=o,A_(t,e,o,i,r)):(t=Gl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(o=t.child,!(t.lanes&r)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:la,n(s,i)&&t.ref===e.ref)return zi(t,e,r)}return e.flags|=1,t=mr(o,i),t.ref=e.ref,t.return=e,e.child=t}function A_(t,e,n,i,r){if(t!==null){var o=t.memoizedProps;if(la(o,i)&&t.ref===e.ref)if(pn=!1,e.pendingProps=i=o,(t.lanes&r)!==0)t.flags&131072&&(pn=!0);else return e.lanes=t.lanes,zi(t,e,r)}return pd(t,e,n,i,r)}function C_(t,e,n){var i=e.pendingProps,r=i.children,o=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},lt(zo,Mn),Mn|=n;else{if(!(n&1073741824))return t=o!==null?o.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,lt(zo,Mn),Mn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=o!==null?o.baseLanes:n,lt(zo,Mn),Mn|=i}else o!==null?(i=o.baseLanes|n,e.memoizedState=null):i=n,lt(zo,Mn),Mn|=i;return an(t,e,r,n),e.child}function R_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function pd(t,e,n,i,r){var o=gn(n)?Kr:Qt.current;return o=ts(e,o),Zo(e,r),n=Uh(t,e,n,i,o,r),i=Fh(),t!==null&&!pn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,zi(t,e,r)):(pt&&i&&Mh(e),e.flags|=1,an(t,e,n,r),e.child)}function Mm(t,e,n,i,r){if(gn(n)){var o=!0;au(e)}else o=!1;if(Zo(e,r),e.stateNode===null)Bl(t,e),t_(e,n,i),dd(e,n,i,r),i=!0;else if(t===null){var s=e.stateNode,a=e.memoizedProps;s.props=a;var l=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=Gn(u):(u=gn(n)?Kr:Qt.current,u=ts(e,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof s.getSnapshotBeforeUpdate=="function";d||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==i||l!==u)&&pm(e,s,i,u),er=!1;var f=e.memoizedState;s.state=f,du(e,i,s,r),l=e.memoizedState,a!==i||f!==l||mn.current||er?(typeof c=="function"&&(fd(e,n,c,i),l=e.memoizedState),(a=er||hm(e,n,a,i,f,l,u))?(d||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(e.flags|=4194308)):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),s.props=i,s.state=l,s.context=u,i=a):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{s=e.stateNode,Jv(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:Kn(e.type,a),s.props=u,d=e.pendingProps,f=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=Gn(l):(l=gn(n)?Kr:Qt.current,l=ts(e,l));var p=n.getDerivedStateFromProps;(c=typeof p=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==d||f!==l)&&pm(e,s,i,l),er=!1,f=e.memoizedState,s.state=f,du(e,i,s,r);var _=e.memoizedState;a!==d||f!==_||mn.current||er?(typeof p=="function"&&(fd(e,n,p,i),_=e.memoizedState),(u=er||hm(e,n,u,i,f,_,l)||!1)?(c||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(i,_,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(i,_,l)),typeof s.componentDidUpdate=="function"&&(e.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),s.props=i,s.state=_,s.context=l,i=u):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),i=!1)}return md(t,e,n,i,o,r)}function md(t,e,n,i,r,o){R_(t,e);var s=(e.flags&128)!==0;if(!i&&!s)return r&&lm(e,n,!1),zi(t,e,o);i=e.stateNode,XS.current=e;var a=s&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&s?(e.child=is(e,t.child,null,o),e.child=is(e,null,a,o)):an(t,e,a,o),e.memoizedState=i.state,r&&lm(e,n,!0),e.child}function b_(t){var e=t.stateNode;e.pendingContext?am(t,e.pendingContext,e.pendingContext!==e.context):e.context&&am(t,e.context,!1),Lh(t,e.containerInfo)}function Tm(t,e,n,i,r){return ns(),wh(r),e.flags|=256,an(t,e,n,i),e.child}var gd={dehydrated:null,treeContext:null,retryLane:0};function vd(t){return{baseLanes:t,cachePool:null,transitions:null}}function P_(t,e,n){var i=e.pendingProps,r=vt.current,o=!1,s=(e.flags&128)!==0,a;if((a=s)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(o=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),lt(vt,r&1),t===null)return ud(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(s=i.children,t=i.fallback,o?(i=e.mode,o=e.child,s={mode:"hidden",children:s},!(i&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=Vu(s,i,0,null),t=Xr(t,i,n,null),o.return=e,t.return=e,o.sibling=t,e.child=o,e.child.memoizedState=vd(n),e.memoizedState=gd,t):Bh(e,s));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return $S(t,e,s,i,a,r,n);if(o){o=i.fallback,s=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(s&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=mr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?o=mr(a,o):(o=Xr(o,s,n,null),o.flags|=2),o.return=e,i.return=e,i.sibling=o,e.child=i,i=o,o=e.child,s=t.child.memoizedState,s=s===null?vd(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=t.childLanes&~n,e.memoizedState=gd,i}return o=t.child,t=o.sibling,i=mr(o,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Bh(t,e){return e=Vu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ya(t,e,n,i){return i!==null&&wh(i),is(e,t.child,null,n),t=Bh(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function $S(t,e,n,i,r,o,s){if(n)return e.flags&256?(e.flags&=-257,i=Wc(Error(ee(422))),Ya(t,e,s,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(o=i.fallback,r=e.mode,i=Vu({mode:"visible",children:i.children},r,0,null),o=Xr(o,r,s,null),o.flags|=2,i.return=e,o.return=e,i.sibling=o,e.child=i,e.mode&1&&is(e,t.child,null,s),e.child.memoizedState=vd(s),e.memoizedState=gd,o);if(!(e.mode&1))return Ya(t,e,s,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,o=Error(ee(419)),i=Wc(o,i,void 0),Ya(t,e,s,i)}if(a=(s&t.childLanes)!==0,pn||a){if(i=Ot,i!==null){switch(s&-s){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|s)?0:r,r!==0&&r!==o.retryLane&&(o.retryLane=r,Hi(t,r),oi(i,t,r,-1))}return Xh(),i=Wc(Error(ee(421))),Ya(t,e,s,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=oE.bind(null,t),r._reactRetry=e,null):(t=o.treeContext,Tn=fr(r.nextSibling),An=e,pt=!0,Jn=null,t!==null&&(Un[Fn++]=Di,Un[Fn++]=Ui,Un[Fn++]=Qr,Di=t.id,Ui=t.overflow,Qr=e),e=Bh(e,i.children),e.flags|=4096,e)}function wm(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),cd(t.return,e,n)}function Xc(t,e,n,i,r){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=i,o.tail=n,o.tailMode=r)}function L_(t,e,n){var i=e.pendingProps,r=i.revealOrder,o=i.tail;if(an(t,e,i.children,n),i=vt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&wm(t,n,e);else if(t.tag===19)wm(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(lt(vt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&hu(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Xc(e,!1,r,n,o);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&hu(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Xc(e,!0,n,null,o);break;case"together":Xc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Bl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function zi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),eo|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ee(153));if(e.child!==null){for(t=e.child,n=mr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=mr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function jS(t,e,n){switch(e.tag){case 3:b_(e),ns();break;case 5:r_(e);break;case 1:gn(e.type)&&au(e);break;case 4:Lh(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;lt(cu,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(lt(vt,vt.current&1),e.flags|=128,null):n&e.child.childLanes?P_(t,e,n):(lt(vt,vt.current&1),t=zi(t,e,n),t!==null?t.sibling:null);lt(vt,vt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return L_(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),lt(vt,vt.current),i)break;return null;case 22:case 23:return e.lanes=0,C_(t,e,n)}return zi(t,e,n)}var N_,_d,I_,D_;N_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};_d=function(){};I_=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Gr(xi.current);var o=null;switch(n){case"input":r=Hf(t,r),i=Hf(t,i),o=[];break;case"select":r=yt({},r,{value:void 0}),i=yt({},i,{value:void 0}),o=[];break;case"textarea":r=Vf(t,r),i=Vf(t,i),o=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=ou)}Xf(n,i);var s;n=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ta.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ta.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&ut("scroll",t),o||a===l||(o=[])):(o=o||[]).push(u,l))}n&&(o=o||[]).push("style",n);var u=o;(e.updateQueue=u)&&(e.flags|=4)}};D_=function(t,e,n,i){n!==i&&(e.flags|=4)};function Ls(t,e){if(!pt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function jt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function qS(t,e,n){var i=e.pendingProps;switch(Th(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return jt(e),null;case 1:return gn(e.type)&&su(),jt(e),null;case 3:return i=e.stateNode,rs(),ht(mn),ht(Qt),Ih(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(ja(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Jn!==null&&(Ad(Jn),Jn=null))),_d(t,e),jt(e),null;case 5:Nh(e);var r=Gr(ha.current);if(n=e.type,t!==null&&e.stateNode!=null)I_(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ee(166));return jt(e),null}if(t=Gr(xi.current),ja(e)){i=e.stateNode,n=e.type;var o=e.memoizedProps;switch(i[_i]=e,i[fa]=o,t=(e.mode&1)!==0,n){case"dialog":ut("cancel",i),ut("close",i);break;case"iframe":case"object":case"embed":ut("load",i);break;case"video":case"audio":for(r=0;r<Hs.length;r++)ut(Hs[r],i);break;case"source":ut("error",i);break;case"img":case"image":case"link":ut("error",i),ut("load",i);break;case"details":ut("toggle",i);break;case"input":Dp(i,o),ut("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!o.multiple},ut("invalid",i);break;case"textarea":Fp(i,o),ut("invalid",i)}Xf(n,o),r=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?i.textContent!==a&&(o.suppressHydrationWarning!==!0&&$a(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&$a(i.textContent,a,t),r=["children",""+a]):ta.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&ut("scroll",i)}switch(n){case"input":ka(i),Up(i,o,!0);break;case"textarea":ka(i),Op(i);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(i.onclick=ou)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{s=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=av(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=s.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=s.createElement(n,{is:i.is}):(t=s.createElement(n),n==="select"&&(s=t,i.multiple?s.multiple=!0:i.size&&(s.size=i.size))):t=s.createElementNS(t,n),t[_i]=e,t[fa]=i,N_(t,e,!1,!1),e.stateNode=t;e:{switch(s=$f(n,i),n){case"dialog":ut("cancel",t),ut("close",t),r=i;break;case"iframe":case"object":case"embed":ut("load",t),r=i;break;case"video":case"audio":for(r=0;r<Hs.length;r++)ut(Hs[r],t);r=i;break;case"source":ut("error",t),r=i;break;case"img":case"image":case"link":ut("error",t),ut("load",t),r=i;break;case"details":ut("toggle",t),r=i;break;case"input":Dp(t,i),r=Hf(t,i),ut("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=yt({},i,{value:void 0}),ut("invalid",t);break;case"textarea":Fp(t,i),r=Vf(t,i),ut("invalid",t);break;default:r=i}Xf(n,r),a=r;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?cv(t,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&lv(t,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&na(t,l):typeof l=="number"&&na(t,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(ta.hasOwnProperty(o)?l!=null&&o==="onScroll"&&ut("scroll",t):l!=null&&uh(t,o,l,s))}switch(n){case"input":ka(t),Up(t,i,!1);break;case"textarea":ka(t),Op(t);break;case"option":i.value!=null&&t.setAttribute("value",""+xr(i.value));break;case"select":t.multiple=!!i.multiple,o=i.value,o!=null?$o(t,!!i.multiple,o,!1):i.defaultValue!=null&&$o(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=ou)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return jt(e),null;case 6:if(t&&e.stateNode!=null)D_(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ee(166));if(n=Gr(ha.current),Gr(xi.current),ja(e)){if(i=e.stateNode,n=e.memoizedProps,i[_i]=e,(o=i.nodeValue!==n)&&(t=An,t!==null))switch(t.tag){case 3:$a(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&$a(i.nodeValue,n,(t.mode&1)!==0)}o&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[_i]=e,e.stateNode=i}return jt(e),null;case 13:if(ht(vt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(pt&&Tn!==null&&e.mode&1&&!(e.flags&128))Kv(),ns(),e.flags|=98560,o=!1;else if(o=ja(e),i!==null&&i.dehydrated!==null){if(t===null){if(!o)throw Error(ee(318));if(o=e.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(ee(317));o[_i]=e}else ns(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;jt(e),o=!1}else Jn!==null&&(Ad(Jn),Jn=null),o=!0;if(!o)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||vt.current&1?bt===0&&(bt=3):Xh())),e.updateQueue!==null&&(e.flags|=4),jt(e),null);case 4:return rs(),_d(t,e),t===null&&ua(e.stateNode.containerInfo),jt(e),null;case 10:return Rh(e.type._context),jt(e),null;case 17:return gn(e.type)&&su(),jt(e),null;case 19:if(ht(vt),o=e.memoizedState,o===null)return jt(e),null;if(i=(e.flags&128)!==0,s=o.rendering,s===null)if(i)Ls(o,!1);else{if(bt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(s=hu(t),s!==null){for(e.flags|=128,Ls(o,!1),i=s.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)o=n,t=i,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=t,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,t=s.dependencies,o.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return lt(vt,vt.current&1|2),e.child}t=t.sibling}o.tail!==null&&Tt()>ss&&(e.flags|=128,i=!0,Ls(o,!1),e.lanes=4194304)}else{if(!i)if(t=hu(s),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ls(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!pt)return jt(e),null}else 2*Tt()-o.renderingStartTime>ss&&n!==1073741824&&(e.flags|=128,i=!0,Ls(o,!1),e.lanes=4194304);o.isBackwards?(s.sibling=e.child,e.child=s):(n=o.last,n!==null?n.sibling=s:e.child=s,o.last=s)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=Tt(),e.sibling=null,n=vt.current,lt(vt,i?n&1|2:n&1),e):(jt(e),null);case 22:case 23:return Wh(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Mn&1073741824&&(jt(e),e.subtreeFlags&6&&(e.flags|=8192)):jt(e),null;case 24:return null;case 25:return null}throw Error(ee(156,e.tag))}function YS(t,e){switch(Th(e),e.tag){case 1:return gn(e.type)&&su(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return rs(),ht(mn),ht(Qt),Ih(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Nh(e),null;case 13:if(ht(vt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ee(340));ns()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ht(vt),null;case 4:return rs(),null;case 10:return Rh(e.type._context),null;case 22:case 23:return Wh(),null;case 24:return null;default:return null}}var Za=!1,Zt=!1,ZS=typeof WeakSet=="function"?WeakSet:Set,de=null;function Ho(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Et(t,e,i)}else n.current=null}function yd(t,e,n){try{n()}catch(i){Et(t,e,i)}}var Am=!1;function KS(t,e){if(nd=nu,t=kv(),Eh(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,o=i.focusNode;i=i.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,u=0,c=0,d=t,f=null;t:for(;;){for(var p;d!==n||r!==0&&d.nodeType!==3||(a=s+r),d!==o||i!==0&&d.nodeType!==3||(l=s+i),d.nodeType===3&&(s+=d.nodeValue.length),(p=d.firstChild)!==null;)f=d,d=p;for(;;){if(d===t)break t;if(f===n&&++u===r&&(a=s),f===o&&++c===i&&(l=s),(p=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(id={focusedElem:t,selectionRange:n},nu=!1,de=e;de!==null;)if(e=de,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,de=t;else for(;de!==null;){e=de;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var y=_.memoizedProps,g=_.memoizedState,h=e.stateNode,v=h.getSnapshotBeforeUpdate(e.elementType===e.type?y:Kn(e.type,y),g);h.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var m=e.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ee(163))}}catch(x){Et(e,e.return,x)}if(t=e.sibling,t!==null){t.return=e.return,de=t;break}de=e.return}return _=Am,Am=!1,_}function qs(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var o=r.destroy;r.destroy=void 0,o!==void 0&&yd(e,n,o)}r=r.next}while(r!==i)}}function zu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function xd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function U_(t){var e=t.alternate;e!==null&&(t.alternate=null,U_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[_i],delete e[fa],delete e[sd],delete e[IS],delete e[DS])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function F_(t){return t.tag===5||t.tag===3||t.tag===4}function Cm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||F_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Sd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=ou));else if(i!==4&&(t=t.child,t!==null))for(Sd(t,e,n),t=t.sibling;t!==null;)Sd(t,e,n),t=t.sibling}function Ed(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Ed(t,e,n),t=t.sibling;t!==null;)Ed(t,e,n),t=t.sibling}var Bt=null,Qn=!1;function Xi(t,e,n){for(n=n.child;n!==null;)O_(t,e,n),n=n.sibling}function O_(t,e,n){if(yi&&typeof yi.onCommitFiberUnmount=="function")try{yi.onCommitFiberUnmount(Iu,n)}catch{}switch(n.tag){case 5:Zt||Ho(n,e);case 6:var i=Bt,r=Qn;Bt=null,Xi(t,e,n),Bt=i,Qn=r,Bt!==null&&(Qn?(t=Bt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Bt.removeChild(n.stateNode));break;case 18:Bt!==null&&(Qn?(t=Bt,n=n.stateNode,t.nodeType===8?kc(t.parentNode,n):t.nodeType===1&&kc(t,n),sa(t)):kc(Bt,n.stateNode));break;case 4:i=Bt,r=Qn,Bt=n.stateNode.containerInfo,Qn=!0,Xi(t,e,n),Bt=i,Qn=r;break;case 0:case 11:case 14:case 15:if(!Zt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var o=r,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&yd(n,e,s),r=r.next}while(r!==i)}Xi(t,e,n);break;case 1:if(!Zt&&(Ho(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){Et(n,e,a)}Xi(t,e,n);break;case 21:Xi(t,e,n);break;case 22:n.mode&1?(Zt=(i=Zt)||n.memoizedState!==null,Xi(t,e,n),Zt=i):Xi(t,e,n);break;default:Xi(t,e,n)}}function Rm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new ZS),e.forEach(function(i){var r=sE.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function jn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var o=t,s=e,a=s;e:for(;a!==null;){switch(a.tag){case 5:Bt=a.stateNode,Qn=!1;break e;case 3:Bt=a.stateNode.containerInfo,Qn=!0;break e;case 4:Bt=a.stateNode.containerInfo,Qn=!0;break e}a=a.return}if(Bt===null)throw Error(ee(160));O_(o,s,r),Bt=null,Qn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){Et(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)k_(e,t),e=e.sibling}function k_(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(jn(e,t),ci(t),i&4){try{qs(3,t,t.return),zu(3,t)}catch(y){Et(t,t.return,y)}try{qs(5,t,t.return)}catch(y){Et(t,t.return,y)}}break;case 1:jn(e,t),ci(t),i&512&&n!==null&&Ho(n,n.return);break;case 5:if(jn(e,t),ci(t),i&512&&n!==null&&Ho(n,n.return),t.flags&32){var r=t.stateNode;try{na(r,"")}catch(y){Et(t,t.return,y)}}if(i&4&&(r=t.stateNode,r!=null)){var o=t.memoizedProps,s=n!==null?n.memoizedProps:o,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&ov(r,o),$f(a,s);var u=$f(a,o);for(s=0;s<l.length;s+=2){var c=l[s],d=l[s+1];c==="style"?cv(r,d):c==="dangerouslySetInnerHTML"?lv(r,d):c==="children"?na(r,d):uh(r,c,d,u)}switch(a){case"input":zf(r,o);break;case"textarea":sv(r,o);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!o.multiple;var p=o.value;p!=null?$o(r,!!o.multiple,p,!1):f!==!!o.multiple&&(o.defaultValue!=null?$o(r,!!o.multiple,o.defaultValue,!0):$o(r,!!o.multiple,o.multiple?[]:"",!1))}r[fa]=o}catch(y){Et(t,t.return,y)}}break;case 6:if(jn(e,t),ci(t),i&4){if(t.stateNode===null)throw Error(ee(162));r=t.stateNode,o=t.memoizedProps;try{r.nodeValue=o}catch(y){Et(t,t.return,y)}}break;case 3:if(jn(e,t),ci(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{sa(e.containerInfo)}catch(y){Et(t,t.return,y)}break;case 4:jn(e,t),ci(t);break;case 13:jn(e,t),ci(t),r=t.child,r.flags&8192&&(o=r.memoizedState!==null,r.stateNode.isHidden=o,!o||r.alternate!==null&&r.alternate.memoizedState!==null||(Gh=Tt())),i&4&&Rm(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(Zt=(u=Zt)||c,jn(e,t),Zt=u):jn(e,t),ci(t),i&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(de=t,c=t.child;c!==null;){for(d=de=c;de!==null;){switch(f=de,p=f.child,f.tag){case 0:case 11:case 14:case 15:qs(4,f,f.return);break;case 1:Ho(f,f.return);var _=f.stateNode;if(typeof _.componentWillUnmount=="function"){i=f,n=f.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(y){Et(i,n,y)}}break;case 5:Ho(f,f.return);break;case 22:if(f.memoizedState!==null){Pm(d);continue}}p!==null?(p.return=f,de=p):Pm(d)}c=c.sibling}e:for(c=null,d=t;;){if(d.tag===5){if(c===null){c=d;try{r=d.stateNode,u?(o=r.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=d.stateNode,l=d.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=uv("display",s))}catch(y){Et(t,t.return,y)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(y){Et(t,t.return,y)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:jn(e,t),ci(t),i&4&&Rm(t);break;case 21:break;default:jn(e,t),ci(t)}}function ci(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(F_(n)){var i=n;break e}n=n.return}throw Error(ee(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(na(r,""),i.flags&=-33);var o=Cm(t);Ed(t,o,r);break;case 3:case 4:var s=i.stateNode.containerInfo,a=Cm(t);Sd(t,a,s);break;default:throw Error(ee(161))}}catch(l){Et(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function QS(t,e,n){de=t,B_(t)}function B_(t,e,n){for(var i=(t.mode&1)!==0;de!==null;){var r=de,o=r.child;if(r.tag===22&&i){var s=r.memoizedState!==null||Za;if(!s){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Zt;a=Za;var u=Zt;if(Za=s,(Zt=l)&&!u)for(de=r;de!==null;)s=de,l=s.child,s.tag===22&&s.memoizedState!==null?Lm(r):l!==null?(l.return=s,de=l):Lm(r);for(;o!==null;)de=o,B_(o),o=o.sibling;de=r,Za=a,Zt=u}bm(t)}else r.subtreeFlags&8772&&o!==null?(o.return=r,de=o):bm(t)}}function bm(t){for(;de!==null;){var e=de;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Zt||zu(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Zt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Kn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var o=e.updateQueue;o!==null&&dm(e,o,i);break;case 3:var s=e.updateQueue;if(s!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}dm(e,s,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&sa(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ee(163))}Zt||e.flags&512&&xd(e)}catch(f){Et(e,e.return,f)}}if(e===t){de=null;break}if(n=e.sibling,n!==null){n.return=e.return,de=n;break}de=e.return}}function Pm(t){for(;de!==null;){var e=de;if(e===t){de=null;break}var n=e.sibling;if(n!==null){n.return=e.return,de=n;break}de=e.return}}function Lm(t){for(;de!==null;){var e=de;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{zu(4,e)}catch(l){Et(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Et(e,r,l)}}var o=e.return;try{xd(e)}catch(l){Et(e,o,l)}break;case 5:var s=e.return;try{xd(e)}catch(l){Et(e,s,l)}}}catch(l){Et(e,e.return,l)}if(e===t){de=null;break}var a=e.sibling;if(a!==null){a.return=e.return,de=a;break}de=e.return}}var JS=Math.ceil,gu=Vi.ReactCurrentDispatcher,Hh=Vi.ReactCurrentOwner,zn=Vi.ReactCurrentBatchConfig,Ze=0,Ot=null,Ct=null,Gt=0,Mn=0,zo=Tr(0),bt=0,va=null,eo=0,Gu=0,zh=0,Ys=null,hn=null,Gh=0,ss=1/0,Pi=null,vu=!1,Md=null,hr=null,Ka=!1,or=null,_u=0,Zs=0,Td=null,Hl=-1,zl=0;function cn(){return Ze&6?Tt():Hl!==-1?Hl:Hl=Tt()}function pr(t){return t.mode&1?Ze&2&&Gt!==0?Gt&-Gt:FS.transition!==null?(zl===0&&(zl=Ev()),zl):(t=et,t!==0||(t=window.event,t=t===void 0?16:bv(t.type)),t):1}function oi(t,e,n,i){if(50<Zs)throw Zs=0,Td=null,Error(ee(185));Ta(t,n,i),(!(Ze&2)||t!==Ot)&&(t===Ot&&(!(Ze&2)&&(Gu|=n),bt===4&&ir(t,Gt)),vn(t,i),n===1&&Ze===0&&!(e.mode&1)&&(ss=Tt()+500,ku&&wr()))}function vn(t,e){var n=t.callbackNode;Fx(t,e);var i=tu(t,t===Ot?Gt:0);if(i===0)n!==null&&Hp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Hp(n),e===1)t.tag===0?US(Nm.bind(null,t)):qv(Nm.bind(null,t)),LS(function(){!(Ze&6)&&wr()}),n=null;else{switch(Mv(i)){case 1:n=ph;break;case 4:n=xv;break;case 16:n=eu;break;case 536870912:n=Sv;break;default:n=eu}n=j_(n,H_.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function H_(t,e){if(Hl=-1,zl=0,Ze&6)throw Error(ee(327));var n=t.callbackNode;if(Ko()&&t.callbackNode!==n)return null;var i=tu(t,t===Ot?Gt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=yu(t,i);else{e=i;var r=Ze;Ze|=2;var o=G_();(Ot!==t||Gt!==e)&&(Pi=null,ss=Tt()+500,Wr(t,e));do try{nE();break}catch(a){z_(t,a)}while(1);Ch(),gu.current=o,Ze=r,Ct!==null?e=0:(Ot=null,Gt=0,e=bt)}if(e!==0){if(e===2&&(r=Kf(t),r!==0&&(i=r,e=wd(t,r))),e===1)throw n=va,Wr(t,0),ir(t,i),vn(t,Tt()),n;if(e===6)ir(t,i);else{if(r=t.current.alternate,!(i&30)&&!eE(r)&&(e=yu(t,i),e===2&&(o=Kf(t),o!==0&&(i=o,e=wd(t,o))),e===1))throw n=va,Wr(t,0),ir(t,i),vn(t,Tt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ee(345));case 2:Ur(t,hn,Pi);break;case 3:if(ir(t,i),(i&130023424)===i&&(e=Gh+500-Tt(),10<e)){if(tu(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){cn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=od(Ur.bind(null,t,hn,Pi),e);break}Ur(t,hn,Pi);break;case 4:if(ir(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var s=31-ri(i);o=1<<s,s=e[s],s>r&&(r=s),i&=~o}if(i=r,i=Tt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*JS(i/1960))-i,10<i){t.timeoutHandle=od(Ur.bind(null,t,hn,Pi),i);break}Ur(t,hn,Pi);break;case 5:Ur(t,hn,Pi);break;default:throw Error(ee(329))}}}return vn(t,Tt()),t.callbackNode===n?H_.bind(null,t):null}function wd(t,e){var n=Ys;return t.current.memoizedState.isDehydrated&&(Wr(t,e).flags|=256),t=yu(t,e),t!==2&&(e=hn,hn=n,e!==null&&Ad(e)),t}function Ad(t){hn===null?hn=t:hn.push.apply(hn,t)}function eE(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],o=r.getSnapshot;r=r.value;try{if(!li(o(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ir(t,e){for(e&=~zh,e&=~Gu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-ri(e),i=1<<n;t[n]=-1,e&=~i}}function Nm(t){if(Ze&6)throw Error(ee(327));Ko();var e=tu(t,0);if(!(e&1))return vn(t,Tt()),null;var n=yu(t,e);if(t.tag!==0&&n===2){var i=Kf(t);i!==0&&(e=i,n=wd(t,i))}if(n===1)throw n=va,Wr(t,0),ir(t,e),vn(t,Tt()),n;if(n===6)throw Error(ee(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Ur(t,hn,Pi),vn(t,Tt()),null}function Vh(t,e){var n=Ze;Ze|=1;try{return t(e)}finally{Ze=n,Ze===0&&(ss=Tt()+500,ku&&wr())}}function to(t){or!==null&&or.tag===0&&!(Ze&6)&&Ko();var e=Ze;Ze|=1;var n=zn.transition,i=et;try{if(zn.transition=null,et=1,t)return t()}finally{et=i,zn.transition=n,Ze=e,!(Ze&6)&&wr()}}function Wh(){Mn=zo.current,ht(zo)}function Wr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,PS(n)),Ct!==null)for(n=Ct.return;n!==null;){var i=n;switch(Th(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&su();break;case 3:rs(),ht(mn),ht(Qt),Ih();break;case 5:Nh(i);break;case 4:rs();break;case 13:ht(vt);break;case 19:ht(vt);break;case 10:Rh(i.type._context);break;case 22:case 23:Wh()}n=n.return}if(Ot=t,Ct=t=mr(t.current,null),Gt=Mn=e,bt=0,va=null,zh=Gu=eo=0,hn=Ys=null,zr!==null){for(e=0;e<zr.length;e++)if(n=zr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,o=n.pending;if(o!==null){var s=o.next;o.next=r,i.next=s}n.pending=i}zr=null}return t}function z_(t,e){do{var n=Ct;try{if(Ch(),Ol.current=mu,pu){for(var i=_t.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}pu=!1}if(Jr=0,Ut=Rt=_t=null,js=!1,pa=0,Hh.current=null,n===null||n.return===null){bt=1,va=e,Ct=null;break}e:{var o=t,s=n.return,a=n,l=e;if(e=Gt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var f=c.alternate;f?(c.updateQueue=f.updateQueue,c.memoizedState=f.memoizedState,c.lanes=f.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=ym(s);if(p!==null){p.flags&=-257,xm(p,s,a,o,e),p.mode&1&&_m(o,u,e),e=p,l=u;var _=e.updateQueue;if(_===null){var y=new Set;y.add(l),e.updateQueue=y}else _.add(l);break e}else{if(!(e&1)){_m(o,u,e),Xh();break e}l=Error(ee(426))}}else if(pt&&a.mode&1){var g=ym(s);if(g!==null){!(g.flags&65536)&&(g.flags|=256),xm(g,s,a,o,e),wh(os(l,a));break e}}o=l=os(l,a),bt!==4&&(bt=2),Ys===null?Ys=[o]:Ys.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,e&=-e,o.lanes|=e;var h=T_(o,l,e);fm(o,h);break e;case 1:a=l;var v=o.type,m=o.stateNode;if(!(o.flags&128)&&(typeof v.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(hr===null||!hr.has(m)))){o.flags|=65536,e&=-e,o.lanes|=e;var x=w_(o,a,e);fm(o,x);break e}}o=o.return}while(o!==null)}W_(n)}catch(R){e=R,Ct===n&&n!==null&&(Ct=n=n.return);continue}break}while(1)}function G_(){var t=gu.current;return gu.current=mu,t===null?mu:t}function Xh(){(bt===0||bt===3||bt===2)&&(bt=4),Ot===null||!(eo&268435455)&&!(Gu&268435455)||ir(Ot,Gt)}function yu(t,e){var n=Ze;Ze|=2;var i=G_();(Ot!==t||Gt!==e)&&(Pi=null,Wr(t,e));do try{tE();break}catch(r){z_(t,r)}while(1);if(Ch(),Ze=n,gu.current=i,Ct!==null)throw Error(ee(261));return Ot=null,Gt=0,bt}function tE(){for(;Ct!==null;)V_(Ct)}function nE(){for(;Ct!==null&&!Cx();)V_(Ct)}function V_(t){var e=$_(t.alternate,t,Mn);t.memoizedProps=t.pendingProps,e===null?W_(t):Ct=e,Hh.current=null}function W_(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=YS(n,e),n!==null){n.flags&=32767,Ct=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{bt=6,Ct=null;return}}else if(n=qS(n,e,Mn),n!==null){Ct=n;return}if(e=e.sibling,e!==null){Ct=e;return}Ct=e=t}while(e!==null);bt===0&&(bt=5)}function Ur(t,e,n){var i=et,r=zn.transition;try{zn.transition=null,et=1,iE(t,e,n,i)}finally{zn.transition=r,et=i}return null}function iE(t,e,n,i){do Ko();while(or!==null);if(Ze&6)throw Error(ee(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ee(177));t.callbackNode=null,t.callbackPriority=0;var o=n.lanes|n.childLanes;if(Ox(t,o),t===Ot&&(Ct=Ot=null,Gt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ka||(Ka=!0,j_(eu,function(){return Ko(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=zn.transition,zn.transition=null;var s=et;et=1;var a=Ze;Ze|=4,Hh.current=null,KS(t,n),k_(n,t),MS(id),nu=!!nd,id=nd=null,t.current=n,QS(n),Rx(),Ze=a,et=s,zn.transition=o}else t.current=n;if(Ka&&(Ka=!1,or=t,_u=r),o=t.pendingLanes,o===0&&(hr=null),Lx(n.stateNode),vn(t,Tt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(vu)throw vu=!1,t=Md,Md=null,t;return _u&1&&t.tag!==0&&Ko(),o=t.pendingLanes,o&1?t===Td?Zs++:(Zs=0,Td=t):Zs=0,wr(),null}function Ko(){if(or!==null){var t=Mv(_u),e=zn.transition,n=et;try{if(zn.transition=null,et=16>t?16:t,or===null)var i=!1;else{if(t=or,or=null,_u=0,Ze&6)throw Error(ee(331));var r=Ze;for(Ze|=4,de=t.current;de!==null;){var o=de,s=o.child;if(de.flags&16){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(de=u;de!==null;){var c=de;switch(c.tag){case 0:case 11:case 15:qs(8,c,o)}var d=c.child;if(d!==null)d.return=c,de=d;else for(;de!==null;){c=de;var f=c.sibling,p=c.return;if(U_(c),c===u){de=null;break}if(f!==null){f.return=p,de=f;break}de=p}}}var _=o.alternate;if(_!==null){var y=_.child;if(y!==null){_.child=null;do{var g=y.sibling;y.sibling=null,y=g}while(y!==null)}}de=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,de=s;else e:for(;de!==null;){if(o=de,o.flags&2048)switch(o.tag){case 0:case 11:case 15:qs(9,o,o.return)}var h=o.sibling;if(h!==null){h.return=o.return,de=h;break e}de=o.return}}var v=t.current;for(de=v;de!==null;){s=de;var m=s.child;if(s.subtreeFlags&2064&&m!==null)m.return=s,de=m;else e:for(s=v;de!==null;){if(a=de,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:zu(9,a)}}catch(R){Et(a,a.return,R)}if(a===s){de=null;break e}var x=a.sibling;if(x!==null){x.return=a.return,de=x;break e}de=a.return}}if(Ze=r,wr(),yi&&typeof yi.onPostCommitFiberRoot=="function")try{yi.onPostCommitFiberRoot(Iu,t)}catch{}i=!0}return i}finally{et=n,zn.transition=e}}return!1}function Im(t,e,n){e=os(n,e),e=T_(t,e,1),t=dr(t,e,1),e=cn(),t!==null&&(Ta(t,1,e),vn(t,e))}function Et(t,e,n){if(t.tag===3)Im(t,t,n);else for(;e!==null;){if(e.tag===3){Im(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(hr===null||!hr.has(i))){t=os(n,t),t=w_(e,t,1),e=dr(e,t,1),t=cn(),e!==null&&(Ta(e,1,t),vn(e,t));break}}e=e.return}}function rE(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=cn(),t.pingedLanes|=t.suspendedLanes&n,Ot===t&&(Gt&n)===n&&(bt===4||bt===3&&(Gt&130023424)===Gt&&500>Tt()-Gh?Wr(t,0):zh|=n),vn(t,e)}function X_(t,e){e===0&&(t.mode&1?(e=za,za<<=1,!(za&130023424)&&(za=4194304)):e=1);var n=cn();t=Hi(t,e),t!==null&&(Ta(t,e,n),vn(t,n))}function oE(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),X_(t,n)}function sE(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ee(314))}i!==null&&i.delete(e),X_(t,n)}var $_;$_=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||mn.current)pn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return pn=!1,jS(t,e,n);pn=!!(t.flags&131072)}else pn=!1,pt&&e.flags&1048576&&Yv(e,uu,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Bl(t,e),t=e.pendingProps;var r=ts(e,Qt.current);Zo(e,n),r=Uh(null,e,i,t,r,n);var o=Fh();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,gn(i)?(o=!0,au(e)):o=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Ph(e),r.updater=Bu,e.stateNode=r,r._reactInternals=e,dd(e,i,t,n),e=md(null,e,i,!0,o,n)):(e.tag=0,pt&&o&&Mh(e),an(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Bl(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=lE(i),t=Kn(i,t),r){case 0:e=pd(null,e,i,t,n);break e;case 1:e=Mm(null,e,i,t,n);break e;case 11:e=Sm(null,e,i,t,n);break e;case 14:e=Em(null,e,i,Kn(i.type,t),n);break e}throw Error(ee(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Kn(i,r),pd(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Kn(i,r),Mm(t,e,i,r,n);case 3:e:{if(b_(e),t===null)throw Error(ee(387));i=e.pendingProps,o=e.memoizedState,r=o.element,Jv(t,e),du(e,i,null,n);var s=e.memoizedState;if(i=s.element,o.isDehydrated)if(o={element:i,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},e.updateQueue.baseState=o,e.memoizedState=o,e.flags&256){r=os(Error(ee(423)),e),e=Tm(t,e,i,n,r);break e}else if(i!==r){r=os(Error(ee(424)),e),e=Tm(t,e,i,n,r);break e}else for(Tn=fr(e.stateNode.containerInfo.firstChild),An=e,pt=!0,Jn=null,n=i_(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ns(),i===r){e=zi(t,e,n);break e}an(t,e,i,n)}e=e.child}return e;case 5:return r_(e),t===null&&ud(e),i=e.type,r=e.pendingProps,o=t!==null?t.memoizedProps:null,s=r.children,rd(i,r)?s=null:o!==null&&rd(i,o)&&(e.flags|=32),R_(t,e),an(t,e,s,n),e.child;case 6:return t===null&&ud(e),null;case 13:return P_(t,e,n);case 4:return Lh(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=is(e,null,i,n):an(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Kn(i,r),Sm(t,e,i,r,n);case 7:return an(t,e,e.pendingProps,n),e.child;case 8:return an(t,e,e.pendingProps.children,n),e.child;case 12:return an(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,o=e.memoizedProps,s=r.value,lt(cu,i._currentValue),i._currentValue=s,o!==null)if(li(o.value,s)){if(o.children===r.children&&!mn.current){e=zi(t,e,n);break e}}else for(o=e.child,o!==null&&(o.return=e);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(o.tag===1){l=Oi(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),cd(o.return,n,e),a.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===e.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(ee(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),cd(s,n,e),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===e){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}an(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Zo(e,n),r=Gn(r),i=i(r),e.flags|=1,an(t,e,i,n),e.child;case 14:return i=e.type,r=Kn(i,e.pendingProps),r=Kn(i.type,r),Em(t,e,i,r,n);case 15:return A_(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Kn(i,r),Bl(t,e),e.tag=1,gn(i)?(t=!0,au(e)):t=!1,Zo(e,n),t_(e,i,r),dd(e,i,r,n),md(null,e,i,!0,t,n);case 19:return L_(t,e,n);case 22:return C_(t,e,n)}throw Error(ee(156,e.tag))};function j_(t,e){return yv(t,e)}function aE(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Hn(t,e,n,i){return new aE(t,e,n,i)}function $h(t){return t=t.prototype,!(!t||!t.isReactComponent)}function lE(t){if(typeof t=="function")return $h(t)?1:0;if(t!=null){if(t=t.$$typeof,t===fh)return 11;if(t===dh)return 14}return 2}function mr(t,e){var n=t.alternate;return n===null?(n=Hn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Gl(t,e,n,i,r,o){var s=2;if(i=t,typeof t=="function")$h(t)&&(s=1);else if(typeof t=="string")s=5;else e:switch(t){case Lo:return Xr(n.children,r,o,e);case ch:s=8,r|=8;break;case Ff:return t=Hn(12,n,e,r|2),t.elementType=Ff,t.lanes=o,t;case Of:return t=Hn(13,n,e,r),t.elementType=Of,t.lanes=o,t;case kf:return t=Hn(19,n,e,r),t.elementType=kf,t.lanes=o,t;case nv:return Vu(n,r,o,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case ev:s=10;break e;case tv:s=9;break e;case fh:s=11;break e;case dh:s=14;break e;case Ji:s=16,i=null;break e}throw Error(ee(130,t==null?t:typeof t,""))}return e=Hn(s,n,e,r),e.elementType=t,e.type=i,e.lanes=o,e}function Xr(t,e,n,i){return t=Hn(7,t,i,e),t.lanes=n,t}function Vu(t,e,n,i){return t=Hn(22,t,i,e),t.elementType=nv,t.lanes=n,t.stateNode={isHidden:!1},t}function $c(t,e,n){return t=Hn(6,t,null,e),t.lanes=n,t}function jc(t,e,n){return e=Hn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function uE(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Cc(0),this.expirationTimes=Cc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Cc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function jh(t,e,n,i,r,o,s,a,l){return t=new uE(t,e,n,a,l),e===1?(e=1,o===!0&&(e|=8)):e=0,o=Hn(3,null,null,e),t.current=o,o.stateNode=t,o.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ph(o),t}function cE(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Po,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function q_(t){if(!t)return Sr;t=t._reactInternals;e:{if(lo(t)!==t||t.tag!==1)throw Error(ee(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(gn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ee(171))}if(t.tag===1){var n=t.type;if(gn(n))return jv(t,n,e)}return e}function Y_(t,e,n,i,r,o,s,a,l){return t=jh(n,i,!0,t,r,o,s,a,l),t.context=q_(null),n=t.current,i=cn(),r=pr(n),o=Oi(i,r),o.callback=e??null,dr(n,o,r),t.current.lanes=r,Ta(t,r,i),vn(t,i),t}function Wu(t,e,n,i){var r=e.current,o=cn(),s=pr(r);return n=q_(n),e.context===null?e.context=n:e.pendingContext=n,e=Oi(o,s),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=dr(r,e,s),t!==null&&(oi(t,r,s,o),Fl(t,r,s)),s}function xu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Dm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function qh(t,e){Dm(t,e),(t=t.alternate)&&Dm(t,e)}function fE(){return null}var Z_=typeof reportError=="function"?reportError:function(t){console.error(t)};function Yh(t){this._internalRoot=t}Xu.prototype.render=Yh.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ee(409));Wu(t,e,null,null)};Xu.prototype.unmount=Yh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;to(function(){Wu(null,t,null,null)}),e[Bi]=null}};function Xu(t){this._internalRoot=t}Xu.prototype.unstable_scheduleHydration=function(t){if(t){var e=Av();t={blockedOn:null,target:t,priority:e};for(var n=0;n<nr.length&&e!==0&&e<nr[n].priority;n++);nr.splice(n,0,t),n===0&&Rv(t)}};function Zh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function $u(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Um(){}function dE(t,e,n,i,r){if(r){if(typeof i=="function"){var o=i;i=function(){var u=xu(s);o.call(u)}}var s=Y_(e,i,t,0,null,!1,!1,"",Um);return t._reactRootContainer=s,t[Bi]=s.current,ua(t.nodeType===8?t.parentNode:t),to(),s}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=xu(l);a.call(u)}}var l=jh(t,0,!1,null,null,!1,!1,"",Um);return t._reactRootContainer=l,t[Bi]=l.current,ua(t.nodeType===8?t.parentNode:t),to(function(){Wu(e,l,n,i)}),l}function ju(t,e,n,i,r){var o=n._reactRootContainer;if(o){var s=o;if(typeof r=="function"){var a=r;r=function(){var l=xu(s);a.call(l)}}Wu(e,s,t,r)}else s=dE(n,e,t,r,i);return xu(s)}Tv=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Bs(e.pendingLanes);n!==0&&(mh(e,n|1),vn(e,Tt()),!(Ze&6)&&(ss=Tt()+500,wr()))}break;case 13:to(function(){var i=Hi(t,1);if(i!==null){var r=cn();oi(i,t,1,r)}}),qh(t,1)}};gh=function(t){if(t.tag===13){var e=Hi(t,134217728);if(e!==null){var n=cn();oi(e,t,134217728,n)}qh(t,134217728)}};wv=function(t){if(t.tag===13){var e=pr(t),n=Hi(t,e);if(n!==null){var i=cn();oi(n,t,e,i)}qh(t,e)}};Av=function(){return et};Cv=function(t,e){var n=et;try{return et=t,e()}finally{et=n}};qf=function(t,e,n){switch(e){case"input":if(zf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Ou(i);if(!r)throw Error(ee(90));rv(i),zf(i,r)}}}break;case"textarea":sv(t,n);break;case"select":e=n.value,e!=null&&$o(t,!!n.multiple,e,!1)}};hv=Vh;pv=to;var hE={usingClientEntryPoint:!1,Events:[Aa,Uo,Ou,fv,dv,Vh]},Ns={findFiberByHostInstance:Hr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},pE={bundleType:Ns.bundleType,version:Ns.version,rendererPackageName:Ns.rendererPackageName,rendererConfig:Ns.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Vi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=vv(t),t===null?null:t.stateNode},findFiberByHostInstance:Ns.findFiberByHostInstance||fE,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Qa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Qa.isDisabled&&Qa.supportsFiber)try{Iu=Qa.inject(pE),yi=Qa}catch{}}Pn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=hE;Pn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Zh(e))throw Error(ee(200));return cE(t,e,null,n)};Pn.createRoot=function(t,e){if(!Zh(t))throw Error(ee(299));var n=!1,i="",r=Z_;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=jh(t,1,!1,null,null,n,!1,i,r),t[Bi]=e.current,ua(t.nodeType===8?t.parentNode:t),new Yh(e)};Pn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ee(188)):(t=Object.keys(t).join(","),Error(ee(268,t)));return t=vv(e),t=t===null?null:t.stateNode,t};Pn.flushSync=function(t){return to(t)};Pn.hydrate=function(t,e,n){if(!$u(e))throw Error(ee(200));return ju(null,t,e,!0,n)};Pn.hydrateRoot=function(t,e,n){if(!Zh(t))throw Error(ee(405));var i=n!=null&&n.hydratedSources||null,r=!1,o="",s=Z_;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),e=Y_(e,null,t,1,n??null,r,!1,o,s),t[Bi]=e.current,ua(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Xu(e)};Pn.render=function(t,e,n){if(!$u(e))throw Error(ee(200));return ju(null,t,e,!1,n)};Pn.unmountComponentAtNode=function(t){if(!$u(t))throw Error(ee(40));return t._reactRootContainer?(to(function(){ju(null,null,t,!1,function(){t._reactRootContainer=null,t[Bi]=null})}),!0):!1};Pn.unstable_batchedUpdates=Vh;Pn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!$u(n))throw Error(ee(200));if(t==null||t._reactInternals===void 0)throw Error(ee(38));return ju(t,e,n,!1,i)};Pn.version="18.2.0-next-9e3b772b8-20220608";function K_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(K_)}catch(t){console.error(t)}}K_(),Y0.exports=Pn;var mE=Y0.exports,Fm=mE;Df.createRoot=Fm.createRoot,Df.hydrateRoot=Fm.hydrateRoot;var Cd=function(t,e){return Cd=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,i){n.__proto__=i}||function(n,i){for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(n[r]=i[r])},Cd(t,e)};function Xn(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");Cd(t,e);function n(){this.constructor=t}t.prototype=e===null?Object.create(e):(n.prototype=e.prototype,new n)}var ge=function(){return ge=Object.assign||function(e){for(var n,i=1,r=arguments.length;i<r;i++){n=arguments[i];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},ge.apply(this,arguments)};function as(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,i=Object.getOwnPropertySymbols(t);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(t,i[r])&&(n[i[r]]=t[i[r]]);return n}function pi(t,e,n){if(n||arguments.length===2)for(var i=0,r=e.length,o;i<r;i++)(o||!(i in e))&&(o||(o=Array.prototype.slice.call(e,0,i)),o[i]=e[i]);return t.concat(o||Array.prototype.slice.call(e))}var Q_={exports:{}},tt={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kt=typeof Symbol=="function"&&Symbol.for,Kh=kt?Symbol.for("react.element"):60103,Qh=kt?Symbol.for("react.portal"):60106,qu=kt?Symbol.for("react.fragment"):60107,Yu=kt?Symbol.for("react.strict_mode"):60108,Zu=kt?Symbol.for("react.profiler"):60114,Ku=kt?Symbol.for("react.provider"):60109,Qu=kt?Symbol.for("react.context"):60110,Jh=kt?Symbol.for("react.async_mode"):60111,Ju=kt?Symbol.for("react.concurrent_mode"):60111,ec=kt?Symbol.for("react.forward_ref"):60112,tc=kt?Symbol.for("react.suspense"):60113,gE=kt?Symbol.for("react.suspense_list"):60120,nc=kt?Symbol.for("react.memo"):60115,ic=kt?Symbol.for("react.lazy"):60116,vE=kt?Symbol.for("react.block"):60121,_E=kt?Symbol.for("react.fundamental"):60117,yE=kt?Symbol.for("react.responder"):60118,xE=kt?Symbol.for("react.scope"):60119;function Nn(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case Kh:switch(t=t.type,t){case Jh:case Ju:case qu:case Zu:case Yu:case tc:return t;default:switch(t=t&&t.$$typeof,t){case Qu:case ec:case ic:case nc:case Ku:return t;default:return e}}case Qh:return e}}}function J_(t){return Nn(t)===Ju}tt.AsyncMode=Jh;tt.ConcurrentMode=Ju;tt.ContextConsumer=Qu;tt.ContextProvider=Ku;tt.Element=Kh;tt.ForwardRef=ec;tt.Fragment=qu;tt.Lazy=ic;tt.Memo=nc;tt.Portal=Qh;tt.Profiler=Zu;tt.StrictMode=Yu;tt.Suspense=tc;tt.isAsyncMode=function(t){return J_(t)||Nn(t)===Jh};tt.isConcurrentMode=J_;tt.isContextConsumer=function(t){return Nn(t)===Qu};tt.isContextProvider=function(t){return Nn(t)===Ku};tt.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===Kh};tt.isForwardRef=function(t){return Nn(t)===ec};tt.isFragment=function(t){return Nn(t)===qu};tt.isLazy=function(t){return Nn(t)===ic};tt.isMemo=function(t){return Nn(t)===nc};tt.isPortal=function(t){return Nn(t)===Qh};tt.isProfiler=function(t){return Nn(t)===Zu};tt.isStrictMode=function(t){return Nn(t)===Yu};tt.isSuspense=function(t){return Nn(t)===tc};tt.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===qu||t===Ju||t===Zu||t===Yu||t===tc||t===gE||typeof t=="object"&&t!==null&&(t.$$typeof===ic||t.$$typeof===nc||t.$$typeof===Ku||t.$$typeof===Qu||t.$$typeof===ec||t.$$typeof===_E||t.$$typeof===yE||t.$$typeof===xE||t.$$typeof===vE)};tt.typeOf=Nn;Q_.exports=tt;var SE=Q_.exports,e1=SE,EE={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},ME={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},t1={};t1[e1.ForwardRef]=EE;t1[e1.Memo]=ME;function n1(t,e,n){if(n===void 0&&(n=Error),!t)throw new n(e)}var je;(function(t){t[t.EXPECT_ARGUMENT_CLOSING_BRACE=1]="EXPECT_ARGUMENT_CLOSING_BRACE",t[t.EMPTY_ARGUMENT=2]="EMPTY_ARGUMENT",t[t.MALFORMED_ARGUMENT=3]="MALFORMED_ARGUMENT",t[t.EXPECT_ARGUMENT_TYPE=4]="EXPECT_ARGUMENT_TYPE",t[t.INVALID_ARGUMENT_TYPE=5]="INVALID_ARGUMENT_TYPE",t[t.EXPECT_ARGUMENT_STYLE=6]="EXPECT_ARGUMENT_STYLE",t[t.INVALID_NUMBER_SKELETON=7]="INVALID_NUMBER_SKELETON",t[t.INVALID_DATE_TIME_SKELETON=8]="INVALID_DATE_TIME_SKELETON",t[t.EXPECT_NUMBER_SKELETON=9]="EXPECT_NUMBER_SKELETON",t[t.EXPECT_DATE_TIME_SKELETON=10]="EXPECT_DATE_TIME_SKELETON",t[t.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE=11]="UNCLOSED_QUOTE_IN_ARGUMENT_STYLE",t[t.EXPECT_SELECT_ARGUMENT_OPTIONS=12]="EXPECT_SELECT_ARGUMENT_OPTIONS",t[t.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE=13]="EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE",t[t.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE=14]="INVALID_PLURAL_ARGUMENT_OFFSET_VALUE",t[t.EXPECT_SELECT_ARGUMENT_SELECTOR=15]="EXPECT_SELECT_ARGUMENT_SELECTOR",t[t.EXPECT_PLURAL_ARGUMENT_SELECTOR=16]="EXPECT_PLURAL_ARGUMENT_SELECTOR",t[t.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT=17]="EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT",t[t.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT=18]="EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT",t[t.INVALID_PLURAL_ARGUMENT_SELECTOR=19]="INVALID_PLURAL_ARGUMENT_SELECTOR",t[t.DUPLICATE_PLURAL_ARGUMENT_SELECTOR=20]="DUPLICATE_PLURAL_ARGUMENT_SELECTOR",t[t.DUPLICATE_SELECT_ARGUMENT_SELECTOR=21]="DUPLICATE_SELECT_ARGUMENT_SELECTOR",t[t.MISSING_OTHER_CLAUSE=22]="MISSING_OTHER_CLAUSE",t[t.INVALID_TAG=23]="INVALID_TAG",t[t.INVALID_TAG_NAME=25]="INVALID_TAG_NAME",t[t.UNMATCHED_CLOSING_TAG=26]="UNMATCHED_CLOSING_TAG",t[t.UNCLOSED_TAG=27]="UNCLOSED_TAG"})(je||(je={}));var dt;(function(t){t[t.literal=0]="literal",t[t.argument=1]="argument",t[t.number=2]="number",t[t.date=3]="date",t[t.time=4]="time",t[t.select=5]="select",t[t.plural=6]="plural",t[t.pound=7]="pound",t[t.tag=8]="tag"})(dt||(dt={}));var ls;(function(t){t[t.number=0]="number",t[t.dateTime=1]="dateTime"})(ls||(ls={}));function Om(t){return t.type===dt.literal}function TE(t){return t.type===dt.argument}function i1(t){return t.type===dt.number}function r1(t){return t.type===dt.date}function o1(t){return t.type===dt.time}function s1(t){return t.type===dt.select}function a1(t){return t.type===dt.plural}function wE(t){return t.type===dt.pound}function l1(t){return t.type===dt.tag}function u1(t){return!!(t&&typeof t=="object"&&t.type===ls.number)}function Rd(t){return!!(t&&typeof t=="object"&&t.type===ls.dateTime)}var c1=/[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/,AE=/(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;function CE(t){var e={};return t.replace(AE,function(n){var i=n.length;switch(n[0]){case"G":e.era=i===4?"long":i===5?"narrow":"short";break;case"y":e.year=i===2?"2-digit":"numeric";break;case"Y":case"u":case"U":case"r":throw new RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");case"q":case"Q":throw new RangeError("`q/Q` (quarter) patterns are not supported");case"M":case"L":e.month=["numeric","2-digit","short","long","narrow"][i-1];break;case"w":case"W":throw new RangeError("`w/W` (week) patterns are not supported");case"d":e.day=["numeric","2-digit"][i-1];break;case"D":case"F":case"g":throw new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");case"E":e.weekday=i===4?"long":i===5?"narrow":"short";break;case"e":if(i<4)throw new RangeError("`e..eee` (weekday) patterns are not supported");e.weekday=["short","long","narrow","short"][i-4];break;case"c":if(i<4)throw new RangeError("`c..ccc` (weekday) patterns are not supported");e.weekday=["short","long","narrow","short"][i-4];break;case"a":e.hour12=!0;break;case"b":case"B":throw new RangeError("`b/B` (period) patterns are not supported, use `a` instead");case"h":e.hourCycle="h12",e.hour=["numeric","2-digit"][i-1];break;case"H":e.hourCycle="h23",e.hour=["numeric","2-digit"][i-1];break;case"K":e.hourCycle="h11",e.hour=["numeric","2-digit"][i-1];break;case"k":e.hourCycle="h24",e.hour=["numeric","2-digit"][i-1];break;case"j":case"J":case"C":throw new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");case"m":e.minute=["numeric","2-digit"][i-1];break;case"s":e.second=["numeric","2-digit"][i-1];break;case"S":case"A":throw new RangeError("`S/A` (second) patterns are not supported, use `s` instead");case"z":e.timeZoneName=i<4?"short":"long";break;case"Z":case"O":case"v":case"V":case"X":case"x":throw new RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead")}return""}),e}var RE=/[\t-\r \x85\u200E\u200F\u2028\u2029]/i;function bE(t){if(t.length===0)throw new Error("Number skeleton cannot be empty");for(var e=t.split(RE).filter(function(f){return f.length>0}),n=[],i=0,r=e;i<r.length;i++){var o=r[i],s=o.split("/");if(s.length===0)throw new Error("Invalid number skeleton");for(var a=s[0],l=s.slice(1),u=0,c=l;u<c.length;u++){var d=c[u];if(d.length===0)throw new Error("Invalid number skeleton")}n.push({stem:a,options:l})}return n}function PE(t){return t.replace(/^(.*?)-/,"")}var km=/^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g,f1=/^(@+)?(\+|#+)?[rs]?$/g,LE=/(\*)(0+)|(#+)(0+)|(0+)/g,d1=/^(0+)$/;function Bm(t){var e={};return t[t.length-1]==="r"?e.roundingPriority="morePrecision":t[t.length-1]==="s"&&(e.roundingPriority="lessPrecision"),t.replace(f1,function(n,i,r){return typeof r!="string"?(e.minimumSignificantDigits=i.length,e.maximumSignificantDigits=i.length):r==="+"?e.minimumSignificantDigits=i.length:i[0]==="#"?e.maximumSignificantDigits=i.length:(e.minimumSignificantDigits=i.length,e.maximumSignificantDigits=i.length+(typeof r=="string"?r.length:0)),""}),e}function h1(t){switch(t){case"sign-auto":return{signDisplay:"auto"};case"sign-accounting":case"()":return{currencySign:"accounting"};case"sign-always":case"+!":return{signDisplay:"always"};case"sign-accounting-always":case"()!":return{signDisplay:"always",currencySign:"accounting"};case"sign-except-zero":case"+?":return{signDisplay:"exceptZero"};case"sign-accounting-except-zero":case"()?":return{signDisplay:"exceptZero",currencySign:"accounting"};case"sign-never":case"+_":return{signDisplay:"never"}}}function NE(t){var e;if(t[0]==="E"&&t[1]==="E"?(e={notation:"engineering"},t=t.slice(2)):t[0]==="E"&&(e={notation:"scientific"},t=t.slice(1)),e){var n=t.slice(0,2);if(n==="+!"?(e.signDisplay="always",t=t.slice(2)):n==="+?"&&(e.signDisplay="exceptZero",t=t.slice(2)),!d1.test(t))throw new Error("Malformed concise eng/scientific notation");e.minimumIntegerDigits=t.length}return e}function Hm(t){var e={},n=h1(t);return n||e}function IE(t){for(var e={},n=0,i=t;n<i.length;n++){var r=i[n];switch(r.stem){case"percent":case"%":e.style="percent";continue;case"%x100":e.style="percent",e.scale=100;continue;case"currency":e.style="currency",e.currency=r.options[0];continue;case"group-off":case",_":e.useGrouping=!1;continue;case"precision-integer":case".":e.maximumFractionDigits=0;continue;case"measure-unit":case"unit":e.style="unit",e.unit=PE(r.options[0]);continue;case"compact-short":case"K":e.notation="compact",e.compactDisplay="short";continue;case"compact-long":case"KK":e.notation="compact",e.compactDisplay="long";continue;case"scientific":e=ge(ge(ge({},e),{notation:"scientific"}),r.options.reduce(function(l,u){return ge(ge({},l),Hm(u))},{}));continue;case"engineering":e=ge(ge(ge({},e),{notation:"engineering"}),r.options.reduce(function(l,u){return ge(ge({},l),Hm(u))},{}));continue;case"notation-simple":e.notation="standard";continue;case"unit-width-narrow":e.currencyDisplay="narrowSymbol",e.unitDisplay="narrow";continue;case"unit-width-short":e.currencyDisplay="code",e.unitDisplay="short";continue;case"unit-width-full-name":e.currencyDisplay="name",e.unitDisplay="long";continue;case"unit-width-iso-code":e.currencyDisplay="symbol";continue;case"scale":e.scale=parseFloat(r.options[0]);continue;case"integer-width":if(r.options.length>1)throw new RangeError("integer-width stems only accept a single optional option");r.options[0].replace(LE,function(l,u,c,d,f,p){if(u)e.minimumIntegerDigits=c.length;else{if(d&&f)throw new Error("We currently do not support maximum integer digits");if(p)throw new Error("We currently do not support exact integer digits")}return""});continue}if(d1.test(r.stem)){e.minimumIntegerDigits=r.stem.length;continue}if(km.test(r.stem)){if(r.options.length>1)throw new RangeError("Fraction-precision stems only accept a single optional option");r.stem.replace(km,function(l,u,c,d,f,p){return c==="*"?e.minimumFractionDigits=u.length:d&&d[0]==="#"?e.maximumFractionDigits=d.length:f&&p?(e.minimumFractionDigits=f.length,e.maximumFractionDigits=f.length+p.length):(e.minimumFractionDigits=u.length,e.maximumFractionDigits=u.length),""});var o=r.options[0];o==="w"?e=ge(ge({},e),{trailingZeroDisplay:"stripIfInteger"}):o&&(e=ge(ge({},e),Bm(o)));continue}if(f1.test(r.stem)){e=ge(ge({},e),Bm(r.stem));continue}var s=h1(r.stem);s&&(e=ge(ge({},e),s));var a=NE(r.stem);a&&(e=ge(ge({},e),a))}return e}var Ja={"001":["H","h"],AC:["H","h","hb","hB"],AD:["H","hB"],AE:["h","hB","hb","H"],AF:["H","hb","hB","h"],AG:["h","hb","H","hB"],AI:["H","h","hb","hB"],AL:["h","H","hB"],AM:["H","hB"],AO:["H","hB"],AR:["H","h","hB","hb"],AS:["h","H"],AT:["H","hB"],AU:["h","hb","H","hB"],AW:["H","hB"],AX:["H"],AZ:["H","hB","h"],BA:["H","hB","h"],BB:["h","hb","H","hB"],BD:["h","hB","H"],BE:["H","hB"],BF:["H","hB"],BG:["H","hB","h"],BH:["h","hB","hb","H"],BI:["H","h"],BJ:["H","hB"],BL:["H","hB"],BM:["h","hb","H","hB"],BN:["hb","hB","h","H"],BO:["H","hB","h","hb"],BQ:["H"],BR:["H","hB"],BS:["h","hb","H","hB"],BT:["h","H"],BW:["H","h","hb","hB"],BY:["H","h"],BZ:["H","h","hb","hB"],CA:["h","hb","H","hB"],CC:["H","h","hb","hB"],CD:["hB","H"],CF:["H","h","hB"],CG:["H","hB"],CH:["H","hB","h"],CI:["H","hB"],CK:["H","h","hb","hB"],CL:["H","h","hB","hb"],CM:["H","h","hB"],CN:["H","hB","hb","h"],CO:["h","H","hB","hb"],CP:["H"],CR:["H","h","hB","hb"],CU:["H","h","hB","hb"],CV:["H","hB"],CW:["H","hB"],CX:["H","h","hb","hB"],CY:["h","H","hb","hB"],CZ:["H"],DE:["H","hB"],DG:["H","h","hb","hB"],DJ:["h","H"],DK:["H"],DM:["h","hb","H","hB"],DO:["h","H","hB","hb"],DZ:["h","hB","hb","H"],EA:["H","h","hB","hb"],EC:["H","hB","h","hb"],EE:["H","hB"],EG:["h","hB","hb","H"],EH:["h","hB","hb","H"],ER:["h","H"],ES:["H","hB","h","hb"],ET:["hB","hb","h","H"],FI:["H"],FJ:["h","hb","H","hB"],FK:["H","h","hb","hB"],FM:["h","hb","H","hB"],FO:["H","h"],FR:["H","hB"],GA:["H","hB"],GB:["H","h","hb","hB"],GD:["h","hb","H","hB"],GE:["H","hB","h"],GF:["H","hB"],GG:["H","h","hb","hB"],GH:["h","H"],GI:["H","h","hb","hB"],GL:["H","h"],GM:["h","hb","H","hB"],GN:["H","hB"],GP:["H","hB"],GQ:["H","hB","h","hb"],GR:["h","H","hb","hB"],GT:["H","h","hB","hb"],GU:["h","hb","H","hB"],GW:["H","hB"],GY:["h","hb","H","hB"],HK:["h","hB","hb","H"],HN:["H","h","hB","hb"],HR:["H","hB"],HU:["H","h"],IC:["H","h","hB","hb"],ID:["H"],IE:["H","h","hb","hB"],IL:["H","hB"],IM:["H","h","hb","hB"],IN:["h","H"],IO:["H","h","hb","hB"],IQ:["h","hB","hb","H"],IR:["hB","H"],IS:["H"],IT:["H","hB"],JE:["H","h","hb","hB"],JM:["h","hb","H","hB"],JO:["h","hB","hb","H"],JP:["H","K","h"],KE:["hB","hb","H","h"],KG:["H","h","hB","hb"],KH:["hB","h","H","hb"],KI:["h","hb","H","hB"],KM:["H","h","hB","hb"],KN:["h","hb","H","hB"],KP:["h","H","hB","hb"],KR:["h","H","hB","hb"],KW:["h","hB","hb","H"],KY:["h","hb","H","hB"],KZ:["H","hB"],LA:["H","hb","hB","h"],LB:["h","hB","hb","H"],LC:["h","hb","H","hB"],LI:["H","hB","h"],LK:["H","h","hB","hb"],LR:["h","hb","H","hB"],LS:["h","H"],LT:["H","h","hb","hB"],LU:["H","h","hB"],LV:["H","hB","hb","h"],LY:["h","hB","hb","H"],MA:["H","h","hB","hb"],MC:["H","hB"],MD:["H","hB"],ME:["H","hB","h"],MF:["H","hB"],MG:["H","h"],MH:["h","hb","H","hB"],MK:["H","h","hb","hB"],ML:["H"],MM:["hB","hb","H","h"],MN:["H","h","hb","hB"],MO:["h","hB","hb","H"],MP:["h","hb","H","hB"],MQ:["H","hB"],MR:["h","hB","hb","H"],MS:["H","h","hb","hB"],MT:["H","h"],MU:["H","h"],MV:["H","h"],MW:["h","hb","H","hB"],MX:["H","h","hB","hb"],MY:["hb","hB","h","H"],MZ:["H","hB"],NA:["h","H","hB","hb"],NC:["H","hB"],NE:["H"],NF:["H","h","hb","hB"],NG:["H","h","hb","hB"],NI:["H","h","hB","hb"],NL:["H","hB"],NO:["H","h"],NP:["H","h","hB"],NR:["H","h","hb","hB"],NU:["H","h","hb","hB"],NZ:["h","hb","H","hB"],OM:["h","hB","hb","H"],PA:["h","H","hB","hb"],PE:["H","hB","h","hb"],PF:["H","h","hB"],PG:["h","H"],PH:["h","hB","hb","H"],PK:["h","hB","H"],PL:["H","h"],PM:["H","hB"],PN:["H","h","hb","hB"],PR:["h","H","hB","hb"],PS:["h","hB","hb","H"],PT:["H","hB"],PW:["h","H"],PY:["H","h","hB","hb"],QA:["h","hB","hb","H"],RE:["H","hB"],RO:["H","hB"],RS:["H","hB","h"],RU:["H"],RW:["H","h"],SA:["h","hB","hb","H"],SB:["h","hb","H","hB"],SC:["H","h","hB"],SD:["h","hB","hb","H"],SE:["H"],SG:["h","hb","H","hB"],SH:["H","h","hb","hB"],SI:["H","hB"],SJ:["H"],SK:["H"],SL:["h","hb","H","hB"],SM:["H","h","hB"],SN:["H","h","hB"],SO:["h","H"],SR:["H","hB"],SS:["h","hb","H","hB"],ST:["H","hB"],SV:["H","h","hB","hb"],SX:["H","h","hb","hB"],SY:["h","hB","hb","H"],SZ:["h","hb","H","hB"],TA:["H","h","hb","hB"],TC:["h","hb","H","hB"],TD:["h","H","hB"],TF:["H","h","hB"],TG:["H","hB"],TH:["H","h"],TJ:["H","h"],TL:["H","hB","hb","h"],TM:["H","h"],TN:["h","hB","hb","H"],TO:["h","H"],TR:["H","hB"],TT:["h","hb","H","hB"],TW:["hB","hb","h","H"],TZ:["hB","hb","H","h"],UA:["H","hB","h"],UG:["hB","hb","H","h"],UM:["h","hb","H","hB"],US:["h","hb","H","hB"],UY:["H","h","hB","hb"],UZ:["H","hB","h"],VA:["H","h","hB"],VC:["h","hb","H","hB"],VE:["h","H","hB","hb"],VG:["h","hb","H","hB"],VI:["h","hb","H","hB"],VN:["H","h"],VU:["h","H"],WF:["H","hB"],WS:["h","H"],XK:["H","hB","h"],YE:["h","hB","hb","H"],YT:["H","hB"],ZA:["H","h","hb","hB"],ZM:["h","hb","H","hB"],ZW:["H","h"],"af-ZA":["H","h","hB","hb"],"ar-001":["h","hB","hb","H"],"ca-ES":["H","h","hB"],"en-001":["h","hb","H","hB"],"es-BO":["H","h","hB","hb"],"es-BR":["H","h","hB","hb"],"es-EC":["H","h","hB","hb"],"es-ES":["H","h","hB","hb"],"es-GQ":["H","h","hB","hb"],"es-PE":["H","h","hB","hb"],"fr-CA":["H","h","hB"],"gl-ES":["H","h","hB"],"gu-IN":["hB","hb","h","H"],"hi-IN":["hB","h","H"],"it-CH":["H","h","hB"],"it-IT":["H","h","hB"],"kn-IN":["hB","h","H"],"ml-IN":["hB","h","H"],"mr-IN":["hB","hb","h","H"],"pa-IN":["hB","hb","h","H"],"ta-IN":["hB","h","hb","H"],"te-IN":["hB","h","H"],"zu-ZA":["H","hB","hb","h"]};function DE(t,e){for(var n="",i=0;i<t.length;i++){var r=t.charAt(i);if(r==="j"){for(var o=0;i+1<t.length&&t.charAt(i+1)===r;)o++,i++;var s=1+(o&1),a=o<2?1:3+(o>>1),l="a",u=UE(e);for((u=="H"||u=="k")&&(a=0);a-- >0;)n+=l;for(;s-- >0;)n=u+n}else r==="J"?n+="H":n+=r}return n}function UE(t){var e=t.hourCycle;if(e===void 0&&t.hourCycles&&t.hourCycles.length&&(e=t.hourCycles[0]),e)switch(e){case"h24":return"k";case"h23":return"H";case"h12":return"h";case"h11":return"K";default:throw new Error("Invalid hourCycle")}var n=t.language,i;n!=="root"&&(i=t.maximize().region);var r=Ja[i||""]||Ja[n||""]||Ja["".concat(n,"-001")]||Ja["001"];return r[0]}var qc,FE=new RegExp("^".concat(c1.source,"*")),OE=new RegExp("".concat(c1.source,"*$"));function qe(t,e){return{start:t,end:e}}var kE=!!String.prototype.startsWith&&"_a".startsWith("a",1),BE=!!String.fromCodePoint,HE=!!Object.fromEntries,zE=!!String.prototype.codePointAt,GE=!!String.prototype.trimStart,VE=!!String.prototype.trimEnd,WE=!!Number.isSafeInteger,XE=WE?Number.isSafeInteger:function(t){return typeof t=="number"&&isFinite(t)&&Math.floor(t)===t&&Math.abs(t)<=9007199254740991},bd=!0;try{var $E=m1("([^\\p{White_Space}\\p{Pattern_Syntax}]*)","yu");bd=((qc=$E.exec("a"))===null||qc===void 0?void 0:qc[0])==="a"}catch{bd=!1}var zm=kE?function(e,n,i){return e.startsWith(n,i)}:function(e,n,i){return e.slice(i,i+n.length)===n},Pd=BE?String.fromCodePoint:function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];for(var i="",r=e.length,o=0,s;r>o;){if(s=e[o++],s>1114111)throw RangeError(s+" is not a valid code point");i+=s<65536?String.fromCharCode(s):String.fromCharCode(((s-=65536)>>10)+55296,s%1024+56320)}return i},Gm=HE?Object.fromEntries:function(e){for(var n={},i=0,r=e;i<r.length;i++){var o=r[i],s=o[0],a=o[1];n[s]=a}return n},p1=zE?function(e,n){return e.codePointAt(n)}:function(e,n){var i=e.length;if(!(n<0||n>=i)){var r=e.charCodeAt(n),o;return r<55296||r>56319||n+1===i||(o=e.charCodeAt(n+1))<56320||o>57343?r:(r-55296<<10)+(o-56320)+65536}},jE=GE?function(e){return e.trimStart()}:function(e){return e.replace(FE,"")},qE=VE?function(e){return e.trimEnd()}:function(e){return e.replace(OE,"")};function m1(t,e){return new RegExp(t,e)}var Ld;if(bd){var Vm=m1("([^\\p{White_Space}\\p{Pattern_Syntax}]*)","yu");Ld=function(e,n){var i;Vm.lastIndex=n;var r=Vm.exec(e);return(i=r[1])!==null&&i!==void 0?i:""}}else Ld=function(e,n){for(var i=[];;){var r=p1(e,n);if(r===void 0||g1(r)||QE(r))break;i.push(r),n+=r>=65536?2:1}return Pd.apply(void 0,i)};var YE=function(){function t(e,n){n===void 0&&(n={}),this.message=e,this.position={offset:0,line:1,column:1},this.ignoreTag=!!n.ignoreTag,this.locale=n.locale,this.requiresOtherClause=!!n.requiresOtherClause,this.shouldParseSkeletons=!!n.shouldParseSkeletons}return t.prototype.parse=function(){if(this.offset()!==0)throw Error("parser can only be used once");return this.parseMessage(0,"",!1)},t.prototype.parseMessage=function(e,n,i){for(var r=[];!this.isEOF();){var o=this.char();if(o===123){var s=this.parseArgument(e,i);if(s.err)return s;r.push(s.val)}else{if(o===125&&e>0)break;if(o===35&&(n==="plural"||n==="selectordinal")){var a=this.clonePosition();this.bump(),r.push({type:dt.pound,location:qe(a,this.clonePosition())})}else if(o===60&&!this.ignoreTag&&this.peek()===47){if(i)break;return this.error(je.UNMATCHED_CLOSING_TAG,qe(this.clonePosition(),this.clonePosition()))}else if(o===60&&!this.ignoreTag&&Nd(this.peek()||0)){var s=this.parseTag(e,n);if(s.err)return s;r.push(s.val)}else{var s=this.parseLiteral(e,n);if(s.err)return s;r.push(s.val)}}}return{val:r,err:null}},t.prototype.parseTag=function(e,n){var i=this.clonePosition();this.bump();var r=this.parseTagName();if(this.bumpSpace(),this.bumpIf("/>"))return{val:{type:dt.literal,value:"<".concat(r,"/>"),location:qe(i,this.clonePosition())},err:null};if(this.bumpIf(">")){var o=this.parseMessage(e+1,n,!0);if(o.err)return o;var s=o.val,a=this.clonePosition();if(this.bumpIf("</")){if(this.isEOF()||!Nd(this.char()))return this.error(je.INVALID_TAG,qe(a,this.clonePosition()));var l=this.clonePosition(),u=this.parseTagName();return r!==u?this.error(je.UNMATCHED_CLOSING_TAG,qe(l,this.clonePosition())):(this.bumpSpace(),this.bumpIf(">")?{val:{type:dt.tag,value:r,children:s,location:qe(i,this.clonePosition())},err:null}:this.error(je.INVALID_TAG,qe(a,this.clonePosition())))}else return this.error(je.UNCLOSED_TAG,qe(i,this.clonePosition()))}else return this.error(je.INVALID_TAG,qe(i,this.clonePosition()))},t.prototype.parseTagName=function(){var e=this.offset();for(this.bump();!this.isEOF()&&KE(this.char());)this.bump();return this.message.slice(e,this.offset())},t.prototype.parseLiteral=function(e,n){for(var i=this.clonePosition(),r="";;){var o=this.tryParseQuote(n);if(o){r+=o;continue}var s=this.tryParseUnquoted(e,n);if(s){r+=s;continue}var a=this.tryParseLeftAngleBracket();if(a){r+=a;continue}break}var l=qe(i,this.clonePosition());return{val:{type:dt.literal,value:r,location:l},err:null}},t.prototype.tryParseLeftAngleBracket=function(){return!this.isEOF()&&this.char()===60&&(this.ignoreTag||!ZE(this.peek()||0))?(this.bump(),"<"):null},t.prototype.tryParseQuote=function(e){if(this.isEOF()||this.char()!==39)return null;switch(this.peek()){case 39:return this.bump(),this.bump(),"'";case 123:case 60:case 62:case 125:break;case 35:if(e==="plural"||e==="selectordinal")break;return null;default:return null}this.bump();var n=[this.char()];for(this.bump();!this.isEOF();){var i=this.char();if(i===39)if(this.peek()===39)n.push(39),this.bump();else{this.bump();break}else n.push(i);this.bump()}return Pd.apply(void 0,n)},t.prototype.tryParseUnquoted=function(e,n){if(this.isEOF())return null;var i=this.char();return i===60||i===123||i===35&&(n==="plural"||n==="selectordinal")||i===125&&e>0?null:(this.bump(),Pd(i))},t.prototype.parseArgument=function(e,n){var i=this.clonePosition();if(this.bump(),this.bumpSpace(),this.isEOF())return this.error(je.EXPECT_ARGUMENT_CLOSING_BRACE,qe(i,this.clonePosition()));if(this.char()===125)return this.bump(),this.error(je.EMPTY_ARGUMENT,qe(i,this.clonePosition()));var r=this.parseIdentifierIfPossible().value;if(!r)return this.error(je.MALFORMED_ARGUMENT,qe(i,this.clonePosition()));if(this.bumpSpace(),this.isEOF())return this.error(je.EXPECT_ARGUMENT_CLOSING_BRACE,qe(i,this.clonePosition()));switch(this.char()){case 125:return this.bump(),{val:{type:dt.argument,value:r,location:qe(i,this.clonePosition())},err:null};case 44:return this.bump(),this.bumpSpace(),this.isEOF()?this.error(je.EXPECT_ARGUMENT_CLOSING_BRACE,qe(i,this.clonePosition())):this.parseArgumentOptions(e,n,r,i);default:return this.error(je.MALFORMED_ARGUMENT,qe(i,this.clonePosition()))}},t.prototype.parseIdentifierIfPossible=function(){var e=this.clonePosition(),n=this.offset(),i=Ld(this.message,n),r=n+i.length;this.bumpTo(r);var o=this.clonePosition(),s=qe(e,o);return{value:i,location:s}},t.prototype.parseArgumentOptions=function(e,n,i,r){var o,s=this.clonePosition(),a=this.parseIdentifierIfPossible().value,l=this.clonePosition();switch(a){case"":return this.error(je.EXPECT_ARGUMENT_TYPE,qe(s,l));case"number":case"date":case"time":{this.bumpSpace();var u=null;if(this.bumpIf(",")){this.bumpSpace();var c=this.clonePosition(),d=this.parseSimpleArgStyleIfPossible();if(d.err)return d;var f=qE(d.val);if(f.length===0)return this.error(je.EXPECT_ARGUMENT_STYLE,qe(this.clonePosition(),this.clonePosition()));var p=qe(c,this.clonePosition());u={style:f,styleLocation:p}}var _=this.tryParseArgumentClose(r);if(_.err)return _;var y=qe(r,this.clonePosition());if(u&&zm(u==null?void 0:u.style,"::",0)){var g=jE(u.style.slice(2));if(a==="number"){var d=this.parseNumberSkeletonFromString(g,u.styleLocation);return d.err?d:{val:{type:dt.number,value:i,location:y,style:d.val},err:null}}else{if(g.length===0)return this.error(je.EXPECT_DATE_TIME_SKELETON,y);var h=g;this.locale&&(h=DE(g,this.locale));var f={type:ls.dateTime,pattern:h,location:u.styleLocation,parsedOptions:this.shouldParseSkeletons?CE(h):{}},v=a==="date"?dt.date:dt.time;return{val:{type:v,value:i,location:y,style:f},err:null}}}return{val:{type:a==="number"?dt.number:a==="date"?dt.date:dt.time,value:i,location:y,style:(o=u==null?void 0:u.style)!==null&&o!==void 0?o:null},err:null}}case"plural":case"selectordinal":case"select":{var m=this.clonePosition();if(this.bumpSpace(),!this.bumpIf(","))return this.error(je.EXPECT_SELECT_ARGUMENT_OPTIONS,qe(m,ge({},m)));this.bumpSpace();var x=this.parseIdentifierIfPossible(),R=0;if(a!=="select"&&x.value==="offset"){if(!this.bumpIf(":"))return this.error(je.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,qe(this.clonePosition(),this.clonePosition()));this.bumpSpace();var d=this.tryParseDecimalInteger(je.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,je.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);if(d.err)return d;this.bumpSpace(),x=this.parseIdentifierIfPossible(),R=d.val}var T=this.tryParsePluralOrSelectOptions(e,a,n,x);if(T.err)return T;var _=this.tryParseArgumentClose(r);if(_.err)return _;var M=qe(r,this.clonePosition());return a==="select"?{val:{type:dt.select,value:i,options:Gm(T.val),location:M},err:null}:{val:{type:dt.plural,value:i,options:Gm(T.val),offset:R,pluralType:a==="plural"?"cardinal":"ordinal",location:M},err:null}}default:return this.error(je.INVALID_ARGUMENT_TYPE,qe(s,l))}},t.prototype.tryParseArgumentClose=function(e){return this.isEOF()||this.char()!==125?this.error(je.EXPECT_ARGUMENT_CLOSING_BRACE,qe(e,this.clonePosition())):(this.bump(),{val:!0,err:null})},t.prototype.parseSimpleArgStyleIfPossible=function(){for(var e=0,n=this.clonePosition();!this.isEOF();){var i=this.char();switch(i){case 39:{this.bump();var r=this.clonePosition();if(!this.bumpUntil("'"))return this.error(je.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE,qe(r,this.clonePosition()));this.bump();break}case 123:{e+=1,this.bump();break}case 125:{if(e>0)e-=1;else return{val:this.message.slice(n.offset,this.offset()),err:null};break}default:this.bump();break}}return{val:this.message.slice(n.offset,this.offset()),err:null}},t.prototype.parseNumberSkeletonFromString=function(e,n){var i=[];try{i=bE(e)}catch{return this.error(je.INVALID_NUMBER_SKELETON,n)}return{val:{type:ls.number,tokens:i,location:n,parsedOptions:this.shouldParseSkeletons?IE(i):{}},err:null}},t.prototype.tryParsePluralOrSelectOptions=function(e,n,i,r){for(var o,s=!1,a=[],l=new Set,u=r.value,c=r.location;;){if(u.length===0){var d=this.clonePosition();if(n!=="select"&&this.bumpIf("=")){var f=this.tryParseDecimalInteger(je.EXPECT_PLURAL_ARGUMENT_SELECTOR,je.INVALID_PLURAL_ARGUMENT_SELECTOR);if(f.err)return f;c=qe(d,this.clonePosition()),u=this.message.slice(d.offset,this.offset())}else break}if(l.has(u))return this.error(n==="select"?je.DUPLICATE_SELECT_ARGUMENT_SELECTOR:je.DUPLICATE_PLURAL_ARGUMENT_SELECTOR,c);u==="other"&&(s=!0),this.bumpSpace();var p=this.clonePosition();if(!this.bumpIf("{"))return this.error(n==="select"?je.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT:je.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT,qe(this.clonePosition(),this.clonePosition()));var _=this.parseMessage(e+1,n,i);if(_.err)return _;var y=this.tryParseArgumentClose(p);if(y.err)return y;a.push([u,{value:_.val,location:qe(p,this.clonePosition())}]),l.add(u),this.bumpSpace(),o=this.parseIdentifierIfPossible(),u=o.value,c=o.location}return a.length===0?this.error(n==="select"?je.EXPECT_SELECT_ARGUMENT_SELECTOR:je.EXPECT_PLURAL_ARGUMENT_SELECTOR,qe(this.clonePosition(),this.clonePosition())):this.requiresOtherClause&&!s?this.error(je.MISSING_OTHER_CLAUSE,qe(this.clonePosition(),this.clonePosition())):{val:a,err:null}},t.prototype.tryParseDecimalInteger=function(e,n){var i=1,r=this.clonePosition();this.bumpIf("+")||this.bumpIf("-")&&(i=-1);for(var o=!1,s=0;!this.isEOF();){var a=this.char();if(a>=48&&a<=57)o=!0,s=s*10+(a-48),this.bump();else break}var l=qe(r,this.clonePosition());return o?(s*=i,XE(s)?{val:s,err:null}:this.error(n,l)):this.error(e,l)},t.prototype.offset=function(){return this.position.offset},t.prototype.isEOF=function(){return this.offset()===this.message.length},t.prototype.clonePosition=function(){return{offset:this.position.offset,line:this.position.line,column:this.position.column}},t.prototype.char=function(){var e=this.position.offset;if(e>=this.message.length)throw Error("out of bound");var n=p1(this.message,e);if(n===void 0)throw Error("Offset ".concat(e," is at invalid UTF-16 code unit boundary"));return n},t.prototype.error=function(e,n){return{val:null,err:{kind:e,message:this.message,location:n}}},t.prototype.bump=function(){if(!this.isEOF()){var e=this.char();e===10?(this.position.line+=1,this.position.column=1,this.position.offset+=1):(this.position.column+=1,this.position.offset+=e<65536?1:2)}},t.prototype.bumpIf=function(e){if(zm(this.message,e,this.offset())){for(var n=0;n<e.length;n++)this.bump();return!0}return!1},t.prototype.bumpUntil=function(e){var n=this.offset(),i=this.message.indexOf(e,n);return i>=0?(this.bumpTo(i),!0):(this.bumpTo(this.message.length),!1)},t.prototype.bumpTo=function(e){if(this.offset()>e)throw Error("targetOffset ".concat(e," must be greater than or equal to the current offset ").concat(this.offset()));for(e=Math.min(e,this.message.length);;){var n=this.offset();if(n===e)break;if(n>e)throw Error("targetOffset ".concat(e," is at invalid UTF-16 code unit boundary"));if(this.bump(),this.isEOF())break}},t.prototype.bumpSpace=function(){for(;!this.isEOF()&&g1(this.char());)this.bump()},t.prototype.peek=function(){if(this.isEOF())return null;var e=this.char(),n=this.offset(),i=this.message.charCodeAt(n+(e>=65536?2:1));return i??null},t}();function Nd(t){return t>=97&&t<=122||t>=65&&t<=90}function ZE(t){return Nd(t)||t===47}function KE(t){return t===45||t===46||t>=48&&t<=57||t===95||t>=97&&t<=122||t>=65&&t<=90||t==183||t>=192&&t<=214||t>=216&&t<=246||t>=248&&t<=893||t>=895&&t<=8191||t>=8204&&t<=8205||t>=8255&&t<=8256||t>=8304&&t<=8591||t>=11264&&t<=12271||t>=12289&&t<=55295||t>=63744&&t<=64975||t>=65008&&t<=65533||t>=65536&&t<=983039}function g1(t){return t>=9&&t<=13||t===32||t===133||t>=8206&&t<=8207||t===8232||t===8233}function QE(t){return t>=33&&t<=35||t===36||t>=37&&t<=39||t===40||t===41||t===42||t===43||t===44||t===45||t>=46&&t<=47||t>=58&&t<=59||t>=60&&t<=62||t>=63&&t<=64||t===91||t===92||t===93||t===94||t===96||t===123||t===124||t===125||t===126||t===161||t>=162&&t<=165||t===166||t===167||t===169||t===171||t===172||t===174||t===176||t===177||t===182||t===187||t===191||t===215||t===247||t>=8208&&t<=8213||t>=8214&&t<=8215||t===8216||t===8217||t===8218||t>=8219&&t<=8220||t===8221||t===8222||t===8223||t>=8224&&t<=8231||t>=8240&&t<=8248||t===8249||t===8250||t>=8251&&t<=8254||t>=8257&&t<=8259||t===8260||t===8261||t===8262||t>=8263&&t<=8273||t===8274||t===8275||t>=8277&&t<=8286||t>=8592&&t<=8596||t>=8597&&t<=8601||t>=8602&&t<=8603||t>=8604&&t<=8607||t===8608||t>=8609&&t<=8610||t===8611||t>=8612&&t<=8613||t===8614||t>=8615&&t<=8621||t===8622||t>=8623&&t<=8653||t>=8654&&t<=8655||t>=8656&&t<=8657||t===8658||t===8659||t===8660||t>=8661&&t<=8691||t>=8692&&t<=8959||t>=8960&&t<=8967||t===8968||t===8969||t===8970||t===8971||t>=8972&&t<=8991||t>=8992&&t<=8993||t>=8994&&t<=9e3||t===9001||t===9002||t>=9003&&t<=9083||t===9084||t>=9085&&t<=9114||t>=9115&&t<=9139||t>=9140&&t<=9179||t>=9180&&t<=9185||t>=9186&&t<=9254||t>=9255&&t<=9279||t>=9280&&t<=9290||t>=9291&&t<=9311||t>=9472&&t<=9654||t===9655||t>=9656&&t<=9664||t===9665||t>=9666&&t<=9719||t>=9720&&t<=9727||t>=9728&&t<=9838||t===9839||t>=9840&&t<=10087||t===10088||t===10089||t===10090||t===10091||t===10092||t===10093||t===10094||t===10095||t===10096||t===10097||t===10098||t===10099||t===10100||t===10101||t>=10132&&t<=10175||t>=10176&&t<=10180||t===10181||t===10182||t>=10183&&t<=10213||t===10214||t===10215||t===10216||t===10217||t===10218||t===10219||t===10220||t===10221||t===10222||t===10223||t>=10224&&t<=10239||t>=10240&&t<=10495||t>=10496&&t<=10626||t===10627||t===10628||t===10629||t===10630||t===10631||t===10632||t===10633||t===10634||t===10635||t===10636||t===10637||t===10638||t===10639||t===10640||t===10641||t===10642||t===10643||t===10644||t===10645||t===10646||t===10647||t===10648||t>=10649&&t<=10711||t===10712||t===10713||t===10714||t===10715||t>=10716&&t<=10747||t===10748||t===10749||t>=10750&&t<=11007||t>=11008&&t<=11055||t>=11056&&t<=11076||t>=11077&&t<=11078||t>=11079&&t<=11084||t>=11085&&t<=11123||t>=11124&&t<=11125||t>=11126&&t<=11157||t===11158||t>=11159&&t<=11263||t>=11776&&t<=11777||t===11778||t===11779||t===11780||t===11781||t>=11782&&t<=11784||t===11785||t===11786||t===11787||t===11788||t===11789||t>=11790&&t<=11798||t===11799||t>=11800&&t<=11801||t===11802||t===11803||t===11804||t===11805||t>=11806&&t<=11807||t===11808||t===11809||t===11810||t===11811||t===11812||t===11813||t===11814||t===11815||t===11816||t===11817||t>=11818&&t<=11822||t===11823||t>=11824&&t<=11833||t>=11834&&t<=11835||t>=11836&&t<=11839||t===11840||t===11841||t===11842||t>=11843&&t<=11855||t>=11856&&t<=11857||t===11858||t>=11859&&t<=11903||t>=12289&&t<=12291||t===12296||t===12297||t===12298||t===12299||t===12300||t===12301||t===12302||t===12303||t===12304||t===12305||t>=12306&&t<=12307||t===12308||t===12309||t===12310||t===12311||t===12312||t===12313||t===12314||t===12315||t===12316||t===12317||t>=12318&&t<=12319||t===12320||t===12336||t===64830||t===64831||t>=65093&&t<=65094}function Id(t){t.forEach(function(e){if(delete e.location,s1(e)||a1(e))for(var n in e.options)delete e.options[n].location,Id(e.options[n].value);else i1(e)&&u1(e.style)||(r1(e)||o1(e))&&Rd(e.style)?delete e.style.location:l1(e)&&Id(e.children)})}function JE(t,e){e===void 0&&(e={}),e=ge({shouldParseSkeletons:!0,requiresOtherClause:!0},e);var n=new YE(t,e).parse();if(n.err){var i=SyntaxError(je[n.err.kind]);throw i.location=n.err.location,i.originalMessage=n.err.message,i}return e!=null&&e.captureLocation||Id(n.val),n.val}function di(t,e){var n=e&&e.cache?e.cache:oM,i=e&&e.serializer?e.serializer:rM,r=e&&e.strategy?e.strategy:tM;return r(t,{cache:n,serializer:i})}function eM(t){return t==null||typeof t=="number"||typeof t=="boolean"}function v1(t,e,n,i){var r=eM(i)?i:n(i),o=e.get(r);return typeof o>"u"&&(o=t.call(this,i),e.set(r,o)),o}function _1(t,e,n){var i=Array.prototype.slice.call(arguments,3),r=n(i),o=e.get(r);return typeof o>"u"&&(o=t.apply(this,i),e.set(r,o)),o}function ep(t,e,n,i,r){return n.bind(e,t,i,r)}function tM(t,e){var n=t.length===1?v1:_1;return ep(t,this,n,e.cache.create(),e.serializer)}function nM(t,e){return ep(t,this,_1,e.cache.create(),e.serializer)}function iM(t,e){return ep(t,this,v1,e.cache.create(),e.serializer)}var rM=function(){return JSON.stringify(arguments)};function tp(){this.cache=Object.create(null)}tp.prototype.get=function(t){return this.cache[t]};tp.prototype.set=function(t,e){this.cache[t]=e};var oM={create:function(){return new tp}},hi={variadic:nM,monadic:iM},Ei;(function(t){t.MISSING_VALUE="MISSING_VALUE",t.INVALID_VALUE="INVALID_VALUE",t.MISSING_INTL_API="MISSING_INTL_API"})(Ei||(Ei={}));var Ar=function(t){Xn(e,t);function e(n,i,r){var o=t.call(this,n)||this;return o.code=i,o.originalMessage=r,o}return e.prototype.toString=function(){return"[formatjs Error: ".concat(this.code,"] ").concat(this.message)},e}(Error),Wm=function(t){Xn(e,t);function e(n,i,r,o){return t.call(this,'Invalid values for "'.concat(n,'": "').concat(i,'". Options are "').concat(Object.keys(r).join('", "'),'"'),Ei.INVALID_VALUE,o)||this}return e}(Ar),sM=function(t){Xn(e,t);function e(n,i,r){return t.call(this,'Value for "'.concat(n,'" must be of type ').concat(i),Ei.INVALID_VALUE,r)||this}return e}(Ar),aM=function(t){Xn(e,t);function e(n,i){return t.call(this,'The intl string context variable "'.concat(n,'" was not provided to the string "').concat(i,'"'),Ei.MISSING_VALUE,i)||this}return e}(Ar),sn;(function(t){t[t.literal=0]="literal",t[t.object=1]="object"})(sn||(sn={}));function lM(t){return t.length<2?t:t.reduce(function(e,n){var i=e[e.length-1];return!i||i.type!==sn.literal||n.type!==sn.literal?e.push(n):i.value+=n.value,e},[])}function y1(t){return typeof t=="function"}function Vl(t,e,n,i,r,o,s){if(t.length===1&&Om(t[0]))return[{type:sn.literal,value:t[0].value}];for(var a=[],l=0,u=t;l<u.length;l++){var c=u[l];if(Om(c)){a.push({type:sn.literal,value:c.value});continue}if(wE(c)){typeof o=="number"&&a.push({type:sn.literal,value:n.getNumberFormat(e).format(o)});continue}var d=c.value;if(!(r&&d in r))throw new aM(d,s);var f=r[d];if(TE(c)){(!f||typeof f=="string"||typeof f=="number")&&(f=typeof f=="string"||typeof f=="number"?String(f):""),a.push({type:typeof f=="string"?sn.literal:sn.object,value:f});continue}if(r1(c)){var p=typeof c.style=="string"?i.date[c.style]:Rd(c.style)?c.style.parsedOptions:void 0;a.push({type:sn.literal,value:n.getDateTimeFormat(e,p).format(f)});continue}if(o1(c)){var p=typeof c.style=="string"?i.time[c.style]:Rd(c.style)?c.style.parsedOptions:i.time.medium;a.push({type:sn.literal,value:n.getDateTimeFormat(e,p).format(f)});continue}if(i1(c)){var p=typeof c.style=="string"?i.number[c.style]:u1(c.style)?c.style.parsedOptions:void 0;p&&p.scale&&(f=f*(p.scale||1)),a.push({type:sn.literal,value:n.getNumberFormat(e,p).format(f)});continue}if(l1(c)){var _=c.children,y=c.value,g=r[y];if(!y1(g))throw new sM(y,"function",s);var h=Vl(_,e,n,i,r,o),v=g(h.map(function(R){return R.value}));Array.isArray(v)||(v=[v]),a.push.apply(a,v.map(function(R){return{type:typeof R=="string"?sn.literal:sn.object,value:R}}))}if(s1(c)){var m=c.options[f]||c.options.other;if(!m)throw new Wm(c.value,f,Object.keys(c.options),s);a.push.apply(a,Vl(m.value,e,n,i,r));continue}if(a1(c)){var m=c.options["=".concat(f)];if(!m){if(!Intl.PluralRules)throw new Ar(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`,Ei.MISSING_INTL_API,s);var x=n.getPluralRules(e,{type:c.pluralType}).select(f-(c.offset||0));m=c.options[x]||c.options.other}if(!m)throw new Wm(c.value,f,Object.keys(c.options),s);a.push.apply(a,Vl(m.value,e,n,i,r,f-(c.offset||0)));continue}}return lM(a)}function uM(t,e){return e?ge(ge(ge({},t||{}),e||{}),Object.keys(t).reduce(function(n,i){return n[i]=ge(ge({},t[i]),e[i]||{}),n},{})):t}function cM(t,e){return e?Object.keys(t).reduce(function(n,i){return n[i]=uM(t[i],e[i]),n},ge({},t)):t}function Yc(t){return{create:function(){return{get:function(e){return t[e]},set:function(e,n){t[e]=n}}}}}function fM(t){return t===void 0&&(t={number:{},dateTime:{},pluralRules:{}}),{getNumberFormat:di(function(){for(var e,n=[],i=0;i<arguments.length;i++)n[i]=arguments[i];return new((e=Intl.NumberFormat).bind.apply(e,pi([void 0],n,!1)))},{cache:Yc(t.number),strategy:hi.variadic}),getDateTimeFormat:di(function(){for(var e,n=[],i=0;i<arguments.length;i++)n[i]=arguments[i];return new((e=Intl.DateTimeFormat).bind.apply(e,pi([void 0],n,!1)))},{cache:Yc(t.dateTime),strategy:hi.variadic}),getPluralRules:di(function(){for(var e,n=[],i=0;i<arguments.length;i++)n[i]=arguments[i];return new((e=Intl.PluralRules).bind.apply(e,pi([void 0],n,!1)))},{cache:Yc(t.pluralRules),strategy:hi.variadic})}}var x1=function(){function t(e,n,i,r){var o=this;if(n===void 0&&(n=t.defaultLocale),this.formatterCache={number:{},dateTime:{},pluralRules:{}},this.format=function(l){var u=o.formatToParts(l);if(u.length===1)return u[0].value;var c=u.reduce(function(d,f){return!d.length||f.type!==sn.literal||typeof d[d.length-1]!="string"?d.push(f.value):d[d.length-1]+=f.value,d},[]);return c.length<=1?c[0]||"":c},this.formatToParts=function(l){return Vl(o.ast,o.locales,o.formatters,o.formats,l,void 0,o.message)},this.resolvedOptions=function(){var l;return{locale:((l=o.resolvedLocale)===null||l===void 0?void 0:l.toString())||Intl.NumberFormat.supportedLocalesOf(o.locales)[0]}},this.getAst=function(){return o.ast},this.locales=n,this.resolvedLocale=t.resolveLocale(n),typeof e=="string"){if(this.message=e,!t.__parse)throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");var s=r||{};s.formatters;var a=as(s,["formatters"]);this.ast=t.__parse(e,ge(ge({},a),{locale:this.resolvedLocale}))}else this.ast=e;if(!Array.isArray(this.ast))throw new TypeError("A message must be provided as a String or AST.");this.formats=cM(t.formats,i),this.formatters=r&&r.formatters||fM(this.formatterCache)}return Object.defineProperty(t,"defaultLocale",{get:function(){return t.memoizedDefaultLocale||(t.memoizedDefaultLocale=new Intl.NumberFormat().resolvedOptions().locale),t.memoizedDefaultLocale},enumerable:!1,configurable:!0}),t.memoizedDefaultLocale=null,t.resolveLocale=function(e){if(!(typeof Intl.Locale>"u")){var n=Intl.NumberFormat.supportedLocalesOf(e);return n.length>0?new Intl.Locale(n[0]):new Intl.Locale(typeof e=="string"?e:e[0])}},t.__parse=JE,t.formats={number:{integer:{maximumFractionDigits:0},currency:{style:"currency"},percent:{style:"percent"}},date:{short:{month:"numeric",day:"numeric",year:"2-digit"},medium:{month:"short",day:"numeric",year:"numeric"},long:{month:"long",day:"numeric",year:"numeric"},full:{weekday:"long",month:"long",day:"numeric",year:"numeric"}},time:{short:{hour:"numeric",minute:"numeric"},medium:{hour:"numeric",minute:"numeric",second:"numeric"},long:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"},full:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"}}},t}(),no;(function(t){t.FORMAT_ERROR="FORMAT_ERROR",t.UNSUPPORTED_FORMATTER="UNSUPPORTED_FORMATTER",t.INVALID_CONFIG="INVALID_CONFIG",t.MISSING_DATA="MISSING_DATA",t.MISSING_TRANSLATION="MISSING_TRANSLATION"})(no||(no={}));var Ra=function(t){Xn(e,t);function e(n,i,r){var o=this,s=r?r instanceof Error?r:new Error(String(r)):void 0;return o=t.call(this,"[@formatjs/intl Error ".concat(n,"] ").concat(i,`
`).concat(s?`
`.concat(s.message,`
`).concat(s.stack):""))||this,o.code=n,typeof Error.captureStackTrace=="function"&&Error.captureStackTrace(o,e),o}return e}(Error),dM=function(t){Xn(e,t);function e(n,i){return t.call(this,no.UNSUPPORTED_FORMATTER,n,i)||this}return e}(Ra),hM=function(t){Xn(e,t);function e(n,i){return t.call(this,no.INVALID_CONFIG,n,i)||this}return e}(Ra),Xm=function(t){Xn(e,t);function e(n,i){return t.call(this,no.MISSING_DATA,n,i)||this}return e}(Ra),$n=function(t){Xn(e,t);function e(n,i,r){var o=t.call(this,no.FORMAT_ERROR,"".concat(n,`
Locale: `).concat(i,`
`),r)||this;return o.locale=i,o}return e}(Ra),Zc=function(t){Xn(e,t);function e(n,i,r,o){var s=t.call(this,"".concat(n,`
MessageID: `).concat(r==null?void 0:r.id,`
Default Message: `).concat(r==null?void 0:r.defaultMessage,`
Description: `).concat(r==null?void 0:r.description,`
`),i,o)||this;return s.descriptor=r,s.locale=i,s}return e}($n),pM=function(t){Xn(e,t);function e(n,i){var r=t.call(this,no.MISSING_TRANSLATION,'Missing message: "'.concat(n.id,'" for locale "').concat(i,'", using ').concat(n.defaultMessage?"default message (".concat(typeof n.defaultMessage=="string"?n.defaultMessage:n.defaultMessage.map(function(o){var s;return(s=o.value)!==null&&s!==void 0?s:JSON.stringify(o)}).join(),")"):"id"," as fallback."))||this;return r.descriptor=n,r}return e}(Ra);function uo(t,e,n){return n===void 0&&(n={}),e.reduce(function(i,r){return r in t?i[r]=t[r]:r in n&&(i[r]=n[r]),i},{})}var mM=function(t){},gM=function(t){},S1={formats:{},messages:{},timeZone:void 0,defaultLocale:"en",defaultFormats:{},fallbackOnEmptyString:!0,onError:mM,onWarn:gM};function E1(){return{dateTime:{},number:{},message:{},relativeTime:{},pluralRules:{},list:{},displayNames:{}}}function br(t){return{create:function(){return{get:function(e){return t[e]},set:function(e,n){t[e]=n}}}}}function vM(t){t===void 0&&(t=E1());var e=Intl.RelativeTimeFormat,n=Intl.ListFormat,i=Intl.DisplayNames,r=di(function(){for(var a,l=[],u=0;u<arguments.length;u++)l[u]=arguments[u];return new((a=Intl.DateTimeFormat).bind.apply(a,pi([void 0],l,!1)))},{cache:br(t.dateTime),strategy:hi.variadic}),o=di(function(){for(var a,l=[],u=0;u<arguments.length;u++)l[u]=arguments[u];return new((a=Intl.NumberFormat).bind.apply(a,pi([void 0],l,!1)))},{cache:br(t.number),strategy:hi.variadic}),s=di(function(){for(var a,l=[],u=0;u<arguments.length;u++)l[u]=arguments[u];return new((a=Intl.PluralRules).bind.apply(a,pi([void 0],l,!1)))},{cache:br(t.pluralRules),strategy:hi.variadic});return{getDateTimeFormat:r,getNumberFormat:o,getMessageFormat:di(function(a,l,u,c){return new x1(a,l,u,ge({formatters:{getNumberFormat:o,getDateTimeFormat:r,getPluralRules:s}},c||{}))},{cache:br(t.message),strategy:hi.variadic}),getRelativeTimeFormat:di(function(){for(var a=[],l=0;l<arguments.length;l++)a[l]=arguments[l];return new(e.bind.apply(e,pi([void 0],a,!1)))},{cache:br(t.relativeTime),strategy:hi.variadic}),getPluralRules:s,getListFormat:di(function(){for(var a=[],l=0;l<arguments.length;l++)a[l]=arguments[l];return new(n.bind.apply(n,pi([void 0],a,!1)))},{cache:br(t.list),strategy:hi.variadic}),getDisplayNames:di(function(){for(var a=[],l=0;l<arguments.length;l++)a[l]=arguments[l];return new(i.bind.apply(i,pi([void 0],a,!1)))},{cache:br(t.displayNames),strategy:hi.variadic})}}function np(t,e,n,i){var r=t&&t[e],o;if(r&&(o=r[n]),o)return o;i(new dM("No ".concat(e," format named: ").concat(n)))}function el(t,e){return Object.keys(t).reduce(function(n,i){return n[i]=ge({timeZone:e},t[i]),n},{})}function $m(t,e){var n=Object.keys(ge(ge({},t),e));return n.reduce(function(i,r){return i[r]=ge(ge({},t[r]||{}),e[r]||{}),i},{})}function jm(t,e){if(!e)return t;var n=x1.formats;return ge(ge(ge({},n),t),{date:$m(el(n.date,e),el(t.date||{},e)),time:$m(el(n.time,e),el(t.time||{},e))})}var Dd=function(t,e,n,i,r){var o=t.locale,s=t.formats,a=t.messages,l=t.defaultLocale,u=t.defaultFormats,c=t.fallbackOnEmptyString,d=t.onError,f=t.timeZone,p=t.defaultRichTextElements;n===void 0&&(n={id:""});var _=n.id,y=n.defaultMessage;n1(!!_,"[@formatjs/intl] An `id` must be provided to format a message. You can either:\n1. Configure your build toolchain with [babel-plugin-formatjs](https://formatjs.io/docs/tooling/babel-plugin)\nor [@formatjs/ts-transformer](https://formatjs.io/docs/tooling/ts-transformer) OR\n2. Configure your `eslint` config to include [eslint-plugin-formatjs](https://formatjs.io/docs/tooling/linter#enforce-id)\nto autofix this issue");var g=String(_),h=a&&Object.prototype.hasOwnProperty.call(a,g)&&a[g];if(Array.isArray(h)&&h.length===1&&h[0].type===dt.literal)return h[0].value;if(!i&&h&&typeof h=="string"&&!p)return h.replace(/'\{(.*?)\}'/gi,"{$1}");if(i=ge(ge({},p),i||{}),s=jm(s,f),u=jm(u,f),!h){if(c===!1&&h==="")return h;if((!y||o&&o.toLowerCase()!==l.toLowerCase())&&d(new pM(n,o)),y)try{var v=e.getMessageFormat(y,l,u,r);return v.format(i)}catch(m){return d(new Zc('Error formatting default message for: "'.concat(g,'", rendering default message verbatim'),o,n,m)),typeof y=="string"?y:g}return g}try{var v=e.getMessageFormat(h,o,s,ge({formatters:e},r||{}));return v.format(i)}catch(m){d(new Zc('Error formatting message: "'.concat(g,'", using ').concat(y?"default message":"id"," as fallback."),o,n,m))}if(y)try{var v=e.getMessageFormat(y,l,u,r);return v.format(i)}catch(m){d(new Zc('Error formatting the default message for: "'.concat(g,'", rendering message verbatim'),o,n,m))}return typeof h=="string"?h:typeof y=="string"?y:g},M1=["formatMatcher","timeZone","hour12","weekday","era","year","month","day","hour","minute","second","timeZoneName","hourCycle","dateStyle","timeStyle","calendar","numberingSystem","fractionalSecondDigits"];function rc(t,e,n,i){var r=t.locale,o=t.formats,s=t.onError,a=t.timeZone;i===void 0&&(i={});var l=i.format,u=ge(ge({},a&&{timeZone:a}),l&&np(o,e,l,s)),c=uo(i,M1,u);return e==="time"&&!c.hour&&!c.minute&&!c.second&&!c.timeStyle&&!c.dateStyle&&(c=ge(ge({},c),{hour:"numeric",minute:"numeric"})),n(r,c)}function _M(t,e){for(var n=[],i=2;i<arguments.length;i++)n[i-2]=arguments[i];var r=n[0],o=n[1],s=o===void 0?{}:o,a=typeof r=="string"?new Date(r||0):r;try{return rc(t,"date",e,s).format(a)}catch(l){t.onError(new $n("Error formatting date.",t.locale,l))}return String(a)}function yM(t,e){for(var n=[],i=2;i<arguments.length;i++)n[i-2]=arguments[i];var r=n[0],o=n[1],s=o===void 0?{}:o,a=typeof r=="string"?new Date(r||0):r;try{return rc(t,"time",e,s).format(a)}catch(l){t.onError(new $n("Error formatting time.",t.locale,l))}return String(a)}function xM(t,e){for(var n=[],i=2;i<arguments.length;i++)n[i-2]=arguments[i];var r=n[0],o=n[1],s=n[2],a=s===void 0?{}:s,l=t.timeZone,u=t.locale,c=t.onError,d=uo(a,M1,l?{timeZone:l}:{});try{return e(u,d).formatRange(r,o)}catch(f){c(new $n("Error formatting date time range.",t.locale,f))}return String(r)}function SM(t,e){for(var n=[],i=2;i<arguments.length;i++)n[i-2]=arguments[i];var r=n[0],o=n[1],s=o===void 0?{}:o,a=typeof r=="string"?new Date(r||0):r;try{return rc(t,"date",e,s).formatToParts(a)}catch(l){t.onError(new $n("Error formatting date.",t.locale,l))}return[]}function EM(t,e){for(var n=[],i=2;i<arguments.length;i++)n[i-2]=arguments[i];var r=n[0],o=n[1],s=o===void 0?{}:o,a=typeof r=="string"?new Date(r||0):r;try{return rc(t,"time",e,s).formatToParts(a)}catch(l){t.onError(new $n("Error formatting time.",t.locale,l))}return[]}var MM=["style","type","fallback","languageDisplay"];function TM(t,e,n,i){var r=t.locale,o=t.onError,s=Intl.DisplayNames;s||o(new Ar(`Intl.DisplayNames is not available in this environment.
Try polyfilling it using "@formatjs/intl-displaynames"
`,Ei.MISSING_INTL_API));var a=uo(i,MM);try{return e(r,a).of(n)}catch(l){o(new $n("Error formatting display name.",r,l))}}var wM=["type","style"],qm=Date.now();function AM(t){return"".concat(qm,"_").concat(t,"_").concat(qm)}function CM(t,e,n,i){i===void 0&&(i={});var r=T1(t,e,n,i).reduce(function(o,s){var a=s.value;return typeof a!="string"?o.push(a):typeof o[o.length-1]=="string"?o[o.length-1]+=a:o.push(a),o},[]);return r.length===1?r[0]:r.length===0?"":r}function T1(t,e,n,i){var r=t.locale,o=t.onError;i===void 0&&(i={});var s=Intl.ListFormat;s||o(new Ar(`Intl.ListFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-listformat"
`,Ei.MISSING_INTL_API));var a=uo(i,wM);try{var l={},u=n.map(function(c,d){if(typeof c=="object"){var f=AM(d);return l[f]=c,f}return String(c)});return e(r,a).formatToParts(u).map(function(c){return c.type==="literal"?c:ge(ge({},c),{value:l[c.value]||c.value})})}catch(c){o(new $n("Error formatting list.",r,c))}return n}var RM=["type"];function bM(t,e,n,i){var r=t.locale,o=t.onError;i===void 0&&(i={}),Intl.PluralRules||o(new Ar(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`,Ei.MISSING_INTL_API));var s=uo(i,RM);try{return e(r,s).select(n)}catch(a){o(new $n("Error formatting plural.",r,a))}return"other"}var PM=["numeric","style"];function LM(t,e,n){var i=t.locale,r=t.formats,o=t.onError;n===void 0&&(n={});var s=n.format,a=!!s&&np(r,"relative",s,o)||{},l=uo(n,PM,a);return e(i,l)}function NM(t,e,n,i,r){r===void 0&&(r={}),i||(i="second");var o=Intl.RelativeTimeFormat;o||t.onError(new Ar(`Intl.RelativeTimeFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-relativetimeformat"
`,Ei.MISSING_INTL_API));try{return LM(t,e,r).format(n,i)}catch(s){t.onError(new $n("Error formatting relative time.",t.locale,s))}return String(n)}var IM=["style","currency","currencyDisplay","unit","unitDisplay","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","compactDisplay","currencyDisplay","currencySign","notation","signDisplay","unit","unitDisplay","numberingSystem"];function w1(t,e,n){var i=t.locale,r=t.formats,o=t.onError;n===void 0&&(n={});var s=n.format,a=s&&np(r,"number",s,o)||{},l=uo(n,IM,a);return e(i,l)}function DM(t,e,n,i){i===void 0&&(i={});try{return w1(t,e,i).format(n)}catch(r){t.onError(new $n("Error formatting number.",t.locale,r))}return String(n)}function UM(t,e,n,i){i===void 0&&(i={});try{return w1(t,e,i).formatToParts(n)}catch(r){t.onError(new $n("Error formatting number.",t.locale,r))}return[]}function FM(t){var e=t?t[Object.keys(t)[0]]:void 0;return typeof e=="string"}function OM(t){t.onWarn&&t.defaultRichTextElements&&FM(t.messages||{})&&t.onWarn(`[@formatjs/intl] "defaultRichTextElements" was specified but "message" was not pre-compiled. 
Please consider using "@formatjs/cli" to pre-compile your messages for performance.
For more details see https://formatjs.io/docs/getting-started/message-distribution`)}function kM(t,e){var n=vM(e),i=ge(ge({},S1),t),r=i.locale,o=i.defaultLocale,s=i.onError;return r?!Intl.NumberFormat.supportedLocalesOf(r).length&&s?s(new Xm('Missing locale data for locale: "'.concat(r,'" in Intl.NumberFormat. Using default locale: "').concat(o,'" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details'))):!Intl.DateTimeFormat.supportedLocalesOf(r).length&&s&&s(new Xm('Missing locale data for locale: "'.concat(r,'" in Intl.DateTimeFormat. Using default locale: "').concat(o,'" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details'))):(s&&s(new hM('"locale" was not configured, using "'.concat(o,'" as fallback. See https://formatjs.io/docs/react-intl/api#intlshape for more details'))),i.locale=i.defaultLocale||"en"),OM(i),ge(ge({},i),{formatters:n,formatNumber:DM.bind(null,i,n.getNumberFormat),formatNumberToParts:UM.bind(null,i,n.getNumberFormat),formatRelativeTime:NM.bind(null,i,n.getRelativeTimeFormat),formatDate:_M.bind(null,i,n.getDateTimeFormat),formatDateToParts:SM.bind(null,i,n.getDateTimeFormat),formatTime:yM.bind(null,i,n.getDateTimeFormat),formatDateTimeRange:xM.bind(null,i,n.getDateTimeFormat),formatTimeToParts:EM.bind(null,i,n.getDateTimeFormat),formatPlural:bM.bind(null,i,n.getPluralRules),formatMessage:Dd.bind(null,i,n),$t:Dd.bind(null,i,n),formatList:CM.bind(null,i,n.getListFormat),formatListToParts:T1.bind(null,i,n.getListFormat),formatDisplayName:TM.bind(null,i,n.getDisplayNames)})}function A1(t){n1(t,"[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry.")}var C1=ge(ge({},S1),{textComponent:Ye.Fragment});function BM(t){return function(e){return t(Ye.Children.toArray(e))}}function Ud(t,e){if(t===e)return!0;if(!t||!e)return!1;var n=Object.keys(t),i=Object.keys(e),r=n.length;if(i.length!==r)return!1;for(var o=0;o<r;o++){var s=n[o];if(t[s]!==e[s]||!Object.prototype.hasOwnProperty.call(e,s))return!1}return!0}var ip=typeof window<"u"&&!window.__REACT_INTL_BYPASS_GLOBAL_CONTEXT__?window.__REACT_INTL_CONTEXT__||(window.__REACT_INTL_CONTEXT__=Ye.createContext(null)):Ye.createContext(null);ip.Consumer;var HM=ip.Provider,zM=HM,GM=ip;function oc(){var t=Ye.useContext(GM);return A1(t),t}var Fd;(function(t){t.formatDate="FormattedDate",t.formatTime="FormattedTime",t.formatNumber="FormattedNumber",t.formatList="FormattedList",t.formatDisplayName="FormattedDisplayName"})(Fd||(Fd={}));var Od;(function(t){t.formatDate="FormattedDateParts",t.formatTime="FormattedTimeParts",t.formatNumber="FormattedNumberParts",t.formatList="FormattedListParts"})(Od||(Od={}));function R1(t){var e=function(n){var i=oc(),r=n.value,o=n.children,s=as(n,["value","children"]),a=typeof r=="string"?new Date(r||0):r,l=t==="formatDate"?i.formatDateToParts(a,s):i.formatTimeToParts(a,s);return o(l)};return e.displayName=Od[t],e}function ba(t){var e=function(n){var i=oc(),r=n.value,o=n.children,s=as(n,["value","children"]),a=i[t](r,s);if(typeof o=="function")return o(a);var l=i.textComponent||Ye.Fragment;return Ye.createElement(l,null,a)};return e.displayName=Fd[t],e}function b1(t){return t&&Object.keys(t).reduce(function(e,n){var i=t[n];return e[n]=y1(i)?BM(i):i,e},{})}var Ym=function(t,e,n,i){for(var r=[],o=4;o<arguments.length;o++)r[o-4]=arguments[o];var s=b1(i),a=Dd.apply(void 0,pi([t,e,n,s],r,!1));return Array.isArray(a)?Ye.Children.toArray(a):a},Zm=function(t,e){var n=t.defaultRichTextElements,i=as(t,["defaultRichTextElements"]),r=b1(n),o=kM(ge(ge(ge({},C1),i),{defaultRichTextElements:r}),e),s={locale:o.locale,timeZone:o.timeZone,fallbackOnEmptyString:o.fallbackOnEmptyString,formats:o.formats,defaultLocale:o.defaultLocale,defaultFormats:o.defaultFormats,messages:o.messages,onError:o.onError,defaultRichTextElements:r};return ge(ge({},o),{formatMessage:Ym.bind(null,s,o.formatters),$t:Ym.bind(null,s,o.formatters)})};function Kc(t){return{locale:t.locale,timeZone:t.timeZone,fallbackOnEmptyString:t.fallbackOnEmptyString,formats:t.formats,textComponent:t.textComponent,messages:t.messages,defaultLocale:t.defaultLocale,defaultFormats:t.defaultFormats,onError:t.onError,onWarn:t.onWarn,wrapRichTextChunksInFragment:t.wrapRichTextChunksInFragment,defaultRichTextElements:t.defaultRichTextElements}}var VM=function(t){Xn(e,t);function e(){var n=t!==null&&t.apply(this,arguments)||this;return n.cache=E1(),n.state={cache:n.cache,intl:Zm(Kc(n.props),n.cache),prevConfig:Kc(n.props)},n}return e.getDerivedStateFromProps=function(n,i){var r=i.prevConfig,o=i.cache,s=Kc(n);return Ud(r,s)?null:{intl:Zm(s,o),prevConfig:s}},e.prototype.render=function(){return A1(this.state.intl),Ye.createElement(zM,{value:this.state.intl},this.props.children)},e.displayName="IntlProvider",e.defaultProps=C1,e}(Ye.PureComponent);const WM=VM;function XM(t,e){var n=t.values,i=as(t,["values"]),r=e.values,o=as(e,["values"]);return Ud(r,n)&&Ud(i,o)}function P1(t){var e=oc(),n=e.formatMessage,i=e.textComponent,r=i===void 0?Ye.Fragment:i,o=t.id,s=t.description,a=t.defaultMessage,l=t.values,u=t.children,c=t.tagName,d=c===void 0?r:c,f=t.ignoreTag,p={id:o,description:s,defaultMessage:a},_=n(p,l,{ignoreTag:f});return typeof u=="function"?u(Array.isArray(_)?_:[_]):d?Ye.createElement(d,null,Ye.Children.toArray(_)):Ye.createElement(Ye.Fragment,null,_)}P1.displayName="FormattedMessage";var L1=Ye.memo(P1,XM);L1.displayName="MemoizedFormattedMessage";const Km=L1;ba("formatDate");ba("formatTime");ba("formatNumber");ba("formatList");ba("formatDisplayName");R1("formatDate");R1("formatTime");/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const rp="160",$M=0,Qm=1,jM=2,N1=1,qM=2,bi=3,Er=0,_n=1,Ii=2,gr=0,Qo=1,Jm=2,eg=3,tg=4,YM=5,kr=100,ZM=101,KM=102,ng=103,ig=104,QM=200,JM=201,e2=202,t2=203,kd=204,Bd=205,n2=206,i2=207,r2=208,o2=209,s2=210,a2=211,l2=212,u2=213,c2=214,f2=0,d2=1,h2=2,Su=3,p2=4,m2=5,g2=6,v2=7,I1=0,_2=1,y2=2,vr=0,x2=1,S2=2,E2=3,M2=4,T2=5,w2=6,D1=300,us=301,cs=302,Hd=303,zd=304,sc=306,Gd=1e3,ti=1001,Vd=1002,ln=1003,rg=1004,Qc=1005,On=1006,A2=1007,_a=1008,_r=1009,C2=1010,R2=1011,op=1012,U1=1013,sr=1014,ar=1015,ya=1016,F1=1017,O1=1018,$r=1020,b2=1021,ni=1023,P2=1024,L2=1025,jr=1026,fs=1027,N2=1028,k1=1029,I2=1030,B1=1031,H1=1033,Jc=33776,ef=33777,tf=33778,nf=33779,og=35840,sg=35841,ag=35842,lg=35843,z1=36196,ug=37492,cg=37496,fg=37808,dg=37809,hg=37810,pg=37811,mg=37812,gg=37813,vg=37814,_g=37815,yg=37816,xg=37817,Sg=37818,Eg=37819,Mg=37820,Tg=37821,rf=36492,wg=36494,Ag=36495,D2=36283,Cg=36284,Rg=36285,bg=36286,G1=3e3,qr=3001,U2=3200,F2=3201,O2=0,k2=1,Bn="",Ht="srgb",Gi="srgb-linear",sp="display-p3",ac="display-p3-linear",Eu="linear",ft="srgb",Mu="rec709",Tu="p3",fo=7680,Pg=519,B2=512,H2=513,z2=514,V1=515,G2=516,V2=517,W2=518,X2=519,Lg=35044,Ng="300 es",Wd=1035,Fi=2e3,wu=2001;class xs{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const o=r.indexOf(n);o!==-1&&r.splice(o,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let o=0,s=r.length;o<s;o++)r[o].call(this,e);e.target=null}}}const qt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ig=1234567;const Ks=Math.PI/180,xa=180/Math.PI;function Ss(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(qt[t&255]+qt[t>>8&255]+qt[t>>16&255]+qt[t>>24&255]+"-"+qt[e&255]+qt[e>>8&255]+"-"+qt[e>>16&15|64]+qt[e>>24&255]+"-"+qt[n&63|128]+qt[n>>8&255]+"-"+qt[n>>16&255]+qt[n>>24&255]+qt[i&255]+qt[i>>8&255]+qt[i>>16&255]+qt[i>>24&255]).toLowerCase()}function un(t,e,n){return Math.max(e,Math.min(n,t))}function ap(t,e){return(t%e+e)%e}function $2(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function j2(t,e,n){return t!==e?(n-t)/(e-t):0}function Qs(t,e,n){return(1-n)*t+n*e}function q2(t,e,n,i){return Qs(t,e,1-Math.exp(-n*i))}function Y2(t,e=1){return e-Math.abs(ap(t,e*2)-e)}function Z2(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function K2(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function Q2(t,e){return t+Math.floor(Math.random()*(e-t+1))}function J2(t,e){return t+Math.random()*(e-t)}function eT(t){return t*(.5-Math.random())}function tT(t){t!==void 0&&(Ig=t);let e=Ig+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function nT(t){return t*Ks}function iT(t){return t*xa}function Xd(t){return(t&t-1)===0&&t!==0}function rT(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function Au(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function oT(t,e,n,i,r){const o=Math.cos,s=Math.sin,a=o(n/2),l=s(n/2),u=o((e+i)/2),c=s((e+i)/2),d=o((e-i)/2),f=s((e-i)/2),p=o((i-e)/2),_=s((i-e)/2);switch(r){case"XYX":t.set(a*c,l*d,l*f,a*u);break;case"YZY":t.set(l*f,a*c,l*d,a*u);break;case"ZXZ":t.set(l*d,l*f,a*c,a*u);break;case"XZX":t.set(a*c,l*_,l*p,a*u);break;case"YXY":t.set(l*p,a*c,l*_,a*u);break;case"ZYZ":t.set(l*_,l*p,a*c,a*u);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function bo(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function rn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const tr={DEG2RAD:Ks,RAD2DEG:xa,generateUUID:Ss,clamp:un,euclideanModulo:ap,mapLinear:$2,inverseLerp:j2,lerp:Qs,damp:q2,pingpong:Y2,smoothstep:Z2,smootherstep:K2,randInt:Q2,randFloat:J2,randFloatSpread:eT,seededRandom:tT,degToRad:nT,radToDeg:iT,isPowerOfTwo:Xd,ceilPowerOfTwo:rT,floorPowerOfTwo:Au,setQuaternionFromProperEuler:oT,normalize:rn,denormalize:bo};class Ke{constructor(e=0,n=0){Ke.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(un(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),o=this.x-e.x,s=this.y-e.y;return this.x=o*i-s*r+e.x,this.y=o*r+s*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class We{constructor(e,n,i,r,o,s,a,l,u){We.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,o,s,a,l,u)}set(e,n,i,r,o,s,a,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=a,c[3]=n,c[4]=o,c[5]=l,c[6]=i,c[7]=s,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,o=this.elements,s=i[0],a=i[3],l=i[6],u=i[1],c=i[4],d=i[7],f=i[2],p=i[5],_=i[8],y=r[0],g=r[3],h=r[6],v=r[1],m=r[4],x=r[7],R=r[2],T=r[5],M=r[8];return o[0]=s*y+a*v+l*R,o[3]=s*g+a*m+l*T,o[6]=s*h+a*x+l*M,o[1]=u*y+c*v+d*R,o[4]=u*g+c*m+d*T,o[7]=u*h+c*x+d*M,o[2]=f*y+p*v+_*R,o[5]=f*g+p*m+_*T,o[8]=f*h+p*x+_*M,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],u=e[7],c=e[8];return n*s*c-n*a*u-i*o*c+i*a*l+r*o*u-r*s*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],u=e[7],c=e[8],d=c*s-a*u,f=a*l-c*o,p=u*o-s*l,_=n*d+i*f+r*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/_;return e[0]=d*y,e[1]=(r*u-c*i)*y,e[2]=(a*i-r*s)*y,e[3]=f*y,e[4]=(c*n-r*l)*y,e[5]=(r*o-a*n)*y,e[6]=p*y,e[7]=(i*l-u*n)*y,e[8]=(s*n-i*o)*y,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,o,s,a){const l=Math.cos(o),u=Math.sin(o);return this.set(i*l,i*u,-i*(l*s+u*a)+s+e,-r*u,r*l,-r*(-u*s+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(of.makeScale(e,n)),this}rotate(e){return this.premultiply(of.makeRotation(-e)),this}translate(e,n){return this.premultiply(of.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const of=new We;function W1(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Cu(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function sT(){const t=Cu("canvas");return t.style.display="block",t}const Dg={};function Js(t){t in Dg||(Dg[t]=!0,console.warn(t))}const Ug=new We().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Fg=new We().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),tl={[Gi]:{transfer:Eu,primaries:Mu,toReference:t=>t,fromReference:t=>t},[Ht]:{transfer:ft,primaries:Mu,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[ac]:{transfer:Eu,primaries:Tu,toReference:t=>t.applyMatrix3(Fg),fromReference:t=>t.applyMatrix3(Ug)},[sp]:{transfer:ft,primaries:Tu,toReference:t=>t.convertSRGBToLinear().applyMatrix3(Fg),fromReference:t=>t.applyMatrix3(Ug).convertLinearToSRGB()}},aT=new Set([Gi,ac]),it={enabled:!0,_workingColorSpace:Gi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!aT.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=tl[e].toReference,r=tl[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return tl[t].primaries},getTransfer:function(t){return t===Bn?Eu:tl[t].transfer}};function Jo(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function sf(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let ho;class X1{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ho===void 0&&(ho=Cu("canvas")),ho.width=e.width,ho.height=e.height;const i=ho.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=ho}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Cu("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),o=r.data;for(let s=0;s<o.length;s++)o[s]=Jo(o[s]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Jo(n[i]/255)*255):n[i]=Jo(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let lT=0;class $1{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:lT++}),this.uuid=Ss(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let o;if(Array.isArray(r)){o=[];for(let s=0,a=r.length;s<a;s++)r[s].isDataTexture?o.push(af(r[s].image)):o.push(af(r[s]))}else o=af(r);i.url=o}return n||(e.images[this.uuid]=i),i}}function af(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?X1.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let uT=0;class Cn extends xs{constructor(e=Cn.DEFAULT_IMAGE,n=Cn.DEFAULT_MAPPING,i=ti,r=ti,o=On,s=_a,a=ni,l=_r,u=Cn.DEFAULT_ANISOTROPY,c=Bn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:uT++}),this.uuid=Ss(),this.name="",this.source=new $1(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=o,this.minFilter=s,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ke(0,0),this.repeat=new Ke(1,1),this.center=new Ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof c=="string"?this.colorSpace=c:(Js("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=c===qr?Ht:Bn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==D1)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Gd:e.x=e.x-Math.floor(e.x);break;case ti:e.x=e.x<0?0:1;break;case Vd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Gd:e.y=e.y-Math.floor(e.y);break;case ti:e.y=e.y<0?0:1;break;case Vd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Js("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Ht?qr:G1}set encoding(e){Js("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===qr?Ht:Bn}}Cn.DEFAULT_IMAGE=null;Cn.DEFAULT_MAPPING=D1;Cn.DEFAULT_ANISOTROPY=1;class zt{constructor(e=0,n=0,i=0,r=1){zt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,o=this.w,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r+s[12]*o,this.y=s[1]*n+s[5]*i+s[9]*r+s[13]*o,this.z=s[2]*n+s[6]*i+s[10]*r+s[14]*o,this.w=s[3]*n+s[7]*i+s[11]*r+s[15]*o,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,o;const l=e.elements,u=l[0],c=l[4],d=l[8],f=l[1],p=l[5],_=l[9],y=l[2],g=l[6],h=l[10];if(Math.abs(c-f)<.01&&Math.abs(d-y)<.01&&Math.abs(_-g)<.01){if(Math.abs(c+f)<.1&&Math.abs(d+y)<.1&&Math.abs(_+g)<.1&&Math.abs(u+p+h-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const m=(u+1)/2,x=(p+1)/2,R=(h+1)/2,T=(c+f)/4,M=(d+y)/4,L=(_+g)/4;return m>x&&m>R?m<.01?(i=0,r=.707106781,o=.707106781):(i=Math.sqrt(m),r=T/i,o=M/i):x>R?x<.01?(i=.707106781,r=0,o=.707106781):(r=Math.sqrt(x),i=T/r,o=L/r):R<.01?(i=.707106781,r=.707106781,o=0):(o=Math.sqrt(R),i=M/o,r=L/o),this.set(i,r,o,n),this}let v=Math.sqrt((g-_)*(g-_)+(d-y)*(d-y)+(f-c)*(f-c));return Math.abs(v)<.001&&(v=1),this.x=(g-_)/v,this.y=(d-y)/v,this.z=(f-c)/v,this.w=Math.acos((u+p+h-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class cT extends xs{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new zt(0,0,e,n),this.scissorTest=!1,this.viewport=new zt(0,0,e,n);const r={width:e,height:n,depth:1};i.encoding!==void 0&&(Js("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===qr?Ht:Bn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:On,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new Cn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new $1(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class io extends cT{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class j1 extends Cn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=ln,this.minFilter=ln,this.wrapR=ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class fT extends Cn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=ln,this.minFilter=ln,this.wrapR=ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Pa{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,o,s,a){let l=i[r+0],u=i[r+1],c=i[r+2],d=i[r+3];const f=o[s+0],p=o[s+1],_=o[s+2],y=o[s+3];if(a===0){e[n+0]=l,e[n+1]=u,e[n+2]=c,e[n+3]=d;return}if(a===1){e[n+0]=f,e[n+1]=p,e[n+2]=_,e[n+3]=y;return}if(d!==y||l!==f||u!==p||c!==_){let g=1-a;const h=l*f+u*p+c*_+d*y,v=h>=0?1:-1,m=1-h*h;if(m>Number.EPSILON){const R=Math.sqrt(m),T=Math.atan2(R,h*v);g=Math.sin(g*T)/R,a=Math.sin(a*T)/R}const x=a*v;if(l=l*g+f*x,u=u*g+p*x,c=c*g+_*x,d=d*g+y*x,g===1-a){const R=1/Math.sqrt(l*l+u*u+c*c+d*d);l*=R,u*=R,c*=R,d*=R}}e[n]=l,e[n+1]=u,e[n+2]=c,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,r,o,s){const a=i[r],l=i[r+1],u=i[r+2],c=i[r+3],d=o[s],f=o[s+1],p=o[s+2],_=o[s+3];return e[n]=a*_+c*d+l*p-u*f,e[n+1]=l*_+c*f+u*d-a*p,e[n+2]=u*_+c*p+a*f-l*d,e[n+3]=c*_-a*d-l*f-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,o=e._z,s=e._order,a=Math.cos,l=Math.sin,u=a(i/2),c=a(r/2),d=a(o/2),f=l(i/2),p=l(r/2),_=l(o/2);switch(s){case"XYZ":this._x=f*c*d+u*p*_,this._y=u*p*d-f*c*_,this._z=u*c*_+f*p*d,this._w=u*c*d-f*p*_;break;case"YXZ":this._x=f*c*d+u*p*_,this._y=u*p*d-f*c*_,this._z=u*c*_-f*p*d,this._w=u*c*d+f*p*_;break;case"ZXY":this._x=f*c*d-u*p*_,this._y=u*p*d+f*c*_,this._z=u*c*_+f*p*d,this._w=u*c*d-f*p*_;break;case"ZYX":this._x=f*c*d-u*p*_,this._y=u*p*d+f*c*_,this._z=u*c*_-f*p*d,this._w=u*c*d+f*p*_;break;case"YZX":this._x=f*c*d+u*p*_,this._y=u*p*d+f*c*_,this._z=u*c*_-f*p*d,this._w=u*c*d-f*p*_;break;case"XZY":this._x=f*c*d-u*p*_,this._y=u*p*d-f*c*_,this._z=u*c*_+f*p*d,this._w=u*c*d+f*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],o=n[8],s=n[1],a=n[5],l=n[9],u=n[2],c=n[6],d=n[10],f=i+a+d;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(c-l)*p,this._y=(o-u)*p,this._z=(s-r)*p}else if(i>a&&i>d){const p=2*Math.sqrt(1+i-a-d);this._w=(c-l)/p,this._x=.25*p,this._y=(r+s)/p,this._z=(o+u)/p}else if(a>d){const p=2*Math.sqrt(1+a-i-d);this._w=(o-u)/p,this._x=(r+s)/p,this._y=.25*p,this._z=(l+c)/p}else{const p=2*Math.sqrt(1+d-i-a);this._w=(s-r)/p,this._x=(o+u)/p,this._y=(l+c)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(un(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,o=e._z,s=e._w,a=n._x,l=n._y,u=n._z,c=n._w;return this._x=i*c+s*a+r*u-o*l,this._y=r*c+s*l+o*a-i*u,this._z=o*c+s*u+i*l-r*a,this._w=s*c-i*a-r*l-o*u,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,o=this._z,s=this._w;let a=s*e._w+i*e._x+r*e._y+o*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=s,this._x=i,this._y=r,this._z=o,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*s+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*o+n*this._z,this.normalize(),this}const u=Math.sqrt(l),c=Math.atan2(u,a),d=Math.sin((1-n)*c)/u,f=Math.sin(n*c)/u;return this._w=s*d+this._w*f,this._x=i*d+this._x*f,this._y=r*d+this._y*f,this._z=o*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),o=2*Math.PI*Math.random();return this.set(n*Math.cos(r),i*Math.sin(o),i*Math.cos(o),n*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class k{constructor(e=0,n=0,i=0){k.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Og.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Og.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*n+o[3]*i+o[6]*r,this.y=o[1]*n+o[4]*i+o[7]*r,this.z=o[2]*n+o[5]*i+o[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,o=e.elements,s=1/(o[3]*n+o[7]*i+o[11]*r+o[15]);return this.x=(o[0]*n+o[4]*i+o[8]*r+o[12])*s,this.y=(o[1]*n+o[5]*i+o[9]*r+o[13])*s,this.z=(o[2]*n+o[6]*i+o[10]*r+o[14])*s,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,o=e.x,s=e.y,a=e.z,l=e.w,u=2*(s*r-a*i),c=2*(a*n-o*r),d=2*(o*i-s*n);return this.x=n+l*u+s*d-a*c,this.y=i+l*c+a*u-o*d,this.z=r+l*d+o*c-s*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r,this.y=o[1]*n+o[5]*i+o[9]*r,this.z=o[2]*n+o[6]*i+o[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,o=e.z,s=n.x,a=n.y,l=n.z;return this.x=r*l-o*a,this.y=o*s-i*l,this.z=i*a-r*s,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return lf.copy(this).projectOnVector(e),this.sub(lf)}reflect(e){return this.sub(lf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(un(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const lf=new k,Og=new Pa;class La{constructor(e=new k(1/0,1/0,1/0),n=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(qn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(qn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=qn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const o=i.getAttribute("position");if(n===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let s=0,a=o.count;s<a;s++)e.isMesh===!0?e.getVertexPosition(s,qn):qn.fromBufferAttribute(o,s),qn.applyMatrix4(e.matrixWorld),this.expandByPoint(qn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),nl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),nl.copy(i.boundingBox)),nl.applyMatrix4(e.matrixWorld),this.union(nl)}const r=e.children;for(let o=0,s=r.length;o<s;o++)this.expandByObject(r[o],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,qn),qn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Is),il.subVectors(this.max,Is),po.subVectors(e.a,Is),mo.subVectors(e.b,Is),go.subVectors(e.c,Is),$i.subVectors(mo,po),ji.subVectors(go,mo),Pr.subVectors(po,go);let n=[0,-$i.z,$i.y,0,-ji.z,ji.y,0,-Pr.z,Pr.y,$i.z,0,-$i.x,ji.z,0,-ji.x,Pr.z,0,-Pr.x,-$i.y,$i.x,0,-ji.y,ji.x,0,-Pr.y,Pr.x,0];return!uf(n,po,mo,go,il)||(n=[1,0,0,0,1,0,0,0,1],!uf(n,po,mo,go,il))?!1:(rl.crossVectors($i,ji),n=[rl.x,rl.y,rl.z],uf(n,po,mo,go,il))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,qn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(qn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ti[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ti[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ti[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ti[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ti[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ti[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ti[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ti[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ti),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ti=[new k,new k,new k,new k,new k,new k,new k,new k],qn=new k,nl=new La,po=new k,mo=new k,go=new k,$i=new k,ji=new k,Pr=new k,Is=new k,il=new k,rl=new k,Lr=new k;function uf(t,e,n,i,r){for(let o=0,s=t.length-3;o<=s;o+=3){Lr.fromArray(t,o);const a=r.x*Math.abs(Lr.x)+r.y*Math.abs(Lr.y)+r.z*Math.abs(Lr.z),l=e.dot(Lr),u=n.dot(Lr),c=i.dot(Lr);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const dT=new La,Ds=new k,cf=new k;class lp{constructor(e=new k,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):dT.setFromPoints(e).getCenter(i);let r=0;for(let o=0,s=e.length;o<s;o++)r=Math.max(r,i.distanceToSquared(e[o]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ds.subVectors(e,this.center);const n=Ds.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Ds,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(cf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ds.copy(e.center).add(cf)),this.expandByPoint(Ds.copy(e.center).sub(cf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const wi=new k,ff=new k,ol=new k,qi=new k,df=new k,sl=new k,hf=new k;class q1{constructor(e=new k,n=new k(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,wi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=wi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(wi.copy(this.origin).addScaledVector(this.direction,n),wi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){ff.copy(e).add(n).multiplyScalar(.5),ol.copy(n).sub(e).normalize(),qi.copy(this.origin).sub(ff);const o=e.distanceTo(n)*.5,s=-this.direction.dot(ol),a=qi.dot(this.direction),l=-qi.dot(ol),u=qi.lengthSq(),c=Math.abs(1-s*s);let d,f,p,_;if(c>0)if(d=s*l-a,f=s*a-l,_=o*c,d>=0)if(f>=-_)if(f<=_){const y=1/c;d*=y,f*=y,p=d*(d+s*f+2*a)+f*(s*d+f+2*l)+u}else f=o,d=Math.max(0,-(s*f+a)),p=-d*d+f*(f+2*l)+u;else f=-o,d=Math.max(0,-(s*f+a)),p=-d*d+f*(f+2*l)+u;else f<=-_?(d=Math.max(0,-(-s*o+a)),f=d>0?-o:Math.min(Math.max(-o,-l),o),p=-d*d+f*(f+2*l)+u):f<=_?(d=0,f=Math.min(Math.max(-o,-l),o),p=f*(f+2*l)+u):(d=Math.max(0,-(s*o+a)),f=d>0?o:Math.min(Math.max(-o,-l),o),p=-d*d+f*(f+2*l)+u);else f=s>0?-o:o,d=Math.max(0,-(s*f+a)),p=-d*d+f*(f+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(ff).addScaledVector(ol,f),p}intersectSphere(e,n){wi.subVectors(e.center,this.origin);const i=wi.dot(this.direction),r=wi.dot(wi)-i*i,o=e.radius*e.radius;if(r>o)return null;const s=Math.sqrt(o-r),a=i-s,l=i+s;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,o,s,a,l;const u=1/this.direction.x,c=1/this.direction.y,d=1/this.direction.z,f=this.origin;return u>=0?(i=(e.min.x-f.x)*u,r=(e.max.x-f.x)*u):(i=(e.max.x-f.x)*u,r=(e.min.x-f.x)*u),c>=0?(o=(e.min.y-f.y)*c,s=(e.max.y-f.y)*c):(o=(e.max.y-f.y)*c,s=(e.min.y-f.y)*c),i>s||o>r||((o>i||isNaN(i))&&(i=o),(s<r||isNaN(r))&&(r=s),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,wi)!==null}intersectTriangle(e,n,i,r,o){df.subVectors(n,e),sl.subVectors(i,e),hf.crossVectors(df,sl);let s=this.direction.dot(hf),a;if(s>0){if(r)return null;a=1}else if(s<0)a=-1,s=-s;else return null;qi.subVectors(this.origin,e);const l=a*this.direction.dot(sl.crossVectors(qi,sl));if(l<0)return null;const u=a*this.direction.dot(df.cross(qi));if(u<0||l+u>s)return null;const c=-a*qi.dot(hf);return c<0?null:this.at(c/s,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Vt{constructor(e,n,i,r,o,s,a,l,u,c,d,f,p,_,y,g){Vt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,o,s,a,l,u,c,d,f,p,_,y,g)}set(e,n,i,r,o,s,a,l,u,c,d,f,p,_,y,g){const h=this.elements;return h[0]=e,h[4]=n,h[8]=i,h[12]=r,h[1]=o,h[5]=s,h[9]=a,h[13]=l,h[2]=u,h[6]=c,h[10]=d,h[14]=f,h[3]=p,h[7]=_,h[11]=y,h[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Vt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/vo.setFromMatrixColumn(e,0).length(),o=1/vo.setFromMatrixColumn(e,1).length(),s=1/vo.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*o,n[5]=i[5]*o,n[6]=i[6]*o,n[7]=0,n[8]=i[8]*s,n[9]=i[9]*s,n[10]=i[10]*s,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,o=e.z,s=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(o),d=Math.sin(o);if(e.order==="XYZ"){const f=s*c,p=s*d,_=a*c,y=a*d;n[0]=l*c,n[4]=-l*d,n[8]=u,n[1]=p+_*u,n[5]=f-y*u,n[9]=-a*l,n[2]=y-f*u,n[6]=_+p*u,n[10]=s*l}else if(e.order==="YXZ"){const f=l*c,p=l*d,_=u*c,y=u*d;n[0]=f+y*a,n[4]=_*a-p,n[8]=s*u,n[1]=s*d,n[5]=s*c,n[9]=-a,n[2]=p*a-_,n[6]=y+f*a,n[10]=s*l}else if(e.order==="ZXY"){const f=l*c,p=l*d,_=u*c,y=u*d;n[0]=f-y*a,n[4]=-s*d,n[8]=_+p*a,n[1]=p+_*a,n[5]=s*c,n[9]=y-f*a,n[2]=-s*u,n[6]=a,n[10]=s*l}else if(e.order==="ZYX"){const f=s*c,p=s*d,_=a*c,y=a*d;n[0]=l*c,n[4]=_*u-p,n[8]=f*u+y,n[1]=l*d,n[5]=y*u+f,n[9]=p*u-_,n[2]=-u,n[6]=a*l,n[10]=s*l}else if(e.order==="YZX"){const f=s*l,p=s*u,_=a*l,y=a*u;n[0]=l*c,n[4]=y-f*d,n[8]=_*d+p,n[1]=d,n[5]=s*c,n[9]=-a*c,n[2]=-u*c,n[6]=p*d+_,n[10]=f-y*d}else if(e.order==="XZY"){const f=s*l,p=s*u,_=a*l,y=a*u;n[0]=l*c,n[4]=-d,n[8]=u*c,n[1]=f*d+y,n[5]=s*c,n[9]=p*d-_,n[2]=_*d-p,n[6]=a*c,n[10]=y*d+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(hT,e,pT)}lookAt(e,n,i){const r=this.elements;return xn.subVectors(e,n),xn.lengthSq()===0&&(xn.z=1),xn.normalize(),Yi.crossVectors(i,xn),Yi.lengthSq()===0&&(Math.abs(i.z)===1?xn.x+=1e-4:xn.z+=1e-4,xn.normalize(),Yi.crossVectors(i,xn)),Yi.normalize(),al.crossVectors(xn,Yi),r[0]=Yi.x,r[4]=al.x,r[8]=xn.x,r[1]=Yi.y,r[5]=al.y,r[9]=xn.y,r[2]=Yi.z,r[6]=al.z,r[10]=xn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,o=this.elements,s=i[0],a=i[4],l=i[8],u=i[12],c=i[1],d=i[5],f=i[9],p=i[13],_=i[2],y=i[6],g=i[10],h=i[14],v=i[3],m=i[7],x=i[11],R=i[15],T=r[0],M=r[4],L=r[8],E=r[12],A=r[1],F=r[5],$=r[9],te=r[13],P=r[2],O=r[6],X=r[10],Y=r[14],N=r[3],I=r[7],G=r[11],j=r[15];return o[0]=s*T+a*A+l*P+u*N,o[4]=s*M+a*F+l*O+u*I,o[8]=s*L+a*$+l*X+u*G,o[12]=s*E+a*te+l*Y+u*j,o[1]=c*T+d*A+f*P+p*N,o[5]=c*M+d*F+f*O+p*I,o[9]=c*L+d*$+f*X+p*G,o[13]=c*E+d*te+f*Y+p*j,o[2]=_*T+y*A+g*P+h*N,o[6]=_*M+y*F+g*O+h*I,o[10]=_*L+y*$+g*X+h*G,o[14]=_*E+y*te+g*Y+h*j,o[3]=v*T+m*A+x*P+R*N,o[7]=v*M+m*F+x*O+R*I,o[11]=v*L+m*$+x*X+R*G,o[15]=v*E+m*te+x*Y+R*j,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],o=e[12],s=e[1],a=e[5],l=e[9],u=e[13],c=e[2],d=e[6],f=e[10],p=e[14],_=e[3],y=e[7],g=e[11],h=e[15];return _*(+o*l*d-r*u*d-o*a*f+i*u*f+r*a*p-i*l*p)+y*(+n*l*p-n*u*f+o*s*f-r*s*p+r*u*c-o*l*c)+g*(+n*u*d-n*a*p-o*s*d+i*s*p+o*a*c-i*u*c)+h*(-r*a*c-n*l*d+n*a*f+r*s*d-i*s*f+i*l*c)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],u=e[7],c=e[8],d=e[9],f=e[10],p=e[11],_=e[12],y=e[13],g=e[14],h=e[15],v=d*g*u-y*f*u+y*l*p-a*g*p-d*l*h+a*f*h,m=_*f*u-c*g*u-_*l*p+s*g*p+c*l*h-s*f*h,x=c*y*u-_*d*u+_*a*p-s*y*p-c*a*h+s*d*h,R=_*d*l-c*y*l-_*a*f+s*y*f+c*a*g-s*d*g,T=n*v+i*m+r*x+o*R;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const M=1/T;return e[0]=v*M,e[1]=(y*f*o-d*g*o-y*r*p+i*g*p+d*r*h-i*f*h)*M,e[2]=(a*g*o-y*l*o+y*r*u-i*g*u-a*r*h+i*l*h)*M,e[3]=(d*l*o-a*f*o-d*r*u+i*f*u+a*r*p-i*l*p)*M,e[4]=m*M,e[5]=(c*g*o-_*f*o+_*r*p-n*g*p-c*r*h+n*f*h)*M,e[6]=(_*l*o-s*g*o-_*r*u+n*g*u+s*r*h-n*l*h)*M,e[7]=(s*f*o-c*l*o+c*r*u-n*f*u-s*r*p+n*l*p)*M,e[8]=x*M,e[9]=(_*d*o-c*y*o-_*i*p+n*y*p+c*i*h-n*d*h)*M,e[10]=(s*y*o-_*a*o+_*i*u-n*y*u-s*i*h+n*a*h)*M,e[11]=(c*a*o-s*d*o-c*i*u+n*d*u+s*i*p-n*a*p)*M,e[12]=R*M,e[13]=(c*y*r-_*d*r+_*i*f-n*y*f-c*i*g+n*d*g)*M,e[14]=(_*a*r-s*y*r-_*i*l+n*y*l+s*i*g-n*a*g)*M,e[15]=(s*d*r-c*a*r+c*i*l-n*d*l-s*i*f+n*a*f)*M,this}scale(e){const n=this.elements,i=e.x,r=e.y,o=e.z;return n[0]*=i,n[4]*=r,n[8]*=o,n[1]*=i,n[5]*=r,n[9]*=o,n[2]*=i,n[6]*=r,n[10]*=o,n[3]*=i,n[7]*=r,n[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),o=1-i,s=e.x,a=e.y,l=e.z,u=o*s,c=o*a;return this.set(u*s+i,u*a-r*l,u*l+r*a,0,u*a+r*l,c*a+i,c*l-r*s,0,u*l-r*a,c*l+r*s,o*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,o,s){return this.set(1,i,o,0,e,1,s,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,o=n._x,s=n._y,a=n._z,l=n._w,u=o+o,c=s+s,d=a+a,f=o*u,p=o*c,_=o*d,y=s*c,g=s*d,h=a*d,v=l*u,m=l*c,x=l*d,R=i.x,T=i.y,M=i.z;return r[0]=(1-(y+h))*R,r[1]=(p+x)*R,r[2]=(_-m)*R,r[3]=0,r[4]=(p-x)*T,r[5]=(1-(f+h))*T,r[6]=(g+v)*T,r[7]=0,r[8]=(_+m)*M,r[9]=(g-v)*M,r[10]=(1-(f+y))*M,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let o=vo.set(r[0],r[1],r[2]).length();const s=vo.set(r[4],r[5],r[6]).length(),a=vo.set(r[8],r[9],r[10]).length();this.determinant()<0&&(o=-o),e.x=r[12],e.y=r[13],e.z=r[14],Yn.copy(this);const u=1/o,c=1/s,d=1/a;return Yn.elements[0]*=u,Yn.elements[1]*=u,Yn.elements[2]*=u,Yn.elements[4]*=c,Yn.elements[5]*=c,Yn.elements[6]*=c,Yn.elements[8]*=d,Yn.elements[9]*=d,Yn.elements[10]*=d,n.setFromRotationMatrix(Yn),i.x=o,i.y=s,i.z=a,this}makePerspective(e,n,i,r,o,s,a=Fi){const l=this.elements,u=2*o/(n-e),c=2*o/(i-r),d=(n+e)/(n-e),f=(i+r)/(i-r);let p,_;if(a===Fi)p=-(s+o)/(s-o),_=-2*s*o/(s-o);else if(a===wu)p=-s/(s-o),_=-s*o/(s-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=c,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,o,s,a=Fi){const l=this.elements,u=1/(n-e),c=1/(i-r),d=1/(s-o),f=(n+e)*u,p=(i+r)*c;let _,y;if(a===Fi)_=(s+o)*d,y=-2*d;else if(a===wu)_=o*d,y=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=y,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const vo=new k,Yn=new Vt,hT=new k(0,0,0),pT=new k(1,1,1),Yi=new k,al=new k,xn=new k,kg=new Vt,Bg=new Pa;class lc{constructor(e=0,n=0,i=0,r=lc.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,o=r[0],s=r[4],a=r[8],l=r[1],u=r[5],c=r[9],d=r[2],f=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(un(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,p),this._z=Math.atan2(-s,o)):(this._x=Math.atan2(f,u),this._z=0);break;case"YXZ":this._x=Math.asin(-un(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-d,o),this._z=0);break;case"ZXY":this._x=Math.asin(un(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-s,u)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-un(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-s,u));break;case"YZX":this._z=Math.asin(un(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-d,o)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-un(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-c,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return kg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(kg,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Bg.setFromEuler(this),this.setFromQuaternion(Bg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}lc.DEFAULT_ORDER="XYZ";class up{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let mT=0;const Hg=new k,_o=new Pa,Ai=new Vt,ll=new k,Us=new k,gT=new k,vT=new Pa,zg=new k(1,0,0),Gg=new k(0,1,0),Vg=new k(0,0,1),_T={type:"added"},yT={type:"removed"};class Rn extends xs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:mT++}),this.uuid=Ss(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Rn.DEFAULT_UP.clone();const e=new k,n=new lc,i=new Pa,r=new k(1,1,1);function o(){i.setFromEuler(n,!1)}function s(){n.setFromQuaternion(i,void 0,!1)}n._onChange(o),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Vt},normalMatrix:{value:new We}}),this.matrix=new Vt,this.matrixWorld=new Vt,this.matrixAutoUpdate=Rn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new up,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return _o.setFromAxisAngle(e,n),this.quaternion.multiply(_o),this}rotateOnWorldAxis(e,n){return _o.setFromAxisAngle(e,n),this.quaternion.premultiply(_o),this}rotateX(e){return this.rotateOnAxis(zg,e)}rotateY(e){return this.rotateOnAxis(Gg,e)}rotateZ(e){return this.rotateOnAxis(Vg,e)}translateOnAxis(e,n){return Hg.copy(e).applyQuaternion(this.quaternion),this.position.add(Hg.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(zg,e)}translateY(e){return this.translateOnAxis(Gg,e)}translateZ(e){return this.translateOnAxis(Vg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ai.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?ll.copy(e):ll.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Us.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ai.lookAt(Us,ll,this.up):Ai.lookAt(ll,Us,this.up),this.quaternion.setFromRotationMatrix(Ai),r&&(Ai.extractRotation(r.matrixWorld),_o.setFromRotationMatrix(Ai),this.quaternion.premultiply(_o.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(_T)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(yT)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ai.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ai.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ai),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const s=this.children[i].getObjectByProperty(e,n);if(s!==void 0)return s}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let o=0,s=r.length;o<s;o++)r[o].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Us,e,gT),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Us,vT,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const o=n[i];(o.matrixWorldAutoUpdate===!0||e===!0)&&o.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let o=0,s=r.length;o<s;o++){const a=r[o];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function o(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=o(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const d=l[u];o(e.shapes,d)}else o(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(o(e.materials,this.material[l]));r.material=a}else r.material=o(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(o(e.animations,l))}}if(n){const a=s(e.geometries),l=s(e.materials),u=s(e.textures),c=s(e.images),d=s(e.shapes),f=s(e.skeletons),p=s(e.animations),_=s(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=r,i;function s(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Rn.DEFAULT_UP=new k(0,1,0);Rn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Zn=new k,Ci=new k,pf=new k,Ri=new k,yo=new k,xo=new k,Wg=new k,mf=new k,gf=new k,vf=new k;let ul=!1;class ei{constructor(e=new k,n=new k,i=new k){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Zn.subVectors(e,n),r.cross(Zn);const o=r.lengthSq();return o>0?r.multiplyScalar(1/Math.sqrt(o)):r.set(0,0,0)}static getBarycoord(e,n,i,r,o){Zn.subVectors(r,n),Ci.subVectors(i,n),pf.subVectors(e,n);const s=Zn.dot(Zn),a=Zn.dot(Ci),l=Zn.dot(pf),u=Ci.dot(Ci),c=Ci.dot(pf),d=s*u-a*a;if(d===0)return o.set(0,0,0),null;const f=1/d,p=(u*l-a*c)*f,_=(s*c-a*l)*f;return o.set(1-p-_,_,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Ri)===null?!1:Ri.x>=0&&Ri.y>=0&&Ri.x+Ri.y<=1}static getUV(e,n,i,r,o,s,a,l){return ul===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ul=!0),this.getInterpolation(e,n,i,r,o,s,a,l)}static getInterpolation(e,n,i,r,o,s,a,l){return this.getBarycoord(e,n,i,r,Ri)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(o,Ri.x),l.addScaledVector(s,Ri.y),l.addScaledVector(a,Ri.z),l)}static isFrontFacing(e,n,i,r){return Zn.subVectors(i,n),Ci.subVectors(e,n),Zn.cross(Ci).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Zn.subVectors(this.c,this.b),Ci.subVectors(this.a,this.b),Zn.cross(Ci).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ei.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return ei.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,r,o){return ul===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ul=!0),ei.getInterpolation(e,this.a,this.b,this.c,n,i,r,o)}getInterpolation(e,n,i,r,o){return ei.getInterpolation(e,this.a,this.b,this.c,n,i,r,o)}containsPoint(e){return ei.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ei.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,o=this.c;let s,a;yo.subVectors(r,i),xo.subVectors(o,i),mf.subVectors(e,i);const l=yo.dot(mf),u=xo.dot(mf);if(l<=0&&u<=0)return n.copy(i);gf.subVectors(e,r);const c=yo.dot(gf),d=xo.dot(gf);if(c>=0&&d<=c)return n.copy(r);const f=l*d-c*u;if(f<=0&&l>=0&&c<=0)return s=l/(l-c),n.copy(i).addScaledVector(yo,s);vf.subVectors(e,o);const p=yo.dot(vf),_=xo.dot(vf);if(_>=0&&p<=_)return n.copy(o);const y=p*u-l*_;if(y<=0&&u>=0&&_<=0)return a=u/(u-_),n.copy(i).addScaledVector(xo,a);const g=c*_-p*d;if(g<=0&&d-c>=0&&p-_>=0)return Wg.subVectors(o,r),a=(d-c)/(d-c+(p-_)),n.copy(r).addScaledVector(Wg,a);const h=1/(g+y+f);return s=y*h,a=f*h,n.copy(i).addScaledVector(yo,s).addScaledVector(xo,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Y1={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Zi={h:0,s:0,l:0},cl={h:0,s:0,l:0};function _f(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class rt{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Ht){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,it.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=it.workingColorSpace){return this.r=e,this.g=n,this.b=i,it.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=it.workingColorSpace){if(e=ap(e,1),n=un(n,0,1),i=un(i,0,1),n===0)this.r=this.g=this.b=i;else{const o=i<=.5?i*(1+n):i+n-i*n,s=2*i-o;this.r=_f(s,o,e+1/3),this.g=_f(s,o,e),this.b=_f(s,o,e-1/3)}return it.toWorkingColorSpace(this,r),this}setStyle(e,n=Ht){function i(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const s=r[1],a=r[2];switch(s){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,n);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,n);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=r[1],s=o.length;if(s===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,n);if(s===6)return this.setHex(parseInt(o,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Ht){const i=Y1[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Jo(e.r),this.g=Jo(e.g),this.b=Jo(e.b),this}copyLinearToSRGB(e){return this.r=sf(e.r),this.g=sf(e.g),this.b=sf(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ht){return it.fromWorkingColorSpace(Yt.copy(this),e),Math.round(un(Yt.r*255,0,255))*65536+Math.round(un(Yt.g*255,0,255))*256+Math.round(un(Yt.b*255,0,255))}getHexString(e=Ht){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=it.workingColorSpace){it.fromWorkingColorSpace(Yt.copy(this),n);const i=Yt.r,r=Yt.g,o=Yt.b,s=Math.max(i,r,o),a=Math.min(i,r,o);let l,u;const c=(a+s)/2;if(a===s)l=0,u=0;else{const d=s-a;switch(u=c<=.5?d/(s+a):d/(2-s-a),s){case i:l=(r-o)/d+(r<o?6:0);break;case r:l=(o-i)/d+2;break;case o:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,n=it.workingColorSpace){return it.fromWorkingColorSpace(Yt.copy(this),n),e.r=Yt.r,e.g=Yt.g,e.b=Yt.b,e}getStyle(e=Ht){it.fromWorkingColorSpace(Yt.copy(this),e);const n=Yt.r,i=Yt.g,r=Yt.b;return e!==Ht?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Zi),this.setHSL(Zi.h+e,Zi.s+n,Zi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Zi),e.getHSL(cl);const i=Qs(Zi.h,cl.h,n),r=Qs(Zi.s,cl.s,n),o=Qs(Zi.l,cl.l,n);return this.setHSL(i,r,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,o=e.elements;return this.r=o[0]*n+o[3]*i+o[6]*r,this.g=o[1]*n+o[4]*i+o[7]*r,this.b=o[2]*n+o[5]*i+o[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Yt=new rt;rt.NAMES=Y1;let xT=0;class uc extends xs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:xT++}),this.uuid=Ss(),this.name="",this.type="Material",this.blending=Qo,this.side=Er,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=kd,this.blendDst=Bd,this.blendEquation=kr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new rt(0,0,0),this.blendAlpha=0,this.depthFunc=Su,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Pg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=fo,this.stencilZFail=fo,this.stencilZPass=fo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Qo&&(i.blending=this.blending),this.side!==Er&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==kd&&(i.blendSrc=this.blendSrc),this.blendDst!==Bd&&(i.blendDst=this.blendDst),this.blendEquation!==kr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Su&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Pg&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==fo&&(i.stencilFail=this.stencilFail),this.stencilZFail!==fo&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==fo&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(o){const s=[];for(const a in o){const l=o[a];delete l.metadata,s.push(l)}return s}if(n){const o=r(e.textures),s=r(e.images);o.length>0&&(i.textures=o),s.length>0&&(i.images=s)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let o=0;o!==r;++o)i[o]=n[o].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Na extends uc{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=I1,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const wt=new k,fl=new Ke;class si{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Lg,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ar,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,o=this.itemSize;r<o;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)fl.fromBufferAttribute(this,n),fl.applyMatrix3(e),this.setXY(n,fl.x,fl.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)wt.fromBufferAttribute(this,n),wt.applyMatrix3(e),this.setXYZ(n,wt.x,wt.y,wt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)wt.fromBufferAttribute(this,n),wt.applyMatrix4(e),this.setXYZ(n,wt.x,wt.y,wt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)wt.fromBufferAttribute(this,n),wt.applyNormalMatrix(e),this.setXYZ(n,wt.x,wt.y,wt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)wt.fromBufferAttribute(this,n),wt.transformDirection(e),this.setXYZ(n,wt.x,wt.y,wt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=bo(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=rn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=bo(n,this.array)),n}setX(e,n){return this.normalized&&(n=rn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=bo(n,this.array)),n}setY(e,n){return this.normalized&&(n=rn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=bo(n,this.array)),n}setZ(e,n){return this.normalized&&(n=rn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=bo(n,this.array)),n}setW(e,n){return this.normalized&&(n=rn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=rn(n,this.array),i=rn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=rn(n,this.array),i=rn(i,this.array),r=rn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,o){return e*=this.itemSize,this.normalized&&(n=rn(n,this.array),i=rn(i,this.array),r=rn(r,this.array),o=rn(o,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Lg&&(e.usage=this.usage),e}}class Z1 extends si{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class K1 extends si{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Si extends si{constructor(e,n,i){super(new Float32Array(e),n,i)}}let ST=0;const Dn=new Vt,yf=new Rn,So=new k,Sn=new La,Fs=new La,Dt=new k;class Wi extends xs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ST++}),this.uuid=Ss(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(W1(e)?K1:Z1)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const o=new We().getNormalMatrix(e);i.applyNormalMatrix(o),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Dn.makeRotationFromQuaternion(e),this.applyMatrix4(Dn),this}rotateX(e){return Dn.makeRotationX(e),this.applyMatrix4(Dn),this}rotateY(e){return Dn.makeRotationY(e),this.applyMatrix4(Dn),this}rotateZ(e){return Dn.makeRotationZ(e),this.applyMatrix4(Dn),this}translate(e,n,i){return Dn.makeTranslation(e,n,i),this.applyMatrix4(Dn),this}scale(e,n,i){return Dn.makeScale(e,n,i),this.applyMatrix4(Dn),this}lookAt(e){return yf.lookAt(e),yf.updateMatrix(),this.applyMatrix4(yf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(So).negate(),this.translate(So.x,So.y,So.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}return this.setAttribute("position",new Si(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new La);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const o=n[i];Sn.setFromBufferAttribute(o),this.morphTargetsRelative?(Dt.addVectors(this.boundingBox.min,Sn.min),this.boundingBox.expandByPoint(Dt),Dt.addVectors(this.boundingBox.max,Sn.max),this.boundingBox.expandByPoint(Dt)):(this.boundingBox.expandByPoint(Sn.min),this.boundingBox.expandByPoint(Sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new lp);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new k,1/0);return}if(e){const i=this.boundingSphere.center;if(Sn.setFromBufferAttribute(e),n)for(let o=0,s=n.length;o<s;o++){const a=n[o];Fs.setFromBufferAttribute(a),this.morphTargetsRelative?(Dt.addVectors(Sn.min,Fs.min),Sn.expandByPoint(Dt),Dt.addVectors(Sn.max,Fs.max),Sn.expandByPoint(Dt)):(Sn.expandByPoint(Fs.min),Sn.expandByPoint(Fs.max))}Sn.getCenter(i);let r=0;for(let o=0,s=e.count;o<s;o++)Dt.fromBufferAttribute(e,o),r=Math.max(r,i.distanceToSquared(Dt));if(n)for(let o=0,s=n.length;o<s;o++){const a=n[o],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)Dt.fromBufferAttribute(a,u),l&&(So.fromBufferAttribute(e,u),Dt.add(So)),r=Math.max(r,i.distanceToSquared(Dt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=n.position.array,o=n.normal.array,s=n.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new si(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,u=[],c=[];for(let A=0;A<a;A++)u[A]=new k,c[A]=new k;const d=new k,f=new k,p=new k,_=new Ke,y=new Ke,g=new Ke,h=new k,v=new k;function m(A,F,$){d.fromArray(r,A*3),f.fromArray(r,F*3),p.fromArray(r,$*3),_.fromArray(s,A*2),y.fromArray(s,F*2),g.fromArray(s,$*2),f.sub(d),p.sub(d),y.sub(_),g.sub(_);const te=1/(y.x*g.y-g.x*y.y);isFinite(te)&&(h.copy(f).multiplyScalar(g.y).addScaledVector(p,-y.y).multiplyScalar(te),v.copy(p).multiplyScalar(y.x).addScaledVector(f,-g.x).multiplyScalar(te),u[A].add(h),u[F].add(h),u[$].add(h),c[A].add(v),c[F].add(v),c[$].add(v))}let x=this.groups;x.length===0&&(x=[{start:0,count:i.length}]);for(let A=0,F=x.length;A<F;++A){const $=x[A],te=$.start,P=$.count;for(let O=te,X=te+P;O<X;O+=3)m(i[O+0],i[O+1],i[O+2])}const R=new k,T=new k,M=new k,L=new k;function E(A){M.fromArray(o,A*3),L.copy(M);const F=u[A];R.copy(F),R.sub(M.multiplyScalar(M.dot(F))).normalize(),T.crossVectors(L,F);const te=T.dot(c[A])<0?-1:1;l[A*4]=R.x,l[A*4+1]=R.y,l[A*4+2]=R.z,l[A*4+3]=te}for(let A=0,F=x.length;A<F;++A){const $=x[A],te=$.start,P=$.count;for(let O=te,X=te+P;O<X;O+=3)E(i[O+0]),E(i[O+1]),E(i[O+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new si(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const r=new k,o=new k,s=new k,a=new k,l=new k,u=new k,c=new k,d=new k;if(e)for(let f=0,p=e.count;f<p;f+=3){const _=e.getX(f+0),y=e.getX(f+1),g=e.getX(f+2);r.fromBufferAttribute(n,_),o.fromBufferAttribute(n,y),s.fromBufferAttribute(n,g),c.subVectors(s,o),d.subVectors(r,o),c.cross(d),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,y),u.fromBufferAttribute(i,g),a.add(c),l.add(c),u.add(c),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(g,u.x,u.y,u.z)}else for(let f=0,p=n.count;f<p;f+=3)r.fromBufferAttribute(n,f+0),o.fromBufferAttribute(n,f+1),s.fromBufferAttribute(n,f+2),c.subVectors(s,o),d.subVectors(r,o),c.cross(d),i.setXYZ(f+0,c.x,c.y,c.z),i.setXYZ(f+1,c.x,c.y,c.z),i.setXYZ(f+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Dt.fromBufferAttribute(e,n),Dt.normalize(),e.setXYZ(n,Dt.x,Dt.y,Dt.z)}toNonIndexed(){function e(a,l){const u=a.array,c=a.itemSize,d=a.normalized,f=new u.constructor(l.length*c);let p=0,_=0;for(let y=0,g=l.length;y<g;y++){a.isInterleavedBufferAttribute?p=l[y]*a.data.stride+a.offset:p=l[y]*c;for(let h=0;h<c;h++)f[_++]=u[p++]}return new si(f,c,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Wi,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);n.setAttribute(a,u)}const o=this.morphAttributes;for(const a in o){const l=[],u=o[a];for(let c=0,d=u.length;c<d;c++){const f=u[c],p=e(f,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let a=0,l=s.length;a<l;a++){const u=s[a];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let o=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let d=0,f=u.length;d<f;d++){const p=u[d];c.push(p.toJSON(e.data))}c.length>0&&(r[l]=c,o=!0)}o&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(n))}const o=e.morphAttributes;for(const u in o){const c=[],d=o[u];for(let f=0,p=d.length;f<p;f++)c.push(d[f].clone(n));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let u=0,c=s.length;u<c;u++){const d=s[u];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Xg=new Vt,Nr=new q1,dl=new lp,$g=new k,Eo=new k,Mo=new k,To=new k,xf=new k,hl=new k,pl=new Ke,ml=new Ke,gl=new Ke,jg=new k,qg=new k,Yg=new k,vl=new k,_l=new k;class ii extends Rn{constructor(e=new Wi,n=new Na){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){const a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,o=i.morphAttributes.position,s=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(o&&a){hl.set(0,0,0);for(let l=0,u=o.length;l<u;l++){const c=a[l],d=o[l];c!==0&&(xf.fromBufferAttribute(d,e),s?hl.addScaledVector(xf,c):hl.addScaledVector(xf.sub(n),c))}n.add(hl)}return n}raycast(e,n){const i=this.geometry,r=this.material,o=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),dl.copy(i.boundingSphere),dl.applyMatrix4(o),Nr.copy(e.ray).recast(e.near),!(dl.containsPoint(Nr.origin)===!1&&(Nr.intersectSphere(dl,$g)===null||Nr.origin.distanceToSquared($g)>(e.far-e.near)**2))&&(Xg.copy(o).invert(),Nr.copy(e.ray).applyMatrix4(Xg),!(i.boundingBox!==null&&Nr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Nr)))}_computeIntersections(e,n,i){let r;const o=this.geometry,s=this.material,a=o.index,l=o.attributes.position,u=o.attributes.uv,c=o.attributes.uv1,d=o.attributes.normal,f=o.groups,p=o.drawRange;if(a!==null)if(Array.isArray(s))for(let _=0,y=f.length;_<y;_++){const g=f[_],h=s[g.materialIndex],v=Math.max(g.start,p.start),m=Math.min(a.count,Math.min(g.start+g.count,p.start+p.count));for(let x=v,R=m;x<R;x+=3){const T=a.getX(x),M=a.getX(x+1),L=a.getX(x+2);r=yl(this,h,e,i,u,c,d,T,M,L),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const _=Math.max(0,p.start),y=Math.min(a.count,p.start+p.count);for(let g=_,h=y;g<h;g+=3){const v=a.getX(g),m=a.getX(g+1),x=a.getX(g+2);r=yl(this,s,e,i,u,c,d,v,m,x),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(s))for(let _=0,y=f.length;_<y;_++){const g=f[_],h=s[g.materialIndex],v=Math.max(g.start,p.start),m=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let x=v,R=m;x<R;x+=3){const T=x,M=x+1,L=x+2;r=yl(this,h,e,i,u,c,d,T,M,L),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const _=Math.max(0,p.start),y=Math.min(l.count,p.start+p.count);for(let g=_,h=y;g<h;g+=3){const v=g,m=g+1,x=g+2;r=yl(this,s,e,i,u,c,d,v,m,x),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}}}function ET(t,e,n,i,r,o,s,a){let l;if(e.side===_n?l=i.intersectTriangle(s,o,r,!0,a):l=i.intersectTriangle(r,o,s,e.side===Er,a),l===null)return null;_l.copy(a),_l.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(_l);return u<n.near||u>n.far?null:{distance:u,point:_l.clone(),object:t}}function yl(t,e,n,i,r,o,s,a,l,u){t.getVertexPosition(a,Eo),t.getVertexPosition(l,Mo),t.getVertexPosition(u,To);const c=ET(t,e,n,i,Eo,Mo,To,vl);if(c){r&&(pl.fromBufferAttribute(r,a),ml.fromBufferAttribute(r,l),gl.fromBufferAttribute(r,u),c.uv=ei.getInterpolation(vl,Eo,Mo,To,pl,ml,gl,new Ke)),o&&(pl.fromBufferAttribute(o,a),ml.fromBufferAttribute(o,l),gl.fromBufferAttribute(o,u),c.uv1=ei.getInterpolation(vl,Eo,Mo,To,pl,ml,gl,new Ke),c.uv2=c.uv1),s&&(jg.fromBufferAttribute(s,a),qg.fromBufferAttribute(s,l),Yg.fromBufferAttribute(s,u),c.normal=ei.getInterpolation(vl,Eo,Mo,To,jg,qg,Yg,new k),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const d={a,b:l,c:u,normal:new k,materialIndex:0};ei.getNormal(Eo,Mo,To,d.normal),c.face=d}return c}class Ia extends Wi{constructor(e=1,n=1,i=1,r=1,o=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:o,depthSegments:s};const a=this;r=Math.floor(r),o=Math.floor(o),s=Math.floor(s);const l=[],u=[],c=[],d=[];let f=0,p=0;_("z","y","x",-1,-1,i,n,e,s,o,0),_("z","y","x",1,-1,i,n,-e,s,o,1),_("x","z","y",1,1,e,i,n,r,s,2),_("x","z","y",1,-1,e,i,-n,r,s,3),_("x","y","z",1,-1,e,n,i,r,o,4),_("x","y","z",-1,-1,e,n,-i,r,o,5),this.setIndex(l),this.setAttribute("position",new Si(u,3)),this.setAttribute("normal",new Si(c,3)),this.setAttribute("uv",new Si(d,2));function _(y,g,h,v,m,x,R,T,M,L,E){const A=x/M,F=R/L,$=x/2,te=R/2,P=T/2,O=M+1,X=L+1;let Y=0,N=0;const I=new k;for(let G=0;G<X;G++){const j=G*F-te;for(let Z=0;Z<O;Z++){const W=Z*A-$;I[y]=W*v,I[g]=j*m,I[h]=P,u.push(I.x,I.y,I.z),I[y]=0,I[g]=0,I[h]=T>0?1:-1,c.push(I.x,I.y,I.z),d.push(Z/M),d.push(1-G/L),Y+=1}}for(let G=0;G<L;G++)for(let j=0;j<M;j++){const Z=f+j+O*G,W=f+j+O*(G+1),q=f+(j+1)+O*(G+1),se=f+(j+1)+O*G;l.push(Z,W,se),l.push(W,q,se),N+=6}a.addGroup(p,N,E),p+=N,f+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ia(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ds(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function on(t){const e={};for(let n=0;n<t.length;n++){const i=ds(t[n]);for(const r in i)e[r]=i[r]}return e}function MT(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Q1(t){return t.getRenderTarget()===null?t.outputColorSpace:it.workingColorSpace}const TT={clone:ds,merge:on};var wT=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,AT=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ro extends uc{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=wT,this.fragmentShader=AT,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ds(e.uniforms),this.uniformsGroups=MT(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const s=this.uniforms[r].value;s&&s.isTexture?n.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?n.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?n.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?n.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?n.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?n.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?n.uniforms[r]={type:"m4",value:s.toArray()}:n.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class J1 extends Rn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Vt,this.projectionMatrix=new Vt,this.projectionMatrixInverse=new Vt,this.coordinateSystem=Fi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class kn extends J1{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=xa*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ks*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return xa*2*Math.atan(Math.tan(Ks*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,i,r,o,s){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Ks*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,o=-.5*r;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,u=s.fullHeight;o+=s.offsetX*r/l,n-=s.offsetY*i/u,r*=s.width/l,i*=s.height/u}const a=this.filmOffset;a!==0&&(o+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const wo=-90,Ao=1;class CT extends Rn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new kn(wo,Ao,e,n);r.layers=this.layers,this.add(r);const o=new kn(wo,Ao,e,n);o.layers=this.layers,this.add(o);const s=new kn(wo,Ao,e,n);s.layers=this.layers,this.add(s);const a=new kn(wo,Ao,e,n);a.layers=this.layers,this.add(a);const l=new kn(wo,Ao,e,n);l.layers=this.layers,this.add(l);const u=new kn(wo,Ao,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,o,s,a,l]=n;for(const u of n)this.remove(u);if(e===Fi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===wu)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,s,a,l,u,c]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,o),e.setRenderTarget(i,1,r),e.render(n,s),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,u),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),e.render(n,c),e.setRenderTarget(d,f,p),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class ey extends Cn{constructor(e,n,i,r,o,s,a,l,u,c){e=e!==void 0?e:[],n=n!==void 0?n:us,super(e,n,i,r,o,s,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class RT extends io{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];n.encoding!==void 0&&(Js("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===qr?Ht:Bn),this.texture=new ey(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:On}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Ia(5,5,5),o=new ro({name:"CubemapFromEquirect",uniforms:ds(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:_n,blending:gr});o.uniforms.tEquirect.value=n;const s=new ii(r,o),a=n.minFilter;return n.minFilter===_a&&(n.minFilter=On),new CT(1,10,this).update(e,s),n.minFilter=a,s.geometry.dispose(),s.material.dispose(),this}clear(e,n,i,r){const o=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(n,i,r);e.setRenderTarget(o)}}const Sf=new k,bT=new k,PT=new We;class Fr{constructor(e=new k(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Sf.subVectors(i,n).cross(bT.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Sf),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/r;return o<0||o>1?null:n.copy(e.start).addScaledVector(i,o)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||PT.getNormalMatrix(e),r=this.coplanarPoint(Sf).applyMatrix4(e),o=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ir=new lp,xl=new k;class ty{constructor(e=new Fr,n=new Fr,i=new Fr,r=new Fr,o=new Fr,s=new Fr){this.planes=[e,n,i,r,o,s]}set(e,n,i,r,o,s){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(o),a[5].copy(s),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Fi){const i=this.planes,r=e.elements,o=r[0],s=r[1],a=r[2],l=r[3],u=r[4],c=r[5],d=r[6],f=r[7],p=r[8],_=r[9],y=r[10],g=r[11],h=r[12],v=r[13],m=r[14],x=r[15];if(i[0].setComponents(l-o,f-u,g-p,x-h).normalize(),i[1].setComponents(l+o,f+u,g+p,x+h).normalize(),i[2].setComponents(l+s,f+c,g+_,x+v).normalize(),i[3].setComponents(l-s,f-c,g-_,x-v).normalize(),i[4].setComponents(l-a,f-d,g-y,x-m).normalize(),n===Fi)i[5].setComponents(l+a,f+d,g+y,x+m).normalize();else if(n===wu)i[5].setComponents(a,d,y,m).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ir.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Ir.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ir)}intersectsSprite(e){return Ir.center.set(0,0,0),Ir.radius=.7071067811865476,Ir.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ir)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let o=0;o<6;o++)if(n[o].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(xl.x=r.normal.x>0?e.max.x:e.min.x,xl.y=r.normal.y>0?e.max.y:e.min.y,xl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(xl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function ny(){let t=null,e=!1,n=null,i=null;function r(o,s){n(o,s),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(o){n=o},setContext:function(o){t=o}}}function LT(t,e){const n=e.isWebGL2,i=new WeakMap;function r(u,c){const d=u.array,f=u.usage,p=d.byteLength,_=t.createBuffer();t.bindBuffer(c,_),t.bufferData(c,d,f),u.onUploadCallback();let y;if(d instanceof Float32Array)y=t.FLOAT;else if(d instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(n)y=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else y=t.UNSIGNED_SHORT;else if(d instanceof Int16Array)y=t.SHORT;else if(d instanceof Uint32Array)y=t.UNSIGNED_INT;else if(d instanceof Int32Array)y=t.INT;else if(d instanceof Int8Array)y=t.BYTE;else if(d instanceof Uint8Array)y=t.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)y=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:_,type:y,bytesPerElement:d.BYTES_PER_ELEMENT,version:u.version,size:p}}function o(u,c,d){const f=c.array,p=c._updateRange,_=c.updateRanges;if(t.bindBuffer(d,u),p.count===-1&&_.length===0&&t.bufferSubData(d,0,f),_.length!==0){for(let y=0,g=_.length;y<g;y++){const h=_[y];n?t.bufferSubData(d,h.start*f.BYTES_PER_ELEMENT,f,h.start,h.count):t.bufferSubData(d,h.start*f.BYTES_PER_ELEMENT,f.subarray(h.start,h.start+h.count))}c.clearUpdateRanges()}p.count!==-1&&(n?t.bufferSubData(d,p.offset*f.BYTES_PER_ELEMENT,f,p.offset,p.count):t.bufferSubData(d,p.offset*f.BYTES_PER_ELEMENT,f.subarray(p.offset,p.offset+p.count)),p.count=-1),c.onUploadCallback()}function s(u){return u.isInterleavedBufferAttribute&&(u=u.data),i.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const c=i.get(u);c&&(t.deleteBuffer(c.buffer),i.delete(u))}function l(u,c){if(u.isGLBufferAttribute){const f=i.get(u);(!f||f.version<u.version)&&i.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const d=i.get(u);if(d===void 0)i.set(u,r(u,c));else if(d.version<u.version){if(d.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");o(d.buffer,u,c),d.version=u.version}}return{get:s,remove:a,update:l}}class cp extends Wi{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const o=e/2,s=n/2,a=Math.floor(i),l=Math.floor(r),u=a+1,c=l+1,d=e/a,f=n/l,p=[],_=[],y=[],g=[];for(let h=0;h<c;h++){const v=h*f-s;for(let m=0;m<u;m++){const x=m*d-o;_.push(x,-v,0),y.push(0,0,1),g.push(m/a),g.push(1-h/l)}}for(let h=0;h<l;h++)for(let v=0;v<a;v++){const m=v+u*h,x=v+u*(h+1),R=v+1+u*(h+1),T=v+1+u*h;p.push(m,x,T),p.push(x,R,T)}this.setIndex(p),this.setAttribute("position",new Si(_,3)),this.setAttribute("normal",new Si(y,3)),this.setAttribute("uv",new Si(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cp(e.width,e.height,e.widthSegments,e.heightSegments)}}var NT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,IT=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,DT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,UT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,FT=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,OT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,kT=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,BT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,HT=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,zT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,GT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,VT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,WT=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,XT=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,$T=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,jT=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,qT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,YT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ZT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,KT=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,QT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,JT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,ew=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,tw=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,nw=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,iw=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,rw=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ow=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,sw=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,aw=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,lw="gl_FragColor = linearToOutputTexel( gl_FragColor );",uw=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,cw=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,fw=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,dw=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,hw=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,pw=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,mw=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,gw=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,vw=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,_w=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,yw=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,xw=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Sw=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ew=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Mw=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Tw=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,ww=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Aw=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Cw=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Rw=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,bw=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Pw=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Lw=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Nw=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Iw=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Dw=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Uw=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Fw=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ow=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,kw=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Bw=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Hw=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,zw=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Gw=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Vw=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ww=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Xw=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,$w=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,jw=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,qw=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Yw=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Zw=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Kw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jw=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,eA=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,tA=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,nA=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,iA=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,rA=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,oA=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,sA=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,aA=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,lA=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,uA=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,cA=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,fA=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,dA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,hA=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,pA=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,mA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,gA=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,vA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,_A=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,yA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,xA=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,SA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,EA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,MA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,TA=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,wA=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,AA=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,CA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,RA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,bA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,PA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const LA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,NA=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,IA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,DA=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,UA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,FA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,OA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,kA=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,BA=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,HA=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,zA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,GA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,VA=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,WA=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,XA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,$A=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jA=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qA=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,YA=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,ZA=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,KA=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,QA=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,JA=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,eC=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tC=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,nC=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,iC=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,rC=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,oC=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,sC=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,aC=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,lC=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,uC=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,cC=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Fe={alphahash_fragment:NT,alphahash_pars_fragment:IT,alphamap_fragment:DT,alphamap_pars_fragment:UT,alphatest_fragment:FT,alphatest_pars_fragment:OT,aomap_fragment:kT,aomap_pars_fragment:BT,batching_pars_vertex:HT,batching_vertex:zT,begin_vertex:GT,beginnormal_vertex:VT,bsdfs:WT,iridescence_fragment:XT,bumpmap_pars_fragment:$T,clipping_planes_fragment:jT,clipping_planes_pars_fragment:qT,clipping_planes_pars_vertex:YT,clipping_planes_vertex:ZT,color_fragment:KT,color_pars_fragment:QT,color_pars_vertex:JT,color_vertex:ew,common:tw,cube_uv_reflection_fragment:nw,defaultnormal_vertex:iw,displacementmap_pars_vertex:rw,displacementmap_vertex:ow,emissivemap_fragment:sw,emissivemap_pars_fragment:aw,colorspace_fragment:lw,colorspace_pars_fragment:uw,envmap_fragment:cw,envmap_common_pars_fragment:fw,envmap_pars_fragment:dw,envmap_pars_vertex:hw,envmap_physical_pars_fragment:ww,envmap_vertex:pw,fog_vertex:mw,fog_pars_vertex:gw,fog_fragment:vw,fog_pars_fragment:_w,gradientmap_pars_fragment:yw,lightmap_fragment:xw,lightmap_pars_fragment:Sw,lights_lambert_fragment:Ew,lights_lambert_pars_fragment:Mw,lights_pars_begin:Tw,lights_toon_fragment:Aw,lights_toon_pars_fragment:Cw,lights_phong_fragment:Rw,lights_phong_pars_fragment:bw,lights_physical_fragment:Pw,lights_physical_pars_fragment:Lw,lights_fragment_begin:Nw,lights_fragment_maps:Iw,lights_fragment_end:Dw,logdepthbuf_fragment:Uw,logdepthbuf_pars_fragment:Fw,logdepthbuf_pars_vertex:Ow,logdepthbuf_vertex:kw,map_fragment:Bw,map_pars_fragment:Hw,map_particle_fragment:zw,map_particle_pars_fragment:Gw,metalnessmap_fragment:Vw,metalnessmap_pars_fragment:Ww,morphcolor_vertex:Xw,morphnormal_vertex:$w,morphtarget_pars_vertex:jw,morphtarget_vertex:qw,normal_fragment_begin:Yw,normal_fragment_maps:Zw,normal_pars_fragment:Kw,normal_pars_vertex:Qw,normal_vertex:Jw,normalmap_pars_fragment:eA,clearcoat_normal_fragment_begin:tA,clearcoat_normal_fragment_maps:nA,clearcoat_pars_fragment:iA,iridescence_pars_fragment:rA,opaque_fragment:oA,packing:sA,premultiplied_alpha_fragment:aA,project_vertex:lA,dithering_fragment:uA,dithering_pars_fragment:cA,roughnessmap_fragment:fA,roughnessmap_pars_fragment:dA,shadowmap_pars_fragment:hA,shadowmap_pars_vertex:pA,shadowmap_vertex:mA,shadowmask_pars_fragment:gA,skinbase_vertex:vA,skinning_pars_vertex:_A,skinning_vertex:yA,skinnormal_vertex:xA,specularmap_fragment:SA,specularmap_pars_fragment:EA,tonemapping_fragment:MA,tonemapping_pars_fragment:TA,transmission_fragment:wA,transmission_pars_fragment:AA,uv_pars_fragment:CA,uv_pars_vertex:RA,uv_vertex:bA,worldpos_vertex:PA,background_vert:LA,background_frag:NA,backgroundCube_vert:IA,backgroundCube_frag:DA,cube_vert:UA,cube_frag:FA,depth_vert:OA,depth_frag:kA,distanceRGBA_vert:BA,distanceRGBA_frag:HA,equirect_vert:zA,equirect_frag:GA,linedashed_vert:VA,linedashed_frag:WA,meshbasic_vert:XA,meshbasic_frag:$A,meshlambert_vert:jA,meshlambert_frag:qA,meshmatcap_vert:YA,meshmatcap_frag:ZA,meshnormal_vert:KA,meshnormal_frag:QA,meshphong_vert:JA,meshphong_frag:eC,meshphysical_vert:tC,meshphysical_frag:nC,meshtoon_vert:iC,meshtoon_frag:rC,points_vert:oC,points_frag:sC,shadow_vert:aC,shadow_frag:lC,sprite_vert:uC,sprite_frag:cC},oe={common:{diffuse:{value:new rt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new Ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new rt(16777215)},opacity:{value:1},center:{value:new Ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},mi={basic:{uniforms:on([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.fog]),vertexShader:Fe.meshbasic_vert,fragmentShader:Fe.meshbasic_frag},lambert:{uniforms:on([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new rt(0)}}]),vertexShader:Fe.meshlambert_vert,fragmentShader:Fe.meshlambert_frag},phong:{uniforms:on([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new rt(0)},specular:{value:new rt(1118481)},shininess:{value:30}}]),vertexShader:Fe.meshphong_vert,fragmentShader:Fe.meshphong_frag},standard:{uniforms:on([oe.common,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.roughnessmap,oe.metalnessmap,oe.fog,oe.lights,{emissive:{value:new rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag},toon:{uniforms:on([oe.common,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.gradientmap,oe.fog,oe.lights,{emissive:{value:new rt(0)}}]),vertexShader:Fe.meshtoon_vert,fragmentShader:Fe.meshtoon_frag},matcap:{uniforms:on([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,{matcap:{value:null}}]),vertexShader:Fe.meshmatcap_vert,fragmentShader:Fe.meshmatcap_frag},points:{uniforms:on([oe.points,oe.fog]),vertexShader:Fe.points_vert,fragmentShader:Fe.points_frag},dashed:{uniforms:on([oe.common,oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Fe.linedashed_vert,fragmentShader:Fe.linedashed_frag},depth:{uniforms:on([oe.common,oe.displacementmap]),vertexShader:Fe.depth_vert,fragmentShader:Fe.depth_frag},normal:{uniforms:on([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,{opacity:{value:1}}]),vertexShader:Fe.meshnormal_vert,fragmentShader:Fe.meshnormal_frag},sprite:{uniforms:on([oe.sprite,oe.fog]),vertexShader:Fe.sprite_vert,fragmentShader:Fe.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Fe.background_vert,fragmentShader:Fe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Fe.backgroundCube_vert,fragmentShader:Fe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Fe.cube_vert,fragmentShader:Fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Fe.equirect_vert,fragmentShader:Fe.equirect_frag},distanceRGBA:{uniforms:on([oe.common,oe.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Fe.distanceRGBA_vert,fragmentShader:Fe.distanceRGBA_frag},shadow:{uniforms:on([oe.lights,oe.fog,{color:{value:new rt(0)},opacity:{value:1}}]),vertexShader:Fe.shadow_vert,fragmentShader:Fe.shadow_frag}};mi.physical={uniforms:on([mi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new Ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new rt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new Ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new rt(0)},specularColor:{value:new rt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new Ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag};const Sl={r:0,b:0,g:0};function fC(t,e,n,i,r,o,s){const a=new rt(0);let l=o===!0?0:1,u,c,d=null,f=0,p=null;function _(g,h){let v=!1,m=h.isScene===!0?h.background:null;m&&m.isTexture&&(m=(h.backgroundBlurriness>0?n:e).get(m)),m===null?y(a,l):m&&m.isColor&&(y(m,1),v=!0);const x=t.xr.getEnvironmentBlendMode();x==="additive"?i.buffers.color.setClear(0,0,0,1,s):x==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,s),(t.autoClear||v)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),m&&(m.isCubeTexture||m.mapping===sc)?(c===void 0&&(c=new ii(new Ia(1,1,1),new ro({name:"BackgroundCubeMaterial",uniforms:ds(mi.backgroundCube.uniforms),vertexShader:mi.backgroundCube.vertexShader,fragmentShader:mi.backgroundCube.fragmentShader,side:_n,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(R,T,M){this.matrixWorld.copyPosition(M.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),c.material.uniforms.envMap.value=m,c.material.uniforms.flipEnvMap.value=m.isCubeTexture&&m.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=h.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,c.material.toneMapped=it.getTransfer(m.colorSpace)!==ft,(d!==m||f!==m.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,d=m,f=m.version,p=t.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null)):m&&m.isTexture&&(u===void 0&&(u=new ii(new cp(2,2),new ro({name:"BackgroundMaterial",uniforms:ds(mi.background.uniforms),vertexShader:mi.background.vertexShader,fragmentShader:mi.background.fragmentShader,side:Er,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=m,u.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,u.material.toneMapped=it.getTransfer(m.colorSpace)!==ft,m.matrixAutoUpdate===!0&&m.updateMatrix(),u.material.uniforms.uvTransform.value.copy(m.matrix),(d!==m||f!==m.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,d=m,f=m.version,p=t.toneMapping),u.layers.enableAll(),g.unshift(u,u.geometry,u.material,0,0,null))}function y(g,h){g.getRGB(Sl,Q1(t)),i.buffers.color.setClear(Sl.r,Sl.g,Sl.b,h,s)}return{getClearColor:function(){return a},setClearColor:function(g,h=1){a.set(g),l=h,y(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(g){l=g,y(a,l)},render:_}}function dC(t,e,n,i){const r=t.getParameter(t.MAX_VERTEX_ATTRIBS),o=i.isWebGL2?null:e.get("OES_vertex_array_object"),s=i.isWebGL2||o!==null,a={},l=g(null);let u=l,c=!1;function d(P,O,X,Y,N){let I=!1;if(s){const G=y(Y,X,O);u!==G&&(u=G,p(u.object)),I=h(P,Y,X,N),I&&v(P,Y,X,N)}else{const G=O.wireframe===!0;(u.geometry!==Y.id||u.program!==X.id||u.wireframe!==G)&&(u.geometry=Y.id,u.program=X.id,u.wireframe=G,I=!0)}N!==null&&n.update(N,t.ELEMENT_ARRAY_BUFFER),(I||c)&&(c=!1,L(P,O,X,Y),N!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(N).buffer))}function f(){return i.isWebGL2?t.createVertexArray():o.createVertexArrayOES()}function p(P){return i.isWebGL2?t.bindVertexArray(P):o.bindVertexArrayOES(P)}function _(P){return i.isWebGL2?t.deleteVertexArray(P):o.deleteVertexArrayOES(P)}function y(P,O,X){const Y=X.wireframe===!0;let N=a[P.id];N===void 0&&(N={},a[P.id]=N);let I=N[O.id];I===void 0&&(I={},N[O.id]=I);let G=I[Y];return G===void 0&&(G=g(f()),I[Y]=G),G}function g(P){const O=[],X=[],Y=[];for(let N=0;N<r;N++)O[N]=0,X[N]=0,Y[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:X,attributeDivisors:Y,object:P,attributes:{},index:null}}function h(P,O,X,Y){const N=u.attributes,I=O.attributes;let G=0;const j=X.getAttributes();for(const Z in j)if(j[Z].location>=0){const q=N[Z];let se=I[Z];if(se===void 0&&(Z==="instanceMatrix"&&P.instanceMatrix&&(se=P.instanceMatrix),Z==="instanceColor"&&P.instanceColor&&(se=P.instanceColor)),q===void 0||q.attribute!==se||se&&q.data!==se.data)return!0;G++}return u.attributesNum!==G||u.index!==Y}function v(P,O,X,Y){const N={},I=O.attributes;let G=0;const j=X.getAttributes();for(const Z in j)if(j[Z].location>=0){let q=I[Z];q===void 0&&(Z==="instanceMatrix"&&P.instanceMatrix&&(q=P.instanceMatrix),Z==="instanceColor"&&P.instanceColor&&(q=P.instanceColor));const se={};se.attribute=q,q&&q.data&&(se.data=q.data),N[Z]=se,G++}u.attributes=N,u.attributesNum=G,u.index=Y}function m(){const P=u.newAttributes;for(let O=0,X=P.length;O<X;O++)P[O]=0}function x(P){R(P,0)}function R(P,O){const X=u.newAttributes,Y=u.enabledAttributes,N=u.attributeDivisors;X[P]=1,Y[P]===0&&(t.enableVertexAttribArray(P),Y[P]=1),N[P]!==O&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,O),N[P]=O)}function T(){const P=u.newAttributes,O=u.enabledAttributes;for(let X=0,Y=O.length;X<Y;X++)O[X]!==P[X]&&(t.disableVertexAttribArray(X),O[X]=0)}function M(P,O,X,Y,N,I,G){G===!0?t.vertexAttribIPointer(P,O,X,N,I):t.vertexAttribPointer(P,O,X,Y,N,I)}function L(P,O,X,Y){if(i.isWebGL2===!1&&(P.isInstancedMesh||Y.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;m();const N=Y.attributes,I=X.getAttributes(),G=O.defaultAttributeValues;for(const j in I){const Z=I[j];if(Z.location>=0){let W=N[j];if(W===void 0&&(j==="instanceMatrix"&&P.instanceMatrix&&(W=P.instanceMatrix),j==="instanceColor"&&P.instanceColor&&(W=P.instanceColor)),W!==void 0){const q=W.normalized,se=W.itemSize,ce=n.get(W);if(ce===void 0)continue;const he=ce.buffer,Ae=ce.type,Te=ce.bytesPerElement,Se=i.isWebGL2===!0&&(Ae===t.INT||Ae===t.UNSIGNED_INT||W.gpuType===U1);if(W.isInterleavedBufferAttribute){const ze=W.data,U=ze.stride,en=W.offset;if(ze.isInstancedInterleavedBuffer){for(let Ee=0;Ee<Z.locationSize;Ee++)R(Z.location+Ee,ze.meshPerAttribute);P.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=ze.meshPerAttribute*ze.count)}else for(let Ee=0;Ee<Z.locationSize;Ee++)x(Z.location+Ee);t.bindBuffer(t.ARRAY_BUFFER,he);for(let Ee=0;Ee<Z.locationSize;Ee++)M(Z.location+Ee,se/Z.locationSize,Ae,q,U*Te,(en+se/Z.locationSize*Ee)*Te,Se)}else{if(W.isInstancedBufferAttribute){for(let ze=0;ze<Z.locationSize;ze++)R(Z.location+ze,W.meshPerAttribute);P.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let ze=0;ze<Z.locationSize;ze++)x(Z.location+ze);t.bindBuffer(t.ARRAY_BUFFER,he);for(let ze=0;ze<Z.locationSize;ze++)M(Z.location+ze,se/Z.locationSize,Ae,q,se*Te,se/Z.locationSize*ze*Te,Se)}}else if(G!==void 0){const q=G[j];if(q!==void 0)switch(q.length){case 2:t.vertexAttrib2fv(Z.location,q);break;case 3:t.vertexAttrib3fv(Z.location,q);break;case 4:t.vertexAttrib4fv(Z.location,q);break;default:t.vertexAttrib1fv(Z.location,q)}}}}T()}function E(){$();for(const P in a){const O=a[P];for(const X in O){const Y=O[X];for(const N in Y)_(Y[N].object),delete Y[N];delete O[X]}delete a[P]}}function A(P){if(a[P.id]===void 0)return;const O=a[P.id];for(const X in O){const Y=O[X];for(const N in Y)_(Y[N].object),delete Y[N];delete O[X]}delete a[P.id]}function F(P){for(const O in a){const X=a[O];if(X[P.id]===void 0)continue;const Y=X[P.id];for(const N in Y)_(Y[N].object),delete Y[N];delete X[P.id]}}function $(){te(),c=!0,u!==l&&(u=l,p(u.object))}function te(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:$,resetDefaultState:te,dispose:E,releaseStatesOfGeometry:A,releaseStatesOfProgram:F,initAttributes:m,enableAttribute:x,disableUnusedAttributes:T}}function hC(t,e,n,i){const r=i.isWebGL2;let o;function s(c){o=c}function a(c,d){t.drawArrays(o,c,d),n.update(d,o,1)}function l(c,d,f){if(f===0)return;let p,_;if(r)p=t,_="drawArraysInstanced";else if(p=e.get("ANGLE_instanced_arrays"),_="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[_](o,c,d,f),n.update(d,o,f)}function u(c,d,f){if(f===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<f;_++)this.render(c[_],d[_]);else{p.multiDrawArraysWEBGL(o,c,0,d,0,f);let _=0;for(let y=0;y<f;y++)_+=d[y];n.update(_,o,1)}}this.setMode=s,this.render=a,this.renderInstances=l,this.renderMultiDraw=u}function pC(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const M=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(M.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(M){if(M==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";M="mediump"}return M==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const s=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let a=n.precision!==void 0?n.precision:"highp";const l=o(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const u=s||e.has("WEBGL_draw_buffers"),c=n.logarithmicDepthBuffer===!0,d=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),f=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=t.getParameter(t.MAX_TEXTURE_SIZE),_=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),y=t.getParameter(t.MAX_VERTEX_ATTRIBS),g=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),h=t.getParameter(t.MAX_VARYING_VECTORS),v=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),m=f>0,x=s||e.has("OES_texture_float"),R=m&&x,T=s?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:s,drawBuffers:u,getMaxAnisotropy:r,getMaxPrecision:o,precision:a,logarithmicDepthBuffer:c,maxTextures:d,maxVertexTextures:f,maxTextureSize:p,maxCubemapSize:_,maxAttributes:y,maxVertexUniforms:g,maxVaryings:h,maxFragmentUniforms:v,vertexTextures:m,floatFragmentTextures:x,floatVertexTextures:R,maxSamples:T}}function mC(t){const e=this;let n=null,i=0,r=!1,o=!1;const s=new Fr,a=new We,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const p=d.length!==0||f||i!==0||r;return r=f,i=d.length,p},this.beginShadows=function(){o=!0,c(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(d,f){n=c(d,f,0)},this.setState=function(d,f,p){const _=d.clippingPlanes,y=d.clipIntersection,g=d.clipShadows,h=t.get(d);if(!r||_===null||_.length===0||o&&!g)o?c(null):u();else{const v=o?0:i,m=v*4;let x=h.clippingState||null;l.value=x,x=c(_,f,m,p);for(let R=0;R!==m;++R)x[R]=n[R];h.clippingState=x,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=v}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(d,f,p,_){const y=d!==null?d.length:0;let g=null;if(y!==0){if(g=l.value,_!==!0||g===null){const h=p+y*4,v=f.matrixWorldInverse;a.getNormalMatrix(v),(g===null||g.length<h)&&(g=new Float32Array(h));for(let m=0,x=p;m!==y;++m,x+=4)s.copy(d[m]).applyMatrix4(v,a),s.normal.toArray(g,x),g[x+3]=s.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,g}}function gC(t){let e=new WeakMap;function n(s,a){return a===Hd?s.mapping=us:a===zd&&(s.mapping=cs),s}function i(s){if(s&&s.isTexture){const a=s.mapping;if(a===Hd||a===zd)if(e.has(s)){const l=e.get(s).texture;return n(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const u=new RT(l.height/2);return u.fromEquirectangularTexture(t,s),e.set(s,u),s.addEventListener("dispose",r),n(u.texture,s.mapping)}else return null}}return s}function r(s){const a=s.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function o(){e=new WeakMap}return{get:i,dispose:o}}class vC extends J1{constructor(e=-1,n=1,i=1,r=-1,o=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=o,this.far=s,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,o,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let o=i-e,s=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=u*this.view.offsetX,s=o+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(o,s,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Go=4,Zg=[.125,.215,.35,.446,.526,.582],Br=20,Ef=new vC,Kg=new rt;let Mf=null,Tf=0,wf=0;const Or=(1+Math.sqrt(5))/2,Co=1/Or,Qg=[new k(1,1,1),new k(-1,1,1),new k(1,1,-1),new k(-1,1,-1),new k(0,Or,Co),new k(0,Or,-Co),new k(Co,0,Or),new k(-Co,0,Or),new k(Or,Co,0),new k(-Or,Co,0)];class Jg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Mf=this._renderer.getRenderTarget(),Tf=this._renderer.getActiveCubeFace(),wf=this._renderer.getActiveMipmapLevel(),this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,i,r,o),n>0&&this._blur(o,0,0,n),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=n0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=t0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Mf,Tf,wf),e.scissorTest=!1,El(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===us||e.mapping===cs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Mf=this._renderer.getRenderTarget(),Tf=this._renderer.getActiveCubeFace(),wf=this._renderer.getActiveMipmapLevel();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:On,minFilter:On,generateMipmaps:!1,type:ya,format:ni,colorSpace:Gi,depthBuffer:!1},r=e0(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=e0(e,n,i);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=_C(o)),this._blurMaterial=yC(o,e,n)}return r}_compileMaterial(e){const n=new ii(this._lodPlanes[0],e);this._renderer.compile(n,Ef)}_sceneToCubeUV(e,n,i,r){const a=new kn(90,1,n,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,d=c.autoClear,f=c.toneMapping;c.getClearColor(Kg),c.toneMapping=vr,c.autoClear=!1;const p=new Na({name:"PMREM.Background",side:_n,depthWrite:!1,depthTest:!1}),_=new ii(new Ia,p);let y=!1;const g=e.background;g?g.isColor&&(p.color.copy(g),e.background=null,y=!0):(p.color.copy(Kg),y=!0);for(let h=0;h<6;h++){const v=h%3;v===0?(a.up.set(0,l[h],0),a.lookAt(u[h],0,0)):v===1?(a.up.set(0,0,l[h]),a.lookAt(0,u[h],0)):(a.up.set(0,l[h],0),a.lookAt(0,0,u[h]));const m=this._cubeSize;El(r,v*m,h>2?m:0,m,m),c.setRenderTarget(r),y&&c.render(_,a),c.render(e,a)}_.geometry.dispose(),_.material.dispose(),c.toneMapping=f,c.autoClear=d,e.background=g}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===us||e.mapping===cs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=n0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=t0());const o=r?this._cubemapMaterial:this._equirectMaterial,s=new ii(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=e;const l=this._cubeSize;El(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(s,Ef)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),s=Qg[(r-1)%Qg.length];this._blur(e,r-1,r,o,s)}n.autoClear=i}_blur(e,n,i,r,o){const s=this._pingPongRenderTarget;this._halfBlur(e,s,n,i,r,"latitudinal",o),this._halfBlur(s,e,i,i,r,"longitudinal",o)}_halfBlur(e,n,i,r,o,s,a){const l=this._renderer,u=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,d=new ii(this._lodPlanes[r],u),f=u.uniforms,p=this._sizeLods[i]-1,_=isFinite(o)?Math.PI/(2*p):2*Math.PI/(2*Br-1),y=o/_,g=isFinite(o)?1+Math.floor(c*y):Br;g>Br&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Br}`);const h=[];let v=0;for(let M=0;M<Br;++M){const L=M/y,E=Math.exp(-L*L/2);h.push(E),M===0?v+=E:M<g&&(v+=2*E)}for(let M=0;M<h.length;M++)h[M]=h[M]/v;f.envMap.value=e.texture,f.samples.value=g,f.weights.value=h,f.latitudinal.value=s==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:m}=this;f.dTheta.value=_,f.mipInt.value=m-i;const x=this._sizeLods[r],R=3*x*(r>m-Go?r-m+Go:0),T=4*(this._cubeSize-x);El(n,R,T,3*x,2*x),l.setRenderTarget(n),l.render(d,Ef)}}function _C(t){const e=[],n=[],i=[];let r=t;const o=t-Go+1+Zg.length;for(let s=0;s<o;s++){const a=Math.pow(2,r);n.push(a);let l=1/a;s>t-Go?l=Zg[s-t+Go-1]:s===0&&(l=0),i.push(l);const u=1/(a-2),c=-u,d=1+u,f=[c,c,d,c,d,d,c,c,d,d,c,d],p=6,_=6,y=3,g=2,h=1,v=new Float32Array(y*_*p),m=new Float32Array(g*_*p),x=new Float32Array(h*_*p);for(let T=0;T<p;T++){const M=T%3*2/3-1,L=T>2?0:-1,E=[M,L,0,M+2/3,L,0,M+2/3,L+1,0,M,L,0,M+2/3,L+1,0,M,L+1,0];v.set(E,y*_*T),m.set(f,g*_*T);const A=[T,T,T,T,T,T];x.set(A,h*_*T)}const R=new Wi;R.setAttribute("position",new si(v,y)),R.setAttribute("uv",new si(m,g)),R.setAttribute("faceIndex",new si(x,h)),e.push(R),r>Go&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function e0(t,e,n){const i=new io(t,e,n);return i.texture.mapping=sc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function El(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function yC(t,e,n){const i=new Float32Array(Br),r=new k(0,1,0);return new ro({name:"SphericalGaussianBlur",defines:{n:Br,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:fp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:gr,depthTest:!1,depthWrite:!1})}function t0(){return new ro({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:fp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:gr,depthTest:!1,depthWrite:!1})}function n0(){return new ro({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:fp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:gr,depthTest:!1,depthWrite:!1})}function fp(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function xC(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===Hd||l===zd,c=l===us||l===cs;if(u||c)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=e.get(a);return n===null&&(n=new Jg(t)),d=u?n.fromEquirectangular(a,d):n.fromCubemap(a,d),e.set(a,d),d.texture}else{if(e.has(a))return e.get(a).texture;{const d=a.image;if(u&&d&&d.height>0||c&&d&&r(d)){n===null&&(n=new Jg(t));const f=u?n.fromEquirectangular(a):n.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",o),f.texture}else return null}}}return a}function r(a){let l=0;const u=6;for(let c=0;c<u;c++)a[c]!==void 0&&l++;return l===u}function o(a){const l=a.target;l.removeEventListener("dispose",o);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function s(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:s}}function SC(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?(n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance")):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function EC(t,e,n,i){const r={},o=new WeakMap;function s(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);for(const _ in f.morphAttributes){const y=f.morphAttributes[_];for(let g=0,h=y.length;g<h;g++)e.remove(y[g])}f.removeEventListener("dispose",s),delete r[f.id];const p=o.get(f);p&&(e.remove(p),o.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function a(d,f){return r[f.id]===!0||(f.addEventListener("dispose",s),r[f.id]=!0,n.memory.geometries++),f}function l(d){const f=d.attributes;for(const _ in f)e.update(f[_],t.ARRAY_BUFFER);const p=d.morphAttributes;for(const _ in p){const y=p[_];for(let g=0,h=y.length;g<h;g++)e.update(y[g],t.ARRAY_BUFFER)}}function u(d){const f=[],p=d.index,_=d.attributes.position;let y=0;if(p!==null){const v=p.array;y=p.version;for(let m=0,x=v.length;m<x;m+=3){const R=v[m+0],T=v[m+1],M=v[m+2];f.push(R,T,T,M,M,R)}}else if(_!==void 0){const v=_.array;y=_.version;for(let m=0,x=v.length/3-1;m<x;m+=3){const R=m+0,T=m+1,M=m+2;f.push(R,T,T,M,M,R)}}else return;const g=new(W1(f)?K1:Z1)(f,1);g.version=y;const h=o.get(d);h&&e.remove(h),o.set(d,g)}function c(d){const f=o.get(d);if(f){const p=d.index;p!==null&&f.version<p.version&&u(d)}else u(d);return o.get(d)}return{get:a,update:l,getWireframeAttribute:c}}function MC(t,e,n,i){const r=i.isWebGL2;let o;function s(p){o=p}let a,l;function u(p){a=p.type,l=p.bytesPerElement}function c(p,_){t.drawElements(o,_,a,p*l),n.update(_,o,1)}function d(p,_,y){if(y===0)return;let g,h;if(r)g=t,h="drawElementsInstanced";else if(g=e.get("ANGLE_instanced_arrays"),h="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[h](o,_,a,p*l,y),n.update(_,o,y)}function f(p,_,y){if(y===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let h=0;h<y;h++)this.render(p[h]/l,_[h]);else{g.multiDrawElementsWEBGL(o,_,0,a,p,0,y);let h=0;for(let v=0;v<y;v++)h+=_[v];n.update(h,o,1)}}this.setMode=s,this.setIndex=u,this.render=c,this.renderInstances=d,this.renderMultiDraw=f}function TC(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,s,a){switch(n.calls++,s){case t.TRIANGLES:n.triangles+=a*(o/3);break;case t.LINES:n.lines+=a*(o/2);break;case t.LINE_STRIP:n.lines+=a*(o-1);break;case t.LINE_LOOP:n.lines+=a*o;break;case t.POINTS:n.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function wC(t,e){return t[0]-e[0]}function AC(t,e){return Math.abs(e[1])-Math.abs(t[1])}function CC(t,e,n){const i={},r=new Float32Array(8),o=new WeakMap,s=new zt,a=[];for(let u=0;u<8;u++)a[u]=[u,0];function l(u,c,d){const f=u.morphTargetInfluences;if(e.isWebGL2===!0){const p=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,_=p!==void 0?p.length:0;let y=o.get(c);if(y===void 0||y.count!==_){let P=function(){$.dispose(),o.delete(c),c.removeEventListener("dispose",P)};y!==void 0&&y.texture.dispose();const v=c.morphAttributes.position!==void 0,m=c.morphAttributes.normal!==void 0,x=c.morphAttributes.color!==void 0,R=c.morphAttributes.position||[],T=c.morphAttributes.normal||[],M=c.morphAttributes.color||[];let L=0;v===!0&&(L=1),m===!0&&(L=2),x===!0&&(L=3);let E=c.attributes.position.count*L,A=1;E>e.maxTextureSize&&(A=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const F=new Float32Array(E*A*4*_),$=new j1(F,E,A,_);$.type=ar,$.needsUpdate=!0;const te=L*4;for(let O=0;O<_;O++){const X=R[O],Y=T[O],N=M[O],I=E*A*4*O;for(let G=0;G<X.count;G++){const j=G*te;v===!0&&(s.fromBufferAttribute(X,G),F[I+j+0]=s.x,F[I+j+1]=s.y,F[I+j+2]=s.z,F[I+j+3]=0),m===!0&&(s.fromBufferAttribute(Y,G),F[I+j+4]=s.x,F[I+j+5]=s.y,F[I+j+6]=s.z,F[I+j+7]=0),x===!0&&(s.fromBufferAttribute(N,G),F[I+j+8]=s.x,F[I+j+9]=s.y,F[I+j+10]=s.z,F[I+j+11]=N.itemSize===4?s.w:1)}}y={count:_,texture:$,size:new Ke(E,A)},o.set(c,y),c.addEventListener("dispose",P)}let g=0;for(let v=0;v<f.length;v++)g+=f[v];const h=c.morphTargetsRelative?1:1-g;d.getUniforms().setValue(t,"morphTargetBaseInfluence",h),d.getUniforms().setValue(t,"morphTargetInfluences",f),d.getUniforms().setValue(t,"morphTargetsTexture",y.texture,n),d.getUniforms().setValue(t,"morphTargetsTextureSize",y.size)}else{const p=f===void 0?0:f.length;let _=i[c.id];if(_===void 0||_.length!==p){_=[];for(let m=0;m<p;m++)_[m]=[m,0];i[c.id]=_}for(let m=0;m<p;m++){const x=_[m];x[0]=m,x[1]=f[m]}_.sort(AC);for(let m=0;m<8;m++)m<p&&_[m][1]?(a[m][0]=_[m][0],a[m][1]=_[m][1]):(a[m][0]=Number.MAX_SAFE_INTEGER,a[m][1]=0);a.sort(wC);const y=c.morphAttributes.position,g=c.morphAttributes.normal;let h=0;for(let m=0;m<8;m++){const x=a[m],R=x[0],T=x[1];R!==Number.MAX_SAFE_INTEGER&&T?(y&&c.getAttribute("morphTarget"+m)!==y[R]&&c.setAttribute("morphTarget"+m,y[R]),g&&c.getAttribute("morphNormal"+m)!==g[R]&&c.setAttribute("morphNormal"+m,g[R]),r[m]=T,h+=T):(y&&c.hasAttribute("morphTarget"+m)===!0&&c.deleteAttribute("morphTarget"+m),g&&c.hasAttribute("morphNormal"+m)===!0&&c.deleteAttribute("morphNormal"+m),r[m]=0)}const v=c.morphTargetsRelative?1:1-h;d.getUniforms().setValue(t,"morphTargetBaseInfluence",v),d.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function RC(t,e,n,i){let r=new WeakMap;function o(l){const u=i.render.frame,c=l.geometry,d=e.get(l,c);if(r.get(d)!==u&&(e.update(d),r.set(d,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==u&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==u&&(f.update(),r.set(f,u))}return d}function s(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:o,dispose:s}}class iy extends Cn{constructor(e,n,i,r,o,s,a,l,u,c){if(c=c!==void 0?c:jr,c!==jr&&c!==fs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===jr&&(i=sr),i===void 0&&c===fs&&(i=$r),super(null,r,o,s,a,l,c,i,u),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:ln,this.minFilter=l!==void 0?l:ln,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const ry=new Cn,oy=new iy(1,1);oy.compareFunction=V1;const sy=new j1,ay=new fT,ly=new ey,i0=[],r0=[],o0=new Float32Array(16),s0=new Float32Array(9),a0=new Float32Array(4);function Es(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let o=i0[r];if(o===void 0&&(o=new Float32Array(r),i0[r]=o),e!==0){i.toArray(o,0);for(let s=1,a=0;s!==e;++s)a+=n,t[s].toArray(o,a)}return o}function Pt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Lt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function cc(t,e){let n=r0[e];n===void 0&&(n=new Int32Array(e),r0[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function bC(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function PC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Pt(n,e))return;t.uniform2fv(this.addr,e),Lt(n,e)}}function LC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Pt(n,e))return;t.uniform3fv(this.addr,e),Lt(n,e)}}function NC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Pt(n,e))return;t.uniform4fv(this.addr,e),Lt(n,e)}}function IC(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Pt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Lt(n,e)}else{if(Pt(n,i))return;a0.set(i),t.uniformMatrix2fv(this.addr,!1,a0),Lt(n,i)}}function DC(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Pt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Lt(n,e)}else{if(Pt(n,i))return;s0.set(i),t.uniformMatrix3fv(this.addr,!1,s0),Lt(n,i)}}function UC(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Pt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Lt(n,e)}else{if(Pt(n,i))return;o0.set(i),t.uniformMatrix4fv(this.addr,!1,o0),Lt(n,i)}}function FC(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function OC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Pt(n,e))return;t.uniform2iv(this.addr,e),Lt(n,e)}}function kC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Pt(n,e))return;t.uniform3iv(this.addr,e),Lt(n,e)}}function BC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Pt(n,e))return;t.uniform4iv(this.addr,e),Lt(n,e)}}function HC(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function zC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Pt(n,e))return;t.uniform2uiv(this.addr,e),Lt(n,e)}}function GC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Pt(n,e))return;t.uniform3uiv(this.addr,e),Lt(n,e)}}function VC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Pt(n,e))return;t.uniform4uiv(this.addr,e),Lt(n,e)}}function WC(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);const o=this.type===t.SAMPLER_2D_SHADOW?oy:ry;n.setTexture2D(e||o,r)}function XC(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||ay,r)}function $C(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||ly,r)}function jC(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||sy,r)}function qC(t){switch(t){case 5126:return bC;case 35664:return PC;case 35665:return LC;case 35666:return NC;case 35674:return IC;case 35675:return DC;case 35676:return UC;case 5124:case 35670:return FC;case 35667:case 35671:return OC;case 35668:case 35672:return kC;case 35669:case 35673:return BC;case 5125:return HC;case 36294:return zC;case 36295:return GC;case 36296:return VC;case 35678:case 36198:case 36298:case 36306:case 35682:return WC;case 35679:case 36299:case 36307:return XC;case 35680:case 36300:case 36308:case 36293:return $C;case 36289:case 36303:case 36311:case 36292:return jC}}function YC(t,e){t.uniform1fv(this.addr,e)}function ZC(t,e){const n=Es(e,this.size,2);t.uniform2fv(this.addr,n)}function KC(t,e){const n=Es(e,this.size,3);t.uniform3fv(this.addr,n)}function QC(t,e){const n=Es(e,this.size,4);t.uniform4fv(this.addr,n)}function JC(t,e){const n=Es(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function eR(t,e){const n=Es(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function tR(t,e){const n=Es(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function nR(t,e){t.uniform1iv(this.addr,e)}function iR(t,e){t.uniform2iv(this.addr,e)}function rR(t,e){t.uniform3iv(this.addr,e)}function oR(t,e){t.uniform4iv(this.addr,e)}function sR(t,e){t.uniform1uiv(this.addr,e)}function aR(t,e){t.uniform2uiv(this.addr,e)}function lR(t,e){t.uniform3uiv(this.addr,e)}function uR(t,e){t.uniform4uiv(this.addr,e)}function cR(t,e,n){const i=this.cache,r=e.length,o=cc(n,r);Pt(i,o)||(t.uniform1iv(this.addr,o),Lt(i,o));for(let s=0;s!==r;++s)n.setTexture2D(e[s]||ry,o[s])}function fR(t,e,n){const i=this.cache,r=e.length,o=cc(n,r);Pt(i,o)||(t.uniform1iv(this.addr,o),Lt(i,o));for(let s=0;s!==r;++s)n.setTexture3D(e[s]||ay,o[s])}function dR(t,e,n){const i=this.cache,r=e.length,o=cc(n,r);Pt(i,o)||(t.uniform1iv(this.addr,o),Lt(i,o));for(let s=0;s!==r;++s)n.setTextureCube(e[s]||ly,o[s])}function hR(t,e,n){const i=this.cache,r=e.length,o=cc(n,r);Pt(i,o)||(t.uniform1iv(this.addr,o),Lt(i,o));for(let s=0;s!==r;++s)n.setTexture2DArray(e[s]||sy,o[s])}function pR(t){switch(t){case 5126:return YC;case 35664:return ZC;case 35665:return KC;case 35666:return QC;case 35674:return JC;case 35675:return eR;case 35676:return tR;case 5124:case 35670:return nR;case 35667:case 35671:return iR;case 35668:case 35672:return rR;case 35669:case 35673:return oR;case 5125:return sR;case 36294:return aR;case 36295:return lR;case 36296:return uR;case 35678:case 36198:case 36298:case 36306:case 35682:return cR;case 35679:case 36299:case 36307:return fR;case 35680:case 36300:case 36308:case 36293:return dR;case 36289:case 36303:case 36311:case 36292:return hR}}class mR{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=qC(n.type)}}class gR{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=pR(n.type)}}class vR{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let o=0,s=r.length;o!==s;++o){const a=r[o];a.setValue(e,n[a.id],i)}}}const Af=/(\w+)(\])?(\[|\.)?/g;function l0(t,e){t.seq.push(e),t.map[e.id]=e}function _R(t,e,n){const i=t.name,r=i.length;for(Af.lastIndex=0;;){const o=Af.exec(i),s=Af.lastIndex;let a=o[1];const l=o[2]==="]",u=o[3];if(l&&(a=a|0),u===void 0||u==="["&&s+2===r){l0(n,u===void 0?new mR(a,t,e):new gR(a,t,e));break}else{let d=n.map[a];d===void 0&&(d=new vR(a),l0(n,d)),n=d}}}class Wl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const o=e.getActiveUniform(n,r),s=e.getUniformLocation(n,o.name);_R(o,s,this)}}setValue(e,n,i,r){const o=this.map[n];o!==void 0&&o.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let o=0,s=n.length;o!==s;++o){const a=n[o],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,o=e.length;r!==o;++r){const s=e[r];s.id in n&&i.push(s)}return i}}function u0(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const yR=37297;let xR=0;function SR(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),o=Math.min(e+6,n.length);for(let s=r;s<o;s++){const a=s+1;i.push(`${a===e?">":" "} ${a}: ${n[s]}`)}return i.join(`
`)}function ER(t){const e=it.getPrimaries(it.workingColorSpace),n=it.getPrimaries(t);let i;switch(e===n?i="":e===Tu&&n===Mu?i="LinearDisplayP3ToLinearSRGB":e===Mu&&n===Tu&&(i="LinearSRGBToLinearDisplayP3"),t){case Gi:case ac:return[i,"LinearTransferOETF"];case Ht:case sp:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function c0(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const s=parseInt(o[1]);return n.toUpperCase()+`

`+r+`

`+SR(t.getShaderSource(e),s)}else return r}function MR(t,e){const n=ER(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function TR(t,e){let n;switch(e){case x2:n="Linear";break;case S2:n="Reinhard";break;case E2:n="OptimizedCineon";break;case M2:n="ACESFilmic";break;case w2:n="AgX";break;case T2:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function wR(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Vo).join(`
`)}function AR(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Vo).join(`
`)}function CR(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function RR(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const o=t.getActiveAttrib(e,r),s=o.name;let a=1;o.type===t.FLOAT_MAT2&&(a=2),o.type===t.FLOAT_MAT3&&(a=3),o.type===t.FLOAT_MAT4&&(a=4),n[s]={type:o.type,location:t.getAttribLocation(e,s),locationSize:a}}return n}function Vo(t){return t!==""}function f0(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function d0(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const bR=/^[ \t]*#include +<([\w\d./]+)>/gm;function $d(t){return t.replace(bR,LR)}const PR=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function LR(t,e){let n=Fe[e];if(n===void 0){const i=PR.get(e);if(i!==void 0)n=Fe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return $d(n)}const NR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function h0(t){return t.replace(NR,IR)}function IR(t,e,n,i){let r="";for(let o=parseInt(e);o<parseInt(n);o++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return r}function p0(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function DR(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===N1?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===qM?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===bi&&(e="SHADOWMAP_TYPE_VSM"),e}function UR(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case us:case cs:e="ENVMAP_TYPE_CUBE";break;case sc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function FR(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case cs:e="ENVMAP_MODE_REFRACTION";break}return e}function OR(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case I1:e="ENVMAP_BLENDING_MULTIPLY";break;case _2:e="ENVMAP_BLENDING_MIX";break;case y2:e="ENVMAP_BLENDING_ADD";break}return e}function kR(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function BR(t,e,n,i){const r=t.getContext(),o=n.defines;let s=n.vertexShader,a=n.fragmentShader;const l=DR(n),u=UR(n),c=FR(n),d=OR(n),f=kR(n),p=n.isWebGL2?"":wR(n),_=AR(n),y=CR(o),g=r.createProgram();let h,v,m=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(h=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y].filter(Vo).join(`
`),h.length>0&&(h+=`
`),v=[p,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y].filter(Vo).join(`
`),v.length>0&&(v+=`
`)):(h=[p0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Vo).join(`
`),v=[p,p0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+c:"",n.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==vr?"#define TONE_MAPPING":"",n.toneMapping!==vr?Fe.tonemapping_pars_fragment:"",n.toneMapping!==vr?TR("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Fe.colorspace_pars_fragment,MR("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Vo).join(`
`)),s=$d(s),s=f0(s,n),s=d0(s,n),a=$d(a),a=f0(a,n),a=d0(a,n),s=h0(s),a=h0(a),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,h=[_,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+h,v=["precision mediump sampler2DArray;","#define varying in",n.glslVersion===Ng?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Ng?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const x=m+h+s,R=m+v+a,T=u0(r,r.VERTEX_SHADER,x),M=u0(r,r.FRAGMENT_SHADER,R);r.attachShader(g,T),r.attachShader(g,M),n.index0AttributeName!==void 0?r.bindAttribLocation(g,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g);function L($){if(t.debug.checkShaderErrors){const te=r.getProgramInfoLog(g).trim(),P=r.getShaderInfoLog(T).trim(),O=r.getShaderInfoLog(M).trim();let X=!0,Y=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(X=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,g,T,M);else{const N=c0(r,T,"vertex"),I=c0(r,M,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Program Info Log: `+te+`
`+N+`
`+I)}else te!==""?console.warn("THREE.WebGLProgram: Program Info Log:",te):(P===""||O==="")&&(Y=!1);Y&&($.diagnostics={runnable:X,programLog:te,vertexShader:{log:P,prefix:h},fragmentShader:{log:O,prefix:v}})}r.deleteShader(T),r.deleteShader(M),E=new Wl(r,g),A=RR(r,g)}let E;this.getUniforms=function(){return E===void 0&&L(this),E};let A;this.getAttributes=function(){return A===void 0&&L(this),A};let F=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return F===!1&&(F=r.getProgramParameter(g,yR)),F},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=xR++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=T,this.fragmentShader=M,this}let HR=0;class zR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),o=this._getShaderStage(i),s=this._getShaderCacheForMaterial(e);return s.has(r)===!1&&(s.add(r),r.usedTimes++),s.has(o)===!1&&(s.add(o),o.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new GR(e),n.set(e,i)),i}}class GR{constructor(e){this.id=HR++,this.code=e,this.usedTimes=0}}function VR(t,e,n,i,r,o,s){const a=new up,l=new zR,u=[],c=r.isWebGL2,d=r.logarithmicDepthBuffer,f=r.vertexTextures;let p=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(E){return E===0?"uv":`uv${E}`}function g(E,A,F,$,te){const P=$.fog,O=te.geometry,X=E.isMeshStandardMaterial?$.environment:null,Y=(E.isMeshStandardMaterial?n:e).get(E.envMap||X),N=Y&&Y.mapping===sc?Y.image.height:null,I=_[E.type];E.precision!==null&&(p=r.getMaxPrecision(E.precision),p!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",p,"instead."));const G=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,j=G!==void 0?G.length:0;let Z=0;O.morphAttributes.position!==void 0&&(Z=1),O.morphAttributes.normal!==void 0&&(Z=2),O.morphAttributes.color!==void 0&&(Z=3);let W,q,se,ce;if(I){const tn=mi[I];W=tn.vertexShader,q=tn.fragmentShader}else W=E.vertexShader,q=E.fragmentShader,l.update(E),se=l.getVertexShaderID(E),ce=l.getFragmentShaderID(E);const he=t.getRenderTarget(),Ae=te.isInstancedMesh===!0,Te=te.isBatchedMesh===!0,Se=!!E.map,ze=!!E.matcap,U=!!Y,en=!!E.aoMap,Ee=!!E.lightMap,Le=!!E.bumpMap,ve=!!E.normalMap,mt=!!E.displacementMap,ke=!!E.emissiveMap,C=!!E.metalnessMap,S=!!E.roughnessMap,H=E.anisotropy>0,ne=E.clearcoat>0,J=E.iridescence>0,ie=E.sheen>0,_e=E.transmission>0,ue=H&&!!E.anisotropyMap,pe=ne&&!!E.clearcoatMap,Ce=ne&&!!E.clearcoatNormalMap,Be=ne&&!!E.clearcoatRoughnessMap,K=J&&!!E.iridescenceMap,nt=J&&!!E.iridescenceThicknessMap,Xe=ie&&!!E.sheenColorMap,Pe=ie&&!!E.sheenRoughnessMap,xe=!!E.specularMap,me=!!E.specularColorMap,Ue=!!E.specularIntensityMap,Je=_e&&!!E.transmissionMap,xt=_e&&!!E.thicknessMap,Ge=!!E.gradientMap,re=!!E.alphaMap,b=E.alphaTest>0,ae=!!E.alphaHash,le=!!E.extensions,Re=!!O.attributes.uv1,Me=!!O.attributes.uv2,ot=!!O.attributes.uv3;let st=vr;return E.toneMapped&&(he===null||he.isXRRenderTarget===!0)&&(st=t.toneMapping),{isWebGL2:c,shaderID:I,shaderType:E.type,shaderName:E.name,vertexShader:W,fragmentShader:q,defines:E.defines,customVertexShaderID:se,customFragmentShaderID:ce,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:p,batching:Te,instancing:Ae,instancingColor:Ae&&te.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:he===null?t.outputColorSpace:he.isXRRenderTarget===!0?he.texture.colorSpace:Gi,map:Se,matcap:ze,envMap:U,envMapMode:U&&Y.mapping,envMapCubeUVHeight:N,aoMap:en,lightMap:Ee,bumpMap:Le,normalMap:ve,displacementMap:f&&mt,emissiveMap:ke,normalMapObjectSpace:ve&&E.normalMapType===k2,normalMapTangentSpace:ve&&E.normalMapType===O2,metalnessMap:C,roughnessMap:S,anisotropy:H,anisotropyMap:ue,clearcoat:ne,clearcoatMap:pe,clearcoatNormalMap:Ce,clearcoatRoughnessMap:Be,iridescence:J,iridescenceMap:K,iridescenceThicknessMap:nt,sheen:ie,sheenColorMap:Xe,sheenRoughnessMap:Pe,specularMap:xe,specularColorMap:me,specularIntensityMap:Ue,transmission:_e,transmissionMap:Je,thicknessMap:xt,gradientMap:Ge,opaque:E.transparent===!1&&E.blending===Qo,alphaMap:re,alphaTest:b,alphaHash:ae,combine:E.combine,mapUv:Se&&y(E.map.channel),aoMapUv:en&&y(E.aoMap.channel),lightMapUv:Ee&&y(E.lightMap.channel),bumpMapUv:Le&&y(E.bumpMap.channel),normalMapUv:ve&&y(E.normalMap.channel),displacementMapUv:mt&&y(E.displacementMap.channel),emissiveMapUv:ke&&y(E.emissiveMap.channel),metalnessMapUv:C&&y(E.metalnessMap.channel),roughnessMapUv:S&&y(E.roughnessMap.channel),anisotropyMapUv:ue&&y(E.anisotropyMap.channel),clearcoatMapUv:pe&&y(E.clearcoatMap.channel),clearcoatNormalMapUv:Ce&&y(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Be&&y(E.clearcoatRoughnessMap.channel),iridescenceMapUv:K&&y(E.iridescenceMap.channel),iridescenceThicknessMapUv:nt&&y(E.iridescenceThicknessMap.channel),sheenColorMapUv:Xe&&y(E.sheenColorMap.channel),sheenRoughnessMapUv:Pe&&y(E.sheenRoughnessMap.channel),specularMapUv:xe&&y(E.specularMap.channel),specularColorMapUv:me&&y(E.specularColorMap.channel),specularIntensityMapUv:Ue&&y(E.specularIntensityMap.channel),transmissionMapUv:Je&&y(E.transmissionMap.channel),thicknessMapUv:xt&&y(E.thicknessMap.channel),alphaMapUv:re&&y(E.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(ve||H),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,vertexUv1s:Re,vertexUv2s:Me,vertexUv3s:ot,pointsUvs:te.isPoints===!0&&!!O.attributes.uv&&(Se||re),fog:!!P,useFog:E.fog===!0,fogExp2:P&&P.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:te.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:j,morphTextureStride:Z,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:E.dithering,shadowMapEnabled:t.shadowMap.enabled&&F.length>0,shadowMapType:t.shadowMap.type,toneMapping:st,useLegacyLights:t._useLegacyLights,decodeVideoTexture:Se&&E.map.isVideoTexture===!0&&it.getTransfer(E.map.colorSpace)===ft,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Ii,flipSided:E.side===_n,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionDerivatives:le&&E.extensions.derivatives===!0,extensionFragDepth:le&&E.extensions.fragDepth===!0,extensionDrawBuffers:le&&E.extensions.drawBuffers===!0,extensionShaderTextureLOD:le&&E.extensions.shaderTextureLOD===!0,extensionClipCullDistance:le&&E.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:c||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:c||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:c||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()}}function h(E){const A=[];if(E.shaderID?A.push(E.shaderID):(A.push(E.customVertexShaderID),A.push(E.customFragmentShaderID)),E.defines!==void 0)for(const F in E.defines)A.push(F),A.push(E.defines[F]);return E.isRawShaderMaterial===!1&&(v(A,E),m(A,E),A.push(t.outputColorSpace)),A.push(E.customProgramCacheKey),A.join()}function v(E,A){E.push(A.precision),E.push(A.outputColorSpace),E.push(A.envMapMode),E.push(A.envMapCubeUVHeight),E.push(A.mapUv),E.push(A.alphaMapUv),E.push(A.lightMapUv),E.push(A.aoMapUv),E.push(A.bumpMapUv),E.push(A.normalMapUv),E.push(A.displacementMapUv),E.push(A.emissiveMapUv),E.push(A.metalnessMapUv),E.push(A.roughnessMapUv),E.push(A.anisotropyMapUv),E.push(A.clearcoatMapUv),E.push(A.clearcoatNormalMapUv),E.push(A.clearcoatRoughnessMapUv),E.push(A.iridescenceMapUv),E.push(A.iridescenceThicknessMapUv),E.push(A.sheenColorMapUv),E.push(A.sheenRoughnessMapUv),E.push(A.specularMapUv),E.push(A.specularColorMapUv),E.push(A.specularIntensityMapUv),E.push(A.transmissionMapUv),E.push(A.thicknessMapUv),E.push(A.combine),E.push(A.fogExp2),E.push(A.sizeAttenuation),E.push(A.morphTargetsCount),E.push(A.morphAttributeCount),E.push(A.numDirLights),E.push(A.numPointLights),E.push(A.numSpotLights),E.push(A.numSpotLightMaps),E.push(A.numHemiLights),E.push(A.numRectAreaLights),E.push(A.numDirLightShadows),E.push(A.numPointLightShadows),E.push(A.numSpotLightShadows),E.push(A.numSpotLightShadowsWithMaps),E.push(A.numLightProbes),E.push(A.shadowMapType),E.push(A.toneMapping),E.push(A.numClippingPlanes),E.push(A.numClipIntersection),E.push(A.depthPacking)}function m(E,A){a.disableAll(),A.isWebGL2&&a.enable(0),A.supportsVertexTextures&&a.enable(1),A.instancing&&a.enable(2),A.instancingColor&&a.enable(3),A.matcap&&a.enable(4),A.envMap&&a.enable(5),A.normalMapObjectSpace&&a.enable(6),A.normalMapTangentSpace&&a.enable(7),A.clearcoat&&a.enable(8),A.iridescence&&a.enable(9),A.alphaTest&&a.enable(10),A.vertexColors&&a.enable(11),A.vertexAlphas&&a.enable(12),A.vertexUv1s&&a.enable(13),A.vertexUv2s&&a.enable(14),A.vertexUv3s&&a.enable(15),A.vertexTangents&&a.enable(16),A.anisotropy&&a.enable(17),A.alphaHash&&a.enable(18),A.batching&&a.enable(19),E.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.skinning&&a.enable(4),A.morphTargets&&a.enable(5),A.morphNormals&&a.enable(6),A.morphColors&&a.enable(7),A.premultipliedAlpha&&a.enable(8),A.shadowMapEnabled&&a.enable(9),A.useLegacyLights&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),E.push(a.mask)}function x(E){const A=_[E.type];let F;if(A){const $=mi[A];F=TT.clone($.uniforms)}else F=E.uniforms;return F}function R(E,A){let F;for(let $=0,te=u.length;$<te;$++){const P=u[$];if(P.cacheKey===A){F=P,++F.usedTimes;break}}return F===void 0&&(F=new BR(t,A,E,o),u.push(F)),F}function T(E){if(--E.usedTimes===0){const A=u.indexOf(E);u[A]=u[u.length-1],u.pop(),E.destroy()}}function M(E){l.remove(E)}function L(){l.dispose()}return{getParameters:g,getProgramCacheKey:h,getUniforms:x,acquireProgram:R,releaseProgram:T,releaseShaderCache:M,programs:u,dispose:L}}function WR(){let t=new WeakMap;function e(o){let s=t.get(o);return s===void 0&&(s={},t.set(o,s)),s}function n(o){t.delete(o)}function i(o,s,a){t.get(o)[s]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function XR(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function m0(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function g0(){const t=[];let e=0;const n=[],i=[],r=[];function o(){e=0,n.length=0,i.length=0,r.length=0}function s(d,f,p,_,y,g){let h=t[e];return h===void 0?(h={id:d.id,object:d,geometry:f,material:p,groupOrder:_,renderOrder:d.renderOrder,z:y,group:g},t[e]=h):(h.id=d.id,h.object=d,h.geometry=f,h.material=p,h.groupOrder=_,h.renderOrder=d.renderOrder,h.z=y,h.group=g),e++,h}function a(d,f,p,_,y,g){const h=s(d,f,p,_,y,g);p.transmission>0?i.push(h):p.transparent===!0?r.push(h):n.push(h)}function l(d,f,p,_,y,g){const h=s(d,f,p,_,y,g);p.transmission>0?i.unshift(h):p.transparent===!0?r.unshift(h):n.unshift(h)}function u(d,f){n.length>1&&n.sort(d||XR),i.length>1&&i.sort(f||m0),r.length>1&&r.sort(f||m0)}function c(){for(let d=e,f=t.length;d<f;d++){const p=t[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:o,push:a,unshift:l,finish:c,sort:u}}function $R(){let t=new WeakMap;function e(i,r){const o=t.get(i);let s;return o===void 0?(s=new g0,t.set(i,[s])):r>=o.length?(s=new g0,o.push(s)):s=o[r],s}function n(){t=new WeakMap}return{get:e,dispose:n}}function jR(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new k,color:new rt};break;case"SpotLight":n={position:new k,direction:new k,color:new rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new k,color:new rt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new k,skyColor:new rt,groundColor:new rt};break;case"RectAreaLight":n={color:new rt,position:new k,halfWidth:new k,halfHeight:new k};break}return t[e.id]=n,n}}}function qR(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let YR=0;function ZR(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function KR(t,e){const n=new jR,i=qR(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)r.probe.push(new k);const o=new k,s=new Vt,a=new Vt;function l(c,d){let f=0,p=0,_=0;for(let $=0;$<9;$++)r.probe[$].set(0,0,0);let y=0,g=0,h=0,v=0,m=0,x=0,R=0,T=0,M=0,L=0,E=0;c.sort(ZR);const A=d===!0?Math.PI:1;for(let $=0,te=c.length;$<te;$++){const P=c[$],O=P.color,X=P.intensity,Y=P.distance,N=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)f+=O.r*X*A,p+=O.g*X*A,_+=O.b*X*A;else if(P.isLightProbe){for(let I=0;I<9;I++)r.probe[I].addScaledVector(P.sh.coefficients[I],X);E++}else if(P.isDirectionalLight){const I=n.get(P);if(I.color.copy(P.color).multiplyScalar(P.intensity*A),P.castShadow){const G=P.shadow,j=i.get(P);j.shadowBias=G.bias,j.shadowNormalBias=G.normalBias,j.shadowRadius=G.radius,j.shadowMapSize=G.mapSize,r.directionalShadow[y]=j,r.directionalShadowMap[y]=N,r.directionalShadowMatrix[y]=P.shadow.matrix,x++}r.directional[y]=I,y++}else if(P.isSpotLight){const I=n.get(P);I.position.setFromMatrixPosition(P.matrixWorld),I.color.copy(O).multiplyScalar(X*A),I.distance=Y,I.coneCos=Math.cos(P.angle),I.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),I.decay=P.decay,r.spot[h]=I;const G=P.shadow;if(P.map&&(r.spotLightMap[M]=P.map,M++,G.updateMatrices(P),P.castShadow&&L++),r.spotLightMatrix[h]=G.matrix,P.castShadow){const j=i.get(P);j.shadowBias=G.bias,j.shadowNormalBias=G.normalBias,j.shadowRadius=G.radius,j.shadowMapSize=G.mapSize,r.spotShadow[h]=j,r.spotShadowMap[h]=N,T++}h++}else if(P.isRectAreaLight){const I=n.get(P);I.color.copy(O).multiplyScalar(X),I.halfWidth.set(P.width*.5,0,0),I.halfHeight.set(0,P.height*.5,0),r.rectArea[v]=I,v++}else if(P.isPointLight){const I=n.get(P);if(I.color.copy(P.color).multiplyScalar(P.intensity*A),I.distance=P.distance,I.decay=P.decay,P.castShadow){const G=P.shadow,j=i.get(P);j.shadowBias=G.bias,j.shadowNormalBias=G.normalBias,j.shadowRadius=G.radius,j.shadowMapSize=G.mapSize,j.shadowCameraNear=G.camera.near,j.shadowCameraFar=G.camera.far,r.pointShadow[g]=j,r.pointShadowMap[g]=N,r.pointShadowMatrix[g]=P.shadow.matrix,R++}r.point[g]=I,g++}else if(P.isHemisphereLight){const I=n.get(P);I.skyColor.copy(P.color).multiplyScalar(X*A),I.groundColor.copy(P.groundColor).multiplyScalar(X*A),r.hemi[m]=I,m++}}v>0&&(e.isWebGL2?t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=oe.LTC_FLOAT_1,r.rectAreaLTC2=oe.LTC_FLOAT_2):(r.rectAreaLTC1=oe.LTC_HALF_1,r.rectAreaLTC2=oe.LTC_HALF_2):t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=oe.LTC_FLOAT_1,r.rectAreaLTC2=oe.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=oe.LTC_HALF_1,r.rectAreaLTC2=oe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=f,r.ambient[1]=p,r.ambient[2]=_;const F=r.hash;(F.directionalLength!==y||F.pointLength!==g||F.spotLength!==h||F.rectAreaLength!==v||F.hemiLength!==m||F.numDirectionalShadows!==x||F.numPointShadows!==R||F.numSpotShadows!==T||F.numSpotMaps!==M||F.numLightProbes!==E)&&(r.directional.length=y,r.spot.length=h,r.rectArea.length=v,r.point.length=g,r.hemi.length=m,r.directionalShadow.length=x,r.directionalShadowMap.length=x,r.pointShadow.length=R,r.pointShadowMap.length=R,r.spotShadow.length=T,r.spotShadowMap.length=T,r.directionalShadowMatrix.length=x,r.pointShadowMatrix.length=R,r.spotLightMatrix.length=T+M-L,r.spotLightMap.length=M,r.numSpotLightShadowsWithMaps=L,r.numLightProbes=E,F.directionalLength=y,F.pointLength=g,F.spotLength=h,F.rectAreaLength=v,F.hemiLength=m,F.numDirectionalShadows=x,F.numPointShadows=R,F.numSpotShadows=T,F.numSpotMaps=M,F.numLightProbes=E,r.version=YR++)}function u(c,d){let f=0,p=0,_=0,y=0,g=0;const h=d.matrixWorldInverse;for(let v=0,m=c.length;v<m;v++){const x=c[v];if(x.isDirectionalLight){const R=r.directional[f];R.direction.setFromMatrixPosition(x.matrixWorld),o.setFromMatrixPosition(x.target.matrixWorld),R.direction.sub(o),R.direction.transformDirection(h),f++}else if(x.isSpotLight){const R=r.spot[_];R.position.setFromMatrixPosition(x.matrixWorld),R.position.applyMatrix4(h),R.direction.setFromMatrixPosition(x.matrixWorld),o.setFromMatrixPosition(x.target.matrixWorld),R.direction.sub(o),R.direction.transformDirection(h),_++}else if(x.isRectAreaLight){const R=r.rectArea[y];R.position.setFromMatrixPosition(x.matrixWorld),R.position.applyMatrix4(h),a.identity(),s.copy(x.matrixWorld),s.premultiply(h),a.extractRotation(s),R.halfWidth.set(x.width*.5,0,0),R.halfHeight.set(0,x.height*.5,0),R.halfWidth.applyMatrix4(a),R.halfHeight.applyMatrix4(a),y++}else if(x.isPointLight){const R=r.point[p];R.position.setFromMatrixPosition(x.matrixWorld),R.position.applyMatrix4(h),p++}else if(x.isHemisphereLight){const R=r.hemi[g];R.direction.setFromMatrixPosition(x.matrixWorld),R.direction.transformDirection(h),g++}}}return{setup:l,setupView:u,state:r}}function v0(t,e){const n=new KR(t,e),i=[],r=[];function o(){i.length=0,r.length=0}function s(d){i.push(d)}function a(d){r.push(d)}function l(d){n.setup(i,d)}function u(d){n.setupView(i,d)}return{init:o,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:u,pushLight:s,pushShadow:a}}function QR(t,e){let n=new WeakMap;function i(o,s=0){const a=n.get(o);let l;return a===void 0?(l=new v0(t,e),n.set(o,[l])):s>=a.length?(l=new v0(t,e),a.push(l)):l=a[s],l}function r(){n=new WeakMap}return{get:i,dispose:r}}class JR extends uc{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=U2,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class eb extends uc{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const tb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,nb=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function ib(t,e,n){let i=new ty;const r=new Ke,o=new Ke,s=new zt,a=new JR({depthPacking:F2}),l=new eb,u={},c=n.maxTextureSize,d={[Er]:_n,[_n]:Er,[Ii]:Ii},f=new ro({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ke},radius:{value:4}},vertexShader:tb,fragmentShader:nb}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const _=new Wi;_.setAttribute("position",new si(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new ii(_,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=N1;let h=this.type;this.render=function(T,M,L){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||T.length===0)return;const E=t.getRenderTarget(),A=t.getActiveCubeFace(),F=t.getActiveMipmapLevel(),$=t.state;$.setBlending(gr),$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);const te=h!==bi&&this.type===bi,P=h===bi&&this.type!==bi;for(let O=0,X=T.length;O<X;O++){const Y=T[O],N=Y.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;r.copy(N.mapSize);const I=N.getFrameExtents();if(r.multiply(I),o.copy(N.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(o.x=Math.floor(c/I.x),r.x=o.x*I.x,N.mapSize.x=o.x),r.y>c&&(o.y=Math.floor(c/I.y),r.y=o.y*I.y,N.mapSize.y=o.y)),N.map===null||te===!0||P===!0){const j=this.type!==bi?{minFilter:ln,magFilter:ln}:{};N.map!==null&&N.map.dispose(),N.map=new io(r.x,r.y,j),N.map.texture.name=Y.name+".shadowMap",N.camera.updateProjectionMatrix()}t.setRenderTarget(N.map),t.clear();const G=N.getViewportCount();for(let j=0;j<G;j++){const Z=N.getViewport(j);s.set(o.x*Z.x,o.y*Z.y,o.x*Z.z,o.y*Z.w),$.viewport(s),N.updateMatrices(Y,j),i=N.getFrustum(),x(M,L,N.camera,Y,this.type)}N.isPointLightShadow!==!0&&this.type===bi&&v(N,L),N.needsUpdate=!1}h=this.type,g.needsUpdate=!1,t.setRenderTarget(E,A,F)};function v(T,M){const L=e.update(y);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new io(r.x,r.y)),f.uniforms.shadow_pass.value=T.map.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,t.setRenderTarget(T.mapPass),t.clear(),t.renderBufferDirect(M,null,L,f,y,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,t.setRenderTarget(T.map),t.clear(),t.renderBufferDirect(M,null,L,p,y,null)}function m(T,M,L,E){let A=null;const F=L.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(F!==void 0)A=F;else if(A=L.isPointLight===!0?l:a,t.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0){const $=A.uuid,te=M.uuid;let P=u[$];P===void 0&&(P={},u[$]=P);let O=P[te];O===void 0&&(O=A.clone(),P[te]=O,M.addEventListener("dispose",R)),A=O}if(A.visible=M.visible,A.wireframe=M.wireframe,E===bi?A.side=M.shadowSide!==null?M.shadowSide:M.side:A.side=M.shadowSide!==null?M.shadowSide:d[M.side],A.alphaMap=M.alphaMap,A.alphaTest=M.alphaTest,A.map=M.map,A.clipShadows=M.clipShadows,A.clippingPlanes=M.clippingPlanes,A.clipIntersection=M.clipIntersection,A.displacementMap=M.displacementMap,A.displacementScale=M.displacementScale,A.displacementBias=M.displacementBias,A.wireframeLinewidth=M.wireframeLinewidth,A.linewidth=M.linewidth,L.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const $=t.properties.get(A);$.light=L}return A}function x(T,M,L,E,A){if(T.visible===!1)return;if(T.layers.test(M.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&A===bi)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,T.matrixWorld);const te=e.update(T),P=T.material;if(Array.isArray(P)){const O=te.groups;for(let X=0,Y=O.length;X<Y;X++){const N=O[X],I=P[N.materialIndex];if(I&&I.visible){const G=m(T,I,E,A);T.onBeforeShadow(t,T,M,L,te,G,N),t.renderBufferDirect(L,null,te,G,T,N),T.onAfterShadow(t,T,M,L,te,G,N)}}}else if(P.visible){const O=m(T,P,E,A);T.onBeforeShadow(t,T,M,L,te,O,null),t.renderBufferDirect(L,null,te,O,T,null),T.onAfterShadow(t,T,M,L,te,O,null)}}const $=T.children;for(let te=0,P=$.length;te<P;te++)x($[te],M,L,E,A)}function R(T){T.target.removeEventListener("dispose",R);for(const L in u){const E=u[L],A=T.target.uuid;A in E&&(E[A].dispose(),delete E[A])}}}function rb(t,e,n){const i=n.isWebGL2;function r(){let b=!1;const ae=new zt;let le=null;const Re=new zt(0,0,0,0);return{setMask:function(Me){le!==Me&&!b&&(t.colorMask(Me,Me,Me,Me),le=Me)},setLocked:function(Me){b=Me},setClear:function(Me,ot,st,Nt,tn){tn===!0&&(Me*=Nt,ot*=Nt,st*=Nt),ae.set(Me,ot,st,Nt),Re.equals(ae)===!1&&(t.clearColor(Me,ot,st,Nt),Re.copy(ae))},reset:function(){b=!1,le=null,Re.set(-1,0,0,0)}}}function o(){let b=!1,ae=null,le=null,Re=null;return{setTest:function(Me){Me?Te(t.DEPTH_TEST):Se(t.DEPTH_TEST)},setMask:function(Me){ae!==Me&&!b&&(t.depthMask(Me),ae=Me)},setFunc:function(Me){if(le!==Me){switch(Me){case f2:t.depthFunc(t.NEVER);break;case d2:t.depthFunc(t.ALWAYS);break;case h2:t.depthFunc(t.LESS);break;case Su:t.depthFunc(t.LEQUAL);break;case p2:t.depthFunc(t.EQUAL);break;case m2:t.depthFunc(t.GEQUAL);break;case g2:t.depthFunc(t.GREATER);break;case v2:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}le=Me}},setLocked:function(Me){b=Me},setClear:function(Me){Re!==Me&&(t.clearDepth(Me),Re=Me)},reset:function(){b=!1,ae=null,le=null,Re=null}}}function s(){let b=!1,ae=null,le=null,Re=null,Me=null,ot=null,st=null,Nt=null,tn=null;return{setTest:function(at){b||(at?Te(t.STENCIL_TEST):Se(t.STENCIL_TEST))},setMask:function(at){ae!==at&&!b&&(t.stencilMask(at),ae=at)},setFunc:function(at,nn,ui){(le!==at||Re!==nn||Me!==ui)&&(t.stencilFunc(at,nn,ui),le=at,Re=nn,Me=ui)},setOp:function(at,nn,ui){(ot!==at||st!==nn||Nt!==ui)&&(t.stencilOp(at,nn,ui),ot=at,st=nn,Nt=ui)},setLocked:function(at){b=at},setClear:function(at){tn!==at&&(t.clearStencil(at),tn=at)},reset:function(){b=!1,ae=null,le=null,Re=null,Me=null,ot=null,st=null,Nt=null,tn=null}}}const a=new r,l=new o,u=new s,c=new WeakMap,d=new WeakMap;let f={},p={},_=new WeakMap,y=[],g=null,h=!1,v=null,m=null,x=null,R=null,T=null,M=null,L=null,E=new rt(0,0,0),A=0,F=!1,$=null,te=null,P=null,O=null,X=null;const Y=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let N=!1,I=0;const G=t.getParameter(t.VERSION);G.indexOf("WebGL")!==-1?(I=parseFloat(/^WebGL (\d)/.exec(G)[1]),N=I>=1):G.indexOf("OpenGL ES")!==-1&&(I=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),N=I>=2);let j=null,Z={};const W=t.getParameter(t.SCISSOR_BOX),q=t.getParameter(t.VIEWPORT),se=new zt().fromArray(W),ce=new zt().fromArray(q);function he(b,ae,le,Re){const Me=new Uint8Array(4),ot=t.createTexture();t.bindTexture(b,ot),t.texParameteri(b,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(b,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let st=0;st<le;st++)i&&(b===t.TEXTURE_3D||b===t.TEXTURE_2D_ARRAY)?t.texImage3D(ae,0,t.RGBA,1,1,Re,0,t.RGBA,t.UNSIGNED_BYTE,Me):t.texImage2D(ae+st,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Me);return ot}const Ae={};Ae[t.TEXTURE_2D]=he(t.TEXTURE_2D,t.TEXTURE_2D,1),Ae[t.TEXTURE_CUBE_MAP]=he(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Ae[t.TEXTURE_2D_ARRAY]=he(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),Ae[t.TEXTURE_3D]=he(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),u.setClear(0),Te(t.DEPTH_TEST),l.setFunc(Su),ke(!1),C(Qm),Te(t.CULL_FACE),ve(gr);function Te(b){f[b]!==!0&&(t.enable(b),f[b]=!0)}function Se(b){f[b]!==!1&&(t.disable(b),f[b]=!1)}function ze(b,ae){return p[b]!==ae?(t.bindFramebuffer(b,ae),p[b]=ae,i&&(b===t.DRAW_FRAMEBUFFER&&(p[t.FRAMEBUFFER]=ae),b===t.FRAMEBUFFER&&(p[t.DRAW_FRAMEBUFFER]=ae)),!0):!1}function U(b,ae){let le=y,Re=!1;if(b)if(le=_.get(ae),le===void 0&&(le=[],_.set(ae,le)),b.isWebGLMultipleRenderTargets){const Me=b.texture;if(le.length!==Me.length||le[0]!==t.COLOR_ATTACHMENT0){for(let ot=0,st=Me.length;ot<st;ot++)le[ot]=t.COLOR_ATTACHMENT0+ot;le.length=Me.length,Re=!0}}else le[0]!==t.COLOR_ATTACHMENT0&&(le[0]=t.COLOR_ATTACHMENT0,Re=!0);else le[0]!==t.BACK&&(le[0]=t.BACK,Re=!0);Re&&(n.isWebGL2?t.drawBuffers(le):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(le))}function en(b){return g!==b?(t.useProgram(b),g=b,!0):!1}const Ee={[kr]:t.FUNC_ADD,[ZM]:t.FUNC_SUBTRACT,[KM]:t.FUNC_REVERSE_SUBTRACT};if(i)Ee[ng]=t.MIN,Ee[ig]=t.MAX;else{const b=e.get("EXT_blend_minmax");b!==null&&(Ee[ng]=b.MIN_EXT,Ee[ig]=b.MAX_EXT)}const Le={[QM]:t.ZERO,[JM]:t.ONE,[e2]:t.SRC_COLOR,[kd]:t.SRC_ALPHA,[s2]:t.SRC_ALPHA_SATURATE,[r2]:t.DST_COLOR,[n2]:t.DST_ALPHA,[t2]:t.ONE_MINUS_SRC_COLOR,[Bd]:t.ONE_MINUS_SRC_ALPHA,[o2]:t.ONE_MINUS_DST_COLOR,[i2]:t.ONE_MINUS_DST_ALPHA,[a2]:t.CONSTANT_COLOR,[l2]:t.ONE_MINUS_CONSTANT_COLOR,[u2]:t.CONSTANT_ALPHA,[c2]:t.ONE_MINUS_CONSTANT_ALPHA};function ve(b,ae,le,Re,Me,ot,st,Nt,tn,at){if(b===gr){h===!0&&(Se(t.BLEND),h=!1);return}if(h===!1&&(Te(t.BLEND),h=!0),b!==YM){if(b!==v||at!==F){if((m!==kr||T!==kr)&&(t.blendEquation(t.FUNC_ADD),m=kr,T=kr),at)switch(b){case Qo:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Jm:t.blendFunc(t.ONE,t.ONE);break;case eg:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case tg:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",b);break}else switch(b){case Qo:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Jm:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case eg:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case tg:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",b);break}x=null,R=null,M=null,L=null,E.set(0,0,0),A=0,v=b,F=at}return}Me=Me||ae,ot=ot||le,st=st||Re,(ae!==m||Me!==T)&&(t.blendEquationSeparate(Ee[ae],Ee[Me]),m=ae,T=Me),(le!==x||Re!==R||ot!==M||st!==L)&&(t.blendFuncSeparate(Le[le],Le[Re],Le[ot],Le[st]),x=le,R=Re,M=ot,L=st),(Nt.equals(E)===!1||tn!==A)&&(t.blendColor(Nt.r,Nt.g,Nt.b,tn),E.copy(Nt),A=tn),v=b,F=!1}function mt(b,ae){b.side===Ii?Se(t.CULL_FACE):Te(t.CULL_FACE);let le=b.side===_n;ae&&(le=!le),ke(le),b.blending===Qo&&b.transparent===!1?ve(gr):ve(b.blending,b.blendEquation,b.blendSrc,b.blendDst,b.blendEquationAlpha,b.blendSrcAlpha,b.blendDstAlpha,b.blendColor,b.blendAlpha,b.premultipliedAlpha),l.setFunc(b.depthFunc),l.setTest(b.depthTest),l.setMask(b.depthWrite),a.setMask(b.colorWrite);const Re=b.stencilWrite;u.setTest(Re),Re&&(u.setMask(b.stencilWriteMask),u.setFunc(b.stencilFunc,b.stencilRef,b.stencilFuncMask),u.setOp(b.stencilFail,b.stencilZFail,b.stencilZPass)),H(b.polygonOffset,b.polygonOffsetFactor,b.polygonOffsetUnits),b.alphaToCoverage===!0?Te(t.SAMPLE_ALPHA_TO_COVERAGE):Se(t.SAMPLE_ALPHA_TO_COVERAGE)}function ke(b){$!==b&&(b?t.frontFace(t.CW):t.frontFace(t.CCW),$=b)}function C(b){b!==$M?(Te(t.CULL_FACE),b!==te&&(b===Qm?t.cullFace(t.BACK):b===jM?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Se(t.CULL_FACE),te=b}function S(b){b!==P&&(N&&t.lineWidth(b),P=b)}function H(b,ae,le){b?(Te(t.POLYGON_OFFSET_FILL),(O!==ae||X!==le)&&(t.polygonOffset(ae,le),O=ae,X=le)):Se(t.POLYGON_OFFSET_FILL)}function ne(b){b?Te(t.SCISSOR_TEST):Se(t.SCISSOR_TEST)}function J(b){b===void 0&&(b=t.TEXTURE0+Y-1),j!==b&&(t.activeTexture(b),j=b)}function ie(b,ae,le){le===void 0&&(j===null?le=t.TEXTURE0+Y-1:le=j);let Re=Z[le];Re===void 0&&(Re={type:void 0,texture:void 0},Z[le]=Re),(Re.type!==b||Re.texture!==ae)&&(j!==le&&(t.activeTexture(le),j=le),t.bindTexture(b,ae||Ae[b]),Re.type=b,Re.texture=ae)}function _e(){const b=Z[j];b!==void 0&&b.type!==void 0&&(t.bindTexture(b.type,null),b.type=void 0,b.texture=void 0)}function ue(){try{t.compressedTexImage2D.apply(t,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function pe(){try{t.compressedTexImage3D.apply(t,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function Ce(){try{t.texSubImage2D.apply(t,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function Be(){try{t.texSubImage3D.apply(t,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function K(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function nt(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function Xe(){try{t.texStorage2D.apply(t,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function Pe(){try{t.texStorage3D.apply(t,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function xe(){try{t.texImage2D.apply(t,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function me(){try{t.texImage3D.apply(t,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function Ue(b){se.equals(b)===!1&&(t.scissor(b.x,b.y,b.z,b.w),se.copy(b))}function Je(b){ce.equals(b)===!1&&(t.viewport(b.x,b.y,b.z,b.w),ce.copy(b))}function xt(b,ae){let le=d.get(ae);le===void 0&&(le=new WeakMap,d.set(ae,le));let Re=le.get(b);Re===void 0&&(Re=t.getUniformBlockIndex(ae,b.name),le.set(b,Re))}function Ge(b,ae){const Re=d.get(ae).get(b);c.get(ae)!==Re&&(t.uniformBlockBinding(ae,Re,b.__bindingPointIndex),c.set(ae,Re))}function re(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),f={},j=null,Z={},p={},_=new WeakMap,y=[],g=null,h=!1,v=null,m=null,x=null,R=null,T=null,M=null,L=null,E=new rt(0,0,0),A=0,F=!1,$=null,te=null,P=null,O=null,X=null,se.set(0,0,t.canvas.width,t.canvas.height),ce.set(0,0,t.canvas.width,t.canvas.height),a.reset(),l.reset(),u.reset()}return{buffers:{color:a,depth:l,stencil:u},enable:Te,disable:Se,bindFramebuffer:ze,drawBuffers:U,useProgram:en,setBlending:ve,setMaterial:mt,setFlipSided:ke,setCullFace:C,setLineWidth:S,setPolygonOffset:H,setScissorTest:ne,activeTexture:J,bindTexture:ie,unbindTexture:_e,compressedTexImage2D:ue,compressedTexImage3D:pe,texImage2D:xe,texImage3D:me,updateUBOMapping:xt,uniformBlockBinding:Ge,texStorage2D:Xe,texStorage3D:Pe,texSubImage2D:Ce,texSubImage3D:Be,compressedTexSubImage2D:K,compressedTexSubImage3D:nt,scissor:Ue,viewport:Je,reset:re}}function ob(t,e,n,i,r,o,s){const a=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new WeakMap;let d;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(C,S){return p?new OffscreenCanvas(C,S):Cu("canvas")}function y(C,S,H,ne){let J=1;if((C.width>ne||C.height>ne)&&(J=ne/Math.max(C.width,C.height)),J<1||S===!0)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap){const ie=S?Au:Math.floor,_e=ie(J*C.width),ue=ie(J*C.height);d===void 0&&(d=_(_e,ue));const pe=H?_(_e,ue):d;return pe.width=_e,pe.height=ue,pe.getContext("2d").drawImage(C,0,0,_e,ue),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+C.width+"x"+C.height+") to ("+_e+"x"+ue+")."),pe}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+C.width+"x"+C.height+")."),C;return C}function g(C){return Xd(C.width)&&Xd(C.height)}function h(C){return a?!1:C.wrapS!==ti||C.wrapT!==ti||C.minFilter!==ln&&C.minFilter!==On}function v(C,S){return C.generateMipmaps&&S&&C.minFilter!==ln&&C.minFilter!==On}function m(C){t.generateMipmap(C)}function x(C,S,H,ne,J=!1){if(a===!1)return S;if(C!==null){if(t[C]!==void 0)return t[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let ie=S;if(S===t.RED&&(H===t.FLOAT&&(ie=t.R32F),H===t.HALF_FLOAT&&(ie=t.R16F),H===t.UNSIGNED_BYTE&&(ie=t.R8)),S===t.RED_INTEGER&&(H===t.UNSIGNED_BYTE&&(ie=t.R8UI),H===t.UNSIGNED_SHORT&&(ie=t.R16UI),H===t.UNSIGNED_INT&&(ie=t.R32UI),H===t.BYTE&&(ie=t.R8I),H===t.SHORT&&(ie=t.R16I),H===t.INT&&(ie=t.R32I)),S===t.RG&&(H===t.FLOAT&&(ie=t.RG32F),H===t.HALF_FLOAT&&(ie=t.RG16F),H===t.UNSIGNED_BYTE&&(ie=t.RG8)),S===t.RGBA){const _e=J?Eu:it.getTransfer(ne);H===t.FLOAT&&(ie=t.RGBA32F),H===t.HALF_FLOAT&&(ie=t.RGBA16F),H===t.UNSIGNED_BYTE&&(ie=_e===ft?t.SRGB8_ALPHA8:t.RGBA8),H===t.UNSIGNED_SHORT_4_4_4_4&&(ie=t.RGBA4),H===t.UNSIGNED_SHORT_5_5_5_1&&(ie=t.RGB5_A1)}return(ie===t.R16F||ie===t.R32F||ie===t.RG16F||ie===t.RG32F||ie===t.RGBA16F||ie===t.RGBA32F)&&e.get("EXT_color_buffer_float"),ie}function R(C,S,H){return v(C,H)===!0||C.isFramebufferTexture&&C.minFilter!==ln&&C.minFilter!==On?Math.log2(Math.max(S.width,S.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?S.mipmaps.length:1}function T(C){return C===ln||C===rg||C===Qc?t.NEAREST:t.LINEAR}function M(C){const S=C.target;S.removeEventListener("dispose",M),E(S),S.isVideoTexture&&c.delete(S)}function L(C){const S=C.target;S.removeEventListener("dispose",L),F(S)}function E(C){const S=i.get(C);if(S.__webglInit===void 0)return;const H=C.source,ne=f.get(H);if(ne){const J=ne[S.__cacheKey];J.usedTimes--,J.usedTimes===0&&A(C),Object.keys(ne).length===0&&f.delete(H)}i.remove(C)}function A(C){const S=i.get(C);t.deleteTexture(S.__webglTexture);const H=C.source,ne=f.get(H);delete ne[S.__cacheKey],s.memory.textures--}function F(C){const S=C.texture,H=i.get(C),ne=i.get(S);if(ne.__webglTexture!==void 0&&(t.deleteTexture(ne.__webglTexture),s.memory.textures--),C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(H.__webglFramebuffer[J]))for(let ie=0;ie<H.__webglFramebuffer[J].length;ie++)t.deleteFramebuffer(H.__webglFramebuffer[J][ie]);else t.deleteFramebuffer(H.__webglFramebuffer[J]);H.__webglDepthbuffer&&t.deleteRenderbuffer(H.__webglDepthbuffer[J])}else{if(Array.isArray(H.__webglFramebuffer))for(let J=0;J<H.__webglFramebuffer.length;J++)t.deleteFramebuffer(H.__webglFramebuffer[J]);else t.deleteFramebuffer(H.__webglFramebuffer);if(H.__webglDepthbuffer&&t.deleteRenderbuffer(H.__webglDepthbuffer),H.__webglMultisampledFramebuffer&&t.deleteFramebuffer(H.__webglMultisampledFramebuffer),H.__webglColorRenderbuffer)for(let J=0;J<H.__webglColorRenderbuffer.length;J++)H.__webglColorRenderbuffer[J]&&t.deleteRenderbuffer(H.__webglColorRenderbuffer[J]);H.__webglDepthRenderbuffer&&t.deleteRenderbuffer(H.__webglDepthRenderbuffer)}if(C.isWebGLMultipleRenderTargets)for(let J=0,ie=S.length;J<ie;J++){const _e=i.get(S[J]);_e.__webglTexture&&(t.deleteTexture(_e.__webglTexture),s.memory.textures--),i.remove(S[J])}i.remove(S),i.remove(C)}let $=0;function te(){$=0}function P(){const C=$;return C>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+r.maxTextures),$+=1,C}function O(C){const S=[];return S.push(C.wrapS),S.push(C.wrapT),S.push(C.wrapR||0),S.push(C.magFilter),S.push(C.minFilter),S.push(C.anisotropy),S.push(C.internalFormat),S.push(C.format),S.push(C.type),S.push(C.generateMipmaps),S.push(C.premultiplyAlpha),S.push(C.flipY),S.push(C.unpackAlignment),S.push(C.colorSpace),S.join()}function X(C,S){const H=i.get(C);if(C.isVideoTexture&&mt(C),C.isRenderTargetTexture===!1&&C.version>0&&H.__version!==C.version){const ne=C.image;if(ne===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{se(H,C,S);return}}n.bindTexture(t.TEXTURE_2D,H.__webglTexture,t.TEXTURE0+S)}function Y(C,S){const H=i.get(C);if(C.version>0&&H.__version!==C.version){se(H,C,S);return}n.bindTexture(t.TEXTURE_2D_ARRAY,H.__webglTexture,t.TEXTURE0+S)}function N(C,S){const H=i.get(C);if(C.version>0&&H.__version!==C.version){se(H,C,S);return}n.bindTexture(t.TEXTURE_3D,H.__webglTexture,t.TEXTURE0+S)}function I(C,S){const H=i.get(C);if(C.version>0&&H.__version!==C.version){ce(H,C,S);return}n.bindTexture(t.TEXTURE_CUBE_MAP,H.__webglTexture,t.TEXTURE0+S)}const G={[Gd]:t.REPEAT,[ti]:t.CLAMP_TO_EDGE,[Vd]:t.MIRRORED_REPEAT},j={[ln]:t.NEAREST,[rg]:t.NEAREST_MIPMAP_NEAREST,[Qc]:t.NEAREST_MIPMAP_LINEAR,[On]:t.LINEAR,[A2]:t.LINEAR_MIPMAP_NEAREST,[_a]:t.LINEAR_MIPMAP_LINEAR},Z={[B2]:t.NEVER,[X2]:t.ALWAYS,[H2]:t.LESS,[V1]:t.LEQUAL,[z2]:t.EQUAL,[W2]:t.GEQUAL,[G2]:t.GREATER,[V2]:t.NOTEQUAL};function W(C,S,H){if(H?(t.texParameteri(C,t.TEXTURE_WRAP_S,G[S.wrapS]),t.texParameteri(C,t.TEXTURE_WRAP_T,G[S.wrapT]),(C===t.TEXTURE_3D||C===t.TEXTURE_2D_ARRAY)&&t.texParameteri(C,t.TEXTURE_WRAP_R,G[S.wrapR]),t.texParameteri(C,t.TEXTURE_MAG_FILTER,j[S.magFilter]),t.texParameteri(C,t.TEXTURE_MIN_FILTER,j[S.minFilter])):(t.texParameteri(C,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(C,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(C===t.TEXTURE_3D||C===t.TEXTURE_2D_ARRAY)&&t.texParameteri(C,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(S.wrapS!==ti||S.wrapT!==ti)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(C,t.TEXTURE_MAG_FILTER,T(S.magFilter)),t.texParameteri(C,t.TEXTURE_MIN_FILTER,T(S.minFilter)),S.minFilter!==ln&&S.minFilter!==On&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),S.compareFunction&&(t.texParameteri(C,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(C,t.TEXTURE_COMPARE_FUNC,Z[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ne=e.get("EXT_texture_filter_anisotropic");if(S.magFilter===ln||S.minFilter!==Qc&&S.minFilter!==_a||S.type===ar&&e.has("OES_texture_float_linear")===!1||a===!1&&S.type===ya&&e.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||i.get(S).__currentAnisotropy)&&(t.texParameterf(C,ne.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy)}}function q(C,S){let H=!1;C.__webglInit===void 0&&(C.__webglInit=!0,S.addEventListener("dispose",M));const ne=S.source;let J=f.get(ne);J===void 0&&(J={},f.set(ne,J));const ie=O(S);if(ie!==C.__cacheKey){J[ie]===void 0&&(J[ie]={texture:t.createTexture(),usedTimes:0},s.memory.textures++,H=!0),J[ie].usedTimes++;const _e=J[C.__cacheKey];_e!==void 0&&(J[C.__cacheKey].usedTimes--,_e.usedTimes===0&&A(S)),C.__cacheKey=ie,C.__webglTexture=J[ie].texture}return H}function se(C,S,H){let ne=t.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(ne=t.TEXTURE_2D_ARRAY),S.isData3DTexture&&(ne=t.TEXTURE_3D);const J=q(C,S),ie=S.source;n.bindTexture(ne,C.__webglTexture,t.TEXTURE0+H);const _e=i.get(ie);if(ie.version!==_e.__version||J===!0){n.activeTexture(t.TEXTURE0+H);const ue=it.getPrimaries(it.workingColorSpace),pe=S.colorSpace===Bn?null:it.getPrimaries(S.colorSpace),Ce=S.colorSpace===Bn||ue===pe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce);const Be=h(S)&&g(S.image)===!1;let K=y(S.image,Be,!1,r.maxTextureSize);K=ke(S,K);const nt=g(K)||a,Xe=o.convert(S.format,S.colorSpace);let Pe=o.convert(S.type),xe=x(S.internalFormat,Xe,Pe,S.colorSpace,S.isVideoTexture);W(ne,S,nt);let me;const Ue=S.mipmaps,Je=a&&S.isVideoTexture!==!0&&xe!==z1,xt=_e.__version===void 0||J===!0,Ge=R(S,K,nt);if(S.isDepthTexture)xe=t.DEPTH_COMPONENT,a?S.type===ar?xe=t.DEPTH_COMPONENT32F:S.type===sr?xe=t.DEPTH_COMPONENT24:S.type===$r?xe=t.DEPTH24_STENCIL8:xe=t.DEPTH_COMPONENT16:S.type===ar&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===jr&&xe===t.DEPTH_COMPONENT&&S.type!==op&&S.type!==sr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=sr,Pe=o.convert(S.type)),S.format===fs&&xe===t.DEPTH_COMPONENT&&(xe=t.DEPTH_STENCIL,S.type!==$r&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=$r,Pe=o.convert(S.type))),xt&&(Je?n.texStorage2D(t.TEXTURE_2D,1,xe,K.width,K.height):n.texImage2D(t.TEXTURE_2D,0,xe,K.width,K.height,0,Xe,Pe,null));else if(S.isDataTexture)if(Ue.length>0&&nt){Je&&xt&&n.texStorage2D(t.TEXTURE_2D,Ge,xe,Ue[0].width,Ue[0].height);for(let re=0,b=Ue.length;re<b;re++)me=Ue[re],Je?n.texSubImage2D(t.TEXTURE_2D,re,0,0,me.width,me.height,Xe,Pe,me.data):n.texImage2D(t.TEXTURE_2D,re,xe,me.width,me.height,0,Xe,Pe,me.data);S.generateMipmaps=!1}else Je?(xt&&n.texStorage2D(t.TEXTURE_2D,Ge,xe,K.width,K.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,K.width,K.height,Xe,Pe,K.data)):n.texImage2D(t.TEXTURE_2D,0,xe,K.width,K.height,0,Xe,Pe,K.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Je&&xt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Ge,xe,Ue[0].width,Ue[0].height,K.depth);for(let re=0,b=Ue.length;re<b;re++)me=Ue[re],S.format!==ni?Xe!==null?Je?n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,re,0,0,0,me.width,me.height,K.depth,Xe,me.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,re,xe,me.width,me.height,K.depth,0,me.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Je?n.texSubImage3D(t.TEXTURE_2D_ARRAY,re,0,0,0,me.width,me.height,K.depth,Xe,Pe,me.data):n.texImage3D(t.TEXTURE_2D_ARRAY,re,xe,me.width,me.height,K.depth,0,Xe,Pe,me.data)}else{Je&&xt&&n.texStorage2D(t.TEXTURE_2D,Ge,xe,Ue[0].width,Ue[0].height);for(let re=0,b=Ue.length;re<b;re++)me=Ue[re],S.format!==ni?Xe!==null?Je?n.compressedTexSubImage2D(t.TEXTURE_2D,re,0,0,me.width,me.height,Xe,me.data):n.compressedTexImage2D(t.TEXTURE_2D,re,xe,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Je?n.texSubImage2D(t.TEXTURE_2D,re,0,0,me.width,me.height,Xe,Pe,me.data):n.texImage2D(t.TEXTURE_2D,re,xe,me.width,me.height,0,Xe,Pe,me.data)}else if(S.isDataArrayTexture)Je?(xt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Ge,xe,K.width,K.height,K.depth),n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,K.width,K.height,K.depth,Xe,Pe,K.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,xe,K.width,K.height,K.depth,0,Xe,Pe,K.data);else if(S.isData3DTexture)Je?(xt&&n.texStorage3D(t.TEXTURE_3D,Ge,xe,K.width,K.height,K.depth),n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,K.width,K.height,K.depth,Xe,Pe,K.data)):n.texImage3D(t.TEXTURE_3D,0,xe,K.width,K.height,K.depth,0,Xe,Pe,K.data);else if(S.isFramebufferTexture){if(xt)if(Je)n.texStorage2D(t.TEXTURE_2D,Ge,xe,K.width,K.height);else{let re=K.width,b=K.height;for(let ae=0;ae<Ge;ae++)n.texImage2D(t.TEXTURE_2D,ae,xe,re,b,0,Xe,Pe,null),re>>=1,b>>=1}}else if(Ue.length>0&&nt){Je&&xt&&n.texStorage2D(t.TEXTURE_2D,Ge,xe,Ue[0].width,Ue[0].height);for(let re=0,b=Ue.length;re<b;re++)me=Ue[re],Je?n.texSubImage2D(t.TEXTURE_2D,re,0,0,Xe,Pe,me):n.texImage2D(t.TEXTURE_2D,re,xe,Xe,Pe,me);S.generateMipmaps=!1}else Je?(xt&&n.texStorage2D(t.TEXTURE_2D,Ge,xe,K.width,K.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,Xe,Pe,K)):n.texImage2D(t.TEXTURE_2D,0,xe,Xe,Pe,K);v(S,nt)&&m(ne),_e.__version=ie.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function ce(C,S,H){if(S.image.length!==6)return;const ne=q(C,S),J=S.source;n.bindTexture(t.TEXTURE_CUBE_MAP,C.__webglTexture,t.TEXTURE0+H);const ie=i.get(J);if(J.version!==ie.__version||ne===!0){n.activeTexture(t.TEXTURE0+H);const _e=it.getPrimaries(it.workingColorSpace),ue=S.colorSpace===Bn?null:it.getPrimaries(S.colorSpace),pe=S.colorSpace===Bn||_e===ue?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe);const Ce=S.isCompressedTexture||S.image[0].isCompressedTexture,Be=S.image[0]&&S.image[0].isDataTexture,K=[];for(let re=0;re<6;re++)!Ce&&!Be?K[re]=y(S.image[re],!1,!0,r.maxCubemapSize):K[re]=Be?S.image[re].image:S.image[re],K[re]=ke(S,K[re]);const nt=K[0],Xe=g(nt)||a,Pe=o.convert(S.format,S.colorSpace),xe=o.convert(S.type),me=x(S.internalFormat,Pe,xe,S.colorSpace),Ue=a&&S.isVideoTexture!==!0,Je=ie.__version===void 0||ne===!0;let xt=R(S,nt,Xe);W(t.TEXTURE_CUBE_MAP,S,Xe);let Ge;if(Ce){Ue&&Je&&n.texStorage2D(t.TEXTURE_CUBE_MAP,xt,me,nt.width,nt.height);for(let re=0;re<6;re++){Ge=K[re].mipmaps;for(let b=0;b<Ge.length;b++){const ae=Ge[b];S.format!==ni?Pe!==null?Ue?n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,b,0,0,ae.width,ae.height,Pe,ae.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,b,me,ae.width,ae.height,0,ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ue?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,b,0,0,ae.width,ae.height,Pe,xe,ae.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,b,me,ae.width,ae.height,0,Pe,xe,ae.data)}}}else{Ge=S.mipmaps,Ue&&Je&&(Ge.length>0&&xt++,n.texStorage2D(t.TEXTURE_CUBE_MAP,xt,me,K[0].width,K[0].height));for(let re=0;re<6;re++)if(Be){Ue?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,K[re].width,K[re].height,Pe,xe,K[re].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,me,K[re].width,K[re].height,0,Pe,xe,K[re].data);for(let b=0;b<Ge.length;b++){const le=Ge[b].image[re].image;Ue?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,b+1,0,0,le.width,le.height,Pe,xe,le.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,b+1,me,le.width,le.height,0,Pe,xe,le.data)}}else{Ue?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,Pe,xe,K[re]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,me,Pe,xe,K[re]);for(let b=0;b<Ge.length;b++){const ae=Ge[b];Ue?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,b+1,0,0,Pe,xe,ae.image[re]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,b+1,me,Pe,xe,ae.image[re])}}}v(S,Xe)&&m(t.TEXTURE_CUBE_MAP),ie.__version=J.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function he(C,S,H,ne,J,ie){const _e=o.convert(H.format,H.colorSpace),ue=o.convert(H.type),pe=x(H.internalFormat,_e,ue,H.colorSpace);if(!i.get(S).__hasExternalTextures){const Be=Math.max(1,S.width>>ie),K=Math.max(1,S.height>>ie);J===t.TEXTURE_3D||J===t.TEXTURE_2D_ARRAY?n.texImage3D(J,ie,pe,Be,K,S.depth,0,_e,ue,null):n.texImage2D(J,ie,pe,Be,K,0,_e,ue,null)}n.bindFramebuffer(t.FRAMEBUFFER,C),ve(S)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ne,J,i.get(H).__webglTexture,0,Le(S)):(J===t.TEXTURE_2D||J>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,ne,J,i.get(H).__webglTexture,ie),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ae(C,S,H){if(t.bindRenderbuffer(t.RENDERBUFFER,C),S.depthBuffer&&!S.stencilBuffer){let ne=a===!0?t.DEPTH_COMPONENT24:t.DEPTH_COMPONENT16;if(H||ve(S)){const J=S.depthTexture;J&&J.isDepthTexture&&(J.type===ar?ne=t.DEPTH_COMPONENT32F:J.type===sr&&(ne=t.DEPTH_COMPONENT24));const ie=Le(S);ve(S)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ie,ne,S.width,S.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,ie,ne,S.width,S.height)}else t.renderbufferStorage(t.RENDERBUFFER,ne,S.width,S.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,C)}else if(S.depthBuffer&&S.stencilBuffer){const ne=Le(S);H&&ve(S)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,ne,t.DEPTH24_STENCIL8,S.width,S.height):ve(S)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ne,t.DEPTH24_STENCIL8,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,S.width,S.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,C)}else{const ne=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let J=0;J<ne.length;J++){const ie=ne[J],_e=o.convert(ie.format,ie.colorSpace),ue=o.convert(ie.type),pe=x(ie.internalFormat,_e,ue,ie.colorSpace),Ce=Le(S);H&&ve(S)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ce,pe,S.width,S.height):ve(S)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ce,pe,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,pe,S.width,S.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Te(C,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,C),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),X(S.depthTexture,0);const ne=i.get(S.depthTexture).__webglTexture,J=Le(S);if(S.depthTexture.format===jr)ve(S)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ne,0,J):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ne,0);else if(S.depthTexture.format===fs)ve(S)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ne,0,J):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ne,0);else throw new Error("Unknown depthTexture format")}function Se(C){const S=i.get(C),H=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!S.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");Te(S.__webglFramebuffer,C)}else if(H){S.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer[ne]),S.__webglDepthbuffer[ne]=t.createRenderbuffer(),Ae(S.__webglDepthbuffer[ne],C,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=t.createRenderbuffer(),Ae(S.__webglDepthbuffer,C,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function ze(C,S,H){const ne=i.get(C);S!==void 0&&he(ne.__webglFramebuffer,C,C.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),H!==void 0&&Se(C)}function U(C){const S=C.texture,H=i.get(C),ne=i.get(S);C.addEventListener("dispose",L),C.isWebGLMultipleRenderTargets!==!0&&(ne.__webglTexture===void 0&&(ne.__webglTexture=t.createTexture()),ne.__version=S.version,s.memory.textures++);const J=C.isWebGLCubeRenderTarget===!0,ie=C.isWebGLMultipleRenderTargets===!0,_e=g(C)||a;if(J){H.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(a&&S.mipmaps&&S.mipmaps.length>0){H.__webglFramebuffer[ue]=[];for(let pe=0;pe<S.mipmaps.length;pe++)H.__webglFramebuffer[ue][pe]=t.createFramebuffer()}else H.__webglFramebuffer[ue]=t.createFramebuffer()}else{if(a&&S.mipmaps&&S.mipmaps.length>0){H.__webglFramebuffer=[];for(let ue=0;ue<S.mipmaps.length;ue++)H.__webglFramebuffer[ue]=t.createFramebuffer()}else H.__webglFramebuffer=t.createFramebuffer();if(ie)if(r.drawBuffers){const ue=C.texture;for(let pe=0,Ce=ue.length;pe<Ce;pe++){const Be=i.get(ue[pe]);Be.__webglTexture===void 0&&(Be.__webglTexture=t.createTexture(),s.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&C.samples>0&&ve(C)===!1){const ue=ie?S:[S];H.__webglMultisampledFramebuffer=t.createFramebuffer(),H.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let pe=0;pe<ue.length;pe++){const Ce=ue[pe];H.__webglColorRenderbuffer[pe]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,H.__webglColorRenderbuffer[pe]);const Be=o.convert(Ce.format,Ce.colorSpace),K=o.convert(Ce.type),nt=x(Ce.internalFormat,Be,K,Ce.colorSpace,C.isXRRenderTarget===!0),Xe=Le(C);t.renderbufferStorageMultisample(t.RENDERBUFFER,Xe,nt,C.width,C.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+pe,t.RENDERBUFFER,H.__webglColorRenderbuffer[pe])}t.bindRenderbuffer(t.RENDERBUFFER,null),C.depthBuffer&&(H.__webglDepthRenderbuffer=t.createRenderbuffer(),Ae(H.__webglDepthRenderbuffer,C,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(J){n.bindTexture(t.TEXTURE_CUBE_MAP,ne.__webglTexture),W(t.TEXTURE_CUBE_MAP,S,_e);for(let ue=0;ue<6;ue++)if(a&&S.mipmaps&&S.mipmaps.length>0)for(let pe=0;pe<S.mipmaps.length;pe++)he(H.__webglFramebuffer[ue][pe],C,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,pe);else he(H.__webglFramebuffer[ue],C,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);v(S,_e)&&m(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ie){const ue=C.texture;for(let pe=0,Ce=ue.length;pe<Ce;pe++){const Be=ue[pe],K=i.get(Be);n.bindTexture(t.TEXTURE_2D,K.__webglTexture),W(t.TEXTURE_2D,Be,_e),he(H.__webglFramebuffer,C,Be,t.COLOR_ATTACHMENT0+pe,t.TEXTURE_2D,0),v(Be,_e)&&m(t.TEXTURE_2D)}n.unbindTexture()}else{let ue=t.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(a?ue=C.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(ue,ne.__webglTexture),W(ue,S,_e),a&&S.mipmaps&&S.mipmaps.length>0)for(let pe=0;pe<S.mipmaps.length;pe++)he(H.__webglFramebuffer[pe],C,S,t.COLOR_ATTACHMENT0,ue,pe);else he(H.__webglFramebuffer,C,S,t.COLOR_ATTACHMENT0,ue,0);v(S,_e)&&m(ue),n.unbindTexture()}C.depthBuffer&&Se(C)}function en(C){const S=g(C)||a,H=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let ne=0,J=H.length;ne<J;ne++){const ie=H[ne];if(v(ie,S)){const _e=C.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,ue=i.get(ie).__webglTexture;n.bindTexture(_e,ue),m(_e),n.unbindTexture()}}}function Ee(C){if(a&&C.samples>0&&ve(C)===!1){const S=C.isWebGLMultipleRenderTargets?C.texture:[C.texture],H=C.width,ne=C.height;let J=t.COLOR_BUFFER_BIT;const ie=[],_e=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ue=i.get(C),pe=C.isWebGLMultipleRenderTargets===!0;if(pe)for(let Ce=0;Ce<S.length;Ce++)n.bindFramebuffer(t.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ce,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,ue.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ce,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,ue.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ue.__webglFramebuffer);for(let Ce=0;Ce<S.length;Ce++){ie.push(t.COLOR_ATTACHMENT0+Ce),C.depthBuffer&&ie.push(_e);const Be=ue.__ignoreDepthValues!==void 0?ue.__ignoreDepthValues:!1;if(Be===!1&&(C.depthBuffer&&(J|=t.DEPTH_BUFFER_BIT),C.stencilBuffer&&(J|=t.STENCIL_BUFFER_BIT)),pe&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,ue.__webglColorRenderbuffer[Ce]),Be===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[_e]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[_e])),pe){const K=i.get(S[Ce]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,K,0)}t.blitFramebuffer(0,0,H,ne,0,0,H,ne,J,t.NEAREST),u&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,ie)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),pe)for(let Ce=0;Ce<S.length;Ce++){n.bindFramebuffer(t.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ce,t.RENDERBUFFER,ue.__webglColorRenderbuffer[Ce]);const Be=i.get(S[Ce]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,ue.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ce,t.TEXTURE_2D,Be,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ue.__webglMultisampledFramebuffer)}}function Le(C){return Math.min(r.maxSamples,C.samples)}function ve(C){const S=i.get(C);return a&&C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function mt(C){const S=s.render.frame;c.get(C)!==S&&(c.set(C,S),C.update())}function ke(C,S){const H=C.colorSpace,ne=C.format,J=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||C.format===Wd||H!==Gi&&H!==Bn&&(it.getTransfer(H)===ft?a===!1?e.has("EXT_sRGB")===!0&&ne===ni?(C.format=Wd,C.minFilter=On,C.generateMipmaps=!1):S=X1.sRGBToLinear(S):(ne!==ni||J!==_r)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),S}this.allocateTextureUnit=P,this.resetTextureUnits=te,this.setTexture2D=X,this.setTexture2DArray=Y,this.setTexture3D=N,this.setTextureCube=I,this.rebindTextures=ze,this.setupRenderTarget=U,this.updateRenderTargetMipmap=en,this.updateMultisampleRenderTarget=Ee,this.setupDepthRenderbuffer=Se,this.setupFrameBufferTexture=he,this.useMultisampledRTT=ve}function sb(t,e,n){const i=n.isWebGL2;function r(o,s=Bn){let a;const l=it.getTransfer(s);if(o===_r)return t.UNSIGNED_BYTE;if(o===F1)return t.UNSIGNED_SHORT_4_4_4_4;if(o===O1)return t.UNSIGNED_SHORT_5_5_5_1;if(o===C2)return t.BYTE;if(o===R2)return t.SHORT;if(o===op)return t.UNSIGNED_SHORT;if(o===U1)return t.INT;if(o===sr)return t.UNSIGNED_INT;if(o===ar)return t.FLOAT;if(o===ya)return i?t.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(o===b2)return t.ALPHA;if(o===ni)return t.RGBA;if(o===P2)return t.LUMINANCE;if(o===L2)return t.LUMINANCE_ALPHA;if(o===jr)return t.DEPTH_COMPONENT;if(o===fs)return t.DEPTH_STENCIL;if(o===Wd)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(o===N2)return t.RED;if(o===k1)return t.RED_INTEGER;if(o===I2)return t.RG;if(o===B1)return t.RG_INTEGER;if(o===H1)return t.RGBA_INTEGER;if(o===Jc||o===ef||o===tf||o===nf)if(l===ft)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(o===Jc)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(o===ef)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(o===tf)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(o===nf)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(o===Jc)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(o===ef)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(o===tf)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(o===nf)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(o===og||o===sg||o===ag||o===lg)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(o===og)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(o===sg)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(o===ag)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(o===lg)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(o===z1)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(o===ug||o===cg)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(o===ug)return l===ft?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(o===cg)return l===ft?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(o===fg||o===dg||o===hg||o===pg||o===mg||o===gg||o===vg||o===_g||o===yg||o===xg||o===Sg||o===Eg||o===Mg||o===Tg)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(o===fg)return l===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(o===dg)return l===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(o===hg)return l===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(o===pg)return l===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(o===mg)return l===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(o===gg)return l===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(o===vg)return l===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(o===_g)return l===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(o===yg)return l===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(o===xg)return l===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(o===Sg)return l===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(o===Eg)return l===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(o===Mg)return l===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(o===Tg)return l===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(o===rf||o===wg||o===Ag)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(o===rf)return l===ft?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(o===wg)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(o===Ag)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(o===D2||o===Cg||o===Rg||o===bg)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(o===rf)return a.COMPRESSED_RED_RGTC1_EXT;if(o===Cg)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(o===Rg)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(o===bg)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return o===$r?i?t.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):t[o]!==void 0?t[o]:null}return{convert:r}}class ab extends kn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ml extends Rn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const lb={type:"move"};class Cf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ml,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ml,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ml,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,o=null,s=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){s=!0;for(const y of e.hand.values()){const g=n.getJointPose(y,i),h=this._getHandJoint(u,y);g!==null&&(h.matrix.fromArray(g.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=g.radius),h.visible=g!==null}const c=u.joints["index-finger-tip"],d=u.joints["thumb-tip"],f=c.position.distanceTo(d.position),p=.02,_=.005;u.inputState.pinching&&f>p+_?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&f<=p-_&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(o=n.getPose(e.gripSpace,i),o!==null&&(l.matrix.fromArray(o.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,o.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(o.linearVelocity)):l.hasLinearVelocity=!1,o.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(o.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&o!==null&&(r=o),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(lb)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=o!==null),u!==null&&(u.visible=s!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Ml;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class ub extends xs{constructor(e,n){super();const i=this;let r=null,o=1,s=null,a="local-floor",l=1,u=null,c=null,d=null,f=null,p=null,_=null;const y=n.getContextAttributes();let g=null,h=null;const v=[],m=[],x=new Ke;let R=null;const T=new kn;T.layers.enable(1),T.viewport=new zt;const M=new kn;M.layers.enable(2),M.viewport=new zt;const L=[T,M],E=new ab;E.layers.enable(1),E.layers.enable(2);let A=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let q=v[W];return q===void 0&&(q=new Cf,v[W]=q),q.getTargetRaySpace()},this.getControllerGrip=function(W){let q=v[W];return q===void 0&&(q=new Cf,v[W]=q),q.getGripSpace()},this.getHand=function(W){let q=v[W];return q===void 0&&(q=new Cf,v[W]=q),q.getHandSpace()};function $(W){const q=m.indexOf(W.inputSource);if(q===-1)return;const se=v[q];se!==void 0&&(se.update(W.inputSource,W.frame,u||s),se.dispatchEvent({type:W.type,data:W.inputSource}))}function te(){r.removeEventListener("select",$),r.removeEventListener("selectstart",$),r.removeEventListener("selectend",$),r.removeEventListener("squeeze",$),r.removeEventListener("squeezestart",$),r.removeEventListener("squeezeend",$),r.removeEventListener("end",te),r.removeEventListener("inputsourceschange",P);for(let W=0;W<v.length;W++){const q=m[W];q!==null&&(m[W]=null,v[W].disconnect(q))}A=null,F=null,e.setRenderTarget(g),p=null,f=null,d=null,r=null,h=null,Z.stop(),i.isPresenting=!1,e.setPixelRatio(R),e.setSize(x.width,x.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){o=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){a=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||s},this.setReferenceSpace=function(W){u=W},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(W){if(r=W,r!==null){if(g=e.getRenderTarget(),r.addEventListener("select",$),r.addEventListener("selectstart",$),r.addEventListener("selectend",$),r.addEventListener("squeeze",$),r.addEventListener("squeezestart",$),r.addEventListener("squeezeend",$),r.addEventListener("end",te),r.addEventListener("inputsourceschange",P),y.xrCompatible!==!0&&await n.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(x),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const q={antialias:r.renderState.layers===void 0?y.antialias:!0,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:o};p=new XRWebGLLayer(r,n,q),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),h=new io(p.framebufferWidth,p.framebufferHeight,{format:ni,type:_r,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil})}else{let q=null,se=null,ce=null;y.depth&&(ce=y.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,q=y.stencil?fs:jr,se=y.stencil?$r:sr);const he={colorFormat:n.RGBA8,depthFormat:ce,scaleFactor:o};d=new XRWebGLBinding(r,n),f=d.createProjectionLayer(he),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),h=new io(f.textureWidth,f.textureHeight,{format:ni,type:_r,depthTexture:new iy(f.textureWidth,f.textureHeight,se,void 0,void 0,void 0,void 0,void 0,void 0,q),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0});const Ae=e.properties.get(h);Ae.__ignoreDepthValues=f.ignoreDepthValues}h.isXRRenderTarget=!0,this.setFoveation(l),u=null,s=await r.requestReferenceSpace(a),Z.setContext(r),Z.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function P(W){for(let q=0;q<W.removed.length;q++){const se=W.removed[q],ce=m.indexOf(se);ce>=0&&(m[ce]=null,v[ce].disconnect(se))}for(let q=0;q<W.added.length;q++){const se=W.added[q];let ce=m.indexOf(se);if(ce===-1){for(let Ae=0;Ae<v.length;Ae++)if(Ae>=m.length){m.push(se),ce=Ae;break}else if(m[Ae]===null){m[Ae]=se,ce=Ae;break}if(ce===-1)break}const he=v[ce];he&&he.connect(se)}}const O=new k,X=new k;function Y(W,q,se){O.setFromMatrixPosition(q.matrixWorld),X.setFromMatrixPosition(se.matrixWorld);const ce=O.distanceTo(X),he=q.projectionMatrix.elements,Ae=se.projectionMatrix.elements,Te=he[14]/(he[10]-1),Se=he[14]/(he[10]+1),ze=(he[9]+1)/he[5],U=(he[9]-1)/he[5],en=(he[8]-1)/he[0],Ee=(Ae[8]+1)/Ae[0],Le=Te*en,ve=Te*Ee,mt=ce/(-en+Ee),ke=mt*-en;q.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(ke),W.translateZ(mt),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert();const C=Te+mt,S=Se+mt,H=Le-ke,ne=ve+(ce-ke),J=ze*Se/S*C,ie=U*Se/S*C;W.projectionMatrix.makePerspective(H,ne,J,ie,C,S),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}function N(W,q){q===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(q.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(r===null)return;E.near=M.near=T.near=W.near,E.far=M.far=T.far=W.far,(A!==E.near||F!==E.far)&&(r.updateRenderState({depthNear:E.near,depthFar:E.far}),A=E.near,F=E.far);const q=W.parent,se=E.cameras;N(E,q);for(let ce=0;ce<se.length;ce++)N(se[ce],q);se.length===2?Y(E,T,M):E.projectionMatrix.copy(T.projectionMatrix),I(W,E,q)};function I(W,q,se){se===null?W.matrix.copy(q.matrixWorld):(W.matrix.copy(se.matrixWorld),W.matrix.invert(),W.matrix.multiply(q.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(q.projectionMatrix),W.projectionMatrixInverse.copy(q.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=xa*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(W){l=W,f!==null&&(f.fixedFoveation=W),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=W)};let G=null;function j(W,q){if(c=q.getViewerPose(u||s),_=q,c!==null){const se=c.views;p!==null&&(e.setRenderTargetFramebuffer(h,p.framebuffer),e.setRenderTarget(h));let ce=!1;se.length!==E.cameras.length&&(E.cameras.length=0,ce=!0);for(let he=0;he<se.length;he++){const Ae=se[he];let Te=null;if(p!==null)Te=p.getViewport(Ae);else{const ze=d.getViewSubImage(f,Ae);Te=ze.viewport,he===0&&(e.setRenderTargetTextures(h,ze.colorTexture,f.ignoreDepthValues?void 0:ze.depthStencilTexture),e.setRenderTarget(h))}let Se=L[he];Se===void 0&&(Se=new kn,Se.layers.enable(he),Se.viewport=new zt,L[he]=Se),Se.matrix.fromArray(Ae.transform.matrix),Se.matrix.decompose(Se.position,Se.quaternion,Se.scale),Se.projectionMatrix.fromArray(Ae.projectionMatrix),Se.projectionMatrixInverse.copy(Se.projectionMatrix).invert(),Se.viewport.set(Te.x,Te.y,Te.width,Te.height),he===0&&(E.matrix.copy(Se.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),ce===!0&&E.cameras.push(Se)}}for(let se=0;se<v.length;se++){const ce=m[se],he=v[se];ce!==null&&he!==void 0&&he.update(ce,q,u||s)}G&&G(W,q),q.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:q}),_=null}const Z=new ny;Z.setAnimationLoop(j),this.setAnimationLoop=function(W){G=W},this.dispose=function(){}}}function cb(t,e){function n(g,h){g.matrixAutoUpdate===!0&&g.updateMatrix(),h.value.copy(g.matrix)}function i(g,h){h.color.getRGB(g.fogColor.value,Q1(t)),h.isFog?(g.fogNear.value=h.near,g.fogFar.value=h.far):h.isFogExp2&&(g.fogDensity.value=h.density)}function r(g,h,v,m,x){h.isMeshBasicMaterial||h.isMeshLambertMaterial?o(g,h):h.isMeshToonMaterial?(o(g,h),d(g,h)):h.isMeshPhongMaterial?(o(g,h),c(g,h)):h.isMeshStandardMaterial?(o(g,h),f(g,h),h.isMeshPhysicalMaterial&&p(g,h,x)):h.isMeshMatcapMaterial?(o(g,h),_(g,h)):h.isMeshDepthMaterial?o(g,h):h.isMeshDistanceMaterial?(o(g,h),y(g,h)):h.isMeshNormalMaterial?o(g,h):h.isLineBasicMaterial?(s(g,h),h.isLineDashedMaterial&&a(g,h)):h.isPointsMaterial?l(g,h,v,m):h.isSpriteMaterial?u(g,h):h.isShadowMaterial?(g.color.value.copy(h.color),g.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function o(g,h){g.opacity.value=h.opacity,h.color&&g.diffuse.value.copy(h.color),h.emissive&&g.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(g.map.value=h.map,n(h.map,g.mapTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,n(h.alphaMap,g.alphaMapTransform)),h.bumpMap&&(g.bumpMap.value=h.bumpMap,n(h.bumpMap,g.bumpMapTransform),g.bumpScale.value=h.bumpScale,h.side===_n&&(g.bumpScale.value*=-1)),h.normalMap&&(g.normalMap.value=h.normalMap,n(h.normalMap,g.normalMapTransform),g.normalScale.value.copy(h.normalScale),h.side===_n&&g.normalScale.value.negate()),h.displacementMap&&(g.displacementMap.value=h.displacementMap,n(h.displacementMap,g.displacementMapTransform),g.displacementScale.value=h.displacementScale,g.displacementBias.value=h.displacementBias),h.emissiveMap&&(g.emissiveMap.value=h.emissiveMap,n(h.emissiveMap,g.emissiveMapTransform)),h.specularMap&&(g.specularMap.value=h.specularMap,n(h.specularMap,g.specularMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest);const v=e.get(h).envMap;if(v&&(g.envMap.value=v,g.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=h.reflectivity,g.ior.value=h.ior,g.refractionRatio.value=h.refractionRatio),h.lightMap){g.lightMap.value=h.lightMap;const m=t._useLegacyLights===!0?Math.PI:1;g.lightMapIntensity.value=h.lightMapIntensity*m,n(h.lightMap,g.lightMapTransform)}h.aoMap&&(g.aoMap.value=h.aoMap,g.aoMapIntensity.value=h.aoMapIntensity,n(h.aoMap,g.aoMapTransform))}function s(g,h){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,h.map&&(g.map.value=h.map,n(h.map,g.mapTransform))}function a(g,h){g.dashSize.value=h.dashSize,g.totalSize.value=h.dashSize+h.gapSize,g.scale.value=h.scale}function l(g,h,v,m){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,g.size.value=h.size*v,g.scale.value=m*.5,h.map&&(g.map.value=h.map,n(h.map,g.uvTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,n(h.alphaMap,g.alphaMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest)}function u(g,h){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,g.rotation.value=h.rotation,h.map&&(g.map.value=h.map,n(h.map,g.mapTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,n(h.alphaMap,g.alphaMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest)}function c(g,h){g.specular.value.copy(h.specular),g.shininess.value=Math.max(h.shininess,1e-4)}function d(g,h){h.gradientMap&&(g.gradientMap.value=h.gradientMap)}function f(g,h){g.metalness.value=h.metalness,h.metalnessMap&&(g.metalnessMap.value=h.metalnessMap,n(h.metalnessMap,g.metalnessMapTransform)),g.roughness.value=h.roughness,h.roughnessMap&&(g.roughnessMap.value=h.roughnessMap,n(h.roughnessMap,g.roughnessMapTransform)),e.get(h).envMap&&(g.envMapIntensity.value=h.envMapIntensity)}function p(g,h,v){g.ior.value=h.ior,h.sheen>0&&(g.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),g.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(g.sheenColorMap.value=h.sheenColorMap,n(h.sheenColorMap,g.sheenColorMapTransform)),h.sheenRoughnessMap&&(g.sheenRoughnessMap.value=h.sheenRoughnessMap,n(h.sheenRoughnessMap,g.sheenRoughnessMapTransform))),h.clearcoat>0&&(g.clearcoat.value=h.clearcoat,g.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(g.clearcoatMap.value=h.clearcoatMap,n(h.clearcoatMap,g.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,n(h.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(g.clearcoatNormalMap.value=h.clearcoatNormalMap,n(h.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===_n&&g.clearcoatNormalScale.value.negate())),h.iridescence>0&&(g.iridescence.value=h.iridescence,g.iridescenceIOR.value=h.iridescenceIOR,g.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(g.iridescenceMap.value=h.iridescenceMap,n(h.iridescenceMap,g.iridescenceMapTransform)),h.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=h.iridescenceThicknessMap,n(h.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),h.transmission>0&&(g.transmission.value=h.transmission,g.transmissionSamplerMap.value=v.texture,g.transmissionSamplerSize.value.set(v.width,v.height),h.transmissionMap&&(g.transmissionMap.value=h.transmissionMap,n(h.transmissionMap,g.transmissionMapTransform)),g.thickness.value=h.thickness,h.thicknessMap&&(g.thicknessMap.value=h.thicknessMap,n(h.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=h.attenuationDistance,g.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(g.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(g.anisotropyMap.value=h.anisotropyMap,n(h.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=h.specularIntensity,g.specularColor.value.copy(h.specularColor),h.specularColorMap&&(g.specularColorMap.value=h.specularColorMap,n(h.specularColorMap,g.specularColorMapTransform)),h.specularIntensityMap&&(g.specularIntensityMap.value=h.specularIntensityMap,n(h.specularIntensityMap,g.specularIntensityMapTransform))}function _(g,h){h.matcap&&(g.matcap.value=h.matcap)}function y(g,h){const v=e.get(h).light;g.referencePosition.value.setFromMatrixPosition(v.matrixWorld),g.nearDistance.value=v.shadow.camera.near,g.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function fb(t,e,n,i){let r={},o={},s=[];const a=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(v,m){const x=m.program;i.uniformBlockBinding(v,x)}function u(v,m){let x=r[v.id];x===void 0&&(_(v),x=c(v),r[v.id]=x,v.addEventListener("dispose",g));const R=m.program;i.updateUBOMapping(v,R);const T=e.render.frame;o[v.id]!==T&&(f(v),o[v.id]=T)}function c(v){const m=d();v.__bindingPointIndex=m;const x=t.createBuffer(),R=v.__size,T=v.usage;return t.bindBuffer(t.UNIFORM_BUFFER,x),t.bufferData(t.UNIFORM_BUFFER,R,T),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,m,x),x}function d(){for(let v=0;v<a;v++)if(s.indexOf(v)===-1)return s.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){const m=r[v.id],x=v.uniforms,R=v.__cache;t.bindBuffer(t.UNIFORM_BUFFER,m);for(let T=0,M=x.length;T<M;T++){const L=Array.isArray(x[T])?x[T]:[x[T]];for(let E=0,A=L.length;E<A;E++){const F=L[E];if(p(F,T,E,R)===!0){const $=F.__offset,te=Array.isArray(F.value)?F.value:[F.value];let P=0;for(let O=0;O<te.length;O++){const X=te[O],Y=y(X);typeof X=="number"||typeof X=="boolean"?(F.__data[0]=X,t.bufferSubData(t.UNIFORM_BUFFER,$+P,F.__data)):X.isMatrix3?(F.__data[0]=X.elements[0],F.__data[1]=X.elements[1],F.__data[2]=X.elements[2],F.__data[3]=0,F.__data[4]=X.elements[3],F.__data[5]=X.elements[4],F.__data[6]=X.elements[5],F.__data[7]=0,F.__data[8]=X.elements[6],F.__data[9]=X.elements[7],F.__data[10]=X.elements[8],F.__data[11]=0):(X.toArray(F.__data,P),P+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,$,F.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(v,m,x,R){const T=v.value,M=m+"_"+x;if(R[M]===void 0)return typeof T=="number"||typeof T=="boolean"?R[M]=T:R[M]=T.clone(),!0;{const L=R[M];if(typeof T=="number"||typeof T=="boolean"){if(L!==T)return R[M]=T,!0}else if(L.equals(T)===!1)return L.copy(T),!0}return!1}function _(v){const m=v.uniforms;let x=0;const R=16;for(let M=0,L=m.length;M<L;M++){const E=Array.isArray(m[M])?m[M]:[m[M]];for(let A=0,F=E.length;A<F;A++){const $=E[A],te=Array.isArray($.value)?$.value:[$.value];for(let P=0,O=te.length;P<O;P++){const X=te[P],Y=y(X),N=x%R;N!==0&&R-N<Y.boundary&&(x+=R-N),$.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),$.__offset=x,x+=Y.storage}}}const T=x%R;return T>0&&(x+=R-T),v.__size=x,v.__cache={},this}function y(v){const m={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(m.boundary=4,m.storage=4):v.isVector2?(m.boundary=8,m.storage=8):v.isVector3||v.isColor?(m.boundary=16,m.storage=12):v.isVector4?(m.boundary=16,m.storage=16):v.isMatrix3?(m.boundary=48,m.storage=48):v.isMatrix4?(m.boundary=64,m.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),m}function g(v){const m=v.target;m.removeEventListener("dispose",g);const x=s.indexOf(m.__bindingPointIndex);s.splice(x,1),t.deleteBuffer(r[m.id]),delete r[m.id],delete o[m.id]}function h(){for(const v in r)t.deleteBuffer(r[v]);s=[],r={},o={}}return{bind:l,update:u,dispose:h}}class uy{constructor(e={}){const{canvas:n=sT(),context:i=null,depth:r=!0,stencil:o=!0,alpha:s=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let f;i!==null?f=i.getContextAttributes().alpha:f=s;const p=new Uint32Array(4),_=new Int32Array(4);let y=null,g=null;const h=[],v=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ht,this._useLegacyLights=!1,this.toneMapping=vr,this.toneMappingExposure=1;const m=this;let x=!1,R=0,T=0,M=null,L=-1,E=null;const A=new zt,F=new zt;let $=null;const te=new rt(0);let P=0,O=n.width,X=n.height,Y=1,N=null,I=null;const G=new zt(0,0,O,X),j=new zt(0,0,O,X);let Z=!1;const W=new ty;let q=!1,se=!1,ce=null;const he=new Vt,Ae=new Ke,Te=new k,Se={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ze(){return M===null?Y:1}let U=i;function en(w,D){for(let z=0;z<w.length;z++){const V=w[z],B=n.getContext(V,D);if(B!==null)return B}return null}try{const w={alpha:!0,depth:r,stencil:o,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${rp}`),n.addEventListener("webglcontextlost",re,!1),n.addEventListener("webglcontextrestored",b,!1),n.addEventListener("webglcontextcreationerror",ae,!1),U===null){const D=["webgl2","webgl","experimental-webgl"];if(m.isWebGL1Renderer===!0&&D.shift(),U=en(D,w),U===null)throw en(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&U instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),U.getShaderPrecisionFormat===void 0&&(U.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Ee,Le,ve,mt,ke,C,S,H,ne,J,ie,_e,ue,pe,Ce,Be,K,nt,Xe,Pe,xe,me,Ue,Je;function xt(){Ee=new SC(U),Le=new pC(U,Ee,e),Ee.init(Le),me=new sb(U,Ee,Le),ve=new rb(U,Ee,Le),mt=new TC(U),ke=new WR,C=new ob(U,Ee,ve,ke,Le,me,mt),S=new gC(m),H=new xC(m),ne=new LT(U,Le),Ue=new dC(U,Ee,ne,Le),J=new EC(U,ne,mt,Ue),ie=new RC(U,J,ne,mt),Xe=new CC(U,Le,C),Be=new mC(ke),_e=new VR(m,S,H,Ee,Le,Ue,Be),ue=new cb(m,ke),pe=new $R,Ce=new QR(Ee,Le),nt=new fC(m,S,H,ve,ie,f,l),K=new ib(m,ie,Le),Je=new fb(U,mt,Le,ve),Pe=new hC(U,Ee,mt,Le),xe=new MC(U,Ee,mt,Le),mt.programs=_e.programs,m.capabilities=Le,m.extensions=Ee,m.properties=ke,m.renderLists=pe,m.shadowMap=K,m.state=ve,m.info=mt}xt();const Ge=new ub(m,U);this.xr=Ge,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const w=Ee.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Ee.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(w){w!==void 0&&(Y=w,this.setSize(O,X,!1))},this.getSize=function(w){return w.set(O,X)},this.setSize=function(w,D,z=!0){if(Ge.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=w,X=D,n.width=Math.floor(w*Y),n.height=Math.floor(D*Y),z===!0&&(n.style.width=w+"px",n.style.height=D+"px"),this.setViewport(0,0,w,D)},this.getDrawingBufferSize=function(w){return w.set(O*Y,X*Y).floor()},this.setDrawingBufferSize=function(w,D,z){O=w,X=D,Y=z,n.width=Math.floor(w*z),n.height=Math.floor(D*z),this.setViewport(0,0,w,D)},this.getCurrentViewport=function(w){return w.copy(A)},this.getViewport=function(w){return w.copy(G)},this.setViewport=function(w,D,z,V){w.isVector4?G.set(w.x,w.y,w.z,w.w):G.set(w,D,z,V),ve.viewport(A.copy(G).multiplyScalar(Y).floor())},this.getScissor=function(w){return w.copy(j)},this.setScissor=function(w,D,z,V){w.isVector4?j.set(w.x,w.y,w.z,w.w):j.set(w,D,z,V),ve.scissor(F.copy(j).multiplyScalar(Y).floor())},this.getScissorTest=function(){return Z},this.setScissorTest=function(w){ve.setScissorTest(Z=w)},this.setOpaqueSort=function(w){N=w},this.setTransparentSort=function(w){I=w},this.getClearColor=function(w){return w.copy(nt.getClearColor())},this.setClearColor=function(){nt.setClearColor.apply(nt,arguments)},this.getClearAlpha=function(){return nt.getClearAlpha()},this.setClearAlpha=function(){nt.setClearAlpha.apply(nt,arguments)},this.clear=function(w=!0,D=!0,z=!0){let V=0;if(w){let B=!1;if(M!==null){const fe=M.texture.format;B=fe===H1||fe===B1||fe===k1}if(B){const fe=M.texture.type,ye=fe===_r||fe===sr||fe===op||fe===$r||fe===F1||fe===O1,we=nt.getClearColor(),be=nt.getClearAlpha(),He=we.r,Ne=we.g,De=we.b;ye?(p[0]=He,p[1]=Ne,p[2]=De,p[3]=be,U.clearBufferuiv(U.COLOR,0,p)):(_[0]=He,_[1]=Ne,_[2]=De,_[3]=be,U.clearBufferiv(U.COLOR,0,_))}else V|=U.COLOR_BUFFER_BIT}D&&(V|=U.DEPTH_BUFFER_BIT),z&&(V|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",re,!1),n.removeEventListener("webglcontextrestored",b,!1),n.removeEventListener("webglcontextcreationerror",ae,!1),pe.dispose(),Ce.dispose(),ke.dispose(),S.dispose(),H.dispose(),ie.dispose(),Ue.dispose(),Je.dispose(),_e.dispose(),Ge.dispose(),Ge.removeEventListener("sessionstart",tn),Ge.removeEventListener("sessionend",at),ce&&(ce.dispose(),ce=null),nn.stop()};function re(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),x=!0}function b(){console.log("THREE.WebGLRenderer: Context Restored."),x=!1;const w=mt.autoReset,D=K.enabled,z=K.autoUpdate,V=K.needsUpdate,B=K.type;xt(),mt.autoReset=w,K.enabled=D,K.autoUpdate=z,K.needsUpdate=V,K.type=B}function ae(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function le(w){const D=w.target;D.removeEventListener("dispose",le),Re(D)}function Re(w){Me(w),ke.remove(w)}function Me(w){const D=ke.get(w).programs;D!==void 0&&(D.forEach(function(z){_e.releaseProgram(z)}),w.isShaderMaterial&&_e.releaseShaderCache(w))}this.renderBufferDirect=function(w,D,z,V,B,fe){D===null&&(D=Se);const ye=B.isMesh&&B.matrixWorld.determinant()<0,we=Oy(w,D,z,V,B);ve.setMaterial(V,ye);let be=z.index,He=1;if(V.wireframe===!0){if(be=J.getWireframeAttribute(z),be===void 0)return;He=2}const Ne=z.drawRange,De=z.attributes.position;let Mt=Ne.start*He,yn=(Ne.start+Ne.count)*He;fe!==null&&(Mt=Math.max(Mt,fe.start*He),yn=Math.min(yn,(fe.start+fe.count)*He)),be!==null?(Mt=Math.max(Mt,0),yn=Math.min(yn,be.count)):De!=null&&(Mt=Math.max(Mt,0),yn=Math.min(yn,De.count));const It=yn-Mt;if(It<0||It===1/0)return;Ue.setup(B,V,we,z,be);let Mi,gt=Pe;if(be!==null&&(Mi=ne.get(be),gt=xe,gt.setIndex(Mi)),B.isMesh)V.wireframe===!0?(ve.setLineWidth(V.wireframeLinewidth*ze()),gt.setMode(U.LINES)):gt.setMode(U.TRIANGLES);else if(B.isLine){let Ve=V.linewidth;Ve===void 0&&(Ve=1),ve.setLineWidth(Ve*ze()),B.isLineSegments?gt.setMode(U.LINES):B.isLineLoop?gt.setMode(U.LINE_LOOP):gt.setMode(U.LINE_STRIP)}else B.isPoints?gt.setMode(U.POINTS):B.isSprite&&gt.setMode(U.TRIANGLES);if(B.isBatchedMesh)gt.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else if(B.isInstancedMesh)gt.renderInstances(Mt,It,B.count);else if(z.isInstancedBufferGeometry){const Ve=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,_c=Math.min(z.instanceCount,Ve);gt.renderInstances(Mt,It,_c)}else gt.render(Mt,It)};function ot(w,D,z){w.transparent===!0&&w.side===Ii&&w.forceSinglePass===!1?(w.side=_n,w.needsUpdate=!0,Ua(w,D,z),w.side=Er,w.needsUpdate=!0,Ua(w,D,z),w.side=Ii):Ua(w,D,z)}this.compile=function(w,D,z=null){z===null&&(z=w),g=Ce.get(z),g.init(),v.push(g),z.traverseVisible(function(B){B.isLight&&B.layers.test(D.layers)&&(g.pushLight(B),B.castShadow&&g.pushShadow(B))}),w!==z&&w.traverseVisible(function(B){B.isLight&&B.layers.test(D.layers)&&(g.pushLight(B),B.castShadow&&g.pushShadow(B))}),g.setupLights(m._useLegacyLights);const V=new Set;return w.traverse(function(B){const fe=B.material;if(fe)if(Array.isArray(fe))for(let ye=0;ye<fe.length;ye++){const we=fe[ye];ot(we,z,B),V.add(we)}else ot(fe,z,B),V.add(fe)}),v.pop(),g=null,V},this.compileAsync=function(w,D,z=null){const V=this.compile(w,D,z);return new Promise(B=>{function fe(){if(V.forEach(function(ye){ke.get(ye).currentProgram.isReady()&&V.delete(ye)}),V.size===0){B(w);return}setTimeout(fe,10)}Ee.get("KHR_parallel_shader_compile")!==null?fe():setTimeout(fe,10)})};let st=null;function Nt(w){st&&st(w)}function tn(){nn.stop()}function at(){nn.start()}const nn=new ny;nn.setAnimationLoop(Nt),typeof self<"u"&&nn.setContext(self),this.setAnimationLoop=function(w){st=w,Ge.setAnimationLoop(w),w===null?nn.stop():nn.start()},Ge.addEventListener("sessionstart",tn),Ge.addEventListener("sessionend",at),this.render=function(w,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(x===!0)return;w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),Ge.enabled===!0&&Ge.isPresenting===!0&&(Ge.cameraAutoUpdate===!0&&Ge.updateCamera(D),D=Ge.getCamera()),w.isScene===!0&&w.onBeforeRender(m,w,D,M),g=Ce.get(w,v.length),g.init(),v.push(g),he.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),W.setFromProjectionMatrix(he),se=this.localClippingEnabled,q=Be.init(this.clippingPlanes,se),y=pe.get(w,h.length),y.init(),h.push(y),ui(w,D,0,m.sortObjects),y.finish(),m.sortObjects===!0&&y.sort(N,I),this.info.render.frame++,q===!0&&Be.beginShadows();const z=g.state.shadowsArray;if(K.render(z,w,D),q===!0&&Be.endShadows(),this.info.autoReset===!0&&this.info.reset(),nt.render(y,w),g.setupLights(m._useLegacyLights),D.isArrayCamera){const V=D.cameras;for(let B=0,fe=V.length;B<fe;B++){const ye=V[B];xp(y,w,ye,ye.viewport)}}else xp(y,w,D);M!==null&&(C.updateMultisampleRenderTarget(M),C.updateRenderTargetMipmap(M)),w.isScene===!0&&w.onAfterRender(m,w,D),Ue.resetDefaultState(),L=-1,E=null,v.pop(),v.length>0?g=v[v.length-1]:g=null,h.pop(),h.length>0?y=h[h.length-1]:y=null};function ui(w,D,z,V){if(w.visible===!1)return;if(w.layers.test(D.layers)){if(w.isGroup)z=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(D);else if(w.isLight)g.pushLight(w),w.castShadow&&g.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||W.intersectsSprite(w)){V&&Te.setFromMatrixPosition(w.matrixWorld).applyMatrix4(he);const ye=ie.update(w),we=w.material;we.visible&&y.push(w,ye,we,z,Te.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||W.intersectsObject(w))){const ye=ie.update(w),we=w.material;if(V&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Te.copy(w.boundingSphere.center)):(ye.boundingSphere===null&&ye.computeBoundingSphere(),Te.copy(ye.boundingSphere.center)),Te.applyMatrix4(w.matrixWorld).applyMatrix4(he)),Array.isArray(we)){const be=ye.groups;for(let He=0,Ne=be.length;He<Ne;He++){const De=be[He],Mt=we[De.materialIndex];Mt&&Mt.visible&&y.push(w,ye,Mt,z,Te.z,De)}}else we.visible&&y.push(w,ye,we,z,Te.z,null)}}const fe=w.children;for(let ye=0,we=fe.length;ye<we;ye++)ui(fe[ye],D,z,V)}function xp(w,D,z,V){const B=w.opaque,fe=w.transmissive,ye=w.transparent;g.setupLightsView(z),q===!0&&Be.setGlobalState(m.clippingPlanes,z),fe.length>0&&Fy(B,fe,D,z),V&&ve.viewport(A.copy(V)),B.length>0&&Da(B,D,z),fe.length>0&&Da(fe,D,z),ye.length>0&&Da(ye,D,z),ve.buffers.depth.setTest(!0),ve.buffers.depth.setMask(!0),ve.buffers.color.setMask(!0),ve.setPolygonOffset(!1)}function Fy(w,D,z,V){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;const fe=Le.isWebGL2;ce===null&&(ce=new io(1,1,{generateMipmaps:!0,type:Ee.has("EXT_color_buffer_half_float")?ya:_r,minFilter:_a,samples:fe?4:0})),m.getDrawingBufferSize(Ae),fe?ce.setSize(Ae.x,Ae.y):ce.setSize(Au(Ae.x),Au(Ae.y));const ye=m.getRenderTarget();m.setRenderTarget(ce),m.getClearColor(te),P=m.getClearAlpha(),P<1&&m.setClearColor(16777215,.5),m.clear();const we=m.toneMapping;m.toneMapping=vr,Da(w,z,V),C.updateMultisampleRenderTarget(ce),C.updateRenderTargetMipmap(ce);let be=!1;for(let He=0,Ne=D.length;He<Ne;He++){const De=D[He],Mt=De.object,yn=De.geometry,It=De.material,Mi=De.group;if(It.side===Ii&&Mt.layers.test(V.layers)){const gt=It.side;It.side=_n,It.needsUpdate=!0,Sp(Mt,z,V,yn,It,Mi),It.side=gt,It.needsUpdate=!0,be=!0}}be===!0&&(C.updateMultisampleRenderTarget(ce),C.updateRenderTargetMipmap(ce)),m.setRenderTarget(ye),m.setClearColor(te,P),m.toneMapping=we}function Da(w,D,z){const V=D.isScene===!0?D.overrideMaterial:null;for(let B=0,fe=w.length;B<fe;B++){const ye=w[B],we=ye.object,be=ye.geometry,He=V===null?ye.material:V,Ne=ye.group;we.layers.test(z.layers)&&Sp(we,D,z,be,He,Ne)}}function Sp(w,D,z,V,B,fe){w.onBeforeRender(m,D,z,V,B,fe),w.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),B.onBeforeRender(m,D,z,V,w,fe),B.transparent===!0&&B.side===Ii&&B.forceSinglePass===!1?(B.side=_n,B.needsUpdate=!0,m.renderBufferDirect(z,D,V,B,w,fe),B.side=Er,B.needsUpdate=!0,m.renderBufferDirect(z,D,V,B,w,fe),B.side=Ii):m.renderBufferDirect(z,D,V,B,w,fe),w.onAfterRender(m,D,z,V,B,fe)}function Ua(w,D,z){D.isScene!==!0&&(D=Se);const V=ke.get(w),B=g.state.lights,fe=g.state.shadowsArray,ye=B.state.version,we=_e.getParameters(w,B.state,fe,D,z),be=_e.getProgramCacheKey(we);let He=V.programs;V.environment=w.isMeshStandardMaterial?D.environment:null,V.fog=D.fog,V.envMap=(w.isMeshStandardMaterial?H:S).get(w.envMap||V.environment),He===void 0&&(w.addEventListener("dispose",le),He=new Map,V.programs=He);let Ne=He.get(be);if(Ne!==void 0){if(V.currentProgram===Ne&&V.lightsStateVersion===ye)return Mp(w,we),Ne}else we.uniforms=_e.getUniforms(w),w.onBuild(z,we,m),w.onBeforeCompile(we,m),Ne=_e.acquireProgram(we,be),He.set(be,Ne),V.uniforms=we.uniforms;const De=V.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(De.clippingPlanes=Be.uniform),Mp(w,we),V.needsLights=By(w),V.lightsStateVersion=ye,V.needsLights&&(De.ambientLightColor.value=B.state.ambient,De.lightProbe.value=B.state.probe,De.directionalLights.value=B.state.directional,De.directionalLightShadows.value=B.state.directionalShadow,De.spotLights.value=B.state.spot,De.spotLightShadows.value=B.state.spotShadow,De.rectAreaLights.value=B.state.rectArea,De.ltc_1.value=B.state.rectAreaLTC1,De.ltc_2.value=B.state.rectAreaLTC2,De.pointLights.value=B.state.point,De.pointLightShadows.value=B.state.pointShadow,De.hemisphereLights.value=B.state.hemi,De.directionalShadowMap.value=B.state.directionalShadowMap,De.directionalShadowMatrix.value=B.state.directionalShadowMatrix,De.spotShadowMap.value=B.state.spotShadowMap,De.spotLightMatrix.value=B.state.spotLightMatrix,De.spotLightMap.value=B.state.spotLightMap,De.pointShadowMap.value=B.state.pointShadowMap,De.pointShadowMatrix.value=B.state.pointShadowMatrix),V.currentProgram=Ne,V.uniformsList=null,Ne}function Ep(w){if(w.uniformsList===null){const D=w.currentProgram.getUniforms();w.uniformsList=Wl.seqWithValue(D.seq,w.uniforms)}return w.uniformsList}function Mp(w,D){const z=ke.get(w);z.outputColorSpace=D.outputColorSpace,z.batching=D.batching,z.instancing=D.instancing,z.instancingColor=D.instancingColor,z.skinning=D.skinning,z.morphTargets=D.morphTargets,z.morphNormals=D.morphNormals,z.morphColors=D.morphColors,z.morphTargetsCount=D.morphTargetsCount,z.numClippingPlanes=D.numClippingPlanes,z.numIntersection=D.numClipIntersection,z.vertexAlphas=D.vertexAlphas,z.vertexTangents=D.vertexTangents,z.toneMapping=D.toneMapping}function Oy(w,D,z,V,B){D.isScene!==!0&&(D=Se),C.resetTextureUnits();const fe=D.fog,ye=V.isMeshStandardMaterial?D.environment:null,we=M===null?m.outputColorSpace:M.isXRRenderTarget===!0?M.texture.colorSpace:Gi,be=(V.isMeshStandardMaterial?H:S).get(V.envMap||ye),He=V.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Ne=!!z.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),De=!!z.morphAttributes.position,Mt=!!z.morphAttributes.normal,yn=!!z.morphAttributes.color;let It=vr;V.toneMapped&&(M===null||M.isXRRenderTarget===!0)&&(It=m.toneMapping);const Mi=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,gt=Mi!==void 0?Mi.length:0,Ve=ke.get(V),_c=g.state.lights;if(q===!0&&(se===!0||w!==E)){const In=w===E&&V.id===L;Be.setState(V,w,In)}let St=!1;V.version===Ve.__version?(Ve.needsLights&&Ve.lightsStateVersion!==_c.state.version||Ve.outputColorSpace!==we||B.isBatchedMesh&&Ve.batching===!1||!B.isBatchedMesh&&Ve.batching===!0||B.isInstancedMesh&&Ve.instancing===!1||!B.isInstancedMesh&&Ve.instancing===!0||B.isSkinnedMesh&&Ve.skinning===!1||!B.isSkinnedMesh&&Ve.skinning===!0||B.isInstancedMesh&&Ve.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Ve.instancingColor===!1&&B.instanceColor!==null||Ve.envMap!==be||V.fog===!0&&Ve.fog!==fe||Ve.numClippingPlanes!==void 0&&(Ve.numClippingPlanes!==Be.numPlanes||Ve.numIntersection!==Be.numIntersection)||Ve.vertexAlphas!==He||Ve.vertexTangents!==Ne||Ve.morphTargets!==De||Ve.morphNormals!==Mt||Ve.morphColors!==yn||Ve.toneMapping!==It||Le.isWebGL2===!0&&Ve.morphTargetsCount!==gt)&&(St=!0):(St=!0,Ve.__version=V.version);let Cr=Ve.currentProgram;St===!0&&(Cr=Ua(V,D,B));let Tp=!1,Ts=!1,yc=!1;const Xt=Cr.getUniforms(),Rr=Ve.uniforms;if(ve.useProgram(Cr.program)&&(Tp=!0,Ts=!0,yc=!0),V.id!==L&&(L=V.id,Ts=!0),Tp||E!==w){Xt.setValue(U,"projectionMatrix",w.projectionMatrix),Xt.setValue(U,"viewMatrix",w.matrixWorldInverse);const In=Xt.map.cameraPosition;In!==void 0&&In.setValue(U,Te.setFromMatrixPosition(w.matrixWorld)),Le.logarithmicDepthBuffer&&Xt.setValue(U,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&Xt.setValue(U,"isOrthographic",w.isOrthographicCamera===!0),E!==w&&(E=w,Ts=!0,yc=!0)}if(B.isSkinnedMesh){Xt.setOptional(U,B,"bindMatrix"),Xt.setOptional(U,B,"bindMatrixInverse");const In=B.skeleton;In&&(Le.floatVertexTextures?(In.boneTexture===null&&In.computeBoneTexture(),Xt.setValue(U,"boneTexture",In.boneTexture,C)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}B.isBatchedMesh&&(Xt.setOptional(U,B,"batchingTexture"),Xt.setValue(U,"batchingTexture",B._matricesTexture,C));const xc=z.morphAttributes;if((xc.position!==void 0||xc.normal!==void 0||xc.color!==void 0&&Le.isWebGL2===!0)&&Xe.update(B,z,Cr),(Ts||Ve.receiveShadow!==B.receiveShadow)&&(Ve.receiveShadow=B.receiveShadow,Xt.setValue(U,"receiveShadow",B.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(Rr.envMap.value=be,Rr.flipEnvMap.value=be.isCubeTexture&&be.isRenderTargetTexture===!1?-1:1),Ts&&(Xt.setValue(U,"toneMappingExposure",m.toneMappingExposure),Ve.needsLights&&ky(Rr,yc),fe&&V.fog===!0&&ue.refreshFogUniforms(Rr,fe),ue.refreshMaterialUniforms(Rr,V,Y,X,ce),Wl.upload(U,Ep(Ve),Rr,C)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Wl.upload(U,Ep(Ve),Rr,C),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&Xt.setValue(U,"center",B.center),Xt.setValue(U,"modelViewMatrix",B.modelViewMatrix),Xt.setValue(U,"normalMatrix",B.normalMatrix),Xt.setValue(U,"modelMatrix",B.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const In=V.uniformsGroups;for(let Sc=0,Hy=In.length;Sc<Hy;Sc++)if(Le.isWebGL2){const wp=In[Sc];Je.update(wp,Cr),Je.bind(wp,Cr)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Cr}function ky(w,D){w.ambientLightColor.needsUpdate=D,w.lightProbe.needsUpdate=D,w.directionalLights.needsUpdate=D,w.directionalLightShadows.needsUpdate=D,w.pointLights.needsUpdate=D,w.pointLightShadows.needsUpdate=D,w.spotLights.needsUpdate=D,w.spotLightShadows.needsUpdate=D,w.rectAreaLights.needsUpdate=D,w.hemisphereLights.needsUpdate=D}function By(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(w,D,z){ke.get(w.texture).__webglTexture=D,ke.get(w.depthTexture).__webglTexture=z;const V=ke.get(w);V.__hasExternalTextures=!0,V.__hasExternalTextures&&(V.__autoAllocateDepthBuffer=z===void 0,V.__autoAllocateDepthBuffer||Ee.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(w,D){const z=ke.get(w);z.__webglFramebuffer=D,z.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(w,D=0,z=0){M=w,R=D,T=z;let V=!0,B=null,fe=!1,ye=!1;if(w){const be=ke.get(w);be.__useDefaultFramebuffer!==void 0?(ve.bindFramebuffer(U.FRAMEBUFFER,null),V=!1):be.__webglFramebuffer===void 0?C.setupRenderTarget(w):be.__hasExternalTextures&&C.rebindTextures(w,ke.get(w.texture).__webglTexture,ke.get(w.depthTexture).__webglTexture);const He=w.texture;(He.isData3DTexture||He.isDataArrayTexture||He.isCompressedArrayTexture)&&(ye=!0);const Ne=ke.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ne[D])?B=Ne[D][z]:B=Ne[D],fe=!0):Le.isWebGL2&&w.samples>0&&C.useMultisampledRTT(w)===!1?B=ke.get(w).__webglMultisampledFramebuffer:Array.isArray(Ne)?B=Ne[z]:B=Ne,A.copy(w.viewport),F.copy(w.scissor),$=w.scissorTest}else A.copy(G).multiplyScalar(Y).floor(),F.copy(j).multiplyScalar(Y).floor(),$=Z;if(ve.bindFramebuffer(U.FRAMEBUFFER,B)&&Le.drawBuffers&&V&&ve.drawBuffers(w,B),ve.viewport(A),ve.scissor(F),ve.setScissorTest($),fe){const be=ke.get(w.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+D,be.__webglTexture,z)}else if(ye){const be=ke.get(w.texture),He=D||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,be.__webglTexture,z||0,He)}L=-1},this.readRenderTargetPixels=function(w,D,z,V,B,fe,ye){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=ke.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ye!==void 0&&(we=we[ye]),we){ve.bindFramebuffer(U.FRAMEBUFFER,we);try{const be=w.texture,He=be.format,Ne=be.type;if(He!==ni&&me.convert(He)!==U.getParameter(U.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const De=Ne===ya&&(Ee.has("EXT_color_buffer_half_float")||Le.isWebGL2&&Ee.has("EXT_color_buffer_float"));if(Ne!==_r&&me.convert(Ne)!==U.getParameter(U.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ne===ar&&(Le.isWebGL2||Ee.has("OES_texture_float")||Ee.has("WEBGL_color_buffer_float")))&&!De){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=w.width-V&&z>=0&&z<=w.height-B&&U.readPixels(D,z,V,B,me.convert(He),me.convert(Ne),fe)}finally{const be=M!==null?ke.get(M).__webglFramebuffer:null;ve.bindFramebuffer(U.FRAMEBUFFER,be)}}},this.copyFramebufferToTexture=function(w,D,z=0){const V=Math.pow(2,-z),B=Math.floor(D.image.width*V),fe=Math.floor(D.image.height*V);C.setTexture2D(D,0),U.copyTexSubImage2D(U.TEXTURE_2D,z,0,0,w.x,w.y,B,fe),ve.unbindTexture()},this.copyTextureToTexture=function(w,D,z,V=0){const B=D.image.width,fe=D.image.height,ye=me.convert(z.format),we=me.convert(z.type);C.setTexture2D(z,0),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,z.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,z.unpackAlignment),D.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,V,w.x,w.y,B,fe,ye,we,D.image.data):D.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,V,w.x,w.y,D.mipmaps[0].width,D.mipmaps[0].height,ye,D.mipmaps[0].data):U.texSubImage2D(U.TEXTURE_2D,V,w.x,w.y,ye,we,D.image),V===0&&z.generateMipmaps&&U.generateMipmap(U.TEXTURE_2D),ve.unbindTexture()},this.copyTextureToTexture3D=function(w,D,z,V,B=0){if(m.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const fe=w.max.x-w.min.x+1,ye=w.max.y-w.min.y+1,we=w.max.z-w.min.z+1,be=me.convert(V.format),He=me.convert(V.type);let Ne;if(V.isData3DTexture)C.setTexture3D(V,0),Ne=U.TEXTURE_3D;else if(V.isDataArrayTexture||V.isCompressedArrayTexture)C.setTexture2DArray(V,0),Ne=U.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,V.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,V.unpackAlignment);const De=U.getParameter(U.UNPACK_ROW_LENGTH),Mt=U.getParameter(U.UNPACK_IMAGE_HEIGHT),yn=U.getParameter(U.UNPACK_SKIP_PIXELS),It=U.getParameter(U.UNPACK_SKIP_ROWS),Mi=U.getParameter(U.UNPACK_SKIP_IMAGES),gt=z.isCompressedTexture?z.mipmaps[B]:z.image;U.pixelStorei(U.UNPACK_ROW_LENGTH,gt.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,gt.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,w.min.x),U.pixelStorei(U.UNPACK_SKIP_ROWS,w.min.y),U.pixelStorei(U.UNPACK_SKIP_IMAGES,w.min.z),z.isDataTexture||z.isData3DTexture?U.texSubImage3D(Ne,B,D.x,D.y,D.z,fe,ye,we,be,He,gt.data):z.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),U.compressedTexSubImage3D(Ne,B,D.x,D.y,D.z,fe,ye,we,be,gt.data)):U.texSubImage3D(Ne,B,D.x,D.y,D.z,fe,ye,we,be,He,gt),U.pixelStorei(U.UNPACK_ROW_LENGTH,De),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Mt),U.pixelStorei(U.UNPACK_SKIP_PIXELS,yn),U.pixelStorei(U.UNPACK_SKIP_ROWS,It),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Mi),B===0&&V.generateMipmaps&&U.generateMipmap(Ne),ve.unbindTexture()},this.initTexture=function(w){w.isCubeTexture?C.setTextureCube(w,0):w.isData3DTexture?C.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?C.setTexture2DArray(w,0):C.setTexture2D(w,0),ve.unbindTexture()},this.resetState=function(){R=0,T=0,M=null,ve.reset(),Ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Fi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===sp?"display-p3":"srgb",n.unpackColorSpace=it.workingColorSpace===ac?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Ht?qr:G1}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===qr?Ht:Gi}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class db extends uy{}db.prototype.isWebGL1Renderer=!0;class hb extends Rn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}}class fc extends Wi{constructor(e=1,n=1,i=1,r=32,o=1,s=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:o,openEnded:s,thetaStart:a,thetaLength:l};const u=this;r=Math.floor(r),o=Math.floor(o);const c=[],d=[],f=[],p=[];let _=0;const y=[],g=i/2;let h=0;v(),s===!1&&(e>0&&m(!0),n>0&&m(!1)),this.setIndex(c),this.setAttribute("position",new Si(d,3)),this.setAttribute("normal",new Si(f,3)),this.setAttribute("uv",new Si(p,2));function v(){const x=new k,R=new k;let T=0;const M=(n-e)/i;for(let L=0;L<=o;L++){const E=[],A=L/o,F=A*(n-e)+e;for(let $=0;$<=r;$++){const te=$/r,P=te*l+a,O=Math.sin(P),X=Math.cos(P);R.x=F*O,R.y=-A*i+g,R.z=F*X,d.push(R.x,R.y,R.z),x.set(O,M,X).normalize(),f.push(x.x,x.y,x.z),p.push(te,1-A),E.push(_++)}y.push(E)}for(let L=0;L<r;L++)for(let E=0;E<o;E++){const A=y[E][L],F=y[E+1][L],$=y[E+1][L+1],te=y[E][L+1];c.push(A,F,te),c.push(F,$,te),T+=6}u.addGroup(h,T,0),h+=T}function m(x){const R=_,T=new Ke,M=new k;let L=0;const E=x===!0?e:n,A=x===!0?1:-1;for(let $=1;$<=r;$++)d.push(0,g*A,0),f.push(0,A,0),p.push(.5,.5),_++;const F=_;for(let $=0;$<=r;$++){const P=$/r*l+a,O=Math.cos(P),X=Math.sin(P);M.x=E*X,M.y=g*A,M.z=E*O,d.push(M.x,M.y,M.z),f.push(0,A,0),T.x=O*.5+.5,T.y=X*.5*A+.5,p.push(T.x,T.y),_++}for(let $=0;$<r;$++){const te=R+$,P=F+$;x===!0?c.push(P,P+1,te):c.push(P+1,P,te),L+=3}u.addGroup(h,L,x===!0?1:2),h+=L}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fc(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class pb{constructor(e,n,i=0,r=1/0){this.ray=new q1(e,n),this.near=i,this.far=r,this.camera=null,this.layers=new up,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}intersectObject(e,n=!0,i=[]){return jd(e,this,i,n),i.sort(_0),i}intersectObjects(e,n=!0,i=[]){for(let r=0,o=e.length;r<o;r++)jd(e[r],this,i,n);return i.sort(_0),i}}function _0(t,e){return t.distance-e.distance}function jd(t,e,n,i){if(t.layers.test(e.layers)&&t.raycast(e,n),i===!0){const r=t.children;for(let o=0,s=r.length;o<s;o++)jd(r[o],e,n,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:rp}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=rp);var gi=(t=>(t[t.simple=0]="simple",t[t.dynamic=1]="dynamic",t))(gi||{});const mb=()=>{const t={animations:[]},e=o=>{switch(o.type){case gi.simple:{if(typeof o.callback!="function"||typeof o.ticksDuration!="number"||o.ticksDuration<=0)return;break}case gi.dynamic:{if(typeof o.callback!="function"||typeof o.isEndedGetter!="function"||typeof o.isPossibleGetter!="function")return;break}default:{console.warn(`Cannot add animation ${JSON.stringify(o)} because animation type is incorrect.`);return}}t.animations.push(o)},n=o=>{t.animations=t.animations.filter(s=>s.id!==o)},i=()=>{t.animations=t.animations.filter(o=>{switch(o.type){case gi.simple:return o.tick<o.ticksDuration;case gi.dynamic:return!o.isEndedGetter()}})};return{animate:()=>{for(const o of t.animations)switch(o.type){case gi.simple:{o.tick<o.ticksDuration&&(o.callback({tick:o.tick,ticksDuration:o.ticksDuration}),o.tick++);break}case gi.dynamic:{o.isPossibleGetter()&&o.callback();break}}i()},addAnimation:e,clearAnimation:n,clearAllEndedAnimations:i}};var Q=(t=>(t[t.empty=0]="empty",t[t.square=1]="square",t[t.topLeftNarrowedge=2]="topLeftNarrowedge",t[t.topRightNarrowedge=3]="topRightNarrowedge",t[t.bottomRightNarrowedge=4]="bottomRightNarrowedge",t[t.bottomLeftNarrowedge=5]="bottomLeftNarrowedge",t[t.solidTopSquare=6]="solidTopSquare",t[t.solidRightSquare=7]="solidRightSquare",t[t.solidBottomSquare=8]="solidBottomSquare",t[t.solidLeftSquare=9]="solidLeftSquare",t[t.smoothTopLeftSquare=10]="smoothTopLeftSquare",t[t.smoothTopRightSquare=11]="smoothTopRightSquare",t[t.smoothBottomRightSquare=12]="smoothBottomRightSquare",t[t.smoothBottomLeftSquare=13]="smoothBottomLeftSquare",t))(Q||{});const gb=({maxSize:t})=>new Array(t.x).fill(!1).map(()=>new Array(t.y).fill(!1).map(()=>Q.empty)),vb=({walkableBoard:t})=>{var a,l,u,c;const e=[];for(let d=0;d<t.length;d++)for(let f=0;f<t[0].length;f++)t[d][f]===Q.square&&e.push({type:Q.square,x:d,y:f}),t[d][f]===Q.empty&&((a=t==null?void 0:t[d-1])!=null&&a[f]||(l=t==null?void 0:t[d-1])!=null&&l[f-1]||(u=t==null?void 0:t[d+1])!=null&&u[f]||(c=t==null?void 0:t[d+1])!=null&&c[f+1])&&e.push({type:Q.empty,x:d,y:f});const n=d=>{var f;return((f=e.find(p=>p.x===d.x-1&&p.y===d.y))==null?void 0:f.type)??Q.empty},i=d=>{var f;return((f=e.find(p=>p.x===d.x&&p.y===d.y-1))==null?void 0:f.type)??Q.empty},r=d=>{var f;return((f=e.find(p=>p.x===d.x+1&&p.y===d.y))==null?void 0:f.type)??Q.empty},o=d=>{var f;return((f=e.find(p=>p.x===d.x&&p.y===d.y+1))==null?void 0:f.type)??Q.empty},s=d=>[Q.smoothBottomLeftSquare,Q.smoothBottomRightSquare,Q.smoothTopLeftSquare,Q.smoothTopRightSquare].includes(d);for(const d of e){if(d.type===Q.square)continue;const f=o(d),p=n(d),_=i(d),y=r(d);f===Q.square&&p===Q.square&&_===Q.empty&&y===Q.empty&&(d.type=Q.topLeftNarrowedge),f===Q.square&&p===Q.empty&&_===Q.empty&&y===Q.square&&(d.type=Q.topRightNarrowedge),f===Q.empty&&p===Q.square&&_===Q.square&&y===Q.empty&&(d.type=Q.bottomLeftNarrowedge),f===Q.empty&&p===Q.empty&&_===Q.square&&y===Q.square&&(d.type=Q.bottomRightNarrowedge)}for(const d of e){if(d.type!==Q.square)continue;const f=o(d),p=n(d),_=i(d),y=r(d);f===Q.empty&&p===Q.square&&_===Q.empty&&y===Q.empty&&(d.type=Q.solidLeftSquare),f===Q.square&&p===Q.empty&&_===Q.empty&&y===Q.empty&&(d.type=Q.solidTopSquare),f===Q.empty&&p===Q.empty&&_===Q.empty&&y===Q.square&&(d.type=Q.solidRightSquare),f===Q.empty&&p===Q.empty&&_===Q.square&&y===Q.empty&&(d.type=Q.solidBottomSquare),f===Q.empty&&p===Q.empty&&(_===Q.square||s(_))&&(y===Q.square||s(y))&&(d.type=Q.smoothTopLeftSquare),f===Q.empty&&(p===Q.square||s(p))&&(_===Q.square||s(_))&&y===Q.empty&&(d.type=Q.smoothTopRightSquare),(f===Q.square||s(f))&&(p===Q.square||s(p))&&_===Q.empty&&y===Q.empty&&(d.type=Q.smoothBottomRightSquare),(f===Q.square||s(f))&&p===Q.empty&&_===Q.empty&&(y===Q.square||s(y))&&(d.type=Q.smoothBottomLeftSquare)}return e},_b=t=>{const{x:e,y:n}=t,i=[e+.5,n+.5,0,e-.5,n+.5,0,e-.5,n-.5,0],r=[e-.5,n-.5,0,e+.5,n-.5,0,e+.5,n+.5,0];return[...i,...r]},dp=(t,e,n,i)=>{const r=n.map((s,a)=>{if(a%3===0)return s-t;if(a%3===1)return s-e;if(a%3===2)return s}),o=[];for(let s=0;s<r.length;s+=3){const a=r.slice(s,s+3),[l,u]=a;if(l===void 0||u===void 0)return n;switch(i){case 90:{o.push(-u+t,l+e,0);break}case 180:{o.push(-l+t,-u+e,0);break}case 270:{o.push(u+t,-l+e,0);break}}}return o},Tl=(t,e)=>{const{x:n,y:i}=t,r=[n+.5,i+.5,0,n-.5,i+.5,0,n-.15,i+.35,0],o=[n-.15,i+.35,0,n-.5,i+.5,0,n-.35,i+.15,0],s=[n-.35,i+.15,0,n-.5,i+.5,0,n-.5,i-.5,0];return e?dp(n,i,[...r,...o,...s],e):[...r,...o,...s]},wl=(t,e)=>{const{x:n,y:i}=t,r=[n+.25,i+.5,0,n-.5,i+.5,0,n-.5,i-.5,0],o=[n-.5,i-.5,0,n+.25,i-.5,0,n+.25,i+.5,0],s=[n+.25,i+.5,0,n+.25,i-.5,0,n+.5,i+.25,0],a=[n+.5,i+.25,0,n+.25,i-.5,0,n+.5,i-.25,0];return e?dp(n,i,[...r,...o,...s,...a],e):[...r,...o,...s,...a]},Al=(t,e)=>{const{x:n,y:i}=t,r=[n+.5,i-.5,0,n-.35,i-.15,0,n-.15,i-.35,0],o=[n+.5,i-.5,0,n-.5,i+.5,0,n-.35,i-.15,0],s=[n-.5,i+.5,0,n+.5,i-.5,0,n+.5,i+.5,0];return e?dp(n,i,[...r,...o,...s],e):[...r,...o,...s]},yb=({board:t})=>{const e=[];for(const o of t)switch(o.type){case Q.square:{e.push(..._b(o));break}case Q.topLeftNarrowedge:{e.push(...Tl(o));break}case Q.topRightNarrowedge:{e.push(...Tl(o,270));break}case Q.bottomRightNarrowedge:{e.push(...Tl(o,180));break}case Q.bottomLeftNarrowedge:{e.push(...Tl(o,90));break}case Q.solidLeftSquare:{e.push(...wl(o));break}case Q.solidTopSquare:{e.push(...wl(o,270));break}case Q.solidRightSquare:{e.push(...wl(o,180));break}case Q.solidBottomSquare:{e.push(...wl(o,90));break}case Q.smoothBottomLeftSquare:{e.push(...Al(o));break}case Q.smoothTopLeftSquare:{e.push(...Al(o,270));break}case Q.smoothTopRightSquare:{e.push(...Al(o,180));break}case Q.smoothBottomRightSquare:{e.push(...Al(o,90));break}}const n=new Float32Array(e),i=new Wi;i.setAttribute("position",new si(n,3));const r=new Na({color:"gray"});return new ii(i,r)},xb=(t,{x:e,y:n})=>{var r,o,s,a,l,u,c,d;const i=[];for(const f of t.vacantPositions)f.x===e&&f.y===n||i.push(f);((o=(r=t.board)==null?void 0:r[e-1])==null?void 0:o[n])===Q.empty&&!i.find(f=>f.x===e-1&&f.y===n)&&i.push({x:e-1,y:n}),((a=(s=t.board)==null?void 0:s[e])==null?void 0:a[n-1])===Q.empty&&!i.find(f=>f.x===e&&f.y===n-1)&&i.push({x:e,y:n-1}),((u=(l=t.board)==null?void 0:l[e+1])==null?void 0:u[n])===Q.empty&&!i.find(f=>f.x===e+1&&f.y===n)&&i.push({x:e+1,y:n}),((d=(c=t.board)==null?void 0:c[e])==null?void 0:d[n+1])===Q.empty&&!i.find(f=>f.x===e&&f.y===n+1)&&i.push({x:e,y:n+1}),t.vacantPositions=i},Sb=(t,{x:e,y:n})=>{t.board[e][n]=Q.square,xb(t,{x:e,y:n})},Wo=(t,e)=>{t.actualPosition=e,Sb(t,e)},Eb=t=>{const{vacantPositions:e}=t,n=e.length>0&&e[Math.abs(Math.round(Math.random()*e.length-1))];n&&Wo(t,n)},Mb=t=>{const e=Math.round(Math.random()*100),{board:n,maxX:i,maxY:r,actualPosition:{x:o,y:s}}=t;if(e<=25&&s+1<r&&!n[o][s+1]){Wo(t,{x:o,y:s+1});return}if(e<=50&&o+1<i&&!n[o+1][s]){Wo(t,{x:o+1,y:s});return}if(e<=75&&s-1>=0&&!n[o][s-1]){Wo(t,{x:o,y:s-1});return}if(o-1>=0&&!n[o-1][s]){Wo(t,{x:o-1,y:s});return}Eb(t)},Tb=({baseBoard:t,walkable:e})=>{const n=[];for(const o of t){const s=[];for(const a of o)s.push(a);n.push(s)}const i={board:n,maxX:t.length,maxY:t[0].length,actualPosition:{x:0,y:0},vacantPositions:[]};Wo(i,{x:Math.round(i.maxX/2),y:Math.round(i.maxY/2)});const r=Math.round(t.length*t[0].length*(e>=0&&e<=1?e:.5));for(let o=1;o<r;o++)Mb(i);return i.board},Rf={x:50,y:50},wb=({ResourceTracker:t})=>{const e={board:[],boardModel:null};return{generateBoard:()=>{e.boardModel&&t.disposeTrackedResource("board");const i=gb({maxSize:Rf}),r=Tb({baseBoard:i,walkable:.1}),o=vb({walkableBoard:r});e.board=o;const s=yb({board:o});return s.matrixAutoUpdate=!1,s.updateMatrix(),e.boardModel=s,t.trackResource({id:"board",resource:s}),{x:-.5,y:-.5,w:Rf.x+1,h:Rf.y+1}}}},bf="player_move",Ab="enemy_move",qd="player",Cb="board",Yd=({path:t,speedGetter:e,positionUpdate:n,internalPathSetter:i})=>{const r={pathCopy:[],distanceTraveled:0,pathDistances:[]};for(let u=0;u<t.length&&(r.pathCopy.push(t[u].clone()),u!==t.length-1);u++)r.pathDistances.push(t[u].distanceTo(t[u+1]));const o=()=>{const u=e(),c=r.distanceTraveled+u;for(let d=0;d<r.pathDistances.length;d++){const f=r.pathDistances.slice(0,d).reduce((_,y)=>_+=y,0),p=f+r.pathDistances[d];if(c>=f&&c<p)return{distanceIndex:d,minDistanceForPathPart:f,currentSpeed:u}}},s=({distanceIndex:u,minDistanceForPathPart:c,currentSpeed:d})=>{const f=r.pathDistances[u];return(r.distanceTraveled-c+d)/f},a=({distanceIndex:u,lerpAlpha:c})=>r.pathCopy[u].clone().lerp(r.pathCopy[u+1],c);return()=>{const u=o();if(!u){n(r.pathCopy[r.pathCopy.length-1]);return}const c=s(u),d=a({...u,lerpAlpha:c});r.distanceTraveled+=u.currentSpeed,n(d),typeof i=="function"&&i(r.pathCopy.slice(u.distanceIndex))}},Rb=({enemyStats:t,ResourceTracker:e})=>{const n={...t,hp:t.maxHp,enemyMesh:null,path:[]},i=()=>n.id,r=d=>{var f;n.enemyMesh&&(n.enemyMesh.position.set(d.x,d.y,.25),(f=n.enemyMesh)==null||f.updateMatrix())};return{getId:i,init:d=>{const f=new fc(.2,.2,.25,8),p=new Na({color:"yellow",depthTest:!1,depthWrite:!1}),_=new ii(f,p);_.matrixAutoUpdate=!1,_.renderOrder=3,_.rotateX(tr.degToRad(90)),n.enemyMesh=_,e.trackResource({id:`enemy_${n.id}`,resource:_}),r(d)},move:r,positionGetter:()=>{var d;return(d=n.enemyMesh)==null?void 0:d.position},speedGetter:()=>n.movementSpeed,rangeGetter:()=>n.range,getPath:()=>n.path,setPath:d=>n.path=d}};var Xl=(t=>(t[t.soldier=0]="soldier",t[t.archer=1]="archer",t[t.tank=2]="tank",t))(Xl||{});const bb=({id:t})=>{const e={id:t,lastPlayerKnownPosition:null},n=Math.round(Math.random()*100);return n<60?{type:Xl.soldier,...e,maxHp:10,movementSpeed:.02,range:.5}:n<80?{type:Xl.archer,...e,maxHp:5,movementSpeed:.025,range:2}:{type:Xl.tank,...e,maxHp:20,movementSpeed:.015,range:.7}},y0=5,Pb=({ResourceTracker:t,PathfindingManager:e,AnimationManager:n,CollisionsManager:i})=>{const r={enemies:null,closeEnemies:[],lastPlayerPosition:null,lastPlayerNode:null},o=()=>{const f=Math.round(Math.random()*49)+1;for(let p=0;p<f;p++){const _=bb({id:String(p)}),y=Rb({enemyStats:_,ResourceTracker:t}),g=e.getRandomNode();g&&y.init(new k(g.center.x,g.center.y)),r.enemies&&r.enemies.set(String(p),y),i.addCollisionsItem({id:String(p),positionGetter:y.positionGetter})}},s=()=>{r.enemies=new Map,o()},a=async()=>{var p,_,y;if(!r.lastPlayerPosition)return;const f=[];for(let g=0;g<r.closeEnemies.length;g++){const h=r.closeEnemies[g],v=(p=h.positionGetter())==null?void 0:p.clone().setZ(0);if(!v)continue;const m=v.distanceToSquared(r.lastPlayerPosition),x=g!==0&&r.closeEnemies[g-1],R=x&&((y=(_=x==null?void 0:x.positionGetter())==null?void 0:_.clone())==null?void 0:y.setZ(0)),T=R&&m>R.distanceToSquared(r.lastPlayerPosition),M=`${Ab}${h.getId()}`;if(T){f.push(e.findPath({id:M,startPosition:v,destinationPosition:R}).then(L=>{const E=[...L,...x.getPath()];n.clearAnimation(M),n.addAnimation({id:M,type:gi.dynamic,callback:Yd({path:E,speedGetter:h.speedGetter,positionUpdate:h.move,internalPathSetter:h.setPath}),isPossibleGetter:()=>!0,isEndedGetter:()=>m<=h.rangeGetter()})}));continue}f.push(e.findPath({id:M,startPosition:v,destinationPosition:r.lastPlayerPosition}).then(L=>{n.clearAnimation(M),n.addAnimation({id:M,type:gi.dynamic,callback:Yd({path:L,speedGetter:h.speedGetter,positionUpdate:h.move,internalPathSetter:h.setPath}),isPossibleGetter:()=>!0,isEndedGetter:()=>m<=h.rangeGetter()})}))}await Promise.all(f)},l=async()=>{if(!r.lastPlayerPosition||!r.enemies)return;const f={x:r.lastPlayerPosition.x,y:r.lastPlayerPosition.y,r:y0},p=i.findItemsInRange(f),_=[];for(const y of p){const g=r.enemies.get(y.id),h=g&&g.positionGetter();if(g&&h){const v=h.distanceTo(r.lastPlayerPosition);v<=y0&&_.push({distanceToPlayer:v,enemy:g})}}r.closeEnemies=_.sort((y,g)=>y.distanceToPlayer-g.distanceToPlayer).map(({enemy:y})=>y),await a()},u=async f=>{const p=e.getNodeIdByPosition(f);!p||r.lastPlayerNode===p||(await l(),r.lastPlayerNode=p)},c=async()=>{var p;const f=t.getTrackedResource(qd);!f||(p=r.lastPlayerPosition)!=null&&p.equals(f.position)||(r.lastPlayerPosition=f.position.clone().setZ(0),await u(f.position))};return{init:s,tick:async()=>{await c()}}},Lb=({ResourceTracker:t,PathfindingManager:e,AnimationManager:n,CollisionsManager:i})=>{const r=wb({ResourceTracker:t}),o=Pb({ResourceTracker:t,PathfindingManager:e,AnimationManager:n,CollisionsManager:i});return{generateBoard:()=>{const l=r.generateBoard();i.updateBoardBoundries(l)},populate:()=>{o.init()},tick:o.tick}};var En=(t=>(t.nw="nw",t.ne="ne",t.se="se",t.sw="sw",t))(En||{});const Ki=({boundries:t,item:e})=>{const n=e.positionGetter();if(!n)return!1;const{x:i,y:r,w:o,h:s}=t,{x:a,y:l}=n;return a>i&&a<i+o&&l>r&&l<r+s},Cl=(t,e)=>{const{x:n,y:i,r}=t,{x:o,y:s,w:a,h:l}=e,u=Math.max(o,Math.min(n,o+a)),c=Math.max(s,Math.min(i,s+l));return Math.sqrt((n-u)**2+(i-c)**2)<=r},Nb=()=>{const t={quadtree:null,boardBoundries:null,capacity:4,items:[]},e=({boundries:u,capacity:c})=>({boundries:u,capacity:c,items:[],subQuadtrees:null}),n=(u,c)=>{if(!c.subQuadtrees&&c.items.length<t.capacity||c.boundries.w*c.boundries.h<=4){c.items.push(u);return}if(!c.subQuadtrees){const y=new Map,{x:g,y:h,w:v,h:m}=c.boundries,x=e({boundries:{x:g,y:h,w:v/2,h:m/2},capacity:c.capacity});y.set(En.nw,x);const R=e({boundries:{x:g+v/2,y:h,w:v/2,h:m/2},capacity:c.capacity});y.set(En.ne,R);const T=e({boundries:{x:g+v/2,y:h+m/2,w:v/2,h:m/2},capacity:c.capacity});y.set(En.sw,T);const M=e({boundries:{x:g,y:h+m/2,w:v/2,h:m/2},capacity:c.capacity});y.set(En.se,M),c.subQuadtrees=y;for(const L of c.items){if(Ki({boundries:x.boundries,item:L})){n(L,x);continue}if(Ki({boundries:R.boundries,item:L})){n(L,R);continue}if(Ki({boundries:M.boundries,item:L})){n(L,M);continue}if(Ki({boundries:T.boundries,item:L})){n(L,T);continue}}c.items=[]}const d=c.subQuadtrees.get(En.nw),f=c.subQuadtrees.get(En.ne),p=c.subQuadtrees.get(En.se),_=c.subQuadtrees.get(En.sw);Ki({boundries:d.boundries,item:u})&&n(u,d),Ki({boundries:f.boundries,item:u})&&n(u,f),Ki({boundries:p.boundries,item:u})&&n(u,p),Ki({boundries:_.boundries,item:u})&&n(u,_)},i=()=>{if(t.quadtree)for(const u of t.items)n(u,t.quadtree)},r=u=>{t.boardBoundries=u},o=()=>{t.boardBoundries&&(t.quadtree=e({boundries:t.boardBoundries,capacity:t.capacity}),i())},s=u=>{t.items.push(u)},a=u=>{t.items=t.items.filter(c=>c.id!==u)},l=(u,c=t.quadtree,d=[])=>{if(!c)return d;if(c.subQuadtrees){const f=c.subQuadtrees.get(En.ne);Cl(u,f.boundries)&&l(u,f,d);const p=c.subQuadtrees.get(En.nw);Cl(u,p.boundries)&&l(u,p,d);const _=c.subQuadtrees.get(En.sw);Cl(u,_.boundries)&&l(u,_,d);const y=c.subQuadtrees.get(En.se);Cl(u,y.boundries)&&l(u,y,d)}else d.push(...c.items);return d};return{updateBoardBoundries:r,tick:o,addCollisionsItem:s,removeCollisionsItem:a,findItemsInRange:l}},Ib=({ResourceTracker:t,polygons:e})=>{const n=[];for(let i=0;i<e.length;i+=3){const r=new Ke;r.addVectors(e[i],e[i+1]).add(e[i+2]).multiplyScalar(1/3).multiplyScalar(100).round().divideScalar(100);const o=[e[i],e[i+1],e[i+2]];n.push({polygons:o,center:r})}return{centroids:n}},Db=({centroids:t})=>{const e=[];for(const n of t){const{center:i,polygons:r}=n,o=[];for(const a of t){const{center:l,polygons:u}=a;if(l.x===i.x&&l.y===n.center.y)continue;const c=[];for(const d of r)for(const f of u)c.length>=2||f.x===d.x&&f.y===d.y&&c.push(u);c.length>=2&&o.push(`${l.x}#${l.y}`)}const s={id:`${n.center.x}#${n.center.y}`,...n,neighborNodesIds:o};e.push(s)}return{graph:e}},Ub=({position:t,polygons:e})=>{const n=e[0],i=e[1],r=e[2],o=(i.y-r.y)*(n.x-r.x)+(r.x-i.x)*(n.y-r.y),s=((i.y-r.y)*(t.x-r.x)+(r.x-i.x)*(t.y-r.y))/o,a=((r.y-n.y)*(t.x-r.x)+(n.x-r.x)*(t.y-r.y))/o,l=1-s-a;return 0<=s&&s<=1&&0<=a&&a<=1&&0<=l&&l<=1},Fb=({graph:t})=>({findNodeIdByPosition:n=>{const i=new Ke(n.x,n.y);for(const r of t){const{id:o,polygons:s}=r;if(Ub({position:i,polygons:s}))return o}return null}}),Ob=({graph:t})=>({getNodeById:({id:i})=>{for(const r of t)if(r.id===i)return r;return null},getRandomNode:()=>{if(!t||t.length===0)return null;const i=Math.round(Math.abs(Math.random()*t.length-1));return t[i]}}),kb=({ResourceTracker:t,board:e})=>{const n=e.geometry.getAttribute("position").array,i=[];for(let r=0;r<n.length;r+=3)i.push(new Ke(n[r],n[r+1]));return{polygons:i}},Bb="web_worker",Hb=({ResourceTracker:t})=>{const e={graph:null,NodeChecker:null,NodeGetter:null,WebWorkers:[]},n=()=>{for(const c of e.WebWorkers)c!=null&&c.instance&&c.instance.terminate()},i=()=>{n();const c=[],d=navigator!=null&&navigator.hardwareConcurrency?navigator.hardwareConcurrency:1;for(let f=0;f<d;f++){const p=new Worker(new URL(""+new URL("GraphTraverse.webworker-cfb3f1f5.js",import.meta.url).href,self.location),{type:"module"}),_={id:`${Bb}${f}`,instance:p,que:[]};_.instance.postMessage({type:"init",graph:e.graph}),_.instance.onmessage=y=>{const g=_.que.find(({id:h})=>h===y.data.id);g&&(g.resolve(y.data.path),_.que=_.que.filter(({id:h})=>h!==g.id))},c.push(_)}return c},r=()=>{const c=t.getTrackedResource("board");if(!c)return;const{polygons:d}=kb({ResourceTracker:t,board:c}),{centroids:f}=Ib({ResourceTracker:t,polygons:d}),{graph:p}=Db({centroids:f});e.graph=p,e.NodeChecker=Fb({graph:p}),e.NodeGetter=Ob({graph:p}),e.WebWorkers=i()},o=(c,d)=>{e.WebWorkers.sort((p,_)=>p.que.length-_.que.length);const f=e.WebWorkers[0];f.que.push({id:c.id,resolve:d}),f.instance.postMessage(c)};return{init:r,findPath:({id:c,startPosition:d,destinationPosition:f})=>{var y,g;const p=(y=e.NodeChecker)==null?void 0:y.findNodeIdByPosition(d),_=(g=e.NodeChecker)==null?void 0:g.findNodeIdByPosition(f);return new Promise(h=>{if(!p||!_||!e.graph){h([d,f]);return}o({type:"calculate",id:c,startPosition:d,startNodeId:p,destinationPosition:f,destinationNodeId:_},v=>{const m=[];if(v){for(const x of v)m.push(new k(x.x,x.y,x.z??0));h(m)}h([d,f])})})},getRandomNode:()=>{var c;return(c=e.NodeGetter)!=null&&c.getRandomNode?e.NodeGetter.getRandomNode():null},getNodeIdByPosition:c=>{var d;return(d=e.NodeChecker)!=null&&d.findNodeIdByPosition?e.NodeChecker.findNodeIdByPosition(c):null},dispose:()=>{n()}}},zb=({Camera:t,playerManagerState:e})=>{const n={Camera:t},i=o=>{var c;const s=(c=e==null?void 0:e.player)==null?void 0:c.position;if(!s)return;const a=10,l=15,u=new k(s.x+a*Math.cos(tr.degToRad(l))*Math.sin(tr.degToRad(0)),s.y-a*Math.sin(tr.degToRad(l)),s.z+a*Math.cos(tr.degToRad(l))*Math.cos(tr.degToRad(0)));o.Camera.position.copy(u),o.Camera.rotation.x=tr.degToRad(l)};return{init:()=>{i(n)},lookCameraAtPlayer:()=>i(n)}},Gb=(t,{eventType:e,callback:n})=>{const i=r=>{r.preventDefault(),n(r)};t.ref.addEventListener(e,i),t.registeredKeybindings={[e]:i}},Vb=(t,{eventType:e,callback:n})=>{t.ref.removeEventListener(e,n)},Wb=t=>{for(const e in t.keybindings)Gb(t,{eventType:e,callback:t.keybindings[e]})},Xb=t=>{for(const e in t.registeredKeybindings)Vb(t,{eventType:e,callback:t.keybindings[e]})},$b=({ref:t,keybindings:e})=>{const n={ref:t,keybindings:e,registeredKeybindings:{}};return{init:()=>{Wb(n)},disposeControls:()=>Xb(n)}},jb=({ref:t,Camera:e,ResourceTracker:n,PathfindingManager:i,AnimationManager:r,CollisionsManager:o})=>{const s={player:null,pointer:new Ke,raycaster:new pb,pathMesh:null,isRightClickPressed:!1,isRightClickPressedDelay:0},a=zb({Camera:e,playerManagerState:s}),l=h=>{s.pointer.x=h.clientX/window.innerWidth*2-1,s.pointer.y=-(h.clientY/window.innerHeight)*2+1},u=h=>{var v,m;(v=s.player)==null||v.position.copy(h).setZ(.25),(m=s.player)==null||m.updateMatrix(),a.lookCameraAtPlayer()},c=()=>{const h=new fc(.25,.25,.5,16),v=new Na({color:"green",depthTest:!1,depthWrite:!1}),m=new ii(h,v);m.matrixAutoUpdate=!1,m.renderOrder=3,m.rotateX(tr.degToRad(90)),s.player=m,n.trackResource({id:qd,resource:m});const x=i.getRandomNode();if(!x)return;const R=new k(x.center.x,x.center.y);u(R),o.addCollisionsItem({id:qd,positionGetter:()=>{var T;return(T=s.player)==null?void 0:T.position}})},d=async()=>{s.raycaster.setFromCamera(s.pointer,e);const h=n.getTrackedResource(Cb);if(!h)return;const v=s.raycaster.intersectObjects([h],!1),m=v.length>0&&v[0].point;if(!m||!s.player)return;const x=s.player.position.clone(),R=m.clone(),T=await i.findPath({id:bf,startPosition:x,destinationPosition:R});if(r.clearAnimation(bf),T.length===0)return;const M=()=>!0,L=()=>s.player?s.player.position.clone().setZ(0).equals(T[T.length-1]):!0;r.addAnimation({id:bf,type:gi.dynamic,callback:Yd({path:T,speedGetter:()=>.025,positionUpdate:u}),isPossibleGetter:M,isEndedGetter:L})},f=h=>{s.isRightClickPressed=h},p=$b({ref:t,keybindings:{contextmenu:h=>h.preventDefault(),mousedown:()=>f(!0),mouseup:()=>f(!1),touchdown:()=>f(!0),touchup:()=>f(!0),pointermove:h=>l(h)}});return{init:()=>{a.init(),c(),p.init()},tick:async()=>{if(s.isRightClickPressed){s.isRightClickPressedDelay++,s.isRightClickPressedDelay>5&&await d();return}s.isRightClickPressedDelay=0},dispose:()=>{p.disposeControls()}}},qb=t=>{const e={Scene:t,resources:[]},n=a=>{e.resources=[...e.resources,a],t.add(a.resource)},i=a=>{var l;return(l=e.resources.find(u=>u.id===a))==null?void 0:l.resource},r=a=>{var c;const l=(c=e.resources.find(d=>d.id===a))==null?void 0:c.resource;if(!l||(t.remove(l),l.geometry.dispose(),!l.material))return;const u=()=>{const d=e.resources.findIndex(f=>f.id===a);e.resources=[...e.resources.slice(0,d),...e.resources.slice(d+1)]};if(Array.isArray(l.material))for(const d of l.material)d.dispose();else l.material.dispose();u()};return{trackResource:n,getTrackedResource:i,disposeTrackedResource:r,disposeMultipleTrackedResources:a=>{const l=e.resources.filter(u=>u.id.includes(a)).map(({id:u})=>u);for(const u of l)r(u)},disposeAllResources:()=>{const a=e.resources.map(({id:l})=>l);for(const l of a)r(l)}}},Yb=t=>{const e=new hb,n=new kn(75,window.innerWidth/window.innerHeight,.1,1e3),i=new uy({antialias:!0});i.setSize(window.innerWidth-18,window.innerHeight),i.setPixelRatio(window.devicePixelRatio),t.current&&t.current.appendChild(i.domElement);const r=qb(e),o=Hb({ResourceTracker:r}),s=mb(),a=Nb(),l=jb({ref:i.domElement,Camera:n,ResourceTracker:r,PathfindingManager:o,AnimationManager:s,CollisionsManager:a}),u=Lb({ResourceTracker:r,PathfindingManager:o,AnimationManager:s,CollisionsManager:a}),c={isPaused:!1},d=()=>{u.generateBoard(),o.init(),u.populate(),l.init()},f=async()=>{c.isPaused||(a.tick(),await u.tick(),await l.tick(),s.animate(),i.render(e,n),await new Promise(requestAnimationFrame).then(f))},p=()=>{c.isPaused=!0},_=()=>{p(),l.dispose(),r.disposeAllResources(),o.dispose(),i.domElement.remove(),i.dispose()};return d(),f(),{animate:f,pause:p,dispose:_}},Zb=()=>{const t=Ye.useRef(null);return Ye.useEffect(()=>{if(t.current){const e=Yb(t);return()=>{e.dispose()}}},[]),Ie.jsx("div",{ref:t})},Kb=()=>Ie.jsx(Zb,{}),Qb=`<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M6.4 19L5 17.6L10.6 12L5 6.4L6.4 5L12 10.6L17.6 5L19 6.4L13.4 12L19 17.6L17.6 19L12 13.4L6.4 19Z" />
</svg>
`,Jb=`<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M10 16H14C14.2833 16 14.5208 15.9042 14.7125 15.7125C14.9042 15.5208 15 15.2833 15 15V13H13V14H11V10H13V11H15V9C15 8.71667 14.9042 8.47917 14.7125 8.2875C14.5208 8.09583 14.2833 8 14 8H10C9.71667 8 9.47917 8.09583 9.2875 8.2875C9.09583 8.47917 9 8.71667 9 9V15C9 15.2833 9.09583 15.5208 9.2875 15.7125C9.47917 15.9042 9.71667 16 10 16ZM12 22C10.6167 22 9.31667 21.7375 8.1 21.2125C6.88333 20.6875 5.825 19.975 4.925 19.075C4.025 18.175 3.3125 17.1167 2.7875 15.9C2.2625 14.6833 2 13.3833 2 12C2 10.6167 2.2625 9.31667 2.7875 8.1C3.3125 6.88333 4.025 5.825 4.925 4.925C5.825 4.025 6.88333 3.3125 8.1 2.7875C9.31667 2.2625 10.6167 2 12 2C13.3833 2 14.6833 2.2625 15.9 2.7875C17.1167 3.3125 18.175 4.025 19.075 4.925C19.975 5.825 20.6875 6.88333 21.2125 8.1C21.7375 9.31667 22 10.6167 22 12C22 13.3833 21.7375 14.6833 21.2125 15.9C20.6875 17.1167 19.975 18.175 19.075 19.075C18.175 19.975 17.1167 20.6875 15.9 21.2125C14.6833 21.7375 13.3833 22 12 22ZM12 20C14.2333 20 16.125 19.225 17.675 17.675C19.225 16.125 20 14.2333 20 12C20 9.76667 19.225 7.875 17.675 6.325C16.125 4.775 14.2333 4 12 4C9.76667 4 7.875 4.775 6.325 6.325C4.775 7.875 4 9.76667 4 12C4 14.2333 4.775 16.125 6.325 17.675C7.875 19.225 9.76667 20 12 20Z" />
</svg>
`,e3=`<svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="5.5" cy="5.63672" r="4" fill="#FFE0B2" stroke="#5D4037" stroke-width="2"/>
</svg>
`,t3=`<svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="5.5" cy="5.63672" r="4" fill="#5D4037" stroke="#5D4037" stroke-width="2"/>
</svg>
`,n3='<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z"/></svg>',i3=`<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_25_373)">
<path d="M9.101 23.6909V15.7109H6.627V12.0439H9.101V10.4639C9.101 6.37895 10.949 4.48595 14.959 4.48595C15.36 4.48595 15.914 4.52795 16.427 4.58895C16.8112 4.62848 17.1924 4.69363 17.568 4.78395V8.10895C17.3509 8.08869 17.133 8.07668 16.915 8.07295C16.6707 8.0666 16.4264 8.0636 16.182 8.06395C15.475 8.06395 14.923 8.15995 14.507 8.37295C14.2273 8.51326 13.9922 8.72862 13.828 8.99495C13.57 9.41495 13.454 9.98995 13.454 10.7469V12.0439H17.373L16.987 14.1469L16.7 15.7109H13.454V23.9559C19.396 23.2379 24 18.1789 24 12.0439C24 5.41695 18.627 0.0439453 12 0.0439453C5.373 0.0439453 0 5.41695 0 12.0439C0 17.6719 3.874 22.3939 9.101 23.6909Z" />
</g>
<defs>
<clipPath id="clip0_25_373">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
`,r3=`<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_25_370)">
<path d="M12 0C8.74 0 8.333 0.015 7.053 0.072C5.775 0.132 4.905 0.333 4.14 0.63C3.351 0.936 2.681 1.347 2.014 2.014C1.347 2.681 0.935 3.35 0.63 4.14C0.333 4.905 0.131 5.775 0.072 7.053C0.012 8.333 0 8.74 0 12C0 15.26 0.015 15.667 0.072 16.947C0.132 18.224 0.333 19.095 0.63 19.86C0.936 20.648 1.347 21.319 2.014 21.986C2.681 22.652 3.35 23.065 4.14 23.37C4.906 23.666 5.776 23.869 7.053 23.928C8.333 23.988 8.74 24 12 24C15.26 24 15.667 23.985 16.947 23.928C18.224 23.868 19.095 23.666 19.86 23.37C20.648 23.064 21.319 22.652 21.986 21.986C22.652 21.319 23.065 20.651 23.37 19.86C23.666 19.095 23.869 18.224 23.928 16.947C23.988 15.667 24 15.26 24 12C24 8.74 23.985 8.333 23.928 7.053C23.868 5.776 23.666 4.904 23.37 4.14C23.064 3.351 22.652 2.681 21.986 2.014C21.319 1.347 20.651 0.935 19.86 0.63C19.095 0.333 18.224 0.131 16.947 0.072C15.667 0.012 15.26 0 12 0ZM12 2.16C15.203 2.16 15.585 2.176 16.85 2.231C18.02 2.286 18.655 2.48 19.077 2.646C19.639 2.863 20.037 3.123 20.459 3.542C20.878 3.962 21.138 4.361 21.355 4.923C21.519 5.345 21.715 5.98 21.768 7.15C21.825 8.416 21.838 8.796 21.838 12C21.838 15.204 21.823 15.585 21.764 16.85C21.703 18.02 21.508 18.655 21.343 19.077C21.119 19.639 20.864 20.037 20.444 20.459C20.025 20.878 19.62 21.138 19.064 21.355C18.644 21.519 17.999 21.715 16.829 21.768C15.555 21.825 15.18 21.838 11.97 21.838C8.759 21.838 8.384 21.823 7.111 21.764C5.94 21.703 5.295 21.508 4.875 21.343C4.306 21.119 3.915 20.864 3.496 20.444C3.075 20.025 2.806 19.62 2.596 19.064C2.431 18.644 2.237 17.999 2.176 16.829C2.131 15.569 2.115 15.18 2.115 11.985C2.115 8.789 2.131 8.399 2.176 7.124C2.237 5.954 2.431 5.31 2.596 4.89C2.806 4.32 3.075 3.93 3.496 3.509C3.915 3.09 4.306 2.82 4.875 2.611C5.295 2.445 5.926 2.25 7.096 2.19C8.371 2.145 8.746 2.13 11.955 2.13L12 2.16ZM12 5.838C8.595 5.838 5.838 8.598 5.838 12C5.838 15.405 8.598 18.162 12 18.162C15.405 18.162 18.162 15.402 18.162 12C18.162 8.595 15.402 5.838 12 5.838ZM12 16C9.79 16 8 14.21 8 12C8 9.79 9.79 8 12 8C14.21 8 16 9.79 16 12C16 14.21 14.21 16 12 16ZM19.846 5.595C19.846 6.39 19.2 7.035 18.406 7.035C17.611 7.035 16.966 6.389 16.966 5.595C16.966 4.801 17.612 4.156 18.406 4.156C19.199 4.155 19.846 4.801 19.846 5.595Z" />
</g>
<defs>
<clipPath id="clip0_25_370">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
`,o3=`<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M3 18V16H21V18H3ZM3 13V11H21V13H3ZM3 8V6H21V8H3Z" />
</svg>
`,s3=`<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M6 10.95L5 11.5C4.76667 11.6333 4.51667 11.6667 4.25 11.6C3.98333 11.5333 3.78333 11.3833 3.65 11.15L1.65 7.65C1.51667 7.41667 1.48333 7.16667 1.55 6.9C1.61667 6.63333 1.76667 6.43333 2 6.3L7.75 3H9.5C9.65 3 9.77083 3.04583 9.8625 3.1375C9.95417 3.22917 10 3.35 10 3.5V4C10 4.55 10.1958 5.02083 10.5875 5.4125C10.9792 5.80417 11.45 6 12 6C12.55 6 13.0208 5.80417 13.4125 5.4125C13.8042 5.02083 14 4.55 14 4V3.5C14 3.35 14.0458 3.22917 14.1375 3.1375C14.2292 3.04583 14.35 3 14.5 3H16.25L22 6.3C22.2333 6.43333 22.3833 6.63333 22.45 6.9C22.5167 7.16667 22.4833 7.41667 22.35 7.65L20.35 11.15C20.2167 11.3833 20.0208 11.5292 19.7625 11.5875C19.5042 11.6458 19.25 11.6083 19 11.475L18 10.975V20C18 20.2833 17.9042 20.5208 17.7125 20.7125C17.5208 20.9042 17.2833 21 17 21H7C6.71667 21 6.47917 20.9042 6.2875 20.7125C6.09583 20.5208 6 20.2833 6 20V10.95ZM8 7.6V19H16V7.6L19.1 9.3L20.15 7.55L15.85 5.05C15.6 5.9 15.1292 6.60417 14.4375 7.1625C13.7458 7.72083 12.9333 8 12 8C11.0667 8 10.2542 7.72083 9.5625 7.1625C8.87083 6.60417 8.4 5.9 8.15 5.05L3.85 7.55L4.9 9.3L8 7.6Z" />
</svg>
`,a3=`<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M3 20V4L22 12L3 20ZM5 17L16.85 12L5 7V10.5L11 12L5 13.5V17Z" />
</svg>
`,l3=`<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M18 22C17.1667 22 16.4583 21.7083 15.875 21.125C15.2917 20.5417 15 19.8333 15 19C15 18.8833 15.0083 18.7625 15.025 18.6375C15.0417 18.5125 15.0667 18.4 15.1 18.3L8.05 14.2C7.76667 14.45 7.45 14.6458 7.1 14.7875C6.75 14.9292 6.38333 15 6 15C5.16667 15 4.45833 14.7083 3.875 14.125C3.29167 13.5417 3 12.8333 3 12C3 11.1667 3.29167 10.4583 3.875 9.875C4.45833 9.29167 5.16667 9 6 9C6.38333 9 6.75 9.07083 7.1 9.2125C7.45 9.35417 7.76667 9.55 8.05 9.8L15.1 5.7C15.0667 5.6 15.0417 5.4875 15.025 5.3625C15.0083 5.2375 15 5.11667 15 5C15 4.16667 15.2917 3.45833 15.875 2.875C16.4583 2.29167 17.1667 2 18 2C18.8333 2 19.5417 2.29167 20.125 2.875C20.7083 3.45833 21 4.16667 21 5C21 5.83333 20.7083 6.54167 20.125 7.125C19.5417 7.70833 18.8333 8 18 8C17.6167 8 17.25 7.92917 16.9 7.7875C16.55 7.64583 16.2333 7.45 15.95 7.2L8.9 11.3C8.93333 11.4 8.95833 11.5125 8.975 11.6375C8.99167 11.7625 9 11.8833 9 12C9 12.1167 8.99167 12.2375 8.975 12.3625C8.95833 12.4875 8.93333 12.6 8.9 12.7L15.95 16.8C16.2333 16.55 16.55 16.3542 16.9 16.2125C17.25 16.0708 17.6167 16 18 16C18.8333 16 19.5417 16.2917 20.125 16.875C20.7083 17.4583 21 18.1667 21 19C21 19.8333 20.7083 20.5417 20.125 21.125C19.5417 21.7083 18.8333 22 18 22ZM18 6C18.2833 6 18.5208 5.90417 18.7125 5.7125C18.9042 5.52083 19 5.28333 19 5C19 4.71667 18.9042 4.47917 18.7125 4.2875C18.5208 4.09583 18.2833 4 18 4C17.7167 4 17.4792 4.09583 17.2875 4.2875C17.0958 4.47917 17 4.71667 17 5C17 5.28333 17.0958 5.52083 17.2875 5.7125C17.4792 5.90417 17.7167 6 18 6ZM6 13C6.28333 13 6.52083 12.9042 6.7125 12.7125C6.90417 12.5208 7 12.2833 7 12C7 11.7167 6.90417 11.4792 6.7125 11.2875C6.52083 11.0958 6.28333 11 6 11C5.71667 11 5.47917 11.0958 5.2875 11.2875C5.09583 11.4792 5 11.7167 5 12C5 12.2833 5.09583 12.5208 5.2875 12.7125C5.47917 12.9042 5.71667 13 6 13ZM18 20C18.2833 20 18.5208 19.9042 18.7125 19.7125C18.9042 19.5208 19 19.2833 19 19C19 18.7167 18.9042 18.4792 18.7125 18.2875C18.5208 18.0958 18.2833 18 18 18C17.7167 18 17.4792 18.0958 17.2875 18.2875C17.0958 18.4792 17 18.7167 17 19C17 19.2833 17.0958 19.5208 17.2875 19.7125C17.4792 19.9042 17.7167 20 18 20Z" />
</svg>
`,u3=`<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_25_375)">
<path d="M12.525 0.02C13.835 0 15.135 0.01 16.435 0C16.515 1.53 17.065 3.09 18.185 4.17C19.305 5.28 20.885 5.79 22.425 5.96V9.99C20.985 9.94 19.535 9.64 18.225 9.02C17.655 8.76 17.125 8.43 16.605 8.09C16.595 11.01 16.615 13.93 16.585 16.84C16.505 18.24 16.045 19.63 15.235 20.78C13.925 22.7 11.655 23.95 9.325 23.99C7.895 24.07 6.465 23.68 5.245 22.96C3.225 21.77 1.805 19.59 1.595 17.25C1.575 16.75 1.565 16.25 1.585 15.76C1.765 13.86 2.705 12.04 4.165 10.8C5.825 9.36 8.145 8.67 10.315 9.08C10.335 10.56 10.275 12.04 10.275 13.52C9.285 13.2 8.125 13.29 7.255 13.89C6.625 14.3 6.145 14.93 5.895 15.64C5.685 16.15 5.745 16.71 5.755 17.25C5.995 18.89 7.575 20.27 9.255 20.12C10.375 20.11 11.445 19.46 12.025 18.51C12.215 18.18 12.425 17.84 12.435 17.45C12.535 15.66 12.495 13.88 12.505 12.09C12.515 8.06 12.495 4.04 12.525 0.02Z" />
</g>
<defs>
<clipPath id="clip0_25_375">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
`,c3=`<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M18.901 1.15308H22.581L14.541 10.3431L24 22.8461H16.594L10.794 15.2621L4.156 22.8461H0.474L9.074 13.0161L0 1.15408H7.594L12.837 8.08608L18.901 1.15308ZM17.61 20.6441H19.649L6.486 3.24008H4.298L17.61 20.6441Z" />
</svg>
`,f3=`<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M23.498 6.18592C23.3624 5.6752 23.095 5.20906 22.7226 4.83419C22.3502 4.45931 21.8858 4.18886 21.376 4.04992C19.505 3.54492 12 3.54492 12 3.54492C12 3.54492 4.495 3.54492 2.623 4.04992C2.11341 4.18911 1.64929 4.45966 1.27708 4.8345C0.904861 5.20935 0.637591 5.67536 0.502 6.18592C0 8.06992 0 11.9999 0 11.9999C0 11.9999 0 15.9299 0.502 17.8139C0.637586 18.3246 0.904975 18.7908 1.27739 19.1657C1.64981 19.5405 2.11418 19.811 2.624 19.9499C4.495 20.4549 12 20.4549 12 20.4549C12 20.4549 19.505 20.4549 21.377 19.9499C21.8869 19.8111 22.3513 19.5407 22.7237 19.1658C23.0961 18.7909 23.3635 18.3247 23.499 17.8139C24 15.9299 24 11.9999 24 11.9999C24 11.9999 24 8.06992 23.498 6.18592ZM9.545 15.5679V8.43192L15.818 11.9999L9.545 15.5679Z" />
</svg>
`;var Kt=function(){return Kt=Object.assign||function(e){for(var n,i=1,r=arguments.length;i<r;i++){n=arguments[i];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},Kt.apply(this,arguments)};function Ru(t,e,n){if(n||arguments.length===2)for(var i=0,r=e.length,o;i<r;i++)(o||!(i in e))&&(o||(o=Array.prototype.slice.call(e,0,i)),o[i]=e[i]);return t.concat(o||Array.prototype.slice.call(e))}var ct="-ms-",ea="-moz-",Qe="-webkit-",cy="comm",dc="rule",hp="decl",d3="@import",fy="@keyframes",h3="@layer",dy=Math.abs,pp=String.fromCharCode,Zd=Object.assign;function p3(t,e){return Ft(t,0)^45?(((e<<2^Ft(t,0))<<2^Ft(t,1))<<2^Ft(t,2))<<2^Ft(t,3):0}function hy(t){return t.trim()}function Li(t,e){return(t=e.exec(t))?t[0]:t}function Oe(t,e,n){return t.replace(e,n)}function $l(t,e,n){return t.indexOf(e,n)}function Ft(t,e){return t.charCodeAt(e)|0}function hs(t,e,n){return t.slice(e,n)}function vi(t){return t.length}function py(t){return t.length}function zs(t,e){return e.push(t),t}function m3(t,e){return t.map(e).join("")}function x0(t,e){return t.filter(function(n){return!Li(n,e)})}var hc=1,ps=1,my=0,Wn=0,At=0,Ms="";function pc(t,e,n,i,r,o,s,a){return{value:t,root:e,parent:n,type:i,props:r,children:o,line:hc,column:ps,length:s,return:"",siblings:a}}function Qi(t,e){return Zd(pc("",null,null,"",null,null,0,t.siblings),t,{length:-t.length},e)}function Ro(t){for(;t.root;)t=Qi(t.root,{children:[t]});zs(t,t.siblings)}function g3(){return At}function v3(){return At=Wn>0?Ft(Ms,--Wn):0,ps--,At===10&&(ps=1,hc--),At}function ai(){return At=Wn<my?Ft(Ms,Wn++):0,ps++,At===10&&(ps=1,hc++),At}function Yr(){return Ft(Ms,Wn)}function jl(){return Wn}function mc(t,e){return hs(Ms,t,e)}function Kd(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function _3(t){return hc=ps=1,my=vi(Ms=t),Wn=0,[]}function y3(t){return Ms="",t}function Pf(t){return hy(mc(Wn-1,Qd(t===91?t+2:t===40?t+1:t)))}function x3(t){for(;(At=Yr())&&At<33;)ai();return Kd(t)>2||Kd(At)>3?"":" "}function S3(t,e){for(;--e&&ai()&&!(At<48||At>102||At>57&&At<65||At>70&&At<97););return mc(t,jl()+(e<6&&Yr()==32&&ai()==32))}function Qd(t){for(;ai();)switch(At){case t:return Wn;case 34:case 39:t!==34&&t!==39&&Qd(At);break;case 40:t===41&&Qd(t);break;case 92:ai();break}return Wn}function E3(t,e){for(;ai()&&t+At!==47+10;)if(t+At===42+42&&Yr()===47)break;return"/*"+mc(e,Wn-1)+"*"+pp(t===47?t:ai())}function M3(t){for(;!Kd(Yr());)ai();return mc(t,Wn)}function T3(t){return y3(ql("",null,null,null,[""],t=_3(t),0,[0],t))}function ql(t,e,n,i,r,o,s,a,l){for(var u=0,c=0,d=s,f=0,p=0,_=0,y=1,g=1,h=1,v=0,m="",x=r,R=o,T=i,M=m;g;)switch(_=v,v=ai()){case 40:if(_!=108&&Ft(M,d-1)==58){$l(M+=Oe(Pf(v),"&","&\f"),"&\f",dy(u?a[u-1]:0))!=-1&&(h=-1);break}case 34:case 39:case 91:M+=Pf(v);break;case 9:case 10:case 13:case 32:M+=x3(_);break;case 92:M+=S3(jl()-1,7);continue;case 47:switch(Yr()){case 42:case 47:zs(w3(E3(ai(),jl()),e,n,l),l);break;default:M+="/"}break;case 123*y:a[u++]=vi(M)*h;case 125*y:case 59:case 0:switch(v){case 0:case 125:g=0;case 59+c:h==-1&&(M=Oe(M,/\f/g,"")),p>0&&vi(M)-d&&zs(p>32?E0(M+";",i,n,d-1,l):E0(Oe(M," ","")+";",i,n,d-2,l),l);break;case 59:M+=";";default:if(zs(T=S0(M,e,n,u,c,r,a,m,x=[],R=[],d,o),o),v===123)if(c===0)ql(M,e,T,T,x,o,d,a,R);else switch(f===99&&Ft(M,3)===110?100:f){case 100:case 108:case 109:case 115:ql(t,T,T,i&&zs(S0(t,T,T,0,0,r,a,m,r,x=[],d,R),R),r,R,d,a,i?x:R);break;default:ql(M,T,T,T,[""],R,0,a,R)}}u=c=p=0,y=h=1,m=M="",d=s;break;case 58:d=1+vi(M),p=_;default:if(y<1){if(v==123)--y;else if(v==125&&y++==0&&v3()==125)continue}switch(M+=pp(v),v*y){case 38:h=c>0?1:(M+="\f",-1);break;case 44:a[u++]=(vi(M)-1)*h,h=1;break;case 64:Yr()===45&&(M+=Pf(ai())),f=Yr(),c=d=vi(m=M+=M3(jl())),v++;break;case 45:_===45&&vi(M)==2&&(y=0)}}return o}function S0(t,e,n,i,r,o,s,a,l,u,c,d){for(var f=r-1,p=r===0?o:[""],_=py(p),y=0,g=0,h=0;y<i;++y)for(var v=0,m=hs(t,f+1,f=dy(g=s[y])),x=t;v<_;++v)(x=hy(g>0?p[v]+" "+m:Oe(m,/&\f/g,p[v])))&&(l[h++]=x);return pc(t,e,n,r===0?dc:a,l,u,c,d)}function w3(t,e,n,i){return pc(t,e,n,cy,pp(g3()),hs(t,2,-2),0,i)}function E0(t,e,n,i,r){return pc(t,e,n,hp,hs(t,0,i),hs(t,i+1,-1),i,r)}function gy(t,e,n){switch(p3(t,e)){case 5103:return Qe+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Qe+t+t;case 4789:return ea+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return Qe+t+ea+t+ct+t+t;case 5936:switch(Ft(t,e+11)){case 114:return Qe+t+ct+Oe(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return Qe+t+ct+Oe(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return Qe+t+ct+Oe(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return Qe+t+ct+t+t;case 6165:return Qe+t+ct+"flex-"+t+t;case 5187:return Qe+t+Oe(t,/(\w+).+(:[^]+)/,Qe+"box-$1$2"+ct+"flex-$1$2")+t;case 5443:return Qe+t+ct+"flex-item-"+Oe(t,/flex-|-self/g,"")+(Li(t,/flex-|baseline/)?"":ct+"grid-row-"+Oe(t,/flex-|-self/g,""))+t;case 4675:return Qe+t+ct+"flex-line-pack"+Oe(t,/align-content|flex-|-self/g,"")+t;case 5548:return Qe+t+ct+Oe(t,"shrink","negative")+t;case 5292:return Qe+t+ct+Oe(t,"basis","preferred-size")+t;case 6060:return Qe+"box-"+Oe(t,"-grow","")+Qe+t+ct+Oe(t,"grow","positive")+t;case 4554:return Qe+Oe(t,/([^-])(transform)/g,"$1"+Qe+"$2")+t;case 6187:return Oe(Oe(Oe(t,/(zoom-|grab)/,Qe+"$1"),/(image-set)/,Qe+"$1"),t,"")+t;case 5495:case 3959:return Oe(t,/(image-set\([^]*)/,Qe+"$1$`$1");case 4968:return Oe(Oe(t,/(.+:)(flex-)?(.*)/,Qe+"box-pack:$3"+ct+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Qe+t+t;case 4200:if(!Li(t,/flex-|baseline/))return ct+"grid-column-align"+hs(t,e)+t;break;case 2592:case 3360:return ct+Oe(t,"template-","")+t;case 4384:case 3616:return n&&n.some(function(i,r){return e=r,Li(i.props,/grid-\w+-end/)})?~$l(t+(n=n[e].value),"span",0)?t:ct+Oe(t,"-start","")+t+ct+"grid-row-span:"+(~$l(n,"span",0)?Li(n,/\d+/):+Li(n,/\d+/)-+Li(t,/\d+/))+";":ct+Oe(t,"-start","")+t;case 4896:case 4128:return n&&n.some(function(i){return Li(i.props,/grid-\w+-start/)})?t:ct+Oe(Oe(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return Oe(t,/(.+)-inline(.+)/,Qe+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(vi(t)-1-e>6)switch(Ft(t,e+1)){case 109:if(Ft(t,e+4)!==45)break;case 102:return Oe(t,/(.+:)(.+)-([^]+)/,"$1"+Qe+"$2-$3$1"+ea+(Ft(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~$l(t,"stretch",0)?gy(Oe(t,"stretch","fill-available"),e,n)+t:t}break;case 5152:case 5920:return Oe(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(i,r,o,s,a,l,u){return ct+r+":"+o+u+(s?ct+r+"-span:"+(a?l:+l-+o)+u:"")+t});case 4949:if(Ft(t,e+6)===121)return Oe(t,":",":"+Qe)+t;break;case 6444:switch(Ft(t,Ft(t,14)===45?18:11)){case 120:return Oe(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Qe+(Ft(t,14)===45?"inline-":"")+"box$3$1"+Qe+"$2$3$1"+ct+"$2box$3")+t;case 100:return Oe(t,":",":"+ct)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Oe(t,"scroll-","scroll-snap-")+t}return t}function bu(t,e){for(var n="",i=0;i<t.length;i++)n+=e(t[i],i,t,e)||"";return n}function A3(t,e,n,i){switch(t.type){case h3:if(t.children.length)break;case d3:case hp:return t.return=t.return||t.value;case cy:return"";case fy:return t.return=t.value+"{"+bu(t.children,i)+"}";case dc:if(!vi(t.value=t.props.join(",")))return""}return vi(n=bu(t.children,i))?t.return=t.value+"{"+n+"}":""}function C3(t){var e=py(t);return function(n,i,r,o){for(var s="",a=0;a<e;a++)s+=t[a](n,i,r,o)||"";return s}}function R3(t){return function(e){e.root||(e=e.return)&&t(e)}}function b3(t,e,n,i){if(t.length>-1&&!t.return)switch(t.type){case hp:t.return=gy(t.value,t.length,n);return;case fy:return bu([Qi(t,{value:Oe(t.value,"@","@"+Qe)})],i);case dc:if(t.length)return m3(n=t.props,function(r){switch(Li(r,i=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Ro(Qi(t,{props:[Oe(r,/:(read-\w+)/,":"+ea+"$1")]})),Ro(Qi(t,{props:[r]})),Zd(t,{props:x0(n,i)});break;case"::placeholder":Ro(Qi(t,{props:[Oe(r,/:(plac\w+)/,":"+Qe+"input-$1")]})),Ro(Qi(t,{props:[Oe(r,/:(plac\w+)/,":"+ea+"$1")]})),Ro(Qi(t,{props:[Oe(r,/:(plac\w+)/,ct+"input-$1")]})),Ro(Qi(t,{props:[r]})),Zd(t,{props:x0(n,i)});break}return""})}}var P3={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},ms=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",vy="active",_y="data-styled-version",gc="6.1.6",mp=`/*!sc*/
`,gp=typeof window<"u"&&"HTMLElement"in window,L3=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY),vc=Object.freeze([]),gs=Object.freeze({});function N3(t,e,n){return n===void 0&&(n=gs),t.theme!==n.theme&&t.theme||e||n.theme}var yy=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),I3=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,D3=/(^-|-$)/g;function M0(t){return t.replace(I3,"-").replace(D3,"")}var U3=/(a)(d)/gi,Rl=52,T0=function(t){return String.fromCharCode(t+(t>25?39:97))};function Jd(t){var e,n="";for(e=Math.abs(t);e>Rl;e=e/Rl|0)n=T0(e%Rl)+n;return(T0(e%Rl)+n).replace(U3,"$1-$2")}var Lf,xy=5381,Xo=function(t,e){for(var n=e.length;n;)t=33*t^e.charCodeAt(--n);return t},Sy=function(t){return Xo(xy,t)};function F3(t){return Jd(Sy(t)>>>0)}function O3(t){return t.displayName||t.name||"Component"}function Nf(t){return typeof t=="string"&&!0}var Ey=typeof Symbol=="function"&&Symbol.for,My=Ey?Symbol.for("react.memo"):60115,k3=Ey?Symbol.for("react.forward_ref"):60112,B3={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},H3={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Ty={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},z3=((Lf={})[k3]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Lf[My]=Ty,Lf);function w0(t){return("type"in(e=t)&&e.type.$$typeof)===My?Ty:"$$typeof"in t?z3[t.$$typeof]:B3;var e}var G3=Object.defineProperty,V3=Object.getOwnPropertyNames,A0=Object.getOwnPropertySymbols,W3=Object.getOwnPropertyDescriptor,X3=Object.getPrototypeOf,C0=Object.prototype;function wy(t,e,n){if(typeof e!="string"){if(C0){var i=X3(e);i&&i!==C0&&wy(t,i,n)}var r=V3(e);A0&&(r=r.concat(A0(e)));for(var o=w0(t),s=w0(e),a=0;a<r.length;++a){var l=r[a];if(!(l in H3||n&&n[l]||s&&l in s||o&&l in o)){var u=W3(e,l);try{G3(t,l,u)}catch{}}}}return t}function oo(t){return typeof t=="function"}function vp(t){return typeof t=="object"&&"styledComponentId"in t}function Vr(t,e){return t&&e?"".concat(t," ").concat(e):t||e||""}function R0(t,e){if(t.length===0)return"";for(var n=t[0],i=1;i<t.length;i++)n+=e?e+t[i]:t[i];return n}function Sa(t){return t!==null&&typeof t=="object"&&t.constructor.name===Object.name&&!("props"in t&&t.$$typeof)}function eh(t,e,n){if(n===void 0&&(n=!1),!n&&!Sa(t)&&!Array.isArray(t))return e;if(Array.isArray(e))for(var i=0;i<e.length;i++)t[i]=eh(t[i],e[i]);else if(Sa(e))for(var i in e)t[i]=eh(t[i],e[i]);return t}function _p(t,e){Object.defineProperty(t,"toString",{value:e})}function so(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var $3=function(){function t(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return t.prototype.indexOfGroup=function(e){for(var n=0,i=0;i<e;i++)n+=this.groupSizes[i];return n},t.prototype.insertRules=function(e,n){if(e>=this.groupSizes.length){for(var i=this.groupSizes,r=i.length,o=r;e>=o;)if((o<<=1)<0)throw so(16,"".concat(e));this.groupSizes=new Uint32Array(o),this.groupSizes.set(i),this.length=o;for(var s=r;s<o;s++)this.groupSizes[s]=0}for(var a=this.indexOfGroup(e+1),l=(s=0,n.length);s<l;s++)this.tag.insertRule(a,n[s])&&(this.groupSizes[e]++,a++)},t.prototype.clearGroup=function(e){if(e<this.length){var n=this.groupSizes[e],i=this.indexOfGroup(e),r=i+n;this.groupSizes[e]=0;for(var o=i;o<r;o++)this.tag.deleteRule(i)}},t.prototype.getGroup=function(e){var n="";if(e>=this.length||this.groupSizes[e]===0)return n;for(var i=this.groupSizes[e],r=this.indexOfGroup(e),o=r+i,s=r;s<o;s++)n+="".concat(this.tag.getRule(s)).concat(mp);return n},t}(),Yl=new Map,Pu=new Map,Zl=1,bl=function(t){if(Yl.has(t))return Yl.get(t);for(;Pu.has(Zl);)Zl++;var e=Zl++;return Yl.set(t,e),Pu.set(e,t),e},j3=function(t,e){Zl=e+1,Yl.set(t,e),Pu.set(e,t)},q3="style[".concat(ms,"][").concat(_y,'="').concat(gc,'"]'),Y3=new RegExp("^".concat(ms,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Z3=function(t,e,n){for(var i,r=n.split(","),o=0,s=r.length;o<s;o++)(i=r[o])&&t.registerName(e,i)},K3=function(t,e){for(var n,i=((n=e.textContent)!==null&&n!==void 0?n:"").split(mp),r=[],o=0,s=i.length;o<s;o++){var a=i[o].trim();if(a){var l=a.match(Y3);if(l){var u=0|parseInt(l[1],10),c=l[2];u!==0&&(j3(c,u),Z3(t,c,l[3]),t.getTag().insertRules(u,r)),r.length=0}else r.push(a)}}};function Q3(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Ay=function(t){var e=document.head,n=t||e,i=document.createElement("style"),r=function(a){var l=Array.from(a.querySelectorAll("style[".concat(ms,"]")));return l[l.length-1]}(n),o=r!==void 0?r.nextSibling:null;i.setAttribute(ms,vy),i.setAttribute(_y,gc);var s=Q3();return s&&i.setAttribute("nonce",s),n.insertBefore(i,o),i},J3=function(){function t(e){this.element=Ay(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var i=document.styleSheets,r=0,o=i.length;r<o;r++){var s=i[r];if(s.ownerNode===n)return s}throw so(17)}(this.element),this.length=0}return t.prototype.insertRule=function(e,n){try{return this.sheet.insertRule(n,e),this.length++,!0}catch{return!1}},t.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.prototype.getRule=function(e){var n=this.sheet.cssRules[e];return n&&n.cssText?n.cssText:""},t}(),eP=function(){function t(e){this.element=Ay(e),this.nodes=this.element.childNodes,this.length=0}return t.prototype.insertRule=function(e,n){if(e<=this.length&&e>=0){var i=document.createTextNode(n);return this.element.insertBefore(i,this.nodes[e]||null),this.length++,!0}return!1},t.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},t}(),tP=function(){function t(e){this.rules=[],this.length=0}return t.prototype.insertRule=function(e,n){return e<=this.length&&(this.rules.splice(e,0,n),this.length++,!0)},t.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},t}(),b0=gp,nP={isServer:!gp,useCSSOMInjection:!L3},Cy=function(){function t(e,n,i){e===void 0&&(e=gs),n===void 0&&(n={});var r=this;this.options=Kt(Kt({},nP),e),this.gs=n,this.names=new Map(i),this.server=!!e.isServer,!this.server&&gp&&b0&&(b0=!1,function(o){for(var s=document.querySelectorAll(q3),a=0,l=s.length;a<l;a++){var u=s[a];u&&u.getAttribute(ms)!==vy&&(K3(o,u),u.parentNode&&u.parentNode.removeChild(u))}}(this)),_p(this,function(){return function(o){for(var s=o.getTag(),a=s.length,l="",u=function(d){var f=function(h){return Pu.get(h)}(d);if(f===void 0)return"continue";var p=o.names.get(f),_=s.getGroup(d);if(p===void 0||_.length===0)return"continue";var y="".concat(ms,".g").concat(d,'[id="').concat(f,'"]'),g="";p!==void 0&&p.forEach(function(h){h.length>0&&(g+="".concat(h,","))}),l+="".concat(_).concat(y,'{content:"').concat(g,'"}').concat(mp)},c=0;c<a;c++)u(c);return l}(r)})}return t.registerId=function(e){return bl(e)},t.prototype.reconstructWithOptions=function(e,n){return n===void 0&&(n=!0),new t(Kt(Kt({},this.options),e),this.gs,n&&this.names||void 0)},t.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.prototype.getTag=function(){return this.tag||(this.tag=(e=function(n){var i=n.useCSSOMInjection,r=n.target;return n.isServer?new tP(r):i?new J3(r):new eP(r)}(this.options),new $3(e)));var e},t.prototype.hasNameForId=function(e,n){return this.names.has(e)&&this.names.get(e).has(n)},t.prototype.registerName=function(e,n){if(bl(e),this.names.has(e))this.names.get(e).add(n);else{var i=new Set;i.add(n),this.names.set(e,i)}},t.prototype.insertRules=function(e,n,i){this.registerName(e,n),this.getTag().insertRules(bl(e),i)},t.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.prototype.clearRules=function(e){this.getTag().clearGroup(bl(e)),this.clearNames(e)},t.prototype.clearTag=function(){this.tag=void 0},t}(),iP=/&/g,rP=/^\s*\/\/.*$/gm;function Ry(t,e){return t.map(function(n){return n.type==="rule"&&(n.value="".concat(e," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(e," ")),n.props=n.props.map(function(i){return"".concat(e," ").concat(i)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=Ry(n.children,e)),n})}function oP(t){var e,n,i,r=t===void 0?gs:t,o=r.options,s=o===void 0?gs:o,a=r.plugins,l=a===void 0?vc:a,u=function(f,p,_){return _.startsWith(n)&&_.endsWith(n)&&_.replaceAll(n,"").length>0?".".concat(e):f},c=l.slice();c.push(function(f){f.type===dc&&f.value.includes("&")&&(f.props[0]=f.props[0].replace(iP,n).replace(i,u))}),s.prefix&&c.push(b3),c.push(A3);var d=function(f,p,_,y){p===void 0&&(p=""),_===void 0&&(_=""),y===void 0&&(y="&"),e=y,n=p,i=new RegExp("\\".concat(n,"\\b"),"g");var g=f.replace(rP,""),h=T3(_||p?"".concat(_," ").concat(p," { ").concat(g," }"):g);s.namespace&&(h=Ry(h,s.namespace));var v=[];return bu(h,C3(c.concat(R3(function(m){return v.push(m)})))),v};return d.hash=l.length?l.reduce(function(f,p){return p.name||so(15),Xo(f,p.name)},xy).toString():"",d}var sP=new Cy,th=oP(),by=yr.createContext({shouldForwardProp:void 0,styleSheet:sP,stylis:th});by.Consumer;yr.createContext(void 0);function P0(){return Ye.useContext(by)}var aP=function(){function t(e,n){var i=this;this.inject=function(r,o){o===void 0&&(o=th);var s=i.name+o.hash;r.hasNameForId(i.id,s)||r.insertRules(i.id,s,o(i.rules,s,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=n,_p(this,function(){throw so(12,String(i.name))})}return t.prototype.getName=function(e){return e===void 0&&(e=th),this.name+e.hash},t}(),lP=function(t){return t>="A"&&t<="Z"};function L0(t){for(var e="",n=0;n<t.length;n++){var i=t[n];if(n===1&&i==="-"&&t[0]==="-")return t;lP(i)?e+="-"+i.toLowerCase():e+=i}return e.startsWith("ms-")?"-"+e:e}var Py=function(t){return t==null||t===!1||t===""},Ly=function(t){var e,n,i=[];for(var r in t){var o=t[r];t.hasOwnProperty(r)&&!Py(o)&&(Array.isArray(o)&&o.isCss||oo(o)?i.push("".concat(L0(r),":"),o,";"):Sa(o)?i.push.apply(i,Ru(Ru(["".concat(r," {")],Ly(o),!1),["}"],!1)):i.push("".concat(L0(r),": ").concat((e=r,(n=o)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||e in P3||e.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return i};function Zr(t,e,n,i){if(Py(t))return[];if(vp(t))return[".".concat(t.styledComponentId)];if(oo(t)){if(!oo(o=t)||o.prototype&&o.prototype.isReactComponent||!e)return[t];var r=t(e);return Zr(r,e,n,i)}var o;return t instanceof aP?n?(t.inject(n,i),[t.getName(i)]):[t]:Sa(t)?Ly(t):Array.isArray(t)?Array.prototype.concat.apply(vc,t.map(function(s){return Zr(s,e,n,i)})):[t.toString()]}function uP(t){for(var e=0;e<t.length;e+=1){var n=t[e];if(oo(n)&&!vp(n))return!1}return!0}var cP=Sy(gc),fP=function(){function t(e,n,i){this.rules=e,this.staticRulesId="",this.isStatic=(i===void 0||i.isStatic)&&uP(e),this.componentId=n,this.baseHash=Xo(cP,n),this.baseStyle=i,Cy.registerId(n)}return t.prototype.generateAndInjectStyles=function(e,n,i){var r=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,n,i):"";if(this.isStatic&&!i.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))r=Vr(r,this.staticRulesId);else{var o=R0(Zr(this.rules,e,n,i)),s=Jd(Xo(this.baseHash,o)>>>0);if(!n.hasNameForId(this.componentId,s)){var a=i(o,".".concat(s),void 0,this.componentId);n.insertRules(this.componentId,s,a)}r=Vr(r,s),this.staticRulesId=s}else{for(var l=Xo(this.baseHash,i.hash),u="",c=0;c<this.rules.length;c++){var d=this.rules[c];if(typeof d=="string")u+=d;else if(d){var f=R0(Zr(d,e,n,i));l=Xo(l,f+c),u+=f}}if(u){var p=Jd(l>>>0);n.hasNameForId(this.componentId,p)||n.insertRules(this.componentId,p,i(u,".".concat(p),void 0,this.componentId)),r=Vr(r,p)}}return r},t}(),Lu=yr.createContext(void 0);Lu.Consumer;function dP(t){var e=yr.useContext(Lu),n=Ye.useMemo(function(){return function(i,r){if(!i)throw so(14);if(oo(i)){var o=i(r);return o}if(Array.isArray(i)||typeof i!="object")throw so(8);return r?Kt(Kt({},r),i):i}(t.theme,e)},[t.theme,e]);return t.children?yr.createElement(Lu.Provider,{value:n},t.children):null}var If={};function hP(t,e,n){var i=vp(t),r=t,o=!Nf(t),s=e.attrs,a=s===void 0?vc:s,l=e.componentId,u=l===void 0?function(x,R){var T=typeof x!="string"?"sc":M0(x);If[T]=(If[T]||0)+1;var M="".concat(T,"-").concat(F3(gc+T+If[T]));return R?"".concat(R,"-").concat(M):M}(e.displayName,e.parentComponentId):l,c=e.displayName,d=c===void 0?function(x){return Nf(x)?"styled.".concat(x):"Styled(".concat(O3(x),")")}(t):c,f=e.displayName&&e.componentId?"".concat(M0(e.displayName),"-").concat(e.componentId):e.componentId||u,p=i&&r.attrs?r.attrs.concat(a).filter(Boolean):a,_=e.shouldForwardProp;if(i&&r.shouldForwardProp){var y=r.shouldForwardProp;if(e.shouldForwardProp){var g=e.shouldForwardProp;_=function(x,R){return y(x,R)&&g(x,R)}}else _=y}var h=new fP(n,f,i?r.componentStyle:void 0);function v(x,R){return function(T,M,L){var E=T.attrs,A=T.componentStyle,F=T.defaultProps,$=T.foldedComponentIds,te=T.styledComponentId,P=T.target,O=yr.useContext(Lu),X=P0(),Y=T.shouldForwardProp||X.shouldForwardProp,N=N3(M,O,F)||gs,I=function(se,ce,he){for(var Ae,Te=Kt(Kt({},ce),{className:void 0,theme:he}),Se=0;Se<se.length;Se+=1){var ze=oo(Ae=se[Se])?Ae(Te):Ae;for(var U in ze)Te[U]=U==="className"?Vr(Te[U],ze[U]):U==="style"?Kt(Kt({},Te[U]),ze[U]):ze[U]}return ce.className&&(Te.className=Vr(Te.className,ce.className)),Te}(E,M,N),G=I.as||P,j={};for(var Z in I)I[Z]===void 0||Z[0]==="$"||Z==="as"||Z==="theme"&&I.theme===N||(Z==="forwardedAs"?j.as=I.forwardedAs:Y&&!Y(Z,G)||(j[Z]=I[Z]));var W=function(se,ce){var he=P0(),Ae=se.generateAndInjectStyles(ce,he.styleSheet,he.stylis);return Ae}(A,I),q=Vr($,te);return W&&(q+=" "+W),I.className&&(q+=" "+I.className),j[Nf(G)&&!yy.has(G)?"class":"className"]=q,j.ref=L,Ye.createElement(G,j)}(m,x,R)}v.displayName=d;var m=yr.forwardRef(v);return m.attrs=p,m.componentStyle=h,m.displayName=d,m.shouldForwardProp=_,m.foldedComponentIds=i?Vr(r.foldedComponentIds,r.styledComponentId):"",m.styledComponentId=f,m.target=i?r.target:t,Object.defineProperty(m,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(x){this._foldedDefaultProps=i?function(R){for(var T=[],M=1;M<arguments.length;M++)T[M-1]=arguments[M];for(var L=0,E=T;L<E.length;L++)eh(R,E[L],!0);return R}({},r.defaultProps,x):x}}),_p(m,function(){return".".concat(m.styledComponentId)}),o&&wy(m,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),m}function N0(t,e){for(var n=[t[0]],i=0,r=e.length;i<r;i+=1)n.push(e[i],t[i+1]);return n}var I0=function(t){return Object.assign(t,{isCss:!0})};function wn(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(oo(t)||Sa(t))return I0(Zr(N0(vc,Ru([t],e,!0))));var i=t;return e.length===0&&i.length===1&&typeof i[0]=="string"?Zr(i):I0(Zr(N0(i,e)))}function nh(t,e,n){if(n===void 0&&(n=gs),!e)throw so(1,e);var i=function(r){for(var o=[],s=1;s<arguments.length;s++)o[s-1]=arguments[s];return t(e,n,wn.apply(void 0,Ru([r],o,!1)))};return i.attrs=function(r){return nh(t,e,Kt(Kt({},n),{attrs:Array.prototype.concat(n.attrs,r).filter(Boolean)}))},i.withConfig=function(r){return nh(t,e,Kt(Kt({},n),r))},i}var Ny=function(t){return nh(hP,t)},Jt=Ny;yy.forEach(function(t){Jt[t]=Ny(t)});const yp=Jt.div`
    --size: ${({$size:t})=>({normal:3.2,big:4.2})[t]}rem;
    height: var(--size);
    width: var(--size);
    pointer-events: none;

    ${({theme:t,$isClickable:e})=>e&&wn`
            position: relative;
            pointer-events: unset;
            cursor: pointer;
            &::after {
                position: absolute;
                top: -0.5rem;
                left: -0.5rem;
                content: '';
                display: block;
                height: calc(100% + 1rem);
                width: calc(100% + 1rem);
                transition: background-color 0.1s ease-out;
                border-radius: 100%;
            }

            &:hover::after {
                content: '';
                background-color: ${t.palette.shades.secondary[18]};
            }
        `}

    & > svg {
        height: inherit;
        width: inherit;
    }
`,Iy=({size:t="normal",variant:e="close",onClick:n})=>{const i={close:Qb,copyright:Jb,facebook:i3,instagram:r3,menu:o3,merch:s3,send:a3,share:l3,tiktok:u3,x:c3,youtube:f3,expand:n3,dot:e3,dotActive:t3}[e];return Ie.jsx(yp,{onClick:n,$size:t,$isClickable:!!n,dangerouslySetInnerHTML:{__html:i}})},pP=Jt.div`
    height: 8rem;
    width: fit-content;

    & > svg {
        height: 100%;
        width: 100%;
    }

    ${({theme:t,$isDark:e})=>e&&wn`
            & > svg > #Glasses {
                & > path {
                    stroke: ${t.palette.secondary};
                }

                & > #nose,
                rect {
                    fill: ${t.palette.secondary};
                }
            }
        `}

    ${({theme:t,$withFrame:e})=>e&&wn`
            height: 7rem;
            padding: 1rem;
            border-radius: 2rem;
            background-color: ${t.palette.shades.secondary[48]};
        `}
`,mP=({isDark:t,withFrame:e})=>Ie.jsx(pP,{$isDark:t,$withFrame:e,dangerouslySetInnerHTML:{__html:"logo"}}),Dy=Jt.a`
    font-size: inherit;
    text-decoration: none;
    color: inherit;
`,gP=({children:t,href:e="#"})=>Ie.jsx(Dy,{href:e,target:typeof e=="string"&&e.startsWith("#")?"_self":"_blank",rel:"noopener",children:t??e}),vP=Jt.ul`
    display: flex;
    font-size: 2.8rem;

    ${({theme:t,$variant:e})=>({header:wn`
                flex-direction: row;
                column-gap: 6rem;
                color: ${t.palette.primary};
            `,headerMobile:wn`
                position: absolute;
                top: 100%;
                left: -2rem;
                width: calc(100% + 4rem);
                padding: 0 3rem 1rem 3rem;
                flex-direction: column;
                color: ${t.palette.secondary};
                background-color: ${t.palette.shades.primary[87]};
            `,footer:wn`
                flex-direction: column;
                font-size: 1.4rem;
                gap: 1rem;
                color: ${t.palette.shades.primary[48]};
            `})[e]}
`,_P=Jt.li`
    cursor: pointer;

    ${({theme:t,$variant:e,$isCurrent:n})=>({header:wn`
                transition: opacity 0.1s ease-out;

                &:hover {
                    opacity: 0.5;
                }
            `,headerMobile:wn`
                & > ${Dy} {
                    display: block;
                    padding: 1rem;
                    text-align: center;
                    transition: background-color 0.1s ease-out;

                    &:hover {
                        background-color: ${t.palette.shades.secondary[38]};
                    }
                }
            `,footer:wn`
                font-size: 1.4rem;
                color: ${t.palette.shades.secondary[48]};
                transition: color 0.1s ease-out;

                &:hover {
                    color: ${t.palette.secondary};
                }

                ${n&&wn`
                    color: ${t.palette.secondary};
                    pointer-events: none;
                `}
            `})[e]}
`,D0=({variant:t,links:e,onItemClickCallback:n})=>Ie.jsx(vP,{$variant:t,children:e.length>0&&e.map(({isCurrent:i,children:r,href:o},s)=>Ie.jsx(_P,{$isCurrent:i,$variant:t,onClick:n,children:Ie.jsx(gP,{href:o,children:r})},s))}),U0={siteLinks:{id:"app.layout.footer.siteLinks",description:"Footer link to general site links.",defaultMessage:"Site Links"},myLinks:{id:"app.layout.footer.myLinks",description:"Footer link to personal links or information.",defaultMessage:"My links"}},yP=Jt.footer`
    width: 100%;
    padding: 2rem;
    color: ${({theme:t})=>t.palette.primary};
`,xP=Jt.div`
    margin: 0 auto;
    width: 100%;
    max-width: 600px;
    display: flex;
    flex-direction: column;
    gap: 2rem;
`,SP=Jt.div`
    display: flex;
    justify-content: center;
    column-gap: 2rem;
`,EP=Jt.div`
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
`,F0=Jt.div`
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
`,O0=Jt.span`
    color: ${({theme:t})=>t.palette.secondary};
    border-bottom: ${({theme:t})=>t.border.secondary};
    border-color: ${({theme:t})=>t.palette.shades.secondary[38]};
`,MP=Jt.div`
    margin: 0 auto;
    display: flex;
    align-items: center;
    column-gap: 1rem;
    color: ${({theme:t})=>t.palette.shades.secondary[48]};
    font-size: 1.6rem;

    & > ${yp} {
        fill: ${({theme:t})=>t.palette.shades.secondary[48]};
    }
`,TP=({siteLinks:t,myLinks:e})=>Ie.jsx(yP,{children:Ie.jsxs(xP,{children:[Ie.jsxs(SP,{children:[Ie.jsx(mP,{withFrame:!0}),Ie.jsxs(EP,{children:[Ie.jsxs(F0,{children:[Ie.jsx(O0,{children:Ie.jsx(Km,{...U0.siteLinks})}),Ie.jsx(D0,{links:t,variant:"footer"})]}),Ie.jsxs(F0,{children:[Ie.jsx(O0,{children:Ie.jsx(Km,{...U0.myLinks})}),Ie.jsx(D0,{links:e,variant:"footer"})]})]})]}),Ie.jsxs(MP,{children:[Ie.jsx(Iy,{variant:"copyright"}),"Copyright 2024"]})]})}),Pl={home:{id:"app.layout.home",description:"Navigation link to the 'Home' page.",defaultMessage:"Home"},about:{id:"app.layout.about",description:"Navigation link to the 'About' section.",defaultMessage:"About"},repository:{id:"app.layout.repository",description:"Navigation link to the project's repository section.",defaultMessage:"Current project's repository"},figma:{id:"app.layout.figma",description:"Navigation link to the project's figma section.",defaultMessage:"Website Figma project"}},wP=Jt.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: ${({theme:t})=>t.palette.primary};
`,AP=({children:t})=>{const e=oc(),n=[{children:e.formatMessage(Pl.home),href:"#home"},{children:e.formatMessage(Pl.about),href:"#about"}],i=[{children:"LinkedIn",href:"https://www.linkedin.com/in/bartlomiej-sniatkowski/"},{children:"Github",href:"https://github.com/BSniatkowski"},{children:e.formatMessage(Pl.repository),href:"https://github.com/BSniatkowski/z-nosem-w-piwie-react"},{children:e.formatMessage(Pl.figma),href:"https://www.figma.com/file/7sIhgDCOUo9jGmuUOFngF9/Z-Nosem-W-Piwie?type=design&node-id=0-1&mode=design&t=RaFAvIdMTLGsTKoS-0"}];return Ie.jsxs(wP,{children:[t,Ie.jsx(TP,{siteLinks:n,myLinks:i})]})},CP=({children:t})=>Ie.jsx(Ie.Fragment,{children:t}),RP=Jt.div`
    position: fixed;
    bottom: ${({$isActive:t})=>t?"1rem":"-100%"};
    width: fit-content;
    max-width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    column-gap: 2rem;
    border-radius: 1rem;
    padding: 2rem;
    transition: bottom 0.3s ease-out;
    box-shadow: ${({theme:t})=>t.boxShadow.primary};

    ${({$isMobile:t})=>t?wn`
                  margin: 0 auto;
                  max-width: calc(100% - 4rem);
                  left: 0;
                  right: 0;
              `:wn`
                  left: 50%;
                  transform: translateX(-50%);
              `}

    color: ${({theme:t})=>t.palette.white};
    background-color: ${({$variant:t="info",theme:e})=>({info:e.palette.secondary,warning:e.palette.warning,error:e.palette.error})[t]};

    & > ${yp} {
        fill: ${({theme:t})=>t.palette.white};
    }
`,bP=Jt.span`
    font-size: 2.4rem;
    line-height: 1.4em;
    text-align: start;
    align-self: center;
`,PP=({isMobile:t,variant:e="info",message:n,isActive:i,onClose:r})=>Ie.jsxs(RP,{$isMobile:t,$isActive:i,$variant:e,children:[Ie.jsx(bP,{children:n}),Ie.jsx(Iy,{variant:"close",onClick:r})]}),LP={desktop:1920,desktopSmall:1366,tablet:1024,mobile:756},NP=t=>{const e=LP[t],[n,i]=Ye.useState(window.innerWidth),r=Ye.useMemo(()=>n<=e,[n,e]),o=()=>{i(window.innerWidth)};return Ye.useEffect(()=>(window.addEventListener("resize",o),()=>{window.removeEventListener("resize",o)}),[]),r};var Ea=(t=>(t.SHOW_SNACKBAR="showSnackbar",t.CLOSE_SNACKBAR="closeSnackbar",t))(Ea||{});const Uy={variant:"info",message:"",isActive:!1},IP=(t,e)=>{var n,i;switch(e.type){case Ea.SHOW_SNACKBAR:return{variant:(n=e==null?void 0:e.payload)==null?void 0:n.variant,message:(i=e==null?void 0:e.payload)==null?void 0:i.message,isActive:!0};case Ea.CLOSE_SNACKBAR:return{...t,isActive:!1}}},DP=Ye.createContext(Uy),UP=Ye.createContext(null),FP=({children:t})=>{const[e,n]=Ye.useReducer(IP,Uy),i=NP("mobile");return Ye.useEffect(()=>{const r=setTimeout(()=>{e.isActive&&n({type:Ea.CLOSE_SNACKBAR})},3e3);return()=>clearTimeout(r)},[e.isActive]),Ie.jsx(DP.Provider,{value:e,children:Ie.jsxs(UP.Provider,{value:n,children:[t,Ie.jsx(PP,{...e,isMobile:i,onClose:()=>n({type:Ea.CLOSE_SNACKBAR})})]})})},OP={palette:{primary:"#FFE0B2",secondary:"#5D4037",accent:"#FFCA28",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00",white:"#fff",black:"#000",grey:"#9E9E9E",greyLighten1:"#BDBDBD",greyLighten2:"#E0E0E0",shades:{black:{18:"#0000002E",38:"#00000061",87:"#000000DE"},primary:{48:"#FFE0B280",87:"#FFE0B2DE"},secondary:{18:"#5D40372E",38:"#5D403761",48:"#5D40377A"}}},border:{primary:"1rem solid #FFE0B2",secondary:"2px solid #5D40377A"},boxShadow:{primary:"0 0 8px #00000061",secondary:"-10px -10px 0 0 #FFE0B280"}},kP=({children:t})=>Ie.jsx(dP,{theme:OP,children:t});function BP({messages:t,locale:e}){const[n,i]=Ye.useState(e),r=Ye.useMemo(()=>t[n],[n,t]);return Ie.jsx(kP,{children:Ie.jsx(WM,{locale:n,messages:r,defaultLocale:"en-GB",children:Ie.jsx(FP,{children:Ie.jsx(CP,{children:Ie.jsx(AP,{children:Ie.jsx(Kb,{actualLocale:n,setActualIntlLocale:i})})})})})})}const HP="pl-PL",zP="en-GB",GP=[HP,zP],k0=t=>Vy(Object.assign({"../compiled-lang/en.json":()=>Cp(()=>import("./en-d8c220fa.js"),[],import.meta.url),"../compiled-lang/pl.json":()=>Cp(()=>import("./pl-d8c220fa.js"),[],import.meta.url)}),`../compiled-lang/${t}.json`);(async()=>{var n,i;const t=(n=await k0("en"))==null?void 0:n.default,e=(i=await k0("pl"))==null?void 0:i.default;Df.createRoot(document.getElementById("root")).render(Ie.jsx(yr.StrictMode,{children:Ie.jsx(BP,{messages:{"en-GB":t,"pl-PL":e},locale:GP.includes(navigator.language)?navigator.language:"en-GB"})}))})();
