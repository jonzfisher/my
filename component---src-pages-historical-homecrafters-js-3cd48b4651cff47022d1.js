webpackJsonp([0xba5b051ace60],{101:function(e,t){"use strict";var n={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,mixins:!0,propTypes:!0,type:!0},o={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},i=Object.defineProperty,r=Object.getOwnPropertyNames,a=Object.getOwnPropertySymbols,s=Object.getOwnPropertyDescriptor,l=Object.getPrototypeOf,u=l&&l(Object);e.exports=function e(t,p,d){if("string"!=typeof p){if(u){var f=l(p);f&&f!==u&&e(t,f,d)}var c=r(p);a&&(c=c.concat(a(p)));for(var h=0;h<c.length;++h){var m=c[h];if(!(n[m]||o[m]||d&&d[m])){var v=s(p,m);try{i(t,m,v)}catch(e){}}}return t}return t}},53:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function i(e,t){function n(e){function t(){var t=i||r||s||u||d||f,n=void 0,o=void 0;if(t){var a=m?"2000px":"100%",l=v&&e;n=i?(l?"":"-")+a:r?(l?"-":"")+a:"0",o=u||d?(l?"":"-")+a:s||f?(l?"-":"")+a:"0"}return(0,h.animation)((e?"to":"from")+" {opacity: 0;"+(t?" transform: translate3d("+n+", "+o+", 0);":"")+"}\n         "+(e?"from":"to")+" {opacity: 1;transform: none;} ")}return{reverse:i,make:t}}var o=e.out,i=e.left,r=e.right,s=e.up,u=e.down,d=e.top,f=e.bottom,m=e.big,v=e.opposite,y=(0,l.default)(e,["out","left","right","up","down","top","bottom","big","opposite"]);return t?p.default.createElement(c.default,(0,a.default)({},y,{in:n(!1),out:n(!0)})):n(o)}Object.defineProperty(t,"__esModule",{value:!0});var r=n(10),a=o(r),s=n(12),l=o(s),u=n(1),p=o(u),d=n(3),f=n(8),c=o(f),h=n(9),m={out:d.bool,left:d.bool,right:d.bool,top:d.bool,bottom:d.bool,big:d.bool,opposite:d.bool},v={};i.propTypes=m,i.defaultProps=v,t.default=i,e.exports=t.default},54:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function i(e,t){function n(e){function t(){var t=void 0;if(d||f||i||r||s||u){var n=e&&m,o=d||s||u?(u?n?"":"-":n?"-":"")+"1":"0",a=f||r||i?(i?n?"":"-":n?"-":"")+"1":"0";t=e?"from {\n              transform: perspective(400px);\n            }\n\n            30% {\n              transform: perspective(400px) rotate3d("+o+", "+a+", 0, -15deg);\n              opacity: 1;\n            }\n\n            to {\n              transform: perspective(400px) rotate3d("+o+", "+a+", 0, 90deg);\n              opacity: 0;\n            }":"from {\n              transform: perspective(400px) rotate3d("+o+", "+a+", 0, 90deg);\n              animation-timing-function: ease-in;\n              opacity: 0;\n            }\n\n            40% {\n              transform: perspective(400px) rotate3d("+o+", "+a+", 0, -20deg);\n              animation-timing-function: ease-in;\n            }\n\n            60% {\n              transform: perspective(400px) rotate3d("+o+", "+a+", 0, 10deg);\n              opacity: 1;\n            }\n\n            80% {\n              transform: perspective(400px) rotate3d("+o+", "+a+", 0, -5deg);\n            }\n\n            to {\n              transform: perspective(400px);\n            }"}else t="from {\n              transform: perspective(400px) rotate3d(0, 1, 0, -360deg);\n              animation-timing-function: ease-out;\n              opacity: "+(e?"1":"0")+";\n            }\n\n            40% {\n              transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg);\n              animation-timing-function: ease-out;\n            }\n\n            50% {\n              transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg);\n              animation-timing-function: ease-in;\n            }\n\n            to {\n              transform: perspective(400px);\n              animation-timing-function: ease-in;\n              opacity: "+(e?"0":"1")+";\n            }";return(0,h.animation)(t)}return{style:{backfaceVisibility:"visible"},make:t}}var o=e.out,i=e.left,r=e.right,s=e.top,u=e.bottom,d=e.x,f=e.y,m=e.opposite,v=(0,l.default)(e,["out","left","right","top","bottom","x","y","opposite"]);return t?p.default.createElement(c.default,(0,a.default)({},v,{in:n(!1),out:n(!0)})):n(o)}Object.defineProperty(t,"__esModule",{value:!0});var r=n(10),a=o(r),s=n(12),l=o(s),u=n(1),p=o(u),d=n(3),f=n(8),c=o(f),h=n(9),m={out:d.bool,left:d.bool,right:d.bool,top:d.bool,bottom:d.bool,opposite:d.bool},v={};i.propTypes=m,i.defaultProps=v,t.default=i,e.exports=t.default},8:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(10),r=o(i),a=n(80),s=o(a),l=n(17),u=o(l),p=n(31),d=o(p),f=n(33),c=o(f),h=n(32),m=o(h),v=n(1),y=o(v),b=n(3),g=n(9),w=n(56),x=o(w),_=n(58),E=o(_),k={when:b.bool,spy:b.any,effect:b.string,collapse:(0,b.oneOfType)([b.bool,b.string]),duration:b.number,delay:b.number,count:b.number,forever:b.bool,tag:b.string,step:(0,b.oneOfType)([(0,b.instanceOf)(x.default),b.string]),className:b.string,style:b.object,props:b.object,force:b.bool,bypass:b.bool,fraction:b.number,onReveal:b.func,children:b.node.isRequired,in:b.object,out:(0,b.oneOfType)([b.object,b.bool])},M={duration:1e3,delay:0,count:1,fraction:.2,tag:"div",when:!0},O={stepper:b.object},P=function(e){function t(e){(0,u.default)(this,t);var n=(0,c.default)(this,(t.__proto__||(0,s.default)(t)).call(this,e));return n.state={legacyMode:!1,style:{height:e.collapse?0:void 0,visibility:e.collapse?e.when||!e.out?"visible":"hidden":void 0,opacity:!e.when&&e.out?0:void 0}},n.isListener=!1,n.isShown=!!n.props.bypass,n.revealHandler=(0,E.default)(n.reveal.bind(n,!1),66),n.resizeHandler=(0,E.default)(n.resize.bind(n),500),n.invisible=(0,E.default)(n.invisible,500),n.saveRef=function(e){return n.el=e},n}return(0,m.default)(t,e),(0,d.default)(t,[{key:"inViewport",value:function(){if(!this.el||window.document.hidden)return!1;var e=this.el.offsetHeight,n=window.pageYOffset-t.getTop(this.el),o=Math.min(e,window.innerHeight)*(g.globalHide?this.props.fraction:0);return n>o-window.innerHeight&&n<e-o}},{key:"hide",value:function(){this.props.out&&this.setState({style:{opacity:0}})}},{key:"resize",value:function(){this&&this.el&&this.props.when&&this.inViewport()&&(this.clean(),this.isShown=!!this.props.when,this.setState({style:{opacity:this.props.when||!this.props.out?1:0}}),this.props.onReveal&&this.props.when&&this.props.onReveal())}},{key:"invisible",value:function(){this&&!this.isShown&&this.setState({style:(0,r.default)({},this.state.style,{visibility:"hidden"})})}},{key:"animationEnd",value:function(e,t){var n=this;if(!t){var o=this.finalEl||this.el,i=function t(){n&&o&&(o.removeEventListener("animationend",t),e.call(n))};o.addEventListener("animationend",i)}}},{key:"collapse",value:function(e,t){if(t.collapse&&t.out){var n=t.duration+(t.cascade?!0===t.cascade?1e3:t.cascade:0),o=n>>2,i=t.when?o:n-o,a=t.delay+(t.when?0:o);return(0,r.default)({},e,{height:t.when?!0===t.collapse?this.dummyEl.offsetHeight:t.collapse:0,transition:"height "+i+"ms ease "+a+"ms"})}return e}},{key:"animate",value:function(e){if(this&&this.el){if(this.clean(),e.effect)this.setState({legacyMode:!0});else{var t=e[e.when||!e.out?"in":"out"],n=e.out||e.when?t.animation||t.make():void 0;if(this.isShown===!!e.when)return;this.isShown=!!e.when,this.setState({style:this.collapse((0,r.default)({animationName:n,animationDuration:e.duration+"ms",animationDelay:e.delay+"ms",animationIterationCount:e.forever?"infinite":e.count,animationFillMode:"both",opacity:1},t.style),e)}),!e.when&&e.out&&this.animationEnd(this.invisible,e.forever)}e.onReveal&&e.when&&e.onReveal()}}},{key:"clean",value:function(){this.isListener&&(window.removeEventListener("scroll",this.revealHandler),window.removeEventListener("orientationchange",this.revealHandler),window.document.removeEventListener("visibilitychange",this.revealHandler),window.removeEventListener("resize",this.resizeHandler),this.isListener=!1)}},{key:"componentWillUnmount",value:function(){this.clean(),g.ssr&&(0,g.disableSsr)()}},{key:"listen",value:function(){this.isListener||(this.isListener=!0,window.addEventListener("scroll",this.revealHandler),window.addEventListener("orientationchange",this.revealHandler),window.document.addEventListener("visibilitychange",this.revealHandler),window.addEventListener("resize",this.resizeHandler))}},{key:"reveal",value:function(e){var t=this;if(this&&this.el)if(e||(e=this.props),this.inViewport()){if(this.start)return this.hide(),this.listen(),void this.start(this.step);e.when&&this.isShown&&"spy"in e?(this.isShown=!1,this.setState({style:{}}),window.setTimeout(function(){return t.animate.call(t,e)},200)):this.animate(e)}else this.listen()}},{key:"componentDidMount",value:function(){if(this.el&&!this.props.bypass){if(this.props.force)return this.animate(this.props);this.props.step instanceof x.default?this.props.step.push(this):this.props.step&&this.context.stepper&&this.context.stepper.get(this.props.step).push(this),g.ssr&&(this.props.out||this.props.effect)&&t.getTop(this.el)<window.pageYOffset+window.innerHeight?(this.setState({style:{opacity:0,transition:"opacity 1000ms"}}),window.setTimeout(this.revealHandler,1e3)):this.props.when&&this.reveal(this.props)}}},{key:"cascade",value:function(e){var t=this,n=void 0;n="string"==typeof e?e.split("").map(function(e,t){return y.default.createElement("span",{key:t,style:{display:"inline-block",whiteSpace:"pre"}},e)}):y.default.Children.toArray(e);var o=n.length-1,i=this.props.duration+(!0===this.props.cascade?1e3:this.props.cascade),a=0;return n=n.map(function(e){return y.default.cloneElement(e,{style:(0,r.default)({},e.props.style,t.state.style,{animationDuration:Math.round((0,g.cascade)(a++,0,o,t.props.duration,i))+"ms"}),ref:a===o?function(e){return t.finalEl=e}:void 0})})}},{key:"componentWillReceiveProps",value:function(e){e.when===this.props.when&&e.spy===this.props.spy||this.reveal(e)}},{key:"dummy",value:function(e){var t=this;if(!0!==this.props.collapse)return e;var n=[e,y.default.createElement(e.type,(0,r.default)({},this.props.props||void 0,{className:this.props.className,children:this.props.children,key:2,ref:function(e){return t.dummyEl=e},style:(0,r.default)({},this.props.style,{position:"absolute",left:"-9999em",top:"-9999em",height:"auto",display:"block",animationName:"none",animationDuration:"0s",transition:"none",opacity:0})}))];return y.default.createElement("span",null,n)}},{key:"render",value:function(){var e=this.props,t=e.tag,n=e.id,o=e.children,i=e.style,a=e.className,s=(this.state.legacyMode?this.props.effect:this.props.out||this.props.effect?g.namespace:"")+(a?" "+a:"")||void 0,l=void 0,u=!1;this.state.legacyMode||(l=(0,r.default)({},i,this.state.style),this.props.cascade&&o&&this.state.style.animationName&&(u=this.cascade(o),l.animationName=void 0));var p=y.default.createElement(t,(0,r.default)({},this.props.props||void 0,{id:n,className:s,style:this.state.legacyMode?i:l,key:this.props.collapse?1:void 0,ref:this.saveRef}),u||o);return this.props.collapse?this.dummy(p):p}}],[{key:"getTop",value:function(e){for(;void 0===e.offsetTop;)e=e.parentNode;for(var t=e.offsetTop;e.offsetParent;t+=e.offsetTop)e=e.offsetParent;return t}}]),t}(y.default.Component);P.propTypes=k,P.defaultProps=M,P.contextTypes=O,t.default=P,e.exports=t.default},55:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function i(e,t){function n(e){function t(){var t="-200deg",n="center";return e&&m?((d||u)&&r&&(t="-45deg"),((d||u)&&i||(f||s)&&r)&&(t="45deg"),(f||s)&&i&&(t="-90deg"),(i||r)&&(n=(r?"left":"right")+" bottom")):((f||s)&&i&&(t="-45deg"),((f||s)&&r||(d||u)&&i)&&(t="45deg"),(d||u)&&r&&(t="-90deg"),(i||r)&&(n=(i?"left":"right")+" bottom")),(0,h.animation)("\n        "+(e?"to":"from")+" { opacity: 0; transform-origin: "+n+"; transform: rotate3d(0, 0, 1, "+t+");}\n        "+(e?"from":"to")+" { opacity: 1; transform-origin: "+n+"; transform: none;}\n      ")}return{make:t}}var o=e.out,i=e.left,r=e.right,s=e.top,u=e.bottom,d=e.up,f=e.down,m=e.opposite,v=(0,l.default)(e,["out","left","right","top","bottom","up","down","opposite"]);return t?p.default.createElement(c.default,(0,a.default)({},v,{in:n(!1),out:n(!0)})):n(o)}Object.defineProperty(t,"__esModule",{value:!0});var r=n(10),a=o(r),s=n(12),l=o(s),u=n(1),p=o(u),d=n(3),f=n(8),c=o(f),h=n(9),m={out:d.bool,left:d.bool,right:d.bool,top:d.bool,bottom:d.bool,opposite:d.bool},v={};i.propTypes=m,i.defaultProps=v,t.default=i,e.exports=t.default},56:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(17),r=o(i),a=n(31),s=o(a),l=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3;(0,r.default)(this,e),this.after=n,this.name=t,this.chain=[]}return(0,s.default)(e,[{key:"push",value:function(e){this.start&&(e.step=this.index,e.start=this.start),this.chain.push(e)}}]),e}();t.default=l,e.exports=t.default},57:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function i(e,t){function n(e){function t(){var t=i||r,n=s||u||d||f,o=t||n,a=void 0,l=void 0,p=void 0,c=void 0,v=void 0;return o?e?(l=t?((m?r:i)?"":"-")+"42px":"0",p=n?((m?d||u:f||s)?"-":"")+"60px":"0",c=t?((m?i:r)?"":"-")+"2000px":"0",v=n?((m?f||s:d||u)?"":"-")+"2000px":"0",a="40% {\n              opacity: 1;\n              transform: scale3d(.475, .475, .475) translate3d("+l+", "+p+", 0);\n            }\n            to {\n              opacity: 0;\n              transform: scale(.1) translate3d("+c+", "+v+", 0);\n              transform-origin: "+(n?"center bottom":((m?r:i)?"left":"right")+" center")+";\n            }"):(l=t?(i?"-":"")+"1000px":"0",p=n?(f||s?"-":"")+"1000px":"0",c=t?(r?"-":"")+"10px":"0",v=n?(d||u?"-":"")+"60px":"0",a="from {\n              opacity: 0;\n              transform: scale3d(.1, .1, .1) translate3d("+l+", "+p+", 0);\n              animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n            }\n            60% {\n              opacity: 1;\n              transform: scale3d(.475, .475, .475) translate3d("+c+", "+v+", 0);\n              animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n            }"):a=(e?"to":"from")+" {opacity: 0; transform: scale3d(.1, .1, .1);} "+(e?"from":"to")+" { opacity: 1; transform: none;}",(0,h.animation)(a)}return{make:t}}var o=e.out,i=e.left,r=e.right,s=e.top,u=e.bottom,d=e.up,f=e.down,m=e.opposite,v=(0,l.default)(e,["out","left","right","top","bottom","up","down","opposite"]);return t?p.default.createElement(c.default,(0,a.default)({},v,{in:n(!1),out:n(!0)})):n(o)}Object.defineProperty(t,"__esModule",{value:!0});var r=n(10),a=o(r),s=n(12),l=o(s),u=n(1),p=o(u),d=n(3),f=n(8),c=o(f),h=n(9),m={out:d.bool,left:d.bool,right:d.bool,top:d.bool,bottom:d.bool,opposite:d.bool},v={};i.propTypes=m,i.defaultProps=v,t.default=i,e.exports=t.default},58:function(e,t){"use strict";function n(e,t,n){var o;return function(){var i=this,r=arguments,a=function(){o=null,n||e.apply(i,r)},s=n&&!o;clearTimeout(o),o=setTimeout(a,t),s&&e.apply(i,r)}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=n,e.exports=t.default},9:function(e,t){"use strict";function n(e){try{return d.insertRule(e,d.cssRules.length)}catch(e){console.warn("react-reveal - animation failed")}}function o(e,t,n,o,i){var r=Math.log(o),a=Math.log(i),s=(a-r)/(n-t);return Math.exp(r+s*(e-t))}function i(e){if(!d)return"";var t="@keyframes "+(f+u)+"{"+e+"}",n=p[e];return n?""+f+n:(d.insertRule(t,d.cssRules.length),p[e]=u,""+f+u++)}function r(){window.removeEventListener("scroll",r,!0),n("."+a+" { opacity: 0; }"),window.removeEventListener("orientationchange",r,!0),window.document.removeEventListener("visibilitychange",r),t.globalHide=l=!0}Object.defineProperty(t,"__esModule",{value:!0}),t.insertRule=n,t.cascade=o,t.animation=i;var a=t.namespace="react-reveal",s=(t.is16=!1,t.ssr=!0),l=(t.disableSsr=function(){return t.ssr=s=!1},t.globalHide=!1),u=1,p={},d=!1,f=a+"-"+Math.floor(1e15*Math.random())+"-";if("undefined"!=typeof window&&"nodejs"!==window.name&&window.document&&"undefined"!=typeof navigator){t.ssr=s=window.document.querySelectorAll("div[data-reactroot]").length>0,s&&"performance"in window&&"timing"in window.performance&&"domContentLoadedEventEnd"in window.performance.timing&&window.performance.timing.domLoading&&Date.now()-window.performance.timing.domLoading<500&&(t.ssr=s=!1);var c=document.createElement("style");document.head.appendChild(c),c.sheet&&c.sheet.cssRules&&c.sheet.insertRule&&(d=c.sheet,window.addEventListener("scroll",r,!0),window.addEventListener("orientationchange",r,!0),window.document.addEventListener("visibilitychange",r))}},59:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(8);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o(i).default}});var r=n(53);Object.defineProperty(t,"Fade",{enumerable:!0,get:function(){return o(r).default}});var a=n(54);Object.defineProperty(t,"Flip",{enumerable:!0,get:function(){return o(a).default}});var s=n(55);Object.defineProperty(t,"Rotate",{enumerable:!0,get:function(){return o(s).default}});var l=n(57);Object.defineProperty(t,"Zoom",{enumerable:!0,get:function(){return o(l).default}})},196:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var i=n(1),r=o(i),a=n(98),s=o(a),l=n(59),u=function(){return r.default.createElement("div",null,r.default.createElement(l.Fade,null,r.default.createElement("h1",null,"Historical Homecrafters")),r.default.createElement("p",null,"This was a great project"),r.default.createElement(s.default,{to:"/"},"Go back to the homepage"))};t.default=u,e.exports=t.default}});
//# sourceMappingURL=component---src-pages-historical-homecrafters-js-3cd48b4651cff47022d1.js.map