(this.webpackJsonpshubh_react=this.webpackJsonpshubh_react||[]).push([[0],{23:function(e,t,a){},24:function(e,t,a){},31:function(e,t,a){"use strict";a.r(t);var c=a(1),s=a.n(c),n=a(17),l=a.n(n),o=(a(23),a(11)),r=(a(24),a(7)),i=a(0);function d(e){return Object(i.jsx)("nav",{className:"navbar navbar-expand-md  navbar-".concat(e.mode," bg-").concat(e.mode),children:Object(i.jsxs)("div",{className:"container-fluid",children:[Object(i.jsx)(r.b,{className:"navbar-brand",to:"",children:e.title}),Object(i.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(i.jsx)("span",{className:"navbar-toggler-icon"})}),Object(i.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(i.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)(r.b,{className:"nav-link active","aria-current":"page",to:"/",children:"Home"})}),Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)(r.b,{className:"nav-link active",to:"/about",children:e.about})}),Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)(r.b,{className:"nav-link active","aria-current":"page",to:"/Contactus",children:"Contact Us"})})]}),Object(i.jsx)("form",{className:"d-flex",children:Object(i.jsx)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsxs)("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light"),children:[Object(i.jsx)("input",{onClick:e.togglemode,class:"form-check-input",type:"checkbox",role:"switch",id:"flexSwitchCheckDefault"}),Object(i.jsx)("label",{class:"form-check-label",for:"flexSwitchCheckDefault",children:"Change Mode"})]})})})})]})]})})}function b(e){var t=Object(c.useState)(""),a=Object(o.a)(t,2),s=a[0],n=a[1];return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)("div",{className:"container",children:[Object(i.jsx)("br",{}),Object(i.jsxs)("h2",{className:"heading1",children:['"',e.heading,'"']}),Object(i.jsx)("br",{}),Object(i.jsx)("div",{class:"mb-3",children:Object(i.jsx)("textarea",{spellCheck:"false",class:"form-control",value:s,id:"mybox",rows:"8",onChange:function(e){console.log("on change"),n(e.target.value)}})}),Object(i.jsxs)("div",{class:"d-grid gap-2 d-md-block",children:[Object(i.jsx)("button",{onClick:function(){console.log("Upperclass have clicked"+s);var t=s.toUpperCase();n(t),s.length>0?e.showAlert("Your text is now upper-case","success"):e.showAlert("My mate please enter something.","danger")},className:" btn btn-dark",children:"Convert To Upperclass"}),"\xa0",Object(i.jsx)("button",{onClick:function(){console.log("Lowerclass have clicked"+s);var t=s.toLowerCase();n(t),s.length>0?e.showAlert("Your text is now lower-case","success"):e.showAlert("My mate please enter something.","danger")},className:" btn btn-dark",children:"Convert To Lowerclass"}),"\xa0",Object(i.jsx)("button",{onClick:function(){console.log("remove extra space button has clicked"+s);var t=s.split(/[ ]+/);n(t.join(" ")),s.length>0?e.showAlert("Extra spaces has been removed.","success"):e.showAlert("My mate please enter something.","danger")},className:" btn btn-dark my-2 mb-2",children:"Remove Extra Space"}),"\xa0",Object(i.jsx)("button",{onClick:function(){console.log("clear button has clicked"+s);n(""),s.length>0?e.showAlert("Cleared.","success"):e.showAlert("My mate please enter something.","danger")},className:" btn btn-dark",children:"Clear Text"})]})]}),Object(i.jsxs)("div",{className:"container my-3",children:[Object(i.jsx)("h2",{className:"heading2",children:"Your Text Summary"}),Object(i.jsxs)("p",{className:"set-content",children:['"Your Text Contains ',s.split(/\s+/).filter((function(e){return 0!==e.length})).length," words and ",s.length,' characters."']}),Object(i.jsxs)("p",{className:"set-content",children:["you can read the text in ",.008*s.split(" ").length]}),Object(i.jsx)("h3",{className:"heading3",children:"Preview Your Text"}),Object(i.jsx)("div",{className:"set-preview",children:Object(i.jsx)("div",{class:"mb-3",children:Object(i.jsx)("textarea",{spellCheck:"false",class:"form-control1",value:s.length>0?s:"Enter Something in above form to preview.",rows:"8"})})}),"\xa0",Object(i.jsx)("button",{onClick:function(){var t=document.getElementById("mybox");t.select(),t.setSelectionRange(0,99999),navigator.clipboard.writeText(t.value),console.log("copy function working."),s.length>0?e.showAlert("Your text is now Copied.","success"):e.showAlert("My mate please enter something.","danger")},className:" btn btn-dark mb-2",children:"Copy Text"})]})]})}d.defaultProps={title:"default title redor automatically",about:"default about redor automatically"};var m=a(9);function h(e){var t;return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("div",(t={className:"container"},Object(m.a)(t,"className","my-1"),Object(m.a)(t,"children",[Object(i.jsx)("div",{className:"jumbotron p-4 p-md-5 border text-white rounded bg-".concat(e.mode),children:Object(i.jsxs)("div",{className:"col-md-6 px-0",children:[Object(i.jsx)("h1",{className:"display-4 text-primary font-italic",children:"Welcome To About Section"}),Object(i.jsx)("p",{className:"lead text-secondary my-3",children:"We have work hard on our UI and basic site functionalities. You can contact us through our social handles by clicking below footer links."})]})}),Object(i.jsxs)("div",{className:"row mb-2 my-3",children:[Object(i.jsx)("div",{className:"col-md-6",children:Object(i.jsx)("div",{className:"row no-gutters  border rounded overflow-hidden bg-".concat(e.mode," flex-md-row mb-4 shadow-sm h-md-250 position-relative"),children:Object(i.jsxs)("div",{className:"col p-4 d-flex flex-column position-static",children:[Object(i.jsx)("strong",{className:"d-inline-block mb-2 text-danger",children:"Me"}),Object(i.jsx)("h3",{className:"mb-0 text-primary",children:"Mr. Shubham Rathore"}),Object(i.jsx)("div",{className:"mb-1 text-warning",children:"React Dev"}),Object(i.jsx)("p",{className:"card-text text-secondary mb-auto",children:"I am IT Engineer. I done my b.tech from aitr in 2023. I love web development and looking for opportunities in the path. Hello mate so this is my react website which looks good i think so. lets talk about my site.So it is acutually completely  working on user's text."})]})})}),Object(i.jsx)("div",{className:"col-md-6",children:Object(i.jsx)("div",{className:"row no-gutters  border rounded overflow-hidden bg-".concat(e.mode,"  flex-md-row mb-4 shadow-sm h-md-250 position-relative"),children:Object(i.jsxs)("div",{className:"col p-4 d-flex flex-column position-static",children:[Object(i.jsx)("strong",{className:"d-inline-block mb-2 text-danger",children:"About Site"}),Object(i.jsx)("h3",{className:"mb-0 text-primary",children:"Text-Handler"}),Object(i.jsx)("div",{className:"mb-1 text-warning opacity-75",children:"Last Updated : Nov 12,2021"}),Object(i.jsxs)("p",{className:"card-text text-secondary mb-auto",children:[" ","So if someone wants to uppercase or  lowercase their complete text. After performing operations you can preview what you have write.  You can copy your text incase you need to paste complete text. If  you want to clear the complete text so you have clear button too."]})]})})})]})]),t))})}function j(e){return Object(i.jsx)("div",{children:Object(i.jsx)("div",{className:"container",children:Object(i.jsxs)("footer",{className:"d-flex flex-wrap justify-content-between align-items-center bg-".concat(e.mode," px-4 py-3 my-4 border-top"),children:[Object(i.jsxs)("div",{className:"col-md-4 d-flex align-items-center",children:[Object(i.jsx)("a",{href:"/",className:"mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"}),Object(i.jsx)("span",{className:"text-muted",children:"\xa9 2021 React-Dev, Inc"})]}),Object(i.jsxs)("ul",{className:"nav col-md-4 justify-content-end list-unstyled d-flex",children:[Object(i.jsx)("li",{className:"ms-3",children:Object(i.jsxs)("a",{className:"text-muted",href:"https://twitter.com/ganeshmemes",children:["   ",Object(i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-twitter",viewBox:"0 0 16 16",children:Object(i.jsx)("path",{d:"M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"})}),"   "]})}),Object(i.jsx)("li",{className:"ms-3",children:Object(i.jsxs)("a",{className:"text-muted",href:"https://www.instagram.com/royalrathore107/",children:[Object(i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-instagram",viewBox:"0 0 16 16",children:Object(i.jsx)("path",{d:"M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"})}),"    "]})}),Object(i.jsx)("li",{className:"ms-3",children:Object(i.jsxs)("a",{className:"text-muted",href:"https://www.linkedin.com/in/shubham-rathore-1a25111a9",children:[Object(i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-linkedin",viewBox:"0 0 16 16",children:Object(i.jsx)("path",{d:"M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"})})," "]})})]})]})})})}var x=function(e){return Object(i.jsx)("div",{style:{height:"50px"},children:e.alert&&Object(i.jsxs)("div",{class:"alert alert-".concat(e.alert.type," mb-2 alert-dismissible fade show "),role:"alert",children:[Object(i.jsx)("strong",{children:e.alert.type})," : ",e.alert.msg]})})};function u(){var e;return Object(i.jsx)("div",{className:"container my-3",children:Object(i.jsxs)("div",{class:"feedback-card",children:[Object(i.jsx)("div",{class:"feedback-header",children:"SEND FEEDBACK"}),Object(i.jsxs)("form",{class:"feedback-body",children:[Object(i.jsx)("input",{type:"name",className:"input-1",class:"feedback-body__email",placeholder:"name"}),Object(i.jsx)("input",{type:"email",className:"input-1",class:"feedback-body__email",placeholder:"Email"}),Object(i.jsx)("textarea",(e={className:"textarea-1"},Object(m.a)(e,"className","feedback-body__message"),Object(m.a)(e,"rows","5"),Object(m.a)(e,"placeholder","Message"),e)),Object(i.jsx)("button",{class:"send-button",children:"Send Feedback"})]})]})})}var g=a(2);var p=function(){var e=Object(c.useState)("light"),t=Object(o.a)(e,2),a=t[0],s=t[1],n=Object(c.useState)(null),l=Object(o.a)(n,2),m=l[0],p=l[1],O=function(e,t){p({msg:e,type:t}),setTimeout((function(){p(null)}),2e3)};return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)(r.a,{children:[Object(i.jsx)(d,{title:"React App",mode:a,togglemode:function(){"light"===a?(s("dark"),document.body.style.backgroundColor="#38373A",document.title="Text-Handler \ud83c\udf11 Dark Mode",O("Dark mode has been enabled","success")):(s("light"),document.body.style.backgroundColor="#FBEAFF",document.title="Text-Handler \ud83c\udf1e Light Mode",O("Light mode has been enabled","success"))},about:"about my app"}),Object(i.jsx)(x,{alert:m}),Object(i.jsxs)("div",{className:"container","my-3":!0,children:[Object(i.jsxs)(g.c,{children:[Object(i.jsx)(g.a,{exact:!0,path:"/about",children:Object(i.jsx)(h,{mode:a})}),Object(i.jsx)(g.a,{exact:!0,path:"/",children:Object(i.jsx)(b,{showAlert:O,heading:"Enter The Text In The Form Below"})}),Object(i.jsx)(g.a,{exact:!0,path:"/Contactus",children:Object(i.jsx)(u,{mode:a})})]}),Object(i.jsx)(j,{mode:a})]})]})})},O=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,32)).then((function(t){var a=t.getCLS,c=t.getFID,s=t.getFCP,n=t.getLCP,l=t.getTTFB;a(e),c(e),s(e),n(e),l(e)}))};l.a.render(Object(i.jsx)(s.a.StrictMode,{children:Object(i.jsx)(p,{})}),document.getElementById("root")),O()}},[[31,1,2]]]);
//# sourceMappingURL=main.e24ee3b8.chunk.js.map