const $=id=>document.getElementById(id);
const awards=[["🥈","รองชนะเลิศอันดับ 1 การตอบปัญหานิติศาสตร์แนวพุทธ","ระดับชาติ · 12 ส.ค. 2569","การแข่งขันตอบปัญหานิติศาสตร์แนวพุทธ ชั้น ม.ปลาย ชิงโล่พระราชทาน"],["🏅","เยาวชนต้นแบบ (ROLE MODEL)","ระดับจังหวัด · 11 ก.ย. 2569","ได้รับเกียรติบัตรจากผู้ว่าราชการจังหวัดนครศรีธรรมราช ในฐานะผู้นำเยาวชนที่นำหลักธรรมมาปฏิบัติจริง"],["🥉","รองชนะเลิศอันดับ 3 การแข่งขันตอบปัญหาวิชาการ","ระดับจังหวัด/เขต · 7 ส.ค. 2569","แข่งขันความรู้รอบตัว พุทธประวัติ ข่าวสารบ้านเมือง และความรู้เบื้องต้นทางกฎหมาย"],["🚀","แข่งขันจรวดขวดน้ำระดับประเทศ ครั้งที่ 24","ระดับชาติ · 29 ส.ค. 2568","ตัวแทนเข้าแข่งขันรอบคัดเลือก ฝึกการคิดวิเคราะห์ แก้ปัญหาเฉพาะหน้า และทำงานเป็นทีม"],["🌟","เด็กดีศรีรัชมังฯ","ปีการศึกษา 2569","ได้รับคัดเลือกเป็นเด็กดีศรีรัชมังฯ ประจำปีการศึกษา 2569"]];
const projs=[["แกนนำโครงการจิตอาสาพัฒนาชุมชนและวิปัสสนากรรมฐาน","9–28 ก.ค. 2569 · วัดประดิษฐาราม","ประสานความร่วมมือ บ้าน วัด โรงเรียน ตามหลัก ‘บวร’ เพื่อพัฒนาพื้นที่สาธารณะและเฉลิมพระเกียรติ"],["อบรมเชิงปฏิบัติการพัฒนาผลิตภัณฑ์ชุมชน","25 ส.ค. 2569 · ระดับชาติ","เรียนรู้การทำยาดมสมุนไพร น้ำมันว่าน 108 และแนวทางปลูกข้าวไร่ปลอดสารเคมี"],["โครงการจิตอาสาปลูกป่าชายเลน","9 ต.ค. 2568 · เทศบาลเมืองปากพูน","ริเริ่มและรวมพลังเพื่อนอนุรักษ์สิ่งแวดล้อมชายฝั่ง สร้างจิตสำนึกรักษาธรรมชาติ"],["Open House คณะนิติศาสตร์","24 ก.ค. 2569","ร่วมกิจกรรมศึกษาดูงาน แลกเปลี่ยนมุมมองกับรุ่นพี่ จนเกิดแรงบันดาลใจศึกษาต่อด้านกฎหมาย"]];
const acts=[["ประธานฝ่ายศิลป์กีฬาสี","โรงเรียน","รับผิดชอบตั้งแต่วางแผน ออกแบบ ควบคุมการสร้างสแตนเชียร์และขบวนพาเหรด พัฒนาภาวะผู้นำและการไกล่เกลี่ยปัญหา"],["นักศึกษาวิชาทหารจิตอาสาบริจาคโลหิต","15 ส.ค. 2569","ร่วมกิจกรรม ‘เติมโลหิตเพื่อชาติ 10 ล้านซีซี’ เพื่อถวายเป็นพระราชกุศลและช่วยเหลือเพื่อนมนุษย์"],["ฝึกประสบการณ์วิชาชีพ ฝ่ายปกครอง","17–28 มี.ค. 2568 · ที่ว่าการอำเภอ","เรียนรู้ระบบงานภาครัฐ การบริการประชาชน และลงพื้นที่แก้ไขความเดือดร้อนในชุมชน"],["อบรม CPR วินัยจราจร และป้องกันสารเสพติด","โรงเรียน","รับความรู้จากเจ้าหน้าที่ตำรวจ ได้ทักษะช่วยชีวิต เข้าใจกฎหมายจราจร และตระหนักถึงพิษภัยสารเสพติด"]];
const card=ic=>(x,i)=>`<div class="card award"><div class="n">${ic[i]}</div><div><div class="meta">${x[1]}</div><h3>${x[0]}</h3><p>${x[2]}</p></div></div>`;
$("awardList").innerHTML=awards.map(x=>`<div class="card award"><div class="n">${x[0]}</div><div><div class="meta">${x[2]}</div><h3>${x[1]}</h3><p>${x[3]}</p></div></div>`).join("");
$("projList").innerHTML=projs.map(card(["🪷","🌿","🌳","⚖️"])).join("");
$("actList").innerHTML=acts.map(card(["🎨","🩸","🏛️","🫀"])).join("");
const io=new IntersectionObserver(e=>e.forEach(i=>i.isIntersecting&&i.target.classList.add("on")),{threshold:.1});
document.querySelectorAll(".rv").forEach(e=>io.observe(e));
const menu=$("menu");$("mb").onclick=()=>menu.classList.toggle("open");
menu.addEventListener("click",e=>e.target.tagName=="A"&&menu.classList.remove("open"));
const links=[...menu.querySelectorAll("a")];
const spy=new IntersectionObserver(es=>es.forEach(x=>{if(x.isIntersecting)links.forEach(a=>a.classList.toggle("on",a.getAttribute("href")=="#"+x.target.id))}),{rootMargin:"-45% 0px -50% 0px"});
document.querySelectorAll("header[id],section[id]").forEach(e=>spy.observe(e));
addEventListener("scroll",()=>{const h=document.documentElement;$("bar").style.width=(h.scrollTop/(h.scrollHeight-h.clientHeight)*100)+"%";$("top").classList.toggle("on",h.scrollTop>600)},{passive:true});
const words=["ว่าที่นักกฎหมายที่มีคุณธรรม","เยาวชนต้นแบบ (ROLE MODEL)","จิตอาสา · ผู้นำ · ผู้ใฝ่เรียนรู้"];let wi=0,ci=0,del=false;
(function t(){const w=words[wi];ci+=del?-1:1;$("tw").textContent=w.slice(0,ci);let d=del?35:80;if(!del&&ci==w.length){del=true;d=1600}else if(del&&ci==0){del=false;wi=(wi+1)%words.length;d=400}setTimeout(t,d)})();
const subj=[["ภาษาไทย",3.31,8],["คณิตศาสตร์",2.95,11],["วิทยาศาสตร์",3.47,8.5],["สังคมศึกษาฯ",3.74,13.5],["สุขศึกษาและพลศึกษา",4,3],["ศิลปะ",4,2],["การงานอาชีพและเทคโนโลยี",3.54,6],["ภาษาต่างประเทศ",3,8]];
const col=v=>v>=3.5?"#c9a24b":v>=3?"#5b86ff":"#9aa4bd";
$("chart").innerHTML=subj.map(x=>`<div class="crow"><div>${x[0]}<small>${x[2]} หน่วยกิต</small></div><div class="ctr"><div class="cbar" style="background:${col(x[1])}" data-w="${x[1]/4*100}"></div></div><b>${x[1].toFixed(2)}</b></div>`).join("");
const run=new IntersectionObserver(es=>es.forEach(x=>{if(!x.isIntersecting)return;run.unobserve(x.target);
if(x.target.id=="about"){$("ring").style.strokeDashoffset=427*(1-3.41/4);let n=0;const iv=setInterval(()=>{n+=.06;if(n>=3.41){n=3.41;clearInterval(iv)}$("gpax").textContent=n.toFixed(2)},30)}
if(x.target.id=="grades")x.target.querySelectorAll(".cbar").forEach((b,i)=>setTimeout(()=>b.style.width=b.dataset.w+"%",i*120))}),{threshold:.3});
["about","grades"].forEach(i=>run.observe($(i)));
const st=document.querySelector(".stats"),so=new IntersectionObserver(es=>es.forEach(x=>{if(!x.isIntersecting)return;so.disconnect();st.querySelectorAll("b").forEach(b=>{const t=+b.dataset.to,d=+(b.dataset.d||0);let n=0;const iv=setInterval(()=>{n=Math.min(t,n+t/40);b.textContent=n.toFixed(d);if(n>=t)clearInterval(iv)},35)})}),{threshold:.4});so.observe(st);
const cv=$("pt"),cx=cv.getContext("2d");let P=[];
function rs(){cv.width=cv.offsetWidth;cv.height=cv.offsetHeight;P=Array.from({length:42},()=>({x:Math.random()*cv.width,y:Math.random()*cv.height,r:Math.random()*2.2+.6,v:Math.random()*.5+.15,a:Math.random()*.6+.2}))}
rs();addEventListener("resize",rs);
(function d(){cx.clearRect(0,0,cv.width,cv.height);P.forEach(p=>{p.y-=p.v;if(p.y<-5){p.y=cv.height+5;p.x=Math.random()*cv.width}cx.beginPath();cx.fillStyle="rgba(224,185,94,"+p.a+")";cx.arc(p.x,p.y,p.r,0,7);cx.fill()});requestAnimationFrame(d)})();

