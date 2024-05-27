document.addEventListener("DOMContentLoaded", function() {
    const text1 = document.getElementById("text1");
    const text2 = document.getElementById("text2");
  
    setInterval(function() {
      if (text1.style.opacity === "0") {
        text1.style.opacity = "1";
        text2.style.opacity = "0";
        
      } else {
        text1.style.opacity = "0";
        text2.style.opacity = "1";       
         text1.style.translate


      }
    }, 4000);
  });
  const iniSlider=()=>{
    const imageList=document.querySelector(".slider-warpper .image-list");
    const sliderButtons=document.querySelectorAll(".slider-warpper .slider-button");
    sliderButtons.forEach(button => {
        button.addEventListener("click",()=>{
            const direction =button.id === "prev-slide" ? -1 : 1;
            const scrollAmount =imageList.clientWidth * direction;
            imageList.scrollBy({ left: scrollAmount, behavior:"smooth" });
        });
    });
}
window.addEventListener("load",iniSlider);
const iniSlider1=()=>{
  const imageList1=document.querySelector(".slider-warpper1 .image-list1");
  const sliderButtons1=document.querySelectorAll(".slider-warpper1 .slider-button1");
  sliderButtons1.forEach(button => {
      button.addEventListener("click",()=>{
          const direction =button.id === "prev-slide1" ? -1 : 1;
          const scrollAmount =imageList1.clientWidth * direction;
          imageList1.scrollBy({ left: scrollAmount, behavior:"smooth" });
      });
     
  });
}
window.addEventListener("load",iniSlider1);
const iniSlider2=()=>{
  const imageList2=document.querySelector(".slider-warpper2 .image-list2");
  const sliderButtons2=document.querySelectorAll(".slider-warpper2 .slider-button2");
  sliderButtons2.forEach(button => {
      button.addEventListener("click",()=>{
          const direction =button.id === "prev-slide2" ? -1 : 1;
          const scrollAmount =imageList2.clientWidth * direction;
          imageList2.scrollBy({ left: scrollAmount, behavior:"smooth" });
      });
     
  });
}
window.addEventListener("load",iniSlider2);

const iniSlider3=()=>{
  const imageList3=document.querySelector(".slider-warpper3 .image-list3");
  const sliderButtons3=document.querySelectorAll(".slider-warpper3 .slider-button3");
  sliderButtons3.forEach(button => {
      button.addEventListener("click",()=>{
          const direction =button.id === "prev-slide3" ? -1 : 1;
          const scrollAmount =imageList3.clientWidth * direction;
          imageList3.scrollBy({ left: scrollAmount, behavior:"smooth" });
      });
     
  });
}
window.addEventListener("load",iniSlider3);


const iniSlider4=()=>{
  const imageList4=document.querySelector(".slider-warpper4 .image-list4");
  const sliderButtons4=document.querySelectorAll(".slider-warpper4 .slider-button4");
  sliderButtons4.forEach(button => {
      button.addEventListener("click",()=>{
          const direction =button.id === "prev-slide4" ? -1 : 1;
          const scrollAmount =imageList4.clientWidth * direction;
          imageList4.scrollBy({ left: scrollAmount, behavior:"smooth" });
      });
     
  });
}
window.addEventListener("load",iniSlider4);
