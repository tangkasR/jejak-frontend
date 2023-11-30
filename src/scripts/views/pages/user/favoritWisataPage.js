import WisataFavoritIdb from "../../../data/favorit-wisata-idb";
import { createWisataTemplate } from "../../templates/FavoritTemplate";

const FavoritWisata = {
  async render() {
    return `
    <h2 class="w-100 title"
          data-aos="fade-up"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          style="margin-top: 150px;"
        >
        Wisata Favorit
        </h2>
        <hr class="hr" 
          data-aos="fade-up"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        />
      <div class="wisata_container">
        <div id="wisata" class="wisata_items"></div>
          <div class="empty_favorit"  data-aos="fade-up"
          data-aos-delay="50"
          data-aos-duration="2000"
          data-aos-easing="ease-in-out">
            <h1>Silahkan Tambahkan Favorit Terlebih Dahulu</h1>
          </div>
        </div>
      </div>
    `;
  },

  async afterRender() {
    const wisatas = await WisataFavoritIdb.getAllWisata();
    const empty = document.querySelector(".empty_favorit");
    empty.style.display = "block";
    if (wisatas.length !== 0) {
      empty.style.display = "none";
      const wisataContainer = document.querySelector("#wisata");
      wisatas.forEach((data) => {
        wisataContainer.innerHTML += createWisataTemplate(data);
      });
    }
  },
};

export default FavoritWisata;
