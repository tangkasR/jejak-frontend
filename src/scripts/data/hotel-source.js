import API_ENDPOINT from '../globals/api-endpoint';
import axios from 'axios';

class HotelSource {
  static async getAllHotel () {
    try {
      const response = await axios.get(API_ENDPOINT.GET_ALL_HOTEL);
      return response;
    } catch (error) {
      console.log(error);
    }
  }
  static async getHotelByWisataId (id) {
    try {
      const response = await axios.get(API_ENDPOINT.GET_HOTEL_BY_WISATA_ID(id));
      return response;
    } catch (error) {
      console.log(error);
    }
  }
  static async getHotelById (id) {
    try {
      const response = await axios.get(API_ENDPOINT.GET_HOTEL_BY_ID(id));
      return response;
    } catch (error) {
      console.log(error);
    }
  }
  static async addHotel (data) {
    try {
      const response = await axios.post(API_ENDPOINT.ADD_HOTEL, data, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      return response;
    } catch (error) {
      return error;
    }
  }
  static async editHotel (id, data) {
    try {
      const response = await axios.put(API_ENDPOINT.EDIT_HOTEL(id), data, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      return response;
    } catch (error) {
      return error;
    }
  }
  static async deleteHotel (id) {
    try {
      const response = await axios.delete(API_ENDPOINT.DELETE_HOTEL(id));
      return response;
    } catch (error) {
      console.log(error);
    }
  }
}
export default HotelSource;
