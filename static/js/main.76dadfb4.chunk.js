(this.webpackJsonpchronograph=this.webpackJsonpchronograph||[]).push([[0],{19:function(e,t,a){e.exports={display:"Stopwatch_display__2lsUp",time:"Stopwatch_time__bIS8P",controlPanel:"Stopwatch_controlPanel__sB0NX",splitButton:"Stopwatch_splitButton__ik1Os",resetButton:"Stopwatch_resetButton__2zbM-",startButton:"Stopwatch_startButton__25FCs",splitList:"Stopwatch_splitList__1SokE",splitItem:"Stopwatch_splitItem__1ttMe",splitTime:"Stopwatch_splitTime__2sy54",splitRemove:"Stopwatch_splitRemove__19h4X"}},34:function(e,t,a){e.exports={timeRow:"Clock_timeRow__g1F_t",time:"Clock_time__3jRNR",utcOffset:"Clock_utcOffset__1Mhjb",dateRow:"Clock_dateRow__1q38-"}},43:function(e,t,a){e.exports={display:"Timer_display__3sTD_",time:"Timer_time__3u_3X",controlPanel:"Timer_controlPanel__1OmiN"}},46:function(e,t,a){e.exports={alarmTime:"AlarmClock_alarmTime__3gGc5"}},54:function(e,t,a){e.exports={"tab-panel":"App_tab-panel__13ZSf"}},74:function(e,t,a){e.exports=a(85)},79:function(e,t,a){},85:function(e,t,a){"use strict";a.r(t);var n,c,l,o=a(0),s=a.n(o),i=a(10),r=a.n(i),m=(a(79),a(8)),u=a(54),f=a.n(u),p=a(34),_=a.n(p),b=a(12),v=a.n(b),E=function(e){var t=e.visible,a=Object(o.useState)(b()),n=Object(m.a)(a,2),c=n[0],l=n[1];return Object(o.useEffect)((function(){setTimeout((function(){l(b()),setInterval((function(){l(b())}),1e3)}),b().endOf("s").diff(b()))}),[]),s.a.createElement(s.a.Fragment,null,t&&s.a.createElement("div",null,s.a.createElement("div",{className:_.a.display},s.a.createElement("div",{className:_.a.timeRow},s.a.createElement("div",{className:_.a.time},c.format("HH:mm:ss")),s.a.createElement("div",{className:_.a.utcOffset},"(GMT +",0!=c.utcOffset()?c.utcOffset()/60:0,")")),s.a.createElement("div",{className:_.a.dateRow},c.format("DD MMMM YYYY")))))},d=a(46),O=a.n(d),S=a(114),j=function(e){var t=e.visible,a=Object(o.useState)(!1),c=Object(m.a)(a,2),l=c[0],i=c[1],r=Object(o.useState)(b()),u=Object(m.a)(r,2),f=u[0],p=u[1],_=Object(o.useState)(!1),v=Object(m.a)(_,2),E=v[0],d=v[1];return Object(o.useEffect)((function(){l&&(clearInterval(n),setTimeout((function(){n=setInterval((function(){console.log(b().milliseconds()),f.isSame(b(),"s")&&(new Notification(f.format("HH:mm:ss")),i(!1),clearInterval(n))}),1e3)}),b().endOf("s").diff(b())))}),[f,l]),s.a.createElement(s.a.Fragment,null,t&&s.a.createElement("div",null,s.a.createElement("div",{className:O.a.display,onClick:function(){return d(!0)}},s.a.createElement("div",{className:O.a.alarmTime},f.format("HH:mm:ss"))),s.a.createElement(S.a,{ampm:!1,open:E,openTo:"hours",views:["hours","minutes","seconds"],format:"HH:mm:ss",value:f,InputProps:{inputComponent:function(){return null}},onChange:function(e){i(!0),p(e)},onClose:function(){return d(!1)}})))},h=a(22),N=a(19),C=a.n(N),k=b().startOf("day"),w=a(56),y=a.n(w),I=function(e){var t=e.visible,a=Object(o.useState)(k),n=Object(m.a)(a,2),l=n[0],i=n[1],r=Object(o.useState)(!1),u=Object(m.a)(r,2),f=u[0],p=u[1],_=Object(o.useState)([]),b=Object(m.a)(_,2),E=b[0],d=b[1];return Object(o.useEffect)((function(){f?c=setInterval((function(){i((function(e){return e.clone().add(1,"s")}))}),1e3):(clearInterval(c),i(k),d([]))}),[f]),t?s.a.createElement("div",null,s.a.createElement("div",{className:C.a.display},s.a.createElement("div",{className:C.a.time},l.format("HH:mm:ss"))),s.a.createElement("div",{className:C.a.controlPanel},f?s.a.createElement("div",null,s.a.createElement("button",{className:C.a.splitButton,onClick:function(){d([].concat(Object(h.a)(E),[{key:v()(),value:l.clone()}]))}},"Split"),s.a.createElement("button",{className:C.a.resetButton,style:{marginLeft:"150px"},onClick:function(){p(!1)}},"Reset")):s.a.createElement("button",{className:C.a.startButton,onClick:function(){p(!0)}},"Start")),s.a.createElement("div",{className:C.a.splitList},E.map((function(e){return s.a.createElement("div",{className:C.a.splitItem,key:e.key},s.a.createElement("div",{className:C.a.splitTime},e.value.format("HH:mm:ss")),s.a.createElement("div",{className:C.a.splitRemove},s.a.createElement(y.a,{onClick:function(){d(E.filter((function(t){return t!=e})))},style:{fontSize:"20px",cursor:"pointer"}})))})))):null},T=a(43),H=a.n(T),g=a(47),x=a.n(g),R=a(57),B=a.n(R),P=a(58),M=a.n(P),z=b().startOf("day"),F=function(e){var t=e.visible,a=Object(o.useState)(z),n=Object(m.a)(a,2),c=n[0],i=n[1],r=Object(o.useState)(z),u=Object(m.a)(r,2),f=u[0],p=u[1],_=Object(o.useState)(!1),b=Object(m.a)(_,2),v=b[0],E=b[1],d=Object(o.useState)(!1),O=Object(m.a)(d,2),j=O[0],h=O[1],N=Object(o.useState)(!1),C=Object(m.a)(N,2),k=C[0],w=C[1];return Object(o.useEffect)((function(){v&&f.isSame(z)&&(clearInterval(l),E(!1),new Notification("Timer end"))}),[f,v]),Object(o.useEffect)((function(){v||p(c)}),[c,v]),Object(o.useEffect)((function(){v?l=setInterval((function(){return p((function(e){return e.clone().subtract(1,"s")}))}),1e3):(clearInterval(l),p(c),h(!1))}),[v]),Object(o.useEffect)((function(){v&&(j?clearInterval(l):l=setInterval((function(){return p((function(e){return e.clone().subtract(1,"s")}))}),1e3))}),[j]),s.a.createElement(s.a.Fragment,null,t&&s.a.createElement("div",null,s.a.createElement("div",{className:H.a.display,onClick:function(){return!v&&w(!0)}},s.a.createElement("div",{className:H.a.time},f.format("HH:mm:ss"))),s.a.createElement("div",{className:H.a.controlPanel},v?s.a.createElement(s.a.Fragment,null,j?s.a.createElement(x.a,{style:{fontSize:"70px",cursor:"pointer"},onClick:function(){h(!1)}}):s.a.createElement(B.a,{style:{fontSize:"70px",cursor:"pointer"},onClick:function(){h(!0)}}),s.a.createElement(M.a,{style:{fontSize:"70px",cursor:"pointer"},onClick:function(){E(!1)}})):s.a.createElement(x.a,{style:{fontSize:"70px",cursor:"pointer"},onClick:function(){f.isSame(z)||E(!0)}})),s.a.createElement(S.a,{ampm:!1,open:k,openTo:"hours",views:["hours","minutes","seconds"],format:"HH:mm:ss",value:f,InputProps:{inputComponent:function(){return null}},onChange:function(e){i(e)},onClose:function(){return w(!1)}})))},L=a(116),Y=a(113),A=a(13),D=a(59);var X=function(){var e=Object(o.useState)(0),t=Object(m.a)(e,2),a=t[0],n=t[1];return s.a.createElement(A.a,{utils:D.a},s.a.createElement(L.a,{value:a,onChange:function(e,t){n(t)},indicatorColor:"primary",textColor:"primary",centered:!0},s.a.createElement(Y.a,{label:"Clock"}),s.a.createElement(Y.a,{label:"Alarm-clock"}),s.a.createElement(Y.a,{label:"Stopwatch"}),s.a.createElement(Y.a,{label:"Timer"})),s.a.createElement("div",{className:f.a["tab-panel"]},s.a.createElement(E,{visible:0==a}),s.a.createElement(j,{visible:1==a}),s.a.createElement(I,{visible:2==a}),s.a.createElement(F,{visible:3==a})))};Notification.requestPermission(),r.a.render(s.a.createElement(X,null),document.getElementById("root"))}},[[74,1,2]]]);
//# sourceMappingURL=main.76dadfb4.chunk.js.map