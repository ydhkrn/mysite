"use strict";(self.webpackChunkmysite_dev=self.webpackChunkmysite_dev||[]).push([[7176,4371,4840,8469,2972,1963,9378],{24840:function(e,a,t){t.r(a),t.d(a,{useClocksData:function(){return i}});var n=t(1413),s=t(93433),r=t(29439),c=t(72791),o=t(73700),u=t(81529);function i(e){var a=null===e||void 0===e?void 0:e.filter((function(e){return h!==e})),t=(0,c.useState)(l(a)),n=(0,r.Z)(t,2),s=n[0],o=n[1];return(0,c.useEffect)((function(){var e=setInterval((function(){o(l(a))}),1e3);return function(){return clearInterval(e)}}),[e]),s}function l(e){var a=o.ou.now(),t=[d(a)];return e&&t.push.apply(t,(0,s.Z)(e.map((function(e){return d(a,e)})))),t}function d(e,a){var t=a?e.setZone(a):e,s=t.zoneName,r=t.offsetNameLong,c=t.offsetNameShort,o=t.hour,i=t.minute,l=t.second,d=t.isInDST,h=t.year,f=t.monthShort,v=t.monthLong,y=t.day,g=t.weekdayLong,x=t.weekdayShort,N=m(s),j=t.toFormat("a"),p=u.default.find((function(e){return e.timeZone===N}))||{countryCode:"",countryName:""};return(0,n.Z)((0,n.Z)({isLocal:!a,timeZoneName:N,offsetNameLong:r,offsetNameShort:c},p),{},{hour:t.toFormat("hh"),minute:t.toFormat("mm"),second:t.toFormat("ss"),meridiem:j,isInDST:d,year:h,monthShort:f,monthLong:v,day:y,weekdayLong:g,weekdayShort:x,hourDeg:o/12*360+i/60*30+90,minuteDeg:i/60*360+l/60*6+90,secondDeg:l/60*360+90})}var h=m(o.ou.now().zoneName);function m(e){return e.replace("Calcutta","Kolkata")}},54371:function(e,a,t){t.r(a),t.d(a,{default:function(){return c}});var n=t(56403),s=(t(72791),t(24840)),r=(t(80408),t(80184));function c(e){var a=e.otherTimeZones,t=(0,s.useClocksData)(a);return(0,r.jsxs)("div",{className:"Clocks",children:[t.map((function(e){return(0,r.jsxs)("div",{className:"clockWrap",children:[(0,r.jsxs)("div",{className:"clockMeta",children:[(0,r.jsxs)("div",{className:"clockMetaHeadWrap",children:[(0,r.jsx)(n.default,{code:e.countryCode}),"\xa0",(0,r.jsx)("span",{className:"clockMetaTitle",children:e.countryName}),"\xa0",e.isLocal&&(0,r.jsx)("svg",{className:"-mt-1 w-5 h-5",fill:"#bbb",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{d:"M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"})})]}),e.weekdayLong,",",(0,r.jsx)("br",{})," ",e.day," ",e.monthLong," ",e.year]}),(0,r.jsx)("div",{className:"analog-clock",children:(0,r.jsxs)("div",{className:"analog-clock-face",children:[(0,r.jsx)("div",{className:"dots"}),(0,r.jsx)("div",{className:"dots"}),(0,r.jsx)("div",{className:"dots"}),(0,r.jsx)("div",{className:"dots"}),(0,r.jsx)("div",{className:"dots"}),(0,r.jsx)("div",{className:"dots"}),(0,r.jsx)("div",{style:{transform:"rotate(".concat(e.hourDeg,"deg)")},className:"hand hour-hand"}),(0,r.jsx)("div",{style:{transform:"rotate(".concat(e.minuteDeg,"deg)")},className:"hand min-hand"}),(0,r.jsx)("div",{style:{transform:"rotate(".concat(e.secondDeg,"deg)")},className:"hand sec-hand"}),e.isInDST&&(0,r.jsxs)("i",{className:"pt-2 text-center block tracking-wider text-gray-400 text-xs",children:["daylight",(0,r.jsx)("br",{}),"saving"]})]})}),(0,r.jsxs)("div",{className:"digital-clock",children:[(0,r.jsx)("div",{className:"digit digit-hour",children:e.hour}),(0,r.jsx)("span",{className:"self-center text-gray-300",children:":"}),(0,r.jsx)("div",{className:"digit digit-min",children:e.minute}),(0,r.jsx)("div",{className:"digit digit-sec",children:e.second}),(0,r.jsx)("div",{className:"meridiem",children:e.meridiem})]})]},e.timeZoneName)})),(0,r.jsx)("div",{className:"clockWrap !justify-center transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg group cursor-pointer",children:(0,r.jsx)("span",{className:"self-center group-hover:scale-125 text-2xl",children:"\u2795"})})]})}},56403:function(e,a,t){t.r(a),t.d(a,{default:function(){return s}});t(72791),t(54638);var n=t(80184);function s(e){var a=e.code,t=e.iconClassName,s=void 0===t?"":t,r=e.wrapperClassName,c=void 0===r?"":r;return(0,n.jsx)("span",{className:c,children:(0,n.jsx)("i",{className:"countryFlagSprite countryFlag-".concat(a.toLowerCase()," ").concat(s)})})}},98469:function(e,a,t){t.r(a),t.d(a,{default:function(){return i}});var n=t(1413),s=t(29439),r=t(72791),c=t(72972),o=t(56474),u=t(69927);function i(e,a){var t=(0,r.useCallback)(function(e){return function(a,t){var r=(0,s.Z)(t,2),o=r[0],i=r[1];switch(o){case c.E_FuzzySearchActions.setInputValue:return(0,n.Z)((0,n.Z)({},a),{},{inputValue:i});case c.E_FuzzySearchActions.setFuzzySearchResults:var l,d=String(a.inputValue),h=e.search(d);return d.length>2&&(0,u.toNumber)(null===(l=a.fuzzySearchResults)||void 0===l?void 0:l.length)>1&&0===h.length?a:(0,n.Z)((0,n.Z)({},a),{},{fuzzySearchResults:h});default:return a}}}(e),[e,a]),i=(0,r.useReducer)(t,{inputValue:"",fuzzySearchResults:null}),l=(0,s.Z)(i,2),d=l[0],h=l[1],m=(0,r.useCallback)((0,o.debounce)((function(){return h([c.E_FuzzySearchActions.setFuzzySearchResults])}),200),[]);return(0,n.Z)((0,n.Z)({},d),{},{handleInputValueChange:function(e){h([c.E_FuzzySearchActions.setInputValue,e.target.value]),m()}})}},72972:function(e,a,t){var n;t.r(a),t.d(a,{E_FuzzySearchActions:function(){return n}}),function(e){e[e.setInputValue=0]="setInputValue",e[e.setFuzzySearchResults=1]="setFuzzySearchResults"}(n||(n={}))},87176:function(e,a,t){t.r(a),t.d(a,{default:function(){return u}});t(72791);var n=t(54371),s=t(98469),r=t(81529),c=t(39378),o=(t(1963),t(80184));function u(){var e=(0,s.default)(c.fuzzySearch,r.default);e.inputValue,e.fuzzySearchResults;return(0,o.jsxs)("div",{className:"WorldClock",children:[(0,o.jsx)(n.default,{otherTimeZones:["Asia/Kolkata","Pacific/Auckland","Asia/Ho_Chi_Minh"]}),(0,o.jsx)("div",{className:"fix"})]})}},39378:function(e,a,t){t.r(a),t.d(a,{fuzzySearch:function(){return o}});var n=t(82137),s=t(81529),r={keys:["countryName",{name:"timeZone",weight:2},"countryCode"]},c=n.Z.createIndex(r.keys,s.default),o=new n.Z(s.default,r,c)},80408:function(e,a,t){t.r(a),a.default={}},54638:function(e,a,t){t.r(a),a.default={}},1963:function(e,a,t){t.r(a),a.default={}}}]);
//# sourceMappingURL=7176.311d67ca.chunk.js.map