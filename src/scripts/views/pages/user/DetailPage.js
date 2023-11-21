//coba

import UrlParser from "../../../routes/url-parser";
import WisataSource from "../../../data/wisata-source";
import HotelSource from "../../../data/hotel-source";

const DetailPage = {
  async render() {
    return `
  <section class="alamItemCard">
            <div class="container">
                <div class="row gy-5">
                    <div class="col-md-12" id="wisata-content">
                        
                    </div>
                </div>
            </div>
        </section>
    `;
  },
 
  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const wisata = await WisataSource.getWisataById(url.id);
    const wisataContent = document.querySelector('#wisata-content');
    console.log(wisata);
    wisataContent.innerHTML += `
    <h2 class="text-center fw-bold">${wisata.data.nama}</h2>
    <p class="location-text d-flex align-items-center justify-content-center gap-2 mt-3 fw-bold"><i class='bx bxs-map bx-sm'></i></i> ${wisata.data.lokasi}</p>
    <img src="${wisata.data.url}" class="card-img-top" alt="${wisata.data.nama}">
    <p class="subtitle mt-5"
    data-aos="fade-up"
    data-aos-delay="50"
    data-aos-duration="2000"
  >${wisata.data.deskripsi}</p>
    </div>
    `;
  },
};
 
export default DetailPage;