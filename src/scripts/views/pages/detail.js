import '../component/detail-resto';
import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/restaurant-source';
import { createPageLoaderTemplate } from '../templates/template-creator';

const Detail = {
  async render() {
    const html = `
      ${document.querySelector('main').innerHTML = createPageLoaderTemplate.show()}
      <section id="content">
        <div class="detail-container">
          <detail-resto></detail-resto>
        </div>
      </section>
    `;

    return html;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurantById = await RestaurantSource.detailRestaurant(url.id);

    const detailContainer = document.querySelector('detail-resto');
    detailContainer.value = restaurantById.restaurant;

    createPageLoaderTemplate.remove();
  },
};

export default Detail;
