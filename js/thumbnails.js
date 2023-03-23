import { createPhotos } from './data.js';
import { openBigPicture } from './big-picture.js';

const thumbnailTemplate = document.querySelector('#picture').content.querySelector('.picture');
const container = document.querySelector('.pictures');
const data = createPhotos();


const createThumbnail = (item) => {
  const thumbnail = thumbnailTemplate.cloneNode(true);

  thumbnail.querySelector('.picture__img').src = item.url;
  thumbnail.querySelector('.picture__comments').textContent = item.comments.length;
  thumbnail.querySelector('.picture__likes').textContent = item.likes;
  thumbnail.addEventListener('click', (evt) => {
    evt.preventDefault();
    openBigPicture(item);
  });
  return thumbnail;
};

const renderThumbnails = () => data.forEach((item) => container.append(createThumbnail(item)));

export { renderThumbnails };
