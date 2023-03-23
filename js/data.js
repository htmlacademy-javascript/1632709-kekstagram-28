import { getRandomInteger, getRandomArrayElement } from './util.js';

const PICTURE_COUNT = 25;

const LIST_OF_COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];


const PHOTOS_DESCRIPTIONS = [
  'Смейтесь как только умеете, любите столько, сколько живете.',
  'Делайте в вашей жизни то, что меньше заставляет вас смотреть в свой телефон.',
  'Жизнь похожа на фотокамеру: вам просто нужно смотреть на нее с улыбкой.',
  'Мечтайте. Поверьте, в это. Добейтесь этого.',
  'Любите меня, от этого я буду сиять еще ярче.',
  'Я точно знаю, кто я, и я чертовски горжусь этим.',
];

const NAMES = [
  'Александр',
  'София',
  'Михаил',
  'Ева',
  'Артем',
  'Алиса',
];

let photoId = 1;
let commentId = 1;

const headsОrTails = [1, 0];

const createMessage = () => `${getRandomArrayElement(LIST_OF_COMMENTS)}${getRandomArrayElement(headsОrTails) ? ` ${getRandomArrayElement(LIST_OF_COMMENTS)}` : ''}`;

const createComment = () => {
  const comment = {
    id: commentId,
    avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
    message: createMessage(),
    name: getRandomArrayElement(NAMES),
  };

  commentId += 1;
  return comment;
};

const createPhoto = () => {
  const photo = {
    id: photoId,
    url: `photos/${photoId}.jpg`,
    description: getRandomArrayElement(PHOTOS_DESCRIPTIONS),
    likes: getRandomInteger(15, 200),
    comments: Array.from({length: getRandomInteger(1, 6)}, createComment),
  };

  photoId += 1;
  return photo;
};

const createPhotos = () => Array.from({length: PICTURE_COUNT}, createPhoto);

export {createPhotos};
