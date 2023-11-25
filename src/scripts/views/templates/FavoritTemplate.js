const createWisataTemplate = (data) => `
    <div class="favorit_list card" style="width: 25rem;">
      <img src="${data.url}" class="card_favorit" alt="...">
      <div class="detail_favorit">
      <h5 class="favorit-title">${data.nama}</h5>
      <p class="favorit-text">${data.lokasi}</p>
    </div>
    </div>
    `;

const createDetailWisataTemplate = (data) => `
    <div class="favorit_list card" style="width: 25rem;">
      <img src="${data.url}" class="card_favorit" alt="...">
      <div class="detail_favorit">
      <h5 class="favorit-title">${data.nama}</h5>
      <p class="favorit-text">${data.lokasi}</p>
    </div>
    </div>
    `;

const createHotelTemplate = (data) => `
    <div class="favorit_list card" style="width: 25rem;">
      <img src="${data.url}" class="card_favorit" alt="...">
      <div class="detail_favorit">
      <h5 class="favorit-title">${data.nama}</h5>
      <p class="favorit-text">${data.lokasi}</p>
    </div>
    </div>
    `;

const createDetailHotelTemplate = (data) => `
    <div class="favorit_list card" style="width: 25rem;">
      <img src="${data.url}" class="card_favorit" alt="...">
      <div class="detail_favorit">
        <h5 class="favorit-title">${data.nama}</h5>
        <p class="favorit-text">${data.lokasi}</p>
      </div>
    </div>
    `;

const createLikeButtonTemplate = () => `
  <button aria-label="like wisata" id="likeButton" class="like">
     <i class="bx bx-heart" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike wisata" id="likeButton" class="like">
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
