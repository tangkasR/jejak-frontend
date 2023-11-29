const createWisataTemplate = (data) => `
    <div class="card" style="width: 18rem;">
      <img src="${data.url}" class="card-img-top" alt="...">
    </div>
    `;

const createDetailWisataTemplate = (data) => `

    <div class="col-md-8 mx-auto">
      <h2 class="text-center fw-bold">${data.nama}</h2>
      <img src="${data.url}" class="card-img-top" alt="${data.nama}">
      <p class="location text-left d-flex gap-2 mt-3 fw-bold">
      <i class='bx bxs-map bx-sm'></i> ${data.lokasi}</p>
      <p class="subtitle mt-4 mx-5" style="text-align: justify;"
        data-aos="fade-up"
        data-aos-delay="50"
        data-aos-duration="2000">${data.deskripsi}</p>
    </div>
    `;

const createHotelTemplate = (data) => `

    <div class="col-md-8 mx-auto">
      <h2 class="text-center fw-bold">${data.nama}</h2>
      <img src="${data.url}" class="card-img-top" alt="${data.nama}">
      <p class="location tex{t-left d-flex gap-2 mt-3 fw-bold">
      <i class='bx bxs-map bx-sm'></i> ${data.lokasi}</p>
      <p class="rating">${data.rating}</p>
      <p class="subtitle mt-4 mx-5" style="text-align: justify;"
        data-aos="fade-up"
        data-aos-delay="50"
        data-aos-duration="2000">${data.deskripsi}</p>
    </div>
    `;

const createDetailHotelTemplate = (data) => `
    <div class="card" style="width: 18rem;">
      <img src="${data.url}" class="card-img-top" alt="...">
    </div>
    `;

const createLikeButtonTemplate = () => `
  <button aria-label="like wisata" id="likeButton" class="like" style="z-index: 999;">
     <i class="bx bx-heart" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike wisata" id="likeButton" class="like" style="z-index: 999;">
    <i class="bx bxs-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createWisataTemplate,
  createDetailWisataTemplate,
  createHotelTemplate,
  createDetailHotelTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
