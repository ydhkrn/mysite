"use strict";(self.webpackChunkmysite_dev=self.webpackChunkmysite_dev||[]).push([[6377,8134],{86377:function(t,n,o){o.r(n),o.d(n,{calcChitStatus:function(){return e},calcDepositInterestTotal:function(){return i},calcChitAuctionResult:function(){return r},calcChitState:function(){return a}});var u=o(88134);function e(t){var n=(0,u.toNumber)(t.duration),o=0;n>0&&(o=(0,u.toNumber)(t.totalAmount)/n);var e=n-(0,u.toNumber)(t.noOfPaymentsSoFar),i=(0,u.toNumber)(t.totalAmount)*(0,u.toNumber)(t.agencyCommissionPercent)/100,r=(0,u.toNumber)(t.totalAmount)-i,a=0;return(0,u.toNumber)(t.lastPaymentAmount)>0&&(a=i+((0,u.toNumber)(o)-(0,u.toNumber)(t.lastPaymentAmount))*n),{monthlyPaymentAmount:o,noOfMonthsRemaining:e,agencyCommissionAmount:i,normalChitTotalInHand:r,lastAuctionBidAmount:a}}function i(t,n){return t.reduce((function(t,o){return t+(0,u.toNumber)(o.amount)*((0,u.toNumber)(o.interestRate)/100)/12*n}),0)}function r(t,n,o){var e=(0,u.toNumber)(o.normalChitTotalInHand)-((0,u.toNumber)(t.auctionBidAmount)-(0,u.toNumber)(o.agencyCommissionAmount)),i=e+n;return{auctionedChitTotalInHand:e,auctionedChitTotalInHandAndDeposits:i,diffAmountWithNormalChitTotalInHand:i-(0,u.toNumber)(o.normalChitTotalInHand)}}function a(t,n){var o=t.depositInterestTotal,a=t.chitStatus,m=t.auctionResult,c=t.deposits,s=t.chitInput;return n.deposits?(o=i(c=n.deposits,(0,u.toNumber)(t.chitStatus.noOfMonthsRemaining)-1),m=r(t.chitInput,o,t.chitStatus)):n.chitInput&&(a=e(s=n.chitInput),(0,u.toNumber)(s.auctionBidAmount)>0&&(m=r(s,(0,u.toNumber)(t.depositInterestTotal),a))),{depositInterestTotal:o,chitStatus:a,auctionResult:m,deposits:c,chitInput:s}}},88134:function(t,n,o){function u(t){return+t}function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;return u(u(t).toFixed(n))}o.r(n),o.d(n,{toNumber:function(){return u},round:function(){return e}})}}]);
//# sourceMappingURL=6377.e6afe1a4.chunk.js.map