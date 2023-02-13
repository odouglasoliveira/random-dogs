import "./style.css";

const button = document.querySelector('#dog-button');
const imageDisplay = document.querySelector('.image-display')

const generateRandomImage = (callback) => {
  const URL = 'https://random.dog/woof.json';
  return fetch(URL).then((response) => response.json()).then((data) => callback(data));
};

const insertImage = ({ url }) => {
  const img = document.createElement('img');
  img.src = url;
  img.classList.add('image');
  imageDisplay.innerHTML = '';
  imageDisplay.appendChild(img);
}

button.addEventListener('click', () => {
  generateRandomImage(insertImage)
});