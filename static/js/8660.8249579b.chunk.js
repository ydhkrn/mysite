"use strict";(self.webpackChunkmysite_dev=self.webpackChunkmysite_dev||[]).push([[8660],{48660:function(t,n,e){e.r(n),e.d(n,{getCompensatoryTranslationForZoom:function(){return i},getPointFromEvent:function(){return u},getElementRectMidPoint:function(){return o},getWidthRatio:function(){return c},getElementTitleFromPoint:function(){return l}});var r=e(58460);function i(t,n){return{x:-t.x*(n-1)/n,y:-t.y*(n-1)/n}}function u(t){var n={x:0,y:0};return(0,r.isTouchEvent)(t)?(n.x=t.targetTouches[0].clientX,n.y=t.targetTouches[0].clientY):(n.x=t.clientX,n.y=t.clientY),n}function o(t){if(t.current)return{x:t.current.getBoundingClientRect().width/2,y:t.current.getBoundingClientRect().height/2}}function c(t,n){if(n.current)return t.width/n.current.getBoundingClientRect().width}function l(t){var n=document.elementFromPoint(t.x,t.y);if(n){var e,r=n.dataset||n;return null!==(e=r.title)&&void 0!==e?e:r.id}return""}}}]);
//# sourceMappingURL=8660.8249579b.chunk.js.map