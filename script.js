

let menu=document.querySelector(".burger")
 let contact=document.querySelector(".contact")
 let link=document.querySelector(".link")
 let off=document.querySelector(".off")
let firstline=document.querySelector(".firstline")
let lastline=document.querySelector(".lastline")
let popup=document.querySelector(".popup")
  let body=document.getElementsByTagName("body")

  let overlay=document.querySelector(".overlay")
menu.addEventListener("click",function (){
      
      if (  link.style.display==="block"){
        link.style.display="none"
        off.style.opacity="1";
        firstline.style.transform="rotate(0deg)";
        lastline.style.transform="rotate(0deg)";
          }
         else{link.style.display="block";
          popup.style.display="block"
          overlay.style.display="block"
         off.style.opacity="0";
         firstline.style.transform="rotate(-32deg)";
         lastline.style.transform="rotate(30deg)";
         }     
})
let closebtn=document.querySelector(".close")
closebtn.addEventListener("click",function(){
  popup.style.display="none"
  overlay.style.display="none"
})

 link.addEventListener("click",function(){ 
      let x=window.matchMedia("(max-width:460px)");
       if(x.matches){ 
        link.style.display="none";
        off.style.opacity="1";
        firstline.style.transform="rotate(0deg)";
        lastline.style.transform="rotate(0deg)";
       }
 })

let btn = document.getElementById("abhi");
let para = document.querySelector(".hide")

btn.addEventListener("click", function () {
  if (para.style.display === "block") {
    para.style.display = "none";
    btn.innerText = "READ MORE";
  } else {
    para.style.display = "block";
    btn.innerText = "SHOW LESS";
  }
})

let btn2 = document.getElementById("btn2")
let twoimg=document.querySelector(".twoimg")

btn2.addEventListener("click",function(){
  if(twoimg.style.display==="flex" ){
    twoimg.style.display="none"
    btn2.innerText="READ MORE"
  }
  else {
    btn2.innerText = "SHOW LESS"
    twoimg.style.display="flex"
  }
})


let acc=document.querySelectorAll(".acc");
acc.addEventListener("click",function(){
  console.log(5);
})



















$('.responsive').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
   
  ]
});




