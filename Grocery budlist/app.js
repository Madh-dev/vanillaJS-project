const form = document.querySelector(".grocery-form");
const alert = document.querySelector(".alert");
const grocery = document.getElementById("grocery");
const submitBtn = document.querySelector(".submit-btn");
const container = document.querySelector(".grocery-container");
const list = document.querySelector(".grocery-list");
const clearBtn = document.querySelector(".clear-btn");

// edit option
let editElement;
let editFlag = false;
let editID = "";


// ****** event listeners **********

// submit form
form.addEventListener("submit", addItem);
// clear list
clearBtn.addEventListener("click", clearItems);
// display items onload
window.addEventListener("DOMContentLoaded", setUpItems);


// ****** functions **********
// display alert
function displayAlert(text, action) {
    alert.textContent = text;
    alert.classList.add(`alert-${action}`);
    // remove alert
    setTimeout(function () {
      alert.textContent = "";
      alert.classList.remove(`alert-${action}`);
    }, 1000);
  }
  // set back to defaults
function setBackToDefault() {
    grocery.value = "";
    editFlag = false;
    editID = "";
    submitBtn.textContent = "submit";
  }
//add grocery Item to the list
function addItem(e){
    e.preventDefault();
    const value = grocery.value;
    // console.log(!editFlag);
    const id = new Date().getTime().toString();
    // console.log(id);
    if(value !== "" && !editFlag){
        const element = document.createElement('article');
        let attr = document.createAttribute('data-id');
        attr.value = id;
        element.setAttributeNode(attr);
        element.classList.add('grocery-item');
        element.innerHTML = `<p class="title">${value}</p>
                <div class="btn-container">
                  <!-- edit btn -->
                  <button type="button" class="edit-btn">
                    <i class="fas fa-edit"></i>
                  </button>
                  <!-- delete btn -->
                  <button type="button" class="delete-btn">
                    <i class="fas fa-trash"></i>
                  </button>
                </div>`
        //adding listeners to both buttons;
        const editBtn = element.querySelector('.edit-btn');
        editBtn.addEventListener('click', editItem);
        const deleteBtn = element.querySelector('.delete-btn');
        deleteBtn.addEventListener('click', deleteItem);
    
        //append child (adding the grocery to the bud list)
        list.appendChild(element);

        //display Alert
        displayAlert('item added to the list', 'success');
        //show container
        container.classList.add('show-container');
        // add to local storage
        addToLocalStorage(id,value);
        //set it back to default
        setBackToDefault();
    } else if(value !== '' & editFlag){
        editElement.innerHTML = value;
        displayAlert('value changed', 'success');
        //edit local storage
        editLocalStorage(editID,value);
        setBackToDefault();
    }else {
        displayAlert('please enter value', 'danger');
    }
    
}

// clear all items
function clearItems() {
    const items = document.querySelectorAll(".grocery-item");
    if (items.length > 0) {
      items.forEach(function (item) {
        list.removeChild(item);
      });
    }
    container.classList.remove("show-container");
    displayAlert("empty list", "danger");
    setBackToDefault();
    localStorage.removeItem("list");
  }
  // delete item

function deleteItem(e) {
    const element = e.currentTarget.parentElement.parentElement;
    const id = element.dataset.id;
  
    list.removeChild(element);
  
    if (list.children.length === 0) {
      container.classList.remove("show-container");
    }
    displayAlert("item removed", "danger");
  
    setBackToDefault();
    // remove from local storage
    removeFromLocalStorage(id);
  }
  // edit item
function editItem(e) {
    const element = e.currentTarget.parentElement.parentElement;
    // set edit item
    editElement = e.currentTarget.parentElement.previousElementSibling;
    // set form value
    grocery.value = editElement.innerHTML;
    editFlag = true;
    editID = element.dataset.id;
    //
    submitBtn.textContent = "edit";
  }
// ****** local storage **********

// add Item to local storage
function addToLocalStorage(id,value){
    const grocery = {id,value};
    let items = getLocalStorage();
    items.push(grocery);
    localStorage.setItem('list',JSON.stringify(items));
}
//get Item from the local storage
function getLocalStorage(){
    if(localStorage.getItem('list')){
        return JSON.parse(localStorage.getItem('list'))
    } 
    return [];
}
//remove Item from the local storage
function removeFromLocalStorage(id){
    let items = getLocalStorage();
    items = items.filter((item)=>{
        if(item !== id){
            return item;
        }
    });
    localStorage.setItem('list', JSON.stringify(items));
}
function editLocalStorage(id,value){
    let items = getLocalStorage();
    items = items.map((item)=>{
        if(item.id === id){
            item.value = value;
        }
        return item;
    });
    localStorage.setItem('list', JSON.stringify(items));
}

// ****** setup items **********

function createListItem(id,value){
    const element = document.createElement('article');
    let attr = document.createAttribute('data-id');
    attr.value = id;
    element.setAttributeNode(attr);
    element.classList.add('grocery-item');
    element.innerHTML = `<p class="title">${value}</p>
            <div class="btn-container">
              <!-- edit btn -->
              <button type="button" class="edit-btn">
                <i class="fas fa-edit"></i>
              </button>
              <!-- delete btn -->
              <button type="button" class="delete-btn">
                <i class="fas fa-trash"></i>
              </button>
            </div>`
    //adding listeners to both buttons;
    const editBtn = element.querySelector('.edit-btn');
    editBtn.addEventListener('click', editItem);
    const deleteBtn = element.querySelector('.delete-btn');
    deleteBtn.addEventListener('click', deleteItem);

    //append child (adding the grocery to the bud list)
    list.appendChild(element);

}
function setUpItems(){
    let items = getLocalStorage();
    items.forEach((item)=>{
        createListItem(item.id,item.value);
    });
    container.classList.add('show-container');
}