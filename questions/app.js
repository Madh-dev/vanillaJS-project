//using selectors inside the element
const questions = document.querySelectorAll(".question");

questions.forEach((question)=>{
    // console.log(question);
const btn = question.querySelector('.question-btn');
// console.log(btn);
btn.addEventListener('click', ()=>{
    // console.log(question);
    questions.forEach((item)=>{
        if(item !== question){
            item.classList.remove('show-text');
        };
    })
    question.classList.toggle('show-text');
})
})