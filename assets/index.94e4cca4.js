import{u as f,_ as p,a as b}from"./user.1a00f080.js";import{d as v,c as a,t as s,v as n,x as r,F as x,E as I,G as h,H as g,A as N,z as V}from"./entry.f3c845ca.js";const k={class:"section"},B=r("p",{class:"text-xl mb-10"},"🔔 회원가입 완료!",-1),F={class:"flex flex-col gap-5"},j=v({__name:"index",setup($){const o=f(),c=a(()=>o.getUserInfo),t=a(()=>o.getAccountInfo),u=a(()=>o.getCardNumber),_=a(()=>{const e=c.value;return[{label:"이름",value:e.name},{label:"주소",value:`[${e.zonecode}] ${e.address}`},{label:"연락처",value:e.phoneNumber},{label:"이메일 주소",value:t.value.email},{label:"비밀번호",value:t.value.password},{label:"카드정보",value:Object.values(u.value).join("-")}]});return(e,C)=>{const d=p,m=b;return s(),n("div",k,[B,r("div",F,[(s(!0),n(x,null,I(h(_),(l,i)=>(s(),g(m,{key:i,label:l.label},{default:N(()=>[V(d,{modelValue:l.value,readonly:""},null,8,["modelValue"])]),_:2},1032,["label"]))),128))])])}}});export{j as default};
