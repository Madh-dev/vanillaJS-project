const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function(){
    const randomNumber = getRandomNumber();
    // console.log(randomNumber);
    let hexColor = "#"
    for(i=0; i < 6; i++){
        hexColor += hex[randomNumber[i]];
    }
    document.body.style.backgroundColor = hexColor;
    color.textContent = hexColor;
})

function getRandomNumber(){
let colo = [];
    for(i=0; i < 6; i++){
        const randomIndex = Math.floor(Math.random() * hex.length);
        colo.push(randomIndex);
    }
    // console.log(colo);
    return colo;
}