(function(){
document.querySelectorAll(".grid").forEach(g=>[...g.children].forEach((c,i)=>c.style.setProperty("--i",i)));
const sp=$("spot"),fine=matchMedia("(hover:hover)").matches;
document.addEventListener("mousemove",e=>{
 if(fine){sp.style.opacity=1;sp.style.transform=`translate(${e.clientX}px,${e.clientY}px)`}
 const c=e.target.closest&&e.target.closest(".card");if(c){const r=c.getBoundingClientRect();c.style.setProperty("--mx",(e.clientX-r.left)+"px");c.style.setProperty("--my",(e.clientY-r.top)+"px")}
});
const hero=$("home"),avs=document.querySelectorAll(".av");
hero.addEventListener("mousemove",e=>{const x=e.clientX/innerWidth-.5,y=e.clientY/innerHeight-.5;avs.forEach((a,i)=>a.style.transform=`perspective(700px) rotateY(${x*(i?-14:14)}deg) rotateX(${-y*10}deg)`)});
hero.addEventListener("mouseleave",()=>avs.forEach(a=>a.style.transform=""));
const lb=$("lb");document.querySelectorAll(".ph").forEach(p=>p.onclick=()=>{lb.querySelector("img").src=p.querySelector("img").src;lb.classList.add("on")});lb.onclick=()=>lb.classList.remove("on");
const cf=$("cf"),cc=cf.getContext("2d");let K=[];
function boom(x,y){for(let i=0;i<60;i++){const a=Math.random()*6.28,s=Math.random()*6+2;K.push({x,y,vx:Math.cos(a)*s,vy:Math.sin(a)*s-4,r:Math.random()*5+3,c:["#c9a24b","#e0b95e","#fff0b8","#5b86ff"][i%4],l:80})}}
(function fx(){if(cf.width!=innerWidth||cf.height!=innerHeight){cf.width=innerWidth;cf.height=innerHeight}cc.clearRect(0,0,cf.width,cf.height);K=K.filter(k=>k.l>0);K.forEach(k=>{k.x+=k.vx;k.y+=k.vy;k.vy+=.25;k.l--;cc.globalAlpha=Math.max(0,k.l/80);cc.fillStyle=k.c;cc.fillRect(k.x,k.y,k.r,k.r*.6)});requestAnimationFrame(fx)})();
document.querySelectorAll(".btn,.chip,.award .n").forEach(el=>el.addEventListener("click",e=>boom(e.clientX,e.clientY)));
})();
(function(){
const sp=$("spot");
document.querySelectorAll(".av").forEach(a=>{
 const mv=e=>{if(e.pointerType=="mouse")return;const r=a.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;a.style.transform=`perspective(700px) rotateY(${x*18}deg) rotateX(${-y*14}deg) scale(1.03)`};
 a.addEventListener("pointerdown",mv);a.addEventListener("pointermove",mv);
 ["pointerup","pointercancel"].forEach(t=>a.addEventListener(t,e=>{if(e.pointerType!="mouse")a.style.transform=""}));
});
addEventListener("pointermove",e=>{if(e.pointerType=="touch"){sp.style.opacity=1;sp.style.transform=`translate(${e.clientX}px,${e.clientY}px)`}},{passive:true});
addEventListener("pointerup",e=>{if(e.pointerType=="touch")sp.style.opacity=0});
})();
