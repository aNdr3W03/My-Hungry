import API_ENDPOINT from '../globals/api-endpoint';
import CONFIG from '../globals/config';

class RestaurantSource {
  static async listRestaurants() {
    try {
      const response = await fetch(API_ENDPOINT.LIST);
      const responseJson = await response.json();
      return responseJson;
    } catch (error) {
      console.log(error);
      return [];
    }
  }

  static async detailRestaurant(id) {
    try {
      const response = await fetch(API_ENDPOINT.DETAIL(id));
      const responseJson = await response.json();
      return responseJson;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  static async sendReviewRestaurant(data) {
    try {
      const response = await fetch(API_ENDPOINT.REVIEW, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // 'X-Auth-Token': CONFIG.KEY,
        },
        body: JSON.stringify({
          id: data.id,
          name: data.name,
          review: data.review,
        }),
      });

      const responseJSON = await response.json();

      console.log(data);
      console.log(response);
      console.log(responseJSON);

      return responseJSON;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
}

export default RestaurantSource;
