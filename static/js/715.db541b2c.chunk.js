"use strict";(self.webpackChunkmysite_dev=self.webpackChunkmysite_dev||[]).push([[715,863,91,612,409,352,862,516,102],{39863:function(e,t,n){n.r(t),n.d(t,{defaultInputCode:function(){return r},defaultTargetCode:function(){return o},defaultFavorites:function(){return a},currencyMap:function(){return u}});var r="USD",o="USD",a=["USD","GBP","EUR","JPY","INR"],u={JPY:{name:"Japanese Yen",symbol:"\xa5",htmlCode:"&#165;",uniCode:"U+000A5"},USD:{name:"US Dollar",symbol:"$",htmlCode:"&#36;",uniCode:"U+00024"},GBP:{name:"Great British Pound",symbol:"\xa3",htmlCode:"&#163;",uniCode:"U+000A3"},EUR:{name:"Euro",symbol:"\u20ac",htmlCode:"&#8364;",uniCode:"U+020AC"},INR:{name:"Indian Rupee",symbol:"\u20b9",htmlCode:"&#8377;",uniCode:"U+020B9"}}},46091:function(e,t,n){n.r(t),n.d(t,{fetchCurrencyExData:function(){return l},fetchInputCodeSync:function(){return m},fetchTargetCodeSync:function(){return v}});var r=n(15861),o=n(87757),a=n.n(o),u=n(7370),c=n(39863),i=n(98409),s=n(89352),f=n(1862),d=n(27612);function l(){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(a().mark((function e(){var t,n,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((n=JSON.parse(null!==(t=s.LocalStorage.getItem(u.webStorage.currencyExData))&&void 0!==t?t:"null"))&&!((0,i.getTimetamp)()>n.timeNextUpdate)){e.next=6;break}return e.next=4,(0,d.default)({method:d.T_HTTPMethod.GET,endpoint:u.API.currencyEx});case 4:(r=e.sent).result&&(n=(0,f.mapCurrencyExRateResponse)(r.result),s.LocalStorage.setItem(u.webStorage.currencyExData,JSON.stringify(n)));case 6:return e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(){return s.LocalStorage.getItem(u.webStorage.currencyExInputCode)||c.defaultTargetCode}function v(){return s.LocalStorage.getItem("currencyTargetCode")||c.defaultTargetCode}},27612:function(e,t,n){n.r(t),n.d(t,{T_HTTPMethod:function(){return r},getQueryParams:function(){return c},default:function(){return i}});var r,o=n(15861),a=n(87757),u=n.n(a);!function(e){e.GET="GET",e.POST="POST",e.PUT="PUT",e.PATCH="PATCH",e.DELETE="DELETE"}(r||(r={}));var c=function(e){return Object.keys(e).filter((function(t){return"undefined"!==typeof e[t]&&null!==e[t]&&""!==e[t]})).map((function(t){return"".concat(encodeURIComponent(t),"=").concat(encodeURIComponent(e[t]))})).join("&")};function i(e){return s.apply(this,arguments)}function s(){return(s=(0,o.Z)(u().mark((function e(t){var n,o,a,i,s,f,d,l,p,m;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.method,o=t.endpoint,a=t.params,i=t.headers,s=t.body,f=t.rawBody,d=o,a&&(d+=(-1===d.indexOf("?")?"?":"&")+c(a)),l={headers:i,method:n,credentials:"same-origin",mode:"cors"},n!==r.GET&&(f||s)&&(l.body=f||JSON.stringify(s)),e.prev=5,e.next=8,fetch(d,l);case 8:if(p=e.sent,!(p.headers.get("Content-Type")||"").includes("application/json")){e.next=16;break}return e.next=13,p.json();case 13:m=e.sent,e.next=17;break;case 16:m=p;case 17:if(!(p.status>=400)){e.next=24;break}if(e.t0=m,e.t0){e.next=23;break}return e.next=22,p.text();case 22:e.t0=e.sent;case 23:throw e.t0;case 24:return e.abrupt("return",{result:m});case 27:return e.prev=27,e.t1=e.catch(5),e.abrupt("return",{error:e.t1 instanceof Error?e.t1.message:e.t1});case 30:case"end":return e.stop()}}),e,null,[[5,27]])})))).apply(this,arguments)}},98409:function(e,t,n){function r(){return Math.floor(+Date.now()/1e3)}n.r(t),n.d(t,{getTimetamp:function(){return r}})},89352:function(e,t,n){n.r(t),n.d(t,{isStorageSupported:function(){return a},MemoryStorage:function(){return u},LocalStorage:function(){return c},SessionStorage:function(){return i}});var r=n(43144),o=n(15671);function a(e){try{var t=window[e],n="__storage_test__";return t.setItem(n,"1"),t.removeItem(n),!0}catch(r){return!1}}var u=(0,r.Z)((function e(){var t=this;(0,o.Z)(this,e),this.storage={},this.setItem=function(e,n){var r=n&&n.toString()||"";t.storage[e]=r},this.getItem=function(e){return t.storage[e]||""},this.removeItem=function(e){delete t.storage[e]},this.clear=function(){t.storage=(new e).storage}})),c=a("localStorage")?window.localStorage:new u,i=a("sessionStorage")?window.sessionStorage:new u},1862:function(e,t,n){n.r(t),n.d(t,{mapCurrencyExRateResponse:function(){return a},sanitizeInputAmount:function(){return u},getFavoritesWithExRates:function(){return c},getDefaultFavorites:function(){return i}});var r=n(28683),o=n(39863);function a(e){return{baseCode:e.base_code,conversionRates:e.conversion_rates,timeLastUpdate:e.time_last_update_unix,timeNextUpdate:e.time_next_update_unix}}function u(e){return e.replace(/[^0-9.]/g,"").replace(/(\..*?)\..*/g,"$1")}function c(e,t,n,o){return e.map((function(e){return(0,r.Z)((0,r.Z)({},e),{},{exRate:s(t,n,e.currencyCode,Number(o))})}))}function i(){return o.defaultFavorites.map((function(e){return{currencyCode:e,exRate:null}}))}function s(e,t,n,r){var o=r,a=e[t];return+(e[n]*o/a).toFixed(2)}},78516:function(e,t,n){n.r(t),n.d(t,{T_CurrencyExActionTypes:function(){return y},useCurrencyExReducer:function(){return v}});var r=n(15861),o=n(30907);var a=n(59199),u=n(40181);function c(e){return function(e){if(Array.isArray(e))return(0,o.Z)(e)}(e)||(0,a.Z)(e)||(0,u.Z)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var i=n(28683),s=n(29439),f=n(87757),d=n.n(f),l=n(72791),p=n(1862),m=n(46091);function v(){var e=(0,l.useReducer)(g,{inputCode:(0,m.fetchInputCodeSync)(),targetCode:(0,m.fetchTargetCodeSync)(),inputAmount:"",favorites:(0,p.getDefaultFavorites)()}),t=(0,s.Z)(e,2),n=t[0],o=t[1];return function(e){(0,l.useEffect)((function(){var t=function(){var t=(0,r.Z)(d().mark((function t(){var n;return d().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,m.fetchCurrencyExData)();case 2:(n=t.sent)&&e([y.setData,n.conversionRates]);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t()}),[])}(o),[n,o]}var y,g=function(e,t){var n=(0,s.Z)(t,2),r=n[0],o=n[1];switch(r){case y.setData:return(0,i.Z)((0,i.Z)({},e),{},{conversionRates:o});case y.setInputCode:return(0,i.Z)((0,i.Z)({},e),{},{inputCode:o,favorites:e.conversionRates&&Number(e.inputAmount)>0?(0,p.getFavoritesWithExRates)(e.favorites,e.conversionRates,o,e.inputAmount):e.favorites});case y.setTargetCode:return(0,i.Z)((0,i.Z)({},e),{},{targetCode:o});case y.setInputAmount:var a=(0,p.sanitizeInputAmount)(o);return a===e.inputAmount?e:(0,i.Z)((0,i.Z)({},e),{},{inputAmount:a,favorites:e.conversionRates?(0,p.getFavoritesWithExRates)(e.favorites,e.conversionRates,e.inputCode,a):e.favorites});case y.setCurrencyToValue:return(0,i.Z)((0,i.Z)({},e),{},{currencyToValue:o});case y.toggleFavorite:var u=e.favorites.filter(o);return u.length<e.favorites.length?(0,i.Z)((0,i.Z)({},e),{},{favorites:u}):(0,i.Z)((0,i.Z)({},e),{},{favorites:[].concat(c(e.favorites),[o])});default:return e}};!function(e){e[e.setData=0]="setData",e[e.setInputCode=1]="setInputCode",e[e.setTargetCode=2]="setTargetCode",e[e.setInputAmount=3]="setInputAmount",e[e.setCurrencyToValue=4]="setCurrencyToValue",e[e.toggleFavorite=5]="toggleFavorite"}(y||(y={}))},23715:function(e,t,n){n.r(t),n.d(t,{default:function(){return c}});var r=n(29439),o=(n(72791),n(39863)),a=n(78516),u=(n(93102),n(80184));function c(){var e=(0,a.useCurrencyExReducer)(),t=(0,r.Z)(e,2),n=t[0],c=t[1],s=function(e){c([a.T_CurrencyExActionTypes.setInputCode,e.currentTarget.dataset.currencyCode])};return console.log("\n\u23a3%s\u23a6 ==> src/pages/Tools/Money/CurrencyEx/index.tsx:35 \u2023 ",(new Date).toISOString(),n,"\n"),(0,u.jsx)("div",{className:"MoneyEx",children:(0,u.jsxs)("div",{className:"gridContainer",children:[(0,u.jsxs)("div",{className:"inputOutput",children:[(0,u.jsxs)("span",{className:"codeSymbolGroup",children:[n.inputCode," ",o.currencyMap[n.inputCode].symbol]}),(0,u.jsx)("input",{placeholder:"Type amount...",className:"inputField",type:"text",onChange:function(e){c([a.T_CurrencyExActionTypes.setInputAmount,e.target.value])},value:n.inputAmount})]}),(0,u.jsx)("div",{className:"fullList",children:i({handleCurrencyItemClick:s})}),(0,u.jsx)("div",{className:"favList",children:i({favorites:n.favorites,handleCurrencyItemClick:s})})]})})}function i(e){var t=e.handleCurrencyItemClick,n=e.favorites,r=n||Object.keys(o.currencyMap);return(0,u.jsx)(u.Fragment,{children:r.map((function(e){var r,a=n?e.currencyCode:e,c=o.currencyMap[a];return(0,u.jsxs)("div",{className:"itemContainer","data-currency-code":a,onClickCapture:t,children:[(0,u.jsx)("div",{className:"code",children:a}),(0,u.jsxs)("div",{className:"valueNameGroup",children:[n&&(0,u.jsxs)("span",{className:"exRate",children:[a&&(null===c||void 0===c?void 0:c.symbol)||"","\xa0",null!==(r=e.exRate)&&void 0!==r?r:0]}),(0,u.jsx)("div",{className:"name",children:a&&(null===c||void 0===c?void 0:c.name)||"..."})]})]},a)}))})}},93102:function(e,t,n){n.r(t),t.default={}},28683:function(e,t,n){function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}n.d(t,{Z:function(){return a}})}}]);
//# sourceMappingURL=715.db541b2c.chunk.js.map