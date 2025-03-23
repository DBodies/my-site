import { toggleLanguage } from "./js/btnLanguageSwitcher";
import iziToast from "izitoast";
import 'izitoast/dist/css/iziToast.min.css';

window.addEventListener('DOMContentLoaded', () => {
  iziToast.info({
    title: 'U can select language',
    message: '',  // сообщение без текста (чисто заголовок)
    position: 'topCenter', // Позиция на экране
    timeout: 3000,
    class: 'custom-toast'// Время отображения сообщения в миллисекундах (3 секунды)
  });
});



window.addEventListener('DOMContentLoaded', () => {
  toggleLanguage()
  
  function loadComponent(id, file) {
    fetch(file)
      .then(response => response.text())
      .then(html => {
      document.getElementById(id).innerHTML = html
      })
    .catch(err => console.log('Ошибка загрузки', err))
  }
    loadComponent('header', './src/components/header.html');
  loadComponent('firstSection', './src/components/firstSection.html');
  loadComponent('secondSection', './src/components/secondSection.html');
  loadComponent('thirdSection', './src/components/thirdSection.html');
  loadComponent('fourthSection', './src/components/fourthSection.html');
  loadComponent('fifthSection', './src/components/fifthSection.html');
  loadComponent('sixthSection', './src/components/sixthSection.html');
  loadComponent('footer', './src/components/footer.html');
});

