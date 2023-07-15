import '../component/resto-list';
import RestaurantData from '../../data/restaurant-source';
import { createPageLoaderTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    document.title = 'My Hungry | Homepage';

    const html = `
      ${document.querySelector('main').innerHTML = createPageLoaderTemplate.show()}
      <!-- Jumbotron -->
      <hero-image></hero-image>
      
      <section class="content">
        <div class="content-inner">
          <h1>Cari Rumah Makan dan Restoran</h1>
          <div id="list">
            <resto-list class="content-list"></resto-list>
          </div>
        </div>
      </section>
    `;

    return html;
  },

  async afterRender() {
    const restaurantContainer = document.querySelector('resto-list');
    const { restaurants } = await RestaurantData.listRestaurants();

    restaurantContainer.value = restaurants;
    createPageLoaderTemplate.remove();
  },
};

export default Home;
