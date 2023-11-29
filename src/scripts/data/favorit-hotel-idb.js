/* eslint-disable no-prototype-builtins */
/* eslint-disable consistent-return */
import { openDB } from 'idb';
import CONFIG from '../globals/config';

const { DATABASE_NAME_HOTEL, DATABASE_VERSION_HOTEL, OBJECT_STORE_NAME_HOTEL } = CONFIG;

const dbPromise = openDB(DATABASE_NAME_HOTEL, DATABASE_VERSION_HOTEL, {
  upgrade(database) {
    database.createObjectStore(OBJECT_STORE_NAME_HOTEL, { keyPath: 'id' });
  },
});

const HotelFavoritIdb = {
  async getHotelFavorit(id) {
    if (!id) {
      return;
    }
    return (await dbPromise).get(OBJECT_STORE_NAME_HOTEL, id);
  },
  async getAllHotel() {
    return (await dbPromise).getAll(OBJECT_STORE_NAME_HOTEL);
  },
  async putHotel(hotel) {
    if (!hotel.hasOwnProperty('id')) {
      return;
    }
    return (await dbPromise).put(OBJECT_STORE_NAME_HOTEL, hotel);
  },
  async deleteHotel(id) {
    return (await dbPromise).delete(OBJECT_STORE_NAME_HOTEL, id);
  },
};

export default HotelFavoritIdb;
