const menu=document.getElementById("menu-bar")
const navbar=document.querySelector(".main-navbar")
const closeicon=document.getElementById("close")
menu.onclick=()=>{
    
    navbar.classList.toggle("navopen");
    menu.classList.toggle("bx-window-close");

// const navlink= document.querySelectorAll('.nav_link');
// const sectionEls= document.querySelectorAll('.section');
// let currentSection='home'
// window.addEventListener('scroll',()=>{
//     sectionEls.forEach(sectionEl=> {
// if(window.scrollY >= sectionEl.offsetTop){
//             currentSection=sectionEl.id;
//         }
//     });
//     navlink.forEach(navlink=>{
//         if(navlink.href.includes(currentSection)){
//         navlink.classList.add('active');
//     }
// });
// });