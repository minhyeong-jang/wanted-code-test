(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{101:function(n,e,t){},103:function(n,e,t){},239:function(n,e,t){"use strict";t.r(e);var a=t(0),r=t.n(a),o=t(85),i=t.n(o),c=t(18),u=t(30),d=(t(101),t(7)),s=t(8),l=t(10),p=t(9),f=t(11),b=(t(103),t(19)),g=t.n(b),h=t(31),m=t(1),v=t(2),x=t(32),O=t.n(x),j=t(53),w=function(n){return{type:"GET_DOGS",data:n}},E=function(n){return{type:"UPDATE_LOADING",data:n}},y={dogs:[],isLoading:!1},k=function(n,e){return Object.assign({},n,{dogs:[].concat(Object(j.a)(n.dogs),Object(j.a)(e.data))})},D=function(n){return Object.assign({},n,{dogs:[]})},L=function(n,e){return Object.assign({},n,{isLoading:e.data})},C=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"GET_DOGS":return k(n,e);case"CLEAR_DOGS":return D(n);case"UPDATE_LOADING":return L(n,e);default:return n}};function G(){var n=Object(m.a)(["\n  outline: none;\n  cursor: pointer;\n  padding: 10px 15px;\n  font-size: 14px;\n  border-radius: 4px;\n  background-color: white;\n  border: 1px solid #dedede;\n  margin-top: 10px;\n  width: 150px;\n  &:first-child {\n    margin-right: 5px;\n  }\n  &:hover {\n    color: #1890ff;\n    border-color: #1890ff;\n  }\n  &:active {\n    opacity: 0.6;\n  }\n"]);return G=function(){return n},n}var _=v.a.button(G()),A=function(n){function e(){var n,t;Object(d.a)(this,e);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(t=Object(l.a)(this,(n=Object(p.a)(e)).call.apply(n,[this].concat(r))))._handleGetDog=Object(h.a)(g.a.mark(function n(){var e;return g.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return t.props.updateLoading(!0),n.next=3,O.a.get("./data.json");case 3:e=n.sent,t.props.updateDogs(e.data);case 5:case"end":return n.stop()}},n)})),t._handleClearDog=function(){if(t.props.isLoading)return alert("\uc774\ubbf8\uc9c0 \uc900\ube44\uc911\uc785\ub2c8\ub2e4."),!1;t.props.clearDogs([]),window.scrollTo(0,0)},t}return Object(f.a)(e,n),Object(s.a)(e,[{key:"render",value:function(){var n=this;return r.a.createElement("div",null,r.a.createElement(_,{onClick:function(){return n._handleGetDog()}},"GET DOGS"),r.a.createElement(_,{onClick:function(){return n._handleClearDog()}},"CLEAR DOGS"))}}]),e}(a.Component),S=Object(c.b)(function(n){return{isLoading:n.isLoading}},function(n){return{updateLoading:function(e){return n(E(e))},updateDogs:function(e){return n(w(e))},clearDogs:function(e){return n({type:"CLEAR_DOGS",data:e})}}})(A),T=t(89),N=t.n(T);function I(){var n=Object(m.a)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n"]);return I=function(){return n},n}function z(){var n=Object(m.a)(["\n  display: block;\n  outline: none;\n  cursor: pointer;\n  background-color: white;\n  border: 1px solid #dedede;\n  padding: 10px 15px;\n  border-radius: 4px;\n  margin: 5px auto;\n"]);return z=function(){return n},n}function R(){var n=Object(m.a)(["\n  padding: 10px 20px;\n  font-size: 15px;\n  font-weight: bold;\n"]);return R=function(){return n},n}function U(){var n=Object(m.a)(["\n  position: fixed;\n  top: 5vh;\n  left: 50%;\n  transform: translateX(-50%);\n  overflow: hidden;\n  border-radius: 10px;\n  z-index: 10;\n  background-color: white;\n  outline: none;\n  img {\n    display: block;\n    max-height: 80vh;\n    max-width: 100%;\n  }\n"]);return U=function(){return n},n}function H(){var n=Object(m.a)([""]);return H=function(){return n},n}var J=v.a.div(H()),M=v.a.div(U()),P=v.a.div(R()),B=v.a.button(z()),K=v.a.div(I()),X=function(n){function e(n){var t;return Object(d.a)(this,e),(t=Object(l.a)(this,Object(p.a)(e).call(this,n))).state={},t}return Object(f.a)(e,n),Object(s.a)(e,[{key:"shouldComponentUpdate",value:function(n){return n.visible!==this.props.visible}},{key:"componentDidUpdate",value:function(){this.body.focus()}},{key:"render",value:function(){var n=this,e=this.props,t=e.visible,a=e.onClose,o=e.data;return r.a.createElement(J,{style:{display:t?null:"none"}},r.a.createElement(M,{ref:function(e){return n.body=e},onKeyDown:function(n){return 27===n.keyCode?a():null},tabIndex:0},r.a.createElement(P,null,"\uc774\ub984 \ubaa8\ub97c \uc2dc\ubc14"),r.a.createElement("img",{src:o,alt:"\uac15\uc544\uc9c0 \uc0c1\uc138\ubcf4\uae30"}),r.a.createElement(B,{onClick:a},"\ub2eb\uae30")),r.a.createElement(K,{onClick:a}))}}]),e}(a.Component);function Y(){var n=Object(m.a)(["\n  max-width: 1060px;\n  margin: 0 auto;\n  padding: 10px;\n  ul {\n    padding: 0;\n    margin: 0;\n    &.show {\n      animation: fadein 1s;\n    }\n    &.hide {\n      "," {\n        &:not(.emptyCard) {\n          display: none;\n        }\n      }\n    }\n  }\n  @keyframes fadein {\n    from {\n      opacity: 0;\n    }\n    to {\n      opacity: 1;\n    }\n  }\n"]);return Y=function(){return n},n}function q(){var n=Object(m.a)(["\n  height: 200px;\n  line-height: 200px;\n  color: #999;\n  background-color: #f2f2f2;\n"]);return q=function(){return n},n}function F(){var n=Object(m.a)(["\n  width: 100%;\n  margin: 10px 0px;\n  border-radius: 10px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  cursor: pointer;\n  box-shadow: 0 8px 38px rgba(133, 133, 133, 0.3),\n    0 5px 12px rgba(133, 133, 133, 0.22);\n  img {\n    display: block;\n    width: 100%;\n  }\n  @media screen and (min-width: 768px) {\n    width: calc(25% - 10px);\n    margin: 5px;\n  }\n"]);return F=function(){return n},n}function Q(){var n=Object(m.a)(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  min-width: 200px;\n  word-break: keep-all;\n  border: 1px solid #dedede;\n  padding: 10px 20px;\n  border-radius: 10px;\n  font-size: 12px;\n"]);return Q=function(){return n},n}var V=v.a.div(Q()),W=v.a.div(F()),Z=Object(v.a)(W)(q()),$=v.a.div(Y(),W),nn=function(n){function e(n){var t;return Object(d.a)(this,e),(t=Object(l.a)(this,Object(p.a)(e).call(this,n)))._handleGetDog=Object(h.a)(g.a.mark(function n(){var e,a,r;return g.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(e=window.scrollY/(document.body.scrollHeight-window.innerHeight),a=Math.round(100*e),t.props.isLoading||!(a>=95)){n.next=8;break}return t.props.updateLoading(!0),n.next=6,O.a.get("./data.json");case 6:r=n.sent,t.props.updateDogs(r.data);case 8:case"end":return n.stop()}},n)})),t.state={initLoad:!0,detail:{visible:!1,data:null}},t}return Object(f.a)(e,n),Object(s.a)(e,[{key:"componentDidMount",value:function(){window.history.scrollRestoration="manual",window.addEventListener("scroll",this._handleGetDog)}},{key:"render",value:function(){var n=this,e=this.props,t=e.dogs,a=e.isLoading;return r.a.createElement($,null,t.length||a?null:r.a.createElement(V,null,"\uc2a4\ud06c\ub864\uc744 \ub0b4\ub9ac\uac70\ub098 GET DOGS \ubc84\ud2bc\uc744 \ud074\ub9ad\ud574\uc8fc\uc138\uc694"),r.a.createElement(N.a,{className:this.state.initLoad&&a?"hide":"show",elementType:"ul",options:{transitionDuration:0},onImagesLoaded:function(){a&&(n.props.updateLoading(!1),n.setState({initLoad:!1}))}},t.map(function(e,t){return r.a.createElement(W,{key:t,onClick:function(){return n.setState({detail:{visible:!0,data:e}})}},r.a.createElement("img",{src:e,alt:e}))}),a?r.a.createElement(Z,{className:"emptyCard"},"\uc774\ubbf8\uc9c0 \uc900\ube44\uc911\uc785\ub2c8\ub2e4."):null),r.a.createElement(X,{data:this.state.detail.data,visible:this.state.detail.visible,onClose:function(){return n.setState({detail:{visible:!1}})}}))}}]),e}(a.Component),en=Object(c.b)(function(n){return{dogs:n.dogs,isLoading:n.isLoading}},function(n){return{updateDogs:function(e){return n(w(e))},updateLoading:function(e){return n(E(e))}}})(nn),tn=function(n){function e(){return Object(d.a)(this,e),Object(l.a)(this,Object(p.a)(e).apply(this,arguments))}return Object(f.a)(e,n),Object(s.a)(e,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("h3",null,"wanted-",r.a.createElement("code",null,"CODE"),"-test")),r.a.createElement(S,null),r.a.createElement(en,null))}}]),e}(a.Component),an=Object(u.b)(C);i.a.render(r.a.createElement(c.a,{store:an},r.a.createElement(tn,null)),document.getElementById("root"))},92:function(n,e,t){n.exports=t(239)}},[[92,2,1]]]);
//# sourceMappingURL=main.273f7d08.chunk.js.map