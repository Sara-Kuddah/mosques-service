(this["webpackJsonpmosques-service"]=this["webpackJsonpmosques-service"]||[]).push([[0],{26:function(e,t,a){e.exports=a(64)},31:function(e,t,a){},64:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(10),o=a.n(l),s=(a(31),a(1)),r=a(2),i=a(4),m=a(3),d=a(5),h=(a(7),a(14),a(12)),u=(a(15),a(11)),p={width:"40%",height:"40%",borderStyle:"solid",float:"right",maxWidth:"40%",marginLeft:"20%"},g=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).onMarkerClick=function(e,t,n){return a.setState({selectedPlace:e,activeMarker:t,showingInfoWindow:!0})},a.onClose=function(e){a.state.showingInfoWindow&&a.setState({showingInfoWindow:!1,activeMarker:null})},a.state={showingInfoWindow:!1,activeMarker:{},selectedPlace:{}},a}return Object(d.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props.name;return c.a.createElement("div",null,c.a.createElement(u.Map,{google:this.props.google,zoom:20,style:p,initialCenter:{lat:this.props.lat,lng:this.props.lng}},c.a.createElement(u.Marker,{onClick:this.onMarkerClick,name:e,url:"https://www.google.com/maps/dir//24.657433,46.670652/@24.6574342,46.6701048,19z"}),c.a.createElement(u.InfoWindow,{marker:this.state.activeMarker,visible:this.state.showingInfoWindow,onClose:this.onClose},c.a.createElement("div",null,c.a.createElement("h4",null,this.state.selectedPlace.name)))))}}]),t}(c.a.Component),v=Object(u.GoogleApiWrapper)({})(g),b=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).onTextBoxChange=function(e){console.log("comment added ",e.target.value),a.setState({newComment:e.target.value})},a.addComment=function(e){e.preventDefault(),console.log("add comment !"),a.setState({comment:a.state.newComment,newComment:" ",needToEdit:!1})},a.handleCheck=function(){console.log("hi-1"),a.setState({needToEdit:!0})},a.fun=function(){if(console.log("hi0"),a.state.needToEdit)return console.log("hi"),c.a.createElement("div",null,c.a.createElement("li",null,c.a.createElement("input",{type:"text",placeholder:"Type your comment Here :)",value:a.state.newComment,onChange:a.onTextBoxChange})," ")," ",c.a.createElement("button",{onClick:a.addComment,className:"btn btn-success"},"done"))},a.isThereAnySellctedToDelete=function(){a.props.deleteChecked&&(console.log(a.state.checked),a.state.checked&&(a.setState({checked:!1}),a.props.deleteItem(a.props.name)))},a.state={comment:a.props.comment,newComment:"test add new comment",needToEdit:!1},a}return Object(d.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("li",null,this.state.comment,this.fun(),c.a.createElement("br",null),c.a.createElement("button",{className:"btn btn-info",onClick:this.handleCheck},"Edit")))}}]),t}(c.a.Component),E=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).addComment=function(e){e.preventDefault(),console.log("add comment !"),a.setState({commentList:[].concat(Object(h.a)(a.state.commentList),[a.state.newComment]),newComment:" "})},a.onTextBoxChange=function(e){console.log("comment added ",e.target.value),a.setState({newComment:e.target.value})},a.state={commentList:a.props.comment,newComment:"test add new comment"},a}return Object(d.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.state.commentList.map((function(e,t){return c.a.createElement(b,{key:t,comment:e})}));return c.a.createElement("div",null,c.a.createElement("h1",{className:"card-title"}," ",this.props.name," "),c.a.createElement("ul",null,e),c.a.createElement("form",null,c.a.createElement("input",{type:"text",placeholder:"Type your comment Here :)",value:this.state.newComment,onChange:this.onTextBoxChange}),c.a.createElement("button",{className:"btn btn-secondary",onClick:this.addComment},"add comment")),c.a.createElement("a",{href:this.props.url,target:"blank"},"Visit the place using Google Map"))}}]),t}(c.a.Component),f=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).isThereAnySellctedToDelete=function(){console.log("0"),a.state.checked&&(console.log("1"),a.props.addToDeleteItem(a.props.name),console.log("2"),a.setState({checked:!1}))},a.handleCheck=function(){return a.setState({checked:!a.state.checked})},a.state={checked:!1},a}return Object(d.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return this.state.checked?"Checked":"Un-checked",this.isThereAnySellctedToDelete(),c.a.createElement("div",null,c.a.createElement("input",{type:"checkbox",onChange:this.handleCheck,defaultChecked:this.state.checked}))}}]),t}(c.a.Component),k=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).isThereAnySellctedToDelete=function(){a.props.deleteChecked&&(a.props.deleteItem(a.props.elemint.name),console.log("hope done"))},a.state={checked:a.props.checked},a}return Object(d.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement("div",null,c.a.createElement("div",{className:"block card"},c.a.createElement("button",{className:"btn btn-secondary",onClick:function(){return e.props.deleteItem(e.props.elemint.name)}},"Delete This Item"),c.a.createElement(f,{addToDeleteItem:this.props.addToDeleteItem,deleteChecked:this.props.deleteChecked,name:this.props.elemint.name,handleCheck:this.handleCheck}),c.a.createElement("div",{className:"blockElemM card-img-top "},c.a.createElement(v,{name:this.props.elemint.name,lat:this.props.elemint.geometry.location.lat,lng:this.props.elemint.geometry.location.lng})),c.a.createElement("div",{className:"blockElemT card-text"},c.a.createElement(E,{name:this.props.elemint.name,comment:this.props.elemint.comment,url:this.props.elemint.url}))))}}]),t}(c.a.Component),w=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).deleteItem=function(e){var t=a.state.data.filter((function(t){return t.name!==e}));console.log("list after delete",t),a.setState({data:t,deleteChecked:!1})},a.addToDeleteItem=function(e){console.log("name",e),console.log("this.state.checedName",a.state.checedName),a.setState({checedName:[].concat(Object(h.a)(a.state.checedName),[e])}),console.log("this.state.checedName after",a.state.checedName)},a.deleteArrayItem=function(){var e=a.state.data.filter((function(e){return!a.state.checedName.includes(e.name)}));console.log("list after delete",e),console.log("list after delete",a.state.checedName),a.setState({data:e,deleteChecked:!1})},a.deleteAllItem=function(){a.setState({data:[]})},a.handleCheck=function(){a.setState({deleteChecked:!0}),console.log(a.state.deleteChecked)},a.state={data:a.props.data,deleteChecked:!1,checedName:[]},a}return Object(d.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this,t=this.state.data.map((function(t,a){return c.a.createElement("div",null,c.a.createElement(k,{key:a,elemint:t,addToDeleteItem:e.addToDeleteItem,deleteItem:e.deleteItem,deleteChecked:e.state.deleteChecked}))}));return console.log(this.state.deleteChecked),c.a.createElement("div",null,c.a.createElement("button",{onClick:this.deleteAllItem,className:"btn btn-danger"},"Delete All Items"),c.a.createElement("button",{onClick:this.deleteArrayItem,className:"btn btn-warning"},"Delete Selcted Items"),t)}}]),t}(c.a.Component),C=[{name:"Juwaie Mosque",geometry:{location:{lat:24.657438,lng:46.670652}},url:"https://www.google.com/maps/dir//24.657433,46.670652/@24.6574342,46.6701048,19z",comment:["This mosque needs maintenance and cleaning services.","We hope to provide some chairs for prayers and Korans."]},{name:"Khaled Alfaisal Mosque",geometry:{location:{lat:24.666326,lng:46.681005}},url:"https://www.google.com/maps/dir//24.666327,46.681002/@24.6663294,46.6799021,18z?hl=en",comment:["This mosque needs maintenance and cleaning services.","We hope to provide some chairs for prayers and Korans."]},{name:"Masjid Al-Jawhara Sudairy",geometry:{location:{lat:24.65945,lng:46.671776}},url:"https://www.google.com/maps/dir//24.65945,46.671776/@24.6594512,46.6712288,19z?hl=en",comment:["This mosque needs maintenance and cleaning services.","We hope to provide some chairs for prayers and Korans."]}],N=a(25),y=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light fixed-top py-3",id:"mainNav"},c.a.createElement("div",{className:"headDiv"},c.a.createElement("div",Object(N.a)({className:"container"},"className","containerBack"),c.a.createElement("a",{className:"navbar-brand js-scroll-trigger",href:"#page-top"},"MOSQUES-SERVICE"),c.a.createElement("button",{className:"navbar-toggler navbar-toggler-right",type:"button","data-toggle":"collapse","data-target":"#navbarResponsive","aria-controls":"navbarResponsive","aria-expanded":"false","aria-label":"Toggle navigation"},c.a.createElement("span",{className:"navbar-toggler-icon"})),c.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarResponsive"},c.a.createElement("ul",{className:"navbar-nav ml-auto my-2 my-lg-0"},c.a.createElement("li",{className:"nav-item"},c.a.createElement("a",{className:"nav-link js-scroll-trigger",href:"#about"},"About")),c.a.createElement("li",{className:"nav-item"},c.a.createElement("a",{className:"nav-link js-scroll-trigger",href:"#services"},"Services")),c.a.createElement("li",{className:"nav-item"},c.a.createElement("a",{className:"nav-link js-scroll-trigger",href:"#contact"},"Contact"))))))),c.a.createElement("div",{className:"masthead"},c.a.createElement("div",{className:"container h-100"},c.a.createElement("div",{className:"row h-100 align-items-center justify-content-center text-center"},c.a.createElement("div",{className:"col-lg-10 align-self-end"},c.a.createElement("h1",{className:"text-uppercase text-white font-weight-bold"},"Welcome To MOSQUES-SERVICE"),c.a.createElement("hr",{className:"divider my-4"})),c.a.createElement("div",{className:"col-lg-8 align-self-baseline"},c.a.createElement("p",{className:"text-white-75 font-weight-light mb-5"},"This website aims to serve mosques and provide what it needs, by conncted people how want to help with mosques which need support."),c.a.createElement("a",{className:"btn btn-primary btn-xl js-scroll-trigger",href:"#about"},"Find Out More"))))),c.a.createElement("section",{className:"page-section bg-primary-my",id:"about"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row justify-content-center"},c.a.createElement("div",{className:"col-lg-8 text-center"},c.a.createElement("h2",{className:"text-white mt-0"},"This website under testing!"),c.a.createElement("hr",{className:"divider light my-4"}),c.a.createElement("p",{className:"text-white-50 mb-4"},"This website aims to serve mosques and provide what it needs, by conncted people how want to help with mosques which need support."))))),c.a.createElement("section",{className:"page-section",id:"contact"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row justify-content-center"},c.a.createElement("div",{className:"col-lg-8 text-center"},c.a.createElement("h2",{className:"mt-0"},"Let's Get In Touch!"),c.a.createElement("hr",{className:"divider my-4"}),c.a.createElement("p",{className:"text-muted mb-5"},"Join Our Team!"))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-lg-4 ml-auto text-center mb-5 mb-lg-0"},c.a.createElement("i",{className:"fas fa-phone fa-3x mb-3 text-muted"}),c.a.createElement("div",null,"+1 (00) 555-0000")),c.a.createElement("div",{className:"col-lg-4 mr-auto text-center"},c.a.createElement("i",{className:"fas fa-envelope fa-3x mb-3 text-muted"}),c.a.createElement("a",{class:"d-block",href:"sara-kuddah@hotmail.com"},"sara-kuddah@hotmail.com"))))))}}]),t}(c.a.Component),j=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).state={data:C},a}return Object(d.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("div",null,c.a.createElement(y,{className:"mainDiv"})),c.a.createElement("div",null,c.a.createElement(w,{data:this.state.data})))}}]),t}(c.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,a){}},[[26,1,2]]]);
//# sourceMappingURL=main.25aab2c3.chunk.js.map