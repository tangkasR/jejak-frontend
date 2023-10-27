import API_ENDPOINT from '../globals/api-endpoint';
import axios from 'axios';

class WisataSource {
  static async getWisata () {
    try {
      const response = await axios.get(API_ENDPOINT.GETWISATA);
      return response;
    } catch (error) {
      console.log(error);
    }
  }
  static async getWisataById (id) {
    try {
      const response = await axios.get(API_ENDPOINT.GETWISATABYID(id));
      return response;
    } catch (error) {
      console.log(error);
    }
  }
  static async addWisata (data) {
    try {
      const response = await axios.post(API_ENDPOINT.ADDWISATA, data, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      return response;
    } catch (error) {
      console.log(error);
    }
  }
  static async editWisata (id, data) {
    try {
      const response = await axios.put(API_ENDPOINT.EDITWISATA(id), data, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      return response;
    } catch (error) {
      console.log(error);
    }
  }
  static async deleteWisata (id) {
    try {
      const response = await axios.delete(API_ENDPOINT.DELETEWISATA(id));
      return response;
    } catch (error) {
      console.log(error);
    }
  }
}
export default WisataSource;
