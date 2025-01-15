# RANDOM USER PROJECT

### HTML STRUCTURE
- div.block.bcg-black
- div.block

- div.block
    - img
    - p.user.title 
    - p.user.value
    - div.values-list
        - btn.icon data-label.name
            - span.far.fa-user
        - btn.icon data-label.email
            - span.far.fa-envelope-open
        - btn.icon data-label.age
            - span.far.fa-calendar-times
        - btn.icon data-label.street
            - span.far.fa-map
        - btn.icon data-label.phone
            - span.far.fa-phone
        - btn.icon data-label.password
            - span.far.fa-lock
        - btn.icon data-label.name
            - span.far.fa-user
    - btn.btn (random USer)

### JS STRUCTURE
- Utils folder
- app.js file

#### Utils
- ###### getElement.js
- add function to select element with querySelector()
- return element if it's an Element
- and throw Error if there isn't
- export the function
- ###### removeActive.js
- add function to remove class 'active' in all the btn
- pass items as as argument
- iterate the items and remove classlist active
- export the function
- ###### fetchUser.js
``` assign url with the api link
    let url = "let url = 'https://randomuser.me/api/';"
```
- create async function fetchUser
- handle the error well
- get and return first and last name, phone and email, age, image(large), street location (number and name),login password.
- export the function
- ###### displayUser.js
- import getElement.js and removeActive.js
- use getElement to get .user-img,.user-title,.user-value
-  get all the .icon with querySelectorAll and spread it as an array by assigning btns.
- create displayUser function and pass person as an argument
    - assign value  with person.name.
    - assign img source value with person.image.
    - assign user-title with `My name is`.
    - assign user-value with person.value.
    - pass btns as argument to removeActive function
    - add active class to the first btn
    - iterate btns
        - assign label wih btn.dataset.label.
        - add click event 
            - inside the click, assign user-title with `My ${label} is`.
            - assign user-value with person[label].
            - add btns as an argument to removeActive function
            - add class active to the btn clicked
- Export the displayUser.js
#### app.js
- import getElement.js, fetchUser.js and displayUser.js.
- use getElement to select .btn class from the DOM.
- create async showUser function 
    - assign person with await fetchUser().
    - then pass person as an argument in displayUser function
- add event DOMContentLoaded in the window with showUser function
- add click event to btn and pass showUser function as an argument
