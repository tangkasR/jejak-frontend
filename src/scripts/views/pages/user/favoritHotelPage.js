import HotelFavoritIdb from "../../../data/favorit-hotel-idb";
import { createHotelTemplate } from "../../templates/FavoritTemplate";

const FavoritHotel = {
  async render() {
    return `
    <h2 class="w-100 title"
          data-aos="fade-up"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          style="margin-top: 150px;"
        >
        Hotel Favorit
        </h2>
        <hr class="hr" 
          data-aos="fade-up"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        />
      <div class="hotel_container">
        <div id="hotel" class="hotel_items"></div>
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
