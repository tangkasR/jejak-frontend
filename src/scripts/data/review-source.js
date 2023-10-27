import API_ENDPOINT from '../globals/api-endpoint';
import axios from 'axios';

class ReviewSource {
  static async getReview (id) {
    try {
      const response = await axios.get(
        API_ENDPOINT.GET_REVIEW_BY_WISATA_ID(id)
      );
      return response;
    } catch (error) {
      console.log(error);
    }
  }
  static async addReview (id, data) {
    try {
      const response = await axios.post(API_ENDPOINT.ADD_REVIEW(id), data, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      return response;
    } catch (error) {
      console.log(error);
    }
  }
}
export default ReviewSource;
