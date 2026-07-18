/* ==========================
TYPING EFFECT
========================== */

const words = [
"Эгоист",
"Похуист",
"Командир Мира"
];

const typingElement =
document.getElementById("typing");

let wordIndex = 0;

let charIndex = 0;

let deleting = false;

function typeEffect(){

const currentWord =
words[wordIndex];



if(!deleting){


    typingElement.textContent =
    currentWord.substring(
        0,
        charIndex
    );


    charIndex++;



    if(charIndex >
    currentWord.length){


        deleting = true;


        setTimeout(
            typeEffect,
            1500
        );


        return;

    }



} else {



    typingElement.textContent =
    currentWord.substring(
        0,
        charIndex
    );



    charIndex--;



    if(charIndex < 0){


        deleting = false;


        wordIndex++;


        if(wordIndex >= words.length){

            wordIndex = 0;

        }


    }



}



let speed =
deleting ? 80 : 130;



setTimeout(
    typeEffect,
    speed
);

}

typeEffect();

/* ==========================
PARTICLES
========================== */

const particlesContainer =
document.querySelector(".particles");

function createParticle(){

const particle =
document.createElement("span");



particle.classList.add(
    "particle"
);



let size =
Math.random() * 8 + 3;



particle.style.width =
size + "px";


particle.style.height =
size + "px";



particle.style.left =
Math.random()*100 + "%";



particle.style.animationDuration =
Math.random()*10 + 5 + "s";



particle.style.opacity =
Math.random();



particlesContainer.appendChild(
    particle
);



setTimeout(()=>{


    particle.remove();


},
15000);

}

setInterval(
createParticle,
300
);

/* ==========================
ADD PARTICLE STYLE
========================== */

const particleStyle =
document.createElement("style");

particleStyle.innerHTML = `

.particle {

position:absolute;

bottom:-20px;

background:#ff7eb5;

border-radius:50%;

animation:
rise linear forwards;

box-shadow:
0 0 15px #ff7eb5;

}

@keyframes rise{

0%{

transform:
translateY(0)
scale(1);

}

100%{

transform:
translateY(-110vh)
scale(0);

}

}

`;

document.head.appendChild(
particleStyle
);

/* ==========================
SCROLL REVEAL
========================== */

const revealElements =
document.querySelectorAll(
".reveal"
);

function revealOnScroll(){

revealElements.forEach(
element=>{


    const position =
    element.getBoundingClientRect()
    .top;


    const screen =
    window.innerHeight;



    if(position <
    screen - 100){


        element.style.opacity =
        "1";


        element.style.transform =
        "translateY(0)";


    }


});

}

window.addEventListener(
"scroll",
revealOnScroll
);

revealOnScroll();

/* ==========================
CUSTOM CURSOR EFFECT
========================== */

const cursor =
document.createElement("div");

cursor.className =
"custom-cursor";

document.body.appendChild(
cursor
);

const cursorStyle =
document.createElement("style");

cursorStyle.innerHTML = `

.custom-cursor{

position:fixed;

width:20px;

height:20px;

border-radius:50%;

background:
rgba(255,79,152,.35);

pointer-events:none;

transform:
translate(-50%,-50%);

z-index:9999;

transition:
width .2s,
height .2s;

}

a:hover ~ .custom-cursor{

width:40px;

height:40px;

}

`;

document.head.appendChild(
cursorStyle
);

document.addEventListener(
"mousemove",
(e)=>{

cursor.style.left =
e.clientX+"px";

cursor.style.top =
e.clientY+"px";

});

/* ==========================
BUTTON CLICK EFFECT
========================== */

const buttons =
document.querySelectorAll(
".social, .tags span"
);

buttons.forEach(button=>{

button.addEventListener(
"click",
()=>{

button.style.transform =
"scale(.9)";

setTimeout(()=>{

button.style.transform =
"";

},150);

});

});

/* ==========================
DYNAMIC YEAR
========================== */

const footerYear =
document.querySelector(
"footer p"
);

if(footerYear){

const year =
new Date()
.getFullYear();

footerYear.textContent =
"© " + year + " #r3aper";

}