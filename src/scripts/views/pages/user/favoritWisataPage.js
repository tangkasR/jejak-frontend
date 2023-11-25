import WisataFavoritIdb from "../../../data/favorit-wisata-idb";
import { createWisataTemplate } from "../../templates/FavoritTemplate";

const FavoritWisata = {
  async render() {
    return `
    <div class="wisata_favorit">
    <h2 tabindex="0" class="wisata_title" style="justify-content:center align-items:center">Wisata Favorit</h2>
   </div>
   <div class="wisata_container">
     <div id="wisata" class="wisata_items"></div>
       <div class="empty_favorit">
           <h1>Silahkan Tambahkan Favorit Terlebih Dahulu</h1>
       </div>
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
