import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';

// JSON Data Fetch
import ('../public/data/DATA.json').then(({default: jsonData}) => {
  console.log(jsonData);
  let data = jsonData['restaurants'];
  let dataList = '';

  data.forEach(function(data) {
    dataList += `
      <div class="content-list-item">
        <img class="content-list-item-img" src="${data['pictureId']}" alt="${data['name']}" title="${data['name']}">
        <div class="content-list-item-city">${data['city']}</div>
        <p class="content-list-item-rating">⭐ ${data['rating']}</p>
        <div class="content-list-item-detail">
          <h1 class="content-list-item-title"><a href="#">${data['name']}</a></h1>
          <div class="content-list-item-desc">${data['description'].slice(0, 150)}...</div>
        </div>
      </div>
    `;
  });

  document.querySelector('#list').innerHTML = dataList;
});

// Menu Event Listener
const menu = document.querySelector('#menu');
const drawer = document.querySelector('#drawer');
const hero = document.querySelector('.hero');
const main = document.querySelector('main');

menu.addEventListener('click', function(event) {
  drawer.classList.toggle('open');
  event.stopPropagation();
});

hero.addEventListener('click', function() {
  drawer.classList.remove('open');
});

main.addEventListener('click', function() {
  drawer.classList.remove('open');
});

// Footer Year Copyright
const footer_year = new Date().getFullYear();
document.getElementById('footer-year').innerHTML = footer_year;
