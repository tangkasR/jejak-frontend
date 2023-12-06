import WisataSource from "../../../data/wisata-source";
import GallerySource from "../../../data/gallery-source";
import UrlParser from "../../../routes/url-parser";


const detailGalleryPage = {
  async render() {
    return `
    <section class="detailGalleryCard">
      <div class="container">
        <div class="row gy-5">
          <div id="wisata-content" class="d-flex flex-wrap justify-content-between"></div>
          <h2 class="text-center mb-5 mx-auto"
          data-aos="fade-down"
          data-aos-delay="50"
          data-aos-duration="1000">Gambar dan Foto Wisata</h2>
          <div id="detail-gallery-content" class="d-flex flex-wrap justify-content-between"></div>
        </div>
      </div>
    </section>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    
    const wisata = await WisataSource.getWisataById(url.id);
    const wisataContent = document.querySelector('#wisata-content');
    wisataContent.innerHTML += `
    <div class="main-detail-gallery">
      <h1 class="detail-gallery-title text-center fw-bold mt-2" 
      data-aos="fade-down"
      data-aos-delay="50"
      data-aos-duration="2000"
      style="color: #3f4e4f;">${wisata.data.nama}</h1>
      <hr
      class="hr"
      data-aos="fade-up"
      data-aos-delay="50"
      data-aos-duration="500"
      data-aos-easing="ease-in-out"
      />
      <p class="subtitle mt-5"
      data-aos="fade-left"
      data-aos-delay="50"
      data-aos-duration="1000"
      style="color: #3f4e4f;">${wisata.data.deskripsi}</p>
      <div class="image-container" style="overflow: hidden;">
        <img src="${wisata.data.url}" class="card-img-top rounded-4 mb-5" 
        data-aos="fade-right"
        data-aos-delay="50"
        data-aos-duration="1000" style="height: 600px; object-fit: cover;" alt="${wisata.data.nama}">
      </div>
    </div>
    `;

    const detailGallery = await GallerySource.getGalleryByWisataId(url.id);
    let datasDetailGallery = detailGallery.data;
    const detailGalleryContent = document.getElementById("detail-gallery-content");

    function renderDetailGallery(data) {
      detailGalleryContent.innerHTML = "";
      data.forEach((item) => {
        detailGalleryContent.innerHTML += `
        <div class="detail-gallery-card border-0 mb-5 position-relative" 
        data-aos="fade-left"
        data-aos-delay="50"
        data-aos-duration="1000" style="width: 350px;">
          <img src="${item.url}" class="card-img-top z-index-0 rounded-4" alt="${item.image}" style="height: 200px;">
          <div class="p-2" style="text-align: justify;">
          </div>
        </div>
        `;
      });
    }

    renderDetailGallery(datasDetailGallery);

    
  },
};

export default detailGalleryPage;
