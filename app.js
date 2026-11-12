var mf=[{id:"entry",title:"\u7EDF\u4E00\u63A5\u5165",body:"\u7814\u53D1\u5DE5\u5177\u3001\u4E1A\u52A1\u7CFB\u7EDF\u4E0E\u4F01\u4E1A\u667A\u80FD\u4F53\u901A\u8FC7\u7EDF\u4E00\u5165\u53E3\u8C03\u7528\u83B7\u51C6\u7684\u6A21\u578B\u8D44\u6E90\u3002"},{id:"gate",title:"\u8EAB\u4EFD\u6388\u6743\u4E0E\u989D\u5EA6",body:"\u6839\u636E\u7528\u6237\u6216\u667A\u80FD\u4F53\u7684\u8EAB\u4EFD\uFF0C\u6838\u5BF9\u6A21\u578B\u3001\u6E20\u9053\u548C\u5DE5\u5177\u6388\u6743\uFF0C\u5E76\u6309\u5DF2\u914D\u7F6E\u7684\u989D\u5EA6\u7B56\u7565\u6267\u884C\u3002"},{id:"scan",title:"AI \u5B89\u5168\u9632\u62A4",body:"\u8BF7\u6C42\u8F6C\u53D1\u524D\u548C\u54CD\u5E94\u8FD4\u56DE\u65F6\u5206\u522B\u68C0\u67E5\u5185\u5BB9\u3002\u53EF\u6839\u636E\u89C4\u5219\u8BB0\u5F55\u3001\u544A\u8B66\u6216\u963B\u65AD\u3002"},{id:"route",title:"\u6A21\u578B\u8DEF\u7531\u4E0E\u5BB9\u707E",body:"\u901A\u8FC7\u4F18\u5148\u7EA7\u3001\u6743\u91CD\u4E0E\u5065\u5EB7\u72B6\u6001\u9009\u62E9\u6E20\u9053\u3002\u4E3B\u6E20\u9053\u5F02\u5E38\u65F6\uFF0C\u53EF\u6309\u914D\u7F6E\u91CD\u8BD5\u6216\u5207\u6362\u3002"},{id:"tools",title:"MCP \u4E0E Skill \u7BA1\u7406",body:"MCP \u7F51\u5173\u7BA1\u7406\u5DE5\u5177\u63A5\u5165\u4E0E\u8C03\u7528\u6388\u6743\u3002Skill \u5E73\u53F0\u63D0\u4F9B\u72EC\u7ACB\u7684\u5BA1\u6838\u3001\u53D1\u5E03\u548C\u7248\u672C\u7BA1\u7406\u3002"},{id:"ops",title:"Token \u8FD0\u8425\u4E0E\u5BA1\u8BA1",body:"\u67E5\u8BE2\u90E8\u95E8\u3001\u6A21\u578B\u3001\u6E20\u9053\u3001Token \u7528\u91CF\u4E0E\u8D39\u7528\uFF0C\u7ED3\u5408\u65E5\u5FD7\u5B9A\u4F4D\u5F02\u5E38\uFF0C\u5E76\u4E3A\u5E2D\u4F4D\u914D\u7F6E\u4E0E\u91C7\u8D2D\u5BF9\u8D26\u63D0\u4F9B\u4F9D\u636E\u3002"}],Zl={providers:"\u4E24\u5BB6\u6A21\u578B\u7EDF\u4E00\u63A5\u5165",policy:"\u6743\u9650\u4E0E\u989D\u5EA6\u5BF9\u7167",response:"\u6A21\u578B\u54CD\u5E94\u62E6\u622A",normal:"\u6B63\u5E38\u8C03\u7528",failover:"\u4E3B\u6E20\u9053\u6545\u969C",sensitive:"\u654F\u611F\u4FE1\u606F\u62E6\u622A",injection:"\u63D0\u793A\u8BCD\u6CE8\u5165\u9632\u62A4"},Xt=(i,e,t,n,s,r,o=3,a="ok")=>({label:i,zone:e,title:t,copy:n,facts:s,track:r,duration:o,tone:a}),co=[["access","entry","\u7814\u53D1\u52A9\u624B\u3001\u4E1A\u52A1\u5E94\u7528\u548C\u4F01\u4E1A\u667A\u80FD\u4F53\uFF0C\u4ECE\u540C\u4E00\u5165\u53E3\u63A5\u5165\u4F01\u4E1A AI \u8D44\u6E90\u3002",5],["policy","gate","\u7F51\u5173\u6309\u7528\u6237\u6216\u667A\u80FD\u4F53\u8EAB\u4EFD\u6821\u9A8C\u6A21\u578B\u548C\u5DE5\u5177\u6743\u9650\uFF0C\u5E76\u6267\u884C\u90E8\u95E8\u4E0E\u7528\u6237\u7684\u7528\u91CF\u989D\u5EA6\u3002",5.2],["security","scan","\u8BF7\u6C42\u548C\u54CD\u5E94\u53CC\u5411\u68C0\u67E5\u3002\u63D0\u793A\u8BCD\u6CE8\u5165\u3001\u654F\u611F\u4FE1\u606F\u7B49\u98CE\u9669\u6309\u4F01\u4E1A\u7B56\u7565\u8BB0\u5F55\u3001\u544A\u8B66\u6216\u963B\u65AD\u3002",5.6],["routing","route","\u7EDF\u4E00\u7BA1\u7406\u5DF2\u63A5\u5165\u7684\u6A21\u578B\u548C\u6E20\u9053\u3002\u6309\u4F18\u5148\u7EA7\u3001\u6743\u91CD\u548C\u5065\u5EB7\u72B6\u6001\u5206\u6D41\uFF0C\u5F02\u5E38\u65F6\u91CD\u8BD5\u6216\u5207\u6362\u3002",5.4],["resources","tools","MCP \u5DE5\u5177\u6309\u6743\u9650\u5F00\u653E\u8C03\u7528\uFF1BSkill \u5728\u7F51\u5173\u5185\u5355\u72EC\u5BA1\u6838\u3001\u53D1\u5E03\u5E76\u7BA1\u7406\u7248\u672C\u3002",5.4],["operations","ops","\u8FD0\u8425\u5BA4\u6C47\u603B\u5404\u90E8\u95E8\u7684 Token\u3001\u8D39\u7528\u548C\u6E20\u9053\u7528\u91CF\uFF0C\u5E76\u53EF\u56DE\u67E5\u6BCF\u6B21\u8C03\u7528\u7684\u5904\u7F6E\u7ED3\u679C\u3002",5.4]].map(([i,e,t,n],s)=>({id:i,chapter:"overview",zone:e,label:mf[s].title,number:s+1,copy:t,duration:n,track:[],tone:"ok"})),Jl={...Xt("\u54CD\u5E94\u62E6\u622A","scan","\u6A21\u578B\u54CD\u5E94\u547D\u4E2D\u89C4\u5219","\u8BF7\u6C42\u5DF2\u5230\u8FBE\u6A21\u578B\uFF0C\u8FD4\u56DE\u5185\u5BB9\u547D\u4E2D\u54CD\u5E94\u4FA7\u793A\u4F8B\u89C4\u5219\u3002",{},["scan","route","fork","main"],12,"risk"),risk:"response",returnTrack:["main","fork","route","scan"]},$l=[{vendor:"\u4F9B\u5E94\u5546 A",model:"\u6A21\u578B A",channel:"main",task:"\u5206\u6790\u63A5\u53E3\u62A5\u9519"},{vendor:"\u4F9B\u5E94\u5546 B",model:"\u6A21\u578B B",channel:"backup",task:"\u6574\u7406\u6392\u67E5\u6E05\u5355"}],Kl=[{label:"\u6743\u9650\u62D2\u7EDD",permission:"\u672A\u6388\u6743",quota:"1,200 Token",reason:"\u8EAB\u4EFD\u6709\u6548\uFF0C\u4F46\u672A\u83B7\u6A21\u578B B \u7684\u8C03\u7528\u6743\u9650\u3002"},{label:"\u989D\u5EA6\u62D2\u7EDD",permission:"\u5DF2\u6388\u6743",quota:"0 Token",reason:"\u6A21\u578B B \u5DF2\u83B7\u6388\u6743\uFF0C\u4F46\u90E8\u95E8 Token \u989D\u5EA6\u5DF2\u7528\u5C3D\u3002"}],lc={normal:"\u6B63\u5E38\u8BF7\u6C42",sensitive:"\u654F\u611F\u4FE1\u606F",injection:"\u63D0\u793A\u8BCD\u6CE8\u5165",response:"\u54CD\u5E94\u62E6\u622A"};function jl(i){let e=Object.hasOwn(lc,i)?i:"normal";if(e==="response")return{...Jl,comparison:e};let t=fi(e)[2];return e==="normal"?{...t,comparison:e,track:["scan","route","fork","main"],duration:7}:{...t,comparison:e}}function Ql(i,e,t){let n=e==="tour"?{"DEMO-042":"\u6545\u969C\u5207\u6362","DEMO-043":"\u5B89\u5168\u62E6\u622A","DEMO-044":"\u6CE8\u5165\u62E6\u622A"}[t]:{normal:"\u8BF7\u6C42\u68C0\u67E5",failover:"\u6545\u969C\u5207\u6362",sensitive:"\u5B89\u5168\u62E6\u622A",injection:"\u6CE8\u5165\u62E6\u622A",quota:"\u989D\u5EA6\u62D2\u7EDD",response:"\u54CD\u5E94\u62E6\u622A"}[e];return n?i.findIndex(s=>s.label===n):-1}var gf=["\u4E09\u4E2A\u5E94\u7528\uFF0C\u5171\u7528\u4E00\u4E2A\u5165\u53E3\u3002","\u6309\u8EAB\u4EFD\u6388\u6743\uFF0C\u6309\u989D\u5EA6\u8C03\u7528\u3002","\u53D1\u51FA\u7684\u8BF7\u6C42\u548C\u8FD4\u56DE\u7684\u54CD\u5E94\u90FD\u8981\u8FC7\u68C0\u3002","\u4E3B\u6E20\u9053\u5F02\u5E38\u65F6\uFF0C\u5207\u6362\u5907\u7528\u6E20\u9053\u3002","MCP \u6309\u6743\u9650\u8C03\u7528\uFF0CSkill \u7ECF\u5BA1\u6838\u53D1\u5E03\u3002","\u8D39\u7528\u5F52\u5230\u90E8\u95E8\uFF0C\u8C03\u7528\u53EF\u4EE5\u9010\u7B14\u8FFD\u6EAF\u3002"];function fi(i){if(i==="quick")return co.map((l,c)=>({...l,brief:!0,copy:gf[c],duration:c===0||c===5?3.6:3.2}));if(i==="providers")return[...$l.map((c,h)=>{let u=["entry","gate","scan","route","fork",c.channel];return{...Xt("\u8C03\u7528\u6A21\u578B "+(h+1),"route","\u540C\u4E00\u5165\u53E3\u8C03\u7528\u4E0D\u540C\u6A21\u578B","",{},u,9),provider:c,returnTrack:[...u].reverse()}}),Xt("\u8C03\u7528\u56DE\u6267","ops","\u4E24\u6B21\u72EC\u7ACB\u8C03\u7528\u6210\u529F","",{},[],2)];if(i==="policy")return[...Kl.map(c=>({...Xt(c.label,"gate","\u6743\u9650\u4E0E\u989D\u5EA6\u5BF9\u7167",c.reason,{},["entry","gate"],6,"risk"),policy:c})),Xt("\u62D2\u7EDD\u56DE\u6267","ops","\u4E24\u6B21\u8BF7\u6C42\u5747\u5728\u5165\u53E3\u88AB\u62D2\u7EDD","",{},[],2)];if(i==="response")return[Jl,Xt("\u5BA1\u8BA1\u56DE\u6267","ops","\u54CD\u5E94\u5DF2\u963B\u65AD","",{},[],2)];if(i==="tour"){let[l,c,h,u,m,d]=fi("failover"),g=fi("sensitive")[2],v=fi("injection")[2];return[...co,{...l,duration:3.1},{...c,duration:3.2},{...h,duration:4.7},{...u,duration:10},{...m,duration:5.2},{...g,track:["entry","gate","scan"]},{...v,track:["entry","gate","scan"]},{...d,label:"\u5BA1\u8BA1\u56DE\u6267",duration:2.4}]}let e=Xt("\u53D1\u8D77\u8C03\u7528","entry","\u7814\u53D1\u56E2\u961F\u53D1\u8D77\u63A5\u53E3\u62A5\u9519\u5206\u6790","\u7814\u53D1\u4EBA\u5458\u63D0\u4EA4\u63A5\u53E3\u62A5\u9519\u6458\u8981\u3002\u7814\u53D1\u5DE5\u5177\u901A\u8FC7\u7EDF\u4E00 AI \u7F51\u5173\u53D1\u8D77\u8C03\u7528\uFF0C\u5E73\u53F0\u6309\u914D\u7F6E\u8BC6\u522B\u8BF7\u6C42\u8EAB\u4EFD\u3002",{\u53D1\u8D77\u90E8\u95E8:"\u7814\u53D1\u90E8",\u8BF7\u6C42\u5BF9\u8C61:"\u6A21\u578B\u670D\u52A1",\u8BF7\u6C42\u7F16\u53F7:"DEMO-042",\u63A5\u5165\u65B9\u5F0F:"\u7EDF\u4E00\u670D\u52A1\u5730\u5740"},["entry","gate"]),t=i==="quota"?Xt("\u989D\u5EA6\u62D2\u7EDD","gate","\u7814\u53D1\u90E8\u989D\u5EA6\u5DF2\u7528\u5C3D","\u793A\u610F\u7B56\u7565\u8BBE\u4E3A\u8D85\u989D\u963B\u65AD\u3002\u7F51\u5173\u5728\u989D\u5EA6\u95F8\u53E3\u62D2\u7EDD\u8FD9\u6B21\u8C03\u7528\uFF0C\u8BF7\u6C42\u6CA1\u6709\u5230\u8FBE\u4E0A\u6E38\u6A21\u578B\u3002",{\u89E6\u53D1\u8303\u56F4:"\u7814\u53D1\u90E8",\u5269\u4F59\u989D\u5EA6:"0 Token",\u5904\u7F6E\u7ED3\u679C:"\u62D2\u7EDD\u8F6C\u53D1",\u4E0A\u6E38\u8C03\u7528:"\u672A\u53D1\u8D77"},["gate"],3,"risk"):Xt("\u6388\u6743\u4E0E\u989D\u5EA6","gate","\u786E\u8BA4\u8EAB\u4EFD\u3001\u6A21\u578B\u6743\u9650\u4E0E\u53EF\u7528\u989D\u5EA6","\u7814\u53D1\u90E8\u7684\u8C03\u7528\u8EAB\u4EFD\u548C\u6A21\u578B\u6743\u9650\u901A\u8FC7\u6821\u9A8C\uFF0C\u5F53\u524D\u90E8\u95E8\u989D\u5EA6\u5145\u8DB3\u3002\u8BF7\u6C42\u524D\u5F80\u5185\u5BB9\u68C0\u67E5\u8231\u3002",{\u8EAB\u4EFD\u6821\u9A8C:"\u901A\u8FC7",\u8D44\u6E90\u6388\u6743:"\u6A21\u578B A",\u90E8\u95E8\u989D\u5EA6:"\u53EF\u7528",\u4E0A\u6E38\u8C03\u7528:"\u5F85\u8F6C\u53D1"},["gate","scan"]),n=i==="injection"?{...Xt("\u6CE8\u5165\u62E6\u622A","scan","\u63D0\u793A\u8BCD\u6CE8\u5165\u9632\u62A4","\u793A\u610F\u9644\u4EF6\u5939\u5E26\u8BD5\u56FE\u6539\u53D8\u4EFB\u52A1\u7684\u5F02\u5E38\u6307\u4EE4\u3002\u6309\u9884\u8BBE\u963B\u65AD\u7B56\u7565\uFF0C\u7F51\u5173\u6CA1\u6709\u628A\u8BF7\u6C42\u8F6C\u53D1\u81F3\u6A21\u578B\u3002",{\u65B9\u5411:"\u8BF7\u6C42\u65B9\u5411",\u547D\u4E2D\u89C4\u5219:"\u63D0\u793A\u8BCD\u6CE8\u5165\uFF08\u793A\u610F\uFF09",\u5904\u7F6E:"\u963B\u65AD",\u4E0A\u6E38\u8C03\u7528:"\u672A\u53D1\u8D77"},["gate","scan"],13,"risk"),risk:"injection"}:i==="sensitive"?Xt("\u5B89\u5168\u62E6\u622A","scan","\u542B\u654F\u611F\u5B57\u6BB5\u7684\u8BF7\u6C42\u88AB\u62E6\u4E0B","\u8FD9\u6B21\u8BF7\u6C42\u9644\u5E26\u4E86\u542B\u865A\u6784\u654F\u611F\u4FE1\u606F\u7684\u8BCA\u65AD\u6837\u4F8B\u3002\u51FA\u7AD9\u68C0\u67E5\u547D\u4E2D\u6F14\u793A\u89C4\u5219\uFF0C\u7F51\u5173\u963B\u65AD\u8BF7\u6C42\u5E76\u8BB0\u5F55\u5B89\u5168\u4E8B\u4EF6\u3002",{\u68C0\u67E5\u65B9\u5411:"\u8BF7\u6C42 \u2192 \u4E0A\u6E38",\u547D\u4E2D\u89C4\u5219:"\u654F\u611F\u4FE1\u606F\u5916\u53D1",\u5904\u7F6E\u7ED3\u679C:"\u6309\u7B56\u7565\u963B\u65AD",\u4E0A\u6E38\u8C03\u7528:"\u672A\u53D1\u8D77"},["gate","scan"],9,"risk"):Xt("\u8BF7\u6C42\u68C0\u67E5","scan","\u5728\u8F6C\u53D1\u524D\u68C0\u67E5\u8BF7\u6C42\u5185\u5BB9","\u8FD9\u6B21\u62A5\u9519\u6458\u8981\u901A\u8FC7\u8BF7\u6C42\u65B9\u5411\u7684\u5B89\u5168\u68C0\u67E5\uFF0C\u7F51\u5173\u968F\u540E\u5C06\u4EFB\u52A1\u8F6C\u53D1\u5230\u83B7\u51C6\u7684\u6A21\u578B\u6E20\u9053\u3002",{\u68C0\u67E5\u65B9\u5411:"\u8BF7\u6C42 \u2192 \u4E0A\u6E38",\u547D\u4E2D\u89C4\u5219:"\u65E0",\u5904\u7F6E\u7ED3\u679C:"\u653E\u884C",\u6388\u6743\u6A21\u578B:"\u6A21\u578B A"},["scan","route"],4.1),s=i==="failover"?Xt("\u6545\u969C\u5207\u6362","route","\u4E3B\u6E20\u9053\u8D85\u65F6\uFF0C\u5207\u6362\u5230\u83B7\u51C6\u7684\u5907\u7528\u6E20\u9053","\u7F51\u5173\u6309\u9884\u8BBE\u7B56\u7565\u5904\u7406\u4E3B\u6E20\u9053\u8D85\u65F6\u3002\u540C\u4E00\u6A21\u578B\u901A\u8FC7\u5DF2\u914D\u7F6E\u4E14\u83B7\u51C6\u7684\u5907\u7528\u6E20\u9053\u91CD\u8BD5\u3002",{\u4E3B\u6E20\u9053:"\u8D85\u65F6",\u5907\u7528\u6E20\u9053:"\u5DF2\u83B7\u51C6",\u6267\u884C\u7B56\u7565:"\u5207\u6362\u5E76\u91CD\u8BD5",\u6A21\u578B:"\u6A21\u578B A"},["route","fork","main","fork","backup"],10,"risk"):Xt("\u9009\u62E9\u6E20\u9053","route","\u628A\u8BF7\u6C42\u53D1\u7ED9\u53EF\u7528\u7684\u6A21\u578B\u6E20\u9053","\u8C03\u5EA6\u53F0\u6839\u636E\u6388\u6743\u8303\u56F4\u4E0E\u6E20\u9053\u72B6\u6001\u9009\u4E2D\u4E3B\u6E20\u9053\u3002\u4E3B\u6E20\u9053\u63A5\u6536\u8BF7\u6C42\u5E76\u8FD4\u56DE\u5206\u6790\u7ED3\u679C\u3002",{\u6A21\u578B:"\u6A21\u578B A",\u5F53\u524D\u6E20\u9053:"\u4E3B\u6E20\u9053",\u6E20\u9053\u72B6\u6001:"\u53EF\u7528",\u8C03\u5EA6\u4F9D\u636E:"\u6388\u6743\u4E0E\u6E20\u9053\u4F18\u5148\u7EA7"},["route","fork","main"],5),r=Xt("\u54CD\u5E94\u68C0\u67E5","scan","\u68C0\u67E5\u6A21\u578B\u54CD\u5E94\uFF0C\u8FD4\u56DE\u8BCA\u65AD\u5EFA\u8BAE","\u8FD4\u56DE\u5185\u5BB9\u901A\u8FC7\u54CD\u5E94\u65B9\u5411\u68C0\u67E5\u3002\u7814\u53D1\u4EBA\u5458\u6536\u5230\u8BCA\u65AD\u5EFA\u8BAE\uFF1A\u5148\u786E\u8BA4\u8BF7\u6C42\u53C2\u6570\uFF0C\u518D\u6838\u5BF9\u63A5\u53E3\u8D85\u65F6\u914D\u7F6E\u3002",{\u68C0\u67E5\u65B9\u5411:"\u4E0A\u6E38 \u2192 \u5E94\u7528",\u5904\u7F6E\u7ED3\u679C:"\u653E\u884C",\u8FD4\u56DE\u72B6\u6001:"\u6210\u529F",\u5EFA\u8BAE:"\u68C0\u67E5\u53C2\u6570\u4E0E\u8D85\u65F6"},[i==="failover"?"backup":"main","fork","route","scan","gate","entry"],6),a=i==="sensitive"||i==="injection"||i==="quota"?Xt("\u67E5\u770B\u8BB0\u5F55","ops","\u590D\u6838\u8FD9\u6B21\u62D2\u7EDD\u7684\u539F\u56E0","\u8FD0\u8425\u6216\u5B89\u5168\u4EBA\u5458\u6309\u8BF7\u6C42\u7F16\u53F7\u67E5\u770B\u7ED3\u679C\uFF0C\u6838\u5BF9\u89E6\u53D1\u89C4\u5219\u4E0E\u5904\u7F6E\u72B6\u6001\u3002\u8BE5\u793A\u4F8B\u672A\u53D1\u8D77\u4E0A\u6E38\u6A21\u578B\u8C03\u7528\u3002",{\u8BF7\u6C42\u7F16\u53F7:"DEMO-042",\u7ED3\u679C:"\u5DF2\u62D2\u7EDD",\u4E0A\u6E38\u6A21\u578B\u7528\u91CF:"\u672A\u4EA7\u751F",\u8BB0\u5F55\u5185\u5BB9:"\u62D2\u7EDD\u539F\u56E0\u4E0E\u5904\u7F6E\u7ED3\u679C"},[],3):Xt("\u67E5\u770B\u8BB0\u5F55","ops","\u628A\u7528\u91CF\u4E0E\u8D39\u7528\u5F52\u5230\u5BF9\u5E94\u90E8\u95E8","\u8FD0\u8425\u4EBA\u5458\u53EF\u4EE5\u6309\u8BF7\u6C42\u7F16\u53F7\u590D\u6838\u8C03\u7528\u8EAB\u4EFD\u3001\u6E20\u9053\u4E0E\u7528\u91CF\u3002\u793A\u4F8B\u8D39\u7528\u6309\u5185\u90E8\u8BA1\u4EF7\u53E3\u5F84\u5C55\u793A\uFF0C\u53EF\u7528\u4E8E\u90E8\u95E8\u6210\u672C\u5F52\u96C6\u3002",{\u8BF7\u6C42\u7F16\u53F7:"DEMO-042",\u8D39\u7528\u5F52\u5C5E:"\u7814\u53D1\u90E8",\u6A21\u578B\u7528\u91CF:"1,240 Token\uFF08\u793A\u610F\uFF09",\u5185\u90E8\u8BA1\u4EF7:"\xA50.012\uFF08\u793A\u610F\uFF09"},[],3);return i==="quota"?[e,t,a]:i==="sensitive"||i==="injection"?[e,t,n,a]:[e,t,n,s,r,a]}function eh(i){if(i==="providers")return{summary:"\u540C\u4E00\u5165\u53E3 \xB7 \u4E24\u5BB6\u6A21\u578B\u5747\u5DF2\u8FD4\u56DE",rows:[["\u8C03\u7528\u5E94\u7528","\u7814\u53D1\u52A9\u624B"],["\u7F51\u5173\u5165\u53E3","\u540C\u4E00\u670D\u52A1\u5730\u5740"],...$l.map(({vendor:s,model:r})=>[s,r+" \xB7 \u5DF2\u8FD4\u56DE"])]};if(i==="policy")return{summary:"\u4E24\u6B21\u8BF7\u6C42\u5747\u672A\u8C03\u7528\u4E0A\u6E38",rows:[["\u8C03\u7528\u5E94\u7528","\u7814\u53D1\u90E8 \xB7 \u7814\u53D1\u52A9\u624B"],["\u8BF7\u6C42\u5BF9\u8C61","\u6A21\u578B B"],...Kl.map(({label:s,permission:r,quota:o})=>[s,r+" \xB7 \u5269\u4F59 "+o]),["\u4E0A\u6E38\u8C03\u7528","\u4E24\u6B21\u5747\u672A\u53D1\u8D77"]]};if(i==="response")return{summary:"\u6A21\u578B\u5DF2\u54CD\u5E94 \xB7 \u5185\u5BB9\u672A\u4EA4\u8FD8\u5E94\u7528",rows:[["\u8BF7\u6C42\u7F16\u53F7","DEMO-045"],["\u8C03\u7528\u8EAB\u4EFD","\u7814\u53D1\u90E8 \xB7 \u7814\u53D1\u52A9\u624B"],["\u4E0A\u6E38\u8C03\u7528","\u5DF2\u53D1\u8D77 \xB7 \u6A21\u578B\u5DF2\u8FD4\u56DE"],["\u68C0\u67E5\u65B9\u5411","\u6A21\u578B \u2192 \u7F51\u5173 \u2192 \u5E94\u7528"],["\u547D\u4E2D\u89C4\u5219","\u54CD\u5E94\u542B\u654F\u611F\u5B57\u6BB5\uFF08\u793A\u610F\uFF09"],["\u5904\u7F6E\u7ED3\u679C","\u963B\u65AD\u54CD\u5E94 \xB7 \u5E94\u7528\u4EC5\u6536\u5230\u7B56\u7565\u63D0\u793A"]]};let e=i==="sensitive"||i==="injection"||i==="quota",t=i==="failover"||i==="tour",n=[["\u8C03\u7528\u8EAB\u4EFD","\u7814\u53D1\u90E8 \xB7 \u7814\u53D1\u5DE5\u5177"],["\u8BF7\u6C42\u7F16\u53F7",i==="tour"?"DEMO-042 / 043 / 044":"DEMO-042"],["\u68C0\u67E5\u7ED3\u679C",i==="tour"?"\u6B63\u5E38\u653E\u884C \xB7 \u4E24\u6B21\u98CE\u9669\u8BF7\u6C42\u5DF2\u963B\u65AD":e?"\u5DF2\u6309\u7B56\u7565\u62D2\u7EDD":"\u8BF7\u6C42\u53CA\u54CD\u5E94\u5747\u901A\u8FC7\u68C0\u67E5"],["\u6A21\u578B\u6E20\u9053",e?"\u672A\u8F6C\u53D1\u81F3\u4E0A\u6E38":t?"\u4E3B\u6E20\u9053\u8D85\u65F6 \xB7 \u5907\u7528\u6E20\u9053\u91CD\u8BD5\u6210\u529F":"\u4E3B\u6E20\u9053 \xB7 \u6B63\u5E38\u8FD4\u56DE"],...i==="failover"?[["\u6E20\u9053\u8868\u73B0","\u4E3B\u6E20\u9053 2.00 \u79D2\u8D85\u65F6 \xB7 \u5907\u7528 0.86 \u79D2\u8FD4\u56DE"]]:[],["\u547D\u4E2D\u89C4\u5219",i==="tour"?"\u654F\u611F\u4FE1\u606F\u5916\u53D1 / \u63D0\u793A\u8BCD\u6CE8\u5165\uFF08\u793A\u610F\uFF09":i==="injection"?"\u63D0\u793A\u8BCD\u6CE8\u5165\uFF08\u793A\u610F\uFF09":i==="sensitive"?"\u654F\u611F\u4FE1\u606F\u5916\u53D1\uFF08\u793A\u610F\uFF09":i==="quota"?"\u90E8\u95E8\u989D\u5EA6\u5DF2\u7528\u5C3D":"\u65E0"],["\u4E0A\u6E38\u7528\u91CF",e?"\u672A\u4EA7\u751F":i==="tour"?"\u6B63\u5E38\u8BF7\u6C42 1,240 Token \xB7 \u62E6\u622A\u8BF7\u6C42\u672A\u4EA7\u751F":"1,240 Token\uFF08\u793A\u610F\uFF09"],["\u5185\u90E8\u8BA1\u4EF7",e?"\u672A\u4EA7\u751F":i==="tour"?"\u653E\u884C\u8BF7\u6C42 \xA50.012 \xB7 \u62E6\u622A\u8BF7\u6C42\u672A\u4EA7\u751F":"\xA50.012\uFF08\u793A\u610F\uFF09"]];return{summary:i==="tour"?"1 \u6B21\u6210\u529F\u8FD4\u56DE \xB7 2 \u6B21\u62E6\u622A\u672A\u5916\u53D1":e?"\u5DF2\u62D2\u7EDD \xB7 \u672A\u8F6C\u53D1\u81F3\u4E0A\u6E38":t?"\u5907\u7528\u6E20\u9053\u91CD\u8BD5\u6210\u529F":"\u5DF2\u5B8C\u6210 \xB7 \u8BF7\u6C42\u4E0E\u54CD\u5E94\u901A\u8FC7\u68C0\u67E5",rows:n}}var Ah=0,qc=1,Ch=2;var Hr=1,Rh=2,Hn=3,ei=0,tn=1,an=2,si=0,Gi=1,Yc=2,Zc=3,Jc=4,Ih=5,Mi=100,Ph=101,Lh=102,Dh=103,Uh=104,Nh=200,Fh=201,Oh=202,Bh=203,Do=204,Uo=205,kh=206,zh=207,Vh=208,Hh=209,Gh=210,Wh=211,Xh=212,qh=213,Yh=214,oa=0,aa=1,ca=2,Wi=3,la=4,ha=5,ua=6,fa=7,$c=0,Zh=1,Jh=2,ri=0,$h=1,Kh=2,jh=3,Qh=4,eu=5,tu=6,nu=7;var Kc=300,Ki=301,ji=302,Gs=303,da=304,Gr=306,Cs=1e3,yi=1001,No=1002,on=1003,iu=1004;var Wr=1005;var Vt=1006,pa=1007;var Ci=1008;var Dn=1009,jc=1010,Qc=1011,Ws=1012,ma=1013,Ri=1014,_n=1015,Xs=1016,ga=1017,_a=1018,qs=1020,el=35902,tl=35899,nl=1021,il=1022,cn=1023,Rs=1026,Ys=1027,xa=1028,va=1029,sl=1030,ya=1031;var Ma=1033,Xr=33776,qr=33777,Yr=33778,Zr=33779,Sa=35840,ba=35841,Ta=35842,wa=35843,Ea=36196,Aa=37492,Ca=37496,Ra=37808,Ia=37809,Pa=37810,La=37811,Da=37812,Ua=37813,Na=37814,Fa=37815,Oa=37816,Ba=37817,ka=37818,za=37819,Va=37820,Ha=37821,Ga=36492,Wa=36494,Xa=36495,qa=36283,Ya=36284,Za=36285,Ja=36286;var pr=2300,Fo=2301,Lo=2302,Nc=2400,Fc=2401,Oc=2402;var su=3200,ru=3201;var rl=0,ou=1,oi="",Ut="srgb",Xi="srgb-linear",mr="linear",St="srgb";var Vi=7680;var Bc=519,au=512,cu=513,lu=514,ol=515,hu=516,uu=517,fu=518,du=519,kc=35044,Jr=35048;var al="300 es",In=2e3,gr=2001;var ti=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},qt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],th=1234567,hr=Math.PI/180,Is=180/Math.PI;function Qi(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(qt[i&255]+qt[i>>8&255]+qt[i>>16&255]+qt[i>>24&255]+"-"+qt[e&255]+qt[e>>8&255]+"-"+qt[e>>16&15|64]+qt[e>>24&255]+"-"+qt[t&63|128]+qt[t>>8&255]+"-"+qt[t>>16&255]+qt[t>>24&255]+qt[n&255]+qt[n>>8&255]+qt[n>>16&255]+qt[n>>24&255]).toLowerCase()}function lt(i,e,t){return Math.max(e,Math.min(t,i))}function cl(i,e){return(i%e+e)%e}function _f(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function xf(i,e,t){return i!==e?(t-i)/(e-i):0}function ur(i,e,t){return(1-t)*i+t*e}function vf(i,e,t,n){return ur(i,e,1-Math.exp(-t*n))}function yf(i,e=1){return e-Math.abs(cl(i,e*2)-e)}function Mf(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Sf(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function bf(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Tf(i,e){return i+Math.random()*(e-i)}function wf(i){return i*(.5-Math.random())}function Ef(i){i!==void 0&&(th=i);let e=th+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Af(i){return i*hr}function Cf(i){return i*Is}function Rf(i){return(i&i-1)===0&&i!==0}function If(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Pf(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Lf(i,e,t,n,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),m=o((e-n)/2),d=r((n-e)/2),g=o((n-e)/2);switch(s){case"XYX":i.set(a*h,l*u,l*m,a*c);break;case"YZY":i.set(l*m,a*h,l*u,a*c);break;case"ZXZ":i.set(l*u,l*m,a*h,a*c);break;case"XZX":i.set(a*h,l*g,l*d,a*c);break;case"YXY":i.set(l*d,a*h,l*g,a*c);break;case"ZYZ":i.set(l*g,l*d,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Es(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function jt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var ot={DEG2RAD:hr,RAD2DEG:Is,generateUUID:Qi,clamp:lt,euclideanModulo:cl,mapLinear:_f,inverseLerp:xf,lerp:ur,damp:vf,pingpong:yf,smoothstep:Mf,smootherstep:Sf,randInt:bf,randFloat:Tf,randFloatSpread:wf,seededRandom:Ef,degToRad:Af,radToDeg:Cf,isPowerOfTwo:Rf,ceilPowerOfTwo:If,floorPowerOfTwo:Pf,setQuaternionFromProperEuler:Lf,normalize:jt,denormalize:Es},Ne=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=lt(this.x,e.x,t.x),this.y=lt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=lt(this.x,e,t),this.y=lt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(lt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(lt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ni=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],m=r[o+0],d=r[o+1],g=r[o+2],v=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=m,e[t+1]=d,e[t+2]=g,e[t+3]=v;return}if(u!==v||l!==m||c!==d||h!==g){let p=1-a,f=l*m+c*d+h*g+u*v,_=f>=0?1:-1,S=1-f*f;if(S>Number.EPSILON){let R=Math.sqrt(S),b=Math.atan2(R,f*_);p=Math.sin(p*b)/R,a=Math.sin(a*b)/R}let x=a*_;if(l=l*p+m*x,c=c*p+d*x,h=h*p+g*x,u=u*p+v*x,p===1-a){let R=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=R,c*=R,h*=R,u*=R}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[o],m=r[o+1],d=r[o+2],g=r[o+3];return e[t]=a*g+h*u+l*d-c*m,e[t+1]=l*g+h*m+c*u-a*d,e[t+2]=c*g+h*d+a*m-l*u,e[t+3]=h*g-a*u-l*m-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(r/2),m=l(n/2),d=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=m*h*u+c*d*g,this._y=c*d*u-m*h*g,this._z=c*h*g+m*d*u,this._w=c*h*u-m*d*g;break;case"YXZ":this._x=m*h*u+c*d*g,this._y=c*d*u-m*h*g,this._z=c*h*g-m*d*u,this._w=c*h*u+m*d*g;break;case"ZXY":this._x=m*h*u-c*d*g,this._y=c*d*u+m*h*g,this._z=c*h*g+m*d*u,this._w=c*h*u-m*d*g;break;case"ZYX":this._x=m*h*u-c*d*g,this._y=c*d*u+m*h*g,this._z=c*h*g-m*d*u,this._w=c*h*u+m*d*g;break;case"YZX":this._x=m*h*u+c*d*g,this._y=c*d*u+m*h*g,this._z=c*h*g-m*d*u,this._w=c*h*u-m*d*g;break;case"XZY":this._x=m*h*u-c*d*g,this._y=c*d*u-m*h*g,this._z=c*h*g+m*d*u,this._w=c*h*u+m*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],m=n+a+u;if(m>0){let d=.5/Math.sqrt(m+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(n>a&&n>u){let d=2*Math.sqrt(1+n-a-u);this._w=(h-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>u){let d=2*Math.sqrt(1+a-n-u);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+u-n-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(lt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let d=1-t;return this._w=d*o+t*this._w,this._x=d*n+t*this._x,this._y=d*s+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-t)*h)/c,m=Math.sin(t*h)/c;return this._w=o*u+this._w*m,this._x=n*u+this._x*m,this._y=s*u+this._y*m,this._z=r*u+this._z*m,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},N=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(nh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(nh.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*n),h=2*(a*t-r*s),u=2*(r*n-o*t);return this.x=t+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=lt(this.x,e.x,t.x),this.y=lt(this.y,e.y,t.y),this.z=lt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=lt(this.x,e,t),this.y=lt(this.y,e,t),this.z=lt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(lt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return hc.copy(this).projectOnVector(e),this.sub(hc)}reflect(e){return this.sub(hc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(lt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},hc=new N,nh=new ni,at=class i{constructor(e,t,n,s,r,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c)}set(e,t,n,s,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],m=n[2],d=n[5],g=n[8],v=s[0],p=s[3],f=s[6],_=s[1],S=s[4],x=s[7],R=s[2],b=s[5],I=s[8];return r[0]=o*v+a*_+l*R,r[3]=o*p+a*S+l*b,r[6]=o*f+a*x+l*I,r[1]=c*v+h*_+u*R,r[4]=c*p+h*S+u*b,r[7]=c*f+h*x+u*I,r[2]=m*v+d*_+g*R,r[5]=m*p+d*S+g*b,r[8]=m*f+d*x+g*I,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,m=a*l-h*r,d=c*r-o*l,g=t*u+n*m+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/g;return e[0]=u*v,e[1]=(s*c-h*n)*v,e[2]=(a*n-s*o)*v,e[3]=m*v,e[4]=(h*t-s*l)*v,e[5]=(s*r-a*t)*v,e[6]=d*v,e[7]=(n*l-c*t)*v,e[8]=(o*t-n*r)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(uc.makeScale(e,t)),this}rotate(e){return this.premultiply(uc.makeRotation(-e)),this}translate(e,t){return this.premultiply(uc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},uc=new at;function ll(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function _r(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function pu(){let i=_r("canvas");return i.style.display="block",i}var ih={};function Ps(i){i in ih||(ih[i]=!0,console.warn(i))}function mu(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var sh=new at().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),rh=new at().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Df(){let i={enabled:!0,workingColorSpace:Xi,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===St&&(s.r=Qn(s.r),s.g=Qn(s.g),s.b=Qn(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===St&&(s.r=As(s.r),s.g=As(s.g),s.b=As(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===oi?mr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Ps("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Ps("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Xi]:{primaries:e,whitePoint:n,transfer:mr,toXYZ:sh,fromXYZ:rh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ut},outputColorSpaceConfig:{drawingBufferColorSpace:Ut}},[Ut]:{primaries:e,whitePoint:n,transfer:St,toXYZ:sh,fromXYZ:rh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ut}}}),i}var gt=Df();function Qn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function As(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var ds,Oo=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ds===void 0&&(ds=_r("canvas")),ds.width=e.width,ds.height=e.height;let s=ds.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=ds}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=_r("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Qn(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Qn(t[n]/255)*255):t[n]=Qn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Uf=0,Ls=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Uf++}),this.uuid=Qi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(fc(s[o].image)):r.push(fc(s[o]))}else r=fc(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function fc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Oo.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Nf=0,dc=new N,en=class i extends ti{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=yi,s=yi,r=Vt,o=Ci,a=cn,l=Dn,c=i.DEFAULT_ANISOTROPY,h=oi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Nf++}),this.uuid=Qi(),this.name="",this.source=new Ls(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ne(0,0),this.repeat=new Ne(1,1),this.center=new Ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new at,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(dc).x}get height(){return this.source.getSize(dc).y}get depth(){return this.source.getSize(dc).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Kc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Cs:e.x=e.x-Math.floor(e.x);break;case yi:e.x=e.x<0?0:1;break;case No:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Cs:e.y=e.y-Math.floor(e.y);break;case yi:e.y=e.y<0?0:1;break;case No:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};en.DEFAULT_IMAGE=null;en.DEFAULT_MAPPING=Kc;en.DEFAULT_ANISOTROPY=1;var At=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],u=l[8],m=l[1],d=l[5],g=l[9],v=l[2],p=l[6],f=l[10];if(Math.abs(h-m)<.01&&Math.abs(u-v)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+m)<.1&&Math.abs(u+v)<.1&&Math.abs(g+p)<.1&&Math.abs(c+d+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let S=(c+1)/2,x=(d+1)/2,R=(f+1)/2,b=(h+m)/4,I=(u+v)/4,P=(g+p)/4;return S>x&&S>R?S<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(S),s=b/n,r=I/n):x>R?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=b/s,r=P/s):R<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),n=I/r,s=P/r),this.set(n,s,r,t),this}let _=Math.sqrt((p-g)*(p-g)+(u-v)*(u-v)+(m-h)*(m-h));return Math.abs(_)<.001&&(_=1),this.x=(p-g)/_,this.y=(u-v)/_,this.z=(m-h)/_,this.w=Math.acos((c+d+f-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=lt(this.x,e.x,t.x),this.y=lt(this.y,e.y,t.y),this.z=lt(this.z,e.z,t.z),this.w=lt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=lt(this.x,e,t),this.y=lt(this.y,e,t),this.z=lt(this.z,e,t),this.w=lt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(lt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Bo=class extends ti{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Vt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new At(0,0,e,t),this.scissorTest=!1,this.viewport=new At(0,0,e,t);let s={width:e,height:t,depth:n.depth},r=new en(s);this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){let t={minFilter:Vt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Ls(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},bn=class extends Bo{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},xr=class extends en{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=on,this.minFilter=on,this.wrapR=yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var ko=class extends en{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=on,this.minFilter=on,this.wrapR=yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Bn=class{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(An.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(An.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=An.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,An):An.fromBufferAttribute(r,o),An.applyMatrix4(e.matrixWorld),this.expandByPoint(An);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),lo.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),lo.copy(n.boundingBox)),lo.applyMatrix4(e.matrixWorld),this.union(lo)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,An),An.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ir),ho.subVectors(this.max,ir),ps.subVectors(e.a,ir),ms.subVectors(e.b,ir),gs.subVectors(e.c,ir),di.subVectors(ms,ps),pi.subVectors(gs,ms),Oi.subVectors(ps,gs);let t=[0,-di.z,di.y,0,-pi.z,pi.y,0,-Oi.z,Oi.y,di.z,0,-di.x,pi.z,0,-pi.x,Oi.z,0,-Oi.x,-di.y,di.x,0,-pi.y,pi.x,0,-Oi.y,Oi.x,0];return!pc(t,ps,ms,gs,ho)||(t=[1,0,0,0,1,0,0,0,1],!pc(t,ps,ms,gs,ho))?!1:(uo.crossVectors(di,pi),t=[uo.x,uo.y,uo.z],pc(t,ps,ms,gs,ho))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,An).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(An).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Zn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Zn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Zn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Zn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Zn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Zn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Zn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Zn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Zn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Zn=[new N,new N,new N,new N,new N,new N,new N,new N],An=new N,lo=new Bn,ps=new N,ms=new N,gs=new N,di=new N,pi=new N,Oi=new N,ir=new N,ho=new N,uo=new N,Bi=new N;function pc(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Bi.fromArray(i,r);let a=s.x*Math.abs(Bi.x)+s.y*Math.abs(Bi.y)+s.z*Math.abs(Bi.z),l=e.dot(Bi),c=t.dot(Bi),h=n.dot(Bi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Ff=new Bn,sr=new N,mc=new N,Si=class{constructor(e=new N,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Ff.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;sr.subVectors(e,this.center);let t=sr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(sr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(mc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(sr.copy(e.center).add(mc)),this.expandByPoint(sr.copy(e.center).sub(mc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Jn=new N,gc=new N,fo=new N,mi=new N,_c=new N,po=new N,xc=new N,zo=class{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Jn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Jn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Jn.copy(this.origin).addScaledVector(this.direction,t),Jn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){gc.copy(e).add(t).multiplyScalar(.5),fo.copy(t).sub(e).normalize(),mi.copy(this.origin).sub(gc);let r=e.distanceTo(t)*.5,o=-this.direction.dot(fo),a=mi.dot(this.direction),l=-mi.dot(fo),c=mi.lengthSq(),h=Math.abs(1-o*o),u,m,d,g;if(h>0)if(u=o*l-a,m=o*a-l,g=r*h,u>=0)if(m>=-g)if(m<=g){let v=1/h;u*=v,m*=v,d=u*(u+o*m+2*a)+m*(o*u+m+2*l)+c}else m=r,u=Math.max(0,-(o*m+a)),d=-u*u+m*(m+2*l)+c;else m=-r,u=Math.max(0,-(o*m+a)),d=-u*u+m*(m+2*l)+c;else m<=-g?(u=Math.max(0,-(-o*r+a)),m=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+m*(m+2*l)+c):m<=g?(u=0,m=Math.min(Math.max(-r,-l),r),d=m*(m+2*l)+c):(u=Math.max(0,-(o*r+a)),m=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+m*(m+2*l)+c);else m=o>0?-r:r,u=Math.max(0,-(o*m+a)),d=-u*u+m*(m+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(gc).addScaledVector(fo,m),d}intersectSphere(e,t){Jn.subVectors(e.center,this.origin);let n=Jn.dot(this.direction),s=Jn.dot(Jn)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,m=this.origin;return c>=0?(n=(e.min.x-m.x)*c,s=(e.max.x-m.x)*c):(n=(e.max.x-m.x)*c,s=(e.min.x-m.x)*c),h>=0?(r=(e.min.y-m.y)*h,o=(e.max.y-m.y)*h):(r=(e.max.y-m.y)*h,o=(e.min.y-m.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-m.z)*u,l=(e.max.z-m.z)*u):(a=(e.max.z-m.z)*u,l=(e.min.z-m.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Jn)!==null}intersectTriangle(e,t,n,s,r){_c.subVectors(t,e),po.subVectors(n,e),xc.crossVectors(_c,po);let o=this.direction.dot(xc),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;mi.subVectors(this.origin,e);let l=a*this.direction.dot(po.crossVectors(mi,po));if(l<0)return null;let c=a*this.direction.dot(_c.cross(mi));if(c<0||l+c>o)return null;let h=-a*mi.dot(xc);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Tt=class i{constructor(e,t,n,s,r,o,a,l,c,h,u,m,d,g,v,p){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c,h,u,m,d,g,v,p)}set(e,t,n,s,r,o,a,l,c,h,u,m,d,g,v,p){let f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=m,f[3]=d,f[7]=g,f[11]=v,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/_s.setFromMatrixColumn(e,0).length(),r=1/_s.setFromMatrixColumn(e,1).length(),o=1/_s.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let m=o*h,d=o*u,g=a*h,v=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=d+g*c,t[5]=m-v*c,t[9]=-a*l,t[2]=v-m*c,t[6]=g+d*c,t[10]=o*l}else if(e.order==="YXZ"){let m=l*h,d=l*u,g=c*h,v=c*u;t[0]=m+v*a,t[4]=g*a-d,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=d*a-g,t[6]=v+m*a,t[10]=o*l}else if(e.order==="ZXY"){let m=l*h,d=l*u,g=c*h,v=c*u;t[0]=m-v*a,t[4]=-o*u,t[8]=g+d*a,t[1]=d+g*a,t[5]=o*h,t[9]=v-m*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let m=o*h,d=o*u,g=a*h,v=a*u;t[0]=l*h,t[4]=g*c-d,t[8]=m*c+v,t[1]=l*u,t[5]=v*c+m,t[9]=d*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let m=o*l,d=o*c,g=a*l,v=a*c;t[0]=l*h,t[4]=v-m*u,t[8]=g*u+d,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=d*u+g,t[10]=m-v*u}else if(e.order==="XZY"){let m=o*l,d=o*c,g=a*l,v=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=m*u+v,t[5]=o*h,t[9]=d*u-g,t[2]=g*u-d,t[6]=a*h,t[10]=v*u+m}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Of,e,Bf)}lookAt(e,t,n){let s=this.elements;return un.subVectors(e,t),un.lengthSq()===0&&(un.z=1),un.normalize(),gi.crossVectors(n,un),gi.lengthSq()===0&&(Math.abs(n.z)===1?un.x+=1e-4:un.z+=1e-4,un.normalize(),gi.crossVectors(n,un)),gi.normalize(),mo.crossVectors(un,gi),s[0]=gi.x,s[4]=mo.x,s[8]=un.x,s[1]=gi.y,s[5]=mo.y,s[9]=un.y,s[2]=gi.z,s[6]=mo.z,s[10]=un.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],m=n[9],d=n[13],g=n[2],v=n[6],p=n[10],f=n[14],_=n[3],S=n[7],x=n[11],R=n[15],b=s[0],I=s[4],P=s[8],T=s[12],M=s[1],A=s[5],L=s[9],X=s[13],$=s[2],se=s[6],te=s[10],xe=s[14],ne=s[3],Ce=s[7],Ue=s[11],D=s[15];return r[0]=o*b+a*M+l*$+c*ne,r[4]=o*I+a*A+l*se+c*Ce,r[8]=o*P+a*L+l*te+c*Ue,r[12]=o*T+a*X+l*xe+c*D,r[1]=h*b+u*M+m*$+d*ne,r[5]=h*I+u*A+m*se+d*Ce,r[9]=h*P+u*L+m*te+d*Ue,r[13]=h*T+u*X+m*xe+d*D,r[2]=g*b+v*M+p*$+f*ne,r[6]=g*I+v*A+p*se+f*Ce,r[10]=g*P+v*L+p*te+f*Ue,r[14]=g*T+v*X+p*xe+f*D,r[3]=_*b+S*M+x*$+R*ne,r[7]=_*I+S*A+x*se+R*Ce,r[11]=_*P+S*L+x*te+R*Ue,r[15]=_*T+S*X+x*xe+R*D,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],m=e[10],d=e[14],g=e[3],v=e[7],p=e[11],f=e[15];return g*(+r*l*u-s*c*u-r*a*m+n*c*m+s*a*d-n*l*d)+v*(+t*l*d-t*c*m+r*o*m-s*o*d+s*c*h-r*l*h)+p*(+t*c*u-t*a*d-r*o*u+n*o*d+r*a*h-n*c*h)+f*(-s*a*h-t*l*u+t*a*m+s*o*u-n*o*m+n*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],m=e[10],d=e[11],g=e[12],v=e[13],p=e[14],f=e[15],_=u*p*c-v*m*c+v*l*d-a*p*d-u*l*f+a*m*f,S=g*m*c-h*p*c-g*l*d+o*p*d+h*l*f-o*m*f,x=h*v*c-g*u*c+g*a*d-o*v*d-h*a*f+o*u*f,R=g*u*l-h*v*l-g*a*m+o*v*m+h*a*p-o*u*p,b=t*_+n*S+s*x+r*R;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let I=1/b;return e[0]=_*I,e[1]=(v*m*r-u*p*r-v*s*d+n*p*d+u*s*f-n*m*f)*I,e[2]=(a*p*r-v*l*r+v*s*c-n*p*c-a*s*f+n*l*f)*I,e[3]=(u*l*r-a*m*r-u*s*c+n*m*c+a*s*d-n*l*d)*I,e[4]=S*I,e[5]=(h*p*r-g*m*r+g*s*d-t*p*d-h*s*f+t*m*f)*I,e[6]=(g*l*r-o*p*r-g*s*c+t*p*c+o*s*f-t*l*f)*I,e[7]=(o*m*r-h*l*r+h*s*c-t*m*c-o*s*d+t*l*d)*I,e[8]=x*I,e[9]=(g*u*r-h*v*r-g*n*d+t*v*d+h*n*f-t*u*f)*I,e[10]=(o*v*r-g*a*r+g*n*c-t*v*c-o*n*f+t*a*f)*I,e[11]=(h*a*r-o*u*r-h*n*c+t*u*c+o*n*d-t*a*d)*I,e[12]=R*I,e[13]=(h*v*s-g*u*s+g*n*m-t*v*m-h*n*p+t*u*p)*I,e[14]=(g*a*s-o*v*s-g*n*l+t*v*l+o*n*p-t*a*p)*I,e[15]=(o*u*s-h*a*s+h*n*l-t*u*l-o*n*m+t*a*m)*I,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,u=a+a,m=r*c,d=r*h,g=r*u,v=o*h,p=o*u,f=a*u,_=l*c,S=l*h,x=l*u,R=n.x,b=n.y,I=n.z;return s[0]=(1-(v+f))*R,s[1]=(d+x)*R,s[2]=(g-S)*R,s[3]=0,s[4]=(d-x)*b,s[5]=(1-(m+f))*b,s[6]=(p+_)*b,s[7]=0,s[8]=(g+S)*I,s[9]=(p-_)*I,s[10]=(1-(m+v))*I,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=_s.set(s[0],s[1],s[2]).length(),o=_s.set(s[4],s[5],s[6]).length(),a=_s.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Cn.copy(this);let c=1/r,h=1/o,u=1/a;return Cn.elements[0]*=c,Cn.elements[1]*=c,Cn.elements[2]*=c,Cn.elements[4]*=h,Cn.elements[5]*=h,Cn.elements[6]*=h,Cn.elements[8]*=u,Cn.elements[9]*=u,Cn.elements[10]*=u,t.setFromRotationMatrix(Cn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=In,l=!1){let c=this.elements,h=2*r/(t-e),u=2*r/(n-s),m=(t+e)/(t-e),d=(n+s)/(n-s),g,v;if(l)g=r/(o-r),v=o*r/(o-r);else if(a===In)g=-(o+r)/(o-r),v=-2*o*r/(o-r);else if(a===gr)g=-o/(o-r),v=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=m,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=In,l=!1){let c=this.elements,h=2/(t-e),u=2/(n-s),m=-(t+e)/(t-e),d=-(n+s)/(n-s),g,v;if(l)g=1/(o-r),v=o/(o-r);else if(a===In)g=-2/(o-r),v=-(o+r)/(o-r);else if(a===gr)g=-1/(o-r),v=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=m,c[1]=0,c[5]=u,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},_s=new N,Cn=new Tt,Of=new N(0,0,0),Bf=new N(1,1,1),gi=new N,mo=new N,un=new N,oh=new Tt,ah=new ni,Pn=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],m=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(lt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(m,c),this._z=0);break;case"YXZ":this._x=Math.asin(-lt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(lt(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-lt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(m,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(lt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-lt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(m,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return oh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(oh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ah.setFromEuler(this),this.setFromQuaternion(ah,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Pn.DEFAULT_ORDER="XYZ";var vr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},kf=0,ch=new N,xs=new ni,$n=new Tt,go=new N,rr=new N,zf=new N,Vf=new ni,lh=new N(1,0,0),hh=new N(0,1,0),uh=new N(0,0,1),fh={type:"added"},Hf={type:"removed"},vs={type:"childadded",child:null},vc={type:"childremoved",child:null},Ht=class i extends ti{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:kf++}),this.uuid=Qi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new N,t=new Pn,n=new ni,s=new N(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Tt},normalMatrix:{value:new at}}),this.matrix=new Tt,this.matrixWorld=new Tt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new vr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return xs.setFromAxisAngle(e,t),this.quaternion.multiply(xs),this}rotateOnWorldAxis(e,t){return xs.setFromAxisAngle(e,t),this.quaternion.premultiply(xs),this}rotateX(e){return this.rotateOnAxis(lh,e)}rotateY(e){return this.rotateOnAxis(hh,e)}rotateZ(e){return this.rotateOnAxis(uh,e)}translateOnAxis(e,t){return ch.copy(e).applyQuaternion(this.quaternion),this.position.add(ch.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(lh,e)}translateY(e){return this.translateOnAxis(hh,e)}translateZ(e){return this.translateOnAxis(uh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4($n.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?go.copy(e):go.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),rr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$n.lookAt(rr,go,this.up):$n.lookAt(go,rr,this.up),this.quaternion.setFromRotationMatrix($n),s&&($n.extractRotation(s.matrixWorld),xs.setFromRotationMatrix($n),this.quaternion.premultiply(xs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(fh),vs.child=e,this.dispatchEvent(vs),vs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Hf),vc.child=e,this.dispatchEvent(vc),vc.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),$n.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),$n.multiply(e.parent.matrixWorld)),e.applyMatrix4($n),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(fh),vs.child=e,this.dispatchEvent(vs),vs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rr,e,zf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rr,Vf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),m=o(e.skeletons),d=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),m.length>0&&(n.skeletons=m),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};Ht.DEFAULT_UP=new N(0,1,0);Ht.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Rn=new N,Kn=new N,yc=new N,jn=new N,ys=new N,Ms=new N,dh=new N,Mc=new N,Sc=new N,bc=new N,Tc=new At,wc=new At,Ec=new At,vi=class i{constructor(e=new N,t=new N,n=new N){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Rn.subVectors(e,t),s.cross(Rn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Rn.subVectors(s,t),Kn.subVectors(n,t),yc.subVectors(e,t);let o=Rn.dot(Rn),a=Rn.dot(Kn),l=Rn.dot(yc),c=Kn.dot(Kn),h=Kn.dot(yc),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let m=1/u,d=(c*l-a*h)*m,g=(o*h-a*l)*m;return r.set(1-d-g,g,d)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,jn)===null?!1:jn.x>=0&&jn.y>=0&&jn.x+jn.y<=1}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,jn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,jn.x),l.addScaledVector(o,jn.y),l.addScaledVector(a,jn.z),l)}static getInterpolatedAttribute(e,t,n,s,r,o){return Tc.setScalar(0),wc.setScalar(0),Ec.setScalar(0),Tc.fromBufferAttribute(e,t),wc.fromBufferAttribute(e,n),Ec.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Tc,r.x),o.addScaledVector(wc,r.y),o.addScaledVector(Ec,r.z),o}static isFrontFacing(e,t,n,s){return Rn.subVectors(n,t),Kn.subVectors(e,t),Rn.cross(Kn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Rn.subVectors(this.c,this.b),Kn.subVectors(this.a,this.b),Rn.cross(Kn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;ys.subVectors(s,n),Ms.subVectors(r,n),Mc.subVectors(e,n);let l=ys.dot(Mc),c=Ms.dot(Mc);if(l<=0&&c<=0)return t.copy(n);Sc.subVectors(e,s);let h=ys.dot(Sc),u=Ms.dot(Sc);if(h>=0&&u<=h)return t.copy(s);let m=l*u-h*c;if(m<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(ys,o);bc.subVectors(e,r);let d=ys.dot(bc),g=Ms.dot(bc);if(g>=0&&d<=g)return t.copy(r);let v=d*c-l*g;if(v<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(Ms,a);let p=h*g-d*u;if(p<=0&&u-h>=0&&d-g>=0)return dh.subVectors(r,s),a=(u-h)/(u-h+(d-g)),t.copy(s).addScaledVector(dh,a);let f=1/(p+v+m);return o=v*f,a=m*f,t.copy(n).addScaledVector(ys,o).addScaledVector(Ms,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},gu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_i={h:0,s:0,l:0},_o={h:0,s:0,l:0};function Ac(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var rt=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ut){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,gt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=gt.workingColorSpace){return this.r=e,this.g=t,this.b=n,gt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=gt.workingColorSpace){if(e=cl(e,1),t=lt(t,0,1),n=lt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Ac(o,r,e+1/3),this.g=Ac(o,r,e),this.b=Ac(o,r,e-1/3)}return gt.colorSpaceToWorking(this,s),this}setStyle(e,t=Ut){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ut){let n=gu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Qn(e.r),this.g=Qn(e.g),this.b=Qn(e.b),this}copyLinearToSRGB(e){return this.r=As(e.r),this.g=As(e.g),this.b=As(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ut){return gt.workingToColorSpace(Yt.copy(this),e),Math.round(lt(Yt.r*255,0,255))*65536+Math.round(lt(Yt.g*255,0,255))*256+Math.round(lt(Yt.b*255,0,255))}getHexString(e=Ut){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=gt.workingColorSpace){gt.workingToColorSpace(Yt.copy(this),t);let n=Yt.r,s=Yt.g,r=Yt.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=gt.workingColorSpace){return gt.workingToColorSpace(Yt.copy(this),t),e.r=Yt.r,e.g=Yt.g,e.b=Yt.b,e}getStyle(e=Ut){gt.workingToColorSpace(Yt.copy(this),e);let t=Yt.r,n=Yt.g,s=Yt.b;return e!==Ut?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(_i),this.setHSL(_i.h+e,_i.s+t,_i.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(_i),e.getHSL(_o);let n=ur(_i.h,_o.h,t),s=ur(_i.s,_o.s,t),r=ur(_i.l,_o.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Yt=new rt;rt.NAMES=gu;var Gf=0,bi=class extends ti{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Gf++}),this.uuid=Qi(),this.name="",this.type="Material",this.blending=Gi,this.side=ei,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Do,this.blendDst=Uo,this.blendEquation=Mi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new rt(0,0,0),this.blendAlpha=0,this.depthFunc=Wi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Bc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Vi,this.stencilZFail=Vi,this.stencilZPass=Vi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Gi&&(n.blending=this.blending),this.side!==ei&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Do&&(n.blendSrc=this.blendSrc),this.blendDst!==Uo&&(n.blendDst=this.blendDst),this.blendEquation!==Mi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Wi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Bc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Vi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Vi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Vi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},dn=class extends bi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pn,this.combine=$c,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Dt=new N,xo=new Ne,Wf=0,Nt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Wf++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=kc,this.updateRanges=[],this.gpuType=_n,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)xo.fromBufferAttribute(this,t),xo.applyMatrix3(e),this.setXY(t,xo.x,xo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.applyMatrix3(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.applyMatrix4(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.applyNormalMatrix(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.transformDirection(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Es(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=jt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Es(t,this.array)),t}setX(e,t){return this.normalized&&(t=jt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Es(t,this.array)),t}setY(e,t){return this.normalized&&(t=jt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Es(t,this.array)),t}setZ(e,t){return this.normalized&&(t=jt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Es(t,this.array)),t}setW(e,t){return this.normalized&&(t=jt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=jt(t,this.array),n=jt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=jt(t,this.array),n=jt(n,this.array),s=jt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=jt(t,this.array),n=jt(n,this.array),s=jt(s,this.array),r=jt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==kc&&(e.usage=this.usage),e}};var yr=class extends Nt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Mr=class extends Nt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var yt=class extends Nt{constructor(e,t,n){super(new Float32Array(e),t,n)}},Xf=0,Mn=new Tt,Cc=new Ht,Ss=new N,fn=new Bn,or=new Bn,zt=new N,Ft=class i extends ti{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Xf++}),this.uuid=Qi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ll(e)?Mr:yr)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new at().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Mn.makeRotationFromQuaternion(e),this.applyMatrix4(Mn),this}rotateX(e){return Mn.makeRotationX(e),this.applyMatrix4(Mn),this}rotateY(e){return Mn.makeRotationY(e),this.applyMatrix4(Mn),this}rotateZ(e){return Mn.makeRotationZ(e),this.applyMatrix4(Mn),this}translate(e,t,n){return Mn.makeTranslation(e,t,n),this.applyMatrix4(Mn),this}scale(e,t,n){return Mn.makeScale(e,t,n),this.applyMatrix4(Mn),this}lookAt(e){return Cc.lookAt(e),Cc.updateMatrix(),this.applyMatrix4(Cc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ss).negate(),this.translate(Ss.x,Ss.y,Ss.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new yt(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Bn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];fn.setFromBufferAttribute(r),this.morphTargetsRelative?(zt.addVectors(this.boundingBox.min,fn.min),this.boundingBox.expandByPoint(zt),zt.addVectors(this.boundingBox.max,fn.max),this.boundingBox.expandByPoint(zt)):(this.boundingBox.expandByPoint(fn.min),this.boundingBox.expandByPoint(fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Si);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(e){let n=this.boundingSphere.center;if(fn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];or.setFromBufferAttribute(a),this.morphTargetsRelative?(zt.addVectors(fn.min,or.min),fn.expandByPoint(zt),zt.addVectors(fn.max,or.max),fn.expandByPoint(zt)):(fn.expandByPoint(or.min),fn.expandByPoint(or.max))}fn.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)zt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(zt));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)zt.fromBufferAttribute(a,c),l&&(Ss.fromBufferAttribute(e,c),zt.add(Ss)),s=Math.max(s,n.distanceToSquared(zt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Nt(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<n.count;P++)a[P]=new N,l[P]=new N;let c=new N,h=new N,u=new N,m=new Ne,d=new Ne,g=new Ne,v=new N,p=new N;function f(P,T,M){c.fromBufferAttribute(n,P),h.fromBufferAttribute(n,T),u.fromBufferAttribute(n,M),m.fromBufferAttribute(r,P),d.fromBufferAttribute(r,T),g.fromBufferAttribute(r,M),h.sub(c),u.sub(c),d.sub(m),g.sub(m);let A=1/(d.x*g.y-g.x*d.y);isFinite(A)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(u,-d.y).multiplyScalar(A),p.copy(u).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(A),a[P].add(v),a[T].add(v),a[M].add(v),l[P].add(p),l[T].add(p),l[M].add(p))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let P=0,T=_.length;P<T;++P){let M=_[P],A=M.start,L=M.count;for(let X=A,$=A+L;X<$;X+=3)f(e.getX(X+0),e.getX(X+1),e.getX(X+2))}let S=new N,x=new N,R=new N,b=new N;function I(P){R.fromBufferAttribute(s,P),b.copy(R);let T=a[P];S.copy(T),S.sub(R.multiplyScalar(R.dot(T))).normalize(),x.crossVectors(b,T);let A=x.dot(l[P])<0?-1:1;o.setXYZW(P,S.x,S.y,S.z,A)}for(let P=0,T=_.length;P<T;++P){let M=_[P],A=M.start,L=M.count;for(let X=A,$=A+L;X<$;X+=3)I(e.getX(X+0)),I(e.getX(X+1)),I(e.getX(X+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Nt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let m=0,d=n.count;m<d;m++)n.setXYZ(m,0,0,0);let s=new N,r=new N,o=new N,a=new N,l=new N,c=new N,h=new N,u=new N;if(e)for(let m=0,d=e.count;m<d;m+=3){let g=e.getX(m+0),v=e.getX(m+1),p=e.getX(m+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,v),o.fromBufferAttribute(t,p),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,p),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let m=0,d=t.count;m<d;m+=3)s.fromBufferAttribute(t,m+0),r.fromBufferAttribute(t,m+1),o.fromBufferAttribute(t,m+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(m+0,h.x,h.y,h.z),n.setXYZ(m+1,h.x,h.y,h.z),n.setXYZ(m+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)zt.fromBufferAttribute(e,t),zt.normalize(),e.setXYZ(t,zt.x,zt.y,zt.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,u=a.normalized,m=new c.constructor(l.length*h),d=0,g=0;for(let v=0,p=l.length;v<p;v++){a.isInterleavedBufferAttribute?d=l[v]*a.data.stride+a.offset:d=l[v]*h;for(let f=0;f<h;f++)m[g++]=c[d++]}return new Nt(m,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,n);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let m=c[h],d=e(m,n);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,m=c.length;u<m;u++){let d=c[u];h.push(d.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let m=0,d=u.length;m<d;m++)h.push(u[m].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},ph=new Tt,ki=new zo,vo=new Si,mh=new N,yo=new N,Mo=new N,So=new N,Rc=new N,bo=new N,gh=new N,To=new N,Pt=class extends Ht{constructor(e=new Ft,t=new dn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){bo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(Rc.fromBufferAttribute(u,e),o?bo.addScaledVector(Rc,h):bo.addScaledVector(Rc.sub(t),h))}t.add(bo)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),vo.copy(n.boundingSphere),vo.applyMatrix4(r),ki.copy(e.ray).recast(e.near),!(vo.containsPoint(ki.origin)===!1&&(ki.intersectSphere(vo,mh)===null||ki.origin.distanceToSquared(mh)>(e.far-e.near)**2))&&(ph.copy(r).invert(),ki.copy(e.ray).applyMatrix4(ph),!(n.boundingBox!==null&&ki.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ki)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,m=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=m.length;g<v;g++){let p=m[g],f=o[p.materialIndex],_=Math.max(p.start,d.start),S=Math.min(a.count,Math.min(p.start+p.count,d.start+d.count));for(let x=_,R=S;x<R;x+=3){let b=a.getX(x),I=a.getX(x+1),P=a.getX(x+2);s=wo(this,f,e,n,c,h,u,b,I,P),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let g=Math.max(0,d.start),v=Math.min(a.count,d.start+d.count);for(let p=g,f=v;p<f;p+=3){let _=a.getX(p),S=a.getX(p+1),x=a.getX(p+2);s=wo(this,o,e,n,c,h,u,_,S,x),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,v=m.length;g<v;g++){let p=m[g],f=o[p.materialIndex],_=Math.max(p.start,d.start),S=Math.min(l.count,Math.min(p.start+p.count,d.start+d.count));for(let x=_,R=S;x<R;x+=3){let b=x,I=x+1,P=x+2;s=wo(this,f,e,n,c,h,u,b,I,P),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let g=Math.max(0,d.start),v=Math.min(l.count,d.start+d.count);for(let p=g,f=v;p<f;p+=3){let _=p,S=p+1,x=p+2;s=wo(this,o,e,n,c,h,u,_,S,x),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}};function qf(i,e,t,n,s,r,o,a){let l;if(e.side===tn?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===ei,a),l===null)return null;To.copy(a),To.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(To);return c<t.near||c>t.far?null:{distance:c,point:To.clone(),object:i}}function wo(i,e,t,n,s,r,o,a,l,c){i.getVertexPosition(a,yo),i.getVertexPosition(l,Mo),i.getVertexPosition(c,So);let h=qf(i,e,t,n,yo,Mo,So,gh);if(h){let u=new N;vi.getBarycoord(gh,yo,Mo,So,u),s&&(h.uv=vi.getInterpolatedAttribute(s,a,l,c,u,new Ne)),r&&(h.uv1=vi.getInterpolatedAttribute(r,a,l,c,u,new Ne)),o&&(h.normal=vi.getInterpolatedAttribute(o,a,l,c,u,new N),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let m={a,b:l,c,normal:new N,materialIndex:0};vi.getNormal(yo,Mo,So,m.normal),h.face=m,h.barycoord=u}return h}var Ln=class i extends Ft{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],m=0,d=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new yt(c,3)),this.setAttribute("normal",new yt(h,3)),this.setAttribute("uv",new yt(u,2));function g(v,p,f,_,S,x,R,b,I,P,T){let M=x/I,A=R/P,L=x/2,X=R/2,$=b/2,se=I+1,te=P+1,xe=0,ne=0,Ce=new N;for(let Ue=0;Ue<te;Ue++){let D=Ue*A-X;for(let ce=0;ce<se;ce++){let K=ce*M-L;Ce[v]=K*_,Ce[p]=D*S,Ce[f]=$,c.push(Ce.x,Ce.y,Ce.z),Ce[v]=0,Ce[p]=0,Ce[f]=b>0?1:-1,h.push(Ce.x,Ce.y,Ce.z),u.push(ce/I),u.push(1-Ue/P),xe+=1}}for(let Ue=0;Ue<P;Ue++)for(let D=0;D<I;D++){let ce=m+D+se*Ue,K=m+D+se*(Ue+1),Ae=m+(D+1)+se*(Ue+1),Re=m+(D+1)+se*Ue;l.push(ce,K,Re),l.push(K,Ae,Re),ne+=6}a.addGroup(d,ne,T),d+=ne,m+=xe}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function es(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Zt(i){let e={};for(let t=0;t<i.length;t++){let n=es(i[t]);for(let s in n)e[s]=n[s]}return e}function Yf(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function hl(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:gt.workingColorSpace}var _u={clone:es,merge:Zt},Zf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Jf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,pn=class extends bi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Zf,this.fragmentShader=Jf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=es(e.uniforms),this.uniformsGroups=Yf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Sr=class extends Ht{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Tt,this.projectionMatrix=new Tt,this.projectionMatrixInverse=new Tt,this.coordinateSystem=In,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},xi=new N,_h=new Ne,xh=new Ne,rn=class extends Sr{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Is*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(hr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Is*2*Math.atan(Math.tan(hr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){xi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(xi.x,xi.y).multiplyScalar(-e/xi.z),xi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(xi.x,xi.y).multiplyScalar(-e/xi.z)}getViewSize(e,t){return this.getViewBounds(e,_h,xh),t.subVectors(xh,_h)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(hr*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},bs=-90,Ts=1,Vo=class extends Ht{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new rn(bs,Ts,e,t);s.layers=this.layers,this.add(s);let r=new rn(bs,Ts,e,t);r.layers=this.layers,this.add(r);let o=new rn(bs,Ts,e,t);o.layers=this.layers,this.add(o);let a=new rn(bs,Ts,e,t);a.layers=this.layers,this.add(a);let l=new rn(bs,Ts,e,t);l.layers=this.layers,this.add(l);let c=new rn(bs,Ts,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===In)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===gr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=e.getRenderTarget(),m=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(u,m,d),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},br=class extends en{constructor(e=[],t=Ki,n,s,r,o,a,l,c,h){super(e,t,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Ho=class extends bn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new br(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Ln(5,5,5),r=new pn({name:"CubemapFromEquirect",uniforms:es(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:tn,blending:si});r.uniforms.tEquirect.value=t;let o=new Pt(s,r),a=t.minFilter;return t.minFilter===Ci&&(t.minFilter=Vt),new Vo(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}},Qt=class extends Ht{constructor(){super(),this.isGroup=!0,this.type="Group"}},$f={type:"move"},Ds=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Qt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Qt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Qt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let v of e.hand.values()){let p=t.getJointPose(v,n),f=this._getHandJoint(c,v);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],m=h.position.distanceTo(u.position),d=.02,g=.005;c.inputState.pinching&&m>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&m<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent($f)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Qt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}};var qi=class extends Ht{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Pn,this.environmentIntensity=1,this.environmentRotation=new Pn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};var Ti=class extends en{constructor(e=null,t=1,n=1,s,r,o,a,l,c=on,h=on,u,m){super(null,o,a,l,c,h,s,r,u,m),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Us=class extends Nt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},ws=new Tt,vh=new Tt,Eo=[],yh=new Bn,Kf=new Tt,ar=new Pt,cr=new Si,Tr=class extends Pt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Us(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Kf)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Bn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ws),yh.copy(e.boundingBox).applyMatrix4(ws),this.boundingBox.union(yh)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Si),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ws),cr.copy(e.boundingSphere).applyMatrix4(ws),this.boundingSphere.union(cr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(ar.geometry=this.geometry,ar.material=this.material,ar.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),cr.copy(this.boundingSphere),cr.applyMatrix4(n),e.ray.intersectsSphere(cr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ws),vh.multiplyMatrices(n,ws),ar.matrixWorld=vh,ar.raycast(e,Eo);for(let o=0,a=Eo.length;o<a;o++){let l=Eo[o];l.instanceId=r,l.object=this,t.push(l)}Eo.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Us(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ti(new Float32Array(s*this.count),s,this.count,xa,_n));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Ic=new N,jf=new N,Qf=new at,Sn=class{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Ic.subVectors(n,t).cross(jf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Ic),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Qf.getNormalMatrix(e),s=this.coplanarPoint(Ic).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},zi=new Si,ed=new Ne(.5,.5),Ao=new N,Ns=class{constructor(e=new Sn,t=new Sn,n=new Sn,s=new Sn,r=new Sn,o=new Sn){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=In,n=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],u=r[5],m=r[6],d=r[7],g=r[8],v=r[9],p=r[10],f=r[11],_=r[12],S=r[13],x=r[14],R=r[15];if(s[0].setComponents(c-o,d-h,f-g,R-_).normalize(),s[1].setComponents(c+o,d+h,f+g,R+_).normalize(),s[2].setComponents(c+a,d+u,f+v,R+S).normalize(),s[3].setComponents(c-a,d-u,f-v,R-S).normalize(),n)s[4].setComponents(l,m,p,x).normalize(),s[5].setComponents(c-l,d-m,f-p,R-x).normalize();else if(s[4].setComponents(c-l,d-m,f-p,R-x).normalize(),t===In)s[5].setComponents(c+l,d+m,f+p,R+x).normalize();else if(t===gr)s[5].setComponents(l,m,p,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),zi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),zi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(zi)}intersectsSprite(e){zi.center.set(0,0,0);let t=ed.distanceTo(e.center);return zi.radius=.7071067811865476+t,zi.applyMatrix4(e.matrixWorld),this.intersectsSphere(zi)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Ao.x=s.normal.x>0?e.max.x:e.min.x,Ao.y=s.normal.y>0?e.max.y:e.min.y,Ao.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ao)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var ii=class extends en{constructor(e,t,n,s,r,o,a,l,c){super(e,t,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},wr=class extends en{constructor(e,t,n=Ri,s,r,o,a=on,l=on,c,h=Rs,u=1){if(h!==Rs&&h!==Ys)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let m={width:e,height:t,depth:u};super(m,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ls(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Er=class extends en{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}};var Ar=class i extends Ft{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],m=[],d=[],g=0,v=[],p=n/2,f=0;_(),o===!1&&(e>0&&S(!0),t>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new yt(u,3)),this.setAttribute("normal",new yt(m,3)),this.setAttribute("uv",new yt(d,2));function _(){let x=new N,R=new N,b=0,I=(t-e)/n;for(let P=0;P<=r;P++){let T=[],M=P/r,A=M*(t-e)+e;for(let L=0;L<=s;L++){let X=L/s,$=X*l+a,se=Math.sin($),te=Math.cos($);R.x=A*se,R.y=-M*n+p,R.z=A*te,u.push(R.x,R.y,R.z),x.set(se,I,te).normalize(),m.push(x.x,x.y,x.z),d.push(X,1-M),T.push(g++)}v.push(T)}for(let P=0;P<s;P++)for(let T=0;T<r;T++){let M=v[T][P],A=v[T+1][P],L=v[T+1][P+1],X=v[T][P+1];(e>0||T!==0)&&(h.push(M,A,X),b+=3),(t>0||T!==r-1)&&(h.push(A,L,X),b+=3)}c.addGroup(f,b,0),f+=b}function S(x){let R=g,b=new Ne,I=new N,P=0,T=x===!0?e:t,M=x===!0?1:-1;for(let L=1;L<=s;L++)u.push(0,p*M,0),m.push(0,M,0),d.push(.5,.5),g++;let A=g;for(let L=0;L<=s;L++){let $=L/s*l+a,se=Math.cos($),te=Math.sin($);I.x=T*te,I.y=p*M,I.z=T*se,u.push(I.x,I.y,I.z),m.push(0,M,0),b.x=se*.5+.5,b.y=te*.5*M+.5,d.push(b.x,b.y),g++}for(let L=0;L<s;L++){let X=R+L,$=A+L;x===!0?h.push($,$+1,X):h.push($+1,$,X),P+=3}c.addGroup(f,P,x===!0?1:2),f+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Go=class i extends Ft{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],o=[];a(s),c(n),h(),this.setAttribute("position",new yt(r,3)),this.setAttribute("normal",new yt(r.slice(),3)),this.setAttribute("uv",new yt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(_){let S=new N,x=new N,R=new N;for(let b=0;b<t.length;b+=3)d(t[b+0],S),d(t[b+1],x),d(t[b+2],R),l(S,x,R,_)}function l(_,S,x,R){let b=R+1,I=[];for(let P=0;P<=b;P++){I[P]=[];let T=_.clone().lerp(x,P/b),M=S.clone().lerp(x,P/b),A=b-P;for(let L=0;L<=A;L++)L===0&&P===b?I[P][L]=T:I[P][L]=T.clone().lerp(M,L/A)}for(let P=0;P<b;P++)for(let T=0;T<2*(b-P)-1;T++){let M=Math.floor(T/2);T%2===0?(m(I[P][M+1]),m(I[P+1][M]),m(I[P][M])):(m(I[P][M+1]),m(I[P+1][M+1]),m(I[P+1][M]))}}function c(_){let S=new N;for(let x=0;x<r.length;x+=3)S.x=r[x+0],S.y=r[x+1],S.z=r[x+2],S.normalize().multiplyScalar(_),r[x+0]=S.x,r[x+1]=S.y,r[x+2]=S.z}function h(){let _=new N;for(let S=0;S<r.length;S+=3){_.x=r[S+0],_.y=r[S+1],_.z=r[S+2];let x=p(_)/2/Math.PI+.5,R=f(_)/Math.PI+.5;o.push(x,1-R)}g(),u()}function u(){for(let _=0;_<o.length;_+=6){let S=o[_+0],x=o[_+2],R=o[_+4],b=Math.max(S,x,R),I=Math.min(S,x,R);b>.9&&I<.1&&(S<.2&&(o[_+0]+=1),x<.2&&(o[_+2]+=1),R<.2&&(o[_+4]+=1))}}function m(_){r.push(_.x,_.y,_.z)}function d(_,S){let x=_*3;S.x=e[x+0],S.y=e[x+1],S.z=e[x+2]}function g(){let _=new N,S=new N,x=new N,R=new N,b=new Ne,I=new Ne,P=new Ne;for(let T=0,M=0;T<r.length;T+=9,M+=6){_.set(r[T+0],r[T+1],r[T+2]),S.set(r[T+3],r[T+4],r[T+5]),x.set(r[T+6],r[T+7],r[T+8]),b.set(o[M+0],o[M+1]),I.set(o[M+2],o[M+3]),P.set(o[M+4],o[M+5]),R.copy(_).add(S).add(x).divideScalar(3);let A=p(R);v(b,M+0,_,A),v(I,M+2,S,A),v(P,M+4,x,A)}}function v(_,S,x,R){R<0&&_.x===1&&(o[S]=_.x-1),x.x===0&&x.z===0&&(o[S]=R/2/Math.PI+.5)}function p(_){return Math.atan2(_.z,-_.x)}function f(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.details)}};var mn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let h=n[s],m=n[s+1]-h,d=(o-h)/m;return(s+d)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new Ne:new N);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new N,s=[],r=[],o=[],a=new N,l=new Tt;for(let d=0;d<=e;d++){let g=d/e;s[d]=this.getTangentAt(g,new N)}r[0]=new N,o[0]=new N;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),m=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),m<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(lt(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,g))}o[d].crossVectors(s[d],r[d])}if(t===!0){let d=Math.acos(lt(r[0].dot(r[e]),-1,1));d/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(d=-d);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],d*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Fs=class extends mn{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new Ne){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),m=l-this.aX,d=c-this.aY;l=m*h-d*u+this.aX,c=m*u+d*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Wo=class extends Fs{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function ul(){let i=0,e=0,t=0,n=0;function s(r,o,a,l){i=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let m=(o-r)/c-(a-r)/(c+h)+(a-o)/h,d=(a-o)/h-(l-o)/(h+u)+(l-a)/u;m*=h,d*=h,s(o,a,m,d)},calc:function(r){let o=r*r,a=o*r;return i+e*r+t*o+n*a}}}var Co=new N,Pc=new ul,Lc=new ul,Dc=new ul,wi=class extends mn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new N){let n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(Co.subVectors(s[0],s[1]).add(s[0]),c=Co);let u=s[a%r],m=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Co.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Co),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),d),v=Math.pow(u.distanceToSquared(m),d),p=Math.pow(m.distanceToSquared(h),d);v<1e-4&&(v=1),g<1e-4&&(g=v),p<1e-4&&(p=v),Pc.initNonuniformCatmullRom(c.x,u.x,m.x,h.x,g,v,p),Lc.initNonuniformCatmullRom(c.y,u.y,m.y,h.y,g,v,p),Dc.initNonuniformCatmullRom(c.z,u.z,m.z,h.z,g,v,p)}else this.curveType==="catmullrom"&&(Pc.initCatmullRom(c.x,u.x,m.x,h.x,this.tension),Lc.initCatmullRom(c.y,u.y,m.y,h.y,this.tension),Dc.initCatmullRom(c.z,u.z,m.z,h.z,this.tension));return n.set(Pc.calc(l),Lc.calc(l),Dc.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new N().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Mh(i,e,t,n,s){let r=(n-e)*.5,o=(s-t)*.5,a=i*i,l=i*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*i+t}function td(i,e){let t=1-i;return t*t*e}function nd(i,e){return 2*(1-i)*i*e}function id(i,e){return i*i*e}function fr(i,e,t,n){return td(i,e)+nd(i,t)+id(i,n)}function sd(i,e){let t=1-i;return t*t*t*e}function rd(i,e){let t=1-i;return 3*t*t*i*e}function od(i,e){return 3*(1-i)*i*i*e}function ad(i,e){return i*i*i*e}function dr(i,e,t,n,s){return sd(i,e)+rd(i,t)+od(i,n)+ad(i,s)}var Cr=class extends mn{constructor(e=new Ne,t=new Ne,n=new Ne,s=new Ne){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new Ne){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(dr(e,s.x,r.x,o.x,a.x),dr(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Os=class extends mn{constructor(e=new N,t=new N,n=new N,s=new N){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new N){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(dr(e,s.x,r.x,o.x,a.x),dr(e,s.y,r.y,o.y,a.y),dr(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Rr=class extends mn{constructor(e=new Ne,t=new Ne){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Ne){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Ne){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Xo=class extends mn{constructor(e=new N,t=new N){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new N){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new N){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ir=class extends mn{constructor(e=new Ne,t=new Ne,n=new Ne){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Ne){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(fr(e,s.x,r.x,o.x),fr(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Pr=class extends mn{constructor(e=new N,t=new N,n=new N){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new N){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(fr(e,s.x,r.x,o.x),fr(e,s.y,r.y,o.y),fr(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Lr=class extends mn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Ne){let n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(Mh(a,l.x,c.x,h.x,u.x),Mh(a,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new Ne().fromArray(s))}return this}},qo=Object.freeze({__proto__:null,ArcCurve:Wo,CatmullRomCurve3:wi,CubicBezierCurve:Cr,CubicBezierCurve3:Os,EllipseCurve:Fs,LineCurve:Rr,LineCurve3:Xo,QuadraticBezierCurve:Ir,QuadraticBezierCurve3:Pr,SplineCurve:Lr}),Yo=class extends mn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new qo[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new qo[s.type]().fromJSON(s))}return this}},Dr=class extends Yo{constructor(e){super(),this.type="Path",this.currentPoint=new Ne,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Rr(this.currentPoint.clone(),new Ne(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new Ir(this.currentPoint.clone(),new Ne(e,t),new Ne(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){let a=new Cr(this.currentPoint.clone(),new Ne(e,t),new Ne(n,s),new Ne(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Lr(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,s,r,o,a,l),this}absellipse(e,t,n,s,r,o,a,l){let c=new Fs(e,t,n,s,r,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Yi=class extends Dr{constructor(e){super(e),this.uuid=Qi(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new Dr().fromJSON(s))}return this}};function cd(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=xu(i,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=dd(i,e,r,t)),i.length>80*t){a=1/0,l=1/0;let h=-1/0,u=-1/0;for(let m=t;m<s;m+=t){let d=i[m],g=i[m+1];d<a&&(a=d),g<l&&(l=g),d>h&&(h=d),g>u&&(u=g)}c=Math.max(h-a,u-l),c=c!==0?32767/c:0}return Ur(r,o,t,a,l,c,0),o}function xu(i,e,t,n,s){let r;if(s===Td(i,e,t,n)>0)for(let o=e;o<t;o+=n)r=Sh(o/n|0,i[o],i[o+1],r);else for(let o=t-n;o>=e;o-=n)r=Sh(o/n|0,i[o],i[o+1],r);return r&&Bs(r,r.next)&&(Fr(r),r=r.next),r}function Zi(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Bs(t,t.next)||It(t.prev,t,t.next)===0)){if(Fr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Ur(i,e,t,n,s,r,o){if(!i)return;!o&&r&&xd(i,n,s,r);let a=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?hd(i,n,s,r):ld(i)){e.push(l.i,i.i,c.i),Fr(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=ud(Zi(i),e),Ur(i,e,t,n,s,r,2)):o===2&&fd(i,e,t,n,s,r):Ur(Zi(i),e,t,n,s,r,1);break}}}function ld(i){let e=i.prev,t=i,n=i.next;if(It(e,t,n)>=0)return!1;let s=e.x,r=t.x,o=n.x,a=e.y,l=t.y,c=n.y,h=Math.min(s,r,o),u=Math.min(a,l,c),m=Math.max(s,r,o),d=Math.max(a,l,c),g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=m&&g.y>=u&&g.y<=d&&lr(s,a,r,l,o,c,g.x,g.y)&&It(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function hd(i,e,t,n){let s=i.prev,r=i,o=i.next;if(It(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,u=r.y,m=o.y,d=Math.min(a,l,c),g=Math.min(h,u,m),v=Math.max(a,l,c),p=Math.max(h,u,m),f=zc(d,g,e,t,n),_=zc(v,p,e,t,n),S=i.prevZ,x=i.nextZ;for(;S&&S.z>=f&&x&&x.z<=_;){if(S.x>=d&&S.x<=v&&S.y>=g&&S.y<=p&&S!==s&&S!==o&&lr(a,h,l,u,c,m,S.x,S.y)&&It(S.prev,S,S.next)>=0||(S=S.prevZ,x.x>=d&&x.x<=v&&x.y>=g&&x.y<=p&&x!==s&&x!==o&&lr(a,h,l,u,c,m,x.x,x.y)&&It(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;S&&S.z>=f;){if(S.x>=d&&S.x<=v&&S.y>=g&&S.y<=p&&S!==s&&S!==o&&lr(a,h,l,u,c,m,S.x,S.y)&&It(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;x&&x.z<=_;){if(x.x>=d&&x.x<=v&&x.y>=g&&x.y<=p&&x!==s&&x!==o&&lr(a,h,l,u,c,m,x.x,x.y)&&It(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function ud(i,e){let t=i;do{let n=t.prev,s=t.next.next;!Bs(n,s)&&yu(n,t,t.next,s)&&Nr(n,s)&&Nr(s,n)&&(e.push(n.i,t.i,s.i),Fr(t),Fr(t.next),t=i=s),t=t.next}while(t!==i);return Zi(t)}function fd(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Md(o,a)){let l=Mu(o,a);o=Zi(o,o.next),l=Zi(l,l.next),Ur(o,e,t,n,s,r,0),Ur(l,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function dd(i,e,t,n){let s=[];for(let r=0,o=e.length;r<o;r++){let a=e[r]*n,l=r<o-1?e[r+1]*n:i.length,c=xu(i,a,l,n,!1);c===c.next&&(c.steiner=!0),s.push(yd(c))}s.sort(pd);for(let r=0;r<s.length;r++)t=md(s[r],t);return t}function pd(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function md(i,e){let t=gd(i,e);if(!t)return e;let n=Mu(t,i);return Zi(n,n.next),Zi(t,t.next)}function gd(i,e){let t=e,n=i.x,s=i.y,r=-1/0,o;if(Bs(i,t))return t;do{if(Bs(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let u=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=n&&u>r&&(r=u,o=t.x<t.next.x?t:t.next,u===n))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;t=o;do{if(n>=t.x&&t.x>=l&&n!==t.x&&vu(s<c?n:r,s,l,c,s<c?r:n,s,t.x,t.y)){let u=Math.abs(s-t.y)/(n-t.x);Nr(t,i)&&(u<h||u===h&&(t.x>o.x||t.x===o.x&&_d(o,t)))&&(o=t,h=u)}t=t.next}while(t!==a);return o}function _d(i,e){return It(i.prev,i,e.prev)<0&&It(e.next,i,i.next)<0}function xd(i,e,t,n){let s=i;do s.z===0&&(s.z=zc(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,vd(s)}function vd(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let o=n,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,t*=2}while(e>1);return i}function zc(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function yd(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function vu(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function lr(i,e,t,n,s,r,o,a){return!(i===o&&e===a)&&vu(i,e,t,n,s,r,o,a)}function Md(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!Sd(i,e)&&(Nr(i,e)&&Nr(e,i)&&bd(i,e)&&(It(i.prev,i,e.prev)||It(i,e.prev,e))||Bs(i,e)&&It(i.prev,i,i.next)>0&&It(e.prev,e,e.next)>0)}function It(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Bs(i,e){return i.x===e.x&&i.y===e.y}function yu(i,e,t,n){let s=Io(It(i,e,t)),r=Io(It(i,e,n)),o=Io(It(t,n,i)),a=Io(It(t,n,e));return!!(s!==r&&o!==a||s===0&&Ro(i,t,e)||r===0&&Ro(i,n,e)||o===0&&Ro(t,i,n)||a===0&&Ro(t,e,n))}function Ro(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Io(i){return i>0?1:i<0?-1:0}function Sd(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&yu(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Nr(i,e){return It(i.prev,i,i.next)<0?It(i,e,i.next)>=0&&It(i,i.prev,e)>=0:It(i,e,i.prev)<0||It(i,i.next,e)<0}function bd(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Mu(i,e){let t=Vc(i.i,i.x,i.y),n=Vc(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Sh(i,e,t,n){let s=Vc(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Fr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Vc(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Td(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var Hc=class{static triangulate(e,t,n=2){return cd(e,t,n)}},Hi=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];bh(e),Th(n,e);let o=e.length;t.forEach(bh);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,Th(n,t[l]);let a=Hc.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function bh(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Th(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var ks=class i extends Ft{constructor(e=new Yi([new Ne(.5,.5),new Ne(-.5,.5),new Ne(-.5,-.5),new Ne(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new yt(s,3)),this.setAttribute("uv",new yt(r,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,m=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:d-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,p=t.bevelSegments!==void 0?t.bevelSegments:3,f=t.extrudePath,_=t.UVGenerator!==void 0?t.UVGenerator:wd,S,x=!1,R,b,I,P;f&&(S=f.getSpacedPoints(h),x=!0,m=!1,R=f.computeFrenetFrames(h,!1),b=new N,I=new N,P=new N),m||(p=0,d=0,g=0,v=0);let T=a.extractPoints(c),M=T.shape,A=T.holes;if(!Hi.isClockWise(M)){M=M.reverse();for(let B=0,Y=A.length;B<Y;B++){let Z=A[B];Hi.isClockWise(Z)&&(A[B]=Z.reverse())}}function X(B){let Z=10000000000000001e-36,H=B[0];for(let ge=1;ge<=B.length;ge++){let ae=ge%B.length,de=B[ae],Xe=de.x-H.x,ke=de.y-H.y,E=Xe*Xe+ke*ke,y=Math.max(Math.abs(de.x),Math.abs(de.y),Math.abs(H.x),Math.abs(H.y)),V=Z*y*y;if(E<=V){B.splice(ae,1),ge--;continue}H=de}}X(M),A.forEach(X);let $=A.length,se=M;for(let B=0;B<$;B++){let Y=A[B];M=M.concat(Y)}function te(B,Y,Z){return Y||console.error("THREE.ExtrudeGeometry: vec does not exist"),B.clone().addScaledVector(Y,Z)}let xe=M.length;function ne(B,Y,Z){let H,ge,ae,de=B.x-Y.x,Xe=B.y-Y.y,ke=Z.x-B.x,E=Z.y-B.y,y=de*de+Xe*Xe,V=de*E-Xe*ke;if(Math.abs(V)>Number.EPSILON){let Q=Math.sqrt(y),pe=Math.sqrt(ke*ke+E*E),re=Y.x-Xe/Q,ze=Y.y+de/Q,Ee=Z.x-E/pe,ue=Z.y+ke/pe,_e=((Ee-re)*E-(ue-ze)*ke)/(de*E-Xe*ke);H=re+de*_e-B.x,ge=ze+Xe*_e-B.y;let fe=H*H+ge*ge;if(fe<=2)return new Ne(H,ge);ae=Math.sqrt(fe/2)}else{let Q=!1;de>Number.EPSILON?ke>Number.EPSILON&&(Q=!0):de<-Number.EPSILON?ke<-Number.EPSILON&&(Q=!0):Math.sign(Xe)===Math.sign(E)&&(Q=!0),Q?(H=-Xe,ge=de,ae=Math.sqrt(y)):(H=de,ge=Xe,ae=Math.sqrt(y/2))}return new Ne(H/ae,ge/ae)}let Ce=[];for(let B=0,Y=se.length,Z=Y-1,H=B+1;B<Y;B++,Z++,H++)Z===Y&&(Z=0),H===Y&&(H=0),Ce[B]=ne(se[B],se[Z],se[H]);let Ue=[],D,ce=Ce.concat();for(let B=0,Y=$;B<Y;B++){let Z=A[B];D=[];for(let H=0,ge=Z.length,ae=ge-1,de=H+1;H<ge;H++,ae++,de++)ae===ge&&(ae=0),de===ge&&(de=0),D[H]=ne(Z[H],Z[ae],Z[de]);Ue.push(D),ce=ce.concat(D)}let K;if(p===0)K=Hi.triangulateShape(se,A);else{let B=[],Y=[];for(let Z=0;Z<p;Z++){let H=Z/p,ge=d*Math.cos(H*Math.PI/2),ae=g*Math.sin(H*Math.PI/2)+v;for(let de=0,Xe=se.length;de<Xe;de++){let ke=te(se[de],Ce[de],ae);ee(ke.x,ke.y,-ge),H===0&&B.push(ke)}for(let de=0,Xe=$;de<Xe;de++){let ke=A[de];D=Ue[de];let E=[];for(let y=0,V=ke.length;y<V;y++){let Q=te(ke[y],D[y],ae);ee(Q.x,Q.y,-ge),H===0&&E.push(Q)}H===0&&Y.push(E)}}K=Hi.triangulateShape(B,Y)}let Ae=K.length,Re=g+v;for(let B=0;B<xe;B++){let Y=m?te(M[B],ce[B],Re):M[B];x?(I.copy(R.normals[0]).multiplyScalar(Y.x),b.copy(R.binormals[0]).multiplyScalar(Y.y),P.copy(S[0]).add(I).add(b),ee(P.x,P.y,P.z)):ee(Y.x,Y.y,0)}for(let B=1;B<=h;B++)for(let Y=0;Y<xe;Y++){let Z=m?te(M[Y],ce[Y],Re):M[Y];x?(I.copy(R.normals[B]).multiplyScalar(Z.x),b.copy(R.binormals[B]).multiplyScalar(Z.y),P.copy(S[B]).add(I).add(b),ee(P.x,P.y,P.z)):ee(Z.x,Z.y,u/h*B)}for(let B=p-1;B>=0;B--){let Y=B/p,Z=d*Math.cos(Y*Math.PI/2),H=g*Math.sin(Y*Math.PI/2)+v;for(let ge=0,ae=se.length;ge<ae;ge++){let de=te(se[ge],Ce[ge],H);ee(de.x,de.y,u+Z)}for(let ge=0,ae=A.length;ge<ae;ge++){let de=A[ge];D=Ue[ge];for(let Xe=0,ke=de.length;Xe<ke;Xe++){let E=te(de[Xe],D[Xe],H);x?ee(E.x,E.y+S[h-1].y,S[h-1].x+Z):ee(E.x,E.y,u+Z)}}}O(),W();function O(){let B=s.length/3;if(m){let Y=0,Z=xe*Y;for(let H=0;H<Ae;H++){let ge=K[H];he(ge[2]+Z,ge[1]+Z,ge[0]+Z)}Y=h+p*2,Z=xe*Y;for(let H=0;H<Ae;H++){let ge=K[H];he(ge[0]+Z,ge[1]+Z,ge[2]+Z)}}else{for(let Y=0;Y<Ae;Y++){let Z=K[Y];he(Z[2],Z[1],Z[0])}for(let Y=0;Y<Ae;Y++){let Z=K[Y];he(Z[0]+xe*h,Z[1]+xe*h,Z[2]+xe*h)}}n.addGroup(B,s.length/3-B,0)}function W(){let B=s.length/3,Y=0;j(se,Y),Y+=se.length;for(let Z=0,H=A.length;Z<H;Z++){let ge=A[Z];j(ge,Y),Y+=ge.length}n.addGroup(B,s.length/3-B,1)}function j(B,Y){let Z=B.length;for(;--Z>=0;){let H=Z,ge=Z-1;ge<0&&(ge=B.length-1);for(let ae=0,de=h+p*2;ae<de;ae++){let Xe=xe*ae,ke=xe*(ae+1),E=Y+H+Xe,y=Y+ge+Xe,V=Y+ge+ke,Q=Y+H+ke;Oe(E,y,V,Q)}}}function ee(B,Y,Z){l.push(B),l.push(Y),l.push(Z)}function he(B,Y,Z){Be(B),Be(Y),Be(Z);let H=s.length/3,ge=_.generateTopUV(n,s,H-3,H-2,H-1);C(ge[0]),C(ge[1]),C(ge[2])}function Oe(B,Y,Z,H){Be(B),Be(Y),Be(H),Be(Y),Be(Z),Be(H);let ge=s.length/3,ae=_.generateSideWallUV(n,s,ge-6,ge-3,ge-2,ge-1);C(ae[0]),C(ae[1]),C(ae[3]),C(ae[1]),C(ae[2]),C(ae[3])}function Be(B){s.push(l[B*3+0]),s.push(l[B*3+1]),s.push(l[B*3+2])}function C(B){r.push(B.x),r.push(B.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Ed(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];n.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new qo[s.type]().fromJSON(s)),new i(n,e.options)}},wd={generateTopUV:function(i,e,t,n,s){let r=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[s*3],h=e[s*3+1];return[new Ne(r,o),new Ne(a,l),new Ne(c,h)]},generateSideWallUV:function(i,e,t,n,s,r){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],u=e[n*3+2],m=e[s*3],d=e[s*3+1],g=e[s*3+2],v=e[r*3],p=e[r*3+1],f=e[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new Ne(o,1-l),new Ne(c,1-u),new Ne(m,1-g),new Ne(v,1-f)]:[new Ne(a,1-l),new Ne(h,1-u),new Ne(d,1-g),new Ne(p,1-f)]}};function Ed(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var zs=class i extends Go{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},Or=class i extends Ft{constructor(e=[new Ne(0,-.5),new Ne(.5,0),new Ne(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=lt(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/t,u=new N,m=new Ne,d=new N,g=new N,v=new N,p=0,f=0;for(let _=0;_<=e.length-1;_++)switch(_){case 0:p=e[_+1].x-e[_].x,f=e[_+1].y-e[_].y,d.x=f*1,d.y=-p,d.z=f*0,v.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case e.length-1:l.push(v.x,v.y,v.z);break;default:p=e[_+1].x-e[_].x,f=e[_+1].y-e[_].y,d.x=f*1,d.y=-p,d.z=f*0,g.copy(d),d.x+=v.x,d.y+=v.y,d.z+=v.z,d.normalize(),l.push(d.x,d.y,d.z),v.copy(g)}for(let _=0;_<=t;_++){let S=n+_*h*s,x=Math.sin(S),R=Math.cos(S);for(let b=0;b<=e.length-1;b++){u.x=e[b].x*x,u.y=e[b].y,u.z=e[b].x*R,o.push(u.x,u.y,u.z),m.x=_/t,m.y=b/(e.length-1),a.push(m.x,m.y);let I=l[3*b+0]*x,P=l[3*b+1],T=l[3*b+0]*R;c.push(I,P,T)}}for(let _=0;_<t;_++)for(let S=0;S<e.length-1;S++){let x=S+_*e.length,R=x,b=x+e.length,I=x+e.length+1,P=x+1;r.push(R,b,P),r.push(I,P,b)}this.setIndex(r),this.setAttribute("position",new yt(o,3)),this.setAttribute("uv",new yt(a,2)),this.setAttribute("normal",new yt(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}};var kn=class i extends Ft{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=e/a,m=t/l,d=[],g=[],v=[],p=[];for(let f=0;f<h;f++){let _=f*m-o;for(let S=0;S<c;S++){let x=S*u-r;g.push(x,-_,0),v.push(0,0,1),p.push(S/a),p.push(1-f/l)}}for(let f=0;f<l;f++)for(let _=0;_<a;_++){let S=_+c*f,x=_+c*(f+1),R=_+1+c*(f+1),b=_+1+c*f;d.push(S,x,b),d.push(x,R,b)}this.setIndex(d),this.setAttribute("position",new yt(g,3)),this.setAttribute("normal",new yt(v,3)),this.setAttribute("uv",new yt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var Br=class i extends Ft{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],l=[],c=[],h=new N,u=new N,m=new N;for(let d=0;d<=n;d++)for(let g=0;g<=s;g++){let v=g/s*r,p=d/n*Math.PI*2;u.x=(e+t*Math.cos(p))*Math.cos(v),u.y=(e+t*Math.cos(p))*Math.sin(v),u.z=t*Math.sin(p),a.push(u.x,u.y,u.z),h.x=e*Math.cos(v),h.y=e*Math.sin(v),m.subVectors(u,h).normalize(),l.push(m.x,m.y,m.z),c.push(g/s),c.push(d/n)}for(let d=1;d<=n;d++)for(let g=1;g<=s;g++){let v=(s+1)*d+g-1,p=(s+1)*(d-1)+g-1,f=(s+1)*(d-1)+g,_=(s+1)*d+g;o.push(v,p,_),o.push(p,f,_)}this.setIndex(o),this.setAttribute("position",new yt(a,3)),this.setAttribute("normal",new yt(l,3)),this.setAttribute("uv",new yt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var Ji=class i extends Ft{constructor(e=new Pr(new N(-1,-1,0),new N(-1,1,0),new N(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};let o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new N,l=new N,c=new Ne,h=new N,u=[],m=[],d=[],g=[];v(),this.setIndex(g),this.setAttribute("position",new yt(u,3)),this.setAttribute("normal",new yt(m,3)),this.setAttribute("uv",new yt(d,2));function v(){for(let S=0;S<t;S++)p(S);p(r===!1?t:0),_(),f()}function p(S){h=e.getPointAt(S/t,h);let x=o.normals[S],R=o.binormals[S];for(let b=0;b<=s;b++){let I=b/s*Math.PI*2,P=Math.sin(I),T=-Math.cos(I);l.x=T*x.x+P*R.x,l.y=T*x.y+P*R.y,l.z=T*x.z+P*R.z,l.normalize(),m.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,u.push(a.x,a.y,a.z)}}function f(){for(let S=1;S<=t;S++)for(let x=1;x<=s;x++){let R=(s+1)*(S-1)+(x-1),b=(s+1)*S+(x-1),I=(s+1)*S+x,P=(s+1)*(S-1)+x;g.push(R,b,P),g.push(b,I,P)}}function _(){for(let S=0;S<=t;S++)for(let x=0;x<=s;x++)c.x=S/t,c.y=x/s,d.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new qo[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};var zn=class extends bi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new rt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new rt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=rl,this.normalScale=new Ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Vs=class extends zn{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ne(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return lt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new rt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new rt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new rt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Zo=class extends bi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=su,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Jo=class extends bi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Po(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Ad(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var $i=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},$o=class extends $i{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Nc,endingEnd:Nc}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Fc:r=e,a=2*t-n;break;case Oc:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Fc:o=e,l=2*n-t;break;case Oc:o=1,l=n+s[1]-s[0];break;default:o=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,m=this._weightPrev,d=this._weightNext,g=(n-t)/(s-t),v=g*g,p=v*g,f=-m*p+2*m*v-m*g,_=(1+m)*p+(-1.5-2*m)*v+(-.5+m)*g+1,S=(-1-d)*p+(1.5+d)*v+.5*g,x=d*p-d*v;for(let R=0;R!==a;++R)r[R]=f*o[h+R]+_*o[c+R]+S*o[l+R]+x*o[u+R];return r}},Ko=class extends $i{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(s-t),u=1-h;for(let m=0;m!==a;++m)r[m]=o[c+m]*u+o[l+m]*h;return r}},jo=class extends $i{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},gn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Po(t,this.TimeBufferType),this.values=Po(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Po(e.times,Array),values:Po(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new jo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ko(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new $o(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case pr:t=this.InterpolantFactoryMethodDiscrete;break;case Fo:t=this.InterpolantFactoryMethodLinear;break;case Lo:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return pr;case this.InterpolantFactoryMethodLinear:return Fo;case this.InterpolantFactoryMethodSmooth:return Lo}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&Ad(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Lo,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(s)l=!0;else{let u=a*n,m=u-n,d=u+n;for(let g=0;g!==n;++g){let v=t[u+g];if(v!==t[m+g]||v!==t[d+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let u=a*n,m=o*n;for(let d=0;d!==n;++d)t[m+d]=t[u+d]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};gn.prototype.ValueTypeName="";gn.prototype.TimeBufferType=Float32Array;gn.prototype.ValueBufferType=Float32Array;gn.prototype.DefaultInterpolation=Fo;var Ei=class extends gn{constructor(e,t,n){super(e,t,n)}};Ei.prototype.ValueTypeName="bool";Ei.prototype.ValueBufferType=Array;Ei.prototype.DefaultInterpolation=pr;Ei.prototype.InterpolantFactoryMethodLinear=void 0;Ei.prototype.InterpolantFactoryMethodSmooth=void 0;var Qo=class extends gn{constructor(e,t,n,s){super(e,t,n,s)}};Qo.prototype.ValueTypeName="color";var ea=class extends gn{constructor(e,t,n,s){super(e,t,n,s)}};ea.prototype.ValueTypeName="number";var ta=class extends $i{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(s-t),c=e*a;for(let h=c+a;c!==h;c+=4)ni.slerpFlat(r,0,o,c-a,o,c,l);return r}},kr=class extends gn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new ta(this.times,this.values,this.getValueSize(),e)}};kr.prototype.ValueTypeName="quaternion";kr.prototype.InterpolantFactoryMethodSmooth=void 0;var Ai=class extends gn{constructor(e,t,n){super(e,t,n)}};Ai.prototype.ValueTypeName="string";Ai.prototype.ValueBufferType=Array;Ai.prototype.DefaultInterpolation=pr;Ai.prototype.InterpolantFactoryMethodLinear=void 0;Ai.prototype.InterpolantFactoryMethodSmooth=void 0;var na=class extends gn{constructor(e,t,n,s){super(e,t,n,s)}};na.prototype.ValueTypeName="vector";var ia=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,m=c.length;u<m;u+=2){let d=c[u],g=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},Su=new ia,sa=class{constructor(e){this.manager=e!==void 0?e:Su,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};sa.DEFAULT_MATERIAL_NAME="__DEFAULT";var zr=class extends Ht{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new rt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Vr=class extends zr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ht.DEFAULT_UP),this.updateMatrix(),this.groundColor=new rt(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Uc=new Tt,wh=new N,Eh=new N,Gc=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ne(512,512),this.mapType=Dn,this.map=null,this.mapPass=null,this.matrix=new Tt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ns,this._frameExtents=new Ne(1,1),this._viewportCount=1,this._viewports=[new At(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;wh.setFromMatrixPosition(e.matrixWorld),t.position.copy(wh),Eh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Eh),t.updateMatrixWorld(),Uc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Uc,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Uc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var Vn=class extends Sr{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Wc=class extends Gc{constructor(){super(new Vn(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Hs=class extends zr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ht.DEFAULT_UP),this.updateMatrix(),this.target=new Ht,this.shadow=new Wc}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var ra=class extends rn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var fl="\\[\\]\\.:\\/",Cd=new RegExp("["+fl+"]","g"),dl="[^"+fl+"]",Rd="[^"+fl.replace("\\.","")+"]",Id=/((?:WC+[\/:])*)/.source.replace("WC",dl),Pd=/(WCOD+)?/.source.replace("WCOD",Rd),Ld=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",dl),Dd=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",dl),Ud=new RegExp("^"+Id+Pd+Ld+Dd+"$"),Nd=["material","materials","bones","map"],Xc=class{constructor(e,t,n){let s=n||Et.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Et=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Cd,"")}static parseTrackName(e){let t=Ud.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Nd.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Et.Composite=Xc;Et.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Et.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Et.prototype.GetterByBindingType=[Et.prototype._getValue_direct,Et.prototype._getValue_array,Et.prototype._getValue_arrayElement,Et.prototype._getValue_toArray];Et.prototype.SetterByBindingTypeAndVersioning=[[Et.prototype._setValue_direct,Et.prototype._setValue_direct_setNeedsUpdate,Et.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Et.prototype._setValue_array,Et.prototype._setValue_array_setNeedsUpdate,Et.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Et.prototype._setValue_arrayElement,Et.prototype._setValue_arrayElement_setNeedsUpdate,Et.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Et.prototype._setValue_fromArray,Et.prototype._setValue_fromArray_setNeedsUpdate,Et.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var T_=new Float32Array(1);function pl(i,e,t,n){let s=Fd(n);switch(t){case nl:return i*e;case xa:return i*e/s.components*s.byteLength;case va:return i*e/s.components*s.byteLength;case sl:return i*e*2/s.components*s.byteLength;case ya:return i*e*2/s.components*s.byteLength;case il:return i*e*3/s.components*s.byteLength;case cn:return i*e*4/s.components*s.byteLength;case Ma:return i*e*4/s.components*s.byteLength;case Xr:case qr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Yr:case Zr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ba:case wa:return Math.max(i,16)*Math.max(e,8)/4;case Sa:case Ta:return Math.max(i,8)*Math.max(e,8)/2;case Ea:case Aa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ca:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ra:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ia:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Pa:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case La:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Da:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Ua:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Na:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Fa:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Oa:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Ba:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case ka:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case za:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Va:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Ha:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Ga:case Wa:case Xa:return Math.ceil(i/4)*Math.ceil(e/4)*16;case qa:case Ya:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Za:case Ja:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Fd(i){switch(i){case Dn:case jc:return{byteLength:1,components:1};case Ws:case Qc:case Xs:return{byteLength:2,components:1};case ga:case _a:return{byteLength:2,components:4};case Ri:case ma:case _n:return{byteLength:4,components:1};case el:case tl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function qu(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Gd(i){let e=new WeakMap;function t(a,l){let c=a.array,h=a.usage,u=c.byteLength,m=i.createBuffer();i.bindBuffer(l,m),i.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:m,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,h);else{u.sort((d,g)=>d.start-g.start);let m=0;for(let d=1;d<u.length;d++){let g=u[m],v=u[d];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++m,u[m]=v)}u.length=m+1;for(let d=0,g=u.length;d<g;d++){let v=u[d];i.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Wd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Xd=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,qd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Yd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Zd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Jd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,$d=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Kd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,jd=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Qd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ep=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,tp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,np=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,ip=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,sp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,rp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,op=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ap=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,cp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,lp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,hp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,up=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,fp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,dp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,pp=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,mp=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,gp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,_p=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,xp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,vp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,yp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Mp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Sp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,bp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Tp=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,wp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ep=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Ap=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Cp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Rp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ip=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Pp=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Lp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Dp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Up=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Np=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Fp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Op=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Bp=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,kp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,zp=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Vp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Hp=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Gp=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Wp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Xp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,qp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Yp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Jp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,$p=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Kp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,jp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Qp=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,em=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,tm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,nm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,im=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,sm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rm=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,om=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,am=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,cm=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,lm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,um=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,fm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,dm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,pm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,mm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,gm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,_m=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,xm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,vm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ym=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Mm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Sm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,bm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Tm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,wm=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Em=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Am=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Cm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Rm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Im=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Pm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Lm=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Dm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Um=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Nm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Fm=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Om=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Bm=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,km=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,zm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Vm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Hm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Gm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Wm=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qm=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ym=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,$m=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Km=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,jm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Qm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,eg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tg=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ng=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ig=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,sg=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rg=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,og=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ag=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,cg=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,hg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,ug=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,pg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mg=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_g=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,xg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,vg=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Mg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Sg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ht={alphahash_fragment:Wd,alphahash_pars_fragment:Xd,alphamap_fragment:qd,alphamap_pars_fragment:Yd,alphatest_fragment:Zd,alphatest_pars_fragment:Jd,aomap_fragment:$d,aomap_pars_fragment:Kd,batching_pars_vertex:jd,batching_vertex:Qd,begin_vertex:ep,beginnormal_vertex:tp,bsdfs:np,iridescence_fragment:ip,bumpmap_pars_fragment:sp,clipping_planes_fragment:rp,clipping_planes_pars_fragment:op,clipping_planes_pars_vertex:ap,clipping_planes_vertex:cp,color_fragment:lp,color_pars_fragment:hp,color_pars_vertex:up,color_vertex:fp,common:dp,cube_uv_reflection_fragment:pp,defaultnormal_vertex:mp,displacementmap_pars_vertex:gp,displacementmap_vertex:_p,emissivemap_fragment:xp,emissivemap_pars_fragment:vp,colorspace_fragment:yp,colorspace_pars_fragment:Mp,envmap_fragment:Sp,envmap_common_pars_fragment:bp,envmap_pars_fragment:Tp,envmap_pars_vertex:wp,envmap_physical_pars_fragment:Fp,envmap_vertex:Ep,fog_vertex:Ap,fog_pars_vertex:Cp,fog_fragment:Rp,fog_pars_fragment:Ip,gradientmap_pars_fragment:Pp,lightmap_pars_fragment:Lp,lights_lambert_fragment:Dp,lights_lambert_pars_fragment:Up,lights_pars_begin:Np,lights_toon_fragment:Op,lights_toon_pars_fragment:Bp,lights_phong_fragment:kp,lights_phong_pars_fragment:zp,lights_physical_fragment:Vp,lights_physical_pars_fragment:Hp,lights_fragment_begin:Gp,lights_fragment_maps:Wp,lights_fragment_end:Xp,logdepthbuf_fragment:qp,logdepthbuf_pars_fragment:Yp,logdepthbuf_pars_vertex:Zp,logdepthbuf_vertex:Jp,map_fragment:$p,map_pars_fragment:Kp,map_particle_fragment:jp,map_particle_pars_fragment:Qp,metalnessmap_fragment:em,metalnessmap_pars_fragment:tm,morphinstance_vertex:nm,morphcolor_vertex:im,morphnormal_vertex:sm,morphtarget_pars_vertex:rm,morphtarget_vertex:om,normal_fragment_begin:am,normal_fragment_maps:cm,normal_pars_fragment:lm,normal_pars_vertex:hm,normal_vertex:um,normalmap_pars_fragment:fm,clearcoat_normal_fragment_begin:dm,clearcoat_normal_fragment_maps:pm,clearcoat_pars_fragment:mm,iridescence_pars_fragment:gm,opaque_fragment:_m,packing:xm,premultiplied_alpha_fragment:vm,project_vertex:ym,dithering_fragment:Mm,dithering_pars_fragment:Sm,roughnessmap_fragment:bm,roughnessmap_pars_fragment:Tm,shadowmap_pars_fragment:wm,shadowmap_pars_vertex:Em,shadowmap_vertex:Am,shadowmask_pars_fragment:Cm,skinbase_vertex:Rm,skinning_pars_vertex:Im,skinning_vertex:Pm,skinnormal_vertex:Lm,specularmap_fragment:Dm,specularmap_pars_fragment:Um,tonemapping_fragment:Nm,tonemapping_pars_fragment:Fm,transmission_fragment:Om,transmission_pars_fragment:Bm,uv_pars_fragment:km,uv_pars_vertex:zm,uv_vertex:Vm,worldpos_vertex:Hm,background_vert:Gm,background_frag:Wm,backgroundCube_vert:Xm,backgroundCube_frag:qm,cube_vert:Ym,cube_frag:Zm,depth_vert:Jm,depth_frag:$m,distanceRGBA_vert:Km,distanceRGBA_frag:jm,equirect_vert:Qm,equirect_frag:eg,linedashed_vert:tg,linedashed_frag:ng,meshbasic_vert:ig,meshbasic_frag:sg,meshlambert_vert:rg,meshlambert_frag:og,meshmatcap_vert:ag,meshmatcap_frag:cg,meshnormal_vert:lg,meshnormal_frag:hg,meshphong_vert:ug,meshphong_frag:fg,meshphysical_vert:dg,meshphysical_frag:pg,meshtoon_vert:mg,meshtoon_frag:gg,points_vert:_g,points_frag:xg,shadow_vert:vg,shadow_frag:yg,sprite_vert:Mg,sprite_frag:Sg},Ge={common:{diffuse:{value:new rt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new at},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new at}},envmap:{envMap:{value:null},envMapRotation:{value:new at},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new at}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new at}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new at},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new at},normalScale:{value:new Ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new at},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new at}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new at}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new at}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0},uvTransform:{value:new at}},sprite:{diffuse:{value:new rt(16777215)},opacity:{value:1},center:{value:new Ne(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new at},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0}}},Gn={basic:{uniforms:Zt([Ge.common,Ge.specularmap,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.fog]),vertexShader:ht.meshbasic_vert,fragmentShader:ht.meshbasic_frag},lambert:{uniforms:Zt([Ge.common,Ge.specularmap,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.fog,Ge.lights,{emissive:{value:new rt(0)}}]),vertexShader:ht.meshlambert_vert,fragmentShader:ht.meshlambert_frag},phong:{uniforms:Zt([Ge.common,Ge.specularmap,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.fog,Ge.lights,{emissive:{value:new rt(0)},specular:{value:new rt(1118481)},shininess:{value:30}}]),vertexShader:ht.meshphong_vert,fragmentShader:ht.meshphong_frag},standard:{uniforms:Zt([Ge.common,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.roughnessmap,Ge.metalnessmap,Ge.fog,Ge.lights,{emissive:{value:new rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag},toon:{uniforms:Zt([Ge.common,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.gradientmap,Ge.fog,Ge.lights,{emissive:{value:new rt(0)}}]),vertexShader:ht.meshtoon_vert,fragmentShader:ht.meshtoon_frag},matcap:{uniforms:Zt([Ge.common,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.fog,{matcap:{value:null}}]),vertexShader:ht.meshmatcap_vert,fragmentShader:ht.meshmatcap_frag},points:{uniforms:Zt([Ge.points,Ge.fog]),vertexShader:ht.points_vert,fragmentShader:ht.points_frag},dashed:{uniforms:Zt([Ge.common,Ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ht.linedashed_vert,fragmentShader:ht.linedashed_frag},depth:{uniforms:Zt([Ge.common,Ge.displacementmap]),vertexShader:ht.depth_vert,fragmentShader:ht.depth_frag},normal:{uniforms:Zt([Ge.common,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,{opacity:{value:1}}]),vertexShader:ht.meshnormal_vert,fragmentShader:ht.meshnormal_frag},sprite:{uniforms:Zt([Ge.sprite,Ge.fog]),vertexShader:ht.sprite_vert,fragmentShader:ht.sprite_frag},background:{uniforms:{uvTransform:{value:new at},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ht.background_vert,fragmentShader:ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new at}},vertexShader:ht.backgroundCube_vert,fragmentShader:ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ht.cube_vert,fragmentShader:ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ht.equirect_vert,fragmentShader:ht.equirect_frag},distanceRGBA:{uniforms:Zt([Ge.common,Ge.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ht.distanceRGBA_vert,fragmentShader:ht.distanceRGBA_frag},shadow:{uniforms:Zt([Ge.lights,Ge.fog,{color:{value:new rt(0)},opacity:{value:1}}]),vertexShader:ht.shadow_vert,fragmentShader:ht.shadow_frag}};Gn.physical={uniforms:Zt([Gn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new at},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new at},clearcoatNormalScale:{value:new Ne(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new at},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new at},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new at},sheen:{value:0},sheenColor:{value:new rt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new at},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new at},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new at},transmissionSamplerSize:{value:new Ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new at},attenuationDistance:{value:0},attenuationColor:{value:new rt(0)},specularColor:{value:new rt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new at},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new at},anisotropyVector:{value:new Ne},anisotropyMap:{value:null},anisotropyMapTransform:{value:new at}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag};var $a={r:0,b:0,g:0},ts=new Pn,bg=new Tt;function Tg(i,e,t,n,s,r,o){let a=new rt(0),l=r===!0?0:1,c,h,u=null,m=0,d=null;function g(S){let x=S.isScene===!0?S.background:null;return x&&x.isTexture&&(x=(S.backgroundBlurriness>0?t:e).get(x)),x}function v(S){let x=!1,R=g(S);R===null?f(a,l):R&&R.isColor&&(f(R,1),x=!0);let b=i.xr.getEnvironmentBlendMode();b==="additive"?n.buffers.color.setClear(0,0,0,1,o):b==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(S,x){let R=g(x);R&&(R.isCubeTexture||R.mapping===Gr)?(h===void 0&&(h=new Pt(new Ln(1,1,1),new pn({name:"BackgroundCubeMaterial",uniforms:es(Gn.backgroundCube.uniforms),vertexShader:Gn.backgroundCube.vertexShader,fragmentShader:Gn.backgroundCube.fragmentShader,side:tn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(b,I,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),ts.copy(x.backgroundRotation),ts.x*=-1,ts.y*=-1,ts.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(ts.y*=-1,ts.z*=-1),h.material.uniforms.envMap.value=R,h.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(bg.makeRotationFromEuler(ts)),h.material.toneMapped=gt.getTransfer(R.colorSpace)!==St,(u!==R||m!==R.version||d!==i.toneMapping)&&(h.material.needsUpdate=!0,u=R,m=R.version,d=i.toneMapping),h.layers.enableAll(),S.unshift(h,h.geometry,h.material,0,0,null)):R&&R.isTexture&&(c===void 0&&(c=new Pt(new kn(2,2),new pn({name:"BackgroundMaterial",uniforms:es(Gn.background.uniforms),vertexShader:Gn.background.vertexShader,fragmentShader:Gn.background.fragmentShader,side:ei,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=R,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=gt.getTransfer(R.colorSpace)!==St,R.matrixAutoUpdate===!0&&R.updateMatrix(),c.material.uniforms.uvTransform.value.copy(R.matrix),(u!==R||m!==R.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,u=R,m=R.version,d=i.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function f(S,x){S.getRGB($a,hl(i)),n.buffers.color.setClear($a.r,$a.g,$a.b,x,o)}function _(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,x=1){a.set(S),l=x,f(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,f(a,l)},render:v,addToRenderList:p,dispose:_}}function wg(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=m(null),r=s,o=!1;function a(M,A,L,X,$){let se=!1,te=u(X,L,A);r!==te&&(r=te,c(r.object)),se=d(M,X,L,$),se&&g(M,X,L,$),$!==null&&e.update($,i.ELEMENT_ARRAY_BUFFER),(se||o)&&(o=!1,x(M,A,L,X),$!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get($).buffer))}function l(){return i.createVertexArray()}function c(M){return i.bindVertexArray(M)}function h(M){return i.deleteVertexArray(M)}function u(M,A,L){let X=L.wireframe===!0,$=n[M.id];$===void 0&&($={},n[M.id]=$);let se=$[A.id];se===void 0&&(se={},$[A.id]=se);let te=se[X];return te===void 0&&(te=m(l()),se[X]=te),te}function m(M){let A=[],L=[],X=[];for(let $=0;$<t;$++)A[$]=0,L[$]=0,X[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:A,enabledAttributes:L,attributeDivisors:X,object:M,attributes:{},index:null}}function d(M,A,L,X){let $=r.attributes,se=A.attributes,te=0,xe=L.getAttributes();for(let ne in xe)if(xe[ne].location>=0){let Ue=$[ne],D=se[ne];if(D===void 0&&(ne==="instanceMatrix"&&M.instanceMatrix&&(D=M.instanceMatrix),ne==="instanceColor"&&M.instanceColor&&(D=M.instanceColor)),Ue===void 0||Ue.attribute!==D||D&&Ue.data!==D.data)return!0;te++}return r.attributesNum!==te||r.index!==X}function g(M,A,L,X){let $={},se=A.attributes,te=0,xe=L.getAttributes();for(let ne in xe)if(xe[ne].location>=0){let Ue=se[ne];Ue===void 0&&(ne==="instanceMatrix"&&M.instanceMatrix&&(Ue=M.instanceMatrix),ne==="instanceColor"&&M.instanceColor&&(Ue=M.instanceColor));let D={};D.attribute=Ue,Ue&&Ue.data&&(D.data=Ue.data),$[ne]=D,te++}r.attributes=$,r.attributesNum=te,r.index=X}function v(){let M=r.newAttributes;for(let A=0,L=M.length;A<L;A++)M[A]=0}function p(M){f(M,0)}function f(M,A){let L=r.newAttributes,X=r.enabledAttributes,$=r.attributeDivisors;L[M]=1,X[M]===0&&(i.enableVertexAttribArray(M),X[M]=1),$[M]!==A&&(i.vertexAttribDivisor(M,A),$[M]=A)}function _(){let M=r.newAttributes,A=r.enabledAttributes;for(let L=0,X=A.length;L<X;L++)A[L]!==M[L]&&(i.disableVertexAttribArray(L),A[L]=0)}function S(M,A,L,X,$,se,te){te===!0?i.vertexAttribIPointer(M,A,L,$,se):i.vertexAttribPointer(M,A,L,X,$,se)}function x(M,A,L,X){v();let $=X.attributes,se=L.getAttributes(),te=A.defaultAttributeValues;for(let xe in se){let ne=se[xe];if(ne.location>=0){let Ce=$[xe];if(Ce===void 0&&(xe==="instanceMatrix"&&M.instanceMatrix&&(Ce=M.instanceMatrix),xe==="instanceColor"&&M.instanceColor&&(Ce=M.instanceColor)),Ce!==void 0){let Ue=Ce.normalized,D=Ce.itemSize,ce=e.get(Ce);if(ce===void 0)continue;let K=ce.buffer,Ae=ce.type,Re=ce.bytesPerElement,O=Ae===i.INT||Ae===i.UNSIGNED_INT||Ce.gpuType===ma;if(Ce.isInterleavedBufferAttribute){let W=Ce.data,j=W.stride,ee=Ce.offset;if(W.isInstancedInterleavedBuffer){for(let he=0;he<ne.locationSize;he++)f(ne.location+he,W.meshPerAttribute);M.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let he=0;he<ne.locationSize;he++)p(ne.location+he);i.bindBuffer(i.ARRAY_BUFFER,K);for(let he=0;he<ne.locationSize;he++)S(ne.location+he,D/ne.locationSize,Ae,Ue,j*Re,(ee+D/ne.locationSize*he)*Re,O)}else{if(Ce.isInstancedBufferAttribute){for(let W=0;W<ne.locationSize;W++)f(ne.location+W,Ce.meshPerAttribute);M.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=Ce.meshPerAttribute*Ce.count)}else for(let W=0;W<ne.locationSize;W++)p(ne.location+W);i.bindBuffer(i.ARRAY_BUFFER,K);for(let W=0;W<ne.locationSize;W++)S(ne.location+W,D/ne.locationSize,Ae,Ue,D*Re,D/ne.locationSize*W*Re,O)}}else if(te!==void 0){let Ue=te[xe];if(Ue!==void 0)switch(Ue.length){case 2:i.vertexAttrib2fv(ne.location,Ue);break;case 3:i.vertexAttrib3fv(ne.location,Ue);break;case 4:i.vertexAttrib4fv(ne.location,Ue);break;default:i.vertexAttrib1fv(ne.location,Ue)}}}}_()}function R(){P();for(let M in n){let A=n[M];for(let L in A){let X=A[L];for(let $ in X)h(X[$].object),delete X[$];delete A[L]}delete n[M]}}function b(M){if(n[M.id]===void 0)return;let A=n[M.id];for(let L in A){let X=A[L];for(let $ in X)h(X[$].object),delete X[$];delete A[L]}delete n[M.id]}function I(M){for(let A in n){let L=n[A];if(L[M.id]===void 0)continue;let X=L[M.id];for(let $ in X)h(X[$].object),delete X[$];delete L[M.id]}}function P(){T(),o=!0,r!==s&&(r=s,c(r.object))}function T(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:P,resetDefaultState:T,dispose:R,releaseStatesOfGeometry:b,releaseStatesOfProgram:I,initAttributes:v,enableAttribute:p,disableUnusedAttributes:_}}function Eg(i,e,t){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),t.update(h,n,1)}function o(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),t.update(h,n,u))}function a(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let d=0;for(let g=0;g<u;g++)d+=h[g];t.update(d,n,1)}function l(c,h,u,m){if(u===0)return;let d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)o(c[g],h[g],m[g]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,h,0,m,0,u);let g=0;for(let v=0;v<u;v++)g+=h[v]*m[v];t.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Ag(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let I=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(I){return!(I!==cn&&n.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(I){let P=I===Xs&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==Dn&&n.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==_n&&!P)}function l(I){if(I==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=t.logarithmicDepthBuffer===!0,m=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),_=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),S=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),R=g>0,b=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:m,maxTextures:d,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:p,maxAttributes:f,maxVertexUniforms:_,maxVaryings:S,maxFragmentUniforms:x,vertexTextures:R,maxSamples:b}}function Cg(i){let e=this,t=null,n=0,s=!1,r=!1,o=new Sn,a=new at,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,m){let d=u.length!==0||m||n!==0||s;return s=m,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,m){t=h(u,m,0)},this.setState=function(u,m,d){let g=u.clippingPlanes,v=u.clipIntersection,p=u.clipShadows,f=i.get(u);if(!s||g===null||g.length===0||r&&!p)r?h(null):c();else{let _=r?0:n,S=_*4,x=f.clippingState||null;l.value=x,x=h(g,m,S,d);for(let R=0;R!==S;++R)x[R]=t[R];f.clippingState=x,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,m,d,g){let v=u!==null?u.length:0,p=null;if(v!==0){if(p=l.value,g!==!0||p===null){let f=d+v*4,_=m.matrixWorldInverse;a.getNormalMatrix(_),(p===null||p.length<f)&&(p=new Float32Array(f));for(let S=0,x=d;S!==v;++S,x+=4)o.copy(u[S]).applyMatrix4(_,a),o.normal.toArray(p,x),p[x+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,p}}function Rg(i){let e=new WeakMap;function t(o,a){return a===Gs?o.mapping=Ki:a===da&&(o.mapping=ji),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Gs||a===da)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Ho(l.height);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var Js=4,bu=[.125,.215,.35,.446,.526,.582],ss=20,ml=new Vn,Tu=new rt,gl=null,_l=0,xl=0,vl=!1,is=(1+Math.sqrt(5))/2,Zs=1/is,wu=[new N(-is,Zs,0),new N(is,Zs,0),new N(-Zs,0,is),new N(Zs,0,is),new N(0,is,-Zs),new N(0,is,Zs),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)],Ig=new N,Ks=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100,r={}){let{size:o=256,position:a=Ig}=r;gl=this._renderer.getRenderTarget(),_l=this._renderer.getActiveCubeFace(),xl=this._renderer.getActiveMipmapLevel(),vl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Cu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Au(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(gl,_l,xl),this._renderer.xr.enabled=vl,e.scissorTest=!1,Ka(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ki||e.mapping===ji?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),gl=this._renderer.getRenderTarget(),_l=this._renderer.getActiveCubeFace(),xl=this._renderer.getActiveMipmapLevel(),vl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Vt,minFilter:Vt,generateMipmaps:!1,type:Xs,format:cn,colorSpace:Xi,depthBuffer:!1},s=Eu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Eu(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Pg(r)),this._blurMaterial=Lg(r,e,t)}return s}_compileMaterial(e){let t=new Pt(this._lodPlanes[0],e);this._renderer.compile(t,ml)}_sceneToCubeUV(e,t,n,s,r){let l=new rn(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,m=u.autoClear,d=u.toneMapping;u.getClearColor(Tu),u.toneMapping=ri,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null));let v=new dn({name:"PMREM.Background",side:tn,depthWrite:!1,depthTest:!1}),p=new Pt(new Ln,v),f=!1,_=e.background;_?_.isColor&&(v.color.copy(_),e.background=null,f=!0):(v.color.copy(Tu),f=!0);for(let S=0;S<6;S++){let x=S%3;x===0?(l.up.set(0,c[S],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[S],r.y,r.z)):x===1?(l.up.set(0,0,c[S]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[S],r.z)):(l.up.set(0,c[S],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[S]));let R=this._cubeSize;Ka(s,x*R,S>2?R:0,R,R),u.setRenderTarget(s),f&&u.render(p,l),u.render(e,l)}p.geometry.dispose(),p.material.dispose(),u.toneMapping=d,u.autoClear=m,e.background=_}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===Ki||e.mapping===ji;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Cu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Au());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new Pt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;Ka(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,ml)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=wu[(s-r-1)%wu.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Pt(this._lodPlanes[s],c),m=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*ss-1),v=r/g,p=isFinite(r)?1+Math.floor(h*v):ss;p>ss&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${ss}`);let f=[],_=0;for(let I=0;I<ss;++I){let P=I/v,T=Math.exp(-P*P/2);f.push(T),I===0?_+=T:I<p&&(_+=2*T)}for(let I=0;I<f.length;I++)f[I]=f[I]/_;m.envMap.value=e.texture,m.samples.value=p,m.weights.value=f,m.latitudinal.value=o==="latitudinal",a&&(m.poleAxis.value=a);let{_lodMax:S}=this;m.dTheta.value=g,m.mipInt.value=S-n;let x=this._sizeLods[s],R=3*x*(s>S-Js?s-S+Js:0),b=4*(this._cubeSize-x);Ka(t,R,b,3*x,2*x),l.setRenderTarget(t),l.render(u,ml)}};function Pg(i){let e=[],t=[],n=[],s=i,r=i-Js+1+bu.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let l=1/a;o>i-Js?l=bu[o-i+Js-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,u=1+c,m=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,g=6,v=3,p=2,f=1,_=new Float32Array(v*g*d),S=new Float32Array(p*g*d),x=new Float32Array(f*g*d);for(let b=0;b<d;b++){let I=b%3*2/3-1,P=b>2?0:-1,T=[I,P,0,I+2/3,P,0,I+2/3,P+1,0,I,P,0,I+2/3,P+1,0,I,P+1,0];_.set(T,v*g*b),S.set(m,p*g*b);let M=[b,b,b,b,b,b];x.set(M,f*g*b)}let R=new Ft;R.setAttribute("position",new Nt(_,v)),R.setAttribute("uv",new Nt(S,p)),R.setAttribute("faceIndex",new Nt(x,f)),e.push(R),s>Js&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Eu(i,e,t){let n=new bn(i,e,t);return n.texture.mapping=Gr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ka(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Lg(i,e,t){let n=new Float32Array(ss),s=new N(0,1,0);return new pn({name:"SphericalGaussianBlur",defines:{n:ss,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Rl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:si,depthTest:!1,depthWrite:!1})}function Au(){return new pn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Rl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:si,depthTest:!1,depthWrite:!1})}function Cu(){return new pn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Rl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:si,depthTest:!1,depthWrite:!1})}function Rl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Dg(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===Gs||l===da,h=l===Ki||l===ji;if(c||h){let u=e.get(a),m=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==m)return t===null&&(t=new Ks(i)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{let d=a.image;return c&&d&&d.height>0||h&&d&&s(d)?(t===null&&(t=new Ks(i)),u=c?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Ug(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Ps("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Ng(i,e,t,n){let s={},r=new WeakMap;function o(u){let m=u.target;m.index!==null&&e.remove(m.index);for(let g in m.attributes)e.remove(m.attributes[g]);m.removeEventListener("dispose",o),delete s[m.id];let d=r.get(m);d&&(e.remove(d),r.delete(m)),n.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,t.memory.geometries--}function a(u,m){return s[m.id]===!0||(m.addEventListener("dispose",o),s[m.id]=!0,t.memory.geometries++),m}function l(u){let m=u.attributes;for(let d in m)e.update(m[d],i.ARRAY_BUFFER)}function c(u){let m=[],d=u.index,g=u.attributes.position,v=0;if(d!==null){let _=d.array;v=d.version;for(let S=0,x=_.length;S<x;S+=3){let R=_[S+0],b=_[S+1],I=_[S+2];m.push(R,b,b,I,I,R)}}else if(g!==void 0){let _=g.array;v=g.version;for(let S=0,x=_.length/3-1;S<x;S+=3){let R=S+0,b=S+1,I=S+2;m.push(R,b,b,I,I,R)}}else return;let p=new(ll(m)?Mr:yr)(m,1);p.version=v;let f=r.get(u);f&&e.remove(f),r.set(u,p)}function h(u){let m=r.get(u);if(m){let d=u.index;d!==null&&m.version<d.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function Fg(i,e,t){let n;function s(m){n=m}let r,o;function a(m){r=m.type,o=m.bytesPerElement}function l(m,d){i.drawElements(n,d,r,m*o),t.update(d,n,1)}function c(m,d,g){g!==0&&(i.drawElementsInstanced(n,d,r,m*o,g),t.update(d,n,g))}function h(m,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,m,0,g);let p=0;for(let f=0;f<g;f++)p+=d[f];t.update(p,n,1)}function u(m,d,g,v){if(g===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let f=0;f<m.length;f++)c(m[f]/o,d[f],v[f]);else{p.multiDrawElementsInstancedWEBGL(n,d,0,r,m,0,v,0,g);let f=0;for(let _=0;_<g;_++)f+=d[_]*v[_];t.update(f,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Og(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Bg(i,e,t){let n=new WeakMap,s=new At;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,m=n.get(a);if(m===void 0||m.count!==u){let T=function(){I.dispose(),n.delete(a),a.removeEventListener("dispose",T)};m!==void 0&&m.texture.dispose();let d=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],f=a.morphAttributes.normal||[],_=a.morphAttributes.color||[],S=0;d===!0&&(S=1),g===!0&&(S=2),v===!0&&(S=3);let x=a.attributes.position.count*S,R=1;x>e.maxTextureSize&&(R=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);let b=new Float32Array(x*R*4*u),I=new xr(b,x,R,u);I.type=_n,I.needsUpdate=!0;let P=S*4;for(let M=0;M<u;M++){let A=p[M],L=f[M],X=_[M],$=x*R*4*M;for(let se=0;se<A.count;se++){let te=se*P;d===!0&&(s.fromBufferAttribute(A,se),b[$+te+0]=s.x,b[$+te+1]=s.y,b[$+te+2]=s.z,b[$+te+3]=0),g===!0&&(s.fromBufferAttribute(L,se),b[$+te+4]=s.x,b[$+te+5]=s.y,b[$+te+6]=s.z,b[$+te+7]=0),v===!0&&(s.fromBufferAttribute(X,se),b[$+te+8]=s.x,b[$+te+9]=s.y,b[$+te+10]=s.z,b[$+te+11]=X.itemSize===4?s.w:1)}}m={count:u,texture:I,size:new Ne(x,R)},n.set(a,m),a.addEventListener("dispose",T)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let d=0;for(let v=0;v<c.length;v++)d+=c[v];let g=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",m.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",m.size)}return{update:r}}function kg(i,e,t,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=e.get(l,h);if(s.get(u)!==c&&(e.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let m=l.skeleton;s.get(m)!==c&&(m.update(),s.set(m,c))}return u}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}var Yu=new en,Ru=new wr(1,1),Zu=new xr,Ju=new ko,$u=new br,Iu=[],Pu=[],Lu=new Float32Array(16),Du=new Float32Array(9),Uu=new Float32Array(4);function js(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Iu[s];if(r===void 0&&(r=new Float32Array(s),Iu[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function Bt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function kt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function ec(i,e){let t=Pu[e];t===void 0&&(t=new Int32Array(e),Pu[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function zg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Vg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;i.uniform2fv(this.addr,e),kt(t,e)}}function Hg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Bt(t,e))return;i.uniform3fv(this.addr,e),kt(t,e)}}function Gg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;i.uniform4fv(this.addr,e),kt(t,e)}}function Wg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Bt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),kt(t,e)}else{if(Bt(t,n))return;Uu.set(n),i.uniformMatrix2fv(this.addr,!1,Uu),kt(t,n)}}function Xg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Bt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),kt(t,e)}else{if(Bt(t,n))return;Du.set(n),i.uniformMatrix3fv(this.addr,!1,Du),kt(t,n)}}function qg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Bt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),kt(t,e)}else{if(Bt(t,n))return;Lu.set(n),i.uniformMatrix4fv(this.addr,!1,Lu),kt(t,n)}}function Yg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Zg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;i.uniform2iv(this.addr,e),kt(t,e)}}function Jg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Bt(t,e))return;i.uniform3iv(this.addr,e),kt(t,e)}}function $g(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;i.uniform4iv(this.addr,e),kt(t,e)}}function Kg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function jg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;i.uniform2uiv(this.addr,e),kt(t,e)}}function Qg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Bt(t,e))return;i.uniform3uiv(this.addr,e),kt(t,e)}}function e0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;i.uniform4uiv(this.addr,e),kt(t,e)}}function t0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Ru.compareFunction=ol,r=Ru):r=Yu,t.setTexture2D(e||r,s)}function n0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Ju,s)}function i0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||$u,s)}function s0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Zu,s)}function r0(i){switch(i){case 5126:return zg;case 35664:return Vg;case 35665:return Hg;case 35666:return Gg;case 35674:return Wg;case 35675:return Xg;case 35676:return qg;case 5124:case 35670:return Yg;case 35667:case 35671:return Zg;case 35668:case 35672:return Jg;case 35669:case 35673:return $g;case 5125:return Kg;case 36294:return jg;case 36295:return Qg;case 36296:return e0;case 35678:case 36198:case 36298:case 36306:case 35682:return t0;case 35679:case 36299:case 36307:return n0;case 35680:case 36300:case 36308:case 36293:return i0;case 36289:case 36303:case 36311:case 36292:return s0}}function o0(i,e){i.uniform1fv(this.addr,e)}function a0(i,e){let t=js(e,this.size,2);i.uniform2fv(this.addr,t)}function c0(i,e){let t=js(e,this.size,3);i.uniform3fv(this.addr,t)}function l0(i,e){let t=js(e,this.size,4);i.uniform4fv(this.addr,t)}function h0(i,e){let t=js(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function u0(i,e){let t=js(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function f0(i,e){let t=js(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function d0(i,e){i.uniform1iv(this.addr,e)}function p0(i,e){i.uniform2iv(this.addr,e)}function m0(i,e){i.uniform3iv(this.addr,e)}function g0(i,e){i.uniform4iv(this.addr,e)}function _0(i,e){i.uniform1uiv(this.addr,e)}function x0(i,e){i.uniform2uiv(this.addr,e)}function v0(i,e){i.uniform3uiv(this.addr,e)}function y0(i,e){i.uniform4uiv(this.addr,e)}function M0(i,e,t){let n=this.cache,s=e.length,r=ec(t,s);Bt(n,r)||(i.uniform1iv(this.addr,r),kt(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Yu,r[o])}function S0(i,e,t){let n=this.cache,s=e.length,r=ec(t,s);Bt(n,r)||(i.uniform1iv(this.addr,r),kt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Ju,r[o])}function b0(i,e,t){let n=this.cache,s=e.length,r=ec(t,s);Bt(n,r)||(i.uniform1iv(this.addr,r),kt(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||$u,r[o])}function T0(i,e,t){let n=this.cache,s=e.length,r=ec(t,s);Bt(n,r)||(i.uniform1iv(this.addr,r),kt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Zu,r[o])}function w0(i){switch(i){case 5126:return o0;case 35664:return a0;case 35665:return c0;case 35666:return l0;case 35674:return h0;case 35675:return u0;case 35676:return f0;case 5124:case 35670:return d0;case 35667:case 35671:return p0;case 35668:case 35672:return m0;case 35669:case 35673:return g0;case 5125:return _0;case 36294:return x0;case 36295:return v0;case 36296:return y0;case 35678:case 36198:case 36298:case 36306:case 35682:return M0;case 35679:case 36299:case 36307:return S0;case 35680:case 36300:case 36308:case 36293:return b0;case 36289:case 36303:case 36311:case 36292:return T0}}var Ml=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=r0(t.type)}},Sl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=w0(t.type)}},bl=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},yl=/(\w+)(\])?(\[|\.)?/g;function Nu(i,e){i.seq.push(e),i.map[e.id]=e}function E0(i,e,t){let n=i.name,s=n.length;for(yl.lastIndex=0;;){let r=yl.exec(n),o=yl.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Nu(t,c===void 0?new Ml(a,i,e):new Sl(a,i,e));break}else{let u=t.map[a];u===void 0&&(u=new bl(a),Nu(t,u)),t=u}}}var $s=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);E0(r,o,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function Fu(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var A0=37297,C0=0;function R0(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var Ou=new at;function I0(i){gt._getMatrix(Ou,gt.workingColorSpace,i);let e=`mat3( ${Ou.elements.map(t=>t.toFixed(4))} )`;switch(gt.getTransfer(i)){case mr:return[e,"LinearTransferOETF"];case St:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Bu(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+R0(i.getShaderSource(e),a)}else return r}function P0(i,e){let t=I0(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function L0(i,e){let t;switch(e){case $h:t="Linear";break;case Kh:t="Reinhard";break;case jh:t="Cineon";break;case Qh:t="ACESFilmic";break;case tu:t="AgX";break;case nu:t="Neutral";break;case eu:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var ja=new N;function D0(){gt.getLuminanceCoefficients(ja);let i=ja.x.toFixed(4),e=ja.y.toFixed(4),t=ja.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function U0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter($r).join(`
`)}function N0(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function F0(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function $r(i){return i!==""}function ku(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function zu(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var O0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Tl(i){return i.replace(O0,k0)}var B0=new Map;function k0(i,e){let t=ht[e];if(t===void 0){let n=B0.get(e);if(n!==void 0)t=ht[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Tl(t)}var z0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Vu(i){return i.replace(z0,V0)}function V0(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Hu(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function H0(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Hr?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Rh?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Hn&&(e="SHADOWMAP_TYPE_VSM"),e}function G0(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ki:case ji:e="ENVMAP_TYPE_CUBE";break;case Gr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function W0(i){let e="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===ji&&(e="ENVMAP_MODE_REFRACTION"),e}function X0(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case $c:e="ENVMAP_BLENDING_MULTIPLY";break;case Zh:e="ENVMAP_BLENDING_MIX";break;case Jh:e="ENVMAP_BLENDING_ADD";break}return e}function q0(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Y0(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=H0(t),c=G0(t),h=W0(t),u=X0(t),m=q0(t),d=U0(t),g=N0(r),v=s.createProgram(),p,f,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter($r).join(`
`),p.length>0&&(p+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter($r).join(`
`),f.length>0&&(f+=`
`)):(p=[Hu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter($r).join(`
`),f=[Hu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ri?"#define TONE_MAPPING":"",t.toneMapping!==ri?ht.tonemapping_pars_fragment:"",t.toneMapping!==ri?L0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ht.colorspace_pars_fragment,P0("linearToOutputTexel",t.outputColorSpace),D0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter($r).join(`
`)),o=Tl(o),o=ku(o,t),o=zu(o,t),a=Tl(a),a=ku(a,t),a=zu(a,t),o=Vu(o),a=Vu(a),t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,p=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,f=["#define varying in",t.glslVersion===al?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===al?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let S=_+p+o,x=_+f+a,R=Fu(s,s.VERTEX_SHADER,S),b=Fu(s,s.FRAGMENT_SHADER,x);s.attachShader(v,R),s.attachShader(v,b),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function I(A){if(i.debug.checkShaderErrors){let L=s.getProgramInfoLog(v)||"",X=s.getShaderInfoLog(R)||"",$=s.getShaderInfoLog(b)||"",se=L.trim(),te=X.trim(),xe=$.trim(),ne=!0,Ce=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(ne=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,R,b);else{let Ue=Bu(s,R,"vertex"),D=Bu(s,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+se+`
`+Ue+`
`+D)}else se!==""?console.warn("THREE.WebGLProgram: Program Info Log:",se):(te===""||xe==="")&&(Ce=!1);Ce&&(A.diagnostics={runnable:ne,programLog:se,vertexShader:{log:te,prefix:p},fragmentShader:{log:xe,prefix:f}})}s.deleteShader(R),s.deleteShader(b),P=new $s(s,v),T=F0(s,v)}let P;this.getUniforms=function(){return P===void 0&&I(this),P};let T;this.getAttributes=function(){return T===void 0&&I(this),T};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(v,A0)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=C0++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=R,this.fragmentShader=b,this}var Z0=0,wl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new El(e),t.set(e,n)),n}},El=class{constructor(e){this.id=Z0++,this.code=e,this.usedTimes=0}};function J0(i,e,t,n,s,r,o){let a=new vr,l=new wl,c=new Set,h=[],u=s.logarithmicDepthBuffer,m=s.vertexTextures,d=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(T){return c.add(T),T===0?"uv":`uv${T}`}function p(T,M,A,L,X){let $=L.fog,se=X.geometry,te=T.isMeshStandardMaterial?L.environment:null,xe=(T.isMeshStandardMaterial?t:e).get(T.envMap||te),ne=xe&&xe.mapping===Gr?xe.image.height:null,Ce=g[T.type];T.precision!==null&&(d=s.getMaxPrecision(T.precision),d!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",d,"instead."));let Ue=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,D=Ue!==void 0?Ue.length:0,ce=0;se.morphAttributes.position!==void 0&&(ce=1),se.morphAttributes.normal!==void 0&&(ce=2),se.morphAttributes.color!==void 0&&(ce=3);let K,Ae,Re,O;if(Ce){let ct=Gn[Ce];K=ct.vertexShader,Ae=ct.fragmentShader}else K=T.vertexShader,Ae=T.fragmentShader,l.update(T),Re=l.getVertexShaderID(T),O=l.getFragmentShaderID(T);let W=i.getRenderTarget(),j=i.state.buffers.depth.getReversed(),ee=X.isInstancedMesh===!0,he=X.isBatchedMesh===!0,Oe=!!T.map,Be=!!T.matcap,C=!!xe,B=!!T.aoMap,Y=!!T.lightMap,Z=!!T.bumpMap,H=!!T.normalMap,ge=!!T.displacementMap,ae=!!T.emissiveMap,de=!!T.metalnessMap,Xe=!!T.roughnessMap,ke=T.anisotropy>0,E=T.clearcoat>0,y=T.dispersion>0,V=T.iridescence>0,Q=T.sheen>0,pe=T.transmission>0,re=ke&&!!T.anisotropyMap,ze=E&&!!T.clearcoatMap,Ee=E&&!!T.clearcoatNormalMap,ue=E&&!!T.clearcoatRoughnessMap,_e=V&&!!T.iridescenceMap,fe=V&&!!T.iridescenceThicknessMap,ye=Q&&!!T.sheenColorMap,Fe=Q&&!!T.sheenRoughnessMap,Pe=!!T.specularMap,be=!!T.specularColorMap,$e=!!T.specularIntensityMap,U=pe&&!!T.transmissionMap,ve=pe&&!!T.thicknessMap,Te=!!T.gradientMap,De=!!T.alphaMap,Me=T.alphaTest>0,le=!!T.alphaHash,We=!!T.extensions,et=ri;T.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&(et=i.toneMapping);let xt={shaderID:Ce,shaderType:T.type,shaderName:T.name,vertexShader:K,fragmentShader:Ae,defines:T.defines,customVertexShaderID:Re,customFragmentShaderID:O,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:d,batching:he,batchingColor:he&&X._colorsTexture!==null,instancing:ee,instancingColor:ee&&X.instanceColor!==null,instancingMorph:ee&&X.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:W===null?i.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:Xi,alphaToCoverage:!!T.alphaToCoverage,map:Oe,matcap:Be,envMap:C,envMapMode:C&&xe.mapping,envMapCubeUVHeight:ne,aoMap:B,lightMap:Y,bumpMap:Z,normalMap:H,displacementMap:m&&ge,emissiveMap:ae,normalMapObjectSpace:H&&T.normalMapType===ou,normalMapTangentSpace:H&&T.normalMapType===rl,metalnessMap:de,roughnessMap:Xe,anisotropy:ke,anisotropyMap:re,clearcoat:E,clearcoatMap:ze,clearcoatNormalMap:Ee,clearcoatRoughnessMap:ue,dispersion:y,iridescence:V,iridescenceMap:_e,iridescenceThicknessMap:fe,sheen:Q,sheenColorMap:ye,sheenRoughnessMap:Fe,specularMap:Pe,specularColorMap:be,specularIntensityMap:$e,transmission:pe,transmissionMap:U,thicknessMap:ve,gradientMap:Te,opaque:T.transparent===!1&&T.blending===Gi&&T.alphaToCoverage===!1,alphaMap:De,alphaTest:Me,alphaHash:le,combine:T.combine,mapUv:Oe&&v(T.map.channel),aoMapUv:B&&v(T.aoMap.channel),lightMapUv:Y&&v(T.lightMap.channel),bumpMapUv:Z&&v(T.bumpMap.channel),normalMapUv:H&&v(T.normalMap.channel),displacementMapUv:ge&&v(T.displacementMap.channel),emissiveMapUv:ae&&v(T.emissiveMap.channel),metalnessMapUv:de&&v(T.metalnessMap.channel),roughnessMapUv:Xe&&v(T.roughnessMap.channel),anisotropyMapUv:re&&v(T.anisotropyMap.channel),clearcoatMapUv:ze&&v(T.clearcoatMap.channel),clearcoatNormalMapUv:Ee&&v(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ue&&v(T.clearcoatRoughnessMap.channel),iridescenceMapUv:_e&&v(T.iridescenceMap.channel),iridescenceThicknessMapUv:fe&&v(T.iridescenceThicknessMap.channel),sheenColorMapUv:ye&&v(T.sheenColorMap.channel),sheenRoughnessMapUv:Fe&&v(T.sheenRoughnessMap.channel),specularMapUv:Pe&&v(T.specularMap.channel),specularColorMapUv:be&&v(T.specularColorMap.channel),specularIntensityMapUv:$e&&v(T.specularIntensityMap.channel),transmissionMapUv:U&&v(T.transmissionMap.channel),thicknessMapUv:ve&&v(T.thicknessMap.channel),alphaMapUv:De&&v(T.alphaMap.channel),vertexTangents:!!se.attributes.tangent&&(H||ke),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,pointsUvs:X.isPoints===!0&&!!se.attributes.uv&&(Oe||De),fog:!!$,useFog:T.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:T.flatShading===!0&&T.wireframe===!1,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:j,skinning:X.isSkinnedMesh===!0,morphTargets:se.morphAttributes.position!==void 0,morphNormals:se.morphAttributes.normal!==void 0,morphColors:se.morphAttributes.color!==void 0,morphTargetsCount:D,morphTextureStride:ce,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:T.dithering,shadowMapEnabled:i.shadowMap.enabled&&A.length>0,shadowMapType:i.shadowMap.type,toneMapping:et,decodeVideoTexture:Oe&&T.map.isVideoTexture===!0&&gt.getTransfer(T.map.colorSpace)===St,decodeVideoTextureEmissive:ae&&T.emissiveMap.isVideoTexture===!0&&gt.getTransfer(T.emissiveMap.colorSpace)===St,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===an,flipSided:T.side===tn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:We&&T.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(We&&T.extensions.multiDraw===!0||he)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return xt.vertexUv1s=c.has(1),xt.vertexUv2s=c.has(2),xt.vertexUv3s=c.has(3),c.clear(),xt}function f(T){let M=[];if(T.shaderID?M.push(T.shaderID):(M.push(T.customVertexShaderID),M.push(T.customFragmentShaderID)),T.defines!==void 0)for(let A in T.defines)M.push(A),M.push(T.defines[A]);return T.isRawShaderMaterial===!1&&(_(M,T),S(M,T),M.push(i.outputColorSpace)),M.push(T.customProgramCacheKey),M.join()}function _(T,M){T.push(M.precision),T.push(M.outputColorSpace),T.push(M.envMapMode),T.push(M.envMapCubeUVHeight),T.push(M.mapUv),T.push(M.alphaMapUv),T.push(M.lightMapUv),T.push(M.aoMapUv),T.push(M.bumpMapUv),T.push(M.normalMapUv),T.push(M.displacementMapUv),T.push(M.emissiveMapUv),T.push(M.metalnessMapUv),T.push(M.roughnessMapUv),T.push(M.anisotropyMapUv),T.push(M.clearcoatMapUv),T.push(M.clearcoatNormalMapUv),T.push(M.clearcoatRoughnessMapUv),T.push(M.iridescenceMapUv),T.push(M.iridescenceThicknessMapUv),T.push(M.sheenColorMapUv),T.push(M.sheenRoughnessMapUv),T.push(M.specularMapUv),T.push(M.specularColorMapUv),T.push(M.specularIntensityMapUv),T.push(M.transmissionMapUv),T.push(M.thicknessMapUv),T.push(M.combine),T.push(M.fogExp2),T.push(M.sizeAttenuation),T.push(M.morphTargetsCount),T.push(M.morphAttributeCount),T.push(M.numDirLights),T.push(M.numPointLights),T.push(M.numSpotLights),T.push(M.numSpotLightMaps),T.push(M.numHemiLights),T.push(M.numRectAreaLights),T.push(M.numDirLightShadows),T.push(M.numPointLightShadows),T.push(M.numSpotLightShadows),T.push(M.numSpotLightShadowsWithMaps),T.push(M.numLightProbes),T.push(M.shadowMapType),T.push(M.toneMapping),T.push(M.numClippingPlanes),T.push(M.numClipIntersection),T.push(M.depthPacking)}function S(T,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),M.gradientMap&&a.enable(22),T.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),T.push(a.mask)}function x(T){let M=g[T.type],A;if(M){let L=Gn[M];A=_u.clone(L.uniforms)}else A=T.uniforms;return A}function R(T,M){let A;for(let L=0,X=h.length;L<X;L++){let $=h[L];if($.cacheKey===M){A=$,++A.usedTimes;break}}return A===void 0&&(A=new Y0(i,M,T,r),h.push(A)),A}function b(T){if(--T.usedTimes===0){let M=h.indexOf(T);h[M]=h[h.length-1],h.pop(),T.destroy()}}function I(T){l.remove(T)}function P(){l.dispose()}return{getParameters:p,getProgramCacheKey:f,getUniforms:x,acquireProgram:R,releaseProgram:b,releaseShaderCache:I,programs:h,dispose:P}}function $0(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function K0(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Gu(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Wu(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(u,m,d,g,v,p){let f=i[e];return f===void 0?(f={id:u.id,object:u,geometry:m,material:d,groupOrder:g,renderOrder:u.renderOrder,z:v,group:p},i[e]=f):(f.id=u.id,f.object=u,f.geometry=m,f.material=d,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=v,f.group=p),e++,f}function a(u,m,d,g,v,p){let f=o(u,m,d,g,v,p);d.transmission>0?n.push(f):d.transparent===!0?s.push(f):t.push(f)}function l(u,m,d,g,v,p){let f=o(u,m,d,g,v,p);d.transmission>0?n.unshift(f):d.transparent===!0?s.unshift(f):t.unshift(f)}function c(u,m){t.length>1&&t.sort(u||K0),n.length>1&&n.sort(m||Gu),s.length>1&&s.sort(m||Gu)}function h(){for(let u=e,m=i.length;u<m;u++){let d=i[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function j0(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new Wu,i.set(n,[o])):s>=r.length?(o=new Wu,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function Q0(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new N,color:new rt};break;case"SpotLight":t={position:new N,direction:new N,color:new rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new rt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new rt,groundColor:new rt};break;case"RectAreaLight":t={color:new rt,position:new N,halfWidth:new N,halfHeight:new N};break}return i[e.id]=t,t}}}function e_(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var t_=0;function n_(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function i_(i){let e=new Q0,t=e_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new N);let s=new N,r=new Tt,o=new Tt;function a(c){let h=0,u=0,m=0;for(let T=0;T<9;T++)n.probe[T].set(0,0,0);let d=0,g=0,v=0,p=0,f=0,_=0,S=0,x=0,R=0,b=0,I=0;c.sort(n_);for(let T=0,M=c.length;T<M;T++){let A=c[T],L=A.color,X=A.intensity,$=A.distance,se=A.shadow&&A.shadow.map?A.shadow.map.texture:null;if(A.isAmbientLight)h+=L.r*X,u+=L.g*X,m+=L.b*X;else if(A.isLightProbe){for(let te=0;te<9;te++)n.probe[te].addScaledVector(A.sh.coefficients[te],X);I++}else if(A.isDirectionalLight){let te=e.get(A);if(te.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){let xe=A.shadow,ne=t.get(A);ne.shadowIntensity=xe.intensity,ne.shadowBias=xe.bias,ne.shadowNormalBias=xe.normalBias,ne.shadowRadius=xe.radius,ne.shadowMapSize=xe.mapSize,n.directionalShadow[d]=ne,n.directionalShadowMap[d]=se,n.directionalShadowMatrix[d]=A.shadow.matrix,_++}n.directional[d]=te,d++}else if(A.isSpotLight){let te=e.get(A);te.position.setFromMatrixPosition(A.matrixWorld),te.color.copy(L).multiplyScalar(X),te.distance=$,te.coneCos=Math.cos(A.angle),te.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),te.decay=A.decay,n.spot[v]=te;let xe=A.shadow;if(A.map&&(n.spotLightMap[R]=A.map,R++,xe.updateMatrices(A),A.castShadow&&b++),n.spotLightMatrix[v]=xe.matrix,A.castShadow){let ne=t.get(A);ne.shadowIntensity=xe.intensity,ne.shadowBias=xe.bias,ne.shadowNormalBias=xe.normalBias,ne.shadowRadius=xe.radius,ne.shadowMapSize=xe.mapSize,n.spotShadow[v]=ne,n.spotShadowMap[v]=se,x++}v++}else if(A.isRectAreaLight){let te=e.get(A);te.color.copy(L).multiplyScalar(X),te.halfWidth.set(A.width*.5,0,0),te.halfHeight.set(0,A.height*.5,0),n.rectArea[p]=te,p++}else if(A.isPointLight){let te=e.get(A);if(te.color.copy(A.color).multiplyScalar(A.intensity),te.distance=A.distance,te.decay=A.decay,A.castShadow){let xe=A.shadow,ne=t.get(A);ne.shadowIntensity=xe.intensity,ne.shadowBias=xe.bias,ne.shadowNormalBias=xe.normalBias,ne.shadowRadius=xe.radius,ne.shadowMapSize=xe.mapSize,ne.shadowCameraNear=xe.camera.near,ne.shadowCameraFar=xe.camera.far,n.pointShadow[g]=ne,n.pointShadowMap[g]=se,n.pointShadowMatrix[g]=A.shadow.matrix,S++}n.point[g]=te,g++}else if(A.isHemisphereLight){let te=e.get(A);te.skyColor.copy(A.color).multiplyScalar(X),te.groundColor.copy(A.groundColor).multiplyScalar(X),n.hemi[f]=te,f++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ge.LTC_FLOAT_1,n.rectAreaLTC2=Ge.LTC_FLOAT_2):(n.rectAreaLTC1=Ge.LTC_HALF_1,n.rectAreaLTC2=Ge.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=m;let P=n.hash;(P.directionalLength!==d||P.pointLength!==g||P.spotLength!==v||P.rectAreaLength!==p||P.hemiLength!==f||P.numDirectionalShadows!==_||P.numPointShadows!==S||P.numSpotShadows!==x||P.numSpotMaps!==R||P.numLightProbes!==I)&&(n.directional.length=d,n.spot.length=v,n.rectArea.length=p,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=_,n.directionalShadowMap.length=_,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=_,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=x+R-b,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=I,P.directionalLength=d,P.pointLength=g,P.spotLength=v,P.rectAreaLength=p,P.hemiLength=f,P.numDirectionalShadows=_,P.numPointShadows=S,P.numSpotShadows=x,P.numSpotMaps=R,P.numLightProbes=I,n.version=t_++)}function l(c,h){let u=0,m=0,d=0,g=0,v=0,p=h.matrixWorldInverse;for(let f=0,_=c.length;f<_;f++){let S=c[f];if(S.isDirectionalLight){let x=n.directional[u];x.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(p),u++}else if(S.isSpotLight){let x=n.spot[d];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(p),x.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(p),d++}else if(S.isRectAreaLight){let x=n.rectArea[g];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(p),o.identity(),r.copy(S.matrixWorld),r.premultiply(p),o.extractRotation(r),x.halfWidth.set(S.width*.5,0,0),x.halfHeight.set(0,S.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(S.isPointLight){let x=n.point[m];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(p),m++}else if(S.isHemisphereLight){let x=n.hemi[v];x.direction.setFromMatrixPosition(S.matrixWorld),x.direction.transformDirection(p),v++}}}return{setup:a,setupView:l,state:n}}function Xu(i){let e=new i_(i),t=[],n=[];function s(h){c.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function l(h){e.setupView(t,h)}let c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function s_(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new Xu(i),e.set(s,[a])):r>=o.length?(a=new Xu(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var r_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,o_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function a_(i,e,t){let n=new Ns,s=new Ne,r=new Ne,o=new At,a=new Zo({depthPacking:ru}),l=new Jo,c={},h=t.maxTextureSize,u={[ei]:tn,[tn]:ei,[an]:an},m=new pn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ne},radius:{value:4}},vertexShader:r_,fragmentShader:o_}),d=m.clone();d.defines.HORIZONTAL_PASS=1;let g=new Ft;g.setAttribute("position",new Nt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new Pt(g,m),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Hr;let f=this.type;this.render=function(b,I,P){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||b.length===0)return;let T=i.getRenderTarget(),M=i.getActiveCubeFace(),A=i.getActiveMipmapLevel(),L=i.state;L.setBlending(si),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);let X=f!==Hn&&this.type===Hn,$=f===Hn&&this.type!==Hn;for(let se=0,te=b.length;se<te;se++){let xe=b[se],ne=xe.shadow;if(ne===void 0){console.warn("THREE.WebGLShadowMap:",xe,"has no shadow.");continue}if(ne.autoUpdate===!1&&ne.needsUpdate===!1)continue;s.copy(ne.mapSize);let Ce=ne.getFrameExtents();if(s.multiply(Ce),r.copy(ne.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/Ce.x),s.x=r.x*Ce.x,ne.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/Ce.y),s.y=r.y*Ce.y,ne.mapSize.y=r.y)),ne.map===null||X===!0||$===!0){let D=this.type!==Hn?{minFilter:on,magFilter:on}:{};ne.map!==null&&ne.map.dispose(),ne.map=new bn(s.x,s.y,D),ne.map.texture.name=xe.name+".shadowMap",ne.camera.updateProjectionMatrix()}i.setRenderTarget(ne.map),i.clear();let Ue=ne.getViewportCount();for(let D=0;D<Ue;D++){let ce=ne.getViewport(D);o.set(r.x*ce.x,r.y*ce.y,r.x*ce.z,r.y*ce.w),L.viewport(o),ne.updateMatrices(xe,D),n=ne.getFrustum(),x(I,P,ne.camera,xe,this.type)}ne.isPointLightShadow!==!0&&this.type===Hn&&_(ne,P),ne.needsUpdate=!1}f=this.type,p.needsUpdate=!1,i.setRenderTarget(T,M,A)};function _(b,I){let P=e.update(v);m.defines.VSM_SAMPLES!==b.blurSamples&&(m.defines.VSM_SAMPLES=b.blurSamples,d.defines.VSM_SAMPLES=b.blurSamples,m.needsUpdate=!0,d.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new bn(s.x,s.y)),m.uniforms.shadow_pass.value=b.map.texture,m.uniforms.resolution.value=b.mapSize,m.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(I,null,P,m,v,null),d.uniforms.shadow_pass.value=b.mapPass.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(I,null,P,d,v,null)}function S(b,I,P,T){let M=null,A=P.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(A!==void 0)M=A;else if(M=P.isPointLight===!0?l:a,i.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){let L=M.uuid,X=I.uuid,$=c[L];$===void 0&&($={},c[L]=$);let se=$[X];se===void 0&&(se=M.clone(),$[X]=se,I.addEventListener("dispose",R)),M=se}if(M.visible=I.visible,M.wireframe=I.wireframe,T===Hn?M.side=I.shadowSide!==null?I.shadowSide:I.side:M.side=I.shadowSide!==null?I.shadowSide:u[I.side],M.alphaMap=I.alphaMap,M.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,M.map=I.map,M.clipShadows=I.clipShadows,M.clippingPlanes=I.clippingPlanes,M.clipIntersection=I.clipIntersection,M.displacementMap=I.displacementMap,M.displacementScale=I.displacementScale,M.displacementBias=I.displacementBias,M.wireframeLinewidth=I.wireframeLinewidth,M.linewidth=I.linewidth,P.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let L=i.properties.get(M);L.light=P}return M}function x(b,I,P,T,M){if(b.visible===!1)return;if(b.layers.test(I.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&M===Hn)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,b.matrixWorld);let X=e.update(b),$=b.material;if(Array.isArray($)){let se=X.groups;for(let te=0,xe=se.length;te<xe;te++){let ne=se[te],Ce=$[ne.materialIndex];if(Ce&&Ce.visible){let Ue=S(b,Ce,T,M);b.onBeforeShadow(i,b,I,P,X,Ue,ne),i.renderBufferDirect(P,null,X,Ue,b,ne),b.onAfterShadow(i,b,I,P,X,Ue,ne)}}}else if($.visible){let se=S(b,$,T,M);b.onBeforeShadow(i,b,I,P,X,se,null),i.renderBufferDirect(P,null,X,se,b,null),b.onAfterShadow(i,b,I,P,X,se,null)}}let L=b.children;for(let X=0,$=L.length;X<$;X++)x(L[X],I,P,T,M)}function R(b){b.target.removeEventListener("dispose",R);for(let P in c){let T=c[P],M=b.target.uuid;M in T&&(T[M].dispose(),delete T[M])}}}var c_={[oa]:aa,[ca]:ua,[la]:fa,[Wi]:ha,[aa]:oa,[ua]:ca,[fa]:la,[ha]:Wi};function l_(i,e){function t(){let U=!1,ve=new At,Te=null,De=new At(0,0,0,0);return{setMask:function(Me){Te!==Me&&!U&&(i.colorMask(Me,Me,Me,Me),Te=Me)},setLocked:function(Me){U=Me},setClear:function(Me,le,We,et,xt){xt===!0&&(Me*=et,le*=et,We*=et),ve.set(Me,le,We,et),De.equals(ve)===!1&&(i.clearColor(Me,le,We,et),De.copy(ve))},reset:function(){U=!1,Te=null,De.set(-1,0,0,0)}}}function n(){let U=!1,ve=!1,Te=null,De=null,Me=null;return{setReversed:function(le){if(ve!==le){let We=e.get("EXT_clip_control");le?We.clipControlEXT(We.LOWER_LEFT_EXT,We.ZERO_TO_ONE_EXT):We.clipControlEXT(We.LOWER_LEFT_EXT,We.NEGATIVE_ONE_TO_ONE_EXT),ve=le;let et=Me;Me=null,this.setClear(et)}},getReversed:function(){return ve},setTest:function(le){le?W(i.DEPTH_TEST):j(i.DEPTH_TEST)},setMask:function(le){Te!==le&&!U&&(i.depthMask(le),Te=le)},setFunc:function(le){if(ve&&(le=c_[le]),De!==le){switch(le){case oa:i.depthFunc(i.NEVER);break;case aa:i.depthFunc(i.ALWAYS);break;case ca:i.depthFunc(i.LESS);break;case Wi:i.depthFunc(i.LEQUAL);break;case la:i.depthFunc(i.EQUAL);break;case ha:i.depthFunc(i.GEQUAL);break;case ua:i.depthFunc(i.GREATER);break;case fa:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}De=le}},setLocked:function(le){U=le},setClear:function(le){Me!==le&&(ve&&(le=1-le),i.clearDepth(le),Me=le)},reset:function(){U=!1,Te=null,De=null,Me=null,ve=!1}}}function s(){let U=!1,ve=null,Te=null,De=null,Me=null,le=null,We=null,et=null,xt=null;return{setTest:function(ct){U||(ct?W(i.STENCIL_TEST):j(i.STENCIL_TEST))},setMask:function(ct){ve!==ct&&!U&&(i.stencilMask(ct),ve=ct)},setFunc:function(ct,xn,vn){(Te!==ct||De!==xn||Me!==vn)&&(i.stencilFunc(ct,xn,vn),Te=ct,De=xn,Me=vn)},setOp:function(ct,xn,vn){(le!==ct||We!==xn||et!==vn)&&(i.stencilOp(ct,xn,vn),le=ct,We=xn,et=vn)},setLocked:function(ct){U=ct},setClear:function(ct){xt!==ct&&(i.clearStencil(ct),xt=ct)},reset:function(){U=!1,ve=null,Te=null,De=null,Me=null,le=null,We=null,et=null,xt=null}}}let r=new t,o=new n,a=new s,l=new WeakMap,c=new WeakMap,h={},u={},m=new WeakMap,d=[],g=null,v=!1,p=null,f=null,_=null,S=null,x=null,R=null,b=null,I=new rt(0,0,0),P=0,T=!1,M=null,A=null,L=null,X=null,$=null,se=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),te=!1,xe=0,ne=i.getParameter(i.VERSION);ne.indexOf("WebGL")!==-1?(xe=parseFloat(/^WebGL (\d)/.exec(ne)[1]),te=xe>=1):ne.indexOf("OpenGL ES")!==-1&&(xe=parseFloat(/^OpenGL ES (\d)/.exec(ne)[1]),te=xe>=2);let Ce=null,Ue={},D=i.getParameter(i.SCISSOR_BOX),ce=i.getParameter(i.VIEWPORT),K=new At().fromArray(D),Ae=new At().fromArray(ce);function Re(U,ve,Te,De){let Me=new Uint8Array(4),le=i.createTexture();i.bindTexture(U,le),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let We=0;We<Te;We++)U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY?i.texImage3D(ve,0,i.RGBA,1,1,De,0,i.RGBA,i.UNSIGNED_BYTE,Me):i.texImage2D(ve+We,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Me);return le}let O={};O[i.TEXTURE_2D]=Re(i.TEXTURE_2D,i.TEXTURE_2D,1),O[i.TEXTURE_CUBE_MAP]=Re(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),O[i.TEXTURE_2D_ARRAY]=Re(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),O[i.TEXTURE_3D]=Re(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),W(i.DEPTH_TEST),o.setFunc(Wi),Z(!1),H(qc),W(i.CULL_FACE),B(si);function W(U){h[U]!==!0&&(i.enable(U),h[U]=!0)}function j(U){h[U]!==!1&&(i.disable(U),h[U]=!1)}function ee(U,ve){return u[U]!==ve?(i.bindFramebuffer(U,ve),u[U]=ve,U===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=ve),U===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=ve),!0):!1}function he(U,ve){let Te=d,De=!1;if(U){Te=m.get(ve),Te===void 0&&(Te=[],m.set(ve,Te));let Me=U.textures;if(Te.length!==Me.length||Te[0]!==i.COLOR_ATTACHMENT0){for(let le=0,We=Me.length;le<We;le++)Te[le]=i.COLOR_ATTACHMENT0+le;Te.length=Me.length,De=!0}}else Te[0]!==i.BACK&&(Te[0]=i.BACK,De=!0);De&&i.drawBuffers(Te)}function Oe(U){return g!==U?(i.useProgram(U),g=U,!0):!1}let Be={[Mi]:i.FUNC_ADD,[Ph]:i.FUNC_SUBTRACT,[Lh]:i.FUNC_REVERSE_SUBTRACT};Be[Dh]=i.MIN,Be[Uh]=i.MAX;let C={[Nh]:i.ZERO,[Fh]:i.ONE,[Oh]:i.SRC_COLOR,[Do]:i.SRC_ALPHA,[Gh]:i.SRC_ALPHA_SATURATE,[Vh]:i.DST_COLOR,[kh]:i.DST_ALPHA,[Bh]:i.ONE_MINUS_SRC_COLOR,[Uo]:i.ONE_MINUS_SRC_ALPHA,[Hh]:i.ONE_MINUS_DST_COLOR,[zh]:i.ONE_MINUS_DST_ALPHA,[Wh]:i.CONSTANT_COLOR,[Xh]:i.ONE_MINUS_CONSTANT_COLOR,[qh]:i.CONSTANT_ALPHA,[Yh]:i.ONE_MINUS_CONSTANT_ALPHA};function B(U,ve,Te,De,Me,le,We,et,xt,ct){if(U===si){v===!0&&(j(i.BLEND),v=!1);return}if(v===!1&&(W(i.BLEND),v=!0),U!==Ih){if(U!==p||ct!==T){if((f!==Mi||x!==Mi)&&(i.blendEquation(i.FUNC_ADD),f=Mi,x=Mi),ct)switch(U){case Gi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Yc:i.blendFunc(i.ONE,i.ONE);break;case Zc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Jc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Gi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Yc:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Zc:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Jc:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}_=null,S=null,R=null,b=null,I.set(0,0,0),P=0,p=U,T=ct}return}Me=Me||ve,le=le||Te,We=We||De,(ve!==f||Me!==x)&&(i.blendEquationSeparate(Be[ve],Be[Me]),f=ve,x=Me),(Te!==_||De!==S||le!==R||We!==b)&&(i.blendFuncSeparate(C[Te],C[De],C[le],C[We]),_=Te,S=De,R=le,b=We),(et.equals(I)===!1||xt!==P)&&(i.blendColor(et.r,et.g,et.b,xt),I.copy(et),P=xt),p=U,T=!1}function Y(U,ve){U.side===an?j(i.CULL_FACE):W(i.CULL_FACE);let Te=U.side===tn;ve&&(Te=!Te),Z(Te),U.blending===Gi&&U.transparent===!1?B(si):B(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),r.setMask(U.colorWrite);let De=U.stencilWrite;a.setTest(De),De&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),ae(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?W(i.SAMPLE_ALPHA_TO_COVERAGE):j(i.SAMPLE_ALPHA_TO_COVERAGE)}function Z(U){M!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),M=U)}function H(U){U!==Ah?(W(i.CULL_FACE),U!==A&&(U===qc?i.cullFace(i.BACK):U===Ch?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):j(i.CULL_FACE),A=U}function ge(U){U!==L&&(te&&i.lineWidth(U),L=U)}function ae(U,ve,Te){U?(W(i.POLYGON_OFFSET_FILL),(X!==ve||$!==Te)&&(i.polygonOffset(ve,Te),X=ve,$=Te)):j(i.POLYGON_OFFSET_FILL)}function de(U){U?W(i.SCISSOR_TEST):j(i.SCISSOR_TEST)}function Xe(U){U===void 0&&(U=i.TEXTURE0+se-1),Ce!==U&&(i.activeTexture(U),Ce=U)}function ke(U,ve,Te){Te===void 0&&(Ce===null?Te=i.TEXTURE0+se-1:Te=Ce);let De=Ue[Te];De===void 0&&(De={type:void 0,texture:void 0},Ue[Te]=De),(De.type!==U||De.texture!==ve)&&(Ce!==Te&&(i.activeTexture(Te),Ce=Te),i.bindTexture(U,ve||O[U]),De.type=U,De.texture=ve)}function E(){let U=Ue[Ce];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function y(){try{i.compressedTexImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function V(){try{i.compressedTexImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Q(){try{i.texSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function pe(){try{i.texSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function re(){try{i.compressedTexSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ze(){try{i.compressedTexSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ee(){try{i.texStorage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ue(){try{i.texStorage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function _e(){try{i.texImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function fe(){try{i.texImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ye(U){K.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),K.copy(U))}function Fe(U){Ae.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),Ae.copy(U))}function Pe(U,ve){let Te=c.get(ve);Te===void 0&&(Te=new WeakMap,c.set(ve,Te));let De=Te.get(U);De===void 0&&(De=i.getUniformBlockIndex(ve,U.name),Te.set(U,De))}function be(U,ve){let De=c.get(ve).get(U);l.get(ve)!==De&&(i.uniformBlockBinding(ve,De,U.__bindingPointIndex),l.set(ve,De))}function $e(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},Ce=null,Ue={},u={},m=new WeakMap,d=[],g=null,v=!1,p=null,f=null,_=null,S=null,x=null,R=null,b=null,I=new rt(0,0,0),P=0,T=!1,M=null,A=null,L=null,X=null,$=null,K.set(0,0,i.canvas.width,i.canvas.height),Ae.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:W,disable:j,bindFramebuffer:ee,drawBuffers:he,useProgram:Oe,setBlending:B,setMaterial:Y,setFlipSided:Z,setCullFace:H,setLineWidth:ge,setPolygonOffset:ae,setScissorTest:de,activeTexture:Xe,bindTexture:ke,unbindTexture:E,compressedTexImage2D:y,compressedTexImage3D:V,texImage2D:_e,texImage3D:fe,updateUBOMapping:Pe,uniformBlockBinding:be,texStorage2D:Ee,texStorage3D:ue,texSubImage2D:Q,texSubImage3D:pe,compressedTexSubImage2D:re,compressedTexSubImage3D:ze,scissor:ye,viewport:Fe,reset:$e}}function h_(i,e,t,n,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ne,h=new WeakMap,u,m=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(E,y){return d?new OffscreenCanvas(E,y):_r("canvas")}function v(E,y,V){let Q=1,pe=ke(E);if((pe.width>V||pe.height>V)&&(Q=V/Math.max(pe.width,pe.height)),Q<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){let re=Math.floor(Q*pe.width),ze=Math.floor(Q*pe.height);u===void 0&&(u=g(re,ze));let Ee=y?g(re,ze):u;return Ee.width=re,Ee.height=ze,Ee.getContext("2d").drawImage(E,0,0,re,ze),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+pe.width+"x"+pe.height+") to ("+re+"x"+ze+")."),Ee}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+pe.width+"x"+pe.height+")."),E;return E}function p(E){return E.generateMipmaps}function f(E){i.generateMipmap(E)}function _(E){return E.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?i.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function S(E,y,V,Q,pe=!1){if(E!==null){if(i[E]!==void 0)return i[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let re=y;if(y===i.RED&&(V===i.FLOAT&&(re=i.R32F),V===i.HALF_FLOAT&&(re=i.R16F),V===i.UNSIGNED_BYTE&&(re=i.R8)),y===i.RED_INTEGER&&(V===i.UNSIGNED_BYTE&&(re=i.R8UI),V===i.UNSIGNED_SHORT&&(re=i.R16UI),V===i.UNSIGNED_INT&&(re=i.R32UI),V===i.BYTE&&(re=i.R8I),V===i.SHORT&&(re=i.R16I),V===i.INT&&(re=i.R32I)),y===i.RG&&(V===i.FLOAT&&(re=i.RG32F),V===i.HALF_FLOAT&&(re=i.RG16F),V===i.UNSIGNED_BYTE&&(re=i.RG8)),y===i.RG_INTEGER&&(V===i.UNSIGNED_BYTE&&(re=i.RG8UI),V===i.UNSIGNED_SHORT&&(re=i.RG16UI),V===i.UNSIGNED_INT&&(re=i.RG32UI),V===i.BYTE&&(re=i.RG8I),V===i.SHORT&&(re=i.RG16I),V===i.INT&&(re=i.RG32I)),y===i.RGB_INTEGER&&(V===i.UNSIGNED_BYTE&&(re=i.RGB8UI),V===i.UNSIGNED_SHORT&&(re=i.RGB16UI),V===i.UNSIGNED_INT&&(re=i.RGB32UI),V===i.BYTE&&(re=i.RGB8I),V===i.SHORT&&(re=i.RGB16I),V===i.INT&&(re=i.RGB32I)),y===i.RGBA_INTEGER&&(V===i.UNSIGNED_BYTE&&(re=i.RGBA8UI),V===i.UNSIGNED_SHORT&&(re=i.RGBA16UI),V===i.UNSIGNED_INT&&(re=i.RGBA32UI),V===i.BYTE&&(re=i.RGBA8I),V===i.SHORT&&(re=i.RGBA16I),V===i.INT&&(re=i.RGBA32I)),y===i.RGB&&(V===i.UNSIGNED_INT_5_9_9_9_REV&&(re=i.RGB9_E5),V===i.UNSIGNED_INT_10F_11F_11F_REV&&(re=i.R11F_G11F_B10F)),y===i.RGBA){let ze=pe?mr:gt.getTransfer(Q);V===i.FLOAT&&(re=i.RGBA32F),V===i.HALF_FLOAT&&(re=i.RGBA16F),V===i.UNSIGNED_BYTE&&(re=ze===St?i.SRGB8_ALPHA8:i.RGBA8),V===i.UNSIGNED_SHORT_4_4_4_4&&(re=i.RGBA4),V===i.UNSIGNED_SHORT_5_5_5_1&&(re=i.RGB5_A1)}return(re===i.R16F||re===i.R32F||re===i.RG16F||re===i.RG32F||re===i.RGBA16F||re===i.RGBA32F)&&e.get("EXT_color_buffer_float"),re}function x(E,y){let V;return E?y===null||y===Ri||y===qs?V=i.DEPTH24_STENCIL8:y===_n?V=i.DEPTH32F_STENCIL8:y===Ws&&(V=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Ri||y===qs?V=i.DEPTH_COMPONENT24:y===_n?V=i.DEPTH_COMPONENT32F:y===Ws&&(V=i.DEPTH_COMPONENT16),V}function R(E,y){return p(E)===!0||E.isFramebufferTexture&&E.minFilter!==on&&E.minFilter!==Vt?Math.log2(Math.max(y.width,y.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?y.mipmaps.length:1}function b(E){let y=E.target;y.removeEventListener("dispose",b),P(y),y.isVideoTexture&&h.delete(y)}function I(E){let y=E.target;y.removeEventListener("dispose",I),M(y)}function P(E){let y=n.get(E);if(y.__webglInit===void 0)return;let V=E.source,Q=m.get(V);if(Q){let pe=Q[y.__cacheKey];pe.usedTimes--,pe.usedTimes===0&&T(E),Object.keys(Q).length===0&&m.delete(V)}n.remove(E)}function T(E){let y=n.get(E);i.deleteTexture(y.__webglTexture);let V=E.source,Q=m.get(V);delete Q[y.__cacheKey],o.memory.textures--}function M(E){let y=n.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),n.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(y.__webglFramebuffer[Q]))for(let pe=0;pe<y.__webglFramebuffer[Q].length;pe++)i.deleteFramebuffer(y.__webglFramebuffer[Q][pe]);else i.deleteFramebuffer(y.__webglFramebuffer[Q]);y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer[Q])}else{if(Array.isArray(y.__webglFramebuffer))for(let Q=0;Q<y.__webglFramebuffer.length;Q++)i.deleteFramebuffer(y.__webglFramebuffer[Q]);else i.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let Q=0;Q<y.__webglColorRenderbuffer.length;Q++)y.__webglColorRenderbuffer[Q]&&i.deleteRenderbuffer(y.__webglColorRenderbuffer[Q]);y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let V=E.textures;for(let Q=0,pe=V.length;Q<pe;Q++){let re=n.get(V[Q]);re.__webglTexture&&(i.deleteTexture(re.__webglTexture),o.memory.textures--),n.remove(V[Q])}n.remove(E)}let A=0;function L(){A=0}function X(){let E=A;return E>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+s.maxTextures),A+=1,E}function $(E){let y=[];return y.push(E.wrapS),y.push(E.wrapT),y.push(E.wrapR||0),y.push(E.magFilter),y.push(E.minFilter),y.push(E.anisotropy),y.push(E.internalFormat),y.push(E.format),y.push(E.type),y.push(E.generateMipmaps),y.push(E.premultiplyAlpha),y.push(E.flipY),y.push(E.unpackAlignment),y.push(E.colorSpace),y.join()}function se(E,y){let V=n.get(E);if(E.isVideoTexture&&de(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&V.__version!==E.version){let Q=E.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{O(V,E,y);return}}else E.isExternalTexture&&(V.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,V.__webglTexture,i.TEXTURE0+y)}function te(E,y){let V=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&V.__version!==E.version){O(V,E,y);return}t.bindTexture(i.TEXTURE_2D_ARRAY,V.__webglTexture,i.TEXTURE0+y)}function xe(E,y){let V=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&V.__version!==E.version){O(V,E,y);return}t.bindTexture(i.TEXTURE_3D,V.__webglTexture,i.TEXTURE0+y)}function ne(E,y){let V=n.get(E);if(E.version>0&&V.__version!==E.version){W(V,E,y);return}t.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture,i.TEXTURE0+y)}let Ce={[Cs]:i.REPEAT,[yi]:i.CLAMP_TO_EDGE,[No]:i.MIRRORED_REPEAT},Ue={[on]:i.NEAREST,[iu]:i.NEAREST_MIPMAP_NEAREST,[Wr]:i.NEAREST_MIPMAP_LINEAR,[Vt]:i.LINEAR,[pa]:i.LINEAR_MIPMAP_NEAREST,[Ci]:i.LINEAR_MIPMAP_LINEAR},D={[au]:i.NEVER,[du]:i.ALWAYS,[cu]:i.LESS,[ol]:i.LEQUAL,[lu]:i.EQUAL,[fu]:i.GEQUAL,[hu]:i.GREATER,[uu]:i.NOTEQUAL};function ce(E,y){if(y.type===_n&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===Vt||y.magFilter===pa||y.magFilter===Wr||y.magFilter===Ci||y.minFilter===Vt||y.minFilter===pa||y.minFilter===Wr||y.minFilter===Ci)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(E,i.TEXTURE_WRAP_S,Ce[y.wrapS]),i.texParameteri(E,i.TEXTURE_WRAP_T,Ce[y.wrapT]),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,Ce[y.wrapR]),i.texParameteri(E,i.TEXTURE_MAG_FILTER,Ue[y.magFilter]),i.texParameteri(E,i.TEXTURE_MIN_FILTER,Ue[y.minFilter]),y.compareFunction&&(i.texParameteri(E,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(E,i.TEXTURE_COMPARE_FUNC,D[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===on||y.minFilter!==Wr&&y.minFilter!==Ci||y.type===_n&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){let V=e.get("EXT_texture_filter_anisotropic");i.texParameterf(E,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function K(E,y){let V=!1;E.__webglInit===void 0&&(E.__webglInit=!0,y.addEventListener("dispose",b));let Q=y.source,pe=m.get(Q);pe===void 0&&(pe={},m.set(Q,pe));let re=$(y);if(re!==E.__cacheKey){pe[re]===void 0&&(pe[re]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,V=!0),pe[re].usedTimes++;let ze=pe[E.__cacheKey];ze!==void 0&&(pe[E.__cacheKey].usedTimes--,ze.usedTimes===0&&T(y)),E.__cacheKey=re,E.__webglTexture=pe[re].texture}return V}function Ae(E,y,V){return Math.floor(Math.floor(E/V)/y)}function Re(E,y,V,Q){let re=E.updateRanges;if(re.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,y.width,y.height,V,Q,y.data);else{re.sort((fe,ye)=>fe.start-ye.start);let ze=0;for(let fe=1;fe<re.length;fe++){let ye=re[ze],Fe=re[fe],Pe=ye.start+ye.count,be=Ae(Fe.start,y.width,4),$e=Ae(ye.start,y.width,4);Fe.start<=Pe+1&&be===$e&&Ae(Fe.start+Fe.count-1,y.width,4)===be?ye.count=Math.max(ye.count,Fe.start+Fe.count-ye.start):(++ze,re[ze]=Fe)}re.length=ze+1;let Ee=i.getParameter(i.UNPACK_ROW_LENGTH),ue=i.getParameter(i.UNPACK_SKIP_PIXELS),_e=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,y.width);for(let fe=0,ye=re.length;fe<ye;fe++){let Fe=re[fe],Pe=Math.floor(Fe.start/4),be=Math.ceil(Fe.count/4),$e=Pe%y.width,U=Math.floor(Pe/y.width),ve=be,Te=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,$e),i.pixelStorei(i.UNPACK_SKIP_ROWS,U),t.texSubImage2D(i.TEXTURE_2D,0,$e,U,ve,Te,V,Q,y.data)}E.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,Ee),i.pixelStorei(i.UNPACK_SKIP_PIXELS,ue),i.pixelStorei(i.UNPACK_SKIP_ROWS,_e)}}function O(E,y,V){let Q=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(Q=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(Q=i.TEXTURE_3D);let pe=K(E,y),re=y.source;t.bindTexture(Q,E.__webglTexture,i.TEXTURE0+V);let ze=n.get(re);if(re.version!==ze.__version||pe===!0){t.activeTexture(i.TEXTURE0+V);let Ee=gt.getPrimaries(gt.workingColorSpace),ue=y.colorSpace===oi?null:gt.getPrimaries(y.colorSpace),_e=y.colorSpace===oi||Ee===ue?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);let fe=v(y.image,!1,s.maxTextureSize);fe=Xe(y,fe);let ye=r.convert(y.format,y.colorSpace),Fe=r.convert(y.type),Pe=S(y.internalFormat,ye,Fe,y.colorSpace,y.isVideoTexture);ce(Q,y);let be,$e=y.mipmaps,U=y.isVideoTexture!==!0,ve=ze.__version===void 0||pe===!0,Te=re.dataReady,De=R(y,fe);if(y.isDepthTexture)Pe=x(y.format===Ys,y.type),ve&&(U?t.texStorage2D(i.TEXTURE_2D,1,Pe,fe.width,fe.height):t.texImage2D(i.TEXTURE_2D,0,Pe,fe.width,fe.height,0,ye,Fe,null));else if(y.isDataTexture)if($e.length>0){U&&ve&&t.texStorage2D(i.TEXTURE_2D,De,Pe,$e[0].width,$e[0].height);for(let Me=0,le=$e.length;Me<le;Me++)be=$e[Me],U?Te&&t.texSubImage2D(i.TEXTURE_2D,Me,0,0,be.width,be.height,ye,Fe,be.data):t.texImage2D(i.TEXTURE_2D,Me,Pe,be.width,be.height,0,ye,Fe,be.data);y.generateMipmaps=!1}else U?(ve&&t.texStorage2D(i.TEXTURE_2D,De,Pe,fe.width,fe.height),Te&&Re(y,fe,ye,Fe)):t.texImage2D(i.TEXTURE_2D,0,Pe,fe.width,fe.height,0,ye,Fe,fe.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){U&&ve&&t.texStorage3D(i.TEXTURE_2D_ARRAY,De,Pe,$e[0].width,$e[0].height,fe.depth);for(let Me=0,le=$e.length;Me<le;Me++)if(be=$e[Me],y.format!==cn)if(ye!==null)if(U){if(Te)if(y.layerUpdates.size>0){let We=pl(be.width,be.height,y.format,y.type);for(let et of y.layerUpdates){let xt=be.data.subarray(et*We/be.data.BYTES_PER_ELEMENT,(et+1)*We/be.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Me,0,0,et,be.width,be.height,1,ye,xt)}y.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Me,0,0,0,be.width,be.height,fe.depth,ye,be.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Me,Pe,be.width,be.height,fe.depth,0,be.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else U?Te&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Me,0,0,0,be.width,be.height,fe.depth,ye,Fe,be.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Me,Pe,be.width,be.height,fe.depth,0,ye,Fe,be.data)}else{U&&ve&&t.texStorage2D(i.TEXTURE_2D,De,Pe,$e[0].width,$e[0].height);for(let Me=0,le=$e.length;Me<le;Me++)be=$e[Me],y.format!==cn?ye!==null?U?Te&&t.compressedTexSubImage2D(i.TEXTURE_2D,Me,0,0,be.width,be.height,ye,be.data):t.compressedTexImage2D(i.TEXTURE_2D,Me,Pe,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):U?Te&&t.texSubImage2D(i.TEXTURE_2D,Me,0,0,be.width,be.height,ye,Fe,be.data):t.texImage2D(i.TEXTURE_2D,Me,Pe,be.width,be.height,0,ye,Fe,be.data)}else if(y.isDataArrayTexture)if(U){if(ve&&t.texStorage3D(i.TEXTURE_2D_ARRAY,De,Pe,fe.width,fe.height,fe.depth),Te)if(y.layerUpdates.size>0){let Me=pl(fe.width,fe.height,y.format,y.type);for(let le of y.layerUpdates){let We=fe.data.subarray(le*Me/fe.data.BYTES_PER_ELEMENT,(le+1)*Me/fe.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,le,fe.width,fe.height,1,ye,Fe,We)}y.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,fe.width,fe.height,fe.depth,ye,Fe,fe.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Pe,fe.width,fe.height,fe.depth,0,ye,Fe,fe.data);else if(y.isData3DTexture)U?(ve&&t.texStorage3D(i.TEXTURE_3D,De,Pe,fe.width,fe.height,fe.depth),Te&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,fe.width,fe.height,fe.depth,ye,Fe,fe.data)):t.texImage3D(i.TEXTURE_3D,0,Pe,fe.width,fe.height,fe.depth,0,ye,Fe,fe.data);else if(y.isFramebufferTexture){if(ve)if(U)t.texStorage2D(i.TEXTURE_2D,De,Pe,fe.width,fe.height);else{let Me=fe.width,le=fe.height;for(let We=0;We<De;We++)t.texImage2D(i.TEXTURE_2D,We,Pe,Me,le,0,ye,Fe,null),Me>>=1,le>>=1}}else if($e.length>0){if(U&&ve){let Me=ke($e[0]);t.texStorage2D(i.TEXTURE_2D,De,Pe,Me.width,Me.height)}for(let Me=0,le=$e.length;Me<le;Me++)be=$e[Me],U?Te&&t.texSubImage2D(i.TEXTURE_2D,Me,0,0,ye,Fe,be):t.texImage2D(i.TEXTURE_2D,Me,Pe,ye,Fe,be);y.generateMipmaps=!1}else if(U){if(ve){let Me=ke(fe);t.texStorage2D(i.TEXTURE_2D,De,Pe,Me.width,Me.height)}Te&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ye,Fe,fe)}else t.texImage2D(i.TEXTURE_2D,0,Pe,ye,Fe,fe);p(y)&&f(Q),ze.__version=re.version,y.onUpdate&&y.onUpdate(y)}E.__version=y.version}function W(E,y,V){if(y.image.length!==6)return;let Q=K(E,y),pe=y.source;t.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+V);let re=n.get(pe);if(pe.version!==re.__version||Q===!0){t.activeTexture(i.TEXTURE0+V);let ze=gt.getPrimaries(gt.workingColorSpace),Ee=y.colorSpace===oi?null:gt.getPrimaries(y.colorSpace),ue=y.colorSpace===oi||ze===Ee?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue);let _e=y.isCompressedTexture||y.image[0].isCompressedTexture,fe=y.image[0]&&y.image[0].isDataTexture,ye=[];for(let le=0;le<6;le++)!_e&&!fe?ye[le]=v(y.image[le],!0,s.maxCubemapSize):ye[le]=fe?y.image[le].image:y.image[le],ye[le]=Xe(y,ye[le]);let Fe=ye[0],Pe=r.convert(y.format,y.colorSpace),be=r.convert(y.type),$e=S(y.internalFormat,Pe,be,y.colorSpace),U=y.isVideoTexture!==!0,ve=re.__version===void 0||Q===!0,Te=pe.dataReady,De=R(y,Fe);ce(i.TEXTURE_CUBE_MAP,y);let Me;if(_e){U&&ve&&t.texStorage2D(i.TEXTURE_CUBE_MAP,De,$e,Fe.width,Fe.height);for(let le=0;le<6;le++){Me=ye[le].mipmaps;for(let We=0;We<Me.length;We++){let et=Me[We];y.format!==cn?Pe!==null?U?Te&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,We,0,0,et.width,et.height,Pe,et.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,We,$e,et.width,et.height,0,et.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?Te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,We,0,0,et.width,et.height,Pe,be,et.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,We,$e,et.width,et.height,0,Pe,be,et.data)}}}else{if(Me=y.mipmaps,U&&ve){Me.length>0&&De++;let le=ke(ye[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,De,$e,le.width,le.height)}for(let le=0;le<6;le++)if(fe){U?Te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,ye[le].width,ye[le].height,Pe,be,ye[le].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,$e,ye[le].width,ye[le].height,0,Pe,be,ye[le].data);for(let We=0;We<Me.length;We++){let xt=Me[We].image[le].image;U?Te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,We+1,0,0,xt.width,xt.height,Pe,be,xt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,We+1,$e,xt.width,xt.height,0,Pe,be,xt.data)}}else{U?Te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,Pe,be,ye[le]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,$e,Pe,be,ye[le]);for(let We=0;We<Me.length;We++){let et=Me[We];U?Te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,We+1,0,0,Pe,be,et.image[le]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,We+1,$e,Pe,be,et.image[le])}}}p(y)&&f(i.TEXTURE_CUBE_MAP),re.__version=pe.version,y.onUpdate&&y.onUpdate(y)}E.__version=y.version}function j(E,y,V,Q,pe,re){let ze=r.convert(V.format,V.colorSpace),Ee=r.convert(V.type),ue=S(V.internalFormat,ze,Ee,V.colorSpace),_e=n.get(y),fe=n.get(V);if(fe.__renderTarget=y,!_e.__hasExternalTextures){let ye=Math.max(1,y.width>>re),Fe=Math.max(1,y.height>>re);pe===i.TEXTURE_3D||pe===i.TEXTURE_2D_ARRAY?t.texImage3D(pe,re,ue,ye,Fe,y.depth,0,ze,Ee,null):t.texImage2D(pe,re,ue,ye,Fe,0,ze,Ee,null)}t.bindFramebuffer(i.FRAMEBUFFER,E),ae(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Q,pe,fe.__webglTexture,0,ge(y)):(pe===i.TEXTURE_2D||pe>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&pe<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Q,pe,fe.__webglTexture,re),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ee(E,y,V){if(i.bindRenderbuffer(i.RENDERBUFFER,E),y.depthBuffer){let Q=y.depthTexture,pe=Q&&Q.isDepthTexture?Q.type:null,re=x(y.stencilBuffer,pe),ze=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ee=ge(y);ae(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ee,re,y.width,y.height):V?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ee,re,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,re,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ze,i.RENDERBUFFER,E)}else{let Q=y.textures;for(let pe=0;pe<Q.length;pe++){let re=Q[pe],ze=r.convert(re.format,re.colorSpace),Ee=r.convert(re.type),ue=S(re.internalFormat,ze,Ee,re.colorSpace),_e=ge(y);V&&ae(y)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,_e,ue,y.width,y.height):ae(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,_e,ue,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,ue,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function he(E,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,E),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let Q=n.get(y.depthTexture);Q.__renderTarget=y,(!Q.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),se(y.depthTexture,0);let pe=Q.__webglTexture,re=ge(y);if(y.depthTexture.format===Rs)ae(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,pe,0,re):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,pe,0);else if(y.depthTexture.format===Ys)ae(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,pe,0,re):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,pe,0);else throw new Error("Unknown depthTexture format")}function Oe(E){let y=n.get(E),V=E.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==E.depthTexture){let Q=E.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),Q){let pe=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,Q.removeEventListener("dispose",pe)};Q.addEventListener("dispose",pe),y.__depthDisposeCallback=pe}y.__boundDepthTexture=Q}if(E.depthTexture&&!y.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");let Q=E.texture.mipmaps;Q&&Q.length>0?he(y.__webglFramebuffer[0],E):he(y.__webglFramebuffer,E)}else if(V){y.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[Q]),y.__webglDepthbuffer[Q]===void 0)y.__webglDepthbuffer[Q]=i.createRenderbuffer(),ee(y.__webglDepthbuffer[Q],E,!1);else{let pe=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,re=y.__webglDepthbuffer[Q];i.bindRenderbuffer(i.RENDERBUFFER,re),i.framebufferRenderbuffer(i.FRAMEBUFFER,pe,i.RENDERBUFFER,re)}}else{let Q=E.texture.mipmaps;if(Q&&Q.length>0?t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=i.createRenderbuffer(),ee(y.__webglDepthbuffer,E,!1);else{let pe=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,re=y.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,re),i.framebufferRenderbuffer(i.FRAMEBUFFER,pe,i.RENDERBUFFER,re)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Be(E,y,V){let Q=n.get(E);y!==void 0&&j(Q.__webglFramebuffer,E,E.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),V!==void 0&&Oe(E)}function C(E){let y=E.texture,V=n.get(E),Q=n.get(y);E.addEventListener("dispose",I);let pe=E.textures,re=E.isWebGLCubeRenderTarget===!0,ze=pe.length>1;if(ze||(Q.__webglTexture===void 0&&(Q.__webglTexture=i.createTexture()),Q.__version=y.version,o.memory.textures++),re){V.__webglFramebuffer=[];for(let Ee=0;Ee<6;Ee++)if(y.mipmaps&&y.mipmaps.length>0){V.__webglFramebuffer[Ee]=[];for(let ue=0;ue<y.mipmaps.length;ue++)V.__webglFramebuffer[Ee][ue]=i.createFramebuffer()}else V.__webglFramebuffer[Ee]=i.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){V.__webglFramebuffer=[];for(let Ee=0;Ee<y.mipmaps.length;Ee++)V.__webglFramebuffer[Ee]=i.createFramebuffer()}else V.__webglFramebuffer=i.createFramebuffer();if(ze)for(let Ee=0,ue=pe.length;Ee<ue;Ee++){let _e=n.get(pe[Ee]);_e.__webglTexture===void 0&&(_e.__webglTexture=i.createTexture(),o.memory.textures++)}if(E.samples>0&&ae(E)===!1){V.__webglMultisampledFramebuffer=i.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let Ee=0;Ee<pe.length;Ee++){let ue=pe[Ee];V.__webglColorRenderbuffer[Ee]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,V.__webglColorRenderbuffer[Ee]);let _e=r.convert(ue.format,ue.colorSpace),fe=r.convert(ue.type),ye=S(ue.internalFormat,_e,fe,ue.colorSpace,E.isXRRenderTarget===!0),Fe=ge(E);i.renderbufferStorageMultisample(i.RENDERBUFFER,Fe,ye,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ee,i.RENDERBUFFER,V.__webglColorRenderbuffer[Ee])}i.bindRenderbuffer(i.RENDERBUFFER,null),E.depthBuffer&&(V.__webglDepthRenderbuffer=i.createRenderbuffer(),ee(V.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(re){t.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture),ce(i.TEXTURE_CUBE_MAP,y);for(let Ee=0;Ee<6;Ee++)if(y.mipmaps&&y.mipmaps.length>0)for(let ue=0;ue<y.mipmaps.length;ue++)j(V.__webglFramebuffer[Ee][ue],E,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,ue);else j(V.__webglFramebuffer[Ee],E,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0);p(y)&&f(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ze){for(let Ee=0,ue=pe.length;Ee<ue;Ee++){let _e=pe[Ee],fe=n.get(_e),ye=i.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(ye=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ye,fe.__webglTexture),ce(ye,_e),j(V.__webglFramebuffer,E,_e,i.COLOR_ATTACHMENT0+Ee,ye,0),p(_e)&&f(ye)}t.unbindTexture()}else{let Ee=i.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(Ee=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Ee,Q.__webglTexture),ce(Ee,y),y.mipmaps&&y.mipmaps.length>0)for(let ue=0;ue<y.mipmaps.length;ue++)j(V.__webglFramebuffer[ue],E,y,i.COLOR_ATTACHMENT0,Ee,ue);else j(V.__webglFramebuffer,E,y,i.COLOR_ATTACHMENT0,Ee,0);p(y)&&f(Ee),t.unbindTexture()}E.depthBuffer&&Oe(E)}function B(E){let y=E.textures;for(let V=0,Q=y.length;V<Q;V++){let pe=y[V];if(p(pe)){let re=_(E),ze=n.get(pe).__webglTexture;t.bindTexture(re,ze),f(re),t.unbindTexture()}}}let Y=[],Z=[];function H(E){if(E.samples>0){if(ae(E)===!1){let y=E.textures,V=E.width,Q=E.height,pe=i.COLOR_BUFFER_BIT,re=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ze=n.get(E),Ee=y.length>1;if(Ee)for(let _e=0;_e<y.length;_e++)t.bindFramebuffer(i.FRAMEBUFFER,ze.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ze.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ze.__webglMultisampledFramebuffer);let ue=E.texture.mipmaps;ue&&ue.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ze.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ze.__webglFramebuffer);for(let _e=0;_e<y.length;_e++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(pe|=i.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(pe|=i.STENCIL_BUFFER_BIT)),Ee){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ze.__webglColorRenderbuffer[_e]);let fe=n.get(y[_e]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,fe,0)}i.blitFramebuffer(0,0,V,Q,0,0,V,Q,pe,i.NEAREST),l===!0&&(Y.length=0,Z.length=0,Y.push(i.COLOR_ATTACHMENT0+_e),E.depthBuffer&&E.resolveDepthBuffer===!1&&(Y.push(re),Z.push(re),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Z)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Y))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Ee)for(let _e=0;_e<y.length;_e++){t.bindFramebuffer(i.FRAMEBUFFER,ze.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.RENDERBUFFER,ze.__webglColorRenderbuffer[_e]);let fe=n.get(y[_e]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ze.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.TEXTURE_2D,fe,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ze.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&l){let y=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[y])}}}function ge(E){return Math.min(s.maxSamples,E.samples)}function ae(E){let y=n.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function de(E){let y=o.render.frame;h.get(E)!==y&&(h.set(E,y),E.update())}function Xe(E,y){let V=E.colorSpace,Q=E.format,pe=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||V!==Xi&&V!==oi&&(gt.getTransfer(V)===St?(Q!==cn||pe!==Dn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),y}function ke(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=X,this.resetTextureUnits=L,this.setTexture2D=se,this.setTexture2DArray=te,this.setTexture3D=xe,this.setTextureCube=ne,this.rebindTextures=Be,this.setupRenderTarget=C,this.updateRenderTargetMipmap=B,this.updateMultisampleRenderTarget=H,this.setupDepthRenderbuffer=Oe,this.setupFrameBufferTexture=j,this.useMultisampledRTT=ae}function u_(i,e){function t(n,s=oi){let r,o=gt.getTransfer(s);if(n===Dn)return i.UNSIGNED_BYTE;if(n===ga)return i.UNSIGNED_SHORT_4_4_4_4;if(n===_a)return i.UNSIGNED_SHORT_5_5_5_1;if(n===el)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===tl)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===jc)return i.BYTE;if(n===Qc)return i.SHORT;if(n===Ws)return i.UNSIGNED_SHORT;if(n===ma)return i.INT;if(n===Ri)return i.UNSIGNED_INT;if(n===_n)return i.FLOAT;if(n===Xs)return i.HALF_FLOAT;if(n===nl)return i.ALPHA;if(n===il)return i.RGB;if(n===cn)return i.RGBA;if(n===Rs)return i.DEPTH_COMPONENT;if(n===Ys)return i.DEPTH_STENCIL;if(n===xa)return i.RED;if(n===va)return i.RED_INTEGER;if(n===sl)return i.RG;if(n===ya)return i.RG_INTEGER;if(n===Ma)return i.RGBA_INTEGER;if(n===Xr||n===qr||n===Yr||n===Zr)if(o===St)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Xr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===qr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Yr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Zr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Xr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===qr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Yr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Zr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Sa||n===ba||n===Ta||n===wa)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Sa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ba)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ta)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===wa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ea||n===Aa||n===Ca)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ea||n===Aa)return o===St?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ca)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ra||n===Ia||n===Pa||n===La||n===Da||n===Ua||n===Na||n===Fa||n===Oa||n===Ba||n===ka||n===za||n===Va||n===Ha)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ra)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ia)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Pa)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===La)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Da)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ua)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Na)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Fa)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Oa)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ba)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ka)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===za)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Va)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ha)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ga||n===Wa||n===Xa)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Ga)return o===St?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Wa)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Xa)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===qa||n===Ya||n===Za||n===Ja)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===qa)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ya)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Za)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ja)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===qs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var f_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,d_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Al=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Er(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new pn({vertexShader:f_,fragmentShader:d_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Pt(new kn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Cl=class extends ti{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,m=null,d=null,g=null,v=typeof XRWebGLBinding<"u",p=new Al,f={},_=t.getContextAttributes(),S=null,x=null,R=[],b=[],I=new Ne,P=null,T=new rn;T.viewport=new At;let M=new rn;M.viewport=new At;let A=[T,M],L=new ra,X=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(O){let W=R[O];return W===void 0&&(W=new Ds,R[O]=W),W.getTargetRaySpace()},this.getControllerGrip=function(O){let W=R[O];return W===void 0&&(W=new Ds,R[O]=W),W.getGripSpace()},this.getHand=function(O){let W=R[O];return W===void 0&&(W=new Ds,R[O]=W),W.getHandSpace()};function se(O){let W=b.indexOf(O.inputSource);if(W===-1)return;let j=R[W];j!==void 0&&(j.update(O.inputSource,O.frame,c||o),j.dispatchEvent({type:O.type,data:O.inputSource}))}function te(){s.removeEventListener("select",se),s.removeEventListener("selectstart",se),s.removeEventListener("selectend",se),s.removeEventListener("squeeze",se),s.removeEventListener("squeezestart",se),s.removeEventListener("squeezeend",se),s.removeEventListener("end",te),s.removeEventListener("inputsourceschange",xe);for(let O=0;O<R.length;O++){let W=b[O];W!==null&&(b[O]=null,R[O].disconnect(W))}X=null,$=null,p.reset();for(let O in f)delete f[O];e.setRenderTarget(S),d=null,m=null,u=null,s=null,x=null,Re.stop(),n.isPresenting=!1,e.setPixelRatio(P),e.setSize(I.width,I.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(O){r=O,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(O){a=O,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(O){c=O},this.getBaseLayer=function(){return m!==null?m:d},this.getBinding=function(){return u===null&&v&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(O){if(s=O,s!==null){if(S=e.getRenderTarget(),s.addEventListener("select",se),s.addEventListener("selectstart",se),s.addEventListener("selectend",se),s.addEventListener("squeeze",se),s.addEventListener("squeezestart",se),s.addEventListener("squeezeend",se),s.addEventListener("end",te),s.addEventListener("inputsourceschange",xe),_.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(I),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let j=null,ee=null,he=null;_.depth&&(he=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,j=_.stencil?Ys:Rs,ee=_.stencil?qs:Ri);let Oe={colorFormat:t.RGBA8,depthFormat:he,scaleFactor:r};u=this.getBinding(),m=u.createProjectionLayer(Oe),s.updateRenderState({layers:[m]}),e.setPixelRatio(1),e.setSize(m.textureWidth,m.textureHeight,!1),x=new bn(m.textureWidth,m.textureHeight,{format:cn,type:Dn,depthTexture:new wr(m.textureWidth,m.textureHeight,ee,void 0,void 0,void 0,void 0,void 0,void 0,j),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}else{let j={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,j),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),x=new bn(d.framebufferWidth,d.framebufferHeight,{format:cn,type:Dn,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Re.setContext(s),Re.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function xe(O){for(let W=0;W<O.removed.length;W++){let j=O.removed[W],ee=b.indexOf(j);ee>=0&&(b[ee]=null,R[ee].disconnect(j))}for(let W=0;W<O.added.length;W++){let j=O.added[W],ee=b.indexOf(j);if(ee===-1){for(let Oe=0;Oe<R.length;Oe++)if(Oe>=b.length){b.push(j),ee=Oe;break}else if(b[Oe]===null){b[Oe]=j,ee=Oe;break}if(ee===-1)break}let he=R[ee];he&&he.connect(j)}}let ne=new N,Ce=new N;function Ue(O,W,j){ne.setFromMatrixPosition(W.matrixWorld),Ce.setFromMatrixPosition(j.matrixWorld);let ee=ne.distanceTo(Ce),he=W.projectionMatrix.elements,Oe=j.projectionMatrix.elements,Be=he[14]/(he[10]-1),C=he[14]/(he[10]+1),B=(he[9]+1)/he[5],Y=(he[9]-1)/he[5],Z=(he[8]-1)/he[0],H=(Oe[8]+1)/Oe[0],ge=Be*Z,ae=Be*H,de=ee/(-Z+H),Xe=de*-Z;if(W.matrixWorld.decompose(O.position,O.quaternion,O.scale),O.translateX(Xe),O.translateZ(de),O.matrixWorld.compose(O.position,O.quaternion,O.scale),O.matrixWorldInverse.copy(O.matrixWorld).invert(),he[10]===-1)O.projectionMatrix.copy(W.projectionMatrix),O.projectionMatrixInverse.copy(W.projectionMatrixInverse);else{let ke=Be+de,E=C+de,y=ge-Xe,V=ae+(ee-Xe),Q=B*C/E*ke,pe=Y*C/E*ke;O.projectionMatrix.makePerspective(y,V,Q,pe,ke,E),O.projectionMatrixInverse.copy(O.projectionMatrix).invert()}}function D(O,W){W===null?O.matrixWorld.copy(O.matrix):O.matrixWorld.multiplyMatrices(W.matrixWorld,O.matrix),O.matrixWorldInverse.copy(O.matrixWorld).invert()}this.updateCamera=function(O){if(s===null)return;let W=O.near,j=O.far;p.texture!==null&&(p.depthNear>0&&(W=p.depthNear),p.depthFar>0&&(j=p.depthFar)),L.near=M.near=T.near=W,L.far=M.far=T.far=j,(X!==L.near||$!==L.far)&&(s.updateRenderState({depthNear:L.near,depthFar:L.far}),X=L.near,$=L.far),L.layers.mask=O.layers.mask|6,T.layers.mask=L.layers.mask&3,M.layers.mask=L.layers.mask&5;let ee=O.parent,he=L.cameras;D(L,ee);for(let Oe=0;Oe<he.length;Oe++)D(he[Oe],ee);he.length===2?Ue(L,T,M):L.projectionMatrix.copy(T.projectionMatrix),ce(O,L,ee)};function ce(O,W,j){j===null?O.matrix.copy(W.matrixWorld):(O.matrix.copy(j.matrixWorld),O.matrix.invert(),O.matrix.multiply(W.matrixWorld)),O.matrix.decompose(O.position,O.quaternion,O.scale),O.updateMatrixWorld(!0),O.projectionMatrix.copy(W.projectionMatrix),O.projectionMatrixInverse.copy(W.projectionMatrixInverse),O.isPerspectiveCamera&&(O.fov=Is*2*Math.atan(1/O.projectionMatrix.elements[5]),O.zoom=1)}this.getCamera=function(){return L},this.getFoveation=function(){if(!(m===null&&d===null))return l},this.setFoveation=function(O){l=O,m!==null&&(m.fixedFoveation=O),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=O)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(L)},this.getCameraTexture=function(O){return f[O]};let K=null;function Ae(O,W){if(h=W.getViewerPose(c||o),g=W,h!==null){let j=h.views;d!==null&&(e.setRenderTargetFramebuffer(x,d.framebuffer),e.setRenderTarget(x));let ee=!1;j.length!==L.cameras.length&&(L.cameras.length=0,ee=!0);for(let C=0;C<j.length;C++){let B=j[C],Y=null;if(d!==null)Y=d.getViewport(B);else{let H=u.getViewSubImage(m,B);Y=H.viewport,C===0&&(e.setRenderTargetTextures(x,H.colorTexture,H.depthStencilTexture),e.setRenderTarget(x))}let Z=A[C];Z===void 0&&(Z=new rn,Z.layers.enable(C),Z.viewport=new At,A[C]=Z),Z.matrix.fromArray(B.transform.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.projectionMatrix.fromArray(B.projectionMatrix),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert(),Z.viewport.set(Y.x,Y.y,Y.width,Y.height),C===0&&(L.matrix.copy(Z.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),ee===!0&&L.cameras.push(Z)}let he=s.enabledFeatures;if(he&&he.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){u=n.getBinding();let C=u.getDepthInformation(j[0]);C&&C.isValid&&C.texture&&p.init(C,s.renderState)}if(he&&he.includes("camera-access")&&v){e.state.unbindTexture(),u=n.getBinding();for(let C=0;C<j.length;C++){let B=j[C].camera;if(B){let Y=f[B];Y||(Y=new Er,f[B]=Y);let Z=u.getCameraImage(B);Y.sourceTexture=Z}}}}for(let j=0;j<R.length;j++){let ee=b[j],he=R[j];ee!==null&&he!==void 0&&he.update(ee,W,c||o)}K&&K(O,W),W.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:W}),g=null}let Re=new qu;Re.setAnimationLoop(Ae),this.setAnimationLoop=function(O){K=O},this.dispose=function(){}}},ns=new Pn,p_=new Tt;function m_(i,e){function t(p,f){p.matrixAutoUpdate===!0&&p.updateMatrix(),f.value.copy(p.matrix)}function n(p,f){f.color.getRGB(p.fogColor.value,hl(i)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function s(p,f,_,S,x){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(p,f):f.isMeshToonMaterial?(r(p,f),u(p,f)):f.isMeshPhongMaterial?(r(p,f),h(p,f)):f.isMeshStandardMaterial?(r(p,f),m(p,f),f.isMeshPhysicalMaterial&&d(p,f,x)):f.isMeshMatcapMaterial?(r(p,f),g(p,f)):f.isMeshDepthMaterial?r(p,f):f.isMeshDistanceMaterial?(r(p,f),v(p,f)):f.isMeshNormalMaterial?r(p,f):f.isLineBasicMaterial?(o(p,f),f.isLineDashedMaterial&&a(p,f)):f.isPointsMaterial?l(p,f,_,S):f.isSpriteMaterial?c(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.bumpMap&&(p.bumpMap.value=f.bumpMap,t(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===tn&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,t(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===tn&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,t(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,p.emissiveMapTransform)),f.specularMap&&(p.specularMap.value=f.specularMap,t(f.specularMap,p.specularMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);let _=e.get(f),S=_.envMap,x=_.envMapRotation;S&&(p.envMap.value=S,ns.copy(x),ns.x*=-1,ns.y*=-1,ns.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(ns.y*=-1,ns.z*=-1),p.envMapRotation.value.setFromMatrix4(p_.makeRotationFromEuler(ns)),p.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap&&(p.lightMap.value=f.lightMap,p.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,p.lightMapTransform)),f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,p.aoMapTransform))}function o(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform))}function a(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function l(p,f,_,S){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*_,p.scale.value=S*.5,f.map&&(p.map.value=f.map,t(f.map,p.uvTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function c(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function h(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function u(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function m(p,f){p.metalness.value=f.metalness,f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,p.metalnessMapTransform)),p.roughness.value=f.roughness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,p.roughnessMapTransform)),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function d(p,f,_){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,p.sheenColorMapTransform)),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,p.sheenRoughnessMapTransform))),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,p.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(p.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===tn&&p.clearcoatNormalScale.value.negate())),f.dispersion>0&&(p.dispersion.value=f.dispersion),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,p.iridescenceMapTransform)),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=_.texture,p.transmissionSamplerSize.value.set(_.width,_.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,p.transmissionMapTransform)),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(p.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,p.specularColorMapTransform)),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,f){f.matcap&&(p.matcap.value=f.matcap)}function v(p,f){let _=e.get(f).light;p.referencePosition.value.setFromMatrixPosition(_.matrixWorld),p.nearDistance.value=_.shadow.camera.near,p.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function g_(i,e,t,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,S){let x=S.program;n.uniformBlockBinding(_,x)}function c(_,S){let x=s[_.id];x===void 0&&(g(_),x=h(_),s[_.id]=x,_.addEventListener("dispose",p));let R=S.program;n.updateUBOMapping(_,R);let b=e.render.frame;r[_.id]!==b&&(m(_),r[_.id]=b)}function h(_){let S=u();_.__bindingPointIndex=S;let x=i.createBuffer(),R=_.__size,b=_.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,R,b),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,x),x}function u(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(_){let S=s[_.id],x=_.uniforms,R=_.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let b=0,I=x.length;b<I;b++){let P=Array.isArray(x[b])?x[b]:[x[b]];for(let T=0,M=P.length;T<M;T++){let A=P[T];if(d(A,b,T,R)===!0){let L=A.__offset,X=Array.isArray(A.value)?A.value:[A.value],$=0;for(let se=0;se<X.length;se++){let te=X[se],xe=v(te);typeof te=="number"||typeof te=="boolean"?(A.__data[0]=te,i.bufferSubData(i.UNIFORM_BUFFER,L+$,A.__data)):te.isMatrix3?(A.__data[0]=te.elements[0],A.__data[1]=te.elements[1],A.__data[2]=te.elements[2],A.__data[3]=0,A.__data[4]=te.elements[3],A.__data[5]=te.elements[4],A.__data[6]=te.elements[5],A.__data[7]=0,A.__data[8]=te.elements[6],A.__data[9]=te.elements[7],A.__data[10]=te.elements[8],A.__data[11]=0):(te.toArray(A.__data,$),$+=xe.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,L,A.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(_,S,x,R){let b=_.value,I=S+"_"+x;if(R[I]===void 0)return typeof b=="number"||typeof b=="boolean"?R[I]=b:R[I]=b.clone(),!0;{let P=R[I];if(typeof b=="number"||typeof b=="boolean"){if(P!==b)return R[I]=b,!0}else if(P.equals(b)===!1)return P.copy(b),!0}return!1}function g(_){let S=_.uniforms,x=0,R=16;for(let I=0,P=S.length;I<P;I++){let T=Array.isArray(S[I])?S[I]:[S[I]];for(let M=0,A=T.length;M<A;M++){let L=T[M],X=Array.isArray(L.value)?L.value:[L.value];for(let $=0,se=X.length;$<se;$++){let te=X[$],xe=v(te),ne=x%R,Ce=ne%xe.boundary,Ue=ne+Ce;x+=Ce,Ue!==0&&R-Ue<xe.storage&&(x+=R-Ue),L.__data=new Float32Array(xe.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=x,x+=xe.storage}}}let b=x%R;return b>0&&(x+=R-b),_.__size=x,_.__cache={},this}function v(_){let S={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(S.boundary=4,S.storage=4):_.isVector2?(S.boundary=8,S.storage=8):_.isVector3||_.isColor?(S.boundary=16,S.storage=12):_.isVector4?(S.boundary=16,S.storage=16):_.isMatrix3?(S.boundary=48,S.storage=48):_.isMatrix4?(S.boundary=64,S.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),S}function p(_){let S=_.target;S.removeEventListener("dispose",p);let x=o.indexOf(S.__bindingPointIndex);o.splice(x,1),i.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function f(){for(let _ in s)i.deleteBuffer(s[_]);o=[],s={},r={}}return{bind:l,update:c,dispose:f}}var Qa=class{constructor(e={}){let{canvas:t=pu(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:m=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;let g=new Uint32Array(4),v=new Int32Array(4),p=null,f=null,_=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ri,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let x=this,R=!1;this._outputColorSpace=Ut;let b=0,I=0,P=null,T=-1,M=null,A=new At,L=new At,X=null,$=new rt(0),se=0,te=t.width,xe=t.height,ne=1,Ce=null,Ue=null,D=new At(0,0,te,xe),ce=new At(0,0,te,xe),K=!1,Ae=new Ns,Re=!1,O=!1,W=new Tt,j=new N,ee=new At,he={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Oe=!1;function Be(){return P===null?ne:1}let C=n;function B(w,k){return t.getContext(w,k)}try{let w={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"180"}`),t.addEventListener("webglcontextlost",Te,!1),t.addEventListener("webglcontextrestored",De,!1),t.addEventListener("webglcontextcreationerror",Me,!1),C===null){let k="webgl2";if(C=B(k,w),C===null)throw B(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Y,Z,H,ge,ae,de,Xe,ke,E,y,V,Q,pe,re,ze,Ee,ue,_e,fe,ye,Fe,Pe,be,$e;function U(){Y=new Ug(C),Y.init(),Pe=new u_(C,Y),Z=new Ag(C,Y,e,Pe),H=new l_(C,Y),Z.reversedDepthBuffer&&m&&H.buffers.depth.setReversed(!0),ge=new Og(C),ae=new $0,de=new h_(C,Y,H,ae,Z,Pe,ge),Xe=new Rg(x),ke=new Dg(x),E=new Gd(C),be=new wg(C,E),y=new Ng(C,E,ge,be),V=new kg(C,y,E,ge),fe=new Bg(C,Z,de),Ee=new Cg(ae),Q=new J0(x,Xe,ke,Y,Z,be,Ee),pe=new m_(x,ae),re=new j0,ze=new s_(Y),_e=new Tg(x,Xe,ke,H,V,d,l),ue=new a_(x,V,Z),$e=new g_(C,ge,Z,H),ye=new Eg(C,Y,ge),Fe=new Fg(C,Y,ge),ge.programs=Q.programs,x.capabilities=Z,x.extensions=Y,x.properties=ae,x.renderLists=re,x.shadowMap=ue,x.state=H,x.info=ge}U();let ve=new Cl(x,C);this.xr=ve,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){let w=Y.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=Y.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return ne},this.setPixelRatio=function(w){w!==void 0&&(ne=w,this.setSize(te,xe,!1))},this.getSize=function(w){return w.set(te,xe)},this.setSize=function(w,k,q=!0){if(ve.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}te=w,xe=k,t.width=Math.floor(w*ne),t.height=Math.floor(k*ne),q===!0&&(t.style.width=w+"px",t.style.height=k+"px"),this.setViewport(0,0,w,k)},this.getDrawingBufferSize=function(w){return w.set(te*ne,xe*ne).floor()},this.setDrawingBufferSize=function(w,k,q){te=w,xe=k,ne=q,t.width=Math.floor(w*q),t.height=Math.floor(k*q),this.setViewport(0,0,w,k)},this.getCurrentViewport=function(w){return w.copy(A)},this.getViewport=function(w){return w.copy(D)},this.setViewport=function(w,k,q,ie){w.isVector4?D.set(w.x,w.y,w.z,w.w):D.set(w,k,q,ie),H.viewport(A.copy(D).multiplyScalar(ne).round())},this.getScissor=function(w){return w.copy(ce)},this.setScissor=function(w,k,q,ie){w.isVector4?ce.set(w.x,w.y,w.z,w.w):ce.set(w,k,q,ie),H.scissor(L.copy(ce).multiplyScalar(ne).round())},this.getScissorTest=function(){return K},this.setScissorTest=function(w){H.setScissorTest(K=w)},this.setOpaqueSort=function(w){Ce=w},this.setTransparentSort=function(w){Ue=w},this.getClearColor=function(w){return w.copy(_e.getClearColor())},this.setClearColor=function(){_e.setClearColor(...arguments)},this.getClearAlpha=function(){return _e.getClearAlpha()},this.setClearAlpha=function(){_e.setClearAlpha(...arguments)},this.clear=function(w=!0,k=!0,q=!0){let ie=0;if(w){let z=!1;if(P!==null){let Ie=P.texture.format;z=Ie===Ma||Ie===ya||Ie===va}if(z){let Ie=P.texture.type,He=Ie===Dn||Ie===Ri||Ie===Ws||Ie===qs||Ie===ga||Ie===_a,Je=_e.getClearColor(),Ye=_e.getClearAlpha(),nt=Je.r,it=Je.g,je=Je.b;He?(g[0]=nt,g[1]=it,g[2]=je,g[3]=Ye,C.clearBufferuiv(C.COLOR,0,g)):(v[0]=nt,v[1]=it,v[2]=je,v[3]=Ye,C.clearBufferiv(C.COLOR,0,v))}else ie|=C.COLOR_BUFFER_BIT}k&&(ie|=C.DEPTH_BUFFER_BIT),q&&(ie|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(ie)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Te,!1),t.removeEventListener("webglcontextrestored",De,!1),t.removeEventListener("webglcontextcreationerror",Me,!1),_e.dispose(),re.dispose(),ze.dispose(),ae.dispose(),Xe.dispose(),ke.dispose(),V.dispose(),be.dispose(),$e.dispose(),Q.dispose(),ve.dispose(),ve.removeEventListener("sessionstart",vn),ve.removeEventListener("sessionend",Xn),Un.stop()};function Te(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function De(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;let w=ge.autoReset,k=ue.enabled,q=ue.autoUpdate,ie=ue.needsUpdate,z=ue.type;U(),ge.autoReset=w,ue.enabled=k,ue.autoUpdate=q,ue.needsUpdate=ie,ue.type=z}function Me(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function le(w){let k=w.target;k.removeEventListener("dispose",le),We(k)}function We(w){et(w),ae.remove(w)}function et(w){let k=ae.get(w).programs;k!==void 0&&(k.forEach(function(q){Q.releaseProgram(q)}),w.isShaderMaterial&&Q.releaseShaderCache(w))}this.renderBufferDirect=function(w,k,q,ie,z,Ie){k===null&&(k=he);let He=z.isMesh&&z.matrixWorld.determinant()<0,Je=En(w,k,q,ie,z);H.setMaterial(ie,He);let Ye=q.index,nt=1;if(ie.wireframe===!0){if(Ye=y.getWireframeAttribute(q),Ye===void 0)return;nt=2}let it=q.drawRange,je=q.attributes.position,ft=it.start*nt,pt=(it.start+it.count)*nt;Ie!==null&&(ft=Math.max(ft,Ie.start*nt),pt=Math.min(pt,(Ie.start+Ie.count)*nt)),Ye!==null?(ft=Math.max(ft,0),pt=Math.min(pt,Ye.count)):je!=null&&(ft=Math.max(ft,0),pt=Math.min(pt,je.count));let Ct=pt-ft;if(Ct<0||Ct===1/0)return;be.setup(z,ie,Je,q,Ye);let bt,Mt=ye;if(Ye!==null&&(bt=E.get(Ye),Mt=Fe,Mt.setIndex(bt)),z.isMesh)ie.wireframe===!0?(H.setLineWidth(ie.wireframeLinewidth*Be()),Mt.setMode(C.LINES)):Mt.setMode(C.TRIANGLES);else if(z.isLine){let tt=ie.linewidth;tt===void 0&&(tt=1),H.setLineWidth(tt*Be()),z.isLineSegments?Mt.setMode(C.LINES):z.isLineLoop?Mt.setMode(C.LINE_LOOP):Mt.setMode(C.LINE_STRIP)}else z.isPoints?Mt.setMode(C.POINTS):z.isSprite&&Mt.setMode(C.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)Ps("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Mt.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(Y.get("WEBGL_multi_draw"))Mt.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{let tt=z._multiDrawStarts,wt=z._multiDrawCounts,Ze=z._multiDrawCount,$t=Ye?E.get(Ye).bytesPerElement:1,F=ae.get(ie).currentProgram.getUniforms();for(let J=0;J<Ze;J++)F.setValue(C,"_gl_DrawID",J),Mt.render(tt[J]/$t,wt[J])}else if(z.isInstancedMesh)Mt.renderInstances(ft,Ct,z.count);else if(q.isInstancedBufferGeometry){let tt=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,wt=Math.min(q.instanceCount,tt);Mt.renderInstances(ft,Ct,wt)}else Mt.render(ft,Ct)};function xt(w,k,q){w.transparent===!0&&w.side===an&&w.forceSinglePass===!1?(w.side=tn,w.needsUpdate=!0,Pi(w,k,q),w.side=ei,w.needsUpdate=!0,Pi(w,k,q),w.side=an):Pi(w,k,q)}this.compile=function(w,k,q=null){q===null&&(q=w),f=ze.get(q),f.init(k),S.push(f),q.traverseVisible(function(z){z.isLight&&z.layers.test(k.layers)&&(f.pushLight(z),z.castShadow&&f.pushShadow(z))}),w!==q&&w.traverseVisible(function(z){z.isLight&&z.layers.test(k.layers)&&(f.pushLight(z),z.castShadow&&f.pushShadow(z))}),f.setupLights();let ie=new Set;return w.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;let Ie=z.material;if(Ie)if(Array.isArray(Ie))for(let He=0;He<Ie.length;He++){let Je=Ie[He];xt(Je,q,z),ie.add(Je)}else xt(Ie,q,z),ie.add(Ie)}),f=S.pop(),ie},this.compileAsync=function(w,k,q=null){let ie=this.compile(w,k,q);return new Promise(z=>{function Ie(){if(ie.forEach(function(He){ae.get(He).currentProgram.isReady()&&ie.delete(He)}),ie.size===0){z(w);return}setTimeout(Ie,10)}Y.get("KHR_parallel_shader_compile")!==null?Ie():setTimeout(Ie,10)})};let ct=null;function xn(w){ct&&ct(w)}function vn(){Un.stop()}function Xn(){Un.start()}let Un=new qu;Un.setAnimationLoop(xn),typeof self<"u"&&Un.setContext(self),this.setAnimationLoop=function(w){ct=w,ve.setAnimationLoop(w),w===null?Un.stop():Un.start()},ve.addEventListener("sessionstart",vn),ve.addEventListener("sessionend",Xn),this.render=function(w,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),ve.enabled===!0&&ve.isPresenting===!0&&(ve.cameraAutoUpdate===!0&&ve.updateCamera(k),k=ve.getCamera()),w.isScene===!0&&w.onBeforeRender(x,w,k,P),f=ze.get(w,S.length),f.init(k),S.push(f),W.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),Ae.setFromProjectionMatrix(W,In,k.reversedDepth),O=this.localClippingEnabled,Re=Ee.init(this.clippingPlanes,O),p=re.get(w,_.length),p.init(),_.push(p),ve.enabled===!0&&ve.isPresenting===!0){let Ie=x.xr.getDepthSensingMesh();Ie!==null&&cs(Ie,k,-1/0,x.sortObjects)}cs(w,k,0,x.sortObjects),p.finish(),x.sortObjects===!0&&p.sort(Ce,Ue),Oe=ve.enabled===!1||ve.isPresenting===!1||ve.hasDepthSensing()===!1,Oe&&_e.addToRenderList(p,w),this.info.render.frame++,Re===!0&&Ee.beginShadows();let q=f.state.shadowsArray;ue.render(q,w,k),Re===!0&&Ee.endShadows(),this.info.autoReset===!0&&this.info.reset();let ie=p.opaque,z=p.transmissive;if(f.setupLights(),k.isArrayCamera){let Ie=k.cameras;if(z.length>0)for(let He=0,Je=Ie.length;He<Je;He++){let Ye=Ie[He];io(ie,z,w,Ye)}Oe&&_e.render(w);for(let He=0,Je=Ie.length;He<Je;He++){let Ye=Ie[He];hn(p,w,Ye,Ye.viewport)}}else z.length>0&&io(ie,z,w,k),Oe&&_e.render(w),hn(p,w,k);P!==null&&I===0&&(de.updateMultisampleRenderTarget(P),de.updateRenderTargetMipmap(P)),w.isScene===!0&&w.onAfterRender(x,w,k),be.resetDefaultState(),T=-1,M=null,S.pop(),S.length>0?(f=S[S.length-1],Re===!0&&Ee.setGlobalState(x.clippingPlanes,f.state.camera)):f=null,_.pop(),_.length>0?p=_[_.length-1]:p=null};function cs(w,k,q,ie){if(w.visible===!1)return;if(w.layers.test(k.layers)){if(w.isGroup)q=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(k);else if(w.isLight)f.pushLight(w),w.castShadow&&f.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Ae.intersectsSprite(w)){ie&&ee.setFromMatrixPosition(w.matrixWorld).applyMatrix4(W);let He=V.update(w),Je=w.material;Je.visible&&p.push(w,He,Je,q,ee.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Ae.intersectsObject(w))){let He=V.update(w),Je=w.material;if(ie&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),ee.copy(w.boundingSphere.center)):(He.boundingSphere===null&&He.computeBoundingSphere(),ee.copy(He.boundingSphere.center)),ee.applyMatrix4(w.matrixWorld).applyMatrix4(W)),Array.isArray(Je)){let Ye=He.groups;for(let nt=0,it=Ye.length;nt<it;nt++){let je=Ye[nt],ft=Je[je.materialIndex];ft&&ft.visible&&p.push(w,He,ft,q,ee.z,je)}}else Je.visible&&p.push(w,He,Je,q,ee.z,null)}}let Ie=w.children;for(let He=0,Je=Ie.length;He<Je;He++)cs(Ie[He],k,q,ie)}function hn(w,k,q,ie){let z=w.opaque,Ie=w.transmissive,He=w.transparent;f.setupLightsView(q),Re===!0&&Ee.setGlobalState(x.clippingPlanes,q),ie&&H.viewport(A.copy(ie)),z.length>0&&qn(z,k,q),Ie.length>0&&qn(Ie,k,q),He.length>0&&qn(He,k,q),H.buffers.depth.setTest(!0),H.buffers.depth.setMask(!0),H.buffers.color.setMask(!0),H.setPolygonOffset(!1)}function io(w,k,q,ie){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[ie.id]===void 0&&(f.state.transmissionRenderTarget[ie.id]=new bn(1,1,{generateMipmaps:!0,type:Y.has("EXT_color_buffer_half_float")||Y.has("EXT_color_buffer_float")?Xs:Dn,minFilter:Ci,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:gt.workingColorSpace}));let Ie=f.state.transmissionRenderTarget[ie.id],He=ie.viewport||A;Ie.setSize(He.z*x.transmissionResolutionScale,He.w*x.transmissionResolutionScale);let Je=x.getRenderTarget(),Ye=x.getActiveCubeFace(),nt=x.getActiveMipmapLevel();x.setRenderTarget(Ie),x.getClearColor($),se=x.getClearAlpha(),se<1&&x.setClearColor(16777215,.5),x.clear(),Oe&&_e.render(q);let it=x.toneMapping;x.toneMapping=ri;let je=ie.viewport;if(ie.viewport!==void 0&&(ie.viewport=void 0),f.setupLightsView(ie),Re===!0&&Ee.setGlobalState(x.clippingPlanes,ie),qn(w,q,ie),de.updateMultisampleRenderTarget(Ie),de.updateRenderTargetMipmap(Ie),Y.has("WEBGL_multisampled_render_to_texture")===!1){let ft=!1;for(let pt=0,Ct=k.length;pt<Ct;pt++){let bt=k[pt],Mt=bt.object,tt=bt.geometry,wt=bt.material,Ze=bt.group;if(wt.side===an&&Mt.layers.test(ie.layers)){let $t=wt.side;wt.side=tn,wt.needsUpdate=!0,ls(Mt,q,ie,tt,wt,Ze),wt.side=$t,wt.needsUpdate=!0,ft=!0}}ft===!0&&(de.updateMultisampleRenderTarget(Ie),de.updateRenderTargetMipmap(Ie))}x.setRenderTarget(Je,Ye,nt),x.setClearColor($,se),je!==void 0&&(ie.viewport=je),x.toneMapping=it}function qn(w,k,q){let ie=k.isScene===!0?k.overrideMaterial:null;for(let z=0,Ie=w.length;z<Ie;z++){let He=w[z],Je=He.object,Ye=He.geometry,nt=He.group,it=He.material;it.allowOverride===!0&&ie!==null&&(it=ie),Je.layers.test(q.layers)&&ls(Je,k,q,Ye,it,nt)}}function ls(w,k,q,ie,z,Ie){w.onBeforeRender(x,k,q,ie,z,Ie),w.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),z.onBeforeRender(x,k,q,ie,w,Ie),z.transparent===!0&&z.side===an&&z.forceSinglePass===!1?(z.side=tn,z.needsUpdate=!0,x.renderBufferDirect(q,k,ie,z,w,Ie),z.side=ei,z.needsUpdate=!0,x.renderBufferDirect(q,k,ie,z,w,Ie),z.side=an):x.renderBufferDirect(q,k,ie,z,w,Ie),w.onAfterRender(x,k,q,ie,z,Ie)}function Pi(w,k,q){k.isScene!==!0&&(k=he);let ie=ae.get(w),z=f.state.lights,Ie=f.state.shadowsArray,He=z.state.version,Je=Q.getParameters(w,z.state,Ie,k,q),Ye=Q.getProgramCacheKey(Je),nt=ie.programs;ie.environment=w.isMeshStandardMaterial?k.environment:null,ie.fog=k.fog,ie.envMap=(w.isMeshStandardMaterial?ke:Xe).get(w.envMap||ie.environment),ie.envMapRotation=ie.environment!==null&&w.envMap===null?k.environmentRotation:w.envMapRotation,nt===void 0&&(w.addEventListener("dispose",le),nt=new Map,ie.programs=nt);let it=nt.get(Ye);if(it!==void 0){if(ie.currentProgram===it&&ie.lightsStateVersion===He)return Li(w,Je),it}else Je.uniforms=Q.getUniforms(w),w.onBeforeCompile(Je,x),it=Q.acquireProgram(Je,Ye),nt.set(Ye,it),ie.uniforms=Je.uniforms;let je=ie.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(je.clippingPlanes=Ee.uniform),Li(w,Je),ie.needsLights=Nn(w),ie.lightsStateVersion=He,ie.needsLights&&(je.ambientLightColor.value=z.state.ambient,je.lightProbe.value=z.state.probe,je.directionalLights.value=z.state.directional,je.directionalLightShadows.value=z.state.directionalShadow,je.spotLights.value=z.state.spot,je.spotLightShadows.value=z.state.spotShadow,je.rectAreaLights.value=z.state.rectArea,je.ltc_1.value=z.state.rectAreaLTC1,je.ltc_2.value=z.state.rectAreaLTC2,je.pointLights.value=z.state.point,je.pointLightShadows.value=z.state.pointShadow,je.hemisphereLights.value=z.state.hemi,je.directionalShadowMap.value=z.state.directionalShadowMap,je.directionalShadowMatrix.value=z.state.directionalShadowMatrix,je.spotShadowMap.value=z.state.spotShadowMap,je.spotLightMatrix.value=z.state.spotLightMatrix,je.spotLightMap.value=z.state.spotLightMap,je.pointShadowMap.value=z.state.pointShadowMap,je.pointShadowMatrix.value=z.state.pointShadowMatrix),ie.currentProgram=it,ie.uniformsList=null,it}function hs(w){if(w.uniformsList===null){let k=w.currentProgram.getUniforms();w.uniformsList=$s.seqWithValue(k.seq,w.uniforms)}return w.uniformsList}function Li(w,k){let q=ae.get(w);q.outputColorSpace=k.outputColorSpace,q.batching=k.batching,q.batchingColor=k.batchingColor,q.instancing=k.instancing,q.instancingColor=k.instancingColor,q.instancingMorph=k.instancingMorph,q.skinning=k.skinning,q.morphTargets=k.morphTargets,q.morphNormals=k.morphNormals,q.morphColors=k.morphColors,q.morphTargetsCount=k.morphTargetsCount,q.numClippingPlanes=k.numClippingPlanes,q.numIntersection=k.numClipIntersection,q.vertexAlphas=k.vertexAlphas,q.vertexTangents=k.vertexTangents,q.toneMapping=k.toneMapping}function En(w,k,q,ie,z){k.isScene!==!0&&(k=he),de.resetTextureUnits();let Ie=k.fog,He=ie.isMeshStandardMaterial?k.environment:null,Je=P===null?x.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Xi,Ye=(ie.isMeshStandardMaterial?ke:Xe).get(ie.envMap||He),nt=ie.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,it=!!q.attributes.tangent&&(!!ie.normalMap||ie.anisotropy>0),je=!!q.morphAttributes.position,ft=!!q.morphAttributes.normal,pt=!!q.morphAttributes.color,Ct=ri;ie.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(Ct=x.toneMapping);let bt=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Mt=bt!==void 0?bt.length:0,tt=ae.get(ie),wt=f.state.lights;if(Re===!0&&(O===!0||w!==M)){let we=w===M&&ie.id===T;Ee.setState(ie,w,we)}let Ze=!1;ie.version===tt.__version?(tt.needsLights&&tt.lightsStateVersion!==wt.state.version||tt.outputColorSpace!==Je||z.isBatchedMesh&&tt.batching===!1||!z.isBatchedMesh&&tt.batching===!0||z.isBatchedMesh&&tt.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&tt.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&tt.instancing===!1||!z.isInstancedMesh&&tt.instancing===!0||z.isSkinnedMesh&&tt.skinning===!1||!z.isSkinnedMesh&&tt.skinning===!0||z.isInstancedMesh&&tt.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&tt.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&tt.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&tt.instancingMorph===!1&&z.morphTexture!==null||tt.envMap!==Ye||ie.fog===!0&&tt.fog!==Ie||tt.numClippingPlanes!==void 0&&(tt.numClippingPlanes!==Ee.numPlanes||tt.numIntersection!==Ee.numIntersection)||tt.vertexAlphas!==nt||tt.vertexTangents!==it||tt.morphTargets!==je||tt.morphNormals!==ft||tt.morphColors!==pt||tt.toneMapping!==Ct||tt.morphTargetsCount!==Mt)&&(Ze=!0):(Ze=!0,tt.__version=ie.version);let $t=tt.currentProgram;Ze===!0&&($t=Pi(ie,k,z));let F=!1,J=!1,Se=!1,G=$t.getUniforms(),oe=tt.uniforms;if(H.useProgram($t.program)&&(F=!0,J=!0,Se=!0),ie.id!==T&&(T=ie.id,J=!0),F||M!==w){H.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),G.setValue(C,"projectionMatrix",w.projectionMatrix),G.setValue(C,"viewMatrix",w.matrixWorldInverse);let me=G.map.cameraPosition;me!==void 0&&me.setValue(C,j.setFromMatrixPosition(w.matrixWorld)),Z.logarithmicDepthBuffer&&G.setValue(C,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(ie.isMeshPhongMaterial||ie.isMeshToonMaterial||ie.isMeshLambertMaterial||ie.isMeshBasicMaterial||ie.isMeshStandardMaterial||ie.isShaderMaterial)&&G.setValue(C,"isOrthographic",w.isOrthographicCamera===!0),M!==w&&(M=w,J=!0,Se=!0)}if(z.isSkinnedMesh){G.setOptional(C,z,"bindMatrix"),G.setOptional(C,z,"bindMatrixInverse");let we=z.skeleton;we&&(we.boneTexture===null&&we.computeBoneTexture(),G.setValue(C,"boneTexture",we.boneTexture,de))}z.isBatchedMesh&&(G.setOptional(C,z,"batchingTexture"),G.setValue(C,"batchingTexture",z._matricesTexture,de),G.setOptional(C,z,"batchingIdTexture"),G.setValue(C,"batchingIdTexture",z._indirectTexture,de),G.setOptional(C,z,"batchingColorTexture"),z._colorsTexture!==null&&G.setValue(C,"batchingColorTexture",z._colorsTexture,de));let Ve=q.morphAttributes;if((Ve.position!==void 0||Ve.normal!==void 0||Ve.color!==void 0)&&fe.update(z,q,$t),(J||tt.receiveShadow!==z.receiveShadow)&&(tt.receiveShadow=z.receiveShadow,G.setValue(C,"receiveShadow",z.receiveShadow)),ie.isMeshGouraudMaterial&&ie.envMap!==null&&(oe.envMap.value=Ye,oe.flipEnvMap.value=Ye.isCubeTexture&&Ye.isRenderTargetTexture===!1?-1:1),ie.isMeshStandardMaterial&&ie.envMap===null&&k.environment!==null&&(oe.envMapIntensity.value=k.environmentIntensity),J&&(G.setValue(C,"toneMappingExposure",x.toneMappingExposure),tt.needsLights&&Yn(oe,Se),Ie&&ie.fog===!0&&pe.refreshFogUniforms(oe,Ie),pe.refreshMaterialUniforms(oe,ie,ne,xe,f.state.transmissionRenderTarget[w.id]),$s.upload(C,hs(tt),oe,de)),ie.isShaderMaterial&&ie.uniformsNeedUpdate===!0&&($s.upload(C,hs(tt),oe,de),ie.uniformsNeedUpdate=!1),ie.isSpriteMaterial&&G.setValue(C,"center",z.center),G.setValue(C,"modelViewMatrix",z.modelViewMatrix),G.setValue(C,"normalMatrix",z.normalMatrix),G.setValue(C,"modelMatrix",z.matrixWorld),ie.isShaderMaterial||ie.isRawShaderMaterial){let we=ie.uniformsGroups;for(let me=0,Le=we.length;me<Le;me++){let Ke=we[me];$e.update(Ke,$t),$e.bind(Ke,$t)}}return $t}function Yn(w,k){w.ambientLightColor.needsUpdate=k,w.lightProbe.needsUpdate=k,w.directionalLights.needsUpdate=k,w.directionalLightShadows.needsUpdate=k,w.pointLights.needsUpdate=k,w.pointLightShadows.needsUpdate=k,w.spotLights.needsUpdate=k,w.spotLightShadows.needsUpdate=k,w.rectAreaLights.needsUpdate=k,w.hemisphereLights.needsUpdate=k}function Nn(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(w,k,q){let ie=ae.get(w);ie.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,ie.__autoAllocateDepthBuffer===!1&&(ie.__useRenderToTexture=!1),ae.get(w.texture).__webglTexture=k,ae.get(w.depthTexture).__webglTexture=ie.__autoAllocateDepthBuffer?void 0:q,ie.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,k){let q=ae.get(w);q.__webglFramebuffer=k,q.__useDefaultFramebuffer=k===void 0};let Di=C.createFramebuffer();this.setRenderTarget=function(w,k=0,q=0){P=w,b=k,I=q;let ie=!0,z=null,Ie=!1,He=!1;if(w){let Ye=ae.get(w);if(Ye.__useDefaultFramebuffer!==void 0)H.bindFramebuffer(C.FRAMEBUFFER,null),ie=!1;else if(Ye.__webglFramebuffer===void 0)de.setupRenderTarget(w);else if(Ye.__hasExternalTextures)de.rebindTextures(w,ae.get(w.texture).__webglTexture,ae.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let je=w.depthTexture;if(Ye.__boundDepthTexture!==je){if(je!==null&&ae.has(je)&&(w.width!==je.image.width||w.height!==je.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");de.setupDepthRenderbuffer(w)}}let nt=w.texture;(nt.isData3DTexture||nt.isDataArrayTexture||nt.isCompressedArrayTexture)&&(He=!0);let it=ae.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(it[k])?z=it[k][q]:z=it[k],Ie=!0):w.samples>0&&de.useMultisampledRTT(w)===!1?z=ae.get(w).__webglMultisampledFramebuffer:Array.isArray(it)?z=it[q]:z=it,A.copy(w.viewport),L.copy(w.scissor),X=w.scissorTest}else A.copy(D).multiplyScalar(ne).floor(),L.copy(ce).multiplyScalar(ne).floor(),X=K;if(q!==0&&(z=Di),H.bindFramebuffer(C.FRAMEBUFFER,z)&&ie&&H.drawBuffers(w,z),H.viewport(A),H.scissor(L),H.setScissorTest(X),Ie){let Ye=ae.get(w.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+k,Ye.__webglTexture,q)}else if(He){let Ye=k;for(let nt=0;nt<w.textures.length;nt++){let it=ae.get(w.textures[nt]);C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0+nt,it.__webglTexture,q,Ye)}}else if(w!==null&&q!==0){let Ye=ae.get(w.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Ye.__webglTexture,q)}T=-1},this.readRenderTargetPixels=function(w,k,q,ie,z,Ie,He,Je=0){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ye=ae.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&He!==void 0&&(Ye=Ye[He]),Ye){H.bindFramebuffer(C.FRAMEBUFFER,Ye);try{let nt=w.textures[Je],it=nt.format,je=nt.type;if(!Z.textureFormatReadable(it)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Z.textureTypeReadable(je)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=w.width-ie&&q>=0&&q<=w.height-z&&(w.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+Je),C.readPixels(k,q,ie,z,Pe.convert(it),Pe.convert(je),Ie))}finally{let nt=P!==null?ae.get(P).__webglFramebuffer:null;H.bindFramebuffer(C.FRAMEBUFFER,nt)}}},this.readRenderTargetPixelsAsync=async function(w,k,q,ie,z,Ie,He,Je=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ye=ae.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&He!==void 0&&(Ye=Ye[He]),Ye)if(k>=0&&k<=w.width-ie&&q>=0&&q<=w.height-z){H.bindFramebuffer(C.FRAMEBUFFER,Ye);let nt=w.textures[Je],it=nt.format,je=nt.type;if(!Z.textureFormatReadable(it))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Z.textureTypeReadable(je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ft=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,ft),C.bufferData(C.PIXEL_PACK_BUFFER,Ie.byteLength,C.STREAM_READ),w.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+Je),C.readPixels(k,q,ie,z,Pe.convert(it),Pe.convert(je),0);let pt=P!==null?ae.get(P).__webglFramebuffer:null;H.bindFramebuffer(C.FRAMEBUFFER,pt);let Ct=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await mu(C,Ct,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,ft),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,Ie),C.deleteBuffer(ft),C.deleteSync(Ct),Ie}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,k=null,q=0){let ie=Math.pow(2,-q),z=Math.floor(w.image.width*ie),Ie=Math.floor(w.image.height*ie),He=k!==null?k.x:0,Je=k!==null?k.y:0;de.setTexture2D(w,0),C.copyTexSubImage2D(C.TEXTURE_2D,q,0,0,He,Je,z,Ie),H.unbindTexture()};let us=C.createFramebuffer(),Ui=C.createFramebuffer();this.copyTextureToTexture=function(w,k,q=null,ie=null,z=0,Ie=null){Ie===null&&(z!==0?(Ps("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ie=z,z=0):Ie=0);let He,Je,Ye,nt,it,je,ft,pt,Ct,bt=w.isCompressedTexture?w.mipmaps[Ie]:w.image;if(q!==null)He=q.max.x-q.min.x,Je=q.max.y-q.min.y,Ye=q.isBox3?q.max.z-q.min.z:1,nt=q.min.x,it=q.min.y,je=q.isBox3?q.min.z:0;else{let Ve=Math.pow(2,-z);He=Math.floor(bt.width*Ve),Je=Math.floor(bt.height*Ve),w.isDataArrayTexture?Ye=bt.depth:w.isData3DTexture?Ye=Math.floor(bt.depth*Ve):Ye=1,nt=0,it=0,je=0}ie!==null?(ft=ie.x,pt=ie.y,Ct=ie.z):(ft=0,pt=0,Ct=0);let Mt=Pe.convert(k.format),tt=Pe.convert(k.type),wt;k.isData3DTexture?(de.setTexture3D(k,0),wt=C.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(de.setTexture2DArray(k,0),wt=C.TEXTURE_2D_ARRAY):(de.setTexture2D(k,0),wt=C.TEXTURE_2D),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,k.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,k.unpackAlignment);let Ze=C.getParameter(C.UNPACK_ROW_LENGTH),$t=C.getParameter(C.UNPACK_IMAGE_HEIGHT),F=C.getParameter(C.UNPACK_SKIP_PIXELS),J=C.getParameter(C.UNPACK_SKIP_ROWS),Se=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,bt.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,bt.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,nt),C.pixelStorei(C.UNPACK_SKIP_ROWS,it),C.pixelStorei(C.UNPACK_SKIP_IMAGES,je);let G=w.isDataArrayTexture||w.isData3DTexture,oe=k.isDataArrayTexture||k.isData3DTexture;if(w.isDepthTexture){let Ve=ae.get(w),we=ae.get(k),me=ae.get(Ve.__renderTarget),Le=ae.get(we.__renderTarget);H.bindFramebuffer(C.READ_FRAMEBUFFER,me.__webglFramebuffer),H.bindFramebuffer(C.DRAW_FRAMEBUFFER,Le.__webglFramebuffer);for(let Ke=0;Ke<Ye;Ke++)G&&(C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,ae.get(w).__webglTexture,z,je+Ke),C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,ae.get(k).__webglTexture,Ie,Ct+Ke)),C.blitFramebuffer(nt,it,He,Je,ft,pt,He,Je,C.DEPTH_BUFFER_BIT,C.NEAREST);H.bindFramebuffer(C.READ_FRAMEBUFFER,null),H.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else if(z!==0||w.isRenderTargetTexture||ae.has(w)){let Ve=ae.get(w),we=ae.get(k);H.bindFramebuffer(C.READ_FRAMEBUFFER,us),H.bindFramebuffer(C.DRAW_FRAMEBUFFER,Ui);for(let me=0;me<Ye;me++)G?C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Ve.__webglTexture,z,je+me):C.framebufferTexture2D(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Ve.__webglTexture,z),oe?C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,we.__webglTexture,Ie,Ct+me):C.framebufferTexture2D(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,we.__webglTexture,Ie),z!==0?C.blitFramebuffer(nt,it,He,Je,ft,pt,He,Je,C.COLOR_BUFFER_BIT,C.NEAREST):oe?C.copyTexSubImage3D(wt,Ie,ft,pt,Ct+me,nt,it,He,Je):C.copyTexSubImage2D(wt,Ie,ft,pt,nt,it,He,Je);H.bindFramebuffer(C.READ_FRAMEBUFFER,null),H.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else oe?w.isDataTexture||w.isData3DTexture?C.texSubImage3D(wt,Ie,ft,pt,Ct,He,Je,Ye,Mt,tt,bt.data):k.isCompressedArrayTexture?C.compressedTexSubImage3D(wt,Ie,ft,pt,Ct,He,Je,Ye,Mt,bt.data):C.texSubImage3D(wt,Ie,ft,pt,Ct,He,Je,Ye,Mt,tt,bt):w.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,Ie,ft,pt,He,Je,Mt,tt,bt.data):w.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,Ie,ft,pt,bt.width,bt.height,Mt,bt.data):C.texSubImage2D(C.TEXTURE_2D,Ie,ft,pt,He,Je,Mt,tt,bt);C.pixelStorei(C.UNPACK_ROW_LENGTH,Ze),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,$t),C.pixelStorei(C.UNPACK_SKIP_PIXELS,F),C.pixelStorei(C.UNPACK_SKIP_ROWS,J),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Se),Ie===0&&k.generateMipmaps&&C.generateMipmap(wt),H.unbindTexture()},this.initRenderTarget=function(w){ae.get(w).__webglFramebuffer===void 0&&de.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?de.setTextureCube(w,0):w.isData3DTexture?de.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?de.setTexture2DArray(w,0):de.setTexture2D(w,0),H.unbindTexture()},this.resetState=function(){b=0,I=0,P=null,H.reset(),be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return In}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=gt._getDrawingBufferColorSpace(e),t.unpackColorSpace=gt._getUnpackColorSpace()}};function rs(i,e,t){let n=[],s=[],r=[];for(let a=0;a<=e;a++)for(let l=0;l<=t;l++){let c=a/e,h=l/t;if(n.push(...i(c,h)),s.push(c,h),a<e&&l<t){let u=a*(t+1)+l,m=u+t+1;r.push(u,u+1,m,u+1,m+1,m)}}let o=new Ft;return o.setAttribute("position",new yt(n,3)),o.setAttribute("uv",new yt(s,2)),o.setIndex(r),o.computeVertexNormals(),o}function Ku({m:i,mesh:e,box:t,cyl:n,beam:s,torus:r,roof:o}){let a=new Vs({color:"#f0e8d9",roughness:.37,clearcoat:.3,clearcoatRoughness:.32,side:an}),l=new zn({color:"#a58d74",roughness:.64,side:an}),c=new Vs({color:"#609cae",roughness:.17,metalness:.14,transparent:!0,opacity:.52,clearcoat:.82,clearcoatRoughness:.13,envMapIntensity:1.25,depthWrite:!1,side:an,forceSinglePass:!0});function h(p,f,_,S){let x=new wi(p.map(R=>new N(...R)));e(new Ji(x,Math.max(8,p.length*2),f,6,!1),_,0,0,0,S)}let u=(p,f=12)=>Array.from({length:f+1},(_,S)=>p(S/f)),m=(p,f)=>[p[0],p[1]+f,p[2]];for(let p of[-1,1]){let f=function(x,R){let b=R*2-1;return[-.5+p*(1.43+5.22*x+.28*x*b*b),4.73+.53*x**2.5-.52*Math.sin(Math.PI*x)+(.24+.23*x)*b*b,-.36+b*(3.23-1.36*x**2)+.14*x-.79*(1-x)**2*R*R]},_=x=>.105+.155*Math.sin(Math.PI*x)**1.2,S=(x,R)=>m(f(x,R),-_(x));e(rs(f,24,16),a,0,0,0),e(rs(S,24,16),l,0,0,0);for(let x of[0,1]){let R=function(b,I){let[P,T,M]=f(b,x),A=.095*Math.sin(Math.PI*I);return[P,T-_(b)*I,M+(x===0?-A:A)]};e(rs(R,24,6),a,0,0,0),h(u(b=>R(b,.44)),.02,i.ivory),h(u(b=>R(b,.85)),.018,i.copper),h(u(b=>m(S(b,x===0?.034:.966),-.012)),.017,l)}for(let x of[0,1])e(rs((R,b)=>m(f(x,b),-_(x)*R),1,16),a,0,0,0),h(u(R=>m(f(x,R),-.023)),.048,i.ivory);for(let x of[.17,.34,.51,.68,.85])h(u(R=>m(f(R,x),.013)),.009,l);for(let x of[.14,.36,.59,.8])h(u(R=>m(S(x,.06+R*.88),-.012),9),.024,i.ivory);for(let[x,R,b]of[[.2,.89,3.02],[.54,.88,2.91],[.75,.14,-2.6],[.28,.13,-2.76]]){let[I,P,T]=S(x,R),M=ot.clamp(I-p*.4,-5.85,4.89),A=.71;e(rs((L,X)=>{let $=X*Math.PI*2,se=L**2.4,te=L**5,xe=(1-L)**7,ne=.13+.12*xe+.47*te,Ce=.105+.1*xe+.23*te,Ue=ot.lerp(M,I,se)+Math.cos($)*ne,D=ot.lerp(b,T,se)+Math.sin($)*Ce,ce=(D+.36-.14*x+.79*(1-x)**2*R*R)/(3.23-1.36*x*x),K=ot.clamp(((Ue+.5)*p-1.43)/(5.22+.28*ce*ce),0,1),Ae=S(K,(1+ce)*.5)[1]+.028;return[Ue,ot.lerp(ot.lerp(A,P,L),Ae,te),D]},14,12),a,0,0,0),n(.23,.28,.07,M,.743,b,i.ivory,16),n(.215,.23,.024,M,.787,b,i.copper,16)}for(let x of[.45,.78]){let[R,b,I]=S(x,.12);s([R-p*.4,.72,I],[R,b-.04,I],.13,.16,i.ivory)}}function d(p,f){let _=p*2-1;return[-.5+_*1.46,4.77+.82*(1-_*_)+.19*(2*f-1)**2,-3.45+4.73*f-.39*(1-_*_)*f**3]}e(rs(d,20,12),c,0,0,0,o);for(let p=0;p<=8;p++){let f=p===0||p===8;h(u(_=>m(d(_,p/8),.018),8),f?.061:.028,i.ivory,o),f&&h(u(_=>m(d(_,p/8),-.058),8),.024,i.copper,o)}for(let p of[0,.16,.34,.5,.66,.84,1])h(u(f=>m(d(p,f),.019),8),p===0||p===1?.038:.015,i.copper,o);for(let[p,f]of[[-3.88,1.36],[2.97,1.5]]){let x=function(M,A=1){let L=M*2*Math.PI;return[p+f*Math.cos(L)*A,-.88+.87*Math.sin(L)*A]},R=function(M,A){let[L,X]=x(M);return[L,1.01+A*1.19,X]};n(1,1,.12,p,.78,-.88,i.ivory,28).scale.set(f*1.045,1,.87*1.06),n(1,1,.16,p,.93,-.88,i.metal,28).scale.set(f,1,.87),e(rs(R,28,1),c,0,0,0);for(let M=0;M<12;M++){let[A,L]=x(M/12);n(.022,.022,1.19,A,1.605,L,i.copper,6)}n(1,1,.09,p,2.21,-.88,i.copper,28).scale.set(f*1.018,1,.87*1.025),n(.985,1,.1,p,2.3,-.88,i.ivory,28).scale.set(f*1.06,1,.87*1.08),t(f*1.1,.21,.31,p,1.02,-.88+.15,i.glass,.03),t(f*1.15,.036,.34,p,1.14,-.88+.15,i.ivory,.01)}let g=-.5,v=.01;n(1.53,1.46,.2,g,2.68,v,i.ivory,40),n(1.49,1.48,.07,g,2.81,v,i.copper,40);for(let p of[Math.PI*.2,Math.PI*.8,Math.PI*1.2,Math.PI*1.8]){let f=g+Math.cos(p)*1.06,_=v+Math.sin(p)*1.06;n(.112,.17,1.94,f,1.69,_,i.ivory,12),n(.19,.23,.056,f,.735,_,i.dark,12),n(.17,.2,.032,f,.777,_,i.ivory,12)}n(1.4,1.4,1.48,g,3.57,v,c,40),n(1.25,1.27,.095,g,2.99,v,i.glass,36),r(1.402,.03,g,2.88,v,i.ivory),r(1.402,.018,g,3.17,v,i.copper);for(let p of[-1,1])for(let f of[-.67,0,.67])t(.32,.14,.23,g+f,3.1,v+p*.68,i.dark,.02),t(.25,.058,.014,g+f,3.13,v+p*.8,i.window,.005);for(let p=0;p<18;p++){let f=p*Math.PI/9;n(.024,.024,1.45,g+Math.cos(f)*1.408,3.57,v+Math.sin(f)*1.408,p%3===0?i.ivory:i.copper,6)}n(1.49,1.61,.18,g,4.39,v,i.ivory,40),n(1.34,1.49,.12,g,4.54,v,i.ivory,40),r(1.56,.032,g,4.342,v,i.copper),r(1.48,.018,g,4.292,v,i.warm),n(.92,1.08,.105,g,4.65,v,i.glass,32),n(.028,.043,.42,g,4.89,v,i.copper,8),n(.048,.048,.071,g,5.135,v,i.cyan,8),t(4.92,.64,.24,g,2.94,3.135,i.ivory,.043),t(4.87,.053,.052,g,2.624,3.256,i.copper,.014);for(let p of[-2.18,2.18])s([g+p,2.94,3.11],[g+p,2.94,2.56],.11,.092,i.ivory);t(3.53,.048,.39,g,.716,2.88,i.deck,.021),t(3.46,.036,.063,g,.734,2.675,i.copper,.011);for(let p of[-3.51,3.73]){t(1.2,.04,.53,g+p,.728,.51,i.deck,.02);for(let f of[-.4,.4])t(.09,.24,.21,g+p+f,.849,.39,i.metal);t(1.15,.08,.3,g+p,.992,.39,i.ivory,.031),t(1.13,.115,.037,g+p,1.057,.255,i.glass,.015)}return c}var ju='"PingFang SC","Microsoft YaHei",system-ui,sans-serif';function nc(i,e,t,n,{color:s,accent:r,align:o="left",maxWidth:a=1/0}){let l=[["\u5C71\u77F3\u7F51\u79D1\u7EDF\u4E00",s],["AI",r],["\u7F51\u5173",s]];i.save(),i.textAlign="left",i.textBaseline="middle",i.font="750 "+n+"px "+ju;let c=l.reduce((d,[g])=>d+i.measureText(g).width,0)+n*.48;n*=Math.min(1,a/c),i.font="750 "+n+"px "+ju;let h=n*.24,u=l.reduce((d,[g])=>d+i.measureText(g).width,0)+h*2,m=o==="center"?e-u/2:e;for(let[d,g]of l)i.fillStyle=g,i.fillText(d,m,t),m+=i.measureText(d).width+h;i.restore()}function ef(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new Ft,c=0;for(let h=0;h<i.length;++h){let u=i[h],m=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in u.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(u.attributes[d]),m++}if(m!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in u.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(u.morphAttributes[d])}if(e){let d;if(t)d=u.index.count;else if(u.attributes.position!==void 0)d=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,h),c+=d}}if(t){let h=0,u=[];for(let m=0;m<i.length;++m){let d=i[m].index;for(let g=0;g<d.count;++g)u.push(d.getX(g)+h);h+=i[m].attributes.position.count}l.setIndex(u)}for(let h in r){let u=Qu(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let m=0;m<u;++m){let d=[];for(let v=0;v<o[h].length;++v)d.push(o[h][v][m]);let g=Qu(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function Qu(i){let e,t,n,s=-1,r=0;for(let c=0;c<i.length;++c){let h=i[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let o=new e(r),a=new Nt(o,t,n),l=0;for(let c=0;c<i.length;++c){let h=i[c];if(h.isInterleavedBufferAttribute){let u=l/t;for(let m=0,d=h.count;m<d;m++)for(let g=0;g<t;g++){let v=h.getComponent(m,g);a.setComponent(m+u,g,v)}}else o.set(h.array,l);l+=h.count*t}return s!==void 0&&(a.gpuType=s),a}var tf=[{name:"\u7814\u53D1\u90E8",tokens:"56 \u4E07",ratio:1,cost:"\xA55.60"},{name:"\u8FD0\u8425\u90E8",tokens:"29 \u4E07",ratio:.52,cost:"\xA52.90"},{name:"\u5BA2\u670D\u90E8",tokens:"18 \u4E07",ratio:.32,cost:"\xA51.80"}],Ii={id:"DEMO-042",channels:[["\u4E3B\u6A21\u578B\u6E20\u9053","2.00 \u79D2\u8D85\u65F6"],["\u5907\u7528\u6A21\u578B\u6E20\u9053","0.86 \u79D2\u8FD4\u56DE"]],rows:[["\u4E0A\u6E38\u7528\u91CF","1,240 Token"],["\u5185\u90E8\u8BA1\u4EF7","\xA50.012"],["\u4F9B\u5E94\u5546\u8D26\u5355\u5206\u644A","\xA50.010"],["\u5DEE\u989D","\xA50.002\uFF08\u5185\u90E8\u51CF\u4F9B\u5E94\u5546\uFF09"]],explanation:"\u540C\u4E00\u7B14\u8C03\u7528\u6309\u4E24\u5957\u8D39\u7387\u8BA1\u4EF7\uFF0C\u5DEE\u989D\u6765\u81EA\u5185\u90E8\u4E0E\u4F9B\u5E94\u5546\u7684\u8D39\u7387\u53E3\u5F84\u3002"},Il=[{id:"DEMO-042",name:"\u5907\u7528\u91CD\u8BD5",result:"\u5DF2\u8FD4\u56DE",fields:[["\u8C03\u7528\u8EAB\u4EFD","\u7814\u53D1\u90E8 \xB7 \u7814\u53D1\u52A9\u624B"],["\u6A21\u578B\u6E20\u9053","\u4E3B\u6E20\u9053\u8D85\u65F6 \u2192 \u5907\u7528\u6E20\u9053\u91CD\u8BD5"],["\u6E20\u9053\u8868\u73B0","\u4E3B\u6E20\u9053 2.00 \u79D2\u8D85\u65F6 \xB7 \u5907\u7528 0.86 \u79D2\u8FD4\u56DE"],["\u68C0\u67E5\u7ED3\u679C","\u8BF7\u6C42\u548C\u54CD\u5E94\u5747\u901A\u8FC7\u68C0\u67E5"],["\u4E0A\u6E38\u7528\u91CF","1,240 Token\uFF08\u793A\u610F\uFF09"],["\u5185\u90E8\u8BA1\u4EF7","\xA50.012\uFF08\u793A\u610F\uFF09"]]},{id:"DEMO-043",name:"\u654F\u611F\u4FE1\u606F",result:"\u5DF2\u62E6\u622A \xB7 \u672A\u5916\u53D1",fields:[["\u8C03\u7528\u8EAB\u4EFD","\u7814\u53D1\u90E8 \xB7 \u7814\u53D1\u52A9\u624B"],["\u547D\u4E2D\u89C4\u5219","\u654F\u611F\u4FE1\u606F\u5916\u53D1"],["\u68C0\u67E5\u65B9\u5411","\u8BF7\u6C42 \u2192 \u6A21\u578B"],["\u4E0A\u6E38\u7528\u91CF","\u672A\u4EA7\u751F"],["\u5185\u90E8\u8BA1\u4EF7","\u672A\u4EA7\u751F"]]},{id:"DEMO-044",name:"\u63D0\u793A\u8BCD\u6CE8\u5165",result:"\u5DF2\u62E6\u622A \xB7 \u672A\u5916\u53D1",fields:[["\u8C03\u7528\u8EAB\u4EFD","\u7814\u53D1\u90E8 \xB7 \u7814\u53D1\u52A9\u624B"],["\u547D\u4E2D\u89C4\u5219","\u63D0\u793A\u8BCD\u6CE8\u5165\u9632\u62A4"],["\u68C0\u67E5\u65B9\u5411","\u8BF7\u6C42 \u2192 \u6A21\u578B"],["\u4E0A\u6E38\u7528\u91CF","\u672A\u4EA7\u751F"],["\u5185\u90E8\u8BA1\u4EF7","\u672A\u4EA7\u751F"]]}];function nf(i,e){if(i.brief)return i.copy;if(e<.1)return"";switch(i.id){case"policy":return e<.48?"\u7814\u53D1\u52A9\u624B\u83B7\u51C6\u4F7F\u7528\u6A21\u578B\uFF0C\u989D\u5EA6\u5145\u8DB3\u3002":"\u53E6\u4E00\u8F86\u8F66\u672A\u83B7\u5DE5\u5177\u6388\u6743\uFF0C\u505C\u5728\u5165\u53E3\u3002\u989D\u5EA6\u4E5F\u53EF\u6309\u90E8\u95E8\u548C\u7528\u6237\u63A7\u5236\u3002";case"security":return e<.52?"\u8BF7\u6C42\u8F6C\u53D1\u524D\u8FC7\u68C0\uFF0C\u53EF\u6309\u7B56\u7565\u62E6\u622A\u654F\u611F\u4FE1\u606F\u6216\u6CE8\u5165\u98CE\u9669\u3002":"\u6A21\u578B\u54CD\u5E94\u8FD4\u56DE\u65F6\u4E5F\u8981\u8FC7\u68C0\uFF0C\u7F51\u5173\u6309\u7B56\u7565\u8BB0\u5F55\u3001\u544A\u8B66\u6216\u963B\u65AD\u3002";case"routing":return e<.47?"\u7F51\u5173\u6309\u4F18\u5148\u7EA7\u3001\u6743\u91CD\u548C\u5065\u5EB7\u72B6\u6001\u9009\u62E9\u6A21\u578B\u6E20\u9053\u3002":"\u4E3B\u6E20\u9053\u5F02\u5E38\uFF0C\u9053\u5C94\u8F6C\u5411\u5DF2\u914D\u7F6E\u7684\u5907\u7528\u6E20\u9053\u3002";case"resources":return e<.55?"\u667A\u80FD\u4F53\u53EF\u4EE5\u8C03\u7528\u5DF2\u6388\u6743\u7684 MCP \u5DE5\u5177\u3002":"Skill \u5728\u7F51\u5173\u5185\u5355\u72EC\u5BA1\u6838\u3001\u53D1\u5E03\u5E76\u7BA1\u7406\u7248\u672C\u3002";case"operations":return e<.54?"\u7814\u53D1\u90E8\u7528\u91CF\u6700\u9AD8\uFF0C\u8D39\u7528\u53EF\u4EE5\u6309\u90E8\u95E8\u5F52\u96C6\u3002":"\u4ECE\u6E20\u9053\u8D85\u65F6\u5B9A\u4F4D\u5230\u5355\u7B14\u8C03\u7528\uFF0C\u518D\u6838\u5BF9\u7528\u91CF\u4E0E\u8D26\u5355\u3002";default:return i.copy}}var ic=[{id:"main",label:"\u9A76\u5165\u4E3B\u6E20\u9053",title:"\u9A76\u5165\u4E3B\u6E20\u9053",cue:"\u8FD0\u8F93\u8231\u6CBF\u4E3B\u7EBF\u8DEF\u8FDB\u5165\u6A21\u578B\u670D\u52A1\u7AD9\u3002"},{id:"timeout",label:"\u4E3B\u6E20\u9053\u8D85\u65F6",title:"\u4E3B\u6E20\u9053\u8D85\u65F6",cue:"\u4EFB\u52A1\u505C\u5728\u4E3B\u7AD9\uFF0C\u7F51\u5173\u6309\u9884\u8BBE\u7B56\u7565\u542F\u52A8\u5207\u6362\u3002"},{id:"junction",label:"\u5207\u6362\u9053\u5C94",title:"\u5907\u7528\u7EBF\u8DEF\u542F\u7528",cue:"\u8FD0\u8F93\u8231\u9000\u56DE\u5206\u5C94\u53E3\uFF0C\u51C6\u5907\u9A76\u5165\u5DF2\u83B7\u51C6\u7684\u5907\u7528\u6E20\u9053\u3002"},{id:"backup",label:"\u5907\u7528\u7AD9\u91CD\u8BD5",title:"\u62B5\u8FBE\u5907\u7528\u6A21\u578B\u7AD9",cue:"\u4EFB\u52A1\u8FDB\u5165\u5907\u7528\u6E20\u9053\uFF0C\u91CD\u65B0\u8BF7\u6C42\u540C\u4E00\u6A21\u578B\u3002"}],nn={arrive:.27,reverse:.45,atFork:.61,turn:.63,depart:.76,retry:.92},Kr={open:.41,depart:.72,arrive:.91},jr={depart:.16,model:.39,returning:.46,arrive:.66,block:.72},Qr={arrive:.49,block:.55};function __(i){return i<nn.arrive?ic[0]:i<nn.reverse?ic[1]:i<nn.depart?ic[2]:ic[3]}function sf(i,e){if(!i)return{id:"overview",label:"\u67A2\u7EBD\u5168\u666F"};if(i.chapter==="overview")return{id:i.id,label:i.label};if(i.label==="\u6545\u969C\u5207\u6362")return __(e);if(i.provider)return{id:e<.19||e>=.87?"entry":e<.43?"dispatch":i.provider.channel,label:i.provider.model};if(i.label==="\u9009\u62E9\u6E20\u9053")return e<.36?{id:"dispatch",label:"\u4E2D\u592E\u8C03\u5EA6\u7AD9"}:{id:"primary",label:"\u4E3B\u6A21\u578B\u7AD9"};if(i.label==="\u54CD\u5E94\u68C0\u67E5")return{id:"return",label:"\u54CD\u5E94\u8FD4\u56DE"};let t={entry:"\u4F01\u4E1A\u5165\u53E3",gate:"\u8EAB\u4EFD\u4E0E\u914D\u989D\u95F8\u53E3",scan:"\u53CC\u5411\u5185\u5BB9\u68C0\u67E5\u8231",ops:"\u4E2D\u592E\u8C03\u5EA6\u5854"};return{id:i.zone,label:t[i.zone]}}function sc(i,e){if(i?.risk==="response"){let{depart:t,returning:n,arrive:s,block:r}=jr;return e<t?"inspect":e<n?"allow":e<s?"returning":e<r?"response-inspect":"blocked"}return i?.label==="\u5B89\u5168\u62E6\u622A"||i?.risk==="injection"?e<Qr.block?"incoming":"blocked":i?.label==="\u8BF7\u6C42\u68C0\u67E5"?e<Kr.open?"inspect":"allow":i?.label==="\u54CD\u5E94\u68C0\u67E5"?e<.4?"returning":e<.66?"response-inspect":"response-allow":null}function Pl(i,e){if(i?.risk==="response"){let{depart:u,model:m,returning:d,arrive:g,block:v}=jr,p=e>=v,f="\u54CD\u5E94\u547D\u4E2D\u654F\u611F\u5B57\u6BB5\u89C4\u5219\u3002",_=p?"\u5DF2\u963B\u65AD \xB7 \u539F\u54CD\u5E94\u672A\u4EA4\u8FD8\u5E94\u7528":e>=g?"\u68C0\u67E5\u65B9\u5411\uFF1A\u6A21\u578B \u2192 \u5E94\u7528":e>=d?"\u6A21\u578B\u5DF2\u54CD\u5E94 \xB7 \u56DE\u5230\u7F51\u5173\u68C0\u67E5":e>=m?"\u6A21\u578B\u5DF2\u6536\u5230\u8BF7\u6C42":e>=u?"\u8BF7\u6C42\u901A\u8FC7\u68C0\u67E5 \xB7 \u5DF2\u53D1\u5F80\u6A21\u578B":"\u6B63\u5728\u68C0\u67E5\u8BF7\u6C42";return{kind:"response",title:"\u6A21\u578B\u54CD\u5E94\u62E6\u622A",revealed:e>=g,flagged:p,evidence:"\u6A21\u578B\u8F93\u51FA\u542B\u6D4B\u8BD5\u8D26\u53F7\u6807\u8BC6\uFF08\u5DF2\u906E\u76D6\uFF09\u3002",status:_,verdict:f,blocked:p,recorded:e>=.86}}let t=i?.comparison||(i?.risk==="injection"?"injection":i?.label==="\u5B89\u5168\u62E6\u622A"?"sensitive":null);if(!t)return null;let n=t!=="normal"&&e>=Qr.block,s=t==="normal"&&e>=.93,r=t==="normal"&&e>=Kr.open,o=e>=.18,a=t!=="normal"&&e>=.34,l=t==="injection"?"\u5939\u5E26\u5185\u5BB9\u8981\u6C42 AI \u5C06\u6545\u969C\u62A5\u544A\u6539\u5199\u4E3A\u300C\u7CFB\u7EDF\u6B63\u5E38\u300D\u3002":t==="sensitive"?"\u8BCA\u65AD\u9644\u4EF6\u542B\u5BA2\u6237\u624B\u673A\u53F7 138\u2022\u2022\u2022\u20221234\u3002":"\u65E5\u5FD7\u6458\u8981\u663E\u793A\u63A5\u53E3\u8D85\u65F6\u3002",c=t==="injection"?"\u9644\u4EF6\u4E2D\u7684\u6307\u4EE4\u8BD5\u56FE\u6539\u53D8\u539F\u4EFB\u52A1\u3002":t==="sensitive"?"\u654F\u611F\u5B57\u6BB5\u547D\u4E2D\u5916\u53D1\u9650\u5236\u3002":"\u8BF7\u6C42\u5185\u5BB9\u901A\u8FC7\u68C0\u67E5\u3002";return{kind:t,revealed:o,flagged:a,blocked:n,evidence:l,status:n?"\u5DF2\u963B\u65AD \xB7 \u672A\u8F6C\u53D1\u81F3\u6A21\u578B":s?"\u6A21\u578B\u56DE\u590D \xB7 \u5EFA\u8BAE\u68C0\u67E5\u63A5\u53E3\u8D85\u65F6\u914D\u7F6E":r?"\u68C0\u67E5\u901A\u8FC7 \xB7 \u53D1\u5F80\u6A21\u578B":a?c:o?"\u6B63\u5728\u68C0\u67E5\u9644\u4EF6\u5185\u5BB9":"\u8BF7\u6C42\u62B5\u8FBE\u68C0\u67E5\u8231",verdict:c,recorded:n&&e>=.8,title:{normal:"\u6B63\u5E38\u8BF7\u6C42",sensitive:"\u654F\u611F\u4FE1\u606F\u5916\u53D1",injection:"\u63D0\u793A\u8BCD\u6CE8\u5165"}[t]}}function rf(i,e,t){if(e?.chapter==="overview")return nf(e,t);if(e?.provider)return t<.19?"\u7814\u53D1\u52A9\u624B\u4F7F\u7528\u540C\u4E00\u7F51\u5173\u5165\u53E3\u53D1\u8D77\u72EC\u7ACB\u8C03\u7528\u3002":t<.65?"\u7F51\u5173\u5C06\u8BF7\u6C42\u8DEF\u7531\u81F3"+e.provider.vendor+"\u7684"+e.provider.model+"\u3002":t<.91?e.provider.model+"\u751F\u6210\u7ED3\u679C\uFF0C\u54CD\u5E94\u7ECF\u7F51\u5173\u8FD4\u56DE\u3002":"\u7814\u53D1\u52A9\u624B\u5DF2\u6536\u5230"+e.provider.model+"\u7684\u7ED3\u679C\u3002";if(e?.policy)return t<.4?"\u6821\u9A8C\u7814\u53D1\u52A9\u624B\u5BF9\u6A21\u578B B \u7684\u6388\u6743\u548C\u90E8\u95E8\u989D\u5EA6\u3002":e.policy.reason;if(e?.risk==="response")return Pl(e,t).status;let n=sc(e,t);if(e?.risk==="injection")return n==="blocked"?"\u9644\u4EF6\u5939\u5E26\u8BD5\u56FE\u6539\u53D8\u4EFB\u52A1\u7684\u6307\u4EE4\u3002\u547D\u4E2D\u6CE8\u5165\u9632\u62A4\u89C4\u5219\uFF0C\u672A\u8F6C\u53D1\u81F3\u6A21\u578B\u3002":t>.18?"\u539F\u4EFB\u52A1\u662F\u5206\u6790\u63A5\u53E3\u62A5\u9519\u3002\u7F51\u5173\u68C0\u67E5\u8FD9\u4EFD\u9644\u4EF6\u3002":"";let s={inspect:"\u7F51\u5173\u5148\u68C0\u67E5\u8BF7\u6C42\u5185\u5BB9\u3002",allow:"\u62A5\u9519\u6458\u8981\u901A\u8FC7\u68C0\u67E5\uFF0C\u53EF\u4EE5\u53D1\u5F80\u6A21\u578B\u3002",blocked:"\u9644\u4EF6\u542B\u654F\u611F\u4FE1\u606F\uFF0C\u5DF2\u62E6\u622A\uFF0C\u672A\u53D1\u7ED9\u6A21\u578B\u3002","response-inspect":"\u6A21\u578B\u7ED3\u679C\u8FD4\u56DE\uFF0C\u7F51\u5173\u68C0\u67E5\u54CD\u5E94\u5185\u5BB9\u3002","response-allow":"\u54CD\u5E94\u901A\u8FC7\u68C0\u67E5\uFF0C\u4EA4\u8FD8\u7ED9\u7814\u53D1\u52A9\u624B\u3002"};return s[n]?s[n]:n==="incoming"?t>=.22?e.track.length>2?"\u7B2C\u4E8C\u6B21\u8BF7\u6C42\u5E26\u4E0A\u4E86\u4E00\u4EFD\u8BCA\u65AD\u9644\u4EF6\u3002":"\u8FD9\u6B21\u8BF7\u6C42\u5E26\u4E0A\u4E86\u4E00\u4EFD\u8BCA\u65AD\u9644\u4EF6\u3002":"":e?.label==="\u53D1\u8D77\u8C03\u7528"?t>=.09?"\u7814\u53D1\u52A9\u624B\u63D0\u4EA4\u63A5\u53E3\u62A5\u9519\u6458\u8981\uFF0C\u8BF7 AI \u534F\u52A9\u5206\u6790\u3002":"":e?.label==="\u6388\u6743\u4E0E\u989D\u5EA6"?t>=.24?"\u7F51\u5173\u786E\u8BA4\u7814\u53D1\u90E8\u6709\u8C03\u7528\u6743\u9650\uFF0C\u989D\u5EA6\u4E5F\u591F\u3002":"":i?.id==="timeout"?"\u4E3B\u6E20\u9053\u8D85\u65F6\uFF0C\u8FD0\u8F93\u8231\u505C\u5728\u4E3B\u7AD9\u3002":i?.id==="junction"?t>=nn.turn?"\u7F51\u5173\u6539\u8D70\u5DF2\u83B7\u6388\u6743\u7684\u5907\u7528\u6E20\u9053\u3002":"":i?.id==="backup"?t>=nn.retry?"\u5907\u7528\u6E20\u9053\u91CD\u8BD5\u6210\u529F\u3002":"":i?.id==="primary"?"\u7F51\u5173\u628A\u8BF7\u6C42\u8F6C\u53D1\u7ED9\u53EF\u7528\u7684\u6A21\u578B\u6E20\u9053\u3002":e?.label==="\u989D\u5EA6\u62D2\u7EDD"?"\u7814\u53D1\u90E8\u989D\u5EA6\u5DF2\u7528\u5C3D\uFF0C\u7F51\u5173\u6CA1\u6709\u8F6C\u53D1\u8BF7\u6C42\u3002":""}function of(i,e,t){if(e?.label==="\u6545\u969C\u5207\u6362")return i.id==="main"?nn.arrive-.01:i.id==="timeout"?nn.arrive:i.id==="junction"?t<nn.turn?nn.atFork:nn.depart-.01:1;let n=sc(e,t);return n==="inspect"||n==="allow"?n==="inspect"?0:1:n==="incoming"||n==="blocked"?n==="incoming"?Qr.arrive:1:n==="returning"||n==="response-inspect"||n==="response-allow"?n==="returning"?0:n==="response-inspect"?.53:1:1}var eo=new N;function Tn(i,e,t,n,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),l=Math.PI/4;eo.copy(e),eo[n]=0,eo.normalize();let c=.5*o/(o+a),h=1-eo.angleTo(i)/l;return Math.sign(eo[t])===1?h*c:a/(o+a)+c+c*(1-h)}var rc=class i extends Ln{constructor(e=1,t=1,n=1,s=2,r=.1){let o=s*2+1;if(r=Math.min(e/2,t/2,n/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:s,radius:r},o===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let l=new N,c=new N,h=new N(e,t,n).divideScalar(2).subScalar(r),u=this.attributes.position.array,m=this.attributes.normal.array,d=this.attributes.uv.array,g=u.length/6,v=new N,p=.5/o;for(let f=0,_=0;f<u.length;f+=3,_+=2)switch(l.fromArray(u,f),c.copy(l),c.x-=Math.sign(c.x)*p,c.y-=Math.sign(c.y)*p,c.z-=Math.sign(c.z)*p,c.normalize(),u[f+0]=h.x*Math.sign(l.x)+c.x*r,u[f+1]=h.y*Math.sign(l.y)+c.y*r,u[f+2]=h.z*Math.sign(l.z)+c.z*r,m[f+0]=c.x,m[f+1]=c.y,m[f+2]=c.z,Math.floor(f/g)){case 0:v.set(1,0,0),d[_+0]=Tn(v,c,"z","y",r,n),d[_+1]=1-Tn(v,c,"y","z",r,t);break;case 1:v.set(-1,0,0),d[_+0]=1-Tn(v,c,"z","y",r,n),d[_+1]=1-Tn(v,c,"y","z",r,t);break;case 2:v.set(0,1,0),d[_+0]=1-Tn(v,c,"x","z",r,e),d[_+1]=Tn(v,c,"z","x",r,n);break;case 3:v.set(0,-1,0),d[_+0]=1-Tn(v,c,"x","z",r,e),d[_+1]=1-Tn(v,c,"z","x",r,n);break;case 4:v.set(0,0,1),d[_+0]=1-Tn(v,c,"x","y",r,e),d[_+1]=1-Tn(v,c,"y","x",r,t);break;case 5:v.set(0,0,-1),d[_+0]=Tn(v,c,"x","y",r,e),d[_+1]=1-Tn(v,c,"y","x",r,t);break}}static fromJSON(e){return new i(e.width,e.height,e.depth,e.segments,e.radius)}};var sn=i=>new N(...i),to={entry:[-11,.9,3.15],gate:[-5.3,.9,2.05],scan:[-2.95,.9,1.95],route:[.65,.9,1.79],fork:[4.25,.9,1.79],main:[10.5,.9,-3.45],backup:[10.25,.9,4.4],ops:[.75,4,-1.44],tools:[7.3,.9,-7.25],apps:[-8.5,.9,-4.5],agent:[-11.45,.9,-.3]};function af(i){let e=new Qa({canvas:i,antialias:!0,powerPreference:"low-power"});e.autoClear=!1,e.outputColorSpace=Ut;let t=new qi;t.background=new rt("#a9d9e8");let n=new Vn,s=new Hs("#ffe9cb",2.62);s.position.set(-14,15,6),e.shadowMap.enabled=!0,e.shadowMap.type=Hr,e.shadowMap.autoUpdate=!1,e.shadowMap.needsUpdate=!0,s.castShadow=!0,s.shadow.mapSize.set(1024,1024),s.shadow.autoUpdate=!1,s.shadow.needsUpdate=!0,s.shadow.bias=-22e-5,s.shadow.normalBias=.027,s.shadow.radius=2,Object.assign(s.shadow.camera,{left:-17,right:17,top:15,bottom:-15,near:.1,far:43}),s.shadow.camera.updateProjectionMatrix();let r=new Hs("#c2e8fa",.34);r.position.set(5,7,-7),t.add(s,r,new Vr("#d6efff","#6c8c91",.48));let o=96,a=48,l=new Float32Array(o*a*4),c=new rt("#93c7e2"),h=new rt("#ecf8ff"),u=new rt("#7da5a5"),m=new rt;for(let F=0;F<a;F++){let J=Math.PI*((F+.5)/a-.5);for(let Se=0;Se<o;Se++){let G=2*Math.PI*(Se+.5)/o,oe=Math.cos(G-1.05)*Math.cos(J)*.8+Math.sin(J)*.6,Ve=2.1*Math.max(0,oe)**24;m.copy(h).lerp(J>=0?c:u,Math.min(1,Math.abs(J)*1.05));let we=(F*o+Se)*4;l.set([m.r*.68+Ve,m.g*.68+Ve*.81,m.b*.68+Ve*.61,1],we)}}let d=new Ti(l,o,a,cn,_n);d.mapping=Gs,d.needsUpdate=!0;let g=new Ks(e),v=g.fromEquirectangular(d);t.environment=v.texture,t.environmentIntensity=.73,g.dispose(),d.dispose();let p=(F,J=.63)=>new zn({color:F,roughness:J}),f=F=>new dn({color:F}),_={ivory:p("#eee7d9",.46),metal:p("#adc2c1",.52),deck:p("#e0d7c6"),dark:p("#668a8e"),blue:p("#84a9a8"),glass:p("#6fa9b5",.27),copper:new zn({color:"#bc9a67",metalness:.48,roughness:.32}),window:f("#6db0b9"),warm:f("#d8b375"),cyan:f("#197d77"),leaf:p("#628c4b"),reed:p("#a1b96a"),rail:new zn({color:"#748c8f",metalness:.32,roughness:.36}),blueLight:f("#65a5c6"),amber:f("#ffae63"),red:f("#e67d64"),dim:f("#3e6c76")};_.deck.onBeforeCompile=F=>{F.vertexShader=`varying vec3 stonePoint;
`+F.vertexShader.replace("#include <project_vertex>",`stonePoint=(modelMatrix*vec4(transformed,1.0)).xyz;
#include <project_vertex>`),F.fragmentShader=`varying vec3 stonePoint;
`+F.fragmentShader.replace("#include <color_fragment>",`
      #include <color_fragment>
      vec2 tile=stonePoint.xz*vec2(1.28,1.64);
      tile.x+=.5*mod(floor(tile.y),2.);
      vec2 border=abs(fract(tile)-.5);
      float seam=smoothstep(.476,.499,max(border.x,border.y));
      float speck=fract(sin(dot(floor(stonePoint.xz*78.),vec2(12.9898,78.233)))*43758.5453);
      float grain=sin(dot(stonePoint.xz,vec2(6.4,8.9)))*sin(dot(stonePoint.xz,vec2(-10.3,3.8)));
      float visibleGrain=1.-smoothstep(.025,.12,length(fwidth(stonePoint.xz)));
      diffuseColor.rgb*=1.+visibleGrain*(.062*grain+.035*(speck-.5)-.13*seam);
      `)};let S=new Map;function x(F,J,Se,G,oe,Ve=t){let we=new Pt(F,J);return we.position.set(Se,G,oe),Ve.add(we),we}function R(F,J){return S.has(F)||S.set(F,J()),S.get(F)}function b(F,J,Se,G,oe,Ve,we,me=0,Le=t){return x(R([F,J,Se,me].join("/"),()=>me?new rc(F,J,Se,1,me):new Ln(F,J,Se)),we,G,oe,Ve,Le)}function I(F,J,Se,G,oe,Ve,we,me=36,Le=t){return x(R([F,J,Se,me,"c"].join("/"),()=>new Ar(F,J,Se,me)),we,G,oe,Ve,Le)}function P(F,J,Se,G,oe,Ve){let we=x(new Br(F,J,5,72),Ve,Se,G,oe);return we.rotation.x=Math.PI/2,we}function T(F,J,Se,G,oe){let Ve=sn(F),we=sn(J),me=Ve.clone().lerp(we,.5),Le=b(Se,G,Ve.distanceTo(we),me.x,me.y,me.z,oe);return Le.quaternion.setFromUnitVectors(new N(0,0,1),we.sub(Ve).normalize()),Le}let M=64,A=8,L=new Uint8Array(M*M*4),X=419,$=()=>(X=Math.imul(X,1664525)+1013904223>>>0,X/4294967296),se=Array.from({length:A*A},()=>[.13+.74*$(),.13+.74*$()]);for(let F=0;F<M;F++)for(let J=0;J<M;J++){let Se=J*A/M,G=F*A/M,oe=Math.floor(Se),Ve=Math.floor(G),we=1/0,me=1/0;for(let Ke=Ve-1;Ke<=Ve+1;Ke++)for(let qe=oe-1;qe<=oe+1;qe++){let[dt,Qe]=se[(Ke+A)%A*A+(qe+A)%A],st=(Se-qe-dt)**2+(G-Ke-Qe)**2;st<we?(me=we,we=st):st<me&&(me=st)}let Le=(F*M+J)*4;L[Le]=$()*256,L[Le+1]=$()*256,L[Le+2]=255*Math.max(0,1-4.4*(Math.sqrt(me)-Math.sqrt(we))),L[Le+3]=255}let te=new Ti(L,M,M);te.wrapS=te.wrapT=Cs,te.minFilter=te.magFilter=Vt,te.needsUpdate=!0;let xe=-.035,ne=1,Ce=new Vn(-23,23,14,-14,.1,100);Ce.layers.set(ne);let Ue=new bn(448,272,{depthBuffer:!0}),D=new Tt,ce=new N,K=new N,Ae=new N(-.25,xe,-.25),Re=[new Sn(new N(0,1,0),-xe)],O=new rt,W=-1/0,j=0,ee=!0,he=[],Oe=new At(-21,-18,42,41),Be=new pn({uniforms:{time:{value:0},base:{value:t.background},sea:{value:new rt("#228eaa")},crest:{value:new rt("#e5fffa")},shallows:{value:new rt("#62d1b9")},grain:{value:te},reflection:{value:Ue.texture},reflectionMatrix:{value:D},atmosphere:{value:0},shore:{value:null},shoreBounds:{value:Oe}},vertexShader:`varying vec2 p,mirrorUV,screenUV;uniform mat4 reflectionMatrix;
      void main(){
        vec4 world=modelMatrix*vec4(position,1.);
        p=world.xz;
        mirrorUV=(reflectionMatrix*world).xy*.5+.5;
        gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);
        screenUV=gl_Position.xy/gl_Position.w*.5+.5;
      }`,fragmentShader:`varying vec2 p,mirrorUV,screenUV;uniform float time,atmosphere;uniform vec3 base,sea,crest,shallows;
      uniform sampler2D grain,reflection,shore;
      uniform vec4 shoreBounds;
      float skyHash(vec2 p){
        vec3 q=fract(vec3(p.xyx)*vec3(.1031,.11369,.13787));
        q+=dot(q,q.yzx+19.19);
        return fract((q.x+q.y)*q.z);
      }
      float skyNoise(vec2 uv){
        vec2 i=floor(uv),f=fract(uv);
        f=f*f*(3.-2.*f);
        float a=mix(skyHash(i),skyHash(i+vec2(1.,0.)),f.x);
        float b=mix(skyHash(i+vec2(0.,1.)),skyHash(i+vec2(1.,1.)),f.x);
        return mix(a,b,f.y);
      }
      void main(){
        vec2 flow=p+vec2(-.16,.095)*time;
        vec2 broad=texture2D(grain,flow*.0065).rg;
        vec3 detail=texture2D(grain,vec2(.102,.147)*flow+broad*.046).rgb;
        vec3 capillary=texture2D(grain,vec2(.248,.339)*(p+vec2(.11,-.065)*time)+detail.rg*.042).rgb;
        float swell=sin(dot(p,vec2(.43,.62))-time*.61+3.2*broad.r);
        float crossWave=sin(dot(p,vec2(1.70,-1.25))+time*.69+3.6*broad.g);
        float ripple=sin(dot(p,vec2(2.5,4.6))-time*1.26+swell*1.86+crossWave*.92+2.1*detail.r);
        float fineWave=sin(dot(p,vec2(-4.3,8.4))-time*.91+1.1*crossWave+2.5*detail.g);
        float detailFade=1.-smoothstep(.085,.44,length(fwidth(p)));
        float facet=ripple*.65+fineWave*.35;
        float glint=smoothstep(.39,.96,facet)*smoothstep(.37,.80,capillary.r*.74+detail.r*.26);
        float fine=smoothstep(.48,.85,capillary.g)*smoothstep(.05,.96,fineWave)*detailFade;
        vec2 coastUV=(p-shoreBounds.xy)/shoreBounds.zw;
        vec3 bank=texture2D(shore,coastUV).rgb;
        float distance=max(0.,(bank.r-.167)*12.);
        float contact=1.-smoothstep(.02,.53,distance);
        float nearBank=1.-smoothstep(.29,1.90,distance);
        float exposed=smoothstep(.055,.28,distance);
        float windward=smoothstep(.22,.82,bank.g);
        float pierShade=bank.b;
        // Swells push broken foam fronts outwards. Their previous edges dissolve into lace.
        float phase=fract(distance*(1.22+.37*broad.g)-time*.26+dot(p,vec2(.047,-.035))+broad.r*.58+swell*.17);
        float edgeBreak=(capillary.r-.5)*.125+(detail.r-.5)*.13;
        float laceField=smoothstep(.24,.74,capillary.g*.63+detail.r*.37);
        float waveLip=(1.-smoothstep(.009,.073,abs(phase-.38+edgeBreak)))*(.26+.74*laceField);
        float waveBody=smoothstep(.21,.37,phase)*(1.-smoothstep(.46,.74,phase));
        float patches=smoothstep(.33,.68,broad.g*.45+detail.r*.55);
        float lace=smoothstep(.30,.79,capillary.b*.54+detail.b*.46);
        float exposure=.46+.54*smoothstep(-.57,.87,crossWave+.28*swell);
        float wash=nearBank*exposed*patches*exposure*mix(.20,1.,windward);
        float basin=1.-smoothstep(.27,1.18,length((p-vec2(-.2,1.9))*vec2(.047,.069)));
        float coastal=1.-smoothstep(.14,3.6+windward*.45,distance+.58*(broad.g-.5));
        float haze=smoothstep(12.,38.,-p.y);
        vec3 c=mix(sea,base,haze*.60);
        float seabed=smoothstep(.32,.71,.46*broad.g+.36*detail.g+.18*capillary.b);
        c=mix(c,shallows,(coastal*(.42+.11*swell+.20*seabed)+basin*.13)*(1.-.48*haze)+wash*.13*waveBody);
        float caustic=smoothstep(.36,.87,detail.b*.71+capillary.b*.29)*smoothstep(-.26,.76,crossWave+.28*swell);
        c*=1.+(.088*swell+.052*crossWave+.042*(2.*detail.g-1.))*(1.-.61*haze);
        c+=crest*(caustic*.079*(.67*coastal+.33*basin)*detailFade+fine*.032*(1.-.55*haze));
        vec2 distortion=vec2(.0028*crossWave+.0034*(detail.r-.5),.0032*ripple+.0012*swell);
        float breakup=smoothstep(.28,4.5,distance);
        vec2 uv=mirrorUV+distortion*mix(.35,2.7,breakup);
        if(all(greaterThan(uv,vec2(.0)))&&all(lessThan(uv,vec2(1.)))){
          vec4 reflected=texture2D(reflection,uv);
          float flecks=mix(1.,smoothstep(.22,.79,capillary.r*.64+detail.g*.36),breakup*.78);
          float strength=(1.-smoothstep(.33,6.2,distance))*(.42+.10*ripple)*flecks*(1.-haze*.55);
          c=c*(1.-reflected.a*strength)+reflected.rgb*vec3(.66,.82,.83)*strength;
        }
        float sunlane=1.-smoothstep(.5,12.,abs(p.x+16.+p.y*.31+broad.r*3.));
        float sparks=smoothstep(.54,.94,facet)*smoothstep(.48,.86,capillary.r);
        float pierFoam=contact*exposed*windward*smoothstep(.53,.84,capillary.b*.68+detail.r*.32);
        c*=1.-.26*contact-.22*pierShade;
        c+=crest*(.072*glint*detailFade+.34*sunlane*sparks+.027*sunlane+.30*pierFoam
          +wash*(.29*waveLip+.29*lace*waveBody));
        if(atmosphere>.001){
          float x=screenUV.x,y=screenUV.y;
          float horizon=.797;
          float skyAmount=smoothstep(horizon-.013,horizon+.009,y);
          vec3 sky=mix(vec3(.79,.91,.95),vec3(.29,.64,.84),smoothstep(horizon,.99,y));
          if(y>horizon){
            float height=y-horizon;
            vec2 skyPoint=vec2(x*9.,height*26.)+vec2(9.3,1.6);
            float cloud=.60*skyNoise(skyPoint)+.27*skyNoise(2.13*skyPoint)+.13*skyNoise(4.81*skyPoint);
            float wisps=smoothstep(.49,.71,cloud+.04*sin(x*28.));
            float cloudBand=smoothstep(.008,.048,height)*(1.-smoothstep(.12,.22,height));
            sky=mix(sky,vec3(.94,.96,.98),wisps*.74*cloudBand);
            sky=mix(sky,vec3(1.,.93,.81),.29*(1.-smoothstep(0.,.42,x)));
          }
          float coastWidth=smoothstep(.60,.91,x);
          float distantRidge=horizon+coastWidth*(.020+.010*sin(19.*x)+.007*sin(51.*x+1.3));
          float frontRidge=horizon-.002+smoothstep(.83,1.015,x)*(.037+.013*sin(42.*x+2.3)+.004*sin(86.*x));
          float coastMask=(1.-smoothstep(distantRidge,distantRidge+.003,y))*smoothstep(.61,.79,x);
          float frontMask=(1.-smoothstep(frontRidge,frontRidge+.003,y))*smoothstep(.80,.97,x);
          float cliff=1.-smoothstep(horizon,horizon+.012,y);
          sky=mix(sky,vec3(.30,.56,.65),coastMask*.43);
          sky=mix(sky,mix(vec3(.46,.61,.57),vec3(.17,.39,.39),1.-cliff),frontMask*.64);
          vec3 horizonWater=mix(c,vec3(.20,.49,.63),smoothstep(.65,horizon,y)*.60);
          c=mix(c,mix(horizonWater,sky,skyAmount),atmosphere);
        }
        gl_FragColor=vec4(c,1.);
        #include <colorspace_fragment>
      }`}),C=x(new kn(320,300),Be,0,xe,0);C.rotation.x=-Math.PI/2;function B(F,J,Se){he.push((G,oe)=>Math.hypot(G-F,oe-J)-Se-.1),I(Se,Se+.16,.34,F,.06,J,_.dark,40),I(Se+.025,Se,.22,F,.3,J,_.metal,40),I(Se-.035,Se+.015,.065,F,.44,J,_.copper,40),I(Se-.13,Se-.03,.19,F,.56,J,_.ivory,40),I(Se-.16,Se-.16,.06,F,.665,J,_.deck,40);for(let G=0;G<32;G++){let oe=G*Math.PI/16,Ve=b(.017,.178,.024,F+Math.cos(oe)*(Se-.075),.558,J+Math.sin(oe)*(Se-.075),_.metal);if(Ve.rotation.y=-oe-Math.PI/2,G%4===0){let we=b(.17,.016,.037,F+Math.cos(oe)*(Se-.25),.698,J+Math.sin(oe)*(Se-.25),_.copper);we.rotation.y=-oe-Math.PI/2}}}function Y(F,J,Se,G,oe,Ve,we){let me=Math.abs(F-Se)-oe+we,Le=Math.abs(J-G)-Ve+we;return Math.hypot(Math.max(0,me),Math.max(0,Le))+Math.min(Math.max(me,Le),0)-we}he.push((F,J)=>Y(F,J,-.65,-.09,6.72,3.81,2.03));function Z(F,J,Se,G,oe,Ve){let we=new Yi,me=F/2,Le=J/2;we.moveTo(-me+oe,-Le),we.lineTo(me-oe,-Le),we.quadraticCurveTo(me,-Le,me,-Le+oe),we.lineTo(me,Le-oe),we.quadraticCurveTo(me,Le,me-oe,Le),we.lineTo(-me+oe,Le),we.quadraticCurveTo(-me,Le,-me,Le-oe),we.lineTo(-me,-Le+oe),we.quadraticCurveTo(-me,-Le,-me+oe,-Le);let Ke=new ks(we,{depth:Se,bevelEnabled:!1,curveSegments:8});Ke.rotateX(-Math.PI/2),x(Ke,Ve,-.65,G,-.09)}Z(13.44,7.62,.34,-.1,2.03,_.dark),Z(13.42,7.59,.15,.24,2.02,_.ivory),Z(13.39,7.56,.037,.39,2,_.copper),Z(13.34,7.53,.07,.427,1.99,_.deck),Z(12.52,7.04,.094,.49,1.58,_.ivory),Z(12.36,6.86,.026,.584,1.52,_.copper),Z(12.2,6.72,.095,.61,1.42,_.deck);for(let F=0;F<16;F++){let J=-5.28+F*.63;b(.017,.143,.018,J,.507,3.369,_.metal)}for(let F of[-5.7,-2.4,1,4.3]){for(let J of[-2.35,2.3])b(.58,.56,.67,F,.17,J,_.blue,.08);b(1.18,.037,.037,F,.346,3.701,_.window,.012)}B(-10.7,3.15,2.17),B(-8.65,-4.55,1.72),B(-11.72,-.32,1.54),B(10.6,-3.45,2.28),B(10.3,4.4,2.18),B(7.3,-7.25,1.95);let H=[];function ge(F,J){let Se=F.getSpacedPoints(16),G=Qe=>1.02+.49*(J?Qe:1-Qe)**3+.13*Math.sin(Math.PI*Qe),oe=Se.map((Qe,st)=>{let ut=F.getTangentAt(st/(Se.length-1));return{x:Qe.x,z:Qe.z,nx:-ut.z,nz:ut.x,width:G(st/(Se.length-1))}});function Ve(Qe,st,ut,Kt){let mt=new Yi;for(let[Fn,li]of[[1,oe],[-1,[...oe].reverse()]])for(let[Ni,{x:hi,z:Fi,nx:Ot,nz:so,width:cc}]of li.entries()){let Qs=(cc-Qe)*Fn,On=hi+Ot*Qs,er=-(Fi+so*Qs);Fn===1&&Ni===0?mt.moveTo(On,er):mt.lineTo(On,er)}mt.closePath();let Rt=new ks(mt,{depth:ut-st,bevelEnabled:!1});Rt.rotateX(-Math.PI/2),x(Rt,Kt,0,st,0)}Ve(0,.22,.45,_.ivory),Ve(.012,.45,.473,_.copper),Ve(.036,.473,.548,_.deck);let we=oe.slice(0,-1).map((Qe,st)=>{let ut=oe[st+1],Kt=ut.x-Qe.x,mt=ut.z-Qe.z;return{a:Qe,dx:Kt,dz:mt,inverseLength:1/(Kt*Kt+mt*mt)}}),me=Math.max(...oe.map(Qe=>Qe.width))+.82,Le=Math.min(...oe.map(Qe=>Qe.x))-me,Ke=Math.max(...oe.map(Qe=>Qe.x))+me,qe=Math.min(...oe.map(Qe=>Qe.z))-me,dt=Math.max(...oe.map(Qe=>Qe.z))+me;return(Qe,st)=>{if(Qe<Le||Qe>Ke||st<qe||st>dt)return 1/0;let ut=1/0;for(let{a:Kt,dx:mt,dz:Rt,inverseLength:Fn}of we){let li=Qe-Kt.x,Ni=st-Kt.z,hi=Math.max(0,Math.min(1,(li*mt+Ni*Rt)*Fn));ut=Math.min(ut,Math.hypot(li-hi*mt,Ni-hi*Rt)-Kt.width)}return ut}}let ae=[],de={},Xe={};function ke(F,J,Se,G,oe,Ve,we=!0){let me=new Os(sn(Se),sn(G),sn(oe),sn(Ve));if(F&&(de[F+">"+J]={curve:me,reverse:!1},de[J+">"+F]={curve:me,reverse:!0}),(F==="fork"||J==="gate")&&ae.push(ge(me,F==="fork")),F==="fork"&&J!=="tools"){let qe=new wi(me.getPoints(22).map(dt=>new N(dt.x,.795,dt.z)));Xe[J]=x(new Ji(qe,22,.053,5,!1),_.cyan,0,0,0)}let Le=Math.ceil(me.getLength()/(we?.43:.31)),Ke=(qe,dt,Qe)=>{let st=me.getPointAt(qe),ut=me.getTangentAt(qe);return[st.x-ut.z*dt,Qe,st.z+ut.x*dt]};for(let qe=0;qe<Le;qe++){let dt=qe/Le,Qe=(qe+1)/Le;if(we){T(Ke(dt,0,.559),Ke(Qe,0,.559),1.48,.12,_.metal),T(Ke(dt,0,.65),Ke(Qe,0,.65),1.47,.09,_.deck);for(let st of[-.7,.7])T(Ke(dt,st,.745),Ke(Qe,st,.745),.026,.036,_.window)}for(let st of[-.29,.29])T(Ke(dt,st,.765),Ke(Qe,st,.765),.055,.048,_.rail);if(T(Ke(dt,-.42,.727),Ke(dt,.42,.727),.085,.038,_.blue),we&&qe%4===2){let st=me.getPointAt(dt);I(.18,.25,.49,st.x,.15,st.z,_.blue,9),H.push([st.x,st.z])}}}let E=to;ke("entry","gate",E.entry,[-9,.9,3.15],[-7,.9,2.05],E.gate),ke("apps","gate",E.apps,[-6.55,.9,-4.5],[-6.9,.9,1.88],E.gate),ke("agent","gate",E.agent,[-9.2,.9,-.45],[-7.5,.9,1.87],E.gate),ke("gate","scan",E.gate,[-4.8,.9,2.05],[-3.7,.9,1.95],E.scan),ke("scan","route",E.scan,[-1.6,.9,1.95],[-.5,.9,1.79],E.route,!1),ke("route","fork",E.route,[1.4,.9,1.79],[3.5,.9,1.79],E.fork,!1),ke("fork","main",E.fork,[6.7,.9,1.79],[7.35,.9,-3.45],E.main),ke("fork","backup",E.fork,[6.8,.9,1.79],[7.1,.9,4.4],E.backup),ke("fork","tools",E.fork,[6.58,.9,.88],[5.23,.9,-7.25],E.tools);let y=[[10.64,14.72,.69,.23,.57],[11.43,14.1,.94,.47,.68],[12.35,14.65,1.22,.55,.79],[13.26,14.31,.64,.25,.57],[13.8,15.03,1.04,.51,.77],[12.6,15.47,1.35,.64,.85],[11.43,15.57,.83,.32,.57],[10.21,15.32,.52,.12,.42],[13.64,16.08,.72,.26,.59]],V=new zs(1,0);for(let[F,[J,Se,G,oe,Ve]]of y.entries()){let we=J-1.55,me=Se-.68,Le=x(V,F%3===0?_.metal:F%3===1?_.dark:_.blue,we,.01,me);Le.scale.set(G,oe,Ve),Le.rotation.y=F*1.71,he.push((Ke,qe)=>Math.hypot((Ke-we)*.9,qe-me)-Math.min(G,Ve)*.78)}function Q(){let J=Oe.w/192,Se=Oe.z/192,G=new Float32Array(36864),oe=new Uint8Array(36864*4),Ve=me=>Math.max(0,Math.min(1,me));for(let me=0;me<192;me++){let Le=Oe.y+(me+.5)*J;for(let Ke=0;Ke<192;Ke++){let qe=Oe.x+(Ke+.5)*Se,dt=me*192+Ke,Qe=1/0,st=0;for(let ut of he)Qe=Math.min(Qe,ut(qe,Le));for(let[ut,Kt]of H){let mt=Math.hypot(qe-ut,Le-Kt);Qe=Math.min(Qe,mt-.23),st=Math.max(st,.95*Ve(1-(mt-.1)/.81))}for(let ut of ae)st=Math.max(st,.56*Ve(1-ut(qe,Le)/.82));G[dt]=Qe,oe[dt*4]=Math.round(Ve((Qe+2)/12)*255),oe[dt*4+2]=Math.round(st*255),oe[dt*4+3]=255}}for(let me=1;me<191;me++)for(let Le=1;Le<191;Le++){let Ke=me*192+Le,qe=G[Ke+1]-G[Ke-1],dt=G[Ke+192]-G[Ke-192],Qe=(qe*-.52+dt*.85)/Math.max(.001,Math.hypot(qe,dt));oe[Ke*4+1]=Math.round(Ve(.5+.5*Qe)*255)}let we=new Ti(oe,192,192);return we.minFilter=we.magFilter=Vt,we.needsUpdate=!0,we}Be.uniforms.shore.value=Q();let pe=new Qt;t.add(pe);function re(F,J,Se,G,oe,Ve,we,me=["#103644","#dbf3ed"],{productTitle:Le=!1,hiRes:Ke=!1}={}){let qe=document.createElement("canvas");qe.width=Ke?1024:512,qe.height=Ke?Math.round(qe.width*Se/J):96;let{width:dt,height:Qe}=qe,st=qe.getContext("2d");st.fillStyle=me[0],st.fillRect(0,0,dt,Qe),st.fillStyle=me[1],st.textAlign="center",st.textBaseline="middle",st.font=(Ke?"750 ":"650 ")+Math.round(Qe*(Ke?.61:.54))+"px PingFang SC, Microsoft YaHei, system-ui",Le?(st.strokeStyle="#bd9b62",st.lineWidth=1.5,st.strokeRect(7,6,dt-14,Qe-12),nc(st,dt/2,Qe*.49,Qe*.72,{color:me[1],accent:"#e9cd97",align:"center",maxWidth:dt*.89})):st.fillText(F,dt/2,Qe*.52,dt*.94);let ut=new ii(qe);return ut.colorSpace=Ut,Ke&&(ut.anisotropy=Math.min(4,e.capabilities.getMaxAnisotropy())),x(new kn(J,Se),new dn({map:ut}),G,oe,Ve,we)}let ze=Ku({m:_,mesh:x,box:b,cyl:I,beam:T,torus:P,roof:pe});b(5.95,.16,1.28,-.48,2.8,-2.49,_.ivory,.06),b(5.77,.048,1.21,-.48,2.69,-2.49,_.copper,.02),b(5.7,.83,.16,-.48,3.56,-2.1,_.glass,.06),b(5.75,.08,1.03,-.48,3.98,-2.49,_.ivory,.035),b(5.56,1.02,.045,-.48,3.36,-2.99,ze,.015);for(let F of[-3.2,-1.83,.88,2.24])I(.082,.107,1.95,F,1.68,-2.56,_.ivory,10),b(.05,1.14,.066,F,3.37,-3.01,_.copper);let Ee=[];for(let F=0;F<8;F++){let J=-2.5+F*.67,Se=.21+F%4*.1;Ee.push({x:J,high:Se,index:F}),b(.045,.76,.042,J+.3,3.58,-1.995,_.ivory,.008)}let ue=[_.copper,_.cyan].map((F,J)=>{let Se=Ee.filter(oe=>+(oe.index%3!==0)===J),G=new Tr(new Ln(1,1,1),F,Se.length);return G.frustumCulled=!1,t.add(G),{instances:G,bars:Se}}),_e=new Ht,fe=null;function ye(F){if(F!==fe){fe=F;for(let{instances:J,bars:Se}of ue){for(let[G,oe]of Se.entries()){let Ve=oe.high*(F<0?1:.52+F*(.44+oe.index%3*.15));_e.position.set(oe.x,3.16+Ve/2,-1.98),_e.scale.set(.38,Ve,.045),_e.updateMatrix(),J.setMatrixAt(G,_e.matrix)}J.instanceMatrix.needsUpdate=!0}}}ye(-1);let Fe=[];for(let F=0;F<3;F++){let J=1.99+F*.55;Fe.push(b(.38,.27,.4,J,1.08,2.81,_.copper,.04)),b(.4,.055,.41,J,1.21,2.81,_.cyan,.018)}b(2.25,.11,.52,2.55,.9,2.81,_.metal,.05),b(2.19,.3,.3,2.55,.883,3.106,_.metal,.027);for(let F of[1.55,3.55])I(.035,.05,.52,F,1.1,2.91,_.copper,8);let Pe=re("\u8FD0\u8425\u4E0E\u5BA1\u8BA1",2.06,.35,.75,3.91,-1.99,t),be=re("Skill \u5BA1\u6838\u4E0E\u53D1\u5E03",2.08,.258,2.55,.885,3.258,t,["#102f3d","#f3fff9"],{hiRes:!0});re("\u5C71\u77F3\u7F51\u79D1\u7EDF\u4E00 AI \u7F51\u5173",4.78,.575,-.5,2.94,3.261,t,["#102f42","#fff7e4"],{productTitle:!0,hiRes:!0});for(let F=0;F<11;F++)b(.016,.012,5.6,-5.5+F*1,.724,-.1,_.metal);function $e(F,J,Se){I(Se,Se+.04,.14,F,.765,J,_.ivory,16),I(Se*.87,Se*.87,.032,F,.844,J,_.reed,14);for(let G=0;G<5;G++){let oe=G*2.4,Ve=R("daylight-shrub",()=>new zs(1,1));x(Ve,G%2?_.reed:_.leaf,F+Math.cos(oe)*Se*.58,.92,J+Math.sin(oe)*Se*.55).scale.set(.11+Se*.21,.115+G%3*.062,.13+Se*.21)}}for(let[F,J,Se]of[[-5.45,2.99,.35],[-3.6,2.93,.35],[2.55,-2.73,.37],[4.69,2.72,.37],[-4.7,-2.73,.41],[4.4,-2.72,.44]])$e(F,J,Se);function U(F,J,Se){for(let G of[-.73,.73])b(.28,1.28,.24,F,1.35,J+G,_.ivory,.04),b(.39,.12,.36,F,.78,J+G,_.dark,.035);return b(.71,.19,1.79,F,2,J,_.ivory,.06),b(.34,.072,.049,F,2,J+.901,Se,.014)}let ve=U(E.gate[0],E.gate[2],_.cyan),Te=U(E.scan[0],E.scan[2],_.cyan);U(E.route[0],E.route[2],_.cyan),b(1.25,.14,1.41,.65,2.08,.7,_.metal,.05);let De=b(.045,1.05,1.14,E.scan[0],1.28,E.scan[2],new dn({color:"#81e9ce",transparent:!0,opacity:.22,depthWrite:!1})),Me=new Qt;Me.position.set(E.scan[0]+.62,1.18,E.scan[2]),t.add(Me);for(let F of[-.17,0,.17])b(.11,.085,1.33,0,F,0,_.copper,.018,Me);for(let F of[-.57,.57])b(.12,.44,.075,0,0,F,_.dark,.014,Me);let le=new Qt;le.position.set(-3.71,2.22,3.78),le.scale.setScalar(1.35),t.add(le),b(.86,.045,.61,0,0,0,_.ivory,.035,le),b(.6,.008,.083,-.025,.027,-.16,_.glass,.005,le),b(.55,.012,.095,.02,.029,.005,_.red,.006,le);for(let F of[-.14,-.065,.01,.085,.16])I(.016,.016,.009,F,.039,.005,_.ivory,7,le);b(.48,.008,.06,-.03,.027,.16,_.glass,.004,le);let We=new Qt;le.add(We);let et=re("\u5F02\u5E38\u6307\u4EE4",.68,.29,0,.046,.01,We,["#ac523e","#fff0d7"]);et.rotation.x=-Math.PI/2;let xt=re("\u539F\u4EFB\u52A1\uFF1A\u5206\u6790\u63A5\u53E3\u62A5\u9519",.97,.22,-.05,.05,-.47,We);xt.rotation.x=-Math.PI/2;let ct=new Qt;ct.position.set(E.fork[0]-.08,.83,E.fork[2]),t.add(ct);for(let F of[-.24,.24])b(1.83,.069,.07,.78,0,F,_.metal,.014,ct);let xn=b(.22,.12,.14,E.fork[0]-.03,1.01,E.fork[2]+.77,_.cyan,.025),vn=new Or([[0,-.105],[.82,-.105],[.96,-.073],[1,-.028],[.984,.013],[.88,.053],[.57,.106],[0,.129]].map(([F,J])=>new Ne(F,J)),32);function Xn(F,J,Se,G=1){let oe=Se==="primary"||Se==="backup",Ve=Se==="tools",we=oe?2.05:Ve?1.96:1.78,me=(oe?1.44:Ve?1.18:1.46)*G,Le=(oe?.62:Ve?.73:.52)*G;b(me*1.91,.087,Le*1.84,F,.743,J,_.ivory,.039),b(me*1.63,.12,Le*1.27,F,.834,J,_.metal,.037);let Ke=we-1,qe=.89+Ke/2;if(Se!=="entry"){b(me*1.59,Ke,.031,F,qe,J-Le*.64,ze);for(let ut of[-.8,.8])b(.028,Ke,Le*1.28,F+ut*me,qe,J,ze)}if(oe){b(me*1.22,.068,.068,F,we-.159,J+Le*.54,_.metal,.015);for(let ut of[-.36,.36])b(.11,.023,.071,F+ut*me,we-.198,J+Le*.54,_.window,.008)}if(Ve){b(me*1.55,.043,.027,F,1.53,J+Le*.656,_.copper);for(let ut of[-.66,-.53,-.4,.4,.53,.66])b(.025,Ke*.82,.044,F+ut*me,qe,J+Le*.665,_.copper)}for(let ut of[-.8,-.42,0,.42,.8])I(.022,.029,we-.87,F+ut*me,.87+(we-.87)/2,J-Le*.65,_.copper,6);for(let ut of[-.8,-.42,.42,.8])I(.025,.034,we-.87,F+ut*me,.87+(we-.87)/2,J+Le*.65,_.copper,7),Math.abs(ut)>.5&&b(.06,.053,.058,F+ut*me,.902,J+Le*.65,_.ivory);return b(me*.88,.17,Le*.38,F,.976,J-Le*.26,oe?_.glass:_.deck,.024),b(me*.96,.03,Le*.46,F,1.07,J-Le*.26,_.ivory,.012),Ve&&b(me*1.56,.05,Le*1.16,F,we-.111,J,_.copper,.018),x(vn,_.ivory,F,we,J).scale.set(me,1,Le*1.25),I(1,1,.019,F,we-.056,J,_.copper,32).scale.set(me*.984,1,Le*1.23),I(.89,.89,.013,F,we-.107,J,_.deck,24).scale.set(me,1,Le*1.25),$e(F-me*.67,J+Le*.79,.17),b(.26,.05,.076,F-me*.64,we-.095,J+Le*.89,Se==="primary"?_.cyan:_.blueLight,.014)}Xn(-10.7,2.17,"entry"),Xn(-8.65,-5.25,"entry"),Xn(-11.8,-1.1,"entry",.72);let Un=Xn(10.6,-4.38,"primary"),cs=Xn(10.3,3.43,"backup");Xn(7.3,-8.09,"tools");for(let[F,J,Se=.683]of[[-12,3.9],[-9.5,4.65],[-9.8,-4.5],[10.7,-1.66],[11.6,3.24],[.45,3.54,.497],[3.73,3.45,.497],[-2.5,3.53,.497],[7.9,-6.1]])I(.032,.048,.47,F,Se+.235,J,_.dark,8),b(.17,.042,.1,F+.04,Se+.485,J,_.cyan,.012);for(let[F,J]of[[-5.62,-4.45],[-3.28,-1.78],[-.37,1.22],[3.8,4.58]]){T([F,.99,3.17],[J,.99,3.17],.028,.03,_.copper),T([F,.85,3.17],[J,.85,3.17],.014,.014,_.metal);for(let G of[F,(F+J)/2,J])I(.023,.027,.3,G,.85,3.17,_.copper,7)}let hn=new Qt;t.add(hn),b(.51,.14,.73,0,-.07,0,_.dark,.052,hn),b(.46,.28,.65,0,.13,0,_.ivory,.09,hn),b(.48,.13,.32,0,.16,.07,_.glass,.035,hn);let io=b(.19,.043,.33,0,.286,0,_.cyan,.016,hn),qn=P(.72,.032,0,.742,0,_.amber),ls=new Set([C,ve,Te,De,Un,cs,qn,xn,Pe,be,...ue.map(F=>F.instances),...Fe,...Object.values(Xe)]);function Pi(F,J=new Set){let Se=new Map;for(let G of[...F.children]){if(!G.isMesh||J.has(G)||G.material.map)continue;G.updateMatrix();let oe=G.geometry.index?G.geometry.toNonIndexed():G.geometry.clone();oe.applyMatrix4(G.matrix),Se.has(G.material)||Se.set(G.material,[]),Se.get(G.material).push(oe),F.remove(G)}for(let[G,oe]of Se){F.add(new Pt(ef(oe),G));for(let Ve of oe)Ve.dispose()}}Pi(t,ls);for(let F of[pe,Me,le,ct])Pi(F);for(let F of t.children)(F.isLight||F.isMesh&&!ls.has(F)&&!F.material.transparent)&&F.layers.enable(ne),F.isMesh&&!ls.has(F)&&!F.material.transparent&&!F.material.map&&(F.castShadow=!0,F.receiveShadow=[_.deck,_.ivory,_.metal].includes(F.material));for(let F of pe.children)F.isMesh&&!F.material.map&&!F.material.transparent&&F.layers.enable(ne);let hs=[];for(let F of[_.cyan,_.blueLight,_.amber]){let J=new Qt;t.add(J),b(.47,.2,.65,0,.07,0,_.ivory,.07,J),J.userData.signal=b(.22,.05,.36,0,.2,0,F,.02,J),J.userData.baseLight=F,hs.push(J)}let Li=2*Math.PI,En=1,Yn=1,Nn=0,Di=0,us=0,Ui=0,w=1,k=new N(0,.65,0),q=new N,ie=1,z=15,Ie=0,He=!1,Je=sn([E.scan[0]+.19,1.46,E.scan[2]]),Ye=sn([.9,1.8,.15]),nt=sn([7.25,1.15,.68]),it=sn([10.15,1.42,-3.8]),je=sn([9.95,1.4,4.18]),ft={access:[0,.85,.05,1],policy:[-3.7,1.7,.18,1.46],security:[-2.4,1.7,1.03,1.48],routing:[4.5,1.1,.1,1.24],resources:[3.95,1.65,-2.37,1.25],operations:[.1,2.55,-1.35,1.48]},pt={entry:[1.78,12],gate:[2.12,11],scan:[2.29,11],dispatch:[1.87,12],main:[1.77,12],primary:[2,11],timeout:[2.32,10],junction:[1.45,17],backup:[2.22,11],return:[1.72,13],ops:[1.86,13],tools:[1.9,12]},Ct={entry:[-10.8,2.3,2.1],gate:[-5.3,2.2,2.5],scan:[-2.95,2.3,2.25],route:[0,2.7,.9],ops:[.75,4.9,-1.44],tools:[7.3,2.1,-7.5],apps:[-8.65,2.3,-5.25],agent:[-11.8,1.8,-1.1],main:[10.6,2.7,-4.2],backup:[10.2,2.65,3.82],skill:[2.55,1.26,3.26],recapEntry:[-6.32,2.78,2.92],recapPolicy:[.15,2.38,3.2],recapOps:[1.25,5.27,-.55]},bt={entry:[-6.32,2.78,2.92],gate:[-5.3,2.2,2.5],scan:[-2.95,2.3,2.25],route:[5.5,1.5,1.3],tools:[2.55,1.26,3.26],ops:[1.25,5.27,-.55]};function Mt(F,J){n.getWorldDirection(ce);let Se=ee||ce.distanceToSquared(K)>25e-6||Math.abs(pe.position.z-j)>.18,G=J?En<760?430:320:En<760?180:125;if(!Se||!ee&&F-W<G)return 0;ee=!1,W=F,j=pe.position.z,K.copy(ce),ce.y*=-1,Ce.position.copy(Ae).addScaledVector(ce,-37),Ce.up.setFromMatrixColumn(n.matrixWorld,1),Ce.up.y*=-1,Ce.lookAt(Ae),Ce.updateMatrixWorld(),D.multiplyMatrices(Ce.projectionMatrix,Ce.matrixWorldInverse);let oe=t.background,Ve=e.clippingPlanes,we=e.getClearAlpha();e.getClearColor(O),t.background=null,e.clippingPlanes=Re;let me=e.shadowMap.needsUpdate;e.shadowMap.needsUpdate=!1,e.setClearColor(0,0),e.setRenderTarget(Ue),e.clear(),e.render(t,Ce);let Le=e.info.render.calls;return e.setRenderTarget(null),e.setClearColor(O,we),e.clippingPlanes=Ve,e.shadowMap.needsUpdate=me,t.background=oe,Le}function tt(F,J){En=F,Yn=J;let Se=F<760?256:448,G=F<760?156:272;Ue.width!==Se&&(Ue.setSize(Se,G),ee=!0),w=Math.min(devicePixelRatio||1,F<760?1.4:1.7,Math.sqrt((F<760?65e4:155e4)/(F*J))),e.setPixelRatio(w),e.setSize(F,J,!1)}function wt(F){let J=F==="policy-denied"?hs[1].position.clone().add(sn([0,.51,0])):sn(F.startsWith("module-")?bt[F.slice(7)]:Ct[F]);return J.project(n),{x:(J.x*.5+.5)*En,y:(.5-J.y*.5)*Yn}}function Ze(F,J,Se=hn){if(F.length===1){Se.position.copy(sn(to[F[0]]));return}let G=F.slice(1).map((Ke,qe)=>de[F[qe]+">"+Ke]),oe=Math.max(0,Math.min(.999999,J))*G.length,Ve=G[Math.floor(oe)],we=oe%1,me=Ve.reverse?1-we:we;Ve.curve.getPointAt(me,Se.position);let Le=Ve.curve.getTangentAt(me);Ve.reverse&&Le.negate(),Se.rotation.y=Math.atan2(Le.x,Le.z)}function $t({now:F,dt:J,time:Se,step:G,progress:oe,scenario:Ve,zone:we,reduced:me,recap:Le,comparison:Ke}){let qe=sf(G,oe),dt=!!G,Qe=G?.chapter==="overview",st=!Le&&!!G&&qe.id!=="access"&&G.zone!=="ops"||qe.id==="operations",ut=me?1:1-Math.exp(-J*3.8),Kt=st?1:0;pe.position.z=ot.lerp(pe.position.z,-1.22*Kt,ut),pe.position.y=ot.lerp(pe.position.y,.35*Kt,ut),ye(qe.id==="operations"?Math.min(1,oe*2):-1);for(let[Wt,_t]of Fe.entries()){let vt=qe.id==="resources"&&oe>=.55,yn=vt&&oe>.83;_t.material=yn?_.cyan:vt&&Wt===1?_.warm:_.copper,_t.position.y=1.08+(yn?ot.smoothstep(oe,.83,.96)*.22:0)}let mt=ot.smoothstep;for(let[Wt,_t]of hs.entries()){if(_t.visible=!1,_t.userData.signal.material=_t.userData.baseLight,!Qe)continue;let vt=me?Math.floor(oe*5)/5:oe;if(qe.id==="access"){let yn=.08+Wt*.13,ao=yn+.48;_t.visible=vt>=yn&&vt<=ao+.09,_t.visible&&Ze([["entry","gate"],["apps","gate"],["agent","gate"]][Wt],mt(vt,yn,ao),_t)}else qe.id==="policy"&&Wt<2?(_t.visible=Wt===0?vt>=.08&&vt<.7:vt>=.3,Wt===0?Ze(["entry","gate","scan"],mt(vt,.08,.58),_t):(Ze(["apps","gate"],.89*mt(vt,.3,.48),_t),vt>=.48&&(_t.userData.signal.material=_.red))):qe.id==="security"&&Wt===0?(_t.visible=!0,vt<.32?Ze(["gate","scan"],mt(vt,.08,.24),_t):vt<.52?Ze(["scan","route"],mt(vt,.32,.48),_t):(_t.userData.signal.material=_.blueLight,vt<.76?Ze(["route","scan"],mt(vt,.53,.68),_t):Ze(["scan","gate"],mt(vt,.76,.94),_t))):qe.id==="routing"&&Wt===0?(_t.visible=!0,vt<.47?Ze(["route","fork","main"],mt(vt,.04,.36),_t):vt<.72?(Ze(["main","fork"],mt(vt,.47,.68),_t),_t.userData.signal.material=_.amber):Ze(["fork","backup"],mt(vt,.72,.95),_t)):qe.id==="resources"&&Wt===0&&(_t.visible=vt<.64,Ze(["route","fork","tools"],mt(vt,.05,.6),_t))}let Rt=sc(G,oe),Fn=Rt==="inspect"||Rt==="allow"||Rt==="incoming"||Rt==="blocked"||Rt==="response-inspect"||Rt==="response-allow",li=Rt==="allow"||Rt==="response-inspect"||Rt==="response-allow",Ni=qe.id==="timeout",hi=G?.policy&&oe>=.4,Fi=G?.provider&&oe>=.26&&oe<.86?G.provider.channel:null,Ot=me?of(qe,G,oe):oe;Be.uniforms.time.value=Se;let so=Be.uniforms.atmosphere,cc=En>=760&&Yn>=590&&(!G||Le)?1:0;if(so.value=ot.lerp(so.value,cc,me||!He?1:1-Math.exp(-J*5)),hn.visible=!G||G.track.length>0,hn.visible)if(!G)Ze(["entry","gate"],.06);else if(G.label==="\u6545\u969C\u5207\u6362"){let{arrive:Wt,reverse:_t,atFork:vt,depart:yn,retry:ao}=nn;Ot<Wt?Ze(["route","fork","main"],ot.smoothstep(Ot,0,Wt)):Ot<_t?Ze(["main"],0):Ot<yn?Ze(["main","fork"],ot.smoothstep(Ot,_t,vt)):Ze(["fork","backup"],ot.smoothstep(Ot,yn,ao))}else if(G.provider)if(me){let Wt=oe<.19||oe>=.91?"entry":oe<.43?"route":G.provider.channel;Ze([Wt],0)}else oe<.62?Ze(G.track,mt(oe,.08,.57)):Ze(G.returnTrack,mt(oe,.65,.91));else if(G.policy)Ze(G.track,.9*(me?Number(hi):mt(oe,.05,.39)));else if(G.risk==="response"){let{depart:Wt,model:_t,returning:vt,arrive:yn}=jr;oe<vt?Ze(G.track,me?+(oe>=_t):mt(oe,Wt,_t)):Ze(G.returnTrack,.9*(me?+(oe>=yn):mt(oe,vt,yn)))}else Rt==="incoming"||Rt==="blocked"?Ze(G.track,ot.smoothstep(Ot,0,Qr.arrive)):G.comparison==="normal"?oe<.78?Ze(G.track,mt(Ot,.48,.77)):Ze(["main","fork","route","scan"],mt(Ot,.78,.93)):Rt==="inspect"||Rt==="allow"?Ze(G.track,ot.smoothstep(Ot,Kr.depart,Kr.arrive)):G.label==="\u54CD\u5E94\u68C0\u67E5"?Ot<.4?Ze(G.track.slice(0,4),ot.smoothstep(Ot,0,.4)):Ot<.68?Ze(["scan"],0):Ze(G.track.slice(3),ot.smoothstep(Ot,.68,1)):G.label==="\u9009\u62E9\u6E20\u9053"?Ze(G.track,ot.smoothstep(Ot,0,.87)):G.label==="\u6388\u6743\u4E0E\u989D\u5EA6"?Ze(G.track,ot.smoothstep(Ot,.61,1)):Ze(G.track,ot.smoothstep(Ot,0,1));let Qs=Fn?pt.scan:pt[qe.id]||pt[we]||[1,15];q.set(0,.65,0),dt&&hn.visible?(q.copy(hn.position),q.y+=.66,qe.id==="dispatch"&&q.lerp(Ye,.63),Fn&&q.copy(Je),qe.id==="main"&&q.lerp(it,.25),qe.id==="primary"&&q.lerp(it,.46),qe.id==="timeout"&&q.copy(it),qe.id==="junction"&&q.copy(nt),qe.id==="backup"&&q.lerp(je,.34+.52*ot.smoothstep(oe,.82,.97))):we&&(q.copy(sn(to[we])),we==="ops"?q.set(0,3,-1.5):q.y+=.55);let On=Qe?ft[qe.id]:null;On&&q.set(On[0],On[1],On[2]),Le&&q.set(.05,.78,0),Ke&&q.copy(Je),(Fn||Ke)&&!Le&&(q.y+=En<760?.45:-.24);let er=Ke?pt.scan[0]:Le?1:On?On[3]:we==="ops"?1.12:dt||we?Qs[0]:1,Ul=Ke?pt.scan[1]:Le?16:On?18:dt||we?Qs[1]:15,Nl=!G&&En>=760&&Yn>=620?Math.min(42,Yn*.047):0,Fl=k.distanceToSquared(q)+Math.abs(ie-er)+Math.abs(Di-Nn)+Math.abs(Ie-Nl)*.01+(Math.abs(Ui-us)+Math.abs(z-Ul))*.05,fs=me||!He?1:1-Math.exp(-J*(qe.id==="junction"?5.8:4.5));He=!0,k.lerp(q,fs),ie=ot.lerp(ie,er,fs),z=ot.lerp(z,Ul,fs),Ie=ot.lerp(Ie,Nl,fs),Nn=ot.lerp(Nn,Di,fs),us=ot.lerp(us,Ui,fs);let Ol=Math.round(Nn/Li)*Li;Nn-=Ol,Di-=Ol;let ro=En<760,tr=En/Yn,ui=(ro?Math.max(14.6/tr,10):Math.max(9.9,18.7/tr))/ie,Bl=ro?0:ui*tr*(.235+.08*Math.min(1,ie-1)),kl=ro?-ui*.005:ui*.015+2*ui*Ie/Yn;n.left=-ui*tr-Bl,n.right=ui*tr-Bl,n.top=ui+kl,n.bottom=-ui+kl,n.near=.1,n.far=255,n.updateProjectionMatrix();let zl=ro?3.7:2,Vl=9-13.6*Math.min(1,Ie/28),Hl=Math.atan2(Vl,27)+Nn,Gl=Math.hypot(Vl,27)*zl,Wl=ot.clamp(z+us,6,32);n.position.set(k.x+Math.sin(Hl)*Gl,k.y+Wl*zl,k.z+Math.cos(Hl)*Gl),n.lookAt(k),n.updateMatrixWorld(),qn.visible=!!we&&we!=="ops"&&!Le,qn.visible&&qn.position.set(to[we][0],.802,to[we][2]);let nr=(Ve==="failover"||Ve==="tour")&&(G?.label==="\u6545\u969C\u5207\u6362"&&oe>=nn.arrive||G?.label==="\u54CD\u5E94\u68C0\u67E5"||(G?.label==="\u5B89\u5168\u62E6\u622A"||G?.risk==="injection")&&Ve==="tour"||G?.zone==="ops"&&G?.chapter!=="overview")||qe.id==="routing"&&oe>=.47;Un.material=nr?_.red:Fi==="backup"?_.dim:_.cyan,cs.material=nr||Fi==="backup"?_.cyan:_.blueLight;let Xl=G?.zone==="route"||G?.label==="\u54CD\u5E94\u68C0\u67E5";Xe.main.visible=G?.provider?Fi==="main":Xl&&!nr,Xe.backup.visible=G?.provider?Fi==="backup":qe.id==="routing"&&oe>=.69||qe.id!=="routing"&&Xl&&nr&&(G?.label!=="\u6545\u969C\u5207\u6362"||oe>=nn.turn),ve.material=hi?G.label==="\u6743\u9650\u62D2\u7EDD"?_.red:_.amber:G?.label==="\u989D\u5EA6\u62D2\u7EDD"&&!G.policy?_.amber:G?.label==="\u6388\u6743\u4E0E\u989D\u5EA6"&&oe<.24?_.dim:_.cyan;let oo=Rt==="blocked",df=we!=="scan"||li||Rt==="returning"||qe.id==="security"&&oe>.15,ql=me?1:1-Math.exp(-J*11);Me.position.y=ot.lerp(Me.position.y,df?2.27:1.19,ql),We.visible=G?.risk==="injection",le.visible=oo||Rt==="incoming"&&oe>=.51,le.position.y=1.57+.84*ot.smoothstep(oe,.49,.66),le.rotation.x=.38,le.scale.setScalar(We.visible?1.44:1.35),Te.material=oo?_.red:li?_.cyan:Fn?_.amber:_.cyan,De.visible=qe.id==="security"||Fn&&(!li||Rt==="response-inspect")||we==="scan"&&!G,De.position.x=E.scan[0]-.23+.46*(me?.5:Se*.7%1),De.material.color.set(oo?"#ff9f69":"#81e9ce");let Yl=G?.provider?Fi==="backup":qe.id==="routing"?oe>=.69:nr&&(G?.label!=="\u6545\u969C\u5207\u6362"||oe>=nn.turn);ct.rotation.y=ot.lerp(ct.rotation.y,Yl?-.21:.19,ql),xn.material=Ni?_.amber:Yl?_.cyan:_.dim,io.material=Ni?me||Math.sin(Se*9)>.05?_.amber:_.dim:oo||hi?_.red:G?.risk==="response"&&oe>=jr.returning?_.blueLight:_.cyan;let pf=Mt(F,Fl>.005&&!me);return e.clear(),e.render(t,n),{calls:e.info.render.calls+1,reflectionCalls:pf,reflectionPixels:Ue.width*Ue.height,triangles:e.info.render.triangles+2,pixelRatio:w,stage:G?.label||null,progress:oe,shot:qe,cue:rf(qe,G,oe),safety:Rt,shutter:Me.position.y,attachment:le.visible,injection:We.visible&&le.visible,cutaway:pe.position.z,chapter:G?.chapter||"example",recap:!!Le,turnout:ct.rotation.y,zoom:ie,azimuth:Nn,elevation:Wl,viewTarget:Ke?[k.x,k.y,k.z]:null,cameraMoving:Fl>.001&&!me,branch:Xe.backup.visible?"backup":Xe.main.visible?"main":null}}return{renderer:e,resize:tt,draw:$t,project:wt,rotate(F,J=0){Di+=F,Ui=ot.clamp(Ui+J,-6,13)},reset(){Di=Math.round(Nn/Li)*Li,Ui=0}}}var cf='"PingFang SC","Microsoft YaHei",system-ui,sans-serif',ai=[["entry","\u7814\u53D1\u52A9\u624B","\u53D1\u8D77\u7814\u53D1\u4EFB\u52A1"],["agent","\u4F01\u4E1A\u667A\u80FD\u4F53","\u8C03\u7528\u83B7\u51C6\u7684\u8D44\u6E90"],["apps","\u4E1A\u52A1\u5E94\u7528","\u8FDE\u63A5\u73B0\u6709\u4E1A\u52A1\u7CFB\u7EDF"],["tools","MCP \u5DE5\u5177\u7AD9","\u6309\u6388\u6743\u8C03\u7528\u5916\u90E8\u5DE5\u5177"],["main","\u4E3B\u6A21\u578B\u6E20\u9053","\u4F18\u5148\u5904\u7406\u6A21\u578B\u8BF7\u6C42"],["backup","\u5907\u7528\u6A21\u578B\u6E20\u9053","\u4E3B\u6E20\u9053\u5F02\u5E38\u65F6\u63A5\u7EED\u670D\u52A1"]],x_=[["main","\u4F9B\u5E94\u5546 A \xB7 \u6A21\u578B A","\u5206\u6790\u63A5\u53E3\u62A5\u9519"],["backup","\u4F9B\u5E94\u5546 B \xB7 \u6A21\u578B B","\u6574\u7406\u6392\u67E5\u6E05\u5355"]],os=156,ac=46,as=4,oc=ac*2+4,no=12,v_=[2,1,0,3,4,5];function lf(){let i=document.createElement("canvas");i.width=as*os*2,i.height=oc*2;let e=i.getContext("2d");e.scale(2,2),e.textAlign="center",e.textBaseline="middle";for(let[d,[,g,v]]of[...ai,...x_].entries()){let p=d%as*os,f=Math.floor(d/as)*ac;e.beginPath(),e.roundRect(p+3,f+3,os-6,39,6),e.fillStyle="#effaf7",e.fill(),e.strokeStyle="#82b4b6",e.stroke(),e.fillStyle="#174452",e.font="740 13px "+cf,e.fillText(g,p+os/2,f+14),e.fillStyle="#326d67",e.font="550 11px "+cf,e.fillText(v,p+os/2,f+30)}e.fillStyle="#42897f",e.fillRect(0,oc-4,4,4);let t=new ii(i);t.colorSpace=Ut,t.generateMipmaps=!1,t.minFilter=Vt;let n=new Ft,s=new Nt(new Float32Array(ai.length*no*3),3).setUsage(Jr),r=new Nt(new Float32Array(ai.length*no*2),2).setUsage(Jr),o=new Nt(new Float32Array(ai.length*no*4),4).setUsage(Jr);n.setAttribute("position",s),n.setAttribute("uv",r),n.setAttribute("color",o);let a=new Pt(n,new dn({map:t,transparent:!0,depthTest:!1,depthWrite:!1,vertexColors:!0}));a.renderOrder=-1,a.frustumCulled=!1,a.visible=!1;let l=[[0,0],[0,1],[1,1],[0,0],[1,1],[1,0]],c=new Float32Array(ai.length),h=!1,u=[];function m(d,g,v,p,f,_,S){if(a.visible=!!d,!d){h=!1;return}let x=g<760?.78:1,R=os*x,b=ac*x;u.length=0;let I=0;for(let P of v_){let[T]=ai[P],M=d(T),A=ot.clamp(M.x-R/2,5,g-R-5),L=Math.max(p,M.y-b-12),X=Math.min(M.x,g-M.x,M.y-p,f-M.y),$=ot.smoothstep(X,0,18);if($<=0){c[P]=L;continue}let se=L;for(let j of u){let ee=1-ot.smoothstep(Math.abs(A-j.x),R*.76,R),he=ot.clamp(b-8-Math.abs(se-j.y),0,b-8);se+=he*ee}let te=h?ot.lerp(c[P],se,1-Math.exp(-Math.max(S,.012)*18)):se,xe=ot.clamp(te,p,f-b);c[P]=xe,u.push({x:A,y:xe});let ne=$;if(ne<=0)continue;let Ce=_&&P>=4?P+2:P,Ue=Ce%as,D=Math.floor(Ce/as),ce=I*no,K=ot.clamp(M.x,A+8,A+R-8),Ae=xe+42*x,Re=M.x-K,O=Math.max(0,M.y-Ae),W=Math.hypot(Re,O)||1;for(let[j,[ee,he]]of l.entries()){let Oe=ce+j,Be=K+Re*he+(ee-.5)*O/W,C=Ae+O*he-(ee-.5)*Re/W;s.setXYZ(Oe,2*Be/g-1,1-2*C/v,0),r.setXY(Oe,2/(as*os),2/oc),o.setXYZW(Oe,1,1,1,M.y>Ae?ne:0)}for(let[j,[ee,he]]of l.entries()){let Oe=ce+6+j;s.setXYZ(Oe,2*(A+ee*R)/g-1,1-2*(xe+he*b)/v,0),r.setXY(Oe,(Ue+ee)/as,1-(D+he)*ac/oc),o.setXYZW(Oe,1,1,1,ne)}I++}h=!0,n.setDrawRange(0,I*no),a.visible=I>0,s.needsUpdate=r.needsUpdate=o.needsUpdate=!0}return{mesh:a,update:m}}var Jt="#123c50",Gt="#345d6b",ln="#0f655f",ci="#904c19",hf='"PingFang SC","Microsoft YaHei",system-ui,sans-serif',uf='"Songti SC","Noto Serif CJK SC","SimSun",serif',y_="Baskervville,Baskerville,Georgia,serif";function ff(i,e){let t=document.createElement("canvas"),n=t.getContext("2d"),s=new ii(t);s.colorSpace=Ut,s.generateMipmaps=!1,s.minFilter=Vt;let r=new qi,o=new Vn(-1,1,1,-1,0,2),a=new Pt(new kn(2,2),new dn({map:s,transparent:!0,depthTest:!1,depthWrite:!1}));o.position.z=1;let l=lf();r.add(a,l.mesh);let c=null,h=1,u=1,m=1,d=[],g=[];function v(D,ce){h=D,u=ce,m=Math.min(devicePixelRatio||1,1.65,Math.sqrt((h<760?85e4:18e5)/(h*u))),t.width=Math.round(h*m),t.height=Math.round(u*m),n.setTransform(t.width/h,0,0,t.height/u,0,0)}function p(D,ce,K,Ae=14,Re=Jt,O=500){n.font=O+" "+Ae+"px "+hf,n.fillStyle=Re,n.textBaseline="top",n.fillText(D,ce,K)}function f(D,ce=14,K=500){return n.font=K+" "+ce+"px "+hf,n.measureText(D).width}function _(D,ce,K,Ae,Re,O,W=Gt,j=500){let ee="";for(let he of D)ee&&f(ee+he,Re,j)>Ae?(p(ee,ce,K,Re,W,j),K+=O,ee=he):ee+=he;return ee&&(p(ee,ce,K,Re,W,j),K+=O),K}function S(D,ce,K){let Ae=[],Re=D;for(;f(Re,K,650)>ce;){let O=[...Re],W=1;for(;W<O.length&&f(O.slice(0,W+1).join(""),K,650)<=ce;)W++;let j=O.slice(0,W).findLastIndex(he=>"\u3002\uFF1B\uFF0C\u3001".includes(he))+1,ee=j>=Math.floor(W*.58)?j:W;for(f(O.slice(ee).join(""),K,650)<ce*.28&&ee>5&&(ee=Math.max(1,Math.floor(ee*.72)));ee>1&&"\u3002\uFF1B\uFF0C\u3001\uFF01\uFF1F\uFF09".includes(O[ee]);)ee--;Ae.push(O.slice(0,ee).join("").trim()),Re=O.slice(ee).join("").trimStart()}return Re&&Ae.push(Re),Ae}function x(D,ce,K,Ae,Re,O,W){n.beginPath(),n.roundRect(D,ce,K,Ae,Re),n.fillStyle=O,n.fill(),W&&(n.strokeStyle=W,n.lineWidth=1,n.stroke())}function R(D,ce,K,Ae="#9bc4cc"){n.fillStyle=Ae,n.fillRect(D,ce,K,1)}function b(D,ce,K,Ae,Re,O,W,{selected:j=!1,primary:ee=!1,compact:he=!1,focus:Oe}={}){let Be=he?11:13,C=Math.max(8,Math.min(Be,Be*(Re-5)/f(ce,Be,650))),B=j?"#cae9e4":"#edf7f6";if(ee){let Y=n.createLinearGradient(K,Ae,K,Ae+O);Y.addColorStop(0,"#c8ede3"),Y.addColorStop(1,"#93cfbd"),B=Y}x(K,Ae,Re,O,he?5:8,B,Oe===D?"#a37531":j?"#4d9989":"#86b5bd"),p(ce,K+(Re-f(ce,C,650))/2,Ae+(O-C)/2-1,C,ee?"#173d42":Jt,650),d.push({id:D,label:ce,x:K,y:Ae,width:Re,height:O,action:W})}function I(D,ce,K,Ae){n.save(),n.textBaseline="alphabetic";let Re=ce+K*.83,O=Ae?Re:Re+K*1.04;n.font="600 "+K+"px "+uf,n.fillStyle="#103c4a",n.fillText("\u6D77\u4E0A",D,Re);let W=D+n.measureText("\u6D77\u4E0A").width+K*.14;n.font="italic 500 "+K*1.08+"px "+y_,n.fillStyle="#225769",n.fillText("AI",W,Re+K*.015);let j=Ae?W+n.measureText("AI").width+K*.23:D,ee=n.createLinearGradient(j,O-K,j+K*3.9,O);return ee.addColorStop(0,"#0c4c54"),ee.addColorStop(1,"#0e6969ed"),n.font="600 "+K+"px "+uf,n.fillStyle=ee,n.fillText("\u4E2D\u592E\u67A2\u7EBD",j,O),n.restore(),O}function P(D,ce,K,Ae,Re,O,W,{primary:j,hover:ee,focus:he}){let Oe=ee===D,Be=n.createLinearGradient(K,Ae,K+Re*.32,Ae+O);j?(Be.addColorStop(0,Oe?"#245e6af5":"#2c6876de"),Be.addColorStop(.53,Oe?"#114758f2":"#134c5cda"),Be.addColorStop(1,"#0c4353d9")):(Be.addColorStop(0,Oe?"#ffffffef":"#ffffffe0"),Be.addColorStop(.64,Oe?"#f3fffb9e":"#effcfb75"),Be.addColorStop(1,"#d6f7f538")),n.save(),n.shadowColor=j?"#12515c32":"#32667519",n.shadowBlur=Oe?12:8,n.shadowOffsetY=Oe?4:3,x(K,Ae,Re,O,O/2,Be),n.restore(),n.beginPath(),n.roundRect(K+.5,Ae+.5,Re-1,O-1,O/2-.5);let C=n.createLinearGradient(0,Ae,0,Ae+O);C.addColorStop(0,j?"#e7fff4c4":"#ffffffed"),C.addColorStop(1,j?"#bfece99a":"#497e8972"),n.strokeStyle=he===D?"#96631d":C,n.lineWidth=he===D?2:1,n.stroke();let B=j?"#f4ffff":"#153e4d",Y=13,Z=620,H=f(ce,Y,Z),ge=K+(Re-H-(j?25:23))/2;p(ce,ge+(j?0:23),Ae+(O-Y)/2-1,Y,B,Z);let ae=Ae+O/2,de=j?ge+H+12:ge;if(n.strokeStyle=B,n.lineWidth=1.15,n.beginPath(),j)n.moveTo(de,ae),n.lineTo(de+12,ae),n.moveTo(de+8,ae-4),n.lineTo(de+12,ae),n.lineTo(de+8,ae+4);else for(let Xe of[0,6])for(let ke of[-5,1])n.roundRect(de+Xe,ae+ke,4,4,.8);n.stroke(),d.push({id:D,label:ce,x:K,y:Ae,width:Re,height:O,action:W})}function T(D,ce,K,Ae,Re,O,W){let j=f(ce,11,600)+25,ee=Math.max(6,Math.min(h-j-6,K-j/2));n.beginPath(),n.arc(K,Ae+7,2.3,0,Math.PI*2),n.fillStyle=O?ci:ln,n.fill(),n.fillRect(K-.5,Ae-3,1,10),x(ee,Ae-24,j,21,5,O?"#f9eed7":"#f2fcf9f4",W===D?ci:"#77aab0"),p(ce,ee+11,Ae-19,11,O?ci:Jt,600),Re&&d.push({id:D,label:ce,x:ee,y:Ae-24,width:j,height:26,action:Re}),g.push({x:ee,y:Ae-24,width:j,height:26})}function M(D,ce,K,Ae){g.push({x:D,y:ce,width:K,height:Ae})}function A(D,ce,K,Ae,Re){let W=Ae?11:12,j=22,ee=4,he=[],Oe=g.slice(),Be=(B,Y,Z)=>Math.max(Y,Math.min(Z,B)),C=(B,Y,Z,H)=>B<H.x+H.width+ee&&B+Z+ee>H.x&&Y<H.y+H.height+ee&&Y+j+ee>H.y;for(let[B,[Y,Z]]of ai.entries()){let H=Re&&{main:"\u4F9B\u5E94\u5546 A \xB7 \u6A21\u578B A",backup:"\u4F9B\u5E94\u5546 B \xB7 \u6A21\u578B B"}[Y]||Z,ge=D(Y),ae=ge.x<8||ge.x>h-8||ge.y<ce||ge.y>K,de=H;ae&&(ge.x<8?de="\u2190 "+H:ge.x>h-8?de=H+" \u2192":de=H+(ge.y<ce?" \u2191":" \u2193"));let Xe=Math.ceil(f(de,W,650))+18,ke=h-8-Xe,E=Be(ge.x-Xe/2,8,ke),y=Be(ge.y-j-9,ce,K-j),V=[E,8,ke,Be(E-Xe-7,8,ke),Be(E+Xe+7,8,ke)],Q=null;for(let ze of V){let Ee=Math.abs(ze-E);for(let ue=0;ue<=K-ce&&!(Q&&Ee+ue*1.2>=Q.score);ue+=j+ee)for(let _e of ue?[y-ue,y+ue]:[y]){if(_e<ce||_e+j>K||g.some(ye=>C(ze,_e,Xe,ye)))continue;let fe=Ee+ue*1.2;(!Q||fe<Q.score)&&(Q={x:ze,y:_e,score:fe})}}if(!Q){let ze=B%3,Ee=Math.floor(B/3);Q={x:Be(h/3*(ze+.5)-Xe/2,8,ke),y:ce+Ee*(j+ee)}}let{x:pe,y:re}=Q;M(pe,re,Xe,j),he.push({x:pe,y:re,width:Xe,height:j,label:de,point:ge,offscreen:ae})}for(let{x:B,y:Y,width:Z,point:H,offscreen:ge}of he){let ae=Oe.some(de=>H.x>=de.x&&H.x<=de.x+de.width&&H.y>=de.y&&H.y<=de.y+de.height);ge||ae||(n.beginPath(),n.moveTo(Be(H.x,B+5,B+Z-5),H.y<Y?Y:Y+j),n.lineTo(H.x,H.y),n.strokeStyle="#367e7d",n.lineWidth=1,n.stroke(),n.beginPath(),n.arc(H.x,H.y,2,0,Math.PI*2),n.fillStyle=ln,n.fill())}for(let{x:B,y:Y,width:Z,label:H,offscreen:ge}of he)x(B,Y,Z,j,5,ge?"#e9f5f6":"#f3fbf8f7",ge?"#93b7bc":"#88b9b7"),p(H,B+9,Y+4,W,ge?Gt:Jt,650)}function L(D,ce){let K=[["\u591A\u6A21\u578B\u7EDF\u4E00\u63A5\u5165","\u4E00\u6B21\u63A5\u5165\u591A\u5BB6\u6A21\u578B"],["\u7CBE\u7EC6\u6743\u9650\u4E0E\u914D\u989D","\u8C01\u80FD\u7528\u3001\u80FD\u7528\u591A\u5C11"],["\u53CC\u5411\u5185\u5BB9\u5B89\u5168","\u8BF7\u6C42\u548C\u54CD\u5E94\u90FD\u8FC7\u68C0"],["\u5168\u94FE\u8DEF\u8FD0\u8425\u5BA1\u8BA1","\u7528\u91CF\u3001\u8D39\u7528\u548C\u5F02\u5E38\u53EF\u8FFD\u6EAF"]],Ae=ce?2:4,Re=(h-D*2)/Ae,O=ce?37:45,W=u-(ce?88:63);M(D,W,h-D*2,u-W);let j=n.createLinearGradient(0,W-20,0,u);j.addColorStop(0,"#e9f7f400"),j.addColorStop(.46,"#e9f7f4e8"),j.addColorStop(1,"#eef9f6fa"),n.fillStyle=j,n.fillRect(0,W-20,h,u-W+20),R(D,W,h-D*2,"#8cb8c5");for(let[ee,[he,Oe]]of K.entries()){let Be=D+ee%Ae*Re+7,C=W+8+Math.floor(ee/Ae)*O;p(he,Be,C,ce?11:13,ln,720),p(Oe,Be,C+(ce?15:20),ce?10:12,Jt,550)}}function X(D,ce,K,Ae,Re){let O=Math.min(h-ce*2,390),W=Ae||Re?13:15,j=Re?16:20,ee=D.revealed?S(D.evidence,O-32,W):[],he=S(D.status,O-32,W),Oe=D.blocked?D.verdict:"",Be=Oe?S(Oe,O-32,W):[],C=66+j*(ee.length+he.length+Be.length)+(D.recorded?j:0),B=K-C-12;M(ce,B,O,C),x(ce,B,O,C,10,"#f4fcfaf5","#82afb9"),p(D.title+" \xB7 \u573A\u666F\u793A\u610F",ce+15,B+11,11,ln,700),p("\u539F\u4EFB\u52A1 \xB7 \u5206\u6790\u63A5\u53E3\u62A5\u9519\u539F\u56E0",ce+15,B+31,W,Jt,700);let Y=B+52;for(let Z of ee)p(Z,ce+15,Y,W,D.flagged?ci:Gt,600),Y+=j;for(let Z of Be)p(Z,ce+15,Y,W,Gt,600),Y+=j;for(let Z of he)p(Z,ce+15,Y,W,D.blocked||D.flagged?ci:ln,700),Y+=j;D.recorded&&p("\u5BA1\u8BA1\u8BB0\u5F55 \xB7 \u5DF2\u4FDD\u5B58\u672C\u6B21\u963B\u65AD\u539F\u56E0",ce+15,Y,11,Gt,650)}function $(D,ce,K,Ae,Re){let O=D.provider,W=D.policy,j=Math.min(h-K*2,412),ee=h<760?13:15,he=!!W&&Re>=.4,Oe=D.label==="\u6743\u9650\u62D2\u7EDD"?"\u6743\u9650\u68C0\u67E5":"\u989D\u5EA6\u68C0\u67E5",Be=O?"\u7EDF\u4E00\u63A5\u5165 \xB7 "+D.label:"\u6743\u9650\u4E0E\u989D\u5EA6 \xB7 "+(he?D.label:Oe),B=(O?[["\u7814\u53D1\u52A9\u624B  \u2192  \u540C\u4E00\u7F51\u5173\u5165\u53E3",Jt],[O.vendor+" \xB7 "+O.model+" / "+O.task,ln],[ce,Gt]]:[["\u7814\u53D1\u90E8 \xB7 \u7814\u53D1\u52A9\u624B / \u5BC6\u94A5\u522B\u540D DEV-DEMO",Jt],[he?"\u6A21\u578B B \u6743\u9650\uFF1A"+W.permission+" / \u989D\u5EA6\uFF1A"+W.quota:"\u8BF7\u6C42\u6A21\u578B B\uFF0C\u6B63\u5728\u68C0\u67E5\u6388\u6743\u4E0E\u989D\u5EA6\u3002",he?ci:Gt],[he?ce:"",Gt],[he?"\u5DF2\u62D2\u7EDD \xB7 \u672A\u8C03\u7528\u4E0A\u6E38\u6A21\u578B":"",ci]]).flatMap(([H,ge])=>S(H,j-28,ee).map(ae=>[ae,ge])),Y=44+B.length*19,Z=Ae-Y-12;M(K,Z,j,Y),x(K,Z,j,Y,10,"#f4fcfaf5","#82afb9"),p(Be+" \xB7 \u793A\u610F",K+14,Z+11,11,ln,700);for(let[H,[ge,ae]]of B.entries())p(ge,K+14,Z+33+H*19,ee,ae,650)}function se(D,ce,K,Ae,Re){let O=Math.min(h-D*2,580),W=K?2:3,j=6/W,ee=6,he=31,Oe=(O-24-ee*(W-1))/W,Be=ce-54-j*(he+ee);M(D,Be,O,ce-Be-11),x(D,Be,O,ce-Be-11,10,"#f4fcfaf5","#82afb9"),p("\u516D\u9879\u7F51\u5173\u80FD\u529B",D+12,Be+12,14,Jt,720),p("\u9009\u62E9\u4E00\u9879\u56DE\u770B",D+O-90,Be+14,11,Gt,550);for(let[C,B]of co.entries())b("capability-"+B.id,B.label,D+12+C%W*(Oe+ee),Be+36+Math.floor(C/W)*(he+ee),Oe,he,()=>Re.reviewCapability(B.id),{compact:!0,focus:Ae})}function te(D,ce,K,Ae,Re,O){let W=h-2*D,j=K?4:6,ee=K?(W-j*2)/3:Math.min(142,(W-5*j)/6),he=ee*3+j*2,Oe=Re?.provider&&["main","backup"].includes(O?.id)?Re.provider.channel:O?.id==="primary"||O?.id==="timeout"?"main":O?.id==="resources"?"tools":Re?.zone==="entry"?"entry":O?.id;x(0,ce,h,K?57:34,0,"#dff2f2ee");for(let[Be,[C,B]]of ai.entries()){let Y=Ae&&{main:"\u4F9B\u5E94\u5546 A \xB7 \u6A21\u578B A",backup:"\u4F9B\u5E94\u5546 B \xB7 \u6A21\u578B B"}[C]||B,Z=Be%3,H=Be>=3,ge=D+(H&&!K?W-he:0)+Z*(ee+j),ae=ce+6+(H&&K?25:0),de=C===Oe;x(ge,ae,ee,22,5,de?"#cbe9dc":"#eef8f8",de?"#61a290":"#96c3cc");let Xe=Math.min(K?11:12,(ee-10)/f(Y,1,650));p(Y,ge+(ee-f(Y,Xe,650))/2,ae+Math.max(4,(22-Xe)/2-1),Xe,de?Jt:Gt,650)}}function xe(D,ce,K,Ae){let Re=h<350,O=K?Re?48:56:96,W=O*41.3/115,j=ce/2;e.naturalWidth?n.drawImage(e,D,j-W/2,O,W):p("\u5C71\u77F3\u7F51\u79D1",D,j-6,11,"#003285",750);let ee=K?Re?8:10:16,he=D+O+ee,Oe=K?25:31;n.fillStyle="#b5c3cb",n.fillRect(Math.round(he),Math.round(j-Oe/2),1,Oe);let Be=he+ee;nc(n,Be,j-(K?7:9),K?14:21,{color:"#123649",accent:"#123649",maxWidth:Ae-Be}),p("eToken Manager",Be,j+(K?3:7),K?9:11,"#47606f",620)}function ne({state:D,story:ce,step:K,shot:Ae,cue:Re,receipt:O,scenarios:W,projection:j,actions:ee,focus:he,hover:Oe,loaded:Be}){let C=h<760,B=C?17:Math.max(28,Math.min(52,h*.037)),Y=h-B*2;n.clearRect(0,0,h,u),d=[],g=[];let Z=!D.active,H=u<535,ge=D.comparison?69:51,ae=u-ge-(H?8:B*.55),de=C?57:H?58:75,Xe=D.active,ke=de+(Xe?C?57:34:0);x(0,0,h,de,0,"#f8fbfc"),R(0,de,h,"#c5d4db");let E=C&&!Z&&!D.picker?h-B-99:C?h-B:h/2-104;xe(B,de,C,E),Xe&&te(B,de,C,D.scenario==="providers",K,Ae);let y=D.finished&&D.scenario==="tour",V=D.finished&&D.scenario==="quick",Q=D.active&&K.chapter==="overview"&&!V,pe=D.active?Pl(K,D.progress):null,re=D.comparison?"\u5B89\u5168\u5BF9\u7167 \xB7 \u540C\u4E00\u673A\u4F4D":D.scenario==="quick"&&D.active?"20 \u79D2\u80FD\u529B\u901F\u89C8":y?"\u80FD\u529B\u56DE\u770B":D.active?K.chapter==="overview"?"\u80FD\u529B\u5168\u666F":"\u4E1A\u52A1\u573A\u666F":"\u4F01\u4E1A\u7EA7 Token \u8FD0\u8425\u5E73\u53F0";C||p(re,(h-f(re,13))/2,de/2-6,13,Gt,650),C&&D.active&&p(re,B,ke+12,11,ln,650),!Z&&!D.picker&&b("overview",D.revisit?D.scenario==="quick"?"\u8FD4\u56DE\u80FD\u529B\u5168\u666F":"\u8FD4\u56DE\u56DE\u6267":y?"\u8FD4\u56DE\u9996\u9875":"\u8FD4\u56DE\u5168\u666F",h-B-91,C?16:23,91,31,D.revisit?ee.backToReceipt:ee.reset,{compact:!0,focus:he});let ze=C?Y:Math.min(348,h*.285),Ee=C?72:H?74:Math.max(102,u*.162)+(Z&&u>=620?Math.min(34,u*.036):0);if(!C&&!Z&&K.zone==="ops"&&!D.playing&&!V){let ue=n.createLinearGradient(0,0,ze+B+65,0);ue.addColorStop(0,"#e0f2f4"),ue.addColorStop(.68,"#e1f3f4ed"),ue.addColorStop(1,"#e1f3f400"),n.fillStyle=ue,n.fillRect(0,ke+1,ze+B+65,ae-ke-1)}if(Z){if(C){let ve=Ee+186,Te=n.createLinearGradient(0,de,0,ve);Te.addColorStop(0,"#e8f7f3bb"),Te.addColorStop(.55,"#e8f7f368"),Te.addColorStop(1,"#e8f7f300"),n.fillStyle=Te,n.fillRect(0,de,h,ve-de)}else{let ve=B+ze*1.05,Te=Math.max(210,Math.min(325,u*.45));n.save(),n.beginPath(),n.rect(0,de+1,h,u-de-1),n.clip(),n.translate(ze*.26,Ee+125),n.scale(ve,Te);let De=n.createRadialGradient(0,0,0,0,0,1);De.addColorStop(0,"#e7f7f4fa"),De.addColorStop(.43,"#e7f7f4f2"),De.addColorStop(.69,"#dff6f2ad"),De.addColorStop(.86,"#dff6f242"),De.addColorStop(1,"#dff6f200"),n.fillStyle=De,n.fillRect(-1,-1,2,2),n.restore()}R(B,Ee+6,16,"#357c7c8f"),p("\u6A21\u578B\u63A5\u5165 \xB7 \u5B89\u5168\u6CBB\u7406 \xB7 Token \u8FD0\u8425",B+24,Ee,11,ln,560);let ue=C?Math.min(34,Y/9.7):Math.min(67,ze*.195,u*(H?.073:.087)),_e=I(B,Ee+(C?24:28),ue,C),fe=C?["\u8BA9\u4F01\u4E1A\u5E94\u7528\u4ECE\u540C\u4E00\u4E2A\u5165\u53E3\uFF0C\u8C03\u7528\u83B7\u51C6\u7684\u6A21\u578B\u548C\u5DE5\u5177\u3002"]:["\u4F01\u4E1A\u5E94\u7528\u7EDF\u4E00\u63A5\u5165\u6A21\u578B\u548C\u5DE5\u5177\u3002","\u6BCF\u6B21\u8C03\u7528\u7684\u6743\u9650\u3001\u98CE\u9669\u548C\u7528\u91CF\uFF0C\u7531\u540C\u4E00\u4E2A\u7F51\u5173\u7BA1\u7406\u3002"],ye=_e+(C||H?12:21);for(let ve of fe)ye=_(ve,B,ye,ze,C?12:14,C||H?18:23,"#274f60",440);let Fe=ye+(C||H?9:19),Pe=C||H?44:48,be=C?142:153,$e=C?114:126,U=10;M(B,Ee,C?Y:Math.max(ze,be+$e+U),Fe+Pe+25-Ee),P("start","\u5F00\u59CB\u4E3B\u5BFC\u89C8",B,Fe,be,Pe,ee.start,{primary:!0,hover:Oe,focus:he}),P("choose","\u9009\u770B\u573A\u666F",B+be+U,Fe,$e,Pe,ee.choose,{hover:Oe,focus:he}),p(C?"\u62D6\u52A8\u67E5\u770B\u67A2\u7EBD\u5404\u9762":"\u62D6\u52A8 360\xB0 \u73AF\u7ED5 \xB7 Esc \u56DE\u6B63",B+1,Fe+Pe+12,11,Gt,530)}else if(K.zone==="ops"&&K.chapter!=="overview"&&!D.playing){let ue=C?Y:Math.min(414,h*.32),_e=C?ke+34:Math.max(ke+12,Math.min(Ee,u*.14)),fe=H?17:25,ye=y&&D.receiptOpen?Il.find(De=>De.id===D.record):null,Fe=y&&(!ye||ye.id===Ii.id)||D.scenario==="failover",Pe=D.receiptOpen&&Fe&&D.billingOpen,be=Pe?Ii.rows:ye?[["\u8BF7\u6C42\u7F16\u53F7",ye.id],...ye.fields]:O.rows,$e=y&&D.receiptOpen?36:0,U=(H?100:118)+(D.receiptOpen?fe*be.length+$e:0)+(Pe?42:0);M(B,_e,ue,U),x(B,_e,ue,U,10,"#f1faf9fa","#8bb7bf"),p("\u5BA1\u8BA1\u56DE\u6267 \xB7 \u793A\u610F\u6570\u636E",B+13,_e+13,11,ln,700),_(Pe?"\u8D26\u5355\u5BF9\u7167 \xB7 "+Ii.id:ye?ye.result:O.summary,B+13,_e+32,ue-26,C?17:19,24,Jt,740);let ve=_e+(H?61:67),Te=Fe&&D.receiptOpen?Math.min(105,(ue-40)/3):105;if(b("receipt",D.receiptOpen?"\u6536\u8D77\u660E\u7EC6 \u2191":"\u5C55\u5F00\u660E\u7EC6 \u2193",B+13,ve,Te,28,ee.receipt,{compact:!0,focus:he}),D.receiptOpen){if(D.finished&&(!y||ye)&&!["providers","policy"].includes(D.scenario)&&b("replay-record","\u56DE\u770B\u73B0\u573A \u2192",B+20+Te,ve,Te,28,ee.replayRecord,{compact:!0,focus:he}),Fe){let Me=y&&!ye?B+20+Te:B+27+Te*2;b("billing",Pe?"\u8FD4\u56DE\u8C03\u7528":"\u8D26\u5355\u5BF9\u7167",Me,ve,Te,28,ee.billing,{compact:!0,selected:Pe,focus:he})}let De=_e+(H?96:108);if(y){let Me=[{id:null,name:"\u6C47\u603B"},...Il],le=(ue-35)/Me.length;for(let[We,et]of Me.entries())b("record-"+(et.id||"all"),et.name,B+13+We*(le+3),De,le,27,()=>ee.record(et.id),{compact:!0,selected:D.record===et.id,focus:he});De+=$e}for(let[Me,[le,We]]of be.entries()){let et=De+Me*fe;R(B+13,et,ue-26),p(le,B+13,et+4,H?9:11,Gt);let xt=Pe?108:77,ct=f(We,11,650)>ue-xt-14?9:11;p(We,B+xt,et+4,ct,Jt,650)}Pe&&_(Ii.explanation,B+13,De+fe*be.length+4,ue-26,10,15,Gt,600)}}else if(V)se(B,ae,C,he,ee);else if(K.provider||K.policy)$(K,Re,B,ae,D.progress);else if(pe)X(pe,B,ae,C,H);else if(Re||Q){if(Q){let ue=String(K.number).padStart(2,"0")+" / 06   "+K.label,_e=C?15:17,fe=ke+(C?29:17);M(B,fe,f(ue,_e,700)+26,34),x(B,fe,f(ue,_e,700)+26,34,7,"#e8f6f5f4","#80b2bc"),p(ue,B+13,fe+8,_e,ln,700)}if(K.id==="operations"&&!K.brief){let ue=Math.min(333,Y),_e=B,fe=ke+72,ye=D.progress>=.54;if(M(_e,fe,ue,ye?119:133),x(_e,fe,ue,ye?119:133,9,"#edf8f8f7","#80b2bc"),p(ye?"\u7814\u53D1\u90E8 / DEMO-042 \xB7 \u8C03\u7528\u793A\u610F":"\u54EA\u4E2A\u90E8\u95E8\u7528\u91CF\u6700\u9AD8\uFF1F \xB7 \u793A\u610F",_e+13,fe+12,12,ln,700),ye)for(let[Fe,[Pe,be]]of[...Ii.channels,["\u7528\u91CF\u4E0E\u8D39\u7528","1,240 Token  /  \xA50.012"]].entries()){let $e=fe+38+Fe*22;p(Pe,_e+13,$e,11,Gt),p(be,_e+87,$e,11,Jt,650)}else for(let[Fe,Pe]of tf.entries()){let be=fe+41+Fe*25;p(Pe.name,_e+13,be,11,Gt),x(_e+62,be+4,(ue-171)*Pe.ratio*Math.min(1,D.progress*4),4,2,Fe===0?ln:"#7098a9"),p(Pe.tokens+"  /  "+Pe.cost,_e+ue-102,be,11,Jt,650)}}if(Re){let ue=C||H?15:19,_e=C||H?21:27,fe=Math.min(Y,610),ye=Math.min(fe-28,f(Re,ue,650)+2),Fe=S(Re,ye,ue),Pe=Fe.length*_e+20,be=ae-Pe-14,$e=Ae?.id==="timeout"||Ae?.id==="scan"&&K.tone==="risk"?ci:Jt;M(B,be,ye+28,Pe),x(B,be,ye+28,Pe,8,"#f1faf9f8","#8ab9c1");for(let[U,ve]of Fe.entries())p(ve,B+14,be+10+U*_e,ue,$e,650)}}if(Be){if(y&&!D.receiptOpen&&!D.picker){let ue=[["recapEntry","\u5165\u53E3","entry"],["recapPolicy","\u6CBB\u7406\u901A\u9053","policy"],["recapOps","\u8FD0\u8425\u5C42","ops"]];for(let[_e,fe,ye]of ue){let Fe=j(_e);Fe.y<ke+48||Fe.y>ae-12||T(_e,fe,Fe.x,Fe.y,()=>ee.revisit(ye),!0,he)}}if(Q&&!D.picker){let ue=j("module-"+K.zone);ue.x>8&&ue.x<h-8&&ue.y>ke+88&&ue.y<ae-68&&T("module",K.label,ue.x,ue.y,null,!0,he)}if(Q&&!K.brief&&K.id==="policy"&&D.progress>=.49){let ue=j("policy-denied");T("denied","\u672A\u83B7\u5DE5\u5177\u6388\u6743",ue.x,ue.y,null,!0,he)}if(Q&&!K.brief&&K.id==="resources"&&D.progress>=.55){let ue=j("skill");T("skill",D.progress>.83?"\u5BA1\u6838\u901A\u8FC7 \xB7 \u5DF2\u53D1\u5E03":"Skill \u5BA1\u6838\u4E2D",ue.x,ue.y,null,!0,he)}}else p("\u6B64\u6D4F\u89C8\u5668\u65E0\u6CD5\u542F\u52A8 WebGL 2\uFF0C\u53EF\u7EE7\u7EED\u9605\u8BFB\u4E0B\u65B9\u6F14\u793A\u3002",B,Math.max(ke+220,ae-25),12,ci);if(Z&&!D.picker&&L(B,C),D.picker){d=[],x(0,ke,h,u-ke,0,"#15475c60");let ue=Math.min(520,Y),_e=(h-ue)/2,fe=[["quick","20 \u79D2\u80FD\u529B\u901F\u89C8"],["comparison","\u5B89\u5168\u5BF9\u7167"],...Object.entries(W)],ye=H?40:51,Fe=H?34:43,Pe=60+Math.ceil(fe.length/2)*ye,be=Math.max(ke+8,(u-Pe)/2);M(_e,be,ue,Pe),x(_e,be,ue,Pe,12,"#f2faf8","#82afb9"),p("\u9009\u770B\u573A\u666F",_e+17,be+18,20,Jt,750),b("close-picker","\u5173\u95ED",_e+ue-64,be+14,48,30,ee.closePicker,{compact:!0,focus:he});let $e=8,U=(ue-34-$e)/2;for(let[ve,[Te,De]]of fe.entries())b("scenario-"+Te,De,_e+17+ve%2*(U+$e),be+54+Math.floor(ve/2)*ye,U,Fe,()=>ee.scenario(Te),{focus:he,primary:Te==="quick"})}else if(!Z){x(B,ae,Y,ge,12,"#edf8f7f5","#95bfc6");let ue=C?10:17,_e=B+ue,fe=Y-ue*2;if(D.comparison){p("\u540C\u4E00\u4E2A\u68C0\u67E5\u8231 \xB7 \u5207\u6362\u8BF7\u6C42\u67E5\u770B\u539F\u56E0",_e,ae+9,11,Gt,600),b("play",D.finished?"\u91CD\u64AD":D.playing?"\u6682\u505C":"\u7EE7\u7EED",_e+fe-48,ae+4,48,21,ee.play,{compact:!0,focus:he});let ye=(fe-18)/4;for(let[Fe,[Pe,be]]of Object.entries(lc).entries())b("compare-"+Pe,be,_e+Fe*(ye+6),ae+29,ye,30,()=>ee.compare(Pe),{selected:D.comparison===Pe,compact:!0,focus:he})}else if(D.finished)b("play","\u91CD\u64AD",_e,ae+9,62,31,ee.replay,{compact:!0,focus:he}),b("choose","\u9009\u770B\u573A\u666F",_e+71,ae+9,88,31,ee.choose,{compact:!0,focus:he}),y&&!D.receiptOpen&&p("\u70B9\u51FB\u573A\u666F\u6807\u6CE8\u56DE\u770B",_e+170,ae+19,11,Gt,550);else{b("play",D.playing?"\u6682\u505C":"\u7EE7\u7EED",_e,ae+9,62,31,ee.play,{compact:!0,focus:he});let ye=_e+76,Fe=fe-76,Pe=ce.reduce(($e,U)=>$e+U.duration,0),be=0;for(let[$e,U]of ce.entries()){let ve=ye+Fe*be/Pe,Te=Fe*U.duration/Pe-4;R(ve,ae+24,Te,"#a9cbd2");let De=$e<D.index?1:$e===D.index?D.progress:0;De>0&&R(ve,ae+24,Te*De,ln),be+=U.duration}}}Be&&Z&&A(j,ke+6,u-8,C,!1),c=Be&&D.active&&!D.picker?{projection:j,top:ke+(C?22:5),bottom:ae-8,providers:D.scenario==="providers"}:null,s.needsUpdate=!0}function Ce(D){l.update(c?.projection,h,u,c?.top,c?.bottom,c?.providers,D),i.clearDepth(),i.render(r,o)}function Ue(D,ce){return[...d].reverse().find(K=>D>=K.x&&D<=K.x+K.width&&ce>=K.y&&ce<=K.y+K.height)}return{resize:v,render:ne,draw:Ce,hit:Ue,hasStationPlates:()=>l.mesh.visible,buttons:()=>d}}var Lt=document.getElementById("harbor"),Ll=matchMedia("(prefers-reduced-motion: reduce)"),Dl=new Image,wn,Wn;try{wn=af(Lt),Wn=ff(wn.renderer,Dl)}catch(i){let e=document.createElement("p");e.style.padding="24px",e.textContent="\u6B64\u6D4F\u89C8\u5668\u65E0\u6CD5\u542F\u52A8 WebGL 2\u3002\u8BF7\u542F\u7528\u56FE\u5F62\u52A0\u901F\uFF0C\u6216\u7528\u5176\u4ED6\u652F\u6301 WebGL 2 \u7684\u6D4F\u89C8\u5668\u6253\u5F00\u3002",Lt.replaceWith(e),console.warn(i)}wn&&Wn&&M_();function M_(){let i={scenario:"tour",index:0,progress:0,active:!1,playing:!1,finished:!1,receiptOpen:!1,billingOpen:!1,record:null,picker:!1,revisit:null,comparison:null,zone:null},e=location.hostname==="127.0.0.1"&&window.harborFixedCapture===!0,t=fi(i.scenario),n=0,s=0,r=0,o=!0,a=0,l=null,c=null,h=null,u,m=0,d=null,g=0,v=[],p={reset(){Object.assign(i,{index:0,progress:0,active:!1,playing:!1,finished:!1,receiptOpen:!1,billingOpen:!1,record:null,picker:!1,revisit:null,comparison:null,zone:null}),wn.reset(),a=.6,I()},start(){i.scenario="tour",t=fi("tour"),wn.reset(),S(0,!0)},choose(){i.picker=!0,I()},closePicker(){i.picker=!1,I()},replay(){i.comparison?p.compare(i.comparison):_(i.scenario)},receipt(){i.receiptOpen=!i.receiptOpen,i.billingOpen=!1,I()},record(A){i.record=A,i.billingOpen=!1,I()},billing(){i.scenario==="tour"&&!i.record&&(i.record=Ii.id),i.billingOpen=!i.billingOpen,I()},compare(A){let L=i.scenario!=="comparison"||!i.active;i.scenario="comparison",i.comparison=A,t=[jl(A)],L&&wn.reset(),S(0,!0)},revisit(A){let L={entry:[0,0],policy:[1,4],ops:[5,5]}[A];!L||i.scenario!=="tour"||!i.finished||f(L[0],L[1])},reviewCapability(A){if(i.scenario!=="quick"||!i.finished)return;let L=t.findIndex(X=>X.id===A);L>=0&&f(L,L)},replayRecord(){let A=Ql(t,i.scenario,i.record);i.finished&&i.receiptOpen&&A>=0&&f(A,A)},backToReceipt(){if(!i.revisit)return;let{receiptOpen:A,billingOpen:L,record:X}=i.revisit;i.revisit=null,S(t.length-1,!1),Object.assign(i,{finished:!0,receiptOpen:A,billingOpen:L,record:X}),I()},play(){if(i.playing){i.playing=!1,I();return}if(i.finished){p.replay();return}if(i.progress>=1){S(i.index,!0);return}i.playing=!0,I()},scenario:_};function f(A,L){i.revisit={until:L,receiptOpen:i.receiptOpen,billingOpen:i.billingOpen,record:i.record},S(A,!0)}function _(A){if(A==="comparison"){p.compare("normal");return}i.comparison=null,i.revisit=null,i.scenario=A,wn.reset(),t=fi(A);let L={failover:"\u6545\u969C\u5207\u6362",sensitive:"\u5B89\u5168\u62E6\u622A",injection:"\u6CE8\u5165\u62E6\u622A",quota:"\u989D\u5EA6\u62D2\u7EDD"}[A];S(Math.max(0,t.findIndex(X=>X.label===L)),!0)}function S(A,L){Object.assign(i,{index:A,playing:L,progress:L?0:1,active:!0,finished:!1,receiptOpen:!1,billingOpen:!1,record:null,picker:!1,zone:t[A].zone}),I()}function x(){!n&&!document.hidden&&(n=requestAnimationFrame(T))}function R(){g&&(clearTimeout(g),g=0)}function b(){!g&&!document.hidden&&(g=setTimeout(()=>{g=0,x()},62))}function I(){o=!0,R(),x()}Dl.addEventListener("load",I,{once:!0}),Dl.src="./hillstone-logo.svg";function P(){let A=Lt.clientWidth,L=Lt.clientHeight;!A||!L||(wn.resize(A,L),Wn.resize(A,L),I())}function T(A){if(n=0,document.hidden)return;let L=s?(A-s)/1e3:0,X=e||i.playing||a>0||u?.cameraMoving?1/30:1/18;if(!o&&s&&L<X*.94){x();return}s=A;let $=Math.min(.1,L),se=Ll.matches;se||(r+=$),i.playing&&(i.progress=Math.min(1,i.progress+$/t[i.index].duration),i.progress>=1&&(i.revisit&&i.index>=i.revisit.until?p.backToReceipt():i.index+1<t.length?S(i.index+1,!0):(i.finished=!0,i.playing=!1,a=.75,o=!0)));let te=t[i.index],xe=i.finished&&["tour","quick"].includes(i.scenario);u=wn.draw({now:A,time:r,dt:$,step:i.active?te:null,progress:i.progress,scenario:i.scenario,zone:i.zone,reduced:se,recap:xe,comparison:!!i.comparison});let ne=i.active?u.shot:null,Ce=ne?ne.id+u.cue:null;(o||Ce!==d||(a>0||u.cameraMoving||i.playing)&&A-m>=(Lt.clientWidth<760?160:125))&&(Wn.render({state:i,story:t,step:te,shot:ne,cue:u.cue,receipt:eh(i.scenario),scenarios:Zl,projection:wn.project,actions:p,focus:l,hover:c,loaded:!0}),o=!1,m=A,d=Ce,v=Wn.buttons().map(({id:Ue,x:D,y:ce,width:K,height:Ae})=>({id:Ue,x:D,y:ce,width:K,height:Ae}))),u.receiptOpen=i.receiptOpen,u.billingOpen=i.billingOpen,u.record=i.record,u.revisit=!!i.revisit,u.finished=i.finished,u.controls=v,u.comparison=i.comparison,u.scenario=i.scenario,Wn.draw($),Wn.hasStationPlates()&&u.calls++,a=Math.max(0,a-$),e||i.playing||a>0||u.cameraMoving?x():!se&&!i.finished&&!i.picker&&!i.active?b():s=0}function M(A){let L=!i.active&&!i.picker&&(A==="start"||A==="choose")?A:null;L!==c&&(c=L,I())}Lt.addEventListener("pointerleave",()=>M(null)),Lt.addEventListener("pointerdown",A=>{!A.isPrimary||A.button!==0||(Lt.focus({preventScroll:!0}),h={id:A.pointerId,x:A.clientX,y:A.clientY,drag:!1},Lt.setPointerCapture(A.pointerId))}),Lt.addEventListener("pointermove",A=>{if(!h){let $=Wn.hit(A.clientX,A.clientY);Lt.style.cursor=$?"pointer":"grab",A.pointerType==="mouse"&&M($?.id);return}if(h.id!==A.pointerId)return;let L=A.clientX-h.x,X=A.clientY-h.y;!h.drag&&Math.hypot(L,X)<7||(h.drag=!0,M(null),h.x=A.clientX,h.y=A.clientY,!i.comparison&&!i.picker&&(wn.rotate(-L*2*Math.PI/Math.max(560,Lt.clientWidth),-X*.057),a=Ll.matches?0:.48,I(),Lt.style.cursor="grabbing"))}),Lt.addEventListener("pointerup",A=>{if(h?.id===A.pointerId){if(!h.drag){let L=Wn.hit(A.clientX,A.clientY);l=null,M(null),L?.action()}h=null,Lt.style.cursor="grab"}}),Lt.addEventListener("pointercancel",()=>{h=null,Lt.style.cursor="grab"}),Lt.addEventListener("keydown",A=>{let L=Wn.buttons();if(A.key==="Escape")A.preventDefault(),l=null,i.picker?p.closePicker():i.revisit?p.backToReceipt():p.reset();else if(A.key==="Tab"&&L.length){let X=L.findIndex(se=>se.id===l);if(X===L.length-1&&!A.shiftKey||X===0&&A.shiftKey){l=null,I();return}A.preventDefault();let $=X<0?A.shiftKey?L.length-1:0:X+(A.shiftKey?-1:1);l=L[$].id,I(),Lt.setAttribute("aria-label",L[$].label+"\u3002\u6309 Enter \u64CD\u4F5C\u3002")}else if(A.key==="Enter"||A.key===" "){let X=L.find($=>$.id===l);X&&(A.preventDefault(),X.action())}else if(A.key==="ArrowLeft"||A.key==="ArrowRight"){if(i.comparison||i.picker)return;A.preventDefault(),wn.rotate(A.key==="ArrowRight"?-.12:.12),a=.48,I()}}),Lt.addEventListener("blur",()=>{l=null,I()}),new ResizeObserver(P).observe(Lt),document.addEventListener("visibilitychange",()=>{s=0,R(),document.hidden&&n?(cancelAnimationFrame(n),n=0):I()}),Ll.addEventListener("change",I),P(),location.hostname==="127.0.0.1"&&Object.defineProperty(window,"harborMetrics",{get:()=>u})}
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
