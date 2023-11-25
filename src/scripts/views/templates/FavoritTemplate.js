const createWisataTemplate = (data) => `
    <div class="card" style="width: 18rem;">
      <img src="${data.url}" class="card-img-top" alt="...">
    </div>
    `;

const createDetailWisataTemplate = (data) => `
    <div class="card" style="width: 18rem;">
      <img src="${data.url}" class="card-img-top" alt="...">
    </div>
    `;

const createHotelTemplate = (data) => `
    <div class="card" style="width: 18rem;">
      <img src="${data.url}" class="card-img-top" alt="...">
    </div>
    `;

const createDetailHotelTemplate = (data) => `
    <div class="card" style="width: 18rem;">
      <img src="${data.url}" class="card-img-top" alt="...">
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
