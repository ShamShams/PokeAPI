(window.webpackJsonppokeapi=window.webpackJsonppokeapi||[]).push([[0],{22:function(n,e,t){n.exports=t.p+"static/media/Pokemon_logo.8f80a92d.png"},27:function(n,e,t){n.exports=t(54)},53:function(n,e,t){},54:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),o=t(19),u=t.n(o),c=t(5),i=t.n(c),l=t(20),p=t(4),f=t(21),m=t.n(f),b=t(22),x=t.n(b),s=t(1),g=t(2);function d(){var n=Object(s.a)(["\n  margin: 0;\n  text-align: center;\n"]);return d=function(){return n},n}var v=g.a.div(d()),h="#3c5ba6",E="#ffcb05",j="#f1f1f1",O="#787878",w="#4f535c",k="#2b3854";function z(){var n=Object(s.a)(["\n  margin-left: 10px;\n  padding: 4px 10px;\n  border: 2px solid ",";\n  border-radius: 4px;\n  color: ",";\n  font-size: 16px;\n  cursor: pointer;\n  &:hover,\n  &:focus {\n    background-color: ",";\n  }\n"]);return z=function(){return n},n}function y(){var n=Object(s.a)(["\n  height: 23px;\n  width: 60px;\n  font-size: 16px;\n  font-weight: bold;\n  color: ",";\n  text-align: center;\n"]);return y=function(){return n},n}var P=g.a.input(y(),h),S=g.a.button(z(),h,h,E),T=function(n){var e=n.onSubmit,t=n.onValueChange,r=n.inputValue,o=n.buttonText;return a.a.createElement("form",{onSubmit:e},a.a.createElement(P,{type:"text",onChange:t,value:r}),a.a.createElement(S,{type:"submit"},o))};function V(){var n=Object(s.a)(["\n  color: ",";\n  font-size: 25px;\n  width: 100px;\n"]);return V=function(){return n},n}function C(){var n=Object(s.a)(["\n  color: ",";\n  font-size: 15px;\n  font-weight: lighter;\n  width: 90px;\n  padding-bottom: 10px;\n"]);return C=function(){return n},n}function D(){var n=Object(s.a)(["\n  margin: auto;\n"]);return D=function(){return n},n}function I(){var n=Object(s.a)(["\n  color: ",";\n  font-size: 24px;\n  text-transform: capitalize;\n  margin-left: 5px;\n"]);return I=function(){return n},n}function _(){var n=Object(s.a)(["\n  color: ",";\n  font-size: 18px;\n  font-weight: lighter;\n  margin-top: 0;\n  margin-bottom: 25px;\n"]);return _=function(){return n},n}function B(){var n=Object(s.a)(["\n  width: 150px;\n"]);return B=function(){return n},n}function J(){var n=Object(s.a)(["\n  text-transform: capitalize;\n  font-size: 30px;\n  color: ",";\n  margin: 0;\n"]);return J=function(){return n},n}function N(){var n=Object(s.a)(["\n  width: 300px;\n  margin: auto;\n  margin-bottom: 30px;\n  padding: 30px;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  background-color: ",";\n  box-shadow: 2px 2px 5px ",";\n  border-radius: 7px;\n"]);return N=function(){return n},n}var F=g.a.div(N(),j,O),H=g.a.h2(J(),k),L=g.a.img(B()),W=g.a.p(_(),w),X=g.a.span(I(),k),q=g.a.table(D()),A=g.a.th(C(),w),G=g.a.td(V(),k),K=function(n){var e=n.data,t=e.id,r=e.name,o=e.sprites,u=e.types,c=e.base_experience,i=e.height,l=e.weight;return a.a.createElement(F,null,a.a.createElement(H,null,r),a.a.createElement(L,{src:o.front_default,alt:"Pokemon image"}),a.a.createElement(W,null,"Type: ",a.a.createElement(X,null,u[0].type.name)),a.a.createElement(q,null,a.a.createElement("tbody",null,a.a.createElement("tr",null,a.a.createElement(G,null,t),a.a.createElement(G,null,c)),a.a.createElement("tr",null,a.a.createElement(A,null,"PokeID"),a.a.createElement(A,null,"Base XP")),a.a.createElement("tr",null,a.a.createElement(G,null,i),a.a.createElement(G,null,l)),a.a.createElement("tr",null,a.a.createElement(A,null,"Height"),a.a.createElement(A,null,"Weight")))))};function M(){var n=Object(s.a)(["\n  height: 120px;\n  margin: 20px 0 40px 0;\n"]);return M=function(){return n},n}var Q=g.a.img(M());function R(){var n=Object(s.a)(["\n  color: ",";\n  font-size: 17px;\n  margin-top: 15px;\n  margin-bottom: 30px;\n"]);return R=function(){return n},n}var U=g.a.p(R(),h),Y=function(){var n=Object(r.useState)(""),e=Object(p.a)(n,2),t=e[0],o=e[1],u=Object(r.useState)(null),c=Object(p.a)(u,2),f=c[0],b=c[1],s=Object(r.useState)("Type a Pokemon id from 1 to 802..."),g=Object(p.a)(s,2),d=g[0],h=g[1],E=function(){var n=Object(l.a)(i.a.mark(function n(e){var r,a;return i.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(e.preventDefault(),r=t.trim()){n.next=4;break}return n.abrupt("return");case 4:return n.prev=4,n.next=7,m()("https://pokeapi.co/api/v2/pokemon/".concat(r));case 7:a=n.sent,b(a.data),n.next=15;break;case 11:n.prev=11,n.t0=n.catch(4),b(null),h("No pokemon found :(");case 15:o("");case 16:case"end":return n.stop()}},n,null,[[4,11]])}));return function(e){return n.apply(this,arguments)}}();return a.a.createElement(v,null,a.a.createElement(Q,{src:x.a,alt:"Logo Pok\xe9mon"}),a.a.createElement(T,{onSubmit:E,onValueChange:function(n){return o(n.target.value)},inputValue:t,buttonText:"FIND"}),a.a.createElement(U,null,d),f&&a.a.createElement(K,{data:f}))};t(53);u.a.render(a.a.createElement(Y,null),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.49f99d33.chunk.js.map