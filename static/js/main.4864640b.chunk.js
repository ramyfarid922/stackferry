(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{197:function(e,a,t){e.exports=t(487)},314:function(e,a){},316:function(e,a){},354:function(e,a){},355:function(e,a){},411:function(e,a,t){},412:function(e,a,t){},413:function(e,a,t){},414:function(e,a,t){},415:function(e,a,t){},416:function(e,a,t){},485:function(e,a,t){},486:function(e,a,t){},487:function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),r=t(71),s=t(14),o=t(35),c=t(23),l=t(190),m=t(33),u=t(75),d="ADD_FLASH_MESSAGE",T="DELETE_FLASH_MESSAGE",M="SET_CURRENT_USER",h=t(191),p=t.n(h),G=t(192),b=t.n(G),E=t(42),f=t.n(E),g={isAuthenticated:!1,user:{}},v=Object(m.c)({flashMessages:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(a.type){case d:return[].concat(Object(u.a)(e),[{id:p.a.generate(),type:a.message.type,text:a.message.text}]);case T:var t=b()(e,{id:a.id});return t>=0?[].concat(Object(u.a)(e.slice(0,t)),Object(u.a)(e.slice(t+1))):e;default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(a.type){case M:return{isAuthenticated:!f()(a.user),user:a.user};default:return e}}}),A=t(34),k=t.n(A);function y(e){e?k.a.defaults.headers.common.Authorization="Bearer "+e:delete k.a.defaults.headers.common.Authorization}var C=t(73),j=t.n(C);function N(e){return{type:M,user:e}}function w(){return function(e){localStorage.removeItem("jwtToken"),y(!1),e(N({}))}}t(411),t(412),t(413),t(414),t(415),t(416);var O=t(5),P=t(6),S=t(8),B=t(7),x=t(9),R=t(16),D=t(489),q=function(e){function a(e){var t;return Object(O.a)(this,a),(t=Object(S.a)(this,Object(B.a)(a).call(this,e))).logout=t.logout.bind(Object(R.a)(t)),t}return Object(x.a)(a,e),Object(P.a)(a,[{key:"logout",value:function(e){e.preventDefault(),this.props.logout()}},{key:"render",value:function(){this.props.auth.isAuthenticated,i.a.createElement(D.a,{className:"mr-auto"},i.a.createElement(s.b,{onClick:this.logout,to:"/logout",className:"nav-link",activeClassName:"active"},"Logout")),i.a.createElement(D.a,{className:"mr-auto"},i.a.createElement(s.b,{to:"/home",className:"nav-link",activeClassName:"active"},"Home"),i.a.createElement(s.b,{to:"/portfolio",className:"nav-link",activeClassName:"active"},"Portfolio"),i.a.createElement(s.b,{to:"/blog",className:"nav-link",activeClassName:"active"},"My Blog"));return i.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light fixed-top"},i.a.createElement("div",{className:"container"},i.a.createElement(s.b,{to:"/home",className:"nav-link navbar-brand",activeClassName:"active"},"Ramy Farid"),i.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarResponsive","aria-controls":"navbarResponsive","aria-expanded":"false","aria-label":"Toggle navigation"},i.a.createElement("span",{className:"navbar-toggler-icon"})),i.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarResponsive"},i.a.createElement(D.a,null),i.a.createElement("ul",{className:"navbar-nav ml-auto"},i.a.createElement("li",{className:"nav-item active"},i.a.createElement(s.b,{to:"/home",className:"nav-link",activeClassName:"active"},"Home")),i.a.createElement("li",{className:"nav-item"},i.a.createElement(s.b,{to:"/blog",className:"nav-link",activeClassName:"active"},"My Blog")),i.a.createElement("li",{className:"nav-item"},i.a.createElement(s.b,{to:"/portfolio",className:"nav-link",activeClassName:"active"},"Portfolio"))))))}}]),a}(n.Component);var _=Object(c.b)(function(e){return{auth:e.auth}},{logout:w})(q),I=t(15),z=t.n(I),K=function(e){function a(e){var t;return Object(O.a)(this,a),(t=Object(S.a)(this,Object(B.a)(a).call(this,e))).onClick=t.onClick.bind(Object(R.a)(t)),t}return Object(x.a)(a,e),Object(P.a)(a,[{key:"onClick",value:function(){this.props.deleteFlashMessage(this.props.message.id)}},{key:"render",value:function(){var e=this.props.message,a=(e.id,e.type),t=e.text;return i.a.createElement("div",{className:z()("alert",{"alert-success":"success"===a,"alert-danger":"error"===a})},i.a.createElement("button",{onClick:this.onClick,className:"close"},i.a.createElement("span",null,"\xd7")),t)}}]),a}(n.Component);var L=function(e){function a(){return Object(O.a)(this,a),Object(S.a)(this,Object(B.a)(a).apply(this,arguments))}return Object(x.a)(a,e),Object(P.a)(a,[{key:"render",value:function(){var e=this,a=this.props.messages.map(function(a){return i.a.createElement(K,{deleteFlashMessage:e.props.deleteFlashMessage,key:a.id,message:a})});return i.a.createElement("div",null,a)}}]),a}(n.Component);var F=Object(c.b)(function(e){return{messages:e.flashMessages}},{deleteFlashMessage:function(e){return{type:T,id:e}}})(L),U=t(74),V={"(GMT-11:00) Niue":"Pacific/Niue","(GMT-11:00) Pago Pago":"Pacific/Pago_Pago","(GMT-10:00) Hawaii Time":"Pacific/Honolulu","(GMT-10:00) Rarotonga":"Pacific/Rarotonga","(GMT-10:00) Tahiti":"Pacific/Tahiti","(GMT-09:30) Marquesas":"Pacific/Marquesas","(GMT-09:00) Alaska Time":"America/Anchorage","(GMT-09:00) Gambier":"Pacific/Gambier","(GMT-08:00) Pacific Time":"America/Los_Angeles","(GMT-08:00) Pacific Time - Tijuana":"America/Tijuana","(GMT-08:00) Pacific Time - Vancouver":"America/Vancouver","(GMT-08:00) Pacific Time - Whitehorse":"America/Whitehorse","(GMT-08:00) Pitcairn":"Pacific/Pitcairn","(GMT-07:00) Mountain Time - Dawson Creek":"America/Dawson_Creek","(GMT-07:00) Mountain Time":"America/Denver","(GMT-07:00) Mountain Time - Edmonton":"America/Edmonton","(GMT-07:00) Mountain Time - Hermosillo":"America/Hermosillo","(GMT-07:00) Mountain Time - Chihuahua, Mazatlan":"America/Mazatlan","(GMT-07:00) Mountain Time - Arizona":"America/Phoenix","(GMT-07:00) Mountain Time - Yellowknife":"America/Yellowknife","(GMT-06:00) Belize":"America/Belize","(GMT-06:00) Central Time":"America/Chicago","(GMT-06:00) Costa Rica":"America/Costa_Rica","(GMT-06:00) El Salvador":"America/El_Salvador","(GMT-06:00) Guatemala":"America/Guatemala","(GMT-06:00) Managua":"America/Managua","(GMT-06:00) Central Time - Mexico City":"America/Mexico_City","(GMT-06:00) Central Time - Regina":"America/Regina","(GMT-06:00) Central Time - Tegucigalpa":"America/Tegucigalpa","(GMT-06:00) Central Time - Winnipeg":"America/Winnipeg","(GMT-06:00) Galapagos":"Pacific/Galapagos","(GMT-05:00) Bogota":"America/Bogota","(GMT-05:00) America Cancun":"America/Cancun","(GMT-05:00) Cayman":"America/Cayman","(GMT-05:00) Guayaquil":"America/Guayaquil","(GMT-05:00) Havana":"America/Havana","(GMT-05:00) Eastern Time - Iqaluit":"America/Iqaluit","(GMT-05:00) Jamaica":"America/Jamaica","(GMT-05:00) Lima":"America/Lima","(GMT-05:00) Nassau":"America/Nassau","(GMT-05:00) Eastern Time":"America/New_York","(GMT-05:00) Panama":"America/Panama","(GMT-05:00) Port-au-Prince":"America/Port-au-Prince","(GMT-05:00) Rio Branco":"America/Rio_Branco","(GMT-05:00) Eastern Time - Toronto":"America/Toronto","(GMT-05:00) Easter Island":"Pacific/Easter","(GMT-04:30) Caracas":"America/Caracas","(GMT-03:00) Asuncion":"America/Asuncion","(GMT-04:00) Barbados":"America/Barbados","(GMT-04:00) Boa Vista":"America/Boa_Vista","(GMT-03:00) Campo Grande":"America/Campo_Grande","(GMT-03:00) Cuiaba":"America/Cuiaba","(GMT-04:00) Curacao":"America/Curacao","(GMT-04:00) Grand Turk":"America/Grand_Turk","(GMT-04:00) Guyana":"America/Guyana","(GMT-04:00) Atlantic Time - Halifax":"America/Halifax","(GMT-04:00) La Paz":"America/La_Paz","(GMT-04:00) Manaus":"America/Manaus","(GMT-04:00) Martinique":"America/Martinique","(GMT-04:00) Port of Spain":"America/Port_of_Spain","(GMT-04:00) Porto Velho":"America/Porto_Velho","(GMT-04:00) Puerto Rico":"America/Puerto_Rico","(GMT-04:00) Santo Domingo":"America/Santo_Domingo","(GMT-04:00) Thule":"America/Thule","(GMT-04:00) Bermuda":"Atlantic/Bermuda","(GMT-03:30) Newfoundland Time - St. Johns":"America/St_Johns","(GMT-03:00) Araguaina":"America/Araguaina","(GMT-03:00) Buenos Aires":"America/Argentina/Buenos_Aires","(GMT-03:00) Salvador":"America/Bahia","(GMT-03:00) Belem":"America/Belem","(GMT-03:00) Cayenne":"America/Cayenne","(GMT-03:00) Fortaleza":"America/Fortaleza","(GMT-03:00) Godthab":"America/Godthab","(GMT-03:00) Maceio":"America/Maceio","(GMT-03:00) Miquelon":"America/Miquelon","(GMT-03:00) Montevideo":"America/Montevideo","(GMT-03:00) Paramaribo":"America/Paramaribo","(GMT-03:00) Recife":"America/Recife","(GMT-03:00) Santiago":"America/Santiago","(GMT-02:00) Sao Paulo":"America/Sao_Paulo","(GMT-03:00) Palmer":"Antarctica/Palmer","(GMT-03:00) Rothera":"Antarctica/Rothera","(GMT-03:00) Stanley":"Atlantic/Stanley","(GMT-02:00) Noronha":"America/Noronha","(GMT-02:00) South Georgia":"Atlantic/South_Georgia","(GMT-01:00) Scoresbysund":"America/Scoresbysund","(GMT-01:00) Azores":"Atlantic/Azores","(GMT-01:00) Cape Verde":"Atlantic/Cape_Verde","(GMT+00:00) Abidjan":"Africa/Abidjan","(GMT+00:00) Accra":"Africa/Accra","(GMT+00:00) Bissau":"Africa/Bissau","(GMT+00:00) Casablanca":"Africa/Casablanca","(GMT+00:00) El Aaiun":"Africa/El_Aaiun","(GMT+00:00) Monrovia":"Africa/Monrovia","(GMT+00:00) Danmarkshavn":"America/Danmarkshavn","(GMT+00:00) Canary Islands":"Atlantic/Canary","(GMT+00:00) Faeroe":"Atlantic/Faroe","(GMT+00:00) Reykjavik":"Atlantic/Reykjavik","(GMT+00:00) GMT (no daylight saving)":"Etc/GMT","(GMT+00:00) Dublin":"Europe/Dublin","(GMT+00:00) Lisbon":"Europe/Lisbon","(GMT+00:00) London":"Europe/London","(GMT+01:00) Algiers":"Africa/Algiers","(GMT+01:00) Ceuta":"Africa/Ceuta","(GMT+01:00) Lagos":"Africa/Lagos","(GMT+01:00) Ndjamena":"Africa/Ndjamena","(GMT+01:00) Tunis":"Africa/Tunis","(GMT+02:00) Windhoek":"Africa/Windhoek","(GMT+01:00) Amsterdam":"Europe/Amsterdam","(GMT+01:00) Andorra":"Europe/Andorra","(GMT+01:00) Central European Time - Belgrade":"Europe/Belgrade","(GMT+01:00) Berlin":"Europe/Berlin","(GMT+01:00) Brussels":"Europe/Brussels","(GMT+01:00) Budapest":"Europe/Budapest","(GMT+01:00) Copenhagen":"Europe/Copenhagen","(GMT+01:00) Gibraltar":"Europe/Gibraltar","(GMT+01:00) Luxembourg":"Europe/Luxembourg","(GMT+01:00) Madrid":"Europe/Madrid","(GMT+01:00) Malta":"Europe/Malta","(GMT+01:00) Monaco":"Europe/Monaco","(GMT+01:00) Oslo":"Europe/Oslo","(GMT+01:00) Paris":"Europe/Paris","(GMT+01:00) Central European Time - Prague":"Europe/Prague","(GMT+01:00) Rome":"Europe/Rome","(GMT+01:00) Stockholm":"Europe/Stockholm","(GMT+01:00) Tirane":"Europe/Tirane","(GMT+01:00) Vienna":"Europe/Vienna","(GMT+01:00) Warsaw":"Europe/Warsaw","(GMT+01:00) Zurich":"Europe/Zurich","(GMT+02:00) Cairo":"Africa/Cairo","(GMT+02:00) Johannesburg":"Africa/Johannesburg","(GMT+02:00) Maputo":"Africa/Maputo","(GMT+02:00) Tripoli":"Africa/Tripoli","(GMT+02:00) Amman":"Asia/Amman","(GMT+02:00) Beirut":"Asia/Beirut","(GMT+02:00) Damascus":"Asia/Damascus","(GMT+02:00) Gaza":"Asia/Gaza","(GMT+02:00) Jerusalem":"Asia/Jerusalem","(GMT+02:00) Nicosia":"Asia/Nicosia","(GMT+02:00) Athens":"Europe/Athens","(GMT+02:00) Bucharest":"Europe/Bucharest","(GMT+02:00) Chisinau":"Europe/Chisinau","(GMT+02:00) Helsinki":"Europe/Helsinki","(GMT+02:00) Istanbul":"Europe/Istanbul","(GMT+02:00) Moscow-01 - Kaliningrad":"Europe/Kaliningrad","(GMT+02:00) Kiev":"Europe/Kiev","(GMT+02:00) Riga":"Europe/Riga","(GMT+02:00) Sofia":"Europe/Sofia","(GMT+02:00) Tallinn":"Europe/Tallinn","(GMT+02:00) Vilnius":"Europe/Vilnius","(GMT+03:00) Khartoum":"Africa/Khartoum","(GMT+03:00) Nairobi":"Africa/Nairobi","(GMT+03:00) Syowa":"Antarctica/Syowa","(GMT+03:00) Baghdad":"Asia/Baghdad","(GMT+03:00) Qatar":"Asia/Qatar","(GMT+03:00) Riyadh":"Asia/Riyadh","(GMT+03:00) Minsk":"Europe/Minsk","(GMT+03:00) Moscow+00 - Moscow":"Europe/Moscow","(GMT+03:30) Tehran":"Asia/Tehran","(GMT+04:00) Baku":"Asia/Baku","(GMT+04:00) Dubai":"Asia/Dubai","(GMT+04:00) Tbilisi":"Asia/Tbilisi","(GMT+04:00) Yerevan":"Asia/Yerevan","(GMT+04:00) Moscow+01 - Samara":"Europe/Samara","(GMT+04:00) Mahe":"Indian/Mahe","(GMT+04:00) Mauritius":"Indian/Mauritius","(GMT+04:00) Reunion":"Indian/Reunion","(GMT+04:30) Kabul":"Asia/Kabul","(GMT+05:00) Mawson":"Antarctica/Mawson","(GMT+05:00) Aqtau":"Asia/Aqtau","(GMT+05:00) Aqtobe":"Asia/Aqtobe","(GMT+05:00) Ashgabat":"Asia/Ashgabat","(GMT+05:00) Dushanbe":"Asia/Dushanbe","(GMT+05:00) Karachi":"Asia/Karachi","(GMT+05:00) Tashkent":"Asia/Tashkent","(GMT+05:00) Moscow+02 - Yekaterinburg":"Asia/Yekaterinburg","(GMT+05:00) Kerguelen":"Indian/Kerguelen","(GMT+05:00) Maldives":"Indian/Maldives","(GMT+05:30) India Standard Time":"Asia/Calcutta","(GMT+05:30) Colombo":"Asia/Colombo","(GMT+05:45) Katmandu":"Asia/Katmandu","(GMT+06:00) Vostok":"Antarctica/Vostok","(GMT+06:00) Almaty":"Asia/Almaty","(GMT+06:00) Bishkek":"Asia/Bishkek","(GMT+06:00) Dhaka":"Asia/Dhaka","(GMT+06:00) Moscow+03 - Omsk, Novosibirsk":"Asia/Omsk","(GMT+06:00) Thimphu":"Asia/Thimphu","(GMT+06:00) Chagos":"Indian/Chagos","(GMT+06:30) Rangoon":"Asia/Rangoon","(GMT+06:30) Cocos":"Indian/Cocos","(GMT+07:00) Davis":"Antarctica/Davis","(GMT+07:00) Bangkok":"Asia/Bangkok","(GMT+07:00) Hovd":"Asia/Hovd","(GMT+07:00) Jakarta":"Asia/Jakarta","(GMT+07:00) Moscow+04 - Krasnoyarsk":"Asia/Krasnoyarsk","(GMT+07:00) Hanoi":"Asia/Saigon","(GMT+07:00) Christmas":"Indian/Christmas","(GMT+08:00) Casey":"Antarctica/Casey","(GMT+08:00) Brunei":"Asia/Brunei","(GMT+08:00) Choibalsan":"Asia/Choibalsan","(GMT+08:00) Hong Kong":"Asia/Hong_Kong","(GMT+08:00) Moscow+05 - Irkutsk":"Asia/Irkutsk","(GMT+08:00) Kuala Lumpur":"Asia/Kuala_Lumpur","(GMT+08:00) Macau":"Asia/Macau","(GMT+08:00) Makassar":"Asia/Makassar","(GMT+08:00) Manila":"Asia/Manila","(GMT+08:00) China Time - Beijing":"Asia/Shanghai","(GMT+08:00) Singapore":"Asia/Singapore","(GMT+08:00) Taipei":"Asia/Taipei","(GMT+08:00) Ulaanbaatar":"Asia/Ulaanbaatar","(GMT+08:00) Western Time - Perth":"Australia/Perth","(GMT+08:30) Pyongyang":"Asia/Pyongyang","(GMT+09:00) Dili":"Asia/Dili","(GMT+09:00) Jayapura":"Asia/Jayapura","(GMT+09:00) Seoul":"Asia/Seoul","(GMT+09:00) Tokyo":"Asia/Tokyo","(GMT+09:00) Moscow+06 - Yakutsk":"Asia/Yakutsk","(GMT+09:00) Palau":"Pacific/Palau","(GMT+10:30) Central Time - Adelaide":"Australia/Adelaide","(GMT+09:30) Central Time - Darwin":"Australia/Darwin","(GMT+10:00) Dumont D'Urville":"Antarctica/DumontDUrville","(GMT+10:00) Moscow+07 - Magadan":"Asia/Magadan","(GMT+10:00) Moscow+07 - Yuzhno-Sakhalinsk":"Asia/Vladivostok","(GMT+10:00) Eastern Time - Brisbane":"Australia/Brisbane","(GMT+11:00) Eastern Time - Hobart":"Australia/Hobart","(GMT+11:00) Eastern Time - Melbourne, Sydney":"Australia/Sydney","(GMT+10:00) Truk":"Pacific/Chuuk","(GMT+10:00) Guam":"Pacific/Guam","(GMT+10:00) Port Moresby":"Pacific/Port_Moresby","(GMT+11:00) Efate":"Pacific/Efate","(GMT+11:00) Guadalcanal":"Pacific/Guadalcanal","(GMT+11:00) Kosrae":"Pacific/Kosrae","(GMT+11:00) Norfolk":"Pacific/Norfolk","(GMT+11:00) Noumea":"Pacific/Noumea","(GMT+11:00) Ponape":"Pacific/Pohnpei","(GMT+12:00) Moscow+09 - Petropavlovsk-Kamchatskiy":"Asia/Kamchatka","(GMT+13:00) Auckland":"Pacific/Auckland","(GMT+13:00) Fiji":"Pacific/Fiji","(GMT+12:00) Funafuti":"Pacific/Funafuti","(GMT+12:00) Kwajalein":"Pacific/Kwajalein","(GMT+12:00) Majuro":"Pacific/Majuro","(GMT+12:00) Nauru":"Pacific/Nauru","(GMT+12:00) Tarawa":"Pacific/Tarawa","(GMT+12:00) Wake":"Pacific/Wake","(GMT+12:00) Wallis":"Pacific/Wallis","(GMT+14:00) Apia":"Pacific/Apia","(GMT+13:00) Enderbury":"Pacific/Enderbury","(GMT+13:00) Fakaofo":"Pacific/Fakaofo","(GMT+13:00) Tongatapu":"Pacific/Tongatapu","(GMT+14:00) Kiritimati":"Pacific/Kiritimati"},H=t(488),J=t(26),W=t.n(J);var Y=function(e){var a=e.field,t=e.value,n=e.label,r=e.error,s=e.type,o=e.onChange,c=e.checkUserExists;return i.a.createElement("div",{className:"form-group"},i.a.createElement("label",{className:"control-label"},n),i.a.createElement("input",{onChange:o,onBlur:c,name:a,value:t,type:s,className:z()("form-control",{"is-invalid":r})}),r&&i.a.createElement("small",{className:"text-danger"},r))};Y.defaultProps={type:"text"};var Q=Y,Z=function(e){function a(e){var t;return Object(O.a)(this,a),(t=Object(S.a)(this,Object(B.a)(a).call(this,e))).state={username:"",email:"",password:"",passwordConfirmation:"",timezone:"",errors:{},isLoading:!1,invalid:!1,toHome:!1},t.onChange=t.onChange.bind(Object(R.a)(t)),t.onSubmit=t.onSubmit.bind(Object(R.a)(t)),t.checkUserExists=t.checkUserExists.bind(Object(R.a)(t)),t}return Object(x.a)(a,e),Object(P.a)(a,[{key:"isValid",value:function(){var e=function(e){var a={};return W.a.isEmail(e.email)||(a.email="Email is invalid"),W.a.isEmpty(e.email)&&(a.email="This field is required"),W.a.isEmpty(e.username)&&(a.username="This field is required"),W.a.isEmpty(e.password)&&(a.password="This field is required"),W.a.isEmpty(e.passwordConfirmation)&&(a.passwordConfirmation="This field is required"),W.a.equals(e.password,e.passwordConfirmation)||(a.passwordConfirmation="Passwords must match"),W.a.isEmpty(e.timezone)&&(a.timezone="This field is required"),{errors:a,isValid:f()(a)}}(this.state),a=e.errors,t=e.isValid;return t||this.setState({errors:a}),t}},{key:"onChange",value:function(e){this.setState(Object(U.a)({},e.target.name,e.target.value))}},{key:"checkUserExists",value:function(e){var a=this,t=e.target.name,n=e.target.value;""!==n&&this.props.isUserExists(n).then(function(e){var n,i=a.state.errors;e.data.user?(i[t]="There's a user with such "+t,n=!0):(i[t]="",n=!1),a.setState({errors:i,invalid:n})})}},{key:"onSubmit",value:function(e){var a=this;e.preventDefault(),this.isValid()&&(this.setState({errors:{}}),this.props.userSignupRequest(this.state).then(function(e){console.log(e.data),a.props.addFlashMessage({type:"success",text:"You signed up successfully. Welcome!"}),a.props.history.push("/")},function(e){var t=e.response;console.log(t.data),a.setState({errors:t.data})}))}},{key:"render",value:function(){var e=this.state.errors,a=Object.keys(V).map(function(e){return i.a.createElement("option",{key:V[e],value:V[e]},e)});return i.a.createElement("div",null,i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-md-12"},i.a.createElement(H.a,null,i.a.createElement("h3",null,"Sign up"),i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-md-4"},i.a.createElement("form",{onSubmit:this.onSubmit},i.a.createElement(Q,{field:"username",label:"Username",value:this.state.username,onChange:this.onChange,checkUserExists:this.checkUserExists,error:e.username}),i.a.createElement(Q,{field:"email",label:"Email",value:this.state.email,onChange:this.onChange,error:e.email,checkUserExists:this.checkUserExists}),i.a.createElement(Q,{field:"password",label:"Password",value:this.state.password,onChange:this.onChange,error:e.password,type:"password"}),i.a.createElement(Q,{field:"passwordConfirmation",label:"Confirm Password",value:this.state.passwordConfirmation,onChange:this.onChange,error:e.passwordConfirmation,type:"password"}),i.a.createElement("div",{className:"form-group"},i.a.createElement("label",{className:"control-label"},"Timezone"),i.a.createElement("select",{value:this.state.timezone,onChange:this.onChange,name:"timezone",className:z()("form-control",{"is-invalid":e.timezone})},i.a.createElement("option",{value:"",disabled:!0},"Choose Your Timezone"),a),e.timezone&&i.a.createElement("small",{className:"text-danger"},e.timezone)),i.a.createElement("div",{className:"form-group"},i.a.createElement("button",{disabled:this.state.invalid,className:"btn btn-primary btn-lg"},"Sign up")))))))))}}]),a}(n.Component),X=Object(o.f)(Z);var $=function(e){function a(){return Object(O.a)(this,a),Object(S.a)(this,Object(B.a)(a).apply(this,arguments))}return Object(x.a)(a,e),Object(P.a)(a,[{key:"render",value:function(){var e=this.props,a=e.userSignupRequest,t=e.addFlashMessage,n=e.isUserExists;return console.log(this.props),i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-md-12"},i.a.createElement(X,{isUserExists:n,userSignupRequest:a,addFlashMessage:t})))}}]),a}(n.Component),ee=Object(c.b)(function(e){return{}},{userSignupRequest:function(e){return function(a){return k.a.post("/api/users",e)}},addFlashMessage:function(e){return{type:d,message:e}},isUserExists:function(e){return function(a){return k.a.get("/api/users/"+e)}}})($);var ae=function(e){function a(e){var t;return Object(O.a)(this,a),(t=Object(S.a)(this,Object(B.a)(a).call(this,e))).state={identifier:"",password:"",errors:{},isLoading:!1},t.onChange=t.onChange.bind(Object(R.a)(t)),t.onSubmit=t.onSubmit.bind(Object(R.a)(t)),t}return Object(x.a)(a,e),Object(P.a)(a,[{key:"onChange",value:function(e){this.setState(Object(U.a)({},e.target.name,e.target.value))}},{key:"isValid",value:function(){var e=function(e){var a={};return W.a.isEmpty(e.identifier)&&(a.identifier="This field is required"),W.a.isEmpty(e.password)&&(a.password="This field is required"),{errors:a,isValid:f()(a)}}(this.state),a=e.errors,t=e.isValid;return t||this.setState({errors:a}),t}},{key:"onSubmit",value:function(e){var a=this;e.preventDefault(),this.isValid()&&(this.setState({errors:{},isLoading:!0}),this.props.login(this.state).then(function(e){console.log(e),a.props.history.push("/")},function(e){var t=e.response;console.log(t.data.errors),a.setState({errors:t.data.errors})}))}},{key:"render",value:function(){var e=this.state,a=e.identifier,t=e.password,n=e.errors;e.isLoading,e.onChange;return i.a.createElement("div",null,i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-md-12"},i.a.createElement(H.a,null,i.a.createElement("h3",null,"Log In"),n.form&&i.a.createElement("div",{className:"alert alert-danger"},n.form),i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-md-4"},i.a.createElement("form",{onSubmit:this.onSubmit},i.a.createElement(Q,{field:"identifier",label:"Username/Email",value:a,onChange:this.onChange,error:n.identifier}),i.a.createElement(Q,{field:"password",label:"Username/Email",value:t,onChange:this.onChange,error:n.password,type:"password"}),i.a.createElement("div",{className:"form-group"},i.a.createElement("button",{className:"btn btn-primary btn-lg"},"Login")))))))))}}]),a}(n.Component),te=Object(o.f)(Object(c.b)(null,{login:function(e){return function(a){return k.a.post("/api/auth",e).then(function(e){var t=e.data.token;localStorage.setItem("jwtToken",t),y(t),a(N(j.a.decode(t)))})}}})(ae)),ne=function(e){function a(){return Object(O.a)(this,a),Object(S.a)(this,Object(B.a)(a).apply(this,arguments))}return Object(x.a)(a,e),Object(P.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-md-12"},i.a.createElement(te,null)))}}]),a}(n.Component),ie=function(e){function a(){return Object(O.a)(this,a),Object(S.a)(this,Object(B.a)(a).apply(this,arguments))}return Object(x.a)(a,e),Object(P.a)(a,[{key:"render",value:function(){return i.a.createElement("img",{className:"image-card",src:"/img/ramy.jpg"})}}]),a}(n.Component),re=function(e){function a(e){var t;return Object(O.a)(this,a),(t=Object(S.a)(this,Object(B.a)(a).call(this,e))).logout=t.logout.bind(Object(R.a)(t)),t}return Object(x.a)(a,e),Object(P.a)(a,[{key:"logout",value:function(e){e.preventDefault(),this.props.logout()}},{key:"render",value:function(){this.props.auth.isAuthenticated;return i.a.createElement("header",{className:"bg-dark py-5 h-100"},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"row h-100 mb-4 align-items-center"},i.a.createElement("div",{className:"container image-section"},i.a.createElement(ie,null))),i.a.createElement("div",{className:"row h-100 align-items-center"},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"row h-100 align-items-center"},i.a.createElement("h2",{className:"text-white-50 text-center w-100 mb-2 name-title"},"Ramy Farid")),i.a.createElement("div",{className:"row h-100 align-items-center"},i.a.createElement("p",{className:"lead mb-3 text-white-50 text-center job-title w-100"},"Full stack web developer and a software builder at heart.")),i.a.createElement("div",{className:"row h-100 align-items-center"},i.a.createElement("p",{className:"lead mb-3 text-white-50 text-center job-description"},"Stack-agnostic developer who favors Javascript development stack. I code across the stack from deploying using the cloud web services and up to refining the web UI and what's in between."))))))}}]),a}(n.Component);var se=Object(c.b)(function(e){return{auth:e.auth}},{logout:w})(re),oe=function(e){function a(){return Object(O.a)(this,a),Object(S.a)(this,Object(B.a)(a).apply(this,arguments))}return Object(x.a)(a,e),Object(P.a)(a,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(se,null),i.a.createElement("br",null),i.a.createElement("div",{className:"container homepage-container"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-md-8 mb-5 what-ido-text"},i.a.createElement("h3",null,"What I do"),i.a.createElement("hr",null),i.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. A deserunt neque tempore recusandae animi soluta quasi? Asperiores rem dolore eaque vel, porro, soluta unde debitis aliquam laboriosam. Repellat explicabo, maiores!"),i.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis optio neque consectetur consequatur magni in nisi, natus beatae quidem quam odit commodi ducimus totam eum, alias, adipisci nesciunt voluptate. Voluptatum."),i.a.createElement("a",{className:"btn btn-dark btn-lg",href:"#"},"Know more! \xbb")),i.a.createElement("div",{className:"col-md-4 mb-5 contact-me-text"},i.a.createElement("h3",null,"Contact Me"),i.a.createElement("hr",null),i.a.createElement("address",null,i.a.createElement("strong",null,"Ramy Farid"),i.a.createElement("br",null),"Cairo, Egypt",i.a.createElement("br",null),i.a.createElement("br",null)),i.a.createElement("address",null,i.a.createElement("br",null),i.a.createElement("a",{href:"mailto:#"},"name@example.com"))))))}}]),a}(n.Component),ce=(t(485),function(e){function a(){return Object(O.a)(this,a),Object(S.a)(this,Object(B.a)(a).apply(this,arguments))}return Object(x.a)(a,e),Object(P.a)(a,[{key:"render",value:function(){return i.a.createElement("section",{class:"coming-soon"},i.a.createElement("div",{class:"container"},i.a.createElement("div",{class:"row"},i.a.createElement("div",{class:"col-lg-6"},i.a.createElement("h3",{class:"mt-5"},"Coming soon!"),i.a.createElement("p",null,"This page is currently under construction or unavailable!")))))}}]),a}(n.Component)),le=function(e){function a(){return Object(O.a)(this,a),Object(S.a)(this,Object(B.a)(a).apply(this,arguments))}return Object(x.a)(a,e),Object(P.a)(a,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(ce,null))}}]),a}(n.Component),me=function(e){function a(){return Object(O.a)(this,a),Object(S.a)(this,Object(B.a)(a).apply(this,arguments))}return Object(x.a)(a,e),Object(P.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-md-8 blog-posts-list"},i.a.createElement("div",{className:"card mb-4"},i.a.createElement("img",{className:"card-img-top",src:"/img/zsh-term.jpg"}),i.a.createElement("div",{className:"card-body"},i.a.createElement("h4",{className:"card-title"},"Why I decided to use zsh terminal"),i.a.createElement("small",null,"Posted on January 1, 2017 by \xa0",i.a.createElement(s.b,{to:"/home"},"Ramy")),i.a.createElement("p",{className:"card-text"},"Since I started using linux and until now I, like anyone who migrated to linux from windows, have been using the default Ubuntu terminal which is the bash terminal. It looked good and was smooth from a UX point of view and I had some preferences in tweaking its look to give me that sense of control..until I discovered zsh"),i.a.createElement(s.b,{to:"/readmore"}," Read More \u2192")))),i.a.createElement("div",{className:"col-md-4"},i.a.createElement("div",{className:"card my-4"},i.a.createElement("h5",{className:"card-header"},"Search"),i.a.createElement("div",{className:"card-body"},i.a.createElement("div",{className:"input-group"},i.a.createElement("input",{type:"text",className:"form-control",placeholder:"Search for..."}),i.a.createElement("span",{className:"input-group-btn"},i.a.createElement("button",{className:"btn btn-secondary",type:"button"},"Go!"))))),i.a.createElement("div",{className:"card my-4"},i.a.createElement("h5",{className:"card-header"},"Categories"),i.a.createElement("div",{className:"card-body"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-lg-6"},i.a.createElement("ul",{className:"list-unstyled mb-0"},i.a.createElement("li",null,i.a.createElement("a",{href:"#"},"Web Design")),i.a.createElement("li",null,i.a.createElement("a",{href:"#"},"HTML")),i.a.createElement("li",null,i.a.createElement("a",{href:"#"},"Freebies")))),i.a.createElement("div",{className:"col-lg-6"},i.a.createElement("ul",{className:"list-unstyled mb-0"},i.a.createElement("li",null,i.a.createElement("a",{href:"#"},"JavaScript")),i.a.createElement("li",null,i.a.createElement("a",{href:"#"},"CSS")),i.a.createElement("li",null,i.a.createElement("a",{href:"#"},"Tutorials"))))))))))}}]),a}(n.Component),ue=(t(486),function(e){function a(){return Object(O.a)(this,a),Object(S.a)(this,Object(B.a)(a).apply(this,arguments))}return Object(x.a)(a,e),Object(P.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"app-container"},i.a.createElement(_,null),i.a.createElement(F,null),i.a.createElement("div",{className:"main-content"},i.a.createElement(o.c,null,i.a.createElement(o.a,{exact:!0,path:"/",component:oe}),i.a.createElement(o.a,{path:"/signup",component:ee}),i.a.createElement(o.a,{path:"/home",component:oe}),i.a.createElement(o.a,{path:"/portfolio",component:le}),i.a.createElement(o.a,{path:"/blog",component:me}),i.a.createElement(o.a,{path:"/login",component:ne}))))}}]),a}(n.Component)),de=Object(m.e)(v,Object(m.d)(Object(m.a)(l.a),window.devToolsExtension?window.devToolsExtension():function(e){return e}));localStorage.jwtToken&&(y(localStorage.getItem("jwtToken")),de.dispatch(N(j.a.decode(localStorage.jwtToken)))),Object(r.render)(i.a.createElement(c.a,{store:de},i.a.createElement(s.a,null,i.a.createElement(o.a,{path:"/",component:ue}))),document.getElementById("app"))}},[[197,1,2]]]);
//# sourceMappingURL=main.4864640b.chunk.js.map