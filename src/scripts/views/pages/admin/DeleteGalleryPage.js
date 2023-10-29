import WisataSource from "../../../data/wisata-source";
import ReviewSource from "../../../data/review-source";
import HotelSource from "../../../data/hotel-source";
import GallerySource from "../../../data/gallery-source";
import { async } from "regenerator-runtime";
import UrlParser from "../../../routes/url-parser";

const DeleteGalleryPage = {
  async render() {
    return `
      <navbar-admin></navbar-admin>
      <div class="container-fluid">
        <div class="row">
          <sidebar-element></sidebar-element>
          <div class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <div
              card
              class="d-flex align-items-center justify-content-center text-white text-center"
              style="min-height:80vh; width:100%; z-index:100;"
            >
              <div
                id="container-item-foto"
                class=""
              ></div>
            </div>
          </div>
          <div id="overlay" style="z-index:-1"></div>
        </div>
      </div>
    `;
  },
  async afterRender() {
    // get id
    const url = UrlParser.parseActiveUrlWithoutCombiner();

    // menonaktifkan navbar user
    const navbar = document.querySelector("navbar-element");
    navbar.style.display = "none";

    // hapus footer
    const footer = document.querySelector("footer-element");
    footer.style.display = "none";

    // eksekusi logout
    document.getElementById("btnLogout").addEventListener("click", async () => {
      localStorage.removeItem("id");
      window.location.replace("#/login");
    });

    // active side bar
    const navLink = document.getElementById("gallery-link");
    navLink.classList.add("active");

    // get data foto
    const containerItem = document.getElementById("container-item-foto");
    const foto = await GallerySource.getGalleryById(url.id);
    const data = foto.data;
    console.log(data);
    containerItem.innerHTML += `
      <img src="${data.url}" alt="" style="border-radius:10px" class="shadow"/>
      <h5 class="my-3">Apakah anda ingin menghapus gambar ini?</h5>
      <div class="d-flex align-items-center justify-content-center gap-3">
        <button id="ya" class="text-white" style="outline:none; border:none; background:none">Ya</button>
        <button id="tidak" class="text-white" style="outline:none; border:none; background:none">Tidak</button>
      </div>
    `;

    // eksekusi delete
    document.getElementById("tidak").addEventListener("click", () => {
      window.location.replace(`#/gallerywisataadmin/${data.wisatumId}`);
    });

    document.getElementById("ya").addEventListener("click", async () => {
      await GallerySource.deleteGallery(url.id);
      window.location.replace(`#/gallerywisataadmin/${data.wisatumId}`);
    });
  }
};
export default DeleteGalleryPage;
