import WisataSource from '../../../data/wisata-source';
import HotelSource from '../../../data/hotel-source';

const HomePage = {
  async render () {
    return `
      <div class="hero">
        <div class="hero_inner">
          <h1 tabindex="0" class="hero_title">
            Jelajah<span class="span_title">Jogja</span>
          </h1>
          <p tabindex="0" class="hero_tagline">
            Jelajahi Jogja,<span class="span_tagline">
              Pesona Setiap Sudut</span>
          </p>
        </div>
      </div>
      <div class="container-xl py-5 overflow-hidden">
        <h2 class="w-100 mt-5 title"
          data-aos="fade-up"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
        Destinasi Populer
        </h2>
        <hr class="hr" 
          data-aos="fade-up"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        />
        <p class="subtitle"
          data-aos="fade-up"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          Tempat Wisata Populer di daerah Yogyakarta yang menjadi pilihan utama
          <br />
          dan terbaik di kalangan wisatawan dari luar ataupun dalam negeri.
        </p>
        <div class="row align-items-center justify-content-center destination-container">
          <div class="col-lg-6 mb-3 mb-md-0">
            <div class="card_items"
              data-aos="fade-right"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              id="container-destinasi-populer-left"
            >
            </div>
          </div>
          <div class="col-lg-6">
            <div class="row align-items-center justify-content-center" id="container-destinasi-populer-right">
            </div>
          </div>
        </div>

      </div>
      <div class="container-fluid category">
        <h2 class="w-100 title"
          data-aos="fade-up"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
        Kategori Wisata
        </h2>
        <hr class="hr"
          data-aos="fade-up"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        />
        <div
          class="d-flex align-items-center justify-content-center gap-5 w-100 mt-5 flex-wrap"
        >
          <div class="kategori_items"
            data-aos="fade-up-right"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            <div class="card kategori_card">
              <a href="#/kategorialam" class="nav-link d-flex justify-content-center flex-column align-items-center">
              <img src="./icons/Alam.png"  />
              <h5>Alam</h5>
              </a> 
            </div>
          </div>
          <div class="kategori_items"
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            <div class="card kategori_card">
              <a href="#/kategoribudaya" class="nav-link d-flex justify-content-center flex-column align-items-center">
              <img src="./icons/Pagoda.png"/>
              <h5>Budaya</h5>
              </a>
            </div>
          </div>
          <div class="kategori_items"
            data-aos="fade-up-left"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            <div class="card kategori_card">
              <a href="#/hotel" class="nav-link d-flex justify-content-center flex-column align-items-center">
              <img src="./icons/Penginapan.png" />
              <h5>Penginapan</h5>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <h2 class="w-100 mt-5 title"
          data-aos="fade-up"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
        Top Penginapan
        </h2>
        <hr class="hr"
          data-aos="fade-up"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        />
        <p class="subtitle"
          data-aos="fade-up"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          Tempat Penginapan Populer di daerah Yogyakarta yang menjadi pilihan
          utama <br />dan terbaik di kalangan wisatawan dari luar ataupun dalam
          negeri.
        </p>
        <div class="swiper mySwiper"
          data-aos="fade-up"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <div class="topPenginapanContainer swiper-wrapper">
            
          </div>
          <div class="swiper-pagination hidden"></div>
        </div>
      </div>
      <div class="container-fluid service p-3 mt-5">
      <div class="row justify-content-center align-items-center text-center">
        <div class="col-md-8">
              <h2 class="w-100 mt-5 title"
              data-aos="fade-up"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out">Layanan yang kami berikan</h2>
              <hr
                class="hr"
                data-aos="fade-up"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
              />
        </div>
      </div>
        <div
          class="row align-items-center justify-content-center  mt-5 gy-5 gy-sm-0"
        >
          <div
            class="col-md-3 d-flex justify-content-center align-items-center"
          >
            <div class="text-center"
              data-aos="zoom-out-right"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
            <di class="img-cover">
              <img src="./icons/Location.png" class="icon-service" />
            </di>
              <h5 style="color: #3F4E4F" class="service-title">Strategis</h5>
              <p style="color: #2C3639 fw-medium" class="service-subtitle">
                Lokasi hotel yang strategis memudahkan untuk berpergian ke
                tempat wisata
              </p>
            </div>
          </div>
          <div
            class=" col-md-3 d-flex justify-content-center align-items-center"
          >
            <div class="text-center"
              data-aos="zoom-in-up"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
            <div class="img-cover"> 
              <img src="./icons/Dollar.png" class="icon-service" />
            </div>
              <h5 style="color: #3F4E4F" class="service-title">Terjangkau</h5>
              <p style="color: #2C3639" class="service-subtitle fw-medium">
                Lokasi hotel yang strategis memudahkan untuk berpergian ke
                tempat wisata
              </p>
            </div>
          </div>
          <div
            class="col-md-3 d-flex justify-content-center align-items-center"
          >
            <div class="text-center"
              data-aos="zoom-out-left"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
            <div class="img-cover"> 
              <img src="./icons/Access.png" class="icon-service" />
            </div>
   
              <h5 style="color: #3F4E4F" class="service-title">
                Mudah diakses
              </h5>
              <p style="color: #2C3639" class="service-subtitle fw-medium">
                Lokasi hotel yang strategis memudahkan untuk berpergian ke
                tempat wisata
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <h2 class="w-100 mt-5 title"
          data-aos="fade-up"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
        Wisata Lainnya
        </h2>
        <hr class="hr"
          data-aos="fade-up"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        />
        <p class="subtitle"
          data-aos="fade-up"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          Tempat Wisata Populer di daerah Yogyakarta yang menjadi pilihan utama
          <br />
          dan terbaik di kalangan wisatawan dari luar ataupun dalam negeri.
        </p>
        <div class="container-fluid justify-content-center"
          data-aos="fade-up"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <div class="swiper mySwipers">
            <div class="swiper-wrapper" id="wisata-lainnya">
            </div>
            <div class="swiper-button-next"></div>
            <div class="swiper-button-prev"></div>
          </div>
        </div>
      </div>
    `;
  },

  async afterRender () {
    // swiper
    var swiper = new Swiper ('.mySwiper', {
      slidesPerView: 'auto',
      spaceBetween: 30,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });

    var swipers = new Swiper ('.mySwipers', {
      slidesPerView: 'auto',
      spaceBetween: 30,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
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

    // get datas wisata
    const wisata = await WisataSource.getWisata ();
    const datasWisata = wisata.data;
    // end get datas wisata

    // render page destinasi populer
    const destinasiPopulerContainer_left = document.getElementById (
      'container-destinasi-populer-left'
    );
    const destinasiPopulerContainer_right = document.getElementById (
      'container-destinasi-populer-right'
    );
    let indexDatasWisata = 0;
    datasWisata.forEach (data => {
      indexDatasWisata++;
      if (indexDatasWisata === 1) {
        const deskripsi = data.deskripsi.slice (0, 250);
        destinasiPopulerContainer_left.innerHTML += `
          <div class="card card-wrapper card-destination-left">
            <img src="${data.url}" />
            <div class="content-card">
              <div class="item-card">
                <h5>${data.nama}</h5>
                <p>${deskripsi}... <a href="#/login">selengkapnya</a></p>
              </div>
            </div>
          </div>
        `;
      }
      if (indexDatasWisata !== 1 && indexDatasWisata <= 5) {
        const deskripsi = data.deskripsi.slice (0, 200);
        destinasiPopulerContainer_right.innerHTML += `
          <div class="col-sm-6 py-2">
            <div
              class="card_items"
              data-aos="fade-left"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              <div class="card card-destination-right">
                <img src="${data.url}" />
                <div class="content-card">
                  <div class="item-card">
                    <h5>${data.nama}</h5>
                    <p>${deskripsi}... <a href="#/login">selengkapnya</a></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        `;
      }
    });
    // end render page destinasi populer
    // render page wisata lainnya
    const wisataLainnyaContainer = document.getElementById ('wisata-lainnya');
    datasWisata.forEach (data => {
      wisataLainnyaContainer.innerHTML += `
        <div class="swiper-slide item-wisata-lainnya">
          <div class="card_items">
            <div class="card card-wisata-lainnya">
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
    // end render page wisata lainnya
    // top penginapan
    const topPenginapanContainer = document.querySelector (
      '.topPenginapanContainer'
    );
    const dataHotel = await HotelSource.getAllHotel ();
    console.log (dataHotel.data);
    dataHotel.data.forEach (data => {
      topPenginapanContainer.innerHTML += `
        <div class="swiper-slide item-wisata-lainnya" style="background-color:#f1ede2">
          <div class="card_item">
            <div class="card card-penginapan">
              <img src="${data.url}"/>
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
    // end top penginapan
  },
};
export default HomePage;
