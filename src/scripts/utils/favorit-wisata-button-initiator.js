import WisataFavoritIdb from "../data/favorit-wisata-idb";
import {
  createLikeButtonTemplate,
  createLikedButtonTemplate,
} from "../views/templates/FavoritTemplate";

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
    const likeButton = document.querySelector("#likeButton");
    likeButton.addEventListener("click", async () => {
      const likeContainer = document.querySelector(".container-like");
      likeContainer.innerHTML = `
        <div
          class="like_card card"
          data-aos="fade-up"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <h5 class="col-10">Wisata berhasil ditambahkan ke favorit.</h5>
          <p>Silahkan melihat daftar wisata favorit Anda di halaman favorit.</p>
          <a href="#/favoritwisata" class="btn_fav"> Menuju halaman favorit </a>
        </div>
      `;
      await WisataFavoritIdb.putWisata(this._wisata);
      this._renderButton();
    });
  },

  _renderLiked() {
    this._likeButtonContainer.innerHTML = createLikedButtonTemplate();

    const likeButton = document.querySelector("#likeButton");
    likeButton.addEventListener("click", async () => {
      await WisataFavoritIdb.deleteWisata(this._wisata.id);
      this._renderButton();
    });
  },
};

export default LikeButtonInitiator;
