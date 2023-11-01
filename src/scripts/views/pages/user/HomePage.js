const HomePage = {
  async render() {
    return `
      <div class="hero">
        <div class="hero_inner">
          <h1 tabindex="0" class="hero_title">
            Jelajah<span class="span_title">Jogja</span>
          </h1>
          <p tabindex="0" class="hero_tagline">
            Jelajahi Jogja,<span class="span_tagline">
              Pesona Setiap Sudut</span
            >
          </p>
        </div>
      </div>
      <div class="container py-5">
        <h2 class="w-100 mt-5 title">Destinasi Populer</h2>
        <hr class="hr" />
        <p class="subtitle">
          Tempat Wisata Populer di daerah Yogyakarta yang menjadi pilihan utama
          <br />
          dan terbaik di kalangan wisatawan dari luar ataupun dalam negeri.
        </p>
        <div class="w-100 row align-items-center justify-content-center ps-3">
          <div class="col-6 p-0">
            <div class="card_items primary">
              <div class="card cardItem">
                <img src="./images/pantai.jpeg" />
                <div class="content-card">
                  <div class="item-card">
                    <h5>Pantai Watulangit</h5>
                    <p>Pantai mantap</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-6 p-0">
            <div class="col-12 p-0">
              <div class="card_items ps-2 mb-2">
                <div class="card cardItem">
                  <img src="./images/pantai.jpeg" />
                  <div class="content-card">
                    <div class="item-card">
                      <h5>Pantai Watulangit</h5>
                      <p>Pantai mantap</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12 p-0">
              <div class="card_items ps-2">
                <div class="card cardItem">
                  <img src="./images/pantai.jpeg" />
                  <div class="content-card">
                    <div class="item-card">
                      <h5>Pantai Watulangit</h5>
                      <p>Pantai mantap</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="w-100 row ps-3 align-items-center justify-content-center">
          <div class="col-6 p-0">
            <div class="col-12 p-0">
              <div class="card_items mb-2 mt-2">
                <div class="card cardItem">
                  <img src="./images/pantai.jpeg" />
                  <div class="content-card">
                    <div class="item-card">
                      <h5>Pantai Watulangit</h5>
                      <p>Pantai mantap</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12 p-0">
              <div class="card_items">
                <div class="card cardItem">
                  <img src="./images/pantai.jpeg" />
                  <div class="content-card">
                    <div class="item-card">
                      <h5>Pantai Watulangit</h5>
                      <p>Pantai mantap</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-6 py-1 p-0">
            <div class="card_items primary-two ms-2 mt-2">
              <div class="card cardItem">
                <img src="./images/pantai.jpeg" />
                <div class="content-card">
                  <div class="item-card">
                    <h5>Pantai Watulangit</h5>
                    <p>Pantai mantap</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container-fluid category">
        <h2 class="w-100  title">Kategori Wisata</h2>
        <hr class="hr" />
        <div
          class="d-flex align-items-center justify-content-center gap-5 w-100 mt-5 flex-wrap"
        >
          <div class="kategori_items">
            <div class="card kategori_card">
              <img src="./icons/Alam.png" />
              <h5>Alam</h5>
            </div>
          </div>
          <div class="kategori_items">
            <div class="card kategori_card ">
              <img src="./icons/Pagoda.png" />
              <h5>Budaya</h5>
            </div>
          </div>
          <div class="kategori_items">
            <div class="card kategori_card">
              <img src="./icons/Penginapan.png" />
              <h5>Penginapan</h5>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <h2 class="w-100 mt-5 title">Top Penginapan</h2>
        <hr class="hr" />
        <p class="subtitle">
          Tempat Penginapan Populer di daerah Yogyakarta yang menjadi pilihan
          utama <br />dan terbaik di kalangan wisatawan dari luar ataupun dalam
          negeri.
        </p>
        <div class="swiper mySwiper">
          <div class="swiper-wrapper">
            <div class="swiper-slide"><img src="./images/pantai.jpeg" /></div>
            <div class="swiper-slide"><img src="./images/pantai.jpeg" /></div>
            <div class="swiper-slide"><img src="./images/pantai.jpeg" /></div>
            <div class="swiper-slide"><img src="./images/pantai.jpeg" /></div>
          </div>
          <div class="swiper-pagination"></div>
        </div>
      </div>
      <div class="container-fluid service p-3 mt-5">
        <div
          class="row align-items-center justify-content-center w-100 mt-5 gy-5 gy-sm-0"
        >
          <div
            class="col-md-3 d-flex justify-content-center align-items-center"
          >
            <div class="text-center">
              <img src="./icons/Location.png" />
              <h5 style="color: #3F4E4F" class="service-title">Strategis</h5>
              <p style="color: #2C3639" class="service-subtitle">
                Lokasi hotel yang strategis memudahkan untuk berpergian ke
                tempat wisata
              </p>
            </div>
          </div>
          <div
            class=" col-md-3 d-flex justify-content-center align-items-center"
          >
            <div class="text-center">
              <img src="./icons/Dollar.png" />
              <h5 style="color: #3F4E4F" class="service-title">Terjangkau</h5>
              <p style="color: #2C3639" class="service-subtitle">
                Lokasi hotel yang strategis memudahkan untuk berpergian ke
                tempat wisata
              </p>
            </div>
          </div>
          <div
            class="col-md-3 d-flex justify-content-center align-items-center"
          >
            <div class="text-center">
              <img src="./icons/Access.png" />
              <h5 style="color: #3F4E4F" class="service-title">
                Mudah diakses
              </h5>
              <p style="color: #2C3639" class="service-subtitle">
                Lokasi hotel yang strategis memudahkan untuk berpergian ke
                tempat wisata
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <h2 class="w-100 mt-5 title">Wisata Lainnya</h2>
        <hr class="hr" />
        <p class="subtitle">
          Tempat Wisata Populer di daerah Yogyakarta yang menjadi pilihan utama
          <br />
          dan terbaik di kalangan wisatawan dari luar ataupun dalam negeri.
        </p>
        <div class="container-fluid  justify-content-center">
          <div class="swiper mySwipers">
            <div class="swiper-wrapper">
              <div class="swiper-slide"><img src="./images/pantai.jpeg" /></div>
              <div class="swiper-slide"><img src="./images/pantai.jpeg" /></div>
              <div class="swiper-slide"><img src="./images/pantai.jpeg" /></div>
              <div class="swiper-slide"><img src="./images/pantai.jpeg" /></div>
              <div class="swiper-slide"><img src="./images/pantai.jpeg" /></div>
              <div class="swiper-slide"><img src="./images/pantai.jpeg" /></div>
            </div>
            <div class="swiper-button-next"></div>
            <div class="swiper-button-prev"></div>
          </div>
        </div>
      </div>
    `;
  },

  async afterRender() {
    // mengaktifkan footer
    const footer = document.querySelector("footer-element");
    footer.style.display = "block";

    const navbar = document.querySelector("navbar-element");
    navbar.style.display = "block";

    //   nonaktif side bar
    const navLink = document.querySelector(".link-home");
    navLink.classList.add("active");

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
  },
};
export default HomePage;
