import WisataSource from "../../../data/wisata-source";

const GalleryPage = {
  async render() {
    return `
    <section class="galleryItemCard">
      <div class="container">
        <div class="row gy-5">
          <div class="col-md-8 mx-auto">
            <div class="input-group mb-3 mx-auto">
              <input type="text" class="form-control" id="searchInput" placeholder="Cari Tempat Wisata">
              <button class="btn btn-outline-secondary" type="button" id="searchButton"><img src="./icons/search.png" style="width:20px"/></button>
            </div>
            <div id="gallery-content"></div>
          </div>
        </div>
      </div>
    </section>
    `;
  },

  async afterRender() {
    const gallery = await WisataSource.getWisata();
    const datasGallery = gallery.data;
    const galleryContent = document.getElementById("gallery-content");

    function renderGallery(data) {
      galleryContent.innerHTML = "";
      data.forEach((item) => {
        galleryContent.innerHTML += `
          <div class="gallery-card border-0 mb-5 rounded-bottom-5 position-relative">
            <img src="${item.url}" class="card-img-top" alt="${item.nama}" style="height: 400px; object-fit: cover">
            <div class="p-4" style="text-align: justify;">
              <h2 class="card-title fw-bold">${item.nama}</h2>
              <p class="location-text d-flex align-items-center gap-2 mt-5">
                <i class='bx bxs-map bx-sm'></i>
                ${item.lokasi}
              </p>
            </div>
          </div>
        `;
      });
    }

    renderGallery(datasGallery);

    const searchInput = document.getElementById("searchInput");
    const searchButton = document.getElementById("searchButton");

    searchButton.addEventListener("click", () => {
      const keyword = searchInput.value.toLowerCase();
      const filteredGallery = datasGallery.filter((item) => item.nama.toLowerCase().includes(keyword));
      renderGallery(filteredGallery);
    });
  },
};

export default GalleryPage;
