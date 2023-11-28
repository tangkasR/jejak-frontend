import HotelFavoritIdb from "../../../data/favorit-hotel-idb";
import { createHotelTemplate } from "../../templates/FavoritTemplate";

const FavoritHotel = {
  async render() {
    return `
    <div class="hotel_favorit">
      <h2 tabindex="0" class="hotel_title" style="justify-content:center align-items:center">Hotel Favorit</h2>
    </div>
      <div class="hotel_container">
        <div id="hotel" class="hotel_items"></div>
          <div class="empty_favorit">
            <h1>Silahkan Tambahkan Favorit Terlebih Dahulu</h1>
          </div>
        </div>
      </div>
    `;
  },

  async afterRender() {
    const hotels = await HotelFavoritIdb.getAllHotel();
    const empty = document.querySelector(".empty_favorit");
    empty.style.display = "block";
    if (hotels.length !== 0) {
      empty.style.display = "none";
      const hotelContainer = document.querySelector("#hotel");
      hotels.forEach((data) => {
        hotelContainer.innerHTML += createHotelTemplate(data);
      });
    }
  },
};

export default FavoritHotel;
