import HotelSource from "../../../data/hotel-source";
import WisataSource from "../../../data/wisata-source";

const HotelLandingPage = {
  async render() {
    return `
      <section class="alamItemCard">
        <div class="container">
          <div class="row gy-5">
            <div class="col-md-8">
              <div class="mb-3 px-3 rounded-3" id="hotel-content">
                <div
                  class="wisata-card border-0 mb-5 rounded-bottom-5 position-relative"
                >
                  <div class="skeleton" style="height: 400px;"></div>
                  <div class="p-3">
                    <div
                      class="skeleton skeleton-text"
                      style="height: 30px;width: 35%;"
                    ></div>
                    <div
                      class="skeleton skeleton-text"
                      style="height: 10px;width: 50%;"
                    ></div>
                    <div
                      class="skeleton skeleton-text"
                      style="height: 50px;width: 100%"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="col-md-4 d-none d-md-block"
              data-aos="fade-down"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              <div class="wisata-card m-auto rounded-3 p-1">
                <div class="card-header text-center pt-4">
                  <h4 class="fw-bold">Wisata</h4>
                </div>
                <div
                  class="wisata-card mb-3 px-3 py-2 rounded-3"
                  style="max-width: 540px;"
                  id="wisata-content"
                >
                  <div
                    class="row g-0 my-3 align-items-center justify-content-center"
                  >
                    <div
                      class="skeleton"
                      style="width:100%;height:100px;"
                    ></div>
                  </div>
                  <div
                    class="row g-0 my-3 align-items-center justify-content-center"
                  >
                    <div
                      class="skeleton"
                      style="width:100%;height:100px;"
                    ></div>
                  </div>
                  <div
                    class="row g-0 my-3 align-items-center justify-content-center"
                  >
                    <div
                      class="skeleton"
                      style="width:100%;height:100px;"
                    ></div>
                  </div>
                  <div
                    class="row g-0 my-3 align-items-center justify-content-center"
                  >
                    <div
                      class="skeleton"
                      style="width:100%;height:100px;"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  },

  async afterRender() {
    // get data hotel
    const hotelContent = document.getElementById("hotel-content");
    const hotel = await HotelSource.getAllHotel();

    if (hotel.length !== 0) {
      hotelContent.innerHTML = "";
      const dataHotel = hotel.data;
      let indexDatasHotel = 0;
      dataHotel.forEach((data) => {
        indexDatasHotel++;
        if (indexDatasHotel >= 5 && indexDatasHotel <= 10) {
          hotelContent.innerHTML += `
            <div
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            class="wisata-card border-0 mb-5 rounded-bottom-5 position-relative">
                <img src="${data.url}" class="card-img-top" alt="${data.nama}" style="height: 400px; object-fit: cover">
                <div class="p-4" style ='text-align: justify;'>
                    <h2 class="card-title fw-bold"><a href="/#/detailhotel/${data.id}">${data.nama}</a></h2>
                    <p class="location-text d-flex align-items-center gap-2 mt-3"><i class='bx bxs-map bx-sm'></i></i> ${data.lokasi}</p>
                    <p class="card-text opacity-75 my-3">${data.deskripsi}</p>
                </div>
            </div>
            `;
        }
      });
    }

    // get data wisata
    const wisataContent = document.getElementById("wisata-content");
    const wisata = await WisataSource.getWisata();
    if (wisata.length !== 0) {
      wisataContent.innerHTML = "";
      const datasWisata = wisata.data;

      datasWisata.forEach((data) => {
        if (data.kategori === "Alam") {
          wisataContent.innerHTML += `
              <div class="row g-0 my-3 align-items-center justify-content-center">
                <div class="col-md-4">
                  <img
                    src="${data.url}"
                    class="img-fluid rounded-2"
                    alt="${data.nama}"
                    style="height: 100px; width: 100%"
                  />
                </div>
                <div class="col-md-8 text-start gx-3">
                  <h6 class="card-title">
                    <a href="/#/detail/${data.id}">${data.nama}</a>
                  </h6>
                  <p><i class="bx bxs-map"></i> ${data.lokasi}</p>
                </div>
              </div>
            `;
        }
      });
    }
  }
};

export default HotelLandingPage;
