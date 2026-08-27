/*==================================================
  Luxury Wedding Invitation V3
  Mohamed ❤️ Amira
==================================================*/
// Always start at the top when the invitation is opened or reloaded.
if ("scrollRestoration" in history) history.scrollRestoration = "manual";
function forceStartAtTop(){ window.scrollTo(0,0); document.documentElement.scrollTop=0; document.body.scrollTop=0; }
window.addEventListener("DOMContentLoaded", forceStartAtTop);
window.addEventListener("load", forceStartAtTop);
window.addEventListener("pageshow", forceStartAtTop);
if (window.location.hash) { history.replaceState(null, "", window.location.pathname + window.location.search); forceStartAtTop(); }
const intro=document.getElementById("intro");
const card=document.getElementById("glassCard");
const openBtn=document.getElementById("openInvitation");

const music=document.getElementById("music");
const musicBtn=document.getElementById("musicToggle");

const heroBg=document.querySelector(".hero-bg");

const topBtn=document.getElementById("topBtn");

document.documentElement.style.overflow="hidden";
document.body.style.overflow="hidden";

/*==========================
Fade In Music
==========================*/

function fadeInMusic(){

music.volume=0;

music.play().catch(()=>{});

let volume=0;

const fade=setInterval(()=>{

volume+=0.05;

if(volume>=1){

volume=1;

clearInterval(fade);

}

music.volume=volume;

},120);

}

/*==========================
Intro Animation
==========================*/

openBtn.addEventListener("click",()=>{

card.classList.add("flip");

setTimeout(()=>{

intro.classList.add("hide");

document.documentElement.style.overflow="";
document.body.style.overflow="";

fadeInMusic();

// Let the intro finish disappearing, then begin the slow cinematic scroll.
setTimeout(() => { startInvitationAutoScroll(); }, 1200);

},900);

});

/*==========================
Music Button
==========================*/

musicBtn.addEventListener("click",()=>{

if(music.paused){

fadeInMusic();

musicBtn.innerHTML="🎵";

}else{

music.pause();

musicBtn.innerHTML="🔇";

}

});

/*==========================
Countdown
==========================*/

const weddingDate=new Date("2026-10-03T19:00:00").getTime();

function updateCountdown(){

const now=new Date().getTime();

const distance=weddingDate-now;

if(distance<0){

document.getElementById("countdown").innerHTML="<h2>🎉 بدأ الحفل</h2>";

return;

}

const days=Math.floor(distance/(1000*60*60*24));

const hours=Math.floor((distance%(1000*60*60*24))/(1000*60*60));

const minutes=Math.floor((distance%(1000*60*60))/(1000*60));

const seconds=Math.floor((distance%(1000*60))/1000);

animateNumber("days",days);

animateNumber("hours",hours);

animateNumber("minutes",minutes);

animateNumber("seconds",seconds);

}

setInterval(updateCountdown,1000);

updateCountdown();

function animateNumber(id,value){

const el=document.getElementById(id);

if(el.innerText!=value){

el.animate([

{

transform:"translateY(-12px)",

opacity:.2

},

{

transform:"translateY(0)",

opacity:1

}

],{

duration:350

});

el.innerText=value;

}

}

/*==========================
Scroll To Top
==========================*/

window.addEventListener("scroll",()=>{

if(scrollY>500){

topBtn.classList.add("show");

}else{

topBtn.classList.remove("show");

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};
/*====================================
PARALLAX
====================================*/

let lastScroll=0;

window.addEventListener("scroll",()=>{

lastScroll=window.pageYOffset;

requestAnimationFrame(()=>{

heroBg.style.transform=

`translateY(${lastScroll*0.35}px) scale(1.15)`;

});

});

/*====================================
Reveal Animation
====================================*/

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{

threshold:.15

});

document.querySelectorAll(

".glass-section,.luxury-card,.section-title,.section-subtitle"

).forEach(el=>{

el.classList.add("fade-up");

observer.observe(el);

});

/*====================================
Cursor Glow
====================================*/

const glow=document.createElement("div");

glow.className="cursor-glow";

document.body.appendChild(glow);

window.addEventListener("mousemove",(e)=>{

glow.style.left=e.clientX+"px";

glow.style.top=e.clientY+"px";

});

function createHeart(){

const heart=document.createElement("div");

heart.className="floating-heart";

heart.innerHTML="❤️"; // أو ❤️ أو 🤍 أو 💛

heart.style.left=Math.random()*100+"vw";

heart.style.fontSize=(12+Math.random()*22)+"px";

heart.style.animationDuration=(6+Math.random()*6)+"s";

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},12000);

}

