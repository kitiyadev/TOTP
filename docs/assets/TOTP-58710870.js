import{r as i,j as e,W as l,B as h,S as u,D as m,T as r,P as f}from"./index-5cf3a64a.js";import{c as y,a as p,b as j,k as g,d as B,e as k}from"./index-97e93e9e.js";import{C as D}from"./Card-cee4dcc8.js";function w(){const o=new y.Authenticator({createDigest:p,createRandomBytes:j,keyDecoder:g,keyEncoder:B});i.useEffect(()=>{console.log("init"),window.Buffer||(window.Buffer=k.Buffer),s()},[]);const a=[{user:"github",service:"GitHub1",secret:"AKUBQBUVNABOPVJQ",token:"-"},{user:"github2",service:"GitHub",secret:"RWUFGBUVBVAOPVJF",token:"-"},{user:"github3",service:"GitHub3",secret:"RWUBQBUVNAAOPVJQ",token:"-"}],[c,d]=i.useState(a),s=()=>{console.log("timer30sec");const t=c.map(n=>({...n,token:o.generate(n.secret)}));d(t)};return e.jsxs(e.Fragment,{children:[e.jsx(l,{children:e.jsx("title",{children:" TOTP "})}),e.jsx(h,{children:e.jsx(u,{alignItems:"center",justifyContent:"center",sx:{height:1},children:e.jsx(D,{sx:{p:5,width:1,maxWidth:800},children:e.jsxs(u,{direction:"column",spacing:2,alignItems:"center",children:[e.jsx(x,{timer30sec:s}),e.jsx(m,{sx:{my:3,width:400},children:e.jsx(r,{variant:"body2",sx:{color:"text.secondary"},children:"Token"})}),c.map((t,n)=>e.jsxs(u,{children:[e.jsx(r,{variant:"body2",sx:{color:"text.secondary"},children:`${t.user} | ${t.service}`}),e.jsx(r,{variant:"body2",sx:{color:"text.secondary"},children:t.secret}),e.jsx(r,{children:t.token})]},`${n}
                  -${t.user}-${t.service}`))]})})})})]})}const x=({timer30sec:o})=>{const[a,c]=i.useState("00:00:00");return i.useEffect(()=>{const d=setInterval(()=>{const s=new Date;s.getSeconds()%30===0&&o(),c(`${s.toLocaleTimeString("en-GB")}`)},1e3);return()=>clearInterval(d)},[]),e.jsx(r,{children:`${a}`})};x.propTypes={timer30sec:f.func};export{w as default};
