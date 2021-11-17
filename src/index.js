import './styles/main.css';

const galleryItems = [
  {
    image: '',
    text: 'this is some subtext under an illustration or image'
  },
  {
    image: '',
    text: 'this is some subtext under an illustration or image'
  },
  {
    image: '',
    text: 'this is some subtext under an illustration or image'
  },
  {
    image: '',
    text: 'this is some subtext under an illustration or image'
  }
];

const gallery = document.querySelector('.gallery__container');

galleryItems.forEach(item => {
  gallery.insertAdjacentHTML('beforeend', `
    <div class="gallery__item">
      <img class="gallery__image" src=${item.image} alt="" />
      <p class="gallery__description">${item.text}</p>
    </div>
  `)
});