(()=>{"use strict";var e=document.querySelector("#submit-form"),t=function(){e.disabled=!0},l=function(){e.disabled=!1},u=document.querySelector("#digits"),a=document.querySelector("#top-input"),n=document.querySelector("#digits-error"),v=document.querySelector("#exp-month-top"),r=document.querySelector("#exp-month"),i=document.querySelector("#cvv-card-top"),o=document.querySelector("#cvv-card"),c=document.querySelector("#visa-card"),d=document.querySelector("#mastercard"),s=document.querySelector("#humo-card"),y=document.querySelector("#uzcard"),p=[c,d,s,y],m=["^4","^5[1-5]","^8[6]","986"],h=/^(?=.*\d)[\d ]+$/,g=function(e){e.match(m[0])?(i.disabled=!1,i.style.opacity=1,o.disabled=!1,o.style.opacity=1,d.style.display="none",c.style.display="block",y.style.display="none",s.style.display="none"):e.match(m[1])?(i.disabled=!1,i.style.opacity=1,o.disabled=!1,o.style.opacity=1,d.style.display="block",c.style.display="none",y.style.display="none",s.style.display="none"):e.match(m[2])?(d.style.display="none",c.style.display="none",y.style.display="block",s.style.display="none",i.disabled=!0,i.style.opacity=0,o.disabled=!0,o.style.opacity=.5):e.match(m[3])?(d.style.display="none",c.style.display="none",y.style.display="none",s.style.display="block",i.disabled=!0,i.style.opacity=0,o.disabled=!0,o.style.opacity=.5):(p.forEach((function(e){e.style.display="none"})),i.disabled=!0,i.style.opacity=0,o.disabled=!0,o.style.opacity=.5)},x=function(e){e.match(h)||(n.innerText="Только цифры - без букв и символо")},f=function(e){n.innerText="",e.focus(),l()},T=document.querySelector("#full-name-top"),q=document.querySelector("#full-name"),S=document.querySelector("#cname-error"),b=/^[a-zA-Z ]+$/,E=function(e){e.match(b)?(S.innerText="",l()):(S.innerText="Только латинские буквы - без символов",t())},L=document.querySelector("#exp-month-top"),A=document.querySelector("#exp-month"),k=document.querySelector("#exp-month-error"),C=document.querySelector("#exp-year-top"),V=document.querySelector("#exp-year"),$=document.querySelector("#exp-year-error"),w=document.querySelector("#cvv-card-top"),z=document.querySelector("#cvv-card"),Z=/^0[1-9]|1[012]$/,j=function(e,u){u.match(Z)&&(e.focus(),l(),k.innerText=""),u.match(Z)||t(),u>=22&&u<=30&&($.innerText="",l(),e.focus())},B=document.querySelector("#cvv-card-top"),D=document.querySelector("#cvv-card"),F=document.querySelector("#cvv-error"),G=document.querySelector("#full-name-top"),H=document.querySelector("#full-name"),I=function(e){e.focus(),l()};window.addEventListener("load",(function(){a.addEventListener("keyup",(function(e){(8!==e.keyCode&&4===a.value.length||10===a.value.length||16===a.value.length)&&(a.value=(a.value=a.value+"  ")&&(u.value=a.value))&&x(a.value)})),u.addEventListener("keyup",(function(e){(8!==e.keyCode&&4===u.value.length||10===u.value.length||16===u.value.length)&&(u.value=u.value+"  ")&&(a.value=u.value)&&x(u.value)})),a.addEventListener("input",(function(e){!u===a?u.setAttribute("value",e.target.value):""===a.value?(n.innerText="Укажите Номер карты!")&&(u.value=""):22===a.value.length&&(u.value=a.value)?f(v):3===a.value.length&&(u.value=a.value)?g(a.value):(u.value=a.value)&&(n.innerText="")})),u.addEventListener("input",(function(e){u===a?a.setAttribute("value",e.target.value):""===u.value?(n.innerText="Укажите Номер карты!")&&(a.value=""):22===u.value.length&&(a.value=u.value)?f(r):3===u.value.length&&(a.value=u.value)?g(u.value):(a.value=u.value)&&(n.innerText="")})),L.addEventListener("input",(function(e){L===A?L.setAttribute("value",e.target.value):2===L.value.length&&(A.value=L.value)?j(C,L.value):L.value.length>2?L.value=L.value.slice(1)&&(k.innerText="Неверный формат")&&(A.value=""):""===L.value?(k.innerText="Укажите месяц")&&(A.value=L.value):(A.value=L.value)&&(k.innerText="")})),A.addEventListener("input",(function(e){!L===A?A.setAttribute("value",e.target.value):2===A.value.length&&(L.value=A.value)?j(V,A.value):""===A.value?k.innerText="Укажите месяц":(L.value=A.value)&&(k.innerText="")})),C.addEventListener("input",(function(e){C===V?C.setAttribute("value",e.target.value):2===C.value.length?(V.value=20+C.value)&&j(w,C.value):C.value.length>2?(C.value=C.value.slice(0,2))&&($.innerText="")&&t():C.value!==V.value?$.innerText="Неверный формат":C.value.length<1?($.innerText="Укажите год")&&t():(V.value=C.value)&&($.innerText="")})),V.addEventListener("input",(function(e){!C===V?V.setAttribute("value",e.target.value):4===V.value.length&&(C.value=V.value.slice(-2))?j(z,V.value):C.value=V.value})),T.addEventListener("input",(function(e){T===q?q.setAttribute("value",e.target.value):""===T.value?(S.innerText="Укажите Имя и Фамилия!")&&(q.value=""):T.value.length>4?(q.value=T.value)&&E(T.value):T.value.length<=4||0===T.value.length?(q.value=T.value)&&t():(q.value=T.value)&&(S.innerText="")})),q.addEventListener("input",(function(e){!T===T?T.setAttribute("value",e.target.value):""===q.value?(S.innerText="Укажите Имя и Фамилия!")&&(T.value=""):q.value.length>4?(T.value=q.value)&&E(q.value):q.value.length<=4||0===q.value.length?(T.value=q.value)&&t():(T.value=q.value)&&(S.innerText="")})),B.addEventListener("input",(function(e){B===D?B.setAttribute("value",e.target.value):""===B.value?(D.value="")&&(F.innerText="Введите CVC/CVV"):B.value.length>4?(F.innerText="не более 4 цифр")&&(B.value=B.value="")&&t():4===B.value.length&&(D.value=B.value)?I(G):(D.value=B.value)&&(F.innerText="")})),D.addEventListener("input",(function(e){!B===D?D.setAttribute("value",e.target.value):""===D.value?(F.innerText="Введите CVC/CVV")&&(B.value=""):D.value.length>4?(F.innerText="не более 4 цифр")&&(D.value=D.value="")&&t():4===D.value.length&&(B.value=D.value)?I(H):(B.value=D.value)&&(F.innerText="")}))}))})();
//# sourceMappingURL=main.js.map