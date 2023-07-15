import '../component/resto-list';
import '../component/favorite-resto';
import FavoriteRestaurantIdb from '../../data/fav-restaurant-idb';
import { createPageLoaderTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    document.title = 'My Hungry | Favorite';

    const html = `
      ${document.querySelector('main').innerHTML = createPageLoaderTemplate.show()}
      <section class="content" id="content">
        <div class="content-inner">
          <h1>Favorite Restaurant</h1>
          <div id="favs">
            <resto-list class="content-list"></resto-list>
          </div>
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
      document.querySelector('#favs').innerHTML = '<favorite-resto></favorite-resto>';
    }

    createPageLoaderTemplate.remove();
  },
};

export default Favorite;
