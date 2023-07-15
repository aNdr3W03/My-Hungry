const assert = require('assert');

Feature('Liking Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

const emptyFavoriteRestaurantPage = 'Yah, restoran favoritmu masih kosong nih 😥';

Scenario('Showing empty favorite restaurant page', ({ I }) => {
  I.seeElement('#favs');
  I.waitForElement('.empty-favorite-tag');
  I.see(emptyFavoriteRestaurantPage, '.empty-favorite-tag');
});

Scenario('Liking first restaurant', async ({ I }) => {
  I.waitForElement('.empty-favorite-tag');
  I.see(emptyFavoriteRestaurantPage, '.empty-favorite-tag');

  // Go to the Homepage
  I.amOnPage('/');
  I.seeElement('.content-list-item-title a');

  // Click the First restaurant title
  const firstRestaurant = locate('.content-list-item-title a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  // Click the like Button
  I.waitForElement('#likeButton', 1);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  // Check the liked restaurant title on Favorite page is same on Homepage
  I.amOnPage('/#/favorite');
  I.seeElement('.content-list-item');
  const likedRestaurantTitle = await I.grabTextFrom('.content-list-item-title');
  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
});

Scenario('Unliking first restaurant', async ({ I }) => {
  // First, go to the Homepage to liking the restaurant
  I.amOnPage('/');
  I.seeElement('.content-list-item-title a');
  I.click(locate('.content-list-item-title a').first());

  // Liking restaurant
  I.waitForElement('#likeButton', 1);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  // Go to the Favorite page
  I.amOnPage('/#/favorite');
  I.waitForElement('.content-list-item-title a', 1);
  I.seeElement('.content-list-item-title a');

  // Go to the liked restaurant Detail page
  const firstlikedRestaurant = locate('.content-list-item-title a').first();
  const firstlikedRestaurantTitle = await I.grabTextFrom(firstlikedRestaurant);
  I.click(firstlikedRestaurant);

  // Check the liked restaurant title on Favorite page is same on Detail page
  I.waitForElement('.detail-title', 1);
  I.seeElement('.detail-title');
  const detailLikedRestaurantTitle = await I.grabTextFrom('.detail-title');
  assert.strictEqual(firstlikedRestaurantTitle, detailLikedRestaurantTitle);

  // Click the unlike restaurant bubtton
  I.waitForElement('[aria-label="unlike restaurant"]', 1);
  I.seeElement('[aria-label="unlike restaurant"]');
  I.click('[aria-label="unlike restaurant"]');

  // Make sure it succeeded in unliking the restaurant on Favorite page
  I.amOnPage('/#/favorite');
  I.see(emptyFavoriteRestaurantPage, '.empty-favorite-tag');
});
