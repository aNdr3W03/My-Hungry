const createPageLoaderTemplate = {
  show() {
    return `
      <div class="page-loader"></div>
    `;
  },

  remove() {
    document.querySelector('.page-loader').remove();
  },
};

const createReviewTemplate = (reviews) => {
  const review = reviews.customerReviews[reviews.customerReviews.length - 1];
  const html = document.createElement('div');

  html.classList.add('review-container');
  html.innerHTML = `
    <div class="review-photo-profile">
      <img src="./images/user/default.jpg" alt="consumer photo profile">
    </div>
    <div class="review-body">
      <h3 class="review-consumer-name">${review.name}</h3>
      <small class="review-date-post">${review.date}</small>
      <p class="review-content">${review.review}</p>
    </div>
  `;

  return html;
};

const createButtonLoaderTemplate = () => `
  <div class="btn-loader"></div>
`;

const createLikeButtonTemplate = () => `
  <button class="like" id="likeButton" aria-label="like restaurant">
    <i class="far fa-heart" aria-hidden="true"></i>
  </button>
`;

const createUnlikeButtonTemplate = () => `
  <button class="like" id="likeButton" aria-label="unlike restaurant">
    <i class="fas fa-heart" aria-hidden="true"></i>
  </button>
`;

const createSuccessFavoriteNotification = {
  show() {
    return `
      <div class="fav-notif">
        <p>Success add this restaurant to favorite</p>
      </div>
    `;
  },

  remove() {
    setTimeout(() => {
      const notif = document.querySelector('.fav-notif');
      if (notif) notif.remove();
    }, 2800);
  },
};

const createRemoveFavoriteNotification = {
  show() {
    return `
      <div class="fav-notif">
        <p>Remove this restaurant from favorite</p>
      </div>
    `;
  },

  remove() {
    setTimeout(() => {
      const notif = document.querySelector('.fav-notif');
      if (notif) notif.remove();
    }, 2800);
  },
};

export {
  createPageLoaderTemplate,
  createReviewTemplate,
  createButtonLoaderTemplate,
  createLikeButtonTemplate,
  createUnlikeButtonTemplate,
  createSuccessFavoriteNotification,
  createRemoveFavoriteNotification,
};
