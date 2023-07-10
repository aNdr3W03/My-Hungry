class NavBar extends HTMLElement {
  connectedCallback() {
    this._render();
  }

  _render() {
    this.innerHTML = `
      <!-- Navbar Mobile -->
      <div class="menu-mobile">
        <div class="icon-menu" id="menu"><a href="#">&#9776;</a></div>
        <div class="logo-mobile"><a href="">My Hungry</a></div>
        <div class="logo-mobile">&nbsp;</div>
      </div>
      <nav class="navbar-mobile" id="drawer">
        <ul class="navbar-list-mobile">
          <li class="navbar-item-mobile"><a href="#">Home</a></li>
          <li class="navbar-item-mobile"><a href="#/favorite">Favorite</a></li>
          <li class="navbar-item-mobile"><a href="https://www.linkedin.com/in/andrewbjamesie" target="_blank" rel="noopener">About Us</a></li>
        </ul>
      </nav>
    
      <!-- Navbar Desktop -->
      <nav class="navbar-desktop">
        <a href="" class="logo">My Hungry</a>
        <ul class="navbar-list-desktop">
          <li class="navbar-item-desktop"><a href="#">Home</a></li>
          <li class="navbar-item-desktop"><a href="#/favorite">Favorite</a></li>
          <li class="navbar-item-desktop"><a href="https://www.linkedin.com/in/andrewbjamesie" target="_blank" rel="noopener">About Us</a></li>
        </ul>
      </nav>
    `;
  }
}

customElements.define('nav-bar', NavBar);
