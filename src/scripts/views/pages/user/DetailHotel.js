import UrlParser from "../../../routes/url-parser";
import WisataSource from "../../../data/wisata-source";
import HotelSource from "../../../data/hotel-source";
import LikeButtonInitiator from "../../../utils/favorit-hotel-button-initiator";
import moment from "moment";
import ReviewSource from "../../../data/review-source";
import { data } from "jquery";

const Detail = {
  async render() {
    return `
      <div class="container-like "></div>
      <div id="likeButtonContainer"></div>
      <section class="detailCard" style="overflow-x: hidden">
        <div class="container">
          <div class="row gy-5">
            <div class="col-md-12" id="posts">
              <div class="col-md-10 mx-auto skeleton_container">
                <div class="skeleton skeleton_title"></div>
                <div class="skeleton skeleton_image"></div>
                <div class="skeleton skeleton_location"></div>
                <div class="skeleton skeleton_desktiption"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="container">
          <h3
            class="fw-bold mt-5"
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="2000"
          >
            Wisata Lainnya :
          </h3>
          <div
            class="container-fluid mt-3 justify-content-center"
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            <div class="swiper mySwipers">
              <div class="swiper-wrapper" id="wisata-lainnya">
                <div class="swiper-slide item-wisata-lainnya">
                  <div class="card_items">
                    <div class="card card-wisata-lainnya">
                      <div class="skeleton img-wisata-lainnya"></div>
                    </div>
                  </div>
                </div>
                <div class="swiper-slide item-wisata-lainnya">
                  <div class="card_items">
                    <div class="card card-wisata-lainnya">
                      <div class="skeleton img-wisata-lainnya"></div>
                    </div>
                  </div>
                </div>
                <div class="swiper-slide item-wisata-lainnya">
                  <div class="card_items">
                    <div class="card card-wisata-lainnya">
                      <div class="skeleton img-wisata-lainnya"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="swiper-button-next"></div>
              <div class="swiper-button-prev"></div>
            </div>
          </div>
        </div>
      </section>
      <section class="reviewCard" style="overflow-x: hidden">
        <div class="container">
          <div class="carditemreview pb-2 pt-1  rounded-3" id="card-review">
            <h3
              class="fw-bold mt-5 text-center pt-3"
              data-aos="fade-up"
              data-aos-delay="50"
              data-aos-duration="2000"
            >
              Review
            </h3>
            <form id="reviewForm" class="mx-5">
              <div
                class="fw-bold mb-3"
                data-aos="fade-up"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
              >
                <label for="inputname" class="form-label">Nama</label>
                <input
                  type="text"
                  class="form-control mx-auto"
                  id="inputname"
                  name="name"
                  placeholder="Tulis Nama Anda"
                />
              </div>
              <div
                class="fw-bold mb-3"
                data-aos="fade-up"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
              >
                <label for="inputcomment" class="form-label">Review</label>
                <textarea
                  class="form-control"
                  id="inputreview"
                  rows="3"
                  name="review"
                  placeholder="Tulis Review Anda"
                ></textarea>
              </div>
              <label
                for="rating"
                class="form-label fw-bold"
                data-aos="fade-up"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                >Rating</label
              >
              <div
                class="star-rating"
                id="rating"
                data-aos="fade-up"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
              >
                <div
                  class="reverse-star mb-3"
                  data-aos="fade-up"
                  data-aos-delay="50"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-out"
                >
                  <input
                    type="radio"
                    id="star5"
                    name="rating"
                    value="5"
                  /><label for="star5"></label>
                  <input
                    type="radio"
                    id="star4"
                    name="rating"
                    value="4"
                  /><label for="star4"></label>
                  <input
                    type="radio"
                    id="star3"
                    name="rating"
                    value="3"
                  /><label for="star3"></label>
                  <input
                    type="radio"
                    id="star2"
                    name="rating"
                    value="2"
                  /><label for="star2"></label>
                  <input
                    type="radio"
                    id="star1"
                    name="rating"
                    value="1"
                  /><label for="star1"></label>
                </div>
                <div class="d-flex justify-content-end w-100">
                  <button id="inputsubmit" type="submit" class="btn btn-review">
                    Kirim
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
      <section class="resultCard" style="overflow-x: hidden">
        <div class="container">
          <div id="reviewCards" class="row gap-4 justify-content-center"></div>
        </div>
      </section>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const hotel = await HotelSource.getHotelById(url.id);
    const detailContainer = document.querySelector("#posts");
    if (hotel.length !== 0) {
      detailContainer.innerHTML = "";
      detailContainer.innerHTML += `
          <div class="col-md-10 mx-auto">
          <h1 class="text-center fw-bold mb-3">${hotel.data.nama}</h1>
          <hr class="hr aos-init aos-animate"
          data-aos="fade-up" data-aos-delay="50" 
          data-aos-duration="1000" 
          data-aos-easing="ease-in-out">
          <img src="${hotel.data.url}" class="card-img-top rounded-4" alt="${hotel.data.nama}">
          <p class="location text-left d-flex gap-2 mt-3 fw-bold">
          <i class='bx bxs-map bx-sm'></i> ${hotel.data.lokasi}</p>
          <p class="subtitle mt-4 mx-2 mx-md-0" style="text-align: justify;"
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="2000">${hotel.data.deskripsi}</p>
        </div>
          `;
    }
    // swiper
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: "auto",
      spaceBetween: 30,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      }
    });

    var swipers = new Swiper(".mySwipers", {
      slidesPerView: "auto",
      spaceBetween: 30,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 2,
          spaceBetween: 30
        },
        // when window width is >= 640px
        768: {
          slidesPerView: 3,
          spaceBetween: 20
        },
        992: {
          slidesPerView: 4,
          spaceBetween: 40
        }
      }
    });
    // end swiper

    const wisata = await WisataSource.getWisata();
    const wisataContent = document.querySelector("#wisata-lainnya");
    if (wisata.length !== 0) {
      wisataContent.innerHTML = "";
      const dataWisata = wisata.data;
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
    }

    const result = await ReviewSource.getReviewHotel(url.id);
    if (result.length !== 0) {
      const dataresult = result.data;
      console.log(result.data);
      const reviewresult = document.querySelector("#reviewCards");

      let imageUrl = "";
      // Kondisi untuk menentukan gambar berdasarkan rating

      dataresult.forEach((data) => {
        if (data.rating == 5) {
          imageUrl = "./images/bintang-5-emoji.png";
        } else if (data.rating == 4) {
          imageUrl = "./images/bintang-4-emoji.png";
        } else if (data.rating == 3) {
          imageUrl = "./images/bintang-3-emoji.png";
        } else if (data.rating == 2) {
          imageUrl = "./images/bintang-2-emoji.png";
        } else {
          imageUrl = "./images/bintang-1-emoji.png";
        }

        const stars = "&#9733;".repeat(data.rating);
        const date = data.createdAt;
        const dataDate = moment(date).format("MM/DD/YYYY");
        reviewresult.innerHTML += `
          <div
            class="col-12 rounded-3 item_review_wrapper "
            data-aos="fade-left"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            <div class="d-flex align-items-center pt-2 justify-content-between">
              <div class="d-flex gap-2">
                <img src="${imageUrl}" />
                <div>
                  <h5 class="card-name fw-bold mb-0">${data.name}</h5>
                  <div class="star-container">
                    <span class="star-result stars">${stars}</span>
                  </div>
                </div>
              </div>
              <div class="content-review">
                <p class=" fw-semibold">${dataDate}</p>
              </div>
            </div>
            <div class=" col-11">
              <p class="card-review text-break">${data.review}</p>
            </div>
          </div>
        `;
      });
    }

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
        img_id: hotel.data.img_id,
        total_rating: hotel.data.total_rating,
        total_viewers: hotel.data.total_viewers,
        rating: hotel.data.rating,
        created_at: hotel.data.created_at,
        updated_at: hotel.data.updated_at,
        wisatumId: hotel.data.wisatumId
      }
    });
    document
      .querySelector(".detailCard")
      .addEventListener("click", async (event) => {
        const likeContainer = document.querySelector(".container-like");
        likeContainer.innerHTML = "";
      });
  }
};

export default Detail;
