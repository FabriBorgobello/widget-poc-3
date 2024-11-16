(function(){"use strict";function m(e){let t;return()=>(t===void 0&&(t=e()),t)}const I=m(()=>window.ScrollTimeline!==void 0);class B{constructor(t){this.stop=()=>this.runAll("stop"),this.animations=t.filter(Boolean)}then(t,n){return Promise.all(this.animations).then(t).catch(n)}getAll(t){return this.animations[0][t]}setAll(t,n){for(let i=0;i<this.animations.length;i++)this.animations[i][t]=n}attachTimeline(t,n){const i=this.animations.map(o=>I()&&o.attachTimeline?o.attachTimeline(t):n(o));return()=>{i.forEach((o,r)=>{o&&o(),this.animations[r].stop()})}}get time(){return this.getAll("time")}set time(t){this.setAll("time",t)}get speed(){return this.getAll("speed")}set speed(t){this.setAll("speed",t)}get startTime(){return this.getAll("startTime")}get duration(){let t=0;for(let n=0;n<this.animations.length;n++)t=Math.max(t,this.animations[n].duration);return t}runAll(t){this.animations.forEach(n=>n[t]())}flatten(){this.runAll("flatten")}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}const T=e=>e;var F={};let f=T;F.NODE_ENV!=="production"&&(f=(e,t)=>{if(!e)throw new Error(t)});function R(e,t,n){if(typeof e=="string"){let i=document;t&&(f(!!t.current,"Scope provided, but no element detected."),i=t.current),e=i.querySelectorAll(e)}else e instanceof Element&&(e=[e]);return Array.from(e||[])}const y=e=>e*1e3,b=e=>e/1e3;function M(e,t){return e?e[t]||e.default||e:void 0}const _=e=>Array.isArray(e)&&typeof e[0]=="number",L=(e,t,n)=>{const i=t-e;return i===0?1:(n-e)/i},k=10,V=(e,t)=>{let n="";const i=Math.max(Math.round(t/k),2);for(let o=0;o<i;o++)n+=e(L(0,i-1,o))+", ";return`linear(${n.substring(0,n.length-2)})`},$={linearEasing:void 0};function z(e,t){const n=m(e);return()=>{var i;return(i=$[t])!==null&&i!==void 0?i:n()}}const E=z(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),p=([e,t,n,i])=>`cubic-bezier(${e}, ${t}, ${n}, ${i})`,x={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:p([0,.65,.55,1]),circOut:p([.55,0,1,.45]),backIn:p([.31,.01,.66,-.59]),backOut:p([.33,1.53,.69,.99])};function w(e,t){if(e)return typeof e=="function"&&E()?V(e,t):_(e)?p(e):Array.isArray(e)?e.map(n=>w(n,t)||x.easeOut):x[e]}function D(e,t,n,{delay:i=0,duration:o=300,repeat:r=0,repeatType:u="loop",ease:l="easeInOut",times:d}={}){const a={[t]:n};d&&(a.offset=d);const c=w(l,o);return Array.isArray(c)&&(a.easing=c),e.animate(a,{delay:i,duration:o,easing:Array.isArray(c)?"linear":c,fill:"both",iterations:r+1,direction:u==="reverse"?"alternate":"normal"})}const A=2e4;function G(e){let t=0;const n=50;let i=e.next(t);for(;!i.done&&t<A;)t+=n,i=e.next(t);return t>=A?1/0:t}function N(e,t=100,n){const i=n({...e,keyframes:[0,t]}),o=Math.min(G(i),A);return{type:"keyframes",ease:r=>i.next(o*r).value/t,duration:b(o)}}const s=(e=>({test:t=>typeof t=="string"&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}))("px"),S={borderWidth:s,borderTopWidth:s,borderRightWidth:s,borderBottomWidth:s,borderLeftWidth:s,borderRadius:s,radius:s,borderTopLeftRadius:s,borderTopRightRadius:s,borderBottomRightRadius:s,borderBottomLeftRadius:s,width:s,maxWidth:s,height:s,maxHeight:s,top:s,right:s,bottom:s,left:s,padding:s,paddingTop:s,paddingRight:s,paddingBottom:s,paddingLeft:s,margin:s,marginTop:s,marginRight:s,marginBottom:s,marginLeft:s,backgroundPositionX:s,backgroundPositionY:s};function U(e){return typeof e=="function"}function v(e,t){e.timeline=t,e.onfinish=null}const j=e=>e!==null;function q(e,{repeat:t,repeatType:n="loop"},i){const o=e.filter(j),r=t&&n!=="loop"&&t%2===1?0:o.length-1;return!r||i===void 0?o[r]:i}function H(e,t,n){e.style.setProperty(`--${t}`,n)}function X(e,t,n){e.style[t]=n}const Y=m(()=>{try{document.createElement("div").animate({opacity:[1]})}catch{return!1}return!0}),J=m(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),g=new WeakMap;function K(e,t,n){for(let i=0;i<t.length;i++)t[i]===null&&(t[i]=i===0?n():t[i-1]),typeof t[i]=="number"&&S[e]&&(t[i]=S[e].transform(t[i]));!Y()&&t.length<2&&t.unshift(n())}const P="easeOut";function W(e){const t=g.get(e)||new Map;return g.set(e,t),g.get(e)}class Q{constructor(t,n,i,o){const r=n.startsWith("--");this.setValue=r?H:X,this.options=o,this.updateFinishedPromise(),f(typeof o.type!="string",`animateMini doesn't support "type" as a string. Did you mean to import { spring } from "framer-motion"?`);const u=W(t).get(n);u&&u.stop();const l=()=>n.startsWith("--")?t.style.getPropertyValue(n):window.getComputedStyle(t)[n];if(Array.isArray(i)||(i=[i]),K(n,i,l),U(o.type)){const a=N(o,100,o.type);o.ease=E()?a.ease:P,o.duration=y(a.duration),o.type="keyframes"}else o.ease=o.ease||P;this.removeAnimation=()=>{var a;return(a=g.get(t))===null||a===void 0?void 0:a.delete(n)};const d=()=>{this.setValue(t,n,q(i,this.options)),this.cancel(),this.resolveFinishedPromise()};J()?(this.animation=D(t,n,i,o),o.autoplay===!1&&this.animation.pause(),this.animation.onfinish=d,this.pendingTimeline&&v(this.animation,this.pendingTimeline),W(t).set(n,this)):d()}get duration(){return b(this.options.duration||300)}get time(){var t;return this.animation?b(((t=this.animation)===null||t===void 0?void 0:t.currentTime)||0):0}set time(t){this.animation&&(this.animation.currentTime=y(t))}get speed(){return this.animation?this.animation.playbackRate:1}set speed(t){this.animation&&(this.animation.playbackRate=t)}get state(){return this.animation?this.animation.playState:"finished"}get startTime(){return this.animation?this.animation.startTime:null}flatten(){var t;this.animation&&((t=this.animation.effect)===null||t===void 0||t.updateTiming({easing:"linear"}))}play(){this.state==="finished"&&this.updateFinishedPromise(),this.animation&&this.animation.play()}pause(){this.animation&&this.animation.pause()}stop(){!this.animation||this.state==="idle"||this.state==="finished"||(this.animation.commitStyles&&this.animation.commitStyles(),this.cancel())}complete(){this.animation&&this.animation.finish()}cancel(){this.removeAnimation();try{this.animation&&this.animation.cancel()}catch{}}then(t,n){return this.currentFinishedPromise.then(t,n)}updateFinishedPromise(){this.currentFinishedPromise=new Promise(t=>{this.resolveFinishedPromise=t})}attachTimeline(t){return this.animation?v(this.animation,t):this.pendingTimeline=t,T}}function Z(e,t,n,i){const o=R(e,i),r=o.length;f(!!r,"No valid element provided.");const u=[];for(let l=0;l<r;l++){const d=o[l],a={...n};typeof a.delay=="function"&&(a.delay=a.delay(l,r));for(const c in t){const ot=t[c],h={...M(a,c)};h.duration=h.duration?y(h.duration):h.duration,h.delay=y(h.delay||0),u.push(new Q(d,c,ot,h))}}return u}const O=(e=>{function t(n,i,o){return new B(Z(n,i,o,e))}return t})(),tt="fully-ai-main-button",C="fully-ai-main-container";function et(){const e=document.createElement("button");return e.id=tt,e.textContent="Open Square",e.style.padding="10px 20px",e.style.fontSize="16px",e.style.cursor="pointer",e.style.margin="20px auto",e.style.display="block",e.addEventListener("click",()=>{const t=document.getElementById(C);t.style.display="block",O(t,{opacity:1})}),e}function nt(){const e=document.createElement("div");e.id=C,e.style.width="300px",e.style.height="300px",e.style.backgroundColor="#ffffff",e.style.border="1px solid #ccc",e.style.position="fixed",e.style.top="50%",e.style.left="50%",e.style.transform="translate(-50%, -50%)",e.style.display="none",e.style.zIndex="1000",e.style.opacity="0";const t=document.createElement("button");return t.textContent="Close",t.style.position="absolute",t.style.top="10px",t.style.right="10px",t.style.padding="5px 10px",t.style.cursor="pointer",t.addEventListener("click",()=>{O(e,{opacity:0},{onComplete:()=>{console.log("Animation completed"),e.style.display="none"}})}),e.appendChild(t),e}function it(e){console.log("Initializing widget with settings:",e);const t=et(),n=nt();document.body.appendChild(t),document.body.appendChild(n)}typeof window<"u"&&(console.log("Setting FullyAIWidget on window object"),window.FullyAIWidget={init:it})})();