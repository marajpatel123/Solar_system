(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const u of a)if(u.type==="childList")for(const f of u.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&r(f)}).observe(document,{childList:!0,subtree:!0});function n(a){const u={};return a.integrity&&(u.integrity=a.integrity),a.referrerPolicy&&(u.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?u.credentials="include":a.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(a){if(a.ep)return;a.ep=!0;const u=n(a);fetch(a.href,u)}})();var dc={exports:{}},Do={},hc={exports:{}},ft={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xp;function W_(){if(xp)return ft;xp=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),f=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),v=Symbol.iterator;function x(U){return U===null||typeof U!="object"?null:(U=v&&U[v]||U["@@iterator"],typeof U=="function"?U:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,R={};function y(U,ne,Ie){this.props=U,this.context=ne,this.refs=R,this.updater=Ie||S}y.prototype.isReactComponent={},y.prototype.setState=function(U,ne){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,ne,"setState")},y.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function g(){}g.prototype=y.prototype;function I(U,ne,Ie){this.props=U,this.context=ne,this.refs=R,this.updater=Ie||S}var L=I.prototype=new g;L.constructor=I,w(L,y.prototype),L.isPureReactComponent=!0;var C=Array.isArray,W=Object.prototype.hasOwnProperty,k={current:null},F={key:!0,ref:!0,__self:!0,__source:!0};function Y(U,ne,Ie){var Q,de={},Se=null,ve=null;if(ne!=null)for(Q in ne.ref!==void 0&&(ve=ne.ref),ne.key!==void 0&&(Se=""+ne.key),ne)W.call(ne,Q)&&!F.hasOwnProperty(Q)&&(de[Q]=ne[Q]);var Te=arguments.length-2;if(Te===1)de.children=Ie;else if(1<Te){for(var Ue=Array(Te),Ze=0;Ze<Te;Ze++)Ue[Ze]=arguments[Ze+2];de.children=Ue}if(U&&U.defaultProps)for(Q in Te=U.defaultProps,Te)de[Q]===void 0&&(de[Q]=Te[Q]);return{$$typeof:s,type:U,key:Se,ref:ve,props:de,_owner:k.current}}function P(U,ne){return{$$typeof:s,type:U.type,key:ne,ref:U.ref,props:U.props,_owner:U._owner}}function A(U){return typeof U=="object"&&U!==null&&U.$$typeof===s}function z(U){var ne={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(Ie){return ne[Ie]})}var oe=/\/+/g;function te(U,ne){return typeof U=="object"&&U!==null&&U.key!=null?z(""+U.key):ne.toString(36)}function ce(U,ne,Ie,Q,de){var Se=typeof U;(Se==="undefined"||Se==="boolean")&&(U=null);var ve=!1;if(U===null)ve=!0;else switch(Se){case"string":case"number":ve=!0;break;case"object":switch(U.$$typeof){case s:case e:ve=!0}}if(ve)return ve=U,de=de(ve),U=Q===""?"."+te(ve,0):Q,C(de)?(Ie="",U!=null&&(Ie=U.replace(oe,"$&/")+"/"),ce(de,ne,Ie,"",function(Ze){return Ze})):de!=null&&(A(de)&&(de=P(de,Ie+(!de.key||ve&&ve.key===de.key?"":(""+de.key).replace(oe,"$&/")+"/")+U)),ne.push(de)),1;if(ve=0,Q=Q===""?".":Q+":",C(U))for(var Te=0;Te<U.length;Te++){Se=U[Te];var Ue=Q+te(Se,Te);ve+=ce(Se,ne,Ie,Ue,de)}else if(Ue=x(U),typeof Ue=="function")for(U=Ue.call(U),Te=0;!(Se=U.next()).done;)Se=Se.value,Ue=Q+te(Se,Te++),ve+=ce(Se,ne,Ie,Ue,de);else if(Se==="object")throw ne=String(U),Error("Objects are not valid as a React child (found: "+(ne==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":ne)+"). If you meant to render a collection of children, use an array instead.");return ve}function he(U,ne,Ie){if(U==null)return U;var Q=[],de=0;return ce(U,Q,"","",function(Se){return ne.call(Ie,Se,de++)}),Q}function se(U){if(U._status===-1){var ne=U._result;ne=ne(),ne.then(function(Ie){(U._status===0||U._status===-1)&&(U._status=1,U._result=Ie)},function(Ie){(U._status===0||U._status===-1)&&(U._status=2,U._result=Ie)}),U._status===-1&&(U._status=0,U._result=ne)}if(U._status===1)return U._result.default;throw U._result}var le={current:null},B={transition:null},ae={ReactCurrentDispatcher:le,ReactCurrentBatchConfig:B,ReactCurrentOwner:k};function re(){throw Error("act(...) is not supported in production builds of React.")}return ft.Children={map:he,forEach:function(U,ne,Ie){he(U,function(){ne.apply(this,arguments)},Ie)},count:function(U){var ne=0;return he(U,function(){ne++}),ne},toArray:function(U){return he(U,function(ne){return ne})||[]},only:function(U){if(!A(U))throw Error("React.Children.only expected to receive a single React element child.");return U}},ft.Component=y,ft.Fragment=n,ft.Profiler=a,ft.PureComponent=I,ft.StrictMode=r,ft.Suspense=p,ft.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ae,ft.act=re,ft.cloneElement=function(U,ne,Ie){if(U==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+U+".");var Q=w({},U.props),de=U.key,Se=U.ref,ve=U._owner;if(ne!=null){if(ne.ref!==void 0&&(Se=ne.ref,ve=k.current),ne.key!==void 0&&(de=""+ne.key),U.type&&U.type.defaultProps)var Te=U.type.defaultProps;for(Ue in ne)W.call(ne,Ue)&&!F.hasOwnProperty(Ue)&&(Q[Ue]=ne[Ue]===void 0&&Te!==void 0?Te[Ue]:ne[Ue])}var Ue=arguments.length-2;if(Ue===1)Q.children=Ie;else if(1<Ue){Te=Array(Ue);for(var Ze=0;Ze<Ue;Ze++)Te[Ze]=arguments[Ze+2];Q.children=Te}return{$$typeof:s,type:U.type,key:de,ref:Se,props:Q,_owner:ve}},ft.createContext=function(U){return U={$$typeof:f,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},U.Provider={$$typeof:u,_context:U},U.Consumer=U},ft.createElement=Y,ft.createFactory=function(U){var ne=Y.bind(null,U);return ne.type=U,ne},ft.createRef=function(){return{current:null}},ft.forwardRef=function(U){return{$$typeof:d,render:U}},ft.isValidElement=A,ft.lazy=function(U){return{$$typeof:_,_payload:{_status:-1,_result:U},_init:se}},ft.memo=function(U,ne){return{$$typeof:m,type:U,compare:ne===void 0?null:ne}},ft.startTransition=function(U){var ne=B.transition;B.transition={};try{U()}finally{B.transition=ne}},ft.unstable_act=re,ft.useCallback=function(U,ne){return le.current.useCallback(U,ne)},ft.useContext=function(U){return le.current.useContext(U)},ft.useDebugValue=function(){},ft.useDeferredValue=function(U){return le.current.useDeferredValue(U)},ft.useEffect=function(U,ne){return le.current.useEffect(U,ne)},ft.useId=function(){return le.current.useId()},ft.useImperativeHandle=function(U,ne,Ie){return le.current.useImperativeHandle(U,ne,Ie)},ft.useInsertionEffect=function(U,ne){return le.current.useInsertionEffect(U,ne)},ft.useLayoutEffect=function(U,ne){return le.current.useLayoutEffect(U,ne)},ft.useMemo=function(U,ne){return le.current.useMemo(U,ne)},ft.useReducer=function(U,ne,Ie){return le.current.useReducer(U,ne,Ie)},ft.useRef=function(U){return le.current.useRef(U)},ft.useState=function(U){return le.current.useState(U)},ft.useSyncExternalStore=function(U,ne,Ie){return le.current.useSyncExternalStore(U,ne,Ie)},ft.useTransition=function(){return le.current.useTransition()},ft.version="18.3.1",ft}var yp;function Ff(){return yp||(yp=1,hc.exports=W_()),hc.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sp;function X_(){if(Sp)return Do;Sp=1;var s=Ff(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function f(d,p,m){var _,v={},x=null,S=null;m!==void 0&&(x=""+m),p.key!==void 0&&(x=""+p.key),p.ref!==void 0&&(S=p.ref);for(_ in p)r.call(p,_)&&!u.hasOwnProperty(_)&&(v[_]=p[_]);if(d&&d.defaultProps)for(_ in p=d.defaultProps,p)v[_]===void 0&&(v[_]=p[_]);return{$$typeof:e,type:d,key:x,ref:S,props:v,_owner:a.current}}return Do.Fragment=n,Do.jsx=f,Do.jsxs=f,Do}var Mp;function Y_(){return Mp||(Mp=1,dc.exports=X_()),dc.exports}var qc=Y_(),Lm=Ff(),el={},pc={exports:{}},Dn={},mc={exports:{}},gc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ep;function j_(){return Ep||(Ep=1,function(s){function e(B,ae){var re=B.length;B.push(ae);e:for(;0<re;){var U=re-1>>>1,ne=B[U];if(0<a(ne,ae))B[U]=ae,B[re]=ne,re=U;else break e}}function n(B){return B.length===0?null:B[0]}function r(B){if(B.length===0)return null;var ae=B[0],re=B.pop();if(re!==ae){B[0]=re;e:for(var U=0,ne=B.length,Ie=ne>>>1;U<Ie;){var Q=2*(U+1)-1,de=B[Q],Se=Q+1,ve=B[Se];if(0>a(de,re))Se<ne&&0>a(ve,de)?(B[U]=ve,B[Se]=re,U=Se):(B[U]=de,B[Q]=re,U=Q);else if(Se<ne&&0>a(ve,re))B[U]=ve,B[Se]=re,U=Se;else break e}}return ae}function a(B,ae){var re=B.sortIndex-ae.sortIndex;return re!==0?re:B.id-ae.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;s.unstable_now=function(){return u.now()}}else{var f=Date,d=f.now();s.unstable_now=function(){return f.now()-d}}var p=[],m=[],_=1,v=null,x=3,S=!1,w=!1,R=!1,y=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,I=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function L(B){for(var ae=n(m);ae!==null;){if(ae.callback===null)r(m);else if(ae.startTime<=B)r(m),ae.sortIndex=ae.expirationTime,e(p,ae);else break;ae=n(m)}}function C(B){if(R=!1,L(B),!w)if(n(p)!==null)w=!0,se(W);else{var ae=n(m);ae!==null&&le(C,ae.startTime-B)}}function W(B,ae){w=!1,R&&(R=!1,g(Y),Y=-1),S=!0;var re=x;try{for(L(ae),v=n(p);v!==null&&(!(v.expirationTime>ae)||B&&!z());){var U=v.callback;if(typeof U=="function"){v.callback=null,x=v.priorityLevel;var ne=U(v.expirationTime<=ae);ae=s.unstable_now(),typeof ne=="function"?v.callback=ne:v===n(p)&&r(p),L(ae)}else r(p);v=n(p)}if(v!==null)var Ie=!0;else{var Q=n(m);Q!==null&&le(C,Q.startTime-ae),Ie=!1}return Ie}finally{v=null,x=re,S=!1}}var k=!1,F=null,Y=-1,P=5,A=-1;function z(){return!(s.unstable_now()-A<P)}function oe(){if(F!==null){var B=s.unstable_now();A=B;var ae=!0;try{ae=F(!0,B)}finally{ae?te():(k=!1,F=null)}}else k=!1}var te;if(typeof I=="function")te=function(){I(oe)};else if(typeof MessageChannel<"u"){var ce=new MessageChannel,he=ce.port2;ce.port1.onmessage=oe,te=function(){he.postMessage(null)}}else te=function(){y(oe,0)};function se(B){F=B,k||(k=!0,te())}function le(B,ae){Y=y(function(){B(s.unstable_now())},ae)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(B){B.callback=null},s.unstable_continueExecution=function(){w||S||(w=!0,se(W))},s.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<B?Math.floor(1e3/B):5},s.unstable_getCurrentPriorityLevel=function(){return x},s.unstable_getFirstCallbackNode=function(){return n(p)},s.unstable_next=function(B){switch(x){case 1:case 2:case 3:var ae=3;break;default:ae=x}var re=x;x=ae;try{return B()}finally{x=re}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(B,ae){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var re=x;x=B;try{return ae()}finally{x=re}},s.unstable_scheduleCallback=function(B,ae,re){var U=s.unstable_now();switch(typeof re=="object"&&re!==null?(re=re.delay,re=typeof re=="number"&&0<re?U+re:U):re=U,B){case 1:var ne=-1;break;case 2:ne=250;break;case 5:ne=1073741823;break;case 4:ne=1e4;break;default:ne=5e3}return ne=re+ne,B={id:_++,callback:ae,priorityLevel:B,startTime:re,expirationTime:ne,sortIndex:-1},re>U?(B.sortIndex=re,e(m,B),n(p)===null&&B===n(m)&&(R?(g(Y),Y=-1):R=!0,le(C,re-U))):(B.sortIndex=ne,e(p,B),w||S||(w=!0,se(W))),B},s.unstable_shouldYield=z,s.unstable_wrapCallback=function(B){var ae=x;return function(){var re=x;x=ae;try{return B.apply(this,arguments)}finally{x=re}}}}(gc)),gc}var Tp;function q_(){return Tp||(Tp=1,mc.exports=j_()),mc.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wp;function K_(){if(wp)return Dn;wp=1;var s=Ff(),e=q_();function n(t){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+t,o=1;o<arguments.length;o++)i+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,a={};function u(t,i){f(t,i),f(t+"Capture",i)}function f(t,i){for(a[t]=i,t=0;t<i.length;t++)r.add(i[t])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_={},v={};function x(t){return p.call(v,t)?!0:p.call(_,t)?!1:m.test(t)?v[t]=!0:(_[t]=!0,!1)}function S(t,i,o,l){if(o!==null&&o.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return l?!1:o!==null?!o.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function w(t,i,o,l){if(i===null||typeof i>"u"||S(t,i,o,l))return!0;if(l)return!1;if(o!==null)switch(o.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function R(t,i,o,l,c,h,M){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=l,this.attributeNamespace=c,this.mustUseProperty=o,this.propertyName=t,this.type=i,this.sanitizeURL=h,this.removeEmptyString=M}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){y[t]=new R(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var i=t[0];y[i]=new R(i,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){y[t]=new R(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){y[t]=new R(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){y[t]=new R(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){y[t]=new R(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){y[t]=new R(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){y[t]=new R(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){y[t]=new R(t,5,!1,t.toLowerCase(),null,!1,!1)});var g=/[\-:]([a-z])/g;function I(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var i=t.replace(g,I);y[i]=new R(i,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var i=t.replace(g,I);y[i]=new R(i,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var i=t.replace(g,I);y[i]=new R(i,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){y[t]=new R(t,1,!1,t.toLowerCase(),null,!1,!1)}),y.xlinkHref=new R("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){y[t]=new R(t,1,!1,t.toLowerCase(),null,!0,!0)});function L(t,i,o,l){var c=y.hasOwnProperty(i)?y[i]:null;(c!==null?c.type!==0:l||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(w(i,o,c,l)&&(o=null),l||c===null?x(i)&&(o===null?t.removeAttribute(i):t.setAttribute(i,""+o)):c.mustUseProperty?t[c.propertyName]=o===null?c.type===3?!1:"":o:(i=c.attributeName,l=c.attributeNamespace,o===null?t.removeAttribute(i):(c=c.type,o=c===3||c===4&&o===!0?"":""+o,l?t.setAttributeNS(l,i,o):t.setAttribute(i,o))))}var C=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,W=Symbol.for("react.element"),k=Symbol.for("react.portal"),F=Symbol.for("react.fragment"),Y=Symbol.for("react.strict_mode"),P=Symbol.for("react.profiler"),A=Symbol.for("react.provider"),z=Symbol.for("react.context"),oe=Symbol.for("react.forward_ref"),te=Symbol.for("react.suspense"),ce=Symbol.for("react.suspense_list"),he=Symbol.for("react.memo"),se=Symbol.for("react.lazy"),le=Symbol.for("react.offscreen"),B=Symbol.iterator;function ae(t){return t===null||typeof t!="object"?null:(t=B&&t[B]||t["@@iterator"],typeof t=="function"?t:null)}var re=Object.assign,U;function ne(t){if(U===void 0)try{throw Error()}catch(o){var i=o.stack.trim().match(/\n( *(at )?)/);U=i&&i[1]||""}return`
`+U+t}var Ie=!1;function Q(t,i){if(!t||Ie)return"";Ie=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(ee){var l=ee}Reflect.construct(t,[],i)}else{try{i.call()}catch(ee){l=ee}t.call(i.prototype)}else{try{throw Error()}catch(ee){l=ee}t()}}catch(ee){if(ee&&l&&typeof ee.stack=="string"){for(var c=ee.stack.split(`
`),h=l.stack.split(`
`),M=c.length-1,D=h.length-1;1<=M&&0<=D&&c[M]!==h[D];)D--;for(;1<=M&&0<=D;M--,D--)if(c[M]!==h[D]){if(M!==1||D!==1)do if(M--,D--,0>D||c[M]!==h[D]){var N=`
`+c[M].replace(" at new "," at ");return t.displayName&&N.includes("<anonymous>")&&(N=N.replace("<anonymous>",t.displayName)),N}while(1<=M&&0<=D);break}}}finally{Ie=!1,Error.prepareStackTrace=o}return(t=t?t.displayName||t.name:"")?ne(t):""}function de(t){switch(t.tag){case 5:return ne(t.type);case 16:return ne("Lazy");case 13:return ne("Suspense");case 19:return ne("SuspenseList");case 0:case 2:case 15:return t=Q(t.type,!1),t;case 11:return t=Q(t.type.render,!1),t;case 1:return t=Q(t.type,!0),t;default:return""}}function Se(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case F:return"Fragment";case k:return"Portal";case P:return"Profiler";case Y:return"StrictMode";case te:return"Suspense";case ce:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case z:return(t.displayName||"Context")+".Consumer";case A:return(t._context.displayName||"Context")+".Provider";case oe:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case he:return i=t.displayName||null,i!==null?i:Se(t.type)||"Memo";case se:i=t._payload,t=t._init;try{return Se(t(i))}catch{}}return null}function ve(t){var i=t.type;switch(t.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=i.render,t=t.displayName||t.name||"",i.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Se(i);case 8:return i===Y?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function Te(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ue(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Ze(t){var i=Ue(t)?"checked":"value",o=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),l=""+t[i];if(!t.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var c=o.get,h=o.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return c.call(this)},set:function(M){l=""+M,h.call(this,M)}}),Object.defineProperty(t,i,{enumerable:o.enumerable}),{getValue:function(){return l},setValue:function(M){l=""+M},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function At(t){t._valueTracker||(t._valueTracker=Ze(t))}function pt(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var o=i.getValue(),l="";return t&&(l=Ue(t)?t.checked?"true":"false":t.value),t=l,t!==o?(i.setValue(t),!0):!1}function Dt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function O(t,i){var o=i.checked;return re({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??t._wrapperState.initialChecked})}function _n(t,i){var o=i.defaultValue==null?"":i.defaultValue,l=i.checked!=null?i.checked:i.defaultChecked;o=Te(i.value!=null?i.value:o),t._wrapperState={initialChecked:l,initialValue:o,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function ht(t,i){i=i.checked,i!=null&&L(t,"checked",i,!1)}function ut(t,i){ht(t,i);var o=Te(i.value),l=i.type;if(o!=null)l==="number"?(o===0&&t.value===""||t.value!=o)&&(t.value=""+o):t.value!==""+o&&(t.value=""+o);else if(l==="submit"||l==="reset"){t.removeAttribute("value");return}i.hasOwnProperty("value")?wt(t,i.type,o):i.hasOwnProperty("defaultValue")&&wt(t,i.type,Te(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(t.defaultChecked=!!i.defaultChecked)}function Ye(t,i,o){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var l=i.type;if(!(l!=="submit"&&l!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+t._wrapperState.initialValue,o||i===t.value||(t.value=i),t.defaultValue=i}o=t.name,o!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,o!==""&&(t.name=o)}function wt(t,i,o){(i!=="number"||Dt(t.ownerDocument)!==t)&&(o==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+o&&(t.defaultValue=""+o))}var Ge=Array.isArray;function b(t,i,o,l){if(t=t.options,i){i={};for(var c=0;c<o.length;c++)i["$"+o[c]]=!0;for(o=0;o<t.length;o++)c=i.hasOwnProperty("$"+t[o].value),t[o].selected!==c&&(t[o].selected=c),c&&l&&(t[o].defaultSelected=!0)}else{for(o=""+Te(o),i=null,c=0;c<t.length;c++){if(t[c].value===o){t[c].selected=!0,l&&(t[c].defaultSelected=!0);return}i!==null||t[c].disabled||(i=t[c])}i!==null&&(i.selected=!0)}}function E(t,i){if(i.dangerouslySetInnerHTML!=null)throw Error(n(91));return re({},i,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Z(t,i){var o=i.value;if(o==null){if(o=i.children,i=i.defaultValue,o!=null){if(i!=null)throw Error(n(92));if(Ge(o)){if(1<o.length)throw Error(n(93));o=o[0]}i=o}i==null&&(i=""),o=i}t._wrapperState={initialValue:Te(o)}}function pe(t,i){var o=Te(i.value),l=Te(i.defaultValue);o!=null&&(o=""+o,o!==t.value&&(t.value=o),i.defaultValue==null&&t.defaultValue!==o&&(t.defaultValue=o)),l!=null&&(t.defaultValue=""+l)}function ge(t){var i=t.textContent;i===t._wrapperState.initialValue&&i!==""&&i!==null&&(t.value=i)}function ue(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function We(t,i){return t==null||t==="http://www.w3.org/1999/xhtml"?ue(i):t==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var we,Ne=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,o,l,c){MSApp.execUnsafeLocalFunction(function(){return t(i,o,l,c)})}:t}(function(t,i){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=i;else{for(we=we||document.createElement("div"),we.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=we.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;i.firstChild;)t.appendChild(i.firstChild)}});function lt(t,i){if(i){var o=t.firstChild;if(o&&o===t.lastChild&&o.nodeType===3){o.nodeValue=i;return}}t.textContent=i}var Me={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Oe=["Webkit","ms","Moz","O"];Object.keys(Me).forEach(function(t){Oe.forEach(function(i){i=i+t.charAt(0).toUpperCase()+t.substring(1),Me[i]=Me[t]})});function qe(t,i,o){return i==null||typeof i=="boolean"||i===""?"":o||typeof i!="number"||i===0||Me.hasOwnProperty(t)&&Me[t]?(""+i).trim():i+"px"}function Je(t,i){t=t.style;for(var o in i)if(i.hasOwnProperty(o)){var l=o.indexOf("--")===0,c=qe(o,i[o],l);o==="float"&&(o="cssFloat"),l?t.setProperty(o,c):t[o]=c}}var ke=re({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ct(t,i){if(i){if(ke[t]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(n(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(n(61))}if(i.style!=null&&typeof i.style!="object")throw Error(n(62))}}function nt(t,i){if(t.indexOf("-")===-1)return typeof i.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Tt=null;function V(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ae=null,ie=null,fe=null;function be(t){if(t=go(t)){if(typeof Ae!="function")throw Error(n(280));var i=t.stateNode;i&&(i=ma(i),Ae(t.stateNode,t.type,i))}}function Pe(t){ie?fe?fe.push(t):fe=[t]:ie=t}function it(){if(ie){var t=ie,i=fe;if(fe=ie=null,be(t),i)for(t=0;t<i.length;t++)be(i[t])}}function Ut(t,i){return t(i)}function jt(){}var vt=!1;function wn(t,i,o){if(vt)return t(i,o);vt=!0;try{return Ut(t,i,o)}finally{vt=!1,(ie!==null||fe!==null)&&(jt(),it())}}function vn(t,i){var o=t.stateNode;if(o===null)return null;var l=ma(o);if(l===null)return null;o=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(o&&typeof o!="function")throw Error(n(231,i,typeof o));return o}var Qr=!1;if(d)try{var Vi={};Object.defineProperty(Vi,"passive",{get:function(){Qr=!0}}),window.addEventListener("test",Vi,Vi),window.removeEventListener("test",Vi,Vi)}catch{Qr=!1}function yi(t,i,o,l,c,h,M,D,N){var ee=Array.prototype.slice.call(arguments,3);try{i.apply(o,ee)}catch(_e){this.onError(_e)}}var Si=!1,Er=null,Tr=!1,Gi=null,jo={onError:function(t){Si=!0,Er=t}};function Jr(t,i,o,l,c,h,M,D,N){Si=!1,Er=null,yi.apply(jo,arguments)}function qo(t,i,o,l,c,h,M,D,N){if(Jr.apply(this,arguments),Si){if(Si){var ee=Er;Si=!1,Er=null}else throw Error(n(198));Tr||(Tr=!0,Gi=ee)}}function li(t){var i=t,o=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,i.flags&4098&&(o=i.return),t=i.return;while(t)}return i.tag===3?o:null}function Ko(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function $o(t){if(li(t)!==t)throw Error(n(188))}function Nl(t){var i=t.alternate;if(!i){if(i=li(t),i===null)throw Error(n(188));return i!==t?null:t}for(var o=t,l=i;;){var c=o.return;if(c===null)break;var h=c.alternate;if(h===null){if(l=c.return,l!==null){o=l;continue}break}if(c.child===h.child){for(h=c.child;h;){if(h===o)return $o(c),t;if(h===l)return $o(c),i;h=h.sibling}throw Error(n(188))}if(o.return!==l.return)o=c,l=h;else{for(var M=!1,D=c.child;D;){if(D===o){M=!0,o=c,l=h;break}if(D===l){M=!0,l=c,o=h;break}D=D.sibling}if(!M){for(D=h.child;D;){if(D===o){M=!0,o=h,l=c;break}if(D===l){M=!0,l=h,o=c;break}D=D.sibling}if(!M)throw Error(n(189))}}if(o.alternate!==l)throw Error(n(190))}if(o.tag!==3)throw Error(n(188));return o.stateNode.current===o?t:i}function Zo(t){return t=Nl(t),t!==null?Qo(t):null}function Qo(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var i=Qo(t);if(i!==null)return i;t=t.sibling}return null}var Jo=e.unstable_scheduleCallback,T=e.unstable_cancelCallback,G=e.unstable_shouldYield,J=e.unstable_requestPaint,K=e.unstable_now,X=e.unstable_getCurrentPriorityLevel,ye=e.unstable_ImmediatePriority,Re=e.unstable_UserBlockingPriority,De=e.unstable_NormalPriority,Be=e.unstable_LowPriority,et=e.unstable_IdlePriority,Qe=null,He=null;function gt(t){if(He&&typeof He.onCommitFiberRoot=="function")try{He.onCommitFiberRoot(Qe,t,void 0,(t.current.flags&128)===128)}catch{}}var rt=Math.clz32?Math.clz32:_t,Ht=Math.log,Ft=Math.LN2;function _t(t){return t>>>=0,t===0?32:31-(Ht(t)/Ft|0)|0}var je=64,Vt=4194304;function mt(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function un(t,i){var o=t.pendingLanes;if(o===0)return 0;var l=0,c=t.suspendedLanes,h=t.pingedLanes,M=o&268435455;if(M!==0){var D=M&~c;D!==0?l=mt(D):(h&=M,h!==0&&(l=mt(h)))}else M=o&~c,M!==0?l=mt(M):h!==0&&(l=mt(h));if(l===0)return 0;if(i!==0&&i!==l&&!(i&c)&&(c=l&-l,h=i&-i,c>=h||c===16&&(h&4194240)!==0))return i;if(l&4&&(l|=o&16),i=t.entangledLanes,i!==0)for(t=t.entanglements,i&=l;0<i;)o=31-rt(i),c=1<<o,l|=t[o],i&=~c;return l}function Wi(t,i){switch(t){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function xn(t,i){for(var o=t.suspendedLanes,l=t.pingedLanes,c=t.expirationTimes,h=t.pendingLanes;0<h;){var M=31-rt(h),D=1<<M,N=c[M];N===-1?(!(D&o)||D&l)&&(c[M]=Wi(D,i)):N<=i&&(t.expiredLanes|=D),h&=~D}}function Mi(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function bt(){var t=je;return je<<=1,!(je&4194240)&&(je=64),t}function cn(t){for(var i=[],o=0;31>o;o++)i.push(t);return i}function Jt(t,i,o){t.pendingLanes|=i,i!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,i=31-rt(i),t[i]=o}function on(t,i){var o=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;var l=t.eventTimes;for(t=t.expirationTimes;0<o;){var c=31-rt(o),h=1<<c;i[c]=0,l[c]=-1,t[c]=-1,o&=~h}}function en(t,i){var o=t.entangledLanes|=i;for(t=t.entanglements;o;){var l=31-rt(o),c=1<<l;c&i|t[l]&i&&(t[l]|=i),o&=~c}}var xt=0;function ui(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Qf,Fl,Jf,ed,td,Ol=!1,ea=[],Xi=null,Yi=null,ji=null,Js=new Map,eo=new Map,qi=[],hg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function nd(t,i){switch(t){case"focusin":case"focusout":Xi=null;break;case"dragenter":case"dragleave":Yi=null;break;case"mouseover":case"mouseout":ji=null;break;case"pointerover":case"pointerout":Js.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":eo.delete(i.pointerId)}}function to(t,i,o,l,c,h){return t===null||t.nativeEvent!==h?(t={blockedOn:i,domEventName:o,eventSystemFlags:l,nativeEvent:h,targetContainers:[c]},i!==null&&(i=go(i),i!==null&&Fl(i)),t):(t.eventSystemFlags|=l,i=t.targetContainers,c!==null&&i.indexOf(c)===-1&&i.push(c),t)}function pg(t,i,o,l,c){switch(i){case"focusin":return Xi=to(Xi,t,i,o,l,c),!0;case"dragenter":return Yi=to(Yi,t,i,o,l,c),!0;case"mouseover":return ji=to(ji,t,i,o,l,c),!0;case"pointerover":var h=c.pointerId;return Js.set(h,to(Js.get(h)||null,t,i,o,l,c)),!0;case"gotpointercapture":return h=c.pointerId,eo.set(h,to(eo.get(h)||null,t,i,o,l,c)),!0}return!1}function id(t){var i=wr(t.target);if(i!==null){var o=li(i);if(o!==null){if(i=o.tag,i===13){if(i=Ko(o),i!==null){t.blockedOn=i,td(t.priority,function(){Jf(o)});return}}else if(i===3&&o.stateNode.current.memoizedState.isDehydrated){t.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ta(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var o=Bl(t.domEventName,t.eventSystemFlags,i[0],t.nativeEvent);if(o===null){o=t.nativeEvent;var l=new o.constructor(o.type,o);Tt=l,o.target.dispatchEvent(l),Tt=null}else return i=go(o),i!==null&&Fl(i),t.blockedOn=o,!1;i.shift()}return!0}function rd(t,i,o){ta(t)&&o.delete(i)}function mg(){Ol=!1,Xi!==null&&ta(Xi)&&(Xi=null),Yi!==null&&ta(Yi)&&(Yi=null),ji!==null&&ta(ji)&&(ji=null),Js.forEach(rd),eo.forEach(rd)}function no(t,i){t.blockedOn===i&&(t.blockedOn=null,Ol||(Ol=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,mg)))}function io(t){function i(c){return no(c,t)}if(0<ea.length){no(ea[0],t);for(var o=1;o<ea.length;o++){var l=ea[o];l.blockedOn===t&&(l.blockedOn=null)}}for(Xi!==null&&no(Xi,t),Yi!==null&&no(Yi,t),ji!==null&&no(ji,t),Js.forEach(i),eo.forEach(i),o=0;o<qi.length;o++)l=qi[o],l.blockedOn===t&&(l.blockedOn=null);for(;0<qi.length&&(o=qi[0],o.blockedOn===null);)id(o),o.blockedOn===null&&qi.shift()}var es=C.ReactCurrentBatchConfig,na=!0;function gg(t,i,o,l){var c=xt,h=es.transition;es.transition=null;try{xt=1,kl(t,i,o,l)}finally{xt=c,es.transition=h}}function _g(t,i,o,l){var c=xt,h=es.transition;es.transition=null;try{xt=4,kl(t,i,o,l)}finally{xt=c,es.transition=h}}function kl(t,i,o,l){if(na){var c=Bl(t,i,o,l);if(c===null)nu(t,i,l,ia,o),nd(t,l);else if(pg(c,t,i,o,l))l.stopPropagation();else if(nd(t,l),i&4&&-1<hg.indexOf(t)){for(;c!==null;){var h=go(c);if(h!==null&&Qf(h),h=Bl(t,i,o,l),h===null&&nu(t,i,l,ia,o),h===c)break;c=h}c!==null&&l.stopPropagation()}else nu(t,i,l,null,o)}}var ia=null;function Bl(t,i,o,l){if(ia=null,t=V(l),t=wr(t),t!==null)if(i=li(t),i===null)t=null;else if(o=i.tag,o===13){if(t=Ko(i),t!==null)return t;t=null}else if(o===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null);return ia=t,null}function sd(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(X()){case ye:return 1;case Re:return 4;case De:case Be:return 16;case et:return 536870912;default:return 16}default:return 16}}var Ki=null,zl=null,ra=null;function od(){if(ra)return ra;var t,i=zl,o=i.length,l,c="value"in Ki?Ki.value:Ki.textContent,h=c.length;for(t=0;t<o&&i[t]===c[t];t++);var M=o-t;for(l=1;l<=M&&i[o-l]===c[h-l];l++);return ra=c.slice(t,1<l?1-l:void 0)}function sa(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function oa(){return!0}function ad(){return!1}function Nn(t){function i(o,l,c,h,M){this._reactName=o,this._targetInst=c,this.type=l,this.nativeEvent=h,this.target=M,this.currentTarget=null;for(var D in t)t.hasOwnProperty(D)&&(o=t[D],this[D]=o?o(h):h[D]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?oa:ad,this.isPropagationStopped=ad,this}return re(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=oa)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=oa)},persist:function(){},isPersistent:oa}),i}var ts={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Hl=Nn(ts),ro=re({},ts,{view:0,detail:0}),vg=Nn(ro),Vl,Gl,so,aa=re({},ro,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Xl,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==so&&(so&&t.type==="mousemove"?(Vl=t.screenX-so.screenX,Gl=t.screenY-so.screenY):Gl=Vl=0,so=t),Vl)},movementY:function(t){return"movementY"in t?t.movementY:Gl}}),ld=Nn(aa),xg=re({},aa,{dataTransfer:0}),yg=Nn(xg),Sg=re({},ro,{relatedTarget:0}),Wl=Nn(Sg),Mg=re({},ts,{animationName:0,elapsedTime:0,pseudoElement:0}),Eg=Nn(Mg),Tg=re({},ts,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),wg=Nn(Tg),Ag=re({},ts,{data:0}),ud=Nn(Ag),Rg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Cg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Pg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function bg(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=Pg[t])?!!i[t]:!1}function Xl(){return bg}var Dg=re({},ro,{key:function(t){if(t.key){var i=Rg[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=sa(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Cg[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Xl,charCode:function(t){return t.type==="keypress"?sa(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?sa(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Lg=Nn(Dg),Ug=re({},aa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),cd=Nn(Ug),Ig=re({},ro,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Xl}),Ng=Nn(Ig),Fg=re({},ts,{propertyName:0,elapsedTime:0,pseudoElement:0}),Og=Nn(Fg),kg=re({},aa,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Bg=Nn(kg),zg=[9,13,27,32],Yl=d&&"CompositionEvent"in window,oo=null;d&&"documentMode"in document&&(oo=document.documentMode);var Hg=d&&"TextEvent"in window&&!oo,fd=d&&(!Yl||oo&&8<oo&&11>=oo),dd=" ",hd=!1;function pd(t,i){switch(t){case"keyup":return zg.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function md(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ns=!1;function Vg(t,i){switch(t){case"compositionend":return md(i);case"keypress":return i.which!==32?null:(hd=!0,dd);case"textInput":return t=i.data,t===dd&&hd?null:t;default:return null}}function Gg(t,i){if(ns)return t==="compositionend"||!Yl&&pd(t,i)?(t=od(),ra=zl=Ki=null,ns=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return fd&&i.locale!=="ko"?null:i.data;default:return null}}var Wg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function gd(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!Wg[t.type]:i==="textarea"}function _d(t,i,o,l){Pe(l),i=da(i,"onChange"),0<i.length&&(o=new Hl("onChange","change",null,o,l),t.push({event:o,listeners:i}))}var ao=null,lo=null;function Xg(t){Nd(t,0)}function la(t){var i=as(t);if(pt(i))return t}function Yg(t,i){if(t==="change")return i}var vd=!1;if(d){var jl;if(d){var ql="oninput"in document;if(!ql){var xd=document.createElement("div");xd.setAttribute("oninput","return;"),ql=typeof xd.oninput=="function"}jl=ql}else jl=!1;vd=jl&&(!document.documentMode||9<document.documentMode)}function yd(){ao&&(ao.detachEvent("onpropertychange",Sd),lo=ao=null)}function Sd(t){if(t.propertyName==="value"&&la(lo)){var i=[];_d(i,lo,t,V(t)),wn(Xg,i)}}function jg(t,i,o){t==="focusin"?(yd(),ao=i,lo=o,ao.attachEvent("onpropertychange",Sd)):t==="focusout"&&yd()}function qg(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return la(lo)}function Kg(t,i){if(t==="click")return la(i)}function $g(t,i){if(t==="input"||t==="change")return la(i)}function Zg(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var $n=typeof Object.is=="function"?Object.is:Zg;function uo(t,i){if($n(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var o=Object.keys(t),l=Object.keys(i);if(o.length!==l.length)return!1;for(l=0;l<o.length;l++){var c=o[l];if(!p.call(i,c)||!$n(t[c],i[c]))return!1}return!0}function Md(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Ed(t,i){var o=Md(t);t=0;for(var l;o;){if(o.nodeType===3){if(l=t+o.textContent.length,t<=i&&l>=i)return{node:o,offset:i-t};t=l}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=Md(o)}}function Td(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?Td(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function wd(){for(var t=window,i=Dt();i instanceof t.HTMLIFrameElement;){try{var o=typeof i.contentWindow.location.href=="string"}catch{o=!1}if(o)t=i.contentWindow;else break;i=Dt(t.document)}return i}function Kl(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}function Qg(t){var i=wd(),o=t.focusedElem,l=t.selectionRange;if(i!==o&&o&&o.ownerDocument&&Td(o.ownerDocument.documentElement,o)){if(l!==null&&Kl(o)){if(i=l.start,t=l.end,t===void 0&&(t=i),"selectionStart"in o)o.selectionStart=i,o.selectionEnd=Math.min(t,o.value.length);else if(t=(i=o.ownerDocument||document)&&i.defaultView||window,t.getSelection){t=t.getSelection();var c=o.textContent.length,h=Math.min(l.start,c);l=l.end===void 0?h:Math.min(l.end,c),!t.extend&&h>l&&(c=l,l=h,h=c),c=Ed(o,h);var M=Ed(o,l);c&&M&&(t.rangeCount!==1||t.anchorNode!==c.node||t.anchorOffset!==c.offset||t.focusNode!==M.node||t.focusOffset!==M.offset)&&(i=i.createRange(),i.setStart(c.node,c.offset),t.removeAllRanges(),h>l?(t.addRange(i),t.extend(M.node,M.offset)):(i.setEnd(M.node,M.offset),t.addRange(i)))}}for(i=[],t=o;t=t.parentNode;)t.nodeType===1&&i.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<i.length;o++)t=i[o],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Jg=d&&"documentMode"in document&&11>=document.documentMode,is=null,$l=null,co=null,Zl=!1;function Ad(t,i,o){var l=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;Zl||is==null||is!==Dt(l)||(l=is,"selectionStart"in l&&Kl(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),co&&uo(co,l)||(co=l,l=da($l,"onSelect"),0<l.length&&(i=new Hl("onSelect","select",null,i,o),t.push({event:i,listeners:l}),i.target=is)))}function ua(t,i){var o={};return o[t.toLowerCase()]=i.toLowerCase(),o["Webkit"+t]="webkit"+i,o["Moz"+t]="moz"+i,o}var rs={animationend:ua("Animation","AnimationEnd"),animationiteration:ua("Animation","AnimationIteration"),animationstart:ua("Animation","AnimationStart"),transitionend:ua("Transition","TransitionEnd")},Ql={},Rd={};d&&(Rd=document.createElement("div").style,"AnimationEvent"in window||(delete rs.animationend.animation,delete rs.animationiteration.animation,delete rs.animationstart.animation),"TransitionEvent"in window||delete rs.transitionend.transition);function ca(t){if(Ql[t])return Ql[t];if(!rs[t])return t;var i=rs[t],o;for(o in i)if(i.hasOwnProperty(o)&&o in Rd)return Ql[t]=i[o];return t}var Cd=ca("animationend"),Pd=ca("animationiteration"),bd=ca("animationstart"),Dd=ca("transitionend"),Ld=new Map,Ud="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function $i(t,i){Ld.set(t,i),u(i,[t])}for(var Jl=0;Jl<Ud.length;Jl++){var eu=Ud[Jl],e_=eu.toLowerCase(),t_=eu[0].toUpperCase()+eu.slice(1);$i(e_,"on"+t_)}$i(Cd,"onAnimationEnd"),$i(Pd,"onAnimationIteration"),$i(bd,"onAnimationStart"),$i("dblclick","onDoubleClick"),$i("focusin","onFocus"),$i("focusout","onBlur"),$i(Dd,"onTransitionEnd"),f("onMouseEnter",["mouseout","mouseover"]),f("onMouseLeave",["mouseout","mouseover"]),f("onPointerEnter",["pointerout","pointerover"]),f("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var fo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),n_=new Set("cancel close invalid load scroll toggle".split(" ").concat(fo));function Id(t,i,o){var l=t.type||"unknown-event";t.currentTarget=o,qo(l,i,void 0,t),t.currentTarget=null}function Nd(t,i){i=(i&4)!==0;for(var o=0;o<t.length;o++){var l=t[o],c=l.event;l=l.listeners;e:{var h=void 0;if(i)for(var M=l.length-1;0<=M;M--){var D=l[M],N=D.instance,ee=D.currentTarget;if(D=D.listener,N!==h&&c.isPropagationStopped())break e;Id(c,D,ee),h=N}else for(M=0;M<l.length;M++){if(D=l[M],N=D.instance,ee=D.currentTarget,D=D.listener,N!==h&&c.isPropagationStopped())break e;Id(c,D,ee),h=N}}}if(Tr)throw t=Gi,Tr=!1,Gi=null,t}function It(t,i){var o=i[lu];o===void 0&&(o=i[lu]=new Set);var l=t+"__bubble";o.has(l)||(Fd(i,t,2,!1),o.add(l))}function tu(t,i,o){var l=0;i&&(l|=4),Fd(o,t,l,i)}var fa="_reactListening"+Math.random().toString(36).slice(2);function ho(t){if(!t[fa]){t[fa]=!0,r.forEach(function(o){o!=="selectionchange"&&(n_.has(o)||tu(o,!1,t),tu(o,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[fa]||(i[fa]=!0,tu("selectionchange",!1,i))}}function Fd(t,i,o,l){switch(sd(i)){case 1:var c=gg;break;case 4:c=_g;break;default:c=kl}o=c.bind(null,i,o,t),c=void 0,!Qr||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(c=!0),l?c!==void 0?t.addEventListener(i,o,{capture:!0,passive:c}):t.addEventListener(i,o,!0):c!==void 0?t.addEventListener(i,o,{passive:c}):t.addEventListener(i,o,!1)}function nu(t,i,o,l,c){var h=l;if(!(i&1)&&!(i&2)&&l!==null)e:for(;;){if(l===null)return;var M=l.tag;if(M===3||M===4){var D=l.stateNode.containerInfo;if(D===c||D.nodeType===8&&D.parentNode===c)break;if(M===4)for(M=l.return;M!==null;){var N=M.tag;if((N===3||N===4)&&(N=M.stateNode.containerInfo,N===c||N.nodeType===8&&N.parentNode===c))return;M=M.return}for(;D!==null;){if(M=wr(D),M===null)return;if(N=M.tag,N===5||N===6){l=h=M;continue e}D=D.parentNode}}l=l.return}wn(function(){var ee=h,_e=V(o),xe=[];e:{var me=Ld.get(t);if(me!==void 0){var Le=Hl,ze=t;switch(t){case"keypress":if(sa(o)===0)break e;case"keydown":case"keyup":Le=Lg;break;case"focusin":ze="focus",Le=Wl;break;case"focusout":ze="blur",Le=Wl;break;case"beforeblur":case"afterblur":Le=Wl;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Le=ld;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Le=yg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Le=Ng;break;case Cd:case Pd:case bd:Le=Eg;break;case Dd:Le=Og;break;case"scroll":Le=vg;break;case"wheel":Le=Bg;break;case"copy":case"cut":case"paste":Le=wg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Le=cd}var Ve=(i&4)!==0,Wt=!Ve&&t==="scroll",q=Ve?me!==null?me+"Capture":null:me;Ve=[];for(var H=ee,$;H!==null;){$=H;var Ee=$.stateNode;if($.tag===5&&Ee!==null&&($=Ee,q!==null&&(Ee=vn(H,q),Ee!=null&&Ve.push(po(H,Ee,$)))),Wt)break;H=H.return}0<Ve.length&&(me=new Le(me,ze,null,o,_e),xe.push({event:me,listeners:Ve}))}}if(!(i&7)){e:{if(me=t==="mouseover"||t==="pointerover",Le=t==="mouseout"||t==="pointerout",me&&o!==Tt&&(ze=o.relatedTarget||o.fromElement)&&(wr(ze)||ze[Ei]))break e;if((Le||me)&&(me=_e.window===_e?_e:(me=_e.ownerDocument)?me.defaultView||me.parentWindow:window,Le?(ze=o.relatedTarget||o.toElement,Le=ee,ze=ze?wr(ze):null,ze!==null&&(Wt=li(ze),ze!==Wt||ze.tag!==5&&ze.tag!==6)&&(ze=null)):(Le=null,ze=ee),Le!==ze)){if(Ve=ld,Ee="onMouseLeave",q="onMouseEnter",H="mouse",(t==="pointerout"||t==="pointerover")&&(Ve=cd,Ee="onPointerLeave",q="onPointerEnter",H="pointer"),Wt=Le==null?me:as(Le),$=ze==null?me:as(ze),me=new Ve(Ee,H+"leave",Le,o,_e),me.target=Wt,me.relatedTarget=$,Ee=null,wr(_e)===ee&&(Ve=new Ve(q,H+"enter",ze,o,_e),Ve.target=$,Ve.relatedTarget=Wt,Ee=Ve),Wt=Ee,Le&&ze)t:{for(Ve=Le,q=ze,H=0,$=Ve;$;$=ss($))H++;for($=0,Ee=q;Ee;Ee=ss(Ee))$++;for(;0<H-$;)Ve=ss(Ve),H--;for(;0<$-H;)q=ss(q),$--;for(;H--;){if(Ve===q||q!==null&&Ve===q.alternate)break t;Ve=ss(Ve),q=ss(q)}Ve=null}else Ve=null;Le!==null&&Od(xe,me,Le,Ve,!1),ze!==null&&Wt!==null&&Od(xe,Wt,ze,Ve,!0)}}e:{if(me=ee?as(ee):window,Le=me.nodeName&&me.nodeName.toLowerCase(),Le==="select"||Le==="input"&&me.type==="file")var Xe=Yg;else if(gd(me))if(vd)Xe=$g;else{Xe=qg;var Ke=jg}else(Le=me.nodeName)&&Le.toLowerCase()==="input"&&(me.type==="checkbox"||me.type==="radio")&&(Xe=Kg);if(Xe&&(Xe=Xe(t,ee))){_d(xe,Xe,o,_e);break e}Ke&&Ke(t,me,ee),t==="focusout"&&(Ke=me._wrapperState)&&Ke.controlled&&me.type==="number"&&wt(me,"number",me.value)}switch(Ke=ee?as(ee):window,t){case"focusin":(gd(Ke)||Ke.contentEditable==="true")&&(is=Ke,$l=ee,co=null);break;case"focusout":co=$l=is=null;break;case"mousedown":Zl=!0;break;case"contextmenu":case"mouseup":case"dragend":Zl=!1,Ad(xe,o,_e);break;case"selectionchange":if(Jg)break;case"keydown":case"keyup":Ad(xe,o,_e)}var $e;if(Yl)e:{switch(t){case"compositionstart":var tt="onCompositionStart";break e;case"compositionend":tt="onCompositionEnd";break e;case"compositionupdate":tt="onCompositionUpdate";break e}tt=void 0}else ns?pd(t,o)&&(tt="onCompositionEnd"):t==="keydown"&&o.keyCode===229&&(tt="onCompositionStart");tt&&(fd&&o.locale!=="ko"&&(ns||tt!=="onCompositionStart"?tt==="onCompositionEnd"&&ns&&($e=od()):(Ki=_e,zl="value"in Ki?Ki.value:Ki.textContent,ns=!0)),Ke=da(ee,tt),0<Ke.length&&(tt=new ud(tt,t,null,o,_e),xe.push({event:tt,listeners:Ke}),$e?tt.data=$e:($e=md(o),$e!==null&&(tt.data=$e)))),($e=Hg?Vg(t,o):Gg(t,o))&&(ee=da(ee,"onBeforeInput"),0<ee.length&&(_e=new ud("onBeforeInput","beforeinput",null,o,_e),xe.push({event:_e,listeners:ee}),_e.data=$e))}Nd(xe,i)})}function po(t,i,o){return{instance:t,listener:i,currentTarget:o}}function da(t,i){for(var o=i+"Capture",l=[];t!==null;){var c=t,h=c.stateNode;c.tag===5&&h!==null&&(c=h,h=vn(t,o),h!=null&&l.unshift(po(t,h,c)),h=vn(t,i),h!=null&&l.push(po(t,h,c))),t=t.return}return l}function ss(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Od(t,i,o,l,c){for(var h=i._reactName,M=[];o!==null&&o!==l;){var D=o,N=D.alternate,ee=D.stateNode;if(N!==null&&N===l)break;D.tag===5&&ee!==null&&(D=ee,c?(N=vn(o,h),N!=null&&M.unshift(po(o,N,D))):c||(N=vn(o,h),N!=null&&M.push(po(o,N,D)))),o=o.return}M.length!==0&&t.push({event:i,listeners:M})}var i_=/\r\n?/g,r_=/\u0000|\uFFFD/g;function kd(t){return(typeof t=="string"?t:""+t).replace(i_,`
`).replace(r_,"")}function ha(t,i,o){if(i=kd(i),kd(t)!==i&&o)throw Error(n(425))}function pa(){}var iu=null,ru=null;function su(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var ou=typeof setTimeout=="function"?setTimeout:void 0,s_=typeof clearTimeout=="function"?clearTimeout:void 0,Bd=typeof Promise=="function"?Promise:void 0,o_=typeof queueMicrotask=="function"?queueMicrotask:typeof Bd<"u"?function(t){return Bd.resolve(null).then(t).catch(a_)}:ou;function a_(t){setTimeout(function(){throw t})}function au(t,i){var o=i,l=0;do{var c=o.nextSibling;if(t.removeChild(o),c&&c.nodeType===8)if(o=c.data,o==="/$"){if(l===0){t.removeChild(c),io(i);return}l--}else o!=="$"&&o!=="$?"&&o!=="$!"||l++;o=c}while(o);io(i)}function Zi(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return t}function zd(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="$"||o==="$!"||o==="$?"){if(i===0)return t;i--}else o==="/$"&&i++}t=t.previousSibling}return null}var os=Math.random().toString(36).slice(2),ci="__reactFiber$"+os,mo="__reactProps$"+os,Ei="__reactContainer$"+os,lu="__reactEvents$"+os,l_="__reactListeners$"+os,u_="__reactHandles$"+os;function wr(t){var i=t[ci];if(i)return i;for(var o=t.parentNode;o;){if(i=o[Ei]||o[ci]){if(o=i.alternate,i.child!==null||o!==null&&o.child!==null)for(t=zd(t);t!==null;){if(o=t[ci])return o;t=zd(t)}return i}t=o,o=t.parentNode}return null}function go(t){return t=t[ci]||t[Ei],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function as(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function ma(t){return t[mo]||null}var uu=[],ls=-1;function Qi(t){return{current:t}}function Nt(t){0>ls||(t.current=uu[ls],uu[ls]=null,ls--)}function Lt(t,i){ls++,uu[ls]=t.current,t.current=i}var Ji={},fn=Qi(Ji),An=Qi(!1),Ar=Ji;function us(t,i){var o=t.type.contextTypes;if(!o)return Ji;var l=t.stateNode;if(l&&l.__reactInternalMemoizedUnmaskedChildContext===i)return l.__reactInternalMemoizedMaskedChildContext;var c={},h;for(h in o)c[h]=i[h];return l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=c),c}function Rn(t){return t=t.childContextTypes,t!=null}function ga(){Nt(An),Nt(fn)}function Hd(t,i,o){if(fn.current!==Ji)throw Error(n(168));Lt(fn,i),Lt(An,o)}function Vd(t,i,o){var l=t.stateNode;if(i=i.childContextTypes,typeof l.getChildContext!="function")return o;l=l.getChildContext();for(var c in l)if(!(c in i))throw Error(n(108,ve(t)||"Unknown",c));return re({},o,l)}function _a(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Ji,Ar=fn.current,Lt(fn,t),Lt(An,An.current),!0}function Gd(t,i,o){var l=t.stateNode;if(!l)throw Error(n(169));o?(t=Vd(t,i,Ar),l.__reactInternalMemoizedMergedChildContext=t,Nt(An),Nt(fn),Lt(fn,t)):Nt(An),Lt(An,o)}var Ti=null,va=!1,cu=!1;function Wd(t){Ti===null?Ti=[t]:Ti.push(t)}function c_(t){va=!0,Wd(t)}function er(){if(!cu&&Ti!==null){cu=!0;var t=0,i=xt;try{var o=Ti;for(xt=1;t<o.length;t++){var l=o[t];do l=l(!0);while(l!==null)}Ti=null,va=!1}catch(c){throw Ti!==null&&(Ti=Ti.slice(t+1)),Jo(ye,er),c}finally{xt=i,cu=!1}}return null}var cs=[],fs=0,xa=null,ya=0,Vn=[],Gn=0,Rr=null,wi=1,Ai="";function Cr(t,i){cs[fs++]=ya,cs[fs++]=xa,xa=t,ya=i}function Xd(t,i,o){Vn[Gn++]=wi,Vn[Gn++]=Ai,Vn[Gn++]=Rr,Rr=t;var l=wi;t=Ai;var c=32-rt(l)-1;l&=~(1<<c),o+=1;var h=32-rt(i)+c;if(30<h){var M=c-c%5;h=(l&(1<<M)-1).toString(32),l>>=M,c-=M,wi=1<<32-rt(i)+c|o<<c|l,Ai=h+t}else wi=1<<h|o<<c|l,Ai=t}function fu(t){t.return!==null&&(Cr(t,1),Xd(t,1,0))}function du(t){for(;t===xa;)xa=cs[--fs],cs[fs]=null,ya=cs[--fs],cs[fs]=null;for(;t===Rr;)Rr=Vn[--Gn],Vn[Gn]=null,Ai=Vn[--Gn],Vn[Gn]=null,wi=Vn[--Gn],Vn[Gn]=null}var Fn=null,On=null,Ot=!1,Zn=null;function Yd(t,i){var o=jn(5,null,null,0);o.elementType="DELETED",o.stateNode=i,o.return=t,i=t.deletions,i===null?(t.deletions=[o],t.flags|=16):i.push(o)}function jd(t,i){switch(t.tag){case 5:var o=t.type;return i=i.nodeType!==1||o.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(t.stateNode=i,Fn=t,On=Zi(i.firstChild),!0):!1;case 6:return i=t.pendingProps===""||i.nodeType!==3?null:i,i!==null?(t.stateNode=i,Fn=t,On=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(o=Rr!==null?{id:wi,overflow:Ai}:null,t.memoizedState={dehydrated:i,treeContext:o,retryLane:1073741824},o=jn(18,null,null,0),o.stateNode=i,o.return=t,t.child=o,Fn=t,On=null,!0):!1;default:return!1}}function hu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function pu(t){if(Ot){var i=On;if(i){var o=i;if(!jd(t,i)){if(hu(t))throw Error(n(418));i=Zi(o.nextSibling);var l=Fn;i&&jd(t,i)?Yd(l,o):(t.flags=t.flags&-4097|2,Ot=!1,Fn=t)}}else{if(hu(t))throw Error(n(418));t.flags=t.flags&-4097|2,Ot=!1,Fn=t}}}function qd(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Fn=t}function Sa(t){if(t!==Fn)return!1;if(!Ot)return qd(t),Ot=!0,!1;var i;if((i=t.tag!==3)&&!(i=t.tag!==5)&&(i=t.type,i=i!=="head"&&i!=="body"&&!su(t.type,t.memoizedProps)),i&&(i=On)){if(hu(t))throw Kd(),Error(n(418));for(;i;)Yd(t,i),i=Zi(i.nextSibling)}if(qd(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="/$"){if(i===0){On=Zi(t.nextSibling);break e}i--}else o!=="$"&&o!=="$!"&&o!=="$?"||i++}t=t.nextSibling}On=null}}else On=Fn?Zi(t.stateNode.nextSibling):null;return!0}function Kd(){for(var t=On;t;)t=Zi(t.nextSibling)}function ds(){On=Fn=null,Ot=!1}function mu(t){Zn===null?Zn=[t]:Zn.push(t)}var f_=C.ReactCurrentBatchConfig;function _o(t,i,o){if(t=o.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(n(309));var l=o.stateNode}if(!l)throw Error(n(147,t));var c=l,h=""+t;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===h?i.ref:(i=function(M){var D=c.refs;M===null?delete D[h]:D[h]=M},i._stringRef=h,i)}if(typeof t!="string")throw Error(n(284));if(!o._owner)throw Error(n(290,t))}return t}function Ma(t,i){throw t=Object.prototype.toString.call(i),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t))}function $d(t){var i=t._init;return i(t._payload)}function Zd(t){function i(q,H){if(t){var $=q.deletions;$===null?(q.deletions=[H],q.flags|=16):$.push(H)}}function o(q,H){if(!t)return null;for(;H!==null;)i(q,H),H=H.sibling;return null}function l(q,H){for(q=new Map;H!==null;)H.key!==null?q.set(H.key,H):q.set(H.index,H),H=H.sibling;return q}function c(q,H){return q=lr(q,H),q.index=0,q.sibling=null,q}function h(q,H,$){return q.index=$,t?($=q.alternate,$!==null?($=$.index,$<H?(q.flags|=2,H):$):(q.flags|=2,H)):(q.flags|=1048576,H)}function M(q){return t&&q.alternate===null&&(q.flags|=2),q}function D(q,H,$,Ee){return H===null||H.tag!==6?(H=oc($,q.mode,Ee),H.return=q,H):(H=c(H,$),H.return=q,H)}function N(q,H,$,Ee){var Xe=$.type;return Xe===F?_e(q,H,$.props.children,Ee,$.key):H!==null&&(H.elementType===Xe||typeof Xe=="object"&&Xe!==null&&Xe.$$typeof===se&&$d(Xe)===H.type)?(Ee=c(H,$.props),Ee.ref=_o(q,H,$),Ee.return=q,Ee):(Ee=Ya($.type,$.key,$.props,null,q.mode,Ee),Ee.ref=_o(q,H,$),Ee.return=q,Ee)}function ee(q,H,$,Ee){return H===null||H.tag!==4||H.stateNode.containerInfo!==$.containerInfo||H.stateNode.implementation!==$.implementation?(H=ac($,q.mode,Ee),H.return=q,H):(H=c(H,$.children||[]),H.return=q,H)}function _e(q,H,$,Ee,Xe){return H===null||H.tag!==7?(H=Fr($,q.mode,Ee,Xe),H.return=q,H):(H=c(H,$),H.return=q,H)}function xe(q,H,$){if(typeof H=="string"&&H!==""||typeof H=="number")return H=oc(""+H,q.mode,$),H.return=q,H;if(typeof H=="object"&&H!==null){switch(H.$$typeof){case W:return $=Ya(H.type,H.key,H.props,null,q.mode,$),$.ref=_o(q,null,H),$.return=q,$;case k:return H=ac(H,q.mode,$),H.return=q,H;case se:var Ee=H._init;return xe(q,Ee(H._payload),$)}if(Ge(H)||ae(H))return H=Fr(H,q.mode,$,null),H.return=q,H;Ma(q,H)}return null}function me(q,H,$,Ee){var Xe=H!==null?H.key:null;if(typeof $=="string"&&$!==""||typeof $=="number")return Xe!==null?null:D(q,H,""+$,Ee);if(typeof $=="object"&&$!==null){switch($.$$typeof){case W:return $.key===Xe?N(q,H,$,Ee):null;case k:return $.key===Xe?ee(q,H,$,Ee):null;case se:return Xe=$._init,me(q,H,Xe($._payload),Ee)}if(Ge($)||ae($))return Xe!==null?null:_e(q,H,$,Ee,null);Ma(q,$)}return null}function Le(q,H,$,Ee,Xe){if(typeof Ee=="string"&&Ee!==""||typeof Ee=="number")return q=q.get($)||null,D(H,q,""+Ee,Xe);if(typeof Ee=="object"&&Ee!==null){switch(Ee.$$typeof){case W:return q=q.get(Ee.key===null?$:Ee.key)||null,N(H,q,Ee,Xe);case k:return q=q.get(Ee.key===null?$:Ee.key)||null,ee(H,q,Ee,Xe);case se:var Ke=Ee._init;return Le(q,H,$,Ke(Ee._payload),Xe)}if(Ge(Ee)||ae(Ee))return q=q.get($)||null,_e(H,q,Ee,Xe,null);Ma(H,Ee)}return null}function ze(q,H,$,Ee){for(var Xe=null,Ke=null,$e=H,tt=H=0,rn=null;$e!==null&&tt<$.length;tt++){$e.index>tt?(rn=$e,$e=null):rn=$e.sibling;var St=me(q,$e,$[tt],Ee);if(St===null){$e===null&&($e=rn);break}t&&$e&&St.alternate===null&&i(q,$e),H=h(St,H,tt),Ke===null?Xe=St:Ke.sibling=St,Ke=St,$e=rn}if(tt===$.length)return o(q,$e),Ot&&Cr(q,tt),Xe;if($e===null){for(;tt<$.length;tt++)$e=xe(q,$[tt],Ee),$e!==null&&(H=h($e,H,tt),Ke===null?Xe=$e:Ke.sibling=$e,Ke=$e);return Ot&&Cr(q,tt),Xe}for($e=l(q,$e);tt<$.length;tt++)rn=Le($e,q,tt,$[tt],Ee),rn!==null&&(t&&rn.alternate!==null&&$e.delete(rn.key===null?tt:rn.key),H=h(rn,H,tt),Ke===null?Xe=rn:Ke.sibling=rn,Ke=rn);return t&&$e.forEach(function(ur){return i(q,ur)}),Ot&&Cr(q,tt),Xe}function Ve(q,H,$,Ee){var Xe=ae($);if(typeof Xe!="function")throw Error(n(150));if($=Xe.call($),$==null)throw Error(n(151));for(var Ke=Xe=null,$e=H,tt=H=0,rn=null,St=$.next();$e!==null&&!St.done;tt++,St=$.next()){$e.index>tt?(rn=$e,$e=null):rn=$e.sibling;var ur=me(q,$e,St.value,Ee);if(ur===null){$e===null&&($e=rn);break}t&&$e&&ur.alternate===null&&i(q,$e),H=h(ur,H,tt),Ke===null?Xe=ur:Ke.sibling=ur,Ke=ur,$e=rn}if(St.done)return o(q,$e),Ot&&Cr(q,tt),Xe;if($e===null){for(;!St.done;tt++,St=$.next())St=xe(q,St.value,Ee),St!==null&&(H=h(St,H,tt),Ke===null?Xe=St:Ke.sibling=St,Ke=St);return Ot&&Cr(q,tt),Xe}for($e=l(q,$e);!St.done;tt++,St=$.next())St=Le($e,q,tt,St.value,Ee),St!==null&&(t&&St.alternate!==null&&$e.delete(St.key===null?tt:St.key),H=h(St,H,tt),Ke===null?Xe=St:Ke.sibling=St,Ke=St);return t&&$e.forEach(function(G_){return i(q,G_)}),Ot&&Cr(q,tt),Xe}function Wt(q,H,$,Ee){if(typeof $=="object"&&$!==null&&$.type===F&&$.key===null&&($=$.props.children),typeof $=="object"&&$!==null){switch($.$$typeof){case W:e:{for(var Xe=$.key,Ke=H;Ke!==null;){if(Ke.key===Xe){if(Xe=$.type,Xe===F){if(Ke.tag===7){o(q,Ke.sibling),H=c(Ke,$.props.children),H.return=q,q=H;break e}}else if(Ke.elementType===Xe||typeof Xe=="object"&&Xe!==null&&Xe.$$typeof===se&&$d(Xe)===Ke.type){o(q,Ke.sibling),H=c(Ke,$.props),H.ref=_o(q,Ke,$),H.return=q,q=H;break e}o(q,Ke);break}else i(q,Ke);Ke=Ke.sibling}$.type===F?(H=Fr($.props.children,q.mode,Ee,$.key),H.return=q,q=H):(Ee=Ya($.type,$.key,$.props,null,q.mode,Ee),Ee.ref=_o(q,H,$),Ee.return=q,q=Ee)}return M(q);case k:e:{for(Ke=$.key;H!==null;){if(H.key===Ke)if(H.tag===4&&H.stateNode.containerInfo===$.containerInfo&&H.stateNode.implementation===$.implementation){o(q,H.sibling),H=c(H,$.children||[]),H.return=q,q=H;break e}else{o(q,H);break}else i(q,H);H=H.sibling}H=ac($,q.mode,Ee),H.return=q,q=H}return M(q);case se:return Ke=$._init,Wt(q,H,Ke($._payload),Ee)}if(Ge($))return ze(q,H,$,Ee);if(ae($))return Ve(q,H,$,Ee);Ma(q,$)}return typeof $=="string"&&$!==""||typeof $=="number"?($=""+$,H!==null&&H.tag===6?(o(q,H.sibling),H=c(H,$),H.return=q,q=H):(o(q,H),H=oc($,q.mode,Ee),H.return=q,q=H),M(q)):o(q,H)}return Wt}var hs=Zd(!0),Qd=Zd(!1),Ea=Qi(null),Ta=null,ps=null,gu=null;function _u(){gu=ps=Ta=null}function vu(t){var i=Ea.current;Nt(Ea),t._currentValue=i}function xu(t,i,o){for(;t!==null;){var l=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),t===o)break;t=t.return}}function ms(t,i){Ta=t,gu=ps=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&i&&(Cn=!0),t.firstContext=null)}function Wn(t){var i=t._currentValue;if(gu!==t)if(t={context:t,memoizedValue:i,next:null},ps===null){if(Ta===null)throw Error(n(308));ps=t,Ta.dependencies={lanes:0,firstContext:t}}else ps=ps.next=t;return i}var Pr=null;function yu(t){Pr===null?Pr=[t]:Pr.push(t)}function Jd(t,i,o,l){var c=i.interleaved;return c===null?(o.next=o,yu(i)):(o.next=c.next,c.next=o),i.interleaved=o,Ri(t,l)}function Ri(t,i){t.lanes|=i;var o=t.alternate;for(o!==null&&(o.lanes|=i),o=t,t=t.return;t!==null;)t.childLanes|=i,o=t.alternate,o!==null&&(o.childLanes|=i),o=t,t=t.return;return o.tag===3?o.stateNode:null}var tr=!1;function Su(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function eh(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ci(t,i){return{eventTime:t,lane:i,tag:0,payload:null,callback:null,next:null}}function nr(t,i,o){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,yt&2){var c=l.pending;return c===null?i.next=i:(i.next=c.next,c.next=i),l.pending=i,Ri(t,o)}return c=l.interleaved,c===null?(i.next=i,yu(l)):(i.next=c.next,c.next=i),l.interleaved=i,Ri(t,o)}function wa(t,i,o){if(i=i.updateQueue,i!==null&&(i=i.shared,(o&4194240)!==0)){var l=i.lanes;l&=t.pendingLanes,o|=l,i.lanes=o,en(t,o)}}function th(t,i){var o=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,o===l)){var c=null,h=null;if(o=o.firstBaseUpdate,o!==null){do{var M={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};h===null?c=h=M:h=h.next=M,o=o.next}while(o!==null);h===null?c=h=i:h=h.next=i}else c=h=i;o={baseState:l.baseState,firstBaseUpdate:c,lastBaseUpdate:h,shared:l.shared,effects:l.effects},t.updateQueue=o;return}t=o.lastBaseUpdate,t===null?o.firstBaseUpdate=i:t.next=i,o.lastBaseUpdate=i}function Aa(t,i,o,l){var c=t.updateQueue;tr=!1;var h=c.firstBaseUpdate,M=c.lastBaseUpdate,D=c.shared.pending;if(D!==null){c.shared.pending=null;var N=D,ee=N.next;N.next=null,M===null?h=ee:M.next=ee,M=N;var _e=t.alternate;_e!==null&&(_e=_e.updateQueue,D=_e.lastBaseUpdate,D!==M&&(D===null?_e.firstBaseUpdate=ee:D.next=ee,_e.lastBaseUpdate=N))}if(h!==null){var xe=c.baseState;M=0,_e=ee=N=null,D=h;do{var me=D.lane,Le=D.eventTime;if((l&me)===me){_e!==null&&(_e=_e.next={eventTime:Le,lane:0,tag:D.tag,payload:D.payload,callback:D.callback,next:null});e:{var ze=t,Ve=D;switch(me=i,Le=o,Ve.tag){case 1:if(ze=Ve.payload,typeof ze=="function"){xe=ze.call(Le,xe,me);break e}xe=ze;break e;case 3:ze.flags=ze.flags&-65537|128;case 0:if(ze=Ve.payload,me=typeof ze=="function"?ze.call(Le,xe,me):ze,me==null)break e;xe=re({},xe,me);break e;case 2:tr=!0}}D.callback!==null&&D.lane!==0&&(t.flags|=64,me=c.effects,me===null?c.effects=[D]:me.push(D))}else Le={eventTime:Le,lane:me,tag:D.tag,payload:D.payload,callback:D.callback,next:null},_e===null?(ee=_e=Le,N=xe):_e=_e.next=Le,M|=me;if(D=D.next,D===null){if(D=c.shared.pending,D===null)break;me=D,D=me.next,me.next=null,c.lastBaseUpdate=me,c.shared.pending=null}}while(!0);if(_e===null&&(N=xe),c.baseState=N,c.firstBaseUpdate=ee,c.lastBaseUpdate=_e,i=c.shared.interleaved,i!==null){c=i;do M|=c.lane,c=c.next;while(c!==i)}else h===null&&(c.shared.lanes=0);Lr|=M,t.lanes=M,t.memoizedState=xe}}function nh(t,i,o){if(t=i.effects,i.effects=null,t!==null)for(i=0;i<t.length;i++){var l=t[i],c=l.callback;if(c!==null){if(l.callback=null,l=o,typeof c!="function")throw Error(n(191,c));c.call(l)}}}var vo={},fi=Qi(vo),xo=Qi(vo),yo=Qi(vo);function br(t){if(t===vo)throw Error(n(174));return t}function Mu(t,i){switch(Lt(yo,i),Lt(xo,t),Lt(fi,vo),t=i.nodeType,t){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:We(null,"");break;default:t=t===8?i.parentNode:i,i=t.namespaceURI||null,t=t.tagName,i=We(i,t)}Nt(fi),Lt(fi,i)}function gs(){Nt(fi),Nt(xo),Nt(yo)}function ih(t){br(yo.current);var i=br(fi.current),o=We(i,t.type);i!==o&&(Lt(xo,t),Lt(fi,o))}function Eu(t){xo.current===t&&(Nt(fi),Nt(xo))}var kt=Qi(0);function Ra(t){for(var i=t;i!==null;){if(i.tag===13){var o=i.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if(i.flags&128)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Tu=[];function wu(){for(var t=0;t<Tu.length;t++)Tu[t]._workInProgressVersionPrimary=null;Tu.length=0}var Ca=C.ReactCurrentDispatcher,Au=C.ReactCurrentBatchConfig,Dr=0,Bt=null,qt=null,tn=null,Pa=!1,So=!1,Mo=0,d_=0;function dn(){throw Error(n(321))}function Ru(t,i){if(i===null)return!1;for(var o=0;o<i.length&&o<t.length;o++)if(!$n(t[o],i[o]))return!1;return!0}function Cu(t,i,o,l,c,h){if(Dr=h,Bt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Ca.current=t===null||t.memoizedState===null?g_:__,t=o(l,c),So){h=0;do{if(So=!1,Mo=0,25<=h)throw Error(n(301));h+=1,tn=qt=null,i.updateQueue=null,Ca.current=v_,t=o(l,c)}while(So)}if(Ca.current=La,i=qt!==null&&qt.next!==null,Dr=0,tn=qt=Bt=null,Pa=!1,i)throw Error(n(300));return t}function Pu(){var t=Mo!==0;return Mo=0,t}function di(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return tn===null?Bt.memoizedState=tn=t:tn=tn.next=t,tn}function Xn(){if(qt===null){var t=Bt.alternate;t=t!==null?t.memoizedState:null}else t=qt.next;var i=tn===null?Bt.memoizedState:tn.next;if(i!==null)tn=i,qt=t;else{if(t===null)throw Error(n(310));qt=t,t={memoizedState:qt.memoizedState,baseState:qt.baseState,baseQueue:qt.baseQueue,queue:qt.queue,next:null},tn===null?Bt.memoizedState=tn=t:tn=tn.next=t}return tn}function Eo(t,i){return typeof i=="function"?i(t):i}function bu(t){var i=Xn(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var l=qt,c=l.baseQueue,h=o.pending;if(h!==null){if(c!==null){var M=c.next;c.next=h.next,h.next=M}l.baseQueue=c=h,o.pending=null}if(c!==null){h=c.next,l=l.baseState;var D=M=null,N=null,ee=h;do{var _e=ee.lane;if((Dr&_e)===_e)N!==null&&(N=N.next={lane:0,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null}),l=ee.hasEagerState?ee.eagerState:t(l,ee.action);else{var xe={lane:_e,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null};N===null?(D=N=xe,M=l):N=N.next=xe,Bt.lanes|=_e,Lr|=_e}ee=ee.next}while(ee!==null&&ee!==h);N===null?M=l:N.next=D,$n(l,i.memoizedState)||(Cn=!0),i.memoizedState=l,i.baseState=M,i.baseQueue=N,o.lastRenderedState=l}if(t=o.interleaved,t!==null){c=t;do h=c.lane,Bt.lanes|=h,Lr|=h,c=c.next;while(c!==t)}else c===null&&(o.lanes=0);return[i.memoizedState,o.dispatch]}function Du(t){var i=Xn(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var l=o.dispatch,c=o.pending,h=i.memoizedState;if(c!==null){o.pending=null;var M=c=c.next;do h=t(h,M.action),M=M.next;while(M!==c);$n(h,i.memoizedState)||(Cn=!0),i.memoizedState=h,i.baseQueue===null&&(i.baseState=h),o.lastRenderedState=h}return[h,l]}function rh(){}function sh(t,i){var o=Bt,l=Xn(),c=i(),h=!$n(l.memoizedState,c);if(h&&(l.memoizedState=c,Cn=!0),l=l.queue,Lu(lh.bind(null,o,l,t),[t]),l.getSnapshot!==i||h||tn!==null&&tn.memoizedState.tag&1){if(o.flags|=2048,To(9,ah.bind(null,o,l,c,i),void 0,null),nn===null)throw Error(n(349));Dr&30||oh(o,i,c)}return c}function oh(t,i,o){t.flags|=16384,t={getSnapshot:i,value:o},i=Bt.updateQueue,i===null?(i={lastEffect:null,stores:null},Bt.updateQueue=i,i.stores=[t]):(o=i.stores,o===null?i.stores=[t]:o.push(t))}function ah(t,i,o,l){i.value=o,i.getSnapshot=l,uh(i)&&ch(t)}function lh(t,i,o){return o(function(){uh(i)&&ch(t)})}function uh(t){var i=t.getSnapshot;t=t.value;try{var o=i();return!$n(t,o)}catch{return!0}}function ch(t){var i=Ri(t,1);i!==null&&ti(i,t,1,-1)}function fh(t){var i=di();return typeof t=="function"&&(t=t()),i.memoizedState=i.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Eo,lastRenderedState:t},i.queue=t,t=t.dispatch=m_.bind(null,Bt,t),[i.memoizedState,t]}function To(t,i,o,l){return t={tag:t,create:i,destroy:o,deps:l,next:null},i=Bt.updateQueue,i===null?(i={lastEffect:null,stores:null},Bt.updateQueue=i,i.lastEffect=t.next=t):(o=i.lastEffect,o===null?i.lastEffect=t.next=t:(l=o.next,o.next=t,t.next=l,i.lastEffect=t)),t}function dh(){return Xn().memoizedState}function ba(t,i,o,l){var c=di();Bt.flags|=t,c.memoizedState=To(1|i,o,void 0,l===void 0?null:l)}function Da(t,i,o,l){var c=Xn();l=l===void 0?null:l;var h=void 0;if(qt!==null){var M=qt.memoizedState;if(h=M.destroy,l!==null&&Ru(l,M.deps)){c.memoizedState=To(i,o,h,l);return}}Bt.flags|=t,c.memoizedState=To(1|i,o,h,l)}function hh(t,i){return ba(8390656,8,t,i)}function Lu(t,i){return Da(2048,8,t,i)}function ph(t,i){return Da(4,2,t,i)}function mh(t,i){return Da(4,4,t,i)}function gh(t,i){if(typeof i=="function")return t=t(),i(t),function(){i(null)};if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function _h(t,i,o){return o=o!=null?o.concat([t]):null,Da(4,4,gh.bind(null,i,t),o)}function Uu(){}function vh(t,i){var o=Xn();i=i===void 0?null:i;var l=o.memoizedState;return l!==null&&i!==null&&Ru(i,l[1])?l[0]:(o.memoizedState=[t,i],t)}function xh(t,i){var o=Xn();i=i===void 0?null:i;var l=o.memoizedState;return l!==null&&i!==null&&Ru(i,l[1])?l[0]:(t=t(),o.memoizedState=[t,i],t)}function yh(t,i,o){return Dr&21?($n(o,i)||(o=bt(),Bt.lanes|=o,Lr|=o,t.baseState=!0),i):(t.baseState&&(t.baseState=!1,Cn=!0),t.memoizedState=o)}function h_(t,i){var o=xt;xt=o!==0&&4>o?o:4,t(!0);var l=Au.transition;Au.transition={};try{t(!1),i()}finally{xt=o,Au.transition=l}}function Sh(){return Xn().memoizedState}function p_(t,i,o){var l=or(t);if(o={lane:l,action:o,hasEagerState:!1,eagerState:null,next:null},Mh(t))Eh(i,o);else if(o=Jd(t,i,o,l),o!==null){var c=Sn();ti(o,t,l,c),Th(o,i,l)}}function m_(t,i,o){var l=or(t),c={lane:l,action:o,hasEagerState:!1,eagerState:null,next:null};if(Mh(t))Eh(i,c);else{var h=t.alternate;if(t.lanes===0&&(h===null||h.lanes===0)&&(h=i.lastRenderedReducer,h!==null))try{var M=i.lastRenderedState,D=h(M,o);if(c.hasEagerState=!0,c.eagerState=D,$n(D,M)){var N=i.interleaved;N===null?(c.next=c,yu(i)):(c.next=N.next,N.next=c),i.interleaved=c;return}}catch{}finally{}o=Jd(t,i,c,l),o!==null&&(c=Sn(),ti(o,t,l,c),Th(o,i,l))}}function Mh(t){var i=t.alternate;return t===Bt||i!==null&&i===Bt}function Eh(t,i){So=Pa=!0;var o=t.pending;o===null?i.next=i:(i.next=o.next,o.next=i),t.pending=i}function Th(t,i,o){if(o&4194240){var l=i.lanes;l&=t.pendingLanes,o|=l,i.lanes=o,en(t,o)}}var La={readContext:Wn,useCallback:dn,useContext:dn,useEffect:dn,useImperativeHandle:dn,useInsertionEffect:dn,useLayoutEffect:dn,useMemo:dn,useReducer:dn,useRef:dn,useState:dn,useDebugValue:dn,useDeferredValue:dn,useTransition:dn,useMutableSource:dn,useSyncExternalStore:dn,useId:dn,unstable_isNewReconciler:!1},g_={readContext:Wn,useCallback:function(t,i){return di().memoizedState=[t,i===void 0?null:i],t},useContext:Wn,useEffect:hh,useImperativeHandle:function(t,i,o){return o=o!=null?o.concat([t]):null,ba(4194308,4,gh.bind(null,i,t),o)},useLayoutEffect:function(t,i){return ba(4194308,4,t,i)},useInsertionEffect:function(t,i){return ba(4,2,t,i)},useMemo:function(t,i){var o=di();return i=i===void 0?null:i,t=t(),o.memoizedState=[t,i],t},useReducer:function(t,i,o){var l=di();return i=o!==void 0?o(i):i,l.memoizedState=l.baseState=i,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},l.queue=t,t=t.dispatch=p_.bind(null,Bt,t),[l.memoizedState,t]},useRef:function(t){var i=di();return t={current:t},i.memoizedState=t},useState:fh,useDebugValue:Uu,useDeferredValue:function(t){return di().memoizedState=t},useTransition:function(){var t=fh(!1),i=t[0];return t=h_.bind(null,t[1]),di().memoizedState=t,[i,t]},useMutableSource:function(){},useSyncExternalStore:function(t,i,o){var l=Bt,c=di();if(Ot){if(o===void 0)throw Error(n(407));o=o()}else{if(o=i(),nn===null)throw Error(n(349));Dr&30||oh(l,i,o)}c.memoizedState=o;var h={value:o,getSnapshot:i};return c.queue=h,hh(lh.bind(null,l,h,t),[t]),l.flags|=2048,To(9,ah.bind(null,l,h,o,i),void 0,null),o},useId:function(){var t=di(),i=nn.identifierPrefix;if(Ot){var o=Ai,l=wi;o=(l&~(1<<32-rt(l)-1)).toString(32)+o,i=":"+i+"R"+o,o=Mo++,0<o&&(i+="H"+o.toString(32)),i+=":"}else o=d_++,i=":"+i+"r"+o.toString(32)+":";return t.memoizedState=i},unstable_isNewReconciler:!1},__={readContext:Wn,useCallback:vh,useContext:Wn,useEffect:Lu,useImperativeHandle:_h,useInsertionEffect:ph,useLayoutEffect:mh,useMemo:xh,useReducer:bu,useRef:dh,useState:function(){return bu(Eo)},useDebugValue:Uu,useDeferredValue:function(t){var i=Xn();return yh(i,qt.memoizedState,t)},useTransition:function(){var t=bu(Eo)[0],i=Xn().memoizedState;return[t,i]},useMutableSource:rh,useSyncExternalStore:sh,useId:Sh,unstable_isNewReconciler:!1},v_={readContext:Wn,useCallback:vh,useContext:Wn,useEffect:Lu,useImperativeHandle:_h,useInsertionEffect:ph,useLayoutEffect:mh,useMemo:xh,useReducer:Du,useRef:dh,useState:function(){return Du(Eo)},useDebugValue:Uu,useDeferredValue:function(t){var i=Xn();return qt===null?i.memoizedState=t:yh(i,qt.memoizedState,t)},useTransition:function(){var t=Du(Eo)[0],i=Xn().memoizedState;return[t,i]},useMutableSource:rh,useSyncExternalStore:sh,useId:Sh,unstable_isNewReconciler:!1};function Qn(t,i){if(t&&t.defaultProps){i=re({},i),t=t.defaultProps;for(var o in t)i[o]===void 0&&(i[o]=t[o]);return i}return i}function Iu(t,i,o,l){i=t.memoizedState,o=o(l,i),o=o==null?i:re({},i,o),t.memoizedState=o,t.lanes===0&&(t.updateQueue.baseState=o)}var Ua={isMounted:function(t){return(t=t._reactInternals)?li(t)===t:!1},enqueueSetState:function(t,i,o){t=t._reactInternals;var l=Sn(),c=or(t),h=Ci(l,c);h.payload=i,o!=null&&(h.callback=o),i=nr(t,h,c),i!==null&&(ti(i,t,c,l),wa(i,t,c))},enqueueReplaceState:function(t,i,o){t=t._reactInternals;var l=Sn(),c=or(t),h=Ci(l,c);h.tag=1,h.payload=i,o!=null&&(h.callback=o),i=nr(t,h,c),i!==null&&(ti(i,t,c,l),wa(i,t,c))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var o=Sn(),l=or(t),c=Ci(o,l);c.tag=2,i!=null&&(c.callback=i),i=nr(t,c,l),i!==null&&(ti(i,t,l,o),wa(i,t,l))}};function wh(t,i,o,l,c,h,M){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,h,M):i.prototype&&i.prototype.isPureReactComponent?!uo(o,l)||!uo(c,h):!0}function Ah(t,i,o){var l=!1,c=Ji,h=i.contextType;return typeof h=="object"&&h!==null?h=Wn(h):(c=Rn(i)?Ar:fn.current,l=i.contextTypes,h=(l=l!=null)?us(t,c):Ji),i=new i(o,h),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Ua,t.stateNode=i,i._reactInternals=t,l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=c,t.__reactInternalMemoizedMaskedChildContext=h),i}function Rh(t,i,o,l){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(o,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(o,l),i.state!==t&&Ua.enqueueReplaceState(i,i.state,null)}function Nu(t,i,o,l){var c=t.stateNode;c.props=o,c.state=t.memoizedState,c.refs={},Su(t);var h=i.contextType;typeof h=="object"&&h!==null?c.context=Wn(h):(h=Rn(i)?Ar:fn.current,c.context=us(t,h)),c.state=t.memoizedState,h=i.getDerivedStateFromProps,typeof h=="function"&&(Iu(t,i,h,o),c.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(i=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),i!==c.state&&Ua.enqueueReplaceState(c,c.state,null),Aa(t,o,c,l),c.state=t.memoizedState),typeof c.componentDidMount=="function"&&(t.flags|=4194308)}function _s(t,i){try{var o="",l=i;do o+=de(l),l=l.return;while(l);var c=o}catch(h){c=`
Error generating stack: `+h.message+`
`+h.stack}return{value:t,source:i,stack:c,digest:null}}function Fu(t,i,o){return{value:t,source:null,stack:o??null,digest:i??null}}function Ou(t,i){try{console.error(i.value)}catch(o){setTimeout(function(){throw o})}}var x_=typeof WeakMap=="function"?WeakMap:Map;function Ch(t,i,o){o=Ci(-1,o),o.tag=3,o.payload={element:null};var l=i.value;return o.callback=function(){za||(za=!0,Qu=l),Ou(t,i)},o}function Ph(t,i,o){o=Ci(-1,o),o.tag=3;var l=t.type.getDerivedStateFromError;if(typeof l=="function"){var c=i.value;o.payload=function(){return l(c)},o.callback=function(){Ou(t,i)}}var h=t.stateNode;return h!==null&&typeof h.componentDidCatch=="function"&&(o.callback=function(){Ou(t,i),typeof l!="function"&&(rr===null?rr=new Set([this]):rr.add(this));var M=i.stack;this.componentDidCatch(i.value,{componentStack:M!==null?M:""})}),o}function bh(t,i,o){var l=t.pingCache;if(l===null){l=t.pingCache=new x_;var c=new Set;l.set(i,c)}else c=l.get(i),c===void 0&&(c=new Set,l.set(i,c));c.has(o)||(c.add(o),t=U_.bind(null,t,i,o),i.then(t,t))}function Dh(t){do{var i;if((i=t.tag===13)&&(i=t.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return t;t=t.return}while(t!==null);return null}function Lh(t,i,o,l,c){return t.mode&1?(t.flags|=65536,t.lanes=c,t):(t===i?t.flags|=65536:(t.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(i=Ci(-1,1),i.tag=2,nr(o,i,1))),o.lanes|=1),t)}var y_=C.ReactCurrentOwner,Cn=!1;function yn(t,i,o,l){i.child=t===null?Qd(i,null,o,l):hs(i,t.child,o,l)}function Uh(t,i,o,l,c){o=o.render;var h=i.ref;return ms(i,c),l=Cu(t,i,o,l,h,c),o=Pu(),t!==null&&!Cn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~c,Pi(t,i,c)):(Ot&&o&&fu(i),i.flags|=1,yn(t,i,l,c),i.child)}function Ih(t,i,o,l,c){if(t===null){var h=o.type;return typeof h=="function"&&!sc(h)&&h.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(i.tag=15,i.type=h,Nh(t,i,h,l,c)):(t=Ya(o.type,null,l,i,i.mode,c),t.ref=i.ref,t.return=i,i.child=t)}if(h=t.child,!(t.lanes&c)){var M=h.memoizedProps;if(o=o.compare,o=o!==null?o:uo,o(M,l)&&t.ref===i.ref)return Pi(t,i,c)}return i.flags|=1,t=lr(h,l),t.ref=i.ref,t.return=i,i.child=t}function Nh(t,i,o,l,c){if(t!==null){var h=t.memoizedProps;if(uo(h,l)&&t.ref===i.ref)if(Cn=!1,i.pendingProps=l=h,(t.lanes&c)!==0)t.flags&131072&&(Cn=!0);else return i.lanes=t.lanes,Pi(t,i,c)}return ku(t,i,o,l,c)}function Fh(t,i,o){var l=i.pendingProps,c=l.children,h=t!==null?t.memoizedState:null;if(l.mode==="hidden")if(!(i.mode&1))i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Lt(xs,kn),kn|=o;else{if(!(o&1073741824))return t=h!==null?h.baseLanes|o:o,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:t,cachePool:null,transitions:null},i.updateQueue=null,Lt(xs,kn),kn|=t,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},l=h!==null?h.baseLanes:o,Lt(xs,kn),kn|=l}else h!==null?(l=h.baseLanes|o,i.memoizedState=null):l=o,Lt(xs,kn),kn|=l;return yn(t,i,c,o),i.child}function Oh(t,i){var o=i.ref;(t===null&&o!==null||t!==null&&t.ref!==o)&&(i.flags|=512,i.flags|=2097152)}function ku(t,i,o,l,c){var h=Rn(o)?Ar:fn.current;return h=us(i,h),ms(i,c),o=Cu(t,i,o,l,h,c),l=Pu(),t!==null&&!Cn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~c,Pi(t,i,c)):(Ot&&l&&fu(i),i.flags|=1,yn(t,i,o,c),i.child)}function kh(t,i,o,l,c){if(Rn(o)){var h=!0;_a(i)}else h=!1;if(ms(i,c),i.stateNode===null)Na(t,i),Ah(i,o,l),Nu(i,o,l,c),l=!0;else if(t===null){var M=i.stateNode,D=i.memoizedProps;M.props=D;var N=M.context,ee=o.contextType;typeof ee=="object"&&ee!==null?ee=Wn(ee):(ee=Rn(o)?Ar:fn.current,ee=us(i,ee));var _e=o.getDerivedStateFromProps,xe=typeof _e=="function"||typeof M.getSnapshotBeforeUpdate=="function";xe||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(D!==l||N!==ee)&&Rh(i,M,l,ee),tr=!1;var me=i.memoizedState;M.state=me,Aa(i,l,M,c),N=i.memoizedState,D!==l||me!==N||An.current||tr?(typeof _e=="function"&&(Iu(i,o,_e,l),N=i.memoizedState),(D=tr||wh(i,o,D,l,me,N,ee))?(xe||typeof M.UNSAFE_componentWillMount!="function"&&typeof M.componentWillMount!="function"||(typeof M.componentWillMount=="function"&&M.componentWillMount(),typeof M.UNSAFE_componentWillMount=="function"&&M.UNSAFE_componentWillMount()),typeof M.componentDidMount=="function"&&(i.flags|=4194308)):(typeof M.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=N),M.props=l,M.state=N,M.context=ee,l=D):(typeof M.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{M=i.stateNode,eh(t,i),D=i.memoizedProps,ee=i.type===i.elementType?D:Qn(i.type,D),M.props=ee,xe=i.pendingProps,me=M.context,N=o.contextType,typeof N=="object"&&N!==null?N=Wn(N):(N=Rn(o)?Ar:fn.current,N=us(i,N));var Le=o.getDerivedStateFromProps;(_e=typeof Le=="function"||typeof M.getSnapshotBeforeUpdate=="function")||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(D!==xe||me!==N)&&Rh(i,M,l,N),tr=!1,me=i.memoizedState,M.state=me,Aa(i,l,M,c);var ze=i.memoizedState;D!==xe||me!==ze||An.current||tr?(typeof Le=="function"&&(Iu(i,o,Le,l),ze=i.memoizedState),(ee=tr||wh(i,o,ee,l,me,ze,N)||!1)?(_e||typeof M.UNSAFE_componentWillUpdate!="function"&&typeof M.componentWillUpdate!="function"||(typeof M.componentWillUpdate=="function"&&M.componentWillUpdate(l,ze,N),typeof M.UNSAFE_componentWillUpdate=="function"&&M.UNSAFE_componentWillUpdate(l,ze,N)),typeof M.componentDidUpdate=="function"&&(i.flags|=4),typeof M.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof M.componentDidUpdate!="function"||D===t.memoizedProps&&me===t.memoizedState||(i.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||D===t.memoizedProps&&me===t.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=ze),M.props=l,M.state=ze,M.context=N,l=ee):(typeof M.componentDidUpdate!="function"||D===t.memoizedProps&&me===t.memoizedState||(i.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||D===t.memoizedProps&&me===t.memoizedState||(i.flags|=1024),l=!1)}return Bu(t,i,o,l,h,c)}function Bu(t,i,o,l,c,h){Oh(t,i);var M=(i.flags&128)!==0;if(!l&&!M)return c&&Gd(i,o,!1),Pi(t,i,h);l=i.stateNode,y_.current=i;var D=M&&typeof o.getDerivedStateFromError!="function"?null:l.render();return i.flags|=1,t!==null&&M?(i.child=hs(i,t.child,null,h),i.child=hs(i,null,D,h)):yn(t,i,D,h),i.memoizedState=l.state,c&&Gd(i,o,!0),i.child}function Bh(t){var i=t.stateNode;i.pendingContext?Hd(t,i.pendingContext,i.pendingContext!==i.context):i.context&&Hd(t,i.context,!1),Mu(t,i.containerInfo)}function zh(t,i,o,l,c){return ds(),mu(c),i.flags|=256,yn(t,i,o,l),i.child}var zu={dehydrated:null,treeContext:null,retryLane:0};function Hu(t){return{baseLanes:t,cachePool:null,transitions:null}}function Hh(t,i,o){var l=i.pendingProps,c=kt.current,h=!1,M=(i.flags&128)!==0,D;if((D=M)||(D=t!==null&&t.memoizedState===null?!1:(c&2)!==0),D?(h=!0,i.flags&=-129):(t===null||t.memoizedState!==null)&&(c|=1),Lt(kt,c&1),t===null)return pu(i),t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(i.mode&1?t.data==="$!"?i.lanes=8:i.lanes=1073741824:i.lanes=1,null):(M=l.children,t=l.fallback,h?(l=i.mode,h=i.child,M={mode:"hidden",children:M},!(l&1)&&h!==null?(h.childLanes=0,h.pendingProps=M):h=ja(M,l,0,null),t=Fr(t,l,o,null),h.return=i,t.return=i,h.sibling=t,i.child=h,i.child.memoizedState=Hu(o),i.memoizedState=zu,t):Vu(i,M));if(c=t.memoizedState,c!==null&&(D=c.dehydrated,D!==null))return S_(t,i,M,l,D,c,o);if(h){h=l.fallback,M=i.mode,c=t.child,D=c.sibling;var N={mode:"hidden",children:l.children};return!(M&1)&&i.child!==c?(l=i.child,l.childLanes=0,l.pendingProps=N,i.deletions=null):(l=lr(c,N),l.subtreeFlags=c.subtreeFlags&14680064),D!==null?h=lr(D,h):(h=Fr(h,M,o,null),h.flags|=2),h.return=i,l.return=i,l.sibling=h,i.child=l,l=h,h=i.child,M=t.child.memoizedState,M=M===null?Hu(o):{baseLanes:M.baseLanes|o,cachePool:null,transitions:M.transitions},h.memoizedState=M,h.childLanes=t.childLanes&~o,i.memoizedState=zu,l}return h=t.child,t=h.sibling,l=lr(h,{mode:"visible",children:l.children}),!(i.mode&1)&&(l.lanes=o),l.return=i,l.sibling=null,t!==null&&(o=i.deletions,o===null?(i.deletions=[t],i.flags|=16):o.push(t)),i.child=l,i.memoizedState=null,l}function Vu(t,i){return i=ja({mode:"visible",children:i},t.mode,0,null),i.return=t,t.child=i}function Ia(t,i,o,l){return l!==null&&mu(l),hs(i,t.child,null,o),t=Vu(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function S_(t,i,o,l,c,h,M){if(o)return i.flags&256?(i.flags&=-257,l=Fu(Error(n(422))),Ia(t,i,M,l)):i.memoizedState!==null?(i.child=t.child,i.flags|=128,null):(h=l.fallback,c=i.mode,l=ja({mode:"visible",children:l.children},c,0,null),h=Fr(h,c,M,null),h.flags|=2,l.return=i,h.return=i,l.sibling=h,i.child=l,i.mode&1&&hs(i,t.child,null,M),i.child.memoizedState=Hu(M),i.memoizedState=zu,h);if(!(i.mode&1))return Ia(t,i,M,null);if(c.data==="$!"){if(l=c.nextSibling&&c.nextSibling.dataset,l)var D=l.dgst;return l=D,h=Error(n(419)),l=Fu(h,l,void 0),Ia(t,i,M,l)}if(D=(M&t.childLanes)!==0,Cn||D){if(l=nn,l!==null){switch(M&-M){case 4:c=2;break;case 16:c=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:c=32;break;case 536870912:c=268435456;break;default:c=0}c=c&(l.suspendedLanes|M)?0:c,c!==0&&c!==h.retryLane&&(h.retryLane=c,Ri(t,c),ti(l,t,c,-1))}return rc(),l=Fu(Error(n(421))),Ia(t,i,M,l)}return c.data==="$?"?(i.flags|=128,i.child=t.child,i=I_.bind(null,t),c._reactRetry=i,null):(t=h.treeContext,On=Zi(c.nextSibling),Fn=i,Ot=!0,Zn=null,t!==null&&(Vn[Gn++]=wi,Vn[Gn++]=Ai,Vn[Gn++]=Rr,wi=t.id,Ai=t.overflow,Rr=i),i=Vu(i,l.children),i.flags|=4096,i)}function Vh(t,i,o){t.lanes|=i;var l=t.alternate;l!==null&&(l.lanes|=i),xu(t.return,i,o)}function Gu(t,i,o,l,c){var h=t.memoizedState;h===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:o,tailMode:c}:(h.isBackwards=i,h.rendering=null,h.renderingStartTime=0,h.last=l,h.tail=o,h.tailMode=c)}function Gh(t,i,o){var l=i.pendingProps,c=l.revealOrder,h=l.tail;if(yn(t,i,l.children,o),l=kt.current,l&2)l=l&1|2,i.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Vh(t,o,i);else if(t.tag===19)Vh(t,o,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}l&=1}if(Lt(kt,l),!(i.mode&1))i.memoizedState=null;else switch(c){case"forwards":for(o=i.child,c=null;o!==null;)t=o.alternate,t!==null&&Ra(t)===null&&(c=o),o=o.sibling;o=c,o===null?(c=i.child,i.child=null):(c=o.sibling,o.sibling=null),Gu(i,!1,c,o,h);break;case"backwards":for(o=null,c=i.child,i.child=null;c!==null;){if(t=c.alternate,t!==null&&Ra(t)===null){i.child=c;break}t=c.sibling,c.sibling=o,o=c,c=t}Gu(i,!0,o,null,h);break;case"together":Gu(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Na(t,i){!(i.mode&1)&&t!==null&&(t.alternate=null,i.alternate=null,i.flags|=2)}function Pi(t,i,o){if(t!==null&&(i.dependencies=t.dependencies),Lr|=i.lanes,!(o&i.childLanes))return null;if(t!==null&&i.child!==t.child)throw Error(n(153));if(i.child!==null){for(t=i.child,o=lr(t,t.pendingProps),i.child=o,o.return=i;t.sibling!==null;)t=t.sibling,o=o.sibling=lr(t,t.pendingProps),o.return=i;o.sibling=null}return i.child}function M_(t,i,o){switch(i.tag){case 3:Bh(i),ds();break;case 5:ih(i);break;case 1:Rn(i.type)&&_a(i);break;case 4:Mu(i,i.stateNode.containerInfo);break;case 10:var l=i.type._context,c=i.memoizedProps.value;Lt(Ea,l._currentValue),l._currentValue=c;break;case 13:if(l=i.memoizedState,l!==null)return l.dehydrated!==null?(Lt(kt,kt.current&1),i.flags|=128,null):o&i.child.childLanes?Hh(t,i,o):(Lt(kt,kt.current&1),t=Pi(t,i,o),t!==null?t.sibling:null);Lt(kt,kt.current&1);break;case 19:if(l=(o&i.childLanes)!==0,t.flags&128){if(l)return Gh(t,i,o);i.flags|=128}if(c=i.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),Lt(kt,kt.current),l)break;return null;case 22:case 23:return i.lanes=0,Fh(t,i,o)}return Pi(t,i,o)}var Wh,Wu,Xh,Yh;Wh=function(t,i){for(var o=i.child;o!==null;){if(o.tag===5||o.tag===6)t.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},Wu=function(){},Xh=function(t,i,o,l){var c=t.memoizedProps;if(c!==l){t=i.stateNode,br(fi.current);var h=null;switch(o){case"input":c=O(t,c),l=O(t,l),h=[];break;case"select":c=re({},c,{value:void 0}),l=re({},l,{value:void 0}),h=[];break;case"textarea":c=E(t,c),l=E(t,l),h=[];break;default:typeof c.onClick!="function"&&typeof l.onClick=="function"&&(t.onclick=pa)}ct(o,l);var M;o=null;for(ee in c)if(!l.hasOwnProperty(ee)&&c.hasOwnProperty(ee)&&c[ee]!=null)if(ee==="style"){var D=c[ee];for(M in D)D.hasOwnProperty(M)&&(o||(o={}),o[M]="")}else ee!=="dangerouslySetInnerHTML"&&ee!=="children"&&ee!=="suppressContentEditableWarning"&&ee!=="suppressHydrationWarning"&&ee!=="autoFocus"&&(a.hasOwnProperty(ee)?h||(h=[]):(h=h||[]).push(ee,null));for(ee in l){var N=l[ee];if(D=c!=null?c[ee]:void 0,l.hasOwnProperty(ee)&&N!==D&&(N!=null||D!=null))if(ee==="style")if(D){for(M in D)!D.hasOwnProperty(M)||N&&N.hasOwnProperty(M)||(o||(o={}),o[M]="");for(M in N)N.hasOwnProperty(M)&&D[M]!==N[M]&&(o||(o={}),o[M]=N[M])}else o||(h||(h=[]),h.push(ee,o)),o=N;else ee==="dangerouslySetInnerHTML"?(N=N?N.__html:void 0,D=D?D.__html:void 0,N!=null&&D!==N&&(h=h||[]).push(ee,N)):ee==="children"?typeof N!="string"&&typeof N!="number"||(h=h||[]).push(ee,""+N):ee!=="suppressContentEditableWarning"&&ee!=="suppressHydrationWarning"&&(a.hasOwnProperty(ee)?(N!=null&&ee==="onScroll"&&It("scroll",t),h||D===N||(h=[])):(h=h||[]).push(ee,N))}o&&(h=h||[]).push("style",o);var ee=h;(i.updateQueue=ee)&&(i.flags|=4)}},Yh=function(t,i,o,l){o!==l&&(i.flags|=4)};function wo(t,i){if(!Ot)switch(t.tailMode){case"hidden":i=t.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?t.tail=null:o.sibling=null;break;case"collapsed":o=t.tail;for(var l=null;o!==null;)o.alternate!==null&&(l=o),o=o.sibling;l===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function hn(t){var i=t.alternate!==null&&t.alternate.child===t.child,o=0,l=0;if(i)for(var c=t.child;c!==null;)o|=c.lanes|c.childLanes,l|=c.subtreeFlags&14680064,l|=c.flags&14680064,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)o|=c.lanes|c.childLanes,l|=c.subtreeFlags,l|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=l,t.childLanes=o,i}function E_(t,i,o){var l=i.pendingProps;switch(du(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return hn(i),null;case 1:return Rn(i.type)&&ga(),hn(i),null;case 3:return l=i.stateNode,gs(),Nt(An),Nt(fn),wu(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(t===null||t.child===null)&&(Sa(i)?i.flags|=4:t===null||t.memoizedState.isDehydrated&&!(i.flags&256)||(i.flags|=1024,Zn!==null&&(tc(Zn),Zn=null))),Wu(t,i),hn(i),null;case 5:Eu(i);var c=br(yo.current);if(o=i.type,t!==null&&i.stateNode!=null)Xh(t,i,o,l,c),t.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!l){if(i.stateNode===null)throw Error(n(166));return hn(i),null}if(t=br(fi.current),Sa(i)){l=i.stateNode,o=i.type;var h=i.memoizedProps;switch(l[ci]=i,l[mo]=h,t=(i.mode&1)!==0,o){case"dialog":It("cancel",l),It("close",l);break;case"iframe":case"object":case"embed":It("load",l);break;case"video":case"audio":for(c=0;c<fo.length;c++)It(fo[c],l);break;case"source":It("error",l);break;case"img":case"image":case"link":It("error",l),It("load",l);break;case"details":It("toggle",l);break;case"input":_n(l,h),It("invalid",l);break;case"select":l._wrapperState={wasMultiple:!!h.multiple},It("invalid",l);break;case"textarea":Z(l,h),It("invalid",l)}ct(o,h),c=null;for(var M in h)if(h.hasOwnProperty(M)){var D=h[M];M==="children"?typeof D=="string"?l.textContent!==D&&(h.suppressHydrationWarning!==!0&&ha(l.textContent,D,t),c=["children",D]):typeof D=="number"&&l.textContent!==""+D&&(h.suppressHydrationWarning!==!0&&ha(l.textContent,D,t),c=["children",""+D]):a.hasOwnProperty(M)&&D!=null&&M==="onScroll"&&It("scroll",l)}switch(o){case"input":At(l),Ye(l,h,!0);break;case"textarea":At(l),ge(l);break;case"select":case"option":break;default:typeof h.onClick=="function"&&(l.onclick=pa)}l=c,i.updateQueue=l,l!==null&&(i.flags|=4)}else{M=c.nodeType===9?c:c.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=ue(o)),t==="http://www.w3.org/1999/xhtml"?o==="script"?(t=M.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof l.is=="string"?t=M.createElement(o,{is:l.is}):(t=M.createElement(o),o==="select"&&(M=t,l.multiple?M.multiple=!0:l.size&&(M.size=l.size))):t=M.createElementNS(t,o),t[ci]=i,t[mo]=l,Wh(t,i,!1,!1),i.stateNode=t;e:{switch(M=nt(o,l),o){case"dialog":It("cancel",t),It("close",t),c=l;break;case"iframe":case"object":case"embed":It("load",t),c=l;break;case"video":case"audio":for(c=0;c<fo.length;c++)It(fo[c],t);c=l;break;case"source":It("error",t),c=l;break;case"img":case"image":case"link":It("error",t),It("load",t),c=l;break;case"details":It("toggle",t),c=l;break;case"input":_n(t,l),c=O(t,l),It("invalid",t);break;case"option":c=l;break;case"select":t._wrapperState={wasMultiple:!!l.multiple},c=re({},l,{value:void 0}),It("invalid",t);break;case"textarea":Z(t,l),c=E(t,l),It("invalid",t);break;default:c=l}ct(o,c),D=c;for(h in D)if(D.hasOwnProperty(h)){var N=D[h];h==="style"?Je(t,N):h==="dangerouslySetInnerHTML"?(N=N?N.__html:void 0,N!=null&&Ne(t,N)):h==="children"?typeof N=="string"?(o!=="textarea"||N!=="")&&lt(t,N):typeof N=="number"&&lt(t,""+N):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(a.hasOwnProperty(h)?N!=null&&h==="onScroll"&&It("scroll",t):N!=null&&L(t,h,N,M))}switch(o){case"input":At(t),Ye(t,l,!1);break;case"textarea":At(t),ge(t);break;case"option":l.value!=null&&t.setAttribute("value",""+Te(l.value));break;case"select":t.multiple=!!l.multiple,h=l.value,h!=null?b(t,!!l.multiple,h,!1):l.defaultValue!=null&&b(t,!!l.multiple,l.defaultValue,!0);break;default:typeof c.onClick=="function"&&(t.onclick=pa)}switch(o){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}}l&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return hn(i),null;case 6:if(t&&i.stateNode!=null)Yh(t,i,t.memoizedProps,l);else{if(typeof l!="string"&&i.stateNode===null)throw Error(n(166));if(o=br(yo.current),br(fi.current),Sa(i)){if(l=i.stateNode,o=i.memoizedProps,l[ci]=i,(h=l.nodeValue!==o)&&(t=Fn,t!==null))switch(t.tag){case 3:ha(l.nodeValue,o,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ha(l.nodeValue,o,(t.mode&1)!==0)}h&&(i.flags|=4)}else l=(o.nodeType===9?o:o.ownerDocument).createTextNode(l),l[ci]=i,i.stateNode=l}return hn(i),null;case 13:if(Nt(kt),l=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ot&&On!==null&&i.mode&1&&!(i.flags&128))Kd(),ds(),i.flags|=98560,h=!1;else if(h=Sa(i),l!==null&&l.dehydrated!==null){if(t===null){if(!h)throw Error(n(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(n(317));h[ci]=i}else ds(),!(i.flags&128)&&(i.memoizedState=null),i.flags|=4;hn(i),h=!1}else Zn!==null&&(tc(Zn),Zn=null),h=!0;if(!h)return i.flags&65536?i:null}return i.flags&128?(i.lanes=o,i):(l=l!==null,l!==(t!==null&&t.memoizedState!==null)&&l&&(i.child.flags|=8192,i.mode&1&&(t===null||kt.current&1?Kt===0&&(Kt=3):rc())),i.updateQueue!==null&&(i.flags|=4),hn(i),null);case 4:return gs(),Wu(t,i),t===null&&ho(i.stateNode.containerInfo),hn(i),null;case 10:return vu(i.type._context),hn(i),null;case 17:return Rn(i.type)&&ga(),hn(i),null;case 19:if(Nt(kt),h=i.memoizedState,h===null)return hn(i),null;if(l=(i.flags&128)!==0,M=h.rendering,M===null)if(l)wo(h,!1);else{if(Kt!==0||t!==null&&t.flags&128)for(t=i.child;t!==null;){if(M=Ra(t),M!==null){for(i.flags|=128,wo(h,!1),l=M.updateQueue,l!==null&&(i.updateQueue=l,i.flags|=4),i.subtreeFlags=0,l=o,o=i.child;o!==null;)h=o,t=l,h.flags&=14680066,M=h.alternate,M===null?(h.childLanes=0,h.lanes=t,h.child=null,h.subtreeFlags=0,h.memoizedProps=null,h.memoizedState=null,h.updateQueue=null,h.dependencies=null,h.stateNode=null):(h.childLanes=M.childLanes,h.lanes=M.lanes,h.child=M.child,h.subtreeFlags=0,h.deletions=null,h.memoizedProps=M.memoizedProps,h.memoizedState=M.memoizedState,h.updateQueue=M.updateQueue,h.type=M.type,t=M.dependencies,h.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),o=o.sibling;return Lt(kt,kt.current&1|2),i.child}t=t.sibling}h.tail!==null&&K()>ys&&(i.flags|=128,l=!0,wo(h,!1),i.lanes=4194304)}else{if(!l)if(t=Ra(M),t!==null){if(i.flags|=128,l=!0,o=t.updateQueue,o!==null&&(i.updateQueue=o,i.flags|=4),wo(h,!0),h.tail===null&&h.tailMode==="hidden"&&!M.alternate&&!Ot)return hn(i),null}else 2*K()-h.renderingStartTime>ys&&o!==1073741824&&(i.flags|=128,l=!0,wo(h,!1),i.lanes=4194304);h.isBackwards?(M.sibling=i.child,i.child=M):(o=h.last,o!==null?o.sibling=M:i.child=M,h.last=M)}return h.tail!==null?(i=h.tail,h.rendering=i,h.tail=i.sibling,h.renderingStartTime=K(),i.sibling=null,o=kt.current,Lt(kt,l?o&1|2:o&1),i):(hn(i),null);case 22:case 23:return ic(),l=i.memoizedState!==null,t!==null&&t.memoizedState!==null!==l&&(i.flags|=8192),l&&i.mode&1?kn&1073741824&&(hn(i),i.subtreeFlags&6&&(i.flags|=8192)):hn(i),null;case 24:return null;case 25:return null}throw Error(n(156,i.tag))}function T_(t,i){switch(du(i),i.tag){case 1:return Rn(i.type)&&ga(),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return gs(),Nt(An),Nt(fn),wu(),t=i.flags,t&65536&&!(t&128)?(i.flags=t&-65537|128,i):null;case 5:return Eu(i),null;case 13:if(Nt(kt),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(n(340));ds()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return Nt(kt),null;case 4:return gs(),null;case 10:return vu(i.type._context),null;case 22:case 23:return ic(),null;case 24:return null;default:return null}}var Fa=!1,pn=!1,w_=typeof WeakSet=="function"?WeakSet:Set,Fe=null;function vs(t,i){var o=t.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(l){Gt(t,i,l)}else o.current=null}function Xu(t,i,o){try{o()}catch(l){Gt(t,i,l)}}var jh=!1;function A_(t,i){if(iu=na,t=wd(),Kl(t)){if("selectionStart"in t)var o={start:t.selectionStart,end:t.selectionEnd};else e:{o=(o=t.ownerDocument)&&o.defaultView||window;var l=o.getSelection&&o.getSelection();if(l&&l.rangeCount!==0){o=l.anchorNode;var c=l.anchorOffset,h=l.focusNode;l=l.focusOffset;try{o.nodeType,h.nodeType}catch{o=null;break e}var M=0,D=-1,N=-1,ee=0,_e=0,xe=t,me=null;t:for(;;){for(var Le;xe!==o||c!==0&&xe.nodeType!==3||(D=M+c),xe!==h||l!==0&&xe.nodeType!==3||(N=M+l),xe.nodeType===3&&(M+=xe.nodeValue.length),(Le=xe.firstChild)!==null;)me=xe,xe=Le;for(;;){if(xe===t)break t;if(me===o&&++ee===c&&(D=M),me===h&&++_e===l&&(N=M),(Le=xe.nextSibling)!==null)break;xe=me,me=xe.parentNode}xe=Le}o=D===-1||N===-1?null:{start:D,end:N}}else o=null}o=o||{start:0,end:0}}else o=null;for(ru={focusedElem:t,selectionRange:o},na=!1,Fe=i;Fe!==null;)if(i=Fe,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,Fe=t;else for(;Fe!==null;){i=Fe;try{var ze=i.alternate;if(i.flags&1024)switch(i.tag){case 0:case 11:case 15:break;case 1:if(ze!==null){var Ve=ze.memoizedProps,Wt=ze.memoizedState,q=i.stateNode,H=q.getSnapshotBeforeUpdate(i.elementType===i.type?Ve:Qn(i.type,Ve),Wt);q.__reactInternalSnapshotBeforeUpdate=H}break;case 3:var $=i.stateNode.containerInfo;$.nodeType===1?$.textContent="":$.nodeType===9&&$.documentElement&&$.removeChild($.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(Ee){Gt(i,i.return,Ee)}if(t=i.sibling,t!==null){t.return=i.return,Fe=t;break}Fe=i.return}return ze=jh,jh=!1,ze}function Ao(t,i,o){var l=i.updateQueue;if(l=l!==null?l.lastEffect:null,l!==null){var c=l=l.next;do{if((c.tag&t)===t){var h=c.destroy;c.destroy=void 0,h!==void 0&&Xu(i,o,h)}c=c.next}while(c!==l)}}function Oa(t,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&t)===t){var l=o.create;o.destroy=l()}o=o.next}while(o!==i)}}function Yu(t){var i=t.ref;if(i!==null){var o=t.stateNode;switch(t.tag){case 5:t=o;break;default:t=o}typeof i=="function"?i(t):i.current=t}}function qh(t){var i=t.alternate;i!==null&&(t.alternate=null,qh(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&(delete i[ci],delete i[mo],delete i[lu],delete i[l_],delete i[u_])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Kh(t){return t.tag===5||t.tag===3||t.tag===4}function $h(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Kh(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ju(t,i,o){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?o.nodeType===8?o.parentNode.insertBefore(t,i):o.insertBefore(t,i):(o.nodeType===8?(i=o.parentNode,i.insertBefore(t,o)):(i=o,i.appendChild(t)),o=o._reactRootContainer,o!=null||i.onclick!==null||(i.onclick=pa));else if(l!==4&&(t=t.child,t!==null))for(ju(t,i,o),t=t.sibling;t!==null;)ju(t,i,o),t=t.sibling}function qu(t,i,o){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?o.insertBefore(t,i):o.appendChild(t);else if(l!==4&&(t=t.child,t!==null))for(qu(t,i,o),t=t.sibling;t!==null;)qu(t,i,o),t=t.sibling}var an=null,Jn=!1;function ir(t,i,o){for(o=o.child;o!==null;)Zh(t,i,o),o=o.sibling}function Zh(t,i,o){if(He&&typeof He.onCommitFiberUnmount=="function")try{He.onCommitFiberUnmount(Qe,o)}catch{}switch(o.tag){case 5:pn||vs(o,i);case 6:var l=an,c=Jn;an=null,ir(t,i,o),an=l,Jn=c,an!==null&&(Jn?(t=an,o=o.stateNode,t.nodeType===8?t.parentNode.removeChild(o):t.removeChild(o)):an.removeChild(o.stateNode));break;case 18:an!==null&&(Jn?(t=an,o=o.stateNode,t.nodeType===8?au(t.parentNode,o):t.nodeType===1&&au(t,o),io(t)):au(an,o.stateNode));break;case 4:l=an,c=Jn,an=o.stateNode.containerInfo,Jn=!0,ir(t,i,o),an=l,Jn=c;break;case 0:case 11:case 14:case 15:if(!pn&&(l=o.updateQueue,l!==null&&(l=l.lastEffect,l!==null))){c=l=l.next;do{var h=c,M=h.destroy;h=h.tag,M!==void 0&&(h&2||h&4)&&Xu(o,i,M),c=c.next}while(c!==l)}ir(t,i,o);break;case 1:if(!pn&&(vs(o,i),l=o.stateNode,typeof l.componentWillUnmount=="function"))try{l.props=o.memoizedProps,l.state=o.memoizedState,l.componentWillUnmount()}catch(D){Gt(o,i,D)}ir(t,i,o);break;case 21:ir(t,i,o);break;case 22:o.mode&1?(pn=(l=pn)||o.memoizedState!==null,ir(t,i,o),pn=l):ir(t,i,o);break;default:ir(t,i,o)}}function Qh(t){var i=t.updateQueue;if(i!==null){t.updateQueue=null;var o=t.stateNode;o===null&&(o=t.stateNode=new w_),i.forEach(function(l){var c=N_.bind(null,t,l);o.has(l)||(o.add(l),l.then(c,c))})}}function ei(t,i){var o=i.deletions;if(o!==null)for(var l=0;l<o.length;l++){var c=o[l];try{var h=t,M=i,D=M;e:for(;D!==null;){switch(D.tag){case 5:an=D.stateNode,Jn=!1;break e;case 3:an=D.stateNode.containerInfo,Jn=!0;break e;case 4:an=D.stateNode.containerInfo,Jn=!0;break e}D=D.return}if(an===null)throw Error(n(160));Zh(h,M,c),an=null,Jn=!1;var N=c.alternate;N!==null&&(N.return=null),c.return=null}catch(ee){Gt(c,i,ee)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Jh(i,t),i=i.sibling}function Jh(t,i){var o=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(ei(i,t),hi(t),l&4){try{Ao(3,t,t.return),Oa(3,t)}catch(Ve){Gt(t,t.return,Ve)}try{Ao(5,t,t.return)}catch(Ve){Gt(t,t.return,Ve)}}break;case 1:ei(i,t),hi(t),l&512&&o!==null&&vs(o,o.return);break;case 5:if(ei(i,t),hi(t),l&512&&o!==null&&vs(o,o.return),t.flags&32){var c=t.stateNode;try{lt(c,"")}catch(Ve){Gt(t,t.return,Ve)}}if(l&4&&(c=t.stateNode,c!=null)){var h=t.memoizedProps,M=o!==null?o.memoizedProps:h,D=t.type,N=t.updateQueue;if(t.updateQueue=null,N!==null)try{D==="input"&&h.type==="radio"&&h.name!=null&&ht(c,h),nt(D,M);var ee=nt(D,h);for(M=0;M<N.length;M+=2){var _e=N[M],xe=N[M+1];_e==="style"?Je(c,xe):_e==="dangerouslySetInnerHTML"?Ne(c,xe):_e==="children"?lt(c,xe):L(c,_e,xe,ee)}switch(D){case"input":ut(c,h);break;case"textarea":pe(c,h);break;case"select":var me=c._wrapperState.wasMultiple;c._wrapperState.wasMultiple=!!h.multiple;var Le=h.value;Le!=null?b(c,!!h.multiple,Le,!1):me!==!!h.multiple&&(h.defaultValue!=null?b(c,!!h.multiple,h.defaultValue,!0):b(c,!!h.multiple,h.multiple?[]:"",!1))}c[mo]=h}catch(Ve){Gt(t,t.return,Ve)}}break;case 6:if(ei(i,t),hi(t),l&4){if(t.stateNode===null)throw Error(n(162));c=t.stateNode,h=t.memoizedProps;try{c.nodeValue=h}catch(Ve){Gt(t,t.return,Ve)}}break;case 3:if(ei(i,t),hi(t),l&4&&o!==null&&o.memoizedState.isDehydrated)try{io(i.containerInfo)}catch(Ve){Gt(t,t.return,Ve)}break;case 4:ei(i,t),hi(t);break;case 13:ei(i,t),hi(t),c=t.child,c.flags&8192&&(h=c.memoizedState!==null,c.stateNode.isHidden=h,!h||c.alternate!==null&&c.alternate.memoizedState!==null||(Zu=K())),l&4&&Qh(t);break;case 22:if(_e=o!==null&&o.memoizedState!==null,t.mode&1?(pn=(ee=pn)||_e,ei(i,t),pn=ee):ei(i,t),hi(t),l&8192){if(ee=t.memoizedState!==null,(t.stateNode.isHidden=ee)&&!_e&&t.mode&1)for(Fe=t,_e=t.child;_e!==null;){for(xe=Fe=_e;Fe!==null;){switch(me=Fe,Le=me.child,me.tag){case 0:case 11:case 14:case 15:Ao(4,me,me.return);break;case 1:vs(me,me.return);var ze=me.stateNode;if(typeof ze.componentWillUnmount=="function"){l=me,o=me.return;try{i=l,ze.props=i.memoizedProps,ze.state=i.memoizedState,ze.componentWillUnmount()}catch(Ve){Gt(l,o,Ve)}}break;case 5:vs(me,me.return);break;case 22:if(me.memoizedState!==null){np(xe);continue}}Le!==null?(Le.return=me,Fe=Le):np(xe)}_e=_e.sibling}e:for(_e=null,xe=t;;){if(xe.tag===5){if(_e===null){_e=xe;try{c=xe.stateNode,ee?(h=c.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none"):(D=xe.stateNode,N=xe.memoizedProps.style,M=N!=null&&N.hasOwnProperty("display")?N.display:null,D.style.display=qe("display",M))}catch(Ve){Gt(t,t.return,Ve)}}}else if(xe.tag===6){if(_e===null)try{xe.stateNode.nodeValue=ee?"":xe.memoizedProps}catch(Ve){Gt(t,t.return,Ve)}}else if((xe.tag!==22&&xe.tag!==23||xe.memoizedState===null||xe===t)&&xe.child!==null){xe.child.return=xe,xe=xe.child;continue}if(xe===t)break e;for(;xe.sibling===null;){if(xe.return===null||xe.return===t)break e;_e===xe&&(_e=null),xe=xe.return}_e===xe&&(_e=null),xe.sibling.return=xe.return,xe=xe.sibling}}break;case 19:ei(i,t),hi(t),l&4&&Qh(t);break;case 21:break;default:ei(i,t),hi(t)}}function hi(t){var i=t.flags;if(i&2){try{e:{for(var o=t.return;o!==null;){if(Kh(o)){var l=o;break e}o=o.return}throw Error(n(160))}switch(l.tag){case 5:var c=l.stateNode;l.flags&32&&(lt(c,""),l.flags&=-33);var h=$h(t);qu(t,h,c);break;case 3:case 4:var M=l.stateNode.containerInfo,D=$h(t);ju(t,D,M);break;default:throw Error(n(161))}}catch(N){Gt(t,t.return,N)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function R_(t,i,o){Fe=t,ep(t)}function ep(t,i,o){for(var l=(t.mode&1)!==0;Fe!==null;){var c=Fe,h=c.child;if(c.tag===22&&l){var M=c.memoizedState!==null||Fa;if(!M){var D=c.alternate,N=D!==null&&D.memoizedState!==null||pn;D=Fa;var ee=pn;if(Fa=M,(pn=N)&&!ee)for(Fe=c;Fe!==null;)M=Fe,N=M.child,M.tag===22&&M.memoizedState!==null?ip(c):N!==null?(N.return=M,Fe=N):ip(c);for(;h!==null;)Fe=h,ep(h),h=h.sibling;Fe=c,Fa=D,pn=ee}tp(t)}else c.subtreeFlags&8772&&h!==null?(h.return=c,Fe=h):tp(t)}}function tp(t){for(;Fe!==null;){var i=Fe;if(i.flags&8772){var o=i.alternate;try{if(i.flags&8772)switch(i.tag){case 0:case 11:case 15:pn||Oa(5,i);break;case 1:var l=i.stateNode;if(i.flags&4&&!pn)if(o===null)l.componentDidMount();else{var c=i.elementType===i.type?o.memoizedProps:Qn(i.type,o.memoizedProps);l.componentDidUpdate(c,o.memoizedState,l.__reactInternalSnapshotBeforeUpdate)}var h=i.updateQueue;h!==null&&nh(i,h,l);break;case 3:var M=i.updateQueue;if(M!==null){if(o=null,i.child!==null)switch(i.child.tag){case 5:o=i.child.stateNode;break;case 1:o=i.child.stateNode}nh(i,M,o)}break;case 5:var D=i.stateNode;if(o===null&&i.flags&4){o=D;var N=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":N.autoFocus&&o.focus();break;case"img":N.src&&(o.src=N.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var ee=i.alternate;if(ee!==null){var _e=ee.memoizedState;if(_e!==null){var xe=_e.dehydrated;xe!==null&&io(xe)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}pn||i.flags&512&&Yu(i)}catch(me){Gt(i,i.return,me)}}if(i===t){Fe=null;break}if(o=i.sibling,o!==null){o.return=i.return,Fe=o;break}Fe=i.return}}function np(t){for(;Fe!==null;){var i=Fe;if(i===t){Fe=null;break}var o=i.sibling;if(o!==null){o.return=i.return,Fe=o;break}Fe=i.return}}function ip(t){for(;Fe!==null;){var i=Fe;try{switch(i.tag){case 0:case 11:case 15:var o=i.return;try{Oa(4,i)}catch(N){Gt(i,o,N)}break;case 1:var l=i.stateNode;if(typeof l.componentDidMount=="function"){var c=i.return;try{l.componentDidMount()}catch(N){Gt(i,c,N)}}var h=i.return;try{Yu(i)}catch(N){Gt(i,h,N)}break;case 5:var M=i.return;try{Yu(i)}catch(N){Gt(i,M,N)}}}catch(N){Gt(i,i.return,N)}if(i===t){Fe=null;break}var D=i.sibling;if(D!==null){D.return=i.return,Fe=D;break}Fe=i.return}}var C_=Math.ceil,ka=C.ReactCurrentDispatcher,Ku=C.ReactCurrentOwner,Yn=C.ReactCurrentBatchConfig,yt=0,nn=null,Xt=null,ln=0,kn=0,xs=Qi(0),Kt=0,Ro=null,Lr=0,Ba=0,$u=0,Co=null,Pn=null,Zu=0,ys=1/0,bi=null,za=!1,Qu=null,rr=null,Ha=!1,sr=null,Va=0,Po=0,Ju=null,Ga=-1,Wa=0;function Sn(){return yt&6?K():Ga!==-1?Ga:Ga=K()}function or(t){return t.mode&1?yt&2&&ln!==0?ln&-ln:f_.transition!==null?(Wa===0&&(Wa=bt()),Wa):(t=xt,t!==0||(t=window.event,t=t===void 0?16:sd(t.type)),t):1}function ti(t,i,o,l){if(50<Po)throw Po=0,Ju=null,Error(n(185));Jt(t,o,l),(!(yt&2)||t!==nn)&&(t===nn&&(!(yt&2)&&(Ba|=o),Kt===4&&ar(t,ln)),bn(t,l),o===1&&yt===0&&!(i.mode&1)&&(ys=K()+500,va&&er()))}function bn(t,i){var o=t.callbackNode;xn(t,i);var l=un(t,t===nn?ln:0);if(l===0)o!==null&&T(o),t.callbackNode=null,t.callbackPriority=0;else if(i=l&-l,t.callbackPriority!==i){if(o!=null&&T(o),i===1)t.tag===0?c_(sp.bind(null,t)):Wd(sp.bind(null,t)),o_(function(){!(yt&6)&&er()}),o=null;else{switch(ui(l)){case 1:o=ye;break;case 4:o=Re;break;case 16:o=De;break;case 536870912:o=et;break;default:o=De}o=hp(o,rp.bind(null,t))}t.callbackPriority=i,t.callbackNode=o}}function rp(t,i){if(Ga=-1,Wa=0,yt&6)throw Error(n(327));var o=t.callbackNode;if(Ss()&&t.callbackNode!==o)return null;var l=un(t,t===nn?ln:0);if(l===0)return null;if(l&30||l&t.expiredLanes||i)i=Xa(t,l);else{i=l;var c=yt;yt|=2;var h=ap();(nn!==t||ln!==i)&&(bi=null,ys=K()+500,Ir(t,i));do try{D_();break}catch(D){op(t,D)}while(!0);_u(),ka.current=h,yt=c,Xt!==null?i=0:(nn=null,ln=0,i=Kt)}if(i!==0){if(i===2&&(c=Mi(t),c!==0&&(l=c,i=ec(t,c))),i===1)throw o=Ro,Ir(t,0),ar(t,l),bn(t,K()),o;if(i===6)ar(t,l);else{if(c=t.current.alternate,!(l&30)&&!P_(c)&&(i=Xa(t,l),i===2&&(h=Mi(t),h!==0&&(l=h,i=ec(t,h))),i===1))throw o=Ro,Ir(t,0),ar(t,l),bn(t,K()),o;switch(t.finishedWork=c,t.finishedLanes=l,i){case 0:case 1:throw Error(n(345));case 2:Nr(t,Pn,bi);break;case 3:if(ar(t,l),(l&130023424)===l&&(i=Zu+500-K(),10<i)){if(un(t,0)!==0)break;if(c=t.suspendedLanes,(c&l)!==l){Sn(),t.pingedLanes|=t.suspendedLanes&c;break}t.timeoutHandle=ou(Nr.bind(null,t,Pn,bi),i);break}Nr(t,Pn,bi);break;case 4:if(ar(t,l),(l&4194240)===l)break;for(i=t.eventTimes,c=-1;0<l;){var M=31-rt(l);h=1<<M,M=i[M],M>c&&(c=M),l&=~h}if(l=c,l=K()-l,l=(120>l?120:480>l?480:1080>l?1080:1920>l?1920:3e3>l?3e3:4320>l?4320:1960*C_(l/1960))-l,10<l){t.timeoutHandle=ou(Nr.bind(null,t,Pn,bi),l);break}Nr(t,Pn,bi);break;case 5:Nr(t,Pn,bi);break;default:throw Error(n(329))}}}return bn(t,K()),t.callbackNode===o?rp.bind(null,t):null}function ec(t,i){var o=Co;return t.current.memoizedState.isDehydrated&&(Ir(t,i).flags|=256),t=Xa(t,i),t!==2&&(i=Pn,Pn=o,i!==null&&tc(i)),t}function tc(t){Pn===null?Pn=t:Pn.push.apply(Pn,t)}function P_(t){for(var i=t;;){if(i.flags&16384){var o=i.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var l=0;l<o.length;l++){var c=o[l],h=c.getSnapshot;c=c.value;try{if(!$n(h(),c))return!1}catch{return!1}}}if(o=i.child,i.subtreeFlags&16384&&o!==null)o.return=i,i=o;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function ar(t,i){for(i&=~$u,i&=~Ba,t.suspendedLanes|=i,t.pingedLanes&=~i,t=t.expirationTimes;0<i;){var o=31-rt(i),l=1<<o;t[o]=-1,i&=~l}}function sp(t){if(yt&6)throw Error(n(327));Ss();var i=un(t,0);if(!(i&1))return bn(t,K()),null;var o=Xa(t,i);if(t.tag!==0&&o===2){var l=Mi(t);l!==0&&(i=l,o=ec(t,l))}if(o===1)throw o=Ro,Ir(t,0),ar(t,i),bn(t,K()),o;if(o===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=i,Nr(t,Pn,bi),bn(t,K()),null}function nc(t,i){var o=yt;yt|=1;try{return t(i)}finally{yt=o,yt===0&&(ys=K()+500,va&&er())}}function Ur(t){sr!==null&&sr.tag===0&&!(yt&6)&&Ss();var i=yt;yt|=1;var o=Yn.transition,l=xt;try{if(Yn.transition=null,xt=1,t)return t()}finally{xt=l,Yn.transition=o,yt=i,!(yt&6)&&er()}}function ic(){kn=xs.current,Nt(xs)}function Ir(t,i){t.finishedWork=null,t.finishedLanes=0;var o=t.timeoutHandle;if(o!==-1&&(t.timeoutHandle=-1,s_(o)),Xt!==null)for(o=Xt.return;o!==null;){var l=o;switch(du(l),l.tag){case 1:l=l.type.childContextTypes,l!=null&&ga();break;case 3:gs(),Nt(An),Nt(fn),wu();break;case 5:Eu(l);break;case 4:gs();break;case 13:Nt(kt);break;case 19:Nt(kt);break;case 10:vu(l.type._context);break;case 22:case 23:ic()}o=o.return}if(nn=t,Xt=t=lr(t.current,null),ln=kn=i,Kt=0,Ro=null,$u=Ba=Lr=0,Pn=Co=null,Pr!==null){for(i=0;i<Pr.length;i++)if(o=Pr[i],l=o.interleaved,l!==null){o.interleaved=null;var c=l.next,h=o.pending;if(h!==null){var M=h.next;h.next=c,l.next=M}o.pending=l}Pr=null}return t}function op(t,i){do{var o=Xt;try{if(_u(),Ca.current=La,Pa){for(var l=Bt.memoizedState;l!==null;){var c=l.queue;c!==null&&(c.pending=null),l=l.next}Pa=!1}if(Dr=0,tn=qt=Bt=null,So=!1,Mo=0,Ku.current=null,o===null||o.return===null){Kt=1,Ro=i,Xt=null;break}e:{var h=t,M=o.return,D=o,N=i;if(i=ln,D.flags|=32768,N!==null&&typeof N=="object"&&typeof N.then=="function"){var ee=N,_e=D,xe=_e.tag;if(!(_e.mode&1)&&(xe===0||xe===11||xe===15)){var me=_e.alternate;me?(_e.updateQueue=me.updateQueue,_e.memoizedState=me.memoizedState,_e.lanes=me.lanes):(_e.updateQueue=null,_e.memoizedState=null)}var Le=Dh(M);if(Le!==null){Le.flags&=-257,Lh(Le,M,D,h,i),Le.mode&1&&bh(h,ee,i),i=Le,N=ee;var ze=i.updateQueue;if(ze===null){var Ve=new Set;Ve.add(N),i.updateQueue=Ve}else ze.add(N);break e}else{if(!(i&1)){bh(h,ee,i),rc();break e}N=Error(n(426))}}else if(Ot&&D.mode&1){var Wt=Dh(M);if(Wt!==null){!(Wt.flags&65536)&&(Wt.flags|=256),Lh(Wt,M,D,h,i),mu(_s(N,D));break e}}h=N=_s(N,D),Kt!==4&&(Kt=2),Co===null?Co=[h]:Co.push(h),h=M;do{switch(h.tag){case 3:h.flags|=65536,i&=-i,h.lanes|=i;var q=Ch(h,N,i);th(h,q);break e;case 1:D=N;var H=h.type,$=h.stateNode;if(!(h.flags&128)&&(typeof H.getDerivedStateFromError=="function"||$!==null&&typeof $.componentDidCatch=="function"&&(rr===null||!rr.has($)))){h.flags|=65536,i&=-i,h.lanes|=i;var Ee=Ph(h,D,i);th(h,Ee);break e}}h=h.return}while(h!==null)}up(o)}catch(Xe){i=Xe,Xt===o&&o!==null&&(Xt=o=o.return);continue}break}while(!0)}function ap(){var t=ka.current;return ka.current=La,t===null?La:t}function rc(){(Kt===0||Kt===3||Kt===2)&&(Kt=4),nn===null||!(Lr&268435455)&&!(Ba&268435455)||ar(nn,ln)}function Xa(t,i){var o=yt;yt|=2;var l=ap();(nn!==t||ln!==i)&&(bi=null,Ir(t,i));do try{b_();break}catch(c){op(t,c)}while(!0);if(_u(),yt=o,ka.current=l,Xt!==null)throw Error(n(261));return nn=null,ln=0,Kt}function b_(){for(;Xt!==null;)lp(Xt)}function D_(){for(;Xt!==null&&!G();)lp(Xt)}function lp(t){var i=dp(t.alternate,t,kn);t.memoizedProps=t.pendingProps,i===null?up(t):Xt=i,Ku.current=null}function up(t){var i=t;do{var o=i.alternate;if(t=i.return,i.flags&32768){if(o=T_(o,i),o!==null){o.flags&=32767,Xt=o;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Kt=6,Xt=null;return}}else if(o=E_(o,i,kn),o!==null){Xt=o;return}if(i=i.sibling,i!==null){Xt=i;return}Xt=i=t}while(i!==null);Kt===0&&(Kt=5)}function Nr(t,i,o){var l=xt,c=Yn.transition;try{Yn.transition=null,xt=1,L_(t,i,o,l)}finally{Yn.transition=c,xt=l}return null}function L_(t,i,o,l){do Ss();while(sr!==null);if(yt&6)throw Error(n(327));o=t.finishedWork;var c=t.finishedLanes;if(o===null)return null;if(t.finishedWork=null,t.finishedLanes=0,o===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var h=o.lanes|o.childLanes;if(on(t,h),t===nn&&(Xt=nn=null,ln=0),!(o.subtreeFlags&2064)&&!(o.flags&2064)||Ha||(Ha=!0,hp(De,function(){return Ss(),null})),h=(o.flags&15990)!==0,o.subtreeFlags&15990||h){h=Yn.transition,Yn.transition=null;var M=xt;xt=1;var D=yt;yt|=4,Ku.current=null,A_(t,o),Jh(o,t),Qg(ru),na=!!iu,ru=iu=null,t.current=o,R_(o),J(),yt=D,xt=M,Yn.transition=h}else t.current=o;if(Ha&&(Ha=!1,sr=t,Va=c),h=t.pendingLanes,h===0&&(rr=null),gt(o.stateNode),bn(t,K()),i!==null)for(l=t.onRecoverableError,o=0;o<i.length;o++)c=i[o],l(c.value,{componentStack:c.stack,digest:c.digest});if(za)throw za=!1,t=Qu,Qu=null,t;return Va&1&&t.tag!==0&&Ss(),h=t.pendingLanes,h&1?t===Ju?Po++:(Po=0,Ju=t):Po=0,er(),null}function Ss(){if(sr!==null){var t=ui(Va),i=Yn.transition,o=xt;try{if(Yn.transition=null,xt=16>t?16:t,sr===null)var l=!1;else{if(t=sr,sr=null,Va=0,yt&6)throw Error(n(331));var c=yt;for(yt|=4,Fe=t.current;Fe!==null;){var h=Fe,M=h.child;if(Fe.flags&16){var D=h.deletions;if(D!==null){for(var N=0;N<D.length;N++){var ee=D[N];for(Fe=ee;Fe!==null;){var _e=Fe;switch(_e.tag){case 0:case 11:case 15:Ao(8,_e,h)}var xe=_e.child;if(xe!==null)xe.return=_e,Fe=xe;else for(;Fe!==null;){_e=Fe;var me=_e.sibling,Le=_e.return;if(qh(_e),_e===ee){Fe=null;break}if(me!==null){me.return=Le,Fe=me;break}Fe=Le}}}var ze=h.alternate;if(ze!==null){var Ve=ze.child;if(Ve!==null){ze.child=null;do{var Wt=Ve.sibling;Ve.sibling=null,Ve=Wt}while(Ve!==null)}}Fe=h}}if(h.subtreeFlags&2064&&M!==null)M.return=h,Fe=M;else e:for(;Fe!==null;){if(h=Fe,h.flags&2048)switch(h.tag){case 0:case 11:case 15:Ao(9,h,h.return)}var q=h.sibling;if(q!==null){q.return=h.return,Fe=q;break e}Fe=h.return}}var H=t.current;for(Fe=H;Fe!==null;){M=Fe;var $=M.child;if(M.subtreeFlags&2064&&$!==null)$.return=M,Fe=$;else e:for(M=H;Fe!==null;){if(D=Fe,D.flags&2048)try{switch(D.tag){case 0:case 11:case 15:Oa(9,D)}}catch(Xe){Gt(D,D.return,Xe)}if(D===M){Fe=null;break e}var Ee=D.sibling;if(Ee!==null){Ee.return=D.return,Fe=Ee;break e}Fe=D.return}}if(yt=c,er(),He&&typeof He.onPostCommitFiberRoot=="function")try{He.onPostCommitFiberRoot(Qe,t)}catch{}l=!0}return l}finally{xt=o,Yn.transition=i}}return!1}function cp(t,i,o){i=_s(o,i),i=Ch(t,i,1),t=nr(t,i,1),i=Sn(),t!==null&&(Jt(t,1,i),bn(t,i))}function Gt(t,i,o){if(t.tag===3)cp(t,t,o);else for(;i!==null;){if(i.tag===3){cp(i,t,o);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(rr===null||!rr.has(l))){t=_s(o,t),t=Ph(i,t,1),i=nr(i,t,1),t=Sn(),i!==null&&(Jt(i,1,t),bn(i,t));break}}i=i.return}}function U_(t,i,o){var l=t.pingCache;l!==null&&l.delete(i),i=Sn(),t.pingedLanes|=t.suspendedLanes&o,nn===t&&(ln&o)===o&&(Kt===4||Kt===3&&(ln&130023424)===ln&&500>K()-Zu?Ir(t,0):$u|=o),bn(t,i)}function fp(t,i){i===0&&(t.mode&1?(i=Vt,Vt<<=1,!(Vt&130023424)&&(Vt=4194304)):i=1);var o=Sn();t=Ri(t,i),t!==null&&(Jt(t,i,o),bn(t,o))}function I_(t){var i=t.memoizedState,o=0;i!==null&&(o=i.retryLane),fp(t,o)}function N_(t,i){var o=0;switch(t.tag){case 13:var l=t.stateNode,c=t.memoizedState;c!==null&&(o=c.retryLane);break;case 19:l=t.stateNode;break;default:throw Error(n(314))}l!==null&&l.delete(i),fp(t,o)}var dp;dp=function(t,i,o){if(t!==null)if(t.memoizedProps!==i.pendingProps||An.current)Cn=!0;else{if(!(t.lanes&o)&&!(i.flags&128))return Cn=!1,M_(t,i,o);Cn=!!(t.flags&131072)}else Cn=!1,Ot&&i.flags&1048576&&Xd(i,ya,i.index);switch(i.lanes=0,i.tag){case 2:var l=i.type;Na(t,i),t=i.pendingProps;var c=us(i,fn.current);ms(i,o),c=Cu(null,i,l,t,c,o);var h=Pu();return i.flags|=1,typeof c=="object"&&c!==null&&typeof c.render=="function"&&c.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Rn(l)?(h=!0,_a(i)):h=!1,i.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,Su(i),c.updater=Ua,i.stateNode=c,c._reactInternals=i,Nu(i,l,t,o),i=Bu(null,i,l,!0,h,o)):(i.tag=0,Ot&&h&&fu(i),yn(null,i,c,o),i=i.child),i;case 16:l=i.elementType;e:{switch(Na(t,i),t=i.pendingProps,c=l._init,l=c(l._payload),i.type=l,c=i.tag=O_(l),t=Qn(l,t),c){case 0:i=ku(null,i,l,t,o);break e;case 1:i=kh(null,i,l,t,o);break e;case 11:i=Uh(null,i,l,t,o);break e;case 14:i=Ih(null,i,l,Qn(l.type,t),o);break e}throw Error(n(306,l,""))}return i;case 0:return l=i.type,c=i.pendingProps,c=i.elementType===l?c:Qn(l,c),ku(t,i,l,c,o);case 1:return l=i.type,c=i.pendingProps,c=i.elementType===l?c:Qn(l,c),kh(t,i,l,c,o);case 3:e:{if(Bh(i),t===null)throw Error(n(387));l=i.pendingProps,h=i.memoizedState,c=h.element,eh(t,i),Aa(i,l,null,o);var M=i.memoizedState;if(l=M.element,h.isDehydrated)if(h={element:l,isDehydrated:!1,cache:M.cache,pendingSuspenseBoundaries:M.pendingSuspenseBoundaries,transitions:M.transitions},i.updateQueue.baseState=h,i.memoizedState=h,i.flags&256){c=_s(Error(n(423)),i),i=zh(t,i,l,o,c);break e}else if(l!==c){c=_s(Error(n(424)),i),i=zh(t,i,l,o,c);break e}else for(On=Zi(i.stateNode.containerInfo.firstChild),Fn=i,Ot=!0,Zn=null,o=Qd(i,null,l,o),i.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(ds(),l===c){i=Pi(t,i,o);break e}yn(t,i,l,o)}i=i.child}return i;case 5:return ih(i),t===null&&pu(i),l=i.type,c=i.pendingProps,h=t!==null?t.memoizedProps:null,M=c.children,su(l,c)?M=null:h!==null&&su(l,h)&&(i.flags|=32),Oh(t,i),yn(t,i,M,o),i.child;case 6:return t===null&&pu(i),null;case 13:return Hh(t,i,o);case 4:return Mu(i,i.stateNode.containerInfo),l=i.pendingProps,t===null?i.child=hs(i,null,l,o):yn(t,i,l,o),i.child;case 11:return l=i.type,c=i.pendingProps,c=i.elementType===l?c:Qn(l,c),Uh(t,i,l,c,o);case 7:return yn(t,i,i.pendingProps,o),i.child;case 8:return yn(t,i,i.pendingProps.children,o),i.child;case 12:return yn(t,i,i.pendingProps.children,o),i.child;case 10:e:{if(l=i.type._context,c=i.pendingProps,h=i.memoizedProps,M=c.value,Lt(Ea,l._currentValue),l._currentValue=M,h!==null)if($n(h.value,M)){if(h.children===c.children&&!An.current){i=Pi(t,i,o);break e}}else for(h=i.child,h!==null&&(h.return=i);h!==null;){var D=h.dependencies;if(D!==null){M=h.child;for(var N=D.firstContext;N!==null;){if(N.context===l){if(h.tag===1){N=Ci(-1,o&-o),N.tag=2;var ee=h.updateQueue;if(ee!==null){ee=ee.shared;var _e=ee.pending;_e===null?N.next=N:(N.next=_e.next,_e.next=N),ee.pending=N}}h.lanes|=o,N=h.alternate,N!==null&&(N.lanes|=o),xu(h.return,o,i),D.lanes|=o;break}N=N.next}}else if(h.tag===10)M=h.type===i.type?null:h.child;else if(h.tag===18){if(M=h.return,M===null)throw Error(n(341));M.lanes|=o,D=M.alternate,D!==null&&(D.lanes|=o),xu(M,o,i),M=h.sibling}else M=h.child;if(M!==null)M.return=h;else for(M=h;M!==null;){if(M===i){M=null;break}if(h=M.sibling,h!==null){h.return=M.return,M=h;break}M=M.return}h=M}yn(t,i,c.children,o),i=i.child}return i;case 9:return c=i.type,l=i.pendingProps.children,ms(i,o),c=Wn(c),l=l(c),i.flags|=1,yn(t,i,l,o),i.child;case 14:return l=i.type,c=Qn(l,i.pendingProps),c=Qn(l.type,c),Ih(t,i,l,c,o);case 15:return Nh(t,i,i.type,i.pendingProps,o);case 17:return l=i.type,c=i.pendingProps,c=i.elementType===l?c:Qn(l,c),Na(t,i),i.tag=1,Rn(l)?(t=!0,_a(i)):t=!1,ms(i,o),Ah(i,l,c),Nu(i,l,c,o),Bu(null,i,l,!0,t,o);case 19:return Gh(t,i,o);case 22:return Fh(t,i,o)}throw Error(n(156,i.tag))};function hp(t,i){return Jo(t,i)}function F_(t,i,o,l){this.tag=t,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function jn(t,i,o,l){return new F_(t,i,o,l)}function sc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function O_(t){if(typeof t=="function")return sc(t)?1:0;if(t!=null){if(t=t.$$typeof,t===oe)return 11;if(t===he)return 14}return 2}function lr(t,i){var o=t.alternate;return o===null?(o=jn(t.tag,i,t.key,t.mode),o.elementType=t.elementType,o.type=t.type,o.stateNode=t.stateNode,o.alternate=t,t.alternate=o):(o.pendingProps=i,o.type=t.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=t.flags&14680064,o.childLanes=t.childLanes,o.lanes=t.lanes,o.child=t.child,o.memoizedProps=t.memoizedProps,o.memoizedState=t.memoizedState,o.updateQueue=t.updateQueue,i=t.dependencies,o.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},o.sibling=t.sibling,o.index=t.index,o.ref=t.ref,o}function Ya(t,i,o,l,c,h){var M=2;if(l=t,typeof t=="function")sc(t)&&(M=1);else if(typeof t=="string")M=5;else e:switch(t){case F:return Fr(o.children,c,h,i);case Y:M=8,c|=8;break;case P:return t=jn(12,o,i,c|2),t.elementType=P,t.lanes=h,t;case te:return t=jn(13,o,i,c),t.elementType=te,t.lanes=h,t;case ce:return t=jn(19,o,i,c),t.elementType=ce,t.lanes=h,t;case le:return ja(o,c,h,i);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case A:M=10;break e;case z:M=9;break e;case oe:M=11;break e;case he:M=14;break e;case se:M=16,l=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return i=jn(M,o,i,c),i.elementType=t,i.type=l,i.lanes=h,i}function Fr(t,i,o,l){return t=jn(7,t,l,i),t.lanes=o,t}function ja(t,i,o,l){return t=jn(22,t,l,i),t.elementType=le,t.lanes=o,t.stateNode={isHidden:!1},t}function oc(t,i,o){return t=jn(6,t,null,i),t.lanes=o,t}function ac(t,i,o){return i=jn(4,t.children!==null?t.children:[],t.key,i),i.lanes=o,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}function k_(t,i,o,l,c){this.tag=i,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=cn(0),this.expirationTimes=cn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=cn(0),this.identifierPrefix=l,this.onRecoverableError=c,this.mutableSourceEagerHydrationData=null}function lc(t,i,o,l,c,h,M,D,N){return t=new k_(t,i,o,D,N),i===1?(i=1,h===!0&&(i|=8)):i=0,h=jn(3,null,null,i),t.current=h,h.stateNode=t,h.memoizedState={element:l,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},Su(h),t}function B_(t,i,o){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:k,key:l==null?null:""+l,children:t,containerInfo:i,implementation:o}}function pp(t){if(!t)return Ji;t=t._reactInternals;e:{if(li(t)!==t||t.tag!==1)throw Error(n(170));var i=t;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Rn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(n(171))}if(t.tag===1){var o=t.type;if(Rn(o))return Vd(t,o,i)}return i}function mp(t,i,o,l,c,h,M,D,N){return t=lc(o,l,!0,t,c,h,M,D,N),t.context=pp(null),o=t.current,l=Sn(),c=or(o),h=Ci(l,c),h.callback=i??null,nr(o,h,c),t.current.lanes=c,Jt(t,c,l),bn(t,l),t}function qa(t,i,o,l){var c=i.current,h=Sn(),M=or(c);return o=pp(o),i.context===null?i.context=o:i.pendingContext=o,i=Ci(h,M),i.payload={element:t},l=l===void 0?null:l,l!==null&&(i.callback=l),t=nr(c,i,M),t!==null&&(ti(t,c,M,h),wa(t,c,M)),M}function Ka(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function gp(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var o=t.retryLane;t.retryLane=o!==0&&o<i?o:i}}function uc(t,i){gp(t,i),(t=t.alternate)&&gp(t,i)}var _p=typeof reportError=="function"?reportError:function(t){console.error(t)};function cc(t){this._internalRoot=t}$a.prototype.render=cc.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(n(409));qa(t,i,null,null)},$a.prototype.unmount=cc.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;Ur(function(){qa(null,t,null,null)}),i[Ei]=null}};function $a(t){this._internalRoot=t}$a.prototype.unstable_scheduleHydration=function(t){if(t){var i=ed();t={blockedOn:null,target:t,priority:i};for(var o=0;o<qi.length&&i!==0&&i<qi[o].priority;o++);qi.splice(o,0,t),o===0&&id(t)}};function fc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Za(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function vp(){}function z_(t,i,o,l,c){if(c){if(typeof l=="function"){var h=l;l=function(){var ee=Ka(M);h.call(ee)}}var M=mp(i,l,t,0,null,!1,!1,"",vp);return t._reactRootContainer=M,t[Ei]=M.current,ho(t.nodeType===8?t.parentNode:t),Ur(),M}for(;c=t.lastChild;)t.removeChild(c);if(typeof l=="function"){var D=l;l=function(){var ee=Ka(N);D.call(ee)}}var N=lc(t,0,!1,null,null,!1,!1,"",vp);return t._reactRootContainer=N,t[Ei]=N.current,ho(t.nodeType===8?t.parentNode:t),Ur(function(){qa(i,N,o,l)}),N}function Qa(t,i,o,l,c){var h=o._reactRootContainer;if(h){var M=h;if(typeof c=="function"){var D=c;c=function(){var N=Ka(M);D.call(N)}}qa(i,M,t,c)}else M=z_(o,i,t,c,l);return Ka(M)}Qf=function(t){switch(t.tag){case 3:var i=t.stateNode;if(i.current.memoizedState.isDehydrated){var o=mt(i.pendingLanes);o!==0&&(en(i,o|1),bn(i,K()),!(yt&6)&&(ys=K()+500,er()))}break;case 13:Ur(function(){var l=Ri(t,1);if(l!==null){var c=Sn();ti(l,t,1,c)}}),uc(t,1)}},Fl=function(t){if(t.tag===13){var i=Ri(t,134217728);if(i!==null){var o=Sn();ti(i,t,134217728,o)}uc(t,134217728)}},Jf=function(t){if(t.tag===13){var i=or(t),o=Ri(t,i);if(o!==null){var l=Sn();ti(o,t,i,l)}uc(t,i)}},ed=function(){return xt},td=function(t,i){var o=xt;try{return xt=t,i()}finally{xt=o}},Ae=function(t,i,o){switch(i){case"input":if(ut(t,o),i=o.name,o.type==="radio"&&i!=null){for(o=t;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<o.length;i++){var l=o[i];if(l!==t&&l.form===t.form){var c=ma(l);if(!c)throw Error(n(90));pt(l),ut(l,c)}}}break;case"textarea":pe(t,o);break;case"select":i=o.value,i!=null&&b(t,!!o.multiple,i,!1)}},Ut=nc,jt=Ur;var H_={usingClientEntryPoint:!1,Events:[go,as,ma,Pe,it,nc]},bo={findFiberByHostInstance:wr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},V_={bundleType:bo.bundleType,version:bo.version,rendererPackageName:bo.rendererPackageName,rendererConfig:bo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:C.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Zo(t),t===null?null:t.stateNode},findFiberByHostInstance:bo.findFiberByHostInstance,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ja=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ja.isDisabled&&Ja.supportsFiber)try{Qe=Ja.inject(V_),He=Ja}catch{}}return Dn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=H_,Dn.createPortal=function(t,i){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!fc(i))throw Error(n(200));return B_(t,i,null,o)},Dn.createRoot=function(t,i){if(!fc(t))throw Error(n(299));var o=!1,l="",c=_p;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onRecoverableError!==void 0&&(c=i.onRecoverableError)),i=lc(t,1,!1,null,null,o,!1,l,c),t[Ei]=i.current,ho(t.nodeType===8?t.parentNode:t),new cc(i)},Dn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=Zo(i),t=t===null?null:t.stateNode,t},Dn.flushSync=function(t){return Ur(t)},Dn.hydrate=function(t,i,o){if(!Za(i))throw Error(n(200));return Qa(null,t,i,!0,o)},Dn.hydrateRoot=function(t,i,o){if(!fc(t))throw Error(n(405));var l=o!=null&&o.hydratedSources||null,c=!1,h="",M=_p;if(o!=null&&(o.unstable_strictMode===!0&&(c=!0),o.identifierPrefix!==void 0&&(h=o.identifierPrefix),o.onRecoverableError!==void 0&&(M=o.onRecoverableError)),i=mp(i,null,t,1,o??null,c,!1,h,M),t[Ei]=i.current,ho(t),l)for(t=0;t<l.length;t++)o=l[t],c=o._getVersion,c=c(o._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[o,c]:i.mutableSourceEagerHydrationData.push(o,c);return new $a(i)},Dn.render=function(t,i,o){if(!Za(i))throw Error(n(200));return Qa(null,t,i,!1,o)},Dn.unmountComponentAtNode=function(t){if(!Za(t))throw Error(n(40));return t._reactRootContainer?(Ur(function(){Qa(null,null,t,!1,function(){t._reactRootContainer=null,t[Ei]=null})}),!0):!1},Dn.unstable_batchedUpdates=nc,Dn.unstable_renderSubtreeIntoContainer=function(t,i,o,l){if(!Za(o))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return Qa(t,i,o,!1,l)},Dn.version="18.3.1-next-f1338f8080-20240426",Dn}var Ap;function $_(){if(Ap)return pc.exports;Ap=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),pc.exports=K_(),pc.exports}var Rp;function Z_(){if(Rp)return el;Rp=1;var s=$_();return el.createRoot=s.createRoot,el.hydrateRoot=s.hydrateRoot,el}var Q_=Z_();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Of="172",zs={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},ks={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},J_=0,Cp=1,ev=2,Um=1,tv=2,Fi=3,yr=0,Un=1,Oi=2,vr=0,Hs=1,Pp=2,bp=3,Dp=4,nv=5,Wr=100,iv=101,rv=102,sv=103,ov=104,av=200,lv=201,uv=202,cv=203,Kc=204,$c=205,fv=206,dv=207,hv=208,pv=209,mv=210,gv=211,_v=212,vv=213,xv=214,Zc=0,Qc=1,Jc=2,Ws=3,ef=4,tf=5,nf=6,rf=7,kf=0,yv=1,Sv=2,xr=0,Mv=1,Ev=2,Tv=3,wv=4,Av=5,Rv=6,Cv=7,Im=300,Xs=301,Ys=302,sf=303,of=304,Ll=306,af=1e3,Yr=1001,lf=1002,ai=1003,Pv=1004,tl=1005,mi=1006,_c=1007,jr=1008,Hi=1009,Nm=1010,Fm=1011,zo=1012,Bf=1013,qr=1014,ki=1015,Go=1016,zf=1017,Hf=1018,js=1020,Om=35902,km=1021,Bm=1022,oi=1023,zm=1024,Hm=1025,Vs=1026,qs=1027,Vm=1028,Vf=1029,Gm=1030,Gf=1031,Wf=1033,Tl=33776,wl=33777,Al=33778,Rl=33779,uf=35840,cf=35841,ff=35842,df=35843,hf=36196,pf=37492,mf=37496,gf=37808,_f=37809,vf=37810,xf=37811,yf=37812,Sf=37813,Mf=37814,Ef=37815,Tf=37816,wf=37817,Af=37818,Rf=37819,Cf=37820,Pf=37821,Cl=36492,bf=36494,Df=36495,Wm=36283,Lf=36284,Uf=36285,If=36286,bv=3200,Dv=3201,Xm=0,Lv=1,_r="",Kn="srgb",Ks="srgb-linear",bl="linear",Rt="srgb",Ms=7680,Lp=519,Uv=512,Iv=513,Nv=514,Ym=515,Fv=516,Ov=517,kv=518,Bv=519,Up=35044,Ip="300 es",Bi=2e3,Dl=2001;class Zr{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const a=this._listeners[e];if(a!==void 0){const u=a.indexOf(n);u!==-1&&a.splice(u,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const a=r.slice(0);for(let u=0,f=a.length;u<f;u++)a[u].call(this,e);e.target=null}}}const mn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Np=1234567;const ko=Math.PI/180,Ho=180/Math.PI;function Zs(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(mn[s&255]+mn[s>>8&255]+mn[s>>16&255]+mn[s>>24&255]+"-"+mn[e&255]+mn[e>>8&255]+"-"+mn[e>>16&15|64]+mn[e>>24&255]+"-"+mn[n&63|128]+mn[n>>8&255]+"-"+mn[n>>16&255]+mn[n>>24&255]+mn[r&255]+mn[r>>8&255]+mn[r>>16&255]+mn[r>>24&255]).toLowerCase()}function dt(s,e,n){return Math.max(e,Math.min(n,s))}function Xf(s,e){return(s%e+e)%e}function zv(s,e,n,r,a){return r+(s-e)*(a-r)/(n-e)}function Hv(s,e,n){return s!==e?(n-s)/(e-s):0}function Bo(s,e,n){return(1-n)*s+n*e}function Vv(s,e,n,r){return Bo(s,e,1-Math.exp(-n*r))}function Gv(s,e=1){return e-Math.abs(Xf(s,e*2)-e)}function Wv(s,e,n){return s<=e?0:s>=n?1:(s=(s-e)/(n-e),s*s*(3-2*s))}function Xv(s,e,n){return s<=e?0:s>=n?1:(s=(s-e)/(n-e),s*s*s*(s*(s*6-15)+10))}function Yv(s,e){return s+Math.floor(Math.random()*(e-s+1))}function jv(s,e){return s+Math.random()*(e-s)}function qv(s){return s*(.5-Math.random())}function Kv(s){s!==void 0&&(Np=s);let e=Np+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function $v(s){return s*ko}function Zv(s){return s*Ho}function Qv(s){return(s&s-1)===0&&s!==0}function Jv(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function e0(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function t0(s,e,n,r,a){const u=Math.cos,f=Math.sin,d=u(n/2),p=f(n/2),m=u((e+r)/2),_=f((e+r)/2),v=u((e-r)/2),x=f((e-r)/2),S=u((r-e)/2),w=f((r-e)/2);switch(a){case"XYX":s.set(d*_,p*v,p*x,d*m);break;case"YZY":s.set(p*x,d*_,p*v,d*m);break;case"ZXZ":s.set(p*v,p*x,d*_,d*m);break;case"XZX":s.set(d*_,p*w,p*S,d*m);break;case"YXY":s.set(p*S,d*_,p*w,d*m);break;case"ZYZ":s.set(p*w,p*S,d*_,d*m);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+a)}}function Fs(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Mn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const n0={DEG2RAD:ko,RAD2DEG:Ho,generateUUID:Zs,clamp:dt,euclideanModulo:Xf,mapLinear:zv,inverseLerp:Hv,lerp:Bo,damp:Vv,pingpong:Gv,smoothstep:Wv,smootherstep:Xv,randInt:Yv,randFloat:jv,randFloatSpread:qv,seededRandom:Kv,degToRad:$v,radToDeg:Zv,isPowerOfTwo:Qv,ceilPowerOfTwo:Jv,floorPowerOfTwo:e0,setQuaternionFromProperEuler:t0,normalize:Mn,denormalize:Fs};class st{constructor(e=0,n=0){st.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,a=e.elements;return this.x=a[0]*n+a[3]*r+a[6],this.y=a[1]*n+a[4]*r+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=dt(this.x,e.x,n.x),this.y=dt(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=dt(this.x,e,n),this.y=dt(this.y,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(dt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(dt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),a=Math.sin(n),u=this.x-e.x,f=this.y-e.y;return this.x=u*r-f*a+e.x,this.y=u*a+f*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ot{constructor(e,n,r,a,u,f,d,p,m){ot.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,r,a,u,f,d,p,m)}set(e,n,r,a,u,f,d,p,m){const _=this.elements;return _[0]=e,_[1]=a,_[2]=d,_[3]=n,_[4]=u,_[5]=p,_[6]=r,_[7]=f,_[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,a=n.elements,u=this.elements,f=r[0],d=r[3],p=r[6],m=r[1],_=r[4],v=r[7],x=r[2],S=r[5],w=r[8],R=a[0],y=a[3],g=a[6],I=a[1],L=a[4],C=a[7],W=a[2],k=a[5],F=a[8];return u[0]=f*R+d*I+p*W,u[3]=f*y+d*L+p*k,u[6]=f*g+d*C+p*F,u[1]=m*R+_*I+v*W,u[4]=m*y+_*L+v*k,u[7]=m*g+_*C+v*F,u[2]=x*R+S*I+w*W,u[5]=x*y+S*L+w*k,u[8]=x*g+S*C+w*F,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],a=e[2],u=e[3],f=e[4],d=e[5],p=e[6],m=e[7],_=e[8];return n*f*_-n*d*m-r*u*_+r*d*p+a*u*m-a*f*p}invert(){const e=this.elements,n=e[0],r=e[1],a=e[2],u=e[3],f=e[4],d=e[5],p=e[6],m=e[7],_=e[8],v=_*f-d*m,x=d*p-_*u,S=m*u-f*p,w=n*v+r*x+a*S;if(w===0)return this.set(0,0,0,0,0,0,0,0,0);const R=1/w;return e[0]=v*R,e[1]=(a*m-_*r)*R,e[2]=(d*r-a*f)*R,e[3]=x*R,e[4]=(_*n-a*p)*R,e[5]=(a*u-d*n)*R,e[6]=S*R,e[7]=(r*p-m*n)*R,e[8]=(f*n-r*u)*R,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,a,u,f,d){const p=Math.cos(u),m=Math.sin(u);return this.set(r*p,r*m,-r*(p*f+m*d)+f+e,-a*m,a*p,-a*(-m*f+p*d)+d+n,0,0,1),this}scale(e,n){return this.premultiply(vc.makeScale(e,n)),this}rotate(e){return this.premultiply(vc.makeRotation(-e)),this}translate(e,n){return this.premultiply(vc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,r=e.elements;for(let a=0;a<9;a++)if(n[a]!==r[a])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const vc=new ot;function jm(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Vo(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function i0(){const s=Vo("canvas");return s.style.display="block",s}const Fp={};function Os(s){s in Fp||(Fp[s]=!0,console.warn(s))}function r0(s,e,n){return new Promise(function(r,a){function u(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:a();break;case s.TIMEOUT_EXPIRED:setTimeout(u,n);break;default:r()}}setTimeout(u,n)})}function s0(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function o0(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Op=new ot().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),kp=new ot().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function a0(){const s={enabled:!0,workingColorSpace:Ks,spaces:{},convert:function(a,u,f){return this.enabled===!1||u===f||!u||!f||(this.spaces[u].transfer===Rt&&(a.r=zi(a.r),a.g=zi(a.g),a.b=zi(a.b)),this.spaces[u].primaries!==this.spaces[f].primaries&&(a.applyMatrix3(this.spaces[u].toXYZ),a.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===Rt&&(a.r=Gs(a.r),a.g=Gs(a.g),a.b=Gs(a.b))),a},fromWorkingColorSpace:function(a,u){return this.convert(a,this.workingColorSpace,u)},toWorkingColorSpace:function(a,u){return this.convert(a,u,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===_r?bl:this.spaces[a].transfer},getLuminanceCoefficients:function(a,u=this.workingColorSpace){return a.fromArray(this.spaces[u].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,u,f){return a.copy(this.spaces[u].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[Ks]:{primaries:e,whitePoint:r,transfer:bl,toXYZ:Op,fromXYZ:kp,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Kn},outputColorSpaceConfig:{drawingBufferColorSpace:Kn}},[Kn]:{primaries:e,whitePoint:r,transfer:Rt,toXYZ:Op,fromXYZ:kp,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Kn}}}),s}const Mt=a0();function zi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Gs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Es;class l0{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Es===void 0&&(Es=Vo("canvas")),Es.width=e.width,Es.height=e.height;const r=Es.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=Es}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Vo("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const a=r.getImageData(0,0,e.width,e.height),u=a.data;for(let f=0;f<u.length;f++)u[f]=zi(u[f]/255)*255;return r.putImageData(a,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(zi(n[r]/255)*255):n[r]=zi(n[r]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let u0=0;class qm{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:u0++}),this.uuid=Zs(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},a=this.data;if(a!==null){let u;if(Array.isArray(a)){u=[];for(let f=0,d=a.length;f<d;f++)a[f].isDataTexture?u.push(xc(a[f].image)):u.push(xc(a[f]))}else u=xc(a);r.url=u}return n||(e.images[this.uuid]=r),r}}function xc(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?l0.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let c0=0;class Tn extends Zr{constructor(e=Tn.DEFAULT_IMAGE,n=Tn.DEFAULT_MAPPING,r=Yr,a=Yr,u=mi,f=jr,d=oi,p=Hi,m=Tn.DEFAULT_ANISOTROPY,_=_r){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:c0++}),this.uuid=Zs(),this.name="",this.source=new qm(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=u,this.minFilter=f,this.anisotropy=m,this.format=d,this.internalFormat=null,this.type=p,this.offset=new st(0,0),this.repeat=new st(1,1),this.center=new st(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Im)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case af:e.x=e.x-Math.floor(e.x);break;case Yr:e.x=e.x<0?0:1;break;case lf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case af:e.y=e.y-Math.floor(e.y);break;case Yr:e.y=e.y<0?0:1;break;case lf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Tn.DEFAULT_IMAGE=null;Tn.DEFAULT_MAPPING=Im;Tn.DEFAULT_ANISOTROPY=1;class Pt{constructor(e=0,n=0,r=0,a=1){Pt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=r,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,a){return this.x=e,this.y=n,this.z=r,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,a=this.z,u=this.w,f=e.elements;return this.x=f[0]*n+f[4]*r+f[8]*a+f[12]*u,this.y=f[1]*n+f[5]*r+f[9]*a+f[13]*u,this.z=f[2]*n+f[6]*r+f[10]*a+f[14]*u,this.w=f[3]*n+f[7]*r+f[11]*a+f[15]*u,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,a,u;const p=e.elements,m=p[0],_=p[4],v=p[8],x=p[1],S=p[5],w=p[9],R=p[2],y=p[6],g=p[10];if(Math.abs(_-x)<.01&&Math.abs(v-R)<.01&&Math.abs(w-y)<.01){if(Math.abs(_+x)<.1&&Math.abs(v+R)<.1&&Math.abs(w+y)<.1&&Math.abs(m+S+g-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const L=(m+1)/2,C=(S+1)/2,W=(g+1)/2,k=(_+x)/4,F=(v+R)/4,Y=(w+y)/4;return L>C&&L>W?L<.01?(r=0,a=.707106781,u=.707106781):(r=Math.sqrt(L),a=k/r,u=F/r):C>W?C<.01?(r=.707106781,a=0,u=.707106781):(a=Math.sqrt(C),r=k/a,u=Y/a):W<.01?(r=.707106781,a=.707106781,u=0):(u=Math.sqrt(W),r=F/u,a=Y/u),this.set(r,a,u,n),this}let I=Math.sqrt((y-w)*(y-w)+(v-R)*(v-R)+(x-_)*(x-_));return Math.abs(I)<.001&&(I=1),this.x=(y-w)/I,this.y=(v-R)/I,this.z=(x-_)/I,this.w=Math.acos((m+S+g-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=dt(this.x,e.x,n.x),this.y=dt(this.y,e.y,n.y),this.z=dt(this.z,e.z,n.z),this.w=dt(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=dt(this.x,e,n),this.y=dt(this.y,e,n),this.z=dt(this.z,e,n),this.w=dt(this.w,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(dt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class f0 extends Zr{constructor(e=1,n=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Pt(0,0,e,n),this.scissorTest=!1,this.viewport=new Pt(0,0,e,n);const a={width:e,height:n,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:mi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const u=new Tn(a,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);u.flipY=!1,u.generateMipmaps=r.generateMipmaps,u.internalFormat=r.internalFormat,this.textures=[];const f=r.count;for(let d=0;d<f;d++)this.textures[d]=u.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,r=1){if(this.width!==e||this.height!==n||this.depth!==r){this.width=e,this.height=n,this.depth=r;for(let a=0,u=this.textures.length;a<u;a++)this.textures[a].image.width=e,this.textures[a].image.height=n,this.textures[a].image.depth=r;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,a=e.textures.length;r<a;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;const n=Object.assign({},e.texture.image);return this.texture.source=new qm(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Kr extends f0{constructor(e=1,n=1,r={}){super(e,n,r),this.isWebGLRenderTarget=!0}}class Km extends Tn{constructor(e=null,n=1,r=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:a},this.magFilter=ai,this.minFilter=ai,this.wrapR=Yr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class d0 extends Tn{constructor(e=null,n=1,r=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:a},this.magFilter=ai,this.minFilter=ai,this.wrapR=Yr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class $r{constructor(e=0,n=0,r=0,a=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=a}static slerpFlat(e,n,r,a,u,f,d){let p=r[a+0],m=r[a+1],_=r[a+2],v=r[a+3];const x=u[f+0],S=u[f+1],w=u[f+2],R=u[f+3];if(d===0){e[n+0]=p,e[n+1]=m,e[n+2]=_,e[n+3]=v;return}if(d===1){e[n+0]=x,e[n+1]=S,e[n+2]=w,e[n+3]=R;return}if(v!==R||p!==x||m!==S||_!==w){let y=1-d;const g=p*x+m*S+_*w+v*R,I=g>=0?1:-1,L=1-g*g;if(L>Number.EPSILON){const W=Math.sqrt(L),k=Math.atan2(W,g*I);y=Math.sin(y*k)/W,d=Math.sin(d*k)/W}const C=d*I;if(p=p*y+x*C,m=m*y+S*C,_=_*y+w*C,v=v*y+R*C,y===1-d){const W=1/Math.sqrt(p*p+m*m+_*_+v*v);p*=W,m*=W,_*=W,v*=W}}e[n]=p,e[n+1]=m,e[n+2]=_,e[n+3]=v}static multiplyQuaternionsFlat(e,n,r,a,u,f){const d=r[a],p=r[a+1],m=r[a+2],_=r[a+3],v=u[f],x=u[f+1],S=u[f+2],w=u[f+3];return e[n]=d*w+_*v+p*S-m*x,e[n+1]=p*w+_*x+m*v-d*S,e[n+2]=m*w+_*S+d*x-p*v,e[n+3]=_*w-d*v-p*x-m*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,a){return this._x=e,this._y=n,this._z=r,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const r=e._x,a=e._y,u=e._z,f=e._order,d=Math.cos,p=Math.sin,m=d(r/2),_=d(a/2),v=d(u/2),x=p(r/2),S=p(a/2),w=p(u/2);switch(f){case"XYZ":this._x=x*_*v+m*S*w,this._y=m*S*v-x*_*w,this._z=m*_*w+x*S*v,this._w=m*_*v-x*S*w;break;case"YXZ":this._x=x*_*v+m*S*w,this._y=m*S*v-x*_*w,this._z=m*_*w-x*S*v,this._w=m*_*v+x*S*w;break;case"ZXY":this._x=x*_*v-m*S*w,this._y=m*S*v+x*_*w,this._z=m*_*w+x*S*v,this._w=m*_*v-x*S*w;break;case"ZYX":this._x=x*_*v-m*S*w,this._y=m*S*v+x*_*w,this._z=m*_*w-x*S*v,this._w=m*_*v+x*S*w;break;case"YZX":this._x=x*_*v+m*S*w,this._y=m*S*v+x*_*w,this._z=m*_*w-x*S*v,this._w=m*_*v-x*S*w;break;case"XZY":this._x=x*_*v-m*S*w,this._y=m*S*v-x*_*w,this._z=m*_*w+x*S*v,this._w=m*_*v+x*S*w;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+f)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,a=Math.sin(r);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],a=n[4],u=n[8],f=n[1],d=n[5],p=n[9],m=n[2],_=n[6],v=n[10],x=r+d+v;if(x>0){const S=.5/Math.sqrt(x+1);this._w=.25/S,this._x=(_-p)*S,this._y=(u-m)*S,this._z=(f-a)*S}else if(r>d&&r>v){const S=2*Math.sqrt(1+r-d-v);this._w=(_-p)/S,this._x=.25*S,this._y=(a+f)/S,this._z=(u+m)/S}else if(d>v){const S=2*Math.sqrt(1+d-r-v);this._w=(u-m)/S,this._x=(a+f)/S,this._y=.25*S,this._z=(p+_)/S}else{const S=2*Math.sqrt(1+v-r-d);this._w=(f-a)/S,this._x=(u+m)/S,this._y=(p+_)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(dt(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const a=Math.min(1,n/r);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,a=e._y,u=e._z,f=e._w,d=n._x,p=n._y,m=n._z,_=n._w;return this._x=r*_+f*d+a*m-u*p,this._y=a*_+f*p+u*d-r*m,this._z=u*_+f*m+r*p-a*d,this._w=f*_-r*d-a*p-u*m,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const r=this._x,a=this._y,u=this._z,f=this._w;let d=f*e._w+r*e._x+a*e._y+u*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=f,this._x=r,this._y=a,this._z=u,this;const p=1-d*d;if(p<=Number.EPSILON){const S=1-n;return this._w=S*f+n*this._w,this._x=S*r+n*this._x,this._y=S*a+n*this._y,this._z=S*u+n*this._z,this.normalize(),this}const m=Math.sqrt(p),_=Math.atan2(m,d),v=Math.sin((1-n)*_)/m,x=Math.sin(n*_)/m;return this._w=f*v+this._w*x,this._x=r*v+this._x*x,this._y=a*v+this._y*x,this._z=u*v+this._z*x,this._onChangeCallback(),this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),a=Math.sqrt(1-r),u=Math.sqrt(r);return this.set(a*Math.sin(e),a*Math.cos(e),u*Math.sin(n),u*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class j{constructor(e=0,n=0,r=0){j.prototype.isVector3=!0,this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Bp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Bp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,a=this.z,u=e.elements;return this.x=u[0]*n+u[3]*r+u[6]*a,this.y=u[1]*n+u[4]*r+u[7]*a,this.z=u[2]*n+u[5]*r+u[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,a=this.z,u=e.elements,f=1/(u[3]*n+u[7]*r+u[11]*a+u[15]);return this.x=(u[0]*n+u[4]*r+u[8]*a+u[12])*f,this.y=(u[1]*n+u[5]*r+u[9]*a+u[13])*f,this.z=(u[2]*n+u[6]*r+u[10]*a+u[14])*f,this}applyQuaternion(e){const n=this.x,r=this.y,a=this.z,u=e.x,f=e.y,d=e.z,p=e.w,m=2*(f*a-d*r),_=2*(d*n-u*a),v=2*(u*r-f*n);return this.x=n+p*m+f*v-d*_,this.y=r+p*_+d*m-u*v,this.z=a+p*v+u*_-f*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,a=this.z,u=e.elements;return this.x=u[0]*n+u[4]*r+u[8]*a,this.y=u[1]*n+u[5]*r+u[9]*a,this.z=u[2]*n+u[6]*r+u[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=dt(this.x,e.x,n.x),this.y=dt(this.y,e.y,n.y),this.z=dt(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=dt(this.x,e,n),this.y=dt(this.y,e,n),this.z=dt(this.z,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(dt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,a=e.y,u=e.z,f=n.x,d=n.y,p=n.z;return this.x=a*p-u*d,this.y=u*f-r*p,this.z=r*d-a*f,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return yc.copy(this).projectOnVector(e),this.sub(yc)}reflect(e){return this.sub(yc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(dt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,a=this.z-e.z;return n*n+r*r+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const a=Math.sin(n)*e;return this.x=a*Math.sin(r),this.y=Math.cos(n)*e,this.z=a*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=a,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(e),this.y=n,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const yc=new j,Bp=new $r;class Wo{constructor(e=new j(1/0,1/0,1/0),n=new j(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n+=3)this.expandByPoint(ni.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,r=e.count;n<r;n++)this.expandByPoint(ni.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=ni.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const u=r.getAttribute("position");if(n===!0&&u!==void 0&&e.isInstancedMesh!==!0)for(let f=0,d=u.count;f<d;f++)e.isMesh===!0?e.getVertexPosition(f,ni):ni.fromBufferAttribute(u,f),ni.applyMatrix4(e.matrixWorld),this.expandByPoint(ni);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),nl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),nl.copy(r.boundingBox)),nl.applyMatrix4(e.matrixWorld),this.union(nl)}const a=e.children;for(let u=0,f=a.length;u<f;u++)this.expandByObject(a[u],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ni),ni.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Lo),il.subVectors(this.max,Lo),Ts.subVectors(e.a,Lo),ws.subVectors(e.b,Lo),As.subVectors(e.c,Lo),cr.subVectors(ws,Ts),fr.subVectors(As,ws),Or.subVectors(Ts,As);let n=[0,-cr.z,cr.y,0,-fr.z,fr.y,0,-Or.z,Or.y,cr.z,0,-cr.x,fr.z,0,-fr.x,Or.z,0,-Or.x,-cr.y,cr.x,0,-fr.y,fr.x,0,-Or.y,Or.x,0];return!Sc(n,Ts,ws,As,il)||(n=[1,0,0,0,1,0,0,0,1],!Sc(n,Ts,ws,As,il))?!1:(rl.crossVectors(cr,fr),n=[rl.x,rl.y,rl.z],Sc(n,Ts,ws,As,il))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ni).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ni).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Di[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Di[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Di[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Di[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Di[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Di[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Di[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Di[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Di),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Di=[new j,new j,new j,new j,new j,new j,new j,new j],ni=new j,nl=new Wo,Ts=new j,ws=new j,As=new j,cr=new j,fr=new j,Or=new j,Lo=new j,il=new j,rl=new j,kr=new j;function Sc(s,e,n,r,a){for(let u=0,f=s.length-3;u<=f;u+=3){kr.fromArray(s,u);const d=a.x*Math.abs(kr.x)+a.y*Math.abs(kr.y)+a.z*Math.abs(kr.z),p=e.dot(kr),m=n.dot(kr),_=r.dot(kr);if(Math.max(-Math.max(p,m,_),Math.min(p,m,_))>d)return!1}return!0}const h0=new Wo,Uo=new j,Mc=new j;class Yf{constructor(e=new j,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):h0.setFromPoints(e).getCenter(r);let a=0;for(let u=0,f=e.length;u<f;u++)a=Math.max(a,r.distanceToSquared(e[u]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Uo.subVectors(e,this.center);const n=Uo.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),a=(r-this.radius)*.5;this.center.addScaledVector(Uo,a/r),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Mc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Uo.copy(e.center).add(Mc)),this.expandByPoint(Uo.copy(e.center).sub(Mc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Li=new j,Ec=new j,sl=new j,dr=new j,Tc=new j,ol=new j,wc=new j;class $m{constructor(e=new j,n=new j(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Li)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Li.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Li.copy(this.origin).addScaledVector(this.direction,n),Li.distanceToSquared(e))}distanceSqToSegment(e,n,r,a){Ec.copy(e).add(n).multiplyScalar(.5),sl.copy(n).sub(e).normalize(),dr.copy(this.origin).sub(Ec);const u=e.distanceTo(n)*.5,f=-this.direction.dot(sl),d=dr.dot(this.direction),p=-dr.dot(sl),m=dr.lengthSq(),_=Math.abs(1-f*f);let v,x,S,w;if(_>0)if(v=f*p-d,x=f*d-p,w=u*_,v>=0)if(x>=-w)if(x<=w){const R=1/_;v*=R,x*=R,S=v*(v+f*x+2*d)+x*(f*v+x+2*p)+m}else x=u,v=Math.max(0,-(f*x+d)),S=-v*v+x*(x+2*p)+m;else x=-u,v=Math.max(0,-(f*x+d)),S=-v*v+x*(x+2*p)+m;else x<=-w?(v=Math.max(0,-(-f*u+d)),x=v>0?-u:Math.min(Math.max(-u,-p),u),S=-v*v+x*(x+2*p)+m):x<=w?(v=0,x=Math.min(Math.max(-u,-p),u),S=x*(x+2*p)+m):(v=Math.max(0,-(f*u+d)),x=v>0?u:Math.min(Math.max(-u,-p),u),S=-v*v+x*(x+2*p)+m);else x=f>0?-u:u,v=Math.max(0,-(f*x+d)),S=-v*v+x*(x+2*p)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,v),a&&a.copy(Ec).addScaledVector(sl,x),S}intersectSphere(e,n){Li.subVectors(e.center,this.origin);const r=Li.dot(this.direction),a=Li.dot(Li)-r*r,u=e.radius*e.radius;if(a>u)return null;const f=Math.sqrt(u-a),d=r-f,p=r+f;return p<0?null:d<0?this.at(p,n):this.at(d,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,a,u,f,d,p;const m=1/this.direction.x,_=1/this.direction.y,v=1/this.direction.z,x=this.origin;return m>=0?(r=(e.min.x-x.x)*m,a=(e.max.x-x.x)*m):(r=(e.max.x-x.x)*m,a=(e.min.x-x.x)*m),_>=0?(u=(e.min.y-x.y)*_,f=(e.max.y-x.y)*_):(u=(e.max.y-x.y)*_,f=(e.min.y-x.y)*_),r>f||u>a||((u>r||isNaN(r))&&(r=u),(f<a||isNaN(a))&&(a=f),v>=0?(d=(e.min.z-x.z)*v,p=(e.max.z-x.z)*v):(d=(e.max.z-x.z)*v,p=(e.min.z-x.z)*v),r>p||d>a)||((d>r||r!==r)&&(r=d),(p<a||a!==a)&&(a=p),a<0)?null:this.at(r>=0?r:a,n)}intersectsBox(e){return this.intersectBox(e,Li)!==null}intersectTriangle(e,n,r,a,u){Tc.subVectors(n,e),ol.subVectors(r,e),wc.crossVectors(Tc,ol);let f=this.direction.dot(wc),d;if(f>0){if(a)return null;d=1}else if(f<0)d=-1,f=-f;else return null;dr.subVectors(this.origin,e);const p=d*this.direction.dot(ol.crossVectors(dr,ol));if(p<0)return null;const m=d*this.direction.dot(Tc.cross(dr));if(m<0||p+m>f)return null;const _=-d*dr.dot(wc);return _<0?null:this.at(_/f,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class zt{constructor(e,n,r,a,u,f,d,p,m,_,v,x,S,w,R,y){zt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,r,a,u,f,d,p,m,_,v,x,S,w,R,y)}set(e,n,r,a,u,f,d,p,m,_,v,x,S,w,R,y){const g=this.elements;return g[0]=e,g[4]=n,g[8]=r,g[12]=a,g[1]=u,g[5]=f,g[9]=d,g[13]=p,g[2]=m,g[6]=_,g[10]=v,g[14]=x,g[3]=S,g[7]=w,g[11]=R,g[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new zt().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,r=e.elements,a=1/Rs.setFromMatrixColumn(e,0).length(),u=1/Rs.setFromMatrixColumn(e,1).length(),f=1/Rs.setFromMatrixColumn(e,2).length();return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=0,n[4]=r[4]*u,n[5]=r[5]*u,n[6]=r[6]*u,n[7]=0,n[8]=r[8]*f,n[9]=r[9]*f,n[10]=r[10]*f,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,a=e.y,u=e.z,f=Math.cos(r),d=Math.sin(r),p=Math.cos(a),m=Math.sin(a),_=Math.cos(u),v=Math.sin(u);if(e.order==="XYZ"){const x=f*_,S=f*v,w=d*_,R=d*v;n[0]=p*_,n[4]=-p*v,n[8]=m,n[1]=S+w*m,n[5]=x-R*m,n[9]=-d*p,n[2]=R-x*m,n[6]=w+S*m,n[10]=f*p}else if(e.order==="YXZ"){const x=p*_,S=p*v,w=m*_,R=m*v;n[0]=x+R*d,n[4]=w*d-S,n[8]=f*m,n[1]=f*v,n[5]=f*_,n[9]=-d,n[2]=S*d-w,n[6]=R+x*d,n[10]=f*p}else if(e.order==="ZXY"){const x=p*_,S=p*v,w=m*_,R=m*v;n[0]=x-R*d,n[4]=-f*v,n[8]=w+S*d,n[1]=S+w*d,n[5]=f*_,n[9]=R-x*d,n[2]=-f*m,n[6]=d,n[10]=f*p}else if(e.order==="ZYX"){const x=f*_,S=f*v,w=d*_,R=d*v;n[0]=p*_,n[4]=w*m-S,n[8]=x*m+R,n[1]=p*v,n[5]=R*m+x,n[9]=S*m-w,n[2]=-m,n[6]=d*p,n[10]=f*p}else if(e.order==="YZX"){const x=f*p,S=f*m,w=d*p,R=d*m;n[0]=p*_,n[4]=R-x*v,n[8]=w*v+S,n[1]=v,n[5]=f*_,n[9]=-d*_,n[2]=-m*_,n[6]=S*v+w,n[10]=x-R*v}else if(e.order==="XZY"){const x=f*p,S=f*m,w=d*p,R=d*m;n[0]=p*_,n[4]=-v,n[8]=m*_,n[1]=x*v+R,n[5]=f*_,n[9]=S*v-w,n[2]=w*v-S,n[6]=d*_,n[10]=R*v+x}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(p0,e,m0)}lookAt(e,n,r){const a=this.elements;return Bn.subVectors(e,n),Bn.lengthSq()===0&&(Bn.z=1),Bn.normalize(),hr.crossVectors(r,Bn),hr.lengthSq()===0&&(Math.abs(r.z)===1?Bn.x+=1e-4:Bn.z+=1e-4,Bn.normalize(),hr.crossVectors(r,Bn)),hr.normalize(),al.crossVectors(Bn,hr),a[0]=hr.x,a[4]=al.x,a[8]=Bn.x,a[1]=hr.y,a[5]=al.y,a[9]=Bn.y,a[2]=hr.z,a[6]=al.z,a[10]=Bn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,a=n.elements,u=this.elements,f=r[0],d=r[4],p=r[8],m=r[12],_=r[1],v=r[5],x=r[9],S=r[13],w=r[2],R=r[6],y=r[10],g=r[14],I=r[3],L=r[7],C=r[11],W=r[15],k=a[0],F=a[4],Y=a[8],P=a[12],A=a[1],z=a[5],oe=a[9],te=a[13],ce=a[2],he=a[6],se=a[10],le=a[14],B=a[3],ae=a[7],re=a[11],U=a[15];return u[0]=f*k+d*A+p*ce+m*B,u[4]=f*F+d*z+p*he+m*ae,u[8]=f*Y+d*oe+p*se+m*re,u[12]=f*P+d*te+p*le+m*U,u[1]=_*k+v*A+x*ce+S*B,u[5]=_*F+v*z+x*he+S*ae,u[9]=_*Y+v*oe+x*se+S*re,u[13]=_*P+v*te+x*le+S*U,u[2]=w*k+R*A+y*ce+g*B,u[6]=w*F+R*z+y*he+g*ae,u[10]=w*Y+R*oe+y*se+g*re,u[14]=w*P+R*te+y*le+g*U,u[3]=I*k+L*A+C*ce+W*B,u[7]=I*F+L*z+C*he+W*ae,u[11]=I*Y+L*oe+C*se+W*re,u[15]=I*P+L*te+C*le+W*U,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],a=e[8],u=e[12],f=e[1],d=e[5],p=e[9],m=e[13],_=e[2],v=e[6],x=e[10],S=e[14],w=e[3],R=e[7],y=e[11],g=e[15];return w*(+u*p*v-a*m*v-u*d*x+r*m*x+a*d*S-r*p*S)+R*(+n*p*S-n*m*x+u*f*x-a*f*S+a*m*_-u*p*_)+y*(+n*m*v-n*d*S-u*f*v+r*f*S+u*d*_-r*m*_)+g*(-a*d*_-n*p*v+n*d*x+a*f*v-r*f*x+r*p*_)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=n,a[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],a=e[2],u=e[3],f=e[4],d=e[5],p=e[6],m=e[7],_=e[8],v=e[9],x=e[10],S=e[11],w=e[12],R=e[13],y=e[14],g=e[15],I=v*y*m-R*x*m+R*p*S-d*y*S-v*p*g+d*x*g,L=w*x*m-_*y*m-w*p*S+f*y*S+_*p*g-f*x*g,C=_*R*m-w*v*m+w*d*S-f*R*S-_*d*g+f*v*g,W=w*v*p-_*R*p-w*d*x+f*R*x+_*d*y-f*v*y,k=n*I+r*L+a*C+u*W;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/k;return e[0]=I*F,e[1]=(R*x*u-v*y*u-R*a*S+r*y*S+v*a*g-r*x*g)*F,e[2]=(d*y*u-R*p*u+R*a*m-r*y*m-d*a*g+r*p*g)*F,e[3]=(v*p*u-d*x*u-v*a*m+r*x*m+d*a*S-r*p*S)*F,e[4]=L*F,e[5]=(_*y*u-w*x*u+w*a*S-n*y*S-_*a*g+n*x*g)*F,e[6]=(w*p*u-f*y*u-w*a*m+n*y*m+f*a*g-n*p*g)*F,e[7]=(f*x*u-_*p*u+_*a*m-n*x*m-f*a*S+n*p*S)*F,e[8]=C*F,e[9]=(w*v*u-_*R*u-w*r*S+n*R*S+_*r*g-n*v*g)*F,e[10]=(f*R*u-w*d*u+w*r*m-n*R*m-f*r*g+n*d*g)*F,e[11]=(_*d*u-f*v*u-_*r*m+n*v*m+f*r*S-n*d*S)*F,e[12]=W*F,e[13]=(_*R*a-w*v*a+w*r*x-n*R*x-_*r*y+n*v*y)*F,e[14]=(w*d*a-f*R*a-w*r*p+n*R*p+f*r*y-n*d*y)*F,e[15]=(f*v*a-_*d*a+_*r*p-n*v*p-f*r*x+n*d*x)*F,this}scale(e){const n=this.elements,r=e.x,a=e.y,u=e.z;return n[0]*=r,n[4]*=a,n[8]*=u,n[1]*=r,n[5]*=a,n[9]*=u,n[2]*=r,n[6]*=a,n[10]*=u,n[3]*=r,n[7]*=a,n[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,a))}makeTranslation(e,n,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),a=Math.sin(n),u=1-r,f=e.x,d=e.y,p=e.z,m=u*f,_=u*d;return this.set(m*f+r,m*d-a*p,m*p+a*d,0,m*d+a*p,_*d+r,_*p-a*f,0,m*p-a*d,_*p+a*f,u*p*p+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,a,u,f){return this.set(1,r,u,0,e,1,f,0,n,a,1,0,0,0,0,1),this}compose(e,n,r){const a=this.elements,u=n._x,f=n._y,d=n._z,p=n._w,m=u+u,_=f+f,v=d+d,x=u*m,S=u*_,w=u*v,R=f*_,y=f*v,g=d*v,I=p*m,L=p*_,C=p*v,W=r.x,k=r.y,F=r.z;return a[0]=(1-(R+g))*W,a[1]=(S+C)*W,a[2]=(w-L)*W,a[3]=0,a[4]=(S-C)*k,a[5]=(1-(x+g))*k,a[6]=(y+I)*k,a[7]=0,a[8]=(w+L)*F,a[9]=(y-I)*F,a[10]=(1-(x+R))*F,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,n,r){const a=this.elements;let u=Rs.set(a[0],a[1],a[2]).length();const f=Rs.set(a[4],a[5],a[6]).length(),d=Rs.set(a[8],a[9],a[10]).length();this.determinant()<0&&(u=-u),e.x=a[12],e.y=a[13],e.z=a[14],ii.copy(this);const m=1/u,_=1/f,v=1/d;return ii.elements[0]*=m,ii.elements[1]*=m,ii.elements[2]*=m,ii.elements[4]*=_,ii.elements[5]*=_,ii.elements[6]*=_,ii.elements[8]*=v,ii.elements[9]*=v,ii.elements[10]*=v,n.setFromRotationMatrix(ii),r.x=u,r.y=f,r.z=d,this}makePerspective(e,n,r,a,u,f,d=Bi){const p=this.elements,m=2*u/(n-e),_=2*u/(r-a),v=(n+e)/(n-e),x=(r+a)/(r-a);let S,w;if(d===Bi)S=-(f+u)/(f-u),w=-2*f*u/(f-u);else if(d===Dl)S=-f/(f-u),w=-f*u/(f-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=m,p[4]=0,p[8]=v,p[12]=0,p[1]=0,p[5]=_,p[9]=x,p[13]=0,p[2]=0,p[6]=0,p[10]=S,p[14]=w,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,n,r,a,u,f,d=Bi){const p=this.elements,m=1/(n-e),_=1/(r-a),v=1/(f-u),x=(n+e)*m,S=(r+a)*_;let w,R;if(d===Bi)w=(f+u)*v,R=-2*v;else if(d===Dl)w=u*v,R=-1*v;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=2*m,p[4]=0,p[8]=0,p[12]=-x,p[1]=0,p[5]=2*_,p[9]=0,p[13]=-S,p[2]=0,p[6]=0,p[10]=R,p[14]=-w,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let a=0;a<16;a++)if(n[a]!==r[a])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}}const Rs=new j,ii=new zt,p0=new j(0,0,0),m0=new j(1,1,1),hr=new j,al=new j,Bn=new j,zp=new zt,Hp=new $r;class xi{constructor(e=0,n=0,r=0,a=xi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,a=this._order){return this._x=e,this._y=n,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const a=e.elements,u=a[0],f=a[4],d=a[8],p=a[1],m=a[5],_=a[9],v=a[2],x=a[6],S=a[10];switch(n){case"XYZ":this._y=Math.asin(dt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-_,S),this._z=Math.atan2(-f,u)):(this._x=Math.atan2(x,m),this._z=0);break;case"YXZ":this._x=Math.asin(-dt(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(d,S),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-v,u),this._z=0);break;case"ZXY":this._x=Math.asin(dt(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-v,S),this._z=Math.atan2(-f,m)):(this._y=0,this._z=Math.atan2(p,u));break;case"ZYX":this._y=Math.asin(-dt(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(x,S),this._z=Math.atan2(p,u)):(this._x=0,this._z=Math.atan2(-f,m));break;case"YZX":this._z=Math.asin(dt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-_,m),this._y=Math.atan2(-v,u)):(this._x=0,this._y=Math.atan2(d,S));break;case"XZY":this._z=Math.asin(-dt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(x,m),this._y=Math.atan2(d,u)):(this._x=Math.atan2(-_,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return zp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(zp,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Hp.setFromEuler(this),this.setFromQuaternion(Hp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}xi.DEFAULT_ORDER="XYZ";class Zm{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let g0=0;const Vp=new j,Cs=new $r,Ui=new zt,ll=new j,Io=new j,_0=new j,v0=new $r,Gp=new j(1,0,0),Wp=new j(0,1,0),Xp=new j(0,0,1),Yp={type:"added"},x0={type:"removed"},Ps={type:"childadded",child:null},Ac={type:"childremoved",child:null};class In extends Zr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:g0++}),this.uuid=Zs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=In.DEFAULT_UP.clone();const e=new j,n=new xi,r=new $r,a=new j(1,1,1);function u(){r.setFromEuler(n,!1)}function f(){n.setFromQuaternion(r,void 0,!1)}n._onChange(u),r._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new zt},normalMatrix:{value:new ot}}),this.matrix=new zt,this.matrixWorld=new zt,this.matrixAutoUpdate=In.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=In.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Zm,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Cs.setFromAxisAngle(e,n),this.quaternion.multiply(Cs),this}rotateOnWorldAxis(e,n){return Cs.setFromAxisAngle(e,n),this.quaternion.premultiply(Cs),this}rotateX(e){return this.rotateOnAxis(Gp,e)}rotateY(e){return this.rotateOnAxis(Wp,e)}rotateZ(e){return this.rotateOnAxis(Xp,e)}translateOnAxis(e,n){return Vp.copy(e).applyQuaternion(this.quaternion),this.position.add(Vp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Gp,e)}translateY(e){return this.translateOnAxis(Wp,e)}translateZ(e){return this.translateOnAxis(Xp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ui.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?ll.copy(e):ll.set(e,n,r);const a=this.parent;this.updateWorldMatrix(!0,!1),Io.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ui.lookAt(Io,ll,this.up):Ui.lookAt(ll,Io,this.up),this.quaternion.setFromRotationMatrix(Ui),a&&(Ui.extractRotation(a.matrixWorld),Cs.setFromRotationMatrix(Ui),this.quaternion.premultiply(Cs.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Yp),Ps.child=e,this.dispatchEvent(Ps),Ps.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(x0),Ac.child=e,this.dispatchEvent(Ac),Ac.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ui.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ui.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ui),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Yp),Ps.child=e,this.dispatchEvent(Ps),Ps.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,a=this.children.length;r<a;r++){const f=this.children[r].getObjectByProperty(e,n);if(f!==void 0)return f}}getObjectsByProperty(e,n,r=[]){this[e]===n&&r.push(this);const a=this.children;for(let u=0,f=a.length;u<f;u++)a[u].getObjectsByProperty(e,n,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Io,e,_0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Io,v0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].updateMatrixWorld(e)}updateWorldMatrix(e,n){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const a=this.children;for(let u=0,f=a.length;u<f;u++)a[u].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.visibility=this._visibility,a.active=this._active,a.bounds=this._bounds.map(d=>({boxInitialized:d.boxInitialized,boxMin:d.box.min.toArray(),boxMax:d.box.max.toArray(),sphereInitialized:d.sphereInitialized,sphereRadius:d.sphere.radius,sphereCenter:d.sphere.center.toArray()})),a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.geometryCount=this._geometryCount,a.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere={center:a.boundingSphere.center.toArray(),radius:a.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}));function u(d,p){return d[p.uuid]===void 0&&(d[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=u(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const p=d.shapes;if(Array.isArray(p))for(let m=0,_=p.length;m<_;m++){const v=p[m];u(e.shapes,v)}else u(e.shapes,p)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let p=0,m=this.material.length;p<m;p++)d.push(u(e.materials,this.material[p]));a.material=d}else a.material=u(e.materials,this.material);if(this.children.length>0){a.children=[];for(let d=0;d<this.children.length;d++)a.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let d=0;d<this.animations.length;d++){const p=this.animations[d];a.animations.push(u(e.animations,p))}}if(n){const d=f(e.geometries),p=f(e.materials),m=f(e.textures),_=f(e.images),v=f(e.shapes),x=f(e.skeletons),S=f(e.animations),w=f(e.nodes);d.length>0&&(r.geometries=d),p.length>0&&(r.materials=p),m.length>0&&(r.textures=m),_.length>0&&(r.images=_),v.length>0&&(r.shapes=v),x.length>0&&(r.skeletons=x),S.length>0&&(r.animations=S),w.length>0&&(r.nodes=w)}return r.object=a,r;function f(d){const p=[];for(const m in d){const _=d[m];delete _.metadata,p.push(_)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const a=e.children[r];this.add(a.clone())}return this}}In.DEFAULT_UP=new j(0,1,0);In.DEFAULT_MATRIX_AUTO_UPDATE=!0;In.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ri=new j,Ii=new j,Rc=new j,Ni=new j,bs=new j,Ds=new j,jp=new j,Cc=new j,Pc=new j,bc=new j,Dc=new Pt,Lc=new Pt,Uc=new Pt;class si{constructor(e=new j,n=new j,r=new j){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,a){a.subVectors(r,n),ri.subVectors(e,n),a.cross(ri);const u=a.lengthSq();return u>0?a.multiplyScalar(1/Math.sqrt(u)):a.set(0,0,0)}static getBarycoord(e,n,r,a,u){ri.subVectors(a,n),Ii.subVectors(r,n),Rc.subVectors(e,n);const f=ri.dot(ri),d=ri.dot(Ii),p=ri.dot(Rc),m=Ii.dot(Ii),_=Ii.dot(Rc),v=f*m-d*d;if(v===0)return u.set(0,0,0),null;const x=1/v,S=(m*p-d*_)*x,w=(f*_-d*p)*x;return u.set(1-S-w,w,S)}static containsPoint(e,n,r,a){return this.getBarycoord(e,n,r,a,Ni)===null?!1:Ni.x>=0&&Ni.y>=0&&Ni.x+Ni.y<=1}static getInterpolation(e,n,r,a,u,f,d,p){return this.getBarycoord(e,n,r,a,Ni)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(u,Ni.x),p.addScaledVector(f,Ni.y),p.addScaledVector(d,Ni.z),p)}static getInterpolatedAttribute(e,n,r,a,u,f){return Dc.setScalar(0),Lc.setScalar(0),Uc.setScalar(0),Dc.fromBufferAttribute(e,n),Lc.fromBufferAttribute(e,r),Uc.fromBufferAttribute(e,a),f.setScalar(0),f.addScaledVector(Dc,u.x),f.addScaledVector(Lc,u.y),f.addScaledVector(Uc,u.z),f}static isFrontFacing(e,n,r,a){return ri.subVectors(r,n),Ii.subVectors(e,n),ri.cross(Ii).dot(a)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,a){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,n,r,a){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ri.subVectors(this.c,this.b),Ii.subVectors(this.a,this.b),ri.cross(Ii).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return si.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return si.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,r,a,u){return si.getInterpolation(e,this.a,this.b,this.c,n,r,a,u)}containsPoint(e){return si.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return si.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,a=this.b,u=this.c;let f,d;bs.subVectors(a,r),Ds.subVectors(u,r),Cc.subVectors(e,r);const p=bs.dot(Cc),m=Ds.dot(Cc);if(p<=0&&m<=0)return n.copy(r);Pc.subVectors(e,a);const _=bs.dot(Pc),v=Ds.dot(Pc);if(_>=0&&v<=_)return n.copy(a);const x=p*v-_*m;if(x<=0&&p>=0&&_<=0)return f=p/(p-_),n.copy(r).addScaledVector(bs,f);bc.subVectors(e,u);const S=bs.dot(bc),w=Ds.dot(bc);if(w>=0&&S<=w)return n.copy(u);const R=S*m-p*w;if(R<=0&&m>=0&&w<=0)return d=m/(m-w),n.copy(r).addScaledVector(Ds,d);const y=_*w-S*v;if(y<=0&&v-_>=0&&S-w>=0)return jp.subVectors(u,a),d=(v-_)/(v-_+(S-w)),n.copy(a).addScaledVector(jp,d);const g=1/(y+R+x);return f=R*g,d=x*g,n.copy(r).addScaledVector(bs,f).addScaledVector(Ds,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Qm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},pr={h:0,s:0,l:0},ul={h:0,s:0,l:0};function Ic(s,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?s+(e-s)*6*n:n<1/2?e:n<2/3?s+(e-s)*6*(2/3-n):s}class Et{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,r)}set(e,n,r){if(n===void 0&&r===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,n,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Kn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Mt.toWorkingColorSpace(this,n),this}setRGB(e,n,r,a=Mt.workingColorSpace){return this.r=e,this.g=n,this.b=r,Mt.toWorkingColorSpace(this,a),this}setHSL(e,n,r,a=Mt.workingColorSpace){if(e=Xf(e,1),n=dt(n,0,1),r=dt(r,0,1),n===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+n):r+n-r*n,f=2*r-u;this.r=Ic(f,u,e+1/3),this.g=Ic(f,u,e),this.b=Ic(f,u,e-1/3)}return Mt.toWorkingColorSpace(this,a),this}setStyle(e,n=Kn){function r(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const f=a[1],d=a[2];switch(f){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,n);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,n);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=a[1],f=u.length;if(f===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,n);if(f===6)return this.setHex(parseInt(u,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Kn){const r=Qm[e.toLowerCase()];return r!==void 0?this.setHex(r,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=zi(e.r),this.g=zi(e.g),this.b=zi(e.b),this}copyLinearToSRGB(e){return this.r=Gs(e.r),this.g=Gs(e.g),this.b=Gs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Kn){return Mt.fromWorkingColorSpace(gn.copy(this),e),Math.round(dt(gn.r*255,0,255))*65536+Math.round(dt(gn.g*255,0,255))*256+Math.round(dt(gn.b*255,0,255))}getHexString(e=Kn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Mt.workingColorSpace){Mt.fromWorkingColorSpace(gn.copy(this),n);const r=gn.r,a=gn.g,u=gn.b,f=Math.max(r,a,u),d=Math.min(r,a,u);let p,m;const _=(d+f)/2;if(d===f)p=0,m=0;else{const v=f-d;switch(m=_<=.5?v/(f+d):v/(2-f-d),f){case r:p=(a-u)/v+(a<u?6:0);break;case a:p=(u-r)/v+2;break;case u:p=(r-a)/v+4;break}p/=6}return e.h=p,e.s=m,e.l=_,e}getRGB(e,n=Mt.workingColorSpace){return Mt.fromWorkingColorSpace(gn.copy(this),n),e.r=gn.r,e.g=gn.g,e.b=gn.b,e}getStyle(e=Kn){Mt.fromWorkingColorSpace(gn.copy(this),e);const n=gn.r,r=gn.g,a=gn.b;return e!==Kn?`color(${e} ${n.toFixed(3)} ${r.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(a*255)})`}offsetHSL(e,n,r){return this.getHSL(pr),this.setHSL(pr.h+e,pr.s+n,pr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL(pr),e.getHSL(ul);const r=Bo(pr.h,ul.h,n),a=Bo(pr.s,ul.s,n),u=Bo(pr.l,ul.l,n);return this.setHSL(r,a,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,r=this.g,a=this.b,u=e.elements;return this.r=u[0]*n+u[3]*r+u[6]*a,this.g=u[1]*n+u[4]*r+u[7]*a,this.b=u[2]*n+u[5]*r+u[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const gn=new Et;Et.NAMES=Qm;let y0=0;class Xo extends Zr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:y0++}),this.uuid=Zs(),this.name="",this.type="Material",this.blending=Hs,this.side=yr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Kc,this.blendDst=$c,this.blendEquation=Wr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Et(0,0,0),this.blendAlpha=0,this.depthFunc=Ws,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Lp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ms,this.stencilZFail=Ms,this.stencilZPass=Ms,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(r):a&&a.isVector3&&r&&r.isVector3?a.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Hs&&(r.blending=this.blending),this.side!==yr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Kc&&(r.blendSrc=this.blendSrc),this.blendDst!==$c&&(r.blendDst=this.blendDst),this.blendEquation!==Wr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Ws&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Lp&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ms&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Ms&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Ms&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function a(u){const f=[];for(const d in u){const p=u[d];delete p.metadata,f.push(p)}return f}if(n){const u=a(e.textures),f=a(e.images);u.length>0&&(r.textures=u),f.length>0&&(r.images=f)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const a=n.length;r=new Array(a);for(let u=0;u!==a;++u)r[u]=n[u].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Jm extends Xo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xi,this.combine=kf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Yt=new j,cl=new st;class _i{constructor(e,n,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r,this.usage=Up,this.updateRanges=[],this.gpuType=ki,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let a=0,u=this.itemSize;a<u;a++)this.array[e+a]=n.array[r+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)cl.fromBufferAttribute(this,n),cl.applyMatrix3(e),this.setXY(n,cl.x,cl.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)Yt.fromBufferAttribute(this,n),Yt.applyMatrix3(e),this.setXYZ(n,Yt.x,Yt.y,Yt.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)Yt.fromBufferAttribute(this,n),Yt.applyMatrix4(e),this.setXYZ(n,Yt.x,Yt.y,Yt.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)Yt.fromBufferAttribute(this,n),Yt.applyNormalMatrix(e),this.setXYZ(n,Yt.x,Yt.y,Yt.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)Yt.fromBufferAttribute(this,n),Yt.transformDirection(e),this.setXYZ(n,Yt.x,Yt.y,Yt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let r=this.array[e*this.itemSize+n];return this.normalized&&(r=Fs(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=Mn(r,this.array)),this.array[e*this.itemSize+n]=r,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Fs(n,this.array)),n}setX(e,n){return this.normalized&&(n=Mn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Fs(n,this.array)),n}setY(e,n){return this.normalized&&(n=Mn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Fs(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Mn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Fs(n,this.array)),n}setW(e,n){return this.normalized&&(n=Mn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.normalized&&(n=Mn(n,this.array),r=Mn(r,this.array)),this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,a){return e*=this.itemSize,this.normalized&&(n=Mn(n,this.array),r=Mn(r,this.array),a=Mn(a,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=a,this}setXYZW(e,n,r,a,u){return e*=this.itemSize,this.normalized&&(n=Mn(n,this.array),r=Mn(r,this.array),a=Mn(a,this.array),u=Mn(u,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=a,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Up&&(e.usage=this.usage),e}}class eg extends _i{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class tg extends _i{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class vi extends _i{constructor(e,n,r){super(new Float32Array(e),n,r)}}let S0=0;const qn=new zt,Nc=new In,Ls=new j,zn=new Wo,No=new Wo,sn=new j;class Mr extends Zr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:S0++}),this.uuid=Zs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(jm(e)?tg:eg)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new ot().getNormalMatrix(e);r.applyNormalMatrix(u),r.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return qn.makeRotationFromQuaternion(e),this.applyMatrix4(qn),this}rotateX(e){return qn.makeRotationX(e),this.applyMatrix4(qn),this}rotateY(e){return qn.makeRotationY(e),this.applyMatrix4(qn),this}rotateZ(e){return qn.makeRotationZ(e),this.applyMatrix4(qn),this}translate(e,n,r){return qn.makeTranslation(e,n,r),this.applyMatrix4(qn),this}scale(e,n,r){return qn.makeScale(e,n,r),this.applyMatrix4(qn),this}lookAt(e){return Nc.lookAt(e),Nc.updateMatrix(),this.applyMatrix4(Nc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ls).negate(),this.translate(Ls.x,Ls.y,Ls.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const r=[];for(let a=0,u=e.length;a<u;a++){const f=e[a];r.push(f.x,f.y,f.z||0)}this.setAttribute("position",new vi(r,3))}else{const r=Math.min(e.length,n.count);for(let a=0;a<r;a++){const u=e[a];n.setXYZ(a,u.x,u.y,u.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new j(-1/0,-1/0,-1/0),new j(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,a=n.length;r<a;r++){const u=n[r];zn.setFromBufferAttribute(u),this.morphTargetsRelative?(sn.addVectors(this.boundingBox.min,zn.min),this.boundingBox.expandByPoint(sn),sn.addVectors(this.boundingBox.max,zn.max),this.boundingBox.expandByPoint(sn)):(this.boundingBox.expandByPoint(zn.min),this.boundingBox.expandByPoint(zn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Yf);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new j,1/0);return}if(e){const r=this.boundingSphere.center;if(zn.setFromBufferAttribute(e),n)for(let u=0,f=n.length;u<f;u++){const d=n[u];No.setFromBufferAttribute(d),this.morphTargetsRelative?(sn.addVectors(zn.min,No.min),zn.expandByPoint(sn),sn.addVectors(zn.max,No.max),zn.expandByPoint(sn)):(zn.expandByPoint(No.min),zn.expandByPoint(No.max))}zn.getCenter(r);let a=0;for(let u=0,f=e.count;u<f;u++)sn.fromBufferAttribute(e,u),a=Math.max(a,r.distanceToSquared(sn));if(n)for(let u=0,f=n.length;u<f;u++){const d=n[u],p=this.morphTargetsRelative;for(let m=0,_=d.count;m<_;m++)sn.fromBufferAttribute(d,m),p&&(Ls.fromBufferAttribute(e,m),sn.add(Ls)),a=Math.max(a,r.distanceToSquared(sn))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,a=n.normal,u=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new _i(new Float32Array(4*r.count),4));const f=this.getAttribute("tangent"),d=[],p=[];for(let Y=0;Y<r.count;Y++)d[Y]=new j,p[Y]=new j;const m=new j,_=new j,v=new j,x=new st,S=new st,w=new st,R=new j,y=new j;function g(Y,P,A){m.fromBufferAttribute(r,Y),_.fromBufferAttribute(r,P),v.fromBufferAttribute(r,A),x.fromBufferAttribute(u,Y),S.fromBufferAttribute(u,P),w.fromBufferAttribute(u,A),_.sub(m),v.sub(m),S.sub(x),w.sub(x);const z=1/(S.x*w.y-w.x*S.y);isFinite(z)&&(R.copy(_).multiplyScalar(w.y).addScaledVector(v,-S.y).multiplyScalar(z),y.copy(v).multiplyScalar(S.x).addScaledVector(_,-w.x).multiplyScalar(z),d[Y].add(R),d[P].add(R),d[A].add(R),p[Y].add(y),p[P].add(y),p[A].add(y))}let I=this.groups;I.length===0&&(I=[{start:0,count:e.count}]);for(let Y=0,P=I.length;Y<P;++Y){const A=I[Y],z=A.start,oe=A.count;for(let te=z,ce=z+oe;te<ce;te+=3)g(e.getX(te+0),e.getX(te+1),e.getX(te+2))}const L=new j,C=new j,W=new j,k=new j;function F(Y){W.fromBufferAttribute(a,Y),k.copy(W);const P=d[Y];L.copy(P),L.sub(W.multiplyScalar(W.dot(P))).normalize(),C.crossVectors(k,P);const z=C.dot(p[Y])<0?-1:1;f.setXYZW(Y,L.x,L.y,L.z,z)}for(let Y=0,P=I.length;Y<P;++Y){const A=I[Y],z=A.start,oe=A.count;for(let te=z,ce=z+oe;te<ce;te+=3)F(e.getX(te+0)),F(e.getX(te+1)),F(e.getX(te+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new _i(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let x=0,S=r.count;x<S;x++)r.setXYZ(x,0,0,0);const a=new j,u=new j,f=new j,d=new j,p=new j,m=new j,_=new j,v=new j;if(e)for(let x=0,S=e.count;x<S;x+=3){const w=e.getX(x+0),R=e.getX(x+1),y=e.getX(x+2);a.fromBufferAttribute(n,w),u.fromBufferAttribute(n,R),f.fromBufferAttribute(n,y),_.subVectors(f,u),v.subVectors(a,u),_.cross(v),d.fromBufferAttribute(r,w),p.fromBufferAttribute(r,R),m.fromBufferAttribute(r,y),d.add(_),p.add(_),m.add(_),r.setXYZ(w,d.x,d.y,d.z),r.setXYZ(R,p.x,p.y,p.z),r.setXYZ(y,m.x,m.y,m.z)}else for(let x=0,S=n.count;x<S;x+=3)a.fromBufferAttribute(n,x+0),u.fromBufferAttribute(n,x+1),f.fromBufferAttribute(n,x+2),_.subVectors(f,u),v.subVectors(a,u),_.cross(v),r.setXYZ(x+0,_.x,_.y,_.z),r.setXYZ(x+1,_.x,_.y,_.z),r.setXYZ(x+2,_.x,_.y,_.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)sn.fromBufferAttribute(e,n),sn.normalize(),e.setXYZ(n,sn.x,sn.y,sn.z)}toNonIndexed(){function e(d,p){const m=d.array,_=d.itemSize,v=d.normalized,x=new m.constructor(p.length*_);let S=0,w=0;for(let R=0,y=p.length;R<y;R++){d.isInterleavedBufferAttribute?S=p[R]*d.data.stride+d.offset:S=p[R]*_;for(let g=0;g<_;g++)x[w++]=m[S++]}return new _i(x,_,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Mr,r=this.index.array,a=this.attributes;for(const d in a){const p=a[d],m=e(p,r);n.setAttribute(d,m)}const u=this.morphAttributes;for(const d in u){const p=[],m=u[d];for(let _=0,v=m.length;_<v;_++){const x=m[_],S=e(x,r);p.push(S)}n.morphAttributes[d]=p}n.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let d=0,p=f.length;d<p;d++){const m=f[d];n.addGroup(m.start,m.count,m.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(e[m]=p[m]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const p in r){const m=r[p];e.data.attributes[p]=m.toJSON(e.data)}const a={};let u=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],_=[];for(let v=0,x=m.length;v<x;v++){const S=m[v];_.push(S.toJSON(e.data))}_.length>0&&(a[p]=_,u=!0)}u&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(e.data.groups=JSON.parse(JSON.stringify(f)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(n));const a=e.attributes;for(const m in a){const _=a[m];this.setAttribute(m,_.clone(n))}const u=e.morphAttributes;for(const m in u){const _=[],v=u[m];for(let x=0,S=v.length;x<S;x++)_.push(v[x].clone(n));this.morphAttributes[m]=_}this.morphTargetsRelative=e.morphTargetsRelative;const f=e.groups;for(let m=0,_=f.length;m<_;m++){const v=f[m];this.addGroup(v.start,v.count,v.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const qp=new zt,Br=new $m,fl=new Yf,Kp=new j,dl=new j,hl=new j,pl=new j,Fc=new j,ml=new j,$p=new j,gl=new j;class gi extends In{constructor(e=new Mr,n=new Jm){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const a=n[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,f=a.length;u<f;u++){const d=a[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}getVertexPosition(e,n){const r=this.geometry,a=r.attributes.position,u=r.morphAttributes.position,f=r.morphTargetsRelative;n.fromBufferAttribute(a,e);const d=this.morphTargetInfluences;if(u&&d){ml.set(0,0,0);for(let p=0,m=u.length;p<m;p++){const _=d[p],v=u[p];_!==0&&(Fc.fromBufferAttribute(v,e),f?ml.addScaledVector(Fc,_):ml.addScaledVector(Fc.sub(n),_))}n.add(ml)}return n}raycast(e,n){const r=this.geometry,a=this.material,u=this.matrixWorld;a!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),fl.copy(r.boundingSphere),fl.applyMatrix4(u),Br.copy(e.ray).recast(e.near),!(fl.containsPoint(Br.origin)===!1&&(Br.intersectSphere(fl,Kp)===null||Br.origin.distanceToSquared(Kp)>(e.far-e.near)**2))&&(qp.copy(u).invert(),Br.copy(e.ray).applyMatrix4(qp),!(r.boundingBox!==null&&Br.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,n,Br)))}_computeIntersections(e,n,r){let a;const u=this.geometry,f=this.material,d=u.index,p=u.attributes.position,m=u.attributes.uv,_=u.attributes.uv1,v=u.attributes.normal,x=u.groups,S=u.drawRange;if(d!==null)if(Array.isArray(f))for(let w=0,R=x.length;w<R;w++){const y=x[w],g=f[y.materialIndex],I=Math.max(y.start,S.start),L=Math.min(d.count,Math.min(y.start+y.count,S.start+S.count));for(let C=I,W=L;C<W;C+=3){const k=d.getX(C),F=d.getX(C+1),Y=d.getX(C+2);a=_l(this,g,e,r,m,_,v,k,F,Y),a&&(a.faceIndex=Math.floor(C/3),a.face.materialIndex=y.materialIndex,n.push(a))}}else{const w=Math.max(0,S.start),R=Math.min(d.count,S.start+S.count);for(let y=w,g=R;y<g;y+=3){const I=d.getX(y),L=d.getX(y+1),C=d.getX(y+2);a=_l(this,f,e,r,m,_,v,I,L,C),a&&(a.faceIndex=Math.floor(y/3),n.push(a))}}else if(p!==void 0)if(Array.isArray(f))for(let w=0,R=x.length;w<R;w++){const y=x[w],g=f[y.materialIndex],I=Math.max(y.start,S.start),L=Math.min(p.count,Math.min(y.start+y.count,S.start+S.count));for(let C=I,W=L;C<W;C+=3){const k=C,F=C+1,Y=C+2;a=_l(this,g,e,r,m,_,v,k,F,Y),a&&(a.faceIndex=Math.floor(C/3),a.face.materialIndex=y.materialIndex,n.push(a))}}else{const w=Math.max(0,S.start),R=Math.min(p.count,S.start+S.count);for(let y=w,g=R;y<g;y+=3){const I=y,L=y+1,C=y+2;a=_l(this,f,e,r,m,_,v,I,L,C),a&&(a.faceIndex=Math.floor(y/3),n.push(a))}}}}function M0(s,e,n,r,a,u,f,d){let p;if(e.side===Un?p=r.intersectTriangle(f,u,a,!0,d):p=r.intersectTriangle(a,u,f,e.side===yr,d),p===null)return null;gl.copy(d),gl.applyMatrix4(s.matrixWorld);const m=n.ray.origin.distanceTo(gl);return m<n.near||m>n.far?null:{distance:m,point:gl.clone(),object:s}}function _l(s,e,n,r,a,u,f,d,p,m){s.getVertexPosition(d,dl),s.getVertexPosition(p,hl),s.getVertexPosition(m,pl);const _=M0(s,e,n,r,dl,hl,pl,$p);if(_){const v=new j;si.getBarycoord($p,dl,hl,pl,v),a&&(_.uv=si.getInterpolatedAttribute(a,d,p,m,v,new st)),u&&(_.uv1=si.getInterpolatedAttribute(u,d,p,m,v,new st)),f&&(_.normal=si.getInterpolatedAttribute(f,d,p,m,v,new j),_.normal.dot(r.direction)>0&&_.normal.multiplyScalar(-1));const x={a:d,b:p,c:m,normal:new j,materialIndex:0};si.getNormal(dl,hl,pl,x.normal),_.face=x,_.barycoord=v}return _}class Yo extends Mr{constructor(e=1,n=1,r=1,a=1,u=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:a,heightSegments:u,depthSegments:f};const d=this;a=Math.floor(a),u=Math.floor(u),f=Math.floor(f);const p=[],m=[],_=[],v=[];let x=0,S=0;w("z","y","x",-1,-1,r,n,e,f,u,0),w("z","y","x",1,-1,r,n,-e,f,u,1),w("x","z","y",1,1,e,r,n,a,f,2),w("x","z","y",1,-1,e,r,-n,a,f,3),w("x","y","z",1,-1,e,n,r,a,u,4),w("x","y","z",-1,-1,e,n,-r,a,u,5),this.setIndex(p),this.setAttribute("position",new vi(m,3)),this.setAttribute("normal",new vi(_,3)),this.setAttribute("uv",new vi(v,2));function w(R,y,g,I,L,C,W,k,F,Y,P){const A=C/F,z=W/Y,oe=C/2,te=W/2,ce=k/2,he=F+1,se=Y+1;let le=0,B=0;const ae=new j;for(let re=0;re<se;re++){const U=re*z-te;for(let ne=0;ne<he;ne++){const Ie=ne*A-oe;ae[R]=Ie*I,ae[y]=U*L,ae[g]=ce,m.push(ae.x,ae.y,ae.z),ae[R]=0,ae[y]=0,ae[g]=k>0?1:-1,_.push(ae.x,ae.y,ae.z),v.push(ne/F),v.push(1-re/Y),le+=1}}for(let re=0;re<Y;re++)for(let U=0;U<F;U++){const ne=x+U+he*re,Ie=x+U+he*(re+1),Q=x+(U+1)+he*(re+1),de=x+(U+1)+he*re;p.push(ne,Ie,de),p.push(Ie,Q,de),B+=6}d.addGroup(S,B,P),S+=B,x+=le}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function $s(s){const e={};for(const n in s){e[n]={};for(const r in s[n]){const a=s[n][r];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][r]=null):e[n][r]=a.clone():Array.isArray(a)?e[n][r]=a.slice():e[n][r]=a}}return e}function En(s){const e={};for(let n=0;n<s.length;n++){const r=$s(s[n]);for(const a in r)e[a]=r[a]}return e}function E0(s){const e=[];for(let n=0;n<s.length;n++)e.push(s[n].clone());return e}function ng(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Mt.workingColorSpace}const T0={clone:$s,merge:En};var w0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,A0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Sr extends Xo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=w0,this.fragmentShader=A0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=$s(e.uniforms),this.uniformsGroups=E0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const a in this.uniforms){const f=this.uniforms[a].value;f&&f.isTexture?n.uniforms[a]={type:"t",value:f.toJSON(e).uuid}:f&&f.isColor?n.uniforms[a]={type:"c",value:f.getHex()}:f&&f.isVector2?n.uniforms[a]={type:"v2",value:f.toArray()}:f&&f.isVector3?n.uniforms[a]={type:"v3",value:f.toArray()}:f&&f.isVector4?n.uniforms[a]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?n.uniforms[a]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?n.uniforms[a]={type:"m4",value:f.toArray()}:n.uniforms[a]={value:f}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const a in this.extensions)this.extensions[a]===!0&&(r[a]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}}class ig extends In{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new zt,this.projectionMatrix=new zt,this.projectionMatrixInverse=new zt,this.coordinateSystem=Bi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const mr=new j,Zp=new st,Qp=new st;class Hn extends ig{constructor(e=50,n=1,r=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=a,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Ho*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ko*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ho*2*Math.atan(Math.tan(ko*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,r){mr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(mr.x,mr.y).multiplyScalar(-e/mr.z),mr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(mr.x,mr.y).multiplyScalar(-e/mr.z)}getViewSize(e,n){return this.getViewBounds(e,Zp,Qp),n.subVectors(Qp,Zp)}setViewOffset(e,n,r,a,u,f){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=a,this.view.width=u,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(ko*.5*this.fov)/this.zoom,r=2*n,a=this.aspect*r,u=-.5*a;const f=this.view;if(this.view!==null&&this.view.enabled){const p=f.fullWidth,m=f.fullHeight;u+=f.offsetX*a/p,n-=f.offsetY*r/m,a*=f.width/p,r*=f.height/m}const d=this.filmOffset;d!==0&&(u+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+a,n,n-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Us=-90,Is=1;class R0 extends In{constructor(e,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new Hn(Us,Is,e,n);a.layers=this.layers,this.add(a);const u=new Hn(Us,Is,e,n);u.layers=this.layers,this.add(u);const f=new Hn(Us,Is,e,n);f.layers=this.layers,this.add(f);const d=new Hn(Us,Is,e,n);d.layers=this.layers,this.add(d);const p=new Hn(Us,Is,e,n);p.layers=this.layers,this.add(p);const m=new Hn(Us,Is,e,n);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[r,a,u,f,d,p]=n;for(const m of n)this.remove(m);if(e===Bi)r.up.set(0,1,0),r.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===Dl)r.up.set(0,-1,0),r.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of n)this.add(m),m.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[u,f,d,p,m,_]=this.children,v=e.getRenderTarget(),x=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),w=e.xr.enabled;e.xr.enabled=!1;const R=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,a),e.render(n,u),e.setRenderTarget(r,1,a),e.render(n,f),e.setRenderTarget(r,2,a),e.render(n,d),e.setRenderTarget(r,3,a),e.render(n,p),e.setRenderTarget(r,4,a),e.render(n,m),r.texture.generateMipmaps=R,e.setRenderTarget(r,5,a),e.render(n,_),e.setRenderTarget(v,x,S),e.xr.enabled=w,r.texture.needsPMREMUpdate=!0}}class rg extends Tn{constructor(e,n,r,a,u,f,d,p,m,_){e=e!==void 0?e:[],n=n!==void 0?n:Xs,super(e,n,r,a,u,f,d,p,m,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class C0 extends Kr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},a=[r,r,r,r,r,r];this.texture=new rg(a,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:mi}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new Yo(5,5,5),u=new Sr({name:"CubemapFromEquirect",uniforms:$s(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Un,blending:vr});u.uniforms.tEquirect.value=n;const f=new gi(a,u),d=n.minFilter;return n.minFilter===jr&&(n.minFilter=mi),new R0(1,10,this).update(e,f),n.minFilter=d,f.geometry.dispose(),f.material.dispose(),this}clear(e,n,r,a){const u=e.getRenderTarget();for(let f=0;f<6;f++)e.setRenderTarget(this,f),e.clear(n,r,a);e.setRenderTarget(u)}}class P0 extends In{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new xi,this.environmentIntensity=1,this.environmentRotation=new xi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Oc=new j,b0=new j,D0=new ot;class gr{constructor(e=new j(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,a){return this.normal.set(e,n,r),this.constant=a,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const a=Oc.subVectors(r,n).cross(b0.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const r=e.delta(Oc),a=this.normal.dot(r);if(a===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/a;return u<0||u>1?null:n.copy(e.start).addScaledVector(r,u)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||D0.getNormalMatrix(e),a=this.coplanarPoint(Oc).applyMatrix4(e),u=this.normal.applyMatrix3(r).normalize();return this.constant=-a.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const zr=new Yf,vl=new j;class jf{constructor(e=new gr,n=new gr,r=new gr,a=new gr,u=new gr,f=new gr){this.planes=[e,n,r,a,u,f]}set(e,n,r,a,u,f){const d=this.planes;return d[0].copy(e),d[1].copy(n),d[2].copy(r),d[3].copy(a),d[4].copy(u),d[5].copy(f),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,n=Bi){const r=this.planes,a=e.elements,u=a[0],f=a[1],d=a[2],p=a[3],m=a[4],_=a[5],v=a[6],x=a[7],S=a[8],w=a[9],R=a[10],y=a[11],g=a[12],I=a[13],L=a[14],C=a[15];if(r[0].setComponents(p-u,x-m,y-S,C-g).normalize(),r[1].setComponents(p+u,x+m,y+S,C+g).normalize(),r[2].setComponents(p+f,x+_,y+w,C+I).normalize(),r[3].setComponents(p-f,x-_,y-w,C-I).normalize(),r[4].setComponents(p-d,x-v,y-R,C-L).normalize(),n===Bi)r[5].setComponents(p+d,x+v,y+R,C+L).normalize();else if(n===Dl)r[5].setComponents(d,v,R,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),zr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),zr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(zr)}intersectsSprite(e){return zr.center.set(0,0,0),zr.radius=.7071067811865476,zr.applyMatrix4(e.matrixWorld),this.intersectsSphere(zr)}intersectsSphere(e){const n=this.planes,r=e.center,a=-e.radius;for(let u=0;u<6;u++)if(n[u].distanceToPoint(r)<a)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const a=n[r];if(vl.x=a.normal.x>0?e.max.x:e.min.x,vl.y=a.normal.y>0?e.max.y:e.min.y,vl.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(vl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class xl extends In{constructor(){super(),this.isGroup=!0,this.type="Group"}}class sg extends Tn{constructor(e,n,r,a,u,f,d,p,m,_=Vs){if(_!==Vs&&_!==qs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&_===Vs&&(r=qr),r===void 0&&_===qs&&(r=js),super(null,a,u,f,d,p,_,r,m),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=d!==void 0?d:ai,this.minFilter=p!==void 0?p:ai,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class Ul extends Mr{constructor(e=1,n=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:a};const u=e/2,f=n/2,d=Math.floor(r),p=Math.floor(a),m=d+1,_=p+1,v=e/d,x=n/p,S=[],w=[],R=[],y=[];for(let g=0;g<_;g++){const I=g*x-f;for(let L=0;L<m;L++){const C=L*v-u;w.push(C,-I,0),R.push(0,0,1),y.push(L/d),y.push(1-g/p)}}for(let g=0;g<p;g++)for(let I=0;I<d;I++){const L=I+m*g,C=I+m*(g+1),W=I+1+m*(g+1),k=I+1+m*g;S.push(L,C,k),S.push(C,W,k)}this.setIndex(S),this.setAttribute("position",new vi(w,3)),this.setAttribute("normal",new vi(R,3)),this.setAttribute("uv",new vi(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ul(e.width,e.height,e.widthSegments,e.heightSegments)}}class qf extends Mr{constructor(e=1,n=32,r=16,a=0,u=Math.PI*2,f=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:r,phiStart:a,phiLength:u,thetaStart:f,thetaLength:d},n=Math.max(3,Math.floor(n)),r=Math.max(2,Math.floor(r));const p=Math.min(f+d,Math.PI);let m=0;const _=[],v=new j,x=new j,S=[],w=[],R=[],y=[];for(let g=0;g<=r;g++){const I=[],L=g/r;let C=0;g===0&&f===0?C=.5/n:g===r&&p===Math.PI&&(C=-.5/n);for(let W=0;W<=n;W++){const k=W/n;v.x=-e*Math.cos(a+k*u)*Math.sin(f+L*d),v.y=e*Math.cos(f+L*d),v.z=e*Math.sin(a+k*u)*Math.sin(f+L*d),w.push(v.x,v.y,v.z),x.copy(v).normalize(),R.push(x.x,x.y,x.z),y.push(k+C,1-L),I.push(m++)}_.push(I)}for(let g=0;g<r;g++)for(let I=0;I<n;I++){const L=_[g][I+1],C=_[g][I],W=_[g+1][I],k=_[g+1][I+1];(g!==0||f>0)&&S.push(L,C,k),(g!==r-1||p<Math.PI)&&S.push(C,W,k)}this.setIndex(S),this.setAttribute("position",new vi(w,3)),this.setAttribute("normal",new vi(R,3)),this.setAttribute("uv",new vi(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qf(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class L0 extends Xo{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Et(16777215),this.specular=new Et(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Et(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Xm,this.normalScale=new st(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xi,this.combine=kf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class U0 extends Xo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=bv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class I0 extends Xo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Jp={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class N0{constructor(e,n,r){const a=this;let u=!1,f=0,d=0,p;const m=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=r,this.itemStart=function(_){d++,u===!1&&a.onStart!==void 0&&a.onStart(_,f,d),u=!0},this.itemEnd=function(_){f++,a.onProgress!==void 0&&a.onProgress(_,f,d),f===d&&(u=!1,a.onLoad!==void 0&&a.onLoad())},this.itemError=function(_){a.onError!==void 0&&a.onError(_)},this.resolveURL=function(_){return p?p(_):_},this.setURLModifier=function(_){return p=_,this},this.addHandler=function(_,v){return m.push(_,v),this},this.removeHandler=function(_){const v=m.indexOf(_);return v!==-1&&m.splice(v,2),this},this.getHandler=function(_){for(let v=0,x=m.length;v<x;v+=2){const S=m[v],w=m[v+1];if(S.global&&(S.lastIndex=0),S.test(_))return w}return null}}}const F0=new N0;class Kf{constructor(e){this.manager=e!==void 0?e:F0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const r=this;return new Promise(function(a,u){r.load(e,a,n,u)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Kf.DEFAULT_MATERIAL_NAME="__DEFAULT";class O0 extends Kf{constructor(e){super(e)}load(e,n,r,a){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const u=this,f=Jp.get(e);if(f!==void 0)return u.manager.itemStart(e),setTimeout(function(){n&&n(f),u.manager.itemEnd(e)},0),f;const d=Vo("img");function p(){_(),Jp.add(e,this),n&&n(this),u.manager.itemEnd(e)}function m(v){_(),a&&a(v),u.manager.itemError(e),u.manager.itemEnd(e)}function _(){d.removeEventListener("load",p,!1),d.removeEventListener("error",m,!1)}return d.addEventListener("load",p,!1),d.addEventListener("error",m,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(d.crossOrigin=this.crossOrigin),u.manager.itemStart(e),d.src=e,d}}class k0 extends Kf{constructor(e){super(e)}load(e,n,r,a){const u=new Tn,f=new O0(this.manager);return f.setCrossOrigin(this.crossOrigin),f.setPath(this.path),f.load(e,function(d){u.image=d,u.needsUpdate=!0,n!==void 0&&n(u)},r,a),u}}class og extends In{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Et(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}const kc=new zt,em=new j,tm=new j;class B0{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new st(512,512),this.map=null,this.mapPass=null,this.matrix=new zt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new jf,this._frameExtents=new st(1,1),this._viewportCount=1,this._viewports=[new Pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,r=this.matrix;em.setFromMatrixPosition(e.matrixWorld),n.position.copy(em),tm.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(tm),n.updateMatrixWorld(),kc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(kc),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(kc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const nm=new zt,Fo=new j,Bc=new j;class z0 extends B0{constructor(){super(new Hn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new st(4,2),this._viewportCount=6,this._viewports=[new Pt(2,1,1,1),new Pt(0,1,1,1),new Pt(3,1,1,1),new Pt(1,1,1,1),new Pt(3,0,1,1),new Pt(1,0,1,1)],this._cubeDirections=[new j(1,0,0),new j(-1,0,0),new j(0,0,1),new j(0,0,-1),new j(0,1,0),new j(0,-1,0)],this._cubeUps=[new j(0,1,0),new j(0,1,0),new j(0,1,0),new j(0,1,0),new j(0,0,1),new j(0,0,-1)]}updateMatrices(e,n=0){const r=this.camera,a=this.matrix,u=e.distance||r.far;u!==r.far&&(r.far=u,r.updateProjectionMatrix()),Fo.setFromMatrixPosition(e.matrixWorld),r.position.copy(Fo),Bc.copy(r.position),Bc.add(this._cubeDirections[n]),r.up.copy(this._cubeUps[n]),r.lookAt(Bc),r.updateMatrixWorld(),a.makeTranslation(-Fo.x,-Fo.y,-Fo.z),nm.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),this._frustum.setFromProjectionMatrix(nm)}}class H0 extends og{constructor(e,n,r=0,a=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=a,this.shadow=new z0}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class V0 extends ig{constructor(e=-1,n=1,r=1,a=-1,u=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=a,this.near=u,this.far=f,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,a,u,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=a,this.view.width=u,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let u=r-e,f=r+e,d=a+n,p=a-n;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=m*this.view.offsetX,f=u+m*this.view.width,d-=_*this.view.offsetY,p=d-_*this.view.height}this.projectionMatrix.makeOrthographic(u,f,d,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class G0 extends og{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class W0 extends Hn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class X0{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=im(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=im();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function im(){return performance.now()}class rm{constructor(e=1,n=0,r=0){return this.radius=e,this.phi=n,this.theta=r,this}set(e,n,r){return this.radius=e,this.phi=n,this.theta=r,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=dt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,r){return this.radius=Math.sqrt(e*e+n*n+r*r),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,r),this.phi=Math.acos(dt(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Y0 extends Zr{constructor(e,n=null){super(),this.object=e,this.domElement=n,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}function sm(s,e,n,r){const a=j0(r);switch(n){case km:return s*e;case zm:return s*e;case Hm:return s*e*2;case Vm:return s*e/a.components*a.byteLength;case Vf:return s*e/a.components*a.byteLength;case Gm:return s*e*2/a.components*a.byteLength;case Gf:return s*e*2/a.components*a.byteLength;case Bm:return s*e*3/a.components*a.byteLength;case oi:return s*e*4/a.components*a.byteLength;case Wf:return s*e*4/a.components*a.byteLength;case Tl:case wl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Al:case Rl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case cf:case df:return Math.max(s,16)*Math.max(e,8)/4;case uf:case ff:return Math.max(s,8)*Math.max(e,8)/2;case hf:case pf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case mf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case gf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case _f:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case vf:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case xf:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case yf:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Sf:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Mf:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Ef:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Tf:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case wf:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Af:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Rf:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Cf:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Pf:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Cl:case bf:case Df:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Wm:case Lf:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Uf:case If:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function j0(s){switch(s){case Hi:case Nm:return{byteLength:1,components:1};case zo:case Fm:case Go:return{byteLength:2,components:1};case zf:case Hf:return{byteLength:2,components:4};case qr:case Bf:case ki:return{byteLength:4,components:1};case Om:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Of}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Of);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function ag(){let s=null,e=!1,n=null,r=null;function a(u,f){n(u,f),r=s.requestAnimationFrame(a)}return{start:function(){e!==!0&&n!==null&&(r=s.requestAnimationFrame(a),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(u){n=u},setContext:function(u){s=u}}}function q0(s){const e=new WeakMap;function n(d,p){const m=d.array,_=d.usage,v=m.byteLength,x=s.createBuffer();s.bindBuffer(p,x),s.bufferData(p,m,_),d.onUploadCallback();let S;if(m instanceof Float32Array)S=s.FLOAT;else if(m instanceof Uint16Array)d.isFloat16BufferAttribute?S=s.HALF_FLOAT:S=s.UNSIGNED_SHORT;else if(m instanceof Int16Array)S=s.SHORT;else if(m instanceof Uint32Array)S=s.UNSIGNED_INT;else if(m instanceof Int32Array)S=s.INT;else if(m instanceof Int8Array)S=s.BYTE;else if(m instanceof Uint8Array)S=s.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)S=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:x,type:S,bytesPerElement:m.BYTES_PER_ELEMENT,version:d.version,size:v}}function r(d,p,m){const _=p.array,v=p.updateRanges;if(s.bindBuffer(m,d),v.length===0)s.bufferSubData(m,0,_);else{v.sort((S,w)=>S.start-w.start);let x=0;for(let S=1;S<v.length;S++){const w=v[x],R=v[S];R.start<=w.start+w.count+1?w.count=Math.max(w.count,R.start+R.count-w.start):(++x,v[x]=R)}v.length=x+1;for(let S=0,w=v.length;S<w;S++){const R=v[S];s.bufferSubData(m,R.start*_.BYTES_PER_ELEMENT,_,R.start,R.count)}p.clearUpdateRanges()}p.onUploadCallback()}function a(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function u(d){d.isInterleavedBufferAttribute&&(d=d.data);const p=e.get(d);p&&(s.deleteBuffer(p.buffer),e.delete(d))}function f(d,p){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const _=e.get(d);(!_||_.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const m=e.get(d);if(m===void 0)e.set(d,n(d,p));else if(m.version<d.version){if(m.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,d,p),m.version=d.version}}return{get:a,remove:u,update:f}}var K0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,$0=`#ifdef USE_ALPHAHASH
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
#endif`,Z0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Q0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,J0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ex=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,tx=`#ifdef USE_AOMAP
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
#endif`,nx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ix=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,rx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,sx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ox=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ax=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,lx=`#ifdef USE_IRIDESCENCE
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
#endif`,ux=`#ifdef USE_BUMPMAP
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
#endif`,cx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,fx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,dx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,hx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,px=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,mx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,gx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,_x=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,vx=`#define PI 3.141592653589793
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
} // validated`,xx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,yx=`vec3 transformedNormal = objectNormal;
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
#endif`,Sx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Mx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ex=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Tx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,wx="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ax=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Rx=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,Cx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Px=`#ifdef USE_ENVMAP
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
#endif`,bx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Dx=`#ifdef USE_ENVMAP
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
#endif`,Lx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ux=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ix=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Nx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Fx=`#ifdef USE_GRADIENTMAP
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
}`,Ox=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,kx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Bx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,zx=`uniform bool receiveShadow;
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
#endif`,Hx=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
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
#endif`,Vx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Gx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Wx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Xx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Yx=`PhysicalMaterial material;
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
#endif`,jx=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
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
}`,qx=`
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Kx=`#if defined( RE_IndirectDiffuse )
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
#endif`,$x=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Zx=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Qx=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Jx=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ey=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ty=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ny=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,iy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ry=`#if defined( USE_POINTS_UV )
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
#endif`,sy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,oy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ay=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ly=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,uy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cy=`#ifdef USE_MORPHTARGETS
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
#endif`,fy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,dy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,hy=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,py=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,my=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,_y=`#ifdef USE_NORMALMAP
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
#endif`,vy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,xy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,yy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Sy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,My=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ey=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Ty=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,wy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ay=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ry=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Cy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Py=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,by=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			float shadowIntensity;
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
			float shadowIntensity;
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
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
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Dy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ly=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Uy=`float getShadowMask() {
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,Iy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ny=`#ifdef USE_SKINNING
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
#endif`,Fy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Oy=`#ifdef USE_SKINNING
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
#endif`,ky=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,By=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,zy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Hy=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Vy=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Gy=`#ifdef USE_TRANSMISSION
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
#endif`,Wy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Xy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Yy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const qy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ky=`uniform sampler2D t2D;
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
}`,$y=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zy=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Jy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eS=`#include <common>
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
}`,tS=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,nS=`#define DISTANCE
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
}`,iS=`#define DISTANCE
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,rS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,sS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,oS=`uniform float scale;
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
}`,aS=`uniform vec3 diffuse;
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
}`,lS=`#include <common>
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
}`,uS=`uniform vec3 diffuse;
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
}`,cS=`#define LAMBERT
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
}`,fS=`#define LAMBERT
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
}`,dS=`#define MATCAP
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
}`,hS=`#define MATCAP
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
}`,pS=`#define NORMAL
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
}`,mS=`#define NORMAL
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
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,gS=`#define PHONG
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
}`,_S=`#define PHONG
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
}`,vS=`#define STANDARD
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
}`,xS=`#define STANDARD
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
}`,yS=`#define TOON
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
}`,SS=`#define TOON
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
}`,MS=`uniform float size;
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
}`,ES=`uniform vec3 diffuse;
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
}`,TS=`#include <common>
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
}`,wS=`uniform vec3 color;
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
}`,AS=`uniform float rotation;
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
}`,RS=`uniform vec3 diffuse;
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
}`,at={alphahash_fragment:K0,alphahash_pars_fragment:$0,alphamap_fragment:Z0,alphamap_pars_fragment:Q0,alphatest_fragment:J0,alphatest_pars_fragment:ex,aomap_fragment:tx,aomap_pars_fragment:nx,batching_pars_vertex:ix,batching_vertex:rx,begin_vertex:sx,beginnormal_vertex:ox,bsdfs:ax,iridescence_fragment:lx,bumpmap_pars_fragment:ux,clipping_planes_fragment:cx,clipping_planes_pars_fragment:fx,clipping_planes_pars_vertex:dx,clipping_planes_vertex:hx,color_fragment:px,color_pars_fragment:mx,color_pars_vertex:gx,color_vertex:_x,common:vx,cube_uv_reflection_fragment:xx,defaultnormal_vertex:yx,displacementmap_pars_vertex:Sx,displacementmap_vertex:Mx,emissivemap_fragment:Ex,emissivemap_pars_fragment:Tx,colorspace_fragment:wx,colorspace_pars_fragment:Ax,envmap_fragment:Rx,envmap_common_pars_fragment:Cx,envmap_pars_fragment:Px,envmap_pars_vertex:bx,envmap_physical_pars_fragment:Hx,envmap_vertex:Dx,fog_vertex:Lx,fog_pars_vertex:Ux,fog_fragment:Ix,fog_pars_fragment:Nx,gradientmap_pars_fragment:Fx,lightmap_pars_fragment:Ox,lights_lambert_fragment:kx,lights_lambert_pars_fragment:Bx,lights_pars_begin:zx,lights_toon_fragment:Vx,lights_toon_pars_fragment:Gx,lights_phong_fragment:Wx,lights_phong_pars_fragment:Xx,lights_physical_fragment:Yx,lights_physical_pars_fragment:jx,lights_fragment_begin:qx,lights_fragment_maps:Kx,lights_fragment_end:$x,logdepthbuf_fragment:Zx,logdepthbuf_pars_fragment:Qx,logdepthbuf_pars_vertex:Jx,logdepthbuf_vertex:ey,map_fragment:ty,map_pars_fragment:ny,map_particle_fragment:iy,map_particle_pars_fragment:ry,metalnessmap_fragment:sy,metalnessmap_pars_fragment:oy,morphinstance_vertex:ay,morphcolor_vertex:ly,morphnormal_vertex:uy,morphtarget_pars_vertex:cy,morphtarget_vertex:fy,normal_fragment_begin:dy,normal_fragment_maps:hy,normal_pars_fragment:py,normal_pars_vertex:my,normal_vertex:gy,normalmap_pars_fragment:_y,clearcoat_normal_fragment_begin:vy,clearcoat_normal_fragment_maps:xy,clearcoat_pars_fragment:yy,iridescence_pars_fragment:Sy,opaque_fragment:My,packing:Ey,premultiplied_alpha_fragment:Ty,project_vertex:wy,dithering_fragment:Ay,dithering_pars_fragment:Ry,roughnessmap_fragment:Cy,roughnessmap_pars_fragment:Py,shadowmap_pars_fragment:by,shadowmap_pars_vertex:Dy,shadowmap_vertex:Ly,shadowmask_pars_fragment:Uy,skinbase_vertex:Iy,skinning_pars_vertex:Ny,skinning_vertex:Fy,skinnormal_vertex:Oy,specularmap_fragment:ky,specularmap_pars_fragment:By,tonemapping_fragment:zy,tonemapping_pars_fragment:Hy,transmission_fragment:Vy,transmission_pars_fragment:Gy,uv_pars_fragment:Wy,uv_pars_vertex:Xy,uv_vertex:Yy,worldpos_vertex:jy,background_vert:qy,background_frag:Ky,backgroundCube_vert:$y,backgroundCube_frag:Zy,cube_vert:Qy,cube_frag:Jy,depth_vert:eS,depth_frag:tS,distanceRGBA_vert:nS,distanceRGBA_frag:iS,equirect_vert:rS,equirect_frag:sS,linedashed_vert:oS,linedashed_frag:aS,meshbasic_vert:lS,meshbasic_frag:uS,meshlambert_vert:cS,meshlambert_frag:fS,meshmatcap_vert:dS,meshmatcap_frag:hS,meshnormal_vert:pS,meshnormal_frag:mS,meshphong_vert:gS,meshphong_frag:_S,meshphysical_vert:vS,meshphysical_frag:xS,meshtoon_vert:yS,meshtoon_frag:SS,points_vert:MS,points_frag:ES,shadow_vert:TS,shadow_frag:wS,sprite_vert:AS,sprite_frag:RS},Ce={common:{diffuse:{value:new Et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ot}},envmap:{envMap:{value:null},envMapRotation:{value:new ot},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ot},normalScale:{value:new st(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0},uvTransform:{value:new ot}},sprite:{diffuse:{value:new Et(16777215)},opacity:{value:1},center:{value:new st(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}}},pi={basic:{uniforms:En([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.fog]),vertexShader:at.meshbasic_vert,fragmentShader:at.meshbasic_frag},lambert:{uniforms:En([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new Et(0)}}]),vertexShader:at.meshlambert_vert,fragmentShader:at.meshlambert_frag},phong:{uniforms:En([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new Et(0)},specular:{value:new Et(1118481)},shininess:{value:30}}]),vertexShader:at.meshphong_vert,fragmentShader:at.meshphong_frag},standard:{uniforms:En([Ce.common,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.roughnessmap,Ce.metalnessmap,Ce.fog,Ce.lights,{emissive:{value:new Et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag},toon:{uniforms:En([Ce.common,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.gradientmap,Ce.fog,Ce.lights,{emissive:{value:new Et(0)}}]),vertexShader:at.meshtoon_vert,fragmentShader:at.meshtoon_frag},matcap:{uniforms:En([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,{matcap:{value:null}}]),vertexShader:at.meshmatcap_vert,fragmentShader:at.meshmatcap_frag},points:{uniforms:En([Ce.points,Ce.fog]),vertexShader:at.points_vert,fragmentShader:at.points_frag},dashed:{uniforms:En([Ce.common,Ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:at.linedashed_vert,fragmentShader:at.linedashed_frag},depth:{uniforms:En([Ce.common,Ce.displacementmap]),vertexShader:at.depth_vert,fragmentShader:at.depth_frag},normal:{uniforms:En([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,{opacity:{value:1}}]),vertexShader:at.meshnormal_vert,fragmentShader:at.meshnormal_frag},sprite:{uniforms:En([Ce.sprite,Ce.fog]),vertexShader:at.sprite_vert,fragmentShader:at.sprite_frag},background:{uniforms:{uvTransform:{value:new ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:at.background_vert,fragmentShader:at.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ot}},vertexShader:at.backgroundCube_vert,fragmentShader:at.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:at.cube_vert,fragmentShader:at.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:at.equirect_vert,fragmentShader:at.equirect_frag},distanceRGBA:{uniforms:En([Ce.common,Ce.displacementmap,{referencePosition:{value:new j},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:at.distanceRGBA_vert,fragmentShader:at.distanceRGBA_frag},shadow:{uniforms:En([Ce.lights,Ce.fog,{color:{value:new Et(0)},opacity:{value:1}}]),vertexShader:at.shadow_vert,fragmentShader:at.shadow_frag}};pi.physical={uniforms:En([pi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ot},clearcoatNormalScale:{value:new st(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ot},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ot},sheen:{value:0},sheenColor:{value:new Et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ot},transmissionSamplerSize:{value:new st},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ot},attenuationDistance:{value:0},attenuationColor:{value:new Et(0)},specularColor:{value:new Et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ot},anisotropyVector:{value:new st},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ot}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag};const yl={r:0,b:0,g:0},Hr=new xi,CS=new zt;function PS(s,e,n,r,a,u,f){const d=new Et(0);let p=u===!0?0:1,m,_,v=null,x=0,S=null;function w(L){let C=L.isScene===!0?L.background:null;return C&&C.isTexture&&(C=(L.backgroundBlurriness>0?n:e).get(C)),C}function R(L){let C=!1;const W=w(L);W===null?g(d,p):W&&W.isColor&&(g(W,1),C=!0);const k=s.xr.getEnvironmentBlendMode();k==="additive"?r.buffers.color.setClear(0,0,0,1,f):k==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,f),(s.autoClear||C)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function y(L,C){const W=w(C);W&&(W.isCubeTexture||W.mapping===Ll)?(_===void 0&&(_=new gi(new Yo(1,1,1),new Sr({name:"BackgroundCubeMaterial",uniforms:$s(pi.backgroundCube.uniforms),vertexShader:pi.backgroundCube.vertexShader,fragmentShader:pi.backgroundCube.fragmentShader,side:Un,depthTest:!1,depthWrite:!1,fog:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(k,F,Y){this.matrixWorld.copyPosition(Y.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(_)),Hr.copy(C.backgroundRotation),Hr.x*=-1,Hr.y*=-1,Hr.z*=-1,W.isCubeTexture&&W.isRenderTargetTexture===!1&&(Hr.y*=-1,Hr.z*=-1),_.material.uniforms.envMap.value=W,_.material.uniforms.flipEnvMap.value=W.isCubeTexture&&W.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(CS.makeRotationFromEuler(Hr)),_.material.toneMapped=Mt.getTransfer(W.colorSpace)!==Rt,(v!==W||x!==W.version||S!==s.toneMapping)&&(_.material.needsUpdate=!0,v=W,x=W.version,S=s.toneMapping),_.layers.enableAll(),L.unshift(_,_.geometry,_.material,0,0,null)):W&&W.isTexture&&(m===void 0&&(m=new gi(new Ul(2,2),new Sr({name:"BackgroundMaterial",uniforms:$s(pi.background.uniforms),vertexShader:pi.background.vertexShader,fragmentShader:pi.background.fragmentShader,side:yr,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(m)),m.material.uniforms.t2D.value=W,m.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,m.material.toneMapped=Mt.getTransfer(W.colorSpace)!==Rt,W.matrixAutoUpdate===!0&&W.updateMatrix(),m.material.uniforms.uvTransform.value.copy(W.matrix),(v!==W||x!==W.version||S!==s.toneMapping)&&(m.material.needsUpdate=!0,v=W,x=W.version,S=s.toneMapping),m.layers.enableAll(),L.unshift(m,m.geometry,m.material,0,0,null))}function g(L,C){L.getRGB(yl,ng(s)),r.buffers.color.setClear(yl.r,yl.g,yl.b,C,f)}function I(){_!==void 0&&(_.geometry.dispose(),_.material.dispose()),m!==void 0&&(m.geometry.dispose(),m.material.dispose())}return{getClearColor:function(){return d},setClearColor:function(L,C=1){d.set(L),p=C,g(d,p)},getClearAlpha:function(){return p},setClearAlpha:function(L){p=L,g(d,p)},render:R,addToRenderList:y,dispose:I}}function bS(s,e){const n=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},a=x(null);let u=a,f=!1;function d(A,z,oe,te,ce){let he=!1;const se=v(te,oe,z);u!==se&&(u=se,m(u.object)),he=S(A,te,oe,ce),he&&w(A,te,oe,ce),ce!==null&&e.update(ce,s.ELEMENT_ARRAY_BUFFER),(he||f)&&(f=!1,C(A,z,oe,te),ce!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(ce).buffer))}function p(){return s.createVertexArray()}function m(A){return s.bindVertexArray(A)}function _(A){return s.deleteVertexArray(A)}function v(A,z,oe){const te=oe.wireframe===!0;let ce=r[A.id];ce===void 0&&(ce={},r[A.id]=ce);let he=ce[z.id];he===void 0&&(he={},ce[z.id]=he);let se=he[te];return se===void 0&&(se=x(p()),he[te]=se),se}function x(A){const z=[],oe=[],te=[];for(let ce=0;ce<n;ce++)z[ce]=0,oe[ce]=0,te[ce]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:oe,attributeDivisors:te,object:A,attributes:{},index:null}}function S(A,z,oe,te){const ce=u.attributes,he=z.attributes;let se=0;const le=oe.getAttributes();for(const B in le)if(le[B].location>=0){const re=ce[B];let U=he[B];if(U===void 0&&(B==="instanceMatrix"&&A.instanceMatrix&&(U=A.instanceMatrix),B==="instanceColor"&&A.instanceColor&&(U=A.instanceColor)),re===void 0||re.attribute!==U||U&&re.data!==U.data)return!0;se++}return u.attributesNum!==se||u.index!==te}function w(A,z,oe,te){const ce={},he=z.attributes;let se=0;const le=oe.getAttributes();for(const B in le)if(le[B].location>=0){let re=he[B];re===void 0&&(B==="instanceMatrix"&&A.instanceMatrix&&(re=A.instanceMatrix),B==="instanceColor"&&A.instanceColor&&(re=A.instanceColor));const U={};U.attribute=re,re&&re.data&&(U.data=re.data),ce[B]=U,se++}u.attributes=ce,u.attributesNum=se,u.index=te}function R(){const A=u.newAttributes;for(let z=0,oe=A.length;z<oe;z++)A[z]=0}function y(A){g(A,0)}function g(A,z){const oe=u.newAttributes,te=u.enabledAttributes,ce=u.attributeDivisors;oe[A]=1,te[A]===0&&(s.enableVertexAttribArray(A),te[A]=1),ce[A]!==z&&(s.vertexAttribDivisor(A,z),ce[A]=z)}function I(){const A=u.newAttributes,z=u.enabledAttributes;for(let oe=0,te=z.length;oe<te;oe++)z[oe]!==A[oe]&&(s.disableVertexAttribArray(oe),z[oe]=0)}function L(A,z,oe,te,ce,he,se){se===!0?s.vertexAttribIPointer(A,z,oe,ce,he):s.vertexAttribPointer(A,z,oe,te,ce,he)}function C(A,z,oe,te){R();const ce=te.attributes,he=oe.getAttributes(),se=z.defaultAttributeValues;for(const le in he){const B=he[le];if(B.location>=0){let ae=ce[le];if(ae===void 0&&(le==="instanceMatrix"&&A.instanceMatrix&&(ae=A.instanceMatrix),le==="instanceColor"&&A.instanceColor&&(ae=A.instanceColor)),ae!==void 0){const re=ae.normalized,U=ae.itemSize,ne=e.get(ae);if(ne===void 0)continue;const Ie=ne.buffer,Q=ne.type,de=ne.bytesPerElement,Se=Q===s.INT||Q===s.UNSIGNED_INT||ae.gpuType===Bf;if(ae.isInterleavedBufferAttribute){const ve=ae.data,Te=ve.stride,Ue=ae.offset;if(ve.isInstancedInterleavedBuffer){for(let Ze=0;Ze<B.locationSize;Ze++)g(B.location+Ze,ve.meshPerAttribute);A.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let Ze=0;Ze<B.locationSize;Ze++)y(B.location+Ze);s.bindBuffer(s.ARRAY_BUFFER,Ie);for(let Ze=0;Ze<B.locationSize;Ze++)L(B.location+Ze,U/B.locationSize,Q,re,Te*de,(Ue+U/B.locationSize*Ze)*de,Se)}else{if(ae.isInstancedBufferAttribute){for(let ve=0;ve<B.locationSize;ve++)g(B.location+ve,ae.meshPerAttribute);A.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let ve=0;ve<B.locationSize;ve++)y(B.location+ve);s.bindBuffer(s.ARRAY_BUFFER,Ie);for(let ve=0;ve<B.locationSize;ve++)L(B.location+ve,U/B.locationSize,Q,re,U*de,U/B.locationSize*ve*de,Se)}}else if(se!==void 0){const re=se[le];if(re!==void 0)switch(re.length){case 2:s.vertexAttrib2fv(B.location,re);break;case 3:s.vertexAttrib3fv(B.location,re);break;case 4:s.vertexAttrib4fv(B.location,re);break;default:s.vertexAttrib1fv(B.location,re)}}}}I()}function W(){Y();for(const A in r){const z=r[A];for(const oe in z){const te=z[oe];for(const ce in te)_(te[ce].object),delete te[ce];delete z[oe]}delete r[A]}}function k(A){if(r[A.id]===void 0)return;const z=r[A.id];for(const oe in z){const te=z[oe];for(const ce in te)_(te[ce].object),delete te[ce];delete z[oe]}delete r[A.id]}function F(A){for(const z in r){const oe=r[z];if(oe[A.id]===void 0)continue;const te=oe[A.id];for(const ce in te)_(te[ce].object),delete te[ce];delete oe[A.id]}}function Y(){P(),f=!0,u!==a&&(u=a,m(u.object))}function P(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:d,reset:Y,resetDefaultState:P,dispose:W,releaseStatesOfGeometry:k,releaseStatesOfProgram:F,initAttributes:R,enableAttribute:y,disableUnusedAttributes:I}}function DS(s,e,n){let r;function a(m){r=m}function u(m,_){s.drawArrays(r,m,_),n.update(_,r,1)}function f(m,_,v){v!==0&&(s.drawArraysInstanced(r,m,_,v),n.update(_,r,v))}function d(m,_,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,_,0,v);let S=0;for(let w=0;w<v;w++)S+=_[w];n.update(S,r,1)}function p(m,_,v,x){if(v===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let w=0;w<m.length;w++)f(m[w],_[w],x[w]);else{S.multiDrawArraysInstancedWEBGL(r,m,0,_,0,x,0,v);let w=0;for(let R=0;R<v;R++)w+=_[R]*x[R];n.update(w,r,1)}}this.setMode=a,this.render=u,this.renderInstances=f,this.renderMultiDraw=d,this.renderMultiDrawInstances=p}function LS(s,e,n,r){let a;function u(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");a=s.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function f(F){return!(F!==oi&&r.convert(F)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(F){const Y=F===Go&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(F!==Hi&&r.convert(F)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==ki&&!Y)}function p(F){if(F==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=n.precision!==void 0?n.precision:"highp";const _=p(m);_!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",_,"instead."),m=_);const v=n.logarithmicDepthBuffer===!0,x=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),S=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),w=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),R=s.getParameter(s.MAX_TEXTURE_SIZE),y=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),I=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),L=s.getParameter(s.MAX_VARYING_VECTORS),C=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),W=w>0,k=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:p,textureFormatReadable:f,textureTypeReadable:d,precision:m,logarithmicDepthBuffer:v,reverseDepthBuffer:x,maxTextures:S,maxVertexTextures:w,maxTextureSize:R,maxCubemapSize:y,maxAttributes:g,maxVertexUniforms:I,maxVaryings:L,maxFragmentUniforms:C,vertexTextures:W,maxSamples:k}}function US(s){const e=this;let n=null,r=0,a=!1,u=!1;const f=new gr,d=new ot,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(v,x){const S=v.length!==0||x||r!==0||a;return a=x,r=v.length,S},this.beginShadows=function(){u=!0,_(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(v,x){n=_(v,x,0)},this.setState=function(v,x,S){const w=v.clippingPlanes,R=v.clipIntersection,y=v.clipShadows,g=s.get(v);if(!a||w===null||w.length===0||u&&!y)u?_(null):m();else{const I=u?0:r,L=I*4;let C=g.clippingState||null;p.value=C,C=_(w,x,L,S);for(let W=0;W!==L;++W)C[W]=n[W];g.clippingState=C,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=I}};function m(){p.value!==n&&(p.value=n,p.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function _(v,x,S,w){const R=v!==null?v.length:0;let y=null;if(R!==0){if(y=p.value,w!==!0||y===null){const g=S+R*4,I=x.matrixWorldInverse;d.getNormalMatrix(I),(y===null||y.length<g)&&(y=new Float32Array(g));for(let L=0,C=S;L!==R;++L,C+=4)f.copy(v[L]).applyMatrix4(I,d),f.normal.toArray(y,C),y[C+3]=f.constant}p.value=y,p.needsUpdate=!0}return e.numPlanes=R,e.numIntersection=0,y}}function IS(s){let e=new WeakMap;function n(f,d){return d===sf?f.mapping=Xs:d===of&&(f.mapping=Ys),f}function r(f){if(f&&f.isTexture){const d=f.mapping;if(d===sf||d===of)if(e.has(f)){const p=e.get(f).texture;return n(p,f.mapping)}else{const p=f.image;if(p&&p.height>0){const m=new C0(p.height);return m.fromEquirectangularTexture(s,f),e.set(f,m),f.addEventListener("dispose",a),n(m.texture,f.mapping)}else return null}}return f}function a(f){const d=f.target;d.removeEventListener("dispose",a);const p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function u(){e=new WeakMap}return{get:r,dispose:u}}const Bs=4,om=[.125,.215,.35,.446,.526,.582],Xr=20,zc=new V0,am=new Et;let Hc=null,Vc=0,Gc=0,Wc=!1;const Gr=(1+Math.sqrt(5))/2,Ns=1/Gr,lm=[new j(-Gr,Ns,0),new j(Gr,Ns,0),new j(-Ns,0,Gr),new j(Ns,0,Gr),new j(0,Gr,-Ns),new j(0,Gr,Ns),new j(-1,1,-1),new j(1,1,-1),new j(-1,1,1),new j(1,1,1)];class um{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,r=.1,a=100){Hc=this._renderer.getRenderTarget(),Vc=this._renderer.getActiveCubeFace(),Gc=this._renderer.getActiveMipmapLevel(),Wc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const u=this._allocateTargets();return u.depthBuffer=!0,this._sceneToCubeUV(e,r,a,u),n>0&&this._blur(u,0,0,n),this._applyPMREM(u),this._cleanup(u),u}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=dm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=fm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Hc,Vc,Gc),this._renderer.xr.enabled=Wc,e.scissorTest=!1,Sl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Xs||e.mapping===Ys?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Hc=this._renderer.getRenderTarget(),Vc=this._renderer.getActiveCubeFace(),Gc=this._renderer.getActiveMipmapLevel(),Wc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=n||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:mi,minFilter:mi,generateMipmaps:!1,type:Go,format:oi,colorSpace:Ks,depthBuffer:!1},a=cm(e,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=cm(e,n,r);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=NS(u)),this._blurMaterial=FS(u,e,n)}return a}_compileMaterial(e){const n=new gi(this._lodPlanes[0],e);this._renderer.compile(n,zc)}_sceneToCubeUV(e,n,r,a){const d=new Hn(90,1,n,r),p=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],_=this._renderer,v=_.autoClear,x=_.toneMapping;_.getClearColor(am),_.toneMapping=xr,_.autoClear=!1;const S=new Jm({name:"PMREM.Background",side:Un,depthWrite:!1,depthTest:!1}),w=new gi(new Yo,S);let R=!1;const y=e.background;y?y.isColor&&(S.color.copy(y),e.background=null,R=!0):(S.color.copy(am),R=!0);for(let g=0;g<6;g++){const I=g%3;I===0?(d.up.set(0,p[g],0),d.lookAt(m[g],0,0)):I===1?(d.up.set(0,0,p[g]),d.lookAt(0,m[g],0)):(d.up.set(0,p[g],0),d.lookAt(0,0,m[g]));const L=this._cubeSize;Sl(a,I*L,g>2?L:0,L,L),_.setRenderTarget(a),R&&_.render(w,d),_.render(e,d)}w.geometry.dispose(),w.material.dispose(),_.toneMapping=x,_.autoClear=v,e.background=y}_textureToCubeUV(e,n){const r=this._renderer,a=e.mapping===Xs||e.mapping===Ys;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=dm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=fm());const u=a?this._cubemapMaterial:this._equirectMaterial,f=new gi(this._lodPlanes[0],u),d=u.uniforms;d.envMap.value=e;const p=this._cubeSize;Sl(n,0,0,3*p,2*p),r.setRenderTarget(n),r.render(f,zc)}_applyPMREM(e){const n=this._renderer,r=n.autoClear;n.autoClear=!1;const a=this._lodPlanes.length;for(let u=1;u<a;u++){const f=Math.sqrt(this._sigmas[u]*this._sigmas[u]-this._sigmas[u-1]*this._sigmas[u-1]),d=lm[(a-u-1)%lm.length];this._blur(e,u-1,u,f,d)}n.autoClear=r}_blur(e,n,r,a,u){const f=this._pingPongRenderTarget;this._halfBlur(e,f,n,r,a,"latitudinal",u),this._halfBlur(f,e,r,r,a,"longitudinal",u)}_halfBlur(e,n,r,a,u,f,d){const p=this._renderer,m=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const _=3,v=new gi(this._lodPlanes[a],m),x=m.uniforms,S=this._sizeLods[r]-1,w=isFinite(u)?Math.PI/(2*S):2*Math.PI/(2*Xr-1),R=u/w,y=isFinite(u)?1+Math.floor(_*R):Xr;y>Xr&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Xr}`);const g=[];let I=0;for(let F=0;F<Xr;++F){const Y=F/R,P=Math.exp(-Y*Y/2);g.push(P),F===0?I+=P:F<y&&(I+=2*P)}for(let F=0;F<g.length;F++)g[F]=g[F]/I;x.envMap.value=e.texture,x.samples.value=y,x.weights.value=g,x.latitudinal.value=f==="latitudinal",d&&(x.poleAxis.value=d);const{_lodMax:L}=this;x.dTheta.value=w,x.mipInt.value=L-r;const C=this._sizeLods[a],W=3*C*(a>L-Bs?a-L+Bs:0),k=4*(this._cubeSize-C);Sl(n,W,k,3*C,2*C),p.setRenderTarget(n),p.render(v,zc)}}function NS(s){const e=[],n=[],r=[];let a=s;const u=s-Bs+1+om.length;for(let f=0;f<u;f++){const d=Math.pow(2,a);n.push(d);let p=1/d;f>s-Bs?p=om[f-s+Bs-1]:f===0&&(p=0),r.push(p);const m=1/(d-2),_=-m,v=1+m,x=[_,_,v,_,v,v,_,_,v,v,_,v],S=6,w=6,R=3,y=2,g=1,I=new Float32Array(R*w*S),L=new Float32Array(y*w*S),C=new Float32Array(g*w*S);for(let k=0;k<S;k++){const F=k%3*2/3-1,Y=k>2?0:-1,P=[F,Y,0,F+2/3,Y,0,F+2/3,Y+1,0,F,Y,0,F+2/3,Y+1,0,F,Y+1,0];I.set(P,R*w*k),L.set(x,y*w*k);const A=[k,k,k,k,k,k];C.set(A,g*w*k)}const W=new Mr;W.setAttribute("position",new _i(I,R)),W.setAttribute("uv",new _i(L,y)),W.setAttribute("faceIndex",new _i(C,g)),e.push(W),a>Bs&&a--}return{lodPlanes:e,sizeLods:n,sigmas:r}}function cm(s,e,n){const r=new Kr(s,e,n);return r.texture.mapping=Ll,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Sl(s,e,n,r,a){s.viewport.set(e,n,r,a),s.scissor.set(e,n,r,a)}function FS(s,e,n){const r=new Float32Array(Xr),a=new j(0,1,0);return new Sr({name:"SphericalGaussianBlur",defines:{n:Xr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:$f(),fragmentShader:`

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
		`,blending:vr,depthTest:!1,depthWrite:!1})}function fm(){return new Sr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:$f(),fragmentShader:`

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
		`,blending:vr,depthTest:!1,depthWrite:!1})}function dm(){return new Sr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:$f(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:vr,depthTest:!1,depthWrite:!1})}function $f(){return`

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
	`}function OS(s){let e=new WeakMap,n=null;function r(d){if(d&&d.isTexture){const p=d.mapping,m=p===sf||p===of,_=p===Xs||p===Ys;if(m||_){let v=e.get(d);const x=v!==void 0?v.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==x)return n===null&&(n=new um(s)),v=m?n.fromEquirectangular(d,v):n.fromCubemap(d,v),v.texture.pmremVersion=d.pmremVersion,e.set(d,v),v.texture;if(v!==void 0)return v.texture;{const S=d.image;return m&&S&&S.height>0||_&&S&&a(S)?(n===null&&(n=new um(s)),v=m?n.fromEquirectangular(d):n.fromCubemap(d),v.texture.pmremVersion=d.pmremVersion,e.set(d,v),d.addEventListener("dispose",u),v.texture):null}}}return d}function a(d){let p=0;const m=6;for(let _=0;_<m;_++)d[_]!==void 0&&p++;return p===m}function u(d){const p=d.target;p.removeEventListener("dispose",u);const m=e.get(p);m!==void 0&&(e.delete(p),m.dispose())}function f(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:f}}function kS(s){const e={};function n(r){if(e[r]!==void 0)return e[r];let a;switch(r){case"WEBGL_depth_texture":a=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=s.getExtension(r)}return e[r]=a,a}return{has:function(r){return n(r)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(r){const a=n(r);return a===null&&Os("THREE.WebGLRenderer: "+r+" extension not supported."),a}}}function BS(s,e,n,r){const a={},u=new WeakMap;function f(v){const x=v.target;x.index!==null&&e.remove(x.index);for(const w in x.attributes)e.remove(x.attributes[w]);x.removeEventListener("dispose",f),delete a[x.id];const S=u.get(x);S&&(e.remove(S),u.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,n.memory.geometries--}function d(v,x){return a[x.id]===!0||(x.addEventListener("dispose",f),a[x.id]=!0,n.memory.geometries++),x}function p(v){const x=v.attributes;for(const S in x)e.update(x[S],s.ARRAY_BUFFER)}function m(v){const x=[],S=v.index,w=v.attributes.position;let R=0;if(S!==null){const I=S.array;R=S.version;for(let L=0,C=I.length;L<C;L+=3){const W=I[L+0],k=I[L+1],F=I[L+2];x.push(W,k,k,F,F,W)}}else if(w!==void 0){const I=w.array;R=w.version;for(let L=0,C=I.length/3-1;L<C;L+=3){const W=L+0,k=L+1,F=L+2;x.push(W,k,k,F,F,W)}}else return;const y=new(jm(x)?tg:eg)(x,1);y.version=R;const g=u.get(v);g&&e.remove(g),u.set(v,y)}function _(v){const x=u.get(v);if(x){const S=v.index;S!==null&&x.version<S.version&&m(v)}else m(v);return u.get(v)}return{get:d,update:p,getWireframeAttribute:_}}function zS(s,e,n){let r;function a(x){r=x}let u,f;function d(x){u=x.type,f=x.bytesPerElement}function p(x,S){s.drawElements(r,S,u,x*f),n.update(S,r,1)}function m(x,S,w){w!==0&&(s.drawElementsInstanced(r,S,u,x*f,w),n.update(S,r,w))}function _(x,S,w){if(w===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,S,0,u,x,0,w);let y=0;for(let g=0;g<w;g++)y+=S[g];n.update(y,r,1)}function v(x,S,w,R){if(w===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let g=0;g<x.length;g++)m(x[g]/f,S[g],R[g]);else{y.multiDrawElementsInstancedWEBGL(r,S,0,u,x,0,R,0,w);let g=0;for(let I=0;I<w;I++)g+=S[I]*R[I];n.update(g,r,1)}}this.setMode=a,this.setIndex=d,this.render=p,this.renderInstances=m,this.renderMultiDraw=_,this.renderMultiDrawInstances=v}function HS(s){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,f,d){switch(n.calls++,f){case s.TRIANGLES:n.triangles+=d*(u/3);break;case s.LINES:n.lines+=d*(u/2);break;case s.LINE_STRIP:n.lines+=d*(u-1);break;case s.LINE_LOOP:n.lines+=d*u;break;case s.POINTS:n.points+=d*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",f);break}}function a(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:a,update:r}}function VS(s,e,n){const r=new WeakMap,a=new Pt;function u(f,d,p){const m=f.morphTargetInfluences,_=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,v=_!==void 0?_.length:0;let x=r.get(d);if(x===void 0||x.count!==v){let A=function(){Y.dispose(),r.delete(d),d.removeEventListener("dispose",A)};var S=A;x!==void 0&&x.texture.dispose();const w=d.morphAttributes.position!==void 0,R=d.morphAttributes.normal!==void 0,y=d.morphAttributes.color!==void 0,g=d.morphAttributes.position||[],I=d.morphAttributes.normal||[],L=d.morphAttributes.color||[];let C=0;w===!0&&(C=1),R===!0&&(C=2),y===!0&&(C=3);let W=d.attributes.position.count*C,k=1;W>e.maxTextureSize&&(k=Math.ceil(W/e.maxTextureSize),W=e.maxTextureSize);const F=new Float32Array(W*k*4*v),Y=new Km(F,W,k,v);Y.type=ki,Y.needsUpdate=!0;const P=C*4;for(let z=0;z<v;z++){const oe=g[z],te=I[z],ce=L[z],he=W*k*4*z;for(let se=0;se<oe.count;se++){const le=se*P;w===!0&&(a.fromBufferAttribute(oe,se),F[he+le+0]=a.x,F[he+le+1]=a.y,F[he+le+2]=a.z,F[he+le+3]=0),R===!0&&(a.fromBufferAttribute(te,se),F[he+le+4]=a.x,F[he+le+5]=a.y,F[he+le+6]=a.z,F[he+le+7]=0),y===!0&&(a.fromBufferAttribute(ce,se),F[he+le+8]=a.x,F[he+le+9]=a.y,F[he+le+10]=a.z,F[he+le+11]=ce.itemSize===4?a.w:1)}}x={count:v,texture:Y,size:new st(W,k)},r.set(d,x),d.addEventListener("dispose",A)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)p.getUniforms().setValue(s,"morphTexture",f.morphTexture,n);else{let w=0;for(let y=0;y<m.length;y++)w+=m[y];const R=d.morphTargetsRelative?1:1-w;p.getUniforms().setValue(s,"morphTargetBaseInfluence",R),p.getUniforms().setValue(s,"morphTargetInfluences",m)}p.getUniforms().setValue(s,"morphTargetsTexture",x.texture,n),p.getUniforms().setValue(s,"morphTargetsTextureSize",x.size)}return{update:u}}function GS(s,e,n,r){let a=new WeakMap;function u(p){const m=r.render.frame,_=p.geometry,v=e.get(p,_);if(a.get(v)!==m&&(e.update(v),a.set(v,m)),p.isInstancedMesh&&(p.hasEventListener("dispose",d)===!1&&p.addEventListener("dispose",d),a.get(p)!==m&&(n.update(p.instanceMatrix,s.ARRAY_BUFFER),p.instanceColor!==null&&n.update(p.instanceColor,s.ARRAY_BUFFER),a.set(p,m))),p.isSkinnedMesh){const x=p.skeleton;a.get(x)!==m&&(x.update(),a.set(x,m))}return v}function f(){a=new WeakMap}function d(p){const m=p.target;m.removeEventListener("dispose",d),n.remove(m.instanceMatrix),m.instanceColor!==null&&n.remove(m.instanceColor)}return{update:u,dispose:f}}const lg=new Tn,hm=new sg(1,1),ug=new Km,cg=new d0,fg=new rg,pm=[],mm=[],gm=new Float32Array(16),_m=new Float32Array(9),vm=new Float32Array(4);function Qs(s,e,n){const r=s[0];if(r<=0||r>0)return s;const a=e*n;let u=pm[a];if(u===void 0&&(u=new Float32Array(a),pm[a]=u),e!==0){r.toArray(u,0);for(let f=1,d=0;f!==e;++f)d+=n,s[f].toArray(u,d)}return u}function Zt(s,e){if(s.length!==e.length)return!1;for(let n=0,r=s.length;n<r;n++)if(s[n]!==e[n])return!1;return!0}function Qt(s,e){for(let n=0,r=e.length;n<r;n++)s[n]=e[n]}function Il(s,e){let n=mm[e];n===void 0&&(n=new Int32Array(e),mm[e]=n);for(let r=0;r!==e;++r)n[r]=s.allocateTextureUnit();return n}function WS(s,e){const n=this.cache;n[0]!==e&&(s.uniform1f(this.addr,e),n[0]=e)}function XS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Zt(n,e))return;s.uniform2fv(this.addr,e),Qt(n,e)}}function YS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Zt(n,e))return;s.uniform3fv(this.addr,e),Qt(n,e)}}function jS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Zt(n,e))return;s.uniform4fv(this.addr,e),Qt(n,e)}}function qS(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(Zt(n,e))return;s.uniformMatrix2fv(this.addr,!1,e),Qt(n,e)}else{if(Zt(n,r))return;vm.set(r),s.uniformMatrix2fv(this.addr,!1,vm),Qt(n,r)}}function KS(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(Zt(n,e))return;s.uniformMatrix3fv(this.addr,!1,e),Qt(n,e)}else{if(Zt(n,r))return;_m.set(r),s.uniformMatrix3fv(this.addr,!1,_m),Qt(n,r)}}function $S(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(Zt(n,e))return;s.uniformMatrix4fv(this.addr,!1,e),Qt(n,e)}else{if(Zt(n,r))return;gm.set(r),s.uniformMatrix4fv(this.addr,!1,gm),Qt(n,r)}}function ZS(s,e){const n=this.cache;n[0]!==e&&(s.uniform1i(this.addr,e),n[0]=e)}function QS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Zt(n,e))return;s.uniform2iv(this.addr,e),Qt(n,e)}}function JS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Zt(n,e))return;s.uniform3iv(this.addr,e),Qt(n,e)}}function eM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Zt(n,e))return;s.uniform4iv(this.addr,e),Qt(n,e)}}function tM(s,e){const n=this.cache;n[0]!==e&&(s.uniform1ui(this.addr,e),n[0]=e)}function nM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Zt(n,e))return;s.uniform2uiv(this.addr,e),Qt(n,e)}}function iM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Zt(n,e))return;s.uniform3uiv(this.addr,e),Qt(n,e)}}function rM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Zt(n,e))return;s.uniform4uiv(this.addr,e),Qt(n,e)}}function sM(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a);let u;this.type===s.SAMPLER_2D_SHADOW?(hm.compareFunction=Ym,u=hm):u=lg,n.setTexture2D(e||u,a)}function oM(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTexture3D(e||cg,a)}function aM(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTextureCube(e||fg,a)}function lM(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTexture2DArray(e||ug,a)}function uM(s){switch(s){case 5126:return WS;case 35664:return XS;case 35665:return YS;case 35666:return jS;case 35674:return qS;case 35675:return KS;case 35676:return $S;case 5124:case 35670:return ZS;case 35667:case 35671:return QS;case 35668:case 35672:return JS;case 35669:case 35673:return eM;case 5125:return tM;case 36294:return nM;case 36295:return iM;case 36296:return rM;case 35678:case 36198:case 36298:case 36306:case 35682:return sM;case 35679:case 36299:case 36307:return oM;case 35680:case 36300:case 36308:case 36293:return aM;case 36289:case 36303:case 36311:case 36292:return lM}}function cM(s,e){s.uniform1fv(this.addr,e)}function fM(s,e){const n=Qs(e,this.size,2);s.uniform2fv(this.addr,n)}function dM(s,e){const n=Qs(e,this.size,3);s.uniform3fv(this.addr,n)}function hM(s,e){const n=Qs(e,this.size,4);s.uniform4fv(this.addr,n)}function pM(s,e){const n=Qs(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,n)}function mM(s,e){const n=Qs(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,n)}function gM(s,e){const n=Qs(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,n)}function _M(s,e){s.uniform1iv(this.addr,e)}function vM(s,e){s.uniform2iv(this.addr,e)}function xM(s,e){s.uniform3iv(this.addr,e)}function yM(s,e){s.uniform4iv(this.addr,e)}function SM(s,e){s.uniform1uiv(this.addr,e)}function MM(s,e){s.uniform2uiv(this.addr,e)}function EM(s,e){s.uniform3uiv(this.addr,e)}function TM(s,e){s.uniform4uiv(this.addr,e)}function wM(s,e,n){const r=this.cache,a=e.length,u=Il(n,a);Zt(r,u)||(s.uniform1iv(this.addr,u),Qt(r,u));for(let f=0;f!==a;++f)n.setTexture2D(e[f]||lg,u[f])}function AM(s,e,n){const r=this.cache,a=e.length,u=Il(n,a);Zt(r,u)||(s.uniform1iv(this.addr,u),Qt(r,u));for(let f=0;f!==a;++f)n.setTexture3D(e[f]||cg,u[f])}function RM(s,e,n){const r=this.cache,a=e.length,u=Il(n,a);Zt(r,u)||(s.uniform1iv(this.addr,u),Qt(r,u));for(let f=0;f!==a;++f)n.setTextureCube(e[f]||fg,u[f])}function CM(s,e,n){const r=this.cache,a=e.length,u=Il(n,a);Zt(r,u)||(s.uniform1iv(this.addr,u),Qt(r,u));for(let f=0;f!==a;++f)n.setTexture2DArray(e[f]||ug,u[f])}function PM(s){switch(s){case 5126:return cM;case 35664:return fM;case 35665:return dM;case 35666:return hM;case 35674:return pM;case 35675:return mM;case 35676:return gM;case 5124:case 35670:return _M;case 35667:case 35671:return vM;case 35668:case 35672:return xM;case 35669:case 35673:return yM;case 5125:return SM;case 36294:return MM;case 36295:return EM;case 36296:return TM;case 35678:case 36198:case 36298:case 36306:case 35682:return wM;case 35679:case 36299:case 36307:return AM;case 35680:case 36300:case 36308:case 36293:return RM;case 36289:case 36303:case 36311:case 36292:return CM}}class bM{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.setValue=uM(n.type)}}class DM{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=PM(n.type)}}class LM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const a=this.seq;for(let u=0,f=a.length;u!==f;++u){const d=a[u];d.setValue(e,n[d.id],r)}}}const Xc=/(\w+)(\])?(\[|\.)?/g;function xm(s,e){s.seq.push(e),s.map[e.id]=e}function UM(s,e,n){const r=s.name,a=r.length;for(Xc.lastIndex=0;;){const u=Xc.exec(r),f=Xc.lastIndex;let d=u[1];const p=u[2]==="]",m=u[3];if(p&&(d=d|0),m===void 0||m==="["&&f+2===a){xm(n,m===void 0?new bM(d,s,e):new DM(d,s,e));break}else{let v=n.map[d];v===void 0&&(v=new LM(d),xm(n,v)),n=v}}}class Pl{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<r;++a){const u=e.getActiveUniform(n,a),f=e.getUniformLocation(n,u.name);UM(u,f,this)}}setValue(e,n,r,a){const u=this.map[n];u!==void 0&&u.setValue(e,r,a)}setOptional(e,n,r){const a=n[r];a!==void 0&&this.setValue(e,r,a)}static upload(e,n,r,a){for(let u=0,f=n.length;u!==f;++u){const d=n[u],p=r[d.id];p.needsUpdate!==!1&&d.setValue(e,p.value,a)}}static seqWithValue(e,n){const r=[];for(let a=0,u=e.length;a!==u;++a){const f=e[a];f.id in n&&r.push(f)}return r}}function ym(s,e,n){const r=s.createShader(e);return s.shaderSource(r,n),s.compileShader(r),r}const IM=37297;let NM=0;function FM(s,e){const n=s.split(`
`),r=[],a=Math.max(e-6,0),u=Math.min(e+6,n.length);for(let f=a;f<u;f++){const d=f+1;r.push(`${d===e?">":" "} ${d}: ${n[f]}`)}return r.join(`
`)}const Sm=new ot;function OM(s){Mt._getMatrix(Sm,Mt.workingColorSpace,s);const e=`mat3( ${Sm.elements.map(n=>n.toFixed(4))} )`;switch(Mt.getTransfer(s)){case bl:return[e,"LinearTransferOETF"];case Rt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Mm(s,e,n){const r=s.getShaderParameter(e,s.COMPILE_STATUS),a=s.getShaderInfoLog(e).trim();if(r&&a==="")return"";const u=/ERROR: 0:(\d+)/.exec(a);if(u){const f=parseInt(u[1]);return n.toUpperCase()+`

`+a+`

`+FM(s.getShaderSource(e),f)}else return a}function kM(s,e){const n=OM(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function BM(s,e){let n;switch(e){case Mv:n="Linear";break;case Ev:n="Reinhard";break;case Tv:n="Cineon";break;case wv:n="ACESFilmic";break;case Rv:n="AgX";break;case Cv:n="Neutral";break;case Av:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+s+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Ml=new j;function zM(){Mt.getLuminanceCoefficients(Ml);const s=Ml.x.toFixed(4),e=Ml.y.toFixed(4),n=Ml.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function HM(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Oo).join(`
`)}function VM(s){const e=[];for(const n in s){const r=s[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function GM(s,e){const n={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){const u=s.getActiveAttrib(e,a),f=u.name;let d=1;u.type===s.FLOAT_MAT2&&(d=2),u.type===s.FLOAT_MAT3&&(d=3),u.type===s.FLOAT_MAT4&&(d=4),n[f]={type:u.type,location:s.getAttribLocation(e,f),locationSize:d}}return n}function Oo(s){return s!==""}function Em(s,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Tm(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const WM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Nf(s){return s.replace(WM,YM)}const XM=new Map;function YM(s,e){let n=at[e];if(n===void 0){const r=XM.get(e);if(r!==void 0)n=at[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Nf(n)}const jM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function wm(s){return s.replace(jM,qM)}function qM(s,e,n,r){let a="";for(let u=parseInt(e);u<parseInt(n);u++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return a}function Am(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function KM(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Um?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===tv?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Fi&&(e="SHADOWMAP_TYPE_VSM"),e}function $M(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Xs:case Ys:e="ENVMAP_TYPE_CUBE";break;case Ll:e="ENVMAP_TYPE_CUBE_UV";break}return e}function ZM(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Ys:e="ENVMAP_MODE_REFRACTION";break}return e}function QM(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case kf:e="ENVMAP_BLENDING_MULTIPLY";break;case yv:e="ENVMAP_BLENDING_MIX";break;case Sv:e="ENVMAP_BLENDING_ADD";break}return e}function JM(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:r,maxMip:n}}function eE(s,e,n,r){const a=s.getContext(),u=n.defines;let f=n.vertexShader,d=n.fragmentShader;const p=KM(n),m=$M(n),_=ZM(n),v=QM(n),x=JM(n),S=HM(n),w=VM(u),R=a.createProgram();let y,g,I=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(y=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,w].filter(Oo).join(`
`),y.length>0&&(y+=`
`),g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,w].filter(Oo).join(`
`),g.length>0&&(g+=`
`)):(y=[Am(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,w,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+_:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Oo).join(`
`),g=[Am(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,w,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+m:"",n.envMap?"#define "+_:"",n.envMap?"#define "+v:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==xr?"#define TONE_MAPPING":"",n.toneMapping!==xr?at.tonemapping_pars_fragment:"",n.toneMapping!==xr?BM("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",at.colorspace_pars_fragment,kM("linearToOutputTexel",n.outputColorSpace),zM(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Oo).join(`
`)),f=Nf(f),f=Em(f,n),f=Tm(f,n),d=Nf(d),d=Em(d,n),d=Tm(d,n),f=wm(f),d=wm(d),n.isRawShaderMaterial!==!0&&(I=`#version 300 es
`,y=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,g=["#define varying in",n.glslVersion===Ip?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Ip?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const L=I+y+f,C=I+g+d,W=ym(a,a.VERTEX_SHADER,L),k=ym(a,a.FRAGMENT_SHADER,C);a.attachShader(R,W),a.attachShader(R,k),n.index0AttributeName!==void 0?a.bindAttribLocation(R,0,n.index0AttributeName):n.morphTargets===!0&&a.bindAttribLocation(R,0,"position"),a.linkProgram(R);function F(z){if(s.debug.checkShaderErrors){const oe=a.getProgramInfoLog(R).trim(),te=a.getShaderInfoLog(W).trim(),ce=a.getShaderInfoLog(k).trim();let he=!0,se=!0;if(a.getProgramParameter(R,a.LINK_STATUS)===!1)if(he=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(a,R,W,k);else{const le=Mm(a,W,"vertex"),B=Mm(a,k,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(R,a.VALIDATE_STATUS)+`

Material Name: `+z.name+`
Material Type: `+z.type+`

Program Info Log: `+oe+`
`+le+`
`+B)}else oe!==""?console.warn("THREE.WebGLProgram: Program Info Log:",oe):(te===""||ce==="")&&(se=!1);se&&(z.diagnostics={runnable:he,programLog:oe,vertexShader:{log:te,prefix:y},fragmentShader:{log:ce,prefix:g}})}a.deleteShader(W),a.deleteShader(k),Y=new Pl(a,R),P=GM(a,R)}let Y;this.getUniforms=function(){return Y===void 0&&F(this),Y};let P;this.getAttributes=function(){return P===void 0&&F(this),P};let A=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=a.getProgramParameter(R,IM)),A},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(R),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=NM++,this.cacheKey=e,this.usedTimes=1,this.program=R,this.vertexShader=W,this.fragmentShader=k,this}let tE=0;class nE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,r=e.fragmentShader,a=this._getShaderStage(n),u=this._getShaderStage(r),f=this._getShaderCacheForMaterial(e);return f.has(a)===!1&&(f.add(a),a.usedTimes++),f.has(u)===!1&&(f.add(u),u.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let r=n.get(e);return r===void 0&&(r=new Set,n.set(e,r)),r}_getShaderStage(e){const n=this.shaderCache;let r=n.get(e);return r===void 0&&(r=new iE(e),n.set(e,r)),r}}class iE{constructor(e){this.id=tE++,this.code=e,this.usedTimes=0}}function rE(s,e,n,r,a,u,f){const d=new Zm,p=new nE,m=new Set,_=[],v=a.logarithmicDepthBuffer,x=a.vertexTextures;let S=a.precision;const w={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function R(P){return m.add(P),P===0?"uv":`uv${P}`}function y(P,A,z,oe,te){const ce=oe.fog,he=te.geometry,se=P.isMeshStandardMaterial?oe.environment:null,le=(P.isMeshStandardMaterial?n:e).get(P.envMap||se),B=le&&le.mapping===Ll?le.image.height:null,ae=w[P.type];P.precision!==null&&(S=a.getMaxPrecision(P.precision),S!==P.precision&&console.warn("THREE.WebGLProgram.getParameters:",P.precision,"not supported, using",S,"instead."));const re=he.morphAttributes.position||he.morphAttributes.normal||he.morphAttributes.color,U=re!==void 0?re.length:0;let ne=0;he.morphAttributes.position!==void 0&&(ne=1),he.morphAttributes.normal!==void 0&&(ne=2),he.morphAttributes.color!==void 0&&(ne=3);let Ie,Q,de,Se;if(ae){const vt=pi[ae];Ie=vt.vertexShader,Q=vt.fragmentShader}else Ie=P.vertexShader,Q=P.fragmentShader,p.update(P),de=p.getVertexShaderID(P),Se=p.getFragmentShaderID(P);const ve=s.getRenderTarget(),Te=s.state.buffers.depth.getReversed(),Ue=te.isInstancedMesh===!0,Ze=te.isBatchedMesh===!0,At=!!P.map,pt=!!P.matcap,Dt=!!le,O=!!P.aoMap,_n=!!P.lightMap,ht=!!P.bumpMap,ut=!!P.normalMap,Ye=!!P.displacementMap,wt=!!P.emissiveMap,Ge=!!P.metalnessMap,b=!!P.roughnessMap,E=P.anisotropy>0,Z=P.clearcoat>0,pe=P.dispersion>0,ge=P.iridescence>0,ue=P.sheen>0,We=P.transmission>0,we=E&&!!P.anisotropyMap,Ne=Z&&!!P.clearcoatMap,lt=Z&&!!P.clearcoatNormalMap,Me=Z&&!!P.clearcoatRoughnessMap,Oe=ge&&!!P.iridescenceMap,qe=ge&&!!P.iridescenceThicknessMap,Je=ue&&!!P.sheenColorMap,ke=ue&&!!P.sheenRoughnessMap,ct=!!P.specularMap,nt=!!P.specularColorMap,Tt=!!P.specularIntensityMap,V=We&&!!P.transmissionMap,Ae=We&&!!P.thicknessMap,ie=!!P.gradientMap,fe=!!P.alphaMap,be=P.alphaTest>0,Pe=!!P.alphaHash,it=!!P.extensions;let Ut=xr;P.toneMapped&&(ve===null||ve.isXRRenderTarget===!0)&&(Ut=s.toneMapping);const jt={shaderID:ae,shaderType:P.type,shaderName:P.name,vertexShader:Ie,fragmentShader:Q,defines:P.defines,customVertexShaderID:de,customFragmentShaderID:Se,isRawShaderMaterial:P.isRawShaderMaterial===!0,glslVersion:P.glslVersion,precision:S,batching:Ze,batchingColor:Ze&&te._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&te.instanceColor!==null,instancingMorph:Ue&&te.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:ve===null?s.outputColorSpace:ve.isXRRenderTarget===!0?ve.texture.colorSpace:Ks,alphaToCoverage:!!P.alphaToCoverage,map:At,matcap:pt,envMap:Dt,envMapMode:Dt&&le.mapping,envMapCubeUVHeight:B,aoMap:O,lightMap:_n,bumpMap:ht,normalMap:ut,displacementMap:x&&Ye,emissiveMap:wt,normalMapObjectSpace:ut&&P.normalMapType===Lv,normalMapTangentSpace:ut&&P.normalMapType===Xm,metalnessMap:Ge,roughnessMap:b,anisotropy:E,anisotropyMap:we,clearcoat:Z,clearcoatMap:Ne,clearcoatNormalMap:lt,clearcoatRoughnessMap:Me,dispersion:pe,iridescence:ge,iridescenceMap:Oe,iridescenceThicknessMap:qe,sheen:ue,sheenColorMap:Je,sheenRoughnessMap:ke,specularMap:ct,specularColorMap:nt,specularIntensityMap:Tt,transmission:We,transmissionMap:V,thicknessMap:Ae,gradientMap:ie,opaque:P.transparent===!1&&P.blending===Hs&&P.alphaToCoverage===!1,alphaMap:fe,alphaTest:be,alphaHash:Pe,combine:P.combine,mapUv:At&&R(P.map.channel),aoMapUv:O&&R(P.aoMap.channel),lightMapUv:_n&&R(P.lightMap.channel),bumpMapUv:ht&&R(P.bumpMap.channel),normalMapUv:ut&&R(P.normalMap.channel),displacementMapUv:Ye&&R(P.displacementMap.channel),emissiveMapUv:wt&&R(P.emissiveMap.channel),metalnessMapUv:Ge&&R(P.metalnessMap.channel),roughnessMapUv:b&&R(P.roughnessMap.channel),anisotropyMapUv:we&&R(P.anisotropyMap.channel),clearcoatMapUv:Ne&&R(P.clearcoatMap.channel),clearcoatNormalMapUv:lt&&R(P.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Me&&R(P.clearcoatRoughnessMap.channel),iridescenceMapUv:Oe&&R(P.iridescenceMap.channel),iridescenceThicknessMapUv:qe&&R(P.iridescenceThicknessMap.channel),sheenColorMapUv:Je&&R(P.sheenColorMap.channel),sheenRoughnessMapUv:ke&&R(P.sheenRoughnessMap.channel),specularMapUv:ct&&R(P.specularMap.channel),specularColorMapUv:nt&&R(P.specularColorMap.channel),specularIntensityMapUv:Tt&&R(P.specularIntensityMap.channel),transmissionMapUv:V&&R(P.transmissionMap.channel),thicknessMapUv:Ae&&R(P.thicknessMap.channel),alphaMapUv:fe&&R(P.alphaMap.channel),vertexTangents:!!he.attributes.tangent&&(ut||E),vertexColors:P.vertexColors,vertexAlphas:P.vertexColors===!0&&!!he.attributes.color&&he.attributes.color.itemSize===4,pointsUvs:te.isPoints===!0&&!!he.attributes.uv&&(At||fe),fog:!!ce,useFog:P.fog===!0,fogExp2:!!ce&&ce.isFogExp2,flatShading:P.flatShading===!0,sizeAttenuation:P.sizeAttenuation===!0,logarithmicDepthBuffer:v,reverseDepthBuffer:Te,skinning:te.isSkinnedMesh===!0,morphTargets:he.morphAttributes.position!==void 0,morphNormals:he.morphAttributes.normal!==void 0,morphColors:he.morphAttributes.color!==void 0,morphTargetsCount:U,morphTextureStride:ne,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:P.dithering,shadowMapEnabled:s.shadowMap.enabled&&z.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ut,decodeVideoTexture:At&&P.map.isVideoTexture===!0&&Mt.getTransfer(P.map.colorSpace)===Rt,decodeVideoTextureEmissive:wt&&P.emissiveMap.isVideoTexture===!0&&Mt.getTransfer(P.emissiveMap.colorSpace)===Rt,premultipliedAlpha:P.premultipliedAlpha,doubleSided:P.side===Oi,flipSided:P.side===Un,useDepthPacking:P.depthPacking>=0,depthPacking:P.depthPacking||0,index0AttributeName:P.index0AttributeName,extensionClipCullDistance:it&&P.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(it&&P.extensions.multiDraw===!0||Ze)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:P.customProgramCacheKey()};return jt.vertexUv1s=m.has(1),jt.vertexUv2s=m.has(2),jt.vertexUv3s=m.has(3),m.clear(),jt}function g(P){const A=[];if(P.shaderID?A.push(P.shaderID):(A.push(P.customVertexShaderID),A.push(P.customFragmentShaderID)),P.defines!==void 0)for(const z in P.defines)A.push(z),A.push(P.defines[z]);return P.isRawShaderMaterial===!1&&(I(A,P),L(A,P),A.push(s.outputColorSpace)),A.push(P.customProgramCacheKey),A.join()}function I(P,A){P.push(A.precision),P.push(A.outputColorSpace),P.push(A.envMapMode),P.push(A.envMapCubeUVHeight),P.push(A.mapUv),P.push(A.alphaMapUv),P.push(A.lightMapUv),P.push(A.aoMapUv),P.push(A.bumpMapUv),P.push(A.normalMapUv),P.push(A.displacementMapUv),P.push(A.emissiveMapUv),P.push(A.metalnessMapUv),P.push(A.roughnessMapUv),P.push(A.anisotropyMapUv),P.push(A.clearcoatMapUv),P.push(A.clearcoatNormalMapUv),P.push(A.clearcoatRoughnessMapUv),P.push(A.iridescenceMapUv),P.push(A.iridescenceThicknessMapUv),P.push(A.sheenColorMapUv),P.push(A.sheenRoughnessMapUv),P.push(A.specularMapUv),P.push(A.specularColorMapUv),P.push(A.specularIntensityMapUv),P.push(A.transmissionMapUv),P.push(A.thicknessMapUv),P.push(A.combine),P.push(A.fogExp2),P.push(A.sizeAttenuation),P.push(A.morphTargetsCount),P.push(A.morphAttributeCount),P.push(A.numDirLights),P.push(A.numPointLights),P.push(A.numSpotLights),P.push(A.numSpotLightMaps),P.push(A.numHemiLights),P.push(A.numRectAreaLights),P.push(A.numDirLightShadows),P.push(A.numPointLightShadows),P.push(A.numSpotLightShadows),P.push(A.numSpotLightShadowsWithMaps),P.push(A.numLightProbes),P.push(A.shadowMapType),P.push(A.toneMapping),P.push(A.numClippingPlanes),P.push(A.numClipIntersection),P.push(A.depthPacking)}function L(P,A){d.disableAll(),A.supportsVertexTextures&&d.enable(0),A.instancing&&d.enable(1),A.instancingColor&&d.enable(2),A.instancingMorph&&d.enable(3),A.matcap&&d.enable(4),A.envMap&&d.enable(5),A.normalMapObjectSpace&&d.enable(6),A.normalMapTangentSpace&&d.enable(7),A.clearcoat&&d.enable(8),A.iridescence&&d.enable(9),A.alphaTest&&d.enable(10),A.vertexColors&&d.enable(11),A.vertexAlphas&&d.enable(12),A.vertexUv1s&&d.enable(13),A.vertexUv2s&&d.enable(14),A.vertexUv3s&&d.enable(15),A.vertexTangents&&d.enable(16),A.anisotropy&&d.enable(17),A.alphaHash&&d.enable(18),A.batching&&d.enable(19),A.dispersion&&d.enable(20),A.batchingColor&&d.enable(21),P.push(d.mask),d.disableAll(),A.fog&&d.enable(0),A.useFog&&d.enable(1),A.flatShading&&d.enable(2),A.logarithmicDepthBuffer&&d.enable(3),A.reverseDepthBuffer&&d.enable(4),A.skinning&&d.enable(5),A.morphTargets&&d.enable(6),A.morphNormals&&d.enable(7),A.morphColors&&d.enable(8),A.premultipliedAlpha&&d.enable(9),A.shadowMapEnabled&&d.enable(10),A.doubleSided&&d.enable(11),A.flipSided&&d.enable(12),A.useDepthPacking&&d.enable(13),A.dithering&&d.enable(14),A.transmission&&d.enable(15),A.sheen&&d.enable(16),A.opaque&&d.enable(17),A.pointsUvs&&d.enable(18),A.decodeVideoTexture&&d.enable(19),A.decodeVideoTextureEmissive&&d.enable(20),A.alphaToCoverage&&d.enable(21),P.push(d.mask)}function C(P){const A=w[P.type];let z;if(A){const oe=pi[A];z=T0.clone(oe.uniforms)}else z=P.uniforms;return z}function W(P,A){let z;for(let oe=0,te=_.length;oe<te;oe++){const ce=_[oe];if(ce.cacheKey===A){z=ce,++z.usedTimes;break}}return z===void 0&&(z=new eE(s,A,P,u),_.push(z)),z}function k(P){if(--P.usedTimes===0){const A=_.indexOf(P);_[A]=_[_.length-1],_.pop(),P.destroy()}}function F(P){p.remove(P)}function Y(){p.dispose()}return{getParameters:y,getProgramCacheKey:g,getUniforms:C,acquireProgram:W,releaseProgram:k,releaseShaderCache:F,programs:_,dispose:Y}}function sE(){let s=new WeakMap;function e(f){return s.has(f)}function n(f){let d=s.get(f);return d===void 0&&(d={},s.set(f,d)),d}function r(f){s.delete(f)}function a(f,d,p){s.get(f)[d]=p}function u(){s=new WeakMap}return{has:e,get:n,remove:r,update:a,dispose:u}}function oE(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Rm(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Cm(){const s=[];let e=0;const n=[],r=[],a=[];function u(){e=0,n.length=0,r.length=0,a.length=0}function f(v,x,S,w,R,y){let g=s[e];return g===void 0?(g={id:v.id,object:v,geometry:x,material:S,groupOrder:w,renderOrder:v.renderOrder,z:R,group:y},s[e]=g):(g.id=v.id,g.object=v,g.geometry=x,g.material=S,g.groupOrder=w,g.renderOrder=v.renderOrder,g.z=R,g.group=y),e++,g}function d(v,x,S,w,R,y){const g=f(v,x,S,w,R,y);S.transmission>0?r.push(g):S.transparent===!0?a.push(g):n.push(g)}function p(v,x,S,w,R,y){const g=f(v,x,S,w,R,y);S.transmission>0?r.unshift(g):S.transparent===!0?a.unshift(g):n.unshift(g)}function m(v,x){n.length>1&&n.sort(v||oE),r.length>1&&r.sort(x||Rm),a.length>1&&a.sort(x||Rm)}function _(){for(let v=e,x=s.length;v<x;v++){const S=s[v];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:n,transmissive:r,transparent:a,init:u,push:d,unshift:p,finish:_,sort:m}}function aE(){let s=new WeakMap;function e(r,a){const u=s.get(r);let f;return u===void 0?(f=new Cm,s.set(r,[f])):a>=u.length?(f=new Cm,u.push(f)):f=u[a],f}function n(){s=new WeakMap}return{get:e,dispose:n}}function lE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new j,color:new Et};break;case"SpotLight":n={position:new j,direction:new j,color:new Et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new j,color:new Et,distance:0,decay:0};break;case"HemisphereLight":n={direction:new j,skyColor:new Et,groundColor:new Et};break;case"RectAreaLight":n={color:new Et,position:new j,halfWidth:new j,halfHeight:new j};break}return s[e.id]=n,n}}}function uE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=n,n}}}let cE=0;function fE(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function dE(s){const e=new lE,n=uE(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new j);const a=new j,u=new zt,f=new zt;function d(m){let _=0,v=0,x=0;for(let P=0;P<9;P++)r.probe[P].set(0,0,0);let S=0,w=0,R=0,y=0,g=0,I=0,L=0,C=0,W=0,k=0,F=0;m.sort(fE);for(let P=0,A=m.length;P<A;P++){const z=m[P],oe=z.color,te=z.intensity,ce=z.distance,he=z.shadow&&z.shadow.map?z.shadow.map.texture:null;if(z.isAmbientLight)_+=oe.r*te,v+=oe.g*te,x+=oe.b*te;else if(z.isLightProbe){for(let se=0;se<9;se++)r.probe[se].addScaledVector(z.sh.coefficients[se],te);F++}else if(z.isDirectionalLight){const se=e.get(z);if(se.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){const le=z.shadow,B=n.get(z);B.shadowIntensity=le.intensity,B.shadowBias=le.bias,B.shadowNormalBias=le.normalBias,B.shadowRadius=le.radius,B.shadowMapSize=le.mapSize,r.directionalShadow[S]=B,r.directionalShadowMap[S]=he,r.directionalShadowMatrix[S]=z.shadow.matrix,I++}r.directional[S]=se,S++}else if(z.isSpotLight){const se=e.get(z);se.position.setFromMatrixPosition(z.matrixWorld),se.color.copy(oe).multiplyScalar(te),se.distance=ce,se.coneCos=Math.cos(z.angle),se.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),se.decay=z.decay,r.spot[R]=se;const le=z.shadow;if(z.map&&(r.spotLightMap[W]=z.map,W++,le.updateMatrices(z),z.castShadow&&k++),r.spotLightMatrix[R]=le.matrix,z.castShadow){const B=n.get(z);B.shadowIntensity=le.intensity,B.shadowBias=le.bias,B.shadowNormalBias=le.normalBias,B.shadowRadius=le.radius,B.shadowMapSize=le.mapSize,r.spotShadow[R]=B,r.spotShadowMap[R]=he,C++}R++}else if(z.isRectAreaLight){const se=e.get(z);se.color.copy(oe).multiplyScalar(te),se.halfWidth.set(z.width*.5,0,0),se.halfHeight.set(0,z.height*.5,0),r.rectArea[y]=se,y++}else if(z.isPointLight){const se=e.get(z);if(se.color.copy(z.color).multiplyScalar(z.intensity),se.distance=z.distance,se.decay=z.decay,z.castShadow){const le=z.shadow,B=n.get(z);B.shadowIntensity=le.intensity,B.shadowBias=le.bias,B.shadowNormalBias=le.normalBias,B.shadowRadius=le.radius,B.shadowMapSize=le.mapSize,B.shadowCameraNear=le.camera.near,B.shadowCameraFar=le.camera.far,r.pointShadow[w]=B,r.pointShadowMap[w]=he,r.pointShadowMatrix[w]=z.shadow.matrix,L++}r.point[w]=se,w++}else if(z.isHemisphereLight){const se=e.get(z);se.skyColor.copy(z.color).multiplyScalar(te),se.groundColor.copy(z.groundColor).multiplyScalar(te),r.hemi[g]=se,g++}}y>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ce.LTC_FLOAT_1,r.rectAreaLTC2=Ce.LTC_FLOAT_2):(r.rectAreaLTC1=Ce.LTC_HALF_1,r.rectAreaLTC2=Ce.LTC_HALF_2)),r.ambient[0]=_,r.ambient[1]=v,r.ambient[2]=x;const Y=r.hash;(Y.directionalLength!==S||Y.pointLength!==w||Y.spotLength!==R||Y.rectAreaLength!==y||Y.hemiLength!==g||Y.numDirectionalShadows!==I||Y.numPointShadows!==L||Y.numSpotShadows!==C||Y.numSpotMaps!==W||Y.numLightProbes!==F)&&(r.directional.length=S,r.spot.length=R,r.rectArea.length=y,r.point.length=w,r.hemi.length=g,r.directionalShadow.length=I,r.directionalShadowMap.length=I,r.pointShadow.length=L,r.pointShadowMap.length=L,r.spotShadow.length=C,r.spotShadowMap.length=C,r.directionalShadowMatrix.length=I,r.pointShadowMatrix.length=L,r.spotLightMatrix.length=C+W-k,r.spotLightMap.length=W,r.numSpotLightShadowsWithMaps=k,r.numLightProbes=F,Y.directionalLength=S,Y.pointLength=w,Y.spotLength=R,Y.rectAreaLength=y,Y.hemiLength=g,Y.numDirectionalShadows=I,Y.numPointShadows=L,Y.numSpotShadows=C,Y.numSpotMaps=W,Y.numLightProbes=F,r.version=cE++)}function p(m,_){let v=0,x=0,S=0,w=0,R=0;const y=_.matrixWorldInverse;for(let g=0,I=m.length;g<I;g++){const L=m[g];if(L.isDirectionalLight){const C=r.directional[v];C.direction.setFromMatrixPosition(L.matrixWorld),a.setFromMatrixPosition(L.target.matrixWorld),C.direction.sub(a),C.direction.transformDirection(y),v++}else if(L.isSpotLight){const C=r.spot[S];C.position.setFromMatrixPosition(L.matrixWorld),C.position.applyMatrix4(y),C.direction.setFromMatrixPosition(L.matrixWorld),a.setFromMatrixPosition(L.target.matrixWorld),C.direction.sub(a),C.direction.transformDirection(y),S++}else if(L.isRectAreaLight){const C=r.rectArea[w];C.position.setFromMatrixPosition(L.matrixWorld),C.position.applyMatrix4(y),f.identity(),u.copy(L.matrixWorld),u.premultiply(y),f.extractRotation(u),C.halfWidth.set(L.width*.5,0,0),C.halfHeight.set(0,L.height*.5,0),C.halfWidth.applyMatrix4(f),C.halfHeight.applyMatrix4(f),w++}else if(L.isPointLight){const C=r.point[x];C.position.setFromMatrixPosition(L.matrixWorld),C.position.applyMatrix4(y),x++}else if(L.isHemisphereLight){const C=r.hemi[R];C.direction.setFromMatrixPosition(L.matrixWorld),C.direction.transformDirection(y),R++}}}return{setup:d,setupView:p,state:r}}function Pm(s){const e=new dE(s),n=[],r=[];function a(_){m.camera=_,n.length=0,r.length=0}function u(_){n.push(_)}function f(_){r.push(_)}function d(){e.setup(n)}function p(_){e.setupView(n,_)}const m={lightsArray:n,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:m,setupLights:d,setupLightsView:p,pushLight:u,pushShadow:f}}function hE(s){let e=new WeakMap;function n(a,u=0){const f=e.get(a);let d;return f===void 0?(d=new Pm(s),e.set(a,[d])):u>=f.length?(d=new Pm(s),f.push(d)):d=f[u],d}function r(){e=new WeakMap}return{get:n,dispose:r}}const pE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,mE=`uniform sampler2D shadow_pass;
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
}`;function gE(s,e,n){let r=new jf;const a=new st,u=new st,f=new Pt,d=new U0({depthPacking:Dv}),p=new I0,m={},_=n.maxTextureSize,v={[yr]:Un,[Un]:yr,[Oi]:Oi},x=new Sr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new st},radius:{value:4}},vertexShader:pE,fragmentShader:mE}),S=x.clone();S.defines.HORIZONTAL_PASS=1;const w=new Mr;w.setAttribute("position",new _i(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const R=new gi(w,x),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Um;let g=this.type;this.render=function(k,F,Y){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||k.length===0)return;const P=s.getRenderTarget(),A=s.getActiveCubeFace(),z=s.getActiveMipmapLevel(),oe=s.state;oe.setBlending(vr),oe.buffers.color.setClear(1,1,1,1),oe.buffers.depth.setTest(!0),oe.setScissorTest(!1);const te=g!==Fi&&this.type===Fi,ce=g===Fi&&this.type!==Fi;for(let he=0,se=k.length;he<se;he++){const le=k[he],B=le.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",le,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;a.copy(B.mapSize);const ae=B.getFrameExtents();if(a.multiply(ae),u.copy(B.mapSize),(a.x>_||a.y>_)&&(a.x>_&&(u.x=Math.floor(_/ae.x),a.x=u.x*ae.x,B.mapSize.x=u.x),a.y>_&&(u.y=Math.floor(_/ae.y),a.y=u.y*ae.y,B.mapSize.y=u.y)),B.map===null||te===!0||ce===!0){const U=this.type!==Fi?{minFilter:ai,magFilter:ai}:{};B.map!==null&&B.map.dispose(),B.map=new Kr(a.x,a.y,U),B.map.texture.name=le.name+".shadowMap",B.camera.updateProjectionMatrix()}s.setRenderTarget(B.map),s.clear();const re=B.getViewportCount();for(let U=0;U<re;U++){const ne=B.getViewport(U);f.set(u.x*ne.x,u.y*ne.y,u.x*ne.z,u.y*ne.w),oe.viewport(f),B.updateMatrices(le,U),r=B.getFrustum(),C(F,Y,B.camera,le,this.type)}B.isPointLightShadow!==!0&&this.type===Fi&&I(B,Y),B.needsUpdate=!1}g=this.type,y.needsUpdate=!1,s.setRenderTarget(P,A,z)};function I(k,F){const Y=e.update(R);x.defines.VSM_SAMPLES!==k.blurSamples&&(x.defines.VSM_SAMPLES=k.blurSamples,S.defines.VSM_SAMPLES=k.blurSamples,x.needsUpdate=!0,S.needsUpdate=!0),k.mapPass===null&&(k.mapPass=new Kr(a.x,a.y)),x.uniforms.shadow_pass.value=k.map.texture,x.uniforms.resolution.value=k.mapSize,x.uniforms.radius.value=k.radius,s.setRenderTarget(k.mapPass),s.clear(),s.renderBufferDirect(F,null,Y,x,R,null),S.uniforms.shadow_pass.value=k.mapPass.texture,S.uniforms.resolution.value=k.mapSize,S.uniforms.radius.value=k.radius,s.setRenderTarget(k.map),s.clear(),s.renderBufferDirect(F,null,Y,S,R,null)}function L(k,F,Y,P){let A=null;const z=Y.isPointLight===!0?k.customDistanceMaterial:k.customDepthMaterial;if(z!==void 0)A=z;else if(A=Y.isPointLight===!0?p:d,s.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0){const oe=A.uuid,te=F.uuid;let ce=m[oe];ce===void 0&&(ce={},m[oe]=ce);let he=ce[te];he===void 0&&(he=A.clone(),ce[te]=he,F.addEventListener("dispose",W)),A=he}if(A.visible=F.visible,A.wireframe=F.wireframe,P===Fi?A.side=F.shadowSide!==null?F.shadowSide:F.side:A.side=F.shadowSide!==null?F.shadowSide:v[F.side],A.alphaMap=F.alphaMap,A.alphaTest=F.alphaTest,A.map=F.map,A.clipShadows=F.clipShadows,A.clippingPlanes=F.clippingPlanes,A.clipIntersection=F.clipIntersection,A.displacementMap=F.displacementMap,A.displacementScale=F.displacementScale,A.displacementBias=F.displacementBias,A.wireframeLinewidth=F.wireframeLinewidth,A.linewidth=F.linewidth,Y.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const oe=s.properties.get(A);oe.light=Y}return A}function C(k,F,Y,P,A){if(k.visible===!1)return;if(k.layers.test(F.layers)&&(k.isMesh||k.isLine||k.isPoints)&&(k.castShadow||k.receiveShadow&&A===Fi)&&(!k.frustumCulled||r.intersectsObject(k))){k.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,k.matrixWorld);const te=e.update(k),ce=k.material;if(Array.isArray(ce)){const he=te.groups;for(let se=0,le=he.length;se<le;se++){const B=he[se],ae=ce[B.materialIndex];if(ae&&ae.visible){const re=L(k,ae,P,A);k.onBeforeShadow(s,k,F,Y,te,re,B),s.renderBufferDirect(Y,null,te,re,k,B),k.onAfterShadow(s,k,F,Y,te,re,B)}}}else if(ce.visible){const he=L(k,ce,P,A);k.onBeforeShadow(s,k,F,Y,te,he,null),s.renderBufferDirect(Y,null,te,he,k,null),k.onAfterShadow(s,k,F,Y,te,he,null)}}const oe=k.children;for(let te=0,ce=oe.length;te<ce;te++)C(oe[te],F,Y,P,A)}function W(k){k.target.removeEventListener("dispose",W);for(const Y in m){const P=m[Y],A=k.target.uuid;A in P&&(P[A].dispose(),delete P[A])}}}const _E={[Zc]:Qc,[Jc]:nf,[ef]:rf,[Ws]:tf,[Qc]:Zc,[nf]:Jc,[rf]:ef,[tf]:Ws};function vE(s,e){function n(){let V=!1;const Ae=new Pt;let ie=null;const fe=new Pt(0,0,0,0);return{setMask:function(be){ie!==be&&!V&&(s.colorMask(be,be,be,be),ie=be)},setLocked:function(be){V=be},setClear:function(be,Pe,it,Ut,jt){jt===!0&&(be*=Ut,Pe*=Ut,it*=Ut),Ae.set(be,Pe,it,Ut),fe.equals(Ae)===!1&&(s.clearColor(be,Pe,it,Ut),fe.copy(Ae))},reset:function(){V=!1,ie=null,fe.set(-1,0,0,0)}}}function r(){let V=!1,Ae=!1,ie=null,fe=null,be=null;return{setReversed:function(Pe){if(Ae!==Pe){const it=e.get("EXT_clip_control");Ae?it.clipControlEXT(it.LOWER_LEFT_EXT,it.ZERO_TO_ONE_EXT):it.clipControlEXT(it.LOWER_LEFT_EXT,it.NEGATIVE_ONE_TO_ONE_EXT);const Ut=be;be=null,this.setClear(Ut)}Ae=Pe},getReversed:function(){return Ae},setTest:function(Pe){Pe?ve(s.DEPTH_TEST):Te(s.DEPTH_TEST)},setMask:function(Pe){ie!==Pe&&!V&&(s.depthMask(Pe),ie=Pe)},setFunc:function(Pe){if(Ae&&(Pe=_E[Pe]),fe!==Pe){switch(Pe){case Zc:s.depthFunc(s.NEVER);break;case Qc:s.depthFunc(s.ALWAYS);break;case Jc:s.depthFunc(s.LESS);break;case Ws:s.depthFunc(s.LEQUAL);break;case ef:s.depthFunc(s.EQUAL);break;case tf:s.depthFunc(s.GEQUAL);break;case nf:s.depthFunc(s.GREATER);break;case rf:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}fe=Pe}},setLocked:function(Pe){V=Pe},setClear:function(Pe){be!==Pe&&(Ae&&(Pe=1-Pe),s.clearDepth(Pe),be=Pe)},reset:function(){V=!1,ie=null,fe=null,be=null,Ae=!1}}}function a(){let V=!1,Ae=null,ie=null,fe=null,be=null,Pe=null,it=null,Ut=null,jt=null;return{setTest:function(vt){V||(vt?ve(s.STENCIL_TEST):Te(s.STENCIL_TEST))},setMask:function(vt){Ae!==vt&&!V&&(s.stencilMask(vt),Ae=vt)},setFunc:function(vt,wn,vn){(ie!==vt||fe!==wn||be!==vn)&&(s.stencilFunc(vt,wn,vn),ie=vt,fe=wn,be=vn)},setOp:function(vt,wn,vn){(Pe!==vt||it!==wn||Ut!==vn)&&(s.stencilOp(vt,wn,vn),Pe=vt,it=wn,Ut=vn)},setLocked:function(vt){V=vt},setClear:function(vt){jt!==vt&&(s.clearStencil(vt),jt=vt)},reset:function(){V=!1,Ae=null,ie=null,fe=null,be=null,Pe=null,it=null,Ut=null,jt=null}}}const u=new n,f=new r,d=new a,p=new WeakMap,m=new WeakMap;let _={},v={},x=new WeakMap,S=[],w=null,R=!1,y=null,g=null,I=null,L=null,C=null,W=null,k=null,F=new Et(0,0,0),Y=0,P=!1,A=null,z=null,oe=null,te=null,ce=null;const he=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let se=!1,le=0;const B=s.getParameter(s.VERSION);B.indexOf("WebGL")!==-1?(le=parseFloat(/^WebGL (\d)/.exec(B)[1]),se=le>=1):B.indexOf("OpenGL ES")!==-1&&(le=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),se=le>=2);let ae=null,re={};const U=s.getParameter(s.SCISSOR_BOX),ne=s.getParameter(s.VIEWPORT),Ie=new Pt().fromArray(U),Q=new Pt().fromArray(ne);function de(V,Ae,ie,fe){const be=new Uint8Array(4),Pe=s.createTexture();s.bindTexture(V,Pe),s.texParameteri(V,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(V,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let it=0;it<ie;it++)V===s.TEXTURE_3D||V===s.TEXTURE_2D_ARRAY?s.texImage3D(Ae,0,s.RGBA,1,1,fe,0,s.RGBA,s.UNSIGNED_BYTE,be):s.texImage2D(Ae+it,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,be);return Pe}const Se={};Se[s.TEXTURE_2D]=de(s.TEXTURE_2D,s.TEXTURE_2D,1),Se[s.TEXTURE_CUBE_MAP]=de(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Se[s.TEXTURE_2D_ARRAY]=de(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Se[s.TEXTURE_3D]=de(s.TEXTURE_3D,s.TEXTURE_3D,1,1),u.setClear(0,0,0,1),f.setClear(1),d.setClear(0),ve(s.DEPTH_TEST),f.setFunc(Ws),ht(!1),ut(Cp),ve(s.CULL_FACE),O(vr);function ve(V){_[V]!==!0&&(s.enable(V),_[V]=!0)}function Te(V){_[V]!==!1&&(s.disable(V),_[V]=!1)}function Ue(V,Ae){return v[V]!==Ae?(s.bindFramebuffer(V,Ae),v[V]=Ae,V===s.DRAW_FRAMEBUFFER&&(v[s.FRAMEBUFFER]=Ae),V===s.FRAMEBUFFER&&(v[s.DRAW_FRAMEBUFFER]=Ae),!0):!1}function Ze(V,Ae){let ie=S,fe=!1;if(V){ie=x.get(Ae),ie===void 0&&(ie=[],x.set(Ae,ie));const be=V.textures;if(ie.length!==be.length||ie[0]!==s.COLOR_ATTACHMENT0){for(let Pe=0,it=be.length;Pe<it;Pe++)ie[Pe]=s.COLOR_ATTACHMENT0+Pe;ie.length=be.length,fe=!0}}else ie[0]!==s.BACK&&(ie[0]=s.BACK,fe=!0);fe&&s.drawBuffers(ie)}function At(V){return w!==V?(s.useProgram(V),w=V,!0):!1}const pt={[Wr]:s.FUNC_ADD,[iv]:s.FUNC_SUBTRACT,[rv]:s.FUNC_REVERSE_SUBTRACT};pt[sv]=s.MIN,pt[ov]=s.MAX;const Dt={[av]:s.ZERO,[lv]:s.ONE,[uv]:s.SRC_COLOR,[Kc]:s.SRC_ALPHA,[mv]:s.SRC_ALPHA_SATURATE,[hv]:s.DST_COLOR,[fv]:s.DST_ALPHA,[cv]:s.ONE_MINUS_SRC_COLOR,[$c]:s.ONE_MINUS_SRC_ALPHA,[pv]:s.ONE_MINUS_DST_COLOR,[dv]:s.ONE_MINUS_DST_ALPHA,[gv]:s.CONSTANT_COLOR,[_v]:s.ONE_MINUS_CONSTANT_COLOR,[vv]:s.CONSTANT_ALPHA,[xv]:s.ONE_MINUS_CONSTANT_ALPHA};function O(V,Ae,ie,fe,be,Pe,it,Ut,jt,vt){if(V===vr){R===!0&&(Te(s.BLEND),R=!1);return}if(R===!1&&(ve(s.BLEND),R=!0),V!==nv){if(V!==y||vt!==P){if((g!==Wr||C!==Wr)&&(s.blendEquation(s.FUNC_ADD),g=Wr,C=Wr),vt)switch(V){case Hs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Pp:s.blendFunc(s.ONE,s.ONE);break;case bp:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Dp:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case Hs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Pp:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case bp:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Dp:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}I=null,L=null,W=null,k=null,F.set(0,0,0),Y=0,y=V,P=vt}return}be=be||Ae,Pe=Pe||ie,it=it||fe,(Ae!==g||be!==C)&&(s.blendEquationSeparate(pt[Ae],pt[be]),g=Ae,C=be),(ie!==I||fe!==L||Pe!==W||it!==k)&&(s.blendFuncSeparate(Dt[ie],Dt[fe],Dt[Pe],Dt[it]),I=ie,L=fe,W=Pe,k=it),(Ut.equals(F)===!1||jt!==Y)&&(s.blendColor(Ut.r,Ut.g,Ut.b,jt),F.copy(Ut),Y=jt),y=V,P=!1}function _n(V,Ae){V.side===Oi?Te(s.CULL_FACE):ve(s.CULL_FACE);let ie=V.side===Un;Ae&&(ie=!ie),ht(ie),V.blending===Hs&&V.transparent===!1?O(vr):O(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),f.setFunc(V.depthFunc),f.setTest(V.depthTest),f.setMask(V.depthWrite),u.setMask(V.colorWrite);const fe=V.stencilWrite;d.setTest(fe),fe&&(d.setMask(V.stencilWriteMask),d.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),d.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),wt(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?ve(s.SAMPLE_ALPHA_TO_COVERAGE):Te(s.SAMPLE_ALPHA_TO_COVERAGE)}function ht(V){A!==V&&(V?s.frontFace(s.CW):s.frontFace(s.CCW),A=V)}function ut(V){V!==J_?(ve(s.CULL_FACE),V!==z&&(V===Cp?s.cullFace(s.BACK):V===ev?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Te(s.CULL_FACE),z=V}function Ye(V){V!==oe&&(se&&s.lineWidth(V),oe=V)}function wt(V,Ae,ie){V?(ve(s.POLYGON_OFFSET_FILL),(te!==Ae||ce!==ie)&&(s.polygonOffset(Ae,ie),te=Ae,ce=ie)):Te(s.POLYGON_OFFSET_FILL)}function Ge(V){V?ve(s.SCISSOR_TEST):Te(s.SCISSOR_TEST)}function b(V){V===void 0&&(V=s.TEXTURE0+he-1),ae!==V&&(s.activeTexture(V),ae=V)}function E(V,Ae,ie){ie===void 0&&(ae===null?ie=s.TEXTURE0+he-1:ie=ae);let fe=re[ie];fe===void 0&&(fe={type:void 0,texture:void 0},re[ie]=fe),(fe.type!==V||fe.texture!==Ae)&&(ae!==ie&&(s.activeTexture(ie),ae=ie),s.bindTexture(V,Ae||Se[V]),fe.type=V,fe.texture=Ae)}function Z(){const V=re[ae];V!==void 0&&V.type!==void 0&&(s.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function pe(){try{s.compressedTexImage2D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ge(){try{s.compressedTexImage3D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ue(){try{s.texSubImage2D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function We(){try{s.texSubImage3D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function we(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ne(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function lt(){try{s.texStorage2D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Me(){try{s.texStorage3D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Oe(){try{s.texImage2D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function qe(){try{s.texImage3D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Je(V){Ie.equals(V)===!1&&(s.scissor(V.x,V.y,V.z,V.w),Ie.copy(V))}function ke(V){Q.equals(V)===!1&&(s.viewport(V.x,V.y,V.z,V.w),Q.copy(V))}function ct(V,Ae){let ie=m.get(Ae);ie===void 0&&(ie=new WeakMap,m.set(Ae,ie));let fe=ie.get(V);fe===void 0&&(fe=s.getUniformBlockIndex(Ae,V.name),ie.set(V,fe))}function nt(V,Ae){const fe=m.get(Ae).get(V);p.get(Ae)!==fe&&(s.uniformBlockBinding(Ae,fe,V.__bindingPointIndex),p.set(Ae,fe))}function Tt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),f.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),_={},ae=null,re={},v={},x=new WeakMap,S=[],w=null,R=!1,y=null,g=null,I=null,L=null,C=null,W=null,k=null,F=new Et(0,0,0),Y=0,P=!1,A=null,z=null,oe=null,te=null,ce=null,Ie.set(0,0,s.canvas.width,s.canvas.height),Q.set(0,0,s.canvas.width,s.canvas.height),u.reset(),f.reset(),d.reset()}return{buffers:{color:u,depth:f,stencil:d},enable:ve,disable:Te,bindFramebuffer:Ue,drawBuffers:Ze,useProgram:At,setBlending:O,setMaterial:_n,setFlipSided:ht,setCullFace:ut,setLineWidth:Ye,setPolygonOffset:wt,setScissorTest:Ge,activeTexture:b,bindTexture:E,unbindTexture:Z,compressedTexImage2D:pe,compressedTexImage3D:ge,texImage2D:Oe,texImage3D:qe,updateUBOMapping:ct,uniformBlockBinding:nt,texStorage2D:lt,texStorage3D:Me,texSubImage2D:ue,texSubImage3D:We,compressedTexSubImage2D:we,compressedTexSubImage3D:Ne,scissor:Je,viewport:ke,reset:Tt}}function xE(s,e,n,r,a,u,f){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new st,_=new WeakMap;let v;const x=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(b,E){return S?new OffscreenCanvas(b,E):Vo("canvas")}function R(b,E,Z){let pe=1;const ge=Ge(b);if((ge.width>Z||ge.height>Z)&&(pe=Z/Math.max(ge.width,ge.height)),pe<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const ue=Math.floor(pe*ge.width),We=Math.floor(pe*ge.height);v===void 0&&(v=w(ue,We));const we=E?w(ue,We):v;return we.width=ue,we.height=We,we.getContext("2d").drawImage(b,0,0,ue,We),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ge.width+"x"+ge.height+") to ("+ue+"x"+We+")."),we}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ge.width+"x"+ge.height+")."),b;return b}function y(b){return b.generateMipmaps}function g(b){s.generateMipmap(b)}function I(b){return b.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?s.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function L(b,E,Z,pe,ge=!1){if(b!==null){if(s[b]!==void 0)return s[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let ue=E;if(E===s.RED&&(Z===s.FLOAT&&(ue=s.R32F),Z===s.HALF_FLOAT&&(ue=s.R16F),Z===s.UNSIGNED_BYTE&&(ue=s.R8)),E===s.RED_INTEGER&&(Z===s.UNSIGNED_BYTE&&(ue=s.R8UI),Z===s.UNSIGNED_SHORT&&(ue=s.R16UI),Z===s.UNSIGNED_INT&&(ue=s.R32UI),Z===s.BYTE&&(ue=s.R8I),Z===s.SHORT&&(ue=s.R16I),Z===s.INT&&(ue=s.R32I)),E===s.RG&&(Z===s.FLOAT&&(ue=s.RG32F),Z===s.HALF_FLOAT&&(ue=s.RG16F),Z===s.UNSIGNED_BYTE&&(ue=s.RG8)),E===s.RG_INTEGER&&(Z===s.UNSIGNED_BYTE&&(ue=s.RG8UI),Z===s.UNSIGNED_SHORT&&(ue=s.RG16UI),Z===s.UNSIGNED_INT&&(ue=s.RG32UI),Z===s.BYTE&&(ue=s.RG8I),Z===s.SHORT&&(ue=s.RG16I),Z===s.INT&&(ue=s.RG32I)),E===s.RGB_INTEGER&&(Z===s.UNSIGNED_BYTE&&(ue=s.RGB8UI),Z===s.UNSIGNED_SHORT&&(ue=s.RGB16UI),Z===s.UNSIGNED_INT&&(ue=s.RGB32UI),Z===s.BYTE&&(ue=s.RGB8I),Z===s.SHORT&&(ue=s.RGB16I),Z===s.INT&&(ue=s.RGB32I)),E===s.RGBA_INTEGER&&(Z===s.UNSIGNED_BYTE&&(ue=s.RGBA8UI),Z===s.UNSIGNED_SHORT&&(ue=s.RGBA16UI),Z===s.UNSIGNED_INT&&(ue=s.RGBA32UI),Z===s.BYTE&&(ue=s.RGBA8I),Z===s.SHORT&&(ue=s.RGBA16I),Z===s.INT&&(ue=s.RGBA32I)),E===s.RGB&&Z===s.UNSIGNED_INT_5_9_9_9_REV&&(ue=s.RGB9_E5),E===s.RGBA){const We=ge?bl:Mt.getTransfer(pe);Z===s.FLOAT&&(ue=s.RGBA32F),Z===s.HALF_FLOAT&&(ue=s.RGBA16F),Z===s.UNSIGNED_BYTE&&(ue=We===Rt?s.SRGB8_ALPHA8:s.RGBA8),Z===s.UNSIGNED_SHORT_4_4_4_4&&(ue=s.RGBA4),Z===s.UNSIGNED_SHORT_5_5_5_1&&(ue=s.RGB5_A1)}return(ue===s.R16F||ue===s.R32F||ue===s.RG16F||ue===s.RG32F||ue===s.RGBA16F||ue===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ue}function C(b,E){let Z;return b?E===null||E===qr||E===js?Z=s.DEPTH24_STENCIL8:E===ki?Z=s.DEPTH32F_STENCIL8:E===zo&&(Z=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===qr||E===js?Z=s.DEPTH_COMPONENT24:E===ki?Z=s.DEPTH_COMPONENT32F:E===zo&&(Z=s.DEPTH_COMPONENT16),Z}function W(b,E){return y(b)===!0||b.isFramebufferTexture&&b.minFilter!==ai&&b.minFilter!==mi?Math.log2(Math.max(E.width,E.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?E.mipmaps.length:1}function k(b){const E=b.target;E.removeEventListener("dispose",k),Y(E),E.isVideoTexture&&_.delete(E)}function F(b){const E=b.target;E.removeEventListener("dispose",F),A(E)}function Y(b){const E=r.get(b);if(E.__webglInit===void 0)return;const Z=b.source,pe=x.get(Z);if(pe){const ge=pe[E.__cacheKey];ge.usedTimes--,ge.usedTimes===0&&P(b),Object.keys(pe).length===0&&x.delete(Z)}r.remove(b)}function P(b){const E=r.get(b);s.deleteTexture(E.__webglTexture);const Z=b.source,pe=x.get(Z);delete pe[E.__cacheKey],f.memory.textures--}function A(b){const E=r.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),r.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let pe=0;pe<6;pe++){if(Array.isArray(E.__webglFramebuffer[pe]))for(let ge=0;ge<E.__webglFramebuffer[pe].length;ge++)s.deleteFramebuffer(E.__webglFramebuffer[pe][ge]);else s.deleteFramebuffer(E.__webglFramebuffer[pe]);E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer[pe])}else{if(Array.isArray(E.__webglFramebuffer))for(let pe=0;pe<E.__webglFramebuffer.length;pe++)s.deleteFramebuffer(E.__webglFramebuffer[pe]);else s.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&s.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let pe=0;pe<E.__webglColorRenderbuffer.length;pe++)E.__webglColorRenderbuffer[pe]&&s.deleteRenderbuffer(E.__webglColorRenderbuffer[pe]);E.__webglDepthRenderbuffer&&s.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const Z=b.textures;for(let pe=0,ge=Z.length;pe<ge;pe++){const ue=r.get(Z[pe]);ue.__webglTexture&&(s.deleteTexture(ue.__webglTexture),f.memory.textures--),r.remove(Z[pe])}r.remove(b)}let z=0;function oe(){z=0}function te(){const b=z;return b>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+a.maxTextures),z+=1,b}function ce(b){const E=[];return E.push(b.wrapS),E.push(b.wrapT),E.push(b.wrapR||0),E.push(b.magFilter),E.push(b.minFilter),E.push(b.anisotropy),E.push(b.internalFormat),E.push(b.format),E.push(b.type),E.push(b.generateMipmaps),E.push(b.premultiplyAlpha),E.push(b.flipY),E.push(b.unpackAlignment),E.push(b.colorSpace),E.join()}function he(b,E){const Z=r.get(b);if(b.isVideoTexture&&Ye(b),b.isRenderTargetTexture===!1&&b.version>0&&Z.__version!==b.version){const pe=b.image;if(pe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(pe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Q(Z,b,E);return}}n.bindTexture(s.TEXTURE_2D,Z.__webglTexture,s.TEXTURE0+E)}function se(b,E){const Z=r.get(b);if(b.version>0&&Z.__version!==b.version){Q(Z,b,E);return}n.bindTexture(s.TEXTURE_2D_ARRAY,Z.__webglTexture,s.TEXTURE0+E)}function le(b,E){const Z=r.get(b);if(b.version>0&&Z.__version!==b.version){Q(Z,b,E);return}n.bindTexture(s.TEXTURE_3D,Z.__webglTexture,s.TEXTURE0+E)}function B(b,E){const Z=r.get(b);if(b.version>0&&Z.__version!==b.version){de(Z,b,E);return}n.bindTexture(s.TEXTURE_CUBE_MAP,Z.__webglTexture,s.TEXTURE0+E)}const ae={[af]:s.REPEAT,[Yr]:s.CLAMP_TO_EDGE,[lf]:s.MIRRORED_REPEAT},re={[ai]:s.NEAREST,[Pv]:s.NEAREST_MIPMAP_NEAREST,[tl]:s.NEAREST_MIPMAP_LINEAR,[mi]:s.LINEAR,[_c]:s.LINEAR_MIPMAP_NEAREST,[jr]:s.LINEAR_MIPMAP_LINEAR},U={[Uv]:s.NEVER,[Bv]:s.ALWAYS,[Iv]:s.LESS,[Ym]:s.LEQUAL,[Nv]:s.EQUAL,[kv]:s.GEQUAL,[Fv]:s.GREATER,[Ov]:s.NOTEQUAL};function ne(b,E){if(E.type===ki&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===mi||E.magFilter===_c||E.magFilter===tl||E.magFilter===jr||E.minFilter===mi||E.minFilter===_c||E.minFilter===tl||E.minFilter===jr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(b,s.TEXTURE_WRAP_S,ae[E.wrapS]),s.texParameteri(b,s.TEXTURE_WRAP_T,ae[E.wrapT]),(b===s.TEXTURE_3D||b===s.TEXTURE_2D_ARRAY)&&s.texParameteri(b,s.TEXTURE_WRAP_R,ae[E.wrapR]),s.texParameteri(b,s.TEXTURE_MAG_FILTER,re[E.magFilter]),s.texParameteri(b,s.TEXTURE_MIN_FILTER,re[E.minFilter]),E.compareFunction&&(s.texParameteri(b,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(b,s.TEXTURE_COMPARE_FUNC,U[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===ai||E.minFilter!==tl&&E.minFilter!==jr||E.type===ki&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||r.get(E).__currentAnisotropy){const Z=e.get("EXT_texture_filter_anisotropic");s.texParameterf(b,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,a.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy}}}function Ie(b,E){let Z=!1;b.__webglInit===void 0&&(b.__webglInit=!0,E.addEventListener("dispose",k));const pe=E.source;let ge=x.get(pe);ge===void 0&&(ge={},x.set(pe,ge));const ue=ce(E);if(ue!==b.__cacheKey){ge[ue]===void 0&&(ge[ue]={texture:s.createTexture(),usedTimes:0},f.memory.textures++,Z=!0),ge[ue].usedTimes++;const We=ge[b.__cacheKey];We!==void 0&&(ge[b.__cacheKey].usedTimes--,We.usedTimes===0&&P(E)),b.__cacheKey=ue,b.__webglTexture=ge[ue].texture}return Z}function Q(b,E,Z){let pe=s.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(pe=s.TEXTURE_2D_ARRAY),E.isData3DTexture&&(pe=s.TEXTURE_3D);const ge=Ie(b,E),ue=E.source;n.bindTexture(pe,b.__webglTexture,s.TEXTURE0+Z);const We=r.get(ue);if(ue.version!==We.__version||ge===!0){n.activeTexture(s.TEXTURE0+Z);const we=Mt.getPrimaries(Mt.workingColorSpace),Ne=E.colorSpace===_r?null:Mt.getPrimaries(E.colorSpace),lt=E.colorSpace===_r||we===Ne?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,lt);let Me=R(E.image,!1,a.maxTextureSize);Me=wt(E,Me);const Oe=u.convert(E.format,E.colorSpace),qe=u.convert(E.type);let Je=L(E.internalFormat,Oe,qe,E.colorSpace,E.isVideoTexture);ne(pe,E);let ke;const ct=E.mipmaps,nt=E.isVideoTexture!==!0,Tt=We.__version===void 0||ge===!0,V=ue.dataReady,Ae=W(E,Me);if(E.isDepthTexture)Je=C(E.format===qs,E.type),Tt&&(nt?n.texStorage2D(s.TEXTURE_2D,1,Je,Me.width,Me.height):n.texImage2D(s.TEXTURE_2D,0,Je,Me.width,Me.height,0,Oe,qe,null));else if(E.isDataTexture)if(ct.length>0){nt&&Tt&&n.texStorage2D(s.TEXTURE_2D,Ae,Je,ct[0].width,ct[0].height);for(let ie=0,fe=ct.length;ie<fe;ie++)ke=ct[ie],nt?V&&n.texSubImage2D(s.TEXTURE_2D,ie,0,0,ke.width,ke.height,Oe,qe,ke.data):n.texImage2D(s.TEXTURE_2D,ie,Je,ke.width,ke.height,0,Oe,qe,ke.data);E.generateMipmaps=!1}else nt?(Tt&&n.texStorage2D(s.TEXTURE_2D,Ae,Je,Me.width,Me.height),V&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,Me.width,Me.height,Oe,qe,Me.data)):n.texImage2D(s.TEXTURE_2D,0,Je,Me.width,Me.height,0,Oe,qe,Me.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){nt&&Tt&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Ae,Je,ct[0].width,ct[0].height,Me.depth);for(let ie=0,fe=ct.length;ie<fe;ie++)if(ke=ct[ie],E.format!==oi)if(Oe!==null)if(nt){if(V)if(E.layerUpdates.size>0){const be=sm(ke.width,ke.height,E.format,E.type);for(const Pe of E.layerUpdates){const it=ke.data.subarray(Pe*be/ke.data.BYTES_PER_ELEMENT,(Pe+1)*be/ke.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ie,0,0,Pe,ke.width,ke.height,1,Oe,it)}E.clearLayerUpdates()}else n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ie,0,0,0,ke.width,ke.height,Me.depth,Oe,ke.data)}else n.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ie,Je,ke.width,ke.height,Me.depth,0,ke.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else nt?V&&n.texSubImage3D(s.TEXTURE_2D_ARRAY,ie,0,0,0,ke.width,ke.height,Me.depth,Oe,qe,ke.data):n.texImage3D(s.TEXTURE_2D_ARRAY,ie,Je,ke.width,ke.height,Me.depth,0,Oe,qe,ke.data)}else{nt&&Tt&&n.texStorage2D(s.TEXTURE_2D,Ae,Je,ct[0].width,ct[0].height);for(let ie=0,fe=ct.length;ie<fe;ie++)ke=ct[ie],E.format!==oi?Oe!==null?nt?V&&n.compressedTexSubImage2D(s.TEXTURE_2D,ie,0,0,ke.width,ke.height,Oe,ke.data):n.compressedTexImage2D(s.TEXTURE_2D,ie,Je,ke.width,ke.height,0,ke.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):nt?V&&n.texSubImage2D(s.TEXTURE_2D,ie,0,0,ke.width,ke.height,Oe,qe,ke.data):n.texImage2D(s.TEXTURE_2D,ie,Je,ke.width,ke.height,0,Oe,qe,ke.data)}else if(E.isDataArrayTexture)if(nt){if(Tt&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Ae,Je,Me.width,Me.height,Me.depth),V)if(E.layerUpdates.size>0){const ie=sm(Me.width,Me.height,E.format,E.type);for(const fe of E.layerUpdates){const be=Me.data.subarray(fe*ie/Me.data.BYTES_PER_ELEMENT,(fe+1)*ie/Me.data.BYTES_PER_ELEMENT);n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,fe,Me.width,Me.height,1,Oe,qe,be)}E.clearLayerUpdates()}else n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Me.width,Me.height,Me.depth,Oe,qe,Me.data)}else n.texImage3D(s.TEXTURE_2D_ARRAY,0,Je,Me.width,Me.height,Me.depth,0,Oe,qe,Me.data);else if(E.isData3DTexture)nt?(Tt&&n.texStorage3D(s.TEXTURE_3D,Ae,Je,Me.width,Me.height,Me.depth),V&&n.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Me.width,Me.height,Me.depth,Oe,qe,Me.data)):n.texImage3D(s.TEXTURE_3D,0,Je,Me.width,Me.height,Me.depth,0,Oe,qe,Me.data);else if(E.isFramebufferTexture){if(Tt)if(nt)n.texStorage2D(s.TEXTURE_2D,Ae,Je,Me.width,Me.height);else{let ie=Me.width,fe=Me.height;for(let be=0;be<Ae;be++)n.texImage2D(s.TEXTURE_2D,be,Je,ie,fe,0,Oe,qe,null),ie>>=1,fe>>=1}}else if(ct.length>0){if(nt&&Tt){const ie=Ge(ct[0]);n.texStorage2D(s.TEXTURE_2D,Ae,Je,ie.width,ie.height)}for(let ie=0,fe=ct.length;ie<fe;ie++)ke=ct[ie],nt?V&&n.texSubImage2D(s.TEXTURE_2D,ie,0,0,Oe,qe,ke):n.texImage2D(s.TEXTURE_2D,ie,Je,Oe,qe,ke);E.generateMipmaps=!1}else if(nt){if(Tt){const ie=Ge(Me);n.texStorage2D(s.TEXTURE_2D,Ae,Je,ie.width,ie.height)}V&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,Oe,qe,Me)}else n.texImage2D(s.TEXTURE_2D,0,Je,Oe,qe,Me);y(E)&&g(pe),We.__version=ue.version,E.onUpdate&&E.onUpdate(E)}b.__version=E.version}function de(b,E,Z){if(E.image.length!==6)return;const pe=Ie(b,E),ge=E.source;n.bindTexture(s.TEXTURE_CUBE_MAP,b.__webglTexture,s.TEXTURE0+Z);const ue=r.get(ge);if(ge.version!==ue.__version||pe===!0){n.activeTexture(s.TEXTURE0+Z);const We=Mt.getPrimaries(Mt.workingColorSpace),we=E.colorSpace===_r?null:Mt.getPrimaries(E.colorSpace),Ne=E.colorSpace===_r||We===we?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne);const lt=E.isCompressedTexture||E.image[0].isCompressedTexture,Me=E.image[0]&&E.image[0].isDataTexture,Oe=[];for(let fe=0;fe<6;fe++)!lt&&!Me?Oe[fe]=R(E.image[fe],!0,a.maxCubemapSize):Oe[fe]=Me?E.image[fe].image:E.image[fe],Oe[fe]=wt(E,Oe[fe]);const qe=Oe[0],Je=u.convert(E.format,E.colorSpace),ke=u.convert(E.type),ct=L(E.internalFormat,Je,ke,E.colorSpace),nt=E.isVideoTexture!==!0,Tt=ue.__version===void 0||pe===!0,V=ge.dataReady;let Ae=W(E,qe);ne(s.TEXTURE_CUBE_MAP,E);let ie;if(lt){nt&&Tt&&n.texStorage2D(s.TEXTURE_CUBE_MAP,Ae,ct,qe.width,qe.height);for(let fe=0;fe<6;fe++){ie=Oe[fe].mipmaps;for(let be=0;be<ie.length;be++){const Pe=ie[be];E.format!==oi?Je!==null?nt?V&&n.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,be,0,0,Pe.width,Pe.height,Je,Pe.data):n.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,be,ct,Pe.width,Pe.height,0,Pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):nt?V&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,be,0,0,Pe.width,Pe.height,Je,ke,Pe.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,be,ct,Pe.width,Pe.height,0,Je,ke,Pe.data)}}}else{if(ie=E.mipmaps,nt&&Tt){ie.length>0&&Ae++;const fe=Ge(Oe[0]);n.texStorage2D(s.TEXTURE_CUBE_MAP,Ae,ct,fe.width,fe.height)}for(let fe=0;fe<6;fe++)if(Me){nt?V&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,Oe[fe].width,Oe[fe].height,Je,ke,Oe[fe].data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,ct,Oe[fe].width,Oe[fe].height,0,Je,ke,Oe[fe].data);for(let be=0;be<ie.length;be++){const it=ie[be].image[fe].image;nt?V&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,be+1,0,0,it.width,it.height,Je,ke,it.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,be+1,ct,it.width,it.height,0,Je,ke,it.data)}}else{nt?V&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,Je,ke,Oe[fe]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,ct,Je,ke,Oe[fe]);for(let be=0;be<ie.length;be++){const Pe=ie[be];nt?V&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,be+1,0,0,Je,ke,Pe.image[fe]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,be+1,ct,Je,ke,Pe.image[fe])}}}y(E)&&g(s.TEXTURE_CUBE_MAP),ue.__version=ge.version,E.onUpdate&&E.onUpdate(E)}b.__version=E.version}function Se(b,E,Z,pe,ge,ue){const We=u.convert(Z.format,Z.colorSpace),we=u.convert(Z.type),Ne=L(Z.internalFormat,We,we,Z.colorSpace),lt=r.get(E),Me=r.get(Z);if(Me.__renderTarget=E,!lt.__hasExternalTextures){const Oe=Math.max(1,E.width>>ue),qe=Math.max(1,E.height>>ue);ge===s.TEXTURE_3D||ge===s.TEXTURE_2D_ARRAY?n.texImage3D(ge,ue,Ne,Oe,qe,E.depth,0,We,we,null):n.texImage2D(ge,ue,Ne,Oe,qe,0,We,we,null)}n.bindFramebuffer(s.FRAMEBUFFER,b),ut(E)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,pe,ge,Me.__webglTexture,0,ht(E)):(ge===s.TEXTURE_2D||ge>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ge<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,pe,ge,Me.__webglTexture,ue),n.bindFramebuffer(s.FRAMEBUFFER,null)}function ve(b,E,Z){if(s.bindRenderbuffer(s.RENDERBUFFER,b),E.depthBuffer){const pe=E.depthTexture,ge=pe&&pe.isDepthTexture?pe.type:null,ue=C(E.stencilBuffer,ge),We=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,we=ht(E);ut(E)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,we,ue,E.width,E.height):Z?s.renderbufferStorageMultisample(s.RENDERBUFFER,we,ue,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,ue,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,We,s.RENDERBUFFER,b)}else{const pe=E.textures;for(let ge=0;ge<pe.length;ge++){const ue=pe[ge],We=u.convert(ue.format,ue.colorSpace),we=u.convert(ue.type),Ne=L(ue.internalFormat,We,we,ue.colorSpace),lt=ht(E);Z&&ut(E)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,lt,Ne,E.width,E.height):ut(E)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,lt,Ne,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,Ne,E.width,E.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Te(b,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(s.FRAMEBUFFER,b),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const pe=r.get(E.depthTexture);pe.__renderTarget=E,(!pe.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),he(E.depthTexture,0);const ge=pe.__webglTexture,ue=ht(E);if(E.depthTexture.format===Vs)ut(E)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ge,0,ue):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ge,0);else if(E.depthTexture.format===qs)ut(E)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ge,0,ue):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ge,0);else throw new Error("Unknown depthTexture format")}function Ue(b){const E=r.get(b),Z=b.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==b.depthTexture){const pe=b.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),pe){const ge=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,pe.removeEventListener("dispose",ge)};pe.addEventListener("dispose",ge),E.__depthDisposeCallback=ge}E.__boundDepthTexture=pe}if(b.depthTexture&&!E.__autoAllocateDepthBuffer){if(Z)throw new Error("target.depthTexture not supported in Cube render targets");Te(E.__webglFramebuffer,b)}else if(Z){E.__webglDepthbuffer=[];for(let pe=0;pe<6;pe++)if(n.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[pe]),E.__webglDepthbuffer[pe]===void 0)E.__webglDepthbuffer[pe]=s.createRenderbuffer(),ve(E.__webglDepthbuffer[pe],b,!1);else{const ge=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ue=E.__webglDepthbuffer[pe];s.bindRenderbuffer(s.RENDERBUFFER,ue),s.framebufferRenderbuffer(s.FRAMEBUFFER,ge,s.RENDERBUFFER,ue)}}else if(n.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=s.createRenderbuffer(),ve(E.__webglDepthbuffer,b,!1);else{const pe=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ge=E.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ge),s.framebufferRenderbuffer(s.FRAMEBUFFER,pe,s.RENDERBUFFER,ge)}n.bindFramebuffer(s.FRAMEBUFFER,null)}function Ze(b,E,Z){const pe=r.get(b);E!==void 0&&Se(pe.__webglFramebuffer,b,b.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),Z!==void 0&&Ue(b)}function At(b){const E=b.texture,Z=r.get(b),pe=r.get(E);b.addEventListener("dispose",F);const ge=b.textures,ue=b.isWebGLCubeRenderTarget===!0,We=ge.length>1;if(We||(pe.__webglTexture===void 0&&(pe.__webglTexture=s.createTexture()),pe.__version=E.version,f.memory.textures++),ue){Z.__webglFramebuffer=[];for(let we=0;we<6;we++)if(E.mipmaps&&E.mipmaps.length>0){Z.__webglFramebuffer[we]=[];for(let Ne=0;Ne<E.mipmaps.length;Ne++)Z.__webglFramebuffer[we][Ne]=s.createFramebuffer()}else Z.__webglFramebuffer[we]=s.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){Z.__webglFramebuffer=[];for(let we=0;we<E.mipmaps.length;we++)Z.__webglFramebuffer[we]=s.createFramebuffer()}else Z.__webglFramebuffer=s.createFramebuffer();if(We)for(let we=0,Ne=ge.length;we<Ne;we++){const lt=r.get(ge[we]);lt.__webglTexture===void 0&&(lt.__webglTexture=s.createTexture(),f.memory.textures++)}if(b.samples>0&&ut(b)===!1){Z.__webglMultisampledFramebuffer=s.createFramebuffer(),Z.__webglColorRenderbuffer=[],n.bindFramebuffer(s.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let we=0;we<ge.length;we++){const Ne=ge[we];Z.__webglColorRenderbuffer[we]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,Z.__webglColorRenderbuffer[we]);const lt=u.convert(Ne.format,Ne.colorSpace),Me=u.convert(Ne.type),Oe=L(Ne.internalFormat,lt,Me,Ne.colorSpace,b.isXRRenderTarget===!0),qe=ht(b);s.renderbufferStorageMultisample(s.RENDERBUFFER,qe,Oe,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+we,s.RENDERBUFFER,Z.__webglColorRenderbuffer[we])}s.bindRenderbuffer(s.RENDERBUFFER,null),b.depthBuffer&&(Z.__webglDepthRenderbuffer=s.createRenderbuffer(),ve(Z.__webglDepthRenderbuffer,b,!0)),n.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ue){n.bindTexture(s.TEXTURE_CUBE_MAP,pe.__webglTexture),ne(s.TEXTURE_CUBE_MAP,E);for(let we=0;we<6;we++)if(E.mipmaps&&E.mipmaps.length>0)for(let Ne=0;Ne<E.mipmaps.length;Ne++)Se(Z.__webglFramebuffer[we][Ne],b,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+we,Ne);else Se(Z.__webglFramebuffer[we],b,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+we,0);y(E)&&g(s.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(We){for(let we=0,Ne=ge.length;we<Ne;we++){const lt=ge[we],Me=r.get(lt);n.bindTexture(s.TEXTURE_2D,Me.__webglTexture),ne(s.TEXTURE_2D,lt),Se(Z.__webglFramebuffer,b,lt,s.COLOR_ATTACHMENT0+we,s.TEXTURE_2D,0),y(lt)&&g(s.TEXTURE_2D)}n.unbindTexture()}else{let we=s.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(we=b.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),n.bindTexture(we,pe.__webglTexture),ne(we,E),E.mipmaps&&E.mipmaps.length>0)for(let Ne=0;Ne<E.mipmaps.length;Ne++)Se(Z.__webglFramebuffer[Ne],b,E,s.COLOR_ATTACHMENT0,we,Ne);else Se(Z.__webglFramebuffer,b,E,s.COLOR_ATTACHMENT0,we,0);y(E)&&g(we),n.unbindTexture()}b.depthBuffer&&Ue(b)}function pt(b){const E=b.textures;for(let Z=0,pe=E.length;Z<pe;Z++){const ge=E[Z];if(y(ge)){const ue=I(b),We=r.get(ge).__webglTexture;n.bindTexture(ue,We),g(ue),n.unbindTexture()}}}const Dt=[],O=[];function _n(b){if(b.samples>0){if(ut(b)===!1){const E=b.textures,Z=b.width,pe=b.height;let ge=s.COLOR_BUFFER_BIT;const ue=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,We=r.get(b),we=E.length>1;if(we)for(let Ne=0;Ne<E.length;Ne++)n.bindFramebuffer(s.FRAMEBUFFER,We.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ne,s.RENDERBUFFER,null),n.bindFramebuffer(s.FRAMEBUFFER,We.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ne,s.TEXTURE_2D,null,0);n.bindFramebuffer(s.READ_FRAMEBUFFER,We.__webglMultisampledFramebuffer),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,We.__webglFramebuffer);for(let Ne=0;Ne<E.length;Ne++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(ge|=s.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(ge|=s.STENCIL_BUFFER_BIT)),we){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,We.__webglColorRenderbuffer[Ne]);const lt=r.get(E[Ne]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,lt,0)}s.blitFramebuffer(0,0,Z,pe,0,0,Z,pe,ge,s.NEAREST),p===!0&&(Dt.length=0,O.length=0,Dt.push(s.COLOR_ATTACHMENT0+Ne),b.depthBuffer&&b.resolveDepthBuffer===!1&&(Dt.push(ue),O.push(ue),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,O)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Dt))}if(n.bindFramebuffer(s.READ_FRAMEBUFFER,null),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),we)for(let Ne=0;Ne<E.length;Ne++){n.bindFramebuffer(s.FRAMEBUFFER,We.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ne,s.RENDERBUFFER,We.__webglColorRenderbuffer[Ne]);const lt=r.get(E[Ne]).__webglTexture;n.bindFramebuffer(s.FRAMEBUFFER,We.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ne,s.TEXTURE_2D,lt,0)}n.bindFramebuffer(s.DRAW_FRAMEBUFFER,We.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&p){const E=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[E])}}}function ht(b){return Math.min(a.maxSamples,b.samples)}function ut(b){const E=r.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Ye(b){const E=f.render.frame;_.get(b)!==E&&(_.set(b,E),b.update())}function wt(b,E){const Z=b.colorSpace,pe=b.format,ge=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||Z!==Ks&&Z!==_r&&(Mt.getTransfer(Z)===Rt?(pe!==oi||ge!==Hi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Z)),E}function Ge(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(m.width=b.naturalWidth||b.width,m.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(m.width=b.displayWidth,m.height=b.displayHeight):(m.width=b.width,m.height=b.height),m}this.allocateTextureUnit=te,this.resetTextureUnits=oe,this.setTexture2D=he,this.setTexture2DArray=se,this.setTexture3D=le,this.setTextureCube=B,this.rebindTextures=Ze,this.setupRenderTarget=At,this.updateRenderTargetMipmap=pt,this.updateMultisampleRenderTarget=_n,this.setupDepthRenderbuffer=Ue,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=ut}function yE(s,e){function n(r,a=_r){let u;const f=Mt.getTransfer(a);if(r===Hi)return s.UNSIGNED_BYTE;if(r===zf)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Hf)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Om)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===Nm)return s.BYTE;if(r===Fm)return s.SHORT;if(r===zo)return s.UNSIGNED_SHORT;if(r===Bf)return s.INT;if(r===qr)return s.UNSIGNED_INT;if(r===ki)return s.FLOAT;if(r===Go)return s.HALF_FLOAT;if(r===km)return s.ALPHA;if(r===Bm)return s.RGB;if(r===oi)return s.RGBA;if(r===zm)return s.LUMINANCE;if(r===Hm)return s.LUMINANCE_ALPHA;if(r===Vs)return s.DEPTH_COMPONENT;if(r===qs)return s.DEPTH_STENCIL;if(r===Vm)return s.RED;if(r===Vf)return s.RED_INTEGER;if(r===Gm)return s.RG;if(r===Gf)return s.RG_INTEGER;if(r===Wf)return s.RGBA_INTEGER;if(r===Tl||r===wl||r===Al||r===Rl)if(f===Rt)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(r===Tl)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===wl)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Al)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Rl)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(r===Tl)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===wl)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Al)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Rl)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===uf||r===cf||r===ff||r===df)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(r===uf)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===cf)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===ff)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===df)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===hf||r===pf||r===mf)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(r===hf||r===pf)return f===Rt?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(r===mf)return f===Rt?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===gf||r===_f||r===vf||r===xf||r===yf||r===Sf||r===Mf||r===Ef||r===Tf||r===wf||r===Af||r===Rf||r===Cf||r===Pf)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(r===gf)return f===Rt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===_f)return f===Rt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===vf)return f===Rt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===xf)return f===Rt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===yf)return f===Rt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Sf)return f===Rt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Mf)return f===Rt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Ef)return f===Rt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Tf)return f===Rt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===wf)return f===Rt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Af)return f===Rt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Rf)return f===Rt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Cf)return f===Rt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Pf)return f===Rt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Cl||r===bf||r===Df)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(r===Cl)return f===Rt?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===bf)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Df)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Wm||r===Lf||r===Uf||r===If)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(r===Cl)return u.COMPRESSED_RED_RGTC1_EXT;if(r===Lf)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Uf)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===If)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===js?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:n}}const SE={type:"move"};class Yc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new j,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new j),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new j,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new j),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const r of e.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let a=null,u=null,f=null;const d=this._targetRay,p=this._grip,m=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(m&&e.hand){f=!0;for(const R of e.hand.values()){const y=n.getJointPose(R,r),g=this._getHandJoint(m,R);y!==null&&(g.matrix.fromArray(y.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=y.radius),g.visible=y!==null}const _=m.joints["index-finger-tip"],v=m.joints["thumb-tip"],x=_.position.distanceTo(v.position),S=.02,w=.005;m.inputState.pinching&&x>S+w?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&x<=S-w&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(u=n.getPose(e.gripSpace,r),u!==null&&(p.matrix.fromArray(u.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,u.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(u.linearVelocity)):p.hasLinearVelocity=!1,u.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(u.angularVelocity)):p.hasAngularVelocity=!1));d!==null&&(a=n.getPose(e.targetRaySpace,r),a===null&&u!==null&&(a=u),a!==null&&(d.matrix.fromArray(a.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,a.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(a.linearVelocity)):d.hasLinearVelocity=!1,a.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(a.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(SE)))}return d!==null&&(d.visible=a!==null),p!==null&&(p.visible=u!==null),m!==null&&(m.visible=f!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const r=new xl;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[n.jointName]=r,e.add(r)}return e.joints[n.jointName]}}const ME=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,EE=`
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

}`;class TE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,r){if(this.texture===null){const a=new Tn,u=e.properties.get(a);u.__webglTexture=n.texture,(n.depthNear!==r.depthNear||n.depthFar!==r.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,r=new Sr({vertexShader:ME,fragmentShader:EE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new gi(new Ul(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class wE extends Zr{constructor(e,n){super();const r=this;let a=null,u=1,f=null,d="local-floor",p=1,m=null,_=null,v=null,x=null,S=null,w=null;const R=new TE,y=n.getContextAttributes();let g=null,I=null;const L=[],C=[],W=new st;let k=null;const F=new Hn;F.viewport=new Pt;const Y=new Hn;Y.viewport=new Pt;const P=[F,Y],A=new W0;let z=null,oe=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let de=L[Q];return de===void 0&&(de=new Yc,L[Q]=de),de.getTargetRaySpace()},this.getControllerGrip=function(Q){let de=L[Q];return de===void 0&&(de=new Yc,L[Q]=de),de.getGripSpace()},this.getHand=function(Q){let de=L[Q];return de===void 0&&(de=new Yc,L[Q]=de),de.getHandSpace()};function te(Q){const de=C.indexOf(Q.inputSource);if(de===-1)return;const Se=L[de];Se!==void 0&&(Se.update(Q.inputSource,Q.frame,m||f),Se.dispatchEvent({type:Q.type,data:Q.inputSource}))}function ce(){a.removeEventListener("select",te),a.removeEventListener("selectstart",te),a.removeEventListener("selectend",te),a.removeEventListener("squeeze",te),a.removeEventListener("squeezestart",te),a.removeEventListener("squeezeend",te),a.removeEventListener("end",ce),a.removeEventListener("inputsourceschange",he);for(let Q=0;Q<L.length;Q++){const de=C[Q];de!==null&&(C[Q]=null,L[Q].disconnect(de))}z=null,oe=null,R.reset(),e.setRenderTarget(g),S=null,x=null,v=null,a=null,I=null,Ie.stop(),r.isPresenting=!1,e.setPixelRatio(k),e.setSize(W.width,W.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){u=Q,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){d=Q,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||f},this.setReferenceSpace=function(Q){m=Q},this.getBaseLayer=function(){return x!==null?x:S},this.getBinding=function(){return v},this.getFrame=function(){return w},this.getSession=function(){return a},this.setSession=async function(Q){if(a=Q,a!==null){if(g=e.getRenderTarget(),a.addEventListener("select",te),a.addEventListener("selectstart",te),a.addEventListener("selectend",te),a.addEventListener("squeeze",te),a.addEventListener("squeezestart",te),a.addEventListener("squeezeend",te),a.addEventListener("end",ce),a.addEventListener("inputsourceschange",he),y.xrCompatible!==!0&&await n.makeXRCompatible(),k=e.getPixelRatio(),e.getSize(W),a.enabledFeatures!==void 0&&a.enabledFeatures.includes("layers")){let Se=null,ve=null,Te=null;y.depth&&(Te=y.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Se=y.stencil?qs:Vs,ve=y.stencil?js:qr);const Ue={colorFormat:n.RGBA8,depthFormat:Te,scaleFactor:u};v=new XRWebGLBinding(a,n),x=v.createProjectionLayer(Ue),a.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),I=new Kr(x.textureWidth,x.textureHeight,{format:oi,type:Hi,depthTexture:new sg(x.textureWidth,x.textureHeight,ve,void 0,void 0,void 0,void 0,void 0,void 0,Se),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1})}else{const Se={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:u};S=new XRWebGLLayer(a,n,Se),a.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),I=new Kr(S.framebufferWidth,S.framebufferHeight,{format:oi,type:Hi,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil})}I.isXRRenderTarget=!0,this.setFoveation(p),m=null,f=await a.requestReferenceSpace(d),Ie.setContext(a),Ie.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return R.getDepthTexture()};function he(Q){for(let de=0;de<Q.removed.length;de++){const Se=Q.removed[de],ve=C.indexOf(Se);ve>=0&&(C[ve]=null,L[ve].disconnect(Se))}for(let de=0;de<Q.added.length;de++){const Se=Q.added[de];let ve=C.indexOf(Se);if(ve===-1){for(let Ue=0;Ue<L.length;Ue++)if(Ue>=C.length){C.push(Se),ve=Ue;break}else if(C[Ue]===null){C[Ue]=Se,ve=Ue;break}if(ve===-1)break}const Te=L[ve];Te&&Te.connect(Se)}}const se=new j,le=new j;function B(Q,de,Se){se.setFromMatrixPosition(de.matrixWorld),le.setFromMatrixPosition(Se.matrixWorld);const ve=se.distanceTo(le),Te=de.projectionMatrix.elements,Ue=Se.projectionMatrix.elements,Ze=Te[14]/(Te[10]-1),At=Te[14]/(Te[10]+1),pt=(Te[9]+1)/Te[5],Dt=(Te[9]-1)/Te[5],O=(Te[8]-1)/Te[0],_n=(Ue[8]+1)/Ue[0],ht=Ze*O,ut=Ze*_n,Ye=ve/(-O+_n),wt=Ye*-O;if(de.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(wt),Q.translateZ(Ye),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),Te[10]===-1)Q.projectionMatrix.copy(de.projectionMatrix),Q.projectionMatrixInverse.copy(de.projectionMatrixInverse);else{const Ge=Ze+Ye,b=At+Ye,E=ht-wt,Z=ut+(ve-wt),pe=pt*At/b*Ge,ge=Dt*At/b*Ge;Q.projectionMatrix.makePerspective(E,Z,pe,ge,Ge,b),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function ae(Q,de){de===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(de.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(a===null)return;let de=Q.near,Se=Q.far;R.texture!==null&&(R.depthNear>0&&(de=R.depthNear),R.depthFar>0&&(Se=R.depthFar)),A.near=Y.near=F.near=de,A.far=Y.far=F.far=Se,(z!==A.near||oe!==A.far)&&(a.updateRenderState({depthNear:A.near,depthFar:A.far}),z=A.near,oe=A.far),F.layers.mask=Q.layers.mask|2,Y.layers.mask=Q.layers.mask|4,A.layers.mask=F.layers.mask|Y.layers.mask;const ve=Q.parent,Te=A.cameras;ae(A,ve);for(let Ue=0;Ue<Te.length;Ue++)ae(Te[Ue],ve);Te.length===2?B(A,F,Y):A.projectionMatrix.copy(F.projectionMatrix),re(Q,A,ve)};function re(Q,de,Se){Se===null?Q.matrix.copy(de.matrixWorld):(Q.matrix.copy(Se.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(de.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(de.projectionMatrix),Q.projectionMatrixInverse.copy(de.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Ho*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(x===null&&S===null))return p},this.setFoveation=function(Q){p=Q,x!==null&&(x.fixedFoveation=Q),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=Q)},this.hasDepthSensing=function(){return R.texture!==null},this.getDepthSensingMesh=function(){return R.getMesh(A)};let U=null;function ne(Q,de){if(_=de.getViewerPose(m||f),w=de,_!==null){const Se=_.views;S!==null&&(e.setRenderTargetFramebuffer(I,S.framebuffer),e.setRenderTarget(I));let ve=!1;Se.length!==A.cameras.length&&(A.cameras.length=0,ve=!0);for(let Ue=0;Ue<Se.length;Ue++){const Ze=Se[Ue];let At=null;if(S!==null)At=S.getViewport(Ze);else{const Dt=v.getViewSubImage(x,Ze);At=Dt.viewport,Ue===0&&(e.setRenderTargetTextures(I,Dt.colorTexture,x.ignoreDepthValues?void 0:Dt.depthStencilTexture),e.setRenderTarget(I))}let pt=P[Ue];pt===void 0&&(pt=new Hn,pt.layers.enable(Ue),pt.viewport=new Pt,P[Ue]=pt),pt.matrix.fromArray(Ze.transform.matrix),pt.matrix.decompose(pt.position,pt.quaternion,pt.scale),pt.projectionMatrix.fromArray(Ze.projectionMatrix),pt.projectionMatrixInverse.copy(pt.projectionMatrix).invert(),pt.viewport.set(At.x,At.y,At.width,At.height),Ue===0&&(A.matrix.copy(pt.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),ve===!0&&A.cameras.push(pt)}const Te=a.enabledFeatures;if(Te&&Te.includes("depth-sensing")){const Ue=v.getDepthInformation(Se[0]);Ue&&Ue.isValid&&Ue.texture&&R.init(e,Ue,a.renderState)}}for(let Se=0;Se<L.length;Se++){const ve=C[Se],Te=L[Se];ve!==null&&Te!==void 0&&Te.update(ve,de,m||f)}U&&U(Q,de),de.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:de}),w=null}const Ie=new ag;Ie.setAnimationLoop(ne),this.setAnimationLoop=function(Q){U=Q},this.dispose=function(){}}}const Vr=new xi,AE=new zt;function RE(s,e){function n(y,g){y.matrixAutoUpdate===!0&&y.updateMatrix(),g.value.copy(y.matrix)}function r(y,g){g.color.getRGB(y.fogColor.value,ng(s)),g.isFog?(y.fogNear.value=g.near,y.fogFar.value=g.far):g.isFogExp2&&(y.fogDensity.value=g.density)}function a(y,g,I,L,C){g.isMeshBasicMaterial||g.isMeshLambertMaterial?u(y,g):g.isMeshToonMaterial?(u(y,g),v(y,g)):g.isMeshPhongMaterial?(u(y,g),_(y,g)):g.isMeshStandardMaterial?(u(y,g),x(y,g),g.isMeshPhysicalMaterial&&S(y,g,C)):g.isMeshMatcapMaterial?(u(y,g),w(y,g)):g.isMeshDepthMaterial?u(y,g):g.isMeshDistanceMaterial?(u(y,g),R(y,g)):g.isMeshNormalMaterial?u(y,g):g.isLineBasicMaterial?(f(y,g),g.isLineDashedMaterial&&d(y,g)):g.isPointsMaterial?p(y,g,I,L):g.isSpriteMaterial?m(y,g):g.isShadowMaterial?(y.color.value.copy(g.color),y.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function u(y,g){y.opacity.value=g.opacity,g.color&&y.diffuse.value.copy(g.color),g.emissive&&y.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(y.map.value=g.map,n(g.map,y.mapTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,n(g.alphaMap,y.alphaMapTransform)),g.bumpMap&&(y.bumpMap.value=g.bumpMap,n(g.bumpMap,y.bumpMapTransform),y.bumpScale.value=g.bumpScale,g.side===Un&&(y.bumpScale.value*=-1)),g.normalMap&&(y.normalMap.value=g.normalMap,n(g.normalMap,y.normalMapTransform),y.normalScale.value.copy(g.normalScale),g.side===Un&&y.normalScale.value.negate()),g.displacementMap&&(y.displacementMap.value=g.displacementMap,n(g.displacementMap,y.displacementMapTransform),y.displacementScale.value=g.displacementScale,y.displacementBias.value=g.displacementBias),g.emissiveMap&&(y.emissiveMap.value=g.emissiveMap,n(g.emissiveMap,y.emissiveMapTransform)),g.specularMap&&(y.specularMap.value=g.specularMap,n(g.specularMap,y.specularMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest);const I=e.get(g),L=I.envMap,C=I.envMapRotation;L&&(y.envMap.value=L,Vr.copy(C),Vr.x*=-1,Vr.y*=-1,Vr.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(Vr.y*=-1,Vr.z*=-1),y.envMapRotation.value.setFromMatrix4(AE.makeRotationFromEuler(Vr)),y.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=g.reflectivity,y.ior.value=g.ior,y.refractionRatio.value=g.refractionRatio),g.lightMap&&(y.lightMap.value=g.lightMap,y.lightMapIntensity.value=g.lightMapIntensity,n(g.lightMap,y.lightMapTransform)),g.aoMap&&(y.aoMap.value=g.aoMap,y.aoMapIntensity.value=g.aoMapIntensity,n(g.aoMap,y.aoMapTransform))}function f(y,g){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,g.map&&(y.map.value=g.map,n(g.map,y.mapTransform))}function d(y,g){y.dashSize.value=g.dashSize,y.totalSize.value=g.dashSize+g.gapSize,y.scale.value=g.scale}function p(y,g,I,L){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,y.size.value=g.size*I,y.scale.value=L*.5,g.map&&(y.map.value=g.map,n(g.map,y.uvTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,n(g.alphaMap,y.alphaMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest)}function m(y,g){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,y.rotation.value=g.rotation,g.map&&(y.map.value=g.map,n(g.map,y.mapTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,n(g.alphaMap,y.alphaMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest)}function _(y,g){y.specular.value.copy(g.specular),y.shininess.value=Math.max(g.shininess,1e-4)}function v(y,g){g.gradientMap&&(y.gradientMap.value=g.gradientMap)}function x(y,g){y.metalness.value=g.metalness,g.metalnessMap&&(y.metalnessMap.value=g.metalnessMap,n(g.metalnessMap,y.metalnessMapTransform)),y.roughness.value=g.roughness,g.roughnessMap&&(y.roughnessMap.value=g.roughnessMap,n(g.roughnessMap,y.roughnessMapTransform)),g.envMap&&(y.envMapIntensity.value=g.envMapIntensity)}function S(y,g,I){y.ior.value=g.ior,g.sheen>0&&(y.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),y.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(y.sheenColorMap.value=g.sheenColorMap,n(g.sheenColorMap,y.sheenColorMapTransform)),g.sheenRoughnessMap&&(y.sheenRoughnessMap.value=g.sheenRoughnessMap,n(g.sheenRoughnessMap,y.sheenRoughnessMapTransform))),g.clearcoat>0&&(y.clearcoat.value=g.clearcoat,y.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(y.clearcoatMap.value=g.clearcoatMap,n(g.clearcoatMap,y.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,n(g.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(y.clearcoatNormalMap.value=g.clearcoatNormalMap,n(g.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Un&&y.clearcoatNormalScale.value.negate())),g.dispersion>0&&(y.dispersion.value=g.dispersion),g.iridescence>0&&(y.iridescence.value=g.iridescence,y.iridescenceIOR.value=g.iridescenceIOR,y.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(y.iridescenceMap.value=g.iridescenceMap,n(g.iridescenceMap,y.iridescenceMapTransform)),g.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=g.iridescenceThicknessMap,n(g.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),g.transmission>0&&(y.transmission.value=g.transmission,y.transmissionSamplerMap.value=I.texture,y.transmissionSamplerSize.value.set(I.width,I.height),g.transmissionMap&&(y.transmissionMap.value=g.transmissionMap,n(g.transmissionMap,y.transmissionMapTransform)),y.thickness.value=g.thickness,g.thicknessMap&&(y.thicknessMap.value=g.thicknessMap,n(g.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=g.attenuationDistance,y.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(y.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(y.anisotropyMap.value=g.anisotropyMap,n(g.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=g.specularIntensity,y.specularColor.value.copy(g.specularColor),g.specularColorMap&&(y.specularColorMap.value=g.specularColorMap,n(g.specularColorMap,y.specularColorMapTransform)),g.specularIntensityMap&&(y.specularIntensityMap.value=g.specularIntensityMap,n(g.specularIntensityMap,y.specularIntensityMapTransform))}function w(y,g){g.matcap&&(y.matcap.value=g.matcap)}function R(y,g){const I=e.get(g).light;y.referencePosition.value.setFromMatrixPosition(I.matrixWorld),y.nearDistance.value=I.shadow.camera.near,y.farDistance.value=I.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function CE(s,e,n,r){let a={},u={},f=[];const d=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function p(I,L){const C=L.program;r.uniformBlockBinding(I,C)}function m(I,L){let C=a[I.id];C===void 0&&(w(I),C=_(I),a[I.id]=C,I.addEventListener("dispose",y));const W=L.program;r.updateUBOMapping(I,W);const k=e.render.frame;u[I.id]!==k&&(x(I),u[I.id]=k)}function _(I){const L=v();I.__bindingPointIndex=L;const C=s.createBuffer(),W=I.__size,k=I.usage;return s.bindBuffer(s.UNIFORM_BUFFER,C),s.bufferData(s.UNIFORM_BUFFER,W,k),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,L,C),C}function v(){for(let I=0;I<d;I++)if(f.indexOf(I)===-1)return f.push(I),I;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(I){const L=a[I.id],C=I.uniforms,W=I.__cache;s.bindBuffer(s.UNIFORM_BUFFER,L);for(let k=0,F=C.length;k<F;k++){const Y=Array.isArray(C[k])?C[k]:[C[k]];for(let P=0,A=Y.length;P<A;P++){const z=Y[P];if(S(z,k,P,W)===!0){const oe=z.__offset,te=Array.isArray(z.value)?z.value:[z.value];let ce=0;for(let he=0;he<te.length;he++){const se=te[he],le=R(se);typeof se=="number"||typeof se=="boolean"?(z.__data[0]=se,s.bufferSubData(s.UNIFORM_BUFFER,oe+ce,z.__data)):se.isMatrix3?(z.__data[0]=se.elements[0],z.__data[1]=se.elements[1],z.__data[2]=se.elements[2],z.__data[3]=0,z.__data[4]=se.elements[3],z.__data[5]=se.elements[4],z.__data[6]=se.elements[5],z.__data[7]=0,z.__data[8]=se.elements[6],z.__data[9]=se.elements[7],z.__data[10]=se.elements[8],z.__data[11]=0):(se.toArray(z.__data,ce),ce+=le.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,oe,z.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function S(I,L,C,W){const k=I.value,F=L+"_"+C;if(W[F]===void 0)return typeof k=="number"||typeof k=="boolean"?W[F]=k:W[F]=k.clone(),!0;{const Y=W[F];if(typeof k=="number"||typeof k=="boolean"){if(Y!==k)return W[F]=k,!0}else if(Y.equals(k)===!1)return Y.copy(k),!0}return!1}function w(I){const L=I.uniforms;let C=0;const W=16;for(let F=0,Y=L.length;F<Y;F++){const P=Array.isArray(L[F])?L[F]:[L[F]];for(let A=0,z=P.length;A<z;A++){const oe=P[A],te=Array.isArray(oe.value)?oe.value:[oe.value];for(let ce=0,he=te.length;ce<he;ce++){const se=te[ce],le=R(se),B=C%W,ae=B%le.boundary,re=B+ae;C+=ae,re!==0&&W-re<le.storage&&(C+=W-re),oe.__data=new Float32Array(le.storage/Float32Array.BYTES_PER_ELEMENT),oe.__offset=C,C+=le.storage}}}const k=C%W;return k>0&&(C+=W-k),I.__size=C,I.__cache={},this}function R(I){const L={boundary:0,storage:0};return typeof I=="number"||typeof I=="boolean"?(L.boundary=4,L.storage=4):I.isVector2?(L.boundary=8,L.storage=8):I.isVector3||I.isColor?(L.boundary=16,L.storage=12):I.isVector4?(L.boundary=16,L.storage=16):I.isMatrix3?(L.boundary=48,L.storage=48):I.isMatrix4?(L.boundary=64,L.storage=64):I.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",I),L}function y(I){const L=I.target;L.removeEventListener("dispose",y);const C=f.indexOf(L.__bindingPointIndex);f.splice(C,1),s.deleteBuffer(a[L.id]),delete a[L.id],delete u[L.id]}function g(){for(const I in a)s.deleteBuffer(a[I]);f=[],a={},u={}}return{bind:p,update:m,dispose:g}}class PE{constructor(e={}){const{canvas:n=i0(),context:r=null,depth:a=!0,stencil:u=!1,alpha:f=!1,antialias:d=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:v=!1,reverseDepthBuffer:x=!1}=e;this.isWebGLRenderer=!0;let S;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=r.getContextAttributes().alpha}else S=f;const w=new Uint32Array(4),R=new Int32Array(4);let y=null,g=null;const I=[],L=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Kn,this.toneMapping=xr,this.toneMappingExposure=1;const C=this;let W=!1,k=0,F=0,Y=null,P=-1,A=null;const z=new Pt,oe=new Pt;let te=null;const ce=new Et(0);let he=0,se=n.width,le=n.height,B=1,ae=null,re=null;const U=new Pt(0,0,se,le),ne=new Pt(0,0,se,le);let Ie=!1;const Q=new jf;let de=!1,Se=!1;this.transmissionResolutionScale=1;const ve=new zt,Te=new zt,Ue=new j,Ze=new Pt,At={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let pt=!1;function Dt(){return Y===null?B:1}let O=r;function _n(T,G){return n.getContext(T,G)}try{const T={alpha:!0,depth:a,stencil:u,antialias:d,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:_,failIfMajorPerformanceCaveat:v};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Of}`),n.addEventListener("webglcontextlost",fe,!1),n.addEventListener("webglcontextrestored",be,!1),n.addEventListener("webglcontextcreationerror",Pe,!1),O===null){const G="webgl2";if(O=_n(G,T),O===null)throw _n(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let ht,ut,Ye,wt,Ge,b,E,Z,pe,ge,ue,We,we,Ne,lt,Me,Oe,qe,Je,ke,ct,nt,Tt,V;function Ae(){ht=new kS(O),ht.init(),nt=new yE(O,ht),ut=new LS(O,ht,e,nt),Ye=new vE(O,ht),ut.reverseDepthBuffer&&x&&Ye.buffers.depth.setReversed(!0),wt=new HS(O),Ge=new sE,b=new xE(O,ht,Ye,Ge,ut,nt,wt),E=new IS(C),Z=new OS(C),pe=new q0(O),Tt=new bS(O,pe),ge=new BS(O,pe,wt,Tt),ue=new GS(O,ge,pe,wt),Je=new VS(O,ut,b),Me=new US(Ge),We=new rE(C,E,Z,ht,ut,Tt,Me),we=new RE(C,Ge),Ne=new aE,lt=new hE(ht),qe=new PS(C,E,Z,Ye,ue,S,p),Oe=new gE(C,ue,ut),V=new CE(O,wt,ut,Ye),ke=new DS(O,ht,wt),ct=new zS(O,ht,wt),wt.programs=We.programs,C.capabilities=ut,C.extensions=ht,C.properties=Ge,C.renderLists=Ne,C.shadowMap=Oe,C.state=Ye,C.info=wt}Ae();const ie=new wE(C,O);this.xr=ie,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const T=ht.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=ht.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(T){T!==void 0&&(B=T,this.setSize(se,le,!1))},this.getSize=function(T){return T.set(se,le)},this.setSize=function(T,G,J=!0){if(ie.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}se=T,le=G,n.width=Math.floor(T*B),n.height=Math.floor(G*B),J===!0&&(n.style.width=T+"px",n.style.height=G+"px"),this.setViewport(0,0,T,G)},this.getDrawingBufferSize=function(T){return T.set(se*B,le*B).floor()},this.setDrawingBufferSize=function(T,G,J){se=T,le=G,B=J,n.width=Math.floor(T*J),n.height=Math.floor(G*J),this.setViewport(0,0,T,G)},this.getCurrentViewport=function(T){return T.copy(z)},this.getViewport=function(T){return T.copy(U)},this.setViewport=function(T,G,J,K){T.isVector4?U.set(T.x,T.y,T.z,T.w):U.set(T,G,J,K),Ye.viewport(z.copy(U).multiplyScalar(B).round())},this.getScissor=function(T){return T.copy(ne)},this.setScissor=function(T,G,J,K){T.isVector4?ne.set(T.x,T.y,T.z,T.w):ne.set(T,G,J,K),Ye.scissor(oe.copy(ne).multiplyScalar(B).round())},this.getScissorTest=function(){return Ie},this.setScissorTest=function(T){Ye.setScissorTest(Ie=T)},this.setOpaqueSort=function(T){ae=T},this.setTransparentSort=function(T){re=T},this.getClearColor=function(T){return T.copy(qe.getClearColor())},this.setClearColor=function(){qe.setClearColor.apply(qe,arguments)},this.getClearAlpha=function(){return qe.getClearAlpha()},this.setClearAlpha=function(){qe.setClearAlpha.apply(qe,arguments)},this.clear=function(T=!0,G=!0,J=!0){let K=0;if(T){let X=!1;if(Y!==null){const ye=Y.texture.format;X=ye===Wf||ye===Gf||ye===Vf}if(X){const ye=Y.texture.type,Re=ye===Hi||ye===qr||ye===zo||ye===js||ye===zf||ye===Hf,De=qe.getClearColor(),Be=qe.getClearAlpha(),et=De.r,Qe=De.g,He=De.b;Re?(w[0]=et,w[1]=Qe,w[2]=He,w[3]=Be,O.clearBufferuiv(O.COLOR,0,w)):(R[0]=et,R[1]=Qe,R[2]=He,R[3]=Be,O.clearBufferiv(O.COLOR,0,R))}else K|=O.COLOR_BUFFER_BIT}G&&(K|=O.DEPTH_BUFFER_BIT),J&&(K|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",fe,!1),n.removeEventListener("webglcontextrestored",be,!1),n.removeEventListener("webglcontextcreationerror",Pe,!1),qe.dispose(),Ne.dispose(),lt.dispose(),Ge.dispose(),E.dispose(),Z.dispose(),ue.dispose(),Tt.dispose(),V.dispose(),We.dispose(),ie.dispose(),ie.removeEventListener("sessionstart",Qr),ie.removeEventListener("sessionend",Vi),yi.stop()};function fe(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),W=!0}function be(){console.log("THREE.WebGLRenderer: Context Restored."),W=!1;const T=wt.autoReset,G=Oe.enabled,J=Oe.autoUpdate,K=Oe.needsUpdate,X=Oe.type;Ae(),wt.autoReset=T,Oe.enabled=G,Oe.autoUpdate=J,Oe.needsUpdate=K,Oe.type=X}function Pe(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function it(T){const G=T.target;G.removeEventListener("dispose",it),Ut(G)}function Ut(T){jt(T),Ge.remove(T)}function jt(T){const G=Ge.get(T).programs;G!==void 0&&(G.forEach(function(J){We.releaseProgram(J)}),T.isShaderMaterial&&We.releaseShaderCache(T))}this.renderBufferDirect=function(T,G,J,K,X,ye){G===null&&(G=At);const Re=X.isMesh&&X.matrixWorld.determinant()<0,De=Ko(T,G,J,K,X);Ye.setMaterial(K,Re);let Be=J.index,et=1;if(K.wireframe===!0){if(Be=ge.getWireframeAttribute(J),Be===void 0)return;et=2}const Qe=J.drawRange,He=J.attributes.position;let gt=Qe.start*et,rt=(Qe.start+Qe.count)*et;ye!==null&&(gt=Math.max(gt,ye.start*et),rt=Math.min(rt,(ye.start+ye.count)*et)),Be!==null?(gt=Math.max(gt,0),rt=Math.min(rt,Be.count)):He!=null&&(gt=Math.max(gt,0),rt=Math.min(rt,He.count));const Ht=rt-gt;if(Ht<0||Ht===1/0)return;Tt.setup(X,K,De,J,Be);let Ft,_t=ke;if(Be!==null&&(Ft=pe.get(Be),_t=ct,_t.setIndex(Ft)),X.isMesh)K.wireframe===!0?(Ye.setLineWidth(K.wireframeLinewidth*Dt()),_t.setMode(O.LINES)):_t.setMode(O.TRIANGLES);else if(X.isLine){let je=K.linewidth;je===void 0&&(je=1),Ye.setLineWidth(je*Dt()),X.isLineSegments?_t.setMode(O.LINES):X.isLineLoop?_t.setMode(O.LINE_LOOP):_t.setMode(O.LINE_STRIP)}else X.isPoints?_t.setMode(O.POINTS):X.isSprite&&_t.setMode(O.TRIANGLES);if(X.isBatchedMesh)if(X._multiDrawInstances!==null)_t.renderMultiDrawInstances(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount,X._multiDrawInstances);else if(ht.get("WEBGL_multi_draw"))_t.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{const je=X._multiDrawStarts,Vt=X._multiDrawCounts,mt=X._multiDrawCount,un=Be?pe.get(Be).bytesPerElement:1,Wi=Ge.get(K).currentProgram.getUniforms();for(let xn=0;xn<mt;xn++)Wi.setValue(O,"_gl_DrawID",xn),_t.render(je[xn]/un,Vt[xn])}else if(X.isInstancedMesh)_t.renderInstances(gt,Ht,X.count);else if(J.isInstancedBufferGeometry){const je=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,Vt=Math.min(J.instanceCount,je);_t.renderInstances(gt,Ht,Vt)}else _t.render(gt,Ht)};function vt(T,G,J){T.transparent===!0&&T.side===Oi&&T.forceSinglePass===!1?(T.side=Un,T.needsUpdate=!0,Jr(T,G,J),T.side=yr,T.needsUpdate=!0,Jr(T,G,J),T.side=Oi):Jr(T,G,J)}this.compile=function(T,G,J=null){J===null&&(J=T),g=lt.get(J),g.init(G),L.push(g),J.traverseVisible(function(X){X.isLight&&X.layers.test(G.layers)&&(g.pushLight(X),X.castShadow&&g.pushShadow(X))}),T!==J&&T.traverseVisible(function(X){X.isLight&&X.layers.test(G.layers)&&(g.pushLight(X),X.castShadow&&g.pushShadow(X))}),g.setupLights();const K=new Set;return T.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;const ye=X.material;if(ye)if(Array.isArray(ye))for(let Re=0;Re<ye.length;Re++){const De=ye[Re];vt(De,J,X),K.add(De)}else vt(ye,J,X),K.add(ye)}),L.pop(),g=null,K},this.compileAsync=function(T,G,J=null){const K=this.compile(T,G,J);return new Promise(X=>{function ye(){if(K.forEach(function(Re){Ge.get(Re).currentProgram.isReady()&&K.delete(Re)}),K.size===0){X(T);return}setTimeout(ye,10)}ht.get("KHR_parallel_shader_compile")!==null?ye():setTimeout(ye,10)})};let wn=null;function vn(T){wn&&wn(T)}function Qr(){yi.stop()}function Vi(){yi.start()}const yi=new ag;yi.setAnimationLoop(vn),typeof self<"u"&&yi.setContext(self),this.setAnimationLoop=function(T){wn=T,ie.setAnimationLoop(T),T===null?yi.stop():yi.start()},ie.addEventListener("sessionstart",Qr),ie.addEventListener("sessionend",Vi),this.render=function(T,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(W===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),ie.enabled===!0&&ie.isPresenting===!0&&(ie.cameraAutoUpdate===!0&&ie.updateCamera(G),G=ie.getCamera()),T.isScene===!0&&T.onBeforeRender(C,T,G,Y),g=lt.get(T,L.length),g.init(G),L.push(g),Te.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),Q.setFromProjectionMatrix(Te),Se=this.localClippingEnabled,de=Me.init(this.clippingPlanes,Se),y=Ne.get(T,I.length),y.init(),I.push(y),ie.enabled===!0&&ie.isPresenting===!0){const ye=C.xr.getDepthSensingMesh();ye!==null&&Si(ye,G,-1/0,C.sortObjects)}Si(T,G,0,C.sortObjects),y.finish(),C.sortObjects===!0&&y.sort(ae,re),pt=ie.enabled===!1||ie.isPresenting===!1||ie.hasDepthSensing()===!1,pt&&qe.addToRenderList(y,T),this.info.render.frame++,de===!0&&Me.beginShadows();const J=g.state.shadowsArray;Oe.render(J,T,G),de===!0&&Me.endShadows(),this.info.autoReset===!0&&this.info.reset();const K=y.opaque,X=y.transmissive;if(g.setupLights(),G.isArrayCamera){const ye=G.cameras;if(X.length>0)for(let Re=0,De=ye.length;Re<De;Re++){const Be=ye[Re];Tr(K,X,T,Be)}pt&&qe.render(T);for(let Re=0,De=ye.length;Re<De;Re++){const Be=ye[Re];Er(y,T,Be,Be.viewport)}}else X.length>0&&Tr(K,X,T,G),pt&&qe.render(T),Er(y,T,G);Y!==null&&F===0&&(b.updateMultisampleRenderTarget(Y),b.updateRenderTargetMipmap(Y)),T.isScene===!0&&T.onAfterRender(C,T,G),Tt.resetDefaultState(),P=-1,A=null,L.pop(),L.length>0?(g=L[L.length-1],de===!0&&Me.setGlobalState(C.clippingPlanes,g.state.camera)):g=null,I.pop(),I.length>0?y=I[I.length-1]:y=null};function Si(T,G,J,K){if(T.visible===!1)return;if(T.layers.test(G.layers)){if(T.isGroup)J=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(G);else if(T.isLight)g.pushLight(T),T.castShadow&&g.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Q.intersectsSprite(T)){K&&Ze.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Te);const Re=ue.update(T),De=T.material;De.visible&&y.push(T,Re,De,J,Ze.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Q.intersectsObject(T))){const Re=ue.update(T),De=T.material;if(K&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Ze.copy(T.boundingSphere.center)):(Re.boundingSphere===null&&Re.computeBoundingSphere(),Ze.copy(Re.boundingSphere.center)),Ze.applyMatrix4(T.matrixWorld).applyMatrix4(Te)),Array.isArray(De)){const Be=Re.groups;for(let et=0,Qe=Be.length;et<Qe;et++){const He=Be[et],gt=De[He.materialIndex];gt&&gt.visible&&y.push(T,Re,gt,J,Ze.z,He)}}else De.visible&&y.push(T,Re,De,J,Ze.z,null)}}const ye=T.children;for(let Re=0,De=ye.length;Re<De;Re++)Si(ye[Re],G,J,K)}function Er(T,G,J,K){const X=T.opaque,ye=T.transmissive,Re=T.transparent;g.setupLightsView(J),de===!0&&Me.setGlobalState(C.clippingPlanes,J),K&&Ye.viewport(z.copy(K)),X.length>0&&Gi(X,G,J),ye.length>0&&Gi(ye,G,J),Re.length>0&&Gi(Re,G,J),Ye.buffers.depth.setTest(!0),Ye.buffers.depth.setMask(!0),Ye.buffers.color.setMask(!0),Ye.setPolygonOffset(!1)}function Tr(T,G,J,K){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[K.id]===void 0&&(g.state.transmissionRenderTarget[K.id]=new Kr(1,1,{generateMipmaps:!0,type:ht.has("EXT_color_buffer_half_float")||ht.has("EXT_color_buffer_float")?Go:Hi,minFilter:jr,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Mt.workingColorSpace}));const ye=g.state.transmissionRenderTarget[K.id],Re=K.viewport||z;ye.setSize(Re.z*C.transmissionResolutionScale,Re.w*C.transmissionResolutionScale);const De=C.getRenderTarget();C.setRenderTarget(ye),C.getClearColor(ce),he=C.getClearAlpha(),he<1&&C.setClearColor(16777215,.5),C.clear(),pt&&qe.render(J);const Be=C.toneMapping;C.toneMapping=xr;const et=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),g.setupLightsView(K),de===!0&&Me.setGlobalState(C.clippingPlanes,K),Gi(T,J,K),b.updateMultisampleRenderTarget(ye),b.updateRenderTargetMipmap(ye),ht.has("WEBGL_multisampled_render_to_texture")===!1){let Qe=!1;for(let He=0,gt=G.length;He<gt;He++){const rt=G[He],Ht=rt.object,Ft=rt.geometry,_t=rt.material,je=rt.group;if(_t.side===Oi&&Ht.layers.test(K.layers)){const Vt=_t.side;_t.side=Un,_t.needsUpdate=!0,jo(Ht,J,K,Ft,_t,je),_t.side=Vt,_t.needsUpdate=!0,Qe=!0}}Qe===!0&&(b.updateMultisampleRenderTarget(ye),b.updateRenderTargetMipmap(ye))}C.setRenderTarget(De),C.setClearColor(ce,he),et!==void 0&&(K.viewport=et),C.toneMapping=Be}function Gi(T,G,J){const K=G.isScene===!0?G.overrideMaterial:null;for(let X=0,ye=T.length;X<ye;X++){const Re=T[X],De=Re.object,Be=Re.geometry,et=K===null?Re.material:K,Qe=Re.group;De.layers.test(J.layers)&&jo(De,G,J,Be,et,Qe)}}function jo(T,G,J,K,X,ye){T.onBeforeRender(C,G,J,K,X,ye),T.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),X.onBeforeRender(C,G,J,K,T,ye),X.transparent===!0&&X.side===Oi&&X.forceSinglePass===!1?(X.side=Un,X.needsUpdate=!0,C.renderBufferDirect(J,G,K,X,T,ye),X.side=yr,X.needsUpdate=!0,C.renderBufferDirect(J,G,K,X,T,ye),X.side=Oi):C.renderBufferDirect(J,G,K,X,T,ye),T.onAfterRender(C,G,J,K,X,ye)}function Jr(T,G,J){G.isScene!==!0&&(G=At);const K=Ge.get(T),X=g.state.lights,ye=g.state.shadowsArray,Re=X.state.version,De=We.getParameters(T,X.state,ye,G,J),Be=We.getProgramCacheKey(De);let et=K.programs;K.environment=T.isMeshStandardMaterial?G.environment:null,K.fog=G.fog,K.envMap=(T.isMeshStandardMaterial?Z:E).get(T.envMap||K.environment),K.envMapRotation=K.environment!==null&&T.envMap===null?G.environmentRotation:T.envMapRotation,et===void 0&&(T.addEventListener("dispose",it),et=new Map,K.programs=et);let Qe=et.get(Be);if(Qe!==void 0){if(K.currentProgram===Qe&&K.lightsStateVersion===Re)return li(T,De),Qe}else De.uniforms=We.getUniforms(T),T.onBeforeCompile(De,C),Qe=We.acquireProgram(De,Be),et.set(Be,Qe),K.uniforms=De.uniforms;const He=K.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(He.clippingPlanes=Me.uniform),li(T,De),K.needsLights=Nl(T),K.lightsStateVersion=Re,K.needsLights&&(He.ambientLightColor.value=X.state.ambient,He.lightProbe.value=X.state.probe,He.directionalLights.value=X.state.directional,He.directionalLightShadows.value=X.state.directionalShadow,He.spotLights.value=X.state.spot,He.spotLightShadows.value=X.state.spotShadow,He.rectAreaLights.value=X.state.rectArea,He.ltc_1.value=X.state.rectAreaLTC1,He.ltc_2.value=X.state.rectAreaLTC2,He.pointLights.value=X.state.point,He.pointLightShadows.value=X.state.pointShadow,He.hemisphereLights.value=X.state.hemi,He.directionalShadowMap.value=X.state.directionalShadowMap,He.directionalShadowMatrix.value=X.state.directionalShadowMatrix,He.spotShadowMap.value=X.state.spotShadowMap,He.spotLightMatrix.value=X.state.spotLightMatrix,He.spotLightMap.value=X.state.spotLightMap,He.pointShadowMap.value=X.state.pointShadowMap,He.pointShadowMatrix.value=X.state.pointShadowMatrix),K.currentProgram=Qe,K.uniformsList=null,Qe}function qo(T){if(T.uniformsList===null){const G=T.currentProgram.getUniforms();T.uniformsList=Pl.seqWithValue(G.seq,T.uniforms)}return T.uniformsList}function li(T,G){const J=Ge.get(T);J.outputColorSpace=G.outputColorSpace,J.batching=G.batching,J.batchingColor=G.batchingColor,J.instancing=G.instancing,J.instancingColor=G.instancingColor,J.instancingMorph=G.instancingMorph,J.skinning=G.skinning,J.morphTargets=G.morphTargets,J.morphNormals=G.morphNormals,J.morphColors=G.morphColors,J.morphTargetsCount=G.morphTargetsCount,J.numClippingPlanes=G.numClippingPlanes,J.numIntersection=G.numClipIntersection,J.vertexAlphas=G.vertexAlphas,J.vertexTangents=G.vertexTangents,J.toneMapping=G.toneMapping}function Ko(T,G,J,K,X){G.isScene!==!0&&(G=At),b.resetTextureUnits();const ye=G.fog,Re=K.isMeshStandardMaterial?G.environment:null,De=Y===null?C.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:Ks,Be=(K.isMeshStandardMaterial?Z:E).get(K.envMap||Re),et=K.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,Qe=!!J.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),He=!!J.morphAttributes.position,gt=!!J.morphAttributes.normal,rt=!!J.morphAttributes.color;let Ht=xr;K.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(Ht=C.toneMapping);const Ft=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,_t=Ft!==void 0?Ft.length:0,je=Ge.get(K),Vt=g.state.lights;if(de===!0&&(Se===!0||T!==A)){const on=T===A&&K.id===P;Me.setState(K,T,on)}let mt=!1;K.version===je.__version?(je.needsLights&&je.lightsStateVersion!==Vt.state.version||je.outputColorSpace!==De||X.isBatchedMesh&&je.batching===!1||!X.isBatchedMesh&&je.batching===!0||X.isBatchedMesh&&je.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&je.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&je.instancing===!1||!X.isInstancedMesh&&je.instancing===!0||X.isSkinnedMesh&&je.skinning===!1||!X.isSkinnedMesh&&je.skinning===!0||X.isInstancedMesh&&je.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&je.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&je.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&je.instancingMorph===!1&&X.morphTexture!==null||je.envMap!==Be||K.fog===!0&&je.fog!==ye||je.numClippingPlanes!==void 0&&(je.numClippingPlanes!==Me.numPlanes||je.numIntersection!==Me.numIntersection)||je.vertexAlphas!==et||je.vertexTangents!==Qe||je.morphTargets!==He||je.morphNormals!==gt||je.morphColors!==rt||je.toneMapping!==Ht||je.morphTargetsCount!==_t)&&(mt=!0):(mt=!0,je.__version=K.version);let un=je.currentProgram;mt===!0&&(un=Jr(K,G,X));let Wi=!1,xn=!1,Mi=!1;const bt=un.getUniforms(),cn=je.uniforms;if(Ye.useProgram(un.program)&&(Wi=!0,xn=!0,Mi=!0),K.id!==P&&(P=K.id,xn=!0),Wi||A!==T){Ye.buffers.depth.getReversed()?(ve.copy(T.projectionMatrix),s0(ve),o0(ve),bt.setValue(O,"projectionMatrix",ve)):bt.setValue(O,"projectionMatrix",T.projectionMatrix),bt.setValue(O,"viewMatrix",T.matrixWorldInverse);const en=bt.map.cameraPosition;en!==void 0&&en.setValue(O,Ue.setFromMatrixPosition(T.matrixWorld)),ut.logarithmicDepthBuffer&&bt.setValue(O,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&bt.setValue(O,"isOrthographic",T.isOrthographicCamera===!0),A!==T&&(A=T,xn=!0,Mi=!0)}if(X.isSkinnedMesh){bt.setOptional(O,X,"bindMatrix"),bt.setOptional(O,X,"bindMatrixInverse");const on=X.skeleton;on&&(on.boneTexture===null&&on.computeBoneTexture(),bt.setValue(O,"boneTexture",on.boneTexture,b))}X.isBatchedMesh&&(bt.setOptional(O,X,"batchingTexture"),bt.setValue(O,"batchingTexture",X._matricesTexture,b),bt.setOptional(O,X,"batchingIdTexture"),bt.setValue(O,"batchingIdTexture",X._indirectTexture,b),bt.setOptional(O,X,"batchingColorTexture"),X._colorsTexture!==null&&bt.setValue(O,"batchingColorTexture",X._colorsTexture,b));const Jt=J.morphAttributes;if((Jt.position!==void 0||Jt.normal!==void 0||Jt.color!==void 0)&&Je.update(X,J,un),(xn||je.receiveShadow!==X.receiveShadow)&&(je.receiveShadow=X.receiveShadow,bt.setValue(O,"receiveShadow",X.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(cn.envMap.value=Be,cn.flipEnvMap.value=Be.isCubeTexture&&Be.isRenderTargetTexture===!1?-1:1),K.isMeshStandardMaterial&&K.envMap===null&&G.environment!==null&&(cn.envMapIntensity.value=G.environmentIntensity),xn&&(bt.setValue(O,"toneMappingExposure",C.toneMappingExposure),je.needsLights&&$o(cn,Mi),ye&&K.fog===!0&&we.refreshFogUniforms(cn,ye),we.refreshMaterialUniforms(cn,K,B,le,g.state.transmissionRenderTarget[T.id]),Pl.upload(O,qo(je),cn,b)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(Pl.upload(O,qo(je),cn,b),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&bt.setValue(O,"center",X.center),bt.setValue(O,"modelViewMatrix",X.modelViewMatrix),bt.setValue(O,"normalMatrix",X.normalMatrix),bt.setValue(O,"modelMatrix",X.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){const on=K.uniformsGroups;for(let en=0,xt=on.length;en<xt;en++){const ui=on[en];V.update(ui,un),V.bind(ui,un)}}return un}function $o(T,G){T.ambientLightColor.needsUpdate=G,T.lightProbe.needsUpdate=G,T.directionalLights.needsUpdate=G,T.directionalLightShadows.needsUpdate=G,T.pointLights.needsUpdate=G,T.pointLightShadows.needsUpdate=G,T.spotLights.needsUpdate=G,T.spotLightShadows.needsUpdate=G,T.rectAreaLights.needsUpdate=G,T.hemisphereLights.needsUpdate=G}function Nl(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return Y},this.setRenderTargetTextures=function(T,G,J){Ge.get(T.texture).__webglTexture=G,Ge.get(T.depthTexture).__webglTexture=J;const K=Ge.get(T);K.__hasExternalTextures=!0,K.__autoAllocateDepthBuffer=J===void 0,K.__autoAllocateDepthBuffer||ht.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),K.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,G){const J=Ge.get(T);J.__webglFramebuffer=G,J.__useDefaultFramebuffer=G===void 0};const Zo=O.createFramebuffer();this.setRenderTarget=function(T,G=0,J=0){Y=T,k=G,F=J;let K=!0,X=null,ye=!1,Re=!1;if(T){const Be=Ge.get(T);if(Be.__useDefaultFramebuffer!==void 0)Ye.bindFramebuffer(O.FRAMEBUFFER,null),K=!1;else if(Be.__webglFramebuffer===void 0)b.setupRenderTarget(T);else if(Be.__hasExternalTextures)b.rebindTextures(T,Ge.get(T.texture).__webglTexture,Ge.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const He=T.depthTexture;if(Be.__boundDepthTexture!==He){if(He!==null&&Ge.has(He)&&(T.width!==He.image.width||T.height!==He.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");b.setupDepthRenderbuffer(T)}}const et=T.texture;(et.isData3DTexture||et.isDataArrayTexture||et.isCompressedArrayTexture)&&(Re=!0);const Qe=Ge.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Qe[G])?X=Qe[G][J]:X=Qe[G],ye=!0):T.samples>0&&b.useMultisampledRTT(T)===!1?X=Ge.get(T).__webglMultisampledFramebuffer:Array.isArray(Qe)?X=Qe[J]:X=Qe,z.copy(T.viewport),oe.copy(T.scissor),te=T.scissorTest}else z.copy(U).multiplyScalar(B).floor(),oe.copy(ne).multiplyScalar(B).floor(),te=Ie;if(J!==0&&(X=Zo),Ye.bindFramebuffer(O.FRAMEBUFFER,X)&&K&&Ye.drawBuffers(T,X),Ye.viewport(z),Ye.scissor(oe),Ye.setScissorTest(te),ye){const Be=Ge.get(T.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+G,Be.__webglTexture,J)}else if(Re){const Be=Ge.get(T.texture),et=G;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,Be.__webglTexture,J,et)}else if(T!==null&&J!==0){const Be=Ge.get(T.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Be.__webglTexture,J)}P=-1},this.readRenderTargetPixels=function(T,G,J,K,X,ye,Re){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let De=Ge.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Re!==void 0&&(De=De[Re]),De){Ye.bindFramebuffer(O.FRAMEBUFFER,De);try{const Be=T.texture,et=Be.format,Qe=Be.type;if(!ut.textureFormatReadable(et)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ut.textureTypeReadable(Qe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=T.width-K&&J>=0&&J<=T.height-X&&O.readPixels(G,J,K,X,nt.convert(et),nt.convert(Qe),ye)}finally{const Be=Y!==null?Ge.get(Y).__webglFramebuffer:null;Ye.bindFramebuffer(O.FRAMEBUFFER,Be)}}},this.readRenderTargetPixelsAsync=async function(T,G,J,K,X,ye,Re){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let De=Ge.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Re!==void 0&&(De=De[Re]),De){const Be=T.texture,et=Be.format,Qe=Be.type;if(!ut.textureFormatReadable(et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ut.textureTypeReadable(Qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(G>=0&&G<=T.width-K&&J>=0&&J<=T.height-X){Ye.bindFramebuffer(O.FRAMEBUFFER,De);const He=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,He),O.bufferData(O.PIXEL_PACK_BUFFER,ye.byteLength,O.STREAM_READ),O.readPixels(G,J,K,X,nt.convert(et),nt.convert(Qe),0);const gt=Y!==null?Ge.get(Y).__webglFramebuffer:null;Ye.bindFramebuffer(O.FRAMEBUFFER,gt);const rt=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await r0(O,rt,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,He),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,ye),O.deleteBuffer(He),O.deleteSync(rt),ye}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,G=null,J=0){T.isTexture!==!0&&(Os("WebGLRenderer: copyFramebufferToTexture function signature has changed."),G=arguments[0]||null,T=arguments[1]);const K=Math.pow(2,-J),X=Math.floor(T.image.width*K),ye=Math.floor(T.image.height*K),Re=G!==null?G.x:0,De=G!==null?G.y:0;b.setTexture2D(T,0),O.copyTexSubImage2D(O.TEXTURE_2D,J,0,0,Re,De,X,ye),Ye.unbindTexture()};const Qo=O.createFramebuffer(),Jo=O.createFramebuffer();this.copyTextureToTexture=function(T,G,J=null,K=null,X=0,ye=null){T.isTexture!==!0&&(Os("WebGLRenderer: copyTextureToTexture function signature has changed."),K=arguments[0]||null,T=arguments[1],G=arguments[2],ye=arguments[3]||0,J=null),ye===null&&(X!==0?(Os("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ye=X,X=0):ye=0);let Re,De,Be,et,Qe,He,gt,rt,Ht;const Ft=T.isCompressedTexture?T.mipmaps[ye]:T.image;if(J!==null)Re=J.max.x-J.min.x,De=J.max.y-J.min.y,Be=J.isBox3?J.max.z-J.min.z:1,et=J.min.x,Qe=J.min.y,He=J.isBox3?J.min.z:0;else{const Jt=Math.pow(2,-X);Re=Math.floor(Ft.width*Jt),De=Math.floor(Ft.height*Jt),T.isDataArrayTexture?Be=Ft.depth:T.isData3DTexture?Be=Math.floor(Ft.depth*Jt):Be=1,et=0,Qe=0,He=0}K!==null?(gt=K.x,rt=K.y,Ht=K.z):(gt=0,rt=0,Ht=0);const _t=nt.convert(G.format),je=nt.convert(G.type);let Vt;G.isData3DTexture?(b.setTexture3D(G,0),Vt=O.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(b.setTexture2DArray(G,0),Vt=O.TEXTURE_2D_ARRAY):(b.setTexture2D(G,0),Vt=O.TEXTURE_2D),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,G.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,G.unpackAlignment);const mt=O.getParameter(O.UNPACK_ROW_LENGTH),un=O.getParameter(O.UNPACK_IMAGE_HEIGHT),Wi=O.getParameter(O.UNPACK_SKIP_PIXELS),xn=O.getParameter(O.UNPACK_SKIP_ROWS),Mi=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,Ft.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Ft.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,et),O.pixelStorei(O.UNPACK_SKIP_ROWS,Qe),O.pixelStorei(O.UNPACK_SKIP_IMAGES,He);const bt=T.isDataArrayTexture||T.isData3DTexture,cn=G.isDataArrayTexture||G.isData3DTexture;if(T.isDepthTexture){const Jt=Ge.get(T),on=Ge.get(G),en=Ge.get(Jt.__renderTarget),xt=Ge.get(on.__renderTarget);Ye.bindFramebuffer(O.READ_FRAMEBUFFER,en.__webglFramebuffer),Ye.bindFramebuffer(O.DRAW_FRAMEBUFFER,xt.__webglFramebuffer);for(let ui=0;ui<Be;ui++)bt&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ge.get(T).__webglTexture,X,He+ui),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ge.get(G).__webglTexture,ye,Ht+ui)),O.blitFramebuffer(et,Qe,Re,De,gt,rt,Re,De,O.DEPTH_BUFFER_BIT,O.NEAREST);Ye.bindFramebuffer(O.READ_FRAMEBUFFER,null),Ye.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(X!==0||T.isRenderTargetTexture||Ge.has(T)){const Jt=Ge.get(T),on=Ge.get(G);Ye.bindFramebuffer(O.READ_FRAMEBUFFER,Qo),Ye.bindFramebuffer(O.DRAW_FRAMEBUFFER,Jo);for(let en=0;en<Be;en++)bt?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Jt.__webglTexture,X,He+en):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Jt.__webglTexture,X),cn?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,on.__webglTexture,ye,Ht+en):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,on.__webglTexture,ye),X!==0?O.blitFramebuffer(et,Qe,Re,De,gt,rt,Re,De,O.COLOR_BUFFER_BIT,O.NEAREST):cn?O.copyTexSubImage3D(Vt,ye,gt,rt,Ht+en,et,Qe,Re,De):O.copyTexSubImage2D(Vt,ye,gt,rt,et,Qe,Re,De);Ye.bindFramebuffer(O.READ_FRAMEBUFFER,null),Ye.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else cn?T.isDataTexture||T.isData3DTexture?O.texSubImage3D(Vt,ye,gt,rt,Ht,Re,De,Be,_t,je,Ft.data):G.isCompressedArrayTexture?O.compressedTexSubImage3D(Vt,ye,gt,rt,Ht,Re,De,Be,_t,Ft.data):O.texSubImage3D(Vt,ye,gt,rt,Ht,Re,De,Be,_t,je,Ft):T.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,ye,gt,rt,Re,De,_t,je,Ft.data):T.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,ye,gt,rt,Ft.width,Ft.height,_t,Ft.data):O.texSubImage2D(O.TEXTURE_2D,ye,gt,rt,Re,De,_t,je,Ft);O.pixelStorei(O.UNPACK_ROW_LENGTH,mt),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,un),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Wi),O.pixelStorei(O.UNPACK_SKIP_ROWS,xn),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Mi),ye===0&&G.generateMipmaps&&O.generateMipmap(Vt),Ye.unbindTexture()},this.copyTextureToTexture3D=function(T,G,J=null,K=null,X=0){return T.isTexture!==!0&&(Os("WebGLRenderer: copyTextureToTexture3D function signature has changed."),J=arguments[0]||null,K=arguments[1]||null,T=arguments[2],G=arguments[3],X=arguments[4]||0),Os('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,G,J,K,X)},this.initRenderTarget=function(T){Ge.get(T).__webglFramebuffer===void 0&&b.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?b.setTextureCube(T,0):T.isData3DTexture?b.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?b.setTexture2DArray(T,0):b.setTexture2D(T,0),Ye.unbindTexture()},this.resetState=function(){k=0,F=0,Y=null,Ye.reset(),Tt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Bi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorspace=Mt._getDrawingBufferColorSpace(e),n.unpackColorSpace=Mt._getUnpackColorSpace()}}const bm={type:"change"},Zf={type:"start"},dg={type:"end"},El=new $m,Dm=new gr,bE=Math.cos(70*n0.DEG2RAD),$t=new j,Ln=2*Math.PI,Ct={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},jc=1e-6;class DE extends Y0{constructor(e,n=null){super(e,n),this.state=Ct.NONE,this.enabled=!0,this.target=new j,this.cursor=new j,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:zs.ROTATE,MIDDLE:zs.DOLLY,RIGHT:zs.PAN},this.touches={ONE:ks.ROTATE,TWO:ks.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new j,this._lastQuaternion=new $r,this._lastTargetPosition=new j,this._quat=new $r().setFromUnitVectors(e.up,new j(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new rm,this._sphericalDelta=new rm,this._scale=1,this._panOffset=new j,this._rotateStart=new st,this._rotateEnd=new st,this._rotateDelta=new st,this._panStart=new st,this._panEnd=new st,this._panDelta=new st,this._dollyStart=new st,this._dollyEnd=new st,this._dollyDelta=new st,this._dollyDirection=new j,this._mouse=new st,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=UE.bind(this),this._onPointerDown=LE.bind(this),this._onPointerUp=IE.bind(this),this._onContextMenu=HE.bind(this),this._onMouseWheel=OE.bind(this),this._onKeyDown=kE.bind(this),this._onTouchStart=BE.bind(this),this._onTouchMove=zE.bind(this),this._onMouseDown=NE.bind(this),this._onMouseMove=FE.bind(this),this._interceptControlDown=VE.bind(this),this._interceptControlUp=GE.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(bm),this.update(),this.state=Ct.NONE}update(e=null){const n=this.object.position;$t.copy(n).sub(this.target),$t.applyQuaternion(this._quat),this._spherical.setFromVector3($t),this.autoRotate&&this.state===Ct.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let r=this.minAzimuthAngle,a=this.maxAzimuthAngle;isFinite(r)&&isFinite(a)&&(r<-Math.PI?r+=Ln:r>Math.PI&&(r-=Ln),a<-Math.PI?a+=Ln:a>Math.PI&&(a-=Ln),r<=a?this._spherical.theta=Math.max(r,Math.min(a,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(r+a)/2?Math.max(r,this._spherical.theta):Math.min(a,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let u=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const f=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),u=f!=this._spherical.radius}if($t.setFromSpherical(this._spherical),$t.applyQuaternion(this._quatInverse),n.copy(this.target).add($t),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let f=null;if(this.object.isPerspectiveCamera){const d=$t.length();f=this._clampDistance(d*this._scale);const p=d-f;this.object.position.addScaledVector(this._dollyDirection,p),this.object.updateMatrixWorld(),u=!!p}else if(this.object.isOrthographicCamera){const d=new j(this._mouse.x,this._mouse.y,0);d.unproject(this.object);const p=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),u=p!==this.object.zoom;const m=new j(this._mouse.x,this._mouse.y,0);m.unproject(this.object),this.object.position.sub(m).add(d),this.object.updateMatrixWorld(),f=$t.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;f!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(f).add(this.object.position):(El.origin.copy(this.object.position),El.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(El.direction))<bE?this.object.lookAt(this.target):(Dm.setFromNormalAndCoplanarPoint(this.object.up,this.target),El.intersectPlane(Dm,this.target))))}else if(this.object.isOrthographicCamera){const f=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),f!==this.object.zoom&&(this.object.updateProjectionMatrix(),u=!0)}return this._scale=1,this._performCursorZoom=!1,u||this._lastPosition.distanceToSquared(this.object.position)>jc||8*(1-this._lastQuaternion.dot(this.object.quaternion))>jc||this._lastTargetPosition.distanceToSquared(this.target)>jc?(this.dispatchEvent(bm),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Ln/60*this.autoRotateSpeed*e:Ln/60/60*this.autoRotateSpeed}_getZoomScale(e){const n=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*n)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,n){$t.setFromMatrixColumn(n,0),$t.multiplyScalar(-e),this._panOffset.add($t)}_panUp(e,n){this.screenSpacePanning===!0?$t.setFromMatrixColumn(n,1):($t.setFromMatrixColumn(n,0),$t.crossVectors(this.object.up,$t)),$t.multiplyScalar(e),this._panOffset.add($t)}_pan(e,n){const r=this.domElement;if(this.object.isPerspectiveCamera){const a=this.object.position;$t.copy(a).sub(this.target);let u=$t.length();u*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*u/r.clientHeight,this.object.matrix),this._panUp(2*n*u/r.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/r.clientWidth,this.object.matrix),this._panUp(n*(this.object.top-this.object.bottom)/this.object.zoom/r.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,n){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const r=this.domElement.getBoundingClientRect(),a=e-r.left,u=n-r.top,f=r.width,d=r.height;this._mouse.x=a/f*2-1,this._mouse.y=-(u/d)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(Ln*this._rotateDelta.x/n.clientHeight),this._rotateUp(Ln*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let n=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Ln*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),n=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Ln*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),n=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Ln*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),n=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Ln*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),n=!0;break}n&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),r=.5*(e.pageX+n.x),a=.5*(e.pageY+n.y);this._rotateStart.set(r,a)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),r=.5*(e.pageX+n.x),a=.5*(e.pageY+n.y);this._panStart.set(r,a)}}_handleTouchStartDolly(e){const n=this._getSecondPointerPosition(e),r=e.pageX-n.x,a=e.pageY-n.y,u=Math.sqrt(r*r+a*a);this._dollyStart.set(0,u)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const r=this._getSecondPointerPosition(e),a=.5*(e.pageX+r.x),u=.5*(e.pageY+r.y);this._rotateEnd.set(a,u)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(Ln*this._rotateDelta.x/n.clientHeight),this._rotateUp(Ln*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),r=.5*(e.pageX+n.x),a=.5*(e.pageY+n.y);this._panEnd.set(r,a)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const n=this._getSecondPointerPosition(e),r=e.pageX-n.x,a=e.pageY-n.y,u=Math.sqrt(r*r+a*a);this._dollyEnd.set(0,u),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const f=(e.pageX+n.x)*.5,d=(e.pageY+n.y)*.5;this._updateZoomParameters(f,d)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId){this._pointers.splice(n,1);return}}_isTrackingPointer(e){for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId)return!0;return!1}_trackPointer(e){let n=this._pointerPositions[e.pointerId];n===void 0&&(n=new st,this._pointerPositions[e.pointerId]=n),n.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const n=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[n]}_customWheelEvent(e){const n=e.deltaMode,r={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(n){case 1:r.deltaY*=16;break;case 2:r.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(r.deltaY*=10),r}}function LE(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s)))}function UE(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function IE(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(dg),this.state=Ct.NONE;break;case 1:const e=this._pointers[0],n=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:n.x,pageY:n.y});break}}function NE(s){let e;switch(s.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case zs.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=Ct.DOLLY;break;case zs.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=Ct.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=Ct.ROTATE}break;case zs.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=Ct.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=Ct.PAN}break;default:this.state=Ct.NONE}this.state!==Ct.NONE&&this.dispatchEvent(Zf)}function FE(s){switch(this.state){case Ct.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case Ct.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case Ct.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function OE(s){this.enabled===!1||this.enableZoom===!1||this.state!==Ct.NONE||(s.preventDefault(),this.dispatchEvent(Zf),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(dg))}function kE(s){this.enabled!==!1&&this._handleKeyDown(s)}function BE(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case ks.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=Ct.TOUCH_ROTATE;break;case ks.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=Ct.TOUCH_PAN;break;default:this.state=Ct.NONE}break;case 2:switch(this.touches.TWO){case ks.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=Ct.TOUCH_DOLLY_PAN;break;case ks.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=Ct.TOUCH_DOLLY_ROTATE;break;default:this.state=Ct.NONE}break;default:this.state=Ct.NONE}this.state!==Ct.NONE&&this.dispatchEvent(Zf)}function zE(s){switch(this._trackPointer(s),this.state){case Ct.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case Ct.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case Ct.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case Ct.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=Ct.NONE}}function HE(s){this.enabled!==!1&&s.preventDefault()}function VE(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function GE(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function WE(){return Lm.useEffect(()=>{const s=new X0,e=new k0,n=document.getElementById("solarDiv"),r=new P0,a={sun:e.load("2k_sun.jpg"),mercury:e.load("2k_mercury.jpg"),venus:e.load("2k_venus_surface.jpg"),earth:e.load("2k_earth_daymap.jpg"),mars:e.load("2k_mars.jpg"),stars:e.load("2k_stars_milky_way.jpg")};r.background=a.stars;const u={sun:5,mercury:.4,venus:.9,earth:1,mars:.5},f=y=>new L0({map:y}),d=new G0("0x404040");r.add(d);const p={};for(const[y,g]of Object.entries(u))p[y]=new gi(new qf(g,32,32),f(a[y])),r.add(p[y]);const m={mercury:7,venus:10,earth:14,mars:18};for(const[y,g]of Object.entries(m))p[y].position.x=g;const _=new H0(16777215,2,100);r.add(_);const v=new Hn(75,window.innerWidth/window.innerHeight,.1,200);v.position.set(0,10,50);const x=new PE({antialias:!0});n.appendChild(x.domElement),x.setSize(window.innerWidth,window.innerHeight);const S=new DE(v,x.domElement);S.enableDamping=!0,S.dampingFactor=.05;function w(){requestAnimationFrame(w);const y=s.getElapsedTime();Object.values(p).forEach(g=>g.rotation.y+=.01),p.mercury.position.set(m.mercury*Math.cos(y*1.2),0,m.mercury*Math.sin(y*1.2)),p.venus.position.set(m.venus*Math.cos(y*.9),0,m.venus*Math.sin(y*.9)),p.earth.position.set(m.earth*Math.cos(y*.7),0,m.earth*Math.sin(y*.7)),p.mars.position.set(m.mars*Math.cos(y*.5),0,m.mars*Math.sin(y*.5)),S.update(),x.render(r,v)}w();const R=()=>{v.aspect=window.innerWidth/window.innerHeight,v.updateProjectionMatrix(),x.setSize(window.innerWidth,window.innerHeight)};return window.addEventListener("resize",R),()=>{window.removeEventListener("resize",R),n.removeChild(x.domElement),x.dispose()}},[]),qc.jsx("div",{id:"solarDiv",style:{width:"100%",height:"100vh"}})}Q_.createRoot(document.getElementById("root")).render(qc.jsx(Lm.StrictMode,{children:qc.jsx(WE,{})}));
