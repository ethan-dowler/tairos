(this.webpackJsonptairos=this.webpackJsonptairos||[]).push([[0],[,,,,,,,,,,function(e,a,t){e.exports=t(28)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n={};t.r(n),t.d(n,"Monster1",(function(){return f}));var r={};t.r(r),t.d(r,"Arcanist",(function(){return H})),t.d(r,"Brawler",(function(){return F})),t.d(r,"Elementalist",(function(){return j})),t.d(r,"Guardian",(function(){return C})),t.d(r,"Ranger",(function(){return B})),t.d(r,"Shadow",(function(){return x})),t.d(r,"Squire",(function(){return R})),t.d(r,"Tactician",(function(){return G}));var l={};t.r(l),t.d(l,"Strike",(function(){return L})),t.d(l,"Block",(function(){return V})),t.d(l,"Grapple",(function(){return K})),t.d(l,"Shoot",(function(){return Q})),t.d(l,"Evade",(function(){return X})),t.d(l,"Hasten",(function(){return Z})),t.d(l,"Burn",(function(){return $})),t.d(l,"Freeze",(function(){return _})),t.d(l,"Shock",(function(){return ee})),t.d(l,"Bolster",(function(){return ae})),t.d(l,"Inspire",(function(){return te})),t.d(l,"Coordinate",(function(){return ne})),t.d(l,"Blast",(function(){return re})),t.d(l,"Unleash",(function(){return le})),t.d(l,"Protect",(function(){return ce})),t.d(l,"Misdirect",(function(){return ie})),t.d(l,"Sneak",(function(){return oe})),t.d(l,"Mimic",(function(){return se})),t.d(l,"Flurry",(function(){return de})),t.d(l,"Tackle",(function(){return me})),t.d(l,"Counter",(function(){return ue})),t.d(l,"Fetch",(function(){return ke})),t.d(l,"Accompany",(function(){return he})),t.d(l,"Resupply",(function(){return fe}));var c=t(0),i=t.n(c),o=t(8),s=t.n(o),d=t(2),m=t(5),u=t(3),k=t(4),h=t(6),f={name:"Monster 1",maxHealth:20,attack:4},y=[-2,-1,1,2,3,4,5,6],p=function(e){var a=e.takeDamage,t=function(e){var t=parseInt(e.target.dataset.amount);a(t)};return i.a.createElement("div",{className:"HealthModifier"},i.a.createElement("div",{className:"HealthModifier-title"},"Modify Health"),i.a.createElement("div",{className:"HealthModifier-buttons"},y.map((function(e){return i.a.createElement("button",{className:"HealthModifier-button",onClick:t,"data-amount":e,key:Math.random()},e<0&&"+",-1*e)}))))},E=(t(15),p),v=function(e){Object(k.a)(t,e);var a=Object(u.a)(t);function t(){var e;Object(d.a)(this,t);for(var r=arguments.length,l=new Array(r),c=0;c<r;c++)l[c]=arguments[c];return(e=a.call.apply(a,[this].concat(l))).enemyData=n[e.props.type],e.state={damageTaken:0},e.takeDamage=function(a){var t=e.state.damageTaken+a;t>e.enemyData.maxHealth&&(t=e.enemyData.maxHealth),e.setState({damageTaken:t})},e.render=function(){return i.a.createElement("div",{className:"Enemy"},i.a.createElement("div",{className:"Enemy-name"},e.enemyData.name),i.a.createElement("div",{className:"Enemy-stats"},i.a.createElement("div",{className:"Enemy-health"},"Health: ",e.enemyData.maxHealth-e.state.damageTaken),i.a.createElement("div",{className:"Enemy-attack"},"Attack: ",e.enemyData.attack)),i.a.createElement(E,{takeDamage:e.takeDamage}))},e}return t}(c.PureComponent),g=(t(16),v),D=function(e){var a=e.label,t=e.stackable,n=void 0!==t&&t;return i.a.createElement("div",{className:"Status"},i.a.createElement("label",null,n?i.a.createElement("input",{type:"number"}):i.a.createElement("input",{type:"checkbox"}),i.a.createElement("span",{className:"Status-label"},a)))},w=(t(17),D),b=function(e){var a=e.isEnemy,t=void 0!==a&&a;return i.a.createElement("div",{className:"StatusBar"},!t&&i.a.createElement(w,{label:"Fatigue",stackable:!0}),i.a.createElement(w,{label:"Stun"}),t&&i.a.createElement(w,{label:"Chill"}),t&&i.a.createElement(w,{label:"Scorch (max 3)",stackable:!0}))},S=(t(18),b),M=["None","Red","Blue","Green","Yellow"],N=function(){return i.a.createElement("label",null,i.a.createElement("span",{className:"EngagedWithSelector-label"},"Engaged With:"),i.a.createElement("select",{className:"EngagedWithSelector"},M.map((function(e){return i.a.createElement("option",{key:Math.random()},e)}))))},T=(t(19),N),I=function(e){var a=e.name,t=Object(h.a)(e,["name"]);return i.a.createElement("div",{className:"EnemyArea"},i.a.createElement("div",{className:"EnemyArea-name"},a),i.a.createElement(T,null),i.a.createElement(S,{isEnemy:!0}),i.a.createElement("div",{className:"EnemyArea-card"},i.a.createElement(g,t)))},O=(t(20),I),P=t(1),A=t(9),H={name:"Arcanist",skills:["Blast","Protect","Unleash"]},F={name:"Brawler",skills:["Counter","Flurry","Tackle"]},j={name:"Elementalist",skills:["Burn","Freeze","Shock"]},C={name:"Guardian",skills:["Block","Grapple","Strike"]},B={name:"Ranger",skills:["Evade","Hasten","Shoot"]},x={name:"Shadow",skills:["Mimic","Misdirect","Sneak"]},R={name:"Squire",skills:["Accompany","Fetch","Resupply"]},G={name:"Tactician",skills:["Bolster","Coordinate","Inspire"]},W=function(e){var a=0,t=0,n=null;for(a=e.length-1;a>0;a-=1)t=Math.floor(Math.random()*(a+1)),n=e[a],e[a]=e[t],e[t]=n;return e},Y=function(e,a){return e.reduce((function(e,t){return t===a?e+1:e}),0)},U=function(e){var a=e.skills,t=e.numberOfCards,n=e.onDraw,r=e.onMill;return i.a.createElement(c.Fragment,null,i.a.createElement("div",{className:"Deck-skills"},a.join(", ")),i.a.createElement("div",{className:"Deck-drawPileSize"},"Deck: ",t),i.a.createElement("div",{className:"Deck-actions"},!!t&&i.a.createElement("button",{onClick:n},"Draw"),!!t&&i.a.createElement("button",{onClick:r},"Mill")))},q=function(e){var a=e.skills,t=e.skillsInDiscard,n=e.onFetch;return i.a.createElement(c.Fragment,null,a.map((function(e){var a=Y(t,e);return i.a.createElement("div",{className:"Deck-discardCount",key:Math.random()},e,": ",a," ",!!a&&i.a.createElement("button",{name:e,onClick:n},"Fetch"))})))},z=function(e){Object(k.a)(t,e);var a=Object(u.a)(t);function t(){var e;Object(d.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(e=a.call.apply(a,[this].concat(l))).deckData=r[e.props.type],e.state={skillsInDeck:W([].concat(Object(P.a)(e.deckData.skills),Object(P.a)(e.deckData.skills),Object(P.a)(e.deckData.skills),Object(P.a)(e.deckData.skills),Object(P.a)(e.deckData.skills))),drawMode:!0},e.removeTopSkill=function(){var a=Object(P.a)(e.state.skillsInDeck);if(a.length){var t=a.shift();return e.setState({skillsInDeck:a}),t}},e.drawSkill=function(){var a=e.removeTopSkill();e.props.onDraw(a)},e.millSkill=function(){var a=e.removeTopSkill();e.props.onMill(a)},e.fetchSkill=function(a){if(a){var t=Object(P.a)(e.state.skillsInDeck);t.unshift(a),e.setState({skillsInDeck:t})}},e.onFetch=function(a){var t=a.target.name;e.fetchSkill(t),e.props.onFetch(t)},e.toggleDrawMode=function(){return e.setState({drawMode:!e.state.drawMode})},e}return Object(A.a)(t,[{key:"render",value:function(){return void 0===this.deckData?i.a.createElement("div",null,"Unknown Deck Type: ",this.props.type):i.a.createElement("div",{className:"Deck"},i.a.createElement("div",{className:"Deck-name"},this.deckData.name),i.a.createElement("button",{className:"Deck-modeToggle",onClick:this.toggleDrawMode},"View ",this.state.drawMode?"Discard":"Deck"),this.state.drawMode?i.a.createElement(U,{skills:this.deckData.skills,numberOfCards:this.state.skillsInDeck.length,onDraw:this.drawSkill,onMill:this.millSkill}):i.a.createElement(q,{skills:this.deckData.skills,skillsInDiscard:this.props.skillsInDiscard,onFetch:this.onFetch}))}}]),t}(c.PureComponent),J=(t(21),z),L={title:"Strike",lines:["Deal 3 damage.","If you are engaged with the target, deal 5 damage instead."]},V={title:"\u26a1 Block",lines:["Prevent up to 2 damage from an enemy attack.","If you Block a Forced Attacked, you are attacked instead and gain Inspiration."]},K={title:"Grapple",lines:["Stun an enemy that attacked you this round.","~~ or ~~","Stun an enemy that is not engaged with another player."]},Q={title:"Shoot",lines:["Deal 3 damage.","If you took no damage this Round, deal 5 damage instead."]},X={title:"\u26a1 Evade",lines:["Prevent 1 damage to you.","~~ and/or ~~","Prevent 1 status from being applied to you."]},Z={title:"Hasten",lines:["Draw 2 cards.","You may take another Action."]},$={title:"Burn",lines:["Scorch an enemy.","Deal 3 damage to each enemy for each Scorch on them.","Each enemy cannot be Scorched more than three times."]},_={title:"Freeze",lines:["Deal 3 damage and Chill the target.","If the target is already Chilled, Stun them instead."]},ee={title:"\u26a1 Shock",lines:["Draw a card.","Deal 2 damage to all Scorched enemies.","Prevent 2 damage from all Chilled enemies (if they are attacking)."]},ae={title:"Bolster",lines:["Restore 2 Health to any player.","Remove or duplicate 1 status on any player."]},te={title:"Inspire",lines:["All players draw a card and gain Inspiration."]},ne={title:"\u26a1 Coordinate",lines:["Play when an ally deals 5 or more damage to deal 5 damage.","You may target a different enemy."]},re={title:"Blast",lines:["Deal 4 damage.","If you discard this, draw a card"]},le={title:"Unleash",lines:["Multi-target","Deal 2 damage. You may discard up to 2 cards to deal 3 more damage per card."]},ce={title:"\u26a1 Protect",lines:["Multi-target","Prevent 1 damage.","You may discard up to two cards to prevent 3 more damage per card."]},ie={title:"\u26a1 Misdirect",lines:["Play when an enemy attacks to prevent up to 2 damage and deal 2 damage to a different enemy."]},oe={title:"Sneak",body:"If you are not engaged with an enemy, deal 6 damage."},se={title:"Mimic",lines:["While this is in your hand, treat it as if it were any card in an ally's hand"]},de={title:"Flurry",lines:["Multi-target","Deal 1 damage.","Mill up to 5 cards to deal 1 more damage per card."]},me={title:"Tackle",lines:["Deal 6 damage.","Take 1 damage."]},ue={title:"\u26a1 Counter",lines:["Play when you are attacked to deal 2 damage to your attacker and draw a card.","If this damage defeats them, they deal no damage."]},ke={title:"Fetch",lines:["Restore 1 Health to each player.","Each player may place 1 of their discarded cards (other than Fetch) on top of its deck."]},he={title:"\u26a1 Accompany",lines:["Play when an ally is attacked to prevent 1 damage, deal 1 damage to the attacker, and draw a card."]},fe={title:"Resupply",lines:["An ally draws 2 cards.","You may take another Action."]},ye=function(e){var a=e.type,t=e.onPlay,n=l[a];if(void 0===n)return i.a.createElement("div",null,"Unknown Skill Type: ",a);return i.a.createElement("div",{className:"Skill"},i.a.createElement("button",{className:"Skill-play",name:a,onClick:function(){return t(a)}},"Play"),i.a.createElement("div",{className:"Skill-title"},n.title),i.a.createElement("div",{className:"Skill-body"},n.lines.map((function(e){return i.a.createElement("div",{className:"Skill-bodyLine",key:Math.random()},e)}))))},pe=(t(22),ye),Ee=function(e){Object(k.a)(t,e);var a=Object(u.a)(t);function t(){var e;Object(d.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).maxHealth=16,e.state={damageTaken:0,skillsInHand:[],skillsInDiscard:[]},e.addToHand=function(a){var t=Object(P.a)(e.state.skillsInHand);t.push(a),e.setState({skillsInHand:t})},e.removeFromHand=function(a){var t=Object(P.a)(e.state.skillsInHand),n=t.indexOf(a);t.splice(n,1),e.setState({skillsInHand:t})},e.addToDiscard=function(a){var t=Object(P.a)(e.state.skillsInDiscard);t.push(a),e.setState({skillsInDiscard:t})},e.removeFromDiscard=function(a){var t=Object(P.a)(e.state.skillsInDiscard),n=t.indexOf(a);t.splice(n,1),e.setState({skillsInDiscard:t})},e.onDraw=function(a){return e.addToHand(a)},e.onMill=function(a){return e.addToDiscard(a)},e.onFetch=function(a){return e.removeFromDiscard(a)},e.onPlay=function(a){e.removeFromHand(a),e.addToDiscard(a)},e.takeDamage=function(a){var t=e.state.damageTaken+a;t>e.maxHealth&&(t=e.maxHealth),e.setState({damageTaken:t})},e.render=function(){return i.a.createElement("div",{className:"Player"},i.a.createElement("div",{className:"Player-health"},"Health: ",e.maxHealth-e.state.damageTaken),i.a.createElement(S,null),i.a.createElement(E,{takeDamage:e.takeDamage}),i.a.createElement("div",{className:"Player-cards"},i.a.createElement("div",{className:"Player-deck Player-deck--one"},i.a.createElement(J,{type:e.props.deckOneType,skillsInDiscard:e.state.skillsInDiscard,onDraw:e.onDraw,onMill:e.onMill,onFetch:e.onFetch})),i.a.createElement("div",{className:"Player-deck Player-deck--two"},i.a.createElement(J,{type:e.props.deckTwoType,skillsInDiscard:e.state.skillsInDiscard,onDraw:e.onDraw,onMill:e.onMill,onFetch:e.onFetch})),i.a.createElement("div",{className:"Player-hand"},e.state.skillsInHand.sort().map((function(a){return i.a.createElement(pe,{type:a,onPlay:e.onPlay,key:Math.random()})})))))},e}return t}(c.PureComponent),ve=(t(23),Ee),ge=function(e){var a=e.name,t=Object(h.a)(e,["name"]);return i.a.createElement("div",{className:"PlayerArea"},i.a.createElement("div",{className:"PlayerArea-name"},a),i.a.createElement(ve,t))},De=(t(24),ge),we=i.a.createContext({}),be=function(e){Object(k.a)(t,e);var a=Object(u.a)(t);function t(){var e;Object(d.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).state={wideMode:!1},e.toggleWideMode=function(){e.setState({wideMode:!e.state.wideMode})},e.render=function(){return i.a.createElement(we.Provider,{value:Object(m.a)(e)},i.a.createElement("div",{className:"App ".concat(e.state.wideMode?"wide-mode":"")},i.a.createElement("h1",{className:"App-heading"},"Welcome to Tairos"),i.a.createElement("button",{onClick:e.toggleWideMode},"Toggle Wide Mode"),i.a.createElement("div",{className:"App-content"},i.a.createElement("div",{className:"App-contentArea App-contentArea--enemies"},i.a.createElement(O,{name:"Enemy",type:"Monster1"}),i.a.createElement(O,{name:"Enemy",type:"Monster1"}),i.a.createElement(O,{name:"Enemy",type:"Monster1"})),i.a.createElement("div",{className:"App-contentArea App-contentArea--players"},i.a.createElement(De,{name:"Red",deckOneType:"Guardian",deckTwoType:"Tactician"}),i.a.createElement(De,{name:"Blue",deckOneType:"Ranger",deckTwoType:"Elementalist"}),i.a.createElement(De,{name:"Green",deckOneType:"Arcanist",deckTwoType:"Shadow"}),i.a.createElement(De,{name:"Yellow",deckOneType:"Brawler",deckTwoType:"Squire"})))))},e}return t}(c.PureComponent),Se=(t(25),t(26),t(27),document.querySelector("body"));s.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(be,null)),Se)}],[[10,1,2]]]);
//# sourceMappingURL=main.f6363d88.chunk.js.map