(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{320:function(e,a,n){"use strict";n.r(a);var t=n(3),r=n(4),l=n(6),o=n(5),i=n(7),m=n(0),s=n.n(m),c=(n(2),navigator.userAgent||navigator.vendor||window.opera);function isIOS(){return!(!/iPad|iPhone|iPod/.test(c)||window.MSStream)}function isAndroid(){return/android/i.test(c)}function unityJSON(e,a){if(console.log("in unity JSON",e,a),window[e]){var n=JSON.stringify(a);isAndroid()||isIOS()?function sendMessageToUnity(e){isIOS()?(alert("isIOS"),window.appendIframeWithURL&&window.appendIframeWithURL("inappbrowserbridge://"+e)):isAndroid()&&(alert("isAndroid"),window.UnityInAppBrowser&&window.UnityInAppBrowser.sendMessageFromJS(e))}("".concat(e,', ["').concat(a,'"]')):window[e](n,"".concat(e,', ["').concat(a,'"]'))}}var d=function(e){function Login(e){var a;return Object(t.a)(this,Login),(a=Object(l.a)(this,Object(o.a)(Login).call(this,e))).state={login:!0,email:"",phone:"",password:"",passwordA:"",name:""},a._userLogin=function(){unityJSON("userLogin",{name:a.state.name,type:0})},a.emailRef=s.a.createRef(),a}return Object(i.a)(Login,e),Object(r.a)(Login,[{key:"componentDidMount",value:function componentDidMount(){}},{key:"render",value:function render(){var e=this,a=this.state,n=a.login,t=a.phone,r=a.email,l=a.password,o=a.passwordA,i=a.name;return s.a.createElement("div",null,s.a.createElement("div",null,s.a.createElement("div",{className:"landing"},s.a.createElement("div",{className:"landing-header"},s.a.createElement("div",{className:"landing-header__operator"},s.a.createElement("div",{className:"landing-header__operator"},s.a.createElement("img",{className:"landing-header__operator-min",src:"http://www.wulihub.com.cn/go/Qxa7kJ/images/\u8be6\u60c51/u21.png"})),s.a.createElement("div",{className:"landing-header__operator"},s.a.createElement("img",{className:"landing-header__operator-x",src:"http://www.wulihub.com.cn/go/Qxa7kJ/images/\u8be6\u60c51/u20.png"})))),s.a.createElement("div",{className:"landing-logo"},s.a.createElement("img",{className:"landing-logo_imgT",src:"http://www.wulihub.com.cn/go/Qxa7kJ/images/\u8d26\u53f7\u767b\u5f55/u464.svg"}),s.a.createElement("div",{className:"landing-logo_name"},s.a.createElement("div",{className:"landing-logo_name--project"},"PROJECT"),s.a.createElement("div",{className:"landing-logo_name--avatar"},"AVATAR"))),s.a.createElement("form",{action:"#"},s.a.createElement("div",{className:"landing-form form"},s.a.createElement("div",{className:"form__group"},s.a.createElement("input",{type:"text",className:"form__input",placeholder:"\u8bf7\u8f93\u5165\u7528\u6237\u540d",value:i,onChange:function onChange(a){return e.setState({name:a.target.value})},id:"name",required:!0}),s.a.createElement("label",{htmlFor:"name",className:"form__label"},"\u8bf7\u8f93\u5165\u7528\u6237\u540d")),s.a.createElement("div",{className:"form__group"},s.a.createElement("input",{type:"email",className:"form__input",placeholder:"\u8bf7\u8f93\u5165\u90ae\u7bb1",pattern:"/^[a-zA-Z0-9.!#$%&\u2019*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*$/",value:r,onChange:function onChange(a){return e.setState({email:a.target.value})},ref:this.emailRef,id:"email",required:!0}),s.a.createElement("label",{htmlFor:"email",className:"form__label"},"\u8bf7\u8f93\u5165\u90ae\u7bb1")),!n&&s.a.createElement("div",{className:"form__group"},s.a.createElement("input",{type:"text",className:"form__input",placeholder:"\u8bf7\u8f93\u5165\u624b\u673a",value:t,onChange:function onChange(a){return e.setState({phone:a.target.value})},id:"phone",required:!0}),s.a.createElement("label",{htmlFor:"phone",className:"form__label"},"\u8bf7\u8f93\u5165\u624b\u673a")),s.a.createElement("div",{className:"form__group"},s.a.createElement("input",{type:"password",className:"form__input",placeholder:"\u8bf7\u8f93\u5165\u5bc6\u7801",value:l,onChange:function onChange(a){return e.setState({password:a.target.value})},id:"password",required:!0}),s.a.createElement("label",{htmlFor:"password",className:"form__label"},"\u8bf7\u8f93\u5165\u5bc6\u7801")),!n&&s.a.createElement("div",{className:"form__group"},s.a.createElement("input",{type:"password",className:"form__input",placeholder:"\u8bf7\u518d\u6b21\u8f93\u5165\u5bc6\u7801",value:o,onChange:function onChange(a){return e.setState({passwordA:a.target.value})},id:"passwordA",required:!0}),s.a.createElement("label",{htmlFor:"passwordA",className:"form__label"},"\u8bf7\u518d\u6b21\u8f93\u5165\u5bc6\u7801")),s.a.createElement("div",{className:"form__group"},s.a.createElement("div",{className:"form__text-group"},s.a.createElement("div",{className:"form__sms-login"},s.a.createElement("a",null,"\u77ed\u4fe1\u9a8c\u8bc1\u7801\u767b\u5f55")),s.a.createElement("div",{className:"form__forget-pwd"},s.a.createElement("a",null,"\u5fd8\u8bb0\u5bc6\u7801")))),s.a.createElement("div",{className:"form__group form__btn-group"},n?s.a.createElement("div",{className:"form__btn-group_item",onClick:function onClick(a){return e._userLogin()}},s.a.createElement("a",{className:"btn-primary btn-primary--blue"},"\u767b\u5f55")):s.a.createElement("div",{className:"form__btn-group_item",onClick:function onClick(e){return console.log(e)}},s.a.createElement("a",{className:"btn-primary btn-primary--blue"},"\u6ce8\u518c")),s.a.createElement("div",{className:"form__btn-group_item",onClick:function onClick(){return e.setState({login:!n})}},s.a.createElement("a",{className:"btn-primary"},n?"\u524d\u53bb\u6ce8\u518c":"\u5df2\u6709\u8d26\u53f7"))),s.a.createElement("div",{className:"dividing"}))))))}}]),Login}(m.Component);a.default=d}}]);
//# sourceMappingURL=13.13a4f1bf.chunk.js.map