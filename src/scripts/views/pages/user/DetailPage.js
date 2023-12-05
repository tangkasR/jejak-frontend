import "regenerator-runtime";
import UrlParser from "../../../routes/url-parser";
import WisataSource from "../../../data/wisata-source";
import HotelSource from "../../../data/hotel-source";
import LikeButtonInitiator from "../../../utils/favorit-wisata-button-initiator";
import { createDetailWisataTemplate } from "../../templates/FavoritTemplate";
import ReviewSource from "../../../data/review-source";
import { data } from "jquery";
import { async } from "regenerator-runtime";

const Detail = {
  async render() {
    return `
    <div class="container-like "></div>
    <div id="likeButtonContainer"></div>
    <section class="detailCard">
      <div class="container">
          <div class="row gy-5">
              <div class="col-md-12" id="posts">
              </div>
          </div>
      </div>
      <div class="container">
      <h3 class="fw-bold mt-5 mb-4"
      data-aos="fade-up"
      data-aos-delay="50"
      data-aos-duration="2000">Penginapan Terdekat</h3>
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
      
    </section>
    <section class="reviewCard">
      <div class="container">
        <div class="carditemreview p-2 rounded-3" id="card-review">
      </div>
    </section>
    <section class="resultCard">
      <div class="container">
        <div id="reviewCards" class="row justify-content-center mt-5 rounded-3"></div>
      </div>
    </section>
        `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const wisata = await WisataSource.getWisataById(url.id);
    console.log(wisata);
    const detailContainer = document.querySelector("#posts");
    detailContainer.innerHTML += `
        <div class="col-md-10 mx-auto">
        <h1 class="text-center fw-bold mb-3">${wisata.data.nama}</h1>
        <hr class="hr aos-init aos-animate"
        data-aos="fade-up" data-aos-delay="50" 
        data-aos-duration="1000" 
        data-aos-easing="ease-in-out">
        <img src="${wisata.data.url}" class="card-img-top rounded-4" alt="${wisata.data.nama}">
        <p class="location text-left d-flex gap-2 mt-3 fw-bold">
        <i class='bx bxs-map bx-sm'></i> ${wisata.data.lokasi}</p>
        <p class="subtitle mt-4 mx-5" style="text-align: justify;"
          data-aos="fade-up"
          data-aos-delay="50"
          data-aos-duration="2000">${wisata.data.deskripsi}</p>
      </div>
      `;
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

    const hotel = await HotelSource.getHotelByWisataId(url.id);
    const dataHotel = hotel.data;
    const hotelContent = document.querySelector("#wisata-lainnya");
    dataHotel.forEach((data) => {
      hotelContent.innerHTML += `
              <div class="swiper-slide item-wisata-lainnya">
                <div class="card_items">
                  <div class="card card-wisata-lainnya"><a href="#/detailhotel/${data.id}">
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
        <h3 class="fw-bold mt-4 text-center "
        data-aos="fade-up"
        data-aos-delay="50"
        data-aos-duration="2000">Review</h3>
        <form id="reviewForm" class="mx-5 mt-3">
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
          <div class="reverse-star mb-3"
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
          <div class="d-flex justify-content-end w-100">
            <button id="inputsubmit" type="submit" class="btn btn-review">Kirim</button>
          </div>
        </div>
      </form>
      
        `;

    const result = await ReviewSource.getReview(url.id);
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
      <div class="row align-items-center gy-4">
        <div class="col-md-4">
          <div>
            <img src="https://images.unsplash.com/photo-1695653422715-991ec3a0db7a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" width="300px" height="300px" class="rounded-circle"/>
          </div>
        </div>
        <div class="col-md-8">
              <div class="mt-3 content-review">
              <div class="d-flex justify-content-between">
                <h5 class="card-name fw-bold mb-0">${data.name}</h5>
                <p class="py-2 mb-0 fw-semibold">${formattedDate}</p>
              </div>
              <div class="star-container">
              <span class="star-result stars">${stars}</span>
              </div>
                <p class="card-review text-break fw-semibold mt-2">${data.review}</p>
              </div>
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
        const review = await ReviewSource.addReview(url.id, data);
        console.log(review);

        form.reset();
      } catch (error) {
        console.log(error);
      }
    });

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector("#likeButtonContainer"),
      wisata: {
        id: wisata.data.id,
        nama: wisata.data.nama,
        kategori: wisata.data.kategori,
        lokasi: wisata.data.lokasi,
        deskripsi: wisata.data.deskripsi,
        url: wisata.data.url,
        image: wisata.data.image,
        img_name: wisata.data.img_name,
        latitude: wisata.data.latitude,
        longitude: wisata.data.longitude,
        total_rating: wisata.data.total_rating,
        total_viewers: wisata.data.total_viewers,
        created_at: wisata.data.created_at,
        updated_at: wisata.data.updated_at
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
