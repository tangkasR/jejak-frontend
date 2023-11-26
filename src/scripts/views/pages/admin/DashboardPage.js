import WisataSource from '../../../data/wisata-source';
import HotelSource from '../../../data/hotel-source';
import ReviewSource from '../../../data/review-source';
import {async} from 'regenerator-runtime';
import Swal from 'sweetalert2';

const DashboardPage = {
  async render () {
    return `
      <div class="container-fluid">
        <div class="row">
          <sidebar-element></sidebar-element>
          <div class="col-md-9 ms-sm-auto col-lg-10 p-0"
          id="container-right">
            <navbar-admin-element></navbar-admin-element>
            <div id="container-right">
            <div id="content_container" class=""></div>
              <section class="admin">
                <div class="container">
                  <div class="row py-5 gy-3">
                      <div class="col-md-8">
                          <div class="titleAdmin-card">
                              <h1>Dashboard</h1>
                          </div>
                      </div>
                      <div class="col-md-4">
                          <div class="titleAdmin-card">
                              <h3>Hi, Prayer</h3>
                          </div>
                      </div>
                  </div>
                  <div class="row pb-5">
                      <div class="col-md-12">
                          <div class="chart-container">
                              <div class="chartDiv" id="chartDiv"></div>
                          </div>
                      </div>
                  </div>
                  <div class="row row-cols-1 row-cols-md-3 g-4">
                      <div class="col-md-4">
                          <div class="card-admin h-100">
                              <div class="card-admin-body">
                                  <i class='icon-AdminCard bx bx-map'></i>
                                  <h3 class="card-admin-title">Wisata</h3>
                                  <p class="card-admin-text">Fitur Wisata adalah penyimpanan informasi lengkap tentang destinasi
                                      wisata di Yogyakarta</p>
                                  <button class="btn-masukAdmin btn rounded-3"><a href="#/wisata"><strong>MASUK</strong></a></button>
                              </div>
                          </div>
                      </div>
                      <div class="col-md-4">
                          <div class="card-admin h-100">
                              <div class="card-admin-body">
                                  <i class='icon-AdminCard bx bx-hotel'></i>
                                  <h3 class="card-admin-title">Hotel</h3>
                                  <p class="card-admin-text">Fitur Hotel adalah penyimpanan informasi lengkap tentang hotel yang
                                      ada di sekitar tempat wisata</p>
                                  <button class="btn-masukAdmin btn rounded-3"><a href="#/hotel"><strong>MASUK</strong></a></button>
                              </div>
                          </div>
                      </div>
                      <div class="col-md-4">
                          <div class="card-admin h-100">
                              <div class="card-admin-body">
                                  <i class='icon-AdminCard bx bx-photo-album'></i>
                                  <h3 class="card-admin-title">Gallery</h3>
                                  <p class="card-admin-text">Fitur Gallery adalah penyimpanan foto-foto tentang destinasi wisata
                                      yang ada di Yogyakarta</p>
                                  <button class="btn-masukAdmin btn rounded-3"><a href="#/galleryadmin"><strong>MASUK</strong></a></button>
                              </div>
                          </div>
                      </div>
                      <div class="col-md-4 offset-md-2">
                          <div class="card-admin h-100">
                              <div class="card-admin-body">
                                  <i class='icon-AdminCard bx bxs-user-detail'></i>
                                  <h3 class="card-admin-title">Review</h3>
                                  <p class="card-admin-text">Fitur review adalah penyimpanan tentang ulasan pengguna soal tempat
                                      wisata yogyakarta</p>
                                  <button class="btn-masukAdmin btn rounded-3"><a href="#/reviewadmin"><strong>MASUK</strong></a></button>
                              </div>
                          </div>
                      </div>

                      <div class="col-md-4">
                          <div class="card-admin h-100">
                              <div class="card-admin-body">
                                  <i class='icon-AdminCard bx bx-user'></i>
                                  <h3 class="card-admin-title">Profil</h3>
                                  <p class="card-admin-text">Fitur profil adalah informasi personal admin website JeJak</p>
                                  <button class="btn-masukAdmin btn rounded-3"><a href="#/profil"><strong>MASUK</strong></a></button>
                              </div>
                          </div>
                      </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    `;
  },
  async afterRender () {
    //   active side bar
    // const navLink = document.getElementById("dashboard-link");
    // navLink.classList.add("active");
    // // render item wisata
    // const itemContainer = document.getElementById("content_container");
    // const response = await WisataSource.getWisata();
    // const datas = response.data;
    // datas.forEach((data) => {
    //   itemContainer.innerHTML += `
    //   <div class="card shadow p-3" style="max-width: 400px; max-height:100%; height:800px">
    //     <img src="${data.url}" style="width: 100%; height:200px; object-fit:cover">
    //     <a href="#/cobareview/${data.id}" style="text-decoration: none"><h5 class="text-dark mt-3 mb-3">${data.nama}</h5></a>
    //     <p>${data.kategori}</p>
    //     <p>${data.lokasi}</p>
    //     <p>${data.deskripsi}</p>
    //   </div>
    //   `;
    // });

    // grafik
    const dataWisata = await WisataSource.getWisata ();
    const dataHotel = await HotelSource.getAllHotel ();
    const dataReviewWisata = await ReviewSource.getAllReviewWisata ();
    const dataReviewHotel = await ReviewSource.getAllReviewHotel ();

    const totalDataAlam = dataWisata.data.filter (data => {
      if (data.kategori === 'Alam') {
        return data;
      }
    });
    const totalDataBudaya = dataWisata.data.filter (data => {
      if (data.kategori === 'Budaya') {
        return data;
      }
    });

    JSC.Chart ('chartDiv', {
      type: 'horizontal column',
      title_label: {
        text: 'JeJak in Numbers',
        style: {
          fontFamily: 'Montserrat',
          color: '#2C3639',
          fontWeight: 900,
          fontSize: 26,
        },
      },
      legend: {
        position: 'right top',
        defaultEntry: {
          style_fontFamily: 'Montserrat',
          width: 90,
          margin: 3,
          checkbox: {enabled: true, size: 16},
        },
      },
      series: [
        {
          name: 'Wisata Alam',
          points: [{x: 'Total Data', y: totalDataAlam.length}],
        },
        {
          name: 'Wisata Budaya',
          points: [{x: 'Total Data', y: totalDataBudaya.length}],
        },
        {
          name: 'Hotel',
          points: [{x: 'Total Data', y: dataHotel.data.length}],
        },
        {
          name: 'Review Wisata',
          points: [{x: 'Total Data', y: dataReviewWisata.data.length}],
        },
        {
          name: 'Review Hotel',
          points: [{x: 'Total Data', y: dataReviewHotel.data.length}],
        },
      ],
    });
  },
};
export default DashboardPage;
