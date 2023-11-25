import UrlParser from "../../../routes/url-parser";
import HotelSource from "../../../data/hotel-source";
import LikeButtonInitiatorHotel from "../../../utils/favorit-hotel-button-initiator";
import { createDetailHotelTemplate } from "../../templates/FavoritTemplate";

const Detail = {
  async render() {
    return `
        <div class="container">
            <h1 class="text-center mt-5">Tes Page</h1>
            <div id="hotels" class="detail_hotels"
            ></div>
            <div id="likeButtonContainer"></div>
        </div>
        `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const hotel = await HotelSource.getHotelById(url.id);
    console.log(hotel);
    const detailContainer = document.querySelector("#hotels");
    detailContainer.innerHTML = createDetailHotelTemplate(hotel.data);

    LikeButtonInitiatorHotel.init({
      likeButtonContainer: document.querySelector("#likeButtonContainer"),
      hotel: {
        id: hotel.data.id,
        nama: hotel.data.nama,
        lokasi: hotel.data.lokasi,
        deskripsi: hotel.data.deskripsi,
        image: hotel.data.image,
        url: hotel.data.url,
        img_name: hotel.data.img_name,
        total_rating: hotel.data.total_rating,
        total_viewers: hotel.data.total_viewers,
        rating: hotel.data.rating,
        created_at: hotel.data.created_at,
        updated_at: hotel.data.updated_at,
        wisatumId: hotel.data.wisatumId,
      },
    });
  },
};

export default Detail;
