(window.webpackJsonpcalculator=window.webpackJsonpcalculator||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),l=a(3),c=a.n(l),r=(a(14),a(4)),s=a(5),o=a(7),u=a(6),h=a(1),d=a(8),m=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={display:"",hasDecimal:!1,result:0},a.clear=a.clear.bind(Object(h.a)(a)),a.handleNumber=a.handleNumber.bind(Object(h.a)(a)),a.isDecimal=a.isDecimal.bind(Object(h.a)(a)),a.calculate=a.calculate.bind(Object(h.a)(a)),a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"clear",value:function(){this.setState({display:"0",result:"",hasDecimal:!1})}},{key:"handleNumber",value:function(e){this.isDecimal(e)&&this.setState({display:"0"===this.state.display?e.target.textContent:this.state.display.concat(e.target.textContent)})}},{key:"isDecimal",value:function(e){return("."!==e.target.textContent||!this.state.hasDecimal)&&("."!==e.target.textContent||this.state.hasDecimal?-1===["+","-","*","/"].indexOf(e.target.textContent)||(this.setState({hasDecimal:!1}),!0):(this.setState({hasDecimal:!0}),!0))}},{key:"calculate",value:function(){var e=0;Array.from(this.state.display.matchAll(/([[+-\/*]+]?)?([[\d.]+]?)/gm)).forEach(function(t){var a=void 0===t[1]?"+":t[1],n=t[2];switch(a.length>1&&a.endsWith("-")&&(a=a[0],n="-".concat(n)),a.length>1&&(a=(a=Array.from(a)).splice(a.indexOf(a.length-1),1).join("")),a){case"+":e+=parseFloat(n);break;case"-":e-=parseFloat(n);break;case"*":e*=parseFloat(n);break;case"/":e/=parseFloat(n)}}),this.setState({result:e})}},{key:"render",value:function(){return i.a.createElement("div",{className:"card mt-3"},i.a.createElement("div",{id:"display"},this.state.result?this.state.result:this.state.display),i.a.createElement("div",{className:"content"},i.a.createElement("div",{className:"left flex"},i.a.createElement("button",{onClick:this.clear,id:"clear"},"AC"),i.a.createElement("button",{onClick:this.handleNumber,id:"one"},"1"),i.a.createElement("button",{onClick:this.handleNumber,id:"two"},"2"),i.a.createElement("button",{onClick:this.handleNumber,id:"three"},"3"),i.a.createElement("button",{onClick:this.handleNumber,id:"four"},"4"),i.a.createElement("button",{onClick:this.handleNumber,id:"five"},"5"),i.a.createElement("button",{onClick:this.handleNumber,id:"six"},"6"),i.a.createElement("button",{onClick:this.handleNumber,id:"seven"},"7"),i.a.createElement("button",{onClick:this.handleNumber,id:"eight"},"8"),i.a.createElement("button",{onClick:this.handleNumber,id:"nine"},"9"),i.a.createElement("button",{onClick:this.handleNumber,id:"zero"},"0"),i.a.createElement("button",{onClick:this.handleNumber,id:"decimal"},".")),i.a.createElement("div",{className:"right flex"},i.a.createElement("button",{onClick:this.handleNumber,id:"add"},"+"),i.a.createElement("button",{onClick:this.handleNumber,id:"subtract"},"-"),i.a.createElement("button",{onClick:this.handleNumber,id:"multiply"},"*"),i.a.createElement("button",{onClick:this.handleNumber,id:"divide"},"/"),i.a.createElement("button",{onClick:this.calculate,id:"equals"},"="))))}}]),t}(i.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(i.a.createElement(m,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,a){e.exports=a(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.9ec687c4.chunk.js.map