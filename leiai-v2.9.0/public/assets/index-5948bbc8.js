import{d as q,u as G,b7 as se,y as Q,e as h,r as b,f as te,o as a,c as d,a as e,F as z,l as F,A as v,j as s,v as T,t as $,bf as me,b as oe,w as ne,i as c,k as I,_ as N,q as j,s as be,E as O,b_ as ge,bc as ye,af as we,b$ as ke,W as Ce,c0 as Ae,aw as $e,M as Ie,H as le,z as Se,aq as je,n as Me,bg as Be,ay as Re}from"./index-f164dacb.js";import{u as Ne}from"./useScroll-9b17c2c5.js";import{c as Te}from"./index-c94da121.js";const Le=["onClick"],Pe=["src"],ae=q({__name:"index",setup(L){const w=G(),k=se(),{isMobile:r}=Q(),f=h(()=>{var p;return Number((p=w.globalConfig)==null?void 0:p.isShowAppCatIcon)===1}),g=b([]),m=b(0);async function i(){var o;const p=await me(),R={id:0,name:"全部分类"};g.value=[R,...(o=p==null?void 0:p.data)==null?void 0:o.rows]}function C(p){m.value=p,k.setCatId(p)}te(()=>{i()});const M=h(()=>r.value?["w-full flex "]:["w-[230px]"]);return(p,R)=>(a(),d("div",{class:v(["h-full",s(M)])},[e("div",{class:v(["app-sidebar bg-[#f8f8f8] w-full h-full overflow-x-scroll dark:bg-[#18181c]",[s(r)?" py-2 p-2 flex scrollbar-w-1":"p-4 overflow-y-scroll"]])},[(a(!0),d(z,null,F(g.value,(o,u)=>(a(),d("div",{key:o.id,class:v(["dark:bg-[#101014] dark:border-neutral-800 relative flex flex-row items-center gap-3 break-all border rounded-md cursor-pointer break-all text-ellipsis whitespace-nowrap select-none",[m.value===o.id?"bg-[#5a91fc] dark:bg-[#34373c] text-[#fff] font-bold":"bg-[#fff] hover:bg-neutral-100 dark:hover:bg-[#24272e]",s(r)?"px-4 py-1 mr-2":" px-3 py-2 mb-2 ",!s(r)&&s(f)?"pl-14":"justify-center"]]),onClick:_=>C(o.id)},[!s(r)&&s(f)?(a(),d("img",{key:0,class:v([u>0?"w-7 rounded-md mr-3":""]),src:o.coverImg,alt:""},null,10,Pe)):T("",!0),e("span",null,$(o.name),1)],10,Le))),128))],2)],2))}});const Oe={class:"p-4"},ze={class:"grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6"},qe=["onClick"],De={class:"w-full h-16 flex items-center"},Ve={class:"w-14 h-14 flex justify-center items-center rounded-md shadow-md mr-5 border border-[#00000014]"},Fe=["src"],Qe={class:"text-base font-bold mb-1 text-base text-[#333] dark:text-[#ffffff85]"},Ee={class:"w-full mb-1 text-[#999999] text-xs py-2"},Je={class:"w-full flex justify-between"},Ue=q({__name:"index",emits:["run-app"],setup(L,{emit:w}){const k=oe(),r=se(),f=h(()=>r.catId),g=b([]),m=b([]),i=h(()=>r.mineApps);function C(o){return i.value.some(u=>u.appId===o.id)}async function M(){var u;const o=await ge();g.value=(u=o==null?void 0:o.data)==null?void 0:u.rows.map(_=>(_.loading=!1,_)),m.value=g.value}async function p(o){o.loading=!0;try{const u=await ye({appId:o.id});k.success(u.data),await r.queryMineApps(),o.loading=!1}catch{o.loading=!1}}function R(o){w("run-app",o)}return ne(f,o=>{o?m.value=g.value.filter(u=>u.catId===o):m.value=g.value}),te(()=>{M()}),(o,u)=>(a(),d("div",Oe,[e("div",ze,[(a(!0),d(z,null,F(m.value,_=>(a(),d("div",{key:_.id,class:"custom-card cursor-pointer border border-[#e0e0e0] dark:border-neutral-800 p-4 pt-2 border rounded-md flex flex-col justify-center items-center hover:bg-neutral-100 dark:hover:bg-[#24272e] select-none",onClick:E=>R(_)},[e("div",De,[e("span",Ve,[e("img",{src:_.coverImg,class:"w-8 h-8 mb-1",alt:""},null,8,Fe)]),e("span",Qe,$(_.name),1)]),e("p",Ee,$(_.des),1),e("div",Je,[c(s(O),{size:"tiny",ghost:"",disabled:_.loading,onClick:be(E=>p(_),["stop"])},{icon:I(()=>[c(s(N),{icon:C(_)?"iconamoon:sign-minus-bold":"mi:add",class:"text-base"},null,8,["icon"])]),default:I(()=>[j(" "+$(C(_)?"取消收藏":"加入个人工作台"),1)]),_:2},1032,["disabled","onClick"]),c(s(N),{icon:"codicon:run-all",class:"run-icon text-xl text-[#5A91FC]"})])],8,qe))),128))])]))}});const He="/assets/empty-07715984.png",We={class:"ground-left-input select-none"},Ge={class:"ground-left-tips flex justify-between px-3 py-2"},Ke={class:"text-[#999] text-xs flex items-center"},Xe={class:"text-base"},Ye=e("b",{class:"font-bold"},"剩余额度:",-1),Ze={class:"ml-2 font-bold text-[#5a91fc] cursor-pointer",style:{"text-decoration":"underline"}},es=e("div",{class:"text-[#999] text-sm whitespace-nowrap"}," 每次创作消耗1额度、每次创作会产生新的内容！ ",-1),ss=e("span",{class:"text-base whitespace-nowrap"},"立即创作",-1),ts=e("span",{class:"text-xs whitespace-nowrap"},"消耗1次额度",-1),os=[ss,ts],ns={class:"flex-1 mt-4flex flex-col mt-6"},ls=e("span",{class:"font-bold text-[#5a91fc] mb-3"},"示例需求",-1),as=["onClick"],rs=e("span",{class:"circle mr-4"},null,-1),cs={class:"flex-1 select-none text-left"},ds={class:"ground-right-header p-2 flex justify-between items-center"},is={class:"flex items-center px-3 pt-2"},us={class:"w-10 h-10 flex justify-center items-center rounded-md shadow-md mr-5 border border-[#00000014]"},fs=["src"],ps={class:"text-base font-bold"},_s={class:"flex p-4 bg-[#f6fcfa] rounded-md dark:bg-[#18181c] max-h-[120px] overflow-hidden"},vs=["src"],xs={class:"flex p-4 border-b-2 border-dotted border-gray-200 dark:border-[#ffffff17] min-h-[80px]"},hs=["src"],ms={style:{"white-space":"pre-wrap"}},bs={class:"px-4 py-2 flex justify-end"},gs={key:1,class:"flex-1 px-5 py-4 overflow-y-scroll flex flex-col justify-center items-center"},ys=["src"],ws=e("span",{class:"mt-5 text-[#999]"},"您还没有使用过这个应用呢、快来试试吧！",-1),ks=e("div",null,null,-1),Cs=q({__name:"index",props:{app:null},emits:["close"],setup(L,{emit:w}){const k=L,{scrollRef:r,scrollToBottom:f,scrollToBottomIfAtBottom:g,scrollToTop:m}=Ne(),{isMobile:i}=Q(),C=G(),M=h(()=>C.userInfo.avatar),p=h(()=>C.userBalance.sumModel3Count),R=oe(),o=b(1e7),u=b(null);b(null);const _=b(null),E=b(!1),S=b(""),A=b([]),K=b(""),B=h(()=>k.app),re=h(()=>{var n;const t=(n=B.value)==null?void 0:n.demoData;return t?t.split(`
`):[]}),J=h(()=>A.value.some(t=>t.loading)),U=h(()=>A.value.filter(t=>t.conversationOptions).map(t=>t.conversationOptions?JSON.parse(t.conversationOptions):{}));ne(B,t=>{var n;!t||J.value||((n=u.value)==null||n.focus(),t.coverImg&&(K.value=t.coverImg),ce())});async function ce(){var n,y;if(!((n=B.value)!=null&&n.id))return;const t=await Ae({appId:(y=B.value)==null?void 0:y.id});A.value=t.data.rows.map(l=>(l.loading=!1,l)).sort((l,x)=>l.id-x.id),m()}function de(){var n;const t=o.value;return A.value.push({id:t,loading:!0,appId:((n=B.value)==null?void 0:n.id)??0,prompt:S.value,answer:"思考中..."}),o.value=o.value+1,t}function H(t,n){const y=A.value.findIndex(l=>l.id===t);y!==-1&&(A.value[y]={...A.value[y],...n})}function ie(t){t&&(Te({text:t}),R.success("复制成功"))}function ue(t){R.warning("即将开放、请稍作等待！")}function fe(t){const{prompt:n}=t;n&&(S.value=n,W())}async function W(){var l;if((l=u.value)==null||l.focus(),!S.value||J.value)return;let t={model:3};U.value.length>0&&(t={...U.value[U.value.length-1],...t});const n=de();m();const y=S.value;S.value="";try{const x="";await(async()=>{await $e({prompt:y,appId:B.value.id,options:t,onDownloadProgress:({event:ve})=>{var Z;const xe=ve.target,{responseText:V}=xe,X=V.lastIndexOf(`
`,V.length-2);let Y=V;X!==-1&&(Y=V.substring(X));try{const P=JSON.parse(Y),ee=(Z=P==null?void 0:P.detail)==null?void 0:Z.userBanance;ee&&C.updateUserBanance(ee);const he=x+(P.text??"");H(n,{answer:he}),m()}catch{}}}),E.value=!1})()}catch(x){x!=null&&x.message&&H(n,{answer:x==null?void 0:x.message})}H(n,{loading:!1})}function pe(){w("close")}function _e(t){S.value=t,W()}return(t,n)=>{var y;return a(),d("div",{class:v(["w-full h-full ground flex justify-between",[s(i)?"flex-col":""]])},[e("div",{class:v(["ground-left flex flex-col h-full",[s(i)?"w-full":"w-6/12 border-[#0000000a] border-r dark:border-[#ffffff17]"]])},[e("div",We,[we(e("textarea",{ref_key:"inputRef",ref:u,"onUpdate:modelValue":n[0]||(n[0]=l=>S.value=l),class:"textarea dark:bg-[#18181c]",type:"textarea",placeholder:"请输入关键词和需求"},null,512),[[ke,S.value]]),e("div",Ge,[e("div",Ke,[c(s(N),{icon:"ph:info",class:"mr-1"}),j(" "+$(s(i)?"请合规使用！":"请您合法合规使用A功能，并自行核查生成内容，相关责任由您自行承拒。"),1)]),c(s(O),{ghost:"",text:"",size:"tiny",onClick:n[1]||(n[1]=l=>S.value="")},{icon:I(()=>[c(s(N),{icon:"carbon:delete"})]),default:I(()=>[j(" 清空内容 ")]),_:1})]),e("div",{class:v(["flex py-4 px-4 bg-[#10b9810a]",[s(i)?"flex-col":"flex-row justify-between"]])},[e("div",{class:v(["flex flex-col",[s(i)?"mb-3":"justify-between"]])},[e("div",Xe,[Ye,e("span",Ze,$(s(p))+"次",1)]),es],2),e("div",{class:v(["run-btn flex flex-col justify-center items-center rounded-md px-16 py-1 select-none",[s(J)?"cursor-not-allowed disabled":"cursor-pointer"]]),onClick:W},os,2)],2)]),e("div",ns,[ls,e("div",{class:v(["flex-1 overflow-y-scroll pl-2 pr-5 py-4",[s(i)?"":"h-[150px]"]])},[(a(!0),d(z,null,F(s(re),(l,x)=>(a(),d("div",{key:x,class:"border dark:border-[#ffffff17] px-3 py-1 rounded-md mb-2 flex justify-between items-center cursor-pointer transition hover:border-[#5a91fc] hover:text-[#5a91fc]",onClick:D=>_e(l)},[rs,e("div",cs,$(l),1),c(s(N),{class:"w-6 text-xl",icon:"material-symbols:tips-and-updates-outline"})],8,as))),128))],2)])],2),e("div",{class:v(["flex flex-col",[s(i)?"w-full":"w-6/12"]])},[e("div",ds,[e("div",is,[e("span",us,[e("img",{src:K.value,class:"w-6 h-6 mb-1",alt:""},null,8,fs)]),e("span",ps,$((y=s(B))==null?void 0:y.name),1)]),e("span",{class:"w-6 h-6 hover:bg-neutral-100 cursor-pointer flex justify-center items-center",onClick:pe},[c(s(N),{class:"text-xl",icon:"iconamoon:close-bold"})])]),A.value.length?(a(),d("div",{key:0,id:"scrollRef",ref_key:"scrollRef",ref:r,class:"flex-1 px-5 py-4 overflow-y-scroll"},[e("div",{ref_key:"playgroundTopRef",ref:_},null,512),(a(!0),d(z,null,F(A.value.slice().reverse(),(l,x)=>(a(),d("div",{key:l.id,class:v(["mb-8 border rounded-md dark:border-[#ffffff17]",[l.loading?"border-[#5a91fc]":""]])},[e("div",_s,[e("img",{src:s(M),class:"w-6 h-6 mr-3 rounded-full",alt:""},null,8,vs),e("div",null,$(l.prompt),1)]),e("div",xs,[e("img",{src:s(B).coverImg,class:"w-6 h-6 mr-3 rounded-full",alt:""},null,8,hs),e("div",ms,$(l.answer),1)]),e("div",bs,[c(s(Ce),null,{default:I(()=>[c(s(O),{size:"small",disabled:l.loading,onClick:D=>ue(l)},{default:I(()=>[j(" 智能续写 ")]),_:2},1032,["disabled","onClick"]),c(s(O),{size:"small",loading:l.loading,onClick:D=>fe(l)},{default:I(()=>[j(" 重新创作 ")]),_:2},1032,["loading","onClick"]),c(s(O),{size:"small",onClick:D=>ie(l.answer)},{default:I(()=>[j(" 复制文案 ")]),_:2},1032,["onClick"])]),_:2},1024)])],2))),128))],512)):T("",!0),A.value.length?T("",!0):(a(),d("div",gs,[e("img",{src:s(He),class:"w-24 h-24",alt:""},null,8,ys),ws])),ks],2)],2)}}});const As={key:0,class:"flex pl-5 h-full items-center space-x-2 overflow-hidden pr-2"},$s={class:"text-base text-[#999999]"},Is={class:"text-sm ml-2"},Ss=q({__name:"index",setup(L){const w=Ie(),{isMobile:k}=Q();return(r,f)=>(a(),d(z,null,[s(k)?T("",!0):(a(),d("div",As,[e("button",{onClick:f[0]||(f[0]=g=>s(w).go(-1))},[c(s(N),{class:"text-xl",icon:"arcticons:huawei-tips"})]),e("h2",$s,[j(" Tips: "),e("span",Is,[j("当前正在快速迭代中、有任何疑问请联系管理员处理解决、当前模式在此处直接使用应用、加入个人工作台的应用将会与对话窗口联动使用、您也可以前往 "),e("span",{class:"text-[#5a91fc] cursor-pointer",onClick:f[1]||(f[1]=g=>s(w).push("/role"))},"个人工作台"),j(" 创建您的自定义专属应用！ ")])])])),s(k)?(a(),le(ae,{key:1})):T("",!0)],64))}}),js={class:"h-full dark:bg-[#24272e] transition-all"},Ms={class:"h-12 header border-[#e1e1e1] dark:border-[#ffffff17] border-b-2"},Bs={key:0,class:"h-full"},Rs={class:"flex flex-col w-full"},Ps=q({__name:"index",setup(L){const w=Se();je();const k=G(),{isMobile:r}=Q();h(()=>k.isLogin),h(()=>w.siderCollapsed);const f=b({});function g(M){f.value=M}function m(){f.value={}}const i=h(()=>Object.keys(f.value).length>0),C=h(()=>r.value?["rounded-none","shadow-none"]:["rounded-md","shadow-md","dark:border-neutral-800"]);return(M,p)=>(a(),d("div",js,[e("div",{class:v(["h-full overflow-hidden flex flex-col",s(C)])},[e("div",Ms,[c(Ss)]),c(s(Re),{class:"transition flex-1 h-full w-full","has-sider":""},{default:I(()=>[s(r)?T("",!0):(a(),d("div",Bs,[c(ae)])),e("div",Rs,[e("div",{class:v(["playground",[s(i)?"mb-4  border-[#0000000a] dark:border-[#ffffff17]":"",s(r)?"":"border-b dark:border-[#ffffff17]"]]),style:Me({height:s(i)?s(r)?"100%":"530px":0})},[c(Cs,{app:f.value,onClose:m},null,8,["app"])],6),!s(r)||!s(i)?(a(),le(s(Be),{key:0,class:v([[s(i)?"border-t dark:border-[#ffffff17]":""],"w-full"])},{default:I(()=>[c(Ue,{onRunApp:g})]),_:1},8,["class"])):T("",!0)])]),_:1})],2)]))}});export{Ps as default};
