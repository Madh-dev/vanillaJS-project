function getElement(selection){
    const element = document.querySelector(selection);
    if(element) return element;
    throw new Error('no element selected or not found');
}

export default getElement;