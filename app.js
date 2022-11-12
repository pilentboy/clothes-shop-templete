// header
const showNavBTN=document.querySelector(".showNavBTN");
const closeNavBTN=document.querySelector(".closeNavBTN");
const nav=document.querySelector("#index .header .top .right");
const body=document.querySelector("#index");

showNavBTN.addEventListener("click",()=>{
    nav.classList.add("translateY0")
})

closeNavBTN.addEventListener("click",()=>{
    nav.classList.remove("translateY0")
    nav.classList.add("trasnition1s")
})

window.addEventListener("resize",()=>{
    if(body.clientWidth > 765){
        nav.classList.remove("translateY0")
        nav.classList.remove("trasnition1s")
    }
})


