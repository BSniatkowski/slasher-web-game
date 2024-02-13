(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();const Rx="modulepreload",bx=function(t,e){return new URL(t,e).href},hp={},pp=function(e,n,i){if(!n||n.length===0)return e();const r=document.getElementsByTagName("link");return Promise.all(n.map(o=>{if(o=bx(o,i),o in hp)return;hp[o]=!0;const s=o.endsWith(".css"),a=s?'[rel="stylesheet"]':"";if(!!i)for(let f=r.length-1;f>=0;f--){const h=r[f];if(h.href===o&&(!s||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${a}`))return;const u=document.createElement("link");if(u.rel=s?"stylesheet":Rx,s||(u.as="script",u.crossOrigin=""),u.href=o,document.head.appendChild(u),s)return new Promise((f,h)=>{u.addEventListener("load",f),u.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>e()).catch(o=>{const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=o,window.dispatchEvent(s),!s.defaultPrevented)throw o})},Px=(t,e)=>{const n=t[e];return n?typeof n=="function"?n():Promise.resolve(n):new Promise((i,r)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(r.bind(null,new Error("Unknown variable dynamic import: "+e)))})};function Lx(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var w0={exports:{}},Mu={},A0={exports:{}},Xe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ya=Symbol.for("react.element"),Nx=Symbol.for("react.portal"),Dx=Symbol.for("react.fragment"),Ix=Symbol.for("react.strict_mode"),Ux=Symbol.for("react.profiler"),Fx=Symbol.for("react.provider"),Ox=Symbol.for("react.context"),Bx=Symbol.for("react.forward_ref"),kx=Symbol.for("react.suspense"),Hx=Symbol.for("react.memo"),zx=Symbol.for("react.lazy"),mp=Symbol.iterator;function Gx(t){return t===null||typeof t!="object"?null:(t=mp&&t[mp]||t["@@iterator"],typeof t=="function"?t:null)}var C0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},R0=Object.assign,b0={};function ps(t,e,n){this.props=t,this.context=e,this.refs=b0,this.updater=n||C0}ps.prototype.isReactComponent={};ps.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ps.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function P0(){}P0.prototype=ps.prototype;function Wd(t,e,n){this.props=t,this.context=e,this.refs=b0,this.updater=n||C0}var Xd=Wd.prototype=new P0;Xd.constructor=Wd;R0(Xd,ps.prototype);Xd.isPureReactComponent=!0;var gp=Array.isArray,L0=Object.prototype.hasOwnProperty,$d={current:null},N0={key:!0,ref:!0,__self:!0,__source:!0};function D0(t,e,n){var i,r={},o=null,s=null;if(e!=null)for(i in e.ref!==void 0&&(s=e.ref),e.key!==void 0&&(o=""+e.key),e)L0.call(e,i)&&!N0.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:ya,type:t,key:o,ref:s,props:r,_owner:$d.current}}function Vx(t,e){return{$$typeof:ya,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function jd(t){return typeof t=="object"&&t!==null&&t.$$typeof===ya}function Wx(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var vp=/\/+/g;function hc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Wx(""+t.key):e.toString(36)}function Ml(t,e,n,i,r){var o=typeof t;(o==="undefined"||o==="boolean")&&(t=null);var s=!1;if(t===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(t.$$typeof){case ya:case Nx:s=!0}}if(s)return s=t,r=r(s),t=i===""?"."+hc(s,0):i,gp(r)?(n="",t!=null&&(n=t.replace(vp,"$&/")+"/"),Ml(r,e,n,"",function(u){return u})):r!=null&&(jd(r)&&(r=Vx(r,n+(!r.key||s&&s.key===r.key?"":(""+r.key).replace(vp,"$&/")+"/")+t)),e.push(r)),1;if(s=0,i=i===""?".":i+":",gp(t))for(var a=0;a<t.length;a++){o=t[a];var l=i+hc(o,a);s+=Ml(o,e,n,l,r)}else if(l=Gx(t),typeof l=="function")for(t=l.call(t),a=0;!(o=t.next()).done;)o=o.value,l=i+hc(o,a++),s+=Ml(o,e,n,l,r);else if(o==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return s}function Na(t,e,n){if(t==null)return t;var i=[],r=0;return Ml(t,i,"","",function(o){return e.call(n,o,r++)}),i}function Xx(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var cn={current:null},Tl={transition:null},$x={ReactCurrentDispatcher:cn,ReactCurrentBatchConfig:Tl,ReactCurrentOwner:$d};Xe.Children={map:Na,forEach:function(t,e,n){Na(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Na(t,function(){e++}),e},toArray:function(t){return Na(t,function(e){return e})||[]},only:function(t){if(!jd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Xe.Component=ps;Xe.Fragment=Dx;Xe.Profiler=Ux;Xe.PureComponent=Wd;Xe.StrictMode=Ix;Xe.Suspense=kx;Xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$x;Xe.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=R0({},t.props),r=t.key,o=t.ref,s=t._owner;if(e!=null){if(e.ref!==void 0&&(o=e.ref,s=$d.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)L0.call(e,l)&&!N0.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:ya,type:t.type,key:r,ref:o,props:i,_owner:s}};Xe.createContext=function(t){return t={$$typeof:Ox,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Fx,_context:t},t.Consumer=t};Xe.createElement=D0;Xe.createFactory=function(t){var e=D0.bind(null,t);return e.type=t,e};Xe.createRef=function(){return{current:null}};Xe.forwardRef=function(t){return{$$typeof:Bx,render:t}};Xe.isValidElement=jd;Xe.lazy=function(t){return{$$typeof:zx,_payload:{_status:-1,_result:t},_init:Xx}};Xe.memo=function(t,e){return{$$typeof:Hx,type:t,compare:e===void 0?null:e}};Xe.startTransition=function(t){var e=Tl.transition;Tl.transition={};try{t()}finally{Tl.transition=e}};Xe.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Xe.useCallback=function(t,e){return cn.current.useCallback(t,e)};Xe.useContext=function(t){return cn.current.useContext(t)};Xe.useDebugValue=function(){};Xe.useDeferredValue=function(t){return cn.current.useDeferredValue(t)};Xe.useEffect=function(t,e){return cn.current.useEffect(t,e)};Xe.useId=function(){return cn.current.useId()};Xe.useImperativeHandle=function(t,e,n){return cn.current.useImperativeHandle(t,e,n)};Xe.useInsertionEffect=function(t,e){return cn.current.useInsertionEffect(t,e)};Xe.useLayoutEffect=function(t,e){return cn.current.useLayoutEffect(t,e)};Xe.useMemo=function(t,e){return cn.current.useMemo(t,e)};Xe.useReducer=function(t,e,n){return cn.current.useReducer(t,e,n)};Xe.useRef=function(t){return cn.current.useRef(t)};Xe.useState=function(t){return cn.current.useState(t)};Xe.useSyncExternalStore=function(t,e,n){return cn.current.useSyncExternalStore(t,e,n)};Xe.useTransition=function(){return cn.current.useTransition()};Xe.version="18.2.0";A0.exports=Xe;var Ye=A0.exports;const mr=Lx(Ye);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jx=Ye,Yx=Symbol.for("react.element"),qx=Symbol.for("react.fragment"),Zx=Object.prototype.hasOwnProperty,Kx=jx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Qx={key:!0,ref:!0,__self:!0,__source:!0};function I0(t,e,n){var i,r={},o=null,s=null;n!==void 0&&(o=""+n),e.key!==void 0&&(o=""+e.key),e.ref!==void 0&&(s=e.ref);for(i in e)Zx.call(e,i)&&!Qx.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:Yx,type:t,key:o,ref:s,props:r,_owner:Kx.current}}Mu.Fragment=qx;Mu.jsx=I0;Mu.jsxs=I0;w0.exports=Mu;var Ne=w0.exports;var Mf={},U0={exports:{}},Rn={},F0={exports:{}},O0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(L,D){var G=L.length;L.push(D);e:for(;0<G;){var j=G-1>>>1,Z=L[j];if(0<r(Z,D))L[j]=D,L[G]=Z,G=j;else break e}}function n(L){return L.length===0?null:L[0]}function i(L){if(L.length===0)return null;var D=L[0],G=L.pop();if(G!==D){L[0]=G;e:for(var j=0,Z=L.length,W=Z>>>1;j<W;){var Y=2*(j+1)-1,oe=L[Y],ue=Y+1,de=L[ue];if(0>r(oe,G))ue<Z&&0>r(de,oe)?(L[j]=de,L[ue]=G,j=ue):(L[j]=oe,L[Y]=G,j=Y);else if(ue<Z&&0>r(de,G))L[j]=de,L[ue]=G,j=ue;else break e}}return D}function r(L,D){var G=L.sortIndex-D.sortIndex;return G!==0?G:L.id-D.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;t.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();t.unstable_now=function(){return s.now()-a}}var l=[],u=[],f=1,h=null,d=3,p=!1,_=!1,x=!1,g=typeof setTimeout=="function"?setTimeout:null,c=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(L){for(var D=n(u);D!==null;){if(D.callback===null)i(u);else if(D.startTime<=L)i(u),D.sortIndex=D.expirationTime,e(l,D);else break;D=n(u)}}function y(L){if(x=!1,m(L),!_)if(n(l)!==null)_=!0,X(R);else{var D=n(u);D!==null&&q(y,D.startTime-L)}}function R(L,D){_=!1,x&&(x=!1,c(N),N=-1),p=!0;var G=d;try{for(m(D),h=n(l);h!==null&&(!(h.expirationTime>D)||L&&!F());){var j=h.callback;if(typeof j=="function"){h.callback=null,d=h.priorityLevel;var Z=j(h.expirationTime<=D);D=t.unstable_now(),typeof Z=="function"?h.callback=Z:h===n(l)&&i(l),m(D)}else i(l);h=n(l)}if(h!==null)var W=!0;else{var Y=n(u);Y!==null&&q(y,Y.startTime-D),W=!1}return W}finally{h=null,d=G,p=!1}}var A=!1,M=null,N=-1,E=5,w=-1;function F(){return!(t.unstable_now()-w<E)}function $(){if(M!==null){var L=t.unstable_now();w=L;var D=!0;try{D=M(!0,L)}finally{D?ee():(A=!1,M=null)}}else A=!1}var ee;if(typeof v=="function")ee=function(){v($)};else if(typeof MessageChannel<"u"){var P=new MessageChannel,O=P.port2;P.port1.onmessage=$,ee=function(){O.postMessage(null)}}else ee=function(){g($,0)};function X(L){M=L,A||(A=!0,ee())}function q(L,D){N=g(function(){L(t.unstable_now())},D)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(L){L.callback=null},t.unstable_continueExecution=function(){_||p||(_=!0,X(R))},t.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<L?Math.floor(1e3/L):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(L){switch(d){case 1:case 2:case 3:var D=3;break;default:D=d}var G=d;d=D;try{return L()}finally{d=G}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(L,D){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var G=d;d=L;try{return D()}finally{d=G}},t.unstable_scheduleCallback=function(L,D,G){var j=t.unstable_now();switch(typeof G=="object"&&G!==null?(G=G.delay,G=typeof G=="number"&&0<G?j+G:j):G=j,L){case 1:var Z=-1;break;case 2:Z=250;break;case 5:Z=1073741823;break;case 4:Z=1e4;break;default:Z=5e3}return Z=G+Z,L={id:f++,callback:D,priorityLevel:L,startTime:G,expirationTime:Z,sortIndex:-1},G>j?(L.sortIndex=G,e(u,L),n(l)===null&&L===n(u)&&(x?(c(N),N=-1):x=!0,q(y,G-j))):(L.sortIndex=Z,e(l,L),_||p||(_=!0,X(R))),L},t.unstable_shouldYield=F,t.unstable_wrapCallback=function(L){var D=d;return function(){var G=d;d=D;try{return L.apply(this,arguments)}finally{d=G}}}})(O0);F0.exports=O0;var Jx=F0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var B0=Ye,Cn=Jx;function J(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var k0=new Set,Qs={};function ro(t,e){Ko(t,e),Ko(t+"Capture",e)}function Ko(t,e){for(Qs[t]=e,t=0;t<e.length;t++)k0.add(e[t])}var Ui=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Tf=Object.prototype.hasOwnProperty,ey=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_p={},xp={};function ty(t){return Tf.call(xp,t)?!0:Tf.call(_p,t)?!1:ey.test(t)?xp[t]=!0:(_p[t]=!0,!1)}function ny(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function iy(t,e,n,i){if(e===null||typeof e>"u"||ny(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function fn(t,e,n,i,r,o,s){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=o,this.removeEmptyString=s}var Vt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Vt[t]=new fn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Vt[e]=new fn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Vt[t]=new fn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Vt[t]=new fn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Vt[t]=new fn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Vt[t]=new fn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Vt[t]=new fn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Vt[t]=new fn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Vt[t]=new fn(t,5,!1,t.toLowerCase(),null,!1,!1)});var Yd=/[\-:]([a-z])/g;function qd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Yd,qd);Vt[e]=new fn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Yd,qd);Vt[e]=new fn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Yd,qd);Vt[e]=new fn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Vt[t]=new fn(t,1,!1,t.toLowerCase(),null,!1,!1)});Vt.xlinkHref=new fn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Vt[t]=new fn(t,1,!1,t.toLowerCase(),null,!0,!0)});function Zd(t,e,n,i){var r=Vt.hasOwnProperty(e)?Vt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(iy(e,n,r,i)&&(n=null),i||r===null?ty(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Hi=B0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Da=Symbol.for("react.element"),Co=Symbol.for("react.portal"),Ro=Symbol.for("react.fragment"),Kd=Symbol.for("react.strict_mode"),wf=Symbol.for("react.profiler"),H0=Symbol.for("react.provider"),z0=Symbol.for("react.context"),Qd=Symbol.for("react.forward_ref"),Af=Symbol.for("react.suspense"),Cf=Symbol.for("react.suspense_list"),Jd=Symbol.for("react.memo"),qi=Symbol.for("react.lazy"),G0=Symbol.for("react.offscreen"),yp=Symbol.iterator;function Es(t){return t===null||typeof t!="object"?null:(t=yp&&t[yp]||t["@@iterator"],typeof t=="function"?t:null)}var _t=Object.assign,pc;function Is(t){if(pc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);pc=e&&e[1]||""}return`
`+pc+t}var mc=!1;function gc(t,e){if(!t||mc)return"";mc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){i=u}t.call(e.prototype)}else{try{throw Error()}catch(u){i=u}t()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),o=i.stack.split(`
`),s=r.length-1,a=o.length-1;1<=s&&0<=a&&r[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(r[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||r[s]!==o[a]){var l=`
`+r[s].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=s&&0<=a);break}}}finally{mc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Is(t):""}function ry(t){switch(t.tag){case 5:return Is(t.type);case 16:return Is("Lazy");case 13:return Is("Suspense");case 19:return Is("SuspenseList");case 0:case 2:case 15:return t=gc(t.type,!1),t;case 11:return t=gc(t.type.render,!1),t;case 1:return t=gc(t.type,!0),t;default:return""}}function Rf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ro:return"Fragment";case Co:return"Portal";case wf:return"Profiler";case Kd:return"StrictMode";case Af:return"Suspense";case Cf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case z0:return(t.displayName||"Context")+".Consumer";case H0:return(t._context.displayName||"Context")+".Provider";case Qd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Jd:return e=t.displayName||null,e!==null?e:Rf(t.type)||"Memo";case qi:e=t._payload,t=t._init;try{return Rf(t(e))}catch{}}return null}function oy(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Rf(e);case 8:return e===Kd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function gr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function V0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function sy(t){var e=V0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,o=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(s){i=""+s,o.call(this,s)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(s){i=""+s},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ia(t){t._valueTracker||(t._valueTracker=sy(t))}function W0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=V0(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Gl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function bf(t,e){var n=e.checked;return _t({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Sp(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=gr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function X0(t,e){e=e.checked,e!=null&&Zd(t,"checked",e,!1)}function Pf(t,e){X0(t,e);var n=gr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Lf(t,e.type,n):e.hasOwnProperty("defaultValue")&&Lf(t,e.type,gr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Ep(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Lf(t,e,n){(e!=="number"||Gl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Us=Array.isArray;function Vo(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+gr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Nf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(J(91));return _t({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Mp(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(J(92));if(Us(n)){if(1<n.length)throw Error(J(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:gr(n)}}function $0(t,e){var n=gr(e.value),i=gr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Tp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function j0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Df(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?j0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ua,Y0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ua=Ua||document.createElement("div"),Ua.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ua.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Js(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ks={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ay=["Webkit","ms","Moz","O"];Object.keys(ks).forEach(function(t){ay.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ks[e]=ks[t]})});function q0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ks.hasOwnProperty(t)&&ks[t]?(""+e).trim():e+"px"}function Z0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=q0(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var ly=_t({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function If(t,e){if(e){if(ly[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(J(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(J(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(J(61))}if(e.style!=null&&typeof e.style!="object")throw Error(J(62))}}function Uf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ff=null;function eh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Of=null,Wo=null,Xo=null;function wp(t){if(t=Ma(t)){if(typeof Of!="function")throw Error(J(280));var e=t.stateNode;e&&(e=Ru(e),Of(t.stateNode,t.type,e))}}function K0(t){Wo?Xo?Xo.push(t):Xo=[t]:Wo=t}function Q0(){if(Wo){var t=Wo,e=Xo;if(Xo=Wo=null,wp(t),e)for(t=0;t<e.length;t++)wp(e[t])}}function J0(t,e){return t(e)}function ev(){}var vc=!1;function tv(t,e,n){if(vc)return t(e,n);vc=!0;try{return J0(t,e,n)}finally{vc=!1,(Wo!==null||Xo!==null)&&(ev(),Q0())}}function ea(t,e){var n=t.stateNode;if(n===null)return null;var i=Ru(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(J(231,e,typeof n));return n}var Bf=!1;if(Ui)try{var Ms={};Object.defineProperty(Ms,"passive",{get:function(){Bf=!0}}),window.addEventListener("test",Ms,Ms),window.removeEventListener("test",Ms,Ms)}catch{Bf=!1}function uy(t,e,n,i,r,o,s,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(f){this.onError(f)}}var Hs=!1,Vl=null,Wl=!1,kf=null,cy={onError:function(t){Hs=!0,Vl=t}};function fy(t,e,n,i,r,o,s,a,l){Hs=!1,Vl=null,uy.apply(cy,arguments)}function dy(t,e,n,i,r,o,s,a,l){if(fy.apply(this,arguments),Hs){if(Hs){var u=Vl;Hs=!1,Vl=null}else throw Error(J(198));Wl||(Wl=!0,kf=u)}}function oo(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function nv(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Ap(t){if(oo(t)!==t)throw Error(J(188))}function hy(t){var e=t.alternate;if(!e){if(e=oo(t),e===null)throw Error(J(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var o=r.alternate;if(o===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===o.child){for(o=r.child;o;){if(o===n)return Ap(r),t;if(o===i)return Ap(r),e;o=o.sibling}throw Error(J(188))}if(n.return!==i.return)n=r,i=o;else{for(var s=!1,a=r.child;a;){if(a===n){s=!0,n=r,i=o;break}if(a===i){s=!0,i=r,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,i=r;break}if(a===i){s=!0,i=o,n=r;break}a=a.sibling}if(!s)throw Error(J(189))}}if(n.alternate!==i)throw Error(J(190))}if(n.tag!==3)throw Error(J(188));return n.stateNode.current===n?t:e}function iv(t){return t=hy(t),t!==null?rv(t):null}function rv(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=rv(t);if(e!==null)return e;t=t.sibling}return null}var ov=Cn.unstable_scheduleCallback,Cp=Cn.unstable_cancelCallback,py=Cn.unstable_shouldYield,my=Cn.unstable_requestPaint,Mt=Cn.unstable_now,gy=Cn.unstable_getCurrentPriorityLevel,th=Cn.unstable_ImmediatePriority,sv=Cn.unstable_UserBlockingPriority,Xl=Cn.unstable_NormalPriority,vy=Cn.unstable_LowPriority,av=Cn.unstable_IdlePriority,Tu=null,gi=null;function _y(t){if(gi&&typeof gi.onCommitFiberRoot=="function")try{gi.onCommitFiberRoot(Tu,t,void 0,(t.current.flags&128)===128)}catch{}}var ti=Math.clz32?Math.clz32:Sy,xy=Math.log,yy=Math.LN2;function Sy(t){return t>>>=0,t===0?32:31-(xy(t)/yy|0)|0}var Fa=64,Oa=4194304;function Fs(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function $l(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,o=t.pingedLanes,s=n&268435455;if(s!==0){var a=s&~r;a!==0?i=Fs(a):(o&=s,o!==0&&(i=Fs(o)))}else s=n&~r,s!==0?i=Fs(s):o!==0&&(i=Fs(o));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,o=e&-e,r>=o||r===16&&(o&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-ti(e),r=1<<n,i|=t[n],e&=~r;return i}function Ey(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function My(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,o=t.pendingLanes;0<o;){var s=31-ti(o),a=1<<s,l=r[s];l===-1?(!(a&n)||a&i)&&(r[s]=Ey(a,e)):l<=e&&(t.expiredLanes|=a),o&=~a}}function Hf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function lv(){var t=Fa;return Fa<<=1,!(Fa&4194240)&&(Fa=64),t}function _c(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Sa(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-ti(e),t[e]=n}function Ty(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-ti(n),o=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~o}}function nh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-ti(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var Je=0;function uv(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var cv,ih,fv,dv,hv,zf=!1,Ba=[],rr=null,or=null,sr=null,ta=new Map,na=new Map,Qi=[],wy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Rp(t,e){switch(t){case"focusin":case"focusout":rr=null;break;case"dragenter":case"dragleave":or=null;break;case"mouseover":case"mouseout":sr=null;break;case"pointerover":case"pointerout":ta.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":na.delete(e.pointerId)}}function Ts(t,e,n,i,r,o){return t===null||t.nativeEvent!==o?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:o,targetContainers:[r]},e!==null&&(e=Ma(e),e!==null&&ih(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function Ay(t,e,n,i,r){switch(e){case"focusin":return rr=Ts(rr,t,e,n,i,r),!0;case"dragenter":return or=Ts(or,t,e,n,i,r),!0;case"mouseover":return sr=Ts(sr,t,e,n,i,r),!0;case"pointerover":var o=r.pointerId;return ta.set(o,Ts(ta.get(o)||null,t,e,n,i,r)),!0;case"gotpointercapture":return o=r.pointerId,na.set(o,Ts(na.get(o)||null,t,e,n,i,r)),!0}return!1}function pv(t){var e=Or(t.target);if(e!==null){var n=oo(e);if(n!==null){if(e=n.tag,e===13){if(e=nv(n),e!==null){t.blockedOn=e,hv(t.priority,function(){fv(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function wl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Gf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Ff=i,n.target.dispatchEvent(i),Ff=null}else return e=Ma(n),e!==null&&ih(e),t.blockedOn=n,!1;e.shift()}return!0}function bp(t,e,n){wl(t)&&n.delete(e)}function Cy(){zf=!1,rr!==null&&wl(rr)&&(rr=null),or!==null&&wl(or)&&(or=null),sr!==null&&wl(sr)&&(sr=null),ta.forEach(bp),na.forEach(bp)}function ws(t,e){t.blockedOn===e&&(t.blockedOn=null,zf||(zf=!0,Cn.unstable_scheduleCallback(Cn.unstable_NormalPriority,Cy)))}function ia(t){function e(r){return ws(r,t)}if(0<Ba.length){ws(Ba[0],t);for(var n=1;n<Ba.length;n++){var i=Ba[n];i.blockedOn===t&&(i.blockedOn=null)}}for(rr!==null&&ws(rr,t),or!==null&&ws(or,t),sr!==null&&ws(sr,t),ta.forEach(e),na.forEach(e),n=0;n<Qi.length;n++)i=Qi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Qi.length&&(n=Qi[0],n.blockedOn===null);)pv(n),n.blockedOn===null&&Qi.shift()}var $o=Hi.ReactCurrentBatchConfig,jl=!0;function Ry(t,e,n,i){var r=Je,o=$o.transition;$o.transition=null;try{Je=1,rh(t,e,n,i)}finally{Je=r,$o.transition=o}}function by(t,e,n,i){var r=Je,o=$o.transition;$o.transition=null;try{Je=4,rh(t,e,n,i)}finally{Je=r,$o.transition=o}}function rh(t,e,n,i){if(jl){var r=Gf(t,e,n,i);if(r===null)Rc(t,e,i,Yl,n),Rp(t,i);else if(Ay(r,t,e,n,i))i.stopPropagation();else if(Rp(t,i),e&4&&-1<wy.indexOf(t)){for(;r!==null;){var o=Ma(r);if(o!==null&&cv(o),o=Gf(t,e,n,i),o===null&&Rc(t,e,i,Yl,n),o===r)break;r=o}r!==null&&i.stopPropagation()}else Rc(t,e,i,null,n)}}var Yl=null;function Gf(t,e,n,i){if(Yl=null,t=eh(i),t=Or(t),t!==null)if(e=oo(t),e===null)t=null;else if(n=e.tag,n===13){if(t=nv(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Yl=t,null}function mv(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(gy()){case th:return 1;case sv:return 4;case Xl:case vy:return 16;case av:return 536870912;default:return 16}default:return 16}}var er=null,oh=null,Al=null;function gv(){if(Al)return Al;var t,e=oh,n=e.length,i,r="value"in er?er.value:er.textContent,o=r.length;for(t=0;t<n&&e[t]===r[t];t++);var s=n-t;for(i=1;i<=s&&e[n-i]===r[o-i];i++);return Al=r.slice(t,1<i?1-i:void 0)}function Cl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ka(){return!0}function Pp(){return!1}function bn(t){function e(n,i,r,o,s){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?ka:Pp,this.isPropagationStopped=Pp,this}return _t(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ka)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ka)},persist:function(){},isPersistent:ka}),e}var ms={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},sh=bn(ms),Ea=_t({},ms,{view:0,detail:0}),Py=bn(Ea),xc,yc,As,wu=_t({},Ea,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ah,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==As&&(As&&t.type==="mousemove"?(xc=t.screenX-As.screenX,yc=t.screenY-As.screenY):yc=xc=0,As=t),xc)},movementY:function(t){return"movementY"in t?t.movementY:yc}}),Lp=bn(wu),Ly=_t({},wu,{dataTransfer:0}),Ny=bn(Ly),Dy=_t({},Ea,{relatedTarget:0}),Sc=bn(Dy),Iy=_t({},ms,{animationName:0,elapsedTime:0,pseudoElement:0}),Uy=bn(Iy),Fy=_t({},ms,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Oy=bn(Fy),By=_t({},ms,{data:0}),Np=bn(By),ky={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Hy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},zy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Gy(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=zy[t])?!!e[t]:!1}function ah(){return Gy}var Vy=_t({},Ea,{key:function(t){if(t.key){var e=ky[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Cl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Hy[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ah,charCode:function(t){return t.type==="keypress"?Cl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Cl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Wy=bn(Vy),Xy=_t({},wu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Dp=bn(Xy),$y=_t({},Ea,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ah}),jy=bn($y),Yy=_t({},ms,{propertyName:0,elapsedTime:0,pseudoElement:0}),qy=bn(Yy),Zy=_t({},wu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Ky=bn(Zy),Qy=[9,13,27,32],lh=Ui&&"CompositionEvent"in window,zs=null;Ui&&"documentMode"in document&&(zs=document.documentMode);var Jy=Ui&&"TextEvent"in window&&!zs,vv=Ui&&(!lh||zs&&8<zs&&11>=zs),Ip=String.fromCharCode(32),Up=!1;function _v(t,e){switch(t){case"keyup":return Qy.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function xv(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var bo=!1;function eS(t,e){switch(t){case"compositionend":return xv(e);case"keypress":return e.which!==32?null:(Up=!0,Ip);case"textInput":return t=e.data,t===Ip&&Up?null:t;default:return null}}function tS(t,e){if(bo)return t==="compositionend"||!lh&&_v(t,e)?(t=gv(),Al=oh=er=null,bo=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return vv&&e.locale!=="ko"?null:e.data;default:return null}}var nS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Fp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!nS[t.type]:e==="textarea"}function yv(t,e,n,i){K0(i),e=ql(e,"onChange"),0<e.length&&(n=new sh("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Gs=null,ra=null;function iS(t){Lv(t,0)}function Au(t){var e=No(t);if(W0(e))return t}function rS(t,e){if(t==="change")return e}var Sv=!1;if(Ui){var Ec;if(Ui){var Mc="oninput"in document;if(!Mc){var Op=document.createElement("div");Op.setAttribute("oninput","return;"),Mc=typeof Op.oninput=="function"}Ec=Mc}else Ec=!1;Sv=Ec&&(!document.documentMode||9<document.documentMode)}function Bp(){Gs&&(Gs.detachEvent("onpropertychange",Ev),ra=Gs=null)}function Ev(t){if(t.propertyName==="value"&&Au(ra)){var e=[];yv(e,ra,t,eh(t)),tv(iS,e)}}function oS(t,e,n){t==="focusin"?(Bp(),Gs=e,ra=n,Gs.attachEvent("onpropertychange",Ev)):t==="focusout"&&Bp()}function sS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Au(ra)}function aS(t,e){if(t==="click")return Au(e)}function lS(t,e){if(t==="input"||t==="change")return Au(e)}function uS(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var oi=typeof Object.is=="function"?Object.is:uS;function oa(t,e){if(oi(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Tf.call(e,r)||!oi(t[r],e[r]))return!1}return!0}function kp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Hp(t,e){var n=kp(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=kp(n)}}function Mv(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Mv(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Tv(){for(var t=window,e=Gl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Gl(t.document)}return e}function uh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function cS(t){var e=Tv(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Mv(n.ownerDocument.documentElement,n)){if(i!==null&&uh(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,o=Math.min(i.start,r);i=i.end===void 0?o:Math.min(i.end,r),!t.extend&&o>i&&(r=i,i=o,o=r),r=Hp(n,o);var s=Hp(n,i);r&&s&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==s.node||t.focusOffset!==s.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),o>i?(t.addRange(e),t.extend(s.node,s.offset)):(e.setEnd(s.node,s.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var fS=Ui&&"documentMode"in document&&11>=document.documentMode,Po=null,Vf=null,Vs=null,Wf=!1;function zp(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Wf||Po==null||Po!==Gl(i)||(i=Po,"selectionStart"in i&&uh(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Vs&&oa(Vs,i)||(Vs=i,i=ql(Vf,"onSelect"),0<i.length&&(e=new sh("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Po)))}function Ha(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Lo={animationend:Ha("Animation","AnimationEnd"),animationiteration:Ha("Animation","AnimationIteration"),animationstart:Ha("Animation","AnimationStart"),transitionend:Ha("Transition","TransitionEnd")},Tc={},wv={};Ui&&(wv=document.createElement("div").style,"AnimationEvent"in window||(delete Lo.animationend.animation,delete Lo.animationiteration.animation,delete Lo.animationstart.animation),"TransitionEvent"in window||delete Lo.transitionend.transition);function Cu(t){if(Tc[t])return Tc[t];if(!Lo[t])return t;var e=Lo[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in wv)return Tc[t]=e[n];return t}var Av=Cu("animationend"),Cv=Cu("animationiteration"),Rv=Cu("animationstart"),bv=Cu("transitionend"),Pv=new Map,Gp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function xr(t,e){Pv.set(t,e),ro(e,[t])}for(var wc=0;wc<Gp.length;wc++){var Ac=Gp[wc],dS=Ac.toLowerCase(),hS=Ac[0].toUpperCase()+Ac.slice(1);xr(dS,"on"+hS)}xr(Av,"onAnimationEnd");xr(Cv,"onAnimationIteration");xr(Rv,"onAnimationStart");xr("dblclick","onDoubleClick");xr("focusin","onFocus");xr("focusout","onBlur");xr(bv,"onTransitionEnd");Ko("onMouseEnter",["mouseout","mouseover"]);Ko("onMouseLeave",["mouseout","mouseover"]);Ko("onPointerEnter",["pointerout","pointerover"]);Ko("onPointerLeave",["pointerout","pointerover"]);ro("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ro("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ro("onBeforeInput",["compositionend","keypress","textInput","paste"]);ro("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ro("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ro("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Os="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),pS=new Set("cancel close invalid load scroll toggle".split(" ").concat(Os));function Vp(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,dy(i,e,void 0,t),t.currentTarget=null}function Lv(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var o=void 0;if(e)for(var s=i.length-1;0<=s;s--){var a=i[s],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==o&&r.isPropagationStopped())break e;Vp(r,a,u),o=l}else for(s=0;s<i.length;s++){if(a=i[s],l=a.instance,u=a.currentTarget,a=a.listener,l!==o&&r.isPropagationStopped())break e;Vp(r,a,u),o=l}}}if(Wl)throw t=kf,Wl=!1,kf=null,t}function lt(t,e){var n=e[qf];n===void 0&&(n=e[qf]=new Set);var i=t+"__bubble";n.has(i)||(Nv(e,t,2,!1),n.add(i))}function Cc(t,e,n){var i=0;e&&(i|=4),Nv(n,t,i,e)}var za="_reactListening"+Math.random().toString(36).slice(2);function sa(t){if(!t[za]){t[za]=!0,k0.forEach(function(n){n!=="selectionchange"&&(pS.has(n)||Cc(n,!1,t),Cc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[za]||(e[za]=!0,Cc("selectionchange",!1,e))}}function Nv(t,e,n,i){switch(mv(e)){case 1:var r=Ry;break;case 4:r=by;break;default:r=rh}n=r.bind(null,e,n,t),r=void 0,!Bf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Rc(t,e,n,i,r){var o=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var s=i.tag;if(s===3||s===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(s===4)for(s=i.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;s=s.return}for(;a!==null;){if(s=Or(a),s===null)return;if(l=s.tag,l===5||l===6){i=o=s;continue e}a=a.parentNode}}i=i.return}tv(function(){var u=o,f=eh(n),h=[];e:{var d=Pv.get(t);if(d!==void 0){var p=sh,_=t;switch(t){case"keypress":if(Cl(n)===0)break e;case"keydown":case"keyup":p=Wy;break;case"focusin":_="focus",p=Sc;break;case"focusout":_="blur",p=Sc;break;case"beforeblur":case"afterblur":p=Sc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Lp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=Ny;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=jy;break;case Av:case Cv:case Rv:p=Uy;break;case bv:p=qy;break;case"scroll":p=Py;break;case"wheel":p=Ky;break;case"copy":case"cut":case"paste":p=Oy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Dp}var x=(e&4)!==0,g=!x&&t==="scroll",c=x?d!==null?d+"Capture":null:d;x=[];for(var v=u,m;v!==null;){m=v;var y=m.stateNode;if(m.tag===5&&y!==null&&(m=y,c!==null&&(y=ea(v,c),y!=null&&x.push(aa(v,y,m)))),g)break;v=v.return}0<x.length&&(d=new p(d,_,null,n,f),h.push({event:d,listeners:x}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",d&&n!==Ff&&(_=n.relatedTarget||n.fromElement)&&(Or(_)||_[Fi]))break e;if((p||d)&&(d=f.window===f?f:(d=f.ownerDocument)?d.defaultView||d.parentWindow:window,p?(_=n.relatedTarget||n.toElement,p=u,_=_?Or(_):null,_!==null&&(g=oo(_),_!==g||_.tag!==5&&_.tag!==6)&&(_=null)):(p=null,_=u),p!==_)){if(x=Lp,y="onMouseLeave",c="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(x=Dp,y="onPointerLeave",c="onPointerEnter",v="pointer"),g=p==null?d:No(p),m=_==null?d:No(_),d=new x(y,v+"leave",p,n,f),d.target=g,d.relatedTarget=m,y=null,Or(f)===u&&(x=new x(c,v+"enter",_,n,f),x.target=m,x.relatedTarget=g,y=x),g=y,p&&_)t:{for(x=p,c=_,v=0,m=x;m;m=ao(m))v++;for(m=0,y=c;y;y=ao(y))m++;for(;0<v-m;)x=ao(x),v--;for(;0<m-v;)c=ao(c),m--;for(;v--;){if(x===c||c!==null&&x===c.alternate)break t;x=ao(x),c=ao(c)}x=null}else x=null;p!==null&&Wp(h,d,p,x,!1),_!==null&&g!==null&&Wp(h,g,_,x,!0)}}e:{if(d=u?No(u):window,p=d.nodeName&&d.nodeName.toLowerCase(),p==="select"||p==="input"&&d.type==="file")var R=rS;else if(Fp(d))if(Sv)R=lS;else{R=sS;var A=oS}else(p=d.nodeName)&&p.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(R=aS);if(R&&(R=R(t,u))){yv(h,R,n,f);break e}A&&A(t,d,u),t==="focusout"&&(A=d._wrapperState)&&A.controlled&&d.type==="number"&&Lf(d,"number",d.value)}switch(A=u?No(u):window,t){case"focusin":(Fp(A)||A.contentEditable==="true")&&(Po=A,Vf=u,Vs=null);break;case"focusout":Vs=Vf=Po=null;break;case"mousedown":Wf=!0;break;case"contextmenu":case"mouseup":case"dragend":Wf=!1,zp(h,n,f);break;case"selectionchange":if(fS)break;case"keydown":case"keyup":zp(h,n,f)}var M;if(lh)e:{switch(t){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else bo?_v(t,n)&&(N="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(N="onCompositionStart");N&&(vv&&n.locale!=="ko"&&(bo||N!=="onCompositionStart"?N==="onCompositionEnd"&&bo&&(M=gv()):(er=f,oh="value"in er?er.value:er.textContent,bo=!0)),A=ql(u,N),0<A.length&&(N=new Np(N,t,null,n,f),h.push({event:N,listeners:A}),M?N.data=M:(M=xv(n),M!==null&&(N.data=M)))),(M=Jy?eS(t,n):tS(t,n))&&(u=ql(u,"onBeforeInput"),0<u.length&&(f=new Np("onBeforeInput","beforeinput",null,n,f),h.push({event:f,listeners:u}),f.data=M))}Lv(h,e)})}function aa(t,e,n){return{instance:t,listener:e,currentTarget:n}}function ql(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,o=r.stateNode;r.tag===5&&o!==null&&(r=o,o=ea(t,n),o!=null&&i.unshift(aa(t,o,r)),o=ea(t,e),o!=null&&i.push(aa(t,o,r))),t=t.return}return i}function ao(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Wp(t,e,n,i,r){for(var o=e._reactName,s=[];n!==null&&n!==i;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=ea(n,o),l!=null&&s.unshift(aa(n,l,a))):r||(l=ea(n,o),l!=null&&s.push(aa(n,l,a)))),n=n.return}s.length!==0&&t.push({event:e,listeners:s})}var mS=/\r\n?/g,gS=/\u0000|\uFFFD/g;function Xp(t){return(typeof t=="string"?t:""+t).replace(mS,`
`).replace(gS,"")}function Ga(t,e,n){if(e=Xp(e),Xp(t)!==e&&n)throw Error(J(425))}function Zl(){}var Xf=null,$f=null;function jf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Yf=typeof setTimeout=="function"?setTimeout:void 0,vS=typeof clearTimeout=="function"?clearTimeout:void 0,$p=typeof Promise=="function"?Promise:void 0,_S=typeof queueMicrotask=="function"?queueMicrotask:typeof $p<"u"?function(t){return $p.resolve(null).then(t).catch(xS)}:Yf;function xS(t){setTimeout(function(){throw t})}function bc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),ia(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);ia(e)}function ar(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function jp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var gs=Math.random().toString(36).slice(2),pi="__reactFiber$"+gs,la="__reactProps$"+gs,Fi="__reactContainer$"+gs,qf="__reactEvents$"+gs,yS="__reactListeners$"+gs,SS="__reactHandles$"+gs;function Or(t){var e=t[pi];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Fi]||n[pi]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=jp(t);t!==null;){if(n=t[pi])return n;t=jp(t)}return e}t=n,n=t.parentNode}return null}function Ma(t){return t=t[pi]||t[Fi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function No(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(J(33))}function Ru(t){return t[la]||null}var Zf=[],Do=-1;function yr(t){return{current:t}}function dt(t){0>Do||(t.current=Zf[Do],Zf[Do]=null,Do--)}function at(t,e){Do++,Zf[Do]=t.current,t.current=e}var vr={},Kt=yr(vr),pn=yr(!1),Yr=vr;function Qo(t,e){var n=t.type.contextTypes;if(!n)return vr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},o;for(o in n)r[o]=e[o];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function mn(t){return t=t.childContextTypes,t!=null}function Kl(){dt(pn),dt(Kt)}function Yp(t,e,n){if(Kt.current!==vr)throw Error(J(168));at(Kt,e),at(pn,n)}function Dv(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(J(108,oy(t)||"Unknown",r));return _t({},n,i)}function Ql(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||vr,Yr=Kt.current,at(Kt,t),at(pn,pn.current),!0}function qp(t,e,n){var i=t.stateNode;if(!i)throw Error(J(169));n?(t=Dv(t,e,Yr),i.__reactInternalMemoizedMergedChildContext=t,dt(pn),dt(Kt),at(Kt,t)):dt(pn),at(pn,n)}var bi=null,bu=!1,Pc=!1;function Iv(t){bi===null?bi=[t]:bi.push(t)}function ES(t){bu=!0,Iv(t)}function Sr(){if(!Pc&&bi!==null){Pc=!0;var t=0,e=Je;try{var n=bi;for(Je=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}bi=null,bu=!1}catch(r){throw bi!==null&&(bi=bi.slice(t+1)),ov(th,Sr),r}finally{Je=e,Pc=!1}}return null}var Io=[],Uo=0,Jl=null,eu=0,Dn=[],In=0,qr=null,Li=1,Ni="";function Pr(t,e){Io[Uo++]=eu,Io[Uo++]=Jl,Jl=t,eu=e}function Uv(t,e,n){Dn[In++]=Li,Dn[In++]=Ni,Dn[In++]=qr,qr=t;var i=Li;t=Ni;var r=32-ti(i)-1;i&=~(1<<r),n+=1;var o=32-ti(e)+r;if(30<o){var s=r-r%5;o=(i&(1<<s)-1).toString(32),i>>=s,r-=s,Li=1<<32-ti(e)+r|n<<r|i,Ni=o+t}else Li=1<<o|n<<r|i,Ni=t}function ch(t){t.return!==null&&(Pr(t,1),Uv(t,1,0))}function fh(t){for(;t===Jl;)Jl=Io[--Uo],Io[Uo]=null,eu=Io[--Uo],Io[Uo]=null;for(;t===qr;)qr=Dn[--In],Dn[In]=null,Ni=Dn[--In],Dn[In]=null,Li=Dn[--In],Dn[In]=null}var Tn=null,En=null,ht=!1,Kn=null;function Fv(t,e){var n=Bn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Zp(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Tn=t,En=ar(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Tn=t,En=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=qr!==null?{id:Li,overflow:Ni}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Bn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Tn=t,En=null,!0):!1;default:return!1}}function Kf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Qf(t){if(ht){var e=En;if(e){var n=e;if(!Zp(t,e)){if(Kf(t))throw Error(J(418));e=ar(n.nextSibling);var i=Tn;e&&Zp(t,e)?Fv(i,n):(t.flags=t.flags&-4097|2,ht=!1,Tn=t)}}else{if(Kf(t))throw Error(J(418));t.flags=t.flags&-4097|2,ht=!1,Tn=t}}}function Kp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Tn=t}function Va(t){if(t!==Tn)return!1;if(!ht)return Kp(t),ht=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!jf(t.type,t.memoizedProps)),e&&(e=En)){if(Kf(t))throw Ov(),Error(J(418));for(;e;)Fv(t,e),e=ar(e.nextSibling)}if(Kp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(J(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){En=ar(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}En=null}}else En=Tn?ar(t.stateNode.nextSibling):null;return!0}function Ov(){for(var t=En;t;)t=ar(t.nextSibling)}function Jo(){En=Tn=null,ht=!1}function dh(t){Kn===null?Kn=[t]:Kn.push(t)}var MS=Hi.ReactCurrentBatchConfig;function qn(t,e){if(t&&t.defaultProps){e=_t({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var tu=yr(null),nu=null,Fo=null,hh=null;function ph(){hh=Fo=nu=null}function mh(t){var e=tu.current;dt(tu),t._currentValue=e}function Jf(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function jo(t,e){nu=t,hh=Fo=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(hn=!0),t.firstContext=null)}function Hn(t){var e=t._currentValue;if(hh!==t)if(t={context:t,memoizedValue:e,next:null},Fo===null){if(nu===null)throw Error(J(308));Fo=t,nu.dependencies={lanes:0,firstContext:t}}else Fo=Fo.next=t;return e}var Br=null;function gh(t){Br===null?Br=[t]:Br.push(t)}function Bv(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,gh(e)):(n.next=r.next,r.next=n),e.interleaved=n,Oi(t,i)}function Oi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Zi=!1;function vh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function kv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ii(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function lr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,qe&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Oi(t,n)}return r=i.interleaved,r===null?(e.next=e,gh(i)):(e.next=r.next,r.next=e),i.interleaved=e,Oi(t,n)}function Rl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,nh(t,n)}}function Qp(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?r=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?r=o=e:o=o.next=e}else r=o=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:o,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function iu(t,e,n,i){var r=t.updateQueue;Zi=!1;var o=r.firstBaseUpdate,s=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,s===null?o=u:s.next=u,s=l;var f=t.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==s&&(a===null?f.firstBaseUpdate=u:a.next=u,f.lastBaseUpdate=l))}if(o!==null){var h=r.baseState;s=0,f=u=l=null,a=o;do{var d=a.lane,p=a.eventTime;if((i&d)===d){f!==null&&(f=f.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var _=t,x=a;switch(d=e,p=n,x.tag){case 1:if(_=x.payload,typeof _=="function"){h=_.call(p,h,d);break e}h=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=x.payload,d=typeof _=="function"?_.call(p,h,d):_,d==null)break e;h=_t({},h,d);break e;case 2:Zi=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=r.effects,d===null?r.effects=[a]:d.push(a))}else p={eventTime:p,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(u=f=p,l=h):f=f.next=p,s|=d;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;d=a,a=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(1);if(f===null&&(l=h),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=f,e=r.shared.interleaved,e!==null){r=e;do s|=r.lane,r=r.next;while(r!==e)}else o===null&&(r.shared.lanes=0);Kr|=s,t.lanes=s,t.memoizedState=h}}function Jp(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(J(191,r));r.call(i)}}}var Hv=new B0.Component().refs;function ed(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:_t({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Pu={isMounted:function(t){return(t=t._reactInternals)?oo(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=un(),r=cr(t),o=Ii(i,r);o.payload=e,n!=null&&(o.callback=n),e=lr(t,o,r),e!==null&&(ni(e,t,r,i),Rl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=un(),r=cr(t),o=Ii(i,r);o.tag=1,o.payload=e,n!=null&&(o.callback=n),e=lr(t,o,r),e!==null&&(ni(e,t,r,i),Rl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=un(),i=cr(t),r=Ii(n,i);r.tag=2,e!=null&&(r.callback=e),e=lr(t,r,i),e!==null&&(ni(e,t,i,n),Rl(e,t,i))}};function em(t,e,n,i,r,o,s){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,o,s):e.prototype&&e.prototype.isPureReactComponent?!oa(n,i)||!oa(r,o):!0}function zv(t,e,n){var i=!1,r=vr,o=e.contextType;return typeof o=="object"&&o!==null?o=Hn(o):(r=mn(e)?Yr:Kt.current,i=e.contextTypes,o=(i=i!=null)?Qo(t,r):vr),e=new e(n,o),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Pu,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=o),e}function tm(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Pu.enqueueReplaceState(e,e.state,null)}function td(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs=Hv,vh(t);var o=e.contextType;typeof o=="object"&&o!==null?r.context=Hn(o):(o=mn(e)?Yr:Kt.current,r.context=Qo(t,o)),r.state=t.memoizedState,o=e.getDerivedStateFromProps,typeof o=="function"&&(ed(t,e,o,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Pu.enqueueReplaceState(r,r.state,null),iu(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Cs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(J(309));var i=n.stateNode}if(!i)throw Error(J(147,t));var r=i,o=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===o?e.ref:(e=function(s){var a=r.refs;a===Hv&&(a=r.refs={}),s===null?delete a[o]:a[o]=s},e._stringRef=o,e)}if(typeof t!="string")throw Error(J(284));if(!n._owner)throw Error(J(290,t))}return t}function Wa(t,e){throw t=Object.prototype.toString.call(e),Error(J(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function nm(t){var e=t._init;return e(t._payload)}function Gv(t){function e(c,v){if(t){var m=c.deletions;m===null?(c.deletions=[v],c.flags|=16):m.push(v)}}function n(c,v){if(!t)return null;for(;v!==null;)e(c,v),v=v.sibling;return null}function i(c,v){for(c=new Map;v!==null;)v.key!==null?c.set(v.key,v):c.set(v.index,v),v=v.sibling;return c}function r(c,v){return c=fr(c,v),c.index=0,c.sibling=null,c}function o(c,v,m){return c.index=m,t?(m=c.alternate,m!==null?(m=m.index,m<v?(c.flags|=2,v):m):(c.flags|=2,v)):(c.flags|=1048576,v)}function s(c){return t&&c.alternate===null&&(c.flags|=2),c}function a(c,v,m,y){return v===null||v.tag!==6?(v=Oc(m,c.mode,y),v.return=c,v):(v=r(v,m),v.return=c,v)}function l(c,v,m,y){var R=m.type;return R===Ro?f(c,v,m.props.children,y,m.key):v!==null&&(v.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===qi&&nm(R)===v.type)?(y=r(v,m.props),y.ref=Cs(c,v,m),y.return=c,y):(y=Il(m.type,m.key,m.props,null,c.mode,y),y.ref=Cs(c,v,m),y.return=c,y)}function u(c,v,m,y){return v===null||v.tag!==4||v.stateNode.containerInfo!==m.containerInfo||v.stateNode.implementation!==m.implementation?(v=Bc(m,c.mode,y),v.return=c,v):(v=r(v,m.children||[]),v.return=c,v)}function f(c,v,m,y,R){return v===null||v.tag!==7?(v=Gr(m,c.mode,y,R),v.return=c,v):(v=r(v,m),v.return=c,v)}function h(c,v,m){if(typeof v=="string"&&v!==""||typeof v=="number")return v=Oc(""+v,c.mode,m),v.return=c,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Da:return m=Il(v.type,v.key,v.props,null,c.mode,m),m.ref=Cs(c,null,v),m.return=c,m;case Co:return v=Bc(v,c.mode,m),v.return=c,v;case qi:var y=v._init;return h(c,y(v._payload),m)}if(Us(v)||Es(v))return v=Gr(v,c.mode,m,null),v.return=c,v;Wa(c,v)}return null}function d(c,v,m,y){var R=v!==null?v.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return R!==null?null:a(c,v,""+m,y);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Da:return m.key===R?l(c,v,m,y):null;case Co:return m.key===R?u(c,v,m,y):null;case qi:return R=m._init,d(c,v,R(m._payload),y)}if(Us(m)||Es(m))return R!==null?null:f(c,v,m,y,null);Wa(c,m)}return null}function p(c,v,m,y,R){if(typeof y=="string"&&y!==""||typeof y=="number")return c=c.get(m)||null,a(v,c,""+y,R);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Da:return c=c.get(y.key===null?m:y.key)||null,l(v,c,y,R);case Co:return c=c.get(y.key===null?m:y.key)||null,u(v,c,y,R);case qi:var A=y._init;return p(c,v,m,A(y._payload),R)}if(Us(y)||Es(y))return c=c.get(m)||null,f(v,c,y,R,null);Wa(v,y)}return null}function _(c,v,m,y){for(var R=null,A=null,M=v,N=v=0,E=null;M!==null&&N<m.length;N++){M.index>N?(E=M,M=null):E=M.sibling;var w=d(c,M,m[N],y);if(w===null){M===null&&(M=E);break}t&&M&&w.alternate===null&&e(c,M),v=o(w,v,N),A===null?R=w:A.sibling=w,A=w,M=E}if(N===m.length)return n(c,M),ht&&Pr(c,N),R;if(M===null){for(;N<m.length;N++)M=h(c,m[N],y),M!==null&&(v=o(M,v,N),A===null?R=M:A.sibling=M,A=M);return ht&&Pr(c,N),R}for(M=i(c,M);N<m.length;N++)E=p(M,c,N,m[N],y),E!==null&&(t&&E.alternate!==null&&M.delete(E.key===null?N:E.key),v=o(E,v,N),A===null?R=E:A.sibling=E,A=E);return t&&M.forEach(function(F){return e(c,F)}),ht&&Pr(c,N),R}function x(c,v,m,y){var R=Es(m);if(typeof R!="function")throw Error(J(150));if(m=R.call(m),m==null)throw Error(J(151));for(var A=R=null,M=v,N=v=0,E=null,w=m.next();M!==null&&!w.done;N++,w=m.next()){M.index>N?(E=M,M=null):E=M.sibling;var F=d(c,M,w.value,y);if(F===null){M===null&&(M=E);break}t&&M&&F.alternate===null&&e(c,M),v=o(F,v,N),A===null?R=F:A.sibling=F,A=F,M=E}if(w.done)return n(c,M),ht&&Pr(c,N),R;if(M===null){for(;!w.done;N++,w=m.next())w=h(c,w.value,y),w!==null&&(v=o(w,v,N),A===null?R=w:A.sibling=w,A=w);return ht&&Pr(c,N),R}for(M=i(c,M);!w.done;N++,w=m.next())w=p(M,c,N,w.value,y),w!==null&&(t&&w.alternate!==null&&M.delete(w.key===null?N:w.key),v=o(w,v,N),A===null?R=w:A.sibling=w,A=w);return t&&M.forEach(function($){return e(c,$)}),ht&&Pr(c,N),R}function g(c,v,m,y){if(typeof m=="object"&&m!==null&&m.type===Ro&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case Da:e:{for(var R=m.key,A=v;A!==null;){if(A.key===R){if(R=m.type,R===Ro){if(A.tag===7){n(c,A.sibling),v=r(A,m.props.children),v.return=c,c=v;break e}}else if(A.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===qi&&nm(R)===A.type){n(c,A.sibling),v=r(A,m.props),v.ref=Cs(c,A,m),v.return=c,c=v;break e}n(c,A);break}else e(c,A);A=A.sibling}m.type===Ro?(v=Gr(m.props.children,c.mode,y,m.key),v.return=c,c=v):(y=Il(m.type,m.key,m.props,null,c.mode,y),y.ref=Cs(c,v,m),y.return=c,c=y)}return s(c);case Co:e:{for(A=m.key;v!==null;){if(v.key===A)if(v.tag===4&&v.stateNode.containerInfo===m.containerInfo&&v.stateNode.implementation===m.implementation){n(c,v.sibling),v=r(v,m.children||[]),v.return=c,c=v;break e}else{n(c,v);break}else e(c,v);v=v.sibling}v=Bc(m,c.mode,y),v.return=c,c=v}return s(c);case qi:return A=m._init,g(c,v,A(m._payload),y)}if(Us(m))return _(c,v,m,y);if(Es(m))return x(c,v,m,y);Wa(c,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,v!==null&&v.tag===6?(n(c,v.sibling),v=r(v,m),v.return=c,c=v):(n(c,v),v=Oc(m,c.mode,y),v.return=c,c=v),s(c)):n(c,v)}return g}var es=Gv(!0),Vv=Gv(!1),Ta={},vi=yr(Ta),ua=yr(Ta),ca=yr(Ta);function kr(t){if(t===Ta)throw Error(J(174));return t}function _h(t,e){switch(at(ca,e),at(ua,t),at(vi,Ta),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Df(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Df(e,t)}dt(vi),at(vi,e)}function ts(){dt(vi),dt(ua),dt(ca)}function Wv(t){kr(ca.current);var e=kr(vi.current),n=Df(e,t.type);e!==n&&(at(ua,t),at(vi,n))}function xh(t){ua.current===t&&(dt(vi),dt(ua))}var gt=yr(0);function ru(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Lc=[];function yh(){for(var t=0;t<Lc.length;t++)Lc[t]._workInProgressVersionPrimary=null;Lc.length=0}var bl=Hi.ReactCurrentDispatcher,Nc=Hi.ReactCurrentBatchConfig,Zr=0,vt=null,Ct=null,It=null,ou=!1,Ws=!1,fa=0,TS=0;function Xt(){throw Error(J(321))}function Sh(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!oi(t[n],e[n]))return!1;return!0}function Eh(t,e,n,i,r,o){if(Zr=o,vt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,bl.current=t===null||t.memoizedState===null?RS:bS,t=n(i,r),Ws){o=0;do{if(Ws=!1,fa=0,25<=o)throw Error(J(301));o+=1,It=Ct=null,e.updateQueue=null,bl.current=PS,t=n(i,r)}while(Ws)}if(bl.current=su,e=Ct!==null&&Ct.next!==null,Zr=0,It=Ct=vt=null,ou=!1,e)throw Error(J(300));return t}function Mh(){var t=fa!==0;return fa=0,t}function li(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return It===null?vt.memoizedState=It=t:It=It.next=t,It}function zn(){if(Ct===null){var t=vt.alternate;t=t!==null?t.memoizedState:null}else t=Ct.next;var e=It===null?vt.memoizedState:It.next;if(e!==null)It=e,Ct=t;else{if(t===null)throw Error(J(310));Ct=t,t={memoizedState:Ct.memoizedState,baseState:Ct.baseState,baseQueue:Ct.baseQueue,queue:Ct.queue,next:null},It===null?vt.memoizedState=It=t:It=It.next=t}return It}function da(t,e){return typeof e=="function"?e(t):e}function Dc(t){var e=zn(),n=e.queue;if(n===null)throw Error(J(311));n.lastRenderedReducer=t;var i=Ct,r=i.baseQueue,o=n.pending;if(o!==null){if(r!==null){var s=r.next;r.next=o.next,o.next=s}i.baseQueue=r=o,n.pending=null}if(r!==null){o=r.next,i=i.baseState;var a=s=null,l=null,u=o;do{var f=u.lane;if((Zr&f)===f)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:t(i,u.action);else{var h={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,s=i):l=l.next=h,vt.lanes|=f,Kr|=f}u=u.next}while(u!==null&&u!==o);l===null?s=i:l.next=a,oi(i,e.memoizedState)||(hn=!0),e.memoizedState=i,e.baseState=s,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do o=r.lane,vt.lanes|=o,Kr|=o,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Ic(t){var e=zn(),n=e.queue;if(n===null)throw Error(J(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,o=e.memoizedState;if(r!==null){n.pending=null;var s=r=r.next;do o=t(o,s.action),s=s.next;while(s!==r);oi(o,e.memoizedState)||(hn=!0),e.memoizedState=o,e.baseQueue===null&&(e.baseState=o),n.lastRenderedState=o}return[o,i]}function Xv(){}function $v(t,e){var n=vt,i=zn(),r=e(),o=!oi(i.memoizedState,r);if(o&&(i.memoizedState=r,hn=!0),i=i.queue,Th(qv.bind(null,n,i,t),[t]),i.getSnapshot!==e||o||It!==null&&It.memoizedState.tag&1){if(n.flags|=2048,ha(9,Yv.bind(null,n,i,r,e),void 0,null),Ft===null)throw Error(J(349));Zr&30||jv(n,e,r)}return r}function jv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=vt.updateQueue,e===null?(e={lastEffect:null,stores:null},vt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Yv(t,e,n,i){e.value=n,e.getSnapshot=i,Zv(e)&&Kv(t)}function qv(t,e,n){return n(function(){Zv(e)&&Kv(t)})}function Zv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!oi(t,n)}catch{return!0}}function Kv(t){var e=Oi(t,1);e!==null&&ni(e,t,1,-1)}function im(t){var e=li();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:da,lastRenderedState:t},e.queue=t,t=t.dispatch=CS.bind(null,vt,t),[e.memoizedState,t]}function ha(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=vt.updateQueue,e===null?(e={lastEffect:null,stores:null},vt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function Qv(){return zn().memoizedState}function Pl(t,e,n,i){var r=li();vt.flags|=t,r.memoizedState=ha(1|e,n,void 0,i===void 0?null:i)}function Lu(t,e,n,i){var r=zn();i=i===void 0?null:i;var o=void 0;if(Ct!==null){var s=Ct.memoizedState;if(o=s.destroy,i!==null&&Sh(i,s.deps)){r.memoizedState=ha(e,n,o,i);return}}vt.flags|=t,r.memoizedState=ha(1|e,n,o,i)}function rm(t,e){return Pl(8390656,8,t,e)}function Th(t,e){return Lu(2048,8,t,e)}function Jv(t,e){return Lu(4,2,t,e)}function e_(t,e){return Lu(4,4,t,e)}function t_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function n_(t,e,n){return n=n!=null?n.concat([t]):null,Lu(4,4,t_.bind(null,e,t),n)}function wh(){}function i_(t,e){var n=zn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Sh(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function r_(t,e){var n=zn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Sh(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function o_(t,e,n){return Zr&21?(oi(n,e)||(n=lv(),vt.lanes|=n,Kr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,hn=!0),t.memoizedState=n)}function wS(t,e){var n=Je;Je=n!==0&&4>n?n:4,t(!0);var i=Nc.transition;Nc.transition={};try{t(!1),e()}finally{Je=n,Nc.transition=i}}function s_(){return zn().memoizedState}function AS(t,e,n){var i=cr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},a_(t))l_(e,n);else if(n=Bv(t,e,n,i),n!==null){var r=un();ni(n,t,i,r),u_(n,e,i)}}function CS(t,e,n){var i=cr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(a_(t))l_(e,r);else{var o=t.alternate;if(t.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var s=e.lastRenderedState,a=o(s,n);if(r.hasEagerState=!0,r.eagerState=a,oi(a,s)){var l=e.interleaved;l===null?(r.next=r,gh(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=Bv(t,e,r,i),n!==null&&(r=un(),ni(n,t,i,r),u_(n,e,i))}}function a_(t){var e=t.alternate;return t===vt||e!==null&&e===vt}function l_(t,e){Ws=ou=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function u_(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,nh(t,n)}}var su={readContext:Hn,useCallback:Xt,useContext:Xt,useEffect:Xt,useImperativeHandle:Xt,useInsertionEffect:Xt,useLayoutEffect:Xt,useMemo:Xt,useReducer:Xt,useRef:Xt,useState:Xt,useDebugValue:Xt,useDeferredValue:Xt,useTransition:Xt,useMutableSource:Xt,useSyncExternalStore:Xt,useId:Xt,unstable_isNewReconciler:!1},RS={readContext:Hn,useCallback:function(t,e){return li().memoizedState=[t,e===void 0?null:e],t},useContext:Hn,useEffect:rm,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Pl(4194308,4,t_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Pl(4194308,4,t,e)},useInsertionEffect:function(t,e){return Pl(4,2,t,e)},useMemo:function(t,e){var n=li();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=li();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=AS.bind(null,vt,t),[i.memoizedState,t]},useRef:function(t){var e=li();return t={current:t},e.memoizedState=t},useState:im,useDebugValue:wh,useDeferredValue:function(t){return li().memoizedState=t},useTransition:function(){var t=im(!1),e=t[0];return t=wS.bind(null,t[1]),li().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=vt,r=li();if(ht){if(n===void 0)throw Error(J(407));n=n()}else{if(n=e(),Ft===null)throw Error(J(349));Zr&30||jv(i,e,n)}r.memoizedState=n;var o={value:n,getSnapshot:e};return r.queue=o,rm(qv.bind(null,i,o,t),[t]),i.flags|=2048,ha(9,Yv.bind(null,i,o,n,e),void 0,null),n},useId:function(){var t=li(),e=Ft.identifierPrefix;if(ht){var n=Ni,i=Li;n=(i&~(1<<32-ti(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=fa++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=TS++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},bS={readContext:Hn,useCallback:i_,useContext:Hn,useEffect:Th,useImperativeHandle:n_,useInsertionEffect:Jv,useLayoutEffect:e_,useMemo:r_,useReducer:Dc,useRef:Qv,useState:function(){return Dc(da)},useDebugValue:wh,useDeferredValue:function(t){var e=zn();return o_(e,Ct.memoizedState,t)},useTransition:function(){var t=Dc(da)[0],e=zn().memoizedState;return[t,e]},useMutableSource:Xv,useSyncExternalStore:$v,useId:s_,unstable_isNewReconciler:!1},PS={readContext:Hn,useCallback:i_,useContext:Hn,useEffect:Th,useImperativeHandle:n_,useInsertionEffect:Jv,useLayoutEffect:e_,useMemo:r_,useReducer:Ic,useRef:Qv,useState:function(){return Ic(da)},useDebugValue:wh,useDeferredValue:function(t){var e=zn();return Ct===null?e.memoizedState=t:o_(e,Ct.memoizedState,t)},useTransition:function(){var t=Ic(da)[0],e=zn().memoizedState;return[t,e]},useMutableSource:Xv,useSyncExternalStore:$v,useId:s_,unstable_isNewReconciler:!1};function ns(t,e){try{var n="",i=e;do n+=ry(i),i=i.return;while(i);var r=n}catch(o){r=`
Error generating stack: `+o.message+`
`+o.stack}return{value:t,source:e,stack:r,digest:null}}function Uc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function nd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var LS=typeof WeakMap=="function"?WeakMap:Map;function c_(t,e,n){n=Ii(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){lu||(lu=!0,dd=i),nd(t,e)},n}function f_(t,e,n){n=Ii(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){nd(t,e)}}var o=t.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){nd(t,e),typeof i!="function"&&(ur===null?ur=new Set([this]):ur.add(this));var s=e.stack;this.componentDidCatch(e.value,{componentStack:s!==null?s:""})}),n}function om(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new LS;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=XS.bind(null,t,e,n),e.then(t,t))}function sm(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function am(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Ii(-1,1),e.tag=2,lr(n,e,1))),n.lanes|=1),t)}var NS=Hi.ReactCurrentOwner,hn=!1;function sn(t,e,n,i){e.child=t===null?Vv(e,null,n,i):es(e,t.child,n,i)}function lm(t,e,n,i,r){n=n.render;var o=e.ref;return jo(e,r),i=Eh(t,e,n,i,o,r),n=Mh(),t!==null&&!hn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Bi(t,e,r)):(ht&&n&&ch(e),e.flags|=1,sn(t,e,i,r),e.child)}function um(t,e,n,i,r){if(t===null){var o=n.type;return typeof o=="function"&&!Dh(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=o,d_(t,e,o,i,r)):(t=Il(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(o=t.child,!(t.lanes&r)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:oa,n(s,i)&&t.ref===e.ref)return Bi(t,e,r)}return e.flags|=1,t=fr(o,i),t.ref=e.ref,t.return=e,e.child=t}function d_(t,e,n,i,r){if(t!==null){var o=t.memoizedProps;if(oa(o,i)&&t.ref===e.ref)if(hn=!1,e.pendingProps=i=o,(t.lanes&r)!==0)t.flags&131072&&(hn=!0);else return e.lanes=t.lanes,Bi(t,e,r)}return id(t,e,n,i,r)}function h_(t,e,n){var i=e.pendingProps,r=i.children,o=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},at(Bo,Sn),Sn|=n;else{if(!(n&1073741824))return t=o!==null?o.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,at(Bo,Sn),Sn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=o!==null?o.baseLanes:n,at(Bo,Sn),Sn|=i}else o!==null?(i=o.baseLanes|n,e.memoizedState=null):i=n,at(Bo,Sn),Sn|=i;return sn(t,e,r,n),e.child}function p_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function id(t,e,n,i,r){var o=mn(n)?Yr:Kt.current;return o=Qo(e,o),jo(e,r),n=Eh(t,e,n,i,o,r),i=Mh(),t!==null&&!hn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Bi(t,e,r)):(ht&&i&&ch(e),e.flags|=1,sn(t,e,n,r),e.child)}function cm(t,e,n,i,r){if(mn(n)){var o=!0;Ql(e)}else o=!1;if(jo(e,r),e.stateNode===null)Ll(t,e),zv(e,n,i),td(e,n,i,r),i=!0;else if(t===null){var s=e.stateNode,a=e.memoizedProps;s.props=a;var l=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=Hn(u):(u=mn(n)?Yr:Kt.current,u=Qo(e,u));var f=n.getDerivedStateFromProps,h=typeof f=="function"||typeof s.getSnapshotBeforeUpdate=="function";h||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==i||l!==u)&&tm(e,s,i,u),Zi=!1;var d=e.memoizedState;s.state=d,iu(e,i,s,r),l=e.memoizedState,a!==i||d!==l||pn.current||Zi?(typeof f=="function"&&(ed(e,n,f,i),l=e.memoizedState),(a=Zi||em(e,n,a,i,d,l,u))?(h||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(e.flags|=4194308)):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),s.props=i,s.state=l,s.context=u,i=a):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{s=e.stateNode,kv(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:qn(e.type,a),s.props=u,h=e.pendingProps,d=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=Hn(l):(l=mn(n)?Yr:Kt.current,l=Qo(e,l));var p=n.getDerivedStateFromProps;(f=typeof p=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==h||d!==l)&&tm(e,s,i,l),Zi=!1,d=e.memoizedState,s.state=d,iu(e,i,s,r);var _=e.memoizedState;a!==h||d!==_||pn.current||Zi?(typeof p=="function"&&(ed(e,n,p,i),_=e.memoizedState),(u=Zi||em(e,n,u,i,d,_,l)||!1)?(f||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(i,_,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(i,_,l)),typeof s.componentDidUpdate=="function"&&(e.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),s.props=i,s.state=_,s.context=l,i=u):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),i=!1)}return rd(t,e,n,i,o,r)}function rd(t,e,n,i,r,o){p_(t,e);var s=(e.flags&128)!==0;if(!i&&!s)return r&&qp(e,n,!1),Bi(t,e,o);i=e.stateNode,NS.current=e;var a=s&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&s?(e.child=es(e,t.child,null,o),e.child=es(e,null,a,o)):sn(t,e,a,o),e.memoizedState=i.state,r&&qp(e,n,!0),e.child}function m_(t){var e=t.stateNode;e.pendingContext?Yp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Yp(t,e.context,!1),_h(t,e.containerInfo)}function fm(t,e,n,i,r){return Jo(),dh(r),e.flags|=256,sn(t,e,n,i),e.child}var od={dehydrated:null,treeContext:null,retryLane:0};function sd(t){return{baseLanes:t,cachePool:null,transitions:null}}function g_(t,e,n){var i=e.pendingProps,r=gt.current,o=!1,s=(e.flags&128)!==0,a;if((a=s)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(o=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),at(gt,r&1),t===null)return Qf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(s=i.children,t=i.fallback,o?(i=e.mode,o=e.child,s={mode:"hidden",children:s},!(i&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=Iu(s,i,0,null),t=Gr(t,i,n,null),o.return=e,t.return=e,o.sibling=t,e.child=o,e.child.memoizedState=sd(n),e.memoizedState=od,t):Ah(e,s));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return DS(t,e,s,i,a,r,n);if(o){o=i.fallback,s=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(s&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=fr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?o=fr(a,o):(o=Gr(o,s,n,null),o.flags|=2),o.return=e,i.return=e,i.sibling=o,e.child=i,i=o,o=e.child,s=t.child.memoizedState,s=s===null?sd(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=t.childLanes&~n,e.memoizedState=od,i}return o=t.child,t=o.sibling,i=fr(o,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Ah(t,e){return e=Iu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Xa(t,e,n,i){return i!==null&&dh(i),es(e,t.child,null,n),t=Ah(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function DS(t,e,n,i,r,o,s){if(n)return e.flags&256?(e.flags&=-257,i=Uc(Error(J(422))),Xa(t,e,s,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(o=i.fallback,r=e.mode,i=Iu({mode:"visible",children:i.children},r,0,null),o=Gr(o,r,s,null),o.flags|=2,i.return=e,o.return=e,i.sibling=o,e.child=i,e.mode&1&&es(e,t.child,null,s),e.child.memoizedState=sd(s),e.memoizedState=od,o);if(!(e.mode&1))return Xa(t,e,s,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,o=Error(J(419)),i=Uc(o,i,void 0),Xa(t,e,s,i)}if(a=(s&t.childLanes)!==0,hn||a){if(i=Ft,i!==null){switch(s&-s){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|s)?0:r,r!==0&&r!==o.retryLane&&(o.retryLane=r,Oi(t,r),ni(i,t,r,-1))}return Nh(),i=Uc(Error(J(421))),Xa(t,e,s,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=$S.bind(null,t),r._reactRetry=e,null):(t=o.treeContext,En=ar(r.nextSibling),Tn=e,ht=!0,Kn=null,t!==null&&(Dn[In++]=Li,Dn[In++]=Ni,Dn[In++]=qr,Li=t.id,Ni=t.overflow,qr=e),e=Ah(e,i.children),e.flags|=4096,e)}function dm(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Jf(t.return,e,n)}function Fc(t,e,n,i,r){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=i,o.tail=n,o.tailMode=r)}function v_(t,e,n){var i=e.pendingProps,r=i.revealOrder,o=i.tail;if(sn(t,e,i.children,n),i=gt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&dm(t,n,e);else if(t.tag===19)dm(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(at(gt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&ru(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Fc(e,!1,r,n,o);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&ru(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Fc(e,!0,n,null,o);break;case"together":Fc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ll(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Bi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Kr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(J(153));if(e.child!==null){for(t=e.child,n=fr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=fr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function IS(t,e,n){switch(e.tag){case 3:m_(e),Jo();break;case 5:Wv(e);break;case 1:mn(e.type)&&Ql(e);break;case 4:_h(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;at(tu,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(at(gt,gt.current&1),e.flags|=128,null):n&e.child.childLanes?g_(t,e,n):(at(gt,gt.current&1),t=Bi(t,e,n),t!==null?t.sibling:null);at(gt,gt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return v_(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),at(gt,gt.current),i)break;return null;case 22:case 23:return e.lanes=0,h_(t,e,n)}return Bi(t,e,n)}var __,ad,x_,y_;__=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ad=function(){};x_=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,kr(vi.current);var o=null;switch(n){case"input":r=bf(t,r),i=bf(t,i),o=[];break;case"select":r=_t({},r,{value:void 0}),i=_t({},i,{value:void 0}),o=[];break;case"textarea":r=Nf(t,r),i=Nf(t,i),o=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Zl)}If(n,i);var s;n=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Qs.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Qs.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&lt("scroll",t),o||a===l||(o=[])):(o=o||[]).push(u,l))}n&&(o=o||[]).push("style",n);var u=o;(e.updateQueue=u)&&(e.flags|=4)}};y_=function(t,e,n,i){n!==i&&(e.flags|=4)};function Rs(t,e){if(!ht)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function $t(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function US(t,e,n){var i=e.pendingProps;switch(fh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return $t(e),null;case 1:return mn(e.type)&&Kl(),$t(e),null;case 3:return i=e.stateNode,ts(),dt(pn),dt(Kt),yh(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Va(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Kn!==null&&(md(Kn),Kn=null))),ad(t,e),$t(e),null;case 5:xh(e);var r=kr(ca.current);if(n=e.type,t!==null&&e.stateNode!=null)x_(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(J(166));return $t(e),null}if(t=kr(vi.current),Va(e)){i=e.stateNode,n=e.type;var o=e.memoizedProps;switch(i[pi]=e,i[la]=o,t=(e.mode&1)!==0,n){case"dialog":lt("cancel",i),lt("close",i);break;case"iframe":case"object":case"embed":lt("load",i);break;case"video":case"audio":for(r=0;r<Os.length;r++)lt(Os[r],i);break;case"source":lt("error",i);break;case"img":case"image":case"link":lt("error",i),lt("load",i);break;case"details":lt("toggle",i);break;case"input":Sp(i,o),lt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!o.multiple},lt("invalid",i);break;case"textarea":Mp(i,o),lt("invalid",i)}If(n,o),r=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?i.textContent!==a&&(o.suppressHydrationWarning!==!0&&Ga(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&Ga(i.textContent,a,t),r=["children",""+a]):Qs.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&lt("scroll",i)}switch(n){case"input":Ia(i),Ep(i,o,!0);break;case"textarea":Ia(i),Tp(i);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(i.onclick=Zl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{s=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=j0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=s.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=s.createElement(n,{is:i.is}):(t=s.createElement(n),n==="select"&&(s=t,i.multiple?s.multiple=!0:i.size&&(s.size=i.size))):t=s.createElementNS(t,n),t[pi]=e,t[la]=i,__(t,e,!1,!1),e.stateNode=t;e:{switch(s=Uf(n,i),n){case"dialog":lt("cancel",t),lt("close",t),r=i;break;case"iframe":case"object":case"embed":lt("load",t),r=i;break;case"video":case"audio":for(r=0;r<Os.length;r++)lt(Os[r],t);r=i;break;case"source":lt("error",t),r=i;break;case"img":case"image":case"link":lt("error",t),lt("load",t),r=i;break;case"details":lt("toggle",t),r=i;break;case"input":Sp(t,i),r=bf(t,i),lt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=_t({},i,{value:void 0}),lt("invalid",t);break;case"textarea":Mp(t,i),r=Nf(t,i),lt("invalid",t);break;default:r=i}If(n,r),a=r;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?Z0(t,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Y0(t,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Js(t,l):typeof l=="number"&&Js(t,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Qs.hasOwnProperty(o)?l!=null&&o==="onScroll"&&lt("scroll",t):l!=null&&Zd(t,o,l,s))}switch(n){case"input":Ia(t),Ep(t,i,!1);break;case"textarea":Ia(t),Tp(t);break;case"option":i.value!=null&&t.setAttribute("value",""+gr(i.value));break;case"select":t.multiple=!!i.multiple,o=i.value,o!=null?Vo(t,!!i.multiple,o,!1):i.defaultValue!=null&&Vo(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Zl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return $t(e),null;case 6:if(t&&e.stateNode!=null)y_(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(J(166));if(n=kr(ca.current),kr(vi.current),Va(e)){if(i=e.stateNode,n=e.memoizedProps,i[pi]=e,(o=i.nodeValue!==n)&&(t=Tn,t!==null))switch(t.tag){case 3:Ga(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ga(i.nodeValue,n,(t.mode&1)!==0)}o&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[pi]=e,e.stateNode=i}return $t(e),null;case 13:if(dt(gt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ht&&En!==null&&e.mode&1&&!(e.flags&128))Ov(),Jo(),e.flags|=98560,o=!1;else if(o=Va(e),i!==null&&i.dehydrated!==null){if(t===null){if(!o)throw Error(J(318));if(o=e.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(J(317));o[pi]=e}else Jo(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;$t(e),o=!1}else Kn!==null&&(md(Kn),Kn=null),o=!0;if(!o)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||gt.current&1?Rt===0&&(Rt=3):Nh())),e.updateQueue!==null&&(e.flags|=4),$t(e),null);case 4:return ts(),ad(t,e),t===null&&sa(e.stateNode.containerInfo),$t(e),null;case 10:return mh(e.type._context),$t(e),null;case 17:return mn(e.type)&&Kl(),$t(e),null;case 19:if(dt(gt),o=e.memoizedState,o===null)return $t(e),null;if(i=(e.flags&128)!==0,s=o.rendering,s===null)if(i)Rs(o,!1);else{if(Rt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(s=ru(t),s!==null){for(e.flags|=128,Rs(o,!1),i=s.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)o=n,t=i,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=t,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,t=s.dependencies,o.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return at(gt,gt.current&1|2),e.child}t=t.sibling}o.tail!==null&&Mt()>is&&(e.flags|=128,i=!0,Rs(o,!1),e.lanes=4194304)}else{if(!i)if(t=ru(s),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Rs(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!ht)return $t(e),null}else 2*Mt()-o.renderingStartTime>is&&n!==1073741824&&(e.flags|=128,i=!0,Rs(o,!1),e.lanes=4194304);o.isBackwards?(s.sibling=e.child,e.child=s):(n=o.last,n!==null?n.sibling=s:e.child=s,o.last=s)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=Mt(),e.sibling=null,n=gt.current,at(gt,i?n&1|2:n&1),e):($t(e),null);case 22:case 23:return Lh(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Sn&1073741824&&($t(e),e.subtreeFlags&6&&(e.flags|=8192)):$t(e),null;case 24:return null;case 25:return null}throw Error(J(156,e.tag))}function FS(t,e){switch(fh(e),e.tag){case 1:return mn(e.type)&&Kl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ts(),dt(pn),dt(Kt),yh(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return xh(e),null;case 13:if(dt(gt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(J(340));Jo()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return dt(gt),null;case 4:return ts(),null;case 10:return mh(e.type._context),null;case 22:case 23:return Lh(),null;case 24:return null;default:return null}}var $a=!1,qt=!1,OS=typeof WeakSet=="function"?WeakSet:Set,fe=null;function Oo(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){St(t,e,i)}else n.current=null}function ld(t,e,n){try{n()}catch(i){St(t,e,i)}}var hm=!1;function BS(t,e){if(Xf=jl,t=Tv(),uh(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,o=i.focusNode;i=i.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,u=0,f=0,h=t,d=null;t:for(;;){for(var p;h!==n||r!==0&&h.nodeType!==3||(a=s+r),h!==o||i!==0&&h.nodeType!==3||(l=s+i),h.nodeType===3&&(s+=h.nodeValue.length),(p=h.firstChild)!==null;)d=h,h=p;for(;;){if(h===t)break t;if(d===n&&++u===r&&(a=s),d===o&&++f===i&&(l=s),(p=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for($f={focusedElem:t,selectionRange:n},jl=!1,fe=e;fe!==null;)if(e=fe,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,fe=t;else for(;fe!==null;){e=fe;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var x=_.memoizedProps,g=_.memoizedState,c=e.stateNode,v=c.getSnapshotBeforeUpdate(e.elementType===e.type?x:qn(e.type,x),g);c.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var m=e.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(J(163))}}catch(y){St(e,e.return,y)}if(t=e.sibling,t!==null){t.return=e.return,fe=t;break}fe=e.return}return _=hm,hm=!1,_}function Xs(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var o=r.destroy;r.destroy=void 0,o!==void 0&&ld(e,n,o)}r=r.next}while(r!==i)}}function Nu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function ud(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function S_(t){var e=t.alternate;e!==null&&(t.alternate=null,S_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[pi],delete e[la],delete e[qf],delete e[yS],delete e[SS])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function E_(t){return t.tag===5||t.tag===3||t.tag===4}function pm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||E_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function cd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Zl));else if(i!==4&&(t=t.child,t!==null))for(cd(t,e,n),t=t.sibling;t!==null;)cd(t,e,n),t=t.sibling}function fd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(fd(t,e,n),t=t.sibling;t!==null;)fd(t,e,n),t=t.sibling}var Bt=null,Zn=!1;function Gi(t,e,n){for(n=n.child;n!==null;)M_(t,e,n),n=n.sibling}function M_(t,e,n){if(gi&&typeof gi.onCommitFiberUnmount=="function")try{gi.onCommitFiberUnmount(Tu,n)}catch{}switch(n.tag){case 5:qt||Oo(n,e);case 6:var i=Bt,r=Zn;Bt=null,Gi(t,e,n),Bt=i,Zn=r,Bt!==null&&(Zn?(t=Bt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Bt.removeChild(n.stateNode));break;case 18:Bt!==null&&(Zn?(t=Bt,n=n.stateNode,t.nodeType===8?bc(t.parentNode,n):t.nodeType===1&&bc(t,n),ia(t)):bc(Bt,n.stateNode));break;case 4:i=Bt,r=Zn,Bt=n.stateNode.containerInfo,Zn=!0,Gi(t,e,n),Bt=i,Zn=r;break;case 0:case 11:case 14:case 15:if(!qt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var o=r,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&ld(n,e,s),r=r.next}while(r!==i)}Gi(t,e,n);break;case 1:if(!qt&&(Oo(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){St(n,e,a)}Gi(t,e,n);break;case 21:Gi(t,e,n);break;case 22:n.mode&1?(qt=(i=qt)||n.memoizedState!==null,Gi(t,e,n),qt=i):Gi(t,e,n);break;default:Gi(t,e,n)}}function mm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new OS),e.forEach(function(i){var r=jS.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Xn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var o=t,s=e,a=s;e:for(;a!==null;){switch(a.tag){case 5:Bt=a.stateNode,Zn=!1;break e;case 3:Bt=a.stateNode.containerInfo,Zn=!0;break e;case 4:Bt=a.stateNode.containerInfo,Zn=!0;break e}a=a.return}if(Bt===null)throw Error(J(160));M_(o,s,r),Bt=null,Zn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){St(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)T_(e,t),e=e.sibling}function T_(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Xn(e,t),ai(t),i&4){try{Xs(3,t,t.return),Nu(3,t)}catch(x){St(t,t.return,x)}try{Xs(5,t,t.return)}catch(x){St(t,t.return,x)}}break;case 1:Xn(e,t),ai(t),i&512&&n!==null&&Oo(n,n.return);break;case 5:if(Xn(e,t),ai(t),i&512&&n!==null&&Oo(n,n.return),t.flags&32){var r=t.stateNode;try{Js(r,"")}catch(x){St(t,t.return,x)}}if(i&4&&(r=t.stateNode,r!=null)){var o=t.memoizedProps,s=n!==null?n.memoizedProps:o,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&X0(r,o),Uf(a,s);var u=Uf(a,o);for(s=0;s<l.length;s+=2){var f=l[s],h=l[s+1];f==="style"?Z0(r,h):f==="dangerouslySetInnerHTML"?Y0(r,h):f==="children"?Js(r,h):Zd(r,f,h,u)}switch(a){case"input":Pf(r,o);break;case"textarea":$0(r,o);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!o.multiple;var p=o.value;p!=null?Vo(r,!!o.multiple,p,!1):d!==!!o.multiple&&(o.defaultValue!=null?Vo(r,!!o.multiple,o.defaultValue,!0):Vo(r,!!o.multiple,o.multiple?[]:"",!1))}r[la]=o}catch(x){St(t,t.return,x)}}break;case 6:if(Xn(e,t),ai(t),i&4){if(t.stateNode===null)throw Error(J(162));r=t.stateNode,o=t.memoizedProps;try{r.nodeValue=o}catch(x){St(t,t.return,x)}}break;case 3:if(Xn(e,t),ai(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{ia(e.containerInfo)}catch(x){St(t,t.return,x)}break;case 4:Xn(e,t),ai(t);break;case 13:Xn(e,t),ai(t),r=t.child,r.flags&8192&&(o=r.memoizedState!==null,r.stateNode.isHidden=o,!o||r.alternate!==null&&r.alternate.memoizedState!==null||(bh=Mt())),i&4&&mm(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(qt=(u=qt)||f,Xn(e,t),qt=u):Xn(e,t),ai(t),i&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!f&&t.mode&1)for(fe=t,f=t.child;f!==null;){for(h=fe=f;fe!==null;){switch(d=fe,p=d.child,d.tag){case 0:case 11:case 14:case 15:Xs(4,d,d.return);break;case 1:Oo(d,d.return);var _=d.stateNode;if(typeof _.componentWillUnmount=="function"){i=d,n=d.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(x){St(i,n,x)}}break;case 5:Oo(d,d.return);break;case 22:if(d.memoizedState!==null){vm(h);continue}}p!==null?(p.return=d,fe=p):vm(h)}f=f.sibling}e:for(f=null,h=t;;){if(h.tag===5){if(f===null){f=h;try{r=h.stateNode,u?(o=r.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=h.stateNode,l=h.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=q0("display",s))}catch(x){St(t,t.return,x)}}}else if(h.tag===6){if(f===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(x){St(t,t.return,x)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;f===h&&(f=null),h=h.return}f===h&&(f=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Xn(e,t),ai(t),i&4&&mm(t);break;case 21:break;default:Xn(e,t),ai(t)}}function ai(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(E_(n)){var i=n;break e}n=n.return}throw Error(J(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Js(r,""),i.flags&=-33);var o=pm(t);fd(t,o,r);break;case 3:case 4:var s=i.stateNode.containerInfo,a=pm(t);cd(t,a,s);break;default:throw Error(J(161))}}catch(l){St(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function kS(t,e,n){fe=t,w_(t)}function w_(t,e,n){for(var i=(t.mode&1)!==0;fe!==null;){var r=fe,o=r.child;if(r.tag===22&&i){var s=r.memoizedState!==null||$a;if(!s){var a=r.alternate,l=a!==null&&a.memoizedState!==null||qt;a=$a;var u=qt;if($a=s,(qt=l)&&!u)for(fe=r;fe!==null;)s=fe,l=s.child,s.tag===22&&s.memoizedState!==null?_m(r):l!==null?(l.return=s,fe=l):_m(r);for(;o!==null;)fe=o,w_(o),o=o.sibling;fe=r,$a=a,qt=u}gm(t)}else r.subtreeFlags&8772&&o!==null?(o.return=r,fe=o):gm(t)}}function gm(t){for(;fe!==null;){var e=fe;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:qt||Nu(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!qt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:qn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var o=e.updateQueue;o!==null&&Jp(e,o,i);break;case 3:var s=e.updateQueue;if(s!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Jp(e,s,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var h=f.dehydrated;h!==null&&ia(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(J(163))}qt||e.flags&512&&ud(e)}catch(d){St(e,e.return,d)}}if(e===t){fe=null;break}if(n=e.sibling,n!==null){n.return=e.return,fe=n;break}fe=e.return}}function vm(t){for(;fe!==null;){var e=fe;if(e===t){fe=null;break}var n=e.sibling;if(n!==null){n.return=e.return,fe=n;break}fe=e.return}}function _m(t){for(;fe!==null;){var e=fe;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Nu(4,e)}catch(l){St(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){St(e,r,l)}}var o=e.return;try{ud(e)}catch(l){St(e,o,l)}break;case 5:var s=e.return;try{ud(e)}catch(l){St(e,s,l)}}}catch(l){St(e,e.return,l)}if(e===t){fe=null;break}var a=e.sibling;if(a!==null){a.return=e.return,fe=a;break}fe=e.return}}var HS=Math.ceil,au=Hi.ReactCurrentDispatcher,Ch=Hi.ReactCurrentOwner,kn=Hi.ReactCurrentBatchConfig,qe=0,Ft=null,At=null,zt=0,Sn=0,Bo=yr(0),Rt=0,pa=null,Kr=0,Du=0,Rh=0,$s=null,dn=null,bh=0,is=1/0,Ci=null,lu=!1,dd=null,ur=null,ja=!1,tr=null,uu=0,js=0,hd=null,Nl=-1,Dl=0;function un(){return qe&6?Mt():Nl!==-1?Nl:Nl=Mt()}function cr(t){return t.mode&1?qe&2&&zt!==0?zt&-zt:MS.transition!==null?(Dl===0&&(Dl=lv()),Dl):(t=Je,t!==0||(t=window.event,t=t===void 0?16:mv(t.type)),t):1}function ni(t,e,n,i){if(50<js)throw js=0,hd=null,Error(J(185));Sa(t,n,i),(!(qe&2)||t!==Ft)&&(t===Ft&&(!(qe&2)&&(Du|=n),Rt===4&&Ji(t,zt)),gn(t,i),n===1&&qe===0&&!(e.mode&1)&&(is=Mt()+500,bu&&Sr()))}function gn(t,e){var n=t.callbackNode;My(t,e);var i=$l(t,t===Ft?zt:0);if(i===0)n!==null&&Cp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Cp(n),e===1)t.tag===0?ES(xm.bind(null,t)):Iv(xm.bind(null,t)),_S(function(){!(qe&6)&&Sr()}),n=null;else{switch(uv(i)){case 1:n=th;break;case 4:n=sv;break;case 16:n=Xl;break;case 536870912:n=av;break;default:n=Xl}n=D_(n,A_.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function A_(t,e){if(Nl=-1,Dl=0,qe&6)throw Error(J(327));var n=t.callbackNode;if(Yo()&&t.callbackNode!==n)return null;var i=$l(t,t===Ft?zt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=cu(t,i);else{e=i;var r=qe;qe|=2;var o=R_();(Ft!==t||zt!==e)&&(Ci=null,is=Mt()+500,zr(t,e));do try{VS();break}catch(a){C_(t,a)}while(1);ph(),au.current=o,qe=r,At!==null?e=0:(Ft=null,zt=0,e=Rt)}if(e!==0){if(e===2&&(r=Hf(t),r!==0&&(i=r,e=pd(t,r))),e===1)throw n=pa,zr(t,0),Ji(t,i),gn(t,Mt()),n;if(e===6)Ji(t,i);else{if(r=t.current.alternate,!(i&30)&&!zS(r)&&(e=cu(t,i),e===2&&(o=Hf(t),o!==0&&(i=o,e=pd(t,o))),e===1))throw n=pa,zr(t,0),Ji(t,i),gn(t,Mt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(J(345));case 2:Lr(t,dn,Ci);break;case 3:if(Ji(t,i),(i&130023424)===i&&(e=bh+500-Mt(),10<e)){if($l(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){un(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Yf(Lr.bind(null,t,dn,Ci),e);break}Lr(t,dn,Ci);break;case 4:if(Ji(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var s=31-ti(i);o=1<<s,s=e[s],s>r&&(r=s),i&=~o}if(i=r,i=Mt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*HS(i/1960))-i,10<i){t.timeoutHandle=Yf(Lr.bind(null,t,dn,Ci),i);break}Lr(t,dn,Ci);break;case 5:Lr(t,dn,Ci);break;default:throw Error(J(329))}}}return gn(t,Mt()),t.callbackNode===n?A_.bind(null,t):null}function pd(t,e){var n=$s;return t.current.memoizedState.isDehydrated&&(zr(t,e).flags|=256),t=cu(t,e),t!==2&&(e=dn,dn=n,e!==null&&md(e)),t}function md(t){dn===null?dn=t:dn.push.apply(dn,t)}function zS(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],o=r.getSnapshot;r=r.value;try{if(!oi(o(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ji(t,e){for(e&=~Rh,e&=~Du,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-ti(e),i=1<<n;t[n]=-1,e&=~i}}function xm(t){if(qe&6)throw Error(J(327));Yo();var e=$l(t,0);if(!(e&1))return gn(t,Mt()),null;var n=cu(t,e);if(t.tag!==0&&n===2){var i=Hf(t);i!==0&&(e=i,n=pd(t,i))}if(n===1)throw n=pa,zr(t,0),Ji(t,e),gn(t,Mt()),n;if(n===6)throw Error(J(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Lr(t,dn,Ci),gn(t,Mt()),null}function Ph(t,e){var n=qe;qe|=1;try{return t(e)}finally{qe=n,qe===0&&(is=Mt()+500,bu&&Sr())}}function Qr(t){tr!==null&&tr.tag===0&&!(qe&6)&&Yo();var e=qe;qe|=1;var n=kn.transition,i=Je;try{if(kn.transition=null,Je=1,t)return t()}finally{Je=i,kn.transition=n,qe=e,!(qe&6)&&Sr()}}function Lh(){Sn=Bo.current,dt(Bo)}function zr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,vS(n)),At!==null)for(n=At.return;n!==null;){var i=n;switch(fh(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Kl();break;case 3:ts(),dt(pn),dt(Kt),yh();break;case 5:xh(i);break;case 4:ts();break;case 13:dt(gt);break;case 19:dt(gt);break;case 10:mh(i.type._context);break;case 22:case 23:Lh()}n=n.return}if(Ft=t,At=t=fr(t.current,null),zt=Sn=e,Rt=0,pa=null,Rh=Du=Kr=0,dn=$s=null,Br!==null){for(e=0;e<Br.length;e++)if(n=Br[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,o=n.pending;if(o!==null){var s=o.next;o.next=r,i.next=s}n.pending=i}Br=null}return t}function C_(t,e){do{var n=At;try{if(ph(),bl.current=su,ou){for(var i=vt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}ou=!1}if(Zr=0,It=Ct=vt=null,Ws=!1,fa=0,Ch.current=null,n===null||n.return===null){Rt=1,pa=e,At=null;break}e:{var o=t,s=n.return,a=n,l=e;if(e=zt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,f=a,h=f.tag;if(!(f.mode&1)&&(h===0||h===11||h===15)){var d=f.alternate;d?(f.updateQueue=d.updateQueue,f.memoizedState=d.memoizedState,f.lanes=d.lanes):(f.updateQueue=null,f.memoizedState=null)}var p=sm(s);if(p!==null){p.flags&=-257,am(p,s,a,o,e),p.mode&1&&om(o,u,e),e=p,l=u;var _=e.updateQueue;if(_===null){var x=new Set;x.add(l),e.updateQueue=x}else _.add(l);break e}else{if(!(e&1)){om(o,u,e),Nh();break e}l=Error(J(426))}}else if(ht&&a.mode&1){var g=sm(s);if(g!==null){!(g.flags&65536)&&(g.flags|=256),am(g,s,a,o,e),dh(ns(l,a));break e}}o=l=ns(l,a),Rt!==4&&(Rt=2),$s===null?$s=[o]:$s.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,e&=-e,o.lanes|=e;var c=c_(o,l,e);Qp(o,c);break e;case 1:a=l;var v=o.type,m=o.stateNode;if(!(o.flags&128)&&(typeof v.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(ur===null||!ur.has(m)))){o.flags|=65536,e&=-e,o.lanes|=e;var y=f_(o,a,e);Qp(o,y);break e}}o=o.return}while(o!==null)}P_(n)}catch(R){e=R,At===n&&n!==null&&(At=n=n.return);continue}break}while(1)}function R_(){var t=au.current;return au.current=su,t===null?su:t}function Nh(){(Rt===0||Rt===3||Rt===2)&&(Rt=4),Ft===null||!(Kr&268435455)&&!(Du&268435455)||Ji(Ft,zt)}function cu(t,e){var n=qe;qe|=2;var i=R_();(Ft!==t||zt!==e)&&(Ci=null,zr(t,e));do try{GS();break}catch(r){C_(t,r)}while(1);if(ph(),qe=n,au.current=i,At!==null)throw Error(J(261));return Ft=null,zt=0,Rt}function GS(){for(;At!==null;)b_(At)}function VS(){for(;At!==null&&!py();)b_(At)}function b_(t){var e=N_(t.alternate,t,Sn);t.memoizedProps=t.pendingProps,e===null?P_(t):At=e,Ch.current=null}function P_(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=FS(n,e),n!==null){n.flags&=32767,At=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Rt=6,At=null;return}}else if(n=US(n,e,Sn),n!==null){At=n;return}if(e=e.sibling,e!==null){At=e;return}At=e=t}while(e!==null);Rt===0&&(Rt=5)}function Lr(t,e,n){var i=Je,r=kn.transition;try{kn.transition=null,Je=1,WS(t,e,n,i)}finally{kn.transition=r,Je=i}return null}function WS(t,e,n,i){do Yo();while(tr!==null);if(qe&6)throw Error(J(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(J(177));t.callbackNode=null,t.callbackPriority=0;var o=n.lanes|n.childLanes;if(Ty(t,o),t===Ft&&(At=Ft=null,zt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ja||(ja=!0,D_(Xl,function(){return Yo(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=kn.transition,kn.transition=null;var s=Je;Je=1;var a=qe;qe|=4,Ch.current=null,BS(t,n),T_(n,t),cS($f),jl=!!Xf,$f=Xf=null,t.current=n,kS(n),my(),qe=a,Je=s,kn.transition=o}else t.current=n;if(ja&&(ja=!1,tr=t,uu=r),o=t.pendingLanes,o===0&&(ur=null),_y(n.stateNode),gn(t,Mt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(lu)throw lu=!1,t=dd,dd=null,t;return uu&1&&t.tag!==0&&Yo(),o=t.pendingLanes,o&1?t===hd?js++:(js=0,hd=t):js=0,Sr(),null}function Yo(){if(tr!==null){var t=uv(uu),e=kn.transition,n=Je;try{if(kn.transition=null,Je=16>t?16:t,tr===null)var i=!1;else{if(t=tr,tr=null,uu=0,qe&6)throw Error(J(331));var r=qe;for(qe|=4,fe=t.current;fe!==null;){var o=fe,s=o.child;if(fe.flags&16){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(fe=u;fe!==null;){var f=fe;switch(f.tag){case 0:case 11:case 15:Xs(8,f,o)}var h=f.child;if(h!==null)h.return=f,fe=h;else for(;fe!==null;){f=fe;var d=f.sibling,p=f.return;if(S_(f),f===u){fe=null;break}if(d!==null){d.return=p,fe=d;break}fe=p}}}var _=o.alternate;if(_!==null){var x=_.child;if(x!==null){_.child=null;do{var g=x.sibling;x.sibling=null,x=g}while(x!==null)}}fe=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,fe=s;else e:for(;fe!==null;){if(o=fe,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Xs(9,o,o.return)}var c=o.sibling;if(c!==null){c.return=o.return,fe=c;break e}fe=o.return}}var v=t.current;for(fe=v;fe!==null;){s=fe;var m=s.child;if(s.subtreeFlags&2064&&m!==null)m.return=s,fe=m;else e:for(s=v;fe!==null;){if(a=fe,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Nu(9,a)}}catch(R){St(a,a.return,R)}if(a===s){fe=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,fe=y;break e}fe=a.return}}if(qe=r,Sr(),gi&&typeof gi.onPostCommitFiberRoot=="function")try{gi.onPostCommitFiberRoot(Tu,t)}catch{}i=!0}return i}finally{Je=n,kn.transition=e}}return!1}function ym(t,e,n){e=ns(n,e),e=c_(t,e,1),t=lr(t,e,1),e=un(),t!==null&&(Sa(t,1,e),gn(t,e))}function St(t,e,n){if(t.tag===3)ym(t,t,n);else for(;e!==null;){if(e.tag===3){ym(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(ur===null||!ur.has(i))){t=ns(n,t),t=f_(e,t,1),e=lr(e,t,1),t=un(),e!==null&&(Sa(e,1,t),gn(e,t));break}}e=e.return}}function XS(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=un(),t.pingedLanes|=t.suspendedLanes&n,Ft===t&&(zt&n)===n&&(Rt===4||Rt===3&&(zt&130023424)===zt&&500>Mt()-bh?zr(t,0):Rh|=n),gn(t,e)}function L_(t,e){e===0&&(t.mode&1?(e=Oa,Oa<<=1,!(Oa&130023424)&&(Oa=4194304)):e=1);var n=un();t=Oi(t,e),t!==null&&(Sa(t,e,n),gn(t,n))}function $S(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),L_(t,n)}function jS(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(J(314))}i!==null&&i.delete(e),L_(t,n)}var N_;N_=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||pn.current)hn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return hn=!1,IS(t,e,n);hn=!!(t.flags&131072)}else hn=!1,ht&&e.flags&1048576&&Uv(e,eu,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Ll(t,e),t=e.pendingProps;var r=Qo(e,Kt.current);jo(e,n),r=Eh(null,e,i,t,r,n);var o=Mh();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,mn(i)?(o=!0,Ql(e)):o=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,vh(e),r.updater=Pu,e.stateNode=r,r._reactInternals=e,td(e,i,t,n),e=rd(null,e,i,!0,o,n)):(e.tag=0,ht&&o&&ch(e),sn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Ll(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=qS(i),t=qn(i,t),r){case 0:e=id(null,e,i,t,n);break e;case 1:e=cm(null,e,i,t,n);break e;case 11:e=lm(null,e,i,t,n);break e;case 14:e=um(null,e,i,qn(i.type,t),n);break e}throw Error(J(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:qn(i,r),id(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:qn(i,r),cm(t,e,i,r,n);case 3:e:{if(m_(e),t===null)throw Error(J(387));i=e.pendingProps,o=e.memoizedState,r=o.element,kv(t,e),iu(e,i,null,n);var s=e.memoizedState;if(i=s.element,o.isDehydrated)if(o={element:i,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},e.updateQueue.baseState=o,e.memoizedState=o,e.flags&256){r=ns(Error(J(423)),e),e=fm(t,e,i,n,r);break e}else if(i!==r){r=ns(Error(J(424)),e),e=fm(t,e,i,n,r);break e}else for(En=ar(e.stateNode.containerInfo.firstChild),Tn=e,ht=!0,Kn=null,n=Vv(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Jo(),i===r){e=Bi(t,e,n);break e}sn(t,e,i,n)}e=e.child}return e;case 5:return Wv(e),t===null&&Qf(e),i=e.type,r=e.pendingProps,o=t!==null?t.memoizedProps:null,s=r.children,jf(i,r)?s=null:o!==null&&jf(i,o)&&(e.flags|=32),p_(t,e),sn(t,e,s,n),e.child;case 6:return t===null&&Qf(e),null;case 13:return g_(t,e,n);case 4:return _h(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=es(e,null,i,n):sn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:qn(i,r),lm(t,e,i,r,n);case 7:return sn(t,e,e.pendingProps,n),e.child;case 8:return sn(t,e,e.pendingProps.children,n),e.child;case 12:return sn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,o=e.memoizedProps,s=r.value,at(tu,i._currentValue),i._currentValue=s,o!==null)if(oi(o.value,s)){if(o.children===r.children&&!pn.current){e=Bi(t,e,n);break e}}else for(o=e.child,o!==null&&(o.return=e);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(o.tag===1){l=Ii(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?l.next=l:(l.next=f.next,f.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Jf(o.return,n,e),a.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===e.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(J(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),Jf(s,n,e),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===e){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}sn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,jo(e,n),r=Hn(r),i=i(r),e.flags|=1,sn(t,e,i,n),e.child;case 14:return i=e.type,r=qn(i,e.pendingProps),r=qn(i.type,r),um(t,e,i,r,n);case 15:return d_(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:qn(i,r),Ll(t,e),e.tag=1,mn(i)?(t=!0,Ql(e)):t=!1,jo(e,n),zv(e,i,r),td(e,i,r,n),rd(null,e,i,!0,t,n);case 19:return v_(t,e,n);case 22:return h_(t,e,n)}throw Error(J(156,e.tag))};function D_(t,e){return ov(t,e)}function YS(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Bn(t,e,n,i){return new YS(t,e,n,i)}function Dh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function qS(t){if(typeof t=="function")return Dh(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Qd)return 11;if(t===Jd)return 14}return 2}function fr(t,e){var n=t.alternate;return n===null?(n=Bn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Il(t,e,n,i,r,o){var s=2;if(i=t,typeof t=="function")Dh(t)&&(s=1);else if(typeof t=="string")s=5;else e:switch(t){case Ro:return Gr(n.children,r,o,e);case Kd:s=8,r|=8;break;case wf:return t=Bn(12,n,e,r|2),t.elementType=wf,t.lanes=o,t;case Af:return t=Bn(13,n,e,r),t.elementType=Af,t.lanes=o,t;case Cf:return t=Bn(19,n,e,r),t.elementType=Cf,t.lanes=o,t;case G0:return Iu(n,r,o,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case H0:s=10;break e;case z0:s=9;break e;case Qd:s=11;break e;case Jd:s=14;break e;case qi:s=16,i=null;break e}throw Error(J(130,t==null?t:typeof t,""))}return e=Bn(s,n,e,r),e.elementType=t,e.type=i,e.lanes=o,e}function Gr(t,e,n,i){return t=Bn(7,t,i,e),t.lanes=n,t}function Iu(t,e,n,i){return t=Bn(22,t,i,e),t.elementType=G0,t.lanes=n,t.stateNode={isHidden:!1},t}function Oc(t,e,n){return t=Bn(6,t,null,e),t.lanes=n,t}function Bc(t,e,n){return e=Bn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function ZS(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=_c(0),this.expirationTimes=_c(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=_c(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Ih(t,e,n,i,r,o,s,a,l){return t=new ZS(t,e,n,a,l),e===1?(e=1,o===!0&&(e|=8)):e=0,o=Bn(3,null,null,e),t.current=o,o.stateNode=t,o.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},vh(o),t}function KS(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Co,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function I_(t){if(!t)return vr;t=t._reactInternals;e:{if(oo(t)!==t||t.tag!==1)throw Error(J(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(mn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(J(171))}if(t.tag===1){var n=t.type;if(mn(n))return Dv(t,n,e)}return e}function U_(t,e,n,i,r,o,s,a,l){return t=Ih(n,i,!0,t,r,o,s,a,l),t.context=I_(null),n=t.current,i=un(),r=cr(n),o=Ii(i,r),o.callback=e??null,lr(n,o,r),t.current.lanes=r,Sa(t,r,i),gn(t,i),t}function Uu(t,e,n,i){var r=e.current,o=un(),s=cr(r);return n=I_(n),e.context===null?e.context=n:e.pendingContext=n,e=Ii(o,s),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=lr(r,e,s),t!==null&&(ni(t,r,s,o),Rl(t,r,s)),s}function fu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Sm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Uh(t,e){Sm(t,e),(t=t.alternate)&&Sm(t,e)}function QS(){return null}var F_=typeof reportError=="function"?reportError:function(t){console.error(t)};function Fh(t){this._internalRoot=t}Fu.prototype.render=Fh.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(J(409));Uu(t,e,null,null)};Fu.prototype.unmount=Fh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Qr(function(){Uu(null,t,null,null)}),e[Fi]=null}};function Fu(t){this._internalRoot=t}Fu.prototype.unstable_scheduleHydration=function(t){if(t){var e=dv();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Qi.length&&e!==0&&e<Qi[n].priority;n++);Qi.splice(n,0,t),n===0&&pv(t)}};function Oh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Ou(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Em(){}function JS(t,e,n,i,r){if(r){if(typeof i=="function"){var o=i;i=function(){var u=fu(s);o.call(u)}}var s=U_(e,i,t,0,null,!1,!1,"",Em);return t._reactRootContainer=s,t[Fi]=s.current,sa(t.nodeType===8?t.parentNode:t),Qr(),s}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=fu(l);a.call(u)}}var l=Ih(t,0,!1,null,null,!1,!1,"",Em);return t._reactRootContainer=l,t[Fi]=l.current,sa(t.nodeType===8?t.parentNode:t),Qr(function(){Uu(e,l,n,i)}),l}function Bu(t,e,n,i,r){var o=n._reactRootContainer;if(o){var s=o;if(typeof r=="function"){var a=r;r=function(){var l=fu(s);a.call(l)}}Uu(e,s,t,r)}else s=JS(n,e,t,r,i);return fu(s)}cv=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Fs(e.pendingLanes);n!==0&&(nh(e,n|1),gn(e,Mt()),!(qe&6)&&(is=Mt()+500,Sr()))}break;case 13:Qr(function(){var i=Oi(t,1);if(i!==null){var r=un();ni(i,t,1,r)}}),Uh(t,1)}};ih=function(t){if(t.tag===13){var e=Oi(t,134217728);if(e!==null){var n=un();ni(e,t,134217728,n)}Uh(t,134217728)}};fv=function(t){if(t.tag===13){var e=cr(t),n=Oi(t,e);if(n!==null){var i=un();ni(n,t,e,i)}Uh(t,e)}};dv=function(){return Je};hv=function(t,e){var n=Je;try{return Je=t,e()}finally{Je=n}};Of=function(t,e,n){switch(e){case"input":if(Pf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Ru(i);if(!r)throw Error(J(90));W0(i),Pf(i,r)}}}break;case"textarea":$0(t,n);break;case"select":e=n.value,e!=null&&Vo(t,!!n.multiple,e,!1)}};J0=Ph;ev=Qr;var eE={usingClientEntryPoint:!1,Events:[Ma,No,Ru,K0,Q0,Ph]},bs={findFiberByHostInstance:Or,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},tE={bundleType:bs.bundleType,version:bs.version,rendererPackageName:bs.rendererPackageName,rendererConfig:bs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Hi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=iv(t),t===null?null:t.stateNode},findFiberByHostInstance:bs.findFiberByHostInstance||QS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ya=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ya.isDisabled&&Ya.supportsFiber)try{Tu=Ya.inject(tE),gi=Ya}catch{}}Rn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=eE;Rn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Oh(e))throw Error(J(200));return KS(t,e,null,n)};Rn.createRoot=function(t,e){if(!Oh(t))throw Error(J(299));var n=!1,i="",r=F_;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Ih(t,1,!1,null,null,n,!1,i,r),t[Fi]=e.current,sa(t.nodeType===8?t.parentNode:t),new Fh(e)};Rn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(J(188)):(t=Object.keys(t).join(","),Error(J(268,t)));return t=iv(e),t=t===null?null:t.stateNode,t};Rn.flushSync=function(t){return Qr(t)};Rn.hydrate=function(t,e,n){if(!Ou(e))throw Error(J(200));return Bu(null,t,e,!0,n)};Rn.hydrateRoot=function(t,e,n){if(!Oh(t))throw Error(J(405));var i=n!=null&&n.hydratedSources||null,r=!1,o="",s=F_;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),e=U_(e,null,t,1,n??null,r,!1,o,s),t[Fi]=e.current,sa(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Fu(e)};Rn.render=function(t,e,n){if(!Ou(e))throw Error(J(200));return Bu(null,t,e,!1,n)};Rn.unmountComponentAtNode=function(t){if(!Ou(t))throw Error(J(40));return t._reactRootContainer?(Qr(function(){Bu(null,null,t,!1,function(){t._reactRootContainer=null,t[Fi]=null})}),!0):!1};Rn.unstable_batchedUpdates=Ph;Rn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Ou(n))throw Error(J(200));if(t==null||t._reactInternals===void 0)throw Error(J(38));return Bu(t,e,n,!1,i)};Rn.version="18.2.0-next-9e3b772b8-20220608";function O_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(O_)}catch(t){console.error(t)}}O_(),U0.exports=Rn;var nE=U0.exports,Mm=nE;Mf.createRoot=Mm.createRoot,Mf.hydrateRoot=Mm.hydrateRoot;var gd=function(t,e){return gd=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,i){n.__proto__=i}||function(n,i){for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(n[r]=i[r])},gd(t,e)};function Vn(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");gd(t,e);function n(){this.constructor=t}t.prototype=e===null?Object.create(e):(n.prototype=e.prototype,new n)}var me=function(){return me=Object.assign||function(e){for(var n,i=1,r=arguments.length;i<r;i++){n=arguments[i];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},me.apply(this,arguments)};function rs(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,i=Object.getOwnPropertySymbols(t);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(t,i[r])&&(n[i[r]]=t[i[r]]);return n}function fi(t,e,n){if(n||arguments.length===2)for(var i=0,r=e.length,o;i<r;i++)(o||!(i in e))&&(o||(o=Array.prototype.slice.call(e,0,i)),o[i]=e[i]);return t.concat(o||Array.prototype.slice.call(e))}var B_={exports:{}},et={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ot=typeof Symbol=="function"&&Symbol.for,Bh=Ot?Symbol.for("react.element"):60103,kh=Ot?Symbol.for("react.portal"):60106,ku=Ot?Symbol.for("react.fragment"):60107,Hu=Ot?Symbol.for("react.strict_mode"):60108,zu=Ot?Symbol.for("react.profiler"):60114,Gu=Ot?Symbol.for("react.provider"):60109,Vu=Ot?Symbol.for("react.context"):60110,Hh=Ot?Symbol.for("react.async_mode"):60111,Wu=Ot?Symbol.for("react.concurrent_mode"):60111,Xu=Ot?Symbol.for("react.forward_ref"):60112,$u=Ot?Symbol.for("react.suspense"):60113,iE=Ot?Symbol.for("react.suspense_list"):60120,ju=Ot?Symbol.for("react.memo"):60115,Yu=Ot?Symbol.for("react.lazy"):60116,rE=Ot?Symbol.for("react.block"):60121,oE=Ot?Symbol.for("react.fundamental"):60117,sE=Ot?Symbol.for("react.responder"):60118,aE=Ot?Symbol.for("react.scope"):60119;function Pn(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case Bh:switch(t=t.type,t){case Hh:case Wu:case ku:case zu:case Hu:case $u:return t;default:switch(t=t&&t.$$typeof,t){case Vu:case Xu:case Yu:case ju:case Gu:return t;default:return e}}case kh:return e}}}function k_(t){return Pn(t)===Wu}et.AsyncMode=Hh;et.ConcurrentMode=Wu;et.ContextConsumer=Vu;et.ContextProvider=Gu;et.Element=Bh;et.ForwardRef=Xu;et.Fragment=ku;et.Lazy=Yu;et.Memo=ju;et.Portal=kh;et.Profiler=zu;et.StrictMode=Hu;et.Suspense=$u;et.isAsyncMode=function(t){return k_(t)||Pn(t)===Hh};et.isConcurrentMode=k_;et.isContextConsumer=function(t){return Pn(t)===Vu};et.isContextProvider=function(t){return Pn(t)===Gu};et.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===Bh};et.isForwardRef=function(t){return Pn(t)===Xu};et.isFragment=function(t){return Pn(t)===ku};et.isLazy=function(t){return Pn(t)===Yu};et.isMemo=function(t){return Pn(t)===ju};et.isPortal=function(t){return Pn(t)===kh};et.isProfiler=function(t){return Pn(t)===zu};et.isStrictMode=function(t){return Pn(t)===Hu};et.isSuspense=function(t){return Pn(t)===$u};et.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===ku||t===Wu||t===zu||t===Hu||t===$u||t===iE||typeof t=="object"&&t!==null&&(t.$$typeof===Yu||t.$$typeof===ju||t.$$typeof===Gu||t.$$typeof===Vu||t.$$typeof===Xu||t.$$typeof===oE||t.$$typeof===sE||t.$$typeof===aE||t.$$typeof===rE)};et.typeOf=Pn;B_.exports=et;var lE=B_.exports,H_=lE,uE={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},cE={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},z_={};z_[H_.ForwardRef]=uE;z_[H_.Memo]=cE;function G_(t,e,n){if(n===void 0&&(n=Error),!t)throw new n(e)}var $e;(function(t){t[t.EXPECT_ARGUMENT_CLOSING_BRACE=1]="EXPECT_ARGUMENT_CLOSING_BRACE",t[t.EMPTY_ARGUMENT=2]="EMPTY_ARGUMENT",t[t.MALFORMED_ARGUMENT=3]="MALFORMED_ARGUMENT",t[t.EXPECT_ARGUMENT_TYPE=4]="EXPECT_ARGUMENT_TYPE",t[t.INVALID_ARGUMENT_TYPE=5]="INVALID_ARGUMENT_TYPE",t[t.EXPECT_ARGUMENT_STYLE=6]="EXPECT_ARGUMENT_STYLE",t[t.INVALID_NUMBER_SKELETON=7]="INVALID_NUMBER_SKELETON",t[t.INVALID_DATE_TIME_SKELETON=8]="INVALID_DATE_TIME_SKELETON",t[t.EXPECT_NUMBER_SKELETON=9]="EXPECT_NUMBER_SKELETON",t[t.EXPECT_DATE_TIME_SKELETON=10]="EXPECT_DATE_TIME_SKELETON",t[t.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE=11]="UNCLOSED_QUOTE_IN_ARGUMENT_STYLE",t[t.EXPECT_SELECT_ARGUMENT_OPTIONS=12]="EXPECT_SELECT_ARGUMENT_OPTIONS",t[t.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE=13]="EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE",t[t.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE=14]="INVALID_PLURAL_ARGUMENT_OFFSET_VALUE",t[t.EXPECT_SELECT_ARGUMENT_SELECTOR=15]="EXPECT_SELECT_ARGUMENT_SELECTOR",t[t.EXPECT_PLURAL_ARGUMENT_SELECTOR=16]="EXPECT_PLURAL_ARGUMENT_SELECTOR",t[t.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT=17]="EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT",t[t.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT=18]="EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT",t[t.INVALID_PLURAL_ARGUMENT_SELECTOR=19]="INVALID_PLURAL_ARGUMENT_SELECTOR",t[t.DUPLICATE_PLURAL_ARGUMENT_SELECTOR=20]="DUPLICATE_PLURAL_ARGUMENT_SELECTOR",t[t.DUPLICATE_SELECT_ARGUMENT_SELECTOR=21]="DUPLICATE_SELECT_ARGUMENT_SELECTOR",t[t.MISSING_OTHER_CLAUSE=22]="MISSING_OTHER_CLAUSE",t[t.INVALID_TAG=23]="INVALID_TAG",t[t.INVALID_TAG_NAME=25]="INVALID_TAG_NAME",t[t.UNMATCHED_CLOSING_TAG=26]="UNMATCHED_CLOSING_TAG",t[t.UNCLOSED_TAG=27]="UNCLOSED_TAG"})($e||($e={}));var ft;(function(t){t[t.literal=0]="literal",t[t.argument=1]="argument",t[t.number=2]="number",t[t.date=3]="date",t[t.time=4]="time",t[t.select=5]="select",t[t.plural=6]="plural",t[t.pound=7]="pound",t[t.tag=8]="tag"})(ft||(ft={}));var os;(function(t){t[t.number=0]="number",t[t.dateTime=1]="dateTime"})(os||(os={}));function Tm(t){return t.type===ft.literal}function fE(t){return t.type===ft.argument}function V_(t){return t.type===ft.number}function W_(t){return t.type===ft.date}function X_(t){return t.type===ft.time}function $_(t){return t.type===ft.select}function j_(t){return t.type===ft.plural}function dE(t){return t.type===ft.pound}function Y_(t){return t.type===ft.tag}function q_(t){return!!(t&&typeof t=="object"&&t.type===os.number)}function vd(t){return!!(t&&typeof t=="object"&&t.type===os.dateTime)}var Z_=/[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/,hE=/(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;function pE(t){var e={};return t.replace(hE,function(n){var i=n.length;switch(n[0]){case"G":e.era=i===4?"long":i===5?"narrow":"short";break;case"y":e.year=i===2?"2-digit":"numeric";break;case"Y":case"u":case"U":case"r":throw new RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");case"q":case"Q":throw new RangeError("`q/Q` (quarter) patterns are not supported");case"M":case"L":e.month=["numeric","2-digit","short","long","narrow"][i-1];break;case"w":case"W":throw new RangeError("`w/W` (week) patterns are not supported");case"d":e.day=["numeric","2-digit"][i-1];break;case"D":case"F":case"g":throw new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");case"E":e.weekday=i===4?"long":i===5?"narrow":"short";break;case"e":if(i<4)throw new RangeError("`e..eee` (weekday) patterns are not supported");e.weekday=["short","long","narrow","short"][i-4];break;case"c":if(i<4)throw new RangeError("`c..ccc` (weekday) patterns are not supported");e.weekday=["short","long","narrow","short"][i-4];break;case"a":e.hour12=!0;break;case"b":case"B":throw new RangeError("`b/B` (period) patterns are not supported, use `a` instead");case"h":e.hourCycle="h12",e.hour=["numeric","2-digit"][i-1];break;case"H":e.hourCycle="h23",e.hour=["numeric","2-digit"][i-1];break;case"K":e.hourCycle="h11",e.hour=["numeric","2-digit"][i-1];break;case"k":e.hourCycle="h24",e.hour=["numeric","2-digit"][i-1];break;case"j":case"J":case"C":throw new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");case"m":e.minute=["numeric","2-digit"][i-1];break;case"s":e.second=["numeric","2-digit"][i-1];break;case"S":case"A":throw new RangeError("`S/A` (second) patterns are not supported, use `s` instead");case"z":e.timeZoneName=i<4?"short":"long";break;case"Z":case"O":case"v":case"V":case"X":case"x":throw new RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead")}return""}),e}var mE=/[\t-\r \x85\u200E\u200F\u2028\u2029]/i;function gE(t){if(t.length===0)throw new Error("Number skeleton cannot be empty");for(var e=t.split(mE).filter(function(d){return d.length>0}),n=[],i=0,r=e;i<r.length;i++){var o=r[i],s=o.split("/");if(s.length===0)throw new Error("Invalid number skeleton");for(var a=s[0],l=s.slice(1),u=0,f=l;u<f.length;u++){var h=f[u];if(h.length===0)throw new Error("Invalid number skeleton")}n.push({stem:a,options:l})}return n}function vE(t){return t.replace(/^(.*?)-/,"")}var wm=/^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g,K_=/^(@+)?(\+|#+)?[rs]?$/g,_E=/(\*)(0+)|(#+)(0+)|(0+)/g,Q_=/^(0+)$/;function Am(t){var e={};return t[t.length-1]==="r"?e.roundingPriority="morePrecision":t[t.length-1]==="s"&&(e.roundingPriority="lessPrecision"),t.replace(K_,function(n,i,r){return typeof r!="string"?(e.minimumSignificantDigits=i.length,e.maximumSignificantDigits=i.length):r==="+"?e.minimumSignificantDigits=i.length:i[0]==="#"?e.maximumSignificantDigits=i.length:(e.minimumSignificantDigits=i.length,e.maximumSignificantDigits=i.length+(typeof r=="string"?r.length:0)),""}),e}function J_(t){switch(t){case"sign-auto":return{signDisplay:"auto"};case"sign-accounting":case"()":return{currencySign:"accounting"};case"sign-always":case"+!":return{signDisplay:"always"};case"sign-accounting-always":case"()!":return{signDisplay:"always",currencySign:"accounting"};case"sign-except-zero":case"+?":return{signDisplay:"exceptZero"};case"sign-accounting-except-zero":case"()?":return{signDisplay:"exceptZero",currencySign:"accounting"};case"sign-never":case"+_":return{signDisplay:"never"}}}function xE(t){var e;if(t[0]==="E"&&t[1]==="E"?(e={notation:"engineering"},t=t.slice(2)):t[0]==="E"&&(e={notation:"scientific"},t=t.slice(1)),e){var n=t.slice(0,2);if(n==="+!"?(e.signDisplay="always",t=t.slice(2)):n==="+?"&&(e.signDisplay="exceptZero",t=t.slice(2)),!Q_.test(t))throw new Error("Malformed concise eng/scientific notation");e.minimumIntegerDigits=t.length}return e}function Cm(t){var e={},n=J_(t);return n||e}function yE(t){for(var e={},n=0,i=t;n<i.length;n++){var r=i[n];switch(r.stem){case"percent":case"%":e.style="percent";continue;case"%x100":e.style="percent",e.scale=100;continue;case"currency":e.style="currency",e.currency=r.options[0];continue;case"group-off":case",_":e.useGrouping=!1;continue;case"precision-integer":case".":e.maximumFractionDigits=0;continue;case"measure-unit":case"unit":e.style="unit",e.unit=vE(r.options[0]);continue;case"compact-short":case"K":e.notation="compact",e.compactDisplay="short";continue;case"compact-long":case"KK":e.notation="compact",e.compactDisplay="long";continue;case"scientific":e=me(me(me({},e),{notation:"scientific"}),r.options.reduce(function(l,u){return me(me({},l),Cm(u))},{}));continue;case"engineering":e=me(me(me({},e),{notation:"engineering"}),r.options.reduce(function(l,u){return me(me({},l),Cm(u))},{}));continue;case"notation-simple":e.notation="standard";continue;case"unit-width-narrow":e.currencyDisplay="narrowSymbol",e.unitDisplay="narrow";continue;case"unit-width-short":e.currencyDisplay="code",e.unitDisplay="short";continue;case"unit-width-full-name":e.currencyDisplay="name",e.unitDisplay="long";continue;case"unit-width-iso-code":e.currencyDisplay="symbol";continue;case"scale":e.scale=parseFloat(r.options[0]);continue;case"integer-width":if(r.options.length>1)throw new RangeError("integer-width stems only accept a single optional option");r.options[0].replace(_E,function(l,u,f,h,d,p){if(u)e.minimumIntegerDigits=f.length;else{if(h&&d)throw new Error("We currently do not support maximum integer digits");if(p)throw new Error("We currently do not support exact integer digits")}return""});continue}if(Q_.test(r.stem)){e.minimumIntegerDigits=r.stem.length;continue}if(wm.test(r.stem)){if(r.options.length>1)throw new RangeError("Fraction-precision stems only accept a single optional option");r.stem.replace(wm,function(l,u,f,h,d,p){return f==="*"?e.minimumFractionDigits=u.length:h&&h[0]==="#"?e.maximumFractionDigits=h.length:d&&p?(e.minimumFractionDigits=d.length,e.maximumFractionDigits=d.length+p.length):(e.minimumFractionDigits=u.length,e.maximumFractionDigits=u.length),""});var o=r.options[0];o==="w"?e=me(me({},e),{trailingZeroDisplay:"stripIfInteger"}):o&&(e=me(me({},e),Am(o)));continue}if(K_.test(r.stem)){e=me(me({},e),Am(r.stem));continue}var s=J_(r.stem);s&&(e=me(me({},e),s));var a=xE(r.stem);a&&(e=me(me({},e),a))}return e}var qa={"001":["H","h"],AC:["H","h","hb","hB"],AD:["H","hB"],AE:["h","hB","hb","H"],AF:["H","hb","hB","h"],AG:["h","hb","H","hB"],AI:["H","h","hb","hB"],AL:["h","H","hB"],AM:["H","hB"],AO:["H","hB"],AR:["H","h","hB","hb"],AS:["h","H"],AT:["H","hB"],AU:["h","hb","H","hB"],AW:["H","hB"],AX:["H"],AZ:["H","hB","h"],BA:["H","hB","h"],BB:["h","hb","H","hB"],BD:["h","hB","H"],BE:["H","hB"],BF:["H","hB"],BG:["H","hB","h"],BH:["h","hB","hb","H"],BI:["H","h"],BJ:["H","hB"],BL:["H","hB"],BM:["h","hb","H","hB"],BN:["hb","hB","h","H"],BO:["H","hB","h","hb"],BQ:["H"],BR:["H","hB"],BS:["h","hb","H","hB"],BT:["h","H"],BW:["H","h","hb","hB"],BY:["H","h"],BZ:["H","h","hb","hB"],CA:["h","hb","H","hB"],CC:["H","h","hb","hB"],CD:["hB","H"],CF:["H","h","hB"],CG:["H","hB"],CH:["H","hB","h"],CI:["H","hB"],CK:["H","h","hb","hB"],CL:["H","h","hB","hb"],CM:["H","h","hB"],CN:["H","hB","hb","h"],CO:["h","H","hB","hb"],CP:["H"],CR:["H","h","hB","hb"],CU:["H","h","hB","hb"],CV:["H","hB"],CW:["H","hB"],CX:["H","h","hb","hB"],CY:["h","H","hb","hB"],CZ:["H"],DE:["H","hB"],DG:["H","h","hb","hB"],DJ:["h","H"],DK:["H"],DM:["h","hb","H","hB"],DO:["h","H","hB","hb"],DZ:["h","hB","hb","H"],EA:["H","h","hB","hb"],EC:["H","hB","h","hb"],EE:["H","hB"],EG:["h","hB","hb","H"],EH:["h","hB","hb","H"],ER:["h","H"],ES:["H","hB","h","hb"],ET:["hB","hb","h","H"],FI:["H"],FJ:["h","hb","H","hB"],FK:["H","h","hb","hB"],FM:["h","hb","H","hB"],FO:["H","h"],FR:["H","hB"],GA:["H","hB"],GB:["H","h","hb","hB"],GD:["h","hb","H","hB"],GE:["H","hB","h"],GF:["H","hB"],GG:["H","h","hb","hB"],GH:["h","H"],GI:["H","h","hb","hB"],GL:["H","h"],GM:["h","hb","H","hB"],GN:["H","hB"],GP:["H","hB"],GQ:["H","hB","h","hb"],GR:["h","H","hb","hB"],GT:["H","h","hB","hb"],GU:["h","hb","H","hB"],GW:["H","hB"],GY:["h","hb","H","hB"],HK:["h","hB","hb","H"],HN:["H","h","hB","hb"],HR:["H","hB"],HU:["H","h"],IC:["H","h","hB","hb"],ID:["H"],IE:["H","h","hb","hB"],IL:["H","hB"],IM:["H","h","hb","hB"],IN:["h","H"],IO:["H","h","hb","hB"],IQ:["h","hB","hb","H"],IR:["hB","H"],IS:["H"],IT:["H","hB"],JE:["H","h","hb","hB"],JM:["h","hb","H","hB"],JO:["h","hB","hb","H"],JP:["H","K","h"],KE:["hB","hb","H","h"],KG:["H","h","hB","hb"],KH:["hB","h","H","hb"],KI:["h","hb","H","hB"],KM:["H","h","hB","hb"],KN:["h","hb","H","hB"],KP:["h","H","hB","hb"],KR:["h","H","hB","hb"],KW:["h","hB","hb","H"],KY:["h","hb","H","hB"],KZ:["H","hB"],LA:["H","hb","hB","h"],LB:["h","hB","hb","H"],LC:["h","hb","H","hB"],LI:["H","hB","h"],LK:["H","h","hB","hb"],LR:["h","hb","H","hB"],LS:["h","H"],LT:["H","h","hb","hB"],LU:["H","h","hB"],LV:["H","hB","hb","h"],LY:["h","hB","hb","H"],MA:["H","h","hB","hb"],MC:["H","hB"],MD:["H","hB"],ME:["H","hB","h"],MF:["H","hB"],MG:["H","h"],MH:["h","hb","H","hB"],MK:["H","h","hb","hB"],ML:["H"],MM:["hB","hb","H","h"],MN:["H","h","hb","hB"],MO:["h","hB","hb","H"],MP:["h","hb","H","hB"],MQ:["H","hB"],MR:["h","hB","hb","H"],MS:["H","h","hb","hB"],MT:["H","h"],MU:["H","h"],MV:["H","h"],MW:["h","hb","H","hB"],MX:["H","h","hB","hb"],MY:["hb","hB","h","H"],MZ:["H","hB"],NA:["h","H","hB","hb"],NC:["H","hB"],NE:["H"],NF:["H","h","hb","hB"],NG:["H","h","hb","hB"],NI:["H","h","hB","hb"],NL:["H","hB"],NO:["H","h"],NP:["H","h","hB"],NR:["H","h","hb","hB"],NU:["H","h","hb","hB"],NZ:["h","hb","H","hB"],OM:["h","hB","hb","H"],PA:["h","H","hB","hb"],PE:["H","hB","h","hb"],PF:["H","h","hB"],PG:["h","H"],PH:["h","hB","hb","H"],PK:["h","hB","H"],PL:["H","h"],PM:["H","hB"],PN:["H","h","hb","hB"],PR:["h","H","hB","hb"],PS:["h","hB","hb","H"],PT:["H","hB"],PW:["h","H"],PY:["H","h","hB","hb"],QA:["h","hB","hb","H"],RE:["H","hB"],RO:["H","hB"],RS:["H","hB","h"],RU:["H"],RW:["H","h"],SA:["h","hB","hb","H"],SB:["h","hb","H","hB"],SC:["H","h","hB"],SD:["h","hB","hb","H"],SE:["H"],SG:["h","hb","H","hB"],SH:["H","h","hb","hB"],SI:["H","hB"],SJ:["H"],SK:["H"],SL:["h","hb","H","hB"],SM:["H","h","hB"],SN:["H","h","hB"],SO:["h","H"],SR:["H","hB"],SS:["h","hb","H","hB"],ST:["H","hB"],SV:["H","h","hB","hb"],SX:["H","h","hb","hB"],SY:["h","hB","hb","H"],SZ:["h","hb","H","hB"],TA:["H","h","hb","hB"],TC:["h","hb","H","hB"],TD:["h","H","hB"],TF:["H","h","hB"],TG:["H","hB"],TH:["H","h"],TJ:["H","h"],TL:["H","hB","hb","h"],TM:["H","h"],TN:["h","hB","hb","H"],TO:["h","H"],TR:["H","hB"],TT:["h","hb","H","hB"],TW:["hB","hb","h","H"],TZ:["hB","hb","H","h"],UA:["H","hB","h"],UG:["hB","hb","H","h"],UM:["h","hb","H","hB"],US:["h","hb","H","hB"],UY:["H","h","hB","hb"],UZ:["H","hB","h"],VA:["H","h","hB"],VC:["h","hb","H","hB"],VE:["h","H","hB","hb"],VG:["h","hb","H","hB"],VI:["h","hb","H","hB"],VN:["H","h"],VU:["h","H"],WF:["H","hB"],WS:["h","H"],XK:["H","hB","h"],YE:["h","hB","hb","H"],YT:["H","hB"],ZA:["H","h","hb","hB"],ZM:["h","hb","H","hB"],ZW:["H","h"],"af-ZA":["H","h","hB","hb"],"ar-001":["h","hB","hb","H"],"ca-ES":["H","h","hB"],"en-001":["h","hb","H","hB"],"es-BO":["H","h","hB","hb"],"es-BR":["H","h","hB","hb"],"es-EC":["H","h","hB","hb"],"es-ES":["H","h","hB","hb"],"es-GQ":["H","h","hB","hb"],"es-PE":["H","h","hB","hb"],"fr-CA":["H","h","hB"],"gl-ES":["H","h","hB"],"gu-IN":["hB","hb","h","H"],"hi-IN":["hB","h","H"],"it-CH":["H","h","hB"],"it-IT":["H","h","hB"],"kn-IN":["hB","h","H"],"ml-IN":["hB","h","H"],"mr-IN":["hB","hb","h","H"],"pa-IN":["hB","hb","h","H"],"ta-IN":["hB","h","hb","H"],"te-IN":["hB","h","H"],"zu-ZA":["H","hB","hb","h"]};function SE(t,e){for(var n="",i=0;i<t.length;i++){var r=t.charAt(i);if(r==="j"){for(var o=0;i+1<t.length&&t.charAt(i+1)===r;)o++,i++;var s=1+(o&1),a=o<2?1:3+(o>>1),l="a",u=EE(e);for((u=="H"||u=="k")&&(a=0);a-- >0;)n+=l;for(;s-- >0;)n=u+n}else r==="J"?n+="H":n+=r}return n}function EE(t){var e=t.hourCycle;if(e===void 0&&t.hourCycles&&t.hourCycles.length&&(e=t.hourCycles[0]),e)switch(e){case"h24":return"k";case"h23":return"H";case"h12":return"h";case"h11":return"K";default:throw new Error("Invalid hourCycle")}var n=t.language,i;n!=="root"&&(i=t.maximize().region);var r=qa[i||""]||qa[n||""]||qa["".concat(n,"-001")]||qa["001"];return r[0]}var kc,ME=new RegExp("^".concat(Z_.source,"*")),TE=new RegExp("".concat(Z_.source,"*$"));function je(t,e){return{start:t,end:e}}var wE=!!String.prototype.startsWith&&"_a".startsWith("a",1),AE=!!String.fromCodePoint,CE=!!Object.fromEntries,RE=!!String.prototype.codePointAt,bE=!!String.prototype.trimStart,PE=!!String.prototype.trimEnd,LE=!!Number.isSafeInteger,NE=LE?Number.isSafeInteger:function(t){return typeof t=="number"&&isFinite(t)&&Math.floor(t)===t&&Math.abs(t)<=9007199254740991},_d=!0;try{var DE=t1("([^\\p{White_Space}\\p{Pattern_Syntax}]*)","yu");_d=((kc=DE.exec("a"))===null||kc===void 0?void 0:kc[0])==="a"}catch{_d=!1}var Rm=wE?function(e,n,i){return e.startsWith(n,i)}:function(e,n,i){return e.slice(i,i+n.length)===n},xd=AE?String.fromCodePoint:function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];for(var i="",r=e.length,o=0,s;r>o;){if(s=e[o++],s>1114111)throw RangeError(s+" is not a valid code point");i+=s<65536?String.fromCharCode(s):String.fromCharCode(((s-=65536)>>10)+55296,s%1024+56320)}return i},bm=CE?Object.fromEntries:function(e){for(var n={},i=0,r=e;i<r.length;i++){var o=r[i],s=o[0],a=o[1];n[s]=a}return n},e1=RE?function(e,n){return e.codePointAt(n)}:function(e,n){var i=e.length;if(!(n<0||n>=i)){var r=e.charCodeAt(n),o;return r<55296||r>56319||n+1===i||(o=e.charCodeAt(n+1))<56320||o>57343?r:(r-55296<<10)+(o-56320)+65536}},IE=bE?function(e){return e.trimStart()}:function(e){return e.replace(ME,"")},UE=PE?function(e){return e.trimEnd()}:function(e){return e.replace(TE,"")};function t1(t,e){return new RegExp(t,e)}var yd;if(_d){var Pm=t1("([^\\p{White_Space}\\p{Pattern_Syntax}]*)","yu");yd=function(e,n){var i;Pm.lastIndex=n;var r=Pm.exec(e);return(i=r[1])!==null&&i!==void 0?i:""}}else yd=function(e,n){for(var i=[];;){var r=e1(e,n);if(r===void 0||n1(r)||kE(r))break;i.push(r),n+=r>=65536?2:1}return xd.apply(void 0,i)};var FE=function(){function t(e,n){n===void 0&&(n={}),this.message=e,this.position={offset:0,line:1,column:1},this.ignoreTag=!!n.ignoreTag,this.locale=n.locale,this.requiresOtherClause=!!n.requiresOtherClause,this.shouldParseSkeletons=!!n.shouldParseSkeletons}return t.prototype.parse=function(){if(this.offset()!==0)throw Error("parser can only be used once");return this.parseMessage(0,"",!1)},t.prototype.parseMessage=function(e,n,i){for(var r=[];!this.isEOF();){var o=this.char();if(o===123){var s=this.parseArgument(e,i);if(s.err)return s;r.push(s.val)}else{if(o===125&&e>0)break;if(o===35&&(n==="plural"||n==="selectordinal")){var a=this.clonePosition();this.bump(),r.push({type:ft.pound,location:je(a,this.clonePosition())})}else if(o===60&&!this.ignoreTag&&this.peek()===47){if(i)break;return this.error($e.UNMATCHED_CLOSING_TAG,je(this.clonePosition(),this.clonePosition()))}else if(o===60&&!this.ignoreTag&&Sd(this.peek()||0)){var s=this.parseTag(e,n);if(s.err)return s;r.push(s.val)}else{var s=this.parseLiteral(e,n);if(s.err)return s;r.push(s.val)}}}return{val:r,err:null}},t.prototype.parseTag=function(e,n){var i=this.clonePosition();this.bump();var r=this.parseTagName();if(this.bumpSpace(),this.bumpIf("/>"))return{val:{type:ft.literal,value:"<".concat(r,"/>"),location:je(i,this.clonePosition())},err:null};if(this.bumpIf(">")){var o=this.parseMessage(e+1,n,!0);if(o.err)return o;var s=o.val,a=this.clonePosition();if(this.bumpIf("</")){if(this.isEOF()||!Sd(this.char()))return this.error($e.INVALID_TAG,je(a,this.clonePosition()));var l=this.clonePosition(),u=this.parseTagName();return r!==u?this.error($e.UNMATCHED_CLOSING_TAG,je(l,this.clonePosition())):(this.bumpSpace(),this.bumpIf(">")?{val:{type:ft.tag,value:r,children:s,location:je(i,this.clonePosition())},err:null}:this.error($e.INVALID_TAG,je(a,this.clonePosition())))}else return this.error($e.UNCLOSED_TAG,je(i,this.clonePosition()))}else return this.error($e.INVALID_TAG,je(i,this.clonePosition()))},t.prototype.parseTagName=function(){var e=this.offset();for(this.bump();!this.isEOF()&&BE(this.char());)this.bump();return this.message.slice(e,this.offset())},t.prototype.parseLiteral=function(e,n){for(var i=this.clonePosition(),r="";;){var o=this.tryParseQuote(n);if(o){r+=o;continue}var s=this.tryParseUnquoted(e,n);if(s){r+=s;continue}var a=this.tryParseLeftAngleBracket();if(a){r+=a;continue}break}var l=je(i,this.clonePosition());return{val:{type:ft.literal,value:r,location:l},err:null}},t.prototype.tryParseLeftAngleBracket=function(){return!this.isEOF()&&this.char()===60&&(this.ignoreTag||!OE(this.peek()||0))?(this.bump(),"<"):null},t.prototype.tryParseQuote=function(e){if(this.isEOF()||this.char()!==39)return null;switch(this.peek()){case 39:return this.bump(),this.bump(),"'";case 123:case 60:case 62:case 125:break;case 35:if(e==="plural"||e==="selectordinal")break;return null;default:return null}this.bump();var n=[this.char()];for(this.bump();!this.isEOF();){var i=this.char();if(i===39)if(this.peek()===39)n.push(39),this.bump();else{this.bump();break}else n.push(i);this.bump()}return xd.apply(void 0,n)},t.prototype.tryParseUnquoted=function(e,n){if(this.isEOF())return null;var i=this.char();return i===60||i===123||i===35&&(n==="plural"||n==="selectordinal")||i===125&&e>0?null:(this.bump(),xd(i))},t.prototype.parseArgument=function(e,n){var i=this.clonePosition();if(this.bump(),this.bumpSpace(),this.isEOF())return this.error($e.EXPECT_ARGUMENT_CLOSING_BRACE,je(i,this.clonePosition()));if(this.char()===125)return this.bump(),this.error($e.EMPTY_ARGUMENT,je(i,this.clonePosition()));var r=this.parseIdentifierIfPossible().value;if(!r)return this.error($e.MALFORMED_ARGUMENT,je(i,this.clonePosition()));if(this.bumpSpace(),this.isEOF())return this.error($e.EXPECT_ARGUMENT_CLOSING_BRACE,je(i,this.clonePosition()));switch(this.char()){case 125:return this.bump(),{val:{type:ft.argument,value:r,location:je(i,this.clonePosition())},err:null};case 44:return this.bump(),this.bumpSpace(),this.isEOF()?this.error($e.EXPECT_ARGUMENT_CLOSING_BRACE,je(i,this.clonePosition())):this.parseArgumentOptions(e,n,r,i);default:return this.error($e.MALFORMED_ARGUMENT,je(i,this.clonePosition()))}},t.prototype.parseIdentifierIfPossible=function(){var e=this.clonePosition(),n=this.offset(),i=yd(this.message,n),r=n+i.length;this.bumpTo(r);var o=this.clonePosition(),s=je(e,o);return{value:i,location:s}},t.prototype.parseArgumentOptions=function(e,n,i,r){var o,s=this.clonePosition(),a=this.parseIdentifierIfPossible().value,l=this.clonePosition();switch(a){case"":return this.error($e.EXPECT_ARGUMENT_TYPE,je(s,l));case"number":case"date":case"time":{this.bumpSpace();var u=null;if(this.bumpIf(",")){this.bumpSpace();var f=this.clonePosition(),h=this.parseSimpleArgStyleIfPossible();if(h.err)return h;var d=UE(h.val);if(d.length===0)return this.error($e.EXPECT_ARGUMENT_STYLE,je(this.clonePosition(),this.clonePosition()));var p=je(f,this.clonePosition());u={style:d,styleLocation:p}}var _=this.tryParseArgumentClose(r);if(_.err)return _;var x=je(r,this.clonePosition());if(u&&Rm(u==null?void 0:u.style,"::",0)){var g=IE(u.style.slice(2));if(a==="number"){var h=this.parseNumberSkeletonFromString(g,u.styleLocation);return h.err?h:{val:{type:ft.number,value:i,location:x,style:h.val},err:null}}else{if(g.length===0)return this.error($e.EXPECT_DATE_TIME_SKELETON,x);var c=g;this.locale&&(c=SE(g,this.locale));var d={type:os.dateTime,pattern:c,location:u.styleLocation,parsedOptions:this.shouldParseSkeletons?pE(c):{}},v=a==="date"?ft.date:ft.time;return{val:{type:v,value:i,location:x,style:d},err:null}}}return{val:{type:a==="number"?ft.number:a==="date"?ft.date:ft.time,value:i,location:x,style:(o=u==null?void 0:u.style)!==null&&o!==void 0?o:null},err:null}}case"plural":case"selectordinal":case"select":{var m=this.clonePosition();if(this.bumpSpace(),!this.bumpIf(","))return this.error($e.EXPECT_SELECT_ARGUMENT_OPTIONS,je(m,me({},m)));this.bumpSpace();var y=this.parseIdentifierIfPossible(),R=0;if(a!=="select"&&y.value==="offset"){if(!this.bumpIf(":"))return this.error($e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,je(this.clonePosition(),this.clonePosition()));this.bumpSpace();var h=this.tryParseDecimalInteger($e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,$e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);if(h.err)return h;this.bumpSpace(),y=this.parseIdentifierIfPossible(),R=h.val}var A=this.tryParsePluralOrSelectOptions(e,a,n,y);if(A.err)return A;var _=this.tryParseArgumentClose(r);if(_.err)return _;var M=je(r,this.clonePosition());return a==="select"?{val:{type:ft.select,value:i,options:bm(A.val),location:M},err:null}:{val:{type:ft.plural,value:i,options:bm(A.val),offset:R,pluralType:a==="plural"?"cardinal":"ordinal",location:M},err:null}}default:return this.error($e.INVALID_ARGUMENT_TYPE,je(s,l))}},t.prototype.tryParseArgumentClose=function(e){return this.isEOF()||this.char()!==125?this.error($e.EXPECT_ARGUMENT_CLOSING_BRACE,je(e,this.clonePosition())):(this.bump(),{val:!0,err:null})},t.prototype.parseSimpleArgStyleIfPossible=function(){for(var e=0,n=this.clonePosition();!this.isEOF();){var i=this.char();switch(i){case 39:{this.bump();var r=this.clonePosition();if(!this.bumpUntil("'"))return this.error($e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE,je(r,this.clonePosition()));this.bump();break}case 123:{e+=1,this.bump();break}case 125:{if(e>0)e-=1;else return{val:this.message.slice(n.offset,this.offset()),err:null};break}default:this.bump();break}}return{val:this.message.slice(n.offset,this.offset()),err:null}},t.prototype.parseNumberSkeletonFromString=function(e,n){var i=[];try{i=gE(e)}catch{return this.error($e.INVALID_NUMBER_SKELETON,n)}return{val:{type:os.number,tokens:i,location:n,parsedOptions:this.shouldParseSkeletons?yE(i):{}},err:null}},t.prototype.tryParsePluralOrSelectOptions=function(e,n,i,r){for(var o,s=!1,a=[],l=new Set,u=r.value,f=r.location;;){if(u.length===0){var h=this.clonePosition();if(n!=="select"&&this.bumpIf("=")){var d=this.tryParseDecimalInteger($e.EXPECT_PLURAL_ARGUMENT_SELECTOR,$e.INVALID_PLURAL_ARGUMENT_SELECTOR);if(d.err)return d;f=je(h,this.clonePosition()),u=this.message.slice(h.offset,this.offset())}else break}if(l.has(u))return this.error(n==="select"?$e.DUPLICATE_SELECT_ARGUMENT_SELECTOR:$e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR,f);u==="other"&&(s=!0),this.bumpSpace();var p=this.clonePosition();if(!this.bumpIf("{"))return this.error(n==="select"?$e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT:$e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT,je(this.clonePosition(),this.clonePosition()));var _=this.parseMessage(e+1,n,i);if(_.err)return _;var x=this.tryParseArgumentClose(p);if(x.err)return x;a.push([u,{value:_.val,location:je(p,this.clonePosition())}]),l.add(u),this.bumpSpace(),o=this.parseIdentifierIfPossible(),u=o.value,f=o.location}return a.length===0?this.error(n==="select"?$e.EXPECT_SELECT_ARGUMENT_SELECTOR:$e.EXPECT_PLURAL_ARGUMENT_SELECTOR,je(this.clonePosition(),this.clonePosition())):this.requiresOtherClause&&!s?this.error($e.MISSING_OTHER_CLAUSE,je(this.clonePosition(),this.clonePosition())):{val:a,err:null}},t.prototype.tryParseDecimalInteger=function(e,n){var i=1,r=this.clonePosition();this.bumpIf("+")||this.bumpIf("-")&&(i=-1);for(var o=!1,s=0;!this.isEOF();){var a=this.char();if(a>=48&&a<=57)o=!0,s=s*10+(a-48),this.bump();else break}var l=je(r,this.clonePosition());return o?(s*=i,NE(s)?{val:s,err:null}:this.error(n,l)):this.error(e,l)},t.prototype.offset=function(){return this.position.offset},t.prototype.isEOF=function(){return this.offset()===this.message.length},t.prototype.clonePosition=function(){return{offset:this.position.offset,line:this.position.line,column:this.position.column}},t.prototype.char=function(){var e=this.position.offset;if(e>=this.message.length)throw Error("out of bound");var n=e1(this.message,e);if(n===void 0)throw Error("Offset ".concat(e," is at invalid UTF-16 code unit boundary"));return n},t.prototype.error=function(e,n){return{val:null,err:{kind:e,message:this.message,location:n}}},t.prototype.bump=function(){if(!this.isEOF()){var e=this.char();e===10?(this.position.line+=1,this.position.column=1,this.position.offset+=1):(this.position.column+=1,this.position.offset+=e<65536?1:2)}},t.prototype.bumpIf=function(e){if(Rm(this.message,e,this.offset())){for(var n=0;n<e.length;n++)this.bump();return!0}return!1},t.prototype.bumpUntil=function(e){var n=this.offset(),i=this.message.indexOf(e,n);return i>=0?(this.bumpTo(i),!0):(this.bumpTo(this.message.length),!1)},t.prototype.bumpTo=function(e){if(this.offset()>e)throw Error("targetOffset ".concat(e," must be greater than or equal to the current offset ").concat(this.offset()));for(e=Math.min(e,this.message.length);;){var n=this.offset();if(n===e)break;if(n>e)throw Error("targetOffset ".concat(e," is at invalid UTF-16 code unit boundary"));if(this.bump(),this.isEOF())break}},t.prototype.bumpSpace=function(){for(;!this.isEOF()&&n1(this.char());)this.bump()},t.prototype.peek=function(){if(this.isEOF())return null;var e=this.char(),n=this.offset(),i=this.message.charCodeAt(n+(e>=65536?2:1));return i??null},t}();function Sd(t){return t>=97&&t<=122||t>=65&&t<=90}function OE(t){return Sd(t)||t===47}function BE(t){return t===45||t===46||t>=48&&t<=57||t===95||t>=97&&t<=122||t>=65&&t<=90||t==183||t>=192&&t<=214||t>=216&&t<=246||t>=248&&t<=893||t>=895&&t<=8191||t>=8204&&t<=8205||t>=8255&&t<=8256||t>=8304&&t<=8591||t>=11264&&t<=12271||t>=12289&&t<=55295||t>=63744&&t<=64975||t>=65008&&t<=65533||t>=65536&&t<=983039}function n1(t){return t>=9&&t<=13||t===32||t===133||t>=8206&&t<=8207||t===8232||t===8233}function kE(t){return t>=33&&t<=35||t===36||t>=37&&t<=39||t===40||t===41||t===42||t===43||t===44||t===45||t>=46&&t<=47||t>=58&&t<=59||t>=60&&t<=62||t>=63&&t<=64||t===91||t===92||t===93||t===94||t===96||t===123||t===124||t===125||t===126||t===161||t>=162&&t<=165||t===166||t===167||t===169||t===171||t===172||t===174||t===176||t===177||t===182||t===187||t===191||t===215||t===247||t>=8208&&t<=8213||t>=8214&&t<=8215||t===8216||t===8217||t===8218||t>=8219&&t<=8220||t===8221||t===8222||t===8223||t>=8224&&t<=8231||t>=8240&&t<=8248||t===8249||t===8250||t>=8251&&t<=8254||t>=8257&&t<=8259||t===8260||t===8261||t===8262||t>=8263&&t<=8273||t===8274||t===8275||t>=8277&&t<=8286||t>=8592&&t<=8596||t>=8597&&t<=8601||t>=8602&&t<=8603||t>=8604&&t<=8607||t===8608||t>=8609&&t<=8610||t===8611||t>=8612&&t<=8613||t===8614||t>=8615&&t<=8621||t===8622||t>=8623&&t<=8653||t>=8654&&t<=8655||t>=8656&&t<=8657||t===8658||t===8659||t===8660||t>=8661&&t<=8691||t>=8692&&t<=8959||t>=8960&&t<=8967||t===8968||t===8969||t===8970||t===8971||t>=8972&&t<=8991||t>=8992&&t<=8993||t>=8994&&t<=9e3||t===9001||t===9002||t>=9003&&t<=9083||t===9084||t>=9085&&t<=9114||t>=9115&&t<=9139||t>=9140&&t<=9179||t>=9180&&t<=9185||t>=9186&&t<=9254||t>=9255&&t<=9279||t>=9280&&t<=9290||t>=9291&&t<=9311||t>=9472&&t<=9654||t===9655||t>=9656&&t<=9664||t===9665||t>=9666&&t<=9719||t>=9720&&t<=9727||t>=9728&&t<=9838||t===9839||t>=9840&&t<=10087||t===10088||t===10089||t===10090||t===10091||t===10092||t===10093||t===10094||t===10095||t===10096||t===10097||t===10098||t===10099||t===10100||t===10101||t>=10132&&t<=10175||t>=10176&&t<=10180||t===10181||t===10182||t>=10183&&t<=10213||t===10214||t===10215||t===10216||t===10217||t===10218||t===10219||t===10220||t===10221||t===10222||t===10223||t>=10224&&t<=10239||t>=10240&&t<=10495||t>=10496&&t<=10626||t===10627||t===10628||t===10629||t===10630||t===10631||t===10632||t===10633||t===10634||t===10635||t===10636||t===10637||t===10638||t===10639||t===10640||t===10641||t===10642||t===10643||t===10644||t===10645||t===10646||t===10647||t===10648||t>=10649&&t<=10711||t===10712||t===10713||t===10714||t===10715||t>=10716&&t<=10747||t===10748||t===10749||t>=10750&&t<=11007||t>=11008&&t<=11055||t>=11056&&t<=11076||t>=11077&&t<=11078||t>=11079&&t<=11084||t>=11085&&t<=11123||t>=11124&&t<=11125||t>=11126&&t<=11157||t===11158||t>=11159&&t<=11263||t>=11776&&t<=11777||t===11778||t===11779||t===11780||t===11781||t>=11782&&t<=11784||t===11785||t===11786||t===11787||t===11788||t===11789||t>=11790&&t<=11798||t===11799||t>=11800&&t<=11801||t===11802||t===11803||t===11804||t===11805||t>=11806&&t<=11807||t===11808||t===11809||t===11810||t===11811||t===11812||t===11813||t===11814||t===11815||t===11816||t===11817||t>=11818&&t<=11822||t===11823||t>=11824&&t<=11833||t>=11834&&t<=11835||t>=11836&&t<=11839||t===11840||t===11841||t===11842||t>=11843&&t<=11855||t>=11856&&t<=11857||t===11858||t>=11859&&t<=11903||t>=12289&&t<=12291||t===12296||t===12297||t===12298||t===12299||t===12300||t===12301||t===12302||t===12303||t===12304||t===12305||t>=12306&&t<=12307||t===12308||t===12309||t===12310||t===12311||t===12312||t===12313||t===12314||t===12315||t===12316||t===12317||t>=12318&&t<=12319||t===12320||t===12336||t===64830||t===64831||t>=65093&&t<=65094}function Ed(t){t.forEach(function(e){if(delete e.location,$_(e)||j_(e))for(var n in e.options)delete e.options[n].location,Ed(e.options[n].value);else V_(e)&&q_(e.style)||(W_(e)||X_(e))&&vd(e.style)?delete e.style.location:Y_(e)&&Ed(e.children)})}function HE(t,e){e===void 0&&(e={}),e=me({shouldParseSkeletons:!0,requiresOtherClause:!0},e);var n=new FE(t,e).parse();if(n.err){var i=SyntaxError($e[n.err.kind]);throw i.location=n.err.location,i.originalMessage=n.err.message,i}return e!=null&&e.captureLocation||Ed(n.val),n.val}function ui(t,e){var n=e&&e.cache?e.cache:$E,i=e&&e.serializer?e.serializer:XE,r=e&&e.strategy?e.strategy:GE;return r(t,{cache:n,serializer:i})}function zE(t){return t==null||typeof t=="number"||typeof t=="boolean"}function i1(t,e,n,i){var r=zE(i)?i:n(i),o=e.get(r);return typeof o>"u"&&(o=t.call(this,i),e.set(r,o)),o}function r1(t,e,n){var i=Array.prototype.slice.call(arguments,3),r=n(i),o=e.get(r);return typeof o>"u"&&(o=t.apply(this,i),e.set(r,o)),o}function zh(t,e,n,i,r){return n.bind(e,t,i,r)}function GE(t,e){var n=t.length===1?i1:r1;return zh(t,this,n,e.cache.create(),e.serializer)}function VE(t,e){return zh(t,this,r1,e.cache.create(),e.serializer)}function WE(t,e){return zh(t,this,i1,e.cache.create(),e.serializer)}var XE=function(){return JSON.stringify(arguments)};function Gh(){this.cache=Object.create(null)}Gh.prototype.get=function(t){return this.cache[t]};Gh.prototype.set=function(t,e){this.cache[t]=e};var $E={create:function(){return new Gh}},ci={variadic:VE,monadic:WE},xi;(function(t){t.MISSING_VALUE="MISSING_VALUE",t.INVALID_VALUE="INVALID_VALUE",t.MISSING_INTL_API="MISSING_INTL_API"})(xi||(xi={}));var Er=function(t){Vn(e,t);function e(n,i,r){var o=t.call(this,n)||this;return o.code=i,o.originalMessage=r,o}return e.prototype.toString=function(){return"[formatjs Error: ".concat(this.code,"] ").concat(this.message)},e}(Error),Lm=function(t){Vn(e,t);function e(n,i,r,o){return t.call(this,'Invalid values for "'.concat(n,'": "').concat(i,'". Options are "').concat(Object.keys(r).join('", "'),'"'),xi.INVALID_VALUE,o)||this}return e}(Er),jE=function(t){Vn(e,t);function e(n,i,r){return t.call(this,'Value for "'.concat(n,'" must be of type ').concat(i),xi.INVALID_VALUE,r)||this}return e}(Er),YE=function(t){Vn(e,t);function e(n,i){return t.call(this,'The intl string context variable "'.concat(n,'" was not provided to the string "').concat(i,'"'),xi.MISSING_VALUE,i)||this}return e}(Er),on;(function(t){t[t.literal=0]="literal",t[t.object=1]="object"})(on||(on={}));function qE(t){return t.length<2?t:t.reduce(function(e,n){var i=e[e.length-1];return!i||i.type!==on.literal||n.type!==on.literal?e.push(n):i.value+=n.value,e},[])}function o1(t){return typeof t=="function"}function Ul(t,e,n,i,r,o,s){if(t.length===1&&Tm(t[0]))return[{type:on.literal,value:t[0].value}];for(var a=[],l=0,u=t;l<u.length;l++){var f=u[l];if(Tm(f)){a.push({type:on.literal,value:f.value});continue}if(dE(f)){typeof o=="number"&&a.push({type:on.literal,value:n.getNumberFormat(e).format(o)});continue}var h=f.value;if(!(r&&h in r))throw new YE(h,s);var d=r[h];if(fE(f)){(!d||typeof d=="string"||typeof d=="number")&&(d=typeof d=="string"||typeof d=="number"?String(d):""),a.push({type:typeof d=="string"?on.literal:on.object,value:d});continue}if(W_(f)){var p=typeof f.style=="string"?i.date[f.style]:vd(f.style)?f.style.parsedOptions:void 0;a.push({type:on.literal,value:n.getDateTimeFormat(e,p).format(d)});continue}if(X_(f)){var p=typeof f.style=="string"?i.time[f.style]:vd(f.style)?f.style.parsedOptions:i.time.medium;a.push({type:on.literal,value:n.getDateTimeFormat(e,p).format(d)});continue}if(V_(f)){var p=typeof f.style=="string"?i.number[f.style]:q_(f.style)?f.style.parsedOptions:void 0;p&&p.scale&&(d=d*(p.scale||1)),a.push({type:on.literal,value:n.getNumberFormat(e,p).format(d)});continue}if(Y_(f)){var _=f.children,x=f.value,g=r[x];if(!o1(g))throw new jE(x,"function",s);var c=Ul(_,e,n,i,r,o),v=g(c.map(function(R){return R.value}));Array.isArray(v)||(v=[v]),a.push.apply(a,v.map(function(R){return{type:typeof R=="string"?on.literal:on.object,value:R}}))}if($_(f)){var m=f.options[d]||f.options.other;if(!m)throw new Lm(f.value,d,Object.keys(f.options),s);a.push.apply(a,Ul(m.value,e,n,i,r));continue}if(j_(f)){var m=f.options["=".concat(d)];if(!m){if(!Intl.PluralRules)throw new Er(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`,xi.MISSING_INTL_API,s);var y=n.getPluralRules(e,{type:f.pluralType}).select(d-(f.offset||0));m=f.options[y]||f.options.other}if(!m)throw new Lm(f.value,d,Object.keys(f.options),s);a.push.apply(a,Ul(m.value,e,n,i,r,d-(f.offset||0)));continue}}return qE(a)}function ZE(t,e){return e?me(me(me({},t||{}),e||{}),Object.keys(t).reduce(function(n,i){return n[i]=me(me({},t[i]),e[i]||{}),n},{})):t}function KE(t,e){return e?Object.keys(t).reduce(function(n,i){return n[i]=ZE(t[i],e[i]),n},me({},t)):t}function Hc(t){return{create:function(){return{get:function(e){return t[e]},set:function(e,n){t[e]=n}}}}}function QE(t){return t===void 0&&(t={number:{},dateTime:{},pluralRules:{}}),{getNumberFormat:ui(function(){for(var e,n=[],i=0;i<arguments.length;i++)n[i]=arguments[i];return new((e=Intl.NumberFormat).bind.apply(e,fi([void 0],n,!1)))},{cache:Hc(t.number),strategy:ci.variadic}),getDateTimeFormat:ui(function(){for(var e,n=[],i=0;i<arguments.length;i++)n[i]=arguments[i];return new((e=Intl.DateTimeFormat).bind.apply(e,fi([void 0],n,!1)))},{cache:Hc(t.dateTime),strategy:ci.variadic}),getPluralRules:ui(function(){for(var e,n=[],i=0;i<arguments.length;i++)n[i]=arguments[i];return new((e=Intl.PluralRules).bind.apply(e,fi([void 0],n,!1)))},{cache:Hc(t.pluralRules),strategy:ci.variadic})}}var s1=function(){function t(e,n,i,r){var o=this;if(n===void 0&&(n=t.defaultLocale),this.formatterCache={number:{},dateTime:{},pluralRules:{}},this.format=function(l){var u=o.formatToParts(l);if(u.length===1)return u[0].value;var f=u.reduce(function(h,d){return!h.length||d.type!==on.literal||typeof h[h.length-1]!="string"?h.push(d.value):h[h.length-1]+=d.value,h},[]);return f.length<=1?f[0]||"":f},this.formatToParts=function(l){return Ul(o.ast,o.locales,o.formatters,o.formats,l,void 0,o.message)},this.resolvedOptions=function(){var l;return{locale:((l=o.resolvedLocale)===null||l===void 0?void 0:l.toString())||Intl.NumberFormat.supportedLocalesOf(o.locales)[0]}},this.getAst=function(){return o.ast},this.locales=n,this.resolvedLocale=t.resolveLocale(n),typeof e=="string"){if(this.message=e,!t.__parse)throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");var s=r||{};s.formatters;var a=rs(s,["formatters"]);this.ast=t.__parse(e,me(me({},a),{locale:this.resolvedLocale}))}else this.ast=e;if(!Array.isArray(this.ast))throw new TypeError("A message must be provided as a String or AST.");this.formats=KE(t.formats,i),this.formatters=r&&r.formatters||QE(this.formatterCache)}return Object.defineProperty(t,"defaultLocale",{get:function(){return t.memoizedDefaultLocale||(t.memoizedDefaultLocale=new Intl.NumberFormat().resolvedOptions().locale),t.memoizedDefaultLocale},enumerable:!1,configurable:!0}),t.memoizedDefaultLocale=null,t.resolveLocale=function(e){if(!(typeof Intl.Locale>"u")){var n=Intl.NumberFormat.supportedLocalesOf(e);return n.length>0?new Intl.Locale(n[0]):new Intl.Locale(typeof e=="string"?e:e[0])}},t.__parse=HE,t.formats={number:{integer:{maximumFractionDigits:0},currency:{style:"currency"},percent:{style:"percent"}},date:{short:{month:"numeric",day:"numeric",year:"2-digit"},medium:{month:"short",day:"numeric",year:"numeric"},long:{month:"long",day:"numeric",year:"numeric"},full:{weekday:"long",month:"long",day:"numeric",year:"numeric"}},time:{short:{hour:"numeric",minute:"numeric"},medium:{hour:"numeric",minute:"numeric",second:"numeric"},long:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"},full:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"}}},t}(),Jr;(function(t){t.FORMAT_ERROR="FORMAT_ERROR",t.UNSUPPORTED_FORMATTER="UNSUPPORTED_FORMATTER",t.INVALID_CONFIG="INVALID_CONFIG",t.MISSING_DATA="MISSING_DATA",t.MISSING_TRANSLATION="MISSING_TRANSLATION"})(Jr||(Jr={}));var wa=function(t){Vn(e,t);function e(n,i,r){var o=this,s=r?r instanceof Error?r:new Error(String(r)):void 0;return o=t.call(this,"[@formatjs/intl Error ".concat(n,"] ").concat(i,`
`).concat(s?`
`.concat(s.message,`
`).concat(s.stack):""))||this,o.code=n,typeof Error.captureStackTrace=="function"&&Error.captureStackTrace(o,e),o}return e}(Error),JE=function(t){Vn(e,t);function e(n,i){return t.call(this,Jr.UNSUPPORTED_FORMATTER,n,i)||this}return e}(wa),eM=function(t){Vn(e,t);function e(n,i){return t.call(this,Jr.INVALID_CONFIG,n,i)||this}return e}(wa),Nm=function(t){Vn(e,t);function e(n,i){return t.call(this,Jr.MISSING_DATA,n,i)||this}return e}(wa),Wn=function(t){Vn(e,t);function e(n,i,r){var o=t.call(this,Jr.FORMAT_ERROR,"".concat(n,`
Locale: `).concat(i,`
`),r)||this;return o.locale=i,o}return e}(wa),zc=function(t){Vn(e,t);function e(n,i,r,o){var s=t.call(this,"".concat(n,`
MessageID: `).concat(r==null?void 0:r.id,`
Default Message: `).concat(r==null?void 0:r.defaultMessage,`
Description: `).concat(r==null?void 0:r.description,`
`),i,o)||this;return s.descriptor=r,s.locale=i,s}return e}(Wn),tM=function(t){Vn(e,t);function e(n,i){var r=t.call(this,Jr.MISSING_TRANSLATION,'Missing message: "'.concat(n.id,'" for locale "').concat(i,'", using ').concat(n.defaultMessage?"default message (".concat(typeof n.defaultMessage=="string"?n.defaultMessage:n.defaultMessage.map(function(o){var s;return(s=o.value)!==null&&s!==void 0?s:JSON.stringify(o)}).join(),")"):"id"," as fallback."))||this;return r.descriptor=n,r}return e}(wa);function so(t,e,n){return n===void 0&&(n={}),e.reduce(function(i,r){return r in t?i[r]=t[r]:r in n&&(i[r]=n[r]),i},{})}var nM=function(t){},iM=function(t){},a1={formats:{},messages:{},timeZone:void 0,defaultLocale:"en",defaultFormats:{},fallbackOnEmptyString:!0,onError:nM,onWarn:iM};function l1(){return{dateTime:{},number:{},message:{},relativeTime:{},pluralRules:{},list:{},displayNames:{}}}function wr(t){return{create:function(){return{get:function(e){return t[e]},set:function(e,n){t[e]=n}}}}}function rM(t){t===void 0&&(t=l1());var e=Intl.RelativeTimeFormat,n=Intl.ListFormat,i=Intl.DisplayNames,r=ui(function(){for(var a,l=[],u=0;u<arguments.length;u++)l[u]=arguments[u];return new((a=Intl.DateTimeFormat).bind.apply(a,fi([void 0],l,!1)))},{cache:wr(t.dateTime),strategy:ci.variadic}),o=ui(function(){for(var a,l=[],u=0;u<arguments.length;u++)l[u]=arguments[u];return new((a=Intl.NumberFormat).bind.apply(a,fi([void 0],l,!1)))},{cache:wr(t.number),strategy:ci.variadic}),s=ui(function(){for(var a,l=[],u=0;u<arguments.length;u++)l[u]=arguments[u];return new((a=Intl.PluralRules).bind.apply(a,fi([void 0],l,!1)))},{cache:wr(t.pluralRules),strategy:ci.variadic});return{getDateTimeFormat:r,getNumberFormat:o,getMessageFormat:ui(function(a,l,u,f){return new s1(a,l,u,me({formatters:{getNumberFormat:o,getDateTimeFormat:r,getPluralRules:s}},f||{}))},{cache:wr(t.message),strategy:ci.variadic}),getRelativeTimeFormat:ui(function(){for(var a=[],l=0;l<arguments.length;l++)a[l]=arguments[l];return new(e.bind.apply(e,fi([void 0],a,!1)))},{cache:wr(t.relativeTime),strategy:ci.variadic}),getPluralRules:s,getListFormat:ui(function(){for(var a=[],l=0;l<arguments.length;l++)a[l]=arguments[l];return new(n.bind.apply(n,fi([void 0],a,!1)))},{cache:wr(t.list),strategy:ci.variadic}),getDisplayNames:ui(function(){for(var a=[],l=0;l<arguments.length;l++)a[l]=arguments[l];return new(i.bind.apply(i,fi([void 0],a,!1)))},{cache:wr(t.displayNames),strategy:ci.variadic})}}function Vh(t,e,n,i){var r=t&&t[e],o;if(r&&(o=r[n]),o)return o;i(new JE("No ".concat(e," format named: ").concat(n)))}function Za(t,e){return Object.keys(t).reduce(function(n,i){return n[i]=me({timeZone:e},t[i]),n},{})}function Dm(t,e){var n=Object.keys(me(me({},t),e));return n.reduce(function(i,r){return i[r]=me(me({},t[r]||{}),e[r]||{}),i},{})}function Im(t,e){if(!e)return t;var n=s1.formats;return me(me(me({},n),t),{date:Dm(Za(n.date,e),Za(t.date||{},e)),time:Dm(Za(n.time,e),Za(t.time||{},e))})}var Md=function(t,e,n,i,r){var o=t.locale,s=t.formats,a=t.messages,l=t.defaultLocale,u=t.defaultFormats,f=t.fallbackOnEmptyString,h=t.onError,d=t.timeZone,p=t.defaultRichTextElements;n===void 0&&(n={id:""});var _=n.id,x=n.defaultMessage;G_(!!_,"[@formatjs/intl] An `id` must be provided to format a message. You can either:\n1. Configure your build toolchain with [babel-plugin-formatjs](https://formatjs.io/docs/tooling/babel-plugin)\nor [@formatjs/ts-transformer](https://formatjs.io/docs/tooling/ts-transformer) OR\n2. Configure your `eslint` config to include [eslint-plugin-formatjs](https://formatjs.io/docs/tooling/linter#enforce-id)\nto autofix this issue");var g=String(_),c=a&&Object.prototype.hasOwnProperty.call(a,g)&&a[g];if(Array.isArray(c)&&c.length===1&&c[0].type===ft.literal)return c[0].value;if(!i&&c&&typeof c=="string"&&!p)return c.replace(/'\{(.*?)\}'/gi,"{$1}");if(i=me(me({},p),i||{}),s=Im(s,d),u=Im(u,d),!c){if(f===!1&&c==="")return c;if((!x||o&&o.toLowerCase()!==l.toLowerCase())&&h(new tM(n,o)),x)try{var v=e.getMessageFormat(x,l,u,r);return v.format(i)}catch(m){return h(new zc('Error formatting default message for: "'.concat(g,'", rendering default message verbatim'),o,n,m)),typeof x=="string"?x:g}return g}try{var v=e.getMessageFormat(c,o,s,me({formatters:e},r||{}));return v.format(i)}catch(m){h(new zc('Error formatting message: "'.concat(g,'", using ').concat(x?"default message":"id"," as fallback."),o,n,m))}if(x)try{var v=e.getMessageFormat(x,l,u,r);return v.format(i)}catch(m){h(new zc('Error formatting the default message for: "'.concat(g,'", rendering message verbatim'),o,n,m))}return typeof c=="string"?c:typeof x=="string"?x:g},u1=["formatMatcher","timeZone","hour12","weekday","era","year","month","day","hour","minute","second","timeZoneName","hourCycle","dateStyle","timeStyle","calendar","numberingSystem","fractionalSecondDigits"];function qu(t,e,n,i){var r=t.locale,o=t.formats,s=t.onError,a=t.timeZone;i===void 0&&(i={});var l=i.format,u=me(me({},a&&{timeZone:a}),l&&Vh(o,e,l,s)),f=so(i,u1,u);return e==="time"&&!f.hour&&!f.minute&&!f.second&&!f.timeStyle&&!f.dateStyle&&(f=me(me({},f),{hour:"numeric",minute:"numeric"})),n(r,f)}function oM(t,e){for(var n=[],i=2;i<arguments.length;i++)n[i-2]=arguments[i];var r=n[0],o=n[1],s=o===void 0?{}:o,a=typeof r=="string"?new Date(r||0):r;try{return qu(t,"date",e,s).format(a)}catch(l){t.onError(new Wn("Error formatting date.",t.locale,l))}return String(a)}function sM(t,e){for(var n=[],i=2;i<arguments.length;i++)n[i-2]=arguments[i];var r=n[0],o=n[1],s=o===void 0?{}:o,a=typeof r=="string"?new Date(r||0):r;try{return qu(t,"time",e,s).format(a)}catch(l){t.onError(new Wn("Error formatting time.",t.locale,l))}return String(a)}function aM(t,e){for(var n=[],i=2;i<arguments.length;i++)n[i-2]=arguments[i];var r=n[0],o=n[1],s=n[2],a=s===void 0?{}:s,l=t.timeZone,u=t.locale,f=t.onError,h=so(a,u1,l?{timeZone:l}:{});try{return e(u,h).formatRange(r,o)}catch(d){f(new Wn("Error formatting date time range.",t.locale,d))}return String(r)}function lM(t,e){for(var n=[],i=2;i<arguments.length;i++)n[i-2]=arguments[i];var r=n[0],o=n[1],s=o===void 0?{}:o,a=typeof r=="string"?new Date(r||0):r;try{return qu(t,"date",e,s).formatToParts(a)}catch(l){t.onError(new Wn("Error formatting date.",t.locale,l))}return[]}function uM(t,e){for(var n=[],i=2;i<arguments.length;i++)n[i-2]=arguments[i];var r=n[0],o=n[1],s=o===void 0?{}:o,a=typeof r=="string"?new Date(r||0):r;try{return qu(t,"time",e,s).formatToParts(a)}catch(l){t.onError(new Wn("Error formatting time.",t.locale,l))}return[]}var cM=["style","type","fallback","languageDisplay"];function fM(t,e,n,i){var r=t.locale,o=t.onError,s=Intl.DisplayNames;s||o(new Er(`Intl.DisplayNames is not available in this environment.
Try polyfilling it using "@formatjs/intl-displaynames"
`,xi.MISSING_INTL_API));var a=so(i,cM);try{return e(r,a).of(n)}catch(l){o(new Wn("Error formatting display name.",r,l))}}var dM=["type","style"],Um=Date.now();function hM(t){return"".concat(Um,"_").concat(t,"_").concat(Um)}function pM(t,e,n,i){i===void 0&&(i={});var r=c1(t,e,n,i).reduce(function(o,s){var a=s.value;return typeof a!="string"?o.push(a):typeof o[o.length-1]=="string"?o[o.length-1]+=a:o.push(a),o},[]);return r.length===1?r[0]:r.length===0?"":r}function c1(t,e,n,i){var r=t.locale,o=t.onError;i===void 0&&(i={});var s=Intl.ListFormat;s||o(new Er(`Intl.ListFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-listformat"
`,xi.MISSING_INTL_API));var a=so(i,dM);try{var l={},u=n.map(function(f,h){if(typeof f=="object"){var d=hM(h);return l[d]=f,d}return String(f)});return e(r,a).formatToParts(u).map(function(f){return f.type==="literal"?f:me(me({},f),{value:l[f.value]||f.value})})}catch(f){o(new Wn("Error formatting list.",r,f))}return n}var mM=["type"];function gM(t,e,n,i){var r=t.locale,o=t.onError;i===void 0&&(i={}),Intl.PluralRules||o(new Er(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`,xi.MISSING_INTL_API));var s=so(i,mM);try{return e(r,s).select(n)}catch(a){o(new Wn("Error formatting plural.",r,a))}return"other"}var vM=["numeric","style"];function _M(t,e,n){var i=t.locale,r=t.formats,o=t.onError;n===void 0&&(n={});var s=n.format,a=!!s&&Vh(r,"relative",s,o)||{},l=so(n,vM,a);return e(i,l)}function xM(t,e,n,i,r){r===void 0&&(r={}),i||(i="second");var o=Intl.RelativeTimeFormat;o||t.onError(new Er(`Intl.RelativeTimeFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-relativetimeformat"
`,xi.MISSING_INTL_API));try{return _M(t,e,r).format(n,i)}catch(s){t.onError(new Wn("Error formatting relative time.",t.locale,s))}return String(n)}var yM=["style","currency","currencyDisplay","unit","unitDisplay","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","compactDisplay","currencyDisplay","currencySign","notation","signDisplay","unit","unitDisplay","numberingSystem"];function f1(t,e,n){var i=t.locale,r=t.formats,o=t.onError;n===void 0&&(n={});var s=n.format,a=s&&Vh(r,"number",s,o)||{},l=so(n,yM,a);return e(i,l)}function SM(t,e,n,i){i===void 0&&(i={});try{return f1(t,e,i).format(n)}catch(r){t.onError(new Wn("Error formatting number.",t.locale,r))}return String(n)}function EM(t,e,n,i){i===void 0&&(i={});try{return f1(t,e,i).formatToParts(n)}catch(r){t.onError(new Wn("Error formatting number.",t.locale,r))}return[]}function MM(t){var e=t?t[Object.keys(t)[0]]:void 0;return typeof e=="string"}function TM(t){t.onWarn&&t.defaultRichTextElements&&MM(t.messages||{})&&t.onWarn(`[@formatjs/intl] "defaultRichTextElements" was specified but "message" was not pre-compiled. 
Please consider using "@formatjs/cli" to pre-compile your messages for performance.
For more details see https://formatjs.io/docs/getting-started/message-distribution`)}function wM(t,e){var n=rM(e),i=me(me({},a1),t),r=i.locale,o=i.defaultLocale,s=i.onError;return r?!Intl.NumberFormat.supportedLocalesOf(r).length&&s?s(new Nm('Missing locale data for locale: "'.concat(r,'" in Intl.NumberFormat. Using default locale: "').concat(o,'" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details'))):!Intl.DateTimeFormat.supportedLocalesOf(r).length&&s&&s(new Nm('Missing locale data for locale: "'.concat(r,'" in Intl.DateTimeFormat. Using default locale: "').concat(o,'" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details'))):(s&&s(new eM('"locale" was not configured, using "'.concat(o,'" as fallback. See https://formatjs.io/docs/react-intl/api#intlshape for more details'))),i.locale=i.defaultLocale||"en"),TM(i),me(me({},i),{formatters:n,formatNumber:SM.bind(null,i,n.getNumberFormat),formatNumberToParts:EM.bind(null,i,n.getNumberFormat),formatRelativeTime:xM.bind(null,i,n.getRelativeTimeFormat),formatDate:oM.bind(null,i,n.getDateTimeFormat),formatDateToParts:lM.bind(null,i,n.getDateTimeFormat),formatTime:sM.bind(null,i,n.getDateTimeFormat),formatDateTimeRange:aM.bind(null,i,n.getDateTimeFormat),formatTimeToParts:uM.bind(null,i,n.getDateTimeFormat),formatPlural:gM.bind(null,i,n.getPluralRules),formatMessage:Md.bind(null,i,n),$t:Md.bind(null,i,n),formatList:pM.bind(null,i,n.getListFormat),formatListToParts:c1.bind(null,i,n.getListFormat),formatDisplayName:fM.bind(null,i,n.getDisplayNames)})}function d1(t){G_(t,"[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry.")}var h1=me(me({},a1),{textComponent:Ye.Fragment});function AM(t){return function(e){return t(Ye.Children.toArray(e))}}function Td(t,e){if(t===e)return!0;if(!t||!e)return!1;var n=Object.keys(t),i=Object.keys(e),r=n.length;if(i.length!==r)return!1;for(var o=0;o<r;o++){var s=n[o];if(t[s]!==e[s]||!Object.prototype.hasOwnProperty.call(e,s))return!1}return!0}var Wh=typeof window<"u"&&!window.__REACT_INTL_BYPASS_GLOBAL_CONTEXT__?window.__REACT_INTL_CONTEXT__||(window.__REACT_INTL_CONTEXT__=Ye.createContext(null)):Ye.createContext(null);Wh.Consumer;var CM=Wh.Provider,RM=CM,bM=Wh;function Zu(){var t=Ye.useContext(bM);return d1(t),t}var wd;(function(t){t.formatDate="FormattedDate",t.formatTime="FormattedTime",t.formatNumber="FormattedNumber",t.formatList="FormattedList",t.formatDisplayName="FormattedDisplayName"})(wd||(wd={}));var Ad;(function(t){t.formatDate="FormattedDateParts",t.formatTime="FormattedTimeParts",t.formatNumber="FormattedNumberParts",t.formatList="FormattedListParts"})(Ad||(Ad={}));function p1(t){var e=function(n){var i=Zu(),r=n.value,o=n.children,s=rs(n,["value","children"]),a=typeof r=="string"?new Date(r||0):r,l=t==="formatDate"?i.formatDateToParts(a,s):i.formatTimeToParts(a,s);return o(l)};return e.displayName=Ad[t],e}function Aa(t){var e=function(n){var i=Zu(),r=n.value,o=n.children,s=rs(n,["value","children"]),a=i[t](r,s);if(typeof o=="function")return o(a);var l=i.textComponent||Ye.Fragment;return Ye.createElement(l,null,a)};return e.displayName=wd[t],e}function m1(t){return t&&Object.keys(t).reduce(function(e,n){var i=t[n];return e[n]=o1(i)?AM(i):i,e},{})}var Fm=function(t,e,n,i){for(var r=[],o=4;o<arguments.length;o++)r[o-4]=arguments[o];var s=m1(i),a=Md.apply(void 0,fi([t,e,n,s],r,!1));return Array.isArray(a)?Ye.Children.toArray(a):a},Om=function(t,e){var n=t.defaultRichTextElements,i=rs(t,["defaultRichTextElements"]),r=m1(n),o=wM(me(me(me({},h1),i),{defaultRichTextElements:r}),e),s={locale:o.locale,timeZone:o.timeZone,fallbackOnEmptyString:o.fallbackOnEmptyString,formats:o.formats,defaultLocale:o.defaultLocale,defaultFormats:o.defaultFormats,messages:o.messages,onError:o.onError,defaultRichTextElements:r};return me(me({},o),{formatMessage:Fm.bind(null,s,o.formatters),$t:Fm.bind(null,s,o.formatters)})};function Gc(t){return{locale:t.locale,timeZone:t.timeZone,fallbackOnEmptyString:t.fallbackOnEmptyString,formats:t.formats,textComponent:t.textComponent,messages:t.messages,defaultLocale:t.defaultLocale,defaultFormats:t.defaultFormats,onError:t.onError,onWarn:t.onWarn,wrapRichTextChunksInFragment:t.wrapRichTextChunksInFragment,defaultRichTextElements:t.defaultRichTextElements}}var PM=function(t){Vn(e,t);function e(){var n=t!==null&&t.apply(this,arguments)||this;return n.cache=l1(),n.state={cache:n.cache,intl:Om(Gc(n.props),n.cache),prevConfig:Gc(n.props)},n}return e.getDerivedStateFromProps=function(n,i){var r=i.prevConfig,o=i.cache,s=Gc(n);return Td(r,s)?null:{intl:Om(s,o),prevConfig:s}},e.prototype.render=function(){return d1(this.state.intl),Ye.createElement(RM,{value:this.state.intl},this.props.children)},e.displayName="IntlProvider",e.defaultProps=h1,e}(Ye.PureComponent);const LM=PM;function NM(t,e){var n=t.values,i=rs(t,["values"]),r=e.values,o=rs(e,["values"]);return Td(r,n)&&Td(i,o)}function g1(t){var e=Zu(),n=e.formatMessage,i=e.textComponent,r=i===void 0?Ye.Fragment:i,o=t.id,s=t.description,a=t.defaultMessage,l=t.values,u=t.children,f=t.tagName,h=f===void 0?r:f,d=t.ignoreTag,p={id:o,description:s,defaultMessage:a},_=n(p,l,{ignoreTag:d});return typeof u=="function"?u(Array.isArray(_)?_:[_]):h?Ye.createElement(h,null,Ye.Children.toArray(_)):Ye.createElement(Ye.Fragment,null,_)}g1.displayName="FormattedMessage";var v1=Ye.memo(g1,NM);v1.displayName="MemoizedFormattedMessage";const Bm=v1;Aa("formatDate");Aa("formatTime");Aa("formatNumber");Aa("formatList");Aa("formatDisplayName");p1("formatDate");p1("formatTime");/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Xh="160",DM=0,km=1,IM=2,_1=1,UM=2,Ai=3,_r=0,vn=1,Pi=2,dr=0,qo=1,Hm=2,zm=3,Gm=4,FM=5,Ur=100,OM=101,BM=102,Vm=103,Wm=104,kM=200,HM=201,zM=202,GM=203,Cd=204,Rd=205,VM=206,WM=207,XM=208,$M=209,jM=210,YM=211,qM=212,ZM=213,KM=214,QM=0,JM=1,e2=2,du=3,t2=4,n2=5,i2=6,r2=7,x1=0,o2=1,s2=2,hr=0,a2=1,l2=2,u2=3,c2=4,f2=5,d2=6,y1=300,ss=301,as=302,bd=303,Pd=304,Ku=306,Ld=1e3,Jn=1001,Nd=1002,an=1003,Xm=1004,Vc=1005,Un=1006,h2=1007,ma=1008,pr=1009,p2=1010,m2=1011,$h=1012,S1=1013,nr=1014,ir=1015,ga=1016,E1=1017,M1=1018,Vr=1020,g2=1021,ei=1023,v2=1024,_2=1025,Wr=1026,ls=1027,x2=1028,T1=1029,y2=1030,w1=1031,A1=1033,Wc=33776,Xc=33777,$c=33778,jc=33779,$m=35840,jm=35841,Ym=35842,qm=35843,C1=36196,Zm=37492,Km=37496,Qm=37808,Jm=37809,eg=37810,tg=37811,ng=37812,ig=37813,rg=37814,og=37815,sg=37816,ag=37817,lg=37818,ug=37819,cg=37820,fg=37821,Yc=36492,dg=36494,hg=36495,S2=36283,pg=36284,mg=36285,gg=36286,R1=3e3,Xr=3001,E2=3200,M2=3201,T2=0,w2=1,On="",kt="srgb",ki="srgb-linear",jh="display-p3",Qu="display-p3-linear",hu="linear",ct="srgb",pu="rec709",mu="p3",lo=7680,vg=519,A2=512,C2=513,R2=514,b1=515,b2=516,P2=517,L2=518,N2=519,_g=35044,xg="300 es",Dd=1035,Di=2e3,gu=2001;class vs{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const o=r.indexOf(n);o!==-1&&r.splice(o,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let o=0,s=r.length;o<s;o++)r[o].call(this,e);e.target=null}}}const jt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let yg=1234567;const Ys=Math.PI/180,va=180/Math.PI;function _s(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(jt[t&255]+jt[t>>8&255]+jt[t>>16&255]+jt[t>>24&255]+"-"+jt[e&255]+jt[e>>8&255]+"-"+jt[e>>16&15|64]+jt[e>>24&255]+"-"+jt[n&63|128]+jt[n>>8&255]+"-"+jt[n>>16&255]+jt[n>>24&255]+jt[i&255]+jt[i>>8&255]+jt[i>>16&255]+jt[i>>24&255]).toLowerCase()}function ln(t,e,n){return Math.max(e,Math.min(n,t))}function Yh(t,e){return(t%e+e)%e}function D2(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function I2(t,e,n){return t!==e?(n-t)/(e-t):0}function qs(t,e,n){return(1-n)*t+n*e}function U2(t,e,n,i){return qs(t,e,1-Math.exp(-n*i))}function F2(t,e=1){return e-Math.abs(Yh(t,e*2)-e)}function O2(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function B2(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function k2(t,e){return t+Math.floor(Math.random()*(e-t+1))}function H2(t,e){return t+Math.random()*(e-t)}function z2(t){return t*(.5-Math.random())}function G2(t){t!==void 0&&(yg=t);let e=yg+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function V2(t){return t*Ys}function W2(t){return t*va}function Id(t){return(t&t-1)===0&&t!==0}function X2(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function vu(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function $2(t,e,n,i,r){const o=Math.cos,s=Math.sin,a=o(n/2),l=s(n/2),u=o((e+i)/2),f=s((e+i)/2),h=o((e-i)/2),d=s((e-i)/2),p=o((i-e)/2),_=s((i-e)/2);switch(r){case"XYX":t.set(a*f,l*h,l*d,a*u);break;case"YZY":t.set(l*d,a*f,l*h,a*u);break;case"ZXZ":t.set(l*h,l*d,a*f,a*u);break;case"XZX":t.set(a*f,l*_,l*p,a*u);break;case"YXY":t.set(l*p,a*f,l*_,a*u);break;case"ZYZ":t.set(l*_,l*p,a*f,a*u);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Ao(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function nn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const Nr={DEG2RAD:Ys,RAD2DEG:va,generateUUID:_s,clamp:ln,euclideanModulo:Yh,mapLinear:D2,inverseLerp:I2,lerp:qs,damp:U2,pingpong:F2,smoothstep:O2,smootherstep:B2,randInt:k2,randFloat:H2,randFloatSpread:z2,seededRandom:G2,degToRad:V2,radToDeg:W2,isPowerOfTwo:Id,ceilPowerOfTwo:X2,floorPowerOfTwo:vu,setQuaternionFromProperEuler:$2,normalize:nn,denormalize:Ao};class Ze{constructor(e=0,n=0){Ze.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(ln(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),o=this.x-e.x,s=this.y-e.y;return this.x=o*i-s*r+e.x,this.y=o*r+s*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ve{constructor(e,n,i,r,o,s,a,l,u){Ve.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,o,s,a,l,u)}set(e,n,i,r,o,s,a,l,u){const f=this.elements;return f[0]=e,f[1]=r,f[2]=a,f[3]=n,f[4]=o,f[5]=l,f[6]=i,f[7]=s,f[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,o=this.elements,s=i[0],a=i[3],l=i[6],u=i[1],f=i[4],h=i[7],d=i[2],p=i[5],_=i[8],x=r[0],g=r[3],c=r[6],v=r[1],m=r[4],y=r[7],R=r[2],A=r[5],M=r[8];return o[0]=s*x+a*v+l*R,o[3]=s*g+a*m+l*A,o[6]=s*c+a*y+l*M,o[1]=u*x+f*v+h*R,o[4]=u*g+f*m+h*A,o[7]=u*c+f*y+h*M,o[2]=d*x+p*v+_*R,o[5]=d*g+p*m+_*A,o[8]=d*c+p*y+_*M,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],u=e[7],f=e[8];return n*s*f-n*a*u-i*o*f+i*a*l+r*o*u-r*s*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],u=e[7],f=e[8],h=f*s-a*u,d=a*l-f*o,p=u*o-s*l,_=n*h+i*d+r*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/_;return e[0]=h*x,e[1]=(r*u-f*i)*x,e[2]=(a*i-r*s)*x,e[3]=d*x,e[4]=(f*n-r*l)*x,e[5]=(r*o-a*n)*x,e[6]=p*x,e[7]=(i*l-u*n)*x,e[8]=(s*n-i*o)*x,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,o,s,a){const l=Math.cos(o),u=Math.sin(o);return this.set(i*l,i*u,-i*(l*s+u*a)+s+e,-r*u,r*l,-r*(-u*s+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(qc.makeScale(e,n)),this}rotate(e){return this.premultiply(qc.makeRotation(-e)),this}translate(e,n){return this.premultiply(qc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const qc=new Ve;function P1(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function _u(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function j2(){const t=_u("canvas");return t.style.display="block",t}const Sg={};function Zs(t){t in Sg||(Sg[t]=!0,console.warn(t))}const Eg=new Ve().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Mg=new Ve().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ka={[ki]:{transfer:hu,primaries:pu,toReference:t=>t,fromReference:t=>t},[kt]:{transfer:ct,primaries:pu,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[Qu]:{transfer:hu,primaries:mu,toReference:t=>t.applyMatrix3(Mg),fromReference:t=>t.applyMatrix3(Eg)},[jh]:{transfer:ct,primaries:mu,toReference:t=>t.convertSRGBToLinear().applyMatrix3(Mg),fromReference:t=>t.applyMatrix3(Eg).convertLinearToSRGB()}},Y2=new Set([ki,Qu]),nt={enabled:!0,_workingColorSpace:ki,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!Y2.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=Ka[e].toReference,r=Ka[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return Ka[t].primaries},getTransfer:function(t){return t===On?hu:Ka[t].transfer}};function Zo(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Zc(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let uo;class L1{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{uo===void 0&&(uo=_u("canvas")),uo.width=e.width,uo.height=e.height;const i=uo.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=uo}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=_u("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),o=r.data;for(let s=0;s<o.length;s++)o[s]=Zo(o[s]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Zo(n[i]/255)*255):n[i]=Zo(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let q2=0;class N1{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:q2++}),this.uuid=_s(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let o;if(Array.isArray(r)){o=[];for(let s=0,a=r.length;s<a;s++)r[s].isDataTexture?o.push(Kc(r[s].image)):o.push(Kc(r[s]))}else o=Kc(r);i.url=o}return n||(e.images[this.uuid]=i),i}}function Kc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?L1.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Z2=0;class wn extends vs{constructor(e=wn.DEFAULT_IMAGE,n=wn.DEFAULT_MAPPING,i=Jn,r=Jn,o=Un,s=ma,a=ei,l=pr,u=wn.DEFAULT_ANISOTROPY,f=On){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Z2++}),this.uuid=_s(),this.name="",this.source=new N1(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=o,this.minFilter=s,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ze(0,0),this.repeat=new Ze(1,1),this.center=new Ze(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ve,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof f=="string"?this.colorSpace=f:(Zs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=f===Xr?kt:On),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==y1)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ld:e.x=e.x-Math.floor(e.x);break;case Jn:e.x=e.x<0?0:1;break;case Nd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ld:e.y=e.y-Math.floor(e.y);break;case Jn:e.y=e.y<0?0:1;break;case Nd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Zs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===kt?Xr:R1}set encoding(e){Zs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Xr?kt:On}}wn.DEFAULT_IMAGE=null;wn.DEFAULT_MAPPING=y1;wn.DEFAULT_ANISOTROPY=1;class Ht{constructor(e=0,n=0,i=0,r=1){Ht.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,o=this.w,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r+s[12]*o,this.y=s[1]*n+s[5]*i+s[9]*r+s[13]*o,this.z=s[2]*n+s[6]*i+s[10]*r+s[14]*o,this.w=s[3]*n+s[7]*i+s[11]*r+s[15]*o,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,o;const l=e.elements,u=l[0],f=l[4],h=l[8],d=l[1],p=l[5],_=l[9],x=l[2],g=l[6],c=l[10];if(Math.abs(f-d)<.01&&Math.abs(h-x)<.01&&Math.abs(_-g)<.01){if(Math.abs(f+d)<.1&&Math.abs(h+x)<.1&&Math.abs(_+g)<.1&&Math.abs(u+p+c-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const m=(u+1)/2,y=(p+1)/2,R=(c+1)/2,A=(f+d)/4,M=(h+x)/4,N=(_+g)/4;return m>y&&m>R?m<.01?(i=0,r=.707106781,o=.707106781):(i=Math.sqrt(m),r=A/i,o=M/i):y>R?y<.01?(i=.707106781,r=0,o=.707106781):(r=Math.sqrt(y),i=A/r,o=N/r):R<.01?(i=.707106781,r=.707106781,o=0):(o=Math.sqrt(R),i=M/o,r=N/o),this.set(i,r,o,n),this}let v=Math.sqrt((g-_)*(g-_)+(h-x)*(h-x)+(d-f)*(d-f));return Math.abs(v)<.001&&(v=1),this.x=(g-_)/v,this.y=(h-x)/v,this.z=(d-f)/v,this.w=Math.acos((u+p+c-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class K2 extends vs{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Ht(0,0,e,n),this.scissorTest=!1,this.viewport=new Ht(0,0,e,n);const r={width:e,height:n,depth:1};i.encoding!==void 0&&(Zs("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Xr?kt:On),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Un,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new wn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new N1(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class eo extends K2{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class D1 extends wn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=an,this.minFilter=an,this.wrapR=Jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Q2 extends wn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=an,this.minFilter=an,this.wrapR=Jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ca{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,o,s,a){let l=i[r+0],u=i[r+1],f=i[r+2],h=i[r+3];const d=o[s+0],p=o[s+1],_=o[s+2],x=o[s+3];if(a===0){e[n+0]=l,e[n+1]=u,e[n+2]=f,e[n+3]=h;return}if(a===1){e[n+0]=d,e[n+1]=p,e[n+2]=_,e[n+3]=x;return}if(h!==x||l!==d||u!==p||f!==_){let g=1-a;const c=l*d+u*p+f*_+h*x,v=c>=0?1:-1,m=1-c*c;if(m>Number.EPSILON){const R=Math.sqrt(m),A=Math.atan2(R,c*v);g=Math.sin(g*A)/R,a=Math.sin(a*A)/R}const y=a*v;if(l=l*g+d*y,u=u*g+p*y,f=f*g+_*y,h=h*g+x*y,g===1-a){const R=1/Math.sqrt(l*l+u*u+f*f+h*h);l*=R,u*=R,f*=R,h*=R}}e[n]=l,e[n+1]=u,e[n+2]=f,e[n+3]=h}static multiplyQuaternionsFlat(e,n,i,r,o,s){const a=i[r],l=i[r+1],u=i[r+2],f=i[r+3],h=o[s],d=o[s+1],p=o[s+2],_=o[s+3];return e[n]=a*_+f*h+l*p-u*d,e[n+1]=l*_+f*d+u*h-a*p,e[n+2]=u*_+f*p+a*d-l*h,e[n+3]=f*_-a*h-l*d-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,o=e._z,s=e._order,a=Math.cos,l=Math.sin,u=a(i/2),f=a(r/2),h=a(o/2),d=l(i/2),p=l(r/2),_=l(o/2);switch(s){case"XYZ":this._x=d*f*h+u*p*_,this._y=u*p*h-d*f*_,this._z=u*f*_+d*p*h,this._w=u*f*h-d*p*_;break;case"YXZ":this._x=d*f*h+u*p*_,this._y=u*p*h-d*f*_,this._z=u*f*_-d*p*h,this._w=u*f*h+d*p*_;break;case"ZXY":this._x=d*f*h-u*p*_,this._y=u*p*h+d*f*_,this._z=u*f*_+d*p*h,this._w=u*f*h-d*p*_;break;case"ZYX":this._x=d*f*h-u*p*_,this._y=u*p*h+d*f*_,this._z=u*f*_-d*p*h,this._w=u*f*h+d*p*_;break;case"YZX":this._x=d*f*h+u*p*_,this._y=u*p*h+d*f*_,this._z=u*f*_-d*p*h,this._w=u*f*h-d*p*_;break;case"XZY":this._x=d*f*h-u*p*_,this._y=u*p*h-d*f*_,this._z=u*f*_+d*p*h,this._w=u*f*h+d*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],o=n[8],s=n[1],a=n[5],l=n[9],u=n[2],f=n[6],h=n[10],d=i+a+h;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(f-l)*p,this._y=(o-u)*p,this._z=(s-r)*p}else if(i>a&&i>h){const p=2*Math.sqrt(1+i-a-h);this._w=(f-l)/p,this._x=.25*p,this._y=(r+s)/p,this._z=(o+u)/p}else if(a>h){const p=2*Math.sqrt(1+a-i-h);this._w=(o-u)/p,this._x=(r+s)/p,this._y=.25*p,this._z=(l+f)/p}else{const p=2*Math.sqrt(1+h-i-a);this._w=(s-r)/p,this._x=(o+u)/p,this._y=(l+f)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ln(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,o=e._z,s=e._w,a=n._x,l=n._y,u=n._z,f=n._w;return this._x=i*f+s*a+r*u-o*l,this._y=r*f+s*l+o*a-i*u,this._z=o*f+s*u+i*l-r*a,this._w=s*f-i*a-r*l-o*u,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,o=this._z,s=this._w;let a=s*e._w+i*e._x+r*e._y+o*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=s,this._x=i,this._y=r,this._z=o,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*s+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*o+n*this._z,this.normalize(),this}const u=Math.sqrt(l),f=Math.atan2(u,a),h=Math.sin((1-n)*f)/u,d=Math.sin(n*f)/u;return this._w=s*h+this._w*d,this._x=i*h+this._x*d,this._y=r*h+this._y*d,this._z=o*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),o=2*Math.PI*Math.random();return this.set(n*Math.cos(r),i*Math.sin(o),i*Math.cos(o),n*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class B{constructor(e=0,n=0,i=0){B.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Tg.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Tg.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*n+o[3]*i+o[6]*r,this.y=o[1]*n+o[4]*i+o[7]*r,this.z=o[2]*n+o[5]*i+o[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,o=e.elements,s=1/(o[3]*n+o[7]*i+o[11]*r+o[15]);return this.x=(o[0]*n+o[4]*i+o[8]*r+o[12])*s,this.y=(o[1]*n+o[5]*i+o[9]*r+o[13])*s,this.z=(o[2]*n+o[6]*i+o[10]*r+o[14])*s,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,o=e.x,s=e.y,a=e.z,l=e.w,u=2*(s*r-a*i),f=2*(a*n-o*r),h=2*(o*i-s*n);return this.x=n+l*u+s*h-a*f,this.y=i+l*f+a*u-o*h,this.z=r+l*h+o*f-s*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r,this.y=o[1]*n+o[5]*i+o[9]*r,this.z=o[2]*n+o[6]*i+o[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,o=e.z,s=n.x,a=n.y,l=n.z;return this.x=r*l-o*a,this.y=o*s-i*l,this.z=i*a-r*s,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Qc.copy(this).projectOnVector(e),this.sub(Qc)}reflect(e){return this.sub(Qc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(ln(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Qc=new B,Tg=new Ca;class Ra{constructor(e=new B(1/0,1/0,1/0),n=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint($n.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint($n.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=$n.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const o=i.getAttribute("position");if(n===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let s=0,a=o.count;s<a;s++)e.isMesh===!0?e.getVertexPosition(s,$n):$n.fromBufferAttribute(o,s),$n.applyMatrix4(e.matrixWorld),this.expandByPoint($n);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Qa.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Qa.copy(i.boundingBox)),Qa.applyMatrix4(e.matrixWorld),this.union(Qa)}const r=e.children;for(let o=0,s=r.length;o<s;o++)this.expandByObject(r[o],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,$n),$n.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ps),Ja.subVectors(this.max,Ps),co.subVectors(e.a,Ps),fo.subVectors(e.b,Ps),ho.subVectors(e.c,Ps),Vi.subVectors(fo,co),Wi.subVectors(ho,fo),Ar.subVectors(co,ho);let n=[0,-Vi.z,Vi.y,0,-Wi.z,Wi.y,0,-Ar.z,Ar.y,Vi.z,0,-Vi.x,Wi.z,0,-Wi.x,Ar.z,0,-Ar.x,-Vi.y,Vi.x,0,-Wi.y,Wi.x,0,-Ar.y,Ar.x,0];return!Jc(n,co,fo,ho,Ja)||(n=[1,0,0,0,1,0,0,0,1],!Jc(n,co,fo,ho,Ja))?!1:(el.crossVectors(Vi,Wi),n=[el.x,el.y,el.z],Jc(n,co,fo,ho,Ja))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,$n).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize($n).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Si[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Si[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Si[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Si[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Si[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Si[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Si[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Si[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Si),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Si=[new B,new B,new B,new B,new B,new B,new B,new B],$n=new B,Qa=new Ra,co=new B,fo=new B,ho=new B,Vi=new B,Wi=new B,Ar=new B,Ps=new B,Ja=new B,el=new B,Cr=new B;function Jc(t,e,n,i,r){for(let o=0,s=t.length-3;o<=s;o+=3){Cr.fromArray(t,o);const a=r.x*Math.abs(Cr.x)+r.y*Math.abs(Cr.y)+r.z*Math.abs(Cr.z),l=e.dot(Cr),u=n.dot(Cr),f=i.dot(Cr);if(Math.max(-Math.max(l,u,f),Math.min(l,u,f))>a)return!1}return!0}const J2=new Ra,Ls=new B,ef=new B;class qh{constructor(e=new B,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):J2.setFromPoints(e).getCenter(i);let r=0;for(let o=0,s=e.length;o<s;o++)r=Math.max(r,i.distanceToSquared(e[o]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ls.subVectors(e,this.center);const n=Ls.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Ls,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ef.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ls.copy(e.center).add(ef)),this.expandByPoint(Ls.copy(e.center).sub(ef))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ei=new B,tf=new B,tl=new B,Xi=new B,nf=new B,nl=new B,rf=new B;class I1{constructor(e=new B,n=new B(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ei)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Ei.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Ei.copy(this.origin).addScaledVector(this.direction,n),Ei.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){tf.copy(e).add(n).multiplyScalar(.5),tl.copy(n).sub(e).normalize(),Xi.copy(this.origin).sub(tf);const o=e.distanceTo(n)*.5,s=-this.direction.dot(tl),a=Xi.dot(this.direction),l=-Xi.dot(tl),u=Xi.lengthSq(),f=Math.abs(1-s*s);let h,d,p,_;if(f>0)if(h=s*l-a,d=s*a-l,_=o*f,h>=0)if(d>=-_)if(d<=_){const x=1/f;h*=x,d*=x,p=h*(h+s*d+2*a)+d*(s*h+d+2*l)+u}else d=o,h=Math.max(0,-(s*d+a)),p=-h*h+d*(d+2*l)+u;else d=-o,h=Math.max(0,-(s*d+a)),p=-h*h+d*(d+2*l)+u;else d<=-_?(h=Math.max(0,-(-s*o+a)),d=h>0?-o:Math.min(Math.max(-o,-l),o),p=-h*h+d*(d+2*l)+u):d<=_?(h=0,d=Math.min(Math.max(-o,-l),o),p=d*(d+2*l)+u):(h=Math.max(0,-(s*o+a)),d=h>0?o:Math.min(Math.max(-o,-l),o),p=-h*h+d*(d+2*l)+u);else d=s>0?-o:o,h=Math.max(0,-(s*d+a)),p=-h*h+d*(d+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(tf).addScaledVector(tl,d),p}intersectSphere(e,n){Ei.subVectors(e.center,this.origin);const i=Ei.dot(this.direction),r=Ei.dot(Ei)-i*i,o=e.radius*e.radius;if(r>o)return null;const s=Math.sqrt(o-r),a=i-s,l=i+s;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,o,s,a,l;const u=1/this.direction.x,f=1/this.direction.y,h=1/this.direction.z,d=this.origin;return u>=0?(i=(e.min.x-d.x)*u,r=(e.max.x-d.x)*u):(i=(e.max.x-d.x)*u,r=(e.min.x-d.x)*u),f>=0?(o=(e.min.y-d.y)*f,s=(e.max.y-d.y)*f):(o=(e.max.y-d.y)*f,s=(e.min.y-d.y)*f),i>s||o>r||((o>i||isNaN(i))&&(i=o),(s<r||isNaN(r))&&(r=s),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Ei)!==null}intersectTriangle(e,n,i,r,o){nf.subVectors(n,e),nl.subVectors(i,e),rf.crossVectors(nf,nl);let s=this.direction.dot(rf),a;if(s>0){if(r)return null;a=1}else if(s<0)a=-1,s=-s;else return null;Xi.subVectors(this.origin,e);const l=a*this.direction.dot(nl.crossVectors(Xi,nl));if(l<0)return null;const u=a*this.direction.dot(nf.cross(Xi));if(u<0||l+u>s)return null;const f=-a*Xi.dot(rf);return f<0?null:this.at(f/s,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Gt{constructor(e,n,i,r,o,s,a,l,u,f,h,d,p,_,x,g){Gt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,o,s,a,l,u,f,h,d,p,_,x,g)}set(e,n,i,r,o,s,a,l,u,f,h,d,p,_,x,g){const c=this.elements;return c[0]=e,c[4]=n,c[8]=i,c[12]=r,c[1]=o,c[5]=s,c[9]=a,c[13]=l,c[2]=u,c[6]=f,c[10]=h,c[14]=d,c[3]=p,c[7]=_,c[11]=x,c[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Gt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/po.setFromMatrixColumn(e,0).length(),o=1/po.setFromMatrixColumn(e,1).length(),s=1/po.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*o,n[5]=i[5]*o,n[6]=i[6]*o,n[7]=0,n[8]=i[8]*s,n[9]=i[9]*s,n[10]=i[10]*s,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,o=e.z,s=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),f=Math.cos(o),h=Math.sin(o);if(e.order==="XYZ"){const d=s*f,p=s*h,_=a*f,x=a*h;n[0]=l*f,n[4]=-l*h,n[8]=u,n[1]=p+_*u,n[5]=d-x*u,n[9]=-a*l,n[2]=x-d*u,n[6]=_+p*u,n[10]=s*l}else if(e.order==="YXZ"){const d=l*f,p=l*h,_=u*f,x=u*h;n[0]=d+x*a,n[4]=_*a-p,n[8]=s*u,n[1]=s*h,n[5]=s*f,n[9]=-a,n[2]=p*a-_,n[6]=x+d*a,n[10]=s*l}else if(e.order==="ZXY"){const d=l*f,p=l*h,_=u*f,x=u*h;n[0]=d-x*a,n[4]=-s*h,n[8]=_+p*a,n[1]=p+_*a,n[5]=s*f,n[9]=x-d*a,n[2]=-s*u,n[6]=a,n[10]=s*l}else if(e.order==="ZYX"){const d=s*f,p=s*h,_=a*f,x=a*h;n[0]=l*f,n[4]=_*u-p,n[8]=d*u+x,n[1]=l*h,n[5]=x*u+d,n[9]=p*u-_,n[2]=-u,n[6]=a*l,n[10]=s*l}else if(e.order==="YZX"){const d=s*l,p=s*u,_=a*l,x=a*u;n[0]=l*f,n[4]=x-d*h,n[8]=_*h+p,n[1]=h,n[5]=s*f,n[9]=-a*f,n[2]=-u*f,n[6]=p*h+_,n[10]=d-x*h}else if(e.order==="XZY"){const d=s*l,p=s*u,_=a*l,x=a*u;n[0]=l*f,n[4]=-h,n[8]=u*f,n[1]=d*h+x,n[5]=s*f,n[9]=p*h-_,n[2]=_*h-p,n[6]=a*f,n[10]=x*h+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(eT,e,tT)}lookAt(e,n,i){const r=this.elements;return xn.subVectors(e,n),xn.lengthSq()===0&&(xn.z=1),xn.normalize(),$i.crossVectors(i,xn),$i.lengthSq()===0&&(Math.abs(i.z)===1?xn.x+=1e-4:xn.z+=1e-4,xn.normalize(),$i.crossVectors(i,xn)),$i.normalize(),il.crossVectors(xn,$i),r[0]=$i.x,r[4]=il.x,r[8]=xn.x,r[1]=$i.y,r[5]=il.y,r[9]=xn.y,r[2]=$i.z,r[6]=il.z,r[10]=xn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,o=this.elements,s=i[0],a=i[4],l=i[8],u=i[12],f=i[1],h=i[5],d=i[9],p=i[13],_=i[2],x=i[6],g=i[10],c=i[14],v=i[3],m=i[7],y=i[11],R=i[15],A=r[0],M=r[4],N=r[8],E=r[12],w=r[1],F=r[5],$=r[9],ee=r[13],P=r[2],O=r[6],X=r[10],q=r[14],L=r[3],D=r[7],G=r[11],j=r[15];return o[0]=s*A+a*w+l*P+u*L,o[4]=s*M+a*F+l*O+u*D,o[8]=s*N+a*$+l*X+u*G,o[12]=s*E+a*ee+l*q+u*j,o[1]=f*A+h*w+d*P+p*L,o[5]=f*M+h*F+d*O+p*D,o[9]=f*N+h*$+d*X+p*G,o[13]=f*E+h*ee+d*q+p*j,o[2]=_*A+x*w+g*P+c*L,o[6]=_*M+x*F+g*O+c*D,o[10]=_*N+x*$+g*X+c*G,o[14]=_*E+x*ee+g*q+c*j,o[3]=v*A+m*w+y*P+R*L,o[7]=v*M+m*F+y*O+R*D,o[11]=v*N+m*$+y*X+R*G,o[15]=v*E+m*ee+y*q+R*j,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],o=e[12],s=e[1],a=e[5],l=e[9],u=e[13],f=e[2],h=e[6],d=e[10],p=e[14],_=e[3],x=e[7],g=e[11],c=e[15];return _*(+o*l*h-r*u*h-o*a*d+i*u*d+r*a*p-i*l*p)+x*(+n*l*p-n*u*d+o*s*d-r*s*p+r*u*f-o*l*f)+g*(+n*u*h-n*a*p-o*s*h+i*s*p+o*a*f-i*u*f)+c*(-r*a*f-n*l*h+n*a*d+r*s*h-i*s*d+i*l*f)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],u=e[7],f=e[8],h=e[9],d=e[10],p=e[11],_=e[12],x=e[13],g=e[14],c=e[15],v=h*g*u-x*d*u+x*l*p-a*g*p-h*l*c+a*d*c,m=_*d*u-f*g*u-_*l*p+s*g*p+f*l*c-s*d*c,y=f*x*u-_*h*u+_*a*p-s*x*p-f*a*c+s*h*c,R=_*h*l-f*x*l-_*a*d+s*x*d+f*a*g-s*h*g,A=n*v+i*m+r*y+o*R;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const M=1/A;return e[0]=v*M,e[1]=(x*d*o-h*g*o-x*r*p+i*g*p+h*r*c-i*d*c)*M,e[2]=(a*g*o-x*l*o+x*r*u-i*g*u-a*r*c+i*l*c)*M,e[3]=(h*l*o-a*d*o-h*r*u+i*d*u+a*r*p-i*l*p)*M,e[4]=m*M,e[5]=(f*g*o-_*d*o+_*r*p-n*g*p-f*r*c+n*d*c)*M,e[6]=(_*l*o-s*g*o-_*r*u+n*g*u+s*r*c-n*l*c)*M,e[7]=(s*d*o-f*l*o+f*r*u-n*d*u-s*r*p+n*l*p)*M,e[8]=y*M,e[9]=(_*h*o-f*x*o-_*i*p+n*x*p+f*i*c-n*h*c)*M,e[10]=(s*x*o-_*a*o+_*i*u-n*x*u-s*i*c+n*a*c)*M,e[11]=(f*a*o-s*h*o-f*i*u+n*h*u+s*i*p-n*a*p)*M,e[12]=R*M,e[13]=(f*x*r-_*h*r+_*i*d-n*x*d-f*i*g+n*h*g)*M,e[14]=(_*a*r-s*x*r-_*i*l+n*x*l+s*i*g-n*a*g)*M,e[15]=(s*h*r-f*a*r+f*i*l-n*h*l-s*i*d+n*a*d)*M,this}scale(e){const n=this.elements,i=e.x,r=e.y,o=e.z;return n[0]*=i,n[4]*=r,n[8]*=o,n[1]*=i,n[5]*=r,n[9]*=o,n[2]*=i,n[6]*=r,n[10]*=o,n[3]*=i,n[7]*=r,n[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),o=1-i,s=e.x,a=e.y,l=e.z,u=o*s,f=o*a;return this.set(u*s+i,u*a-r*l,u*l+r*a,0,u*a+r*l,f*a+i,f*l-r*s,0,u*l-r*a,f*l+r*s,o*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,o,s){return this.set(1,i,o,0,e,1,s,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,o=n._x,s=n._y,a=n._z,l=n._w,u=o+o,f=s+s,h=a+a,d=o*u,p=o*f,_=o*h,x=s*f,g=s*h,c=a*h,v=l*u,m=l*f,y=l*h,R=i.x,A=i.y,M=i.z;return r[0]=(1-(x+c))*R,r[1]=(p+y)*R,r[2]=(_-m)*R,r[3]=0,r[4]=(p-y)*A,r[5]=(1-(d+c))*A,r[6]=(g+v)*A,r[7]=0,r[8]=(_+m)*M,r[9]=(g-v)*M,r[10]=(1-(d+x))*M,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let o=po.set(r[0],r[1],r[2]).length();const s=po.set(r[4],r[5],r[6]).length(),a=po.set(r[8],r[9],r[10]).length();this.determinant()<0&&(o=-o),e.x=r[12],e.y=r[13],e.z=r[14],jn.copy(this);const u=1/o,f=1/s,h=1/a;return jn.elements[0]*=u,jn.elements[1]*=u,jn.elements[2]*=u,jn.elements[4]*=f,jn.elements[5]*=f,jn.elements[6]*=f,jn.elements[8]*=h,jn.elements[9]*=h,jn.elements[10]*=h,n.setFromRotationMatrix(jn),i.x=o,i.y=s,i.z=a,this}makePerspective(e,n,i,r,o,s,a=Di){const l=this.elements,u=2*o/(n-e),f=2*o/(i-r),h=(n+e)/(n-e),d=(i+r)/(i-r);let p,_;if(a===Di)p=-(s+o)/(s-o),_=-2*s*o/(s-o);else if(a===gu)p=-s/(s-o),_=-s*o/(s-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=f,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,o,s,a=Di){const l=this.elements,u=1/(n-e),f=1/(i-r),h=1/(s-o),d=(n+e)*u,p=(i+r)*f;let _,x;if(a===Di)_=(s+o)*h,x=-2*h;else if(a===gu)_=o*h,x=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*f,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=x,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const po=new B,jn=new Gt,eT=new B(0,0,0),tT=new B(1,1,1),$i=new B,il=new B,xn=new B,wg=new Gt,Ag=new Ca;class Ju{constructor(e=0,n=0,i=0,r=Ju.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,o=r[0],s=r[4],a=r[8],l=r[1],u=r[5],f=r[9],h=r[2],d=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(ln(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-f,p),this._z=Math.atan2(-s,o)):(this._x=Math.atan2(d,u),this._z=0);break;case"YXZ":this._x=Math.asin(-ln(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-h,o),this._z=0);break;case"ZXY":this._x=Math.asin(ln(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-s,u)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-ln(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-s,u));break;case"YZX":this._z=Math.asin(ln(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,u),this._y=Math.atan2(-h,o)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-ln(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(d,u),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-f,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return wg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(wg,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Ag.setFromEuler(this),this.setFromQuaternion(Ag,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ju.DEFAULT_ORDER="XYZ";class Zh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let nT=0;const Cg=new B,mo=new Ca,Mi=new Gt,rl=new B,Ns=new B,iT=new B,rT=new Ca,Rg=new B(1,0,0),bg=new B(0,1,0),Pg=new B(0,0,1),oT={type:"added"},sT={type:"removed"};class An extends vs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:nT++}),this.uuid=_s(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=An.DEFAULT_UP.clone();const e=new B,n=new Ju,i=new Ca,r=new B(1,1,1);function o(){i.setFromEuler(n,!1)}function s(){n.setFromQuaternion(i,void 0,!1)}n._onChange(o),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Gt},normalMatrix:{value:new Ve}}),this.matrix=new Gt,this.matrixWorld=new Gt,this.matrixAutoUpdate=An.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=An.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Zh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return mo.setFromAxisAngle(e,n),this.quaternion.multiply(mo),this}rotateOnWorldAxis(e,n){return mo.setFromAxisAngle(e,n),this.quaternion.premultiply(mo),this}rotateX(e){return this.rotateOnAxis(Rg,e)}rotateY(e){return this.rotateOnAxis(bg,e)}rotateZ(e){return this.rotateOnAxis(Pg,e)}translateOnAxis(e,n){return Cg.copy(e).applyQuaternion(this.quaternion),this.position.add(Cg.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Rg,e)}translateY(e){return this.translateOnAxis(bg,e)}translateZ(e){return this.translateOnAxis(Pg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Mi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?rl.copy(e):rl.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Ns.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Mi.lookAt(Ns,rl,this.up):Mi.lookAt(rl,Ns,this.up),this.quaternion.setFromRotationMatrix(Mi),r&&(Mi.extractRotation(r.matrixWorld),mo.setFromRotationMatrix(Mi),this.quaternion.premultiply(mo.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(oT)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(sT)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Mi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Mi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Mi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const s=this.children[i].getObjectByProperty(e,n);if(s!==void 0)return s}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let o=0,s=r.length;o<s;o++)r[o].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ns,e,iT),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ns,rT,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const o=n[i];(o.matrixWorldAutoUpdate===!0||e===!0)&&o.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let o=0,s=r.length;o<s;o++){const a=r[o];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function o(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=o(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,f=l.length;u<f;u++){const h=l[u];o(e.shapes,h)}else o(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(o(e.materials,this.material[l]));r.material=a}else r.material=o(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(o(e.animations,l))}}if(n){const a=s(e.geometries),l=s(e.materials),u=s(e.textures),f=s(e.images),h=s(e.shapes),d=s(e.skeletons),p=s(e.animations),_=s(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),f.length>0&&(i.images=f),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=r,i;function s(a){const l=[];for(const u in a){const f=a[u];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}An.DEFAULT_UP=new B(0,1,0);An.DEFAULT_MATRIX_AUTO_UPDATE=!0;An.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Yn=new B,Ti=new B,of=new B,wi=new B,go=new B,vo=new B,Lg=new B,sf=new B,af=new B,lf=new B;let ol=!1;class Qn{constructor(e=new B,n=new B,i=new B){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Yn.subVectors(e,n),r.cross(Yn);const o=r.lengthSq();return o>0?r.multiplyScalar(1/Math.sqrt(o)):r.set(0,0,0)}static getBarycoord(e,n,i,r,o){Yn.subVectors(r,n),Ti.subVectors(i,n),of.subVectors(e,n);const s=Yn.dot(Yn),a=Yn.dot(Ti),l=Yn.dot(of),u=Ti.dot(Ti),f=Ti.dot(of),h=s*u-a*a;if(h===0)return o.set(0,0,0),null;const d=1/h,p=(u*l-a*f)*d,_=(s*f-a*l)*d;return o.set(1-p-_,_,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,wi)===null?!1:wi.x>=0&&wi.y>=0&&wi.x+wi.y<=1}static getUV(e,n,i,r,o,s,a,l){return ol===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ol=!0),this.getInterpolation(e,n,i,r,o,s,a,l)}static getInterpolation(e,n,i,r,o,s,a,l){return this.getBarycoord(e,n,i,r,wi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(o,wi.x),l.addScaledVector(s,wi.y),l.addScaledVector(a,wi.z),l)}static isFrontFacing(e,n,i,r){return Yn.subVectors(i,n),Ti.subVectors(e,n),Yn.cross(Ti).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Yn.subVectors(this.c,this.b),Ti.subVectors(this.a,this.b),Yn.cross(Ti).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Qn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Qn.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,r,o){return ol===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ol=!0),Qn.getInterpolation(e,this.a,this.b,this.c,n,i,r,o)}getInterpolation(e,n,i,r,o){return Qn.getInterpolation(e,this.a,this.b,this.c,n,i,r,o)}containsPoint(e){return Qn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Qn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,o=this.c;let s,a;go.subVectors(r,i),vo.subVectors(o,i),sf.subVectors(e,i);const l=go.dot(sf),u=vo.dot(sf);if(l<=0&&u<=0)return n.copy(i);af.subVectors(e,r);const f=go.dot(af),h=vo.dot(af);if(f>=0&&h<=f)return n.copy(r);const d=l*h-f*u;if(d<=0&&l>=0&&f<=0)return s=l/(l-f),n.copy(i).addScaledVector(go,s);lf.subVectors(e,o);const p=go.dot(lf),_=vo.dot(lf);if(_>=0&&p<=_)return n.copy(o);const x=p*u-l*_;if(x<=0&&u>=0&&_<=0)return a=u/(u-_),n.copy(i).addScaledVector(vo,a);const g=f*_-p*h;if(g<=0&&h-f>=0&&p-_>=0)return Lg.subVectors(o,r),a=(h-f)/(h-f+(p-_)),n.copy(r).addScaledVector(Lg,a);const c=1/(g+x+d);return s=x*c,a=d*c,n.copy(i).addScaledVector(go,s).addScaledVector(vo,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const U1={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ji={h:0,s:0,l:0},sl={h:0,s:0,l:0};function uf(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class it{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=kt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,nt.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=nt.workingColorSpace){return this.r=e,this.g=n,this.b=i,nt.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=nt.workingColorSpace){if(e=Yh(e,1),n=ln(n,0,1),i=ln(i,0,1),n===0)this.r=this.g=this.b=i;else{const o=i<=.5?i*(1+n):i+n-i*n,s=2*i-o;this.r=uf(s,o,e+1/3),this.g=uf(s,o,e),this.b=uf(s,o,e-1/3)}return nt.toWorkingColorSpace(this,r),this}setStyle(e,n=kt){function i(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const s=r[1],a=r[2];switch(s){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,n);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,n);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=r[1],s=o.length;if(s===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,n);if(s===6)return this.setHex(parseInt(o,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=kt){const i=U1[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Zo(e.r),this.g=Zo(e.g),this.b=Zo(e.b),this}copyLinearToSRGB(e){return this.r=Zc(e.r),this.g=Zc(e.g),this.b=Zc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=kt){return nt.fromWorkingColorSpace(Yt.copy(this),e),Math.round(ln(Yt.r*255,0,255))*65536+Math.round(ln(Yt.g*255,0,255))*256+Math.round(ln(Yt.b*255,0,255))}getHexString(e=kt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=nt.workingColorSpace){nt.fromWorkingColorSpace(Yt.copy(this),n);const i=Yt.r,r=Yt.g,o=Yt.b,s=Math.max(i,r,o),a=Math.min(i,r,o);let l,u;const f=(a+s)/2;if(a===s)l=0,u=0;else{const h=s-a;switch(u=f<=.5?h/(s+a):h/(2-s-a),s){case i:l=(r-o)/h+(r<o?6:0);break;case r:l=(o-i)/h+2;break;case o:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=u,e.l=f,e}getRGB(e,n=nt.workingColorSpace){return nt.fromWorkingColorSpace(Yt.copy(this),n),e.r=Yt.r,e.g=Yt.g,e.b=Yt.b,e}getStyle(e=kt){nt.fromWorkingColorSpace(Yt.copy(this),e);const n=Yt.r,i=Yt.g,r=Yt.b;return e!==kt?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(ji),this.setHSL(ji.h+e,ji.s+n,ji.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(ji),e.getHSL(sl);const i=qs(ji.h,sl.h,n),r=qs(ji.s,sl.s,n),o=qs(ji.l,sl.l,n);return this.setHSL(i,r,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,o=e.elements;return this.r=o[0]*n+o[3]*i+o[6]*r,this.g=o[1]*n+o[4]*i+o[7]*r,this.b=o[2]*n+o[5]*i+o[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Yt=new it;it.NAMES=U1;let aT=0;class ec extends vs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:aT++}),this.uuid=_s(),this.name="",this.type="Material",this.blending=qo,this.side=_r,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Cd,this.blendDst=Rd,this.blendEquation=Ur,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new it(0,0,0),this.blendAlpha=0,this.depthFunc=du,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=vg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=lo,this.stencilZFail=lo,this.stencilZPass=lo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==qo&&(i.blending=this.blending),this.side!==_r&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Cd&&(i.blendSrc=this.blendSrc),this.blendDst!==Rd&&(i.blendDst=this.blendDst),this.blendEquation!==Ur&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==du&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==vg&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==lo&&(i.stencilFail=this.stencilFail),this.stencilZFail!==lo&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==lo&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(o){const s=[];for(const a in o){const l=o[a];delete l.metadata,s.push(l)}return s}if(n){const o=r(e.textures),s=r(e.images);o.length>0&&(i.textures=o),s.length>0&&(i.images=s)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let o=0;o!==r;++o)i[o]=n[o].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class tc extends ec{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new it(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=x1,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Tt=new B,al=new Ze;class ii{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=_g,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ir,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,o=this.itemSize;r<o;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)al.fromBufferAttribute(this,n),al.applyMatrix3(e),this.setXY(n,al.x,al.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Tt.fromBufferAttribute(this,n),Tt.applyMatrix3(e),this.setXYZ(n,Tt.x,Tt.y,Tt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Tt.fromBufferAttribute(this,n),Tt.applyMatrix4(e),this.setXYZ(n,Tt.x,Tt.y,Tt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Tt.fromBufferAttribute(this,n),Tt.applyNormalMatrix(e),this.setXYZ(n,Tt.x,Tt.y,Tt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Tt.fromBufferAttribute(this,n),Tt.transformDirection(e),this.setXYZ(n,Tt.x,Tt.y,Tt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Ao(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=nn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Ao(n,this.array)),n}setX(e,n){return this.normalized&&(n=nn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Ao(n,this.array)),n}setY(e,n){return this.normalized&&(n=nn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Ao(n,this.array)),n}setZ(e,n){return this.normalized&&(n=nn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Ao(n,this.array)),n}setW(e,n){return this.normalized&&(n=nn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=nn(n,this.array),i=nn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=nn(n,this.array),i=nn(i,this.array),r=nn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,o){return e*=this.itemSize,this.normalized&&(n=nn(n,this.array),i=nn(i,this.array),r=nn(r,this.array),o=nn(o,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==_g&&(e.usage=this.usage),e}}class F1 extends ii{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class O1 extends ii{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class _i extends ii{constructor(e,n,i){super(new Float32Array(e),n,i)}}let lT=0;const Nn=new Gt,cf=new An,_o=new B,yn=new Ra,Ds=new Ra,Dt=new B;class zi extends vs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:lT++}),this.uuid=_s(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(P1(e)?O1:F1)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const o=new Ve().getNormalMatrix(e);i.applyNormalMatrix(o),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Nn.makeRotationFromQuaternion(e),this.applyMatrix4(Nn),this}rotateX(e){return Nn.makeRotationX(e),this.applyMatrix4(Nn),this}rotateY(e){return Nn.makeRotationY(e),this.applyMatrix4(Nn),this}rotateZ(e){return Nn.makeRotationZ(e),this.applyMatrix4(Nn),this}translate(e,n,i){return Nn.makeTranslation(e,n,i),this.applyMatrix4(Nn),this}scale(e,n,i){return Nn.makeScale(e,n,i),this.applyMatrix4(Nn),this}lookAt(e){return cf.lookAt(e),cf.updateMatrix(),this.applyMatrix4(cf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_o).negate(),this.translate(_o.x,_o.y,_o.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}return this.setAttribute("position",new _i(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ra);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const o=n[i];yn.setFromBufferAttribute(o),this.morphTargetsRelative?(Dt.addVectors(this.boundingBox.min,yn.min),this.boundingBox.expandByPoint(Dt),Dt.addVectors(this.boundingBox.max,yn.max),this.boundingBox.expandByPoint(Dt)):(this.boundingBox.expandByPoint(yn.min),this.boundingBox.expandByPoint(yn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qh);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new B,1/0);return}if(e){const i=this.boundingSphere.center;if(yn.setFromBufferAttribute(e),n)for(let o=0,s=n.length;o<s;o++){const a=n[o];Ds.setFromBufferAttribute(a),this.morphTargetsRelative?(Dt.addVectors(yn.min,Ds.min),yn.expandByPoint(Dt),Dt.addVectors(yn.max,Ds.max),yn.expandByPoint(Dt)):(yn.expandByPoint(Ds.min),yn.expandByPoint(Ds.max))}yn.getCenter(i);let r=0;for(let o=0,s=e.count;o<s;o++)Dt.fromBufferAttribute(e,o),r=Math.max(r,i.distanceToSquared(Dt));if(n)for(let o=0,s=n.length;o<s;o++){const a=n[o],l=this.morphTargetsRelative;for(let u=0,f=a.count;u<f;u++)Dt.fromBufferAttribute(a,u),l&&(_o.fromBufferAttribute(e,u),Dt.add(_o)),r=Math.max(r,i.distanceToSquared(Dt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=n.position.array,o=n.normal.array,s=n.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ii(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,u=[],f=[];for(let w=0;w<a;w++)u[w]=new B,f[w]=new B;const h=new B,d=new B,p=new B,_=new Ze,x=new Ze,g=new Ze,c=new B,v=new B;function m(w,F,$){h.fromArray(r,w*3),d.fromArray(r,F*3),p.fromArray(r,$*3),_.fromArray(s,w*2),x.fromArray(s,F*2),g.fromArray(s,$*2),d.sub(h),p.sub(h),x.sub(_),g.sub(_);const ee=1/(x.x*g.y-g.x*x.y);isFinite(ee)&&(c.copy(d).multiplyScalar(g.y).addScaledVector(p,-x.y).multiplyScalar(ee),v.copy(p).multiplyScalar(x.x).addScaledVector(d,-g.x).multiplyScalar(ee),u[w].add(c),u[F].add(c),u[$].add(c),f[w].add(v),f[F].add(v),f[$].add(v))}let y=this.groups;y.length===0&&(y=[{start:0,count:i.length}]);for(let w=0,F=y.length;w<F;++w){const $=y[w],ee=$.start,P=$.count;for(let O=ee,X=ee+P;O<X;O+=3)m(i[O+0],i[O+1],i[O+2])}const R=new B,A=new B,M=new B,N=new B;function E(w){M.fromArray(o,w*3),N.copy(M);const F=u[w];R.copy(F),R.sub(M.multiplyScalar(M.dot(F))).normalize(),A.crossVectors(N,F);const ee=A.dot(f[w])<0?-1:1;l[w*4]=R.x,l[w*4+1]=R.y,l[w*4+2]=R.z,l[w*4+3]=ee}for(let w=0,F=y.length;w<F;++w){const $=y[w],ee=$.start,P=$.count;for(let O=ee,X=ee+P;O<X;O+=3)E(i[O+0]),E(i[O+1]),E(i[O+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ii(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const r=new B,o=new B,s=new B,a=new B,l=new B,u=new B,f=new B,h=new B;if(e)for(let d=0,p=e.count;d<p;d+=3){const _=e.getX(d+0),x=e.getX(d+1),g=e.getX(d+2);r.fromBufferAttribute(n,_),o.fromBufferAttribute(n,x),s.fromBufferAttribute(n,g),f.subVectors(s,o),h.subVectors(r,o),f.cross(h),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,x),u.fromBufferAttribute(i,g),a.add(f),l.add(f),u.add(f),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(g,u.x,u.y,u.z)}else for(let d=0,p=n.count;d<p;d+=3)r.fromBufferAttribute(n,d+0),o.fromBufferAttribute(n,d+1),s.fromBufferAttribute(n,d+2),f.subVectors(s,o),h.subVectors(r,o),f.cross(h),i.setXYZ(d+0,f.x,f.y,f.z),i.setXYZ(d+1,f.x,f.y,f.z),i.setXYZ(d+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Dt.fromBufferAttribute(e,n),Dt.normalize(),e.setXYZ(n,Dt.x,Dt.y,Dt.z)}toNonIndexed(){function e(a,l){const u=a.array,f=a.itemSize,h=a.normalized,d=new u.constructor(l.length*f);let p=0,_=0;for(let x=0,g=l.length;x<g;x++){a.isInterleavedBufferAttribute?p=l[x]*a.data.stride+a.offset:p=l[x]*f;for(let c=0;c<f;c++)d[_++]=u[p++]}return new ii(d,f,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new zi,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);n.setAttribute(a,u)}const o=this.morphAttributes;for(const a in o){const l=[],u=o[a];for(let f=0,h=u.length;f<h;f++){const d=u[f],p=e(d,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let a=0,l=s.length;a<l;a++){const u=s[a];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let o=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],f=[];for(let h=0,d=u.length;h<d;h++){const p=u[h];f.push(p.toJSON(e.data))}f.length>0&&(r[l]=f,o=!0)}o&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const u in r){const f=r[u];this.setAttribute(u,f.clone(n))}const o=e.morphAttributes;for(const u in o){const f=[],h=o[u];for(let d=0,p=h.length;d<p;d++)f.push(h[d].clone(n));this.morphAttributes[u]=f}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let u=0,f=s.length;u<f;u++){const h=s[u];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ng=new Gt,Rr=new I1,ll=new qh,Dg=new B,xo=new B,yo=new B,So=new B,ff=new B,ul=new B,cl=new Ze,fl=new Ze,dl=new Ze,Ig=new B,Ug=new B,Fg=new B,hl=new B,pl=new B;class mi extends An{constructor(e=new zi,n=new tc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){const a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,o=i.morphAttributes.position,s=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(o&&a){ul.set(0,0,0);for(let l=0,u=o.length;l<u;l++){const f=a[l],h=o[l];f!==0&&(ff.fromBufferAttribute(h,e),s?ul.addScaledVector(ff,f):ul.addScaledVector(ff.sub(n),f))}n.add(ul)}return n}raycast(e,n){const i=this.geometry,r=this.material,o=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ll.copy(i.boundingSphere),ll.applyMatrix4(o),Rr.copy(e.ray).recast(e.near),!(ll.containsPoint(Rr.origin)===!1&&(Rr.intersectSphere(ll,Dg)===null||Rr.origin.distanceToSquared(Dg)>(e.far-e.near)**2))&&(Ng.copy(o).invert(),Rr.copy(e.ray).applyMatrix4(Ng),!(i.boundingBox!==null&&Rr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Rr)))}_computeIntersections(e,n,i){let r;const o=this.geometry,s=this.material,a=o.index,l=o.attributes.position,u=o.attributes.uv,f=o.attributes.uv1,h=o.attributes.normal,d=o.groups,p=o.drawRange;if(a!==null)if(Array.isArray(s))for(let _=0,x=d.length;_<x;_++){const g=d[_],c=s[g.materialIndex],v=Math.max(g.start,p.start),m=Math.min(a.count,Math.min(g.start+g.count,p.start+p.count));for(let y=v,R=m;y<R;y+=3){const A=a.getX(y),M=a.getX(y+1),N=a.getX(y+2);r=ml(this,c,e,i,u,f,h,A,M,N),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const _=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let g=_,c=x;g<c;g+=3){const v=a.getX(g),m=a.getX(g+1),y=a.getX(g+2);r=ml(this,s,e,i,u,f,h,v,m,y),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(s))for(let _=0,x=d.length;_<x;_++){const g=d[_],c=s[g.materialIndex],v=Math.max(g.start,p.start),m=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let y=v,R=m;y<R;y+=3){const A=y,M=y+1,N=y+2;r=ml(this,c,e,i,u,f,h,A,M,N),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const _=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let g=_,c=x;g<c;g+=3){const v=g,m=g+1,y=g+2;r=ml(this,s,e,i,u,f,h,v,m,y),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}}}function uT(t,e,n,i,r,o,s,a){let l;if(e.side===vn?l=i.intersectTriangle(s,o,r,!0,a):l=i.intersectTriangle(r,o,s,e.side===_r,a),l===null)return null;pl.copy(a),pl.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(pl);return u<n.near||u>n.far?null:{distance:u,point:pl.clone(),object:t}}function ml(t,e,n,i,r,o,s,a,l,u){t.getVertexPosition(a,xo),t.getVertexPosition(l,yo),t.getVertexPosition(u,So);const f=uT(t,e,n,i,xo,yo,So,hl);if(f){r&&(cl.fromBufferAttribute(r,a),fl.fromBufferAttribute(r,l),dl.fromBufferAttribute(r,u),f.uv=Qn.getInterpolation(hl,xo,yo,So,cl,fl,dl,new Ze)),o&&(cl.fromBufferAttribute(o,a),fl.fromBufferAttribute(o,l),dl.fromBufferAttribute(o,u),f.uv1=Qn.getInterpolation(hl,xo,yo,So,cl,fl,dl,new Ze),f.uv2=f.uv1),s&&(Ig.fromBufferAttribute(s,a),Ug.fromBufferAttribute(s,l),Fg.fromBufferAttribute(s,u),f.normal=Qn.getInterpolation(hl,xo,yo,So,Ig,Ug,Fg,new B),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const h={a,b:l,c:u,normal:new B,materialIndex:0};Qn.getNormal(xo,yo,So,h.normal),f.face=h}return f}class ba extends zi{constructor(e=1,n=1,i=1,r=1,o=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:o,depthSegments:s};const a=this;r=Math.floor(r),o=Math.floor(o),s=Math.floor(s);const l=[],u=[],f=[],h=[];let d=0,p=0;_("z","y","x",-1,-1,i,n,e,s,o,0),_("z","y","x",1,-1,i,n,-e,s,o,1),_("x","z","y",1,1,e,i,n,r,s,2),_("x","z","y",1,-1,e,i,-n,r,s,3),_("x","y","z",1,-1,e,n,i,r,o,4),_("x","y","z",-1,-1,e,n,-i,r,o,5),this.setIndex(l),this.setAttribute("position",new _i(u,3)),this.setAttribute("normal",new _i(f,3)),this.setAttribute("uv",new _i(h,2));function _(x,g,c,v,m,y,R,A,M,N,E){const w=y/M,F=R/N,$=y/2,ee=R/2,P=A/2,O=M+1,X=N+1;let q=0,L=0;const D=new B;for(let G=0;G<X;G++){const j=G*F-ee;for(let Z=0;Z<O;Z++){const W=Z*w-$;D[x]=W*v,D[g]=j*m,D[c]=P,u.push(D.x,D.y,D.z),D[x]=0,D[g]=0,D[c]=A>0?1:-1,f.push(D.x,D.y,D.z),h.push(Z/M),h.push(1-G/N),q+=1}}for(let G=0;G<N;G++)for(let j=0;j<M;j++){const Z=d+j+O*G,W=d+j+O*(G+1),Y=d+(j+1)+O*(G+1),oe=d+(j+1)+O*G;l.push(Z,W,oe),l.push(W,Y,oe),L+=6}a.addGroup(p,L,E),p+=L,d+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ba(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function us(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function rn(t){const e={};for(let n=0;n<t.length;n++){const i=us(t[n]);for(const r in i)e[r]=i[r]}return e}function cT(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function B1(t){return t.getRenderTarget()===null?t.outputColorSpace:nt.workingColorSpace}const fT={clone:us,merge:rn};var dT=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,hT=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class to extends ec{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=dT,this.fragmentShader=hT,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=us(e.uniforms),this.uniformsGroups=cT(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const s=this.uniforms[r].value;s&&s.isTexture?n.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?n.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?n.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?n.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?n.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?n.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?n.uniforms[r]={type:"m4",value:s.toArray()}:n.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class k1 extends An{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Gt,this.projectionMatrix=new Gt,this.projectionMatrixInverse=new Gt,this.coordinateSystem=Di}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Fn extends k1{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=va*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ys*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return va*2*Math.atan(Math.tan(Ys*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,i,r,o,s){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Ys*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,o=-.5*r;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,u=s.fullHeight;o+=s.offsetX*r/l,n-=s.offsetY*i/u,r*=s.width/l,i*=s.height/u}const a=this.filmOffset;a!==0&&(o+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Eo=-90,Mo=1;class pT extends An{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Fn(Eo,Mo,e,n);r.layers=this.layers,this.add(r);const o=new Fn(Eo,Mo,e,n);o.layers=this.layers,this.add(o);const s=new Fn(Eo,Mo,e,n);s.layers=this.layers,this.add(s);const a=new Fn(Eo,Mo,e,n);a.layers=this.layers,this.add(a);const l=new Fn(Eo,Mo,e,n);l.layers=this.layers,this.add(l);const u=new Fn(Eo,Mo,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,o,s,a,l]=n;for(const u of n)this.remove(u);if(e===Di)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===gu)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,s,a,l,u,f]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,o),e.setRenderTarget(i,1,r),e.render(n,s),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,u),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),e.render(n,f),e.setRenderTarget(h,d,p),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class H1 extends wn{constructor(e,n,i,r,o,s,a,l,u,f){e=e!==void 0?e:[],n=n!==void 0?n:ss,super(e,n,i,r,o,s,a,l,u,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class mT extends eo{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];n.encoding!==void 0&&(Zs("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Xr?kt:On),this.texture=new H1(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Un}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new ba(5,5,5),o=new to({name:"CubemapFromEquirect",uniforms:us(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:vn,blending:dr});o.uniforms.tEquirect.value=n;const s=new mi(r,o),a=n.minFilter;return n.minFilter===ma&&(n.minFilter=Un),new pT(1,10,this).update(e,s),n.minFilter=a,s.geometry.dispose(),s.material.dispose(),this}clear(e,n,i,r){const o=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(n,i,r);e.setRenderTarget(o)}}const df=new B,gT=new B,vT=new Ve;class Dr{constructor(e=new B(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=df.subVectors(i,n).cross(gT.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(df),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/r;return o<0||o>1?null:n.copy(e.start).addScaledVector(i,o)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||vT.getNormalMatrix(e),r=this.coplanarPoint(df).applyMatrix4(e),o=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const br=new qh,gl=new B;class z1{constructor(e=new Dr,n=new Dr,i=new Dr,r=new Dr,o=new Dr,s=new Dr){this.planes=[e,n,i,r,o,s]}set(e,n,i,r,o,s){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(o),a[5].copy(s),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Di){const i=this.planes,r=e.elements,o=r[0],s=r[1],a=r[2],l=r[3],u=r[4],f=r[5],h=r[6],d=r[7],p=r[8],_=r[9],x=r[10],g=r[11],c=r[12],v=r[13],m=r[14],y=r[15];if(i[0].setComponents(l-o,d-u,g-p,y-c).normalize(),i[1].setComponents(l+o,d+u,g+p,y+c).normalize(),i[2].setComponents(l+s,d+f,g+_,y+v).normalize(),i[3].setComponents(l-s,d-f,g-_,y-v).normalize(),i[4].setComponents(l-a,d-h,g-x,y-m).normalize(),n===Di)i[5].setComponents(l+a,d+h,g+x,y+m).normalize();else if(n===gu)i[5].setComponents(a,h,x,m).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),br.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),br.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(br)}intersectsSprite(e){return br.center.set(0,0,0),br.radius=.7071067811865476,br.applyMatrix4(e.matrixWorld),this.intersectsSphere(br)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let o=0;o<6;o++)if(n[o].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(gl.x=r.normal.x>0?e.max.x:e.min.x,gl.y=r.normal.y>0?e.max.y:e.min.y,gl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(gl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function G1(){let t=null,e=!1,n=null,i=null;function r(o,s){n(o,s),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(o){n=o},setContext:function(o){t=o}}}function _T(t,e){const n=e.isWebGL2,i=new WeakMap;function r(u,f){const h=u.array,d=u.usage,p=h.byteLength,_=t.createBuffer();t.bindBuffer(f,_),t.bufferData(f,h,d),u.onUploadCallback();let x;if(h instanceof Float32Array)x=t.FLOAT;else if(h instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(n)x=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=t.UNSIGNED_SHORT;else if(h instanceof Int16Array)x=t.SHORT;else if(h instanceof Uint32Array)x=t.UNSIGNED_INT;else if(h instanceof Int32Array)x=t.INT;else if(h instanceof Int8Array)x=t.BYTE;else if(h instanceof Uint8Array)x=t.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)x=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:_,type:x,bytesPerElement:h.BYTES_PER_ELEMENT,version:u.version,size:p}}function o(u,f,h){const d=f.array,p=f._updateRange,_=f.updateRanges;if(t.bindBuffer(h,u),p.count===-1&&_.length===0&&t.bufferSubData(h,0,d),_.length!==0){for(let x=0,g=_.length;x<g;x++){const c=_[x];n?t.bufferSubData(h,c.start*d.BYTES_PER_ELEMENT,d,c.start,c.count):t.bufferSubData(h,c.start*d.BYTES_PER_ELEMENT,d.subarray(c.start,c.start+c.count))}f.clearUpdateRanges()}p.count!==-1&&(n?t.bufferSubData(h,p.offset*d.BYTES_PER_ELEMENT,d,p.offset,p.count):t.bufferSubData(h,p.offset*d.BYTES_PER_ELEMENT,d.subarray(p.offset,p.offset+p.count)),p.count=-1),f.onUploadCallback()}function s(u){return u.isInterleavedBufferAttribute&&(u=u.data),i.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const f=i.get(u);f&&(t.deleteBuffer(f.buffer),i.delete(u))}function l(u,f){if(u.isGLBufferAttribute){const d=i.get(u);(!d||d.version<u.version)&&i.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const h=i.get(u);if(h===void 0)i.set(u,r(u,f));else if(h.version<u.version){if(h.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");o(h.buffer,u,f),h.version=u.version}}return{get:s,remove:a,update:l}}class Kh extends zi{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const o=e/2,s=n/2,a=Math.floor(i),l=Math.floor(r),u=a+1,f=l+1,h=e/a,d=n/l,p=[],_=[],x=[],g=[];for(let c=0;c<f;c++){const v=c*d-s;for(let m=0;m<u;m++){const y=m*h-o;_.push(y,-v,0),x.push(0,0,1),g.push(m/a),g.push(1-c/l)}}for(let c=0;c<l;c++)for(let v=0;v<a;v++){const m=v+u*c,y=v+u*(c+1),R=v+1+u*(c+1),A=v+1+u*c;p.push(m,y,A),p.push(y,R,A)}this.setIndex(p),this.setAttribute("position",new _i(_,3)),this.setAttribute("normal",new _i(x,3)),this.setAttribute("uv",new _i(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Kh(e.width,e.height,e.widthSegments,e.heightSegments)}}var xT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,yT=`#ifdef USE_ALPHAHASH
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
#endif`,ST=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ET=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,MT=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,TT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,wT=`#ifdef USE_AOMAP
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
#endif`,AT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,CT=`#ifdef USE_BATCHING
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
#endif`,RT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,bT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,PT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,LT=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,NT=`#ifdef USE_IRIDESCENCE
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
#endif`,DT=`#ifdef USE_BUMPMAP
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
#endif`,IT=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,UT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,FT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,OT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,BT=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,kT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,HT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,zT=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,GT=`#define PI 3.141592653589793
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
} // validated`,VT=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,WT=`vec3 transformedNormal = objectNormal;
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
#endif`,XT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,$T=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,jT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,YT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,qT="gl_FragColor = linearToOutputTexel( gl_FragColor );",ZT=`
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
}`,KT=`#ifdef USE_ENVMAP
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
#endif`,QT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,JT=`#ifdef USE_ENVMAP
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
#endif`,ew=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,tw=`#ifdef USE_ENVMAP
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
#endif`,nw=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,iw=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,rw=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ow=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,sw=`#ifdef USE_GRADIENTMAP
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
}`,aw=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,lw=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,uw=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,cw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,fw=`uniform bool receiveShadow;
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
#endif`,dw=`#ifdef USE_ENVMAP
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
#endif`,hw=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,pw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,mw=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,gw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,vw=`PhysicalMaterial material;
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
#endif`,_w=`struct PhysicalMaterial {
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
}`,xw=`
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
#endif`,yw=`#if defined( RE_IndirectDiffuse )
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
#endif`,Sw=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ew=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Mw=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Tw=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,ww=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Aw=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Cw=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Rw=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,bw=`#if defined( USE_POINTS_UV )
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
#endif`,Pw=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Lw=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Nw=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Dw=`#ifdef USE_MORPHNORMALS
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
#endif`,Iw=`#ifdef USE_MORPHTARGETS
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
#endif`,Uw=`#ifdef USE_MORPHTARGETS
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
#endif`,Fw=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Ow=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Bw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Hw=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,zw=`#ifdef USE_NORMALMAP
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
#endif`,Gw=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Vw=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ww=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Xw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,$w=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,jw=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Yw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,qw=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Zw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Kw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Qw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Jw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,eA=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,tA=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,nA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,iA=`float getShadowMask() {
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
}`,rA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,oA=`#ifdef USE_SKINNING
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
#endif`,sA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,aA=`#ifdef USE_SKINNING
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
#endif`,lA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,uA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,cA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,fA=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,dA=`#ifdef USE_TRANSMISSION
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
#endif`,hA=`#ifdef USE_TRANSMISSION
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
#endif`,pA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const _A=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,xA=`uniform sampler2D t2D;
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
}`,yA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,SA=`#ifdef ENVMAP_TYPE_CUBE
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
}`,EA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,MA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,TA=`#include <common>
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
}`,wA=`#if DEPTH_PACKING == 3200
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
}`,AA=`#define DISTANCE
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
}`,CA=`#define DISTANCE
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
}`,RA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,bA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,PA=`uniform float scale;
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
}`,LA=`uniform vec3 diffuse;
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
}`,NA=`#include <common>
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
}`,DA=`uniform vec3 diffuse;
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
}`,IA=`#define LAMBERT
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
}`,UA=`#define LAMBERT
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
}`,FA=`#define MATCAP
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
}`,OA=`#define MATCAP
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
}`,BA=`#define NORMAL
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
}`,kA=`#define NORMAL
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
}`,HA=`#define PHONG
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
}`,zA=`#define PHONG
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
}`,GA=`#define STANDARD
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
}`,VA=`#define STANDARD
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
}`,WA=`#define TOON
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
}`,XA=`#define TOON
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
}`,$A=`uniform float size;
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
}`,jA=`uniform vec3 diffuse;
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
}`,YA=`#include <common>
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
}`,qA=`uniform vec3 color;
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
}`,ZA=`uniform float rotation;
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
}`,KA=`uniform vec3 diffuse;
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
}`,Ue={alphahash_fragment:xT,alphahash_pars_fragment:yT,alphamap_fragment:ST,alphamap_pars_fragment:ET,alphatest_fragment:MT,alphatest_pars_fragment:TT,aomap_fragment:wT,aomap_pars_fragment:AT,batching_pars_vertex:CT,batching_vertex:RT,begin_vertex:bT,beginnormal_vertex:PT,bsdfs:LT,iridescence_fragment:NT,bumpmap_pars_fragment:DT,clipping_planes_fragment:IT,clipping_planes_pars_fragment:UT,clipping_planes_pars_vertex:FT,clipping_planes_vertex:OT,color_fragment:BT,color_pars_fragment:kT,color_pars_vertex:HT,color_vertex:zT,common:GT,cube_uv_reflection_fragment:VT,defaultnormal_vertex:WT,displacementmap_pars_vertex:XT,displacementmap_vertex:$T,emissivemap_fragment:jT,emissivemap_pars_fragment:YT,colorspace_fragment:qT,colorspace_pars_fragment:ZT,envmap_fragment:KT,envmap_common_pars_fragment:QT,envmap_pars_fragment:JT,envmap_pars_vertex:ew,envmap_physical_pars_fragment:dw,envmap_vertex:tw,fog_vertex:nw,fog_pars_vertex:iw,fog_fragment:rw,fog_pars_fragment:ow,gradientmap_pars_fragment:sw,lightmap_fragment:aw,lightmap_pars_fragment:lw,lights_lambert_fragment:uw,lights_lambert_pars_fragment:cw,lights_pars_begin:fw,lights_toon_fragment:hw,lights_toon_pars_fragment:pw,lights_phong_fragment:mw,lights_phong_pars_fragment:gw,lights_physical_fragment:vw,lights_physical_pars_fragment:_w,lights_fragment_begin:xw,lights_fragment_maps:yw,lights_fragment_end:Sw,logdepthbuf_fragment:Ew,logdepthbuf_pars_fragment:Mw,logdepthbuf_pars_vertex:Tw,logdepthbuf_vertex:ww,map_fragment:Aw,map_pars_fragment:Cw,map_particle_fragment:Rw,map_particle_pars_fragment:bw,metalnessmap_fragment:Pw,metalnessmap_pars_fragment:Lw,morphcolor_vertex:Nw,morphnormal_vertex:Dw,morphtarget_pars_vertex:Iw,morphtarget_vertex:Uw,normal_fragment_begin:Fw,normal_fragment_maps:Ow,normal_pars_fragment:Bw,normal_pars_vertex:kw,normal_vertex:Hw,normalmap_pars_fragment:zw,clearcoat_normal_fragment_begin:Gw,clearcoat_normal_fragment_maps:Vw,clearcoat_pars_fragment:Ww,iridescence_pars_fragment:Xw,opaque_fragment:$w,packing:jw,premultiplied_alpha_fragment:Yw,project_vertex:qw,dithering_fragment:Zw,dithering_pars_fragment:Kw,roughnessmap_fragment:Qw,roughnessmap_pars_fragment:Jw,shadowmap_pars_fragment:eA,shadowmap_pars_vertex:tA,shadowmap_vertex:nA,shadowmask_pars_fragment:iA,skinbase_vertex:rA,skinning_pars_vertex:oA,skinning_vertex:sA,skinnormal_vertex:aA,specularmap_fragment:lA,specularmap_pars_fragment:uA,tonemapping_fragment:cA,tonemapping_pars_fragment:fA,transmission_fragment:dA,transmission_pars_fragment:hA,uv_pars_fragment:pA,uv_pars_vertex:mA,uv_vertex:gA,worldpos_vertex:vA,background_vert:_A,background_frag:xA,backgroundCube_vert:yA,backgroundCube_frag:SA,cube_vert:EA,cube_frag:MA,depth_vert:TA,depth_frag:wA,distanceRGBA_vert:AA,distanceRGBA_frag:CA,equirect_vert:RA,equirect_frag:bA,linedashed_vert:PA,linedashed_frag:LA,meshbasic_vert:NA,meshbasic_frag:DA,meshlambert_vert:IA,meshlambert_frag:UA,meshmatcap_vert:FA,meshmatcap_frag:OA,meshnormal_vert:BA,meshnormal_frag:kA,meshphong_vert:HA,meshphong_frag:zA,meshphysical_vert:GA,meshphysical_frag:VA,meshtoon_vert:WA,meshtoon_frag:XA,points_vert:$A,points_frag:jA,shadow_vert:YA,shadow_frag:qA,sprite_vert:ZA,sprite_frag:KA},re={common:{diffuse:{value:new it(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ve}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ve},normalScale:{value:new Ze(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new it(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new it(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0},uvTransform:{value:new Ve}},sprite:{diffuse:{value:new it(16777215)},opacity:{value:1},center:{value:new Ze(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}}},di={basic:{uniforms:rn([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.fog]),vertexShader:Ue.meshbasic_vert,fragmentShader:Ue.meshbasic_frag},lambert:{uniforms:rn([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new it(0)}}]),vertexShader:Ue.meshlambert_vert,fragmentShader:Ue.meshlambert_frag},phong:{uniforms:rn([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new it(0)},specular:{value:new it(1118481)},shininess:{value:30}}]),vertexShader:Ue.meshphong_vert,fragmentShader:Ue.meshphong_frag},standard:{uniforms:rn([re.common,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.roughnessmap,re.metalnessmap,re.fog,re.lights,{emissive:{value:new it(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag},toon:{uniforms:rn([re.common,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.gradientmap,re.fog,re.lights,{emissive:{value:new it(0)}}]),vertexShader:Ue.meshtoon_vert,fragmentShader:Ue.meshtoon_frag},matcap:{uniforms:rn([re.common,re.bumpmap,re.normalmap,re.displacementmap,re.fog,{matcap:{value:null}}]),vertexShader:Ue.meshmatcap_vert,fragmentShader:Ue.meshmatcap_frag},points:{uniforms:rn([re.points,re.fog]),vertexShader:Ue.points_vert,fragmentShader:Ue.points_frag},dashed:{uniforms:rn([re.common,re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ue.linedashed_vert,fragmentShader:Ue.linedashed_frag},depth:{uniforms:rn([re.common,re.displacementmap]),vertexShader:Ue.depth_vert,fragmentShader:Ue.depth_frag},normal:{uniforms:rn([re.common,re.bumpmap,re.normalmap,re.displacementmap,{opacity:{value:1}}]),vertexShader:Ue.meshnormal_vert,fragmentShader:Ue.meshnormal_frag},sprite:{uniforms:rn([re.sprite,re.fog]),vertexShader:Ue.sprite_vert,fragmentShader:Ue.sprite_frag},background:{uniforms:{uvTransform:{value:new Ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ue.background_vert,fragmentShader:Ue.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ue.backgroundCube_vert,fragmentShader:Ue.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ue.cube_vert,fragmentShader:Ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ue.equirect_vert,fragmentShader:Ue.equirect_frag},distanceRGBA:{uniforms:rn([re.common,re.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ue.distanceRGBA_vert,fragmentShader:Ue.distanceRGBA_frag},shadow:{uniforms:rn([re.lights,re.fog,{color:{value:new it(0)},opacity:{value:1}}]),vertexShader:Ue.shadow_vert,fragmentShader:Ue.shadow_frag}};di.physical={uniforms:rn([di.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ve},clearcoatNormalScale:{value:new Ze(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ve},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ve},sheen:{value:0},sheenColor:{value:new it(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ve},transmissionSamplerSize:{value:new Ze},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ve},attenuationDistance:{value:0},attenuationColor:{value:new it(0)},specularColor:{value:new it(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ve},anisotropyVector:{value:new Ze},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ve}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag};const vl={r:0,b:0,g:0};function QA(t,e,n,i,r,o,s){const a=new it(0);let l=o===!0?0:1,u,f,h=null,d=0,p=null;function _(g,c){let v=!1,m=c.isScene===!0?c.background:null;m&&m.isTexture&&(m=(c.backgroundBlurriness>0?n:e).get(m)),m===null?x(a,l):m&&m.isColor&&(x(m,1),v=!0);const y=t.xr.getEnvironmentBlendMode();y==="additive"?i.buffers.color.setClear(0,0,0,1,s):y==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,s),(t.autoClear||v)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),m&&(m.isCubeTexture||m.mapping===Ku)?(f===void 0&&(f=new mi(new ba(1,1,1),new to({name:"BackgroundCubeMaterial",uniforms:us(di.backgroundCube.uniforms),vertexShader:di.backgroundCube.vertexShader,fragmentShader:di.backgroundCube.fragmentShader,side:vn,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(R,A,M){this.matrixWorld.copyPosition(M.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(f)),f.material.uniforms.envMap.value=m,f.material.uniforms.flipEnvMap.value=m.isCubeTexture&&m.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=c.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=c.backgroundIntensity,f.material.toneMapped=nt.getTransfer(m.colorSpace)!==ct,(h!==m||d!==m.version||p!==t.toneMapping)&&(f.material.needsUpdate=!0,h=m,d=m.version,p=t.toneMapping),f.layers.enableAll(),g.unshift(f,f.geometry,f.material,0,0,null)):m&&m.isTexture&&(u===void 0&&(u=new mi(new Kh(2,2),new to({name:"BackgroundMaterial",uniforms:us(di.background.uniforms),vertexShader:di.background.vertexShader,fragmentShader:di.background.fragmentShader,side:_r,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=m,u.material.uniforms.backgroundIntensity.value=c.backgroundIntensity,u.material.toneMapped=nt.getTransfer(m.colorSpace)!==ct,m.matrixAutoUpdate===!0&&m.updateMatrix(),u.material.uniforms.uvTransform.value.copy(m.matrix),(h!==m||d!==m.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,h=m,d=m.version,p=t.toneMapping),u.layers.enableAll(),g.unshift(u,u.geometry,u.material,0,0,null))}function x(g,c){g.getRGB(vl,B1(t)),i.buffers.color.setClear(vl.r,vl.g,vl.b,c,s)}return{getClearColor:function(){return a},setClearColor:function(g,c=1){a.set(g),l=c,x(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(g){l=g,x(a,l)},render:_}}function JA(t,e,n,i){const r=t.getParameter(t.MAX_VERTEX_ATTRIBS),o=i.isWebGL2?null:e.get("OES_vertex_array_object"),s=i.isWebGL2||o!==null,a={},l=g(null);let u=l,f=!1;function h(P,O,X,q,L){let D=!1;if(s){const G=x(q,X,O);u!==G&&(u=G,p(u.object)),D=c(P,q,X,L),D&&v(P,q,X,L)}else{const G=O.wireframe===!0;(u.geometry!==q.id||u.program!==X.id||u.wireframe!==G)&&(u.geometry=q.id,u.program=X.id,u.wireframe=G,D=!0)}L!==null&&n.update(L,t.ELEMENT_ARRAY_BUFFER),(D||f)&&(f=!1,N(P,O,X,q),L!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(L).buffer))}function d(){return i.isWebGL2?t.createVertexArray():o.createVertexArrayOES()}function p(P){return i.isWebGL2?t.bindVertexArray(P):o.bindVertexArrayOES(P)}function _(P){return i.isWebGL2?t.deleteVertexArray(P):o.deleteVertexArrayOES(P)}function x(P,O,X){const q=X.wireframe===!0;let L=a[P.id];L===void 0&&(L={},a[P.id]=L);let D=L[O.id];D===void 0&&(D={},L[O.id]=D);let G=D[q];return G===void 0&&(G=g(d()),D[q]=G),G}function g(P){const O=[],X=[],q=[];for(let L=0;L<r;L++)O[L]=0,X[L]=0,q[L]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:X,attributeDivisors:q,object:P,attributes:{},index:null}}function c(P,O,X,q){const L=u.attributes,D=O.attributes;let G=0;const j=X.getAttributes();for(const Z in j)if(j[Z].location>=0){const Y=L[Z];let oe=D[Z];if(oe===void 0&&(Z==="instanceMatrix"&&P.instanceMatrix&&(oe=P.instanceMatrix),Z==="instanceColor"&&P.instanceColor&&(oe=P.instanceColor)),Y===void 0||Y.attribute!==oe||oe&&Y.data!==oe.data)return!0;G++}return u.attributesNum!==G||u.index!==q}function v(P,O,X,q){const L={},D=O.attributes;let G=0;const j=X.getAttributes();for(const Z in j)if(j[Z].location>=0){let Y=D[Z];Y===void 0&&(Z==="instanceMatrix"&&P.instanceMatrix&&(Y=P.instanceMatrix),Z==="instanceColor"&&P.instanceColor&&(Y=P.instanceColor));const oe={};oe.attribute=Y,Y&&Y.data&&(oe.data=Y.data),L[Z]=oe,G++}u.attributes=L,u.attributesNum=G,u.index=q}function m(){const P=u.newAttributes;for(let O=0,X=P.length;O<X;O++)P[O]=0}function y(P){R(P,0)}function R(P,O){const X=u.newAttributes,q=u.enabledAttributes,L=u.attributeDivisors;X[P]=1,q[P]===0&&(t.enableVertexAttribArray(P),q[P]=1),L[P]!==O&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,O),L[P]=O)}function A(){const P=u.newAttributes,O=u.enabledAttributes;for(let X=0,q=O.length;X<q;X++)O[X]!==P[X]&&(t.disableVertexAttribArray(X),O[X]=0)}function M(P,O,X,q,L,D,G){G===!0?t.vertexAttribIPointer(P,O,X,L,D):t.vertexAttribPointer(P,O,X,q,L,D)}function N(P,O,X,q){if(i.isWebGL2===!1&&(P.isInstancedMesh||q.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;m();const L=q.attributes,D=X.getAttributes(),G=O.defaultAttributeValues;for(const j in D){const Z=D[j];if(Z.location>=0){let W=L[j];if(W===void 0&&(j==="instanceMatrix"&&P.instanceMatrix&&(W=P.instanceMatrix),j==="instanceColor"&&P.instanceColor&&(W=P.instanceColor)),W!==void 0){const Y=W.normalized,oe=W.itemSize,ue=n.get(W);if(ue===void 0)continue;const de=ue.buffer,we=ue.type,Me=ue.bytesPerElement,ye=i.isWebGL2===!0&&(we===t.INT||we===t.UNSIGNED_INT||W.gpuType===S1);if(W.isInterleavedBufferAttribute){const He=W.data,U=He.stride,Jt=W.offset;if(He.isInstancedInterleavedBuffer){for(let Se=0;Se<Z.locationSize;Se++)R(Z.location+Se,He.meshPerAttribute);P.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=He.meshPerAttribute*He.count)}else for(let Se=0;Se<Z.locationSize;Se++)y(Z.location+Se);t.bindBuffer(t.ARRAY_BUFFER,de);for(let Se=0;Se<Z.locationSize;Se++)M(Z.location+Se,oe/Z.locationSize,we,Y,U*Me,(Jt+oe/Z.locationSize*Se)*Me,ye)}else{if(W.isInstancedBufferAttribute){for(let He=0;He<Z.locationSize;He++)R(Z.location+He,W.meshPerAttribute);P.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let He=0;He<Z.locationSize;He++)y(Z.location+He);t.bindBuffer(t.ARRAY_BUFFER,de);for(let He=0;He<Z.locationSize;He++)M(Z.location+He,oe/Z.locationSize,we,Y,oe*Me,oe/Z.locationSize*He*Me,ye)}}else if(G!==void 0){const Y=G[j];if(Y!==void 0)switch(Y.length){case 2:t.vertexAttrib2fv(Z.location,Y);break;case 3:t.vertexAttrib3fv(Z.location,Y);break;case 4:t.vertexAttrib4fv(Z.location,Y);break;default:t.vertexAttrib1fv(Z.location,Y)}}}}A()}function E(){$();for(const P in a){const O=a[P];for(const X in O){const q=O[X];for(const L in q)_(q[L].object),delete q[L];delete O[X]}delete a[P]}}function w(P){if(a[P.id]===void 0)return;const O=a[P.id];for(const X in O){const q=O[X];for(const L in q)_(q[L].object),delete q[L];delete O[X]}delete a[P.id]}function F(P){for(const O in a){const X=a[O];if(X[P.id]===void 0)continue;const q=X[P.id];for(const L in q)_(q[L].object),delete q[L];delete X[P.id]}}function $(){ee(),f=!0,u!==l&&(u=l,p(u.object))}function ee(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:$,resetDefaultState:ee,dispose:E,releaseStatesOfGeometry:w,releaseStatesOfProgram:F,initAttributes:m,enableAttribute:y,disableUnusedAttributes:A}}function eC(t,e,n,i){const r=i.isWebGL2;let o;function s(f){o=f}function a(f,h){t.drawArrays(o,f,h),n.update(h,o,1)}function l(f,h,d){if(d===0)return;let p,_;if(r)p=t,_="drawArraysInstanced";else if(p=e.get("ANGLE_instanced_arrays"),_="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[_](o,f,h,d),n.update(h,o,d)}function u(f,h,d){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<d;_++)this.render(f[_],h[_]);else{p.multiDrawArraysWEBGL(o,f,0,h,0,d);let _=0;for(let x=0;x<d;x++)_+=h[x];n.update(_,o,1)}}this.setMode=s,this.render=a,this.renderInstances=l,this.renderMultiDraw=u}function tC(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const M=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(M.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(M){if(M==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";M="mediump"}return M==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const s=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let a=n.precision!==void 0?n.precision:"highp";const l=o(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const u=s||e.has("WEBGL_draw_buffers"),f=n.logarithmicDepthBuffer===!0,h=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),d=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=t.getParameter(t.MAX_TEXTURE_SIZE),_=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),x=t.getParameter(t.MAX_VERTEX_ATTRIBS),g=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),c=t.getParameter(t.MAX_VARYING_VECTORS),v=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),m=d>0,y=s||e.has("OES_texture_float"),R=m&&y,A=s?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:s,drawBuffers:u,getMaxAnisotropy:r,getMaxPrecision:o,precision:a,logarithmicDepthBuffer:f,maxTextures:h,maxVertexTextures:d,maxTextureSize:p,maxCubemapSize:_,maxAttributes:x,maxVertexUniforms:g,maxVaryings:c,maxFragmentUniforms:v,vertexTextures:m,floatFragmentTextures:y,floatVertexTextures:R,maxSamples:A}}function nC(t){const e=this;let n=null,i=0,r=!1,o=!1;const s=new Dr,a=new Ve,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const p=h.length!==0||d||i!==0||r;return r=d,i=h.length,p},this.beginShadows=function(){o=!0,f(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(h,d){n=f(h,d,0)},this.setState=function(h,d,p){const _=h.clippingPlanes,x=h.clipIntersection,g=h.clipShadows,c=t.get(h);if(!r||_===null||_.length===0||o&&!g)o?f(null):u();else{const v=o?0:i,m=v*4;let y=c.clippingState||null;l.value=y,y=f(_,d,m,p);for(let R=0;R!==m;++R)y[R]=n[R];c.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(h,d,p,_){const x=h!==null?h.length:0;let g=null;if(x!==0){if(g=l.value,_!==!0||g===null){const c=p+x*4,v=d.matrixWorldInverse;a.getNormalMatrix(v),(g===null||g.length<c)&&(g=new Float32Array(c));for(let m=0,y=p;m!==x;++m,y+=4)s.copy(h[m]).applyMatrix4(v,a),s.normal.toArray(g,y),g[y+3]=s.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,g}}function iC(t){let e=new WeakMap;function n(s,a){return a===bd?s.mapping=ss:a===Pd&&(s.mapping=as),s}function i(s){if(s&&s.isTexture){const a=s.mapping;if(a===bd||a===Pd)if(e.has(s)){const l=e.get(s).texture;return n(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const u=new mT(l.height/2);return u.fromEquirectangularTexture(t,s),e.set(s,u),s.addEventListener("dispose",r),n(u.texture,s.mapping)}else return null}}return s}function r(s){const a=s.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function o(){e=new WeakMap}return{get:i,dispose:o}}class rC extends k1{constructor(e=-1,n=1,i=1,r=-1,o=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=o,this.far=s,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,o,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let o=i-e,s=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=u*this.view.offsetX,s=o+u*this.view.width,a-=f*this.view.offsetY,l=a-f*this.view.height}this.projectionMatrix.makeOrthographic(o,s,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const ko=4,Og=[.125,.215,.35,.446,.526,.582],Fr=20,hf=new rC,Bg=new it;let pf=null,mf=0,gf=0;const Ir=(1+Math.sqrt(5))/2,To=1/Ir,kg=[new B(1,1,1),new B(-1,1,1),new B(1,1,-1),new B(-1,1,-1),new B(0,Ir,To),new B(0,Ir,-To),new B(To,0,Ir),new B(-To,0,Ir),new B(Ir,To,0),new B(-Ir,To,0)];class Hg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){pf=this._renderer.getRenderTarget(),mf=this._renderer.getActiveCubeFace(),gf=this._renderer.getActiveMipmapLevel(),this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,i,r,o),n>0&&this._blur(o,0,0,n),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Vg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Gg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(pf,mf,gf),e.scissorTest=!1,_l(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===ss||e.mapping===as?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),pf=this._renderer.getRenderTarget(),mf=this._renderer.getActiveCubeFace(),gf=this._renderer.getActiveMipmapLevel();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Un,minFilter:Un,generateMipmaps:!1,type:ga,format:ei,colorSpace:ki,depthBuffer:!1},r=zg(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=zg(e,n,i);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=oC(o)),this._blurMaterial=sC(o,e,n)}return r}_compileMaterial(e){const n=new mi(this._lodPlanes[0],e);this._renderer.compile(n,hf)}_sceneToCubeUV(e,n,i,r){const a=new Fn(90,1,n,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,d=f.toneMapping;f.getClearColor(Bg),f.toneMapping=hr,f.autoClear=!1;const p=new tc({name:"PMREM.Background",side:vn,depthWrite:!1,depthTest:!1}),_=new mi(new ba,p);let x=!1;const g=e.background;g?g.isColor&&(p.color.copy(g),e.background=null,x=!0):(p.color.copy(Bg),x=!0);for(let c=0;c<6;c++){const v=c%3;v===0?(a.up.set(0,l[c],0),a.lookAt(u[c],0,0)):v===1?(a.up.set(0,0,l[c]),a.lookAt(0,u[c],0)):(a.up.set(0,l[c],0),a.lookAt(0,0,u[c]));const m=this._cubeSize;_l(r,v*m,c>2?m:0,m,m),f.setRenderTarget(r),x&&f.render(_,a),f.render(e,a)}_.geometry.dispose(),_.material.dispose(),f.toneMapping=d,f.autoClear=h,e.background=g}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===ss||e.mapping===as;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Vg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Gg());const o=r?this._cubemapMaterial:this._equirectMaterial,s=new mi(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=e;const l=this._cubeSize;_l(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(s,hf)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),s=kg[(r-1)%kg.length];this._blur(e,r-1,r,o,s)}n.autoClear=i}_blur(e,n,i,r,o){const s=this._pingPongRenderTarget;this._halfBlur(e,s,n,i,r,"latitudinal",o),this._halfBlur(s,e,i,i,r,"longitudinal",o)}_halfBlur(e,n,i,r,o,s,a){const l=this._renderer,u=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,h=new mi(this._lodPlanes[r],u),d=u.uniforms,p=this._sizeLods[i]-1,_=isFinite(o)?Math.PI/(2*p):2*Math.PI/(2*Fr-1),x=o/_,g=isFinite(o)?1+Math.floor(f*x):Fr;g>Fr&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Fr}`);const c=[];let v=0;for(let M=0;M<Fr;++M){const N=M/x,E=Math.exp(-N*N/2);c.push(E),M===0?v+=E:M<g&&(v+=2*E)}for(let M=0;M<c.length;M++)c[M]=c[M]/v;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=c,d.latitudinal.value=s==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:m}=this;d.dTheta.value=_,d.mipInt.value=m-i;const y=this._sizeLods[r],R=3*y*(r>m-ko?r-m+ko:0),A=4*(this._cubeSize-y);_l(n,R,A,3*y,2*y),l.setRenderTarget(n),l.render(h,hf)}}function oC(t){const e=[],n=[],i=[];let r=t;const o=t-ko+1+Og.length;for(let s=0;s<o;s++){const a=Math.pow(2,r);n.push(a);let l=1/a;s>t-ko?l=Og[s-t+ko-1]:s===0&&(l=0),i.push(l);const u=1/(a-2),f=-u,h=1+u,d=[f,f,h,f,h,h,f,f,h,h,f,h],p=6,_=6,x=3,g=2,c=1,v=new Float32Array(x*_*p),m=new Float32Array(g*_*p),y=new Float32Array(c*_*p);for(let A=0;A<p;A++){const M=A%3*2/3-1,N=A>2?0:-1,E=[M,N,0,M+2/3,N,0,M+2/3,N+1,0,M,N,0,M+2/3,N+1,0,M,N+1,0];v.set(E,x*_*A),m.set(d,g*_*A);const w=[A,A,A,A,A,A];y.set(w,c*_*A)}const R=new zi;R.setAttribute("position",new ii(v,x)),R.setAttribute("uv",new ii(m,g)),R.setAttribute("faceIndex",new ii(y,c)),e.push(R),r>ko&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function zg(t,e,n){const i=new eo(t,e,n);return i.texture.mapping=Ku,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function _l(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function sC(t,e,n){const i=new Float32Array(Fr),r=new B(0,1,0);return new to({name:"SphericalGaussianBlur",defines:{n:Fr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Qh(),fragmentShader:`

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
		`,blending:dr,depthTest:!1,depthWrite:!1})}function Gg(){return new to({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Qh(),fragmentShader:`

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
		`,blending:dr,depthTest:!1,depthWrite:!1})}function Vg(){return new to({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Qh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:dr,depthTest:!1,depthWrite:!1})}function Qh(){return`

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
	`}function aC(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===bd||l===Pd,f=l===ss||l===as;if(u||f)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return n===null&&(n=new Hg(t)),h=u?n.fromEquirectangular(a,h):n.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{const h=a.image;if(u&&h&&h.height>0||f&&h&&r(h)){n===null&&(n=new Hg(t));const d=u?n.fromEquirectangular(a):n.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",o),d.texture}else return null}}}return a}function r(a){let l=0;const u=6;for(let f=0;f<u;f++)a[f]!==void 0&&l++;return l===u}function o(a){const l=a.target;l.removeEventListener("dispose",o);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function s(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:s}}function lC(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?(n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance")):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function uC(t,e,n,i){const r={},o=new WeakMap;function s(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const _ in d.attributes)e.remove(d.attributes[_]);for(const _ in d.morphAttributes){const x=d.morphAttributes[_];for(let g=0,c=x.length;g<c;g++)e.remove(x[g])}d.removeEventListener("dispose",s),delete r[d.id];const p=o.get(d);p&&(e.remove(p),o.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function a(h,d){return r[d.id]===!0||(d.addEventListener("dispose",s),r[d.id]=!0,n.memory.geometries++),d}function l(h){const d=h.attributes;for(const _ in d)e.update(d[_],t.ARRAY_BUFFER);const p=h.morphAttributes;for(const _ in p){const x=p[_];for(let g=0,c=x.length;g<c;g++)e.update(x[g],t.ARRAY_BUFFER)}}function u(h){const d=[],p=h.index,_=h.attributes.position;let x=0;if(p!==null){const v=p.array;x=p.version;for(let m=0,y=v.length;m<y;m+=3){const R=v[m+0],A=v[m+1],M=v[m+2];d.push(R,A,A,M,M,R)}}else if(_!==void 0){const v=_.array;x=_.version;for(let m=0,y=v.length/3-1;m<y;m+=3){const R=m+0,A=m+1,M=m+2;d.push(R,A,A,M,M,R)}}else return;const g=new(P1(d)?O1:F1)(d,1);g.version=x;const c=o.get(h);c&&e.remove(c),o.set(h,g)}function f(h){const d=o.get(h);if(d){const p=h.index;p!==null&&d.version<p.version&&u(h)}else u(h);return o.get(h)}return{get:a,update:l,getWireframeAttribute:f}}function cC(t,e,n,i){const r=i.isWebGL2;let o;function s(p){o=p}let a,l;function u(p){a=p.type,l=p.bytesPerElement}function f(p,_){t.drawElements(o,_,a,p*l),n.update(_,o,1)}function h(p,_,x){if(x===0)return;let g,c;if(r)g=t,c="drawElementsInstanced";else if(g=e.get("ANGLE_instanced_arrays"),c="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[c](o,_,a,p*l,x),n.update(_,o,x)}function d(p,_,x){if(x===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let c=0;c<x;c++)this.render(p[c]/l,_[c]);else{g.multiDrawElementsWEBGL(o,_,0,a,p,0,x);let c=0;for(let v=0;v<x;v++)c+=_[v];n.update(c,o,1)}}this.setMode=s,this.setIndex=u,this.render=f,this.renderInstances=h,this.renderMultiDraw=d}function fC(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,s,a){switch(n.calls++,s){case t.TRIANGLES:n.triangles+=a*(o/3);break;case t.LINES:n.lines+=a*(o/2);break;case t.LINE_STRIP:n.lines+=a*(o-1);break;case t.LINE_LOOP:n.lines+=a*o;break;case t.POINTS:n.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function dC(t,e){return t[0]-e[0]}function hC(t,e){return Math.abs(e[1])-Math.abs(t[1])}function pC(t,e,n){const i={},r=new Float32Array(8),o=new WeakMap,s=new Ht,a=[];for(let u=0;u<8;u++)a[u]=[u,0];function l(u,f,h){const d=u.morphTargetInfluences;if(e.isWebGL2===!0){const p=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,_=p!==void 0?p.length:0;let x=o.get(f);if(x===void 0||x.count!==_){let P=function(){$.dispose(),o.delete(f),f.removeEventListener("dispose",P)};x!==void 0&&x.texture.dispose();const v=f.morphAttributes.position!==void 0,m=f.morphAttributes.normal!==void 0,y=f.morphAttributes.color!==void 0,R=f.morphAttributes.position||[],A=f.morphAttributes.normal||[],M=f.morphAttributes.color||[];let N=0;v===!0&&(N=1),m===!0&&(N=2),y===!0&&(N=3);let E=f.attributes.position.count*N,w=1;E>e.maxTextureSize&&(w=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const F=new Float32Array(E*w*4*_),$=new D1(F,E,w,_);$.type=ir,$.needsUpdate=!0;const ee=N*4;for(let O=0;O<_;O++){const X=R[O],q=A[O],L=M[O],D=E*w*4*O;for(let G=0;G<X.count;G++){const j=G*ee;v===!0&&(s.fromBufferAttribute(X,G),F[D+j+0]=s.x,F[D+j+1]=s.y,F[D+j+2]=s.z,F[D+j+3]=0),m===!0&&(s.fromBufferAttribute(q,G),F[D+j+4]=s.x,F[D+j+5]=s.y,F[D+j+6]=s.z,F[D+j+7]=0),y===!0&&(s.fromBufferAttribute(L,G),F[D+j+8]=s.x,F[D+j+9]=s.y,F[D+j+10]=s.z,F[D+j+11]=L.itemSize===4?s.w:1)}}x={count:_,texture:$,size:new Ze(E,w)},o.set(f,x),f.addEventListener("dispose",P)}let g=0;for(let v=0;v<d.length;v++)g+=d[v];const c=f.morphTargetsRelative?1:1-g;h.getUniforms().setValue(t,"morphTargetBaseInfluence",c),h.getUniforms().setValue(t,"morphTargetInfluences",d),h.getUniforms().setValue(t,"morphTargetsTexture",x.texture,n),h.getUniforms().setValue(t,"morphTargetsTextureSize",x.size)}else{const p=d===void 0?0:d.length;let _=i[f.id];if(_===void 0||_.length!==p){_=[];for(let m=0;m<p;m++)_[m]=[m,0];i[f.id]=_}for(let m=0;m<p;m++){const y=_[m];y[0]=m,y[1]=d[m]}_.sort(hC);for(let m=0;m<8;m++)m<p&&_[m][1]?(a[m][0]=_[m][0],a[m][1]=_[m][1]):(a[m][0]=Number.MAX_SAFE_INTEGER,a[m][1]=0);a.sort(dC);const x=f.morphAttributes.position,g=f.morphAttributes.normal;let c=0;for(let m=0;m<8;m++){const y=a[m],R=y[0],A=y[1];R!==Number.MAX_SAFE_INTEGER&&A?(x&&f.getAttribute("morphTarget"+m)!==x[R]&&f.setAttribute("morphTarget"+m,x[R]),g&&f.getAttribute("morphNormal"+m)!==g[R]&&f.setAttribute("morphNormal"+m,g[R]),r[m]=A,c+=A):(x&&f.hasAttribute("morphTarget"+m)===!0&&f.deleteAttribute("morphTarget"+m),g&&f.hasAttribute("morphNormal"+m)===!0&&f.deleteAttribute("morphNormal"+m),r[m]=0)}const v=f.morphTargetsRelative?1:1-c;h.getUniforms().setValue(t,"morphTargetBaseInfluence",v),h.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function mC(t,e,n,i){let r=new WeakMap;function o(l){const u=i.render.frame,f=l.geometry,h=e.get(l,f);if(r.get(h)!==u&&(e.update(h),r.set(h,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==u&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==u&&(d.update(),r.set(d,u))}return h}function s(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:o,dispose:s}}class V1 extends wn{constructor(e,n,i,r,o,s,a,l,u,f){if(f=f!==void 0?f:Wr,f!==Wr&&f!==ls)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&f===Wr&&(i=nr),i===void 0&&f===ls&&(i=Vr),super(null,r,o,s,a,l,f,i,u),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:an,this.minFilter=l!==void 0?l:an,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const W1=new wn,X1=new V1(1,1);X1.compareFunction=b1;const $1=new D1,j1=new Q2,Y1=new H1,Wg=[],Xg=[],$g=new Float32Array(16),jg=new Float32Array(9),Yg=new Float32Array(4);function xs(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let o=Wg[r];if(o===void 0&&(o=new Float32Array(r),Wg[r]=o),e!==0){i.toArray(o,0);for(let s=1,a=0;s!==e;++s)a+=n,t[s].toArray(o,a)}return o}function bt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Pt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function nc(t,e){let n=Xg[e];n===void 0&&(n=new Int32Array(e),Xg[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function gC(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function vC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(bt(n,e))return;t.uniform2fv(this.addr,e),Pt(n,e)}}function _C(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(bt(n,e))return;t.uniform3fv(this.addr,e),Pt(n,e)}}function xC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(bt(n,e))return;t.uniform4fv(this.addr,e),Pt(n,e)}}function yC(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(bt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Pt(n,e)}else{if(bt(n,i))return;Yg.set(i),t.uniformMatrix2fv(this.addr,!1,Yg),Pt(n,i)}}function SC(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(bt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Pt(n,e)}else{if(bt(n,i))return;jg.set(i),t.uniformMatrix3fv(this.addr,!1,jg),Pt(n,i)}}function EC(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(bt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Pt(n,e)}else{if(bt(n,i))return;$g.set(i),t.uniformMatrix4fv(this.addr,!1,$g),Pt(n,i)}}function MC(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function TC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(bt(n,e))return;t.uniform2iv(this.addr,e),Pt(n,e)}}function wC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(bt(n,e))return;t.uniform3iv(this.addr,e),Pt(n,e)}}function AC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(bt(n,e))return;t.uniform4iv(this.addr,e),Pt(n,e)}}function CC(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function RC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(bt(n,e))return;t.uniform2uiv(this.addr,e),Pt(n,e)}}function bC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(bt(n,e))return;t.uniform3uiv(this.addr,e),Pt(n,e)}}function PC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(bt(n,e))return;t.uniform4uiv(this.addr,e),Pt(n,e)}}function LC(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);const o=this.type===t.SAMPLER_2D_SHADOW?X1:W1;n.setTexture2D(e||o,r)}function NC(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||j1,r)}function DC(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Y1,r)}function IC(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||$1,r)}function UC(t){switch(t){case 5126:return gC;case 35664:return vC;case 35665:return _C;case 35666:return xC;case 35674:return yC;case 35675:return SC;case 35676:return EC;case 5124:case 35670:return MC;case 35667:case 35671:return TC;case 35668:case 35672:return wC;case 35669:case 35673:return AC;case 5125:return CC;case 36294:return RC;case 36295:return bC;case 36296:return PC;case 35678:case 36198:case 36298:case 36306:case 35682:return LC;case 35679:case 36299:case 36307:return NC;case 35680:case 36300:case 36308:case 36293:return DC;case 36289:case 36303:case 36311:case 36292:return IC}}function FC(t,e){t.uniform1fv(this.addr,e)}function OC(t,e){const n=xs(e,this.size,2);t.uniform2fv(this.addr,n)}function BC(t,e){const n=xs(e,this.size,3);t.uniform3fv(this.addr,n)}function kC(t,e){const n=xs(e,this.size,4);t.uniform4fv(this.addr,n)}function HC(t,e){const n=xs(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function zC(t,e){const n=xs(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function GC(t,e){const n=xs(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function VC(t,e){t.uniform1iv(this.addr,e)}function WC(t,e){t.uniform2iv(this.addr,e)}function XC(t,e){t.uniform3iv(this.addr,e)}function $C(t,e){t.uniform4iv(this.addr,e)}function jC(t,e){t.uniform1uiv(this.addr,e)}function YC(t,e){t.uniform2uiv(this.addr,e)}function qC(t,e){t.uniform3uiv(this.addr,e)}function ZC(t,e){t.uniform4uiv(this.addr,e)}function KC(t,e,n){const i=this.cache,r=e.length,o=nc(n,r);bt(i,o)||(t.uniform1iv(this.addr,o),Pt(i,o));for(let s=0;s!==r;++s)n.setTexture2D(e[s]||W1,o[s])}function QC(t,e,n){const i=this.cache,r=e.length,o=nc(n,r);bt(i,o)||(t.uniform1iv(this.addr,o),Pt(i,o));for(let s=0;s!==r;++s)n.setTexture3D(e[s]||j1,o[s])}function JC(t,e,n){const i=this.cache,r=e.length,o=nc(n,r);bt(i,o)||(t.uniform1iv(this.addr,o),Pt(i,o));for(let s=0;s!==r;++s)n.setTextureCube(e[s]||Y1,o[s])}function eR(t,e,n){const i=this.cache,r=e.length,o=nc(n,r);bt(i,o)||(t.uniform1iv(this.addr,o),Pt(i,o));for(let s=0;s!==r;++s)n.setTexture2DArray(e[s]||$1,o[s])}function tR(t){switch(t){case 5126:return FC;case 35664:return OC;case 35665:return BC;case 35666:return kC;case 35674:return HC;case 35675:return zC;case 35676:return GC;case 5124:case 35670:return VC;case 35667:case 35671:return WC;case 35668:case 35672:return XC;case 35669:case 35673:return $C;case 5125:return jC;case 36294:return YC;case 36295:return qC;case 36296:return ZC;case 35678:case 36198:case 36298:case 36306:case 35682:return KC;case 35679:case 36299:case 36307:return QC;case 35680:case 36300:case 36308:case 36293:return JC;case 36289:case 36303:case 36311:case 36292:return eR}}class nR{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=UC(n.type)}}class iR{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=tR(n.type)}}class rR{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let o=0,s=r.length;o!==s;++o){const a=r[o];a.setValue(e,n[a.id],i)}}}const vf=/(\w+)(\])?(\[|\.)?/g;function qg(t,e){t.seq.push(e),t.map[e.id]=e}function oR(t,e,n){const i=t.name,r=i.length;for(vf.lastIndex=0;;){const o=vf.exec(i),s=vf.lastIndex;let a=o[1];const l=o[2]==="]",u=o[3];if(l&&(a=a|0),u===void 0||u==="["&&s+2===r){qg(n,u===void 0?new nR(a,t,e):new iR(a,t,e));break}else{let h=n.map[a];h===void 0&&(h=new rR(a),qg(n,h)),n=h}}}class Fl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const o=e.getActiveUniform(n,r),s=e.getUniformLocation(n,o.name);oR(o,s,this)}}setValue(e,n,i,r){const o=this.map[n];o!==void 0&&o.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let o=0,s=n.length;o!==s;++o){const a=n[o],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,o=e.length;r!==o;++r){const s=e[r];s.id in n&&i.push(s)}return i}}function Zg(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const sR=37297;let aR=0;function lR(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),o=Math.min(e+6,n.length);for(let s=r;s<o;s++){const a=s+1;i.push(`${a===e?">":" "} ${a}: ${n[s]}`)}return i.join(`
`)}function uR(t){const e=nt.getPrimaries(nt.workingColorSpace),n=nt.getPrimaries(t);let i;switch(e===n?i="":e===mu&&n===pu?i="LinearDisplayP3ToLinearSRGB":e===pu&&n===mu&&(i="LinearSRGBToLinearDisplayP3"),t){case ki:case Qu:return[i,"LinearTransferOETF"];case kt:case jh:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function Kg(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const s=parseInt(o[1]);return n.toUpperCase()+`

`+r+`

`+lR(t.getShaderSource(e),s)}else return r}function cR(t,e){const n=uR(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function fR(t,e){let n;switch(e){case a2:n="Linear";break;case l2:n="Reinhard";break;case u2:n="OptimizedCineon";break;case c2:n="ACESFilmic";break;case d2:n="AgX";break;case f2:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function dR(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ho).join(`
`)}function hR(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Ho).join(`
`)}function pR(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function mR(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const o=t.getActiveAttrib(e,r),s=o.name;let a=1;o.type===t.FLOAT_MAT2&&(a=2),o.type===t.FLOAT_MAT3&&(a=3),o.type===t.FLOAT_MAT4&&(a=4),n[s]={type:o.type,location:t.getAttribLocation(e,s),locationSize:a}}return n}function Ho(t){return t!==""}function Qg(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Jg(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const gR=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ud(t){return t.replace(gR,_R)}const vR=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function _R(t,e){let n=Ue[e];if(n===void 0){const i=vR.get(e);if(i!==void 0)n=Ue[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Ud(n)}const xR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function e0(t){return t.replace(xR,yR)}function yR(t,e,n,i){let r="";for(let o=parseInt(e);o<parseInt(n);o++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return r}function t0(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function SR(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===_1?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===UM?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Ai&&(e="SHADOWMAP_TYPE_VSM"),e}function ER(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case ss:case as:e="ENVMAP_TYPE_CUBE";break;case Ku:e="ENVMAP_TYPE_CUBE_UV";break}return e}function MR(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case as:e="ENVMAP_MODE_REFRACTION";break}return e}function TR(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case x1:e="ENVMAP_BLENDING_MULTIPLY";break;case o2:e="ENVMAP_BLENDING_MIX";break;case s2:e="ENVMAP_BLENDING_ADD";break}return e}function wR(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function AR(t,e,n,i){const r=t.getContext(),o=n.defines;let s=n.vertexShader,a=n.fragmentShader;const l=SR(n),u=ER(n),f=MR(n),h=TR(n),d=wR(n),p=n.isWebGL2?"":dR(n),_=hR(n),x=pR(o),g=r.createProgram();let c,v,m=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(c=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(Ho).join(`
`),c.length>0&&(c+=`
`),v=[p,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(Ho).join(`
`),v.length>0&&(v+=`
`)):(c=[t0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ho).join(`
`),v=[p,t0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",n.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==hr?"#define TONE_MAPPING":"",n.toneMapping!==hr?Ue.tonemapping_pars_fragment:"",n.toneMapping!==hr?fR("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ue.colorspace_pars_fragment,cR("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Ho).join(`
`)),s=Ud(s),s=Qg(s,n),s=Jg(s,n),a=Ud(a),a=Qg(a,n),a=Jg(a,n),s=e0(s),a=e0(a),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,c=[_,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+c,v=["precision mediump sampler2DArray;","#define varying in",n.glslVersion===xg?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===xg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const y=m+c+s,R=m+v+a,A=Zg(r,r.VERTEX_SHADER,y),M=Zg(r,r.FRAGMENT_SHADER,R);r.attachShader(g,A),r.attachShader(g,M),n.index0AttributeName!==void 0?r.bindAttribLocation(g,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g);function N($){if(t.debug.checkShaderErrors){const ee=r.getProgramInfoLog(g).trim(),P=r.getShaderInfoLog(A).trim(),O=r.getShaderInfoLog(M).trim();let X=!0,q=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(X=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,g,A,M);else{const L=Kg(r,A,"vertex"),D=Kg(r,M,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Program Info Log: `+ee+`
`+L+`
`+D)}else ee!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ee):(P===""||O==="")&&(q=!1);q&&($.diagnostics={runnable:X,programLog:ee,vertexShader:{log:P,prefix:c},fragmentShader:{log:O,prefix:v}})}r.deleteShader(A),r.deleteShader(M),E=new Fl(r,g),w=mR(r,g)}let E;this.getUniforms=function(){return E===void 0&&N(this),E};let w;this.getAttributes=function(){return w===void 0&&N(this),w};let F=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return F===!1&&(F=r.getProgramParameter(g,sR)),F},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=aR++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=A,this.fragmentShader=M,this}let CR=0;class RR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),o=this._getShaderStage(i),s=this._getShaderCacheForMaterial(e);return s.has(r)===!1&&(s.add(r),r.usedTimes++),s.has(o)===!1&&(s.add(o),o.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new bR(e),n.set(e,i)),i}}class bR{constructor(e){this.id=CR++,this.code=e,this.usedTimes=0}}function PR(t,e,n,i,r,o,s){const a=new Zh,l=new RR,u=[],f=r.isWebGL2,h=r.logarithmicDepthBuffer,d=r.vertexTextures;let p=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(E){return E===0?"uv":`uv${E}`}function g(E,w,F,$,ee){const P=$.fog,O=ee.geometry,X=E.isMeshStandardMaterial?$.environment:null,q=(E.isMeshStandardMaterial?n:e).get(E.envMap||X),L=q&&q.mapping===Ku?q.image.height:null,D=_[E.type];E.precision!==null&&(p=r.getMaxPrecision(E.precision),p!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",p,"instead."));const G=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,j=G!==void 0?G.length:0;let Z=0;O.morphAttributes.position!==void 0&&(Z=1),O.morphAttributes.normal!==void 0&&(Z=2),O.morphAttributes.color!==void 0&&(Z=3);let W,Y,oe,ue;if(D){const en=di[D];W=en.vertexShader,Y=en.fragmentShader}else W=E.vertexShader,Y=E.fragmentShader,l.update(E),oe=l.getVertexShaderID(E),ue=l.getFragmentShaderID(E);const de=t.getRenderTarget(),we=ee.isInstancedMesh===!0,Me=ee.isBatchedMesh===!0,ye=!!E.map,He=!!E.matcap,U=!!q,Jt=!!E.aoMap,Se=!!E.lightMap,Pe=!!E.bumpMap,ge=!!E.normalMap,pt=!!E.displacementMap,Oe=!!E.emissiveMap,C=!!E.metalnessMap,S=!!E.roughnessMap,H=E.anisotropy>0,te=E.clearcoat>0,Q=E.iridescence>0,ne=E.sheen>0,ve=E.transmission>0,le=H&&!!E.anisotropyMap,he=te&&!!E.clearcoatMap,Ae=te&&!!E.clearcoatNormalMap,Be=te&&!!E.clearcoatRoughnessMap,K=Q&&!!E.iridescenceMap,tt=Q&&!!E.iridescenceThicknessMap,We=ne&&!!E.sheenColorMap,be=ne&&!!E.sheenRoughnessMap,xe=!!E.specularMap,pe=!!E.specularColorMap,Ie=!!E.specularIntensityMap,Qe=ve&&!!E.transmissionMap,xt=ve&&!!E.thicknessMap,ze=!!E.gradientMap,ie=!!E.alphaMap,b=E.alphaTest>0,se=!!E.alphaHash,ae=!!E.extensions,Ce=!!O.attributes.uv1,Ee=!!O.attributes.uv2,rt=!!O.attributes.uv3;let ot=hr;return E.toneMapped&&(de===null||de.isXRRenderTarget===!0)&&(ot=t.toneMapping),{isWebGL2:f,shaderID:D,shaderType:E.type,shaderName:E.name,vertexShader:W,fragmentShader:Y,defines:E.defines,customVertexShaderID:oe,customFragmentShaderID:ue,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:p,batching:Me,instancing:we,instancingColor:we&&ee.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:de===null?t.outputColorSpace:de.isXRRenderTarget===!0?de.texture.colorSpace:ki,map:ye,matcap:He,envMap:U,envMapMode:U&&q.mapping,envMapCubeUVHeight:L,aoMap:Jt,lightMap:Se,bumpMap:Pe,normalMap:ge,displacementMap:d&&pt,emissiveMap:Oe,normalMapObjectSpace:ge&&E.normalMapType===w2,normalMapTangentSpace:ge&&E.normalMapType===T2,metalnessMap:C,roughnessMap:S,anisotropy:H,anisotropyMap:le,clearcoat:te,clearcoatMap:he,clearcoatNormalMap:Ae,clearcoatRoughnessMap:Be,iridescence:Q,iridescenceMap:K,iridescenceThicknessMap:tt,sheen:ne,sheenColorMap:We,sheenRoughnessMap:be,specularMap:xe,specularColorMap:pe,specularIntensityMap:Ie,transmission:ve,transmissionMap:Qe,thicknessMap:xt,gradientMap:ze,opaque:E.transparent===!1&&E.blending===qo,alphaMap:ie,alphaTest:b,alphaHash:se,combine:E.combine,mapUv:ye&&x(E.map.channel),aoMapUv:Jt&&x(E.aoMap.channel),lightMapUv:Se&&x(E.lightMap.channel),bumpMapUv:Pe&&x(E.bumpMap.channel),normalMapUv:ge&&x(E.normalMap.channel),displacementMapUv:pt&&x(E.displacementMap.channel),emissiveMapUv:Oe&&x(E.emissiveMap.channel),metalnessMapUv:C&&x(E.metalnessMap.channel),roughnessMapUv:S&&x(E.roughnessMap.channel),anisotropyMapUv:le&&x(E.anisotropyMap.channel),clearcoatMapUv:he&&x(E.clearcoatMap.channel),clearcoatNormalMapUv:Ae&&x(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Be&&x(E.clearcoatRoughnessMap.channel),iridescenceMapUv:K&&x(E.iridescenceMap.channel),iridescenceThicknessMapUv:tt&&x(E.iridescenceThicknessMap.channel),sheenColorMapUv:We&&x(E.sheenColorMap.channel),sheenRoughnessMapUv:be&&x(E.sheenRoughnessMap.channel),specularMapUv:xe&&x(E.specularMap.channel),specularColorMapUv:pe&&x(E.specularColorMap.channel),specularIntensityMapUv:Ie&&x(E.specularIntensityMap.channel),transmissionMapUv:Qe&&x(E.transmissionMap.channel),thicknessMapUv:xt&&x(E.thicknessMap.channel),alphaMapUv:ie&&x(E.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(ge||H),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,vertexUv1s:Ce,vertexUv2s:Ee,vertexUv3s:rt,pointsUvs:ee.isPoints===!0&&!!O.attributes.uv&&(ye||ie),fog:!!P,useFog:E.fog===!0,fogExp2:P&&P.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:ee.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:j,morphTextureStride:Z,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:E.dithering,shadowMapEnabled:t.shadowMap.enabled&&F.length>0,shadowMapType:t.shadowMap.type,toneMapping:ot,useLegacyLights:t._useLegacyLights,decodeVideoTexture:ye&&E.map.isVideoTexture===!0&&nt.getTransfer(E.map.colorSpace)===ct,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Pi,flipSided:E.side===vn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionDerivatives:ae&&E.extensions.derivatives===!0,extensionFragDepth:ae&&E.extensions.fragDepth===!0,extensionDrawBuffers:ae&&E.extensions.drawBuffers===!0,extensionShaderTextureLOD:ae&&E.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ae&&E.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:f||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:f||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:f||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()}}function c(E){const w=[];if(E.shaderID?w.push(E.shaderID):(w.push(E.customVertexShaderID),w.push(E.customFragmentShaderID)),E.defines!==void 0)for(const F in E.defines)w.push(F),w.push(E.defines[F]);return E.isRawShaderMaterial===!1&&(v(w,E),m(w,E),w.push(t.outputColorSpace)),w.push(E.customProgramCacheKey),w.join()}function v(E,w){E.push(w.precision),E.push(w.outputColorSpace),E.push(w.envMapMode),E.push(w.envMapCubeUVHeight),E.push(w.mapUv),E.push(w.alphaMapUv),E.push(w.lightMapUv),E.push(w.aoMapUv),E.push(w.bumpMapUv),E.push(w.normalMapUv),E.push(w.displacementMapUv),E.push(w.emissiveMapUv),E.push(w.metalnessMapUv),E.push(w.roughnessMapUv),E.push(w.anisotropyMapUv),E.push(w.clearcoatMapUv),E.push(w.clearcoatNormalMapUv),E.push(w.clearcoatRoughnessMapUv),E.push(w.iridescenceMapUv),E.push(w.iridescenceThicknessMapUv),E.push(w.sheenColorMapUv),E.push(w.sheenRoughnessMapUv),E.push(w.specularMapUv),E.push(w.specularColorMapUv),E.push(w.specularIntensityMapUv),E.push(w.transmissionMapUv),E.push(w.thicknessMapUv),E.push(w.combine),E.push(w.fogExp2),E.push(w.sizeAttenuation),E.push(w.morphTargetsCount),E.push(w.morphAttributeCount),E.push(w.numDirLights),E.push(w.numPointLights),E.push(w.numSpotLights),E.push(w.numSpotLightMaps),E.push(w.numHemiLights),E.push(w.numRectAreaLights),E.push(w.numDirLightShadows),E.push(w.numPointLightShadows),E.push(w.numSpotLightShadows),E.push(w.numSpotLightShadowsWithMaps),E.push(w.numLightProbes),E.push(w.shadowMapType),E.push(w.toneMapping),E.push(w.numClippingPlanes),E.push(w.numClipIntersection),E.push(w.depthPacking)}function m(E,w){a.disableAll(),w.isWebGL2&&a.enable(0),w.supportsVertexTextures&&a.enable(1),w.instancing&&a.enable(2),w.instancingColor&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),w.batching&&a.enable(19),E.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.skinning&&a.enable(4),w.morphTargets&&a.enable(5),w.morphNormals&&a.enable(6),w.morphColors&&a.enable(7),w.premultipliedAlpha&&a.enable(8),w.shadowMapEnabled&&a.enable(9),w.useLegacyLights&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),E.push(a.mask)}function y(E){const w=_[E.type];let F;if(w){const $=di[w];F=fT.clone($.uniforms)}else F=E.uniforms;return F}function R(E,w){let F;for(let $=0,ee=u.length;$<ee;$++){const P=u[$];if(P.cacheKey===w){F=P,++F.usedTimes;break}}return F===void 0&&(F=new AR(t,w,E,o),u.push(F)),F}function A(E){if(--E.usedTimes===0){const w=u.indexOf(E);u[w]=u[u.length-1],u.pop(),E.destroy()}}function M(E){l.remove(E)}function N(){l.dispose()}return{getParameters:g,getProgramCacheKey:c,getUniforms:y,acquireProgram:R,releaseProgram:A,releaseShaderCache:M,programs:u,dispose:N}}function LR(){let t=new WeakMap;function e(o){let s=t.get(o);return s===void 0&&(s={},t.set(o,s)),s}function n(o){t.delete(o)}function i(o,s,a){t.get(o)[s]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function NR(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function n0(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function i0(){const t=[];let e=0;const n=[],i=[],r=[];function o(){e=0,n.length=0,i.length=0,r.length=0}function s(h,d,p,_,x,g){let c=t[e];return c===void 0?(c={id:h.id,object:h,geometry:d,material:p,groupOrder:_,renderOrder:h.renderOrder,z:x,group:g},t[e]=c):(c.id=h.id,c.object=h,c.geometry=d,c.material=p,c.groupOrder=_,c.renderOrder=h.renderOrder,c.z=x,c.group=g),e++,c}function a(h,d,p,_,x,g){const c=s(h,d,p,_,x,g);p.transmission>0?i.push(c):p.transparent===!0?r.push(c):n.push(c)}function l(h,d,p,_,x,g){const c=s(h,d,p,_,x,g);p.transmission>0?i.unshift(c):p.transparent===!0?r.unshift(c):n.unshift(c)}function u(h,d){n.length>1&&n.sort(h||NR),i.length>1&&i.sort(d||n0),r.length>1&&r.sort(d||n0)}function f(){for(let h=e,d=t.length;h<d;h++){const p=t[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:o,push:a,unshift:l,finish:f,sort:u}}function DR(){let t=new WeakMap;function e(i,r){const o=t.get(i);let s;return o===void 0?(s=new i0,t.set(i,[s])):r>=o.length?(s=new i0,o.push(s)):s=o[r],s}function n(){t=new WeakMap}return{get:e,dispose:n}}function IR(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new B,color:new it};break;case"SpotLight":n={position:new B,direction:new B,color:new it,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new B,color:new it,distance:0,decay:0};break;case"HemisphereLight":n={direction:new B,skyColor:new it,groundColor:new it};break;case"RectAreaLight":n={color:new it,position:new B,halfWidth:new B,halfHeight:new B};break}return t[e.id]=n,n}}}function UR(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let FR=0;function OR(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function BR(t,e){const n=new IR,i=UR(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let f=0;f<9;f++)r.probe.push(new B);const o=new B,s=new Gt,a=new Gt;function l(f,h){let d=0,p=0,_=0;for(let $=0;$<9;$++)r.probe[$].set(0,0,0);let x=0,g=0,c=0,v=0,m=0,y=0,R=0,A=0,M=0,N=0,E=0;f.sort(OR);const w=h===!0?Math.PI:1;for(let $=0,ee=f.length;$<ee;$++){const P=f[$],O=P.color,X=P.intensity,q=P.distance,L=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)d+=O.r*X*w,p+=O.g*X*w,_+=O.b*X*w;else if(P.isLightProbe){for(let D=0;D<9;D++)r.probe[D].addScaledVector(P.sh.coefficients[D],X);E++}else if(P.isDirectionalLight){const D=n.get(P);if(D.color.copy(P.color).multiplyScalar(P.intensity*w),P.castShadow){const G=P.shadow,j=i.get(P);j.shadowBias=G.bias,j.shadowNormalBias=G.normalBias,j.shadowRadius=G.radius,j.shadowMapSize=G.mapSize,r.directionalShadow[x]=j,r.directionalShadowMap[x]=L,r.directionalShadowMatrix[x]=P.shadow.matrix,y++}r.directional[x]=D,x++}else if(P.isSpotLight){const D=n.get(P);D.position.setFromMatrixPosition(P.matrixWorld),D.color.copy(O).multiplyScalar(X*w),D.distance=q,D.coneCos=Math.cos(P.angle),D.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),D.decay=P.decay,r.spot[c]=D;const G=P.shadow;if(P.map&&(r.spotLightMap[M]=P.map,M++,G.updateMatrices(P),P.castShadow&&N++),r.spotLightMatrix[c]=G.matrix,P.castShadow){const j=i.get(P);j.shadowBias=G.bias,j.shadowNormalBias=G.normalBias,j.shadowRadius=G.radius,j.shadowMapSize=G.mapSize,r.spotShadow[c]=j,r.spotShadowMap[c]=L,A++}c++}else if(P.isRectAreaLight){const D=n.get(P);D.color.copy(O).multiplyScalar(X),D.halfWidth.set(P.width*.5,0,0),D.halfHeight.set(0,P.height*.5,0),r.rectArea[v]=D,v++}else if(P.isPointLight){const D=n.get(P);if(D.color.copy(P.color).multiplyScalar(P.intensity*w),D.distance=P.distance,D.decay=P.decay,P.castShadow){const G=P.shadow,j=i.get(P);j.shadowBias=G.bias,j.shadowNormalBias=G.normalBias,j.shadowRadius=G.radius,j.shadowMapSize=G.mapSize,j.shadowCameraNear=G.camera.near,j.shadowCameraFar=G.camera.far,r.pointShadow[g]=j,r.pointShadowMap[g]=L,r.pointShadowMatrix[g]=P.shadow.matrix,R++}r.point[g]=D,g++}else if(P.isHemisphereLight){const D=n.get(P);D.skyColor.copy(P.color).multiplyScalar(X*w),D.groundColor.copy(P.groundColor).multiplyScalar(X*w),r.hemi[m]=D,m++}}v>0&&(e.isWebGL2?t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=re.LTC_FLOAT_1,r.rectAreaLTC2=re.LTC_FLOAT_2):(r.rectAreaLTC1=re.LTC_HALF_1,r.rectAreaLTC2=re.LTC_HALF_2):t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=re.LTC_FLOAT_1,r.rectAreaLTC2=re.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=re.LTC_HALF_1,r.rectAreaLTC2=re.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=d,r.ambient[1]=p,r.ambient[2]=_;const F=r.hash;(F.directionalLength!==x||F.pointLength!==g||F.spotLength!==c||F.rectAreaLength!==v||F.hemiLength!==m||F.numDirectionalShadows!==y||F.numPointShadows!==R||F.numSpotShadows!==A||F.numSpotMaps!==M||F.numLightProbes!==E)&&(r.directional.length=x,r.spot.length=c,r.rectArea.length=v,r.point.length=g,r.hemi.length=m,r.directionalShadow.length=y,r.directionalShadowMap.length=y,r.pointShadow.length=R,r.pointShadowMap.length=R,r.spotShadow.length=A,r.spotShadowMap.length=A,r.directionalShadowMatrix.length=y,r.pointShadowMatrix.length=R,r.spotLightMatrix.length=A+M-N,r.spotLightMap.length=M,r.numSpotLightShadowsWithMaps=N,r.numLightProbes=E,F.directionalLength=x,F.pointLength=g,F.spotLength=c,F.rectAreaLength=v,F.hemiLength=m,F.numDirectionalShadows=y,F.numPointShadows=R,F.numSpotShadows=A,F.numSpotMaps=M,F.numLightProbes=E,r.version=FR++)}function u(f,h){let d=0,p=0,_=0,x=0,g=0;const c=h.matrixWorldInverse;for(let v=0,m=f.length;v<m;v++){const y=f[v];if(y.isDirectionalLight){const R=r.directional[d];R.direction.setFromMatrixPosition(y.matrixWorld),o.setFromMatrixPosition(y.target.matrixWorld),R.direction.sub(o),R.direction.transformDirection(c),d++}else if(y.isSpotLight){const R=r.spot[_];R.position.setFromMatrixPosition(y.matrixWorld),R.position.applyMatrix4(c),R.direction.setFromMatrixPosition(y.matrixWorld),o.setFromMatrixPosition(y.target.matrixWorld),R.direction.sub(o),R.direction.transformDirection(c),_++}else if(y.isRectAreaLight){const R=r.rectArea[x];R.position.setFromMatrixPosition(y.matrixWorld),R.position.applyMatrix4(c),a.identity(),s.copy(y.matrixWorld),s.premultiply(c),a.extractRotation(s),R.halfWidth.set(y.width*.5,0,0),R.halfHeight.set(0,y.height*.5,0),R.halfWidth.applyMatrix4(a),R.halfHeight.applyMatrix4(a),x++}else if(y.isPointLight){const R=r.point[p];R.position.setFromMatrixPosition(y.matrixWorld),R.position.applyMatrix4(c),p++}else if(y.isHemisphereLight){const R=r.hemi[g];R.direction.setFromMatrixPosition(y.matrixWorld),R.direction.transformDirection(c),g++}}}return{setup:l,setupView:u,state:r}}function r0(t,e){const n=new BR(t,e),i=[],r=[];function o(){i.length=0,r.length=0}function s(h){i.push(h)}function a(h){r.push(h)}function l(h){n.setup(i,h)}function u(h){n.setupView(i,h)}return{init:o,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:u,pushLight:s,pushShadow:a}}function kR(t,e){let n=new WeakMap;function i(o,s=0){const a=n.get(o);let l;return a===void 0?(l=new r0(t,e),n.set(o,[l])):s>=a.length?(l=new r0(t,e),a.push(l)):l=a[s],l}function r(){n=new WeakMap}return{get:i,dispose:r}}class HR extends ec{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=E2,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class zR extends ec{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const GR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,VR=`uniform sampler2D shadow_pass;
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
}`;function WR(t,e,n){let i=new z1;const r=new Ze,o=new Ze,s=new Ht,a=new HR({depthPacking:M2}),l=new zR,u={},f=n.maxTextureSize,h={[_r]:vn,[vn]:_r,[Pi]:Pi},d=new to({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ze},radius:{value:4}},vertexShader:GR,fragmentShader:VR}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const _=new zi;_.setAttribute("position",new ii(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new mi(_,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=_1;let c=this.type;this.render=function(A,M,N){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||A.length===0)return;const E=t.getRenderTarget(),w=t.getActiveCubeFace(),F=t.getActiveMipmapLevel(),$=t.state;$.setBlending(dr),$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);const ee=c!==Ai&&this.type===Ai,P=c===Ai&&this.type!==Ai;for(let O=0,X=A.length;O<X;O++){const q=A[O],L=q.shadow;if(L===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(L.autoUpdate===!1&&L.needsUpdate===!1)continue;r.copy(L.mapSize);const D=L.getFrameExtents();if(r.multiply(D),o.copy(L.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(o.x=Math.floor(f/D.x),r.x=o.x*D.x,L.mapSize.x=o.x),r.y>f&&(o.y=Math.floor(f/D.y),r.y=o.y*D.y,L.mapSize.y=o.y)),L.map===null||ee===!0||P===!0){const j=this.type!==Ai?{minFilter:an,magFilter:an}:{};L.map!==null&&L.map.dispose(),L.map=new eo(r.x,r.y,j),L.map.texture.name=q.name+".shadowMap",L.camera.updateProjectionMatrix()}t.setRenderTarget(L.map),t.clear();const G=L.getViewportCount();for(let j=0;j<G;j++){const Z=L.getViewport(j);s.set(o.x*Z.x,o.y*Z.y,o.x*Z.z,o.y*Z.w),$.viewport(s),L.updateMatrices(q,j),i=L.getFrustum(),y(M,N,L.camera,q,this.type)}L.isPointLightShadow!==!0&&this.type===Ai&&v(L,N),L.needsUpdate=!1}c=this.type,g.needsUpdate=!1,t.setRenderTarget(E,w,F)};function v(A,M){const N=e.update(x);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new eo(r.x,r.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,t.setRenderTarget(A.mapPass),t.clear(),t.renderBufferDirect(M,null,N,d,x,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,t.setRenderTarget(A.map),t.clear(),t.renderBufferDirect(M,null,N,p,x,null)}function m(A,M,N,E){let w=null;const F=N.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(F!==void 0)w=F;else if(w=N.isPointLight===!0?l:a,t.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0){const $=w.uuid,ee=M.uuid;let P=u[$];P===void 0&&(P={},u[$]=P);let O=P[ee];O===void 0&&(O=w.clone(),P[ee]=O,M.addEventListener("dispose",R)),w=O}if(w.visible=M.visible,w.wireframe=M.wireframe,E===Ai?w.side=M.shadowSide!==null?M.shadowSide:M.side:w.side=M.shadowSide!==null?M.shadowSide:h[M.side],w.alphaMap=M.alphaMap,w.alphaTest=M.alphaTest,w.map=M.map,w.clipShadows=M.clipShadows,w.clippingPlanes=M.clippingPlanes,w.clipIntersection=M.clipIntersection,w.displacementMap=M.displacementMap,w.displacementScale=M.displacementScale,w.displacementBias=M.displacementBias,w.wireframeLinewidth=M.wireframeLinewidth,w.linewidth=M.linewidth,N.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const $=t.properties.get(w);$.light=N}return w}function y(A,M,N,E,w){if(A.visible===!1)return;if(A.layers.test(M.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&w===Ai)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,A.matrixWorld);const ee=e.update(A),P=A.material;if(Array.isArray(P)){const O=ee.groups;for(let X=0,q=O.length;X<q;X++){const L=O[X],D=P[L.materialIndex];if(D&&D.visible){const G=m(A,D,E,w);A.onBeforeShadow(t,A,M,N,ee,G,L),t.renderBufferDirect(N,null,ee,G,A,L),A.onAfterShadow(t,A,M,N,ee,G,L)}}}else if(P.visible){const O=m(A,P,E,w);A.onBeforeShadow(t,A,M,N,ee,O,null),t.renderBufferDirect(N,null,ee,O,A,null),A.onAfterShadow(t,A,M,N,ee,O,null)}}const $=A.children;for(let ee=0,P=$.length;ee<P;ee++)y($[ee],M,N,E,w)}function R(A){A.target.removeEventListener("dispose",R);for(const N in u){const E=u[N],w=A.target.uuid;w in E&&(E[w].dispose(),delete E[w])}}}function XR(t,e,n){const i=n.isWebGL2;function r(){let b=!1;const se=new Ht;let ae=null;const Ce=new Ht(0,0,0,0);return{setMask:function(Ee){ae!==Ee&&!b&&(t.colorMask(Ee,Ee,Ee,Ee),ae=Ee)},setLocked:function(Ee){b=Ee},setClear:function(Ee,rt,ot,Lt,en){en===!0&&(Ee*=Lt,rt*=Lt,ot*=Lt),se.set(Ee,rt,ot,Lt),Ce.equals(se)===!1&&(t.clearColor(Ee,rt,ot,Lt),Ce.copy(se))},reset:function(){b=!1,ae=null,Ce.set(-1,0,0,0)}}}function o(){let b=!1,se=null,ae=null,Ce=null;return{setTest:function(Ee){Ee?Me(t.DEPTH_TEST):ye(t.DEPTH_TEST)},setMask:function(Ee){se!==Ee&&!b&&(t.depthMask(Ee),se=Ee)},setFunc:function(Ee){if(ae!==Ee){switch(Ee){case QM:t.depthFunc(t.NEVER);break;case JM:t.depthFunc(t.ALWAYS);break;case e2:t.depthFunc(t.LESS);break;case du:t.depthFunc(t.LEQUAL);break;case t2:t.depthFunc(t.EQUAL);break;case n2:t.depthFunc(t.GEQUAL);break;case i2:t.depthFunc(t.GREATER);break;case r2:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ae=Ee}},setLocked:function(Ee){b=Ee},setClear:function(Ee){Ce!==Ee&&(t.clearDepth(Ee),Ce=Ee)},reset:function(){b=!1,se=null,ae=null,Ce=null}}}function s(){let b=!1,se=null,ae=null,Ce=null,Ee=null,rt=null,ot=null,Lt=null,en=null;return{setTest:function(st){b||(st?Me(t.STENCIL_TEST):ye(t.STENCIL_TEST))},setMask:function(st){se!==st&&!b&&(t.stencilMask(st),se=st)},setFunc:function(st,tn,si){(ae!==st||Ce!==tn||Ee!==si)&&(t.stencilFunc(st,tn,si),ae=st,Ce=tn,Ee=si)},setOp:function(st,tn,si){(rt!==st||ot!==tn||Lt!==si)&&(t.stencilOp(st,tn,si),rt=st,ot=tn,Lt=si)},setLocked:function(st){b=st},setClear:function(st){en!==st&&(t.clearStencil(st),en=st)},reset:function(){b=!1,se=null,ae=null,Ce=null,Ee=null,rt=null,ot=null,Lt=null,en=null}}}const a=new r,l=new o,u=new s,f=new WeakMap,h=new WeakMap;let d={},p={},_=new WeakMap,x=[],g=null,c=!1,v=null,m=null,y=null,R=null,A=null,M=null,N=null,E=new it(0,0,0),w=0,F=!1,$=null,ee=null,P=null,O=null,X=null;const q=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let L=!1,D=0;const G=t.getParameter(t.VERSION);G.indexOf("WebGL")!==-1?(D=parseFloat(/^WebGL (\d)/.exec(G)[1]),L=D>=1):G.indexOf("OpenGL ES")!==-1&&(D=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),L=D>=2);let j=null,Z={};const W=t.getParameter(t.SCISSOR_BOX),Y=t.getParameter(t.VIEWPORT),oe=new Ht().fromArray(W),ue=new Ht().fromArray(Y);function de(b,se,ae,Ce){const Ee=new Uint8Array(4),rt=t.createTexture();t.bindTexture(b,rt),t.texParameteri(b,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(b,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let ot=0;ot<ae;ot++)i&&(b===t.TEXTURE_3D||b===t.TEXTURE_2D_ARRAY)?t.texImage3D(se,0,t.RGBA,1,1,Ce,0,t.RGBA,t.UNSIGNED_BYTE,Ee):t.texImage2D(se+ot,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Ee);return rt}const we={};we[t.TEXTURE_2D]=de(t.TEXTURE_2D,t.TEXTURE_2D,1),we[t.TEXTURE_CUBE_MAP]=de(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(we[t.TEXTURE_2D_ARRAY]=de(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),we[t.TEXTURE_3D]=de(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),u.setClear(0),Me(t.DEPTH_TEST),l.setFunc(du),Oe(!1),C(km),Me(t.CULL_FACE),ge(dr);function Me(b){d[b]!==!0&&(t.enable(b),d[b]=!0)}function ye(b){d[b]!==!1&&(t.disable(b),d[b]=!1)}function He(b,se){return p[b]!==se?(t.bindFramebuffer(b,se),p[b]=se,i&&(b===t.DRAW_FRAMEBUFFER&&(p[t.FRAMEBUFFER]=se),b===t.FRAMEBUFFER&&(p[t.DRAW_FRAMEBUFFER]=se)),!0):!1}function U(b,se){let ae=x,Ce=!1;if(b)if(ae=_.get(se),ae===void 0&&(ae=[],_.set(se,ae)),b.isWebGLMultipleRenderTargets){const Ee=b.texture;if(ae.length!==Ee.length||ae[0]!==t.COLOR_ATTACHMENT0){for(let rt=0,ot=Ee.length;rt<ot;rt++)ae[rt]=t.COLOR_ATTACHMENT0+rt;ae.length=Ee.length,Ce=!0}}else ae[0]!==t.COLOR_ATTACHMENT0&&(ae[0]=t.COLOR_ATTACHMENT0,Ce=!0);else ae[0]!==t.BACK&&(ae[0]=t.BACK,Ce=!0);Ce&&(n.isWebGL2?t.drawBuffers(ae):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ae))}function Jt(b){return g!==b?(t.useProgram(b),g=b,!0):!1}const Se={[Ur]:t.FUNC_ADD,[OM]:t.FUNC_SUBTRACT,[BM]:t.FUNC_REVERSE_SUBTRACT};if(i)Se[Vm]=t.MIN,Se[Wm]=t.MAX;else{const b=e.get("EXT_blend_minmax");b!==null&&(Se[Vm]=b.MIN_EXT,Se[Wm]=b.MAX_EXT)}const Pe={[kM]:t.ZERO,[HM]:t.ONE,[zM]:t.SRC_COLOR,[Cd]:t.SRC_ALPHA,[jM]:t.SRC_ALPHA_SATURATE,[XM]:t.DST_COLOR,[VM]:t.DST_ALPHA,[GM]:t.ONE_MINUS_SRC_COLOR,[Rd]:t.ONE_MINUS_SRC_ALPHA,[$M]:t.ONE_MINUS_DST_COLOR,[WM]:t.ONE_MINUS_DST_ALPHA,[YM]:t.CONSTANT_COLOR,[qM]:t.ONE_MINUS_CONSTANT_COLOR,[ZM]:t.CONSTANT_ALPHA,[KM]:t.ONE_MINUS_CONSTANT_ALPHA};function ge(b,se,ae,Ce,Ee,rt,ot,Lt,en,st){if(b===dr){c===!0&&(ye(t.BLEND),c=!1);return}if(c===!1&&(Me(t.BLEND),c=!0),b!==FM){if(b!==v||st!==F){if((m!==Ur||A!==Ur)&&(t.blendEquation(t.FUNC_ADD),m=Ur,A=Ur),st)switch(b){case qo:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Hm:t.blendFunc(t.ONE,t.ONE);break;case zm:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Gm:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",b);break}else switch(b){case qo:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Hm:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case zm:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Gm:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",b);break}y=null,R=null,M=null,N=null,E.set(0,0,0),w=0,v=b,F=st}return}Ee=Ee||se,rt=rt||ae,ot=ot||Ce,(se!==m||Ee!==A)&&(t.blendEquationSeparate(Se[se],Se[Ee]),m=se,A=Ee),(ae!==y||Ce!==R||rt!==M||ot!==N)&&(t.blendFuncSeparate(Pe[ae],Pe[Ce],Pe[rt],Pe[ot]),y=ae,R=Ce,M=rt,N=ot),(Lt.equals(E)===!1||en!==w)&&(t.blendColor(Lt.r,Lt.g,Lt.b,en),E.copy(Lt),w=en),v=b,F=!1}function pt(b,se){b.side===Pi?ye(t.CULL_FACE):Me(t.CULL_FACE);let ae=b.side===vn;se&&(ae=!ae),Oe(ae),b.blending===qo&&b.transparent===!1?ge(dr):ge(b.blending,b.blendEquation,b.blendSrc,b.blendDst,b.blendEquationAlpha,b.blendSrcAlpha,b.blendDstAlpha,b.blendColor,b.blendAlpha,b.premultipliedAlpha),l.setFunc(b.depthFunc),l.setTest(b.depthTest),l.setMask(b.depthWrite),a.setMask(b.colorWrite);const Ce=b.stencilWrite;u.setTest(Ce),Ce&&(u.setMask(b.stencilWriteMask),u.setFunc(b.stencilFunc,b.stencilRef,b.stencilFuncMask),u.setOp(b.stencilFail,b.stencilZFail,b.stencilZPass)),H(b.polygonOffset,b.polygonOffsetFactor,b.polygonOffsetUnits),b.alphaToCoverage===!0?Me(t.SAMPLE_ALPHA_TO_COVERAGE):ye(t.SAMPLE_ALPHA_TO_COVERAGE)}function Oe(b){$!==b&&(b?t.frontFace(t.CW):t.frontFace(t.CCW),$=b)}function C(b){b!==DM?(Me(t.CULL_FACE),b!==ee&&(b===km?t.cullFace(t.BACK):b===IM?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):ye(t.CULL_FACE),ee=b}function S(b){b!==P&&(L&&t.lineWidth(b),P=b)}function H(b,se,ae){b?(Me(t.POLYGON_OFFSET_FILL),(O!==se||X!==ae)&&(t.polygonOffset(se,ae),O=se,X=ae)):ye(t.POLYGON_OFFSET_FILL)}function te(b){b?Me(t.SCISSOR_TEST):ye(t.SCISSOR_TEST)}function Q(b){b===void 0&&(b=t.TEXTURE0+q-1),j!==b&&(t.activeTexture(b),j=b)}function ne(b,se,ae){ae===void 0&&(j===null?ae=t.TEXTURE0+q-1:ae=j);let Ce=Z[ae];Ce===void 0&&(Ce={type:void 0,texture:void 0},Z[ae]=Ce),(Ce.type!==b||Ce.texture!==se)&&(j!==ae&&(t.activeTexture(ae),j=ae),t.bindTexture(b,se||we[b]),Ce.type=b,Ce.texture=se)}function ve(){const b=Z[j];b!==void 0&&b.type!==void 0&&(t.bindTexture(b.type,null),b.type=void 0,b.texture=void 0)}function le(){try{t.compressedTexImage2D.apply(t,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function he(){try{t.compressedTexImage3D.apply(t,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function Ae(){try{t.texSubImage2D.apply(t,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function Be(){try{t.texSubImage3D.apply(t,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function K(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function tt(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function We(){try{t.texStorage2D.apply(t,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function be(){try{t.texStorage3D.apply(t,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function xe(){try{t.texImage2D.apply(t,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function pe(){try{t.texImage3D.apply(t,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function Ie(b){oe.equals(b)===!1&&(t.scissor(b.x,b.y,b.z,b.w),oe.copy(b))}function Qe(b){ue.equals(b)===!1&&(t.viewport(b.x,b.y,b.z,b.w),ue.copy(b))}function xt(b,se){let ae=h.get(se);ae===void 0&&(ae=new WeakMap,h.set(se,ae));let Ce=ae.get(b);Ce===void 0&&(Ce=t.getUniformBlockIndex(se,b.name),ae.set(b,Ce))}function ze(b,se){const Ce=h.get(se).get(b);f.get(se)!==Ce&&(t.uniformBlockBinding(se,Ce,b.__bindingPointIndex),f.set(se,Ce))}function ie(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),d={},j=null,Z={},p={},_=new WeakMap,x=[],g=null,c=!1,v=null,m=null,y=null,R=null,A=null,M=null,N=null,E=new it(0,0,0),w=0,F=!1,$=null,ee=null,P=null,O=null,X=null,oe.set(0,0,t.canvas.width,t.canvas.height),ue.set(0,0,t.canvas.width,t.canvas.height),a.reset(),l.reset(),u.reset()}return{buffers:{color:a,depth:l,stencil:u},enable:Me,disable:ye,bindFramebuffer:He,drawBuffers:U,useProgram:Jt,setBlending:ge,setMaterial:pt,setFlipSided:Oe,setCullFace:C,setLineWidth:S,setPolygonOffset:H,setScissorTest:te,activeTexture:Q,bindTexture:ne,unbindTexture:ve,compressedTexImage2D:le,compressedTexImage3D:he,texImage2D:xe,texImage3D:pe,updateUBOMapping:xt,uniformBlockBinding:ze,texStorage2D:We,texStorage3D:be,texSubImage2D:Ae,texSubImage3D:Be,compressedTexSubImage2D:K,compressedTexSubImage3D:tt,scissor:Ie,viewport:Qe,reset:ie}}function $R(t,e,n,i,r,o,s){const a=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),f=new WeakMap;let h;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(C,S){return p?new OffscreenCanvas(C,S):_u("canvas")}function x(C,S,H,te){let Q=1;if((C.width>te||C.height>te)&&(Q=te/Math.max(C.width,C.height)),Q<1||S===!0)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap){const ne=S?vu:Math.floor,ve=ne(Q*C.width),le=ne(Q*C.height);h===void 0&&(h=_(ve,le));const he=H?_(ve,le):h;return he.width=ve,he.height=le,he.getContext("2d").drawImage(C,0,0,ve,le),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+C.width+"x"+C.height+") to ("+ve+"x"+le+")."),he}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+C.width+"x"+C.height+")."),C;return C}function g(C){return Id(C.width)&&Id(C.height)}function c(C){return a?!1:C.wrapS!==Jn||C.wrapT!==Jn||C.minFilter!==an&&C.minFilter!==Un}function v(C,S){return C.generateMipmaps&&S&&C.minFilter!==an&&C.minFilter!==Un}function m(C){t.generateMipmap(C)}function y(C,S,H,te,Q=!1){if(a===!1)return S;if(C!==null){if(t[C]!==void 0)return t[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let ne=S;if(S===t.RED&&(H===t.FLOAT&&(ne=t.R32F),H===t.HALF_FLOAT&&(ne=t.R16F),H===t.UNSIGNED_BYTE&&(ne=t.R8)),S===t.RED_INTEGER&&(H===t.UNSIGNED_BYTE&&(ne=t.R8UI),H===t.UNSIGNED_SHORT&&(ne=t.R16UI),H===t.UNSIGNED_INT&&(ne=t.R32UI),H===t.BYTE&&(ne=t.R8I),H===t.SHORT&&(ne=t.R16I),H===t.INT&&(ne=t.R32I)),S===t.RG&&(H===t.FLOAT&&(ne=t.RG32F),H===t.HALF_FLOAT&&(ne=t.RG16F),H===t.UNSIGNED_BYTE&&(ne=t.RG8)),S===t.RGBA){const ve=Q?hu:nt.getTransfer(te);H===t.FLOAT&&(ne=t.RGBA32F),H===t.HALF_FLOAT&&(ne=t.RGBA16F),H===t.UNSIGNED_BYTE&&(ne=ve===ct?t.SRGB8_ALPHA8:t.RGBA8),H===t.UNSIGNED_SHORT_4_4_4_4&&(ne=t.RGBA4),H===t.UNSIGNED_SHORT_5_5_5_1&&(ne=t.RGB5_A1)}return(ne===t.R16F||ne===t.R32F||ne===t.RG16F||ne===t.RG32F||ne===t.RGBA16F||ne===t.RGBA32F)&&e.get("EXT_color_buffer_float"),ne}function R(C,S,H){return v(C,H)===!0||C.isFramebufferTexture&&C.minFilter!==an&&C.minFilter!==Un?Math.log2(Math.max(S.width,S.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?S.mipmaps.length:1}function A(C){return C===an||C===Xm||C===Vc?t.NEAREST:t.LINEAR}function M(C){const S=C.target;S.removeEventListener("dispose",M),E(S),S.isVideoTexture&&f.delete(S)}function N(C){const S=C.target;S.removeEventListener("dispose",N),F(S)}function E(C){const S=i.get(C);if(S.__webglInit===void 0)return;const H=C.source,te=d.get(H);if(te){const Q=te[S.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&w(C),Object.keys(te).length===0&&d.delete(H)}i.remove(C)}function w(C){const S=i.get(C);t.deleteTexture(S.__webglTexture);const H=C.source,te=d.get(H);delete te[S.__cacheKey],s.memory.textures--}function F(C){const S=C.texture,H=i.get(C),te=i.get(S);if(te.__webglTexture!==void 0&&(t.deleteTexture(te.__webglTexture),s.memory.textures--),C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(H.__webglFramebuffer[Q]))for(let ne=0;ne<H.__webglFramebuffer[Q].length;ne++)t.deleteFramebuffer(H.__webglFramebuffer[Q][ne]);else t.deleteFramebuffer(H.__webglFramebuffer[Q]);H.__webglDepthbuffer&&t.deleteRenderbuffer(H.__webglDepthbuffer[Q])}else{if(Array.isArray(H.__webglFramebuffer))for(let Q=0;Q<H.__webglFramebuffer.length;Q++)t.deleteFramebuffer(H.__webglFramebuffer[Q]);else t.deleteFramebuffer(H.__webglFramebuffer);if(H.__webglDepthbuffer&&t.deleteRenderbuffer(H.__webglDepthbuffer),H.__webglMultisampledFramebuffer&&t.deleteFramebuffer(H.__webglMultisampledFramebuffer),H.__webglColorRenderbuffer)for(let Q=0;Q<H.__webglColorRenderbuffer.length;Q++)H.__webglColorRenderbuffer[Q]&&t.deleteRenderbuffer(H.__webglColorRenderbuffer[Q]);H.__webglDepthRenderbuffer&&t.deleteRenderbuffer(H.__webglDepthRenderbuffer)}if(C.isWebGLMultipleRenderTargets)for(let Q=0,ne=S.length;Q<ne;Q++){const ve=i.get(S[Q]);ve.__webglTexture&&(t.deleteTexture(ve.__webglTexture),s.memory.textures--),i.remove(S[Q])}i.remove(S),i.remove(C)}let $=0;function ee(){$=0}function P(){const C=$;return C>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+r.maxTextures),$+=1,C}function O(C){const S=[];return S.push(C.wrapS),S.push(C.wrapT),S.push(C.wrapR||0),S.push(C.magFilter),S.push(C.minFilter),S.push(C.anisotropy),S.push(C.internalFormat),S.push(C.format),S.push(C.type),S.push(C.generateMipmaps),S.push(C.premultiplyAlpha),S.push(C.flipY),S.push(C.unpackAlignment),S.push(C.colorSpace),S.join()}function X(C,S){const H=i.get(C);if(C.isVideoTexture&&pt(C),C.isRenderTargetTexture===!1&&C.version>0&&H.__version!==C.version){const te=C.image;if(te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{oe(H,C,S);return}}n.bindTexture(t.TEXTURE_2D,H.__webglTexture,t.TEXTURE0+S)}function q(C,S){const H=i.get(C);if(C.version>0&&H.__version!==C.version){oe(H,C,S);return}n.bindTexture(t.TEXTURE_2D_ARRAY,H.__webglTexture,t.TEXTURE0+S)}function L(C,S){const H=i.get(C);if(C.version>0&&H.__version!==C.version){oe(H,C,S);return}n.bindTexture(t.TEXTURE_3D,H.__webglTexture,t.TEXTURE0+S)}function D(C,S){const H=i.get(C);if(C.version>0&&H.__version!==C.version){ue(H,C,S);return}n.bindTexture(t.TEXTURE_CUBE_MAP,H.__webglTexture,t.TEXTURE0+S)}const G={[Ld]:t.REPEAT,[Jn]:t.CLAMP_TO_EDGE,[Nd]:t.MIRRORED_REPEAT},j={[an]:t.NEAREST,[Xm]:t.NEAREST_MIPMAP_NEAREST,[Vc]:t.NEAREST_MIPMAP_LINEAR,[Un]:t.LINEAR,[h2]:t.LINEAR_MIPMAP_NEAREST,[ma]:t.LINEAR_MIPMAP_LINEAR},Z={[A2]:t.NEVER,[N2]:t.ALWAYS,[C2]:t.LESS,[b1]:t.LEQUAL,[R2]:t.EQUAL,[L2]:t.GEQUAL,[b2]:t.GREATER,[P2]:t.NOTEQUAL};function W(C,S,H){if(H?(t.texParameteri(C,t.TEXTURE_WRAP_S,G[S.wrapS]),t.texParameteri(C,t.TEXTURE_WRAP_T,G[S.wrapT]),(C===t.TEXTURE_3D||C===t.TEXTURE_2D_ARRAY)&&t.texParameteri(C,t.TEXTURE_WRAP_R,G[S.wrapR]),t.texParameteri(C,t.TEXTURE_MAG_FILTER,j[S.magFilter]),t.texParameteri(C,t.TEXTURE_MIN_FILTER,j[S.minFilter])):(t.texParameteri(C,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(C,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(C===t.TEXTURE_3D||C===t.TEXTURE_2D_ARRAY)&&t.texParameteri(C,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(S.wrapS!==Jn||S.wrapT!==Jn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(C,t.TEXTURE_MAG_FILTER,A(S.magFilter)),t.texParameteri(C,t.TEXTURE_MIN_FILTER,A(S.minFilter)),S.minFilter!==an&&S.minFilter!==Un&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),S.compareFunction&&(t.texParameteri(C,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(C,t.TEXTURE_COMPARE_FUNC,Z[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const te=e.get("EXT_texture_filter_anisotropic");if(S.magFilter===an||S.minFilter!==Vc&&S.minFilter!==ma||S.type===ir&&e.has("OES_texture_float_linear")===!1||a===!1&&S.type===ga&&e.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||i.get(S).__currentAnisotropy)&&(t.texParameterf(C,te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy)}}function Y(C,S){let H=!1;C.__webglInit===void 0&&(C.__webglInit=!0,S.addEventListener("dispose",M));const te=S.source;let Q=d.get(te);Q===void 0&&(Q={},d.set(te,Q));const ne=O(S);if(ne!==C.__cacheKey){Q[ne]===void 0&&(Q[ne]={texture:t.createTexture(),usedTimes:0},s.memory.textures++,H=!0),Q[ne].usedTimes++;const ve=Q[C.__cacheKey];ve!==void 0&&(Q[C.__cacheKey].usedTimes--,ve.usedTimes===0&&w(S)),C.__cacheKey=ne,C.__webglTexture=Q[ne].texture}return H}function oe(C,S,H){let te=t.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(te=t.TEXTURE_2D_ARRAY),S.isData3DTexture&&(te=t.TEXTURE_3D);const Q=Y(C,S),ne=S.source;n.bindTexture(te,C.__webglTexture,t.TEXTURE0+H);const ve=i.get(ne);if(ne.version!==ve.__version||Q===!0){n.activeTexture(t.TEXTURE0+H);const le=nt.getPrimaries(nt.workingColorSpace),he=S.colorSpace===On?null:nt.getPrimaries(S.colorSpace),Ae=S.colorSpace===On||le===he?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);const Be=c(S)&&g(S.image)===!1;let K=x(S.image,Be,!1,r.maxTextureSize);K=Oe(S,K);const tt=g(K)||a,We=o.convert(S.format,S.colorSpace);let be=o.convert(S.type),xe=y(S.internalFormat,We,be,S.colorSpace,S.isVideoTexture);W(te,S,tt);let pe;const Ie=S.mipmaps,Qe=a&&S.isVideoTexture!==!0&&xe!==C1,xt=ve.__version===void 0||Q===!0,ze=R(S,K,tt);if(S.isDepthTexture)xe=t.DEPTH_COMPONENT,a?S.type===ir?xe=t.DEPTH_COMPONENT32F:S.type===nr?xe=t.DEPTH_COMPONENT24:S.type===Vr?xe=t.DEPTH24_STENCIL8:xe=t.DEPTH_COMPONENT16:S.type===ir&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===Wr&&xe===t.DEPTH_COMPONENT&&S.type!==$h&&S.type!==nr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=nr,be=o.convert(S.type)),S.format===ls&&xe===t.DEPTH_COMPONENT&&(xe=t.DEPTH_STENCIL,S.type!==Vr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=Vr,be=o.convert(S.type))),xt&&(Qe?n.texStorage2D(t.TEXTURE_2D,1,xe,K.width,K.height):n.texImage2D(t.TEXTURE_2D,0,xe,K.width,K.height,0,We,be,null));else if(S.isDataTexture)if(Ie.length>0&&tt){Qe&&xt&&n.texStorage2D(t.TEXTURE_2D,ze,xe,Ie[0].width,Ie[0].height);for(let ie=0,b=Ie.length;ie<b;ie++)pe=Ie[ie],Qe?n.texSubImage2D(t.TEXTURE_2D,ie,0,0,pe.width,pe.height,We,be,pe.data):n.texImage2D(t.TEXTURE_2D,ie,xe,pe.width,pe.height,0,We,be,pe.data);S.generateMipmaps=!1}else Qe?(xt&&n.texStorage2D(t.TEXTURE_2D,ze,xe,K.width,K.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,K.width,K.height,We,be,K.data)):n.texImage2D(t.TEXTURE_2D,0,xe,K.width,K.height,0,We,be,K.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Qe&&xt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ze,xe,Ie[0].width,Ie[0].height,K.depth);for(let ie=0,b=Ie.length;ie<b;ie++)pe=Ie[ie],S.format!==ei?We!==null?Qe?n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ie,0,0,0,pe.width,pe.height,K.depth,We,pe.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,ie,xe,pe.width,pe.height,K.depth,0,pe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Qe?n.texSubImage3D(t.TEXTURE_2D_ARRAY,ie,0,0,0,pe.width,pe.height,K.depth,We,be,pe.data):n.texImage3D(t.TEXTURE_2D_ARRAY,ie,xe,pe.width,pe.height,K.depth,0,We,be,pe.data)}else{Qe&&xt&&n.texStorage2D(t.TEXTURE_2D,ze,xe,Ie[0].width,Ie[0].height);for(let ie=0,b=Ie.length;ie<b;ie++)pe=Ie[ie],S.format!==ei?We!==null?Qe?n.compressedTexSubImage2D(t.TEXTURE_2D,ie,0,0,pe.width,pe.height,We,pe.data):n.compressedTexImage2D(t.TEXTURE_2D,ie,xe,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Qe?n.texSubImage2D(t.TEXTURE_2D,ie,0,0,pe.width,pe.height,We,be,pe.data):n.texImage2D(t.TEXTURE_2D,ie,xe,pe.width,pe.height,0,We,be,pe.data)}else if(S.isDataArrayTexture)Qe?(xt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ze,xe,K.width,K.height,K.depth),n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,K.width,K.height,K.depth,We,be,K.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,xe,K.width,K.height,K.depth,0,We,be,K.data);else if(S.isData3DTexture)Qe?(xt&&n.texStorage3D(t.TEXTURE_3D,ze,xe,K.width,K.height,K.depth),n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,K.width,K.height,K.depth,We,be,K.data)):n.texImage3D(t.TEXTURE_3D,0,xe,K.width,K.height,K.depth,0,We,be,K.data);else if(S.isFramebufferTexture){if(xt)if(Qe)n.texStorage2D(t.TEXTURE_2D,ze,xe,K.width,K.height);else{let ie=K.width,b=K.height;for(let se=0;se<ze;se++)n.texImage2D(t.TEXTURE_2D,se,xe,ie,b,0,We,be,null),ie>>=1,b>>=1}}else if(Ie.length>0&&tt){Qe&&xt&&n.texStorage2D(t.TEXTURE_2D,ze,xe,Ie[0].width,Ie[0].height);for(let ie=0,b=Ie.length;ie<b;ie++)pe=Ie[ie],Qe?n.texSubImage2D(t.TEXTURE_2D,ie,0,0,We,be,pe):n.texImage2D(t.TEXTURE_2D,ie,xe,We,be,pe);S.generateMipmaps=!1}else Qe?(xt&&n.texStorage2D(t.TEXTURE_2D,ze,xe,K.width,K.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,We,be,K)):n.texImage2D(t.TEXTURE_2D,0,xe,We,be,K);v(S,tt)&&m(te),ve.__version=ne.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function ue(C,S,H){if(S.image.length!==6)return;const te=Y(C,S),Q=S.source;n.bindTexture(t.TEXTURE_CUBE_MAP,C.__webglTexture,t.TEXTURE0+H);const ne=i.get(Q);if(Q.version!==ne.__version||te===!0){n.activeTexture(t.TEXTURE0+H);const ve=nt.getPrimaries(nt.workingColorSpace),le=S.colorSpace===On?null:nt.getPrimaries(S.colorSpace),he=S.colorSpace===On||ve===le?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,he);const Ae=S.isCompressedTexture||S.image[0].isCompressedTexture,Be=S.image[0]&&S.image[0].isDataTexture,K=[];for(let ie=0;ie<6;ie++)!Ae&&!Be?K[ie]=x(S.image[ie],!1,!0,r.maxCubemapSize):K[ie]=Be?S.image[ie].image:S.image[ie],K[ie]=Oe(S,K[ie]);const tt=K[0],We=g(tt)||a,be=o.convert(S.format,S.colorSpace),xe=o.convert(S.type),pe=y(S.internalFormat,be,xe,S.colorSpace),Ie=a&&S.isVideoTexture!==!0,Qe=ne.__version===void 0||te===!0;let xt=R(S,tt,We);W(t.TEXTURE_CUBE_MAP,S,We);let ze;if(Ae){Ie&&Qe&&n.texStorage2D(t.TEXTURE_CUBE_MAP,xt,pe,tt.width,tt.height);for(let ie=0;ie<6;ie++){ze=K[ie].mipmaps;for(let b=0;b<ze.length;b++){const se=ze[b];S.format!==ei?be!==null?Ie?n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,b,0,0,se.width,se.height,be,se.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,b,pe,se.width,se.height,0,se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ie?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,b,0,0,se.width,se.height,be,xe,se.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,b,pe,se.width,se.height,0,be,xe,se.data)}}}else{ze=S.mipmaps,Ie&&Qe&&(ze.length>0&&xt++,n.texStorage2D(t.TEXTURE_CUBE_MAP,xt,pe,K[0].width,K[0].height));for(let ie=0;ie<6;ie++)if(Be){Ie?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,K[ie].width,K[ie].height,be,xe,K[ie].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,pe,K[ie].width,K[ie].height,0,be,xe,K[ie].data);for(let b=0;b<ze.length;b++){const ae=ze[b].image[ie].image;Ie?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,b+1,0,0,ae.width,ae.height,be,xe,ae.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,b+1,pe,ae.width,ae.height,0,be,xe,ae.data)}}else{Ie?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,be,xe,K[ie]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,pe,be,xe,K[ie]);for(let b=0;b<ze.length;b++){const se=ze[b];Ie?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,b+1,0,0,be,xe,se.image[ie]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,b+1,pe,be,xe,se.image[ie])}}}v(S,We)&&m(t.TEXTURE_CUBE_MAP),ne.__version=Q.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function de(C,S,H,te,Q,ne){const ve=o.convert(H.format,H.colorSpace),le=o.convert(H.type),he=y(H.internalFormat,ve,le,H.colorSpace);if(!i.get(S).__hasExternalTextures){const Be=Math.max(1,S.width>>ne),K=Math.max(1,S.height>>ne);Q===t.TEXTURE_3D||Q===t.TEXTURE_2D_ARRAY?n.texImage3D(Q,ne,he,Be,K,S.depth,0,ve,le,null):n.texImage2D(Q,ne,he,Be,K,0,ve,le,null)}n.bindFramebuffer(t.FRAMEBUFFER,C),ge(S)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,te,Q,i.get(H).__webglTexture,0,Pe(S)):(Q===t.TEXTURE_2D||Q>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,te,Q,i.get(H).__webglTexture,ne),n.bindFramebuffer(t.FRAMEBUFFER,null)}function we(C,S,H){if(t.bindRenderbuffer(t.RENDERBUFFER,C),S.depthBuffer&&!S.stencilBuffer){let te=a===!0?t.DEPTH_COMPONENT24:t.DEPTH_COMPONENT16;if(H||ge(S)){const Q=S.depthTexture;Q&&Q.isDepthTexture&&(Q.type===ir?te=t.DEPTH_COMPONENT32F:Q.type===nr&&(te=t.DEPTH_COMPONENT24));const ne=Pe(S);ge(S)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ne,te,S.width,S.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,ne,te,S.width,S.height)}else t.renderbufferStorage(t.RENDERBUFFER,te,S.width,S.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,C)}else if(S.depthBuffer&&S.stencilBuffer){const te=Pe(S);H&&ge(S)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,te,t.DEPTH24_STENCIL8,S.width,S.height):ge(S)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,te,t.DEPTH24_STENCIL8,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,S.width,S.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,C)}else{const te=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let Q=0;Q<te.length;Q++){const ne=te[Q],ve=o.convert(ne.format,ne.colorSpace),le=o.convert(ne.type),he=y(ne.internalFormat,ve,le,ne.colorSpace),Ae=Pe(S);H&&ge(S)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ae,he,S.width,S.height):ge(S)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ae,he,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,he,S.width,S.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Me(C,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,C),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),X(S.depthTexture,0);const te=i.get(S.depthTexture).__webglTexture,Q=Pe(S);if(S.depthTexture.format===Wr)ge(S)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,te,0,Q):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,te,0);else if(S.depthTexture.format===ls)ge(S)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,te,0,Q):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,te,0);else throw new Error("Unknown depthTexture format")}function ye(C){const S=i.get(C),H=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!S.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");Me(S.__webglFramebuffer,C)}else if(H){S.__webglDepthbuffer=[];for(let te=0;te<6;te++)n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer[te]),S.__webglDepthbuffer[te]=t.createRenderbuffer(),we(S.__webglDepthbuffer[te],C,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=t.createRenderbuffer(),we(S.__webglDepthbuffer,C,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function He(C,S,H){const te=i.get(C);S!==void 0&&de(te.__webglFramebuffer,C,C.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),H!==void 0&&ye(C)}function U(C){const S=C.texture,H=i.get(C),te=i.get(S);C.addEventListener("dispose",N),C.isWebGLMultipleRenderTargets!==!0&&(te.__webglTexture===void 0&&(te.__webglTexture=t.createTexture()),te.__version=S.version,s.memory.textures++);const Q=C.isWebGLCubeRenderTarget===!0,ne=C.isWebGLMultipleRenderTargets===!0,ve=g(C)||a;if(Q){H.__webglFramebuffer=[];for(let le=0;le<6;le++)if(a&&S.mipmaps&&S.mipmaps.length>0){H.__webglFramebuffer[le]=[];for(let he=0;he<S.mipmaps.length;he++)H.__webglFramebuffer[le][he]=t.createFramebuffer()}else H.__webglFramebuffer[le]=t.createFramebuffer()}else{if(a&&S.mipmaps&&S.mipmaps.length>0){H.__webglFramebuffer=[];for(let le=0;le<S.mipmaps.length;le++)H.__webglFramebuffer[le]=t.createFramebuffer()}else H.__webglFramebuffer=t.createFramebuffer();if(ne)if(r.drawBuffers){const le=C.texture;for(let he=0,Ae=le.length;he<Ae;he++){const Be=i.get(le[he]);Be.__webglTexture===void 0&&(Be.__webglTexture=t.createTexture(),s.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&C.samples>0&&ge(C)===!1){const le=ne?S:[S];H.__webglMultisampledFramebuffer=t.createFramebuffer(),H.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let he=0;he<le.length;he++){const Ae=le[he];H.__webglColorRenderbuffer[he]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,H.__webglColorRenderbuffer[he]);const Be=o.convert(Ae.format,Ae.colorSpace),K=o.convert(Ae.type),tt=y(Ae.internalFormat,Be,K,Ae.colorSpace,C.isXRRenderTarget===!0),We=Pe(C);t.renderbufferStorageMultisample(t.RENDERBUFFER,We,tt,C.width,C.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+he,t.RENDERBUFFER,H.__webglColorRenderbuffer[he])}t.bindRenderbuffer(t.RENDERBUFFER,null),C.depthBuffer&&(H.__webglDepthRenderbuffer=t.createRenderbuffer(),we(H.__webglDepthRenderbuffer,C,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(Q){n.bindTexture(t.TEXTURE_CUBE_MAP,te.__webglTexture),W(t.TEXTURE_CUBE_MAP,S,ve);for(let le=0;le<6;le++)if(a&&S.mipmaps&&S.mipmaps.length>0)for(let he=0;he<S.mipmaps.length;he++)de(H.__webglFramebuffer[le][he],C,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+le,he);else de(H.__webglFramebuffer[le],C,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);v(S,ve)&&m(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ne){const le=C.texture;for(let he=0,Ae=le.length;he<Ae;he++){const Be=le[he],K=i.get(Be);n.bindTexture(t.TEXTURE_2D,K.__webglTexture),W(t.TEXTURE_2D,Be,ve),de(H.__webglFramebuffer,C,Be,t.COLOR_ATTACHMENT0+he,t.TEXTURE_2D,0),v(Be,ve)&&m(t.TEXTURE_2D)}n.unbindTexture()}else{let le=t.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(a?le=C.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(le,te.__webglTexture),W(le,S,ve),a&&S.mipmaps&&S.mipmaps.length>0)for(let he=0;he<S.mipmaps.length;he++)de(H.__webglFramebuffer[he],C,S,t.COLOR_ATTACHMENT0,le,he);else de(H.__webglFramebuffer,C,S,t.COLOR_ATTACHMENT0,le,0);v(S,ve)&&m(le),n.unbindTexture()}C.depthBuffer&&ye(C)}function Jt(C){const S=g(C)||a,H=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let te=0,Q=H.length;te<Q;te++){const ne=H[te];if(v(ne,S)){const ve=C.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,le=i.get(ne).__webglTexture;n.bindTexture(ve,le),m(ve),n.unbindTexture()}}}function Se(C){if(a&&C.samples>0&&ge(C)===!1){const S=C.isWebGLMultipleRenderTargets?C.texture:[C.texture],H=C.width,te=C.height;let Q=t.COLOR_BUFFER_BIT;const ne=[],ve=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,le=i.get(C),he=C.isWebGLMultipleRenderTargets===!0;if(he)for(let Ae=0;Ae<S.length;Ae++)n.bindFramebuffer(t.FRAMEBUFFER,le.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ae,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,le.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ae,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,le.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,le.__webglFramebuffer);for(let Ae=0;Ae<S.length;Ae++){ne.push(t.COLOR_ATTACHMENT0+Ae),C.depthBuffer&&ne.push(ve);const Be=le.__ignoreDepthValues!==void 0?le.__ignoreDepthValues:!1;if(Be===!1&&(C.depthBuffer&&(Q|=t.DEPTH_BUFFER_BIT),C.stencilBuffer&&(Q|=t.STENCIL_BUFFER_BIT)),he&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,le.__webglColorRenderbuffer[Ae]),Be===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[ve]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[ve])),he){const K=i.get(S[Ae]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,K,0)}t.blitFramebuffer(0,0,H,te,0,0,H,te,Q,t.NEAREST),u&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,ne)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),he)for(let Ae=0;Ae<S.length;Ae++){n.bindFramebuffer(t.FRAMEBUFFER,le.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ae,t.RENDERBUFFER,le.__webglColorRenderbuffer[Ae]);const Be=i.get(S[Ae]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,le.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ae,t.TEXTURE_2D,Be,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,le.__webglMultisampledFramebuffer)}}function Pe(C){return Math.min(r.maxSamples,C.samples)}function ge(C){const S=i.get(C);return a&&C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function pt(C){const S=s.render.frame;f.get(C)!==S&&(f.set(C,S),C.update())}function Oe(C,S){const H=C.colorSpace,te=C.format,Q=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||C.format===Dd||H!==ki&&H!==On&&(nt.getTransfer(H)===ct?a===!1?e.has("EXT_sRGB")===!0&&te===ei?(C.format=Dd,C.minFilter=Un,C.generateMipmaps=!1):S=L1.sRGBToLinear(S):(te!==ei||Q!==pr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),S}this.allocateTextureUnit=P,this.resetTextureUnits=ee,this.setTexture2D=X,this.setTexture2DArray=q,this.setTexture3D=L,this.setTextureCube=D,this.rebindTextures=He,this.setupRenderTarget=U,this.updateRenderTargetMipmap=Jt,this.updateMultisampleRenderTarget=Se,this.setupDepthRenderbuffer=ye,this.setupFrameBufferTexture=de,this.useMultisampledRTT=ge}function jR(t,e,n){const i=n.isWebGL2;function r(o,s=On){let a;const l=nt.getTransfer(s);if(o===pr)return t.UNSIGNED_BYTE;if(o===E1)return t.UNSIGNED_SHORT_4_4_4_4;if(o===M1)return t.UNSIGNED_SHORT_5_5_5_1;if(o===p2)return t.BYTE;if(o===m2)return t.SHORT;if(o===$h)return t.UNSIGNED_SHORT;if(o===S1)return t.INT;if(o===nr)return t.UNSIGNED_INT;if(o===ir)return t.FLOAT;if(o===ga)return i?t.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(o===g2)return t.ALPHA;if(o===ei)return t.RGBA;if(o===v2)return t.LUMINANCE;if(o===_2)return t.LUMINANCE_ALPHA;if(o===Wr)return t.DEPTH_COMPONENT;if(o===ls)return t.DEPTH_STENCIL;if(o===Dd)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(o===x2)return t.RED;if(o===T1)return t.RED_INTEGER;if(o===y2)return t.RG;if(o===w1)return t.RG_INTEGER;if(o===A1)return t.RGBA_INTEGER;if(o===Wc||o===Xc||o===$c||o===jc)if(l===ct)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(o===Wc)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(o===Xc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(o===$c)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(o===jc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(o===Wc)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(o===Xc)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(o===$c)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(o===jc)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(o===$m||o===jm||o===Ym||o===qm)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(o===$m)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(o===jm)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(o===Ym)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(o===qm)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(o===C1)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(o===Zm||o===Km)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(o===Zm)return l===ct?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(o===Km)return l===ct?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(o===Qm||o===Jm||o===eg||o===tg||o===ng||o===ig||o===rg||o===og||o===sg||o===ag||o===lg||o===ug||o===cg||o===fg)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(o===Qm)return l===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(o===Jm)return l===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(o===eg)return l===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(o===tg)return l===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(o===ng)return l===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(o===ig)return l===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(o===rg)return l===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(o===og)return l===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(o===sg)return l===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(o===ag)return l===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(o===lg)return l===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(o===ug)return l===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(o===cg)return l===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(o===fg)return l===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(o===Yc||o===dg||o===hg)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(o===Yc)return l===ct?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(o===dg)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(o===hg)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(o===S2||o===pg||o===mg||o===gg)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(o===Yc)return a.COMPRESSED_RED_RGTC1_EXT;if(o===pg)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(o===mg)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(o===gg)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return o===Vr?i?t.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):t[o]!==void 0?t[o]:null}return{convert:r}}class YR extends Fn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class xl extends An{constructor(){super(),this.isGroup=!0,this.type="Group"}}const qR={type:"move"};class _f{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,o=null,s=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){s=!0;for(const x of e.hand.values()){const g=n.getJointPose(x,i),c=this._getHandJoint(u,x);g!==null&&(c.matrix.fromArray(g.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,c.jointRadius=g.radius),c.visible=g!==null}const f=u.joints["index-finger-tip"],h=u.joints["thumb-tip"],d=f.position.distanceTo(h.position),p=.02,_=.005;u.inputState.pinching&&d>p+_?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&d<=p-_&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(o=n.getPose(e.gripSpace,i),o!==null&&(l.matrix.fromArray(o.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,o.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(o.linearVelocity)):l.hasLinearVelocity=!1,o.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(o.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&o!==null&&(r=o),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(qR)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=o!==null),u!==null&&(u.visible=s!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new xl;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class ZR extends vs{constructor(e,n){super();const i=this;let r=null,o=1,s=null,a="local-floor",l=1,u=null,f=null,h=null,d=null,p=null,_=null;const x=n.getContextAttributes();let g=null,c=null;const v=[],m=[],y=new Ze;let R=null;const A=new Fn;A.layers.enable(1),A.viewport=new Ht;const M=new Fn;M.layers.enable(2),M.viewport=new Ht;const N=[A,M],E=new YR;E.layers.enable(1),E.layers.enable(2);let w=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let Y=v[W];return Y===void 0&&(Y=new _f,v[W]=Y),Y.getTargetRaySpace()},this.getControllerGrip=function(W){let Y=v[W];return Y===void 0&&(Y=new _f,v[W]=Y),Y.getGripSpace()},this.getHand=function(W){let Y=v[W];return Y===void 0&&(Y=new _f,v[W]=Y),Y.getHandSpace()};function $(W){const Y=m.indexOf(W.inputSource);if(Y===-1)return;const oe=v[Y];oe!==void 0&&(oe.update(W.inputSource,W.frame,u||s),oe.dispatchEvent({type:W.type,data:W.inputSource}))}function ee(){r.removeEventListener("select",$),r.removeEventListener("selectstart",$),r.removeEventListener("selectend",$),r.removeEventListener("squeeze",$),r.removeEventListener("squeezestart",$),r.removeEventListener("squeezeend",$),r.removeEventListener("end",ee),r.removeEventListener("inputsourceschange",P);for(let W=0;W<v.length;W++){const Y=m[W];Y!==null&&(m[W]=null,v[W].disconnect(Y))}w=null,F=null,e.setRenderTarget(g),p=null,d=null,h=null,r=null,c=null,Z.stop(),i.isPresenting=!1,e.setPixelRatio(R),e.setSize(y.width,y.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){o=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){a=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||s},this.setReferenceSpace=function(W){u=W},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(W){if(r=W,r!==null){if(g=e.getRenderTarget(),r.addEventListener("select",$),r.addEventListener("selectstart",$),r.addEventListener("selectend",$),r.addEventListener("squeeze",$),r.addEventListener("squeezestart",$),r.addEventListener("squeezeend",$),r.addEventListener("end",ee),r.addEventListener("inputsourceschange",P),x.xrCompatible!==!0&&await n.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(y),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const Y={antialias:r.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:o};p=new XRWebGLLayer(r,n,Y),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),c=new eo(p.framebufferWidth,p.framebufferHeight,{format:ei,type:pr,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let Y=null,oe=null,ue=null;x.depth&&(ue=x.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Y=x.stencil?ls:Wr,oe=x.stencil?Vr:nr);const de={colorFormat:n.RGBA8,depthFormat:ue,scaleFactor:o};h=new XRWebGLBinding(r,n),d=h.createProjectionLayer(de),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),c=new eo(d.textureWidth,d.textureHeight,{format:ei,type:pr,depthTexture:new V1(d.textureWidth,d.textureHeight,oe,void 0,void 0,void 0,void 0,void 0,void 0,Y),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0});const we=e.properties.get(c);we.__ignoreDepthValues=d.ignoreDepthValues}c.isXRRenderTarget=!0,this.setFoveation(l),u=null,s=await r.requestReferenceSpace(a),Z.setContext(r),Z.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function P(W){for(let Y=0;Y<W.removed.length;Y++){const oe=W.removed[Y],ue=m.indexOf(oe);ue>=0&&(m[ue]=null,v[ue].disconnect(oe))}for(let Y=0;Y<W.added.length;Y++){const oe=W.added[Y];let ue=m.indexOf(oe);if(ue===-1){for(let we=0;we<v.length;we++)if(we>=m.length){m.push(oe),ue=we;break}else if(m[we]===null){m[we]=oe,ue=we;break}if(ue===-1)break}const de=v[ue];de&&de.connect(oe)}}const O=new B,X=new B;function q(W,Y,oe){O.setFromMatrixPosition(Y.matrixWorld),X.setFromMatrixPosition(oe.matrixWorld);const ue=O.distanceTo(X),de=Y.projectionMatrix.elements,we=oe.projectionMatrix.elements,Me=de[14]/(de[10]-1),ye=de[14]/(de[10]+1),He=(de[9]+1)/de[5],U=(de[9]-1)/de[5],Jt=(de[8]-1)/de[0],Se=(we[8]+1)/we[0],Pe=Me*Jt,ge=Me*Se,pt=ue/(-Jt+Se),Oe=pt*-Jt;Y.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(Oe),W.translateZ(pt),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert();const C=Me+pt,S=ye+pt,H=Pe-Oe,te=ge+(ue-Oe),Q=He*ye/S*C,ne=U*ye/S*C;W.projectionMatrix.makePerspective(H,te,Q,ne,C,S),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}function L(W,Y){Y===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(Y.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(r===null)return;E.near=M.near=A.near=W.near,E.far=M.far=A.far=W.far,(w!==E.near||F!==E.far)&&(r.updateRenderState({depthNear:E.near,depthFar:E.far}),w=E.near,F=E.far);const Y=W.parent,oe=E.cameras;L(E,Y);for(let ue=0;ue<oe.length;ue++)L(oe[ue],Y);oe.length===2?q(E,A,M):E.projectionMatrix.copy(A.projectionMatrix),D(W,E,Y)};function D(W,Y,oe){oe===null?W.matrix.copy(Y.matrixWorld):(W.matrix.copy(oe.matrixWorld),W.matrix.invert(),W.matrix.multiply(Y.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(Y.projectionMatrix),W.projectionMatrixInverse.copy(Y.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=va*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(W){l=W,d!==null&&(d.fixedFoveation=W),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=W)};let G=null;function j(W,Y){if(f=Y.getViewerPose(u||s),_=Y,f!==null){const oe=f.views;p!==null&&(e.setRenderTargetFramebuffer(c,p.framebuffer),e.setRenderTarget(c));let ue=!1;oe.length!==E.cameras.length&&(E.cameras.length=0,ue=!0);for(let de=0;de<oe.length;de++){const we=oe[de];let Me=null;if(p!==null)Me=p.getViewport(we);else{const He=h.getViewSubImage(d,we);Me=He.viewport,de===0&&(e.setRenderTargetTextures(c,He.colorTexture,d.ignoreDepthValues?void 0:He.depthStencilTexture),e.setRenderTarget(c))}let ye=N[de];ye===void 0&&(ye=new Fn,ye.layers.enable(de),ye.viewport=new Ht,N[de]=ye),ye.matrix.fromArray(we.transform.matrix),ye.matrix.decompose(ye.position,ye.quaternion,ye.scale),ye.projectionMatrix.fromArray(we.projectionMatrix),ye.projectionMatrixInverse.copy(ye.projectionMatrix).invert(),ye.viewport.set(Me.x,Me.y,Me.width,Me.height),de===0&&(E.matrix.copy(ye.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),ue===!0&&E.cameras.push(ye)}}for(let oe=0;oe<v.length;oe++){const ue=m[oe],de=v[oe];ue!==null&&de!==void 0&&de.update(ue,Y,u||s)}G&&G(W,Y),Y.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Y}),_=null}const Z=new G1;Z.setAnimationLoop(j),this.setAnimationLoop=function(W){G=W},this.dispose=function(){}}}function KR(t,e){function n(g,c){g.matrixAutoUpdate===!0&&g.updateMatrix(),c.value.copy(g.matrix)}function i(g,c){c.color.getRGB(g.fogColor.value,B1(t)),c.isFog?(g.fogNear.value=c.near,g.fogFar.value=c.far):c.isFogExp2&&(g.fogDensity.value=c.density)}function r(g,c,v,m,y){c.isMeshBasicMaterial||c.isMeshLambertMaterial?o(g,c):c.isMeshToonMaterial?(o(g,c),h(g,c)):c.isMeshPhongMaterial?(o(g,c),f(g,c)):c.isMeshStandardMaterial?(o(g,c),d(g,c),c.isMeshPhysicalMaterial&&p(g,c,y)):c.isMeshMatcapMaterial?(o(g,c),_(g,c)):c.isMeshDepthMaterial?o(g,c):c.isMeshDistanceMaterial?(o(g,c),x(g,c)):c.isMeshNormalMaterial?o(g,c):c.isLineBasicMaterial?(s(g,c),c.isLineDashedMaterial&&a(g,c)):c.isPointsMaterial?l(g,c,v,m):c.isSpriteMaterial?u(g,c):c.isShadowMaterial?(g.color.value.copy(c.color),g.opacity.value=c.opacity):c.isShaderMaterial&&(c.uniformsNeedUpdate=!1)}function o(g,c){g.opacity.value=c.opacity,c.color&&g.diffuse.value.copy(c.color),c.emissive&&g.emissive.value.copy(c.emissive).multiplyScalar(c.emissiveIntensity),c.map&&(g.map.value=c.map,n(c.map,g.mapTransform)),c.alphaMap&&(g.alphaMap.value=c.alphaMap,n(c.alphaMap,g.alphaMapTransform)),c.bumpMap&&(g.bumpMap.value=c.bumpMap,n(c.bumpMap,g.bumpMapTransform),g.bumpScale.value=c.bumpScale,c.side===vn&&(g.bumpScale.value*=-1)),c.normalMap&&(g.normalMap.value=c.normalMap,n(c.normalMap,g.normalMapTransform),g.normalScale.value.copy(c.normalScale),c.side===vn&&g.normalScale.value.negate()),c.displacementMap&&(g.displacementMap.value=c.displacementMap,n(c.displacementMap,g.displacementMapTransform),g.displacementScale.value=c.displacementScale,g.displacementBias.value=c.displacementBias),c.emissiveMap&&(g.emissiveMap.value=c.emissiveMap,n(c.emissiveMap,g.emissiveMapTransform)),c.specularMap&&(g.specularMap.value=c.specularMap,n(c.specularMap,g.specularMapTransform)),c.alphaTest>0&&(g.alphaTest.value=c.alphaTest);const v=e.get(c).envMap;if(v&&(g.envMap.value=v,g.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=c.reflectivity,g.ior.value=c.ior,g.refractionRatio.value=c.refractionRatio),c.lightMap){g.lightMap.value=c.lightMap;const m=t._useLegacyLights===!0?Math.PI:1;g.lightMapIntensity.value=c.lightMapIntensity*m,n(c.lightMap,g.lightMapTransform)}c.aoMap&&(g.aoMap.value=c.aoMap,g.aoMapIntensity.value=c.aoMapIntensity,n(c.aoMap,g.aoMapTransform))}function s(g,c){g.diffuse.value.copy(c.color),g.opacity.value=c.opacity,c.map&&(g.map.value=c.map,n(c.map,g.mapTransform))}function a(g,c){g.dashSize.value=c.dashSize,g.totalSize.value=c.dashSize+c.gapSize,g.scale.value=c.scale}function l(g,c,v,m){g.diffuse.value.copy(c.color),g.opacity.value=c.opacity,g.size.value=c.size*v,g.scale.value=m*.5,c.map&&(g.map.value=c.map,n(c.map,g.uvTransform)),c.alphaMap&&(g.alphaMap.value=c.alphaMap,n(c.alphaMap,g.alphaMapTransform)),c.alphaTest>0&&(g.alphaTest.value=c.alphaTest)}function u(g,c){g.diffuse.value.copy(c.color),g.opacity.value=c.opacity,g.rotation.value=c.rotation,c.map&&(g.map.value=c.map,n(c.map,g.mapTransform)),c.alphaMap&&(g.alphaMap.value=c.alphaMap,n(c.alphaMap,g.alphaMapTransform)),c.alphaTest>0&&(g.alphaTest.value=c.alphaTest)}function f(g,c){g.specular.value.copy(c.specular),g.shininess.value=Math.max(c.shininess,1e-4)}function h(g,c){c.gradientMap&&(g.gradientMap.value=c.gradientMap)}function d(g,c){g.metalness.value=c.metalness,c.metalnessMap&&(g.metalnessMap.value=c.metalnessMap,n(c.metalnessMap,g.metalnessMapTransform)),g.roughness.value=c.roughness,c.roughnessMap&&(g.roughnessMap.value=c.roughnessMap,n(c.roughnessMap,g.roughnessMapTransform)),e.get(c).envMap&&(g.envMapIntensity.value=c.envMapIntensity)}function p(g,c,v){g.ior.value=c.ior,c.sheen>0&&(g.sheenColor.value.copy(c.sheenColor).multiplyScalar(c.sheen),g.sheenRoughness.value=c.sheenRoughness,c.sheenColorMap&&(g.sheenColorMap.value=c.sheenColorMap,n(c.sheenColorMap,g.sheenColorMapTransform)),c.sheenRoughnessMap&&(g.sheenRoughnessMap.value=c.sheenRoughnessMap,n(c.sheenRoughnessMap,g.sheenRoughnessMapTransform))),c.clearcoat>0&&(g.clearcoat.value=c.clearcoat,g.clearcoatRoughness.value=c.clearcoatRoughness,c.clearcoatMap&&(g.clearcoatMap.value=c.clearcoatMap,n(c.clearcoatMap,g.clearcoatMapTransform)),c.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=c.clearcoatRoughnessMap,n(c.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),c.clearcoatNormalMap&&(g.clearcoatNormalMap.value=c.clearcoatNormalMap,n(c.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(c.clearcoatNormalScale),c.side===vn&&g.clearcoatNormalScale.value.negate())),c.iridescence>0&&(g.iridescence.value=c.iridescence,g.iridescenceIOR.value=c.iridescenceIOR,g.iridescenceThicknessMinimum.value=c.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=c.iridescenceThicknessRange[1],c.iridescenceMap&&(g.iridescenceMap.value=c.iridescenceMap,n(c.iridescenceMap,g.iridescenceMapTransform)),c.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=c.iridescenceThicknessMap,n(c.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),c.transmission>0&&(g.transmission.value=c.transmission,g.transmissionSamplerMap.value=v.texture,g.transmissionSamplerSize.value.set(v.width,v.height),c.transmissionMap&&(g.transmissionMap.value=c.transmissionMap,n(c.transmissionMap,g.transmissionMapTransform)),g.thickness.value=c.thickness,c.thicknessMap&&(g.thicknessMap.value=c.thicknessMap,n(c.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=c.attenuationDistance,g.attenuationColor.value.copy(c.attenuationColor)),c.anisotropy>0&&(g.anisotropyVector.value.set(c.anisotropy*Math.cos(c.anisotropyRotation),c.anisotropy*Math.sin(c.anisotropyRotation)),c.anisotropyMap&&(g.anisotropyMap.value=c.anisotropyMap,n(c.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=c.specularIntensity,g.specularColor.value.copy(c.specularColor),c.specularColorMap&&(g.specularColorMap.value=c.specularColorMap,n(c.specularColorMap,g.specularColorMapTransform)),c.specularIntensityMap&&(g.specularIntensityMap.value=c.specularIntensityMap,n(c.specularIntensityMap,g.specularIntensityMapTransform))}function _(g,c){c.matcap&&(g.matcap.value=c.matcap)}function x(g,c){const v=e.get(c).light;g.referencePosition.value.setFromMatrixPosition(v.matrixWorld),g.nearDistance.value=v.shadow.camera.near,g.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function QR(t,e,n,i){let r={},o={},s=[];const a=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(v,m){const y=m.program;i.uniformBlockBinding(v,y)}function u(v,m){let y=r[v.id];y===void 0&&(_(v),y=f(v),r[v.id]=y,v.addEventListener("dispose",g));const R=m.program;i.updateUBOMapping(v,R);const A=e.render.frame;o[v.id]!==A&&(d(v),o[v.id]=A)}function f(v){const m=h();v.__bindingPointIndex=m;const y=t.createBuffer(),R=v.__size,A=v.usage;return t.bindBuffer(t.UNIFORM_BUFFER,y),t.bufferData(t.UNIFORM_BUFFER,R,A),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,m,y),y}function h(){for(let v=0;v<a;v++)if(s.indexOf(v)===-1)return s.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){const m=r[v.id],y=v.uniforms,R=v.__cache;t.bindBuffer(t.UNIFORM_BUFFER,m);for(let A=0,M=y.length;A<M;A++){const N=Array.isArray(y[A])?y[A]:[y[A]];for(let E=0,w=N.length;E<w;E++){const F=N[E];if(p(F,A,E,R)===!0){const $=F.__offset,ee=Array.isArray(F.value)?F.value:[F.value];let P=0;for(let O=0;O<ee.length;O++){const X=ee[O],q=x(X);typeof X=="number"||typeof X=="boolean"?(F.__data[0]=X,t.bufferSubData(t.UNIFORM_BUFFER,$+P,F.__data)):X.isMatrix3?(F.__data[0]=X.elements[0],F.__data[1]=X.elements[1],F.__data[2]=X.elements[2],F.__data[3]=0,F.__data[4]=X.elements[3],F.__data[5]=X.elements[4],F.__data[6]=X.elements[5],F.__data[7]=0,F.__data[8]=X.elements[6],F.__data[9]=X.elements[7],F.__data[10]=X.elements[8],F.__data[11]=0):(X.toArray(F.__data,P),P+=q.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,$,F.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(v,m,y,R){const A=v.value,M=m+"_"+y;if(R[M]===void 0)return typeof A=="number"||typeof A=="boolean"?R[M]=A:R[M]=A.clone(),!0;{const N=R[M];if(typeof A=="number"||typeof A=="boolean"){if(N!==A)return R[M]=A,!0}else if(N.equals(A)===!1)return N.copy(A),!0}return!1}function _(v){const m=v.uniforms;let y=0;const R=16;for(let M=0,N=m.length;M<N;M++){const E=Array.isArray(m[M])?m[M]:[m[M]];for(let w=0,F=E.length;w<F;w++){const $=E[w],ee=Array.isArray($.value)?$.value:[$.value];for(let P=0,O=ee.length;P<O;P++){const X=ee[P],q=x(X),L=y%R;L!==0&&R-L<q.boundary&&(y+=R-L),$.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),$.__offset=y,y+=q.storage}}}const A=y%R;return A>0&&(y+=R-A),v.__size=y,v.__cache={},this}function x(v){const m={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(m.boundary=4,m.storage=4):v.isVector2?(m.boundary=8,m.storage=8):v.isVector3||v.isColor?(m.boundary=16,m.storage=12):v.isVector4?(m.boundary=16,m.storage=16):v.isMatrix3?(m.boundary=48,m.storage=48):v.isMatrix4?(m.boundary=64,m.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),m}function g(v){const m=v.target;m.removeEventListener("dispose",g);const y=s.indexOf(m.__bindingPointIndex);s.splice(y,1),t.deleteBuffer(r[m.id]),delete r[m.id],delete o[m.id]}function c(){for(const v in r)t.deleteBuffer(r[v]);s=[],r={},o={}}return{bind:l,update:u,dispose:c}}class q1{constructor(e={}){const{canvas:n=j2(),context:i=null,depth:r=!0,stencil:o=!0,alpha:s=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let d;i!==null?d=i.getContextAttributes().alpha:d=s;const p=new Uint32Array(4),_=new Int32Array(4);let x=null,g=null;const c=[],v=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=kt,this._useLegacyLights=!1,this.toneMapping=hr,this.toneMappingExposure=1;const m=this;let y=!1,R=0,A=0,M=null,N=-1,E=null;const w=new Ht,F=new Ht;let $=null;const ee=new it(0);let P=0,O=n.width,X=n.height,q=1,L=null,D=null;const G=new Ht(0,0,O,X),j=new Ht(0,0,O,X);let Z=!1;const W=new z1;let Y=!1,oe=!1,ue=null;const de=new Gt,we=new Ze,Me=new B,ye={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function He(){return M===null?q:1}let U=i;function Jt(T,I){for(let z=0;z<T.length;z++){const V=T[z],k=n.getContext(V,I);if(k!==null)return k}return null}try{const T={alpha:!0,depth:r,stencil:o,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:f,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Xh}`),n.addEventListener("webglcontextlost",ie,!1),n.addEventListener("webglcontextrestored",b,!1),n.addEventListener("webglcontextcreationerror",se,!1),U===null){const I=["webgl2","webgl","experimental-webgl"];if(m.isWebGL1Renderer===!0&&I.shift(),U=Jt(I,T),U===null)throw Jt(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&U instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),U.getShaderPrecisionFormat===void 0&&(U.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Se,Pe,ge,pt,Oe,C,S,H,te,Q,ne,ve,le,he,Ae,Be,K,tt,We,be,xe,pe,Ie,Qe;function xt(){Se=new lC(U),Pe=new tC(U,Se,e),Se.init(Pe),pe=new jR(U,Se,Pe),ge=new XR(U,Se,Pe),pt=new fC(U),Oe=new LR,C=new $R(U,Se,ge,Oe,Pe,pe,pt),S=new iC(m),H=new aC(m),te=new _T(U,Pe),Ie=new JA(U,Se,te,Pe),Q=new uC(U,te,pt,Ie),ne=new mC(U,Q,te,pt),We=new pC(U,Pe,C),Be=new nC(Oe),ve=new PR(m,S,H,Se,Pe,Ie,Be),le=new KR(m,Oe),he=new DR,Ae=new kR(Se,Pe),tt=new QA(m,S,H,ge,ne,d,l),K=new WR(m,ne,Pe),Qe=new QR(U,pt,Pe,ge),be=new eC(U,Se,pt,Pe),xe=new cC(U,Se,pt,Pe),pt.programs=ve.programs,m.capabilities=Pe,m.extensions=Se,m.properties=Oe,m.renderLists=he,m.shadowMap=K,m.state=ge,m.info=pt}xt();const ze=new ZR(m,U);this.xr=ze,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const T=Se.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Se.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(T){T!==void 0&&(q=T,this.setSize(O,X,!1))},this.getSize=function(T){return T.set(O,X)},this.setSize=function(T,I,z=!0){if(ze.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=T,X=I,n.width=Math.floor(T*q),n.height=Math.floor(I*q),z===!0&&(n.style.width=T+"px",n.style.height=I+"px"),this.setViewport(0,0,T,I)},this.getDrawingBufferSize=function(T){return T.set(O*q,X*q).floor()},this.setDrawingBufferSize=function(T,I,z){O=T,X=I,q=z,n.width=Math.floor(T*z),n.height=Math.floor(I*z),this.setViewport(0,0,T,I)},this.getCurrentViewport=function(T){return T.copy(w)},this.getViewport=function(T){return T.copy(G)},this.setViewport=function(T,I,z,V){T.isVector4?G.set(T.x,T.y,T.z,T.w):G.set(T,I,z,V),ge.viewport(w.copy(G).multiplyScalar(q).floor())},this.getScissor=function(T){return T.copy(j)},this.setScissor=function(T,I,z,V){T.isVector4?j.set(T.x,T.y,T.z,T.w):j.set(T,I,z,V),ge.scissor(F.copy(j).multiplyScalar(q).floor())},this.getScissorTest=function(){return Z},this.setScissorTest=function(T){ge.setScissorTest(Z=T)},this.setOpaqueSort=function(T){L=T},this.setTransparentSort=function(T){D=T},this.getClearColor=function(T){return T.copy(tt.getClearColor())},this.setClearColor=function(){tt.setClearColor.apply(tt,arguments)},this.getClearAlpha=function(){return tt.getClearAlpha()},this.setClearAlpha=function(){tt.setClearAlpha.apply(tt,arguments)},this.clear=function(T=!0,I=!0,z=!0){let V=0;if(T){let k=!1;if(M!==null){const ce=M.texture.format;k=ce===A1||ce===w1||ce===T1}if(k){const ce=M.texture.type,_e=ce===pr||ce===nr||ce===$h||ce===Vr||ce===E1||ce===M1,Te=tt.getClearColor(),Re=tt.getClearAlpha(),ke=Te.r,Le=Te.g,De=Te.b;_e?(p[0]=ke,p[1]=Le,p[2]=De,p[3]=Re,U.clearBufferuiv(U.COLOR,0,p)):(_[0]=ke,_[1]=Le,_[2]=De,_[3]=Re,U.clearBufferiv(U.COLOR,0,_))}else V|=U.COLOR_BUFFER_BIT}I&&(V|=U.DEPTH_BUFFER_BIT),z&&(V|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",ie,!1),n.removeEventListener("webglcontextrestored",b,!1),n.removeEventListener("webglcontextcreationerror",se,!1),he.dispose(),Ae.dispose(),Oe.dispose(),S.dispose(),H.dispose(),ne.dispose(),Ie.dispose(),Qe.dispose(),ve.dispose(),ze.dispose(),ze.removeEventListener("sessionstart",en),ze.removeEventListener("sessionend",st),ue&&(ue.dispose(),ue=null),tn.stop()};function ie(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function b(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const T=pt.autoReset,I=K.enabled,z=K.autoUpdate,V=K.needsUpdate,k=K.type;xt(),pt.autoReset=T,K.enabled=I,K.autoUpdate=z,K.needsUpdate=V,K.type=k}function se(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function ae(T){const I=T.target;I.removeEventListener("dispose",ae),Ce(I)}function Ce(T){Ee(T),Oe.remove(T)}function Ee(T){const I=Oe.get(T).programs;I!==void 0&&(I.forEach(function(z){ve.releaseProgram(z)}),T.isShaderMaterial&&ve.releaseShaderCache(T))}this.renderBufferDirect=function(T,I,z,V,k,ce){I===null&&(I=ye);const _e=k.isMesh&&k.matrixWorld.determinant()<0,Te=Tx(T,I,z,V,k);ge.setMaterial(V,_e);let Re=z.index,ke=1;if(V.wireframe===!0){if(Re=Q.getWireframeAttribute(z),Re===void 0)return;ke=2}const Le=z.drawRange,De=z.attributes.position;let Et=Le.start*ke,_n=(Le.start+Le.count)*ke;ce!==null&&(Et=Math.max(Et,ce.start*ke),_n=Math.min(_n,(ce.start+ce.count)*ke)),Re!==null?(Et=Math.max(Et,0),_n=Math.min(_n,Re.count)):De!=null&&(Et=Math.max(Et,0),_n=Math.min(_n,De.count));const Nt=_n-Et;if(Nt<0||Nt===1/0)return;Ie.setup(k,V,Te,z,Re);let yi,mt=be;if(Re!==null&&(yi=te.get(Re),mt=xe,mt.setIndex(yi)),k.isMesh)V.wireframe===!0?(ge.setLineWidth(V.wireframeLinewidth*He()),mt.setMode(U.LINES)):mt.setMode(U.TRIANGLES);else if(k.isLine){let Ge=V.linewidth;Ge===void 0&&(Ge=1),ge.setLineWidth(Ge*He()),k.isLineSegments?mt.setMode(U.LINES):k.isLineLoop?mt.setMode(U.LINE_LOOP):mt.setMode(U.LINE_STRIP)}else k.isPoints?mt.setMode(U.POINTS):k.isSprite&&mt.setMode(U.TRIANGLES);if(k.isBatchedMesh)mt.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else if(k.isInstancedMesh)mt.renderInstances(Et,Nt,k.count);else if(z.isInstancedBufferGeometry){const Ge=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,uc=Math.min(z.instanceCount,Ge);mt.renderInstances(Et,Nt,uc)}else mt.render(Et,Nt)};function rt(T,I,z){T.transparent===!0&&T.side===Pi&&T.forceSinglePass===!1?(T.side=vn,T.needsUpdate=!0,La(T,I,z),T.side=_r,T.needsUpdate=!0,La(T,I,z),T.side=Pi):La(T,I,z)}this.compile=function(T,I,z=null){z===null&&(z=T),g=Ae.get(z),g.init(),v.push(g),z.traverseVisible(function(k){k.isLight&&k.layers.test(I.layers)&&(g.pushLight(k),k.castShadow&&g.pushShadow(k))}),T!==z&&T.traverseVisible(function(k){k.isLight&&k.layers.test(I.layers)&&(g.pushLight(k),k.castShadow&&g.pushShadow(k))}),g.setupLights(m._useLegacyLights);const V=new Set;return T.traverse(function(k){const ce=k.material;if(ce)if(Array.isArray(ce))for(let _e=0;_e<ce.length;_e++){const Te=ce[_e];rt(Te,z,k),V.add(Te)}else rt(ce,z,k),V.add(ce)}),v.pop(),g=null,V},this.compileAsync=function(T,I,z=null){const V=this.compile(T,I,z);return new Promise(k=>{function ce(){if(V.forEach(function(_e){Oe.get(_e).currentProgram.isReady()&&V.delete(_e)}),V.size===0){k(T);return}setTimeout(ce,10)}Se.get("KHR_parallel_shader_compile")!==null?ce():setTimeout(ce,10)})};let ot=null;function Lt(T){ot&&ot(T)}function en(){tn.stop()}function st(){tn.start()}const tn=new G1;tn.setAnimationLoop(Lt),typeof self<"u"&&tn.setContext(self),this.setAnimationLoop=function(T){ot=T,ze.setAnimationLoop(T),T===null?tn.stop():tn.start()},ze.addEventListener("sessionstart",en),ze.addEventListener("sessionend",st),this.render=function(T,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),ze.enabled===!0&&ze.isPresenting===!0&&(ze.cameraAutoUpdate===!0&&ze.updateCamera(I),I=ze.getCamera()),T.isScene===!0&&T.onBeforeRender(m,T,I,M),g=Ae.get(T,v.length),g.init(),v.push(g),de.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),W.setFromProjectionMatrix(de),oe=this.localClippingEnabled,Y=Be.init(this.clippingPlanes,oe),x=he.get(T,c.length),x.init(),c.push(x),si(T,I,0,m.sortObjects),x.finish(),m.sortObjects===!0&&x.sort(L,D),this.info.render.frame++,Y===!0&&Be.beginShadows();const z=g.state.shadowsArray;if(K.render(z,T,I),Y===!0&&Be.endShadows(),this.info.autoReset===!0&&this.info.reset(),tt.render(x,T),g.setupLights(m._useLegacyLights),I.isArrayCamera){const V=I.cameras;for(let k=0,ce=V.length;k<ce;k++){const _e=V[k];ap(x,T,_e,_e.viewport)}}else ap(x,T,I);M!==null&&(C.updateMultisampleRenderTarget(M),C.updateRenderTargetMipmap(M)),T.isScene===!0&&T.onAfterRender(m,T,I),Ie.resetDefaultState(),N=-1,E=null,v.pop(),v.length>0?g=v[v.length-1]:g=null,c.pop(),c.length>0?x=c[c.length-1]:x=null};function si(T,I,z,V){if(T.visible===!1)return;if(T.layers.test(I.layers)){if(T.isGroup)z=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(I);else if(T.isLight)g.pushLight(T),T.castShadow&&g.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||W.intersectsSprite(T)){V&&Me.setFromMatrixPosition(T.matrixWorld).applyMatrix4(de);const _e=ne.update(T),Te=T.material;Te.visible&&x.push(T,_e,Te,z,Me.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||W.intersectsObject(T))){const _e=ne.update(T),Te=T.material;if(V&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Me.copy(T.boundingSphere.center)):(_e.boundingSphere===null&&_e.computeBoundingSphere(),Me.copy(_e.boundingSphere.center)),Me.applyMatrix4(T.matrixWorld).applyMatrix4(de)),Array.isArray(Te)){const Re=_e.groups;for(let ke=0,Le=Re.length;ke<Le;ke++){const De=Re[ke],Et=Te[De.materialIndex];Et&&Et.visible&&x.push(T,_e,Et,z,Me.z,De)}}else Te.visible&&x.push(T,_e,Te,z,Me.z,null)}}const ce=T.children;for(let _e=0,Te=ce.length;_e<Te;_e++)si(ce[_e],I,z,V)}function ap(T,I,z,V){const k=T.opaque,ce=T.transmissive,_e=T.transparent;g.setupLightsView(z),Y===!0&&Be.setGlobalState(m.clippingPlanes,z),ce.length>0&&Mx(k,ce,I,z),V&&ge.viewport(w.copy(V)),k.length>0&&Pa(k,I,z),ce.length>0&&Pa(ce,I,z),_e.length>0&&Pa(_e,I,z),ge.buffers.depth.setTest(!0),ge.buffers.depth.setMask(!0),ge.buffers.color.setMask(!0),ge.setPolygonOffset(!1)}function Mx(T,I,z,V){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;const ce=Pe.isWebGL2;ue===null&&(ue=new eo(1,1,{generateMipmaps:!0,type:Se.has("EXT_color_buffer_half_float")?ga:pr,minFilter:ma,samples:ce?4:0})),m.getDrawingBufferSize(we),ce?ue.setSize(we.x,we.y):ue.setSize(vu(we.x),vu(we.y));const _e=m.getRenderTarget();m.setRenderTarget(ue),m.getClearColor(ee),P=m.getClearAlpha(),P<1&&m.setClearColor(16777215,.5),m.clear();const Te=m.toneMapping;m.toneMapping=hr,Pa(T,z,V),C.updateMultisampleRenderTarget(ue),C.updateRenderTargetMipmap(ue);let Re=!1;for(let ke=0,Le=I.length;ke<Le;ke++){const De=I[ke],Et=De.object,_n=De.geometry,Nt=De.material,yi=De.group;if(Nt.side===Pi&&Et.layers.test(V.layers)){const mt=Nt.side;Nt.side=vn,Nt.needsUpdate=!0,lp(Et,z,V,_n,Nt,yi),Nt.side=mt,Nt.needsUpdate=!0,Re=!0}}Re===!0&&(C.updateMultisampleRenderTarget(ue),C.updateRenderTargetMipmap(ue)),m.setRenderTarget(_e),m.setClearColor(ee,P),m.toneMapping=Te}function Pa(T,I,z){const V=I.isScene===!0?I.overrideMaterial:null;for(let k=0,ce=T.length;k<ce;k++){const _e=T[k],Te=_e.object,Re=_e.geometry,ke=V===null?_e.material:V,Le=_e.group;Te.layers.test(z.layers)&&lp(Te,I,z,Re,ke,Le)}}function lp(T,I,z,V,k,ce){T.onBeforeRender(m,I,z,V,k,ce),T.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),k.onBeforeRender(m,I,z,V,T,ce),k.transparent===!0&&k.side===Pi&&k.forceSinglePass===!1?(k.side=vn,k.needsUpdate=!0,m.renderBufferDirect(z,I,V,k,T,ce),k.side=_r,k.needsUpdate=!0,m.renderBufferDirect(z,I,V,k,T,ce),k.side=Pi):m.renderBufferDirect(z,I,V,k,T,ce),T.onAfterRender(m,I,z,V,k,ce)}function La(T,I,z){I.isScene!==!0&&(I=ye);const V=Oe.get(T),k=g.state.lights,ce=g.state.shadowsArray,_e=k.state.version,Te=ve.getParameters(T,k.state,ce,I,z),Re=ve.getProgramCacheKey(Te);let ke=V.programs;V.environment=T.isMeshStandardMaterial?I.environment:null,V.fog=I.fog,V.envMap=(T.isMeshStandardMaterial?H:S).get(T.envMap||V.environment),ke===void 0&&(T.addEventListener("dispose",ae),ke=new Map,V.programs=ke);let Le=ke.get(Re);if(Le!==void 0){if(V.currentProgram===Le&&V.lightsStateVersion===_e)return cp(T,Te),Le}else Te.uniforms=ve.getUniforms(T),T.onBuild(z,Te,m),T.onBeforeCompile(Te,m),Le=ve.acquireProgram(Te,Re),ke.set(Re,Le),V.uniforms=Te.uniforms;const De=V.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(De.clippingPlanes=Be.uniform),cp(T,Te),V.needsLights=Ax(T),V.lightsStateVersion=_e,V.needsLights&&(De.ambientLightColor.value=k.state.ambient,De.lightProbe.value=k.state.probe,De.directionalLights.value=k.state.directional,De.directionalLightShadows.value=k.state.directionalShadow,De.spotLights.value=k.state.spot,De.spotLightShadows.value=k.state.spotShadow,De.rectAreaLights.value=k.state.rectArea,De.ltc_1.value=k.state.rectAreaLTC1,De.ltc_2.value=k.state.rectAreaLTC2,De.pointLights.value=k.state.point,De.pointLightShadows.value=k.state.pointShadow,De.hemisphereLights.value=k.state.hemi,De.directionalShadowMap.value=k.state.directionalShadowMap,De.directionalShadowMatrix.value=k.state.directionalShadowMatrix,De.spotShadowMap.value=k.state.spotShadowMap,De.spotLightMatrix.value=k.state.spotLightMatrix,De.spotLightMap.value=k.state.spotLightMap,De.pointShadowMap.value=k.state.pointShadowMap,De.pointShadowMatrix.value=k.state.pointShadowMatrix),V.currentProgram=Le,V.uniformsList=null,Le}function up(T){if(T.uniformsList===null){const I=T.currentProgram.getUniforms();T.uniformsList=Fl.seqWithValue(I.seq,T.uniforms)}return T.uniformsList}function cp(T,I){const z=Oe.get(T);z.outputColorSpace=I.outputColorSpace,z.batching=I.batching,z.instancing=I.instancing,z.instancingColor=I.instancingColor,z.skinning=I.skinning,z.morphTargets=I.morphTargets,z.morphNormals=I.morphNormals,z.morphColors=I.morphColors,z.morphTargetsCount=I.morphTargetsCount,z.numClippingPlanes=I.numClippingPlanes,z.numIntersection=I.numClipIntersection,z.vertexAlphas=I.vertexAlphas,z.vertexTangents=I.vertexTangents,z.toneMapping=I.toneMapping}function Tx(T,I,z,V,k){I.isScene!==!0&&(I=ye),C.resetTextureUnits();const ce=I.fog,_e=V.isMeshStandardMaterial?I.environment:null,Te=M===null?m.outputColorSpace:M.isXRRenderTarget===!0?M.texture.colorSpace:ki,Re=(V.isMeshStandardMaterial?H:S).get(V.envMap||_e),ke=V.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Le=!!z.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),De=!!z.morphAttributes.position,Et=!!z.morphAttributes.normal,_n=!!z.morphAttributes.color;let Nt=hr;V.toneMapped&&(M===null||M.isXRRenderTarget===!0)&&(Nt=m.toneMapping);const yi=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,mt=yi!==void 0?yi.length:0,Ge=Oe.get(V),uc=g.state.lights;if(Y===!0&&(oe===!0||T!==E)){const Ln=T===E&&V.id===N;Be.setState(V,T,Ln)}let yt=!1;V.version===Ge.__version?(Ge.needsLights&&Ge.lightsStateVersion!==uc.state.version||Ge.outputColorSpace!==Te||k.isBatchedMesh&&Ge.batching===!1||!k.isBatchedMesh&&Ge.batching===!0||k.isInstancedMesh&&Ge.instancing===!1||!k.isInstancedMesh&&Ge.instancing===!0||k.isSkinnedMesh&&Ge.skinning===!1||!k.isSkinnedMesh&&Ge.skinning===!0||k.isInstancedMesh&&Ge.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Ge.instancingColor===!1&&k.instanceColor!==null||Ge.envMap!==Re||V.fog===!0&&Ge.fog!==ce||Ge.numClippingPlanes!==void 0&&(Ge.numClippingPlanes!==Be.numPlanes||Ge.numIntersection!==Be.numIntersection)||Ge.vertexAlphas!==ke||Ge.vertexTangents!==Le||Ge.morphTargets!==De||Ge.morphNormals!==Et||Ge.morphColors!==_n||Ge.toneMapping!==Nt||Pe.isWebGL2===!0&&Ge.morphTargetsCount!==mt)&&(yt=!0):(yt=!0,Ge.__version=V.version);let Mr=Ge.currentProgram;yt===!0&&(Mr=La(V,I,k));let fp=!1,Ss=!1,cc=!1;const Wt=Mr.getUniforms(),Tr=Ge.uniforms;if(ge.useProgram(Mr.program)&&(fp=!0,Ss=!0,cc=!0),V.id!==N&&(N=V.id,Ss=!0),fp||E!==T){Wt.setValue(U,"projectionMatrix",T.projectionMatrix),Wt.setValue(U,"viewMatrix",T.matrixWorldInverse);const Ln=Wt.map.cameraPosition;Ln!==void 0&&Ln.setValue(U,Me.setFromMatrixPosition(T.matrixWorld)),Pe.logarithmicDepthBuffer&&Wt.setValue(U,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&Wt.setValue(U,"isOrthographic",T.isOrthographicCamera===!0),E!==T&&(E=T,Ss=!0,cc=!0)}if(k.isSkinnedMesh){Wt.setOptional(U,k,"bindMatrix"),Wt.setOptional(U,k,"bindMatrixInverse");const Ln=k.skeleton;Ln&&(Pe.floatVertexTextures?(Ln.boneTexture===null&&Ln.computeBoneTexture(),Wt.setValue(U,"boneTexture",Ln.boneTexture,C)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}k.isBatchedMesh&&(Wt.setOptional(U,k,"batchingTexture"),Wt.setValue(U,"batchingTexture",k._matricesTexture,C));const fc=z.morphAttributes;if((fc.position!==void 0||fc.normal!==void 0||fc.color!==void 0&&Pe.isWebGL2===!0)&&We.update(k,z,Mr),(Ss||Ge.receiveShadow!==k.receiveShadow)&&(Ge.receiveShadow=k.receiveShadow,Wt.setValue(U,"receiveShadow",k.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(Tr.envMap.value=Re,Tr.flipEnvMap.value=Re.isCubeTexture&&Re.isRenderTargetTexture===!1?-1:1),Ss&&(Wt.setValue(U,"toneMappingExposure",m.toneMappingExposure),Ge.needsLights&&wx(Tr,cc),ce&&V.fog===!0&&le.refreshFogUniforms(Tr,ce),le.refreshMaterialUniforms(Tr,V,q,X,ue),Fl.upload(U,up(Ge),Tr,C)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Fl.upload(U,up(Ge),Tr,C),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&Wt.setValue(U,"center",k.center),Wt.setValue(U,"modelViewMatrix",k.modelViewMatrix),Wt.setValue(U,"normalMatrix",k.normalMatrix),Wt.setValue(U,"modelMatrix",k.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const Ln=V.uniformsGroups;for(let dc=0,Cx=Ln.length;dc<Cx;dc++)if(Pe.isWebGL2){const dp=Ln[dc];Qe.update(dp,Mr),Qe.bind(dp,Mr)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Mr}function wx(T,I){T.ambientLightColor.needsUpdate=I,T.lightProbe.needsUpdate=I,T.directionalLights.needsUpdate=I,T.directionalLightShadows.needsUpdate=I,T.pointLights.needsUpdate=I,T.pointLightShadows.needsUpdate=I,T.spotLights.needsUpdate=I,T.spotLightShadows.needsUpdate=I,T.rectAreaLights.needsUpdate=I,T.hemisphereLights.needsUpdate=I}function Ax(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(T,I,z){Oe.get(T.texture).__webglTexture=I,Oe.get(T.depthTexture).__webglTexture=z;const V=Oe.get(T);V.__hasExternalTextures=!0,V.__hasExternalTextures&&(V.__autoAllocateDepthBuffer=z===void 0,V.__autoAllocateDepthBuffer||Se.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,I){const z=Oe.get(T);z.__webglFramebuffer=I,z.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(T,I=0,z=0){M=T,R=I,A=z;let V=!0,k=null,ce=!1,_e=!1;if(T){const Re=Oe.get(T);Re.__useDefaultFramebuffer!==void 0?(ge.bindFramebuffer(U.FRAMEBUFFER,null),V=!1):Re.__webglFramebuffer===void 0?C.setupRenderTarget(T):Re.__hasExternalTextures&&C.rebindTextures(T,Oe.get(T.texture).__webglTexture,Oe.get(T.depthTexture).__webglTexture);const ke=T.texture;(ke.isData3DTexture||ke.isDataArrayTexture||ke.isCompressedArrayTexture)&&(_e=!0);const Le=Oe.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Le[I])?k=Le[I][z]:k=Le[I],ce=!0):Pe.isWebGL2&&T.samples>0&&C.useMultisampledRTT(T)===!1?k=Oe.get(T).__webglMultisampledFramebuffer:Array.isArray(Le)?k=Le[z]:k=Le,w.copy(T.viewport),F.copy(T.scissor),$=T.scissorTest}else w.copy(G).multiplyScalar(q).floor(),F.copy(j).multiplyScalar(q).floor(),$=Z;if(ge.bindFramebuffer(U.FRAMEBUFFER,k)&&Pe.drawBuffers&&V&&ge.drawBuffers(T,k),ge.viewport(w),ge.scissor(F),ge.setScissorTest($),ce){const Re=Oe.get(T.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+I,Re.__webglTexture,z)}else if(_e){const Re=Oe.get(T.texture),ke=I||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,Re.__webglTexture,z||0,ke)}N=-1},this.readRenderTargetPixels=function(T,I,z,V,k,ce,_e){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=Oe.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&_e!==void 0&&(Te=Te[_e]),Te){ge.bindFramebuffer(U.FRAMEBUFFER,Te);try{const Re=T.texture,ke=Re.format,Le=Re.type;if(ke!==ei&&pe.convert(ke)!==U.getParameter(U.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const De=Le===ga&&(Se.has("EXT_color_buffer_half_float")||Pe.isWebGL2&&Se.has("EXT_color_buffer_float"));if(Le!==pr&&pe.convert(Le)!==U.getParameter(U.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Le===ir&&(Pe.isWebGL2||Se.has("OES_texture_float")||Se.has("WEBGL_color_buffer_float")))&&!De){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=T.width-V&&z>=0&&z<=T.height-k&&U.readPixels(I,z,V,k,pe.convert(ke),pe.convert(Le),ce)}finally{const Re=M!==null?Oe.get(M).__webglFramebuffer:null;ge.bindFramebuffer(U.FRAMEBUFFER,Re)}}},this.copyFramebufferToTexture=function(T,I,z=0){const V=Math.pow(2,-z),k=Math.floor(I.image.width*V),ce=Math.floor(I.image.height*V);C.setTexture2D(I,0),U.copyTexSubImage2D(U.TEXTURE_2D,z,0,0,T.x,T.y,k,ce),ge.unbindTexture()},this.copyTextureToTexture=function(T,I,z,V=0){const k=I.image.width,ce=I.image.height,_e=pe.convert(z.format),Te=pe.convert(z.type);C.setTexture2D(z,0),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,z.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,z.unpackAlignment),I.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,V,T.x,T.y,k,ce,_e,Te,I.image.data):I.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,V,T.x,T.y,I.mipmaps[0].width,I.mipmaps[0].height,_e,I.mipmaps[0].data):U.texSubImage2D(U.TEXTURE_2D,V,T.x,T.y,_e,Te,I.image),V===0&&z.generateMipmaps&&U.generateMipmap(U.TEXTURE_2D),ge.unbindTexture()},this.copyTextureToTexture3D=function(T,I,z,V,k=0){if(m.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ce=T.max.x-T.min.x+1,_e=T.max.y-T.min.y+1,Te=T.max.z-T.min.z+1,Re=pe.convert(V.format),ke=pe.convert(V.type);let Le;if(V.isData3DTexture)C.setTexture3D(V,0),Le=U.TEXTURE_3D;else if(V.isDataArrayTexture||V.isCompressedArrayTexture)C.setTexture2DArray(V,0),Le=U.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,V.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,V.unpackAlignment);const De=U.getParameter(U.UNPACK_ROW_LENGTH),Et=U.getParameter(U.UNPACK_IMAGE_HEIGHT),_n=U.getParameter(U.UNPACK_SKIP_PIXELS),Nt=U.getParameter(U.UNPACK_SKIP_ROWS),yi=U.getParameter(U.UNPACK_SKIP_IMAGES),mt=z.isCompressedTexture?z.mipmaps[k]:z.image;U.pixelStorei(U.UNPACK_ROW_LENGTH,mt.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,mt.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,T.min.x),U.pixelStorei(U.UNPACK_SKIP_ROWS,T.min.y),U.pixelStorei(U.UNPACK_SKIP_IMAGES,T.min.z),z.isDataTexture||z.isData3DTexture?U.texSubImage3D(Le,k,I.x,I.y,I.z,ce,_e,Te,Re,ke,mt.data):z.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),U.compressedTexSubImage3D(Le,k,I.x,I.y,I.z,ce,_e,Te,Re,mt.data)):U.texSubImage3D(Le,k,I.x,I.y,I.z,ce,_e,Te,Re,ke,mt),U.pixelStorei(U.UNPACK_ROW_LENGTH,De),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Et),U.pixelStorei(U.UNPACK_SKIP_PIXELS,_n),U.pixelStorei(U.UNPACK_SKIP_ROWS,Nt),U.pixelStorei(U.UNPACK_SKIP_IMAGES,yi),k===0&&V.generateMipmaps&&U.generateMipmap(Le),ge.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?C.setTextureCube(T,0):T.isData3DTexture?C.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?C.setTexture2DArray(T,0):C.setTexture2D(T,0),ge.unbindTexture()},this.resetState=function(){R=0,A=0,M=null,ge.reset(),Ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Di}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===jh?"display-p3":"srgb",n.unpackColorSpace=nt.workingColorSpace===Qu?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===kt?Xr:R1}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Xr?kt:ki}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class JR extends q1{}JR.prototype.isWebGL1Renderer=!0;class eb extends An{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}}class Jh extends zi{constructor(e=1,n=1,i=1,r=32,o=1,s=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:o,openEnded:s,thetaStart:a,thetaLength:l};const u=this;r=Math.floor(r),o=Math.floor(o);const f=[],h=[],d=[],p=[];let _=0;const x=[],g=i/2;let c=0;v(),s===!1&&(e>0&&m(!0),n>0&&m(!1)),this.setIndex(f),this.setAttribute("position",new _i(h,3)),this.setAttribute("normal",new _i(d,3)),this.setAttribute("uv",new _i(p,2));function v(){const y=new B,R=new B;let A=0;const M=(n-e)/i;for(let N=0;N<=o;N++){const E=[],w=N/o,F=w*(n-e)+e;for(let $=0;$<=r;$++){const ee=$/r,P=ee*l+a,O=Math.sin(P),X=Math.cos(P);R.x=F*O,R.y=-w*i+g,R.z=F*X,h.push(R.x,R.y,R.z),y.set(O,M,X).normalize(),d.push(y.x,y.y,y.z),p.push(ee,1-w),E.push(_++)}x.push(E)}for(let N=0;N<r;N++)for(let E=0;E<o;E++){const w=x[E][N],F=x[E+1][N],$=x[E+1][N+1],ee=x[E][N+1];f.push(w,F,ee),f.push(F,$,ee),A+=6}u.addGroup(c,A,0),c+=A}function m(y){const R=_,A=new Ze,M=new B;let N=0;const E=y===!0?e:n,w=y===!0?1:-1;for(let $=1;$<=r;$++)h.push(0,g*w,0),d.push(0,w,0),p.push(.5,.5),_++;const F=_;for(let $=0;$<=r;$++){const P=$/r*l+a,O=Math.cos(P),X=Math.sin(P);M.x=E*X,M.y=g*w,M.z=E*O,h.push(M.x,M.y,M.z),d.push(0,w,0),A.x=O*.5+.5,A.y=X*.5*w+.5,p.push(A.x,A.y),_++}for(let $=0;$<r;$++){const ee=R+$,P=F+$;y===!0?f.push(P,P+1,ee):f.push(P+1,P,ee),N+=3}u.addGroup(c,N,y===!0?1:2),c+=N}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jh(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class tb{constructor(e,n,i=0,r=1/0){this.ray=new I1(e,n),this.near=i,this.far=r,this.camera=null,this.layers=new Zh,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}intersectObject(e,n=!0,i=[]){return Fd(e,this,i,n),i.sort(o0),i}intersectObjects(e,n=!0,i=[]){for(let r=0,o=e.length;r<o;r++)Fd(e[r],this,i,n);return i.sort(o0),i}}function o0(t,e){return t.distance-e.distance}function Fd(t,e,n,i){if(t.layers.test(e.layers)&&t.raycast(e,n),i===!0){const r=t.children;for(let o=0,s=r.length;o<s;o++)Fd(r[o],e,n,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Xh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Xh);var Ki=(t=>(t[t.simple=0]="simple",t[t.dynamic=1]="dynamic",t))(Ki||{});const nb=()=>{const t={animations:[]},e=o=>{switch(o.type){case Ki.simple:{if(typeof o.callback!="function"||typeof o.ticksDuration!="number"||o.ticksDuration<=0)return;break}case Ki.dynamic:{if(typeof o.callback!="function"||typeof o.isEndedGetter!="function"||typeof o.isPossibleGetter!="function")return;break}default:{console.warn(`Cannot add animation ${JSON.stringify(o)} because animation type is incorrect.`);return}}t.animations.push(o)},n=o=>{t.animations=t.animations.filter(s=>s.id!==o)},i=()=>{t.animations=t.animations.filter(o=>{switch(o.type){case Ki.simple:return o.tick<o.ticksDuration;case Ki.dynamic:return!o.isEndedGetter()}})};return{animate:()=>{for(const o of t.animations)switch(o.type){case Ki.simple:{o.tick<o.ticksDuration&&(o.callback({tick:o.tick,ticksDuration:o.ticksDuration}),o.tick++);break}case Ki.dynamic:{o.isPossibleGetter()&&o.callback();break}}i()},addAnimation:e,clearAnimation:n,clearAllEndedAnimations:i}},ib=({maxSize:t})=>new Array(t.x).fill(!1).map(()=>new Array(t.y).fill(!1).map(()=>!1)),rb=t=>{const{x:e,y:n}=t;return[e-.5,n-.5,0,e+.5,n-.5,0,e+.5,n+.5,0,e+.5,n+.5,0,e-.5,n+.5,0,e-.5,n-.5,0]},ob=({board:t})=>{const e=t.map((s,a)=>s.map((l,u)=>l&&rb({x:a,y:u}))),n=[];for(const s of e)for(const a of s)a&&n.push(...a);const i=new Float32Array(n),r=new zi;r.setAttribute("position",new ii(i,3));const o=new tc({color:"gray"});return new mi(r,o)},sb=(t,{x:e,y:n})=>{var r,o,s,a,l,u,f,h;const i=[];for(const d of t.vacantPositions)d.x===e&&d.y===n||i.push(d);((o=(r=t.board)==null?void 0:r[e-1])==null?void 0:o[n])===!1&&!i.find(d=>d.x===e-1&&d.y===n)&&i.push({x:e-1,y:n}),((a=(s=t.board)==null?void 0:s[e])==null?void 0:a[n-1])===!1&&!i.find(d=>d.x===e&&d.y===n-1)&&i.push({x:e,y:n-1}),((u=(l=t.board)==null?void 0:l[e+1])==null?void 0:u[n])===!1&&!i.find(d=>d.x===e+1&&d.y===n)&&i.push({x:e+1,y:n}),((h=(f=t.board)==null?void 0:f[e])==null?void 0:h[n+1])===!1&&!i.find(d=>d.x===e&&d.y===n+1)&&i.push({x:e,y:n+1}),t.vacantPositions=i},ab=(t,{x:e,y:n})=>{t.board[e][n]=!0,sb(t,{x:e,y:n})},zo=(t,e)=>{t.actualPosition=e,ab(t,e)},lb=t=>{const{vacantPositions:e}=t,n=e.length>0&&e[Math.abs(Math.round(Math.random()*e.length-1))];n&&zo(t,n)},ub=t=>{const e=Math.round(Math.random()*100),{board:n,maxX:i,maxY:r,actualPosition:{x:o,y:s}}=t;if(e<=25&&s+1<r&&!n[o][s+1]){zo(t,{x:o,y:s+1});return}if(e<=50&&o+1<i&&!n[o+1][s]){zo(t,{x:o+1,y:s});return}if(e<=75&&s-1>=0&&!n[o][s-1]){zo(t,{x:o,y:s-1});return}if(o-1>=0&&!n[o-1][s]){zo(t,{x:o-1,y:s});return}lb(t)},cb=({baseBoard:t,walkable:e})=>{const n=[];for(const o of t){const s=[];for(const a of o)s.push(a);n.push(s)}const i={board:n,maxX:t.length,maxY:t[0].length,actualPosition:{x:0,y:0},vacantPositions:[]};zo(i,{x:Math.round(i.maxX/2),y:Math.round(i.maxY/2)});const r=Math.round(t.length*t[0].length*(e>=0&&e<=1?e:.5));for(let o=1;o<r;o++)ub(i);return i.board},fb={x:100,y:100},db=({Scene:t,ResourceTracker:e})=>{const n={board:[],boardModel:null};return{generateBoard:()=>{n.boardModel&&e.disposeTrackedResource("board");const r=ib({maxSize:fb}),o=cb({baseBoard:r,walkable:.1});n.board=o;const s=ob({board:o});s.matrixAutoUpdate=!1,s.updateMatrix(),n.boardModel=s,e.trackResource({id:"board",resource:s}),t.add(s)}}},hb=({Scene:t,ResourceTracker:e})=>{const n=db({Scene:t,ResourceTracker:e});return{generateBoard:()=>{n.generateBoard()}}},pb=({path:t,speedGetter:e,positionUpdate:n})=>{const i={pathCopy:[],distanceTraveled:0,pathDistances:[]};for(let l=0;l<t.length&&(i.pathCopy.push(t[l].clone()),l!==t.length-1);l++)i.pathDistances.push(t[l].manhattanDistanceTo(t[l+1]));const r=()=>{const l=e(),u=i.distanceTraveled+l;for(let f=0;f<i.pathDistances.length;f++){const h=i.pathDistances.slice(0,f).reduce((p,_)=>p+=_,0),d=h+i.pathDistances[f];if(u>=h&&u<d)return{distanceIndex:f,minDistanceForPathPart:h,currentSpeed:l}}},o=({distanceIndex:l,minDistanceForPathPart:u,currentSpeed:f})=>{const h=i.pathDistances[l];return(i.distanceTraveled-u+f)/h},s=({distanceIndex:l,lerpAlpha:u})=>i.pathCopy[l].clone().lerp(i.pathCopy[l+1],u);return()=>{const l=r();if(!l){console.log("end"),n(i.pathCopy[i.pathCopy.length-1]);return}const u=o(l),f=s({...l,lerpAlpha:u});i.distanceTraveled+=l.currentSpeed,n(f)}},mb=({Scene:t,ResourceTracker:e,polygons:n})=>{const i=[];for(let r=0;r<n.length;r+=3){const o=new Ze;o.addVectors(n[r],n[r+1]).add(n[r+2]).multiplyScalar(1/3).multiplyScalar(100).round().divideScalar(100);const s=[n[r],n[r+1],n[r+2]];i.push({polygons:s,center:o})}return{centroids:i}},gb=({centroids:t})=>{const e=[];for(const n of t){const{center:i,polygons:r}=n,o=[];for(const a of t){const{center:l,polygons:u}=a;if(l.x===i.x&&l.y===n.center.y)continue;const f=[];for(const h of r)for(const d of u)f.length>=2||d.x===h.x&&d.y===h.y&&f.push(u);f.length>=2&&o.push(`${l.x}#${l.y}`)}const s={id:`${n.center.x}#${n.center.y}`,...n,neighborNodesIds:o};e.push(s)}return{graph:e}},Z1=(t,e=[])=>{for(const n of e)if(t.id===n.id)return t;return t.previousNode?Z1(t.previousNode,e):!1},vb=({startPosition:t,startNodeId:e,destinationPosition:n,destinationNodeId:i,graph:r})=>{const o=r.find(({id:c})=>c===e),s=r.find(({id:c})=>c===i);if(!o||!s)return{path:[]};const a={...o,distance:s.center.manhattanDistanceTo(o.center),neighborNodes:[],stepped:!0},l={...s,distance:0,neighborNodes:[]},u=[a,l];for(const c of r)c.id!==e&&c.id!==i&&u.push({...c,distance:l.center.manhattanDistanceTo(c.center),neighborNodes:[]});for(const c of u)for(const v of c.neighborNodesIds){const m=u.find(({id:y})=>y===v);m&&c.neighborNodes.push(m)}const f=({distance:c},{distance:v})=>c-v,h=c=>{if(c.distance===0)return c;if(c.neighborNodes.filter(({stepped:v})=>!v).length===0&&c.previousNode)return h(c.previousNode);c.neighborNodes.sort(f);for(const v of c.neighborNodes)if(!v.stepped)return v.stepped=!0,v.previousNode=c,h(v)},d=h(a);if(!d)return{path:[]};const p=(c,v=[])=>c.previousNode?(v.push(c),p(c.previousNode,v)):v,_=p(d);for(let c=0;c<_.length;c++){const v=Z1(_[c],_[c].neighborNodes.filter(({id:m})=>{var y;return m!==((y=_[c].previousNode)==null?void 0:y.id)}));v&&(_[c].previousNode=v,c=_.findIndex(m=>m.id===v.id))}const x=p(d),g=[];for(const c of x)g.push(new B(c.center.x,c.center.y));return g[0]=n,g[g.length-1]=t.clone().setZ(0),g.reverse(),{path:g}},_b=({position:t,polygons:e})=>{const n=e[0],i=e[1],r=e[2],o=(i.y-r.y)*(n.x-r.x)+(r.x-i.x)*(n.y-r.y),s=((i.y-r.y)*(t.x-r.x)+(r.x-i.x)*(t.y-r.y))/o,a=((r.y-n.y)*(t.x-r.x)+(n.x-r.x)*(t.y-r.y))/o,l=1-s-a;return 0<=s&&s<=1&&0<=a&&a<=1&&0<=l&&l<=1},xb=({graph:t})=>({findNodeByPosition:({position:n})=>{const i=new Ze(n.x,n.y);for(const r of t){const{id:o,polygons:s}=r;if(_b({position:i,polygons:s}))return{nodeId:o}}return{nodeId:null}}}),yb=({Scene:t,ResourceTracker:e,board:n})=>{const i=n.geometry.getAttribute("position").array,r=[];for(let o=0;o<i.length;o+=3)r.push(new Ze(i[o],i[o+1]));return{polygons:r}},Sb=({Scene:t,ResourceTracker:e})=>{const n={graph:null,NodeChecker:null};return{init:()=>{const o=e.getTrackedResource("board");if(!o)return;const{polygons:s}=yb({Scene:t,ResourceTracker:e,board:o}),{centroids:a}=mb({Scene:t,ResourceTracker:e,polygons:s}),{graph:l}=gb({centroids:a});n.graph=l,n.NodeChecker=xb({graph:l})},findPath:({startPosition:o,destinationPosition:s})=>{if(!n.NodeChecker)return{path:[]};const{nodeId:a}=n.NodeChecker.findNodeByPosition({position:o}),{nodeId:l}=n.NodeChecker.findNodeByPosition({position:s});if(!a||!l||!n.graph)return console.warn("Something went wrong and pathfinding is not possible!",a,l,n.graph),{path:[o,s]};const{path:u}=vb({startPosition:o,startNodeId:a,destinationPosition:s,destinationNodeId:l,graph:n.graph});return{path:u}}}},Eb=({Camera:t,playerManagerState:e})=>{const n={Camera:t},i=o=>{var f;const s=(f=e==null?void 0:e.player)==null?void 0:f.position;if(!s)return;const a=10,l=15,u=new B(s.x+a*Math.cos(Nr.degToRad(l))*Math.sin(Nr.degToRad(0)),s.y-a*Math.sin(Nr.degToRad(l)),s.z+a*Math.cos(Nr.degToRad(l))*Math.cos(Nr.degToRad(0)));o.Camera.position.copy(u),o.Camera.rotation.x=Nr.degToRad(l)};return{init:()=>{i(n)},lookCameraAtPlayer:()=>i(n)}},Mb=(t,{eventType:e,callback:n})=>{const i=r=>{r.preventDefault(),n(r)};t.ref.addEventListener(e,i),t.registeredKeybindings={[e]:i}},Tb=(t,{eventType:e,callback:n})=>{t.ref.removeEventListener(e,n)},wb=t=>{for(const e in t.keybindings)Mb(t,{eventType:e,callback:t.keybindings[e]})},Ab=t=>{for(const e in t.registeredKeybindings)Tb(t,{eventType:e,callback:t.keybindings[e]})},Cb=({ref:t,keybindings:e})=>{const n={ref:t,keybindings:e,registeredKeybindings:{}};return{init:()=>{wb(n)},disposeControls:()=>Ab(n)}},Rb=({ref:t,Scene:e,Camera:n,ResourceTracker:i,AnimationManager:r})=>{const o={player:null,pointer:new Ze,raycaster:new tb,pathMesh:null},s=Eb({Camera:n,playerManagerState:o}),a=Sb({Scene:e,ResourceTracker:i}),l=x=>{o.pointer.x=x.clientX/window.innerWidth*2-1,o.pointer.y=-(x.clientY/window.innerHeight)*2+1},u=x=>{var g,c;(g=o.player)==null||g.position.copy(x).setZ(.25),(c=o.player)==null||c.updateMatrix(),s.lookCameraAtPlayer()},f=()=>{var y;const x=new Jh(.25,.25,.5,16),g=new tc({color:"green",depthTest:!1,depthWrite:!1,transparent:!0}),c=new mi(x,g);c.matrixAutoUpdate=!1,c.renderOrder=3,c.rotateX(Nr.degToRad(90)),i.trackResource({id:"player",resource:c}),o.player=c,e.add(c);const v=i.getTrackedResource("board");if(!v)return;const m=new B;v.geometry.computeBoundingBox(),(y=v.geometry.boundingBox)==null||y.getCenter(m),u(m)},h=()=>{o.raycaster.setFromCamera(o.pointer,n);const x=i.getTrackedResource("board");if(!x)return;const g=o.raycaster.intersectObjects([x],!1),c=g.length>0&&g[0].point;if(!c||!o.player)return;const v=o.player.position.clone(),m=c.clone(),{path:y}=a.findPath({startPosition:v,destinationPosition:m});if(r.clearAnimation("player_move"),y.length===0)return;const R=()=>!0,A=()=>o.player?o.player.position.clone().setZ(0).equals(y[y.length-1]):!0;r.addAnimation({id:"player_move",type:Ki.dynamic,callback:pb({path:y,speedGetter:()=>.025,positionUpdate:u}),isPossibleGetter:R,isEndedGetter:A})},d=Cb({ref:t,keybindings:{click:h,contextmenu:h,touchdown:h,pointermove:x=>l(x)}});return{init:()=>{f(),s.init(),a.init(),d.init()},dispose:()=>{d.disposeControls()}}},bb=t=>{const e={Scene:t,resources:[]},n=a=>{e.resources=[...e.resources,a]},i=a=>{var l;return(l=e.resources.find(u=>u.id===a))==null?void 0:l.resource},r=a=>{var f;const l=(f=e.resources.find(h=>h.id===a))==null?void 0:f.resource;if(!l||(t.remove(l),l.geometry.dispose(),!l.material))return;const u=()=>{const h=e.resources.findIndex(d=>d.id===a);e.resources=[...e.resources.slice(0,h),...e.resources.slice(h+1)]};if(Array.isArray(l.material))for(const h of l.material)h.dispose();else l.material.dispose();u()};return{trackResource:n,getTrackedResource:i,disposeTrackedResource:r,disposeMultipleTrackedResources:a=>{const l=e.resources.filter(u=>u.id.includes(a)).map(({id:u})=>u);for(const u of l)r(u)},disposeAllResources:()=>{const a=e.resources.map(({id:l})=>l);for(const l of a)r(l)}}},Pb=t=>{const e=new eb,n=new Fn(75,window.innerWidth/window.innerHeight,.1,1e3),i=new q1({antialias:!0});i.setSize(window.innerWidth-18,window.innerHeight),i.setPixelRatio(window.devicePixelRatio),t.current&&t.current.appendChild(i.domElement);const r=bb(e),o=nb(),s=hb({Scene:e,ResourceTracker:r}),a=Rb({ref:i.domElement,Scene:e,Camera:n,ResourceTracker:r,AnimationManager:o}),l={isPaused:!1,ResourceTracker:r,ArenaManager:s,PlayerManager:a},u=()=>{s.generateBoard(),a.init()},f=()=>{l.isPaused||(o.animate(),i.render(e,n),requestAnimationFrame(f))},h=()=>{l.isPaused=!0},d=()=>{h(),a.dispose(),l.ResourceTracker.disposeAllResources(),i.domElement.remove(),i.dispose()};return u(),f(),{animate:f,pause:h,dispose:d}},Lb=()=>{const t=Ye.useRef(null);return Ye.useEffect(()=>{if(t.current){const e=Pb(t);return()=>{e.dispose()}}},[]),Ne.jsx("div",{ref:t})},Nb=()=>Ne.jsx(Lb,{}),Db=`<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M6.4 19L5 17.6L10.6 12L5 6.4L6.4 5L12 10.6L17.6 5L19 6.4L13.4 12L19 17.6L17.6 19L12 13.4L6.4 19Z" />
</svg>
`,Ib=`<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M10 16H14C14.2833 16 14.5208 15.9042 14.7125 15.7125C14.9042 15.5208 15 15.2833 15 15V13H13V14H11V10H13V11H15V9C15 8.71667 14.9042 8.47917 14.7125 8.2875C14.5208 8.09583 14.2833 8 14 8H10C9.71667 8 9.47917 8.09583 9.2875 8.2875C9.09583 8.47917 9 8.71667 9 9V15C9 15.2833 9.09583 15.5208 9.2875 15.7125C9.47917 15.9042 9.71667 16 10 16ZM12 22C10.6167 22 9.31667 21.7375 8.1 21.2125C6.88333 20.6875 5.825 19.975 4.925 19.075C4.025 18.175 3.3125 17.1167 2.7875 15.9C2.2625 14.6833 2 13.3833 2 12C2 10.6167 2.2625 9.31667 2.7875 8.1C3.3125 6.88333 4.025 5.825 4.925 4.925C5.825 4.025 6.88333 3.3125 8.1 2.7875C9.31667 2.2625 10.6167 2 12 2C13.3833 2 14.6833 2.2625 15.9 2.7875C17.1167 3.3125 18.175 4.025 19.075 4.925C19.975 5.825 20.6875 6.88333 21.2125 8.1C21.7375 9.31667 22 10.6167 22 12C22 13.3833 21.7375 14.6833 21.2125 15.9C20.6875 17.1167 19.975 18.175 19.075 19.075C18.175 19.975 17.1167 20.6875 15.9 21.2125C14.6833 21.7375 13.3833 22 12 22ZM12 20C14.2333 20 16.125 19.225 17.675 17.675C19.225 16.125 20 14.2333 20 12C20 9.76667 19.225 7.875 17.675 6.325C16.125 4.775 14.2333 4 12 4C9.76667 4 7.875 4.775 6.325 6.325C4.775 7.875 4 9.76667 4 12C4 14.2333 4.775 16.125 6.325 17.675C7.875 19.225 9.76667 20 12 20Z" />
</svg>
`,Ub=`<svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="5.5" cy="5.63672" r="4" fill="#FFE0B2" stroke="#5D4037" stroke-width="2"/>
</svg>
`,Fb=`<svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="5.5" cy="5.63672" r="4" fill="#5D4037" stroke="#5D4037" stroke-width="2"/>
</svg>
`,Ob='<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z"/></svg>',Bb=`<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_25_373)">
<path d="M9.101 23.6909V15.7109H6.627V12.0439H9.101V10.4639C9.101 6.37895 10.949 4.48595 14.959 4.48595C15.36 4.48595 15.914 4.52795 16.427 4.58895C16.8112 4.62848 17.1924 4.69363 17.568 4.78395V8.10895C17.3509 8.08869 17.133 8.07668 16.915 8.07295C16.6707 8.0666 16.4264 8.0636 16.182 8.06395C15.475 8.06395 14.923 8.15995 14.507 8.37295C14.2273 8.51326 13.9922 8.72862 13.828 8.99495C13.57 9.41495 13.454 9.98995 13.454 10.7469V12.0439H17.373L16.987 14.1469L16.7 15.7109H13.454V23.9559C19.396 23.2379 24 18.1789 24 12.0439C24 5.41695 18.627 0.0439453 12 0.0439453C5.373 0.0439453 0 5.41695 0 12.0439C0 17.6719 3.874 22.3939 9.101 23.6909Z" />
</g>
<defs>
<clipPath id="clip0_25_373">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
`,kb=`<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_25_370)">
<path d="M12 0C8.74 0 8.333 0.015 7.053 0.072C5.775 0.132 4.905 0.333 4.14 0.63C3.351 0.936 2.681 1.347 2.014 2.014C1.347 2.681 0.935 3.35 0.63 4.14C0.333 4.905 0.131 5.775 0.072 7.053C0.012 8.333 0 8.74 0 12C0 15.26 0.015 15.667 0.072 16.947C0.132 18.224 0.333 19.095 0.63 19.86C0.936 20.648 1.347 21.319 2.014 21.986C2.681 22.652 3.35 23.065 4.14 23.37C4.906 23.666 5.776 23.869 7.053 23.928C8.333 23.988 8.74 24 12 24C15.26 24 15.667 23.985 16.947 23.928C18.224 23.868 19.095 23.666 19.86 23.37C20.648 23.064 21.319 22.652 21.986 21.986C22.652 21.319 23.065 20.651 23.37 19.86C23.666 19.095 23.869 18.224 23.928 16.947C23.988 15.667 24 15.26 24 12C24 8.74 23.985 8.333 23.928 7.053C23.868 5.776 23.666 4.904 23.37 4.14C23.064 3.351 22.652 2.681 21.986 2.014C21.319 1.347 20.651 0.935 19.86 0.63C19.095 0.333 18.224 0.131 16.947 0.072C15.667 0.012 15.26 0 12 0ZM12 2.16C15.203 2.16 15.585 2.176 16.85 2.231C18.02 2.286 18.655 2.48 19.077 2.646C19.639 2.863 20.037 3.123 20.459 3.542C20.878 3.962 21.138 4.361 21.355 4.923C21.519 5.345 21.715 5.98 21.768 7.15C21.825 8.416 21.838 8.796 21.838 12C21.838 15.204 21.823 15.585 21.764 16.85C21.703 18.02 21.508 18.655 21.343 19.077C21.119 19.639 20.864 20.037 20.444 20.459C20.025 20.878 19.62 21.138 19.064 21.355C18.644 21.519 17.999 21.715 16.829 21.768C15.555 21.825 15.18 21.838 11.97 21.838C8.759 21.838 8.384 21.823 7.111 21.764C5.94 21.703 5.295 21.508 4.875 21.343C4.306 21.119 3.915 20.864 3.496 20.444C3.075 20.025 2.806 19.62 2.596 19.064C2.431 18.644 2.237 17.999 2.176 16.829C2.131 15.569 2.115 15.18 2.115 11.985C2.115 8.789 2.131 8.399 2.176 7.124C2.237 5.954 2.431 5.31 2.596 4.89C2.806 4.32 3.075 3.93 3.496 3.509C3.915 3.09 4.306 2.82 4.875 2.611C5.295 2.445 5.926 2.25 7.096 2.19C8.371 2.145 8.746 2.13 11.955 2.13L12 2.16ZM12 5.838C8.595 5.838 5.838 8.598 5.838 12C5.838 15.405 8.598 18.162 12 18.162C15.405 18.162 18.162 15.402 18.162 12C18.162 8.595 15.402 5.838 12 5.838ZM12 16C9.79 16 8 14.21 8 12C8 9.79 9.79 8 12 8C14.21 8 16 9.79 16 12C16 14.21 14.21 16 12 16ZM19.846 5.595C19.846 6.39 19.2 7.035 18.406 7.035C17.611 7.035 16.966 6.389 16.966 5.595C16.966 4.801 17.612 4.156 18.406 4.156C19.199 4.155 19.846 4.801 19.846 5.595Z" />
</g>
<defs>
<clipPath id="clip0_25_370">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
`,Hb=`<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M3 18V16H21V18H3ZM3 13V11H21V13H3ZM3 8V6H21V8H3Z" />
</svg>
`,zb=`<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M6 10.95L5 11.5C4.76667 11.6333 4.51667 11.6667 4.25 11.6C3.98333 11.5333 3.78333 11.3833 3.65 11.15L1.65 7.65C1.51667 7.41667 1.48333 7.16667 1.55 6.9C1.61667 6.63333 1.76667 6.43333 2 6.3L7.75 3H9.5C9.65 3 9.77083 3.04583 9.8625 3.1375C9.95417 3.22917 10 3.35 10 3.5V4C10 4.55 10.1958 5.02083 10.5875 5.4125C10.9792 5.80417 11.45 6 12 6C12.55 6 13.0208 5.80417 13.4125 5.4125C13.8042 5.02083 14 4.55 14 4V3.5C14 3.35 14.0458 3.22917 14.1375 3.1375C14.2292 3.04583 14.35 3 14.5 3H16.25L22 6.3C22.2333 6.43333 22.3833 6.63333 22.45 6.9C22.5167 7.16667 22.4833 7.41667 22.35 7.65L20.35 11.15C20.2167 11.3833 20.0208 11.5292 19.7625 11.5875C19.5042 11.6458 19.25 11.6083 19 11.475L18 10.975V20C18 20.2833 17.9042 20.5208 17.7125 20.7125C17.5208 20.9042 17.2833 21 17 21H7C6.71667 21 6.47917 20.9042 6.2875 20.7125C6.09583 20.5208 6 20.2833 6 20V10.95ZM8 7.6V19H16V7.6L19.1 9.3L20.15 7.55L15.85 5.05C15.6 5.9 15.1292 6.60417 14.4375 7.1625C13.7458 7.72083 12.9333 8 12 8C11.0667 8 10.2542 7.72083 9.5625 7.1625C8.87083 6.60417 8.4 5.9 8.15 5.05L3.85 7.55L4.9 9.3L8 7.6Z" />
</svg>
`,Gb=`<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M3 20V4L22 12L3 20ZM5 17L16.85 12L5 7V10.5L11 12L5 13.5V17Z" />
</svg>
`,Vb=`<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M18 22C17.1667 22 16.4583 21.7083 15.875 21.125C15.2917 20.5417 15 19.8333 15 19C15 18.8833 15.0083 18.7625 15.025 18.6375C15.0417 18.5125 15.0667 18.4 15.1 18.3L8.05 14.2C7.76667 14.45 7.45 14.6458 7.1 14.7875C6.75 14.9292 6.38333 15 6 15C5.16667 15 4.45833 14.7083 3.875 14.125C3.29167 13.5417 3 12.8333 3 12C3 11.1667 3.29167 10.4583 3.875 9.875C4.45833 9.29167 5.16667 9 6 9C6.38333 9 6.75 9.07083 7.1 9.2125C7.45 9.35417 7.76667 9.55 8.05 9.8L15.1 5.7C15.0667 5.6 15.0417 5.4875 15.025 5.3625C15.0083 5.2375 15 5.11667 15 5C15 4.16667 15.2917 3.45833 15.875 2.875C16.4583 2.29167 17.1667 2 18 2C18.8333 2 19.5417 2.29167 20.125 2.875C20.7083 3.45833 21 4.16667 21 5C21 5.83333 20.7083 6.54167 20.125 7.125C19.5417 7.70833 18.8333 8 18 8C17.6167 8 17.25 7.92917 16.9 7.7875C16.55 7.64583 16.2333 7.45 15.95 7.2L8.9 11.3C8.93333 11.4 8.95833 11.5125 8.975 11.6375C8.99167 11.7625 9 11.8833 9 12C9 12.1167 8.99167 12.2375 8.975 12.3625C8.95833 12.4875 8.93333 12.6 8.9 12.7L15.95 16.8C16.2333 16.55 16.55 16.3542 16.9 16.2125C17.25 16.0708 17.6167 16 18 16C18.8333 16 19.5417 16.2917 20.125 16.875C20.7083 17.4583 21 18.1667 21 19C21 19.8333 20.7083 20.5417 20.125 21.125C19.5417 21.7083 18.8333 22 18 22ZM18 6C18.2833 6 18.5208 5.90417 18.7125 5.7125C18.9042 5.52083 19 5.28333 19 5C19 4.71667 18.9042 4.47917 18.7125 4.2875C18.5208 4.09583 18.2833 4 18 4C17.7167 4 17.4792 4.09583 17.2875 4.2875C17.0958 4.47917 17 4.71667 17 5C17 5.28333 17.0958 5.52083 17.2875 5.7125C17.4792 5.90417 17.7167 6 18 6ZM6 13C6.28333 13 6.52083 12.9042 6.7125 12.7125C6.90417 12.5208 7 12.2833 7 12C7 11.7167 6.90417 11.4792 6.7125 11.2875C6.52083 11.0958 6.28333 11 6 11C5.71667 11 5.47917 11.0958 5.2875 11.2875C5.09583 11.4792 5 11.7167 5 12C5 12.2833 5.09583 12.5208 5.2875 12.7125C5.47917 12.9042 5.71667 13 6 13ZM18 20C18.2833 20 18.5208 19.9042 18.7125 19.7125C18.9042 19.5208 19 19.2833 19 19C19 18.7167 18.9042 18.4792 18.7125 18.2875C18.5208 18.0958 18.2833 18 18 18C17.7167 18 17.4792 18.0958 17.2875 18.2875C17.0958 18.4792 17 18.7167 17 19C17 19.2833 17.0958 19.5208 17.2875 19.7125C17.4792 19.9042 17.7167 20 18 20Z" />
</svg>
`,Wb=`<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_25_375)">
<path d="M12.525 0.02C13.835 0 15.135 0.01 16.435 0C16.515 1.53 17.065 3.09 18.185 4.17C19.305 5.28 20.885 5.79 22.425 5.96V9.99C20.985 9.94 19.535 9.64 18.225 9.02C17.655 8.76 17.125 8.43 16.605 8.09C16.595 11.01 16.615 13.93 16.585 16.84C16.505 18.24 16.045 19.63 15.235 20.78C13.925 22.7 11.655 23.95 9.325 23.99C7.895 24.07 6.465 23.68 5.245 22.96C3.225 21.77 1.805 19.59 1.595 17.25C1.575 16.75 1.565 16.25 1.585 15.76C1.765 13.86 2.705 12.04 4.165 10.8C5.825 9.36 8.145 8.67 10.315 9.08C10.335 10.56 10.275 12.04 10.275 13.52C9.285 13.2 8.125 13.29 7.255 13.89C6.625 14.3 6.145 14.93 5.895 15.64C5.685 16.15 5.745 16.71 5.755 17.25C5.995 18.89 7.575 20.27 9.255 20.12C10.375 20.11 11.445 19.46 12.025 18.51C12.215 18.18 12.425 17.84 12.435 17.45C12.535 15.66 12.495 13.88 12.505 12.09C12.515 8.06 12.495 4.04 12.525 0.02Z" />
</g>
<defs>
<clipPath id="clip0_25_375">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
`,Xb=`<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M18.901 1.15308H22.581L14.541 10.3431L24 22.8461H16.594L10.794 15.2621L4.156 22.8461H0.474L9.074 13.0161L0 1.15408H7.594L12.837 8.08608L18.901 1.15308ZM17.61 20.6441H19.649L6.486 3.24008H4.298L17.61 20.6441Z" />
</svg>
`,$b=`<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M23.498 6.18592C23.3624 5.6752 23.095 5.20906 22.7226 4.83419C22.3502 4.45931 21.8858 4.18886 21.376 4.04992C19.505 3.54492 12 3.54492 12 3.54492C12 3.54492 4.495 3.54492 2.623 4.04992C2.11341 4.18911 1.64929 4.45966 1.27708 4.8345C0.904861 5.20935 0.637591 5.67536 0.502 6.18592C0 8.06992 0 11.9999 0 11.9999C0 11.9999 0 15.9299 0.502 17.8139C0.637586 18.3246 0.904975 18.7908 1.27739 19.1657C1.64981 19.5405 2.11418 19.811 2.624 19.9499C4.495 20.4549 12 20.4549 12 20.4549C12 20.4549 19.505 20.4549 21.377 19.9499C21.8869 19.8111 22.3513 19.5407 22.7237 19.1658C23.0961 18.7909 23.3635 18.3247 23.499 17.8139C24 15.9299 24 11.9999 24 11.9999C24 11.9999 24 8.06992 23.498 6.18592ZM9.545 15.5679V8.43192L15.818 11.9999L9.545 15.5679Z" />
</svg>
`;var Zt=function(){return Zt=Object.assign||function(e){for(var n,i=1,r=arguments.length;i<r;i++){n=arguments[i];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},Zt.apply(this,arguments)};function xu(t,e,n){if(n||arguments.length===2)for(var i=0,r=e.length,o;i<r;i++)(o||!(i in e))&&(o||(o=Array.prototype.slice.call(e,0,i)),o[i]=e[i]);return t.concat(o||Array.prototype.slice.call(e))}var ut="-ms-",Ks="-moz-",Ke="-webkit-",K1="comm",ic="rule",ep="decl",jb="@import",Q1="@keyframes",Yb="@layer",J1=Math.abs,tp=String.fromCharCode,Od=Object.assign;function qb(t,e){return Ut(t,0)^45?(((e<<2^Ut(t,0))<<2^Ut(t,1))<<2^Ut(t,2))<<2^Ut(t,3):0}function ex(t){return t.trim()}function Ri(t,e){return(t=e.exec(t))?t[0]:t}function Fe(t,e,n){return t.replace(e,n)}function Ol(t,e,n){return t.indexOf(e,n)}function Ut(t,e){return t.charCodeAt(e)|0}function cs(t,e,n){return t.slice(e,n)}function hi(t){return t.length}function tx(t){return t.length}function Bs(t,e){return e.push(t),t}function Zb(t,e){return t.map(e).join("")}function s0(t,e){return t.filter(function(n){return!Ri(n,e)})}var rc=1,fs=1,nx=0,Gn=0,wt=0,ys="";function oc(t,e,n,i,r,o,s,a){return{value:t,root:e,parent:n,type:i,props:r,children:o,line:rc,column:fs,length:s,return:"",siblings:a}}function Yi(t,e){return Od(oc("",null,null,"",null,null,0,t.siblings),t,{length:-t.length},e)}function wo(t){for(;t.root;)t=Yi(t.root,{children:[t]});Bs(t,t.siblings)}function Kb(){return wt}function Qb(){return wt=Gn>0?Ut(ys,--Gn):0,fs--,wt===10&&(fs=1,rc--),wt}function ri(){return wt=Gn<nx?Ut(ys,Gn++):0,fs++,wt===10&&(fs=1,rc++),wt}function $r(){return Ut(ys,Gn)}function Bl(){return Gn}function sc(t,e){return cs(ys,t,e)}function Bd(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Jb(t){return rc=fs=1,nx=hi(ys=t),Gn=0,[]}function e3(t){return ys="",t}function xf(t){return ex(sc(Gn-1,kd(t===91?t+2:t===40?t+1:t)))}function t3(t){for(;(wt=$r())&&wt<33;)ri();return Bd(t)>2||Bd(wt)>3?"":" "}function n3(t,e){for(;--e&&ri()&&!(wt<48||wt>102||wt>57&&wt<65||wt>70&&wt<97););return sc(t,Bl()+(e<6&&$r()==32&&ri()==32))}function kd(t){for(;ri();)switch(wt){case t:return Gn;case 34:case 39:t!==34&&t!==39&&kd(wt);break;case 40:t===41&&kd(t);break;case 92:ri();break}return Gn}function i3(t,e){for(;ri()&&t+wt!==47+10;)if(t+wt===42+42&&$r()===47)break;return"/*"+sc(e,Gn-1)+"*"+tp(t===47?t:ri())}function r3(t){for(;!Bd($r());)ri();return sc(t,Gn)}function o3(t){return e3(kl("",null,null,null,[""],t=Jb(t),0,[0],t))}function kl(t,e,n,i,r,o,s,a,l){for(var u=0,f=0,h=s,d=0,p=0,_=0,x=1,g=1,c=1,v=0,m="",y=r,R=o,A=i,M=m;g;)switch(_=v,v=ri()){case 40:if(_!=108&&Ut(M,h-1)==58){Ol(M+=Fe(xf(v),"&","&\f"),"&\f",J1(u?a[u-1]:0))!=-1&&(c=-1);break}case 34:case 39:case 91:M+=xf(v);break;case 9:case 10:case 13:case 32:M+=t3(_);break;case 92:M+=n3(Bl()-1,7);continue;case 47:switch($r()){case 42:case 47:Bs(s3(i3(ri(),Bl()),e,n,l),l);break;default:M+="/"}break;case 123*x:a[u++]=hi(M)*c;case 125*x:case 59:case 0:switch(v){case 0:case 125:g=0;case 59+f:c==-1&&(M=Fe(M,/\f/g,"")),p>0&&hi(M)-h&&Bs(p>32?l0(M+";",i,n,h-1,l):l0(Fe(M," ","")+";",i,n,h-2,l),l);break;case 59:M+=";";default:if(Bs(A=a0(M,e,n,u,f,r,a,m,y=[],R=[],h,o),o),v===123)if(f===0)kl(M,e,A,A,y,o,h,a,R);else switch(d===99&&Ut(M,3)===110?100:d){case 100:case 108:case 109:case 115:kl(t,A,A,i&&Bs(a0(t,A,A,0,0,r,a,m,r,y=[],h,R),R),r,R,h,a,i?y:R);break;default:kl(M,A,A,A,[""],R,0,a,R)}}u=f=p=0,x=c=1,m=M="",h=s;break;case 58:h=1+hi(M),p=_;default:if(x<1){if(v==123)--x;else if(v==125&&x++==0&&Qb()==125)continue}switch(M+=tp(v),v*x){case 38:c=f>0?1:(M+="\f",-1);break;case 44:a[u++]=(hi(M)-1)*c,c=1;break;case 64:$r()===45&&(M+=xf(ri())),d=$r(),f=h=hi(m=M+=r3(Bl())),v++;break;case 45:_===45&&hi(M)==2&&(x=0)}}return o}function a0(t,e,n,i,r,o,s,a,l,u,f,h){for(var d=r-1,p=r===0?o:[""],_=tx(p),x=0,g=0,c=0;x<i;++x)for(var v=0,m=cs(t,d+1,d=J1(g=s[x])),y=t;v<_;++v)(y=ex(g>0?p[v]+" "+m:Fe(m,/&\f/g,p[v])))&&(l[c++]=y);return oc(t,e,n,r===0?ic:a,l,u,f,h)}function s3(t,e,n,i){return oc(t,e,n,K1,tp(Kb()),cs(t,2,-2),0,i)}function l0(t,e,n,i,r){return oc(t,e,n,ep,cs(t,0,i),cs(t,i+1,-1),i,r)}function ix(t,e,n){switch(qb(t,e)){case 5103:return Ke+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Ke+t+t;case 4789:return Ks+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return Ke+t+Ks+t+ut+t+t;case 5936:switch(Ut(t,e+11)){case 114:return Ke+t+ut+Fe(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return Ke+t+ut+Fe(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return Ke+t+ut+Fe(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return Ke+t+ut+t+t;case 6165:return Ke+t+ut+"flex-"+t+t;case 5187:return Ke+t+Fe(t,/(\w+).+(:[^]+)/,Ke+"box-$1$2"+ut+"flex-$1$2")+t;case 5443:return Ke+t+ut+"flex-item-"+Fe(t,/flex-|-self/g,"")+(Ri(t,/flex-|baseline/)?"":ut+"grid-row-"+Fe(t,/flex-|-self/g,""))+t;case 4675:return Ke+t+ut+"flex-line-pack"+Fe(t,/align-content|flex-|-self/g,"")+t;case 5548:return Ke+t+ut+Fe(t,"shrink","negative")+t;case 5292:return Ke+t+ut+Fe(t,"basis","preferred-size")+t;case 6060:return Ke+"box-"+Fe(t,"-grow","")+Ke+t+ut+Fe(t,"grow","positive")+t;case 4554:return Ke+Fe(t,/([^-])(transform)/g,"$1"+Ke+"$2")+t;case 6187:return Fe(Fe(Fe(t,/(zoom-|grab)/,Ke+"$1"),/(image-set)/,Ke+"$1"),t,"")+t;case 5495:case 3959:return Fe(t,/(image-set\([^]*)/,Ke+"$1$`$1");case 4968:return Fe(Fe(t,/(.+:)(flex-)?(.*)/,Ke+"box-pack:$3"+ut+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Ke+t+t;case 4200:if(!Ri(t,/flex-|baseline/))return ut+"grid-column-align"+cs(t,e)+t;break;case 2592:case 3360:return ut+Fe(t,"template-","")+t;case 4384:case 3616:return n&&n.some(function(i,r){return e=r,Ri(i.props,/grid-\w+-end/)})?~Ol(t+(n=n[e].value),"span",0)?t:ut+Fe(t,"-start","")+t+ut+"grid-row-span:"+(~Ol(n,"span",0)?Ri(n,/\d+/):+Ri(n,/\d+/)-+Ri(t,/\d+/))+";":ut+Fe(t,"-start","")+t;case 4896:case 4128:return n&&n.some(function(i){return Ri(i.props,/grid-\w+-start/)})?t:ut+Fe(Fe(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return Fe(t,/(.+)-inline(.+)/,Ke+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(hi(t)-1-e>6)switch(Ut(t,e+1)){case 109:if(Ut(t,e+4)!==45)break;case 102:return Fe(t,/(.+:)(.+)-([^]+)/,"$1"+Ke+"$2-$3$1"+Ks+(Ut(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~Ol(t,"stretch",0)?ix(Fe(t,"stretch","fill-available"),e,n)+t:t}break;case 5152:case 5920:return Fe(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(i,r,o,s,a,l,u){return ut+r+":"+o+u+(s?ut+r+"-span:"+(a?l:+l-+o)+u:"")+t});case 4949:if(Ut(t,e+6)===121)return Fe(t,":",":"+Ke)+t;break;case 6444:switch(Ut(t,Ut(t,14)===45?18:11)){case 120:return Fe(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Ke+(Ut(t,14)===45?"inline-":"")+"box$3$1"+Ke+"$2$3$1"+ut+"$2box$3")+t;case 100:return Fe(t,":",":"+ut)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Fe(t,"scroll-","scroll-snap-")+t}return t}function yu(t,e){for(var n="",i=0;i<t.length;i++)n+=e(t[i],i,t,e)||"";return n}function a3(t,e,n,i){switch(t.type){case Yb:if(t.children.length)break;case jb:case ep:return t.return=t.return||t.value;case K1:return"";case Q1:return t.return=t.value+"{"+yu(t.children,i)+"}";case ic:if(!hi(t.value=t.props.join(",")))return""}return hi(n=yu(t.children,i))?t.return=t.value+"{"+n+"}":""}function l3(t){var e=tx(t);return function(n,i,r,o){for(var s="",a=0;a<e;a++)s+=t[a](n,i,r,o)||"";return s}}function u3(t){return function(e){e.root||(e=e.return)&&t(e)}}function c3(t,e,n,i){if(t.length>-1&&!t.return)switch(t.type){case ep:t.return=ix(t.value,t.length,n);return;case Q1:return yu([Yi(t,{value:Fe(t.value,"@","@"+Ke)})],i);case ic:if(t.length)return Zb(n=t.props,function(r){switch(Ri(r,i=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":wo(Yi(t,{props:[Fe(r,/:(read-\w+)/,":"+Ks+"$1")]})),wo(Yi(t,{props:[r]})),Od(t,{props:s0(n,i)});break;case"::placeholder":wo(Yi(t,{props:[Fe(r,/:(plac\w+)/,":"+Ke+"input-$1")]})),wo(Yi(t,{props:[Fe(r,/:(plac\w+)/,":"+Ks+"$1")]})),wo(Yi(t,{props:[Fe(r,/:(plac\w+)/,ut+"input-$1")]})),wo(Yi(t,{props:[r]})),Od(t,{props:s0(n,i)});break}return""})}}var f3={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},ds=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",rx="active",ox="data-styled-version",ac="6.1.6",np=`/*!sc*/
`,ip=typeof window<"u"&&"HTMLElement"in window,d3=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY),lc=Object.freeze([]),hs=Object.freeze({});function h3(t,e,n){return n===void 0&&(n=hs),t.theme!==n.theme&&t.theme||e||n.theme}var sx=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),p3=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,m3=/(^-|-$)/g;function u0(t){return t.replace(p3,"-").replace(m3,"")}var g3=/(a)(d)/gi,yl=52,c0=function(t){return String.fromCharCode(t+(t>25?39:97))};function Hd(t){var e,n="";for(e=Math.abs(t);e>yl;e=e/yl|0)n=c0(e%yl)+n;return(c0(e%yl)+n).replace(g3,"$1-$2")}var yf,ax=5381,Go=function(t,e){for(var n=e.length;n;)t=33*t^e.charCodeAt(--n);return t},lx=function(t){return Go(ax,t)};function v3(t){return Hd(lx(t)>>>0)}function _3(t){return t.displayName||t.name||"Component"}function Sf(t){return typeof t=="string"&&!0}var ux=typeof Symbol=="function"&&Symbol.for,cx=ux?Symbol.for("react.memo"):60115,x3=ux?Symbol.for("react.forward_ref"):60112,y3={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},S3={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},fx={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},E3=((yf={})[x3]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},yf[cx]=fx,yf);function f0(t){return("type"in(e=t)&&e.type.$$typeof)===cx?fx:"$$typeof"in t?E3[t.$$typeof]:y3;var e}var M3=Object.defineProperty,T3=Object.getOwnPropertyNames,d0=Object.getOwnPropertySymbols,w3=Object.getOwnPropertyDescriptor,A3=Object.getPrototypeOf,h0=Object.prototype;function dx(t,e,n){if(typeof e!="string"){if(h0){var i=A3(e);i&&i!==h0&&dx(t,i,n)}var r=T3(e);d0&&(r=r.concat(d0(e)));for(var o=f0(t),s=f0(e),a=0;a<r.length;++a){var l=r[a];if(!(l in S3||n&&n[l]||s&&l in s||o&&l in o)){var u=w3(e,l);try{M3(t,l,u)}catch{}}}}return t}function no(t){return typeof t=="function"}function rp(t){return typeof t=="object"&&"styledComponentId"in t}function Hr(t,e){return t&&e?"".concat(t," ").concat(e):t||e||""}function p0(t,e){if(t.length===0)return"";for(var n=t[0],i=1;i<t.length;i++)n+=e?e+t[i]:t[i];return n}function _a(t){return t!==null&&typeof t=="object"&&t.constructor.name===Object.name&&!("props"in t&&t.$$typeof)}function zd(t,e,n){if(n===void 0&&(n=!1),!n&&!_a(t)&&!Array.isArray(t))return e;if(Array.isArray(e))for(var i=0;i<e.length;i++)t[i]=zd(t[i],e[i]);else if(_a(e))for(var i in e)t[i]=zd(t[i],e[i]);return t}function op(t,e){Object.defineProperty(t,"toString",{value:e})}function io(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var C3=function(){function t(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return t.prototype.indexOfGroup=function(e){for(var n=0,i=0;i<e;i++)n+=this.groupSizes[i];return n},t.prototype.insertRules=function(e,n){if(e>=this.groupSizes.length){for(var i=this.groupSizes,r=i.length,o=r;e>=o;)if((o<<=1)<0)throw io(16,"".concat(e));this.groupSizes=new Uint32Array(o),this.groupSizes.set(i),this.length=o;for(var s=r;s<o;s++)this.groupSizes[s]=0}for(var a=this.indexOfGroup(e+1),l=(s=0,n.length);s<l;s++)this.tag.insertRule(a,n[s])&&(this.groupSizes[e]++,a++)},t.prototype.clearGroup=function(e){if(e<this.length){var n=this.groupSizes[e],i=this.indexOfGroup(e),r=i+n;this.groupSizes[e]=0;for(var o=i;o<r;o++)this.tag.deleteRule(i)}},t.prototype.getGroup=function(e){var n="";if(e>=this.length||this.groupSizes[e]===0)return n;for(var i=this.groupSizes[e],r=this.indexOfGroup(e),o=r+i,s=r;s<o;s++)n+="".concat(this.tag.getRule(s)).concat(np);return n},t}(),Hl=new Map,Su=new Map,zl=1,Sl=function(t){if(Hl.has(t))return Hl.get(t);for(;Su.has(zl);)zl++;var e=zl++;return Hl.set(t,e),Su.set(e,t),e},R3=function(t,e){zl=e+1,Hl.set(t,e),Su.set(e,t)},b3="style[".concat(ds,"][").concat(ox,'="').concat(ac,'"]'),P3=new RegExp("^".concat(ds,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),L3=function(t,e,n){for(var i,r=n.split(","),o=0,s=r.length;o<s;o++)(i=r[o])&&t.registerName(e,i)},N3=function(t,e){for(var n,i=((n=e.textContent)!==null&&n!==void 0?n:"").split(np),r=[],o=0,s=i.length;o<s;o++){var a=i[o].trim();if(a){var l=a.match(P3);if(l){var u=0|parseInt(l[1],10),f=l[2];u!==0&&(R3(f,u),L3(t,f,l[3]),t.getTag().insertRules(u,r)),r.length=0}else r.push(a)}}};function D3(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var hx=function(t){var e=document.head,n=t||e,i=document.createElement("style"),r=function(a){var l=Array.from(a.querySelectorAll("style[".concat(ds,"]")));return l[l.length-1]}(n),o=r!==void 0?r.nextSibling:null;i.setAttribute(ds,rx),i.setAttribute(ox,ac);var s=D3();return s&&i.setAttribute("nonce",s),n.insertBefore(i,o),i},I3=function(){function t(e){this.element=hx(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var i=document.styleSheets,r=0,o=i.length;r<o;r++){var s=i[r];if(s.ownerNode===n)return s}throw io(17)}(this.element),this.length=0}return t.prototype.insertRule=function(e,n){try{return this.sheet.insertRule(n,e),this.length++,!0}catch{return!1}},t.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.prototype.getRule=function(e){var n=this.sheet.cssRules[e];return n&&n.cssText?n.cssText:""},t}(),U3=function(){function t(e){this.element=hx(e),this.nodes=this.element.childNodes,this.length=0}return t.prototype.insertRule=function(e,n){if(e<=this.length&&e>=0){var i=document.createTextNode(n);return this.element.insertBefore(i,this.nodes[e]||null),this.length++,!0}return!1},t.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},t}(),F3=function(){function t(e){this.rules=[],this.length=0}return t.prototype.insertRule=function(e,n){return e<=this.length&&(this.rules.splice(e,0,n),this.length++,!0)},t.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},t}(),m0=ip,O3={isServer:!ip,useCSSOMInjection:!d3},px=function(){function t(e,n,i){e===void 0&&(e=hs),n===void 0&&(n={});var r=this;this.options=Zt(Zt({},O3),e),this.gs=n,this.names=new Map(i),this.server=!!e.isServer,!this.server&&ip&&m0&&(m0=!1,function(o){for(var s=document.querySelectorAll(b3),a=0,l=s.length;a<l;a++){var u=s[a];u&&u.getAttribute(ds)!==rx&&(N3(o,u),u.parentNode&&u.parentNode.removeChild(u))}}(this)),op(this,function(){return function(o){for(var s=o.getTag(),a=s.length,l="",u=function(h){var d=function(c){return Su.get(c)}(h);if(d===void 0)return"continue";var p=o.names.get(d),_=s.getGroup(h);if(p===void 0||_.length===0)return"continue";var x="".concat(ds,".g").concat(h,'[id="').concat(d,'"]'),g="";p!==void 0&&p.forEach(function(c){c.length>0&&(g+="".concat(c,","))}),l+="".concat(_).concat(x,'{content:"').concat(g,'"}').concat(np)},f=0;f<a;f++)u(f);return l}(r)})}return t.registerId=function(e){return Sl(e)},t.prototype.reconstructWithOptions=function(e,n){return n===void 0&&(n=!0),new t(Zt(Zt({},this.options),e),this.gs,n&&this.names||void 0)},t.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.prototype.getTag=function(){return this.tag||(this.tag=(e=function(n){var i=n.useCSSOMInjection,r=n.target;return n.isServer?new F3(r):i?new I3(r):new U3(r)}(this.options),new C3(e)));var e},t.prototype.hasNameForId=function(e,n){return this.names.has(e)&&this.names.get(e).has(n)},t.prototype.registerName=function(e,n){if(Sl(e),this.names.has(e))this.names.get(e).add(n);else{var i=new Set;i.add(n),this.names.set(e,i)}},t.prototype.insertRules=function(e,n,i){this.registerName(e,n),this.getTag().insertRules(Sl(e),i)},t.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.prototype.clearRules=function(e){this.getTag().clearGroup(Sl(e)),this.clearNames(e)},t.prototype.clearTag=function(){this.tag=void 0},t}(),B3=/&/g,k3=/^\s*\/\/.*$/gm;function mx(t,e){return t.map(function(n){return n.type==="rule"&&(n.value="".concat(e," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(e," ")),n.props=n.props.map(function(i){return"".concat(e," ").concat(i)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=mx(n.children,e)),n})}function H3(t){var e,n,i,r=t===void 0?hs:t,o=r.options,s=o===void 0?hs:o,a=r.plugins,l=a===void 0?lc:a,u=function(d,p,_){return _.startsWith(n)&&_.endsWith(n)&&_.replaceAll(n,"").length>0?".".concat(e):d},f=l.slice();f.push(function(d){d.type===ic&&d.value.includes("&")&&(d.props[0]=d.props[0].replace(B3,n).replace(i,u))}),s.prefix&&f.push(c3),f.push(a3);var h=function(d,p,_,x){p===void 0&&(p=""),_===void 0&&(_=""),x===void 0&&(x="&"),e=x,n=p,i=new RegExp("\\".concat(n,"\\b"),"g");var g=d.replace(k3,""),c=o3(_||p?"".concat(_," ").concat(p," { ").concat(g," }"):g);s.namespace&&(c=mx(c,s.namespace));var v=[];return yu(c,l3(f.concat(u3(function(m){return v.push(m)})))),v};return h.hash=l.length?l.reduce(function(d,p){return p.name||io(15),Go(d,p.name)},ax).toString():"",h}var z3=new px,Gd=H3(),gx=mr.createContext({shouldForwardProp:void 0,styleSheet:z3,stylis:Gd});gx.Consumer;mr.createContext(void 0);function g0(){return Ye.useContext(gx)}var G3=function(){function t(e,n){var i=this;this.inject=function(r,o){o===void 0&&(o=Gd);var s=i.name+o.hash;r.hasNameForId(i.id,s)||r.insertRules(i.id,s,o(i.rules,s,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=n,op(this,function(){throw io(12,String(i.name))})}return t.prototype.getName=function(e){return e===void 0&&(e=Gd),this.name+e.hash},t}(),V3=function(t){return t>="A"&&t<="Z"};function v0(t){for(var e="",n=0;n<t.length;n++){var i=t[n];if(n===1&&i==="-"&&t[0]==="-")return t;V3(i)?e+="-"+i.toLowerCase():e+=i}return e.startsWith("ms-")?"-"+e:e}var vx=function(t){return t==null||t===!1||t===""},_x=function(t){var e,n,i=[];for(var r in t){var o=t[r];t.hasOwnProperty(r)&&!vx(o)&&(Array.isArray(o)&&o.isCss||no(o)?i.push("".concat(v0(r),":"),o,";"):_a(o)?i.push.apply(i,xu(xu(["".concat(r," {")],_x(o),!1),["}"],!1)):i.push("".concat(v0(r),": ").concat((e=r,(n=o)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||e in f3||e.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return i};function jr(t,e,n,i){if(vx(t))return[];if(rp(t))return[".".concat(t.styledComponentId)];if(no(t)){if(!no(o=t)||o.prototype&&o.prototype.isReactComponent||!e)return[t];var r=t(e);return jr(r,e,n,i)}var o;return t instanceof G3?n?(t.inject(n,i),[t.getName(i)]):[t]:_a(t)?_x(t):Array.isArray(t)?Array.prototype.concat.apply(lc,t.map(function(s){return jr(s,e,n,i)})):[t.toString()]}function W3(t){for(var e=0;e<t.length;e+=1){var n=t[e];if(no(n)&&!rp(n))return!1}return!0}var X3=lx(ac),$3=function(){function t(e,n,i){this.rules=e,this.staticRulesId="",this.isStatic=(i===void 0||i.isStatic)&&W3(e),this.componentId=n,this.baseHash=Go(X3,n),this.baseStyle=i,px.registerId(n)}return t.prototype.generateAndInjectStyles=function(e,n,i){var r=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,n,i):"";if(this.isStatic&&!i.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))r=Hr(r,this.staticRulesId);else{var o=p0(jr(this.rules,e,n,i)),s=Hd(Go(this.baseHash,o)>>>0);if(!n.hasNameForId(this.componentId,s)){var a=i(o,".".concat(s),void 0,this.componentId);n.insertRules(this.componentId,s,a)}r=Hr(r,s),this.staticRulesId=s}else{for(var l=Go(this.baseHash,i.hash),u="",f=0;f<this.rules.length;f++){var h=this.rules[f];if(typeof h=="string")u+=h;else if(h){var d=p0(jr(h,e,n,i));l=Go(l,d+f),u+=d}}if(u){var p=Hd(l>>>0);n.hasNameForId(this.componentId,p)||n.insertRules(this.componentId,p,i(u,".".concat(p),void 0,this.componentId)),r=Hr(r,p)}}return r},t}(),Eu=mr.createContext(void 0);Eu.Consumer;function j3(t){var e=mr.useContext(Eu),n=Ye.useMemo(function(){return function(i,r){if(!i)throw io(14);if(no(i)){var o=i(r);return o}if(Array.isArray(i)||typeof i!="object")throw io(8);return r?Zt(Zt({},r),i):i}(t.theme,e)},[t.theme,e]);return t.children?mr.createElement(Eu.Provider,{value:n},t.children):null}var Ef={};function Y3(t,e,n){var i=rp(t),r=t,o=!Sf(t),s=e.attrs,a=s===void 0?lc:s,l=e.componentId,u=l===void 0?function(y,R){var A=typeof y!="string"?"sc":u0(y);Ef[A]=(Ef[A]||0)+1;var M="".concat(A,"-").concat(v3(ac+A+Ef[A]));return R?"".concat(R,"-").concat(M):M}(e.displayName,e.parentComponentId):l,f=e.displayName,h=f===void 0?function(y){return Sf(y)?"styled.".concat(y):"Styled(".concat(_3(y),")")}(t):f,d=e.displayName&&e.componentId?"".concat(u0(e.displayName),"-").concat(e.componentId):e.componentId||u,p=i&&r.attrs?r.attrs.concat(a).filter(Boolean):a,_=e.shouldForwardProp;if(i&&r.shouldForwardProp){var x=r.shouldForwardProp;if(e.shouldForwardProp){var g=e.shouldForwardProp;_=function(y,R){return x(y,R)&&g(y,R)}}else _=x}var c=new $3(n,d,i?r.componentStyle:void 0);function v(y,R){return function(A,M,N){var E=A.attrs,w=A.componentStyle,F=A.defaultProps,$=A.foldedComponentIds,ee=A.styledComponentId,P=A.target,O=mr.useContext(Eu),X=g0(),q=A.shouldForwardProp||X.shouldForwardProp,L=h3(M,O,F)||hs,D=function(oe,ue,de){for(var we,Me=Zt(Zt({},ue),{className:void 0,theme:de}),ye=0;ye<oe.length;ye+=1){var He=no(we=oe[ye])?we(Me):we;for(var U in He)Me[U]=U==="className"?Hr(Me[U],He[U]):U==="style"?Zt(Zt({},Me[U]),He[U]):He[U]}return ue.className&&(Me.className=Hr(Me.className,ue.className)),Me}(E,M,L),G=D.as||P,j={};for(var Z in D)D[Z]===void 0||Z[0]==="$"||Z==="as"||Z==="theme"&&D.theme===L||(Z==="forwardedAs"?j.as=D.forwardedAs:q&&!q(Z,G)||(j[Z]=D[Z]));var W=function(oe,ue){var de=g0(),we=oe.generateAndInjectStyles(ue,de.styleSheet,de.stylis);return we}(w,D),Y=Hr($,ee);return W&&(Y+=" "+W),D.className&&(Y+=" "+D.className),j[Sf(G)&&!sx.has(G)?"class":"className"]=Y,j.ref=N,Ye.createElement(G,j)}(m,y,R)}v.displayName=h;var m=mr.forwardRef(v);return m.attrs=p,m.componentStyle=c,m.displayName=h,m.shouldForwardProp=_,m.foldedComponentIds=i?Hr(r.foldedComponentIds,r.styledComponentId):"",m.styledComponentId=d,m.target=i?r.target:t,Object.defineProperty(m,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(y){this._foldedDefaultProps=i?function(R){for(var A=[],M=1;M<arguments.length;M++)A[M-1]=arguments[M];for(var N=0,E=A;N<E.length;N++)zd(R,E[N],!0);return R}({},r.defaultProps,y):y}}),op(m,function(){return".".concat(m.styledComponentId)}),o&&dx(m,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),m}function _0(t,e){for(var n=[t[0]],i=0,r=e.length;i<r;i+=1)n.push(e[i],t[i+1]);return n}var x0=function(t){return Object.assign(t,{isCss:!0})};function Mn(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(no(t)||_a(t))return x0(jr(_0(lc,xu([t],e,!0))));var i=t;return e.length===0&&i.length===1&&typeof i[0]=="string"?jr(i):x0(jr(_0(i,e)))}function Vd(t,e,n){if(n===void 0&&(n=hs),!e)throw io(1,e);var i=function(r){for(var o=[],s=1;s<arguments.length;s++)o[s-1]=arguments[s];return t(e,n,Mn.apply(void 0,xu([r],o,!1)))};return i.attrs=function(r){return Vd(t,e,Zt(Zt({},n),{attrs:Array.prototype.concat(n.attrs,r).filter(Boolean)}))},i.withConfig=function(r){return Vd(t,e,Zt(Zt({},n),r))},i}var xx=function(t){return Vd(Y3,t)},Qt=xx;sx.forEach(function(t){Qt[t]=xx(t)});const sp=Qt.div`
    --size: ${({$size:t})=>({normal:3.2,big:4.2})[t]}rem;
    height: var(--size);
    width: var(--size);
    pointer-events: none;

    ${({theme:t,$isClickable:e})=>e&&Mn`
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
`,yx=({size:t="normal",variant:e="close",onClick:n})=>{const i={close:Db,copyright:Ib,facebook:Bb,instagram:kb,menu:Hb,merch:zb,send:Gb,share:Vb,tiktok:Wb,x:Xb,youtube:$b,expand:Ob,dot:Ub,dotActive:Fb}[e];return Ne.jsx(sp,{onClick:n,$size:t,$isClickable:!!n,dangerouslySetInnerHTML:{__html:i}})},q3=Qt.div`
    height: 8rem;
    width: fit-content;

    & > svg {
        height: 100%;
        width: 100%;
    }

    ${({theme:t,$isDark:e})=>e&&Mn`
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

    ${({theme:t,$withFrame:e})=>e&&Mn`
            height: 7rem;
            padding: 1rem;
            border-radius: 2rem;
            background-color: ${t.palette.shades.secondary[48]};
        `}
`,Z3=({isDark:t,withFrame:e})=>Ne.jsx(q3,{$isDark:t,$withFrame:e,dangerouslySetInnerHTML:{__html:"logo"}}),Sx=Qt.a`
    font-size: inherit;
    text-decoration: none;
    color: inherit;
`,K3=({children:t,href:e="#"})=>Ne.jsx(Sx,{href:e,target:typeof e=="string"&&e.startsWith("#")?"_self":"_blank",rel:"noopener",children:t??e}),Q3=Qt.ul`
    display: flex;
    font-size: 2.8rem;

    ${({theme:t,$variant:e})=>({header:Mn`
                flex-direction: row;
                column-gap: 6rem;
                color: ${t.palette.primary};
            `,headerMobile:Mn`
                position: absolute;
                top: 100%;
                left: -2rem;
                width: calc(100% + 4rem);
                padding: 0 3rem 1rem 3rem;
                flex-direction: column;
                color: ${t.palette.secondary};
                background-color: ${t.palette.shades.primary[87]};
            `,footer:Mn`
                flex-direction: column;
                font-size: 1.4rem;
                gap: 1rem;
                color: ${t.palette.shades.primary[48]};
            `})[e]}
`,J3=Qt.li`
    cursor: pointer;

    ${({theme:t,$variant:e,$isCurrent:n})=>({header:Mn`
                transition: opacity 0.1s ease-out;

                &:hover {
                    opacity: 0.5;
                }
            `,headerMobile:Mn`
                & > ${Sx} {
                    display: block;
                    padding: 1rem;
                    text-align: center;
                    transition: background-color 0.1s ease-out;

                    &:hover {
                        background-color: ${t.palette.shades.secondary[38]};
                    }
                }
            `,footer:Mn`
                font-size: 1.4rem;
                color: ${t.palette.shades.secondary[48]};
                transition: color 0.1s ease-out;

                &:hover {
                    color: ${t.palette.secondary};
                }

                ${n&&Mn`
                    color: ${t.palette.secondary};
                    pointer-events: none;
                `}
            `})[e]}
`,y0=({variant:t,links:e,onItemClickCallback:n})=>Ne.jsx(Q3,{$variant:t,children:e.length>0&&e.map(({isCurrent:i,children:r,href:o},s)=>Ne.jsx(J3,{$isCurrent:i,$variant:t,onClick:n,children:Ne.jsx(K3,{href:o,children:r})},s))}),S0={siteLinks:{id:"app.layout.footer.siteLinks",description:"Footer link to general site links.",defaultMessage:"Site Links"},myLinks:{id:"app.layout.footer.myLinks",description:"Footer link to personal links or information.",defaultMessage:"My links"}},eP=Qt.footer`
    width: 100%;
    padding: 2rem;
    color: ${({theme:t})=>t.palette.primary};
`,tP=Qt.div`
    margin: 0 auto;
    width: 100%;
    max-width: 600px;
    display: flex;
    flex-direction: column;
    gap: 2rem;
`,nP=Qt.div`
    display: flex;
    justify-content: center;
    column-gap: 2rem;
`,iP=Qt.div`
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
`,E0=Qt.div`
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
`,M0=Qt.span`
    color: ${({theme:t})=>t.palette.secondary};
    border-bottom: ${({theme:t})=>t.border.secondary};
    border-color: ${({theme:t})=>t.palette.shades.secondary[38]};
`,rP=Qt.div`
    margin: 0 auto;
    display: flex;
    align-items: center;
    column-gap: 1rem;
    color: ${({theme:t})=>t.palette.shades.secondary[48]};
    font-size: 1.6rem;

    & > ${sp} {
        fill: ${({theme:t})=>t.palette.shades.secondary[48]};
    }
`,oP=({siteLinks:t,myLinks:e})=>Ne.jsx(eP,{children:Ne.jsxs(tP,{children:[Ne.jsxs(nP,{children:[Ne.jsx(Z3,{withFrame:!0}),Ne.jsxs(iP,{children:[Ne.jsxs(E0,{children:[Ne.jsx(M0,{children:Ne.jsx(Bm,{...S0.siteLinks})}),Ne.jsx(y0,{links:t,variant:"footer"})]}),Ne.jsxs(E0,{children:[Ne.jsx(M0,{children:Ne.jsx(Bm,{...S0.myLinks})}),Ne.jsx(y0,{links:e,variant:"footer"})]})]})]}),Ne.jsxs(rP,{children:[Ne.jsx(yx,{variant:"copyright"}),"Copyright 2024"]})]})}),El={home:{id:"app.layout.home",description:"Navigation link to the 'Home' page.",defaultMessage:"Home"},about:{id:"app.layout.about",description:"Navigation link to the 'About' section.",defaultMessage:"About"},repository:{id:"app.layout.repository",description:"Navigation link to the project's repository section.",defaultMessage:"Current project's repository"},figma:{id:"app.layout.figma",description:"Navigation link to the project's figma section.",defaultMessage:"Website Figma project"}},sP=Qt.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: ${({theme:t})=>t.palette.primary};
`,aP=({children:t})=>{const e=Zu(),n=[{children:e.formatMessage(El.home),href:"#home"},{children:e.formatMessage(El.about),href:"#about"}],i=[{children:"LinkedIn",href:"https://www.linkedin.com/in/bartlomiej-sniatkowski/"},{children:"Github",href:"https://github.com/BSniatkowski"},{children:e.formatMessage(El.repository),href:"https://github.com/BSniatkowski/z-nosem-w-piwie-react"},{children:e.formatMessage(El.figma),href:"https://www.figma.com/file/7sIhgDCOUo9jGmuUOFngF9/Z-Nosem-W-Piwie?type=design&node-id=0-1&mode=design&t=RaFAvIdMTLGsTKoS-0"}];return Ne.jsxs(sP,{children:[t,Ne.jsx(oP,{siteLinks:n,myLinks:i})]})},lP=({children:t})=>Ne.jsx(Ne.Fragment,{children:t}),uP=Qt.div`
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

    ${({$isMobile:t})=>t?Mn`
                  margin: 0 auto;
                  max-width: calc(100% - 4rem);
                  left: 0;
                  right: 0;
              `:Mn`
                  left: 50%;
                  transform: translateX(-50%);
              `}

    color: ${({theme:t})=>t.palette.white};
    background-color: ${({$variant:t="info",theme:e})=>({info:e.palette.secondary,warning:e.palette.warning,error:e.palette.error})[t]};

    & > ${sp} {
        fill: ${({theme:t})=>t.palette.white};
    }
`,cP=Qt.span`
    font-size: 2.4rem;
    line-height: 1.4em;
    text-align: start;
    align-self: center;
`,fP=({isMobile:t,variant:e="info",message:n,isActive:i,onClose:r})=>Ne.jsxs(uP,{$isMobile:t,$isActive:i,$variant:e,children:[Ne.jsx(cP,{children:n}),Ne.jsx(yx,{variant:"close",onClick:r})]}),dP={desktop:1920,desktopSmall:1366,tablet:1024,mobile:756},hP=t=>{const e=dP[t],[n,i]=Ye.useState(window.innerWidth),r=Ye.useMemo(()=>n<=e,[n,e]),o=()=>{i(window.innerWidth)};return Ye.useEffect(()=>(window.addEventListener("resize",o),()=>{window.removeEventListener("resize",o)}),[]),r};var xa=(t=>(t.SHOW_SNACKBAR="showSnackbar",t.CLOSE_SNACKBAR="closeSnackbar",t))(xa||{});const Ex={variant:"info",message:"",isActive:!1},pP=(t,e)=>{var n,i;switch(e.type){case xa.SHOW_SNACKBAR:return{variant:(n=e==null?void 0:e.payload)==null?void 0:n.variant,message:(i=e==null?void 0:e.payload)==null?void 0:i.message,isActive:!0};case xa.CLOSE_SNACKBAR:return{...t,isActive:!1}}},mP=Ye.createContext(Ex),gP=Ye.createContext(null),vP=({children:t})=>{const[e,n]=Ye.useReducer(pP,Ex),i=hP("mobile");return Ye.useEffect(()=>{const r=setTimeout(()=>{e.isActive&&n({type:xa.CLOSE_SNACKBAR})},3e3);return()=>clearTimeout(r)},[e.isActive]),Ne.jsx(mP.Provider,{value:e,children:Ne.jsxs(gP.Provider,{value:n,children:[t,Ne.jsx(fP,{...e,isMobile:i,onClose:()=>n({type:xa.CLOSE_SNACKBAR})})]})})},_P={palette:{primary:"#FFE0B2",secondary:"#5D4037",accent:"#FFCA28",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00",white:"#fff",black:"#000",grey:"#9E9E9E",greyLighten1:"#BDBDBD",greyLighten2:"#E0E0E0",shades:{black:{18:"#0000002E",38:"#00000061",87:"#000000DE"},primary:{48:"#FFE0B280",87:"#FFE0B2DE"},secondary:{18:"#5D40372E",38:"#5D403761",48:"#5D40377A"}}},border:{primary:"1rem solid #FFE0B2",secondary:"2px solid #5D40377A"},boxShadow:{primary:"0 0 8px #00000061",secondary:"-10px -10px 0 0 #FFE0B280"}},xP=({children:t})=>Ne.jsx(j3,{theme:_P,children:t});function yP({messages:t,locale:e}){const[n,i]=Ye.useState(e),r=Ye.useMemo(()=>t[n],[n,t]);return Ne.jsx(xP,{children:Ne.jsx(LM,{locale:n,messages:r,defaultLocale:"en-GB",children:Ne.jsx(vP,{children:Ne.jsx(lP,{children:Ne.jsx(aP,{children:Ne.jsx(Nb,{actualLocale:n,setActualIntlLocale:i})})})})})})}const SP="pl-PL",EP="en-GB",MP=[SP,EP],T0=t=>Px(Object.assign({"../compiled-lang/en.json":()=>pp(()=>import("./en-d8c220fa.js"),[],import.meta.url),"../compiled-lang/pl.json":()=>pp(()=>import("./pl-d8c220fa.js"),[],import.meta.url)}),`../compiled-lang/${t}.json`);(async()=>{var n,i;const t=(n=await T0("en"))==null?void 0:n.default,e=(i=await T0("pl"))==null?void 0:i.default;Mf.createRoot(document.getElementById("root")).render(Ne.jsx(mr.StrictMode,{children:Ne.jsx(yP,{messages:{"en-GB":t,"pl-PL":e},locale:MP.includes(navigator.language)?navigator.language:"en-GB"})}))})();
