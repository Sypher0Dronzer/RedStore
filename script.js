let navItems=document.querySelector('.nav-items')
let menu= document.querySelector(".menu")
let navbar =document.querySelector(".navbar")
function menuToggle(){
    if(navItems.style.opacity=='0')
    {
        navItems.style.opacity='1'
        menu.style.transform='rotate(90deg)'
        navItems.style.height='auto'
        navItems.style.padding='1rem 1rem'



    }
    else{
        navItems.style.opacity='0'
        menu.style.transform='rotate(0deg)'
        navItems.style.height=0
        navItems.style.padding='0rem 1rem'

    }   
    

}
// --------------Product Details-------------
let productImg=document.getElementById('productImg');
let smallImgs = document.getElementsByClassName("small-prod-img")
for(let i=0; i<smallImgs.length; i++){
    smallImgs[i].onclick = function(){
        productImg.src = smallImgs[i].src 
    }
}

// ----------------login scroll-------------
let loginForm=document.querySelector('.login-form')
let regisForm=document.querySelector('.register-form')
let indicator = document.getElementById('indicator')
function login(){
    loginForm.style.transform = "translateX(0px)"
    regisForm.style.transform = "translateX(300px)"
    indicator.style.transform = "translateX(30px)"
}
function register(){
    loginForm.style.transform = "translateX(-300px)"
    regisForm.style.transform = "translateX(0px)"
    indicator.style.transform = "translateX(120px)"

}



// preloader
const preloader = document.querySelector(".preloader");

window.addEventListener("load", function () {
  preloader.classList.add("hide-preloader");
});