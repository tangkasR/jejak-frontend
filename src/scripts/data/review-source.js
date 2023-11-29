import API_ENDPOINT from "../globals/api-endpoint";
import axios from "axios";

class ReviewSource {
  static async getAllReviewWisata() {
    try {
      const response = await axios.get(
        API_ENDPOINT.GET_REVIEW_ALL_WISATA
      );
      return response;
    } catch (error) {
      console.log(error);
    }
  }
  static async getReview(id) {
    try {
      const response = await axios.get(
        API_ENDPOINT.GET_REVIEW_BY_WISATA_ID(id)
      );
      return response;
    } catch (error) {
      console.log(error);
    }
  }
  static async addReview(id, data) {
    try {
      const response = await axios.post(API_ENDPOINT.ADD_REVIEW(id), data, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      });
      return response;
    } catch (error) {
      return error;
    }
  }
  static async getAllReviewHotel() {
    try {
      const response = await axios.get(
        API_ENDPOINT.GET_REVIEW_ALL_HOTEL
      );
      return response;
    } catch (error) {
      console.log(error);
    }
  }
  static async getReviewHotel(id) {
    try {
      const response = await axios.get(
        API_ENDPOINT.GET_REVIEW_HOTEL_BY_WISATA_ID(id)
      );
      return response;
    } catch (error) {
      console.log(error);
    }
  }
  static async addReviewHotel(id, data) {
    try {
      const response = await axios.post(
        API_ENDPOINT.ADD_REVIEW_HOTEL(id),
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        }
      );
      return response;
    } catch (error) {
      return error;
    }
  }
}
export default ReviewSource;
