class FavoriteResto extends HTMLElement {
  connectedCallback() {
    this._render();
  }

  _render() {
    this.innerHTML = `
      <div class="empty-favorite-img">
        <img src="./images/favorite/favorite-empty.png" alt="Halaman favorite kosong">
      </div>

      <div class="empty-favorite-tag">
        <p>Yah, restoran favoritmu masih kosong nih &#128549;</p>
      </div>
    `;
  }
}

customElements.define('favorite-resto', FavoriteResto);
