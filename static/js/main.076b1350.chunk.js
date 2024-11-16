(this["webpackJsonpbank-of-react"]=this["webpackJsonpbank-of-react"]||[]).push([[0],{45:function(e,t,n){},74:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(37),s=n.n(r),i=(n(45),n(38)),o=n(28),u=n(5),j=n(10),b=n(11),d=n(12),l=n(13),O=n(25),h=n.n(O),p=n(4),m=n(2),x=n(0),f=function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(){return Object(j.a)(this,n),t.apply(this,arguments)}return Object(b.a)(n,[{key:"render",value:function(){return Object(x.jsxs)("div",{children:["Balance: ",this.props.accountBalance]})}}]),n}(c.Component),v=f,g=function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(){return Object(j.a)(this,n),t.apply(this,arguments)}return Object(b.a)(n,[{key:"render",value:function(){return Object(x.jsxs)("div",{children:[Object(x.jsx)("img",{src:"https://picsum.photos/200/200",alt:"bank"}),Object(x.jsx)("h1",{children:"Bank of React"}),Object(x.jsx)(p.b,{to:"/userProfile",children:"User Profile"}),Object(x.jsx)("br",{}),Object(x.jsx)(p.b,{to:"/login",children:"Login"}),Object(x.jsx)("br",{}),Object(x.jsx)(p.b,{to:"/credits",children:"Credits"}),Object(x.jsx)("br",{}),Object(x.jsx)(p.b,{to:"/debits",children:"Debits"}),Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),Object(x.jsx)(v,{accountBalance:this.props.accountBalance})]})}}]),n}(c.Component),S=g,C=function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(){return Object(j.a)(this,n),t.apply(this,arguments)}return Object(b.a)(n,[{key:"render",value:function(){return Object(x.jsxs)("div",{children:[Object(x.jsx)("h1",{children:"User Profile"}),Object(x.jsxs)("div",{children:["Username: ",this.props.userName]}),Object(x.jsxs)("div",{children:["Member Since: ",this.props.memberSince]}),Object(x.jsx)("br",{}),Object(x.jsx)(p.b,{to:"/",children:"Return to Home"})]})}}]),n}(c.Component),y=C,B=function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(e){var c;return Object(j.a)(this,n),(c=t.call(this,e)).handleChange=function(e){var t=Object(u.a)({},c.state.user);t.userName=e.target.value,c.setState({user:t})},c.handleSubmit=function(e){e.preventDefault(),c.props.mockLogIn(c.state.user),c.setState({redirect:!0})},c.state={user:{userName:c.props.user.userName,password:""},redirect:!1},c}return Object(b.a)(n,[{key:"render",value:function(){return this.state.redirect?Object(x.jsx)(m.a,{to:"/userProfile"}):Object(x.jsxs)("div",{children:[Object(x.jsx)("h1",{children:"Login"}),Object(x.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(x.jsxs)("div",{children:[Object(x.jsx)("label",{children:"User Name"}),Object(x.jsx)("input",{type:"text",name:"userName",defaultValue:this.props.user.userName,onChange:this.handleChange})]}),Object(x.jsxs)("div",{children:[Object(x.jsx)("label",{children:"Password"}),Object(x.jsx)("input",{type:"password",name:"password"})]}),Object(x.jsx)("button",{children:"Log In"})]}),Object(x.jsx)("br",{}),Object(x.jsx)(p.b,{to:"/",children:"Return to Home"})]})}}]),n}(c.Component),L=n(15),k=n(22),D=function(e){var t=Object(c.useState)({description:"",amount:0}),n=Object(k.a)(t,2),a=n[0],r=n[1],s=e.credits,i=function(e){var t=e.target,n=t.name,c=t.value;r(Object(u.a)(Object(u.a)({},a),{},Object(L.a)({},n,c)))};return Object(x.jsxs)("div",{children:[Object(x.jsx)("h1",{children:"Credits"}),s.map((function(e){var t=e.id,n=e.description,c=e.amount,a=e.date.slice(0,10);return Object(x.jsxs)("li",{children:[c," ",n," ",a]},t)})),Object(x.jsxs)("form",{onSubmit:function(t){!function(t){t.preventDefault();var n=a.description,c=a.amount;n&&c&&(e.addCredit(Object(u.a)(Object(u.a)({},a),{},{amount:parseFloat(c,10),date:(new Date).toISOString().split("T")[0]})),r({description:"",amount:0}))}(t)},children:[Object(x.jsx)("input",{type:"text",name:"description",value:a.description,onChange:i,required:!0}),Object(x.jsx)("input",{type:"number",name:"amount",value:a.amount,onChange:i,required:!0}),Object(x.jsx)("button",{type:"submit",children:"Add Credit"})]}),Object(x.jsx)("br",{}),Object(x.jsx)(p.b,{to:"/",children:"Return to Home"})]})},N=function(e){var t=Object(c.useState)({description:"",amount:0}),n=Object(k.a)(t,2),a=n[0],r=n[1],s=e.debits,i=function(e){var t=e.target,n=t.name,c=t.value;r(Object(u.a)(Object(u.a)({},a),{},Object(L.a)({},n,c)))};return Object(x.jsxs)("div",{children:[Object(x.jsx)("h1",{children:"Debits"}),s.map((function(e){var t=e.id,n=e.description,c=e.amount,a=e.date.slice(0,10);return Object(x.jsxs)("li",{children:[c," ",n," ",a]},t)})),Object(x.jsxs)("form",{onSubmit:function(t){!function(t){t.preventDefault();var n=a.description,c=a.amount;n&&c&&(e.addDebit(Object(u.a)(Object(u.a)({},a),{},{amount:parseFloat(c,10),date:(new Date).toISOString().split("T")[0]})),r({description:"",amount:0}))}(t)},children:[Object(x.jsx)("input",{type:"text",name:"description",value:a.description,onChange:i,required:!0}),Object(x.jsx)("input",{type:"number",name:"amount",value:a.amount,onChange:i,required:!0}),Object(x.jsx)("button",{type:"submit",children:"Add Debit"})]}),Object(x.jsx)("br",{}),Object(x.jsx)(p.b,{to:"/",children:"Return to Home"})]})},w=n(27),F=n.n(w),U=function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(j.a)(this,n),(e=t.call(this)).mockLogIn=function(t){var n=Object(u.a)({},e.state.currentUser);n.userName=t.userName,e.setState({currentUser:n}),e.componentDidMount()},e.addCredit=function(t){e.setState({creditList:[].concat(Object(o.a)(e.state.creditList),[t])}),e.setState({accountBalance:e.state.accountBalance+parseFloat(t.amount,10)})},e.addDebit=function(t){e.setState({debitList:[].concat(Object(o.a)(e.state.debitList),[t])}),e.setState({accountBalance:e.state.accountBalance-parseFloat(t.amount,10)})},e.state={accountBalance:0,creditList:[],debitList:[],currentUser:{userName:"Joe Smith",memberSince:"11/22/99"}},e}return Object(b.a)(n,[{key:"componentDidMount",value:function(){var e=Object(i.a)(h.a.mark((function e(){var t,n,c,a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F.a.get("https://johnnylaicode.github.io/api/credits.json");case 2:return t=e.sent,e.next=5,F.a.get("https://johnnylaicode.github.io/api/debits.json");case 5:n=e.sent,c=0,a=0,t&&t.data&&n&&n.data&&(c=t.data.reduce((function(e,t){return e+t.amount}),0),a=n.data.reduce((function(e,t){return e+t.amount}),0)),this.setState({creditList:t.data,debitList:n.data,accountBalance:parseFloat(c,10)-parseFloat(a,10)});case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return Object(x.jsx)(p.a,{basename:"/assignment-3-bank-of-react",children:Object(x.jsxs)("div",{children:[Object(x.jsx)(m.b,{exact:!0,path:"/",render:function(){return Object(x.jsx)(S,{accountBalance:e.state.accountBalance})}}),Object(x.jsx)(m.b,{exact:!0,path:"/userProfile",render:function(){return Object(x.jsx)(y,{userName:e.state.currentUser.userName,memberSince:e.state.currentUser.memberSince})}}),Object(x.jsx)(m.b,{exact:!0,path:"/login",render:function(){return Object(x.jsx)(B,{user:e.state.currentUser,mockLogIn:e.mockLogIn})}}),Object(x.jsx)(m.b,{exact:!0,path:"/credits",render:function(){return Object(x.jsx)(D,{addCredit:e.addCredit,credits:e.state.creditList,accountBalance:e.state.accountBalance})}}),Object(x.jsx)(m.b,{exact:!0,path:"/debits",render:function(){return Object(x.jsx)(N,{debits:e.state.debitList,addDebit:e.addDebit,accountBalance:e.state.accountBalance})}})]})})}}]),n}(c.Component),I=U,P=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,75)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))};s.a.render(Object(x.jsx)(a.a.StrictMode,{children:Object(x.jsx)(I,{})}),document.getElementById("root")),P()}},[[74,1,2]]]);
//# sourceMappingURL=main.076b1350.chunk.js.map