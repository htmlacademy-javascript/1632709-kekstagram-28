import {openBigPicture} from './big-picture.js';
import {getData} from './api.js';
import {initFilter} from './filter.js';

const GET_URL = 'https://28.javascript.pages.academy/kekstagram/data';
const ERROR_TIMEOUT = 5000;
const thumbnailTemplate = document.querySelector('#picture').content.querySelector('.picture');
const container = document.querySelector('.pictures');

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

const renderThumbnails = (data) => {
  data.forEach((item) => container.append(createThumbnail(item)));
};

const onGetSuccess = (data) => {
  renderThumbnails(data);
  initFilter(data);
};

const onGetFail = () => {
  const errorBlock = document.createElement('div');
  errorBlock.style.position = 'fixed';
  errorBlock.style.top = '0';
  errorBlock.style.left = '0';
  errorBlock.style.width = '100%';
  errorBlock.style.height = '60px';
  errorBlock.style.color = 'red';
  errorBlock.style.textAlign = 'center';
  errorBlock.style.padding = '20px';
  errorBlock.style.backgroundColor = 'white';
  errorBlock.textContent = 'Произошла ошибка загрузки';
  document.body.append(errorBlock);

  setTimeout(() => {
    errorBlock.remove();
  }, ERROR_TIMEOUT);
};

const getPicturesData = () => getData(GET_URL, onGetSuccess, onGetFail);

export {getPicturesData, renderThumbnails};
