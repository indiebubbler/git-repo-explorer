(this["webpackJsonpgit-repo-explorer"]=this["webpackJsonpgit-repo-explorer"]||[]).push([[0],{46:function(e,t,a){e.exports=a(79)},51:function(e,t,a){},78:function(e,t,a){},79:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(10),s=a.n(c),o=(a(51),a(9)),l=a(81),i=a(86),u=a(88),p=a(84),d=a(6),m=a(15),h=a.n(m),f={},g=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"fetchReposRequest":return(e=Object(d.a)({},t))[a.payload]={isLoading:!0,fetched:!1,items:[]},e;case"fetchReposSuccess":return(e=Object(d.a)({},t))[a.payload.loginId]={isLoading:!1,fetched:!0,items:a.payload.repos},e;case"fetchReposFailure":return Object(d.a)({},t);case"clearRepos":return{};default:return t}},E={searchTerm:"",users:[],errorMsg:"",isLoading:!1,fetchSuccess:!1},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"fetchUsersRequest":return Object(d.a)(Object(d.a)({},e),{},{isLoading:!0,searchTerm:t.payload,fetchSuccess:!1});case"fetchUsersSuccess":return Object(d.a)(Object(d.a)({},e),{},{isLoading:!1,users:t.payload,errorMsg:"",fetchSuccess:!0});case"fetchUsersFailure":return Object(d.a)(Object(d.a)({},e),{},{isLoading:!1,errorMsg:t.payload,users:[]});default:return e}},v=a(42),y=a(85),j=a(37),O=a(38),w=a(45),R=a(41),I=a(82),S=a(83),U=function(e){Object(w.a)(a,e);var t=Object(R.a)(a);function a(){return Object(j.a)(this,a),t.apply(this,arguments)}return Object(O.a)(a,[{key:"render",value:function(){return n.a.createElement(l.a,{className:"RepoCart"},n.a.createElement(I.a,null,n.a.createElement(S.a,null,n.a.createElement("div",{className:"header title"},this.props.repo.name)),n.a.createElement(S.a,null,n.a.createElement("div",{className:"header stars"},this.props.repo.stargazersCount," \u2605"))),n.a.createElement(I.a,null,n.a.createElement(l.a,{className:"description"},this.props.repo.description)))}}]),a}(r.Component),k=function(e){return e.show?n.a.createElement("div",{className:"label"},e.children):null},L=k;k.defaultProps={show:!0};var N=function(e){var t=Object(r.useState)(!1),a=Object(v.a)(t,2),c=a[0],s=a[1],i=Object(o.b)(),u=Object(o.c)((function(e){return e.repos})),d=u[e.user.loginId]&&u[e.user.loginId].isLoading||!1,m=u[e.user.loginId]&&u[e.user.loginId].fetched||!1,f=u[e.user.loginId]?u[e.user.loginId].items:[],g=function(){if(!m){var t={loginId:e.user.loginId,reposUrl:e.user.reposUrl};i((a=t,function(e){var t=a.loginId,r=a.reposUrl;e(function(e){return{type:"fetchReposRequest",payload:e}}(t)),h.a.get(r).then((function(a){var r=a.data.map((function(e){return{name:e.name,stargazersCount:e.stargazers_count,description:e.description}}));e(function(e){return{type:"fetchReposSuccess",payload:e}}({loginId:t,repos:r}))})).catch((function(t){e({type:"fetchReposFailure",payload:t})}))}))}var a;s(!c)};return n.a.createElement(n.a.Fragment,null,n.a.createElement(p.a,{onClick:function(){return g()},variant:"expandable",className:c?"expanded":"",block:!0},e.user.login),n.a.createElement(L,{show:d},"Loading..."),n.a.createElement(y.a,{in:c},n.a.createElement(l.a,null,n.a.createElement(L,{show:m&&0===f.length},"This user has not created any repository yet."),f.map((function(e,t){return n.a.createElement(U,{key:"repo_"+t,repo:e})})))))},C=a(87),x=function(e){var t=Object(o.c)((function(e){return e.users}));return n.a.createElement(n.a.Fragment,null,n.a.createElement(L,{show:t.isLoading},"Loading..."),n.a.createElement(L,{show:t.fetchSuccess&&0===t.users.length},"There are no users matching your criteria"),t.users.length>0&&!t.isLoading?n.a.createElement("div",{className:"UsersContainer"},n.a.createElement(L,null,'Showing users for "',t.searchTerm,'"'),t.users.map((function(e){return n.a.createElement(N,{key:e.loginId,user:e})}))):null,n.a.createElement("br",null),n.a.createElement(C.a,{variant:"danger",hidden:0===t.errorMsg.length},"Unable to load data: ",t.errorMsg.message))},F=function(e){var t=Object(o.b)(),a=Object(r.useRef)();Object(r.useEffect)((function(){a.current.focus()}));var c=function(){var e=a.current.value.trim();e&&e.length>0&&t(function(e){return function(t){t({type:"fetchUsersRequest",payload:e}),h.a.get("https://api.github.com/search/users?q=".concat(e,"&per_page=5")).then((function(e){t((function(e){e({type:"clearRepos"})}));var a=e.data.items.map((function(e){return{login:e.login,reposUrl:e.repos_url,loginId:e.id}}));t({type:"fetchUsersSuccess",payload:a})})).catch((function(e){t({type:"fetchUsersFailure",payload:e})}))}}(e))};return n.a.createElement(l.a,{className:"GitExplorer"},n.a.createElement("h3",{style:{paddingBottom:"1rem"}},"GitHub Repositories Explorer"),n.a.createElement(i.a,{size:"sm",className:"mb-3"},n.a.createElement(u.a,{ref:a,onKeyPress:function(e){13===e.charCode&&c()},placeholder:"Enter username"})),n.a.createElement(p.a,{onClick:c,block:!0},"Search"),n.a.createElement(x,null))},M=a(13),q=a(40),T=Object(M.c)({users:b,repos:g}),z=Object(M.d)(T,Object(M.a)(q.a));a(77),a(78);var _=function(){return n.a.createElement("div",{className:"App"},n.a.createElement(o.a,{store:z},n.a.createElement(F,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(_,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[46,1,2]]]);
//# sourceMappingURL=main.b9b7bbb1.chunk.js.map