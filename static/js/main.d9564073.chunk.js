(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{114:function(e,t,a){e.exports=a(246)},122:function(e,t,a){},123:function(e,t,a){},142:function(e,t,a){},144:function(e,t,a){},145:function(e,t,a){},146:function(e,t,a){},147:function(e,t,a){},246:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(27),s=a.n(o),c=a(6),i=a(7),p=a(109),m=a(8),l=a(9),u=a(11),d=a(10),h=(a(122),a(13)),f=a(29),v=(a(123),a(17)),b=a.n(v),y=a(30),E=a(34),T=a.n(E),O=T.a.create({baseURL:"https://young-ocean-79520.herokuapp.com/"}),N=T.a.create({baseURL:"https://coronavirus-19-api.herokuapp.com/all"}),x=T.a.create({baseURL:"https://coronavirus-19-api.herokuapp.com/countries/poland"}),g=function(){return function(){var e=Object(y.a)(b.a.mark((function e(t){var a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.get("/");case 2:a=e.sent,console.log(a.data),t({type:"FETCH_TODAY",payload:a.data});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},j=function(){return function(){var e=Object(y.a)(b.a.mark((function e(t){var a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.get("/sensor");case 2:a=e.sent,console.log(a),t({type:"FETCH_NAME",payload:a.data});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},C=function(){return function(){var e=Object(y.a)(b.a.mark((function e(t){var a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.get("/");case 2:a=e.sent,console.log(a),t({type:"FETCH_COVID",payload:a.data});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},k=function(){return function(){var e=Object(y.a)(b.a.mark((function e(t){var a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.get("/");case 2:a=e.sent,console.log(a),t({type:"FETCH_COVID_PL",payload:a.data});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},w=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).onFetchClick=function(){e.props.fetchToday(),e.props.fetchCovid(),e.props.fetchCovidPoland()},e}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{className:"ui center aligned icon header",style:{marginTop:"5px"}},r.a.createElement("i",{className:"chart line icon"}),"\u017bAKA MONITOR"),r.a.createElement("div",{className:"button-margins"},r.a.createElement("button",{onClick:this.onFetchClick,className:"ui teal button"},"Od\u015bwie\u017c")))}}]),a}(r.a.Component),D=Object(c.b)(null,{fetchToday:g,fetchCovid:C,fetchCovidPoland:k})(w),z=(a(142),a(56),function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).renderMaxTemp=function(){return e.props.maxTemp?{maxTemp:e.props.maxTemp.maxTemp,time:e.props.maxTemp.time}:"Loading..."},e.renderMinTemp=function(){return e.props.minTemp?{minTemp:e.props.minTemp.minTemp,time:e.props.minTemp.time}:"Loding..."},e.dotColor=function(){return"1"===e.props.id?"yellow":"2"===e.props.id?"blue":void 0},e.onSettingClick=function(){e.props.history.push("/settings")},e}return Object(l.a)(a,[{key:"render",value:function(){if(this.props.data)var e=this.props.data,t=e.temp,a=e.time,n=e.hum;return r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"right floated mini ui header"},r.a.createElement("span",{className:"temp-header"},"".concat(t," \u2103"))),r.a.createElement("div",{className:"header"},this.props.name),r.a.createElement("div",{className:"meta"},"ID czujnika: ",this.props.id),r.a.createElement("div",{className:"description"},"Wilgotno\u015b\u0107: ","".concat(n,"%")," ",r.a.createElement("br",null),r.a.createElement("span",{className:"max-data"},"Max: ","".concat(this.renderMaxTemp().maxTemp," \u2103"),r.a.createElement("span",{className:"time"},"o godz: ","".concat(this.renderMaxTemp().time)," "),r.a.createElement("br",null)),r.a.createElement("span",{className:"min-data"},"Min: ","".concat(this.renderMinTemp().minTemp," \u2103"),r.a.createElement("span",{className:"time"},"o godz: ","".concat(this.renderMinTemp().time)," "),r.a.createElement("br",null)),"Czas: ","".concat(a)," ",r.a.createElement("br",null)),r.a.createElement("div",{className:"extra content"},r.a.createElement("div",{className:"right floated top-margin"},r.a.createElement(h.b,{to:"/chart/temp/".concat(this.props.id),className:"ui purple button"},"Wykres")),r.a.createElement("div",{onClick:this.onSettingClick,className:"left floated"},r.a.createElement("div",{className:"dot-".concat(this.dotColor())})))))}}]),a}(r.a.Component)),M=Object(c.b)((function(e){return{names:e.names}}),{fetchName:j})(z),I=(a(144),function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){if(console.log(this.props),this.props.covid.world)var e=this.props.covid.world.cases,t=this.props.covid.world.deaths;if(this.props.covid.poland)var a=this.props.covid.poland.cases,n=this.props.covid.poland.deaths,o=this.props.covid.poland.recovered,s=this.props.covid.poland.todayCases,c=this.props.covid.poland.todayDeaths;return r.a.createElement("div",{className:"card",id:"card"},r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"header"},"COVID Stats"),r.a.createElement("div",{className:"meta"},"\u015awiat:"),r.a.createElement("div",{className:"description"},"Potwierdzone przypadki: ","".concat(e)," ",r.a.createElement("br",null),"Zgony: ","".concat(t)),r.a.createElement("hr",{className:"line"}),r.a.createElement("div",{className:"meta"},"Polska:"),r.a.createElement("div",{className:"description"},r.a.createElement("span",{id:"bold"},"Potwierdzone przypadki: ")," ","".concat(a)," ",r.a.createElement("br",null),"Zgony: ","".concat(n)," ",r.a.createElement("br",null),"Wyzdrowienia: ","".concat(o)," ",r.a.createElement("br",null),r.a.createElement("br",null),"Dzisiaj potwierdzone przypadki: ","".concat(s)," ",r.a.createElement("br",null),"Dzisiaj zgony: ","".concat(c))))}}]),a}(r.a.Component)),A=(Object(c.b)((function(e){return{covid:e.covid}}),{})(I),function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).renderMaxTemp=function(){return e.props.maxTemp?{maxTemp:e.props.maxTemp.maxTemp,time:e.props.maxTemp.time}:"Loading..."},e.renderMinTemp=function(){return e.props.minTemp?{minTemp:e.props.minTemp.minTemp,time:e.props.minTemp.time}:"Loding..."},e.renderDoor=function(){if(e.props.data)return e.props.data.isOpen?"otwarte":"zamkni\u0119te"},e.renderIsLightOn=function(){if(e.props.data)return e.props.data.isLight?"ON":"OFF"},e.renderTempOutdoor=function(){if(e.props.data)return e.props.data.tempOut},e.dotColor=function(){return"1"===e.props.id?"yellow":"2"===e.props.id?"blue":"3"===e.props.id?"black":void 0},e.onSettingClick=function(){e.props.history.push("/settings")},e}return Object(l.a)(a,[{key:"render",value:function(){if(this.props.data)var e=this.props.data,t=e.temp,a=e.time,n=e.hum;return r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"right floated mini ui header"},r.a.createElement("span",{className:"temp-header"},"".concat(t," \u2103"))),r.a.createElement("div",{className:"header"},"Gara\u017c"),r.a.createElement("div",{className:"meta"},"ID czujnika: ",this.props.id),r.a.createElement("div",{className:"description"},"Wilgotno\u015b\u0107: ","".concat(n,"%")," ",r.a.createElement("br",null),r.a.createElement("span",{className:"max-data"},"Max: ","".concat(this.renderMaxTemp().maxTemp," \u2103"),r.a.createElement("span",{className:"time"},"o godz: ","".concat(this.renderMaxTemp().time)," "),r.a.createElement("br",null)),r.a.createElement("span",{className:"min-data"},"Min: ","".concat(this.renderMinTemp().minTemp," \u2103"),r.a.createElement("span",{className:"time"},"o godz: ","".concat(this.renderMinTemp().time)," "),r.a.createElement("br",null)),"Drzwi: ",this.renderDoor()," ",r.a.createElement("br",null),"\u015awiat\u0142o: ",this.renderIsLightOn()," ",r.a.createElement("br",null),"Czas: ","".concat(a)," ",r.a.createElement("br",null)),r.a.createElement("div",{className:"extra content"},r.a.createElement("div",{className:"right floated top-margin"},r.a.createElement(h.b,{to:"/chart/temp/".concat(this.props.id),className:"ui purple button"},"Wykres")),r.a.createElement("div",{onClick:this.onSettingClick,className:"left floated"},r.a.createElement("div",{className:"dot-".concat(this.dotColor())})))))}}]),a}(r.a.Component)),S=Object(c.b)((function(e){return{names:e.names}}))(A),F=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).renderMaxTemp=function(){return e.props.maxTemp?{maxTemp:e.props.maxTemp.maxTemp,time:e.props.maxTemp.time}:"Loading..."},e.renderMinTemp=function(){return e.props.minTemp?{minTemp:e.props.minTemp.minTemp,time:e.props.minTemp.time}:"Loding..."},e.dotColor=function(){return"1"===e.props.id?"yellow":"2"===e.props.id?"blue":"3"===e.props.id||"4"===e.props.id?"black":void 0},e.onSettingClick=function(){e.props.history.push("/settings")},e}return Object(l.a)(a,[{key:"render",value:function(){if(this.props.data)var e=this.props.data,t=e.tempOut,a=e.time;return r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"right floated mini ui header"},r.a.createElement("span",{className:"temp-header"},"".concat(t," \u2103"))),r.a.createElement("div",{className:"header"},"Na zewn\u0105trz:"),r.a.createElement("div",{className:"meta"},"ID czujnika: ",this.props.id),r.a.createElement("div",{className:"description"},r.a.createElement("span",{className:"max-data"},"Max: ","".concat(this.renderMaxTemp().maxTemp," \u2103"),r.a.createElement("span",{className:"time"},"o godz: ","".concat(this.renderMaxTemp().time)," "),r.a.createElement("br",null)),r.a.createElement("span",{className:"min-data"},"Min: ","".concat(this.renderMinTemp().minTemp," \u2103"),r.a.createElement("span",{className:"time"},"o godz: ","".concat(this.renderMinTemp().time)," "),r.a.createElement("br",null)),"Czas: ","".concat(a)," ",r.a.createElement("br",null)),r.a.createElement("div",{className:"extra content"},r.a.createElement("div",{className:"right floated top-margin"},r.a.createElement(h.b,{to:"/chart/temp/".concat(this.props.id),className:"ui purple button"},"Wykres")),r.a.createElement("div",{onClick:this.onSettingClick,className:"left floated"},r.a.createElement("div",{className:"dot-".concat(this.dotColor())})))))}}]),a}(r.a.Component),L=Object(c.b)((function(e){return{names:e.names}}))(F),_=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).renderData=function(){if(e.props.maxTemp){var t=e.props,a=t.sensor01,n=t.sensor02,r=t.sensor03;return{tempA:a[a.length-1],tempB:n[n.length-1],tempC:r[r.length-1],maxTemp01:e.props.maxTemp.sensor01,maxTemp02:e.props.maxTemp.sensor02,maxTemp03:e.props.maxTemp.sensor03,maxTempOut:e.props.maxTemp.tempOut,minTemp01:e.props.minTemp.sensor01,minTemp02:e.props.minTemp.sensor02,minTemp03:e.props.minTemp.sensor03,minTempOut:e.props.minTemp.tempOut}}return"Loading"},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.props.fetchToday(),this.props.fetchName(),this.props.fetchCovidPoland()}},{key:"renderNames",value:function(){return this.props.names.a?{name1:this.props.names.a.name,name2:this.props.names.b.name}:"Loading..."}},{key:"render",value:function(){return r.a.createElement("div",{className:"ui cards"},r.a.createElement(M,{data:this.renderData().tempA,maxTemp:this.renderData().maxTemp01,minTemp:this.renderData().minTemp01,title:"Sensor A",id:"1",history:this.props.history,name:this.renderNames().name1}),r.a.createElement(M,{data:this.renderData().tempB,maxTemp:this.renderData().maxTemp02,minTemp:this.renderData().minTemp02,title:"Sensor B",id:"2",history:this.props.history,name:this.renderNames().name2}),r.a.createElement(S,{data:this.renderData().tempC,maxTemp:this.renderData().maxTemp03,minTemp:this.renderData().minTemp03,title:"Sensor C",id:"3",history:this.props.history,name:"Garaz"}),r.a.createElement(L,{data:this.renderData().tempC,maxTemp:this.renderData().maxTempOut,minTemp:this.renderData().minTempOut,id:"4",history:this.props.history}))}}]),a}(r.a.Component),P=Object(c.b)((function(e){return e.data.today?{sensor01:e.data.today.sensor01,sensor02:e.data.today.sensor02,sensor03:e.data.today.sensor03,maxTemp:e.data.today.maxTemp,minTemp:e.data.today.minTemp,names:e.names}:{names:e.names}}),{fetchToday:g,fetchName:j,fetchCovid:C,fetchCovidPoland:k})(_),H=(a(145),a(146),a(147),a(42)),W=a.n(H),X=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e={labels:this.props.time,series:[this.props.temp]};new W.a.Line(".ct-chart",e,{showArea:!1,showPoint:!1,onlyInteger:!1,lineSmooth:W.a.Interpolation.monotoneCubic({fillHoles:!1}),axisX:{labelInterpolationFnc:function(e,t){return t%10===0?e:null}},axisY:{offset:25}},[["screen and (max-width: 300px)",{axisX:{labelInterpolationFnc:function(e,t){return t%30===0?e:null}}}],["screen and (min-width: 300px)",{axisX:{labelInterpolationFnc:function(e,t){return t%15===0?e:null}}}],["screen and (min-width: 600px)",{axisX:{labelInterpolationFnc:function(e,t){return t%10===0?e:null}}}]])}},{key:"componentDidUpdate",value:function(){var e={labels:this.props.time,series:[this.props.temp]};new W.a.Line(".ct-chart",e,{showArea:!1,showPoint:!1,onlyInteger:!1,lineSmooth:W.a.Interpolation.monotoneCubic({fillHoles:!1}),axisX:{labelInterpolationFnc:function(e,t){return t%10===0?e:null}},axisY:{offset:25}},[["screen and (max-width: 300px)",{axisX:{labelInterpolationFnc:function(e,t){return t%30===0?e:null}}}],["screen and (min-width: 300px)",{axisX:{labelInterpolationFnc:function(e,t){return t%15===0?e:null}}}],["screen and (min-width: 600px)",{axisX:{labelInterpolationFnc:function(e,t){return t%10===0?e:null}}}]])}},{key:"render",value:function(){return r.a.createElement("div",{id:"chart1",className:"ct-chart .ct-golden-section "})}}]),a}(r.a.Component),V=function(e){return console.log(e),s.a.createPortal(r.a.createElement("div",{onClick:e.onDismiss,className:"ui dimmer modals visible active"},r.a.createElement("div",{onClick:function(e){return e.stopPropagation()},className:"ui standard modal visible active"},r.a.createElement("div",{className:"header"},"Wykres - ostatnie 24h"),r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"chart-title"},r.a.createElement("h4",null,"temp"===e.type?"Temperatura w \u2103":"Wilgotno\u015b\u0107 w %")),r.a.createElement(X,{temp:e.yData,time:e.xData})),r.a.createElement("div",{className:"actions"},e.actions))),document.querySelector("#modal"))},R=a(77),U=function(e,t,a){if(e){var n=e[e.length-1].time,r=t.filter((function(e){return e.time>n}));return{dataTemp:(r=[].concat(Object(R.a)(r),Object(R.a)(e))).map((function(e){return e[a]})),dataTime:r.map((function(e){return e.time}))}}},Z=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).prepareTempToChart=function(){if(e.props.today)if("/chart/temp/:id"===e.props.match.path){if("1"===e.props.match.params.id)return console.log("Hello from preapareTemp"),U(e.props.today.sensor01,e.props.yesterday.sensor01,"temp");if("2"===e.props.match.params.id)return U(e.props.today.sensor02,e.props.yesterday.sensor02,"temp");if("3"===e.props.match.params.id)return U(e.props.today.sensor03,e.props.yesterday.sensor03,"temp");if("4"===e.props.match.params.id)return U(e.props.today.sensor03,e.props.yesterday.sensor03,"tempOut")}else if("/chart/hum/:id"===e.props.match.path){if("1"===e.props.match.params.id)return console.log("Hello from preapareHum"),U(e.props.today.sensor01,e.props.yesterday.sensor01,"hum");if("2"===e.props.match.params.id)return U(e.props.today.sensor02,e.props.yesterday.sensor02,"hum");if("3"===e.props.match.params.id)return U(e.props.today.sensor03,e.props.yesterday.sensor03,"hum")}},e}return Object(l.a)(a,[{key:"renderActions",value:function(){return"4"===this.props.match.params.id?r.a.createElement(r.a.Fragment,null,r.a.createElement(h.b,{to:"/",className:"ui purple button"},"Wr\xf3\u0107")):r.a.createElement(r.a.Fragment,null,r.a.createElement(h.b,{to:"/chart/temp/".concat(this.props.match.params.id),className:"ui purple button"},"Temperatura"),r.a.createElement(h.b,{to:"/chart/hum/".concat(this.props.match.params.id),className:"ui purple button"},"Wilgotno\u015b\u0107"))}},{key:"render",value:function(){var e=this;return this.props.today?r.a.createElement(V,{xData:this.prepareTempToChart().dataTime,yData:this.prepareTempToChart().dataTemp,type:"/chart/temp/:id"===this.props.match.path?"temp":"hum",actions:this.renderActions(),onDismiss:function(){return e.props.history.push("/")}}):r.a.createElement(V,{xData:null,yData:null,type:"/chart/temp/:id"===this.props.match.path?"temp":"hum",actions:this.renderActions(),onDismiss:function(){return e.props.history.push("/")}})}}]),a}(r.a.Component),Y=Object(c.b)((function(e){return{today:e.data.today,yesterday:e.data.yesterday}}),{fetchToday:g})(Z),q=a(248),B=a(247),G=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).onSubmit=function(){var t=Object(y.a)(b.a.mark((function t(a){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(a),t.next=3,e.props.postName(a);case 3:e.props.history.push("/");case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(l.a)(a,[{key:"renderInput",value:function(e){var t=e.input,a=e.label;return r.a.createElement("div",{className:"field"},r.a.createElement("label",null,a),r.a.createElement("input",t))}},{key:"render",value:function(){return s.a.createPortal(r.a.createElement("div",{onClick:this.props.onDismiss,className:"ui dimmer modals visible active"},r.a.createElement("div",{onClick:function(e){return e.stopPropagation()},className:"ui standard modal visible active"},r.a.createElement("div",{className:"header"},"Zmie\u0144 nazw\u0119 czujnika"),r.a.createElement("div",{className:"content"},r.a.createElement("form",{onSubmit:this.props.handleSubmit(this.onSubmit),className:"ui form"},r.a.createElement(q.a,{name:"name1",component:this.renderInput,label:"Nazwa czujnika 1:"}),r.a.createElement(q.a,{name:"name2",component:this.renderInput,label:"Nazwa czujnika 2:"}),r.a.createElement("div",{className:"actions"},r.a.createElement("button",{className:"ui black button"},"Zapisz")))))),document.querySelector("#modal"))}}]),a}(r.a.Component),J=Object(B.a)({form:"sensorsNames"})(Object(c.b)(null,{postName:function(e){return function(){var t=Object(y.a)(b.a.mark((function t(a){var n;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O.post("/sensor",e);case 2:n=t.sent,console.log(n),a({type:"POST_NAME",payload:n.data});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}})(G)),K=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"renderActions",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(h.b,{to:"/",onClick:this.props.onSubmit,className:"ui black button"},"Zapisz"))}},{key:"render",value:function(){var e=this;return r.a.createElement(J,{actions:this.renderActions(),onDismiss:function(){return e.props.history.push("/")},history:this.props.history})}}]),a}(r.a.Component),Q=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.props.fetchToday()}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(D,null),r.a.createElement(h.a,null,r.a.createElement(f.a,{path:"/",exact:!0,component:P}),r.a.createElement(f.a,{path:"/chart/temp/:id",exact:!0,component:Y}),r.a.createElement(f.a,{path:"/chart/hum/:id",exact:!0,component:Y}),r.a.createElement(f.a,{path:"/settings",exact:!0,component:K})))}}]),a}(r.a.Component),$=Object(c.b)((function(e){return{sensor01:e.data.sensor01}}),{fetchToday:g})(Q),ee=a(249),te=a(20),ae=Object(i.c)({data:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_TODAY":return Object(te.a)(Object(te.a)({},e),t.payload);default:return e}},covid:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_COVID":return Object(te.a)(Object(te.a)({},e),{},{world:t.payload});case"FETCH_COVID_PL":return Object(te.a)(Object(te.a)({},e),{},{poland:t.payload});default:return e}},form:ee.a,names:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_NAME":case"POST_NAME":return Object(te.a)(Object(te.a)({},e),t.payload);default:return e}}}),ne=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||i.d,re=Object(i.e)(ae,ne(Object(i.a)(p.a)));s.a.render(r.a.createElement(c.a,{store:re},r.a.createElement($,null)),document.querySelector("#root"))},56:function(e,t,a){}},[[114,1,2]]]);
//# sourceMappingURL=main.d9564073.chunk.js.map