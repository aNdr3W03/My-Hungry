import CONFIG from '../../globals/config';
import ReviewInitiator from '../../utils/review-initiator';
import LikeButtonInitiator from '../../utils/like-button-initiator';

class DetailResto extends HTMLElement {
  set value(data) {
    this._data = data;
    this._render();
    this._reviewInitiator();
    this._likeButtonInitiator();
  }

  _templateRating() {
    const rate = [];

    for (let i = 0; i < parseInt(Math.floor(this._data.rating), 10); i++) {
      rate.push('<i class="fas fa-star"></i>');
    }

    return rate;
  }

  _reviewInitiator() {
    ReviewInitiator.init({
      form: this.querySelector('#review-form'),
      container: this.querySelector('#review-container'),
    });
  }

  async _likeButtonInitiator() {
    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      notificationContainer: document.querySelector('#notif-favorite-container'),
      restaurant: this._data,
    });
  }

  _render() {
    this.innerHTML = `
      <div id="notif-favorite-container"></div>

      <article>
        <img src="${CONFIG.BASE_IMAGE_URL.LARGE + this._data.pictureId}" class="detail-image lazyload" loading="lazy" alt="${this._data.name}">
        <div id="likeButtonContainer"></div>
        <div class="detail-content">
          <h1 class="detail-title">${this._data.name}</h1>
          <div class="detail-category-container">
            ${this._data.categories.map((category) => `<span class="detail-category">${category.name}</span>`).join(', ')}
          </div>
          <i class="fas fa-map-marker-alt fa-lg"></i>
          <span class="detail-location">${this._data.address}, ${this._data.city}</span>
          <p class="detail-description">${this._data.description}</p> 
        </div>
      </article>

      <aside>
        <div class="detail-menu">
          <div class="menu-title-container">
            <i class="fas fa-pizza-slice fa-lg"></i>
            <h2 class="menu-title">Makanan</h2>
          </div>
          <ul class="menu-list">
            ${this._data.menus.foods.map((food) => `<li class="menu-item">${food.name}</li>`).join('')}
          <ul>
        </div>
        <div class="detail-menu">
          <div class="menu-title-container">
            <i class="fas fa-mug-hot fa-lg"></i>
            <h2 class="menu-title">Minuman</h2>
          </div>
          <ul class="menu-list">
            ${this._data.menus.drinks.map((drink) => `<li class="menu-item">${drink.name}</li>`).join('')}
          </ul>
        </div>
      </aside>

      <section>
        <div class="detail-rating">
          <span>Rating: ${this._data.rating}</span>    
          ${this._templateRating().map((item) => item).join('')}
        </div> 
        <h2>Apa Kata Pelanggan</h2>
        <div id="review-container">
          ${this._data.customerReviews.map((review) => `
          <div class="review-container">
            <div class="review-photo-profile">
              <img src="./images/user-default-small.jpg" class="lazyload" loading="lazy" alt="Foto profil pelanggan">
            </div>
            <div class="review-body">
              <h3 class="review-customer-name">${review.name}</h3>
              <small class="review-date-restaurant">${review.date}</small>
              <p class="review-content">${review.review}</p>
            </div>
          </div>
          `).join('')}
        </div>
        <div class="review-form-container">
          <h2>Berikan Ulasan</h2>
          <form class="review-form" id="review-form">
            <input type="hidden" name="id" value="${this._data.id}">
            <div class="review-form-element">
              <label for="name">Nama</label>
              <input type="text" name="name" id="name" autocomplete="off">
            </div>
            <div class="review-form-element">
              <label for="review">Ulasan</label>
              <textarea name="review" id="review"></textarea>
            </div>
            <button type="submit" id="button-review">Kirim Ulasan</button>
          </form>
        </div>
      </section>
    `;
  }
}

customElements.define('detail-resto', DetailResto);
