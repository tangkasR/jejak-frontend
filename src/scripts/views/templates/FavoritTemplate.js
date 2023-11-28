const createWisataTemplate = (data) => `
<section class="dark">
	<div class="container py-4">
      <article class="postcard dark blue">
        <a class="postcard__img_link" href="#">
          <img class="postcard__img" src="${data.url}" alt="Image Title" />
        </a>
        <div class="postcard__text">
          <h1 class="postcard__title blue"><a href="#">${data.nama}</a></h1>
          <div class="postcard__subtitle small">
            <p>
              <i class="bx bxs-map mr-2"></i> ${data.lokasi}
            <p>
          </div>
          <div class="postcard__bar"></div>
          <div class="postcard__preview-txt">${data.deskripsi}</div>
          <ul class="postcard__tagbox">
            <li class="tag__item"><i class="bx bxs-category mr-2"></i> ${data.kategori}</li>
          </ul>
        </div>
      </article>
  </div>
</section>
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
<section class="dark">
<div class="container py-4">
    <article class="postcard dark blue">
      <a class="postcard__img_link" href="#">
        <img class="postcard__img" src="${data.url}" alt="Image Title" />
      </a>
      <div class="postcard__text">
        <h1 class="postcard__title blue"><a href="#">${data.nama}</a></h1>
        <div class="postcard__subtitle small">
          <p>
            <i class="bx bxs-map mr-2"></i> ${data.lokasi}
          <p>
        </div>
        <div class="postcard__bar"></div>
        <div class="postcard__preview-txt">${data.deskripsi}</div>
      </div>
    </article>
</div>
</section>
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
