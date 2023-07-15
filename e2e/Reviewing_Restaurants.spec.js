Feature('Reviewing Restaurants');

Before(({ I }) => {
  I.amOnPage('/');
});

Scenario('Posting restaurant review', async ({ I }) => {
  const nameText = 'E2E Testing';
  const reviewText = 'Automated E2E review';

  // Click the First restaurant title
  I.seeElement('.content-list-item-title a');
  I.click(locate('.content-list-item-title a').first());

  // Fill the Review Form with name and text review, then submit
  I.seeElement('.review-form-container form');
  I.fillField('name', nameText);
  I.fillField('review', reviewText);
  I.click('#button-review');

  // Check the review input and the review result
  I.see(nameText, '.review-customer-name');
  I.see(reviewText, '.review-content');
});
