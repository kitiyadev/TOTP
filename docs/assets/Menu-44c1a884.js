import{r as f,b as G,aH as ae,aI as ue,aF as Y,J as ce,j as J,aJ as fe,_ as R,a as pe,g as de,s as q,f as me,af as ye,aK as he,u as be,a2 as ge,aL as Z,c as Se,d as Me}from"./index-5cf3a64a.js";var r={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var B=Symbol.for("react.element"),Q=Symbol.for("react.portal"),k=Symbol.for("react.fragment"),_=Symbol.for("react.strict_mode"),K=Symbol.for("react.profiler"),j=Symbol.for("react.provider"),N=Symbol.for("react.context"),Pe=Symbol.for("react.server_context"),O=Symbol.for("react.forward_ref"),z=Symbol.for("react.suspense"),A=Symbol.for("react.suspense_list"),H=Symbol.for("react.memo"),U=Symbol.for("react.lazy"),ve=Symbol.for("react.offscreen"),te;te=Symbol.for("react.module.reference");function p(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case B:switch(e=e.type,e){case k:case K:case _:case z:case A:return e;default:switch(e=e&&e.$$typeof,e){case Pe:case N:case O:case U:case H:case j:return e;default:return t}}case Q:return t}}}r.ContextConsumer=N;r.ContextProvider=j;r.Element=B;r.ForwardRef=O;r.Fragment=k;r.Lazy=U;r.Memo=H;r.Portal=Q;r.Profiler=K;r.StrictMode=_;r.Suspense=z;r.SuspenseList=A;r.isAsyncMode=function(){return!1};r.isConcurrentMode=function(){return!1};r.isContextConsumer=function(e){return p(e)===N};r.isContextProvider=function(e){return p(e)===j};r.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===B};r.isForwardRef=function(e){return p(e)===O};r.isFragment=function(e){return p(e)===k};r.isLazy=function(e){return p(e)===U};r.isMemo=function(e){return p(e)===H};r.isPortal=function(e){return p(e)===Q};r.isProfiler=function(e){return p(e)===K};r.isStrictMode=function(e){return p(e)===_};r.isSuspense=function(e){return p(e)===z};r.isSuspenseList=function(e){return p(e)===A};r.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===k||e===K||e===_||e===z||e===A||e===ve||typeof e=="object"&&e!==null&&(e.$$typeof===U||e.$$typeof===H||e.$$typeof===j||e.$$typeof===N||e.$$typeof===O||e.$$typeof===te||e.getModuleId!==void 0)};r.typeOf=p;const xe=["actions","autoFocus","autoFocusItem","children","className","disabledItemsFocusable","disableListWrap","onKeyDown","variant"];function W(e,t,s){return e===t?e.firstChild:t&&t.nextElementSibling?t.nextElementSibling:s?null:e.firstChild}function ee(e,t,s){return e===t?s?e.firstChild:e.lastChild:t&&t.previousElementSibling?t.previousElementSibling:s?null:e.lastChild}function re(e,t){if(t===void 0)return!0;let s=e.innerText;return s===void 0&&(s=e.textContent),s=s.trim().toLowerCase(),s.length===0?!1:t.repeating?s[0]===t.keys[0]:s.indexOf(t.keys.join(""))===0}function I(e,t,s,M,h,g){let d=!1,a=h(e,t,t?s:!1);for(;a;){if(a===e.firstChild){if(d)return!1;d=!0}const b=M?!1:a.disabled||a.getAttribute("aria-disabled")==="true";if(!a.hasAttribute("tabindex")||!re(a,g)||b)a=h(e,a,s);else return a.focus(),!0}return!1}const we=f.forwardRef(function(t,s){const{actions:M,autoFocus:h=!1,autoFocusItem:g=!1,children:d,className:a,disabledItemsFocusable:b=!1,disableListWrap:S=!1,onKeyDown:P,variant:v="selectedMenu"}=t,$=G(t,xe),m=f.useRef(null),V=f.useRef({keys:[],repeating:!0,previousKeyMatched:!0,lastTime:null});ae(()=>{h&&m.current.focus()},[h]),f.useImperativeHandle(M,()=>({adjustStyleForScrollbar:(o,{direction:i})=>{const u=!m.current.style.width;if(o.clientHeight<m.current.clientHeight&&u){const c=`${ue(Y(o))}px`;m.current.style[i==="rtl"?"paddingLeft":"paddingRight"]=c,m.current.style.width=`calc(100% + ${c})`}return m.current}}),[]);const L=o=>{const i=m.current,u=o.key,c=Y(i).activeElement;if(u==="ArrowDown")o.preventDefault(),I(i,c,S,b,W);else if(u==="ArrowUp")o.preventDefault(),I(i,c,S,b,ee);else if(u==="Home")o.preventDefault(),I(i,null,S,b,W);else if(u==="End")o.preventDefault(),I(i,null,S,b,ee);else if(u.length===1){const n=V.current,x=u.toLowerCase(),E=performance.now();n.keys.length>0&&(E-n.lastTime>500?(n.keys=[],n.repeating=!0,n.previousKeyMatched=!0):n.repeating&&x!==n.keys[0]&&(n.repeating=!1)),n.lastTime=E,n.keys.push(x);const F=c&&!n.repeating&&re(c,n);n.previousKeyMatched&&(F||I(i,c,!1,b,W,n))?o.preventDefault():n.previousKeyMatched=!1}P&&P(o)},w=ce(m,s);let l=-1;f.Children.forEach(d,(o,i)=>{if(!f.isValidElement(o)){l===i&&(l+=1,l>=d.length&&(l=-1));return}o.props.disabled||(v==="selectedMenu"&&o.props.selected||l===-1)&&(l=i),l===i&&(o.props.disabled||o.props.muiSkipListHighlight||o.type.muiSkipListHighlight)&&(l+=1,l>=d.length&&(l=-1))});const C=f.Children.map(d,(o,i)=>{if(i===l){const u={};return g&&(u.autoFocus=!0),o.props.tabIndex===void 0&&v==="selectedMenu"&&(u.tabIndex=0),f.cloneElement(o,u)}return o});return J.jsx(fe,R({role:"menu",ref:w,className:a,onKeyDown:L,tabIndex:h?0:-1},$,{children:C}))}),Ce=we;function Fe(e){return pe("MuiMenu",e)}de("MuiMenu",["root","paper","list"]);const Ie=["onEntering"],Re=["autoFocus","children","className","disableAutoFocusItem","MenuListProps","onClose","open","PaperProps","PopoverClasses","transitionDuration","TransitionProps","variant","slots","slotProps"],$e={vertical:"top",horizontal:"right"},Le={vertical:"top",horizontal:"left"},Ee=e=>{const{classes:t}=e;return Me({root:["root"],paper:["paper"],list:["list"]},Fe,t)},De=q(me,{shouldForwardProp:e=>ye(e)||e==="classes",name:"MuiMenu",slot:"Root",overridesResolver:(e,t)=>t.root})({}),Te=q(he,{name:"MuiMenu",slot:"Paper",overridesResolver:(e,t)=>t.paper})({maxHeight:"calc(100% - 96px)",WebkitOverflowScrolling:"touch"}),ke=q(Ce,{name:"MuiMenu",slot:"List",overridesResolver:(e,t)=>t.list})({outline:0}),_e=f.forwardRef(function(t,s){var M,h;const g=be({props:t,name:"MuiMenu"}),{autoFocus:d=!0,children:a,className:b,disableAutoFocusItem:S=!1,MenuListProps:P={},onClose:v,open:$,PaperProps:m={},PopoverClasses:V,transitionDuration:L="auto",TransitionProps:{onEntering:w}={},variant:l="selectedMenu",slots:C={},slotProps:o={}}=g,i=G(g.TransitionProps,Ie),u=G(g,Re),c=ge(),n=R({},g,{autoFocus:d,disableAutoFocusItem:S,MenuListProps:P,onEntering:w,PaperProps:m,transitionDuration:L,TransitionProps:i,variant:l}),x=Ee(n),E=d&&!S&&$,F=f.useRef(null),oe=(y,T)=>{F.current&&F.current.adjustStyleForScrollbar(y,{direction:c?"rtl":"ltr"}),w&&w(y,T)},se=y=>{y.key==="Tab"&&(y.preventDefault(),v&&v(y,"tabKeyDown"))};let D=-1;f.Children.map(a,(y,T)=>{f.isValidElement(y)&&(y.props.disabled||(l==="selectedMenu"&&y.props.selected||D===-1)&&(D=T))});const X=(M=C.paper)!=null?M:Te,ne=(h=o.paper)!=null?h:m,ie=Z({elementType:C.root,externalSlotProps:o.root,ownerState:n,className:[x.root,b]}),le=Z({elementType:X,externalSlotProps:ne,ownerState:n,className:x.paper});return J.jsx(De,R({onClose:v,anchorOrigin:{vertical:"bottom",horizontal:c?"right":"left"},transformOrigin:c?$e:Le,slots:{paper:X,root:C.root},slotProps:{root:ie,paper:le},open:$,ref:s,transitionDuration:L,TransitionProps:R({onEntering:oe},i),ownerState:n},u,{classes:V,children:J.jsx(ke,R({onKeyDown:se,actions:F,autoFocus:d&&(D===-1||S),autoFocusItem:E,variant:l},P,{className:Se(x.list,P.className),children:a}))}))}),je=_e;export{je as M};
