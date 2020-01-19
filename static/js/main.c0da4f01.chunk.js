(this["webpackJsonpmate-hackathon"]=this["webpackJsonpmate-hackathon"]||[]).push([[0],{30:function(e,t,a){e.exports=a(47)},39:function(e,t,a){},40:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(13),l=a.n(c),u=a(9),o=a(6),m=a(5),i=a(17),s=a(19),b={todos:[],currentYear:2020,currentMonth:(new Date).getMonth()+1},E=function(e){return e.todos},d=function(e){return e.currentYear},p=function(e){return e.currentMonth},f=function(e){return{type:"SET_YEAR",payload:e}},_=function(e){return{type:"SET_MONTH",payload:e}},y=Object(s.b)((function(e,t){switch(t.type){case"ADD_TODO":return Object(i.a)({},e,{todos:[].concat(Object(m.a)(e.todos),[t.payload])});case"TOGGLE_IMPORTANCE":return Object(i.a)({},e,{todos:e.todos.map((function(e){return e.date===t.date&&e.hour===t.hour?Object(i.a)({},e,{isImportant:t.isImportant}):e}))});case"DELETE_TODO":return Object(i.a)({},e,{todos:e.todos.filter((function(e){return e.date!==t.date||e.body!==t.body||e.hour!==t.hour}))});case"SET_YEAR":return Object(i.a)({},e,{currentYear:t.payload});case"SET_MONTH":return Object(i.a)({},e,{currentMonth:t.payload});default:return e}}),b),h=(a(39),a(14)),O=(a(40),function(){return r.a.createElement("section",{className:"tabs"},r.a.createElement(u.b,{activeClassName:"tabs__tab_active",className:"tabs__tab",to:"month"},"Month"),r.a.createElement(u.b,{activeClassName:"tabs__tab_active",className:"tabs__tab",to:"week"},"Week"),r.a.createElement(u.b,{activeClassName:"tabs__tab_active",className:"tabs__tab",to:"19-1-2020"},"Day"))}),v=a(60),N=(a(42),a(43),{1:"January",2:"February",3:"March",4:"April",5:"May",6:"June",7:"July",8:"August",9:"September",10:"October",11:"November",12:"December"}),j=a(20),D=a.n(j),k=function(e){var t=e.date,a=Object(h.f)(),n=Object(o.c)(E),c=Object(o.c)(d),l=Object(o.c)(p),u=n.find((function(e){return e.date===[t,l,c].join("-")})),m=D()({table__td:!0},{"table__td--unactive":!t},{"table__td--today":t===(new Date).getDate()&&l===(new Date).getMonth()+1&&c===(new Date).getFullYear()},{"table__td--event":u});return r.a.createElement("td",{className:m,onClick:function(){return t&&a.push("".concat(t,"-").concat(l,"-").concat(c))}},t)},w=function(e){var t=e.getDay();return 0===t&&(t=7),t},T=function(){var e=Object(o.c)(d),t=Object(o.c)(p),a=Object(o.b)(),n=new Date(e,t,0).getDate(),c=w(new Date(e,t-1)),l=Array(c-1),u=w(new Date(e,t-1,n)),i=Array(7-u),s=Array.from(Array(n).keys()).map((function(e){return e+1})),b=[].concat(l,Object(m.a)(s),i);return r.a.createElement("div",{className:"month-container"},r.a.createElement("section",{className:"nav"},r.a.createElement(v.a,{variant:"outlined",type:"button",onClick:function(){1===t?(a(f(e-1)),a(_(12))):a(_(t-1))}},"\u2190"),r.a.createElement("h2",{className:"nav__title"},N[t]," ",e),r.a.createElement(v.a,{variant:"outlined",type:"button",onClick:function(){12===t?(a(f(e+1)),a(_(1))):a(_(t+1))}},"\u2192")),r.a.createElement("table",{className:"table"},r.a.createElement("thead",null,r.a.createElement("tr",null,["MO","TU","WE","TH","FR","SA","SU"].map((function(e){return r.a.createElement("th",{key:e,className:"table__th"},e)})))),r.a.createElement("tbody",null,r.a.createElement("tr",null,b.slice(0,7).map((function(e){return r.a.createElement(k,{date:e})}))),r.a.createElement("tr",null,b.slice(7,14).map((function(e){return r.a.createElement(k,{date:e})}))),r.a.createElement("tr",null,b.slice(14,21).map((function(e){return r.a.createElement(k,{date:e})}))),r.a.createElement("tr",null,b.slice(21,28).map((function(e){return r.a.createElement(k,{date:e})}))),r.a.createElement("tr",null,b.slice(28,35).map((function(e){return r.a.createElement(k,{date:e})}))))))},A=(a(44),Object(m.a)(Array(24).keys()).map((function(e){return["".concat(e,":00")].concat(Object(m.a)(Array(7)))}))),g=[13,14,15,16,17,18,19],M=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],S=function(){return r.a.createElement("div",{className:"week-wrapper"},r.a.createElement("h1",null,"January 2020"),r.a.createElement("table",{className:"week-table"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null),g.map((function(e,t){return r.a.createElement("th",{key:e},M[t]," ",e)})))),r.a.createElement("tbody",null,A.map((function(e){return r.a.createElement("tr",{className:"week-table__row"},e.map((function(e){return r.a.createElement("td",{className:"week-table__cell"},e)})))})))))},C=(a(45),a(28)),J=(a(46),function(e){var t=e.hour,a=Object(n.useState)(""),c=Object(C.a)(a,2),l=c[0],u=c[1],m=Object(h.g)(),i=Object(o.c)(E),s=Object(o.b)(),b=i.find((function(e){return e&&e.date===m.pathname.slice(1)&&e.hour===t})),d=D()({day__input:!0},{"day__input--event":b});return r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),l&&s({type:"ADD_TODO",payload:{date:m.pathname.slice(1),hour:t,body:l.trim(),isImportant:!1}})}},r.a.createElement("input",{className:d,type:"text",value:b&&b.body||l,onChange:function(e){return u(e.target.value)},onDoubleClick:function(e){e.target.value&&s(function(e,t,a){return{type:"DELETE_TODO",date:e,body:t,hour:a}}(m.pathname.slice(1),e.target.value,t)),u("")}}))}),Y=Object(m.a)(Array(24).keys()),I=function(){var e=Object(h.g)().pathname.slice(1).split("-");return r.a.createElement("div",{className:"day"},r.a.createElement("h2",{className:"day__date"},e[0]," ",N[e[1]]," ",e[2]),r.a.createElement("div",{className:"day__content"},Y.map((function(e){return r.a.createElement("div",{className:"day__hour",key:e},r.a.createElement("span",{className:"day__hour-text"},"".concat(e,":00")),r.a.createElement(J,{hour:e}))}))))},x=function(){return r.a.createElement("main",null,r.a.createElement(O,null),r.a.createElement(h.c,null,r.a.createElement(h.a,{path:"/",exact:!0,component:T}),"} />",r.a.createElement(h.a,{path:"/month",component:T}),"} />",r.a.createElement(h.a,{path:"/week",component:S}),r.a.createElement(h.a,{path:"/:date?",component:I}),"} />"))};l.a.render(r.a.createElement(o.a,{store:y},r.a.createElement(u.a,null,r.a.createElement(x,null))),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.c0da4f01.chunk.js.map