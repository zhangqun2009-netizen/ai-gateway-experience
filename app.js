var iu=[{id:"entry",title:"\u7EDF\u4E00\u63A5\u5165",body:"\u7814\u53D1\u5DE5\u5177\u3001\u4E1A\u52A1\u7CFB\u7EDF\u4E0E\u4F01\u4E1A\u667A\u80FD\u4F53\u901A\u8FC7\u7EDF\u4E00\u5165\u53E3\u8C03\u7528\u83B7\u51C6\u7684\u6A21\u578B\u8D44\u6E90\u3002"},{id:"gate",title:"\u8EAB\u4EFD\u6388\u6743\u4E0E\u989D\u5EA6",body:"\u6839\u636E\u7528\u6237\u6216\u667A\u80FD\u4F53\u7684\u8EAB\u4EFD\uFF0C\u6838\u5BF9\u6A21\u578B\u3001\u6E20\u9053\u548C\u5DE5\u5177\u6388\u6743\uFF0C\u5E76\u6309\u5DF2\u914D\u7F6E\u7684\u989D\u5EA6\u7B56\u7565\u6267\u884C\u3002"},{id:"scan",title:"AI \u5B89\u5168\u9632\u62A4",body:"\u8BF7\u6C42\u8F6C\u53D1\u524D\u548C\u54CD\u5E94\u8FD4\u56DE\u65F6\u5206\u522B\u68C0\u67E5\u5185\u5BB9\u3002\u53EF\u6839\u636E\u89C4\u5219\u8BB0\u5F55\u3001\u544A\u8B66\u6216\u963B\u65AD\u3002"},{id:"route",title:"\u6A21\u578B\u8DEF\u7531\u4E0E\u5BB9\u707E",body:"\u901A\u8FC7\u4F18\u5148\u7EA7\u3001\u6743\u91CD\u4E0E\u5065\u5EB7\u72B6\u6001\u9009\u62E9\u6E20\u9053\u3002\u4E3B\u6E20\u9053\u5F02\u5E38\u65F6\uFF0C\u53EF\u6309\u914D\u7F6E\u91CD\u8BD5\u6216\u5207\u6362\u3002"},{id:"tools",title:"MCP \u4E0E Skill \u7BA1\u7406",body:"MCP \u7F51\u5173\u7BA1\u7406\u5DE5\u5177\u63A5\u5165\u4E0E\u8C03\u7528\u6388\u6743\u3002Skill \u5E73\u53F0\u63D0\u4F9B\u72EC\u7ACB\u7684\u5BA1\u6838\u3001\u53D1\u5E03\u548C\u7248\u672C\u7BA1\u7406\u3002"},{id:"ops",title:"Token \u8FD0\u8425\u4E0E\u5BA1\u8BA1",body:"\u67E5\u8BE2\u90E8\u95E8\u3001\u6A21\u578B\u3001\u6E20\u9053\u3001Token \u7528\u91CF\u4E0E\u8D39\u7528\uFF0C\u7ED3\u5408\u65E5\u5FD7\u5B9A\u4F4D\u5F02\u5E38\uFF0C\u5E76\u4E3A\u5E2D\u4F4D\u914D\u7F6E\u4E0E\u91C7\u8D2D\u5BF9\u8D26\u63D0\u4F9B\u4F9D\u636E\u3002"}],ql={providers:"\u4E24\u5BB6\u6A21\u578B\u7EDF\u4E00\u63A5\u5165",policy:"\u6743\u9650\u4E0E\u989D\u5EA6\u5BF9\u7167",response:"\u6A21\u578B\u54CD\u5E94\u62E6\u622A",normal:"\u6B63\u5E38\u8C03\u7528",failover:"\u4E3B\u6E20\u9053\u6545\u969C",sensitive:"\u654F\u611F\u4FE1\u606F\u62E6\u622A",injection:"\u63D0\u793A\u8BCD\u6CE8\u5165\u9632\u62A4"},Ut=(i,e,t,n,s,r,o=3,a="ok")=>({label:i,zone:e,title:t,copy:n,facts:s,track:r,duration:o,tone:a}),_r=[["access","entry","\u7814\u53D1\u52A9\u624B\u3001\u4E1A\u52A1\u5E94\u7528\u548C\u4F01\u4E1A\u667A\u80FD\u4F53\uFF0C\u4ECE\u540C\u4E00\u5165\u53E3\u63A5\u5165\u4F01\u4E1A AI \u8D44\u6E90\u3002",5],["policy","gate","\u7F51\u5173\u6309\u7528\u6237\u6216\u667A\u80FD\u4F53\u8EAB\u4EFD\u6821\u9A8C\u6A21\u578B\u548C\u5DE5\u5177\u6743\u9650\uFF0C\u5E76\u6267\u884C\u90E8\u95E8\u4E0E\u7528\u6237\u7684\u7528\u91CF\u989D\u5EA6\u3002",5.2],["security","scan","\u8BF7\u6C42\u548C\u54CD\u5E94\u53CC\u5411\u68C0\u67E5\u3002\u63D0\u793A\u8BCD\u6CE8\u5165\u3001\u654F\u611F\u4FE1\u606F\u7B49\u98CE\u9669\u6309\u4F01\u4E1A\u7B56\u7565\u8BB0\u5F55\u3001\u544A\u8B66\u6216\u963B\u65AD\u3002",5.6],["routing","route","\u7EDF\u4E00\u7BA1\u7406\u5DF2\u63A5\u5165\u7684\u6A21\u578B\u548C\u6E20\u9053\u3002\u6309\u4F18\u5148\u7EA7\u3001\u6743\u91CD\u548C\u5065\u5EB7\u72B6\u6001\u5206\u6D41\uFF0C\u5F02\u5E38\u65F6\u91CD\u8BD5\u6216\u5207\u6362\u3002",5.4],["resources","tools","MCP \u5DE5\u5177\u6309\u6743\u9650\u5F00\u653E\u8C03\u7528\uFF1BSkill \u5728\u7F51\u5173\u5185\u5355\u72EC\u5BA1\u6838\u3001\u53D1\u5E03\u5E76\u7BA1\u7406\u7248\u672C\u3002",5.4],["operations","ops","\u8FD0\u8425\u5BA4\u6C47\u603B\u5404\u90E8\u95E8\u7684 Token\u3001\u8D39\u7528\u548C\u6E20\u9053\u7528\u91CF\uFF0C\u5E76\u53EF\u56DE\u67E5\u6BCF\u6B21\u8C03\u7528\u7684\u5904\u7F6E\u7ED3\u679C\u3002",5.4]].map(([i,e,t,n],s)=>({id:i,chapter:"overview",zone:e,label:iu[s].title,number:s+1,copy:t,duration:n,track:[],tone:"ok"})),Yl={...Ut("\u54CD\u5E94\u62E6\u622A","scan","\u6A21\u578B\u54CD\u5E94\u547D\u4E2D\u89C4\u5219","\u8BF7\u6C42\u5DF2\u5230\u8FBE\u6A21\u578B\uFF0C\u8FD4\u56DE\u5185\u5BB9\u547D\u4E2D\u54CD\u5E94\u4FA7\u793A\u4F8B\u89C4\u5219\u3002",{},["scan","route","fork","main"],12,"risk"),risk:"response",returnTrack:["main","fork","route","scan"]},Zl=[{vendor:"\u4F9B\u5E94\u5546 A",model:"\u6A21\u578B A",channel:"main",task:"\u5206\u6790\u63A5\u53E3\u62A5\u9519"},{vendor:"\u4F9B\u5E94\u5546 B",model:"\u6A21\u578B B",channel:"backup",task:"\u6574\u7406\u6392\u67E5\u6E05\u5355"}],Jl=[{label:"\u6743\u9650\u62D2\u7EDD",permission:"\u672A\u6388\u6743",quota:"1,200 Token",reason:"\u8EAB\u4EFD\u6709\u6548\uFF0C\u4F46\u672A\u83B7\u6A21\u578B B \u7684\u8C03\u7528\u6743\u9650\u3002"},{label:"\u989D\u5EA6\u62D2\u7EDD",permission:"\u5DF2\u6388\u6743",quota:"0 Token",reason:"\u6A21\u578B B \u5DF2\u83B7\u6388\u6743\uFF0C\u4F46\u90E8\u95E8 Token \u989D\u5EA6\u5DF2\u7528\u5C3D\u3002"}],xa={normal:"\u6B63\u5E38\u8BF7\u6C42",sensitive:"\u654F\u611F\u4FE1\u606F",injection:"\u63D0\u793A\u8BCD\u6CE8\u5165",response:"\u54CD\u5E94\u62E6\u622A"};function $l(i){let e=Object.hasOwn(xa,i)?i:"normal";if(e==="response")return{...Yl,comparison:e};let t=$n(e)[2];return e==="normal"?{...t,comparison:e,track:["scan","route","fork","main"],duration:7}:{...t,comparison:e}}function Kl(i,e,t){let n=e==="tour"?{"DEMO-042":"\u6545\u969C\u5207\u6362","DEMO-043":"\u5B89\u5168\u62E6\u622A","DEMO-044":"\u6CE8\u5165\u62E6\u622A"}[t]:{normal:"\u8BF7\u6C42\u68C0\u67E5",failover:"\u6545\u969C\u5207\u6362",sensitive:"\u5B89\u5168\u62E6\u622A",injection:"\u6CE8\u5165\u62E6\u622A",quota:"\u989D\u5EA6\u62D2\u7EDD",response:"\u54CD\u5E94\u62E6\u622A"}[e];return n?i.findIndex(s=>s.label===n):-1}var su=["\u4E09\u4E2A\u5E94\u7528\uFF0C\u5171\u7528\u4E00\u4E2A\u5165\u53E3\u3002","\u6309\u8EAB\u4EFD\u6388\u6743\uFF0C\u6309\u989D\u5EA6\u8C03\u7528\u3002","\u53D1\u51FA\u7684\u8BF7\u6C42\u548C\u8FD4\u56DE\u7684\u54CD\u5E94\u90FD\u8981\u8FC7\u68C0\u3002","\u4E3B\u6E20\u9053\u5F02\u5E38\u65F6\uFF0C\u5207\u6362\u5907\u7528\u6E20\u9053\u3002","MCP \u6309\u6743\u9650\u8C03\u7528\uFF0CSkill \u7ECF\u5BA1\u6838\u53D1\u5E03\u3002","\u8D39\u7528\u5F52\u5230\u90E8\u95E8\uFF0C\u8C03\u7528\u53EF\u4EE5\u9010\u7B14\u8FFD\u6EAF\u3002"];function $n(i){if(i==="quick")return _r.map((l,c)=>({...l,brief:!0,copy:su[c],duration:c===0||c===5?3.6:3.2}));if(i==="providers")return[...Zl.map((c,h)=>{let d=["entry","gate","scan","route","fork",c.channel];return{...Ut("\u8C03\u7528\u6A21\u578B "+(h+1),"route","\u540C\u4E00\u5165\u53E3\u8C03\u7528\u4E0D\u540C\u6A21\u578B","",{},d,9),provider:c,returnTrack:[...d].reverse()}}),Ut("\u8C03\u7528\u56DE\u6267","ops","\u4E24\u6B21\u72EC\u7ACB\u8C03\u7528\u6210\u529F","",{},[],2)];if(i==="policy")return[...Jl.map(c=>({...Ut(c.label,"gate","\u6743\u9650\u4E0E\u989D\u5EA6\u5BF9\u7167",c.reason,{},["entry","gate"],6,"risk"),policy:c})),Ut("\u62D2\u7EDD\u56DE\u6267","ops","\u4E24\u6B21\u8BF7\u6C42\u5747\u5728\u5165\u53E3\u88AB\u62D2\u7EDD","",{},[],2)];if(i==="response")return[Yl,Ut("\u5BA1\u8BA1\u56DE\u6267","ops","\u54CD\u5E94\u5DF2\u963B\u65AD","",{},[],2)];if(i==="tour"){let[l,c,h,d,u,f]=$n("failover"),g=$n("sensitive")[2],v=$n("injection")[2];return[..._r,{...l,duration:3.1},{...c,duration:3.2},{...h,duration:4.7},{...d,duration:10},{...u,duration:5.2},{...g,track:["entry","gate","scan"]},{...v,track:["entry","gate","scan"]},{...f,label:"\u5BA1\u8BA1\u56DE\u6267",duration:2.4}]}let e=Ut("\u53D1\u8D77\u8C03\u7528","entry","\u7814\u53D1\u56E2\u961F\u53D1\u8D77\u63A5\u53E3\u62A5\u9519\u5206\u6790","\u7814\u53D1\u4EBA\u5458\u63D0\u4EA4\u63A5\u53E3\u62A5\u9519\u6458\u8981\u3002\u7814\u53D1\u5DE5\u5177\u901A\u8FC7\u7EDF\u4E00 AI \u7F51\u5173\u53D1\u8D77\u8C03\u7528\uFF0C\u5E73\u53F0\u6309\u914D\u7F6E\u8BC6\u522B\u8BF7\u6C42\u8EAB\u4EFD\u3002",{\u53D1\u8D77\u90E8\u95E8:"\u7814\u53D1\u90E8",\u8BF7\u6C42\u5BF9\u8C61:"\u6A21\u578B\u670D\u52A1",\u8BF7\u6C42\u7F16\u53F7:"DEMO-042",\u63A5\u5165\u65B9\u5F0F:"\u7EDF\u4E00\u670D\u52A1\u5730\u5740"},["entry","gate"]),t=i==="quota"?Ut("\u989D\u5EA6\u62D2\u7EDD","gate","\u7814\u53D1\u90E8\u989D\u5EA6\u5DF2\u7528\u5C3D","\u793A\u610F\u7B56\u7565\u8BBE\u4E3A\u8D85\u989D\u963B\u65AD\u3002\u7F51\u5173\u5728\u989D\u5EA6\u95F8\u53E3\u62D2\u7EDD\u8FD9\u6B21\u8C03\u7528\uFF0C\u8BF7\u6C42\u6CA1\u6709\u5230\u8FBE\u4E0A\u6E38\u6A21\u578B\u3002",{\u89E6\u53D1\u8303\u56F4:"\u7814\u53D1\u90E8",\u5269\u4F59\u989D\u5EA6:"0 Token",\u5904\u7F6E\u7ED3\u679C:"\u62D2\u7EDD\u8F6C\u53D1",\u4E0A\u6E38\u8C03\u7528:"\u672A\u53D1\u8D77"},["gate"],3,"risk"):Ut("\u6388\u6743\u4E0E\u989D\u5EA6","gate","\u786E\u8BA4\u8EAB\u4EFD\u3001\u6A21\u578B\u6743\u9650\u4E0E\u53EF\u7528\u989D\u5EA6","\u7814\u53D1\u90E8\u7684\u8C03\u7528\u8EAB\u4EFD\u548C\u6A21\u578B\u6743\u9650\u901A\u8FC7\u6821\u9A8C\uFF0C\u5F53\u524D\u90E8\u95E8\u989D\u5EA6\u5145\u8DB3\u3002\u8BF7\u6C42\u524D\u5F80\u5185\u5BB9\u68C0\u67E5\u8231\u3002",{\u8EAB\u4EFD\u6821\u9A8C:"\u901A\u8FC7",\u8D44\u6E90\u6388\u6743:"\u6A21\u578B A",\u90E8\u95E8\u989D\u5EA6:"\u53EF\u7528",\u4E0A\u6E38\u8C03\u7528:"\u5F85\u8F6C\u53D1"},["gate","scan"]),n=i==="injection"?{...Ut("\u6CE8\u5165\u62E6\u622A","scan","\u63D0\u793A\u8BCD\u6CE8\u5165\u9632\u62A4","\u793A\u610F\u9644\u4EF6\u5939\u5E26\u8BD5\u56FE\u6539\u53D8\u4EFB\u52A1\u7684\u5F02\u5E38\u6307\u4EE4\u3002\u6309\u9884\u8BBE\u963B\u65AD\u7B56\u7565\uFF0C\u7F51\u5173\u6CA1\u6709\u628A\u8BF7\u6C42\u8F6C\u53D1\u81F3\u6A21\u578B\u3002",{\u65B9\u5411:"\u8BF7\u6C42\u65B9\u5411",\u547D\u4E2D\u89C4\u5219:"\u63D0\u793A\u8BCD\u6CE8\u5165\uFF08\u793A\u610F\uFF09",\u5904\u7F6E:"\u963B\u65AD",\u4E0A\u6E38\u8C03\u7528:"\u672A\u53D1\u8D77"},["gate","scan"],13,"risk"),risk:"injection"}:i==="sensitive"?Ut("\u5B89\u5168\u62E6\u622A","scan","\u542B\u654F\u611F\u5B57\u6BB5\u7684\u8BF7\u6C42\u88AB\u62E6\u4E0B","\u8FD9\u6B21\u8BF7\u6C42\u9644\u5E26\u4E86\u542B\u865A\u6784\u654F\u611F\u4FE1\u606F\u7684\u8BCA\u65AD\u6837\u4F8B\u3002\u51FA\u7AD9\u68C0\u67E5\u547D\u4E2D\u6F14\u793A\u89C4\u5219\uFF0C\u7F51\u5173\u963B\u65AD\u8BF7\u6C42\u5E76\u8BB0\u5F55\u5B89\u5168\u4E8B\u4EF6\u3002",{\u68C0\u67E5\u65B9\u5411:"\u8BF7\u6C42 \u2192 \u4E0A\u6E38",\u547D\u4E2D\u89C4\u5219:"\u654F\u611F\u4FE1\u606F\u5916\u53D1",\u5904\u7F6E\u7ED3\u679C:"\u6309\u7B56\u7565\u963B\u65AD",\u4E0A\u6E38\u8C03\u7528:"\u672A\u53D1\u8D77"},["gate","scan"],9,"risk"):Ut("\u8BF7\u6C42\u68C0\u67E5","scan","\u5728\u8F6C\u53D1\u524D\u68C0\u67E5\u8BF7\u6C42\u5185\u5BB9","\u8FD9\u6B21\u62A5\u9519\u6458\u8981\u901A\u8FC7\u8BF7\u6C42\u65B9\u5411\u7684\u5B89\u5168\u68C0\u67E5\uFF0C\u7F51\u5173\u968F\u540E\u5C06\u4EFB\u52A1\u8F6C\u53D1\u5230\u83B7\u51C6\u7684\u6A21\u578B\u6E20\u9053\u3002",{\u68C0\u67E5\u65B9\u5411:"\u8BF7\u6C42 \u2192 \u4E0A\u6E38",\u547D\u4E2D\u89C4\u5219:"\u65E0",\u5904\u7F6E\u7ED3\u679C:"\u653E\u884C",\u6388\u6743\u6A21\u578B:"\u6A21\u578B A"},["scan","route"],4.1),s=i==="failover"?Ut("\u6545\u969C\u5207\u6362","route","\u4E3B\u6E20\u9053\u8D85\u65F6\uFF0C\u5207\u6362\u5230\u83B7\u51C6\u7684\u5907\u7528\u6E20\u9053","\u7F51\u5173\u6309\u9884\u8BBE\u7B56\u7565\u5904\u7406\u4E3B\u6E20\u9053\u8D85\u65F6\u3002\u540C\u4E00\u6A21\u578B\u901A\u8FC7\u5DF2\u914D\u7F6E\u4E14\u83B7\u51C6\u7684\u5907\u7528\u6E20\u9053\u91CD\u8BD5\u3002",{\u4E3B\u6E20\u9053:"\u8D85\u65F6",\u5907\u7528\u6E20\u9053:"\u5DF2\u83B7\u51C6",\u6267\u884C\u7B56\u7565:"\u5207\u6362\u5E76\u91CD\u8BD5",\u6A21\u578B:"\u6A21\u578B A"},["route","fork","main","fork","backup"],10,"risk"):Ut("\u9009\u62E9\u6E20\u9053","route","\u628A\u8BF7\u6C42\u53D1\u7ED9\u53EF\u7528\u7684\u6A21\u578B\u6E20\u9053","\u8C03\u5EA6\u53F0\u6839\u636E\u6388\u6743\u8303\u56F4\u4E0E\u6E20\u9053\u72B6\u6001\u9009\u4E2D\u4E3B\u6E20\u9053\u3002\u4E3B\u6E20\u9053\u63A5\u6536\u8BF7\u6C42\u5E76\u8FD4\u56DE\u5206\u6790\u7ED3\u679C\u3002",{\u6A21\u578B:"\u6A21\u578B A",\u5F53\u524D\u6E20\u9053:"\u4E3B\u6E20\u9053",\u6E20\u9053\u72B6\u6001:"\u53EF\u7528",\u8C03\u5EA6\u4F9D\u636E:"\u6388\u6743\u4E0E\u6E20\u9053\u4F18\u5148\u7EA7"},["route","fork","main"],5),r=Ut("\u54CD\u5E94\u68C0\u67E5","scan","\u68C0\u67E5\u6A21\u578B\u54CD\u5E94\uFF0C\u8FD4\u56DE\u8BCA\u65AD\u5EFA\u8BAE","\u8FD4\u56DE\u5185\u5BB9\u901A\u8FC7\u54CD\u5E94\u65B9\u5411\u68C0\u67E5\u3002\u7814\u53D1\u4EBA\u5458\u6536\u5230\u8BCA\u65AD\u5EFA\u8BAE\uFF1A\u5148\u786E\u8BA4\u8BF7\u6C42\u53C2\u6570\uFF0C\u518D\u6838\u5BF9\u63A5\u53E3\u8D85\u65F6\u914D\u7F6E\u3002",{\u68C0\u67E5\u65B9\u5411:"\u4E0A\u6E38 \u2192 \u5E94\u7528",\u5904\u7F6E\u7ED3\u679C:"\u653E\u884C",\u8FD4\u56DE\u72B6\u6001:"\u6210\u529F",\u5EFA\u8BAE:"\u68C0\u67E5\u53C2\u6570\u4E0E\u8D85\u65F6"},[i==="failover"?"backup":"main","fork","route","scan","gate","entry"],6),a=i==="sensitive"||i==="injection"||i==="quota"?Ut("\u67E5\u770B\u8BB0\u5F55","ops","\u590D\u6838\u8FD9\u6B21\u62D2\u7EDD\u7684\u539F\u56E0","\u8FD0\u8425\u6216\u5B89\u5168\u4EBA\u5458\u6309\u8BF7\u6C42\u7F16\u53F7\u67E5\u770B\u7ED3\u679C\uFF0C\u6838\u5BF9\u89E6\u53D1\u89C4\u5219\u4E0E\u5904\u7F6E\u72B6\u6001\u3002\u8BE5\u793A\u4F8B\u672A\u53D1\u8D77\u4E0A\u6E38\u6A21\u578B\u8C03\u7528\u3002",{\u8BF7\u6C42\u7F16\u53F7:"DEMO-042",\u7ED3\u679C:"\u5DF2\u62D2\u7EDD",\u4E0A\u6E38\u6A21\u578B\u7528\u91CF:"\u672A\u4EA7\u751F",\u8BB0\u5F55\u5185\u5BB9:"\u62D2\u7EDD\u539F\u56E0\u4E0E\u5904\u7F6E\u7ED3\u679C"},[],3):Ut("\u67E5\u770B\u8BB0\u5F55","ops","\u628A\u7528\u91CF\u4E0E\u8D39\u7528\u5F52\u5230\u5BF9\u5E94\u90E8\u95E8","\u8FD0\u8425\u4EBA\u5458\u53EF\u4EE5\u6309\u8BF7\u6C42\u7F16\u53F7\u590D\u6838\u8C03\u7528\u8EAB\u4EFD\u3001\u6E20\u9053\u4E0E\u7528\u91CF\u3002\u793A\u4F8B\u8D39\u7528\u6309\u5185\u90E8\u8BA1\u4EF7\u53E3\u5F84\u5C55\u793A\uFF0C\u53EF\u7528\u4E8E\u90E8\u95E8\u6210\u672C\u5F52\u96C6\u3002",{\u8BF7\u6C42\u7F16\u53F7:"DEMO-042",\u8D39\u7528\u5F52\u5C5E:"\u7814\u53D1\u90E8",\u6A21\u578B\u7528\u91CF:"1,240 Token\uFF08\u793A\u610F\uFF09",\u5185\u90E8\u8BA1\u4EF7:"\xA50.012\uFF08\u793A\u610F\uFF09"},[],3);return i==="quota"?[e,t,a]:i==="sensitive"||i==="injection"?[e,t,n,a]:[e,t,n,s,r,a]}function jl(i){if(i==="providers")return{summary:"\u540C\u4E00\u5165\u53E3 \xB7 \u4E24\u5BB6\u6A21\u578B\u5747\u5DF2\u8FD4\u56DE",rows:[["\u8C03\u7528\u5E94\u7528","\u7814\u53D1\u52A9\u624B"],["\u7F51\u5173\u5165\u53E3","\u540C\u4E00\u670D\u52A1\u5730\u5740"],...Zl.map(({vendor:s,model:r})=>[s,r+" \xB7 \u5DF2\u8FD4\u56DE"])]};if(i==="policy")return{summary:"\u4E24\u6B21\u8BF7\u6C42\u5747\u672A\u8C03\u7528\u4E0A\u6E38",rows:[["\u8C03\u7528\u5E94\u7528","\u7814\u53D1\u90E8 \xB7 \u7814\u53D1\u52A9\u624B"],["\u8BF7\u6C42\u5BF9\u8C61","\u6A21\u578B B"],...Jl.map(({label:s,permission:r,quota:o})=>[s,r+" \xB7 \u5269\u4F59 "+o]),["\u4E0A\u6E38\u8C03\u7528","\u4E24\u6B21\u5747\u672A\u53D1\u8D77"]]};if(i==="response")return{summary:"\u6A21\u578B\u5DF2\u54CD\u5E94 \xB7 \u5185\u5BB9\u672A\u4EA4\u8FD8\u5E94\u7528",rows:[["\u8BF7\u6C42\u7F16\u53F7","DEMO-045"],["\u8C03\u7528\u8EAB\u4EFD","\u7814\u53D1\u90E8 \xB7 \u7814\u53D1\u52A9\u624B"],["\u4E0A\u6E38\u8C03\u7528","\u5DF2\u53D1\u8D77 \xB7 \u6A21\u578B\u5DF2\u8FD4\u56DE"],["\u68C0\u67E5\u65B9\u5411","\u6A21\u578B \u2192 \u7F51\u5173 \u2192 \u5E94\u7528"],["\u547D\u4E2D\u89C4\u5219","\u54CD\u5E94\u542B\u654F\u611F\u5B57\u6BB5\uFF08\u793A\u610F\uFF09"],["\u5904\u7F6E\u7ED3\u679C","\u963B\u65AD\u54CD\u5E94 \xB7 \u5E94\u7528\u4EC5\u6536\u5230\u7B56\u7565\u63D0\u793A"]]};let e=i==="sensitive"||i==="injection"||i==="quota",t=i==="failover"||i==="tour",n=[["\u8C03\u7528\u8EAB\u4EFD","\u7814\u53D1\u90E8 \xB7 \u7814\u53D1\u5DE5\u5177"],["\u8BF7\u6C42\u7F16\u53F7",i==="tour"?"DEMO-042 / 043 / 044":"DEMO-042"],["\u68C0\u67E5\u7ED3\u679C",i==="tour"?"\u6B63\u5E38\u653E\u884C \xB7 \u4E24\u6B21\u98CE\u9669\u8BF7\u6C42\u5DF2\u963B\u65AD":e?"\u5DF2\u6309\u7B56\u7565\u62D2\u7EDD":"\u8BF7\u6C42\u53CA\u54CD\u5E94\u5747\u901A\u8FC7\u68C0\u67E5"],["\u6A21\u578B\u6E20\u9053",e?"\u672A\u8F6C\u53D1\u81F3\u4E0A\u6E38":t?"\u4E3B\u6E20\u9053\u8D85\u65F6 \xB7 \u5907\u7528\u6E20\u9053\u91CD\u8BD5\u6210\u529F":"\u4E3B\u6E20\u9053 \xB7 \u6B63\u5E38\u8FD4\u56DE"],...i==="failover"?[["\u6E20\u9053\u8868\u73B0","\u4E3B\u6E20\u9053 2.00 \u79D2\u8D85\u65F6 \xB7 \u5907\u7528 0.86 \u79D2\u8FD4\u56DE"]]:[],["\u547D\u4E2D\u89C4\u5219",i==="tour"?"\u654F\u611F\u4FE1\u606F\u5916\u53D1 / \u63D0\u793A\u8BCD\u6CE8\u5165\uFF08\u793A\u610F\uFF09":i==="injection"?"\u63D0\u793A\u8BCD\u6CE8\u5165\uFF08\u793A\u610F\uFF09":i==="sensitive"?"\u654F\u611F\u4FE1\u606F\u5916\u53D1\uFF08\u793A\u610F\uFF09":i==="quota"?"\u90E8\u95E8\u989D\u5EA6\u5DF2\u7528\u5C3D":"\u65E0"],["\u4E0A\u6E38\u7528\u91CF",e?"\u672A\u4EA7\u751F":i==="tour"?"\u6B63\u5E38\u8BF7\u6C42 1,240 Token \xB7 \u62E6\u622A\u8BF7\u6C42\u672A\u4EA7\u751F":"1,240 Token\uFF08\u793A\u610F\uFF09"],["\u5185\u90E8\u8BA1\u4EF7",e?"\u672A\u4EA7\u751F":i==="tour"?"\u653E\u884C\u8BF7\u6C42 \xA50.012 \xB7 \u62E6\u622A\u8BF7\u6C42\u672A\u4EA7\u751F":"\xA50.012\uFF08\u793A\u610F\uFF09"]];return{summary:i==="tour"?"1 \u6B21\u6210\u529F\u8FD4\u56DE \xB7 2 \u6B21\u62E6\u622A\u672A\u5916\u53D1":e?"\u5DF2\u62D2\u7EDD \xB7 \u672A\u8F6C\u53D1\u81F3\u4E0A\u6E38":t?"\u5907\u7528\u6E20\u9053\u91CD\u8BD5\u6210\u529F":"\u5DF2\u5B8C\u6210 \xB7 \u8BF7\u6C42\u4E0E\u54CD\u5E94\u901A\u8FC7\u68C0\u67E5",rows:n}}var Sc=0,ja=1,bc=2;var Qa=1,Tc=2,An=3,kn=0,qt=1,Cn=2,Gn=0,xi=1,el=2,tl=3,nl=4,wc=5,ri=100,Ec=101,Ac=102,Cc=103,Rc=104,Ic=200,Pc=201,Dc=202,Lc=203,kr=204,zr=205,Uc=206,Nc=207,Fc=208,Oc=209,Bc=210,kc=211,zc=212,Vc=213,Hc=214,po=0,mo=1,go=2,vi=3,_o=4,xo=5,vo=6,yo=7,il=0,Gc=1,Wc=2,Wn=0,Xc=1,qc=2,Yc=3,Zc=4,Jc=5,$c=6,Kc=7;var sl=300,bi=301,Ti=302,Mo=303,So=304,$s=306,Ji=1e3,si=1001,Vr=1002,Kt=1003,jc=1004;var Ks=1005;var Nt=1006,bo=1007;var hi=1008;var Mn=1009,rl=1010,ol=1011,as=1012,To=1013,ui=1014,Sn=1015,ls=1016,wo=1017,Eo=1018,cs=1020,al=35902,ll=35899,cl=1021,hl=1022,dn=1023,$i=1026,hs=1027,Ao=1028,Co=1029,ul=1030,Ro=1031;var Io=1033,js=33776,Qs=33777,er=33778,tr=33779,Po=35840,Do=35841,Lo=35842,Uo=35843,No=36196,Fo=37492,Oo=37496,Bo=37808,ko=37809,zo=37810,Vo=37811,Ho=37812,Go=37813,Wo=37814,Xo=37815,qo=37816,Yo=37817,Zo=37818,Jo=37819,$o=37820,Ko=37821,jo=36492,Qo=36494,ea=36495,ta=36283,na=36284,ia=36285,sa=36286;var Cs=2300,Hr=2301,Br=2302,Wa=2400,Xa=2401,qa=2402;var Qc=3200,eh=3201;var dl=0,th=1,Xn="",St="srgb",yi="srgb-linear",Rs="linear",ut="srgb";var _i=7680;var Ya=519,nh=512,ih=513,sh=514,fl=515,rh=516,oh=517,ah=518,lh=519,Za=35044,nr=35048;var pl="300 es",xn=2e3,Is=2001;var zn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},Ot=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ql=1234567,Ts=Math.PI/180,Ki=180/Math.PI;function us(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ot[i&255]+Ot[i>>8&255]+Ot[i>>16&255]+Ot[i>>24&255]+"-"+Ot[e&255]+Ot[e>>8&255]+"-"+Ot[e>>16&15|64]+Ot[e>>24&255]+"-"+Ot[t&63|128]+Ot[t>>8&255]+"-"+Ot[t>>16&255]+Ot[t>>24&255]+Ot[n&255]+Ot[n>>8&255]+Ot[n>>16&255]+Ot[n>>24&255]).toLowerCase()}function et(i,e,t){return Math.max(e,Math.min(t,i))}function ml(i,e){return(i%e+e)%e}function ru(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function ou(i,e,t){return i!==e?(t-i)/(e-i):0}function ws(i,e,t){return(1-t)*i+t*e}function au(i,e,t,n){return ws(i,e,1-Math.exp(-t*n))}function lu(i,e=1){return e-Math.abs(ml(i,e*2)-e)}function cu(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function hu(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function uu(i,e){return i+Math.floor(Math.random()*(e-i+1))}function du(i,e){return i+Math.random()*(e-i)}function fu(i){return i*(.5-Math.random())}function pu(i){i!==void 0&&(Ql=i);let e=Ql+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function mu(i){return i*Ts}function gu(i){return i*Ki}function _u(i){return(i&i-1)===0&&i!==0}function xu(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function vu(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function yu(i,e,t,n,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),h=o((e+n)/2),d=r((e-n)/2),u=o((e-n)/2),f=r((n-e)/2),g=o((n-e)/2);switch(s){case"XYX":i.set(a*h,l*d,l*u,a*c);break;case"YZY":i.set(l*u,a*h,l*d,a*c);break;case"ZXZ":i.set(l*d,l*u,a*h,a*c);break;case"XZX":i.set(a*h,l*g,l*f,a*c);break;case"YXY":i.set(l*f,a*h,l*g,a*c);break;case"ZYZ":i.set(l*g,l*f,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Yi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Gt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var st={DEG2RAD:Ts,RAD2DEG:Ki,generateUUID:us,clamp:et,euclideanModulo:ml,mapLinear:ru,inverseLerp:ou,lerp:ws,damp:au,pingpong:lu,smoothstep:cu,smootherstep:hu,randInt:uu,randFloat:du,randFloatSpread:fu,seededRandom:pu,degToRad:mu,radToDeg:gu,isPowerOfTwo:_u,ceilPowerOfTwo:xu,floorPowerOfTwo:vu,setQuaternionFromProperEuler:yu,normalize:Gt,denormalize:Yi},Xe=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(et(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(et(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Vn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],d=n[s+3],u=r[o+0],f=r[o+1],g=r[o+2],v=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d;return}if(a===1){e[t+0]=u,e[t+1]=f,e[t+2]=g,e[t+3]=v;return}if(d!==v||l!==u||c!==f||h!==g){let m=1-a,p=l*u+c*f+h*g+d*v,C=p>=0?1:-1,E=1-p*p;if(E>Number.EPSILON){let R=Math.sqrt(E),A=Math.atan2(R,p*C);m=Math.sin(m*A)/R,a=Math.sin(a*A)/R}let S=a*C;if(l=l*m+u*S,c=c*m+f*S,h=h*m+g*S,d=d*m+v*S,m===1-a){let R=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=R,c*=R,h*=R,d*=R}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],d=r[o],u=r[o+1],f=r[o+2],g=r[o+3];return e[t]=a*g+h*d+l*f-c*u,e[t+1]=l*g+h*u+c*d-a*f,e[t+2]=c*g+h*f+a*u-l*d,e[t+3]=h*g-a*d-l*u-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),d=a(r/2),u=l(n/2),f=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"YXZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"ZXY":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"ZYX":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"YZX":this._x=u*h*d+c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d-u*f*g;break;case"XZY":this._x=u*h*d-c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d+u*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],d=t[10],u=n+a+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(n>a&&n>d){let f=2*Math.sqrt(1+n-a-d);this._w=(h-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>d){let f=2*Math.sqrt(1+a-n-d);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+d-n-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(et(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),d=Math.sin((1-t)*h)/c,u=Math.sin(t*h)/c;return this._w=o*d+this._w*u,this._x=n*d+this._x*u,this._y=s*d+this._y*u,this._z=r*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},B=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ec.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ec.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*n),h=2*(a*t-r*s),d=2*(r*n-o*t);return this.x=t+l*c+o*d-a*h,this.y=n+l*h+a*c-r*d,this.z=s+l*d+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this.z=et(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this.z=et(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(et(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return va.copy(this).projectOnVector(e),this.sub(va)}reflect(e){return this.sub(va.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(et(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},va=new B,ec=new Vn,Ze=class i{constructor(e,t,n,s,r,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c)}set(e,t,n,s,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],g=n[8],v=s[0],m=s[3],p=s[6],C=s[1],E=s[4],S=s[7],R=s[2],A=s[5],N=s[8];return r[0]=o*v+a*C+l*R,r[3]=o*m+a*E+l*A,r[6]=o*p+a*S+l*N,r[1]=c*v+h*C+d*R,r[4]=c*m+h*E+d*A,r[7]=c*p+h*S+d*N,r[2]=u*v+f*C+g*R,r[5]=u*m+f*E+g*A,r[8]=u*p+f*S+g*N,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=h*o-a*c,u=a*l-h*r,f=c*r-o*l,g=t*d+n*u+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/g;return e[0]=d*v,e[1]=(s*c-h*n)*v,e[2]=(a*n-s*o)*v,e[3]=u*v,e[4]=(h*t-s*l)*v,e[5]=(s*r-a*t)*v,e[6]=f*v,e[7]=(n*l-c*t)*v,e[8]=(o*t-n*r)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(ya.makeScale(e,t)),this}rotate(e){return this.premultiply(ya.makeRotation(-e)),this}translate(e,t){return this.premultiply(ya.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},ya=new Ze;function gl(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Ps(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function ch(){let i=Ps("canvas");return i.style.display="block",i}var tc={};function ji(i){i in tc||(tc[i]=!0,console.warn(i))}function hh(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var nc=new Ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ic=new Ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Mu(){let i={enabled:!0,workingColorSpace:yi,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ut&&(s.r=Bn(s.r),s.g=Bn(s.g),s.b=Bn(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ut&&(s.r=Zi(s.r),s.g=Zi(s.g),s.b=Zi(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Xn?Rs:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return ji("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return ji("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[yi]:{primaries:e,whitePoint:n,transfer:Rs,toXYZ:nc,fromXYZ:ic,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:St},outputColorSpaceConfig:{drawingBufferColorSpace:St}},[St]:{primaries:e,whitePoint:n,transfer:ut,toXYZ:nc,fromXYZ:ic,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:St}}}),i}var ot=Mu();function Bn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Zi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Ui,Gr=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ui===void 0&&(Ui=Ps("canvas")),Ui.width=e.width,Ui.height=e.height;let s=Ui.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Ui}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Ps("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Bn(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Bn(t[n]/255)*255):t[n]=Bn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Su=0,Qi=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Su++}),this.uuid=us(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Ma(s[o].image)):r.push(Ma(s[o]))}else r=Ma(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Ma(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Gr.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var bu=0,Sa=new B,Wt=class i extends zn{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=si,s=si,r=Nt,o=hi,a=dn,l=Mn,c=i.DEFAULT_ANISOTROPY,h=Xn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:bu++}),this.uuid=us(),this.name="",this.source=new Qi(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Xe(0,0),this.repeat=new Xe(1,1),this.center=new Xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Sa).x}get height(){return this.source.getSize(Sa).y}get depth(){return this.source.getSize(Sa).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==sl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ji:e.x=e.x-Math.floor(e.x);break;case si:e.x=e.x<0?0:1;break;case Vr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ji:e.y=e.y-Math.floor(e.y);break;case si:e.y=e.y<0?0:1;break;case Vr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Wt.DEFAULT_IMAGE=null;Wt.DEFAULT_MAPPING=sl;Wt.DEFAULT_ANISOTROPY=1;var _t=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],g=l[9],v=l[2],m=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let E=(c+1)/2,S=(f+1)/2,R=(p+1)/2,A=(h+u)/4,N=(d+v)/4,w=(g+m)/4;return E>S&&E>R?E<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(E),s=A/n,r=N/n):S>R?S<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),n=A/s,r=w/s):R<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),n=N/r,s=w/r),this.set(n,s,r,t),this}let C=Math.sqrt((m-g)*(m-g)+(d-v)*(d-v)+(u-h)*(u-h));return Math.abs(C)<.001&&(C=1),this.x=(m-g)/C,this.y=(d-v)/C,this.z=(u-h)/C,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this.z=et(this.z,e.z,t.z),this.w=et(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this.z=et(this.z,e,t),this.w=et(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(et(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Wr=class extends zn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Nt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new _t(0,0,e,t),this.scissorTest=!1,this.viewport=new _t(0,0,e,t);let s={width:e,height:t,depth:n.depth},r=new Wt(s);this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){let t={minFilter:Nt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Qi(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},hn=class extends Wr{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Ds=class extends Wt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Kt,this.minFilter=Kt,this.wrapR=si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Xr=class extends Wt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Kt,this.minFilter=Kt,this.wrapR=si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Tn=class{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(mn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(mn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=mn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,mn):mn.fromBufferAttribute(r,o),mn.applyMatrix4(e.matrixWorld),this.expandByPoint(mn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),xr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),xr.copy(n.boundingBox)),xr.applyMatrix4(e.matrixWorld),this.union(xr)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,mn),mn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(xs),vr.subVectors(this.max,xs),Ni.subVectors(e.a,xs),Fi.subVectors(e.b,xs),Oi.subVectors(e.c,xs),Kn.subVectors(Fi,Ni),jn.subVectors(Oi,Fi),fi.subVectors(Ni,Oi);let t=[0,-Kn.z,Kn.y,0,-jn.z,jn.y,0,-fi.z,fi.y,Kn.z,0,-Kn.x,jn.z,0,-jn.x,fi.z,0,-fi.x,-Kn.y,Kn.x,0,-jn.y,jn.x,0,-fi.y,fi.x,0];return!ba(t,Ni,Fi,Oi,vr)||(t=[1,0,0,0,1,0,0,0,1],!ba(t,Ni,Fi,Oi,vr))?!1:(yr.crossVectors(Kn,jn),t=[yr.x,yr.y,yr.z],ba(t,Ni,Fi,Oi,vr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,mn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(mn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ln[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ln[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ln[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ln[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ln[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ln[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ln[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ln[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ln),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Ln=[new B,new B,new B,new B,new B,new B,new B,new B],mn=new B,xr=new Tn,Ni=new B,Fi=new B,Oi=new B,Kn=new B,jn=new B,fi=new B,xs=new B,vr=new B,yr=new B,pi=new B;function ba(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){pi.fromArray(i,r);let a=s.x*Math.abs(pi.x)+s.y*Math.abs(pi.y)+s.z*Math.abs(pi.z),l=e.dot(pi),c=t.dot(pi),h=n.dot(pi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Tu=new Tn,vs=new B,Ta=new B,oi=class{constructor(e=new B,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Tu.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;vs.subVectors(e,this.center);let t=vs.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(vs,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ta.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(vs.copy(e.center).add(Ta)),this.expandByPoint(vs.copy(e.center).sub(Ta))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Un=new B,wa=new B,Mr=new B,Qn=new B,Ea=new B,Sr=new B,Aa=new B,qr=class{constructor(e=new B,t=new B(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Un)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Un.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Un.copy(this.origin).addScaledVector(this.direction,t),Un.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){wa.copy(e).add(t).multiplyScalar(.5),Mr.copy(t).sub(e).normalize(),Qn.copy(this.origin).sub(wa);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Mr),a=Qn.dot(this.direction),l=-Qn.dot(Mr),c=Qn.lengthSq(),h=Math.abs(1-o*o),d,u,f,g;if(h>0)if(d=o*l-a,u=o*a-l,g=r*h,d>=0)if(u>=-g)if(u<=g){let v=1/h;d*=v,u*=v,f=d*(d+o*u+2*a)+u*(o*d+u+2*l)+c}else u=r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(wa).addScaledVector(Mr,u),f}intersectSphere(e,t){Un.subVectors(e.center,this.origin);let n=Un.dot(this.direction),s=Un.dot(Un)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,s=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,s=(e.min.x-u.x)*c),h>=0?(r=(e.min.y-u.y)*h,o=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,o=(e.min.y-u.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(a=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Un)!==null}intersectTriangle(e,t,n,s,r){Ea.subVectors(t,e),Sr.subVectors(n,e),Aa.crossVectors(Ea,Sr);let o=this.direction.dot(Aa),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Qn.subVectors(this.origin,e);let l=a*this.direction.dot(Sr.crossVectors(Qn,Sr));if(l<0)return null;let c=a*this.direction.dot(Ea.cross(Qn));if(c<0||l+c>o)return null;let h=-a*Qn.dot(Aa);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ft=class i{constructor(e,t,n,s,r,o,a,l,c,h,d,u,f,g,v,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c,h,d,u,f,g,v,m)}set(e,t,n,s,r,o,a,l,c,h,d,u,f,g,v,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/Bi.setFromMatrixColumn(e,0).length(),r=1/Bi.setFromMatrixColumn(e,1).length(),o=1/Bi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let u=o*h,f=o*d,g=a*h,v=a*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=f+g*c,t[5]=u-v*c,t[9]=-a*l,t[2]=v-u*c,t[6]=g+f*c,t[10]=o*l}else if(e.order==="YXZ"){let u=l*h,f=l*d,g=c*h,v=c*d;t[0]=u+v*a,t[4]=g*a-f,t[8]=o*c,t[1]=o*d,t[5]=o*h,t[9]=-a,t[2]=f*a-g,t[6]=v+u*a,t[10]=o*l}else if(e.order==="ZXY"){let u=l*h,f=l*d,g=c*h,v=c*d;t[0]=u-v*a,t[4]=-o*d,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*h,t[9]=v-u*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let u=o*h,f=o*d,g=a*h,v=a*d;t[0]=l*h,t[4]=g*c-f,t[8]=u*c+v,t[1]=l*d,t[5]=v*c+u,t[9]=f*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let u=o*l,f=o*c,g=a*l,v=a*c;t[0]=l*h,t[4]=v-u*d,t[8]=g*d+f,t[1]=d,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=f*d+g,t[10]=u-v*d}else if(e.order==="XZY"){let u=o*l,f=o*c,g=a*l,v=a*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=u*d+v,t[5]=o*h,t[9]=f*d-g,t[2]=g*d-f,t[6]=a*h,t[10]=v*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(wu,e,Eu)}lookAt(e,t,n){let s=this.elements;return jt.subVectors(e,t),jt.lengthSq()===0&&(jt.z=1),jt.normalize(),ei.crossVectors(n,jt),ei.lengthSq()===0&&(Math.abs(n.z)===1?jt.x+=1e-4:jt.z+=1e-4,jt.normalize(),ei.crossVectors(n,jt)),ei.normalize(),br.crossVectors(jt,ei),s[0]=ei.x,s[4]=br.x,s[8]=jt.x,s[1]=ei.y,s[5]=br.y,s[9]=jt.y,s[2]=ei.z,s[6]=br.z,s[10]=jt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],g=n[2],v=n[6],m=n[10],p=n[14],C=n[3],E=n[7],S=n[11],R=n[15],A=s[0],N=s[4],w=s[8],y=s[12],M=s[1],L=s[5],V=s[9],Y=s[13],Q=s[2],ie=s[6],te=s[10],ge=s[14],Z=s[3],P=s[7],X=s[11],W=s[15];return r[0]=o*A+a*M+l*Q+c*Z,r[4]=o*N+a*L+l*ie+c*P,r[8]=o*w+a*V+l*te+c*X,r[12]=o*y+a*Y+l*ge+c*W,r[1]=h*A+d*M+u*Q+f*Z,r[5]=h*N+d*L+u*ie+f*P,r[9]=h*w+d*V+u*te+f*X,r[13]=h*y+d*Y+u*ge+f*W,r[2]=g*A+v*M+m*Q+p*Z,r[6]=g*N+v*L+m*ie+p*P,r[10]=g*w+v*V+m*te+p*X,r[14]=g*y+v*Y+m*ge+p*W,r[3]=C*A+E*M+S*Q+R*Z,r[7]=C*N+E*L+S*ie+R*P,r[11]=C*w+E*V+S*te+R*X,r[15]=C*y+E*Y+S*ge+R*W,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],d=e[6],u=e[10],f=e[14],g=e[3],v=e[7],m=e[11],p=e[15];return g*(+r*l*d-s*c*d-r*a*u+n*c*u+s*a*f-n*l*f)+v*(+t*l*f-t*c*u+r*o*u-s*o*f+s*c*h-r*l*h)+m*(+t*c*d-t*a*f-r*o*d+n*o*f+r*a*h-n*c*h)+p*(-s*a*h-t*l*d+t*a*u+s*o*d-n*o*u+n*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=e[9],u=e[10],f=e[11],g=e[12],v=e[13],m=e[14],p=e[15],C=d*m*c-v*u*c+v*l*f-a*m*f-d*l*p+a*u*p,E=g*u*c-h*m*c-g*l*f+o*m*f+h*l*p-o*u*p,S=h*v*c-g*d*c+g*a*f-o*v*f-h*a*p+o*d*p,R=g*d*l-h*v*l-g*a*u+o*v*u+h*a*m-o*d*m,A=t*C+n*E+s*S+r*R;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let N=1/A;return e[0]=C*N,e[1]=(v*u*r-d*m*r-v*s*f+n*m*f+d*s*p-n*u*p)*N,e[2]=(a*m*r-v*l*r+v*s*c-n*m*c-a*s*p+n*l*p)*N,e[3]=(d*l*r-a*u*r-d*s*c+n*u*c+a*s*f-n*l*f)*N,e[4]=E*N,e[5]=(h*m*r-g*u*r+g*s*f-t*m*f-h*s*p+t*u*p)*N,e[6]=(g*l*r-o*m*r-g*s*c+t*m*c+o*s*p-t*l*p)*N,e[7]=(o*u*r-h*l*r+h*s*c-t*u*c-o*s*f+t*l*f)*N,e[8]=S*N,e[9]=(g*d*r-h*v*r-g*n*f+t*v*f+h*n*p-t*d*p)*N,e[10]=(o*v*r-g*a*r+g*n*c-t*v*c-o*n*p+t*a*p)*N,e[11]=(h*a*r-o*d*r-h*n*c+t*d*c+o*n*f-t*a*f)*N,e[12]=R*N,e[13]=(h*v*s-g*d*s+g*n*u-t*v*u-h*n*m+t*d*m)*N,e[14]=(g*a*s-o*v*s-g*n*l+t*v*l+o*n*m-t*a*m)*N,e[15]=(o*d*s-h*a*s+h*n*l-t*d*l-o*n*u+t*a*u)*N,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,d=a+a,u=r*c,f=r*h,g=r*d,v=o*h,m=o*d,p=a*d,C=l*c,E=l*h,S=l*d,R=n.x,A=n.y,N=n.z;return s[0]=(1-(v+p))*R,s[1]=(f+S)*R,s[2]=(g-E)*R,s[3]=0,s[4]=(f-S)*A,s[5]=(1-(u+p))*A,s[6]=(m+C)*A,s[7]=0,s[8]=(g+E)*N,s[9]=(m-C)*N,s[10]=(1-(u+v))*N,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=Bi.set(s[0],s[1],s[2]).length(),o=Bi.set(s[4],s[5],s[6]).length(),a=Bi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],gn.copy(this);let c=1/r,h=1/o,d=1/a;return gn.elements[0]*=c,gn.elements[1]*=c,gn.elements[2]*=c,gn.elements[4]*=h,gn.elements[5]*=h,gn.elements[6]*=h,gn.elements[8]*=d,gn.elements[9]*=d,gn.elements[10]*=d,t.setFromRotationMatrix(gn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=xn,l=!1){let c=this.elements,h=2*r/(t-e),d=2*r/(n-s),u=(t+e)/(t-e),f=(n+s)/(n-s),g,v;if(l)g=r/(o-r),v=o*r/(o-r);else if(a===xn)g=-(o+r)/(o-r),v=-2*o*r/(o-r);else if(a===Is)g=-o/(o-r),v=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=xn,l=!1){let c=this.elements,h=2/(t-e),d=2/(n-s),u=-(t+e)/(t-e),f=-(n+s)/(n-s),g,v;if(l)g=1/(o-r),v=o/(o-r);else if(a===xn)g=-2/(o-r),v=-(o+r)/(o-r);else if(a===Is)g=-1/(o-r),v=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Bi=new B,gn=new ft,wu=new B(0,0,0),Eu=new B(1,1,1),ei=new B,br=new B,jt=new B,sc=new ft,rc=new Vn,vn=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(et(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-et(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(et(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-et(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(et(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-et(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return sc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(sc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return rc.setFromEuler(this),this.setFromQuaternion(rc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};vn.DEFAULT_ORDER="XYZ";var Ls=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Au=0,oc=new B,ki=new Vn,Nn=new ft,Tr=new B,ys=new B,Cu=new B,Ru=new Vn,ac=new B(1,0,0),lc=new B(0,1,0),cc=new B(0,0,1),hc={type:"added"},Iu={type:"removed"},zi={type:"childadded",child:null},Ca={type:"childremoved",child:null},Dt=class i extends zn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Au++}),this.uuid=us(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new B,t=new vn,n=new Vn,s=new B(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ft},normalMatrix:{value:new Ze}}),this.matrix=new ft,this.matrixWorld=new ft,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ls,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ki.setFromAxisAngle(e,t),this.quaternion.multiply(ki),this}rotateOnWorldAxis(e,t){return ki.setFromAxisAngle(e,t),this.quaternion.premultiply(ki),this}rotateX(e){return this.rotateOnAxis(ac,e)}rotateY(e){return this.rotateOnAxis(lc,e)}rotateZ(e){return this.rotateOnAxis(cc,e)}translateOnAxis(e,t){return oc.copy(e).applyQuaternion(this.quaternion),this.position.add(oc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ac,e)}translateY(e){return this.translateOnAxis(lc,e)}translateZ(e){return this.translateOnAxis(cc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Nn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Tr.copy(e):Tr.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),ys.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Nn.lookAt(ys,Tr,this.up):Nn.lookAt(Tr,ys,this.up),this.quaternion.setFromRotationMatrix(Nn),s&&(Nn.extractRotation(s.matrixWorld),ki.setFromRotationMatrix(Nn),this.quaternion.premultiply(ki.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(hc),zi.child=e,this.dispatchEvent(zi),zi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Iu),Ca.child=e,this.dispatchEvent(Ca),Ca.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Nn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Nn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Nn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(hc),zi.child=e,this.dispatchEvent(zi),zi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ys,e,Cu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ys,Ru,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),d=o(e.shapes),u=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};Dt.DEFAULT_UP=new B(0,1,0);Dt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var _n=new B,Fn=new B,Ra=new B,On=new B,Vi=new B,Hi=new B,uc=new B,Ia=new B,Pa=new B,Da=new B,La=new _t,Ua=new _t,Na=new _t,ii=class i{constructor(e=new B,t=new B,n=new B){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),_n.subVectors(e,t),s.cross(_n);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){_n.subVectors(s,t),Fn.subVectors(n,t),Ra.subVectors(e,t);let o=_n.dot(_n),a=_n.dot(Fn),l=_n.dot(Ra),c=Fn.dot(Fn),h=Fn.dot(Ra),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(c*l-a*h)*u,g=(o*h-a*l)*u;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,On)===null?!1:On.x>=0&&On.y>=0&&On.x+On.y<=1}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,On)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,On.x),l.addScaledVector(o,On.y),l.addScaledVector(a,On.z),l)}static getInterpolatedAttribute(e,t,n,s,r,o){return La.setScalar(0),Ua.setScalar(0),Na.setScalar(0),La.fromBufferAttribute(e,t),Ua.fromBufferAttribute(e,n),Na.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(La,r.x),o.addScaledVector(Ua,r.y),o.addScaledVector(Na,r.z),o}static isFrontFacing(e,t,n,s){return _n.subVectors(n,t),Fn.subVectors(e,t),_n.cross(Fn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return _n.subVectors(this.c,this.b),Fn.subVectors(this.a,this.b),_n.cross(Fn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;Vi.subVectors(s,n),Hi.subVectors(r,n),Ia.subVectors(e,n);let l=Vi.dot(Ia),c=Hi.dot(Ia);if(l<=0&&c<=0)return t.copy(n);Pa.subVectors(e,s);let h=Vi.dot(Pa),d=Hi.dot(Pa);if(h>=0&&d<=h)return t.copy(s);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(Vi,o);Da.subVectors(e,r);let f=Vi.dot(Da),g=Hi.dot(Da);if(g>=0&&f<=g)return t.copy(r);let v=f*c-l*g;if(v<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(Hi,a);let m=h*g-f*d;if(m<=0&&d-h>=0&&f-g>=0)return uc.subVectors(r,s),a=(d-h)/(d-h+(f-g)),t.copy(s).addScaledVector(uc,a);let p=1/(m+v+u);return o=v*p,a=u*p,t.copy(n).addScaledVector(Vi,o).addScaledVector(Hi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},uh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ti={h:0,s:0,l:0},wr={h:0,s:0,l:0};function Fa(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var $e=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=St){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ot.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=ot.workingColorSpace){return this.r=e,this.g=t,this.b=n,ot.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=ot.workingColorSpace){if(e=ml(e,1),t=et(t,0,1),n=et(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Fa(o,r,e+1/3),this.g=Fa(o,r,e),this.b=Fa(o,r,e-1/3)}return ot.colorSpaceToWorking(this,s),this}setStyle(e,t=St){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=St){let n=uh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Bn(e.r),this.g=Bn(e.g),this.b=Bn(e.b),this}copyLinearToSRGB(e){return this.r=Zi(e.r),this.g=Zi(e.g),this.b=Zi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=St){return ot.workingToColorSpace(Bt.copy(this),e),Math.round(et(Bt.r*255,0,255))*65536+Math.round(et(Bt.g*255,0,255))*256+Math.round(et(Bt.b*255,0,255))}getHexString(e=St){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ot.workingColorSpace){ot.workingToColorSpace(Bt.copy(this),t);let n=Bt.r,s=Bt.g,r=Bt.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=ot.workingColorSpace){return ot.workingToColorSpace(Bt.copy(this),t),e.r=Bt.r,e.g=Bt.g,e.b=Bt.b,e}getStyle(e=St){ot.workingToColorSpace(Bt.copy(this),e);let t=Bt.r,n=Bt.g,s=Bt.b;return e!==St?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(ti),this.setHSL(ti.h+e,ti.s+t,ti.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ti),e.getHSL(wr);let n=ws(ti.h,wr.h,t),s=ws(ti.s,wr.s,t),r=ws(ti.l,wr.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Bt=new $e;$e.NAMES=uh;var Pu=0,ai=class extends zn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Pu++}),this.uuid=us(),this.name="",this.type="Material",this.blending=xi,this.side=kn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=kr,this.blendDst=zr,this.blendEquation=ri,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $e(0,0,0),this.blendAlpha=0,this.depthFunc=vi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ya,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=_i,this.stencilZFail=_i,this.stencilZPass=_i,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==xi&&(n.blending=this.blending),this.side!==kn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==kr&&(n.blendSrc=this.blendSrc),this.blendDst!==zr&&(n.blendDst=this.blendDst),this.blendEquation!==ri&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==vi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ya&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==_i&&(n.stencilFail=this.stencilFail),this.stencilZFail!==_i&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==_i&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},en=class extends ai{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new $e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vn,this.combine=il,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Mt=new B,Er=new Xe,Du=0,bt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Du++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Za,this.updateRanges=[],this.gpuType=Sn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Er.fromBufferAttribute(this,t),Er.applyMatrix3(e),this.setXY(t,Er.x,Er.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.applyMatrix3(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.applyMatrix4(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.applyNormalMatrix(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.transformDirection(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Yi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Gt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Yi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Gt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Yi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Gt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Yi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Gt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Yi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Gt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Gt(t,this.array),n=Gt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Gt(t,this.array),n=Gt(n,this.array),s=Gt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Gt(t,this.array),n=Gt(n,this.array),s=Gt(s,this.array),r=Gt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Za&&(e.usage=this.usage),e}};var Us=class extends bt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Ns=class extends bt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Tt=class extends bt{constructor(e,t,n){super(new Float32Array(e),t,n)}},Lu=0,ln=new ft,Oa=new Dt,Gi=new B,Qt=new Tn,Ms=new Tn,Pt=new B,Xt=class i extends zn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Lu++}),this.uuid=us(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(gl(e)?Ns:Us)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ze().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ln.makeRotationFromQuaternion(e),this.applyMatrix4(ln),this}rotateX(e){return ln.makeRotationX(e),this.applyMatrix4(ln),this}rotateY(e){return ln.makeRotationY(e),this.applyMatrix4(ln),this}rotateZ(e){return ln.makeRotationZ(e),this.applyMatrix4(ln),this}translate(e,t,n){return ln.makeTranslation(e,t,n),this.applyMatrix4(ln),this}scale(e,t,n){return ln.makeScale(e,t,n),this.applyMatrix4(ln),this}lookAt(e){return Oa.lookAt(e),Oa.updateMatrix(),this.applyMatrix4(Oa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Gi).negate(),this.translate(Gi.x,Gi.y,Gi.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Tt(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Tn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Qt.setFromBufferAttribute(r),this.morphTargetsRelative?(Pt.addVectors(this.boundingBox.min,Qt.min),this.boundingBox.expandByPoint(Pt),Pt.addVectors(this.boundingBox.max,Qt.max),this.boundingBox.expandByPoint(Pt)):(this.boundingBox.expandByPoint(Qt.min),this.boundingBox.expandByPoint(Qt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new oi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(e){let n=this.boundingSphere.center;if(Qt.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Ms.setFromBufferAttribute(a),this.morphTargetsRelative?(Pt.addVectors(Qt.min,Ms.min),Qt.expandByPoint(Pt),Pt.addVectors(Qt.max,Ms.max),Qt.expandByPoint(Pt)):(Qt.expandByPoint(Ms.min),Qt.expandByPoint(Ms.max))}Qt.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)Pt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Pt));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Pt.fromBufferAttribute(a,c),l&&(Gi.fromBufferAttribute(e,c),Pt.add(Gi)),s=Math.max(s,n.distanceToSquared(Pt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new bt(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let w=0;w<n.count;w++)a[w]=new B,l[w]=new B;let c=new B,h=new B,d=new B,u=new Xe,f=new Xe,g=new Xe,v=new B,m=new B;function p(w,y,M){c.fromBufferAttribute(n,w),h.fromBufferAttribute(n,y),d.fromBufferAttribute(n,M),u.fromBufferAttribute(r,w),f.fromBufferAttribute(r,y),g.fromBufferAttribute(r,M),h.sub(c),d.sub(c),f.sub(u),g.sub(u);let L=1/(f.x*g.y-g.x*f.y);isFinite(L)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(L),m.copy(d).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(L),a[w].add(v),a[y].add(v),a[M].add(v),l[w].add(m),l[y].add(m),l[M].add(m))}let C=this.groups;C.length===0&&(C=[{start:0,count:e.count}]);for(let w=0,y=C.length;w<y;++w){let M=C[w],L=M.start,V=M.count;for(let Y=L,Q=L+V;Y<Q;Y+=3)p(e.getX(Y+0),e.getX(Y+1),e.getX(Y+2))}let E=new B,S=new B,R=new B,A=new B;function N(w){R.fromBufferAttribute(s,w),A.copy(R);let y=a[w];E.copy(y),E.sub(R.multiplyScalar(R.dot(y))).normalize(),S.crossVectors(A,y);let L=S.dot(l[w])<0?-1:1;o.setXYZW(w,E.x,E.y,E.z,L)}for(let w=0,y=C.length;w<y;++w){let M=C[w],L=M.start,V=M.count;for(let Y=L,Q=L+V;Y<Q;Y+=3)N(e.getX(Y+0)),N(e.getX(Y+1)),N(e.getX(Y+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new bt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);let s=new B,r=new B,o=new B,a=new B,l=new B,c=new B,h=new B,d=new B;if(e)for(let u=0,f=e.count;u<f;u+=3){let g=e.getX(u+0),v=e.getX(u+1),m=e.getX(u+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,v),o.fromBufferAttribute(t,m),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,f=t.count;u<f;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),o.fromBufferAttribute(t,u+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Pt.fromBufferAttribute(e,t),Pt.normalize(),e.setXYZ(t,Pt.x,Pt.y,Pt.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,d=a.normalized,u=new c.constructor(l.length*h),f=0,g=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?f=l[v]*a.data.stride+a.offset:f=l[v]*h;for(let p=0;p<h;p++)u[g++]=c[f++]}return new bt(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,n);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){let u=c[h],f=e(u,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let f=c[d];h.push(f.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},dc=new ft,mi=new qr,Ar=new oi,fc=new B,Cr=new B,Rr=new B,Ir=new B,Ba=new B,Pr=new B,pc=new B,Dr=new B,yt=class extends Dt{constructor(e=new Xt,t=new en){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){Pr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],d=r[l];h!==0&&(Ba.fromBufferAttribute(d,e),o?Pr.addScaledVector(Ba,h):Pr.addScaledVector(Ba.sub(t),h))}t.add(Pr)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ar.copy(n.boundingSphere),Ar.applyMatrix4(r),mi.copy(e.ray).recast(e.near),!(Ar.containsPoint(mi.origin)===!1&&(mi.intersectSphere(Ar,fc)===null||mi.origin.distanceToSquared(fc)>(e.far-e.near)**2))&&(dc.copy(r).invert(),mi.copy(e.ray).applyMatrix4(dc),!(n.boundingBox!==null&&mi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,mi)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=u.length;g<v;g++){let m=u[g],p=o[m.materialIndex],C=Math.max(m.start,f.start),E=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let S=C,R=E;S<R;S+=3){let A=a.getX(S),N=a.getX(S+1),w=a.getX(S+2);s=Lr(this,p,e,n,c,h,d,A,N,w),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),v=Math.min(a.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){let C=a.getX(m),E=a.getX(m+1),S=a.getX(m+2);s=Lr(this,o,e,n,c,h,d,C,E,S),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,v=u.length;g<v;g++){let m=u[g],p=o[m.materialIndex],C=Math.max(m.start,f.start),E=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let S=C,R=E;S<R;S+=3){let A=S,N=S+1,w=S+2;s=Lr(this,p,e,n,c,h,d,A,N,w),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){let C=m,E=m+1,S=m+2;s=Lr(this,o,e,n,c,h,d,C,E,S),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function Uu(i,e,t,n,s,r,o,a){let l;if(e.side===qt?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===kn,a),l===null)return null;Dr.copy(a),Dr.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Dr);return c<t.near||c>t.far?null:{distance:c,point:Dr.clone(),object:i}}function Lr(i,e,t,n,s,r,o,a,l,c){i.getVertexPosition(a,Cr),i.getVertexPosition(l,Rr),i.getVertexPosition(c,Ir);let h=Uu(i,e,t,n,Cr,Rr,Ir,pc);if(h){let d=new B;ii.getBarycoord(pc,Cr,Rr,Ir,d),s&&(h.uv=ii.getInterpolatedAttribute(s,a,l,c,d,new Xe)),r&&(h.uv1=ii.getInterpolatedAttribute(r,a,l,c,d,new Xe)),o&&(h.normal=ii.getInterpolatedAttribute(o,a,l,c,d,new B),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new B,materialIndex:0};ii.getNormal(Cr,Rr,Ir,u.normal),h.face=u,h.barycoord=d}return h}var yn=class i extends Xt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],d=[],u=0,f=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Tt(c,3)),this.setAttribute("normal",new Tt(h,3)),this.setAttribute("uv",new Tt(d,2));function g(v,m,p,C,E,S,R,A,N,w,y){let M=S/N,L=R/w,V=S/2,Y=R/2,Q=A/2,ie=N+1,te=w+1,ge=0,Z=0,P=new B;for(let X=0;X<te;X++){let W=X*L-Y;for(let xe=0;xe<ie;xe++){let Re=xe*M-V;P[v]=Re*C,P[m]=W*E,P[p]=Q,c.push(P.x,P.y,P.z),P[v]=0,P[m]=0,P[p]=A>0?1:-1,h.push(P.x,P.y,P.z),d.push(xe/N),d.push(1-X/w),ge+=1}}for(let X=0;X<w;X++)for(let W=0;W<N;W++){let xe=u+W+ie*X,Re=u+W+ie*(X+1),ve=u+(W+1)+ie*(X+1),_e=u+(W+1)+ie*X;l.push(xe,Re,_e),l.push(Re,ve,_e),Z+=6}a.addGroup(f,Z,y),f+=Z,u+=ge}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function wi(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function zt(i){let e={};for(let t=0;t<i.length;t++){let n=wi(i[t]);for(let s in n)e[s]=n[s]}return e}function Nu(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function _l(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ot.workingColorSpace}var dh={clone:wi,merge:zt},Fu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ou=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,tn=class extends ai{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Fu,this.fragmentShader=Ou,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=wi(e.uniforms),this.uniformsGroups=Nu(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Fs=class extends Dt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ft,this.projectionMatrix=new ft,this.projectionMatrixInverse=new ft,this.coordinateSystem=xn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},ni=new B,mc=new Xe,gc=new Xe,$t=class extends Fs{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Ki*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Ts*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ki*2*Math.atan(Math.tan(Ts*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ni.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ni.x,ni.y).multiplyScalar(-e/ni.z),ni.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ni.x,ni.y).multiplyScalar(-e/ni.z)}getViewSize(e,t){return this.getViewBounds(e,mc,gc),t.subVectors(gc,mc)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Ts*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Wi=-90,Xi=1,Yr=class extends Dt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new $t(Wi,Xi,e,t);s.layers=this.layers,this.add(s);let r=new $t(Wi,Xi,e,t);r.layers=this.layers,this.add(r);let o=new $t(Wi,Xi,e,t);o.layers=this.layers,this.add(o);let a=new $t(Wi,Xi,e,t);a.layers=this.layers,this.add(a);let l=new $t(Wi,Xi,e,t);l.layers=this.layers,this.add(l);let c=new $t(Wi,Xi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===xn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Is)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(d,u,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Os=class extends Wt{constructor(e=[],t=bi,n,s,r,o,a,l,c,h){super(e,t,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Zr=class extends hn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Os(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new yn(5,5,5),r=new tn({name:"CubemapFromEquirect",uniforms:wi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:qt,blending:Gn});r.uniforms.tEquirect.value=t;let o=new yt(s,r),a=t.minFilter;return t.minFilter===hi&&(t.minFilter=Nt),new Yr(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}},kt=class extends Dt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Bu={type:"move"},es=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new kt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new kt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new kt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let v of e.hand.values()){let m=t.getJointPose(v,n),p=this._getHandJoint(c,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&u>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Bu)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new kt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}};var Mi=class extends Dt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new vn,this.environmentIntensity=1,this.environmentRotation=new vn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};var ts=class extends Wt{constructor(e=null,t=1,n=1,s,r,o,a,l,c=Kt,h=Kt,d,u){super(null,o,a,l,c,h,s,r,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ns=class extends bt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},qi=new ft,_c=new ft,Ur=[],xc=new Tn,ku=new ft,Ss=new yt,bs=new oi,Bs=class extends yt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ns(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,ku)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Tn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,qi),xc.copy(e.boundingBox).applyMatrix4(qi),this.boundingBox.union(xc)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new oi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,qi),bs.copy(e.boundingSphere).applyMatrix4(qi),this.boundingSphere.union(bs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(Ss.geometry=this.geometry,Ss.material=this.material,Ss.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),bs.copy(this.boundingSphere),bs.applyMatrix4(n),e.ray.intersectsSphere(bs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,qi),_c.multiplyMatrices(n,qi),Ss.matrixWorld=_c,Ss.raycast(e,Ur);for(let o=0,a=Ur.length;o<a;o++){let l=Ur[o];l.instanceId=r,l.object=this,t.push(l)}Ur.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new ns(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new ts(new Float32Array(s*this.count),s,this.count,Ao,Sn));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},ka=new B,zu=new B,Vu=new Ze,cn=class{constructor(e=new B(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=ka.subVectors(n,t).cross(zu.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(ka),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Vu.getNormalMatrix(e),s=this.coplanarPoint(ka).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},gi=new oi,Hu=new Xe(.5,.5),Nr=new B,is=class{constructor(e=new cn,t=new cn,n=new cn,s=new cn,r=new cn,o=new cn){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=xn,n=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],d=r[5],u=r[6],f=r[7],g=r[8],v=r[9],m=r[10],p=r[11],C=r[12],E=r[13],S=r[14],R=r[15];if(s[0].setComponents(c-o,f-h,p-g,R-C).normalize(),s[1].setComponents(c+o,f+h,p+g,R+C).normalize(),s[2].setComponents(c+a,f+d,p+v,R+E).normalize(),s[3].setComponents(c-a,f-d,p-v,R-E).normalize(),n)s[4].setComponents(l,u,m,S).normalize(),s[5].setComponents(c-l,f-u,p-m,R-S).normalize();else if(s[4].setComponents(c-l,f-u,p-m,R-S).normalize(),t===xn)s[5].setComponents(c+l,f+u,p+m,R+S).normalize();else if(t===Is)s[5].setComponents(l,u,m,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),gi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),gi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(gi)}intersectsSprite(e){gi.center.set(0,0,0);let t=Hu.distanceTo(e.center);return gi.radius=.7071067811865476+t,gi.applyMatrix4(e.matrixWorld),this.intersectsSphere(gi)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Nr.x=s.normal.x>0?e.max.x:e.min.x,Nr.y=s.normal.y>0?e.max.y:e.min.y,Nr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Nr)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Hn=class extends Wt{constructor(e,t,n,s,r,o,a,l,c){super(e,t,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},ks=class extends Wt{constructor(e,t,n=ui,s,r,o,a=Kt,l=Kt,c,h=$i,d=1){if(h!==$i&&h!==hs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:e,height:t,depth:d};super(u,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Qi(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},zs=class extends Wt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}};var Vs=class i extends Xt{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],u=[],f=[],g=0,v=[],m=n/2,p=0;C(),o===!1&&(e>0&&E(!0),t>0&&E(!1)),this.setIndex(h),this.setAttribute("position",new Tt(d,3)),this.setAttribute("normal",new Tt(u,3)),this.setAttribute("uv",new Tt(f,2));function C(){let S=new B,R=new B,A=0,N=(t-e)/n;for(let w=0;w<=r;w++){let y=[],M=w/r,L=M*(t-e)+e;for(let V=0;V<=s;V++){let Y=V/s,Q=Y*l+a,ie=Math.sin(Q),te=Math.cos(Q);R.x=L*ie,R.y=-M*n+m,R.z=L*te,d.push(R.x,R.y,R.z),S.set(ie,N,te).normalize(),u.push(S.x,S.y,S.z),f.push(Y,1-M),y.push(g++)}v.push(y)}for(let w=0;w<s;w++)for(let y=0;y<r;y++){let M=v[y][w],L=v[y+1][w],V=v[y+1][w+1],Y=v[y][w+1];(e>0||y!==0)&&(h.push(M,L,Y),A+=3),(t>0||y!==r-1)&&(h.push(L,V,Y),A+=3)}c.addGroup(p,A,0),p+=A}function E(S){let R=g,A=new Xe,N=new B,w=0,y=S===!0?e:t,M=S===!0?1:-1;for(let V=1;V<=s;V++)d.push(0,m*M,0),u.push(0,M,0),f.push(.5,.5),g++;let L=g;for(let V=0;V<=s;V++){let Q=V/s*l+a,ie=Math.cos(Q),te=Math.sin(Q);N.x=y*te,N.y=m*M,N.z=y*ie,d.push(N.x,N.y,N.z),u.push(0,M,0),A.x=ie*.5+.5,A.y=te*.5*M+.5,f.push(A.x,A.y),g++}for(let V=0;V<s;V++){let Y=R+V,Q=L+V;S===!0?h.push(Q,Q+1,Y):h.push(Q+1,Q,Y),w+=3}c.addGroup(p,w,S===!0?1:2),p+=w}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var un=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let h=n[s],u=n[s+1]-h,f=(o-h)/u;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new Xe:new B);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new B,s=[],r=[],o=[],a=new B,l=new ft;for(let f=0;f<=e;f++){let g=f/e;s[f]=this.getTangentAt(g,new B)}r[0]=new B,o[0]=new B;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),u<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(et(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(et(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Hs=class extends un{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new Xe){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*d+this.aX,c=u*d+f*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Jr=class extends Hs{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function xl(){let i=0,e=0,t=0,n=0;function s(r,o,a,l){i=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,d){let u=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+d)+(l-a)/d;u*=h,f*=h,s(o,a,u,f)},calc:function(r){let o=r*r,a=o*r;return i+e*r+t*o+n*a}}}var Fr=new B,za=new xl,Va=new xl,Ha=new xl,ss=class extends un{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new B){let n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(Fr.subVectors(s[0],s[1]).add(s[0]),c=Fr);let d=s[a%r],u=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Fr.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Fr),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(d),f),v=Math.pow(d.distanceToSquared(u),f),m=Math.pow(u.distanceToSquared(h),f);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),za.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,g,v,m),Va.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,g,v,m),Ha.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,g,v,m)}else this.curveType==="catmullrom"&&(za.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),Va.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),Ha.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return n.set(za.calc(l),Va.calc(l),Ha.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new B().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function vc(i,e,t,n,s){let r=(n-e)*.5,o=(s-t)*.5,a=i*i,l=i*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*i+t}function Gu(i,e){let t=1-i;return t*t*e}function Wu(i,e){return 2*(1-i)*i*e}function Xu(i,e){return i*i*e}function Es(i,e,t,n){return Gu(i,e)+Wu(i,t)+Xu(i,n)}function qu(i,e){let t=1-i;return t*t*t*e}function Yu(i,e){let t=1-i;return 3*t*t*i*e}function Zu(i,e){return 3*(1-i)*i*i*e}function Ju(i,e){return i*i*i*e}function As(i,e,t,n,s){return qu(i,e)+Yu(i,t)+Zu(i,n)+Ju(i,s)}var $r=class extends un{constructor(e=new Xe,t=new Xe,n=new Xe,s=new Xe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new Xe){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(As(e,s.x,r.x,o.x,a.x),As(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},rs=class extends un{constructor(e=new B,t=new B,n=new B,s=new B){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new B){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(As(e,s.x,r.x,o.x,a.x),As(e,s.y,r.y,o.y,a.y),As(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Kr=class extends un{constructor(e=new Xe,t=new Xe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Xe){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Xe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},jr=class extends un{constructor(e=new B,t=new B){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new B){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new B){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Qr=class extends un{constructor(e=new Xe,t=new Xe,n=new Xe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Xe){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Es(e,s.x,r.x,o.x),Es(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Gs=class extends un{constructor(e=new B,t=new B,n=new B){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new B){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Es(e,s.x,r.x,o.x),Es(e,s.y,r.y,o.y),Es(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},eo=class extends un{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Xe){let n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return n.set(vc(a,l.x,c.x,h.x,d.x),vc(a,l.y,c.y,h.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new Xe().fromArray(s))}return this}},$u=Object.freeze({__proto__:null,ArcCurve:Jr,CatmullRomCurve3:ss,CubicBezierCurve:$r,CubicBezierCurve3:rs,EllipseCurve:Hs,LineCurve:Kr,LineCurve3:jr,QuadraticBezierCurve:Qr,QuadraticBezierCurve3:Gs,SplineCurve:eo});var wn=class i extends Xt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,d=e/a,u=t/l,f=[],g=[],v=[],m=[];for(let p=0;p<h;p++){let C=p*u-o;for(let E=0;E<c;E++){let S=E*d-r;g.push(S,-C,0),v.push(0,0,1),m.push(E/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let C=0;C<a;C++){let E=C+c*p,S=C+c*(p+1),R=C+1+c*(p+1),A=C+1+c*p;f.push(E,S,A),f.push(S,R,A)}this.setIndex(f),this.setAttribute("position",new Tt(g,3)),this.setAttribute("normal",new Tt(v,3)),this.setAttribute("uv",new Tt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var Ws=class i extends Xt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],l=[],c=[],h=new B,d=new B,u=new B;for(let f=0;f<=n;f++)for(let g=0;g<=s;g++){let v=g/s*r,m=f/n*Math.PI*2;d.x=(e+t*Math.cos(m))*Math.cos(v),d.y=(e+t*Math.cos(m))*Math.sin(v),d.z=t*Math.sin(m),a.push(d.x,d.y,d.z),h.x=e*Math.cos(v),h.y=e*Math.sin(v),u.subVectors(d,h).normalize(),l.push(u.x,u.y,u.z),c.push(g/s),c.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=s;g++){let v=(s+1)*f+g-1,m=(s+1)*(f-1)+g-1,p=(s+1)*(f-1)+g,C=(s+1)*f+g;o.push(v,m,C),o.push(m,p,C)}this.setIndex(o),this.setAttribute("position",new Tt(a,3)),this.setAttribute("normal",new Tt(l,3)),this.setAttribute("uv",new Tt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var Xs=class i extends Xt{constructor(e=new Gs(new B(-1,-1,0),new B(-1,1,0),new B(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};let o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new B,l=new B,c=new Xe,h=new B,d=[],u=[],f=[],g=[];v(),this.setIndex(g),this.setAttribute("position",new Tt(d,3)),this.setAttribute("normal",new Tt(u,3)),this.setAttribute("uv",new Tt(f,2));function v(){for(let E=0;E<t;E++)m(E);m(r===!1?t:0),C(),p()}function m(E){h=e.getPointAt(E/t,h);let S=o.normals[E],R=o.binormals[E];for(let A=0;A<=s;A++){let N=A/s*Math.PI*2,w=Math.sin(N),y=-Math.cos(N);l.x=y*S.x+w*R.x,l.y=y*S.y+w*R.y,l.z=y*S.z+w*R.z,l.normalize(),u.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,d.push(a.x,a.y,a.z)}}function p(){for(let E=1;E<=t;E++)for(let S=1;S<=s;S++){let R=(s+1)*(E-1)+(S-1),A=(s+1)*E+(S-1),N=(s+1)*E+S,w=(s+1)*(E-1)+S;g.push(R,A,w),g.push(A,N,w)}}function C(){for(let E=0;E<=t;E++)for(let S=0;S<=s;S++)c.x=E/t,c.y=S/s,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new $u[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};var qs=class extends ai{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new $e(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new $e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=dl,this.normalScale=new Xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var to=class extends ai{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Qc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},no=class extends ai{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Or(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Ku(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Si=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},io=class extends Si{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Wa,endingEnd:Wa}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Xa:r=e,a=2*t-n;break;case qa:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Xa:o=e,l=2*n-t;break;case qa:o=1,l=n+s[1]-s[0];break;default:o=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,g=(n-t)/(s-t),v=g*g,m=v*g,p=-u*m+2*u*v-u*g,C=(1+u)*m+(-1.5-2*u)*v+(-.5+u)*g+1,E=(-1-f)*m+(1.5+f)*v+.5*g,S=f*m-f*v;for(let R=0;R!==a;++R)r[R]=p*o[h+R]+C*o[c+R]+E*o[l+R]+S*o[d+R];return r}},so=class extends Si{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(s-t),d=1-h;for(let u=0;u!==a;++u)r[u]=o[c+u]*d+o[l+u]*h;return r}},ro=class extends Si{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},nn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Or(t,this.TimeBufferType),this.values=Or(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Or(e.times,Array),values:Or(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new ro(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new so(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new io(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Cs:t=this.InterpolantFactoryMethodDiscrete;break;case Hr:t=this.InterpolantFactoryMethodLinear;break;case Br:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Cs;case this.InterpolantFactoryMethodLinear:return Hr;case this.InterpolantFactoryMethodSmooth:return Br}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&Ku(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Br,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(s)l=!0;else{let d=a*n,u=d-n,f=d+n;for(let g=0;g!==n;++g){let v=t[d+g];if(v!==t[u+g]||v!==t[f+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let d=a*n,u=o*n;for(let f=0;f!==n;++f)t[u+f]=t[d+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};nn.prototype.ValueTypeName="";nn.prototype.TimeBufferType=Float32Array;nn.prototype.ValueBufferType=Float32Array;nn.prototype.DefaultInterpolation=Hr;var li=class extends nn{constructor(e,t,n){super(e,t,n)}};li.prototype.ValueTypeName="bool";li.prototype.ValueBufferType=Array;li.prototype.DefaultInterpolation=Cs;li.prototype.InterpolantFactoryMethodLinear=void 0;li.prototype.InterpolantFactoryMethodSmooth=void 0;var oo=class extends nn{constructor(e,t,n,s){super(e,t,n,s)}};oo.prototype.ValueTypeName="color";var ao=class extends nn{constructor(e,t,n,s){super(e,t,n,s)}};ao.prototype.ValueTypeName="number";var lo=class extends Si{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(s-t),c=e*a;for(let h=c+a;c!==h;c+=4)Vn.slerpFlat(r,0,o,c-a,o,c,l);return r}},Ys=class extends nn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new lo(this.times,this.values,this.getValueSize(),e)}};Ys.prototype.ValueTypeName="quaternion";Ys.prototype.InterpolantFactoryMethodSmooth=void 0;var ci=class extends nn{constructor(e,t,n){super(e,t,n)}};ci.prototype.ValueTypeName="string";ci.prototype.ValueBufferType=Array;ci.prototype.DefaultInterpolation=Cs;ci.prototype.InterpolantFactoryMethodLinear=void 0;ci.prototype.InterpolantFactoryMethodSmooth=void 0;var co=class extends nn{constructor(e,t,n,s){super(e,t,n,s)}};co.prototype.ValueTypeName="vector";var ho=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let f=c[d],g=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},fh=new ho,uo=class{constructor(e){this.manager=e!==void 0?e:fh,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};uo.DEFAULT_MATERIAL_NAME="__DEFAULT";var Zs=class extends Dt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new $e(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Js=class extends Zs{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Dt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new $e(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Ga=new ft,yc=new B,Mc=new B,Ja=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Xe(512,512),this.mapType=Mn,this.map=null,this.mapPass=null,this.matrix=new ft,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new is,this._frameExtents=new Xe(1,1),this._viewportCount=1,this._viewports=[new _t(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;yc.setFromMatrixPosition(e.matrixWorld),t.position.copy(yc),Mc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Mc),t.updateMatrixWorld(),Ga.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ga,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ga)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var En=class extends Fs{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},$a=class extends Ja{constructor(){super(new En(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},os=class extends Zs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Dt.DEFAULT_UP),this.updateMatrix(),this.target=new Dt,this.shadow=new $a}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var fo=class extends $t{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var vl="\\[\\]\\.:\\/",ju=new RegExp("["+vl+"]","g"),yl="[^"+vl+"]",Qu="[^"+vl.replace("\\.","")+"]",ed=/((?:WC+[\/:])*)/.source.replace("WC",yl),td=/(WCOD+)?/.source.replace("WCOD",Qu),nd=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",yl),id=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",yl),sd=new RegExp("^"+ed+td+nd+id+"$"),rd=["material","materials","bones","map"],Ka=class{constructor(e,t,n){let s=n||gt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},gt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(ju,"")}static parseTrackName(e){let t=sd.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);rd.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};gt.Composite=Ka;gt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};gt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};gt.prototype.GetterByBindingType=[gt.prototype._getValue_direct,gt.prototype._getValue_array,gt.prototype._getValue_arrayElement,gt.prototype._getValue_toArray];gt.prototype.SetterByBindingTypeAndVersioning=[[gt.prototype._setValue_direct,gt.prototype._setValue_direct_setNeedsUpdate,gt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[gt.prototype._setValue_array,gt.prototype._setValue_array_setNeedsUpdate,gt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[gt.prototype._setValue_arrayElement,gt.prototype._setValue_arrayElement_setNeedsUpdate,gt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[gt.prototype._setValue_fromArray,gt.prototype._setValue_fromArray_setNeedsUpdate,gt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Yg=new Float32Array(1);function Ml(i,e,t,n){let s=od(n);switch(t){case cl:return i*e;case Ao:return i*e/s.components*s.byteLength;case Co:return i*e/s.components*s.byteLength;case ul:return i*e*2/s.components*s.byteLength;case Ro:return i*e*2/s.components*s.byteLength;case hl:return i*e*3/s.components*s.byteLength;case dn:return i*e*4/s.components*s.byteLength;case Io:return i*e*4/s.components*s.byteLength;case js:case Qs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case er:case tr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Do:case Uo:return Math.max(i,16)*Math.max(e,8)/4;case Po:case Lo:return Math.max(i,8)*Math.max(e,8)/2;case No:case Fo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Oo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Bo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ko:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case zo:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Vo:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Ho:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Go:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Wo:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Xo:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case qo:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Yo:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Zo:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Jo:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case $o:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Ko:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case jo:case Qo:case ea:return Math.ceil(i/4)*Math.ceil(e/4)*16;case ta:case na:return Math.ceil(i/4)*Math.ceil(e/4)*8;case ia:case sa:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function od(i){switch(i){case Mn:case rl:return{byteLength:1,components:1};case as:case ol:case ls:return{byteLength:2,components:1};case wo:case Eo:return{byteLength:2,components:4};case ui:case To:case Sn:return{byteLength:4,components:1};case al:case ll:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function Oh(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function fd(i){let e=new WeakMap;function t(a,l){let c=a.array,h=a.usage,d=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){let h=l.array,d=l.updateRanges;if(i.bindBuffer(c,a),d.length===0)i.bufferSubData(c,0,h);else{d.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<d.length;f++){let g=d[u],v=d[f];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++u,d[u]=v)}d.length=u+1;for(let f=0,g=d.length;f<g;f++){let v=d[f];i.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var pd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,md=`#ifdef USE_ALPHAHASH
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
#endif`,gd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,_d=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,vd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,yd=`#ifdef USE_AOMAP
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
#endif`,Md=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Sd=`#ifdef USE_BATCHING
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
#endif`,bd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Td=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,wd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ed=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ad=`#ifdef USE_IRIDESCENCE
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
#endif`,Cd=`#ifdef USE_BUMPMAP
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
#endif`,Rd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Id=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Pd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Dd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ld=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ud=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Nd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Fd=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Od=`#define PI 3.141592653589793
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
} // validated`,Bd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,kd=`vec3 transformedNormal = objectNormal;
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
#endif`,zd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Vd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Hd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Gd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Wd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Xd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,qd=`#ifdef USE_ENVMAP
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
#endif`,Yd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Zd=`#ifdef USE_ENVMAP
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
#endif`,Jd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,$d=`#ifdef USE_ENVMAP
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
#endif`,Kd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,jd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Qd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ef=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,tf=`#ifdef USE_GRADIENTMAP
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
}`,nf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,sf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,rf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,of=`uniform bool receiveShadow;
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
#endif`,af=`#ifdef USE_ENVMAP
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
#endif`,lf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,cf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,hf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,uf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,df=`PhysicalMaterial material;
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
#endif`,ff=`struct PhysicalMaterial {
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
}`,pf=`
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
#endif`,mf=`#if defined( RE_IndirectDiffuse )
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
#endif`,gf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,_f=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,xf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Mf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Sf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,bf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Tf=`#if defined( USE_POINTS_UV )
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
#endif`,wf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ef=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Af=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Cf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Rf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,If=`#ifdef USE_MORPHTARGETS
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
#endif`,Pf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Df=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Lf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Uf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Nf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ff=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Of=`#ifdef USE_NORMALMAP
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
#endif`,Bf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,kf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,zf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Vf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Hf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Gf=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Wf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Xf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,qf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Yf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Zf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Jf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,$f=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Kf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,jf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Qf=`float getShadowMask() {
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
}`,ep=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,tp=`#ifdef USE_SKINNING
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
#endif`,np=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ip=`#ifdef USE_SKINNING
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
#endif`,sp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,rp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,op=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ap=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,lp=`#ifdef USE_TRANSMISSION
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
#endif`,cp=`#ifdef USE_TRANSMISSION
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
#endif`,hp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,up=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,pp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,mp=`uniform sampler2D t2D;
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
}`,gp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_p=`#ifdef ENVMAP_TYPE_CUBE
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
}`,xp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yp=`#include <common>
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
}`,Mp=`#if DEPTH_PACKING == 3200
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
}`,Sp=`#define DISTANCE
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
}`,bp=`#define DISTANCE
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
}`,Tp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,wp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ep=`uniform float scale;
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
}`,Ap=`uniform vec3 diffuse;
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
}`,Cp=`#include <common>
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
}`,Rp=`uniform vec3 diffuse;
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
}`,Ip=`#define LAMBERT
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
}`,Pp=`#define LAMBERT
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
}`,Dp=`#define MATCAP
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
}`,Lp=`#define MATCAP
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
}`,Up=`#define NORMAL
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
}`,Np=`#define NORMAL
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
}`,Fp=`#define PHONG
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
}`,Op=`#define PHONG
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
}`,Bp=`#define STANDARD
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
}`,kp=`#define STANDARD
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
}`,zp=`#define TOON
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
}`,Vp=`#define TOON
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
}`,Hp=`uniform float size;
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
}`,Gp=`uniform vec3 diffuse;
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
}`,Wp=`#include <common>
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
}`,Xp=`uniform vec3 color;
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
}`,qp=`uniform float rotation;
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
}`,Yp=`uniform vec3 diffuse;
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
}`,Ke={alphahash_fragment:pd,alphahash_pars_fragment:md,alphamap_fragment:gd,alphamap_pars_fragment:_d,alphatest_fragment:xd,alphatest_pars_fragment:vd,aomap_fragment:yd,aomap_pars_fragment:Md,batching_pars_vertex:Sd,batching_vertex:bd,begin_vertex:Td,beginnormal_vertex:wd,bsdfs:Ed,iridescence_fragment:Ad,bumpmap_pars_fragment:Cd,clipping_planes_fragment:Rd,clipping_planes_pars_fragment:Id,clipping_planes_pars_vertex:Pd,clipping_planes_vertex:Dd,color_fragment:Ld,color_pars_fragment:Ud,color_pars_vertex:Nd,color_vertex:Fd,common:Od,cube_uv_reflection_fragment:Bd,defaultnormal_vertex:kd,displacementmap_pars_vertex:zd,displacementmap_vertex:Vd,emissivemap_fragment:Hd,emissivemap_pars_fragment:Gd,colorspace_fragment:Wd,colorspace_pars_fragment:Xd,envmap_fragment:qd,envmap_common_pars_fragment:Yd,envmap_pars_fragment:Zd,envmap_pars_vertex:Jd,envmap_physical_pars_fragment:af,envmap_vertex:$d,fog_vertex:Kd,fog_pars_vertex:jd,fog_fragment:Qd,fog_pars_fragment:ef,gradientmap_pars_fragment:tf,lightmap_pars_fragment:nf,lights_lambert_fragment:sf,lights_lambert_pars_fragment:rf,lights_pars_begin:of,lights_toon_fragment:lf,lights_toon_pars_fragment:cf,lights_phong_fragment:hf,lights_phong_pars_fragment:uf,lights_physical_fragment:df,lights_physical_pars_fragment:ff,lights_fragment_begin:pf,lights_fragment_maps:mf,lights_fragment_end:gf,logdepthbuf_fragment:_f,logdepthbuf_pars_fragment:xf,logdepthbuf_pars_vertex:vf,logdepthbuf_vertex:yf,map_fragment:Mf,map_pars_fragment:Sf,map_particle_fragment:bf,map_particle_pars_fragment:Tf,metalnessmap_fragment:wf,metalnessmap_pars_fragment:Ef,morphinstance_vertex:Af,morphcolor_vertex:Cf,morphnormal_vertex:Rf,morphtarget_pars_vertex:If,morphtarget_vertex:Pf,normal_fragment_begin:Df,normal_fragment_maps:Lf,normal_pars_fragment:Uf,normal_pars_vertex:Nf,normal_vertex:Ff,normalmap_pars_fragment:Of,clearcoat_normal_fragment_begin:Bf,clearcoat_normal_fragment_maps:kf,clearcoat_pars_fragment:zf,iridescence_pars_fragment:Vf,opaque_fragment:Hf,packing:Gf,premultiplied_alpha_fragment:Wf,project_vertex:Xf,dithering_fragment:qf,dithering_pars_fragment:Yf,roughnessmap_fragment:Zf,roughnessmap_pars_fragment:Jf,shadowmap_pars_fragment:$f,shadowmap_pars_vertex:Kf,shadowmap_vertex:jf,shadowmask_pars_fragment:Qf,skinbase_vertex:ep,skinning_pars_vertex:tp,skinning_vertex:np,skinnormal_vertex:ip,specularmap_fragment:sp,specularmap_pars_fragment:rp,tonemapping_fragment:op,tonemapping_pars_fragment:ap,transmission_fragment:lp,transmission_pars_fragment:cp,uv_pars_fragment:hp,uv_pars_vertex:up,uv_vertex:dp,worldpos_vertex:fp,background_vert:pp,background_frag:mp,backgroundCube_vert:gp,backgroundCube_frag:_p,cube_vert:xp,cube_frag:vp,depth_vert:yp,depth_frag:Mp,distanceRGBA_vert:Sp,distanceRGBA_frag:bp,equirect_vert:Tp,equirect_frag:wp,linedashed_vert:Ep,linedashed_frag:Ap,meshbasic_vert:Cp,meshbasic_frag:Rp,meshlambert_vert:Ip,meshlambert_frag:Pp,meshmatcap_vert:Dp,meshmatcap_frag:Lp,meshnormal_vert:Up,meshnormal_frag:Np,meshphong_vert:Fp,meshphong_frag:Op,meshphysical_vert:Bp,meshphysical_frag:kp,meshtoon_vert:zp,meshtoon_frag:Vp,points_vert:Hp,points_frag:Gp,shadow_vert:Wp,shadow_frag:Xp,sprite_vert:qp,sprite_frag:Yp},Ue={common:{diffuse:{value:new $e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ze}},envmap:{envMap:{value:null},envMapRotation:{value:new Ze},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ze},normalScale:{value:new Xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new $e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0},uvTransform:{value:new Ze}},sprite:{diffuse:{value:new $e(16777215)},opacity:{value:1},center:{value:new Xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}}},Rn={basic:{uniforms:zt([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.fog]),vertexShader:Ke.meshbasic_vert,fragmentShader:Ke.meshbasic_frag},lambert:{uniforms:zt([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new $e(0)}}]),vertexShader:Ke.meshlambert_vert,fragmentShader:Ke.meshlambert_frag},phong:{uniforms:zt([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new $e(0)},specular:{value:new $e(1118481)},shininess:{value:30}}]),vertexShader:Ke.meshphong_vert,fragmentShader:Ke.meshphong_frag},standard:{uniforms:zt([Ue.common,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.roughnessmap,Ue.metalnessmap,Ue.fog,Ue.lights,{emissive:{value:new $e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag},toon:{uniforms:zt([Ue.common,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.gradientmap,Ue.fog,Ue.lights,{emissive:{value:new $e(0)}}]),vertexShader:Ke.meshtoon_vert,fragmentShader:Ke.meshtoon_frag},matcap:{uniforms:zt([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,{matcap:{value:null}}]),vertexShader:Ke.meshmatcap_vert,fragmentShader:Ke.meshmatcap_frag},points:{uniforms:zt([Ue.points,Ue.fog]),vertexShader:Ke.points_vert,fragmentShader:Ke.points_frag},dashed:{uniforms:zt([Ue.common,Ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ke.linedashed_vert,fragmentShader:Ke.linedashed_frag},depth:{uniforms:zt([Ue.common,Ue.displacementmap]),vertexShader:Ke.depth_vert,fragmentShader:Ke.depth_frag},normal:{uniforms:zt([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,{opacity:{value:1}}]),vertexShader:Ke.meshnormal_vert,fragmentShader:Ke.meshnormal_frag},sprite:{uniforms:zt([Ue.sprite,Ue.fog]),vertexShader:Ke.sprite_vert,fragmentShader:Ke.sprite_frag},background:{uniforms:{uvTransform:{value:new Ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ke.background_vert,fragmentShader:Ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ze}},vertexShader:Ke.backgroundCube_vert,fragmentShader:Ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ke.cube_vert,fragmentShader:Ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ke.equirect_vert,fragmentShader:Ke.equirect_frag},distanceRGBA:{uniforms:zt([Ue.common,Ue.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ke.distanceRGBA_vert,fragmentShader:Ke.distanceRGBA_frag},shadow:{uniforms:zt([Ue.lights,Ue.fog,{color:{value:new $e(0)},opacity:{value:1}}]),vertexShader:Ke.shadow_vert,fragmentShader:Ke.shadow_frag}};Rn.physical={uniforms:zt([Rn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ze},clearcoatNormalScale:{value:new Xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ze},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ze},sheen:{value:0},sheenColor:{value:new $e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ze},transmissionSamplerSize:{value:new Xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ze},attenuationDistance:{value:0},attenuationColor:{value:new $e(0)},specularColor:{value:new $e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ze},anisotropyVector:{value:new Xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ze}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag};var ra={r:0,b:0,g:0},Ei=new vn,Zp=new ft;function Jp(i,e,t,n,s,r,o){let a=new $e(0),l=r===!0?0:1,c,h,d=null,u=0,f=null;function g(E){let S=E.isScene===!0?E.background:null;return S&&S.isTexture&&(S=(E.backgroundBlurriness>0?t:e).get(S)),S}function v(E){let S=!1,R=g(E);R===null?p(a,l):R&&R.isColor&&(p(R,1),S=!0);let A=i.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(E,S){let R=g(S);R&&(R.isCubeTexture||R.mapping===$s)?(h===void 0&&(h=new yt(new yn(1,1,1),new tn({name:"BackgroundCubeMaterial",uniforms:wi(Rn.backgroundCube.uniforms),vertexShader:Rn.backgroundCube.vertexShader,fragmentShader:Rn.backgroundCube.fragmentShader,side:qt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,N,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Ei.copy(S.backgroundRotation),Ei.x*=-1,Ei.y*=-1,Ei.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(Ei.y*=-1,Ei.z*=-1),h.material.uniforms.envMap.value=R,h.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Zp.makeRotationFromEuler(Ei)),h.material.toneMapped=ot.getTransfer(R.colorSpace)!==ut,(d!==R||u!==R.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,d=R,u=R.version,f=i.toneMapping),h.layers.enableAll(),E.unshift(h,h.geometry,h.material,0,0,null)):R&&R.isTexture&&(c===void 0&&(c=new yt(new wn(2,2),new tn({name:"BackgroundMaterial",uniforms:wi(Rn.background.uniforms),vertexShader:Rn.background.vertexShader,fragmentShader:Rn.background.fragmentShader,side:kn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=R,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=ot.getTransfer(R.colorSpace)!==ut,R.matrixAutoUpdate===!0&&R.updateMatrix(),c.material.uniforms.uvTransform.value.copy(R.matrix),(d!==R||u!==R.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,d=R,u=R.version,f=i.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function p(E,S){E.getRGB(ra,_l(i)),n.buffers.color.setClear(ra.r,ra.g,ra.b,S,o)}function C(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(E,S=1){a.set(E),l=S,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,p(a,l)},render:v,addToRenderList:m,dispose:C}}function $p(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,o=!1;function a(M,L,V,Y,Q){let ie=!1,te=d(Y,V,L);r!==te&&(r=te,c(r.object)),ie=f(M,Y,V,Q),ie&&g(M,Y,V,Q),Q!==null&&e.update(Q,i.ELEMENT_ARRAY_BUFFER),(ie||o)&&(o=!1,S(M,L,V,Y),Q!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(Q).buffer))}function l(){return i.createVertexArray()}function c(M){return i.bindVertexArray(M)}function h(M){return i.deleteVertexArray(M)}function d(M,L,V){let Y=V.wireframe===!0,Q=n[M.id];Q===void 0&&(Q={},n[M.id]=Q);let ie=Q[L.id];ie===void 0&&(ie={},Q[L.id]=ie);let te=ie[Y];return te===void 0&&(te=u(l()),ie[Y]=te),te}function u(M){let L=[],V=[],Y=[];for(let Q=0;Q<t;Q++)L[Q]=0,V[Q]=0,Y[Q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:V,attributeDivisors:Y,object:M,attributes:{},index:null}}function f(M,L,V,Y){let Q=r.attributes,ie=L.attributes,te=0,ge=V.getAttributes();for(let Z in ge)if(ge[Z].location>=0){let X=Q[Z],W=ie[Z];if(W===void 0&&(Z==="instanceMatrix"&&M.instanceMatrix&&(W=M.instanceMatrix),Z==="instanceColor"&&M.instanceColor&&(W=M.instanceColor)),X===void 0||X.attribute!==W||W&&X.data!==W.data)return!0;te++}return r.attributesNum!==te||r.index!==Y}function g(M,L,V,Y){let Q={},ie=L.attributes,te=0,ge=V.getAttributes();for(let Z in ge)if(ge[Z].location>=0){let X=ie[Z];X===void 0&&(Z==="instanceMatrix"&&M.instanceMatrix&&(X=M.instanceMatrix),Z==="instanceColor"&&M.instanceColor&&(X=M.instanceColor));let W={};W.attribute=X,X&&X.data&&(W.data=X.data),Q[Z]=W,te++}r.attributes=Q,r.attributesNum=te,r.index=Y}function v(){let M=r.newAttributes;for(let L=0,V=M.length;L<V;L++)M[L]=0}function m(M){p(M,0)}function p(M,L){let V=r.newAttributes,Y=r.enabledAttributes,Q=r.attributeDivisors;V[M]=1,Y[M]===0&&(i.enableVertexAttribArray(M),Y[M]=1),Q[M]!==L&&(i.vertexAttribDivisor(M,L),Q[M]=L)}function C(){let M=r.newAttributes,L=r.enabledAttributes;for(let V=0,Y=L.length;V<Y;V++)L[V]!==M[V]&&(i.disableVertexAttribArray(V),L[V]=0)}function E(M,L,V,Y,Q,ie,te){te===!0?i.vertexAttribIPointer(M,L,V,Q,ie):i.vertexAttribPointer(M,L,V,Y,Q,ie)}function S(M,L,V,Y){v();let Q=Y.attributes,ie=V.getAttributes(),te=L.defaultAttributeValues;for(let ge in ie){let Z=ie[ge];if(Z.location>=0){let P=Q[ge];if(P===void 0&&(ge==="instanceMatrix"&&M.instanceMatrix&&(P=M.instanceMatrix),ge==="instanceColor"&&M.instanceColor&&(P=M.instanceColor)),P!==void 0){let X=P.normalized,W=P.itemSize,xe=e.get(P);if(xe===void 0)continue;let Re=xe.buffer,ve=xe.type,_e=xe.bytesPerElement,U=ve===i.INT||ve===i.UNSIGNED_INT||P.gpuType===To;if(P.isInterleavedBufferAttribute){let O=P.data,j=O.stride,Ee=P.offset;if(O.isInstancedInterleavedBuffer){for(let J=0;J<Z.locationSize;J++)p(Z.location+J,O.meshPerAttribute);M.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=O.meshPerAttribute*O.count)}else for(let J=0;J<Z.locationSize;J++)m(Z.location+J);i.bindBuffer(i.ARRAY_BUFFER,Re);for(let J=0;J<Z.locationSize;J++)E(Z.location+J,W/Z.locationSize,ve,X,j*_e,(Ee+W/Z.locationSize*J)*_e,U)}else{if(P.isInstancedBufferAttribute){for(let O=0;O<Z.locationSize;O++)p(Z.location+O,P.meshPerAttribute);M.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=P.meshPerAttribute*P.count)}else for(let O=0;O<Z.locationSize;O++)m(Z.location+O);i.bindBuffer(i.ARRAY_BUFFER,Re);for(let O=0;O<Z.locationSize;O++)E(Z.location+O,W/Z.locationSize,ve,X,W*_e,W/Z.locationSize*O*_e,U)}}else if(te!==void 0){let X=te[ge];if(X!==void 0)switch(X.length){case 2:i.vertexAttrib2fv(Z.location,X);break;case 3:i.vertexAttrib3fv(Z.location,X);break;case 4:i.vertexAttrib4fv(Z.location,X);break;default:i.vertexAttrib1fv(Z.location,X)}}}}C()}function R(){w();for(let M in n){let L=n[M];for(let V in L){let Y=L[V];for(let Q in Y)h(Y[Q].object),delete Y[Q];delete L[V]}delete n[M]}}function A(M){if(n[M.id]===void 0)return;let L=n[M.id];for(let V in L){let Y=L[V];for(let Q in Y)h(Y[Q].object),delete Y[Q];delete L[V]}delete n[M.id]}function N(M){for(let L in n){let V=n[L];if(V[M.id]===void 0)continue;let Y=V[M.id];for(let Q in Y)h(Y[Q].object),delete Y[Q];delete V[M.id]}}function w(){y(),o=!0,r!==s&&(r=s,c(r.object))}function y(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:w,resetDefaultState:y,dispose:R,releaseStatesOfGeometry:A,releaseStatesOfProgram:N,initAttributes:v,enableAttribute:m,disableUnusedAttributes:C}}function Kp(i,e,t){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),t.update(h,n,1)}function o(c,h,d){d!==0&&(i.drawArraysInstanced(n,c,h,d),t.update(h,n,d))}function a(c,h,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,d);let f=0;for(let g=0;g<d;g++)f+=h[g];t.update(f,n,1)}function l(c,h,d,u){if(d===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)o(c[g],h[g],u[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,u,0,d);let g=0;for(let v=0;v<d;v++)g+=h[v]*u[v];t.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function jp(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let N=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(N){return!(N!==dn&&n.convert(N)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(N){let w=N===ls&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(N!==Mn&&n.convert(N)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&N!==Sn&&!w)}function l(N){if(N==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";N="mediump"}return N==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),C=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),R=g>0,A=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:C,maxVaryings:E,maxFragmentUniforms:S,vertexTextures:R,maxSamples:A}}function Qp(i){let e=this,t=null,n=0,s=!1,r=!1,o=new cn,a=new Ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||n!==0||s;return s=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,f){let g=d.clippingPlanes,v=d.clipIntersection,m=d.clipShadows,p=i.get(d);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let C=r?0:n,E=C*4,S=p.clippingState||null;l.value=S,S=h(g,u,E,f);for(let R=0;R!==E;++R)S[R]=t[R];p.clippingState=S,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=C}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,u,f,g){let v=d!==null?d.length:0,m=null;if(v!==0){if(m=l.value,g!==!0||m===null){let p=f+v*4,C=u.matrixWorldInverse;a.getNormalMatrix(C),(m===null||m.length<p)&&(m=new Float32Array(p));for(let E=0,S=f;E!==v;++E,S+=4)o.copy(d[E]).applyMatrix4(C,a),o.normal.toArray(m,S),m[S+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function em(i){let e=new WeakMap;function t(o,a){return a===Mo?o.mapping=bi:a===So&&(o.mapping=Ti),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Mo||a===So)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Zr(l.height);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var fs=4,ph=[.125,.215,.35,.446,.526,.582],Ri=20,Sl=new En,mh=new $e,bl=null,Tl=0,wl=0,El=!1,Ci=(1+Math.sqrt(5))/2,ds=1/Ci,gh=[new B(-Ci,ds,0),new B(Ci,ds,0),new B(-ds,0,Ci),new B(ds,0,Ci),new B(0,Ci,-ds),new B(0,Ci,ds),new B(-1,1,-1),new B(1,1,-1),new B(-1,1,1),new B(1,1,1)],tm=new B,la=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100,r={}){let{size:o=256,position:a=tm}=r;bl=this._renderer.getRenderTarget(),Tl=this._renderer.getActiveCubeFace(),wl=this._renderer.getActiveMipmapLevel(),El=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=vh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=xh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(bl,Tl,wl),this._renderer.xr.enabled=El,e.scissorTest=!1,oa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===bi||e.mapping===Ti?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),bl=this._renderer.getRenderTarget(),Tl=this._renderer.getActiveCubeFace(),wl=this._renderer.getActiveMipmapLevel(),El=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Nt,minFilter:Nt,generateMipmaps:!1,type:ls,format:dn,colorSpace:yi,depthBuffer:!1},s=_h(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=_h(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=nm(r)),this._blurMaterial=im(r,e,t)}return s}_compileMaterial(e){let t=new yt(this._lodPlanes[0],e);this._renderer.compile(t,Sl)}_sceneToCubeUV(e,t,n,s,r){let l=new $t(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(mh),d.toneMapping=Wn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null));let v=new en({name:"PMREM.Background",side:qt,depthWrite:!1,depthTest:!1}),m=new yt(new yn,v),p=!1,C=e.background;C?C.isColor&&(v.color.copy(C),e.background=null,p=!0):(v.color.copy(mh),p=!0);for(let E=0;E<6;E++){let S=E%3;S===0?(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[E],r.y,r.z)):S===1?(l.up.set(0,0,c[E]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[E],r.z)):(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[E]));let R=this._cubeSize;oa(s,S*R,E>2?R:0,R,R),d.setRenderTarget(s),p&&d.render(m,l),d.render(e,l)}m.geometry.dispose(),m.material.dispose(),d.toneMapping=f,d.autoClear=u,e.background=C}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===bi||e.mapping===Ti;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=vh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=xh());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new yt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;oa(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Sl)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=gh[(s-r-1)%gh.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,d=new yt(this._lodPlanes[s],c),u=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Ri-1),v=r/g,m=isFinite(r)?1+Math.floor(h*v):Ri;m>Ri&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ri}`);let p=[],C=0;for(let N=0;N<Ri;++N){let w=N/v,y=Math.exp(-w*w/2);p.push(y),N===0?C+=y:N<m&&(C+=2*y)}for(let N=0;N<p.length;N++)p[N]=p[N]/C;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=p,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);let{_lodMax:E}=this;u.dTheta.value=g,u.mipInt.value=E-n;let S=this._sizeLods[s],R=3*S*(s>E-fs?s-E+fs:0),A=4*(this._cubeSize-S);oa(t,R,A,3*S,2*S),l.setRenderTarget(t),l.render(d,Sl)}};function nm(i){let e=[],t=[],n=[],s=i,r=i-fs+1+ph.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let l=1/a;o>i-fs?l=ph[o-i+fs-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,g=6,v=3,m=2,p=1,C=new Float32Array(v*g*f),E=new Float32Array(m*g*f),S=new Float32Array(p*g*f);for(let A=0;A<f;A++){let N=A%3*2/3-1,w=A>2?0:-1,y=[N,w,0,N+2/3,w,0,N+2/3,w+1,0,N,w,0,N+2/3,w+1,0,N,w+1,0];C.set(y,v*g*A),E.set(u,m*g*A);let M=[A,A,A,A,A,A];S.set(M,p*g*A)}let R=new Xt;R.setAttribute("position",new bt(C,v)),R.setAttribute("uv",new bt(E,m)),R.setAttribute("faceIndex",new bt(S,p)),e.push(R),s>fs&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function _h(i,e,t){let n=new hn(i,e,t);return n.texture.mapping=$s,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function oa(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function im(i,e,t){let n=new Float32Array(Ri),s=new B(0,1,0);return new tn({name:"SphericalGaussianBlur",defines:{n:Ri,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Fl(),fragmentShader:`

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
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function xh(){return new tn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Fl(),fragmentShader:`

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
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function vh(){return new tn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Fl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function Fl(){return`

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
	`}function sm(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===Mo||l===So,h=l===bi||l===Ti;if(c||h){let d=e.get(a),u=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==u)return t===null&&(t=new la(i)),d=c?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{let f=a.image;return c&&f&&f.height>0||h&&f&&s(f)?(t===null&&(t=new la(i)),d=c?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function rm(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&ji("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function om(i,e,t,n){let s={},r=new WeakMap;function o(d){let u=d.target;u.index!==null&&e.remove(u.index);for(let g in u.attributes)e.remove(u.attributes[g]);u.removeEventListener("dispose",o),delete s[u.id];let f=r.get(u);f&&(e.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function a(d,u){return s[u.id]===!0||(u.addEventListener("dispose",o),s[u.id]=!0,t.memory.geometries++),u}function l(d){let u=d.attributes;for(let f in u)e.update(u[f],i.ARRAY_BUFFER)}function c(d){let u=[],f=d.index,g=d.attributes.position,v=0;if(f!==null){let C=f.array;v=f.version;for(let E=0,S=C.length;E<S;E+=3){let R=C[E+0],A=C[E+1],N=C[E+2];u.push(R,A,A,N,N,R)}}else if(g!==void 0){let C=g.array;v=g.version;for(let E=0,S=C.length/3-1;E<S;E+=3){let R=E+0,A=E+1,N=E+2;u.push(R,A,A,N,N,R)}}else return;let m=new(gl(u)?Ns:Us)(u,1);m.version=v;let p=r.get(d);p&&e.remove(p),r.set(d,m)}function h(d){let u=r.get(d);if(u){let f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function am(i,e,t){let n;function s(u){n=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function l(u,f){i.drawElements(n,f,r,u*o),t.update(f,n,1)}function c(u,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,u*o,g),t.update(f,n,g))}function h(u,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,u,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,n,1)}function d(u,f,g,v){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<u.length;p++)c(u[p]/o,f[p],v[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,u,0,v,0,g);let p=0;for(let C=0;C<g;C++)p+=f[C]*v[C];t.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function lm(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function cm(i,e,t){let n=new WeakMap,s=new _t;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0,u=n.get(a);if(u===void 0||u.count!==d){let y=function(){N.dispose(),n.delete(a),a.removeEventListener("dispose",y)};u!==void 0&&u.texture.dispose();let f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],C=a.morphAttributes.color||[],E=0;f===!0&&(E=1),g===!0&&(E=2),v===!0&&(E=3);let S=a.attributes.position.count*E,R=1;S>e.maxTextureSize&&(R=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);let A=new Float32Array(S*R*4*d),N=new Ds(A,S,R,d);N.type=Sn,N.needsUpdate=!0;let w=E*4;for(let M=0;M<d;M++){let L=m[M],V=p[M],Y=C[M],Q=S*R*4*M;for(let ie=0;ie<L.count;ie++){let te=ie*w;f===!0&&(s.fromBufferAttribute(L,ie),A[Q+te+0]=s.x,A[Q+te+1]=s.y,A[Q+te+2]=s.z,A[Q+te+3]=0),g===!0&&(s.fromBufferAttribute(V,ie),A[Q+te+4]=s.x,A[Q+te+5]=s.y,A[Q+te+6]=s.z,A[Q+te+7]=0),v===!0&&(s.fromBufferAttribute(Y,ie),A[Q+te+8]=s.x,A[Q+te+9]=s.y,A[Q+te+10]=s.z,A[Q+te+11]=Y.itemSize===4?s.w:1)}}u={count:d,texture:N,size:new Xe(S,R)},n.set(a,u),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let f=0;for(let v=0;v<c.length;v++)f+=c[v];let g=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function hm(i,e,t,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,d=e.get(l,h);if(s.get(d)!==c&&(e.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let u=l.skeleton;s.get(u)!==c&&(u.update(),s.set(u,c))}return d}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}var Bh=new Wt,yh=new ks(1,1),kh=new Ds,zh=new Xr,Vh=new Os,Mh=[],Sh=[],bh=new Float32Array(16),Th=new Float32Array(9),wh=new Float32Array(4);function ms(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Mh[s];if(r===void 0&&(r=new Float32Array(s),Mh[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function Et(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function At(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function ha(i,e){let t=Sh[e];t===void 0&&(t=new Int32Array(e),Sh[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function um(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function dm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;i.uniform2fv(this.addr,e),At(t,e)}}function fm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Et(t,e))return;i.uniform3fv(this.addr,e),At(t,e)}}function pm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;i.uniform4fv(this.addr,e),At(t,e)}}function mm(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Et(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),At(t,e)}else{if(Et(t,n))return;wh.set(n),i.uniformMatrix2fv(this.addr,!1,wh),At(t,n)}}function gm(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Et(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),At(t,e)}else{if(Et(t,n))return;Th.set(n),i.uniformMatrix3fv(this.addr,!1,Th),At(t,n)}}function _m(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Et(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),At(t,e)}else{if(Et(t,n))return;bh.set(n),i.uniformMatrix4fv(this.addr,!1,bh),At(t,n)}}function xm(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function vm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;i.uniform2iv(this.addr,e),At(t,e)}}function ym(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Et(t,e))return;i.uniform3iv(this.addr,e),At(t,e)}}function Mm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;i.uniform4iv(this.addr,e),At(t,e)}}function Sm(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function bm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;i.uniform2uiv(this.addr,e),At(t,e)}}function Tm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Et(t,e))return;i.uniform3uiv(this.addr,e),At(t,e)}}function wm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;i.uniform4uiv(this.addr,e),At(t,e)}}function Em(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(yh.compareFunction=fl,r=yh):r=Bh,t.setTexture2D(e||r,s)}function Am(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||zh,s)}function Cm(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Vh,s)}function Rm(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||kh,s)}function Im(i){switch(i){case 5126:return um;case 35664:return dm;case 35665:return fm;case 35666:return pm;case 35674:return mm;case 35675:return gm;case 35676:return _m;case 5124:case 35670:return xm;case 35667:case 35671:return vm;case 35668:case 35672:return ym;case 35669:case 35673:return Mm;case 5125:return Sm;case 36294:return bm;case 36295:return Tm;case 36296:return wm;case 35678:case 36198:case 36298:case 36306:case 35682:return Em;case 35679:case 36299:case 36307:return Am;case 35680:case 36300:case 36308:case 36293:return Cm;case 36289:case 36303:case 36311:case 36292:return Rm}}function Pm(i,e){i.uniform1fv(this.addr,e)}function Dm(i,e){let t=ms(e,this.size,2);i.uniform2fv(this.addr,t)}function Lm(i,e){let t=ms(e,this.size,3);i.uniform3fv(this.addr,t)}function Um(i,e){let t=ms(e,this.size,4);i.uniform4fv(this.addr,t)}function Nm(i,e){let t=ms(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Fm(i,e){let t=ms(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Om(i,e){let t=ms(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Bm(i,e){i.uniform1iv(this.addr,e)}function km(i,e){i.uniform2iv(this.addr,e)}function zm(i,e){i.uniform3iv(this.addr,e)}function Vm(i,e){i.uniform4iv(this.addr,e)}function Hm(i,e){i.uniform1uiv(this.addr,e)}function Gm(i,e){i.uniform2uiv(this.addr,e)}function Wm(i,e){i.uniform3uiv(this.addr,e)}function Xm(i,e){i.uniform4uiv(this.addr,e)}function qm(i,e,t){let n=this.cache,s=e.length,r=ha(t,s);Et(n,r)||(i.uniform1iv(this.addr,r),At(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Bh,r[o])}function Ym(i,e,t){let n=this.cache,s=e.length,r=ha(t,s);Et(n,r)||(i.uniform1iv(this.addr,r),At(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||zh,r[o])}function Zm(i,e,t){let n=this.cache,s=e.length,r=ha(t,s);Et(n,r)||(i.uniform1iv(this.addr,r),At(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Vh,r[o])}function Jm(i,e,t){let n=this.cache,s=e.length,r=ha(t,s);Et(n,r)||(i.uniform1iv(this.addr,r),At(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||kh,r[o])}function $m(i){switch(i){case 5126:return Pm;case 35664:return Dm;case 35665:return Lm;case 35666:return Um;case 35674:return Nm;case 35675:return Fm;case 35676:return Om;case 5124:case 35670:return Bm;case 35667:case 35671:return km;case 35668:case 35672:return zm;case 35669:case 35673:return Vm;case 5125:return Hm;case 36294:return Gm;case 36295:return Wm;case 36296:return Xm;case 35678:case 36198:case 36298:case 36306:case 35682:return qm;case 35679:case 36299:case 36307:return Ym;case 35680:case 36300:case 36308:case 36293:return Zm;case 36289:case 36303:case 36311:case 36292:return Jm}}var Cl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Im(t.type)}},Rl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=$m(t.type)}},Il=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},Al=/(\w+)(\])?(\[|\.)?/g;function Eh(i,e){i.seq.push(e),i.map[e.id]=e}function Km(i,e,t){let n=i.name,s=n.length;for(Al.lastIndex=0;;){let r=Al.exec(n),o=Al.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Eh(t,c===void 0?new Cl(a,i,e):new Rl(a,i,e));break}else{let d=t.map[a];d===void 0&&(d=new Il(a),Eh(t,d)),t=d}}}var ps=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);Km(r,o,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function Ah(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var jm=37297,Qm=0;function eg(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var Ch=new Ze;function tg(i){ot._getMatrix(Ch,ot.workingColorSpace,i);let e=`mat3( ${Ch.elements.map(t=>t.toFixed(4))} )`;switch(ot.getTransfer(i)){case Rs:return[e,"LinearTransferOETF"];case ut:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Rh(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+eg(i.getShaderSource(e),a)}else return r}function ng(i,e){let t=tg(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function ig(i,e){let t;switch(e){case Xc:t="Linear";break;case qc:t="Reinhard";break;case Yc:t="Cineon";break;case Zc:t="ACESFilmic";break;case $c:t="AgX";break;case Kc:t="Neutral";break;case Jc:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var aa=new B;function sg(){ot.getLuminanceCoefficients(aa);let i=aa.x.toFixed(4),e=aa.y.toFixed(4),t=aa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function rg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ir).join(`
`)}function og(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function ag(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function ir(i){return i!==""}function Ih(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ph(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var lg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Pl(i){return i.replace(lg,hg)}var cg=new Map;function hg(i,e){let t=Ke[e];if(t===void 0){let n=cg.get(e);if(n!==void 0)t=Ke[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Pl(t)}var ug=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Dh(i){return i.replace(ug,dg)}function dg(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Lh(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function fg(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Qa?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Tc?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===An&&(e="SHADOWMAP_TYPE_VSM"),e}function pg(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case bi:case Ti:e="ENVMAP_TYPE_CUBE";break;case $s:e="ENVMAP_TYPE_CUBE_UV";break}return e}function mg(i){let e="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===Ti&&(e="ENVMAP_MODE_REFRACTION"),e}function gg(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case il:e="ENVMAP_BLENDING_MULTIPLY";break;case Gc:e="ENVMAP_BLENDING_MIX";break;case Wc:e="ENVMAP_BLENDING_ADD";break}return e}function _g(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function xg(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=fg(t),c=pg(t),h=mg(t),d=gg(t),u=_g(t),f=rg(t),g=og(r),v=s.createProgram(),m,p,C=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ir).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ir).join(`
`),p.length>0&&(p+=`
`)):(m=[Lh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ir).join(`
`),p=[Lh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Wn?"#define TONE_MAPPING":"",t.toneMapping!==Wn?Ke.tonemapping_pars_fragment:"",t.toneMapping!==Wn?ig("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ke.colorspace_pars_fragment,ng("linearToOutputTexel",t.outputColorSpace),sg(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ir).join(`
`)),o=Pl(o),o=Ih(o,t),o=Ph(o,t),a=Pl(a),a=Ih(a,t),a=Ph(a,t),o=Dh(o),a=Dh(a),t.isRawShaderMaterial!==!0&&(C=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===pl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===pl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let E=C+m+o,S=C+p+a,R=Ah(s,s.VERTEX_SHADER,E),A=Ah(s,s.FRAGMENT_SHADER,S);s.attachShader(v,R),s.attachShader(v,A),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function N(L){if(i.debug.checkShaderErrors){let V=s.getProgramInfoLog(v)||"",Y=s.getShaderInfoLog(R)||"",Q=s.getShaderInfoLog(A)||"",ie=V.trim(),te=Y.trim(),ge=Q.trim(),Z=!0,P=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(Z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,R,A);else{let X=Rh(s,R,"vertex"),W=Rh(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+ie+`
`+X+`
`+W)}else ie!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ie):(te===""||ge==="")&&(P=!1);P&&(L.diagnostics={runnable:Z,programLog:ie,vertexShader:{log:te,prefix:m},fragmentShader:{log:ge,prefix:p}})}s.deleteShader(R),s.deleteShader(A),w=new ps(s,v),y=ag(s,v)}let w;this.getUniforms=function(){return w===void 0&&N(this),w};let y;this.getAttributes=function(){return y===void 0&&N(this),y};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(v,jm)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Qm++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=R,this.fragmentShader=A,this}var vg=0,Dl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Ll(e),t.set(e,n)),n}},Ll=class{constructor(e){this.id=vg++,this.code=e,this.usedTimes=0}};function yg(i,e,t,n,s,r,o){let a=new Ls,l=new Dl,c=new Set,h=[],d=s.logarithmicDepthBuffer,u=s.vertexTextures,f=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(y){return c.add(y),y===0?"uv":`uv${y}`}function m(y,M,L,V,Y){let Q=V.fog,ie=Y.geometry,te=y.isMeshStandardMaterial?V.environment:null,ge=(y.isMeshStandardMaterial?t:e).get(y.envMap||te),Z=ge&&ge.mapping===$s?ge.image.height:null,P=g[y.type];y.precision!==null&&(f=s.getMaxPrecision(y.precision),f!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",f,"instead."));let X=ie.morphAttributes.position||ie.morphAttributes.normal||ie.morphAttributes.color,W=X!==void 0?X.length:0,xe=0;ie.morphAttributes.position!==void 0&&(xe=1),ie.morphAttributes.normal!==void 0&&(xe=2),ie.morphAttributes.color!==void 0&&(xe=3);let Re,ve,_e,U;if(P){let rt=Rn[P];Re=rt.vertexShader,ve=rt.fragmentShader}else Re=y.vertexShader,ve=y.fragmentShader,l.update(y),_e=l.getVertexShaderID(y),U=l.getFragmentShaderID(y);let O=i.getRenderTarget(),j=i.state.buffers.depth.getReversed(),Ee=Y.isInstancedMesh===!0,J=Y.isBatchedMesh===!0,le=!!y.map,ke=!!y.matcap,T=!!ge,Oe=!!y.aoMap,Ce=!!y.lightMap,ye=!!y.bumpMap,Ie=!!y.normalMap,Ye=!!y.displacementMap,be=!!y.emissiveMap,We=!!y.metalnessMap,je=!!y.roughnessMap,Qe=y.anisotropy>0,b=y.clearcoat>0,_=y.dispersion>0,H=y.iridescence>0,ne=y.sheen>0,re=y.transmission>0,K=Qe&&!!y.anisotropyMap,oe=b&&!!y.clearcoatMap,ee=b&&!!y.clearcoatNormalMap,Me=b&&!!y.clearcoatRoughnessMap,fe=H&&!!y.iridescenceMap,ae=H&&!!y.iridescenceThicknessMap,he=ne&&!!y.sheenColorMap,De=ne&&!!y.sheenRoughnessMap,Le=!!y.specularMap,Te=!!y.specularColorMap,ze=!!y.specularIntensityMap,D=re&&!!y.transmissionMap,ue=re&&!!y.thicknessMap,Se=!!y.gradientMap,Fe=!!y.alphaMap,de=y.alphaTest>0,$=!!y.alphaHash,Be=!!y.extensions,qe=Wn;y.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(qe=i.toneMapping);let lt={shaderID:P,shaderType:y.type,shaderName:y.name,vertexShader:Re,fragmentShader:ve,defines:y.defines,customVertexShaderID:_e,customFragmentShaderID:U,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:f,batching:J,batchingColor:J&&Y._colorsTexture!==null,instancing:Ee,instancingColor:Ee&&Y.instanceColor!==null,instancingMorph:Ee&&Y.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:O===null?i.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:yi,alphaToCoverage:!!y.alphaToCoverage,map:le,matcap:ke,envMap:T,envMapMode:T&&ge.mapping,envMapCubeUVHeight:Z,aoMap:Oe,lightMap:Ce,bumpMap:ye,normalMap:Ie,displacementMap:u&&Ye,emissiveMap:be,normalMapObjectSpace:Ie&&y.normalMapType===th,normalMapTangentSpace:Ie&&y.normalMapType===dl,metalnessMap:We,roughnessMap:je,anisotropy:Qe,anisotropyMap:K,clearcoat:b,clearcoatMap:oe,clearcoatNormalMap:ee,clearcoatRoughnessMap:Me,dispersion:_,iridescence:H,iridescenceMap:fe,iridescenceThicknessMap:ae,sheen:ne,sheenColorMap:he,sheenRoughnessMap:De,specularMap:Le,specularColorMap:Te,specularIntensityMap:ze,transmission:re,transmissionMap:D,thicknessMap:ue,gradientMap:Se,opaque:y.transparent===!1&&y.blending===xi&&y.alphaToCoverage===!1,alphaMap:Fe,alphaTest:de,alphaHash:$,combine:y.combine,mapUv:le&&v(y.map.channel),aoMapUv:Oe&&v(y.aoMap.channel),lightMapUv:Ce&&v(y.lightMap.channel),bumpMapUv:ye&&v(y.bumpMap.channel),normalMapUv:Ie&&v(y.normalMap.channel),displacementMapUv:Ye&&v(y.displacementMap.channel),emissiveMapUv:be&&v(y.emissiveMap.channel),metalnessMapUv:We&&v(y.metalnessMap.channel),roughnessMapUv:je&&v(y.roughnessMap.channel),anisotropyMapUv:K&&v(y.anisotropyMap.channel),clearcoatMapUv:oe&&v(y.clearcoatMap.channel),clearcoatNormalMapUv:ee&&v(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Me&&v(y.clearcoatRoughnessMap.channel),iridescenceMapUv:fe&&v(y.iridescenceMap.channel),iridescenceThicknessMapUv:ae&&v(y.iridescenceThicknessMap.channel),sheenColorMapUv:he&&v(y.sheenColorMap.channel),sheenRoughnessMapUv:De&&v(y.sheenRoughnessMap.channel),specularMapUv:Le&&v(y.specularMap.channel),specularColorMapUv:Te&&v(y.specularColorMap.channel),specularIntensityMapUv:ze&&v(y.specularIntensityMap.channel),transmissionMapUv:D&&v(y.transmissionMap.channel),thicknessMapUv:ue&&v(y.thicknessMap.channel),alphaMapUv:Fe&&v(y.alphaMap.channel),vertexTangents:!!ie.attributes.tangent&&(Ie||Qe),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!ie.attributes.color&&ie.attributes.color.itemSize===4,pointsUvs:Y.isPoints===!0&&!!ie.attributes.uv&&(le||Fe),fog:!!Q,useFog:y.fog===!0,fogExp2:!!Q&&Q.isFogExp2,flatShading:y.flatShading===!0&&y.wireframe===!1,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:j,skinning:Y.isSkinnedMesh===!0,morphTargets:ie.morphAttributes.position!==void 0,morphNormals:ie.morphAttributes.normal!==void 0,morphColors:ie.morphAttributes.color!==void 0,morphTargetsCount:W,morphTextureStride:xe,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:qe,decodeVideoTexture:le&&y.map.isVideoTexture===!0&&ot.getTransfer(y.map.colorSpace)===ut,decodeVideoTextureEmissive:be&&y.emissiveMap.isVideoTexture===!0&&ot.getTransfer(y.emissiveMap.colorSpace)===ut,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Cn,flipSided:y.side===qt,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Be&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Be&&y.extensions.multiDraw===!0||J)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return lt.vertexUv1s=c.has(1),lt.vertexUv2s=c.has(2),lt.vertexUv3s=c.has(3),c.clear(),lt}function p(y){let M=[];if(y.shaderID?M.push(y.shaderID):(M.push(y.customVertexShaderID),M.push(y.customFragmentShaderID)),y.defines!==void 0)for(let L in y.defines)M.push(L),M.push(y.defines[L]);return y.isRawShaderMaterial===!1&&(C(M,y),E(M,y),M.push(i.outputColorSpace)),M.push(y.customProgramCacheKey),M.join()}function C(y,M){y.push(M.precision),y.push(M.outputColorSpace),y.push(M.envMapMode),y.push(M.envMapCubeUVHeight),y.push(M.mapUv),y.push(M.alphaMapUv),y.push(M.lightMapUv),y.push(M.aoMapUv),y.push(M.bumpMapUv),y.push(M.normalMapUv),y.push(M.displacementMapUv),y.push(M.emissiveMapUv),y.push(M.metalnessMapUv),y.push(M.roughnessMapUv),y.push(M.anisotropyMapUv),y.push(M.clearcoatMapUv),y.push(M.clearcoatNormalMapUv),y.push(M.clearcoatRoughnessMapUv),y.push(M.iridescenceMapUv),y.push(M.iridescenceThicknessMapUv),y.push(M.sheenColorMapUv),y.push(M.sheenRoughnessMapUv),y.push(M.specularMapUv),y.push(M.specularColorMapUv),y.push(M.specularIntensityMapUv),y.push(M.transmissionMapUv),y.push(M.thicknessMapUv),y.push(M.combine),y.push(M.fogExp2),y.push(M.sizeAttenuation),y.push(M.morphTargetsCount),y.push(M.morphAttributeCount),y.push(M.numDirLights),y.push(M.numPointLights),y.push(M.numSpotLights),y.push(M.numSpotLightMaps),y.push(M.numHemiLights),y.push(M.numRectAreaLights),y.push(M.numDirLightShadows),y.push(M.numPointLightShadows),y.push(M.numSpotLightShadows),y.push(M.numSpotLightShadowsWithMaps),y.push(M.numLightProbes),y.push(M.shadowMapType),y.push(M.toneMapping),y.push(M.numClippingPlanes),y.push(M.numClipIntersection),y.push(M.depthPacking)}function E(y,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),M.gradientMap&&a.enable(22),y.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),y.push(a.mask)}function S(y){let M=g[y.type],L;if(M){let V=Rn[M];L=dh.clone(V.uniforms)}else L=y.uniforms;return L}function R(y,M){let L;for(let V=0,Y=h.length;V<Y;V++){let Q=h[V];if(Q.cacheKey===M){L=Q,++L.usedTimes;break}}return L===void 0&&(L=new xg(i,M,y,r),h.push(L)),L}function A(y){if(--y.usedTimes===0){let M=h.indexOf(y);h[M]=h[h.length-1],h.pop(),y.destroy()}}function N(y){l.remove(y)}function w(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:S,acquireProgram:R,releaseProgram:A,releaseShaderCache:N,programs:h,dispose:w}}function Mg(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Sg(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Uh(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Nh(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(d,u,f,g,v,m){let p=i[e];return p===void 0?(p={id:d.id,object:d,geometry:u,material:f,groupOrder:g,renderOrder:d.renderOrder,z:v,group:m},i[e]=p):(p.id=d.id,p.object=d,p.geometry=u,p.material=f,p.groupOrder=g,p.renderOrder=d.renderOrder,p.z=v,p.group=m),e++,p}function a(d,u,f,g,v,m){let p=o(d,u,f,g,v,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):t.push(p)}function l(d,u,f,g,v,m){let p=o(d,u,f,g,v,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):t.unshift(p)}function c(d,u){t.length>1&&t.sort(d||Sg),n.length>1&&n.sort(u||Uh),s.length>1&&s.sort(u||Uh)}function h(){for(let d=e,u=i.length;d<u;d++){let f=i[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function bg(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new Nh,i.set(n,[o])):s>=r.length?(o=new Nh,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function Tg(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new B,color:new $e};break;case"SpotLight":t={position:new B,direction:new B,color:new $e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new B,color:new $e,distance:0,decay:0};break;case"HemisphereLight":t={direction:new B,skyColor:new $e,groundColor:new $e};break;case"RectAreaLight":t={color:new $e,position:new B,halfWidth:new B,halfHeight:new B};break}return i[e.id]=t,t}}}function wg(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var Eg=0;function Ag(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Cg(i){let e=new Tg,t=wg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new B);let s=new B,r=new ft,o=new ft;function a(c){let h=0,d=0,u=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let f=0,g=0,v=0,m=0,p=0,C=0,E=0,S=0,R=0,A=0,N=0;c.sort(Ag);for(let y=0,M=c.length;y<M;y++){let L=c[y],V=L.color,Y=L.intensity,Q=L.distance,ie=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=V.r*Y,d+=V.g*Y,u+=V.b*Y;else if(L.isLightProbe){for(let te=0;te<9;te++)n.probe[te].addScaledVector(L.sh.coefficients[te],Y);N++}else if(L.isDirectionalLight){let te=e.get(L);if(te.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let ge=L.shadow,Z=t.get(L);Z.shadowIntensity=ge.intensity,Z.shadowBias=ge.bias,Z.shadowNormalBias=ge.normalBias,Z.shadowRadius=ge.radius,Z.shadowMapSize=ge.mapSize,n.directionalShadow[f]=Z,n.directionalShadowMap[f]=ie,n.directionalShadowMatrix[f]=L.shadow.matrix,C++}n.directional[f]=te,f++}else if(L.isSpotLight){let te=e.get(L);te.position.setFromMatrixPosition(L.matrixWorld),te.color.copy(V).multiplyScalar(Y),te.distance=Q,te.coneCos=Math.cos(L.angle),te.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),te.decay=L.decay,n.spot[v]=te;let ge=L.shadow;if(L.map&&(n.spotLightMap[R]=L.map,R++,ge.updateMatrices(L),L.castShadow&&A++),n.spotLightMatrix[v]=ge.matrix,L.castShadow){let Z=t.get(L);Z.shadowIntensity=ge.intensity,Z.shadowBias=ge.bias,Z.shadowNormalBias=ge.normalBias,Z.shadowRadius=ge.radius,Z.shadowMapSize=ge.mapSize,n.spotShadow[v]=Z,n.spotShadowMap[v]=ie,S++}v++}else if(L.isRectAreaLight){let te=e.get(L);te.color.copy(V).multiplyScalar(Y),te.halfWidth.set(L.width*.5,0,0),te.halfHeight.set(0,L.height*.5,0),n.rectArea[m]=te,m++}else if(L.isPointLight){let te=e.get(L);if(te.color.copy(L.color).multiplyScalar(L.intensity),te.distance=L.distance,te.decay=L.decay,L.castShadow){let ge=L.shadow,Z=t.get(L);Z.shadowIntensity=ge.intensity,Z.shadowBias=ge.bias,Z.shadowNormalBias=ge.normalBias,Z.shadowRadius=ge.radius,Z.shadowMapSize=ge.mapSize,Z.shadowCameraNear=ge.camera.near,Z.shadowCameraFar=ge.camera.far,n.pointShadow[g]=Z,n.pointShadowMap[g]=ie,n.pointShadowMatrix[g]=L.shadow.matrix,E++}n.point[g]=te,g++}else if(L.isHemisphereLight){let te=e.get(L);te.skyColor.copy(L.color).multiplyScalar(Y),te.groundColor.copy(L.groundColor).multiplyScalar(Y),n.hemi[p]=te,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ue.LTC_FLOAT_1,n.rectAreaLTC2=Ue.LTC_FLOAT_2):(n.rectAreaLTC1=Ue.LTC_HALF_1,n.rectAreaLTC2=Ue.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;let w=n.hash;(w.directionalLength!==f||w.pointLength!==g||w.spotLength!==v||w.rectAreaLength!==m||w.hemiLength!==p||w.numDirectionalShadows!==C||w.numPointShadows!==E||w.numSpotShadows!==S||w.numSpotMaps!==R||w.numLightProbes!==N)&&(n.directional.length=f,n.spot.length=v,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=C,n.directionalShadowMap.length=C,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=C,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=S+R-A,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=N,w.directionalLength=f,w.pointLength=g,w.spotLength=v,w.rectAreaLength=m,w.hemiLength=p,w.numDirectionalShadows=C,w.numPointShadows=E,w.numSpotShadows=S,w.numSpotMaps=R,w.numLightProbes=N,n.version=Eg++)}function l(c,h){let d=0,u=0,f=0,g=0,v=0,m=h.matrixWorldInverse;for(let p=0,C=c.length;p<C;p++){let E=c[p];if(E.isDirectionalLight){let S=n.directional[d];S.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),d++}else if(E.isSpotLight){let S=n.spot[f];S.position.setFromMatrixPosition(E.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),f++}else if(E.isRectAreaLight){let S=n.rectArea[g];S.position.setFromMatrixPosition(E.matrixWorld),S.position.applyMatrix4(m),o.identity(),r.copy(E.matrixWorld),r.premultiply(m),o.extractRotation(r),S.halfWidth.set(E.width*.5,0,0),S.halfHeight.set(0,E.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),g++}else if(E.isPointLight){let S=n.point[u];S.position.setFromMatrixPosition(E.matrixWorld),S.position.applyMatrix4(m),u++}else if(E.isHemisphereLight){let S=n.hemi[v];S.direction.setFromMatrixPosition(E.matrixWorld),S.direction.transformDirection(m),v++}}}return{setup:a,setupView:l,state:n}}function Fh(i){let e=new Cg(i),t=[],n=[];function s(h){c.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function l(h){e.setupView(t,h)}let c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Rg(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new Fh(i),e.set(s,[a])):r>=o.length?(a=new Fh(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var Ig=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Pg=`uniform sampler2D shadow_pass;
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
}`;function Dg(i,e,t){let n=new is,s=new Xe,r=new Xe,o=new _t,a=new to({depthPacking:eh}),l=new no,c={},h=t.maxTextureSize,d={[kn]:qt,[qt]:kn,[Cn]:Cn},u=new tn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xe},radius:{value:4}},vertexShader:Ig,fragmentShader:Pg}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let g=new Xt;g.setAttribute("position",new bt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new yt(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Qa;let p=this.type;this.render=function(A,N,w){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;let y=i.getRenderTarget(),M=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),V=i.state;V.setBlending(Gn),V.buffers.depth.getReversed()===!0?V.buffers.color.setClear(0,0,0,0):V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);let Y=p!==An&&this.type===An,Q=p===An&&this.type!==An;for(let ie=0,te=A.length;ie<te;ie++){let ge=A[ie],Z=ge.shadow;if(Z===void 0){console.warn("THREE.WebGLShadowMap:",ge,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;s.copy(Z.mapSize);let P=Z.getFrameExtents();if(s.multiply(P),r.copy(Z.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/P.x),s.x=r.x*P.x,Z.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/P.y),s.y=r.y*P.y,Z.mapSize.y=r.y)),Z.map===null||Y===!0||Q===!0){let W=this.type!==An?{minFilter:Kt,magFilter:Kt}:{};Z.map!==null&&Z.map.dispose(),Z.map=new hn(s.x,s.y,W),Z.map.texture.name=ge.name+".shadowMap",Z.camera.updateProjectionMatrix()}i.setRenderTarget(Z.map),i.clear();let X=Z.getViewportCount();for(let W=0;W<X;W++){let xe=Z.getViewport(W);o.set(r.x*xe.x,r.y*xe.y,r.x*xe.z,r.y*xe.w),V.viewport(o),Z.updateMatrices(ge,W),n=Z.getFrustum(),S(N,w,Z.camera,ge,this.type)}Z.isPointLightShadow!==!0&&this.type===An&&C(Z,w),Z.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(y,M,L)};function C(A,N){let w=e.update(v);u.defines.VSM_SAMPLES!==A.blurSamples&&(u.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new hn(s.x,s.y)),u.uniforms.shadow_pass.value=A.map.texture,u.uniforms.resolution.value=A.mapSize,u.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(N,null,w,u,v,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(N,null,w,f,v,null)}function E(A,N,w,y){let M=null,L=w.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(L!==void 0)M=L;else if(M=w.isPointLight===!0?l:a,i.localClippingEnabled&&N.clipShadows===!0&&Array.isArray(N.clippingPlanes)&&N.clippingPlanes.length!==0||N.displacementMap&&N.displacementScale!==0||N.alphaMap&&N.alphaTest>0||N.map&&N.alphaTest>0||N.alphaToCoverage===!0){let V=M.uuid,Y=N.uuid,Q=c[V];Q===void 0&&(Q={},c[V]=Q);let ie=Q[Y];ie===void 0&&(ie=M.clone(),Q[Y]=ie,N.addEventListener("dispose",R)),M=ie}if(M.visible=N.visible,M.wireframe=N.wireframe,y===An?M.side=N.shadowSide!==null?N.shadowSide:N.side:M.side=N.shadowSide!==null?N.shadowSide:d[N.side],M.alphaMap=N.alphaMap,M.alphaTest=N.alphaToCoverage===!0?.5:N.alphaTest,M.map=N.map,M.clipShadows=N.clipShadows,M.clippingPlanes=N.clippingPlanes,M.clipIntersection=N.clipIntersection,M.displacementMap=N.displacementMap,M.displacementScale=N.displacementScale,M.displacementBias=N.displacementBias,M.wireframeLinewidth=N.wireframeLinewidth,M.linewidth=N.linewidth,w.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let V=i.properties.get(M);V.light=w}return M}function S(A,N,w,y,M){if(A.visible===!1)return;if(A.layers.test(N.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&M===An)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,A.matrixWorld);let Y=e.update(A),Q=A.material;if(Array.isArray(Q)){let ie=Y.groups;for(let te=0,ge=ie.length;te<ge;te++){let Z=ie[te],P=Q[Z.materialIndex];if(P&&P.visible){let X=E(A,P,y,M);A.onBeforeShadow(i,A,N,w,Y,X,Z),i.renderBufferDirect(w,null,Y,X,A,Z),A.onAfterShadow(i,A,N,w,Y,X,Z)}}}else if(Q.visible){let ie=E(A,Q,y,M);A.onBeforeShadow(i,A,N,w,Y,ie,null),i.renderBufferDirect(w,null,Y,ie,A,null),A.onAfterShadow(i,A,N,w,Y,ie,null)}}let V=A.children;for(let Y=0,Q=V.length;Y<Q;Y++)S(V[Y],N,w,y,M)}function R(A){A.target.removeEventListener("dispose",R);for(let w in c){let y=c[w],M=A.target.uuid;M in y&&(y[M].dispose(),delete y[M])}}}var Lg={[po]:mo,[go]:vo,[_o]:yo,[vi]:xo,[mo]:po,[vo]:go,[yo]:_o,[xo]:vi};function Ug(i,e){function t(){let D=!1,ue=new _t,Se=null,Fe=new _t(0,0,0,0);return{setMask:function(de){Se!==de&&!D&&(i.colorMask(de,de,de,de),Se=de)},setLocked:function(de){D=de},setClear:function(de,$,Be,qe,lt){lt===!0&&(de*=qe,$*=qe,Be*=qe),ue.set(de,$,Be,qe),Fe.equals(ue)===!1&&(i.clearColor(de,$,Be,qe),Fe.copy(ue))},reset:function(){D=!1,Se=null,Fe.set(-1,0,0,0)}}}function n(){let D=!1,ue=!1,Se=null,Fe=null,de=null;return{setReversed:function($){if(ue!==$){let Be=e.get("EXT_clip_control");$?Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.ZERO_TO_ONE_EXT):Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.NEGATIVE_ONE_TO_ONE_EXT),ue=$;let qe=de;de=null,this.setClear(qe)}},getReversed:function(){return ue},setTest:function($){$?O(i.DEPTH_TEST):j(i.DEPTH_TEST)},setMask:function($){Se!==$&&!D&&(i.depthMask($),Se=$)},setFunc:function($){if(ue&&($=Lg[$]),Fe!==$){switch($){case po:i.depthFunc(i.NEVER);break;case mo:i.depthFunc(i.ALWAYS);break;case go:i.depthFunc(i.LESS);break;case vi:i.depthFunc(i.LEQUAL);break;case _o:i.depthFunc(i.EQUAL);break;case xo:i.depthFunc(i.GEQUAL);break;case vo:i.depthFunc(i.GREATER);break;case yo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Fe=$}},setLocked:function($){D=$},setClear:function($){de!==$&&(ue&&($=1-$),i.clearDepth($),de=$)},reset:function(){D=!1,Se=null,Fe=null,de=null,ue=!1}}}function s(){let D=!1,ue=null,Se=null,Fe=null,de=null,$=null,Be=null,qe=null,lt=null;return{setTest:function(rt){D||(rt?O(i.STENCIL_TEST):j(i.STENCIL_TEST))},setMask:function(rt){ue!==rt&&!D&&(i.stencilMask(rt),ue=rt)},setFunc:function(rt,sn,rn){(Se!==rt||Fe!==sn||de!==rn)&&(i.stencilFunc(rt,sn,rn),Se=rt,Fe=sn,de=rn)},setOp:function(rt,sn,rn){($!==rt||Be!==sn||qe!==rn)&&(i.stencilOp(rt,sn,rn),$=rt,Be=sn,qe=rn)},setLocked:function(rt){D=rt},setClear:function(rt){lt!==rt&&(i.clearStencil(rt),lt=rt)},reset:function(){D=!1,ue=null,Se=null,Fe=null,de=null,$=null,Be=null,qe=null,lt=null}}}let r=new t,o=new n,a=new s,l=new WeakMap,c=new WeakMap,h={},d={},u=new WeakMap,f=[],g=null,v=!1,m=null,p=null,C=null,E=null,S=null,R=null,A=null,N=new $e(0,0,0),w=0,y=!1,M=null,L=null,V=null,Y=null,Q=null,ie=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),te=!1,ge=0,Z=i.getParameter(i.VERSION);Z.indexOf("WebGL")!==-1?(ge=parseFloat(/^WebGL (\d)/.exec(Z)[1]),te=ge>=1):Z.indexOf("OpenGL ES")!==-1&&(ge=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),te=ge>=2);let P=null,X={},W=i.getParameter(i.SCISSOR_BOX),xe=i.getParameter(i.VIEWPORT),Re=new _t().fromArray(W),ve=new _t().fromArray(xe);function _e(D,ue,Se,Fe){let de=new Uint8Array(4),$=i.createTexture();i.bindTexture(D,$),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Be=0;Be<Se;Be++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(ue,0,i.RGBA,1,1,Fe,0,i.RGBA,i.UNSIGNED_BYTE,de):i.texImage2D(ue+Be,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,de);return $}let U={};U[i.TEXTURE_2D]=_e(i.TEXTURE_2D,i.TEXTURE_2D,1),U[i.TEXTURE_CUBE_MAP]=_e(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),U[i.TEXTURE_2D_ARRAY]=_e(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),U[i.TEXTURE_3D]=_e(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),O(i.DEPTH_TEST),o.setFunc(vi),ye(!1),Ie(ja),O(i.CULL_FACE),Oe(Gn);function O(D){h[D]!==!0&&(i.enable(D),h[D]=!0)}function j(D){h[D]!==!1&&(i.disable(D),h[D]=!1)}function Ee(D,ue){return d[D]!==ue?(i.bindFramebuffer(D,ue),d[D]=ue,D===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=ue),D===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=ue),!0):!1}function J(D,ue){let Se=f,Fe=!1;if(D){Se=u.get(ue),Se===void 0&&(Se=[],u.set(ue,Se));let de=D.textures;if(Se.length!==de.length||Se[0]!==i.COLOR_ATTACHMENT0){for(let $=0,Be=de.length;$<Be;$++)Se[$]=i.COLOR_ATTACHMENT0+$;Se.length=de.length,Fe=!0}}else Se[0]!==i.BACK&&(Se[0]=i.BACK,Fe=!0);Fe&&i.drawBuffers(Se)}function le(D){return g!==D?(i.useProgram(D),g=D,!0):!1}let ke={[ri]:i.FUNC_ADD,[Ec]:i.FUNC_SUBTRACT,[Ac]:i.FUNC_REVERSE_SUBTRACT};ke[Cc]=i.MIN,ke[Rc]=i.MAX;let T={[Ic]:i.ZERO,[Pc]:i.ONE,[Dc]:i.SRC_COLOR,[kr]:i.SRC_ALPHA,[Bc]:i.SRC_ALPHA_SATURATE,[Fc]:i.DST_COLOR,[Uc]:i.DST_ALPHA,[Lc]:i.ONE_MINUS_SRC_COLOR,[zr]:i.ONE_MINUS_SRC_ALPHA,[Oc]:i.ONE_MINUS_DST_COLOR,[Nc]:i.ONE_MINUS_DST_ALPHA,[kc]:i.CONSTANT_COLOR,[zc]:i.ONE_MINUS_CONSTANT_COLOR,[Vc]:i.CONSTANT_ALPHA,[Hc]:i.ONE_MINUS_CONSTANT_ALPHA};function Oe(D,ue,Se,Fe,de,$,Be,qe,lt,rt){if(D===Gn){v===!0&&(j(i.BLEND),v=!1);return}if(v===!1&&(O(i.BLEND),v=!0),D!==wc){if(D!==m||rt!==y){if((p!==ri||S!==ri)&&(i.blendEquation(i.FUNC_ADD),p=ri,S=ri),rt)switch(D){case xi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case el:i.blendFunc(i.ONE,i.ONE);break;case tl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case nl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case xi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case el:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case tl:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case nl:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}C=null,E=null,R=null,A=null,N.set(0,0,0),w=0,m=D,y=rt}return}de=de||ue,$=$||Se,Be=Be||Fe,(ue!==p||de!==S)&&(i.blendEquationSeparate(ke[ue],ke[de]),p=ue,S=de),(Se!==C||Fe!==E||$!==R||Be!==A)&&(i.blendFuncSeparate(T[Se],T[Fe],T[$],T[Be]),C=Se,E=Fe,R=$,A=Be),(qe.equals(N)===!1||lt!==w)&&(i.blendColor(qe.r,qe.g,qe.b,lt),N.copy(qe),w=lt),m=D,y=!1}function Ce(D,ue){D.side===Cn?j(i.CULL_FACE):O(i.CULL_FACE);let Se=D.side===qt;ue&&(Se=!Se),ye(Se),D.blending===xi&&D.transparent===!1?Oe(Gn):Oe(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),r.setMask(D.colorWrite);let Fe=D.stencilWrite;a.setTest(Fe),Fe&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),be(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?O(i.SAMPLE_ALPHA_TO_COVERAGE):j(i.SAMPLE_ALPHA_TO_COVERAGE)}function ye(D){M!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),M=D)}function Ie(D){D!==Sc?(O(i.CULL_FACE),D!==L&&(D===ja?i.cullFace(i.BACK):D===bc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):j(i.CULL_FACE),L=D}function Ye(D){D!==V&&(te&&i.lineWidth(D),V=D)}function be(D,ue,Se){D?(O(i.POLYGON_OFFSET_FILL),(Y!==ue||Q!==Se)&&(i.polygonOffset(ue,Se),Y=ue,Q=Se)):j(i.POLYGON_OFFSET_FILL)}function We(D){D?O(i.SCISSOR_TEST):j(i.SCISSOR_TEST)}function je(D){D===void 0&&(D=i.TEXTURE0+ie-1),P!==D&&(i.activeTexture(D),P=D)}function Qe(D,ue,Se){Se===void 0&&(P===null?Se=i.TEXTURE0+ie-1:Se=P);let Fe=X[Se];Fe===void 0&&(Fe={type:void 0,texture:void 0},X[Se]=Fe),(Fe.type!==D||Fe.texture!==ue)&&(P!==Se&&(i.activeTexture(Se),P=Se),i.bindTexture(D,ue||U[D]),Fe.type=D,Fe.texture=ue)}function b(){let D=X[P];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function _(){try{i.compressedTexImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function H(){try{i.compressedTexImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ne(){try{i.texSubImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function re(){try{i.texSubImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function K(){try{i.compressedTexSubImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function oe(){try{i.compressedTexSubImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ee(){try{i.texStorage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Me(){try{i.texStorage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function fe(){try{i.texImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ae(){try{i.texImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function he(D){Re.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),Re.copy(D))}function De(D){ve.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),ve.copy(D))}function Le(D,ue){let Se=c.get(ue);Se===void 0&&(Se=new WeakMap,c.set(ue,Se));let Fe=Se.get(D);Fe===void 0&&(Fe=i.getUniformBlockIndex(ue,D.name),Se.set(D,Fe))}function Te(D,ue){let Fe=c.get(ue).get(D);l.get(ue)!==Fe&&(i.uniformBlockBinding(ue,Fe,D.__bindingPointIndex),l.set(ue,Fe))}function ze(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},P=null,X={},d={},u=new WeakMap,f=[],g=null,v=!1,m=null,p=null,C=null,E=null,S=null,R=null,A=null,N=new $e(0,0,0),w=0,y=!1,M=null,L=null,V=null,Y=null,Q=null,Re.set(0,0,i.canvas.width,i.canvas.height),ve.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:O,disable:j,bindFramebuffer:Ee,drawBuffers:J,useProgram:le,setBlending:Oe,setMaterial:Ce,setFlipSided:ye,setCullFace:Ie,setLineWidth:Ye,setPolygonOffset:be,setScissorTest:We,activeTexture:je,bindTexture:Qe,unbindTexture:b,compressedTexImage2D:_,compressedTexImage3D:H,texImage2D:fe,texImage3D:ae,updateUBOMapping:Le,uniformBlockBinding:Te,texStorage2D:ee,texStorage3D:Me,texSubImage2D:ne,texSubImage3D:re,compressedTexSubImage2D:K,compressedTexSubImage3D:oe,scissor:he,viewport:De,reset:ze}}function Ng(i,e,t,n,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Xe,h=new WeakMap,d,u=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(b,_){return f?new OffscreenCanvas(b,_):Ps("canvas")}function v(b,_,H){let ne=1,re=Qe(b);if((re.width>H||re.height>H)&&(ne=H/Math.max(re.width,re.height)),ne<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){let K=Math.floor(ne*re.width),oe=Math.floor(ne*re.height);d===void 0&&(d=g(K,oe));let ee=_?g(K,oe):d;return ee.width=K,ee.height=oe,ee.getContext("2d").drawImage(b,0,0,K,oe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+re.width+"x"+re.height+") to ("+K+"x"+oe+")."),ee}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+re.width+"x"+re.height+")."),b;return b}function m(b){return b.generateMipmaps}function p(b){i.generateMipmap(b)}function C(b){return b.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?i.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function E(b,_,H,ne,re=!1){if(b!==null){if(i[b]!==void 0)return i[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let K=_;if(_===i.RED&&(H===i.FLOAT&&(K=i.R32F),H===i.HALF_FLOAT&&(K=i.R16F),H===i.UNSIGNED_BYTE&&(K=i.R8)),_===i.RED_INTEGER&&(H===i.UNSIGNED_BYTE&&(K=i.R8UI),H===i.UNSIGNED_SHORT&&(K=i.R16UI),H===i.UNSIGNED_INT&&(K=i.R32UI),H===i.BYTE&&(K=i.R8I),H===i.SHORT&&(K=i.R16I),H===i.INT&&(K=i.R32I)),_===i.RG&&(H===i.FLOAT&&(K=i.RG32F),H===i.HALF_FLOAT&&(K=i.RG16F),H===i.UNSIGNED_BYTE&&(K=i.RG8)),_===i.RG_INTEGER&&(H===i.UNSIGNED_BYTE&&(K=i.RG8UI),H===i.UNSIGNED_SHORT&&(K=i.RG16UI),H===i.UNSIGNED_INT&&(K=i.RG32UI),H===i.BYTE&&(K=i.RG8I),H===i.SHORT&&(K=i.RG16I),H===i.INT&&(K=i.RG32I)),_===i.RGB_INTEGER&&(H===i.UNSIGNED_BYTE&&(K=i.RGB8UI),H===i.UNSIGNED_SHORT&&(K=i.RGB16UI),H===i.UNSIGNED_INT&&(K=i.RGB32UI),H===i.BYTE&&(K=i.RGB8I),H===i.SHORT&&(K=i.RGB16I),H===i.INT&&(K=i.RGB32I)),_===i.RGBA_INTEGER&&(H===i.UNSIGNED_BYTE&&(K=i.RGBA8UI),H===i.UNSIGNED_SHORT&&(K=i.RGBA16UI),H===i.UNSIGNED_INT&&(K=i.RGBA32UI),H===i.BYTE&&(K=i.RGBA8I),H===i.SHORT&&(K=i.RGBA16I),H===i.INT&&(K=i.RGBA32I)),_===i.RGB&&(H===i.UNSIGNED_INT_5_9_9_9_REV&&(K=i.RGB9_E5),H===i.UNSIGNED_INT_10F_11F_11F_REV&&(K=i.R11F_G11F_B10F)),_===i.RGBA){let oe=re?Rs:ot.getTransfer(ne);H===i.FLOAT&&(K=i.RGBA32F),H===i.HALF_FLOAT&&(K=i.RGBA16F),H===i.UNSIGNED_BYTE&&(K=oe===ut?i.SRGB8_ALPHA8:i.RGBA8),H===i.UNSIGNED_SHORT_4_4_4_4&&(K=i.RGBA4),H===i.UNSIGNED_SHORT_5_5_5_1&&(K=i.RGB5_A1)}return(K===i.R16F||K===i.R32F||K===i.RG16F||K===i.RG32F||K===i.RGBA16F||K===i.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function S(b,_){let H;return b?_===null||_===ui||_===cs?H=i.DEPTH24_STENCIL8:_===Sn?H=i.DEPTH32F_STENCIL8:_===as&&(H=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===ui||_===cs?H=i.DEPTH_COMPONENT24:_===Sn?H=i.DEPTH_COMPONENT32F:_===as&&(H=i.DEPTH_COMPONENT16),H}function R(b,_){return m(b)===!0||b.isFramebufferTexture&&b.minFilter!==Kt&&b.minFilter!==Nt?Math.log2(Math.max(_.width,_.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?_.mipmaps.length:1}function A(b){let _=b.target;_.removeEventListener("dispose",A),w(_),_.isVideoTexture&&h.delete(_)}function N(b){let _=b.target;_.removeEventListener("dispose",N),M(_)}function w(b){let _=n.get(b);if(_.__webglInit===void 0)return;let H=b.source,ne=u.get(H);if(ne){let re=ne[_.__cacheKey];re.usedTimes--,re.usedTimes===0&&y(b),Object.keys(ne).length===0&&u.delete(H)}n.remove(b)}function y(b){let _=n.get(b);i.deleteTexture(_.__webglTexture);let H=b.source,ne=u.get(H);delete ne[_.__cacheKey],o.memory.textures--}function M(b){let _=n.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),n.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++){if(Array.isArray(_.__webglFramebuffer[ne]))for(let re=0;re<_.__webglFramebuffer[ne].length;re++)i.deleteFramebuffer(_.__webglFramebuffer[ne][re]);else i.deleteFramebuffer(_.__webglFramebuffer[ne]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[ne])}else{if(Array.isArray(_.__webglFramebuffer))for(let ne=0;ne<_.__webglFramebuffer.length;ne++)i.deleteFramebuffer(_.__webglFramebuffer[ne]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let ne=0;ne<_.__webglColorRenderbuffer.length;ne++)_.__webglColorRenderbuffer[ne]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[ne]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let H=b.textures;for(let ne=0,re=H.length;ne<re;ne++){let K=n.get(H[ne]);K.__webglTexture&&(i.deleteTexture(K.__webglTexture),o.memory.textures--),n.remove(H[ne])}n.remove(b)}let L=0;function V(){L=0}function Y(){let b=L;return b>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+s.maxTextures),L+=1,b}function Q(b){let _=[];return _.push(b.wrapS),_.push(b.wrapT),_.push(b.wrapR||0),_.push(b.magFilter),_.push(b.minFilter),_.push(b.anisotropy),_.push(b.internalFormat),_.push(b.format),_.push(b.type),_.push(b.generateMipmaps),_.push(b.premultiplyAlpha),_.push(b.flipY),_.push(b.unpackAlignment),_.push(b.colorSpace),_.join()}function ie(b,_){let H=n.get(b);if(b.isVideoTexture&&We(b),b.isRenderTargetTexture===!1&&b.isExternalTexture!==!0&&b.version>0&&H.__version!==b.version){let ne=b.image;if(ne===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{U(H,b,_);return}}else b.isExternalTexture&&(H.__webglTexture=b.sourceTexture?b.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,H.__webglTexture,i.TEXTURE0+_)}function te(b,_){let H=n.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&H.__version!==b.version){U(H,b,_);return}t.bindTexture(i.TEXTURE_2D_ARRAY,H.__webglTexture,i.TEXTURE0+_)}function ge(b,_){let H=n.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&H.__version!==b.version){U(H,b,_);return}t.bindTexture(i.TEXTURE_3D,H.__webglTexture,i.TEXTURE0+_)}function Z(b,_){let H=n.get(b);if(b.version>0&&H.__version!==b.version){O(H,b,_);return}t.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture,i.TEXTURE0+_)}let P={[Ji]:i.REPEAT,[si]:i.CLAMP_TO_EDGE,[Vr]:i.MIRRORED_REPEAT},X={[Kt]:i.NEAREST,[jc]:i.NEAREST_MIPMAP_NEAREST,[Ks]:i.NEAREST_MIPMAP_LINEAR,[Nt]:i.LINEAR,[bo]:i.LINEAR_MIPMAP_NEAREST,[hi]:i.LINEAR_MIPMAP_LINEAR},W={[nh]:i.NEVER,[lh]:i.ALWAYS,[ih]:i.LESS,[fl]:i.LEQUAL,[sh]:i.EQUAL,[ah]:i.GEQUAL,[rh]:i.GREATER,[oh]:i.NOTEQUAL};function xe(b,_){if(_.type===Sn&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===Nt||_.magFilter===bo||_.magFilter===Ks||_.magFilter===hi||_.minFilter===Nt||_.minFilter===bo||_.minFilter===Ks||_.minFilter===hi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(b,i.TEXTURE_WRAP_S,P[_.wrapS]),i.texParameteri(b,i.TEXTURE_WRAP_T,P[_.wrapT]),(b===i.TEXTURE_3D||b===i.TEXTURE_2D_ARRAY)&&i.texParameteri(b,i.TEXTURE_WRAP_R,P[_.wrapR]),i.texParameteri(b,i.TEXTURE_MAG_FILTER,X[_.magFilter]),i.texParameteri(b,i.TEXTURE_MIN_FILTER,X[_.minFilter]),_.compareFunction&&(i.texParameteri(b,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(b,i.TEXTURE_COMPARE_FUNC,W[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Kt||_.minFilter!==Ks&&_.minFilter!==hi||_.type===Sn&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){let H=e.get("EXT_texture_filter_anisotropic");i.texParameterf(b,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function Re(b,_){let H=!1;b.__webglInit===void 0&&(b.__webglInit=!0,_.addEventListener("dispose",A));let ne=_.source,re=u.get(ne);re===void 0&&(re={},u.set(ne,re));let K=Q(_);if(K!==b.__cacheKey){re[K]===void 0&&(re[K]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,H=!0),re[K].usedTimes++;let oe=re[b.__cacheKey];oe!==void 0&&(re[b.__cacheKey].usedTimes--,oe.usedTimes===0&&y(_)),b.__cacheKey=K,b.__webglTexture=re[K].texture}return H}function ve(b,_,H){return Math.floor(Math.floor(b/H)/_)}function _e(b,_,H,ne){let K=b.updateRanges;if(K.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,_.width,_.height,H,ne,_.data);else{K.sort((ae,he)=>ae.start-he.start);let oe=0;for(let ae=1;ae<K.length;ae++){let he=K[oe],De=K[ae],Le=he.start+he.count,Te=ve(De.start,_.width,4),ze=ve(he.start,_.width,4);De.start<=Le+1&&Te===ze&&ve(De.start+De.count-1,_.width,4)===Te?he.count=Math.max(he.count,De.start+De.count-he.start):(++oe,K[oe]=De)}K.length=oe+1;let ee=i.getParameter(i.UNPACK_ROW_LENGTH),Me=i.getParameter(i.UNPACK_SKIP_PIXELS),fe=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,_.width);for(let ae=0,he=K.length;ae<he;ae++){let De=K[ae],Le=Math.floor(De.start/4),Te=Math.ceil(De.count/4),ze=Le%_.width,D=Math.floor(Le/_.width),ue=Te,Se=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,ze),i.pixelStorei(i.UNPACK_SKIP_ROWS,D),t.texSubImage2D(i.TEXTURE_2D,0,ze,D,ue,Se,H,ne,_.data)}b.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,ee),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Me),i.pixelStorei(i.UNPACK_SKIP_ROWS,fe)}}function U(b,_,H){let ne=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(ne=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(ne=i.TEXTURE_3D);let re=Re(b,_),K=_.source;t.bindTexture(ne,b.__webglTexture,i.TEXTURE0+H);let oe=n.get(K);if(K.version!==oe.__version||re===!0){t.activeTexture(i.TEXTURE0+H);let ee=ot.getPrimaries(ot.workingColorSpace),Me=_.colorSpace===Xn?null:ot.getPrimaries(_.colorSpace),fe=_.colorSpace===Xn||ee===Me?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe);let ae=v(_.image,!1,s.maxTextureSize);ae=je(_,ae);let he=r.convert(_.format,_.colorSpace),De=r.convert(_.type),Le=E(_.internalFormat,he,De,_.colorSpace,_.isVideoTexture);xe(ne,_);let Te,ze=_.mipmaps,D=_.isVideoTexture!==!0,ue=oe.__version===void 0||re===!0,Se=K.dataReady,Fe=R(_,ae);if(_.isDepthTexture)Le=S(_.format===hs,_.type),ue&&(D?t.texStorage2D(i.TEXTURE_2D,1,Le,ae.width,ae.height):t.texImage2D(i.TEXTURE_2D,0,Le,ae.width,ae.height,0,he,De,null));else if(_.isDataTexture)if(ze.length>0){D&&ue&&t.texStorage2D(i.TEXTURE_2D,Fe,Le,ze[0].width,ze[0].height);for(let de=0,$=ze.length;de<$;de++)Te=ze[de],D?Se&&t.texSubImage2D(i.TEXTURE_2D,de,0,0,Te.width,Te.height,he,De,Te.data):t.texImage2D(i.TEXTURE_2D,de,Le,Te.width,Te.height,0,he,De,Te.data);_.generateMipmaps=!1}else D?(ue&&t.texStorage2D(i.TEXTURE_2D,Fe,Le,ae.width,ae.height),Se&&_e(_,ae,he,De)):t.texImage2D(i.TEXTURE_2D,0,Le,ae.width,ae.height,0,he,De,ae.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){D&&ue&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Fe,Le,ze[0].width,ze[0].height,ae.depth);for(let de=0,$=ze.length;de<$;de++)if(Te=ze[de],_.format!==dn)if(he!==null)if(D){if(Se)if(_.layerUpdates.size>0){let Be=Ml(Te.width,Te.height,_.format,_.type);for(let qe of _.layerUpdates){let lt=Te.data.subarray(qe*Be/Te.data.BYTES_PER_ELEMENT,(qe+1)*Be/Te.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,de,0,0,qe,Te.width,Te.height,1,he,lt)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,de,0,0,0,Te.width,Te.height,ae.depth,he,Te.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,de,Le,Te.width,Te.height,ae.depth,0,Te.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else D?Se&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,de,0,0,0,Te.width,Te.height,ae.depth,he,De,Te.data):t.texImage3D(i.TEXTURE_2D_ARRAY,de,Le,Te.width,Te.height,ae.depth,0,he,De,Te.data)}else{D&&ue&&t.texStorage2D(i.TEXTURE_2D,Fe,Le,ze[0].width,ze[0].height);for(let de=0,$=ze.length;de<$;de++)Te=ze[de],_.format!==dn?he!==null?D?Se&&t.compressedTexSubImage2D(i.TEXTURE_2D,de,0,0,Te.width,Te.height,he,Te.data):t.compressedTexImage2D(i.TEXTURE_2D,de,Le,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):D?Se&&t.texSubImage2D(i.TEXTURE_2D,de,0,0,Te.width,Te.height,he,De,Te.data):t.texImage2D(i.TEXTURE_2D,de,Le,Te.width,Te.height,0,he,De,Te.data)}else if(_.isDataArrayTexture)if(D){if(ue&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Fe,Le,ae.width,ae.height,ae.depth),Se)if(_.layerUpdates.size>0){let de=Ml(ae.width,ae.height,_.format,_.type);for(let $ of _.layerUpdates){let Be=ae.data.subarray($*de/ae.data.BYTES_PER_ELEMENT,($+1)*de/ae.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,$,ae.width,ae.height,1,he,De,Be)}_.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ae.width,ae.height,ae.depth,he,De,ae.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Le,ae.width,ae.height,ae.depth,0,he,De,ae.data);else if(_.isData3DTexture)D?(ue&&t.texStorage3D(i.TEXTURE_3D,Fe,Le,ae.width,ae.height,ae.depth),Se&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ae.width,ae.height,ae.depth,he,De,ae.data)):t.texImage3D(i.TEXTURE_3D,0,Le,ae.width,ae.height,ae.depth,0,he,De,ae.data);else if(_.isFramebufferTexture){if(ue)if(D)t.texStorage2D(i.TEXTURE_2D,Fe,Le,ae.width,ae.height);else{let de=ae.width,$=ae.height;for(let Be=0;Be<Fe;Be++)t.texImage2D(i.TEXTURE_2D,Be,Le,de,$,0,he,De,null),de>>=1,$>>=1}}else if(ze.length>0){if(D&&ue){let de=Qe(ze[0]);t.texStorage2D(i.TEXTURE_2D,Fe,Le,de.width,de.height)}for(let de=0,$=ze.length;de<$;de++)Te=ze[de],D?Se&&t.texSubImage2D(i.TEXTURE_2D,de,0,0,he,De,Te):t.texImage2D(i.TEXTURE_2D,de,Le,he,De,Te);_.generateMipmaps=!1}else if(D){if(ue){let de=Qe(ae);t.texStorage2D(i.TEXTURE_2D,Fe,Le,de.width,de.height)}Se&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,he,De,ae)}else t.texImage2D(i.TEXTURE_2D,0,Le,he,De,ae);m(_)&&p(ne),oe.__version=K.version,_.onUpdate&&_.onUpdate(_)}b.__version=_.version}function O(b,_,H){if(_.image.length!==6)return;let ne=Re(b,_),re=_.source;t.bindTexture(i.TEXTURE_CUBE_MAP,b.__webglTexture,i.TEXTURE0+H);let K=n.get(re);if(re.version!==K.__version||ne===!0){t.activeTexture(i.TEXTURE0+H);let oe=ot.getPrimaries(ot.workingColorSpace),ee=_.colorSpace===Xn?null:ot.getPrimaries(_.colorSpace),Me=_.colorSpace===Xn||oe===ee?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me);let fe=_.isCompressedTexture||_.image[0].isCompressedTexture,ae=_.image[0]&&_.image[0].isDataTexture,he=[];for(let $=0;$<6;$++)!fe&&!ae?he[$]=v(_.image[$],!0,s.maxCubemapSize):he[$]=ae?_.image[$].image:_.image[$],he[$]=je(_,he[$]);let De=he[0],Le=r.convert(_.format,_.colorSpace),Te=r.convert(_.type),ze=E(_.internalFormat,Le,Te,_.colorSpace),D=_.isVideoTexture!==!0,ue=K.__version===void 0||ne===!0,Se=re.dataReady,Fe=R(_,De);xe(i.TEXTURE_CUBE_MAP,_);let de;if(fe){D&&ue&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Fe,ze,De.width,De.height);for(let $=0;$<6;$++){de=he[$].mipmaps;for(let Be=0;Be<de.length;Be++){let qe=de[Be];_.format!==dn?Le!==null?D?Se&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,Be,0,0,qe.width,qe.height,Le,qe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,Be,ze,qe.width,qe.height,0,qe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?Se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,Be,0,0,qe.width,qe.height,Le,Te,qe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,Be,ze,qe.width,qe.height,0,Le,Te,qe.data)}}}else{if(de=_.mipmaps,D&&ue){de.length>0&&Fe++;let $=Qe(he[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Fe,ze,$.width,$.height)}for(let $=0;$<6;$++)if(ae){D?Se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,he[$].width,he[$].height,Le,Te,he[$].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,ze,he[$].width,he[$].height,0,Le,Te,he[$].data);for(let Be=0;Be<de.length;Be++){let lt=de[Be].image[$].image;D?Se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,Be+1,0,0,lt.width,lt.height,Le,Te,lt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,Be+1,ze,lt.width,lt.height,0,Le,Te,lt.data)}}else{D?Se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,Le,Te,he[$]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,ze,Le,Te,he[$]);for(let Be=0;Be<de.length;Be++){let qe=de[Be];D?Se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,Be+1,0,0,Le,Te,qe.image[$]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,Be+1,ze,Le,Te,qe.image[$])}}}m(_)&&p(i.TEXTURE_CUBE_MAP),K.__version=re.version,_.onUpdate&&_.onUpdate(_)}b.__version=_.version}function j(b,_,H,ne,re,K){let oe=r.convert(H.format,H.colorSpace),ee=r.convert(H.type),Me=E(H.internalFormat,oe,ee,H.colorSpace),fe=n.get(_),ae=n.get(H);if(ae.__renderTarget=_,!fe.__hasExternalTextures){let he=Math.max(1,_.width>>K),De=Math.max(1,_.height>>K);re===i.TEXTURE_3D||re===i.TEXTURE_2D_ARRAY?t.texImage3D(re,K,Me,he,De,_.depth,0,oe,ee,null):t.texImage2D(re,K,Me,he,De,0,oe,ee,null)}t.bindFramebuffer(i.FRAMEBUFFER,b),be(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ne,re,ae.__webglTexture,0,Ye(_)):(re===i.TEXTURE_2D||re>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&re<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ne,re,ae.__webglTexture,K),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ee(b,_,H){if(i.bindRenderbuffer(i.RENDERBUFFER,b),_.depthBuffer){let ne=_.depthTexture,re=ne&&ne.isDepthTexture?ne.type:null,K=S(_.stencilBuffer,re),oe=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ee=Ye(_);be(_)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ee,K,_.width,_.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,ee,K,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,K,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,oe,i.RENDERBUFFER,b)}else{let ne=_.textures;for(let re=0;re<ne.length;re++){let K=ne[re],oe=r.convert(K.format,K.colorSpace),ee=r.convert(K.type),Me=E(K.internalFormat,oe,ee,K.colorSpace),fe=Ye(_);H&&be(_)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,fe,Me,_.width,_.height):be(_)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,fe,Me,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,Me,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function J(b,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,b),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let ne=n.get(_.depthTexture);ne.__renderTarget=_,(!ne.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),ie(_.depthTexture,0);let re=ne.__webglTexture,K=Ye(_);if(_.depthTexture.format===$i)be(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,re,0,K):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,re,0);else if(_.depthTexture.format===hs)be(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,re,0,K):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,re,0);else throw new Error("Unknown depthTexture format")}function le(b){let _=n.get(b),H=b.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==b.depthTexture){let ne=b.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),ne){let re=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,ne.removeEventListener("dispose",re)};ne.addEventListener("dispose",re),_.__depthDisposeCallback=re}_.__boundDepthTexture=ne}if(b.depthTexture&&!_.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");let ne=b.texture.mipmaps;ne&&ne.length>0?J(_.__webglFramebuffer[0],b):J(_.__webglFramebuffer,b)}else if(H){_.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)if(t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[ne]),_.__webglDepthbuffer[ne]===void 0)_.__webglDepthbuffer[ne]=i.createRenderbuffer(),Ee(_.__webglDepthbuffer[ne],b,!1);else{let re=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,K=_.__webglDepthbuffer[ne];i.bindRenderbuffer(i.RENDERBUFFER,K),i.framebufferRenderbuffer(i.FRAMEBUFFER,re,i.RENDERBUFFER,K)}}else{let ne=b.texture.mipmaps;if(ne&&ne.length>0?t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),Ee(_.__webglDepthbuffer,b,!1);else{let re=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,K=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,K),i.framebufferRenderbuffer(i.FRAMEBUFFER,re,i.RENDERBUFFER,K)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function ke(b,_,H){let ne=n.get(b);_!==void 0&&j(ne.__webglFramebuffer,b,b.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),H!==void 0&&le(b)}function T(b){let _=b.texture,H=n.get(b),ne=n.get(_);b.addEventListener("dispose",N);let re=b.textures,K=b.isWebGLCubeRenderTarget===!0,oe=re.length>1;if(oe||(ne.__webglTexture===void 0&&(ne.__webglTexture=i.createTexture()),ne.__version=_.version,o.memory.textures++),K){H.__webglFramebuffer=[];for(let ee=0;ee<6;ee++)if(_.mipmaps&&_.mipmaps.length>0){H.__webglFramebuffer[ee]=[];for(let Me=0;Me<_.mipmaps.length;Me++)H.__webglFramebuffer[ee][Me]=i.createFramebuffer()}else H.__webglFramebuffer[ee]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){H.__webglFramebuffer=[];for(let ee=0;ee<_.mipmaps.length;ee++)H.__webglFramebuffer[ee]=i.createFramebuffer()}else H.__webglFramebuffer=i.createFramebuffer();if(oe)for(let ee=0,Me=re.length;ee<Me;ee++){let fe=n.get(re[ee]);fe.__webglTexture===void 0&&(fe.__webglTexture=i.createTexture(),o.memory.textures++)}if(b.samples>0&&be(b)===!1){H.__webglMultisampledFramebuffer=i.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let ee=0;ee<re.length;ee++){let Me=re[ee];H.__webglColorRenderbuffer[ee]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,H.__webglColorRenderbuffer[ee]);let fe=r.convert(Me.format,Me.colorSpace),ae=r.convert(Me.type),he=E(Me.internalFormat,fe,ae,Me.colorSpace,b.isXRRenderTarget===!0),De=Ye(b);i.renderbufferStorageMultisample(i.RENDERBUFFER,De,he,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ee,i.RENDERBUFFER,H.__webglColorRenderbuffer[ee])}i.bindRenderbuffer(i.RENDERBUFFER,null),b.depthBuffer&&(H.__webglDepthRenderbuffer=i.createRenderbuffer(),Ee(H.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(K){t.bindTexture(i.TEXTURE_CUBE_MAP,ne.__webglTexture),xe(i.TEXTURE_CUBE_MAP,_);for(let ee=0;ee<6;ee++)if(_.mipmaps&&_.mipmaps.length>0)for(let Me=0;Me<_.mipmaps.length;Me++)j(H.__webglFramebuffer[ee][Me],b,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Me);else j(H.__webglFramebuffer[ee],b,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0);m(_)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(oe){for(let ee=0,Me=re.length;ee<Me;ee++){let fe=re[ee],ae=n.get(fe),he=i.TEXTURE_2D;(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(he=b.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(he,ae.__webglTexture),xe(he,fe),j(H.__webglFramebuffer,b,fe,i.COLOR_ATTACHMENT0+ee,he,0),m(fe)&&p(he)}t.unbindTexture()}else{let ee=i.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(ee=b.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ee,ne.__webglTexture),xe(ee,_),_.mipmaps&&_.mipmaps.length>0)for(let Me=0;Me<_.mipmaps.length;Me++)j(H.__webglFramebuffer[Me],b,_,i.COLOR_ATTACHMENT0,ee,Me);else j(H.__webglFramebuffer,b,_,i.COLOR_ATTACHMENT0,ee,0);m(_)&&p(ee),t.unbindTexture()}b.depthBuffer&&le(b)}function Oe(b){let _=b.textures;for(let H=0,ne=_.length;H<ne;H++){let re=_[H];if(m(re)){let K=C(b),oe=n.get(re).__webglTexture;t.bindTexture(K,oe),p(K),t.unbindTexture()}}}let Ce=[],ye=[];function Ie(b){if(b.samples>0){if(be(b)===!1){let _=b.textures,H=b.width,ne=b.height,re=i.COLOR_BUFFER_BIT,K=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,oe=n.get(b),ee=_.length>1;if(ee)for(let fe=0;fe<_.length;fe++)t.bindFramebuffer(i.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,oe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,oe.__webglMultisampledFramebuffer);let Me=b.texture.mipmaps;Me&&Me.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,oe.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,oe.__webglFramebuffer);for(let fe=0;fe<_.length;fe++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(re|=i.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(re|=i.STENCIL_BUFFER_BIT)),ee){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,oe.__webglColorRenderbuffer[fe]);let ae=n.get(_[fe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ae,0)}i.blitFramebuffer(0,0,H,ne,0,0,H,ne,re,i.NEAREST),l===!0&&(Ce.length=0,ye.length=0,Ce.push(i.COLOR_ATTACHMENT0+fe),b.depthBuffer&&b.resolveDepthBuffer===!1&&(Ce.push(K),ye.push(K),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,ye)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ce))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ee)for(let fe=0;fe<_.length;fe++){t.bindFramebuffer(i.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.RENDERBUFFER,oe.__webglColorRenderbuffer[fe]);let ae=n.get(_[fe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,oe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.TEXTURE_2D,ae,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,oe.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&l){let _=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function Ye(b){return Math.min(s.maxSamples,b.samples)}function be(b){let _=n.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function We(b){let _=o.render.frame;h.get(b)!==_&&(h.set(b,_),b.update())}function je(b,_){let H=b.colorSpace,ne=b.format,re=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||H!==yi&&H!==Xn&&(ot.getTransfer(H)===ut?(ne!==dn||re!==Mn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),_}function Qe(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(c.width=b.naturalWidth||b.width,c.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(c.width=b.displayWidth,c.height=b.displayHeight):(c.width=b.width,c.height=b.height),c}this.allocateTextureUnit=Y,this.resetTextureUnits=V,this.setTexture2D=ie,this.setTexture2DArray=te,this.setTexture3D=ge,this.setTextureCube=Z,this.rebindTextures=ke,this.setupRenderTarget=T,this.updateRenderTargetMipmap=Oe,this.updateMultisampleRenderTarget=Ie,this.setupDepthRenderbuffer=le,this.setupFrameBufferTexture=j,this.useMultisampledRTT=be}function Fg(i,e){function t(n,s=Xn){let r,o=ot.getTransfer(s);if(n===Mn)return i.UNSIGNED_BYTE;if(n===wo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Eo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===al)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===ll)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===rl)return i.BYTE;if(n===ol)return i.SHORT;if(n===as)return i.UNSIGNED_SHORT;if(n===To)return i.INT;if(n===ui)return i.UNSIGNED_INT;if(n===Sn)return i.FLOAT;if(n===ls)return i.HALF_FLOAT;if(n===cl)return i.ALPHA;if(n===hl)return i.RGB;if(n===dn)return i.RGBA;if(n===$i)return i.DEPTH_COMPONENT;if(n===hs)return i.DEPTH_STENCIL;if(n===Ao)return i.RED;if(n===Co)return i.RED_INTEGER;if(n===ul)return i.RG;if(n===Ro)return i.RG_INTEGER;if(n===Io)return i.RGBA_INTEGER;if(n===js||n===Qs||n===er||n===tr)if(o===ut)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===js)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Qs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===er)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===tr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===js)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Qs)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===er)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===tr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Po||n===Do||n===Lo||n===Uo)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Po)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Do)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Lo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Uo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===No||n===Fo||n===Oo)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===No||n===Fo)return o===ut?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Oo)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Bo||n===ko||n===zo||n===Vo||n===Ho||n===Go||n===Wo||n===Xo||n===qo||n===Yo||n===Zo||n===Jo||n===$o||n===Ko)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Bo)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ko)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===zo)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Vo)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ho)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Go)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Wo)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Xo)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===qo)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Yo)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Zo)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Jo)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===$o)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ko)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===jo||n===Qo||n===ea)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===jo)return o===ut?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Qo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ea)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ta||n===na||n===ia||n===sa)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===ta)return r.COMPRESSED_RED_RGTC1_EXT;if(n===na)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ia)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===sa)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===cs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var Og=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Bg=`
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

}`,Ul=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new zs(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new tn({vertexShader:Og,fragmentShader:Bg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new yt(new wn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Nl=class extends zn{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,g=null,v=typeof XRWebGLBinding<"u",m=new Ul,p={},C=t.getContextAttributes(),E=null,S=null,R=[],A=[],N=new Xe,w=null,y=new $t;y.viewport=new _t;let M=new $t;M.viewport=new _t;let L=[y,M],V=new fo,Y=null,Q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(U){let O=R[U];return O===void 0&&(O=new es,R[U]=O),O.getTargetRaySpace()},this.getControllerGrip=function(U){let O=R[U];return O===void 0&&(O=new es,R[U]=O),O.getGripSpace()},this.getHand=function(U){let O=R[U];return O===void 0&&(O=new es,R[U]=O),O.getHandSpace()};function ie(U){let O=A.indexOf(U.inputSource);if(O===-1)return;let j=R[O];j!==void 0&&(j.update(U.inputSource,U.frame,c||o),j.dispatchEvent({type:U.type,data:U.inputSource}))}function te(){s.removeEventListener("select",ie),s.removeEventListener("selectstart",ie),s.removeEventListener("selectend",ie),s.removeEventListener("squeeze",ie),s.removeEventListener("squeezestart",ie),s.removeEventListener("squeezeend",ie),s.removeEventListener("end",te),s.removeEventListener("inputsourceschange",ge);for(let U=0;U<R.length;U++){let O=A[U];O!==null&&(A[U]=null,R[U].disconnect(O))}Y=null,Q=null,m.reset();for(let U in p)delete p[U];e.setRenderTarget(E),f=null,u=null,d=null,s=null,S=null,_e.stop(),n.isPresenting=!1,e.setPixelRatio(w),e.setSize(N.width,N.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(U){r=U,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(U){a=U,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(U){c=U},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&v&&(d=new XRWebGLBinding(s,t)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(U){if(s=U,s!==null){if(E=e.getRenderTarget(),s.addEventListener("select",ie),s.addEventListener("selectstart",ie),s.addEventListener("selectend",ie),s.addEventListener("squeeze",ie),s.addEventListener("squeezestart",ie),s.addEventListener("squeezeend",ie),s.addEventListener("end",te),s.addEventListener("inputsourceschange",ge),C.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(N),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let j=null,Ee=null,J=null;C.depth&&(J=C.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,j=C.stencil?hs:$i,Ee=C.stencil?cs:ui);let le={colorFormat:t.RGBA8,depthFormat:J,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(le),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),S=new hn(u.textureWidth,u.textureHeight,{format:dn,type:Mn,depthTexture:new ks(u.textureWidth,u.textureHeight,Ee,void 0,void 0,void 0,void 0,void 0,void 0,j),stencilBuffer:C.stencil,colorSpace:e.outputColorSpace,samples:C.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{let j={antialias:C.antialias,alpha:!0,depth:C.depth,stencil:C.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,j),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),S=new hn(f.framebufferWidth,f.framebufferHeight,{format:dn,type:Mn,colorSpace:e.outputColorSpace,stencilBuffer:C.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),_e.setContext(s),_e.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function ge(U){for(let O=0;O<U.removed.length;O++){let j=U.removed[O],Ee=A.indexOf(j);Ee>=0&&(A[Ee]=null,R[Ee].disconnect(j))}for(let O=0;O<U.added.length;O++){let j=U.added[O],Ee=A.indexOf(j);if(Ee===-1){for(let le=0;le<R.length;le++)if(le>=A.length){A.push(j),Ee=le;break}else if(A[le]===null){A[le]=j,Ee=le;break}if(Ee===-1)break}let J=R[Ee];J&&J.connect(j)}}let Z=new B,P=new B;function X(U,O,j){Z.setFromMatrixPosition(O.matrixWorld),P.setFromMatrixPosition(j.matrixWorld);let Ee=Z.distanceTo(P),J=O.projectionMatrix.elements,le=j.projectionMatrix.elements,ke=J[14]/(J[10]-1),T=J[14]/(J[10]+1),Oe=(J[9]+1)/J[5],Ce=(J[9]-1)/J[5],ye=(J[8]-1)/J[0],Ie=(le[8]+1)/le[0],Ye=ke*ye,be=ke*Ie,We=Ee/(-ye+Ie),je=We*-ye;if(O.matrixWorld.decompose(U.position,U.quaternion,U.scale),U.translateX(je),U.translateZ(We),U.matrixWorld.compose(U.position,U.quaternion,U.scale),U.matrixWorldInverse.copy(U.matrixWorld).invert(),J[10]===-1)U.projectionMatrix.copy(O.projectionMatrix),U.projectionMatrixInverse.copy(O.projectionMatrixInverse);else{let Qe=ke+We,b=T+We,_=Ye-je,H=be+(Ee-je),ne=Oe*T/b*Qe,re=Ce*T/b*Qe;U.projectionMatrix.makePerspective(_,H,ne,re,Qe,b),U.projectionMatrixInverse.copy(U.projectionMatrix).invert()}}function W(U,O){O===null?U.matrixWorld.copy(U.matrix):U.matrixWorld.multiplyMatrices(O.matrixWorld,U.matrix),U.matrixWorldInverse.copy(U.matrixWorld).invert()}this.updateCamera=function(U){if(s===null)return;let O=U.near,j=U.far;m.texture!==null&&(m.depthNear>0&&(O=m.depthNear),m.depthFar>0&&(j=m.depthFar)),V.near=M.near=y.near=O,V.far=M.far=y.far=j,(Y!==V.near||Q!==V.far)&&(s.updateRenderState({depthNear:V.near,depthFar:V.far}),Y=V.near,Q=V.far),V.layers.mask=U.layers.mask|6,y.layers.mask=V.layers.mask&3,M.layers.mask=V.layers.mask&5;let Ee=U.parent,J=V.cameras;W(V,Ee);for(let le=0;le<J.length;le++)W(J[le],Ee);J.length===2?X(V,y,M):V.projectionMatrix.copy(y.projectionMatrix),xe(U,V,Ee)};function xe(U,O,j){j===null?U.matrix.copy(O.matrixWorld):(U.matrix.copy(j.matrixWorld),U.matrix.invert(),U.matrix.multiply(O.matrixWorld)),U.matrix.decompose(U.position,U.quaternion,U.scale),U.updateMatrixWorld(!0),U.projectionMatrix.copy(O.projectionMatrix),U.projectionMatrixInverse.copy(O.projectionMatrixInverse),U.isPerspectiveCamera&&(U.fov=Ki*2*Math.atan(1/U.projectionMatrix.elements[5]),U.zoom=1)}this.getCamera=function(){return V},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(U){l=U,u!==null&&(u.fixedFoveation=U),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=U)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(V)},this.getCameraTexture=function(U){return p[U]};let Re=null;function ve(U,O){if(h=O.getViewerPose(c||o),g=O,h!==null){let j=h.views;f!==null&&(e.setRenderTargetFramebuffer(S,f.framebuffer),e.setRenderTarget(S));let Ee=!1;j.length!==V.cameras.length&&(V.cameras.length=0,Ee=!0);for(let T=0;T<j.length;T++){let Oe=j[T],Ce=null;if(f!==null)Ce=f.getViewport(Oe);else{let Ie=d.getViewSubImage(u,Oe);Ce=Ie.viewport,T===0&&(e.setRenderTargetTextures(S,Ie.colorTexture,Ie.depthStencilTexture),e.setRenderTarget(S))}let ye=L[T];ye===void 0&&(ye=new $t,ye.layers.enable(T),ye.viewport=new _t,L[T]=ye),ye.matrix.fromArray(Oe.transform.matrix),ye.matrix.decompose(ye.position,ye.quaternion,ye.scale),ye.projectionMatrix.fromArray(Oe.projectionMatrix),ye.projectionMatrixInverse.copy(ye.projectionMatrix).invert(),ye.viewport.set(Ce.x,Ce.y,Ce.width,Ce.height),T===0&&(V.matrix.copy(ye.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale)),Ee===!0&&V.cameras.push(ye)}let J=s.enabledFeatures;if(J&&J.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){d=n.getBinding();let T=d.getDepthInformation(j[0]);T&&T.isValid&&T.texture&&m.init(T,s.renderState)}if(J&&J.includes("camera-access")&&v){e.state.unbindTexture(),d=n.getBinding();for(let T=0;T<j.length;T++){let Oe=j[T].camera;if(Oe){let Ce=p[Oe];Ce||(Ce=new zs,p[Oe]=Ce);let ye=d.getCameraImage(Oe);Ce.sourceTexture=ye}}}}for(let j=0;j<R.length;j++){let Ee=A[j],J=R[j];Ee!==null&&J!==void 0&&J.update(Ee,O,c||o)}Re&&Re(U,O),O.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:O}),g=null}let _e=new Oh;_e.setAnimationLoop(ve),this.setAnimationLoop=function(U){Re=U},this.dispose=function(){}}},Ai=new vn,kg=new ft;function zg(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,_l(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,C,E,S){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,S)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),v(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,C,E):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===qt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===qt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let C=e.get(p),E=C.envMap,S=C.envMapRotation;E&&(m.envMap.value=E,Ai.copy(S),Ai.x*=-1,Ai.y*=-1,Ai.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Ai.y*=-1,Ai.z*=-1),m.envMapRotation.value.setFromMatrix4(kg.makeRotationFromEuler(Ai)),m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,C,E){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*C,m.scale.value=E*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,C){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===qt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=C.texture,m.transmissionSamplerSize.value.set(C.width,C.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){let C=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(C.matrixWorld),m.nearDistance.value=C.shadow.camera.near,m.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Vg(i,e,t,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(C,E){let S=E.program;n.uniformBlockBinding(C,S)}function c(C,E){let S=s[C.id];S===void 0&&(g(C),S=h(C),s[C.id]=S,C.addEventListener("dispose",m));let R=E.program;n.updateUBOMapping(C,R);let A=e.render.frame;r[C.id]!==A&&(u(C),r[C.id]=A)}function h(C){let E=d();C.__bindingPointIndex=E;let S=i.createBuffer(),R=C.__size,A=C.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,R,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,S),S}function d(){for(let C=0;C<a;C++)if(o.indexOf(C)===-1)return o.push(C),C;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(C){let E=s[C.id],S=C.uniforms,R=C.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let A=0,N=S.length;A<N;A++){let w=Array.isArray(S[A])?S[A]:[S[A]];for(let y=0,M=w.length;y<M;y++){let L=w[y];if(f(L,A,y,R)===!0){let V=L.__offset,Y=Array.isArray(L.value)?L.value:[L.value],Q=0;for(let ie=0;ie<Y.length;ie++){let te=Y[ie],ge=v(te);typeof te=="number"||typeof te=="boolean"?(L.__data[0]=te,i.bufferSubData(i.UNIFORM_BUFFER,V+Q,L.__data)):te.isMatrix3?(L.__data[0]=te.elements[0],L.__data[1]=te.elements[1],L.__data[2]=te.elements[2],L.__data[3]=0,L.__data[4]=te.elements[3],L.__data[5]=te.elements[4],L.__data[6]=te.elements[5],L.__data[7]=0,L.__data[8]=te.elements[6],L.__data[9]=te.elements[7],L.__data[10]=te.elements[8],L.__data[11]=0):(te.toArray(L.__data,Q),Q+=ge.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,V,L.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(C,E,S,R){let A=C.value,N=E+"_"+S;if(R[N]===void 0)return typeof A=="number"||typeof A=="boolean"?R[N]=A:R[N]=A.clone(),!0;{let w=R[N];if(typeof A=="number"||typeof A=="boolean"){if(w!==A)return R[N]=A,!0}else if(w.equals(A)===!1)return w.copy(A),!0}return!1}function g(C){let E=C.uniforms,S=0,R=16;for(let N=0,w=E.length;N<w;N++){let y=Array.isArray(E[N])?E[N]:[E[N]];for(let M=0,L=y.length;M<L;M++){let V=y[M],Y=Array.isArray(V.value)?V.value:[V.value];for(let Q=0,ie=Y.length;Q<ie;Q++){let te=Y[Q],ge=v(te),Z=S%R,P=Z%ge.boundary,X=Z+P;S+=P,X!==0&&R-X<ge.storage&&(S+=R-X),V.__data=new Float32Array(ge.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=S,S+=ge.storage}}}let A=S%R;return A>0&&(S+=R-A),C.__size=S,C.__cache={},this}function v(C){let E={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(E.boundary=4,E.storage=4):C.isVector2?(E.boundary=8,E.storage=8):C.isVector3||C.isColor?(E.boundary=16,E.storage=12):C.isVector4?(E.boundary=16,E.storage=16):C.isMatrix3?(E.boundary=48,E.storage=48):C.isMatrix4?(E.boundary=64,E.storage=64):C.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",C),E}function m(C){let E=C.target;E.removeEventListener("dispose",m);let S=o.indexOf(E.__bindingPointIndex);o.splice(S,1),i.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function p(){for(let C in s)i.deleteBuffer(s[C]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}var ca=class{constructor(e={}){let{canvas:t=ch(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;let g=new Uint32Array(4),v=new Int32Array(4),m=null,p=null,C=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Wn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let S=this,R=!1;this._outputColorSpace=St;let A=0,N=0,w=null,y=-1,M=null,L=new _t,V=new _t,Y=null,Q=new $e(0),ie=0,te=t.width,ge=t.height,Z=1,P=null,X=null,W=new _t(0,0,te,ge),xe=new _t(0,0,te,ge),Re=!1,ve=new is,_e=!1,U=!1,O=new ft,j=new B,Ee=new _t,J={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},le=!1;function ke(){return w===null?Z:1}let T=n;function Oe(x,I){return t.getContext(x,I)}try{let x={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"180"}`),t.addEventListener("webglcontextlost",Se,!1),t.addEventListener("webglcontextrestored",Fe,!1),t.addEventListener("webglcontextcreationerror",de,!1),T===null){let I="webgl2";if(T=Oe(I,x),T===null)throw Oe(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(x){throw console.error("THREE.WebGLRenderer: "+x.message),x}let Ce,ye,Ie,Ye,be,We,je,Qe,b,_,H,ne,re,K,oe,ee,Me,fe,ae,he,De,Le,Te,ze;function D(){Ce=new rm(T),Ce.init(),Le=new Fg(T,Ce),ye=new jp(T,Ce,e,Le),Ie=new Ug(T,Ce),ye.reversedDepthBuffer&&u&&Ie.buffers.depth.setReversed(!0),Ye=new lm(T),be=new Mg,We=new Ng(T,Ce,Ie,be,ye,Le,Ye),je=new em(S),Qe=new sm(S),b=new fd(T),Te=new $p(T,b),_=new om(T,b,Ye,Te),H=new hm(T,_,b,Ye),ae=new cm(T,ye,We),ee=new Qp(be),ne=new yg(S,je,Qe,Ce,ye,Te,ee),re=new zg(S,be),K=new bg,oe=new Rg(Ce),fe=new Jp(S,je,Qe,Ie,H,f,l),Me=new Dg(S,H,ye),ze=new Vg(T,Ye,ye,Ie),he=new Kp(T,Ce,Ye),De=new am(T,Ce,Ye),Ye.programs=ne.programs,S.capabilities=ye,S.extensions=Ce,S.properties=be,S.renderLists=K,S.shadowMap=Me,S.state=Ie,S.info=Ye}D();let ue=new Nl(S,T);this.xr=ue,this.getContext=function(){return T},this.getContextAttributes=function(){return T.getContextAttributes()},this.forceContextLoss=function(){let x=Ce.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){let x=Ce.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(x){x!==void 0&&(Z=x,this.setSize(te,ge,!1))},this.getSize=function(x){return x.set(te,ge)},this.setSize=function(x,I,k=!0){if(ue.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}te=x,ge=I,t.width=Math.floor(x*Z),t.height=Math.floor(I*Z),k===!0&&(t.style.width=x+"px",t.style.height=I+"px"),this.setViewport(0,0,x,I)},this.getDrawingBufferSize=function(x){return x.set(te*Z,ge*Z).floor()},this.setDrawingBufferSize=function(x,I,k){te=x,ge=I,Z=k,t.width=Math.floor(x*k),t.height=Math.floor(I*k),this.setViewport(0,0,x,I)},this.getCurrentViewport=function(x){return x.copy(L)},this.getViewport=function(x){return x.copy(W)},this.setViewport=function(x,I,k,z){x.isVector4?W.set(x.x,x.y,x.z,x.w):W.set(x,I,k,z),Ie.viewport(L.copy(W).multiplyScalar(Z).round())},this.getScissor=function(x){return x.copy(xe)},this.setScissor=function(x,I,k,z){x.isVector4?xe.set(x.x,x.y,x.z,x.w):xe.set(x,I,k,z),Ie.scissor(V.copy(xe).multiplyScalar(Z).round())},this.getScissorTest=function(){return Re},this.setScissorTest=function(x){Ie.setScissorTest(Re=x)},this.setOpaqueSort=function(x){P=x},this.setTransparentSort=function(x){X=x},this.getClearColor=function(x){return x.copy(fe.getClearColor())},this.setClearColor=function(){fe.setClearColor(...arguments)},this.getClearAlpha=function(){return fe.getClearAlpha()},this.setClearAlpha=function(){fe.setClearAlpha(...arguments)},this.clear=function(x=!0,I=!0,k=!0){let z=0;if(x){let F=!1;if(w!==null){let q=w.texture.format;F=q===Io||q===Ro||q===Co}if(F){let q=w.texture.type,pe=q===Mn||q===ui||q===as||q===cs||q===wo||q===Eo,we=fe.getClearColor(),Ae=fe.getClearAlpha(),Pe=we.r,Ve=we.g,Ne=we.b;pe?(g[0]=Pe,g[1]=Ve,g[2]=Ne,g[3]=Ae,T.clearBufferuiv(T.COLOR,0,g)):(v[0]=Pe,v[1]=Ve,v[2]=Ne,v[3]=Ae,T.clearBufferiv(T.COLOR,0,v))}else z|=T.COLOR_BUFFER_BIT}I&&(z|=T.DEPTH_BUFFER_BIT),k&&(z|=T.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),T.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Se,!1),t.removeEventListener("webglcontextrestored",Fe,!1),t.removeEventListener("webglcontextcreationerror",de,!1),fe.dispose(),K.dispose(),oe.dispose(),be.dispose(),je.dispose(),Qe.dispose(),H.dispose(),Te.dispose(),ze.dispose(),ne.dispose(),ue.dispose(),ue.removeEventListener("sessionstart",rn),ue.removeEventListener("sessionend",hr),pn.stop()};function Se(x){x.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function Fe(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;let x=Ye.autoReset,I=Me.enabled,k=Me.autoUpdate,z=Me.needsUpdate,F=Me.type;D(),Ye.autoReset=x,Me.enabled=I,Me.autoUpdate=k,Me.needsUpdate=z,Me.type=F}function de(x){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function $(x){let I=x.target;I.removeEventListener("dispose",$),Be(I)}function Be(x){qe(x),be.remove(x)}function qe(x){let I=be.get(x).programs;I!==void 0&&(I.forEach(function(k){ne.releaseProgram(k)}),x.isShaderMaterial&&ne.releaseShaderCache(x))}this.renderBufferDirect=function(x,I,k,z,F,q){I===null&&(I=J);let pe=F.isMesh&&F.matrixWorld.determinant()<0,we=nt(x,I,k,z,F);Ie.setMaterial(z,pe);let Ae=k.index,Pe=1;if(z.wireframe===!0){if(Ae=_.getWireframeAttribute(k),Ae===void 0)return;Pe=2}let Ve=k.drawRange,Ne=k.attributes.position,Ge=Ve.start*Pe,it=(Ve.start+Ve.count)*Pe;q!==null&&(Ge=Math.max(Ge,q.start*Pe),it=Math.min(it,(q.start+q.count)*Pe)),Ae!==null?(Ge=Math.max(Ge,0),it=Math.min(it,Ae.count)):Ne!=null&&(Ge=Math.max(Ge,0),it=Math.min(it,Ne.count));let pt=it-Ge;if(pt<0||pt===1/0)return;Te.setup(F,z,we,k,Ae);let dt,ct=he;if(Ae!==null&&(dt=b.get(Ae),ct=De,ct.setIndex(dt)),F.isMesh)z.wireframe===!0?(Ie.setLineWidth(z.wireframeLinewidth*ke()),ct.setMode(T.LINES)):ct.setMode(T.TRIANGLES);else if(F.isLine){let He=z.linewidth;He===void 0&&(He=1),Ie.setLineWidth(He*ke()),F.isLineSegments?ct.setMode(T.LINES):F.isLineLoop?ct.setMode(T.LINE_LOOP):ct.setMode(T.LINE_STRIP)}else F.isPoints?ct.setMode(T.POINTS):F.isSprite&&ct.setMode(T.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)ji("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ct.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(Ce.get("WEBGL_multi_draw"))ct.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{let He=F._multiDrawStarts,Je=F._multiDrawCounts,tt=F._multiDrawCount,xt=Ae?b.get(Ae).bytesPerElement:1,Dn=be.get(z).currentProgram.getUniforms();for(let Vt=0;Vt<tt;Vt++)Dn.setValue(T,"_gl_DrawID",Vt),ct.render(He[Vt]/xt,Je[Vt])}else if(F.isInstancedMesh)ct.renderInstances(Ge,pt,F.count);else if(k.isInstancedBufferGeometry){let He=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,Je=Math.min(k.instanceCount,He);ct.renderInstances(Ge,pt,Je)}else ct.render(Ge,pt)};function lt(x,I,k){x.transparent===!0&&x.side===Cn&&x.forceSinglePass===!1?(x.side=qt,x.needsUpdate=!0,Li(x,I,k),x.side=kn,x.needsUpdate=!0,Li(x,I,k),x.side=Cn):Li(x,I,k)}this.compile=function(x,I,k=null){k===null&&(k=x),p=oe.get(k),p.init(I),E.push(p),k.traverseVisible(function(F){F.isLight&&F.layers.test(I.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),x!==k&&x.traverseVisible(function(F){F.isLight&&F.layers.test(I.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),p.setupLights();let z=new Set;return x.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;let q=F.material;if(q)if(Array.isArray(q))for(let pe=0;pe<q.length;pe++){let we=q[pe];lt(we,k,F),z.add(we)}else lt(q,k,F),z.add(q)}),p=E.pop(),z},this.compileAsync=function(x,I,k=null){let z=this.compile(x,I,k);return new Promise(F=>{function q(){if(z.forEach(function(pe){be.get(pe).currentProgram.isReady()&&z.delete(pe)}),z.size===0){F(x);return}setTimeout(q,10)}Ce.get("KHR_parallel_shader_compile")!==null?q():setTimeout(q,10)})};let rt=null;function sn(x){rt&&rt(x)}function rn(){pn.stop()}function hr(){pn.start()}let pn=new Oh;pn.setAnimationLoop(sn),typeof self<"u"&&pn.setContext(self),this.setAnimationLoop=function(x){rt=x,ue.setAnimationLoop(x),x===null?pn.stop():pn.start()},ue.addEventListener("sessionstart",rn),ue.addEventListener("sessionend",hr),this.render=function(x,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),ue.enabled===!0&&ue.isPresenting===!0&&(ue.cameraAutoUpdate===!0&&ue.updateCamera(I),I=ue.getCamera()),x.isScene===!0&&x.onBeforeRender(S,x,I,w),p=oe.get(x,E.length),p.init(I),E.push(p),O.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),ve.setFromProjectionMatrix(O,xn,I.reversedDepth),U=this.localClippingEnabled,_e=ee.init(this.clippingPlanes,U),m=K.get(x,C.length),m.init(),C.push(m),ue.enabled===!0&&ue.isPresenting===!0){let q=S.xr.getDepthSensingMesh();q!==null&&gs(q,I,-1/0,S.sortObjects)}gs(x,I,0,S.sortObjects),m.finish(),S.sortObjects===!0&&m.sort(P,X),le=ue.enabled===!1||ue.isPresenting===!1||ue.hasDepthSensing()===!1,le&&fe.addToRenderList(m,x),this.info.render.frame++,_e===!0&&ee.beginShadows();let k=p.state.shadowsArray;Me.render(k,x,I),_e===!0&&ee.endShadows(),this.info.autoReset===!0&&this.info.reset();let z=m.opaque,F=m.transmissive;if(p.setupLights(),I.isArrayCamera){let q=I.cameras;if(F.length>0)for(let pe=0,we=q.length;pe<we;pe++){let Ae=q[pe];Zn(z,F,x,Ae)}le&&fe.render(x);for(let pe=0,we=q.length;pe<we;pe++){let Ae=q[pe];ur(m,x,Ae,Ae.viewport)}}else F.length>0&&Zn(z,F,x,I),le&&fe.render(x),ur(m,x,I);w!==null&&N===0&&(We.updateMultisampleRenderTarget(w),We.updateRenderTargetMipmap(w)),x.isScene===!0&&x.onAfterRender(S,x,I),Te.resetDefaultState(),y=-1,M=null,E.pop(),E.length>0?(p=E[E.length-1],_e===!0&&ee.setGlobalState(S.clippingPlanes,p.state.camera)):p=null,C.pop(),C.length>0?m=C[C.length-1]:m=null};function gs(x,I,k,z){if(x.visible===!1)return;if(x.layers.test(I.layers)){if(x.isGroup)k=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(I);else if(x.isLight)p.pushLight(x),x.castShadow&&p.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||ve.intersectsSprite(x)){z&&Ee.setFromMatrixPosition(x.matrixWorld).applyMatrix4(O);let pe=H.update(x),we=x.material;we.visible&&m.push(x,pe,we,k,Ee.z,null)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||ve.intersectsObject(x))){let pe=H.update(x),we=x.material;if(z&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),Ee.copy(x.boundingSphere.center)):(pe.boundingSphere===null&&pe.computeBoundingSphere(),Ee.copy(pe.boundingSphere.center)),Ee.applyMatrix4(x.matrixWorld).applyMatrix4(O)),Array.isArray(we)){let Ae=pe.groups;for(let Pe=0,Ve=Ae.length;Pe<Ve;Pe++){let Ne=Ae[Pe],Ge=we[Ne.materialIndex];Ge&&Ge.visible&&m.push(x,pe,Ge,k,Ee.z,Ne)}}else we.visible&&m.push(x,pe,we,k,Ee.z,null)}}let q=x.children;for(let pe=0,we=q.length;pe<we;pe++)gs(q[pe],I,k,z)}function ur(x,I,k,z){let F=x.opaque,q=x.transmissive,pe=x.transparent;p.setupLightsView(k),_e===!0&&ee.setGlobalState(S.clippingPlanes,k),z&&Ie.viewport(L.copy(z)),F.length>0&&Di(F,I,k),q.length>0&&Di(q,I,k),pe.length>0&&Di(pe,I,k),Ie.buffers.depth.setTest(!0),Ie.buffers.depth.setMask(!0),Ie.buffers.color.setMask(!0),Ie.setPolygonOffset(!1)}function Zn(x,I,k,z){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[z.id]===void 0&&(p.state.transmissionRenderTarget[z.id]=new hn(1,1,{generateMipmaps:!0,type:Ce.has("EXT_color_buffer_half_float")||Ce.has("EXT_color_buffer_float")?ls:Mn,minFilter:hi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ot.workingColorSpace}));let q=p.state.transmissionRenderTarget[z.id],pe=z.viewport||L;q.setSize(pe.z*S.transmissionResolutionScale,pe.w*S.transmissionResolutionScale);let we=S.getRenderTarget(),Ae=S.getActiveCubeFace(),Pe=S.getActiveMipmapLevel();S.setRenderTarget(q),S.getClearColor(Q),ie=S.getClearAlpha(),ie<1&&S.setClearColor(16777215,.5),S.clear(),le&&fe.render(k);let Ve=S.toneMapping;S.toneMapping=Wn;let Ne=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),p.setupLightsView(z),_e===!0&&ee.setGlobalState(S.clippingPlanes,z),Di(x,k,z),We.updateMultisampleRenderTarget(q),We.updateRenderTargetMipmap(q),Ce.has("WEBGL_multisampled_render_to_texture")===!1){let Ge=!1;for(let it=0,pt=I.length;it<pt;it++){let dt=I[it],ct=dt.object,He=dt.geometry,Je=dt.material,tt=dt.group;if(Je.side===Cn&&ct.layers.test(z.layers)){let xt=Je.side;Je.side=qt,Je.needsUpdate=!0,dr(ct,k,z,He,Je,tt),Je.side=xt,Je.needsUpdate=!0,Ge=!0}}Ge===!0&&(We.updateMultisampleRenderTarget(q),We.updateRenderTargetMipmap(q))}S.setRenderTarget(we,Ae,Pe),S.setClearColor(Q,ie),Ne!==void 0&&(z.viewport=Ne),S.toneMapping=Ve}function Di(x,I,k){let z=I.isScene===!0?I.overrideMaterial:null;for(let F=0,q=x.length;F<q;F++){let pe=x[F],we=pe.object,Ae=pe.geometry,Pe=pe.group,Ve=pe.material;Ve.allowOverride===!0&&z!==null&&(Ve=z),we.layers.test(k.layers)&&dr(we,I,k,Ae,Ve,Pe)}}function dr(x,I,k,z,F,q){x.onBeforeRender(S,I,k,z,F,q),x.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),F.onBeforeRender(S,I,k,z,x,q),F.transparent===!0&&F.side===Cn&&F.forceSinglePass===!1?(F.side=qt,F.needsUpdate=!0,S.renderBufferDirect(k,I,z,F,x,q),F.side=kn,F.needsUpdate=!0,S.renderBufferDirect(k,I,z,F,x,q),F.side=Cn):S.renderBufferDirect(k,I,z,F,x,q),x.onAfterRender(S,I,k,z,F,q)}function Li(x,I,k){I.isScene!==!0&&(I=J);let z=be.get(x),F=p.state.lights,q=p.state.shadowsArray,pe=F.state.version,we=ne.getParameters(x,F.state,q,I,k),Ae=ne.getProgramCacheKey(we),Pe=z.programs;z.environment=x.isMeshStandardMaterial?I.environment:null,z.fog=I.fog,z.envMap=(x.isMeshStandardMaterial?Qe:je).get(x.envMap||z.environment),z.envMapRotation=z.environment!==null&&x.envMap===null?I.environmentRotation:x.envMapRotation,Pe===void 0&&(x.addEventListener("dispose",$),Pe=new Map,z.programs=Pe);let Ve=Pe.get(Ae);if(Ve!==void 0){if(z.currentProgram===Ve&&z.lightsStateVersion===pe)return pr(x,we),Ve}else we.uniforms=ne.getUniforms(x),x.onBeforeCompile(we,S),Ve=ne.acquireProgram(we,Ae),Pe.set(Ae,Ve),z.uniforms=we.uniforms;let Ne=z.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(Ne.clippingPlanes=ee.uniform),pr(x,we),z.needsLights=G(x),z.lightsStateVersion=pe,z.needsLights&&(Ne.ambientLightColor.value=F.state.ambient,Ne.lightProbe.value=F.state.probe,Ne.directionalLights.value=F.state.directional,Ne.directionalLightShadows.value=F.state.directionalShadow,Ne.spotLights.value=F.state.spot,Ne.spotLightShadows.value=F.state.spotShadow,Ne.rectAreaLights.value=F.state.rectArea,Ne.ltc_1.value=F.state.rectAreaLTC1,Ne.ltc_2.value=F.state.rectAreaLTC2,Ne.pointLights.value=F.state.point,Ne.pointLightShadows.value=F.state.pointShadow,Ne.hemisphereLights.value=F.state.hemi,Ne.directionalShadowMap.value=F.state.directionalShadowMap,Ne.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Ne.spotShadowMap.value=F.state.spotShadowMap,Ne.spotLightMatrix.value=F.state.spotLightMatrix,Ne.spotLightMap.value=F.state.spotLightMap,Ne.pointShadowMap.value=F.state.pointShadowMap,Ne.pointShadowMatrix.value=F.state.pointShadowMatrix),z.currentProgram=Ve,z.uniformsList=null,Ve}function fr(x){if(x.uniformsList===null){let I=x.currentProgram.getUniforms();x.uniformsList=ps.seqWithValue(I.seq,x.uniforms)}return x.uniformsList}function pr(x,I){let k=be.get(x);k.outputColorSpace=I.outputColorSpace,k.batching=I.batching,k.batchingColor=I.batchingColor,k.instancing=I.instancing,k.instancingColor=I.instancingColor,k.instancingMorph=I.instancingMorph,k.skinning=I.skinning,k.morphTargets=I.morphTargets,k.morphNormals=I.morphNormals,k.morphColors=I.morphColors,k.morphTargetsCount=I.morphTargetsCount,k.numClippingPlanes=I.numClippingPlanes,k.numIntersection=I.numClipIntersection,k.vertexAlphas=I.vertexAlphas,k.vertexTangents=I.vertexTangents,k.toneMapping=I.toneMapping}function nt(x,I,k,z,F){I.isScene!==!0&&(I=J),We.resetTextureUnits();let q=I.fog,pe=z.isMeshStandardMaterial?I.environment:null,we=w===null?S.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:yi,Ae=(z.isMeshStandardMaterial?Qe:je).get(z.envMap||pe),Pe=z.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Ve=!!k.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Ne=!!k.morphAttributes.position,Ge=!!k.morphAttributes.normal,it=!!k.morphAttributes.color,pt=Wn;z.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(pt=S.toneMapping);let dt=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,ct=dt!==void 0?dt.length:0,He=be.get(z),Je=p.state.lights;if(_e===!0&&(U===!0||x!==M)){let vt=x===M&&z.id===y;ee.setState(z,x,vt)}let tt=!1;z.version===He.__version?(He.needsLights&&He.lightsStateVersion!==Je.state.version||He.outputColorSpace!==we||F.isBatchedMesh&&He.batching===!1||!F.isBatchedMesh&&He.batching===!0||F.isBatchedMesh&&He.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&He.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&He.instancing===!1||!F.isInstancedMesh&&He.instancing===!0||F.isSkinnedMesh&&He.skinning===!1||!F.isSkinnedMesh&&He.skinning===!0||F.isInstancedMesh&&He.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&He.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&He.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&He.instancingMorph===!1&&F.morphTexture!==null||He.envMap!==Ae||z.fog===!0&&He.fog!==q||He.numClippingPlanes!==void 0&&(He.numClippingPlanes!==ee.numPlanes||He.numIntersection!==ee.numIntersection)||He.vertexAlphas!==Pe||He.vertexTangents!==Ve||He.morphTargets!==Ne||He.morphNormals!==Ge||He.morphColors!==it||He.toneMapping!==pt||He.morphTargetsCount!==ct)&&(tt=!0):(tt=!0,He.__version=z.version);let xt=He.currentProgram;tt===!0&&(xt=Li(z,I,F));let Dn=!1,Vt=!1,Jn=!1,mt=xt.getUniforms(),It=He.uniforms;if(Ie.useProgram(xt.program)&&(Dn=!0,Vt=!0,Jn=!0),z.id!==y&&(y=z.id,Vt=!0),Dn||M!==x){Ie.buffers.depth.getReversed()&&x.reversedDepth!==!0&&(x._reversedDepth=!0,x.updateProjectionMatrix()),mt.setValue(T,"projectionMatrix",x.projectionMatrix),mt.setValue(T,"viewMatrix",x.matrixWorldInverse);let Ht=mt.map.cameraPosition;Ht!==void 0&&Ht.setValue(T,j.setFromMatrixPosition(x.matrixWorld)),ye.logarithmicDepthBuffer&&mt.setValue(T,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&mt.setValue(T,"isOrthographic",x.isOrthographicCamera===!0),M!==x&&(M=x,Vt=!0,Jn=!0)}if(F.isSkinnedMesh){mt.setOptional(T,F,"bindMatrix"),mt.setOptional(T,F,"bindMatrixInverse");let vt=F.skeleton;vt&&(vt.boneTexture===null&&vt.computeBoneTexture(),mt.setValue(T,"boneTexture",vt.boneTexture,We))}F.isBatchedMesh&&(mt.setOptional(T,F,"batchingTexture"),mt.setValue(T,"batchingTexture",F._matricesTexture,We),mt.setOptional(T,F,"batchingIdTexture"),mt.setValue(T,"batchingIdTexture",F._indirectTexture,We),mt.setOptional(T,F,"batchingColorTexture"),F._colorsTexture!==null&&mt.setValue(T,"batchingColorTexture",F._colorsTexture,We));let Ft=k.morphAttributes;if((Ft.position!==void 0||Ft.normal!==void 0||Ft.color!==void 0)&&ae.update(F,k,xt),(Vt||He.receiveShadow!==F.receiveShadow)&&(He.receiveShadow=F.receiveShadow,mt.setValue(T,"receiveShadow",F.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(It.envMap.value=Ae,It.flipEnvMap.value=Ae.isCubeTexture&&Ae.isRenderTargetTexture===!1?-1:1),z.isMeshStandardMaterial&&z.envMap===null&&I.environment!==null&&(It.envMapIntensity.value=I.environmentIntensity),Vt&&(mt.setValue(T,"toneMappingExposure",S.toneMappingExposure),He.needsLights&&_a(It,Jn),q&&z.fog===!0&&re.refreshFogUniforms(It,q),re.refreshMaterialUniforms(It,z,Z,ge,p.state.transmissionRenderTarget[x.id]),ps.upload(T,fr(He),It,We)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(ps.upload(T,fr(He),It,We),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&mt.setValue(T,"center",F.center),mt.setValue(T,"modelViewMatrix",F.modelViewMatrix),mt.setValue(T,"normalMatrix",F.normalMatrix),mt.setValue(T,"modelMatrix",F.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){let vt=z.uniformsGroups;for(let Ht=0,on=vt.length;Ht<on;Ht++){let bn=vt[Ht];ze.update(bn,xt),ze.bind(bn,xt)}}return xt}function _a(x,I){x.ambientLightColor.needsUpdate=I,x.lightProbe.needsUpdate=I,x.directionalLights.needsUpdate=I,x.directionalLightShadows.needsUpdate=I,x.pointLights.needsUpdate=I,x.pointLightShadows.needsUpdate=I,x.spotLights.needsUpdate=I,x.spotLightShadows.needsUpdate=I,x.rectAreaLights.needsUpdate=I,x.hemisphereLights.needsUpdate=I}function G(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return N},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(x,I,k){let z=be.get(x);z.__autoAllocateDepthBuffer=x.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1&&(z.__useRenderToTexture=!1),be.get(x.texture).__webglTexture=I,be.get(x.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:k,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(x,I){let k=be.get(x);k.__webglFramebuffer=I,k.__useDefaultFramebuffer=I===void 0};let ce=T.createFramebuffer();this.setRenderTarget=function(x,I=0,k=0){w=x,A=I,N=k;let z=!0,F=null,q=!1,pe=!1;if(x){let Ae=be.get(x);if(Ae.__useDefaultFramebuffer!==void 0)Ie.bindFramebuffer(T.FRAMEBUFFER,null),z=!1;else if(Ae.__webglFramebuffer===void 0)We.setupRenderTarget(x);else if(Ae.__hasExternalTextures)We.rebindTextures(x,be.get(x.texture).__webglTexture,be.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){let Ne=x.depthTexture;if(Ae.__boundDepthTexture!==Ne){if(Ne!==null&&be.has(Ne)&&(x.width!==Ne.image.width||x.height!==Ne.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");We.setupDepthRenderbuffer(x)}}let Pe=x.texture;(Pe.isData3DTexture||Pe.isDataArrayTexture||Pe.isCompressedArrayTexture)&&(pe=!0);let Ve=be.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(Ve[I])?F=Ve[I][k]:F=Ve[I],q=!0):x.samples>0&&We.useMultisampledRTT(x)===!1?F=be.get(x).__webglMultisampledFramebuffer:Array.isArray(Ve)?F=Ve[k]:F=Ve,L.copy(x.viewport),V.copy(x.scissor),Y=x.scissorTest}else L.copy(W).multiplyScalar(Z).floor(),V.copy(xe).multiplyScalar(Z).floor(),Y=Re;if(k!==0&&(F=ce),Ie.bindFramebuffer(T.FRAMEBUFFER,F)&&z&&Ie.drawBuffers(x,F),Ie.viewport(L),Ie.scissor(V),Ie.setScissorTest(Y),q){let Ae=be.get(x.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_CUBE_MAP_POSITIVE_X+I,Ae.__webglTexture,k)}else if(pe){let Ae=I;for(let Pe=0;Pe<x.textures.length;Pe++){let Ve=be.get(x.textures[Pe]);T.framebufferTextureLayer(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0+Pe,Ve.__webglTexture,k,Ae)}}else if(x!==null&&k!==0){let Ae=be.get(x.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,Ae.__webglTexture,k)}y=-1},this.readRenderTargetPixels=function(x,I,k,z,F,q,pe,we=0){if(!(x&&x.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ae=be.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&pe!==void 0&&(Ae=Ae[pe]),Ae){Ie.bindFramebuffer(T.FRAMEBUFFER,Ae);try{let Pe=x.textures[we],Ve=Pe.format,Ne=Pe.type;if(!ye.textureFormatReadable(Ve)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ye.textureTypeReadable(Ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=x.width-z&&k>=0&&k<=x.height-F&&(x.textures.length>1&&T.readBuffer(T.COLOR_ATTACHMENT0+we),T.readPixels(I,k,z,F,Le.convert(Ve),Le.convert(Ne),q))}finally{let Pe=w!==null?be.get(w).__webglFramebuffer:null;Ie.bindFramebuffer(T.FRAMEBUFFER,Pe)}}},this.readRenderTargetPixelsAsync=async function(x,I,k,z,F,q,pe,we=0){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ae=be.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&pe!==void 0&&(Ae=Ae[pe]),Ae)if(I>=0&&I<=x.width-z&&k>=0&&k<=x.height-F){Ie.bindFramebuffer(T.FRAMEBUFFER,Ae);let Pe=x.textures[we],Ve=Pe.format,Ne=Pe.type;if(!ye.textureFormatReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ye.textureTypeReadable(Ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ge=T.createBuffer();T.bindBuffer(T.PIXEL_PACK_BUFFER,Ge),T.bufferData(T.PIXEL_PACK_BUFFER,q.byteLength,T.STREAM_READ),x.textures.length>1&&T.readBuffer(T.COLOR_ATTACHMENT0+we),T.readPixels(I,k,z,F,Le.convert(Ve),Le.convert(Ne),0);let it=w!==null?be.get(w).__webglFramebuffer:null;Ie.bindFramebuffer(T.FRAMEBUFFER,it);let pt=T.fenceSync(T.SYNC_GPU_COMMANDS_COMPLETE,0);return T.flush(),await hh(T,pt,4),T.bindBuffer(T.PIXEL_PACK_BUFFER,Ge),T.getBufferSubData(T.PIXEL_PACK_BUFFER,0,q),T.deleteBuffer(Ge),T.deleteSync(pt),q}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(x,I=null,k=0){let z=Math.pow(2,-k),F=Math.floor(x.image.width*z),q=Math.floor(x.image.height*z),pe=I!==null?I.x:0,we=I!==null?I.y:0;We.setTexture2D(x,0),T.copyTexSubImage2D(T.TEXTURE_2D,k,0,0,pe,we,F,q),Ie.unbindTexture()};let se=T.createFramebuffer(),me=T.createFramebuffer();this.copyTextureToTexture=function(x,I,k=null,z=null,F=0,q=null){q===null&&(F!==0?(ji("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),q=F,F=0):q=0);let pe,we,Ae,Pe,Ve,Ne,Ge,it,pt,dt=x.isCompressedTexture?x.mipmaps[q]:x.image;if(k!==null)pe=k.max.x-k.min.x,we=k.max.y-k.min.y,Ae=k.isBox3?k.max.z-k.min.z:1,Pe=k.min.x,Ve=k.min.y,Ne=k.isBox3?k.min.z:0;else{let Ft=Math.pow(2,-F);pe=Math.floor(dt.width*Ft),we=Math.floor(dt.height*Ft),x.isDataArrayTexture?Ae=dt.depth:x.isData3DTexture?Ae=Math.floor(dt.depth*Ft):Ae=1,Pe=0,Ve=0,Ne=0}z!==null?(Ge=z.x,it=z.y,pt=z.z):(Ge=0,it=0,pt=0);let ct=Le.convert(I.format),He=Le.convert(I.type),Je;I.isData3DTexture?(We.setTexture3D(I,0),Je=T.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(We.setTexture2DArray(I,0),Je=T.TEXTURE_2D_ARRAY):(We.setTexture2D(I,0),Je=T.TEXTURE_2D),T.pixelStorei(T.UNPACK_FLIP_Y_WEBGL,I.flipY),T.pixelStorei(T.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),T.pixelStorei(T.UNPACK_ALIGNMENT,I.unpackAlignment);let tt=T.getParameter(T.UNPACK_ROW_LENGTH),xt=T.getParameter(T.UNPACK_IMAGE_HEIGHT),Dn=T.getParameter(T.UNPACK_SKIP_PIXELS),Vt=T.getParameter(T.UNPACK_SKIP_ROWS),Jn=T.getParameter(T.UNPACK_SKIP_IMAGES);T.pixelStorei(T.UNPACK_ROW_LENGTH,dt.width),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,dt.height),T.pixelStorei(T.UNPACK_SKIP_PIXELS,Pe),T.pixelStorei(T.UNPACK_SKIP_ROWS,Ve),T.pixelStorei(T.UNPACK_SKIP_IMAGES,Ne);let mt=x.isDataArrayTexture||x.isData3DTexture,It=I.isDataArrayTexture||I.isData3DTexture;if(x.isDepthTexture){let Ft=be.get(x),vt=be.get(I),Ht=be.get(Ft.__renderTarget),on=be.get(vt.__renderTarget);Ie.bindFramebuffer(T.READ_FRAMEBUFFER,Ht.__webglFramebuffer),Ie.bindFramebuffer(T.DRAW_FRAMEBUFFER,on.__webglFramebuffer);for(let bn=0;bn<Ae;bn++)mt&&(T.framebufferTextureLayer(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,be.get(x).__webglTexture,F,Ne+bn),T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,be.get(I).__webglTexture,q,pt+bn)),T.blitFramebuffer(Pe,Ve,pe,we,Ge,it,pe,we,T.DEPTH_BUFFER_BIT,T.NEAREST);Ie.bindFramebuffer(T.READ_FRAMEBUFFER,null),Ie.bindFramebuffer(T.DRAW_FRAMEBUFFER,null)}else if(F!==0||x.isRenderTargetTexture||be.has(x)){let Ft=be.get(x),vt=be.get(I);Ie.bindFramebuffer(T.READ_FRAMEBUFFER,se),Ie.bindFramebuffer(T.DRAW_FRAMEBUFFER,me);for(let Ht=0;Ht<Ae;Ht++)mt?T.framebufferTextureLayer(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,Ft.__webglTexture,F,Ne+Ht):T.framebufferTexture2D(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,Ft.__webglTexture,F),It?T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,vt.__webglTexture,q,pt+Ht):T.framebufferTexture2D(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,vt.__webglTexture,q),F!==0?T.blitFramebuffer(Pe,Ve,pe,we,Ge,it,pe,we,T.COLOR_BUFFER_BIT,T.NEAREST):It?T.copyTexSubImage3D(Je,q,Ge,it,pt+Ht,Pe,Ve,pe,we):T.copyTexSubImage2D(Je,q,Ge,it,Pe,Ve,pe,we);Ie.bindFramebuffer(T.READ_FRAMEBUFFER,null),Ie.bindFramebuffer(T.DRAW_FRAMEBUFFER,null)}else It?x.isDataTexture||x.isData3DTexture?T.texSubImage3D(Je,q,Ge,it,pt,pe,we,Ae,ct,He,dt.data):I.isCompressedArrayTexture?T.compressedTexSubImage3D(Je,q,Ge,it,pt,pe,we,Ae,ct,dt.data):T.texSubImage3D(Je,q,Ge,it,pt,pe,we,Ae,ct,He,dt):x.isDataTexture?T.texSubImage2D(T.TEXTURE_2D,q,Ge,it,pe,we,ct,He,dt.data):x.isCompressedTexture?T.compressedTexSubImage2D(T.TEXTURE_2D,q,Ge,it,dt.width,dt.height,ct,dt.data):T.texSubImage2D(T.TEXTURE_2D,q,Ge,it,pe,we,ct,He,dt);T.pixelStorei(T.UNPACK_ROW_LENGTH,tt),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,xt),T.pixelStorei(T.UNPACK_SKIP_PIXELS,Dn),T.pixelStorei(T.UNPACK_SKIP_ROWS,Vt),T.pixelStorei(T.UNPACK_SKIP_IMAGES,Jn),q===0&&I.generateMipmaps&&T.generateMipmap(Je),Ie.unbindTexture()},this.initRenderTarget=function(x){be.get(x).__webglFramebuffer===void 0&&We.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?We.setTextureCube(x,0):x.isData3DTexture?We.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?We.setTexture2DArray(x,0):We.setTexture2D(x,0),Ie.unbindTexture()},this.resetState=function(){A=0,N=0,w=null,Ie.reset(),Te.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return xn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=ot._getDrawingBufferColorSpace(e),t.unpackColorSpace=ot._getUnpackColorSpace()}};var Hh='"PingFang SC","Microsoft YaHei",system-ui,sans-serif';function ua(i,e,t,n,{color:s,accent:r,align:o="left",maxWidth:a=1/0}){let l=[["\u5C71\u77F3\u7F51\u79D1\u7EDF\u4E00",s],["AI",r],["\u7F51\u5173",s]];i.save(),i.textAlign="left",i.textBaseline="middle",i.font="750 "+n+"px "+Hh;let c=l.reduce((f,[g])=>f+i.measureText(g).width,0)+n*.48;n*=Math.min(1,a/c),i.font="750 "+n+"px "+Hh;let h=n*.24,d=l.reduce((f,[g])=>f+i.measureText(g).width,0)+h*2,u=o==="center"?e-d/2:e;for(let[f,g]of l)i.fillStyle=g,i.fillText(f,u,t),u+=i.measureText(f).width+h;i.restore()}function Wh(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new Xt,c=0;for(let h=0;h<i.length;++h){let d=i[h],u=0;if(t!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in d.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(d.attributes[f]),u++}if(u!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in d.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(d.morphAttributes[f])}if(e){let f;if(t)f=d.index.count;else if(d.attributes.position!==void 0)f=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(t){let h=0,d=[];for(let u=0;u<i.length;++u){let f=i[u].index;for(let g=0;g<f.count;++g)d.push(f.getX(g)+h);h+=i[u].attributes.position.count}l.setIndex(d)}for(let h in r){let d=Gh(r[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,d)}for(let h in o){let d=o[h][0].length;if(d===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let u=0;u<d;++u){let f=[];for(let v=0;v<o[h].length;++v)f.push(o[h][v][u]);let g=Gh(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function Gh(i){let e,t,n,s=-1,r=0;for(let c=0;c<i.length;++c){let h=i[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let o=new e(r),a=new bt(o,t,n),l=0;for(let c=0;c<i.length;++c){let h=i[c];if(h.isInterleavedBufferAttribute){let d=l/t;for(let u=0,f=h.count;u<f;u++)for(let g=0;g<t;g++){let v=h.getComponent(u,g);a.setComponent(u+d,g,v)}}else o.set(h.array,l);l+=h.count*t}return s!==void 0&&(a.gpuType=s),a}var Xh=[{name:"\u7814\u53D1\u90E8",tokens:"56 \u4E07",ratio:1,cost:"\xA55.60"},{name:"\u8FD0\u8425\u90E8",tokens:"29 \u4E07",ratio:.52,cost:"\xA52.90"},{name:"\u5BA2\u670D\u90E8",tokens:"18 \u4E07",ratio:.32,cost:"\xA51.80"}],di={id:"DEMO-042",channels:[["\u4E3B\u6A21\u578B\u6E20\u9053","2.00 \u79D2\u8D85\u65F6"],["\u5907\u7528\u6A21\u578B\u6E20\u9053","0.86 \u79D2\u8FD4\u56DE"]],rows:[["\u4E0A\u6E38\u7528\u91CF","1,240 Token"],["\u5185\u90E8\u8BA1\u4EF7","\xA50.012"],["\u4F9B\u5E94\u5546\u8D26\u5355\u5206\u644A","\xA50.010"],["\u5DEE\u989D","\xA50.002\uFF08\u5185\u90E8\u51CF\u4F9B\u5E94\u5546\uFF09"]],explanation:"\u540C\u4E00\u7B14\u8C03\u7528\u6309\u4E24\u5957\u8D39\u7387\u8BA1\u4EF7\uFF0C\u5DEE\u989D\u6765\u81EA\u5185\u90E8\u4E0E\u4F9B\u5E94\u5546\u7684\u8D39\u7387\u53E3\u5F84\u3002"},Bl=[{id:"DEMO-042",name:"\u5907\u7528\u91CD\u8BD5",result:"\u5DF2\u8FD4\u56DE",fields:[["\u8C03\u7528\u8EAB\u4EFD","\u7814\u53D1\u90E8 \xB7 \u7814\u53D1\u52A9\u624B"],["\u6A21\u578B\u6E20\u9053","\u4E3B\u6E20\u9053\u8D85\u65F6 \u2192 \u5907\u7528\u6E20\u9053\u91CD\u8BD5"],["\u6E20\u9053\u8868\u73B0","\u4E3B\u6E20\u9053 2.00 \u79D2\u8D85\u65F6 \xB7 \u5907\u7528 0.86 \u79D2\u8FD4\u56DE"],["\u68C0\u67E5\u7ED3\u679C","\u8BF7\u6C42\u548C\u54CD\u5E94\u5747\u901A\u8FC7\u68C0\u67E5"],["\u4E0A\u6E38\u7528\u91CF","1,240 Token\uFF08\u793A\u610F\uFF09"],["\u5185\u90E8\u8BA1\u4EF7","\xA50.012\uFF08\u793A\u610F\uFF09"]]},{id:"DEMO-043",name:"\u654F\u611F\u4FE1\u606F",result:"\u5DF2\u62E6\u622A \xB7 \u672A\u5916\u53D1",fields:[["\u8C03\u7528\u8EAB\u4EFD","\u7814\u53D1\u90E8 \xB7 \u7814\u53D1\u52A9\u624B"],["\u547D\u4E2D\u89C4\u5219","\u654F\u611F\u4FE1\u606F\u5916\u53D1"],["\u68C0\u67E5\u65B9\u5411","\u8BF7\u6C42 \u2192 \u6A21\u578B"],["\u4E0A\u6E38\u7528\u91CF","\u672A\u4EA7\u751F"],["\u5185\u90E8\u8BA1\u4EF7","\u672A\u4EA7\u751F"]]},{id:"DEMO-044",name:"\u63D0\u793A\u8BCD\u6CE8\u5165",result:"\u5DF2\u62E6\u622A \xB7 \u672A\u5916\u53D1",fields:[["\u8C03\u7528\u8EAB\u4EFD","\u7814\u53D1\u90E8 \xB7 \u7814\u53D1\u52A9\u624B"],["\u547D\u4E2D\u89C4\u5219","\u63D0\u793A\u8BCD\u6CE8\u5165\u9632\u62A4"],["\u68C0\u67E5\u65B9\u5411","\u8BF7\u6C42 \u2192 \u6A21\u578B"],["\u4E0A\u6E38\u7528\u91CF","\u672A\u4EA7\u751F"],["\u5185\u90E8\u8BA1\u4EF7","\u672A\u4EA7\u751F"]]}];function qh(i,e){if(i.brief)return i.copy;if(e<.1)return"";switch(i.id){case"policy":return e<.48?"\u7814\u53D1\u52A9\u624B\u83B7\u51C6\u4F7F\u7528\u6A21\u578B\uFF0C\u989D\u5EA6\u5145\u8DB3\u3002":"\u53E6\u4E00\u8F86\u8F66\u672A\u83B7\u5DE5\u5177\u6388\u6743\uFF0C\u505C\u5728\u5165\u53E3\u3002\u989D\u5EA6\u4E5F\u53EF\u6309\u90E8\u95E8\u548C\u7528\u6237\u63A7\u5236\u3002";case"security":return e<.52?"\u8BF7\u6C42\u8F6C\u53D1\u524D\u8FC7\u68C0\uFF0C\u53EF\u6309\u7B56\u7565\u62E6\u622A\u654F\u611F\u4FE1\u606F\u6216\u6CE8\u5165\u98CE\u9669\u3002":"\u6A21\u578B\u54CD\u5E94\u8FD4\u56DE\u65F6\u4E5F\u8981\u8FC7\u68C0\uFF0C\u7F51\u5173\u6309\u7B56\u7565\u8BB0\u5F55\u3001\u544A\u8B66\u6216\u963B\u65AD\u3002";case"routing":return e<.47?"\u7F51\u5173\u6309\u4F18\u5148\u7EA7\u3001\u6743\u91CD\u548C\u5065\u5EB7\u72B6\u6001\u9009\u62E9\u6A21\u578B\u6E20\u9053\u3002":"\u4E3B\u6E20\u9053\u5F02\u5E38\uFF0C\u9053\u5C94\u8F6C\u5411\u5DF2\u914D\u7F6E\u7684\u5907\u7528\u6E20\u9053\u3002";case"resources":return e<.55?"\u667A\u80FD\u4F53\u53EF\u4EE5\u8C03\u7528\u5DF2\u6388\u6743\u7684 MCP \u5DE5\u5177\u3002":"Skill \u5728\u7F51\u5173\u5185\u5355\u72EC\u5BA1\u6838\u3001\u53D1\u5E03\u5E76\u7BA1\u7406\u7248\u672C\u3002";case"operations":return e<.54?"\u7814\u53D1\u90E8\u7528\u91CF\u6700\u9AD8\uFF0C\u8D39\u7528\u53EF\u4EE5\u6309\u90E8\u95E8\u5F52\u96C6\u3002":"\u4ECE\u6E20\u9053\u8D85\u65F6\u5B9A\u4F4D\u5230\u5355\u7B14\u8C03\u7528\uFF0C\u518D\u6838\u5BF9\u7528\u91CF\u4E0E\u8D26\u5355\u3002";default:return i.copy}}var da=[{id:"main",label:"\u9A76\u5165\u4E3B\u6E20\u9053",title:"\u9A76\u5165\u4E3B\u6E20\u9053",cue:"\u8FD0\u8F93\u8231\u6CBF\u4E3B\u7EBF\u8DEF\u8FDB\u5165\u6A21\u578B\u670D\u52A1\u7AD9\u3002"},{id:"timeout",label:"\u4E3B\u6E20\u9053\u8D85\u65F6",title:"\u4E3B\u6E20\u9053\u8D85\u65F6",cue:"\u4EFB\u52A1\u505C\u5728\u4E3B\u7AD9\uFF0C\u7F51\u5173\u6309\u9884\u8BBE\u7B56\u7565\u542F\u52A8\u5207\u6362\u3002"},{id:"junction",label:"\u5207\u6362\u9053\u5C94",title:"\u5907\u7528\u7EBF\u8DEF\u542F\u7528",cue:"\u8FD0\u8F93\u8231\u9000\u56DE\u5206\u5C94\u53E3\uFF0C\u51C6\u5907\u9A76\u5165\u5DF2\u83B7\u51C6\u7684\u5907\u7528\u6E20\u9053\u3002"},{id:"backup",label:"\u5907\u7528\u7AD9\u91CD\u8BD5",title:"\u62B5\u8FBE\u5907\u7528\u6A21\u578B\u7AD9",cue:"\u4EFB\u52A1\u8FDB\u5165\u5907\u7528\u6E20\u9053\uFF0C\u91CD\u65B0\u8BF7\u6C42\u540C\u4E00\u6A21\u578B\u3002"}],Yt={arrive:.27,reverse:.45,atFork:.61,turn:.63,depart:.76,retry:.92},sr={open:.41,depart:.72,arrive:.91},rr={depart:.16,model:.39,returning:.46,arrive:.66,block:.72},or={arrive:.49,block:.55};function Hg(i){return i<Yt.arrive?da[0]:i<Yt.reverse?da[1]:i<Yt.depart?da[2]:da[3]}function Yh(i,e){if(!i)return{id:"overview",label:"\u67A2\u7EBD\u5168\u666F"};if(i.chapter==="overview")return{id:i.id,label:i.label};if(i.label==="\u6545\u969C\u5207\u6362")return Hg(e);if(i.provider)return{id:e<.19||e>=.87?"entry":e<.43?"dispatch":i.provider.channel,label:i.provider.model};if(i.label==="\u9009\u62E9\u6E20\u9053")return e<.36?{id:"dispatch",label:"\u4E2D\u592E\u8C03\u5EA6\u7AD9"}:{id:"primary",label:"\u4E3B\u6A21\u578B\u7AD9"};if(i.label==="\u54CD\u5E94\u68C0\u67E5")return{id:"return",label:"\u54CD\u5E94\u8FD4\u56DE"};let t={entry:"\u4F01\u4E1A\u5165\u53E3",gate:"\u8EAB\u4EFD\u4E0E\u914D\u989D\u95F8\u53E3",scan:"\u53CC\u5411\u5185\u5BB9\u68C0\u67E5\u8231",ops:"\u4E2D\u592E\u8C03\u5EA6\u5854"};return{id:i.zone,label:t[i.zone]}}function fa(i,e){if(i?.risk==="response"){let{depart:t,returning:n,arrive:s,block:r}=rr;return e<t?"inspect":e<n?"allow":e<s?"returning":e<r?"response-inspect":"blocked"}return i?.label==="\u5B89\u5168\u62E6\u622A"||i?.risk==="injection"?e<or.block?"incoming":"blocked":i?.label==="\u8BF7\u6C42\u68C0\u67E5"?e<sr.open?"inspect":"allow":i?.label==="\u54CD\u5E94\u68C0\u67E5"?e<.4?"returning":e<.66?"response-inspect":"response-allow":null}function kl(i,e){if(i?.risk==="response"){let{depart:d,model:u,returning:f,arrive:g,block:v}=rr,m=e>=v,p="\u54CD\u5E94\u547D\u4E2D\u654F\u611F\u5B57\u6BB5\u89C4\u5219\u3002",C=m?"\u5DF2\u963B\u65AD \xB7 \u539F\u54CD\u5E94\u672A\u4EA4\u8FD8\u5E94\u7528":e>=g?"\u68C0\u67E5\u65B9\u5411\uFF1A\u6A21\u578B \u2192 \u5E94\u7528":e>=f?"\u6A21\u578B\u5DF2\u54CD\u5E94 \xB7 \u56DE\u5230\u7F51\u5173\u68C0\u67E5":e>=u?"\u6A21\u578B\u5DF2\u6536\u5230\u8BF7\u6C42":e>=d?"\u8BF7\u6C42\u901A\u8FC7\u68C0\u67E5 \xB7 \u5DF2\u53D1\u5F80\u6A21\u578B":"\u6B63\u5728\u68C0\u67E5\u8BF7\u6C42";return{kind:"response",title:"\u6A21\u578B\u54CD\u5E94\u62E6\u622A",revealed:e>=g,flagged:m,evidence:"\u6A21\u578B\u8F93\u51FA\u542B\u6D4B\u8BD5\u8D26\u53F7\u6807\u8BC6\uFF08\u5DF2\u906E\u76D6\uFF09\u3002",status:C,verdict:p,blocked:m,recorded:e>=.86}}let t=i?.comparison||(i?.risk==="injection"?"injection":i?.label==="\u5B89\u5168\u62E6\u622A"?"sensitive":null);if(!t)return null;let n=t!=="normal"&&e>=or.block,s=t==="normal"&&e>=.93,r=t==="normal"&&e>=sr.open,o=e>=.18,a=t!=="normal"&&e>=.34,l=t==="injection"?"\u5939\u5E26\u5185\u5BB9\u8981\u6C42 AI \u5C06\u6545\u969C\u62A5\u544A\u6539\u5199\u4E3A\u300C\u7CFB\u7EDF\u6B63\u5E38\u300D\u3002":t==="sensitive"?"\u8BCA\u65AD\u9644\u4EF6\u542B\u5BA2\u6237\u624B\u673A\u53F7 138\u2022\u2022\u2022\u20221234\u3002":"\u65E5\u5FD7\u6458\u8981\u663E\u793A\u63A5\u53E3\u8D85\u65F6\u3002",c=t==="injection"?"\u9644\u4EF6\u4E2D\u7684\u6307\u4EE4\u8BD5\u56FE\u6539\u53D8\u539F\u4EFB\u52A1\u3002":t==="sensitive"?"\u654F\u611F\u5B57\u6BB5\u547D\u4E2D\u5916\u53D1\u9650\u5236\u3002":"\u8BF7\u6C42\u5185\u5BB9\u901A\u8FC7\u68C0\u67E5\u3002";return{kind:t,revealed:o,flagged:a,blocked:n,evidence:l,status:n?"\u5DF2\u963B\u65AD \xB7 \u672A\u8F6C\u53D1\u81F3\u6A21\u578B":s?"\u6A21\u578B\u56DE\u590D \xB7 \u5EFA\u8BAE\u68C0\u67E5\u63A5\u53E3\u8D85\u65F6\u914D\u7F6E":r?"\u68C0\u67E5\u901A\u8FC7 \xB7 \u53D1\u5F80\u6A21\u578B":a?c:o?"\u6B63\u5728\u68C0\u67E5\u9644\u4EF6\u5185\u5BB9":"\u8BF7\u6C42\u62B5\u8FBE\u68C0\u67E5\u8231",verdict:c,recorded:n&&e>=.8,title:{normal:"\u6B63\u5E38\u8BF7\u6C42",sensitive:"\u654F\u611F\u4FE1\u606F\u5916\u53D1",injection:"\u63D0\u793A\u8BCD\u6CE8\u5165"}[t]}}function Zh(i,e,t){if(e?.chapter==="overview")return qh(e,t);if(e?.provider)return t<.19?"\u7814\u53D1\u52A9\u624B\u4F7F\u7528\u540C\u4E00\u7F51\u5173\u5165\u53E3\u53D1\u8D77\u72EC\u7ACB\u8C03\u7528\u3002":t<.65?"\u7F51\u5173\u5C06\u8BF7\u6C42\u8DEF\u7531\u81F3"+e.provider.vendor+"\u7684"+e.provider.model+"\u3002":t<.91?e.provider.model+"\u751F\u6210\u7ED3\u679C\uFF0C\u54CD\u5E94\u7ECF\u7F51\u5173\u8FD4\u56DE\u3002":"\u7814\u53D1\u52A9\u624B\u5DF2\u6536\u5230"+e.provider.model+"\u7684\u7ED3\u679C\u3002";if(e?.policy)return t<.4?"\u6821\u9A8C\u7814\u53D1\u52A9\u624B\u5BF9\u6A21\u578B B \u7684\u6388\u6743\u548C\u90E8\u95E8\u989D\u5EA6\u3002":e.policy.reason;if(e?.risk==="response")return kl(e,t).status;let n=fa(e,t);if(e?.risk==="injection")return n==="blocked"?"\u9644\u4EF6\u5939\u5E26\u8BD5\u56FE\u6539\u53D8\u4EFB\u52A1\u7684\u6307\u4EE4\u3002\u547D\u4E2D\u6CE8\u5165\u9632\u62A4\u89C4\u5219\uFF0C\u672A\u8F6C\u53D1\u81F3\u6A21\u578B\u3002":t>.18?"\u539F\u4EFB\u52A1\u662F\u5206\u6790\u63A5\u53E3\u62A5\u9519\u3002\u7F51\u5173\u68C0\u67E5\u8FD9\u4EFD\u9644\u4EF6\u3002":"";let s={inspect:"\u7F51\u5173\u5148\u68C0\u67E5\u8BF7\u6C42\u5185\u5BB9\u3002",allow:"\u62A5\u9519\u6458\u8981\u901A\u8FC7\u68C0\u67E5\uFF0C\u53EF\u4EE5\u53D1\u5F80\u6A21\u578B\u3002",blocked:"\u9644\u4EF6\u542B\u654F\u611F\u4FE1\u606F\uFF0C\u5DF2\u62E6\u622A\uFF0C\u672A\u53D1\u7ED9\u6A21\u578B\u3002","response-inspect":"\u6A21\u578B\u7ED3\u679C\u8FD4\u56DE\uFF0C\u7F51\u5173\u68C0\u67E5\u54CD\u5E94\u5185\u5BB9\u3002","response-allow":"\u54CD\u5E94\u901A\u8FC7\u68C0\u67E5\uFF0C\u4EA4\u8FD8\u7ED9\u7814\u53D1\u52A9\u624B\u3002"};return s[n]?s[n]:n==="incoming"?t>=.22?e.track.length>2?"\u7B2C\u4E8C\u6B21\u8BF7\u6C42\u5E26\u4E0A\u4E86\u4E00\u4EFD\u8BCA\u65AD\u9644\u4EF6\u3002":"\u8FD9\u6B21\u8BF7\u6C42\u5E26\u4E0A\u4E86\u4E00\u4EFD\u8BCA\u65AD\u9644\u4EF6\u3002":"":e?.label==="\u53D1\u8D77\u8C03\u7528"?t>=.09?"\u7814\u53D1\u52A9\u624B\u63D0\u4EA4\u63A5\u53E3\u62A5\u9519\u6458\u8981\uFF0C\u8BF7 AI \u534F\u52A9\u5206\u6790\u3002":"":e?.label==="\u6388\u6743\u4E0E\u989D\u5EA6"?t>=.24?"\u7F51\u5173\u786E\u8BA4\u7814\u53D1\u90E8\u6709\u8C03\u7528\u6743\u9650\uFF0C\u989D\u5EA6\u4E5F\u591F\u3002":"":i?.id==="timeout"?"\u4E3B\u6E20\u9053\u8D85\u65F6\uFF0C\u8FD0\u8F93\u8231\u505C\u5728\u4E3B\u7AD9\u3002":i?.id==="junction"?t>=Yt.turn?"\u7F51\u5173\u6539\u8D70\u5DF2\u83B7\u6388\u6743\u7684\u5907\u7528\u6E20\u9053\u3002":"":i?.id==="backup"?t>=Yt.retry?"\u5907\u7528\u6E20\u9053\u91CD\u8BD5\u6210\u529F\u3002":"":i?.id==="primary"?"\u7F51\u5173\u628A\u8BF7\u6C42\u8F6C\u53D1\u7ED9\u53EF\u7528\u7684\u6A21\u578B\u6E20\u9053\u3002":e?.label==="\u989D\u5EA6\u62D2\u7EDD"?"\u7814\u53D1\u90E8\u989D\u5EA6\u5DF2\u7528\u5C3D\uFF0C\u7F51\u5173\u6CA1\u6709\u8F6C\u53D1\u8BF7\u6C42\u3002":""}function Jh(i,e,t){if(e?.label==="\u6545\u969C\u5207\u6362")return i.id==="main"?Yt.arrive-.01:i.id==="timeout"?Yt.arrive:i.id==="junction"?t<Yt.turn?Yt.atFork:Yt.depart-.01:1;let n=fa(e,t);return n==="inspect"||n==="allow"?n==="inspect"?0:1:n==="incoming"||n==="blocked"?n==="incoming"?or.arrive:1:n==="returning"||n==="response-inspect"||n==="response-allow"?n==="returning"?0:n==="response-inspect"?.53:1:1}var ar=new B;function fn(i,e,t,n,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),l=Math.PI/4;ar.copy(e),ar[n]=0,ar.normalize();let c=.5*o/(o+a),h=1-ar.angleTo(i)/l;return Math.sign(ar[t])===1?h*c:a/(o+a)+c+c*(1-h)}var pa=class i extends yn{constructor(e=1,t=1,n=1,s=2,r=.1){let o=s*2+1;if(r=Math.min(e/2,t/2,n/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:s,radius:r},o===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let l=new B,c=new B,h=new B(e,t,n).divideScalar(2).subScalar(r),d=this.attributes.position.array,u=this.attributes.normal.array,f=this.attributes.uv.array,g=d.length/6,v=new B,m=.5/o;for(let p=0,C=0;p<d.length;p+=3,C+=2)switch(l.fromArray(d,p),c.copy(l),c.x-=Math.sign(c.x)*m,c.y-=Math.sign(c.y)*m,c.z-=Math.sign(c.z)*m,c.normalize(),d[p+0]=h.x*Math.sign(l.x)+c.x*r,d[p+1]=h.y*Math.sign(l.y)+c.y*r,d[p+2]=h.z*Math.sign(l.z)+c.z*r,u[p+0]=c.x,u[p+1]=c.y,u[p+2]=c.z,Math.floor(p/g)){case 0:v.set(1,0,0),f[C+0]=fn(v,c,"z","y",r,n),f[C+1]=1-fn(v,c,"y","z",r,t);break;case 1:v.set(-1,0,0),f[C+0]=1-fn(v,c,"z","y",r,n),f[C+1]=1-fn(v,c,"y","z",r,t);break;case 2:v.set(0,1,0),f[C+0]=1-fn(v,c,"x","z",r,e),f[C+1]=fn(v,c,"z","x",r,n);break;case 3:v.set(0,-1,0),f[C+0]=1-fn(v,c,"x","z",r,e),f[C+1]=1-fn(v,c,"z","x",r,n);break;case 4:v.set(0,0,1),f[C+0]=1-fn(v,c,"x","y",r,e),f[C+1]=1-fn(v,c,"y","x",r,t);break;case 5:v.set(0,0,-1),f[C+0]=fn(v,c,"x","y",r,e),f[C+1]=1-fn(v,c,"y","x",r,t);break}}static fromJSON(e){return new i(e.width,e.height,e.depth,e.segments,e.radius)}};var Zt=i=>new B(...i),lr={entry:[-11,.9,3.15],gate:[-5.3,.9,2.05],scan:[-2.95,.9,1.95],route:[.65,.9,1.79],fork:[4.25,.9,1.79],main:[10.5,.9,-3.45],backup:[10.25,.9,4.4],ops:[.75,4,-1.44],tools:[7.3,.9,-7.25],apps:[-8.5,.9,-4.5],agent:[-11.45,.9,-.3]};function $h(i){let e=new ca({canvas:i,antialias:!0,powerPreference:"low-power"});e.autoClear=!1,e.outputColorSpace=St;let t=new Mi;t.background=new $e("#091d2a");let n=new En,s=new os("#ffe3bc",2.65);s.position.set(-7,12,12);let r=new os("#9edafb",.95);r.position.set(5,7,-7),t.add(s,r,new Js("#d6e7ed","#253943",1.25));let o=(G,ce=.63)=>new qs({color:G,roughness:ce}),a=G=>new en({color:G}),l={ivory:o("#ebe5d5",.42),metal:o("#83999c",.45),deck:o("#475f66"),dark:o("#122632"),blue:o("#1b4150"),glass:o("#193e51",.29),roof:o("#344d5b",.46),copper:o("#b98352",.43),window:a("#91b1ae"),warm:a("#f1c88d"),cyan:a("#83ead3"),blueLight:a("#65a5c6"),amber:a("#ffae63"),red:a("#e67d64"),dim:a("#3e6c76")},c=new Map;function h(G,ce,se,me,x,I=t){let k=new yt(G,ce);return k.position.set(se,me,x),I.add(k),k}function d(G,ce){return c.has(G)||c.set(G,ce()),c.get(G)}function u(G,ce,se,me,x,I,k,z=0,F=t){return h(d([G,ce,se,z].join("/"),()=>z?new pa(G,ce,se,1,z):new yn(G,ce,se)),k,me,x,I,F)}function f(G,ce,se,me,x,I,k,z=36,F=t){return h(d([G,ce,se,z,"c"].join("/"),()=>new Vs(G,ce,se,z)),k,me,x,I,F)}function g(G,ce,se,me,x,I){let k=h(new Ws(G,ce,5,72),I,se,me,x);return k.rotation.x=Math.PI/2,k}function v(G,ce,se,me,x){let I=Zt(G),k=Zt(ce),z=I.clone().lerp(k,.5),F=u(se,me,I.distanceTo(k),z.x,z.y,z.z,x);return F.quaternion.setFromUnitVectors(new B(0,0,1),k.sub(I).normalize()),F}let m=64,p=8,C=new Uint8Array(m*m*4),E=419,S=()=>(E=Math.imul(E,1664525)+1013904223>>>0,E/4294967296),R=Array.from({length:p*p},()=>[.13+.74*S(),.13+.74*S()]);for(let G=0;G<m;G++)for(let ce=0;ce<m;ce++){let se=ce*p/m,me=G*p/m,x=Math.floor(se),I=Math.floor(me),k=1/0,z=1/0;for(let q=I-1;q<=I+1;q++)for(let pe=x-1;pe<=x+1;pe++){let[we,Ae]=R[(q+p)%p*p+(pe+p)%p],Pe=(se-pe-we)**2+(me-q-Ae)**2;Pe<k?(z=k,k=Pe):Pe<z&&(z=Pe)}let F=(G*m+ce)*4;C[F]=S()*256,C[F+1]=S()*256,C[F+2]=255*Math.max(0,1-4.4*(Math.sqrt(z)-Math.sqrt(k))),C[F+3]=255}let A=new ts(C,m,m);A.wrapS=A.wrapT=Ji,A.minFilter=A.magFilter=Nt,A.needsUpdate=!0;let N=-.035,w=1,y=new En(-23,23,14,-14,.1,100);y.layers.set(w);let M=new hn(448,272,{depthBuffer:!0}),L=new ft,V=new B,Y=new B,Q=new B(-.25,N,-.25),ie=[new cn(new B(0,1,0),-N)],te=new $e,ge=-1/0,Z=0,P=!0,X=new tn({uniforms:{time:{value:0},base:{value:t.background},sea:{value:new $e("#235364")},crest:{value:new $e("#add9d5")},shallows:{value:new $e("#2b6570")},grain:{value:A},reflection:{value:M.texture},reflectionMatrix:{value:L}},vertexShader:`varying vec2 p,mirrorUV;uniform mat4 reflectionMatrix;
      void main(){
        vec4 world=modelMatrix*vec4(position,1.);
        p=world.xz;
        mirrorUV=(reflectionMatrix*world).xy*.5+.5;
        gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);
      }`,fragmentShader:`varying vec2 p,mirrorUV;uniform float time;uniform vec3 base,sea,crest,shallows;
      uniform sampler2D grain,reflection;
      float quay(vec2 c,float r){return length(p-c)-r;}
      void main(){
        vec2 flow=p+vec2(-.12,.08)*time;
        vec2 broad=texture2D(grain,flow*.0052).rg;
        vec3 detail=texture2D(grain,(p+vec2(.15,-.07)*time)*vec2(.142,.194)+broad*.052).rgb;
        float swell=sin(dot(p,vec2(.42,.76))-time*.58+2.5*broad.r);
        float crossWave=sin(dot(p,vec2(1.64,-1.29))+time*.64+2.8*broad.g);
        float ripple=sin(dot(p,vec2(2.15,4.05))-time*1.05+swell*1.45+crossWave*.48+1.7*broad.g);
        float glint=smoothstep(.63,1.,ripple)*smoothstep(.36,.84,detail.r*.64+broad.r*.36);
        float fine=smoothstep(.52,.86,detail.g)*smoothstep(.05,.94,crossWave);
        vec2 hull=abs(p-vec2(-.65,-.09))-vec2(5.98,3.25);
        float e=length(max(hull,0.))+min(max(hull.x,hull.y),0.)-.25;
        e=min(e,min(quay(vec2(10.6,-3.45),2.41),quay(vec2(10.3,4.4),2.31)));
        e=min(e,min(quay(vec2(-10.7,3.15),2.30),quay(vec2(7.3,-7.25),2.08)));
        e=min(e,min(quay(vec2(-8.65,-4.55),1.85),quay(vec2(-11.72,-.32),1.67)));
        float distance=max(e,0.);
        float contact=1.-smoothstep(.0,.46,distance);
        float nearBank=1.-smoothstep(.34,1.94,distance);
        float exposed=smoothstep(.035,.22,distance);
        // Break each moving front at different points along the shore.
        float phase=fract(distance*(.99+.23*broad.g)-time*.22+dot(p,vec2(.15,-.11))+broad.r*.49+swell*.16);
        float waveLip=1.-smoothstep(.020,.125,abs(phase-.40));
        float waveBody=smoothstep(.15,.38,phase)*(1.-smoothstep(.47,.79,phase));
        float patches=smoothstep(.31,.72,broad.g*.46+detail.r*.54);
        float lace=smoothstep(.33,.87,detail.b);
        float exposure=.50+.50*smoothstep(-.48,.90,crossWave+.22*swell);
        float wash=nearBank*exposed*patches*exposure;
        float pool=1.-smoothstep(.06,1.23,length((p-vec2(-1.,-1.2))*vec2(.047,.068)));
        float coastal=1.-smoothstep(.35,4.4,distance);
        vec3 c=mix(base,sea,pool*(.54+.14*broad.r));
        c=mix(c,shallows,coastal*(.15+.13*swell)+wash*.18*waveBody);
        c*=1.+pool*(.071*swell+.035*crossWave);
        // Small distortions run along the same waves as the surface highlights.
        vec2 distortion=vec2(.0032*crossWave+.0021*(detail.r-.5),.0027*ripple+.0012*swell);
        vec2 uv=mirrorUV+distortion*(.32+.68*smoothstep(.04,2.5,distance));
        if(all(greaterThan(uv,vec2(.0)))&&all(lessThan(uv,vec2(1.)))){
          vec4 reflected=texture2D(reflection,uv);
          float strength=(1.-smoothstep(.65,5.8,distance))*(.31+.08*ripple);
          c=c*(1.-reflected.a*strength)+reflected.rgb*vec3(.64,.79,.84)*strength;
        }
        c*=1.-.36*contact;
        c+=crest*(pool*(.021+.021*coastal)*glint+pool*coastal*.013*fine+wash*(.047*waveLip+.138*lace*waveBody));
        gl_FragColor=vec4(c,1.);
        #include <colorspace_fragment>
      }`}),W=h(new wn(126,105),X,0,N,0);W.rotation.x=-Math.PI/2;function xe(G,ce,se){f(se,se+.16,.34,G,.06,ce,l.dark,48),f(se+.025,se,.22,G,.3,ce,l.blue,48),f(se-.03,se-.01,.11,G,.468,ce,l.copper,48),f(se-.1,se-.04,.16,G,.58,ce,l.metal,48),f(se-.29,se-.29,.035,G,.675,ce,l.deck,48),g(se-.31,.027,G,.703,ce,l.dark);for(let me=0;me<36;me++){let x=me*Math.PI/18,I=u(.21,.033,.092,G+Math.cos(x)*(se-.21),.68,ce+Math.sin(x)*(se-.21),me%3===0?l.cyan:l.ivory);I.rotation.y=-x-Math.PI/2}}u(12.52,.46,7.04,-.65,.13,-.09,l.dark,.24),u(12.42,.18,6.91,-.65,.37,-.09,l.copper,.15),u(12.3,.2,6.83,-.65,.52,-.09,l.metal,.12),u(12.12,.09,6.64,-.65,.66,-.09,l.deck,.06);for(let G of[-5.7,-2.4,1,4.3]){for(let ce of[-2.35,2.3])u(.58,.56,.67,G,.17,ce,l.blue,.08);u(1.18,.052,.075,G,.642,3.34,l.window,.02)}xe(-10.7,3.15,2.17),xe(-8.65,-4.55,1.72),xe(-11.72,-.32,1.54),xe(10.6,-3.45,2.28),xe(10.3,4.4,2.18),xe(7.3,-7.25,1.95);let Re={},ve={};function _e(G,ce,se,me,x,I,k=!0){let z=new rs(Zt(se),Zt(me),Zt(x),Zt(I));if(G&&(Re[G+">"+ce]={curve:z,reverse:!1},Re[ce+">"+G]={curve:z,reverse:!0}),G==="fork"&&ce!=="tools"){let pe=new ss(z.getPoints(22).map(we=>new B(we.x,.795,we.z)));ve[ce]=h(new Xs(pe,22,.053,5,!1),l.cyan,0,0,0)}let F=Math.ceil(z.getLength()/(k?.43:.31)),q=(pe,we,Ae)=>{let Pe=z.getPointAt(pe),Ve=z.getTangentAt(pe);return[Pe.x-Ve.z*we,Ae,Pe.z+Ve.x*we]};for(let pe=0;pe<F;pe++){let we=pe/F,Ae=(pe+1)/F;if(k){v(q(we,0,.52),q(Ae,0,.52),1.56,.2,l.dark),v(q(we,0,.65),q(Ae,0,.65),1.47,.09,l.deck);for(let Pe of[-.7,.7])v(q(we,Pe,.745),q(Ae,Pe,.745),.026,.036,l.window)}for(let Pe of[-.29,.29])v(q(we,Pe,.765),q(Ae,Pe,.765),.055,.048,l.ivory);if(v(q(we,-.42,.727),q(we,.42,.727),.085,.038,l.blue),k&&pe%4===2){let Pe=z.getPointAt(we);f(.19,.26,.54,Pe.x,.18,Pe.z,l.blue,9)}}}let U=lr;_e("entry","gate",U.entry,[-9,.9,3.15],[-7,.9,2.05],U.gate),_e("apps","gate",U.apps,[-6.55,.9,-4.5],[-6.9,.9,1.88],U.gate),_e("agent","gate",U.agent,[-9.2,.9,-.45],[-7.5,.9,1.87],U.gate),_e("gate","scan",U.gate,[-4.8,.9,2.05],[-3.7,.9,1.95],U.scan),_e("scan","route",U.scan,[-1.6,.9,1.95],[-.5,.9,1.79],U.route,!1),_e("route","fork",U.route,[1.4,.9,1.79],[3.5,.9,1.79],U.fork,!1),_e("fork","main",U.fork,[6.7,.9,1.79],[7.35,.9,-3.45],U.main),_e("fork","backup",U.fork,[6.8,.9,1.79],[7.1,.9,4.4],U.backup),_e("fork","tools",U.fork,[6.58,.9,.88],[5.23,.9,-7.25],U.tools);let O=new kt,j=new kt;t.add(O,j);function Ee(G,ce,se,me,x,I,k,z=["#103644","#dbf3ed"],{productTitle:F=!1,hiRes:q=!1}={}){let pe=document.createElement("canvas");pe.width=q?1024:512,pe.height=q?Math.round(pe.width*se/ce):96;let{width:we,height:Ae}=pe,Pe=pe.getContext("2d");Pe.fillStyle=z[0],Pe.fillRect(0,0,we,Ae),Pe.fillStyle=z[1],Pe.textAlign="center",Pe.textBaseline="middle",Pe.font=(q?"750 ":"650 ")+Math.round(Ae*(q?.61:.54))+"px PingFang SC, Microsoft YaHei, system-ui",F?ua(Pe,we/2,Ae/2,Ae*.6,{color:z[1],accent:"#83e5cf",align:"center",maxWidth:we*.94}):Pe.fillText(G,we/2,Ae*.52,we*.94);let Ve=new Hn(pe);return Ve.colorSpace=St,q&&(Ve.anisotropy=Math.min(4,e.capabilities.getMaxAnisotropy())),h(new wn(ce,se),new en({map:Ve}),me,x,I,k)}u(11.8,2.15,.26,-.65,1.81,-3.15,l.glass,.06);for(let G of[-6.42,-3.55,-.65,2.24,5.18])for(let ce of[-3,3])u(.3,3.88,.31,G,2.66,ce,l.ivory,.043),u(.5,.14,.49,G,.79,ce,l.blue,.027);for(let G of[-6.45,5.2])u(.34,.36,6.24,G,4.44,0,l.ivory,.09),u(.35,2.03,.35,G,1.77,.7,l.ivory,.05),u(.35,2.03,.35,G,1.77,2.83,l.ivory,.05),u(.36,.2,2.48,G,2.81,1.76,l.ivory,.038),u(.37,.045,1.95,G,2.72,1.76,l.cyan,.016);u(10.45,.22,2.96,-.54,2.91,-1.58,l.ivory,.085),u(10.36,.06,.048,-.54,2.91,-.08,l.cyan,.012),u(8.83,1.18,2.13,-.26,3.61,-1.85,l.glass,.14),u(9.07,.19,2.37,-.26,4.25,-1.85,l.ivory,.1);let J=[];for(let G=0;G<8;G++){let ce=-2.5+G*.67,se=.21+G%4*.1;J.push({x:ce,high:se,index:G}),u(.045,.76,.042,ce+.3,3.68,-.765,l.ivory,.008)}let le=[l.copper,l.cyan].map((G,ce)=>{let se=J.filter(x=>+(x.index%3!==0)===ce),me=new Bs(new yn(1,1,1),G,se.length);return me.frustumCulled=!1,t.add(me),{instances:me,bars:se}}),ke=new Dt,T=null;function Oe(G){if(G!==T){T=G;for(let{instances:ce,bars:se}of le){for(let[me,x]of se.entries()){let I=x.high*(G<0?1:.52+G*(.44+x.index%3*.15));ke.position.set(x.x,3.25+I/2,-.765),ke.scale.set(.38,I,.045),ke.updateMatrix(),ce.setMatrixAt(me,ke.matrix)}ce.instanceMatrix.needsUpdate=!0}}}Oe(-1);let Ce=[];for(let G=0;G<3;G++){let ce=2.36+G*.55;Ce.push(u(.38,.27,.4,ce,1.08,-.62,l.copper,.04)),u(.4,.055,.41,ce,1.21,-.62,l.cyan,.018)}u(2.25,.11,.81,2.93,.9,-.67,l.metal,.05);let ye=Ee("\u8FD0\u8425\u4E0E\u5BA1\u8BA1",2.06,.35,.75,3.91,-.752,t),Ie=Ee("Skill \u5BA1\u6838\u4E0E\u53D1\u5E03",2.42,.45,2.69,1.56,.08,t,["#102f3d","#f3fff9"],{hiRes:!0});u(11.63,.31,3.1,-.64,4.64,1.4,l.ivory,.11,O),u(11.37,.105,2.83,-.64,4.84,1.43,l.roof,.05,O);for(let G=0;G<13;G++){let ce=-5.65+G*.835;u(.038,.018,2.72,ce,4.902,1.43,l.metal,.005,O),G%2===0&&u(.56,.022,.56,ce+.32,4.904,2.28,l.glass,.009,O)}u(10.85,.014,.035,-.64,4.908,2.66,l.copper,.005,O),u(11.69,.07,.08,-.64,4.63,2.98,l.cyan,.023,O),u(11.63,.25,3.16,-.64,4.63,-1.72,l.ivory,.09),u(11.33,.073,2.87,-.64,4.79,-1.72,l.roof,.042),u(8.5,.1,.44,-.26,4.93,-2.43,l.glass,.04);for(let G=0;G<12;G++)u(.04,.065,.45,-4.24+G*.73,4.97,-2.43,l.ivory,.009);u(8.38,.19,.98,-.27,4.89,-1.58,l.glass,.07),u(11.61,.57,.21,-.64,4.2,3.075,l.dark,.056,O),Ee("\u5C71\u77F3\u7F51\u79D1\u7EDF\u4E00 AI \u7F51\u5173",5.62,.52,-.63,4.2,3.191,O,["#172e3d","#f8ead2"],{productTitle:!0,hiRes:!0});for(let G of[-4.1,2.9])u(.72,.034,.021,G,4.19,3.192,l.copper,.005,O);u(10.99,.042,.046,-.65,2.3,3.106,l.warm,.009,j);for(let G=0;G<14;G++){let ce=-5.75+G*.79;u(.735,.9,.095,ce,1.79,3.04,G%3===1?l.blue:l.glass,.021,j),u(.031,.86,.023,ce+.341,1.79,3.108,l.metal,.006,j)}u(11.8,.09,.12,-.65,2.27,3.04,l.metal,.02,j),u(11.8,.09,.12,-.65,1.3,3.04,l.metal,.02,j);function Ye(G,ce,se){for(let me of[-.73,.73])u(.28,1.28,.24,G,1.35,ce+me,l.ivory,.04),u(.39,.12,.36,G,.78,ce+me,l.dark,.035);return u(.71,.19,1.79,G,2,ce,l.ivory,.06),u(.34,.072,.049,G,2,ce+.901,se,.014)}let be=Ye(U.gate[0],U.gate[2],l.cyan),We=Ye(U.scan[0],U.scan[2],l.cyan);Ye(U.route[0],U.route[2],l.cyan),u(1.25,.14,1.41,.65,2.08,.7,l.metal,.05);let je=u(.045,1.05,1.14,U.scan[0],1.28,U.scan[2],new en({color:"#81e9ce",transparent:!0,opacity:.22,depthWrite:!1})),Qe=new kt;Qe.position.set(U.scan[0]+.62,1.18,U.scan[2]),t.add(Qe);for(let G of[-.17,0,.17])u(.11,.085,1.33,0,G,0,l.copper,.018,Qe);for(let G of[-.57,.57])u(.12,.44,.075,0,0,G,l.dark,.014,Qe);let b=new kt;b.position.set(U.scan[0]+.29,2.22,U.scan[2]+.92),b.scale.setScalar(1.35),t.add(b),u(.86,.045,.61,0,0,0,l.ivory,.035,b),u(.6,.008,.083,-.025,.027,-.16,l.glass,.005,b),u(.55,.012,.095,.02,.029,.005,l.red,.006,b);for(let G of[-.14,-.065,.01,.085,.16])f(.016,.016,.009,G,.039,.005,l.ivory,7,b);u(.48,.008,.06,-.03,.027,.16,l.glass,.004,b);let _=new kt;b.add(_);let H=Ee("\u5F02\u5E38\u6307\u4EE4",.68,.29,0,.046,.01,_,["#ac523e","#fff0d7"]);H.rotation.x=-Math.PI/2;let ne=Ee("\u539F\u4EFB\u52A1\uFF1A\u5206\u6790\u63A5\u53E3\u62A5\u9519",.97,.22,-.05,.05,-.47,_);ne.rotation.x=-Math.PI/2;let re=new kt;re.position.set(U.fork[0]-.08,.83,U.fork[2]),t.add(re);for(let G of[-.24,.24])u(1.83,.069,.07,.78,0,G,l.metal,.014,re);let K=u(.22,.12,.14,U.fork[0]-.03,1.01,U.fork[2]+.77,l.cyan,.025);function oe(G,ce,se){let me=se==="primary"||se==="backup",x=me?1:.84;u(2.66,x,1.01,G,.76+x/2,ce,l.blue,.085),u(2.85,.14,1.2,G,.83+x,ce,l.ivory,.055),u(2.48,.055,.91,G,.93+x,ce,l.copper,.02);for(let I=0;I<7;I++)u(.25,.46,.035,G-1.03+I*.345,1.28,ce+.512,l.window,.015);return me&&(f(.52,.67,.43,G+.48,2.09,ce,l.ivory,24),f(.52,.55,.087,G+.48,2.34,ce,l.glass,24),g(.48,.028,G+.48,2.38,ce,l.cyan)),u(.28,.083,.1,G-.72,.99+x,ce+.49,se==="primary"?l.cyan:l.blueLight,.024)}oe(-10.7,2.17,"entry"),oe(-8.65,-5.25,"entry"),u(1.56,.71,.69,-11.8,1.15,-1.1,l.blue,.07),u(1.7,.105,.78,-11.8,1.55,-1.1,l.ivory,.045);let ee=oe(10.6,-4.38,"primary"),Me=oe(10.3,3.43,"backup");oe(7.3,-8.09,"tools");for(let[G,ce]of[[-12,3.9],[-9.5,4.65],[-9.8,-4.5],[10.7,-1.66],[11.6,3.24],[.45,4.03],[2.3,3.46],[-2.5,3.52],[7.9,-6.1]])f(.032,.048,.47,G,.91,ce,l.dark,8),u(.17,.042,.1,G+.04,1.16,ce,l.cyan,.012);let fe=new kt;t.add(fe),u(.51,.14,.73,0,-.07,0,l.dark,.052,fe),u(.46,.28,.65,0,.13,0,l.ivory,.09,fe),u(.48,.13,.32,0,.16,.07,l.glass,.035,fe);let ae=u(.19,.043,.33,0,.286,0,l.cyan,.016,fe),he=g(.72,.032,0,.742,0,l.amber),De=new Set([W,be,We,je,ee,Me,he,K,ye,Ie,...le.map(G=>G.instances),...Ce,...Object.values(ve)]);function Le(G,ce=new Set){let se=new Map;for(let me of[...G.children]){if(!me.isMesh||ce.has(me)||me.material.map)continue;me.updateMatrix();let x=me.geometry.index?me.geometry.toNonIndexed():me.geometry.clone();x.applyMatrix4(me.matrix),se.has(me.material)||se.set(me.material,[]),se.get(me.material).push(x),G.remove(me)}for(let[me,x]of se){G.add(new yt(Wh(x),me));for(let I of x)I.dispose()}}Le(t,De);for(let G of[O,j,Qe,b,re])Le(G);for(let G of t.children)(G.isLight||G.isMesh&&!De.has(G))&&G.layers.enable(w);for(let G of[O,j])for(let ce of G.children)ce.isMesh&&!ce.material.map&&ce.layers.enable(w);let Te=[];for(let G of[l.cyan,l.blueLight,l.amber]){let ce=new kt;t.add(ce),u(.47,.2,.65,0,.07,0,l.ivory,.07,ce),ce.userData.signal=u(.22,.05,.36,0,.2,0,G,.02,ce),ce.userData.baseLight=G,Te.push(ce)}let ze=1,D=1,ue=0,Se=0,Fe=1,de=new B(0,.65,0),$=new B,Be=1,qe=15,lt=0,rt=!1,sn=Zt([U.scan[0]+.19,1.46,U.scan[2]]),rn=Zt([.9,1.8,.15]),hr=Zt([7.25,1.15,.68]),pn=Zt([10.15,1.42,-3.8]),gs=Zt([9.95,1.4,4.18]),ur={access:[0,.85,.05,1],policy:[-3.7,1.7,.18,1.46],security:[-2.4,1.7,1.03,1.48],routing:[4.5,1.1,.1,1.24],resources:[3.95,1.65,-2.37,1.25],operations:[.1,2.55,-1.35,1.48]},Zn={entry:[1.78,12],gate:[2.12,11],scan:[2.29,11],dispatch:[1.87,12],main:[1.77,12],primary:[2,11],timeout:[2.32,10],junction:[1.45,17],backup:[2.22,11],return:[1.72,13],ops:[1.86,13],tools:[1.9,12]},Di={entry:[-10.8,2.3,2.1],gate:[-5.3,2.2,2.5],scan:[-2.95,2.3,2.25],route:[0,2.7,.9],ops:[.75,4.9,-1.44],tools:[7.3,2.1,-7.5],apps:[-8.65,2.3,-5.25],agent:[-11.8,1.8,-1.1],main:[10.6,2.7,-4.2],backup:[10.2,2.65,3.82],skill:[2.93,2.02,-.19],recapEntry:[-6.32,2.78,2.92],recapPolicy:[.15,2.38,3.2],recapOps:[1.25,5.27,-.55]},dr={entry:[-6.32,2.78,2.92],gate:[-5.3,2.2,2.5],scan:[-2.95,2.3,2.25],route:[5.5,1.5,1.3],tools:[2.93,2.02,-.19],ops:[1.25,5.27,-.55]};function Li(){n.getWorldDirection(V);let G=P||V.distanceToSquared(Y)>25e-6||Math.abs(O.position.z-Z)>.18,ce=performance.now();if(!G||!P&&ce-ge<(ze<760?150:100))return 0;P=!1,ge=ce,Z=O.position.z,Y.copy(V),V.y*=-1,y.position.copy(Q).addScaledVector(V,-37),y.up.setFromMatrixColumn(n.matrixWorld,1),y.up.y*=-1,y.lookAt(Q),y.updateMatrixWorld(),L.multiplyMatrices(y.projectionMatrix,y.matrixWorldInverse);let se=t.background,me=e.clippingPlanes,x=e.getClearAlpha();e.getClearColor(te),t.background=null,e.clippingPlanes=ie,e.setClearColor(0,0),e.setRenderTarget(M),e.clear(),e.render(t,y);let I=e.info.render.calls;return e.setRenderTarget(null),e.setClearColor(te,x),e.clippingPlanes=me,t.background=se,I}function fr(G,ce){ze=G,D=ce;let se=G<760?256:448,me=G<760?156:272;M.width!==se&&(M.setSize(se,me),P=!0),Fe=Math.min(devicePixelRatio||1,G<760?1.4:1.7,Math.sqrt((G<760?65e4:18e5)/(G*ce))),e.setPixelRatio(Fe),e.setSize(G,ce,!1)}function pr(G){let ce=G==="policy-denied"?Te[1].position.clone().add(Zt([0,.51,0])):Zt(G.startsWith("module-")?dr[G.slice(7)]:Di[G]);return ce.project(n),{x:(ce.x*.5+.5)*ze,y:(.5-ce.y*.5)*D}}function nt(G,ce,se=fe){if(G.length===1){se.position.copy(Zt(lr[G[0]]));return}let me=G.slice(1).map((q,pe)=>Re[G[pe]+">"+q]),x=Math.max(0,Math.min(.999999,ce))*me.length,I=me[Math.floor(x)],k=x%1,z=I.reverse?1-k:k;I.curve.getPointAt(z,se.position);let F=I.curve.getTangentAt(z);I.reverse&&F.negate(),se.rotation.y=Math.atan2(F.x,F.z)}function _a({dt:G,time:ce,step:se,progress:me,scenario:x,zone:I,reduced:k,recap:z,comparison:F}){let q=Yh(se,me),pe=!!se,we=se?.chapter==="overview",Ae=!z&&!!se&&q.id!=="access"&&se.zone!=="ops"||q.id==="operations",Pe=k?1:1-Math.exp(-G*3.8),Ve=Ae?1:0;O.position.z=st.lerp(O.position.z,-2.88*Ve,Pe),O.position.y=st.lerp(O.position.y,.26*Ve,Pe),j.position.y=st.lerp(j.position.y,-2.4*Ve,Pe),j.visible=j.position.y>-1.65,Oe(q.id==="operations"?Math.min(1,me*2):-1);for(let[Lt,at]of Ce.entries()){let ht=q.id==="resources"&&me>=.55,an=ht&&me>.83;at.material=an?l.cyan:ht&&Lt===1?l.warm:l.copper,at.position.y=1.08+(an?st.smoothstep(me,.83,.96)*.22:0)}let Ne=st.smoothstep;for(let[Lt,at]of Te.entries()){if(at.visible=!1,at.userData.signal.material=at.userData.baseLight,!we)continue;let ht=k?Math.floor(me*5)/5:me;if(q.id==="access"){let an=.08+Lt*.13,gr=an+.48;at.visible=ht>=an&&ht<=gr+.09,at.visible&&nt([["entry","gate"],["apps","gate"],["agent","gate"]][Lt],Ne(ht,an,gr),at)}else q.id==="policy"&&Lt<2?(at.visible=Lt===0?ht>=.08&&ht<.7:ht>=.3,Lt===0?nt(["entry","gate","scan"],Ne(ht,.08,.58),at):(nt(["apps","gate"],.89*Ne(ht,.3,.48),at),ht>=.48&&(at.userData.signal.material=l.red))):q.id==="security"&&Lt===0?(at.visible=!0,ht<.32?nt(["gate","scan"],Ne(ht,.08,.24),at):ht<.52?nt(["scan","route"],Ne(ht,.32,.48),at):(at.userData.signal.material=l.blueLight,ht<.76?nt(["route","scan"],Ne(ht,.53,.68),at):nt(["scan","gate"],Ne(ht,.76,.94),at))):q.id==="routing"&&Lt===0?(at.visible=!0,ht<.47?nt(["route","fork","main"],Ne(ht,.04,.36),at):ht<.72?(nt(["main","fork"],Ne(ht,.47,.68),at),at.userData.signal.material=l.amber):nt(["fork","backup"],Ne(ht,.72,.95),at)):q.id==="resources"&&Lt===0&&(at.visible=ht<.64,nt(["route","fork","tools"],Ne(ht,.05,.6),at))}let Ge=fa(se,me),it=Ge==="inspect"||Ge==="allow"||Ge==="incoming"||Ge==="blocked"||Ge==="response-inspect"||Ge==="response-allow",pt=Ge==="allow"||Ge==="response-inspect"||Ge==="response-allow",dt=q.id==="timeout",ct=se?.policy&&me>=.4,He=se?.provider&&me>=.26&&me<.86?se.provider.channel:null,Je=k?Jh(q,se,me):me;if(X.uniforms.time.value=ce,fe.visible=!se||se.track.length>0,fe.visible)if(!se)nt(["entry","gate"],.06);else if(se.label==="\u6545\u969C\u5207\u6362"){let{arrive:Lt,reverse:at,atFork:ht,depart:an,retry:gr}=Yt;Je<Lt?nt(["route","fork","main"],st.smoothstep(Je,0,Lt)):Je<at?nt(["main"],0):Je<an?nt(["main","fork"],st.smoothstep(Je,at,ht)):nt(["fork","backup"],st.smoothstep(Je,an,gr))}else if(se.provider)if(k){let Lt=me<.19||me>=.91?"entry":me<.43?"route":se.provider.channel;nt([Lt],0)}else me<.62?nt(se.track,Ne(me,.08,.57)):nt(se.returnTrack,Ne(me,.65,.91));else if(se.policy)nt(se.track,.9*(k?Number(ct):Ne(me,.05,.39)));else if(se.risk==="response"){let{depart:Lt,model:at,returning:ht,arrive:an}=rr;me<ht?nt(se.track,k?+(me>=at):Ne(me,Lt,at)):nt(se.returnTrack,.9*(k?+(me>=an):Ne(me,ht,an)))}else Ge==="incoming"||Ge==="blocked"?nt(se.track,st.smoothstep(Je,0,or.arrive)):se.comparison==="normal"?me<.78?nt(se.track,Ne(Je,.48,.77)):nt(["main","fork","route","scan"],Ne(Je,.78,.93)):Ge==="inspect"||Ge==="allow"?nt(se.track,st.smoothstep(Je,sr.depart,sr.arrive)):se.label==="\u54CD\u5E94\u68C0\u67E5"?Je<.4?nt(se.track.slice(0,4),st.smoothstep(Je,0,.4)):Je<.68?nt(["scan"],0):nt(se.track.slice(3),st.smoothstep(Je,.68,1)):se.label==="\u9009\u62E9\u6E20\u9053"?nt(se.track,st.smoothstep(Je,0,.87)):se.label==="\u6388\u6743\u4E0E\u989D\u5EA6"?nt(se.track,st.smoothstep(Je,.61,1)):nt(se.track,st.smoothstep(Je,0,1));let tt=it?Zn.scan:Zn[q.id]||Zn[I]||[1,15];$.set(0,.65,0),pe&&fe.visible?($.copy(fe.position),$.y+=.66,q.id==="dispatch"&&$.lerp(rn,.63),it&&$.copy(sn),q.id==="main"&&$.lerp(pn,.25),q.id==="primary"&&$.lerp(pn,.46),q.id==="timeout"&&$.copy(pn),q.id==="junction"&&$.copy(hr),q.id==="backup"&&$.lerp(gs,.34+.52*st.smoothstep(me,.82,.97))):I&&($.copy(Zt(lr[I])),I==="ops"?$.set(0,3,-1.5):$.y+=.55);let xt=we?ur[q.id]:null;xt&&$.set(xt[0],xt[1],xt[2]),z&&$.set(.05,.78,0),F&&$.copy(sn),(it||F)&&!z&&($.y+=ze<760?.45:-.24);let Dn=F?Zn.scan[0]:z?1:xt?xt[3]:I==="ops"?1.12:pe||I?tt[0]:1,Vt=F?Zn.scan[1]:z?16:xt?18:pe||I?tt[1]:15,Jn=!se&&ze>=760&&D>=620?Math.min(42,D*.047):0,mt=de.distanceToSquared($)+Math.abs(Be-Dn)+Math.abs(Se-ue)+Math.abs(lt-Jn)*.01,It=k||!rt?1:1-Math.exp(-G*(q.id==="junction"?5.8:4.5));rt=!0,de.lerp($,It),Be=st.lerp(Be,Dn,It),qe=st.lerp(qe,Vt,It),lt=st.lerp(lt,Jn,It),ue=st.lerp(ue,Se,It);let Ft=ze<760,vt=ze/D,on=(Ft?Math.max(14.6/vt,10):Math.max(9.9,18.7/vt))/Be,bn=Ft?0:on*vt*(.235+.08*Math.min(1,Be-1)),Hl=Ft?-on*.005:on*.015+2*on*lt/D;n.left=-on*vt-bn,n.right=on*vt-bn,n.top=on+Hl,n.bottom=-on+Hl,n.near=.1,n.far=112,n.updateProjectionMatrix(),n.position.set(de.x+9+Math.sin(ue)*22,de.y+qe,de.z+23+Math.cos(ue)*4),n.lookAt(de),n.updateMatrixWorld(),he.visible=!!I&&I!=="ops"&&!z,he.visible&&he.position.set(lr[I][0],.802,lr[I][2]);let _s=(x==="failover"||x==="tour")&&(se?.label==="\u6545\u969C\u5207\u6362"&&me>=Yt.arrive||se?.label==="\u54CD\u5E94\u68C0\u67E5"||(se?.label==="\u5B89\u5168\u62E6\u622A"||se?.risk==="injection")&&x==="tour"||se?.zone==="ops"&&se?.chapter!=="overview")||q.id==="routing"&&me>=.47;ee.material=_s?l.red:He==="backup"?l.dim:l.cyan,Me.material=_s||He==="backup"?l.cyan:l.blueLight;let Gl=se?.zone==="route"||se?.label==="\u54CD\u5E94\u68C0\u67E5";ve.main.visible=se?.provider?He==="main":Gl&&!_s,ve.backup.visible=se?.provider?He==="backup":q.id==="routing"&&me>=.69||q.id!=="routing"&&Gl&&_s&&(se?.label!=="\u6545\u969C\u5207\u6362"||me>=Yt.turn),be.material=ct?se.label==="\u6743\u9650\u62D2\u7EDD"?l.red:l.amber:se?.label==="\u989D\u5EA6\u62D2\u7EDD"&&!se.policy?l.amber:se?.label==="\u6388\u6743\u4E0E\u989D\u5EA6"&&me<.24?l.dim:l.cyan;let mr=Ge==="blocked",tu=I!=="scan"||pt||Ge==="returning"||q.id==="security"&&me>.15,Wl=k?1:1-Math.exp(-G*11);Qe.position.y=st.lerp(Qe.position.y,tu?2.27:1.19,Wl),_.visible=se?.risk==="injection",b.visible=mr||Ge==="incoming"&&me>=.51,b.position.y=1.57+.84*st.smoothstep(me,.49,.66),b.rotation.x=.38,b.scale.setScalar(_.visible?1.65:1.45),We.material=mr?l.red:pt?l.cyan:it?l.amber:l.cyan,je.visible=q.id==="security"||it&&(!pt||Ge==="response-inspect")||I==="scan"&&!se,je.position.x=U.scan[0]-.23+.46*(k?.5:ce*.7%1),je.material.color.set(mr?"#ff9f69":"#81e9ce");let Xl=se?.provider?He==="backup":q.id==="routing"?me>=.69:_s&&(se?.label!=="\u6545\u969C\u5207\u6362"||me>=Yt.turn);re.rotation.y=st.lerp(re.rotation.y,Xl?-.21:.19,Wl),K.material=dt?l.amber:Xl?l.cyan:l.dim,ae.material=dt?k||Math.sin(ce*9)>.05?l.amber:l.dim:mr||ct?l.red:se?.risk==="response"&&me>=rr.returning?l.blueLight:l.cyan;let nu=Li();return e.clear(),e.render(t,n),{calls:e.info.render.calls+1,reflectionCalls:nu,reflectionPixels:M.width*M.height,triangles:e.info.render.triangles+2,pixelRatio:Fe,stage:se?.label||null,progress:me,shot:q,cue:Zh(q,se,me),safety:Ge,shutter:Qe.position.y,attachment:b.visible,injection:_.visible&&b.visible,cutaway:O.position.z,chapter:se?.chapter||"example",recap:!!z,turnout:re.rotation.y,zoom:Be,viewTarget:F?[de.x,de.y,de.z]:null,cameraMoving:mt>.001&&!k,branch:ve.backup.visible?"backup":ve.main.visible?"main":null}}return{renderer:e,resize:fr,draw:_a,project:pr,rotate:G=>{Se=st.clamp(Se+G,-.5,.52)},reset:()=>{Se=0}}}var Kh='"PingFang SC","Microsoft YaHei",system-ui,sans-serif',qn=[["entry","\u7814\u53D1\u52A9\u624B","\u53D1\u8D77\u7814\u53D1\u4EFB\u52A1"],["agent","\u4F01\u4E1A\u667A\u80FD\u4F53","\u8C03\u7528\u83B7\u51C6\u7684\u8D44\u6E90"],["apps","\u4E1A\u52A1\u5E94\u7528","\u8FDE\u63A5\u73B0\u6709\u4E1A\u52A1\u7CFB\u7EDF"],["tools","MCP \u5DE5\u5177\u7AD9","\u6309\u6388\u6743\u8C03\u7528\u5916\u90E8\u5DE5\u5177"],["main","\u4E3B\u6A21\u578B\u6E20\u9053","\u4F18\u5148\u5904\u7406\u6A21\u578B\u8BF7\u6C42"],["backup","\u5907\u7528\u6A21\u578B\u6E20\u9053","\u4E3B\u6E20\u9053\u5F02\u5E38\u65F6\u63A5\u7EED\u670D\u52A1"]],Gg=[["main","\u4F9B\u5E94\u5546 A \xB7 \u6A21\u578B A","\u5206\u6790\u63A5\u53E3\u62A5\u9519"],["backup","\u4F9B\u5E94\u5546 B \xB7 \u6A21\u578B B","\u6574\u7406\u6392\u67E5\u6E05\u5355"]],Ii=156,ga=46,Pi=4,ma=ga*2+4,cr=12,Wg=[2,1,0,3,4,5];function jh(){let i=document.createElement("canvas");i.width=Pi*Ii*2,i.height=ma*2;let e=i.getContext("2d");e.scale(2,2),e.textAlign="center",e.textBaseline="middle";for(let[f,[,g,v]]of[...qn,...Gg].entries()){let m=f%Pi*Ii,p=Math.floor(f/Pi)*ga;e.beginPath(),e.roundRect(m+3,p+3,Ii-6,39,6),e.fillStyle="#0a2734",e.fill(),e.strokeStyle="#518480",e.stroke(),e.fillStyle="#eef9f7",e.font="740 13px "+Kh,e.fillText(g,m+Ii/2,p+14),e.fillStyle="#a7d6cd",e.font="550 11px "+Kh,e.fillText(v,m+Ii/2,p+30)}e.fillStyle="#76c7b8",e.fillRect(0,ma-4,4,4);let t=new Hn(i);t.colorSpace=St,t.generateMipmaps=!1,t.minFilter=Nt;let n=new Xt,s=new bt(new Float32Array(qn.length*cr*3),3).setUsage(nr),r=new bt(new Float32Array(qn.length*cr*2),2).setUsage(nr),o=new bt(new Float32Array(qn.length*cr*4),4).setUsage(nr);n.setAttribute("position",s),n.setAttribute("uv",r),n.setAttribute("color",o);let a=new yt(n,new en({map:t,transparent:!0,depthTest:!1,depthWrite:!1,vertexColors:!0}));a.renderOrder=-1,a.frustumCulled=!1,a.visible=!1;let l=[[0,0],[0,1],[1,1],[0,0],[1,1],[1,0]],c=new Float32Array(qn.length),h=!1,d=[];function u(f,g,v,m,p,C,E){if(a.visible=!!f,!f){h=!1;return}let S=g<760?.78:1,R=Ii*S,A=ga*S;d.length=0;let N=0;for(let w of Wg){let[y]=qn[w],M=f(y),L=st.clamp(M.x-R/2,5,g-R-5),V=Math.max(m,M.y-A-12),Y=Math.min(M.x,g-M.x,M.y-m,p-M.y),Q=st.smoothstep(Y,0,18);if(Q<=0){c[w]=V;continue}let ie=V;for(let j of d){let Ee=1-st.smoothstep(Math.abs(L-j.x),R*.76,R),J=st.clamp(A-8-Math.abs(ie-j.y),0,A-8);ie+=J*Ee}let te=h?st.lerp(c[w],ie,1-Math.exp(-Math.max(E,.012)*18)):ie,ge=st.clamp(te,m,p-A);c[w]=ge,d.push({x:L,y:ge});let Z=Q;if(Z<=0)continue;let P=C&&w>=4?w+2:w,X=P%Pi,W=Math.floor(P/Pi),xe=N*cr,Re=st.clamp(M.x,L+8,L+R-8),ve=ge+42*S,_e=M.x-Re,U=Math.max(0,M.y-ve),O=Math.hypot(_e,U)||1;for(let[j,[Ee,J]]of l.entries()){let le=xe+j,ke=Re+_e*J+(Ee-.5)*U/O,T=ve+U*J-(Ee-.5)*_e/O;s.setXYZ(le,2*ke/g-1,1-2*T/v,0),r.setXY(le,2/(Pi*Ii),2/ma),o.setXYZW(le,1,1,1,M.y>ve?Z:0)}for(let[j,[Ee,J]]of l.entries()){let le=xe+6+j;s.setXYZ(le,2*(L+Ee*R)/g-1,1-2*(ge+J*A)/v,0),r.setXY(le,(X+Ee)/Pi,1-(W+J)*ga/ma),o.setXYZW(le,1,1,1,Z)}N++}h=!0,n.setDrawRange(0,N*cr),a.visible=N>0,s.needsUpdate=r.needsUpdate=o.needsUpdate=!0}return{mesh:a,update:u}}var Ct="#e5f3f1",Rt="#aac5cb",Jt="#83e5cf",Yn="#ffc085",Qh='"PingFang SC","Microsoft YaHei",system-ui,sans-serif';function eu(i,e){let t=document.createElement("canvas"),n=t.getContext("2d"),s=new Hn(t);s.colorSpace=St,s.generateMipmaps=!1,s.minFilter=Nt;let r=new Mi,o=new En(-1,1,1,-1,0,2),a=new yt(new wn(2,2),new en({map:s,transparent:!0,depthTest:!1,depthWrite:!1}));o.position.z=1;let l=jh();r.add(a,l.mesh);let c=null,h=1,d=1,u=1,f=[],g=[];function v(P,X){h=P,d=X,u=Math.min(devicePixelRatio||1,1.65,Math.sqrt((h<760?85e4:18e5)/(h*d))),t.width=Math.round(h*u),t.height=Math.round(d*u),n.setTransform(t.width/h,0,0,t.height/d,0,0)}function m(P,X,W,xe=14,Re=Ct,ve=500){n.font=ve+" "+xe+"px "+Qh,n.fillStyle=Re,n.textBaseline="top",n.fillText(P,X,W)}function p(P,X=14,W=500){return n.font=W+" "+X+"px "+Qh,n.measureText(P).width}function C(P,X,W,xe,Re,ve,_e=Rt,U=500){let O="";for(let j of P)O&&p(O+j,Re,U)>xe?(m(O,X,W,Re,_e,U),W+=ve,O=j):O+=j;return O&&(m(O,X,W,Re,_e,U),W+=ve),W}function E(P,X,W){let xe=[],Re=P;for(;p(Re,W,650)>X;){let ve=[...Re],_e=1;for(;_e<ve.length&&p(ve.slice(0,_e+1).join(""),W,650)<=X;)_e++;let U=ve.slice(0,_e).findLastIndex(j=>"\u3002\uFF1B\uFF0C\u3001".includes(j))+1,O=U>=Math.floor(_e*.58)?U:_e;for(p(ve.slice(O).join(""),W,650)<X*.28&&O>5&&(O=Math.max(1,Math.floor(O*.72)));O>1&&"\u3002\uFF1B\uFF0C\u3001\uFF01\uFF1F\uFF09".includes(ve[O]);)O--;xe.push(ve.slice(0,O).join("").trim()),Re=ve.slice(O).join("").trimStart()}return Re&&xe.push(Re),xe}function S(P,X,W,xe,Re,ve,_e){n.beginPath(),n.roundRect(P,X,W,xe,Re),n.fillStyle=ve,n.fill(),_e&&(n.strokeStyle=_e,n.lineWidth=1,n.stroke())}function R(P,X,W,xe="#29505b"){n.fillStyle=xe,n.fillRect(P,X,W,1)}function A(P,X,W,xe,Re,ve,_e,{selected:U=!1,primary:O=!1,compact:j=!1,focus:Ee}={}){let J=j?11:13,le=Math.max(8,Math.min(J,J*(Re-5)/p(X,J,650))),ke=U?"#235857":"#102e3b";if(O){let T=n.createLinearGradient(W,xe,W,xe+ve);T.addColorStop(0,"#b1ebdc"),T.addColorStop(1,"#7fcaba"),ke=T}S(W,xe,Re,ve,j?5:8,ke,Ee===P?"#f4ca8f":U?"#74cabb":"#31535f"),m(X,W+(Re-p(X,le,650))/2,xe+(ve-le)/2-1,le,O?"#092731":Ct,650),f.push({id:P,label:X,x:W,y:xe,width:Re,height:ve,action:_e})}function N(P,X,W,xe,Re,ve,_e){let U=p(X,11,600)+25,O=Math.max(6,Math.min(h-U-6,W-U/2));n.beginPath(),n.arc(W,xe+7,2.3,0,Math.PI*2),n.fillStyle=ve?Yn:Jt,n.fill(),n.fillRect(W-.5,xe-3,1,10),S(O,xe-24,U,21,5,ve?"#284e4b":"#0b2936ec",_e===P?Yn:"#47727b"),m(X,O+11,xe-19,11,ve?Yn:Ct,600),Re&&f.push({id:P,label:X,x:O,y:xe-24,width:U,height:26,action:Re}),g.push({x:O,y:xe-24,width:U,height:26})}function w(P,X,W,xe){g.push({x:P,y:X,width:W,height:xe})}function y(P,X,W,xe,Re){let _e=xe?11:12,U=22,O=4,j=[],Ee=g.slice(),J=(ke,T,Oe)=>Math.max(T,Math.min(Oe,ke)),le=(ke,T,Oe,Ce)=>ke<Ce.x+Ce.width+O&&ke+Oe+O>Ce.x&&T<Ce.y+Ce.height+O&&T+U+O>Ce.y;for(let[ke,[T,Oe]]of qn.entries()){let Ce=Re&&{main:"\u4F9B\u5E94\u5546 A \xB7 \u6A21\u578B A",backup:"\u4F9B\u5E94\u5546 B \xB7 \u6A21\u578B B"}[T]||Oe,ye=P(T),Ie=ye.x<8||ye.x>h-8||ye.y<X||ye.y>W,Ye=Ce;Ie&&(ye.x<8?Ye="\u2190 "+Ce:ye.x>h-8?Ye=Ce+" \u2192":Ye=Ce+(ye.y<X?" \u2191":" \u2193"));let be=Math.ceil(p(Ye,_e,650))+18,We=h-8-be,je=J(ye.x-be/2,8,We),Qe=J(ye.y-U-9,X,W-U),b=[je,8,We,J(je-be-7,8,We),J(je+be+7,8,We)],_=null;for(let re of b){let K=Math.abs(re-je);for(let oe=0;oe<=W-X&&!(_&&K+oe*1.2>=_.score);oe+=U+O)for(let ee of oe?[Qe-oe,Qe+oe]:[Qe]){if(ee<X||ee+U>W||g.some(fe=>le(re,ee,be,fe)))continue;let Me=K+oe*1.2;(!_||Me<_.score)&&(_={x:re,y:ee,score:Me})}}if(!_){let re=ke%3,K=Math.floor(ke/3);_={x:J(h/3*(re+.5)-be/2,8,We),y:X+K*(U+O)}}let{x:H,y:ne}=_;w(H,ne,be,U),j.push({x:H,y:ne,width:be,height:U,label:Ye,point:ye,offscreen:Ie})}for(let{x:ke,y:T,width:Oe,point:Ce,offscreen:ye}of j){let Ie=Ee.some(Ye=>Ce.x>=Ye.x&&Ce.x<=Ye.x+Ye.width&&Ce.y>=Ye.y&&Ce.y<=Ye.y+Ye.height);ye||Ie||(n.beginPath(),n.moveTo(J(Ce.x,ke+5,ke+Oe-5),Ce.y<T?T:T+U),n.lineTo(Ce.x,Ce.y),n.strokeStyle="#74b9b0",n.lineWidth=1,n.stroke(),n.beginPath(),n.arc(Ce.x,Ce.y,2,0,Math.PI*2),n.fillStyle=Jt,n.fill())}for(let{x:ke,y:T,width:Oe,label:Ce,offscreen:ye}of j)S(ke,T,Oe,U,5,ye?"#0c2a38":"#0c2a38f5",ye?"#426472":"#5c938f"),m(Ce,ke+9,T+4,_e,ye?Rt:Ct,650)}function M(P,X){let W=[["\u591A\u6A21\u578B\u7EDF\u4E00\u63A5\u5165","\u4E00\u6B21\u63A5\u5165\u591A\u5BB6\u6A21\u578B"],["\u7CBE\u7EC6\u6743\u9650\u4E0E\u914D\u989D","\u8C01\u80FD\u7528\u3001\u80FD\u7528\u591A\u5C11"],["\u53CC\u5411\u5185\u5BB9\u5B89\u5168","\u8BF7\u6C42\u548C\u54CD\u5E94\u90FD\u8FC7\u68C0"],["\u5168\u94FE\u8DEF\u8FD0\u8425\u5BA1\u8BA1","\u7528\u91CF\u3001\u8D39\u7528\u548C\u5F02\u5E38\u53EF\u8FFD\u6EAF"]],xe=X?2:4,Re=(h-P*2)/xe,ve=X?37:45,_e=d-(X?88:63);w(P,_e,h-P*2,d-_e),R(P,_e,h-P*2,"#31515b");for(let[U,[O,j]]of W.entries()){let Ee=P+U%xe*Re+7,J=_e+8+Math.floor(U/xe)*ve;m(O,Ee,J,X?11:13,Jt,720),m(j,Ee,J+(X?15:20),X?10:12,Ct,550)}}function L(P,X,W,xe,Re){let ve=Math.min(h-X*2,390),_e=xe||Re?13:15,U=Re?16:20,O=P.revealed?E(P.evidence,ve-32,_e):[],j=E(P.status,ve-32,_e),Ee=P.blocked?P.verdict:"",J=Ee?E(Ee,ve-32,_e):[],le=66+U*(O.length+j.length+J.length)+(P.recorded?U:0),ke=W-le-12;w(X,ke,ve,le),S(X,ke,ve,le,10,"#092734fa","#49747f"),m(P.title+" \xB7 \u573A\u666F\u793A\u610F",X+15,ke+11,11,Jt,700),m("\u539F\u4EFB\u52A1 \xB7 \u5206\u6790\u63A5\u53E3\u62A5\u9519\u539F\u56E0",X+15,ke+31,_e,Ct,700);let T=ke+52;for(let Oe of O)m(Oe,X+15,T,_e,P.flagged?Yn:Rt,600),T+=U;for(let Oe of J)m(Oe,X+15,T,_e,Rt,600),T+=U;for(let Oe of j)m(Oe,X+15,T,_e,P.blocked||P.flagged?Yn:Jt,700),T+=U;P.recorded&&m("\u5BA1\u8BA1\u8BB0\u5F55 \xB7 \u5DF2\u4FDD\u5B58\u672C\u6B21\u963B\u65AD\u539F\u56E0",X+15,T,11,Rt,650)}function V(P,X,W,xe,Re){let ve=P.provider,_e=P.policy,U=Math.min(h-W*2,412),O=h<760?13:15,j=!!_e&&Re>=.4,Ee=P.label==="\u6743\u9650\u62D2\u7EDD"?"\u6743\u9650\u68C0\u67E5":"\u989D\u5EA6\u68C0\u67E5",J=ve?"\u7EDF\u4E00\u63A5\u5165 \xB7 "+P.label:"\u6743\u9650\u4E0E\u989D\u5EA6 \xB7 "+(j?P.label:Ee),ke=(ve?[["\u7814\u53D1\u52A9\u624B  \u2192  \u540C\u4E00\u7F51\u5173\u5165\u53E3",Ct],[ve.vendor+" \xB7 "+ve.model+" / "+ve.task,Jt],[X,Rt]]:[["\u7814\u53D1\u90E8 \xB7 \u7814\u53D1\u52A9\u624B / \u5BC6\u94A5\u522B\u540D DEV-DEMO",Ct],[j?"\u6A21\u578B B \u6743\u9650\uFF1A"+_e.permission+" / \u989D\u5EA6\uFF1A"+_e.quota:"\u8BF7\u6C42\u6A21\u578B B\uFF0C\u6B63\u5728\u68C0\u67E5\u6388\u6743\u4E0E\u989D\u5EA6\u3002",j?Yn:Rt],[j?X:"",Rt],[j?"\u5DF2\u62D2\u7EDD \xB7 \u672A\u8C03\u7528\u4E0A\u6E38\u6A21\u578B":"",Yn]]).flatMap(([Ce,ye])=>E(Ce,U-28,O).map(Ie=>[Ie,ye])),T=44+ke.length*19,Oe=xe-T-12;w(W,Oe,U,T),S(W,Oe,U,T,10,"#092734fa","#49747f"),m(J+" \xB7 \u793A\u610F",W+14,Oe+11,11,Jt,700);for(let[Ce,[ye,Ie]]of ke.entries())m(ye,W+14,Oe+33+Ce*19,O,Ie,650)}function Y(P,X,W,xe,Re){let ve=Math.min(h-P*2,580),_e=W?2:3,U=6/_e,O=6,j=31,Ee=(ve-24-O*(_e-1))/_e,J=X-54-U*(j+O);w(P,J,ve,X-J-11),S(P,J,ve,X-J-11,10,"#092734fa","#49747f"),m("\u516D\u9879\u7F51\u5173\u80FD\u529B",P+12,J+12,14,Ct,720),m("\u9009\u62E9\u4E00\u9879\u56DE\u770B",P+ve-90,J+14,11,Rt,550);for(let[le,ke]of _r.entries())A("capability-"+ke.id,ke.label,P+12+le%_e*(Ee+O),J+36+Math.floor(le/_e)*(j+O),Ee,j,()=>Re.reviewCapability(ke.id),{compact:!0,focus:xe})}function Q(P,X,W,xe,Re,ve){let _e=h-2*P,U=W?4:6,O=W?(_e-U*2)/3:Math.min(142,(_e-5*U)/6),j=O*3+U*2,Ee=Re?.provider&&["main","backup"].includes(ve?.id)?Re.provider.channel:ve?.id==="primary"||ve?.id==="timeout"?"main":ve?.id==="resources"?"tools":Re?.zone==="entry"?"entry":ve?.id;S(0,X,h,W?57:34,0,"#0a2531f2");for(let[J,[le,ke]]of qn.entries()){let T=xe&&{main:"\u4F9B\u5E94\u5546 A \xB7 \u6A21\u578B A",backup:"\u4F9B\u5E94\u5546 B \xB7 \u6A21\u578B B"}[le]||ke,Oe=J%3,Ce=J>=3,ye=P+(Ce&&!W?_e-j:0)+Oe*(O+U),Ie=X+6+(Ce&&W?25:0),Ye=le===Ee;S(ye,Ie,O,22,5,Ye?"#24514f":"#112f3b",Ye?"#78cabc":"#345963");let be=Math.min(W?11:12,(O-10)/p(T,1,650));m(T,ye+(O-p(T,be,650))/2,Ie+Math.max(4,(22-be)/2-1),be,Ye?Ct:Rt,650)}}function ie(P,X,W,xe){let Re=h<350,ve=W?Re?57:67:113,_e=W?34:X<65?42:49,U=(X-_e)/2;S(P,U,ve,_e,6,"#f3f7f6","#c3d5d8");let O=ve-(W?12:17),j=O*41.3/115;e.naturalWidth?n.drawImage(e,P+(ve-O)/2,(X-j)/2,O,j):m("\u5C71\u77F3\u7F51\u79D1",P+(ve-p("\u5C71\u77F3\u7F51\u79D1",11,750))/2,X/2-6,11,"#003285",750);let Ee=P+ve+(W?Re?6:8:15);n.fillStyle="#41626b",n.fillRect(Ee,X/2-14,1,28);let J=Ee+(W?Re?6:8:15);ua(n,J,X/2-(W?7:9),W?14:21,{color:Ct,accent:Jt,maxWidth:xe-J}),m("eToken Manager",J,X/2+(W?3:7),W?9:11,Rt,620)}function te({state:P,story:X,step:W,shot:xe,cue:Re,receipt:ve,scenarios:_e,projection:U,actions:O,focus:j,loaded:Ee}){let J=h<760,le=J?17:Math.max(28,Math.min(52,h*.037)),ke=h-le*2;n.clearRect(0,0,h,d),f=[],g=[];let T=!P.active,Oe=d<535,Ce=P.comparison?69:51,ye=d-Ce-(Oe?8:le*.55),Ie=J?57:Oe?58:75,Ye=P.active,be=Ie+(Ye?J?57:34:0);S(0,0,h,Ie,0,"#071d29e8"),R(le,Ie,ke);let We=J&&!T&&!P.picker?h-le-99:J?h-le:h/2-104;ie(le,Ie,J,We),Ye&&Q(le,Ie,J,P.scenario==="providers",W,xe);let je=P.finished&&P.scenario==="tour",Qe=P.finished&&P.scenario==="quick",b=P.active&&W.chapter==="overview"&&!Qe,_=P.active?kl(W,P.progress):null,H=P.comparison?"\u5B89\u5168\u5BF9\u7167 \xB7 \u540C\u4E00\u673A\u4F4D":P.scenario==="quick"&&P.active?"20 \u79D2\u80FD\u529B\u901F\u89C8":je?"\u80FD\u529B\u56DE\u770B":P.active?W.chapter==="overview"?"\u80FD\u529B\u5168\u666F":"\u4E1A\u52A1\u573A\u666F":"\u4F01\u4E1A\u7EA7 Token \u8FD0\u8425\u5E73\u53F0";J||m(H,(h-p(H,13))/2,Ie/2-6,13,Rt,650),J&&P.active&&m(H,le,be+12,11,Jt,650),!T&&!P.picker&&A("overview",P.revisit?P.scenario==="quick"?"\u8FD4\u56DE\u80FD\u529B\u5168\u666F":"\u8FD4\u56DE\u56DE\u6267":je?"\u8FD4\u56DE\u9996\u9875":"\u8FD4\u56DE\u5168\u666F",h-le-91,J?16:23,91,31,P.revisit?O.backToReceipt:O.reset,{compact:!0,focus:j});let ne=J?ke:Math.min(348,h*.285),re=J?72:Oe?74:Math.max(102,d*.162)+(T&&d>=620?Math.min(34,d*.036):0),K=n.createLinearGradient(0,0,ne+le+65,0);if(K.addColorStop(0,"#071d29"),K.addColorStop(.68,"#071d29ed"),K.addColorStop(1,"#071d2900"),!J&&(T||W.zone==="ops"&&!P.playing&&!Qe)&&(n.fillStyle=K,n.fillRect(0,be+1,ne+le+65,ye-be-1)),T){if(S(le,re+4,19,1,0,"#7ed7c5"),m("\u6A21\u578B\u63A5\u5165 \xB7 \u5B89\u5168\u6CBB\u7406 \xB7 Token \u8FD0\u8425",le+27,re,11,Jt,650),J)m("\u6D77\u4E0A AI \u4E2D\u592E\u67A2\u7EBD",le,re+20,Math.min(34,ke/10),Ct,720);else{let ae=Math.min(70,ne*.192,d*(Oe?.068:.09));m("\u6D77\u4E0A AI",le,re+24,ae,Ct,730),m("\u4E2D\u592E\u67A2\u7EBD",le,re+25+ae,ae,"#a6e0d4",730)}let oe=re+(J?66:34+Math.min(70,ne*.192,d*(Oe?.068:.09))*2),Me=C(J?"\u8BA9\u4F01\u4E1A\u5E94\u7528\u4ECE\u540C\u4E00\u4E2A\u5165\u53E3\uFF0C\u8C03\u7528\u83B7\u51C6\u7684\u6A21\u578B\u548C\u5DE5\u5177\u3002":"\u4F01\u4E1A\u5E94\u7528\u4ECE\u8FD9\u91CC\u63A5\u5165\u6A21\u578B\u548C\u5DE5\u5177\u3002\u6BCF\u6B21\u8C03\u7528\u7684\u6743\u9650\u3001\u98CE\u9669\u548C\u7528\u91CF\uFF0C\u90FD\u80FD\u5728\u540C\u4E00\u4E2A\u7F51\u5173\u7BA1\u7406\u3002",le,oe,ne,J?12:15,J||Oe?18:25,Rt)+(J||Oe?7:18),fe=J||Oe?35:42;w(le,re,J?ke:Math.max(ne,242),Me+fe-re),A("start","\u5F00\u59CB\u4E3B\u5BFC\u89C8  \u2192",le,Me,126,fe,O.start,{primary:!0,compact:J,focus:j}),A("choose","\u9009\u770B\u573A\u666F",le+136,Me,106,fe,O.choose,{compact:J,focus:j})}else if(W.zone==="ops"&&W.chapter!=="overview"&&!P.playing){let oe=J?ke:Math.min(414,h*.32),ee=J?be+34:Math.max(be+12,Math.min(re,d*.14)),Me=Oe?17:25,fe=je&&P.receiptOpen?Bl.find(ue=>ue.id===P.record):null,ae=je&&(!fe||fe.id===di.id)||P.scenario==="failover",he=P.receiptOpen&&ae&&P.billingOpen,De=he?di.rows:fe?[["\u8BF7\u6C42\u7F16\u53F7",fe.id],...fe.fields]:ve.rows,Le=je&&P.receiptOpen?36:0,Te=(Oe?100:118)+(P.receiptOpen?Me*De.length+Le:0)+(he?42:0);w(le,ee,oe,Te),S(le,ee,oe,Te,10,"#0a2938fa","#4a7580"),m("\u5BA1\u8BA1\u56DE\u6267 \xB7 \u793A\u610F\u6570\u636E",le+13,ee+13,11,Jt,700),C(he?"\u8D26\u5355\u5BF9\u7167 \xB7 "+di.id:fe?fe.result:ve.summary,le+13,ee+32,oe-26,J?17:19,24,Ct,740);let ze=ee+(Oe?61:67),D=ae&&P.receiptOpen?Math.min(105,(oe-40)/3):105;if(A("receipt",P.receiptOpen?"\u6536\u8D77\u660E\u7EC6 \u2191":"\u5C55\u5F00\u660E\u7EC6 \u2193",le+13,ze,D,28,O.receipt,{compact:!0,focus:j}),P.receiptOpen){if(P.finished&&(!je||fe)&&!["providers","policy"].includes(P.scenario)&&A("replay-record","\u56DE\u770B\u73B0\u573A \u2192",le+20+D,ze,D,28,O.replayRecord,{compact:!0,focus:j}),ae){let Se=je&&!fe?le+20+D:le+27+D*2;A("billing",he?"\u8FD4\u56DE\u8C03\u7528":"\u8D26\u5355\u5BF9\u7167",Se,ze,D,28,O.billing,{compact:!0,selected:he,focus:j})}let ue=ee+(Oe?96:108);if(je){let Se=[{id:null,name:"\u6C47\u603B"},...Bl],Fe=(oe-35)/Se.length;for(let[de,$]of Se.entries())A("record-"+($.id||"all"),$.name,le+13+de*(Fe+3),ue,Fe,27,()=>O.record($.id),{compact:!0,selected:P.record===$.id,focus:j});ue+=Le}for(let[Se,[Fe,de]]of De.entries()){let $=ue+Se*Me;R(le+13,$,oe-26),m(Fe,le+13,$+4,Oe?9:11,Rt);let Be=he?108:77,qe=p(de,11,650)>oe-Be-14?9:11;m(de,le+Be,$+4,qe,Ct,650)}he&&C(di.explanation,le+13,ue+Me*De.length+4,oe-26,10,15,Rt,600)}}else if(Qe)Y(le,ye,J,j,O);else if(W.provider||W.policy)V(W,Re,le,ye,P.progress);else if(_)L(_,le,ye,J,Oe);else if(Re||b){if(b){let oe=String(W.number).padStart(2,"0")+" / 06   "+W.label,ee=J?15:17,Me=be+(J?29:17);w(le,Me,p(oe,ee,700)+26,34),S(le,Me,p(oe,ee,700)+26,34,7,"#092734ed","#416975"),m(oe,le+13,Me+8,ee,Jt,700)}if(W.id==="operations"&&!W.brief){let oe=Math.min(333,ke),ee=le,Me=be+72,fe=P.progress>=.54;if(w(ee,Me,oe,fe?119:133),S(ee,Me,oe,fe?119:133,9,"#0a2938f5","#416975"),m(fe?"\u7814\u53D1\u90E8 / DEMO-042 \xB7 \u8C03\u7528\u793A\u610F":"\u54EA\u4E2A\u90E8\u95E8\u7528\u91CF\u6700\u9AD8\uFF1F \xB7 \u793A\u610F",ee+13,Me+12,12,Jt,700),fe)for(let[ae,[he,De]]of[...di.channels,["\u7528\u91CF\u4E0E\u8D39\u7528","1,240 Token  /  \xA50.012"]].entries()){let Le=Me+38+ae*22;m(he,ee+13,Le,11,Rt),m(De,ee+87,Le,11,Ct,650)}else for(let[ae,he]of Xh.entries()){let De=Me+41+ae*25;m(he.name,ee+13,De,11,Rt),S(ee+62,De+4,(oe-171)*he.ratio*Math.min(1,P.progress*4),4,2,ae===0?Jt:"#638fa1"),m(he.tokens+"  /  "+he.cost,ee+oe-102,De,11,Ct,650)}}if(Re){let oe=J||Oe?15:19,ee=J||Oe?21:27,Me=Math.min(ke,610),fe=Math.min(Me-28,p(Re,oe,650)+2),ae=E(Re,fe,oe),he=ae.length*ee+20,De=ye-he-14,Le=xe?.id==="timeout"||xe?.id==="scan"&&W.tone==="risk"?Yn:Ct;w(le,De,fe+28,he),S(le,De,fe+28,he,8,"#092734f5","#436b73");for(let[Te,ze]of ae.entries())m(ze,le+14,De+10+Te*ee,oe,Le,650)}}if(Ee){if(je&&!P.receiptOpen&&!P.picker){let oe=[["recapEntry","\u5165\u53E3","entry"],["recapPolicy","\u6CBB\u7406\u901A\u9053","policy"],["recapOps","\u8FD0\u8425\u5C42","ops"]];for(let[ee,Me,fe]of oe){let ae=U(ee);ae.y<be+48||ae.y>ye-12||N(ee,Me,ae.x,ae.y,()=>O.revisit(fe),!0,j)}}if(b&&!P.picker){let oe=U("module-"+W.zone);oe.x>8&&oe.x<h-8&&oe.y>be+88&&oe.y<ye-68&&N("module",W.label,oe.x,oe.y,null,!0,j)}if(b&&!W.brief&&W.id==="policy"&&P.progress>=.49){let oe=U("policy-denied");N("denied","\u672A\u83B7\u5DE5\u5177\u6388\u6743",oe.x,oe.y,null,!0,j)}if(b&&!W.brief&&W.id==="resources"&&P.progress>=.55){let oe=U("skill");N("skill",P.progress>.83?"\u5BA1\u6838\u901A\u8FC7 \xB7 \u5DF2\u53D1\u5E03":"Skill \u5BA1\u6838\u4E2D",oe.x,oe.y,null,!0,j)}}else m("\u6B64\u6D4F\u89C8\u5668\u65E0\u6CD5\u542F\u52A8 WebGL 2\uFF0C\u53EF\u7EE7\u7EED\u9605\u8BFB\u4E0B\u65B9\u6F14\u793A\u3002",le,Math.max(be+220,ye-25),12,Yn);if(T&&!P.picker&&M(le,J),P.picker){f=[],S(0,be,h,d-be,0,"#061a25b8");let oe=Math.min(520,ke),ee=(h-oe)/2,Me=[["quick","20 \u79D2\u80FD\u529B\u901F\u89C8"],["comparison","\u5B89\u5168\u5BF9\u7167"],...Object.entries(_e)],fe=Oe?40:51,ae=Oe?34:43,he=60+Math.ceil(Me.length/2)*fe,De=Math.max(be+8,(d-he)/2);w(ee,De,oe,he),S(ee,De,oe,he,12,"#092734","#49747f"),m("\u9009\u770B\u573A\u666F",ee+17,De+18,20,Ct,750),A("close-picker","\u5173\u95ED",ee+oe-64,De+14,48,30,O.closePicker,{compact:!0,focus:j});let Le=8,Te=(oe-34-Le)/2;for(let[ze,[D,ue]]of Me.entries())A("scenario-"+D,ue,ee+17+ze%2*(Te+Le),De+54+Math.floor(ze/2)*fe,Te,ae,()=>O.scenario(D),{focus:j,primary:D==="quick"})}else if(!T){S(le,ye,ke,Ce,12,"#092734f4","#305663");let oe=J?10:17,ee=le+oe,Me=ke-oe*2;if(P.comparison){m("\u540C\u4E00\u4E2A\u68C0\u67E5\u8231 \xB7 \u5207\u6362\u8BF7\u6C42\u67E5\u770B\u539F\u56E0",ee,ye+9,11,Rt,600),A("play",P.finished?"\u91CD\u64AD":P.playing?"\u6682\u505C":"\u7EE7\u7EED",ee+Me-48,ye+4,48,21,O.play,{compact:!0,focus:j});let fe=(Me-18)/4;for(let[ae,[he,De]]of Object.entries(xa).entries())A("compare-"+he,De,ee+ae*(fe+6),ye+29,fe,30,()=>O.compare(he),{selected:P.comparison===he,compact:!0,focus:j})}else if(P.finished)A("play","\u91CD\u64AD",ee,ye+9,62,31,O.replay,{compact:!0,focus:j}),A("choose","\u9009\u770B\u573A\u666F",ee+71,ye+9,88,31,O.choose,{compact:!0,focus:j}),je&&!P.receiptOpen&&m("\u70B9\u51FB\u573A\u666F\u6807\u6CE8\u56DE\u770B",ee+170,ye+19,11,Rt,550);else{A("play",P.playing?"\u6682\u505C":"\u7EE7\u7EED",ee,ye+9,62,31,O.play,{compact:!0,focus:j});let fe=ee+76,ae=Me-76,he=X.reduce((Le,Te)=>Le+Te.duration,0),De=0;for(let[Le,Te]of X.entries()){let ze=fe+ae*De/he,D=ae*Te.duration/he-4;R(ze,ye+24,D,"#345a66");let ue=Le<P.index?1:Le===P.index?P.progress:0;ue>0&&R(ze,ye+24,D*ue,Jt),De+=Te.duration}}}Ee&&T&&y(U,be+6,d-8,J,!1),c=Ee&&P.active&&!P.picker?{projection:U,top:be+(J?22:5),bottom:ye-8,providers:P.scenario==="providers"}:null,s.needsUpdate=!0}function ge(P){l.update(c?.projection,h,d,c?.top,c?.bottom,c?.providers,P),i.clearDepth(),i.render(r,o)}function Z(P,X){return[...f].reverse().find(W=>P>=W.x&&P<=W.x+W.width&&X>=W.y&&X<=W.y+W.height)}return{resize:v,render:te,draw:ge,hit:Z,hasStationPlates:()=>l.mesh.visible,buttons:()=>f}}var wt=document.getElementById("harbor"),zl=matchMedia("(prefers-reduced-motion: reduce)"),Vl=new Image,Pn,In;try{Pn=$h(wt),In=eu(Pn.renderer,Vl)}catch(i){let e=document.createElement("p");e.style.padding="24px",e.textContent="\u6B64\u6D4F\u89C8\u5668\u65E0\u6CD5\u542F\u52A8 WebGL 2\u3002\u8BF7\u542F\u7528\u56FE\u5F62\u52A0\u901F\uFF0C\u6216\u7528\u5176\u4ED6\u652F\u6301 WebGL 2 \u7684\u6D4F\u89C8\u5668\u6253\u5F00\u3002",wt.replaceWith(e),console.warn(i)}Pn&&In&&Xg();function Xg(){let i={scenario:"tour",index:0,progress:0,active:!1,playing:!1,finished:!1,receiptOpen:!1,billingOpen:!1,record:null,picker:!1,revisit:null,comparison:null,zone:null},e=$n(i.scenario),t=0,n=0,s=0,r=!0,o=0,a=null,l=null,c,h=0,d=null,u=0,f=[],g={reset(){Object.assign(i,{index:0,progress:0,active:!1,playing:!1,finished:!1,receiptOpen:!1,billingOpen:!1,record:null,picker:!1,revisit:null,comparison:null,zone:null}),Pn.reset(),o=.6,R()},start(){i.scenario="tour",e=$n("tour"),p(0,!0)},choose(){i.picker=!0,R()},closePicker(){i.picker=!1,R()},replay(){i.comparison?g.compare(i.comparison):m(i.scenario)},receipt(){i.receiptOpen=!i.receiptOpen,i.billingOpen=!1,R()},record(w){i.record=w,i.billingOpen=!1,R()},billing(){i.scenario==="tour"&&!i.record&&(i.record=di.id),i.billingOpen=!i.billingOpen,R()},compare(w){let y=i.scenario!=="comparison";i.scenario="comparison",i.comparison=w,e=[$l(w)],y&&Pn.reset(),p(0,!0)},revisit(w){let y={entry:[0,0],policy:[1,4],ops:[5,5]}[w];!y||i.scenario!=="tour"||!i.finished||v(y[0],y[1])},reviewCapability(w){if(i.scenario!=="quick"||!i.finished)return;let y=e.findIndex(M=>M.id===w);y>=0&&v(y,y)},replayRecord(){let w=Kl(e,i.scenario,i.record);i.finished&&i.receiptOpen&&w>=0&&v(w,w)},backToReceipt(){if(!i.revisit)return;let{receiptOpen:w,billingOpen:y,record:M}=i.revisit;i.revisit=null,p(e.length-1,!1),Object.assign(i,{finished:!0,receiptOpen:w,billingOpen:y,record:M}),R()},play(){if(i.playing){i.playing=!1,R();return}if(i.finished){g.replay();return}if(i.progress>=1){p(i.index,!0);return}i.playing=!0,R()},scenario:m};function v(w,y){i.revisit={until:y,receiptOpen:i.receiptOpen,billingOpen:i.billingOpen,record:i.record},p(w,!0)}function m(w){if(w==="comparison"){g.compare("normal");return}i.comparison=null,i.revisit=null,i.scenario=w,e=$n(w);let y={failover:"\u6545\u969C\u5207\u6362",sensitive:"\u5B89\u5168\u62E6\u622A",injection:"\u6CE8\u5165\u62E6\u622A",quota:"\u989D\u5EA6\u62D2\u7EDD"}[w];p(Math.max(0,e.findIndex(M=>M.label===y)),!0)}function p(w,y){Object.assign(i,{index:w,playing:y,progress:y?0:1,active:!0,finished:!1,receiptOpen:!1,billingOpen:!1,record:null,picker:!1,zone:e[w].zone}),R()}function C(){!t&&!document.hidden&&(t=requestAnimationFrame(N))}function E(){u&&(clearTimeout(u),u=0)}function S(){!u&&!document.hidden&&(u=setTimeout(()=>{u=0,C()},62))}function R(){r=!0,E(),C()}Vl.addEventListener("load",R,{once:!0}),Vl.src="./hillstone-logo.svg";function A(){let w=wt.clientWidth,y=wt.clientHeight;!w||!y||(Pn.resize(w,y),In.resize(w,y),R())}function N(w){if(t=0,document.hidden)return;let y=n?(w-n)/1e3:0,M=i.playing||o>0?wt.clientWidth<760?1/30:1/40:1/18;if(!r&&n&&y<M*.94){C();return}n=w;let L=Math.min(.1,y),V=zl.matches;V||(s+=L),i.playing&&(i.progress=Math.min(1,i.progress+L/e[i.index].duration),i.progress>=1&&(i.revisit&&i.index>=i.revisit.until?g.backToReceipt():i.index+1<e.length?p(i.index+1,!0):(i.finished=!0,i.playing=!1,o=.75,r=!0)));let Y=e[i.index],Q=i.finished&&["tour","quick"].includes(i.scenario);c=Pn.draw({time:s,dt:L,step:i.active?Y:null,progress:i.progress,scenario:i.scenario,zone:i.zone,reduced:V,recap:Q,comparison:!!i.comparison});let ie=i.active?c.shot:null,te=ie?ie.id+c.cue:null;(r||te!==d||(o>0||c.cameraMoving||i.playing)&&w-h>=(wt.clientWidth<760?160:125))&&(In.render({state:i,story:e,step:Y,shot:ie,cue:c.cue,receipt:jl(i.scenario),scenarios:ql,projection:Pn.project,actions:g,focus:a,loaded:!0}),r=!1,h=w,d=te,f=In.buttons().map(({id:ge,x:Z,y:P,width:X,height:W})=>({id:ge,x:Z,y:P,width:X,height:W}))),c.receiptOpen=i.receiptOpen,c.billingOpen=i.billingOpen,c.record=i.record,c.revisit=!!i.revisit,c.finished=i.finished,c.controls=f,c.comparison=i.comparison,c.scenario=i.scenario,In.draw(L),In.hasStationPlates()&&c.calls++,o=Math.max(0,o-L),i.playing||o>0||c.cameraMoving?C():!V&&!i.finished&&!i.picker&&!i.active?S():n=0}wt.addEventListener("pointerdown",w=>{!w.isPrimary||w.button!==0||(wt.focus({preventScroll:!0}),l={id:w.pointerId,x:w.clientX,y:w.clientY,last:w.clientX,drag:!1},wt.setPointerCapture(w.pointerId))}),wt.addEventListener("pointermove",w=>{if(!l){wt.style.cursor=In.hit(w.clientX,w.clientY)?"pointer":"grab";return}l.id===w.pointerId&&(Math.hypot(w.clientX-l.x,w.clientY-l.y)>7&&(l.drag=!0),l.drag&&!i.comparison&&(Pn.rotate((w.clientX-l.last)*.004),o=zl.matches?0:.48,R(),wt.style.cursor="grabbing"),l.last=w.clientX)}),wt.addEventListener("pointerup",w=>{if(l?.id===w.pointerId){if(!l.drag){let y=In.hit(w.clientX,w.clientY);a=null,y?.action()}l=null,wt.style.cursor="grab"}}),wt.addEventListener("pointercancel",()=>{l=null,wt.style.cursor="grab"}),wt.addEventListener("keydown",w=>{let y=In.buttons();if(w.key==="Escape")w.preventDefault(),a=null,i.picker?g.closePicker():i.revisit?g.backToReceipt():g.reset();else if(w.key==="Tab"&&y.length){let M=y.findIndex(V=>V.id===a);if(M===y.length-1&&!w.shiftKey||M===0&&w.shiftKey){a=null,R();return}w.preventDefault();let L=M<0?w.shiftKey?y.length-1:0:M+(w.shiftKey?-1:1);a=y[L].id,R(),wt.setAttribute("aria-label",y[L].label+"\u3002\u6309 Enter \u64CD\u4F5C\u3002")}else if(w.key==="Enter"||w.key===" "){let M=y.find(L=>L.id===a);M&&(w.preventDefault(),M.action())}else if(w.key==="ArrowLeft"||w.key==="ArrowRight"){if(i.comparison)return;w.preventDefault(),Pn.rotate(w.key==="ArrowRight"?.09:-.09),o=.48,R()}}),wt.addEventListener("blur",()=>{a=null,R()}),new ResizeObserver(A).observe(wt),document.addEventListener("visibilitychange",()=>{n=0,E(),document.hidden&&t?(cancelAnimationFrame(t),t=0):R()}),zl.addEventListener("change",R),A(),location.hostname==="127.0.0.1"&&Object.defineProperty(window,"harborMetrics",{get:()=>c})}
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
