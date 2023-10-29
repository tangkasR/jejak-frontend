import API_ENDPOINT from "../globals/api-endpoint";
import axios from "axios";

class AdminSource {
  static async login(data) {
    try {
      const response = await axios.post(API_ENDPOINT.ADMIN_LOGIN, data, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      });
      return response;
    } catch (error) {
      return error;
    }
  }
  static async registrasi(data) {
    try {
      const response = await axios.post(API_ENDPOINT.ADMIN_REGIS, data, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      });
      return response;
    } catch (error) {
      return error;
    }
  }
  static async logout() {
    try {
      const response = await axios.delete(API_ENDPOINT.ADMIN_LOGOUT);
      return response;
    } catch (error) {
      return error;
    }
  }
  static async getData(id) {
    try {
      const response = await axios.get(API_ENDPOINT.ADMIN_GETDATA(id));
      return response;
    } catch (error) {
      console.log(error);
    }
  }
  static async editData(id, data) {
    try {
      const response = await axios.put(API_ENDPOINT.ADMIN_EDITDATA(id), data, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      });
      return response;
    } catch (error) {
       return error;
    }
  }
  static async deleteData(id) {
    try {
      const response = await axios.delete(API_ENDPOINT.ADMIN_DELETEDATA(id));
      return response;
    } catch (error) {
      console.log(error);
    }
  }
}
export default AdminSource;
