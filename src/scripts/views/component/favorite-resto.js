class FavoriteResto extends HTMLElement {
  connectedCallback() {
    this._render();
  }

  _render() {
    this.innerHTML = `
      <div class="empty-favorite-img">
        <picture>
          <source media="(max-width: 650px)" srcset="./images/favorite/favorite-empty-small.png">
          <source media="(max-width: 900px)" srcset="./images/favorite/favorite-empty-medium.png">
          <img src="./images/favorite/favorite-empty-large.png" alt="Halaman favorite kosong">
        </picture>
      </div>

      <div class="empty-favorite-tag">
        <p>Yah, restoran favoritmu masih kosong nih &#128549;</p>
      </div>
    `;
  }
}

customElements.define('favorite-resto', FavoriteResto);
