//
// Typing animation
//

const typing = document.getElementById("typing");


const words = [
    "Creative Coder",
    "Frontend Engineer",
    "UI Enthusiast",
    "Problem Solver"
];


let wordIndex = 0;
let charIndex = 0;
let deleting = false;



function typeEffect(){


    const currentWord = words[wordIndex];


    if(!deleting){

        typing.textContent =
        currentWord.substring(
            0,
            charIndex++
        );


        if(charIndex > currentWord.length){

            deleting = true;

            setTimeout(typeEffect,1500);

            return;

        }


    }else{


        typing.textContent =
        currentWord.substring(
            0,
            charIndex--
        );


        if(charIndex < 0){

            deleting = false;

            wordIndex =
            (wordIndex + 1) % words.length;

        }


    }



    setTimeout(
        typeEffect,
        deleting ? 50 : 100
    );


}


typeEffect();









//
// Custom cursor
//


const cursor =
document.querySelector(".cursor");


document.addEventListener(
"mousemove",
(e)=>{


cursor.style.left =
e.clientX + "px";


cursor.style.top =
e.clientY + "px";



});







//
// Avatar eyes tracking
//


const eyes =
document.querySelectorAll(".eye");



document.addEventListener(
"mousemove",
(e)=>{


eyes.forEach(
eye=>{


const rect =
eye.getBoundingClientRect();



const x =
rect.left + rect.width / 2;


const y =
rect.top + rect.height / 2;



const angle =
Math.atan2(
e.clientY-y,
e.clientX-x
);



const distance = 6;



eye.style.transform =
`
translate(
${Math.cos(angle)*distance}px,
${Math.sin(angle)*distance}px
)
`;



});


});









//
// Scroll reveal
//



const revealElements =
document.querySelectorAll(".reveal");



const observer =
new IntersectionObserver(
(entries)=>{


entries.forEach(
entry=>{


if(entry.isIntersecting){

entry.target.classList.add(
"active"
);


}


});


},
{

threshold:.15

});



revealElements.forEach(
element=>{

observer.observe(element);

});









//
// Background parallax
//



const background =
document.querySelector(".background");



document.addEventListener(
"mousemove",
(e)=>{


const x =
(e.clientX / window.innerWidth - .5)
* 30;



const y =
(e.clientY / window.innerHeight - .5)
* 30;



background.style.transform =
`
translate(
${x}px,
${y}px
)
`;



});









//
// Magnetic buttons
//


const buttons =
document.querySelectorAll(".btn");



buttons.forEach(
button=>{


button.addEventListener(
"mousemove",
(e)=>{


const rect =
button.getBoundingClientRect();



const x =
e.clientX - rect.left - rect.width/2;


const y =
e.clientY - rect.top - rect.height/2;



button.style.transform =
`
translate(
${x*.15}px,
${y*.15}px
)
`;



});





button.addEventListener(
"mouseleave",
()=>{


button.style.transform =
"translate(0,0)";


});


});









//
// Project card tilt
//



const cards =
document.querySelectorAll(
".project-card,.skill-card"
);



cards.forEach(card=>{


card.addEventListener(
"mousemove",
(e)=>{


const rect =
card.getBoundingClientRect();


const x =
e.clientX - rect.left;


const y =
e.clientY - rect.top;



const rotateX =
(y - rect.height/2)/20;


const rotateY =
(rect.width/2 - x)/20;



card.style.transform =
`
perspective(700px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
translateY(-10px)
`;



});





card.addEventListener(
"mouseleave",
()=>{


card.style.transform =
"translateY(0)";


});


});









//
// Smooth mobile menu preparation
//


const menu =
document.querySelector(".menu");



const nav =
document.querySelector("nav");



if(menu){


menu.addEventListener(
"click",
()=>{


nav.classList.toggle(
"open"
);


});


}