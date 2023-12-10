import{_ as P,a as B}from"./InputWithErrorLabel.vue.fb9387df.js";import{d as h,t as U,v as I,y as H,E,c as o,r as Z,x as $,z as r,A as C,H as n,J as v,m as R,K as D,s as w,I as z,L,F as T}from"./entry.a5442ecb.js";import{u as W}from"./vue.f36acd1f.86edfd3e.js";const F=h({__name:"index",props:{text:{default:"Button"}},emits:["click"],setup(k){return(b,t)=>(U(),I("button",{class:"button text-gray-900 bg-gray border border-gray-300 focus:outline-none hover:bg-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 bg-gray-800 text-white border-gray-600 hover:bg-gray-700 hover:border-gray-600",onClick:t[0]||(t[0]=a=>b.$emit("click",a))},H(b.text),1))}}),y={email:/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,password:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/,korean:/^[가-힣]{2,}$/,english:/^[a-zA-Z]{3,}$/,disallowedCharacters:/[^\w가-힣]/,phoneNumber:/^0\d{2,3}[ -]?\d{3,4}[ -]?\d{4}$/,cardNumber:/^(?:\d{4}\s?){4}$/},j={class:"section"},J=h({__name:"Account",emits:["next"],setup(k,{emit:b}){const t=E(),a=o({get(){return t.getAccountInfo.email},set(e){t.setAccountEmail(e)}}),l=o({get(){return t.getAccountInfo.password},set(e){t.setAccountPassword(e)}}),m=Z(""),p=o(()=>y.email.test(a.value)),f=o(()=>y.password.test(l.value)),g=o(()=>l.value===m.value),V=o(()=>p.value&&f.value&&g.value),x=b,u=e=>{e.preventDefault(),V.value&&x("next")};return(e,d)=>{const c=P,i=B,s=F;return U(),I("div",j,[$("form",{class:"flex flex-col gap-3",onSubmit:u},[r(i,{label:"이메일",error:n(p)?"":"올바른 이메일 주소를 입력해주세요."},{default:C(()=>[r(c,{modelValue:n(a),"onUpdate:modelValue":d[0]||(d[0]=_=>v(a)?a.value=_:null),type:"email",placeholder:"dev.glennn@gmail.com"},null,8,["modelValue"])]),_:1},8,["error"]),r(i,{label:"비밀번호",error:n(f)?"":"영문 대문자, 소문자, 숫자, 특수문자가 포함된 8자리 이상의 문자열을 입력해주세요."},{default:C(()=>[r(c,{modelValue:n(l),"onUpdate:modelValue":d[1]||(d[1]=_=>v(l)?l.value=_:null),type:"password",placeholder:"8자 이상의 영문 대소문자, 숫자, 특수문자의 조합"},null,8,["modelValue"])]),_:1},8,["error"]),r(i,{label:"비밀번호 확인",error:n(g)?"":"비밀번호와 일치하지 않습니다."},{default:C(()=>[r(c,{modelValue:n(m),"onUpdate:modelValue":d[2]||(d[2]=_=>v(m)?m.value=_:null),type:"password",placeholder:"비밀번호 확인"},null,8,["modelValue"])]),_:1},8,["error"]),r(s,{class:"mt-10",type:"submit",text:"다음"})],32)])}}}),K={class:"section"},M={class:"flex items-center mb-2 gap-2"},O={class:"flex gap-4 mt-10"},q=h({__name:"UserInfo",emits:["prev","next"],setup(k,{emit:b}){const t=E(),a=R();W({script:[{src:a.public.daumURL}]});const l=o({get(){return t.getUserInfo.name},set(i){t.setUserName(i)}}),m=o({get(){return t.getUserInfo.phoneNumber},set(i){t.setUserPhoneNumber(i)}}),p=o(()=>t.getUserInfo.zonecode),f=o(()=>t.getUserInfo.address),g=o(()=>(y.korean.test(l.value)||y.english.test(l.value))&&!y.disallowedCharacters.test(l.value)),V=o(()=>y.phoneNumber.test(m.value)),x=o(()=>!!p.value||!!f.value),u=o(()=>g.value&&V.value&&f.value),e=b,d=()=>{new daum.Postcode({oncomplete:function(i){t.setUserZoneCode(i.zonecode),t.setUserAddress(i.address)}}).open()},c=i=>{i.preventDefault(),u.value&&e("next")};return(i,s)=>{const _=P,A=B,S=F;return U(),I("div",K,[$("form",{class:"flex flex-col gap-3",onSubmit:c},[r(A,{label:"이름",error:n(g)?"":"2글자 이상의 한글 완성형, 또는 3글자 이상의 영문 알파벳을 입력해주세요."},{default:C(()=>[r(_,{modelValue:n(l),"onUpdate:modelValue":s[0]||(s[0]=N=>v(l)?l.value=N:null),placeholder:"2글자 이상의 한글, 또는 3글자 이상의 영문 이름"},null,8,["modelValue"])]),_:1},8,["error"]),r(A,{label:"연락처",error:n(V)?"":"올바른 휴대폰번호를 입력해주세요."},{default:C(()=>[r(_,{modelValue:n(m),"onUpdate:modelValue":s[1]||(s[1]=N=>v(m)?m.value=N:null),placeholder:"ex) 010-0000-0000"},null,8,["modelValue"])]),_:1},8,["error"]),r(A,{label:"주소",error:n(x)?"":"우편번호 및 주소를 확인해주세요."},{default:C(()=>[$("div",M,[r(_,{modelValue:n(p),"onUpdate:modelValue":s[2]||(s[2]=N=>v(p)?p.value=N:null),placeholder:"우편번호",readonly:""},null,8,["modelValue"]),r(S,{text:"우편번호",class:"shrink-0",onClick:d})]),r(_,{modelValue:n(f),"onUpdate:modelValue":s[3]||(s[3]=N=>v(f)?f.value=N:null),placeholder:"주소",readonly:""},null,8,["modelValue"])]),_:1},8,["error"]),$("div",O,[r(S,{text:"이전",class:"flex-1",onClick:s[4]||(s[4]=N=>i.$emit("prev"))}),r(S,{type:"submit",text:"다음",class:"flex-1"})])],32)])}}}),G={class:"section"},Q={class:"flex gap-2 items-center"},X={class:"flex gap-4 mt-10"},Y=h({__name:"CardInfo",emits:["prev","next"],setup(k,{emit:b}){const t=E(),a=o({get(){return t.getCardNumber.number1},set(u){t.setCardNumber1(u)}}),l=o({get(){return t.getCardNumber.number2},set(u){t.setCardNumber2(u)}}),m=o({get(){return t.getCardNumber.number3},set(u){t.setCardNumber3(u)}}),p=o({get(){return t.getCardNumber.number4},set(u){t.setCardNumber4(u)}}),f=o(()=>[a.value,l.value,m.value,p.value].join(" ")),g=o(()=>{if(!y.cardNumber.test(f.value))return!1;const u=f.value.replace(/\s/g,"").split("").map(Number);let e=0;for(let d=u.length-1;d>=0;d--){let c=u[d];d%2===0&&(c*=2,c>=9&&(c=Math.floor(c/10)+c%10)),e+=c}return e%10===0}),V=b,x=u=>{u.preventDefault(),g.value&&V("next")};return(u,e)=>{const d=P,c=B,i=F;return U(),I("div",G,[$("form",{class:"flex flex-col gap-3",onSubmit:x},[r(c,{label:"카드번호",error:n(g)?"":"유효하지 않은 카드번호 입니다."},{default:C(()=>[$("div",Q,[r(d,{modelValue:n(a),"onUpdate:modelValue":e[0]||(e[0]=s=>v(a)?a.value=s:null),maxLength:"4"},null,8,["modelValue"]),r(d,{modelValue:n(l),"onUpdate:modelValue":e[1]||(e[1]=s=>v(l)?l.value=s:null),maxLength:"4"},null,8,["modelValue"]),r(d,{modelValue:n(m),"onUpdate:modelValue":e[2]||(e[2]=s=>v(m)?m.value=s:null),maxLength:"4"},null,8,["modelValue"]),r(d,{modelValue:n(p),"onUpdate:modelValue":e[3]||(e[3]=s=>v(p)?p.value=s:null),maxLength:"4"},null,8,["modelValue"])])]),_:1},8,["error"]),$("div",X,[r(i,{text:"이전",class:"flex-1",onClick:e[4]||(e[4]=s=>u.$emit("prev"))}),r(i,{type:"submit",text:"완료",class:"flex-1"})])],32)])}}}),ee={class:"text-xl mb-10"},le=h({__name:"[type]",setup(k){const t=D().params.type,a=[{id:"account",title:"개인정보 입력"},{id:"userInfo",title:"배송지 정보 입력"},{id:"cardInfo",title:"결제정보 입력"}],l=a.map(e=>e.id);(typeof t!="string"||!l.includes(t))&&w(`/signUp/${l[0]}`);const m=o(()=>{const e=l.findIndex(d=>d===t);return e===-1?0:e}),p=o(()=>`0${m.value+1}. ${a[m.value].title}`),f=o(()=>{let e=m.value+1;return e>=a.length-1?a.length-1:e}),g=o(()=>{let e=m.value-1;return e<=0?0:e}),V=o(()=>m.value>=a.length-1),x=()=>V.value?w("/"):w(`/signUp/${a[f.value].id}`),u=()=>w(`/signUp/${a[g.value].id}`);return(e,d)=>{const c=J,i=q,s=Y;return U(),I(T,null,[$("p",ee,H(n(p)),1),n(t)===n(l)[0]?(U(),z(c,{key:0,onNext:x})):L("",!0),n(t)===n(l)[1]?(U(),z(i,{key:1,onPrev:u,onNext:x})):L("",!0),n(t)===n(l)[2]?(U(),z(s,{key:2,onPrev:u,onNext:x})):L("",!0)],64)}}});export{le as default};