setInterval(createHeart,450);/*====================================
Floating Particles
====================================*/

function createParticle(){

const p=document.createElement("div");

p.className="particle";

p.style.left=Math.random()*100+"vw";

p.style.width=(4+Math.random()*5)+"px";

p.style.height=p.style.width;

p.style.animationDuration=

(8+Math.random()*6)+"s";

document.body.appendChild(p);

setTimeout(()=>{

p.remove();

},14000);

}

setInterval(createParticle,550);

/*====================================
Tilt Cards
====================================*/

document.querySelectorAll(".luxury-card").forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

const rotateY=((x/rect.width)-0.5)*10;

const rotateX=((y/rect.height)-0.5)*-10;

card.style.transform=

`perspective(900px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
translateY(-10px)`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform="";

});

});

/*====================================
Ripple Effect
====================================*/

document.querySelectorAll(

".luxury-btn,#openInvitation,.portfolio-btn"

).forEach(button=>{

button.addEventListener("click",function(e){

const ripple=document.createElement("span");

const rect=this.getBoundingClientRect();

const size=Math.max(rect.width,rect.height);

ripple.style.width=size+"px";

ripple.style.height=size+"px";

ripple.style.position="absolute";

ripple.style.borderRadius="50%";

ripple.style.background="rgba(255,255,255,.5)";

ripple.style.left=(e.clientX-rect.left-size/2)+"px";

ripple.style.top=(e.clientY-rect.top-size/2)+"px";

ripple.style.transform="scale(0)";

ripple.style.pointerEvents="none";

ripple.style.transition=".6s";

this.appendChild(ripple);

requestAnimationFrame(()=>{

ripple.style.transform="scale(4)";

ripple.style.opacity="0";

});

setTimeout(()=>{

ripple.remove();

},650);

});

});

/*====================================
Performance
====================================*/

let ticking=false;

window.addEventListener("scroll",()=>{

if(!ticking){

requestAnimationFrame(()=>{

ticking=false;

});

ticking=true;

}

});

/*====================================
Disable Right Click (Optional)
====================================*/

// document.addEventListener("contextmenu",e=>e.preventDefault());

/*====================================
END
====================================*/

console.log(
"%cLuxury Wedding Invitation Loaded",
"color:#d4af37;font-size:18px;font-weight:bold;"
);





/* ================= Guest Wishes — Supabase Live ================= */
(() => {
  const SUPABASE_URL = "https://ymaxtvvccwdflfhrbbew.supabase.co";
  const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_ROMszCkQklyY2HlEaEvZxw_XIxvdhJW";

  const client = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_PUBLISHABLE_KEY
  );

  const $ = (s) => document.querySelector(s);
  const wishForm = $("#wishForm");
  const wishName = $("#wishName");
  const wishMessage = $("#wishMessage");
  const wishStatus = $("#wishStatus");
  const wishesList = $("#wishesList");
  const wishCount = $("#wishCount");

  function escapeHtml(value) {
    return String(value ?? "").replace(/[&<>"']/g, ch => ({
      "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#039;"
    }[ch]));
  }

  function render(items) {
    const clean = (items || []).filter(x => x && x.name && x.message);
    wishCount.textContent = clean.length;

    if (!clean.length) {
      wishesList.innerHTML =
        '<div class="empty-wishes">لسه أول تهنئة... كن أول من يشارك فرحتنا ❤️</div>';
      return;
    }

    wishesList.innerHTML = clean.map(item => {
      const date = item.created_at
        ? new Date(item.created_at).toLocaleDateString("ar-EG", {
            year:"numeric", month:"long", day:"numeric"
          })
        : "";

      return `<article class="wish-card">
        <div class="wish-author">💌 ${escapeHtml(item.name)}</div>
        <div class="wish-message">${escapeHtml(item.message)}</div>
        <div class="wish-date">${escapeHtml(date)}</div>
      </article>`;
    }).join("");
  }

  async function loadWishes() {
    try {
      const { data, error } = await client
        .from("wishes_mohamed_amira")
        .select("id,name,message,created_at")
        .eq("approved", true)
        .order("created_at", { ascending: false })
        .limit(100);

      if (error) throw error;
      render(data || []);
    } catch (error) {
      console.error("Supabase load error:", error);
      wishStatus.textContent = "تعذر تحميل التهاني الآن. حاول تحديث الصفحة.";
    }
  }

  wishForm?.addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = wishName.value.trim();
    const message = wishMessage.value.trim();

    if (!name || !message) {
      wishStatus.textContent = "اكتب اسمك وتهنئتك الأول ❤️";
      return;
    }

    if (name.length > 60 || message.length > 500) {
      wishStatus.textContent = "الاسم أو التهنئة أطول من المسموح.";
      return;
    }

    const submit = wishForm.querySelector(".wish-submit");
    if (submit) submit.disabled = true;
    wishStatus.textContent = "جاري إرسال تهنئتك... ❤️";

    try {
      const { error } = await client.from("wishes_mohamed_amira").insert([{
        name,
        message,
        approved: true
      }]);

      if (error) throw error;

      wishForm.reset();
      await loadWishes();
      wishStatus.textContent = "تم إرسال تهنئتك وظهرت للجميع ❤️";
      setTimeout(() => wishStatus.textContent = "", 3500);
    } catch (error) {
      console.error("Supabase insert error:", error);
      wishStatus.textContent = "حصلت مشكلة أثناء الإرسال. حاول مرة ثانية.";
    } finally {
      if (submit) submit.disabled = false;
    }
  });

  loadWishes();
  document.addEventListener("visibilitychange", () => {
    if (!document.hidden) loadWishes();
  });
})();




