(this["webpackJsonpamrita-neuron-simulator"]=this["webpackJsonpamrita-neuron-simulator"]||[]).push([[0],{277:function(e,t,a){},539:function(e,t,a){},542:function(e,t,a){"use strict";a.r(t);var l=a(3),c=a(0),r=a.n(c),j=a(17),n=a.n(j),s=(a(277),a(547)),d=a(59),i=a(132),x=a(12),b=a(78),o=a(25),O=a(14),h={adex_modes_list:{default:{C:281,el:-70.6,del:2,a:4,vr:-54,gl:30,vt:-50.4,tw:144,b:.0805,T:100,I:20},fs:{C:200,el:-70,del:2,a:2,vr:-58,gl:12,vt:-50,tw:300,b:60},rs:{C:281,el:-70.6,del:2,a:4,vr:-54,gl:30,vt:-50.4,tw:144,b:.0805},tc:{C:130,el:-58,del:2,a:4,vr:-50,gl:18,vt:-50,tw:150,b:120},ib:{C:104,el:-65,del:5.5,a:-.8,vr:-53,gl:43,vt:-52,tw:88,b:65},rz:{C:200,el:-58,del:2,a:2,vr:-46,gl:10,vt:-50,tw:120,b:100},ch:{C:200,el:-70,del:.8,a:2,vr:-58,gl:10,vt:-50,tw:30,b:0}},adex_params:{C:281,el:-70.6,del:2,a:4,vr:-54,gl:30,vt:-50.4,tw:144,b:.0805,T:100,I:20},adex_param_list:[["C","gl"],["el","vt"],["del","tw"],["b","vr"],["a",""],["T","I"]],adex_output:{V:[],w:[],T_steps:[]}},m=a(7),u=a(32);var v=function(){var e=Object(c.useState)(!0),t=Object(O.a)(e,2),a=t[0],r=t[1],j=Object(c.useState)(!1),n=Object(O.a)(j,2),d=n[0],i=n[1],x=Object(c.useState)(h),v=Object(O.a)(x,2),p=v[0],g=v[1],f=p.adex_output.T_steps.map((function(e,t){return{name:e,v:p.adex_output.V[t],w:p.adex_output.w[t]}})),C=function(e,t){g(Object(o.a)(Object(o.a)({},p),{},{adex_params:Object(o.a)(Object(o.a)({},p.adex_params),{},Object(b.a)({},e,parseFloat(t)))}))};return Object(l.jsx)("div",{children:Object(l.jsx)(m.Grid,{fluid:!0,children:Object(l.jsxs)(m.Row,{children:[Object(l.jsx)(m.Col,{md:8,children:Object(l.jsx)(u.e,{children:Object(l.jsxs)(u.d,{data:f,margin:{top:5,right:30,left:20,bottom:5},children:[Object(l.jsx)(u.a,{horizontal:!1,vertical:!1}),Object(l.jsx)(u.g,{dataKey:"name"}),Object(l.jsx)(u.h,{}),Object(l.jsx)(u.f,{}),Object(l.jsx)(u.b,{}),Object(l.jsx)(u.c,{type:"monotone",dataKey:"v",stroke:"#8884d8",dot:!1})]})})}),Object(l.jsx)(m.Col,{md:4,children:Object(l.jsxs)(s.b,{children:[Object(l.jsx)("h5",{children:"Run Control"}),Object(l.jsx)(s.a,{onClick:function(){return r(!a)},text:"Model Parameters"}),Object(l.jsx)(s.c,{isOpen:a,children:Object(l.jsxs)(s.b,{children:[Object(l.jsx)(m.Grid,{children:Object(l.jsxs)(m.Row,{children:[Object(l.jsx)(m.Col,{md:3,children:Object(l.jsx)(s.f,{children:"C :"})}),Object(l.jsx)(m.Col,{md:3,children:Object(l.jsx)(s.e,{fill:!1,small:!0,value:p.adex_params.C,onChange:function(e){return C("C",e.target.value)}})}),Object(l.jsx)(m.Col,{md:3,children:Object(l.jsx)(s.f,{children:"T : "})}),Object(l.jsx)(m.Col,{md:3,children:Object(l.jsx)(s.e,{fill:!1,small:!0,value:p.adex_params.T,onChange:function(e){return C("T",e.target.value)}})})]})}),Object(l.jsx)(m.Grid,{children:Object(l.jsxs)(m.Row,{children:[Object(l.jsx)(m.Col,{md:3,children:Object(l.jsx)(s.f,{children:"gl :"})}),Object(l.jsx)(m.Col,{md:3,children:Object(l.jsx)(s.e,{fill:!1,small:!0,value:p.adex_params.gl,onChange:function(e){return C("gl",e.target.value)}})}),Object(l.jsx)(m.Col,{md:3,children:Object(l.jsx)(s.f,{children:"el : "})}),Object(l.jsx)(m.Col,{md:3,children:Object(l.jsx)(s.e,{fill:!1,small:!0,value:p.adex_params.el,onChange:function(e){return C("el",e.target.value)}})})]})}),Object(l.jsx)(m.Grid,{children:Object(l.jsxs)(m.Row,{children:[Object(l.jsx)(m.Col,{md:3,children:Object(l.jsx)(s.f,{children:"vt :"})}),Object(l.jsx)(m.Col,{md:3,children:Object(l.jsx)(s.e,{fill:!1,small:!0,value:p.adex_params.vt,onChange:function(e){return C("vt",e.target.value)}})}),Object(l.jsx)(m.Col,{md:3,children:Object(l.jsx)(s.f,{children:"del : "})}),Object(l.jsx)(m.Col,{md:3,children:Object(l.jsx)(s.e,{fill:!1,small:!0,value:p.adex_params.del,onChange:function(e){return C("del",e.target.value)}})})]})}),Object(l.jsx)(m.Grid,{children:Object(l.jsxs)(m.Row,{children:[Object(l.jsx)(m.Col,{md:3,children:Object(l.jsx)(s.f,{children:"tw :"})}),Object(l.jsx)(m.Col,{md:3,children:Object(l.jsx)(s.e,{fill:!1,small:!0,value:p.adex_params.tw,onChange:function(e){return C("tw",e.target.value)}})}),Object(l.jsx)(m.Col,{md:3,children:Object(l.jsx)(s.f,{children:"vr : "})}),Object(l.jsx)(m.Col,{md:3,children:Object(l.jsx)(s.e,{fill:!1,small:!0,value:p.adex_params.vr,onChange:function(e){return C("vr",e.target.value)}})})]})}),Object(l.jsx)(m.Grid,{children:Object(l.jsxs)(m.Row,{children:[Object(l.jsx)(m.Col,{md:3,children:Object(l.jsx)(s.f,{children:"a :"})}),Object(l.jsx)(m.Col,{md:3,children:Object(l.jsx)(s.e,{fill:!1,small:!0,value:p.adex_params.a,onChange:function(e){return C("a",e.target.value)}})}),Object(l.jsx)(m.Col,{md:3,children:Object(l.jsx)(s.f,{children:"b : "})}),Object(l.jsx)(m.Col,{md:3,children:Object(l.jsx)(s.e,{fill:!1,small:!0,value:p.adex_params.b,onChange:function(e){return C("b",e.target.value)}})})]})}),Object(l.jsx)(m.Grid,{children:Object(l.jsxs)(m.Row,{children:[Object(l.jsx)(m.Col,{md:3,children:Object(l.jsx)(s.f,{children:"I :"})}),Object(l.jsx)(m.Col,{md:3,children:Object(l.jsx)(s.e,{fill:!1,small:!0,value:p.adex_params.I,onChange:function(e){return C("I",e.target.value)}})}),Object(l.jsx)(m.Col,{md:3,children:Object(l.jsx)(s.f,{children:" "})}),Object(l.jsx)(m.Col,{md:3,children:Object(l.jsx)(s.e,{fill:!1,small:!0,disabled:!0})})]})})]})}),Object(l.jsx)(s.d,{vertical:!0}),Object(l.jsx)(s.a,{onClick:function(){return i(!d)},text:"Modes"}),Object(l.jsx)(s.c,{isOpen:d,children:Object(l.jsx)(s.b,{children:Object(l.jsx)("div",{children:Object.keys(p.adex_modes_list).map((function(e,t){return Object(l.jsx)(s.a,{onClick:function(){return t=e,void g(Object(o.a)(Object(o.a)({},p),{},{adex_params:Object(o.a)(Object(o.a)({},p.adex_params),p.adex_modes_list[t])}));var t},style:{marginRight:"8px"},children:e})}))})})}),Object(l.jsx)(s.d,{vertical:!0}),Object(l.jsx)(s.a,{onClick:function(){return function(){var e=.1,t=p.adex_params.C,a=p.adex_params.gl,l=p.adex_params.el,c=p.adex_params.vr,r=p.adex_params.del,j=p.adex_params.tw,n=p.adex_params.a,s=p.adex_params.b,d=p.adex_params.vr,i=p.adex_params.T/e,x=new Array(i).fill(p.adex_params.I),b=0,O=0,h=[];h[0]=l;var m=[];m[0]=0;var u=[];u[0]=0;for(var v=0;v<i;v++)console.log(v),b=e*(a*(h[v]-l)+a*r*Math.exp((h[v]-c)/r)-m[v]+x[v])/t,O=e*((n*(h[v]-l)-m[v])/j),h[v+1]=h[v]+b,m[v+1]=m[v]+O,u[v+1]=u[v]+e,h[v+1]>0&&(h[v]=0,m[v+1]=m[v]+s,h[v+1]=d);g(Object(o.a)(Object(o.a)({},p),{},{adex_output:{V:h,w:m,T_steps:u}}))}()},children:"Run"})]})})]})})})},p=a.p+"static/media/Amritalogo.74a0debe.png",g=a.p+"static/media/vlablogo2.00a678a6.jpg";a(539);var f=function(){return Object(l.jsx)(i.a,{children:Object(l.jsxs)("div",{className:"App bp3-dark",style:{margin:"0 auto",width:"80%"},children:[Object(l.jsxs)(s.g,{children:[Object(l.jsx)(s.g.Heading,{align:d.a.LEFT,children:"Amrita Neuron Simulator"}),Object(l.jsx)(i.b,{to:"/",children:Object(l.jsx)(s.a,{className:"bp3-minimal",text:"Adex"})})]}),Object(l.jsxs)(s.b,{children:[Object(l.jsx)(x.c,{children:Object(l.jsx)(x.a,{path:"/",exact:!0,component:v})}),Object(l.jsx)("img",{style:{width:"200px",height:"50px",paddingRight:"10px"},src:p,alt:"Amrita"}),Object(l.jsx)("img",{style:{width:"200px",height:"50px"},src:g,alt:"Amrita"})]})]})})},C=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,548)).then((function(t){var a=t.getCLS,l=t.getFID,c=t.getFCP,r=t.getLCP,j=t.getTTFB;a(e),l(e),c(e),r(e),j(e)}))};n.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(f,{})}),document.getElementById("root")),C()}},[[542,1,2]]]);
//# sourceMappingURL=main.12bc73ff.chunk.js.map