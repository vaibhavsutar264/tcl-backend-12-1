/*! For license information please see 122.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunktclcpasstwentyfirstoct=self.webpackChunktclcpasstwentyfirstoct||[]).push([[122],{76209:function(e,t,n){n.r(t),n.d(t,{default:function(){return D}});var r=n(67294),i=n(18720),o=n(30030),a=n(94174),l=n(7961),s=n(9144),c=n(31166),u=n(3646),p=n(95305),f=n.p+"a623a5f9084abd16bff9.png",d=n(3990),x=n(25782),h=n(2839),m=n(89250),y=n(42573),g=n(59381),b=n(85893);function v(e){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},v(e)}function j(){j=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,r=Object.defineProperty||function(e,t,n){e[t]=n.value},i="function"==typeof Symbol?Symbol:{},o=i.iterator||"@@iterator",a=i.asyncIterator||"@@asyncIterator",l=i.toStringTag||"@@toStringTag";function s(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{s({},"")}catch(e){s=function(e,t,n){return e[t]=n}}function c(e,t,n,i){var o=t&&t.prototype instanceof f?t:f,a=Object.create(o.prototype),l=new F(i||[]);return r(a,"_invoke",{value:S(e,n,l)}),a}function u(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}e.wrap=c;var p={};function f(){}function d(){}function x(){}var h={};s(h,o,(function(){return this}));var m=Object.getPrototypeOf,y=m&&m(m(T([])));y&&y!==t&&n.call(y,o)&&(h=y);var g=x.prototype=f.prototype=Object.create(h);function b(e){["next","throw","return"].forEach((function(t){s(e,t,(function(e){return this._invoke(t,e)}))}))}function Z(e,t){function i(r,o,a,l){var s=u(e[r],e,o);if("throw"!==s.type){var c=s.arg,p=c.value;return p&&"object"==v(p)&&n.call(p,"__await")?t.resolve(p.__await).then((function(e){i("next",e,a,l)}),(function(e){i("throw",e,a,l)})):t.resolve(p).then((function(e){c.value=e,a(c)}),(function(e){return i("throw",e,a,l)}))}l(s.arg)}var o;r(this,"_invoke",{value:function(e,n){function r(){return new t((function(t,r){i(e,n,t,r)}))}return o=o?o.then(r,r):r()}})}function S(e,t,n){var r="suspendedStart";return function(i,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===i)throw o;return{value:void 0,done:!0}}for(n.method=i,n.arg=o;;){var a=n.delegate;if(a){var l=w(a,n);if(l){if(l===p)continue;return l}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var s=u(e,t,n);if("normal"===s.type){if(r=n.done?"completed":"suspendedYield",s.arg===p)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r="completed",n.method="throw",n.arg=s.arg)}}}function w(e,t){var n=t.method,r=e.iterator[n];if(void 0===r)return t.delegate=null,"throw"===n&&e.iterator.return&&(t.method="return",t.arg=void 0,w(e,t),"throw"===t.method)||"return"!==n&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+n+"' method")),p;var i=u(r,e.iterator,t.arg);if("throw"===i.type)return t.method="throw",t.arg=i.arg,t.delegate=null,p;var o=i.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,p):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,p)}function z(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function N(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function F(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(z,this),this.reset(!0)}function T(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,i=function t(){for(;++r<e.length;)if(n.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return i.next=i}}return{next:B}}function B(){return{value:void 0,done:!0}}return d.prototype=x,r(g,"constructor",{value:x,configurable:!0}),r(x,"constructor",{value:d,configurable:!0}),d.displayName=s(x,l,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===d||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,x):(e.__proto__=x,s(e,l,"GeneratorFunction")),e.prototype=Object.create(g),e},e.awrap=function(e){return{__await:e}},b(Z.prototype),s(Z.prototype,a,(function(){return this})),e.AsyncIterator=Z,e.async=function(t,n,r,i,o){void 0===o&&(o=Promise);var a=new Z(c(t,n,r,i),o);return e.isGeneratorFunction(n)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},b(g),s(g,l,"Generator"),s(g,o,(function(){return this})),s(g,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},e.values=T,F.prototype={constructor:F,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(N),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(n,r){return a.type="throw",a.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var i=this.tryEntries.length-1;i>=0;--i){var o=this.tryEntries[i],a=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var l=n.call(o,"catchLoc"),s=n.call(o,"finallyLoc");if(l&&s){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(l){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=e,a.arg=t,o?(this.method="next",this.next=o.finallyLoc,p):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),p},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),N(n),p}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var i=r.arg;N(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:T(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),p}},e}function Z(e,t,n,r,i,o,a){try{var l=e[o](a),s=l.value}catch(e){return void n(e)}l.done?t(s):Promise.resolve(s).then(r,i)}function S(e){return function(){var t=this,n=arguments;return new Promise((function(r,i){var o=e.apply(t,n);function a(e){Z(o,r,i,a,l,"next",e)}function l(e){Z(o,r,i,a,l,"throw",e)}a(void 0)}))}}function w(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,o,a,l=[],s=!0,c=!1;try{if(o=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;s=!1}else for(;!(s=(r=o.call(n)).done)&&(l.push(r.value),l.length!==t);s=!0);}catch(e){c=!0,i=e}finally{try{if(!s&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(c)throw i}}return l}}(e,t)||function(e,t){if(e){if("string"==typeof e)return z(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?z(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function z(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var N=function(){var e=(0,x.I0)(),t=(0,x.v9)((function(e){return e.auth||{}})),n=t.user,o=t.userEmail,v=n.emailId,Z=(0,a.ZP)(l.Z)((function(e){return e.theme,{width:44,height:44}})),z=w((0,r.useState)(""),2),N=z[0],F=z[1],T=w((0,r.useState)(""),2),B=T[0],E=T[1],L=w((0,r.useState)(""),2),C=L[0],I=L[1],W=w((0,r.useState)(""),2),R=W[0],O=W[1],A=w((0,r.useState)(""),2),H=A[0],k=A[1];(0,m.s0)(),(0,r.useEffect)((function(){D()}),[e]);var D=function(){var e=S(j().mark((function e(){return j().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.Ul.getUserInfo(v).then((function(e){e.data.data.data.emailId==o?(F(e.data.data.data.firstname),E(e.data.data.data.lastName),I(e.data.data.data.attributes.phoneNumber),O(e.data.data.data.attributes.timezone),k(e.data.data.data.attributes.preferredCommunicationMode)):(F("firstname is not available due to non registered email"),E("lastName is not available due to non registered email"),I("phoneNumber is not available due to non registered email"),O("timezone is not available due to non registered email"),k("communication is not available due to non registered email"))}));case 2:e.sent;case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),P=function(){var t=S(j().mark((function t(n){var r;return j().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r={firstname:N,lastName:B,phoneNumber:C,timezone:R,communication:H},e((0,y.ek)(r)),n.preventDefault();case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();console.log(N);var _=w((0,r.useState)(!0),2),G=_[0],M=(_[1],(0,g.fp)("theme"));return console.log("the getitem value is ".concat(M)),(0,b.jsx)(b.Fragment,{children:(0,b.jsxs)(i.Z,{className:"bd-single-content",sx:{bgcolor:"#fff",height:1,borderRadius:"20px",py:"52px",px:"50px",backgroundImage:"url(".concat(f,")"),backgroundRepeat:"no-repeat",backgroundSize:"contain"},children:[(0,b.jsx)(i.Z,{sx:{mb:"36px"},children:(0,b.jsx)(s.Z,{direction:"row",justifyContent:"center",alignItems:"center",children:(0,b.jsx)(c.Z,{overlap:"circular",anchorOrigin:{vertical:"bottom",horizontal:"right"},badgeContent:(0,b.jsx)(Z,{sx:{bgcolor:"#EDEFF0",color:"#52626F"},variant:"circular",children:(0,b.jsx)(d.Z,{})}),children:(0,b.jsx)(l.Z,{alt:"Travis Howard",className:"avatar-initials",sx:{width:"156px",height:"156px"},children:N.charAt(0)+B.charAt(0)})})})}),(0,b.jsxs)("form",{children:[(0,b.jsxs)(i.Z,{component:"form",className:"billing-details-input",sx:{"& > :not(style)":{m:1,width:"25ch"},display:"flex",flexWrap:"wrap",rowGap:"20px",justifyContent:"space-between",marginBottom:"40px","& label":{top:G?"14px":0},"& label:not(.MuiFormLabel-filled, .MuiInputLabel-shrink)":{top:"-3px"}},noValidate:!0,autoComplete:"off",children:[(0,b.jsx)(u.Z,{label:"first name",value:N,onChange:function(e){return F(e.target.value)},variant:G?"outlined":"standard",type:"text",sx:{borderRadius:"10px !important",flexBasis:"45%",textTransform:"capitalize"}}),(0,b.jsx)(u.Z,{label:"last name",variant:G?"outlined":"standard",type:"text",value:B,onChange:function(e){return E(e.target.value)},sx:{borderRadius:"10px !important",flexBasis:"45%",textTransform:"capitalize"}}),(0,b.jsx)(u.Z,{label:"mobile no",variant:G?"outlined":"standard",type:"text",value:C,onChange:function(e){return I(e.target.value)},sx:{borderRadius:"10px !important",flexBasis:"45%",textTransform:"capitalize"}}),(0,b.jsx)(u.Z,{label:"communication",variant:G?"outlined":"standard",type:"text",value:H,onChange:function(e){return k(e.target.value)},sx:{borderRadius:"10px !important",flexBasis:"45%",textTransform:"capitalize"}}),(0,b.jsx)(u.Z,{label:"timezone",variant:G?"outlined":"standard",type:"text",value:R,onChange:function(e){return O(e.target.value)},sx:{borderRadius:"10px !important",flexBasis:"100%",textTransform:"capitalize"}})]}),(0,b.jsx)(p.Z,{color:"error",variant:"outlined",type:"button",onClick:P,sx:{textTransform:"uppercase",borderRadius:"100px",width:1,px:6,py:2,fontSize:"12px",lineHeight:"13px",fontWeight:700,fontFamily:"ubuntu","&:hover":{backgroundColor:"#D63548",color:"#fff"}},children:G?"save":"edit personal details"})]})]})})},F=n(91647),T=n.p+"026a97a27fc73713874c.png",B=function(){return(0,b.jsx)(b.Fragment,{children:(0,b.jsxs)(i.Z,{className:"bd-single-content",sx:{bgcolor:"#fff",height:1,borderRadius:"20px",pt:"40px",px:"50px",display:"flex",flexDirection:"column",alignItems:"center",gap:"0px"},children:[(0,b.jsx)(i.Z,{sx:{mb:"14px"},children:(0,b.jsx)(s.Z,{direction:"row",justifyContent:"center",alignItems:"center",children:(0,b.jsx)("img",{src:T,alt:""})})}),(0,b.jsx)(F.Z,{variant:"h5",component:"h1",sx:{maxWidth:"unset",textAlign:"center",padding:0,fontSize:"24px",lineHeight:"22px",color:"#303030",fontWeight:700,fontFamily:"ubuntu",mb:"10px"},children:"Need Help?"}),(0,b.jsx)(F.Z,{variant:"subtitle1",sx:{textAlign:"center",color:"#344857",opacity:.7,letterSpacing:"-0.72px",fontSize:"18px",lineHeight:"20px",fontFamily:"ubuntu",mb:"19px"},children:"Lorem ipsum dolor sit amet"}),(0,b.jsx)(p.Z,{color:"error",variant:"outlined",sx:{textTransform:"uppercase",borderRadius:"100px",mb:11,px:6,py:2,fontSize:"12px",lineHeight:"13px",fontWeight:700,fontFamily:"ubuntu","&:hover":{backgroundColor:"#D63548",color:"#fff"}},children:"contact us"})]})})},E=n(17888),L=n(18508),C=n(2785),I=n(33044);function W(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var R=function(e){var t,n,o=e.LegalEntity,a=e.setLegalEntity,l=e.setsendInvoice,c=(0,x.I0)(),u=(t=(0,r.useState)(null),n=2,function(e){if(Array.isArray(e))return e}(t)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,o,a,l=[],s=!0,c=!1;try{if(o=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;s=!1}else for(;!(s=(r=o.call(n)).done)&&(l.push(r.value),l.length!==t);s=!0);}catch(e){c=!0,i=e}finally{try{if(!s&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(c)throw i}}return l}}(t,n)||function(e,t){if(e){if("string"==typeof e)return W(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?W(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),p=u[0],f=u[1],d=(0,x.v9)((function(e){return e.account})).accountDetails;d.legalentities,(0,r.useEffect)((function(){f(d.legalentities[0][h()[0]]),l(d.legalentities[0].sendInvoiceToContact),a(h()[0])}),[c]);var h=function(){try{return d.legalentities.map((function(e){return Object.keys(e)[0]}))}catch(e){return[]}};return(0,b.jsx)(b.Fragment,{children:(0,b.jsxs)(i.Z,{className:"bd-single-content",sx:{bgcolor:"#fff",height:1,borderRadius:"20px",pt:"40px",pb:"133px",px:"50px"},children:[(0,b.jsx)(i.Z,{sx:{mb:6},children:(0,b.jsxs)(s.Z,{direction:"row",justifyContent:"space-between",alignItems:"center",children:[(0,b.jsx)(F.Z,{variant:"h5",component:"h1",sx:{maxWidth:"unset",textAlign:"left",padding:0,fontSize:"24px",lineHeight:"22px",color:"#303030",fontWeight:700,fontFamily:"ubuntu"},children:"Billing Details"}),(0,b.jsx)(i.Z,{id:"select-entity-form",sx:{minWidth:200,"& .css-1sumxir-MuiFormLabel-root-MuiInputLabel-root.Mui-focused":{top:"1px",height:"min-content",backgroundColor:"#fff !important"},'& [role="button"]':{color:"#222",textTransform:"capitalize",fontWeight:400},"& label":{top:o.length>1?"1px":"-11px",height:"min-content",backgroundColor:"#fff !important"}},children:h().length>0&&(0,b.jsxs)(E.Z,{fullWidth:!0,children:[(0,b.jsx)(L.Z,{id:"demo-simple-select-label",children:"Select Legal Entity"}),(0,b.jsx)(C.Z,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:o,onChange:function(e){var t=h().indexOf(e.target.value);f(d.legalentities[t][e.target.value]),l(d.legalentities[t].sendInvoiceToContact),a(e.target.value)},children:h().map((function(e,t){return(0,b.jsxs)(I.Z,{value:e,children:["Legal Entity Name ",t+1]},"legalEnt".concat(t))}))})]})})]})}),null!=p&&(0,b.jsxs)(i.Z,{component:"form",className:"billing-details-input",sx:{"& > :not(style)":{m:1,width:"25ch"},display:"flex",flexWrap:"wrap",justifyContent:"space-between",rowGap:"48px"},noValidate:!0,autoComplete:"off",children:[(0,b.jsxs)(s.Z,{sx:{flexBasis:"30%"},children:[(0,b.jsx)(F.Z,{className:"prefilled-title",component:"h3",sx:{border:"1px solid #eee",borderRadius:"10px !important",fontSize:"14px",color:"#344857",fontFamily:"ubuntu",opacity:.7,textTransform:"capitalize"},children:"account name"}),(0,b.jsx)(F.Z,{className:"prefilled-content",id:"account-name-details",component:"span",sx:{color:"#344857",fontWeight:700,fontSize:"16px",fontFamily:"ubuntu",lineHeight:"18px"},children:p&&(null==p?void 0:p.billingDetails.accountName)})]}),(0,b.jsxs)(s.Z,{sx:{flexBasis:"30%"},children:[(0,b.jsx)(F.Z,{className:"prefilled-title",component:"h3",sx:{border:"1px solid #eee",borderRadius:"10px !important",fontSize:"14px",color:"#344857",fontFamily:"ubuntu",opacity:.7,flexBasis:"30%",textTransform:"capitalize"},children:"legal entity"}),(0,b.jsx)(F.Z,{className:"prefilled-content",id:"legal-entity",component:"span",sx:{color:"#344857",fontWeight:700,fontSize:"16px",fontFamily:"ubuntu",lineHeight:"18px"},children:p&&(null==p?void 0:p.billingDetails.legalEntity)})]}),(0,b.jsxs)(s.Z,{sx:{flexBasis:"30%"},children:[(0,b.jsx)(F.Z,{className:"prefilled-title",component:"h3",sx:{border:"1px solid #eee",borderRadius:"10px !important",fontSize:"14px",color:"#344857",fontFamily:"ubuntu",opacity:.7,flexBasis:"30%",textTransform:"capitalize"},children:"billing type"}),(0,b.jsx)(F.Z,{className:"prefilled-content",id:"billing-type",component:"span",sx:{color:"#344857",fontWeight:700,fontSize:"16px",fontFamily:"ubuntu",lineHeight:"18px"},children:p&&(null==p?void 0:p.billingDetails.billingtype)})]}),(0,b.jsxs)(s.Z,{sx:{flexBasis:"30%"},children:[(0,b.jsx)(F.Z,{className:"prefilled-title",component:"h3",sx:{border:"1px solid #eee",borderRadius:"10px !important",fontSize:"14px",color:"#344857",fontFamily:"ubuntu",opacity:.7,flexBasis:"30%",textTransform:"capitalize"},children:"billing cycle"}),(0,b.jsx)(F.Z,{className:"prefilled-content",id:"billing-cycle",component:"span",sx:{color:"#344857",fontWeight:700,fontSize:"16px",fontFamily:"ubuntu",lineHeight:"18px"},children:p&&(null==p?void 0:p.billingDetails.billingCycle)})]}),(0,b.jsxs)(s.Z,{sx:{flexBasis:"30%"},children:[(0,b.jsx)(F.Z,{className:"prefilled-title",component:"h3",sx:{border:"1px solid #eee",borderRadius:"10px !important",fontSize:"14px",color:"#344857",fontFamily:"ubuntu",opacity:.7,flexBasis:"30%",textTransform:"capitalize"},children:"payment period"}),(0,b.jsx)(F.Z,{className:"prefilled-content",id:"payment-period",component:"span",sx:{color:"#344857",fontWeight:700,fontSize:"16px",fontFamily:"ubuntu",lineHeight:"18px"},children:p&&(null==p?void 0:p.billingDetails.paymentPeriod)})]}),(0,b.jsxs)(s.Z,{sx:{flexBasis:"30%"},children:[(0,b.jsx)(F.Z,{className:"prefilled-title",component:"h3",sx:{border:"1px solid #eee",borderRadius:"10px !important",fontSize:"14px",color:"#344857",fontFamily:"ubuntu",opacity:.7,flexBasis:"30%",textTransform:"capitalize"},children:"VAT/GST No./Tax ID"}),(0,b.jsx)(F.Z,{className:"prefilled-content",id:"vat",component:"span",sx:{color:"#344857",fontWeight:700,fontSize:"16px",fontFamily:"ubuntu",lineHeight:"18px"},children:p&&(null==p?void 0:p.billingDetails.vatOrGSTNoOrTxId)})]}),(0,b.jsxs)(s.Z,{sx:{flexBasis:"30%"},children:[(0,b.jsx)(F.Z,{className:"prefilled-title",component:"h3",sx:{border:"1px solid #eee",borderRadius:"10px !important",fontSize:"14px",color:"#344857",fontFamily:"ubuntu",opacity:.7,flexBasis:"30%",textTransform:"capitalize"},children:"Company Pan or Equivalent No."}),(0,b.jsx)(F.Z,{className:"prefilled-content",id:"company-pan",component:"span",sx:{color:"#344857",fontWeight:700,fontSize:"16px",fontFamily:"ubuntu",lineHeight:"18px"},children:p&&(null==p?void 0:p.billingDetails.companyPAN)})]}),(0,b.jsxs)(s.Z,{sx:{flexBasis:"30%"},children:[(0,b.jsx)(F.Z,{className:"prefilled-title",component:"h3",sx:{border:"1px solid #eee",borderRadius:"10px !important",fontSize:"14px",color:"#344857",fontFamily:"ubuntu",opacity:.7,flexBasis:"30%",textTransform:"capitalize"},children:"applicable currency"}),(0,b.jsx)(F.Z,{className:"prefilled-content",id:"applicable-currency",component:"span",sx:{color:"#344857",fontWeight:700,fontSize:"16px",fontFamily:"ubuntu",lineHeight:"18px"},children:p&&(null==p?void 0:p.billingDetails.applicableCurrency)})]}),(0,b.jsxs)(s.Z,{sx:{flexBasis:"30%"},children:[(0,b.jsx)(F.Z,{className:"prefilled-title",component:"h3",sx:{border:"1px solid #eee",borderRadius:"10px !important",fontSize:"14px",color:"#344857",fontFamily:"ubuntu",opacity:.7,flexBasis:"30%",textTransform:"capitalize"},children:"contact term"}),(0,b.jsx)(F.Z,{className:"prefilled-content",id:"contract-term",component:"span",sx:{color:"#344857",fontWeight:700,fontSize:"16px",fontFamily:"ubuntu",lineHeight:"18px"},children:p&&(null==p?void 0:p.billingDetails.contractTerm)})]}),(0,b.jsxs)(s.Z,{sx:{flexBasis:"30%"},children:[(0,b.jsx)(F.Z,{className:"prefilled-title",component:"h3",sx:{border:"1px solid #eee",borderRadius:"10px !important",fontSize:"14px",color:"#344857",fontFamily:"ubuntu",opacity:.7,flexBasis:"30%",textTransform:"capitalize"},children:"rate change notification period(in days)"}),(0,b.jsx)(F.Z,{className:"prefilled-content",id:"rate-change-notification-period",component:"span",sx:{color:"#344857",fontWeight:700,fontSize:"16px",fontFamily:"ubuntu",lineHeight:"18px"},children:p&&(null==p?void 0:p.billingDetails.rateChangeNotificationPeriod)})]}),(0,b.jsxs)(s.Z,{sx:{flexBasis:"30%"},children:[(0,b.jsx)(F.Z,{className:"prefilled-title",component:"h3",sx:{border:"1px solid #eee",borderRadius:"10px !important",fontSize:"14px",color:"#344857",fontFamily:"ubuntu",opacity:.7,flexBasis:"30%",textTransform:"capitalize"},children:"rate & coverLegalEntity change time zone"}),(0,b.jsx)(F.Z,{className:"prefilled-content",id:"rate-coverLegalEntity-change-timeZone",component:"span",sx:{color:"#344857",fontWeight:700,fontSize:"16px",fontFamily:"ubuntu",lineHeight:"18px"},children:p&&(null==p?void 0:p.billingDetails.rateCoverLegalEntityChangeTimeZone)})]}),(0,b.jsxs)(s.Z,{sx:{flexBasis:"30%"},children:[(0,b.jsx)(F.Z,{className:"prefilled-title",component:"h3",sx:{border:"1px solid #eee",borderRadius:"10px !important",fontSize:"14px",color:"#344857",fontFamily:"ubuntu",opacity:.7,flexBasis:"30%",textTransform:"capitalize"},children:"account status & remark"}),(0,b.jsx)(F.Z,{className:"prefilled-content",id:"account-status",component:"span",sx:{color:"#344857",fontWeight:700,fontSize:"16px",fontFamily:"ubuntu",lineHeight:"18px"},children:p&&(null==p?void 0:p.billingDetails.accountStatus)})]})]})]})})},O=function(e){var t=e.sendInvoice;return(0,x.v9)((function(e){return e.account||{}})).accountDetails.legalentities,(0,b.jsx)(b.Fragment,{children:null!=t&&(0,b.jsxs)(i.Z,{className:"bd-single-content",sx:{bgcolor:"#fff",height:1,borderRadius:"20px",pt:"40px",pb:"133px",px:"50px"},children:[(0,b.jsx)(i.Z,{sx:{mb:6},children:(0,b.jsx)(s.Z,{direction:"row",justifyContent:"space-between",children:(0,b.jsx)(F.Z,{variant:"h5",component:"h1",sx:{maxWidth:"unset",textAlign:"left",padding:0,fontSize:"24px",lineHeight:"22px",color:"#303030",fontWeight:700,fontFamily:"ubuntu"},children:"Send Invoice to (Contact)"})})}),(0,b.jsxs)(i.Z,{component:"form",className:"billing-details-input",sx:{"& > :not(style)":{m:1,width:"25ch"},display:"flex",flexWrap:"wrap",justifyContent:"space-between",rowGap:"48px"},noValidate:!0,autoComplete:"off",children:[(0,b.jsxs)(s.Z,{sx:{flexBasis:"30%"},children:[(0,b.jsx)(F.Z,{className:"prefilled-title",component:"h3",sx:{border:"1px solid #eee",borderRadius:"10px !important",fontSize:"14px",color:"#344857",fontFamily:"ubuntu",opacity:.7,flexBasis:"30%",textTransform:"capitalize"},children:"name"}),(0,b.jsx)(F.Z,{className:"prefilled-content",id:"name",component:"span",sx:{color:"#344857",fontWeight:700,fontSize:"16px",fontFamily:"ubuntu",lineHeight:"18px"},children:t.name})]}),(0,b.jsxs)(s.Z,{sx:{flexBasis:"30%"},children:[(0,b.jsx)(F.Z,{className:"prefilled-title",component:"h3",sx:{border:"1px solid #eee",borderRadius:"10px !important",fontSize:"14px",color:"#344857",fontFamily:"ubuntu",opacity:.7,flexBasis:"30%",textTransform:"capitalize"},children:"address"}),(0,b.jsx)(F.Z,{className:"prefilled-content",id:"address",component:"span",sx:{color:"#344857",fontWeight:700,fontSize:"16px",fontFamily:"ubuntu",lineHeight:"18px"},children:t.address})]}),(0,b.jsxs)(s.Z,{sx:{flexBasis:"30%"},children:[(0,b.jsx)(F.Z,{className:"prefilled-title",component:"h3",sx:{border:"1px solid #eee",borderRadius:"10px !important",fontSize:"14px",color:"#344857",fontFamily:"ubuntu",opacity:.7,flexBasis:"30%",textTransform:"capitalize"},children:"city"}),(0,b.jsx)(F.Z,{className:"prefilled-content",id:"city",component:"span",sx:{color:"#344857",fontWeight:700,fontSize:"16px",fontFamily:"ubuntu",lineHeight:"18px"},children:t.city})]}),(0,b.jsxs)(s.Z,{sx:{flexBasis:"30%"},children:[(0,b.jsx)(F.Z,{className:"prefilled-title",component:"h3",sx:{border:"1px solid #eee",borderRadius:"10px !important",fontSize:"14px",color:"#344857",fontFamily:"ubuntu",opacity:.7,flexBasis:"30%",textTransform:"capitalize"},children:"country"}),(0,b.jsx)(F.Z,{className:"prefilled-content",id:"country",component:"span",sx:{color:"#344857",fontWeight:700,fontSize:"16px",fontFamily:"ubuntu",lineHeight:"18px"},children:t.country})]}),(0,b.jsxs)(s.Z,{sx:{flexBasis:"30%"},children:[(0,b.jsx)(F.Z,{className:"prefilled-title",component:"h3",sx:{border:"1px solid #eee",borderRadius:"10px !important",fontSize:"14px",color:"#344857",fontFamily:"ubuntu",opacity:.7,flexBasis:"30%",textTransform:"capitalize"},children:"pin"}),(0,b.jsx)(F.Z,{className:"prefilled-content",id:"pin",component:"span",sx:{color:"#344857",fontWeight:700,fontSize:"16px",fontFamily:"ubuntu",lineHeight:"18px"},children:t.pin})]}),(0,b.jsxs)(s.Z,{sx:{flexBasis:"30%"},children:[(0,b.jsx)(F.Z,{className:"prefilled-title",component:"h3",sx:{border:"1px solid #eee",borderRadius:"10px !important",fontSize:"14px",color:"#344857",fontFamily:"ubuntu",opacity:.7,flexBasis:"30%",textTransform:"capitalize"},children:"email id"}),(0,b.jsx)(F.Z,{className:"prefilled-content",id:"email-Id",component:"span",sx:{color:"#344857",fontWeight:700,fontSize:"16px",fontFamily:"ubuntu",lineHeight:"18px"},children:t.emailId})]}),(0,b.jsxs)(s.Z,{sx:{flexBasis:"30%"},children:[(0,b.jsx)(F.Z,{className:"prefilled-title",component:"h3",sx:{border:"1px solid #eee",borderRadius:"10px !important",fontSize:"14px",color:"#344857",fontFamily:"ubuntu",opacity:.7,flexBasis:"30%",textTransform:"capitalize"},children:"customer authorized rate notification recepient"}),(0,b.jsx)(F.Z,{className:"prefilled-content",id:"rate-notification",component:"span",sx:{color:"#344857",fontWeight:700,fontSize:"16px",fontFamily:"ubuntu",lineHeight:"18px"},children:t.customerAuthorizedRateNotificationRecipient})]})]})]})})},A=n(16182);function H(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,o,a,l=[],s=!0,c=!1;try{if(o=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;s=!1}else for(;!(s=(r=o.call(n)).done)&&(l.push(r.value),l.length!==t);s=!0);}catch(e){c=!0,i=e}finally{try{if(!s&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(c)throw i}}return l}}(e,t)||function(e,t){if(e){if("string"==typeof e)return k(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?k(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function k(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var D=function(e){var t=e.toggleTheme,n=(0,x.I0)(),a=H((0,r.useState)("300px"),2),l=a[0],s=a[1];(0,r.useEffect)((function(){n((0,y.uP)())}),[n]);var c=H(r.useState(""),2),u=c[0],p=c[1],f=H(r.useState(null),2),d=f[0],h=f[1];return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(A.K,{toggleTheme:t,handleADWidth:function(){s("300px"==l?"130px":"300px")}}),(0,b.jsx)(i.Z,{className:"bd-container",style:{width:"calc(100% - ".concat(l,")"),marginLeft:"".concat(l)},children:(0,b.jsxs)(o.ZP,{className:"bd-inner-container",container:!0,columns:{sm:8,md:12},children:[(0,b.jsxs)(o.ZP,{className:"bd-single-container",item:!0,container:!0,columnSpacing:5,columns:12,sm:12,md:12,children:[(0,b.jsx)(o.ZP,{item:!0,xs:4,children:(0,b.jsx)(N,{})}),(0,b.jsx)(o.ZP,{item:!0,xs:8,children:(0,b.jsx)(R,{LegalEntity:u,setLegalEntity:p,setsendInvoice:h})})]}),(0,b.jsxs)(o.ZP,{className:"bd-single-container",item:!0,container:!0,columnSpacing:5,columns:12,sm:12,md:12,children:[(0,b.jsx)(o.ZP,{item:!0,xs:4,children:(0,b.jsx)(B,{})}),(0,b.jsx)(o.ZP,{item:!0,xs:8,children:(0,b.jsx)(O,{sendInvoice:d})})]})]})})]})}}}]);
//# sourceMappingURL=122.bundle.js.map