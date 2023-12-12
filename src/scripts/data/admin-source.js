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
  static async logout(token) {
    try {
      const response = await axios.delete(API_ENDPOINT.ADMIN_LOGOUT(token), {
        withCredentials: true
      });
      return response;
    } catch (error) {
      return error;
    }
  }
  static async getData(token) {
    try {
      const response = await axios.get(API_ENDPOINT.ADMIN_GETDATA(token), {
        withCredentials: true
      });
      return response;
    } catch (error) {
      console.log(error);
    }
  }
  static async editData(data, token) {
    try {
      const response = await axios.put(
        API_ENDPOINT.ADMIN_EDITDATA(token),
        data,
        {
          withCredentials: true,
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
  static async deleteData(token) {
    try {
      const response = await axios.delete(
        API_ENDPOINT.ADMIN_DELETEDATA(token),
        {
          withCredentials: true
        }
      );
      return response;
    } catch (error) {
      console.log(error);
    }
  }
}
export default AdminSource;
