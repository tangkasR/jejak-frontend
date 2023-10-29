import API_ENDPOINT from "../globals/api-endpoint";
import axios from "axios";

class GallerySource {
  static async getGalleryById(id) {
    try {
      const response = await axios.get(API_ENDPOINT.GET_GALLERY_BY_ID(id));
      return response;
    } catch (error) {
      console.log(error);
    }
  }
  static async getGalleryByWisataId(id) {
    try {
      const response = await axios.get(
        API_ENDPOINT.GET_GALLERY_BY_WISATA_ID(id)
      );
      return response;
    } catch (error) {
      console.log(error);
    }
  }
  static async addGallery(id, data) {
    try {
      const response = await axios.post(API_ENDPOINT.ADD_GALLERY(id), data, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      });
      return response;
    } catch (error) {
      return error;
    }
  }
  static async deleteGallery(id) {
    try {
      const response = await axios.delete(API_ENDPOINT.DELETE_GALLERY(id));
      return response;
    } catch (error) {
      console.log(error);
    }
  }
}

export default GallerySource;
