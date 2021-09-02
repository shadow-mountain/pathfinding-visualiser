(this["webpackJsonppathfinding-app"]=this["webpackJsonppathfinding-app"]||[]).push([[0],{64:function(t,e,a){},65:function(t,e,a){},70:function(t,e,a){},74:function(t,e,a){"use strict";a.r(e);var n,c,r=a(0),i=a.n(r),l=a(9),o=a.n(l),s=(a(64),a(65),a(35)),h=a(30),j=a(52),d=a(111),u=a(112),f=a(113),b=a(117),v=a(108),p=a(103),O=a(107),x=a(109),m=a(115),y=a(114),g=a(116),S=a(110);!function(t){t[t.Empty=0]="Empty",t[t.Goal=1]="Goal",t[t.Start=2]="Start",t[t.Wall=3]="Wall",t[t.Checkpoint=4]="Checkpoint",t[t.Visited=5]="Visited"}(n||(n={})),function(t){t[t.AStar=0]="AStar",t[t.Dijkstra=1]="Dijkstra",t[t.DFS=2]="DFS",t[t.BFS=3]="BFS",t[t.Random=4]="Random"}(c||(c={}));var F=a(6),k=function(t){var e=t.handleType,a=t.type,r=t.algorithm,i=t.handleAlgorithm;return Object(F.jsx)(p.a,{maxWidth:"lg",children:Object(F.jsxs)(O.a,{container:!0,spacing:3,alignItems:"flex-end",children:[Object(F.jsx)(O.a,{xs:4,item:!0,children:Object(F.jsxs)(b.a,{size:"small",value:a,exclusive:!0,onChange:function(t,a){e(a)},children:[Object(F.jsx)(v.a,{value:n.Start,children:"Start"}),Object(F.jsx)(v.a,{value:n.Checkpoint,children:"Checkpoint"}),Object(F.jsx)(v.a,{value:n.Goal,children:"Goal"}),Object(F.jsx)(v.a,{value:n.Wall,children:"Wall"}),Object(F.jsx)(v.a,{value:n.Empty,children:"Erase"})]})}),Object(F.jsx)(O.a,{xs:4,item:!0,children:Object(F.jsxs)(x.a,{style:{minWidth:"120px"},children:[Object(F.jsx)(m.a,{children:"Algorithm"}),Object(F.jsxs)(y.a,{value:r,onChange:function(t){i(t.target.value)},label:"Algorithm",children:[Object(F.jsx)(g.a,{value:c.AStar,children:"AStar"}),Object(F.jsx)(g.a,{value:c.Dijkstra,children:"Dijkstra"}),Object(F.jsx)(g.a,{value:c.BFS,children:"BFS"}),Object(F.jsx)(g.a,{value:c.DFS,children:"DFS"}),Object(F.jsx)(g.a,{value:c.Random,children:"Random"})]})]})}),Object(F.jsx)(O.a,{xs:4,item:!0,children:Object(F.jsx)(S.a,{variant:"contained",color:"primary",children:"PATHFIND"})})]})})},C=a(43),E=60,A=function(t,e,a,n,c){t.strokeStyle="#94167F",t.lineWidth=2,t.beginPath(),t.moveTo(e,a),t.lineTo(n,c),t.stroke()},D=function(t,e){switch(e.type){case n.Empty:t.fillStyle="#300350";break;case n.Visited:t.fillStyle="#DD517F";break;case n.Wall:t.fillStyle="#5F97AA";break;case n.Start:t.fillStyle="#4C9C42";break;case n.Checkpoint:t.fillStyle="#0083FF  ";break;case n.Goal:t.fillStyle="#FF0072"}t.beginPath(),t.rect(e.x*E,e.y*E,E,E),t.fill()},M=(a(70),a(71)),w=function(t,e){var a=t.getBoundingClientRect(),n=t.width/a.width,c=t.height/a.height;return[(e.clientX-a.left)*n,(e.clientY-a.top)*c]},W=function(t){var e=Object(C.a)(t),a=e[0],n=e[1];return[a=Math.floor(a/E),n=Math.floor(n/E)]},B=function(t,e){for(var a in t)if(t[a].type===e)return a},G=function(t){return B(t,n.Goal)},R=function(t){return B(t,n.Start)},T=function(t){var e=Math.floor(32),a=Math.floor(18),c=Object(r.useState)(null),i=Object(h.a)(c,2),l=i[0],o=i[1],j=Object(s.a)({},t),d=j.world,u=j.handleWorld,f=Object(r.useRef)(null);return Object(r.useEffect)((function(){for(var t={},c=0;c<e;c++)for(var r=0;r<a;r++)t["".concat(c,",").concat(r)]={type:n.Empty,x:c,y:r};var i=Math.floor(Math.random()*e),l=Math.floor(Math.random()*a),o=Math.floor(Math.random()*e),s=Math.floor(Math.random()*a);t["".concat(i,",").concat(l)].type=n.Start,t["".concat(o,",").concat(s)].type=n.Goal,u(t)}),[]),Object(r.useEffect)((function(){var e=f.current;function a(e){var a=f.current,c=Object(C.a)(W(w(a,e))),r=c[0],i=c[1],l=M.cloneDeep(d);if(t.type===n.Goal){var o=G(l);o&&(l[o].type=n.Empty)}else if(t.type===n.Start){var s=R(l);s&&(l[s].type=n.Empty)}l["".concat(r,",").concat(i)].type=t.type,u(l)}return e.addEventListener("mousemove",a),function(){e.removeEventListener("mousemove",a)}}),[d]),Object(r.useEffect)((function(){var t=f.current;if(o(t.getContext("2d")),l){l.canvas.width=1920,l.canvas.height=1080;var n=l.canvas.width,c=l.canvas.height;for(var r in d)D(l,d[r]);for(var i=1;i<e;i++)A(l,i*E,0,i*E,c);for(var s=1;s<a;s++)A(l,0,s*E,n,s*E)}}),[d]),Object(F.jsx)("canvas",{className:"Grid",ref:f})},I=Object(j.a)({palette:{type:"dark"},typography:{h3:{fontFamily:"Consolas",color:"#FFF",paddingBottom:"20px"}}}),P=function(){var t=Object(r.useState)(n.Start),e=Object(h.a)(t,2),a=e[0],i=e[1],l=Object(r.useState)({}),o=Object(h.a)(l,2),j=o[0],b=o[1],v=Object(r.useState)(c.AStar),p=Object(h.a)(v,2),O=p[0],x=p[1],m={type:a,handleWorld:function(t){b(t)},world:j},y={type:a,handleType:function(t){i(t)},algorithm:O,handleAlgorithm:function(t){x(t)}};Object(d.a)({root:{background:"#303030",border:0,borderRadius:3,color:"white",height:48,padding:"15px 30px",marginBottom:"20px"}})();return Object(F.jsx)("div",{children:Object(F.jsxs)(u.a,{theme:I,children:[Object(F.jsx)(f.a,{variant:"h3",children:"Interactive Pathfinder"}),Object(F.jsxs)("div",{style:{zIndex:100},children:[Object(F.jsx)(k,Object(s.a)({},y)),Object(F.jsx)(T,Object(s.a)({},m))]}),Object(F.jsx)("div",{className:"overlay"}),Object(F.jsx)("div",{className:"overlay glitch"})]})})};var N=function(){return Object(F.jsx)("div",{className:"App",children:Object(F.jsx)(P,{})})},L=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,118)).then((function(e){var a=e.getCLS,n=e.getFID,c=e.getFCP,r=e.getLCP,i=e.getTTFB;a(t),n(t),c(t),r(t),i(t)}))};o.a.render(Object(F.jsx)(i.a.StrictMode,{children:Object(F.jsx)(N,{})}),document.getElementById("root")),L()}},[[74,1,2]]]);
//# sourceMappingURL=main.e0922840.chunk.js.map