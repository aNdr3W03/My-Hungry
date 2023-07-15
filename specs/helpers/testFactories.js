import LikeButtonInitiator from '../../src/scripts/utils/like-button-initiator';

const createLikeButtonInitiatorWithRestaurant = async (restaurant) => {
  await LikeButtonInitiator.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    notificationContainer: document.querySelector('#notif-favorite-container'),
    restaurant,
  });
};

export { createLikeButtonInitiatorWithRestaurant };
