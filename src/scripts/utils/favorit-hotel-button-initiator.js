import HotelFavoritIdb from '../data/favorit-hotel-idb';
import {
  createLikeButtonTemplate,
  createLikedButtonTemplate,
} from '../views/templates/FavoritTemplate';

const LikeButtonInitiatorHotel = {
  async init({ likeButtonContainer, hotel }) {
    this._likeButtonContainer = likeButtonContainer;
    this._hotel = hotel;

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._hotel;

    if (await this._isHotelExist(id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },

  async _isHotelExist(id) {
    const hotel = await HotelFavoritIdb.getHotelFavorit(id);
    return !!hotel;
  },

  _renderLike() {
    this._likeButtonContainer.innerHTML = createLikeButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await HotelFavoritIdb.putHotel(this._hotel);
      this._renderButton();
    });
  },

  _renderLiked() {
    this._likeButtonContainer.innerHTML = createLikedButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await HotelFavoritIdb.deleteHotel(this._hotel.id);
      this._renderButton();
    });
  },
};

export default LikeButtonInitiatorHotel;
