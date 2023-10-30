const HomePage = {
  async render() {
    return `
      <div class="hero">
        <div class="hero_inner">
          <h1 tabindex="0" class="hero_title">
            Jelajah<span class="span_title">Jogja</span>
          </h1>
          <search-bar></search-bar>
          <p tabindex="0" class="hero_tagline">
            Jelajahi Jogja,<span class="span_tagline">
              Pesona Setiap Sudut</span
            >
          </p>
        </div>
      </div>
      <div class="container">
        <h2 class="w-100 text-center mt-5" style="color: #2C3639">
          Destinasi Populer
        </h2>
        <p class="text-center">
          Tempat Wisata Populer di daerah Yogyakarta yang menjadi pilihan utama
          dan terbaik di kalangan wisatawan dari luar ataupun dalam negeri.
        </p>
        <div
          class="container-fluid d-flex align-items-center justify-content-center flex-wrap gap-3"
        >
          <div class="card cardItem">
            <img src="./images/pantai.jpeg" />
            <div class="content-card">
              <div class="item-card">
                <h5>Pantai Watulangit</h5>
                <p>Pantai mantap</p>
              </div>
            </div>
          </div>
          <div class="card cardItem">
            <img src="./images/pantai.jpeg" />
            <div class="content-card">
              <div class="item-card">
                <h5>Pantai Watulangit</h5>
                <p>Pantai mantap</p>
              </div>
            </div>
          </div>
          <div class="card cardItem">
            <img src="./images/pantai.jpeg" />
            <div class="content-card">
              <div class="item-card">
                <h5>Pantai Watulangit</h5>
                <p>Pantai mantap</p>
              </div>
            </div>
          </div>
          <div class="card cardItem">
            <img src="./images/pantai.jpeg" />
            <div class="content-card">
              <div class="item-card">
                <h5>Pantai Watulangit</h5>
                <p>Pantai mantap</p>
              </div>
            </div>
          </div>
          <div class="card cardItem">
            <img src="./images/pantai.jpeg" />
            <div class="content-card">
              <div class="item-card">
                <h5>Pantai Watulangit</h5>
                <p>Pantai mantap</p>
              </div>
            </div>
          </div>
          <div class="card cardItem">
            <img src="./images/pantai.jpeg" />
            <div class="content-card">
              <div class="item-card">
                <h5>Pantai Watulangit</h5>
                <p>Pantai mantap</p>
              </div>
            </div>
          </div>
          <div class="card cardItem">
            <img src="./images/pantai.jpeg" />
            <div class="content-card">
              <div class="item-card">
                <h5>Pantai Watulangit</h5>
                <p>Pantai mantap</p>
              </div>
            </div>
          </div>
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
      <div class="container">
        <h2 class="w-100 text-center mt-5 mb-3" style="color: #2C3639">
          Kategori Wisata
        </h2>
        <div
          class="d-flex align-items-center justify-content-center gap-5 w-100 "
        >
          <div class="card kategori_card">
            <img src="./icons/Alam.png" />
            <h5>Alam</h5>
          </div>
          <div class="card kategori_card ">
            <img src="./icons/Pagoda.png" />
            <h5>Budaya</h5>
          </div>
          <div class="card kategori_card">
            <img src="./icons/Penginapan.png" />
            <h5>Penginapan</h5>
          </div>
        </div>
      </div>
      <div class="container">
        <h2 class="w-100 text-center mt-5" style="color: #2C3639">
          Top Penginapan
        </h2>
        <p class="text-center">
          Tempat Penginapan Populer di daerah Yogyakarta yang menjadi pilihan
          utama dan terbaik di kalangan wisatawan dari luar ataupun dalam
          negeri.
        </p>
        <div id="carouselExampleIndicators" class="carousel slide">
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active" style="height:400px">
              <img class="d-block w-100 " src="./images/penginapan_1.jpg" />
              <div class="carousel-caption d-none d-md-block">
                <h5>First slide label</h5>
                <p>
                  Some representative placeholder content for the first slide.
                </p>
              </div>
            </div>
            <div class="carousel-item" style="height:400px">
              <img class="d-block w-100" src="./images/penginapan_2.jpg" />
              <div class="carousel-caption d-none d-md-block">
                <h5>First slide label</h5>
                <p>
                  Some representative placeholder content for the first slide.
                </p>
              </div>
            </div>
            <div class="carousel-item" style="height:400px">
              <img class="d-block w-100" src="./images/penginapan_3.jpg" />
              <div class="carousel-caption d-none d-md-block">
                <h5>First slide label</h5>
                <p>
                  Some representative placeholder content for the first slide.
                </p>
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div class="container">
        <div class="row align-items-center justify-content-center w-100 mt-5">
          <div
            class="col-12 col-sm-3 d-flex justify-content-center align-items-center"
          >
            <div class="text-center">
              <img src="./icons/Location.png" />
              <h5 style="color: #3F4E4F">Strategis</h5>
              <p style="color: #2C3639">
                Lokasi hotel yang strategis memudahkan untuk berpergian ke
                tempat wisata
              </p>
            </div>
          </div>
          <div
            class="col-12 col-sm-3 d-flex justify-content-center align-items-center"
          >
            <div class="text-center">
              <img src="./icons/Dollar.png" />
              <h5 style="color: #3F4E4F">Terjangkau</h5>
              <p style="color: #2C3639">
                Lokasi hotel yang strategis memudahkan untuk berpergian ke
                tempat wisata
              </p>
            </div>
          </div>
          <div
            class="col-12 col-sm-3 d-flex justify-content-center align-items-center"
          >
            <div class="text-center">
              <img src="./icons/Access.png" />
              <h5 style="color: #3F4E4F">Mudah diakses</h5>
              <p style="color: #2C3639">
                Lokasi hotel yang strategis memudahkan untuk berpergian ke
                tempat wisata
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <h2 class="w-100 text-center mt-5" style="color: #2C3639">
          Wisata Lainnya
        </h2>
        <p class="text-center">
          Tempat Wisata Populer di daerah Yogyakarta yang menjadi pilihan utama
          dan terbaik di kalangan wisatawan dari luar ataupun dalam negeri.
        </p>
        <div
          class="container-fluid d-flex align-items-center justify-content-center flex-wrap gap-3"
        >
          <div class="card cardItem">
            <img src="./images/pantai.jpeg" />
            <div class="content-card">
              <div class="item-card">
                <h5>Pantai Watulangit</h5>
                <p>Pantai mantap</p>
              </div>
            </div>
          </div>
          <div class="card cardItem">
            <img src="./images/pantai.jpeg" />
            <div class="content-card">
              <div class="item-card">
                <h5>Pantai Watulangit</h5>
                <p>Pantai mantap</p>
              </div>
            </div>
          </div>
          <div class="card cardItem">
            <img src="./images/pantai.jpeg" />
            <div class="content-card">
              <div class="item-card">
                <h5>Pantai Watulangit</h5>
                <p>Pantai mantap</p>
              </div>
            </div>
          </div>
          <div class="card cardItem">
            <img src="./images/pantai.jpeg" />
            <div class="content-card">
              <div class="item-card">
                <h5>Pantai Watulangit</h5>
                <p>Pantai mantap</p>
              </div>
            </div>
          </div>
          <div class="card cardItem">
            <img src="./images/pantai.jpeg" />
            <div class="content-card">
              <div class="item-card">
                <h5>Pantai Watulangit</h5>
                <p>Pantai mantap</p>
              </div>
            </div>
          </div>
          <div class="card cardItem">
            <img src="./images/pantai.jpeg" />
            <div class="content-card">
              <div class="item-card">
                <h5>Pantai Watulangit</h5>
                <p>Pantai mantap</p>
              </div>
            </div>
          </div>
          <div class="card cardItem">
            <img src="./images/pantai.jpeg" />
            <div class="content-card">
              <div class="item-card">
                <h5>Pantai Watulangit</h5>
                <p>Pantai mantap</p>
              </div>
            </div>
          </div>
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
    `;
  },
  async afterRender() {
    const footer = document.querySelector("footer-element");
    footer.style.display = "block";
  }
};
export default HomePage;
