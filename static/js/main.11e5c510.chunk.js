(this["webpackJsonpcodepen-clone"]=this["webpackJsonpcodepen-clone"]||[]).push([[0],{11:function(e,n,t){e.exports=t(27)},16:function(e,n,t){},27:function(e,n,t){"use strict";t.r(n);var a=t(0),c=t.n(a),r=t(8),l=t.n(r),o=(t(16),t(2)),i=function(e,n){var t="codepen-clone-"+e,c=Object(a.useState)((function(){var e=localStorage.getItem(t);return null!=e?JSON.parse(e):"function"===typeof n?n():n})),r=Object(o.a)(c,2),l=r[0],i=r[1];return Object(a.useEffect)((function(){localStorage.setItem(t,JSON.stringify(l))}),[t,l]),[l,i]},s=(t(17),t(18),t(19),t(20),t(21),t(9)),u=t(10),m=t(6),p=function(e){var n=e.language,t=e.displayName,r=e.value,l=e.onChange,i=Object(a.useState)(!0),p=Object(o.a)(i,2),d=p[0],f=p[1];return c.a.createElement("div",{className:"editor-container ".concat(d?"":"collapsed")},c.a.createElement("div",{className:"editor-title"},t,c.a.createElement("button",{type:"button",className:"expand-collapse-btn",onClick:function(){return f((function(e){return!e}))}},c.a.createElement(u.a,{icon:d?m.a:m.b})," ")),c.a.createElement(s.Controlled,{onBeforeChange:function(e,n,t){l(t)},value:r,className:"code-mirror-wrapper",options:{lineWrapping:!0,lint:!0,mode:n,lineNumbers:!0,theme:"material"}}))};var d=function(){var e=i("html",'\x3c!--This is a sample--\x3e\n<div class="center">\n  <h1>Hello, world!</h1>\n  <p>Have fun!</p>\n</div>\n    '),n=Object(o.a)(e,2),t=n[0],r=n[1],l=i("css","/* Hi, there! */\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  font-family: Calibri;\n  font-size: 1.25rem;\n  color: gray;\n}\n\n.center {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n  background:  hsl(255, 6%, 15%);\n}\n  "),s=Object(o.a)(l,2),u=s[0],m=s[1],d=i("js","// github.com/Chris-Ivan"),f=Object(o.a)(d,2),g=f[0],b=f[1],h=Object(a.useState)(""),v=Object(o.a)(h,2),y=v[0],E=v[1];return Object(a.useEffect)((function(){var e=setTimeout((function(){E("<html>\n      <body>".concat(t,"</body>\n      <style>").concat(u,"</style>\n      <script>").concat(g,"<\/script>\n    </html>"))}),250);return function(){return clearTimeout(e)}}),[t,u,g]),c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"pane top-pane"},c.a.createElement(p,{language:"xml",displayName:"HTML",value:t,onChange:r}),c.a.createElement(p,{language:"css",displayName:"CSS",value:u,onChange:m}),c.a.createElement(p,{language:"javascript",displayName:"JS",value:g,onChange:b})),c.a.createElement("div",{className:"pane"},c.a.createElement("iframe",{srcDoc:y,title:"output",sandbox:"allow-scripts",frameBorder:"0",width:"100%",height:"100%"})))};l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(d,null)),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.11e5c510.chunk.js.map