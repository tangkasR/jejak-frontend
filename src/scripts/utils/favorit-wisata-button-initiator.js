import WisataFavoritIdb from '../data/favorit-wisata-idb';
import {
  createLikeButtonTemplate,
  createLikedButtonTemplate,
} from '../views/templates/FavoritTemplate';

const LikeButtonInitiator = {
  async init({ likeButtonContainer, wisata }) {
    this._likeButtonContainer = likeButtonContainer;
    this._wisata = wisata;

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._wisata;

    if (await this._isWisataExist(id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },

  async _isWisataExist(id) {
    const wisata = await WisataFavoritIdb.getWisataFavorit(id);
    return !!wisata;
  },

  _renderLike() {
    this._likeButtonContainer.innerHTML = createLikeButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await WisataFavoritIdb.putWisata(this._wisata);
      this._renderButton();
    });
  },

  _renderLiked() {
    this._likeButtonContainer.innerHTML = createLikedButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await WisataFavoritIdb.deleteWisata(this._wisata.id);
      this._renderButton();
    });
  },
};

export default LikeButtonInitiator;
