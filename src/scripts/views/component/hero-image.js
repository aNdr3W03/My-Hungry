class HeroImage extends HTMLElement {
  connectedCallback() {
    this._render();
  }

  _render() {
    this.innerHTML = `
      <div class="hero">
        <div class="hero-content">
          <h1 class="hero-title">My Hungry</h1>
          <p class="hero-subtitle">Lapan kan? Cari rumah makan dan restoran terbaik dan ramah di kantong sekarang juga!</p>
        </div>
      </div>
    `;
  }
}

customElements.define('hero-image', HeroImage);
