import FavoriteRestaurantIdb from '../data/fav-restaurant-idb';
import {
  createLikeButtonTemplate, createUnlikeButtonTemplate,
  createSuccessFavoriteNotification, createRemoveFavoriteNotification,
} from '../views/templates/template-creator';

const LikeButtonInitiator = {
  async init({ likeButtonContainer, notificationContainer, restaurant }) {
    this._likeButtonContainer = likeButtonContainer;
    this._notificationContainer = notificationContainer;
    this._restaurant = restaurant;

    await this._renderButton(this._restaurant);
  },

  async _renderButton(restaurant) {
    const { id } = restaurant;

    if (await this._restaurantExist(id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },

  async _restaurantExist(id) {
    const restaurant = await FavoriteRestaurantIdb.getRestaurant(id);
    return !!restaurant;
  },

  _renderLike() {
    this._likeButtonContainer.innerHTML = createLikeButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      FavoriteRestaurantIdb.putRestaurant(this._restaurant);
      this._renderButton(this._restaurant);

      this._notificationContainer.innerHTML = createSuccessFavoriteNotification.show();
      createSuccessFavoriteNotification.remove();
    });
  },

  _renderLiked() {
    this._likeButtonContainer.innerHTML = createUnlikeButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      FavoriteRestaurantIdb.deleteRestaurant(this._restaurant.id);
      this._renderButton(this._restaurant);

      this._notificationContainer.innerHTML = createRemoveFavoriteNotification.show();
      createRemoveFavoriteNotification.remove();
    });
  },
};

export default LikeButtonInitiator;
