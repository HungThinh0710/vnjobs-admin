(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[17],{869:function(e,t,s){e.exports=s(508)},870:function(e,t,s){"use strict";function r(e,t,s,r,c,n,a){try{var i=e[n](a),o=i.value}catch(j){return void s(j)}i.done?t(o):Promise.resolve(o).then(r,c)}function c(e){return function(){var t=this,s=arguments;return new Promise((function(c,n){var a=e.apply(t,s);function i(e){r(a,c,n,i,o,"next",e)}function o(e){r(a,c,n,i,o,"throw",e)}i(void 0)}))}}s.d(t,"a",(function(){return c}))},950:function(e,t,s){"use strict";s.r(t);var r=s(869),c=s.n(r),n=s(870),a=s(868),i=s(1),o=s(865),j=s(867),l=s(817),u=s(779),b=s(827),d=s(820),x=s(872),h=s(21),O=s(873),f=[{key:"owner_id",sorter:!0,filter:!0},{key:"org_name",sorter:!0,filter:!0},{key:"phones",sorter:!0,filter:!0},{key:"description",sorter:!0,filter:!0},{key:"tax_id",sorter:!0,filter:!0},{key:"address",sorter:!0,filter:!0},{key:"is_verify",sorter:!0,filter:!0}];t.default=function(){var e=Object(i.useState)("0"),t=Object(a.a)(e,2),s=t[0],r=t[1],p=Object(i.useState)("0"),m=Object(a.a)(p,2),g=m[0],v=m[1],w=Object(i.useState)("0"),y=Object(a.a)(w,2),k=y[0],S=y[1],N=Object(i.useState)("0"),_=Object(a.a)(N,2),E=_[0],V=_[1],z=Object(i.useState)(null),D=Object(a.a)(z,2),J=D[0],P=D[1],A=Object(i.useState)("0"),F=Object(a.a)(A,2),L=F[0],M=F[1];return Object(i.useEffect)((function(){(function(){var e=Object(n.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.get(x.d);case 3:200===(t=e.sent).status&&(r(t.data.count.toString()),M(t.data.count_verify.toString()),P(t.data.data)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),void 0!==e.t0.response.status?console.log(e.t0.response):console.log(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(i.useEffect)((function(){(function(){var e=Object(n.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.get(x.c);case 3:200===(t=e.sent).status&&v(t.data.count.toString()),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),void 0!==e.t0.response.status?console.log(e.t0.response):console.log(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(i.useEffect)((function(){(function(){var e=Object(n.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.get(x.b);case 3:200===(t=e.sent).status&&S(t.data.count.toString()),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),void 0!==e.t0.response.status?console.log(e.t0.response):console.log(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(i.useEffect)((function(){(function(){var e=Object(n.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.get(x.e);case 3:200===(t=e.sent).status&&V(t.data.count.toString()),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),void 0!==e.t0.response.status?console.log(e.t0.response):console.log(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)(o.wb,{children:[Object(h.jsx)(o.u,{xs:"12",sm:"6",lg:"3",children:Object(h.jsx)(o.Vb,{text:"Organization",header:s,color:"primary",children:Object(h.jsx)(j.b,{width:24,content:l.a})})}),Object(h.jsx)(o.u,{xs:"12",sm:"6",lg:"3",children:Object(h.jsx)(o.Vb,{text:"Major",header:g,color:"info",children:Object(h.jsx)(j.b,{width:24,content:u.a})})}),Object(h.jsx)(o.u,{xs:"12",sm:"6",lg:"3",children:Object(h.jsx)(o.Vb,{text:"Recruitment News",header:E,color:"warning",children:Object(h.jsx)(j.b,{width:24,content:b.a})})}),Object(h.jsx)(o.u,{xs:"12",sm:"6",lg:"3",children:Object(h.jsx)(o.Vb,{text:"Jobseeker",header:k,color:"danger",children:Object(h.jsx)(j.b,{width:24,content:d.a})})})]}),Object(h.jsx)(o.wb,{children:Object(h.jsx)(o.u,{children:Object(h.jsxs)(o.j,{children:[Object(h.jsx)(o.n,{children:"Analysis"}),Object(h.jsxs)(o.k,{children:[Object(h.jsx)(o.wb,{children:Object(h.jsxs)(o.u,{xs:"12",md:"12",xl:"12",children:[Object(h.jsxs)(o.wb,{children:[Object(h.jsx)(o.u,{sm:"3",children:Object(h.jsxs)(o.i,{color:"info",children:[Object(h.jsx)("small",{className:"text-muted",children:"Organizations is verified"}),Object(h.jsx)("br",{}),Object(h.jsx)("strong",{className:"h4",children:L})]})}),Object(h.jsx)(o.u,{sm:"3",children:Object(h.jsxs)(o.i,{color:"danger",children:[Object(h.jsx)("small",{className:"text-muted",children:"Developing..."}),Object(h.jsx)("br",{}),Object(h.jsx)("strong",{className:"h4",children:"..."})]})}),Object(h.jsx)(o.u,{sm:"3",children:Object(h.jsxs)(o.i,{color:"info",children:[Object(h.jsx)("small",{className:"text-muted",children:"Developing..."}),Object(h.jsx)("br",{}),Object(h.jsx)("strong",{className:"h4",children:"..."})]})}),Object(h.jsx)(o.u,{sm:"3",children:Object(h.jsxs)(o.i,{color:"danger",children:[Object(h.jsx)("small",{className:"text-muted",children:"Developing..."}),Object(h.jsx)("br",{}),Object(h.jsx)("strong",{className:"h4",children:"..."})]})})]}),Object(h.jsx)("hr",{className:"mt-0"})]})}),Object(h.jsx)("br",{}),Object(h.jsx)(o.wb,{children:Object(h.jsx)(o.u,{xs:"12",lg:"12",children:Object(h.jsxs)(o.j,{children:[Object(h.jsx)(o.n,{children:"List Organizations"}),Object(h.jsx)(o.k,{children:Object(h.jsx)(o.y,{items:J,fields:f,striped:!0,hover:!0,scopedSlots:{is_verify:function(e){return Object(h.jsx)("td",{children:Object(h.jsx)(o.b,{color:1===e.is_verify?"success":"danger",children:1===e.is_verify?"verified":"pending"})})}}})})]})})})]})]})})})]})}}}]);
//# sourceMappingURL=17.53314baf.chunk.js.map