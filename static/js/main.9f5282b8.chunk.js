(window["webpackJsonpnew-react"]=window["webpackJsonpnew-react"]||[]).push([[0],{20:function(e,t,a){e.exports=a(44)},25:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(13),r=a.n(c),l=(a(25),a(2)),s=a.n(l),i=a(3),m=a(14),u=a(15),h=a(18),d=a(16),p=a(19),E=a(17),w=a.n(E),b=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(a=Object(h.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).state={loading:!1,contacts:[]},a.componentDidMount=Object(i.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.callZohoAPI();case 2:case"end":return e.stop()}}),e)}))),a.callZohoAPI=Object(i.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.setState({loading:!0}),e.next=3,w.a.get("https://cors-anywhere.herokuapp.com/".concat("https://books.zoho.com/api/v3/contacts?organization_id=649249007"),{crossdomain:!0,headers:{Authorization:"Zoho-authtoken db36e02a50b57e081efe533a8a0f834b"}});case 3:t=e.sent,a.setState({contacts:t.data.contacts,loading:!1});case 5:case"end":return e.stop()}}),e)}))),a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){console.log("this is contact data :->",this.state.contacts);var e=this.state,t=e.loading,a=e.contacts;return o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},o.a.createElement("h1",null,"Demo for miss Nikita Ajwani"),t&&o.a.createElement("h2",null,"Loading")),o.a.createElement("body",null,!t&&a.length>0&&o.a.createElement("table",{border:"1"},o.a.createElement("tr",null,o.a.createElement("th",null,"Contact Name"),o.a.createElement("th",null,"Company Name"),o.a.createElement("th",null,"Email"),o.a.createElement("th",null,"Phone"),o.a.createElement("th",null,"GST Treatment")),o.a.createElement("tbody",null,a.map((function(e,t){return o.a.createElement("tr",{key:t},o.a.createElement("td",null,e.contact_name),o.a.createElement("td",null,e.company_name),o.a.createElement("td",null,e.email),o.a.createElement("td",null,e.mobile),o.a.createElement("td",null,e.gst_treatment))}))))))}}]),t}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[20,1,2]]]);
//# sourceMappingURL=main.9f5282b8.chunk.js.map