(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function B_(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Bm={exports:{}},Fl={},km={exports:{}},Xe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xa=Symbol.for("react.element"),k_=Symbol.for("react.portal"),z_=Symbol.for("react.fragment"),V_=Symbol.for("react.strict_mode"),H_=Symbol.for("react.profiler"),G_=Symbol.for("react.provider"),W_=Symbol.for("react.context"),X_=Symbol.for("react.forward_ref"),Y_=Symbol.for("react.suspense"),q_=Symbol.for("react.memo"),$_=Symbol.for("react.lazy"),Sh=Symbol.iterator;function K_(t){return t===null||typeof t!="object"?null:(t=Sh&&t[Sh]||t["@@iterator"],typeof t=="function"?t:null)}var zm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Vm=Object.assign,Hm={};function zs(t,e,n){this.props=t,this.context=e,this.refs=Hm,this.updater=n||zm}zs.prototype.isReactComponent={};zs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};zs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Gm(){}Gm.prototype=zs.prototype;function Kf(t,e,n){this.props=t,this.context=e,this.refs=Hm,this.updater=n||zm}var Zf=Kf.prototype=new Gm;Zf.constructor=Kf;Vm(Zf,zs.prototype);Zf.isPureReactComponent=!0;var yh=Array.isArray,Wm=Object.prototype.hasOwnProperty,jf={current:null},Xm={key:!0,ref:!0,__self:!0,__source:!0};function Ym(t,e,n){var i,r={},s=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)Wm.call(e,i)&&!Xm.hasOwnProperty(i)&&(r[i]=e[i]);var o=arguments.length-2;if(o===1)r.children=n;else if(1<o){for(var l=Array(o),u=0;u<o;u++)l[u]=arguments[u+2];r.children=l}if(t&&t.defaultProps)for(i in o=t.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return{$$typeof:Xa,type:t,key:s,ref:a,props:r,_owner:jf.current}}function Z_(t,e){return{$$typeof:Xa,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Qf(t){return typeof t=="object"&&t!==null&&t.$$typeof===Xa}function j_(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Mh=/\/+/g;function ru(t,e){return typeof t=="object"&&t!==null&&t.key!=null?j_(""+t.key):e.toString(36)}function Go(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case Xa:case k_:a=!0}}if(a)return a=t,r=r(a),t=i===""?"."+ru(a,0):i,yh(r)?(n="",t!=null&&(n=t.replace(Mh,"$&/")+"/"),Go(r,e,n,"",function(u){return u})):r!=null&&(Qf(r)&&(r=Z_(r,n+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(Mh,"$&/")+"/")+t)),e.push(r)),1;if(a=0,i=i===""?".":i+":",yh(t))for(var o=0;o<t.length;o++){s=t[o];var l=i+ru(s,o);a+=Go(s,e,n,l,r)}else if(l=K_(t),typeof l=="function")for(t=l.call(t),o=0;!(s=t.next()).done;)s=s.value,l=i+ru(s,o++),a+=Go(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function no(t,e,n){if(t==null)return t;var i=[],r=0;return Go(t,i,"","",function(s){return e.call(n,s,r++)}),i}function Q_(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var rn={current:null},Wo={transition:null},J_={ReactCurrentDispatcher:rn,ReactCurrentBatchConfig:Wo,ReactCurrentOwner:jf};function qm(){throw Error("act(...) is not supported in production builds of React.")}Xe.Children={map:no,forEach:function(t,e,n){no(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return no(t,function(){e++}),e},toArray:function(t){return no(t,function(e){return e})||[]},only:function(t){if(!Qf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Xe.Component=zs;Xe.Fragment=z_;Xe.Profiler=H_;Xe.PureComponent=Kf;Xe.StrictMode=V_;Xe.Suspense=Y_;Xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=J_;Xe.act=qm;Xe.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Vm({},t.props),r=t.key,s=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=jf.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var o=t.type.defaultProps;for(l in e)Wm.call(e,l)&&!Xm.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&o!==void 0?o[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){o=Array(l);for(var u=0;u<l;u++)o[u]=arguments[u+2];i.children=o}return{$$typeof:Xa,type:t.type,key:r,ref:s,props:i,_owner:a}};Xe.createContext=function(t){return t={$$typeof:W_,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:G_,_context:t},t.Consumer=t};Xe.createElement=Ym;Xe.createFactory=function(t){var e=Ym.bind(null,t);return e.type=t,e};Xe.createRef=function(){return{current:null}};Xe.forwardRef=function(t){return{$$typeof:X_,render:t}};Xe.isValidElement=Qf;Xe.lazy=function(t){return{$$typeof:$_,_payload:{_status:-1,_result:t},_init:Q_}};Xe.memo=function(t,e){return{$$typeof:q_,type:t,compare:e===void 0?null:e}};Xe.startTransition=function(t){var e=Wo.transition;Wo.transition={};try{t()}finally{Wo.transition=e}};Xe.unstable_act=qm;Xe.useCallback=function(t,e){return rn.current.useCallback(t,e)};Xe.useContext=function(t){return rn.current.useContext(t)};Xe.useDebugValue=function(){};Xe.useDeferredValue=function(t){return rn.current.useDeferredValue(t)};Xe.useEffect=function(t,e){return rn.current.useEffect(t,e)};Xe.useId=function(){return rn.current.useId()};Xe.useImperativeHandle=function(t,e,n){return rn.current.useImperativeHandle(t,e,n)};Xe.useInsertionEffect=function(t,e){return rn.current.useInsertionEffect(t,e)};Xe.useLayoutEffect=function(t,e){return rn.current.useLayoutEffect(t,e)};Xe.useMemo=function(t,e){return rn.current.useMemo(t,e)};Xe.useReducer=function(t,e,n){return rn.current.useReducer(t,e,n)};Xe.useRef=function(t){return rn.current.useRef(t)};Xe.useState=function(t){return rn.current.useState(t)};Xe.useSyncExternalStore=function(t,e,n){return rn.current.useSyncExternalStore(t,e,n)};Xe.useTransition=function(){return rn.current.useTransition()};Xe.version="18.3.1";km.exports=Xe;var st=km.exports;const ev=B_(st);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tv=st,nv=Symbol.for("react.element"),iv=Symbol.for("react.fragment"),rv=Object.prototype.hasOwnProperty,sv=tv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,av={key:!0,ref:!0,__self:!0,__source:!0};function $m(t,e,n){var i,r={},s=null,a=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)rv.call(e,i)&&!av.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:nv,type:t,key:s,ref:a,props:r,_owner:sv.current}}Fl.Fragment=iv;Fl.jsx=$m;Fl.jsxs=$m;Bm.exports=Fl;var ie=Bm.exports,uc={},Km={exports:{}},En={},Zm={exports:{}},jm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(I,W){var Z=I.length;I.push(W);e:for(;0<Z;){var te=Z-1>>>1,oe=I[te];if(0<r(oe,W))I[te]=W,I[Z]=oe,Z=te;else break e}}function n(I){return I.length===0?null:I[0]}function i(I){if(I.length===0)return null;var W=I[0],Z=I.pop();if(Z!==W){I[0]=Z;e:for(var te=0,oe=I.length,Ve=oe>>>1;te<Ve;){var je=2*(te+1)-1,We=I[je],q=je+1,ae=I[q];if(0>r(We,Z))q<oe&&0>r(ae,We)?(I[te]=ae,I[q]=Z,te=q):(I[te]=We,I[je]=Z,te=je);else if(q<oe&&0>r(ae,Z))I[te]=ae,I[q]=Z,te=q;else break e}}return W}function r(I,W){var Z=I.sortIndex-W.sortIndex;return Z!==0?Z:I.id-W.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();t.unstable_now=function(){return a.now()-o}}var l=[],u=[],h=1,d=null,c=3,p=!1,x=!1,E=!1,g=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(I){for(var W=n(u);W!==null;){if(W.callback===null)i(u);else if(W.startTime<=I)i(u),W.sortIndex=W.expirationTime,e(l,W);else break;W=n(u)}}function S(I){if(E=!1,y(I),!x)if(n(l)!==null)x=!0,K(w);else{var W=n(u);W!==null&&z(S,W.startTime-I)}}function w(I,W){x=!1,E&&(E=!1,f(v),v=-1),p=!0;var Z=c;try{for(y(W),d=n(l);d!==null&&(!(d.expirationTime>W)||I&&!P());){var te=d.callback;if(typeof te=="function"){d.callback=null,c=d.priorityLevel;var oe=te(d.expirationTime<=W);W=t.unstable_now(),typeof oe=="function"?d.callback=oe:d===n(l)&&i(l),y(W)}else i(l);d=n(l)}if(d!==null)var Ve=!0;else{var je=n(u);je!==null&&z(S,je.startTime-W),Ve=!1}return Ve}finally{d=null,c=Z,p=!1}}var T=!1,C=null,v=-1,A=5,b=-1;function P(){return!(t.unstable_now()-b<A)}function F(){if(C!==null){var I=t.unstable_now();b=I;var W=!0;try{W=C(!0,I)}finally{W?$():(T=!1,C=null)}}else T=!1}var $;if(typeof m=="function")$=function(){m(F)};else if(typeof MessageChannel<"u"){var J=new MessageChannel,O=J.port2;J.port1.onmessage=F,$=function(){O.postMessage(null)}}else $=function(){g(F,0)};function K(I){C=I,T||(T=!0,$())}function z(I,W){v=g(function(){I(t.unstable_now())},W)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(I){I.callback=null},t.unstable_continueExecution=function(){x||p||(x=!0,K(w))},t.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<I?Math.floor(1e3/I):5},t.unstable_getCurrentPriorityLevel=function(){return c},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(I){switch(c){case 1:case 2:case 3:var W=3;break;default:W=c}var Z=c;c=W;try{return I()}finally{c=Z}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(I,W){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var Z=c;c=I;try{return W()}finally{c=Z}},t.unstable_scheduleCallback=function(I,W,Z){var te=t.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?te+Z:te):Z=te,I){case 1:var oe=-1;break;case 2:oe=250;break;case 5:oe=1073741823;break;case 4:oe=1e4;break;default:oe=5e3}return oe=Z+oe,I={id:h++,callback:W,priorityLevel:I,startTime:Z,expirationTime:oe,sortIndex:-1},Z>te?(I.sortIndex=Z,e(u,I),n(l)===null&&I===n(u)&&(E?(f(v),v=-1):E=!0,z(S,Z-te))):(I.sortIndex=oe,e(l,I),x||p||(x=!0,K(w))),I},t.unstable_shouldYield=P,t.unstable_wrapCallback=function(I){var W=c;return function(){var Z=c;c=W;try{return I.apply(this,arguments)}finally{c=Z}}}})(jm);Zm.exports=jm;var ov=Zm.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lv=st,Mn=ov;function se(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Qm=new Set,Ea={};function Or(t,e){bs(t,e),bs(t+"Capture",e)}function bs(t,e){for(Ea[t]=e,t=0;t<e.length;t++)Qm.add(e[t])}var Ai=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),cc=Object.prototype.hasOwnProperty,uv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Eh={},Th={};function cv(t){return cc.call(Th,t)?!0:cc.call(Eh,t)?!1:uv.test(t)?Th[t]=!0:(Eh[t]=!0,!1)}function fv(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function dv(t,e,n,i){if(e===null||typeof e>"u"||fv(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function sn(t,e,n,i,r,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var Ht={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ht[t]=new sn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ht[e]=new sn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ht[t]=new sn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ht[t]=new sn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ht[t]=new sn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ht[t]=new sn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ht[t]=new sn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ht[t]=new sn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ht[t]=new sn(t,5,!1,t.toLowerCase(),null,!1,!1)});var Jf=/[\-:]([a-z])/g;function ed(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Jf,ed);Ht[e]=new sn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Jf,ed);Ht[e]=new sn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Jf,ed);Ht[e]=new sn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ht[t]=new sn(t,1,!1,t.toLowerCase(),null,!1,!1)});Ht.xlinkHref=new sn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ht[t]=new sn(t,1,!1,t.toLowerCase(),null,!0,!0)});function td(t,e,n,i){var r=Ht.hasOwnProperty(e)?Ht[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(dv(e,n,r,i)&&(n=null),i||r===null?cv(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Ni=lv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,io=Symbol.for("react.element"),as=Symbol.for("react.portal"),os=Symbol.for("react.fragment"),nd=Symbol.for("react.strict_mode"),fc=Symbol.for("react.profiler"),Jm=Symbol.for("react.provider"),eg=Symbol.for("react.context"),id=Symbol.for("react.forward_ref"),dc=Symbol.for("react.suspense"),hc=Symbol.for("react.suspense_list"),rd=Symbol.for("react.memo"),Wi=Symbol.for("react.lazy"),tg=Symbol.for("react.offscreen"),wh=Symbol.iterator;function Ys(t){return t===null||typeof t!="object"?null:(t=wh&&t[wh]||t["@@iterator"],typeof t=="function"?t:null)}var Et=Object.assign,su;function aa(t){if(su===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);su=e&&e[1]||""}return`
`+su+t}var au=!1;function ou(t,e){if(!t||au)return"";au=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){i=u}t.call(e.prototype)}else{try{throw Error()}catch(u){i=u}t()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),a=r.length-1,o=s.length-1;1<=a&&0<=o&&r[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(r[a]!==s[o]){if(a!==1||o!==1)do if(a--,o--,0>o||r[a]!==s[o]){var l=`
`+r[a].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=a&&0<=o);break}}}finally{au=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?aa(t):""}function hv(t){switch(t.tag){case 5:return aa(t.type);case 16:return aa("Lazy");case 13:return aa("Suspense");case 19:return aa("SuspenseList");case 0:case 2:case 15:return t=ou(t.type,!1),t;case 11:return t=ou(t.type.render,!1),t;case 1:return t=ou(t.type,!0),t;default:return""}}function pc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case os:return"Fragment";case as:return"Portal";case fc:return"Profiler";case nd:return"StrictMode";case dc:return"Suspense";case hc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case eg:return(t.displayName||"Context")+".Consumer";case Jm:return(t._context.displayName||"Context")+".Provider";case id:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case rd:return e=t.displayName||null,e!==null?e:pc(t.type)||"Memo";case Wi:e=t._payload,t=t._init;try{return pc(t(e))}catch{}}return null}function pv(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return pc(e);case 8:return e===nd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function ar(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function ng(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function mv(t){var e=ng(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,s.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ro(t){t._valueTracker||(t._valueTracker=mv(t))}function ig(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=ng(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function ol(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function mc(t,e){var n=e.checked;return Et({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Ah(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=ar(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function rg(t,e){e=e.checked,e!=null&&td(t,"checked",e,!1)}function gc(t,e){rg(t,e);var n=ar(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?_c(t,e.type,n):e.hasOwnProperty("defaultValue")&&_c(t,e.type,ar(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Rh(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function _c(t,e,n){(e!=="number"||ol(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var oa=Array.isArray;function Ss(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+ar(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function vc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(se(91));return Et({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Ch(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(se(92));if(oa(n)){if(1<n.length)throw Error(se(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:ar(n)}}function sg(t,e){var n=ar(e.value),i=ar(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function bh(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function ag(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function xc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?ag(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var so,og=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(so=so||document.createElement("div"),so.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=so.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ta(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var da={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},gv=["Webkit","ms","Moz","O"];Object.keys(da).forEach(function(t){gv.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),da[e]=da[t]})});function lg(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||da.hasOwnProperty(t)&&da[t]?(""+e).trim():e+"px"}function ug(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=lg(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var _v=Et({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Sc(t,e){if(e){if(_v[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(se(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(se(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(se(61))}if(e.style!=null&&typeof e.style!="object")throw Error(se(62))}}function yc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Mc=null;function sd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ec=null,ys=null,Ms=null;function Ph(t){if(t=$a(t)){if(typeof Ec!="function")throw Error(se(280));var e=t.stateNode;e&&(e=Vl(e),Ec(t.stateNode,t.type,e))}}function cg(t){ys?Ms?Ms.push(t):Ms=[t]:ys=t}function fg(){if(ys){var t=ys,e=Ms;if(Ms=ys=null,Ph(t),e)for(t=0;t<e.length;t++)Ph(e[t])}}function dg(t,e){return t(e)}function hg(){}var lu=!1;function pg(t,e,n){if(lu)return t(e,n);lu=!0;try{return dg(t,e,n)}finally{lu=!1,(ys!==null||Ms!==null)&&(hg(),fg())}}function wa(t,e){var n=t.stateNode;if(n===null)return null;var i=Vl(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(se(231,e,typeof n));return n}var Tc=!1;if(Ai)try{var qs={};Object.defineProperty(qs,"passive",{get:function(){Tc=!0}}),window.addEventListener("test",qs,qs),window.removeEventListener("test",qs,qs)}catch{Tc=!1}function vv(t,e,n,i,r,s,a,o,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(h){this.onError(h)}}var ha=!1,ll=null,ul=!1,wc=null,xv={onError:function(t){ha=!0,ll=t}};function Sv(t,e,n,i,r,s,a,o,l){ha=!1,ll=null,vv.apply(xv,arguments)}function yv(t,e,n,i,r,s,a,o,l){if(Sv.apply(this,arguments),ha){if(ha){var u=ll;ha=!1,ll=null}else throw Error(se(198));ul||(ul=!0,wc=u)}}function Br(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function mg(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Lh(t){if(Br(t)!==t)throw Error(se(188))}function Mv(t){var e=t.alternate;if(!e){if(e=Br(t),e===null)throw Error(se(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Lh(r),t;if(s===i)return Lh(r),e;s=s.sibling}throw Error(se(188))}if(n.return!==i.return)n=r,i=s;else{for(var a=!1,o=r.child;o;){if(o===n){a=!0,n=r,i=s;break}if(o===i){a=!0,i=r,n=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===n){a=!0,n=s,i=r;break}if(o===i){a=!0,i=s,n=r;break}o=o.sibling}if(!a)throw Error(se(189))}}if(n.alternate!==i)throw Error(se(190))}if(n.tag!==3)throw Error(se(188));return n.stateNode.current===n?t:e}function gg(t){return t=Mv(t),t!==null?_g(t):null}function _g(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=_g(t);if(e!==null)return e;t=t.sibling}return null}var vg=Mn.unstable_scheduleCallback,Dh=Mn.unstable_cancelCallback,Ev=Mn.unstable_shouldYield,Tv=Mn.unstable_requestPaint,bt=Mn.unstable_now,wv=Mn.unstable_getCurrentPriorityLevel,ad=Mn.unstable_ImmediatePriority,xg=Mn.unstable_UserBlockingPriority,cl=Mn.unstable_NormalPriority,Av=Mn.unstable_LowPriority,Sg=Mn.unstable_IdlePriority,Ol=null,si=null;function Rv(t){if(si&&typeof si.onCommitFiberRoot=="function")try{si.onCommitFiberRoot(Ol,t,void 0,(t.current.flags&128)===128)}catch{}}var Wn=Math.clz32?Math.clz32:Pv,Cv=Math.log,bv=Math.LN2;function Pv(t){return t>>>=0,t===0?32:31-(Cv(t)/bv|0)|0}var ao=64,oo=4194304;function la(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function fl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,a=n&268435455;if(a!==0){var o=a&~r;o!==0?i=la(o):(s&=a,s!==0&&(i=la(s)))}else a=n&~r,a!==0?i=la(a):s!==0&&(i=la(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Wn(e),r=1<<n,i|=t[n],e&=~r;return i}function Lv(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Dv(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var a=31-Wn(s),o=1<<a,l=r[a];l===-1?(!(o&n)||o&i)&&(r[a]=Lv(o,e)):l<=e&&(t.expiredLanes|=o),s&=~o}}function Ac(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function yg(){var t=ao;return ao<<=1,!(ao&4194240)&&(ao=64),t}function uu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ya(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Wn(e),t[e]=n}function Nv(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Wn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function od(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Wn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var it=0;function Mg(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Eg,ld,Tg,wg,Ag,Rc=!1,lo=[],Qi=null,Ji=null,er=null,Aa=new Map,Ra=new Map,Yi=[],Iv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Nh(t,e){switch(t){case"focusin":case"focusout":Qi=null;break;case"dragenter":case"dragleave":Ji=null;break;case"mouseover":case"mouseout":er=null;break;case"pointerover":case"pointerout":Aa.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ra.delete(e.pointerId)}}function $s(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=$a(e),e!==null&&ld(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function Uv(t,e,n,i,r){switch(e){case"focusin":return Qi=$s(Qi,t,e,n,i,r),!0;case"dragenter":return Ji=$s(Ji,t,e,n,i,r),!0;case"mouseover":return er=$s(er,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Aa.set(s,$s(Aa.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Ra.set(s,$s(Ra.get(s)||null,t,e,n,i,r)),!0}return!1}function Rg(t){var e=Er(t.target);if(e!==null){var n=Br(e);if(n!==null){if(e=n.tag,e===13){if(e=mg(n),e!==null){t.blockedOn=e,Ag(t.priority,function(){Tg(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Xo(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Cc(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Mc=i,n.target.dispatchEvent(i),Mc=null}else return e=$a(n),e!==null&&ld(e),t.blockedOn=n,!1;e.shift()}return!0}function Ih(t,e,n){Xo(t)&&n.delete(e)}function Fv(){Rc=!1,Qi!==null&&Xo(Qi)&&(Qi=null),Ji!==null&&Xo(Ji)&&(Ji=null),er!==null&&Xo(er)&&(er=null),Aa.forEach(Ih),Ra.forEach(Ih)}function Ks(t,e){t.blockedOn===e&&(t.blockedOn=null,Rc||(Rc=!0,Mn.unstable_scheduleCallback(Mn.unstable_NormalPriority,Fv)))}function Ca(t){function e(r){return Ks(r,t)}if(0<lo.length){Ks(lo[0],t);for(var n=1;n<lo.length;n++){var i=lo[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Qi!==null&&Ks(Qi,t),Ji!==null&&Ks(Ji,t),er!==null&&Ks(er,t),Aa.forEach(e),Ra.forEach(e),n=0;n<Yi.length;n++)i=Yi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Yi.length&&(n=Yi[0],n.blockedOn===null);)Rg(n),n.blockedOn===null&&Yi.shift()}var Es=Ni.ReactCurrentBatchConfig,dl=!0;function Ov(t,e,n,i){var r=it,s=Es.transition;Es.transition=null;try{it=1,ud(t,e,n,i)}finally{it=r,Es.transition=s}}function Bv(t,e,n,i){var r=it,s=Es.transition;Es.transition=null;try{it=4,ud(t,e,n,i)}finally{it=r,Es.transition=s}}function ud(t,e,n,i){if(dl){var r=Cc(t,e,n,i);if(r===null)xu(t,e,i,hl,n),Nh(t,i);else if(Uv(r,t,e,n,i))i.stopPropagation();else if(Nh(t,i),e&4&&-1<Iv.indexOf(t)){for(;r!==null;){var s=$a(r);if(s!==null&&Eg(s),s=Cc(t,e,n,i),s===null&&xu(t,e,i,hl,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else xu(t,e,i,null,n)}}var hl=null;function Cc(t,e,n,i){if(hl=null,t=sd(i),t=Er(t),t!==null)if(e=Br(t),e===null)t=null;else if(n=e.tag,n===13){if(t=mg(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return hl=t,null}function Cg(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(wv()){case ad:return 1;case xg:return 4;case cl:case Av:return 16;case Sg:return 536870912;default:return 16}default:return 16}}var Ki=null,cd=null,Yo=null;function bg(){if(Yo)return Yo;var t,e=cd,n=e.length,i,r="value"in Ki?Ki.value:Ki.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var a=n-t;for(i=1;i<=a&&e[n-i]===r[s-i];i++);return Yo=r.slice(t,1<i?1-i:void 0)}function qo(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function uo(){return!0}function Uh(){return!1}function Tn(t){function e(n,i,r,s,a){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?uo:Uh,this.isPropagationStopped=Uh,this}return Et(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=uo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=uo)},persist:function(){},isPersistent:uo}),e}var Vs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},fd=Tn(Vs),qa=Et({},Vs,{view:0,detail:0}),kv=Tn(qa),cu,fu,Zs,Bl=Et({},qa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:dd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Zs&&(Zs&&t.type==="mousemove"?(cu=t.screenX-Zs.screenX,fu=t.screenY-Zs.screenY):fu=cu=0,Zs=t),cu)},movementY:function(t){return"movementY"in t?t.movementY:fu}}),Fh=Tn(Bl),zv=Et({},Bl,{dataTransfer:0}),Vv=Tn(zv),Hv=Et({},qa,{relatedTarget:0}),du=Tn(Hv),Gv=Et({},Vs,{animationName:0,elapsedTime:0,pseudoElement:0}),Wv=Tn(Gv),Xv=Et({},Vs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Yv=Tn(Xv),qv=Et({},Vs,{data:0}),Oh=Tn(qv),$v={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Kv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Zv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function jv(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Zv[t])?!!e[t]:!1}function dd(){return jv}var Qv=Et({},qa,{key:function(t){if(t.key){var e=$v[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=qo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Kv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:dd,charCode:function(t){return t.type==="keypress"?qo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?qo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Jv=Tn(Qv),ex=Et({},Bl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Bh=Tn(ex),tx=Et({},qa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:dd}),nx=Tn(tx),ix=Et({},Vs,{propertyName:0,elapsedTime:0,pseudoElement:0}),rx=Tn(ix),sx=Et({},Bl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),ax=Tn(sx),ox=[9,13,27,32],hd=Ai&&"CompositionEvent"in window,pa=null;Ai&&"documentMode"in document&&(pa=document.documentMode);var lx=Ai&&"TextEvent"in window&&!pa,Pg=Ai&&(!hd||pa&&8<pa&&11>=pa),kh=" ",zh=!1;function Lg(t,e){switch(t){case"keyup":return ox.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Dg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ls=!1;function ux(t,e){switch(t){case"compositionend":return Dg(e);case"keypress":return e.which!==32?null:(zh=!0,kh);case"textInput":return t=e.data,t===kh&&zh?null:t;default:return null}}function cx(t,e){if(ls)return t==="compositionend"||!hd&&Lg(t,e)?(t=bg(),Yo=cd=Ki=null,ls=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Pg&&e.locale!=="ko"?null:e.data;default:return null}}var fx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Vh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!fx[t.type]:e==="textarea"}function Ng(t,e,n,i){cg(i),e=pl(e,"onChange"),0<e.length&&(n=new fd("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var ma=null,ba=null;function dx(t){Wg(t,0)}function kl(t){var e=fs(t);if(ig(e))return t}function hx(t,e){if(t==="change")return e}var Ig=!1;if(Ai){var hu;if(Ai){var pu="oninput"in document;if(!pu){var Hh=document.createElement("div");Hh.setAttribute("oninput","return;"),pu=typeof Hh.oninput=="function"}hu=pu}else hu=!1;Ig=hu&&(!document.documentMode||9<document.documentMode)}function Gh(){ma&&(ma.detachEvent("onpropertychange",Ug),ba=ma=null)}function Ug(t){if(t.propertyName==="value"&&kl(ba)){var e=[];Ng(e,ba,t,sd(t)),pg(dx,e)}}function px(t,e,n){t==="focusin"?(Gh(),ma=e,ba=n,ma.attachEvent("onpropertychange",Ug)):t==="focusout"&&Gh()}function mx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return kl(ba)}function gx(t,e){if(t==="click")return kl(e)}function _x(t,e){if(t==="input"||t==="change")return kl(e)}function vx(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Yn=typeof Object.is=="function"?Object.is:vx;function Pa(t,e){if(Yn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!cc.call(e,r)||!Yn(t[r],e[r]))return!1}return!0}function Wh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Xh(t,e){var n=Wh(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Wh(n)}}function Fg(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Fg(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Og(){for(var t=window,e=ol();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=ol(t.document)}return e}function pd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function xx(t){var e=Og(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Fg(n.ownerDocument.documentElement,n)){if(i!==null&&pd(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Xh(n,s);var a=Xh(n,i);r&&a&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Sx=Ai&&"documentMode"in document&&11>=document.documentMode,us=null,bc=null,ga=null,Pc=!1;function Yh(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Pc||us==null||us!==ol(i)||(i=us,"selectionStart"in i&&pd(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),ga&&Pa(ga,i)||(ga=i,i=pl(bc,"onSelect"),0<i.length&&(e=new fd("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=us)))}function co(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var cs={animationend:co("Animation","AnimationEnd"),animationiteration:co("Animation","AnimationIteration"),animationstart:co("Animation","AnimationStart"),transitionend:co("Transition","TransitionEnd")},mu={},Bg={};Ai&&(Bg=document.createElement("div").style,"AnimationEvent"in window||(delete cs.animationend.animation,delete cs.animationiteration.animation,delete cs.animationstart.animation),"TransitionEvent"in window||delete cs.transitionend.transition);function zl(t){if(mu[t])return mu[t];if(!cs[t])return t;var e=cs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Bg)return mu[t]=e[n];return t}var kg=zl("animationend"),zg=zl("animationiteration"),Vg=zl("animationstart"),Hg=zl("transitionend"),Gg=new Map,qh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ur(t,e){Gg.set(t,e),Or(e,[t])}for(var gu=0;gu<qh.length;gu++){var _u=qh[gu],yx=_u.toLowerCase(),Mx=_u[0].toUpperCase()+_u.slice(1);ur(yx,"on"+Mx)}ur(kg,"onAnimationEnd");ur(zg,"onAnimationIteration");ur(Vg,"onAnimationStart");ur("dblclick","onDoubleClick");ur("focusin","onFocus");ur("focusout","onBlur");ur(Hg,"onTransitionEnd");bs("onMouseEnter",["mouseout","mouseover"]);bs("onMouseLeave",["mouseout","mouseover"]);bs("onPointerEnter",["pointerout","pointerover"]);bs("onPointerLeave",["pointerout","pointerover"]);Or("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Or("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Or("onBeforeInput",["compositionend","keypress","textInput","paste"]);Or("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Or("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Or("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ua="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ex=new Set("cancel close invalid load scroll toggle".split(" ").concat(ua));function $h(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,yv(i,e,void 0,t),t.currentTarget=null}function Wg(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var a=i.length-1;0<=a;a--){var o=i[a],l=o.instance,u=o.currentTarget;if(o=o.listener,l!==s&&r.isPropagationStopped())break e;$h(r,o,u),s=l}else for(a=0;a<i.length;a++){if(o=i[a],l=o.instance,u=o.currentTarget,o=o.listener,l!==s&&r.isPropagationStopped())break e;$h(r,o,u),s=l}}}if(ul)throw t=wc,ul=!1,wc=null,t}function mt(t,e){var n=e[Uc];n===void 0&&(n=e[Uc]=new Set);var i=t+"__bubble";n.has(i)||(Xg(e,t,2,!1),n.add(i))}function vu(t,e,n){var i=0;e&&(i|=4),Xg(n,t,i,e)}var fo="_reactListening"+Math.random().toString(36).slice(2);function La(t){if(!t[fo]){t[fo]=!0,Qm.forEach(function(n){n!=="selectionchange"&&(Ex.has(n)||vu(n,!1,t),vu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[fo]||(e[fo]=!0,vu("selectionchange",!1,e))}}function Xg(t,e,n,i){switch(Cg(e)){case 1:var r=Ov;break;case 4:r=Bv;break;default:r=ud}n=r.bind(null,e,n,t),r=void 0,!Tc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function xu(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var o=i.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;a=a.return}for(;o!==null;){if(a=Er(o),a===null)return;if(l=a.tag,l===5||l===6){i=s=a;continue e}o=o.parentNode}}i=i.return}pg(function(){var u=s,h=sd(n),d=[];e:{var c=Gg.get(t);if(c!==void 0){var p=fd,x=t;switch(t){case"keypress":if(qo(n)===0)break e;case"keydown":case"keyup":p=Jv;break;case"focusin":x="focus",p=du;break;case"focusout":x="blur",p=du;break;case"beforeblur":case"afterblur":p=du;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Fh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=Vv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=nx;break;case kg:case zg:case Vg:p=Wv;break;case Hg:p=rx;break;case"scroll":p=kv;break;case"wheel":p=ax;break;case"copy":case"cut":case"paste":p=Yv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Bh}var E=(e&4)!==0,g=!E&&t==="scroll",f=E?c!==null?c+"Capture":null:c;E=[];for(var m=u,y;m!==null;){y=m;var S=y.stateNode;if(y.tag===5&&S!==null&&(y=S,f!==null&&(S=wa(m,f),S!=null&&E.push(Da(m,S,y)))),g)break;m=m.return}0<E.length&&(c=new p(c,x,null,n,h),d.push({event:c,listeners:E}))}}if(!(e&7)){e:{if(c=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",c&&n!==Mc&&(x=n.relatedTarget||n.fromElement)&&(Er(x)||x[Ri]))break e;if((p||c)&&(c=h.window===h?h:(c=h.ownerDocument)?c.defaultView||c.parentWindow:window,p?(x=n.relatedTarget||n.toElement,p=u,x=x?Er(x):null,x!==null&&(g=Br(x),x!==g||x.tag!==5&&x.tag!==6)&&(x=null)):(p=null,x=u),p!==x)){if(E=Fh,S="onMouseLeave",f="onMouseEnter",m="mouse",(t==="pointerout"||t==="pointerover")&&(E=Bh,S="onPointerLeave",f="onPointerEnter",m="pointer"),g=p==null?c:fs(p),y=x==null?c:fs(x),c=new E(S,m+"leave",p,n,h),c.target=g,c.relatedTarget=y,S=null,Er(h)===u&&(E=new E(f,m+"enter",x,n,h),E.target=y,E.relatedTarget=g,S=E),g=S,p&&x)t:{for(E=p,f=x,m=0,y=E;y;y=Hr(y))m++;for(y=0,S=f;S;S=Hr(S))y++;for(;0<m-y;)E=Hr(E),m--;for(;0<y-m;)f=Hr(f),y--;for(;m--;){if(E===f||f!==null&&E===f.alternate)break t;E=Hr(E),f=Hr(f)}E=null}else E=null;p!==null&&Kh(d,c,p,E,!1),x!==null&&g!==null&&Kh(d,g,x,E,!0)}}e:{if(c=u?fs(u):window,p=c.nodeName&&c.nodeName.toLowerCase(),p==="select"||p==="input"&&c.type==="file")var w=hx;else if(Vh(c))if(Ig)w=_x;else{w=mx;var T=px}else(p=c.nodeName)&&p.toLowerCase()==="input"&&(c.type==="checkbox"||c.type==="radio")&&(w=gx);if(w&&(w=w(t,u))){Ng(d,w,n,h);break e}T&&T(t,c,u),t==="focusout"&&(T=c._wrapperState)&&T.controlled&&c.type==="number"&&_c(c,"number",c.value)}switch(T=u?fs(u):window,t){case"focusin":(Vh(T)||T.contentEditable==="true")&&(us=T,bc=u,ga=null);break;case"focusout":ga=bc=us=null;break;case"mousedown":Pc=!0;break;case"contextmenu":case"mouseup":case"dragend":Pc=!1,Yh(d,n,h);break;case"selectionchange":if(Sx)break;case"keydown":case"keyup":Yh(d,n,h)}var C;if(hd)e:{switch(t){case"compositionstart":var v="onCompositionStart";break e;case"compositionend":v="onCompositionEnd";break e;case"compositionupdate":v="onCompositionUpdate";break e}v=void 0}else ls?Lg(t,n)&&(v="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(v="onCompositionStart");v&&(Pg&&n.locale!=="ko"&&(ls||v!=="onCompositionStart"?v==="onCompositionEnd"&&ls&&(C=bg()):(Ki=h,cd="value"in Ki?Ki.value:Ki.textContent,ls=!0)),T=pl(u,v),0<T.length&&(v=new Oh(v,t,null,n,h),d.push({event:v,listeners:T}),C?v.data=C:(C=Dg(n),C!==null&&(v.data=C)))),(C=lx?ux(t,n):cx(t,n))&&(u=pl(u,"onBeforeInput"),0<u.length&&(h=new Oh("onBeforeInput","beforeinput",null,n,h),d.push({event:h,listeners:u}),h.data=C))}Wg(d,e)})}function Da(t,e,n){return{instance:t,listener:e,currentTarget:n}}function pl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=wa(t,n),s!=null&&i.unshift(Da(t,s,r)),s=wa(t,e),s!=null&&i.push(Da(t,s,r))),t=t.return}return i}function Hr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Kh(t,e,n,i,r){for(var s=e._reactName,a=[];n!==null&&n!==i;){var o=n,l=o.alternate,u=o.stateNode;if(l!==null&&l===i)break;o.tag===5&&u!==null&&(o=u,r?(l=wa(n,s),l!=null&&a.unshift(Da(n,l,o))):r||(l=wa(n,s),l!=null&&a.push(Da(n,l,o)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var Tx=/\r\n?/g,wx=/\u0000|\uFFFD/g;function Zh(t){return(typeof t=="string"?t:""+t).replace(Tx,`
`).replace(wx,"")}function ho(t,e,n){if(e=Zh(e),Zh(t)!==e&&n)throw Error(se(425))}function ml(){}var Lc=null,Dc=null;function Nc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Ic=typeof setTimeout=="function"?setTimeout:void 0,Ax=typeof clearTimeout=="function"?clearTimeout:void 0,jh=typeof Promise=="function"?Promise:void 0,Rx=typeof queueMicrotask=="function"?queueMicrotask:typeof jh<"u"?function(t){return jh.resolve(null).then(t).catch(Cx)}:Ic;function Cx(t){setTimeout(function(){throw t})}function Su(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Ca(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Ca(e)}function tr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Qh(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Hs=Math.random().toString(36).slice(2),ni="__reactFiber$"+Hs,Na="__reactProps$"+Hs,Ri="__reactContainer$"+Hs,Uc="__reactEvents$"+Hs,bx="__reactListeners$"+Hs,Px="__reactHandles$"+Hs;function Er(t){var e=t[ni];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ri]||n[ni]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Qh(t);t!==null;){if(n=t[ni])return n;t=Qh(t)}return e}t=n,n=t.parentNode}return null}function $a(t){return t=t[ni]||t[Ri],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function fs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(se(33))}function Vl(t){return t[Na]||null}var Fc=[],ds=-1;function cr(t){return{current:t}}function gt(t){0>ds||(t.current=Fc[ds],Fc[ds]=null,ds--)}function ft(t,e){ds++,Fc[ds]=t.current,t.current=e}var or={},Qt=cr(or),cn=cr(!1),Pr=or;function Ps(t,e){var n=t.type.contextTypes;if(!n)return or;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function fn(t){return t=t.childContextTypes,t!=null}function gl(){gt(cn),gt(Qt)}function Jh(t,e,n){if(Qt.current!==or)throw Error(se(168));ft(Qt,e),ft(cn,n)}function Yg(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(se(108,pv(t)||"Unknown",r));return Et({},n,i)}function _l(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||or,Pr=Qt.current,ft(Qt,t),ft(cn,cn.current),!0}function ep(t,e,n){var i=t.stateNode;if(!i)throw Error(se(169));n?(t=Yg(t,e,Pr),i.__reactInternalMemoizedMergedChildContext=t,gt(cn),gt(Qt),ft(Qt,t)):gt(cn),ft(cn,n)}var vi=null,Hl=!1,yu=!1;function qg(t){vi===null?vi=[t]:vi.push(t)}function Lx(t){Hl=!0,qg(t)}function fr(){if(!yu&&vi!==null){yu=!0;var t=0,e=it;try{var n=vi;for(it=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}vi=null,Hl=!1}catch(r){throw vi!==null&&(vi=vi.slice(t+1)),vg(ad,fr),r}finally{it=e,yu=!1}}return null}var hs=[],ps=0,vl=null,xl=0,Rn=[],Cn=0,Lr=null,Si=1,yi="";function _r(t,e){hs[ps++]=xl,hs[ps++]=vl,vl=t,xl=e}function $g(t,e,n){Rn[Cn++]=Si,Rn[Cn++]=yi,Rn[Cn++]=Lr,Lr=t;var i=Si;t=yi;var r=32-Wn(i)-1;i&=~(1<<r),n+=1;var s=32-Wn(e)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,Si=1<<32-Wn(e)+r|n<<r|i,yi=s+t}else Si=1<<s|n<<r|i,yi=t}function md(t){t.return!==null&&(_r(t,1),$g(t,1,0))}function gd(t){for(;t===vl;)vl=hs[--ps],hs[ps]=null,xl=hs[--ps],hs[ps]=null;for(;t===Lr;)Lr=Rn[--Cn],Rn[Cn]=null,yi=Rn[--Cn],Rn[Cn]=null,Si=Rn[--Cn],Rn[Cn]=null}var yn=null,xn=null,vt=!1,Vn=null;function Kg(t,e){var n=Pn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function tp(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,yn=t,xn=tr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,yn=t,xn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Lr!==null?{id:Si,overflow:yi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Pn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,yn=t,xn=null,!0):!1;default:return!1}}function Oc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Bc(t){if(vt){var e=xn;if(e){var n=e;if(!tp(t,e)){if(Oc(t))throw Error(se(418));e=tr(n.nextSibling);var i=yn;e&&tp(t,e)?Kg(i,n):(t.flags=t.flags&-4097|2,vt=!1,yn=t)}}else{if(Oc(t))throw Error(se(418));t.flags=t.flags&-4097|2,vt=!1,yn=t}}}function np(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;yn=t}function po(t){if(t!==yn)return!1;if(!vt)return np(t),vt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Nc(t.type,t.memoizedProps)),e&&(e=xn)){if(Oc(t))throw Zg(),Error(se(418));for(;e;)Kg(t,e),e=tr(e.nextSibling)}if(np(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(se(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){xn=tr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}xn=null}}else xn=yn?tr(t.stateNode.nextSibling):null;return!0}function Zg(){for(var t=xn;t;)t=tr(t.nextSibling)}function Ls(){xn=yn=null,vt=!1}function _d(t){Vn===null?Vn=[t]:Vn.push(t)}var Dx=Ni.ReactCurrentBatchConfig;function js(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(se(309));var i=n.stateNode}if(!i)throw Error(se(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var o=r.refs;a===null?delete o[s]:o[s]=a},e._stringRef=s,e)}if(typeof t!="string")throw Error(se(284));if(!n._owner)throw Error(se(290,t))}return t}function mo(t,e){throw t=Object.prototype.toString.call(e),Error(se(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function ip(t){var e=t._init;return e(t._payload)}function jg(t){function e(f,m){if(t){var y=f.deletions;y===null?(f.deletions=[m],f.flags|=16):y.push(m)}}function n(f,m){if(!t)return null;for(;m!==null;)e(f,m),m=m.sibling;return null}function i(f,m){for(f=new Map;m!==null;)m.key!==null?f.set(m.key,m):f.set(m.index,m),m=m.sibling;return f}function r(f,m){return f=sr(f,m),f.index=0,f.sibling=null,f}function s(f,m,y){return f.index=y,t?(y=f.alternate,y!==null?(y=y.index,y<m?(f.flags|=2,m):y):(f.flags|=2,m)):(f.flags|=1048576,m)}function a(f){return t&&f.alternate===null&&(f.flags|=2),f}function o(f,m,y,S){return m===null||m.tag!==6?(m=Cu(y,f.mode,S),m.return=f,m):(m=r(m,y),m.return=f,m)}function l(f,m,y,S){var w=y.type;return w===os?h(f,m,y.props.children,S,y.key):m!==null&&(m.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===Wi&&ip(w)===m.type)?(S=r(m,y.props),S.ref=js(f,m,y),S.return=f,S):(S=el(y.type,y.key,y.props,null,f.mode,S),S.ref=js(f,m,y),S.return=f,S)}function u(f,m,y,S){return m===null||m.tag!==4||m.stateNode.containerInfo!==y.containerInfo||m.stateNode.implementation!==y.implementation?(m=bu(y,f.mode,S),m.return=f,m):(m=r(m,y.children||[]),m.return=f,m)}function h(f,m,y,S,w){return m===null||m.tag!==7?(m=br(y,f.mode,S,w),m.return=f,m):(m=r(m,y),m.return=f,m)}function d(f,m,y){if(typeof m=="string"&&m!==""||typeof m=="number")return m=Cu(""+m,f.mode,y),m.return=f,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case io:return y=el(m.type,m.key,m.props,null,f.mode,y),y.ref=js(f,null,m),y.return=f,y;case as:return m=bu(m,f.mode,y),m.return=f,m;case Wi:var S=m._init;return d(f,S(m._payload),y)}if(oa(m)||Ys(m))return m=br(m,f.mode,y,null),m.return=f,m;mo(f,m)}return null}function c(f,m,y,S){var w=m!==null?m.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return w!==null?null:o(f,m,""+y,S);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case io:return y.key===w?l(f,m,y,S):null;case as:return y.key===w?u(f,m,y,S):null;case Wi:return w=y._init,c(f,m,w(y._payload),S)}if(oa(y)||Ys(y))return w!==null?null:h(f,m,y,S,null);mo(f,y)}return null}function p(f,m,y,S,w){if(typeof S=="string"&&S!==""||typeof S=="number")return f=f.get(y)||null,o(m,f,""+S,w);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case io:return f=f.get(S.key===null?y:S.key)||null,l(m,f,S,w);case as:return f=f.get(S.key===null?y:S.key)||null,u(m,f,S,w);case Wi:var T=S._init;return p(f,m,y,T(S._payload),w)}if(oa(S)||Ys(S))return f=f.get(y)||null,h(m,f,S,w,null);mo(m,S)}return null}function x(f,m,y,S){for(var w=null,T=null,C=m,v=m=0,A=null;C!==null&&v<y.length;v++){C.index>v?(A=C,C=null):A=C.sibling;var b=c(f,C,y[v],S);if(b===null){C===null&&(C=A);break}t&&C&&b.alternate===null&&e(f,C),m=s(b,m,v),T===null?w=b:T.sibling=b,T=b,C=A}if(v===y.length)return n(f,C),vt&&_r(f,v),w;if(C===null){for(;v<y.length;v++)C=d(f,y[v],S),C!==null&&(m=s(C,m,v),T===null?w=C:T.sibling=C,T=C);return vt&&_r(f,v),w}for(C=i(f,C);v<y.length;v++)A=p(C,f,v,y[v],S),A!==null&&(t&&A.alternate!==null&&C.delete(A.key===null?v:A.key),m=s(A,m,v),T===null?w=A:T.sibling=A,T=A);return t&&C.forEach(function(P){return e(f,P)}),vt&&_r(f,v),w}function E(f,m,y,S){var w=Ys(y);if(typeof w!="function")throw Error(se(150));if(y=w.call(y),y==null)throw Error(se(151));for(var T=w=null,C=m,v=m=0,A=null,b=y.next();C!==null&&!b.done;v++,b=y.next()){C.index>v?(A=C,C=null):A=C.sibling;var P=c(f,C,b.value,S);if(P===null){C===null&&(C=A);break}t&&C&&P.alternate===null&&e(f,C),m=s(P,m,v),T===null?w=P:T.sibling=P,T=P,C=A}if(b.done)return n(f,C),vt&&_r(f,v),w;if(C===null){for(;!b.done;v++,b=y.next())b=d(f,b.value,S),b!==null&&(m=s(b,m,v),T===null?w=b:T.sibling=b,T=b);return vt&&_r(f,v),w}for(C=i(f,C);!b.done;v++,b=y.next())b=p(C,f,v,b.value,S),b!==null&&(t&&b.alternate!==null&&C.delete(b.key===null?v:b.key),m=s(b,m,v),T===null?w=b:T.sibling=b,T=b);return t&&C.forEach(function(F){return e(f,F)}),vt&&_r(f,v),w}function g(f,m,y,S){if(typeof y=="object"&&y!==null&&y.type===os&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case io:e:{for(var w=y.key,T=m;T!==null;){if(T.key===w){if(w=y.type,w===os){if(T.tag===7){n(f,T.sibling),m=r(T,y.props.children),m.return=f,f=m;break e}}else if(T.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===Wi&&ip(w)===T.type){n(f,T.sibling),m=r(T,y.props),m.ref=js(f,T,y),m.return=f,f=m;break e}n(f,T);break}else e(f,T);T=T.sibling}y.type===os?(m=br(y.props.children,f.mode,S,y.key),m.return=f,f=m):(S=el(y.type,y.key,y.props,null,f.mode,S),S.ref=js(f,m,y),S.return=f,f=S)}return a(f);case as:e:{for(T=y.key;m!==null;){if(m.key===T)if(m.tag===4&&m.stateNode.containerInfo===y.containerInfo&&m.stateNode.implementation===y.implementation){n(f,m.sibling),m=r(m,y.children||[]),m.return=f,f=m;break e}else{n(f,m);break}else e(f,m);m=m.sibling}m=bu(y,f.mode,S),m.return=f,f=m}return a(f);case Wi:return T=y._init,g(f,m,T(y._payload),S)}if(oa(y))return x(f,m,y,S);if(Ys(y))return E(f,m,y,S);mo(f,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,m!==null&&m.tag===6?(n(f,m.sibling),m=r(m,y),m.return=f,f=m):(n(f,m),m=Cu(y,f.mode,S),m.return=f,f=m),a(f)):n(f,m)}return g}var Ds=jg(!0),Qg=jg(!1),Sl=cr(null),yl=null,ms=null,vd=null;function xd(){vd=ms=yl=null}function Sd(t){var e=Sl.current;gt(Sl),t._currentValue=e}function kc(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Ts(t,e){yl=t,vd=ms=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(un=!0),t.firstContext=null)}function Nn(t){var e=t._currentValue;if(vd!==t)if(t={context:t,memoizedValue:e,next:null},ms===null){if(yl===null)throw Error(se(308));ms=t,yl.dependencies={lanes:0,firstContext:t}}else ms=ms.next=t;return e}var Tr=null;function yd(t){Tr===null?Tr=[t]:Tr.push(t)}function Jg(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,yd(e)):(n.next=r.next,r.next=n),e.interleaved=n,Ci(t,i)}function Ci(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Xi=!1;function Md(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function e0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ei(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function nr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Je&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Ci(t,n)}return r=i.interleaved,r===null?(e.next=e,yd(i)):(e.next=r.next,r.next=e),i.interleaved=e,Ci(t,n)}function $o(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,od(t,n)}}function rp(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Ml(t,e,n,i){var r=t.updateQueue;Xi=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var l=o,u=l.next;l.next=null,a===null?s=u:a.next=u,a=l;var h=t.alternate;h!==null&&(h=h.updateQueue,o=h.lastBaseUpdate,o!==a&&(o===null?h.firstBaseUpdate=u:o.next=u,h.lastBaseUpdate=l))}if(s!==null){var d=r.baseState;a=0,h=u=l=null,o=s;do{var c=o.lane,p=o.eventTime;if((i&c)===c){h!==null&&(h=h.next={eventTime:p,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var x=t,E=o;switch(c=e,p=n,E.tag){case 1:if(x=E.payload,typeof x=="function"){d=x.call(p,d,c);break e}d=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=E.payload,c=typeof x=="function"?x.call(p,d,c):x,c==null)break e;d=Et({},d,c);break e;case 2:Xi=!0}}o.callback!==null&&o.lane!==0&&(t.flags|=64,c=r.effects,c===null?r.effects=[o]:c.push(o))}else p={eventTime:p,lane:c,tag:o.tag,payload:o.payload,callback:o.callback,next:null},h===null?(u=h=p,l=d):h=h.next=p,a|=c;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;c=o,o=c.next,c.next=null,r.lastBaseUpdate=c,r.shared.pending=null}}while(!0);if(h===null&&(l=d),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=h,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Nr|=a,t.lanes=a,t.memoizedState=d}}function sp(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(se(191,r));r.call(i)}}}var Ka={},ai=cr(Ka),Ia=cr(Ka),Ua=cr(Ka);function wr(t){if(t===Ka)throw Error(se(174));return t}function Ed(t,e){switch(ft(Ua,e),ft(Ia,t),ft(ai,Ka),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:xc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=xc(e,t)}gt(ai),ft(ai,e)}function Ns(){gt(ai),gt(Ia),gt(Ua)}function t0(t){wr(Ua.current);var e=wr(ai.current),n=xc(e,t.type);e!==n&&(ft(Ia,t),ft(ai,n))}function Td(t){Ia.current===t&&(gt(ai),gt(Ia))}var xt=cr(0);function El(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Mu=[];function wd(){for(var t=0;t<Mu.length;t++)Mu[t]._workInProgressVersionPrimary=null;Mu.length=0}var Ko=Ni.ReactCurrentDispatcher,Eu=Ni.ReactCurrentBatchConfig,Dr=0,yt=null,Dt=null,Ot=null,Tl=!1,_a=!1,Fa=0,Nx=0;function Wt(){throw Error(se(321))}function Ad(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Yn(t[n],e[n]))return!1;return!0}function Rd(t,e,n,i,r,s){if(Dr=s,yt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ko.current=t===null||t.memoizedState===null?Ox:Bx,t=n(i,r),_a){s=0;do{if(_a=!1,Fa=0,25<=s)throw Error(se(301));s+=1,Ot=Dt=null,e.updateQueue=null,Ko.current=kx,t=n(i,r)}while(_a)}if(Ko.current=wl,e=Dt!==null&&Dt.next!==null,Dr=0,Ot=Dt=yt=null,Tl=!1,e)throw Error(se(300));return t}function Cd(){var t=Fa!==0;return Fa=0,t}function ei(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ot===null?yt.memoizedState=Ot=t:Ot=Ot.next=t,Ot}function In(){if(Dt===null){var t=yt.alternate;t=t!==null?t.memoizedState:null}else t=Dt.next;var e=Ot===null?yt.memoizedState:Ot.next;if(e!==null)Ot=e,Dt=t;else{if(t===null)throw Error(se(310));Dt=t,t={memoizedState:Dt.memoizedState,baseState:Dt.baseState,baseQueue:Dt.baseQueue,queue:Dt.queue,next:null},Ot===null?yt.memoizedState=Ot=t:Ot=Ot.next=t}return Ot}function Oa(t,e){return typeof e=="function"?e(t):e}function Tu(t){var e=In(),n=e.queue;if(n===null)throw Error(se(311));n.lastRenderedReducer=t;var i=Dt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var o=a=null,l=null,u=s;do{var h=u.lane;if((Dr&h)===h)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:t(i,u.action);else{var d={lane:h,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(o=l=d,a=i):l=l.next=d,yt.lanes|=h,Nr|=h}u=u.next}while(u!==null&&u!==s);l===null?a=i:l.next=o,Yn(i,e.memoizedState)||(un=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,yt.lanes|=s,Nr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function wu(t){var e=In(),n=e.queue;if(n===null)throw Error(se(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var a=r=r.next;do s=t(s,a.action),a=a.next;while(a!==r);Yn(s,e.memoizedState)||(un=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function n0(){}function i0(t,e){var n=yt,i=In(),r=e(),s=!Yn(i.memoizedState,r);if(s&&(i.memoizedState=r,un=!0),i=i.queue,bd(a0.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Ot!==null&&Ot.memoizedState.tag&1){if(n.flags|=2048,Ba(9,s0.bind(null,n,i,r,e),void 0,null),Bt===null)throw Error(se(349));Dr&30||r0(n,e,r)}return r}function r0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=yt.updateQueue,e===null?(e={lastEffect:null,stores:null},yt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function s0(t,e,n,i){e.value=n,e.getSnapshot=i,o0(e)&&l0(t)}function a0(t,e,n){return n(function(){o0(e)&&l0(t)})}function o0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Yn(t,n)}catch{return!0}}function l0(t){var e=Ci(t,1);e!==null&&Xn(e,t,1,-1)}function ap(t){var e=ei();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Oa,lastRenderedState:t},e.queue=t,t=t.dispatch=Fx.bind(null,yt,t),[e.memoizedState,t]}function Ba(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=yt.updateQueue,e===null?(e={lastEffect:null,stores:null},yt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function u0(){return In().memoizedState}function Zo(t,e,n,i){var r=ei();yt.flags|=t,r.memoizedState=Ba(1|e,n,void 0,i===void 0?null:i)}function Gl(t,e,n,i){var r=In();i=i===void 0?null:i;var s=void 0;if(Dt!==null){var a=Dt.memoizedState;if(s=a.destroy,i!==null&&Ad(i,a.deps)){r.memoizedState=Ba(e,n,s,i);return}}yt.flags|=t,r.memoizedState=Ba(1|e,n,s,i)}function op(t,e){return Zo(8390656,8,t,e)}function bd(t,e){return Gl(2048,8,t,e)}function c0(t,e){return Gl(4,2,t,e)}function f0(t,e){return Gl(4,4,t,e)}function d0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function h0(t,e,n){return n=n!=null?n.concat([t]):null,Gl(4,4,d0.bind(null,e,t),n)}function Pd(){}function p0(t,e){var n=In();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Ad(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function m0(t,e){var n=In();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Ad(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function g0(t,e,n){return Dr&21?(Yn(n,e)||(n=yg(),yt.lanes|=n,Nr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,un=!0),t.memoizedState=n)}function Ix(t,e){var n=it;it=n!==0&&4>n?n:4,t(!0);var i=Eu.transition;Eu.transition={};try{t(!1),e()}finally{it=n,Eu.transition=i}}function _0(){return In().memoizedState}function Ux(t,e,n){var i=rr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},v0(t))x0(e,n);else if(n=Jg(t,e,n,i),n!==null){var r=nn();Xn(n,t,i,r),S0(n,e,i)}}function Fx(t,e,n){var i=rr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(v0(t))x0(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,o=s(a,n);if(r.hasEagerState=!0,r.eagerState=o,Yn(o,a)){var l=e.interleaved;l===null?(r.next=r,yd(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=Jg(t,e,r,i),n!==null&&(r=nn(),Xn(n,t,i,r),S0(n,e,i))}}function v0(t){var e=t.alternate;return t===yt||e!==null&&e===yt}function x0(t,e){_a=Tl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function S0(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,od(t,n)}}var wl={readContext:Nn,useCallback:Wt,useContext:Wt,useEffect:Wt,useImperativeHandle:Wt,useInsertionEffect:Wt,useLayoutEffect:Wt,useMemo:Wt,useReducer:Wt,useRef:Wt,useState:Wt,useDebugValue:Wt,useDeferredValue:Wt,useTransition:Wt,useMutableSource:Wt,useSyncExternalStore:Wt,useId:Wt,unstable_isNewReconciler:!1},Ox={readContext:Nn,useCallback:function(t,e){return ei().memoizedState=[t,e===void 0?null:e],t},useContext:Nn,useEffect:op,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Zo(4194308,4,d0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Zo(4194308,4,t,e)},useInsertionEffect:function(t,e){return Zo(4,2,t,e)},useMemo:function(t,e){var n=ei();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=ei();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=Ux.bind(null,yt,t),[i.memoizedState,t]},useRef:function(t){var e=ei();return t={current:t},e.memoizedState=t},useState:ap,useDebugValue:Pd,useDeferredValue:function(t){return ei().memoizedState=t},useTransition:function(){var t=ap(!1),e=t[0];return t=Ix.bind(null,t[1]),ei().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=yt,r=ei();if(vt){if(n===void 0)throw Error(se(407));n=n()}else{if(n=e(),Bt===null)throw Error(se(349));Dr&30||r0(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,op(a0.bind(null,i,s,t),[t]),i.flags|=2048,Ba(9,s0.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=ei(),e=Bt.identifierPrefix;if(vt){var n=yi,i=Si;n=(i&~(1<<32-Wn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Fa++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Nx++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Bx={readContext:Nn,useCallback:p0,useContext:Nn,useEffect:bd,useImperativeHandle:h0,useInsertionEffect:c0,useLayoutEffect:f0,useMemo:m0,useReducer:Tu,useRef:u0,useState:function(){return Tu(Oa)},useDebugValue:Pd,useDeferredValue:function(t){var e=In();return g0(e,Dt.memoizedState,t)},useTransition:function(){var t=Tu(Oa)[0],e=In().memoizedState;return[t,e]},useMutableSource:n0,useSyncExternalStore:i0,useId:_0,unstable_isNewReconciler:!1},kx={readContext:Nn,useCallback:p0,useContext:Nn,useEffect:bd,useImperativeHandle:h0,useInsertionEffect:c0,useLayoutEffect:f0,useMemo:m0,useReducer:wu,useRef:u0,useState:function(){return wu(Oa)},useDebugValue:Pd,useDeferredValue:function(t){var e=In();return Dt===null?e.memoizedState=t:g0(e,Dt.memoizedState,t)},useTransition:function(){var t=wu(Oa)[0],e=In().memoizedState;return[t,e]},useMutableSource:n0,useSyncExternalStore:i0,useId:_0,unstable_isNewReconciler:!1};function kn(t,e){if(t&&t.defaultProps){e=Et({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function zc(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:Et({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Wl={isMounted:function(t){return(t=t._reactInternals)?Br(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=nn(),r=rr(t),s=Ei(i,r);s.payload=e,n!=null&&(s.callback=n),e=nr(t,s,r),e!==null&&(Xn(e,t,r,i),$o(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=nn(),r=rr(t),s=Ei(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=nr(t,s,r),e!==null&&(Xn(e,t,r,i),$o(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=nn(),i=rr(t),r=Ei(n,i);r.tag=2,e!=null&&(r.callback=e),e=nr(t,r,i),e!==null&&(Xn(e,t,i,n),$o(e,t,i))}};function lp(t,e,n,i,r,s,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,a):e.prototype&&e.prototype.isPureReactComponent?!Pa(n,i)||!Pa(r,s):!0}function y0(t,e,n){var i=!1,r=or,s=e.contextType;return typeof s=="object"&&s!==null?s=Nn(s):(r=fn(e)?Pr:Qt.current,i=e.contextTypes,s=(i=i!=null)?Ps(t,r):or),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Wl,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function up(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Wl.enqueueReplaceState(e,e.state,null)}function Vc(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Md(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Nn(s):(s=fn(e)?Pr:Qt.current,r.context=Ps(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(zc(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Wl.enqueueReplaceState(r,r.state,null),Ml(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Is(t,e){try{var n="",i=e;do n+=hv(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Au(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Hc(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var zx=typeof WeakMap=="function"?WeakMap:Map;function M0(t,e,n){n=Ei(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Rl||(Rl=!0,Qc=i),Hc(t,e)},n}function E0(t,e,n){n=Ei(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Hc(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Hc(t,e),typeof i!="function"&&(ir===null?ir=new Set([this]):ir.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function cp(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new zx;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=eS.bind(null,t,e,n),e.then(t,t))}function fp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function dp(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Ei(-1,1),e.tag=2,nr(n,e,1))),n.lanes|=1),t)}var Vx=Ni.ReactCurrentOwner,un=!1;function tn(t,e,n,i){e.child=t===null?Qg(e,null,n,i):Ds(e,t.child,n,i)}function hp(t,e,n,i,r){n=n.render;var s=e.ref;return Ts(e,r),i=Rd(t,e,n,i,s,r),n=Cd(),t!==null&&!un?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,bi(t,e,r)):(vt&&n&&md(e),e.flags|=1,tn(t,e,i,r),e.child)}function pp(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Bd(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,T0(t,e,s,i,r)):(t=el(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:Pa,n(a,i)&&t.ref===e.ref)return bi(t,e,r)}return e.flags|=1,t=sr(s,i),t.ref=e.ref,t.return=e,e.child=t}function T0(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Pa(s,i)&&t.ref===e.ref)if(un=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(un=!0);else return e.lanes=t.lanes,bi(t,e,r)}return Gc(t,e,n,i,r)}function w0(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ft(_s,_n),_n|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ft(_s,_n),_n|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,ft(_s,_n),_n|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,ft(_s,_n),_n|=i;return tn(t,e,r,n),e.child}function A0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Gc(t,e,n,i,r){var s=fn(n)?Pr:Qt.current;return s=Ps(e,s),Ts(e,r),n=Rd(t,e,n,i,s,r),i=Cd(),t!==null&&!un?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,bi(t,e,r)):(vt&&i&&md(e),e.flags|=1,tn(t,e,n,r),e.child)}function mp(t,e,n,i,r){if(fn(n)){var s=!0;_l(e)}else s=!1;if(Ts(e,r),e.stateNode===null)jo(t,e),y0(e,n,i),Vc(e,n,i,r),i=!0;else if(t===null){var a=e.stateNode,o=e.memoizedProps;a.props=o;var l=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=Nn(u):(u=fn(n)?Pr:Qt.current,u=Ps(e,u));var h=n.getDerivedStateFromProps,d=typeof h=="function"||typeof a.getSnapshotBeforeUpdate=="function";d||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==i||l!==u)&&up(e,a,i,u),Xi=!1;var c=e.memoizedState;a.state=c,Ml(e,i,a,r),l=e.memoizedState,o!==i||c!==l||cn.current||Xi?(typeof h=="function"&&(zc(e,n,h,i),l=e.memoizedState),(o=Xi||lp(e,n,o,i,c,l,u))?(d||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),a.props=i,a.state=l,a.context=u,i=o):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,e0(t,e),o=e.memoizedProps,u=e.type===e.elementType?o:kn(e.type,o),a.props=u,d=e.pendingProps,c=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=Nn(l):(l=fn(n)?Pr:Qt.current,l=Ps(e,l));var p=n.getDerivedStateFromProps;(h=typeof p=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==d||c!==l)&&up(e,a,i,l),Xi=!1,c=e.memoizedState,a.state=c,Ml(e,i,a,r);var x=e.memoizedState;o!==d||c!==x||cn.current||Xi?(typeof p=="function"&&(zc(e,n,p,i),x=e.memoizedState),(u=Xi||lp(e,n,u,i,c,x,l)||!1)?(h||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,x,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,x,l)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&c===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&c===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=x),a.props=i,a.state=x,a.context=l,i=u):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&c===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&c===t.memoizedState||(e.flags|=1024),i=!1)}return Wc(t,e,n,i,s,r)}function Wc(t,e,n,i,r,s){A0(t,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&ep(e,n,!1),bi(t,e,s);i=e.stateNode,Vx.current=e;var o=a&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&a?(e.child=Ds(e,t.child,null,s),e.child=Ds(e,null,o,s)):tn(t,e,o,s),e.memoizedState=i.state,r&&ep(e,n,!0),e.child}function R0(t){var e=t.stateNode;e.pendingContext?Jh(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Jh(t,e.context,!1),Ed(t,e.containerInfo)}function gp(t,e,n,i,r){return Ls(),_d(r),e.flags|=256,tn(t,e,n,i),e.child}var Xc={dehydrated:null,treeContext:null,retryLane:0};function Yc(t){return{baseLanes:t,cachePool:null,transitions:null}}function C0(t,e,n){var i=e.pendingProps,r=xt.current,s=!1,a=(e.flags&128)!==0,o;if((o=a)||(o=t!==null&&t.memoizedState===null?!1:(r&2)!==0),o?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),ft(xt,r&1),t===null)return Bc(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,t=i.fallback,s?(i=e.mode,s=e.child,a={mode:"hidden",children:a},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=ql(a,i,0,null),t=br(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Yc(n),e.memoizedState=Xc,t):Ld(e,a));if(r=t.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return Hx(t,e,a,i,o,r,n);if(s){s=i.fallback,a=e.mode,r=t.child,o=r.sibling;var l={mode:"hidden",children:i.children};return!(a&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=sr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),o!==null?s=sr(o,s):(s=br(s,a,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,a=t.child.memoizedState,a=a===null?Yc(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=t.childLanes&~n,e.memoizedState=Xc,i}return s=t.child,t=s.sibling,i=sr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Ld(t,e){return e=ql({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function go(t,e,n,i){return i!==null&&_d(i),Ds(e,t.child,null,n),t=Ld(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Hx(t,e,n,i,r,s,a){if(n)return e.flags&256?(e.flags&=-257,i=Au(Error(se(422))),go(t,e,a,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=ql({mode:"visible",children:i.children},r,0,null),s=br(s,r,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Ds(e,t.child,null,a),e.child.memoizedState=Yc(a),e.memoizedState=Xc,s);if(!(e.mode&1))return go(t,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var o=i.dgst;return i=o,s=Error(se(419)),i=Au(s,i,void 0),go(t,e,a,i)}if(o=(a&t.childLanes)!==0,un||o){if(i=Bt,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Ci(t,r),Xn(i,t,r,-1))}return Od(),i=Au(Error(se(421))),go(t,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=tS.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,xn=tr(r.nextSibling),yn=e,vt=!0,Vn=null,t!==null&&(Rn[Cn++]=Si,Rn[Cn++]=yi,Rn[Cn++]=Lr,Si=t.id,yi=t.overflow,Lr=e),e=Ld(e,i.children),e.flags|=4096,e)}function _p(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),kc(t.return,e,n)}function Ru(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function b0(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(tn(t,e,i.children,n),i=xt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&_p(t,n,e);else if(t.tag===19)_p(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(ft(xt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&El(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Ru(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&El(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Ru(e,!0,n,null,s);break;case"together":Ru(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function jo(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function bi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Nr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(se(153));if(e.child!==null){for(t=e.child,n=sr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=sr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Gx(t,e,n){switch(e.tag){case 3:R0(e),Ls();break;case 5:t0(e);break;case 1:fn(e.type)&&_l(e);break;case 4:Ed(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;ft(Sl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(ft(xt,xt.current&1),e.flags|=128,null):n&e.child.childLanes?C0(t,e,n):(ft(xt,xt.current&1),t=bi(t,e,n),t!==null?t.sibling:null);ft(xt,xt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return b0(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),ft(xt,xt.current),i)break;return null;case 22:case 23:return e.lanes=0,w0(t,e,n)}return bi(t,e,n)}var P0,qc,L0,D0;P0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};qc=function(){};L0=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,wr(ai.current);var s=null;switch(n){case"input":r=mc(t,r),i=mc(t,i),s=[];break;case"select":r=Et({},r,{value:void 0}),i=Et({},i,{value:void 0}),s=[];break;case"textarea":r=vc(t,r),i=vc(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=ml)}Sc(n,i);var a;n=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var o=r[u];for(a in o)o.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Ea.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(o=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==o&&(l!=null||o!=null))if(u==="style")if(o){for(a in o)!o.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&o[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Ea.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&mt("scroll",t),s||o===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};D0=function(t,e,n,i){n!==i&&(e.flags|=4)};function Qs(t,e){if(!vt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Xt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function Wx(t,e,n){var i=e.pendingProps;switch(gd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Xt(e),null;case 1:return fn(e.type)&&gl(),Xt(e),null;case 3:return i=e.stateNode,Ns(),gt(cn),gt(Qt),wd(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(po(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Vn!==null&&(tf(Vn),Vn=null))),qc(t,e),Xt(e),null;case 5:Td(e);var r=wr(Ua.current);if(n=e.type,t!==null&&e.stateNode!=null)L0(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(se(166));return Xt(e),null}if(t=wr(ai.current),po(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[ni]=e,i[Na]=s,t=(e.mode&1)!==0,n){case"dialog":mt("cancel",i),mt("close",i);break;case"iframe":case"object":case"embed":mt("load",i);break;case"video":case"audio":for(r=0;r<ua.length;r++)mt(ua[r],i);break;case"source":mt("error",i);break;case"img":case"image":case"link":mt("error",i),mt("load",i);break;case"details":mt("toggle",i);break;case"input":Ah(i,s),mt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},mt("invalid",i);break;case"textarea":Ch(i,s),mt("invalid",i)}Sc(n,s),r=null;for(var a in s)if(s.hasOwnProperty(a)){var o=s[a];a==="children"?typeof o=="string"?i.textContent!==o&&(s.suppressHydrationWarning!==!0&&ho(i.textContent,o,t),r=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&ho(i.textContent,o,t),r=["children",""+o]):Ea.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&mt("scroll",i)}switch(n){case"input":ro(i),Rh(i,s,!0);break;case"textarea":ro(i),bh(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=ml)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=ag(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=a.createElement(n,{is:i.is}):(t=a.createElement(n),n==="select"&&(a=t,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):t=a.createElementNS(t,n),t[ni]=e,t[Na]=i,P0(t,e,!1,!1),e.stateNode=t;e:{switch(a=yc(n,i),n){case"dialog":mt("cancel",t),mt("close",t),r=i;break;case"iframe":case"object":case"embed":mt("load",t),r=i;break;case"video":case"audio":for(r=0;r<ua.length;r++)mt(ua[r],t);r=i;break;case"source":mt("error",t),r=i;break;case"img":case"image":case"link":mt("error",t),mt("load",t),r=i;break;case"details":mt("toggle",t),r=i;break;case"input":Ah(t,i),r=mc(t,i),mt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=Et({},i,{value:void 0}),mt("invalid",t);break;case"textarea":Ch(t,i),r=vc(t,i),mt("invalid",t);break;default:r=i}Sc(n,r),o=r;for(s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="style"?ug(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&og(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Ta(t,l):typeof l=="number"&&Ta(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ea.hasOwnProperty(s)?l!=null&&s==="onScroll"&&mt("scroll",t):l!=null&&td(t,s,l,a))}switch(n){case"input":ro(t),Rh(t,i,!1);break;case"textarea":ro(t),bh(t);break;case"option":i.value!=null&&t.setAttribute("value",""+ar(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Ss(t,!!i.multiple,s,!1):i.defaultValue!=null&&Ss(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=ml)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Xt(e),null;case 6:if(t&&e.stateNode!=null)D0(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(se(166));if(n=wr(Ua.current),wr(ai.current),po(e)){if(i=e.stateNode,n=e.memoizedProps,i[ni]=e,(s=i.nodeValue!==n)&&(t=yn,t!==null))switch(t.tag){case 3:ho(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ho(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[ni]=e,e.stateNode=i}return Xt(e),null;case 13:if(gt(xt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(vt&&xn!==null&&e.mode&1&&!(e.flags&128))Zg(),Ls(),e.flags|=98560,s=!1;else if(s=po(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(se(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(se(317));s[ni]=e}else Ls(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Xt(e),s=!1}else Vn!==null&&(tf(Vn),Vn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||xt.current&1?Nt===0&&(Nt=3):Od())),e.updateQueue!==null&&(e.flags|=4),Xt(e),null);case 4:return Ns(),qc(t,e),t===null&&La(e.stateNode.containerInfo),Xt(e),null;case 10:return Sd(e.type._context),Xt(e),null;case 17:return fn(e.type)&&gl(),Xt(e),null;case 19:if(gt(xt),s=e.memoizedState,s===null)return Xt(e),null;if(i=(e.flags&128)!==0,a=s.rendering,a===null)if(i)Qs(s,!1);else{if(Nt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=El(t),a!==null){for(e.flags|=128,Qs(s,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,t=a.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ft(xt,xt.current&1|2),e.child}t=t.sibling}s.tail!==null&&bt()>Us&&(e.flags|=128,i=!0,Qs(s,!1),e.lanes=4194304)}else{if(!i)if(t=El(a),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Qs(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!vt)return Xt(e),null}else 2*bt()-s.renderingStartTime>Us&&n!==1073741824&&(e.flags|=128,i=!0,Qs(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(n=s.last,n!==null?n.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=bt(),e.sibling=null,n=xt.current,ft(xt,i?n&1|2:n&1),e):(Xt(e),null);case 22:case 23:return Fd(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?_n&1073741824&&(Xt(e),e.subtreeFlags&6&&(e.flags|=8192)):Xt(e),null;case 24:return null;case 25:return null}throw Error(se(156,e.tag))}function Xx(t,e){switch(gd(e),e.tag){case 1:return fn(e.type)&&gl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ns(),gt(cn),gt(Qt),wd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Td(e),null;case 13:if(gt(xt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(se(340));Ls()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return gt(xt),null;case 4:return Ns(),null;case 10:return Sd(e.type._context),null;case 22:case 23:return Fd(),null;case 24:return null;default:return null}}var _o=!1,$t=!1,Yx=typeof WeakSet=="function"?WeakSet:Set,ye=null;function gs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){At(t,e,i)}else n.current=null}function $c(t,e,n){try{n()}catch(i){At(t,e,i)}}var vp=!1;function qx(t,e){if(Lc=dl,t=Og(),pd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,o=-1,l=-1,u=0,h=0,d=t,c=null;t:for(;;){for(var p;d!==n||r!==0&&d.nodeType!==3||(o=a+r),d!==s||i!==0&&d.nodeType!==3||(l=a+i),d.nodeType===3&&(a+=d.nodeValue.length),(p=d.firstChild)!==null;)c=d,d=p;for(;;){if(d===t)break t;if(c===n&&++u===r&&(o=a),c===s&&++h===i&&(l=a),(p=d.nextSibling)!==null)break;d=c,c=d.parentNode}d=p}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Dc={focusedElem:t,selectionRange:n},dl=!1,ye=e;ye!==null;)if(e=ye,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,ye=t;else for(;ye!==null;){e=ye;try{var x=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var E=x.memoizedProps,g=x.memoizedState,f=e.stateNode,m=f.getSnapshotBeforeUpdate(e.elementType===e.type?E:kn(e.type,E),g);f.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var y=e.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(se(163))}}catch(S){At(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,ye=t;break}ye=e.return}return x=vp,vp=!1,x}function va(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&$c(e,n,s)}r=r.next}while(r!==i)}}function Xl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Kc(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function N0(t){var e=t.alternate;e!==null&&(t.alternate=null,N0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[ni],delete e[Na],delete e[Uc],delete e[bx],delete e[Px])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function I0(t){return t.tag===5||t.tag===3||t.tag===4}function xp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||I0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Zc(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=ml));else if(i!==4&&(t=t.child,t!==null))for(Zc(t,e,n),t=t.sibling;t!==null;)Zc(t,e,n),t=t.sibling}function jc(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(jc(t,e,n),t=t.sibling;t!==null;)jc(t,e,n),t=t.sibling}var kt=null,zn=!1;function Oi(t,e,n){for(n=n.child;n!==null;)U0(t,e,n),n=n.sibling}function U0(t,e,n){if(si&&typeof si.onCommitFiberUnmount=="function")try{si.onCommitFiberUnmount(Ol,n)}catch{}switch(n.tag){case 5:$t||gs(n,e);case 6:var i=kt,r=zn;kt=null,Oi(t,e,n),kt=i,zn=r,kt!==null&&(zn?(t=kt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):kt.removeChild(n.stateNode));break;case 18:kt!==null&&(zn?(t=kt,n=n.stateNode,t.nodeType===8?Su(t.parentNode,n):t.nodeType===1&&Su(t,n),Ca(t)):Su(kt,n.stateNode));break;case 4:i=kt,r=zn,kt=n.stateNode.containerInfo,zn=!0,Oi(t,e,n),kt=i,zn=r;break;case 0:case 11:case 14:case 15:if(!$t&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&$c(n,e,a),r=r.next}while(r!==i)}Oi(t,e,n);break;case 1:if(!$t&&(gs(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(o){At(n,e,o)}Oi(t,e,n);break;case 21:Oi(t,e,n);break;case 22:n.mode&1?($t=(i=$t)||n.memoizedState!==null,Oi(t,e,n),$t=i):Oi(t,e,n);break;default:Oi(t,e,n)}}function Sp(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Yx),e.forEach(function(i){var r=nS.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Un(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,a=e,o=a;e:for(;o!==null;){switch(o.tag){case 5:kt=o.stateNode,zn=!1;break e;case 3:kt=o.stateNode.containerInfo,zn=!0;break e;case 4:kt=o.stateNode.containerInfo,zn=!0;break e}o=o.return}if(kt===null)throw Error(se(160));U0(s,a,r),kt=null,zn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){At(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)F0(e,t),e=e.sibling}function F0(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Un(e,t),jn(t),i&4){try{va(3,t,t.return),Xl(3,t)}catch(E){At(t,t.return,E)}try{va(5,t,t.return)}catch(E){At(t,t.return,E)}}break;case 1:Un(e,t),jn(t),i&512&&n!==null&&gs(n,n.return);break;case 5:if(Un(e,t),jn(t),i&512&&n!==null&&gs(n,n.return),t.flags&32){var r=t.stateNode;try{Ta(r,"")}catch(E){At(t,t.return,E)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,a=n!==null?n.memoizedProps:s,o=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&rg(r,s),yc(o,a);var u=yc(o,s);for(a=0;a<l.length;a+=2){var h=l[a],d=l[a+1];h==="style"?ug(r,d):h==="dangerouslySetInnerHTML"?og(r,d):h==="children"?Ta(r,d):td(r,h,d,u)}switch(o){case"input":gc(r,s);break;case"textarea":sg(r,s);break;case"select":var c=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Ss(r,!!s.multiple,p,!1):c!==!!s.multiple&&(s.defaultValue!=null?Ss(r,!!s.multiple,s.defaultValue,!0):Ss(r,!!s.multiple,s.multiple?[]:"",!1))}r[Na]=s}catch(E){At(t,t.return,E)}}break;case 6:if(Un(e,t),jn(t),i&4){if(t.stateNode===null)throw Error(se(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(E){At(t,t.return,E)}}break;case 3:if(Un(e,t),jn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Ca(e.containerInfo)}catch(E){At(t,t.return,E)}break;case 4:Un(e,t),jn(t);break;case 13:Un(e,t),jn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Id=bt())),i&4&&Sp(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?($t=(u=$t)||h,Un(e,t),$t=u):Un(e,t),jn(t),i&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!h&&t.mode&1)for(ye=t,h=t.child;h!==null;){for(d=ye=h;ye!==null;){switch(c=ye,p=c.child,c.tag){case 0:case 11:case 14:case 15:va(4,c,c.return);break;case 1:gs(c,c.return);var x=c.stateNode;if(typeof x.componentWillUnmount=="function"){i=c,n=c.return;try{e=i,x.props=e.memoizedProps,x.state=e.memoizedState,x.componentWillUnmount()}catch(E){At(i,n,E)}}break;case 5:gs(c,c.return);break;case 22:if(c.memoizedState!==null){Mp(d);continue}}p!==null?(p.return=c,ye=p):Mp(d)}h=h.sibling}e:for(h=null,d=t;;){if(d.tag===5){if(h===null){h=d;try{r=d.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=d.stateNode,l=d.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=lg("display",a))}catch(E){At(t,t.return,E)}}}else if(d.tag===6){if(h===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(E){At(t,t.return,E)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;h===d&&(h=null),d=d.return}h===d&&(h=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Un(e,t),jn(t),i&4&&Sp(t);break;case 21:break;default:Un(e,t),jn(t)}}function jn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(I0(n)){var i=n;break e}n=n.return}throw Error(se(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Ta(r,""),i.flags&=-33);var s=xp(t);jc(t,s,r);break;case 3:case 4:var a=i.stateNode.containerInfo,o=xp(t);Zc(t,o,a);break;default:throw Error(se(161))}}catch(l){At(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function $x(t,e,n){ye=t,O0(t)}function O0(t,e,n){for(var i=(t.mode&1)!==0;ye!==null;){var r=ye,s=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||_o;if(!a){var o=r.alternate,l=o!==null&&o.memoizedState!==null||$t;o=_o;var u=$t;if(_o=a,($t=l)&&!u)for(ye=r;ye!==null;)a=ye,l=a.child,a.tag===22&&a.memoizedState!==null?Ep(r):l!==null?(l.return=a,ye=l):Ep(r);for(;s!==null;)ye=s,O0(s),s=s.sibling;ye=r,_o=o,$t=u}yp(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,ye=s):yp(t)}}function yp(t){for(;ye!==null;){var e=ye;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:$t||Xl(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!$t)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:kn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&sp(e,s,i);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}sp(e,a,n)}break;case 5:var o=e.stateNode;if(n===null&&e.flags&4){n=o;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var h=u.memoizedState;if(h!==null){var d=h.dehydrated;d!==null&&Ca(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(se(163))}$t||e.flags&512&&Kc(e)}catch(c){At(e,e.return,c)}}if(e===t){ye=null;break}if(n=e.sibling,n!==null){n.return=e.return,ye=n;break}ye=e.return}}function Mp(t){for(;ye!==null;){var e=ye;if(e===t){ye=null;break}var n=e.sibling;if(n!==null){n.return=e.return,ye=n;break}ye=e.return}}function Ep(t){for(;ye!==null;){var e=ye;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Xl(4,e)}catch(l){At(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){At(e,r,l)}}var s=e.return;try{Kc(e)}catch(l){At(e,s,l)}break;case 5:var a=e.return;try{Kc(e)}catch(l){At(e,a,l)}}}catch(l){At(e,e.return,l)}if(e===t){ye=null;break}var o=e.sibling;if(o!==null){o.return=e.return,ye=o;break}ye=e.return}}var Kx=Math.ceil,Al=Ni.ReactCurrentDispatcher,Dd=Ni.ReactCurrentOwner,Ln=Ni.ReactCurrentBatchConfig,Je=0,Bt=null,Lt=null,Vt=0,_n=0,_s=cr(0),Nt=0,ka=null,Nr=0,Yl=0,Nd=0,xa=null,ln=null,Id=0,Us=1/0,_i=null,Rl=!1,Qc=null,ir=null,vo=!1,Zi=null,Cl=0,Sa=0,Jc=null,Qo=-1,Jo=0;function nn(){return Je&6?bt():Qo!==-1?Qo:Qo=bt()}function rr(t){return t.mode&1?Je&2&&Vt!==0?Vt&-Vt:Dx.transition!==null?(Jo===0&&(Jo=yg()),Jo):(t=it,t!==0||(t=window.event,t=t===void 0?16:Cg(t.type)),t):1}function Xn(t,e,n,i){if(50<Sa)throw Sa=0,Jc=null,Error(se(185));Ya(t,n,i),(!(Je&2)||t!==Bt)&&(t===Bt&&(!(Je&2)&&(Yl|=n),Nt===4&&qi(t,Vt)),dn(t,i),n===1&&Je===0&&!(e.mode&1)&&(Us=bt()+500,Hl&&fr()))}function dn(t,e){var n=t.callbackNode;Dv(t,e);var i=fl(t,t===Bt?Vt:0);if(i===0)n!==null&&Dh(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Dh(n),e===1)t.tag===0?Lx(Tp.bind(null,t)):qg(Tp.bind(null,t)),Rx(function(){!(Je&6)&&fr()}),n=null;else{switch(Mg(i)){case 1:n=ad;break;case 4:n=xg;break;case 16:n=cl;break;case 536870912:n=Sg;break;default:n=cl}n=X0(n,B0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function B0(t,e){if(Qo=-1,Jo=0,Je&6)throw Error(se(327));var n=t.callbackNode;if(ws()&&t.callbackNode!==n)return null;var i=fl(t,t===Bt?Vt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=bl(t,i);else{e=i;var r=Je;Je|=2;var s=z0();(Bt!==t||Vt!==e)&&(_i=null,Us=bt()+500,Cr(t,e));do try{Qx();break}catch(o){k0(t,o)}while(!0);xd(),Al.current=s,Je=r,Lt!==null?e=0:(Bt=null,Vt=0,e=Nt)}if(e!==0){if(e===2&&(r=Ac(t),r!==0&&(i=r,e=ef(t,r))),e===1)throw n=ka,Cr(t,0),qi(t,i),dn(t,bt()),n;if(e===6)qi(t,i);else{if(r=t.current.alternate,!(i&30)&&!Zx(r)&&(e=bl(t,i),e===2&&(s=Ac(t),s!==0&&(i=s,e=ef(t,s))),e===1))throw n=ka,Cr(t,0),qi(t,i),dn(t,bt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(se(345));case 2:vr(t,ln,_i);break;case 3:if(qi(t,i),(i&130023424)===i&&(e=Id+500-bt(),10<e)){if(fl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){nn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Ic(vr.bind(null,t,ln,_i),e);break}vr(t,ln,_i);break;case 4:if(qi(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var a=31-Wn(i);s=1<<a,a=e[a],a>r&&(r=a),i&=~s}if(i=r,i=bt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Kx(i/1960))-i,10<i){t.timeoutHandle=Ic(vr.bind(null,t,ln,_i),i);break}vr(t,ln,_i);break;case 5:vr(t,ln,_i);break;default:throw Error(se(329))}}}return dn(t,bt()),t.callbackNode===n?B0.bind(null,t):null}function ef(t,e){var n=xa;return t.current.memoizedState.isDehydrated&&(Cr(t,e).flags|=256),t=bl(t,e),t!==2&&(e=ln,ln=n,e!==null&&tf(e)),t}function tf(t){ln===null?ln=t:ln.push.apply(ln,t)}function Zx(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Yn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function qi(t,e){for(e&=~Nd,e&=~Yl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Wn(e),i=1<<n;t[n]=-1,e&=~i}}function Tp(t){if(Je&6)throw Error(se(327));ws();var e=fl(t,0);if(!(e&1))return dn(t,bt()),null;var n=bl(t,e);if(t.tag!==0&&n===2){var i=Ac(t);i!==0&&(e=i,n=ef(t,i))}if(n===1)throw n=ka,Cr(t,0),qi(t,e),dn(t,bt()),n;if(n===6)throw Error(se(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,vr(t,ln,_i),dn(t,bt()),null}function Ud(t,e){var n=Je;Je|=1;try{return t(e)}finally{Je=n,Je===0&&(Us=bt()+500,Hl&&fr())}}function Ir(t){Zi!==null&&Zi.tag===0&&!(Je&6)&&ws();var e=Je;Je|=1;var n=Ln.transition,i=it;try{if(Ln.transition=null,it=1,t)return t()}finally{it=i,Ln.transition=n,Je=e,!(Je&6)&&fr()}}function Fd(){_n=_s.current,gt(_s)}function Cr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Ax(n)),Lt!==null)for(n=Lt.return;n!==null;){var i=n;switch(gd(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&gl();break;case 3:Ns(),gt(cn),gt(Qt),wd();break;case 5:Td(i);break;case 4:Ns();break;case 13:gt(xt);break;case 19:gt(xt);break;case 10:Sd(i.type._context);break;case 22:case 23:Fd()}n=n.return}if(Bt=t,Lt=t=sr(t.current,null),Vt=_n=e,Nt=0,ka=null,Nd=Yl=Nr=0,ln=xa=null,Tr!==null){for(e=0;e<Tr.length;e++)if(n=Tr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var a=s.next;s.next=r,i.next=a}n.pending=i}Tr=null}return t}function k0(t,e){do{var n=Lt;try{if(xd(),Ko.current=wl,Tl){for(var i=yt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Tl=!1}if(Dr=0,Ot=Dt=yt=null,_a=!1,Fa=0,Dd.current=null,n===null||n.return===null){Nt=1,ka=e,Lt=null;break}e:{var s=t,a=n.return,o=n,l=e;if(e=Vt,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,h=o,d=h.tag;if(!(h.mode&1)&&(d===0||d===11||d===15)){var c=h.alternate;c?(h.updateQueue=c.updateQueue,h.memoizedState=c.memoizedState,h.lanes=c.lanes):(h.updateQueue=null,h.memoizedState=null)}var p=fp(a);if(p!==null){p.flags&=-257,dp(p,a,o,s,e),p.mode&1&&cp(s,u,e),e=p,l=u;var x=e.updateQueue;if(x===null){var E=new Set;E.add(l),e.updateQueue=E}else x.add(l);break e}else{if(!(e&1)){cp(s,u,e),Od();break e}l=Error(se(426))}}else if(vt&&o.mode&1){var g=fp(a);if(g!==null){!(g.flags&65536)&&(g.flags|=256),dp(g,a,o,s,e),_d(Is(l,o));break e}}s=l=Is(l,o),Nt!==4&&(Nt=2),xa===null?xa=[s]:xa.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var f=M0(s,l,e);rp(s,f);break e;case 1:o=l;var m=s.type,y=s.stateNode;if(!(s.flags&128)&&(typeof m.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(ir===null||!ir.has(y)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=E0(s,o,e);rp(s,S);break e}}s=s.return}while(s!==null)}H0(n)}catch(w){e=w,Lt===n&&n!==null&&(Lt=n=n.return);continue}break}while(!0)}function z0(){var t=Al.current;return Al.current=wl,t===null?wl:t}function Od(){(Nt===0||Nt===3||Nt===2)&&(Nt=4),Bt===null||!(Nr&268435455)&&!(Yl&268435455)||qi(Bt,Vt)}function bl(t,e){var n=Je;Je|=2;var i=z0();(Bt!==t||Vt!==e)&&(_i=null,Cr(t,e));do try{jx();break}catch(r){k0(t,r)}while(!0);if(xd(),Je=n,Al.current=i,Lt!==null)throw Error(se(261));return Bt=null,Vt=0,Nt}function jx(){for(;Lt!==null;)V0(Lt)}function Qx(){for(;Lt!==null&&!Ev();)V0(Lt)}function V0(t){var e=W0(t.alternate,t,_n);t.memoizedProps=t.pendingProps,e===null?H0(t):Lt=e,Dd.current=null}function H0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Xx(n,e),n!==null){n.flags&=32767,Lt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Nt=6,Lt=null;return}}else if(n=Wx(n,e,_n),n!==null){Lt=n;return}if(e=e.sibling,e!==null){Lt=e;return}Lt=e=t}while(e!==null);Nt===0&&(Nt=5)}function vr(t,e,n){var i=it,r=Ln.transition;try{Ln.transition=null,it=1,Jx(t,e,n,i)}finally{Ln.transition=r,it=i}return null}function Jx(t,e,n,i){do ws();while(Zi!==null);if(Je&6)throw Error(se(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(se(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Nv(t,s),t===Bt&&(Lt=Bt=null,Vt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||vo||(vo=!0,X0(cl,function(){return ws(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Ln.transition,Ln.transition=null;var a=it;it=1;var o=Je;Je|=4,Dd.current=null,qx(t,n),F0(n,t),xx(Dc),dl=!!Lc,Dc=Lc=null,t.current=n,$x(n),Tv(),Je=o,it=a,Ln.transition=s}else t.current=n;if(vo&&(vo=!1,Zi=t,Cl=r),s=t.pendingLanes,s===0&&(ir=null),Rv(n.stateNode),dn(t,bt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Rl)throw Rl=!1,t=Qc,Qc=null,t;return Cl&1&&t.tag!==0&&ws(),s=t.pendingLanes,s&1?t===Jc?Sa++:(Sa=0,Jc=t):Sa=0,fr(),null}function ws(){if(Zi!==null){var t=Mg(Cl),e=Ln.transition,n=it;try{if(Ln.transition=null,it=16>t?16:t,Zi===null)var i=!1;else{if(t=Zi,Zi=null,Cl=0,Je&6)throw Error(se(331));var r=Je;for(Je|=4,ye=t.current;ye!==null;){var s=ye,a=s.child;if(ye.flags&16){var o=s.deletions;if(o!==null){for(var l=0;l<o.length;l++){var u=o[l];for(ye=u;ye!==null;){var h=ye;switch(h.tag){case 0:case 11:case 15:va(8,h,s)}var d=h.child;if(d!==null)d.return=h,ye=d;else for(;ye!==null;){h=ye;var c=h.sibling,p=h.return;if(N0(h),h===u){ye=null;break}if(c!==null){c.return=p,ye=c;break}ye=p}}}var x=s.alternate;if(x!==null){var E=x.child;if(E!==null){x.child=null;do{var g=E.sibling;E.sibling=null,E=g}while(E!==null)}}ye=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,ye=a;else e:for(;ye!==null;){if(s=ye,s.flags&2048)switch(s.tag){case 0:case 11:case 15:va(9,s,s.return)}var f=s.sibling;if(f!==null){f.return=s.return,ye=f;break e}ye=s.return}}var m=t.current;for(ye=m;ye!==null;){a=ye;var y=a.child;if(a.subtreeFlags&2064&&y!==null)y.return=a,ye=y;else e:for(a=m;ye!==null;){if(o=ye,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:Xl(9,o)}}catch(w){At(o,o.return,w)}if(o===a){ye=null;break e}var S=o.sibling;if(S!==null){S.return=o.return,ye=S;break e}ye=o.return}}if(Je=r,fr(),si&&typeof si.onPostCommitFiberRoot=="function")try{si.onPostCommitFiberRoot(Ol,t)}catch{}i=!0}return i}finally{it=n,Ln.transition=e}}return!1}function wp(t,e,n){e=Is(n,e),e=M0(t,e,1),t=nr(t,e,1),e=nn(),t!==null&&(Ya(t,1,e),dn(t,e))}function At(t,e,n){if(t.tag===3)wp(t,t,n);else for(;e!==null;){if(e.tag===3){wp(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(ir===null||!ir.has(i))){t=Is(n,t),t=E0(e,t,1),e=nr(e,t,1),t=nn(),e!==null&&(Ya(e,1,t),dn(e,t));break}}e=e.return}}function eS(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=nn(),t.pingedLanes|=t.suspendedLanes&n,Bt===t&&(Vt&n)===n&&(Nt===4||Nt===3&&(Vt&130023424)===Vt&&500>bt()-Id?Cr(t,0):Nd|=n),dn(t,e)}function G0(t,e){e===0&&(t.mode&1?(e=oo,oo<<=1,!(oo&130023424)&&(oo=4194304)):e=1);var n=nn();t=Ci(t,e),t!==null&&(Ya(t,e,n),dn(t,n))}function tS(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),G0(t,n)}function nS(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(se(314))}i!==null&&i.delete(e),G0(t,n)}var W0;W0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||cn.current)un=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return un=!1,Gx(t,e,n);un=!!(t.flags&131072)}else un=!1,vt&&e.flags&1048576&&$g(e,xl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;jo(t,e),t=e.pendingProps;var r=Ps(e,Qt.current);Ts(e,n),r=Rd(null,e,i,t,r,n);var s=Cd();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,fn(i)?(s=!0,_l(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Md(e),r.updater=Wl,e.stateNode=r,r._reactInternals=e,Vc(e,i,t,n),e=Wc(null,e,i,!0,s,n)):(e.tag=0,vt&&s&&md(e),tn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(jo(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=rS(i),t=kn(i,t),r){case 0:e=Gc(null,e,i,t,n);break e;case 1:e=mp(null,e,i,t,n);break e;case 11:e=hp(null,e,i,t,n);break e;case 14:e=pp(null,e,i,kn(i.type,t),n);break e}throw Error(se(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:kn(i,r),Gc(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:kn(i,r),mp(t,e,i,r,n);case 3:e:{if(R0(e),t===null)throw Error(se(387));i=e.pendingProps,s=e.memoizedState,r=s.element,e0(t,e),Ml(e,i,null,n);var a=e.memoizedState;if(i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Is(Error(se(423)),e),e=gp(t,e,i,n,r);break e}else if(i!==r){r=Is(Error(se(424)),e),e=gp(t,e,i,n,r);break e}else for(xn=tr(e.stateNode.containerInfo.firstChild),yn=e,vt=!0,Vn=null,n=Qg(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ls(),i===r){e=bi(t,e,n);break e}tn(t,e,i,n)}e=e.child}return e;case 5:return t0(e),t===null&&Bc(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,a=r.children,Nc(i,r)?a=null:s!==null&&Nc(i,s)&&(e.flags|=32),A0(t,e),tn(t,e,a,n),e.child;case 6:return t===null&&Bc(e),null;case 13:return C0(t,e,n);case 4:return Ed(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Ds(e,null,i,n):tn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:kn(i,r),hp(t,e,i,r,n);case 7:return tn(t,e,e.pendingProps,n),e.child;case 8:return tn(t,e,e.pendingProps.children,n),e.child;case 12:return tn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,a=r.value,ft(Sl,i._currentValue),i._currentValue=a,s!==null)if(Yn(s.value,a)){if(s.children===r.children&&!cn.current){e=bi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var o=s.dependencies;if(o!==null){a=s.child;for(var l=o.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Ei(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var h=u.pending;h===null?l.next=l:(l.next=h.next,h.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),kc(s.return,n,e),o.lanes|=n;break}l=l.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(se(341));a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),kc(a,n,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}tn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Ts(e,n),r=Nn(r),i=i(r),e.flags|=1,tn(t,e,i,n),e.child;case 14:return i=e.type,r=kn(i,e.pendingProps),r=kn(i.type,r),pp(t,e,i,r,n);case 15:return T0(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:kn(i,r),jo(t,e),e.tag=1,fn(i)?(t=!0,_l(e)):t=!1,Ts(e,n),y0(e,i,r),Vc(e,i,r,n),Wc(null,e,i,!0,t,n);case 19:return b0(t,e,n);case 22:return w0(t,e,n)}throw Error(se(156,e.tag))};function X0(t,e){return vg(t,e)}function iS(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Pn(t,e,n,i){return new iS(t,e,n,i)}function Bd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function rS(t){if(typeof t=="function")return Bd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===id)return 11;if(t===rd)return 14}return 2}function sr(t,e){var n=t.alternate;return n===null?(n=Pn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function el(t,e,n,i,r,s){var a=2;if(i=t,typeof t=="function")Bd(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case os:return br(n.children,r,s,e);case nd:a=8,r|=8;break;case fc:return t=Pn(12,n,e,r|2),t.elementType=fc,t.lanes=s,t;case dc:return t=Pn(13,n,e,r),t.elementType=dc,t.lanes=s,t;case hc:return t=Pn(19,n,e,r),t.elementType=hc,t.lanes=s,t;case tg:return ql(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Jm:a=10;break e;case eg:a=9;break e;case id:a=11;break e;case rd:a=14;break e;case Wi:a=16,i=null;break e}throw Error(se(130,t==null?t:typeof t,""))}return e=Pn(a,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function br(t,e,n,i){return t=Pn(7,t,i,e),t.lanes=n,t}function ql(t,e,n,i){return t=Pn(22,t,i,e),t.elementType=tg,t.lanes=n,t.stateNode={isHidden:!1},t}function Cu(t,e,n){return t=Pn(6,t,null,e),t.lanes=n,t}function bu(t,e,n){return e=Pn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function sS(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=uu(0),this.expirationTimes=uu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=uu(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function kd(t,e,n,i,r,s,a,o,l){return t=new sS(t,e,n,o,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Pn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Md(s),t}function aS(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:as,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function Y0(t){if(!t)return or;t=t._reactInternals;e:{if(Br(t)!==t||t.tag!==1)throw Error(se(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(fn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(se(171))}if(t.tag===1){var n=t.type;if(fn(n))return Yg(t,n,e)}return e}function q0(t,e,n,i,r,s,a,o,l){return t=kd(n,i,!0,t,r,s,a,o,l),t.context=Y0(null),n=t.current,i=nn(),r=rr(n),s=Ei(i,r),s.callback=e??null,nr(n,s,r),t.current.lanes=r,Ya(t,r,i),dn(t,i),t}function $l(t,e,n,i){var r=e.current,s=nn(),a=rr(r);return n=Y0(n),e.context===null?e.context=n:e.pendingContext=n,e=Ei(s,a),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=nr(r,e,a),t!==null&&(Xn(t,r,a,s),$o(t,r,a)),a}function Pl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Ap(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function zd(t,e){Ap(t,e),(t=t.alternate)&&Ap(t,e)}function oS(){return null}var $0=typeof reportError=="function"?reportError:function(t){console.error(t)};function Vd(t){this._internalRoot=t}Kl.prototype.render=Vd.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(se(409));$l(t,e,null,null)};Kl.prototype.unmount=Vd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Ir(function(){$l(null,t,null,null)}),e[Ri]=null}};function Kl(t){this._internalRoot=t}Kl.prototype.unstable_scheduleHydration=function(t){if(t){var e=wg();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Yi.length&&e!==0&&e<Yi[n].priority;n++);Yi.splice(n,0,t),n===0&&Rg(t)}};function Hd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Zl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Rp(){}function lS(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=Pl(a);s.call(u)}}var a=q0(e,i,t,0,null,!1,!1,"",Rp);return t._reactRootContainer=a,t[Ri]=a.current,La(t.nodeType===8?t.parentNode:t),Ir(),a}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var o=i;i=function(){var u=Pl(l);o.call(u)}}var l=kd(t,0,!1,null,null,!1,!1,"",Rp);return t._reactRootContainer=l,t[Ri]=l.current,La(t.nodeType===8?t.parentNode:t),Ir(function(){$l(e,l,n,i)}),l}function jl(t,e,n,i,r){var s=n._reactRootContainer;if(s){var a=s;if(typeof r=="function"){var o=r;r=function(){var l=Pl(a);o.call(l)}}$l(e,a,t,r)}else a=lS(n,e,t,r,i);return Pl(a)}Eg=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=la(e.pendingLanes);n!==0&&(od(e,n|1),dn(e,bt()),!(Je&6)&&(Us=bt()+500,fr()))}break;case 13:Ir(function(){var i=Ci(t,1);if(i!==null){var r=nn();Xn(i,t,1,r)}}),zd(t,1)}};ld=function(t){if(t.tag===13){var e=Ci(t,134217728);if(e!==null){var n=nn();Xn(e,t,134217728,n)}zd(t,134217728)}};Tg=function(t){if(t.tag===13){var e=rr(t),n=Ci(t,e);if(n!==null){var i=nn();Xn(n,t,e,i)}zd(t,e)}};wg=function(){return it};Ag=function(t,e){var n=it;try{return it=t,e()}finally{it=n}};Ec=function(t,e,n){switch(e){case"input":if(gc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Vl(i);if(!r)throw Error(se(90));ig(i),gc(i,r)}}}break;case"textarea":sg(t,n);break;case"select":e=n.value,e!=null&&Ss(t,!!n.multiple,e,!1)}};dg=Ud;hg=Ir;var uS={usingClientEntryPoint:!1,Events:[$a,fs,Vl,cg,fg,Ud]},Js={findFiberByHostInstance:Er,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},cS={bundleType:Js.bundleType,version:Js.version,rendererPackageName:Js.rendererPackageName,rendererConfig:Js.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ni.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=gg(t),t===null?null:t.stateNode},findFiberByHostInstance:Js.findFiberByHostInstance||oS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var xo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!xo.isDisabled&&xo.supportsFiber)try{Ol=xo.inject(cS),si=xo}catch{}}En.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=uS;En.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Hd(e))throw Error(se(200));return aS(t,e,null,n)};En.createRoot=function(t,e){if(!Hd(t))throw Error(se(299));var n=!1,i="",r=$0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=kd(t,1,!1,null,null,n,!1,i,r),t[Ri]=e.current,La(t.nodeType===8?t.parentNode:t),new Vd(e)};En.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(se(188)):(t=Object.keys(t).join(","),Error(se(268,t)));return t=gg(e),t=t===null?null:t.stateNode,t};En.flushSync=function(t){return Ir(t)};En.hydrate=function(t,e,n){if(!Zl(e))throw Error(se(200));return jl(null,t,e,!0,n)};En.hydrateRoot=function(t,e,n){if(!Hd(t))throw Error(se(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",a=$0;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=q0(e,null,t,1,n??null,r,!1,s,a),t[Ri]=e.current,La(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Kl(e)};En.render=function(t,e,n){if(!Zl(e))throw Error(se(200));return jl(null,t,e,!1,n)};En.unmountComponentAtNode=function(t){if(!Zl(t))throw Error(se(40));return t._reactRootContainer?(Ir(function(){jl(null,null,t,!1,function(){t._reactRootContainer=null,t[Ri]=null})}),!0):!1};En.unstable_batchedUpdates=Ud;En.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Zl(n))throw Error(se(200));if(t==null||t._reactInternals===void 0)throw Error(se(38));return jl(t,e,n,!1,i)};En.version="18.3.1-next-f1338f8080-20240426";function K0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(K0)}catch(t){console.error(t)}}K0(),Km.exports=En;var fS=Km.exports,Cp=fS;uc.createRoot=Cp.createRoot,uc.hydrateRoot=Cp.hydrateRoot;/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var dS={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hS=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),Za=(t,e)=>{const n=st.forwardRef(({color:i="currentColor",size:r=24,strokeWidth:s=2,absoluteStrokeWidth:a,className:o="",children:l,...u},h)=>st.createElement("svg",{ref:h,...dS,width:r,height:r,stroke:i,strokeWidth:a?Number(s)*24/Number(r):s,className:["lucide",`lucide-${hS(t)}`,o].join(" "),...u},[...e.map(([d,c])=>st.createElement(d,c)),...Array.isArray(l)?l:[l]]));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bp=Za("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pS=Za("Loader2",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pp=Za("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lp=Za("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dp=Za("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Gd="185",mS=0,Np=1,gS=2,tl=1,_S=2,ca=3,Pi=0,hn=1,xi=2,Ti=0,As=1,nf=2,Ip=3,Up=4,vS=5,yr=100,xS=101,SS=102,yS=103,MS=104,ES=200,TS=201,wS=202,AS=203,rf=204,sf=205,RS=206,CS=207,bS=208,PS=209,LS=210,DS=211,NS=212,IS=213,US=214,af=0,of=1,lf=2,Fs=3,uf=4,cf=5,ff=6,df=7,Z0=0,FS=1,OS=2,oi=0,j0=1,Q0=2,J0=3,e_=4,t_=5,n_=6,i_=7,r_=300,Ur=301,Os=302,Pu=303,Lu=304,Ql=306,hf=1e3,Mi=1001,pf=1002,zt=1003,BS=1004,So=1005,Kt=1006,Du=1007,Ar=1008,vn=1009,s_=1010,a_=1011,za=1012,Wd=1013,ci=1014,ii=1015,Li=1016,Xd=1017,Yd=1018,Va=1020,o_=35902,l_=35899,u_=1021,c_=1022,Gn=1023,Di=1026,Rr=1027,f_=1028,qd=1029,Fr=1030,$d=1031,Kd=1033,nl=33776,il=33777,rl=33778,sl=33779,mf=35840,gf=35841,_f=35842,vf=35843,xf=36196,Sf=37492,yf=37496,Mf=37488,Ef=37489,Ll=37490,Tf=37491,wf=37808,Af=37809,Rf=37810,Cf=37811,bf=37812,Pf=37813,Lf=37814,Df=37815,Nf=37816,If=37817,Uf=37818,Ff=37819,Of=37820,Bf=37821,kf=36492,zf=36494,Vf=36495,Hf=36283,Gf=36284,Dl=36285,Wf=36286,kS=3200,Xf=0,zS=1,$i="",on="srgb",Nl="srgb-linear",Il="linear",nt="srgb",Gr=7680,Fp=519,VS=512,HS=513,GS=514,Zd=515,WS=516,XS=517,jd=518,YS=519,Op=35044,Bp="300 es",ri=2e3,Ha=2001;function qS(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Ga(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function $S(){const t=Ga("canvas");return t.style.display="block",t}const kp={};function zp(...t){const e="THREE."+t.shift();console.log(e,...t)}function d_(t){const e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function Ne(...t){t=d_(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function Ke(...t){t=d_(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function Rs(...t){const e=t.join(" ");e in kp||(kp[e]=!0,Ne(...t))}function KS(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const ZS={[af]:of,[lf]:ff,[uf]:df,[Fs]:cf,[of]:af,[ff]:lf,[df]:uf,[cf]:Fs};class kr{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Yt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Vp=1234567;const ya=Math.PI/180,Wa=180/Math.PI;function Gs(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Yt[t&255]+Yt[t>>8&255]+Yt[t>>16&255]+Yt[t>>24&255]+"-"+Yt[e&255]+Yt[e>>8&255]+"-"+Yt[e>>16&15|64]+Yt[e>>24&255]+"-"+Yt[n&63|128]+Yt[n>>8&255]+"-"+Yt[n>>16&255]+Yt[n>>24&255]+Yt[i&255]+Yt[i>>8&255]+Yt[i>>16&255]+Yt[i>>24&255]).toLowerCase()}function Ye(t,e,n){return Math.max(e,Math.min(n,t))}function Qd(t,e){return(t%e+e)%e}function jS(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function QS(t,e,n){return t!==e?(n-t)/(e-t):0}function Ma(t,e,n){return(1-n)*t+n*e}function JS(t,e,n,i){return Ma(t,e,1-Math.exp(-n*i))}function ey(t,e=1){return e-Math.abs(Qd(t,e*2)-e)}function ty(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function ny(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function iy(t,e){return t+Math.floor(Math.random()*(e-t+1))}function ry(t,e){return t+Math.random()*(e-t)}function sy(t){return t*(.5-Math.random())}function ay(t){t!==void 0&&(Vp=t);let e=Vp+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function oy(t){return t*ya}function ly(t){return t*Wa}function uy(t){return(t&t-1)===0&&t!==0}function cy(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function fy(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function dy(t,e,n,i,r){const s=Math.cos,a=Math.sin,o=s(n/2),l=a(n/2),u=s((e+i)/2),h=a((e+i)/2),d=s((e-i)/2),c=a((e-i)/2),p=s((i-e)/2),x=a((i-e)/2);switch(r){case"XYX":t.set(o*h,l*d,l*c,o*u);break;case"YZY":t.set(l*c,o*h,l*d,o*u);break;case"ZXZ":t.set(l*d,l*c,o*h,o*u);break;case"XZX":t.set(o*h,l*x,l*p,o*u);break;case"YXY":t.set(l*p,o*h,l*x,o*u);break;case"ZYZ":t.set(l*x,l*p,o*h,o*u);break;default:Ne("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function ss(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Jt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Hp={DEG2RAD:ya,RAD2DEG:Wa,generateUUID:Gs,clamp:Ye,euclideanModulo:Qd,mapLinear:jS,inverseLerp:QS,lerp:Ma,damp:JS,pingpong:ey,smoothstep:ty,smootherstep:ny,randInt:iy,randFloat:ry,randFloatSpread:sy,seededRandom:ay,degToRad:oy,radToDeg:ly,isPowerOfTwo:uy,ceilPowerOfTwo:cy,floorPowerOfTwo:fy,setQuaternionFromProperEuler:dy,normalize:Jt,denormalize:ss},ah=class ah{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Ye(this.x,e.x,n.x),this.y=Ye(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=Ye(this.x,e,n),this.y=Ye(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ye(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Ye(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};ah.prototype.isVector2=!0;let $e=ah;class Ws{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let l=i[r+0],u=i[r+1],h=i[r+2],d=i[r+3],c=s[a+0],p=s[a+1],x=s[a+2],E=s[a+3];if(d!==E||l!==c||u!==p||h!==x){let g=l*c+u*p+h*x+d*E;g<0&&(c=-c,p=-p,x=-x,E=-E,g=-g);let f=1-o;if(g<.9995){const m=Math.acos(g),y=Math.sin(m);f=Math.sin(f*m)/y,o=Math.sin(o*m)/y,l=l*f+c*o,u=u*f+p*o,h=h*f+x*o,d=d*f+E*o}else{l=l*f+c*o,u=u*f+p*o,h=h*f+x*o,d=d*f+E*o;const m=1/Math.sqrt(l*l+u*u+h*h+d*d);l*=m,u*=m,h*=m,d*=m}}e[n]=l,e[n+1]=u,e[n+2]=h,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],l=i[r+1],u=i[r+2],h=i[r+3],d=s[a],c=s[a+1],p=s[a+2],x=s[a+3];return e[n]=o*x+h*d+l*p-u*c,e[n+1]=l*x+h*c+u*d-o*p,e[n+2]=u*x+h*p+o*c-l*d,e[n+3]=h*x-o*d-l*c-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,u=o(i/2),h=o(r/2),d=o(s/2),c=l(i/2),p=l(r/2),x=l(s/2);switch(a){case"XYZ":this._x=c*h*d+u*p*x,this._y=u*p*d-c*h*x,this._z=u*h*x+c*p*d,this._w=u*h*d-c*p*x;break;case"YXZ":this._x=c*h*d+u*p*x,this._y=u*p*d-c*h*x,this._z=u*h*x-c*p*d,this._w=u*h*d+c*p*x;break;case"ZXY":this._x=c*h*d-u*p*x,this._y=u*p*d+c*h*x,this._z=u*h*x+c*p*d,this._w=u*h*d-c*p*x;break;case"ZYX":this._x=c*h*d-u*p*x,this._y=u*p*d+c*h*x,this._z=u*h*x-c*p*d,this._w=u*h*d+c*p*x;break;case"YZX":this._x=c*h*d+u*p*x,this._y=u*p*d+c*h*x,this._z=u*h*x-c*p*d,this._w=u*h*d-c*p*x;break;case"XZY":this._x=c*h*d-u*p*x,this._y=u*p*d-c*h*x,this._z=u*h*x+c*p*d,this._w=u*h*d+c*p*x;break;default:Ne("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],l=n[9],u=n[2],h=n[6],d=n[10],c=i+o+d;if(c>0){const p=.5/Math.sqrt(c+1);this._w=.25/p,this._x=(h-l)*p,this._y=(s-u)*p,this._z=(a-r)*p}else if(i>o&&i>d){const p=2*Math.sqrt(1+i-o-d);this._w=(h-l)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+u)/p}else if(o>d){const p=2*Math.sqrt(1+o-i-d);this._w=(s-u)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+d-i-o);this._w=(a-r)/p,this._x=(s+u)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ye(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,l=n._y,u=n._z,h=n._w;return this._x=i*h+a*o+r*u-s*l,this._y=r*h+a*l+s*o-i*u,this._z=s*h+a*u+i*l-r*o,this._w=a*h-i*o-r*l-s*u,this._onChangeCallback(),this}slerp(e,n){let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let l=1-n;if(o<.9995){const u=Math.acos(o),h=Math.sin(u);l=Math.sin(l*u)/h,n=Math.sin(n*u)/h,this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+a*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+a*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const oh=class oh{constructor(e=0,n=0,i=0){this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Gp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Gp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,u=2*(a*r-o*i),h=2*(o*n-s*r),d=2*(s*i-a*n);return this.x=n+l*u+a*d-o*h,this.y=i+l*h+o*u-s*d,this.z=r+l*d+s*h-a*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Ye(this.x,e.x,n.x),this.y=Ye(this.y,e.y,n.y),this.z=Ye(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=Ye(this.x,e,n),this.y=Ye(this.y,e,n),this.z=Ye(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ye(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,l=n.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Nu.copy(this).projectOnVector(e),this.sub(Nu)}reflect(e){return this.sub(Nu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Ye(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};oh.prototype.isVector3=!0;let B=oh;const Nu=new B,Gp=new Ws,lh=class lh{constructor(e,n,i,r,s,a,o,l,u){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,u)}set(e,n,i,r,s,a,o,l,u){const h=this.elements;return h[0]=e,h[1]=r,h[2]=o,h[3]=n,h[4]=s,h[5]=l,h[6]=i,h[7]=a,h[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],l=i[6],u=i[1],h=i[4],d=i[7],c=i[2],p=i[5],x=i[8],E=r[0],g=r[3],f=r[6],m=r[1],y=r[4],S=r[7],w=r[2],T=r[5],C=r[8];return s[0]=a*E+o*m+l*w,s[3]=a*g+o*y+l*T,s[6]=a*f+o*S+l*C,s[1]=u*E+h*m+d*w,s[4]=u*g+h*y+d*T,s[7]=u*f+h*S+d*C,s[2]=c*E+p*m+x*w,s[5]=c*g+p*y+x*T,s[8]=c*f+p*S+x*C,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],h=e[8];return n*a*h-n*o*u-i*s*h+i*o*l+r*s*u-r*a*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],h=e[8],d=h*a-o*u,c=o*l-h*s,p=u*s-a*l,x=n*d+i*c+r*p;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/x;return e[0]=d*E,e[1]=(r*u-h*i)*E,e[2]=(o*i-r*a)*E,e[3]=c*E,e[4]=(h*n-r*l)*E,e[5]=(r*s-o*n)*E,e[6]=p*E,e[7]=(i*l-u*n)*E,e[8]=(a*n-i*s)*E,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*a+u*o)+a+e,-r*u,r*l,-r*(-u*a+l*o)+o+n,0,0,1),this}scale(e,n){return Rs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Iu.makeScale(e,n)),this}rotate(e){return Rs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Iu.makeRotation(-e)),this}translate(e,n){return Rs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Iu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};lh.prototype.isMatrix3=!0;let Fe=lh;const Iu=new Fe,Wp=new Fe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Xp=new Fe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function hy(){const t={enabled:!0,workingColorSpace:Nl,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===nt&&(r.r=wi(r.r),r.g=wi(r.g),r.b=wi(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===nt&&(r.r=Cs(r.r),r.g=Cs(r.g),r.b=Cs(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===$i?Il:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Rs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Rs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[Nl]:{primaries:e,whitePoint:i,transfer:Il,toXYZ:Wp,fromXYZ:Xp,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:on},outputColorSpaceConfig:{drawingBufferColorSpace:on}},[on]:{primaries:e,whitePoint:i,transfer:nt,toXYZ:Wp,fromXYZ:Xp,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:on}}}),t}const qe=hy();function wi(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Cs(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Wr;class py{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Wr===void 0&&(Wr=Ga("canvas")),Wr.width=e.width,Wr.height=e.height;const r=Wr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Wr}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Ga("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=wi(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(wi(n[i]/255)*255):n[i]=wi(n[i]);return{data:n,width:e.width,height:e.height}}else return Ne("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let my=0;class Jd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:my++}),this.uuid=Gs(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Uu(r[a].image)):s.push(Uu(r[a]))}else s=Uu(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Uu(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?py.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(Ne("Texture: Unable to serialize Texture."),{})}let gy=0;const Fu=new B;class Zt extends kr{constructor(e=Zt.DEFAULT_IMAGE,n=Zt.DEFAULT_MAPPING,i=Mi,r=Mi,s=Kt,a=Ar,o=Gn,l=vn,u=Zt.DEFAULT_ANISOTROPY,h=$i){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:gy++}),this.uuid=Gs(),this.name="",this.source=new Jd(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=u,this.format=o,this.internalFormat=null,this.type=l,this.offset=new $e(0,0),this.repeat=new $e(1,1),this.center=new $e(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Fu).x}get height(){return this.source.getSize(Fu).y}get depth(){return this.source.getSize(Fu).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){Ne(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Ne(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==r_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case hf:e.x=e.x-Math.floor(e.x);break;case Mi:e.x=e.x<0?0:1;break;case pf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case hf:e.y=e.y-Math.floor(e.y);break;case Mi:e.y=e.y<0?0:1;break;case pf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Zt.DEFAULT_IMAGE=null;Zt.DEFAULT_MAPPING=r_;Zt.DEFAULT_ANISOTROPY=1;const uh=class uh{constructor(e=0,n=0,i=0,r=1){this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,u=l[0],h=l[4],d=l[8],c=l[1],p=l[5],x=l[9],E=l[2],g=l[6],f=l[10];if(Math.abs(h-c)<.01&&Math.abs(d-E)<.01&&Math.abs(x-g)<.01){if(Math.abs(h+c)<.1&&Math.abs(d+E)<.1&&Math.abs(x+g)<.1&&Math.abs(u+p+f-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const y=(u+1)/2,S=(p+1)/2,w=(f+1)/2,T=(h+c)/4,C=(d+E)/4,v=(x+g)/4;return y>S&&y>w?y<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(y),r=T/i,s=C/i):S>w?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=T/r,s=v/r):w<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(w),i=C/s,r=v/s),this.set(i,r,s,n),this}let m=Math.sqrt((g-x)*(g-x)+(d-E)*(d-E)+(c-h)*(c-h));return Math.abs(m)<.001&&(m=1),this.x=(g-x)/m,this.y=(d-E)/m,this.z=(c-h)/m,this.w=Math.acos((u+p+f-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Ye(this.x,e.x,n.x),this.y=Ye(this.y,e.y,n.y),this.z=Ye(this.z,e.z,n.z),this.w=Ye(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=Ye(this.x,e,n),this.y=Ye(this.y,e,n),this.z=Ye(this.z,e,n),this.w=Ye(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ye(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};uh.prototype.isVector4=!0;let St=uh;class _y extends kr{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Kt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new St(0,0,e,n),this.scissorTest=!1,this.viewport=new St(0,0,e,n),this.textures=[];const r={width:e,height:n,depth:i.depth},s=new Zt(r),a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const n={minFilter:Kt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new Jd(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class li extends _y{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class h_ extends Zt{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=zt,this.minFilter=zt,this.wrapR=Mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class vy extends Zt{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=zt,this.minFilter=zt,this.wrapR=Mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ul=class Ul{constructor(e,n,i,r,s,a,o,l,u,h,d,c,p,x,E,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,u,h,d,c,p,x,E,g)}set(e,n,i,r,s,a,o,l,u,h,d,c,p,x,E,g){const f=this.elements;return f[0]=e,f[4]=n,f[8]=i,f[12]=r,f[1]=s,f[5]=a,f[9]=o,f[13]=l,f[2]=u,f[6]=h,f[10]=d,f[14]=c,f[3]=p,f[7]=x,f[11]=E,f[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ul().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinantAffine()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const n=this.elements,i=e.elements,r=1/Xr.setFromMatrixColumn(e,0).length(),s=1/Xr.setFromMatrixColumn(e,1).length(),a=1/Xr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),u=Math.sin(r),h=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const c=a*h,p=a*d,x=o*h,E=o*d;n[0]=l*h,n[4]=-l*d,n[8]=u,n[1]=p+x*u,n[5]=c-E*u,n[9]=-o*l,n[2]=E-c*u,n[6]=x+p*u,n[10]=a*l}else if(e.order==="YXZ"){const c=l*h,p=l*d,x=u*h,E=u*d;n[0]=c+E*o,n[4]=x*o-p,n[8]=a*u,n[1]=a*d,n[5]=a*h,n[9]=-o,n[2]=p*o-x,n[6]=E+c*o,n[10]=a*l}else if(e.order==="ZXY"){const c=l*h,p=l*d,x=u*h,E=u*d;n[0]=c-E*o,n[4]=-a*d,n[8]=x+p*o,n[1]=p+x*o,n[5]=a*h,n[9]=E-c*o,n[2]=-a*u,n[6]=o,n[10]=a*l}else if(e.order==="ZYX"){const c=a*h,p=a*d,x=o*h,E=o*d;n[0]=l*h,n[4]=x*u-p,n[8]=c*u+E,n[1]=l*d,n[5]=E*u+c,n[9]=p*u-x,n[2]=-u,n[6]=o*l,n[10]=a*l}else if(e.order==="YZX"){const c=a*l,p=a*u,x=o*l,E=o*u;n[0]=l*h,n[4]=E-c*d,n[8]=x*d+p,n[1]=d,n[5]=a*h,n[9]=-o*h,n[2]=-u*h,n[6]=p*d+x,n[10]=c-E*d}else if(e.order==="XZY"){const c=a*l,p=a*u,x=o*l,E=o*u;n[0]=l*h,n[4]=-d,n[8]=u*h,n[1]=c*d+E,n[5]=a*h,n[9]=p*d-x,n[2]=x*d-p,n[6]=o*h,n[10]=E*d+c}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(xy,e,Sy)}lookAt(e,n,i){const r=this.elements;return mn.subVectors(e,n),mn.lengthSq()===0&&(mn.z=1),mn.normalize(),Bi.crossVectors(i,mn),Bi.lengthSq()===0&&(Math.abs(i.z)===1?mn.x+=1e-4:mn.z+=1e-4,mn.normalize(),Bi.crossVectors(i,mn)),Bi.normalize(),yo.crossVectors(mn,Bi),r[0]=Bi.x,r[4]=yo.x,r[8]=mn.x,r[1]=Bi.y,r[5]=yo.y,r[9]=mn.y,r[2]=Bi.z,r[6]=yo.z,r[10]=mn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],l=i[8],u=i[12],h=i[1],d=i[5],c=i[9],p=i[13],x=i[2],E=i[6],g=i[10],f=i[14],m=i[3],y=i[7],S=i[11],w=i[15],T=r[0],C=r[4],v=r[8],A=r[12],b=r[1],P=r[5],F=r[9],$=r[13],J=r[2],O=r[6],K=r[10],z=r[14],I=r[3],W=r[7],Z=r[11],te=r[15];return s[0]=a*T+o*b+l*J+u*I,s[4]=a*C+o*P+l*O+u*W,s[8]=a*v+o*F+l*K+u*Z,s[12]=a*A+o*$+l*z+u*te,s[1]=h*T+d*b+c*J+p*I,s[5]=h*C+d*P+c*O+p*W,s[9]=h*v+d*F+c*K+p*Z,s[13]=h*A+d*$+c*z+p*te,s[2]=x*T+E*b+g*J+f*I,s[6]=x*C+E*P+g*O+f*W,s[10]=x*v+E*F+g*K+f*Z,s[14]=x*A+E*$+g*z+f*te,s[3]=m*T+y*b+S*J+w*I,s[7]=m*C+y*P+S*O+w*W,s[11]=m*v+y*F+S*K+w*Z,s[15]=m*A+y*$+S*z+w*te,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],u=e[13],h=e[2],d=e[6],c=e[10],p=e[14],x=e[3],E=e[7],g=e[11],f=e[15],m=l*p-u*c,y=o*p-u*d,S=o*c-l*d,w=a*p-u*h,T=a*c-l*h,C=a*d-o*h;return n*(E*m-g*y+f*S)-i*(x*m-g*w+f*T)+r*(x*y-E*w+f*C)-s*(x*S-E*T+g*C)}determinantAffine(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[1],a=e[5],o=e[9],l=e[2],u=e[6],h=e[10];return n*(a*h-o*u)-i*(s*h-o*l)+r*(s*u-a*l)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],h=e[8],d=e[9],c=e[10],p=e[11],x=e[12],E=e[13],g=e[14],f=e[15],m=n*o-i*a,y=n*l-r*a,S=n*u-s*a,w=i*l-r*o,T=i*u-s*o,C=r*u-s*l,v=h*E-d*x,A=h*g-c*x,b=h*f-p*x,P=d*g-c*E,F=d*f-p*E,$=c*f-p*g,J=m*$-y*F+S*P+w*b-T*A+C*v;if(J===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/J;return e[0]=(o*$-l*F+u*P)*O,e[1]=(r*F-i*$-s*P)*O,e[2]=(E*C-g*T+f*w)*O,e[3]=(c*T-d*C-p*w)*O,e[4]=(l*b-a*$-u*A)*O,e[5]=(n*$-r*b+s*A)*O,e[6]=(g*S-x*C-f*y)*O,e[7]=(h*C-c*S+p*y)*O,e[8]=(a*F-o*b+u*v)*O,e[9]=(i*b-n*F-s*v)*O,e[10]=(x*T-E*S+f*m)*O,e[11]=(d*S-h*T-p*m)*O,e[12]=(o*A-a*P-l*v)*O,e[13]=(n*P-i*A+r*v)*O,e[14]=(E*y-x*w-g*m)*O,e[15]=(h*w-d*y+c*m)*O,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,l=e.z,u=s*a,h=s*o;return this.set(u*a+i,u*o-r*l,u*l+r*o,0,u*o+r*l,h*o+i,h*l-r*a,0,u*l-r*o,h*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,l=n._w,u=s+s,h=a+a,d=o+o,c=s*u,p=s*h,x=s*d,E=a*h,g=a*d,f=o*d,m=l*u,y=l*h,S=l*d,w=i.x,T=i.y,C=i.z;return r[0]=(1-(E+f))*w,r[1]=(p+S)*w,r[2]=(x-y)*w,r[3]=0,r[4]=(p-S)*T,r[5]=(1-(c+f))*T,r[6]=(g+m)*T,r[7]=0,r[8]=(x+y)*C,r[9]=(g-m)*C,r[10]=(1-(c+E))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinantAffine();if(s===0)return i.set(1,1,1),n.identity(),this;let a=Xr.set(r[0],r[1],r[2]).length();const o=Xr.set(r[4],r[5],r[6]).length(),l=Xr.set(r[8],r[9],r[10]).length();s<0&&(a=-a),Fn.copy(this);const u=1/a,h=1/o,d=1/l;return Fn.elements[0]*=u,Fn.elements[1]*=u,Fn.elements[2]*=u,Fn.elements[4]*=h,Fn.elements[5]*=h,Fn.elements[6]*=h,Fn.elements[8]*=d,Fn.elements[9]*=d,Fn.elements[10]*=d,n.setFromRotationMatrix(Fn),i.x=a,i.y=o,i.z=l,this}makePerspective(e,n,i,r,s,a,o=ri,l=!1){const u=this.elements,h=2*s/(n-e),d=2*s/(i-r),c=(n+e)/(n-e),p=(i+r)/(i-r);let x,E;if(l)x=s/(a-s),E=a*s/(a-s);else if(o===ri)x=-(a+s)/(a-s),E=-2*a*s/(a-s);else if(o===Ha)x=-a/(a-s),E=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return u[0]=h,u[4]=0,u[8]=c,u[12]=0,u[1]=0,u[5]=d,u[9]=p,u[13]=0,u[2]=0,u[6]=0,u[10]=x,u[14]=E,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=ri,l=!1){const u=this.elements,h=2/(n-e),d=2/(i-r),c=-(n+e)/(n-e),p=-(i+r)/(i-r);let x,E;if(l)x=1/(a-s),E=a/(a-s);else if(o===ri)x=-2/(a-s),E=-(a+s)/(a-s);else if(o===Ha)x=-1/(a-s),E=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return u[0]=h,u[4]=0,u[8]=0,u[12]=c,u[1]=0,u[5]=d,u[9]=0,u[13]=p,u[2]=0,u[6]=0,u[10]=x,u[14]=E,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}};Ul.prototype.isMatrix4=!0;let Mt=Ul;const Xr=new B,Fn=new Mt,xy=new B(0,0,0),Sy=new B(1,1,1),Bi=new B,yo=new B,mn=new B,Yp=new Mt,qp=new Ws;class lr{constructor(e=0,n=0,i=0,r=lr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],u=r[5],h=r[9],d=r[2],c=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(Ye(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(c,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Ye(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ye(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ye(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(c,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(Ye(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,u),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Ye(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(c,u),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:Ne("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Yp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Yp,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return qp.setFromEuler(this),this.setFromQuaternion(qp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}lr.DEFAULT_ORDER="XYZ";class eh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let yy=0;const $p=new B,Yr=new Ws,di=new Mt,Mo=new B,ea=new B,My=new B,Ey=new Ws,Kp=new B(1,0,0),Zp=new B(0,1,0),jp=new B(0,0,1),Qp={type:"added"},Ty={type:"removed"},qr={type:"childadded",child:null},Ou={type:"childremoved",child:null};class jt extends kr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:yy++}),this.uuid=Gs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=jt.DEFAULT_UP.clone();const e=new B,n=new lr,i=new Ws,r=new B(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Mt},normalMatrix:{value:new Fe}}),this.matrix=new Mt,this.matrixWorld=new Mt,this.matrixAutoUpdate=jt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new eh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Yr.setFromAxisAngle(e,n),this.quaternion.multiply(Yr),this}rotateOnWorldAxis(e,n){return Yr.setFromAxisAngle(e,n),this.quaternion.premultiply(Yr),this}rotateX(e){return this.rotateOnAxis(Kp,e)}rotateY(e){return this.rotateOnAxis(Zp,e)}rotateZ(e){return this.rotateOnAxis(jp,e)}translateOnAxis(e,n){return $p.copy(e).applyQuaternion(this.quaternion),this.position.add($p.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Kp,e)}translateY(e){return this.translateOnAxis(Zp,e)}translateZ(e){return this.translateOnAxis(jp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(di.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Mo.copy(e):Mo.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),ea.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?di.lookAt(ea,Mo,this.up):di.lookAt(Mo,ea,this.up),this.quaternion.setFromRotationMatrix(di),r&&(di.extractRotation(r.matrixWorld),Yr.setFromRotationMatrix(di),this.quaternion.premultiply(Yr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(Ke("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Qp),qr.child=e,this.dispatchEvent(qr),qr.child=null):Ke("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(Ty),Ou.child=e,this.dispatchEvent(Ou),Ou.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),di.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),di.multiply(e.parent.matrixWorld)),e.applyMatrix4(di),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Qp),qr.child=e,this.dispatchEvent(qr),qr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ea,e,My),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ea,Ey,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=n-s[0]*n-s[4]*i-s[8]*r,s[13]+=i-s[1]*n-s[5]*i-s[9]*r,s[14]+=r-s[2]*n-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n,i=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),n===!0){const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let u=0,h=l.length;u<h;u++){const d=l[u];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,u=this.material.length;l<u;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(n){const o=a(e.geometries),l=a(e.materials),u=a(e.textures),h=a(e.images),d=a(e.shapes),c=a(e.skeletons),p=a(e.animations),x=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),c.length>0&&(i.skeletons=c),p.length>0&&(i.animations=p),x.length>0&&(i.nodes=x)}return i.object=r,i;function a(o){const l=[];for(const u in o){const h=o[u];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}jt.DEFAULT_UP=new B(0,1,0);jt.DEFAULT_MATRIX_AUTO_UPDATE=!0;jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class vs extends jt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const wy={type:"move"};class Bu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new vs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new vs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new vs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){a=!0;for(const E of e.hand.values()){const g=n.getJointPose(E,i),f=this._getHandJoint(u,E);g!==null&&(f.matrix.fromArray(g.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=g.radius),f.visible=g!==null}const h=u.joints["index-finger-tip"],d=u.joints["thumb-tip"],c=h.position.distanceTo(d.position),p=.02,x=.005;u.inputState.pinching&&c>p+x?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&c<=p-x&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(wy)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new vs;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const p_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ki={h:0,s:0,l:0},Eo={h:0,s:0,l:0};function ku(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Ze{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=on){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,qe.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=qe.workingColorSpace){return this.r=e,this.g=n,this.b=i,qe.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=qe.workingColorSpace){if(e=Qd(e,1),n=Ye(n,0,1),i=Ye(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=ku(a,s,e+1/3),this.g=ku(a,s,e),this.b=ku(a,s,e-1/3)}return qe.colorSpaceToWorking(this,r),this}setStyle(e,n=on){function i(s){s!==void 0&&parseFloat(s)<1&&Ne("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:Ne("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);Ne("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=on){const i=p_[e.toLowerCase()];return i!==void 0?this.setHex(i,n):Ne("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=wi(e.r),this.g=wi(e.g),this.b=wi(e.b),this}copyLinearToSRGB(e){return this.r=Cs(e.r),this.g=Cs(e.g),this.b=Cs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=on){return qe.workingToColorSpace(qt.copy(this),e),Math.round(Ye(qt.r*255,0,255))*65536+Math.round(Ye(qt.g*255,0,255))*256+Math.round(Ye(qt.b*255,0,255))}getHexString(e=on){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=qe.workingColorSpace){qe.workingToColorSpace(qt.copy(this),n);const i=qt.r,r=qt.g,s=qt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,u;const h=(o+a)/2;if(o===a)l=0,u=0;else{const d=a-o;switch(u=h<=.5?d/(a+o):d/(2-a-o),a){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=u,e.l=h,e}getRGB(e,n=qe.workingColorSpace){return qe.workingToColorSpace(qt.copy(this),n),e.r=qt.r,e.g=qt.g,e.b=qt.b,e}getStyle(e=on){qe.workingToColorSpace(qt.copy(this),e);const n=qt.r,i=qt.g,r=qt.b;return e!==on?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(ki),this.setHSL(ki.h+e,ki.s+n,ki.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(ki),e.getHSL(Eo);const i=Ma(ki.h,Eo.h,n),r=Ma(ki.s,Eo.s,n),s=Ma(ki.l,Eo.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const qt=new Ze;Ze.NAMES=p_;class Ay extends jt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new lr,this.environmentIntensity=1,this.environmentRotation=new lr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const On=new B,hi=new B,zu=new B,pi=new B,$r=new B,Kr=new B,Jp=new B,Vu=new B,Hu=new B,Gu=new B,Wu=new St,Xu=new St,Yu=new St;class Hn{constructor(e=new B,n=new B,i=new B){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),On.subVectors(e,n),r.cross(On);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){On.subVectors(r,n),hi.subVectors(i,n),zu.subVectors(e,n);const a=On.dot(On),o=On.dot(hi),l=On.dot(zu),u=hi.dot(hi),h=hi.dot(zu),d=a*u-o*o;if(d===0)return s.set(0,0,0),null;const c=1/d,p=(u*l-o*h)*c,x=(a*h-o*l)*c;return s.set(1-p-x,x,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,pi)===null?!1:pi.x>=0&&pi.y>=0&&pi.x+pi.y<=1}static getInterpolation(e,n,i,r,s,a,o,l){return this.getBarycoord(e,n,i,r,pi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,pi.x),l.addScaledVector(a,pi.y),l.addScaledVector(o,pi.z),l)}static getInterpolatedAttribute(e,n,i,r,s,a){return Wu.setScalar(0),Xu.setScalar(0),Yu.setScalar(0),Wu.fromBufferAttribute(e,n),Xu.fromBufferAttribute(e,i),Yu.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Wu,s.x),a.addScaledVector(Xu,s.y),a.addScaledVector(Yu,s.z),a}static isFrontFacing(e,n,i,r){return On.subVectors(i,n),hi.subVectors(e,n),On.cross(hi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return On.subVectors(this.c,this.b),hi.subVectors(this.a,this.b),On.cross(hi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Hn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Hn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Hn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Hn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Hn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;$r.subVectors(r,i),Kr.subVectors(s,i),Vu.subVectors(e,i);const l=$r.dot(Vu),u=Kr.dot(Vu);if(l<=0&&u<=0)return n.copy(i);Hu.subVectors(e,r);const h=$r.dot(Hu),d=Kr.dot(Hu);if(h>=0&&d<=h)return n.copy(r);const c=l*d-h*u;if(c<=0&&l>=0&&h<=0)return a=l/(l-h),n.copy(i).addScaledVector($r,a);Gu.subVectors(e,s);const p=$r.dot(Gu),x=Kr.dot(Gu);if(x>=0&&p<=x)return n.copy(s);const E=p*u-l*x;if(E<=0&&u>=0&&x<=0)return o=u/(u-x),n.copy(i).addScaledVector(Kr,o);const g=h*x-p*d;if(g<=0&&d-h>=0&&p-x>=0)return Jp.subVectors(s,r),o=(d-h)/(d-h+(p-x)),n.copy(r).addScaledVector(Jp,o);const f=1/(g+E+c);return a=E*f,o=c*f,n.copy(i).addScaledVector($r,a).addScaledVector(Kr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class ja{constructor(e=new B(1/0,1/0,1/0),n=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Bn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Bn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Bn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Bn):Bn.fromBufferAttribute(s,a),Bn.applyMatrix4(e.matrixWorld),this.expandByPoint(Bn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),To.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),To.copy(i.boundingBox)),To.applyMatrix4(e.matrixWorld),this.union(To)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Bn),Bn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ta),wo.subVectors(this.max,ta),Zr.subVectors(e.a,ta),jr.subVectors(e.b,ta),Qr.subVectors(e.c,ta),zi.subVectors(jr,Zr),Vi.subVectors(Qr,jr),hr.subVectors(Zr,Qr);let n=[0,-zi.z,zi.y,0,-Vi.z,Vi.y,0,-hr.z,hr.y,zi.z,0,-zi.x,Vi.z,0,-Vi.x,hr.z,0,-hr.x,-zi.y,zi.x,0,-Vi.y,Vi.x,0,-hr.y,hr.x,0];return!qu(n,Zr,jr,Qr,wo)||(n=[1,0,0,0,1,0,0,0,1],!qu(n,Zr,jr,Qr,wo))?!1:(Ao.crossVectors(zi,Vi),n=[Ao.x,Ao.y,Ao.z],qu(n,Zr,jr,Qr,wo))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Bn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Bn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(mi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),mi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),mi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),mi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),mi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),mi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),mi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),mi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(mi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const mi=[new B,new B,new B,new B,new B,new B,new B,new B],Bn=new B,To=new ja,Zr=new B,jr=new B,Qr=new B,zi=new B,Vi=new B,hr=new B,ta=new B,wo=new B,Ao=new B,pr=new B;function qu(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){pr.fromArray(t,s);const o=r.x*Math.abs(pr.x)+r.y*Math.abs(pr.y)+r.z*Math.abs(pr.z),l=e.dot(pr),u=n.dot(pr),h=i.dot(pr);if(Math.max(-Math.max(l,u,h),Math.min(l,u,h))>o)return!1}return!0}const Pt=new B,Ro=new $e;let Ry=0;class ui extends kr{constructor(e,n,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ry++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Op,this.updateRanges=[],this.gpuType=ii,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Ro.fromBufferAttribute(this,n),Ro.applyMatrix3(e),this.setXY(n,Ro.x,Ro.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Pt.fromBufferAttribute(this,n),Pt.applyMatrix3(e),this.setXYZ(n,Pt.x,Pt.y,Pt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Pt.fromBufferAttribute(this,n),Pt.applyMatrix4(e),this.setXYZ(n,Pt.x,Pt.y,Pt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Pt.fromBufferAttribute(this,n),Pt.applyNormalMatrix(e),this.setXYZ(n,Pt.x,Pt.y,Pt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Pt.fromBufferAttribute(this,n),Pt.transformDirection(e),this.setXYZ(n,Pt.x,Pt.y,Pt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=ss(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Jt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=ss(n,this.array)),n}setX(e,n){return this.normalized&&(n=Jt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=ss(n,this.array)),n}setY(e,n){return this.normalized&&(n=Jt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=ss(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Jt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=ss(n,this.array)),n}setW(e,n){return this.normalized&&(n=Jt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Jt(n,this.array),i=Jt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=Jt(n,this.array),i=Jt(i,this.array),r=Jt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=Jt(n,this.array),i=Jt(i,this.array),r=Jt(r,this.array),s=Jt(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Op&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class m_ extends ui{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class g_ extends ui{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Dn extends ui{constructor(e,n,i){super(new Float32Array(e),n,i)}}const Cy=new ja,na=new B,$u=new B;class th{constructor(e=new B,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):Cy.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;na.subVectors(e,this.center);const n=na.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(na,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):($u.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(na.copy(e.center).add($u)),this.expandByPoint(na.copy(e.center).sub($u))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let by=0;const An=new Mt,Ku=new jt,Jr=new B,gn=new ja,ia=new ja,Ft=new B;class fi extends kr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:by++}),this.uuid=Gs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(qS(e)?g_:m_)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Fe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return An.makeRotationFromQuaternion(e),this.applyMatrix4(An),this}rotateX(e){return An.makeRotationX(e),this.applyMatrix4(An),this}rotateY(e){return An.makeRotationY(e),this.applyMatrix4(An),this}rotateZ(e){return An.makeRotationZ(e),this.applyMatrix4(An),this}translate(e,n,i){return An.makeTranslation(e,n,i),this.applyMatrix4(An),this}scale(e,n,i){return An.makeScale(e,n,i),this.applyMatrix4(An),this}lookAt(e){return Ku.lookAt(e),Ku.updateMatrix(),this.applyMatrix4(Ku.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Jr).negate(),this.translate(Jr.x,Jr.y,Jr.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Dn(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&Ne("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ja);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ke("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];gn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ft.addVectors(this.boundingBox.min,gn.min),this.boundingBox.expandByPoint(Ft),Ft.addVectors(this.boundingBox.max,gn.max),this.boundingBox.expandByPoint(Ft)):(this.boundingBox.expandByPoint(gn.min),this.boundingBox.expandByPoint(gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ke('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new th);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ke("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(e){const i=this.boundingSphere.center;if(gn.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];ia.setFromBufferAttribute(o),this.morphTargetsRelative?(Ft.addVectors(gn.min,ia.min),gn.expandByPoint(Ft),Ft.addVectors(gn.max,ia.max),gn.expandByPoint(Ft)):(gn.expandByPoint(ia.min),gn.expandByPoint(ia.max))}gn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Ft.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Ft));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],l=this.morphTargetsRelative;for(let u=0,h=o.count;u<h;u++)Ft.fromBufferAttribute(o,u),l&&(Jr.fromBufferAttribute(e,u),Ft.add(Jr)),r=Math.max(r,i.distanceToSquared(Ft))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Ke('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Ke("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new ui(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));const o=[],l=[];for(let v=0;v<i.count;v++)o[v]=new B,l[v]=new B;const u=new B,h=new B,d=new B,c=new $e,p=new $e,x=new $e,E=new B,g=new B;function f(v,A,b){u.fromBufferAttribute(i,v),h.fromBufferAttribute(i,A),d.fromBufferAttribute(i,b),c.fromBufferAttribute(s,v),p.fromBufferAttribute(s,A),x.fromBufferAttribute(s,b),h.sub(u),d.sub(u),p.sub(c),x.sub(c);const P=1/(p.x*x.y-x.x*p.y);isFinite(P)&&(E.copy(h).multiplyScalar(x.y).addScaledVector(d,-p.y).multiplyScalar(P),g.copy(d).multiplyScalar(p.x).addScaledVector(h,-x.x).multiplyScalar(P),o[v].add(E),o[A].add(E),o[b].add(E),l[v].add(g),l[A].add(g),l[b].add(g))}let m=this.groups;m.length===0&&(m=[{start:0,count:e.count}]);for(let v=0,A=m.length;v<A;++v){const b=m[v],P=b.start,F=b.count;for(let $=P,J=P+F;$<J;$+=3)f(e.getX($+0),e.getX($+1),e.getX($+2))}const y=new B,S=new B,w=new B,T=new B;function C(v){w.fromBufferAttribute(r,v),T.copy(w);const A=o[v];y.copy(A),y.sub(w.multiplyScalar(w.dot(A))).normalize(),S.crossVectors(T,A);const P=S.dot(l[v])<0?-1:1;a.setXYZW(v,y.x,y.y,y.z,P)}for(let v=0,A=m.length;v<A;++v){const b=m[v],P=b.start,F=b.count;for(let $=P,J=P+F;$<J;$+=3)C(e.getX($+0)),C(e.getX($+1)),C(e.getX($+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==n.count)i=new ui(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let c=0,p=i.count;c<p;c++)i.setXYZ(c,0,0,0);const r=new B,s=new B,a=new B,o=new B,l=new B,u=new B,h=new B,d=new B;if(e)for(let c=0,p=e.count;c<p;c+=3){const x=e.getX(c+0),E=e.getX(c+1),g=e.getX(c+2);r.fromBufferAttribute(n,x),s.fromBufferAttribute(n,E),a.fromBufferAttribute(n,g),h.subVectors(a,s),d.subVectors(r,s),h.cross(d),o.fromBufferAttribute(i,x),l.fromBufferAttribute(i,E),u.fromBufferAttribute(i,g),o.add(h),l.add(h),u.add(h),i.setXYZ(x,o.x,o.y,o.z),i.setXYZ(E,l.x,l.y,l.z),i.setXYZ(g,u.x,u.y,u.z)}else for(let c=0,p=n.count;c<p;c+=3)r.fromBufferAttribute(n,c+0),s.fromBufferAttribute(n,c+1),a.fromBufferAttribute(n,c+2),h.subVectors(a,s),d.subVectors(r,s),h.cross(d),i.setXYZ(c+0,h.x,h.y,h.z),i.setXYZ(c+1,h.x,h.y,h.z),i.setXYZ(c+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Ft.fromBufferAttribute(e,n),Ft.normalize(),e.setXYZ(n,Ft.x,Ft.y,Ft.z)}toNonIndexed(){function e(o,l){const u=o.array,h=o.itemSize,d=o.normalized,c=new u.constructor(l.length*h);let p=0,x=0;for(let E=0,g=l.length;E<g;E++){o.isInterleavedBufferAttribute?p=l[E]*o.data.stride+o.offset:p=l[E]*h;for(let f=0;f<h;f++)c[x++]=u[p++]}return new ui(c,h,d)}if(this.index===null)return Ne("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new fi,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],u=e(l,i);n.setAttribute(o,u)}const s=this.morphAttributes;for(const o in s){const l=[],u=s[o];for(let h=0,d=u.length;h<d;h++){const c=u[h],p=e(c,i);l.push(p)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const u=a[o];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],h=[];for(let d=0,c=u.length;d<c;d++){const p=u[d];h.push(p.toJSON(e.data))}h.length>0&&(r[l]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const u in r){const h=r[u];this.setAttribute(u,h.clone(n))}const s=e.morphAttributes;for(const u in s){const h=[],d=s[u];for(let c=0,p=d.length;c<p;c++)h.push(d[c].clone(n));this.morphAttributes[u]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let u=0,h=a.length;u<h;u++){const d=a[u];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let Py=0;class Qa extends kr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Py++}),this.uuid=Gs(),this.name="",this.type="Material",this.blending=As,this.side=Pi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=rf,this.blendDst=sf,this.blendEquation=yr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ze(0,0,0),this.blendAlpha=0,this.depthFunc=Fs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Fp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Gr,this.stencilZFail=Gr,this.stencilZPass=Gr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){Ne(`Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Ne(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==As&&(i.blending=this.blending),this.side!==Pi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==rf&&(i.blendSrc=this.blendSrc),this.blendDst!==sf&&(i.blendDst=this.blendDst),this.blendEquation!==yr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Fs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Fp&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Gr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Gr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Gr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}fromJSON(e,n){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ze().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=n[e.map]||null),e.matcap!==void 0&&(this.matcap=n[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=n[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=n[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=n[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new $e().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=n[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=n[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=n[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=n[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=n[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=n[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=n[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=n[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=n[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=n[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=n[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new $e().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=n[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=n[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=n[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=n[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=n[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const gi=new B,Zu=new B,Co=new B,Hi=new B,ju=new B,bo=new B,Qu=new B;class __{constructor(e=new B,n=new B(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,gi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=gi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(gi.copy(this.origin).addScaledVector(this.direction,n),gi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Zu.copy(e).add(n).multiplyScalar(.5),Co.copy(n).sub(e).normalize(),Hi.copy(this.origin).sub(Zu);const s=e.distanceTo(n)*.5,a=-this.direction.dot(Co),o=Hi.dot(this.direction),l=-Hi.dot(Co),u=Hi.lengthSq(),h=Math.abs(1-a*a);let d,c,p,x;if(h>0)if(d=a*l-o,c=a*o-l,x=s*h,d>=0)if(c>=-x)if(c<=x){const E=1/h;d*=E,c*=E,p=d*(d+a*c+2*o)+c*(a*d+c+2*l)+u}else c=s,d=Math.max(0,-(a*c+o)),p=-d*d+c*(c+2*l)+u;else c=-s,d=Math.max(0,-(a*c+o)),p=-d*d+c*(c+2*l)+u;else c<=-x?(d=Math.max(0,-(-a*s+o)),c=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+c*(c+2*l)+u):c<=x?(d=0,c=Math.min(Math.max(-s,-l),s),p=c*(c+2*l)+u):(d=Math.max(0,-(a*s+o)),c=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+c*(c+2*l)+u);else c=a>0?-s:s,d=Math.max(0,-(a*c+o)),p=-d*d+c*(c+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Zu).addScaledVector(Co,c),p}intersectSphere(e,n){gi.subVectors(e.center,this.origin);const i=gi.dot(this.direction),r=gi.dot(gi)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,l;const u=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,c=this.origin;return u>=0?(i=(e.min.x-c.x)*u,r=(e.max.x-c.x)*u):(i=(e.max.x-c.x)*u,r=(e.min.x-c.x)*u),h>=0?(s=(e.min.y-c.y)*h,a=(e.max.y-c.y)*h):(s=(e.max.y-c.y)*h,a=(e.min.y-c.y)*h),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),d>=0?(o=(e.min.z-c.z)*d,l=(e.max.z-c.z)*d):(o=(e.max.z-c.z)*d,l=(e.min.z-c.z)*d),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,gi)!==null}intersectTriangle(e,n,i,r,s){ju.subVectors(n,e),bo.subVectors(i,e),Qu.crossVectors(ju,bo);let a=this.direction.dot(Qu),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Hi.subVectors(this.origin,e);const l=o*this.direction.dot(bo.crossVectors(Hi,bo));if(l<0)return null;const u=o*this.direction.dot(ju.cross(Hi));if(u<0||l+u>a)return null;const h=-o*Hi.dot(Qu);return h<0?null:this.at(h/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class nh extends Qa{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new lr,this.combine=Z0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const em=new Mt,mr=new __,Po=new th,tm=new B,Lo=new B,Do=new B,No=new B,Ju=new B,Io=new B,nm=new B,Uo=new B;class Sn extends jt{constructor(e=new fi,n=new nh){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Io.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const h=o[l],d=s[l];h!==0&&(Ju.fromBufferAttribute(d,e),a?Io.addScaledVector(Ju,h):Io.addScaledVector(Ju.sub(n),h))}n.add(Io)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Po.copy(i.boundingSphere),Po.applyMatrix4(s),mr.copy(e.ray).recast(e.near),!(Po.containsPoint(mr.origin)===!1&&(mr.intersectSphere(Po,tm)===null||mr.origin.distanceToSquared(tm)>(e.far-e.near)**2))&&(em.copy(s).invert(),mr.copy(e.ray).applyMatrix4(em),!(i.boundingBox!==null&&mr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,mr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,u=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,c=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,E=c.length;x<E;x++){const g=c[x],f=a[g.materialIndex],m=Math.max(g.start,p.start),y=Math.min(o.count,Math.min(g.start+g.count,p.start+p.count));for(let S=m,w=y;S<w;S+=3){const T=o.getX(S),C=o.getX(S+1),v=o.getX(S+2);r=Fo(this,f,e,i,u,h,d,T,C,v),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const x=Math.max(0,p.start),E=Math.min(o.count,p.start+p.count);for(let g=x,f=E;g<f;g+=3){const m=o.getX(g),y=o.getX(g+1),S=o.getX(g+2);r=Fo(this,a,e,i,u,h,d,m,y,S),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let x=0,E=c.length;x<E;x++){const g=c[x],f=a[g.materialIndex],m=Math.max(g.start,p.start),y=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let S=m,w=y;S<w;S+=3){const T=S,C=S+1,v=S+2;r=Fo(this,f,e,i,u,h,d,T,C,v),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const x=Math.max(0,p.start),E=Math.min(l.count,p.start+p.count);for(let g=x,f=E;g<f;g+=3){const m=g,y=g+1,S=g+2;r=Fo(this,a,e,i,u,h,d,m,y,S),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}}}function Ly(t,e,n,i,r,s,a,o){let l;if(e.side===hn?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===Pi,o),l===null)return null;Uo.copy(o),Uo.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(Uo);return u<n.near||u>n.far?null:{distance:u,point:Uo.clone(),object:t}}function Fo(t,e,n,i,r,s,a,o,l,u){t.getVertexPosition(o,Lo),t.getVertexPosition(l,Do),t.getVertexPosition(u,No);const h=Ly(t,e,n,i,Lo,Do,No,nm);if(h){const d=new B;Hn.getBarycoord(nm,Lo,Do,No,d),r&&(h.uv=Hn.getInterpolatedAttribute(r,o,l,u,d,new $e)),s&&(h.uv1=Hn.getInterpolatedAttribute(s,o,l,u,d,new $e)),a&&(h.normal=Hn.getInterpolatedAttribute(a,o,l,u,d,new B),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const c={a:o,b:l,c:u,normal:new B,materialIndex:0};Hn.getNormal(Lo,Do,No,c.normal),h.face=c,h.barycoord=d}return h}class Dy extends Zt{constructor(e=null,n=1,i=1,r,s,a,o,l,u=zt,h=zt,d,c){super(null,a,o,l,u,h,r,s,d,c),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ec=new B,Ny=new B,Iy=new Fe;class xr{constructor(e=new B(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=ec.subVectors(i,n).cross(Ny.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,i=!0){const r=e.delta(ec),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(a<0||a>1)?null:n.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||Iy.getNormalMatrix(e),r=this.coplanarPoint(ec).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const gr=new th,Uy=new $e(.5,.5),Oo=new B;class ih{constructor(e=new xr,n=new xr,i=new xr,r=new xr,s=new xr,a=new xr){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=ri,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],u=s[3],h=s[4],d=s[5],c=s[6],p=s[7],x=s[8],E=s[9],g=s[10],f=s[11],m=s[12],y=s[13],S=s[14],w=s[15];if(r[0].setComponents(u-a,p-h,f-x,w-m).normalize(),r[1].setComponents(u+a,p+h,f+x,w+m).normalize(),r[2].setComponents(u+o,p+d,f+E,w+y).normalize(),r[3].setComponents(u-o,p-d,f-E,w-y).normalize(),i)r[4].setComponents(l,c,g,S).normalize(),r[5].setComponents(u-l,p-c,f-g,w-S).normalize();else if(r[4].setComponents(u-l,p-c,f-g,w-S).normalize(),n===ri)r[5].setComponents(u+l,p+c,f+g,w+S).normalize();else if(n===Ha)r[5].setComponents(l,c,g,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),gr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),gr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(gr)}intersectsSprite(e){gr.center.set(0,0,0);const n=Uy.distanceTo(e.center);return gr.radius=.7071067811865476+n,gr.applyMatrix4(e.matrixWorld),this.intersectsSphere(gr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Oo.x=r.normal.x>0?e.max.x:e.min.x,Oo.y=r.normal.y>0?e.max.y:e.min.y,Oo.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Oo)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class v_ extends Zt{constructor(e=[],n=Ur,i,r,s,a,o,l,u,h){super(e,n,i,r,s,a,o,l,u,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Bs extends Zt{constructor(e,n,i=ci,r,s,a,o=zt,l=zt,u,h=Di,d=1){if(h!==Di&&h!==Rr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const c={width:e,height:n,depth:d};super(c,r,s,a,o,l,h,i,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Jd(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class Fy extends Bs{constructor(e,n=ci,i=Ur,r,s,a=zt,o=zt,l,u=Di){const h={width:e,height:e,depth:1},d=[h,h,h,h,h,h];super(e,e,n,i,r,s,a,o,l,u),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class x_ extends Zt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ja extends fi{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],u=[],h=[],d=[];let c=0,p=0;x("z","y","x",-1,-1,i,n,e,a,s,0),x("z","y","x",1,-1,i,n,-e,a,s,1),x("x","z","y",1,1,e,i,n,r,a,2),x("x","z","y",1,-1,e,i,-n,r,a,3),x("x","y","z",1,-1,e,n,i,r,s,4),x("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Dn(u,3)),this.setAttribute("normal",new Dn(h,3)),this.setAttribute("uv",new Dn(d,2));function x(E,g,f,m,y,S,w,T,C,v,A){const b=S/C,P=w/v,F=S/2,$=w/2,J=T/2,O=C+1,K=v+1;let z=0,I=0;const W=new B;for(let Z=0;Z<K;Z++){const te=Z*P-$;for(let oe=0;oe<O;oe++){const Ve=oe*b-F;W[E]=Ve*m,W[g]=te*y,W[f]=J,u.push(W.x,W.y,W.z),W[E]=0,W[g]=0,W[f]=T>0?1:-1,h.push(W.x,W.y,W.z),d.push(oe/C),d.push(1-Z/v),z+=1}}for(let Z=0;Z<v;Z++)for(let te=0;te<C;te++){const oe=c+te+O*Z,Ve=c+te+O*(Z+1),je=c+(te+1)+O*(Z+1),We=c+(te+1)+O*Z;l.push(oe,Ve,We),l.push(Ve,je,We),I+=6}o.addGroup(p,I,A),p+=I,c+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ja(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Jl extends fi{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),l=Math.floor(r),u=o+1,h=l+1,d=e/o,c=n/l,p=[],x=[],E=[],g=[];for(let f=0;f<h;f++){const m=f*c-a;for(let y=0;y<u;y++){const S=y*d-s;x.push(S,-m,0),E.push(0,0,1),g.push(y/o),g.push(1-f/l)}}for(let f=0;f<l;f++)for(let m=0;m<o;m++){const y=m+u*f,S=m+u*(f+1),w=m+1+u*(f+1),T=m+1+u*f;p.push(y,S,T),p.push(S,w,T)}this.setIndex(p),this.setAttribute("position",new Dn(x,3)),this.setAttribute("normal",new Dn(E,3)),this.setAttribute("uv",new Dn(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jl(e.width,e.height,e.widthSegments,e.heightSegments)}}class xs extends fi{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let u=0;const h=[],d=new B,c=new B,p=[],x=[],E=[],g=[];for(let f=0;f<=i;f++){const m=[],y=f/i,S=a+y*o,w=e*Math.cos(S),T=Math.sqrt(e*e-w*w);let C=0;f===0&&a===0?C=.5/n:f===i&&l===Math.PI&&(C=-.5/n);for(let v=0;v<=n;v++){const A=v/n,b=r+A*s;d.x=-T*Math.cos(b),d.y=w,d.z=T*Math.sin(b),x.push(d.x,d.y,d.z),c.copy(d).normalize(),E.push(c.x,c.y,c.z),g.push(A+C,1-y),m.push(u++)}h.push(m)}for(let f=0;f<i;f++)for(let m=0;m<n;m++){const y=h[f][m+1],S=h[f][m],w=h[f+1][m],T=h[f+1][m+1];(f!==0||a>0)&&p.push(y,S,T),(f!==i-1||l<Math.PI)&&p.push(S,w,T)}this.setIndex(p),this.setAttribute("position",new Dn(x,3)),this.setAttribute("normal",new Dn(E,3)),this.setAttribute("uv",new Dn(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xs(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function ks(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];if(im(r))r.isRenderTargetTexture?(Ne("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone();else if(Array.isArray(r))if(im(r[0])){const s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[n][i]=s}else e[n][i]=r.slice();else e[n][i]=r}}return e}function en(t){const e={};for(let n=0;n<t.length;n++){const i=ks(t[n]);for(const r in i)e[r]=i[r]}return e}function im(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function Oy(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function S_(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:qe.workingColorSpace}const By={clone:ks,merge:en};var ky=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,zy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class qn extends Qa{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ky,this.fragmentShader=zy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ks(e.uniforms),this.uniformsGroups=Oy(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}fromJSON(e,n){if(super.fromJSON(e,n),e.uniforms!==void 0)for(const i in e.uniforms){const r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=n[r.value]||null;break;case"c":this.uniforms[i].value=new Ze().setHex(r.value);break;case"v2":this.uniforms[i].value=new $e().fromArray(r.value);break;case"v3":this.uniforms[i].value=new B().fromArray(r.value);break;case"v4":this.uniforms[i].value=new St().fromArray(r.value);break;case"m3":this.uniforms[i].value=new Fe().fromArray(r.value);break;case"m4":this.uniforms[i].value=new Mt().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Vy extends qn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class rm extends Qa{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ze(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Xf,this.normalScale=new $e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new lr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Hy extends Qa{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=kS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Gy extends Qa{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const tc={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(sm(t)||(this.files[t]=e))},get:function(t){if(this.enabled!==!1&&!sm(t))return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};function sm(t){try{const e=t.slice(t.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class Wy{constructor(e,n,i){const r=this;let s=!1,a=0,o=0,l;const u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this._abortController=null,this.itemStart=function(h){o++,s===!1&&r.onStart!==void 0&&r.onStart(h,a,o),s=!0},this.itemEnd=function(h){a++,r.onProgress!==void 0&&r.onProgress(h,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return u.push(h,d),this},this.removeHandler=function(h){const d=u.indexOf(h);return d!==-1&&u.splice(d,2),this},this.getHandler=function(h){for(let d=0,c=u.length;d<c;d+=2){const p=u[d],x=u[d+1];if(p.global&&(p.lastIndex=0),p.test(h))return x}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const Xy=new Wy;class rh{constructor(e){this.manager=e!==void 0?e:Xy,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,n){const i=this;return new Promise(function(r,s){i.load(e,r,n,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}rh.DEFAULT_MATERIAL_NAME="__DEFAULT";const es=new WeakMap;class Yy extends rh{constructor(e){super(e)}load(e,n,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=tc.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(e),setTimeout(function(){n&&n(a),s.manager.itemEnd(e)},0);else{let d=es.get(a);d===void 0&&(d=[],es.set(a,d)),d.push({onLoad:n,onError:r})}return a}const o=Ga("img");function l(){h(),n&&n(this);const d=es.get(this)||[];for(let c=0;c<d.length;c++){const p=d[c];p.onLoad&&p.onLoad(this)}es.delete(this),s.manager.itemEnd(e)}function u(d){h(),r&&r(d),tc.remove(`image:${e}`);const c=es.get(this)||[];for(let p=0;p<c.length;p++){const x=c[p];x.onError&&x.onError(d)}es.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",u,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",u,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),tc.add(`image:${e}`,o),s.manager.itemStart(e),o.src=e,o}}class qy extends rh{constructor(e){super(e)}load(e,n,i,r){const s=new Zt,a=new Yy(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,n!==void 0&&n(s)},i,r),s}}class y_ extends jt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Ze(e),this.intensity=n}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}const nc=new Mt,am=new B,om=new B;class $y{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new $e(512,512),this.mapType=vn,this.map=null,this.mapPass=null,this.matrix=new Mt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ih,this._frameExtents=new $e(1,1),this._viewportCount=1,this._viewports=[new St(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;am.setFromMatrixPosition(e.matrixWorld),n.position.copy(am),om.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(om),n.updateMatrixWorld(),nc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(nc,n.coordinateSystem,n.reversedDepth),n.coordinateSystem===Ha||n.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(nc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Bo=new B,ko=new Ws,Qn=new B;class M_ extends jt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Mt,this.projectionMatrix=new Mt,this.projectionMatrixInverse=new Mt,this.coordinateSystem=ri,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Bo,ko,Qn),Qn.x===1&&Qn.y===1&&Qn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Bo,ko,Qn.set(1,1,1)).invert()}updateWorldMatrix(e,n,i=!1){super.updateWorldMatrix(e,n,i),this.matrixWorld.decompose(Bo,ko,Qn),Qn.x===1&&Qn.y===1&&Qn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Bo,ko,Qn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Gi=new B,lm=new $e,um=new $e;class bn extends M_{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Wa*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ya*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Wa*2*Math.atan(Math.tan(ya*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Gi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Gi.x,Gi.y).multiplyScalar(-e/Gi.z),Gi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Gi.x,Gi.y).multiplyScalar(-e/Gi.z)}getViewSize(e,n){return this.getViewBounds(e,lm,um),n.subVectors(um,lm)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(ya*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,u=a.fullHeight;s+=a.offsetX*r/l,n-=a.offsetY*i/u,r*=a.width/l,i*=a.height/u}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class sh extends M_{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,a=s+u*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class Ky extends $y{constructor(){super(new sh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Zy extends y_{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(jt.DEFAULT_UP),this.updateMatrix(),this.target=new jt,this.shadow=new Ky}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}}class jy extends y_{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}const ts=-90,ns=1;class Qy extends jt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new bn(ts,ns,e,n);r.layers=this.layers,this.add(r);const s=new bn(ts,ns,e,n);s.layers=this.layers,this.add(s);const a=new bn(ts,ns,e,n);a.layers=this.layers,this.add(a);const o=new bn(ts,ns,e,n);o.layers=this.layers,this.add(o);const l=new bn(ts,ns,e,n);l.layers=this.layers,this.add(l);const u=new bn(ts,ns,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,l]=n;for(const u of n)this.remove(u);if(e===ri)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ha)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,u,h]=this.children,d=e.getRenderTarget(),c=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const E=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,s),e.setRenderTarget(i,1,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,a),e.setRenderTarget(i,2,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,3,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(i,4,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,u),i.texture.generateMipmaps=E,e.setRenderTarget(i,5,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,h),e.setRenderTarget(d,c,p),e.xr.enabled=x,i.texture.needsPMREMUpdate=!0}}class Jy extends bn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const cm=new Mt;class eM{constructor(e,n,i=0,r=1/0){this.ray=new __(e,n),this.near=i,this.far=r,this.camera=null,this.layers=new eh,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,n.projectionMatrix.elements[14]).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):Ke("Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return cm.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(cm),this}intersectObject(e,n=!0,i=[]){return Yf(e,this,i,n),i.sort(fm),i}intersectObjects(e,n=!0,i=[]){for(let r=0,s=e.length;r<s;r++)Yf(e[r],this,i,n);return i.sort(fm),i}}function fm(t,e){return t.distance-e.distance}function Yf(t,e,n,i){let r=!0;if(t.layers.test(e.layers)&&t.raycast(e,n)===!1&&(r=!1),r===!0&&i===!0){const s=t.children;for(let a=0,o=s.length;a<o;a++)Yf(s[a],e,n,!0)}}const ch=class ch{constructor(e,n,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let i=0;i<4;i++)this.elements[i]=e[i+n];return this}set(e,n,i,r){const s=this.elements;return s[0]=e,s[2]=n,s[1]=i,s[3]=r,this}};ch.prototype.isMatrix2=!0;let dm=ch;function hm(t,e,n,i){const r=tM(i);switch(n){case u_:return t*e;case f_:return t*e/r.components*r.byteLength;case qd:return t*e/r.components*r.byteLength;case Fr:return t*e*2/r.components*r.byteLength;case $d:return t*e*2/r.components*r.byteLength;case c_:return t*e*3/r.components*r.byteLength;case Gn:return t*e*4/r.components*r.byteLength;case Kd:return t*e*4/r.components*r.byteLength;case nl:case il:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case rl:case sl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case gf:case vf:return Math.max(t,16)*Math.max(e,8)/4;case mf:case _f:return Math.max(t,8)*Math.max(e,8)/2;case xf:case Sf:case Mf:case Ef:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case yf:case Ll:case Tf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case wf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Af:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Rf:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Cf:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case bf:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Pf:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Lf:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Df:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Nf:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case If:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Uf:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Ff:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Of:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Bf:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case kf:case zf:case Vf:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Hf:case Gf:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Dl:case Wf:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function tM(t){switch(t){case vn:case s_:return{byteLength:1,components:1};case za:case a_:case Li:return{byteLength:2,components:1};case Xd:case Yd:return{byteLength:2,components:4};case ci:case Wd:case ii:return{byteLength:4,components:1};case o_:case l_:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Gd}}));typeof window<"u"&&(window.__THREE__?Ne("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Gd);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function E_(){let t=null,e=!1,n=null,i=null;function r(s,a){n(s,a),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&t!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function nM(t){const e=new WeakMap;function n(o,l){const u=o.array,h=o.usage,d=u.byteLength,c=t.createBuffer();t.bindBuffer(l,c),t.bufferData(l,u,h),o.onUploadCallback();let p;if(u instanceof Float32Array)p=t.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)p=t.HALF_FLOAT;else if(u instanceof Uint16Array)o.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(u instanceof Int16Array)p=t.SHORT;else if(u instanceof Uint32Array)p=t.UNSIGNED_INT;else if(u instanceof Int32Array)p=t.INT;else if(u instanceof Int8Array)p=t.BYTE;else if(u instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:c,type:p,bytesPerElement:u.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,u){const h=l.array,d=l.updateRanges;if(t.bindBuffer(u,o),d.length===0)t.bufferSubData(u,0,h);else{d.sort((p,x)=>p.start-x.start);let c=0;for(let p=1;p<d.length;p++){const x=d[c],E=d[p];E.start<=x.start+x.count+1?x.count=Math.max(x.count,E.start+E.count-x.start):(++c,d[c]=E)}d.length=c+1;for(let p=0,x=d.length;p<x;p++){const E=d[p];t.bufferSubData(u,E.start*h.BYTES_PER_ELEMENT,h,E.start,E.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(t.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const u=e.get(o);if(u===void 0)e.set(o,n(o,l));else if(u.version<o.version){if(u.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,o,l),u.version=o.version}}return{get:r,remove:s,update:a}}var iM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,rM=`#ifdef USE_ALPHAHASH
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
#endif`,sM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,aM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,oM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,lM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,uM=`#ifdef USE_AOMAP
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
#endif`,cM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,fM=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
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
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,dM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,hM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,pM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,mM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,gM=`#ifdef USE_IRIDESCENCE
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
#endif`,_M=`#ifdef USE_BUMPMAP
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
#endif`,vM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,xM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,SM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,yM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,MM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,EM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,TM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,wM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,AM=`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,RM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,CM=`vec3 transformedNormal = objectNormal;
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
#endif`,bM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,PM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,LM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,DM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,NM="gl_FragColor = linearToOutputTexel( gl_FragColor );",IM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,UM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,FM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,OM=`#ifdef USE_ENVMAP
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
#endif`,BM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,kM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,zM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,VM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,HM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,GM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,WM=`#ifdef USE_GRADIENTMAP
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
}`,XM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,YM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,qM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,$M=`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
#endif
#include <lightprobes_pars_fragment>`,KM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
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
#endif`,ZM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,jM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,QM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,JM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,eE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,tE=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
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
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
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
		return 0.5 / max( gv + gl, EPSILON );
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,nE=`
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
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,iE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
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
#endif`,rE=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,sE=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,aE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,oE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,uE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,cE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,fE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,dE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,hE=`#if defined( USE_POINTS_UV )
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
#endif`,pE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,mE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,gE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,_E=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,vE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xE=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,SE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,yE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,ME=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,EE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,TE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,AE=`#ifdef USE_NORMALMAP
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
#endif`,RE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,CE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,bE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,PE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,LE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,DE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,NE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,IE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,UE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,FE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,OE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,BE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,kE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,zE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,VE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
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
#endif`,HE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,GE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,WE=`#ifdef USE_SKINNING
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
#endif`,XE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,YE=`#ifdef USE_SKINNING
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
#endif`,qE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,$E=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,KE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ZE=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,jE=`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,QE=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,JE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,eT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,nT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const iT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,rT=`uniform sampler2D t2D;
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
}`,sT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,aT=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,oT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uT=`#include <common>
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
	#include <morphinstance_vertex>
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
}`,cT=`#if DEPTH_PACKING == 3200
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,fT=`#define DISTANCE
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
	#include <morphinstance_vertex>
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
}`,dT=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,hT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,pT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mT=`uniform float scale;
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,gT=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_T=`#include <common>
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
	#include <morphinstance_vertex>
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
}`,vT=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,xT=`#define LAMBERT
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
	#include <morphinstance_vertex>
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
}`,ST=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,yT=`#define MATCAP
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
	#include <morphinstance_vertex>
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
}`,MT=`#define MATCAP
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,ET=`#define NORMAL
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
	#include <morphinstance_vertex>
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
}`,TT=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,wT=`#define PHONG
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
	#include <morphinstance_vertex>
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
}`,AT=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,RT=`#define STANDARD
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
	#include <morphinstance_vertex>
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
}`,CT=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,bT=`#define TOON
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
	#include <morphinstance_vertex>
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
}`,PT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,LT=`uniform float size;
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
	#include <morphinstance_vertex>
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
}`,DT=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,NT=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,IT=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,UT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,FT=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,ze={alphahash_fragment:iM,alphahash_pars_fragment:rM,alphamap_fragment:sM,alphamap_pars_fragment:aM,alphatest_fragment:oM,alphatest_pars_fragment:lM,aomap_fragment:uM,aomap_pars_fragment:cM,batching_pars_vertex:fM,batching_vertex:dM,begin_vertex:hM,beginnormal_vertex:pM,bsdfs:mM,iridescence_fragment:gM,bumpmap_pars_fragment:_M,clipping_planes_fragment:vM,clipping_planes_pars_fragment:xM,clipping_planes_pars_vertex:SM,clipping_planes_vertex:yM,color_fragment:MM,color_pars_fragment:EM,color_pars_vertex:TM,color_vertex:wM,common:AM,cube_uv_reflection_fragment:RM,defaultnormal_vertex:CM,displacementmap_pars_vertex:bM,displacementmap_vertex:PM,emissivemap_fragment:LM,emissivemap_pars_fragment:DM,colorspace_fragment:NM,colorspace_pars_fragment:IM,envmap_fragment:UM,envmap_common_pars_fragment:FM,envmap_pars_fragment:OM,envmap_pars_vertex:BM,envmap_physical_pars_fragment:KM,envmap_vertex:kM,fog_vertex:zM,fog_pars_vertex:VM,fog_fragment:HM,fog_pars_fragment:GM,gradientmap_pars_fragment:WM,lightmap_pars_fragment:XM,lights_lambert_fragment:YM,lights_lambert_pars_fragment:qM,lights_pars_begin:$M,lights_toon_fragment:ZM,lights_toon_pars_fragment:jM,lights_phong_fragment:QM,lights_phong_pars_fragment:JM,lights_physical_fragment:eE,lights_physical_pars_fragment:tE,lights_fragment_begin:nE,lights_fragment_maps:iE,lights_fragment_end:rE,lightprobes_pars_fragment:sE,logdepthbuf_fragment:aE,logdepthbuf_pars_fragment:oE,logdepthbuf_pars_vertex:lE,logdepthbuf_vertex:uE,map_fragment:cE,map_pars_fragment:fE,map_particle_fragment:dE,map_particle_pars_fragment:hE,metalnessmap_fragment:pE,metalnessmap_pars_fragment:mE,morphinstance_vertex:gE,morphcolor_vertex:_E,morphnormal_vertex:vE,morphtarget_pars_vertex:xE,morphtarget_vertex:SE,normal_fragment_begin:yE,normal_fragment_maps:ME,normal_pars_fragment:EE,normal_pars_vertex:TE,normal_vertex:wE,normalmap_pars_fragment:AE,clearcoat_normal_fragment_begin:RE,clearcoat_normal_fragment_maps:CE,clearcoat_pars_fragment:bE,iridescence_pars_fragment:PE,opaque_fragment:LE,packing:DE,premultiplied_alpha_fragment:NE,project_vertex:IE,dithering_fragment:UE,dithering_pars_fragment:FE,roughnessmap_fragment:OE,roughnessmap_pars_fragment:BE,shadowmap_pars_fragment:kE,shadowmap_pars_vertex:zE,shadowmap_vertex:VE,shadowmask_pars_fragment:HE,skinbase_vertex:GE,skinning_pars_vertex:WE,skinning_vertex:XE,skinnormal_vertex:YE,specularmap_fragment:qE,specularmap_pars_fragment:$E,tonemapping_fragment:KE,tonemapping_pars_fragment:ZE,transmission_fragment:jE,transmission_pars_fragment:QE,uv_pars_fragment:JE,uv_pars_vertex:eT,uv_vertex:tT,worldpos_vertex:nT,background_vert:iT,background_frag:rT,backgroundCube_vert:sT,backgroundCube_frag:aT,cube_vert:oT,cube_frag:lT,depth_vert:uT,depth_frag:cT,distance_vert:fT,distance_frag:dT,equirect_vert:hT,equirect_frag:pT,linedashed_vert:mT,linedashed_frag:gT,meshbasic_vert:_T,meshbasic_frag:vT,meshlambert_vert:xT,meshlambert_frag:ST,meshmatcap_vert:yT,meshmatcap_frag:MT,meshnormal_vert:ET,meshnormal_frag:TT,meshphong_vert:wT,meshphong_frag:AT,meshphysical_vert:RT,meshphysical_frag:CT,meshtoon_vert:bT,meshtoon_frag:PT,points_vert:LT,points_frag:DT,shadow_vert:NT,shadow_frag:IT,sprite_vert:UT,sprite_frag:FT},me={common:{diffuse:{value:new Ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Fe}},envmap:{envMap:{value:null},envMapRotation:{value:new Fe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Fe},normalScale:{value:new $e(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new B},probesMax:{value:new B},probesResolution:{value:new B}},points:{diffuse:{value:new Ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0},uvTransform:{value:new Fe}},sprite:{diffuse:{value:new Ze(16777215)},opacity:{value:1},center:{value:new $e(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}}},ti={basic:{uniforms:en([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:ze.meshbasic_vert,fragmentShader:ze.meshbasic_frag},lambert:{uniforms:en([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new Ze(0)},envMapIntensity:{value:1}}]),vertexShader:ze.meshlambert_vert,fragmentShader:ze.meshlambert_frag},phong:{uniforms:en([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new Ze(0)},specular:{value:new Ze(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ze.meshphong_vert,fragmentShader:ze.meshphong_frag},standard:{uniforms:en([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new Ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},toon:{uniforms:en([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new Ze(0)}}]),vertexShader:ze.meshtoon_vert,fragmentShader:ze.meshtoon_frag},matcap:{uniforms:en([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:ze.meshmatcap_vert,fragmentShader:ze.meshmatcap_frag},points:{uniforms:en([me.points,me.fog]),vertexShader:ze.points_vert,fragmentShader:ze.points_frag},dashed:{uniforms:en([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ze.linedashed_vert,fragmentShader:ze.linedashed_frag},depth:{uniforms:en([me.common,me.displacementmap]),vertexShader:ze.depth_vert,fragmentShader:ze.depth_frag},normal:{uniforms:en([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:ze.meshnormal_vert,fragmentShader:ze.meshnormal_frag},sprite:{uniforms:en([me.sprite,me.fog]),vertexShader:ze.sprite_vert,fragmentShader:ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ze.background_vert,fragmentShader:ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Fe}},vertexShader:ze.backgroundCube_vert,fragmentShader:ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ze.cube_vert,fragmentShader:ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ze.equirect_vert,fragmentShader:ze.equirect_frag},distance:{uniforms:en([me.common,me.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ze.distance_vert,fragmentShader:ze.distance_frag},shadow:{uniforms:en([me.lights,me.fog,{color:{value:new Ze(0)},opacity:{value:1}}]),vertexShader:ze.shadow_vert,fragmentShader:ze.shadow_frag}};ti.physical={uniforms:en([ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Fe},clearcoatNormalScale:{value:new $e(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Fe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Fe},sheen:{value:0},sheenColor:{value:new Ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Fe},transmissionSamplerSize:{value:new $e},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Fe},attenuationDistance:{value:0},attenuationColor:{value:new Ze(0)},specularColor:{value:new Ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Fe},anisotropyVector:{value:new $e},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Fe}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag};const zo={r:0,b:0,g:0},OT=new Mt,T_=new Fe;T_.set(-1,0,0,0,1,0,0,0,1);function BT(t,e,n,i,r,s){const a=new Ze(0);let o=r===!0?0:1,l,u,h=null,d=0,c=null;function p(m){let y=m.isScene===!0?m.background:null;if(y&&y.isTexture){const S=m.backgroundBlurriness>0;y=e.get(y,S)}return y}function x(m){let y=!1;const S=p(m);S===null?g(a,o):S&&S.isColor&&(g(S,1),y=!0);const w=t.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,s):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(t.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function E(m,y){const S=p(y);S&&(S.isCubeTexture||S.mapping===Ql)?(u===void 0&&(u=new Sn(new Ja(1,1,1),new qn({name:"BackgroundCubeMaterial",uniforms:ks(ti.backgroundCube.uniforms),vertexShader:ti.backgroundCube.vertexShader,fragmentShader:ti.backgroundCube.fragmentShader,side:hn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(w,T,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=S,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(OT.makeRotationFromEuler(y.backgroundRotation)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&u.material.uniforms.backgroundRotation.value.premultiply(T_),u.material.toneMapped=qe.getTransfer(S.colorSpace)!==nt,(h!==S||d!==S.version||c!==t.toneMapping)&&(u.material.needsUpdate=!0,h=S,d=S.version,c=t.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new Sn(new Jl(2,2),new qn({name:"BackgroundMaterial",uniforms:ks(ti.background.uniforms),vertexShader:ti.background.vertexShader,fragmentShader:ti.background.fragmentShader,side:Pi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=qe.getTransfer(S.colorSpace)!==nt,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(h!==S||d!==S.version||c!==t.toneMapping)&&(l.material.needsUpdate=!0,h=S,d=S.version,c=t.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function g(m,y){m.getRGB(zo,S_(t)),n.buffers.color.setClear(zo.r,zo.g,zo.b,y,s)}function f(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(m,y=1){a.set(m),o=y,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(m){o=m,g(a,o)},render:x,addToRenderList:E,dispose:f}}function kT(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=c(null);let s=r,a=!1;function o(P,F,$,J,O){let K=!1;const z=d(P,J,$,F);s!==z&&(s=z,u(s.object)),K=p(P,J,$,O),K&&x(P,J,$,O),O!==null&&e.update(O,t.ELEMENT_ARRAY_BUFFER),(K||a)&&(a=!1,S(P,F,$,J),O!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(O).buffer))}function l(){return t.createVertexArray()}function u(P){return t.bindVertexArray(P)}function h(P){return t.deleteVertexArray(P)}function d(P,F,$,J){const O=J.wireframe===!0;let K=i[F.id];K===void 0&&(K={},i[F.id]=K);const z=P.isInstancedMesh===!0?P.id:0;let I=K[z];I===void 0&&(I={},K[z]=I);let W=I[$.id];W===void 0&&(W={},I[$.id]=W);let Z=W[O];return Z===void 0&&(Z=c(l()),W[O]=Z),Z}function c(P){const F=[],$=[],J=[];for(let O=0;O<n;O++)F[O]=0,$[O]=0,J[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:$,attributeDivisors:J,object:P,attributes:{},index:null}}function p(P,F,$,J){const O=s.attributes,K=F.attributes;let z=0;const I=$.getAttributes();for(const W in I)if(I[W].location>=0){const te=O[W];let oe=K[W];if(oe===void 0&&(W==="instanceMatrix"&&P.instanceMatrix&&(oe=P.instanceMatrix),W==="instanceColor"&&P.instanceColor&&(oe=P.instanceColor)),te===void 0||te.attribute!==oe||oe&&te.data!==oe.data)return!0;z++}return s.attributesNum!==z||s.index!==J}function x(P,F,$,J){const O={},K=F.attributes;let z=0;const I=$.getAttributes();for(const W in I)if(I[W].location>=0){let te=K[W];te===void 0&&(W==="instanceMatrix"&&P.instanceMatrix&&(te=P.instanceMatrix),W==="instanceColor"&&P.instanceColor&&(te=P.instanceColor));const oe={};oe.attribute=te,te&&te.data&&(oe.data=te.data),O[W]=oe,z++}s.attributes=O,s.attributesNum=z,s.index=J}function E(){const P=s.newAttributes;for(let F=0,$=P.length;F<$;F++)P[F]=0}function g(P){f(P,0)}function f(P,F){const $=s.newAttributes,J=s.enabledAttributes,O=s.attributeDivisors;$[P]=1,J[P]===0&&(t.enableVertexAttribArray(P),J[P]=1),O[P]!==F&&(t.vertexAttribDivisor(P,F),O[P]=F)}function m(){const P=s.newAttributes,F=s.enabledAttributes;for(let $=0,J=F.length;$<J;$++)F[$]!==P[$]&&(t.disableVertexAttribArray($),F[$]=0)}function y(P,F,$,J,O,K,z){z===!0?t.vertexAttribIPointer(P,F,$,O,K):t.vertexAttribPointer(P,F,$,J,O,K)}function S(P,F,$,J){E();const O=J.attributes,K=$.getAttributes(),z=F.defaultAttributeValues;for(const I in K){const W=K[I];if(W.location>=0){let Z=O[I];if(Z===void 0&&(I==="instanceMatrix"&&P.instanceMatrix&&(Z=P.instanceMatrix),I==="instanceColor"&&P.instanceColor&&(Z=P.instanceColor)),Z!==void 0){const te=Z.normalized,oe=Z.itemSize,Ve=e.get(Z);if(Ve===void 0)continue;const je=Ve.buffer,We=Ve.type,q=Ve.bytesPerElement,ae=We===t.INT||We===t.UNSIGNED_INT||Z.gpuType===Wd;if(Z.isInterleavedBufferAttribute){const re=Z.data,Le=re.stride,Ue=Z.offset;if(re.isInstancedInterleavedBuffer){for(let be=0;be<W.locationSize;be++)f(W.location+be,re.meshPerAttribute);P.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let be=0;be<W.locationSize;be++)g(W.location+be);t.bindBuffer(t.ARRAY_BUFFER,je);for(let be=0;be<W.locationSize;be++)y(W.location+be,oe/W.locationSize,We,te,Le*q,(Ue+oe/W.locationSize*be)*q,ae)}else{if(Z.isInstancedBufferAttribute){for(let re=0;re<W.locationSize;re++)f(W.location+re,Z.meshPerAttribute);P.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let re=0;re<W.locationSize;re++)g(W.location+re);t.bindBuffer(t.ARRAY_BUFFER,je);for(let re=0;re<W.locationSize;re++)y(W.location+re,oe/W.locationSize,We,te,oe*q,oe/W.locationSize*re*q,ae)}}else if(z!==void 0){const te=z[I];if(te!==void 0)switch(te.length){case 2:t.vertexAttrib2fv(W.location,te);break;case 3:t.vertexAttrib3fv(W.location,te);break;case 4:t.vertexAttrib4fv(W.location,te);break;default:t.vertexAttrib1fv(W.location,te)}}}}m()}function w(){A();for(const P in i){const F=i[P];for(const $ in F){const J=F[$];for(const O in J){const K=J[O];for(const z in K)h(K[z].object),delete K[z];delete J[O]}}delete i[P]}}function T(P){if(i[P.id]===void 0)return;const F=i[P.id];for(const $ in F){const J=F[$];for(const O in J){const K=J[O];for(const z in K)h(K[z].object),delete K[z];delete J[O]}}delete i[P.id]}function C(P){for(const F in i){const $=i[F];for(const J in $){const O=$[J];if(O[P.id]===void 0)continue;const K=O[P.id];for(const z in K)h(K[z].object),delete K[z];delete O[P.id]}}}function v(P){for(const F in i){const $=i[F],J=P.isInstancedMesh===!0?P.id:0,O=$[J];if(O!==void 0){for(const K in O){const z=O[K];for(const I in z)h(z[I].object),delete z[I];delete O[K]}delete $[J],Object.keys($).length===0&&delete i[F]}}}function A(){b(),a=!0,s!==r&&(s=r,u(s.object))}function b(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:A,resetDefaultState:b,dispose:w,releaseStatesOfGeometry:T,releaseStatesOfObject:v,releaseStatesOfProgram:C,initAttributes:E,enableAttribute:g,disableUnusedAttributes:m}}function zT(t,e,n){let i;function r(l){i=l}function s(l,u){t.drawArrays(i,l,u),n.update(u,i,1)}function a(l,u,h){h!==0&&(t.drawArraysInstanced(i,l,u,h),n.update(u,i,h))}function o(l,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,u,0,h);let c=0;for(let p=0;p<h;p++)c+=u[p];n.update(c,i,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function VT(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(C){return!(C!==Gn&&i.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const v=C===Li&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==vn&&i.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==ii&&!v)}function l(C){if(C==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=n.precision!==void 0?n.precision:"highp";const h=l(u);h!==u&&(Ne("WebGLRenderer:",u,"not supported, using",h,"instead."),u=h);const d=n.logarithmicDepthBuffer===!0,c=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&c===!1&&Ne("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),x=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=t.getParameter(t.MAX_TEXTURE_SIZE),g=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),f=t.getParameter(t.MAX_VERTEX_ATTRIBS),m=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),y=t.getParameter(t.MAX_VARYING_VECTORS),S=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),w=t.getParameter(t.MAX_SAMPLES),T=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:u,logarithmicDepthBuffer:d,reversedDepthBuffer:c,maxTextures:p,maxVertexTextures:x,maxTextureSize:E,maxCubemapSize:g,maxAttributes:f,maxVertexUniforms:m,maxVaryings:y,maxFragmentUniforms:S,maxSamples:w,samples:T}}function HT(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new xr,o=new Fe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,c){const p=d.length!==0||c||i!==0||r;return r=c,i=d.length,p},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,c){n=h(d,c,0)},this.setState=function(d,c,p){const x=d.clippingPlanes,E=d.clipIntersection,g=d.clipShadows,f=t.get(d);if(!r||x===null||x.length===0||s&&!g)s?h(null):u();else{const m=s?0:i,y=m*4;let S=f.clippingState||null;l.value=S,S=h(x,c,y,p);for(let w=0;w!==y;++w)S[w]=n[w];f.clippingState=S,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=m}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(d,c,p,x){const E=d!==null?d.length:0;let g=null;if(E!==0){if(g=l.value,x!==!0||g===null){const f=p+E*4,m=c.matrixWorldInverse;o.getNormalMatrix(m),(g===null||g.length<f)&&(g=new Float32Array(f));for(let y=0,S=p;y!==E;++y,S+=4)a.copy(d[y]).applyMatrix4(m,o),a.normal.toArray(g,S),g[S+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,g}}const ji=4,pm=[.125,.215,.35,.446,.526,.582],Mr=20,GT=256,ra=new sh,mm=new Ze;let ic=null,rc=0,sc=0,ac=!1;const WT=new B;class gm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,r=100,s={}){const{size:a=256,position:o=WT}=s;ic=this._renderer.getRenderTarget(),rc=this._renderer.getActiveCubeFace(),sc=this._renderer.getActiveMipmapLevel(),ac=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,o),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=xm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=vm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(ic,rc,sc),this._renderer.xr.enabled=ac,e.scissorTest=!1,is(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Ur||e.mapping===Os?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ic=this._renderer.getRenderTarget(),rc=this._renderer.getActiveCubeFace(),sc=this._renderer.getActiveMipmapLevel(),ac=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Kt,minFilter:Kt,generateMipmaps:!1,type:Li,format:Gn,colorSpace:Nl,depthBuffer:!1},r=_m(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=_m(e,n,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=XT(s)),this._blurMaterial=qT(s,e,n),this._ggxMaterial=YT(s,e,n)}return r}_compileMaterial(e){const n=new Sn(new fi,e);this._renderer.compile(n,ra)}_sceneToCubeUV(e,n,i,r,s){const l=new bn(90,1,n,i),u=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,c=d.autoClear,p=d.toneMapping;d.getClearColor(mm),d.toneMapping=oi,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(r),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Sn(new Ja,new nh({name:"PMREM.Background",side:hn,depthWrite:!1,depthTest:!1})));const E=this._backgroundBox,g=E.material;let f=!1;const m=e.background;m?m.isColor&&(g.color.copy(m),e.background=null,f=!0):(g.color.copy(mm),f=!0);for(let y=0;y<6;y++){const S=y%3;S===0?(l.up.set(0,u[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+h[y],s.y,s.z)):S===1?(l.up.set(0,0,u[y]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+h[y],s.z)):(l.up.set(0,u[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+h[y]));const w=this._cubeSize;is(r,S*w,y>2?w:0,w,w),d.setRenderTarget(r),f&&d.render(E,l),d.render(e,l)}d.toneMapping=p,d.autoClear=c,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Ur||e.mapping===Os;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=xm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=vm());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;is(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(a,ra)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);n.autoClear=i}_applyGGXFilter(e,n,i){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const l=a.uniforms,u=i/(this._lodMeshes.length-1),h=n/(this._lodMeshes.length-1),d=Math.sqrt(u*u-h*h),c=0+u*1.25,p=d*c,{_lodMax:x}=this,E=this._sizeLods[i],g=3*E*(i>x-ji?i-x+ji:0),f=4*(this._cubeSize-E);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=x-n,is(s,g,f,3*E,2*E),r.setRenderTarget(s),r.render(o,ra),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=x-i,is(e,g,f,3*E,2*E),r.setRenderTarget(e),r.render(o,ra)}_blur(e,n,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,n,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,a,o){const l=this._renderer,u=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Ke("blur direction must be either latitudinal or longitudinal!");const h=3,d=this._lodMeshes[r];d.material=u;const c=u.uniforms,p=this._sizeLods[i]-1,x=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Mr-1),E=s/x,g=isFinite(s)?1+Math.floor(h*E):Mr;g>Mr&&Ne(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Mr}`);const f=[];let m=0;for(let C=0;C<Mr;++C){const v=C/E,A=Math.exp(-v*v/2);f.push(A),C===0?m+=A:C<g&&(m+=2*A)}for(let C=0;C<f.length;C++)f[C]=f[C]/m;c.envMap.value=e.texture,c.samples.value=g,c.weights.value=f,c.latitudinal.value=a==="latitudinal",o&&(c.poleAxis.value=o);const{_lodMax:y}=this;c.dTheta.value=x,c.mipInt.value=y-i;const S=this._sizeLods[r],w=3*S*(r>y-ji?r-y+ji:0),T=4*(this._cubeSize-S);is(n,w,T,3*S,2*S),l.setRenderTarget(n),l.render(d,ra)}}function XT(t){const e=[],n=[],i=[];let r=t;const s=t-ji+1+pm.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let l=1/o;a>t-ji?l=pm[a-t+ji-1]:a===0&&(l=0),n.push(l);const u=1/(o-2),h=-u,d=1+u,c=[h,h,d,h,d,d,h,h,d,d,h,d],p=6,x=6,E=3,g=2,f=1,m=new Float32Array(E*x*p),y=new Float32Array(g*x*p),S=new Float32Array(f*x*p);for(let T=0;T<p;T++){const C=T%3*2/3-1,v=T>2?0:-1,A=[C,v,0,C+2/3,v,0,C+2/3,v+1,0,C,v,0,C+2/3,v+1,0,C,v+1,0];m.set(A,E*x*T),y.set(c,g*x*T);const b=[T,T,T,T,T,T];S.set(b,f*x*T)}const w=new fi;w.setAttribute("position",new ui(m,E)),w.setAttribute("uv",new ui(y,g)),w.setAttribute("faceIndex",new ui(S,f)),i.push(new Sn(w,null)),r>ji&&r--}return{lodMeshes:i,sizeLods:e,sigmas:n}}function _m(t,e,n){const i=new li(t,e,n);return i.texture.mapping=Ql,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function is(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function YT(t,e,n){return new qn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:GT,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:eu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function qT(t,e,n){const i=new Float32Array(Mr),r=new B(0,1,0);return new qn({name:"SphericalGaussianBlur",defines:{n:Mr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:eu(),fragmentShader:`

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
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function vm(){return new qn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:eu(),fragmentShader:`

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
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function xm(){return new qn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:eu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function eu(){return`

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
	`}class w_ extends li{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new v_(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ja(5,5,5),s=new qn({name:"CubemapFromEquirect",uniforms:ks(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:hn,blending:Ti});s.uniforms.tEquirect.value=n;const a=new Sn(r,s),o=n.minFilter;return n.minFilter===Ar&&(n.minFilter=Kt),new Qy(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}function $T(t){let e=new WeakMap,n=new WeakMap,i=null;function r(c,p=!1){return c==null?null:p?a(c):s(c)}function s(c){if(c&&c.isTexture){const p=c.mapping;if(p===Pu||p===Lu)if(e.has(c)){const x=e.get(c).texture;return o(x,c.mapping)}else{const x=c.image;if(x&&x.height>0){const E=new w_(x.height);return E.fromEquirectangularTexture(t,c),e.set(c,E),c.addEventListener("dispose",u),o(E.texture,c.mapping)}else return null}}return c}function a(c){if(c&&c.isTexture){const p=c.mapping,x=p===Pu||p===Lu,E=p===Ur||p===Os;if(x||E){let g=n.get(c);const f=g!==void 0?g.texture.pmremVersion:0;if(c.isRenderTargetTexture&&c.pmremVersion!==f)return i===null&&(i=new gm(t)),g=x?i.fromEquirectangular(c,g):i.fromCubemap(c,g),g.texture.pmremVersion=c.pmremVersion,n.set(c,g),g.texture;if(g!==void 0)return g.texture;{const m=c.image;return x&&m&&m.height>0||E&&m&&l(m)?(i===null&&(i=new gm(t)),g=x?i.fromEquirectangular(c):i.fromCubemap(c),g.texture.pmremVersion=c.pmremVersion,n.set(c,g),c.addEventListener("dispose",h),g.texture):null}}}return c}function o(c,p){return p===Pu?c.mapping=Ur:p===Lu&&(c.mapping=Os),c}function l(c){let p=0;const x=6;for(let E=0;E<x;E++)c[E]!==void 0&&p++;return p===x}function u(c){const p=c.target;p.removeEventListener("dispose",u);const x=e.get(p);x!==void 0&&(e.delete(p),x.dispose())}function h(c){const p=c.target;p.removeEventListener("dispose",h);const x=n.get(p);x!==void 0&&(n.delete(p),x.dispose())}function d(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:d}}function KT(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const r=t.getExtension(i);return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Rs("WebGLRenderer: "+i+" extension not supported."),r}}}function ZT(t,e,n,i){const r={},s=new WeakMap;function a(d){const c=d.target;c.index!==null&&e.remove(c.index);for(const x in c.attributes)e.remove(c.attributes[x]);c.removeEventListener("dispose",a),delete r[c.id];const p=s.get(c);p&&(e.remove(p),s.delete(c)),i.releaseStatesOfGeometry(c),c.isInstancedBufferGeometry===!0&&delete c._maxInstanceCount,n.memory.geometries--}function o(d,c){return r[c.id]===!0||(c.addEventListener("dispose",a),r[c.id]=!0,n.memory.geometries++),c}function l(d){const c=d.attributes;for(const p in c)e.update(c[p],t.ARRAY_BUFFER)}function u(d){const c=[],p=d.index,x=d.attributes.position;let E=0;if(x===void 0)return;if(p!==null){const m=p.array;E=p.version;for(let y=0,S=m.length;y<S;y+=3){const w=m[y+0],T=m[y+1],C=m[y+2];c.push(w,T,T,C,C,w)}}else{const m=x.array;E=x.version;for(let y=0,S=m.length/3-1;y<S;y+=3){const w=y+0,T=y+1,C=y+2;c.push(w,T,T,C,C,w)}}const g=new(x.count>=65535?g_:m_)(c,1);g.version=E;const f=s.get(d);f&&e.remove(f),s.set(d,g)}function h(d){const c=s.get(d);if(c){const p=d.index;p!==null&&c.version<p.version&&u(d)}else u(d);return s.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function jT(t,e,n){let i;function r(d){i=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function l(d,c){t.drawElements(i,c,s,d*a),n.update(c,i,1)}function u(d,c,p){p!==0&&(t.drawElementsInstanced(i,c,s,d*a,p),n.update(c,i,p))}function h(d,c,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,c,0,s,d,0,p);let E=0;for(let g=0;g<p;g++)E+=c[g];n.update(E,i,1)}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=h}function QT(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:Ke("WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function JT(t,e,n){const i=new WeakMap,r=new St;function s(a,o,l){const u=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0;let c=i.get(o);if(c===void 0||c.count!==d){let b=function(){v.dispose(),i.delete(o),o.removeEventListener("dispose",b)};var p=b;c!==void 0&&c.texture.dispose();const x=o.morphAttributes.position!==void 0,E=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let S=0;x===!0&&(S=1),E===!0&&(S=2),g===!0&&(S=3);let w=o.attributes.position.count*S,T=1;w>e.maxTextureSize&&(T=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const C=new Float32Array(w*T*4*d),v=new h_(C,w,T,d);v.type=ii,v.needsUpdate=!0;const A=S*4;for(let P=0;P<d;P++){const F=f[P],$=m[P],J=y[P],O=w*T*4*P;for(let K=0;K<F.count;K++){const z=K*A;x===!0&&(r.fromBufferAttribute(F,K),C[O+z+0]=r.x,C[O+z+1]=r.y,C[O+z+2]=r.z,C[O+z+3]=0),E===!0&&(r.fromBufferAttribute($,K),C[O+z+4]=r.x,C[O+z+5]=r.y,C[O+z+6]=r.z,C[O+z+7]=0),g===!0&&(r.fromBufferAttribute(J,K),C[O+z+8]=r.x,C[O+z+9]=r.y,C[O+z+10]=r.z,C[O+z+11]=J.itemSize===4?r.w:1)}}c={count:d,texture:v,size:new $e(w,T)},i.set(o,c),o.addEventListener("dispose",b)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let x=0;for(let g=0;g<u.length;g++)x+=u[g];const E=o.morphTargetsRelative?1:1-x;l.getUniforms().setValue(t,"morphTargetBaseInfluence",E),l.getUniforms().setValue(t,"morphTargetInfluences",u)}l.getUniforms().setValue(t,"morphTargetsTexture",c.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",c.size)}return{update:s}}function e1(t,e,n,i,r){let s=new WeakMap;function a(u){const h=r.render.frame,d=u.geometry,c=e.get(u,d);if(s.get(c)!==h&&(e.update(c),s.set(c,h)),u.isInstancedMesh&&(u.hasEventListener("dispose",l)===!1&&u.addEventListener("dispose",l),s.get(u)!==h&&(n.update(u.instanceMatrix,t.ARRAY_BUFFER),u.instanceColor!==null&&n.update(u.instanceColor,t.ARRAY_BUFFER),s.set(u,h))),u.isSkinnedMesh){const p=u.skeleton;s.get(p)!==h&&(p.update(),s.set(p,h))}return c}function o(){s=new WeakMap}function l(u){const h=u.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),n.remove(h.instanceMatrix),h.instanceColor!==null&&n.remove(h.instanceColor)}return{update:a,dispose:o}}const t1={[j0]:"LINEAR_TONE_MAPPING",[Q0]:"REINHARD_TONE_MAPPING",[J0]:"CINEON_TONE_MAPPING",[e_]:"ACES_FILMIC_TONE_MAPPING",[n_]:"AGX_TONE_MAPPING",[i_]:"NEUTRAL_TONE_MAPPING",[t_]:"CUSTOM_TONE_MAPPING"};function n1(t,e,n,i,r,s){const a=new li(e,n,{type:t,depthBuffer:r,stencilBuffer:s,samples:i?4:0,depthTexture:r?new Bs(e,n):void 0}),o=new li(e,n,{type:Li,depthBuffer:!1,stencilBuffer:!1}),l=new fi;l.setAttribute("position",new Dn([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new Dn([0,2,0,0,2,0],2));const u=new Vy({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),h=new Sn(l,u),d=new sh(-1,1,1,-1,0,1);let c=null,p=null,x=!1,E,g=null,f=[],m=!1;this.setSize=function(y,S){a.setSize(y,S),o.setSize(y,S);for(let w=0;w<f.length;w++){const T=f[w];T.setSize&&T.setSize(y,S)}},this.setEffects=function(y){f=y,m=f.length>0&&f[0].isRenderPass===!0;const S=a.width,w=a.height;for(let T=0;T<f.length;T++){const C=f[T];C.setSize&&C.setSize(S,w)}},this.begin=function(y,S){if(x||y.toneMapping===oi&&f.length===0)return!1;if(g=S,S!==null){const w=S.width,T=S.height;(a.width!==w||a.height!==T)&&this.setSize(w,T)}return m===!1&&y.setRenderTarget(a),E=y.toneMapping,y.toneMapping=oi,!0},this.hasRenderPass=function(){return m},this.end=function(y,S){y.toneMapping=E,x=!0;let w=a,T=o;for(let C=0;C<f.length;C++){const v=f[C];if(v.enabled!==!1&&(v.render(y,T,w,S),v.needsSwap!==!1)){const A=w;w=T,T=A}}if(c!==y.outputColorSpace||p!==y.toneMapping){c=y.outputColorSpace,p=y.toneMapping,u.defines={},qe.getTransfer(c)===nt&&(u.defines.SRGB_TRANSFER="");const C=t1[p];C&&(u.defines[C]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=w.texture,y.setRenderTarget(g),y.render(h,d),g=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){a.depthTexture&&a.depthTexture.dispose(),a.dispose(),o.dispose(),l.dispose(),u.dispose()}}const A_=new Zt,qf=new Bs(1,1),R_=new h_,C_=new vy,b_=new v_,Sm=[],ym=[],Mm=new Float32Array(16),Em=new Float32Array(9),Tm=new Float32Array(4);function Xs(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Sm[r];if(s===void 0&&(s=new Float32Array(r),Sm[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function It(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Ut(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function tu(t,e){let n=ym[e];n===void 0&&(n=new Int32Array(e),ym[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function i1(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function r1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(It(n,e))return;t.uniform2fv(this.addr,e),Ut(n,e)}}function s1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(It(n,e))return;t.uniform3fv(this.addr,e),Ut(n,e)}}function a1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(It(n,e))return;t.uniform4fv(this.addr,e),Ut(n,e)}}function o1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(It(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Ut(n,e)}else{if(It(n,i))return;Tm.set(i),t.uniformMatrix2fv(this.addr,!1,Tm),Ut(n,i)}}function l1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(It(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Ut(n,e)}else{if(It(n,i))return;Em.set(i),t.uniformMatrix3fv(this.addr,!1,Em),Ut(n,i)}}function u1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(It(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Ut(n,e)}else{if(It(n,i))return;Mm.set(i),t.uniformMatrix4fv(this.addr,!1,Mm),Ut(n,i)}}function c1(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function f1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(It(n,e))return;t.uniform2iv(this.addr,e),Ut(n,e)}}function d1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(It(n,e))return;t.uniform3iv(this.addr,e),Ut(n,e)}}function h1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(It(n,e))return;t.uniform4iv(this.addr,e),Ut(n,e)}}function p1(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function m1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(It(n,e))return;t.uniform2uiv(this.addr,e),Ut(n,e)}}function g1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(It(n,e))return;t.uniform3uiv(this.addr,e),Ut(n,e)}}function _1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(It(n,e))return;t.uniform4uiv(this.addr,e),Ut(n,e)}}function v1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(qf.compareFunction=n.isReversedDepthBuffer()?jd:Zd,s=qf):s=A_,n.setTexture2D(e||s,r)}function x1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||C_,r)}function S1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||b_,r)}function y1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||R_,r)}function M1(t){switch(t){case 5126:return i1;case 35664:return r1;case 35665:return s1;case 35666:return a1;case 35674:return o1;case 35675:return l1;case 35676:return u1;case 5124:case 35670:return c1;case 35667:case 35671:return f1;case 35668:case 35672:return d1;case 35669:case 35673:return h1;case 5125:return p1;case 36294:return m1;case 36295:return g1;case 36296:return _1;case 35678:case 36198:case 36298:case 36306:case 35682:return v1;case 35679:case 36299:case 36307:return x1;case 35680:case 36300:case 36308:case 36293:return S1;case 36289:case 36303:case 36311:case 36292:return y1}}function E1(t,e){t.uniform1fv(this.addr,e)}function T1(t,e){const n=Xs(e,this.size,2);t.uniform2fv(this.addr,n)}function w1(t,e){const n=Xs(e,this.size,3);t.uniform3fv(this.addr,n)}function A1(t,e){const n=Xs(e,this.size,4);t.uniform4fv(this.addr,n)}function R1(t,e){const n=Xs(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function C1(t,e){const n=Xs(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function b1(t,e){const n=Xs(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function P1(t,e){t.uniform1iv(this.addr,e)}function L1(t,e){t.uniform2iv(this.addr,e)}function D1(t,e){t.uniform3iv(this.addr,e)}function N1(t,e){t.uniform4iv(this.addr,e)}function I1(t,e){t.uniform1uiv(this.addr,e)}function U1(t,e){t.uniform2uiv(this.addr,e)}function F1(t,e){t.uniform3uiv(this.addr,e)}function O1(t,e){t.uniform4uiv(this.addr,e)}function B1(t,e,n){const i=this.cache,r=e.length,s=tu(n,r);It(i,s)||(t.uniform1iv(this.addr,s),Ut(i,s));let a;this.type===t.SAMPLER_2D_SHADOW?a=qf:a=A_;for(let o=0;o!==r;++o)n.setTexture2D(e[o]||a,s[o])}function k1(t,e,n){const i=this.cache,r=e.length,s=tu(n,r);It(i,s)||(t.uniform1iv(this.addr,s),Ut(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||C_,s[a])}function z1(t,e,n){const i=this.cache,r=e.length,s=tu(n,r);It(i,s)||(t.uniform1iv(this.addr,s),Ut(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||b_,s[a])}function V1(t,e,n){const i=this.cache,r=e.length,s=tu(n,r);It(i,s)||(t.uniform1iv(this.addr,s),Ut(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||R_,s[a])}function H1(t){switch(t){case 5126:return E1;case 35664:return T1;case 35665:return w1;case 35666:return A1;case 35674:return R1;case 35675:return C1;case 35676:return b1;case 5124:case 35670:return P1;case 35667:case 35671:return L1;case 35668:case 35672:return D1;case 35669:case 35673:return N1;case 5125:return I1;case 36294:return U1;case 36295:return F1;case 36296:return O1;case 35678:case 36198:case 36298:case 36306:case 35682:return B1;case 35679:case 36299:case 36307:return k1;case 35680:case 36300:case 36308:case 36293:return z1;case 36289:case 36303:case 36311:case 36292:return V1}}class G1{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=M1(n.type)}}class W1{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=H1(n.type)}}class X1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const oc=/(\w+)(\])?(\[|\.)?/g;function wm(t,e){t.seq.push(e),t.map[e.id]=e}function Y1(t,e,n){const i=t.name,r=i.length;for(oc.lastIndex=0;;){const s=oc.exec(i),a=oc.lastIndex;let o=s[1];const l=s[2]==="]",u=s[3];if(l&&(o=o|0),u===void 0||u==="["&&a+2===r){wm(n,u===void 0?new G1(o,t,e):new W1(o,t,e));break}else{let d=n.map[o];d===void 0&&(d=new X1(o),wm(n,d)),n=d}}}class al{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(n,a),l=e.getUniformLocation(n,o.name);Y1(o,l,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function Am(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const q1=37297;let $1=0;function K1(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}const Rm=new Fe;function Z1(t){qe._getMatrix(Rm,qe.workingColorSpace,t);const e=`mat3( ${Rm.elements.map(n=>n.toFixed(4))} )`;switch(qe.getTransfer(t)){case Il:return[e,"LinearTransferOETF"];case nt:return[e,"sRGBTransferOETF"];default:return Ne("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function Cm(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return n.toUpperCase()+`

`+s+`

`+K1(t.getShaderSource(e),o)}else return s}function j1(t,e){const n=Z1(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const Q1={[j0]:"Linear",[Q0]:"Reinhard",[J0]:"Cineon",[e_]:"ACESFilmic",[n_]:"AgX",[i_]:"Neutral",[t_]:"Custom"};function J1(t,e){const n=Q1[e];return n===void 0?(Ne("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Vo=new B;function ew(){qe.getLuminanceCoefficients(Vo);const t=Vo.x.toFixed(4),e=Vo.y.toFixed(4),n=Vo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function tw(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(fa).join(`
`)}function nw(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function iw(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function fa(t){return t!==""}function bm(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Pm(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const rw=/^[ \t]*#include +<([\w\d./]+)>/gm;function $f(t){return t.replace(rw,aw)}const sw=new Map;function aw(t,e){let n=ze[e];if(n===void 0){const i=sw.get(e);if(i!==void 0)n=ze[i],Ne('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return $f(n)}const ow=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Lm(t){return t.replace(ow,lw)}function lw(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Dm(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const uw={[tl]:"SHADOWMAP_TYPE_PCF",[ca]:"SHADOWMAP_TYPE_VSM"};function cw(t){return uw[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const fw={[Ur]:"ENVMAP_TYPE_CUBE",[Os]:"ENVMAP_TYPE_CUBE",[Ql]:"ENVMAP_TYPE_CUBE_UV"};function dw(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":fw[t.envMapMode]||"ENVMAP_TYPE_CUBE"}const hw={[Os]:"ENVMAP_MODE_REFRACTION"};function pw(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":hw[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const mw={[Z0]:"ENVMAP_BLENDING_MULTIPLY",[FS]:"ENVMAP_BLENDING_MIX",[OS]:"ENVMAP_BLENDING_ADD"};function gw(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":mw[t.combine]||"ENVMAP_BLENDING_NONE"}function _w(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function vw(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const l=cw(n),u=dw(n),h=pw(n),d=gw(n),c=_w(n),p=tw(n),x=nw(s),E=r.createProgram();let g,f,m=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(fa).join(`
`),g.length>0&&(g+=`
`),f=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(fa).join(`
`),f.length>0&&(f+=`
`)):(g=[Dm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(fa).join(`
`),f=[Dm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+h:"",n.envMap?"#define "+d:"",c?"#define CUBEUV_TEXEL_WIDTH "+c.texelWidth:"",c?"#define CUBEUV_TEXEL_HEIGHT "+c.texelHeight:"",c?"#define CUBEUV_MAX_MIP "+c.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==oi?"#define TONE_MAPPING":"",n.toneMapping!==oi?ze.tonemapping_pars_fragment:"",n.toneMapping!==oi?J1("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ze.colorspace_pars_fragment,j1("linearToOutputTexel",n.outputColorSpace),ew(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(fa).join(`
`)),a=$f(a),a=bm(a,n),a=Pm(a,n),o=$f(o),o=bm(o,n),o=Pm(o,n),a=Lm(a),o=Lm(o),n.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,f=["#define varying in",n.glslVersion===Bp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Bp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const y=m+g+a,S=m+f+o,w=Am(r,r.VERTEX_SHADER,y),T=Am(r,r.FRAGMENT_SHADER,S);r.attachShader(E,w),r.attachShader(E,T),n.index0AttributeName!==void 0?r.bindAttribLocation(E,0,n.index0AttributeName):n.hasPositionAttribute===!0&&r.bindAttribLocation(E,0,"position"),r.linkProgram(E);function C(P){if(t.debug.checkShaderErrors){const F=r.getProgramInfoLog(E)||"",$=r.getShaderInfoLog(w)||"",J=r.getShaderInfoLog(T)||"",O=F.trim(),K=$.trim(),z=J.trim();let I=!0,W=!0;if(r.getProgramParameter(E,r.LINK_STATUS)===!1)if(I=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,E,w,T);else{const Z=Cm(r,w,"vertex"),te=Cm(r,T,"fragment");Ke("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(E,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+O+`
`+Z+`
`+te)}else O!==""?Ne("WebGLProgram: Program Info Log:",O):(K===""||z==="")&&(W=!1);W&&(P.diagnostics={runnable:I,programLog:O,vertexShader:{log:K,prefix:g},fragmentShader:{log:z,prefix:f}})}r.deleteShader(w),r.deleteShader(T),v=new al(r,E),A=iw(r,E)}let v;this.getUniforms=function(){return v===void 0&&C(this),v};let A;this.getAttributes=function(){return A===void 0&&C(this),A};let b=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=r.getProgramParameter(E,q1)),b},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(E),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=$1++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=w,this.fragmentShader=T,this}let xw=0;class Sw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,n,i){const r=this._getShaderCacheForMaterial(e);return r.has(n)===!1&&(r.add(n),n.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new yw(e),n.set(e,i)),i}}class yw{constructor(e){this.id=xw++,this.code=e,this.usedTimes=0}}function Mw(t){return t===Fr||t===Ll||t===Dl}function Ew(t,e,n,i,r,s){const a=new eh,o=new Sw,l=new Set,u=[],h=new Map,d=i.logarithmicDepthBuffer;let c=i.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(v){return l.add(v),v===0?"uv":`uv${v}`}function E(v,A,b,P,F,$){const J=P.fog,O=F.geometry,K=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?P.environment:null,z=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,I=e.get(v.envMap||K,z),W=I&&I.mapping===Ql?I.image.height:null,Z=p[v.type];v.precision!==null&&(c=i.getMaxPrecision(v.precision),c!==v.precision&&Ne("WebGLProgram.getParameters:",v.precision,"not supported, using",c,"instead."));const te=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,oe=te!==void 0?te.length:0;let Ve=0;O.morphAttributes.position!==void 0&&(Ve=1),O.morphAttributes.normal!==void 0&&(Ve=2),O.morphAttributes.color!==void 0&&(Ve=3);let je,We,q,ae;if(Z){const Me=ti[Z];je=Me.vertexShader,We=Me.fragmentShader}else{je=v.vertexShader,We=v.fragmentShader;const Me=o.getVertexShaderStage(v),Tt=o.getFragmentShaderStage(v);o.update(v,Me,Tt),q=Me.id,ae=Tt.id}const re=t.getRenderTarget(),Le=t.state.buffers.depth.getReversed(),Ue=F.isInstancedMesh===!0,be=F.isBatchedMesh===!0,_t=!!v.map,He=!!v.matcap,et=!!I,De=!!v.aoMap,ne=!!v.lightMap,Ie=!!v.bumpMap&&v.wireframe===!1,ke=!!v.normalMap,dt=!!v.displacementMap,ht=!!v.emissiveMap,pt=!!v.metalnessMap,lt=!!v.roughnessMap,D=v.anisotropy>0,an=v.clearcoat>0,tt=v.dispersion>0,R=v.iridescence>0,_=v.sheen>0,U=v.transmission>0,H=D&&!!v.anisotropyMap,X=an&&!!v.clearcoatMap,le=an&&!!v.clearcoatNormalMap,ce=an&&!!v.clearcoatRoughnessMap,Y=R&&!!v.iridescenceMap,Q=R&&!!v.iridescenceThicknessMap,fe=_&&!!v.sheenColorMap,we=_&&!!v.sheenRoughnessMap,pe=!!v.specularMap,de=!!v.specularColorMap,Ce=!!v.specularIntensityMap,Pe=U&&!!v.transmissionMap,Oe=U&&!!v.thicknessMap,L=!!v.gradientMap,ue=!!v.alphaMap,j=v.alphaTest>0,he=!!v.alphaHash,ve=!!v.extensions;let ee=oi;v.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(ee=t.toneMapping);const Te={shaderID:Z,shaderType:v.type,shaderName:v.name,vertexShader:je,fragmentShader:We,defines:v.defines,customVertexShaderID:q,customFragmentShaderID:ae,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:c,batching:be,batchingColor:be&&F._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&F.instanceColor!==null,instancingMorph:Ue&&F.morphTexture!==null,outputColorSpace:re===null?t.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:qe.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:_t,matcap:He,envMap:et,envMapMode:et&&I.mapping,envMapCubeUVHeight:W,aoMap:De,lightMap:ne,bumpMap:Ie,normalMap:ke,displacementMap:dt,emissiveMap:ht,normalMapObjectSpace:ke&&v.normalMapType===zS,normalMapTangentSpace:ke&&v.normalMapType===Xf,packedNormalMap:ke&&v.normalMapType===Xf&&Mw(v.normalMap.format),metalnessMap:pt,roughnessMap:lt,anisotropy:D,anisotropyMap:H,clearcoat:an,clearcoatMap:X,clearcoatNormalMap:le,clearcoatRoughnessMap:ce,dispersion:tt,iridescence:R,iridescenceMap:Y,iridescenceThicknessMap:Q,sheen:_,sheenColorMap:fe,sheenRoughnessMap:we,specularMap:pe,specularColorMap:de,specularIntensityMap:Ce,transmission:U,transmissionMap:Pe,thicknessMap:Oe,gradientMap:L,opaque:v.transparent===!1&&v.blending===As&&v.alphaToCoverage===!1,alphaMap:ue,alphaTest:j,alphaHash:he,combine:v.combine,mapUv:_t&&x(v.map.channel),aoMapUv:De&&x(v.aoMap.channel),lightMapUv:ne&&x(v.lightMap.channel),bumpMapUv:Ie&&x(v.bumpMap.channel),normalMapUv:ke&&x(v.normalMap.channel),displacementMapUv:dt&&x(v.displacementMap.channel),emissiveMapUv:ht&&x(v.emissiveMap.channel),metalnessMapUv:pt&&x(v.metalnessMap.channel),roughnessMapUv:lt&&x(v.roughnessMap.channel),anisotropyMapUv:H&&x(v.anisotropyMap.channel),clearcoatMapUv:X&&x(v.clearcoatMap.channel),clearcoatNormalMapUv:le&&x(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ce&&x(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Y&&x(v.iridescenceMap.channel),iridescenceThicknessMapUv:Q&&x(v.iridescenceThicknessMap.channel),sheenColorMapUv:fe&&x(v.sheenColorMap.channel),sheenRoughnessMapUv:we&&x(v.sheenRoughnessMap.channel),specularMapUv:pe&&x(v.specularMap.channel),specularColorMapUv:de&&x(v.specularColorMap.channel),specularIntensityMapUv:Ce&&x(v.specularIntensityMap.channel),transmissionMapUv:Pe&&x(v.transmissionMap.channel),thicknessMapUv:Oe&&x(v.thicknessMap.channel),alphaMapUv:ue&&x(v.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(ke||D),vertexNormals:!!O.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!O.attributes.uv&&(_t||ue),fog:!!J,useFog:v.fog===!0,fogExp2:!!J&&J.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||O.attributes.normal===void 0&&ke===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Le,skinning:F.isSkinnedMesh===!0,hasPositionAttribute:O.attributes.position!==void 0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:oe,morphTextureStride:Ve,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:$.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:v.dithering,shadowMapEnabled:t.shadowMap.enabled&&b.length>0,shadowMapType:t.shadowMap.type,toneMapping:ee,decodeVideoTexture:_t&&v.map.isVideoTexture===!0&&qe.getTransfer(v.map.colorSpace)===nt,decodeVideoTextureEmissive:ht&&v.emissiveMap.isVideoTexture===!0&&qe.getTransfer(v.emissiveMap.colorSpace)===nt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===xi,flipSided:v.side===hn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:ve&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ve&&v.extensions.multiDraw===!0||be)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Te.vertexUv1s=l.has(1),Te.vertexUv2s=l.has(2),Te.vertexUv3s=l.has(3),l.clear(),Te}function g(v){const A=[];if(v.shaderID?A.push(v.shaderID):(A.push(v.customVertexShaderID),A.push(v.customFragmentShaderID)),v.defines!==void 0)for(const b in v.defines)A.push(b),A.push(v.defines[b]);return v.isRawShaderMaterial===!1&&(f(A,v),m(A,v),A.push(t.outputColorSpace)),A.push(v.customProgramCacheKey),A.join()}function f(v,A){v.push(A.precision),v.push(A.outputColorSpace),v.push(A.envMapMode),v.push(A.envMapCubeUVHeight),v.push(A.mapUv),v.push(A.alphaMapUv),v.push(A.lightMapUv),v.push(A.aoMapUv),v.push(A.bumpMapUv),v.push(A.normalMapUv),v.push(A.displacementMapUv),v.push(A.emissiveMapUv),v.push(A.metalnessMapUv),v.push(A.roughnessMapUv),v.push(A.anisotropyMapUv),v.push(A.clearcoatMapUv),v.push(A.clearcoatNormalMapUv),v.push(A.clearcoatRoughnessMapUv),v.push(A.iridescenceMapUv),v.push(A.iridescenceThicknessMapUv),v.push(A.sheenColorMapUv),v.push(A.sheenRoughnessMapUv),v.push(A.specularMapUv),v.push(A.specularColorMapUv),v.push(A.specularIntensityMapUv),v.push(A.transmissionMapUv),v.push(A.thicknessMapUv),v.push(A.combine),v.push(A.fogExp2),v.push(A.sizeAttenuation),v.push(A.morphTargetsCount),v.push(A.morphAttributeCount),v.push(A.numDirLights),v.push(A.numPointLights),v.push(A.numSpotLights),v.push(A.numSpotLightMaps),v.push(A.numHemiLights),v.push(A.numRectAreaLights),v.push(A.numDirLightShadows),v.push(A.numPointLightShadows),v.push(A.numSpotLightShadows),v.push(A.numSpotLightShadowsWithMaps),v.push(A.numLightProbes),v.push(A.shadowMapType),v.push(A.toneMapping),v.push(A.numClippingPlanes),v.push(A.numClipIntersection),v.push(A.depthPacking)}function m(v,A){a.disableAll(),A.instancing&&a.enable(0),A.instancingColor&&a.enable(1),A.instancingMorph&&a.enable(2),A.matcap&&a.enable(3),A.envMap&&a.enable(4),A.normalMapObjectSpace&&a.enable(5),A.normalMapTangentSpace&&a.enable(6),A.clearcoat&&a.enable(7),A.iridescence&&a.enable(8),A.alphaTest&&a.enable(9),A.vertexColors&&a.enable(10),A.vertexAlphas&&a.enable(11),A.vertexUv1s&&a.enable(12),A.vertexUv2s&&a.enable(13),A.vertexUv3s&&a.enable(14),A.vertexTangents&&a.enable(15),A.anisotropy&&a.enable(16),A.alphaHash&&a.enable(17),A.batching&&a.enable(18),A.dispersion&&a.enable(19),A.batchingColor&&a.enable(20),A.gradientMap&&a.enable(21),A.packedNormalMap&&a.enable(22),A.vertexNormals&&a.enable(23),v.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.reversedDepthBuffer&&a.enable(4),A.skinning&&a.enable(5),A.morphTargets&&a.enable(6),A.morphNormals&&a.enable(7),A.morphColors&&a.enable(8),A.premultipliedAlpha&&a.enable(9),A.shadowMapEnabled&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),A.decodeVideoTextureEmissive&&a.enable(20),A.alphaToCoverage&&a.enable(21),A.numLightProbeGrids>0&&a.enable(22),A.hasPositionAttribute&&a.enable(23),v.push(a.mask)}function y(v){const A=p[v.type];let b;if(A){const P=ti[A];b=By.clone(P.uniforms)}else b=v.uniforms;return b}function S(v,A){let b=h.get(A);return b!==void 0?++b.usedTimes:(b=new vw(t,A,v,r),u.push(b),h.set(A,b)),b}function w(v){if(--v.usedTimes===0){const A=u.indexOf(v);u[A]=u[u.length-1],u.pop(),h.delete(v.cacheKey),v.destroy()}}function T(v){o.remove(v)}function C(){o.dispose()}return{getParameters:E,getProgramCacheKey:g,getUniforms:y,acquireProgram:S,releaseProgram:w,releaseShaderCache:T,programs:u,dispose:C}}function Tw(){let t=new WeakMap;function e(a){return t.has(a)}function n(a){let o=t.get(a);return o===void 0&&(o={},t.set(a,o)),o}function i(a){t.delete(a)}function r(a,o,l){t.get(a)[o]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function ww(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function Nm(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Im(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(c){let p=0;return c.isInstancedMesh&&(p+=2),c.isSkinnedMesh&&(p+=1),p}function o(c,p,x,E,g,f){let m=t[e];return m===void 0?(m={id:c.id,object:c,geometry:p,material:x,materialVariant:a(c),groupOrder:E,renderOrder:c.renderOrder,z:g,group:f},t[e]=m):(m.id=c.id,m.object=c,m.geometry=p,m.material=x,m.materialVariant=a(c),m.groupOrder=E,m.renderOrder=c.renderOrder,m.z=g,m.group=f),e++,m}function l(c,p,x,E,g,f){const m=o(c,p,x,E,g,f);x.transmission>0?i.push(m):x.transparent===!0?r.push(m):n.push(m)}function u(c,p,x,E,g,f){const m=o(c,p,x,E,g,f);x.transmission>0?i.unshift(m):x.transparent===!0?r.unshift(m):n.unshift(m)}function h(c,p,x){n.length>1&&n.sort(c||ww),i.length>1&&i.sort(p||Nm),r.length>1&&r.sort(p||Nm),x&&(n.reverse(),i.reverse(),r.reverse())}function d(){for(let c=e,p=t.length;c<p;c++){const x=t[c];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:l,unshift:u,finish:d,sort:h}}function Aw(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new Im,t.set(i,[a])):r>=s.length?(a=new Im,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function Rw(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new B,color:new Ze};break;case"SpotLight":n={position:new B,direction:new B,color:new Ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new B,color:new Ze,distance:0,decay:0};break;case"HemisphereLight":n={direction:new B,skyColor:new Ze,groundColor:new Ze};break;case"RectAreaLight":n={color:new Ze,position:new B,halfWidth:new B,halfHeight:new B};break}return t[e.id]=n,n}}}function Cw(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let bw=0;function Pw(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function Lw(t){const e=new Rw,n=Cw(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new B);const r=new B,s=new Mt,a=new Mt;function o(u){let h=0,d=0,c=0;for(let A=0;A<9;A++)i.probe[A].set(0,0,0);let p=0,x=0,E=0,g=0,f=0,m=0,y=0,S=0,w=0,T=0,C=0;u.sort(Pw);for(let A=0,b=u.length;A<b;A++){const P=u[A],F=P.color,$=P.intensity,J=P.distance;let O=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===Fr?O=P.shadow.map.texture:O=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)h+=F.r*$,d+=F.g*$,c+=F.b*$;else if(P.isLightProbe){for(let K=0;K<9;K++)i.probe[K].addScaledVector(P.sh.coefficients[K],$);C++}else if(P.isDirectionalLight){const K=e.get(P);if(K.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const z=P.shadow,I=n.get(P);I.shadowIntensity=z.intensity,I.shadowBias=z.bias,I.shadowNormalBias=z.normalBias,I.shadowRadius=z.radius,I.shadowMapSize=z.mapSize,i.directionalShadow[p]=I,i.directionalShadowMap[p]=O,i.directionalShadowMatrix[p]=P.shadow.matrix,m++}i.directional[p]=K,p++}else if(P.isSpotLight){const K=e.get(P);K.position.setFromMatrixPosition(P.matrixWorld),K.color.copy(F).multiplyScalar($),K.distance=J,K.coneCos=Math.cos(P.angle),K.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),K.decay=P.decay,i.spot[E]=K;const z=P.shadow;if(P.map&&(i.spotLightMap[w]=P.map,w++,z.updateMatrices(P),P.castShadow&&T++),i.spotLightMatrix[E]=z.matrix,P.castShadow){const I=n.get(P);I.shadowIntensity=z.intensity,I.shadowBias=z.bias,I.shadowNormalBias=z.normalBias,I.shadowRadius=z.radius,I.shadowMapSize=z.mapSize,i.spotShadow[E]=I,i.spotShadowMap[E]=O,S++}E++}else if(P.isRectAreaLight){const K=e.get(P);K.color.copy(F).multiplyScalar($),K.halfWidth.set(P.width*.5,0,0),K.halfHeight.set(0,P.height*.5,0),i.rectArea[g]=K,g++}else if(P.isPointLight){const K=e.get(P);if(K.color.copy(P.color).multiplyScalar(P.intensity),K.distance=P.distance,K.decay=P.decay,P.castShadow){const z=P.shadow,I=n.get(P);I.shadowIntensity=z.intensity,I.shadowBias=z.bias,I.shadowNormalBias=z.normalBias,I.shadowRadius=z.radius,I.shadowMapSize=z.mapSize,I.shadowCameraNear=z.camera.near,I.shadowCameraFar=z.camera.far,i.pointShadow[x]=I,i.pointShadowMap[x]=O,i.pointShadowMatrix[x]=P.shadow.matrix,y++}i.point[x]=K,x++}else if(P.isHemisphereLight){const K=e.get(P);K.skyColor.copy(P.color).multiplyScalar($),K.groundColor.copy(P.groundColor).multiplyScalar($),i.hemi[f]=K,f++}}g>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=me.LTC_FLOAT_1,i.rectAreaLTC2=me.LTC_FLOAT_2):(i.rectAreaLTC1=me.LTC_HALF_1,i.rectAreaLTC2=me.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=c;const v=i.hash;(v.directionalLength!==p||v.pointLength!==x||v.spotLength!==E||v.rectAreaLength!==g||v.hemiLength!==f||v.numDirectionalShadows!==m||v.numPointShadows!==y||v.numSpotShadows!==S||v.numSpotMaps!==w||v.numLightProbes!==C)&&(i.directional.length=p,i.spot.length=E,i.rectArea.length=g,i.point.length=x,i.hemi.length=f,i.directionalShadow.length=m,i.directionalShadowMap.length=m,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=m,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=S+w-T,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=C,v.directionalLength=p,v.pointLength=x,v.spotLength=E,v.rectAreaLength=g,v.hemiLength=f,v.numDirectionalShadows=m,v.numPointShadows=y,v.numSpotShadows=S,v.numSpotMaps=w,v.numLightProbes=C,i.version=bw++)}function l(u,h){let d=0,c=0,p=0,x=0,E=0;const g=h.matrixWorldInverse;for(let f=0,m=u.length;f<m;f++){const y=u[f];if(y.isDirectionalLight){const S=i.directional[d];S.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(g),d++}else if(y.isSpotLight){const S=i.spot[p];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(g),S.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(g),p++}else if(y.isRectAreaLight){const S=i.rectArea[x];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(g),a.identity(),s.copy(y.matrixWorld),s.premultiply(g),a.extractRotation(s),S.halfWidth.set(y.width*.5,0,0),S.halfHeight.set(0,y.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),x++}else if(y.isPointLight){const S=i.point[c];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(g),c++}else if(y.isHemisphereLight){const S=i.hemi[E];S.direction.setFromMatrixPosition(y.matrixWorld),S.direction.transformDirection(g),E++}}}return{setup:o,setupView:l,state:i}}function Um(t){const e=new Lw(t),n=[],i=[],r=[];function s(c){d.camera=c,n.length=0,i.length=0,r.length=0}function a(c){n.push(c)}function o(c){i.push(c)}function l(c){r.push(c)}function u(){e.setup(n)}function h(c){e.setupView(n,c)}const d={lightsArray:n,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:d,setupLights:u,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function Dw(t){let e=new WeakMap;function n(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new Um(t),e.set(r,[o])):s>=a.length?(o=new Um(t),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:n,dispose:i}}const Nw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Iw=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Uw=[new B(1,0,0),new B(-1,0,0),new B(0,1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1)],Fw=[new B(0,-1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1),new B(0,-1,0),new B(0,-1,0)],Fm=new Mt,sa=new B,lc=new B;function Ow(t,e,n){let i=new ih;const r=new $e,s=new $e,a=new St,o=new Hy,l=new Gy,u={},h=n.maxTextureSize,d={[Pi]:hn,[hn]:Pi,[xi]:xi},c=new qn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $e},radius:{value:4}},vertexShader:Nw,fragmentShader:Iw}),p=c.clone();p.defines.HORIZONTAL_PASS=1;const x=new fi;x.setAttribute("position",new ui(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new Sn(x,c),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=tl;let f=this.type;this.render=function(T,C,v){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||T.length===0)return;this.type===_S&&(Ne("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=tl);const A=t.getRenderTarget(),b=t.getActiveCubeFace(),P=t.getActiveMipmapLevel(),F=t.state;F.setBlending(Ti),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const $=f!==this.type;$&&C.traverse(function(J){J.material&&(Array.isArray(J.material)?J.material.forEach(O=>O.needsUpdate=!0):J.material.needsUpdate=!0)});for(let J=0,O=T.length;J<O;J++){const K=T[J],z=K.shadow;if(z===void 0){Ne("WebGLShadowMap:",K,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;r.copy(z.mapSize);const I=z.getFrameExtents();r.multiply(I),s.copy(z.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/I.x),r.x=s.x*I.x,z.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/I.y),r.y=s.y*I.y,z.mapSize.y=s.y));const W=t.state.buffers.depth.getReversed();if(z.camera._reversedDepth=W,z.map===null||$===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===ca){if(K.isPointLight){Ne("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new li(r.x,r.y,{format:Fr,type:Li,minFilter:Kt,magFilter:Kt,generateMipmaps:!1}),z.map.texture.name=K.name+".shadowMap",z.map.depthTexture=new Bs(r.x,r.y,ii),z.map.depthTexture.name=K.name+".shadowMapDepth",z.map.depthTexture.format=Di,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=zt,z.map.depthTexture.magFilter=zt}else K.isPointLight?(z.map=new w_(r.x),z.map.depthTexture=new Fy(r.x,ci)):(z.map=new li(r.x,r.y),z.map.depthTexture=new Bs(r.x,r.y,ci)),z.map.depthTexture.name=K.name+".shadowMap",z.map.depthTexture.format=Di,this.type===tl?(z.map.depthTexture.compareFunction=W?jd:Zd,z.map.depthTexture.minFilter=Kt,z.map.depthTexture.magFilter=Kt):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=zt,z.map.depthTexture.magFilter=zt);z.camera.updateProjectionMatrix()}const Z=z.map.isWebGLCubeRenderTarget?6:1;for(let te=0;te<Z;te++){if(z.map.isWebGLCubeRenderTarget)t.setRenderTarget(z.map,te),t.clear();else{te===0&&(t.setRenderTarget(z.map),t.clear());const oe=z.getViewport(te);a.set(s.x*oe.x,s.y*oe.y,s.x*oe.z,s.y*oe.w),F.viewport(a)}if(K.isPointLight){const oe=z.camera,Ve=z.matrix,je=K.distance||oe.far;je!==oe.far&&(oe.far=je,oe.updateProjectionMatrix()),sa.setFromMatrixPosition(K.matrixWorld),oe.position.copy(sa),lc.copy(oe.position),lc.add(Uw[te]),oe.up.copy(Fw[te]),oe.lookAt(lc),oe.updateMatrixWorld(),Ve.makeTranslation(-sa.x,-sa.y,-sa.z),Fm.multiplyMatrices(oe.projectionMatrix,oe.matrixWorldInverse),z._frustum.setFromProjectionMatrix(Fm,oe.coordinateSystem,oe.reversedDepth)}else z.updateMatrices(K);i=z.getFrustum(),S(C,v,z.camera,K,this.type)}z.isPointLightShadow!==!0&&this.type===ca&&m(z,v),z.needsUpdate=!1}f=this.type,g.needsUpdate=!1,t.setRenderTarget(A,b,P)};function m(T,C){const v=e.update(E);c.defines.VSM_SAMPLES!==T.blurSamples&&(c.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,c.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new li(r.x,r.y,{format:Fr,type:Li})),c.uniforms.shadow_pass.value=T.map.depthTexture,c.uniforms.resolution.value=T.mapSize,c.uniforms.radius.value=T.radius,t.setRenderTarget(T.mapPass),t.clear(),t.renderBufferDirect(C,null,v,c,E,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,t.setRenderTarget(T.map),t.clear(),t.renderBufferDirect(C,null,v,p,E,null)}function y(T,C,v,A){let b=null;const P=v.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(P!==void 0)b=P;else if(b=v.isPointLight===!0?l:o,t.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const F=b.uuid,$=C.uuid;let J=u[F];J===void 0&&(J={},u[F]=J);let O=J[$];O===void 0&&(O=b.clone(),J[$]=O,C.addEventListener("dispose",w)),b=O}if(b.visible=C.visible,b.wireframe=C.wireframe,A===ca?b.side=C.shadowSide!==null?C.shadowSide:C.side:b.side=C.shadowSide!==null?C.shadowSide:d[C.side],b.alphaMap=C.alphaMap,b.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,b.map=C.map,b.clipShadows=C.clipShadows,b.clippingPlanes=C.clippingPlanes,b.clipIntersection=C.clipIntersection,b.displacementMap=C.displacementMap,b.displacementScale=C.displacementScale,b.displacementBias=C.displacementBias,b.wireframeLinewidth=C.wireframeLinewidth,b.linewidth=C.linewidth,v.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const F=t.properties.get(b);F.light=v}return b}function S(T,C,v,A,b){if(T.visible===!1)return;if(T.layers.test(C.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&b===ca)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,T.matrixWorld);const $=e.update(T),J=T.material;if(Array.isArray(J)){const O=$.groups;for(let K=0,z=O.length;K<z;K++){const I=O[K],W=J[I.materialIndex];if(W&&W.visible){const Z=y(T,W,A,b);T.onBeforeShadow(t,T,C,v,$,Z,I),t.renderBufferDirect(v,null,$,Z,T,I),T.onAfterShadow(t,T,C,v,$,Z,I)}}}else if(J.visible){const O=y(T,J,A,b);T.onBeforeShadow(t,T,C,v,$,O,null),t.renderBufferDirect(v,null,$,O,T,null),T.onAfterShadow(t,T,C,v,$,O,null)}}const F=T.children;for(let $=0,J=F.length;$<J;$++)S(F[$],C,v,A,b)}function w(T){T.target.removeEventListener("dispose",w);for(const v in u){const A=u[v],b=T.target.uuid;b in A&&(A[b].dispose(),delete A[b])}}}function Bw(t,e){function n(){let L=!1;const ue=new St;let j=null;const he=new St(0,0,0,0);return{setMask:function(ve){j!==ve&&!L&&(t.colorMask(ve,ve,ve,ve),j=ve)},setLocked:function(ve){L=ve},setClear:function(ve,ee,Te,Me,Tt){Tt===!0&&(ve*=Me,ee*=Me,Te*=Me),ue.set(ve,ee,Te,Me),he.equals(ue)===!1&&(t.clearColor(ve,ee,Te,Me),he.copy(ue))},reset:function(){L=!1,j=null,he.set(-1,0,0,0)}}}function i(){let L=!1,ue=!1,j=null,he=null,ve=null;return{setReversed:function(ee){if(ue!==ee){const Te=e.get("EXT_clip_control");ee?Te.clipControlEXT(Te.LOWER_LEFT_EXT,Te.ZERO_TO_ONE_EXT):Te.clipControlEXT(Te.LOWER_LEFT_EXT,Te.NEGATIVE_ONE_TO_ONE_EXT),ue=ee;const Me=ve;ve=null,this.setClear(Me)}},getReversed:function(){return ue},setTest:function(ee){ee?re(t.DEPTH_TEST):Le(t.DEPTH_TEST)},setMask:function(ee){j!==ee&&!L&&(t.depthMask(ee),j=ee)},setFunc:function(ee){if(ue&&(ee=ZS[ee]),he!==ee){switch(ee){case af:t.depthFunc(t.NEVER);break;case of:t.depthFunc(t.ALWAYS);break;case lf:t.depthFunc(t.LESS);break;case Fs:t.depthFunc(t.LEQUAL);break;case uf:t.depthFunc(t.EQUAL);break;case cf:t.depthFunc(t.GEQUAL);break;case ff:t.depthFunc(t.GREATER);break;case df:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}he=ee}},setLocked:function(ee){L=ee},setClear:function(ee){ve!==ee&&(ve=ee,ue&&(ee=1-ee),t.clearDepth(ee))},reset:function(){L=!1,j=null,he=null,ve=null,ue=!1}}}function r(){let L=!1,ue=null,j=null,he=null,ve=null,ee=null,Te=null,Me=null,Tt=null;return{setTest:function(ut){L||(ut?re(t.STENCIL_TEST):Le(t.STENCIL_TEST))},setMask:function(ut){ue!==ut&&!L&&(t.stencilMask(ut),ue=ut)},setFunc:function(ut,$n,Kn){(j!==ut||he!==$n||ve!==Kn)&&(t.stencilFunc(ut,$n,Kn),j=ut,he=$n,ve=Kn)},setOp:function(ut,$n,Kn){(ee!==ut||Te!==$n||Me!==Kn)&&(t.stencilOp(ut,$n,Kn),ee=ut,Te=$n,Me=Kn)},setLocked:function(ut){L=ut},setClear:function(ut){Tt!==ut&&(t.clearStencil(ut),Tt=ut)},reset:function(){L=!1,ue=null,j=null,he=null,ve=null,ee=null,Te=null,Me=null,Tt=null}}}const s=new n,a=new i,o=new r,l=new WeakMap,u=new WeakMap;let h={},d={},c={},p=new WeakMap,x=[],E=null,g=!1,f=null,m=null,y=null,S=null,w=null,T=null,C=null,v=new Ze(0,0,0),A=0,b=!1,P=null,F=null,$=null,J=null,O=null;const K=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,I=0;const W=t.getParameter(t.VERSION);W.indexOf("WebGL")!==-1?(I=parseFloat(/^WebGL (\d)/.exec(W)[1]),z=I>=1):W.indexOf("OpenGL ES")!==-1&&(I=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),z=I>=2);let Z=null,te={};const oe=t.getParameter(t.SCISSOR_BOX),Ve=t.getParameter(t.VIEWPORT),je=new St().fromArray(oe),We=new St().fromArray(Ve);function q(L,ue,j,he){const ve=new Uint8Array(4),ee=t.createTexture();t.bindTexture(L,ee),t.texParameteri(L,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(L,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Te=0;Te<j;Te++)L===t.TEXTURE_3D||L===t.TEXTURE_2D_ARRAY?t.texImage3D(ue,0,t.RGBA,1,1,he,0,t.RGBA,t.UNSIGNED_BYTE,ve):t.texImage2D(ue+Te,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ve);return ee}const ae={};ae[t.TEXTURE_2D]=q(t.TEXTURE_2D,t.TEXTURE_2D,1),ae[t.TEXTURE_CUBE_MAP]=q(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),ae[t.TEXTURE_2D_ARRAY]=q(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ae[t.TEXTURE_3D]=q(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),re(t.DEPTH_TEST),a.setFunc(Fs),Ie(!1),ke(Np),re(t.CULL_FACE),De(Ti);function re(L){h[L]!==!0&&(t.enable(L),h[L]=!0)}function Le(L){h[L]!==!1&&(t.disable(L),h[L]=!1)}function Ue(L,ue){return c[L]!==ue?(t.bindFramebuffer(L,ue),c[L]=ue,L===t.DRAW_FRAMEBUFFER&&(c[t.FRAMEBUFFER]=ue),L===t.FRAMEBUFFER&&(c[t.DRAW_FRAMEBUFFER]=ue),!0):!1}function be(L,ue){let j=x,he=!1;if(L){j=p.get(ue),j===void 0&&(j=[],p.set(ue,j));const ve=L.textures;if(j.length!==ve.length||j[0]!==t.COLOR_ATTACHMENT0){for(let ee=0,Te=ve.length;ee<Te;ee++)j[ee]=t.COLOR_ATTACHMENT0+ee;j.length=ve.length,he=!0}}else j[0]!==t.BACK&&(j[0]=t.BACK,he=!0);he&&t.drawBuffers(j)}function _t(L){return E!==L?(t.useProgram(L),E=L,!0):!1}const He={[yr]:t.FUNC_ADD,[xS]:t.FUNC_SUBTRACT,[SS]:t.FUNC_REVERSE_SUBTRACT};He[yS]=t.MIN,He[MS]=t.MAX;const et={[ES]:t.ZERO,[TS]:t.ONE,[wS]:t.SRC_COLOR,[rf]:t.SRC_ALPHA,[LS]:t.SRC_ALPHA_SATURATE,[bS]:t.DST_COLOR,[RS]:t.DST_ALPHA,[AS]:t.ONE_MINUS_SRC_COLOR,[sf]:t.ONE_MINUS_SRC_ALPHA,[PS]:t.ONE_MINUS_DST_COLOR,[CS]:t.ONE_MINUS_DST_ALPHA,[DS]:t.CONSTANT_COLOR,[NS]:t.ONE_MINUS_CONSTANT_COLOR,[IS]:t.CONSTANT_ALPHA,[US]:t.ONE_MINUS_CONSTANT_ALPHA};function De(L,ue,j,he,ve,ee,Te,Me,Tt,ut){if(L===Ti){g===!0&&(Le(t.BLEND),g=!1);return}if(g===!1&&(re(t.BLEND),g=!0),L!==vS){if(L!==f||ut!==b){if((m!==yr||w!==yr)&&(t.blendEquation(t.FUNC_ADD),m=yr,w=yr),ut)switch(L){case As:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case nf:t.blendFunc(t.ONE,t.ONE);break;case Ip:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Up:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:Ke("WebGLState: Invalid blending: ",L);break}else switch(L){case As:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case nf:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case Ip:Ke("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Up:Ke("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ke("WebGLState: Invalid blending: ",L);break}y=null,S=null,T=null,C=null,v.set(0,0,0),A=0,f=L,b=ut}return}ve=ve||ue,ee=ee||j,Te=Te||he,(ue!==m||ve!==w)&&(t.blendEquationSeparate(He[ue],He[ve]),m=ue,w=ve),(j!==y||he!==S||ee!==T||Te!==C)&&(t.blendFuncSeparate(et[j],et[he],et[ee],et[Te]),y=j,S=he,T=ee,C=Te),(Me.equals(v)===!1||Tt!==A)&&(t.blendColor(Me.r,Me.g,Me.b,Tt),v.copy(Me),A=Tt),f=L,b=!1}function ne(L,ue){L.side===xi?Le(t.CULL_FACE):re(t.CULL_FACE);let j=L.side===hn;ue&&(j=!j),Ie(j),L.blending===As&&L.transparent===!1?De(Ti):De(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),s.setMask(L.colorWrite);const he=L.stencilWrite;o.setTest(he),he&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),ht(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?re(t.SAMPLE_ALPHA_TO_COVERAGE):Le(t.SAMPLE_ALPHA_TO_COVERAGE)}function Ie(L){P!==L&&(L?t.frontFace(t.CW):t.frontFace(t.CCW),P=L)}function ke(L){L!==mS?(re(t.CULL_FACE),L!==F&&(L===Np?t.cullFace(t.BACK):L===gS?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Le(t.CULL_FACE),F=L}function dt(L){L!==$&&(z&&t.lineWidth(L),$=L)}function ht(L,ue,j){L?(re(t.POLYGON_OFFSET_FILL),(J!==ue||O!==j)&&(J=ue,O=j,a.getReversed()&&(ue=-ue),t.polygonOffset(ue,j))):Le(t.POLYGON_OFFSET_FILL)}function pt(L){L?re(t.SCISSOR_TEST):Le(t.SCISSOR_TEST)}function lt(L){L===void 0&&(L=t.TEXTURE0+K-1),Z!==L&&(t.activeTexture(L),Z=L)}function D(L,ue,j){j===void 0&&(Z===null?j=t.TEXTURE0+K-1:j=Z);let he=te[j];he===void 0&&(he={type:void 0,texture:void 0},te[j]=he),(he.type!==L||he.texture!==ue)&&(Z!==j&&(t.activeTexture(j),Z=j),t.bindTexture(L,ue||ae[L]),he.type=L,he.texture=ue)}function an(){const L=te[Z];L!==void 0&&L.type!==void 0&&(t.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function tt(){try{t.compressedTexImage2D(...arguments)}catch(L){Ke("WebGLState:",L)}}function R(){try{t.compressedTexImage3D(...arguments)}catch(L){Ke("WebGLState:",L)}}function _(){try{t.texSubImage2D(...arguments)}catch(L){Ke("WebGLState:",L)}}function U(){try{t.texSubImage3D(...arguments)}catch(L){Ke("WebGLState:",L)}}function H(){try{t.compressedTexSubImage2D(...arguments)}catch(L){Ke("WebGLState:",L)}}function X(){try{t.compressedTexSubImage3D(...arguments)}catch(L){Ke("WebGLState:",L)}}function le(){try{t.texStorage2D(...arguments)}catch(L){Ke("WebGLState:",L)}}function ce(){try{t.texStorage3D(...arguments)}catch(L){Ke("WebGLState:",L)}}function Y(){try{t.texImage2D(...arguments)}catch(L){Ke("WebGLState:",L)}}function Q(){try{t.texImage3D(...arguments)}catch(L){Ke("WebGLState:",L)}}function fe(L){return d[L]!==void 0?d[L]:t.getParameter(L)}function we(L,ue){d[L]!==ue&&(t.pixelStorei(L,ue),d[L]=ue)}function pe(L){je.equals(L)===!1&&(t.scissor(L.x,L.y,L.z,L.w),je.copy(L))}function de(L){We.equals(L)===!1&&(t.viewport(L.x,L.y,L.z,L.w),We.copy(L))}function Ce(L,ue){let j=u.get(ue);j===void 0&&(j=new WeakMap,u.set(ue,j));let he=j.get(L);he===void 0&&(he=t.getUniformBlockIndex(ue,L.name),j.set(L,he))}function Pe(L,ue){const he=u.get(ue).get(L);l.get(ue)!==he&&(t.uniformBlockBinding(ue,he,L.__bindingPointIndex),l.set(ue,he))}function Oe(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),a.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),h={},d={},Z=null,te={},c={},p=new WeakMap,x=[],E=null,g=!1,f=null,m=null,y=null,S=null,w=null,T=null,C=null,v=new Ze(0,0,0),A=0,b=!1,P=null,F=null,$=null,J=null,O=null,je.set(0,0,t.canvas.width,t.canvas.height),We.set(0,0,t.canvas.width,t.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:re,disable:Le,bindFramebuffer:Ue,drawBuffers:be,useProgram:_t,setBlending:De,setMaterial:ne,setFlipSided:Ie,setCullFace:ke,setLineWidth:dt,setPolygonOffset:ht,setScissorTest:pt,activeTexture:lt,bindTexture:D,unbindTexture:an,compressedTexImage2D:tt,compressedTexImage3D:R,texImage2D:Y,texImage3D:Q,pixelStorei:we,getParameter:fe,updateUBOMapping:Ce,uniformBlockBinding:Pe,texStorage2D:le,texStorage3D:ce,texSubImage2D:_,texSubImage3D:U,compressedTexSubImage2D:H,compressedTexSubImage3D:X,scissor:pe,viewport:de,reset:Oe}}function kw(t,e,n,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new $e,h=new WeakMap,d=new Set;let c;const p=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(R,_){return x?new OffscreenCanvas(R,_):Ga("canvas")}function g(R,_,U){let H=1;const X=tt(R);if((X.width>U||X.height>U)&&(H=U/Math.max(X.width,X.height)),H<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const le=Math.floor(H*X.width),ce=Math.floor(H*X.height);c===void 0&&(c=E(le,ce));const Y=_?E(le,ce):c;return Y.width=le,Y.height=ce,Y.getContext("2d").drawImage(R,0,0,le,ce),Ne("WebGLRenderer: Texture has been resized from ("+X.width+"x"+X.height+") to ("+le+"x"+ce+")."),Y}else return"data"in R&&Ne("WebGLRenderer: Image in DataTexture is too big ("+X.width+"x"+X.height+")."),R;return R}function f(R){return R.generateMipmaps}function m(R){t.generateMipmap(R)}function y(R){return R.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?t.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function S(R,_,U,H,X,le=!1){if(R!==null){if(t[R]!==void 0)return t[R];Ne("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let ce;H&&(ce=e.get("EXT_texture_norm16"),ce||Ne("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Y=_;if(_===t.RED&&(U===t.FLOAT&&(Y=t.R32F),U===t.HALF_FLOAT&&(Y=t.R16F),U===t.UNSIGNED_BYTE&&(Y=t.R8),U===t.UNSIGNED_SHORT&&ce&&(Y=ce.R16_EXT),U===t.SHORT&&ce&&(Y=ce.R16_SNORM_EXT)),_===t.RED_INTEGER&&(U===t.UNSIGNED_BYTE&&(Y=t.R8UI),U===t.UNSIGNED_SHORT&&(Y=t.R16UI),U===t.UNSIGNED_INT&&(Y=t.R32UI),U===t.BYTE&&(Y=t.R8I),U===t.SHORT&&(Y=t.R16I),U===t.INT&&(Y=t.R32I)),_===t.RG&&(U===t.FLOAT&&(Y=t.RG32F),U===t.HALF_FLOAT&&(Y=t.RG16F),U===t.UNSIGNED_BYTE&&(Y=t.RG8),U===t.UNSIGNED_SHORT&&ce&&(Y=ce.RG16_EXT),U===t.SHORT&&ce&&(Y=ce.RG16_SNORM_EXT)),_===t.RG_INTEGER&&(U===t.UNSIGNED_BYTE&&(Y=t.RG8UI),U===t.UNSIGNED_SHORT&&(Y=t.RG16UI),U===t.UNSIGNED_INT&&(Y=t.RG32UI),U===t.BYTE&&(Y=t.RG8I),U===t.SHORT&&(Y=t.RG16I),U===t.INT&&(Y=t.RG32I)),_===t.RGB_INTEGER&&(U===t.UNSIGNED_BYTE&&(Y=t.RGB8UI),U===t.UNSIGNED_SHORT&&(Y=t.RGB16UI),U===t.UNSIGNED_INT&&(Y=t.RGB32UI),U===t.BYTE&&(Y=t.RGB8I),U===t.SHORT&&(Y=t.RGB16I),U===t.INT&&(Y=t.RGB32I)),_===t.RGBA_INTEGER&&(U===t.UNSIGNED_BYTE&&(Y=t.RGBA8UI),U===t.UNSIGNED_SHORT&&(Y=t.RGBA16UI),U===t.UNSIGNED_INT&&(Y=t.RGBA32UI),U===t.BYTE&&(Y=t.RGBA8I),U===t.SHORT&&(Y=t.RGBA16I),U===t.INT&&(Y=t.RGBA32I)),_===t.RGB&&(U===t.UNSIGNED_SHORT&&ce&&(Y=ce.RGB16_EXT),U===t.SHORT&&ce&&(Y=ce.RGB16_SNORM_EXT),U===t.UNSIGNED_INT_5_9_9_9_REV&&(Y=t.RGB9_E5),U===t.UNSIGNED_INT_10F_11F_11F_REV&&(Y=t.R11F_G11F_B10F)),_===t.RGBA){const Q=le?Il:qe.getTransfer(X);U===t.FLOAT&&(Y=t.RGBA32F),U===t.HALF_FLOAT&&(Y=t.RGBA16F),U===t.UNSIGNED_BYTE&&(Y=Q===nt?t.SRGB8_ALPHA8:t.RGBA8),U===t.UNSIGNED_SHORT&&ce&&(Y=ce.RGBA16_EXT),U===t.SHORT&&ce&&(Y=ce.RGBA16_SNORM_EXT),U===t.UNSIGNED_SHORT_4_4_4_4&&(Y=t.RGBA4),U===t.UNSIGNED_SHORT_5_5_5_1&&(Y=t.RGB5_A1)}return(Y===t.R16F||Y===t.R32F||Y===t.RG16F||Y===t.RG32F||Y===t.RGBA16F||Y===t.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function w(R,_){let U;return R?_===null||_===ci||_===Va?U=t.DEPTH24_STENCIL8:_===ii?U=t.DEPTH32F_STENCIL8:_===za&&(U=t.DEPTH24_STENCIL8,Ne("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===ci||_===Va?U=t.DEPTH_COMPONENT24:_===ii?U=t.DEPTH_COMPONENT32F:_===za&&(U=t.DEPTH_COMPONENT16),U}function T(R,_){return f(R)===!0||R.isFramebufferTexture&&R.minFilter!==zt&&R.minFilter!==Kt?Math.log2(Math.max(_.width,_.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?_.mipmaps.length:1}function C(R){const _=R.target;_.removeEventListener("dispose",C),A(_),_.isVideoTexture&&h.delete(_),_.isHTMLTexture&&d.delete(_)}function v(R){const _=R.target;_.removeEventListener("dispose",v),P(_)}function A(R){const _=i.get(R);if(_.__webglInit===void 0)return;const U=R.source,H=p.get(U);if(H){const X=H[_.__cacheKey];X.usedTimes--,X.usedTimes===0&&b(R),Object.keys(H).length===0&&p.delete(U)}i.remove(R)}function b(R){const _=i.get(R);t.deleteTexture(_.__webglTexture);const U=R.source,H=p.get(U);delete H[_.__cacheKey],a.memory.textures--}function P(R){const _=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let H=0;H<6;H++){if(Array.isArray(_.__webglFramebuffer[H]))for(let X=0;X<_.__webglFramebuffer[H].length;X++)t.deleteFramebuffer(_.__webglFramebuffer[H][X]);else t.deleteFramebuffer(_.__webglFramebuffer[H]);_.__webglDepthbuffer&&t.deleteRenderbuffer(_.__webglDepthbuffer[H])}else{if(Array.isArray(_.__webglFramebuffer))for(let H=0;H<_.__webglFramebuffer.length;H++)t.deleteFramebuffer(_.__webglFramebuffer[H]);else t.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&t.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&t.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let H=0;H<_.__webglColorRenderbuffer.length;H++)_.__webglColorRenderbuffer[H]&&t.deleteRenderbuffer(_.__webglColorRenderbuffer[H]);_.__webglDepthRenderbuffer&&t.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const U=R.textures;for(let H=0,X=U.length;H<X;H++){const le=i.get(U[H]);le.__webglTexture&&(t.deleteTexture(le.__webglTexture),a.memory.textures--),i.remove(U[H])}i.remove(R)}let F=0;function $(){F=0}function J(){return F}function O(R){F=R}function K(){const R=F;return R>=r.maxTextures&&Ne("WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),F+=1,R}function z(R){const _=[];return _.push(R.wrapS),_.push(R.wrapT),_.push(R.wrapR||0),_.push(R.magFilter),_.push(R.minFilter),_.push(R.anisotropy),_.push(R.internalFormat),_.push(R.format),_.push(R.type),_.push(R.generateMipmaps),_.push(R.premultiplyAlpha),_.push(R.flipY),_.push(R.unpackAlignment),_.push(R.colorSpace),_.join()}function I(R,_){const U=i.get(R);if(R.isVideoTexture&&D(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&U.__version!==R.version){const H=R.image;if(H===null)Ne("WebGLRenderer: Texture marked for update but no image data found.");else if(H.complete===!1)Ne("WebGLRenderer: Texture marked for update but image is incomplete");else{Le(U,R,_);return}}else R.isExternalTexture&&(U.__webglTexture=R.sourceTexture?R.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,U.__webglTexture,t.TEXTURE0+_)}function W(R,_){const U=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&U.__version!==R.version){Le(U,R,_);return}else R.isExternalTexture&&(U.__webglTexture=R.sourceTexture?R.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,U.__webglTexture,t.TEXTURE0+_)}function Z(R,_){const U=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&U.__version!==R.version){Le(U,R,_);return}n.bindTexture(t.TEXTURE_3D,U.__webglTexture,t.TEXTURE0+_)}function te(R,_){const U=i.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&U.__version!==R.version){Ue(U,R,_);return}n.bindTexture(t.TEXTURE_CUBE_MAP,U.__webglTexture,t.TEXTURE0+_)}const oe={[hf]:t.REPEAT,[Mi]:t.CLAMP_TO_EDGE,[pf]:t.MIRRORED_REPEAT},Ve={[zt]:t.NEAREST,[BS]:t.NEAREST_MIPMAP_NEAREST,[So]:t.NEAREST_MIPMAP_LINEAR,[Kt]:t.LINEAR,[Du]:t.LINEAR_MIPMAP_NEAREST,[Ar]:t.LINEAR_MIPMAP_LINEAR},je={[VS]:t.NEVER,[YS]:t.ALWAYS,[HS]:t.LESS,[Zd]:t.LEQUAL,[GS]:t.EQUAL,[jd]:t.GEQUAL,[WS]:t.GREATER,[XS]:t.NOTEQUAL};function We(R,_){if(_.type===ii&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===Kt||_.magFilter===Du||_.magFilter===So||_.magFilter===Ar||_.minFilter===Kt||_.minFilter===Du||_.minFilter===So||_.minFilter===Ar)&&Ne("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(R,t.TEXTURE_WRAP_S,oe[_.wrapS]),t.texParameteri(R,t.TEXTURE_WRAP_T,oe[_.wrapT]),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,oe[_.wrapR]),t.texParameteri(R,t.TEXTURE_MAG_FILTER,Ve[_.magFilter]),t.texParameteri(R,t.TEXTURE_MIN_FILTER,Ve[_.minFilter]),_.compareFunction&&(t.texParameteri(R,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(R,t.TEXTURE_COMPARE_FUNC,je[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===zt||_.minFilter!==So&&_.minFilter!==Ar||_.type===ii&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){const U=e.get("EXT_texture_filter_anisotropic");t.texParameterf(R,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function q(R,_){let U=!1;R.__webglInit===void 0&&(R.__webglInit=!0,_.addEventListener("dispose",C));const H=_.source;let X=p.get(H);X===void 0&&(X={},p.set(H,X));const le=z(_);if(le!==R.__cacheKey){X[le]===void 0&&(X[le]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,U=!0),X[le].usedTimes++;const ce=X[R.__cacheKey];ce!==void 0&&(X[R.__cacheKey].usedTimes--,ce.usedTimes===0&&b(_)),R.__cacheKey=le,R.__webglTexture=X[le].texture}return U}function ae(R,_,U){return Math.floor(Math.floor(R/U)/_)}function re(R,_,U,H){const le=R.updateRanges;if(le.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,_.width,_.height,U,H,_.data);else{le.sort((we,pe)=>we.start-pe.start);let ce=0;for(let we=1;we<le.length;we++){const pe=le[ce],de=le[we],Ce=pe.start+pe.count,Pe=ae(de.start,_.width,4),Oe=ae(pe.start,_.width,4);de.start<=Ce+1&&Pe===Oe&&ae(de.start+de.count-1,_.width,4)===Pe?pe.count=Math.max(pe.count,de.start+de.count-pe.start):(++ce,le[ce]=de)}le.length=ce+1;const Y=n.getParameter(t.UNPACK_ROW_LENGTH),Q=n.getParameter(t.UNPACK_SKIP_PIXELS),fe=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,_.width);for(let we=0,pe=le.length;we<pe;we++){const de=le[we],Ce=Math.floor(de.start/4),Pe=Math.ceil(de.count/4),Oe=Ce%_.width,L=Math.floor(Ce/_.width),ue=Pe,j=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,Oe),n.pixelStorei(t.UNPACK_SKIP_ROWS,L),n.texSubImage2D(t.TEXTURE_2D,0,Oe,L,ue,j,U,H,_.data)}R.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,Y),n.pixelStorei(t.UNPACK_SKIP_PIXELS,Q),n.pixelStorei(t.UNPACK_SKIP_ROWS,fe)}}function Le(R,_,U){let H=t.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(H=t.TEXTURE_2D_ARRAY),_.isData3DTexture&&(H=t.TEXTURE_3D);const X=q(R,_),le=_.source;n.bindTexture(H,R.__webglTexture,t.TEXTURE0+U);const ce=i.get(le);if(le.version!==ce.__version||X===!0){if(n.activeTexture(t.TEXTURE0+U),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){const j=qe.getPrimaries(qe.workingColorSpace),he=_.colorSpace===$i?null:qe.getPrimaries(_.colorSpace),ve=_.colorSpace===$i||j===he?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve)}n.pixelStorei(t.UNPACK_ALIGNMENT,_.unpackAlignment);let Q=g(_.image,!1,r.maxTextureSize);Q=an(_,Q);const fe=s.convert(_.format,_.colorSpace),we=s.convert(_.type);let pe=S(_.internalFormat,fe,we,_.normalized,_.colorSpace,_.isVideoTexture);We(H,_);let de;const Ce=_.mipmaps,Pe=_.isVideoTexture!==!0,Oe=ce.__version===void 0||X===!0,L=le.dataReady,ue=T(_,Q);if(_.isDepthTexture)pe=w(_.format===Rr,_.type),Oe&&(Pe?n.texStorage2D(t.TEXTURE_2D,1,pe,Q.width,Q.height):n.texImage2D(t.TEXTURE_2D,0,pe,Q.width,Q.height,0,fe,we,null));else if(_.isDataTexture)if(Ce.length>0){Pe&&Oe&&n.texStorage2D(t.TEXTURE_2D,ue,pe,Ce[0].width,Ce[0].height);for(let j=0,he=Ce.length;j<he;j++)de=Ce[j],Pe?L&&n.texSubImage2D(t.TEXTURE_2D,j,0,0,de.width,de.height,fe,we,de.data):n.texImage2D(t.TEXTURE_2D,j,pe,de.width,de.height,0,fe,we,de.data);_.generateMipmaps=!1}else Pe?(Oe&&n.texStorage2D(t.TEXTURE_2D,ue,pe,Q.width,Q.height),L&&re(_,Q,fe,we)):n.texImage2D(t.TEXTURE_2D,0,pe,Q.width,Q.height,0,fe,we,Q.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Pe&&Oe&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ue,pe,Ce[0].width,Ce[0].height,Q.depth);for(let j=0,he=Ce.length;j<he;j++)if(de=Ce[j],_.format!==Gn)if(fe!==null)if(Pe){if(L)if(_.layerUpdates.size>0){const ve=hm(de.width,de.height,_.format,_.type);for(const ee of _.layerUpdates){const Te=de.data.subarray(ee*ve/de.data.BYTES_PER_ELEMENT,(ee+1)*ve/de.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,j,0,0,ee,de.width,de.height,1,fe,Te)}_.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,j,0,0,0,de.width,de.height,Q.depth,fe,de.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,j,pe,de.width,de.height,Q.depth,0,de.data,0,0);else Ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Pe?L&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,j,0,0,0,de.width,de.height,Q.depth,fe,we,de.data):n.texImage3D(t.TEXTURE_2D_ARRAY,j,pe,de.width,de.height,Q.depth,0,fe,we,de.data)}else{Pe&&Oe&&n.texStorage2D(t.TEXTURE_2D,ue,pe,Ce[0].width,Ce[0].height);for(let j=0,he=Ce.length;j<he;j++)de=Ce[j],_.format!==Gn?fe!==null?Pe?L&&n.compressedTexSubImage2D(t.TEXTURE_2D,j,0,0,de.width,de.height,fe,de.data):n.compressedTexImage2D(t.TEXTURE_2D,j,pe,de.width,de.height,0,de.data):Ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Pe?L&&n.texSubImage2D(t.TEXTURE_2D,j,0,0,de.width,de.height,fe,we,de.data):n.texImage2D(t.TEXTURE_2D,j,pe,de.width,de.height,0,fe,we,de.data)}else if(_.isDataArrayTexture)if(Pe){if(Oe&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ue,pe,Q.width,Q.height,Q.depth),L)if(_.layerUpdates.size>0){const j=hm(Q.width,Q.height,_.format,_.type);for(const he of _.layerUpdates){const ve=Q.data.subarray(he*j/Q.data.BYTES_PER_ELEMENT,(he+1)*j/Q.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,he,Q.width,Q.height,1,fe,we,ve)}_.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,fe,we,Q.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,pe,Q.width,Q.height,Q.depth,0,fe,we,Q.data);else if(_.isData3DTexture)Pe?(Oe&&n.texStorage3D(t.TEXTURE_3D,ue,pe,Q.width,Q.height,Q.depth),L&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,fe,we,Q.data)):n.texImage3D(t.TEXTURE_3D,0,pe,Q.width,Q.height,Q.depth,0,fe,we,Q.data);else if(_.isFramebufferTexture){if(Oe)if(Pe)n.texStorage2D(t.TEXTURE_2D,ue,pe,Q.width,Q.height);else{let j=Q.width,he=Q.height;for(let ve=0;ve<ue;ve++)n.texImage2D(t.TEXTURE_2D,ve,pe,j,he,0,fe,we,null),j>>=1,he>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in t){const j=t.canvas;if(j.hasAttribute("layoutsubtree")||j.setAttribute("layoutsubtree","true"),Q.parentNode!==j){j.appendChild(Q),d.add(_),j.onpaint=he=>{const ve=he.changedElements;for(const ee of d)ve.includes(ee.image)&&(ee.needsUpdate=!0)},j.requestPaint();return}if(t.texElementImage2D.length===3)t.texElementImage2D(t.TEXTURE_2D,t.RGBA8,Q);else{const ve=t.RGBA,ee=t.RGBA,Te=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,0,ve,ee,Te,Q)}t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(Ce.length>0){if(Pe&&Oe){const j=tt(Ce[0]);n.texStorage2D(t.TEXTURE_2D,ue,pe,j.width,j.height)}for(let j=0,he=Ce.length;j<he;j++)de=Ce[j],Pe?L&&n.texSubImage2D(t.TEXTURE_2D,j,0,0,fe,we,de):n.texImage2D(t.TEXTURE_2D,j,pe,fe,we,de);_.generateMipmaps=!1}else if(Pe){if(Oe){const j=tt(Q);n.texStorage2D(t.TEXTURE_2D,ue,pe,j.width,j.height)}L&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,fe,we,Q)}else n.texImage2D(t.TEXTURE_2D,0,pe,fe,we,Q);f(_)&&m(H),ce.__version=le.version,_.onUpdate&&_.onUpdate(_)}R.__version=_.version}function Ue(R,_,U){if(_.image.length!==6)return;const H=q(R,_),X=_.source;n.bindTexture(t.TEXTURE_CUBE_MAP,R.__webglTexture,t.TEXTURE0+U);const le=i.get(X);if(X.version!==le.__version||H===!0){n.activeTexture(t.TEXTURE0+U);const ce=qe.getPrimaries(qe.workingColorSpace),Y=_.colorSpace===$i?null:qe.getPrimaries(_.colorSpace),Q=_.colorSpace===$i||ce===Y?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Q);const fe=_.isCompressedTexture||_.image[0].isCompressedTexture,we=_.image[0]&&_.image[0].isDataTexture,pe=[];for(let ee=0;ee<6;ee++)!fe&&!we?pe[ee]=g(_.image[ee],!0,r.maxCubemapSize):pe[ee]=we?_.image[ee].image:_.image[ee],pe[ee]=an(_,pe[ee]);const de=pe[0],Ce=s.convert(_.format,_.colorSpace),Pe=s.convert(_.type),Oe=S(_.internalFormat,Ce,Pe,_.normalized,_.colorSpace),L=_.isVideoTexture!==!0,ue=le.__version===void 0||H===!0,j=X.dataReady;let he=T(_,de);We(t.TEXTURE_CUBE_MAP,_);let ve;if(fe){L&&ue&&n.texStorage2D(t.TEXTURE_CUBE_MAP,he,Oe,de.width,de.height);for(let ee=0;ee<6;ee++){ve=pe[ee].mipmaps;for(let Te=0;Te<ve.length;Te++){const Me=ve[Te];_.format!==Gn?Ce!==null?L?j&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Te,0,0,Me.width,Me.height,Ce,Me.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Te,Oe,Me.width,Me.height,0,Me.data):Ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?j&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Te,0,0,Me.width,Me.height,Ce,Pe,Me.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Te,Oe,Me.width,Me.height,0,Ce,Pe,Me.data)}}}else{if(ve=_.mipmaps,L&&ue){ve.length>0&&he++;const ee=tt(pe[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,he,Oe,ee.width,ee.height)}for(let ee=0;ee<6;ee++)if(we){L?j&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,pe[ee].width,pe[ee].height,Ce,Pe,pe[ee].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Oe,pe[ee].width,pe[ee].height,0,Ce,Pe,pe[ee].data);for(let Te=0;Te<ve.length;Te++){const Tt=ve[Te].image[ee].image;L?j&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Te+1,0,0,Tt.width,Tt.height,Ce,Pe,Tt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Te+1,Oe,Tt.width,Tt.height,0,Ce,Pe,Tt.data)}}else{L?j&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,Ce,Pe,pe[ee]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Oe,Ce,Pe,pe[ee]);for(let Te=0;Te<ve.length;Te++){const Me=ve[Te];L?j&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Te+1,0,0,Ce,Pe,Me.image[ee]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Te+1,Oe,Ce,Pe,Me.image[ee])}}}f(_)&&m(t.TEXTURE_CUBE_MAP),le.__version=X.version,_.onUpdate&&_.onUpdate(_)}R.__version=_.version}function be(R,_,U,H,X,le){const ce=s.convert(U.format,U.colorSpace),Y=s.convert(U.type),Q=S(U.internalFormat,ce,Y,U.normalized,U.colorSpace),fe=i.get(_),we=i.get(U);if(we.__renderTarget=_,!fe.__hasExternalTextures){const pe=Math.max(1,_.width>>le),de=Math.max(1,_.height>>le);X===t.TEXTURE_3D||X===t.TEXTURE_2D_ARRAY?n.texImage3D(X,le,Q,pe,de,_.depth,0,ce,Y,null):n.texImage2D(X,le,Q,pe,de,0,ce,Y,null)}n.bindFramebuffer(t.FRAMEBUFFER,R),lt(_)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,H,X,we.__webglTexture,0,pt(_)):(X===t.TEXTURE_2D||X>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&X<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,H,X,we.__webglTexture,le),n.bindFramebuffer(t.FRAMEBUFFER,null)}function _t(R,_,U){if(t.bindRenderbuffer(t.RENDERBUFFER,R),_.depthBuffer){const H=_.depthTexture,X=H&&H.isDepthTexture?H.type:null,le=w(_.stencilBuffer,X),ce=_.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;lt(_)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,pt(_),le,_.width,_.height):U?t.renderbufferStorageMultisample(t.RENDERBUFFER,pt(_),le,_.width,_.height):t.renderbufferStorage(t.RENDERBUFFER,le,_.width,_.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,ce,t.RENDERBUFFER,R)}else{const H=_.textures;for(let X=0;X<H.length;X++){const le=H[X],ce=s.convert(le.format,le.colorSpace),Y=s.convert(le.type),Q=S(le.internalFormat,ce,Y,le.normalized,le.colorSpace);lt(_)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,pt(_),Q,_.width,_.height):U?t.renderbufferStorageMultisample(t.RENDERBUFFER,pt(_),Q,_.width,_.height):t.renderbufferStorage(t.RENDERBUFFER,Q,_.width,_.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function He(R,_,U){const H=_.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,R),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const X=i.get(_.depthTexture);if(X.__renderTarget=_,(!X.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),H){if(X.__webglInit===void 0&&(X.__webglInit=!0,_.depthTexture.addEventListener("dispose",C)),X.__webglTexture===void 0){X.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,X.__webglTexture),We(t.TEXTURE_CUBE_MAP,_.depthTexture);const fe=s.convert(_.depthTexture.format),we=s.convert(_.depthTexture.type);let pe;_.depthTexture.format===Di?pe=t.DEPTH_COMPONENT24:_.depthTexture.format===Rr&&(pe=t.DEPTH24_STENCIL8);for(let de=0;de<6;de++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,pe,_.width,_.height,0,fe,we,null)}}else I(_.depthTexture,0);const le=X.__webglTexture,ce=pt(_),Y=H?t.TEXTURE_CUBE_MAP_POSITIVE_X+U:t.TEXTURE_2D,Q=_.depthTexture.format===Rr?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(_.depthTexture.format===Di)lt(_)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Q,Y,le,0,ce):t.framebufferTexture2D(t.FRAMEBUFFER,Q,Y,le,0);else if(_.depthTexture.format===Rr)lt(_)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Q,Y,le,0,ce):t.framebufferTexture2D(t.FRAMEBUFFER,Q,Y,le,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function et(R){const _=i.get(R),U=R.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==R.depthTexture){const H=R.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),H){const X=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,H.removeEventListener("dispose",X)};H.addEventListener("dispose",X),_.__depthDisposeCallback=X}_.__boundDepthTexture=H}if(R.depthTexture&&!_.__autoAllocateDepthBuffer)if(U)for(let H=0;H<6;H++)He(_.__webglFramebuffer[H],R,H);else{const H=R.texture.mipmaps;H&&H.length>0?He(_.__webglFramebuffer[0],R,0):He(_.__webglFramebuffer,R,0)}else if(U){_.__webglDepthbuffer=[];for(let H=0;H<6;H++)if(n.bindFramebuffer(t.FRAMEBUFFER,_.__webglFramebuffer[H]),_.__webglDepthbuffer[H]===void 0)_.__webglDepthbuffer[H]=t.createRenderbuffer(),_t(_.__webglDepthbuffer[H],R,!1);else{const X=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,le=_.__webglDepthbuffer[H];t.bindRenderbuffer(t.RENDERBUFFER,le),t.framebufferRenderbuffer(t.FRAMEBUFFER,X,t.RENDERBUFFER,le)}}else{const H=R.texture.mipmaps;if(H&&H.length>0?n.bindFramebuffer(t.FRAMEBUFFER,_.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=t.createRenderbuffer(),_t(_.__webglDepthbuffer,R,!1);else{const X=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,le=_.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,le),t.framebufferRenderbuffer(t.FRAMEBUFFER,X,t.RENDERBUFFER,le)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function De(R,_,U){const H=i.get(R);_!==void 0&&be(H.__webglFramebuffer,R,R.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),U!==void 0&&et(R)}function ne(R){const _=R.texture,U=i.get(R),H=i.get(_);R.addEventListener("dispose",v);const X=R.textures,le=R.isWebGLCubeRenderTarget===!0,ce=X.length>1;if(ce||(H.__webglTexture===void 0&&(H.__webglTexture=t.createTexture()),H.__version=_.version,a.memory.textures++),le){U.__webglFramebuffer=[];for(let Y=0;Y<6;Y++)if(_.mipmaps&&_.mipmaps.length>0){U.__webglFramebuffer[Y]=[];for(let Q=0;Q<_.mipmaps.length;Q++)U.__webglFramebuffer[Y][Q]=t.createFramebuffer()}else U.__webglFramebuffer[Y]=t.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){U.__webglFramebuffer=[];for(let Y=0;Y<_.mipmaps.length;Y++)U.__webglFramebuffer[Y]=t.createFramebuffer()}else U.__webglFramebuffer=t.createFramebuffer();if(ce)for(let Y=0,Q=X.length;Y<Q;Y++){const fe=i.get(X[Y]);fe.__webglTexture===void 0&&(fe.__webglTexture=t.createTexture(),a.memory.textures++)}if(R.samples>0&&lt(R)===!1){U.__webglMultisampledFramebuffer=t.createFramebuffer(),U.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let Y=0;Y<X.length;Y++){const Q=X[Y];U.__webglColorRenderbuffer[Y]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,U.__webglColorRenderbuffer[Y]);const fe=s.convert(Q.format,Q.colorSpace),we=s.convert(Q.type),pe=S(Q.internalFormat,fe,we,Q.normalized,Q.colorSpace,R.isXRRenderTarget===!0),de=pt(R);t.renderbufferStorageMultisample(t.RENDERBUFFER,de,pe,R.width,R.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Y,t.RENDERBUFFER,U.__webglColorRenderbuffer[Y])}t.bindRenderbuffer(t.RENDERBUFFER,null),R.depthBuffer&&(U.__webglDepthRenderbuffer=t.createRenderbuffer(),_t(U.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(le){n.bindTexture(t.TEXTURE_CUBE_MAP,H.__webglTexture),We(t.TEXTURE_CUBE_MAP,_);for(let Y=0;Y<6;Y++)if(_.mipmaps&&_.mipmaps.length>0)for(let Q=0;Q<_.mipmaps.length;Q++)be(U.__webglFramebuffer[Y][Q],R,_,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Q);else be(U.__webglFramebuffer[Y],R,_,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0);f(_)&&m(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ce){for(let Y=0,Q=X.length;Y<Q;Y++){const fe=X[Y],we=i.get(fe);let pe=t.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(pe=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(pe,we.__webglTexture),We(pe,fe),be(U.__webglFramebuffer,R,fe,t.COLOR_ATTACHMENT0+Y,pe,0),f(fe)&&m(pe)}n.unbindTexture()}else{let Y=t.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(Y=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(Y,H.__webglTexture),We(Y,_),_.mipmaps&&_.mipmaps.length>0)for(let Q=0;Q<_.mipmaps.length;Q++)be(U.__webglFramebuffer[Q],R,_,t.COLOR_ATTACHMENT0,Y,Q);else be(U.__webglFramebuffer,R,_,t.COLOR_ATTACHMENT0,Y,0);f(_)&&m(Y),n.unbindTexture()}R.depthBuffer&&et(R)}function Ie(R){const _=R.textures;for(let U=0,H=_.length;U<H;U++){const X=_[U];if(f(X)){const le=y(R),ce=i.get(X).__webglTexture;n.bindTexture(le,ce),m(le),n.unbindTexture()}}}const ke=[],dt=[];function ht(R){if(R.samples>0){if(lt(R)===!1){const _=R.textures,U=R.width,H=R.height;let X=t.COLOR_BUFFER_BIT;const le=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ce=i.get(R),Y=_.length>1;if(Y)for(let fe=0;fe<_.length;fe++)n.bindFramebuffer(t.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+fe,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,ce.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+fe,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,ce.__webglMultisampledFramebuffer);const Q=R.texture.mipmaps;Q&&Q.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ce.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ce.__webglFramebuffer);for(let fe=0;fe<_.length;fe++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(X|=t.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(X|=t.STENCIL_BUFFER_BIT)),Y){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,ce.__webglColorRenderbuffer[fe]);const we=i.get(_[fe]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,we,0)}t.blitFramebuffer(0,0,U,H,0,0,U,H,X,t.NEAREST),l===!0&&(ke.length=0,dt.length=0,ke.push(t.COLOR_ATTACHMENT0+fe),R.depthBuffer&&R.resolveDepthBuffer===!1&&(ke.push(le),dt.push(le),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,dt)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,ke))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),Y)for(let fe=0;fe<_.length;fe++){n.bindFramebuffer(t.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+fe,t.RENDERBUFFER,ce.__webglColorRenderbuffer[fe]);const we=i.get(_[fe]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,ce.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+fe,t.TEXTURE_2D,we,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ce.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const _=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[_])}}}function pt(R){return Math.min(r.maxSamples,R.samples)}function lt(R){const _=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function D(R){const _=a.render.frame;h.get(R)!==_&&(h.set(R,_),R.update())}function an(R,_){const U=R.colorSpace,H=R.format,X=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||U!==Nl&&U!==$i&&(qe.getTransfer(U)===nt?(H!==Gn||X!==vn)&&Ne("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ke("WebGLTextures: Unsupported texture color space:",U)),_}function tt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(u.width=R.naturalWidth||R.width,u.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(u.width=R.displayWidth,u.height=R.displayHeight):(u.width=R.width,u.height=R.height),u}this.allocateTextureUnit=K,this.resetTextureUnits=$,this.getTextureUnits=J,this.setTextureUnits=O,this.setTexture2D=I,this.setTexture2DArray=W,this.setTexture3D=Z,this.setTextureCube=te,this.rebindTextures=De,this.setupRenderTarget=ne,this.updateRenderTargetMipmap=Ie,this.updateMultisampleRenderTarget=ht,this.setupDepthRenderbuffer=et,this.setupFrameBufferTexture=be,this.useMultisampledRTT=lt,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function zw(t,e){function n(i,r=$i){let s;const a=qe.getTransfer(r);if(i===vn)return t.UNSIGNED_BYTE;if(i===Xd)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Yd)return t.UNSIGNED_SHORT_5_5_5_1;if(i===o_)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===l_)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===s_)return t.BYTE;if(i===a_)return t.SHORT;if(i===za)return t.UNSIGNED_SHORT;if(i===Wd)return t.INT;if(i===ci)return t.UNSIGNED_INT;if(i===ii)return t.FLOAT;if(i===Li)return t.HALF_FLOAT;if(i===u_)return t.ALPHA;if(i===c_)return t.RGB;if(i===Gn)return t.RGBA;if(i===Di)return t.DEPTH_COMPONENT;if(i===Rr)return t.DEPTH_STENCIL;if(i===f_)return t.RED;if(i===qd)return t.RED_INTEGER;if(i===Fr)return t.RG;if(i===$d)return t.RG_INTEGER;if(i===Kd)return t.RGBA_INTEGER;if(i===nl||i===il||i===rl||i===sl)if(a===nt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===nl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===il)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===rl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===sl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===nl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===il)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===rl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===sl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===mf||i===gf||i===_f||i===vf)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===mf)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===gf)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===_f)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===vf)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===xf||i===Sf||i===yf||i===Mf||i===Ef||i===Ll||i===Tf)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===xf||i===Sf)return a===nt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===yf)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===Mf)return s.COMPRESSED_R11_EAC;if(i===Ef)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Ll)return s.COMPRESSED_RG11_EAC;if(i===Tf)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===wf||i===Af||i===Rf||i===Cf||i===bf||i===Pf||i===Lf||i===Df||i===Nf||i===If||i===Uf||i===Ff||i===Of||i===Bf)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===wf)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Af)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Rf)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Cf)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===bf)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Pf)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Lf)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Df)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Nf)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===If)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Uf)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ff)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Of)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Bf)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===kf||i===zf||i===Vf)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===kf)return a===nt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===zf)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Vf)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Hf||i===Gf||i===Dl||i===Wf)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Hf)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Gf)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Dl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Wf)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Va?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const Vw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Hw=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Gw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new x_(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new qn({vertexShader:Vw,fragmentShader:Hw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Sn(new Jl(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Ww extends kr{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,u=null,h=null,d=null,c=null,p=null,x=null;const E=typeof XRWebGLBinding<"u",g=new Gw,f={},m=n.getContextAttributes();let y=null,S=null;const w=[],T=[],C=new $e;let v=null;const A=new bn;A.viewport=new St;const b=new bn;b.viewport=new St;const P=[A,b],F=new Jy;let $=null,J=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let ae=w[q];return ae===void 0&&(ae=new Bu,w[q]=ae),ae.getTargetRaySpace()},this.getControllerGrip=function(q){let ae=w[q];return ae===void 0&&(ae=new Bu,w[q]=ae),ae.getGripSpace()},this.getHand=function(q){let ae=w[q];return ae===void 0&&(ae=new Bu,w[q]=ae),ae.getHandSpace()};function O(q){const ae=T.indexOf(q.inputSource);if(ae===-1)return;const re=w[ae];re!==void 0&&(re.update(q.inputSource,q.frame,u||a),re.dispatchEvent({type:q.type,data:q.inputSource}))}function K(){r.removeEventListener("select",O),r.removeEventListener("selectstart",O),r.removeEventListener("selectend",O),r.removeEventListener("squeeze",O),r.removeEventListener("squeezestart",O),r.removeEventListener("squeezeend",O),r.removeEventListener("end",K),r.removeEventListener("inputsourceschange",z);for(let q=0;q<w.length;q++){const ae=T[q];ae!==null&&(T[q]=null,w[q].disconnect(ae))}$=null,J=null,g.reset();for(const q in f)delete f[q];e.setRenderTarget(y),p=null,c=null,d=null,r=null,S=null,We.stop(),i.isPresenting=!1,e.setPixelRatio(v),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,i.isPresenting===!0&&Ne("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,i.isPresenting===!0&&Ne("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function(q){u=q},this.getBaseLayer=function(){return c!==null?c:p},this.getBinding=function(){return d===null&&E&&(d=new XRWebGLBinding(r,n)),d},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(q){if(r=q,r!==null){if(y=e.getRenderTarget(),r.addEventListener("select",O),r.addEventListener("selectstart",O),r.addEventListener("selectend",O),r.addEventListener("squeeze",O),r.addEventListener("squeezestart",O),r.addEventListener("squeezeend",O),r.addEventListener("end",K),r.addEventListener("inputsourceschange",z),m.xrCompatible!==!0&&await n.makeXRCompatible(),v=e.getPixelRatio(),e.getSize(C),E&&"createProjectionLayer"in XRWebGLBinding.prototype){let re=null,Le=null,Ue=null;m.depth&&(Ue=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,re=m.stencil?Rr:Di,Le=m.stencil?Va:ci);const be={colorFormat:n.RGBA8,depthFormat:Ue,scaleFactor:s};d=this.getBinding(),c=d.createProjectionLayer(be),r.updateRenderState({layers:[c]}),e.setPixelRatio(1),e.setSize(c.textureWidth,c.textureHeight,!1),S=new li(c.textureWidth,c.textureHeight,{format:Gn,type:vn,depthTexture:new Bs(c.textureWidth,c.textureHeight,Le,void 0,void 0,void 0,void 0,void 0,void 0,re),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:c.ignoreDepthValues===!1,resolveStencilBuffer:c.ignoreDepthValues===!1})}else{const re={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,re),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new li(p.framebufferWidth,p.framebufferHeight,{format:Gn,type:vn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),u=null,a=await r.requestReferenceSpace(o),We.setContext(r),We.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function z(q){for(let ae=0;ae<q.removed.length;ae++){const re=q.removed[ae],Le=T.indexOf(re);Le>=0&&(T[Le]=null,w[Le].disconnect(re))}for(let ae=0;ae<q.added.length;ae++){const re=q.added[ae];let Le=T.indexOf(re);if(Le===-1){for(let be=0;be<w.length;be++)if(be>=T.length){T.push(re),Le=be;break}else if(T[be]===null){T[be]=re,Le=be;break}if(Le===-1)break}const Ue=w[Le];Ue&&Ue.connect(re)}}const I=new B,W=new B;function Z(q,ae,re){I.setFromMatrixPosition(ae.matrixWorld),W.setFromMatrixPosition(re.matrixWorld);const Le=I.distanceTo(W),Ue=ae.projectionMatrix.elements,be=re.projectionMatrix.elements,_t=Ue[14]/(Ue[10]-1),He=Ue[14]/(Ue[10]+1),et=(Ue[9]+1)/Ue[5],De=(Ue[9]-1)/Ue[5],ne=(Ue[8]-1)/Ue[0],Ie=(be[8]+1)/be[0],ke=_t*ne,dt=_t*Ie,ht=Le/(-ne+Ie),pt=ht*-ne;if(ae.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(pt),q.translateZ(ht),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Ue[10]===-1)q.projectionMatrix.copy(ae.projectionMatrix),q.projectionMatrixInverse.copy(ae.projectionMatrixInverse);else{const lt=_t+ht,D=He+ht,an=ke-pt,tt=dt+(Le-pt),R=et*He/D*lt,_=De*He/D*lt;q.projectionMatrix.makePerspective(an,tt,R,_,lt,D),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function te(q,ae){ae===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(ae.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(r===null)return;let ae=q.near,re=q.far;g.texture!==null&&(g.depthNear>0&&(ae=g.depthNear),g.depthFar>0&&(re=g.depthFar)),F.near=b.near=A.near=ae,F.far=b.far=A.far=re,($!==F.near||J!==F.far)&&(r.updateRenderState({depthNear:F.near,depthFar:F.far}),$=F.near,J=F.far),F.layers.mask=q.layers.mask|6,A.layers.mask=F.layers.mask&-5,b.layers.mask=F.layers.mask&-3;const Le=q.parent,Ue=F.cameras;te(F,Le);for(let be=0;be<Ue.length;be++)te(Ue[be],Le);Ue.length===2?Z(F,A,b):F.projectionMatrix.copy(A.projectionMatrix),oe(q,F,Le)};function oe(q,ae,re){re===null?q.matrix.copy(ae.matrixWorld):(q.matrix.copy(re.matrixWorld),q.matrix.invert(),q.matrix.multiply(ae.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(ae.projectionMatrix),q.projectionMatrixInverse.copy(ae.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Wa*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(c===null&&p===null))return l},this.setFoveation=function(q){l=q,c!==null&&(c.fixedFoveation=q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=q)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(F)},this.getCameraTexture=function(q){return f[q]};let Ve=null;function je(q,ae){if(h=ae.getViewerPose(u||a),x=ae,h!==null){const re=h.views;p!==null&&(e.setRenderTargetFramebuffer(S,p.framebuffer),e.setRenderTarget(S));let Le=!1;re.length!==F.cameras.length&&(F.cameras.length=0,Le=!0);for(let He=0;He<re.length;He++){const et=re[He];let De=null;if(p!==null)De=p.getViewport(et);else{const Ie=d.getViewSubImage(c,et);De=Ie.viewport,He===0&&(e.setRenderTargetTextures(S,Ie.colorTexture,Ie.depthStencilTexture),e.setRenderTarget(S))}let ne=P[He];ne===void 0&&(ne=new bn,ne.layers.enable(He),ne.viewport=new St,P[He]=ne),ne.matrix.fromArray(et.transform.matrix),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.projectionMatrix.fromArray(et.projectionMatrix),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert(),ne.viewport.set(De.x,De.y,De.width,De.height),He===0&&(F.matrix.copy(ne.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),Le===!0&&F.cameras.push(ne)}const Ue=r.enabledFeatures;if(Ue&&Ue.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&E){d=i.getBinding();const He=d.getDepthInformation(re[0]);He&&He.isValid&&He.texture&&g.init(He,r.renderState)}if(Ue&&Ue.includes("camera-access")&&E){e.state.unbindTexture(),d=i.getBinding();for(let He=0;He<re.length;He++){const et=re[He].camera;if(et){let De=f[et];De||(De=new x_,f[et]=De);const ne=d.getCameraImage(et);De.sourceTexture=ne}}}}for(let re=0;re<w.length;re++){const Le=T[re],Ue=w[re];Le!==null&&Ue!==void 0&&Ue.update(Le,ae,u||a)}Ve&&Ve(q,ae),ae.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ae}),x=null}const We=new E_;We.setAnimationLoop(je),this.setAnimationLoop=function(q){Ve=q},this.dispose=function(){}}}const Xw=new Mt,P_=new Fe;P_.set(-1,0,0,0,1,0,0,0,1);function Yw(t,e){function n(g,f){g.matrixAutoUpdate===!0&&g.updateMatrix(),f.value.copy(g.matrix)}function i(g,f){f.color.getRGB(g.fogColor.value,S_(t)),f.isFog?(g.fogNear.value=f.near,g.fogFar.value=f.far):f.isFogExp2&&(g.fogDensity.value=f.density)}function r(g,f,m,y,S){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?s(g,f):f.isMeshLambertMaterial?(s(g,f),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(s(g,f),d(g,f)):f.isMeshPhongMaterial?(s(g,f),h(g,f),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(s(g,f),c(g,f),f.isMeshPhysicalMaterial&&p(g,f,S)):f.isMeshMatcapMaterial?(s(g,f),x(g,f)):f.isMeshDepthMaterial?s(g,f):f.isMeshDistanceMaterial?(s(g,f),E(g,f)):f.isMeshNormalMaterial?s(g,f):f.isLineBasicMaterial?(a(g,f),f.isLineDashedMaterial&&o(g,f)):f.isPointsMaterial?l(g,f,m,y):f.isSpriteMaterial?u(g,f):f.isShadowMaterial?(g.color.value.copy(f.color),g.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(g,f){g.opacity.value=f.opacity,f.color&&g.diffuse.value.copy(f.color),f.emissive&&g.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(g.map.value=f.map,n(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,n(f.alphaMap,g.alphaMapTransform)),f.bumpMap&&(g.bumpMap.value=f.bumpMap,n(f.bumpMap,g.bumpMapTransform),g.bumpScale.value=f.bumpScale,f.side===hn&&(g.bumpScale.value*=-1)),f.normalMap&&(g.normalMap.value=f.normalMap,n(f.normalMap,g.normalMapTransform),g.normalScale.value.copy(f.normalScale),f.side===hn&&g.normalScale.value.negate()),f.displacementMap&&(g.displacementMap.value=f.displacementMap,n(f.displacementMap,g.displacementMapTransform),g.displacementScale.value=f.displacementScale,g.displacementBias.value=f.displacementBias),f.emissiveMap&&(g.emissiveMap.value=f.emissiveMap,n(f.emissiveMap,g.emissiveMapTransform)),f.specularMap&&(g.specularMap.value=f.specularMap,n(f.specularMap,g.specularMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest);const m=e.get(f),y=m.envMap,S=m.envMapRotation;y&&(g.envMap.value=y,g.envMapRotation.value.setFromMatrix4(Xw.makeRotationFromEuler(S)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(P_),g.reflectivity.value=f.reflectivity,g.ior.value=f.ior,g.refractionRatio.value=f.refractionRatio),f.lightMap&&(g.lightMap.value=f.lightMap,g.lightMapIntensity.value=f.lightMapIntensity,n(f.lightMap,g.lightMapTransform)),f.aoMap&&(g.aoMap.value=f.aoMap,g.aoMapIntensity.value=f.aoMapIntensity,n(f.aoMap,g.aoMapTransform))}function a(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,f.map&&(g.map.value=f.map,n(f.map,g.mapTransform))}function o(g,f){g.dashSize.value=f.dashSize,g.totalSize.value=f.dashSize+f.gapSize,g.scale.value=f.scale}function l(g,f,m,y){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.size.value=f.size*m,g.scale.value=y*.5,f.map&&(g.map.value=f.map,n(f.map,g.uvTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,n(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function u(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.rotation.value=f.rotation,f.map&&(g.map.value=f.map,n(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,n(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function h(g,f){g.specular.value.copy(f.specular),g.shininess.value=Math.max(f.shininess,1e-4)}function d(g,f){f.gradientMap&&(g.gradientMap.value=f.gradientMap)}function c(g,f){g.metalness.value=f.metalness,f.metalnessMap&&(g.metalnessMap.value=f.metalnessMap,n(f.metalnessMap,g.metalnessMapTransform)),g.roughness.value=f.roughness,f.roughnessMap&&(g.roughnessMap.value=f.roughnessMap,n(f.roughnessMap,g.roughnessMapTransform)),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)}function p(g,f,m){g.ior.value=f.ior,f.sheen>0&&(g.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),g.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(g.sheenColorMap.value=f.sheenColorMap,n(f.sheenColorMap,g.sheenColorMapTransform)),f.sheenRoughnessMap&&(g.sheenRoughnessMap.value=f.sheenRoughnessMap,n(f.sheenRoughnessMap,g.sheenRoughnessMapTransform))),f.clearcoat>0&&(g.clearcoat.value=f.clearcoat,g.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(g.clearcoatMap.value=f.clearcoatMap,n(f.clearcoatMap,g.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,n(f.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(g.clearcoatNormalMap.value=f.clearcoatNormalMap,n(f.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===hn&&g.clearcoatNormalScale.value.negate())),f.dispersion>0&&(g.dispersion.value=f.dispersion),f.iridescence>0&&(g.iridescence.value=f.iridescence,g.iridescenceIOR.value=f.iridescenceIOR,g.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(g.iridescenceMap.value=f.iridescenceMap,n(f.iridescenceMap,g.iridescenceMapTransform)),f.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=f.iridescenceThicknessMap,n(f.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),f.transmission>0&&(g.transmission.value=f.transmission,g.transmissionSamplerMap.value=m.texture,g.transmissionSamplerSize.value.set(m.width,m.height),f.transmissionMap&&(g.transmissionMap.value=f.transmissionMap,n(f.transmissionMap,g.transmissionMapTransform)),g.thickness.value=f.thickness,f.thicknessMap&&(g.thicknessMap.value=f.thicknessMap,n(f.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=f.attenuationDistance,g.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(g.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(g.anisotropyMap.value=f.anisotropyMap,n(f.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=f.specularIntensity,g.specularColor.value.copy(f.specularColor),f.specularColorMap&&(g.specularColorMap.value=f.specularColorMap,n(f.specularColorMap,g.specularColorMapTransform)),f.specularIntensityMap&&(g.specularIntensityMap.value=f.specularIntensityMap,n(f.specularIntensityMap,g.specularIntensityMapTransform))}function x(g,f){f.matcap&&(g.matcap.value=f.matcap)}function E(g,f){const m=e.get(f).light;g.referencePosition.value.setFromMatrixPosition(m.matrixWorld),g.nearDistance.value=m.shadow.camera.near,g.farDistance.value=m.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function qw(t,e,n,i){let r={},s={},a=[];const o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,w){const T=w.program;i.uniformBlockBinding(S,T)}function u(S,w){let T=r[S.id];T===void 0&&(g(S),T=h(S),r[S.id]=T,S.addEventListener("dispose",m));const C=w.program;i.updateUBOMapping(S,C);const v=e.render.frame;s[S.id]!==v&&(c(S),s[S.id]=v)}function h(S){const w=d();S.__bindingPointIndex=w;const T=t.createBuffer(),C=S.__size,v=S.usage;return t.bindBuffer(t.UNIFORM_BUFFER,T),t.bufferData(t.UNIFORM_BUFFER,C,v),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,w,T),T}function d(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return Ke("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function c(S){const w=r[S.id],T=S.uniforms,C=S.__cache;t.bindBuffer(t.UNIFORM_BUFFER,w);for(let v=0,A=T.length;v<A;v++){const b=T[v];if(Array.isArray(b))for(let P=0,F=b.length;P<F;P++)p(b[P],v,P,C);else p(b,v,0,C)}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(S,w,T,C){if(E(S,w,T,C)===!0){const v=S.__offset,A=S.value;if(Array.isArray(A)){let b=0;for(let P=0;P<A.length;P++){const F=A[P],$=f(F);x(F,S.__data,b),typeof F!="number"&&typeof F!="boolean"&&!F.isMatrix3&&!ArrayBuffer.isView(F)&&(b+=$.storage/Float32Array.BYTES_PER_ELEMENT)}}else x(A,S.__data,0);t.bufferSubData(t.UNIFORM_BUFFER,v,S.__data)}}function x(S,w,T){typeof S=="number"||typeof S=="boolean"?w[0]=S:S.isMatrix3?(w[0]=S.elements[0],w[1]=S.elements[1],w[2]=S.elements[2],w[3]=0,w[4]=S.elements[3],w[5]=S.elements[4],w[6]=S.elements[5],w[7]=0,w[8]=S.elements[6],w[9]=S.elements[7],w[10]=S.elements[8],w[11]=0):ArrayBuffer.isView(S)?w.set(new S.constructor(S.buffer,S.byteOffset,w.length)):S.toArray(w,T)}function E(S,w,T,C){const v=S.value,A=w+"_"+T;if(C[A]===void 0)return typeof v=="number"||typeof v=="boolean"?C[A]=v:ArrayBuffer.isView(v)?C[A]=v.slice():C[A]=v.clone(),!0;{const b=C[A];if(typeof v=="number"||typeof v=="boolean"){if(b!==v)return C[A]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(b.equals(v)===!1)return b.copy(v),!0}}return!1}function g(S){const w=S.uniforms;let T=0;const C=16;for(let A=0,b=w.length;A<b;A++){const P=Array.isArray(w[A])?w[A]:[w[A]];for(let F=0,$=P.length;F<$;F++){const J=P[F],O=Array.isArray(J.value)?J.value:[J.value];for(let K=0,z=O.length;K<z;K++){const I=O[K],W=f(I),Z=T%C,te=Z%W.boundary,oe=Z+te;T+=te,oe!==0&&C-oe<W.storage&&(T+=C-oe),J.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),J.__offset=T,T+=W.storage}}}const v=T%C;return v>0&&(T+=C-v),S.__size=T,S.__cache={},this}function f(S){const w={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(w.boundary=4,w.storage=4):S.isVector2?(w.boundary=8,w.storage=8):S.isVector3||S.isColor?(w.boundary=16,w.storage=12):S.isVector4?(w.boundary=16,w.storage=16):S.isMatrix3?(w.boundary=48,w.storage=48):S.isMatrix4?(w.boundary=64,w.storage=64):S.isTexture?Ne("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(w.boundary=16,w.storage=S.byteLength):Ne("WebGLRenderer: Unsupported uniform value type.",S),w}function m(S){const w=S.target;w.removeEventListener("dispose",m);const T=a.indexOf(w.__bindingPointIndex);a.splice(T,1),t.deleteBuffer(r[w.id]),delete r[w.id],delete s[w.id]}function y(){for(const S in r)t.deleteBuffer(r[S]);a=[],r={},s={}}return{bind:l,update:u,dispose:y}}const $w=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Jn=null;function Kw(){return Jn===null&&(Jn=new Dy($w,16,16,Fr,Li),Jn.name="DFG_LUT",Jn.minFilter=Kt,Jn.magFilter=Kt,Jn.wrapS=Mi,Jn.wrapT=Mi,Jn.generateMipmaps=!1,Jn.needsUpdate=!0),Jn}class Zw{constructor(e={}){const{canvas:n=$S(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:c=!1,outputBufferType:p=vn}=e;this.isWebGLRenderer=!0;let x;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=i.getContextAttributes().alpha}else x=a;const E=p,g=new Set([Kd,$d,qd]),f=new Set([vn,ci,za,Va,Xd,Yd]),m=new Uint32Array(4),y=new Int32Array(4),S=new B;let w=null,T=null;const C=[],v=[];let A=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=oi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const b=this;let P=!1,F=null,$=null,J=null,O=null;this._outputColorSpace=on;let K=0,z=0,I=null,W=-1,Z=null;const te=new St,oe=new St;let Ve=null;const je=new Ze(0);let We=0,q=n.width,ae=n.height,re=1,Le=null,Ue=null;const be=new St(0,0,q,ae),_t=new St(0,0,q,ae);let He=!1;const et=new ih;let De=!1,ne=!1;const Ie=new Mt,ke=new B,dt=new St,ht={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let pt=!1;function lt(){return I===null?re:1}let D=i;function an(M,N){return n.getContext(M,N)}try{const M={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Gd}`),n.addEventListener("webglcontextlost",Tt,!1),n.addEventListener("webglcontextrestored",ut,!1),n.addEventListener("webglcontextcreationerror",$n,!1),D===null){const N="webgl2";if(D=an(N,M),D===null)throw an(N)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(M){throw Ke("WebGLRenderer: "+M.message),M}let tt,R,_,U,H,X,le,ce,Y,Q,fe,we,pe,de,Ce,Pe,Oe,L,ue,j,he,ve,ee;function Te(){tt=new KT(D),tt.init(),he=new zw(D,tt),R=new VT(D,tt,e,he),_=new Bw(D,tt),R.reversedDepthBuffer&&c&&_.buffers.depth.setReversed(!0),$=D.createFramebuffer(),J=D.createFramebuffer(),O=D.createFramebuffer(),U=new QT(D),H=new Tw,X=new kw(D,tt,_,H,R,he,U),le=new $T(b),ce=new nM(D),ve=new kT(D,ce),Y=new ZT(D,ce,U,ve),Q=new e1(D,Y,ce,ve,U),L=new JT(D,R,X),Ce=new HT(H),fe=new Ew(b,le,tt,R,ve,Ce),we=new Yw(b,H),pe=new Aw,de=new Dw(tt),Oe=new BT(b,le,_,Q,x,l),Pe=new Ow(b,Q,R),ee=new qw(D,U,R,_),ue=new zT(D,tt,U),j=new jT(D,tt,U),U.programs=fe.programs,b.capabilities=R,b.extensions=tt,b.properties=H,b.renderLists=pe,b.shadowMap=Pe,b.state=_,b.info=U}Te(),E!==vn&&(A=new n1(E,n.width,n.height,o,r,s));const Me=new Ww(b,D);this.xr=Me,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const M=tt.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=tt.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return re},this.setPixelRatio=function(M){M!==void 0&&(re=M,this.setSize(q,ae,!1))},this.getSize=function(M){return M.set(q,ae)},this.setSize=function(M,N,G=!0){if(Me.isPresenting){Ne("WebGLRenderer: Can't change size while VR device is presenting.");return}q=M,ae=N,n.width=Math.floor(M*re),n.height=Math.floor(N*re),G===!0&&(n.style.width=M+"px",n.style.height=N+"px"),A!==null&&A.setSize(n.width,n.height),this.setViewport(0,0,M,N)},this.getDrawingBufferSize=function(M){return M.set(q*re,ae*re).floor()},this.setDrawingBufferSize=function(M,N,G){q=M,ae=N,re=G,n.width=Math.floor(M*G),n.height=Math.floor(N*G),this.setViewport(0,0,M,N)},this.setEffects=function(M){if(E===vn){Ke("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let N=0;N<M.length;N++)if(M[N].isOutputPass===!0){Ne("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(te)},this.getViewport=function(M){return M.copy(be)},this.setViewport=function(M,N,G,k){M.isVector4?be.set(M.x,M.y,M.z,M.w):be.set(M,N,G,k),_.viewport(te.copy(be).multiplyScalar(re).round())},this.getScissor=function(M){return M.copy(_t)},this.setScissor=function(M,N,G,k){M.isVector4?_t.set(M.x,M.y,M.z,M.w):_t.set(M,N,G,k),_.scissor(oe.copy(_t).multiplyScalar(re).round())},this.getScissorTest=function(){return He},this.setScissorTest=function(M){_.setScissorTest(He=M)},this.setOpaqueSort=function(M){Le=M},this.setTransparentSort=function(M){Ue=M},this.getClearColor=function(M){return M.copy(Oe.getClearColor())},this.setClearColor=function(){Oe.setClearColor(...arguments)},this.getClearAlpha=function(){return Oe.getClearAlpha()},this.setClearAlpha=function(){Oe.setClearAlpha(...arguments)},this.clear=function(M=!0,N=!0,G=!0){let k=0;if(M){let V=!1;if(I!==null){const _e=I.texture.format;V=g.has(_e)}if(V){const _e=I.texture.type,Se=f.has(_e),ge=Oe.getClearColor(),Ee=Oe.getClearAlpha(),Ae=ge.r,Be=ge.g,Ge=ge.b;Se?(m[0]=Ae,m[1]=Be,m[2]=Ge,m[3]=Ee,D.clearBufferuiv(D.COLOR,0,m)):(y[0]=Ae,y[1]=Be,y[2]=Ge,y[3]=Ee,D.clearBufferiv(D.COLOR,0,y))}else k|=D.COLOR_BUFFER_BIT}N&&(k|=D.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),G&&(k|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k!==0&&D.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),F=M},this.dispose=function(){n.removeEventListener("webglcontextlost",Tt,!1),n.removeEventListener("webglcontextrestored",ut,!1),n.removeEventListener("webglcontextcreationerror",$n,!1),Oe.dispose(),pe.dispose(),de.dispose(),H.dispose(),le.dispose(),Q.dispose(),ve.dispose(),ee.dispose(),fe.dispose(),Me.dispose(),Me.removeEventListener("sessionstart",dh),Me.removeEventListener("sessionend",hh),dr.stop()};function Tt(M){M.preventDefault(),zp("WebGLRenderer: Context Lost."),P=!0}function ut(){zp("WebGLRenderer: Context Restored."),P=!1;const M=U.autoReset,N=Pe.enabled,G=Pe.autoUpdate,k=Pe.needsUpdate,V=Pe.type;Te(),U.autoReset=M,Pe.enabled=N,Pe.autoUpdate=G,Pe.needsUpdate=k,Pe.type=V}function $n(M){Ke("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Kn(M){const N=M.target;N.removeEventListener("dispose",Kn),L_(N)}function L_(M){D_(M),H.remove(M)}function D_(M){const N=H.get(M).programs;N!==void 0&&(N.forEach(function(G){fe.releaseProgram(G)}),M.isShaderMaterial&&fe.releaseShaderCache(M))}this.renderBufferDirect=function(M,N,G,k,V,_e){N===null&&(N=ht);const Se=V.isMesh&&V.matrixWorld.determinantAffine()<0,ge=U_(M,N,G,k,V);_.setMaterial(k,Se);let Ee=G.index,Ae=1;if(k.wireframe===!0){if(Ee=Y.getWireframeAttribute(G),Ee===void 0)return;Ae=2}const Be=G.drawRange,Ge=G.attributes.position;let Re=Be.start*Ae,rt=(Be.start+Be.count)*Ae;_e!==null&&(Re=Math.max(Re,_e.start*Ae),rt=Math.min(rt,(_e.start+_e.count)*Ae)),Ee!==null?(Re=Math.max(Re,0),rt=Math.min(rt,Ee.count)):Ge!=null&&(Re=Math.max(Re,0),rt=Math.min(rt,Ge.count));const Rt=rt-Re;if(Rt<0||Rt===1/0)return;ve.setup(V,k,ge,G,Ee);let wt,at=ue;if(Ee!==null&&(wt=ce.get(Ee),at=j,at.setIndex(wt)),V.isMesh)k.wireframe===!0?(_.setLineWidth(k.wireframeLinewidth*lt()),at.setMode(D.LINES)):at.setMode(D.TRIANGLES);else if(V.isLine){let Gt=k.linewidth;Gt===void 0&&(Gt=1),_.setLineWidth(Gt*lt()),V.isLineSegments?at.setMode(D.LINES):V.isLineLoop?at.setMode(D.LINE_LOOP):at.setMode(D.LINE_STRIP)}else V.isPoints?at.setMode(D.POINTS):V.isSprite&&at.setMode(D.TRIANGLES);if(V.isBatchedMesh)if(tt.get("WEBGL_multi_draw"))at.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const Gt=V._multiDrawStarts,xe=V._multiDrawCounts,pn=V._multiDrawCount,Qe=Ee?ce.get(Ee).bytesPerElement:1,wn=H.get(k).currentProgram.getUniforms();for(let Zn=0;Zn<pn;Zn++)wn.setValue(D,"_gl_DrawID",Zn),at.render(Gt[Zn]/Qe,xe[Zn])}else if(V.isInstancedMesh)at.renderInstances(Re,Rt,V.count);else if(G.isInstancedBufferGeometry){const Gt=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,xe=Math.min(G.instanceCount,Gt);at.renderInstances(Re,Rt,xe)}else at.render(Re,Rt)};function fh(M,N,G){M.transparent===!0&&M.side===xi&&M.forceSinglePass===!1?(M.side=hn,M.needsUpdate=!0,to(M,N,G),M.side=Pi,M.needsUpdate=!0,to(M,N,G),M.side=xi):to(M,N,G)}this.compile=function(M,N,G=null){G===null&&(G=M),T=de.get(G),T.init(N),v.push(T),G.traverseVisible(function(V){V.isLight&&V.layers.test(N.layers)&&(T.pushLight(V),V.castShadow&&T.pushShadow(V))}),M!==G&&M.traverseVisible(function(V){V.isLight&&V.layers.test(N.layers)&&(T.pushLight(V),V.castShadow&&T.pushShadow(V))}),T.setupLights();const k=new Set;return M.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;const _e=V.material;if(_e)if(Array.isArray(_e))for(let Se=0;Se<_e.length;Se++){const ge=_e[Se];fh(ge,G,V),k.add(ge)}else fh(_e,G,V),k.add(_e)}),T=v.pop(),k},this.compileAsync=function(M,N,G=null){const k=this.compile(M,N,G);return new Promise(V=>{function _e(){if(k.forEach(function(Se){H.get(Se).currentProgram.isReady()&&k.delete(Se)}),k.size===0){V(M);return}setTimeout(_e,10)}tt.get("KHR_parallel_shader_compile")!==null?_e():setTimeout(_e,10)})};let nu=null;function N_(M){nu&&nu(M)}function dh(){dr.stop()}function hh(){dr.start()}const dr=new E_;dr.setAnimationLoop(N_),typeof self<"u"&&dr.setContext(self),this.setAnimationLoop=function(M){nu=M,Me.setAnimationLoop(M),M===null?dr.stop():dr.start()},Me.addEventListener("sessionstart",dh),Me.addEventListener("sessionend",hh),this.render=function(M,N){if(N!==void 0&&N.isCamera!==!0){Ke("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;F!==null&&F.renderStart(M,N);const G=Me.enabled===!0&&Me.isPresenting===!0,k=A!==null&&(I===null||G)&&A.begin(b,I);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),Me.enabled===!0&&Me.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(Me.cameraAutoUpdate===!0&&Me.updateCamera(N),N=Me.getCamera()),M.isScene===!0&&M.onBeforeRender(b,M,N,I),T=de.get(M,v.length),T.init(N),T.state.textureUnits=X.getTextureUnits(),v.push(T),Ie.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),et.setFromProjectionMatrix(Ie,ri,N.reversedDepth),ne=this.localClippingEnabled,De=Ce.init(this.clippingPlanes,ne),w=pe.get(M,C.length),w.init(),C.push(w),Me.enabled===!0&&Me.isPresenting===!0){const Se=b.xr.getDepthSensingMesh();Se!==null&&iu(Se,N,-1/0,b.sortObjects)}iu(M,N,0,b.sortObjects),w.finish(),b.sortObjects===!0&&w.sort(Le,Ue,N.reversedDepth),pt=Me.enabled===!1||Me.isPresenting===!1||Me.hasDepthSensing()===!1,pt&&Oe.addToRenderList(w,M),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),De===!0&&Ce.beginShadows();const V=T.state.shadowsArray;if(Pe.render(V,M,N),De===!0&&Ce.endShadows(),(k&&A.hasRenderPass())===!1){const Se=w.opaque,ge=w.transmissive;if(T.setupLights(),N.isArrayCamera){const Ee=N.cameras;if(ge.length>0)for(let Ae=0,Be=Ee.length;Ae<Be;Ae++){const Ge=Ee[Ae];mh(Se,ge,M,Ge)}pt&&Oe.render(M);for(let Ae=0,Be=Ee.length;Ae<Be;Ae++){const Ge=Ee[Ae];ph(w,M,Ge,Ge.viewport)}}else ge.length>0&&mh(Se,ge,M,N),pt&&Oe.render(M),ph(w,M,N)}I!==null&&z===0&&(X.updateMultisampleRenderTarget(I),X.updateRenderTargetMipmap(I)),k&&A.end(b),M.isScene===!0&&M.onAfterRender(b,M,N),ve.resetDefaultState(),W=-1,Z=null,v.pop(),v.length>0?(T=v[v.length-1],X.setTextureUnits(T.state.textureUnits),De===!0&&Ce.setGlobalState(b.clippingPlanes,T.state.camera)):T=null,C.pop(),C.length>0?w=C[C.length-1]:w=null,F!==null&&F.renderEnd()};function iu(M,N,G,k){if(M.visible===!1)return;if(M.layers.test(N.layers)){if(M.isGroup)G=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(N);else if(M.isLightProbeGrid)T.pushLightProbeGrid(M);else if(M.isLight)T.pushLight(M),M.castShadow&&T.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||et.intersectsSprite(M)){k&&dt.setFromMatrixPosition(M.matrixWorld).applyMatrix4(Ie);const Se=Q.update(M),ge=M.material;ge.visible&&w.push(M,Se,ge,G,dt.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||et.intersectsObject(M))){const Se=Q.update(M),ge=M.material;if(k&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),dt.copy(M.boundingSphere.center)):(Se.boundingSphere===null&&Se.computeBoundingSphere(),dt.copy(Se.boundingSphere.center)),dt.applyMatrix4(M.matrixWorld).applyMatrix4(Ie)),Array.isArray(ge)){const Ee=Se.groups;for(let Ae=0,Be=Ee.length;Ae<Be;Ae++){const Ge=Ee[Ae],Re=ge[Ge.materialIndex];Re&&Re.visible&&w.push(M,Se,Re,G,dt.z,Ge)}}else ge.visible&&w.push(M,Se,ge,G,dt.z,null)}}const _e=M.children;for(let Se=0,ge=_e.length;Se<ge;Se++)iu(_e[Se],N,G,k)}function ph(M,N,G,k){const{opaque:V,transmissive:_e,transparent:Se}=M;T.setupLightsView(G),De===!0&&Ce.setGlobalState(b.clippingPlanes,G),k&&_.viewport(te.copy(k)),V.length>0&&eo(V,N,G),_e.length>0&&eo(_e,N,G),Se.length>0&&eo(Se,N,G),_.buffers.depth.setTest(!0),_.buffers.depth.setMask(!0),_.buffers.color.setMask(!0),_.setPolygonOffset(!1)}function mh(M,N,G,k){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[k.id]===void 0){const Re=tt.has("EXT_color_buffer_half_float")||tt.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[k.id]=new li(1,1,{generateMipmaps:!0,type:Re?Li:vn,minFilter:Ar,samples:Math.max(4,R.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:qe.workingColorSpace})}const _e=T.state.transmissionRenderTarget[k.id],Se=k.viewport||te;_e.setSize(Se.z*b.transmissionResolutionScale,Se.w*b.transmissionResolutionScale);const ge=b.getRenderTarget(),Ee=b.getActiveCubeFace(),Ae=b.getActiveMipmapLevel();b.setRenderTarget(_e),b.getClearColor(je),We=b.getClearAlpha(),We<1&&b.setClearColor(16777215,.5),b.clear(),pt&&Oe.render(G);const Be=b.toneMapping;b.toneMapping=oi;const Ge=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),T.setupLightsView(k),De===!0&&Ce.setGlobalState(b.clippingPlanes,k),eo(M,G,k),X.updateMultisampleRenderTarget(_e),X.updateRenderTargetMipmap(_e),tt.has("WEBGL_multisampled_render_to_texture")===!1){let Re=!1;for(let rt=0,Rt=N.length;rt<Rt;rt++){const wt=N[rt],{object:at,geometry:Gt,material:xe,group:pn}=wt;if(xe.side===xi&&at.layers.test(k.layers)){const Qe=xe.side;xe.side=hn,xe.needsUpdate=!0,gh(at,G,k,Gt,xe,pn),xe.side=Qe,xe.needsUpdate=!0,Re=!0}}Re===!0&&(X.updateMultisampleRenderTarget(_e),X.updateRenderTargetMipmap(_e))}b.setRenderTarget(ge,Ee,Ae),b.setClearColor(je,We),Ge!==void 0&&(k.viewport=Ge),b.toneMapping=Be}function eo(M,N,G){const k=N.isScene===!0?N.overrideMaterial:null;for(let V=0,_e=M.length;V<_e;V++){const Se=M[V],{object:ge,geometry:Ee,group:Ae}=Se;let Be=Se.material;Be.allowOverride===!0&&k!==null&&(Be=k),ge.layers.test(G.layers)&&gh(ge,N,G,Ee,Be,Ae)}}function gh(M,N,G,k,V,_e){M.onBeforeRender(b,N,G,k,V,_e),M.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),V.onBeforeRender(b,N,G,k,M,_e),V.transparent===!0&&V.side===xi&&V.forceSinglePass===!1?(V.side=hn,V.needsUpdate=!0,b.renderBufferDirect(G,N,k,V,M,_e),V.side=Pi,V.needsUpdate=!0,b.renderBufferDirect(G,N,k,V,M,_e),V.side=xi):b.renderBufferDirect(G,N,k,V,M,_e),M.onAfterRender(b,N,G,k,V,_e)}function to(M,N,G){N.isScene!==!0&&(N=ht);const k=H.get(M),V=T.state.lights,_e=T.state.shadowsArray,Se=V.state.version,ge=fe.getParameters(M,V.state,_e,N,G,T.state.lightProbeGridArray),Ee=fe.getProgramCacheKey(ge);let Ae=k.programs;k.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?N.environment:null,k.fog=N.fog;const Be=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;k.envMap=le.get(M.envMap||k.environment,Be),k.envMapRotation=k.environment!==null&&M.envMap===null?N.environmentRotation:M.envMapRotation,Ae===void 0&&(M.addEventListener("dispose",Kn),Ae=new Map,k.programs=Ae);let Ge=Ae.get(Ee);if(Ge!==void 0){if(k.currentProgram===Ge&&k.lightsStateVersion===Se)return vh(M,ge),Ge}else ge.uniforms=fe.getUniforms(M),F!==null&&M.isNodeMaterial&&F.build(M,G,ge),M.onBeforeCompile(ge,b),Ge=fe.acquireProgram(ge,Ee),Ae.set(Ee,Ge),k.uniforms=ge.uniforms;const Re=k.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Re.clippingPlanes=Ce.uniform),vh(M,ge),k.needsLights=O_(M),k.lightsStateVersion=Se,k.needsLights&&(Re.ambientLightColor.value=V.state.ambient,Re.lightProbe.value=V.state.probe,Re.directionalLights.value=V.state.directional,Re.directionalLightShadows.value=V.state.directionalShadow,Re.spotLights.value=V.state.spot,Re.spotLightShadows.value=V.state.spotShadow,Re.rectAreaLights.value=V.state.rectArea,Re.ltc_1.value=V.state.rectAreaLTC1,Re.ltc_2.value=V.state.rectAreaLTC2,Re.pointLights.value=V.state.point,Re.pointLightShadows.value=V.state.pointShadow,Re.hemisphereLights.value=V.state.hemi,Re.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Re.spotLightMatrix.value=V.state.spotLightMatrix,Re.spotLightMap.value=V.state.spotLightMap,Re.pointShadowMatrix.value=V.state.pointShadowMatrix),k.lightProbeGrid=T.state.lightProbeGridArray.length>0,k.currentProgram=Ge,k.uniformsList=null,Ge}function _h(M){if(M.uniformsList===null){const N=M.currentProgram.getUniforms();M.uniformsList=al.seqWithValue(N.seq,M.uniforms)}return M.uniformsList}function vh(M,N){const G=H.get(M);G.outputColorSpace=N.outputColorSpace,G.batching=N.batching,G.batchingColor=N.batchingColor,G.instancing=N.instancing,G.instancingColor=N.instancingColor,G.instancingMorph=N.instancingMorph,G.skinning=N.skinning,G.morphTargets=N.morphTargets,G.morphNormals=N.morphNormals,G.morphColors=N.morphColors,G.morphTargetsCount=N.morphTargetsCount,G.numClippingPlanes=N.numClippingPlanes,G.numIntersection=N.numClipIntersection,G.vertexAlphas=N.vertexAlphas,G.vertexTangents=N.vertexTangents,G.toneMapping=N.toneMapping}function I_(M,N){if(M.length===0)return null;if(M.length===1)return M[0].texture!==null?M[0]:null;S.setFromMatrixPosition(N.matrixWorld);for(let G=0,k=M.length;G<k;G++){const V=M[G];if(V.texture!==null&&V.boundingBox.containsPoint(S))return V}return null}function U_(M,N,G,k,V){N.isScene!==!0&&(N=ht),X.resetTextureUnits();const _e=N.fog,Se=k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial?N.environment:null,ge=I===null?b.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:qe.workingColorSpace,Ee=k.isMeshStandardMaterial||k.isMeshLambertMaterial&&!k.envMap||k.isMeshPhongMaterial&&!k.envMap,Ae=le.get(k.envMap||Se,Ee),Be=k.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Ge=!!G.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Re=!!G.morphAttributes.position,rt=!!G.morphAttributes.normal,Rt=!!G.morphAttributes.color;let wt=oi;k.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(wt=b.toneMapping);const at=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Gt=at!==void 0?at.length:0,xe=H.get(k),pn=T.state.lights;if(De===!0&&(ne===!0||M!==Z)){const ct=M===Z&&k.id===W;Ce.setState(k,M,ct)}let Qe=!1;k.version===xe.__version?(xe.needsLights&&xe.lightsStateVersion!==pn.state.version||xe.outputColorSpace!==ge||V.isBatchedMesh&&xe.batching===!1||!V.isBatchedMesh&&xe.batching===!0||V.isBatchedMesh&&xe.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&xe.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&xe.instancing===!1||!V.isInstancedMesh&&xe.instancing===!0||V.isSkinnedMesh&&xe.skinning===!1||!V.isSkinnedMesh&&xe.skinning===!0||V.isInstancedMesh&&xe.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&xe.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&xe.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&xe.instancingMorph===!1&&V.morphTexture!==null||xe.envMap!==Ae||k.fog===!0&&xe.fog!==_e||xe.numClippingPlanes!==void 0&&(xe.numClippingPlanes!==Ce.numPlanes||xe.numIntersection!==Ce.numIntersection)||xe.vertexAlphas!==Be||xe.vertexTangents!==Ge||xe.morphTargets!==Re||xe.morphNormals!==rt||xe.morphColors!==Rt||xe.toneMapping!==wt||xe.morphTargetsCount!==Gt||!!xe.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(Qe=!0):(Qe=!0,xe.__version=k.version);let wn=xe.currentProgram;Qe===!0&&(wn=to(k,N,V),F&&k.isNodeMaterial&&F.onUpdateProgram(k,wn,xe));let Zn=!1,Ii=!1,zr=!1;const ot=wn.getUniforms(),Ct=xe.uniforms;if(_.useProgram(wn.program)&&(Zn=!0,Ii=!0,zr=!0),k.id!==W&&(W=k.id,Ii=!0),xe.needsLights){const ct=I_(T.state.lightProbeGridArray,V);xe.lightProbeGrid!==ct&&(xe.lightProbeGrid=ct,Ii=!0)}if(Zn||Z!==M){_.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),ot.setValue(D,"projectionMatrix",M.projectionMatrix),ot.setValue(D,"viewMatrix",M.matrixWorldInverse);const Fi=ot.map.cameraPosition;Fi!==void 0&&Fi.setValue(D,ke.setFromMatrixPosition(M.matrixWorld)),R.logarithmicDepthBuffer&&ot.setValue(D,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&ot.setValue(D,"isOrthographic",M.isOrthographicCamera===!0),Z!==M&&(Z=M,Ii=!0,zr=!0)}if(xe.needsLights&&(pn.state.directionalShadowMap.length>0&&ot.setValue(D,"directionalShadowMap",pn.state.directionalShadowMap,X),pn.state.spotShadowMap.length>0&&ot.setValue(D,"spotShadowMap",pn.state.spotShadowMap,X),pn.state.pointShadowMap.length>0&&ot.setValue(D,"pointShadowMap",pn.state.pointShadowMap,X)),V.isSkinnedMesh){ot.setOptional(D,V,"bindMatrix"),ot.setOptional(D,V,"bindMatrixInverse");const ct=V.skeleton;ct&&(ct.boneTexture===null&&ct.computeBoneTexture(),ot.setValue(D,"boneTexture",ct.boneTexture,X))}V.isBatchedMesh&&(ot.setOptional(D,V,"batchingTexture"),ot.setValue(D,"batchingTexture",V._matricesTexture,X),ot.setOptional(D,V,"batchingIdTexture"),ot.setValue(D,"batchingIdTexture",V._indirectTexture,X),ot.setOptional(D,V,"batchingColorTexture"),V._colorsTexture!==null&&ot.setValue(D,"batchingColorTexture",V._colorsTexture,X));const Ui=G.morphAttributes;if((Ui.position!==void 0||Ui.normal!==void 0||Ui.color!==void 0)&&L.update(V,G,wn),(Ii||xe.receiveShadow!==V.receiveShadow)&&(xe.receiveShadow=V.receiveShadow,ot.setValue(D,"receiveShadow",V.receiveShadow)),(k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial)&&k.envMap===null&&N.environment!==null&&(Ct.envMapIntensity.value=N.environmentIntensity),Ct.dfgLUT!==void 0&&(Ct.dfgLUT.value=Kw()),Ii){if(ot.setValue(D,"toneMappingExposure",b.toneMappingExposure),xe.needsLights&&F_(Ct,zr),_e&&k.fog===!0&&we.refreshFogUniforms(Ct,_e),we.refreshMaterialUniforms(Ct,k,re,ae,T.state.transmissionRenderTarget[M.id]),xe.needsLights&&xe.lightProbeGrid){const ct=xe.lightProbeGrid;Ct.probesSH.value=ct.texture,Ct.probesMin.value.copy(ct.boundingBox.min),Ct.probesMax.value.copy(ct.boundingBox.max),Ct.probesResolution.value.copy(ct.resolution)}al.upload(D,_h(xe),Ct,X)}if(k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(al.upload(D,_h(xe),Ct,X),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&ot.setValue(D,"center",V.center),ot.setValue(D,"modelViewMatrix",V.modelViewMatrix),ot.setValue(D,"normalMatrix",V.normalMatrix),ot.setValue(D,"modelMatrix",V.matrixWorld),k.uniformsGroups!==void 0){const ct=k.uniformsGroups;for(let Fi=0,Vr=ct.length;Fi<Vr;Fi++){const xh=ct[Fi];ee.update(xh,wn),ee.bind(xh,wn)}}return wn}function F_(M,N){M.ambientLightColor.needsUpdate=N,M.lightProbe.needsUpdate=N,M.directionalLights.needsUpdate=N,M.directionalLightShadows.needsUpdate=N,M.pointLights.needsUpdate=N,M.pointLightShadows.needsUpdate=N,M.spotLights.needsUpdate=N,M.spotLightShadows.needsUpdate=N,M.rectAreaLights.needsUpdate=N,M.hemisphereLights.needsUpdate=N}function O_(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return K},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(M,N,G){const k=H.get(M);k.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,k.__autoAllocateDepthBuffer===!1&&(k.__useRenderToTexture=!1),H.get(M.texture).__webglTexture=N,H.get(M.depthTexture).__webglTexture=k.__autoAllocateDepthBuffer?void 0:G,k.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,N){const G=H.get(M);G.__webglFramebuffer=N,G.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(M,N=0,G=0){I=M,K=N,z=G;let k=null,V=!1,_e=!1;if(M){const ge=H.get(M);if(ge.__useDefaultFramebuffer!==void 0){_.bindFramebuffer(D.FRAMEBUFFER,ge.__webglFramebuffer),te.copy(M.viewport),oe.copy(M.scissor),Ve=M.scissorTest,_.viewport(te),_.scissor(oe),_.setScissorTest(Ve),W=-1;return}else if(ge.__webglFramebuffer===void 0)X.setupRenderTarget(M);else if(ge.__hasExternalTextures)X.rebindTextures(M,H.get(M.texture).__webglTexture,H.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const Be=M.depthTexture;if(ge.__boundDepthTexture!==Be){if(Be!==null&&H.has(Be)&&(M.width!==Be.image.width||M.height!==Be.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");X.setupDepthRenderbuffer(M)}}const Ee=M.texture;(Ee.isData3DTexture||Ee.isDataArrayTexture||Ee.isCompressedArrayTexture)&&(_e=!0);const Ae=H.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Ae[N])?k=Ae[N][G]:k=Ae[N],V=!0):M.samples>0&&X.useMultisampledRTT(M)===!1?k=H.get(M).__webglMultisampledFramebuffer:Array.isArray(Ae)?k=Ae[G]:k=Ae,te.copy(M.viewport),oe.copy(M.scissor),Ve=M.scissorTest}else te.copy(be).multiplyScalar(re).floor(),oe.copy(_t).multiplyScalar(re).floor(),Ve=He;if(G!==0&&(k=$),_.bindFramebuffer(D.FRAMEBUFFER,k)&&_.drawBuffers(M,k),_.viewport(te),_.scissor(oe),_.setScissorTest(Ve),V){const ge=H.get(M.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+N,ge.__webglTexture,G)}else if(_e){const ge=N;for(let Ee=0;Ee<M.textures.length;Ee++){const Ae=H.get(M.textures[Ee]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Ee,Ae.__webglTexture,G,ge)}}else if(M!==null&&G!==0){const ge=H.get(M.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,ge.__webglTexture,G)}W=-1},this.readRenderTargetPixels=function(M,N,G,k,V,_e,Se,ge=0){if(!(M&&M.isWebGLRenderTarget)){Ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=H.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Se!==void 0&&(Ee=Ee[Se]),Ee){_.bindFramebuffer(D.FRAMEBUFFER,Ee);try{const Ae=M.textures[ge],Be=Ae.format,Ge=Ae.type;if(M.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+ge),!R.textureFormatReadable(Be)){Ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!R.textureTypeReadable(Ge)){Ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=M.width-k&&G>=0&&G<=M.height-V&&D.readPixels(N,G,k,V,he.convert(Be),he.convert(Ge),_e)}finally{const Ae=I!==null?H.get(I).__webglFramebuffer:null;_.bindFramebuffer(D.FRAMEBUFFER,Ae)}}},this.readRenderTargetPixelsAsync=async function(M,N,G,k,V,_e,Se,ge=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ee=H.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Se!==void 0&&(Ee=Ee[Se]),Ee)if(N>=0&&N<=M.width-k&&G>=0&&G<=M.height-V){_.bindFramebuffer(D.FRAMEBUFFER,Ee);const Ae=M.textures[ge],Be=Ae.format,Ge=Ae.type;if(M.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+ge),!R.textureFormatReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!R.textureTypeReadable(Ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Re=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Re),D.bufferData(D.PIXEL_PACK_BUFFER,_e.byteLength,D.STREAM_READ),D.readPixels(N,G,k,V,he.convert(Be),he.convert(Ge),0);const rt=I!==null?H.get(I).__webglFramebuffer:null;_.bindFramebuffer(D.FRAMEBUFFER,rt);const Rt=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await KS(D,Rt,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Re),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,_e),D.deleteBuffer(Re),D.deleteSync(Rt),_e}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,N=null,G=0){const k=Math.pow(2,-G),V=Math.floor(M.image.width*k),_e=Math.floor(M.image.height*k),Se=N!==null?N.x:0,ge=N!==null?N.y:0;X.setTexture2D(M,0),D.copyTexSubImage2D(D.TEXTURE_2D,G,0,0,Se,ge,V,_e),_.unbindTexture()},this.copyTextureToTexture=function(M,N,G=null,k=null,V=0,_e=0){let Se,ge,Ee,Ae,Be,Ge,Re,rt,Rt;const wt=M.isCompressedTexture?M.mipmaps[_e]:M.image;if(G!==null)Se=G.max.x-G.min.x,ge=G.max.y-G.min.y,Ee=G.isBox3?G.max.z-G.min.z:1,Ae=G.min.x,Be=G.min.y,Ge=G.isBox3?G.min.z:0;else{const Ct=Math.pow(2,-V);Se=Math.floor(wt.width*Ct),ge=Math.floor(wt.height*Ct),M.isDataArrayTexture?Ee=wt.depth:M.isData3DTexture?Ee=Math.floor(wt.depth*Ct):Ee=1,Ae=0,Be=0,Ge=0}k!==null?(Re=k.x,rt=k.y,Rt=k.z):(Re=0,rt=0,Rt=0);const at=he.convert(N.format),Gt=he.convert(N.type);let xe;N.isData3DTexture?(X.setTexture3D(N,0),xe=D.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(X.setTexture2DArray(N,0),xe=D.TEXTURE_2D_ARRAY):(X.setTexture2D(N,0),xe=D.TEXTURE_2D),_.activeTexture(D.TEXTURE0),_.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,N.flipY),_.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),_.pixelStorei(D.UNPACK_ALIGNMENT,N.unpackAlignment);const pn=_.getParameter(D.UNPACK_ROW_LENGTH),Qe=_.getParameter(D.UNPACK_IMAGE_HEIGHT),wn=_.getParameter(D.UNPACK_SKIP_PIXELS),Zn=_.getParameter(D.UNPACK_SKIP_ROWS),Ii=_.getParameter(D.UNPACK_SKIP_IMAGES);_.pixelStorei(D.UNPACK_ROW_LENGTH,wt.width),_.pixelStorei(D.UNPACK_IMAGE_HEIGHT,wt.height),_.pixelStorei(D.UNPACK_SKIP_PIXELS,Ae),_.pixelStorei(D.UNPACK_SKIP_ROWS,Be),_.pixelStorei(D.UNPACK_SKIP_IMAGES,Ge);const zr=M.isDataArrayTexture||M.isData3DTexture,ot=N.isDataArrayTexture||N.isData3DTexture;if(M.isDepthTexture){const Ct=H.get(M),Ui=H.get(N),ct=H.get(Ct.__renderTarget),Fi=H.get(Ui.__renderTarget);_.bindFramebuffer(D.READ_FRAMEBUFFER,ct.__webglFramebuffer),_.bindFramebuffer(D.DRAW_FRAMEBUFFER,Fi.__webglFramebuffer);for(let Vr=0;Vr<Ee;Vr++)zr&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,H.get(M).__webglTexture,V,Ge+Vr),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,H.get(N).__webglTexture,_e,Rt+Vr)),D.blitFramebuffer(Ae,Be,Se,ge,Re,rt,Se,ge,D.DEPTH_BUFFER_BIT,D.NEAREST);_.bindFramebuffer(D.READ_FRAMEBUFFER,null),_.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(V!==0||M.isRenderTargetTexture||H.has(M)){const Ct=H.get(M),Ui=H.get(N);_.bindFramebuffer(D.READ_FRAMEBUFFER,J),_.bindFramebuffer(D.DRAW_FRAMEBUFFER,O);for(let ct=0;ct<Ee;ct++)zr?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ct.__webglTexture,V,Ge+ct):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Ct.__webglTexture,V),ot?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ui.__webglTexture,_e,Rt+ct):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Ui.__webglTexture,_e),V!==0?D.blitFramebuffer(Ae,Be,Se,ge,Re,rt,Se,ge,D.COLOR_BUFFER_BIT,D.NEAREST):ot?D.copyTexSubImage3D(xe,_e,Re,rt,Rt+ct,Ae,Be,Se,ge):D.copyTexSubImage2D(xe,_e,Re,rt,Ae,Be,Se,ge);_.bindFramebuffer(D.READ_FRAMEBUFFER,null),_.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else ot?M.isDataTexture||M.isData3DTexture?D.texSubImage3D(xe,_e,Re,rt,Rt,Se,ge,Ee,at,Gt,wt.data):N.isCompressedArrayTexture?D.compressedTexSubImage3D(xe,_e,Re,rt,Rt,Se,ge,Ee,at,wt.data):D.texSubImage3D(xe,_e,Re,rt,Rt,Se,ge,Ee,at,Gt,wt):M.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,_e,Re,rt,Se,ge,at,Gt,wt.data):M.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,_e,Re,rt,wt.width,wt.height,at,wt.data):D.texSubImage2D(D.TEXTURE_2D,_e,Re,rt,Se,ge,at,Gt,wt);_.pixelStorei(D.UNPACK_ROW_LENGTH,pn),_.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Qe),_.pixelStorei(D.UNPACK_SKIP_PIXELS,wn),_.pixelStorei(D.UNPACK_SKIP_ROWS,Zn),_.pixelStorei(D.UNPACK_SKIP_IMAGES,Ii),_e===0&&N.generateMipmaps&&D.generateMipmap(xe),_.unbindTexture()},this.initRenderTarget=function(M){H.get(M).__webglFramebuffer===void 0&&X.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?X.setTextureCube(M,0):M.isData3DTexture?X.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?X.setTexture2DArray(M,0):X.setTexture2D(M,0),_.unbindTexture()},this.resetState=function(){K=0,z=0,I=null,_.reset(),ve.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ri}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=qe._getDrawingBufferColorSpace(e),n.unpackColorSpace=qe._getUnpackColorSpace()}}const Sr={general:{hex:9741240,css:"#94a3b8",label:"General"},disaster:{hex:15680580,css:"#ef4444",label:"Disaster"},conflict:{hex:16347926,css:"#f97316",label:"Conflict"},science:{hex:3900150,css:"#3b82f6",label:"Science"},technology:{hex:440020,css:"#06b6d4",label:"Technology"},politics:{hex:16096779,css:"#f59e0b",label:"Politics"},business:{hex:1096065,css:"#10b981",label:"Business"},health:{hex:8702998,css:"#84cc16",label:"Health"},environment:{hex:1357990,css:"#14b8a6",label:"Environment"}},jw=["disaster","conflict","science","technology","politics","business","health","environment","general"];function Qw(t,e,n=1){const i=(90-t)*(Math.PI/180),r=(e+180)*(Math.PI/180);return new B(-n*Math.sin(i)*Math.cos(r),n*Math.cos(i),n*Math.sin(i)*Math.sin(r))}const Jw=`
  varying vec3 vNormal;
  void main() {
    vNormal = normalize(normalMatrix * normal);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,eA=`
  varying vec3 vNormal;
  void main() {
    float rim = 1.0 - abs(dot(vNormal, vec3(0.0, 0.0, 1.0)));
    float intensity = pow(rim, 3.0) * 0.7;
    gl_FragColor = vec4(0.25, 0.55, 1.0, 1.0) * intensity;
  }
`;function tA({newsItems:t,onNewsHover:e,onNewsClick:n}){const i=st.useRef(null),r=st.useRef(e),s=st.useRef(n),a=st.useRef([]),o=st.useRef(null);return st.useEffect(()=>{r.current=e},[e]),st.useEffect(()=>{s.current=n},[n]),st.useEffect(()=>{const l=o.current;if(!l||(l.clear(),a.current=[],t.length===0))return;const u=new xs(.012,8,8);t.forEach(h=>{var E;const d=((E=Sr[h.category])==null?void 0:E.hex)??9741240,c=new nh({color:d,depthTest:!0,depthWrite:!0,toneMapped:!1}),p=new Sn(u,c),x=new vs;x.position.copy(Qw(h.lat,h.lng,1)),x.add(p),l.add(x),a.current.push({group:x,dot:p,item:h})})},[t]),st.useEffect(()=>{const l=i.current;if(!l)return;const u=new Ay;u.background=new Ze(0);const h=l.clientWidth||800,d=l.clientHeight||600,c=new bn(42,h/d,.1,100);c.position.set(0,0,2.8);const p=new Zw({antialias:!0});p.setPixelRatio(Math.min(window.devicePixelRatio,2)),p.setSize(h,d),p.outputColorSpace=on,l.appendChild(p.domElement),u.add(new jy(14544639,.7));const x=new Zy(16775408,.9);x.position.set(5,3,4),u.add(x);const E=new xs(1,128,128),g=new rm({color:1723776,roughness:.78,metalness:0}),f=new Sn(E,g);f.rotation.x=Hp.degToRad(-8),u.add(f);const m=new qy;m.crossOrigin="anonymous";let y=!1;const S=ne=>{const Ie=["https://unpkg.com/three-globe@2.31.1/example/img/earth-blue-marble.jpg","https://cdn.jsdelivr.net/npm/three-globe@2.31.1/example/img/earth-blue-marble.jpg"];ne>=Ie.length||m.load(Ie[ne],ke=>{y||(y=!0,ke.colorSpace=on,ke.anisotropy=p.capabilities.getMaxAnisotropy(),g.map=ke,g.color.set(16777215),g.needsUpdate=!0)},void 0,()=>S(ne+1))};S(0),m.load("https://unpkg.com/three-globe@2.31.1/example/img/earth-topology.png",ne=>{g.bumpMap=ne,g.bumpScale=.01,g.needsUpdate=!0}),m.load("https://unpkg.com/three-globe@2.31.1/example/img/earth-water.png",ne=>{g.roughnessMap=ne,g.needsUpdate=!0});const w=new rm({transparent:!0,opacity:0,roughness:1,metalness:0,depthWrite:!1}),T=new Sn(new xs(1.005,64,64),w);f.add(T),m.load("https://unpkg.com/three-globe@2.31.1/example/img/earth-clouds.png",ne=>{w.alphaMap=ne,w.color.set(16777215),w.opacity=.85,w.needsUpdate=!0});const C=new qn({vertexShader:Jw,fragmentShader:eA,side:Pi,transparent:!0,depthWrite:!1,blending:nf});u.add(new Sn(new xs(1.1,64,64),C));const v=new vs;f.add(v),o.current=v;let A=!0,b=Hp.degToRad(-20);f.rotation.y=b;const P=new B;let F=0;const $=()=>{F=requestAnimationFrame($),A&&(b+=.0022,f.rotation.y=b),a.current.forEach(({group:ne})=>{ne.getWorldPosition(P),ne.visible=P.z>.04}),p.render(u,c)};$();const J=new eM,O=new $e;let K=null;const z=(ne,Ie)=>{var pt;const ke=p.domElement.getBoundingClientRect();O.x=(ne-ke.left)/ke.width*2-1,O.y=-((Ie-ke.top)/ke.height)*2+1,J.setFromCamera(O,c);const dt=a.current.filter(lt=>lt.group.visible).map(lt=>lt.dot),ht=J.intersectObjects(dt);return ht.length?((pt=a.current.find(lt=>lt.dot===ht[0].object))==null?void 0:pt.item)??null:null};let I=!1,W=!1,Z={x:0,y:0},te=0;const oe=ne=>{I=!0,W=!1,A=!1,clearTimeout(te),Z={x:ne.clientX,y:ne.clientY},p.domElement.style.cursor="grabbing"},Ve=ne=>{var ke;if(I){const dt=ne.clientX-Z.x,ht=ne.clientY-Z.y;Math.hypot(dt,ht)>2&&(W=!0),b+=dt*.006,f.rotation.y=b,f.rotation.x=Math.max(-1.2,Math.min(1.2,f.rotation.x+ht*.006)),Z={x:ne.clientX,y:ne.clientY};return}const Ie=z(ne.clientX,ne.clientY);Ie!==K&&(K=Ie,(ke=r.current)==null||ke.call(r,Ie,ne.clientX,ne.clientY),a.current.forEach(({dot:dt,item:ht})=>dt.scale.setScalar(ht.url===(Ie==null?void 0:Ie.url)?2.2:1))),p.domElement.style.cursor=Ie?"pointer":"grab"},je=()=>{I=!1,p.domElement.style.cursor=K?"pointer":"grab",te=window.setTimeout(()=>{A=!0},3e3)},We=ne=>{var ke;if(W)return;const Ie=z(ne.clientX,ne.clientY);Ie&&((ke=s.current)==null||ke.call(s,Ie))},q=ne=>{ne.preventDefault(),c.position.z=Math.max(1.5,Math.min(6.5,c.position.z+ne.deltaY*.004))};let ae={x:0,y:0},re=!1,Le=0,Ue=0;const be=ne=>{ne.preventDefault(),A=!1,clearTimeout(te),ne.touches.length===1?(re=!1,ae={x:ne.touches[0].clientX,y:ne.touches[0].clientY}):ne.touches.length===2&&(Le=Math.hypot(ne.touches[0].clientX-ne.touches[1].clientX,ne.touches[0].clientY-ne.touches[1].clientY),Ue=c.position.z)},_t=ne=>{if(ne.preventDefault(),ne.touches.length===1){const Ie=ne.touches[0].clientX-ae.x,ke=ne.touches[0].clientY-ae.y;Math.hypot(Ie,ke)>4&&(re=!0),b+=Ie*.006,f.rotation.y=b,f.rotation.x=Math.max(-1.2,Math.min(1.2,f.rotation.x+ke*.006)),ae={x:ne.touches[0].clientX,y:ne.touches[0].clientY}}else if(ne.touches.length===2){const Ie=Math.hypot(ne.touches[0].clientX-ne.touches[1].clientX,ne.touches[0].clientY-ne.touches[1].clientY);c.position.z=Math.max(1.5,Math.min(6.5,Ue*(Le/Ie)))}},He=ne=>{var Ie;if(ne.preventDefault(),!re&&ne.changedTouches.length===1){const ke=z(ne.changedTouches[0].clientX,ne.changedTouches[0].clientY);ke&&((Ie=s.current)==null||Ie.call(s,ke))}ne.touches.length===0&&(te=window.setTimeout(()=>{A=!0},3e3))},et=new ResizeObserver(()=>{const ne=l.clientWidth,Ie=l.clientHeight;c.aspect=ne/Ie,c.updateProjectionMatrix(),p.setSize(ne,Ie)});et.observe(l);const De=p.domElement;return De.style.cursor="grab",De.addEventListener("mousedown",oe),De.addEventListener("mousemove",Ve),window.addEventListener("mouseup",je),De.addEventListener("click",We),De.addEventListener("wheel",q,{passive:!1}),De.addEventListener("touchstart",be,{passive:!1}),De.addEventListener("touchmove",_t,{passive:!1}),De.addEventListener("touchend",He,{passive:!1}),()=>{cancelAnimationFrame(F),clearTimeout(te),et.disconnect(),De.removeEventListener("mousedown",oe),De.removeEventListener("mousemove",Ve),window.removeEventListener("mouseup",je),De.removeEventListener("click",We),De.removeEventListener("wheel",q),De.removeEventListener("touchstart",be),De.removeEventListener("touchmove",_t),De.removeEventListener("touchend",He),p.dispose(),l.contains(De)&&l.removeChild(De),o.current=null}},[]),ie.jsxs("div",{className:"relative w-full h-full bg-black",children:[ie.jsx("div",{ref:i,className:"w-full h-full touch-none"}),ie.jsxs("div",{className:"absolute bottom-3 left-1/2 -translate-x-1/2 text-xs text-white/40 px-3 py-1 rounded-full bg-black/30 backdrop-blur-sm pointer-events-none whitespace-nowrap",children:[ie.jsx("span",{className:"hidden sm:inline",children:"Drag to rotate · Scroll to zoom · Click a dot"}),ie.jsx("span",{className:"sm:hidden",children:"Drag · Pinch to zoom · Tap dot"})]})]})}const nA="https://ehieqmpmkyouoyjebuqa.supabase.co",Ho="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVoaWVxbXBta3lvdW95amVidXFhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQ4MDg5NTksImV4cCI6MjEwMDM4NDk1OX0.w3X-40as6pVsq9-wI3xoMjx0RKmE_jsmEQ6575gdJSU",rs=`${nA}/functions/v1/news`;function Om(t){return!(!t.url||!t.url.startsWith("http")||t.url.includes("google.com/search"))}function iA(t=""){const[e,n]=st.useState([]),[i,r]=st.useState(!0),[s,a]=st.useState(null),o=st.useCallback(async l=>{if(!rs||!Ho){a("Supabase is not configured. Set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in your .env file."),r(!1);return}try{r(!0);const u=l?`${rs}?country=${encodeURIComponent(l)}`:rs,h=await fetch(u,{headers:{Authorization:`Bearer ${Ho}`}});if(!h.ok)throw new Error(`Failed (${h.status})`);const d=await h.json();if(d.error){a(d.error),n([]);return}const p=(d.items||[]).filter(Om);n(p),a(null)}catch(u){a(u instanceof Error?u.message:"Failed to load news")}finally{r(!1)}},[]);return st.useEffect(()=>{let l=!1;const u=async()=>{if(!rs||!Ho){a("Supabase is not configured. Set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in your .env file."),r(!1);return}try{r(!0);const d=t?`${rs}?country=${encodeURIComponent(t)}`:rs,c=await fetch(d,{headers:{Authorization:`Bearer ${Ho}`}});if(!c.ok)throw new Error(`Failed (${c.status})`);const p=await c.json();if(l)return;if(p.error){a(p.error),n([]);return}const E=(p.items||[]).filter(Om);n(E),a(null)}catch(d){if(l)return;a(d instanceof Error?d.message:"Failed to load news")}finally{l||r(!1)}};u();const h=setInterval(u,5*60*1e3);return()=>{l=!0,clearInterval(h)}},[t]),{items:e,loading:i,error:s,refetch:o}}function rA(){const[t,e]=st.useState(""),[n,i]=st.useState(""),{items:r,loading:s,error:a}=iA(n),[o,l]=st.useState(null),[u,h]=st.useState({x:0,y:0}),[d,c]=st.useState(null),p=st.useCallback((m,y,S)=>{l(m),h({x:y,y:S})},[]),x=st.useCallback(m=>{m.preventDefault(),i(t.trim()),c(null)},[t]),E=st.useCallback(()=>{e(""),i(""),c(null)},[]),g=r.reduce((m,y)=>(m[y.category]=(m[y.category]||0)+1,m),{}),f=m=>{window.open(`https://www.google.com/search?q=${encodeURIComponent(m.title)}`,"_blank","noopener,noreferrer")};return ie.jsxs("div",{className:"h-screen w-screen bg-gradient-to-b from-neutral-950 via-black to-neutral-950 text-white flex flex-col overflow-hidden",children:[ie.jsxs("header",{className:"border-b border-neutral-800/60 px-4 sm:px-6 py-3 flex items-center justify-between gap-3 flex-shrink-0",children:[ie.jsx("div",{className:"flex items-center gap-2",children:ie.jsx("img",{src:"/images/world_logo copy copy copy.png",alt:"World News Globe",className:"h-16 sm:h-20 w-auto object-contain",style:{mixBlendMode:"multiply"}})}),ie.jsxs("div",{className:"flex items-center gap-3 sm:gap-4",children:[ie.jsx("div",{className:"hidden md:flex items-center gap-3 text-sm flex-wrap",children:jw.map(m=>{const y=Sr[m],S=g[m]||0;return S===0?null:ie.jsxs("div",{className:"flex items-center gap-1.5",children:[ie.jsx("span",{className:"w-2.5 h-2.5 rounded-full",style:{backgroundColor:y.css,boxShadow:`0 0 6px ${y.css}80`}}),ie.jsx("span",{className:"text-neutral-300 text-xs",children:y.label}),ie.jsxs("span",{className:"text-neutral-500 text-xs",children:["(",S,")"]})]},m)})}),ie.jsx("div",{className:"flex md:hidden items-center gap-2 text-xs",children:ie.jsxs("span",{className:"text-neutral-400",children:[r.length," items"]})}),s&&ie.jsxs("div",{className:"flex items-center gap-2 text-xs text-neutral-400",children:[ie.jsx(pS,{className:"w-4 h-4 animate-spin"}),ie.jsx("span",{className:"hidden sm:inline",children:"Fetching news..."})]})]})]}),ie.jsxs("div",{className:"px-4 pt-3 pb-3 border-b border-neutral-800/60",children:[ie.jsxs("form",{onSubmit:x,className:"flex items-center gap-2",children:[ie.jsxs("div",{className:"relative flex-1",children:[ie.jsx(Pp,{className:"absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500"}),ie.jsx("input",{type:"text",value:t,onChange:m=>e(m.target.value),placeholder:"Search by country (e.g. Japan, Brazil, France)...",className:"w-full pl-9 pr-3 py-2 bg-neutral-900 border border-neutral-700 rounded-lg text-sm text-neutral-200 placeholder-neutral-500 focus:outline-none focus:border-blue-500 transition-colors"})]}),ie.jsxs("button",{type:"submit",className:"px-3 py-2 bg-blue-600 hover:bg-blue-500 active:bg-blue-700 transition-colors rounded-lg text-sm font-medium text-white flex items-center gap-1.5 flex-shrink-0",children:[ie.jsx(Lp,{className:"w-4 h-4"}),ie.jsx("span",{className:"hidden sm:inline",children:"Filter"})]}),n&&ie.jsx("button",{type:"button",onClick:E,className:"px-2.5 py-2 bg-neutral-800 hover:bg-neutral-700 transition-colors rounded-lg text-sm text-neutral-300 flex items-center gap-1 flex-shrink-0",title:"Clear filter",children:ie.jsx(Dp,{className:"w-4 h-4"})})]}),n&&ie.jsxs("div",{className:"mt-2 flex items-center gap-1.5 text-xs text-blue-300",children:[ie.jsx(Pp,{className:"w-3.5 h-3.5"}),ie.jsxs("span",{children:["Showing news for: ",ie.jsx("span",{className:"font-medium capitalize",children:n})]})]})]}),ie.jsxs("main",{className:"flex-1 flex flex-col sm:flex-row relative overflow-hidden min-h-0",children:[ie.jsxs("div",{className:`relative overflow-hidden flex-shrink-0
                        h-[52vh] sm:h-full sm:flex-1`,children:[ie.jsx(tA,{newsItems:r,onNewsHover:p,onNewsClick:c}),o&&!d&&ie.jsxs("div",{className:"fixed z-50 pointer-events-none max-w-xs bg-neutral-900/95 backdrop-blur-md border border-neutral-700 rounded-xl p-3 shadow-2xl animate-fade-in",style:{left:Math.min(u.x+14,window.innerWidth-320),top:u.y+14},children:[ie.jsxs("div",{className:"flex items-start gap-2",children:[ie.jsx("span",{className:"w-2.5 h-2.5 rounded-full mt-1 flex-shrink-0",style:{backgroundColor:Sr[o.category].css}}),ie.jsxs("div",{children:[ie.jsx("p",{className:"text-xs text-neutral-400 mb-1",children:Sr[o.category].label}),ie.jsx("p",{className:"text-sm text-white leading-snug line-clamp-3",children:o.title}),ie.jsx("p",{className:"text-xs text-neutral-500 mt-1",children:o.source})]})]}),ie.jsx("p",{className:"text-xs text-blue-400 mt-2",children:"Tap to open article"})]}),a&&!a.includes("GNEWS_API_KEY")&&ie.jsxs("div",{className:"absolute top-4 right-4 bg-red-950/80 border border-red-800 rounded-lg px-4 py-2 text-sm text-red-300 flex items-center gap-2 max-w-sm",children:[ie.jsx("span",{className:"flex-shrink-0",children:"!"}),ie.jsx("span",{children:a})]})]}),ie.jsxs("aside",{className:`flex flex-col flex-shrink-0 overflow-hidden
                          flex-1 sm:flex-none sm:w-80
                          border-t sm:border-t-0 sm:border-l border-neutral-800/60
                          bg-neutral-950/80 min-h-0`,children:[ie.jsxs("div",{className:"px-4 py-3 border-b border-neutral-800/60 flex items-center justify-between flex-shrink-0",children:[ie.jsx("h2",{className:"text-sm font-semibold text-neutral-200",children:"Latest Reports"}),ie.jsxs("span",{className:"text-xs text-neutral-500",children:[r.length," items"]})]}),ie.jsxs("div",{className:"flex-1 overflow-y-auto overscroll-contain min-h-0",children:[r.length===0&&!s&&ie.jsx("div",{className:"p-4 text-sm text-neutral-500 text-center",children:a?"Could not load news data.":"No news items found."}),r.map((m,y)=>{const S=Sr[m.category];return ie.jsxs("button",{className:`w-full text-left px-4 py-3 border-b border-neutral-800/40 hover:bg-neutral-800/40 active:bg-neutral-800/60 transition-colors flex items-start gap-3 ${(d==null?void 0:d.url)===m.url?"bg-neutral-800/50":""}`,onClick:()=>c(m),children:[ie.jsx("div",{className:"mt-1 flex-shrink-0",children:ie.jsx("span",{className:"block w-2.5 h-2.5 rounded-full",style:{backgroundColor:S.css,boxShadow:`0 0 6px ${S.css}80`}})}),ie.jsxs("div",{className:"min-w-0 flex-1",children:[ie.jsx("p",{className:"text-sm text-neutral-200 leading-snug line-clamp-2",children:m.title}),ie.jsxs("div",{className:"flex items-center gap-1.5 mt-0.5",children:[ie.jsx("span",{className:"text-xs text-neutral-600",children:S.label}),ie.jsx("span",{className:"text-neutral-700",children:"·"}),ie.jsxs("p",{className:"text-xs text-neutral-500 flex items-center gap-1",children:[m.source,ie.jsx(bp,{className:"w-3 h-3 inline-block flex-shrink-0 text-neutral-600"})]})]})]})]},y)})]})]})]}),d&&ie.jsxs("div",{className:"fixed inset-0 z-40 flex justify-end",onClick:()=>c(null),children:[ie.jsx("div",{className:"absolute inset-0 bg-black/50 backdrop-blur-sm"}),ie.jsxs("div",{className:"relative w-full max-w-2xl bg-neutral-950 border-l border-neutral-800 h-full overflow-y-auto animate-slide-in",onClick:m=>m.stopPropagation(),children:[ie.jsxs("div",{className:"sticky top-0 bg-neutral-950/95 backdrop-blur-md border-b border-neutral-800 px-5 py-4 flex items-center justify-between z-10",children:[ie.jsxs("div",{className:"flex items-center gap-2",children:[ie.jsx("span",{className:"w-3 h-3 rounded-full",style:{backgroundColor:Sr[d.category].css}}),ie.jsx("span",{className:"text-sm font-medium text-neutral-300",children:Sr[d.category].label})]}),ie.jsx("button",{onClick:()=>c(null),className:"text-neutral-400 hover:text-white transition-colors p-1 rounded-lg hover:bg-neutral-800",children:ie.jsx(Dp,{className:"w-5 h-5"})})]}),ie.jsxs("div",{className:"p-5 space-y-4",children:[d.imageUrl?ie.jsx("img",{src:d.imageUrl,alt:"",className:"w-full h-64 object-cover rounded-lg border border-neutral-800 bg-neutral-900"}):ie.jsx("div",{className:"w-full h-32 rounded-lg border border-neutral-800 bg-neutral-900 flex items-center justify-center text-sm text-neutral-500",children:"Article image unavailable"}),ie.jsx("h2",{className:"text-2xl font-semibold leading-tight text-white",children:d.title}),ie.jsxs("div",{className:"flex items-center gap-3 text-xs text-neutral-400",children:[ie.jsx("span",{className:"px-2 py-1 rounded-md bg-neutral-800 text-neutral-300",children:d.source}),ie.jsx("span",{children:new Date(d.publishedAt).toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"})})]}),ie.jsxs("div",{className:"text-sm text-neutral-300",children:[ie.jsx("p",{className:"text-neutral-500 mb-1",children:"Location"}),ie.jsxs("div",{className:"flex items-center gap-2",children:[ie.jsxs("span",{children:[d.lat.toFixed(2),", ",d.lng.toFixed(2)]}),d.locationPrecision&&ie.jsx("span",{className:"px-2 py-0.5 rounded text-xs bg-neutral-800 text-neutral-400",children:d.locationPrecision}),d.locationConfidence!==void 0&&ie.jsxs("span",{className:"text-xs text-neutral-500",children:[Math.round(d.locationConfidence*100),"% confidence"]})]})]}),ie.jsxs("div",{className:"text-sm text-neutral-300",children:[ie.jsx("p",{className:"text-neutral-500 mb-1",children:"Summary"}),ie.jsx("p",{className:"leading-relaxed whitespace-pre-line",children:d.summary||"No summary was provided by the news source."})]}),ie.jsxs("div",{className:"space-y-2 pt-2",children:[ie.jsxs("a",{href:d.url,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center justify-center gap-2 w-full px-4 py-2.5 bg-blue-600 hover:bg-blue-500 active:bg-blue-700 transition-colors rounded-lg text-sm font-medium text-white",children:["Read full article",ie.jsx(bp,{className:"w-4 h-4"})]}),ie.jsxs("button",{onClick:()=>f(d),className:"inline-flex items-center justify-center gap-2 w-full px-4 py-2.5 border border-neutral-700 hover:border-neutral-500 transition-colors rounded-lg text-sm text-neutral-300 hover:text-white",children:[ie.jsx(Lp,{className:"w-4 h-4"}),"Search on Google"]})]})]})]})]})]})}uc.createRoot(document.getElementById("root")).render(ie.jsx(ev.StrictMode,{children:ie.jsx(rA,{})}));
