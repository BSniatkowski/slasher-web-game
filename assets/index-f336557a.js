(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();const Lx="modulepreload",Nx=function(t,e){return new URL(t,e).href},mp={},gp=function(e,n,i){if(!n||n.length===0)return e();const r=document.getElementsByTagName("link");return Promise.all(n.map(o=>{if(o=Nx(o,i),o in mp)return;mp[o]=!0;const s=o.endsWith(".css"),a=s?'[rel="stylesheet"]':"";if(!!i)for(let c=r.length-1;c>=0;c--){const d=r[c];if(d.href===o&&(!s||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${a}`))return;const u=document.createElement("link");if(u.rel=s?"stylesheet":Lx,s||(u.as="script",u.crossOrigin=""),u.href=o,document.head.appendChild(u),s)return new Promise((c,d)=>{u.addEventListener("load",c),u.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>e()).catch(o=>{const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=o,window.dispatchEvent(s),!s.defaultPrevented)throw o})},Ix=(t,e)=>{const n=t[e];return n?typeof n=="function"?n():Promise.resolve(n):new Promise((i,r)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(r.bind(null,new Error("Unknown variable dynamic import: "+e)))})};function Dx(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var C0={exports:{}},Au={},R0={exports:{}},Xe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ya=Symbol.for("react.element"),Ux=Symbol.for("react.portal"),Fx=Symbol.for("react.fragment"),Ox=Symbol.for("react.strict_mode"),Bx=Symbol.for("react.profiler"),kx=Symbol.for("react.provider"),Hx=Symbol.for("react.context"),zx=Symbol.for("react.forward_ref"),Gx=Symbol.for("react.suspense"),Vx=Symbol.for("react.memo"),Wx=Symbol.for("react.lazy"),vp=Symbol.iterator;function Xx(t){return t===null||typeof t!="object"?null:(t=vp&&t[vp]||t["@@iterator"],typeof t=="function"?t:null)}var b0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},P0=Object.assign,L0={};function ps(t,e,n){this.props=t,this.context=e,this.refs=L0,this.updater=n||b0}ps.prototype.isReactComponent={};ps.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ps.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function N0(){}N0.prototype=ps.prototype;function jd(t,e,n){this.props=t,this.context=e,this.refs=L0,this.updater=n||b0}var Yd=jd.prototype=new N0;Yd.constructor=jd;P0(Yd,ps.prototype);Yd.isPureReactComponent=!0;var _p=Array.isArray,I0=Object.prototype.hasOwnProperty,qd={current:null},D0={key:!0,ref:!0,__self:!0,__source:!0};function U0(t,e,n){var i,r={},o=null,s=null;if(e!=null)for(i in e.ref!==void 0&&(s=e.ref),e.key!==void 0&&(o=""+e.key),e)I0.call(e,i)&&!D0.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:ya,type:t,key:o,ref:s,props:r,_owner:qd.current}}function $x(t,e){return{$$typeof:ya,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Zd(t){return typeof t=="object"&&t!==null&&t.$$typeof===ya}function jx(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var xp=/\/+/g;function gc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?jx(""+t.key):e.toString(36)}function Tl(t,e,n,i,r){var o=typeof t;(o==="undefined"||o==="boolean")&&(t=null);var s=!1;if(t===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(t.$$typeof){case ya:case Ux:s=!0}}if(s)return s=t,r=r(s),t=i===""?"."+gc(s,0):i,_p(r)?(n="",t!=null&&(n=t.replace(xp,"$&/")+"/"),Tl(r,e,n,"",function(u){return u})):r!=null&&(Zd(r)&&(r=$x(r,n+(!r.key||s&&s.key===r.key?"":(""+r.key).replace(xp,"$&/")+"/")+t)),e.push(r)),1;if(s=0,i=i===""?".":i+":",_p(t))for(var a=0;a<t.length;a++){o=t[a];var l=i+gc(o,a);s+=Tl(o,e,n,l,r)}else if(l=Xx(t),typeof l=="function")for(t=l.call(t),a=0;!(o=t.next()).done;)o=o.value,l=i+gc(o,a++),s+=Tl(o,e,n,l,r);else if(o==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return s}function Ia(t,e,n){if(t==null)return t;var i=[],r=0;return Tl(t,i,"","",function(o){return e.call(n,o,r++)}),i}function Yx(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var cn={current:null},wl={transition:null},qx={ReactCurrentDispatcher:cn,ReactCurrentBatchConfig:wl,ReactCurrentOwner:qd};Xe.Children={map:Ia,forEach:function(t,e,n){Ia(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ia(t,function(){e++}),e},toArray:function(t){return Ia(t,function(e){return e})||[]},only:function(t){if(!Zd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Xe.Component=ps;Xe.Fragment=Fx;Xe.Profiler=Bx;Xe.PureComponent=jd;Xe.StrictMode=Ox;Xe.Suspense=Gx;Xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=qx;Xe.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=P0({},t.props),r=t.key,o=t.ref,s=t._owner;if(e!=null){if(e.ref!==void 0&&(o=e.ref,s=qd.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)I0.call(e,l)&&!D0.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:ya,type:t.type,key:r,ref:o,props:i,_owner:s}};Xe.createContext=function(t){return t={$$typeof:Hx,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:kx,_context:t},t.Consumer=t};Xe.createElement=U0;Xe.createFactory=function(t){var e=U0.bind(null,t);return e.type=t,e};Xe.createRef=function(){return{current:null}};Xe.forwardRef=function(t){return{$$typeof:zx,render:t}};Xe.isValidElement=Zd;Xe.lazy=function(t){return{$$typeof:Wx,_payload:{_status:-1,_result:t},_init:Yx}};Xe.memo=function(t,e){return{$$typeof:Vx,type:t,compare:e===void 0?null:e}};Xe.startTransition=function(t){var e=wl.transition;wl.transition={};try{t()}finally{wl.transition=e}};Xe.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Xe.useCallback=function(t,e){return cn.current.useCallback(t,e)};Xe.useContext=function(t){return cn.current.useContext(t)};Xe.useDebugValue=function(){};Xe.useDeferredValue=function(t){return cn.current.useDeferredValue(t)};Xe.useEffect=function(t,e){return cn.current.useEffect(t,e)};Xe.useId=function(){return cn.current.useId()};Xe.useImperativeHandle=function(t,e,n){return cn.current.useImperativeHandle(t,e,n)};Xe.useInsertionEffect=function(t,e){return cn.current.useInsertionEffect(t,e)};Xe.useLayoutEffect=function(t,e){return cn.current.useLayoutEffect(t,e)};Xe.useMemo=function(t,e){return cn.current.useMemo(t,e)};Xe.useReducer=function(t,e,n){return cn.current.useReducer(t,e,n)};Xe.useRef=function(t){return cn.current.useRef(t)};Xe.useState=function(t){return cn.current.useState(t)};Xe.useSyncExternalStore=function(t,e,n){return cn.current.useSyncExternalStore(t,e,n)};Xe.useTransition=function(){return cn.current.useTransition()};Xe.version="18.2.0";R0.exports=Xe;var Ye=R0.exports;const gr=Dx(Ye);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zx=Ye,Kx=Symbol.for("react.element"),Qx=Symbol.for("react.fragment"),Jx=Object.prototype.hasOwnProperty,ey=Zx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ty={key:!0,ref:!0,__self:!0,__source:!0};function F0(t,e,n){var i,r={},o=null,s=null;n!==void 0&&(o=""+n),e.key!==void 0&&(o=""+e.key),e.ref!==void 0&&(s=e.ref);for(i in e)Jx.call(e,i)&&!ty.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:Kx,type:t,key:o,ref:s,props:r,_owner:ey.current}}Au.Fragment=Qx;Au.jsx=F0;Au.jsxs=F0;C0.exports=Au;var Ne=C0.exports;var Af={},O0={exports:{}},Rn={},B0={exports:{}},k0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(L,I){var G=L.length;L.push(I);e:for(;0<G;){var j=G-1>>>1,Z=L[j];if(0<r(Z,I))L[j]=I,L[G]=Z,G=j;else break e}}function n(L){return L.length===0?null:L[0]}function i(L){if(L.length===0)return null;var I=L[0],G=L.pop();if(G!==I){L[0]=G;e:for(var j=0,Z=L.length,W=Z>>>1;j<W;){var Y=2*(j+1)-1,oe=L[Y],ue=Y+1,de=L[ue];if(0>r(oe,G))ue<Z&&0>r(de,oe)?(L[j]=de,L[ue]=G,j=ue):(L[j]=oe,L[Y]=G,j=Y);else if(ue<Z&&0>r(de,G))L[j]=de,L[ue]=G,j=ue;else break e}}return I}function r(L,I){var G=L.sortIndex-I.sortIndex;return G!==0?G:L.id-I.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;t.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();t.unstable_now=function(){return s.now()-a}}var l=[],u=[],c=1,d=null,h=3,p=!1,_=!1,x=!1,g=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(L){for(var I=n(u);I!==null;){if(I.callback===null)i(u);else if(I.startTime<=L)i(u),I.sortIndex=I.expirationTime,e(l,I);else break;I=n(u)}}function y(L){if(x=!1,m(L),!_)if(n(l)!==null)_=!0,X(R);else{var I=n(u);I!==null&&q(y,I.startTime-L)}}function R(L,I){_=!1,x&&(x=!1,f(N),N=-1),p=!0;var G=h;try{for(m(I),d=n(l);d!==null&&(!(d.expirationTime>I)||L&&!F());){var j=d.callback;if(typeof j=="function"){d.callback=null,h=d.priorityLevel;var Z=j(d.expirationTime<=I);I=t.unstable_now(),typeof Z=="function"?d.callback=Z:d===n(l)&&i(l),m(I)}else i(l);d=n(l)}if(d!==null)var W=!0;else{var Y=n(u);Y!==null&&q(y,Y.startTime-I),W=!1}return W}finally{d=null,h=G,p=!1}}var A=!1,M=null,N=-1,E=5,w=-1;function F(){return!(t.unstable_now()-w<E)}function $(){if(M!==null){var L=t.unstable_now();w=L;var I=!0;try{I=M(!0,L)}finally{I?ee():(A=!1,M=null)}}else A=!1}var ee;if(typeof v=="function")ee=function(){v($)};else if(typeof MessageChannel<"u"){var P=new MessageChannel,O=P.port2;P.port1.onmessage=$,ee=function(){O.postMessage(null)}}else ee=function(){g($,0)};function X(L){M=L,A||(A=!0,ee())}function q(L,I){N=g(function(){L(t.unstable_now())},I)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(L){L.callback=null},t.unstable_continueExecution=function(){_||p||(_=!0,X(R))},t.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<L?Math.floor(1e3/L):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(L){switch(h){case 1:case 2:case 3:var I=3;break;default:I=h}var G=h;h=I;try{return L()}finally{h=G}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(L,I){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var G=h;h=L;try{return I()}finally{h=G}},t.unstable_scheduleCallback=function(L,I,G){var j=t.unstable_now();switch(typeof G=="object"&&G!==null?(G=G.delay,G=typeof G=="number"&&0<G?j+G:j):G=j,L){case 1:var Z=-1;break;case 2:Z=250;break;case 5:Z=1073741823;break;case 4:Z=1e4;break;default:Z=5e3}return Z=G+Z,L={id:c++,callback:I,priorityLevel:L,startTime:G,expirationTime:Z,sortIndex:-1},G>j?(L.sortIndex=G,e(u,L),n(l)===null&&L===n(u)&&(x?(f(N),N=-1):x=!0,q(y,G-j))):(L.sortIndex=Z,e(l,L),_||p||(_=!0,X(R))),L},t.unstable_shouldYield=F,t.unstable_wrapCallback=function(L){var I=h;return function(){var G=h;h=I;try{return L.apply(this,arguments)}finally{h=G}}}})(k0);B0.exports=k0;var ny=B0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var H0=Ye,Cn=ny;function J(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var z0=new Set,Qs={};function ro(t,e){Ko(t,e),Ko(t+"Capture",e)}function Ko(t,e){for(Qs[t]=e,t=0;t<e.length;t++)z0.add(e[t])}var Fi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Cf=Object.prototype.hasOwnProperty,iy=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,yp={},Sp={};function ry(t){return Cf.call(Sp,t)?!0:Cf.call(yp,t)?!1:iy.test(t)?Sp[t]=!0:(yp[t]=!0,!1)}function oy(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function sy(t,e,n,i){if(e===null||typeof e>"u"||oy(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function fn(t,e,n,i,r,o,s){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=o,this.removeEmptyString=s}var Vt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Vt[t]=new fn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Vt[e]=new fn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Vt[t]=new fn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Vt[t]=new fn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Vt[t]=new fn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Vt[t]=new fn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Vt[t]=new fn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Vt[t]=new fn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Vt[t]=new fn(t,5,!1,t.toLowerCase(),null,!1,!1)});var Kd=/[\-:]([a-z])/g;function Qd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Kd,Qd);Vt[e]=new fn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Kd,Qd);Vt[e]=new fn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Kd,Qd);Vt[e]=new fn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Vt[t]=new fn(t,1,!1,t.toLowerCase(),null,!1,!1)});Vt.xlinkHref=new fn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Vt[t]=new fn(t,1,!1,t.toLowerCase(),null,!0,!0)});function Jd(t,e,n,i){var r=Vt.hasOwnProperty(e)?Vt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(sy(e,n,r,i)&&(n=null),i||r===null?ry(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var zi=H0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Da=Symbol.for("react.element"),Co=Symbol.for("react.portal"),Ro=Symbol.for("react.fragment"),eh=Symbol.for("react.strict_mode"),Rf=Symbol.for("react.profiler"),G0=Symbol.for("react.provider"),V0=Symbol.for("react.context"),th=Symbol.for("react.forward_ref"),bf=Symbol.for("react.suspense"),Pf=Symbol.for("react.suspense_list"),nh=Symbol.for("react.memo"),Zi=Symbol.for("react.lazy"),W0=Symbol.for("react.offscreen"),Ep=Symbol.iterator;function Es(t){return t===null||typeof t!="object"?null:(t=Ep&&t[Ep]||t["@@iterator"],typeof t=="function"?t:null)}var _t=Object.assign,vc;function Ds(t){if(vc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);vc=e&&e[1]||""}return`
`+vc+t}var _c=!1;function xc(t,e){if(!t||_c)return"";_c=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){i=u}t.call(e.prototype)}else{try{throw Error()}catch(u){i=u}t()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),o=i.stack.split(`
`),s=r.length-1,a=o.length-1;1<=s&&0<=a&&r[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(r[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||r[s]!==o[a]){var l=`
`+r[s].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=s&&0<=a);break}}}finally{_c=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ds(t):""}function ay(t){switch(t.tag){case 5:return Ds(t.type);case 16:return Ds("Lazy");case 13:return Ds("Suspense");case 19:return Ds("SuspenseList");case 0:case 2:case 15:return t=xc(t.type,!1),t;case 11:return t=xc(t.type.render,!1),t;case 1:return t=xc(t.type,!0),t;default:return""}}function Lf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ro:return"Fragment";case Co:return"Portal";case Rf:return"Profiler";case eh:return"StrictMode";case bf:return"Suspense";case Pf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case V0:return(t.displayName||"Context")+".Consumer";case G0:return(t._context.displayName||"Context")+".Provider";case th:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case nh:return e=t.displayName||null,e!==null?e:Lf(t.type)||"Memo";case Zi:e=t._payload,t=t._init;try{return Lf(t(e))}catch{}}return null}function ly(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Lf(e);case 8:return e===eh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function vr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function X0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function uy(t){var e=X0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,o=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(s){i=""+s,o.call(this,s)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(s){i=""+s},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ua(t){t._valueTracker||(t._valueTracker=uy(t))}function $0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=X0(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Wl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Nf(t,e){var n=e.checked;return _t({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Mp(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=vr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function j0(t,e){e=e.checked,e!=null&&Jd(t,"checked",e,!1)}function If(t,e){j0(t,e);var n=vr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Df(t,e.type,n):e.hasOwnProperty("defaultValue")&&Df(t,e.type,vr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Tp(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Df(t,e,n){(e!=="number"||Wl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Us=Array.isArray;function Vo(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+vr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Uf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(J(91));return _t({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function wp(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(J(92));if(Us(n)){if(1<n.length)throw Error(J(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:vr(n)}}function Y0(t,e){var n=vr(e.value),i=vr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Ap(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function q0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ff(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?q0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Fa,Z0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Fa=Fa||document.createElement("div"),Fa.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Fa.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Js(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ks={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},cy=["Webkit","ms","Moz","O"];Object.keys(ks).forEach(function(t){cy.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ks[e]=ks[t]})});function K0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ks.hasOwnProperty(t)&&ks[t]?(""+e).trim():e+"px"}function Q0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=K0(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var fy=_t({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Of(t,e){if(e){if(fy[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(J(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(J(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(J(61))}if(e.style!=null&&typeof e.style!="object")throw Error(J(62))}}function Bf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var kf=null;function ih(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Hf=null,Wo=null,Xo=null;function Cp(t){if(t=Ma(t)){if(typeof Hf!="function")throw Error(J(280));var e=t.stateNode;e&&(e=Lu(e),Hf(t.stateNode,t.type,e))}}function J0(t){Wo?Xo?Xo.push(t):Xo=[t]:Wo=t}function ev(){if(Wo){var t=Wo,e=Xo;if(Xo=Wo=null,Cp(t),e)for(t=0;t<e.length;t++)Cp(e[t])}}function tv(t,e){return t(e)}function nv(){}var yc=!1;function iv(t,e,n){if(yc)return t(e,n);yc=!0;try{return tv(t,e,n)}finally{yc=!1,(Wo!==null||Xo!==null)&&(nv(),ev())}}function ea(t,e){var n=t.stateNode;if(n===null)return null;var i=Lu(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(J(231,e,typeof n));return n}var zf=!1;if(Fi)try{var Ms={};Object.defineProperty(Ms,"passive",{get:function(){zf=!0}}),window.addEventListener("test",Ms,Ms),window.removeEventListener("test",Ms,Ms)}catch{zf=!1}function dy(t,e,n,i,r,o,s,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var Hs=!1,Xl=null,$l=!1,Gf=null,hy={onError:function(t){Hs=!0,Xl=t}};function py(t,e,n,i,r,o,s,a,l){Hs=!1,Xl=null,dy.apply(hy,arguments)}function my(t,e,n,i,r,o,s,a,l){if(py.apply(this,arguments),Hs){if(Hs){var u=Xl;Hs=!1,Xl=null}else throw Error(J(198));$l||($l=!0,Gf=u)}}function oo(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function rv(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Rp(t){if(oo(t)!==t)throw Error(J(188))}function gy(t){var e=t.alternate;if(!e){if(e=oo(t),e===null)throw Error(J(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var o=r.alternate;if(o===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===o.child){for(o=r.child;o;){if(o===n)return Rp(r),t;if(o===i)return Rp(r),e;o=o.sibling}throw Error(J(188))}if(n.return!==i.return)n=r,i=o;else{for(var s=!1,a=r.child;a;){if(a===n){s=!0,n=r,i=o;break}if(a===i){s=!0,i=r,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,i=r;break}if(a===i){s=!0,i=o,n=r;break}a=a.sibling}if(!s)throw Error(J(189))}}if(n.alternate!==i)throw Error(J(190))}if(n.tag!==3)throw Error(J(188));return n.stateNode.current===n?t:e}function ov(t){return t=gy(t),t!==null?sv(t):null}function sv(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=sv(t);if(e!==null)return e;t=t.sibling}return null}var av=Cn.unstable_scheduleCallback,bp=Cn.unstable_cancelCallback,vy=Cn.unstable_shouldYield,_y=Cn.unstable_requestPaint,Mt=Cn.unstable_now,xy=Cn.unstable_getCurrentPriorityLevel,rh=Cn.unstable_ImmediatePriority,lv=Cn.unstable_UserBlockingPriority,jl=Cn.unstable_NormalPriority,yy=Cn.unstable_LowPriority,uv=Cn.unstable_IdlePriority,Cu=null,gi=null;function Sy(t){if(gi&&typeof gi.onCommitFiberRoot=="function")try{gi.onCommitFiberRoot(Cu,t,void 0,(t.current.flags&128)===128)}catch{}}var ni=Math.clz32?Math.clz32:Ty,Ey=Math.log,My=Math.LN2;function Ty(t){return t>>>=0,t===0?32:31-(Ey(t)/My|0)|0}var Oa=64,Ba=4194304;function Fs(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Yl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,o=t.pingedLanes,s=n&268435455;if(s!==0){var a=s&~r;a!==0?i=Fs(a):(o&=s,o!==0&&(i=Fs(o)))}else s=n&~r,s!==0?i=Fs(s):o!==0&&(i=Fs(o));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,o=e&-e,r>=o||r===16&&(o&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-ni(e),r=1<<n,i|=t[n],e&=~r;return i}function wy(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ay(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,o=t.pendingLanes;0<o;){var s=31-ni(o),a=1<<s,l=r[s];l===-1?(!(a&n)||a&i)&&(r[s]=wy(a,e)):l<=e&&(t.expiredLanes|=a),o&=~a}}function Vf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function cv(){var t=Oa;return Oa<<=1,!(Oa&4194240)&&(Oa=64),t}function Sc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Sa(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-ni(e),t[e]=n}function Cy(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-ni(n),o=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~o}}function oh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-ni(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var Je=0;function fv(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var dv,sh,hv,pv,mv,Wf=!1,ka=[],or=null,sr=null,ar=null,ta=new Map,na=new Map,Ji=[],Ry="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Pp(t,e){switch(t){case"focusin":case"focusout":or=null;break;case"dragenter":case"dragleave":sr=null;break;case"mouseover":case"mouseout":ar=null;break;case"pointerover":case"pointerout":ta.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":na.delete(e.pointerId)}}function Ts(t,e,n,i,r,o){return t===null||t.nativeEvent!==o?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:o,targetContainers:[r]},e!==null&&(e=Ma(e),e!==null&&sh(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function by(t,e,n,i,r){switch(e){case"focusin":return or=Ts(or,t,e,n,i,r),!0;case"dragenter":return sr=Ts(sr,t,e,n,i,r),!0;case"mouseover":return ar=Ts(ar,t,e,n,i,r),!0;case"pointerover":var o=r.pointerId;return ta.set(o,Ts(ta.get(o)||null,t,e,n,i,r)),!0;case"gotpointercapture":return o=r.pointerId,na.set(o,Ts(na.get(o)||null,t,e,n,i,r)),!0}return!1}function gv(t){var e=Or(t.target);if(e!==null){var n=oo(e);if(n!==null){if(e=n.tag,e===13){if(e=rv(n),e!==null){t.blockedOn=e,mv(t.priority,function(){hv(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Al(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Xf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);kf=i,n.target.dispatchEvent(i),kf=null}else return e=Ma(n),e!==null&&sh(e),t.blockedOn=n,!1;e.shift()}return!0}function Lp(t,e,n){Al(t)&&n.delete(e)}function Py(){Wf=!1,or!==null&&Al(or)&&(or=null),sr!==null&&Al(sr)&&(sr=null),ar!==null&&Al(ar)&&(ar=null),ta.forEach(Lp),na.forEach(Lp)}function ws(t,e){t.blockedOn===e&&(t.blockedOn=null,Wf||(Wf=!0,Cn.unstable_scheduleCallback(Cn.unstable_NormalPriority,Py)))}function ia(t){function e(r){return ws(r,t)}if(0<ka.length){ws(ka[0],t);for(var n=1;n<ka.length;n++){var i=ka[n];i.blockedOn===t&&(i.blockedOn=null)}}for(or!==null&&ws(or,t),sr!==null&&ws(sr,t),ar!==null&&ws(ar,t),ta.forEach(e),na.forEach(e),n=0;n<Ji.length;n++)i=Ji[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Ji.length&&(n=Ji[0],n.blockedOn===null);)gv(n),n.blockedOn===null&&Ji.shift()}var $o=zi.ReactCurrentBatchConfig,ql=!0;function Ly(t,e,n,i){var r=Je,o=$o.transition;$o.transition=null;try{Je=1,ah(t,e,n,i)}finally{Je=r,$o.transition=o}}function Ny(t,e,n,i){var r=Je,o=$o.transition;$o.transition=null;try{Je=4,ah(t,e,n,i)}finally{Je=r,$o.transition=o}}function ah(t,e,n,i){if(ql){var r=Xf(t,e,n,i);if(r===null)Lc(t,e,i,Zl,n),Pp(t,i);else if(by(r,t,e,n,i))i.stopPropagation();else if(Pp(t,i),e&4&&-1<Ry.indexOf(t)){for(;r!==null;){var o=Ma(r);if(o!==null&&dv(o),o=Xf(t,e,n,i),o===null&&Lc(t,e,i,Zl,n),o===r)break;r=o}r!==null&&i.stopPropagation()}else Lc(t,e,i,null,n)}}var Zl=null;function Xf(t,e,n,i){if(Zl=null,t=ih(i),t=Or(t),t!==null)if(e=oo(t),e===null)t=null;else if(n=e.tag,n===13){if(t=rv(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Zl=t,null}function vv(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(xy()){case rh:return 1;case lv:return 4;case jl:case yy:return 16;case uv:return 536870912;default:return 16}default:return 16}}var tr=null,lh=null,Cl=null;function _v(){if(Cl)return Cl;var t,e=lh,n=e.length,i,r="value"in tr?tr.value:tr.textContent,o=r.length;for(t=0;t<n&&e[t]===r[t];t++);var s=n-t;for(i=1;i<=s&&e[n-i]===r[o-i];i++);return Cl=r.slice(t,1<i?1-i:void 0)}function Rl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ha(){return!0}function Np(){return!1}function bn(t){function e(n,i,r,o,s){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Ha:Np,this.isPropagationStopped=Np,this}return _t(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ha)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ha)},persist:function(){},isPersistent:Ha}),e}var ms={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},uh=bn(ms),Ea=_t({},ms,{view:0,detail:0}),Iy=bn(Ea),Ec,Mc,As,Ru=_t({},Ea,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ch,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==As&&(As&&t.type==="mousemove"?(Ec=t.screenX-As.screenX,Mc=t.screenY-As.screenY):Mc=Ec=0,As=t),Ec)},movementY:function(t){return"movementY"in t?t.movementY:Mc}}),Ip=bn(Ru),Dy=_t({},Ru,{dataTransfer:0}),Uy=bn(Dy),Fy=_t({},Ea,{relatedTarget:0}),Tc=bn(Fy),Oy=_t({},ms,{animationName:0,elapsedTime:0,pseudoElement:0}),By=bn(Oy),ky=_t({},ms,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Hy=bn(ky),zy=_t({},ms,{data:0}),Dp=bn(zy),Gy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Vy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Wy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Xy(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Wy[t])?!!e[t]:!1}function ch(){return Xy}var $y=_t({},Ea,{key:function(t){if(t.key){var e=Gy[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Rl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Vy[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ch,charCode:function(t){return t.type==="keypress"?Rl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Rl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),jy=bn($y),Yy=_t({},Ru,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Up=bn(Yy),qy=_t({},Ea,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ch}),Zy=bn(qy),Ky=_t({},ms,{propertyName:0,elapsedTime:0,pseudoElement:0}),Qy=bn(Ky),Jy=_t({},Ru,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),eS=bn(Jy),tS=[9,13,27,32],fh=Fi&&"CompositionEvent"in window,zs=null;Fi&&"documentMode"in document&&(zs=document.documentMode);var nS=Fi&&"TextEvent"in window&&!zs,xv=Fi&&(!fh||zs&&8<zs&&11>=zs),Fp=String.fromCharCode(32),Op=!1;function yv(t,e){switch(t){case"keyup":return tS.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Sv(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var bo=!1;function iS(t,e){switch(t){case"compositionend":return Sv(e);case"keypress":return e.which!==32?null:(Op=!0,Fp);case"textInput":return t=e.data,t===Fp&&Op?null:t;default:return null}}function rS(t,e){if(bo)return t==="compositionend"||!fh&&yv(t,e)?(t=_v(),Cl=lh=tr=null,bo=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return xv&&e.locale!=="ko"?null:e.data;default:return null}}var oS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Bp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!oS[t.type]:e==="textarea"}function Ev(t,e,n,i){J0(i),e=Kl(e,"onChange"),0<e.length&&(n=new uh("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Gs=null,ra=null;function sS(t){Iv(t,0)}function bu(t){var e=No(t);if($0(e))return t}function aS(t,e){if(t==="change")return e}var Mv=!1;if(Fi){var wc;if(Fi){var Ac="oninput"in document;if(!Ac){var kp=document.createElement("div");kp.setAttribute("oninput","return;"),Ac=typeof kp.oninput=="function"}wc=Ac}else wc=!1;Mv=wc&&(!document.documentMode||9<document.documentMode)}function Hp(){Gs&&(Gs.detachEvent("onpropertychange",Tv),ra=Gs=null)}function Tv(t){if(t.propertyName==="value"&&bu(ra)){var e=[];Ev(e,ra,t,ih(t)),iv(sS,e)}}function lS(t,e,n){t==="focusin"?(Hp(),Gs=e,ra=n,Gs.attachEvent("onpropertychange",Tv)):t==="focusout"&&Hp()}function uS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return bu(ra)}function cS(t,e){if(t==="click")return bu(e)}function fS(t,e){if(t==="input"||t==="change")return bu(e)}function dS(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var si=typeof Object.is=="function"?Object.is:dS;function oa(t,e){if(si(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Cf.call(e,r)||!si(t[r],e[r]))return!1}return!0}function zp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Gp(t,e){var n=zp(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=zp(n)}}function wv(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?wv(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Av(){for(var t=window,e=Wl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Wl(t.document)}return e}function dh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function hS(t){var e=Av(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&wv(n.ownerDocument.documentElement,n)){if(i!==null&&dh(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,o=Math.min(i.start,r);i=i.end===void 0?o:Math.min(i.end,r),!t.extend&&o>i&&(r=i,i=o,o=r),r=Gp(n,o);var s=Gp(n,i);r&&s&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==s.node||t.focusOffset!==s.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),o>i?(t.addRange(e),t.extend(s.node,s.offset)):(e.setEnd(s.node,s.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var pS=Fi&&"documentMode"in document&&11>=document.documentMode,Po=null,$f=null,Vs=null,jf=!1;function Vp(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;jf||Po==null||Po!==Wl(i)||(i=Po,"selectionStart"in i&&dh(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Vs&&oa(Vs,i)||(Vs=i,i=Kl($f,"onSelect"),0<i.length&&(e=new uh("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Po)))}function za(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Lo={animationend:za("Animation","AnimationEnd"),animationiteration:za("Animation","AnimationIteration"),animationstart:za("Animation","AnimationStart"),transitionend:za("Transition","TransitionEnd")},Cc={},Cv={};Fi&&(Cv=document.createElement("div").style,"AnimationEvent"in window||(delete Lo.animationend.animation,delete Lo.animationiteration.animation,delete Lo.animationstart.animation),"TransitionEvent"in window||delete Lo.transitionend.transition);function Pu(t){if(Cc[t])return Cc[t];if(!Lo[t])return t;var e=Lo[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Cv)return Cc[t]=e[n];return t}var Rv=Pu("animationend"),bv=Pu("animationiteration"),Pv=Pu("animationstart"),Lv=Pu("transitionend"),Nv=new Map,Wp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function yr(t,e){Nv.set(t,e),ro(e,[t])}for(var Rc=0;Rc<Wp.length;Rc++){var bc=Wp[Rc],mS=bc.toLowerCase(),gS=bc[0].toUpperCase()+bc.slice(1);yr(mS,"on"+gS)}yr(Rv,"onAnimationEnd");yr(bv,"onAnimationIteration");yr(Pv,"onAnimationStart");yr("dblclick","onDoubleClick");yr("focusin","onFocus");yr("focusout","onBlur");yr(Lv,"onTransitionEnd");Ko("onMouseEnter",["mouseout","mouseover"]);Ko("onMouseLeave",["mouseout","mouseover"]);Ko("onPointerEnter",["pointerout","pointerover"]);Ko("onPointerLeave",["pointerout","pointerover"]);ro("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ro("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ro("onBeforeInput",["compositionend","keypress","textInput","paste"]);ro("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ro("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ro("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Os="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),vS=new Set("cancel close invalid load scroll toggle".split(" ").concat(Os));function Xp(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,my(i,e,void 0,t),t.currentTarget=null}function Iv(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var o=void 0;if(e)for(var s=i.length-1;0<=s;s--){var a=i[s],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==o&&r.isPropagationStopped())break e;Xp(r,a,u),o=l}else for(s=0;s<i.length;s++){if(a=i[s],l=a.instance,u=a.currentTarget,a=a.listener,l!==o&&r.isPropagationStopped())break e;Xp(r,a,u),o=l}}}if($l)throw t=Gf,$l=!1,Gf=null,t}function lt(t,e){var n=e[Qf];n===void 0&&(n=e[Qf]=new Set);var i=t+"__bubble";n.has(i)||(Dv(e,t,2,!1),n.add(i))}function Pc(t,e,n){var i=0;e&&(i|=4),Dv(n,t,i,e)}var Ga="_reactListening"+Math.random().toString(36).slice(2);function sa(t){if(!t[Ga]){t[Ga]=!0,z0.forEach(function(n){n!=="selectionchange"&&(vS.has(n)||Pc(n,!1,t),Pc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ga]||(e[Ga]=!0,Pc("selectionchange",!1,e))}}function Dv(t,e,n,i){switch(vv(e)){case 1:var r=Ly;break;case 4:r=Ny;break;default:r=ah}n=r.bind(null,e,n,t),r=void 0,!zf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Lc(t,e,n,i,r){var o=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var s=i.tag;if(s===3||s===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(s===4)for(s=i.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;s=s.return}for(;a!==null;){if(s=Or(a),s===null)return;if(l=s.tag,l===5||l===6){i=o=s;continue e}a=a.parentNode}}i=i.return}iv(function(){var u=o,c=ih(n),d=[];e:{var h=Nv.get(t);if(h!==void 0){var p=uh,_=t;switch(t){case"keypress":if(Rl(n)===0)break e;case"keydown":case"keyup":p=jy;break;case"focusin":_="focus",p=Tc;break;case"focusout":_="blur",p=Tc;break;case"beforeblur":case"afterblur":p=Tc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Ip;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=Uy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=Zy;break;case Rv:case bv:case Pv:p=By;break;case Lv:p=Qy;break;case"scroll":p=Iy;break;case"wheel":p=eS;break;case"copy":case"cut":case"paste":p=Hy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Up}var x=(e&4)!==0,g=!x&&t==="scroll",f=x?h!==null?h+"Capture":null:h;x=[];for(var v=u,m;v!==null;){m=v;var y=m.stateNode;if(m.tag===5&&y!==null&&(m=y,f!==null&&(y=ea(v,f),y!=null&&x.push(aa(v,y,m)))),g)break;v=v.return}0<x.length&&(h=new p(h,_,null,n,c),d.push({event:h,listeners:x}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",h&&n!==kf&&(_=n.relatedTarget||n.fromElement)&&(Or(_)||_[Oi]))break e;if((p||h)&&(h=c.window===c?c:(h=c.ownerDocument)?h.defaultView||h.parentWindow:window,p?(_=n.relatedTarget||n.toElement,p=u,_=_?Or(_):null,_!==null&&(g=oo(_),_!==g||_.tag!==5&&_.tag!==6)&&(_=null)):(p=null,_=u),p!==_)){if(x=Ip,y="onMouseLeave",f="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(x=Up,y="onPointerLeave",f="onPointerEnter",v="pointer"),g=p==null?h:No(p),m=_==null?h:No(_),h=new x(y,v+"leave",p,n,c),h.target=g,h.relatedTarget=m,y=null,Or(c)===u&&(x=new x(f,v+"enter",_,n,c),x.target=m,x.relatedTarget=g,y=x),g=y,p&&_)t:{for(x=p,f=_,v=0,m=x;m;m=ao(m))v++;for(m=0,y=f;y;y=ao(y))m++;for(;0<v-m;)x=ao(x),v--;for(;0<m-v;)f=ao(f),m--;for(;v--;){if(x===f||f!==null&&x===f.alternate)break t;x=ao(x),f=ao(f)}x=null}else x=null;p!==null&&$p(d,h,p,x,!1),_!==null&&g!==null&&$p(d,g,_,x,!0)}}e:{if(h=u?No(u):window,p=h.nodeName&&h.nodeName.toLowerCase(),p==="select"||p==="input"&&h.type==="file")var R=aS;else if(Bp(h))if(Mv)R=fS;else{R=uS;var A=lS}else(p=h.nodeName)&&p.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(R=cS);if(R&&(R=R(t,u))){Ev(d,R,n,c);break e}A&&A(t,h,u),t==="focusout"&&(A=h._wrapperState)&&A.controlled&&h.type==="number"&&Df(h,"number",h.value)}switch(A=u?No(u):window,t){case"focusin":(Bp(A)||A.contentEditable==="true")&&(Po=A,$f=u,Vs=null);break;case"focusout":Vs=$f=Po=null;break;case"mousedown":jf=!0;break;case"contextmenu":case"mouseup":case"dragend":jf=!1,Vp(d,n,c);break;case"selectionchange":if(pS)break;case"keydown":case"keyup":Vp(d,n,c)}var M;if(fh)e:{switch(t){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else bo?yv(t,n)&&(N="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(N="onCompositionStart");N&&(xv&&n.locale!=="ko"&&(bo||N!=="onCompositionStart"?N==="onCompositionEnd"&&bo&&(M=_v()):(tr=c,lh="value"in tr?tr.value:tr.textContent,bo=!0)),A=Kl(u,N),0<A.length&&(N=new Dp(N,t,null,n,c),d.push({event:N,listeners:A}),M?N.data=M:(M=Sv(n),M!==null&&(N.data=M)))),(M=nS?iS(t,n):rS(t,n))&&(u=Kl(u,"onBeforeInput"),0<u.length&&(c=new Dp("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=M))}Iv(d,e)})}function aa(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Kl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,o=r.stateNode;r.tag===5&&o!==null&&(r=o,o=ea(t,n),o!=null&&i.unshift(aa(t,o,r)),o=ea(t,e),o!=null&&i.push(aa(t,o,r))),t=t.return}return i}function ao(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function $p(t,e,n,i,r){for(var o=e._reactName,s=[];n!==null&&n!==i;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=ea(n,o),l!=null&&s.unshift(aa(n,l,a))):r||(l=ea(n,o),l!=null&&s.push(aa(n,l,a)))),n=n.return}s.length!==0&&t.push({event:e,listeners:s})}var _S=/\r\n?/g,xS=/\u0000|\uFFFD/g;function jp(t){return(typeof t=="string"?t:""+t).replace(_S,`
`).replace(xS,"")}function Va(t,e,n){if(e=jp(e),jp(t)!==e&&n)throw Error(J(425))}function Ql(){}var Yf=null,qf=null;function Zf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Kf=typeof setTimeout=="function"?setTimeout:void 0,yS=typeof clearTimeout=="function"?clearTimeout:void 0,Yp=typeof Promise=="function"?Promise:void 0,SS=typeof queueMicrotask=="function"?queueMicrotask:typeof Yp<"u"?function(t){return Yp.resolve(null).then(t).catch(ES)}:Kf;function ES(t){setTimeout(function(){throw t})}function Nc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),ia(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);ia(e)}function lr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function qp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var gs=Math.random().toString(36).slice(2),mi="__reactFiber$"+gs,la="__reactProps$"+gs,Oi="__reactContainer$"+gs,Qf="__reactEvents$"+gs,MS="__reactListeners$"+gs,TS="__reactHandles$"+gs;function Or(t){var e=t[mi];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Oi]||n[mi]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=qp(t);t!==null;){if(n=t[mi])return n;t=qp(t)}return e}t=n,n=t.parentNode}return null}function Ma(t){return t=t[mi]||t[Oi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function No(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(J(33))}function Lu(t){return t[la]||null}var Jf=[],Io=-1;function Sr(t){return{current:t}}function dt(t){0>Io||(t.current=Jf[Io],Jf[Io]=null,Io--)}function at(t,e){Io++,Jf[Io]=t.current,t.current=e}var _r={},Kt=Sr(_r),pn=Sr(!1),Yr=_r;function Qo(t,e){var n=t.type.contextTypes;if(!n)return _r;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},o;for(o in n)r[o]=e[o];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function mn(t){return t=t.childContextTypes,t!=null}function Jl(){dt(pn),dt(Kt)}function Zp(t,e,n){if(Kt.current!==_r)throw Error(J(168));at(Kt,e),at(pn,n)}function Uv(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(J(108,ly(t)||"Unknown",r));return _t({},n,i)}function eu(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||_r,Yr=Kt.current,at(Kt,t),at(pn,pn.current),!0}function Kp(t,e,n){var i=t.stateNode;if(!i)throw Error(J(169));n?(t=Uv(t,e,Yr),i.__reactInternalMemoizedMergedChildContext=t,dt(pn),dt(Kt),at(Kt,t)):dt(pn),at(pn,n)}var bi=null,Nu=!1,Ic=!1;function Fv(t){bi===null?bi=[t]:bi.push(t)}function wS(t){Nu=!0,Fv(t)}function Er(){if(!Ic&&bi!==null){Ic=!0;var t=0,e=Je;try{var n=bi;for(Je=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}bi=null,Nu=!1}catch(r){throw bi!==null&&(bi=bi.slice(t+1)),av(rh,Er),r}finally{Je=e,Ic=!1}}return null}var Do=[],Uo=0,tu=null,nu=0,In=[],Dn=0,qr=null,Ni=1,Ii="";function Lr(t,e){Do[Uo++]=nu,Do[Uo++]=tu,tu=t,nu=e}function Ov(t,e,n){In[Dn++]=Ni,In[Dn++]=Ii,In[Dn++]=qr,qr=t;var i=Ni;t=Ii;var r=32-ni(i)-1;i&=~(1<<r),n+=1;var o=32-ni(e)+r;if(30<o){var s=r-r%5;o=(i&(1<<s)-1).toString(32),i>>=s,r-=s,Ni=1<<32-ni(e)+r|n<<r|i,Ii=o+t}else Ni=1<<o|n<<r|i,Ii=t}function hh(t){t.return!==null&&(Lr(t,1),Ov(t,1,0))}function ph(t){for(;t===tu;)tu=Do[--Uo],Do[Uo]=null,nu=Do[--Uo],Do[Uo]=null;for(;t===qr;)qr=In[--Dn],In[Dn]=null,Ii=In[--Dn],In[Dn]=null,Ni=In[--Dn],In[Dn]=null}var Tn=null,En=null,ht=!1,Kn=null;function Bv(t,e){var n=Bn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Qp(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Tn=t,En=lr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Tn=t,En=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=qr!==null?{id:Ni,overflow:Ii}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Bn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Tn=t,En=null,!0):!1;default:return!1}}function ed(t){return(t.mode&1)!==0&&(t.flags&128)===0}function td(t){if(ht){var e=En;if(e){var n=e;if(!Qp(t,e)){if(ed(t))throw Error(J(418));e=lr(n.nextSibling);var i=Tn;e&&Qp(t,e)?Bv(i,n):(t.flags=t.flags&-4097|2,ht=!1,Tn=t)}}else{if(ed(t))throw Error(J(418));t.flags=t.flags&-4097|2,ht=!1,Tn=t}}}function Jp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Tn=t}function Wa(t){if(t!==Tn)return!1;if(!ht)return Jp(t),ht=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Zf(t.type,t.memoizedProps)),e&&(e=En)){if(ed(t))throw kv(),Error(J(418));for(;e;)Bv(t,e),e=lr(e.nextSibling)}if(Jp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(J(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){En=lr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}En=null}}else En=Tn?lr(t.stateNode.nextSibling):null;return!0}function kv(){for(var t=En;t;)t=lr(t.nextSibling)}function Jo(){En=Tn=null,ht=!1}function mh(t){Kn===null?Kn=[t]:Kn.push(t)}var AS=zi.ReactCurrentBatchConfig;function qn(t,e){if(t&&t.defaultProps){e=_t({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var iu=Sr(null),ru=null,Fo=null,gh=null;function vh(){gh=Fo=ru=null}function _h(t){var e=iu.current;dt(iu),t._currentValue=e}function nd(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function jo(t,e){ru=t,gh=Fo=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(hn=!0),t.firstContext=null)}function Hn(t){var e=t._currentValue;if(gh!==t)if(t={context:t,memoizedValue:e,next:null},Fo===null){if(ru===null)throw Error(J(308));Fo=t,ru.dependencies={lanes:0,firstContext:t}}else Fo=Fo.next=t;return e}var Br=null;function xh(t){Br===null?Br=[t]:Br.push(t)}function Hv(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,xh(e)):(n.next=r.next,r.next=n),e.interleaved=n,Bi(t,i)}function Bi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Ki=!1;function yh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function zv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ui(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function ur(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,qe&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Bi(t,n)}return r=i.interleaved,r===null?(e.next=e,xh(i)):(e.next=r.next,r.next=e),i.interleaved=e,Bi(t,n)}function bl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,oh(t,n)}}function em(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?r=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?r=o=e:o=o.next=e}else r=o=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:o,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function ou(t,e,n,i){var r=t.updateQueue;Ki=!1;var o=r.firstBaseUpdate,s=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,s===null?o=u:s.next=u,s=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==s&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(o!==null){var d=r.baseState;s=0,c=u=l=null,a=o;do{var h=a.lane,p=a.eventTime;if((i&h)===h){c!==null&&(c=c.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var _=t,x=a;switch(h=e,p=n,x.tag){case 1:if(_=x.payload,typeof _=="function"){d=_.call(p,d,h);break e}d=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=x.payload,h=typeof _=="function"?_.call(p,d,h):_,h==null)break e;d=_t({},d,h);break e;case 2:Ki=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=r.effects,h===null?r.effects=[a]:h.push(a))}else p={eventTime:p,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=p,l=d):c=c.next=p,s|=h;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;h=a,a=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(1);if(c===null&&(l=d),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=c,e=r.shared.interleaved,e!==null){r=e;do s|=r.lane,r=r.next;while(r!==e)}else o===null&&(r.shared.lanes=0);Kr|=s,t.lanes=s,t.memoizedState=d}}function tm(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(J(191,r));r.call(i)}}}var Gv=new H0.Component().refs;function id(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:_t({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Iu={isMounted:function(t){return(t=t._reactInternals)?oo(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=un(),r=fr(t),o=Ui(i,r);o.payload=e,n!=null&&(o.callback=n),e=ur(t,o,r),e!==null&&(ii(e,t,r,i),bl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=un(),r=fr(t),o=Ui(i,r);o.tag=1,o.payload=e,n!=null&&(o.callback=n),e=ur(t,o,r),e!==null&&(ii(e,t,r,i),bl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=un(),i=fr(t),r=Ui(n,i);r.tag=2,e!=null&&(r.callback=e),e=ur(t,r,i),e!==null&&(ii(e,t,i,n),bl(e,t,i))}};function nm(t,e,n,i,r,o,s){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,o,s):e.prototype&&e.prototype.isPureReactComponent?!oa(n,i)||!oa(r,o):!0}function Vv(t,e,n){var i=!1,r=_r,o=e.contextType;return typeof o=="object"&&o!==null?o=Hn(o):(r=mn(e)?Yr:Kt.current,i=e.contextTypes,o=(i=i!=null)?Qo(t,r):_r),e=new e(n,o),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Iu,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=o),e}function im(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Iu.enqueueReplaceState(e,e.state,null)}function rd(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs=Gv,yh(t);var o=e.contextType;typeof o=="object"&&o!==null?r.context=Hn(o):(o=mn(e)?Yr:Kt.current,r.context=Qo(t,o)),r.state=t.memoizedState,o=e.getDerivedStateFromProps,typeof o=="function"&&(id(t,e,o,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Iu.enqueueReplaceState(r,r.state,null),ou(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Cs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(J(309));var i=n.stateNode}if(!i)throw Error(J(147,t));var r=i,o=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===o?e.ref:(e=function(s){var a=r.refs;a===Gv&&(a=r.refs={}),s===null?delete a[o]:a[o]=s},e._stringRef=o,e)}if(typeof t!="string")throw Error(J(284));if(!n._owner)throw Error(J(290,t))}return t}function Xa(t,e){throw t=Object.prototype.toString.call(e),Error(J(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function rm(t){var e=t._init;return e(t._payload)}function Wv(t){function e(f,v){if(t){var m=f.deletions;m===null?(f.deletions=[v],f.flags|=16):m.push(v)}}function n(f,v){if(!t)return null;for(;v!==null;)e(f,v),v=v.sibling;return null}function i(f,v){for(f=new Map;v!==null;)v.key!==null?f.set(v.key,v):f.set(v.index,v),v=v.sibling;return f}function r(f,v){return f=dr(f,v),f.index=0,f.sibling=null,f}function o(f,v,m){return f.index=m,t?(m=f.alternate,m!==null?(m=m.index,m<v?(f.flags|=2,v):m):(f.flags|=2,v)):(f.flags|=1048576,v)}function s(f){return t&&f.alternate===null&&(f.flags|=2),f}function a(f,v,m,y){return v===null||v.tag!==6?(v=Hc(m,f.mode,y),v.return=f,v):(v=r(v,m),v.return=f,v)}function l(f,v,m,y){var R=m.type;return R===Ro?c(f,v,m.props.children,y,m.key):v!==null&&(v.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===Zi&&rm(R)===v.type)?(y=r(v,m.props),y.ref=Cs(f,v,m),y.return=f,y):(y=Ul(m.type,m.key,m.props,null,f.mode,y),y.ref=Cs(f,v,m),y.return=f,y)}function u(f,v,m,y){return v===null||v.tag!==4||v.stateNode.containerInfo!==m.containerInfo||v.stateNode.implementation!==m.implementation?(v=zc(m,f.mode,y),v.return=f,v):(v=r(v,m.children||[]),v.return=f,v)}function c(f,v,m,y,R){return v===null||v.tag!==7?(v=Gr(m,f.mode,y,R),v.return=f,v):(v=r(v,m),v.return=f,v)}function d(f,v,m){if(typeof v=="string"&&v!==""||typeof v=="number")return v=Hc(""+v,f.mode,m),v.return=f,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Da:return m=Ul(v.type,v.key,v.props,null,f.mode,m),m.ref=Cs(f,null,v),m.return=f,m;case Co:return v=zc(v,f.mode,m),v.return=f,v;case Zi:var y=v._init;return d(f,y(v._payload),m)}if(Us(v)||Es(v))return v=Gr(v,f.mode,m,null),v.return=f,v;Xa(f,v)}return null}function h(f,v,m,y){var R=v!==null?v.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return R!==null?null:a(f,v,""+m,y);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Da:return m.key===R?l(f,v,m,y):null;case Co:return m.key===R?u(f,v,m,y):null;case Zi:return R=m._init,h(f,v,R(m._payload),y)}if(Us(m)||Es(m))return R!==null?null:c(f,v,m,y,null);Xa(f,m)}return null}function p(f,v,m,y,R){if(typeof y=="string"&&y!==""||typeof y=="number")return f=f.get(m)||null,a(v,f,""+y,R);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Da:return f=f.get(y.key===null?m:y.key)||null,l(v,f,y,R);case Co:return f=f.get(y.key===null?m:y.key)||null,u(v,f,y,R);case Zi:var A=y._init;return p(f,v,m,A(y._payload),R)}if(Us(y)||Es(y))return f=f.get(m)||null,c(v,f,y,R,null);Xa(v,y)}return null}function _(f,v,m,y){for(var R=null,A=null,M=v,N=v=0,E=null;M!==null&&N<m.length;N++){M.index>N?(E=M,M=null):E=M.sibling;var w=h(f,M,m[N],y);if(w===null){M===null&&(M=E);break}t&&M&&w.alternate===null&&e(f,M),v=o(w,v,N),A===null?R=w:A.sibling=w,A=w,M=E}if(N===m.length)return n(f,M),ht&&Lr(f,N),R;if(M===null){for(;N<m.length;N++)M=d(f,m[N],y),M!==null&&(v=o(M,v,N),A===null?R=M:A.sibling=M,A=M);return ht&&Lr(f,N),R}for(M=i(f,M);N<m.length;N++)E=p(M,f,N,m[N],y),E!==null&&(t&&E.alternate!==null&&M.delete(E.key===null?N:E.key),v=o(E,v,N),A===null?R=E:A.sibling=E,A=E);return t&&M.forEach(function(F){return e(f,F)}),ht&&Lr(f,N),R}function x(f,v,m,y){var R=Es(m);if(typeof R!="function")throw Error(J(150));if(m=R.call(m),m==null)throw Error(J(151));for(var A=R=null,M=v,N=v=0,E=null,w=m.next();M!==null&&!w.done;N++,w=m.next()){M.index>N?(E=M,M=null):E=M.sibling;var F=h(f,M,w.value,y);if(F===null){M===null&&(M=E);break}t&&M&&F.alternate===null&&e(f,M),v=o(F,v,N),A===null?R=F:A.sibling=F,A=F,M=E}if(w.done)return n(f,M),ht&&Lr(f,N),R;if(M===null){for(;!w.done;N++,w=m.next())w=d(f,w.value,y),w!==null&&(v=o(w,v,N),A===null?R=w:A.sibling=w,A=w);return ht&&Lr(f,N),R}for(M=i(f,M);!w.done;N++,w=m.next())w=p(M,f,N,w.value,y),w!==null&&(t&&w.alternate!==null&&M.delete(w.key===null?N:w.key),v=o(w,v,N),A===null?R=w:A.sibling=w,A=w);return t&&M.forEach(function($){return e(f,$)}),ht&&Lr(f,N),R}function g(f,v,m,y){if(typeof m=="object"&&m!==null&&m.type===Ro&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case Da:e:{for(var R=m.key,A=v;A!==null;){if(A.key===R){if(R=m.type,R===Ro){if(A.tag===7){n(f,A.sibling),v=r(A,m.props.children),v.return=f,f=v;break e}}else if(A.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===Zi&&rm(R)===A.type){n(f,A.sibling),v=r(A,m.props),v.ref=Cs(f,A,m),v.return=f,f=v;break e}n(f,A);break}else e(f,A);A=A.sibling}m.type===Ro?(v=Gr(m.props.children,f.mode,y,m.key),v.return=f,f=v):(y=Ul(m.type,m.key,m.props,null,f.mode,y),y.ref=Cs(f,v,m),y.return=f,f=y)}return s(f);case Co:e:{for(A=m.key;v!==null;){if(v.key===A)if(v.tag===4&&v.stateNode.containerInfo===m.containerInfo&&v.stateNode.implementation===m.implementation){n(f,v.sibling),v=r(v,m.children||[]),v.return=f,f=v;break e}else{n(f,v);break}else e(f,v);v=v.sibling}v=zc(m,f.mode,y),v.return=f,f=v}return s(f);case Zi:return A=m._init,g(f,v,A(m._payload),y)}if(Us(m))return _(f,v,m,y);if(Es(m))return x(f,v,m,y);Xa(f,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,v!==null&&v.tag===6?(n(f,v.sibling),v=r(v,m),v.return=f,f=v):(n(f,v),v=Hc(m,f.mode,y),v.return=f,f=v),s(f)):n(f,v)}return g}var es=Wv(!0),Xv=Wv(!1),Ta={},vi=Sr(Ta),ua=Sr(Ta),ca=Sr(Ta);function kr(t){if(t===Ta)throw Error(J(174));return t}function Sh(t,e){switch(at(ca,e),at(ua,t),at(vi,Ta),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Ff(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Ff(e,t)}dt(vi),at(vi,e)}function ts(){dt(vi),dt(ua),dt(ca)}function $v(t){kr(ca.current);var e=kr(vi.current),n=Ff(e,t.type);e!==n&&(at(ua,t),at(vi,n))}function Eh(t){ua.current===t&&(dt(vi),dt(ua))}var gt=Sr(0);function su(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Dc=[];function Mh(){for(var t=0;t<Dc.length;t++)Dc[t]._workInProgressVersionPrimary=null;Dc.length=0}var Pl=zi.ReactCurrentDispatcher,Uc=zi.ReactCurrentBatchConfig,Zr=0,vt=null,Ct=null,Dt=null,au=!1,Ws=!1,fa=0,CS=0;function Xt(){throw Error(J(321))}function Th(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!si(t[n],e[n]))return!1;return!0}function wh(t,e,n,i,r,o){if(Zr=o,vt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Pl.current=t===null||t.memoizedState===null?LS:NS,t=n(i,r),Ws){o=0;do{if(Ws=!1,fa=0,25<=o)throw Error(J(301));o+=1,Dt=Ct=null,e.updateQueue=null,Pl.current=IS,t=n(i,r)}while(Ws)}if(Pl.current=lu,e=Ct!==null&&Ct.next!==null,Zr=0,Dt=Ct=vt=null,au=!1,e)throw Error(J(300));return t}function Ah(){var t=fa!==0;return fa=0,t}function ui(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Dt===null?vt.memoizedState=Dt=t:Dt=Dt.next=t,Dt}function zn(){if(Ct===null){var t=vt.alternate;t=t!==null?t.memoizedState:null}else t=Ct.next;var e=Dt===null?vt.memoizedState:Dt.next;if(e!==null)Dt=e,Ct=t;else{if(t===null)throw Error(J(310));Ct=t,t={memoizedState:Ct.memoizedState,baseState:Ct.baseState,baseQueue:Ct.baseQueue,queue:Ct.queue,next:null},Dt===null?vt.memoizedState=Dt=t:Dt=Dt.next=t}return Dt}function da(t,e){return typeof e=="function"?e(t):e}function Fc(t){var e=zn(),n=e.queue;if(n===null)throw Error(J(311));n.lastRenderedReducer=t;var i=Ct,r=i.baseQueue,o=n.pending;if(o!==null){if(r!==null){var s=r.next;r.next=o.next,o.next=s}i.baseQueue=r=o,n.pending=null}if(r!==null){o=r.next,i=i.baseState;var a=s=null,l=null,u=o;do{var c=u.lane;if((Zr&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:t(i,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,s=i):l=l.next=d,vt.lanes|=c,Kr|=c}u=u.next}while(u!==null&&u!==o);l===null?s=i:l.next=a,si(i,e.memoizedState)||(hn=!0),e.memoizedState=i,e.baseState=s,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do o=r.lane,vt.lanes|=o,Kr|=o,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Oc(t){var e=zn(),n=e.queue;if(n===null)throw Error(J(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,o=e.memoizedState;if(r!==null){n.pending=null;var s=r=r.next;do o=t(o,s.action),s=s.next;while(s!==r);si(o,e.memoizedState)||(hn=!0),e.memoizedState=o,e.baseQueue===null&&(e.baseState=o),n.lastRenderedState=o}return[o,i]}function jv(){}function Yv(t,e){var n=vt,i=zn(),r=e(),o=!si(i.memoizedState,r);if(o&&(i.memoizedState=r,hn=!0),i=i.queue,Ch(Kv.bind(null,n,i,t),[t]),i.getSnapshot!==e||o||Dt!==null&&Dt.memoizedState.tag&1){if(n.flags|=2048,ha(9,Zv.bind(null,n,i,r,e),void 0,null),Ft===null)throw Error(J(349));Zr&30||qv(n,e,r)}return r}function qv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=vt.updateQueue,e===null?(e={lastEffect:null,stores:null},vt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Zv(t,e,n,i){e.value=n,e.getSnapshot=i,Qv(e)&&Jv(t)}function Kv(t,e,n){return n(function(){Qv(e)&&Jv(t)})}function Qv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!si(t,n)}catch{return!0}}function Jv(t){var e=Bi(t,1);e!==null&&ii(e,t,1,-1)}function om(t){var e=ui();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:da,lastRenderedState:t},e.queue=t,t=t.dispatch=PS.bind(null,vt,t),[e.memoizedState,t]}function ha(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=vt.updateQueue,e===null?(e={lastEffect:null,stores:null},vt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function e_(){return zn().memoizedState}function Ll(t,e,n,i){var r=ui();vt.flags|=t,r.memoizedState=ha(1|e,n,void 0,i===void 0?null:i)}function Du(t,e,n,i){var r=zn();i=i===void 0?null:i;var o=void 0;if(Ct!==null){var s=Ct.memoizedState;if(o=s.destroy,i!==null&&Th(i,s.deps)){r.memoizedState=ha(e,n,o,i);return}}vt.flags|=t,r.memoizedState=ha(1|e,n,o,i)}function sm(t,e){return Ll(8390656,8,t,e)}function Ch(t,e){return Du(2048,8,t,e)}function t_(t,e){return Du(4,2,t,e)}function n_(t,e){return Du(4,4,t,e)}function i_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function r_(t,e,n){return n=n!=null?n.concat([t]):null,Du(4,4,i_.bind(null,e,t),n)}function Rh(){}function o_(t,e){var n=zn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Th(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function s_(t,e){var n=zn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Th(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function a_(t,e,n){return Zr&21?(si(n,e)||(n=cv(),vt.lanes|=n,Kr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,hn=!0),t.memoizedState=n)}function RS(t,e){var n=Je;Je=n!==0&&4>n?n:4,t(!0);var i=Uc.transition;Uc.transition={};try{t(!1),e()}finally{Je=n,Uc.transition=i}}function l_(){return zn().memoizedState}function bS(t,e,n){var i=fr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},u_(t))c_(e,n);else if(n=Hv(t,e,n,i),n!==null){var r=un();ii(n,t,i,r),f_(n,e,i)}}function PS(t,e,n){var i=fr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(u_(t))c_(e,r);else{var o=t.alternate;if(t.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var s=e.lastRenderedState,a=o(s,n);if(r.hasEagerState=!0,r.eagerState=a,si(a,s)){var l=e.interleaved;l===null?(r.next=r,xh(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=Hv(t,e,r,i),n!==null&&(r=un(),ii(n,t,i,r),f_(n,e,i))}}function u_(t){var e=t.alternate;return t===vt||e!==null&&e===vt}function c_(t,e){Ws=au=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function f_(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,oh(t,n)}}var lu={readContext:Hn,useCallback:Xt,useContext:Xt,useEffect:Xt,useImperativeHandle:Xt,useInsertionEffect:Xt,useLayoutEffect:Xt,useMemo:Xt,useReducer:Xt,useRef:Xt,useState:Xt,useDebugValue:Xt,useDeferredValue:Xt,useTransition:Xt,useMutableSource:Xt,useSyncExternalStore:Xt,useId:Xt,unstable_isNewReconciler:!1},LS={readContext:Hn,useCallback:function(t,e){return ui().memoizedState=[t,e===void 0?null:e],t},useContext:Hn,useEffect:sm,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Ll(4194308,4,i_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ll(4194308,4,t,e)},useInsertionEffect:function(t,e){return Ll(4,2,t,e)},useMemo:function(t,e){var n=ui();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=ui();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=bS.bind(null,vt,t),[i.memoizedState,t]},useRef:function(t){var e=ui();return t={current:t},e.memoizedState=t},useState:om,useDebugValue:Rh,useDeferredValue:function(t){return ui().memoizedState=t},useTransition:function(){var t=om(!1),e=t[0];return t=RS.bind(null,t[1]),ui().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=vt,r=ui();if(ht){if(n===void 0)throw Error(J(407));n=n()}else{if(n=e(),Ft===null)throw Error(J(349));Zr&30||qv(i,e,n)}r.memoizedState=n;var o={value:n,getSnapshot:e};return r.queue=o,sm(Kv.bind(null,i,o,t),[t]),i.flags|=2048,ha(9,Zv.bind(null,i,o,n,e),void 0,null),n},useId:function(){var t=ui(),e=Ft.identifierPrefix;if(ht){var n=Ii,i=Ni;n=(i&~(1<<32-ni(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=fa++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=CS++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},NS={readContext:Hn,useCallback:o_,useContext:Hn,useEffect:Ch,useImperativeHandle:r_,useInsertionEffect:t_,useLayoutEffect:n_,useMemo:s_,useReducer:Fc,useRef:e_,useState:function(){return Fc(da)},useDebugValue:Rh,useDeferredValue:function(t){var e=zn();return a_(e,Ct.memoizedState,t)},useTransition:function(){var t=Fc(da)[0],e=zn().memoizedState;return[t,e]},useMutableSource:jv,useSyncExternalStore:Yv,useId:l_,unstable_isNewReconciler:!1},IS={readContext:Hn,useCallback:o_,useContext:Hn,useEffect:Ch,useImperativeHandle:r_,useInsertionEffect:t_,useLayoutEffect:n_,useMemo:s_,useReducer:Oc,useRef:e_,useState:function(){return Oc(da)},useDebugValue:Rh,useDeferredValue:function(t){var e=zn();return Ct===null?e.memoizedState=t:a_(e,Ct.memoizedState,t)},useTransition:function(){var t=Oc(da)[0],e=zn().memoizedState;return[t,e]},useMutableSource:jv,useSyncExternalStore:Yv,useId:l_,unstable_isNewReconciler:!1};function ns(t,e){try{var n="",i=e;do n+=ay(i),i=i.return;while(i);var r=n}catch(o){r=`
Error generating stack: `+o.message+`
`+o.stack}return{value:t,source:e,stack:r,digest:null}}function Bc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function od(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var DS=typeof WeakMap=="function"?WeakMap:Map;function d_(t,e,n){n=Ui(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){cu||(cu=!0,md=i),od(t,e)},n}function h_(t,e,n){n=Ui(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){od(t,e)}}var o=t.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){od(t,e),typeof i!="function"&&(cr===null?cr=new Set([this]):cr.add(this));var s=e.stack;this.componentDidCatch(e.value,{componentStack:s!==null?s:""})}),n}function am(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new DS;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=YS.bind(null,t,e,n),e.then(t,t))}function lm(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function um(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Ui(-1,1),e.tag=2,ur(n,e,1))),n.lanes|=1),t)}var US=zi.ReactCurrentOwner,hn=!1;function sn(t,e,n,i){e.child=t===null?Xv(e,null,n,i):es(e,t.child,n,i)}function cm(t,e,n,i,r){n=n.render;var o=e.ref;return jo(e,r),i=wh(t,e,n,i,o,r),n=Ah(),t!==null&&!hn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,ki(t,e,r)):(ht&&n&&hh(e),e.flags|=1,sn(t,e,i,r),e.child)}function fm(t,e,n,i,r){if(t===null){var o=n.type;return typeof o=="function"&&!Fh(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=o,p_(t,e,o,i,r)):(t=Ul(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(o=t.child,!(t.lanes&r)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:oa,n(s,i)&&t.ref===e.ref)return ki(t,e,r)}return e.flags|=1,t=dr(o,i),t.ref=e.ref,t.return=e,e.child=t}function p_(t,e,n,i,r){if(t!==null){var o=t.memoizedProps;if(oa(o,i)&&t.ref===e.ref)if(hn=!1,e.pendingProps=i=o,(t.lanes&r)!==0)t.flags&131072&&(hn=!0);else return e.lanes=t.lanes,ki(t,e,r)}return sd(t,e,n,i,r)}function m_(t,e,n){var i=e.pendingProps,r=i.children,o=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},at(Bo,Sn),Sn|=n;else{if(!(n&1073741824))return t=o!==null?o.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,at(Bo,Sn),Sn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=o!==null?o.baseLanes:n,at(Bo,Sn),Sn|=i}else o!==null?(i=o.baseLanes|n,e.memoizedState=null):i=n,at(Bo,Sn),Sn|=i;return sn(t,e,r,n),e.child}function g_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function sd(t,e,n,i,r){var o=mn(n)?Yr:Kt.current;return o=Qo(e,o),jo(e,r),n=wh(t,e,n,i,o,r),i=Ah(),t!==null&&!hn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,ki(t,e,r)):(ht&&i&&hh(e),e.flags|=1,sn(t,e,n,r),e.child)}function dm(t,e,n,i,r){if(mn(n)){var o=!0;eu(e)}else o=!1;if(jo(e,r),e.stateNode===null)Nl(t,e),Vv(e,n,i),rd(e,n,i,r),i=!0;else if(t===null){var s=e.stateNode,a=e.memoizedProps;s.props=a;var l=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=Hn(u):(u=mn(n)?Yr:Kt.current,u=Qo(e,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof s.getSnapshotBeforeUpdate=="function";d||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==i||l!==u)&&im(e,s,i,u),Ki=!1;var h=e.memoizedState;s.state=h,ou(e,i,s,r),l=e.memoizedState,a!==i||h!==l||pn.current||Ki?(typeof c=="function"&&(id(e,n,c,i),l=e.memoizedState),(a=Ki||nm(e,n,a,i,h,l,u))?(d||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(e.flags|=4194308)):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),s.props=i,s.state=l,s.context=u,i=a):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{s=e.stateNode,zv(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:qn(e.type,a),s.props=u,d=e.pendingProps,h=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=Hn(l):(l=mn(n)?Yr:Kt.current,l=Qo(e,l));var p=n.getDerivedStateFromProps;(c=typeof p=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==d||h!==l)&&im(e,s,i,l),Ki=!1,h=e.memoizedState,s.state=h,ou(e,i,s,r);var _=e.memoizedState;a!==d||h!==_||pn.current||Ki?(typeof p=="function"&&(id(e,n,p,i),_=e.memoizedState),(u=Ki||nm(e,n,u,i,h,_,l)||!1)?(c||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(i,_,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(i,_,l)),typeof s.componentDidUpdate=="function"&&(e.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),s.props=i,s.state=_,s.context=l,i=u):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return ad(t,e,n,i,o,r)}function ad(t,e,n,i,r,o){g_(t,e);var s=(e.flags&128)!==0;if(!i&&!s)return r&&Kp(e,n,!1),ki(t,e,o);i=e.stateNode,US.current=e;var a=s&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&s?(e.child=es(e,t.child,null,o),e.child=es(e,null,a,o)):sn(t,e,a,o),e.memoizedState=i.state,r&&Kp(e,n,!0),e.child}function v_(t){var e=t.stateNode;e.pendingContext?Zp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Zp(t,e.context,!1),Sh(t,e.containerInfo)}function hm(t,e,n,i,r){return Jo(),mh(r),e.flags|=256,sn(t,e,n,i),e.child}var ld={dehydrated:null,treeContext:null,retryLane:0};function ud(t){return{baseLanes:t,cachePool:null,transitions:null}}function __(t,e,n){var i=e.pendingProps,r=gt.current,o=!1,s=(e.flags&128)!==0,a;if((a=s)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(o=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),at(gt,r&1),t===null)return td(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(s=i.children,t=i.fallback,o?(i=e.mode,o=e.child,s={mode:"hidden",children:s},!(i&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=Ou(s,i,0,null),t=Gr(t,i,n,null),o.return=e,t.return=e,o.sibling=t,e.child=o,e.child.memoizedState=ud(n),e.memoizedState=ld,t):bh(e,s));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return FS(t,e,s,i,a,r,n);if(o){o=i.fallback,s=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(s&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=dr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?o=dr(a,o):(o=Gr(o,s,n,null),o.flags|=2),o.return=e,i.return=e,i.sibling=o,e.child=i,i=o,o=e.child,s=t.child.memoizedState,s=s===null?ud(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=t.childLanes&~n,e.memoizedState=ld,i}return o=t.child,t=o.sibling,i=dr(o,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function bh(t,e){return e=Ou({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function $a(t,e,n,i){return i!==null&&mh(i),es(e,t.child,null,n),t=bh(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function FS(t,e,n,i,r,o,s){if(n)return e.flags&256?(e.flags&=-257,i=Bc(Error(J(422))),$a(t,e,s,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(o=i.fallback,r=e.mode,i=Ou({mode:"visible",children:i.children},r,0,null),o=Gr(o,r,s,null),o.flags|=2,i.return=e,o.return=e,i.sibling=o,e.child=i,e.mode&1&&es(e,t.child,null,s),e.child.memoizedState=ud(s),e.memoizedState=ld,o);if(!(e.mode&1))return $a(t,e,s,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,o=Error(J(419)),i=Bc(o,i,void 0),$a(t,e,s,i)}if(a=(s&t.childLanes)!==0,hn||a){if(i=Ft,i!==null){switch(s&-s){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|s)?0:r,r!==0&&r!==o.retryLane&&(o.retryLane=r,Bi(t,r),ii(i,t,r,-1))}return Uh(),i=Bc(Error(J(421))),$a(t,e,s,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=qS.bind(null,t),r._reactRetry=e,null):(t=o.treeContext,En=lr(r.nextSibling),Tn=e,ht=!0,Kn=null,t!==null&&(In[Dn++]=Ni,In[Dn++]=Ii,In[Dn++]=qr,Ni=t.id,Ii=t.overflow,qr=e),e=bh(e,i.children),e.flags|=4096,e)}function pm(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),nd(t.return,e,n)}function kc(t,e,n,i,r){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=i,o.tail=n,o.tailMode=r)}function x_(t,e,n){var i=e.pendingProps,r=i.revealOrder,o=i.tail;if(sn(t,e,i.children,n),i=gt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&pm(t,n,e);else if(t.tag===19)pm(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(at(gt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&su(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),kc(e,!1,r,n,o);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&su(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}kc(e,!0,n,null,o);break;case"together":kc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Nl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function ki(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Kr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(J(153));if(e.child!==null){for(t=e.child,n=dr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=dr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function OS(t,e,n){switch(e.tag){case 3:v_(e),Jo();break;case 5:$v(e);break;case 1:mn(e.type)&&eu(e);break;case 4:Sh(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;at(iu,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(at(gt,gt.current&1),e.flags|=128,null):n&e.child.childLanes?__(t,e,n):(at(gt,gt.current&1),t=ki(t,e,n),t!==null?t.sibling:null);at(gt,gt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return x_(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),at(gt,gt.current),i)break;return null;case 22:case 23:return e.lanes=0,m_(t,e,n)}return ki(t,e,n)}var y_,cd,S_,E_;y_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};cd=function(){};S_=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,kr(vi.current);var o=null;switch(n){case"input":r=Nf(t,r),i=Nf(t,i),o=[];break;case"select":r=_t({},r,{value:void 0}),i=_t({},i,{value:void 0}),o=[];break;case"textarea":r=Uf(t,r),i=Uf(t,i),o=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Ql)}Of(n,i);var s;n=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Qs.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Qs.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&lt("scroll",t),o||a===l||(o=[])):(o=o||[]).push(u,l))}n&&(o=o||[]).push("style",n);var u=o;(e.updateQueue=u)&&(e.flags|=4)}};E_=function(t,e,n,i){n!==i&&(e.flags|=4)};function Rs(t,e){if(!ht)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function $t(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function BS(t,e,n){var i=e.pendingProps;switch(ph(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return $t(e),null;case 1:return mn(e.type)&&Jl(),$t(e),null;case 3:return i=e.stateNode,ts(),dt(pn),dt(Kt),Mh(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Wa(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Kn!==null&&(_d(Kn),Kn=null))),cd(t,e),$t(e),null;case 5:Eh(e);var r=kr(ca.current);if(n=e.type,t!==null&&e.stateNode!=null)S_(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(J(166));return $t(e),null}if(t=kr(vi.current),Wa(e)){i=e.stateNode,n=e.type;var o=e.memoizedProps;switch(i[mi]=e,i[la]=o,t=(e.mode&1)!==0,n){case"dialog":lt("cancel",i),lt("close",i);break;case"iframe":case"object":case"embed":lt("load",i);break;case"video":case"audio":for(r=0;r<Os.length;r++)lt(Os[r],i);break;case"source":lt("error",i);break;case"img":case"image":case"link":lt("error",i),lt("load",i);break;case"details":lt("toggle",i);break;case"input":Mp(i,o),lt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!o.multiple},lt("invalid",i);break;case"textarea":wp(i,o),lt("invalid",i)}Of(n,o),r=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?i.textContent!==a&&(o.suppressHydrationWarning!==!0&&Va(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&Va(i.textContent,a,t),r=["children",""+a]):Qs.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&lt("scroll",i)}switch(n){case"input":Ua(i),Tp(i,o,!0);break;case"textarea":Ua(i),Ap(i);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(i.onclick=Ql)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{s=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=q0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=s.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=s.createElement(n,{is:i.is}):(t=s.createElement(n),n==="select"&&(s=t,i.multiple?s.multiple=!0:i.size&&(s.size=i.size))):t=s.createElementNS(t,n),t[mi]=e,t[la]=i,y_(t,e,!1,!1),e.stateNode=t;e:{switch(s=Bf(n,i),n){case"dialog":lt("cancel",t),lt("close",t),r=i;break;case"iframe":case"object":case"embed":lt("load",t),r=i;break;case"video":case"audio":for(r=0;r<Os.length;r++)lt(Os[r],t);r=i;break;case"source":lt("error",t),r=i;break;case"img":case"image":case"link":lt("error",t),lt("load",t),r=i;break;case"details":lt("toggle",t),r=i;break;case"input":Mp(t,i),r=Nf(t,i),lt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=_t({},i,{value:void 0}),lt("invalid",t);break;case"textarea":wp(t,i),r=Uf(t,i),lt("invalid",t);break;default:r=i}Of(n,r),a=r;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?Q0(t,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Z0(t,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Js(t,l):typeof l=="number"&&Js(t,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Qs.hasOwnProperty(o)?l!=null&&o==="onScroll"&&lt("scroll",t):l!=null&&Jd(t,o,l,s))}switch(n){case"input":Ua(t),Tp(t,i,!1);break;case"textarea":Ua(t),Ap(t);break;case"option":i.value!=null&&t.setAttribute("value",""+vr(i.value));break;case"select":t.multiple=!!i.multiple,o=i.value,o!=null?Vo(t,!!i.multiple,o,!1):i.defaultValue!=null&&Vo(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Ql)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return $t(e),null;case 6:if(t&&e.stateNode!=null)E_(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(J(166));if(n=kr(ca.current),kr(vi.current),Wa(e)){if(i=e.stateNode,n=e.memoizedProps,i[mi]=e,(o=i.nodeValue!==n)&&(t=Tn,t!==null))switch(t.tag){case 3:Va(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Va(i.nodeValue,n,(t.mode&1)!==0)}o&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[mi]=e,e.stateNode=i}return $t(e),null;case 13:if(dt(gt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ht&&En!==null&&e.mode&1&&!(e.flags&128))kv(),Jo(),e.flags|=98560,o=!1;else if(o=Wa(e),i!==null&&i.dehydrated!==null){if(t===null){if(!o)throw Error(J(318));if(o=e.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(J(317));o[mi]=e}else Jo(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;$t(e),o=!1}else Kn!==null&&(_d(Kn),Kn=null),o=!0;if(!o)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||gt.current&1?Rt===0&&(Rt=3):Uh())),e.updateQueue!==null&&(e.flags|=4),$t(e),null);case 4:return ts(),cd(t,e),t===null&&sa(e.stateNode.containerInfo),$t(e),null;case 10:return _h(e.type._context),$t(e),null;case 17:return mn(e.type)&&Jl(),$t(e),null;case 19:if(dt(gt),o=e.memoizedState,o===null)return $t(e),null;if(i=(e.flags&128)!==0,s=o.rendering,s===null)if(i)Rs(o,!1);else{if(Rt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(s=su(t),s!==null){for(e.flags|=128,Rs(o,!1),i=s.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)o=n,t=i,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=t,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,t=s.dependencies,o.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return at(gt,gt.current&1|2),e.child}t=t.sibling}o.tail!==null&&Mt()>is&&(e.flags|=128,i=!0,Rs(o,!1),e.lanes=4194304)}else{if(!i)if(t=su(s),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Rs(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!ht)return $t(e),null}else 2*Mt()-o.renderingStartTime>is&&n!==1073741824&&(e.flags|=128,i=!0,Rs(o,!1),e.lanes=4194304);o.isBackwards?(s.sibling=e.child,e.child=s):(n=o.last,n!==null?n.sibling=s:e.child=s,o.last=s)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=Mt(),e.sibling=null,n=gt.current,at(gt,i?n&1|2:n&1),e):($t(e),null);case 22:case 23:return Dh(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Sn&1073741824&&($t(e),e.subtreeFlags&6&&(e.flags|=8192)):$t(e),null;case 24:return null;case 25:return null}throw Error(J(156,e.tag))}function kS(t,e){switch(ph(e),e.tag){case 1:return mn(e.type)&&Jl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ts(),dt(pn),dt(Kt),Mh(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Eh(e),null;case 13:if(dt(gt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(J(340));Jo()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return dt(gt),null;case 4:return ts(),null;case 10:return _h(e.type._context),null;case 22:case 23:return Dh(),null;case 24:return null;default:return null}}var ja=!1,qt=!1,HS=typeof WeakSet=="function"?WeakSet:Set,fe=null;function Oo(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){St(t,e,i)}else n.current=null}function fd(t,e,n){try{n()}catch(i){St(t,e,i)}}var mm=!1;function zS(t,e){if(Yf=ql,t=Av(),dh(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,o=i.focusNode;i=i.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,u=0,c=0,d=t,h=null;t:for(;;){for(var p;d!==n||r!==0&&d.nodeType!==3||(a=s+r),d!==o||i!==0&&d.nodeType!==3||(l=s+i),d.nodeType===3&&(s+=d.nodeValue.length),(p=d.firstChild)!==null;)h=d,d=p;for(;;){if(d===t)break t;if(h===n&&++u===r&&(a=s),h===o&&++c===i&&(l=s),(p=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(qf={focusedElem:t,selectionRange:n},ql=!1,fe=e;fe!==null;)if(e=fe,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,fe=t;else for(;fe!==null;){e=fe;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var x=_.memoizedProps,g=_.memoizedState,f=e.stateNode,v=f.getSnapshotBeforeUpdate(e.elementType===e.type?x:qn(e.type,x),g);f.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var m=e.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(J(163))}}catch(y){St(e,e.return,y)}if(t=e.sibling,t!==null){t.return=e.return,fe=t;break}fe=e.return}return _=mm,mm=!1,_}function Xs(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var o=r.destroy;r.destroy=void 0,o!==void 0&&fd(e,n,o)}r=r.next}while(r!==i)}}function Uu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function dd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function M_(t){var e=t.alternate;e!==null&&(t.alternate=null,M_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[mi],delete e[la],delete e[Qf],delete e[MS],delete e[TS])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function T_(t){return t.tag===5||t.tag===3||t.tag===4}function gm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||T_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function hd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Ql));else if(i!==4&&(t=t.child,t!==null))for(hd(t,e,n),t=t.sibling;t!==null;)hd(t,e,n),t=t.sibling}function pd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(pd(t,e,n),t=t.sibling;t!==null;)pd(t,e,n),t=t.sibling}var Bt=null,Zn=!1;function Vi(t,e,n){for(n=n.child;n!==null;)w_(t,e,n),n=n.sibling}function w_(t,e,n){if(gi&&typeof gi.onCommitFiberUnmount=="function")try{gi.onCommitFiberUnmount(Cu,n)}catch{}switch(n.tag){case 5:qt||Oo(n,e);case 6:var i=Bt,r=Zn;Bt=null,Vi(t,e,n),Bt=i,Zn=r,Bt!==null&&(Zn?(t=Bt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Bt.removeChild(n.stateNode));break;case 18:Bt!==null&&(Zn?(t=Bt,n=n.stateNode,t.nodeType===8?Nc(t.parentNode,n):t.nodeType===1&&Nc(t,n),ia(t)):Nc(Bt,n.stateNode));break;case 4:i=Bt,r=Zn,Bt=n.stateNode.containerInfo,Zn=!0,Vi(t,e,n),Bt=i,Zn=r;break;case 0:case 11:case 14:case 15:if(!qt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var o=r,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&fd(n,e,s),r=r.next}while(r!==i)}Vi(t,e,n);break;case 1:if(!qt&&(Oo(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){St(n,e,a)}Vi(t,e,n);break;case 21:Vi(t,e,n);break;case 22:n.mode&1?(qt=(i=qt)||n.memoizedState!==null,Vi(t,e,n),qt=i):Vi(t,e,n);break;default:Vi(t,e,n)}}function vm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new HS),e.forEach(function(i){var r=ZS.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Xn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var o=t,s=e,a=s;e:for(;a!==null;){switch(a.tag){case 5:Bt=a.stateNode,Zn=!1;break e;case 3:Bt=a.stateNode.containerInfo,Zn=!0;break e;case 4:Bt=a.stateNode.containerInfo,Zn=!0;break e}a=a.return}if(Bt===null)throw Error(J(160));w_(o,s,r),Bt=null,Zn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){St(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)A_(e,t),e=e.sibling}function A_(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Xn(e,t),li(t),i&4){try{Xs(3,t,t.return),Uu(3,t)}catch(x){St(t,t.return,x)}try{Xs(5,t,t.return)}catch(x){St(t,t.return,x)}}break;case 1:Xn(e,t),li(t),i&512&&n!==null&&Oo(n,n.return);break;case 5:if(Xn(e,t),li(t),i&512&&n!==null&&Oo(n,n.return),t.flags&32){var r=t.stateNode;try{Js(r,"")}catch(x){St(t,t.return,x)}}if(i&4&&(r=t.stateNode,r!=null)){var o=t.memoizedProps,s=n!==null?n.memoizedProps:o,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&j0(r,o),Bf(a,s);var u=Bf(a,o);for(s=0;s<l.length;s+=2){var c=l[s],d=l[s+1];c==="style"?Q0(r,d):c==="dangerouslySetInnerHTML"?Z0(r,d):c==="children"?Js(r,d):Jd(r,c,d,u)}switch(a){case"input":If(r,o);break;case"textarea":Y0(r,o);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!o.multiple;var p=o.value;p!=null?Vo(r,!!o.multiple,p,!1):h!==!!o.multiple&&(o.defaultValue!=null?Vo(r,!!o.multiple,o.defaultValue,!0):Vo(r,!!o.multiple,o.multiple?[]:"",!1))}r[la]=o}catch(x){St(t,t.return,x)}}break;case 6:if(Xn(e,t),li(t),i&4){if(t.stateNode===null)throw Error(J(162));r=t.stateNode,o=t.memoizedProps;try{r.nodeValue=o}catch(x){St(t,t.return,x)}}break;case 3:if(Xn(e,t),li(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{ia(e.containerInfo)}catch(x){St(t,t.return,x)}break;case 4:Xn(e,t),li(t);break;case 13:Xn(e,t),li(t),r=t.child,r.flags&8192&&(o=r.memoizedState!==null,r.stateNode.isHidden=o,!o||r.alternate!==null&&r.alternate.memoizedState!==null||(Nh=Mt())),i&4&&vm(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(qt=(u=qt)||c,Xn(e,t),qt=u):Xn(e,t),li(t),i&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(fe=t,c=t.child;c!==null;){for(d=fe=c;fe!==null;){switch(h=fe,p=h.child,h.tag){case 0:case 11:case 14:case 15:Xs(4,h,h.return);break;case 1:Oo(h,h.return);var _=h.stateNode;if(typeof _.componentWillUnmount=="function"){i=h,n=h.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(x){St(i,n,x)}}break;case 5:Oo(h,h.return);break;case 22:if(h.memoizedState!==null){xm(d);continue}}p!==null?(p.return=h,fe=p):xm(d)}c=c.sibling}e:for(c=null,d=t;;){if(d.tag===5){if(c===null){c=d;try{r=d.stateNode,u?(o=r.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=d.stateNode,l=d.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=K0("display",s))}catch(x){St(t,t.return,x)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(x){St(t,t.return,x)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Xn(e,t),li(t),i&4&&vm(t);break;case 21:break;default:Xn(e,t),li(t)}}function li(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(T_(n)){var i=n;break e}n=n.return}throw Error(J(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Js(r,""),i.flags&=-33);var o=gm(t);pd(t,o,r);break;case 3:case 4:var s=i.stateNode.containerInfo,a=gm(t);hd(t,a,s);break;default:throw Error(J(161))}}catch(l){St(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function GS(t,e,n){fe=t,C_(t)}function C_(t,e,n){for(var i=(t.mode&1)!==0;fe!==null;){var r=fe,o=r.child;if(r.tag===22&&i){var s=r.memoizedState!==null||ja;if(!s){var a=r.alternate,l=a!==null&&a.memoizedState!==null||qt;a=ja;var u=qt;if(ja=s,(qt=l)&&!u)for(fe=r;fe!==null;)s=fe,l=s.child,s.tag===22&&s.memoizedState!==null?ym(r):l!==null?(l.return=s,fe=l):ym(r);for(;o!==null;)fe=o,C_(o),o=o.sibling;fe=r,ja=a,qt=u}_m(t)}else r.subtreeFlags&8772&&o!==null?(o.return=r,fe=o):_m(t)}}function _m(t){for(;fe!==null;){var e=fe;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:qt||Uu(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!qt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:qn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var o=e.updateQueue;o!==null&&tm(e,o,i);break;case 3:var s=e.updateQueue;if(s!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}tm(e,s,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&ia(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(J(163))}qt||e.flags&512&&dd(e)}catch(h){St(e,e.return,h)}}if(e===t){fe=null;break}if(n=e.sibling,n!==null){n.return=e.return,fe=n;break}fe=e.return}}function xm(t){for(;fe!==null;){var e=fe;if(e===t){fe=null;break}var n=e.sibling;if(n!==null){n.return=e.return,fe=n;break}fe=e.return}}function ym(t){for(;fe!==null;){var e=fe;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Uu(4,e)}catch(l){St(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){St(e,r,l)}}var o=e.return;try{dd(e)}catch(l){St(e,o,l)}break;case 5:var s=e.return;try{dd(e)}catch(l){St(e,s,l)}}}catch(l){St(e,e.return,l)}if(e===t){fe=null;break}var a=e.sibling;if(a!==null){a.return=e.return,fe=a;break}fe=e.return}}var VS=Math.ceil,uu=zi.ReactCurrentDispatcher,Ph=zi.ReactCurrentOwner,kn=zi.ReactCurrentBatchConfig,qe=0,Ft=null,At=null,zt=0,Sn=0,Bo=Sr(0),Rt=0,pa=null,Kr=0,Fu=0,Lh=0,$s=null,dn=null,Nh=0,is=1/0,Ci=null,cu=!1,md=null,cr=null,Ya=!1,nr=null,fu=0,js=0,gd=null,Il=-1,Dl=0;function un(){return qe&6?Mt():Il!==-1?Il:Il=Mt()}function fr(t){return t.mode&1?qe&2&&zt!==0?zt&-zt:AS.transition!==null?(Dl===0&&(Dl=cv()),Dl):(t=Je,t!==0||(t=window.event,t=t===void 0?16:vv(t.type)),t):1}function ii(t,e,n,i){if(50<js)throw js=0,gd=null,Error(J(185));Sa(t,n,i),(!(qe&2)||t!==Ft)&&(t===Ft&&(!(qe&2)&&(Fu|=n),Rt===4&&er(t,zt)),gn(t,i),n===1&&qe===0&&!(e.mode&1)&&(is=Mt()+500,Nu&&Er()))}function gn(t,e){var n=t.callbackNode;Ay(t,e);var i=Yl(t,t===Ft?zt:0);if(i===0)n!==null&&bp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&bp(n),e===1)t.tag===0?wS(Sm.bind(null,t)):Fv(Sm.bind(null,t)),SS(function(){!(qe&6)&&Er()}),n=null;else{switch(fv(i)){case 1:n=rh;break;case 4:n=lv;break;case 16:n=jl;break;case 536870912:n=uv;break;default:n=jl}n=U_(n,R_.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function R_(t,e){if(Il=-1,Dl=0,qe&6)throw Error(J(327));var n=t.callbackNode;if(Yo()&&t.callbackNode!==n)return null;var i=Yl(t,t===Ft?zt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=du(t,i);else{e=i;var r=qe;qe|=2;var o=P_();(Ft!==t||zt!==e)&&(Ci=null,is=Mt()+500,zr(t,e));do try{$S();break}catch(a){b_(t,a)}while(1);vh(),uu.current=o,qe=r,At!==null?e=0:(Ft=null,zt=0,e=Rt)}if(e!==0){if(e===2&&(r=Vf(t),r!==0&&(i=r,e=vd(t,r))),e===1)throw n=pa,zr(t,0),er(t,i),gn(t,Mt()),n;if(e===6)er(t,i);else{if(r=t.current.alternate,!(i&30)&&!WS(r)&&(e=du(t,i),e===2&&(o=Vf(t),o!==0&&(i=o,e=vd(t,o))),e===1))throw n=pa,zr(t,0),er(t,i),gn(t,Mt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(J(345));case 2:Nr(t,dn,Ci);break;case 3:if(er(t,i),(i&130023424)===i&&(e=Nh+500-Mt(),10<e)){if(Yl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){un(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Kf(Nr.bind(null,t,dn,Ci),e);break}Nr(t,dn,Ci);break;case 4:if(er(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var s=31-ni(i);o=1<<s,s=e[s],s>r&&(r=s),i&=~o}if(i=r,i=Mt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*VS(i/1960))-i,10<i){t.timeoutHandle=Kf(Nr.bind(null,t,dn,Ci),i);break}Nr(t,dn,Ci);break;case 5:Nr(t,dn,Ci);break;default:throw Error(J(329))}}}return gn(t,Mt()),t.callbackNode===n?R_.bind(null,t):null}function vd(t,e){var n=$s;return t.current.memoizedState.isDehydrated&&(zr(t,e).flags|=256),t=du(t,e),t!==2&&(e=dn,dn=n,e!==null&&_d(e)),t}function _d(t){dn===null?dn=t:dn.push.apply(dn,t)}function WS(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],o=r.getSnapshot;r=r.value;try{if(!si(o(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function er(t,e){for(e&=~Lh,e&=~Fu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-ni(e),i=1<<n;t[n]=-1,e&=~i}}function Sm(t){if(qe&6)throw Error(J(327));Yo();var e=Yl(t,0);if(!(e&1))return gn(t,Mt()),null;var n=du(t,e);if(t.tag!==0&&n===2){var i=Vf(t);i!==0&&(e=i,n=vd(t,i))}if(n===1)throw n=pa,zr(t,0),er(t,e),gn(t,Mt()),n;if(n===6)throw Error(J(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Nr(t,dn,Ci),gn(t,Mt()),null}function Ih(t,e){var n=qe;qe|=1;try{return t(e)}finally{qe=n,qe===0&&(is=Mt()+500,Nu&&Er())}}function Qr(t){nr!==null&&nr.tag===0&&!(qe&6)&&Yo();var e=qe;qe|=1;var n=kn.transition,i=Je;try{if(kn.transition=null,Je=1,t)return t()}finally{Je=i,kn.transition=n,qe=e,!(qe&6)&&Er()}}function Dh(){Sn=Bo.current,dt(Bo)}function zr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,yS(n)),At!==null)for(n=At.return;n!==null;){var i=n;switch(ph(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Jl();break;case 3:ts(),dt(pn),dt(Kt),Mh();break;case 5:Eh(i);break;case 4:ts();break;case 13:dt(gt);break;case 19:dt(gt);break;case 10:_h(i.type._context);break;case 22:case 23:Dh()}n=n.return}if(Ft=t,At=t=dr(t.current,null),zt=Sn=e,Rt=0,pa=null,Lh=Fu=Kr=0,dn=$s=null,Br!==null){for(e=0;e<Br.length;e++)if(n=Br[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,o=n.pending;if(o!==null){var s=o.next;o.next=r,i.next=s}n.pending=i}Br=null}return t}function b_(t,e){do{var n=At;try{if(vh(),Pl.current=lu,au){for(var i=vt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}au=!1}if(Zr=0,Dt=Ct=vt=null,Ws=!1,fa=0,Ph.current=null,n===null||n.return===null){Rt=1,pa=e,At=null;break}e:{var o=t,s=n.return,a=n,l=e;if(e=zt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var h=c.alternate;h?(c.updateQueue=h.updateQueue,c.memoizedState=h.memoizedState,c.lanes=h.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=lm(s);if(p!==null){p.flags&=-257,um(p,s,a,o,e),p.mode&1&&am(o,u,e),e=p,l=u;var _=e.updateQueue;if(_===null){var x=new Set;x.add(l),e.updateQueue=x}else _.add(l);break e}else{if(!(e&1)){am(o,u,e),Uh();break e}l=Error(J(426))}}else if(ht&&a.mode&1){var g=lm(s);if(g!==null){!(g.flags&65536)&&(g.flags|=256),um(g,s,a,o,e),mh(ns(l,a));break e}}o=l=ns(l,a),Rt!==4&&(Rt=2),$s===null?$s=[o]:$s.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,e&=-e,o.lanes|=e;var f=d_(o,l,e);em(o,f);break e;case 1:a=l;var v=o.type,m=o.stateNode;if(!(o.flags&128)&&(typeof v.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(cr===null||!cr.has(m)))){o.flags|=65536,e&=-e,o.lanes|=e;var y=h_(o,a,e);em(o,y);break e}}o=o.return}while(o!==null)}N_(n)}catch(R){e=R,At===n&&n!==null&&(At=n=n.return);continue}break}while(1)}function P_(){var t=uu.current;return uu.current=lu,t===null?lu:t}function Uh(){(Rt===0||Rt===3||Rt===2)&&(Rt=4),Ft===null||!(Kr&268435455)&&!(Fu&268435455)||er(Ft,zt)}function du(t,e){var n=qe;qe|=2;var i=P_();(Ft!==t||zt!==e)&&(Ci=null,zr(t,e));do try{XS();break}catch(r){b_(t,r)}while(1);if(vh(),qe=n,uu.current=i,At!==null)throw Error(J(261));return Ft=null,zt=0,Rt}function XS(){for(;At!==null;)L_(At)}function $S(){for(;At!==null&&!vy();)L_(At)}function L_(t){var e=D_(t.alternate,t,Sn);t.memoizedProps=t.pendingProps,e===null?N_(t):At=e,Ph.current=null}function N_(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=kS(n,e),n!==null){n.flags&=32767,At=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Rt=6,At=null;return}}else if(n=BS(n,e,Sn),n!==null){At=n;return}if(e=e.sibling,e!==null){At=e;return}At=e=t}while(e!==null);Rt===0&&(Rt=5)}function Nr(t,e,n){var i=Je,r=kn.transition;try{kn.transition=null,Je=1,jS(t,e,n,i)}finally{kn.transition=r,Je=i}return null}function jS(t,e,n,i){do Yo();while(nr!==null);if(qe&6)throw Error(J(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(J(177));t.callbackNode=null,t.callbackPriority=0;var o=n.lanes|n.childLanes;if(Cy(t,o),t===Ft&&(At=Ft=null,zt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ya||(Ya=!0,U_(jl,function(){return Yo(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=kn.transition,kn.transition=null;var s=Je;Je=1;var a=qe;qe|=4,Ph.current=null,zS(t,n),A_(n,t),hS(qf),ql=!!Yf,qf=Yf=null,t.current=n,GS(n),_y(),qe=a,Je=s,kn.transition=o}else t.current=n;if(Ya&&(Ya=!1,nr=t,fu=r),o=t.pendingLanes,o===0&&(cr=null),Sy(n.stateNode),gn(t,Mt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(cu)throw cu=!1,t=md,md=null,t;return fu&1&&t.tag!==0&&Yo(),o=t.pendingLanes,o&1?t===gd?js++:(js=0,gd=t):js=0,Er(),null}function Yo(){if(nr!==null){var t=fv(fu),e=kn.transition,n=Je;try{if(kn.transition=null,Je=16>t?16:t,nr===null)var i=!1;else{if(t=nr,nr=null,fu=0,qe&6)throw Error(J(331));var r=qe;for(qe|=4,fe=t.current;fe!==null;){var o=fe,s=o.child;if(fe.flags&16){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(fe=u;fe!==null;){var c=fe;switch(c.tag){case 0:case 11:case 15:Xs(8,c,o)}var d=c.child;if(d!==null)d.return=c,fe=d;else for(;fe!==null;){c=fe;var h=c.sibling,p=c.return;if(M_(c),c===u){fe=null;break}if(h!==null){h.return=p,fe=h;break}fe=p}}}var _=o.alternate;if(_!==null){var x=_.child;if(x!==null){_.child=null;do{var g=x.sibling;x.sibling=null,x=g}while(x!==null)}}fe=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,fe=s;else e:for(;fe!==null;){if(o=fe,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Xs(9,o,o.return)}var f=o.sibling;if(f!==null){f.return=o.return,fe=f;break e}fe=o.return}}var v=t.current;for(fe=v;fe!==null;){s=fe;var m=s.child;if(s.subtreeFlags&2064&&m!==null)m.return=s,fe=m;else e:for(s=v;fe!==null;){if(a=fe,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Uu(9,a)}}catch(R){St(a,a.return,R)}if(a===s){fe=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,fe=y;break e}fe=a.return}}if(qe=r,Er(),gi&&typeof gi.onPostCommitFiberRoot=="function")try{gi.onPostCommitFiberRoot(Cu,t)}catch{}i=!0}return i}finally{Je=n,kn.transition=e}}return!1}function Em(t,e,n){e=ns(n,e),e=d_(t,e,1),t=ur(t,e,1),e=un(),t!==null&&(Sa(t,1,e),gn(t,e))}function St(t,e,n){if(t.tag===3)Em(t,t,n);else for(;e!==null;){if(e.tag===3){Em(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(cr===null||!cr.has(i))){t=ns(n,t),t=h_(e,t,1),e=ur(e,t,1),t=un(),e!==null&&(Sa(e,1,t),gn(e,t));break}}e=e.return}}function YS(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=un(),t.pingedLanes|=t.suspendedLanes&n,Ft===t&&(zt&n)===n&&(Rt===4||Rt===3&&(zt&130023424)===zt&&500>Mt()-Nh?zr(t,0):Lh|=n),gn(t,e)}function I_(t,e){e===0&&(t.mode&1?(e=Ba,Ba<<=1,!(Ba&130023424)&&(Ba=4194304)):e=1);var n=un();t=Bi(t,e),t!==null&&(Sa(t,e,n),gn(t,n))}function qS(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),I_(t,n)}function ZS(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(J(314))}i!==null&&i.delete(e),I_(t,n)}var D_;D_=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||pn.current)hn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return hn=!1,OS(t,e,n);hn=!!(t.flags&131072)}else hn=!1,ht&&e.flags&1048576&&Ov(e,nu,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Nl(t,e),t=e.pendingProps;var r=Qo(e,Kt.current);jo(e,n),r=wh(null,e,i,t,r,n);var o=Ah();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,mn(i)?(o=!0,eu(e)):o=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,yh(e),r.updater=Iu,e.stateNode=r,r._reactInternals=e,rd(e,i,t,n),e=ad(null,e,i,!0,o,n)):(e.tag=0,ht&&o&&hh(e),sn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Nl(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=QS(i),t=qn(i,t),r){case 0:e=sd(null,e,i,t,n);break e;case 1:e=dm(null,e,i,t,n);break e;case 11:e=cm(null,e,i,t,n);break e;case 14:e=fm(null,e,i,qn(i.type,t),n);break e}throw Error(J(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:qn(i,r),sd(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:qn(i,r),dm(t,e,i,r,n);case 3:e:{if(v_(e),t===null)throw Error(J(387));i=e.pendingProps,o=e.memoizedState,r=o.element,zv(t,e),ou(e,i,null,n);var s=e.memoizedState;if(i=s.element,o.isDehydrated)if(o={element:i,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},e.updateQueue.baseState=o,e.memoizedState=o,e.flags&256){r=ns(Error(J(423)),e),e=hm(t,e,i,n,r);break e}else if(i!==r){r=ns(Error(J(424)),e),e=hm(t,e,i,n,r);break e}else for(En=lr(e.stateNode.containerInfo.firstChild),Tn=e,ht=!0,Kn=null,n=Xv(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Jo(),i===r){e=ki(t,e,n);break e}sn(t,e,i,n)}e=e.child}return e;case 5:return $v(e),t===null&&td(e),i=e.type,r=e.pendingProps,o=t!==null?t.memoizedProps:null,s=r.children,Zf(i,r)?s=null:o!==null&&Zf(i,o)&&(e.flags|=32),g_(t,e),sn(t,e,s,n),e.child;case 6:return t===null&&td(e),null;case 13:return __(t,e,n);case 4:return Sh(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=es(e,null,i,n):sn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:qn(i,r),cm(t,e,i,r,n);case 7:return sn(t,e,e.pendingProps,n),e.child;case 8:return sn(t,e,e.pendingProps.children,n),e.child;case 12:return sn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,o=e.memoizedProps,s=r.value,at(iu,i._currentValue),i._currentValue=s,o!==null)if(si(o.value,s)){if(o.children===r.children&&!pn.current){e=ki(t,e,n);break e}}else for(o=e.child,o!==null&&(o.return=e);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(o.tag===1){l=Ui(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),nd(o.return,n,e),a.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===e.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(J(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),nd(s,n,e),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===e){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}sn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,jo(e,n),r=Hn(r),i=i(r),e.flags|=1,sn(t,e,i,n),e.child;case 14:return i=e.type,r=qn(i,e.pendingProps),r=qn(i.type,r),fm(t,e,i,r,n);case 15:return p_(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:qn(i,r),Nl(t,e),e.tag=1,mn(i)?(t=!0,eu(e)):t=!1,jo(e,n),Vv(e,i,r),rd(e,i,r,n),ad(null,e,i,!0,t,n);case 19:return x_(t,e,n);case 22:return m_(t,e,n)}throw Error(J(156,e.tag))};function U_(t,e){return av(t,e)}function KS(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Bn(t,e,n,i){return new KS(t,e,n,i)}function Fh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function QS(t){if(typeof t=="function")return Fh(t)?1:0;if(t!=null){if(t=t.$$typeof,t===th)return 11;if(t===nh)return 14}return 2}function dr(t,e){var n=t.alternate;return n===null?(n=Bn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ul(t,e,n,i,r,o){var s=2;if(i=t,typeof t=="function")Fh(t)&&(s=1);else if(typeof t=="string")s=5;else e:switch(t){case Ro:return Gr(n.children,r,o,e);case eh:s=8,r|=8;break;case Rf:return t=Bn(12,n,e,r|2),t.elementType=Rf,t.lanes=o,t;case bf:return t=Bn(13,n,e,r),t.elementType=bf,t.lanes=o,t;case Pf:return t=Bn(19,n,e,r),t.elementType=Pf,t.lanes=o,t;case W0:return Ou(n,r,o,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case G0:s=10;break e;case V0:s=9;break e;case th:s=11;break e;case nh:s=14;break e;case Zi:s=16,i=null;break e}throw Error(J(130,t==null?t:typeof t,""))}return e=Bn(s,n,e,r),e.elementType=t,e.type=i,e.lanes=o,e}function Gr(t,e,n,i){return t=Bn(7,t,i,e),t.lanes=n,t}function Ou(t,e,n,i){return t=Bn(22,t,i,e),t.elementType=W0,t.lanes=n,t.stateNode={isHidden:!1},t}function Hc(t,e,n){return t=Bn(6,t,null,e),t.lanes=n,t}function zc(t,e,n){return e=Bn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function JS(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Sc(0),this.expirationTimes=Sc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Sc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Oh(t,e,n,i,r,o,s,a,l){return t=new JS(t,e,n,a,l),e===1?(e=1,o===!0&&(e|=8)):e=0,o=Bn(3,null,null,e),t.current=o,o.stateNode=t,o.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},yh(o),t}function eE(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Co,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function F_(t){if(!t)return _r;t=t._reactInternals;e:{if(oo(t)!==t||t.tag!==1)throw Error(J(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(mn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(J(171))}if(t.tag===1){var n=t.type;if(mn(n))return Uv(t,n,e)}return e}function O_(t,e,n,i,r,o,s,a,l){return t=Oh(n,i,!0,t,r,o,s,a,l),t.context=F_(null),n=t.current,i=un(),r=fr(n),o=Ui(i,r),o.callback=e??null,ur(n,o,r),t.current.lanes=r,Sa(t,r,i),gn(t,i),t}function Bu(t,e,n,i){var r=e.current,o=un(),s=fr(r);return n=F_(n),e.context===null?e.context=n:e.pendingContext=n,e=Ui(o,s),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=ur(r,e,s),t!==null&&(ii(t,r,s,o),bl(t,r,s)),s}function hu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Mm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Bh(t,e){Mm(t,e),(t=t.alternate)&&Mm(t,e)}function tE(){return null}var B_=typeof reportError=="function"?reportError:function(t){console.error(t)};function kh(t){this._internalRoot=t}ku.prototype.render=kh.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(J(409));Bu(t,e,null,null)};ku.prototype.unmount=kh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Qr(function(){Bu(null,t,null,null)}),e[Oi]=null}};function ku(t){this._internalRoot=t}ku.prototype.unstable_scheduleHydration=function(t){if(t){var e=pv();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Ji.length&&e!==0&&e<Ji[n].priority;n++);Ji.splice(n,0,t),n===0&&gv(t)}};function Hh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Hu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Tm(){}function nE(t,e,n,i,r){if(r){if(typeof i=="function"){var o=i;i=function(){var u=hu(s);o.call(u)}}var s=O_(e,i,t,0,null,!1,!1,"",Tm);return t._reactRootContainer=s,t[Oi]=s.current,sa(t.nodeType===8?t.parentNode:t),Qr(),s}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=hu(l);a.call(u)}}var l=Oh(t,0,!1,null,null,!1,!1,"",Tm);return t._reactRootContainer=l,t[Oi]=l.current,sa(t.nodeType===8?t.parentNode:t),Qr(function(){Bu(e,l,n,i)}),l}function zu(t,e,n,i,r){var o=n._reactRootContainer;if(o){var s=o;if(typeof r=="function"){var a=r;r=function(){var l=hu(s);a.call(l)}}Bu(e,s,t,r)}else s=nE(n,e,t,r,i);return hu(s)}dv=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Fs(e.pendingLanes);n!==0&&(oh(e,n|1),gn(e,Mt()),!(qe&6)&&(is=Mt()+500,Er()))}break;case 13:Qr(function(){var i=Bi(t,1);if(i!==null){var r=un();ii(i,t,1,r)}}),Bh(t,1)}};sh=function(t){if(t.tag===13){var e=Bi(t,134217728);if(e!==null){var n=un();ii(e,t,134217728,n)}Bh(t,134217728)}};hv=function(t){if(t.tag===13){var e=fr(t),n=Bi(t,e);if(n!==null){var i=un();ii(n,t,e,i)}Bh(t,e)}};pv=function(){return Je};mv=function(t,e){var n=Je;try{return Je=t,e()}finally{Je=n}};Hf=function(t,e,n){switch(e){case"input":if(If(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Lu(i);if(!r)throw Error(J(90));$0(i),If(i,r)}}}break;case"textarea":Y0(t,n);break;case"select":e=n.value,e!=null&&Vo(t,!!n.multiple,e,!1)}};tv=Ih;nv=Qr;var iE={usingClientEntryPoint:!1,Events:[Ma,No,Lu,J0,ev,Ih]},bs={findFiberByHostInstance:Or,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},rE={bundleType:bs.bundleType,version:bs.version,rendererPackageName:bs.rendererPackageName,rendererConfig:bs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:zi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=ov(t),t===null?null:t.stateNode},findFiberByHostInstance:bs.findFiberByHostInstance||tE,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var qa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!qa.isDisabled&&qa.supportsFiber)try{Cu=qa.inject(rE),gi=qa}catch{}}Rn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=iE;Rn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Hh(e))throw Error(J(200));return eE(t,e,null,n)};Rn.createRoot=function(t,e){if(!Hh(t))throw Error(J(299));var n=!1,i="",r=B_;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Oh(t,1,!1,null,null,n,!1,i,r),t[Oi]=e.current,sa(t.nodeType===8?t.parentNode:t),new kh(e)};Rn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(J(188)):(t=Object.keys(t).join(","),Error(J(268,t)));return t=ov(e),t=t===null?null:t.stateNode,t};Rn.flushSync=function(t){return Qr(t)};Rn.hydrate=function(t,e,n){if(!Hu(e))throw Error(J(200));return zu(null,t,e,!0,n)};Rn.hydrateRoot=function(t,e,n){if(!Hh(t))throw Error(J(405));var i=n!=null&&n.hydratedSources||null,r=!1,o="",s=B_;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),e=O_(e,null,t,1,n??null,r,!1,o,s),t[Oi]=e.current,sa(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new ku(e)};Rn.render=function(t,e,n){if(!Hu(e))throw Error(J(200));return zu(null,t,e,!1,n)};Rn.unmountComponentAtNode=function(t){if(!Hu(t))throw Error(J(40));return t._reactRootContainer?(Qr(function(){zu(null,null,t,!1,function(){t._reactRootContainer=null,t[Oi]=null})}),!0):!1};Rn.unstable_batchedUpdates=Ih;Rn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Hu(n))throw Error(J(200));if(t==null||t._reactInternals===void 0)throw Error(J(38));return zu(t,e,n,!1,i)};Rn.version="18.2.0-next-9e3b772b8-20220608";function k_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(k_)}catch(t){console.error(t)}}k_(),O0.exports=Rn;var oE=O0.exports,wm=oE;Af.createRoot=wm.createRoot,Af.hydrateRoot=wm.hydrateRoot;var xd=function(t,e){return xd=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,i){n.__proto__=i}||function(n,i){for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(n[r]=i[r])},xd(t,e)};function Vn(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");xd(t,e);function n(){this.constructor=t}t.prototype=e===null?Object.create(e):(n.prototype=e.prototype,new n)}var me=function(){return me=Object.assign||function(e){for(var n,i=1,r=arguments.length;i<r;i++){n=arguments[i];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},me.apply(this,arguments)};function rs(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,i=Object.getOwnPropertySymbols(t);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(t,i[r])&&(n[i[r]]=t[i[r]]);return n}function di(t,e,n){if(n||arguments.length===2)for(var i=0,r=e.length,o;i<r;i++)(o||!(i in e))&&(o||(o=Array.prototype.slice.call(e,0,i)),o[i]=e[i]);return t.concat(o||Array.prototype.slice.call(e))}var H_={exports:{}},et={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ot=typeof Symbol=="function"&&Symbol.for,zh=Ot?Symbol.for("react.element"):60103,Gh=Ot?Symbol.for("react.portal"):60106,Gu=Ot?Symbol.for("react.fragment"):60107,Vu=Ot?Symbol.for("react.strict_mode"):60108,Wu=Ot?Symbol.for("react.profiler"):60114,Xu=Ot?Symbol.for("react.provider"):60109,$u=Ot?Symbol.for("react.context"):60110,Vh=Ot?Symbol.for("react.async_mode"):60111,ju=Ot?Symbol.for("react.concurrent_mode"):60111,Yu=Ot?Symbol.for("react.forward_ref"):60112,qu=Ot?Symbol.for("react.suspense"):60113,sE=Ot?Symbol.for("react.suspense_list"):60120,Zu=Ot?Symbol.for("react.memo"):60115,Ku=Ot?Symbol.for("react.lazy"):60116,aE=Ot?Symbol.for("react.block"):60121,lE=Ot?Symbol.for("react.fundamental"):60117,uE=Ot?Symbol.for("react.responder"):60118,cE=Ot?Symbol.for("react.scope"):60119;function Pn(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case zh:switch(t=t.type,t){case Vh:case ju:case Gu:case Wu:case Vu:case qu:return t;default:switch(t=t&&t.$$typeof,t){case $u:case Yu:case Ku:case Zu:case Xu:return t;default:return e}}case Gh:return e}}}function z_(t){return Pn(t)===ju}et.AsyncMode=Vh;et.ConcurrentMode=ju;et.ContextConsumer=$u;et.ContextProvider=Xu;et.Element=zh;et.ForwardRef=Yu;et.Fragment=Gu;et.Lazy=Ku;et.Memo=Zu;et.Portal=Gh;et.Profiler=Wu;et.StrictMode=Vu;et.Suspense=qu;et.isAsyncMode=function(t){return z_(t)||Pn(t)===Vh};et.isConcurrentMode=z_;et.isContextConsumer=function(t){return Pn(t)===$u};et.isContextProvider=function(t){return Pn(t)===Xu};et.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===zh};et.isForwardRef=function(t){return Pn(t)===Yu};et.isFragment=function(t){return Pn(t)===Gu};et.isLazy=function(t){return Pn(t)===Ku};et.isMemo=function(t){return Pn(t)===Zu};et.isPortal=function(t){return Pn(t)===Gh};et.isProfiler=function(t){return Pn(t)===Wu};et.isStrictMode=function(t){return Pn(t)===Vu};et.isSuspense=function(t){return Pn(t)===qu};et.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===Gu||t===ju||t===Wu||t===Vu||t===qu||t===sE||typeof t=="object"&&t!==null&&(t.$$typeof===Ku||t.$$typeof===Zu||t.$$typeof===Xu||t.$$typeof===$u||t.$$typeof===Yu||t.$$typeof===lE||t.$$typeof===uE||t.$$typeof===cE||t.$$typeof===aE)};et.typeOf=Pn;H_.exports=et;var fE=H_.exports,G_=fE,dE={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},hE={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},V_={};V_[G_.ForwardRef]=dE;V_[G_.Memo]=hE;function W_(t,e,n){if(n===void 0&&(n=Error),!t)throw new n(e)}var $e;(function(t){t[t.EXPECT_ARGUMENT_CLOSING_BRACE=1]="EXPECT_ARGUMENT_CLOSING_BRACE",t[t.EMPTY_ARGUMENT=2]="EMPTY_ARGUMENT",t[t.MALFORMED_ARGUMENT=3]="MALFORMED_ARGUMENT",t[t.EXPECT_ARGUMENT_TYPE=4]="EXPECT_ARGUMENT_TYPE",t[t.INVALID_ARGUMENT_TYPE=5]="INVALID_ARGUMENT_TYPE",t[t.EXPECT_ARGUMENT_STYLE=6]="EXPECT_ARGUMENT_STYLE",t[t.INVALID_NUMBER_SKELETON=7]="INVALID_NUMBER_SKELETON",t[t.INVALID_DATE_TIME_SKELETON=8]="INVALID_DATE_TIME_SKELETON",t[t.EXPECT_NUMBER_SKELETON=9]="EXPECT_NUMBER_SKELETON",t[t.EXPECT_DATE_TIME_SKELETON=10]="EXPECT_DATE_TIME_SKELETON",t[t.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE=11]="UNCLOSED_QUOTE_IN_ARGUMENT_STYLE",t[t.EXPECT_SELECT_ARGUMENT_OPTIONS=12]="EXPECT_SELECT_ARGUMENT_OPTIONS",t[t.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE=13]="EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE",t[t.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE=14]="INVALID_PLURAL_ARGUMENT_OFFSET_VALUE",t[t.EXPECT_SELECT_ARGUMENT_SELECTOR=15]="EXPECT_SELECT_ARGUMENT_SELECTOR",t[t.EXPECT_PLURAL_ARGUMENT_SELECTOR=16]="EXPECT_PLURAL_ARGUMENT_SELECTOR",t[t.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT=17]="EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT",t[t.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT=18]="EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT",t[t.INVALID_PLURAL_ARGUMENT_SELECTOR=19]="INVALID_PLURAL_ARGUMENT_SELECTOR",t[t.DUPLICATE_PLURAL_ARGUMENT_SELECTOR=20]="DUPLICATE_PLURAL_ARGUMENT_SELECTOR",t[t.DUPLICATE_SELECT_ARGUMENT_SELECTOR=21]="DUPLICATE_SELECT_ARGUMENT_SELECTOR",t[t.MISSING_OTHER_CLAUSE=22]="MISSING_OTHER_CLAUSE",t[t.INVALID_TAG=23]="INVALID_TAG",t[t.INVALID_TAG_NAME=25]="INVALID_TAG_NAME",t[t.UNMATCHED_CLOSING_TAG=26]="UNMATCHED_CLOSING_TAG",t[t.UNCLOSED_TAG=27]="UNCLOSED_TAG"})($e||($e={}));var ft;(function(t){t[t.literal=0]="literal",t[t.argument=1]="argument",t[t.number=2]="number",t[t.date=3]="date",t[t.time=4]="time",t[t.select=5]="select",t[t.plural=6]="plural",t[t.pound=7]="pound",t[t.tag=8]="tag"})(ft||(ft={}));var os;(function(t){t[t.number=0]="number",t[t.dateTime=1]="dateTime"})(os||(os={}));function Am(t){return t.type===ft.literal}function pE(t){return t.type===ft.argument}function X_(t){return t.type===ft.number}function $_(t){return t.type===ft.date}function j_(t){return t.type===ft.time}function Y_(t){return t.type===ft.select}function q_(t){return t.type===ft.plural}function mE(t){return t.type===ft.pound}function Z_(t){return t.type===ft.tag}function K_(t){return!!(t&&typeof t=="object"&&t.type===os.number)}function yd(t){return!!(t&&typeof t=="object"&&t.type===os.dateTime)}var Q_=/[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/,gE=/(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;function vE(t){var e={};return t.replace(gE,function(n){var i=n.length;switch(n[0]){case"G":e.era=i===4?"long":i===5?"narrow":"short";break;case"y":e.year=i===2?"2-digit":"numeric";break;case"Y":case"u":case"U":case"r":throw new RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");case"q":case"Q":throw new RangeError("`q/Q` (quarter) patterns are not supported");case"M":case"L":e.month=["numeric","2-digit","short","long","narrow"][i-1];break;case"w":case"W":throw new RangeError("`w/W` (week) patterns are not supported");case"d":e.day=["numeric","2-digit"][i-1];break;case"D":case"F":case"g":throw new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");case"E":e.weekday=i===4?"long":i===5?"narrow":"short";break;case"e":if(i<4)throw new RangeError("`e..eee` (weekday) patterns are not supported");e.weekday=["short","long","narrow","short"][i-4];break;case"c":if(i<4)throw new RangeError("`c..ccc` (weekday) patterns are not supported");e.weekday=["short","long","narrow","short"][i-4];break;case"a":e.hour12=!0;break;case"b":case"B":throw new RangeError("`b/B` (period) patterns are not supported, use `a` instead");case"h":e.hourCycle="h12",e.hour=["numeric","2-digit"][i-1];break;case"H":e.hourCycle="h23",e.hour=["numeric","2-digit"][i-1];break;case"K":e.hourCycle="h11",e.hour=["numeric","2-digit"][i-1];break;case"k":e.hourCycle="h24",e.hour=["numeric","2-digit"][i-1];break;case"j":case"J":case"C":throw new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");case"m":e.minute=["numeric","2-digit"][i-1];break;case"s":e.second=["numeric","2-digit"][i-1];break;case"S":case"A":throw new RangeError("`S/A` (second) patterns are not supported, use `s` instead");case"z":e.timeZoneName=i<4?"short":"long";break;case"Z":case"O":case"v":case"V":case"X":case"x":throw new RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead")}return""}),e}var _E=/[\t-\r \x85\u200E\u200F\u2028\u2029]/i;function xE(t){if(t.length===0)throw new Error("Number skeleton cannot be empty");for(var e=t.split(_E).filter(function(h){return h.length>0}),n=[],i=0,r=e;i<r.length;i++){var o=r[i],s=o.split("/");if(s.length===0)throw new Error("Invalid number skeleton");for(var a=s[0],l=s.slice(1),u=0,c=l;u<c.length;u++){var d=c[u];if(d.length===0)throw new Error("Invalid number skeleton")}n.push({stem:a,options:l})}return n}function yE(t){return t.replace(/^(.*?)-/,"")}var Cm=/^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g,J_=/^(@+)?(\+|#+)?[rs]?$/g,SE=/(\*)(0+)|(#+)(0+)|(0+)/g,e1=/^(0+)$/;function Rm(t){var e={};return t[t.length-1]==="r"?e.roundingPriority="morePrecision":t[t.length-1]==="s"&&(e.roundingPriority="lessPrecision"),t.replace(J_,function(n,i,r){return typeof r!="string"?(e.minimumSignificantDigits=i.length,e.maximumSignificantDigits=i.length):r==="+"?e.minimumSignificantDigits=i.length:i[0]==="#"?e.maximumSignificantDigits=i.length:(e.minimumSignificantDigits=i.length,e.maximumSignificantDigits=i.length+(typeof r=="string"?r.length:0)),""}),e}function t1(t){switch(t){case"sign-auto":return{signDisplay:"auto"};case"sign-accounting":case"()":return{currencySign:"accounting"};case"sign-always":case"+!":return{signDisplay:"always"};case"sign-accounting-always":case"()!":return{signDisplay:"always",currencySign:"accounting"};case"sign-except-zero":case"+?":return{signDisplay:"exceptZero"};case"sign-accounting-except-zero":case"()?":return{signDisplay:"exceptZero",currencySign:"accounting"};case"sign-never":case"+_":return{signDisplay:"never"}}}function EE(t){var e;if(t[0]==="E"&&t[1]==="E"?(e={notation:"engineering"},t=t.slice(2)):t[0]==="E"&&(e={notation:"scientific"},t=t.slice(1)),e){var n=t.slice(0,2);if(n==="+!"?(e.signDisplay="always",t=t.slice(2)):n==="+?"&&(e.signDisplay="exceptZero",t=t.slice(2)),!e1.test(t))throw new Error("Malformed concise eng/scientific notation");e.minimumIntegerDigits=t.length}return e}function bm(t){var e={},n=t1(t);return n||e}function ME(t){for(var e={},n=0,i=t;n<i.length;n++){var r=i[n];switch(r.stem){case"percent":case"%":e.style="percent";continue;case"%x100":e.style="percent",e.scale=100;continue;case"currency":e.style="currency",e.currency=r.options[0];continue;case"group-off":case",_":e.useGrouping=!1;continue;case"precision-integer":case".":e.maximumFractionDigits=0;continue;case"measure-unit":case"unit":e.style="unit",e.unit=yE(r.options[0]);continue;case"compact-short":case"K":e.notation="compact",e.compactDisplay="short";continue;case"compact-long":case"KK":e.notation="compact",e.compactDisplay="long";continue;case"scientific":e=me(me(me({},e),{notation:"scientific"}),r.options.reduce(function(l,u){return me(me({},l),bm(u))},{}));continue;case"engineering":e=me(me(me({},e),{notation:"engineering"}),r.options.reduce(function(l,u){return me(me({},l),bm(u))},{}));continue;case"notation-simple":e.notation="standard";continue;case"unit-width-narrow":e.currencyDisplay="narrowSymbol",e.unitDisplay="narrow";continue;case"unit-width-short":e.currencyDisplay="code",e.unitDisplay="short";continue;case"unit-width-full-name":e.currencyDisplay="name",e.unitDisplay="long";continue;case"unit-width-iso-code":e.currencyDisplay="symbol";continue;case"scale":e.scale=parseFloat(r.options[0]);continue;case"integer-width":if(r.options.length>1)throw new RangeError("integer-width stems only accept a single optional option");r.options[0].replace(SE,function(l,u,c,d,h,p){if(u)e.minimumIntegerDigits=c.length;else{if(d&&h)throw new Error("We currently do not support maximum integer digits");if(p)throw new Error("We currently do not support exact integer digits")}return""});continue}if(e1.test(r.stem)){e.minimumIntegerDigits=r.stem.length;continue}if(Cm.test(r.stem)){if(r.options.length>1)throw new RangeError("Fraction-precision stems only accept a single optional option");r.stem.replace(Cm,function(l,u,c,d,h,p){return c==="*"?e.minimumFractionDigits=u.length:d&&d[0]==="#"?e.maximumFractionDigits=d.length:h&&p?(e.minimumFractionDigits=h.length,e.maximumFractionDigits=h.length+p.length):(e.minimumFractionDigits=u.length,e.maximumFractionDigits=u.length),""});var o=r.options[0];o==="w"?e=me(me({},e),{trailingZeroDisplay:"stripIfInteger"}):o&&(e=me(me({},e),Rm(o)));continue}if(J_.test(r.stem)){e=me(me({},e),Rm(r.stem));continue}var s=t1(r.stem);s&&(e=me(me({},e),s));var a=EE(r.stem);a&&(e=me(me({},e),a))}return e}var Za={"001":["H","h"],AC:["H","h","hb","hB"],AD:["H","hB"],AE:["h","hB","hb","H"],AF:["H","hb","hB","h"],AG:["h","hb","H","hB"],AI:["H","h","hb","hB"],AL:["h","H","hB"],AM:["H","hB"],AO:["H","hB"],AR:["H","h","hB","hb"],AS:["h","H"],AT:["H","hB"],AU:["h","hb","H","hB"],AW:["H","hB"],AX:["H"],AZ:["H","hB","h"],BA:["H","hB","h"],BB:["h","hb","H","hB"],BD:["h","hB","H"],BE:["H","hB"],BF:["H","hB"],BG:["H","hB","h"],BH:["h","hB","hb","H"],BI:["H","h"],BJ:["H","hB"],BL:["H","hB"],BM:["h","hb","H","hB"],BN:["hb","hB","h","H"],BO:["H","hB","h","hb"],BQ:["H"],BR:["H","hB"],BS:["h","hb","H","hB"],BT:["h","H"],BW:["H","h","hb","hB"],BY:["H","h"],BZ:["H","h","hb","hB"],CA:["h","hb","H","hB"],CC:["H","h","hb","hB"],CD:["hB","H"],CF:["H","h","hB"],CG:["H","hB"],CH:["H","hB","h"],CI:["H","hB"],CK:["H","h","hb","hB"],CL:["H","h","hB","hb"],CM:["H","h","hB"],CN:["H","hB","hb","h"],CO:["h","H","hB","hb"],CP:["H"],CR:["H","h","hB","hb"],CU:["H","h","hB","hb"],CV:["H","hB"],CW:["H","hB"],CX:["H","h","hb","hB"],CY:["h","H","hb","hB"],CZ:["H"],DE:["H","hB"],DG:["H","h","hb","hB"],DJ:["h","H"],DK:["H"],DM:["h","hb","H","hB"],DO:["h","H","hB","hb"],DZ:["h","hB","hb","H"],EA:["H","h","hB","hb"],EC:["H","hB","h","hb"],EE:["H","hB"],EG:["h","hB","hb","H"],EH:["h","hB","hb","H"],ER:["h","H"],ES:["H","hB","h","hb"],ET:["hB","hb","h","H"],FI:["H"],FJ:["h","hb","H","hB"],FK:["H","h","hb","hB"],FM:["h","hb","H","hB"],FO:["H","h"],FR:["H","hB"],GA:["H","hB"],GB:["H","h","hb","hB"],GD:["h","hb","H","hB"],GE:["H","hB","h"],GF:["H","hB"],GG:["H","h","hb","hB"],GH:["h","H"],GI:["H","h","hb","hB"],GL:["H","h"],GM:["h","hb","H","hB"],GN:["H","hB"],GP:["H","hB"],GQ:["H","hB","h","hb"],GR:["h","H","hb","hB"],GT:["H","h","hB","hb"],GU:["h","hb","H","hB"],GW:["H","hB"],GY:["h","hb","H","hB"],HK:["h","hB","hb","H"],HN:["H","h","hB","hb"],HR:["H","hB"],HU:["H","h"],IC:["H","h","hB","hb"],ID:["H"],IE:["H","h","hb","hB"],IL:["H","hB"],IM:["H","h","hb","hB"],IN:["h","H"],IO:["H","h","hb","hB"],IQ:["h","hB","hb","H"],IR:["hB","H"],IS:["H"],IT:["H","hB"],JE:["H","h","hb","hB"],JM:["h","hb","H","hB"],JO:["h","hB","hb","H"],JP:["H","K","h"],KE:["hB","hb","H","h"],KG:["H","h","hB","hb"],KH:["hB","h","H","hb"],KI:["h","hb","H","hB"],KM:["H","h","hB","hb"],KN:["h","hb","H","hB"],KP:["h","H","hB","hb"],KR:["h","H","hB","hb"],KW:["h","hB","hb","H"],KY:["h","hb","H","hB"],KZ:["H","hB"],LA:["H","hb","hB","h"],LB:["h","hB","hb","H"],LC:["h","hb","H","hB"],LI:["H","hB","h"],LK:["H","h","hB","hb"],LR:["h","hb","H","hB"],LS:["h","H"],LT:["H","h","hb","hB"],LU:["H","h","hB"],LV:["H","hB","hb","h"],LY:["h","hB","hb","H"],MA:["H","h","hB","hb"],MC:["H","hB"],MD:["H","hB"],ME:["H","hB","h"],MF:["H","hB"],MG:["H","h"],MH:["h","hb","H","hB"],MK:["H","h","hb","hB"],ML:["H"],MM:["hB","hb","H","h"],MN:["H","h","hb","hB"],MO:["h","hB","hb","H"],MP:["h","hb","H","hB"],MQ:["H","hB"],MR:["h","hB","hb","H"],MS:["H","h","hb","hB"],MT:["H","h"],MU:["H","h"],MV:["H","h"],MW:["h","hb","H","hB"],MX:["H","h","hB","hb"],MY:["hb","hB","h","H"],MZ:["H","hB"],NA:["h","H","hB","hb"],NC:["H","hB"],NE:["H"],NF:["H","h","hb","hB"],NG:["H","h","hb","hB"],NI:["H","h","hB","hb"],NL:["H","hB"],NO:["H","h"],NP:["H","h","hB"],NR:["H","h","hb","hB"],NU:["H","h","hb","hB"],NZ:["h","hb","H","hB"],OM:["h","hB","hb","H"],PA:["h","H","hB","hb"],PE:["H","hB","h","hb"],PF:["H","h","hB"],PG:["h","H"],PH:["h","hB","hb","H"],PK:["h","hB","H"],PL:["H","h"],PM:["H","hB"],PN:["H","h","hb","hB"],PR:["h","H","hB","hb"],PS:["h","hB","hb","H"],PT:["H","hB"],PW:["h","H"],PY:["H","h","hB","hb"],QA:["h","hB","hb","H"],RE:["H","hB"],RO:["H","hB"],RS:["H","hB","h"],RU:["H"],RW:["H","h"],SA:["h","hB","hb","H"],SB:["h","hb","H","hB"],SC:["H","h","hB"],SD:["h","hB","hb","H"],SE:["H"],SG:["h","hb","H","hB"],SH:["H","h","hb","hB"],SI:["H","hB"],SJ:["H"],SK:["H"],SL:["h","hb","H","hB"],SM:["H","h","hB"],SN:["H","h","hB"],SO:["h","H"],SR:["H","hB"],SS:["h","hb","H","hB"],ST:["H","hB"],SV:["H","h","hB","hb"],SX:["H","h","hb","hB"],SY:["h","hB","hb","H"],SZ:["h","hb","H","hB"],TA:["H","h","hb","hB"],TC:["h","hb","H","hB"],TD:["h","H","hB"],TF:["H","h","hB"],TG:["H","hB"],TH:["H","h"],TJ:["H","h"],TL:["H","hB","hb","h"],TM:["H","h"],TN:["h","hB","hb","H"],TO:["h","H"],TR:["H","hB"],TT:["h","hb","H","hB"],TW:["hB","hb","h","H"],TZ:["hB","hb","H","h"],UA:["H","hB","h"],UG:["hB","hb","H","h"],UM:["h","hb","H","hB"],US:["h","hb","H","hB"],UY:["H","h","hB","hb"],UZ:["H","hB","h"],VA:["H","h","hB"],VC:["h","hb","H","hB"],VE:["h","H","hB","hb"],VG:["h","hb","H","hB"],VI:["h","hb","H","hB"],VN:["H","h"],VU:["h","H"],WF:["H","hB"],WS:["h","H"],XK:["H","hB","h"],YE:["h","hB","hb","H"],YT:["H","hB"],ZA:["H","h","hb","hB"],ZM:["h","hb","H","hB"],ZW:["H","h"],"af-ZA":["H","h","hB","hb"],"ar-001":["h","hB","hb","H"],"ca-ES":["H","h","hB"],"en-001":["h","hb","H","hB"],"es-BO":["H","h","hB","hb"],"es-BR":["H","h","hB","hb"],"es-EC":["H","h","hB","hb"],"es-ES":["H","h","hB","hb"],"es-GQ":["H","h","hB","hb"],"es-PE":["H","h","hB","hb"],"fr-CA":["H","h","hB"],"gl-ES":["H","h","hB"],"gu-IN":["hB","hb","h","H"],"hi-IN":["hB","h","H"],"it-CH":["H","h","hB"],"it-IT":["H","h","hB"],"kn-IN":["hB","h","H"],"ml-IN":["hB","h","H"],"mr-IN":["hB","hb","h","H"],"pa-IN":["hB","hb","h","H"],"ta-IN":["hB","h","hb","H"],"te-IN":["hB","h","H"],"zu-ZA":["H","hB","hb","h"]};function TE(t,e){for(var n="",i=0;i<t.length;i++){var r=t.charAt(i);if(r==="j"){for(var o=0;i+1<t.length&&t.charAt(i+1)===r;)o++,i++;var s=1+(o&1),a=o<2?1:3+(o>>1),l="a",u=wE(e);for((u=="H"||u=="k")&&(a=0);a-- >0;)n+=l;for(;s-- >0;)n=u+n}else r==="J"?n+="H":n+=r}return n}function wE(t){var e=t.hourCycle;if(e===void 0&&t.hourCycles&&t.hourCycles.length&&(e=t.hourCycles[0]),e)switch(e){case"h24":return"k";case"h23":return"H";case"h12":return"h";case"h11":return"K";default:throw new Error("Invalid hourCycle")}var n=t.language,i;n!=="root"&&(i=t.maximize().region);var r=Za[i||""]||Za[n||""]||Za["".concat(n,"-001")]||Za["001"];return r[0]}var Gc,AE=new RegExp("^".concat(Q_.source,"*")),CE=new RegExp("".concat(Q_.source,"*$"));function je(t,e){return{start:t,end:e}}var RE=!!String.prototype.startsWith&&"_a".startsWith("a",1),bE=!!String.fromCodePoint,PE=!!Object.fromEntries,LE=!!String.prototype.codePointAt,NE=!!String.prototype.trimStart,IE=!!String.prototype.trimEnd,DE=!!Number.isSafeInteger,UE=DE?Number.isSafeInteger:function(t){return typeof t=="number"&&isFinite(t)&&Math.floor(t)===t&&Math.abs(t)<=9007199254740991},Sd=!0;try{var FE=i1("([^\\p{White_Space}\\p{Pattern_Syntax}]*)","yu");Sd=((Gc=FE.exec("a"))===null||Gc===void 0?void 0:Gc[0])==="a"}catch{Sd=!1}var Pm=RE?function(e,n,i){return e.startsWith(n,i)}:function(e,n,i){return e.slice(i,i+n.length)===n},Ed=bE?String.fromCodePoint:function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];for(var i="",r=e.length,o=0,s;r>o;){if(s=e[o++],s>1114111)throw RangeError(s+" is not a valid code point");i+=s<65536?String.fromCharCode(s):String.fromCharCode(((s-=65536)>>10)+55296,s%1024+56320)}return i},Lm=PE?Object.fromEntries:function(e){for(var n={},i=0,r=e;i<r.length;i++){var o=r[i],s=o[0],a=o[1];n[s]=a}return n},n1=LE?function(e,n){return e.codePointAt(n)}:function(e,n){var i=e.length;if(!(n<0||n>=i)){var r=e.charCodeAt(n),o;return r<55296||r>56319||n+1===i||(o=e.charCodeAt(n+1))<56320||o>57343?r:(r-55296<<10)+(o-56320)+65536}},OE=NE?function(e){return e.trimStart()}:function(e){return e.replace(AE,"")},BE=IE?function(e){return e.trimEnd()}:function(e){return e.replace(CE,"")};function i1(t,e){return new RegExp(t,e)}var Md;if(Sd){var Nm=i1("([^\\p{White_Space}\\p{Pattern_Syntax}]*)","yu");Md=function(e,n){var i;Nm.lastIndex=n;var r=Nm.exec(e);return(i=r[1])!==null&&i!==void 0?i:""}}else Md=function(e,n){for(var i=[];;){var r=n1(e,n);if(r===void 0||r1(r)||GE(r))break;i.push(r),n+=r>=65536?2:1}return Ed.apply(void 0,i)};var kE=function(){function t(e,n){n===void 0&&(n={}),this.message=e,this.position={offset:0,line:1,column:1},this.ignoreTag=!!n.ignoreTag,this.locale=n.locale,this.requiresOtherClause=!!n.requiresOtherClause,this.shouldParseSkeletons=!!n.shouldParseSkeletons}return t.prototype.parse=function(){if(this.offset()!==0)throw Error("parser can only be used once");return this.parseMessage(0,"",!1)},t.prototype.parseMessage=function(e,n,i){for(var r=[];!this.isEOF();){var o=this.char();if(o===123){var s=this.parseArgument(e,i);if(s.err)return s;r.push(s.val)}else{if(o===125&&e>0)break;if(o===35&&(n==="plural"||n==="selectordinal")){var a=this.clonePosition();this.bump(),r.push({type:ft.pound,location:je(a,this.clonePosition())})}else if(o===60&&!this.ignoreTag&&this.peek()===47){if(i)break;return this.error($e.UNMATCHED_CLOSING_TAG,je(this.clonePosition(),this.clonePosition()))}else if(o===60&&!this.ignoreTag&&Td(this.peek()||0)){var s=this.parseTag(e,n);if(s.err)return s;r.push(s.val)}else{var s=this.parseLiteral(e,n);if(s.err)return s;r.push(s.val)}}}return{val:r,err:null}},t.prototype.parseTag=function(e,n){var i=this.clonePosition();this.bump();var r=this.parseTagName();if(this.bumpSpace(),this.bumpIf("/>"))return{val:{type:ft.literal,value:"<".concat(r,"/>"),location:je(i,this.clonePosition())},err:null};if(this.bumpIf(">")){var o=this.parseMessage(e+1,n,!0);if(o.err)return o;var s=o.val,a=this.clonePosition();if(this.bumpIf("</")){if(this.isEOF()||!Td(this.char()))return this.error($e.INVALID_TAG,je(a,this.clonePosition()));var l=this.clonePosition(),u=this.parseTagName();return r!==u?this.error($e.UNMATCHED_CLOSING_TAG,je(l,this.clonePosition())):(this.bumpSpace(),this.bumpIf(">")?{val:{type:ft.tag,value:r,children:s,location:je(i,this.clonePosition())},err:null}:this.error($e.INVALID_TAG,je(a,this.clonePosition())))}else return this.error($e.UNCLOSED_TAG,je(i,this.clonePosition()))}else return this.error($e.INVALID_TAG,je(i,this.clonePosition()))},t.prototype.parseTagName=function(){var e=this.offset();for(this.bump();!this.isEOF()&&zE(this.char());)this.bump();return this.message.slice(e,this.offset())},t.prototype.parseLiteral=function(e,n){for(var i=this.clonePosition(),r="";;){var o=this.tryParseQuote(n);if(o){r+=o;continue}var s=this.tryParseUnquoted(e,n);if(s){r+=s;continue}var a=this.tryParseLeftAngleBracket();if(a){r+=a;continue}break}var l=je(i,this.clonePosition());return{val:{type:ft.literal,value:r,location:l},err:null}},t.prototype.tryParseLeftAngleBracket=function(){return!this.isEOF()&&this.char()===60&&(this.ignoreTag||!HE(this.peek()||0))?(this.bump(),"<"):null},t.prototype.tryParseQuote=function(e){if(this.isEOF()||this.char()!==39)return null;switch(this.peek()){case 39:return this.bump(),this.bump(),"'";case 123:case 60:case 62:case 125:break;case 35:if(e==="plural"||e==="selectordinal")break;return null;default:return null}this.bump();var n=[this.char()];for(this.bump();!this.isEOF();){var i=this.char();if(i===39)if(this.peek()===39)n.push(39),this.bump();else{this.bump();break}else n.push(i);this.bump()}return Ed.apply(void 0,n)},t.prototype.tryParseUnquoted=function(e,n){if(this.isEOF())return null;var i=this.char();return i===60||i===123||i===35&&(n==="plural"||n==="selectordinal")||i===125&&e>0?null:(this.bump(),Ed(i))},t.prototype.parseArgument=function(e,n){var i=this.clonePosition();if(this.bump(),this.bumpSpace(),this.isEOF())return this.error($e.EXPECT_ARGUMENT_CLOSING_BRACE,je(i,this.clonePosition()));if(this.char()===125)return this.bump(),this.error($e.EMPTY_ARGUMENT,je(i,this.clonePosition()));var r=this.parseIdentifierIfPossible().value;if(!r)return this.error($e.MALFORMED_ARGUMENT,je(i,this.clonePosition()));if(this.bumpSpace(),this.isEOF())return this.error($e.EXPECT_ARGUMENT_CLOSING_BRACE,je(i,this.clonePosition()));switch(this.char()){case 125:return this.bump(),{val:{type:ft.argument,value:r,location:je(i,this.clonePosition())},err:null};case 44:return this.bump(),this.bumpSpace(),this.isEOF()?this.error($e.EXPECT_ARGUMENT_CLOSING_BRACE,je(i,this.clonePosition())):this.parseArgumentOptions(e,n,r,i);default:return this.error($e.MALFORMED_ARGUMENT,je(i,this.clonePosition()))}},t.prototype.parseIdentifierIfPossible=function(){var e=this.clonePosition(),n=this.offset(),i=Md(this.message,n),r=n+i.length;this.bumpTo(r);var o=this.clonePosition(),s=je(e,o);return{value:i,location:s}},t.prototype.parseArgumentOptions=function(e,n,i,r){var o,s=this.clonePosition(),a=this.parseIdentifierIfPossible().value,l=this.clonePosition();switch(a){case"":return this.error($e.EXPECT_ARGUMENT_TYPE,je(s,l));case"number":case"date":case"time":{this.bumpSpace();var u=null;if(this.bumpIf(",")){this.bumpSpace();var c=this.clonePosition(),d=this.parseSimpleArgStyleIfPossible();if(d.err)return d;var h=BE(d.val);if(h.length===0)return this.error($e.EXPECT_ARGUMENT_STYLE,je(this.clonePosition(),this.clonePosition()));var p=je(c,this.clonePosition());u={style:h,styleLocation:p}}var _=this.tryParseArgumentClose(r);if(_.err)return _;var x=je(r,this.clonePosition());if(u&&Pm(u==null?void 0:u.style,"::",0)){var g=OE(u.style.slice(2));if(a==="number"){var d=this.parseNumberSkeletonFromString(g,u.styleLocation);return d.err?d:{val:{type:ft.number,value:i,location:x,style:d.val},err:null}}else{if(g.length===0)return this.error($e.EXPECT_DATE_TIME_SKELETON,x);var f=g;this.locale&&(f=TE(g,this.locale));var h={type:os.dateTime,pattern:f,location:u.styleLocation,parsedOptions:this.shouldParseSkeletons?vE(f):{}},v=a==="date"?ft.date:ft.time;return{val:{type:v,value:i,location:x,style:h},err:null}}}return{val:{type:a==="number"?ft.number:a==="date"?ft.date:ft.time,value:i,location:x,style:(o=u==null?void 0:u.style)!==null&&o!==void 0?o:null},err:null}}case"plural":case"selectordinal":case"select":{var m=this.clonePosition();if(this.bumpSpace(),!this.bumpIf(","))return this.error($e.EXPECT_SELECT_ARGUMENT_OPTIONS,je(m,me({},m)));this.bumpSpace();var y=this.parseIdentifierIfPossible(),R=0;if(a!=="select"&&y.value==="offset"){if(!this.bumpIf(":"))return this.error($e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,je(this.clonePosition(),this.clonePosition()));this.bumpSpace();var d=this.tryParseDecimalInteger($e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,$e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);if(d.err)return d;this.bumpSpace(),y=this.parseIdentifierIfPossible(),R=d.val}var A=this.tryParsePluralOrSelectOptions(e,a,n,y);if(A.err)return A;var _=this.tryParseArgumentClose(r);if(_.err)return _;var M=je(r,this.clonePosition());return a==="select"?{val:{type:ft.select,value:i,options:Lm(A.val),location:M},err:null}:{val:{type:ft.plural,value:i,options:Lm(A.val),offset:R,pluralType:a==="plural"?"cardinal":"ordinal",location:M},err:null}}default:return this.error($e.INVALID_ARGUMENT_TYPE,je(s,l))}},t.prototype.tryParseArgumentClose=function(e){return this.isEOF()||this.char()!==125?this.error($e.EXPECT_ARGUMENT_CLOSING_BRACE,je(e,this.clonePosition())):(this.bump(),{val:!0,err:null})},t.prototype.parseSimpleArgStyleIfPossible=function(){for(var e=0,n=this.clonePosition();!this.isEOF();){var i=this.char();switch(i){case 39:{this.bump();var r=this.clonePosition();if(!this.bumpUntil("'"))return this.error($e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE,je(r,this.clonePosition()));this.bump();break}case 123:{e+=1,this.bump();break}case 125:{if(e>0)e-=1;else return{val:this.message.slice(n.offset,this.offset()),err:null};break}default:this.bump();break}}return{val:this.message.slice(n.offset,this.offset()),err:null}},t.prototype.parseNumberSkeletonFromString=function(e,n){var i=[];try{i=xE(e)}catch{return this.error($e.INVALID_NUMBER_SKELETON,n)}return{val:{type:os.number,tokens:i,location:n,parsedOptions:this.shouldParseSkeletons?ME(i):{}},err:null}},t.prototype.tryParsePluralOrSelectOptions=function(e,n,i,r){for(var o,s=!1,a=[],l=new Set,u=r.value,c=r.location;;){if(u.length===0){var d=this.clonePosition();if(n!=="select"&&this.bumpIf("=")){var h=this.tryParseDecimalInteger($e.EXPECT_PLURAL_ARGUMENT_SELECTOR,$e.INVALID_PLURAL_ARGUMENT_SELECTOR);if(h.err)return h;c=je(d,this.clonePosition()),u=this.message.slice(d.offset,this.offset())}else break}if(l.has(u))return this.error(n==="select"?$e.DUPLICATE_SELECT_ARGUMENT_SELECTOR:$e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR,c);u==="other"&&(s=!0),this.bumpSpace();var p=this.clonePosition();if(!this.bumpIf("{"))return this.error(n==="select"?$e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT:$e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT,je(this.clonePosition(),this.clonePosition()));var _=this.parseMessage(e+1,n,i);if(_.err)return _;var x=this.tryParseArgumentClose(p);if(x.err)return x;a.push([u,{value:_.val,location:je(p,this.clonePosition())}]),l.add(u),this.bumpSpace(),o=this.parseIdentifierIfPossible(),u=o.value,c=o.location}return a.length===0?this.error(n==="select"?$e.EXPECT_SELECT_ARGUMENT_SELECTOR:$e.EXPECT_PLURAL_ARGUMENT_SELECTOR,je(this.clonePosition(),this.clonePosition())):this.requiresOtherClause&&!s?this.error($e.MISSING_OTHER_CLAUSE,je(this.clonePosition(),this.clonePosition())):{val:a,err:null}},t.prototype.tryParseDecimalInteger=function(e,n){var i=1,r=this.clonePosition();this.bumpIf("+")||this.bumpIf("-")&&(i=-1);for(var o=!1,s=0;!this.isEOF();){var a=this.char();if(a>=48&&a<=57)o=!0,s=s*10+(a-48),this.bump();else break}var l=je(r,this.clonePosition());return o?(s*=i,UE(s)?{val:s,err:null}:this.error(n,l)):this.error(e,l)},t.prototype.offset=function(){return this.position.offset},t.prototype.isEOF=function(){return this.offset()===this.message.length},t.prototype.clonePosition=function(){return{offset:this.position.offset,line:this.position.line,column:this.position.column}},t.prototype.char=function(){var e=this.position.offset;if(e>=this.message.length)throw Error("out of bound");var n=n1(this.message,e);if(n===void 0)throw Error("Offset ".concat(e," is at invalid UTF-16 code unit boundary"));return n},t.prototype.error=function(e,n){return{val:null,err:{kind:e,message:this.message,location:n}}},t.prototype.bump=function(){if(!this.isEOF()){var e=this.char();e===10?(this.position.line+=1,this.position.column=1,this.position.offset+=1):(this.position.column+=1,this.position.offset+=e<65536?1:2)}},t.prototype.bumpIf=function(e){if(Pm(this.message,e,this.offset())){for(var n=0;n<e.length;n++)this.bump();return!0}return!1},t.prototype.bumpUntil=function(e){var n=this.offset(),i=this.message.indexOf(e,n);return i>=0?(this.bumpTo(i),!0):(this.bumpTo(this.message.length),!1)},t.prototype.bumpTo=function(e){if(this.offset()>e)throw Error("targetOffset ".concat(e," must be greater than or equal to the current offset ").concat(this.offset()));for(e=Math.min(e,this.message.length);;){var n=this.offset();if(n===e)break;if(n>e)throw Error("targetOffset ".concat(e," is at invalid UTF-16 code unit boundary"));if(this.bump(),this.isEOF())break}},t.prototype.bumpSpace=function(){for(;!this.isEOF()&&r1(this.char());)this.bump()},t.prototype.peek=function(){if(this.isEOF())return null;var e=this.char(),n=this.offset(),i=this.message.charCodeAt(n+(e>=65536?2:1));return i??null},t}();function Td(t){return t>=97&&t<=122||t>=65&&t<=90}function HE(t){return Td(t)||t===47}function zE(t){return t===45||t===46||t>=48&&t<=57||t===95||t>=97&&t<=122||t>=65&&t<=90||t==183||t>=192&&t<=214||t>=216&&t<=246||t>=248&&t<=893||t>=895&&t<=8191||t>=8204&&t<=8205||t>=8255&&t<=8256||t>=8304&&t<=8591||t>=11264&&t<=12271||t>=12289&&t<=55295||t>=63744&&t<=64975||t>=65008&&t<=65533||t>=65536&&t<=983039}function r1(t){return t>=9&&t<=13||t===32||t===133||t>=8206&&t<=8207||t===8232||t===8233}function GE(t){return t>=33&&t<=35||t===36||t>=37&&t<=39||t===40||t===41||t===42||t===43||t===44||t===45||t>=46&&t<=47||t>=58&&t<=59||t>=60&&t<=62||t>=63&&t<=64||t===91||t===92||t===93||t===94||t===96||t===123||t===124||t===125||t===126||t===161||t>=162&&t<=165||t===166||t===167||t===169||t===171||t===172||t===174||t===176||t===177||t===182||t===187||t===191||t===215||t===247||t>=8208&&t<=8213||t>=8214&&t<=8215||t===8216||t===8217||t===8218||t>=8219&&t<=8220||t===8221||t===8222||t===8223||t>=8224&&t<=8231||t>=8240&&t<=8248||t===8249||t===8250||t>=8251&&t<=8254||t>=8257&&t<=8259||t===8260||t===8261||t===8262||t>=8263&&t<=8273||t===8274||t===8275||t>=8277&&t<=8286||t>=8592&&t<=8596||t>=8597&&t<=8601||t>=8602&&t<=8603||t>=8604&&t<=8607||t===8608||t>=8609&&t<=8610||t===8611||t>=8612&&t<=8613||t===8614||t>=8615&&t<=8621||t===8622||t>=8623&&t<=8653||t>=8654&&t<=8655||t>=8656&&t<=8657||t===8658||t===8659||t===8660||t>=8661&&t<=8691||t>=8692&&t<=8959||t>=8960&&t<=8967||t===8968||t===8969||t===8970||t===8971||t>=8972&&t<=8991||t>=8992&&t<=8993||t>=8994&&t<=9e3||t===9001||t===9002||t>=9003&&t<=9083||t===9084||t>=9085&&t<=9114||t>=9115&&t<=9139||t>=9140&&t<=9179||t>=9180&&t<=9185||t>=9186&&t<=9254||t>=9255&&t<=9279||t>=9280&&t<=9290||t>=9291&&t<=9311||t>=9472&&t<=9654||t===9655||t>=9656&&t<=9664||t===9665||t>=9666&&t<=9719||t>=9720&&t<=9727||t>=9728&&t<=9838||t===9839||t>=9840&&t<=10087||t===10088||t===10089||t===10090||t===10091||t===10092||t===10093||t===10094||t===10095||t===10096||t===10097||t===10098||t===10099||t===10100||t===10101||t>=10132&&t<=10175||t>=10176&&t<=10180||t===10181||t===10182||t>=10183&&t<=10213||t===10214||t===10215||t===10216||t===10217||t===10218||t===10219||t===10220||t===10221||t===10222||t===10223||t>=10224&&t<=10239||t>=10240&&t<=10495||t>=10496&&t<=10626||t===10627||t===10628||t===10629||t===10630||t===10631||t===10632||t===10633||t===10634||t===10635||t===10636||t===10637||t===10638||t===10639||t===10640||t===10641||t===10642||t===10643||t===10644||t===10645||t===10646||t===10647||t===10648||t>=10649&&t<=10711||t===10712||t===10713||t===10714||t===10715||t>=10716&&t<=10747||t===10748||t===10749||t>=10750&&t<=11007||t>=11008&&t<=11055||t>=11056&&t<=11076||t>=11077&&t<=11078||t>=11079&&t<=11084||t>=11085&&t<=11123||t>=11124&&t<=11125||t>=11126&&t<=11157||t===11158||t>=11159&&t<=11263||t>=11776&&t<=11777||t===11778||t===11779||t===11780||t===11781||t>=11782&&t<=11784||t===11785||t===11786||t===11787||t===11788||t===11789||t>=11790&&t<=11798||t===11799||t>=11800&&t<=11801||t===11802||t===11803||t===11804||t===11805||t>=11806&&t<=11807||t===11808||t===11809||t===11810||t===11811||t===11812||t===11813||t===11814||t===11815||t===11816||t===11817||t>=11818&&t<=11822||t===11823||t>=11824&&t<=11833||t>=11834&&t<=11835||t>=11836&&t<=11839||t===11840||t===11841||t===11842||t>=11843&&t<=11855||t>=11856&&t<=11857||t===11858||t>=11859&&t<=11903||t>=12289&&t<=12291||t===12296||t===12297||t===12298||t===12299||t===12300||t===12301||t===12302||t===12303||t===12304||t===12305||t>=12306&&t<=12307||t===12308||t===12309||t===12310||t===12311||t===12312||t===12313||t===12314||t===12315||t===12316||t===12317||t>=12318&&t<=12319||t===12320||t===12336||t===64830||t===64831||t>=65093&&t<=65094}function wd(t){t.forEach(function(e){if(delete e.location,Y_(e)||q_(e))for(var n in e.options)delete e.options[n].location,wd(e.options[n].value);else X_(e)&&K_(e.style)||($_(e)||j_(e))&&yd(e.style)?delete e.style.location:Z_(e)&&wd(e.children)})}function VE(t,e){e===void 0&&(e={}),e=me({shouldParseSkeletons:!0,requiresOtherClause:!0},e);var n=new kE(t,e).parse();if(n.err){var i=SyntaxError($e[n.err.kind]);throw i.location=n.err.location,i.originalMessage=n.err.message,i}return e!=null&&e.captureLocation||wd(n.val),n.val}function ci(t,e){var n=e&&e.cache?e.cache:qE,i=e&&e.serializer?e.serializer:YE,r=e&&e.strategy?e.strategy:XE;return r(t,{cache:n,serializer:i})}function WE(t){return t==null||typeof t=="number"||typeof t=="boolean"}function o1(t,e,n,i){var r=WE(i)?i:n(i),o=e.get(r);return typeof o>"u"&&(o=t.call(this,i),e.set(r,o)),o}function s1(t,e,n){var i=Array.prototype.slice.call(arguments,3),r=n(i),o=e.get(r);return typeof o>"u"&&(o=t.apply(this,i),e.set(r,o)),o}function Wh(t,e,n,i,r){return n.bind(e,t,i,r)}function XE(t,e){var n=t.length===1?o1:s1;return Wh(t,this,n,e.cache.create(),e.serializer)}function $E(t,e){return Wh(t,this,s1,e.cache.create(),e.serializer)}function jE(t,e){return Wh(t,this,o1,e.cache.create(),e.serializer)}var YE=function(){return JSON.stringify(arguments)};function Xh(){this.cache=Object.create(null)}Xh.prototype.get=function(t){return this.cache[t]};Xh.prototype.set=function(t,e){this.cache[t]=e};var qE={create:function(){return new Xh}},fi={variadic:$E,monadic:jE},xi;(function(t){t.MISSING_VALUE="MISSING_VALUE",t.INVALID_VALUE="INVALID_VALUE",t.MISSING_INTL_API="MISSING_INTL_API"})(xi||(xi={}));var Mr=function(t){Vn(e,t);function e(n,i,r){var o=t.call(this,n)||this;return o.code=i,o.originalMessage=r,o}return e.prototype.toString=function(){return"[formatjs Error: ".concat(this.code,"] ").concat(this.message)},e}(Error),Im=function(t){Vn(e,t);function e(n,i,r,o){return t.call(this,'Invalid values for "'.concat(n,'": "').concat(i,'". Options are "').concat(Object.keys(r).join('", "'),'"'),xi.INVALID_VALUE,o)||this}return e}(Mr),ZE=function(t){Vn(e,t);function e(n,i,r){return t.call(this,'Value for "'.concat(n,'" must be of type ').concat(i),xi.INVALID_VALUE,r)||this}return e}(Mr),KE=function(t){Vn(e,t);function e(n,i){return t.call(this,'The intl string context variable "'.concat(n,'" was not provided to the string "').concat(i,'"'),xi.MISSING_VALUE,i)||this}return e}(Mr),on;(function(t){t[t.literal=0]="literal",t[t.object=1]="object"})(on||(on={}));function QE(t){return t.length<2?t:t.reduce(function(e,n){var i=e[e.length-1];return!i||i.type!==on.literal||n.type!==on.literal?e.push(n):i.value+=n.value,e},[])}function a1(t){return typeof t=="function"}function Fl(t,e,n,i,r,o,s){if(t.length===1&&Am(t[0]))return[{type:on.literal,value:t[0].value}];for(var a=[],l=0,u=t;l<u.length;l++){var c=u[l];if(Am(c)){a.push({type:on.literal,value:c.value});continue}if(mE(c)){typeof o=="number"&&a.push({type:on.literal,value:n.getNumberFormat(e).format(o)});continue}var d=c.value;if(!(r&&d in r))throw new KE(d,s);var h=r[d];if(pE(c)){(!h||typeof h=="string"||typeof h=="number")&&(h=typeof h=="string"||typeof h=="number"?String(h):""),a.push({type:typeof h=="string"?on.literal:on.object,value:h});continue}if($_(c)){var p=typeof c.style=="string"?i.date[c.style]:yd(c.style)?c.style.parsedOptions:void 0;a.push({type:on.literal,value:n.getDateTimeFormat(e,p).format(h)});continue}if(j_(c)){var p=typeof c.style=="string"?i.time[c.style]:yd(c.style)?c.style.parsedOptions:i.time.medium;a.push({type:on.literal,value:n.getDateTimeFormat(e,p).format(h)});continue}if(X_(c)){var p=typeof c.style=="string"?i.number[c.style]:K_(c.style)?c.style.parsedOptions:void 0;p&&p.scale&&(h=h*(p.scale||1)),a.push({type:on.literal,value:n.getNumberFormat(e,p).format(h)});continue}if(Z_(c)){var _=c.children,x=c.value,g=r[x];if(!a1(g))throw new ZE(x,"function",s);var f=Fl(_,e,n,i,r,o),v=g(f.map(function(R){return R.value}));Array.isArray(v)||(v=[v]),a.push.apply(a,v.map(function(R){return{type:typeof R=="string"?on.literal:on.object,value:R}}))}if(Y_(c)){var m=c.options[h]||c.options.other;if(!m)throw new Im(c.value,h,Object.keys(c.options),s);a.push.apply(a,Fl(m.value,e,n,i,r));continue}if(q_(c)){var m=c.options["=".concat(h)];if(!m){if(!Intl.PluralRules)throw new Mr(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`,xi.MISSING_INTL_API,s);var y=n.getPluralRules(e,{type:c.pluralType}).select(h-(c.offset||0));m=c.options[y]||c.options.other}if(!m)throw new Im(c.value,h,Object.keys(c.options),s);a.push.apply(a,Fl(m.value,e,n,i,r,h-(c.offset||0)));continue}}return QE(a)}function JE(t,e){return e?me(me(me({},t||{}),e||{}),Object.keys(t).reduce(function(n,i){return n[i]=me(me({},t[i]),e[i]||{}),n},{})):t}function eM(t,e){return e?Object.keys(t).reduce(function(n,i){return n[i]=JE(t[i],e[i]),n},me({},t)):t}function Vc(t){return{create:function(){return{get:function(e){return t[e]},set:function(e,n){t[e]=n}}}}}function tM(t){return t===void 0&&(t={number:{},dateTime:{},pluralRules:{}}),{getNumberFormat:ci(function(){for(var e,n=[],i=0;i<arguments.length;i++)n[i]=arguments[i];return new((e=Intl.NumberFormat).bind.apply(e,di([void 0],n,!1)))},{cache:Vc(t.number),strategy:fi.variadic}),getDateTimeFormat:ci(function(){for(var e,n=[],i=0;i<arguments.length;i++)n[i]=arguments[i];return new((e=Intl.DateTimeFormat).bind.apply(e,di([void 0],n,!1)))},{cache:Vc(t.dateTime),strategy:fi.variadic}),getPluralRules:ci(function(){for(var e,n=[],i=0;i<arguments.length;i++)n[i]=arguments[i];return new((e=Intl.PluralRules).bind.apply(e,di([void 0],n,!1)))},{cache:Vc(t.pluralRules),strategy:fi.variadic})}}var l1=function(){function t(e,n,i,r){var o=this;if(n===void 0&&(n=t.defaultLocale),this.formatterCache={number:{},dateTime:{},pluralRules:{}},this.format=function(l){var u=o.formatToParts(l);if(u.length===1)return u[0].value;var c=u.reduce(function(d,h){return!d.length||h.type!==on.literal||typeof d[d.length-1]!="string"?d.push(h.value):d[d.length-1]+=h.value,d},[]);return c.length<=1?c[0]||"":c},this.formatToParts=function(l){return Fl(o.ast,o.locales,o.formatters,o.formats,l,void 0,o.message)},this.resolvedOptions=function(){var l;return{locale:((l=o.resolvedLocale)===null||l===void 0?void 0:l.toString())||Intl.NumberFormat.supportedLocalesOf(o.locales)[0]}},this.getAst=function(){return o.ast},this.locales=n,this.resolvedLocale=t.resolveLocale(n),typeof e=="string"){if(this.message=e,!t.__parse)throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");var s=r||{};s.formatters;var a=rs(s,["formatters"]);this.ast=t.__parse(e,me(me({},a),{locale:this.resolvedLocale}))}else this.ast=e;if(!Array.isArray(this.ast))throw new TypeError("A message must be provided as a String or AST.");this.formats=eM(t.formats,i),this.formatters=r&&r.formatters||tM(this.formatterCache)}return Object.defineProperty(t,"defaultLocale",{get:function(){return t.memoizedDefaultLocale||(t.memoizedDefaultLocale=new Intl.NumberFormat().resolvedOptions().locale),t.memoizedDefaultLocale},enumerable:!1,configurable:!0}),t.memoizedDefaultLocale=null,t.resolveLocale=function(e){if(!(typeof Intl.Locale>"u")){var n=Intl.NumberFormat.supportedLocalesOf(e);return n.length>0?new Intl.Locale(n[0]):new Intl.Locale(typeof e=="string"?e:e[0])}},t.__parse=VE,t.formats={number:{integer:{maximumFractionDigits:0},currency:{style:"currency"},percent:{style:"percent"}},date:{short:{month:"numeric",day:"numeric",year:"2-digit"},medium:{month:"short",day:"numeric",year:"numeric"},long:{month:"long",day:"numeric",year:"numeric"},full:{weekday:"long",month:"long",day:"numeric",year:"numeric"}},time:{short:{hour:"numeric",minute:"numeric"},medium:{hour:"numeric",minute:"numeric",second:"numeric"},long:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"},full:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"}}},t}(),Jr;(function(t){t.FORMAT_ERROR="FORMAT_ERROR",t.UNSUPPORTED_FORMATTER="UNSUPPORTED_FORMATTER",t.INVALID_CONFIG="INVALID_CONFIG",t.MISSING_DATA="MISSING_DATA",t.MISSING_TRANSLATION="MISSING_TRANSLATION"})(Jr||(Jr={}));var wa=function(t){Vn(e,t);function e(n,i,r){var o=this,s=r?r instanceof Error?r:new Error(String(r)):void 0;return o=t.call(this,"[@formatjs/intl Error ".concat(n,"] ").concat(i,`
`).concat(s?`
`.concat(s.message,`
`).concat(s.stack):""))||this,o.code=n,typeof Error.captureStackTrace=="function"&&Error.captureStackTrace(o,e),o}return e}(Error),nM=function(t){Vn(e,t);function e(n,i){return t.call(this,Jr.UNSUPPORTED_FORMATTER,n,i)||this}return e}(wa),iM=function(t){Vn(e,t);function e(n,i){return t.call(this,Jr.INVALID_CONFIG,n,i)||this}return e}(wa),Dm=function(t){Vn(e,t);function e(n,i){return t.call(this,Jr.MISSING_DATA,n,i)||this}return e}(wa),Wn=function(t){Vn(e,t);function e(n,i,r){var o=t.call(this,Jr.FORMAT_ERROR,"".concat(n,`
Locale: `).concat(i,`
`),r)||this;return o.locale=i,o}return e}(wa),Wc=function(t){Vn(e,t);function e(n,i,r,o){var s=t.call(this,"".concat(n,`
MessageID: `).concat(r==null?void 0:r.id,`
Default Message: `).concat(r==null?void 0:r.defaultMessage,`
Description: `).concat(r==null?void 0:r.description,`
`),i,o)||this;return s.descriptor=r,s.locale=i,s}return e}(Wn),rM=function(t){Vn(e,t);function e(n,i){var r=t.call(this,Jr.MISSING_TRANSLATION,'Missing message: "'.concat(n.id,'" for locale "').concat(i,'", using ').concat(n.defaultMessage?"default message (".concat(typeof n.defaultMessage=="string"?n.defaultMessage:n.defaultMessage.map(function(o){var s;return(s=o.value)!==null&&s!==void 0?s:JSON.stringify(o)}).join(),")"):"id"," as fallback."))||this;return r.descriptor=n,r}return e}(wa);function so(t,e,n){return n===void 0&&(n={}),e.reduce(function(i,r){return r in t?i[r]=t[r]:r in n&&(i[r]=n[r]),i},{})}var oM=function(t){},sM=function(t){},u1={formats:{},messages:{},timeZone:void 0,defaultLocale:"en",defaultFormats:{},fallbackOnEmptyString:!0,onError:oM,onWarn:sM};function c1(){return{dateTime:{},number:{},message:{},relativeTime:{},pluralRules:{},list:{},displayNames:{}}}function Ar(t){return{create:function(){return{get:function(e){return t[e]},set:function(e,n){t[e]=n}}}}}function aM(t){t===void 0&&(t=c1());var e=Intl.RelativeTimeFormat,n=Intl.ListFormat,i=Intl.DisplayNames,r=ci(function(){for(var a,l=[],u=0;u<arguments.length;u++)l[u]=arguments[u];return new((a=Intl.DateTimeFormat).bind.apply(a,di([void 0],l,!1)))},{cache:Ar(t.dateTime),strategy:fi.variadic}),o=ci(function(){for(var a,l=[],u=0;u<arguments.length;u++)l[u]=arguments[u];return new((a=Intl.NumberFormat).bind.apply(a,di([void 0],l,!1)))},{cache:Ar(t.number),strategy:fi.variadic}),s=ci(function(){for(var a,l=[],u=0;u<arguments.length;u++)l[u]=arguments[u];return new((a=Intl.PluralRules).bind.apply(a,di([void 0],l,!1)))},{cache:Ar(t.pluralRules),strategy:fi.variadic});return{getDateTimeFormat:r,getNumberFormat:o,getMessageFormat:ci(function(a,l,u,c){return new l1(a,l,u,me({formatters:{getNumberFormat:o,getDateTimeFormat:r,getPluralRules:s}},c||{}))},{cache:Ar(t.message),strategy:fi.variadic}),getRelativeTimeFormat:ci(function(){for(var a=[],l=0;l<arguments.length;l++)a[l]=arguments[l];return new(e.bind.apply(e,di([void 0],a,!1)))},{cache:Ar(t.relativeTime),strategy:fi.variadic}),getPluralRules:s,getListFormat:ci(function(){for(var a=[],l=0;l<arguments.length;l++)a[l]=arguments[l];return new(n.bind.apply(n,di([void 0],a,!1)))},{cache:Ar(t.list),strategy:fi.variadic}),getDisplayNames:ci(function(){for(var a=[],l=0;l<arguments.length;l++)a[l]=arguments[l];return new(i.bind.apply(i,di([void 0],a,!1)))},{cache:Ar(t.displayNames),strategy:fi.variadic})}}function $h(t,e,n,i){var r=t&&t[e],o;if(r&&(o=r[n]),o)return o;i(new nM("No ".concat(e," format named: ").concat(n)))}function Ka(t,e){return Object.keys(t).reduce(function(n,i){return n[i]=me({timeZone:e},t[i]),n},{})}function Um(t,e){var n=Object.keys(me(me({},t),e));return n.reduce(function(i,r){return i[r]=me(me({},t[r]||{}),e[r]||{}),i},{})}function Fm(t,e){if(!e)return t;var n=l1.formats;return me(me(me({},n),t),{date:Um(Ka(n.date,e),Ka(t.date||{},e)),time:Um(Ka(n.time,e),Ka(t.time||{},e))})}var Ad=function(t,e,n,i,r){var o=t.locale,s=t.formats,a=t.messages,l=t.defaultLocale,u=t.defaultFormats,c=t.fallbackOnEmptyString,d=t.onError,h=t.timeZone,p=t.defaultRichTextElements;n===void 0&&(n={id:""});var _=n.id,x=n.defaultMessage;W_(!!_,"[@formatjs/intl] An `id` must be provided to format a message. You can either:\n1. Configure your build toolchain with [babel-plugin-formatjs](https://formatjs.io/docs/tooling/babel-plugin)\nor [@formatjs/ts-transformer](https://formatjs.io/docs/tooling/ts-transformer) OR\n2. Configure your `eslint` config to include [eslint-plugin-formatjs](https://formatjs.io/docs/tooling/linter#enforce-id)\nto autofix this issue");var g=String(_),f=a&&Object.prototype.hasOwnProperty.call(a,g)&&a[g];if(Array.isArray(f)&&f.length===1&&f[0].type===ft.literal)return f[0].value;if(!i&&f&&typeof f=="string"&&!p)return f.replace(/'\{(.*?)\}'/gi,"{$1}");if(i=me(me({},p),i||{}),s=Fm(s,h),u=Fm(u,h),!f){if(c===!1&&f==="")return f;if((!x||o&&o.toLowerCase()!==l.toLowerCase())&&d(new rM(n,o)),x)try{var v=e.getMessageFormat(x,l,u,r);return v.format(i)}catch(m){return d(new Wc('Error formatting default message for: "'.concat(g,'", rendering default message verbatim'),o,n,m)),typeof x=="string"?x:g}return g}try{var v=e.getMessageFormat(f,o,s,me({formatters:e},r||{}));return v.format(i)}catch(m){d(new Wc('Error formatting message: "'.concat(g,'", using ').concat(x?"default message":"id"," as fallback."),o,n,m))}if(x)try{var v=e.getMessageFormat(x,l,u,r);return v.format(i)}catch(m){d(new Wc('Error formatting the default message for: "'.concat(g,'", rendering message verbatim'),o,n,m))}return typeof f=="string"?f:typeof x=="string"?x:g},f1=["formatMatcher","timeZone","hour12","weekday","era","year","month","day","hour","minute","second","timeZoneName","hourCycle","dateStyle","timeStyle","calendar","numberingSystem","fractionalSecondDigits"];function Qu(t,e,n,i){var r=t.locale,o=t.formats,s=t.onError,a=t.timeZone;i===void 0&&(i={});var l=i.format,u=me(me({},a&&{timeZone:a}),l&&$h(o,e,l,s)),c=so(i,f1,u);return e==="time"&&!c.hour&&!c.minute&&!c.second&&!c.timeStyle&&!c.dateStyle&&(c=me(me({},c),{hour:"numeric",minute:"numeric"})),n(r,c)}function lM(t,e){for(var n=[],i=2;i<arguments.length;i++)n[i-2]=arguments[i];var r=n[0],o=n[1],s=o===void 0?{}:o,a=typeof r=="string"?new Date(r||0):r;try{return Qu(t,"date",e,s).format(a)}catch(l){t.onError(new Wn("Error formatting date.",t.locale,l))}return String(a)}function uM(t,e){for(var n=[],i=2;i<arguments.length;i++)n[i-2]=arguments[i];var r=n[0],o=n[1],s=o===void 0?{}:o,a=typeof r=="string"?new Date(r||0):r;try{return Qu(t,"time",e,s).format(a)}catch(l){t.onError(new Wn("Error formatting time.",t.locale,l))}return String(a)}function cM(t,e){for(var n=[],i=2;i<arguments.length;i++)n[i-2]=arguments[i];var r=n[0],o=n[1],s=n[2],a=s===void 0?{}:s,l=t.timeZone,u=t.locale,c=t.onError,d=so(a,f1,l?{timeZone:l}:{});try{return e(u,d).formatRange(r,o)}catch(h){c(new Wn("Error formatting date time range.",t.locale,h))}return String(r)}function fM(t,e){for(var n=[],i=2;i<arguments.length;i++)n[i-2]=arguments[i];var r=n[0],o=n[1],s=o===void 0?{}:o,a=typeof r=="string"?new Date(r||0):r;try{return Qu(t,"date",e,s).formatToParts(a)}catch(l){t.onError(new Wn("Error formatting date.",t.locale,l))}return[]}function dM(t,e){for(var n=[],i=2;i<arguments.length;i++)n[i-2]=arguments[i];var r=n[0],o=n[1],s=o===void 0?{}:o,a=typeof r=="string"?new Date(r||0):r;try{return Qu(t,"time",e,s).formatToParts(a)}catch(l){t.onError(new Wn("Error formatting time.",t.locale,l))}return[]}var hM=["style","type","fallback","languageDisplay"];function pM(t,e,n,i){var r=t.locale,o=t.onError,s=Intl.DisplayNames;s||o(new Mr(`Intl.DisplayNames is not available in this environment.
Try polyfilling it using "@formatjs/intl-displaynames"
`,xi.MISSING_INTL_API));var a=so(i,hM);try{return e(r,a).of(n)}catch(l){o(new Wn("Error formatting display name.",r,l))}}var mM=["type","style"],Om=Date.now();function gM(t){return"".concat(Om,"_").concat(t,"_").concat(Om)}function vM(t,e,n,i){i===void 0&&(i={});var r=d1(t,e,n,i).reduce(function(o,s){var a=s.value;return typeof a!="string"?o.push(a):typeof o[o.length-1]=="string"?o[o.length-1]+=a:o.push(a),o},[]);return r.length===1?r[0]:r.length===0?"":r}function d1(t,e,n,i){var r=t.locale,o=t.onError;i===void 0&&(i={});var s=Intl.ListFormat;s||o(new Mr(`Intl.ListFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-listformat"
`,xi.MISSING_INTL_API));var a=so(i,mM);try{var l={},u=n.map(function(c,d){if(typeof c=="object"){var h=gM(d);return l[h]=c,h}return String(c)});return e(r,a).formatToParts(u).map(function(c){return c.type==="literal"?c:me(me({},c),{value:l[c.value]||c.value})})}catch(c){o(new Wn("Error formatting list.",r,c))}return n}var _M=["type"];function xM(t,e,n,i){var r=t.locale,o=t.onError;i===void 0&&(i={}),Intl.PluralRules||o(new Mr(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`,xi.MISSING_INTL_API));var s=so(i,_M);try{return e(r,s).select(n)}catch(a){o(new Wn("Error formatting plural.",r,a))}return"other"}var yM=["numeric","style"];function SM(t,e,n){var i=t.locale,r=t.formats,o=t.onError;n===void 0&&(n={});var s=n.format,a=!!s&&$h(r,"relative",s,o)||{},l=so(n,yM,a);return e(i,l)}function EM(t,e,n,i,r){r===void 0&&(r={}),i||(i="second");var o=Intl.RelativeTimeFormat;o||t.onError(new Mr(`Intl.RelativeTimeFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-relativetimeformat"
`,xi.MISSING_INTL_API));try{return SM(t,e,r).format(n,i)}catch(s){t.onError(new Wn("Error formatting relative time.",t.locale,s))}return String(n)}var MM=["style","currency","currencyDisplay","unit","unitDisplay","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","compactDisplay","currencyDisplay","currencySign","notation","signDisplay","unit","unitDisplay","numberingSystem"];function h1(t,e,n){var i=t.locale,r=t.formats,o=t.onError;n===void 0&&(n={});var s=n.format,a=s&&$h(r,"number",s,o)||{},l=so(n,MM,a);return e(i,l)}function TM(t,e,n,i){i===void 0&&(i={});try{return h1(t,e,i).format(n)}catch(r){t.onError(new Wn("Error formatting number.",t.locale,r))}return String(n)}function wM(t,e,n,i){i===void 0&&(i={});try{return h1(t,e,i).formatToParts(n)}catch(r){t.onError(new Wn("Error formatting number.",t.locale,r))}return[]}function AM(t){var e=t?t[Object.keys(t)[0]]:void 0;return typeof e=="string"}function CM(t){t.onWarn&&t.defaultRichTextElements&&AM(t.messages||{})&&t.onWarn(`[@formatjs/intl] "defaultRichTextElements" was specified but "message" was not pre-compiled. 
Please consider using "@formatjs/cli" to pre-compile your messages for performance.
For more details see https://formatjs.io/docs/getting-started/message-distribution`)}function RM(t,e){var n=aM(e),i=me(me({},u1),t),r=i.locale,o=i.defaultLocale,s=i.onError;return r?!Intl.NumberFormat.supportedLocalesOf(r).length&&s?s(new Dm('Missing locale data for locale: "'.concat(r,'" in Intl.NumberFormat. Using default locale: "').concat(o,'" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details'))):!Intl.DateTimeFormat.supportedLocalesOf(r).length&&s&&s(new Dm('Missing locale data for locale: "'.concat(r,'" in Intl.DateTimeFormat. Using default locale: "').concat(o,'" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details'))):(s&&s(new iM('"locale" was not configured, using "'.concat(o,'" as fallback. See https://formatjs.io/docs/react-intl/api#intlshape for more details'))),i.locale=i.defaultLocale||"en"),CM(i),me(me({},i),{formatters:n,formatNumber:TM.bind(null,i,n.getNumberFormat),formatNumberToParts:wM.bind(null,i,n.getNumberFormat),formatRelativeTime:EM.bind(null,i,n.getRelativeTimeFormat),formatDate:lM.bind(null,i,n.getDateTimeFormat),formatDateToParts:fM.bind(null,i,n.getDateTimeFormat),formatTime:uM.bind(null,i,n.getDateTimeFormat),formatDateTimeRange:cM.bind(null,i,n.getDateTimeFormat),formatTimeToParts:dM.bind(null,i,n.getDateTimeFormat),formatPlural:xM.bind(null,i,n.getPluralRules),formatMessage:Ad.bind(null,i,n),$t:Ad.bind(null,i,n),formatList:vM.bind(null,i,n.getListFormat),formatListToParts:d1.bind(null,i,n.getListFormat),formatDisplayName:pM.bind(null,i,n.getDisplayNames)})}function p1(t){W_(t,"[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry.")}var m1=me(me({},u1),{textComponent:Ye.Fragment});function bM(t){return function(e){return t(Ye.Children.toArray(e))}}function Cd(t,e){if(t===e)return!0;if(!t||!e)return!1;var n=Object.keys(t),i=Object.keys(e),r=n.length;if(i.length!==r)return!1;for(var o=0;o<r;o++){var s=n[o];if(t[s]!==e[s]||!Object.prototype.hasOwnProperty.call(e,s))return!1}return!0}var jh=typeof window<"u"&&!window.__REACT_INTL_BYPASS_GLOBAL_CONTEXT__?window.__REACT_INTL_CONTEXT__||(window.__REACT_INTL_CONTEXT__=Ye.createContext(null)):Ye.createContext(null);jh.Consumer;var PM=jh.Provider,LM=PM,NM=jh;function Ju(){var t=Ye.useContext(NM);return p1(t),t}var Rd;(function(t){t.formatDate="FormattedDate",t.formatTime="FormattedTime",t.formatNumber="FormattedNumber",t.formatList="FormattedList",t.formatDisplayName="FormattedDisplayName"})(Rd||(Rd={}));var bd;(function(t){t.formatDate="FormattedDateParts",t.formatTime="FormattedTimeParts",t.formatNumber="FormattedNumberParts",t.formatList="FormattedListParts"})(bd||(bd={}));function g1(t){var e=function(n){var i=Ju(),r=n.value,o=n.children,s=rs(n,["value","children"]),a=typeof r=="string"?new Date(r||0):r,l=t==="formatDate"?i.formatDateToParts(a,s):i.formatTimeToParts(a,s);return o(l)};return e.displayName=bd[t],e}function Aa(t){var e=function(n){var i=Ju(),r=n.value,o=n.children,s=rs(n,["value","children"]),a=i[t](r,s);if(typeof o=="function")return o(a);var l=i.textComponent||Ye.Fragment;return Ye.createElement(l,null,a)};return e.displayName=Rd[t],e}function v1(t){return t&&Object.keys(t).reduce(function(e,n){var i=t[n];return e[n]=a1(i)?bM(i):i,e},{})}var Bm=function(t,e,n,i){for(var r=[],o=4;o<arguments.length;o++)r[o-4]=arguments[o];var s=v1(i),a=Ad.apply(void 0,di([t,e,n,s],r,!1));return Array.isArray(a)?Ye.Children.toArray(a):a},km=function(t,e){var n=t.defaultRichTextElements,i=rs(t,["defaultRichTextElements"]),r=v1(n),o=RM(me(me(me({},m1),i),{defaultRichTextElements:r}),e),s={locale:o.locale,timeZone:o.timeZone,fallbackOnEmptyString:o.fallbackOnEmptyString,formats:o.formats,defaultLocale:o.defaultLocale,defaultFormats:o.defaultFormats,messages:o.messages,onError:o.onError,defaultRichTextElements:r};return me(me({},o),{formatMessage:Bm.bind(null,s,o.formatters),$t:Bm.bind(null,s,o.formatters)})};function Xc(t){return{locale:t.locale,timeZone:t.timeZone,fallbackOnEmptyString:t.fallbackOnEmptyString,formats:t.formats,textComponent:t.textComponent,messages:t.messages,defaultLocale:t.defaultLocale,defaultFormats:t.defaultFormats,onError:t.onError,onWarn:t.onWarn,wrapRichTextChunksInFragment:t.wrapRichTextChunksInFragment,defaultRichTextElements:t.defaultRichTextElements}}var IM=function(t){Vn(e,t);function e(){var n=t!==null&&t.apply(this,arguments)||this;return n.cache=c1(),n.state={cache:n.cache,intl:km(Xc(n.props),n.cache),prevConfig:Xc(n.props)},n}return e.getDerivedStateFromProps=function(n,i){var r=i.prevConfig,o=i.cache,s=Xc(n);return Cd(r,s)?null:{intl:km(s,o),prevConfig:s}},e.prototype.render=function(){return p1(this.state.intl),Ye.createElement(LM,{value:this.state.intl},this.props.children)},e.displayName="IntlProvider",e.defaultProps=m1,e}(Ye.PureComponent);const DM=IM;function UM(t,e){var n=t.values,i=rs(t,["values"]),r=e.values,o=rs(e,["values"]);return Cd(r,n)&&Cd(i,o)}function _1(t){var e=Ju(),n=e.formatMessage,i=e.textComponent,r=i===void 0?Ye.Fragment:i,o=t.id,s=t.description,a=t.defaultMessage,l=t.values,u=t.children,c=t.tagName,d=c===void 0?r:c,h=t.ignoreTag,p={id:o,description:s,defaultMessage:a},_=n(p,l,{ignoreTag:h});return typeof u=="function"?u(Array.isArray(_)?_:[_]):d?Ye.createElement(d,null,Ye.Children.toArray(_)):Ye.createElement(Ye.Fragment,null,_)}_1.displayName="FormattedMessage";var x1=Ye.memo(_1,UM);x1.displayName="MemoizedFormattedMessage";const Hm=x1;Aa("formatDate");Aa("formatTime");Aa("formatNumber");Aa("formatList");Aa("formatDisplayName");g1("formatDate");g1("formatTime");/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Yh="160",FM=0,zm=1,OM=2,y1=1,BM=2,Ai=3,xr=0,vn=1,Li=2,hr=0,qo=1,Gm=2,Vm=3,Wm=4,kM=5,Ur=100,HM=101,zM=102,Xm=103,$m=104,GM=200,VM=201,WM=202,XM=203,Pd=204,Ld=205,$M=206,jM=207,YM=208,qM=209,ZM=210,KM=211,QM=212,JM=213,e2=214,t2=0,n2=1,i2=2,pu=3,r2=4,o2=5,s2=6,a2=7,S1=0,l2=1,u2=2,pr=0,c2=1,f2=2,d2=3,h2=4,p2=5,m2=6,E1=300,ss=301,as=302,Nd=303,Id=304,ec=306,Dd=1e3,Jn=1001,Ud=1002,an=1003,jm=1004,$c=1005,Un=1006,g2=1007,ma=1008,mr=1009,v2=1010,_2=1011,qh=1012,M1=1013,ir=1014,rr=1015,ga=1016,T1=1017,w1=1018,Vr=1020,x2=1021,ei=1023,y2=1024,S2=1025,Wr=1026,ls=1027,E2=1028,A1=1029,M2=1030,C1=1031,R1=1033,jc=33776,Yc=33777,qc=33778,Zc=33779,Ym=35840,qm=35841,Zm=35842,Km=35843,b1=36196,Qm=37492,Jm=37496,eg=37808,tg=37809,ng=37810,ig=37811,rg=37812,og=37813,sg=37814,ag=37815,lg=37816,ug=37817,cg=37818,fg=37819,dg=37820,hg=37821,Kc=36492,pg=36494,mg=36495,T2=36283,gg=36284,vg=36285,_g=36286,P1=3e3,Xr=3001,w2=3200,A2=3201,C2=0,R2=1,On="",kt="srgb",Hi="srgb-linear",Zh="display-p3",tc="display-p3-linear",mu="linear",ct="srgb",gu="rec709",vu="p3",lo=7680,xg=519,b2=512,P2=513,L2=514,L1=515,N2=516,I2=517,D2=518,U2=519,yg=35044,Sg="300 es",Fd=1035,Di=2e3,_u=2001;class vs{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const o=r.indexOf(n);o!==-1&&r.splice(o,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let o=0,s=r.length;o<s;o++)r[o].call(this,e);e.target=null}}}const jt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Eg=1234567;const Ys=Math.PI/180,va=180/Math.PI;function _s(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(jt[t&255]+jt[t>>8&255]+jt[t>>16&255]+jt[t>>24&255]+"-"+jt[e&255]+jt[e>>8&255]+"-"+jt[e>>16&15|64]+jt[e>>24&255]+"-"+jt[n&63|128]+jt[n>>8&255]+"-"+jt[n>>16&255]+jt[n>>24&255]+jt[i&255]+jt[i>>8&255]+jt[i>>16&255]+jt[i>>24&255]).toLowerCase()}function ln(t,e,n){return Math.max(e,Math.min(n,t))}function Kh(t,e){return(t%e+e)%e}function F2(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function O2(t,e,n){return t!==e?(n-t)/(e-t):0}function qs(t,e,n){return(1-n)*t+n*e}function B2(t,e,n,i){return qs(t,e,1-Math.exp(-n*i))}function k2(t,e=1){return e-Math.abs(Kh(t,e*2)-e)}function H2(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function z2(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function G2(t,e){return t+Math.floor(Math.random()*(e-t+1))}function V2(t,e){return t+Math.random()*(e-t)}function W2(t){return t*(.5-Math.random())}function X2(t){t!==void 0&&(Eg=t);let e=Eg+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function $2(t){return t*Ys}function j2(t){return t*va}function Od(t){return(t&t-1)===0&&t!==0}function Y2(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function xu(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function q2(t,e,n,i,r){const o=Math.cos,s=Math.sin,a=o(n/2),l=s(n/2),u=o((e+i)/2),c=s((e+i)/2),d=o((e-i)/2),h=s((e-i)/2),p=o((i-e)/2),_=s((i-e)/2);switch(r){case"XYX":t.set(a*c,l*d,l*h,a*u);break;case"YZY":t.set(l*h,a*c,l*d,a*u);break;case"ZXZ":t.set(l*d,l*h,a*c,a*u);break;case"XZX":t.set(a*c,l*_,l*p,a*u);break;case"YXY":t.set(l*p,a*c,l*_,a*u);break;case"ZYZ":t.set(l*_,l*p,a*c,a*u);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Ao(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function nn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const Qi={DEG2RAD:Ys,RAD2DEG:va,generateUUID:_s,clamp:ln,euclideanModulo:Kh,mapLinear:F2,inverseLerp:O2,lerp:qs,damp:B2,pingpong:k2,smoothstep:H2,smootherstep:z2,randInt:G2,randFloat:V2,randFloatSpread:W2,seededRandom:X2,degToRad:$2,radToDeg:j2,isPowerOfTwo:Od,ceilPowerOfTwo:Y2,floorPowerOfTwo:xu,setQuaternionFromProperEuler:q2,normalize:nn,denormalize:Ao};class Ze{constructor(e=0,n=0){Ze.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(ln(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),o=this.x-e.x,s=this.y-e.y;return this.x=o*i-s*r+e.x,this.y=o*r+s*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ve{constructor(e,n,i,r,o,s,a,l,u){Ve.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,o,s,a,l,u)}set(e,n,i,r,o,s,a,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=a,c[3]=n,c[4]=o,c[5]=l,c[6]=i,c[7]=s,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,o=this.elements,s=i[0],a=i[3],l=i[6],u=i[1],c=i[4],d=i[7],h=i[2],p=i[5],_=i[8],x=r[0],g=r[3],f=r[6],v=r[1],m=r[4],y=r[7],R=r[2],A=r[5],M=r[8];return o[0]=s*x+a*v+l*R,o[3]=s*g+a*m+l*A,o[6]=s*f+a*y+l*M,o[1]=u*x+c*v+d*R,o[4]=u*g+c*m+d*A,o[7]=u*f+c*y+d*M,o[2]=h*x+p*v+_*R,o[5]=h*g+p*m+_*A,o[8]=h*f+p*y+_*M,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],u=e[7],c=e[8];return n*s*c-n*a*u-i*o*c+i*a*l+r*o*u-r*s*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],u=e[7],c=e[8],d=c*s-a*u,h=a*l-c*o,p=u*o-s*l,_=n*d+i*h+r*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/_;return e[0]=d*x,e[1]=(r*u-c*i)*x,e[2]=(a*i-r*s)*x,e[3]=h*x,e[4]=(c*n-r*l)*x,e[5]=(r*o-a*n)*x,e[6]=p*x,e[7]=(i*l-u*n)*x,e[8]=(s*n-i*o)*x,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,o,s,a){const l=Math.cos(o),u=Math.sin(o);return this.set(i*l,i*u,-i*(l*s+u*a)+s+e,-r*u,r*l,-r*(-u*s+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Qc.makeScale(e,n)),this}rotate(e){return this.premultiply(Qc.makeRotation(-e)),this}translate(e,n){return this.premultiply(Qc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Qc=new Ve;function N1(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function yu(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function Z2(){const t=yu("canvas");return t.style.display="block",t}const Mg={};function Zs(t){t in Mg||(Mg[t]=!0,console.warn(t))}const Tg=new Ve().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),wg=new Ve().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Qa={[Hi]:{transfer:mu,primaries:gu,toReference:t=>t,fromReference:t=>t},[kt]:{transfer:ct,primaries:gu,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[tc]:{transfer:mu,primaries:vu,toReference:t=>t.applyMatrix3(wg),fromReference:t=>t.applyMatrix3(Tg)},[Zh]:{transfer:ct,primaries:vu,toReference:t=>t.convertSRGBToLinear().applyMatrix3(wg),fromReference:t=>t.applyMatrix3(Tg).convertLinearToSRGB()}},K2=new Set([Hi,tc]),nt={enabled:!0,_workingColorSpace:Hi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!K2.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=Qa[e].toReference,r=Qa[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return Qa[t].primaries},getTransfer:function(t){return t===On?mu:Qa[t].transfer}};function Zo(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Jc(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let uo;class I1{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{uo===void 0&&(uo=yu("canvas")),uo.width=e.width,uo.height=e.height;const i=uo.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=uo}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=yu("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),o=r.data;for(let s=0;s<o.length;s++)o[s]=Zo(o[s]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Zo(n[i]/255)*255):n[i]=Zo(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Q2=0;class D1{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Q2++}),this.uuid=_s(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let o;if(Array.isArray(r)){o=[];for(let s=0,a=r.length;s<a;s++)r[s].isDataTexture?o.push(ef(r[s].image)):o.push(ef(r[s]))}else o=ef(r);i.url=o}return n||(e.images[this.uuid]=i),i}}function ef(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?I1.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let J2=0;class wn extends vs{constructor(e=wn.DEFAULT_IMAGE,n=wn.DEFAULT_MAPPING,i=Jn,r=Jn,o=Un,s=ma,a=ei,l=mr,u=wn.DEFAULT_ANISOTROPY,c=On){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:J2++}),this.uuid=_s(),this.name="",this.source=new D1(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=o,this.minFilter=s,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ze(0,0),this.repeat=new Ze(1,1),this.center=new Ze(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ve,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof c=="string"?this.colorSpace=c:(Zs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=c===Xr?kt:On),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==E1)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Dd:e.x=e.x-Math.floor(e.x);break;case Jn:e.x=e.x<0?0:1;break;case Ud:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Dd:e.y=e.y-Math.floor(e.y);break;case Jn:e.y=e.y<0?0:1;break;case Ud:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Zs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===kt?Xr:P1}set encoding(e){Zs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Xr?kt:On}}wn.DEFAULT_IMAGE=null;wn.DEFAULT_MAPPING=E1;wn.DEFAULT_ANISOTROPY=1;class Ht{constructor(e=0,n=0,i=0,r=1){Ht.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,o=this.w,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r+s[12]*o,this.y=s[1]*n+s[5]*i+s[9]*r+s[13]*o,this.z=s[2]*n+s[6]*i+s[10]*r+s[14]*o,this.w=s[3]*n+s[7]*i+s[11]*r+s[15]*o,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,o;const l=e.elements,u=l[0],c=l[4],d=l[8],h=l[1],p=l[5],_=l[9],x=l[2],g=l[6],f=l[10];if(Math.abs(c-h)<.01&&Math.abs(d-x)<.01&&Math.abs(_-g)<.01){if(Math.abs(c+h)<.1&&Math.abs(d+x)<.1&&Math.abs(_+g)<.1&&Math.abs(u+p+f-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const m=(u+1)/2,y=(p+1)/2,R=(f+1)/2,A=(c+h)/4,M=(d+x)/4,N=(_+g)/4;return m>y&&m>R?m<.01?(i=0,r=.707106781,o=.707106781):(i=Math.sqrt(m),r=A/i,o=M/i):y>R?y<.01?(i=.707106781,r=0,o=.707106781):(r=Math.sqrt(y),i=A/r,o=N/r):R<.01?(i=.707106781,r=.707106781,o=0):(o=Math.sqrt(R),i=M/o,r=N/o),this.set(i,r,o,n),this}let v=Math.sqrt((g-_)*(g-_)+(d-x)*(d-x)+(h-c)*(h-c));return Math.abs(v)<.001&&(v=1),this.x=(g-_)/v,this.y=(d-x)/v,this.z=(h-c)/v,this.w=Math.acos((u+p+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class eT extends vs{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Ht(0,0,e,n),this.scissorTest=!1,this.viewport=new Ht(0,0,e,n);const r={width:e,height:n,depth:1};i.encoding!==void 0&&(Zs("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Xr?kt:On),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Un,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new wn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new D1(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class eo extends eT{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class U1 extends wn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=an,this.minFilter=an,this.wrapR=Jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class tT extends wn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=an,this.minFilter=an,this.wrapR=Jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ca{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,o,s,a){let l=i[r+0],u=i[r+1],c=i[r+2],d=i[r+3];const h=o[s+0],p=o[s+1],_=o[s+2],x=o[s+3];if(a===0){e[n+0]=l,e[n+1]=u,e[n+2]=c,e[n+3]=d;return}if(a===1){e[n+0]=h,e[n+1]=p,e[n+2]=_,e[n+3]=x;return}if(d!==x||l!==h||u!==p||c!==_){let g=1-a;const f=l*h+u*p+c*_+d*x,v=f>=0?1:-1,m=1-f*f;if(m>Number.EPSILON){const R=Math.sqrt(m),A=Math.atan2(R,f*v);g=Math.sin(g*A)/R,a=Math.sin(a*A)/R}const y=a*v;if(l=l*g+h*y,u=u*g+p*y,c=c*g+_*y,d=d*g+x*y,g===1-a){const R=1/Math.sqrt(l*l+u*u+c*c+d*d);l*=R,u*=R,c*=R,d*=R}}e[n]=l,e[n+1]=u,e[n+2]=c,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,r,o,s){const a=i[r],l=i[r+1],u=i[r+2],c=i[r+3],d=o[s],h=o[s+1],p=o[s+2],_=o[s+3];return e[n]=a*_+c*d+l*p-u*h,e[n+1]=l*_+c*h+u*d-a*p,e[n+2]=u*_+c*p+a*h-l*d,e[n+3]=c*_-a*d-l*h-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,o=e._z,s=e._order,a=Math.cos,l=Math.sin,u=a(i/2),c=a(r/2),d=a(o/2),h=l(i/2),p=l(r/2),_=l(o/2);switch(s){case"XYZ":this._x=h*c*d+u*p*_,this._y=u*p*d-h*c*_,this._z=u*c*_+h*p*d,this._w=u*c*d-h*p*_;break;case"YXZ":this._x=h*c*d+u*p*_,this._y=u*p*d-h*c*_,this._z=u*c*_-h*p*d,this._w=u*c*d+h*p*_;break;case"ZXY":this._x=h*c*d-u*p*_,this._y=u*p*d+h*c*_,this._z=u*c*_+h*p*d,this._w=u*c*d-h*p*_;break;case"ZYX":this._x=h*c*d-u*p*_,this._y=u*p*d+h*c*_,this._z=u*c*_-h*p*d,this._w=u*c*d+h*p*_;break;case"YZX":this._x=h*c*d+u*p*_,this._y=u*p*d+h*c*_,this._z=u*c*_-h*p*d,this._w=u*c*d-h*p*_;break;case"XZY":this._x=h*c*d-u*p*_,this._y=u*p*d-h*c*_,this._z=u*c*_+h*p*d,this._w=u*c*d+h*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],o=n[8],s=n[1],a=n[5],l=n[9],u=n[2],c=n[6],d=n[10],h=i+a+d;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(c-l)*p,this._y=(o-u)*p,this._z=(s-r)*p}else if(i>a&&i>d){const p=2*Math.sqrt(1+i-a-d);this._w=(c-l)/p,this._x=.25*p,this._y=(r+s)/p,this._z=(o+u)/p}else if(a>d){const p=2*Math.sqrt(1+a-i-d);this._w=(o-u)/p,this._x=(r+s)/p,this._y=.25*p,this._z=(l+c)/p}else{const p=2*Math.sqrt(1+d-i-a);this._w=(s-r)/p,this._x=(o+u)/p,this._y=(l+c)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ln(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,o=e._z,s=e._w,a=n._x,l=n._y,u=n._z,c=n._w;return this._x=i*c+s*a+r*u-o*l,this._y=r*c+s*l+o*a-i*u,this._z=o*c+s*u+i*l-r*a,this._w=s*c-i*a-r*l-o*u,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,o=this._z,s=this._w;let a=s*e._w+i*e._x+r*e._y+o*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=s,this._x=i,this._y=r,this._z=o,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*s+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*o+n*this._z,this.normalize(),this}const u=Math.sqrt(l),c=Math.atan2(u,a),d=Math.sin((1-n)*c)/u,h=Math.sin(n*c)/u;return this._w=s*d+this._w*h,this._x=i*d+this._x*h,this._y=r*d+this._y*h,this._z=o*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),o=2*Math.PI*Math.random();return this.set(n*Math.cos(r),i*Math.sin(o),i*Math.cos(o),n*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class B{constructor(e=0,n=0,i=0){B.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Ag.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Ag.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*n+o[3]*i+o[6]*r,this.y=o[1]*n+o[4]*i+o[7]*r,this.z=o[2]*n+o[5]*i+o[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,o=e.elements,s=1/(o[3]*n+o[7]*i+o[11]*r+o[15]);return this.x=(o[0]*n+o[4]*i+o[8]*r+o[12])*s,this.y=(o[1]*n+o[5]*i+o[9]*r+o[13])*s,this.z=(o[2]*n+o[6]*i+o[10]*r+o[14])*s,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,o=e.x,s=e.y,a=e.z,l=e.w,u=2*(s*r-a*i),c=2*(a*n-o*r),d=2*(o*i-s*n);return this.x=n+l*u+s*d-a*c,this.y=i+l*c+a*u-o*d,this.z=r+l*d+o*c-s*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r,this.y=o[1]*n+o[5]*i+o[9]*r,this.z=o[2]*n+o[6]*i+o[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,o=e.z,s=n.x,a=n.y,l=n.z;return this.x=r*l-o*a,this.y=o*s-i*l,this.z=i*a-r*s,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return tf.copy(this).projectOnVector(e),this.sub(tf)}reflect(e){return this.sub(tf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(ln(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const tf=new B,Ag=new Ca;class Ra{constructor(e=new B(1/0,1/0,1/0),n=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint($n.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint($n.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=$n.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const o=i.getAttribute("position");if(n===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let s=0,a=o.count;s<a;s++)e.isMesh===!0?e.getVertexPosition(s,$n):$n.fromBufferAttribute(o,s),$n.applyMatrix4(e.matrixWorld),this.expandByPoint($n);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ja.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ja.copy(i.boundingBox)),Ja.applyMatrix4(e.matrixWorld),this.union(Ja)}const r=e.children;for(let o=0,s=r.length;o<s;o++)this.expandByObject(r[o],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,$n),$n.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ps),el.subVectors(this.max,Ps),co.subVectors(e.a,Ps),fo.subVectors(e.b,Ps),ho.subVectors(e.c,Ps),Wi.subVectors(fo,co),Xi.subVectors(ho,fo),Cr.subVectors(co,ho);let n=[0,-Wi.z,Wi.y,0,-Xi.z,Xi.y,0,-Cr.z,Cr.y,Wi.z,0,-Wi.x,Xi.z,0,-Xi.x,Cr.z,0,-Cr.x,-Wi.y,Wi.x,0,-Xi.y,Xi.x,0,-Cr.y,Cr.x,0];return!nf(n,co,fo,ho,el)||(n=[1,0,0,0,1,0,0,0,1],!nf(n,co,fo,ho,el))?!1:(tl.crossVectors(Wi,Xi),n=[tl.x,tl.y,tl.z],nf(n,co,fo,ho,el))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,$n).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize($n).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Si[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Si[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Si[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Si[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Si[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Si[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Si[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Si[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Si),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Si=[new B,new B,new B,new B,new B,new B,new B,new B],$n=new B,Ja=new Ra,co=new B,fo=new B,ho=new B,Wi=new B,Xi=new B,Cr=new B,Ps=new B,el=new B,tl=new B,Rr=new B;function nf(t,e,n,i,r){for(let o=0,s=t.length-3;o<=s;o+=3){Rr.fromArray(t,o);const a=r.x*Math.abs(Rr.x)+r.y*Math.abs(Rr.y)+r.z*Math.abs(Rr.z),l=e.dot(Rr),u=n.dot(Rr),c=i.dot(Rr);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const nT=new Ra,Ls=new B,rf=new B;class Qh{constructor(e=new B,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):nT.setFromPoints(e).getCenter(i);let r=0;for(let o=0,s=e.length;o<s;o++)r=Math.max(r,i.distanceToSquared(e[o]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ls.subVectors(e,this.center);const n=Ls.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Ls,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(rf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ls.copy(e.center).add(rf)),this.expandByPoint(Ls.copy(e.center).sub(rf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ei=new B,of=new B,nl=new B,$i=new B,sf=new B,il=new B,af=new B;class F1{constructor(e=new B,n=new B(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ei)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Ei.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Ei.copy(this.origin).addScaledVector(this.direction,n),Ei.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){of.copy(e).add(n).multiplyScalar(.5),nl.copy(n).sub(e).normalize(),$i.copy(this.origin).sub(of);const o=e.distanceTo(n)*.5,s=-this.direction.dot(nl),a=$i.dot(this.direction),l=-$i.dot(nl),u=$i.lengthSq(),c=Math.abs(1-s*s);let d,h,p,_;if(c>0)if(d=s*l-a,h=s*a-l,_=o*c,d>=0)if(h>=-_)if(h<=_){const x=1/c;d*=x,h*=x,p=d*(d+s*h+2*a)+h*(s*d+h+2*l)+u}else h=o,d=Math.max(0,-(s*h+a)),p=-d*d+h*(h+2*l)+u;else h=-o,d=Math.max(0,-(s*h+a)),p=-d*d+h*(h+2*l)+u;else h<=-_?(d=Math.max(0,-(-s*o+a)),h=d>0?-o:Math.min(Math.max(-o,-l),o),p=-d*d+h*(h+2*l)+u):h<=_?(d=0,h=Math.min(Math.max(-o,-l),o),p=h*(h+2*l)+u):(d=Math.max(0,-(s*o+a)),h=d>0?o:Math.min(Math.max(-o,-l),o),p=-d*d+h*(h+2*l)+u);else h=s>0?-o:o,d=Math.max(0,-(s*h+a)),p=-d*d+h*(h+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(of).addScaledVector(nl,h),p}intersectSphere(e,n){Ei.subVectors(e.center,this.origin);const i=Ei.dot(this.direction),r=Ei.dot(Ei)-i*i,o=e.radius*e.radius;if(r>o)return null;const s=Math.sqrt(o-r),a=i-s,l=i+s;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,o,s,a,l;const u=1/this.direction.x,c=1/this.direction.y,d=1/this.direction.z,h=this.origin;return u>=0?(i=(e.min.x-h.x)*u,r=(e.max.x-h.x)*u):(i=(e.max.x-h.x)*u,r=(e.min.x-h.x)*u),c>=0?(o=(e.min.y-h.y)*c,s=(e.max.y-h.y)*c):(o=(e.max.y-h.y)*c,s=(e.min.y-h.y)*c),i>s||o>r||((o>i||isNaN(i))&&(i=o),(s<r||isNaN(r))&&(r=s),d>=0?(a=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Ei)!==null}intersectTriangle(e,n,i,r,o){sf.subVectors(n,e),il.subVectors(i,e),af.crossVectors(sf,il);let s=this.direction.dot(af),a;if(s>0){if(r)return null;a=1}else if(s<0)a=-1,s=-s;else return null;$i.subVectors(this.origin,e);const l=a*this.direction.dot(il.crossVectors($i,il));if(l<0)return null;const u=a*this.direction.dot(sf.cross($i));if(u<0||l+u>s)return null;const c=-a*$i.dot(af);return c<0?null:this.at(c/s,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Gt{constructor(e,n,i,r,o,s,a,l,u,c,d,h,p,_,x,g){Gt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,o,s,a,l,u,c,d,h,p,_,x,g)}set(e,n,i,r,o,s,a,l,u,c,d,h,p,_,x,g){const f=this.elements;return f[0]=e,f[4]=n,f[8]=i,f[12]=r,f[1]=o,f[5]=s,f[9]=a,f[13]=l,f[2]=u,f[6]=c,f[10]=d,f[14]=h,f[3]=p,f[7]=_,f[11]=x,f[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Gt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/po.setFromMatrixColumn(e,0).length(),o=1/po.setFromMatrixColumn(e,1).length(),s=1/po.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*o,n[5]=i[5]*o,n[6]=i[6]*o,n[7]=0,n[8]=i[8]*s,n[9]=i[9]*s,n[10]=i[10]*s,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,o=e.z,s=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(o),d=Math.sin(o);if(e.order==="XYZ"){const h=s*c,p=s*d,_=a*c,x=a*d;n[0]=l*c,n[4]=-l*d,n[8]=u,n[1]=p+_*u,n[5]=h-x*u,n[9]=-a*l,n[2]=x-h*u,n[6]=_+p*u,n[10]=s*l}else if(e.order==="YXZ"){const h=l*c,p=l*d,_=u*c,x=u*d;n[0]=h+x*a,n[4]=_*a-p,n[8]=s*u,n[1]=s*d,n[5]=s*c,n[9]=-a,n[2]=p*a-_,n[6]=x+h*a,n[10]=s*l}else if(e.order==="ZXY"){const h=l*c,p=l*d,_=u*c,x=u*d;n[0]=h-x*a,n[4]=-s*d,n[8]=_+p*a,n[1]=p+_*a,n[5]=s*c,n[9]=x-h*a,n[2]=-s*u,n[6]=a,n[10]=s*l}else if(e.order==="ZYX"){const h=s*c,p=s*d,_=a*c,x=a*d;n[0]=l*c,n[4]=_*u-p,n[8]=h*u+x,n[1]=l*d,n[5]=x*u+h,n[9]=p*u-_,n[2]=-u,n[6]=a*l,n[10]=s*l}else if(e.order==="YZX"){const h=s*l,p=s*u,_=a*l,x=a*u;n[0]=l*c,n[4]=x-h*d,n[8]=_*d+p,n[1]=d,n[5]=s*c,n[9]=-a*c,n[2]=-u*c,n[6]=p*d+_,n[10]=h-x*d}else if(e.order==="XZY"){const h=s*l,p=s*u,_=a*l,x=a*u;n[0]=l*c,n[4]=-d,n[8]=u*c,n[1]=h*d+x,n[5]=s*c,n[9]=p*d-_,n[2]=_*d-p,n[6]=a*c,n[10]=x*d+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(iT,e,rT)}lookAt(e,n,i){const r=this.elements;return xn.subVectors(e,n),xn.lengthSq()===0&&(xn.z=1),xn.normalize(),ji.crossVectors(i,xn),ji.lengthSq()===0&&(Math.abs(i.z)===1?xn.x+=1e-4:xn.z+=1e-4,xn.normalize(),ji.crossVectors(i,xn)),ji.normalize(),rl.crossVectors(xn,ji),r[0]=ji.x,r[4]=rl.x,r[8]=xn.x,r[1]=ji.y,r[5]=rl.y,r[9]=xn.y,r[2]=ji.z,r[6]=rl.z,r[10]=xn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,o=this.elements,s=i[0],a=i[4],l=i[8],u=i[12],c=i[1],d=i[5],h=i[9],p=i[13],_=i[2],x=i[6],g=i[10],f=i[14],v=i[3],m=i[7],y=i[11],R=i[15],A=r[0],M=r[4],N=r[8],E=r[12],w=r[1],F=r[5],$=r[9],ee=r[13],P=r[2],O=r[6],X=r[10],q=r[14],L=r[3],I=r[7],G=r[11],j=r[15];return o[0]=s*A+a*w+l*P+u*L,o[4]=s*M+a*F+l*O+u*I,o[8]=s*N+a*$+l*X+u*G,o[12]=s*E+a*ee+l*q+u*j,o[1]=c*A+d*w+h*P+p*L,o[5]=c*M+d*F+h*O+p*I,o[9]=c*N+d*$+h*X+p*G,o[13]=c*E+d*ee+h*q+p*j,o[2]=_*A+x*w+g*P+f*L,o[6]=_*M+x*F+g*O+f*I,o[10]=_*N+x*$+g*X+f*G,o[14]=_*E+x*ee+g*q+f*j,o[3]=v*A+m*w+y*P+R*L,o[7]=v*M+m*F+y*O+R*I,o[11]=v*N+m*$+y*X+R*G,o[15]=v*E+m*ee+y*q+R*j,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],o=e[12],s=e[1],a=e[5],l=e[9],u=e[13],c=e[2],d=e[6],h=e[10],p=e[14],_=e[3],x=e[7],g=e[11],f=e[15];return _*(+o*l*d-r*u*d-o*a*h+i*u*h+r*a*p-i*l*p)+x*(+n*l*p-n*u*h+o*s*h-r*s*p+r*u*c-o*l*c)+g*(+n*u*d-n*a*p-o*s*d+i*s*p+o*a*c-i*u*c)+f*(-r*a*c-n*l*d+n*a*h+r*s*d-i*s*h+i*l*c)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],u=e[7],c=e[8],d=e[9],h=e[10],p=e[11],_=e[12],x=e[13],g=e[14],f=e[15],v=d*g*u-x*h*u+x*l*p-a*g*p-d*l*f+a*h*f,m=_*h*u-c*g*u-_*l*p+s*g*p+c*l*f-s*h*f,y=c*x*u-_*d*u+_*a*p-s*x*p-c*a*f+s*d*f,R=_*d*l-c*x*l-_*a*h+s*x*h+c*a*g-s*d*g,A=n*v+i*m+r*y+o*R;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const M=1/A;return e[0]=v*M,e[1]=(x*h*o-d*g*o-x*r*p+i*g*p+d*r*f-i*h*f)*M,e[2]=(a*g*o-x*l*o+x*r*u-i*g*u-a*r*f+i*l*f)*M,e[3]=(d*l*o-a*h*o-d*r*u+i*h*u+a*r*p-i*l*p)*M,e[4]=m*M,e[5]=(c*g*o-_*h*o+_*r*p-n*g*p-c*r*f+n*h*f)*M,e[6]=(_*l*o-s*g*o-_*r*u+n*g*u+s*r*f-n*l*f)*M,e[7]=(s*h*o-c*l*o+c*r*u-n*h*u-s*r*p+n*l*p)*M,e[8]=y*M,e[9]=(_*d*o-c*x*o-_*i*p+n*x*p+c*i*f-n*d*f)*M,e[10]=(s*x*o-_*a*o+_*i*u-n*x*u-s*i*f+n*a*f)*M,e[11]=(c*a*o-s*d*o-c*i*u+n*d*u+s*i*p-n*a*p)*M,e[12]=R*M,e[13]=(c*x*r-_*d*r+_*i*h-n*x*h-c*i*g+n*d*g)*M,e[14]=(_*a*r-s*x*r-_*i*l+n*x*l+s*i*g-n*a*g)*M,e[15]=(s*d*r-c*a*r+c*i*l-n*d*l-s*i*h+n*a*h)*M,this}scale(e){const n=this.elements,i=e.x,r=e.y,o=e.z;return n[0]*=i,n[4]*=r,n[8]*=o,n[1]*=i,n[5]*=r,n[9]*=o,n[2]*=i,n[6]*=r,n[10]*=o,n[3]*=i,n[7]*=r,n[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),o=1-i,s=e.x,a=e.y,l=e.z,u=o*s,c=o*a;return this.set(u*s+i,u*a-r*l,u*l+r*a,0,u*a+r*l,c*a+i,c*l-r*s,0,u*l-r*a,c*l+r*s,o*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,o,s){return this.set(1,i,o,0,e,1,s,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,o=n._x,s=n._y,a=n._z,l=n._w,u=o+o,c=s+s,d=a+a,h=o*u,p=o*c,_=o*d,x=s*c,g=s*d,f=a*d,v=l*u,m=l*c,y=l*d,R=i.x,A=i.y,M=i.z;return r[0]=(1-(x+f))*R,r[1]=(p+y)*R,r[2]=(_-m)*R,r[3]=0,r[4]=(p-y)*A,r[5]=(1-(h+f))*A,r[6]=(g+v)*A,r[7]=0,r[8]=(_+m)*M,r[9]=(g-v)*M,r[10]=(1-(h+x))*M,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let o=po.set(r[0],r[1],r[2]).length();const s=po.set(r[4],r[5],r[6]).length(),a=po.set(r[8],r[9],r[10]).length();this.determinant()<0&&(o=-o),e.x=r[12],e.y=r[13],e.z=r[14],jn.copy(this);const u=1/o,c=1/s,d=1/a;return jn.elements[0]*=u,jn.elements[1]*=u,jn.elements[2]*=u,jn.elements[4]*=c,jn.elements[5]*=c,jn.elements[6]*=c,jn.elements[8]*=d,jn.elements[9]*=d,jn.elements[10]*=d,n.setFromRotationMatrix(jn),i.x=o,i.y=s,i.z=a,this}makePerspective(e,n,i,r,o,s,a=Di){const l=this.elements,u=2*o/(n-e),c=2*o/(i-r),d=(n+e)/(n-e),h=(i+r)/(i-r);let p,_;if(a===Di)p=-(s+o)/(s-o),_=-2*s*o/(s-o);else if(a===_u)p=-s/(s-o),_=-s*o/(s-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=c,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,o,s,a=Di){const l=this.elements,u=1/(n-e),c=1/(i-r),d=1/(s-o),h=(n+e)*u,p=(i+r)*c;let _,x;if(a===Di)_=(s+o)*d,x=-2*d;else if(a===_u)_=o*d,x=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=x,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const po=new B,jn=new Gt,iT=new B(0,0,0),rT=new B(1,1,1),ji=new B,rl=new B,xn=new B,Cg=new Gt,Rg=new Ca;class nc{constructor(e=0,n=0,i=0,r=nc.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,o=r[0],s=r[4],a=r[8],l=r[1],u=r[5],c=r[9],d=r[2],h=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(ln(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,p),this._z=Math.atan2(-s,o)):(this._x=Math.atan2(h,u),this._z=0);break;case"YXZ":this._x=Math.asin(-ln(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-d,o),this._z=0);break;case"ZXY":this._x=Math.asin(ln(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-s,u)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-ln(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-s,u));break;case"YZX":this._z=Math.asin(ln(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-d,o)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-ln(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(h,u),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-c,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Cg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Cg,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Rg.setFromEuler(this),this.setFromQuaternion(Rg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}nc.DEFAULT_ORDER="XYZ";class Jh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let oT=0;const bg=new B,mo=new Ca,Mi=new Gt,ol=new B,Ns=new B,sT=new B,aT=new Ca,Pg=new B(1,0,0),Lg=new B(0,1,0),Ng=new B(0,0,1),lT={type:"added"},uT={type:"removed"};class An extends vs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:oT++}),this.uuid=_s(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=An.DEFAULT_UP.clone();const e=new B,n=new nc,i=new Ca,r=new B(1,1,1);function o(){i.setFromEuler(n,!1)}function s(){n.setFromQuaternion(i,void 0,!1)}n._onChange(o),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Gt},normalMatrix:{value:new Ve}}),this.matrix=new Gt,this.matrixWorld=new Gt,this.matrixAutoUpdate=An.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=An.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Jh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return mo.setFromAxisAngle(e,n),this.quaternion.multiply(mo),this}rotateOnWorldAxis(e,n){return mo.setFromAxisAngle(e,n),this.quaternion.premultiply(mo),this}rotateX(e){return this.rotateOnAxis(Pg,e)}rotateY(e){return this.rotateOnAxis(Lg,e)}rotateZ(e){return this.rotateOnAxis(Ng,e)}translateOnAxis(e,n){return bg.copy(e).applyQuaternion(this.quaternion),this.position.add(bg.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Pg,e)}translateY(e){return this.translateOnAxis(Lg,e)}translateZ(e){return this.translateOnAxis(Ng,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Mi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?ol.copy(e):ol.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Ns.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Mi.lookAt(Ns,ol,this.up):Mi.lookAt(ol,Ns,this.up),this.quaternion.setFromRotationMatrix(Mi),r&&(Mi.extractRotation(r.matrixWorld),mo.setFromRotationMatrix(Mi),this.quaternion.premultiply(mo.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(lT)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(uT)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Mi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Mi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Mi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const s=this.children[i].getObjectByProperty(e,n);if(s!==void 0)return s}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let o=0,s=r.length;o<s;o++)r[o].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ns,e,sT),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ns,aT,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const o=n[i];(o.matrixWorldAutoUpdate===!0||e===!0)&&o.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let o=0,s=r.length;o<s;o++){const a=r[o];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function o(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=o(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const d=l[u];o(e.shapes,d)}else o(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(o(e.materials,this.material[l]));r.material=a}else r.material=o(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(o(e.animations,l))}}if(n){const a=s(e.geometries),l=s(e.materials),u=s(e.textures),c=s(e.images),d=s(e.shapes),h=s(e.skeletons),p=s(e.animations),_=s(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=r,i;function s(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}An.DEFAULT_UP=new B(0,1,0);An.DEFAULT_MATRIX_AUTO_UPDATE=!0;An.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Yn=new B,Ti=new B,lf=new B,wi=new B,go=new B,vo=new B,Ig=new B,uf=new B,cf=new B,ff=new B;let sl=!1;class Qn{constructor(e=new B,n=new B,i=new B){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Yn.subVectors(e,n),r.cross(Yn);const o=r.lengthSq();return o>0?r.multiplyScalar(1/Math.sqrt(o)):r.set(0,0,0)}static getBarycoord(e,n,i,r,o){Yn.subVectors(r,n),Ti.subVectors(i,n),lf.subVectors(e,n);const s=Yn.dot(Yn),a=Yn.dot(Ti),l=Yn.dot(lf),u=Ti.dot(Ti),c=Ti.dot(lf),d=s*u-a*a;if(d===0)return o.set(0,0,0),null;const h=1/d,p=(u*l-a*c)*h,_=(s*c-a*l)*h;return o.set(1-p-_,_,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,wi)===null?!1:wi.x>=0&&wi.y>=0&&wi.x+wi.y<=1}static getUV(e,n,i,r,o,s,a,l){return sl===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),sl=!0),this.getInterpolation(e,n,i,r,o,s,a,l)}static getInterpolation(e,n,i,r,o,s,a,l){return this.getBarycoord(e,n,i,r,wi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(o,wi.x),l.addScaledVector(s,wi.y),l.addScaledVector(a,wi.z),l)}static isFrontFacing(e,n,i,r){return Yn.subVectors(i,n),Ti.subVectors(e,n),Yn.cross(Ti).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Yn.subVectors(this.c,this.b),Ti.subVectors(this.a,this.b),Yn.cross(Ti).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Qn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Qn.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,r,o){return sl===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),sl=!0),Qn.getInterpolation(e,this.a,this.b,this.c,n,i,r,o)}getInterpolation(e,n,i,r,o){return Qn.getInterpolation(e,this.a,this.b,this.c,n,i,r,o)}containsPoint(e){return Qn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Qn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,o=this.c;let s,a;go.subVectors(r,i),vo.subVectors(o,i),uf.subVectors(e,i);const l=go.dot(uf),u=vo.dot(uf);if(l<=0&&u<=0)return n.copy(i);cf.subVectors(e,r);const c=go.dot(cf),d=vo.dot(cf);if(c>=0&&d<=c)return n.copy(r);const h=l*d-c*u;if(h<=0&&l>=0&&c<=0)return s=l/(l-c),n.copy(i).addScaledVector(go,s);ff.subVectors(e,o);const p=go.dot(ff),_=vo.dot(ff);if(_>=0&&p<=_)return n.copy(o);const x=p*u-l*_;if(x<=0&&u>=0&&_<=0)return a=u/(u-_),n.copy(i).addScaledVector(vo,a);const g=c*_-p*d;if(g<=0&&d-c>=0&&p-_>=0)return Ig.subVectors(o,r),a=(d-c)/(d-c+(p-_)),n.copy(r).addScaledVector(Ig,a);const f=1/(g+x+h);return s=x*f,a=h*f,n.copy(i).addScaledVector(go,s).addScaledVector(vo,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const O1={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Yi={h:0,s:0,l:0},al={h:0,s:0,l:0};function df(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class it{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=kt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,nt.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=nt.workingColorSpace){return this.r=e,this.g=n,this.b=i,nt.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=nt.workingColorSpace){if(e=Kh(e,1),n=ln(n,0,1),i=ln(i,0,1),n===0)this.r=this.g=this.b=i;else{const o=i<=.5?i*(1+n):i+n-i*n,s=2*i-o;this.r=df(s,o,e+1/3),this.g=df(s,o,e),this.b=df(s,o,e-1/3)}return nt.toWorkingColorSpace(this,r),this}setStyle(e,n=kt){function i(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const s=r[1],a=r[2];switch(s){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,n);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,n);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=r[1],s=o.length;if(s===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,n);if(s===6)return this.setHex(parseInt(o,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=kt){const i=O1[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Zo(e.r),this.g=Zo(e.g),this.b=Zo(e.b),this}copyLinearToSRGB(e){return this.r=Jc(e.r),this.g=Jc(e.g),this.b=Jc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=kt){return nt.fromWorkingColorSpace(Yt.copy(this),e),Math.round(ln(Yt.r*255,0,255))*65536+Math.round(ln(Yt.g*255,0,255))*256+Math.round(ln(Yt.b*255,0,255))}getHexString(e=kt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=nt.workingColorSpace){nt.fromWorkingColorSpace(Yt.copy(this),n);const i=Yt.r,r=Yt.g,o=Yt.b,s=Math.max(i,r,o),a=Math.min(i,r,o);let l,u;const c=(a+s)/2;if(a===s)l=0,u=0;else{const d=s-a;switch(u=c<=.5?d/(s+a):d/(2-s-a),s){case i:l=(r-o)/d+(r<o?6:0);break;case r:l=(o-i)/d+2;break;case o:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,n=nt.workingColorSpace){return nt.fromWorkingColorSpace(Yt.copy(this),n),e.r=Yt.r,e.g=Yt.g,e.b=Yt.b,e}getStyle(e=kt){nt.fromWorkingColorSpace(Yt.copy(this),e);const n=Yt.r,i=Yt.g,r=Yt.b;return e!==kt?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Yi),this.setHSL(Yi.h+e,Yi.s+n,Yi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Yi),e.getHSL(al);const i=qs(Yi.h,al.h,n),r=qs(Yi.s,al.s,n),o=qs(Yi.l,al.l,n);return this.setHSL(i,r,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,o=e.elements;return this.r=o[0]*n+o[3]*i+o[6]*r,this.g=o[1]*n+o[4]*i+o[7]*r,this.b=o[2]*n+o[5]*i+o[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Yt=new it;it.NAMES=O1;let cT=0;class ic extends vs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:cT++}),this.uuid=_s(),this.name="",this.type="Material",this.blending=qo,this.side=xr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Pd,this.blendDst=Ld,this.blendEquation=Ur,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new it(0,0,0),this.blendAlpha=0,this.depthFunc=pu,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=xg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=lo,this.stencilZFail=lo,this.stencilZPass=lo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==qo&&(i.blending=this.blending),this.side!==xr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Pd&&(i.blendSrc=this.blendSrc),this.blendDst!==Ld&&(i.blendDst=this.blendDst),this.blendEquation!==Ur&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==pu&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==xg&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==lo&&(i.stencilFail=this.stencilFail),this.stencilZFail!==lo&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==lo&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(o){const s=[];for(const a in o){const l=o[a];delete l.metadata,s.push(l)}return s}if(n){const o=r(e.textures),s=r(e.images);o.length>0&&(i.textures=o),s.length>0&&(i.images=s)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let o=0;o!==r;++o)i[o]=n[o].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class ba extends ic{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new it(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=S1,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Tt=new B,ll=new Ze;class ri{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=yg,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=rr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,o=this.itemSize;r<o;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)ll.fromBufferAttribute(this,n),ll.applyMatrix3(e),this.setXY(n,ll.x,ll.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Tt.fromBufferAttribute(this,n),Tt.applyMatrix3(e),this.setXYZ(n,Tt.x,Tt.y,Tt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Tt.fromBufferAttribute(this,n),Tt.applyMatrix4(e),this.setXYZ(n,Tt.x,Tt.y,Tt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Tt.fromBufferAttribute(this,n),Tt.applyNormalMatrix(e),this.setXYZ(n,Tt.x,Tt.y,Tt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Tt.fromBufferAttribute(this,n),Tt.transformDirection(e),this.setXYZ(n,Tt.x,Tt.y,Tt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Ao(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=nn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Ao(n,this.array)),n}setX(e,n){return this.normalized&&(n=nn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Ao(n,this.array)),n}setY(e,n){return this.normalized&&(n=nn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Ao(n,this.array)),n}setZ(e,n){return this.normalized&&(n=nn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Ao(n,this.array)),n}setW(e,n){return this.normalized&&(n=nn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=nn(n,this.array),i=nn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=nn(n,this.array),i=nn(i,this.array),r=nn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,o){return e*=this.itemSize,this.normalized&&(n=nn(n,this.array),i=nn(i,this.array),r=nn(r,this.array),o=nn(o,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==yg&&(e.usage=this.usage),e}}class B1 extends ri{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class k1 extends ri{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class _i extends ri{constructor(e,n,i){super(new Float32Array(e),n,i)}}let fT=0;const Nn=new Gt,hf=new An,_o=new B,yn=new Ra,Is=new Ra,It=new B;class Gi extends vs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:fT++}),this.uuid=_s(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(N1(e)?k1:B1)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const o=new Ve().getNormalMatrix(e);i.applyNormalMatrix(o),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Nn.makeRotationFromQuaternion(e),this.applyMatrix4(Nn),this}rotateX(e){return Nn.makeRotationX(e),this.applyMatrix4(Nn),this}rotateY(e){return Nn.makeRotationY(e),this.applyMatrix4(Nn),this}rotateZ(e){return Nn.makeRotationZ(e),this.applyMatrix4(Nn),this}translate(e,n,i){return Nn.makeTranslation(e,n,i),this.applyMatrix4(Nn),this}scale(e,n,i){return Nn.makeScale(e,n,i),this.applyMatrix4(Nn),this}lookAt(e){return hf.lookAt(e),hf.updateMatrix(),this.applyMatrix4(hf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_o).negate(),this.translate(_o.x,_o.y,_o.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}return this.setAttribute("position",new _i(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ra);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const o=n[i];yn.setFromBufferAttribute(o),this.morphTargetsRelative?(It.addVectors(this.boundingBox.min,yn.min),this.boundingBox.expandByPoint(It),It.addVectors(this.boundingBox.max,yn.max),this.boundingBox.expandByPoint(It)):(this.boundingBox.expandByPoint(yn.min),this.boundingBox.expandByPoint(yn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Qh);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new B,1/0);return}if(e){const i=this.boundingSphere.center;if(yn.setFromBufferAttribute(e),n)for(let o=0,s=n.length;o<s;o++){const a=n[o];Is.setFromBufferAttribute(a),this.morphTargetsRelative?(It.addVectors(yn.min,Is.min),yn.expandByPoint(It),It.addVectors(yn.max,Is.max),yn.expandByPoint(It)):(yn.expandByPoint(Is.min),yn.expandByPoint(Is.max))}yn.getCenter(i);let r=0;for(let o=0,s=e.count;o<s;o++)It.fromBufferAttribute(e,o),r=Math.max(r,i.distanceToSquared(It));if(n)for(let o=0,s=n.length;o<s;o++){const a=n[o],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)It.fromBufferAttribute(a,u),l&&(_o.fromBufferAttribute(e,u),It.add(_o)),r=Math.max(r,i.distanceToSquared(It))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=n.position.array,o=n.normal.array,s=n.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ri(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,u=[],c=[];for(let w=0;w<a;w++)u[w]=new B,c[w]=new B;const d=new B,h=new B,p=new B,_=new Ze,x=new Ze,g=new Ze,f=new B,v=new B;function m(w,F,$){d.fromArray(r,w*3),h.fromArray(r,F*3),p.fromArray(r,$*3),_.fromArray(s,w*2),x.fromArray(s,F*2),g.fromArray(s,$*2),h.sub(d),p.sub(d),x.sub(_),g.sub(_);const ee=1/(x.x*g.y-g.x*x.y);isFinite(ee)&&(f.copy(h).multiplyScalar(g.y).addScaledVector(p,-x.y).multiplyScalar(ee),v.copy(p).multiplyScalar(x.x).addScaledVector(h,-g.x).multiplyScalar(ee),u[w].add(f),u[F].add(f),u[$].add(f),c[w].add(v),c[F].add(v),c[$].add(v))}let y=this.groups;y.length===0&&(y=[{start:0,count:i.length}]);for(let w=0,F=y.length;w<F;++w){const $=y[w],ee=$.start,P=$.count;for(let O=ee,X=ee+P;O<X;O+=3)m(i[O+0],i[O+1],i[O+2])}const R=new B,A=new B,M=new B,N=new B;function E(w){M.fromArray(o,w*3),N.copy(M);const F=u[w];R.copy(F),R.sub(M.multiplyScalar(M.dot(F))).normalize(),A.crossVectors(N,F);const ee=A.dot(c[w])<0?-1:1;l[w*4]=R.x,l[w*4+1]=R.y,l[w*4+2]=R.z,l[w*4+3]=ee}for(let w=0,F=y.length;w<F;++w){const $=y[w],ee=$.start,P=$.count;for(let O=ee,X=ee+P;O<X;O+=3)E(i[O+0]),E(i[O+1]),E(i[O+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ri(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const r=new B,o=new B,s=new B,a=new B,l=new B,u=new B,c=new B,d=new B;if(e)for(let h=0,p=e.count;h<p;h+=3){const _=e.getX(h+0),x=e.getX(h+1),g=e.getX(h+2);r.fromBufferAttribute(n,_),o.fromBufferAttribute(n,x),s.fromBufferAttribute(n,g),c.subVectors(s,o),d.subVectors(r,o),c.cross(d),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,x),u.fromBufferAttribute(i,g),a.add(c),l.add(c),u.add(c),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(g,u.x,u.y,u.z)}else for(let h=0,p=n.count;h<p;h+=3)r.fromBufferAttribute(n,h+0),o.fromBufferAttribute(n,h+1),s.fromBufferAttribute(n,h+2),c.subVectors(s,o),d.subVectors(r,o),c.cross(d),i.setXYZ(h+0,c.x,c.y,c.z),i.setXYZ(h+1,c.x,c.y,c.z),i.setXYZ(h+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)It.fromBufferAttribute(e,n),It.normalize(),e.setXYZ(n,It.x,It.y,It.z)}toNonIndexed(){function e(a,l){const u=a.array,c=a.itemSize,d=a.normalized,h=new u.constructor(l.length*c);let p=0,_=0;for(let x=0,g=l.length;x<g;x++){a.isInterleavedBufferAttribute?p=l[x]*a.data.stride+a.offset:p=l[x]*c;for(let f=0;f<c;f++)h[_++]=u[p++]}return new ri(h,c,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Gi,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);n.setAttribute(a,u)}const o=this.morphAttributes;for(const a in o){const l=[],u=o[a];for(let c=0,d=u.length;c<d;c++){const h=u[c],p=e(h,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let a=0,l=s.length;a<l;a++){const u=s[a];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let o=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let d=0,h=u.length;d<h;d++){const p=u[d];c.push(p.toJSON(e.data))}c.length>0&&(r[l]=c,o=!0)}o&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(n))}const o=e.morphAttributes;for(const u in o){const c=[],d=o[u];for(let h=0,p=d.length;h<p;h++)c.push(d[h].clone(n));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let u=0,c=s.length;u<c;u++){const d=s[u];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Dg=new Gt,br=new F1,ul=new Qh,Ug=new B,xo=new B,yo=new B,So=new B,pf=new B,cl=new B,fl=new Ze,dl=new Ze,hl=new Ze,Fg=new B,Og=new B,Bg=new B,pl=new B,ml=new B;class ti extends An{constructor(e=new Gi,n=new ba){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){const a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,o=i.morphAttributes.position,s=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(o&&a){cl.set(0,0,0);for(let l=0,u=o.length;l<u;l++){const c=a[l],d=o[l];c!==0&&(pf.fromBufferAttribute(d,e),s?cl.addScaledVector(pf,c):cl.addScaledVector(pf.sub(n),c))}n.add(cl)}return n}raycast(e,n){const i=this.geometry,r=this.material,o=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ul.copy(i.boundingSphere),ul.applyMatrix4(o),br.copy(e.ray).recast(e.near),!(ul.containsPoint(br.origin)===!1&&(br.intersectSphere(ul,Ug)===null||br.origin.distanceToSquared(Ug)>(e.far-e.near)**2))&&(Dg.copy(o).invert(),br.copy(e.ray).applyMatrix4(Dg),!(i.boundingBox!==null&&br.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,br)))}_computeIntersections(e,n,i){let r;const o=this.geometry,s=this.material,a=o.index,l=o.attributes.position,u=o.attributes.uv,c=o.attributes.uv1,d=o.attributes.normal,h=o.groups,p=o.drawRange;if(a!==null)if(Array.isArray(s))for(let _=0,x=h.length;_<x;_++){const g=h[_],f=s[g.materialIndex],v=Math.max(g.start,p.start),m=Math.min(a.count,Math.min(g.start+g.count,p.start+p.count));for(let y=v,R=m;y<R;y+=3){const A=a.getX(y),M=a.getX(y+1),N=a.getX(y+2);r=gl(this,f,e,i,u,c,d,A,M,N),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const _=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let g=_,f=x;g<f;g+=3){const v=a.getX(g),m=a.getX(g+1),y=a.getX(g+2);r=gl(this,s,e,i,u,c,d,v,m,y),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(s))for(let _=0,x=h.length;_<x;_++){const g=h[_],f=s[g.materialIndex],v=Math.max(g.start,p.start),m=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let y=v,R=m;y<R;y+=3){const A=y,M=y+1,N=y+2;r=gl(this,f,e,i,u,c,d,A,M,N),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const _=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let g=_,f=x;g<f;g+=3){const v=g,m=g+1,y=g+2;r=gl(this,s,e,i,u,c,d,v,m,y),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}}}function dT(t,e,n,i,r,o,s,a){let l;if(e.side===vn?l=i.intersectTriangle(s,o,r,!0,a):l=i.intersectTriangle(r,o,s,e.side===xr,a),l===null)return null;ml.copy(a),ml.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(ml);return u<n.near||u>n.far?null:{distance:u,point:ml.clone(),object:t}}function gl(t,e,n,i,r,o,s,a,l,u){t.getVertexPosition(a,xo),t.getVertexPosition(l,yo),t.getVertexPosition(u,So);const c=dT(t,e,n,i,xo,yo,So,pl);if(c){r&&(fl.fromBufferAttribute(r,a),dl.fromBufferAttribute(r,l),hl.fromBufferAttribute(r,u),c.uv=Qn.getInterpolation(pl,xo,yo,So,fl,dl,hl,new Ze)),o&&(fl.fromBufferAttribute(o,a),dl.fromBufferAttribute(o,l),hl.fromBufferAttribute(o,u),c.uv1=Qn.getInterpolation(pl,xo,yo,So,fl,dl,hl,new Ze),c.uv2=c.uv1),s&&(Fg.fromBufferAttribute(s,a),Og.fromBufferAttribute(s,l),Bg.fromBufferAttribute(s,u),c.normal=Qn.getInterpolation(pl,xo,yo,So,Fg,Og,Bg,new B),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const d={a,b:l,c:u,normal:new B,materialIndex:0};Qn.getNormal(xo,yo,So,d.normal),c.face=d}return c}class Pa extends Gi{constructor(e=1,n=1,i=1,r=1,o=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:o,depthSegments:s};const a=this;r=Math.floor(r),o=Math.floor(o),s=Math.floor(s);const l=[],u=[],c=[],d=[];let h=0,p=0;_("z","y","x",-1,-1,i,n,e,s,o,0),_("z","y","x",1,-1,i,n,-e,s,o,1),_("x","z","y",1,1,e,i,n,r,s,2),_("x","z","y",1,-1,e,i,-n,r,s,3),_("x","y","z",1,-1,e,n,i,r,o,4),_("x","y","z",-1,-1,e,n,-i,r,o,5),this.setIndex(l),this.setAttribute("position",new _i(u,3)),this.setAttribute("normal",new _i(c,3)),this.setAttribute("uv",new _i(d,2));function _(x,g,f,v,m,y,R,A,M,N,E){const w=y/M,F=R/N,$=y/2,ee=R/2,P=A/2,O=M+1,X=N+1;let q=0,L=0;const I=new B;for(let G=0;G<X;G++){const j=G*F-ee;for(let Z=0;Z<O;Z++){const W=Z*w-$;I[x]=W*v,I[g]=j*m,I[f]=P,u.push(I.x,I.y,I.z),I[x]=0,I[g]=0,I[f]=A>0?1:-1,c.push(I.x,I.y,I.z),d.push(Z/M),d.push(1-G/N),q+=1}}for(let G=0;G<N;G++)for(let j=0;j<M;j++){const Z=h+j+O*G,W=h+j+O*(G+1),Y=h+(j+1)+O*(G+1),oe=h+(j+1)+O*G;l.push(Z,W,oe),l.push(W,Y,oe),L+=6}a.addGroup(p,L,E),p+=L,h+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pa(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function us(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function rn(t){const e={};for(let n=0;n<t.length;n++){const i=us(t[n]);for(const r in i)e[r]=i[r]}return e}function hT(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function H1(t){return t.getRenderTarget()===null?t.outputColorSpace:nt.workingColorSpace}const pT={clone:us,merge:rn};var mT=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,gT=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class to extends ic{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=mT,this.fragmentShader=gT,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=us(e.uniforms),this.uniformsGroups=hT(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const s=this.uniforms[r].value;s&&s.isTexture?n.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?n.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?n.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?n.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?n.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?n.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?n.uniforms[r]={type:"m4",value:s.toArray()}:n.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class z1 extends An{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Gt,this.projectionMatrix=new Gt,this.projectionMatrixInverse=new Gt,this.coordinateSystem=Di}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Fn extends z1{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=va*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ys*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return va*2*Math.atan(Math.tan(Ys*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,i,r,o,s){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Ys*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,o=-.5*r;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,u=s.fullHeight;o+=s.offsetX*r/l,n-=s.offsetY*i/u,r*=s.width/l,i*=s.height/u}const a=this.filmOffset;a!==0&&(o+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Eo=-90,Mo=1;class vT extends An{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Fn(Eo,Mo,e,n);r.layers=this.layers,this.add(r);const o=new Fn(Eo,Mo,e,n);o.layers=this.layers,this.add(o);const s=new Fn(Eo,Mo,e,n);s.layers=this.layers,this.add(s);const a=new Fn(Eo,Mo,e,n);a.layers=this.layers,this.add(a);const l=new Fn(Eo,Mo,e,n);l.layers=this.layers,this.add(l);const u=new Fn(Eo,Mo,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,o,s,a,l]=n;for(const u of n)this.remove(u);if(e===Di)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===_u)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,s,a,l,u,c]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,o),e.setRenderTarget(i,1,r),e.render(n,s),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,u),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),e.render(n,c),e.setRenderTarget(d,h,p),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class G1 extends wn{constructor(e,n,i,r,o,s,a,l,u,c){e=e!==void 0?e:[],n=n!==void 0?n:ss,super(e,n,i,r,o,s,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class _T extends eo{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];n.encoding!==void 0&&(Zs("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Xr?kt:On),this.texture=new G1(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Un}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Pa(5,5,5),o=new to({name:"CubemapFromEquirect",uniforms:us(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:vn,blending:hr});o.uniforms.tEquirect.value=n;const s=new ti(r,o),a=n.minFilter;return n.minFilter===ma&&(n.minFilter=Un),new vT(1,10,this).update(e,s),n.minFilter=a,s.geometry.dispose(),s.material.dispose(),this}clear(e,n,i,r){const o=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(n,i,r);e.setRenderTarget(o)}}const mf=new B,xT=new B,yT=new Ve;class Ir{constructor(e=new B(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=mf.subVectors(i,n).cross(xT.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(mf),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/r;return o<0||o>1?null:n.copy(e.start).addScaledVector(i,o)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||yT.getNormalMatrix(e),r=this.coplanarPoint(mf).applyMatrix4(e),o=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Pr=new Qh,vl=new B;class V1{constructor(e=new Ir,n=new Ir,i=new Ir,r=new Ir,o=new Ir,s=new Ir){this.planes=[e,n,i,r,o,s]}set(e,n,i,r,o,s){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(o),a[5].copy(s),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Di){const i=this.planes,r=e.elements,o=r[0],s=r[1],a=r[2],l=r[3],u=r[4],c=r[5],d=r[6],h=r[7],p=r[8],_=r[9],x=r[10],g=r[11],f=r[12],v=r[13],m=r[14],y=r[15];if(i[0].setComponents(l-o,h-u,g-p,y-f).normalize(),i[1].setComponents(l+o,h+u,g+p,y+f).normalize(),i[2].setComponents(l+s,h+c,g+_,y+v).normalize(),i[3].setComponents(l-s,h-c,g-_,y-v).normalize(),i[4].setComponents(l-a,h-d,g-x,y-m).normalize(),n===Di)i[5].setComponents(l+a,h+d,g+x,y+m).normalize();else if(n===_u)i[5].setComponents(a,d,x,m).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Pr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Pr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Pr)}intersectsSprite(e){return Pr.center.set(0,0,0),Pr.radius=.7071067811865476,Pr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Pr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let o=0;o<6;o++)if(n[o].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(vl.x=r.normal.x>0?e.max.x:e.min.x,vl.y=r.normal.y>0?e.max.y:e.min.y,vl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(vl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function W1(){let t=null,e=!1,n=null,i=null;function r(o,s){n(o,s),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(o){n=o},setContext:function(o){t=o}}}function ST(t,e){const n=e.isWebGL2,i=new WeakMap;function r(u,c){const d=u.array,h=u.usage,p=d.byteLength,_=t.createBuffer();t.bindBuffer(c,_),t.bufferData(c,d,h),u.onUploadCallback();let x;if(d instanceof Float32Array)x=t.FLOAT;else if(d instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(n)x=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=t.UNSIGNED_SHORT;else if(d instanceof Int16Array)x=t.SHORT;else if(d instanceof Uint32Array)x=t.UNSIGNED_INT;else if(d instanceof Int32Array)x=t.INT;else if(d instanceof Int8Array)x=t.BYTE;else if(d instanceof Uint8Array)x=t.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)x=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:_,type:x,bytesPerElement:d.BYTES_PER_ELEMENT,version:u.version,size:p}}function o(u,c,d){const h=c.array,p=c._updateRange,_=c.updateRanges;if(t.bindBuffer(d,u),p.count===-1&&_.length===0&&t.bufferSubData(d,0,h),_.length!==0){for(let x=0,g=_.length;x<g;x++){const f=_[x];n?t.bufferSubData(d,f.start*h.BYTES_PER_ELEMENT,h,f.start,f.count):t.bufferSubData(d,f.start*h.BYTES_PER_ELEMENT,h.subarray(f.start,f.start+f.count))}c.clearUpdateRanges()}p.count!==-1&&(n?t.bufferSubData(d,p.offset*h.BYTES_PER_ELEMENT,h,p.offset,p.count):t.bufferSubData(d,p.offset*h.BYTES_PER_ELEMENT,h.subarray(p.offset,p.offset+p.count)),p.count=-1),c.onUploadCallback()}function s(u){return u.isInterleavedBufferAttribute&&(u=u.data),i.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const c=i.get(u);c&&(t.deleteBuffer(c.buffer),i.delete(u))}function l(u,c){if(u.isGLBufferAttribute){const h=i.get(u);(!h||h.version<u.version)&&i.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const d=i.get(u);if(d===void 0)i.set(u,r(u,c));else if(d.version<u.version){if(d.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");o(d.buffer,u,c),d.version=u.version}}return{get:s,remove:a,update:l}}class ep extends Gi{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const o=e/2,s=n/2,a=Math.floor(i),l=Math.floor(r),u=a+1,c=l+1,d=e/a,h=n/l,p=[],_=[],x=[],g=[];for(let f=0;f<c;f++){const v=f*h-s;for(let m=0;m<u;m++){const y=m*d-o;_.push(y,-v,0),x.push(0,0,1),g.push(m/a),g.push(1-f/l)}}for(let f=0;f<l;f++)for(let v=0;v<a;v++){const m=v+u*f,y=v+u*(f+1),R=v+1+u*(f+1),A=v+1+u*f;p.push(m,y,A),p.push(y,R,A)}this.setIndex(p),this.setAttribute("position",new _i(_,3)),this.setAttribute("normal",new _i(x,3)),this.setAttribute("uv",new _i(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ep(e.width,e.height,e.widthSegments,e.heightSegments)}}var ET=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,MT=`#ifdef USE_ALPHAHASH
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
#endif`,TT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,wT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,AT=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,CT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,RT=`#ifdef USE_AOMAP
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
#endif`,bT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,PT=`#ifdef USE_BATCHING
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
#endif`,LT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,NT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,IT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,DT=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,UT=`#ifdef USE_IRIDESCENCE
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
#endif`,FT=`#ifdef USE_BUMPMAP
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
#endif`,OT=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,BT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,kT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,HT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,zT=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,GT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,VT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,WT=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,XT=`#define PI 3.141592653589793
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
} // validated`,$T=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,jT=`vec3 transformedNormal = objectNormal;
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
#endif`,YT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,qT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ZT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,KT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,QT="gl_FragColor = linearToOutputTexel( gl_FragColor );",JT=`
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
}`,ew=`#ifdef USE_ENVMAP
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
#endif`,tw=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,nw=`#ifdef USE_ENVMAP
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
#endif`,iw=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,rw=`#ifdef USE_ENVMAP
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
#endif`,ow=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,sw=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,aw=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,lw=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,uw=`#ifdef USE_GRADIENTMAP
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
}`,cw=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,fw=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,dw=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,hw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,pw=`uniform bool receiveShadow;
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
#endif`,mw=`#ifdef USE_ENVMAP
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
#endif`,gw=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,vw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,_w=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,xw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,yw=`PhysicalMaterial material;
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
#endif`,Sw=`struct PhysicalMaterial {
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
}`,Ew=`
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
#endif`,Mw=`#if defined( RE_IndirectDiffuse )
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
#endif`,Tw=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ww=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Aw=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Cw=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Rw=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,bw=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Pw=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Lw=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Nw=`#if defined( USE_POINTS_UV )
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
#endif`,Iw=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Dw=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Uw=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Fw=`#ifdef USE_MORPHNORMALS
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
#endif`,Ow=`#ifdef USE_MORPHTARGETS
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
#endif`,Bw=`#ifdef USE_MORPHTARGETS
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
#endif`,kw=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Hw=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,zw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vw=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ww=`#ifdef USE_NORMALMAP
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
#endif`,Xw=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,$w=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,jw=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Yw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,qw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Zw=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Kw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Qw=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Jw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,eA=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,tA=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,nA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,iA=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,rA=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,oA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,sA=`float getShadowMask() {
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
}`,aA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,lA=`#ifdef USE_SKINNING
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
#endif`,uA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,cA=`#ifdef USE_SKINNING
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
#endif`,fA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,dA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,hA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,pA=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,mA=`#ifdef USE_TRANSMISSION
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
#endif`,gA=`#ifdef USE_TRANSMISSION
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
#endif`,vA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_A=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const SA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,EA=`uniform sampler2D t2D;
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
}`,MA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,TA=`#ifdef ENVMAP_TYPE_CUBE
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
}`,wA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,AA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,CA=`#include <common>
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
}`,RA=`#if DEPTH_PACKING == 3200
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
}`,bA=`#define DISTANCE
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
}`,PA=`#define DISTANCE
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
}`,LA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,NA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,IA=`uniform float scale;
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
}`,DA=`uniform vec3 diffuse;
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
}`,UA=`#include <common>
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
}`,FA=`uniform vec3 diffuse;
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
}`,OA=`#define LAMBERT
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
}`,BA=`#define LAMBERT
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
}`,kA=`#define MATCAP
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
}`,HA=`#define MATCAP
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
}`,zA=`#define NORMAL
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
}`,GA=`#define NORMAL
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
}`,VA=`#define PHONG
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
}`,WA=`#define PHONG
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
}`,XA=`#define STANDARD
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
}`,$A=`#define STANDARD
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
}`,jA=`#define TOON
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
}`,YA=`#define TOON
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
}`,qA=`uniform float size;
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
}`,ZA=`uniform vec3 diffuse;
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
}`,KA=`#include <common>
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
}`,QA=`uniform vec3 color;
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
}`,JA=`uniform float rotation;
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
}`,eC=`uniform vec3 diffuse;
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
}`,Ue={alphahash_fragment:ET,alphahash_pars_fragment:MT,alphamap_fragment:TT,alphamap_pars_fragment:wT,alphatest_fragment:AT,alphatest_pars_fragment:CT,aomap_fragment:RT,aomap_pars_fragment:bT,batching_pars_vertex:PT,batching_vertex:LT,begin_vertex:NT,beginnormal_vertex:IT,bsdfs:DT,iridescence_fragment:UT,bumpmap_pars_fragment:FT,clipping_planes_fragment:OT,clipping_planes_pars_fragment:BT,clipping_planes_pars_vertex:kT,clipping_planes_vertex:HT,color_fragment:zT,color_pars_fragment:GT,color_pars_vertex:VT,color_vertex:WT,common:XT,cube_uv_reflection_fragment:$T,defaultnormal_vertex:jT,displacementmap_pars_vertex:YT,displacementmap_vertex:qT,emissivemap_fragment:ZT,emissivemap_pars_fragment:KT,colorspace_fragment:QT,colorspace_pars_fragment:JT,envmap_fragment:ew,envmap_common_pars_fragment:tw,envmap_pars_fragment:nw,envmap_pars_vertex:iw,envmap_physical_pars_fragment:mw,envmap_vertex:rw,fog_vertex:ow,fog_pars_vertex:sw,fog_fragment:aw,fog_pars_fragment:lw,gradientmap_pars_fragment:uw,lightmap_fragment:cw,lightmap_pars_fragment:fw,lights_lambert_fragment:dw,lights_lambert_pars_fragment:hw,lights_pars_begin:pw,lights_toon_fragment:gw,lights_toon_pars_fragment:vw,lights_phong_fragment:_w,lights_phong_pars_fragment:xw,lights_physical_fragment:yw,lights_physical_pars_fragment:Sw,lights_fragment_begin:Ew,lights_fragment_maps:Mw,lights_fragment_end:Tw,logdepthbuf_fragment:ww,logdepthbuf_pars_fragment:Aw,logdepthbuf_pars_vertex:Cw,logdepthbuf_vertex:Rw,map_fragment:bw,map_pars_fragment:Pw,map_particle_fragment:Lw,map_particle_pars_fragment:Nw,metalnessmap_fragment:Iw,metalnessmap_pars_fragment:Dw,morphcolor_vertex:Uw,morphnormal_vertex:Fw,morphtarget_pars_vertex:Ow,morphtarget_vertex:Bw,normal_fragment_begin:kw,normal_fragment_maps:Hw,normal_pars_fragment:zw,normal_pars_vertex:Gw,normal_vertex:Vw,normalmap_pars_fragment:Ww,clearcoat_normal_fragment_begin:Xw,clearcoat_normal_fragment_maps:$w,clearcoat_pars_fragment:jw,iridescence_pars_fragment:Yw,opaque_fragment:qw,packing:Zw,premultiplied_alpha_fragment:Kw,project_vertex:Qw,dithering_fragment:Jw,dithering_pars_fragment:eA,roughnessmap_fragment:tA,roughnessmap_pars_fragment:nA,shadowmap_pars_fragment:iA,shadowmap_pars_vertex:rA,shadowmap_vertex:oA,shadowmask_pars_fragment:sA,skinbase_vertex:aA,skinning_pars_vertex:lA,skinning_vertex:uA,skinnormal_vertex:cA,specularmap_fragment:fA,specularmap_pars_fragment:dA,tonemapping_fragment:hA,tonemapping_pars_fragment:pA,transmission_fragment:mA,transmission_pars_fragment:gA,uv_pars_fragment:vA,uv_pars_vertex:_A,uv_vertex:xA,worldpos_vertex:yA,background_vert:SA,background_frag:EA,backgroundCube_vert:MA,backgroundCube_frag:TA,cube_vert:wA,cube_frag:AA,depth_vert:CA,depth_frag:RA,distanceRGBA_vert:bA,distanceRGBA_frag:PA,equirect_vert:LA,equirect_frag:NA,linedashed_vert:IA,linedashed_frag:DA,meshbasic_vert:UA,meshbasic_frag:FA,meshlambert_vert:OA,meshlambert_frag:BA,meshmatcap_vert:kA,meshmatcap_frag:HA,meshnormal_vert:zA,meshnormal_frag:GA,meshphong_vert:VA,meshphong_frag:WA,meshphysical_vert:XA,meshphysical_frag:$A,meshtoon_vert:jA,meshtoon_frag:YA,points_vert:qA,points_frag:ZA,shadow_vert:KA,shadow_frag:QA,sprite_vert:JA,sprite_frag:eC},re={common:{diffuse:{value:new it(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ve}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ve},normalScale:{value:new Ze(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new it(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new it(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0},uvTransform:{value:new Ve}},sprite:{diffuse:{value:new it(16777215)},opacity:{value:1},center:{value:new Ze(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}}},hi={basic:{uniforms:rn([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.fog]),vertexShader:Ue.meshbasic_vert,fragmentShader:Ue.meshbasic_frag},lambert:{uniforms:rn([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new it(0)}}]),vertexShader:Ue.meshlambert_vert,fragmentShader:Ue.meshlambert_frag},phong:{uniforms:rn([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new it(0)},specular:{value:new it(1118481)},shininess:{value:30}}]),vertexShader:Ue.meshphong_vert,fragmentShader:Ue.meshphong_frag},standard:{uniforms:rn([re.common,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.roughnessmap,re.metalnessmap,re.fog,re.lights,{emissive:{value:new it(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag},toon:{uniforms:rn([re.common,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.gradientmap,re.fog,re.lights,{emissive:{value:new it(0)}}]),vertexShader:Ue.meshtoon_vert,fragmentShader:Ue.meshtoon_frag},matcap:{uniforms:rn([re.common,re.bumpmap,re.normalmap,re.displacementmap,re.fog,{matcap:{value:null}}]),vertexShader:Ue.meshmatcap_vert,fragmentShader:Ue.meshmatcap_frag},points:{uniforms:rn([re.points,re.fog]),vertexShader:Ue.points_vert,fragmentShader:Ue.points_frag},dashed:{uniforms:rn([re.common,re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ue.linedashed_vert,fragmentShader:Ue.linedashed_frag},depth:{uniforms:rn([re.common,re.displacementmap]),vertexShader:Ue.depth_vert,fragmentShader:Ue.depth_frag},normal:{uniforms:rn([re.common,re.bumpmap,re.normalmap,re.displacementmap,{opacity:{value:1}}]),vertexShader:Ue.meshnormal_vert,fragmentShader:Ue.meshnormal_frag},sprite:{uniforms:rn([re.sprite,re.fog]),vertexShader:Ue.sprite_vert,fragmentShader:Ue.sprite_frag},background:{uniforms:{uvTransform:{value:new Ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ue.background_vert,fragmentShader:Ue.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ue.backgroundCube_vert,fragmentShader:Ue.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ue.cube_vert,fragmentShader:Ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ue.equirect_vert,fragmentShader:Ue.equirect_frag},distanceRGBA:{uniforms:rn([re.common,re.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ue.distanceRGBA_vert,fragmentShader:Ue.distanceRGBA_frag},shadow:{uniforms:rn([re.lights,re.fog,{color:{value:new it(0)},opacity:{value:1}}]),vertexShader:Ue.shadow_vert,fragmentShader:Ue.shadow_frag}};hi.physical={uniforms:rn([hi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ve},clearcoatNormalScale:{value:new Ze(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ve},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ve},sheen:{value:0},sheenColor:{value:new it(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ve},transmissionSamplerSize:{value:new Ze},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ve},attenuationDistance:{value:0},attenuationColor:{value:new it(0)},specularColor:{value:new it(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ve},anisotropyVector:{value:new Ze},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ve}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag};const _l={r:0,b:0,g:0};function tC(t,e,n,i,r,o,s){const a=new it(0);let l=o===!0?0:1,u,c,d=null,h=0,p=null;function _(g,f){let v=!1,m=f.isScene===!0?f.background:null;m&&m.isTexture&&(m=(f.backgroundBlurriness>0?n:e).get(m)),m===null?x(a,l):m&&m.isColor&&(x(m,1),v=!0);const y=t.xr.getEnvironmentBlendMode();y==="additive"?i.buffers.color.setClear(0,0,0,1,s):y==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,s),(t.autoClear||v)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),m&&(m.isCubeTexture||m.mapping===ec)?(c===void 0&&(c=new ti(new Pa(1,1,1),new to({name:"BackgroundCubeMaterial",uniforms:us(hi.backgroundCube.uniforms),vertexShader:hi.backgroundCube.vertexShader,fragmentShader:hi.backgroundCube.fragmentShader,side:vn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(R,A,M){this.matrixWorld.copyPosition(M.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),c.material.uniforms.envMap.value=m,c.material.uniforms.flipEnvMap.value=m.isCubeTexture&&m.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.toneMapped=nt.getTransfer(m.colorSpace)!==ct,(d!==m||h!==m.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,d=m,h=m.version,p=t.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null)):m&&m.isTexture&&(u===void 0&&(u=new ti(new ep(2,2),new to({name:"BackgroundMaterial",uniforms:us(hi.background.uniforms),vertexShader:hi.background.vertexShader,fragmentShader:hi.background.fragmentShader,side:xr,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=m,u.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,u.material.toneMapped=nt.getTransfer(m.colorSpace)!==ct,m.matrixAutoUpdate===!0&&m.updateMatrix(),u.material.uniforms.uvTransform.value.copy(m.matrix),(d!==m||h!==m.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,d=m,h=m.version,p=t.toneMapping),u.layers.enableAll(),g.unshift(u,u.geometry,u.material,0,0,null))}function x(g,f){g.getRGB(_l,H1(t)),i.buffers.color.setClear(_l.r,_l.g,_l.b,f,s)}return{getClearColor:function(){return a},setClearColor:function(g,f=1){a.set(g),l=f,x(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(g){l=g,x(a,l)},render:_}}function nC(t,e,n,i){const r=t.getParameter(t.MAX_VERTEX_ATTRIBS),o=i.isWebGL2?null:e.get("OES_vertex_array_object"),s=i.isWebGL2||o!==null,a={},l=g(null);let u=l,c=!1;function d(P,O,X,q,L){let I=!1;if(s){const G=x(q,X,O);u!==G&&(u=G,p(u.object)),I=f(P,q,X,L),I&&v(P,q,X,L)}else{const G=O.wireframe===!0;(u.geometry!==q.id||u.program!==X.id||u.wireframe!==G)&&(u.geometry=q.id,u.program=X.id,u.wireframe=G,I=!0)}L!==null&&n.update(L,t.ELEMENT_ARRAY_BUFFER),(I||c)&&(c=!1,N(P,O,X,q),L!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(L).buffer))}function h(){return i.isWebGL2?t.createVertexArray():o.createVertexArrayOES()}function p(P){return i.isWebGL2?t.bindVertexArray(P):o.bindVertexArrayOES(P)}function _(P){return i.isWebGL2?t.deleteVertexArray(P):o.deleteVertexArrayOES(P)}function x(P,O,X){const q=X.wireframe===!0;let L=a[P.id];L===void 0&&(L={},a[P.id]=L);let I=L[O.id];I===void 0&&(I={},L[O.id]=I);let G=I[q];return G===void 0&&(G=g(h()),I[q]=G),G}function g(P){const O=[],X=[],q=[];for(let L=0;L<r;L++)O[L]=0,X[L]=0,q[L]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:X,attributeDivisors:q,object:P,attributes:{},index:null}}function f(P,O,X,q){const L=u.attributes,I=O.attributes;let G=0;const j=X.getAttributes();for(const Z in j)if(j[Z].location>=0){const Y=L[Z];let oe=I[Z];if(oe===void 0&&(Z==="instanceMatrix"&&P.instanceMatrix&&(oe=P.instanceMatrix),Z==="instanceColor"&&P.instanceColor&&(oe=P.instanceColor)),Y===void 0||Y.attribute!==oe||oe&&Y.data!==oe.data)return!0;G++}return u.attributesNum!==G||u.index!==q}function v(P,O,X,q){const L={},I=O.attributes;let G=0;const j=X.getAttributes();for(const Z in j)if(j[Z].location>=0){let Y=I[Z];Y===void 0&&(Z==="instanceMatrix"&&P.instanceMatrix&&(Y=P.instanceMatrix),Z==="instanceColor"&&P.instanceColor&&(Y=P.instanceColor));const oe={};oe.attribute=Y,Y&&Y.data&&(oe.data=Y.data),L[Z]=oe,G++}u.attributes=L,u.attributesNum=G,u.index=q}function m(){const P=u.newAttributes;for(let O=0,X=P.length;O<X;O++)P[O]=0}function y(P){R(P,0)}function R(P,O){const X=u.newAttributes,q=u.enabledAttributes,L=u.attributeDivisors;X[P]=1,q[P]===0&&(t.enableVertexAttribArray(P),q[P]=1),L[P]!==O&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,O),L[P]=O)}function A(){const P=u.newAttributes,O=u.enabledAttributes;for(let X=0,q=O.length;X<q;X++)O[X]!==P[X]&&(t.disableVertexAttribArray(X),O[X]=0)}function M(P,O,X,q,L,I,G){G===!0?t.vertexAttribIPointer(P,O,X,L,I):t.vertexAttribPointer(P,O,X,q,L,I)}function N(P,O,X,q){if(i.isWebGL2===!1&&(P.isInstancedMesh||q.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;m();const L=q.attributes,I=X.getAttributes(),G=O.defaultAttributeValues;for(const j in I){const Z=I[j];if(Z.location>=0){let W=L[j];if(W===void 0&&(j==="instanceMatrix"&&P.instanceMatrix&&(W=P.instanceMatrix),j==="instanceColor"&&P.instanceColor&&(W=P.instanceColor)),W!==void 0){const Y=W.normalized,oe=W.itemSize,ue=n.get(W);if(ue===void 0)continue;const de=ue.buffer,we=ue.type,Me=ue.bytesPerElement,ye=i.isWebGL2===!0&&(we===t.INT||we===t.UNSIGNED_INT||W.gpuType===M1);if(W.isInterleavedBufferAttribute){const He=W.data,U=He.stride,Jt=W.offset;if(He.isInstancedInterleavedBuffer){for(let Se=0;Se<Z.locationSize;Se++)R(Z.location+Se,He.meshPerAttribute);P.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=He.meshPerAttribute*He.count)}else for(let Se=0;Se<Z.locationSize;Se++)y(Z.location+Se);t.bindBuffer(t.ARRAY_BUFFER,de);for(let Se=0;Se<Z.locationSize;Se++)M(Z.location+Se,oe/Z.locationSize,we,Y,U*Me,(Jt+oe/Z.locationSize*Se)*Me,ye)}else{if(W.isInstancedBufferAttribute){for(let He=0;He<Z.locationSize;He++)R(Z.location+He,W.meshPerAttribute);P.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let He=0;He<Z.locationSize;He++)y(Z.location+He);t.bindBuffer(t.ARRAY_BUFFER,de);for(let He=0;He<Z.locationSize;He++)M(Z.location+He,oe/Z.locationSize,we,Y,oe*Me,oe/Z.locationSize*He*Me,ye)}}else if(G!==void 0){const Y=G[j];if(Y!==void 0)switch(Y.length){case 2:t.vertexAttrib2fv(Z.location,Y);break;case 3:t.vertexAttrib3fv(Z.location,Y);break;case 4:t.vertexAttrib4fv(Z.location,Y);break;default:t.vertexAttrib1fv(Z.location,Y)}}}}A()}function E(){$();for(const P in a){const O=a[P];for(const X in O){const q=O[X];for(const L in q)_(q[L].object),delete q[L];delete O[X]}delete a[P]}}function w(P){if(a[P.id]===void 0)return;const O=a[P.id];for(const X in O){const q=O[X];for(const L in q)_(q[L].object),delete q[L];delete O[X]}delete a[P.id]}function F(P){for(const O in a){const X=a[O];if(X[P.id]===void 0)continue;const q=X[P.id];for(const L in q)_(q[L].object),delete q[L];delete X[P.id]}}function $(){ee(),c=!0,u!==l&&(u=l,p(u.object))}function ee(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:$,resetDefaultState:ee,dispose:E,releaseStatesOfGeometry:w,releaseStatesOfProgram:F,initAttributes:m,enableAttribute:y,disableUnusedAttributes:A}}function iC(t,e,n,i){const r=i.isWebGL2;let o;function s(c){o=c}function a(c,d){t.drawArrays(o,c,d),n.update(d,o,1)}function l(c,d,h){if(h===0)return;let p,_;if(r)p=t,_="drawArraysInstanced";else if(p=e.get("ANGLE_instanced_arrays"),_="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[_](o,c,d,h),n.update(d,o,h)}function u(c,d,h){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<h;_++)this.render(c[_],d[_]);else{p.multiDrawArraysWEBGL(o,c,0,d,0,h);let _=0;for(let x=0;x<h;x++)_+=d[x];n.update(_,o,1)}}this.setMode=s,this.render=a,this.renderInstances=l,this.renderMultiDraw=u}function rC(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const M=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(M.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(M){if(M==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";M="mediump"}return M==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const s=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let a=n.precision!==void 0?n.precision:"highp";const l=o(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const u=s||e.has("WEBGL_draw_buffers"),c=n.logarithmicDepthBuffer===!0,d=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),h=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=t.getParameter(t.MAX_TEXTURE_SIZE),_=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),x=t.getParameter(t.MAX_VERTEX_ATTRIBS),g=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),f=t.getParameter(t.MAX_VARYING_VECTORS),v=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),m=h>0,y=s||e.has("OES_texture_float"),R=m&&y,A=s?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:s,drawBuffers:u,getMaxAnisotropy:r,getMaxPrecision:o,precision:a,logarithmicDepthBuffer:c,maxTextures:d,maxVertexTextures:h,maxTextureSize:p,maxCubemapSize:_,maxAttributes:x,maxVertexUniforms:g,maxVaryings:f,maxFragmentUniforms:v,vertexTextures:m,floatFragmentTextures:y,floatVertexTextures:R,maxSamples:A}}function oC(t){const e=this;let n=null,i=0,r=!1,o=!1;const s=new Ir,a=new Ve,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const p=d.length!==0||h||i!==0||r;return r=h,i=d.length,p},this.beginShadows=function(){o=!0,c(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(d,h){n=c(d,h,0)},this.setState=function(d,h,p){const _=d.clippingPlanes,x=d.clipIntersection,g=d.clipShadows,f=t.get(d);if(!r||_===null||_.length===0||o&&!g)o?c(null):u();else{const v=o?0:i,m=v*4;let y=f.clippingState||null;l.value=y,y=c(_,h,m,p);for(let R=0;R!==m;++R)y[R]=n[R];f.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(d,h,p,_){const x=d!==null?d.length:0;let g=null;if(x!==0){if(g=l.value,_!==!0||g===null){const f=p+x*4,v=h.matrixWorldInverse;a.getNormalMatrix(v),(g===null||g.length<f)&&(g=new Float32Array(f));for(let m=0,y=p;m!==x;++m,y+=4)s.copy(d[m]).applyMatrix4(v,a),s.normal.toArray(g,y),g[y+3]=s.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,g}}function sC(t){let e=new WeakMap;function n(s,a){return a===Nd?s.mapping=ss:a===Id&&(s.mapping=as),s}function i(s){if(s&&s.isTexture){const a=s.mapping;if(a===Nd||a===Id)if(e.has(s)){const l=e.get(s).texture;return n(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const u=new _T(l.height/2);return u.fromEquirectangularTexture(t,s),e.set(s,u),s.addEventListener("dispose",r),n(u.texture,s.mapping)}else return null}}return s}function r(s){const a=s.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function o(){e=new WeakMap}return{get:i,dispose:o}}class aC extends z1{constructor(e=-1,n=1,i=1,r=-1,o=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=o,this.far=s,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,o,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let o=i-e,s=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=u*this.view.offsetX,s=o+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(o,s,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const ko=4,kg=[.125,.215,.35,.446,.526,.582],Fr=20,gf=new aC,Hg=new it;let vf=null,_f=0,xf=0;const Dr=(1+Math.sqrt(5))/2,To=1/Dr,zg=[new B(1,1,1),new B(-1,1,1),new B(1,1,-1),new B(-1,1,-1),new B(0,Dr,To),new B(0,Dr,-To),new B(To,0,Dr),new B(-To,0,Dr),new B(Dr,To,0),new B(-Dr,To,0)];class Gg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){vf=this._renderer.getRenderTarget(),_f=this._renderer.getActiveCubeFace(),xf=this._renderer.getActiveMipmapLevel(),this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,i,r,o),n>0&&this._blur(o,0,0,n),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Xg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Wg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(vf,_f,xf),e.scissorTest=!1,xl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===ss||e.mapping===as?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),vf=this._renderer.getRenderTarget(),_f=this._renderer.getActiveCubeFace(),xf=this._renderer.getActiveMipmapLevel();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Un,minFilter:Un,generateMipmaps:!1,type:ga,format:ei,colorSpace:Hi,depthBuffer:!1},r=Vg(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Vg(e,n,i);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=lC(o)),this._blurMaterial=uC(o,e,n)}return r}_compileMaterial(e){const n=new ti(this._lodPlanes[0],e);this._renderer.compile(n,gf)}_sceneToCubeUV(e,n,i,r){const a=new Fn(90,1,n,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,d=c.autoClear,h=c.toneMapping;c.getClearColor(Hg),c.toneMapping=pr,c.autoClear=!1;const p=new ba({name:"PMREM.Background",side:vn,depthWrite:!1,depthTest:!1}),_=new ti(new Pa,p);let x=!1;const g=e.background;g?g.isColor&&(p.color.copy(g),e.background=null,x=!0):(p.color.copy(Hg),x=!0);for(let f=0;f<6;f++){const v=f%3;v===0?(a.up.set(0,l[f],0),a.lookAt(u[f],0,0)):v===1?(a.up.set(0,0,l[f]),a.lookAt(0,u[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,u[f]));const m=this._cubeSize;xl(r,v*m,f>2?m:0,m,m),c.setRenderTarget(r),x&&c.render(_,a),c.render(e,a)}_.geometry.dispose(),_.material.dispose(),c.toneMapping=h,c.autoClear=d,e.background=g}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===ss||e.mapping===as;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Xg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Wg());const o=r?this._cubemapMaterial:this._equirectMaterial,s=new ti(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=e;const l=this._cubeSize;xl(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(s,gf)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),s=zg[(r-1)%zg.length];this._blur(e,r-1,r,o,s)}n.autoClear=i}_blur(e,n,i,r,o){const s=this._pingPongRenderTarget;this._halfBlur(e,s,n,i,r,"latitudinal",o),this._halfBlur(s,e,i,i,r,"longitudinal",o)}_halfBlur(e,n,i,r,o,s,a){const l=this._renderer,u=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,d=new ti(this._lodPlanes[r],u),h=u.uniforms,p=this._sizeLods[i]-1,_=isFinite(o)?Math.PI/(2*p):2*Math.PI/(2*Fr-1),x=o/_,g=isFinite(o)?1+Math.floor(c*x):Fr;g>Fr&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Fr}`);const f=[];let v=0;for(let M=0;M<Fr;++M){const N=M/x,E=Math.exp(-N*N/2);f.push(E),M===0?v+=E:M<g&&(v+=2*E)}for(let M=0;M<f.length;M++)f[M]=f[M]/v;h.envMap.value=e.texture,h.samples.value=g,h.weights.value=f,h.latitudinal.value=s==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:m}=this;h.dTheta.value=_,h.mipInt.value=m-i;const y=this._sizeLods[r],R=3*y*(r>m-ko?r-m+ko:0),A=4*(this._cubeSize-y);xl(n,R,A,3*y,2*y),l.setRenderTarget(n),l.render(d,gf)}}function lC(t){const e=[],n=[],i=[];let r=t;const o=t-ko+1+kg.length;for(let s=0;s<o;s++){const a=Math.pow(2,r);n.push(a);let l=1/a;s>t-ko?l=kg[s-t+ko-1]:s===0&&(l=0),i.push(l);const u=1/(a-2),c=-u,d=1+u,h=[c,c,d,c,d,d,c,c,d,d,c,d],p=6,_=6,x=3,g=2,f=1,v=new Float32Array(x*_*p),m=new Float32Array(g*_*p),y=new Float32Array(f*_*p);for(let A=0;A<p;A++){const M=A%3*2/3-1,N=A>2?0:-1,E=[M,N,0,M+2/3,N,0,M+2/3,N+1,0,M,N,0,M+2/3,N+1,0,M,N+1,0];v.set(E,x*_*A),m.set(h,g*_*A);const w=[A,A,A,A,A,A];y.set(w,f*_*A)}const R=new Gi;R.setAttribute("position",new ri(v,x)),R.setAttribute("uv",new ri(m,g)),R.setAttribute("faceIndex",new ri(y,f)),e.push(R),r>ko&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Vg(t,e,n){const i=new eo(t,e,n);return i.texture.mapping=ec,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function xl(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function uC(t,e,n){const i=new Float32Array(Fr),r=new B(0,1,0);return new to({name:"SphericalGaussianBlur",defines:{n:Fr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:tp(),fragmentShader:`

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
		`,blending:hr,depthTest:!1,depthWrite:!1})}function Wg(){return new to({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:tp(),fragmentShader:`

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
		`,blending:hr,depthTest:!1,depthWrite:!1})}function Xg(){return new to({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:tp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:hr,depthTest:!1,depthWrite:!1})}function tp(){return`

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
	`}function cC(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===Nd||l===Id,c=l===ss||l===as;if(u||c)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=e.get(a);return n===null&&(n=new Gg(t)),d=u?n.fromEquirectangular(a,d):n.fromCubemap(a,d),e.set(a,d),d.texture}else{if(e.has(a))return e.get(a).texture;{const d=a.image;if(u&&d&&d.height>0||c&&d&&r(d)){n===null&&(n=new Gg(t));const h=u?n.fromEquirectangular(a):n.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",o),h.texture}else return null}}}return a}function r(a){let l=0;const u=6;for(let c=0;c<u;c++)a[c]!==void 0&&l++;return l===u}function o(a){const l=a.target;l.removeEventListener("dispose",o);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function s(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:s}}function fC(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?(n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance")):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function dC(t,e,n,i){const r={},o=new WeakMap;function s(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);for(const _ in h.morphAttributes){const x=h.morphAttributes[_];for(let g=0,f=x.length;g<f;g++)e.remove(x[g])}h.removeEventListener("dispose",s),delete r[h.id];const p=o.get(h);p&&(e.remove(p),o.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function a(d,h){return r[h.id]===!0||(h.addEventListener("dispose",s),r[h.id]=!0,n.memory.geometries++),h}function l(d){const h=d.attributes;for(const _ in h)e.update(h[_],t.ARRAY_BUFFER);const p=d.morphAttributes;for(const _ in p){const x=p[_];for(let g=0,f=x.length;g<f;g++)e.update(x[g],t.ARRAY_BUFFER)}}function u(d){const h=[],p=d.index,_=d.attributes.position;let x=0;if(p!==null){const v=p.array;x=p.version;for(let m=0,y=v.length;m<y;m+=3){const R=v[m+0],A=v[m+1],M=v[m+2];h.push(R,A,A,M,M,R)}}else if(_!==void 0){const v=_.array;x=_.version;for(let m=0,y=v.length/3-1;m<y;m+=3){const R=m+0,A=m+1,M=m+2;h.push(R,A,A,M,M,R)}}else return;const g=new(N1(h)?k1:B1)(h,1);g.version=x;const f=o.get(d);f&&e.remove(f),o.set(d,g)}function c(d){const h=o.get(d);if(h){const p=d.index;p!==null&&h.version<p.version&&u(d)}else u(d);return o.get(d)}return{get:a,update:l,getWireframeAttribute:c}}function hC(t,e,n,i){const r=i.isWebGL2;let o;function s(p){o=p}let a,l;function u(p){a=p.type,l=p.bytesPerElement}function c(p,_){t.drawElements(o,_,a,p*l),n.update(_,o,1)}function d(p,_,x){if(x===0)return;let g,f;if(r)g=t,f="drawElementsInstanced";else if(g=e.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[f](o,_,a,p*l,x),n.update(_,o,x)}function h(p,_,x){if(x===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let f=0;f<x;f++)this.render(p[f]/l,_[f]);else{g.multiDrawElementsWEBGL(o,_,0,a,p,0,x);let f=0;for(let v=0;v<x;v++)f+=_[v];n.update(f,o,1)}}this.setMode=s,this.setIndex=u,this.render=c,this.renderInstances=d,this.renderMultiDraw=h}function pC(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,s,a){switch(n.calls++,s){case t.TRIANGLES:n.triangles+=a*(o/3);break;case t.LINES:n.lines+=a*(o/2);break;case t.LINE_STRIP:n.lines+=a*(o-1);break;case t.LINE_LOOP:n.lines+=a*o;break;case t.POINTS:n.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function mC(t,e){return t[0]-e[0]}function gC(t,e){return Math.abs(e[1])-Math.abs(t[1])}function vC(t,e,n){const i={},r=new Float32Array(8),o=new WeakMap,s=new Ht,a=[];for(let u=0;u<8;u++)a[u]=[u,0];function l(u,c,d){const h=u.morphTargetInfluences;if(e.isWebGL2===!0){const p=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,_=p!==void 0?p.length:0;let x=o.get(c);if(x===void 0||x.count!==_){let P=function(){$.dispose(),o.delete(c),c.removeEventListener("dispose",P)};x!==void 0&&x.texture.dispose();const v=c.morphAttributes.position!==void 0,m=c.morphAttributes.normal!==void 0,y=c.morphAttributes.color!==void 0,R=c.morphAttributes.position||[],A=c.morphAttributes.normal||[],M=c.morphAttributes.color||[];let N=0;v===!0&&(N=1),m===!0&&(N=2),y===!0&&(N=3);let E=c.attributes.position.count*N,w=1;E>e.maxTextureSize&&(w=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const F=new Float32Array(E*w*4*_),$=new U1(F,E,w,_);$.type=rr,$.needsUpdate=!0;const ee=N*4;for(let O=0;O<_;O++){const X=R[O],q=A[O],L=M[O],I=E*w*4*O;for(let G=0;G<X.count;G++){const j=G*ee;v===!0&&(s.fromBufferAttribute(X,G),F[I+j+0]=s.x,F[I+j+1]=s.y,F[I+j+2]=s.z,F[I+j+3]=0),m===!0&&(s.fromBufferAttribute(q,G),F[I+j+4]=s.x,F[I+j+5]=s.y,F[I+j+6]=s.z,F[I+j+7]=0),y===!0&&(s.fromBufferAttribute(L,G),F[I+j+8]=s.x,F[I+j+9]=s.y,F[I+j+10]=s.z,F[I+j+11]=L.itemSize===4?s.w:1)}}x={count:_,texture:$,size:new Ze(E,w)},o.set(c,x),c.addEventListener("dispose",P)}let g=0;for(let v=0;v<h.length;v++)g+=h[v];const f=c.morphTargetsRelative?1:1-g;d.getUniforms().setValue(t,"morphTargetBaseInfluence",f),d.getUniforms().setValue(t,"morphTargetInfluences",h),d.getUniforms().setValue(t,"morphTargetsTexture",x.texture,n),d.getUniforms().setValue(t,"morphTargetsTextureSize",x.size)}else{const p=h===void 0?0:h.length;let _=i[c.id];if(_===void 0||_.length!==p){_=[];for(let m=0;m<p;m++)_[m]=[m,0];i[c.id]=_}for(let m=0;m<p;m++){const y=_[m];y[0]=m,y[1]=h[m]}_.sort(gC);for(let m=0;m<8;m++)m<p&&_[m][1]?(a[m][0]=_[m][0],a[m][1]=_[m][1]):(a[m][0]=Number.MAX_SAFE_INTEGER,a[m][1]=0);a.sort(mC);const x=c.morphAttributes.position,g=c.morphAttributes.normal;let f=0;for(let m=0;m<8;m++){const y=a[m],R=y[0],A=y[1];R!==Number.MAX_SAFE_INTEGER&&A?(x&&c.getAttribute("morphTarget"+m)!==x[R]&&c.setAttribute("morphTarget"+m,x[R]),g&&c.getAttribute("morphNormal"+m)!==g[R]&&c.setAttribute("morphNormal"+m,g[R]),r[m]=A,f+=A):(x&&c.hasAttribute("morphTarget"+m)===!0&&c.deleteAttribute("morphTarget"+m),g&&c.hasAttribute("morphNormal"+m)===!0&&c.deleteAttribute("morphNormal"+m),r[m]=0)}const v=c.morphTargetsRelative?1:1-f;d.getUniforms().setValue(t,"morphTargetBaseInfluence",v),d.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function _C(t,e,n,i){let r=new WeakMap;function o(l){const u=i.render.frame,c=l.geometry,d=e.get(l,c);if(r.get(d)!==u&&(e.update(d),r.set(d,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==u&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==u&&(h.update(),r.set(h,u))}return d}function s(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:o,dispose:s}}class X1 extends wn{constructor(e,n,i,r,o,s,a,l,u,c){if(c=c!==void 0?c:Wr,c!==Wr&&c!==ls)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===Wr&&(i=ir),i===void 0&&c===ls&&(i=Vr),super(null,r,o,s,a,l,c,i,u),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:an,this.minFilter=l!==void 0?l:an,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const $1=new wn,j1=new X1(1,1);j1.compareFunction=L1;const Y1=new U1,q1=new tT,Z1=new G1,$g=[],jg=[],Yg=new Float32Array(16),qg=new Float32Array(9),Zg=new Float32Array(4);function xs(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let o=$g[r];if(o===void 0&&(o=new Float32Array(r),$g[r]=o),e!==0){i.toArray(o,0);for(let s=1,a=0;s!==e;++s)a+=n,t[s].toArray(o,a)}return o}function bt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Pt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function rc(t,e){let n=jg[e];n===void 0&&(n=new Int32Array(e),jg[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function xC(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function yC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(bt(n,e))return;t.uniform2fv(this.addr,e),Pt(n,e)}}function SC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(bt(n,e))return;t.uniform3fv(this.addr,e),Pt(n,e)}}function EC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(bt(n,e))return;t.uniform4fv(this.addr,e),Pt(n,e)}}function MC(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(bt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Pt(n,e)}else{if(bt(n,i))return;Zg.set(i),t.uniformMatrix2fv(this.addr,!1,Zg),Pt(n,i)}}function TC(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(bt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Pt(n,e)}else{if(bt(n,i))return;qg.set(i),t.uniformMatrix3fv(this.addr,!1,qg),Pt(n,i)}}function wC(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(bt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Pt(n,e)}else{if(bt(n,i))return;Yg.set(i),t.uniformMatrix4fv(this.addr,!1,Yg),Pt(n,i)}}function AC(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function CC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(bt(n,e))return;t.uniform2iv(this.addr,e),Pt(n,e)}}function RC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(bt(n,e))return;t.uniform3iv(this.addr,e),Pt(n,e)}}function bC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(bt(n,e))return;t.uniform4iv(this.addr,e),Pt(n,e)}}function PC(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function LC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(bt(n,e))return;t.uniform2uiv(this.addr,e),Pt(n,e)}}function NC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(bt(n,e))return;t.uniform3uiv(this.addr,e),Pt(n,e)}}function IC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(bt(n,e))return;t.uniform4uiv(this.addr,e),Pt(n,e)}}function DC(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);const o=this.type===t.SAMPLER_2D_SHADOW?j1:$1;n.setTexture2D(e||o,r)}function UC(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||q1,r)}function FC(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Z1,r)}function OC(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Y1,r)}function BC(t){switch(t){case 5126:return xC;case 35664:return yC;case 35665:return SC;case 35666:return EC;case 35674:return MC;case 35675:return TC;case 35676:return wC;case 5124:case 35670:return AC;case 35667:case 35671:return CC;case 35668:case 35672:return RC;case 35669:case 35673:return bC;case 5125:return PC;case 36294:return LC;case 36295:return NC;case 36296:return IC;case 35678:case 36198:case 36298:case 36306:case 35682:return DC;case 35679:case 36299:case 36307:return UC;case 35680:case 36300:case 36308:case 36293:return FC;case 36289:case 36303:case 36311:case 36292:return OC}}function kC(t,e){t.uniform1fv(this.addr,e)}function HC(t,e){const n=xs(e,this.size,2);t.uniform2fv(this.addr,n)}function zC(t,e){const n=xs(e,this.size,3);t.uniform3fv(this.addr,n)}function GC(t,e){const n=xs(e,this.size,4);t.uniform4fv(this.addr,n)}function VC(t,e){const n=xs(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function WC(t,e){const n=xs(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function XC(t,e){const n=xs(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function $C(t,e){t.uniform1iv(this.addr,e)}function jC(t,e){t.uniform2iv(this.addr,e)}function YC(t,e){t.uniform3iv(this.addr,e)}function qC(t,e){t.uniform4iv(this.addr,e)}function ZC(t,e){t.uniform1uiv(this.addr,e)}function KC(t,e){t.uniform2uiv(this.addr,e)}function QC(t,e){t.uniform3uiv(this.addr,e)}function JC(t,e){t.uniform4uiv(this.addr,e)}function eR(t,e,n){const i=this.cache,r=e.length,o=rc(n,r);bt(i,o)||(t.uniform1iv(this.addr,o),Pt(i,o));for(let s=0;s!==r;++s)n.setTexture2D(e[s]||$1,o[s])}function tR(t,e,n){const i=this.cache,r=e.length,o=rc(n,r);bt(i,o)||(t.uniform1iv(this.addr,o),Pt(i,o));for(let s=0;s!==r;++s)n.setTexture3D(e[s]||q1,o[s])}function nR(t,e,n){const i=this.cache,r=e.length,o=rc(n,r);bt(i,o)||(t.uniform1iv(this.addr,o),Pt(i,o));for(let s=0;s!==r;++s)n.setTextureCube(e[s]||Z1,o[s])}function iR(t,e,n){const i=this.cache,r=e.length,o=rc(n,r);bt(i,o)||(t.uniform1iv(this.addr,o),Pt(i,o));for(let s=0;s!==r;++s)n.setTexture2DArray(e[s]||Y1,o[s])}function rR(t){switch(t){case 5126:return kC;case 35664:return HC;case 35665:return zC;case 35666:return GC;case 35674:return VC;case 35675:return WC;case 35676:return XC;case 5124:case 35670:return $C;case 35667:case 35671:return jC;case 35668:case 35672:return YC;case 35669:case 35673:return qC;case 5125:return ZC;case 36294:return KC;case 36295:return QC;case 36296:return JC;case 35678:case 36198:case 36298:case 36306:case 35682:return eR;case 35679:case 36299:case 36307:return tR;case 35680:case 36300:case 36308:case 36293:return nR;case 36289:case 36303:case 36311:case 36292:return iR}}class oR{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=BC(n.type)}}class sR{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=rR(n.type)}}class aR{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let o=0,s=r.length;o!==s;++o){const a=r[o];a.setValue(e,n[a.id],i)}}}const yf=/(\w+)(\])?(\[|\.)?/g;function Kg(t,e){t.seq.push(e),t.map[e.id]=e}function lR(t,e,n){const i=t.name,r=i.length;for(yf.lastIndex=0;;){const o=yf.exec(i),s=yf.lastIndex;let a=o[1];const l=o[2]==="]",u=o[3];if(l&&(a=a|0),u===void 0||u==="["&&s+2===r){Kg(n,u===void 0?new oR(a,t,e):new sR(a,t,e));break}else{let d=n.map[a];d===void 0&&(d=new aR(a),Kg(n,d)),n=d}}}class Ol{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const o=e.getActiveUniform(n,r),s=e.getUniformLocation(n,o.name);lR(o,s,this)}}setValue(e,n,i,r){const o=this.map[n];o!==void 0&&o.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let o=0,s=n.length;o!==s;++o){const a=n[o],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,o=e.length;r!==o;++r){const s=e[r];s.id in n&&i.push(s)}return i}}function Qg(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const uR=37297;let cR=0;function fR(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),o=Math.min(e+6,n.length);for(let s=r;s<o;s++){const a=s+1;i.push(`${a===e?">":" "} ${a}: ${n[s]}`)}return i.join(`
`)}function dR(t){const e=nt.getPrimaries(nt.workingColorSpace),n=nt.getPrimaries(t);let i;switch(e===n?i="":e===vu&&n===gu?i="LinearDisplayP3ToLinearSRGB":e===gu&&n===vu&&(i="LinearSRGBToLinearDisplayP3"),t){case Hi:case tc:return[i,"LinearTransferOETF"];case kt:case Zh:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function Jg(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const s=parseInt(o[1]);return n.toUpperCase()+`

`+r+`

`+fR(t.getShaderSource(e),s)}else return r}function hR(t,e){const n=dR(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function pR(t,e){let n;switch(e){case c2:n="Linear";break;case f2:n="Reinhard";break;case d2:n="OptimizedCineon";break;case h2:n="ACESFilmic";break;case m2:n="AgX";break;case p2:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function mR(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ho).join(`
`)}function gR(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Ho).join(`
`)}function vR(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function _R(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const o=t.getActiveAttrib(e,r),s=o.name;let a=1;o.type===t.FLOAT_MAT2&&(a=2),o.type===t.FLOAT_MAT3&&(a=3),o.type===t.FLOAT_MAT4&&(a=4),n[s]={type:o.type,location:t.getAttribLocation(e,s),locationSize:a}}return n}function Ho(t){return t!==""}function e0(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function t0(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const xR=/^[ \t]*#include +<([\w\d./]+)>/gm;function Bd(t){return t.replace(xR,SR)}const yR=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function SR(t,e){let n=Ue[e];if(n===void 0){const i=yR.get(e);if(i!==void 0)n=Ue[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Bd(n)}const ER=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function n0(t){return t.replace(ER,MR)}function MR(t,e,n,i){let r="";for(let o=parseInt(e);o<parseInt(n);o++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return r}function i0(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function TR(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===y1?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===BM?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Ai&&(e="SHADOWMAP_TYPE_VSM"),e}function wR(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case ss:case as:e="ENVMAP_TYPE_CUBE";break;case ec:e="ENVMAP_TYPE_CUBE_UV";break}return e}function AR(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case as:e="ENVMAP_MODE_REFRACTION";break}return e}function CR(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case S1:e="ENVMAP_BLENDING_MULTIPLY";break;case l2:e="ENVMAP_BLENDING_MIX";break;case u2:e="ENVMAP_BLENDING_ADD";break}return e}function RR(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function bR(t,e,n,i){const r=t.getContext(),o=n.defines;let s=n.vertexShader,a=n.fragmentShader;const l=TR(n),u=wR(n),c=AR(n),d=CR(n),h=RR(n),p=n.isWebGL2?"":mR(n),_=gR(n),x=vR(o),g=r.createProgram();let f,v,m=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(f=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(Ho).join(`
`),f.length>0&&(f+=`
`),v=[p,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(Ho).join(`
`),v.length>0&&(v+=`
`)):(f=[i0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ho).join(`
`),v=[p,i0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+c:"",n.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==pr?"#define TONE_MAPPING":"",n.toneMapping!==pr?Ue.tonemapping_pars_fragment:"",n.toneMapping!==pr?pR("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ue.colorspace_pars_fragment,hR("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Ho).join(`
`)),s=Bd(s),s=e0(s,n),s=t0(s,n),a=Bd(a),a=e0(a,n),a=t0(a,n),s=n0(s),a=n0(a),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,f=[_,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,v=["precision mediump sampler2DArray;","#define varying in",n.glslVersion===Sg?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Sg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const y=m+f+s,R=m+v+a,A=Qg(r,r.VERTEX_SHADER,y),M=Qg(r,r.FRAGMENT_SHADER,R);r.attachShader(g,A),r.attachShader(g,M),n.index0AttributeName!==void 0?r.bindAttribLocation(g,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g);function N($){if(t.debug.checkShaderErrors){const ee=r.getProgramInfoLog(g).trim(),P=r.getShaderInfoLog(A).trim(),O=r.getShaderInfoLog(M).trim();let X=!0,q=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(X=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,g,A,M);else{const L=Jg(r,A,"vertex"),I=Jg(r,M,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Program Info Log: `+ee+`
`+L+`
`+I)}else ee!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ee):(P===""||O==="")&&(q=!1);q&&($.diagnostics={runnable:X,programLog:ee,vertexShader:{log:P,prefix:f},fragmentShader:{log:O,prefix:v}})}r.deleteShader(A),r.deleteShader(M),E=new Ol(r,g),w=_R(r,g)}let E;this.getUniforms=function(){return E===void 0&&N(this),E};let w;this.getAttributes=function(){return w===void 0&&N(this),w};let F=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return F===!1&&(F=r.getProgramParameter(g,uR)),F},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=cR++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=A,this.fragmentShader=M,this}let PR=0;class LR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),o=this._getShaderStage(i),s=this._getShaderCacheForMaterial(e);return s.has(r)===!1&&(s.add(r),r.usedTimes++),s.has(o)===!1&&(s.add(o),o.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new NR(e),n.set(e,i)),i}}class NR{constructor(e){this.id=PR++,this.code=e,this.usedTimes=0}}function IR(t,e,n,i,r,o,s){const a=new Jh,l=new LR,u=[],c=r.isWebGL2,d=r.logarithmicDepthBuffer,h=r.vertexTextures;let p=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(E){return E===0?"uv":`uv${E}`}function g(E,w,F,$,ee){const P=$.fog,O=ee.geometry,X=E.isMeshStandardMaterial?$.environment:null,q=(E.isMeshStandardMaterial?n:e).get(E.envMap||X),L=q&&q.mapping===ec?q.image.height:null,I=_[E.type];E.precision!==null&&(p=r.getMaxPrecision(E.precision),p!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",p,"instead."));const G=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,j=G!==void 0?G.length:0;let Z=0;O.morphAttributes.position!==void 0&&(Z=1),O.morphAttributes.normal!==void 0&&(Z=2),O.morphAttributes.color!==void 0&&(Z=3);let W,Y,oe,ue;if(I){const en=hi[I];W=en.vertexShader,Y=en.fragmentShader}else W=E.vertexShader,Y=E.fragmentShader,l.update(E),oe=l.getVertexShaderID(E),ue=l.getFragmentShaderID(E);const de=t.getRenderTarget(),we=ee.isInstancedMesh===!0,Me=ee.isBatchedMesh===!0,ye=!!E.map,He=!!E.matcap,U=!!q,Jt=!!E.aoMap,Se=!!E.lightMap,Pe=!!E.bumpMap,ge=!!E.normalMap,pt=!!E.displacementMap,Oe=!!E.emissiveMap,C=!!E.metalnessMap,S=!!E.roughnessMap,H=E.anisotropy>0,te=E.clearcoat>0,Q=E.iridescence>0,ne=E.sheen>0,ve=E.transmission>0,le=H&&!!E.anisotropyMap,he=te&&!!E.clearcoatMap,Ae=te&&!!E.clearcoatNormalMap,Be=te&&!!E.clearcoatRoughnessMap,K=Q&&!!E.iridescenceMap,tt=Q&&!!E.iridescenceThicknessMap,We=ne&&!!E.sheenColorMap,be=ne&&!!E.sheenRoughnessMap,xe=!!E.specularMap,pe=!!E.specularColorMap,De=!!E.specularIntensityMap,Qe=ve&&!!E.transmissionMap,xt=ve&&!!E.thicknessMap,ze=!!E.gradientMap,ie=!!E.alphaMap,b=E.alphaTest>0,se=!!E.alphaHash,ae=!!E.extensions,Ce=!!O.attributes.uv1,Ee=!!O.attributes.uv2,rt=!!O.attributes.uv3;let ot=pr;return E.toneMapped&&(de===null||de.isXRRenderTarget===!0)&&(ot=t.toneMapping),{isWebGL2:c,shaderID:I,shaderType:E.type,shaderName:E.name,vertexShader:W,fragmentShader:Y,defines:E.defines,customVertexShaderID:oe,customFragmentShaderID:ue,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:p,batching:Me,instancing:we,instancingColor:we&&ee.instanceColor!==null,supportsVertexTextures:h,outputColorSpace:de===null?t.outputColorSpace:de.isXRRenderTarget===!0?de.texture.colorSpace:Hi,map:ye,matcap:He,envMap:U,envMapMode:U&&q.mapping,envMapCubeUVHeight:L,aoMap:Jt,lightMap:Se,bumpMap:Pe,normalMap:ge,displacementMap:h&&pt,emissiveMap:Oe,normalMapObjectSpace:ge&&E.normalMapType===R2,normalMapTangentSpace:ge&&E.normalMapType===C2,metalnessMap:C,roughnessMap:S,anisotropy:H,anisotropyMap:le,clearcoat:te,clearcoatMap:he,clearcoatNormalMap:Ae,clearcoatRoughnessMap:Be,iridescence:Q,iridescenceMap:K,iridescenceThicknessMap:tt,sheen:ne,sheenColorMap:We,sheenRoughnessMap:be,specularMap:xe,specularColorMap:pe,specularIntensityMap:De,transmission:ve,transmissionMap:Qe,thicknessMap:xt,gradientMap:ze,opaque:E.transparent===!1&&E.blending===qo,alphaMap:ie,alphaTest:b,alphaHash:se,combine:E.combine,mapUv:ye&&x(E.map.channel),aoMapUv:Jt&&x(E.aoMap.channel),lightMapUv:Se&&x(E.lightMap.channel),bumpMapUv:Pe&&x(E.bumpMap.channel),normalMapUv:ge&&x(E.normalMap.channel),displacementMapUv:pt&&x(E.displacementMap.channel),emissiveMapUv:Oe&&x(E.emissiveMap.channel),metalnessMapUv:C&&x(E.metalnessMap.channel),roughnessMapUv:S&&x(E.roughnessMap.channel),anisotropyMapUv:le&&x(E.anisotropyMap.channel),clearcoatMapUv:he&&x(E.clearcoatMap.channel),clearcoatNormalMapUv:Ae&&x(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Be&&x(E.clearcoatRoughnessMap.channel),iridescenceMapUv:K&&x(E.iridescenceMap.channel),iridescenceThicknessMapUv:tt&&x(E.iridescenceThicknessMap.channel),sheenColorMapUv:We&&x(E.sheenColorMap.channel),sheenRoughnessMapUv:be&&x(E.sheenRoughnessMap.channel),specularMapUv:xe&&x(E.specularMap.channel),specularColorMapUv:pe&&x(E.specularColorMap.channel),specularIntensityMapUv:De&&x(E.specularIntensityMap.channel),transmissionMapUv:Qe&&x(E.transmissionMap.channel),thicknessMapUv:xt&&x(E.thicknessMap.channel),alphaMapUv:ie&&x(E.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(ge||H),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,vertexUv1s:Ce,vertexUv2s:Ee,vertexUv3s:rt,pointsUvs:ee.isPoints===!0&&!!O.attributes.uv&&(ye||ie),fog:!!P,useFog:E.fog===!0,fogExp2:P&&P.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:ee.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:j,morphTextureStride:Z,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:E.dithering,shadowMapEnabled:t.shadowMap.enabled&&F.length>0,shadowMapType:t.shadowMap.type,toneMapping:ot,useLegacyLights:t._useLegacyLights,decodeVideoTexture:ye&&E.map.isVideoTexture===!0&&nt.getTransfer(E.map.colorSpace)===ct,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Li,flipSided:E.side===vn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionDerivatives:ae&&E.extensions.derivatives===!0,extensionFragDepth:ae&&E.extensions.fragDepth===!0,extensionDrawBuffers:ae&&E.extensions.drawBuffers===!0,extensionShaderTextureLOD:ae&&E.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ae&&E.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:c||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:c||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:c||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()}}function f(E){const w=[];if(E.shaderID?w.push(E.shaderID):(w.push(E.customVertexShaderID),w.push(E.customFragmentShaderID)),E.defines!==void 0)for(const F in E.defines)w.push(F),w.push(E.defines[F]);return E.isRawShaderMaterial===!1&&(v(w,E),m(w,E),w.push(t.outputColorSpace)),w.push(E.customProgramCacheKey),w.join()}function v(E,w){E.push(w.precision),E.push(w.outputColorSpace),E.push(w.envMapMode),E.push(w.envMapCubeUVHeight),E.push(w.mapUv),E.push(w.alphaMapUv),E.push(w.lightMapUv),E.push(w.aoMapUv),E.push(w.bumpMapUv),E.push(w.normalMapUv),E.push(w.displacementMapUv),E.push(w.emissiveMapUv),E.push(w.metalnessMapUv),E.push(w.roughnessMapUv),E.push(w.anisotropyMapUv),E.push(w.clearcoatMapUv),E.push(w.clearcoatNormalMapUv),E.push(w.clearcoatRoughnessMapUv),E.push(w.iridescenceMapUv),E.push(w.iridescenceThicknessMapUv),E.push(w.sheenColorMapUv),E.push(w.sheenRoughnessMapUv),E.push(w.specularMapUv),E.push(w.specularColorMapUv),E.push(w.specularIntensityMapUv),E.push(w.transmissionMapUv),E.push(w.thicknessMapUv),E.push(w.combine),E.push(w.fogExp2),E.push(w.sizeAttenuation),E.push(w.morphTargetsCount),E.push(w.morphAttributeCount),E.push(w.numDirLights),E.push(w.numPointLights),E.push(w.numSpotLights),E.push(w.numSpotLightMaps),E.push(w.numHemiLights),E.push(w.numRectAreaLights),E.push(w.numDirLightShadows),E.push(w.numPointLightShadows),E.push(w.numSpotLightShadows),E.push(w.numSpotLightShadowsWithMaps),E.push(w.numLightProbes),E.push(w.shadowMapType),E.push(w.toneMapping),E.push(w.numClippingPlanes),E.push(w.numClipIntersection),E.push(w.depthPacking)}function m(E,w){a.disableAll(),w.isWebGL2&&a.enable(0),w.supportsVertexTextures&&a.enable(1),w.instancing&&a.enable(2),w.instancingColor&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),w.batching&&a.enable(19),E.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.skinning&&a.enable(4),w.morphTargets&&a.enable(5),w.morphNormals&&a.enable(6),w.morphColors&&a.enable(7),w.premultipliedAlpha&&a.enable(8),w.shadowMapEnabled&&a.enable(9),w.useLegacyLights&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),E.push(a.mask)}function y(E){const w=_[E.type];let F;if(w){const $=hi[w];F=pT.clone($.uniforms)}else F=E.uniforms;return F}function R(E,w){let F;for(let $=0,ee=u.length;$<ee;$++){const P=u[$];if(P.cacheKey===w){F=P,++F.usedTimes;break}}return F===void 0&&(F=new bR(t,w,E,o),u.push(F)),F}function A(E){if(--E.usedTimes===0){const w=u.indexOf(E);u[w]=u[u.length-1],u.pop(),E.destroy()}}function M(E){l.remove(E)}function N(){l.dispose()}return{getParameters:g,getProgramCacheKey:f,getUniforms:y,acquireProgram:R,releaseProgram:A,releaseShaderCache:M,programs:u,dispose:N}}function DR(){let t=new WeakMap;function e(o){let s=t.get(o);return s===void 0&&(s={},t.set(o,s)),s}function n(o){t.delete(o)}function i(o,s,a){t.get(o)[s]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function UR(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function r0(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function o0(){const t=[];let e=0;const n=[],i=[],r=[];function o(){e=0,n.length=0,i.length=0,r.length=0}function s(d,h,p,_,x,g){let f=t[e];return f===void 0?(f={id:d.id,object:d,geometry:h,material:p,groupOrder:_,renderOrder:d.renderOrder,z:x,group:g},t[e]=f):(f.id=d.id,f.object=d,f.geometry=h,f.material=p,f.groupOrder=_,f.renderOrder=d.renderOrder,f.z=x,f.group=g),e++,f}function a(d,h,p,_,x,g){const f=s(d,h,p,_,x,g);p.transmission>0?i.push(f):p.transparent===!0?r.push(f):n.push(f)}function l(d,h,p,_,x,g){const f=s(d,h,p,_,x,g);p.transmission>0?i.unshift(f):p.transparent===!0?r.unshift(f):n.unshift(f)}function u(d,h){n.length>1&&n.sort(d||UR),i.length>1&&i.sort(h||r0),r.length>1&&r.sort(h||r0)}function c(){for(let d=e,h=t.length;d<h;d++){const p=t[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:o,push:a,unshift:l,finish:c,sort:u}}function FR(){let t=new WeakMap;function e(i,r){const o=t.get(i);let s;return o===void 0?(s=new o0,t.set(i,[s])):r>=o.length?(s=new o0,o.push(s)):s=o[r],s}function n(){t=new WeakMap}return{get:e,dispose:n}}function OR(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new B,color:new it};break;case"SpotLight":n={position:new B,direction:new B,color:new it,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new B,color:new it,distance:0,decay:0};break;case"HemisphereLight":n={direction:new B,skyColor:new it,groundColor:new it};break;case"RectAreaLight":n={color:new it,position:new B,halfWidth:new B,halfHeight:new B};break}return t[e.id]=n,n}}}function BR(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let kR=0;function HR(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function zR(t,e){const n=new OR,i=BR(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)r.probe.push(new B);const o=new B,s=new Gt,a=new Gt;function l(c,d){let h=0,p=0,_=0;for(let $=0;$<9;$++)r.probe[$].set(0,0,0);let x=0,g=0,f=0,v=0,m=0,y=0,R=0,A=0,M=0,N=0,E=0;c.sort(HR);const w=d===!0?Math.PI:1;for(let $=0,ee=c.length;$<ee;$++){const P=c[$],O=P.color,X=P.intensity,q=P.distance,L=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=O.r*X*w,p+=O.g*X*w,_+=O.b*X*w;else if(P.isLightProbe){for(let I=0;I<9;I++)r.probe[I].addScaledVector(P.sh.coefficients[I],X);E++}else if(P.isDirectionalLight){const I=n.get(P);if(I.color.copy(P.color).multiplyScalar(P.intensity*w),P.castShadow){const G=P.shadow,j=i.get(P);j.shadowBias=G.bias,j.shadowNormalBias=G.normalBias,j.shadowRadius=G.radius,j.shadowMapSize=G.mapSize,r.directionalShadow[x]=j,r.directionalShadowMap[x]=L,r.directionalShadowMatrix[x]=P.shadow.matrix,y++}r.directional[x]=I,x++}else if(P.isSpotLight){const I=n.get(P);I.position.setFromMatrixPosition(P.matrixWorld),I.color.copy(O).multiplyScalar(X*w),I.distance=q,I.coneCos=Math.cos(P.angle),I.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),I.decay=P.decay,r.spot[f]=I;const G=P.shadow;if(P.map&&(r.spotLightMap[M]=P.map,M++,G.updateMatrices(P),P.castShadow&&N++),r.spotLightMatrix[f]=G.matrix,P.castShadow){const j=i.get(P);j.shadowBias=G.bias,j.shadowNormalBias=G.normalBias,j.shadowRadius=G.radius,j.shadowMapSize=G.mapSize,r.spotShadow[f]=j,r.spotShadowMap[f]=L,A++}f++}else if(P.isRectAreaLight){const I=n.get(P);I.color.copy(O).multiplyScalar(X),I.halfWidth.set(P.width*.5,0,0),I.halfHeight.set(0,P.height*.5,0),r.rectArea[v]=I,v++}else if(P.isPointLight){const I=n.get(P);if(I.color.copy(P.color).multiplyScalar(P.intensity*w),I.distance=P.distance,I.decay=P.decay,P.castShadow){const G=P.shadow,j=i.get(P);j.shadowBias=G.bias,j.shadowNormalBias=G.normalBias,j.shadowRadius=G.radius,j.shadowMapSize=G.mapSize,j.shadowCameraNear=G.camera.near,j.shadowCameraFar=G.camera.far,r.pointShadow[g]=j,r.pointShadowMap[g]=L,r.pointShadowMatrix[g]=P.shadow.matrix,R++}r.point[g]=I,g++}else if(P.isHemisphereLight){const I=n.get(P);I.skyColor.copy(P.color).multiplyScalar(X*w),I.groundColor.copy(P.groundColor).multiplyScalar(X*w),r.hemi[m]=I,m++}}v>0&&(e.isWebGL2?t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=re.LTC_FLOAT_1,r.rectAreaLTC2=re.LTC_FLOAT_2):(r.rectAreaLTC1=re.LTC_HALF_1,r.rectAreaLTC2=re.LTC_HALF_2):t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=re.LTC_FLOAT_1,r.rectAreaLTC2=re.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=re.LTC_HALF_1,r.rectAreaLTC2=re.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=p,r.ambient[2]=_;const F=r.hash;(F.directionalLength!==x||F.pointLength!==g||F.spotLength!==f||F.rectAreaLength!==v||F.hemiLength!==m||F.numDirectionalShadows!==y||F.numPointShadows!==R||F.numSpotShadows!==A||F.numSpotMaps!==M||F.numLightProbes!==E)&&(r.directional.length=x,r.spot.length=f,r.rectArea.length=v,r.point.length=g,r.hemi.length=m,r.directionalShadow.length=y,r.directionalShadowMap.length=y,r.pointShadow.length=R,r.pointShadowMap.length=R,r.spotShadow.length=A,r.spotShadowMap.length=A,r.directionalShadowMatrix.length=y,r.pointShadowMatrix.length=R,r.spotLightMatrix.length=A+M-N,r.spotLightMap.length=M,r.numSpotLightShadowsWithMaps=N,r.numLightProbes=E,F.directionalLength=x,F.pointLength=g,F.spotLength=f,F.rectAreaLength=v,F.hemiLength=m,F.numDirectionalShadows=y,F.numPointShadows=R,F.numSpotShadows=A,F.numSpotMaps=M,F.numLightProbes=E,r.version=kR++)}function u(c,d){let h=0,p=0,_=0,x=0,g=0;const f=d.matrixWorldInverse;for(let v=0,m=c.length;v<m;v++){const y=c[v];if(y.isDirectionalLight){const R=r.directional[h];R.direction.setFromMatrixPosition(y.matrixWorld),o.setFromMatrixPosition(y.target.matrixWorld),R.direction.sub(o),R.direction.transformDirection(f),h++}else if(y.isSpotLight){const R=r.spot[_];R.position.setFromMatrixPosition(y.matrixWorld),R.position.applyMatrix4(f),R.direction.setFromMatrixPosition(y.matrixWorld),o.setFromMatrixPosition(y.target.matrixWorld),R.direction.sub(o),R.direction.transformDirection(f),_++}else if(y.isRectAreaLight){const R=r.rectArea[x];R.position.setFromMatrixPosition(y.matrixWorld),R.position.applyMatrix4(f),a.identity(),s.copy(y.matrixWorld),s.premultiply(f),a.extractRotation(s),R.halfWidth.set(y.width*.5,0,0),R.halfHeight.set(0,y.height*.5,0),R.halfWidth.applyMatrix4(a),R.halfHeight.applyMatrix4(a),x++}else if(y.isPointLight){const R=r.point[p];R.position.setFromMatrixPosition(y.matrixWorld),R.position.applyMatrix4(f),p++}else if(y.isHemisphereLight){const R=r.hemi[g];R.direction.setFromMatrixPosition(y.matrixWorld),R.direction.transformDirection(f),g++}}}return{setup:l,setupView:u,state:r}}function s0(t,e){const n=new zR(t,e),i=[],r=[];function o(){i.length=0,r.length=0}function s(d){i.push(d)}function a(d){r.push(d)}function l(d){n.setup(i,d)}function u(d){n.setupView(i,d)}return{init:o,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:u,pushLight:s,pushShadow:a}}function GR(t,e){let n=new WeakMap;function i(o,s=0){const a=n.get(o);let l;return a===void 0?(l=new s0(t,e),n.set(o,[l])):s>=a.length?(l=new s0(t,e),a.push(l)):l=a[s],l}function r(){n=new WeakMap}return{get:i,dispose:r}}class VR extends ic{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=w2,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class WR extends ic{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const XR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,$R=`uniform sampler2D shadow_pass;
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
}`;function jR(t,e,n){let i=new V1;const r=new Ze,o=new Ze,s=new Ht,a=new VR({depthPacking:A2}),l=new WR,u={},c=n.maxTextureSize,d={[xr]:vn,[vn]:xr,[Li]:Li},h=new to({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ze},radius:{value:4}},vertexShader:XR,fragmentShader:$R}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const _=new Gi;_.setAttribute("position",new ri(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new ti(_,h),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=y1;let f=this.type;this.render=function(A,M,N){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||A.length===0)return;const E=t.getRenderTarget(),w=t.getActiveCubeFace(),F=t.getActiveMipmapLevel(),$=t.state;$.setBlending(hr),$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);const ee=f!==Ai&&this.type===Ai,P=f===Ai&&this.type!==Ai;for(let O=0,X=A.length;O<X;O++){const q=A[O],L=q.shadow;if(L===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(L.autoUpdate===!1&&L.needsUpdate===!1)continue;r.copy(L.mapSize);const I=L.getFrameExtents();if(r.multiply(I),o.copy(L.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(o.x=Math.floor(c/I.x),r.x=o.x*I.x,L.mapSize.x=o.x),r.y>c&&(o.y=Math.floor(c/I.y),r.y=o.y*I.y,L.mapSize.y=o.y)),L.map===null||ee===!0||P===!0){const j=this.type!==Ai?{minFilter:an,magFilter:an}:{};L.map!==null&&L.map.dispose(),L.map=new eo(r.x,r.y,j),L.map.texture.name=q.name+".shadowMap",L.camera.updateProjectionMatrix()}t.setRenderTarget(L.map),t.clear();const G=L.getViewportCount();for(let j=0;j<G;j++){const Z=L.getViewport(j);s.set(o.x*Z.x,o.y*Z.y,o.x*Z.z,o.y*Z.w),$.viewport(s),L.updateMatrices(q,j),i=L.getFrustum(),y(M,N,L.camera,q,this.type)}L.isPointLightShadow!==!0&&this.type===Ai&&v(L,N),L.needsUpdate=!1}f=this.type,g.needsUpdate=!1,t.setRenderTarget(E,w,F)};function v(A,M){const N=e.update(x);h.defines.VSM_SAMPLES!==A.blurSamples&&(h.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new eo(r.x,r.y)),h.uniforms.shadow_pass.value=A.map.texture,h.uniforms.resolution.value=A.mapSize,h.uniforms.radius.value=A.radius,t.setRenderTarget(A.mapPass),t.clear(),t.renderBufferDirect(M,null,N,h,x,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,t.setRenderTarget(A.map),t.clear(),t.renderBufferDirect(M,null,N,p,x,null)}function m(A,M,N,E){let w=null;const F=N.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(F!==void 0)w=F;else if(w=N.isPointLight===!0?l:a,t.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0){const $=w.uuid,ee=M.uuid;let P=u[$];P===void 0&&(P={},u[$]=P);let O=P[ee];O===void 0&&(O=w.clone(),P[ee]=O,M.addEventListener("dispose",R)),w=O}if(w.visible=M.visible,w.wireframe=M.wireframe,E===Ai?w.side=M.shadowSide!==null?M.shadowSide:M.side:w.side=M.shadowSide!==null?M.shadowSide:d[M.side],w.alphaMap=M.alphaMap,w.alphaTest=M.alphaTest,w.map=M.map,w.clipShadows=M.clipShadows,w.clippingPlanes=M.clippingPlanes,w.clipIntersection=M.clipIntersection,w.displacementMap=M.displacementMap,w.displacementScale=M.displacementScale,w.displacementBias=M.displacementBias,w.wireframeLinewidth=M.wireframeLinewidth,w.linewidth=M.linewidth,N.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const $=t.properties.get(w);$.light=N}return w}function y(A,M,N,E,w){if(A.visible===!1)return;if(A.layers.test(M.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&w===Ai)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,A.matrixWorld);const ee=e.update(A),P=A.material;if(Array.isArray(P)){const O=ee.groups;for(let X=0,q=O.length;X<q;X++){const L=O[X],I=P[L.materialIndex];if(I&&I.visible){const G=m(A,I,E,w);A.onBeforeShadow(t,A,M,N,ee,G,L),t.renderBufferDirect(N,null,ee,G,A,L),A.onAfterShadow(t,A,M,N,ee,G,L)}}}else if(P.visible){const O=m(A,P,E,w);A.onBeforeShadow(t,A,M,N,ee,O,null),t.renderBufferDirect(N,null,ee,O,A,null),A.onAfterShadow(t,A,M,N,ee,O,null)}}const $=A.children;for(let ee=0,P=$.length;ee<P;ee++)y($[ee],M,N,E,w)}function R(A){A.target.removeEventListener("dispose",R);for(const N in u){const E=u[N],w=A.target.uuid;w in E&&(E[w].dispose(),delete E[w])}}}function YR(t,e,n){const i=n.isWebGL2;function r(){let b=!1;const se=new Ht;let ae=null;const Ce=new Ht(0,0,0,0);return{setMask:function(Ee){ae!==Ee&&!b&&(t.colorMask(Ee,Ee,Ee,Ee),ae=Ee)},setLocked:function(Ee){b=Ee},setClear:function(Ee,rt,ot,Lt,en){en===!0&&(Ee*=Lt,rt*=Lt,ot*=Lt),se.set(Ee,rt,ot,Lt),Ce.equals(se)===!1&&(t.clearColor(Ee,rt,ot,Lt),Ce.copy(se))},reset:function(){b=!1,ae=null,Ce.set(-1,0,0,0)}}}function o(){let b=!1,se=null,ae=null,Ce=null;return{setTest:function(Ee){Ee?Me(t.DEPTH_TEST):ye(t.DEPTH_TEST)},setMask:function(Ee){se!==Ee&&!b&&(t.depthMask(Ee),se=Ee)},setFunc:function(Ee){if(ae!==Ee){switch(Ee){case t2:t.depthFunc(t.NEVER);break;case n2:t.depthFunc(t.ALWAYS);break;case i2:t.depthFunc(t.LESS);break;case pu:t.depthFunc(t.LEQUAL);break;case r2:t.depthFunc(t.EQUAL);break;case o2:t.depthFunc(t.GEQUAL);break;case s2:t.depthFunc(t.GREATER);break;case a2:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ae=Ee}},setLocked:function(Ee){b=Ee},setClear:function(Ee){Ce!==Ee&&(t.clearDepth(Ee),Ce=Ee)},reset:function(){b=!1,se=null,ae=null,Ce=null}}}function s(){let b=!1,se=null,ae=null,Ce=null,Ee=null,rt=null,ot=null,Lt=null,en=null;return{setTest:function(st){b||(st?Me(t.STENCIL_TEST):ye(t.STENCIL_TEST))},setMask:function(st){se!==st&&!b&&(t.stencilMask(st),se=st)},setFunc:function(st,tn,ai){(ae!==st||Ce!==tn||Ee!==ai)&&(t.stencilFunc(st,tn,ai),ae=st,Ce=tn,Ee=ai)},setOp:function(st,tn,ai){(rt!==st||ot!==tn||Lt!==ai)&&(t.stencilOp(st,tn,ai),rt=st,ot=tn,Lt=ai)},setLocked:function(st){b=st},setClear:function(st){en!==st&&(t.clearStencil(st),en=st)},reset:function(){b=!1,se=null,ae=null,Ce=null,Ee=null,rt=null,ot=null,Lt=null,en=null}}}const a=new r,l=new o,u=new s,c=new WeakMap,d=new WeakMap;let h={},p={},_=new WeakMap,x=[],g=null,f=!1,v=null,m=null,y=null,R=null,A=null,M=null,N=null,E=new it(0,0,0),w=0,F=!1,$=null,ee=null,P=null,O=null,X=null;const q=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let L=!1,I=0;const G=t.getParameter(t.VERSION);G.indexOf("WebGL")!==-1?(I=parseFloat(/^WebGL (\d)/.exec(G)[1]),L=I>=1):G.indexOf("OpenGL ES")!==-1&&(I=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),L=I>=2);let j=null,Z={};const W=t.getParameter(t.SCISSOR_BOX),Y=t.getParameter(t.VIEWPORT),oe=new Ht().fromArray(W),ue=new Ht().fromArray(Y);function de(b,se,ae,Ce){const Ee=new Uint8Array(4),rt=t.createTexture();t.bindTexture(b,rt),t.texParameteri(b,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(b,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let ot=0;ot<ae;ot++)i&&(b===t.TEXTURE_3D||b===t.TEXTURE_2D_ARRAY)?t.texImage3D(se,0,t.RGBA,1,1,Ce,0,t.RGBA,t.UNSIGNED_BYTE,Ee):t.texImage2D(se+ot,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Ee);return rt}const we={};we[t.TEXTURE_2D]=de(t.TEXTURE_2D,t.TEXTURE_2D,1),we[t.TEXTURE_CUBE_MAP]=de(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(we[t.TEXTURE_2D_ARRAY]=de(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),we[t.TEXTURE_3D]=de(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),u.setClear(0),Me(t.DEPTH_TEST),l.setFunc(pu),Oe(!1),C(zm),Me(t.CULL_FACE),ge(hr);function Me(b){h[b]!==!0&&(t.enable(b),h[b]=!0)}function ye(b){h[b]!==!1&&(t.disable(b),h[b]=!1)}function He(b,se){return p[b]!==se?(t.bindFramebuffer(b,se),p[b]=se,i&&(b===t.DRAW_FRAMEBUFFER&&(p[t.FRAMEBUFFER]=se),b===t.FRAMEBUFFER&&(p[t.DRAW_FRAMEBUFFER]=se)),!0):!1}function U(b,se){let ae=x,Ce=!1;if(b)if(ae=_.get(se),ae===void 0&&(ae=[],_.set(se,ae)),b.isWebGLMultipleRenderTargets){const Ee=b.texture;if(ae.length!==Ee.length||ae[0]!==t.COLOR_ATTACHMENT0){for(let rt=0,ot=Ee.length;rt<ot;rt++)ae[rt]=t.COLOR_ATTACHMENT0+rt;ae.length=Ee.length,Ce=!0}}else ae[0]!==t.COLOR_ATTACHMENT0&&(ae[0]=t.COLOR_ATTACHMENT0,Ce=!0);else ae[0]!==t.BACK&&(ae[0]=t.BACK,Ce=!0);Ce&&(n.isWebGL2?t.drawBuffers(ae):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ae))}function Jt(b){return g!==b?(t.useProgram(b),g=b,!0):!1}const Se={[Ur]:t.FUNC_ADD,[HM]:t.FUNC_SUBTRACT,[zM]:t.FUNC_REVERSE_SUBTRACT};if(i)Se[Xm]=t.MIN,Se[$m]=t.MAX;else{const b=e.get("EXT_blend_minmax");b!==null&&(Se[Xm]=b.MIN_EXT,Se[$m]=b.MAX_EXT)}const Pe={[GM]:t.ZERO,[VM]:t.ONE,[WM]:t.SRC_COLOR,[Pd]:t.SRC_ALPHA,[ZM]:t.SRC_ALPHA_SATURATE,[YM]:t.DST_COLOR,[$M]:t.DST_ALPHA,[XM]:t.ONE_MINUS_SRC_COLOR,[Ld]:t.ONE_MINUS_SRC_ALPHA,[qM]:t.ONE_MINUS_DST_COLOR,[jM]:t.ONE_MINUS_DST_ALPHA,[KM]:t.CONSTANT_COLOR,[QM]:t.ONE_MINUS_CONSTANT_COLOR,[JM]:t.CONSTANT_ALPHA,[e2]:t.ONE_MINUS_CONSTANT_ALPHA};function ge(b,se,ae,Ce,Ee,rt,ot,Lt,en,st){if(b===hr){f===!0&&(ye(t.BLEND),f=!1);return}if(f===!1&&(Me(t.BLEND),f=!0),b!==kM){if(b!==v||st!==F){if((m!==Ur||A!==Ur)&&(t.blendEquation(t.FUNC_ADD),m=Ur,A=Ur),st)switch(b){case qo:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Gm:t.blendFunc(t.ONE,t.ONE);break;case Vm:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Wm:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",b);break}else switch(b){case qo:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Gm:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Vm:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Wm:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",b);break}y=null,R=null,M=null,N=null,E.set(0,0,0),w=0,v=b,F=st}return}Ee=Ee||se,rt=rt||ae,ot=ot||Ce,(se!==m||Ee!==A)&&(t.blendEquationSeparate(Se[se],Se[Ee]),m=se,A=Ee),(ae!==y||Ce!==R||rt!==M||ot!==N)&&(t.blendFuncSeparate(Pe[ae],Pe[Ce],Pe[rt],Pe[ot]),y=ae,R=Ce,M=rt,N=ot),(Lt.equals(E)===!1||en!==w)&&(t.blendColor(Lt.r,Lt.g,Lt.b,en),E.copy(Lt),w=en),v=b,F=!1}function pt(b,se){b.side===Li?ye(t.CULL_FACE):Me(t.CULL_FACE);let ae=b.side===vn;se&&(ae=!ae),Oe(ae),b.blending===qo&&b.transparent===!1?ge(hr):ge(b.blending,b.blendEquation,b.blendSrc,b.blendDst,b.blendEquationAlpha,b.blendSrcAlpha,b.blendDstAlpha,b.blendColor,b.blendAlpha,b.premultipliedAlpha),l.setFunc(b.depthFunc),l.setTest(b.depthTest),l.setMask(b.depthWrite),a.setMask(b.colorWrite);const Ce=b.stencilWrite;u.setTest(Ce),Ce&&(u.setMask(b.stencilWriteMask),u.setFunc(b.stencilFunc,b.stencilRef,b.stencilFuncMask),u.setOp(b.stencilFail,b.stencilZFail,b.stencilZPass)),H(b.polygonOffset,b.polygonOffsetFactor,b.polygonOffsetUnits),b.alphaToCoverage===!0?Me(t.SAMPLE_ALPHA_TO_COVERAGE):ye(t.SAMPLE_ALPHA_TO_COVERAGE)}function Oe(b){$!==b&&(b?t.frontFace(t.CW):t.frontFace(t.CCW),$=b)}function C(b){b!==FM?(Me(t.CULL_FACE),b!==ee&&(b===zm?t.cullFace(t.BACK):b===OM?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):ye(t.CULL_FACE),ee=b}function S(b){b!==P&&(L&&t.lineWidth(b),P=b)}function H(b,se,ae){b?(Me(t.POLYGON_OFFSET_FILL),(O!==se||X!==ae)&&(t.polygonOffset(se,ae),O=se,X=ae)):ye(t.POLYGON_OFFSET_FILL)}function te(b){b?Me(t.SCISSOR_TEST):ye(t.SCISSOR_TEST)}function Q(b){b===void 0&&(b=t.TEXTURE0+q-1),j!==b&&(t.activeTexture(b),j=b)}function ne(b,se,ae){ae===void 0&&(j===null?ae=t.TEXTURE0+q-1:ae=j);let Ce=Z[ae];Ce===void 0&&(Ce={type:void 0,texture:void 0},Z[ae]=Ce),(Ce.type!==b||Ce.texture!==se)&&(j!==ae&&(t.activeTexture(ae),j=ae),t.bindTexture(b,se||we[b]),Ce.type=b,Ce.texture=se)}function ve(){const b=Z[j];b!==void 0&&b.type!==void 0&&(t.bindTexture(b.type,null),b.type=void 0,b.texture=void 0)}function le(){try{t.compressedTexImage2D.apply(t,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function he(){try{t.compressedTexImage3D.apply(t,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function Ae(){try{t.texSubImage2D.apply(t,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function Be(){try{t.texSubImage3D.apply(t,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function K(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function tt(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function We(){try{t.texStorage2D.apply(t,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function be(){try{t.texStorage3D.apply(t,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function xe(){try{t.texImage2D.apply(t,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function pe(){try{t.texImage3D.apply(t,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function De(b){oe.equals(b)===!1&&(t.scissor(b.x,b.y,b.z,b.w),oe.copy(b))}function Qe(b){ue.equals(b)===!1&&(t.viewport(b.x,b.y,b.z,b.w),ue.copy(b))}function xt(b,se){let ae=d.get(se);ae===void 0&&(ae=new WeakMap,d.set(se,ae));let Ce=ae.get(b);Ce===void 0&&(Ce=t.getUniformBlockIndex(se,b.name),ae.set(b,Ce))}function ze(b,se){const Ce=d.get(se).get(b);c.get(se)!==Ce&&(t.uniformBlockBinding(se,Ce,b.__bindingPointIndex),c.set(se,Ce))}function ie(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),h={},j=null,Z={},p={},_=new WeakMap,x=[],g=null,f=!1,v=null,m=null,y=null,R=null,A=null,M=null,N=null,E=new it(0,0,0),w=0,F=!1,$=null,ee=null,P=null,O=null,X=null,oe.set(0,0,t.canvas.width,t.canvas.height),ue.set(0,0,t.canvas.width,t.canvas.height),a.reset(),l.reset(),u.reset()}return{buffers:{color:a,depth:l,stencil:u},enable:Me,disable:ye,bindFramebuffer:He,drawBuffers:U,useProgram:Jt,setBlending:ge,setMaterial:pt,setFlipSided:Oe,setCullFace:C,setLineWidth:S,setPolygonOffset:H,setScissorTest:te,activeTexture:Q,bindTexture:ne,unbindTexture:ve,compressedTexImage2D:le,compressedTexImage3D:he,texImage2D:xe,texImage3D:pe,updateUBOMapping:xt,uniformBlockBinding:ze,texStorage2D:We,texStorage3D:be,texSubImage2D:Ae,texSubImage3D:Be,compressedTexSubImage2D:K,compressedTexSubImage3D:tt,scissor:De,viewport:Qe,reset:ie}}function qR(t,e,n,i,r,o,s){const a=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new WeakMap;let d;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(C,S){return p?new OffscreenCanvas(C,S):yu("canvas")}function x(C,S,H,te){let Q=1;if((C.width>te||C.height>te)&&(Q=te/Math.max(C.width,C.height)),Q<1||S===!0)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap){const ne=S?xu:Math.floor,ve=ne(Q*C.width),le=ne(Q*C.height);d===void 0&&(d=_(ve,le));const he=H?_(ve,le):d;return he.width=ve,he.height=le,he.getContext("2d").drawImage(C,0,0,ve,le),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+C.width+"x"+C.height+") to ("+ve+"x"+le+")."),he}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+C.width+"x"+C.height+")."),C;return C}function g(C){return Od(C.width)&&Od(C.height)}function f(C){return a?!1:C.wrapS!==Jn||C.wrapT!==Jn||C.minFilter!==an&&C.minFilter!==Un}function v(C,S){return C.generateMipmaps&&S&&C.minFilter!==an&&C.minFilter!==Un}function m(C){t.generateMipmap(C)}function y(C,S,H,te,Q=!1){if(a===!1)return S;if(C!==null){if(t[C]!==void 0)return t[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let ne=S;if(S===t.RED&&(H===t.FLOAT&&(ne=t.R32F),H===t.HALF_FLOAT&&(ne=t.R16F),H===t.UNSIGNED_BYTE&&(ne=t.R8)),S===t.RED_INTEGER&&(H===t.UNSIGNED_BYTE&&(ne=t.R8UI),H===t.UNSIGNED_SHORT&&(ne=t.R16UI),H===t.UNSIGNED_INT&&(ne=t.R32UI),H===t.BYTE&&(ne=t.R8I),H===t.SHORT&&(ne=t.R16I),H===t.INT&&(ne=t.R32I)),S===t.RG&&(H===t.FLOAT&&(ne=t.RG32F),H===t.HALF_FLOAT&&(ne=t.RG16F),H===t.UNSIGNED_BYTE&&(ne=t.RG8)),S===t.RGBA){const ve=Q?mu:nt.getTransfer(te);H===t.FLOAT&&(ne=t.RGBA32F),H===t.HALF_FLOAT&&(ne=t.RGBA16F),H===t.UNSIGNED_BYTE&&(ne=ve===ct?t.SRGB8_ALPHA8:t.RGBA8),H===t.UNSIGNED_SHORT_4_4_4_4&&(ne=t.RGBA4),H===t.UNSIGNED_SHORT_5_5_5_1&&(ne=t.RGB5_A1)}return(ne===t.R16F||ne===t.R32F||ne===t.RG16F||ne===t.RG32F||ne===t.RGBA16F||ne===t.RGBA32F)&&e.get("EXT_color_buffer_float"),ne}function R(C,S,H){return v(C,H)===!0||C.isFramebufferTexture&&C.minFilter!==an&&C.minFilter!==Un?Math.log2(Math.max(S.width,S.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?S.mipmaps.length:1}function A(C){return C===an||C===jm||C===$c?t.NEAREST:t.LINEAR}function M(C){const S=C.target;S.removeEventListener("dispose",M),E(S),S.isVideoTexture&&c.delete(S)}function N(C){const S=C.target;S.removeEventListener("dispose",N),F(S)}function E(C){const S=i.get(C);if(S.__webglInit===void 0)return;const H=C.source,te=h.get(H);if(te){const Q=te[S.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&w(C),Object.keys(te).length===0&&h.delete(H)}i.remove(C)}function w(C){const S=i.get(C);t.deleteTexture(S.__webglTexture);const H=C.source,te=h.get(H);delete te[S.__cacheKey],s.memory.textures--}function F(C){const S=C.texture,H=i.get(C),te=i.get(S);if(te.__webglTexture!==void 0&&(t.deleteTexture(te.__webglTexture),s.memory.textures--),C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(H.__webglFramebuffer[Q]))for(let ne=0;ne<H.__webglFramebuffer[Q].length;ne++)t.deleteFramebuffer(H.__webglFramebuffer[Q][ne]);else t.deleteFramebuffer(H.__webglFramebuffer[Q]);H.__webglDepthbuffer&&t.deleteRenderbuffer(H.__webglDepthbuffer[Q])}else{if(Array.isArray(H.__webglFramebuffer))for(let Q=0;Q<H.__webglFramebuffer.length;Q++)t.deleteFramebuffer(H.__webglFramebuffer[Q]);else t.deleteFramebuffer(H.__webglFramebuffer);if(H.__webglDepthbuffer&&t.deleteRenderbuffer(H.__webglDepthbuffer),H.__webglMultisampledFramebuffer&&t.deleteFramebuffer(H.__webglMultisampledFramebuffer),H.__webglColorRenderbuffer)for(let Q=0;Q<H.__webglColorRenderbuffer.length;Q++)H.__webglColorRenderbuffer[Q]&&t.deleteRenderbuffer(H.__webglColorRenderbuffer[Q]);H.__webglDepthRenderbuffer&&t.deleteRenderbuffer(H.__webglDepthRenderbuffer)}if(C.isWebGLMultipleRenderTargets)for(let Q=0,ne=S.length;Q<ne;Q++){const ve=i.get(S[Q]);ve.__webglTexture&&(t.deleteTexture(ve.__webglTexture),s.memory.textures--),i.remove(S[Q])}i.remove(S),i.remove(C)}let $=0;function ee(){$=0}function P(){const C=$;return C>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+r.maxTextures),$+=1,C}function O(C){const S=[];return S.push(C.wrapS),S.push(C.wrapT),S.push(C.wrapR||0),S.push(C.magFilter),S.push(C.minFilter),S.push(C.anisotropy),S.push(C.internalFormat),S.push(C.format),S.push(C.type),S.push(C.generateMipmaps),S.push(C.premultiplyAlpha),S.push(C.flipY),S.push(C.unpackAlignment),S.push(C.colorSpace),S.join()}function X(C,S){const H=i.get(C);if(C.isVideoTexture&&pt(C),C.isRenderTargetTexture===!1&&C.version>0&&H.__version!==C.version){const te=C.image;if(te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{oe(H,C,S);return}}n.bindTexture(t.TEXTURE_2D,H.__webglTexture,t.TEXTURE0+S)}function q(C,S){const H=i.get(C);if(C.version>0&&H.__version!==C.version){oe(H,C,S);return}n.bindTexture(t.TEXTURE_2D_ARRAY,H.__webglTexture,t.TEXTURE0+S)}function L(C,S){const H=i.get(C);if(C.version>0&&H.__version!==C.version){oe(H,C,S);return}n.bindTexture(t.TEXTURE_3D,H.__webglTexture,t.TEXTURE0+S)}function I(C,S){const H=i.get(C);if(C.version>0&&H.__version!==C.version){ue(H,C,S);return}n.bindTexture(t.TEXTURE_CUBE_MAP,H.__webglTexture,t.TEXTURE0+S)}const G={[Dd]:t.REPEAT,[Jn]:t.CLAMP_TO_EDGE,[Ud]:t.MIRRORED_REPEAT},j={[an]:t.NEAREST,[jm]:t.NEAREST_MIPMAP_NEAREST,[$c]:t.NEAREST_MIPMAP_LINEAR,[Un]:t.LINEAR,[g2]:t.LINEAR_MIPMAP_NEAREST,[ma]:t.LINEAR_MIPMAP_LINEAR},Z={[b2]:t.NEVER,[U2]:t.ALWAYS,[P2]:t.LESS,[L1]:t.LEQUAL,[L2]:t.EQUAL,[D2]:t.GEQUAL,[N2]:t.GREATER,[I2]:t.NOTEQUAL};function W(C,S,H){if(H?(t.texParameteri(C,t.TEXTURE_WRAP_S,G[S.wrapS]),t.texParameteri(C,t.TEXTURE_WRAP_T,G[S.wrapT]),(C===t.TEXTURE_3D||C===t.TEXTURE_2D_ARRAY)&&t.texParameteri(C,t.TEXTURE_WRAP_R,G[S.wrapR]),t.texParameteri(C,t.TEXTURE_MAG_FILTER,j[S.magFilter]),t.texParameteri(C,t.TEXTURE_MIN_FILTER,j[S.minFilter])):(t.texParameteri(C,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(C,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(C===t.TEXTURE_3D||C===t.TEXTURE_2D_ARRAY)&&t.texParameteri(C,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(S.wrapS!==Jn||S.wrapT!==Jn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(C,t.TEXTURE_MAG_FILTER,A(S.magFilter)),t.texParameteri(C,t.TEXTURE_MIN_FILTER,A(S.minFilter)),S.minFilter!==an&&S.minFilter!==Un&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),S.compareFunction&&(t.texParameteri(C,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(C,t.TEXTURE_COMPARE_FUNC,Z[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const te=e.get("EXT_texture_filter_anisotropic");if(S.magFilter===an||S.minFilter!==$c&&S.minFilter!==ma||S.type===rr&&e.has("OES_texture_float_linear")===!1||a===!1&&S.type===ga&&e.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||i.get(S).__currentAnisotropy)&&(t.texParameterf(C,te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy)}}function Y(C,S){let H=!1;C.__webglInit===void 0&&(C.__webglInit=!0,S.addEventListener("dispose",M));const te=S.source;let Q=h.get(te);Q===void 0&&(Q={},h.set(te,Q));const ne=O(S);if(ne!==C.__cacheKey){Q[ne]===void 0&&(Q[ne]={texture:t.createTexture(),usedTimes:0},s.memory.textures++,H=!0),Q[ne].usedTimes++;const ve=Q[C.__cacheKey];ve!==void 0&&(Q[C.__cacheKey].usedTimes--,ve.usedTimes===0&&w(S)),C.__cacheKey=ne,C.__webglTexture=Q[ne].texture}return H}function oe(C,S,H){let te=t.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(te=t.TEXTURE_2D_ARRAY),S.isData3DTexture&&(te=t.TEXTURE_3D);const Q=Y(C,S),ne=S.source;n.bindTexture(te,C.__webglTexture,t.TEXTURE0+H);const ve=i.get(ne);if(ne.version!==ve.__version||Q===!0){n.activeTexture(t.TEXTURE0+H);const le=nt.getPrimaries(nt.workingColorSpace),he=S.colorSpace===On?null:nt.getPrimaries(S.colorSpace),Ae=S.colorSpace===On||le===he?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);const Be=f(S)&&g(S.image)===!1;let K=x(S.image,Be,!1,r.maxTextureSize);K=Oe(S,K);const tt=g(K)||a,We=o.convert(S.format,S.colorSpace);let be=o.convert(S.type),xe=y(S.internalFormat,We,be,S.colorSpace,S.isVideoTexture);W(te,S,tt);let pe;const De=S.mipmaps,Qe=a&&S.isVideoTexture!==!0&&xe!==b1,xt=ve.__version===void 0||Q===!0,ze=R(S,K,tt);if(S.isDepthTexture)xe=t.DEPTH_COMPONENT,a?S.type===rr?xe=t.DEPTH_COMPONENT32F:S.type===ir?xe=t.DEPTH_COMPONENT24:S.type===Vr?xe=t.DEPTH24_STENCIL8:xe=t.DEPTH_COMPONENT16:S.type===rr&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===Wr&&xe===t.DEPTH_COMPONENT&&S.type!==qh&&S.type!==ir&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=ir,be=o.convert(S.type)),S.format===ls&&xe===t.DEPTH_COMPONENT&&(xe=t.DEPTH_STENCIL,S.type!==Vr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=Vr,be=o.convert(S.type))),xt&&(Qe?n.texStorage2D(t.TEXTURE_2D,1,xe,K.width,K.height):n.texImage2D(t.TEXTURE_2D,0,xe,K.width,K.height,0,We,be,null));else if(S.isDataTexture)if(De.length>0&&tt){Qe&&xt&&n.texStorage2D(t.TEXTURE_2D,ze,xe,De[0].width,De[0].height);for(let ie=0,b=De.length;ie<b;ie++)pe=De[ie],Qe?n.texSubImage2D(t.TEXTURE_2D,ie,0,0,pe.width,pe.height,We,be,pe.data):n.texImage2D(t.TEXTURE_2D,ie,xe,pe.width,pe.height,0,We,be,pe.data);S.generateMipmaps=!1}else Qe?(xt&&n.texStorage2D(t.TEXTURE_2D,ze,xe,K.width,K.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,K.width,K.height,We,be,K.data)):n.texImage2D(t.TEXTURE_2D,0,xe,K.width,K.height,0,We,be,K.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Qe&&xt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ze,xe,De[0].width,De[0].height,K.depth);for(let ie=0,b=De.length;ie<b;ie++)pe=De[ie],S.format!==ei?We!==null?Qe?n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ie,0,0,0,pe.width,pe.height,K.depth,We,pe.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,ie,xe,pe.width,pe.height,K.depth,0,pe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Qe?n.texSubImage3D(t.TEXTURE_2D_ARRAY,ie,0,0,0,pe.width,pe.height,K.depth,We,be,pe.data):n.texImage3D(t.TEXTURE_2D_ARRAY,ie,xe,pe.width,pe.height,K.depth,0,We,be,pe.data)}else{Qe&&xt&&n.texStorage2D(t.TEXTURE_2D,ze,xe,De[0].width,De[0].height);for(let ie=0,b=De.length;ie<b;ie++)pe=De[ie],S.format!==ei?We!==null?Qe?n.compressedTexSubImage2D(t.TEXTURE_2D,ie,0,0,pe.width,pe.height,We,pe.data):n.compressedTexImage2D(t.TEXTURE_2D,ie,xe,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Qe?n.texSubImage2D(t.TEXTURE_2D,ie,0,0,pe.width,pe.height,We,be,pe.data):n.texImage2D(t.TEXTURE_2D,ie,xe,pe.width,pe.height,0,We,be,pe.data)}else if(S.isDataArrayTexture)Qe?(xt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ze,xe,K.width,K.height,K.depth),n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,K.width,K.height,K.depth,We,be,K.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,xe,K.width,K.height,K.depth,0,We,be,K.data);else if(S.isData3DTexture)Qe?(xt&&n.texStorage3D(t.TEXTURE_3D,ze,xe,K.width,K.height,K.depth),n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,K.width,K.height,K.depth,We,be,K.data)):n.texImage3D(t.TEXTURE_3D,0,xe,K.width,K.height,K.depth,0,We,be,K.data);else if(S.isFramebufferTexture){if(xt)if(Qe)n.texStorage2D(t.TEXTURE_2D,ze,xe,K.width,K.height);else{let ie=K.width,b=K.height;for(let se=0;se<ze;se++)n.texImage2D(t.TEXTURE_2D,se,xe,ie,b,0,We,be,null),ie>>=1,b>>=1}}else if(De.length>0&&tt){Qe&&xt&&n.texStorage2D(t.TEXTURE_2D,ze,xe,De[0].width,De[0].height);for(let ie=0,b=De.length;ie<b;ie++)pe=De[ie],Qe?n.texSubImage2D(t.TEXTURE_2D,ie,0,0,We,be,pe):n.texImage2D(t.TEXTURE_2D,ie,xe,We,be,pe);S.generateMipmaps=!1}else Qe?(xt&&n.texStorage2D(t.TEXTURE_2D,ze,xe,K.width,K.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,We,be,K)):n.texImage2D(t.TEXTURE_2D,0,xe,We,be,K);v(S,tt)&&m(te),ve.__version=ne.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function ue(C,S,H){if(S.image.length!==6)return;const te=Y(C,S),Q=S.source;n.bindTexture(t.TEXTURE_CUBE_MAP,C.__webglTexture,t.TEXTURE0+H);const ne=i.get(Q);if(Q.version!==ne.__version||te===!0){n.activeTexture(t.TEXTURE0+H);const ve=nt.getPrimaries(nt.workingColorSpace),le=S.colorSpace===On?null:nt.getPrimaries(S.colorSpace),he=S.colorSpace===On||ve===le?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,he);const Ae=S.isCompressedTexture||S.image[0].isCompressedTexture,Be=S.image[0]&&S.image[0].isDataTexture,K=[];for(let ie=0;ie<6;ie++)!Ae&&!Be?K[ie]=x(S.image[ie],!1,!0,r.maxCubemapSize):K[ie]=Be?S.image[ie].image:S.image[ie],K[ie]=Oe(S,K[ie]);const tt=K[0],We=g(tt)||a,be=o.convert(S.format,S.colorSpace),xe=o.convert(S.type),pe=y(S.internalFormat,be,xe,S.colorSpace),De=a&&S.isVideoTexture!==!0,Qe=ne.__version===void 0||te===!0;let xt=R(S,tt,We);W(t.TEXTURE_CUBE_MAP,S,We);let ze;if(Ae){De&&Qe&&n.texStorage2D(t.TEXTURE_CUBE_MAP,xt,pe,tt.width,tt.height);for(let ie=0;ie<6;ie++){ze=K[ie].mipmaps;for(let b=0;b<ze.length;b++){const se=ze[b];S.format!==ei?be!==null?De?n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,b,0,0,se.width,se.height,be,se.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,b,pe,se.width,se.height,0,se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):De?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,b,0,0,se.width,se.height,be,xe,se.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,b,pe,se.width,se.height,0,be,xe,se.data)}}}else{ze=S.mipmaps,De&&Qe&&(ze.length>0&&xt++,n.texStorage2D(t.TEXTURE_CUBE_MAP,xt,pe,K[0].width,K[0].height));for(let ie=0;ie<6;ie++)if(Be){De?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,K[ie].width,K[ie].height,be,xe,K[ie].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,pe,K[ie].width,K[ie].height,0,be,xe,K[ie].data);for(let b=0;b<ze.length;b++){const ae=ze[b].image[ie].image;De?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,b+1,0,0,ae.width,ae.height,be,xe,ae.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,b+1,pe,ae.width,ae.height,0,be,xe,ae.data)}}else{De?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,be,xe,K[ie]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,pe,be,xe,K[ie]);for(let b=0;b<ze.length;b++){const se=ze[b];De?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,b+1,0,0,be,xe,se.image[ie]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,b+1,pe,be,xe,se.image[ie])}}}v(S,We)&&m(t.TEXTURE_CUBE_MAP),ne.__version=Q.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function de(C,S,H,te,Q,ne){const ve=o.convert(H.format,H.colorSpace),le=o.convert(H.type),he=y(H.internalFormat,ve,le,H.colorSpace);if(!i.get(S).__hasExternalTextures){const Be=Math.max(1,S.width>>ne),K=Math.max(1,S.height>>ne);Q===t.TEXTURE_3D||Q===t.TEXTURE_2D_ARRAY?n.texImage3D(Q,ne,he,Be,K,S.depth,0,ve,le,null):n.texImage2D(Q,ne,he,Be,K,0,ve,le,null)}n.bindFramebuffer(t.FRAMEBUFFER,C),ge(S)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,te,Q,i.get(H).__webglTexture,0,Pe(S)):(Q===t.TEXTURE_2D||Q>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,te,Q,i.get(H).__webglTexture,ne),n.bindFramebuffer(t.FRAMEBUFFER,null)}function we(C,S,H){if(t.bindRenderbuffer(t.RENDERBUFFER,C),S.depthBuffer&&!S.stencilBuffer){let te=a===!0?t.DEPTH_COMPONENT24:t.DEPTH_COMPONENT16;if(H||ge(S)){const Q=S.depthTexture;Q&&Q.isDepthTexture&&(Q.type===rr?te=t.DEPTH_COMPONENT32F:Q.type===ir&&(te=t.DEPTH_COMPONENT24));const ne=Pe(S);ge(S)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ne,te,S.width,S.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,ne,te,S.width,S.height)}else t.renderbufferStorage(t.RENDERBUFFER,te,S.width,S.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,C)}else if(S.depthBuffer&&S.stencilBuffer){const te=Pe(S);H&&ge(S)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,te,t.DEPTH24_STENCIL8,S.width,S.height):ge(S)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,te,t.DEPTH24_STENCIL8,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,S.width,S.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,C)}else{const te=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let Q=0;Q<te.length;Q++){const ne=te[Q],ve=o.convert(ne.format,ne.colorSpace),le=o.convert(ne.type),he=y(ne.internalFormat,ve,le,ne.colorSpace),Ae=Pe(S);H&&ge(S)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ae,he,S.width,S.height):ge(S)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ae,he,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,he,S.width,S.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Me(C,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,C),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),X(S.depthTexture,0);const te=i.get(S.depthTexture).__webglTexture,Q=Pe(S);if(S.depthTexture.format===Wr)ge(S)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,te,0,Q):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,te,0);else if(S.depthTexture.format===ls)ge(S)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,te,0,Q):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,te,0);else throw new Error("Unknown depthTexture format")}function ye(C){const S=i.get(C),H=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!S.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");Me(S.__webglFramebuffer,C)}else if(H){S.__webglDepthbuffer=[];for(let te=0;te<6;te++)n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer[te]),S.__webglDepthbuffer[te]=t.createRenderbuffer(),we(S.__webglDepthbuffer[te],C,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=t.createRenderbuffer(),we(S.__webglDepthbuffer,C,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function He(C,S,H){const te=i.get(C);S!==void 0&&de(te.__webglFramebuffer,C,C.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),H!==void 0&&ye(C)}function U(C){const S=C.texture,H=i.get(C),te=i.get(S);C.addEventListener("dispose",N),C.isWebGLMultipleRenderTargets!==!0&&(te.__webglTexture===void 0&&(te.__webglTexture=t.createTexture()),te.__version=S.version,s.memory.textures++);const Q=C.isWebGLCubeRenderTarget===!0,ne=C.isWebGLMultipleRenderTargets===!0,ve=g(C)||a;if(Q){H.__webglFramebuffer=[];for(let le=0;le<6;le++)if(a&&S.mipmaps&&S.mipmaps.length>0){H.__webglFramebuffer[le]=[];for(let he=0;he<S.mipmaps.length;he++)H.__webglFramebuffer[le][he]=t.createFramebuffer()}else H.__webglFramebuffer[le]=t.createFramebuffer()}else{if(a&&S.mipmaps&&S.mipmaps.length>0){H.__webglFramebuffer=[];for(let le=0;le<S.mipmaps.length;le++)H.__webglFramebuffer[le]=t.createFramebuffer()}else H.__webglFramebuffer=t.createFramebuffer();if(ne)if(r.drawBuffers){const le=C.texture;for(let he=0,Ae=le.length;he<Ae;he++){const Be=i.get(le[he]);Be.__webglTexture===void 0&&(Be.__webglTexture=t.createTexture(),s.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&C.samples>0&&ge(C)===!1){const le=ne?S:[S];H.__webglMultisampledFramebuffer=t.createFramebuffer(),H.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let he=0;he<le.length;he++){const Ae=le[he];H.__webglColorRenderbuffer[he]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,H.__webglColorRenderbuffer[he]);const Be=o.convert(Ae.format,Ae.colorSpace),K=o.convert(Ae.type),tt=y(Ae.internalFormat,Be,K,Ae.colorSpace,C.isXRRenderTarget===!0),We=Pe(C);t.renderbufferStorageMultisample(t.RENDERBUFFER,We,tt,C.width,C.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+he,t.RENDERBUFFER,H.__webglColorRenderbuffer[he])}t.bindRenderbuffer(t.RENDERBUFFER,null),C.depthBuffer&&(H.__webglDepthRenderbuffer=t.createRenderbuffer(),we(H.__webglDepthRenderbuffer,C,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(Q){n.bindTexture(t.TEXTURE_CUBE_MAP,te.__webglTexture),W(t.TEXTURE_CUBE_MAP,S,ve);for(let le=0;le<6;le++)if(a&&S.mipmaps&&S.mipmaps.length>0)for(let he=0;he<S.mipmaps.length;he++)de(H.__webglFramebuffer[le][he],C,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+le,he);else de(H.__webglFramebuffer[le],C,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);v(S,ve)&&m(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ne){const le=C.texture;for(let he=0,Ae=le.length;he<Ae;he++){const Be=le[he],K=i.get(Be);n.bindTexture(t.TEXTURE_2D,K.__webglTexture),W(t.TEXTURE_2D,Be,ve),de(H.__webglFramebuffer,C,Be,t.COLOR_ATTACHMENT0+he,t.TEXTURE_2D,0),v(Be,ve)&&m(t.TEXTURE_2D)}n.unbindTexture()}else{let le=t.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(a?le=C.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(le,te.__webglTexture),W(le,S,ve),a&&S.mipmaps&&S.mipmaps.length>0)for(let he=0;he<S.mipmaps.length;he++)de(H.__webglFramebuffer[he],C,S,t.COLOR_ATTACHMENT0,le,he);else de(H.__webglFramebuffer,C,S,t.COLOR_ATTACHMENT0,le,0);v(S,ve)&&m(le),n.unbindTexture()}C.depthBuffer&&ye(C)}function Jt(C){const S=g(C)||a,H=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let te=0,Q=H.length;te<Q;te++){const ne=H[te];if(v(ne,S)){const ve=C.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,le=i.get(ne).__webglTexture;n.bindTexture(ve,le),m(ve),n.unbindTexture()}}}function Se(C){if(a&&C.samples>0&&ge(C)===!1){const S=C.isWebGLMultipleRenderTargets?C.texture:[C.texture],H=C.width,te=C.height;let Q=t.COLOR_BUFFER_BIT;const ne=[],ve=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,le=i.get(C),he=C.isWebGLMultipleRenderTargets===!0;if(he)for(let Ae=0;Ae<S.length;Ae++)n.bindFramebuffer(t.FRAMEBUFFER,le.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ae,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,le.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ae,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,le.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,le.__webglFramebuffer);for(let Ae=0;Ae<S.length;Ae++){ne.push(t.COLOR_ATTACHMENT0+Ae),C.depthBuffer&&ne.push(ve);const Be=le.__ignoreDepthValues!==void 0?le.__ignoreDepthValues:!1;if(Be===!1&&(C.depthBuffer&&(Q|=t.DEPTH_BUFFER_BIT),C.stencilBuffer&&(Q|=t.STENCIL_BUFFER_BIT)),he&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,le.__webglColorRenderbuffer[Ae]),Be===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[ve]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[ve])),he){const K=i.get(S[Ae]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,K,0)}t.blitFramebuffer(0,0,H,te,0,0,H,te,Q,t.NEAREST),u&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,ne)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),he)for(let Ae=0;Ae<S.length;Ae++){n.bindFramebuffer(t.FRAMEBUFFER,le.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ae,t.RENDERBUFFER,le.__webglColorRenderbuffer[Ae]);const Be=i.get(S[Ae]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,le.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ae,t.TEXTURE_2D,Be,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,le.__webglMultisampledFramebuffer)}}function Pe(C){return Math.min(r.maxSamples,C.samples)}function ge(C){const S=i.get(C);return a&&C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function pt(C){const S=s.render.frame;c.get(C)!==S&&(c.set(C,S),C.update())}function Oe(C,S){const H=C.colorSpace,te=C.format,Q=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||C.format===Fd||H!==Hi&&H!==On&&(nt.getTransfer(H)===ct?a===!1?e.has("EXT_sRGB")===!0&&te===ei?(C.format=Fd,C.minFilter=Un,C.generateMipmaps=!1):S=I1.sRGBToLinear(S):(te!==ei||Q!==mr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),S}this.allocateTextureUnit=P,this.resetTextureUnits=ee,this.setTexture2D=X,this.setTexture2DArray=q,this.setTexture3D=L,this.setTextureCube=I,this.rebindTextures=He,this.setupRenderTarget=U,this.updateRenderTargetMipmap=Jt,this.updateMultisampleRenderTarget=Se,this.setupDepthRenderbuffer=ye,this.setupFrameBufferTexture=de,this.useMultisampledRTT=ge}function ZR(t,e,n){const i=n.isWebGL2;function r(o,s=On){let a;const l=nt.getTransfer(s);if(o===mr)return t.UNSIGNED_BYTE;if(o===T1)return t.UNSIGNED_SHORT_4_4_4_4;if(o===w1)return t.UNSIGNED_SHORT_5_5_5_1;if(o===v2)return t.BYTE;if(o===_2)return t.SHORT;if(o===qh)return t.UNSIGNED_SHORT;if(o===M1)return t.INT;if(o===ir)return t.UNSIGNED_INT;if(o===rr)return t.FLOAT;if(o===ga)return i?t.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(o===x2)return t.ALPHA;if(o===ei)return t.RGBA;if(o===y2)return t.LUMINANCE;if(o===S2)return t.LUMINANCE_ALPHA;if(o===Wr)return t.DEPTH_COMPONENT;if(o===ls)return t.DEPTH_STENCIL;if(o===Fd)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(o===E2)return t.RED;if(o===A1)return t.RED_INTEGER;if(o===M2)return t.RG;if(o===C1)return t.RG_INTEGER;if(o===R1)return t.RGBA_INTEGER;if(o===jc||o===Yc||o===qc||o===Zc)if(l===ct)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(o===jc)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(o===Yc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(o===qc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(o===Zc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(o===jc)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(o===Yc)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(o===qc)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(o===Zc)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(o===Ym||o===qm||o===Zm||o===Km)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(o===Ym)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(o===qm)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(o===Zm)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(o===Km)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(o===b1)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(o===Qm||o===Jm)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(o===Qm)return l===ct?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(o===Jm)return l===ct?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(o===eg||o===tg||o===ng||o===ig||o===rg||o===og||o===sg||o===ag||o===lg||o===ug||o===cg||o===fg||o===dg||o===hg)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(o===eg)return l===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(o===tg)return l===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(o===ng)return l===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(o===ig)return l===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(o===rg)return l===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(o===og)return l===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(o===sg)return l===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(o===ag)return l===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(o===lg)return l===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(o===ug)return l===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(o===cg)return l===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(o===fg)return l===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(o===dg)return l===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(o===hg)return l===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(o===Kc||o===pg||o===mg)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(o===Kc)return l===ct?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(o===pg)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(o===mg)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(o===T2||o===gg||o===vg||o===_g)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(o===Kc)return a.COMPRESSED_RED_RGTC1_EXT;if(o===gg)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(o===vg)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(o===_g)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return o===Vr?i?t.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):t[o]!==void 0?t[o]:null}return{convert:r}}class KR extends Fn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class yl extends An{constructor(){super(),this.isGroup=!0,this.type="Group"}}const QR={type:"move"};class Sf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new yl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new yl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new yl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,o=null,s=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){s=!0;for(const x of e.hand.values()){const g=n.getJointPose(x,i),f=this._getHandJoint(u,x);g!==null&&(f.matrix.fromArray(g.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=g.radius),f.visible=g!==null}const c=u.joints["index-finger-tip"],d=u.joints["thumb-tip"],h=c.position.distanceTo(d.position),p=.02,_=.005;u.inputState.pinching&&h>p+_?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&h<=p-_&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(o=n.getPose(e.gripSpace,i),o!==null&&(l.matrix.fromArray(o.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,o.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(o.linearVelocity)):l.hasLinearVelocity=!1,o.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(o.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&o!==null&&(r=o),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(QR)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=o!==null),u!==null&&(u.visible=s!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new yl;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class JR extends vs{constructor(e,n){super();const i=this;let r=null,o=1,s=null,a="local-floor",l=1,u=null,c=null,d=null,h=null,p=null,_=null;const x=n.getContextAttributes();let g=null,f=null;const v=[],m=[],y=new Ze;let R=null;const A=new Fn;A.layers.enable(1),A.viewport=new Ht;const M=new Fn;M.layers.enable(2),M.viewport=new Ht;const N=[A,M],E=new KR;E.layers.enable(1),E.layers.enable(2);let w=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let Y=v[W];return Y===void 0&&(Y=new Sf,v[W]=Y),Y.getTargetRaySpace()},this.getControllerGrip=function(W){let Y=v[W];return Y===void 0&&(Y=new Sf,v[W]=Y),Y.getGripSpace()},this.getHand=function(W){let Y=v[W];return Y===void 0&&(Y=new Sf,v[W]=Y),Y.getHandSpace()};function $(W){const Y=m.indexOf(W.inputSource);if(Y===-1)return;const oe=v[Y];oe!==void 0&&(oe.update(W.inputSource,W.frame,u||s),oe.dispatchEvent({type:W.type,data:W.inputSource}))}function ee(){r.removeEventListener("select",$),r.removeEventListener("selectstart",$),r.removeEventListener("selectend",$),r.removeEventListener("squeeze",$),r.removeEventListener("squeezestart",$),r.removeEventListener("squeezeend",$),r.removeEventListener("end",ee),r.removeEventListener("inputsourceschange",P);for(let W=0;W<v.length;W++){const Y=m[W];Y!==null&&(m[W]=null,v[W].disconnect(Y))}w=null,F=null,e.setRenderTarget(g),p=null,h=null,d=null,r=null,f=null,Z.stop(),i.isPresenting=!1,e.setPixelRatio(R),e.setSize(y.width,y.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){o=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){a=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||s},this.setReferenceSpace=function(W){u=W},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return d},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(W){if(r=W,r!==null){if(g=e.getRenderTarget(),r.addEventListener("select",$),r.addEventListener("selectstart",$),r.addEventListener("selectend",$),r.addEventListener("squeeze",$),r.addEventListener("squeezestart",$),r.addEventListener("squeezeend",$),r.addEventListener("end",ee),r.addEventListener("inputsourceschange",P),x.xrCompatible!==!0&&await n.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(y),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const Y={antialias:r.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:o};p=new XRWebGLLayer(r,n,Y),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),f=new eo(p.framebufferWidth,p.framebufferHeight,{format:ei,type:mr,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let Y=null,oe=null,ue=null;x.depth&&(ue=x.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Y=x.stencil?ls:Wr,oe=x.stencil?Vr:ir);const de={colorFormat:n.RGBA8,depthFormat:ue,scaleFactor:o};d=new XRWebGLBinding(r,n),h=d.createProjectionLayer(de),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),f=new eo(h.textureWidth,h.textureHeight,{format:ei,type:mr,depthTexture:new X1(h.textureWidth,h.textureHeight,oe,void 0,void 0,void 0,void 0,void 0,void 0,Y),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0});const we=e.properties.get(f);we.__ignoreDepthValues=h.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(l),u=null,s=await r.requestReferenceSpace(a),Z.setContext(r),Z.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function P(W){for(let Y=0;Y<W.removed.length;Y++){const oe=W.removed[Y],ue=m.indexOf(oe);ue>=0&&(m[ue]=null,v[ue].disconnect(oe))}for(let Y=0;Y<W.added.length;Y++){const oe=W.added[Y];let ue=m.indexOf(oe);if(ue===-1){for(let we=0;we<v.length;we++)if(we>=m.length){m.push(oe),ue=we;break}else if(m[we]===null){m[we]=oe,ue=we;break}if(ue===-1)break}const de=v[ue];de&&de.connect(oe)}}const O=new B,X=new B;function q(W,Y,oe){O.setFromMatrixPosition(Y.matrixWorld),X.setFromMatrixPosition(oe.matrixWorld);const ue=O.distanceTo(X),de=Y.projectionMatrix.elements,we=oe.projectionMatrix.elements,Me=de[14]/(de[10]-1),ye=de[14]/(de[10]+1),He=(de[9]+1)/de[5],U=(de[9]-1)/de[5],Jt=(de[8]-1)/de[0],Se=(we[8]+1)/we[0],Pe=Me*Jt,ge=Me*Se,pt=ue/(-Jt+Se),Oe=pt*-Jt;Y.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(Oe),W.translateZ(pt),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert();const C=Me+pt,S=ye+pt,H=Pe-Oe,te=ge+(ue-Oe),Q=He*ye/S*C,ne=U*ye/S*C;W.projectionMatrix.makePerspective(H,te,Q,ne,C,S),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}function L(W,Y){Y===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(Y.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(r===null)return;E.near=M.near=A.near=W.near,E.far=M.far=A.far=W.far,(w!==E.near||F!==E.far)&&(r.updateRenderState({depthNear:E.near,depthFar:E.far}),w=E.near,F=E.far);const Y=W.parent,oe=E.cameras;L(E,Y);for(let ue=0;ue<oe.length;ue++)L(oe[ue],Y);oe.length===2?q(E,A,M):E.projectionMatrix.copy(A.projectionMatrix),I(W,E,Y)};function I(W,Y,oe){oe===null?W.matrix.copy(Y.matrixWorld):(W.matrix.copy(oe.matrixWorld),W.matrix.invert(),W.matrix.multiply(Y.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(Y.projectionMatrix),W.projectionMatrixInverse.copy(Y.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=va*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(W){l=W,h!==null&&(h.fixedFoveation=W),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=W)};let G=null;function j(W,Y){if(c=Y.getViewerPose(u||s),_=Y,c!==null){const oe=c.views;p!==null&&(e.setRenderTargetFramebuffer(f,p.framebuffer),e.setRenderTarget(f));let ue=!1;oe.length!==E.cameras.length&&(E.cameras.length=0,ue=!0);for(let de=0;de<oe.length;de++){const we=oe[de];let Me=null;if(p!==null)Me=p.getViewport(we);else{const He=d.getViewSubImage(h,we);Me=He.viewport,de===0&&(e.setRenderTargetTextures(f,He.colorTexture,h.ignoreDepthValues?void 0:He.depthStencilTexture),e.setRenderTarget(f))}let ye=N[de];ye===void 0&&(ye=new Fn,ye.layers.enable(de),ye.viewport=new Ht,N[de]=ye),ye.matrix.fromArray(we.transform.matrix),ye.matrix.decompose(ye.position,ye.quaternion,ye.scale),ye.projectionMatrix.fromArray(we.projectionMatrix),ye.projectionMatrixInverse.copy(ye.projectionMatrix).invert(),ye.viewport.set(Me.x,Me.y,Me.width,Me.height),de===0&&(E.matrix.copy(ye.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),ue===!0&&E.cameras.push(ye)}}for(let oe=0;oe<v.length;oe++){const ue=m[oe],de=v[oe];ue!==null&&de!==void 0&&de.update(ue,Y,u||s)}G&&G(W,Y),Y.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Y}),_=null}const Z=new W1;Z.setAnimationLoop(j),this.setAnimationLoop=function(W){G=W},this.dispose=function(){}}}function eb(t,e){function n(g,f){g.matrixAutoUpdate===!0&&g.updateMatrix(),f.value.copy(g.matrix)}function i(g,f){f.color.getRGB(g.fogColor.value,H1(t)),f.isFog?(g.fogNear.value=f.near,g.fogFar.value=f.far):f.isFogExp2&&(g.fogDensity.value=f.density)}function r(g,f,v,m,y){f.isMeshBasicMaterial||f.isMeshLambertMaterial?o(g,f):f.isMeshToonMaterial?(o(g,f),d(g,f)):f.isMeshPhongMaterial?(o(g,f),c(g,f)):f.isMeshStandardMaterial?(o(g,f),h(g,f),f.isMeshPhysicalMaterial&&p(g,f,y)):f.isMeshMatcapMaterial?(o(g,f),_(g,f)):f.isMeshDepthMaterial?o(g,f):f.isMeshDistanceMaterial?(o(g,f),x(g,f)):f.isMeshNormalMaterial?o(g,f):f.isLineBasicMaterial?(s(g,f),f.isLineDashedMaterial&&a(g,f)):f.isPointsMaterial?l(g,f,v,m):f.isSpriteMaterial?u(g,f):f.isShadowMaterial?(g.color.value.copy(f.color),g.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function o(g,f){g.opacity.value=f.opacity,f.color&&g.diffuse.value.copy(f.color),f.emissive&&g.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(g.map.value=f.map,n(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,n(f.alphaMap,g.alphaMapTransform)),f.bumpMap&&(g.bumpMap.value=f.bumpMap,n(f.bumpMap,g.bumpMapTransform),g.bumpScale.value=f.bumpScale,f.side===vn&&(g.bumpScale.value*=-1)),f.normalMap&&(g.normalMap.value=f.normalMap,n(f.normalMap,g.normalMapTransform),g.normalScale.value.copy(f.normalScale),f.side===vn&&g.normalScale.value.negate()),f.displacementMap&&(g.displacementMap.value=f.displacementMap,n(f.displacementMap,g.displacementMapTransform),g.displacementScale.value=f.displacementScale,g.displacementBias.value=f.displacementBias),f.emissiveMap&&(g.emissiveMap.value=f.emissiveMap,n(f.emissiveMap,g.emissiveMapTransform)),f.specularMap&&(g.specularMap.value=f.specularMap,n(f.specularMap,g.specularMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest);const v=e.get(f).envMap;if(v&&(g.envMap.value=v,g.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=f.reflectivity,g.ior.value=f.ior,g.refractionRatio.value=f.refractionRatio),f.lightMap){g.lightMap.value=f.lightMap;const m=t._useLegacyLights===!0?Math.PI:1;g.lightMapIntensity.value=f.lightMapIntensity*m,n(f.lightMap,g.lightMapTransform)}f.aoMap&&(g.aoMap.value=f.aoMap,g.aoMapIntensity.value=f.aoMapIntensity,n(f.aoMap,g.aoMapTransform))}function s(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,f.map&&(g.map.value=f.map,n(f.map,g.mapTransform))}function a(g,f){g.dashSize.value=f.dashSize,g.totalSize.value=f.dashSize+f.gapSize,g.scale.value=f.scale}function l(g,f,v,m){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.size.value=f.size*v,g.scale.value=m*.5,f.map&&(g.map.value=f.map,n(f.map,g.uvTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,n(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function u(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.rotation.value=f.rotation,f.map&&(g.map.value=f.map,n(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,n(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function c(g,f){g.specular.value.copy(f.specular),g.shininess.value=Math.max(f.shininess,1e-4)}function d(g,f){f.gradientMap&&(g.gradientMap.value=f.gradientMap)}function h(g,f){g.metalness.value=f.metalness,f.metalnessMap&&(g.metalnessMap.value=f.metalnessMap,n(f.metalnessMap,g.metalnessMapTransform)),g.roughness.value=f.roughness,f.roughnessMap&&(g.roughnessMap.value=f.roughnessMap,n(f.roughnessMap,g.roughnessMapTransform)),e.get(f).envMap&&(g.envMapIntensity.value=f.envMapIntensity)}function p(g,f,v){g.ior.value=f.ior,f.sheen>0&&(g.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),g.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(g.sheenColorMap.value=f.sheenColorMap,n(f.sheenColorMap,g.sheenColorMapTransform)),f.sheenRoughnessMap&&(g.sheenRoughnessMap.value=f.sheenRoughnessMap,n(f.sheenRoughnessMap,g.sheenRoughnessMapTransform))),f.clearcoat>0&&(g.clearcoat.value=f.clearcoat,g.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(g.clearcoatMap.value=f.clearcoatMap,n(f.clearcoatMap,g.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,n(f.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(g.clearcoatNormalMap.value=f.clearcoatNormalMap,n(f.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===vn&&g.clearcoatNormalScale.value.negate())),f.iridescence>0&&(g.iridescence.value=f.iridescence,g.iridescenceIOR.value=f.iridescenceIOR,g.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(g.iridescenceMap.value=f.iridescenceMap,n(f.iridescenceMap,g.iridescenceMapTransform)),f.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=f.iridescenceThicknessMap,n(f.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),f.transmission>0&&(g.transmission.value=f.transmission,g.transmissionSamplerMap.value=v.texture,g.transmissionSamplerSize.value.set(v.width,v.height),f.transmissionMap&&(g.transmissionMap.value=f.transmissionMap,n(f.transmissionMap,g.transmissionMapTransform)),g.thickness.value=f.thickness,f.thicknessMap&&(g.thicknessMap.value=f.thicknessMap,n(f.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=f.attenuationDistance,g.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(g.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(g.anisotropyMap.value=f.anisotropyMap,n(f.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=f.specularIntensity,g.specularColor.value.copy(f.specularColor),f.specularColorMap&&(g.specularColorMap.value=f.specularColorMap,n(f.specularColorMap,g.specularColorMapTransform)),f.specularIntensityMap&&(g.specularIntensityMap.value=f.specularIntensityMap,n(f.specularIntensityMap,g.specularIntensityMapTransform))}function _(g,f){f.matcap&&(g.matcap.value=f.matcap)}function x(g,f){const v=e.get(f).light;g.referencePosition.value.setFromMatrixPosition(v.matrixWorld),g.nearDistance.value=v.shadow.camera.near,g.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function tb(t,e,n,i){let r={},o={},s=[];const a=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(v,m){const y=m.program;i.uniformBlockBinding(v,y)}function u(v,m){let y=r[v.id];y===void 0&&(_(v),y=c(v),r[v.id]=y,v.addEventListener("dispose",g));const R=m.program;i.updateUBOMapping(v,R);const A=e.render.frame;o[v.id]!==A&&(h(v),o[v.id]=A)}function c(v){const m=d();v.__bindingPointIndex=m;const y=t.createBuffer(),R=v.__size,A=v.usage;return t.bindBuffer(t.UNIFORM_BUFFER,y),t.bufferData(t.UNIFORM_BUFFER,R,A),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,m,y),y}function d(){for(let v=0;v<a;v++)if(s.indexOf(v)===-1)return s.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(v){const m=r[v.id],y=v.uniforms,R=v.__cache;t.bindBuffer(t.UNIFORM_BUFFER,m);for(let A=0,M=y.length;A<M;A++){const N=Array.isArray(y[A])?y[A]:[y[A]];for(let E=0,w=N.length;E<w;E++){const F=N[E];if(p(F,A,E,R)===!0){const $=F.__offset,ee=Array.isArray(F.value)?F.value:[F.value];let P=0;for(let O=0;O<ee.length;O++){const X=ee[O],q=x(X);typeof X=="number"||typeof X=="boolean"?(F.__data[0]=X,t.bufferSubData(t.UNIFORM_BUFFER,$+P,F.__data)):X.isMatrix3?(F.__data[0]=X.elements[0],F.__data[1]=X.elements[1],F.__data[2]=X.elements[2],F.__data[3]=0,F.__data[4]=X.elements[3],F.__data[5]=X.elements[4],F.__data[6]=X.elements[5],F.__data[7]=0,F.__data[8]=X.elements[6],F.__data[9]=X.elements[7],F.__data[10]=X.elements[8],F.__data[11]=0):(X.toArray(F.__data,P),P+=q.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,$,F.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(v,m,y,R){const A=v.value,M=m+"_"+y;if(R[M]===void 0)return typeof A=="number"||typeof A=="boolean"?R[M]=A:R[M]=A.clone(),!0;{const N=R[M];if(typeof A=="number"||typeof A=="boolean"){if(N!==A)return R[M]=A,!0}else if(N.equals(A)===!1)return N.copy(A),!0}return!1}function _(v){const m=v.uniforms;let y=0;const R=16;for(let M=0,N=m.length;M<N;M++){const E=Array.isArray(m[M])?m[M]:[m[M]];for(let w=0,F=E.length;w<F;w++){const $=E[w],ee=Array.isArray($.value)?$.value:[$.value];for(let P=0,O=ee.length;P<O;P++){const X=ee[P],q=x(X),L=y%R;L!==0&&R-L<q.boundary&&(y+=R-L),$.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),$.__offset=y,y+=q.storage}}}const A=y%R;return A>0&&(y+=R-A),v.__size=y,v.__cache={},this}function x(v){const m={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(m.boundary=4,m.storage=4):v.isVector2?(m.boundary=8,m.storage=8):v.isVector3||v.isColor?(m.boundary=16,m.storage=12):v.isVector4?(m.boundary=16,m.storage=16):v.isMatrix3?(m.boundary=48,m.storage=48):v.isMatrix4?(m.boundary=64,m.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),m}function g(v){const m=v.target;m.removeEventListener("dispose",g);const y=s.indexOf(m.__bindingPointIndex);s.splice(y,1),t.deleteBuffer(r[m.id]),delete r[m.id],delete o[m.id]}function f(){for(const v in r)t.deleteBuffer(r[v]);s=[],r={},o={}}return{bind:l,update:u,dispose:f}}class K1{constructor(e={}){const{canvas:n=Z2(),context:i=null,depth:r=!0,stencil:o=!0,alpha:s=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let h;i!==null?h=i.getContextAttributes().alpha:h=s;const p=new Uint32Array(4),_=new Int32Array(4);let x=null,g=null;const f=[],v=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=kt,this._useLegacyLights=!1,this.toneMapping=pr,this.toneMappingExposure=1;const m=this;let y=!1,R=0,A=0,M=null,N=-1,E=null;const w=new Ht,F=new Ht;let $=null;const ee=new it(0);let P=0,O=n.width,X=n.height,q=1,L=null,I=null;const G=new Ht(0,0,O,X),j=new Ht(0,0,O,X);let Z=!1;const W=new V1;let Y=!1,oe=!1,ue=null;const de=new Gt,we=new Ze,Me=new B,ye={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function He(){return M===null?q:1}let U=i;function Jt(T,D){for(let z=0;z<T.length;z++){const V=T[z],k=n.getContext(V,D);if(k!==null)return k}return null}try{const T={alpha:!0,depth:r,stencil:o,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Yh}`),n.addEventListener("webglcontextlost",ie,!1),n.addEventListener("webglcontextrestored",b,!1),n.addEventListener("webglcontextcreationerror",se,!1),U===null){const D=["webgl2","webgl","experimental-webgl"];if(m.isWebGL1Renderer===!0&&D.shift(),U=Jt(D,T),U===null)throw Jt(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&U instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),U.getShaderPrecisionFormat===void 0&&(U.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Se,Pe,ge,pt,Oe,C,S,H,te,Q,ne,ve,le,he,Ae,Be,K,tt,We,be,xe,pe,De,Qe;function xt(){Se=new fC(U),Pe=new rC(U,Se,e),Se.init(Pe),pe=new ZR(U,Se,Pe),ge=new YR(U,Se,Pe),pt=new pC(U),Oe=new DR,C=new qR(U,Se,ge,Oe,Pe,pe,pt),S=new sC(m),H=new cC(m),te=new ST(U,Pe),De=new nC(U,Se,te,Pe),Q=new dC(U,te,pt,De),ne=new _C(U,Q,te,pt),We=new vC(U,Pe,C),Be=new oC(Oe),ve=new IR(m,S,H,Se,Pe,De,Be),le=new eb(m,Oe),he=new FR,Ae=new GR(Se,Pe),tt=new tC(m,S,H,ge,ne,h,l),K=new jR(m,ne,Pe),Qe=new tb(U,pt,Pe,ge),be=new iC(U,Se,pt,Pe),xe=new hC(U,Se,pt,Pe),pt.programs=ve.programs,m.capabilities=Pe,m.extensions=Se,m.properties=Oe,m.renderLists=he,m.shadowMap=K,m.state=ge,m.info=pt}xt();const ze=new JR(m,U);this.xr=ze,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const T=Se.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Se.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(T){T!==void 0&&(q=T,this.setSize(O,X,!1))},this.getSize=function(T){return T.set(O,X)},this.setSize=function(T,D,z=!0){if(ze.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=T,X=D,n.width=Math.floor(T*q),n.height=Math.floor(D*q),z===!0&&(n.style.width=T+"px",n.style.height=D+"px"),this.setViewport(0,0,T,D)},this.getDrawingBufferSize=function(T){return T.set(O*q,X*q).floor()},this.setDrawingBufferSize=function(T,D,z){O=T,X=D,q=z,n.width=Math.floor(T*z),n.height=Math.floor(D*z),this.setViewport(0,0,T,D)},this.getCurrentViewport=function(T){return T.copy(w)},this.getViewport=function(T){return T.copy(G)},this.setViewport=function(T,D,z,V){T.isVector4?G.set(T.x,T.y,T.z,T.w):G.set(T,D,z,V),ge.viewport(w.copy(G).multiplyScalar(q).floor())},this.getScissor=function(T){return T.copy(j)},this.setScissor=function(T,D,z,V){T.isVector4?j.set(T.x,T.y,T.z,T.w):j.set(T,D,z,V),ge.scissor(F.copy(j).multiplyScalar(q).floor())},this.getScissorTest=function(){return Z},this.setScissorTest=function(T){ge.setScissorTest(Z=T)},this.setOpaqueSort=function(T){L=T},this.setTransparentSort=function(T){I=T},this.getClearColor=function(T){return T.copy(tt.getClearColor())},this.setClearColor=function(){tt.setClearColor.apply(tt,arguments)},this.getClearAlpha=function(){return tt.getClearAlpha()},this.setClearAlpha=function(){tt.setClearAlpha.apply(tt,arguments)},this.clear=function(T=!0,D=!0,z=!0){let V=0;if(T){let k=!1;if(M!==null){const ce=M.texture.format;k=ce===R1||ce===C1||ce===A1}if(k){const ce=M.texture.type,_e=ce===mr||ce===ir||ce===qh||ce===Vr||ce===T1||ce===w1,Te=tt.getClearColor(),Re=tt.getClearAlpha(),ke=Te.r,Le=Te.g,Ie=Te.b;_e?(p[0]=ke,p[1]=Le,p[2]=Ie,p[3]=Re,U.clearBufferuiv(U.COLOR,0,p)):(_[0]=ke,_[1]=Le,_[2]=Ie,_[3]=Re,U.clearBufferiv(U.COLOR,0,_))}else V|=U.COLOR_BUFFER_BIT}D&&(V|=U.DEPTH_BUFFER_BIT),z&&(V|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",ie,!1),n.removeEventListener("webglcontextrestored",b,!1),n.removeEventListener("webglcontextcreationerror",se,!1),he.dispose(),Ae.dispose(),Oe.dispose(),S.dispose(),H.dispose(),ne.dispose(),De.dispose(),Qe.dispose(),ve.dispose(),ze.dispose(),ze.removeEventListener("sessionstart",en),ze.removeEventListener("sessionend",st),ue&&(ue.dispose(),ue=null),tn.stop()};function ie(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function b(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const T=pt.autoReset,D=K.enabled,z=K.autoUpdate,V=K.needsUpdate,k=K.type;xt(),pt.autoReset=T,K.enabled=D,K.autoUpdate=z,K.needsUpdate=V,K.type=k}function se(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function ae(T){const D=T.target;D.removeEventListener("dispose",ae),Ce(D)}function Ce(T){Ee(T),Oe.remove(T)}function Ee(T){const D=Oe.get(T).programs;D!==void 0&&(D.forEach(function(z){ve.releaseProgram(z)}),T.isShaderMaterial&&ve.releaseShaderCache(T))}this.renderBufferDirect=function(T,D,z,V,k,ce){D===null&&(D=ye);const _e=k.isMesh&&k.matrixWorld.determinant()<0,Te=Cx(T,D,z,V,k);ge.setMaterial(V,_e);let Re=z.index,ke=1;if(V.wireframe===!0){if(Re=Q.getWireframeAttribute(z),Re===void 0)return;ke=2}const Le=z.drawRange,Ie=z.attributes.position;let Et=Le.start*ke,_n=(Le.start+Le.count)*ke;ce!==null&&(Et=Math.max(Et,ce.start*ke),_n=Math.min(_n,(ce.start+ce.count)*ke)),Re!==null?(Et=Math.max(Et,0),_n=Math.min(_n,Re.count)):Ie!=null&&(Et=Math.max(Et,0),_n=Math.min(_n,Ie.count));const Nt=_n-Et;if(Nt<0||Nt===1/0)return;De.setup(k,V,Te,z,Re);let yi,mt=be;if(Re!==null&&(yi=te.get(Re),mt=xe,mt.setIndex(yi)),k.isMesh)V.wireframe===!0?(ge.setLineWidth(V.wireframeLinewidth*He()),mt.setMode(U.LINES)):mt.setMode(U.TRIANGLES);else if(k.isLine){let Ge=V.linewidth;Ge===void 0&&(Ge=1),ge.setLineWidth(Ge*He()),k.isLineSegments?mt.setMode(U.LINES):k.isLineLoop?mt.setMode(U.LINE_LOOP):mt.setMode(U.LINE_STRIP)}else k.isPoints?mt.setMode(U.POINTS):k.isSprite&&mt.setMode(U.TRIANGLES);if(k.isBatchedMesh)mt.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else if(k.isInstancedMesh)mt.renderInstances(Et,Nt,k.count);else if(z.isInstancedBufferGeometry){const Ge=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,dc=Math.min(z.instanceCount,Ge);mt.renderInstances(Et,Nt,dc)}else mt.render(Et,Nt)};function rt(T,D,z){T.transparent===!0&&T.side===Li&&T.forceSinglePass===!1?(T.side=vn,T.needsUpdate=!0,Na(T,D,z),T.side=xr,T.needsUpdate=!0,Na(T,D,z),T.side=Li):Na(T,D,z)}this.compile=function(T,D,z=null){z===null&&(z=T),g=Ae.get(z),g.init(),v.push(g),z.traverseVisible(function(k){k.isLight&&k.layers.test(D.layers)&&(g.pushLight(k),k.castShadow&&g.pushShadow(k))}),T!==z&&T.traverseVisible(function(k){k.isLight&&k.layers.test(D.layers)&&(g.pushLight(k),k.castShadow&&g.pushShadow(k))}),g.setupLights(m._useLegacyLights);const V=new Set;return T.traverse(function(k){const ce=k.material;if(ce)if(Array.isArray(ce))for(let _e=0;_e<ce.length;_e++){const Te=ce[_e];rt(Te,z,k),V.add(Te)}else rt(ce,z,k),V.add(ce)}),v.pop(),g=null,V},this.compileAsync=function(T,D,z=null){const V=this.compile(T,D,z);return new Promise(k=>{function ce(){if(V.forEach(function(_e){Oe.get(_e).currentProgram.isReady()&&V.delete(_e)}),V.size===0){k(T);return}setTimeout(ce,10)}Se.get("KHR_parallel_shader_compile")!==null?ce():setTimeout(ce,10)})};let ot=null;function Lt(T){ot&&ot(T)}function en(){tn.stop()}function st(){tn.start()}const tn=new W1;tn.setAnimationLoop(Lt),typeof self<"u"&&tn.setContext(self),this.setAnimationLoop=function(T){ot=T,ze.setAnimationLoop(T),T===null?tn.stop():tn.start()},ze.addEventListener("sessionstart",en),ze.addEventListener("sessionend",st),this.render=function(T,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),ze.enabled===!0&&ze.isPresenting===!0&&(ze.cameraAutoUpdate===!0&&ze.updateCamera(D),D=ze.getCamera()),T.isScene===!0&&T.onBeforeRender(m,T,D,M),g=Ae.get(T,v.length),g.init(),v.push(g),de.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),W.setFromProjectionMatrix(de),oe=this.localClippingEnabled,Y=Be.init(this.clippingPlanes,oe),x=he.get(T,f.length),x.init(),f.push(x),ai(T,D,0,m.sortObjects),x.finish(),m.sortObjects===!0&&x.sort(L,I),this.info.render.frame++,Y===!0&&Be.beginShadows();const z=g.state.shadowsArray;if(K.render(z,T,D),Y===!0&&Be.endShadows(),this.info.autoReset===!0&&this.info.reset(),tt.render(x,T),g.setupLights(m._useLegacyLights),D.isArrayCamera){const V=D.cameras;for(let k=0,ce=V.length;k<ce;k++){const _e=V[k];up(x,T,_e,_e.viewport)}}else up(x,T,D);M!==null&&(C.updateMultisampleRenderTarget(M),C.updateRenderTargetMipmap(M)),T.isScene===!0&&T.onAfterRender(m,T,D),De.resetDefaultState(),N=-1,E=null,v.pop(),v.length>0?g=v[v.length-1]:g=null,f.pop(),f.length>0?x=f[f.length-1]:x=null};function ai(T,D,z,V){if(T.visible===!1)return;if(T.layers.test(D.layers)){if(T.isGroup)z=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(D);else if(T.isLight)g.pushLight(T),T.castShadow&&g.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||W.intersectsSprite(T)){V&&Me.setFromMatrixPosition(T.matrixWorld).applyMatrix4(de);const _e=ne.update(T),Te=T.material;Te.visible&&x.push(T,_e,Te,z,Me.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||W.intersectsObject(T))){const _e=ne.update(T),Te=T.material;if(V&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Me.copy(T.boundingSphere.center)):(_e.boundingSphere===null&&_e.computeBoundingSphere(),Me.copy(_e.boundingSphere.center)),Me.applyMatrix4(T.matrixWorld).applyMatrix4(de)),Array.isArray(Te)){const Re=_e.groups;for(let ke=0,Le=Re.length;ke<Le;ke++){const Ie=Re[ke],Et=Te[Ie.materialIndex];Et&&Et.visible&&x.push(T,_e,Et,z,Me.z,Ie)}}else Te.visible&&x.push(T,_e,Te,z,Me.z,null)}}const ce=T.children;for(let _e=0,Te=ce.length;_e<Te;_e++)ai(ce[_e],D,z,V)}function up(T,D,z,V){const k=T.opaque,ce=T.transmissive,_e=T.transparent;g.setupLightsView(z),Y===!0&&Be.setGlobalState(m.clippingPlanes,z),ce.length>0&&Ax(k,ce,D,z),V&&ge.viewport(w.copy(V)),k.length>0&&La(k,D,z),ce.length>0&&La(ce,D,z),_e.length>0&&La(_e,D,z),ge.buffers.depth.setTest(!0),ge.buffers.depth.setMask(!0),ge.buffers.color.setMask(!0),ge.setPolygonOffset(!1)}function Ax(T,D,z,V){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;const ce=Pe.isWebGL2;ue===null&&(ue=new eo(1,1,{generateMipmaps:!0,type:Se.has("EXT_color_buffer_half_float")?ga:mr,minFilter:ma,samples:ce?4:0})),m.getDrawingBufferSize(we),ce?ue.setSize(we.x,we.y):ue.setSize(xu(we.x),xu(we.y));const _e=m.getRenderTarget();m.setRenderTarget(ue),m.getClearColor(ee),P=m.getClearAlpha(),P<1&&m.setClearColor(16777215,.5),m.clear();const Te=m.toneMapping;m.toneMapping=pr,La(T,z,V),C.updateMultisampleRenderTarget(ue),C.updateRenderTargetMipmap(ue);let Re=!1;for(let ke=0,Le=D.length;ke<Le;ke++){const Ie=D[ke],Et=Ie.object,_n=Ie.geometry,Nt=Ie.material,yi=Ie.group;if(Nt.side===Li&&Et.layers.test(V.layers)){const mt=Nt.side;Nt.side=vn,Nt.needsUpdate=!0,cp(Et,z,V,_n,Nt,yi),Nt.side=mt,Nt.needsUpdate=!0,Re=!0}}Re===!0&&(C.updateMultisampleRenderTarget(ue),C.updateRenderTargetMipmap(ue)),m.setRenderTarget(_e),m.setClearColor(ee,P),m.toneMapping=Te}function La(T,D,z){const V=D.isScene===!0?D.overrideMaterial:null;for(let k=0,ce=T.length;k<ce;k++){const _e=T[k],Te=_e.object,Re=_e.geometry,ke=V===null?_e.material:V,Le=_e.group;Te.layers.test(z.layers)&&cp(Te,D,z,Re,ke,Le)}}function cp(T,D,z,V,k,ce){T.onBeforeRender(m,D,z,V,k,ce),T.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),k.onBeforeRender(m,D,z,V,T,ce),k.transparent===!0&&k.side===Li&&k.forceSinglePass===!1?(k.side=vn,k.needsUpdate=!0,m.renderBufferDirect(z,D,V,k,T,ce),k.side=xr,k.needsUpdate=!0,m.renderBufferDirect(z,D,V,k,T,ce),k.side=Li):m.renderBufferDirect(z,D,V,k,T,ce),T.onAfterRender(m,D,z,V,k,ce)}function Na(T,D,z){D.isScene!==!0&&(D=ye);const V=Oe.get(T),k=g.state.lights,ce=g.state.shadowsArray,_e=k.state.version,Te=ve.getParameters(T,k.state,ce,D,z),Re=ve.getProgramCacheKey(Te);let ke=V.programs;V.environment=T.isMeshStandardMaterial?D.environment:null,V.fog=D.fog,V.envMap=(T.isMeshStandardMaterial?H:S).get(T.envMap||V.environment),ke===void 0&&(T.addEventListener("dispose",ae),ke=new Map,V.programs=ke);let Le=ke.get(Re);if(Le!==void 0){if(V.currentProgram===Le&&V.lightsStateVersion===_e)return dp(T,Te),Le}else Te.uniforms=ve.getUniforms(T),T.onBuild(z,Te,m),T.onBeforeCompile(Te,m),Le=ve.acquireProgram(Te,Re),ke.set(Re,Le),V.uniforms=Te.uniforms;const Ie=V.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ie.clippingPlanes=Be.uniform),dp(T,Te),V.needsLights=bx(T),V.lightsStateVersion=_e,V.needsLights&&(Ie.ambientLightColor.value=k.state.ambient,Ie.lightProbe.value=k.state.probe,Ie.directionalLights.value=k.state.directional,Ie.directionalLightShadows.value=k.state.directionalShadow,Ie.spotLights.value=k.state.spot,Ie.spotLightShadows.value=k.state.spotShadow,Ie.rectAreaLights.value=k.state.rectArea,Ie.ltc_1.value=k.state.rectAreaLTC1,Ie.ltc_2.value=k.state.rectAreaLTC2,Ie.pointLights.value=k.state.point,Ie.pointLightShadows.value=k.state.pointShadow,Ie.hemisphereLights.value=k.state.hemi,Ie.directionalShadowMap.value=k.state.directionalShadowMap,Ie.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Ie.spotShadowMap.value=k.state.spotShadowMap,Ie.spotLightMatrix.value=k.state.spotLightMatrix,Ie.spotLightMap.value=k.state.spotLightMap,Ie.pointShadowMap.value=k.state.pointShadowMap,Ie.pointShadowMatrix.value=k.state.pointShadowMatrix),V.currentProgram=Le,V.uniformsList=null,Le}function fp(T){if(T.uniformsList===null){const D=T.currentProgram.getUniforms();T.uniformsList=Ol.seqWithValue(D.seq,T.uniforms)}return T.uniformsList}function dp(T,D){const z=Oe.get(T);z.outputColorSpace=D.outputColorSpace,z.batching=D.batching,z.instancing=D.instancing,z.instancingColor=D.instancingColor,z.skinning=D.skinning,z.morphTargets=D.morphTargets,z.morphNormals=D.morphNormals,z.morphColors=D.morphColors,z.morphTargetsCount=D.morphTargetsCount,z.numClippingPlanes=D.numClippingPlanes,z.numIntersection=D.numClipIntersection,z.vertexAlphas=D.vertexAlphas,z.vertexTangents=D.vertexTangents,z.toneMapping=D.toneMapping}function Cx(T,D,z,V,k){D.isScene!==!0&&(D=ye),C.resetTextureUnits();const ce=D.fog,_e=V.isMeshStandardMaterial?D.environment:null,Te=M===null?m.outputColorSpace:M.isXRRenderTarget===!0?M.texture.colorSpace:Hi,Re=(V.isMeshStandardMaterial?H:S).get(V.envMap||_e),ke=V.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Le=!!z.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Ie=!!z.morphAttributes.position,Et=!!z.morphAttributes.normal,_n=!!z.morphAttributes.color;let Nt=pr;V.toneMapped&&(M===null||M.isXRRenderTarget===!0)&&(Nt=m.toneMapping);const yi=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,mt=yi!==void 0?yi.length:0,Ge=Oe.get(V),dc=g.state.lights;if(Y===!0&&(oe===!0||T!==E)){const Ln=T===E&&V.id===N;Be.setState(V,T,Ln)}let yt=!1;V.version===Ge.__version?(Ge.needsLights&&Ge.lightsStateVersion!==dc.state.version||Ge.outputColorSpace!==Te||k.isBatchedMesh&&Ge.batching===!1||!k.isBatchedMesh&&Ge.batching===!0||k.isInstancedMesh&&Ge.instancing===!1||!k.isInstancedMesh&&Ge.instancing===!0||k.isSkinnedMesh&&Ge.skinning===!1||!k.isSkinnedMesh&&Ge.skinning===!0||k.isInstancedMesh&&Ge.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Ge.instancingColor===!1&&k.instanceColor!==null||Ge.envMap!==Re||V.fog===!0&&Ge.fog!==ce||Ge.numClippingPlanes!==void 0&&(Ge.numClippingPlanes!==Be.numPlanes||Ge.numIntersection!==Be.numIntersection)||Ge.vertexAlphas!==ke||Ge.vertexTangents!==Le||Ge.morphTargets!==Ie||Ge.morphNormals!==Et||Ge.morphColors!==_n||Ge.toneMapping!==Nt||Pe.isWebGL2===!0&&Ge.morphTargetsCount!==mt)&&(yt=!0):(yt=!0,Ge.__version=V.version);let Tr=Ge.currentProgram;yt===!0&&(Tr=Na(V,D,k));let hp=!1,Ss=!1,hc=!1;const Wt=Tr.getUniforms(),wr=Ge.uniforms;if(ge.useProgram(Tr.program)&&(hp=!0,Ss=!0,hc=!0),V.id!==N&&(N=V.id,Ss=!0),hp||E!==T){Wt.setValue(U,"projectionMatrix",T.projectionMatrix),Wt.setValue(U,"viewMatrix",T.matrixWorldInverse);const Ln=Wt.map.cameraPosition;Ln!==void 0&&Ln.setValue(U,Me.setFromMatrixPosition(T.matrixWorld)),Pe.logarithmicDepthBuffer&&Wt.setValue(U,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&Wt.setValue(U,"isOrthographic",T.isOrthographicCamera===!0),E!==T&&(E=T,Ss=!0,hc=!0)}if(k.isSkinnedMesh){Wt.setOptional(U,k,"bindMatrix"),Wt.setOptional(U,k,"bindMatrixInverse");const Ln=k.skeleton;Ln&&(Pe.floatVertexTextures?(Ln.boneTexture===null&&Ln.computeBoneTexture(),Wt.setValue(U,"boneTexture",Ln.boneTexture,C)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}k.isBatchedMesh&&(Wt.setOptional(U,k,"batchingTexture"),Wt.setValue(U,"batchingTexture",k._matricesTexture,C));const pc=z.morphAttributes;if((pc.position!==void 0||pc.normal!==void 0||pc.color!==void 0&&Pe.isWebGL2===!0)&&We.update(k,z,Tr),(Ss||Ge.receiveShadow!==k.receiveShadow)&&(Ge.receiveShadow=k.receiveShadow,Wt.setValue(U,"receiveShadow",k.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(wr.envMap.value=Re,wr.flipEnvMap.value=Re.isCubeTexture&&Re.isRenderTargetTexture===!1?-1:1),Ss&&(Wt.setValue(U,"toneMappingExposure",m.toneMappingExposure),Ge.needsLights&&Rx(wr,hc),ce&&V.fog===!0&&le.refreshFogUniforms(wr,ce),le.refreshMaterialUniforms(wr,V,q,X,ue),Ol.upload(U,fp(Ge),wr,C)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Ol.upload(U,fp(Ge),wr,C),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&Wt.setValue(U,"center",k.center),Wt.setValue(U,"modelViewMatrix",k.modelViewMatrix),Wt.setValue(U,"normalMatrix",k.normalMatrix),Wt.setValue(U,"modelMatrix",k.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const Ln=V.uniformsGroups;for(let mc=0,Px=Ln.length;mc<Px;mc++)if(Pe.isWebGL2){const pp=Ln[mc];Qe.update(pp,Tr),Qe.bind(pp,Tr)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Tr}function Rx(T,D){T.ambientLightColor.needsUpdate=D,T.lightProbe.needsUpdate=D,T.directionalLights.needsUpdate=D,T.directionalLightShadows.needsUpdate=D,T.pointLights.needsUpdate=D,T.pointLightShadows.needsUpdate=D,T.spotLights.needsUpdate=D,T.spotLightShadows.needsUpdate=D,T.rectAreaLights.needsUpdate=D,T.hemisphereLights.needsUpdate=D}function bx(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(T,D,z){Oe.get(T.texture).__webglTexture=D,Oe.get(T.depthTexture).__webglTexture=z;const V=Oe.get(T);V.__hasExternalTextures=!0,V.__hasExternalTextures&&(V.__autoAllocateDepthBuffer=z===void 0,V.__autoAllocateDepthBuffer||Se.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,D){const z=Oe.get(T);z.__webglFramebuffer=D,z.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(T,D=0,z=0){M=T,R=D,A=z;let V=!0,k=null,ce=!1,_e=!1;if(T){const Re=Oe.get(T);Re.__useDefaultFramebuffer!==void 0?(ge.bindFramebuffer(U.FRAMEBUFFER,null),V=!1):Re.__webglFramebuffer===void 0?C.setupRenderTarget(T):Re.__hasExternalTextures&&C.rebindTextures(T,Oe.get(T.texture).__webglTexture,Oe.get(T.depthTexture).__webglTexture);const ke=T.texture;(ke.isData3DTexture||ke.isDataArrayTexture||ke.isCompressedArrayTexture)&&(_e=!0);const Le=Oe.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Le[D])?k=Le[D][z]:k=Le[D],ce=!0):Pe.isWebGL2&&T.samples>0&&C.useMultisampledRTT(T)===!1?k=Oe.get(T).__webglMultisampledFramebuffer:Array.isArray(Le)?k=Le[z]:k=Le,w.copy(T.viewport),F.copy(T.scissor),$=T.scissorTest}else w.copy(G).multiplyScalar(q).floor(),F.copy(j).multiplyScalar(q).floor(),$=Z;if(ge.bindFramebuffer(U.FRAMEBUFFER,k)&&Pe.drawBuffers&&V&&ge.drawBuffers(T,k),ge.viewport(w),ge.scissor(F),ge.setScissorTest($),ce){const Re=Oe.get(T.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+D,Re.__webglTexture,z)}else if(_e){const Re=Oe.get(T.texture),ke=D||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,Re.__webglTexture,z||0,ke)}N=-1},this.readRenderTargetPixels=function(T,D,z,V,k,ce,_e){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=Oe.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&_e!==void 0&&(Te=Te[_e]),Te){ge.bindFramebuffer(U.FRAMEBUFFER,Te);try{const Re=T.texture,ke=Re.format,Le=Re.type;if(ke!==ei&&pe.convert(ke)!==U.getParameter(U.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ie=Le===ga&&(Se.has("EXT_color_buffer_half_float")||Pe.isWebGL2&&Se.has("EXT_color_buffer_float"));if(Le!==mr&&pe.convert(Le)!==U.getParameter(U.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Le===rr&&(Pe.isWebGL2||Se.has("OES_texture_float")||Se.has("WEBGL_color_buffer_float")))&&!Ie){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=T.width-V&&z>=0&&z<=T.height-k&&U.readPixels(D,z,V,k,pe.convert(ke),pe.convert(Le),ce)}finally{const Re=M!==null?Oe.get(M).__webglFramebuffer:null;ge.bindFramebuffer(U.FRAMEBUFFER,Re)}}},this.copyFramebufferToTexture=function(T,D,z=0){const V=Math.pow(2,-z),k=Math.floor(D.image.width*V),ce=Math.floor(D.image.height*V);C.setTexture2D(D,0),U.copyTexSubImage2D(U.TEXTURE_2D,z,0,0,T.x,T.y,k,ce),ge.unbindTexture()},this.copyTextureToTexture=function(T,D,z,V=0){const k=D.image.width,ce=D.image.height,_e=pe.convert(z.format),Te=pe.convert(z.type);C.setTexture2D(z,0),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,z.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,z.unpackAlignment),D.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,V,T.x,T.y,k,ce,_e,Te,D.image.data):D.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,V,T.x,T.y,D.mipmaps[0].width,D.mipmaps[0].height,_e,D.mipmaps[0].data):U.texSubImage2D(U.TEXTURE_2D,V,T.x,T.y,_e,Te,D.image),V===0&&z.generateMipmaps&&U.generateMipmap(U.TEXTURE_2D),ge.unbindTexture()},this.copyTextureToTexture3D=function(T,D,z,V,k=0){if(m.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ce=T.max.x-T.min.x+1,_e=T.max.y-T.min.y+1,Te=T.max.z-T.min.z+1,Re=pe.convert(V.format),ke=pe.convert(V.type);let Le;if(V.isData3DTexture)C.setTexture3D(V,0),Le=U.TEXTURE_3D;else if(V.isDataArrayTexture||V.isCompressedArrayTexture)C.setTexture2DArray(V,0),Le=U.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,V.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,V.unpackAlignment);const Ie=U.getParameter(U.UNPACK_ROW_LENGTH),Et=U.getParameter(U.UNPACK_IMAGE_HEIGHT),_n=U.getParameter(U.UNPACK_SKIP_PIXELS),Nt=U.getParameter(U.UNPACK_SKIP_ROWS),yi=U.getParameter(U.UNPACK_SKIP_IMAGES),mt=z.isCompressedTexture?z.mipmaps[k]:z.image;U.pixelStorei(U.UNPACK_ROW_LENGTH,mt.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,mt.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,T.min.x),U.pixelStorei(U.UNPACK_SKIP_ROWS,T.min.y),U.pixelStorei(U.UNPACK_SKIP_IMAGES,T.min.z),z.isDataTexture||z.isData3DTexture?U.texSubImage3D(Le,k,D.x,D.y,D.z,ce,_e,Te,Re,ke,mt.data):z.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),U.compressedTexSubImage3D(Le,k,D.x,D.y,D.z,ce,_e,Te,Re,mt.data)):U.texSubImage3D(Le,k,D.x,D.y,D.z,ce,_e,Te,Re,ke,mt),U.pixelStorei(U.UNPACK_ROW_LENGTH,Ie),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Et),U.pixelStorei(U.UNPACK_SKIP_PIXELS,_n),U.pixelStorei(U.UNPACK_SKIP_ROWS,Nt),U.pixelStorei(U.UNPACK_SKIP_IMAGES,yi),k===0&&V.generateMipmaps&&U.generateMipmap(Le),ge.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?C.setTextureCube(T,0):T.isData3DTexture?C.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?C.setTexture2DArray(T,0):C.setTexture2D(T,0),ge.unbindTexture()},this.resetState=function(){R=0,A=0,M=null,ge.reset(),De.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Di}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===Zh?"display-p3":"srgb",n.unpackColorSpace=nt.workingColorSpace===tc?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===kt?Xr:P1}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Xr?kt:Hi}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class nb extends K1{}nb.prototype.isWebGL1Renderer=!0;class ib extends An{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}}class oc extends Gi{constructor(e=1,n=1,i=1,r=32,o=1,s=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:o,openEnded:s,thetaStart:a,thetaLength:l};const u=this;r=Math.floor(r),o=Math.floor(o);const c=[],d=[],h=[],p=[];let _=0;const x=[],g=i/2;let f=0;v(),s===!1&&(e>0&&m(!0),n>0&&m(!1)),this.setIndex(c),this.setAttribute("position",new _i(d,3)),this.setAttribute("normal",new _i(h,3)),this.setAttribute("uv",new _i(p,2));function v(){const y=new B,R=new B;let A=0;const M=(n-e)/i;for(let N=0;N<=o;N++){const E=[],w=N/o,F=w*(n-e)+e;for(let $=0;$<=r;$++){const ee=$/r,P=ee*l+a,O=Math.sin(P),X=Math.cos(P);R.x=F*O,R.y=-w*i+g,R.z=F*X,d.push(R.x,R.y,R.z),y.set(O,M,X).normalize(),h.push(y.x,y.y,y.z),p.push(ee,1-w),E.push(_++)}x.push(E)}for(let N=0;N<r;N++)for(let E=0;E<o;E++){const w=x[E][N],F=x[E+1][N],$=x[E+1][N+1],ee=x[E][N+1];c.push(w,F,ee),c.push(F,$,ee),A+=6}u.addGroup(f,A,0),f+=A}function m(y){const R=_,A=new Ze,M=new B;let N=0;const E=y===!0?e:n,w=y===!0?1:-1;for(let $=1;$<=r;$++)d.push(0,g*w,0),h.push(0,w,0),p.push(.5,.5),_++;const F=_;for(let $=0;$<=r;$++){const P=$/r*l+a,O=Math.cos(P),X=Math.sin(P);M.x=E*X,M.y=g*w,M.z=E*O,d.push(M.x,M.y,M.z),h.push(0,w,0),A.x=O*.5+.5,A.y=X*.5*w+.5,p.push(A.x,A.y),_++}for(let $=0;$<r;$++){const ee=R+$,P=F+$;y===!0?c.push(P,P+1,ee):c.push(P+1,P,ee),N+=3}u.addGroup(f,N,y===!0?1:2),f+=N}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new oc(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class rb{constructor(e,n,i=0,r=1/0){this.ray=new F1(e,n),this.near=i,this.far=r,this.camera=null,this.layers=new Jh,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}intersectObject(e,n=!0,i=[]){return kd(e,this,i,n),i.sort(a0),i}intersectObjects(e,n=!0,i=[]){for(let r=0,o=e.length;r<o;r++)kd(e[r],this,i,n);return i.sort(a0),i}}function a0(t,e){return t.distance-e.distance}function kd(t,e,n,i){if(t.layers.test(e.layers)&&t.raycast(e,n),i===!0){const r=t.children;for(let o=0,s=r.length;o<s;o++)kd(r[o],e,n,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Yh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Yh);var Pi=(t=>(t[t.simple=0]="simple",t[t.dynamic=1]="dynamic",t))(Pi||{});const ob=()=>{const t={animations:[]},e=o=>{switch(o.type){case Pi.simple:{if(typeof o.callback!="function"||typeof o.ticksDuration!="number"||o.ticksDuration<=0)return;break}case Pi.dynamic:{if(typeof o.callback!="function"||typeof o.isEndedGetter!="function"||typeof o.isPossibleGetter!="function")return;break}default:{console.warn(`Cannot add animation ${JSON.stringify(o)} because animation type is incorrect.`);return}}t.animations.push(o)},n=o=>{t.animations=t.animations.filter(s=>s.id!==o)},i=()=>{t.animations=t.animations.filter(o=>{switch(o.type){case Pi.simple:return o.tick<o.ticksDuration;case Pi.dynamic:return!o.isEndedGetter()}})};return{animate:()=>{for(const o of t.animations)switch(o.type){case Pi.simple:{o.tick<o.ticksDuration&&(o.callback({tick:o.tick,ticksDuration:o.ticksDuration}),o.tick++);break}case Pi.dynamic:{o.isPossibleGetter()&&o.callback();break}}i()},addAnimation:e,clearAnimation:n,clearAllEndedAnimations:i}},sb=({maxSize:t})=>new Array(t.x).fill(!1).map(()=>new Array(t.y).fill(!1).map(()=>!1)),ab=t=>{const{x:e,y:n}=t;return[e-.5,n-.5,0,e+.5,n-.5,0,e+.5,n+.5,0,e+.5,n+.5,0,e-.5,n+.5,0,e-.5,n-.5,0]},lb=({board:t})=>{const e=t.map((s,a)=>s.map((l,u)=>l&&ab({x:a,y:u}))),n=[];for(const s of e)for(const a of s)a&&n.push(...a);const i=new Float32Array(n),r=new Gi;r.setAttribute("position",new ri(i,3));const o=new ba({color:"gray"});return new ti(r,o)},ub=(t,{x:e,y:n})=>{var r,o,s,a,l,u,c,d;const i=[];for(const h of t.vacantPositions)h.x===e&&h.y===n||i.push(h);((o=(r=t.board)==null?void 0:r[e-1])==null?void 0:o[n])===!1&&!i.find(h=>h.x===e-1&&h.y===n)&&i.push({x:e-1,y:n}),((a=(s=t.board)==null?void 0:s[e])==null?void 0:a[n-1])===!1&&!i.find(h=>h.x===e&&h.y===n-1)&&i.push({x:e,y:n-1}),((u=(l=t.board)==null?void 0:l[e+1])==null?void 0:u[n])===!1&&!i.find(h=>h.x===e+1&&h.y===n)&&i.push({x:e+1,y:n}),((d=(c=t.board)==null?void 0:c[e])==null?void 0:d[n+1])===!1&&!i.find(h=>h.x===e&&h.y===n+1)&&i.push({x:e,y:n+1}),t.vacantPositions=i},cb=(t,{x:e,y:n})=>{t.board[e][n]=!0,ub(t,{x:e,y:n})},zo=(t,e)=>{t.actualPosition=e,cb(t,e)},fb=t=>{const{vacantPositions:e}=t,n=e.length>0&&e[Math.abs(Math.round(Math.random()*e.length-1))];n&&zo(t,n)},db=t=>{const e=Math.round(Math.random()*100),{board:n,maxX:i,maxY:r,actualPosition:{x:o,y:s}}=t;if(e<=25&&s+1<r&&!n[o][s+1]){zo(t,{x:o,y:s+1});return}if(e<=50&&o+1<i&&!n[o+1][s]){zo(t,{x:o+1,y:s});return}if(e<=75&&s-1>=0&&!n[o][s-1]){zo(t,{x:o,y:s-1});return}if(o-1>=0&&!n[o-1][s]){zo(t,{x:o-1,y:s});return}fb(t)},hb=({baseBoard:t,walkable:e})=>{const n=[];for(const o of t){const s=[];for(const a of o)s.push(a);n.push(s)}const i={board:n,maxX:t.length,maxY:t[0].length,actualPosition:{x:0,y:0},vacantPositions:[]};zo(i,{x:Math.round(i.maxX/2),y:Math.round(i.maxY/2)});const r=Math.round(t.length*t[0].length*(e>=0&&e<=1?e:.5));for(let o=1;o<r;o++)db(i);return i.board},pb={x:100,y:100},mb=({ResourceTracker:t})=>{const e={board:[],boardModel:null};return{generateBoard:()=>{e.boardModel&&t.disposeTrackedResource("board");const i=sb({maxSize:pb}),r=hb({baseBoard:i,walkable:.1});e.board=r;const o=lb({board:r});o.matrixAutoUpdate=!1,o.updateMatrix(),e.boardModel=o,t.trackResource({id:"board",resource:o})}}},Q1=({path:t,speedGetter:e,positionUpdate:n})=>{const i={pathCopy:[],distanceTraveled:0,pathDistances:[]};for(let l=0;l<t.length&&(i.pathCopy.push(t[l].clone()),l!==t.length-1);l++)i.pathDistances.push(t[l].manhattanDistanceTo(t[l+1]));const r=()=>{const l=e(),u=i.distanceTraveled+l;for(let c=0;c<i.pathDistances.length;c++){const d=i.pathDistances.slice(0,c).reduce((p,_)=>p+=_,0),h=d+i.pathDistances[c];if(u>=d&&u<h)return{distanceIndex:c,minDistanceForPathPart:d,currentSpeed:l}}},o=({distanceIndex:l,minDistanceForPathPart:u,currentSpeed:c})=>{const d=i.pathDistances[l];return(i.distanceTraveled-u+c)/d},s=({distanceIndex:l,lerpAlpha:u})=>i.pathCopy[l].clone().lerp(i.pathCopy[l+1],u);return()=>{const l=r();if(!l){n(i.pathCopy[i.pathCopy.length-1]);return}const u=o(l),c=s({...l,lerpAlpha:u});i.distanceTraveled+=l.currentSpeed,n(c)}};var Su=(t=>(t[t.idle=0]="idle",t[t.moving=1]="moving",t[t.chasing=2]="chasing",t))(Su||{}),Bl=(t=>(t[t.soldier=0]="soldier",t[t.archer=1]="archer",t[t.tank=2]="tank",t))(Bl||{});const gb=({enemyStats:t,ResourceTracker:e,PathfindingManager:n,AnimationManager:i})=>{const r={...t,hp:t.maxHp,enemyMesh:null},o=u=>{var c;r.enemyMesh&&(r.enemyMesh.position.copy(u).setZ(.25),(c=r.enemyMesh)==null||c.updateMatrix())},s=()=>{const u=new oc(.2,.2,.25,8),c=new ba({color:"yellow",depthTest:!1,depthWrite:!1}),d=new ti(u,c);d.matrixAutoUpdate=!1,d.renderOrder=3,d.rotateX(Qi.degToRad(90)),r.enemyMesh=d,e.trackResource({id:`enemy_${r.id}`,resource:d});const{node:h}=n.getRandomNode();if(!h)return;const p=new B(h.center.x,h.center.y);o(p)},a=u=>{r.behaviour=u};return{state:r,initEnemy:s,updateLastPlayerKnownPosition:u=>{if(!u||!r.enemyMesh){r.lastPlayerKnownPosition=null,i.clearAnimation(`enemy_move_${r.id}`),a(Su.idle);return}r.lastPlayerKnownPosition=u.clone(),a(Su.chasing);const{path:c}=n.findPath({startPosition:r.enemyMesh.position,destinationPosition:r.lastPlayerKnownPosition}),d=()=>!0,h=()=>r.enemyMesh&&r.lastPlayerKnownPosition&&r.range?r.enemyMesh.position.distanceTo(r.lastPlayerKnownPosition)<=r.range:!0;i.clearAnimation(`enemy_move_${r.id}`),i.addAnimation({id:`enemy_move_${r.id}`,type:Pi.dynamic,callback:Q1({path:c,speedGetter:()=>r.movementSpeed,positionUpdate:o}),isPossibleGetter:d,isEndedGetter:h})}}},vb=({id:t})=>{const e={id:t,behaviour:Su.idle,lastPlayerKnownPosition:null},n=Math.round(Math.random()*100);return n<60?{type:Bl.soldier,...e,maxHp:10,movementSpeed:.02,range:.5}:n<80?{type:Bl.archer,...e,maxHp:5,movementSpeed:.025,range:2}:{type:Bl.tank,...e,maxHp:20,movementSpeed:.015,range:.7}},_b=({ResourceTracker:t,PathfindingManager:e,AnimationManager:n})=>{const i={maxEnemies:5,enemies:[]},r=mb({ResourceTracker:t});return{generateBoard:()=>{r.generateBoard()},populateWithEnemies:()=>{for(let l=0;l<i.maxEnemies;l++){const u=vb({id:String(l)}),c=gb({enemyStats:u,ResourceTracker:t,PathfindingManager:e,AnimationManager:n});c.initEnemy(),i.enemies.push(c)}},createEnemiesPuppeteer:()=>{const l={lastPlayerPosition:null,playerMesh:null};return{init:()=>{const d=t.getTrackedResource("player");d&&(l.playerMesh=d)},tick:()=>{var p;if(!l.playerMesh||l.lastPlayerPosition&&l.lastPlayerPosition.equals(l.playerMesh.position))return;const d=[],h=[];l.lastPlayerPosition=l.playerMesh.position.clone();for(const _ of i.enemies){if(!_.state.enemyMesh||_.state.lastPlayerKnownPosition&&_.state.lastPlayerKnownPosition.distanceTo(l.lastPlayerPosition)<=_.state.range)continue;const x=l.playerMesh.position.distanceTo((p=_.state.enemyMesh)==null?void 0:p.position);if(x<=_.state.range*5){d.push(_);continue}x>=_.state.range*10&&h.push(_)}for(const _ of d)_.updateLastPlayerKnownPosition(l.lastPlayerPosition);for(const _ of h)_.updateLastPlayerKnownPosition()}}}}},xb=({Scene:t,ResourceTracker:e,polygons:n})=>{const i=[];for(let r=0;r<n.length;r+=3){const o=new Ze;o.addVectors(n[r],n[r+1]).add(n[r+2]).multiplyScalar(1/3).multiplyScalar(100).round().divideScalar(100);const s=[n[r],n[r+1],n[r+2]];i.push({polygons:s,center:o})}return{centroids:i}},yb=({centroids:t})=>{const e=[];for(const n of t){const{center:i,polygons:r}=n,o=[];for(const a of t){const{center:l,polygons:u}=a;if(l.x===i.x&&l.y===n.center.y)continue;const c=[];for(const d of r)for(const h of u)c.length>=2||h.x===d.x&&h.y===d.y&&c.push(u);c.length>=2&&o.push(`${l.x}#${l.y}`)}const s={id:`${n.center.x}#${n.center.y}`,...n,neighborNodesIds:o};e.push(s)}return{graph:e}},J1=(t,e=[])=>{for(const n of e)if(t.id===n.id)return t;return t.previousNode?J1(t.previousNode,e):!1},Sb=({startPosition:t,startNodeId:e,destinationPosition:n,destinationNodeId:i,graph:r})=>{const o=r.find(({id:f})=>f===e),s=r.find(({id:f})=>f===i);if(!o||!s)return{path:[]};const a={...o,distance:s.center.distanceTo(o.center),neighborNodes:[],stepped:!0},l={...s,distance:0,neighborNodes:[]},u=[a,l];for(const f of r)f.id!==e&&f.id!==i&&u.push({...f,distance:l.center.distanceTo(f.center),neighborNodes:[]});for(const f of u)for(const v of f.neighborNodesIds){const m=u.find(({id:y})=>y===v);m&&f.neighborNodes.push(m)}const c=({distance:f},{distance:v})=>f-v,d=f=>{if(f.distance===0)return f;if(f.neighborNodes.filter(({stepped:v})=>!v).length===0&&f.previousNode)return d(f.previousNode);f.neighborNodes.sort(c);for(const v of f.neighborNodes)if(!v.stepped)return v.stepped=!0,v.previousNode=f,d(v)},h=d(a);if(!h)return{path:[]};const p=(f,v=[])=>f.previousNode?(v.push(f),p(f.previousNode,v)):v,_=p(h);for(let f=0;f<_.length;f++){const v=J1(_[f],_[f].neighborNodes.filter(({id:m})=>{var y;return m!==((y=_[f].previousNode)==null?void 0:y.id)}));v&&(_[f].previousNode=v,f=_.findIndex(m=>m.id===v.id))}const x=p(h),g=[];for(const f of x)g.push(new B(f.center.x,f.center.y));return g[0]=n,g[g.length-1]=t.clone().setZ(0),g.reverse(),{path:g}},Eb=({position:t,polygons:e})=>{const n=e[0],i=e[1],r=e[2],o=(i.y-r.y)*(n.x-r.x)+(r.x-i.x)*(n.y-r.y),s=((i.y-r.y)*(t.x-r.x)+(r.x-i.x)*(t.y-r.y))/o,a=((r.y-n.y)*(t.x-r.x)+(n.x-r.x)*(t.y-r.y))/o,l=1-s-a;return 0<=s&&s<=1&&0<=a&&a<=1&&0<=l&&l<=1},Mb=({graph:t})=>({findNodeByPosition:({position:n})=>{const i=new Ze(n.x,n.y);for(const r of t){const{id:o,polygons:s}=r;if(Eb({position:i,polygons:s}))return{nodeId:o}}return{nodeId:null}}}),Tb=({graph:t})=>({getNodeById:({id:i})=>{for(const r of t)if(r.id===i)return{node:r};return{node:null}},getRandomNode:()=>{if(!t||t.length===0)return{node:null};const i=Math.round(Math.abs(Math.random()*t.length-1));return{node:t[i]}}}),wb=({Scene:t,ResourceTracker:e,board:n})=>{const i=n.geometry.getAttribute("position").array,r=[];for(let o=0;o<i.length;o+=3)r.push(new Ze(i[o],i[o+1]));return{polygons:r}},Ab=({Scene:t,ResourceTracker:e})=>{const n={graph:null,NodeChecker:null,NodeGetter:null};return{init:()=>{const s=e.getTrackedResource("board");if(!s)return;const{polygons:a}=wb({Scene:t,ResourceTracker:e,board:s}),{centroids:l}=xb({Scene:t,ResourceTracker:e,polygons:a}),{graph:u}=yb({centroids:l});n.graph=u,n.NodeChecker=Mb({graph:u}),n.NodeGetter=Tb({graph:u})},findPath:({startPosition:s,destinationPosition:a})=>{if(!n.NodeChecker)return{path:[]};const{nodeId:l}=n.NodeChecker.findNodeByPosition({position:s}),{nodeId:u}=n.NodeChecker.findNodeByPosition({position:a});if(!l||!u||!n.graph)return console.warn("Something went wrong and pathfinding is not possible!",l,u,n.graph),{path:[s,a]};const{path:c}=Sb({startPosition:s,startNodeId:l,destinationPosition:a,destinationNodeId:u,graph:n.graph});return{path:c}},getRandomNode:()=>{var s;return(s=n.NodeGetter)!=null&&s.getRandomNode?n.NodeGetter.getRandomNode():{node:null}}}},Cb=({Camera:t,playerManagerState:e})=>{const n={Camera:t},i=o=>{var c;const s=(c=e==null?void 0:e.player)==null?void 0:c.position;if(!s)return;const a=10,l=15,u=new B(s.x+a*Math.cos(Qi.degToRad(l))*Math.sin(Qi.degToRad(0)),s.y-a*Math.sin(Qi.degToRad(l)),s.z+a*Math.cos(Qi.degToRad(l))*Math.cos(Qi.degToRad(0)));o.Camera.position.copy(u),o.Camera.rotation.x=Qi.degToRad(l)};return{init:()=>{i(n)},lookCameraAtPlayer:()=>i(n)}},Rb=(t,{eventType:e,callback:n})=>{const i=r=>{r.preventDefault(),n(r)};t.ref.addEventListener(e,i),t.registeredKeybindings={[e]:i}},bb=(t,{eventType:e,callback:n})=>{t.ref.removeEventListener(e,n)},Pb=t=>{for(const e in t.keybindings)Rb(t,{eventType:e,callback:t.keybindings[e]})},Lb=t=>{for(const e in t.registeredKeybindings)bb(t,{eventType:e,callback:t.keybindings[e]})},Nb=({ref:t,keybindings:e})=>{const n={ref:t,keybindings:e,registeredKeybindings:{}};return{init:()=>{Pb(n)},disposeControls:()=>Lb(n)}},Ib=({ref:t,Camera:e,ResourceTracker:n,PathfindingManager:i,AnimationManager:r})=>{const o={player:null,pointer:new Ze,raycaster:new rb,pathMesh:null},s=Cb({Camera:e,playerManagerState:o}),a=_=>{o.pointer.x=_.clientX/window.innerWidth*2-1,o.pointer.y=-(_.clientY/window.innerHeight)*2+1},l=_=>{var x,g;(x=o.player)==null||x.position.copy(_).setZ(.25),(g=o.player)==null||g.updateMatrix(),s.lookCameraAtPlayer()},u=()=>{const _=new oc(.25,.25,.5,16),x=new ba({color:"green",depthTest:!1,depthWrite:!1}),g=new ti(_,x);g.matrixAutoUpdate=!1,g.renderOrder=3,g.rotateX(Qi.degToRad(90)),o.player=g,n.trackResource({id:"player",resource:g});const{node:f}=i.getRandomNode();if(!f)return;const v=new B(f.center.x,f.center.y);l(v)},c=()=>{o.raycaster.setFromCamera(o.pointer,e);const _=n.getTrackedResource("board");if(!_)return;const x=o.raycaster.intersectObjects([_],!1),g=x.length>0&&x[0].point;if(!g||!o.player)return;const f=o.player.position.clone(),v=g.clone(),{path:m}=i.findPath({startPosition:f,destinationPosition:v});if(r.clearAnimation("player_move"),m.length===0)return;const y=()=>!0,R=()=>o.player?o.player.position.clone().setZ(0).equals(m[m.length-1]):!0;r.addAnimation({id:"player_move",type:Pi.dynamic,callback:Q1({path:m,speedGetter:()=>.025,positionUpdate:l}),isPossibleGetter:y,isEndedGetter:R})},d=Nb({ref:t,keybindings:{click:c,contextmenu:c,touchdown:c,pointermove:_=>a(_)}});return{init:()=>{s.init(),i.init(),u(),d.init()},dispose:()=>{d.disposeControls()}}},Db=t=>{const e={Scene:t,resources:[]},n=a=>{e.resources=[...e.resources,a],t.add(a.resource)},i=a=>{var l;return(l=e.resources.find(u=>u.id===a))==null?void 0:l.resource},r=a=>{var c;const l=(c=e.resources.find(d=>d.id===a))==null?void 0:c.resource;if(!l||(t.remove(l),l.geometry.dispose(),!l.material))return;const u=()=>{const d=e.resources.findIndex(h=>h.id===a);e.resources=[...e.resources.slice(0,d),...e.resources.slice(d+1)]};if(Array.isArray(l.material))for(const d of l.material)d.dispose();else l.material.dispose();u()};return{trackResource:n,getTrackedResource:i,disposeTrackedResource:r,disposeMultipleTrackedResources:a=>{const l=e.resources.filter(u=>u.id.includes(a)).map(({id:u})=>u);for(const u of l)r(u)},disposeAllResources:()=>{const a=e.resources.map(({id:l})=>l);for(const l of a)r(l)}}},Ub=t=>{const e=new ib,n=new Fn(75,window.innerWidth/window.innerHeight,.1,1e3),i=new K1({antialias:!0});i.setSize(window.innerWidth-18,window.innerHeight),i.setPixelRatio(window.devicePixelRatio),t.current&&t.current.appendChild(i.domElement);const r=Db(e),o=Ab({Scene:e,ResourceTracker:r}),s=ob(),a=Ib({ref:i.domElement,Camera:n,ResourceTracker:r,PathfindingManager:o,AnimationManager:s}),l=_b({ResourceTracker:r,PathfindingManager:o,AnimationManager:s}),u={isPaused:!1,enemiesPuppeteer:l.createEnemiesPuppeteer()},c=()=>{l.generateBoard(),o.init(),l.populateWithEnemies(),a.init(),u.enemiesPuppeteer.init()},d=()=>{u.isPaused||(u.enemiesPuppeteer.tick(),s.animate(),i.render(e,n),requestAnimationFrame(d))},h=()=>{u.isPaused=!0},p=()=>{h(),a.dispose(),r.disposeAllResources(),i.domElement.remove(),i.dispose()};return c(),d(),{animate:d,pause:h,dispose:p}},Fb=()=>{const t=Ye.useRef(null);return Ye.useEffect(()=>{if(t.current){const e=Ub(t);return()=>{e.dispose()}}},[]),Ne.jsx("div",{ref:t})},Ob=()=>Ne.jsx(Fb,{}),Bb=`<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M6.4 19L5 17.6L10.6 12L5 6.4L6.4 5L12 10.6L17.6 5L19 6.4L13.4 12L19 17.6L17.6 19L12 13.4L6.4 19Z" />
</svg>
`,kb=`<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M10 16H14C14.2833 16 14.5208 15.9042 14.7125 15.7125C14.9042 15.5208 15 15.2833 15 15V13H13V14H11V10H13V11H15V9C15 8.71667 14.9042 8.47917 14.7125 8.2875C14.5208 8.09583 14.2833 8 14 8H10C9.71667 8 9.47917 8.09583 9.2875 8.2875C9.09583 8.47917 9 8.71667 9 9V15C9 15.2833 9.09583 15.5208 9.2875 15.7125C9.47917 15.9042 9.71667 16 10 16ZM12 22C10.6167 22 9.31667 21.7375 8.1 21.2125C6.88333 20.6875 5.825 19.975 4.925 19.075C4.025 18.175 3.3125 17.1167 2.7875 15.9C2.2625 14.6833 2 13.3833 2 12C2 10.6167 2.2625 9.31667 2.7875 8.1C3.3125 6.88333 4.025 5.825 4.925 4.925C5.825 4.025 6.88333 3.3125 8.1 2.7875C9.31667 2.2625 10.6167 2 12 2C13.3833 2 14.6833 2.2625 15.9 2.7875C17.1167 3.3125 18.175 4.025 19.075 4.925C19.975 5.825 20.6875 6.88333 21.2125 8.1C21.7375 9.31667 22 10.6167 22 12C22 13.3833 21.7375 14.6833 21.2125 15.9C20.6875 17.1167 19.975 18.175 19.075 19.075C18.175 19.975 17.1167 20.6875 15.9 21.2125C14.6833 21.7375 13.3833 22 12 22ZM12 20C14.2333 20 16.125 19.225 17.675 17.675C19.225 16.125 20 14.2333 20 12C20 9.76667 19.225 7.875 17.675 6.325C16.125 4.775 14.2333 4 12 4C9.76667 4 7.875 4.775 6.325 6.325C4.775 7.875 4 9.76667 4 12C4 14.2333 4.775 16.125 6.325 17.675C7.875 19.225 9.76667 20 12 20Z" />
</svg>
`,Hb=`<svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="5.5" cy="5.63672" r="4" fill="#FFE0B2" stroke="#5D4037" stroke-width="2"/>
</svg>
`,zb=`<svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="5.5" cy="5.63672" r="4" fill="#5D4037" stroke="#5D4037" stroke-width="2"/>
</svg>
`,Gb='<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z"/></svg>',Vb=`<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_25_373)">
<path d="M9.101 23.6909V15.7109H6.627V12.0439H9.101V10.4639C9.101 6.37895 10.949 4.48595 14.959 4.48595C15.36 4.48595 15.914 4.52795 16.427 4.58895C16.8112 4.62848 17.1924 4.69363 17.568 4.78395V8.10895C17.3509 8.08869 17.133 8.07668 16.915 8.07295C16.6707 8.0666 16.4264 8.0636 16.182 8.06395C15.475 8.06395 14.923 8.15995 14.507 8.37295C14.2273 8.51326 13.9922 8.72862 13.828 8.99495C13.57 9.41495 13.454 9.98995 13.454 10.7469V12.0439H17.373L16.987 14.1469L16.7 15.7109H13.454V23.9559C19.396 23.2379 24 18.1789 24 12.0439C24 5.41695 18.627 0.0439453 12 0.0439453C5.373 0.0439453 0 5.41695 0 12.0439C0 17.6719 3.874 22.3939 9.101 23.6909Z" />
</g>
<defs>
<clipPath id="clip0_25_373">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
`,Wb=`<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_25_370)">
<path d="M12 0C8.74 0 8.333 0.015 7.053 0.072C5.775 0.132 4.905 0.333 4.14 0.63C3.351 0.936 2.681 1.347 2.014 2.014C1.347 2.681 0.935 3.35 0.63 4.14C0.333 4.905 0.131 5.775 0.072 7.053C0.012 8.333 0 8.74 0 12C0 15.26 0.015 15.667 0.072 16.947C0.132 18.224 0.333 19.095 0.63 19.86C0.936 20.648 1.347 21.319 2.014 21.986C2.681 22.652 3.35 23.065 4.14 23.37C4.906 23.666 5.776 23.869 7.053 23.928C8.333 23.988 8.74 24 12 24C15.26 24 15.667 23.985 16.947 23.928C18.224 23.868 19.095 23.666 19.86 23.37C20.648 23.064 21.319 22.652 21.986 21.986C22.652 21.319 23.065 20.651 23.37 19.86C23.666 19.095 23.869 18.224 23.928 16.947C23.988 15.667 24 15.26 24 12C24 8.74 23.985 8.333 23.928 7.053C23.868 5.776 23.666 4.904 23.37 4.14C23.064 3.351 22.652 2.681 21.986 2.014C21.319 1.347 20.651 0.935 19.86 0.63C19.095 0.333 18.224 0.131 16.947 0.072C15.667 0.012 15.26 0 12 0ZM12 2.16C15.203 2.16 15.585 2.176 16.85 2.231C18.02 2.286 18.655 2.48 19.077 2.646C19.639 2.863 20.037 3.123 20.459 3.542C20.878 3.962 21.138 4.361 21.355 4.923C21.519 5.345 21.715 5.98 21.768 7.15C21.825 8.416 21.838 8.796 21.838 12C21.838 15.204 21.823 15.585 21.764 16.85C21.703 18.02 21.508 18.655 21.343 19.077C21.119 19.639 20.864 20.037 20.444 20.459C20.025 20.878 19.62 21.138 19.064 21.355C18.644 21.519 17.999 21.715 16.829 21.768C15.555 21.825 15.18 21.838 11.97 21.838C8.759 21.838 8.384 21.823 7.111 21.764C5.94 21.703 5.295 21.508 4.875 21.343C4.306 21.119 3.915 20.864 3.496 20.444C3.075 20.025 2.806 19.62 2.596 19.064C2.431 18.644 2.237 17.999 2.176 16.829C2.131 15.569 2.115 15.18 2.115 11.985C2.115 8.789 2.131 8.399 2.176 7.124C2.237 5.954 2.431 5.31 2.596 4.89C2.806 4.32 3.075 3.93 3.496 3.509C3.915 3.09 4.306 2.82 4.875 2.611C5.295 2.445 5.926 2.25 7.096 2.19C8.371 2.145 8.746 2.13 11.955 2.13L12 2.16ZM12 5.838C8.595 5.838 5.838 8.598 5.838 12C5.838 15.405 8.598 18.162 12 18.162C15.405 18.162 18.162 15.402 18.162 12C18.162 8.595 15.402 5.838 12 5.838ZM12 16C9.79 16 8 14.21 8 12C8 9.79 9.79 8 12 8C14.21 8 16 9.79 16 12C16 14.21 14.21 16 12 16ZM19.846 5.595C19.846 6.39 19.2 7.035 18.406 7.035C17.611 7.035 16.966 6.389 16.966 5.595C16.966 4.801 17.612 4.156 18.406 4.156C19.199 4.155 19.846 4.801 19.846 5.595Z" />
</g>
<defs>
<clipPath id="clip0_25_370">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
`,Xb=`<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M3 18V16H21V18H3ZM3 13V11H21V13H3ZM3 8V6H21V8H3Z" />
</svg>
`,$b=`<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M6 10.95L5 11.5C4.76667 11.6333 4.51667 11.6667 4.25 11.6C3.98333 11.5333 3.78333 11.3833 3.65 11.15L1.65 7.65C1.51667 7.41667 1.48333 7.16667 1.55 6.9C1.61667 6.63333 1.76667 6.43333 2 6.3L7.75 3H9.5C9.65 3 9.77083 3.04583 9.8625 3.1375C9.95417 3.22917 10 3.35 10 3.5V4C10 4.55 10.1958 5.02083 10.5875 5.4125C10.9792 5.80417 11.45 6 12 6C12.55 6 13.0208 5.80417 13.4125 5.4125C13.8042 5.02083 14 4.55 14 4V3.5C14 3.35 14.0458 3.22917 14.1375 3.1375C14.2292 3.04583 14.35 3 14.5 3H16.25L22 6.3C22.2333 6.43333 22.3833 6.63333 22.45 6.9C22.5167 7.16667 22.4833 7.41667 22.35 7.65L20.35 11.15C20.2167 11.3833 20.0208 11.5292 19.7625 11.5875C19.5042 11.6458 19.25 11.6083 19 11.475L18 10.975V20C18 20.2833 17.9042 20.5208 17.7125 20.7125C17.5208 20.9042 17.2833 21 17 21H7C6.71667 21 6.47917 20.9042 6.2875 20.7125C6.09583 20.5208 6 20.2833 6 20V10.95ZM8 7.6V19H16V7.6L19.1 9.3L20.15 7.55L15.85 5.05C15.6 5.9 15.1292 6.60417 14.4375 7.1625C13.7458 7.72083 12.9333 8 12 8C11.0667 8 10.2542 7.72083 9.5625 7.1625C8.87083 6.60417 8.4 5.9 8.15 5.05L3.85 7.55L4.9 9.3L8 7.6Z" />
</svg>
`,jb=`<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M3 20V4L22 12L3 20ZM5 17L16.85 12L5 7V10.5L11 12L5 13.5V17Z" />
</svg>
`,Yb=`<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M18 22C17.1667 22 16.4583 21.7083 15.875 21.125C15.2917 20.5417 15 19.8333 15 19C15 18.8833 15.0083 18.7625 15.025 18.6375C15.0417 18.5125 15.0667 18.4 15.1 18.3L8.05 14.2C7.76667 14.45 7.45 14.6458 7.1 14.7875C6.75 14.9292 6.38333 15 6 15C5.16667 15 4.45833 14.7083 3.875 14.125C3.29167 13.5417 3 12.8333 3 12C3 11.1667 3.29167 10.4583 3.875 9.875C4.45833 9.29167 5.16667 9 6 9C6.38333 9 6.75 9.07083 7.1 9.2125C7.45 9.35417 7.76667 9.55 8.05 9.8L15.1 5.7C15.0667 5.6 15.0417 5.4875 15.025 5.3625C15.0083 5.2375 15 5.11667 15 5C15 4.16667 15.2917 3.45833 15.875 2.875C16.4583 2.29167 17.1667 2 18 2C18.8333 2 19.5417 2.29167 20.125 2.875C20.7083 3.45833 21 4.16667 21 5C21 5.83333 20.7083 6.54167 20.125 7.125C19.5417 7.70833 18.8333 8 18 8C17.6167 8 17.25 7.92917 16.9 7.7875C16.55 7.64583 16.2333 7.45 15.95 7.2L8.9 11.3C8.93333 11.4 8.95833 11.5125 8.975 11.6375C8.99167 11.7625 9 11.8833 9 12C9 12.1167 8.99167 12.2375 8.975 12.3625C8.95833 12.4875 8.93333 12.6 8.9 12.7L15.95 16.8C16.2333 16.55 16.55 16.3542 16.9 16.2125C17.25 16.0708 17.6167 16 18 16C18.8333 16 19.5417 16.2917 20.125 16.875C20.7083 17.4583 21 18.1667 21 19C21 19.8333 20.7083 20.5417 20.125 21.125C19.5417 21.7083 18.8333 22 18 22ZM18 6C18.2833 6 18.5208 5.90417 18.7125 5.7125C18.9042 5.52083 19 5.28333 19 5C19 4.71667 18.9042 4.47917 18.7125 4.2875C18.5208 4.09583 18.2833 4 18 4C17.7167 4 17.4792 4.09583 17.2875 4.2875C17.0958 4.47917 17 4.71667 17 5C17 5.28333 17.0958 5.52083 17.2875 5.7125C17.4792 5.90417 17.7167 6 18 6ZM6 13C6.28333 13 6.52083 12.9042 6.7125 12.7125C6.90417 12.5208 7 12.2833 7 12C7 11.7167 6.90417 11.4792 6.7125 11.2875C6.52083 11.0958 6.28333 11 6 11C5.71667 11 5.47917 11.0958 5.2875 11.2875C5.09583 11.4792 5 11.7167 5 12C5 12.2833 5.09583 12.5208 5.2875 12.7125C5.47917 12.9042 5.71667 13 6 13ZM18 20C18.2833 20 18.5208 19.9042 18.7125 19.7125C18.9042 19.5208 19 19.2833 19 19C19 18.7167 18.9042 18.4792 18.7125 18.2875C18.5208 18.0958 18.2833 18 18 18C17.7167 18 17.4792 18.0958 17.2875 18.2875C17.0958 18.4792 17 18.7167 17 19C17 19.2833 17.0958 19.5208 17.2875 19.7125C17.4792 19.9042 17.7167 20 18 20Z" />
</svg>
`,qb=`<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_25_375)">
<path d="M12.525 0.02C13.835 0 15.135 0.01 16.435 0C16.515 1.53 17.065 3.09 18.185 4.17C19.305 5.28 20.885 5.79 22.425 5.96V9.99C20.985 9.94 19.535 9.64 18.225 9.02C17.655 8.76 17.125 8.43 16.605 8.09C16.595 11.01 16.615 13.93 16.585 16.84C16.505 18.24 16.045 19.63 15.235 20.78C13.925 22.7 11.655 23.95 9.325 23.99C7.895 24.07 6.465 23.68 5.245 22.96C3.225 21.77 1.805 19.59 1.595 17.25C1.575 16.75 1.565 16.25 1.585 15.76C1.765 13.86 2.705 12.04 4.165 10.8C5.825 9.36 8.145 8.67 10.315 9.08C10.335 10.56 10.275 12.04 10.275 13.52C9.285 13.2 8.125 13.29 7.255 13.89C6.625 14.3 6.145 14.93 5.895 15.64C5.685 16.15 5.745 16.71 5.755 17.25C5.995 18.89 7.575 20.27 9.255 20.12C10.375 20.11 11.445 19.46 12.025 18.51C12.215 18.18 12.425 17.84 12.435 17.45C12.535 15.66 12.495 13.88 12.505 12.09C12.515 8.06 12.495 4.04 12.525 0.02Z" />
</g>
<defs>
<clipPath id="clip0_25_375">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
`,Zb=`<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M18.901 1.15308H22.581L14.541 10.3431L24 22.8461H16.594L10.794 15.2621L4.156 22.8461H0.474L9.074 13.0161L0 1.15408H7.594L12.837 8.08608L18.901 1.15308ZM17.61 20.6441H19.649L6.486 3.24008H4.298L17.61 20.6441Z" />
</svg>
`,Kb=`<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M23.498 6.18592C23.3624 5.6752 23.095 5.20906 22.7226 4.83419C22.3502 4.45931 21.8858 4.18886 21.376 4.04992C19.505 3.54492 12 3.54492 12 3.54492C12 3.54492 4.495 3.54492 2.623 4.04992C2.11341 4.18911 1.64929 4.45966 1.27708 4.8345C0.904861 5.20935 0.637591 5.67536 0.502 6.18592C0 8.06992 0 11.9999 0 11.9999C0 11.9999 0 15.9299 0.502 17.8139C0.637586 18.3246 0.904975 18.7908 1.27739 19.1657C1.64981 19.5405 2.11418 19.811 2.624 19.9499C4.495 20.4549 12 20.4549 12 20.4549C12 20.4549 19.505 20.4549 21.377 19.9499C21.8869 19.8111 22.3513 19.5407 22.7237 19.1658C23.0961 18.7909 23.3635 18.3247 23.499 17.8139C24 15.9299 24 11.9999 24 11.9999C24 11.9999 24 8.06992 23.498 6.18592ZM9.545 15.5679V8.43192L15.818 11.9999L9.545 15.5679Z" />
</svg>
`;var Zt=function(){return Zt=Object.assign||function(e){for(var n,i=1,r=arguments.length;i<r;i++){n=arguments[i];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},Zt.apply(this,arguments)};function Eu(t,e,n){if(n||arguments.length===2)for(var i=0,r=e.length,o;i<r;i++)(o||!(i in e))&&(o||(o=Array.prototype.slice.call(e,0,i)),o[i]=e[i]);return t.concat(o||Array.prototype.slice.call(e))}var ut="-ms-",Ks="-moz-",Ke="-webkit-",ex="comm",sc="rule",np="decl",Qb="@import",tx="@keyframes",Jb="@layer",nx=Math.abs,ip=String.fromCharCode,Hd=Object.assign;function e3(t,e){return Ut(t,0)^45?(((e<<2^Ut(t,0))<<2^Ut(t,1))<<2^Ut(t,2))<<2^Ut(t,3):0}function ix(t){return t.trim()}function Ri(t,e){return(t=e.exec(t))?t[0]:t}function Fe(t,e,n){return t.replace(e,n)}function kl(t,e,n){return t.indexOf(e,n)}function Ut(t,e){return t.charCodeAt(e)|0}function cs(t,e,n){return t.slice(e,n)}function pi(t){return t.length}function rx(t){return t.length}function Bs(t,e){return e.push(t),t}function t3(t,e){return t.map(e).join("")}function l0(t,e){return t.filter(function(n){return!Ri(n,e)})}var ac=1,fs=1,ox=0,Gn=0,wt=0,ys="";function lc(t,e,n,i,r,o,s,a){return{value:t,root:e,parent:n,type:i,props:r,children:o,line:ac,column:fs,length:s,return:"",siblings:a}}function qi(t,e){return Hd(lc("",null,null,"",null,null,0,t.siblings),t,{length:-t.length},e)}function wo(t){for(;t.root;)t=qi(t.root,{children:[t]});Bs(t,t.siblings)}function n3(){return wt}function i3(){return wt=Gn>0?Ut(ys,--Gn):0,fs--,wt===10&&(fs=1,ac--),wt}function oi(){return wt=Gn<ox?Ut(ys,Gn++):0,fs++,wt===10&&(fs=1,ac++),wt}function $r(){return Ut(ys,Gn)}function Hl(){return Gn}function uc(t,e){return cs(ys,t,e)}function zd(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function r3(t){return ac=fs=1,ox=pi(ys=t),Gn=0,[]}function o3(t){return ys="",t}function Ef(t){return ix(uc(Gn-1,Gd(t===91?t+2:t===40?t+1:t)))}function s3(t){for(;(wt=$r())&&wt<33;)oi();return zd(t)>2||zd(wt)>3?"":" "}function a3(t,e){for(;--e&&oi()&&!(wt<48||wt>102||wt>57&&wt<65||wt>70&&wt<97););return uc(t,Hl()+(e<6&&$r()==32&&oi()==32))}function Gd(t){for(;oi();)switch(wt){case t:return Gn;case 34:case 39:t!==34&&t!==39&&Gd(wt);break;case 40:t===41&&Gd(t);break;case 92:oi();break}return Gn}function l3(t,e){for(;oi()&&t+wt!==47+10;)if(t+wt===42+42&&$r()===47)break;return"/*"+uc(e,Gn-1)+"*"+ip(t===47?t:oi())}function u3(t){for(;!zd($r());)oi();return uc(t,Gn)}function c3(t){return o3(zl("",null,null,null,[""],t=r3(t),0,[0],t))}function zl(t,e,n,i,r,o,s,a,l){for(var u=0,c=0,d=s,h=0,p=0,_=0,x=1,g=1,f=1,v=0,m="",y=r,R=o,A=i,M=m;g;)switch(_=v,v=oi()){case 40:if(_!=108&&Ut(M,d-1)==58){kl(M+=Fe(Ef(v),"&","&\f"),"&\f",nx(u?a[u-1]:0))!=-1&&(f=-1);break}case 34:case 39:case 91:M+=Ef(v);break;case 9:case 10:case 13:case 32:M+=s3(_);break;case 92:M+=a3(Hl()-1,7);continue;case 47:switch($r()){case 42:case 47:Bs(f3(l3(oi(),Hl()),e,n,l),l);break;default:M+="/"}break;case 123*x:a[u++]=pi(M)*f;case 125*x:case 59:case 0:switch(v){case 0:case 125:g=0;case 59+c:f==-1&&(M=Fe(M,/\f/g,"")),p>0&&pi(M)-d&&Bs(p>32?c0(M+";",i,n,d-1,l):c0(Fe(M," ","")+";",i,n,d-2,l),l);break;case 59:M+=";";default:if(Bs(A=u0(M,e,n,u,c,r,a,m,y=[],R=[],d,o),o),v===123)if(c===0)zl(M,e,A,A,y,o,d,a,R);else switch(h===99&&Ut(M,3)===110?100:h){case 100:case 108:case 109:case 115:zl(t,A,A,i&&Bs(u0(t,A,A,0,0,r,a,m,r,y=[],d,R),R),r,R,d,a,i?y:R);break;default:zl(M,A,A,A,[""],R,0,a,R)}}u=c=p=0,x=f=1,m=M="",d=s;break;case 58:d=1+pi(M),p=_;default:if(x<1){if(v==123)--x;else if(v==125&&x++==0&&i3()==125)continue}switch(M+=ip(v),v*x){case 38:f=c>0?1:(M+="\f",-1);break;case 44:a[u++]=(pi(M)-1)*f,f=1;break;case 64:$r()===45&&(M+=Ef(oi())),h=$r(),c=d=pi(m=M+=u3(Hl())),v++;break;case 45:_===45&&pi(M)==2&&(x=0)}}return o}function u0(t,e,n,i,r,o,s,a,l,u,c,d){for(var h=r-1,p=r===0?o:[""],_=rx(p),x=0,g=0,f=0;x<i;++x)for(var v=0,m=cs(t,h+1,h=nx(g=s[x])),y=t;v<_;++v)(y=ix(g>0?p[v]+" "+m:Fe(m,/&\f/g,p[v])))&&(l[f++]=y);return lc(t,e,n,r===0?sc:a,l,u,c,d)}function f3(t,e,n,i){return lc(t,e,n,ex,ip(n3()),cs(t,2,-2),0,i)}function c0(t,e,n,i,r){return lc(t,e,n,np,cs(t,0,i),cs(t,i+1,-1),i,r)}function sx(t,e,n){switch(e3(t,e)){case 5103:return Ke+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Ke+t+t;case 4789:return Ks+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return Ke+t+Ks+t+ut+t+t;case 5936:switch(Ut(t,e+11)){case 114:return Ke+t+ut+Fe(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return Ke+t+ut+Fe(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return Ke+t+ut+Fe(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return Ke+t+ut+t+t;case 6165:return Ke+t+ut+"flex-"+t+t;case 5187:return Ke+t+Fe(t,/(\w+).+(:[^]+)/,Ke+"box-$1$2"+ut+"flex-$1$2")+t;case 5443:return Ke+t+ut+"flex-item-"+Fe(t,/flex-|-self/g,"")+(Ri(t,/flex-|baseline/)?"":ut+"grid-row-"+Fe(t,/flex-|-self/g,""))+t;case 4675:return Ke+t+ut+"flex-line-pack"+Fe(t,/align-content|flex-|-self/g,"")+t;case 5548:return Ke+t+ut+Fe(t,"shrink","negative")+t;case 5292:return Ke+t+ut+Fe(t,"basis","preferred-size")+t;case 6060:return Ke+"box-"+Fe(t,"-grow","")+Ke+t+ut+Fe(t,"grow","positive")+t;case 4554:return Ke+Fe(t,/([^-])(transform)/g,"$1"+Ke+"$2")+t;case 6187:return Fe(Fe(Fe(t,/(zoom-|grab)/,Ke+"$1"),/(image-set)/,Ke+"$1"),t,"")+t;case 5495:case 3959:return Fe(t,/(image-set\([^]*)/,Ke+"$1$`$1");case 4968:return Fe(Fe(t,/(.+:)(flex-)?(.*)/,Ke+"box-pack:$3"+ut+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Ke+t+t;case 4200:if(!Ri(t,/flex-|baseline/))return ut+"grid-column-align"+cs(t,e)+t;break;case 2592:case 3360:return ut+Fe(t,"template-","")+t;case 4384:case 3616:return n&&n.some(function(i,r){return e=r,Ri(i.props,/grid-\w+-end/)})?~kl(t+(n=n[e].value),"span",0)?t:ut+Fe(t,"-start","")+t+ut+"grid-row-span:"+(~kl(n,"span",0)?Ri(n,/\d+/):+Ri(n,/\d+/)-+Ri(t,/\d+/))+";":ut+Fe(t,"-start","")+t;case 4896:case 4128:return n&&n.some(function(i){return Ri(i.props,/grid-\w+-start/)})?t:ut+Fe(Fe(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return Fe(t,/(.+)-inline(.+)/,Ke+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(pi(t)-1-e>6)switch(Ut(t,e+1)){case 109:if(Ut(t,e+4)!==45)break;case 102:return Fe(t,/(.+:)(.+)-([^]+)/,"$1"+Ke+"$2-$3$1"+Ks+(Ut(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~kl(t,"stretch",0)?sx(Fe(t,"stretch","fill-available"),e,n)+t:t}break;case 5152:case 5920:return Fe(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(i,r,o,s,a,l,u){return ut+r+":"+o+u+(s?ut+r+"-span:"+(a?l:+l-+o)+u:"")+t});case 4949:if(Ut(t,e+6)===121)return Fe(t,":",":"+Ke)+t;break;case 6444:switch(Ut(t,Ut(t,14)===45?18:11)){case 120:return Fe(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Ke+(Ut(t,14)===45?"inline-":"")+"box$3$1"+Ke+"$2$3$1"+ut+"$2box$3")+t;case 100:return Fe(t,":",":"+ut)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Fe(t,"scroll-","scroll-snap-")+t}return t}function Mu(t,e){for(var n="",i=0;i<t.length;i++)n+=e(t[i],i,t,e)||"";return n}function d3(t,e,n,i){switch(t.type){case Jb:if(t.children.length)break;case Qb:case np:return t.return=t.return||t.value;case ex:return"";case tx:return t.return=t.value+"{"+Mu(t.children,i)+"}";case sc:if(!pi(t.value=t.props.join(",")))return""}return pi(n=Mu(t.children,i))?t.return=t.value+"{"+n+"}":""}function h3(t){var e=rx(t);return function(n,i,r,o){for(var s="",a=0;a<e;a++)s+=t[a](n,i,r,o)||"";return s}}function p3(t){return function(e){e.root||(e=e.return)&&t(e)}}function m3(t,e,n,i){if(t.length>-1&&!t.return)switch(t.type){case np:t.return=sx(t.value,t.length,n);return;case tx:return Mu([qi(t,{value:Fe(t.value,"@","@"+Ke)})],i);case sc:if(t.length)return t3(n=t.props,function(r){switch(Ri(r,i=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":wo(qi(t,{props:[Fe(r,/:(read-\w+)/,":"+Ks+"$1")]})),wo(qi(t,{props:[r]})),Hd(t,{props:l0(n,i)});break;case"::placeholder":wo(qi(t,{props:[Fe(r,/:(plac\w+)/,":"+Ke+"input-$1")]})),wo(qi(t,{props:[Fe(r,/:(plac\w+)/,":"+Ks+"$1")]})),wo(qi(t,{props:[Fe(r,/:(plac\w+)/,ut+"input-$1")]})),wo(qi(t,{props:[r]})),Hd(t,{props:l0(n,i)});break}return""})}}var g3={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},ds=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",ax="active",lx="data-styled-version",cc="6.1.6",rp=`/*!sc*/
`,op=typeof window<"u"&&"HTMLElement"in window,v3=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY),fc=Object.freeze([]),hs=Object.freeze({});function _3(t,e,n){return n===void 0&&(n=hs),t.theme!==n.theme&&t.theme||e||n.theme}var ux=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),x3=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,y3=/(^-|-$)/g;function f0(t){return t.replace(x3,"-").replace(y3,"")}var S3=/(a)(d)/gi,Sl=52,d0=function(t){return String.fromCharCode(t+(t>25?39:97))};function Vd(t){var e,n="";for(e=Math.abs(t);e>Sl;e=e/Sl|0)n=d0(e%Sl)+n;return(d0(e%Sl)+n).replace(S3,"$1-$2")}var Mf,cx=5381,Go=function(t,e){for(var n=e.length;n;)t=33*t^e.charCodeAt(--n);return t},fx=function(t){return Go(cx,t)};function E3(t){return Vd(fx(t)>>>0)}function M3(t){return t.displayName||t.name||"Component"}function Tf(t){return typeof t=="string"&&!0}var dx=typeof Symbol=="function"&&Symbol.for,hx=dx?Symbol.for("react.memo"):60115,T3=dx?Symbol.for("react.forward_ref"):60112,w3={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},A3={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},px={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},C3=((Mf={})[T3]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Mf[hx]=px,Mf);function h0(t){return("type"in(e=t)&&e.type.$$typeof)===hx?px:"$$typeof"in t?C3[t.$$typeof]:w3;var e}var R3=Object.defineProperty,b3=Object.getOwnPropertyNames,p0=Object.getOwnPropertySymbols,P3=Object.getOwnPropertyDescriptor,L3=Object.getPrototypeOf,m0=Object.prototype;function mx(t,e,n){if(typeof e!="string"){if(m0){var i=L3(e);i&&i!==m0&&mx(t,i,n)}var r=b3(e);p0&&(r=r.concat(p0(e)));for(var o=h0(t),s=h0(e),a=0;a<r.length;++a){var l=r[a];if(!(l in A3||n&&n[l]||s&&l in s||o&&l in o)){var u=P3(e,l);try{R3(t,l,u)}catch{}}}}return t}function no(t){return typeof t=="function"}function sp(t){return typeof t=="object"&&"styledComponentId"in t}function Hr(t,e){return t&&e?"".concat(t," ").concat(e):t||e||""}function g0(t,e){if(t.length===0)return"";for(var n=t[0],i=1;i<t.length;i++)n+=e?e+t[i]:t[i];return n}function _a(t){return t!==null&&typeof t=="object"&&t.constructor.name===Object.name&&!("props"in t&&t.$$typeof)}function Wd(t,e,n){if(n===void 0&&(n=!1),!n&&!_a(t)&&!Array.isArray(t))return e;if(Array.isArray(e))for(var i=0;i<e.length;i++)t[i]=Wd(t[i],e[i]);else if(_a(e))for(var i in e)t[i]=Wd(t[i],e[i]);return t}function ap(t,e){Object.defineProperty(t,"toString",{value:e})}function io(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var N3=function(){function t(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return t.prototype.indexOfGroup=function(e){for(var n=0,i=0;i<e;i++)n+=this.groupSizes[i];return n},t.prototype.insertRules=function(e,n){if(e>=this.groupSizes.length){for(var i=this.groupSizes,r=i.length,o=r;e>=o;)if((o<<=1)<0)throw io(16,"".concat(e));this.groupSizes=new Uint32Array(o),this.groupSizes.set(i),this.length=o;for(var s=r;s<o;s++)this.groupSizes[s]=0}for(var a=this.indexOfGroup(e+1),l=(s=0,n.length);s<l;s++)this.tag.insertRule(a,n[s])&&(this.groupSizes[e]++,a++)},t.prototype.clearGroup=function(e){if(e<this.length){var n=this.groupSizes[e],i=this.indexOfGroup(e),r=i+n;this.groupSizes[e]=0;for(var o=i;o<r;o++)this.tag.deleteRule(i)}},t.prototype.getGroup=function(e){var n="";if(e>=this.length||this.groupSizes[e]===0)return n;for(var i=this.groupSizes[e],r=this.indexOfGroup(e),o=r+i,s=r;s<o;s++)n+="".concat(this.tag.getRule(s)).concat(rp);return n},t}(),Gl=new Map,Tu=new Map,Vl=1,El=function(t){if(Gl.has(t))return Gl.get(t);for(;Tu.has(Vl);)Vl++;var e=Vl++;return Gl.set(t,e),Tu.set(e,t),e},I3=function(t,e){Vl=e+1,Gl.set(t,e),Tu.set(e,t)},D3="style[".concat(ds,"][").concat(lx,'="').concat(cc,'"]'),U3=new RegExp("^".concat(ds,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),F3=function(t,e,n){for(var i,r=n.split(","),o=0,s=r.length;o<s;o++)(i=r[o])&&t.registerName(e,i)},O3=function(t,e){for(var n,i=((n=e.textContent)!==null&&n!==void 0?n:"").split(rp),r=[],o=0,s=i.length;o<s;o++){var a=i[o].trim();if(a){var l=a.match(U3);if(l){var u=0|parseInt(l[1],10),c=l[2];u!==0&&(I3(c,u),F3(t,c,l[3]),t.getTag().insertRules(u,r)),r.length=0}else r.push(a)}}};function B3(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var gx=function(t){var e=document.head,n=t||e,i=document.createElement("style"),r=function(a){var l=Array.from(a.querySelectorAll("style[".concat(ds,"]")));return l[l.length-1]}(n),o=r!==void 0?r.nextSibling:null;i.setAttribute(ds,ax),i.setAttribute(lx,cc);var s=B3();return s&&i.setAttribute("nonce",s),n.insertBefore(i,o),i},k3=function(){function t(e){this.element=gx(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var i=document.styleSheets,r=0,o=i.length;r<o;r++){var s=i[r];if(s.ownerNode===n)return s}throw io(17)}(this.element),this.length=0}return t.prototype.insertRule=function(e,n){try{return this.sheet.insertRule(n,e),this.length++,!0}catch{return!1}},t.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.prototype.getRule=function(e){var n=this.sheet.cssRules[e];return n&&n.cssText?n.cssText:""},t}(),H3=function(){function t(e){this.element=gx(e),this.nodes=this.element.childNodes,this.length=0}return t.prototype.insertRule=function(e,n){if(e<=this.length&&e>=0){var i=document.createTextNode(n);return this.element.insertBefore(i,this.nodes[e]||null),this.length++,!0}return!1},t.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},t}(),z3=function(){function t(e){this.rules=[],this.length=0}return t.prototype.insertRule=function(e,n){return e<=this.length&&(this.rules.splice(e,0,n),this.length++,!0)},t.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},t}(),v0=op,G3={isServer:!op,useCSSOMInjection:!v3},vx=function(){function t(e,n,i){e===void 0&&(e=hs),n===void 0&&(n={});var r=this;this.options=Zt(Zt({},G3),e),this.gs=n,this.names=new Map(i),this.server=!!e.isServer,!this.server&&op&&v0&&(v0=!1,function(o){for(var s=document.querySelectorAll(D3),a=0,l=s.length;a<l;a++){var u=s[a];u&&u.getAttribute(ds)!==ax&&(O3(o,u),u.parentNode&&u.parentNode.removeChild(u))}}(this)),ap(this,function(){return function(o){for(var s=o.getTag(),a=s.length,l="",u=function(d){var h=function(f){return Tu.get(f)}(d);if(h===void 0)return"continue";var p=o.names.get(h),_=s.getGroup(d);if(p===void 0||_.length===0)return"continue";var x="".concat(ds,".g").concat(d,'[id="').concat(h,'"]'),g="";p!==void 0&&p.forEach(function(f){f.length>0&&(g+="".concat(f,","))}),l+="".concat(_).concat(x,'{content:"').concat(g,'"}').concat(rp)},c=0;c<a;c++)u(c);return l}(r)})}return t.registerId=function(e){return El(e)},t.prototype.reconstructWithOptions=function(e,n){return n===void 0&&(n=!0),new t(Zt(Zt({},this.options),e),this.gs,n&&this.names||void 0)},t.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.prototype.getTag=function(){return this.tag||(this.tag=(e=function(n){var i=n.useCSSOMInjection,r=n.target;return n.isServer?new z3(r):i?new k3(r):new H3(r)}(this.options),new N3(e)));var e},t.prototype.hasNameForId=function(e,n){return this.names.has(e)&&this.names.get(e).has(n)},t.prototype.registerName=function(e,n){if(El(e),this.names.has(e))this.names.get(e).add(n);else{var i=new Set;i.add(n),this.names.set(e,i)}},t.prototype.insertRules=function(e,n,i){this.registerName(e,n),this.getTag().insertRules(El(e),i)},t.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.prototype.clearRules=function(e){this.getTag().clearGroup(El(e)),this.clearNames(e)},t.prototype.clearTag=function(){this.tag=void 0},t}(),V3=/&/g,W3=/^\s*\/\/.*$/gm;function _x(t,e){return t.map(function(n){return n.type==="rule"&&(n.value="".concat(e," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(e," ")),n.props=n.props.map(function(i){return"".concat(e," ").concat(i)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=_x(n.children,e)),n})}function X3(t){var e,n,i,r=t===void 0?hs:t,o=r.options,s=o===void 0?hs:o,a=r.plugins,l=a===void 0?fc:a,u=function(h,p,_){return _.startsWith(n)&&_.endsWith(n)&&_.replaceAll(n,"").length>0?".".concat(e):h},c=l.slice();c.push(function(h){h.type===sc&&h.value.includes("&")&&(h.props[0]=h.props[0].replace(V3,n).replace(i,u))}),s.prefix&&c.push(m3),c.push(d3);var d=function(h,p,_,x){p===void 0&&(p=""),_===void 0&&(_=""),x===void 0&&(x="&"),e=x,n=p,i=new RegExp("\\".concat(n,"\\b"),"g");var g=h.replace(W3,""),f=c3(_||p?"".concat(_," ").concat(p," { ").concat(g," }"):g);s.namespace&&(f=_x(f,s.namespace));var v=[];return Mu(f,h3(c.concat(p3(function(m){return v.push(m)})))),v};return d.hash=l.length?l.reduce(function(h,p){return p.name||io(15),Go(h,p.name)},cx).toString():"",d}var $3=new vx,Xd=X3(),xx=gr.createContext({shouldForwardProp:void 0,styleSheet:$3,stylis:Xd});xx.Consumer;gr.createContext(void 0);function _0(){return Ye.useContext(xx)}var j3=function(){function t(e,n){var i=this;this.inject=function(r,o){o===void 0&&(o=Xd);var s=i.name+o.hash;r.hasNameForId(i.id,s)||r.insertRules(i.id,s,o(i.rules,s,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=n,ap(this,function(){throw io(12,String(i.name))})}return t.prototype.getName=function(e){return e===void 0&&(e=Xd),this.name+e.hash},t}(),Y3=function(t){return t>="A"&&t<="Z"};function x0(t){for(var e="",n=0;n<t.length;n++){var i=t[n];if(n===1&&i==="-"&&t[0]==="-")return t;Y3(i)?e+="-"+i.toLowerCase():e+=i}return e.startsWith("ms-")?"-"+e:e}var yx=function(t){return t==null||t===!1||t===""},Sx=function(t){var e,n,i=[];for(var r in t){var o=t[r];t.hasOwnProperty(r)&&!yx(o)&&(Array.isArray(o)&&o.isCss||no(o)?i.push("".concat(x0(r),":"),o,";"):_a(o)?i.push.apply(i,Eu(Eu(["".concat(r," {")],Sx(o),!1),["}"],!1)):i.push("".concat(x0(r),": ").concat((e=r,(n=o)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||e in g3||e.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return i};function jr(t,e,n,i){if(yx(t))return[];if(sp(t))return[".".concat(t.styledComponentId)];if(no(t)){if(!no(o=t)||o.prototype&&o.prototype.isReactComponent||!e)return[t];var r=t(e);return jr(r,e,n,i)}var o;return t instanceof j3?n?(t.inject(n,i),[t.getName(i)]):[t]:_a(t)?Sx(t):Array.isArray(t)?Array.prototype.concat.apply(fc,t.map(function(s){return jr(s,e,n,i)})):[t.toString()]}function q3(t){for(var e=0;e<t.length;e+=1){var n=t[e];if(no(n)&&!sp(n))return!1}return!0}var Z3=fx(cc),K3=function(){function t(e,n,i){this.rules=e,this.staticRulesId="",this.isStatic=(i===void 0||i.isStatic)&&q3(e),this.componentId=n,this.baseHash=Go(Z3,n),this.baseStyle=i,vx.registerId(n)}return t.prototype.generateAndInjectStyles=function(e,n,i){var r=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,n,i):"";if(this.isStatic&&!i.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))r=Hr(r,this.staticRulesId);else{var o=g0(jr(this.rules,e,n,i)),s=Vd(Go(this.baseHash,o)>>>0);if(!n.hasNameForId(this.componentId,s)){var a=i(o,".".concat(s),void 0,this.componentId);n.insertRules(this.componentId,s,a)}r=Hr(r,s),this.staticRulesId=s}else{for(var l=Go(this.baseHash,i.hash),u="",c=0;c<this.rules.length;c++){var d=this.rules[c];if(typeof d=="string")u+=d;else if(d){var h=g0(jr(d,e,n,i));l=Go(l,h+c),u+=h}}if(u){var p=Vd(l>>>0);n.hasNameForId(this.componentId,p)||n.insertRules(this.componentId,p,i(u,".".concat(p),void 0,this.componentId)),r=Hr(r,p)}}return r},t}(),wu=gr.createContext(void 0);wu.Consumer;function Q3(t){var e=gr.useContext(wu),n=Ye.useMemo(function(){return function(i,r){if(!i)throw io(14);if(no(i)){var o=i(r);return o}if(Array.isArray(i)||typeof i!="object")throw io(8);return r?Zt(Zt({},r),i):i}(t.theme,e)},[t.theme,e]);return t.children?gr.createElement(wu.Provider,{value:n},t.children):null}var wf={};function J3(t,e,n){var i=sp(t),r=t,o=!Tf(t),s=e.attrs,a=s===void 0?fc:s,l=e.componentId,u=l===void 0?function(y,R){var A=typeof y!="string"?"sc":f0(y);wf[A]=(wf[A]||0)+1;var M="".concat(A,"-").concat(E3(cc+A+wf[A]));return R?"".concat(R,"-").concat(M):M}(e.displayName,e.parentComponentId):l,c=e.displayName,d=c===void 0?function(y){return Tf(y)?"styled.".concat(y):"Styled(".concat(M3(y),")")}(t):c,h=e.displayName&&e.componentId?"".concat(f0(e.displayName),"-").concat(e.componentId):e.componentId||u,p=i&&r.attrs?r.attrs.concat(a).filter(Boolean):a,_=e.shouldForwardProp;if(i&&r.shouldForwardProp){var x=r.shouldForwardProp;if(e.shouldForwardProp){var g=e.shouldForwardProp;_=function(y,R){return x(y,R)&&g(y,R)}}else _=x}var f=new K3(n,h,i?r.componentStyle:void 0);function v(y,R){return function(A,M,N){var E=A.attrs,w=A.componentStyle,F=A.defaultProps,$=A.foldedComponentIds,ee=A.styledComponentId,P=A.target,O=gr.useContext(wu),X=_0(),q=A.shouldForwardProp||X.shouldForwardProp,L=_3(M,O,F)||hs,I=function(oe,ue,de){for(var we,Me=Zt(Zt({},ue),{className:void 0,theme:de}),ye=0;ye<oe.length;ye+=1){var He=no(we=oe[ye])?we(Me):we;for(var U in He)Me[U]=U==="className"?Hr(Me[U],He[U]):U==="style"?Zt(Zt({},Me[U]),He[U]):He[U]}return ue.className&&(Me.className=Hr(Me.className,ue.className)),Me}(E,M,L),G=I.as||P,j={};for(var Z in I)I[Z]===void 0||Z[0]==="$"||Z==="as"||Z==="theme"&&I.theme===L||(Z==="forwardedAs"?j.as=I.forwardedAs:q&&!q(Z,G)||(j[Z]=I[Z]));var W=function(oe,ue){var de=_0(),we=oe.generateAndInjectStyles(ue,de.styleSheet,de.stylis);return we}(w,I),Y=Hr($,ee);return W&&(Y+=" "+W),I.className&&(Y+=" "+I.className),j[Tf(G)&&!ux.has(G)?"class":"className"]=Y,j.ref=N,Ye.createElement(G,j)}(m,y,R)}v.displayName=d;var m=gr.forwardRef(v);return m.attrs=p,m.componentStyle=f,m.displayName=d,m.shouldForwardProp=_,m.foldedComponentIds=i?Hr(r.foldedComponentIds,r.styledComponentId):"",m.styledComponentId=h,m.target=i?r.target:t,Object.defineProperty(m,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(y){this._foldedDefaultProps=i?function(R){for(var A=[],M=1;M<arguments.length;M++)A[M-1]=arguments[M];for(var N=0,E=A;N<E.length;N++)Wd(R,E[N],!0);return R}({},r.defaultProps,y):y}}),ap(m,function(){return".".concat(m.styledComponentId)}),o&&mx(m,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),m}function y0(t,e){for(var n=[t[0]],i=0,r=e.length;i<r;i+=1)n.push(e[i],t[i+1]);return n}var S0=function(t){return Object.assign(t,{isCss:!0})};function Mn(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(no(t)||_a(t))return S0(jr(y0(fc,Eu([t],e,!0))));var i=t;return e.length===0&&i.length===1&&typeof i[0]=="string"?jr(i):S0(jr(y0(i,e)))}function $d(t,e,n){if(n===void 0&&(n=hs),!e)throw io(1,e);var i=function(r){for(var o=[],s=1;s<arguments.length;s++)o[s-1]=arguments[s];return t(e,n,Mn.apply(void 0,Eu([r],o,!1)))};return i.attrs=function(r){return $d(t,e,Zt(Zt({},n),{attrs:Array.prototype.concat(n.attrs,r).filter(Boolean)}))},i.withConfig=function(r){return $d(t,e,Zt(Zt({},n),r))},i}var Ex=function(t){return $d(J3,t)},Qt=Ex;ux.forEach(function(t){Qt[t]=Ex(t)});const lp=Qt.div`
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
`,Mx=({size:t="normal",variant:e="close",onClick:n})=>{const i={close:Bb,copyright:kb,facebook:Vb,instagram:Wb,menu:Xb,merch:$b,send:jb,share:Yb,tiktok:qb,x:Zb,youtube:Kb,expand:Gb,dot:Hb,dotActive:zb}[e];return Ne.jsx(lp,{onClick:n,$size:t,$isClickable:!!n,dangerouslySetInnerHTML:{__html:i}})},eP=Qt.div`
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
`,tP=({isDark:t,withFrame:e})=>Ne.jsx(eP,{$isDark:t,$withFrame:e,dangerouslySetInnerHTML:{__html:"logo"}}),Tx=Qt.a`
    font-size: inherit;
    text-decoration: none;
    color: inherit;
`,nP=({children:t,href:e="#"})=>Ne.jsx(Tx,{href:e,target:typeof e=="string"&&e.startsWith("#")?"_self":"_blank",rel:"noopener",children:t??e}),iP=Qt.ul`
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
`,rP=Qt.li`
    cursor: pointer;

    ${({theme:t,$variant:e,$isCurrent:n})=>({header:Mn`
                transition: opacity 0.1s ease-out;

                &:hover {
                    opacity: 0.5;
                }
            `,headerMobile:Mn`
                & > ${Tx} {
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
`,E0=({variant:t,links:e,onItemClickCallback:n})=>Ne.jsx(iP,{$variant:t,children:e.length>0&&e.map(({isCurrent:i,children:r,href:o},s)=>Ne.jsx(rP,{$isCurrent:i,$variant:t,onClick:n,children:Ne.jsx(nP,{href:o,children:r})},s))}),M0={siteLinks:{id:"app.layout.footer.siteLinks",description:"Footer link to general site links.",defaultMessage:"Site Links"},myLinks:{id:"app.layout.footer.myLinks",description:"Footer link to personal links or information.",defaultMessage:"My links"}},oP=Qt.footer`
    width: 100%;
    padding: 2rem;
    color: ${({theme:t})=>t.palette.primary};
`,sP=Qt.div`
    margin: 0 auto;
    width: 100%;
    max-width: 600px;
    display: flex;
    flex-direction: column;
    gap: 2rem;
`,aP=Qt.div`
    display: flex;
    justify-content: center;
    column-gap: 2rem;
`,lP=Qt.div`
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
`,T0=Qt.div`
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
`,w0=Qt.span`
    color: ${({theme:t})=>t.palette.secondary};
    border-bottom: ${({theme:t})=>t.border.secondary};
    border-color: ${({theme:t})=>t.palette.shades.secondary[38]};
`,uP=Qt.div`
    margin: 0 auto;
    display: flex;
    align-items: center;
    column-gap: 1rem;
    color: ${({theme:t})=>t.palette.shades.secondary[48]};
    font-size: 1.6rem;

    & > ${lp} {
        fill: ${({theme:t})=>t.palette.shades.secondary[48]};
    }
`,cP=({siteLinks:t,myLinks:e})=>Ne.jsx(oP,{children:Ne.jsxs(sP,{children:[Ne.jsxs(aP,{children:[Ne.jsx(tP,{withFrame:!0}),Ne.jsxs(lP,{children:[Ne.jsxs(T0,{children:[Ne.jsx(w0,{children:Ne.jsx(Hm,{...M0.siteLinks})}),Ne.jsx(E0,{links:t,variant:"footer"})]}),Ne.jsxs(T0,{children:[Ne.jsx(w0,{children:Ne.jsx(Hm,{...M0.myLinks})}),Ne.jsx(E0,{links:e,variant:"footer"})]})]})]}),Ne.jsxs(uP,{children:[Ne.jsx(Mx,{variant:"copyright"}),"Copyright 2024"]})]})}),Ml={home:{id:"app.layout.home",description:"Navigation link to the 'Home' page.",defaultMessage:"Home"},about:{id:"app.layout.about",description:"Navigation link to the 'About' section.",defaultMessage:"About"},repository:{id:"app.layout.repository",description:"Navigation link to the project's repository section.",defaultMessage:"Current project's repository"},figma:{id:"app.layout.figma",description:"Navigation link to the project's figma section.",defaultMessage:"Website Figma project"}},fP=Qt.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: ${({theme:t})=>t.palette.primary};
`,dP=({children:t})=>{const e=Ju(),n=[{children:e.formatMessage(Ml.home),href:"#home"},{children:e.formatMessage(Ml.about),href:"#about"}],i=[{children:"LinkedIn",href:"https://www.linkedin.com/in/bartlomiej-sniatkowski/"},{children:"Github",href:"https://github.com/BSniatkowski"},{children:e.formatMessage(Ml.repository),href:"https://github.com/BSniatkowski/z-nosem-w-piwie-react"},{children:e.formatMessage(Ml.figma),href:"https://www.figma.com/file/7sIhgDCOUo9jGmuUOFngF9/Z-Nosem-W-Piwie?type=design&node-id=0-1&mode=design&t=RaFAvIdMTLGsTKoS-0"}];return Ne.jsxs(fP,{children:[t,Ne.jsx(cP,{siteLinks:n,myLinks:i})]})},hP=({children:t})=>Ne.jsx(Ne.Fragment,{children:t}),pP=Qt.div`
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

    & > ${lp} {
        fill: ${({theme:t})=>t.palette.white};
    }
`,mP=Qt.span`
    font-size: 2.4rem;
    line-height: 1.4em;
    text-align: start;
    align-self: center;
`,gP=({isMobile:t,variant:e="info",message:n,isActive:i,onClose:r})=>Ne.jsxs(pP,{$isMobile:t,$isActive:i,$variant:e,children:[Ne.jsx(mP,{children:n}),Ne.jsx(Mx,{variant:"close",onClick:r})]}),vP={desktop:1920,desktopSmall:1366,tablet:1024,mobile:756},_P=t=>{const e=vP[t],[n,i]=Ye.useState(window.innerWidth),r=Ye.useMemo(()=>n<=e,[n,e]),o=()=>{i(window.innerWidth)};return Ye.useEffect(()=>(window.addEventListener("resize",o),()=>{window.removeEventListener("resize",o)}),[]),r};var xa=(t=>(t.SHOW_SNACKBAR="showSnackbar",t.CLOSE_SNACKBAR="closeSnackbar",t))(xa||{});const wx={variant:"info",message:"",isActive:!1},xP=(t,e)=>{var n,i;switch(e.type){case xa.SHOW_SNACKBAR:return{variant:(n=e==null?void 0:e.payload)==null?void 0:n.variant,message:(i=e==null?void 0:e.payload)==null?void 0:i.message,isActive:!0};case xa.CLOSE_SNACKBAR:return{...t,isActive:!1}}},yP=Ye.createContext(wx),SP=Ye.createContext(null),EP=({children:t})=>{const[e,n]=Ye.useReducer(xP,wx),i=_P("mobile");return Ye.useEffect(()=>{const r=setTimeout(()=>{e.isActive&&n({type:xa.CLOSE_SNACKBAR})},3e3);return()=>clearTimeout(r)},[e.isActive]),Ne.jsx(yP.Provider,{value:e,children:Ne.jsxs(SP.Provider,{value:n,children:[t,Ne.jsx(gP,{...e,isMobile:i,onClose:()=>n({type:xa.CLOSE_SNACKBAR})})]})})},MP={palette:{primary:"#FFE0B2",secondary:"#5D4037",accent:"#FFCA28",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00",white:"#fff",black:"#000",grey:"#9E9E9E",greyLighten1:"#BDBDBD",greyLighten2:"#E0E0E0",shades:{black:{18:"#0000002E",38:"#00000061",87:"#000000DE"},primary:{48:"#FFE0B280",87:"#FFE0B2DE"},secondary:{18:"#5D40372E",38:"#5D403761",48:"#5D40377A"}}},border:{primary:"1rem solid #FFE0B2",secondary:"2px solid #5D40377A"},boxShadow:{primary:"0 0 8px #00000061",secondary:"-10px -10px 0 0 #FFE0B280"}},TP=({children:t})=>Ne.jsx(Q3,{theme:MP,children:t});function wP({messages:t,locale:e}){const[n,i]=Ye.useState(e),r=Ye.useMemo(()=>t[n],[n,t]);return Ne.jsx(TP,{children:Ne.jsx(DM,{locale:n,messages:r,defaultLocale:"en-GB",children:Ne.jsx(EP,{children:Ne.jsx(hP,{children:Ne.jsx(dP,{children:Ne.jsx(Ob,{actualLocale:n,setActualIntlLocale:i})})})})})})}const AP="pl-PL",CP="en-GB",RP=[AP,CP],A0=t=>Ix(Object.assign({"../compiled-lang/en.json":()=>gp(()=>import("./en-d8c220fa.js"),[],import.meta.url),"../compiled-lang/pl.json":()=>gp(()=>import("./pl-d8c220fa.js"),[],import.meta.url)}),`../compiled-lang/${t}.json`);(async()=>{var n,i;const t=(n=await A0("en"))==null?void 0:n.default,e=(i=await A0("pl"))==null?void 0:i.default;Af.createRoot(document.getElementById("root")).render(Ne.jsx(gr.StrictMode,{children:Ne.jsx(wP,{messages:{"en-GB":t,"pl-PL":e},locale:RP.includes(navigator.language)?navigator.language:"en-GB"})}))})();
