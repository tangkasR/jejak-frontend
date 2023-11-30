import UrlParser from "../../../routes/url-parser";
import WisataSource from "../../../data/wisata-source";
import HotelSource from "../../../data/hotel-source";
import LikeButtonInitiator from "../../../utils/favorit-hotel-button-initiator";
import {
  createDetailWisataTemplate,
  createHotelTemplate,
  createPenginapanTemplate,
} from "../../templates/FavoritTemplate";
import ReviewSource from "../../../data/review-source";
import { data } from "jquery";

const Detail = {
  async render() {
    return `
        <section class="detailCard">
          <div class="container">
              <div class="row gy-5">
                  <div class="col-md-12" id="posts">
                 
                  </div>
              </div>
          </div>
          <div class="container">
          <h3 class="fw-bold mt-5"
          data-aos="fade-up"
          data-aos-delay="50"
          data-aos-duration="2000">Wisata Lainnya :</h3>
            <div class="container-fluid mt-3 justify-content-center"
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out">
              <div class="swiper mySwipers">
                <div class="swiper-wrapper" id="wisata-lainnya">

                </div>
                <div class="swiper-button-next"></div>
                <div class="swiper-button-prev"></div>
              </div>
            </div>
          </div>
          <div id="likeButtonContainer"></div>
        </section>
        <section class="reviewCard">
          <div class="container">
            <div class="carditemreview" id="card-review">

          </div>
        </section>
        `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const hotel = await HotelSource.getHotelById(url.id);
    console.log(hotel);
    const detailContainer = document.querySelector("#posts");
    detailContainer.innerHTML += `
        <div class="col-md-8 mx-auto">
        <h2 class="text-center fw-bold mb-3">${hotel.data.nama}</h2>
        <img src="${hotel.data.url}" class="card-img-top rounded-4" alt="${hotel.data.nama}">
        <p class="location text-left d-flex gap-2 mt-3 fw-bold">
        <i class='bx bxs-map bx-sm'></i> ${hotel.data.lokasi}</p>
        <p class="subtitle mt-4 mx-5" style="text-align: justify;"
          data-aos="fade-up"
          data-aos-delay="50"
          data-aos-duration="2000">${hotel.data.deskripsi}</p>
      </div>
        `;
    // swiper
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: "auto",
      spaceBetween: 30,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });

    var swipers = new Swiper(".mySwipers", {
      slidesPerView: "auto",
      spaceBetween: 30,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        // when window width is >= 640px
        768: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        992: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
      },
    });
    // end swiper

    const wisata = await WisataSource.getWisata();
    const dataWisata = wisata.data;
    const wisataContent = document.querySelector("#wisata-lainnya");
    dataWisata.forEach((data) => {
      wisataContent.innerHTML += `
              <div class="swiper-slide item-wisata-lainnya">
                <div class="card_items">
                  <div class="card card-wisata-lainnya"><a href="#/detail/${data.id}">
                    <img src="${data.url}" />
                    <div class="content-card">
                      <div class="item-card">
                        <h5 style="font-weight:800; font-size:25px">${data.nama}</h5>
                        <p><i class='bx bxs-map'></i> ${data.lokasi}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            `;
    });

    const reviewContent = document.querySelector("#card-review");
    reviewContent.innerHTML += `
        <h3 class="fw-bold mt-5 text-center pt-3"
        data-aos="fade-up"
        data-aos-delay="50"
        data-aos-duration="2000">Review</h3>
        <form id="reviewForm" class="mx-5">
        <div class="fw-bold mb-3"
        data-aos="fade-up"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out">
          <label for="inputname" class="form-label">Nama</label>
          <input type="text" class="form-control mx-auto" id="inputname" name="name" placeholder="Tulis Nama Anda">
        </div>
        <div class="fw-bold mb-3"
        data-aos="fade-up"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out">
          <label for="inputcomment" class="form-label">Review</label>
          <textarea class="form-control" id="inputreview" rows="3" name="review" placeholder="Tulis Review Anda"></textarea>
        </div>
        <label for="rating" class="form-label fw-bold"
        data-aos="fade-up"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out">Rating</label>
        <div class="star-rating" id="rating"
        data-aos="fade-up"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out">
          <div class="reverse-star"
          data-aos="fade-up"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out">
          <input type="radio" id="star5" name="rating" value="5" /><label for="star5"></label>
          <input type="radio" id="star4" name="rating" value="4" /><label for="star4"></label>
          <input type="radio" id="star3" name="rating" value="3" /><label for="star3"></label>
          <input type="radio" id="star2" name="rating" value="2" /><label for="star2"></label>
          <input type="radio" id="star1" name="rating" value="1" /><label for="star1"></label>
          </div>
          <button id="inputsubmit" type="submit" class="btn btn-primary float-end">Submit</button>
        </div>
      </form>
      <div id="reviewCards" class="row justify-content-center mt-5"></div> 
        `;

    const result = await ReviewSource.getReviewHotel(url.id);
    const dataresult = result.data;
    const reviewresult = document.querySelector("#reviewCards");
    dataresult.forEach((data) => {
      const stars = "&#9733;".repeat(data.rating);
      const today = new Date();
      const formattedDate = `${String(today.getDate()).padStart(
        2,
        "0"
      )}-${String(today.getMonth() + 1).padStart(
        2,
        "0"
      )}-${today.getFullYear()}`;
      reviewresult.innerHTML += `
        <div class="card-result mb-5 mx-auto col-md-5" data-aos="fade-up"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out">
          <div class="mt-2">
          <div class="card-header d-flex justify-content-between align-items-center">
            <p class="card-name fw-bold">${data.name}<p>
            <p class="card-date">${formattedDate}</p>
          </div>
          <p class="card-text stars mb-2">${stars}</p>
          <p class="card-review">${data.review}</p>
          </div>
        </div>
        `;
    });

    // submit review
    const form = document.getElementById("reviewForm");

    form.addEventListener("submit", async (event) => {
      const formData = new FormData(form);
      const data = Object.fromEntries(formData);
      try {
        const review = await ReviewSource.addReviewHotel(url.id, data);
        console.log(review);

        form.reset();
      } catch (error) {
        console.log(error);
      }
    });

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector("#likeButtonContainer"),
      hotel: {
        id: hotel.data.id,
        nama: hotel.data.nama,
        lokasi: hotel.data.lokasi,
        deskripsi: hotel.data.deskripsi,
        url: hotel.data.url,
        image: hotel.data.image,
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
