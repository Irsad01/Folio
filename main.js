// =========================================
// PRELOADER
// =========================================

window.addEventListener("load", () => {

const loader = document.getElementById("loader");

if (loader) {
    setTimeout(() => {
        loader.style.opacity = "0";
        loader.style.visibility = "hidden";
    }, 700);
}

});


// =========================================
// CUSTOM CURSOR
// =========================================

const buttons=document.querySelectorAll(".btn");

buttons.forEach(btn=>{

btn.addEventListener("mousemove",(e)=>{

const rect=btn.getBoundingClientRect();

const x=e.clientX-rect.left-rect.width/2;

const y=e.clientY-rect.top-rect.height/2;

btn.style.transform=`translate(${x*.15}px,${y*.15}px)`;

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform="translate(0,0)";

});

});




// =========================================
// STICKY HEADER
// =========================================

const header = document.getElementById("header");

if (header) {
    window.addEventListener("scroll", () => {

        if (window.scrollY > 40) {
            header.style.background = "rgba(5,8,22,.9)";
            header.style.padding = "15px 0";
        } else {
            header.style.background = "rgba(5,8,22,.35)";
            header.style.padding = "22px 0";
        }

    });
}


// =========================================
// SMOOTH SCROLL
// =========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href"))

.scrollIntoView({

behavior:"smooth"

});

});

});



// =========================================
// ACTIVE NAVIGATION
// =========================================

const sections = document.querySelectorAll("section");

const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const top=section.offsetTop-150;

const height=section.clientHeight;

if(pageYOffset>=top){

current=section.getAttribute("id");

}

});

navItems.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});

// =========================================
// SCROLL PROGRESS
// =========================================

const progress = document.getElementById("progress-bar");

if (progress) {
    window.addEventListener("scroll", () => {
        const total =
            document.documentElement.scrollHeight - window.innerHeight;

        const percent = (window.pageYOffset / total) * 100;

        progress.style.width = percent + "%";
    });
}

const cards=document.querySelectorAll(".project-card");

cards.forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

card.style.transform=`
perspective(1000px)
rotateX(${-(y-120)/20}deg)
rotateY(${(x-170)/20}deg)
`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform="perspective(1000px) rotateX(0) rotateY(0)";

});

});

// =====================================
// TYPING EFFECT
// =====================================

const roles = [
    "Frontend Developer",
    "WordPress Developer",
    "JavaScript Developer",
    "UI Designer"
];

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

const typing = document.getElementById("typing");

function typeEffect(){

    const current = roles[roleIndex];

    if(!deleting){

        typing.textContent = current.substring(0,charIndex++);

        if(charIndex > current.length){

            deleting = true;

            setTimeout(typeEffect,1500);

            return;

        }

    }else{

        typing.textContent = current.substring(0,charIndex--);

        if(charIndex < 0){

            deleting = false;

            roleIndex++;

            if(roleIndex >= roles.length){

                roleIndex = 0;

            }

        }

    }

    setTimeout(typeEffect,deleting ? 60 : 120);

}

typeEffect();

// =====================================
// COUNTER
// =====================================

const counters = document.querySelectorAll(".counter");

const speed = 80;

const observer = new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

const counter = entry.target;

const update = ()=>{

const target = +counter.dataset.target;

const current = +counter.innerText;

const increment = Math.ceil(target/speed);

if(current < target){

counter.innerText=current+increment;

setTimeout(update,25);

}else{

counter.innerText=target+"+";

}

}

update();

observer.unobserve(counter);

}

});

});

counters.forEach(counter=>observer.observe(counter));

// =====================================
// BACK TO TOP
// =====================================

// const topBtn=document.getElementById("topBtn");

// window.addEventListener("scroll",()=>{

// if(window.scrollY>500){

// topBtn.style.display="block";

// }else{

// topBtn.style.display="none";

// }

// });

// if (topBtn) {

// topBtn.onclick = () => {

// window.scrollTo({
// top:0,
// behavior:"smooth"
// });

// };

// }

const topBtn = document.getElementById("topBtn");

if (topBtn) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 500) {
            topBtn.style.display = "block";
        } else {
            topBtn.style.display = "none";
        }

    });

    topBtn.onclick = () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    };

}

// =====================================
// SCROLL REVEAL
// =====================================

const reveal=document.querySelectorAll("section");

const revealObserver=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

reveal.forEach(sec=>{

revealObserver.observe(sec);

});


particlesJS("particles-js",{

particles:{

number:{
value:70
},

color:{
value:"#6C63FF"
},

shape:{
type:"circle"
},

opacity:{
value:.35
},

size:{
value:3
},

line_linked:{
enable:true,
distance:160,
color:"#00E5FF",
opacity:.15,
width:1
},

move:{
enable:true,
speed:2
}

},

interactivity:{

events:{

onhover:{
enable:true,
mode:"grab"
}

},

modes:{

grab:{

distance:180,

line_linked:{
opacity:.5
}

}

}

}

});

const glow = document.getElementById("mouseGlow");

if (glow) {
    document.addEventListener("mousemove", (e) => {
        glow.style.left = e.clientX + "px";
        glow.style.top = e.clientY + "px";
    });
}

if (header) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 40) {

            header.style.background = "rgba(5,8,22,.82)";
            header.style.backdropFilter = "blur(20px)";
            header.style.boxShadow = "0 10px 30px rgba(0,0,0,.25)";

        } else {

            header.style.background = "rgba(5,8,22,.35)";
            header.style.boxShadow = "none";

        }

    });

}

/*=========================
LENIS SMOOTH SCROLL
=========================*/

// const lenis = new Lenis({
//     duration: 1.2,
//     smoothWheel: true,
//     wheelMultiplier: 1,
//     touchMultiplier: 2
// });

// function raf(time) {
//     lenis.raf(time);
//     requestAnimationFrame(raf);
// }

// requestAnimationFrame(raf);

if (typeof Lenis !== "undefined") {
    const lenis = new Lenis({
        duration: 1.2,
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 2,
    });

    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
} else {
    console.warn("Lenis library not loaded.");
}

const spotlight=document.getElementById("spotlight");

if(spotlight){

document.addEventListener("mousemove",(e)=>{

spotlight.style.left=e.clientX+"px";

spotlight.style.top=e.clientY+"px";

});

}

const heroTitle=document.querySelector(".hero-title");

if(heroTitle){

const letters=heroTitle.textContent.split("");

heroTitle.innerHTML="";

letters.forEach(letter=>{

heroTitle.innerHTML+=`<span>${letter===" "?"&nbsp;":letter}</span>`;

});

const spans=heroTitle.querySelectorAll("span");

spans.forEach((span,index)=>{

setTimeout(()=>{

span.style.transform="translateY(0)";

span.style.opacity="1";

span.style.transition=".6s";

},index*60);

});

}