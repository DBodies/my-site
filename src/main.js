window.addEventListener('DOMContentLoaded', () => {
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

