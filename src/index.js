import './styles/main.css';

const galleryItems = [
  {
    image: '',
    text: 'this is some subtext under an illustration or image',
  },
  {
    image: '',
    text: 'this is some subtext under an illustration or image',
  },
  {
    image: '',
    text: 'this is some subtext under an illustration or image',
  },
  {
    image: '',
    text: 'this is some subtext under an illustration or image',
  },
];

const gallery = document.querySelector('.gallery__container');

galleryItems.forEach((item) => {
  gallery.insertAdjacentHTML(
    'beforeend',
    `
      <div class="gallery__item">
        <img class="gallery__image" src="${item.image}" alt="" />
        <p class="gallery__description">${item.text}</p>
      </div>
    `,
  );
});

const logoContent = `
  <svg height="300px" width="300px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M57.77,37.33,46.47,49.21l-9.34-5.79L18,66H39.12a10.22,10.22,0,1,1,20.44,0H82Z"/><polygon points="53.74 39.48 47.53 33.98 39.83 43.4 46.23 47.37 53.74 39.48"/></svg>
  <p>Lairbnb</p>
`;

const logoContainer = document.querySelectorAll('.logo');
logoContainer.forEach((element) =>
  element.insertAdjacentHTML('afterbegin', logoContent),
);
