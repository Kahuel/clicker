(this.webpackJsonparena=this.webpackJsonparena||[]).push([[0],{24:function(e,n,t){},27:function(e,n,t){"use strict";t.r(n);var a={};t.r(a),t.d(a,"hitting",(function(){return u})),t.d(a,"weaponSwitch",(function(){return j})),t.d(a,"ugradeWeapon",(function(){return p}));var c={};t.r(c),t.d(c,"combatActions",(function(){return a}));t(0);var r=t(6),o=t.n(r),i=t(3),l=t(7),u=(t(24),function(){return{type:"HITTING"}}),j=function(e,n,t){return{type:"WEAPON_SWITCH",payload:{handSlot:e,newWeapon:n,prevWeapon:t}}},p=function(e){return{type:"UPGRADE_WEAPON",payload:{handSlot:e}}},d=t(5),b=t(2),s=t(14),O=t(4),v=t.n(O),h=function(e){return{maxHP:10*e+Math.ceil(Math.exp(e)),hp:10*e+Math.ceil(Math.exp(e))}},f=function(e){return localStorage.setItem("store",JSON.stringify(e)),e},m=function(e){return{lvl:1,name:v.a.uniqueId("Weapon_"),dmg:Math.ceil(3*Math.random())*e}},y=function(e,n){return Math.random()<.2?[].concat(Object(s.a)(n),[m(e)]):n},g={leftWeapon:{lvl:1,name:"fist1",dmg:1},rightWeapon:{lvl:1,name:"fist2",dmg:1},inventory:[]},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{lvl:1,xp:0,coins:0,player:g,enemy:h(1)},n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"HITTING":var t=e.lvl,a=e.xp,c=e.coins,r=e.player,o=e.enemy,i=r.leftWeapon.dmg+r.rightWeapon.dmg,l=o.hp-i;if(l<1){var u=y(t,r.inventory),j=a+Math.pow(t,2),p=c+Math.ceil(3*Math.random())*t,s=v.a.sortBy(u,[function(e){return e.dmg}]);if(j>=10+Math.pow(2,t+1)){var O=t+1,m=Object(b.a)(Object(b.a)({},e),{},{xp:0,coins:p,lvl:O,player:Object(b.a)(Object(b.a)({},r),{},{inventory:s}),enemy:h(t)});return f(m)}var x=Object(b.a)(Object(b.a)({},e),{},{xp:j,coins:p,player:Object(b.a)(Object(b.a)({},r),{},{inventory:s}),enemy:h(t)});return f(x)}var W=Object(b.a)(Object(b.a)({},e),{},{enemy:Object(b.a)(Object(b.a)({},e.enemy),{},{hp:l})});return f(W);case"WEAPON_SWITCH":var S,w=n.payload,M=w.handSlot,I=w.newWeapon,A=w.prevWeapon,N=e.player.inventory.map((function(e){return e.name===I.name?A:e})),P=v.a.sortBy(N,[function(e){return e.dmg}]);return Object(b.a)(Object(b.a)({},e),{},{player:Object(b.a)(Object(b.a)({},e.player),{},(S={},Object(d.a)(S,M,I),Object(d.a)(S,"inventory",P),S))});case"UPGRADE_WEAPON":console.log(e);var H=n.payload.handSlot,E=e.player[H];if(E.lvl>9)return alert("Maximum lvl reached"),e;var k=e.coins-e.lvl*E.lvl;if(k<0)return e;var C=Object(b.a)(Object(b.a)({},e),{},{coins:k,player:Object(b.a)(Object(b.a)({},e.player),{},Object(d.a)({},H,Object(b.a)(Object(b.a)({},E),{},{dmg:E.dmg+e.lvl,lvl:E.lvl+1})))});return f(C);default:return e}},W=t(1),S=function(){var e=Object(i.b)();return Object(W.jsx)("div",{children:Object(W.jsx)("button",{onClick:function(){e(c.combatActions.hitting())},children:"Attack"})})},w=function(e){var n=Object(i.c)((function(e){return e.player.inventory})),t=Object(i.c)((function(e){return e.lvl})),c=Object(i.b)(),r=e.handSlot,o=e.weapon;return Object(W.jsxs)("div",{children:[Object(W.jsxs)("select",{onChange:function(e){e.preventDefault(),c(a.weaponSwitch(r,n[Number(e.target.value)],o))},children:[Object(W.jsx)("option",{selected:!0,children:"".concat(o.name," (").concat(o.dmg," dmg)")}),n.map((function(e,n){return Object(W.jsx)("option",{value:n,children:"".concat(e.name," (").concat(e.dmg," dmg)")},v.a.uniqueId("key"))}))]}),Object(W.jsx)("button",{onClick:function(){c(a.ugradeWeapon(r))},children:10===o.lvl?"Max lvl":"Upgrade for ".concat(t*o.lvl," (+").concat(t," dmg)")})]})},M=function(e){var n=e.hp,t=e.maxHP;return Object(W.jsx)("div",{children:"".concat(n,"/").concat(t)})},I=function(){var e=Object(i.c)((function(e){return e.player})),n=e.leftWeapon,t=e.rightWeapon,a=Object(i.c)((function(e){return e.coins}));return Object(W.jsxs)("div",{children:[Object(W.jsx)("div",{children:"Coins: ".concat(a)}),Object(W.jsx)(w,{handSlot:"leftWeapon",weapon:n}),Object(W.jsx)(w,{handSlot:"rightWeapon",weapon:t})]})},A=function(){var e=Object(i.c)((function(e){return e.enemy})),n=e.hp,t=e.maxHP;return Object(W.jsx)("div",{children:Object(W.jsx)(M,{hp:n,maxHP:t})})},N=function(){return Object(W.jsxs)("div",{className:"App",children:[Object(W.jsx)(I,{}),Object(W.jsx)(S,{}),Object(W.jsx)(A,{})]})},P=Object(l.b)(x,function(){var e=localStorage.getItem("store");if(e)return JSON.parse(e)}());o.a.render(Object(W.jsx)(i.a,{store:P,children:Object(W.jsx)(N,{})}),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.71fcc752.chunk.js.map