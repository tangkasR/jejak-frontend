import API_ENDPOINT from "../globals/api-endpoint";
import axios from "axios";

class AdminSource {
  static async login(data) {
    try {
      const response = await axios.post(API_ENDPOINT.ADMIN_LOGIN, data, {
        withCredentials: true,
        credentials: "include",
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
        withCredentials: true,
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
      const response = await axios.delete(API_ENDPOINT.ADMIN_LOGOUT, {
        withCredentials: true
      });
      return response;
    } catch (error) {
      return error;
    }
  }
  static async getData() {
    try {
      const response = await axios.get(API_ENDPOINT.ADMIN_GETDATA, {
        withCredentials: true
      });
      return response;
    } catch (error) {
      console.log(error);
    }
  }
  static async editData(data) {
    try {
      const response = await axios.put(API_ENDPOINT.ADMIN_EDITDATA, data, {
        withCredentials: true,
        headers: {
          "Content-Type": "multipart/form-data"
        }
      });
      return response;
    } catch (error) {
      return error;
    }
  }
  static async deleteData() {
    try {
      const response = await axios.delete(API_ENDPOINT.ADMIN_DELETEDATA, {
        withCredentials: true
      });
      return response;
    } catch (error) {
      console.log(error);
    }
  }
  static async refreshToken() {
    try {
      const response = await axios.post(API_ENDPOINT.ADMIN_REFRESH_TOKEN, {
        withCredentials: true
      });
      return response;
    } catch (error) {
      console.log(error);
    }
  }
}
export default AdminSource;
