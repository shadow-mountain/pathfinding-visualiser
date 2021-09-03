(this["webpackJsonppathfinding-app"]=this["webpackJsonppathfinding-app"]||[]).push([[0],{106:function(t,e,n){},107:function(t,e,n){},184:function(t,e,n){},185:function(t,e,n){"use strict";n.r(e);var a,r,c=n(0),i=n.n(c),o=n(9),l=n.n(o),s=(n(106),n(107),n(40)),u=n(66),h=n.n(u),f=n(88),d=n(20),p=n(94),j=n(222),v=n(223),b=n(224),y=n(228),m=n(219),O=n(214),x=n(218),g=n(220),S=n(226),k=n(225),F=n(227),E=n(221);!function(t){t[t.Empty=0]="Empty",t[t.Goal=1]="Goal",t[t.Start=2]="Start",t[t.Wall=3]="Wall",t[t.Checkpoint=4]="Checkpoint",t[t.Visited=5]="Visited"}(a||(a={})),function(t){t[t.AStar=0]="AStar",t[t.Dijkstra=1]="Dijkstra",t[t.DFS=2]="DFS",t[t.BFS=3]="BFS",t[t.Random=4]="Random"}(r||(r={}));var w=n(6),C=function(t){var e=t.handleType,n=t.type,c=t.algorithm,i=t.handleAlgorithm,o=t.handlePathfind;return Object(w.jsx)(O.a,{maxWidth:"lg",children:Object(w.jsxs)(x.a,{container:!0,spacing:3,alignItems:"flex-end",children:[Object(w.jsx)(x.a,{xs:4,item:!0,children:Object(w.jsxs)(y.a,{size:"small",value:n,exclusive:!0,onChange:function(t,n){e(n)},children:[Object(w.jsx)(m.a,{value:a.Start,children:"Start"}),Object(w.jsx)(m.a,{value:a.Checkpoint,children:"Checkpoint"}),Object(w.jsx)(m.a,{value:a.Goal,children:"Goal"}),Object(w.jsx)(m.a,{value:a.Wall,children:"Wall"}),Object(w.jsx)(m.a,{value:a.Empty,children:"Erase"})]})}),Object(w.jsx)(x.a,{xs:4,item:!0,children:Object(w.jsxs)(g.a,{style:{minWidth:"120px"},children:[Object(w.jsx)(S.a,{children:"Algorithm"}),Object(w.jsxs)(k.a,{value:c,onChange:function(t){i(t.target.value)},label:"Algorithm",children:[Object(w.jsx)(F.a,{value:r.AStar,children:"AStar"}),Object(w.jsx)(F.a,{value:r.Dijkstra,children:"Dijkstra"}),Object(w.jsx)(F.a,{value:r.BFS,children:"BFS"}),Object(w.jsx)(F.a,{value:r.DFS,children:"DFS"}),Object(w.jsx)(F.a,{value:r.Random,children:"Random"})]})]})}),Object(w.jsx)(x.a,{xs:4,item:!0,children:Object(w.jsx)(E.a,{onClick:o,variant:"contained",color:"primary",children:"PATHFIND"})})]})})},D=n(52),A=60,M=Math.floor(32),W=Math.floor(18),B=function(t,e,n,a,r){t.strokeStyle="#94167F",t.lineWidth=2,t.beginPath(),t.moveTo(e,n),t.lineTo(a,r),t.stroke()},G=function(t,e){switch(e.type){case a.Empty:t.fillStyle="#300350";break;case a.Visited:t.fillStyle="#DD517F";break;case a.Wall:t.fillStyle="#5F97AA";break;case a.Start:t.fillStyle="#4C9C42";break;case a.Checkpoint:t.fillStyle="#0083FF  ";break;case a.Goal:t.fillStyle="#FF0072"}t.beginPath(),t.rect(e.x*A,e.y*A,A,A),t.fill()},T=n(71),L=function(t,e){for(var n in t)if(t[n].type===e)return n;return""},P=function(t){return L(t,a.Goal)},R=function(t){return L(t,a.Start)},I=function(t,e){for(var n=T(t),r=0;r<e.length;r++){var c=e[r];n[c.key].type===a.Empty&&(n[c.key].type=c.newType)}return n},N=function(t){var e=V(t),n=e.x,a=e.y,r=[];return a>0&&r.push("".concat(n,",").concat(a-1)),n>0&&r.push("".concat(n-1,",").concat(a)),n<M-1&&r.push("".concat(n+1,",").concat(a)),a<W-1&&r.push("".concat(n,",").concat(a+1)),r},V=function(t){var e=t.split(",").map(Number),n=Object(d.a)(e,2);return{x:n[0],y:n[1]}},z=(n(184),n(71)),J=!1,H=function(t,e){var n=t.getBoundingClientRect(),a=t.width/n.width,r=t.height/n.height;return[(e.clientX-n.left)*a,(e.clientY-n.top)*r]},X=function(t){var e=Object(c.useState)(null),n=Object(d.a)(e,2),r=n[0],i=n[1],o=Object(s.a)({},t),l=o.world,u=o.handleWorld,h=Object(c.useRef)(null);return Object(c.useEffect)((function(){var e=h.current,n=function(e){if(!0===J){var n=h.current,r=Object(D.a)(function(t){var e=Object(D.a)(t),n=e[0],a=e[1];return[n=Math.floor(n/A),a=Math.floor(a/A)]}(H(n,e))),c=r[0],i=r[1],o=z(l);if(t.type===a.Goal){var s=P(o);s&&(o[s].type=a.Empty)}else if(t.type===a.Start){var f=R(o);f&&(o[f].type=a.Empty)}o["".concat(c,",").concat(i)].type=t.type,u(o)}},r=function(t){J=!0,n(t)},c=function(t){J&&(n(t),J=!1)};return e.addEventListener("mousedown",r),e.addEventListener("mousemove",n),e.addEventListener("mouseup",c),e.addEventListener("mouseleave",(function(t){J&&(J=!1)})),function(){e.removeEventListener("mousemove",n),e.removeEventListener("mousedown",r),e.removeEventListener("mouseup",c)}}),[l,t.type]),Object(c.useEffect)((function(){var t=h.current;if(i(t.getContext("2d")),r){r.canvas.width=1920,r.canvas.height=1080;var e=r.canvas.width,n=r.canvas.height;for(var a in l)G(r,l[a]);for(var c=1;c<M;c++)B(r,c*A,0,c*A,n);for(var o=1;o<W;o++)B(r,0,o*A,e,o*A)}}),[l]),Object(w.jsx)("canvas",{className:"Grid",ref:h})},Y=n(67),q=function(t){var e=[],n=[],r=[],c=R(t);r.push(c),n.push(c);for(var i="";n.length>0;){if(t[i=n.shift()].type===a.Goal){console.log("found");break}var o,l=Object(Y.a)(N(i));try{for(l.s();!(o=l.n()).done;){var s=o.value;t[s].type!==a.Wall&&(r.includes(s)||(r.push(s),n.push(s)))}}catch(u){l.e(u)}finally{l.f()}e.push({key:i,newType:a.Visited})}return e},K=function(t){var e=[],n=[],r=[],c=R(t);n.push(c);for(var i="";n.length>0&&t[i=n.pop()].type!==a.Goal;)if(!r.includes(i)){r.push(i);var o,l=Object(Y.a)(N(i));try{for(l.s();!(o=l.n()).done;){var s=o.value;t[s].type!==a.Wall&&n.push(s)}}catch(u){l.e(u)}finally{l.f()}e.push({key:i,newType:a.Visited})}return e},Q=function(t){return[]},U=function(t){return[]},Z=function(t){return[]},$=function(t,e){if(R(t)&&P(t))switch(e){case r.BFS:return q(t);case r.DFS:return K(t);case r.AStar:return Q(t);case r.Dijkstra:return U(t);case r.Random:return Z(t);default:return q(t)}return[]},_=Object(p.a)({palette:{type:"dark"},typography:{h3:{fontFamily:"Consolas",color:"#FFF",paddingBottom:"20px"}}}),tt=function(){var t=Object(c.useState)(a.Start),e=Object(d.a)(t,2),n=e[0],i=e[1],o=Object(c.useState)({}),l=Object(d.a)(o,2),u=l[0],p=l[1],y=Object(c.useState)(r.BFS),m=Object(d.a)(y,2),O=m[0],x=m[1];Object(c.useEffect)((function(){for(var t={},e=0;e<M;e++)for(var n=0;n<W;n++)t["".concat(e,",").concat(n)]={type:a.Empty,x:e,y:n};var r=Math.floor(Math.random()*M),c=Math.floor(Math.random()*W),i=Math.floor(Math.random()*M),o=Math.floor(Math.random()*W);t["".concat(r,",").concat(c)].type=a.Start,t["".concat(i,",").concat(o)].type=a.Goal,k(t)}),[]);var g=function(t){return new Promise((function(e){return setTimeout(e,t)}))},S=function(){var t=Object(f.a)(h.a.mark((function t(e,n){var a;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(e.length>0)){t.next=6;break}return t.next=3,g(50);case 3:a=I(n,e.splice(0,5)),p(a),S(e,a);case 6:return t.abrupt("return");case 7:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),k=function(t){p(t)},F={type:n,handleWorld:k,world:u},E={type:n,handleType:function(t){i(t)},algorithm:O,handleAlgorithm:function(t){x(t)},handlePathfind:function(){var t=function(t){var e=T(t);for(var n in e)e[n].type===a.Visited&&(e[n].type=a.Empty);return e}(u);p(t);var e=$(t,O);e.shift(),S(e,t)}};Object(j.a)({root:{background:"#303030",border:0,borderRadius:3,color:"white",height:48,padding:"15px 30px",marginBottom:"20px"}})();return Object(w.jsx)("div",{children:Object(w.jsxs)(v.a,{theme:_,children:[Object(w.jsx)(b.a,{variant:"h3",children:"Interactive Pathfinder"}),Object(w.jsxs)("div",{style:{zIndex:100},children:[Object(w.jsx)(C,Object(s.a)({},E)),Object(w.jsx)(X,Object(s.a)({},F))]}),Object(w.jsx)("div",{className:"overlay"}),Object(w.jsx)("div",{className:"overlay glitch"})]})})};var et=function(){return Object(w.jsx)("div",{className:"App",children:Object(w.jsx)(tt,{})})},nt=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,229)).then((function(e){var n=e.getCLS,a=e.getFID,r=e.getFCP,c=e.getLCP,i=e.getTTFB;n(t),a(t),r(t),c(t),i(t)}))};l.a.render(Object(w.jsx)(i.a.StrictMode,{children:Object(w.jsx)(et,{})}),document.getElementById("root")),nt()}},[[185,1,2]]]);
//# sourceMappingURL=main.60346f9b.chunk.js.map