import WisataSource from "../../../data/wisata-source";
import ReviewSource from "../../../data/review-source";
import HotelSource from "../../../data/hotel-source";
import { async } from "regenerator-runtime";
import UrlParser from "../../../routes/url-parser";
import Swal from "sweetalert2";

const CobaReviewPage = {
  async render() {
    return `
      <div class="container-fluid">
        <div class="row">
          <sidebar-element></sidebar-element>
          <div class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <div id="container-cobareview" class="py-4"></div>
          </div>
        </div>
      </div>
    `;
  },
  async afterRender() {
    // get id
    const url = UrlParser.parseActiveUrlWithoutCombiner();

    // menonaktifkan navbar user
    const navbar = document.querySelector("navbar-element");
    navbar.style.display = "none";

    // hapus footer
    const footer = document.querySelector("footer-element");
    footer.style.display = "none";

    //   active side bar
    const navLink = document.getElementById("dashboard-link");
    navLink.classList.add("active");

    // get data wisata
    const response = await WisataSource.getWisataById(url.id);
    const data = response.data;

    // render page
    const container = document.getElementById("container-cobareview");
    container.innerHTML = `
    <div class="row align-items-center justify-content-center">
        <div class="col-6">
            <img src="${data.url}" style="max-width: 100%">
        </div>
        <div class="col-6">
            <h5>Nama: ${data.nama}</h5>
            <p>Lokasi: ${data.lokasi}</p>
            <p>Kategori: ${data.kategori}</p>
            <p>Deskripsi: ${data.deskripsi}</p>
            <p id="rating-item">Rating: </p>
        </div>
        <div class="d-flex flex-column align-items-center justify-content-center w-100 card shadow my-4 mx-5 p-2 border rounded">
        <h4 class="text-center mb-3">Review</h4>
        <form class="addReview" style="width:60%">
            <div class="mb-3">
                <label for="inputName" class="form-label">Nama</label>
                <input type="text" class="form-control" id="inputName" placeholder="Masukan nama anda" name="name">
            </div>
            <div class="mb-3">
                <label for="inputReview" class="form-label">Review</label>
                <input type="text" class="form-control" id="inputReview" placeholder="Masukan review anda" name="review">
            </div>
            <div class="mb-3">
                <label for="inputRating" class="form-label">Rating</label>
                <input type="number" class="form-control" id="inputRating" placeholder="Masukan rating dari 1-5" name="rating">
            </div>
            <button type="submit" class="btn btn-primary mb-3">Tambah</button>
        </form>
    </div>
    <div id="review-container" class="mt-3 d-flex flex-wrap align-items-center juatify-content-center gap-2">
    </div>
    <h4 class="mt-5">Hotel Terdekat</h4>
    <div id="conatinerHotel" class="mt-3 d-flex flex-wrap align-items-center juatify-content-center gap-2">
    </div>
    `;
    // render rating value
    const ratingContainer = document.getElementById("rating-item");
    if (data.rating === null) {
      ratingContainer.innerHTML += 0;
    } else {
      ratingContainer.innerHTML += data.rating;
    }

    // get data review
    const review = await ReviewSource.getReview(url.id);
    const dataReview = review.data;
    console.log(dataReview);

    // render card review
    const containerReview = document.querySelector("#review-container");
    dataReview.forEach((data) => {
      containerReview.innerHTML += `
        <div class="card shadow px-4 py-2 text-center">
            <h5 class="mb-3">${data.name}</h5>
            <p>${data.review}</p>
            <p>${data.rating}</p>
            <p>${data.date}</p>
        </div>
    `;
    });

    // eksekusi tambah review
    const form = document.querySelector(".addReview");
    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      const formData = new FormData(form);
      const newReview = Object.fromEntries(formData);
      console.log(newReview);
      const response = await ReviewSource.addReview(url.id, newReview);
      if (response.length !== 0) {
        if (response.data) {
          location.reload();
          return;
        }
        Swal.fire({
          icon: "error",
          title: `${response.response.data.msg}!`,
          text: `Tolong ulangi!`,
          showConfirmButton: false
        });
      }
    });

    // render hotel terdekat dari wisata
    const hotels = await HotelSource.getHotelByWisataId(url.id);
    const dataHotel = hotels.data;
    console.log(dataHotel);
    const hotelContainer = document.getElementById("conatinerHotel");
    dataHotel.forEach((data) => {
      hotelContainer.innerHTML += `
        <div class="card shadow px-4 py-3 text-center">
            <img src="${data.url}" style="width:100%; height:100px; object-fit-:cover">
            <a href="#/cobareviewhotel/${data.id}" class="text-dark" style="text-decoration:none"><h5 class="mb-3">${data.nama}</h5></a>
            <p>${data.lokasi}</p>
            <p>rating</p>
            <p>${data.deskripsi}</p>
        </div>
    `;
    });
  }
};
export default CobaReviewPage;
