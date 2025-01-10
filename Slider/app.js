const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".nextBtn");
const prevBtn = document.querySelector(".prevBtn");

slides.forEach(function (slide, index) {
    slide.style.left = `${index * 100}%`;
});
let counter = 0;
nextBtn.addEventListener('click',()=>{
    counter++;
    // console.log(counter);
    carousel();
});

prevBtn.addEventListener('click', ()=>{
    counter--;
    carousel(); 
});

const carousel = ()=>{
    if(counter > slides.length -1){
        nextBtn.style.display = 'none';
    } else {
        nextBtn.style.display = 'block';
    }
    if(counter > 0){
        prevBtn.style.display = 'block';
    }else{
        prevBtn.style.display = 'none';
    }
    slides.forEach(function(slide){
        slide.style.transform = `translateX(-${counter * 100}%)`;
        console.log(counter * 100);
    });
}
window.addEventListener('load',carousel());