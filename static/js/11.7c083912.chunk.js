(this["webpackJsonppancake-frontend"]=this["webpackJsonppancake-frontend"]||[]).push([[11],{1079:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return y}));var i,o=n(11),c=n(12),r=n(0),l=n(7),u=n(3),d=n(87),s=n(18),a=n(20),b=n(359),j=n(95),x=n(99),O=n(44),f=n(209),h=n(180),p=n(234),v=n(233),k=n(1),m=Object(l.e)(u.p)(i||(i=Object(c.a)(["\n  background-color: ",";\n"])),(function(e){return e.theme.colors.dropdownDeep}));function y(){var e=Object(a.a)().account,t=Object(s.b)().t,n=Object(O.l)(),i=Object(r.useMemo)((function(){return n.map((function(e){return{liquidityToken:Object(O.a)(e),tokens:e}}))}),[n]),c=Object(r.useMemo)((function(){return i.map((function(e){return e.liquidityToken}))}),[i]),l=Object(j.f)(null!==e&&void 0!==e?e:void 0,c),y=Object(o.a)(l,2),g=y[0],q=y[1],w=Object(r.useMemo)((function(){return i.filter((function(e){var t,n=e.liquidityToken;return null===(t=g[n.address])||void 0===t?void 0:t.greaterThan("0")}))}),[i,g]),A=Object(x.c)(w.map((function(e){return e.tokens}))),T=q||(null===A||void 0===A?void 0:A.length)<w.length||(null===A||void 0===A?void 0:A.some((function(e){return!e}))),S=A.map((function(e){return Object(o.a)(e,2)[1]})).filter((function(e){return Boolean(e)}));return Object(k.jsxs)(p.a,{children:[Object(k.jsx)(v.a,{activeIndex:1}),Object(k.jsxs)(h.a,{children:[Object(k.jsx)(h.b,{title:t("Remove liquidity to receive tokens back"),subtitle:t("Remove liquidity to receive tokens back")}),Object(k.jsxs)(m,{children:[e?T?Object(k.jsx)(u.sb,{color:"textSubtle",textAlign:"center",children:Object(k.jsx)(f.a,{children:t("Loading")})}):(null===S||void 0===S?void 0:S.length)>0?S.map((function(e,t){return Object(k.jsx)(b.b,{pair:e,mb:t<S.length-1?"16px":0},e.liquidityToken.address)})):Object(k.jsx)(u.sb,{color:"textSubtle",textAlign:"center",children:t("No liquidity found.")}):Object(k.jsx)(u.sb,{color:"textSubtle",textAlign:"center",children:t("Connect to a wallet to view your liquidity.")}),e&&!T&&Object(k.jsxs)(u.G,{flexDirection:"column",alignItems:"center",mt:"24px",children:[Object(k.jsx)(u.sb,{color:"textSubtle",mb:"8px",children:t("Don't see a pool you joined?")}),Object(k.jsx)(u.k,{id:"import-pool-link",variant:"secondary",scale:"sm",as:d.a,to:"/find",children:t("Find other LP tokens")})]})]}),Object(k.jsx)(u.q,{style:{textAlign:"center"},children:Object(k.jsx)(u.k,{id:"join-pool-button",as:d.a,to:"/add",width:"100%",startIcon:Object(k.jsx)(u.a,{color:"white"}),children:t("Add Liquidity")})})]})]})}}}]);
//# sourceMappingURL=11.7c083912.chunk.js.map