
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{_ as R}from"./index-b1f68172.js";import{a as c}from"./config-a1b4361b.js";import{d as h,R as I,r as b,x as k,o as S,c as D,e,f as l,a as p,k as Q,E as V,h as d,q as x}from"./index-18448298.js";const j={class:"flex justify-between"},B=p("b",null,"系统基础设置",-1),E=p("h5",null,"网站基础信息配置",-1),M=h({__name:"base",setup(O){const o=I({siteName:"",qqNumber:"",vxNumber:"",robotAvatar:"",userDefautlAvatar:"",filingNumber:"",companyName:"",buyCramiAddress:"",siteRobotName:"",isShowAppCatIcon:""}),N=b({siteName:[{required:!0,trigger:"blur",message:"请填写网站名称"}]}),i=b();async function f(){const s=await c.queryConfig({keys:["siteName","qqNumber","vxNumber","robotAvatar","userDefautlAvatar","buyCramiAddress","filingNumber","companyName","siteRobotName","isShowAppCatIcon"]});Object.assign(o,s.data)}function g(){var s;(s=i.value)==null||s.validate(async a=>{if(a){try{await c.setConfig({settings:v(o)}),V.success("变更配置信息成功")}catch{}f()}else V.error("请填写完整信息")})}function v(s){return Object.keys(s).map(a=>({configKey:a,configVal:s[a]}))}return k(()=>{f()}),(s,a)=>{const _=d("el-alert"),A=R,y=d("el-button"),m=d("el-input"),u=d("el-form-item"),n=d("el-col"),r=d("el-row"),C=d("el-switch"),w=d("el-tooltip"),q=d("el-form"),U=d("el-card");return S(),D("div",null,[e(A,null,{default:l(()=>[e(_,{closable:!1,"show-icon":"",title:"用户端基础配置说明",description:"网站类型设置是实时生效的、这里可以配置网站的logo名称等、购卡地址对应卡密购买、思维导图默认展示属于、机器人名称为对话页的默认AI Robot位置！",type:"success"})]),_:1}),e(U,{style:{margin:"20px"}},{header:l(()=>[p("div",j,[B,e(y,{class:"button",text:"",onClick:g},{default:l(()=>[Q(" 保存设置 ")]),_:1})])]),default:l(()=>[e(q,{ref_key:"formRef",ref:i,rules:N.value,model:o,"label-width":"150px"},{default:l(()=>[E,e(r,null,{default:l(()=>[e(n,{xs:24,md:20,lg:15,xl:12},{default:l(()=>[e(u,{label:"网站名称",prop:"siteName"},{default:l(()=>[e(m,{modelValue:o.siteName,"onUpdate:modelValue":a[0]||(a[0]=t=>o.siteName=t),placeholder:"网站名称【雷AI】",clearable:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(r,null,{default:l(()=>[e(n,{xs:24,md:20,lg:15,xl:12},{default:l(()=>[e(u,{label:"网站QQ客服",prop:"qqNumber"},{default:l(()=>[e(m,{modelValue:o.qqNumber,"onUpdate:modelValue":a[1]||(a[1]=t=>o.qqNumber=t),placeholder:"网站客服QQ号",clearable:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(r,null,{default:l(()=>[e(n,{xs:24,md:20,lg:15,xl:12},{default:l(()=>[e(u,{label:"网站VX客服",prop:"vxNumber"},{default:l(()=>[e(m,{modelValue:o.vxNumber,"onUpdate:modelValue":a[2]||(a[2]=t=>o.vxNumber=t),placeholder:"网站客服VX号",clearable:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(r,null,{default:l(()=>[e(n,{xs:24,md:20,lg:15,xl:12},{default:l(()=>[e(u,{label:"机器人头像",prop:"robotAvatar"},{default:l(()=>[e(m,{modelValue:o.robotAvatar,"onUpdate:modelValue":a[3]||(a[3]=t=>o.robotAvatar=t),placeholder:"填写机器人默认头像地址",clearable:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(r,null,{default:l(()=>[e(n,{xs:24,md:20,lg:15,xl:12},{default:l(()=>[e(u,{label:"用户默认头像",prop:"userDefautlAvatar"},{default:l(()=>[e(m,{modelValue:o.userDefautlAvatar,"onUpdate:modelValue":a[4]||(a[4]=t=>o.userDefautlAvatar=t),placeholder:"填写用户注册时默认头像头像地址",clearable:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(r,null,{default:l(()=>[e(n,{xs:24,md:20,lg:15,xl:12},{default:l(()=>[e(u,{label:"网站公司信息",prop:"companyName"},{default:l(()=>[e(m,{modelValue:o.companyName,"onUpdate:modelValue":a[5]||(a[5]=t=>o.companyName=t),placeholder:"填写网站备案信息的公司名称",clearable:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(r,null,{default:l(()=>[e(n,{xs:24,md:20,lg:15,xl:12},{default:l(()=>[e(u,{label:"网站备案号",prop:"filingNumber"},{default:l(()=>[e(m,{modelValue:o.filingNumber,"onUpdate:modelValue":a[6]||(a[6]=t=>o.filingNumber=t),placeholder:"填写网站备案信息的备案号",clearable:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(r,null,{default:l(()=>[e(n,{xs:24,md:20,lg:15,xl:12},{default:l(()=>[e(u,{label:"网站购卡地址",prop:"buyCramiAddress"},{default:l(()=>[e(m,{modelValue:o.buyCramiAddress,"onUpdate:modelValue":a[7]||(a[7]=t=>o.buyCramiAddress=t),placeholder:"您的网站发卡地址、用于配合卡密使用，用户点击购买卡密的跳转地址、不填写不展示购卡按钮！",clearable:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(r,null,{default:l(()=>[e(n,{xs:24,md:20,lg:15,xl:12},{default:l(()=>[e(u,{label:"机器人名称",prop:"siteRobotName"},{default:l(()=>[e(m,{modelValue:o.siteRobotName,"onUpdate:modelValue":a[8]||(a[8]=t=>o.siteRobotName=t),placeholder:"默认[Ai Robot]、首页默认展示状态下的名称",clearable:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(r,null,{default:l(()=>[e(n,{xs:24,md:20,lg:15,xl:12},{default:l(()=>[e(u,{label:"应用分类侧边栏图标",prop:"isShowAppCatIcon"},{default:l(()=>[e(w,{content:"是否展示应用中心的分类侧边栏图标、配置仅在pc端有效！",placement:"top","show-after":500},{default:l(()=>[e(C,{modelValue:o.isShowAppCatIcon,"onUpdate:modelValue":a[9]||(a[9]=t=>o.isShowAppCatIcon=t),"active-value":"1","inactive-value":"0"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["rules","model"])]),_:1})])}}});typeof x=="function"&&x(M);export{M as default};
