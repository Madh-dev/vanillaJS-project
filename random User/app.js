import getElement from "./utils/getElement.js";
import fetchUser from "./utils/fetchUser.js";
import displayUser from "./utils/displayUser.js";

const btn = getElement('.btn');

const showUser = async()=>{
    const person = await fetchUser();
    displayUser(person);
}
window.addEventListener('DOMContentLoaded', showUser);
btn.addEventListener('click', showUser);