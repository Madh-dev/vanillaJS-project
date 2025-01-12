function getElement(selection) {
    const element = document.querySelector(selection);
    if (element) {
      return element;
    }
    throw new Error(
      `Please check "${selection}" selector, no such element exists`
    );
  }

  class Gallery{
    constructor(element){
        this.container = element;
        this.imgList = [...element.querySelectorAll('.img')];

        this.modal = getElement('.modal');
        this.modalImg = getElement('.main-img');
        this.imageName = getElement('.image-name');
        this.modalImgs = getElement('.modal-images');
        this.closeBtn = getElement('.close-btn');
        this.prevBtn = getElement('.prev-btn');
        this.nextBtn = getElement('.next-btn');

        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.prevImg = this.prevImg.bind(this);
        this.nextImg = this.nextImg.bind(this);
        this.chooseImg = this.chooseImg.bind(this);

        this.container.addEventListener('click',(e)=>{
            console.log(e.target, this.imgList);
            if(e.target.classList.contains('img')){
                this.openModal(e.target, this.imgList)
            }
        })
    }
    openModal(selectedImg,imgList){
        this.setMainImg (selectedImg);
        this.modalImgs.innerHTML = imgList.map((img)=>{
            return `<img
                        src="${img.src}"
                        title="${img.title}"
                        data-id="${img.dataset.id}"
                        class="${selectedImg.dataset.id === img.dataset.id ? 'modal-img selected' : 'modal-img'}"
                    />`
        }).join('');
        this.modal.classList.add('open');
        this.closeBtn.addEventListener('click', this.closeModal);
        this.nextBtn.addEventListener('click', this.nextImg);
        this.prevBtn.addEventListener('click', this.prevImg);
        this.modalImgs.addEventListener('click', this.chooseImg);
    }
    setMainImg(selectedImg){
        this.modalImg.src = selectedImg.src;
        this.imageName.textContent = selectedImg.title;
    }
    closeModal(){
        this.modal.classList.remove('open');
        this.closeBtn.removeEventListener('click', this.closeModal);
        this.nextBtn.removeEventListener('click', this.nextImg);
        this.prevBtn.removeEventListener('click', this.prevImg);
        this.modalImgs.removeEventListener('click', this.chooseImg);
    }
    chooseImg(e){
        if(e.target.classList.contains('modal-img')){
            const selected = this.modalImgs.querySelector('.selected');
            selected.classList.remove('selected');

            this.setMainImg(e.target);
            e.target.classList.add('selected')
        }
    }
    nextImg(){
        const selected = this.modalImgs.querySelector('.selected');
        const next = selected.nextElementSibling || this.modalImgs.firstElementChild;
        selected.classList.remove('selected');
        next.classList.add('selected');
        this.setMainImg(next);
    }
    prevImg(){
        const selected = this.modalImgs.querySelector('.selected');
        const next = selected.previousElementSibling || this.modalImgs.lastElementChild;
        selected.classList.remove('selected');
        next.classList.add('selected');
        this.setMainImg(next);
    }

}

const nature = new Gallery(getElement('.nature'));

  //why setMainImg not bind
  //why adding removeEventListener in the closemodal function, if not added what will happened