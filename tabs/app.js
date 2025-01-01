const tabBtns = document.querySelectorAll('.tab-btn');
const contents = document.querySelectorAll('.content');

// tabBtns.forEach(tabBtn=>{
//     tabBtn.addEventListener('click',()=>{
//         const id = tabBtn.dataset.id;
//         // console.log(tabBtnClicked,tabBtn);
//         if (id){
//             tabBtns.forEach(tab=>{
//                 tab.classList.remove('active');
//                 // console.log(tab,tab.classList)
//             });
//             contents.forEach(content=>{
//                 content.classList.remove('active');
//             })
//             // console.log(tabBtn.classList)
//             const contentElement = document.getElementById(id);
//             tabBtn.classList.add('active');
//             contentElement.classList.add('active');

//         }
//     })
// });

const about = document.querySelector(".about");
about.addEventListener("click", function (e) {
    const id = e.target.dataset.id;
    if (id) {
      // remove selected from other buttons
      tabBtns.forEach(function (btn) {
        btn.classList.remove("active");
      });
      e.target.classList.add("active");
      // hide other articles
      contents.forEach(function (article) {
        article.classList.remove("active");
      });
      const element = document.getElementById(id);
      element.classList.add("active");
    }
  });