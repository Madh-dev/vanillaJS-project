import get from './getElement.js';
import removeActive from './removeActive.js';

const img = get('.user-img');
const title = get('.user-title');
const value = get('.user-value');
const btns = [...document.querySelectorAll('.icon')];

export default function displayUser(person){
    value.textContext = person.name;
    img.src = person.image;
    // console.log(person.name);
    title.textContent = `My name is`;
    value.textContent = person.name;
    removeActive(btns);
    btns[0].classList.add('active');
    btns.forEach(btn=>{
        const label = btn.dataset.label;
        btn.addEventListener('click',()=>{
            title.textContent = `My ${label} is`;
            value.textContent = person[label];
            removeActive(btns);
            btn.classList.add('active');
        })
    })
}