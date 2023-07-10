import CONFIG from '../../globals/config';

class RestoItem extends HTMLElement {
  set value(data) {
    this._data = data;
    this._render();
  }

  _render() {
    this.innerHTML = `
      <article class="content-list-item">
        <img class="content-list-item-img" loading="lazy" src="${CONFIG.BASE_IMAGE_URL.MEDIUM + this._data.pictureId}" alt="${this._data.name}" title="${this._data.name}">
        <span class="content-list-item-city">${this._data.city}</span>
        <p class="content-list-item-rating">⭐ ${this._data.rating}</p>
        <div class="content-list-item-detail">
          <h1 class="content-list-item-title"><a href="/#/detail/${this._data.id}">${this._data.name}</a></h1>
          <div class="content-list-item-desc">${this._data.description.slice(0, 150)}...</div>
        </div>
      </article>
    `;
  }
}

customElements.define('resto-item', RestoItem);
