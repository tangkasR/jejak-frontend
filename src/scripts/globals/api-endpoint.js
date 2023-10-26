import CONFIG from './config';

const API_ENDPOINT = {
  ADMIN_LOGIN: `${CONFIG.BASE_URL}/login`,
  ADMIN_REGIS: `${CONFIG.BASE_URL}/registrasi`,
  ADMIN_GETDATA: id => `${CONFIG.BASE_URL}/getadmin/${id}`,
  ADMIN_EDITDATA: id => `${CONFIG.BASE_URL}/editadmin/${id}`,
  ADMIN_DELETEDATA: id => `${CONFIG.BASE_URL}/deleteadmin/${id}`
};

export default API_ENDPOINT;
