var main = document.querySelector(".main");
var cursur = document.querySelector(".cursur");
var mid = document.querySelector(".layer");
var Image = document.querySelector(".cursur img");


main.addEventListener("mousemove", (e)=>{
  gsap.to(cursur, {
    top: `${e.clientY}px`,
    left: `${e.clientX}px`,
    duration: 0.7,

  })
})

mid.addEventListener("mouseenter", (e) => {
  Image.src = "./doller5.jpg"; 
  gsap.to(Image, {
    width: "150px", 
    height: "100px", 
    duration: 0.5,   
    
  });
  
});
mid.addEventListener("mouseleave", (e) => {

  Image.src = "./cursur.png"; 
  gsap.to(Image, {
    width: "40px", 
    height: "40px", 
    duration: 0.5,   
   
  });
 
});