(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"./docs/leaderboard/data.js":function(e,n,o){"use strict";o.d(n,"a",(function(){return a}));var a=[{nickname:"Jean Valjean",score:24601},{nickname:"Vegeta",score:9e3},{nickname:"Rush",score:2112},{nickname:"Beelzebub",score:666},{nickname:"Stitch",score:626},{nickname:"Master Chief",score:117},{nickname:"Soldier: 76",score:76},{nickname:"Arthur Dent",score:42},{nickname:"Archimedes",score:3.14159},{nickname:"One-Punch Man",score:1}];"undefined"!==typeof a&&a&&a===Object(a)&&Object.isExtensible(a)&&Object.defineProperty(a,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Leaderboard",filename:"docs/leaderboard/data.js"}})},"./docs/leaderboard/module.mdx":function(e,n,o){"use strict";o.r(n),o.d(n,"default",(function(){return l}));var a=o("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),d=(o("./node_modules/react/index.js"),o("./node_modules/@mdx-js/react/dist/index.es.js")),t=o("./node_modules/docz/dist/index.esm.js"),r=o("./src/index.ts"),c=o("./docs/leaderboard/data.js"),i={},s="wrapper";function l(e){var n=e.components,o=Object(a.a)(e,["components"]);return Object(d.b)(s,Object.assign({},i,o,{components:n,mdxType:"MDXLayout"}),Object(d.b)("h1",{id:"leaderboard-module-component"},"Leaderboard Module Component"),Object(d.b)("p",null,"Use this component to integrate a Leaderboard Module"),Object(d.b)(t.c,{__position:0,__code:"<div\n  style={{\n    width: '100%',\n    maxWidth: '550px',\n    height: '650px',\n    margin: 'auto',\n  }}\n>\n  <LeaderboardModuleComponent\n    columns={['xpGained', 'coinGained', 'levelsGained']}\n    active=\"xpGained\"\n    leaderboard={Leaderboard}\n    select={(column, timespan) => console.log('select', column, timespan)}\n    updateNickname={nickname => console.log('nickname', nickname)}\n  />\n</div>",__scope:{props:this?this.props:o,Playground:t.c,Props:t.d,LeaderboardModuleComponent:r.LeaderboardModuleComponent,Leaderboard:c.a},mdxType:"Playground"},Object(d.b)("div",{style:{width:"100%",maxWidth:"550px",height:"650px",margin:"auto"}},Object(d.b)(r.LeaderboardModuleComponent,{columns:["xpGained","coinGained","levelsGained"],active:"xpGained",leaderboard:c.a,select:function(e,n){return console.log("select",e,n)},updateNickname:function(e){return console.log("nickname",e)},mdxType:"LeaderboardModuleComponent"}))),Object(d.b)(t.d,{of:r.LeaderboardModuleComponent,mdxType:"Props"}))}l&&l===Object(l)&&Object.isExtensible(l)&&Object.defineProperty(l,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"docs/leaderboard/module.mdx"}}),l.isMDXComponent=!0}}]);
//# sourceMappingURL=docs-leaderboard-module.2eb927b9f4261c97a3dc.js.map