import{e,bM as i,ar as w,a as y,n as k,k as R,aS as r,b5 as c,c4 as b,d as C,a3 as o,E as x,ao as D,D as T,I as B,ad as F,B as g,bD as H,aU as L,cU as M}from"./index.29d84749.js";const N=n=>e(i,{get children(){return n.content}}),U=n=>e(w,{get src(){return n.content}}),W={string:N,image:U},E=()=>{const n=y();k.info(n("manage.messenger-tips"));const[a,l]=R(""),[d,u]=r(()=>c.post("/admin/message/get")),[p,m]=r(()=>c.post("/admin/message/send",{message:a()})),[h,S]=b([]),s=async()=>{const t=await u();H(t,f=>{S(M($=>$.push(f)))})},v=async()=>{const t=await m();L(t)},I=setInterval(s,1e3);return C(()=>clearInterval(I)),e(o,{spacing:"$2",h:"$full",alignItems:"start",get children(){return[e(o,{w:"$full",spacing:"$2",alignItems:"start",p:"$2",rounded:"$lg",border:"1px solid var(--hope-colors-neutral6)",get children(){return[e(i,{size:"xl",get children(){return n("manage.received_msgs")}}),e(x,{each:h,children:t=>e(D,T({get component(){return W[t.type]}},t))})]}}),e(B,{w:"$full",get value(){return a()},onInput:t=>l(t.currentTarget.value)}),e(F,{spacing:"$2",get children(){return[e(g,{colorScheme:"accent",get loading(){return d()},onClick:s,get children(){return n("manage.receive")}}),e(g,{get loading(){return p()},onClick:v,get children(){return n("manage.send")}})]}})]}})};export{E as Messenger,W as Shower,E as default};
