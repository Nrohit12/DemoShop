(this["webpackJsonpfirebase-auth-shop"]=this["webpackJsonpfirebase-auth-shop"]||[]).push([[0],{103:function(e,t,a){},106:function(e,t,a){},109:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(30),c=a.n(r),o=(a(86),a(10)),s=a(11),i=a(7),d=a(13),u=a(12),m=(a(87),a(42)),h=a.n(m),E=h.a.initializeApp({apiKey:"AIzaSyC86J8YagUXaZY7mI2U3kcW-X-NSAO3JQg",authDomain:"fir-d64d9.firebaseapp.com",databaseURL:"https://fir-d64d9.firebaseio.com",projectId:"fir-d64d9",storageBucket:"fir-d64d9.appspot.com",messagingSenderId:"39100794415",appId:"1:39100794415:web:073614c71b1daf4336e8da"}),p=new h.a.auth.GoogleAuthProvider;p.setCustomParameters({prompt:"select_account"});var f=E,v=a(17),y=a(16),g=a(114),b=a(71),k=a(115),w=a(116),C=a(72),S=(a(98),function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).loginWithGoogle=function(){n.setState({loading:!0});var e=new h.a.auth.GoogleAuthProvider;e.setCustomParameters({prompt:"select_account"}),f.auth().signInWithPopup(e).then((function(e){n.setState({loading:!1})})).catch((function(e){n.setState({loading:!1,error:e})}))},n.state={loading:!1,error:null},n.login=n.login.bind(Object(i.a)(n)),n}return Object(s.a)(a,[{key:"login",value:function(){var e=this;this.setState({loading:!0});var t=document.getElementById("email").value,a=document.getElementById("password").value;f.auth().signInWithEmailAndPassword(t,a).then((function(){e.setState({loading:!1,error:null})})).catch((function(t){e.setState({loading:!1,error:t})}))}},{key:"render",value:function(){return this.state.loading?l.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},l.a.createElement(g.a,{as:"span",animation:"border",size:"lg",role:"status","aria-hidden":"true",style:{width:"5rem",height:"5rem"}}),l.a.createElement("span",{className:"sr-only"},"Loading...")):l.a.createElement("div",null,l.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},l.a.createElement("table",null,l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"Email"),l.a.createElement("td",null,l.a.createElement("input",{id:"email",type:"email",placeholder:"Enter Email",className:"form-control"}))),l.a.createElement("tr",null,l.a.createElement("td",null,"Password"),l.a.createElement("td",null,l.a.createElement("input",{id:"password",type:"password",placeholder:"Enter Password",className:"form-control"}))),l.a.createElement("tr",null,l.a.createElement("td",{colSpan:"2"},l.a.createElement(b.a,{variant:"warning",onClick:this.login},"Login"))),l.a.createElement("tr",null,l.a.createElement("td",{colSpan:"2"},l.a.createElement(b.a,{onClick:this.loginWithGoogle,variant:"outline-light"},l.a.createElement("img",{src:"https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg",alt:"Google Login",width:"50px"}))))))),null!==this.state.error?l.a.createElement(k.a,null,l.a.createElement(w.a,null,l.a.createElement(C.a,null,l.a.createElement("p",{style:{color:"red"}},this.state.error.message)))):"")}}]),a}(n.Component));var I=function(){return l.a.createElement("div",{className:"loader"},l.a.createElement("lottie-player",{src:"https://assets7.lottiefiles.com/private_files/lf30_i63t10ze.json",background:"transparent",speed:"1",style:{width:"100px",height:"100px"},loop:!0,autoplay:!0}))},O=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={error:null,loading:!1},n.signin=n.signin.bind(Object(i.a)(n)),n}return Object(s.a)(a,[{key:"signin",value:function(){var e=this,t=document.getElementById("name").value,a=document.getElementById("email").value,n=document.getElementById("password").value,l=document.getElementById("repassword").value;if(this.setState({loading:!0}),n===l)f.auth().createUserWithEmailAndPassword(a,n).then((function(a){return e.setState({loading:!1}),console.log("Account created Successfully."),f.auth().currentUser.updateProfile({displayName:t})})).then((function(){console.log("Name updated.")})).catch((function(t){e.setState({loading:!1,error:t}),console.log(t)}));else{this.setState({loading:!1,error:{message:"Passwords are different."}})}}},{key:"render",value:function(){return this.state.loading?l.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},l.a.createElement(I,null)):l.a.createElement("div",null,l.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},l.a.createElement("table",null,l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"Name"),l.a.createElement("td",null,l.a.createElement("input",{id:"name",type:"text",placeholder:"Enter Name",className:"form-control"}))),l.a.createElement("tr",null,l.a.createElement("td",null,"Email"),l.a.createElement("td",null,l.a.createElement("input",{id:"email",type:"email",placeholder:"Enter Email",className:"form-control"}))),l.a.createElement("tr",null,l.a.createElement("td",null,"Password"),l.a.createElement("td",null,l.a.createElement("input",{id:"password",type:"password",placeholder:"Enter Password",className:"form-control"}))),l.a.createElement("tr",null,l.a.createElement("td",null,"Re-enter Password"),l.a.createElement("td",null,l.a.createElement("input",{id:"repassword",type:"password",placeholder:"Re-enter Password",className:"form-control"}))),l.a.createElement("tr",null,l.a.createElement("td",{colSpan:"2"},l.a.createElement(b.a,{onClick:this.signin,variant:"primary"},"SignUp"))),l.a.createElement("tr",null,l.a.createElement("td",{colSpan:"2"},l.a.createElement(v.b,{to:"/login"},"Sign Up with Google")))))),null!==this.state.error?l.a.createElement(k.a,null,l.a.createElement(w.a,null,l.a.createElement(C.a,null,l.a.createElement("p",{style:{color:"red"}},this.state.error.message)))):"")}}]),a}(n.Component);var j=function(){return l.a.createElement(v.a,null,l.a.createElement("div",null,l.a.createElement("h1",{style:{textAnchor:"unset"}},l.a.createElement(v.b,{to:"/login"},"Login")," | ",l.a.createElement(v.b,{to:"/signup"},"SignUp"))),l.a.createElement(y.d,null,l.a.createElement(y.b,{path:"/login",exact:!0,component:S}),l.a.createElement(y.b,{path:"/signup",exact:!0,component:O})))},A=a(122),N=a(117),D=a(66),x=a(121);a(103);var U=function(e){var t=f.auth().currentUser,a=t?t.displayName:"",n=t?t.providerData[0].photoURL:"";return l.a.createElement(A.a,{bg:"dark",variant:"dark",expand:"lg",fixed:"top"},l.a.createElement(v.b,{id:"links",to:"/"},l.a.createElement(A.a.Brand,null,"Demo Shop")),l.a.createElement(A.a.Toggle,{"aria-controls":"basic-navbar-nav"}),l.a.createElement(A.a.Collapse,{id:"basic-navbar-nav"},l.a.createElement(N.a,{className:"mr-auto"},l.a.createElement(v.b,{to:"/",className:"nav-link"},"Items"),l.a.createElement(v.b,{to:"/cart",className:"nav-link"},"Cart")),l.a.createElement(N.a,null,l.a.createElement(D.a,{src:n,width:"40px",roundedCircle:!0}),l.a.createElement(x.a,{title:a,id:"basic-nav-dropdown",drop:"left"},l.a.createElement(v.b,{to:"/orders",className:"navbar dropdown-item"},"Orders"),l.a.createElement(v.b,{to:"manageAddress",className:"navbar dropdown-item"},"Address"),l.a.createElement(x.a.Divider,null),l.a.createElement(b.a,{onClick:e.logout,className:"dropdown-item"},"Logout")))))},P=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"logout",value:function(){f.auth().signOut().then(f.auth().currentUser.reload()).catch((function(e){console.error("Error while logout",e)}))}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(U,{logout:this.logout,itemCountInCart:this.props.count}))}}]),a}(l.a.Component),L=a(119);var B=function(e){var t=e.modalData||{};return l.a.createElement(L.a,{show:e.show,onHide:e.handleClose,backdrop:"static",keyboard:!0,size:"lg",centered:!0},l.a.createElement(L.a.Header,{closeButton:!0},l.a.createElement(L.a.Title,null,t.name)),l.a.createElement(L.a.Body,null,l.a.createElement(k.a,null,l.a.createElement(w.a,null,l.a.createElement(C.a,{md:8},l.a.createElement("h2",null,"About"),l.a.createElement("p",null,t.description),l.a.createElement("h2",null,"Role"),l.a.createElement("p",null,t.role),l.a.createElement("h3",null,"\u20b9",t.price)),l.a.createElement(C.a,{md:4},l.a.createElement("img",{alt:t.name,src:t.img,width:"250px",height:"300px"}))))),l.a.createElement(L.a.Footer,null,l.a.createElement(b.a,{variant:"secondary",onClick:e.handleClose},"Close"),l.a.createElement(b.a,{variant:"primary",disabled:!e.isLoaded,onClick:e.handleCartAdd},e.isLoaded?"Add To Cart":l.a.createElement(l.a.Fragment,null,l.a.createElement(g.a,{as:"span",animation:"border",size:"sm",role:"status","aria-hidden":"true"}),l.a.createElement("span",{className:"sr-only"},"Hold on!! Loading your hero...")))))},M=a(118),_=a(124);var W=function(e){var t=null!=e.dataOfItem?e.dataOfItem.map((function(t,a){return l.a.createElement(M.a.Item,{action:!0,key:t.id,as:"li",onClick:function(){return e.handleItemClick(t)},href:"#".concat(t.id),variant:"info"},l.a.createElement(k.a,null,l.a.createElement(w.a,null,l.a.createElement(C.a,null,a+1),l.a.createElement(C.a,null,l.a.createElement(_.a,{width:"250px",height:"300px"},l.a.createElement(_.a.Image,{src:t.img}))),l.a.createElement(C.a,null,t.name),l.a.createElement(C.a,null,t.price),l.a.createElement(C.a,null,t.role),l.a.createElement(C.a,null,t.difficulty))))})):l.a.createElement(M.a.Item,null);return l.a.createElement(M.a,null,l.a.createElement(M.a.Item,null,l.a.createElement(k.a,null,l.a.createElement(w.a,null,l.a.createElement(C.a,null,"ID"),l.a.createElement(C.a,null,"Image"),l.a.createElement(C.a,null,"Name"),l.a.createElement(C.a,null,"Price"),l.a.createElement(C.a,null,"Role"),l.a.createElement(C.a,null,"Difficulty")))),t)},q=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={data:null,showModal:!1,modalData:null,isSuccessfullyAdded:!0},n.handleItemClick=n.handleItemClick.bind(Object(i.a)(n)),n.handleCloseModal=n.handleCloseModal.bind(Object(i.a)(n)),n.handleCartAdd=n.handleCartAdd.bind(Object(i.a)(n)),n}return Object(s.a)(a,[{key:"handleItemClick",value:function(e){this.setState({showModal:!0,modalData:e})}},{key:"handleCloseModal",value:function(){this.setState({showModal:!1})}},{key:"handleCartAdd",value:function(){var e=this;this.setState({isSuccessfullyAdded:!1});var t=f.auth().currentUser.uid,a=f.database().ref("shop").child("cart").child(t);a.once("value").then((function(t){var n=e.state.modalData;if(null!=t.val()){var l=t.val();if(l.some((function(e){return e.item.id===n.id}))){var r=l.map((function(e){return e.item.id===n.id&&(e.quantity=e.quantity+1),e}));a.set(r,(function(t){e.setState({isSuccessfullyAdded:!0})}))}else{var c={quantity:1,item:e.state.modalData,time:(new Date).toLocaleString()};l.push(c),a.set(l,(function(t){e.setState({isSuccessfullyAdded:!0})}))}}else{var o=[{quantity:1,item:e.state.modalData,time:(new Date).toLocaleString()}];a.set(o,(function(t){e.setState({isSuccessfullyAdded:!0})}))}})).catch((function(t){console.log(t),e.setState({isSuccessfullyAdded:!0})}))}},{key:"componentDidMount",value:function(){var e=this;f.database().ref("shop").child("products").on("value",(function(t){e.setState({data:t.val()})}))}},{key:"componentWillUnmount",value:function(){f.database().ref("shop").child("products").off()}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(W,{handleItemClick:this.handleItemClick,dataOfItem:this.state.data}),l.a.createElement(B,{show:this.state.showModal,isLoaded:this.state.isSuccessfullyAdded,handleClose:this.handleCloseModal,modalData:this.state.modalData,handleCartAdd:this.handleCartAdd}))}}]),a}(l.a.Component);a(106);var T=function(e){var t=e.dataOfItem.totalPrice,a=null!=e.dataOfItem.cartItem?e.dataOfItem.cartItem.map((function(t,a){return l.a.createElement(M.a.Item,{key:t.item.id,as:"li",href:"#".concat(t.id),variant:"info"},l.a.createElement(k.a,null,l.a.createElement(w.a,null,l.a.createElement(C.a,null,a+1),l.a.createElement(C.a,null,l.a.createElement(_.a,null,l.a.createElement(_.a.Image,{src:t.item.img,width:"100px"}))),l.a.createElement(C.a,null,t.item.name),l.a.createElement(C.a,null,t.item.price,"x",t.quantity," = ",t.item.price*t.quantity),l.a.createElement(C.a,null,l.a.createElement("div",{className:"qty mt-5"},l.a.createElement(b.a,{disabled:e.loading,variant:"link",onClick:function(){return e.clicks.handleDecrease(a)}},l.a.createElement("span",{className:"minus bg-dark"},"-"))," ",l.a.createElement("input",{type:"number",className:"count",name:"qty",value:t.quantity,readOnly:!0}),l.a.createElement(b.a,{disabled:e.loading,variant:"link",onClick:function(){return e.clicks.handleIncrease(a)}},l.a.createElement("span",{className:"plus bg-dark"},"+")))),l.a.createElement(C.a,null,l.a.createElement(b.a,{disabled:e.loading,onClick:function(){return e.clicks.handleDeleteItem(a)},variant:"outline-danger"},"Delete")))))})):l.a.createElement(M.a.Item,null);return l.a.createElement("div",null,l.a.createElement(M.a,null,l.a.createElement(M.a.Item,null,l.a.createElement(k.a,null,l.a.createElement(w.a,null,l.a.createElement(C.a,null,"Se. No."),l.a.createElement(C.a,null,"Image"),l.a.createElement(C.a,null,"Name"),l.a.createElement(C.a,null,"Price"),l.a.createElement(C.a,null,"Quantity"),l.a.createElement(C.a,null,"Delete")))),a,l.a.createElement(M.a.Item,null,l.a.createElement(k.a,null,l.a.createElement(w.a,null,l.a.createElement(C.a,null),l.a.createElement(C.a,null),l.a.createElement(C.a,null,"Total"),l.a.createElement(C.a,null,t),l.a.createElement(C.a,null),l.a.createElement(C.a,null))))),l.a.createElement("div",{className:"display-2"},l.a.createElement(v.b,{to:"/payment",className:"btn btn-primary m-3 "},l.a.createElement("h2",null,"Proceed to Pay"))))},Q=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={cartItem:null,totalPrice:null,loading:!1,error:null},n.handleDeleteItem=n.handleDeleteItem.bind(Object(i.a)(n)),n.handleIncQty=n.handleIncQty.bind(Object(i.a)(n)),n.handleDecQty=n.handleDecQty.bind(Object(i.a)(n)),n}return Object(s.a)(a,[{key:"getCartItem",value:function(){var e=this,t=f.auth().currentUser.uid;f.database().ref().child("shop/cart/"+t).on("value",(function(t){var a=t.val(),n=0;null!=a&&(a.forEach((function(e){return n+=e.quantity*e.item.price})),e.setState({cartItem:a,totalPrice:n}))}))}},{key:"componentDidMount",value:function(){this.getCartItem()}},{key:"componentWillUnmount",value:function(){var e=f.auth().currentUser;null!=e&&f.database().ref().child("shop/cart/"+e.uid).off()}},{key:"handleItemClick",value:function(e){console.log(e)}},{key:"handleIncQty",value:function(e){var t=this;this.setState({loading:!0});var a=f.auth().currentUser.uid,n=f.database().ref().child("shop/cart/"+a),l=this.state.cartItem;l[e].quantity<4?(l[e].quantity+=1,n.update(l,(function(){return t.setState({loading:!1})})).catch((function(e){t.setState({loading:!1,error:e})}))):console.log("Cannot exceed more than 4.")}},{key:"handleDecQty",value:function(e){var t=this;this.setState({loading:!0});var a=f.auth().currentUser.uid,n=f.database().ref().child("shop/cart/"+a),l=this.state.cartItem;l[e].quantity-1>0?(l[e].quantity-=1,n.update(l,(function(){return t.setState({loading:!1})})).catch((function(e){t.setState({loading:!1,error:e})}))):this.handleDeleteItem(e)}},{key:"handleDeleteItem",value:function(e){var t=this;this.setState({loading:!0});var a=this.state.cartItem;a.splice(e,1);var n=f.auth().currentUser.uid;f.database().ref().child("shop/cart/"+n).set(a,(function(){return t.setState({loading:!1})})).catch((function(e){t.setState({loading:!1,error:e})}))}},{key:"render",value:function(){var e={handleItemClick:this.handleItemClick,handleDeleteItem:this.handleDeleteItem,handleIncrease:this.handleIncQty,handleDecrease:this.handleDecQty};return null==this.state.cartItem||0===this.state.cartItem.length?l.a.createElement("div",null,l.a.createElement(k.a,null,l.a.createElement("img",{src:"https://images.unsplash.com/photo-1593100550919-da28468d9899",alt:"Google Login",width:"500px"}),l.a.createElement(w.a,{className:"justify-content-md-center"},l.a.createElement("h2",null,"Oops!! Your cart is empty please add your favorite heroes.. ")))):l.a.createElement(T,{dataOfItem:this.state,clicks:e})}}]),a}(n.Component),G=a(120),z=a(67),H=a.n(z),R=a(77),F=a(123),K=a(125);function J(){return(J=Object(R.a)(H.a.mark((function e(t){var a,n,l,r;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=f.auth().currentUser.uid,n=f.database().ref().child("shop/address/"+a),e.next=4,n.once("value");case 4:null!==(l=e.sent).val()?((r=l.val()).push(t),n.set(r)):n.set([t]);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var Y=function(e){return l.a.createElement(F.a,null,l.a.createElement(K.a,null,l.a.createElement(K.a.Header,null,l.a.createElement(F.a.Toggle,{as:b.a,variant:"Button",eventKey:"0"},"Add new Address")),l.a.createElement(F.a.Collapse,{eventKey:"0"},l.a.createElement(K.a.Body,null,l.a.createElement(k.a,null,l.a.createElement(w.a,null,l.a.createElement(C.a,null,l.a.createElement(G.a.Control,{id:"newAdd_pincode",type:"number",placeholder:"Pincode"})),l.a.createElement(C.a,null,l.a.createElement(G.a.Control,{id:"newAdd_state",type:"text",placeholder:"State"}))),l.a.createElement(w.a,{className:"pt-3 pb-3"},l.a.createElement(C.a,null,l.a.createElement(G.a.Control,{id:"newAdd_full",type:"text",placeholder:"Enter Full Address"}))),l.a.createElement(b.a,{variant:"primary",onClick:function(){return function(){var e=document.getElementById("newAdd_pincode").value,t=document.getElementById("newAdd_state").value,a=document.getElementById("newAdd_full").value;!function(e){J.apply(this,arguments)}({state:t,pincode:e,fullAddress:a})}()},className:"mt-3"},"Submit"))))))},X=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={},n}return Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement(Y,null)}}]),a}(n.Component);var V=function(e){if(null===e.data.addresses)return l.a.createElement("div",null,"No Address Found");var t=e.data.addresses.map((function(e,t){return l.a.createElement("option",{key:t,value:e.fullAddress+" "+e.state+" "+e.pincode},e.fullAddress+" "+e.state+" "+e.pincode)}));return l.a.createElement("div",null,l.a.createElement(G.a.Group,{as:C.a,controlId:"formGridState"},l.a.createElement(G.a.Label,null,l.a.createElement("h1",null,"Choose Address")),l.a.createElement(G.a.Control,{as:"select",onChange:function(t){return e.clicks.handleCheck(t.target.value)}},l.a.createElement("option",{value:null,label:"Select Address"}),t)),l.a.createElement(X,null))},Z=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={addresses:null},n.handleCheck=n.handleCheck.bind(Object(i.a)(n)),n}return Object(s.a)(a,[{key:"getAddresses",value:function(){var e=this,t=f.auth().currentUser.uid;f.database().ref().child("shop/address/"+t).on("value",(function(t){var a=t.val();null!=a&&e.setState({addresses:a})}))}},{key:"handleCheck",value:function(e){this.props.selectedData(e)}},{key:"componentDidMount",value:function(){this.getAddresses()}},{key:"componentWillUnmount",value:function(){var e=f.auth().currentUser;null!=e&&f.database().ref().child("shop/address/"+e.uid).off()}},{key:"render",value:function(){return l.a.createElement(V,{data:this.state,clicks:{handleCheck:this.handleCheck}})}}]),a}(n.Component);var $=function(e){var t=l.a.createElement("div",null),a=e.cart.cartItem;return null!=a&&(t=a.map((function(e,t){return l.a.createElement(M.a.Item,{key:t},l.a.createElement(w.a,null,l.a.createElement(C.a,null,e.item.name),l.a.createElement(C.a,null," ",e.quantity," "),l.a.createElement(C.a,null,"\u20b9 ",e.item.price*e.quantity," ")))}))),l.a.createElement("div",null,l.a.createElement(k.a,null,l.a.createElement(w.a,null,l.a.createElement(C.a,null,l.a.createElement(M.a,null,l.a.createElement(M.a.Item,null,l.a.createElement(Z,{selectedData:function(t){return e.clicks.handleSelectedAddr(t)}})),l.a.createElement(M.a.Item,null,l.a.createElement(w.a,null,l.a.createElement(C.a,null,l.a.createElement("b",null,"Name")),l.a.createElement(C.a,null,l.a.createElement("b",null,"Quantity")),l.a.createElement(C.a,null,l.a.createElement("b",null,"Price")))),t,l.a.createElement(M.a.Item,null,l.a.createElement(w.a,null,l.a.createElement(C.a,null),l.a.createElement(C.a,null,l.a.createElement("b",{style:{color:"red"}},"Total")),l.a.createElement(C.a,null,l.a.createElement("b",{style:{color:"red"}},"\u20b9 ",e.cart.totalPrice)))))),l.a.createElement(C.a,null,l.a.createElement(b.a,{onClick:e.clicks.handlePayNow,size:"lg",block:!0,variant:"outline-success",class:"btn btn-primary"},l.a.createElement("h1",null,"Order Now (\u20b9 ",e.cart.totalPrice,")"))))))},ee=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={cartItem:null,totalPrice:null,selectedAddress:null},n.payNow=n.payNow.bind(Object(i.a)(n)),n.handleSelectedAddr=n.handleSelectedAddr.bind(Object(i.a)(n)),n}return Object(s.a)(a,[{key:"payNow",value:function(){var e=this;if(null===this.state.selectedAddress||""===this.state.selectedAddress)this.setState({selectedAddress:null},(function(){return alert("Choose Address first.")}));else{var t={id:(new Date).getTime(),details:this.state.cartItem,time:(new Date).toLocaleString(),address:this.state.selectedAddress},a=f.database().ref(),n=f.auth().currentUser.uid,l=a.child("shop/cart/"+n),r=a.child("shop/order/"+n);r.once("value").then((function(a){if(null!==a.val()){var n=a.val();n.push(t),r.set(n).then((function(){l.remove(),e.props.history.push("/order-success")}))}else r.set([t]).then((function(){l.remove(),e.props.history.push("/order-success")}))}))}}},{key:"handleSelectedAddr",value:function(e){this.setState({selectedAddress:e})}},{key:"componentDidMount",value:function(){var e=this,t=f.auth().currentUser.uid;f.database().ref().child("shop/cart/"+t).on("value",(function(t){var a=t.val(),n=0;null!=a&&(a.forEach((function(e){return n+=e.quantity*e.item.price})),e.setState({cartItem:a,totalPrice:n}))}))}},{key:"render",value:function(){return l.a.createElement($,{cart:this.state,clicks:{handlePayNow:this.payNow,handleSelectedAddr:this.handleSelectedAddr}})}}]),a}(n.Component);var te=function(e){return null===e.address.data||!1===e.address.show?l.a.createElement("div",null):l.a.createElement(L.a,{show:e.address.show,onHide:e.clicks.handleClose,backdrop:"static",keyboard:!0,size:"lg",centered:!0},l.a.createElement(L.a.Header,{closeButton:!0},l.a.createElement(L.a.Title,null,"Edit Details")),l.a.createElement(L.a.Body,null,l.a.createElement(k.a,null,l.a.createElement(w.a,null,l.a.createElement(C.a,null,l.a.createElement(G.a.Control,{id:"modal_pincode",type:"number",placeholder:e.address.data.pincode})),l.a.createElement(C.a,null,l.a.createElement(G.a.Control,{id:"modal_state",type:"text",placeholder:e.address.data.state}))),l.a.createElement(w.a,{className:"pt-3 pb-3"},l.a.createElement(C.a,null,l.a.createElement(G.a.Control,{id:"modal_full",type:"text",placeholder:e.address.data.fullAddress}))))),l.a.createElement(L.a.Footer,null,l.a.createElement(b.a,{variant:"secondary",onClick:e.clicks.handleClose},"Close"),l.a.createElement(b.a,{variant:"warning",onClick:function(){var t=document.getElementById("modal_pincode").value||document.getElementById("modal_pincode").placeholder,a={state:document.getElementById("modal_state").value||document.getElementById("modal_state").placeholder,pincode:t,fullAddress:document.getElementById("modal_full").value||document.getElementById("modal_full").placeholder};e.clicks.handleEdit(a,e.address.index)}},"Edit")))},ae=a(76);var ne=function(e){var t=(null!==e.data.addresses?e.data.addresses:[]).map((function(t,a){return l.a.createElement(ae.a,{key:a},l.a.createElement(w.a,null,l.a.createElement(C.a,null,l.a.createElement("p",{className:"display-1"},a+1)),l.a.createElement(C.a,null,l.a.createElement("p",null,t.fullAddress),l.a.createElement("p",null," ",t.state," "),l.a.createElement("p",null," ",t.pincode," "))),l.a.createElement(w.a,{className:"justify-content-around"},l.a.createElement(C.a,null,l.a.createElement(b.a,{variant:"primary",onClick:function(){return e.clicks.handleShowModal(a)}},"Edit")),l.a.createElement(C.a,null,l.a.createElement(b.a,{onClick:function(){return e.clicks.handleDelete(a)},variant:"danger"},"Delete"))))}));return l.a.createElement("div",null,l.a.createElement(X,null),l.a.createElement(M.a,{className:"mt-4 mb-4"},t))},le=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={addresses:null,modal:{data:null,show:!1,index:0}},n.getAddresses=n.getAddresses.bind(Object(i.a)(n)),n.handleDelete=n.handleDelete.bind(Object(i.a)(n)),n.handleEdit=n.handleEdit.bind(Object(i.a)(n)),n.handleCloseModal=n.handleCloseModal.bind(Object(i.a)(n)),n.handleShowModal=n.handleShowModal.bind(Object(i.a)(n)),n}return Object(s.a)(a,[{key:"getAddresses",value:function(){var e=this,t=f.auth().currentUser.uid;f.database().ref().child("shop/address/"+t).on("value",(function(t){var a=t.val();null!=a?e.setState({addresses:a,modal:{data:a[0]}}):e.setState({})}))}},{key:"handleDelete",value:function(e){var t=this.state.addresses;t.splice(e,1);var a=f.auth().currentUser.uid;f.database().ref().child("shop/address/"+a).set(t)}},{key:"handleEdit",value:function(e,t){var a=this,n=this.state.addresses;n[t]=e;var l=f.auth().currentUser.uid;f.database().ref().child("shop/address/"+l).set(n).then((function(){return a.setState({modal:{show:!1}})}))}},{key:"handleShowModal",value:function(e){var t=this.state;t.modal.show=!0,t.modal.index=e,t.modal.data=this.state.addresses[e],this.setState(t)}},{key:"handleCloseModal",value:function(){var e=this.state;e.modal.show=!1,this.setState(e)}},{key:"componentDidMount",value:function(){this.getAddresses()}},{key:"componentWillUnmount",value:function(){var e=f.auth().currentUser;null!=e&&f.database().ref().child("shop/address/"+e.uid).off()}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(w.a,{className:"justify-content-center"},l.a.createElement(ne,{data:this.state,clicks:{handleDelete:this.handleDelete,handleShowModal:this.handleShowModal}})),l.a.createElement(te,{address:this.state.modal,clicks:{handleEdit:this.handleEdit,handleClose:this.handleCloseModal}}))}}]),a}(n.Component);var re=function(){return l.a.createElement("div",null,l.a.createElement("h1",null,"Hola! Your order has been placed and will reach to you soon."),l.a.createElement(v.b,{to:"/orders",className:"button btn btn-primary"},"View Orders"))};var ce=function(e){var t=e.data?e.data.map((function(e,t){return l.a.createElement(K.a,{key:t},l.a.createElement(K.a.Header,null,l.a.createElement(w.a,null,l.a.createElement(C.a,null,e.id),l.a.createElement(C.a,null,e.time),l.a.createElement(C.a,null,e.address),l.a.createElement(C.a,null,l.a.createElement(F.a.Toggle,{as:b.a,variant:"link",eventKey:""+t},"Detail")))),l.a.createElement(F.a.Collapse,{eventKey:""+t},l.a.createElement(K.a.Body,null,l.a.createElement(M.a,null,l.a.createElement(ae.a,null,l.a.createElement(w.a,null,l.a.createElement(C.a,null,"Name"),l.a.createElement(C.a,null,"Quantity"),l.a.createElement(C.a,null,"Price"))),e.details.map((function(e,t){return l.a.createElement(ae.a,{key:t},l.a.createElement(w.a,null,l.a.createElement(C.a,null,e.item.name),l.a.createElement(C.a,null,e.quantity),l.a.createElement(C.a,null,e.item.price)))}))))))})):null;return l.a.createElement(F.a,null,l.a.createElement(K.a,null,l.a.createElement(K.a.Header,null,l.a.createElement(w.a,null,l.a.createElement(C.a,null,"Id"),l.a.createElement(C.a,null,"Time"),l.a.createElement(C.a,null,"Address"),l.a.createElement(C.a,null)))),t)},oe=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={orders:null,loading:!0},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=f.auth().currentUser.uid;f.database().ref().child("shop/order/"+t).on("value",(function(t){null!==t.val()?e.setState({loading:!1,orders:t.val()}):e.setState({loading:!1,orders:null})}))}},{key:"render",value:function(){return this.state.loading?l.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},l.a.createElement(g.a,{as:"span",animation:"border",size:"lg",role:"status","aria-hidden":"true",style:{width:"5rem",height:"5rem"}}),l.a.createElement("span",{className:"sr-only"},"Hey there! Wait for a moment.")):null===this.state.orders&&void 0===this.state.orders?l.a.createElement("h1",null,"No Orders placed."):l.a.createElement(ce,{data:this.state.orders})}}]),a}(n.Component),se=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement(v.a,null,l.a.createElement(P,null),l.a.createElement("div",{style:{marginTop:"60px"}}),l.a.createElement(y.d,null,l.a.createElement(y.b,{path:"/",component:q,exact:!0}),l.a.createElement(y.b,{path:"/cart",component:Q,exact:!0}),l.a.createElement(y.b,{path:"/manageAddress",component:le,exact:!0}),l.a.createElement(y.b,{path:"/payment",component:ee,exact:!0}),l.a.createElement(y.b,{path:"/order-success",component:re,exact:!0}),l.a.createElement(y.b,{path:"/orders",component:oe,exact:!0})))}}]),a}(l.a.Component),ie=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={user:null,isLoading:!0},n.authListener=n.authListener.bind(Object(i.a)(n)),n}return Object(s.a)(a,[{key:"authListener",value:function(){var e=this;f.auth().onAuthStateChanged((function(t){t?e.setState({user:t,isLoading:!1}):e.setState({user:null,isLoading:!1})}))}},{key:"componentDidMount",value:function(){this.authListener()}},{key:"render",value:function(){return this.state.isLoading?l.a.createElement("div",{className:"App mt-5"},l.a.createElement(g.a,{as:"span",animation:"border",size:"lg",role:"status","aria-hidden":"true",style:{width:"15rem",height:"15rem"}}),l.a.createElement("span",{className:"sr-only"},"Loading...")):l.a.createElement("div",{className:"App"},l.a.createElement(v.a,null,this.state.user?l.a.createElement(y.a,{to:"/"}):l.a.createElement(y.a,{to:"/login"}),l.a.createElement(y.d,null,l.a.createElement(y.b,{path:"/",exact:!0,component:se}),l.a.createElement(y.b,{path:"/login",component:j}))))}}]),a}(n.Component),de=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ue(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}a(108);c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(ie,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/DemoShop",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/DemoShop","/service-worker.js");de?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):ue(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):ue(t,e)}))}}()},81:function(e,t,a){e.exports=a(109)},86:function(e,t,a){},87:function(e,t,a){},98:function(e,t,a){}},[[81,1,2]]]);
//# sourceMappingURL=main.71a6520b.chunk.js.map