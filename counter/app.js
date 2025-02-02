//value and buttons from dom
const value = document.querySelector('.value');
const btns = document.querySelectorAll('.btn');

//set initial value to zero;
let count = 0;

btns.forEach((btn)=>{
    btn.addEventListener('click',(e)=>{
        const styles = e.currentTarget.classList;
        if(styles.contains('btn-decrease')){
            count--;
        } else if(styles.contains('btn-increase')){
            count++;
        } else {
            count = 0;
        }
        if (count < 0){
            value.style.color = 'red';
        } else if ( count > 0){
            value.style.color = 'green';
        } else {
            value.style.color = "#333";
        }
        value.textContent = count;
    })
});