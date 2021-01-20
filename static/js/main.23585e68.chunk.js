(this["webpackJsonpapp-clima-react"]=this["webpackJsonpapp-clima-react"]||[]).push([[0],{14:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a(1),s=a.n(n),i=a(7),r=a.n(i),l=(a(14),a(5)),j=a.n(l),d=a(8),o=a(2),u=function(e){var t=e.titulo;return Object(c.jsx)("nav",{children:Object(c.jsx)("div",{className:"nav-wrapper light-blue darken-2",children:Object(c.jsx)("a",{href:"#!",className:"brand-logo",children:t})})})},b=a(3),p=a(6),O=function(e){var t=e.mensaje;return Object(c.jsxs)("p",{className:"red drarken-4 error",children:[t," "]})},h=function(e){var t=e.busqueda,a=e.guardarBusqueda,s=e.guardaConsultar,i=Object(n.useState)(!1),r=Object(o.a)(i,2),l=r[0],j=r[1],d=t.cuidad,u=t.pais,h=function(e){a(Object(p.a)(Object(p.a)({},t),{},Object(b.a)({},e.target.name,e.target.value)))};return Object(c.jsxs)("form",{onSubmit:function(e){e.preventDefault(),""!==d.trim()&&""!==u.trim()?(j(!1),s(!0)):j(!0)},children:[l?Object(c.jsx)(O,{mensaje:"Todos los campos son obligatorios"}):null,Object(c.jsxs)("div",{className:"input-field col s12",children:[Object(c.jsx)("input",{type:"text",name:"cuidad",id:"ciudad",value:d,onChange:h}),Object(c.jsx)("label",{htmlFor:"ciudad",children:"Ciudad:"})]}),Object(c.jsxs)("div",{className:"input-field col s12",children:[Object(c.jsxs)("select",{name:"pais",id:"pais",value:u,onChange:h,children:[Object(c.jsx)("option",{value:"",children:"--Seleccione Un Pais--"}),Object(c.jsx)("option",{value:"US",children:"Estados Unidos"}),Object(c.jsx)("option",{value:"MX",children:"M\xe9xico"}),Object(c.jsx)("option",{value:"AR",children:"Argentina"}),Object(c.jsx)("option",{value:"CO",children:"Colombia"}),Object(c.jsx)("option",{value:"CR",children:"Costa Rica"}),Object(c.jsx)("option",{value:"ES",children:"Espa\xf1a"}),Object(c.jsx)("option",{value:"PE",children:"Per\xfa"})]}),Object(c.jsx)("label",{htmlFor:"pais",children:"Pais:"})]}),Object(c.jsx)("div",{className:"input-field col s12",children:Object(c.jsx)("button",{type:"submit",className:"waves-effect waves-light btn-large btn-block yellow accent-4",children:"Consultar Clima"})})]})},m=function(e){var t=e.resultado,a=t.name,n=t.main;if(!a)return null;var s=273.15;return Object(c.jsxs)("div",{className:"card-panel white col s12",children:[Object(c.jsxs)("h2",{children:["El clima de la cuidad de ",a," es:"]}),Object(c.jsxs)("p",{className:"temperatura",children:[parseFloat(n.temp-s,10).toFixed(2),Object(c.jsx)("span",{children:" \u2103 "})]}),Object(c.jsxs)("p",{children:["Temperatura Maxima:",parseFloat(n.temp_max-s,10).toFixed(2),Object(c.jsx)("span",{children:" \u2103 "})]}),Object(c.jsxs)("p",{children:["Temperatura Minima:",parseFloat(n.temp_min-s,10).toFixed(2),Object(c.jsx)("span",{children:" \u2103 "})]})]})};var x=function(){var e,t=Object(n.useState)({cuidad:"",pais:""}),a=Object(o.a)(t,2),s=a[0],i=a[1],r=Object(n.useState)(!1),l=Object(o.a)(r,2),b=l[0],p=l[1],x=Object(n.useState)({}),v=Object(o.a)(x,2),f=v[0],g=v[1],C=Object(n.useState)(!1),N=Object(o.a)(C,2),F=N[0],w=N[1],S=s.cuidad,k=s.pais;return Object(n.useEffect)((function(){(function(){var e=Object(d.a)(j.a.mark((function e(){var t,a,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!b){e.next=12;break}return"cf8d1c067a78ef5597c591c445000045",t="http://api.openweathermap.org/data/2.5/weather?q=".concat(S,",").concat(k,"&appid=").concat("cf8d1c067a78ef5597c591c445000045","\n          "),e.next=5,fetch(t);case 5:return a=e.sent,e.next=8,a.json();case 8:c=e.sent,g(c),p(!1),"404"===c.cod?w(!0):w(!1);case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[b]),e=F?Object(c.jsx)(O,{mensaje:"No hay Resultados"}):Object(c.jsx)(m,{resultado:f}),Object(c.jsxs)(n.Fragment,{children:[Object(c.jsx)(u,{titulo:"App Clima"}),Object(c.jsx)("div",{className:"contenedor-form",children:Object(c.jsx)("div",{className:"container",children:Object(c.jsxs)("div",{className:"row",children:[Object(c.jsx)("div",{className:"col m6 s12",children:Object(c.jsx)(h,{busqueda:s,guardarBusqueda:i,guardaConsultar:p})}),Object(c.jsx)("div",{className:"col m6 s12",children:e})]})})})]})},v=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,17)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,s=t.getLCP,i=t.getTTFB;a(e),c(e),n(e),s(e),i(e)}))};r.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(x,{})}),document.getElementById("root")),v()}},[[16,1,2]]]);
//# sourceMappingURL=main.23585e68.chunk.js.map