import CONFIG from './config';

const API_ENDPOINT = {
  // akun admin api
  ADMIN_LOGIN: `${CONFIG.BASE_URL}/login`,
  ADMIN_REGIS: `${CONFIG.BASE_URL}/registrasi`,
  ADMIN_GETDATA: id => `${CONFIG.BASE_URL}/getadmin/${id}`,
  ADMIN_EDITDATA: id => `${CONFIG.BASE_URL}/editadmin/${id}`,
  ADMIN_DELETEDATA: id => `${CONFIG.BASE_URL}/deleteadmin/${id}`,

  // wisata api
  GETWISATA: `${CONFIG.BASE_URL}/getwisata`,
  GETWISATABYID: id => `${CONFIG.BASE_URL}/getwisatabyid/${id}`,
  ADDWISATA: `${CONFIG.BASE_URL}/createwisata`,
  EDITWISATA: id => `${CONFIG.BASE_URL}/updatewisata/${id}`,
  DELETEWISATA: id => `${CONFIG.BASE_URL}/deletewisata/${id}`,

  // review wisata api
  GET_REVIEW_BY_WISATA_ID: id => `${CONFIG.BASE_URL}/getreviewbywisataid/${id}`,
  ADD_REVIEW: id => `${CONFIG.BASE_URL}/createreview/${id}`,

  // hotel api
  GET_ALL_HOTEL: `${CONFIG.BASE_URL}/getallhotel`,
  GET_HOTEL_BY_WISATA_ID: id => `${CONFIG.BASE_URL}/gethotelbywisataid/${id}`,
  GET_HOTEL_BY_ID: id => `${CONFIG.BASE_URL}/gethotelbyid/${id}`,
  ADD_HOTEL: `${CONFIG.BASE_URL}/createhotel`,
  EDIT_HOTEL: id => `${CONFIG.BASE_URL}/updatehotel/${id}`,
  DELETE_HOTEL: id => `${CONFIG.BASE_URL}/deletehotel/${id}`,

  // review hotel api
  GET_REVIEW_HOTEL_BY_WISATA_ID: id =>
    `${CONFIG.BASE_URL}/getreviewhotelbywisataid/${id}`,
  ADD_REVIEW_HOTEL: id => `${CONFIG.BASE_URL}/createreviewhotel/${id}`
};

export default API_ENDPOINT;
