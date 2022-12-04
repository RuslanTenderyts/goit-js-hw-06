const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];


const imagesEL = ({url, alt}) => {
  
  return ` <li class = 'item_task3'>
    <img 
      src = ${url} 
      alt = ${alt} 
      class ="img_task3"
    />  
  </li>`
}

const galaryEl = document.querySelector('.gallery');
const makeGalery = images.map(imagesEL).join('');

galaryEl.insertAdjacentHTML('beforeend', makeGalery);
galaryEl.classList.add('list_task3');


