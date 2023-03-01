const checkStringLength = (string, length) => string.length <= length;


const isPalidrome = (string) => {
  string = string.toLowerCase().replaceAll(' ', '');
  return string === string.split('').reverse('').join('');
};


const extractNumber = (string) => parseInt(String(string).replace(/\D/g, ''), 10);


const createString = (string, length, pad) => {
  while (string.length < length) {
    string = pad.slice(0, length - string.length) + string;
  }
  return string;
};
