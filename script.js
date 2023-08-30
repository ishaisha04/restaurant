const menu=document.getElementById("menu-bar")
const navbar=document.querySelector(".main-navbar")
menu.onclick=()=>{
    
    navbar.classList.toggle("navopen");
}
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