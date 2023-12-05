import WisataSource from "../../../data/wisata-source";


const GalleryPage = {
  async render() {
    return `
    <section class="galleryItemCard">
      <div class="container">
        <div class="row gy-5">
          <div class="col-md-12 mx-auto">
          <h1 class="gallery-title fw-bold text-center mb-5 mx-auto">Galeri</h1>
            <p class="gallery-desc text-center mt-5">Selamat datang di halaman Galeri Jelajah Jogja!
            <br />
            Jelajahi keajaiban alam dan budaya di wilayah Jogja melalui galeri foto kami. Setiap gambar adalah potret indah dari tempat-tempat wisata yang menakjubkan, memperlihatkan keunikan dan kecantikan khas Jogja.
            Galeri ini tidak hanya sekadar koleksi gambar, tetapi juga sumber inspirasi untuk rencana perjalanan Anda selanjutnya. Temukan tempat-tempat yang ingin Anda kunjungi, dan biarkan diri Anda terbawa dalam pesona keberagaman dan kekayaan budaya Jogja.
            </p>
            <div class="btn-filter d-flex mt-5 mb-5 justify-content-center mx-auto" style="width: 400px;">
              <button type="button" class="btn active" data-category="all">All</button>
              <button type="button" class="btn" data-category="alam">Alam</button>
              <button type="button" class="btn" data-category="budaya">Budaya</button>
            </div>
            <div id="gallery-content" class="d-flex flex-wrap justify-content-between"></div>
          </div>
        </div>
      </div>
    </section>
    `;
  },

  async afterRender() {
     // active navbar
     const galleryLink = document.getElementById("link-gallery");
     galleryLink.classList.add("active");
     // end active navbar

    const gallery = await WisataSource.getWisata();
    let datasGallery = gallery.data;
    const galleryContent = document.getElementById("gallery-content");

    function renderGallery(data) {
      galleryContent.innerHTML = "";
      data.forEach((item) => {
        galleryContent.innerHTML += `
        <div class="gallery-card border-0 mb-5 mt-5 position-relative" style="width: 300px;"><a href="#/detailgallery/${item.id}">
          <img src="${item.url}" class="card-img-top z-index-0 rounded-2" alt="${item.nama}" style="height: 200px;">
          <p class="gallery-card-title rounded-2 mb-4 fw-bold position-absolute z-index-1 mx-auto text-center" style="bottom: 0; left: 0; right: 0;">${item.nama}</p>
          <div class="p-2" style="text-align: justify;">
          </div>
        </div>
        `;
      });
    }

    renderGallery(datasGallery);

    
    //FILTER KATEGORI
    const filterButton = document.querySelectorAll('.btn-filter button');

    filterButton.forEach((button) => {
      button.addEventListener('click', () => {
        const category = button.getAttribute('data-category');
        if (category === 'all') {
          datasGallery = gallery.data;
        } else {
          datasGallery = gallery.data.filter((item) => item.kategori.toLowerCase() === category);
        }
        renderGallery(datasGallery);

        filterButton.forEach((btn) => {
          btn.classList.remove('active');
        });
        button.classList.add('active');
      });
    });
  },
};

export default GalleryPage;
