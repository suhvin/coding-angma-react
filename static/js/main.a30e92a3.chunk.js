(this.webpackJsonpvoca=this.webpackJsonpvoca||[]).push([[0],{13:function(e,t,c){},14:function(e,t,c){},16:function(e,t,c){"use strict";c.r(t);var n=c(0),j=c.n(n),s=c(8),r=c.n(s),a=(c(13),c(14),c(3)),i=c(2),b=c(1);function d(e){var t=e.word,c=Object(n.useState)(!1),j=Object(a.a)(c,2),s=j[0],r=j[1],i=Object(n.useState)(t.isDone),d=Object(a.a)(i,2),h=d[0],l=d[1];return Object(b.jsxs)("tr",{className:h?"off":"",children:[Object(b.jsx)("td",{children:Object(b.jsx)("input",{type:"checkbox",checked:h,onChange:function(){l(!h)}})}),Object(b.jsx)("td",{children:t.eng}),Object(b.jsx)("td",{children:s&&t.kor}),Object(b.jsxs)("td",{children:[Object(b.jsxs)("button",{onClick:function(){r(!s)},children:["\ub73b ",s?"\uc228\uae30\uae30":"\ubcf4\uae30"]}),Object(b.jsx)("button",{className:"btn_del",children:"\uc0ad\uc81c"})]})]})}function h(){var e=Object(i.g)().day,t=Object(n.useState)([]),c=Object(a.a)(t,2),j=c[0],s=c[1];return Object(n.useEffect)((function(){fetch("http://localhost:3001/words?day=".concat(e)).then((function(e){return e.json()})).then((function(e){s(e)}))}),[e]),Object(b.jsxs)("div",{children:[Object(b.jsxs)("h2",{children:["Day ",e]}),Object(b.jsx)("table",{children:Object(b.jsx)("tbody",{children:j.map((function(e){return Object(b.jsx)(d,{word:e},e.id)}))})})]})}var l=c(5);function o(){var e=Object(n.useState)([]),t=Object(a.a)(e,2),c=t[0],j=t[1];return Object(n.useEffect)((function(){fetch("http://localhost:3001/days").then((function(e){return e.json()})).then((function(e){j(e)}))}),[]),Object(b.jsx)("ul",{className:"list_day",children:c.map((function(e){return Object(b.jsx)("li",{children:Object(b.jsxs)(l.b,{to:"/day/".concat(e.day),children:["Day ",e.day]})},e.id)}))})}function O(){return Object(b.jsxs)("div",{className:"header",children:[Object(b.jsx)("h1",{children:Object(b.jsx)(l.b,{to:"/",children:"\ud1a0\uc775 \uc601\ub2e8\uc5b4(\uace0\uae09)"})}),Object(b.jsxs)("div",{className:"menu",children:[Object(b.jsx)("a",{href:"#!",className:"link",children:"\ub2e8\uc5b4 \ucd94\uac00"}),Object(b.jsx)("a",{href:"#!",className:"link",children:"Day \ucd94\uac00"})]})]})}function u(){return Object(b.jsxs)("div",{children:[Object(b.jsx)("h2",{children:"\uc798\ubabb\ub41c \uc811\uadfc\uc785\ub2c8\ub2e4"}),Object(b.jsx)(l.b,{to:"/",children:"\ub3cc\uc544\uac00\uae30"})]})}var x=function(){return Object(b.jsx)(l.a,{children:Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(O,{}),Object(b.jsxs)(i.c,{children:[Object(b.jsx)(i.a,{path:"/",element:Object(b.jsx)(o,{})}),Object(b.jsx)(i.a,{path:"/day/:day",element:Object(b.jsx)(h,{})}),Object(b.jsx)(i.a,{path:"*",element:Object(b.jsx)(u,{})})]})]})})};r.a.render(Object(b.jsx)(j.a.StrictMode,{children:Object(b.jsx)(x,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.a30e92a3.chunk.js.map