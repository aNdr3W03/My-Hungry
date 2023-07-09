import '../component/resto-list';
import '../component/favorite-resto';
import FavoriteRestaurantIdb from '../../data/fav-restaurant-idb';
import { createPageLoaderTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    const html = `
      ${document.querySelector('main').innerHTML = createPageLoaderTemplate.show()}
      <section class="content" id="content">
        <h1 class="content-title">Favorite Restaurant</h1>
        <div class="posts" id="posts">
          <resto-list></resto-list>
        </div>
      </section>
    `;

    return html;
  },

  async afterRender() {
    const restoContainer = document.querySelector('resto-list');
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();

    if (restaurants.length > 0) {
      restoContainer.value = restaurants;
    } else {
      document.querySelector('#posts').innerHTML = '<favorite-resto></favorite-resto>';
    }

    createPageLoaderTemplate.remove();
  },
};

export default Favorite;
