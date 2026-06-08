import{ab as c,aa as e,a9 as ne,ae as q,a8 as Ot,ac as Be,a2 as T,a7 as ve,f as Jt,a1 as ee,s as De,O as Ue,R as Qt,a as es,V as mt,Q as ft,M as Me,X as Te,u as ts,t as ss,I as ns,g as pt,m as at,n as Pe,a5 as as,B as ot,U as It,z as rs,a0 as xt,$ as gt,r as os,a3 as Le,L as is,q as ls,p as Ae,c as cs,a4 as ds,k as us,o as bt,D as hs,h as ms,A as fs,C as zt,ad as ps,Z as xs,b as vt,x as yt,_ as gs,j as bs,H as vs,y as ys,w as je,S as ws,E as js,a6 as Ns,Y as Dt,d as Ss,G as Ut,P as Es,l as _s,T as Ms,W as wt,F as Ts,K as Ps,e as As,N as Ls,i as Cs,v as Rs}from"./index-Cx-SXE_a.js";const jt=["> SYSTEM: TACTICAL_OS_V2.4","> STATUS: ONLINE","> USER: YUEHAN","> ACCESS: GRANTED"],Nt="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*",ks=({onComplete:r})=>{const[s,n]=c.useState("scramble"),[t,a]=c.useState(["","","",""]);return c.useEffect(()=>{let i;return s==="scramble"?(i=setInterval(()=>{a(jt.map(d=>d.split("").map(l=>l===" "?" ":Nt[Math.floor(Math.random()*Nt.length)]).join("")))},50),setTimeout(()=>n("resolve"),1500)):s==="resolve"?(a(jt),setTimeout(()=>n("flash"),1e3)):s==="flash"&&setTimeout(r,500),()=>clearInterval(i)},[s,r]),s==="flash"?e.jsx("div",{className:"fixed inset-0 z-[100] bg-white animate-crt-flash pointer-events-none"}):e.jsx("div",{className:"fixed inset-0 z-[100] bg-[#010208] flex items-center justify-center font-mono p-8",children:e.jsx("div",{className:"max-w-2xl w-full",children:t.map((i,d)=>e.jsx("div",{className:`text-xl md:text-2xl tracking-widest font-black mb-2 ${s==="scramble"?"text-emerald-500":"text-cyan-400"}`,children:i},d))})})};/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Os=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]],Is=ne("activity",Os);/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zs=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],Ds=ne("arrow-right",zs);/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Us=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],St=ne("calendar",Us);/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bs=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],Hs=ne("chevron-down",Bs);/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fs=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],Vs=ne("chevron-right",Fs);/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ws=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],Bt=ne("external-link",Ws);/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $s=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],Ys=ne("layers",$s);/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gs=[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",key:"1a0edw"}],["path",{d:"M12 22V12",key:"d0xqtd"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}]],Xs=ne("package",Gs);/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zs=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],Ht=ne("shield-check",Zs);/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qs=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],Ks=ne("shield",qs);/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Js=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],Qs=ne("sparkles",Js);/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const en=[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M2 8.82a15 15 0 0 1 20 0",key:"dnpr2z"}],["path",{d:"M5 12.859a10 10 0 0 1 14 0",key:"1x1e6c"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}]],tn=ne("wifi",en),sn=()=>{const r=c.useRef(null);return c.useEffect(()=>{const s=r.current;if(!s)return;const n=s.getContext("2d");if(!n)return;let t=s.width=window.innerWidth,a=s.height=window.innerHeight;const d="01YUEHANDEVBINARYSECURE<>[]{}!@#$%^&*()_+".split(""),l=14,u=t/l,g=[];for(let y=0;y<u;y++)g[y]=1;const h=setInterval(()=>{n.fillStyle="rgba(13, 17, 23, 0.05)",n.fillRect(0,0,t,a),n.fillStyle="#0f0",n.font=`${l}px monospace`;for(let y=0;y<g.length;y++){const R=Math.random()>.95,M=Math.random()>.98;R?n.fillStyle="#22d3ee":M?n.fillStyle="#a855f7":n.fillStyle="#10b981";const j=d[Math.floor(Math.random()*d.length)];n.fillText(j,y*l,g[y]*l),g[y]*l>a&&Math.random()>.975&&(g[y]=0),g[y]++}},33),x=()=>{t=s.width=window.innerWidth,a=s.height=window.innerHeight};return window.addEventListener("resize",x),()=>{clearInterval(h),window.removeEventListener("resize",x)}},[]),e.jsx("canvas",{ref:r,className:"absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none z-0"})},He=new T,it=new T,nn=new T,Et=new ee;function an(r,s,n){const t=He.setFromMatrixPosition(r.matrixWorld);t.project(s);const a=n.width/2,i=n.height/2;return[t.x*a+a,-(t.y*i)+i]}function rn(r,s){const n=He.setFromMatrixPosition(r.matrixWorld),t=it.setFromMatrixPosition(s.matrixWorld),a=n.sub(t),i=s.getWorldDirection(nn);return a.angleTo(i)>Math.PI/2}function on(r,s,n,t){const a=He.setFromMatrixPosition(r.matrixWorld),i=a.clone();i.project(s),Et.set(i.x,i.y),n.setFromCamera(Et,s);const d=n.intersectObjects(t,!0);if(d.length){const l=d[0].distance;return a.distanceTo(n.ray.origin)<l}return!0}function ln(r,s){if(s instanceof Ue)return s.zoom;if(s instanceof De){const n=He.setFromMatrixPosition(r.matrixWorld),t=it.setFromMatrixPosition(s.matrixWorld),a=s.fov*Math.PI/180,i=n.distanceTo(t);return 1/(2*Math.tan(a/2)*i)}else return 1}function cn(r,s,n){if(s instanceof De||s instanceof Ue){const t=He.setFromMatrixPosition(r.matrixWorld),a=it.setFromMatrixPosition(s.matrixWorld),i=t.distanceTo(a),d=(n[1]-n[0])/(s.far-s.near),l=n[1]-d*s.far;return Math.round(d*i+l)}}const rt=r=>Math.abs(r)<1e-10?0:r;function Ft(r,s,n=""){let t="matrix3d(";for(let a=0;a!==16;a++)t+=rt(s[a]*r.elements[a])+(a!==15?",":")");return n+t}const dn=(r=>s=>Ft(s,r))([1,-1,1,1,1,-1,1,1,1,-1,1,1,1,-1,1,1]),un=(r=>(s,n)=>Ft(s,r(n),"translate(-50%,-50%)"))(r=>[1/r,1/r,1/r,1,-1/r,-1/r,-1/r,-1,1/r,1/r,1/r,1,1,1,1,1]);function hn(r){return r&&typeof r=="object"&&"current"in r}const _t=c.forwardRef(({children:r,eps:s=.001,style:n,className:t,prepend:a,center:i,fullscreen:d,portal:l,distanceFactor:u,sprite:g=!1,transform:m=!1,occlude:h,onOcclude:x,castShadow:y,receiveShadow:R,material:M,geometry:j,zIndexRange:P=[16777271,0],calculatePosition:O=an,as:S="div",wrapperClass:v,pointerEvents:L="auto",...b},f)=>{const{gl:A,camera:N,scene:_,size:C,raycaster:F,events:D,viewport:B}=q(),[I]=c.useState(()=>document.createElement(S)),V=c.useRef(null),U=c.useRef(null),Q=c.useRef(0),te=c.useRef([0,0]),X=c.useRef(null),K=c.useRef(null),Z=(l==null?void 0:l.current)||D.connected||A.domElement.parentNode,H=c.useRef(null),xe=c.useRef(!1),ae=c.useMemo(()=>h&&h!=="blending"||Array.isArray(h)&&h.length&&hn(h[0]),[h]);c.useLayoutEffect(()=>{const J=A.domElement;h&&h==="blending"?(J.style.zIndex=`${Math.floor(P[0]/2)}`,J.style.position="absolute",J.style.pointerEvents="none"):(J.style.zIndex=null,J.style.position=null,J.style.pointerEvents=null)},[h]),c.useLayoutEffect(()=>{if(U.current){const J=V.current=Ot.createRoot(I);if(_.updateMatrixWorld(),m)I.style.cssText="position:absolute;top:0;left:0;pointer-events:none;overflow:hidden;";else{const z=O(U.current,N,C);I.style.cssText=`position:absolute;top:0;left:0;transform:translate3d(${z[0]}px,${z[1]}px,0);transform-origin:0 0;`}return Z&&(a?Z.prepend(I):Z.appendChild(I)),()=>{Z&&Z.removeChild(I),J.unmount()}}},[Z,m]),c.useLayoutEffect(()=>{v&&(I.className=v)},[v]);const ye=c.useMemo(()=>m?{position:"absolute",top:0,left:0,width:C.width,height:C.height,transformStyle:"preserve-3d",pointerEvents:"none"}:{position:"absolute",transform:i?"translate3d(-50%,-50%,0)":"none",...d&&{top:-C.height/2,left:-C.width/2,width:C.width,height:C.height},...n},[n,i,d,C,m]),Ce=c.useMemo(()=>({position:"absolute",pointerEvents:L}),[L]);c.useLayoutEffect(()=>{if(xe.current=!1,m){var J;(J=V.current)==null||J.render(c.createElement("div",{ref:X,style:ye},c.createElement("div",{ref:K,style:Ce},c.createElement("div",{ref:f,className:t,style:n,children:r}))))}else{var z;(z=V.current)==null||z.render(c.createElement("div",{ref:f,style:ye,className:t,children:r}))}});const re=c.useRef(!0);Be(J=>{if(U.current){N.updateMatrixWorld(),U.current.updateWorldMatrix(!0,!1);const z=m?te.current:O(U.current,N,C);if(m||Math.abs(Q.current-N.zoom)>s||Math.abs(te.current[0]-z[0])>s||Math.abs(te.current[1]-z[1])>s){const oe=rn(U.current,N);let se=!1;ae&&(Array.isArray(h)?se=h.map(ie=>ie.current):h!=="blending"&&(se=[_]));const ge=re.current;if(se){const ie=on(U.current,N,F,se);re.current=ie&&!oe}else re.current=!oe;ge!==re.current&&(x?x(!re.current):I.style.display=re.current?"block":"none");const Ee=Math.floor(P[0]/2),Ze=h?ae?[P[0],Ee]:[Ee-1,0]:P;if(I.style.zIndex=`${cn(U.current,N,Ze)}`,m){const[ie,Re]=[C.width/2,C.height/2],_e=N.projectionMatrix.elements[5]*Re,{isOrthographicCamera:Fe,top:qe,left:Ve,bottom:ke,right:we}=N,Ke=dn(N.matrixWorldInverse),Je=Fe?`scale(${_e})translate(${rt(-(we+Ve)/2)}px,${rt((qe+ke)/2)}px)`:`translateZ(${_e}px)`;let le=U.current.matrixWorld;g&&(le=N.matrixWorldInverse.clone().transpose().copyPosition(le).scale(U.current.scale),le.elements[3]=le.elements[7]=le.elements[11]=0,le.elements[15]=1),I.style.width=C.width+"px",I.style.height=C.height+"px",I.style.perspective=Fe?"":`${_e}px`,X.current&&K.current&&(X.current.style.transform=`${Je}${Ke}translate(${ie}px,${Re}px)`,K.current.style.transform=un(le,1/((u||10)/400)))}else{const ie=u===void 0?1:ln(U.current,N)*u;I.style.transform=`translate3d(${z[0]}px,${z[1]}px,0) scale(${ie})`}te.current=z,Q.current=N.zoom}}if(!ae&&H.current&&!xe.current)if(m){if(X.current){const z=X.current.children[0];if(z!=null&&z.clientWidth&&z!=null&&z.clientHeight){const{isOrthographicCamera:oe}=N;if(oe||j)b.scale&&(Array.isArray(b.scale)?b.scale instanceof T?H.current.scale.copy(b.scale.clone().divideScalar(1)):H.current.scale.set(1/b.scale[0],1/b.scale[1],1/b.scale[2]):H.current.scale.setScalar(1/b.scale));else{const se=(u||10)/400,ge=z.clientWidth*se,Ee=z.clientHeight*se;H.current.scale.set(ge,Ee,1)}xe.current=!0}}}else{const z=I.children[0];if(z!=null&&z.clientWidth&&z!=null&&z.clientHeight){const oe=1/B.factor,se=z.clientWidth*oe,ge=z.clientHeight*oe;H.current.scale.set(se,ge,1),xe.current=!0}H.current.lookAt(J.camera.position)}});const Se=c.useMemo(()=>({vertexShader:m?void 0:`
          /*
            This shader is from the THREE's SpriteMaterial.
            We need to turn the backing plane into a Sprite
            (make it always face the camera) if "transfrom"
            is false.
          */
          #include <common>

          void main() {
            vec2 center = vec2(0., 1.);
            float rotation = 0.0;

            // This is somewhat arbitrary, but it seems to work well
            // Need to figure out how to derive this dynamically if it even matters
            float size = 0.03;

            vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
            vec2 scale;
            scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
            scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );

            bool isPerspective = isPerspectiveMatrix( projectionMatrix );
            if ( isPerspective ) scale *= - mvPosition.z;

            vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale * size;
            vec2 rotatedPosition;
            rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
            rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
            mvPosition.xy += rotatedPosition;

            gl_Position = projectionMatrix * mvPosition;
          }
      `,fragmentShader:`
        void main() {
          gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
        }
      `}),[m]);return c.createElement("group",ve({},b,{ref:U}),h&&!ae&&c.createElement("mesh",{castShadow:y,receiveShadow:R,ref:H},j||c.createElement("planeGeometry",null),M||c.createElement("shaderMaterial",{side:Jt,vertexShader:Se.vertexShader,fragmentShader:Se.fragmentShader})))}),Vt=parseInt(Qt.replace(/\D+/g,"")),Wt=Vt>=125?"uv1":"uv2";function mn(r,s=Math.PI/3){const n=Math.cos(s),t=(1+1e-10)*100,a=[new T,new T,new T],i=new T,d=new T,l=new T,u=new T;function g(M){const j=~~(M.x*t),P=~~(M.y*t),O=~~(M.z*t);return`${j},${P},${O}`}const m=r.index?r.toNonIndexed():r,h=m.attributes.position,x={};for(let M=0,j=h.count/3;M<j;M++){const P=3*M,O=a[0].fromBufferAttribute(h,P+0),S=a[1].fromBufferAttribute(h,P+1),v=a[2].fromBufferAttribute(h,P+2);i.subVectors(v,S),d.subVectors(O,S);const L=new T().crossVectors(i,d).normalize();for(let b=0;b<3;b++){const f=a[b],A=g(f);A in x||(x[A]=[]),x[A].push(L)}}const y=new Float32Array(h.count*3),R=new es(y,3,!1);for(let M=0,j=h.count/3;M<j;M++){const P=3*M,O=a[0].fromBufferAttribute(h,P+0),S=a[1].fromBufferAttribute(h,P+1),v=a[2].fromBufferAttribute(h,P+2);i.subVectors(v,S),d.subVectors(O,S),l.crossVectors(i,d).normalize();for(let L=0;L<3;L++){const b=a[L],f=g(b),A=x[f];u.set(0,0,0);for(let N=0,_=A.length;N<_;N++){const C=A[N];l.dot(C)>n&&u.add(C)}u.normalize(),R.setXYZ(P+L,u.x,u.y,u.z)}}return m.setAttribute("normal",R),m}var fn=Object.defineProperty,pn=(r,s,n)=>s in r?fn(r,s,{enumerable:!0,configurable:!0,writable:!0,value:n}):r[s]=n,xn=(r,s,n)=>(pn(r,s+"",n),n);class gn{constructor(){xn(this,"_listeners")}addEventListener(s,n){this._listeners===void 0&&(this._listeners={});const t=this._listeners;t[s]===void 0&&(t[s]=[]),t[s].indexOf(n)===-1&&t[s].push(n)}hasEventListener(s,n){if(this._listeners===void 0)return!1;const t=this._listeners;return t[s]!==void 0&&t[s].indexOf(n)!==-1}removeEventListener(s,n){if(this._listeners===void 0)return;const a=this._listeners[s];if(a!==void 0){const i=a.indexOf(n);i!==-1&&a.splice(i,1)}}dispatchEvent(s){if(this._listeners===void 0)return;const t=this._listeners[s.type];if(t!==void 0){s.target=this;const a=t.slice(0);for(let i=0,d=a.length;i<d;i++)a[i].call(this,s);s.target=null}}}var bn=Object.defineProperty,vn=(r,s,n)=>s in r?bn(r,s,{enumerable:!0,configurable:!0,writable:!0,value:n}):r[s]=n,w=(r,s,n)=>(vn(r,typeof s!="symbol"?s+"":s,n),n);const $e=new ts,Mt=new ss,yn=Math.cos(70*(Math.PI/180)),Tt=(r,s)=>(r%s+s)%s;let wn=class extends gn{constructor(s,n){super(),w(this,"object"),w(this,"domElement"),w(this,"enabled",!0),w(this,"target",new T),w(this,"minDistance",0),w(this,"maxDistance",1/0),w(this,"minZoom",0),w(this,"maxZoom",1/0),w(this,"minPolarAngle",0),w(this,"maxPolarAngle",Math.PI),w(this,"minAzimuthAngle",-1/0),w(this,"maxAzimuthAngle",1/0),w(this,"enableDamping",!1),w(this,"dampingFactor",.05),w(this,"enableZoom",!0),w(this,"zoomSpeed",1),w(this,"enableRotate",!0),w(this,"rotateSpeed",1),w(this,"enablePan",!0),w(this,"panSpeed",1),w(this,"screenSpacePanning",!0),w(this,"keyPanSpeed",7),w(this,"zoomToCursor",!1),w(this,"autoRotate",!1),w(this,"autoRotateSpeed",2),w(this,"reverseOrbit",!1),w(this,"reverseHorizontalOrbit",!1),w(this,"reverseVerticalOrbit",!1),w(this,"keys",{LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"}),w(this,"mouseButtons",{LEFT:Me.ROTATE,MIDDLE:Me.DOLLY,RIGHT:Me.PAN}),w(this,"touches",{ONE:Te.ROTATE,TWO:Te.DOLLY_PAN}),w(this,"target0"),w(this,"position0"),w(this,"zoom0"),w(this,"_domElementKeyEvents",null),w(this,"getPolarAngle"),w(this,"getAzimuthalAngle"),w(this,"setPolarAngle"),w(this,"setAzimuthalAngle"),w(this,"getDistance"),w(this,"getZoomScale"),w(this,"listenToKeyEvents"),w(this,"stopListenToKeyEvents"),w(this,"saveState"),w(this,"reset"),w(this,"update"),w(this,"connect"),w(this,"dispose"),w(this,"dollyIn"),w(this,"dollyOut"),w(this,"getScale"),w(this,"setScale"),this.object=s,this.domElement=n,this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this.getPolarAngle=()=>m.phi,this.getAzimuthalAngle=()=>m.theta,this.setPolarAngle=o=>{let p=Tt(o,2*Math.PI),E=m.phi;E<0&&(E+=2*Math.PI),p<0&&(p+=2*Math.PI);let k=Math.abs(p-E);2*Math.PI-k<k&&(p<E?p+=2*Math.PI:E+=2*Math.PI),h.phi=p-E,t.update()},this.setAzimuthalAngle=o=>{let p=Tt(o,2*Math.PI),E=m.theta;E<0&&(E+=2*Math.PI),p<0&&(p+=2*Math.PI);let k=Math.abs(p-E);2*Math.PI-k<k&&(p<E?p+=2*Math.PI:E+=2*Math.PI),h.theta=p-E,t.update()},this.getDistance=()=>t.object.position.distanceTo(t.target),this.listenToKeyEvents=o=>{o.addEventListener("keydown",Qe),this._domElementKeyEvents=o},this.stopListenToKeyEvents=()=>{this._domElementKeyEvents.removeEventListener("keydown",Qe),this._domElementKeyEvents=null},this.saveState=()=>{t.target0.copy(t.target),t.position0.copy(t.object.position),t.zoom0=t.object.zoom},this.reset=()=>{t.target.copy(t.target0),t.object.position.copy(t.position0),t.object.zoom=t.zoom0,t.object.updateProjectionMatrix(),t.dispatchEvent(a),t.update(),u=l.NONE},this.update=(()=>{const o=new T,p=new T(0,1,0),E=new ft().setFromUnitVectors(s.up,p),k=E.clone().invert(),W=new T,me=new ft,be=2*Math.PI;return function(){const ht=t.object.position;E.setFromUnitVectors(s.up,p),k.copy(E).invert(),o.copy(ht).sub(t.target),o.applyQuaternion(E),m.setFromVector3(o),t.autoRotate&&u===l.NONE&&B(F()),t.enableDamping?(m.theta+=h.theta*t.dampingFactor,m.phi+=h.phi*t.dampingFactor):(m.theta+=h.theta,m.phi+=h.phi);let fe=t.minAzimuthAngle,pe=t.maxAzimuthAngle;isFinite(fe)&&isFinite(pe)&&(fe<-Math.PI?fe+=be:fe>Math.PI&&(fe-=be),pe<-Math.PI?pe+=be:pe>Math.PI&&(pe-=be),fe<=pe?m.theta=Math.max(fe,Math.min(pe,m.theta)):m.theta=m.theta>(fe+pe)/2?Math.max(fe,m.theta):Math.min(pe,m.theta)),m.phi=Math.max(t.minPolarAngle,Math.min(t.maxPolarAngle,m.phi)),m.makeSafe(),t.enableDamping===!0?t.target.addScaledVector(y,t.dampingFactor):t.target.add(y),t.zoomToCursor&&N||t.object.isOrthographicCamera?m.radius=H(m.radius):m.radius=H(m.radius*x),o.setFromSpherical(m),o.applyQuaternion(k),ht.copy(t.target).add(o),t.object.matrixAutoUpdate||t.object.updateMatrix(),t.object.lookAt(t.target),t.enableDamping===!0?(h.theta*=1-t.dampingFactor,h.phi*=1-t.dampingFactor,y.multiplyScalar(1-t.dampingFactor)):(h.set(0,0,0),y.set(0,0,0));let Oe=!1;if(t.zoomToCursor&&N){let Ie=null;if(t.object instanceof De&&t.object.isPerspectiveCamera){const ze=o.length();Ie=H(ze*x);const We=ze-Ie;t.object.position.addScaledVector(f,We),t.object.updateMatrixWorld()}else if(t.object.isOrthographicCamera){const ze=new T(A.x,A.y,0);ze.unproject(t.object),t.object.zoom=Math.max(t.minZoom,Math.min(t.maxZoom,t.object.zoom/x)),t.object.updateProjectionMatrix(),Oe=!0;const We=new T(A.x,A.y,0);We.unproject(t.object),t.object.position.sub(We).add(ze),t.object.updateMatrixWorld(),Ie=o.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),t.zoomToCursor=!1;Ie!==null&&(t.screenSpacePanning?t.target.set(0,0,-1).transformDirection(t.object.matrix).multiplyScalar(Ie).add(t.object.position):($e.origin.copy(t.object.position),$e.direction.set(0,0,-1).transformDirection(t.object.matrix),Math.abs(t.object.up.dot($e.direction))<yn?s.lookAt(t.target):(Mt.setFromNormalAndCoplanarPoint(t.object.up,t.target),$e.intersectPlane(Mt,t.target))))}else t.object instanceof Ue&&t.object.isOrthographicCamera&&(Oe=x!==1,Oe&&(t.object.zoom=Math.max(t.minZoom,Math.min(t.maxZoom,t.object.zoom/x)),t.object.updateProjectionMatrix()));return x=1,N=!1,Oe||W.distanceToSquared(t.object.position)>g||8*(1-me.dot(t.object.quaternion))>g?(t.dispatchEvent(a),W.copy(t.object.position),me.copy(t.object.quaternion),Oe=!1,!0):!1}})(),this.connect=o=>{t.domElement=o,t.domElement.style.touchAction="none",t.domElement.addEventListener("contextmenu",dt),t.domElement.addEventListener("pointerdown",Ve),t.domElement.addEventListener("pointercancel",we),t.domElement.addEventListener("wheel",le)},this.dispose=()=>{var o,p,E,k,W,me;t.domElement&&(t.domElement.style.touchAction="auto"),(o=t.domElement)==null||o.removeEventListener("contextmenu",dt),(p=t.domElement)==null||p.removeEventListener("pointerdown",Ve),(E=t.domElement)==null||E.removeEventListener("pointercancel",we),(k=t.domElement)==null||k.removeEventListener("wheel",le),(W=t.domElement)==null||W.ownerDocument.removeEventListener("pointermove",ke),(me=t.domElement)==null||me.ownerDocument.removeEventListener("pointerup",we),t._domElementKeyEvents!==null&&t._domElementKeyEvents.removeEventListener("keydown",Qe)};const t=this,a={type:"change"},i={type:"start"},d={type:"end"},l={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let u=l.NONE;const g=1e-6,m=new mt,h=new mt;let x=1;const y=new T,R=new ee,M=new ee,j=new ee,P=new ee,O=new ee,S=new ee,v=new ee,L=new ee,b=new ee,f=new T,A=new ee;let N=!1;const _=[],C={};function F(){return 2*Math.PI/60/60*t.autoRotateSpeed}function D(){return Math.pow(.95,t.zoomSpeed)}function B(o){t.reverseOrbit||t.reverseHorizontalOrbit?h.theta+=o:h.theta-=o}function I(o){t.reverseOrbit||t.reverseVerticalOrbit?h.phi+=o:h.phi-=o}const V=(()=>{const o=new T;return function(E,k){o.setFromMatrixColumn(k,0),o.multiplyScalar(-E),y.add(o)}})(),U=(()=>{const o=new T;return function(E,k){t.screenSpacePanning===!0?o.setFromMatrixColumn(k,1):(o.setFromMatrixColumn(k,0),o.crossVectors(t.object.up,o)),o.multiplyScalar(E),y.add(o)}})(),Q=(()=>{const o=new T;return function(E,k){const W=t.domElement;if(W&&t.object instanceof De&&t.object.isPerspectiveCamera){const me=t.object.position;o.copy(me).sub(t.target);let be=o.length();be*=Math.tan(t.object.fov/2*Math.PI/180),V(2*E*be/W.clientHeight,t.object.matrix),U(2*k*be/W.clientHeight,t.object.matrix)}else W&&t.object instanceof Ue&&t.object.isOrthographicCamera?(V(E*(t.object.right-t.object.left)/t.object.zoom/W.clientWidth,t.object.matrix),U(k*(t.object.top-t.object.bottom)/t.object.zoom/W.clientHeight,t.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),t.enablePan=!1)}})();function te(o){t.object instanceof De&&t.object.isPerspectiveCamera||t.object instanceof Ue&&t.object.isOrthographicCamera?x=o:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),t.enableZoom=!1)}function X(o){te(x/o)}function K(o){te(x*o)}function Z(o){if(!t.zoomToCursor||!t.domElement)return;N=!0;const p=t.domElement.getBoundingClientRect(),E=o.clientX-p.left,k=o.clientY-p.top,W=p.width,me=p.height;A.x=E/W*2-1,A.y=-(k/me)*2+1,f.set(A.x,A.y,1).unproject(t.object).sub(t.object.position).normalize()}function H(o){return Math.max(t.minDistance,Math.min(t.maxDistance,o))}function xe(o){R.set(o.clientX,o.clientY)}function ae(o){Z(o),v.set(o.clientX,o.clientY)}function ye(o){P.set(o.clientX,o.clientY)}function Ce(o){M.set(o.clientX,o.clientY),j.subVectors(M,R).multiplyScalar(t.rotateSpeed);const p=t.domElement;p&&(B(2*Math.PI*j.x/p.clientHeight),I(2*Math.PI*j.y/p.clientHeight)),R.copy(M),t.update()}function re(o){L.set(o.clientX,o.clientY),b.subVectors(L,v),b.y>0?X(D()):b.y<0&&K(D()),v.copy(L),t.update()}function Se(o){O.set(o.clientX,o.clientY),S.subVectors(O,P).multiplyScalar(t.panSpeed),Q(S.x,S.y),P.copy(O),t.update()}function J(o){Z(o),o.deltaY<0?K(D()):o.deltaY>0&&X(D()),t.update()}function z(o){let p=!1;switch(o.code){case t.keys.UP:Q(0,t.keyPanSpeed),p=!0;break;case t.keys.BOTTOM:Q(0,-t.keyPanSpeed),p=!0;break;case t.keys.LEFT:Q(t.keyPanSpeed,0),p=!0;break;case t.keys.RIGHT:Q(-t.keyPanSpeed,0),p=!0;break}p&&(o.preventDefault(),t.update())}function oe(){if(_.length==1)R.set(_[0].pageX,_[0].pageY);else{const o=.5*(_[0].pageX+_[1].pageX),p=.5*(_[0].pageY+_[1].pageY);R.set(o,p)}}function se(){if(_.length==1)P.set(_[0].pageX,_[0].pageY);else{const o=.5*(_[0].pageX+_[1].pageX),p=.5*(_[0].pageY+_[1].pageY);P.set(o,p)}}function ge(){const o=_[0].pageX-_[1].pageX,p=_[0].pageY-_[1].pageY,E=Math.sqrt(o*o+p*p);v.set(0,E)}function Ee(){t.enableZoom&&ge(),t.enablePan&&se()}function Ze(){t.enableZoom&&ge(),t.enableRotate&&oe()}function ie(o){if(_.length==1)M.set(o.pageX,o.pageY);else{const E=et(o),k=.5*(o.pageX+E.x),W=.5*(o.pageY+E.y);M.set(k,W)}j.subVectors(M,R).multiplyScalar(t.rotateSpeed);const p=t.domElement;p&&(B(2*Math.PI*j.x/p.clientHeight),I(2*Math.PI*j.y/p.clientHeight)),R.copy(M)}function Re(o){if(_.length==1)O.set(o.pageX,o.pageY);else{const p=et(o),E=.5*(o.pageX+p.x),k=.5*(o.pageY+p.y);O.set(E,k)}S.subVectors(O,P).multiplyScalar(t.panSpeed),Q(S.x,S.y),P.copy(O)}function _e(o){const p=et(o),E=o.pageX-p.x,k=o.pageY-p.y,W=Math.sqrt(E*E+k*k);L.set(0,W),b.set(0,Math.pow(L.y/v.y,t.zoomSpeed)),X(b.y),v.copy(L)}function Fe(o){t.enableZoom&&_e(o),t.enablePan&&Re(o)}function qe(o){t.enableZoom&&_e(o),t.enableRotate&&ie(o)}function Ve(o){var p,E;t.enabled!==!1&&(_.length===0&&((p=t.domElement)==null||p.ownerDocument.addEventListener("pointermove",ke),(E=t.domElement)==null||E.ownerDocument.addEventListener("pointerup",we)),qt(o),o.pointerType==="touch"?Xt(o):Ke(o))}function ke(o){t.enabled!==!1&&(o.pointerType==="touch"?Zt(o):Je(o))}function we(o){var p,E,k;Kt(o),_.length===0&&((p=t.domElement)==null||p.releasePointerCapture(o.pointerId),(E=t.domElement)==null||E.ownerDocument.removeEventListener("pointermove",ke),(k=t.domElement)==null||k.ownerDocument.removeEventListener("pointerup",we)),t.dispatchEvent(d),u=l.NONE}function Ke(o){let p;switch(o.button){case 0:p=t.mouseButtons.LEFT;break;case 1:p=t.mouseButtons.MIDDLE;break;case 2:p=t.mouseButtons.RIGHT;break;default:p=-1}switch(p){case Me.DOLLY:if(t.enableZoom===!1)return;ae(o),u=l.DOLLY;break;case Me.ROTATE:if(o.ctrlKey||o.metaKey||o.shiftKey){if(t.enablePan===!1)return;ye(o),u=l.PAN}else{if(t.enableRotate===!1)return;xe(o),u=l.ROTATE}break;case Me.PAN:if(o.ctrlKey||o.metaKey||o.shiftKey){if(t.enableRotate===!1)return;xe(o),u=l.ROTATE}else{if(t.enablePan===!1)return;ye(o),u=l.PAN}break;default:u=l.NONE}u!==l.NONE&&t.dispatchEvent(i)}function Je(o){if(t.enabled!==!1)switch(u){case l.ROTATE:if(t.enableRotate===!1)return;Ce(o);break;case l.DOLLY:if(t.enableZoom===!1)return;re(o);break;case l.PAN:if(t.enablePan===!1)return;Se(o);break}}function le(o){t.enabled===!1||t.enableZoom===!1||u!==l.NONE&&u!==l.ROTATE||(o.preventDefault(),t.dispatchEvent(i),J(o),t.dispatchEvent(d))}function Qe(o){t.enabled===!1||t.enablePan===!1||z(o)}function Xt(o){switch(ut(o),_.length){case 1:switch(t.touches.ONE){case Te.ROTATE:if(t.enableRotate===!1)return;oe(),u=l.TOUCH_ROTATE;break;case Te.PAN:if(t.enablePan===!1)return;se(),u=l.TOUCH_PAN;break;default:u=l.NONE}break;case 2:switch(t.touches.TWO){case Te.DOLLY_PAN:if(t.enableZoom===!1&&t.enablePan===!1)return;Ee(),u=l.TOUCH_DOLLY_PAN;break;case Te.DOLLY_ROTATE:if(t.enableZoom===!1&&t.enableRotate===!1)return;Ze(),u=l.TOUCH_DOLLY_ROTATE;break;default:u=l.NONE}break;default:u=l.NONE}u!==l.NONE&&t.dispatchEvent(i)}function Zt(o){switch(ut(o),u){case l.TOUCH_ROTATE:if(t.enableRotate===!1)return;ie(o),t.update();break;case l.TOUCH_PAN:if(t.enablePan===!1)return;Re(o),t.update();break;case l.TOUCH_DOLLY_PAN:if(t.enableZoom===!1&&t.enablePan===!1)return;Fe(o),t.update();break;case l.TOUCH_DOLLY_ROTATE:if(t.enableZoom===!1&&t.enableRotate===!1)return;qe(o),t.update();break;default:u=l.NONE}}function dt(o){t.enabled!==!1&&o.preventDefault()}function qt(o){_.push(o)}function Kt(o){delete C[o.pointerId];for(let p=0;p<_.length;p++)if(_[p].pointerId==o.pointerId){_.splice(p,1);return}}function ut(o){let p=C[o.pointerId];p===void 0&&(p=new ee,C[o.pointerId]=p),p.set(o.pageX,o.pageY)}function et(o){const p=o.pointerId===_[0].pointerId?_[1]:_[0];return C[p.pointerId]}this.dollyIn=(o=D())=>{K(o),t.update()},this.dollyOut=(o=D())=>{X(o),t.update()},this.getScale=()=>x,this.setScale=o=>{te(o),t.update()},this.getZoomScale=()=>D(),n!==void 0&&this.connect(n),this.update()}};const Pt=new ot,Ye=new T;class lt extends ns{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";const s=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],n=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],t=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(t),this.setAttribute("position",new pt(s,3)),this.setAttribute("uv",new pt(n,2))}applyMatrix4(s){const n=this.attributes.instanceStart,t=this.attributes.instanceEnd;return n!==void 0&&(n.applyMatrix4(s),t.applyMatrix4(s),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(s){let n;s instanceof Float32Array?n=s:Array.isArray(s)&&(n=new Float32Array(s));const t=new at(n,6,1);return this.setAttribute("instanceStart",new Pe(t,3,0)),this.setAttribute("instanceEnd",new Pe(t,3,3)),this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(s,n=3){let t;s instanceof Float32Array?t=s:Array.isArray(s)&&(t=new Float32Array(s));const a=new at(t,n*2,1);return this.setAttribute("instanceColorStart",new Pe(a,n,0)),this.setAttribute("instanceColorEnd",new Pe(a,n,n)),this}fromWireframeGeometry(s){return this.setPositions(s.attributes.position.array),this}fromEdgesGeometry(s){return this.setPositions(s.attributes.position.array),this}fromMesh(s){return this.fromWireframeGeometry(new as(s.geometry)),this}fromLineSegments(s){const n=s.geometry;return this.setPositions(n.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ot);const s=this.attributes.instanceStart,n=this.attributes.instanceEnd;s!==void 0&&n!==void 0&&(this.boundingBox.setFromBufferAttribute(s),Pt.setFromBufferAttribute(n),this.boundingBox.union(Pt))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new It),this.boundingBox===null&&this.computeBoundingBox();const s=this.attributes.instanceStart,n=this.attributes.instanceEnd;if(s!==void 0&&n!==void 0){const t=this.boundingSphere.center;this.boundingBox.getCenter(t);let a=0;for(let i=0,d=s.count;i<d;i++)Ye.fromBufferAttribute(s,i),a=Math.max(a,t.distanceToSquared(Ye)),Ye.fromBufferAttribute(n,i),a=Math.max(a,t.distanceToSquared(Ye));this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(s){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(s)}}class $t extends lt{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(s){const n=s.length-3,t=new Float32Array(2*n);for(let a=0;a<n;a+=3)t[2*a]=s[a],t[2*a+1]=s[a+1],t[2*a+2]=s[a+2],t[2*a+3]=s[a+3],t[2*a+4]=s[a+4],t[2*a+5]=s[a+5];return super.setPositions(t),this}setColors(s,n=3){const t=s.length-n,a=new Float32Array(2*t);if(n===3)for(let i=0;i<t;i+=n)a[2*i]=s[i],a[2*i+1]=s[i+1],a[2*i+2]=s[i+2],a[2*i+3]=s[i+3],a[2*i+4]=s[i+4],a[2*i+5]=s[i+5];else for(let i=0;i<t;i+=n)a[2*i]=s[i],a[2*i+1]=s[i+1],a[2*i+2]=s[i+2],a[2*i+3]=s[i+3],a[2*i+4]=s[i+4],a[2*i+5]=s[i+5],a[2*i+6]=s[i+6],a[2*i+7]=s[i+7];return super.setColors(a,n),this}fromLine(s){const n=s.geometry;return this.setPositions(n.attributes.position.array),this}}class ct extends rs{constructor(s){super({type:"LineMaterial",uniforms:xt.clone(xt.merge([gt.common,gt.fog,{worldUnits:{value:1},linewidth:{value:1},resolution:{value:new ee(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}}])),vertexShader:`
				#include <common>
				#include <fog_pars_vertex>
				#include <logdepthbuf_pars_vertex>
				#include <clipping_planes_pars_vertex>

				uniform float linewidth;
				uniform vec2 resolution;

				attribute vec3 instanceStart;
				attribute vec3 instanceEnd;

				#ifdef USE_COLOR
					#ifdef USE_LINE_COLOR_ALPHA
						varying vec4 vLineColor;
						attribute vec4 instanceColorStart;
						attribute vec4 instanceColorEnd;
					#else
						varying vec3 vLineColor;
						attribute vec3 instanceColorStart;
						attribute vec3 instanceColorEnd;
					#endif
				#endif

				#ifdef WORLD_UNITS

					varying vec4 worldPos;
					varying vec3 worldStart;
					varying vec3 worldEnd;

					#ifdef USE_DASH

						varying vec2 vUv;

					#endif

				#else

					varying vec2 vUv;

				#endif

				#ifdef USE_DASH

					uniform float dashScale;
					attribute float instanceDistanceStart;
					attribute float instanceDistanceEnd;
					varying float vLineDistance;

				#endif

				void trimSegment( const in vec4 start, inout vec4 end ) {

					// trim end segment so it terminates between the camera plane and the near plane

					// conservative estimate of the near plane
					float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
					float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
					float nearEstimate = - 0.5 * b / a;

					float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

					end.xyz = mix( start.xyz, end.xyz, alpha );

				}

				void main() {

					#ifdef USE_COLOR

						vLineColor = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

					#endif

					#ifdef USE_DASH

						vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
						vUv = uv;

					#endif

					float aspect = resolution.x / resolution.y;

					// camera space
					vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
					vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

					#ifdef WORLD_UNITS

						worldStart = start.xyz;
						worldEnd = end.xyz;

					#else

						vUv = uv;

					#endif

					// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
					// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
					// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
					// perhaps there is a more elegant solution -- WestLangley

					bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

					if ( perspective ) {

						if ( start.z < 0.0 && end.z >= 0.0 ) {

							trimSegment( start, end );

						} else if ( end.z < 0.0 && start.z >= 0.0 ) {

							trimSegment( end, start );

						}

					}

					// clip space
					vec4 clipStart = projectionMatrix * start;
					vec4 clipEnd = projectionMatrix * end;

					// ndc space
					vec3 ndcStart = clipStart.xyz / clipStart.w;
					vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

					// direction
					vec2 dir = ndcEnd.xy - ndcStart.xy;

					// account for clip-space aspect ratio
					dir.x *= aspect;
					dir = normalize( dir );

					#ifdef WORLD_UNITS

						// get the offset direction as perpendicular to the view vector
						vec3 worldDir = normalize( end.xyz - start.xyz );
						vec3 offset;
						if ( position.y < 0.5 ) {

							offset = normalize( cross( start.xyz, worldDir ) );

						} else {

							offset = normalize( cross( end.xyz, worldDir ) );

						}

						// sign flip
						if ( position.x < 0.0 ) offset *= - 1.0;

						float forwardOffset = dot( worldDir, vec3( 0.0, 0.0, 1.0 ) );

						// don't extend the line if we're rendering dashes because we
						// won't be rendering the endcaps
						#ifndef USE_DASH

							// extend the line bounds to encompass  endcaps
							start.xyz += - worldDir * linewidth * 0.5;
							end.xyz += worldDir * linewidth * 0.5;

							// shift the position of the quad so it hugs the forward edge of the line
							offset.xy -= dir * forwardOffset;
							offset.z += 0.5;

						#endif

						// endcaps
						if ( position.y > 1.0 || position.y < 0.0 ) {

							offset.xy += dir * 2.0 * forwardOffset;

						}

						// adjust for linewidth
						offset *= linewidth * 0.5;

						// set the world position
						worldPos = ( position.y < 0.5 ) ? start : end;
						worldPos.xyz += offset;

						// project the worldpos
						vec4 clip = projectionMatrix * worldPos;

						// shift the depth of the projected points so the line
						// segments overlap neatly
						vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
						clip.z = clipPose.z * clip.w;

					#else

						vec2 offset = vec2( dir.y, - dir.x );
						// undo aspect ratio adjustment
						dir.x /= aspect;
						offset.x /= aspect;

						// sign flip
						if ( position.x < 0.0 ) offset *= - 1.0;

						// endcaps
						if ( position.y < 0.0 ) {

							offset += - dir;

						} else if ( position.y > 1.0 ) {

							offset += dir;

						}

						// adjust for linewidth
						offset *= linewidth;

						// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
						offset /= resolution.y;

						// select end
						vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

						// back to clip space
						offset *= clip.w;

						clip.xy += offset;

					#endif

					gl_Position = clip;

					vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

					#include <logdepthbuf_vertex>
					#include <clipping_planes_vertex>
					#include <fog_vertex>

				}
			`,fragmentShader:`
				uniform vec3 diffuse;
				uniform float opacity;
				uniform float linewidth;

				#ifdef USE_DASH

					uniform float dashOffset;
					uniform float dashSize;
					uniform float gapSize;

				#endif

				varying float vLineDistance;

				#ifdef WORLD_UNITS

					varying vec4 worldPos;
					varying vec3 worldStart;
					varying vec3 worldEnd;

					#ifdef USE_DASH

						varying vec2 vUv;

					#endif

				#else

					varying vec2 vUv;

				#endif

				#include <common>
				#include <fog_pars_fragment>
				#include <logdepthbuf_pars_fragment>
				#include <clipping_planes_pars_fragment>

				#ifdef USE_COLOR
					#ifdef USE_LINE_COLOR_ALPHA
						varying vec4 vLineColor;
					#else
						varying vec3 vLineColor;
					#endif
				#endif

				vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

					float mua;
					float mub;

					vec3 p13 = p1 - p3;
					vec3 p43 = p4 - p3;

					vec3 p21 = p2 - p1;

					float d1343 = dot( p13, p43 );
					float d4321 = dot( p43, p21 );
					float d1321 = dot( p13, p21 );
					float d4343 = dot( p43, p43 );
					float d2121 = dot( p21, p21 );

					float denom = d2121 * d4343 - d4321 * d4321;

					float numer = d1343 * d4321 - d1321 * d4343;

					mua = numer / denom;
					mua = clamp( mua, 0.0, 1.0 );
					mub = ( d1343 + d4321 * ( mua ) ) / d4343;
					mub = clamp( mub, 0.0, 1.0 );

					return vec2( mua, mub );

				}

				void main() {

					#include <clipping_planes_fragment>

					#ifdef USE_DASH

						if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

						if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

					#endif

					float alpha = opacity;

					#ifdef WORLD_UNITS

						// Find the closest points on the view ray and the line segment
						vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
						vec3 lineDir = worldEnd - worldStart;
						vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

						vec3 p1 = worldStart + lineDir * params.x;
						vec3 p2 = rayEnd * params.y;
						vec3 delta = p1 - p2;
						float len = length( delta );
						float norm = len / linewidth;

						#ifndef USE_DASH

							#ifdef USE_ALPHA_TO_COVERAGE

								float dnorm = fwidth( norm );
								alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

							#else

								if ( norm > 0.5 ) {

									discard;

								}

							#endif

						#endif

					#else

						#ifdef USE_ALPHA_TO_COVERAGE

							// artifacts appear on some hardware if a derivative is taken within a conditional
							float a = vUv.x;
							float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
							float len2 = a * a + b * b;
							float dlen = fwidth( len2 );

							if ( abs( vUv.y ) > 1.0 ) {

								alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

							}

						#else

							if ( abs( vUv.y ) > 1.0 ) {

								float a = vUv.x;
								float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
								float len2 = a * a + b * b;

								if ( len2 > 1.0 ) discard;

							}

						#endif

					#endif

					vec4 diffuseColor = vec4( diffuse, alpha );
					#ifdef USE_COLOR
						#ifdef USE_LINE_COLOR_ALPHA
							diffuseColor *= vLineColor;
						#else
							diffuseColor.rgb *= vLineColor;
						#endif
					#endif

					#include <logdepthbuf_fragment>

					gl_FragColor = diffuseColor;

					#include <tonemapping_fragment>
					#include <${Vt>=154?"colorspace_fragment":"encodings_fragment"}>
					#include <fog_fragment>
					#include <premultiplied_alpha_fragment>

				}
			`,clipping:!0}),this.isLineMaterial=!0,this.onBeforeCompile=function(){this.transparent?this.defines.USE_LINE_COLOR_ALPHA="1":delete this.defines.USE_LINE_COLOR_ALPHA},Object.defineProperties(this,{color:{enumerable:!0,get:function(){return this.uniforms.diffuse.value},set:function(n){this.uniforms.diffuse.value=n}},worldUnits:{enumerable:!0,get:function(){return"WORLD_UNITS"in this.defines},set:function(n){n===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}},linewidth:{enumerable:!0,get:function(){return this.uniforms.linewidth.value},set:function(n){this.uniforms.linewidth.value=n}},dashed:{enumerable:!0,get:function(){return"USE_DASH"in this.defines},set(n){!!n!="USE_DASH"in this.defines&&(this.needsUpdate=!0),n===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}},dashScale:{enumerable:!0,get:function(){return this.uniforms.dashScale.value},set:function(n){this.uniforms.dashScale.value=n}},dashSize:{enumerable:!0,get:function(){return this.uniforms.dashSize.value},set:function(n){this.uniforms.dashSize.value=n}},dashOffset:{enumerable:!0,get:function(){return this.uniforms.dashOffset.value},set:function(n){this.uniforms.dashOffset.value=n}},gapSize:{enumerable:!0,get:function(){return this.uniforms.gapSize.value},set:function(n){this.uniforms.gapSize.value=n}},opacity:{enumerable:!0,get:function(){return this.uniforms.opacity.value},set:function(n){this.uniforms.opacity.value=n}},resolution:{enumerable:!0,get:function(){return this.uniforms.resolution.value},set:function(n){this.uniforms.resolution.value.copy(n)}},alphaToCoverage:{enumerable:!0,get:function(){return"USE_ALPHA_TO_COVERAGE"in this.defines},set:function(n){!!n!="USE_ALPHA_TO_COVERAGE"in this.defines&&(this.needsUpdate=!0),n===!0?(this.defines.USE_ALPHA_TO_COVERAGE="",this.extensions.derivatives=!0):(delete this.defines.USE_ALPHA_TO_COVERAGE,this.extensions.derivatives=!1)}}}),this.setValues(s)}}const tt=new Le,At=new T,Lt=new T,$=new Le,Y=new Le,ce=new Le,st=new T,nt=new ls,G=new is,Ct=new T,Ge=new ot,Xe=new It,de=new Le;let he,Ne;function Rt(r,s,n){return de.set(0,0,-s,1).applyMatrix4(r.projectionMatrix),de.multiplyScalar(1/de.w),de.x=Ne/n.width,de.y=Ne/n.height,de.applyMatrix4(r.projectionMatrixInverse),de.multiplyScalar(1/de.w),Math.abs(Math.max(de.x,de.y))}function jn(r,s){const n=r.matrixWorld,t=r.geometry,a=t.attributes.instanceStart,i=t.attributes.instanceEnd,d=Math.min(t.instanceCount,a.count);for(let l=0,u=d;l<u;l++){G.start.fromBufferAttribute(a,l),G.end.fromBufferAttribute(i,l),G.applyMatrix4(n);const g=new T,m=new T;he.distanceSqToSegment(G.start,G.end,m,g),m.distanceTo(g)<Ne*.5&&s.push({point:m,pointOnLine:g,distance:he.origin.distanceTo(m),object:r,face:null,faceIndex:l,uv:null,[Wt]:null})}}function Nn(r,s,n){const t=s.projectionMatrix,i=r.material.resolution,d=r.matrixWorld,l=r.geometry,u=l.attributes.instanceStart,g=l.attributes.instanceEnd,m=Math.min(l.instanceCount,u.count),h=-s.near;he.at(1,ce),ce.w=1,ce.applyMatrix4(s.matrixWorldInverse),ce.applyMatrix4(t),ce.multiplyScalar(1/ce.w),ce.x*=i.x/2,ce.y*=i.y/2,ce.z=0,st.copy(ce),nt.multiplyMatrices(s.matrixWorldInverse,d);for(let x=0,y=m;x<y;x++){if($.fromBufferAttribute(u,x),Y.fromBufferAttribute(g,x),$.w=1,Y.w=1,$.applyMatrix4(nt),Y.applyMatrix4(nt),$.z>h&&Y.z>h)continue;if($.z>h){const S=$.z-Y.z,v=($.z-h)/S;$.lerp(Y,v)}else if(Y.z>h){const S=Y.z-$.z,v=(Y.z-h)/S;Y.lerp($,v)}$.applyMatrix4(t),Y.applyMatrix4(t),$.multiplyScalar(1/$.w),Y.multiplyScalar(1/Y.w),$.x*=i.x/2,$.y*=i.y/2,Y.x*=i.x/2,Y.y*=i.y/2,G.start.copy($),G.start.z=0,G.end.copy(Y),G.end.z=0;const M=G.closestPointToPointParameter(st,!0);G.at(M,Ct);const j=Ae.lerp($.z,Y.z,M),P=j>=-1&&j<=1,O=st.distanceTo(Ct)<Ne*.5;if(P&&O){G.start.fromBufferAttribute(u,x),G.end.fromBufferAttribute(g,x),G.start.applyMatrix4(d),G.end.applyMatrix4(d);const S=new T,v=new T;he.distanceSqToSegment(G.start,G.end,v,S),n.push({point:v,pointOnLine:S,distance:he.origin.distanceTo(v),object:r,face:null,faceIndex:x,uv:null,[Wt]:null})}}}class Yt extends os{constructor(s=new lt,n=new ct({color:Math.random()*16777215})){super(s,n),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){const s=this.geometry,n=s.attributes.instanceStart,t=s.attributes.instanceEnd,a=new Float32Array(2*n.count);for(let d=0,l=0,u=n.count;d<u;d++,l+=2)At.fromBufferAttribute(n,d),Lt.fromBufferAttribute(t,d),a[l]=l===0?0:a[l-1],a[l+1]=a[l]+At.distanceTo(Lt);const i=new at(a,2,1);return s.setAttribute("instanceDistanceStart",new Pe(i,1,0)),s.setAttribute("instanceDistanceEnd",new Pe(i,1,1)),this}raycast(s,n){const t=this.material.worldUnits,a=s.camera;a===null&&!t&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');const i=s.params.Line2!==void 0&&s.params.Line2.threshold||0;he=s.ray;const d=this.matrixWorld,l=this.geometry,u=this.material;Ne=u.linewidth+i,l.boundingSphere===null&&l.computeBoundingSphere(),Xe.copy(l.boundingSphere).applyMatrix4(d);let g;if(t)g=Ne*.5;else{const h=Math.max(a.near,Xe.distanceToPoint(he.origin));g=Rt(a,h,u.resolution)}if(Xe.radius+=g,he.intersectsSphere(Xe)===!1)return;l.boundingBox===null&&l.computeBoundingBox(),Ge.copy(l.boundingBox).applyMatrix4(d);let m;if(t)m=Ne*.5;else{const h=Math.max(a.near,Ge.distanceToPoint(he.origin));m=Rt(a,h,u.resolution)}Ge.expandByScalar(m),he.intersectsBox(Ge)!==!1&&(t?jn(this,n):Nn(this,a,n))}onBeforeRender(s){const n=this.material.uniforms;n&&n.resolution&&(s.getViewport(tt),this.material.uniforms.resolution.value.set(tt.z,tt.w))}}class Sn extends Yt{constructor(s=new $t,n=new ct({color:Math.random()*16777215})){super(s,n),this.isLine2=!0,this.type="Line2"}}const En=c.forwardRef(function({points:s,color:n=16777215,vertexColors:t,linewidth:a,lineWidth:i,segments:d,dashed:l,...u},g){var m,h;const x=q(P=>P.size),y=c.useMemo(()=>d?new Yt:new Sn,[d]),[R]=c.useState(()=>new ct),M=(t==null||(m=t[0])==null?void 0:m.length)===4?4:3,j=c.useMemo(()=>{const P=d?new lt:new $t,O=s.map(S=>{const v=Array.isArray(S);return S instanceof T||S instanceof Le?[S.x,S.y,S.z]:S instanceof ee?[S.x,S.y,0]:v&&S.length===3?[S[0],S[1],S[2]]:v&&S.length===2?[S[0],S[1],0]:S});if(P.setPositions(O.flat()),t){n=16777215;const S=t.map(v=>v instanceof cs?v.toArray():v);P.setColors(S.flat(),M)}return P},[s,d,t,M]);return c.useLayoutEffect(()=>{y.computeLineDistances()},[s,y]),c.useLayoutEffect(()=>{l?R.defines.USE_DASH="":delete R.defines.USE_DASH,R.needsUpdate=!0},[l,R]),c.useEffect(()=>()=>{j.dispose(),R.dispose()},[j]),c.createElement("primitive",ve({object:y,ref:g},u),c.createElement("primitive",{object:j,attach:"geometry"}),c.createElement("primitive",ve({object:R,attach:"material",color:n,vertexColors:!!t,resolution:[x.width,x.height],linewidth:(h=a??i)!==null&&h!==void 0?h:1,dashed:l,transparent:M===4},u)))});function _n(r,s,n){const t=q(y=>y.size),a=q(y=>y.viewport),i=typeof r=="number"?r:t.width*a.dpr,d=t.height*a.dpr,l=(typeof r=="number"?n:r)||{},{samples:u=0,depth:g,...m}=l,h=g??l.depthBuffer,x=c.useMemo(()=>{const y=new ds(i,d,{minFilter:bt,magFilter:bt,type:us,...m});return h&&(y.depthTexture=new hs(i,d,ms)),y.samples=u,y},[]);return c.useLayoutEffect(()=>{x.setSize(i,d),u&&(x.samples=u)},[u,x,i,d]),c.useEffect(()=>()=>x.dispose(),[]),x}const Mn=r=>typeof r=="function",Tn=c.forwardRef(({envMap:r,resolution:s=256,frames:n=1/0,makeDefault:t,children:a,...i},d)=>{const l=q(({set:j})=>j),u=q(({camera:j})=>j),g=q(({size:j})=>j),m=c.useRef(null);c.useImperativeHandle(d,()=>m.current,[]);const h=c.useRef(null),x=_n(s);c.useLayoutEffect(()=>{i.manual||(m.current.aspect=g.width/g.height)},[g,i]),c.useLayoutEffect(()=>{m.current.updateProjectionMatrix()});let y=0,R=null;const M=Mn(a);return Be(j=>{M&&(n===1/0||y<n)&&(h.current.visible=!1,j.gl.setRenderTarget(x),R=j.scene.background,r&&(j.scene.background=r),j.gl.render(j.scene,m.current),j.scene.background=R,j.gl.setRenderTarget(null),h.current.visible=!0,y++)}),c.useLayoutEffect(()=>{if(t){const j=u;return l(()=>({camera:m.current})),()=>l(()=>({camera:j}))}},[m,t,l]),c.createElement(c.Fragment,null,c.createElement("perspectiveCamera",ve({ref:m},i),!M&&a),c.createElement("group",{ref:h},M&&a(x.texture)))}),Pn=c.forwardRef(({makeDefault:r,camera:s,regress:n,domElement:t,enableDamping:a=!0,keyEvents:i=!1,onChange:d,onStart:l,onEnd:u,...g},m)=>{const h=q(b=>b.invalidate),x=q(b=>b.camera),y=q(b=>b.gl),R=q(b=>b.events),M=q(b=>b.setEvents),j=q(b=>b.set),P=q(b=>b.get),O=q(b=>b.performance),S=s||x,v=t||R.connected||y.domElement,L=c.useMemo(()=>new wn(S),[S]);return Be(()=>{L.enabled&&L.update()},-1),c.useEffect(()=>(i&&L.connect(i===!0?v:i),L.connect(v),()=>void L.dispose()),[i,v,n,L,h]),c.useEffect(()=>{const b=N=>{h(),n&&O.regress(),d&&d(N)},f=N=>{l&&l(N)},A=N=>{u&&u(N)};return L.addEventListener("change",b),L.addEventListener("start",f),L.addEventListener("end",A),()=>{L.removeEventListener("start",f),L.removeEventListener("end",A),L.removeEventListener("change",b)}},[d,l,u,L,h,M]),c.useEffect(()=>{if(r){const b=P().controls;return j({controls:L}),()=>j({controls:b})}},[r,L]),c.createElement("primitive",ve({ref:m,object:L,enableDamping:a},g))});function An(r,s){const n=r+"Geometry";return c.forwardRef(({args:t,children:a,...i},d)=>{const l=c.useRef(null);return c.useImperativeHandle(d,()=>l.current),c.useLayoutEffect(()=>void(s==null?void 0:s(l.current))),c.createElement("mesh",ve({ref:l},i),c.createElement(n,{attach:"geometry",args:t}),a)})}const Ln=An("sphere"),ue=1e-5;function Cn(r,s,n){const t=new fs,a=n-ue;return t.absarc(ue,ue,ue,-Math.PI/2,-Math.PI,!0),t.absarc(ue,s-a*2,ue,Math.PI,Math.PI/2,!0),t.absarc(r-a*2,s-a*2,ue,Math.PI/2,0,!0),t.absarc(r-a*2,ue,ue,0,-Math.PI/2,!0),t}const Rn=c.forwardRef(function({args:[s=1,n=1,t=1]=[],radius:a=.05,steps:i=1,smoothness:d=4,bevelSegments:l=4,creaseAngle:u=.4,children:g,...m},h){return c.createElement("mesh",ve({ref:h},m),c.createElement(kn,{args:[s,n,t],radius:a,steps:i,smoothness:d,bevelSegments:l,creaseAngle:u}),g)}),kn=c.forwardRef(function({args:[s=1,n=1,t=1]=[],radius:a=.05,steps:i=1,smoothness:d=4,bevelSegments:l=4,creaseAngle:u=.4,...g},m){const h=c.useMemo(()=>Cn(s,n,a),[s,n,a]),x=c.useMemo(()=>({depth:t-a*2,bevelEnabled:!0,bevelSegments:l*2,steps:i,bevelSize:a-ue,bevelThickness:a,curveSegments:d}),[t,a,d,l,i]),y=c.useRef(null);return c.useLayoutEffect(()=>{y.current&&(y.current.center(),mn(y.current,u))},[h,x,u]),c.useImperativeHandle(m,()=>y.current),c.createElement("extrudeGeometry",ve({ref:y,args:[h,x]},g))}),On=new T(0,-.11,0),In=new T(0,1,0),zn=new URL("/assets/profile-zcjknR5b.jpg",import.meta.url).href,Dn=({imageUrl:r=zn,name:s="Johnmark Calimbo",scale:n})=>{const{viewport:t}=q(),a=c.useMemo(()=>{const v=n||.9;return t.width<5?v*.55:t.width<7?v*.8:v},[t.width,n]),i=c.useMemo(()=>{const v=t.width>7?2.8:t.width/2-.6;return new T(v,3.2,0)},[t.width]),d=c.useRef(null),l=c.useRef(null),u=t.width>7?2.8:t.width/2-.6,g=c.useRef(new T(u,2.1,0)),m=c.useRef(new T(0,0,0)),h=c.useRef(new T(u,2.1,0)),x=c.useRef(!1),y=c.useMemo(()=>On.clone(),[]);c.useEffect(()=>{const v=()=>{x.current=!1};return window.addEventListener("pointerup",v),()=>{window.removeEventListener("pointerup",v)}},[]);const R=v=>{v.stopPropagation(),v.target.setPointerCapture(v.pointerId),x.current=!0},M=v=>{v.stopPropagation(),x.current=!1},j=ps(xs,r,v=>{v.setCrossOrigin("anonymous")}),P=c.useMemo(()=>{const b=document.createElement("canvas");b.width=1024,b.height=1382;const f=b.getContext("2d");if(!f)return null;f.fillStyle="#0a0a0a",f.fillRect(0,0,1024,1382),f.font="12px monospace",f.fillStyle="rgba(220, 38, 38, 0.05)";for(let F=20;F<1382;F+=25){let D="";for(let B=0;B<30;B++)D+=Math.random()>.5?"1":"0";f.fillText(D,10,F)}const A=60;f.fillStyle="#dc2626",f.fillRect(0,0,1024,120),f.fillStyle="#ffffff",f.font='bold 50px "JetBrains Mono", monospace',f.textAlign="center",f.fillText("RED TEAM // OPERATIVE",1024/2,80);const N=1024-A*2;if(f.fillStyle="#171717",f.fillRect(A-4,A+100,N+8,N+8),j&&j.image){const F=j.image;f.save();const D=A,B=A+104,I=N,V=N,U=4;f.beginPath(),f.moveTo(D+U,B),f.arcTo(D+I,B,D+I,B+V,U),f.arcTo(D+I,B+V,D,B+V,U),f.arcTo(D,B+V,D,B,U),f.arcTo(D,B,D+I,B,U),f.closePath(),f.clip();const Q=Math.max(I/F.width,V/F.height),te=F.width*Q,X=F.height*Q,K=D+(I-te)/2,Z=B+(V-X)/2;f.filter="grayscale(100%) contrast(110%)",f.drawImage(F,K,Z,te,X),f.filter="none",f.fillStyle="rgba(220, 38, 38, 0.1)";for(let H=0;H<V;H+=6)f.fillRect(D,B+H,I,1);f.restore()}const _=1222;f.fillStyle="#ffffff",f.font='bold 90px "JetBrains Mono", monospace',f.textAlign="center",f.fillText(s.toUpperCase(),1024/2,_),f.font="bold 36px monospace",f.fillStyle="#dc2626",f.fillText("OFFENSIVE SECURITY SPECIALIST",1024/2,_+50),f.fillStyle="#171717",f.fillRect(0,1302,1024,80),f.fillStyle="#737373",f.font="bold 24px monospace",f.fillText("PROPERTY OF YUE-OS // UNAUTHORIZED USE IS PROHIBITED",1024/2,1347);const C=new vt(b);return C.colorSpace=yt,C.anisotropy=16,C},[j,s]),O=c.useMemo(()=>{const b=document.createElement("canvas");b.width=1024,b.height=1382;const f=b.getContext("2d");if(!f)return null;f.fillStyle="#0a0a0a",f.fillRect(0,0,1024,1382),f.fillStyle="#1a1a1a",f.fillRect(0,100,1024,180);const A=80;f.fillStyle="#a3a3a3",f.font="24px monospace",f.textAlign="left",["NOTICE: This credential remains the property of YUE-OS.","If found, please return to the nearest security office.","Any unauthorized attempt to use or replicate this badge","will be detected and responded to by active counter-measures.","","RED TEAM OPERATIVE // CLASSIFIED ACCESS LEVEL 5","SUBJECT ID: 0x"+Math.random().toString(16).slice(2,10).toUpperCase()].forEach((C,F)=>{f.fillText(C,A,350+F*40)}),f.fillStyle="#ffffff";for(let C=0;C<40;C++){const F=Math.random()*20+2;f.fillRect(A+C*22,1082,F,150)}f.save(),f.translate(1024/2,1382/2+200),f.rotate(-Math.PI/4),f.globalAlpha=.15,f.fillStyle="#dc2626",f.font="bold 150px monospace",f.textAlign="center",f.fillText("RESTRICTED",0,0),f.restore();const _=new vt(b);return _.colorSpace=yt,_.anisotropy=16,_},[]),S=c.useMemo(()=>new gs,[]);return Be((v,L)=>{if(!d.current||!l.current)return;const b=Math.min(L,1/30);S.update();const f=S.getElapsed(),A=g.current,N=m.current;if(x.current){const K=v.viewport.getCurrentViewport(v.camera,[0,0,0]),Z=new T(v.pointer.x*K.width/2,v.pointer.y*K.height/2,0);h.current.lerp(Z,.4);const H=h.current.clone().sub(A).multiplyScalar(50);N.addScaledVector(H,b),N.multiplyScalar(.72)}else{N.y-=9.81*b,N.multiplyScalar(Math.exp(-1.8*b));const K=A.clone().sub(i),Z=Math.max(K.length(),1e-4),H=K.multiplyScalar(1/Z),ae=Z-1.05,ye=ae>0?60+ae*45:15,Ce=8.5,re=N.dot(H),Se=-ye*ae-Ce*re;N.addScaledVector(H,Se*b),N.x+=Math.sin(f*1.5)*b*.15,N.z+=Math.cos(f*1.8)*b*.1}A.addScaledVector(N,b),A.y=Math.min(A.y,4),d.current.position.copy(A),d.current.scale.setScalar(a);const _=A.clone().sub(i).normalize(),C=-_.x*1.2+N.x*.15,F=_.y*.2+N.y*.05+(x.current?.4:0),D=N.x*.1+(x.current?v.pointer.x*1.2:0);d.current.rotation.z=Ae.lerp(d.current.rotation.z,C,.2),d.current.rotation.x=Ae.lerp(d.current.rotation.x,F,.15),d.current.rotation.y=Ae.lerp(d.current.rotation.y,D,.15);const I=y.clone().applyMatrix4(d.current.matrixWorld).clone().sub(i),V=Math.max(I.length(),1e-4),U=I.clone().multiplyScalar(1/V),Q=i.clone().addScaledVector(U,V*.5);l.current.position.copy(Q),l.current.quaternion.setFromUnitVectors(In,U);const te=V/1.05,X=Math.max(.3,1/Math.pow(te,.5));l.current.scale.set(X,V,X)}),e.jsxs("group",{children:[e.jsxs("mesh",{position:i.toArray(),castShadow:!0,frustumCulled:!1,children:[e.jsx("sphereGeometry",{args:[.08,24,24]}),e.jsx("meshStandardMaterial",{color:"#b3c0d1",metalness:.85,roughness:.2})]}),e.jsxs("mesh",{ref:l,castShadow:!0,frustumCulled:!1,children:[e.jsx("cylinderGeometry",{args:[.016,.012,1,18]}),e.jsx("meshStandardMaterial",{color:"#2d3748",roughness:.55})]}),e.jsx("group",{ref:d,children:e.jsxs("group",{position:[0,-.82,0],children:[e.jsx(Rn,{args:[1.08,1.42,.055],radius:.06,smoothness:8,castShadow:!0,receiveShadow:!0,frustumCulled:!1,children:e.jsx("meshStandardMaterial",{color:"#171717",roughness:.4,metalness:.2})}),e.jsxs("mesh",{position:[0,.52,.032],castShadow:!0,frustumCulled:!1,children:[e.jsx("cylinderGeometry",{args:[.06,.06,.03,24]}),e.jsx("meshStandardMaterial",{color:"#101626",roughness:.45})]}),e.jsxs("mesh",{position:[0,.52,.04],frustumCulled:!1,children:[e.jsx("torusGeometry",{args:[.09,.015,16,30]}),e.jsx("meshStandardMaterial",{color:"#c7d4eb",metalness:.9,roughness:.2})]}),e.jsxs("mesh",{position:[0,-.04,.073],onPointerDown:R,onPointerUp:M,frustumCulled:!1,children:[e.jsx("boxGeometry",{args:[1.14,1.66,.18]}),e.jsx("meshStandardMaterial",{color:"#000000",transparent:!0,opacity:0,depthWrite:!1})]}),P&&e.jsxs("mesh",{position:[0,0,.05],rotation:[0,0,0],frustumCulled:!1,children:[e.jsx("planeGeometry",{args:[1.02,1.38]}),e.jsx("meshStandardMaterial",{map:P,transparent:!0,roughness:.2,metalness:.1})]},`${s}-front`),O&&e.jsxs("mesh",{position:[0,0,-.05],rotation:[0,Math.PI,0],frustumCulled:!1,children:[e.jsx("planeGeometry",{args:[1.02,1.38]}),e.jsx("meshStandardMaterial",{map:O,transparent:!0,roughness:.2,metalness:.1})]},`${s}-back`)]})})]})},Un=({scale:r})=>e.jsx(zt,{dpr:[1,2],camera:{position:[0,0,6],fov:45,near:.1,far:1e3},gl:{antialias:!0,alpha:!0,powerPreference:"high-performance"},shadows:!0,style:{pointerEvents:"auto"},children:e.jsxs(c.Suspense,{fallback:null,children:[e.jsx("ambientLight",{intensity:.72}),e.jsx("directionalLight",{castShadow:!0,position:[2.3,3.2,3],intensity:1.18,"shadow-mapSize-width":1024,"shadow-mapSize-height":1024}),e.jsx("pointLight",{position:[0,0,-5],intensity:.8,color:"#ffffff"}),e.jsx("spotLight",{position:[-1.8,2.4,2.8],intensity:.55,angle:.45,penumbra:.6}),e.jsx(Dn,{scale:r})]})}),Bn=()=>e.jsxs("section",{className:"relative min-h-screen w-full overflow-hidden pt-24",children:[e.jsx(sn,{}),e.jsx("div",{className:"absolute inset-0 z-[35] pointer-events-none",children:e.jsx(Un,{})}),e.jsx("div",{className:"absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.18),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(225,29,72,0.12),transparent_28%),linear-gradient(180deg,rgba(2,6,23,0.15)_0%,rgba(2,6,23,0.55)_58%,rgba(2,6,23,0.92)_100%)] z-10"}),e.jsxs("div",{className:"section-shell relative z-20 grid min-h-[calc(100vh-6rem)] items-center gap-10 pb-16 lg:grid-cols-[1.15fr_0.85fr]",children:[e.jsxs("div",{className:"max-w-3xl",children:[e.jsx("div",{className:"section-kicker mb-6 w-fit",children:"SYSTEM ONLINE"}),e.jsxs("h1",{className:"max-w-4xl text-5xl font-bold leading-[0.95] text-white md:text-7xl lg:text-8xl",children:[e.jsx("span",{className:"block text-glow-cyan",children:"John Mark"}),e.jsx("span",{className:"block text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-white to-rose-400",children:"Calimbo"})]}),e.jsxs("p",{className:"mt-6 max-w-2xl text-base leading-8 text-slate-300 md:text-lg",children:[bs," ",e.jsx("span",{className:"text-cyan-400 font-bold",children:vs})]}),e.jsxs("div",{className:"mt-10 flex flex-col gap-6 sm:flex-row",children:[e.jsxs("a",{href:"#projects",className:"cyber-button group inline-flex items-center justify-center gap-2",children:["Access Arsenal ",e.jsx(Ds,{className:"w-4 h-4 transition-transform group-hover:translate-x-1"})]}),e.jsx("a",{href:"#contact",className:"inline-flex items-center justify-center rounded-sm border border-rose-500/50 bg-rose-500/5 px-8 py-4 text-sm font-bold uppercase tracking-widest text-rose-100 transition-all hover:bg-rose-500/20 hover:text-white hover:shadow-[0_0_15px_rgba(244,63,94,0.3)]",children:"Initialize Contact"})]}),e.jsx("div",{className:"mt-10 grid gap-4 sm:grid-cols-3",children:[{icon:Qs,label:"Build style",value:"Fast, sharp, interactive"},{icon:Ht,label:"Security",value:"Testing, hardening, audits"},{icon:Ys,label:"Scope",value:"Games, web, and tools"}].map(r=>{const s=r.icon;return e.jsxs("div",{className:"glass-panel rounded-2xl border border-white/10 p-4",children:[e.jsx("div",{className:"mb-3 inline-flex rounded-xl border border-cyan-400/15 bg-cyan-400/10 p-2 text-cyan-300",children:e.jsx(s,{className:"h-4 w-4"})}),e.jsx("p",{className:"text-xs uppercase tracking-[0.24em] text-slate-400",children:r.label}),e.jsx("p",{className:"mt-2 text-sm text-slate-200",children:r.value})]},r.label)})})]}),e.jsx("div",{className:"relative",children:e.jsxs("div",{className:"glass-panel relative overflow-hidden rounded-[2rem] border border-white/10 p-6 md:p-8",children:[e.jsx("div",{className:"absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.14),transparent_36%),radial-gradient(circle_at_bottom_right,rgba(225,29,72,0.12),transparent_30%)]"}),e.jsxs("div",{className:"relative space-y-5",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-bold uppercase tracking-[0.25em] text-slate-300",children:"Mission Panel"}),e.jsx("span",{className:"text-xs text-emerald-300",children:"Ready"})]}),e.jsxs("div",{className:"grid gap-4",children:[e.jsxs("div",{className:"rounded-2xl border border-white/10 bg-[#020617]/70 p-4",children:[e.jsx("p",{className:"text-xs uppercase tracking-[0.22em] text-cyan-300",children:"Primary Focus"}),e.jsx("p",{className:"mt-2 text-lg font-bold text-white",children:"Interactive systems with strong visual identity."})]}),e.jsxs("div",{className:"rounded-2xl border border-white/10 bg-[#020617]/70 p-4",children:[e.jsx("p",{className:"text-xs uppercase tracking-[0.22em] text-rose-300",children:"Current Stack"}),e.jsx("p",{className:"mt-2 text-sm text-slate-300",children:"React, Three.js, Godot, Unity, Node.js, Linux tooling."})]}),e.jsxs("div",{className:"rounded-2xl border border-white/10 bg-[#020617]/70 p-4",children:[e.jsx("p",{className:"text-xs uppercase tracking-[0.22em] text-purple-300",children:"Delivery Style"}),e.jsx("p",{className:"mt-2 text-sm text-slate-300",children:"Small iterations, clean systems, and visible progress."})]})]})]})]})})]}),e.jsx("div",{className:"absolute bottom-8 left-1/2 z-20 -translate-x-1/2 animate-bounce text-slate-500",children:e.jsx(Hs,{className:"w-6 h-6"})})]}),Hn=()=>e.jsxs("section",{className:"relative py-10 md:py-14",children:[e.jsx("div",{className:"absolute inset-0 pointer-events-none bg-[linear-gradient(90deg,rgba(34,211,238,0.03)_1px,transparent_1px),linear-gradient(180deg,rgba(34,211,238,0.03)_1px,transparent_1px)] bg-[size:48px_48px] opacity-60"}),e.jsxs("div",{className:"section-shell relative z-10",children:[e.jsxs("div",{className:"mb-6 flex items-end justify-between gap-4",children:[e.jsxs("div",{children:[e.jsx("div",{className:"section-kicker mb-3 w-fit",children:"Operational Snapshot"}),e.jsx("h2",{className:"section-title",children:"Built for momentum"})]}),e.jsx("p",{className:"hidden max-w-xl text-right text-sm text-slate-400 md:block",children:"A quick read on experience, breadth, and throughput before the deeper sections."})]}),e.jsx("div",{className:"grid grid-cols-1 gap-4 md:grid-cols-3",children:ys.map((r,s)=>{const n=r.icon;return e.jsx(je,{delay:s*100,children:e.jsxs("div",{className:"glass-panel group p-8 cyber-corners transition-all hover:-translate-y-2",children:[e.jsxs("div",{className:"hud-tag",children:["System_Resource_",s+1]}),e.jsxs("div",{className:"flex items-start justify-between gap-4 relative z-10",children:[e.jsxs("div",{children:[e.jsxs("p",{className:"text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500",children:["Resource: ",r.label]}),e.jsx("h3",{className:`mt-2 text-4xl font-bold ${r.color} transition-colors group-hover:text-glow-cyan`,children:r.value})]}),e.jsx("div",{className:`rounded-sm border border-white/10 bg-white/5 p-4 ${r.color} transition-transform duration-500 group-hover:rotate-[360deg]`,children:e.jsx(n,{className:"h-6 w-6"})})]}),e.jsxs("div",{className:"mt-8",children:[e.jsxs("div",{className:"flex justify-between mb-2",children:[e.jsx("span",{className:"text-[8px] font-mono text-slate-600",children:"CAPACITY_LINK // SECURE"}),e.jsx("span",{className:"text-[8px] font-mono text-slate-600",children:"85%"})]}),e.jsx("div",{className:"h-[2px] w-full bg-white/5 overflow-hidden",children:e.jsx("div",{className:`h-full bg-gradient-to-r ${s===0?"from-cyan-400 to-cyan-200":s===1?"from-purple-400 to-fuchsia-300":"from-rose-400 to-orange-300"} w-[85%] transition-all duration-1000 group-hover:w-full`})})]})]})},s)})})]})]}),Fn=()=>e.jsx("section",{id:"services",className:"relative py-20 overflow-hidden",children:e.jsxs("div",{className:"section-shell",children:[e.jsxs("div",{className:"mb-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end",children:[e.jsx(je,{children:e.jsxs("div",{children:[e.jsx("div",{className:"section-kicker mb-4 w-fit",children:"Services"}),e.jsxs("h2",{className:"section-title",children:["The ",e.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-white to-rose-300",children:"Triple Threat"})]})]})}),e.jsx(je,{delay:80,children:e.jsx("p",{className:"section-copy lg:ml-auto lg:text-right",children:"Bridging creative design, robust engineering, and defensive security through a system that feels more like a command console than a résumé."})})]}),e.jsxs("div",{className:"grid gap-6 lg:grid-cols-[0.8fr_1.2fr]",children:[e.jsx(je,{className:"h-full",children:e.jsxs("div",{className:"glass-panel h-full border border-white/5 p-8 lg:p-12 relative overflow-hidden cyber-corners",children:[e.jsx("div",{className:"hud-tag",children:"Execution_Core"}),e.jsx("div",{className:"absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.03)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none"}),e.jsxs("div",{className:"relative z-10",children:[e.jsx("p",{className:"text-[10px] font-bold uppercase tracking-[0.4em] text-cyan-400 mb-6",children:"Execution_Strategy"}),e.jsx("h3",{className:"text-4xl font-bold text-white leading-tight",children:"Fast loops. High-fidelity output."}),e.jsx("p",{className:"mt-6 text-slate-400 leading-relaxed",children:"Each build follows a rigorous cycle: prototype deployment, rapid refinement, and security-hardened delivery. No overhead, just pure performance."}),e.jsx("div",{className:"mt-12 space-y-4",children:[{label:"Phase 01",title:"Prototype Logic"},{label:"Phase 02",title:"Stress Testing"},{label:"Phase 03",title:"Stable Deployment"}].map((r,s)=>e.jsxs("div",{className:"flex items-center justify-between border-b border-white/5 pb-4",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-[8px] font-mono text-slate-600 tracking-widest uppercase",children:r.label}),e.jsx("p",{className:"text-sm font-bold text-slate-200 mt-1",children:r.title})]}),e.jsx("div",{className:"h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_10px_#22d3ee]"})]},s))})]})]})}),e.jsx("div",{className:"grid gap-6",children:ws.map((r,s)=>{const n=r.icon;let t="",a="";return r.color==="cyan"?(t="text-cyan-400",a="shadow-[0_0_20px_rgba(34,211,238,0.1)] hover:border-cyan-500/40"):r.color==="crimson"?(t="text-rose-500",a="shadow-[0_0_20px_rgba(244,63,94,0.1)] hover:border-rose-500/40"):(t="text-purple-500",a="shadow-[0_0_20px_rgba(168,85,247,0.1)] hover:border-purple-500/40"),e.jsx(je,{delay:s*150,className:"h-full",children:e.jsxs("div",{className:`
                  glass-panel h-full border border-white/5 p-8
                  transition-all duration-500 group relative cyber-corners
                  ${a}
                `,children:[e.jsxs("div",{className:"hud-tag",children:["Eng_Module_0",s+1]}),e.jsxs("div",{className:"flex flex-col md:flex-row gap-8 items-start relative z-10",children:[e.jsx("div",{className:"flex-shrink-0",children:e.jsxs("div",{className:"rounded-sm border border-white/10 bg-white/5 p-5 relative overflow-hidden",children:[e.jsx(n,{className:`w-8 h-8 ${t} relative z-10 transition-transform duration-500 group-hover:scale-110`}),e.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"})]})}),e.jsxs("div",{className:"flex-grow",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[e.jsx("h3",{className:"text-2xl font-bold text-white uppercase tracking-wider",children:r.title}),e.jsx("span",{className:"h-[1px] flex-grow bg-white/5"})]}),e.jsx("p",{className:"mb-8 leading-relaxed text-slate-400 text-sm max-w-xl group-hover:text-slate-200 transition-colors",children:r.description}),e.jsx("div",{className:"flex flex-wrap gap-x-6 gap-y-3",children:r.skills.map((i,d)=>e.jsxs("div",{className:"flex items-center gap-2 group/skill",children:[e.jsx("span",{className:`w-1 h-3 ${r.color==="cyan"?"bg-cyan-500":r.color==="crimson"?"bg-rose-500":"bg-purple-500"} opacity-30 group-hover/skill:opacity-100 transition-opacity`}),e.jsx("span",{className:"text-[10px] font-bold uppercase tracking-widest text-slate-500 group-hover/skill:text-white transition-colors",children:i})]},d))})]})]}),e.jsxs("div",{className:"absolute bottom-4 right-6 font-mono text-[8px] text-slate-700",children:["MODULE_",r.title.replace(" ","_").toUpperCase()," // STABLE"]})]})},s)})})]})]})}),Vn=()=>e.jsx("section",{id:"experience",className:"relative py-20",children:e.jsxs("div",{className:"section-shell",children:[e.jsxs("div",{className:"mb-16",children:[e.jsx("div",{className:"section-kicker mb-4 w-fit",children:"Track Record"}),e.jsxs("h2",{className:"section-title",children:["Professional ",e.jsx("span",{className:"text-cyan-300",children:"Progression"})]}),e.jsx("p",{className:"section-copy mt-4",children:"A chronological timeline of technical leadership, system architecture, and defensive security engagements."})]}),e.jsxs("div",{className:"relative max-w-4xl mx-auto",children:[e.jsx("div",{className:"absolute left-0 md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-cyan-500/50 via-white/10 to-rose-500/50 hidden md:block"}),e.jsx("div",{className:"space-y-12",children:js.map((r,s)=>e.jsx(je,{delay:s*100,direction:s%2===0?"left":"right",children:e.jsxs("div",{className:`relative flex flex-col md:flex-row items-center gap-8 ${s%2===0?"md:flex-row-reverse":""}`,children:[e.jsx("div",{className:"absolute left-[-5px] md:left-1/2 md:ml-[-5px] top-0 w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_10px_#22d3ee] z-10 hidden md:block"}),e.jsxs("div",{className:"flex md:hidden items-center gap-2 text-cyan-400 font-mono text-xs mb-2",children:[e.jsx(St,{className:"w-3 h-3"}),r.period]}),e.jsx("div",{className:"w-full md:w-1/2",children:e.jsxs("div",{className:"glass-panel p-8 border border-white/5 relative overflow-hidden group hover:border-cyan-500/30 transition-all duration-500 cyber-corners",children:[e.jsxs("div",{className:"hud-tag",children:["Experience_Entry_0",s+1]}),e.jsx("div",{className:"absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"}),e.jsxs("div",{className:"flex justify-between items-start mb-4",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-xl font-bold text-white group-hover:text-cyan-300 transition-colors uppercase tracking-wider",children:r.role}),e.jsx("p",{className:"text-cyan-400 font-mono text-sm mt-1",children:r.company})]}),e.jsxs("div",{className:"hidden md:flex items-center gap-2 text-slate-500 font-mono text-[10px] uppercase tracking-widest",children:[e.jsx(St,{className:"w-3 h-3"}),r.period]})]}),e.jsx("ul",{className:"space-y-3 mb-6",children:r.description.map((n,t)=>e.jsxs("li",{className:"flex gap-3 text-sm text-slate-400 leading-relaxed",children:[e.jsx(Vs,{className:"w-4 h-4 text-cyan-500 flex-shrink-0 mt-0.5"}),e.jsx("span",{children:n})]},t))}),e.jsx("div",{className:"flex flex-wrap gap-2",children:r.skills.map(n=>e.jsx("span",{className:"px-3 py-1 rounded-sm border border-white/10 bg-white/5 text-[9px] font-bold uppercase tracking-widest text-slate-500",children:n},n))})]})}),e.jsx("div",{className:"hidden md:block w-1/2"})]})},r.id))})]})]})}),Wn=({project:r,onClose:s})=>(c.useEffect(()=>(r?document.body.style.overflow="hidden":document.body.style.overflow="unset",()=>{document.body.style.overflow="unset"}),[r]),r?e.jsxs("div",{className:"fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8",children:[e.jsx("div",{className:"absolute inset-0 bg-slate-950/80 backdrop-blur-md transition-opacity duration-500",onClick:s}),e.jsxs("div",{className:"relative w-full max-w-5xl overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/90 shadow-[0_0_100px_rgba(0,0,0,0.5)] animate-in fade-in zoom-in duration-300 cyber-corners",children:[e.jsxs("div",{className:"hud-tag",children:["System_Dossier_0X",r.id.toUpperCase()]}),e.jsx("div",{className:"absolute top-0 left-0 h-[2px] w-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_15px_#22d3ee]"}),e.jsx("button",{onClick:s,className:"absolute top-6 right-6 z-50 rounded-full border border-white/10 bg-white/5 p-3 text-slate-400 transition-all hover:bg-rose-500/20 hover:text-white",children:e.jsx(Ns,{className:"w-5 h-5"})}),e.jsxs("div",{className:"grid lg:grid-cols-[0.45fr_0.55fr] max-h-[85vh] overflow-y-auto",children:[e.jsxs("div",{className:"relative h-64 lg:h-auto overflow-hidden border-b lg:border-b-0 lg:border-r border-white/5",children:[e.jsx("img",{src:r.imageUrl,alt:r.title,className:"h-full w-full object-cover opacity-60 transition-transform duration-1000"}),e.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-slate-900"}),e.jsx("div",{className:"absolute bottom-6 left-6 flex items-center gap-3",children:e.jsx("div",{className:"rounded-sm border border-cyan-400/30 bg-black/60 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-400 backdrop-blur-md",children:r.category})})]}),e.jsxs("div",{className:"flex flex-col p-8 lg:p-12",children:[e.jsxs("div",{className:"mb-8",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx(Dt,{className:"w-4 h-4 text-cyan-400"}),e.jsxs("span",{className:"text-[10px] font-mono text-slate-500 tracking-[0.3em]",children:["SYSTEM_RECORD_ID_0X",r.id.toUpperCase()]})]}),e.jsx("h2",{className:"text-4xl md:text-5xl font-bold text-white mb-6 leading-tight",children:r.title}),e.jsx("p",{className:"text-slate-400 text-base md:text-lg leading-relaxed mb-8",children:r.description}),e.jsxs("div",{className:"grid grid-cols-2 gap-4 mb-8",children:[e.jsxs("div",{className:"rounded-2xl border border-white/5 bg-white/5 p-4 transition-all hover:border-cyan-400/20",children:[e.jsx(Ht,{className:"w-5 h-5 text-cyan-400 mb-3"}),e.jsx("p",{className:"text-[10px] font-bold text-slate-500 uppercase tracking-widest",children:"Status"}),e.jsx("p",{className:"text-sm font-bold text-slate-200 mt-1",children:"Operational"})]}),e.jsxs("div",{className:"rounded-2xl border border-white/5 bg-white/5 p-4 transition-all hover:border-rose-400/20",children:[e.jsx(Ss,{className:"w-5 h-5 text-rose-400 mb-3"}),e.jsx("p",{className:"text-[10px] font-bold text-slate-500 uppercase tracking-widest",children:"Complexity"}),e.jsx("p",{className:"text-sm font-bold text-slate-200 mt-1",children:"High-Level"})]})]}),e.jsx("div",{className:"space-y-6",children:e.jsxs("div",{children:[e.jsx("h4",{className:"text-xs font-bold text-slate-500 uppercase tracking-[0.2em] mb-4",children:"Core Technology Stack"}),e.jsx("div",{className:"flex flex-wrap gap-2",children:r.techStack.map(n=>e.jsx("span",{className:"rounded-sm border border-white/10 bg-white/5 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-300",children:n},n))})]})})]}),e.jsxs("div",{className:"mt-auto flex flex-col sm:flex-row gap-4",children:[e.jsxs("a",{href:"#",className:"cyber-button flex items-center justify-center gap-3 text-center",children:[e.jsx(Bt,{className:"w-4 h-4"}),"Initialize Deployment"]}),e.jsxs("a",{href:"#",className:"inline-flex items-center justify-center gap-3 rounded-sm border border-white/10 bg-white/5 px-8 py-4 text-xs font-bold uppercase tracking-widest text-slate-400 transition-all hover:bg-white/10 hover:text-white",children:[e.jsx(Ut,{className:"w-4 h-4"}),"Access Repository"]})]})]})]})]})]}):null),$n=()=>{const[r,s]=c.useState(null);return e.jsxs("section",{id:"projects",className:"relative py-20",children:[e.jsx("div",{className:"absolute top-0 right-0 h-full w-1/3 bg-purple-500/5 blur-[110px] pointer-events-none"}),e.jsx("div",{className:"absolute bottom-0 left-0 h-full w-1/3 bg-cyan-500/5 blur-[110px] pointer-events-none"}),e.jsxs("div",{className:"section-shell relative z-10",children:[e.jsxs("div",{className:"mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between",children:[e.jsxs("div",{children:[e.jsx("div",{className:"section-kicker mb-4 w-fit",children:"Selected Work"}),e.jsxs("h2",{className:"section-title",children:["Featured ",e.jsx("span",{className:"text-cyan-300",children:"Arsenal"})]})]}),e.jsx("p",{className:"section-copy md:text-right",children:"A curated mix of game systems, full-stack products, and experimental builds laid out as a primary case study with supporting pieces."})]}),e.jsx("div",{className:"grid gap-8 lg:grid-cols-12",children:Es.map((n,t)=>{let a="lg:col-span-4",i="min-h-[24rem]",d=!1;return t===0?(a="lg:col-span-12",i="min-h-[30rem] lg:min-h-[40rem]",d=!0):t===1||t===2?a="lg:col-span-6":t>=3&&t<=5?a="lg:col-span-4":t===6||t===9?a="lg:col-span-8":a="lg:col-span-4",e.jsx(je,{delay:t*50,className:a,children:e.jsx(_s,{onClick:()=>s(n),className:`${i} cursor-pointer group`,children:e.jsxs("div",{className:"glass-panel relative h-full w-full overflow-hidden border border-white/5 transition-all duration-500 hover:border-cyan-500/50 hover:shadow-[0_0_50px_rgba(34,211,238,0.1)] preserve-3d",children:[e.jsxs("div",{className:"absolute inset-0 z-0",children:[e.jsx("img",{src:n.imageUrl,alt:n.title,className:"h-full w-full object-cover opacity-50 transition-all duration-1000 group-hover:scale-110 group-hover:opacity-80 group-hover:rotate-1"}),e.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/60 to-transparent"})]}),e.jsxs("div",{className:"absolute inset-0 z-10 pointer-events-none",children:[e.jsx("div",{className:"absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-cyan-400/30 transition-all duration-500 group-hover:w-full group-hover:h-full group-hover:border-cyan-400/10"}),e.jsx("div",{className:"absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-rose-500/30 transition-all duration-500 group-hover:w-full group-hover:h-full group-hover:border-rose-500/10"})]}),e.jsxs("div",{className:`relative z-20 flex h-full flex-col justify-end p-6 lg:p-10 ${d?"lg:flex-row lg:items-end lg:justify-between":""}`,style:{transform:"translateZ(30px)"},children:[e.jsxs("div",{className:d?"lg:max-w-2xl":"",children:[e.jsxs("div",{className:"mb-4 flex items-center gap-3",children:[e.jsx("span",{className:"text-[10px] font-bold tracking-[0.3em] text-cyan-400 uppercase bg-cyan-400/10 px-3 py-1 border border-cyan-400/20",children:n.category}),e.jsx("span",{className:"h-[1px] w-8 bg-white/20"}),e.jsxs("span",{className:"text-[10px] font-mono text-slate-500",children:["ID: 0X",n.id.toUpperCase()]})]}),e.jsx("h3",{className:`font-bold text-white transition-all duration-500 group-hover:text-glow-cyan ${d?"text-4xl md:text-6xl lg:text-7xl":"text-2xl md:text-3xl"}`,children:n.title}),e.jsx("p",{className:`mt-4 text-slate-400 leading-relaxed transition-all duration-500 group-hover:text-slate-200 ${d?"text-lg max-w-xl":"text-sm line-clamp-3"}`,children:n.description}),e.jsx("div",{className:"mt-6 flex flex-wrap gap-2",children:n.techStack.map(l=>e.jsx("span",{className:"text-[9px] font-bold tracking-widest text-cyan-300/60 uppercase border-b border-cyan-400/0 transition-all hover:border-cyan-400/50 hover:text-cyan-300",children:l},l))})]}),e.jsxs("div",{className:`mt-8 flex gap-6 ${d?"lg:mt-0":""}`,style:{transform:"translateZ(50px)"},children:[e.jsxs("div",{className:"group/link flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.25em] text-white transition-all hover:text-cyan-400",children:[e.jsx(Bt,{className:"w-4 h-4 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1"}),"Details"]}),e.jsxs("div",{className:"group/link flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.25em] text-slate-500 transition-all hover:text-white",children:[e.jsx(Ut,{className:"w-4 h-4 transition-transform group-hover/link:-translate-y-1"}),"Source"]})]})]}),e.jsxs("div",{className:"absolute top-4 right-4 z-20 font-mono text-[8px] text-slate-600 opacity-0 transition-opacity duration-500 group-hover:opacity-100",children:["LAT: ",(Math.random()*90).toFixed(4),e.jsx("br",{}),"LON: ",(Math.random()*180).toFixed(4),e.jsx("br",{}),"STAT: ACTIVE"]})]})})},n.id)})})]}),e.jsx(Wn,{project:r,onClose:()=>s(null)})]})},Yn={Languages:[0,3,0],Frameworks:[5,1,0],"Engines & Tools":[-5,1,0],Cybersecurity:[0,-3,0]},kt={Languages:"#a855f7",Frameworks:"#22d3ee","Engines & Tools":"#f43f5e",Cybersecurity:"#dc2626"},Gn={Languages:"MASTERED",Frameworks:"EXPERT","Engines & Tools":"ADVANCED",Cybersecurity:"OPERATIONAL"},Xn=({name:r,icon:s,position:n,color:t,category:a,isHovered:i,onHover:d})=>{const l=c.useRef(null),u=c.useRef(null);return Be(g=>{if(l.current&&u.current)if(i){const m=Math.sin(g.clock.elapsedTime*8)*.2;l.current.scale.setScalar(1.4+m),u.current.emissiveIntensity=2+m*2,u.current.color.set("#ffffff"),u.current.emissive.set("#ffffff")}else l.current.scale.setScalar(Ae.lerp(l.current.scale.x,1,.1)),u.current.emissiveIntensity=Ae.lerp(u.current.emissiveIntensity,.5,.1),u.current.color.set(t),u.current.emissive.set(t)}),e.jsxs("group",{position:n,onPointerOver:g=>{g.stopPropagation(),d(!0)},onPointerOut:()=>d(!1),children:[e.jsx(Ln,{ref:l,args:[.3,16,16],children:e.jsx("meshStandardMaterial",{ref:u,color:t,emissive:t,emissiveIntensity:.5,metalness:.8,roughness:.2})}),i?e.jsx(_t,{distanceFactor:10,position:[0,0,0],center:!0,children:e.jsxs("div",{className:"hologram-panel w-48 bg-[#060a16]/90 border border-cyan-400/50 p-3 rounded-sm backdrop-blur-md relative overflow-hidden",children:[e.jsx("div",{className:"hologram-scanline"}),e.jsx("div",{className:"absolute top-0 left-0 w-2 h-2 border-t border-l border-cyan-400"}),e.jsx("div",{className:"absolute top-0 right-0 w-2 h-2 border-t border-r border-cyan-400"}),e.jsx("div",{className:"absolute bottom-0 left-0 w-2 h-2 border-b border-l border-cyan-400"}),e.jsx("div",{className:"absolute bottom-0 right-0 w-2 h-2 border-b border-r border-cyan-400"}),e.jsxs("div",{className:"flex justify-between items-start mb-2",children:[e.jsx("span",{className:"text-[10px] font-black text-white tracking-tighter uppercase",children:r}),e.jsxs("span",{className:"text-[7px] px-1 bg-emerald-500/20 text-emerald-400 border border-emerald-500/30",children:["[",Gn[a]||"ACTIVE","]"]})]}),e.jsxs("div",{className:"text-[8px] text-cyan-300/80 font-mono uppercase leading-tight",children:["> Status: System_Active",e.jsx("br",{}),"> Priority: High",e.jsx("br",{}),"> Neural_Sync: 98%"]})]})}):e.jsx(_t,{distanceFactor:10,position:[0,-.6,0],center:!0,pointerEvents:"none",children:e.jsxs("div",{className:"whitespace-nowrap flex items-center gap-2 px-2 py-1 bg-black/60 backdrop-blur-sm border border-white/10 rounded text-[8px] font-mono font-bold text-slate-400 transition-all",children:[e.jsx("span",{children:s}),e.jsx("span",{children:r})]})})]})},Zn=()=>{const[r,s]=c.useState(null),{nodeData:n,connections:t}=c.useMemo(()=>{const a={},i=[];wt.forEach(u=>{const g=Yn[u.category]||[0,0,0],m=kt[u.category]||"#ffffff";u.items.forEach((h,x)=>{const y=Math.acos(-1+2*x/u.items.length),R=Math.sqrt(u.items.length*Math.PI)*y,M=2.5,j=g[0]+M*Math.sin(y)*Math.cos(R),P=g[1]+M*Math.sin(y)*Math.sin(R),O=g[2]+M*Math.cos(y);a[h.name]=[j,P,O],i.push({name:h.name,icon:h.icon,position:[j,P,O],color:m,category:u.category})})});const d=[];return wt.forEach(u=>{const g=kt[u.category]||"#ffffff";u.items.forEach((m,h)=>{const x=u.items[(h+1)%u.items.length];a[m.name]&&a[x.name]&&d.push({start:a[m.name],end:a[x.name],color:g,from:m.name,to:x.name})})}),[["Python","FastAPI"],["Python","Kali Linux"],["C#","Unity"],["TypeScript","React"],["Next.js","React"],["Node.js","Docker"]].forEach(([u,g])=>{a[u]&&a[g]&&d.push({start:a[u],end:a[g],color:"#22d3ee",from:u,to:g})}),{nodeData:i,connections:d}},[]);return e.jsx(Ts,{speed:1,rotationIntensity:.2,floatIntensity:.5,children:e.jsxs("group",{children:[n.map((a,i)=>e.jsx(Xn,{...a,isHovered:r===a.name,onHover:d=>s(d?a.name:null)},i)),t.map((a,i)=>{const d=r===a.from||r===a.to;return e.jsx(En,{points:[a.start,a.end],color:d?"#ffffff":a.color,lineWidth:1,transparent:!0,opacity:d?.8:.2},i)})]})})},qn=()=>e.jsx("div",{className:"w-full h-[600px] relative bg-transparent",children:e.jsxs(zt,{dpr:1,gl:{alpha:!0,antialias:!0},children:[e.jsx(Tn,{makeDefault:!0,position:[0,0,15],fov:50}),e.jsx("ambientLight",{intensity:.5}),e.jsx("pointLight",{position:[10,10,10],intensity:1,color:"#22d3ee"}),e.jsx(Ms,{count:50,scale:20,size:2,speed:.4,opacity:.2,color:"#22d3ee"}),e.jsx(Zn,{}),e.jsx(Pn,{enableZoom:!1,autoRotate:!0,autoRotateSpeed:.5})]})}),Kn=()=>e.jsx("section",{id:"tech",className:"relative py-24 overflow-hidden",children:e.jsxs("div",{className:"section-shell",children:[e.jsxs("div",{className:"mb-16",children:[e.jsx("div",{className:"section-kicker mb-4 w-fit",children:"Arsenal"}),e.jsxs("h2",{className:"section-title text-center md:text-left",children:["Technical ",e.jsx("span",{className:"text-cyan-300",children:"Inventory"})]})]}),e.jsxs("div",{className:"relative glass-panel border border-white/5 cyber-corners min-h-[600px] flex items-center justify-center",children:[e.jsx("div",{className:"hud-tag",children:"Neural_Tech_Web_v1.0"}),e.jsx(c.Suspense,{fallback:e.jsxs("div",{className:"flex flex-col items-center gap-4",children:[e.jsx("div",{className:"w-12 h-12 border-4 border-cyan-400/20 border-t-cyan-400 rounded-full animate-spin"}),e.jsx("div",{className:"font-mono text-xs text-cyan-400 animate-pulse",children:"INITIALIZING NEURAL WEB..."})]}),children:e.jsx(qn,{})}),e.jsxs("div",{className:"absolute bottom-6 left-6 flex flex-col gap-2 pointer-events-none",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"w-2 h-2 rounded-full bg-purple-500"}),e.jsx("span",{className:"text-[10px] font-bold text-slate-400 uppercase tracking-widest",children:"Languages"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"w-2 h-2 rounded-full bg-cyan-400"}),e.jsx("span",{className:"text-[10px] font-bold text-slate-400 uppercase tracking-widest",children:"Frameworks"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"w-2 h-2 rounded-full bg-rose-500"}),e.jsx("span",{className:"text-[10px] font-bold text-slate-400 uppercase tracking-widest",children:"Engines & Tools"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"w-2 h-2 rounded-full bg-red-600"}),e.jsx("span",{className:"text-[10px] font-bold text-slate-400 uppercase tracking-widest",children:"Cybersecurity"})]})]}),e.jsx("div",{className:"absolute top-6 right-6 text-right pointer-events-none",children:e.jsxs("div",{className:"text-[10px] font-bold text-cyan-400/50 font-mono uppercase tracking-[0.2em]",children:["Interactions Enabled:",e.jsx("br",{}),"[Drag to Rotate]",e.jsx("br",{}),"[Hover for Details]"]})})]})]})}),Jn=()=>{const[r,s]=c.useState(0),[n,t]=c.useState(24);return c.useEffect(()=>{const a=()=>{const d=document.body.scrollTop||document.documentElement.scrollTop,l=document.documentElement.scrollHeight-document.documentElement.clientHeight;s(Math.round(d/l*100))},i=setInterval(()=>{t(Math.floor(Math.random()*5)+22)},3e3);return window.addEventListener("scroll",a),()=>{window.removeEventListener("scroll",a),clearInterval(i)}},[]),e.jsxs("div",{className:"fixed left-6 top-1/2 -translate-y-1/2 z-[80] hidden xl:flex flex-col gap-8 pointer-events-none",children:[e.jsxs("div",{className:"flex flex-col items-center gap-4",children:[e.jsx("div",{className:"h-48 w-[1px] bg-white/5 relative overflow-hidden",children:e.jsx("div",{className:"absolute top-0 left-0 w-full bg-cyan-400 shadow-[0_0_10px_#22d3ee] transition-all duration-300",style:{height:`${r}%`}})}),e.jsxs("div",{className:"font-mono text-[10px] text-cyan-400 rotate-90 origin-center whitespace-nowrap tracking-[0.3em] mt-4",children:["SECTOR_POS: ",r,"%"]})]}),e.jsxs("div",{className:"space-y-6 pt-8 border-t border-white/5",children:[e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(Is,{className:"w-3 h-3 text-emerald-500"}),e.jsx("span",{className:"text-[8px] font-mono text-slate-500 uppercase",children:"SYS_ACTIVE"})]}),e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(tn,{className:"w-3 h-3 text-cyan-400"}),e.jsxs("span",{className:"text-[8px] font-mono text-slate-500 uppercase",children:[n,"MS"]})]}),e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(Ks,{className:"w-3 h-3 text-rose-500"}),e.jsx("span",{className:"text-[8px] font-mono text-slate-500 uppercase",children:"PROT_LVL_5"})]})]}),e.jsx("div",{className:"h-32 w-10 relative overflow-hidden data-flow-container mt-4",children:e.jsxs("div",{className:"absolute top-0 left-0 w-full animate-[data-flow_20s_linear_infinite]",children:[Array.from({length:20}).map((a,i)=>e.jsx("div",{className:"text-[6px] font-mono text-slate-700 leading-none mb-1 text-center",children:Math.random().toString(16).slice(2,8).toUpperCase()},i)),Array.from({length:20}).map((a,i)=>e.jsx("div",{className:"text-[6px] font-mono text-slate-700 leading-none mb-1 text-center",children:Math.random().toString(16).slice(2,8).toUpperCase()},i+20))]})})]})},Qn=({currentMode:r,onModeChange:s})=>e.jsxs("div",{className:"fixed bottom-8 left-1/2 -translate-x-1/2 z-50 px-4",children:[e.jsxs("div",{className:"glass-panel rounded-full p-1.5 flex items-center gap-2 border-white/10 backdrop-blur-xl shadow-2xl",children:[e.jsxs("button",{onClick:()=>s("arsenal"),className:`flex items-center gap-2 px-6 py-2 rounded-full transition-all duration-300 group ${r==="arsenal"?"bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 shadow-[0_0_15px_rgba(34,211,238,0.2)]":"text-slate-400 hover:text-white hover:bg-white/5"}`,children:[e.jsx(Xs,{className:`w-4 h-4 transition-transform duration-300 ${r==="arsenal"?"scale-110":"group-hover:scale-110"}`}),e.jsx("span",{className:"text-[10px] font-black tracking-[0.2em] uppercase",children:"Arsenal"})]}),e.jsx("div",{className:"w-[1px] h-4 bg-white/10"}),e.jsxs("button",{onClick:()=>s("logs"),className:`flex items-center gap-2 px-6 py-2 rounded-full transition-all duration-300 group ${r==="logs"?"bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 shadow-[0_0_15px_rgba(34,211,238,0.2)]":"text-slate-400 hover:text-white hover:bg-white/5"}`,children:[e.jsx(Dt,{className:`w-4 h-4 transition-transform duration-300 ${r==="logs"?"scale-110":"group-hover:scale-110"}`}),e.jsx("span",{className:"text-[10px] font-black tracking-[0.2em] uppercase",children:"Logs"})]})]}),e.jsx("div",{className:"absolute -top-6 left-1/2 -translate-x-1/2 flex items-center gap-12 whitespace-nowrap opacity-50",children:e.jsx("span",{className:"text-[7px] font-mono text-cyan-500/60 uppercase tracking-[0.3em]",children:"View_Selector"})})]});function ea(){const[r,s]=c.useState(()=>typeof window<"u"?!sessionStorage.getItem("hasBooted"):!0),n=()=>{sessionStorage.setItem("hasBooted","true"),s(!1)},t=c.useRef(null),[a,i]=c.useState("arsenal"),[d,l]=c.useState(!1),u=c.useRef(null),g=(m,h)=>{var x;if(h&&(u.current=h),m===a){h&&((x=document.getElementById(h))==null||x.scrollIntoView({behavior:"smooth"}));return}l(!0),setTimeout(()=>{i(m),l(!1)},300)};return c.useEffect(()=>{if(!d&&u.current){const m=u.current;setTimeout(()=>{var h;(h=document.getElementById(m))==null||h.scrollIntoView({behavior:"smooth"}),u.current=null},50)}},[d,a]),c.useEffect(()=>{const m=h=>{t.current&&(t.current.style.transform=`translate3d(${h.clientX-300}px, ${h.clientY-300}px, 0)`)};return window.addEventListener("mousemove",m,{passive:!0}),()=>window.removeEventListener("mousemove",m)},[]),e.jsxs("div",{className:"min-h-screen bg-transparent text-white selection:bg-cyan-500/30 selection:text-cyan-200",children:[r&&e.jsx(ks,{onComplete:n}),e.jsxs("div",{style:{opacity:r?0:1,transition:"opacity 0.5s ease-in"},children:[e.jsx(Jn,{}),e.jsxs("div",{className:"fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-[#010208]",children:[e.jsx(Ps,{mode:a}),e.jsx("div",{className:"cyber-grid"}),e.jsx("div",{className:"horizon"}),e.jsx("div",{ref:t,className:"mouse-glow w-[600px] h-[600px] rounded-full blur-[100px] will-change-transform"}),e.jsx("div",{className:"glitch-layer"}),e.jsx("div",{className:"scan-beam"}),e.jsx("div",{className:"scanline"})]}),e.jsx("div",{className:"hidden lg:block",children:e.jsx(As,{})}),e.jsx(Ls,{onModeChange:g}),e.jsxs("main",{className:`relative z-10 ${d?"glitch-active":""}`,children:[e.jsx(Bn,{}),e.jsx(Hn,{}),e.jsx(Fn,{}),a==="logs"?e.jsx(Vn,{}):e.jsx($n,{}),e.jsx(Kn,{})]}),e.jsx(Qn,{currentMode:a,onModeChange:g}),e.jsx(Cs,{})]})]})}class ta extends c.Component{constructor(s){super(s),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(s,n){console.error("Critical Render Error:",s,n)}render(){return this.state.hasError?e.jsxs("div",{style:{padding:"20px",color:"white",background:"#0d1117",height:"100vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},children:[e.jsx("h1",{children:"System Malfunction"}),e.jsx("p",{children:"The neural interface encountered a critical error during initialization."}),e.jsx("button",{onClick:()=>window.location.reload(),style:{padding:"10px 20px",background:"#22d3ee",border:"none",borderRadius:"4px",cursor:"pointer"},children:"Reboot System"})]}):this.props.children}}const Gt=document.getElementById("root");if(!Gt)throw new Error("Could not find root element to mount to");const sa=Ot.createRoot(Gt);sa.render(e.jsx(Rs.StrictMode,{children:e.jsx(ta,{children:e.jsx(ea,{})})}));