/*====================================
  Reading-Speed Auto Scroll
====================================*/
let invitationAutoScroll = null;
let invitationAutoScrolling = false;
let scrollPauseTimer = null;

function stopInvitationAutoScroll(){
  if(invitationAutoScroll){
    cancelAnimationFrame(invitationAutoScroll);
    invitationAutoScroll = null;
  }
  if(scrollPauseTimer){
    clearTimeout(scrollPauseTimer);
    scrollPauseTimer = null;
  }
  invitationAutoScrolling = false;
}

function startInvitationAutoScroll(){
  const target = document.getElementById("guest-wishes");
  if(!target) return;

  const startY = window.scrollY || document.documentElement.scrollTop || 0;
  const targetY = Math.max(
    0,
    target.getBoundingClientRect().top + window.scrollY - 12
  );
  const distance = targetY - startY;

  if(distance < 30) return;

  invitationAutoScrolling = true;

  /*
    Reading pace:
    ~15 pixels/second = deliberately slow, so the guest can actually
    read the sections while the page moves.
  */
  const pixelsPerSecond = 80;
  const duration = Math.max(18000, (distance / pixelsPerSecond) * 1000);
  const startTime = performance.now();

  // Very gentle start, then almost linear movement.
  function easeReading(t){
    if(t < 0.08){
      const x = t / 0.08;
      return 0.5 * x * x * 0.08;
    }
    if(t > 0.92){
      const x = (t - 0.92) / 0.08;
      return 0.92 + (x - 0.5) * 0.08;
    }
    return t;
  }

  function frame(now){
    if(!invitationAutoScrolling) return;

    const progress = Math.min(1, (now - startTime) / duration);
    window.scrollTo(0, startY + distance * easeReading(progress));

    if(progress < 1){
      invitationAutoScroll = requestAnimationFrame(frame);
    }else{
      invitationAutoScrolling = false;
      invitationAutoScroll = null;
      window.scrollTo(0, targetY);
    }
  }

  invitationAutoScroll = requestAnimationFrame(frame);
}

// Any manual interaction gives the guest full control.
let userTouching = false;
let resumeScrollTimer = null;

function pauseAndResumeAutoScroll() {
  if (!invitationAutoScrolling) return;

  invitationAutoScrolling = false;

  if (invitationAutoScroll) {
    cancelAnimationFrame(invitationAutoScroll);
    invitationAutoScroll = null;
  }

  clearTimeout(resumeScrollTimer);

  resumeScrollTimer = setTimeout(() => {
    startInvitationAutoScroll();
  }, 600);
}

/* الموبايل */
window.addEventListener("touchstart", () => {
  userTouching = true;

  if (invitationAutoScrolling) {
    invitationAutoScrolling = false;

    if (invitationAutoScroll) {
      cancelAnimationFrame(invitationAutoScroll);
      invitationAutoScroll = null;
    }
  }
}, {passive:true});

window.addEventListener("touchend", () => {
  userTouching = false;

  clearTimeout(resumeScrollTimer);

  resumeScrollTimer = setTimeout(() => {
    if (!userTouching) {
      startInvitationAutoScroll();
    }
  }, 700);
}, {passive:true});

/* الكمبيوتر */
window.addEventListener("wheel", () => {
  if (invitationAutoScrolling) {
    pauseAndResumeAutoScroll();
  }
}, {passive:true});
