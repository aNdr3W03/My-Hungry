import * as TestFactories from './helpers/testFactories';
import FavoriteRestaurantIdb from '../src/scripts/data/fav-restaurant-idb';

describe('Liking A Restaurant', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = `
      <div id="notif-favorite-container"></div>
      <div id="likeButtonContainer"></div>
    `;
  };

  beforeEach(() => {
    addLikeButtonContainer();
  });

  it('should show the like button when the restaurant has not been liked before', async () => {
    await TestFactories.createLikeButtonInitiatorWithRestaurant({ id: 1 });

    expect(document.querySelector('[aria-label="like restaurant"]'))
      .toBeTruthy();
  });

  it('should not show the unlike button when the restaurant has not been liked before', async () => {
    await TestFactories.createLikeButtonInitiatorWithRestaurant({ id: 1 });

    expect(document.querySelector('[aria-label="unlike restaurant"]'))
      .toBeFalsy();
  });

  it('should be able to like the restaurant', async () => {
    await TestFactories.createLikeButtonInitiatorWithRestaurant({ id: 1 });

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));

    const restaurant = await FavoriteRestaurantIdb.getRestaurant(1);
    expect(restaurant)
      .toEqual({ id: 1 });

    FavoriteRestaurantIdb.deleteRestaurant(1);
  });

  it('should not add a restaurant again when its already liked', async () => {
    await TestFactories.createLikeButtonInitiatorWithRestaurant({ id: 1 });
    await FavoriteRestaurantIdb.putRestaurant({ id: 1 });

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    expect(await FavoriteRestaurantIdb.getAllRestaurants())
      .toEqual([{ id: 1 }]);

    FavoriteRestaurantIdb.deleteRestaurant(1);
  });

  it('should not add a restaurant when it has no id', async () => {
    await TestFactories.createLikeButtonInitiatorWithRestaurant({});

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    expect(await FavoriteRestaurantIdb.getAllRestaurants())
      .toEqual([]);
  });
});
