import { products } from "./products.js";

let filteredProducts = [...products];
const productsContainer = document.querySelector('.products-container');
const form = document.querySelector('.input-form');
const searchInput = document.querySelector('.search-input');
const companies = document.querySelector('.companies');

function displayProducts(){
    if(filteredProducts < 1){
        productsContainer.innerHTML = `<h6>Sorry, no products matched your search</h6>`;
        return;
    }
    const productsDisplay = filteredProducts.map(product=>{
        return `
        <!-- single product -->
            <article class="product">
                <img
                src="${product.image}"
                class="product-img img"
                alt=""
                data-id="${product.id}"
                />
                <footer>
                <h5 class="product-name">${product.title}</h5>
                <span class="product-price">${product.price}</span>
                </footer>
            </article>
        `
    }).join('');
    productsContainer.innerHTML = productsDisplay;
}
displayProducts();

//Text Filter
form.addEventListener('keyup',()=>{
    const inputValue = searchInput.value;
    filteredProducts = products.filter((product)=>{
        return product.title.toLowerCase().includes(inputValue.toLowerCase());
    });
    displayProducts()
});

//Display Filter Buttons
function displayButtons(){
    const btns = ['all',...new Set(products.map(product => product.company ))];

    companies.innerHTML = btns.map(company=>{
        return`
                <button class="company-btn" data-id="${company}">${company}</button>
            `
    }).join('');
}
displayButtons()

//Filter Based on Company

companies.addEventListener('click',(e)=>{
    const target = e.target;
    if(target.classList.contains('company-btn')){
        if(target.dataset.id === 'all'){
            filteredProducts = [...products];
        }else{
            filteredProducts = products.filter(product =>{
                return product.company === target.dataset.id;
            }
            )
        }
    }
    searchInput.value = '';
    displayProducts();
})
