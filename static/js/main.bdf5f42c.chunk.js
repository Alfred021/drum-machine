(this["webpackJsonpdrum-machine"]=this["webpackJsonpdrum-machine"]||[]).push([[0],{11:function(e,c,s){},12:function(e,c,s){"use strict";s.r(c);var a=s(0),t=s(1),n=s.n(t),r=s(5),m=s.n(r),d=(s(11),s(4)),o=(s(3),function(e){var c=e.drumKey,s=e.name,n=e.handleClick,r=e.src,m=e.power,d=e.id,o=Object(t.useRef)(),i=function(e){e.keyCode===c.charCodeAt()&&(n(s),o.current.play())};return Object(t.useEffect)((function(){if(m)return document.addEventListener("keydown",i),function(){document.removeEventListener("keydown",i)}}),[m]),Object(a.jsx)("div",{className:"col-sm-auto",children:Object(a.jsxs)("div",{id:d,className:"drum-pad btn btn-secondary btn-lg",onClick:function(){m?(o.current.play(),n(s)):!1===m&&n(s)},children:[c,Object(a.jsx)("audio",{className:"clip",id:c,ref:o,src:r})]})})}),i=function(e){var c=e.handlePower,s=e.message,t=e.power;return Object(a.jsxs)("div",{className:"col-sm-4",children:[Object(a.jsx)("div",{className:"row-mx-auto",children:Object(a.jsx)("div",{className:"col-sm-auto",children:Object(a.jsx)("div",{className:"d-flex align-items-center",id:"display",children:Object(a.jsx)("p",{className:"text-center message",children:s})})})}),Object(a.jsx)("div",{className:"row-mx-auto",children:Object(a.jsx)("div",{className:"col-sm-auto",children:Object(a.jsxs)("div",{className:"form-check form-switch",children:[Object(a.jsx)("input",{type:"checkbox",className:"form-check-input",id:"flexSwitchCheckDefault",onChange:c,checked:t}),Object(a.jsx)("label",{className:"form-check-label",for:"flexSwitchCheckDefault",children:"Power"})]})})})]})},l=[[{name:"Bdim Chord",key:"Q",src:"https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"},{name:"C Chord",key:"W",src:"https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"},{name:"A Chord",key:"E",src:"https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"}],[{name:"B Chord",key:"A",src:"https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"},{name:"Clap",key:"S",src:"https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"},{name:"Open-HH",key:"D",src:"https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"}],[{name:"Kick-'n-Hat",key:"Z",src:"https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"},{name:"Kick",key:"X",src:"https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"},{name:"Closed-HH",key:"C",src:"https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"}]],u=function(){var e=Object(t.useState)(""),c=Object(d.a)(e,2),s=c[0],n=c[1],r=Object(t.useState)(!0),m=Object(d.a)(r,2),u=m[0],h=m[1],j=function(e){u?n(e):!1===u&&n("")};return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h1",{className:"text-center",children:"Drum Machine"}),Object(a.jsx)("div",{className:"container-fluid",id:"drum-machine",children:Object(a.jsx)("div",{className:"card",children:Object(a.jsx)("div",{className:"card-body",children:Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)("div",{className:"col-md-8",children:l.map((function(e){return Object(a.jsx)("div",{className:"row justify-content-center",children:e.map((function(e){return Object(a.jsx)(o,{drumKey:e.key,name:e.name,handleClick:j,src:e.src,power:u,id:e.name})}))},e)}))}),Object(a.jsx)(i,{handlePower:function(){h(!u),n("")},message:s,power:u})]})})})})]})},h=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,13)).then((function(c){var s=c.getCLS,a=c.getFID,t=c.getFCP,n=c.getLCP,r=c.getTTFB;s(e),a(e),t(e),n(e),r(e)}))};m.a.render(Object(a.jsx)(n.a.StrictMode,{children:Object(a.jsx)(u,{})}),document.getElementById("root")),h()},3:function(e,c,s){}},[[12,1,2]]]);
//# sourceMappingURL=main.bdf5f42c.chunk.js.map