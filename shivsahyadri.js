let ham=document.querySelector(".hamburger");
let aside=document.querySelector("aside");
let x =document.querySelector(".close");
let body=document.querySelector("body");
ham.addEventListener("click",function(){
    aside.style.transform="translateX(0px)";
    body.classList.add("hidden");
});
x.addEventListener("click",function(){
    aside.style.transform="translateX(-200px)";
    body.classList.remove("hidden");
    
});