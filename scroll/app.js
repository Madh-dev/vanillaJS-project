const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear();

// Sticky Navbar
const navbar = document.getElementById('nav');
const topLink = document.getElementsByClassName('top-link');
const linksContainer = document.querySelector('.links-container');
const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');

const navHeight = navbar.getBoundingClientRect().height;


window.addEventListener('scroll', ()=>{
const scrollHeight = window.scrollY;
// const sticky = navbar.offsetTop;

// console.log(scrollHeight,sticky,navHeight);
    if(scrollHeight > navHeight){
        navbar.classList.add('fixed-nav') 
    }
    else{
        navbar.classList.remove('fixed-nav');
    }
    if(scrollHeight > 500)  {
        topLink[0].classList.add('show-link');
     } 
     else {
    topLink[0].classList.remove('show-link');
    }
});

navToggle.addEventListener('click', ()=>{
    // linksContainer.classList.toggle('show-links');
    const linksHeight = links.getBoundingClientRect().height;
    const containerHeight = linksContainer.getBoundingClientRect().height;
    containerHeight === 0 ? linksContainer.style.height = `${linksHeight}px`:
    linksContainer.style.height = 0;
});

const scrollLinks = document.querySelectorAll('.scroll-link');
scrollLinks.forEach((link)=>{

    link.addEventListener('click',(e)=>{
        e.preventDefault();
        const id =  link.getAttribute('href').slice(1);
        const linkHref = document.getElementById(id);
        const fixedNav = navbar.classList.contains('fixed-nav');
        const containerHeight = linksContainer.getBoundingClientRect().height;
        let position = linkHref.offsetTop - navHeight;
        if(!fixedNav){
            position = position - navHeight;
        }
        if(navHeight > 82){
            position = position + containerHeight
        }

        window.scrollTo({
            left:0,
            top: position
        });
        linksContainer.style.height = 0;
        // console.log(linkHref.offsetTop,navHeight,containerHeight,position);
    })
})