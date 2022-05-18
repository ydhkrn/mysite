"use strict";(self.webpackChunkmysite_dev=self.webpackChunkmysite_dev||[]).push([[2929,3428,9927,2674,9352,1646],{32929:function(e,t,n){n.r(t),n.d(t,{useElementHandlers:function(){return d},useDefaults:function(){return v},createReducer:function(){return f}});var r=n(93433),o=n(29439),a=n(1413),u=n(72791),i=n(16871),s=n(82674),c=n(81646),l=n(73428);function d(e,t){var n=(0,u.useRef)(null),r=(0,u.useRef)(null),o=(0,u.useMemo)((function(){return{handleInputValueChange:function(t){return e([l.E_UnitConverterActions.setInputValue,t.target.value])},handleTargetValueChange:function(t){return e([l.E_UnitConverterActions.setTargetValue,t.target.value])},handleListItemAction:function(o){var a=o.currentTarget.dataset,u=a.code,i=a.actionName;if(u&&i)switch(i){case l.E_UnitConverterListItemActions.input:var s;return t.set(l.E_PageCacheKeys.inputCode,u),e([l.E_UnitConverterActions.setInputCode,u]),void(null===(s=n.current)||void 0===s||s.focus());case l.E_UnitConverterListItemActions.target:var c;return t.set(l.E_PageCacheKeys.targetCode,u),e([l.E_UnitConverterActions.setTargetCode,u]),void(null===(c=r.current)||void 0===c||c.focus());default:return}},handleInputClearClick:function(){var t;e([l.E_UnitConverterActions.setInputValue,""]),null===(t=n.current)||void 0===t||t.focus()},handleTargetClearClick:function(){var t;e([l.E_UnitConverterActions.setTargetValue,""]),null===(t=r.current)||void 0===t||t.focus()},handleInputTargetCodeSwapClick:function(r,o){var a;t.set(l.E_PageCacheKeys.inputCode,o),t.set(l.E_PageCacheKeys.targetCode,r),e([l.E_UnitConverterActions.swapInputTargetCode]),null===(a=n.current)||void 0===a||a.focus()}}}),[e,t]);return(0,a.Z)({inputValueEl:n,targetValueEl:r},o)}function v(e){var t=(0,i.TH)();return(0,u.useMemo)((function(){var n=new s.default(t.pathname);return{inputCode:n.get(l.E_PageCacheKeys.inputCode)||e.inputCode,targetCode:n.get(l.E_PageCacheKeys.targetCode)||e.targetCode,favorites:(0,c.getDefaultFavorites)(n.get(l.E_PageCacheKeys.favoriteCodes)||e.favoriteCodes),pageCache:n}}),[t,e])}function f(e){return function(t,n){var u=(0,o.Z)(n,2),i=u[0],s=u[1];if(!e.conversionRates&&!e.conversionFormulas)return t;var d={conversionRates:e.conversionRates,conversionFormulas:e.conversionFormulas};switch(i){case l.E_UnitConverterActions.setInputCode:return(0,a.Z)((0,a.Z)({},t),{},{inputCode:s,targetValue:(0,c.calcValue)((0,a.Z)((0,a.Z)({},d),{},{inputCode:s,targetCode:t.targetCode,inputValue:t.inputValue})),favorites:(0,c.calcValueForFavorites)((0,a.Z)((0,a.Z)({},d),{},{favorites:t.favorites,inputCode:s,inputValue:t.inputValue}))});case l.E_UnitConverterActions.setTargetCode:var v=(0,c.calcValue)((0,a.Z)((0,a.Z)({},d),{},{inputCode:s,targetCode:t.inputCode,inputValue:t.targetValue}));return(0,a.Z)((0,a.Z)({},t),{},{targetCode:s,inputValue:v,favorites:(0,c.calcValueForFavorites)((0,a.Z)((0,a.Z)({},d),{},{favorites:t.favorites,inputCode:t.inputCode,inputValue:v}))});case l.E_UnitConverterActions.swapInputTargetCode:return(0,a.Z)((0,a.Z)({},t),{},{inputCode:t.targetCode,targetCode:t.inputCode,inputValue:t.targetValue,targetValue:t.inputValue});case l.E_UnitConverterActions.setInputValue:var f=(0,c.sanitizeNumericInput)(s);return f===t.inputValue?t:(0,a.Z)((0,a.Z)({},t),{},{inputValue:f,targetValue:(0,c.calcValue)((0,a.Z)((0,a.Z)({},d),{},{inputCode:t.inputCode,targetCode:t.targetCode,inputValue:f})),favorites:(0,c.calcValueForFavorites)((0,a.Z)((0,a.Z)({},d),{},{favorites:t.favorites,inputCode:t.inputCode,inputValue:f}))});case l.E_UnitConverterActions.setTargetValue:var g=(0,c.sanitizeNumericInput)(s);if(g===t.targetValue)return t;var C=(0,c.calcValue)((0,a.Z)((0,a.Z)({},d),{},{inputCode:t.targetCode,targetCode:t.inputCode,inputValue:g}));return(0,a.Z)((0,a.Z)({},t),{},{inputValue:C,targetValue:g,favorites:(0,c.calcValueForFavorites)((0,a.Z)((0,a.Z)({},d),{},{favorites:t.favorites,inputCode:t.inputCode,inputValue:C}))});case l.E_UnitConverterActions.toggleFavorite:var p=t.favorites.filter((function(e){return e.code!==s}));return p.length<t.favorites.length?(0,a.Z)((0,a.Z)({},t),{},{favorites:p}):(0,a.Z)((0,a.Z)({},t),{},{favorites:[].concat((0,r.Z)(t.favorites),[s])});default:return t}}}},73428:function(e,t,n){var r,o,a;n.r(t),n.d(t,{E_PageCacheKeys:function(){return r},E_UnitConverterListItemActions:function(){return o},E_UnitConverterActions:function(){return a}}),function(e){e.inputCode="inputCode",e.targetCode="targetCode",e.favoriteCodes="favoriteCodes"}(r||(r={})),function(e){e.input="INPUT",e.target="TARGET"}(o||(o={})),function(e){e[e.setInputCode=0]="setInputCode",e[e.setTargetCode=1]="setTargetCode",e[e.setInputValue=2]="setInputValue",e[e.setTargetValue=3]="setTargetValue",e[e.swapInputTargetCode=4]="swapInputTargetCode",e[e.toggleFavorite=5]="toggleFavorite"}(a||(a={}))},69927:function(e,t,n){function r(e){return+e}function o(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;return r(r(e).toFixed(t))}n.r(t),n.d(t,{toNumber:function(){return r},round:function(){return o}})},82674:function(e,t,n){n.r(t),n.d(t,{default:function(){return u}});var r=n(15671),o=n(43144),a=n(89352),u=function(){function e(t){var n=this;(0,r.Z)(this,e),this.keyPrefix=void 0,this.cachedKeys=[],this.set=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=n.getPageKey(e);a.LocalStorage.setItem(r,JSON.stringify(t)),n.cachedKeys.push(e)},this.get=function(e){var t,r=n.getPageKey(e);return JSON.parse(null!==(t=a.LocalStorage.getItem(r))&&void 0!==t?t:"null")},this.remove=function(e){var t=n.getPageKey(e);a.LocalStorage.removeItem(t),n.cachedKeys=n.cachedKeys.filter((function(t){return t!==e}))},this.clearAll=function(){n.cachedKeys.forEach((function(e){return n.remove(e)})),n.cachedKeys=[]},this.keyPrefix=t}return(0,o.Z)(e,[{key:"getPageKey",value:function(e){return"".concat(this.keyPrefix,"-").concat(e)}}]),e}()},89352:function(e,t,n){n.r(t),n.d(t,{isStorageSupported:function(){return a},MemoryStorage:function(){return u},LocalStorage:function(){return i},SessionStorage:function(){return s}});var r=n(43144),o=n(15671);function a(e){try{var t=window[e],n="__storage_test__";return t.setItem(n,"1"),t.removeItem(n),!0}catch(r){return!1}}var u=(0,r.Z)((function e(){var t=this;(0,o.Z)(this,e),this.storage={},this.setItem=function(e,n){var r=n&&n.toString()||"";t.storage[e]=r},this.getItem=function(e){return t.storage[e]||""},this.removeItem=function(e){delete t.storage[e]},this.clear=function(){t.storage=(new e).storage}})),i=a("localStorage")?window.localStorage:new u,s=a("sessionStorage")?window.sessionStorage:new u},81646:function(e,t,n){n.r(t),n.d(t,{sanitizeNumericInput:function(){return a},getDefaultFavorites:function(){return u},calcValueForFavorites:function(){return i},calcValue:function(){return s}});var r=n(1413),o=n(69927);function a(e){return e.replace(/[^0-9.]/g,"").replace(/(\..*?)\..*/g,"$1").replace(/^0(\d)/,"$1")}function u(e){return e.map((function(e){return{code:e,value:""}}))}function i(e){var t=e.favorites,n=e.conversionRates,o=e.conversionFormulas,a=e.inputCode,u=e.inputValue;return t.map((function(e){return(0,r.Z)((0,r.Z)({},e),{},{value:s({conversionRates:n,conversionFormulas:o,inputCode:a,targetCode:e.code,inputValue:u})})}))}function s(e){var t=e.conversionRates,n=e.conversionFormulas,r=e.inputCode,a=e.targetCode,u=e.inputValue;return n?function(e){var t=e.conversionFormulas,n=e.inputCode,r=e.targetCode,o=e.inputValue,a=0;if(n===t.baseUnitCode)return t.fromBaseTo[r](o);return a=t.toBaseFrom[n](o),r===t.baseUnitCode?a:t.fromBaseTo[r](a)}({conversionFormulas:n,inputCode:r,targetCode:a,inputValue:u}):t?function(e){var t=e.conversionRates,n=e.inputCode,r=e.targetCode,a=e.inputValue,u=(0,o.toNumber)(a),i=t[n],s=t[r];return(0,o.round)(s*u/i)}({conversionRates:t,inputCode:r,targetCode:a,inputValue:u}):u}}}]);
//# sourceMappingURL=2929.11654e26.chunk.js.map