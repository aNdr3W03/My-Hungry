# Restaurant Like and Unlike Test Case
  
## Use Case Flow

1. Display the Restaurant detail page.
2. If the Restaurant hasn't been liked yet, show an empty heart button to like the restaurant.
3. If the restaurant is liked, show a full heart-shaped button. Users can cancel their preferences in this restaurant.
4. Give different names to createLikeButtonTemplate and createUnlikeButtonTemplate.

## Liking Restaurant Scenario

1. Restaurant is not liked yet.
2. Button for liking the restaurant is displayed.
3. Restaurant like button pressed by the user.
4. Restaurant added to the list of Favorite restaurants:
   * It turns out that the restaurant is already liked:
      * No need to save back.
   * Restaurant data has no ID:
      * The system does not process storage.
      * The system does not fail.

## Unliking Restaurant Scenario

1. Restaurant is already liked.
2. Button to cancel liking the restaurant is displayed.
3. Restaurant unlike button pressed by the user.
4. Restaurant removed from the list of Favorite restaurants:
   * Apparently the restaurant is not on the list of Favorite restaurants.

Notes:
- Positive flow is described in numbered points.
- Negative flow is described in bullet points.
