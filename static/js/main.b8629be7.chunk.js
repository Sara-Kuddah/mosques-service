(this["webpackJsonpmosques-service"]=this["webpackJsonpmosques-service"]||[]).push([[0],{24:function(e,t,n){e.exports=n(62)},29:function(e,t,n){},62:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),l=n(10),c=n.n(l),i=(n(29),n(1)),s=n(2),r=n(4),m=n(3),d=n(5),h=(n(7),n(12)),u=(n(14),n(11)),p={width:"40%",height:"40%",borderStyle:"solid",float:"right",maxWidth:"40%",marginLeft:"20%"},g=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(r.a)(this,Object(m.a)(t).call(this,e))).onMarkerClick=function(e,t,a){return n.setState({selectedPlace:e,activeMarker:t,showingInfoWindow:!0})},n.onClose=function(e){n.state.showingInfoWindow&&n.setState({showingInfoWindow:!1,activeMarker:null})},n.state={showingInfoWindow:!1,activeMarker:{},selectedPlace:{}},n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.name;return o.a.createElement("div",null,o.a.createElement(u.Map,{google:this.props.google,zoom:20,style:p,initialCenter:{lat:this.props.lat,lng:this.props.lng}},o.a.createElement(u.Marker,{onClick:this.onMarkerClick,name:e,url:"https://www.google.com/maps/dir//24.657433,46.670652/@24.6574342,46.6701048,19z"}),o.a.createElement(u.InfoWindow,{marker:this.state.activeMarker,visible:this.state.showingInfoWindow,onClose:this.onClose},o.a.createElement("div",null,o.a.createElement("h4",null,this.state.selectedPlace.name)))))}}]),t}(o.a.Component),f=Object(u.GoogleApiWrapper)({})(g),k=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(r.a)(this,Object(m.a)(t).call(this,e))).onTextBoxChange=function(e){console.log("comment added ",e.target.value),n.setState({newComment:e.target.value})},n.addComment=function(e){e.preventDefault(),console.log("add comment !"),n.setState({comment:n.state.newComment,newComment:" ",needToEdit:!1})},n.handleCheck=function(){console.log("hi-1"),n.setState({needToEdit:!0})},n.fun=function(){if(console.log("hi0"),n.state.needToEdit)return console.log("hi"),o.a.createElement("li",null,o.a.createElement("input",{type:"text",placeholder:"Type your comment Here :)",value:n.state.newComment,onChange:n.onTextBoxChange})," ")},n.isThereAnySellctedToDelete=function(){n.props.deleteChecked&&(console.log(n.state.checked),n.state.checked&&(n.setState({checked:!1}),n.props.deleteItem(n.props.name)))},n.state={comment:n.props.comment,newComment:"test add new comment",needToEdit:!1},n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("li",null,this.state.comment,this.fun(),o.a.createElement("button",{onClick:this.addComment},"done"),o.a.createElement("button",{onClick:this.handleCheck},"Edit")))}}]),t}(o.a.Component),C=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(r.a)(this,Object(m.a)(t).call(this,e))).addComment=function(e){e.preventDefault(),console.log("add comment !"),n.setState({commentList:[].concat(Object(h.a)(n.state.commentList),[n.state.newComment]),newComment:" "})},n.onTextBoxChange=function(e){console.log("comment added ",e.target.value),n.setState({newComment:e.target.value})},n.state={commentList:n.props.comment,newComment:"test add new comment"},n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state.commentList.map((function(e,t){return o.a.createElement(k,{key:t,comment:e})}));return o.a.createElement("div",null,o.a.createElement("h1",null," ",this.props.name," "),o.a.createElement("ul",null,e),o.a.createElement("form",null,o.a.createElement("input",{type:"text",placeholder:"Type your comment Here :)",value:this.state.newComment,onChange:this.onTextBoxChange}),o.a.createElement("button",{onClick:this.addComment},"add comment")),o.a.createElement("a",{href:this.props.url,target:"blank"},"Visit the place using Google Map"))}}]),t}(o.a.Component),y=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(r.a)(this,Object(m.a)(t).call(this,e))).isThereAnySellctedToDelete=function(){console.log("0"),n.state.checked&&(console.log("1"),n.props.addToDeleteItem(n.props.name),console.log("2"),n.setState({checked:!1}))},n.handleCheck=function(){return n.setState({checked:!n.state.checked})},n.state={checked:!1},n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return this.state.checked?"Checked":"Un-checked",this.isThereAnySellctedToDelete(),o.a.createElement("div",null,o.a.createElement("input",{type:"checkbox",onChange:this.handleCheck,defaultChecked:this.state.checked}))}}]),t}(o.a.Component),v=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(r.a)(this,Object(m.a)(t).call(this,e))).isThereAnySellctedToDelete=function(){n.props.deleteChecked&&(n.props.deleteItem(n.props.elemint.name),console.log("hope done"))},n.state={checked:n.props.checked},n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement("div",{className:"block"},o.a.createElement(y,{addToDeleteItem:this.props.addToDeleteItem,deleteChecked:this.props.deleteChecked,name:this.props.elemint.name,handleCheck:this.handleCheck}),o.a.createElement("div",{className:"blockElemM"},o.a.createElement(f,{name:this.props.elemint.name,lat:this.props.elemint.geometry.location.lat,lng:this.props.elemint.geometry.location.lng})),o.a.createElement("div",{className:"blockElemT"},o.a.createElement("button",{onClick:function(){return e.props.deleteItem(e.props.elemint.name)}},"Delete This Item"),o.a.createElement(C,{name:this.props.elemint.name,comment:this.props.elemint.comment,url:this.props.elemint.url}))))}}]),t}(o.a.Component),b=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(r.a)(this,Object(m.a)(t).call(this,e))).deleteItem=function(e){var t=n.state.data.filter((function(t){return t.name!==e}));console.log("list after delete",t),n.setState({data:t,deleteChecked:!1})},n.addToDeleteItem=function(e){console.log("name",e),console.log("this.state.checedName",n.state.checedName),n.setState({checedName:[].concat(Object(h.a)(n.state.checedName),[e])}),console.log("this.state.checedName after",n.state.checedName)},n.deleteArrayItem=function(){var e=n.state.data.filter((function(e){return!n.state.checedName.includes(e.name)}));console.log("list after delete",e),console.log("list after delete",n.state.checedName),n.setState({data:e,deleteChecked:!1})},n.deleteAllItem=function(){n.setState({data:[]})},n.handleCheck=function(){n.setState({deleteChecked:!0}),console.log(n.state.deleteChecked)},n.state={data:n.props.data,deleteChecked:!1,checedName:[]},n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.state.data.map((function(t,n){return o.a.createElement("div",null,o.a.createElement(v,{key:n,elemint:t,addToDeleteItem:e.addToDeleteItem,deleteItem:e.deleteItem,deleteChecked:e.state.deleteChecked}))}));return console.log(this.state.deleteChecked),o.a.createElement("div",null,o.a.createElement("button",{onClick:this.deleteAllItem},"Delete All Items"),o.a.createElement("button",{onClick:this.deleteArrayItem},"Delete Selcted Items"),t)}}]),t}(o.a.Component),E=[{name:"Juwaie Mosque",geometry:{location:{lat:24.657438,lng:46.670652}},url:"https://www.google.com/maps/dir//24.657433,46.670652/@24.6574342,46.6701048,19z",comment:["1 Lorem Ipsum is simply dummy text of the printing and typesetting industry.","2 Lorem Ipsum is simply dummy text of the printing and typesetting industry."]},{name:"Khaled Alfaisal Mosque",geometry:{location:{lat:24.666326,lng:46.681005}},url:"https://www.google.com/maps/dir//24.666327,46.681002/@24.6663294,46.6799021,18z?hl=en",comment:["1 Lorem Ipsum is simply dummy text of the printing and typesetting industry.","2 Lorem Ipsum is simply dummy text of the printing and typesetting industry."]},{name:"Masjid Al-Jawhara Sudairy",geometry:{location:{lat:24.65945,lng:46.671776}},url:"https://www.google.com/maps/dir//24.65945,46.671776/@24.6594512,46.6712288,19z?hl=en",comment:["1 Lorem Ipsum is simply dummy text of the printing and typesetting industry.","2 Lorem Ipsum is simply dummy text of the printing and typesetting industry."]}],w=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(r.a)(this,Object(m.a)(t).call(this,e))).state={data:E},n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("div",null,o.a.createElement("hi",null,"\u0647\u0644\u0627 \u0648 \u0627\u0644\u0644\u0647")),o.a.createElement("div",null,o.a.createElement(b,{data:this.state.data})))}}]),t}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,n){}},[[24,1,2]]]);
//# sourceMappingURL=main.b8629be7.chunk.js.map